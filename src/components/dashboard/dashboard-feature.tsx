/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "463fFCdta72rFFZ1JDAk9AYdtp69v7nzuz2VzbVfUBw9tKXUgAQAtYmB5UXE47VhR4VjhTEQb3TZjT4Esf6pixzK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65WhrzgZ62LJK1vSSYUE3efKTy1ba3f9dxGzqwcyK5VSUjBTmia4BTLyCAvx5BT1TJF3NoW2CyAYwsxBxcajnkTq",
  "key1": "4iABSHig4RHid72rnEPdk8gRNsUeHfa9hz4Y3W5BkRGyPFkJ5PgwJQRpzBkvM6TswJkvVeBB1bmJiUMtjFfLc7K",
  "key2": "4a7hK4rdiJMSnurffYbB2WxScyiFksMA9ud3nyHF8EdLV4FGEwnWwCjQkLVgPgDP27esh6guzMoPw3UW4RxBd3PA",
  "key3": "4HJHoZUaEqDbvmAibb6AArtFWKmasnsCari1VwERLCi5axaVBW5Y6h5YhnXWfzjPhYfw7PN8QxEhoEe7qFjZJjFW",
  "key4": "4BsCXGuV7Fr8evV3bcRuELFPrqkQrxAzeuHCgaX8xw8j9NYzcgH3FvqAyXhkyNmLTkfm963m56iZGaa2RehUKR7r",
  "key5": "5E9mEp84koXRa4wBbX19iuYL2HPuzdiE6idivz8U9zai2rdJ5TUz5bguLEHL9jZmURQm29PFn2gHk1PqKdcFzXgb",
  "key6": "2cqR8CXMxcSan59kBV2XBadoZGeRJJ7jPyYQzBT3zmozJcYYUGwiUXz9HZfCpmHE85skVbYe4CZuznZ6G9gs5wu1",
  "key7": "7gQHXxd5oGcD9UEv6yEXRcXGmHKKpy1g9ncCn86nv9CJG2ucx5kSUWUzqj2W3YJG3sxKDw5DbZj7jQHYktHcQg7",
  "key8": "54DpSXqtgJfiCkn4YBtbHWSjHbKh7vrsDSbcaPi59aPLmUtakvDgmRh3hUMhx152fKkFQ2TiHNMpGhFakwfKgCnF",
  "key9": "4paneHznncNrze739PDb2LLH52gWoLvMifZwcJqhMZ3AbdBV5Gfqt7uxjijr7HCPkcuubXWWvbekT6urbbbtLgLR",
  "key10": "3YaySqKDvA7w3QV1XvAUQesUujA5oBZxdFAFd3sP6qB2aHLhNgewy7NumXEMWzXs1BMfQyGxTEAQ4JwAbw8CyK8v",
  "key11": "6644tzC1JLowJx4nx4BEiSABtgBT1WPELxwcixFkrL27hpPStDCrss7uaaoDMnmeDemf2yUksfrnMVmjJMdoSK65",
  "key12": "5tZNhpJG2zhbnvWR6uKH8Yrro5UrwcL2YCmhjrXP1LGbgqo5RwitgGnfTVzwaXfKMhKnFQF8zqh6qE9N4JFvbLv1",
  "key13": "5hAwx2kxrcdbGFBzzRU3zowq2Se7NyBRaPsfsAZi2uQE7FByqmWZ8o9i2FMohFuBwcZm22V74EeJvUWynMyVVZZt",
  "key14": "3kexG27r7adADojsnZ4zT562EUzR9qjDaZDqSaXxcX86oS97Pdebn9KDN8LZufqSGRopLbyRKQEpdMahznMUvBhQ",
  "key15": "XQ6dWiZbS8hCJck8UMNSDKEaj9Nyi2hiibz1EKLBC9uJQBLS6WRabm6cRmBXZaoufbRcJegZANG9HV9z8P1Pueu",
  "key16": "2BfwzURaEZ6PoAnijH7dFEc5smAvft7jpJNhkuETu3twafZE8WtMHXAN54VVKJBjaEfYWEDPnA7GtXkZ8i42NSGt",
  "key17": "43BwaFs6Cfm3fa3wag4EPeLQd84Fnuo8UdbpjpPhTyML9yYXqRnKTtuenHWedwFwLGbhZR8ace1wyhzrckTiR9bi",
  "key18": "4anjAhgg4NCT7WRev5H3zeuVaKpFFRW8yBDCGCCuUGcYKcqc9nEvhbNFDdfHAHzbniraQjHC8caBu1512svaEbiv",
  "key19": "4HTdox6DCEpbUH4fPw7KyUj4iLYM8tzP527mieSECLpJhQq9vGtXmfGJ7wcVdBzi8kP5f1DMJERyh8JFHnXNHr1B",
  "key20": "4LD5Eojoa144Bh9sEZpUiXzm7ttGJqGJn4qnf75EAAuz6kq4xycEo5DMjUh7s226wRPg8iUd4Y8CiDyVwo7VJDNG",
  "key21": "4ekXSA5UwGMfh5HKEyZCBBY19qEAjTNzkeGbQSMxQJEZYDx44QLLVQWCvfyN2bnGjE52ULwQjKzG71t6Z93kvCX7",
  "key22": "3U2YVuGivLcMgDhoacU5F81VeddN62vbX4ronE1SKbna9p9iJhjqmEcQxVmH5HQxbLc2LqY5yAB4MKLSM5fxn11e",
  "key23": "KAjTUWppacMeLmN8eb35QT6wXU4b7615AzD2vaQbw5H92VjmP6CeqioyPMpfcQUck4fJTwqbXsrJLjhRe1QHj9z",
  "key24": "57KyXzv75LUF3g2TogPNgwih4XvsDXyHw7dRLBSet5Enom1NSSisxcADvJ4QkJput4Bom1vdXfyp9YQmMkojwwA2",
  "key25": "2BfSqEpnBE24rjcMUe5dzFjsVg7usTa4aK4qv1jy7N3RuCVj9sHGKJVMrAWG2SyPtSzGKM8iwKywkPeSoxbdkAsE"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
