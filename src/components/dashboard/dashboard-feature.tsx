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
    "5iFh9cDcHL1YQjCsf9hCdvdtp7jTLt7pUXxiJv4KNCVZZwB4oAPjkMQDLj6zFjuRE8NRms61qTWsRMG3Lnixr7dp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mjEAL2bqxuonhDj9R4E6gz3Seu4kQDsWnGgpHuVYh3WvWEY7YGQahnNQfR7jfrvJbTLBKQDp6r9g2ej7cAofcxd",
  "key1": "2xxJswrHDtHCDiknoaXi5MdkBda2CgVrcJK5TgoFa4pVH7GoNu67fHGFLgRex1hJsfzkznFJYxbVzUbQfWt2NNj4",
  "key2": "37Fsk6FHC8BZHWsCUVC7W8NFRCZZyc1RmFxdQZ6VCEFejENX1yYUGdG8meZh9aFqHKVouFRF43n3oDHpi7okej46",
  "key3": "4eyyXBeQ9uSxZmPq7TiJEaQwAZ9JfRUg5yGmHezjkwcnULXuszVfXdqMEwVctuLS7HpnEL1UQyWNcEEt3PbULEEq",
  "key4": "4SKpKw9c24pdByZTwDCXvDmwmQf8pSt2BQDuBYSjTVKBq6cw6hU4qyJ7kqsA6jhRpQgyPes7Bq4yxbRhUN7mk7XG",
  "key5": "3yhzenMywsd7s1QTn5avw7d2M6bK9eShi4zrqjxEmasMQavCxdPhLLJYdc3m7tN4ujoSRao1H3byzrjtotR2c7fT",
  "key6": "5fF5HULWCEsLVkUzNeCKFCZ34Y5biPGeyh5opr9HMjGN7xRRGmXRDhHKnjzentbKMMcDyqFBL2dh4dKPAZC655mU",
  "key7": "3EYPeNnvMwvY9N5p5TkD7SgkS8bNQoj22WA1pN687XKpdzTDfKAx9aeCVxzsbY8gqsdKeqigxHQeJA6mjgjzKwqH",
  "key8": "2wekvBqc1pR1JFHdLuqz1XKxzqz31UH8SmVJ4uokoCsyWpMz9TsdFKsU72MZFH3qxLPoPDzUAskq12XnxKAzTmA7",
  "key9": "4bmCt8V4HMny8TiopYb4iz5Kwd3qy3H7c3jGMsLZ1Jh9kDxqNWCqQSDkWz6eMCZjRDX9iNPtvXwSyzGcHgJqEE7a",
  "key10": "58CZMAvUVDKu85cxyDSFZQVFkTghxCXcRcttbUH5xg4TqPKYzrufpa2zZ9DSfBsC4UNGnfkNSuZqj7KMEkU6nL3",
  "key11": "3ooogeehWp55mJ58CEBV7CUD4v54QwGXxeXiz3UjMk4sANE1XtwUep9KmRLdPP79PavwZBFDPvcYJJiMEtHbHypz",
  "key12": "37ga3cqiVSDHeimcVTB2tUFrf95jioyfnjfCo3RbpFV1xqpxr6sN86y5RSBCSrvK5o5eGshBAxPpZbxAvbcAZYam",
  "key13": "5AYJzswHErwnSWyDXvQ68EfHznA2ic7PC1Nf6etCJKi68rYZuHxvsvaLEqnM3vMdTxvd9YDZziP7j6rYMzEJHF8F",
  "key14": "44mwHqsNhMRstYqpuaC2hjsAESWKndBeQE37Mpb1SteVkd3Apjurxmooxx7WC2CzT8J5NPJS5jPxnyGaiFAmrJqe",
  "key15": "3oo2gQVvBCiYHu8grj7YrSZFinvfyK3SAjgeovtrNZ6vsYipgXLj976ANJ7mbdGQo8asQfLXBpRUFCrvBxpKry2E",
  "key16": "87eQCGfPBmxZjS9mEcDmuCs6ntZUR78p6paWnBD76GvmaD1i7SqpF4gSuhgXbwk6K3EFixv9qL7zFKjBtHcbGg5",
  "key17": "4u2chQxGeRiguqFwtskKG6uTeJAvi8AzNhnwXQ5pbBaSVXwNZxw3TKvwWaYYCEmTEe7WGRRn7aDxnjc7fY1uVkpR",
  "key18": "4LqdgHpUeRQxWEV1wLx4FHaQCBtmoj8amoVvmk2rj1WMfuivwBY5gxvYg8CW4iQfuzu2JLAKmdSGH2GDe3Vd9DXj",
  "key19": "45RBNooKLkEvqvL3hShr4W4zWT4gnRwvsFDLu1LDmx77iHkoMC13vpSG5jVzmJNaipxWPosQzZnTAdTdwEuA6GQQ",
  "key20": "47iu4hXgpE2Lox4FVHk14GquxktT3CUyx2Q5cYPkHMNKVSAacXMksNghgjbQpNv3JuEd8cHFr2w6gqAM6U8HucVy",
  "key21": "2asGSXGqSsiCwEaB4NiAejXHvSJ1hD1nxx1oRGH3E3NVqLGiEGheak8jLcK3dKc1wochyJ1hAS1eJFXdztriNgsM",
  "key22": "4pkywXwyg55qEVt8p8APEq6nAqGzWUjund4vPAgLcD2Hrmtbye8yAGvk1u1onocMy5fXiJsZoggtJKJCzUMLjkLo",
  "key23": "21V8Vag6D6dcHyh1bc1zQHdZEomG5Kno8epoMiwCKTL136fyZktmJD4sfG79NkCSJoDj6MRHdnysVacyf6YoEWMr",
  "key24": "CVESkFnZXys7YncRCcedrMCUFK989c4zPJXYKn62Cnt3hbQGxw8dDXdcJaLdf2W7xLNfffcwCxsjgFjHBvr6ieq",
  "key25": "2V2TdoRXVTo7oXHYKtzFJsQMKuErnvhnXptKrQS2rvj4mQfXSi1uN2GER23HRQubXUPDDNqWsHX5UqAZuSgiLqJv"
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
