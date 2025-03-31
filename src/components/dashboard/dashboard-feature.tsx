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
    "4CNjYTzGyecA2QtbK9ndxdC7BkePszms4U5CjoxfMcCavqADNdP8VTixBnEP37FmZGRQjW1ARarMbcFgZdJ4L6Yb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UF2cjGNeN8bFawTFNsAbvHxpSVpuB3N5A1g5wN6My8Vnfxh9R8WiTXWVRQEw8DrntQcJt9ZgNjGLXvvx9HvN4Yg",
  "key1": "8qdWhKHorBx9b5LZ3j26RXsbmbMozqrTPTmVGAVtctBsoSa96ntsMS8VRWLnGfNKJC9UNrBKBjUHP4TJYpy6CQA",
  "key2": "5mnissh2UCzCiAzZq3NP4J6V4FERw4DgbnaoNk5vVZNqiJWoMZMbftKstXm35hAm9MTSiNULT2PYNkkqPs9TCUPi",
  "key3": "qcc4BtSBmnmLYd67W8T9Av6V6FJbLomSy76GUx58y1Dbszf7MLLMwhgQC8yn87bHTXh1vGwcY7zkU4rzTtkDv9k",
  "key4": "2BMUdyNLYjen5b37o6vMyAT5U5jPfjip4gFScmzE1vZ1NdhRsZaVDAU3G6QFGM7DkEBzadm1mBfCtwbB5Ag6QG4K",
  "key5": "5wv2crrMQQ1MRrtKynFkY4qeyfgVzqz6s2LVRB1m5ksToMmBAR9DdsB11mpTA8eSCTqtevtErcCHueM6pyD4mfYM",
  "key6": "4ToYoqVM5rizrPYFrwJnPsYwWfDbHG3kQkgw9AR34VsvBwbwwVHzLdwsu8LbSHHubiv8fZZswDKyMRybWYsBjFPx",
  "key7": "3SCkYteJkdPn7AWdc4KLLGkeq32zEKftmZfQrBwcR3NJaryVQUSi8gVzbCbtYpZ6ppbM4y3fUvJY1CFsZvtthWsK",
  "key8": "3pufhdD3Wfrv2wRP1g6GhzcGhhiR5KWaDFoeFoJH6bWeg5F5u2Czhun8jMnefNWWaZnGtqYubmw7bYr27UgW8UQZ",
  "key9": "5vmoqQhsbYs3LL3fXX6tJJnsXed77uycWLr9Zm7SMigVTxG6KUAPFunkqu3g7iQANmte1iAyySELgkKuYP3TH2c2",
  "key10": "cGvUkbKzyzgD6h18HiqrNzp2oDgJ6ukB9BAQKGoBAqE8PXrvz3yjv7VRUgTHse43LjDauGUc5apbXMLPukKYXBv",
  "key11": "5ZAZZYCQ4r9j9NN8af4rAU2biJ7gJMMNCceqWDWsUBz75a6t3HeGXrDYCMFRvZJvBbWQ31cTZkgJWi3b6Ae4sH3X",
  "key12": "4mfKb8r661HibAfqHjHjLXzpbFjf61n7aiSok9LzETGFrdxLg2SkzLygm1PwD1Pe3XzK1M2hbckZ2x5WQZ6pjqei",
  "key13": "4n7TXo4LnUSy8za17MAWJUgWHEB9xudd39SbtAw1tsZcp8oKGvWni8GZXRn6fr7cQzafLNtKMP9pZCqKdeZsTiEm",
  "key14": "7KCJSuVbRsHfnFghxTCsTvN78TxBMu5GpnkG1ZJaqk2KPJ63a9rbgtjnS37p81SdTU3JZUw8BhH8Lc8XvPsxnha",
  "key15": "66GTsbBvM2EFDXTXzsX5ZbXqiFc6onxSCdkMW14ZxjFv665jz9czKBtiWr3QX46Syss7hiZgndaG4CCNF2zBqfDf",
  "key16": "5K5XPmhLssrfwxFaxYTTsYULyNVE9yw2SWDp1BioPwdVv4cocUZ5kf2pYki61BEqMFxmpY1vFKgCV9co8MUxNA9y",
  "key17": "5i7Wjct9bzpgmDd9mNf8WcyYhXuZ71oDQvtXk3BpCVbGZWQgYW4NaU8QN9yKfPJ2LZihbKB6m834C64ZHBggKZpk",
  "key18": "8VC3uK2gvSwjFDktB2t83GSDmB6mFK9ddxegr4xazdQCKHuYGx9iBMochgKC6Yht8BDJSLG8azjGHnKToeDmHP5",
  "key19": "2s4GFXJZCRe2jToa5Uzqdmk1ctz7UjAwBQdRxAqqxuH2YPq4vemUGb9T2Z1C9N9q8nXdZrVozNfFtS2oPo26eMaF",
  "key20": "5ptAVwquq6PKvjrRTuE8SfLT9KndNC66hiXYYyZf5AZ7w5hch9Do6172igAUEqoMw4eKktgcecCW6VzyvCYDjMZ1",
  "key21": "36hMiYWzDNwC5Q3XMt2Fb737e465YHqeSyP8Hcowz7i4PHcJMAaDUJpN2ZGFaPhgipxFpzkhuEbW6r7giKZN293f",
  "key22": "3ifW1wnYgMBAH6xhVExX52mzA9rHaMzMjVsnmx5ceunyQyfSxqTHAs7UGeXnHTDLbPVLcXMpUgxHxjZemsB6K1Ef",
  "key23": "66i8yPfGn4YDeeZ93ipbU7whAutTgJMNanSvo6j7k7M8UMfeQc7GxM9kNr7XRFVW26qcE1exJAMFcVYqXmZdMJNS",
  "key24": "5EfbjhqMwugCXGdUmfBpAoKZY5sYrYXuvQpUTs7RUeVkFjSaU15T8TCp5LJ68hSDw12ekQaFYrs51YGd9xSc44xD",
  "key25": "2GN3yQpojgdwVFcyXcb1azj9HiPpx6fy2QNwetPZeXAn7VATc1grVQLpGgVYs8DgQeLa2xqF2cMgXnXopaji1L6g",
  "key26": "2oHLnyFLXBYiYi6BRvcoqntARbzFoKe23tugDy6899z17eTGVwzXXs84tKeBqWsbL2oAvwYAa245f7NoBsGNMQpE",
  "key27": "5W4y7zLGUCNrKSMCKLofF6dCWYZzUUHBkr9hfBJWigySdnrZeDrHNoY12Vjrmjj1BjZC2gKqSXGsMdbgC96EjPgy"
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
