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
    "4ut9DbfjRueGai2Z2begZUi5tgNCPnoDwqKgHGG1uNBkNWPWmEmkwmw5w4e5gMDH5rLvEcM9XkqWCUXGApHXAonD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ik4TJZ3ivZcBXUw7AjyEnMQD43zZCb1iRen5A4wt5htENyuuKPPY6y8fJqpqYEbdbypARurZbMCikErRZS8ajoi",
  "key1": "4xQDKyRrCtqf2HoNTGduGJek7trf2m32oWB6Z3EX9zBVz8ySdiEtAfgf99EVEsyVvvfCkGz9jiJo3BBmdqGidhbH",
  "key2": "2Dx8Ug44KabxYU6WSPJy1xSYGGcYr3TzsfWvyMLVCfSVaaQ5JGkkXak85zmmrVvYsQTBBwGWtK2VzszDBY3XGns3",
  "key3": "5RM4PXie4NdaZBrqFjk9bxCWcd9jX3WfVmEARUedPYMjMmD95vqnVUSBnqkp23cvdwNWNk9zDinke38Rs9H1Y3PE",
  "key4": "4XEJ58JWVd439pXwExRBojdPBv6ugBLySnq8TRU99oxzRJQHsWterc9sRLGHEzSHVRCSYvkvUYi5e6d1rJxAn6Z7",
  "key5": "FdehBtMm1vLuVQeH5fxikjqFD7uvR7tApQzKcB7fpB8s5fVgbF3FrehH2itHuVb5QsGqwcrVqH2siLfhB7WJXBB",
  "key6": "5XAuF2FHJwQaFSdCaYQ1UTnMNjxuzEvwUoMWEfXJvMVa7rq1PgvD6TpXa3M915rzmxGoFRAjEr9pvzVm3A4B2EFm",
  "key7": "3UHNPbdLbdFiFZMnm7EGwoN9YP3HgifQMZNwTkF2VwTbzoqq1YRKqvSESdViZecHDBSfEmLHSjmQBQafsz9MTtsq",
  "key8": "62sFVoa2Nfk1BYwTJwwgkhndSyX9cwqh1FqK9Nb7ddKjG22ku28akFydsLE9KjKQrigeiLrGLt2mjNku7zbEMknT",
  "key9": "2QekoukzpbzFDegqfAw8vQPV7RADQE94qzUxEZuNGW9iuKBLcpoPYXBeL11SxZYn1qxhjfpR9XgxXhcmoo3NyVdb",
  "key10": "3F6oX1cdqwRevXNnjs8CfUqeuaJAVMfvcjSSwm1wD3za5tt58n1mVRuBUUFJ699gCdxfjz2Q1p7mTLuBRCXcWBAW",
  "key11": "2nEQXAW6kCijHZXTRio1PGsAAGS2bYP1q6HBriE92rKriBkunK5p6ThGrnbdm8uRxg82Xpm1YoZYSeSXjmYL65D4",
  "key12": "zadwVY3zyfihR64bpymTuLhAe3CAtQyyfWs2d8vZ41tpEvMHvocLLjimoSuco4ZHNRo8H5zj4wziaiyWfxmS8kC",
  "key13": "3nRhJ329sYFbq6HjhYGEbVoinZCCcouEAd1KntwEarPnVMVnGf78ZAVLZtre1cAc9P51jXNzXu6vBkgHLtAkdTG5",
  "key14": "3Xk4uwRwAA1uVrCcVmYA6utAskbceTfuAQ9HQAcH5ojh8uMhTCLJk5wAhw5akhTfU29xuCpXjtitB62AgdDvBYyJ",
  "key15": "37CSX5gvG376ngaFPUnmsVyYLi8fitgYEcdYVotB2PaYsuHG5EmMnFMDr9VAeC7ceMqasewd7AC9f4NMYf8VVevm",
  "key16": "4awjeja18u82BRfuYMD44ka3DHPt7vTTjCVQNJJv3pGhPcb9r5mXytzH9C1UkiTUnLXCSUmNXsoipRdkmq4kzDEj",
  "key17": "3PUYNvjPq9Evkuj41uzPYFfWKKsSSoDPb2UjSALsV6AKyvLUVJr7QoUAXYmTCrTENschemacUGUyMZaJAWpSmnYg",
  "key18": "2CvWMabYTziMvevxvWDnZt7gBrsHu8fsvxUNRrFgMkiWm7XMRnddbq4s1rRGT1GJbWBERcZkichinzHWXvd84Tr9",
  "key19": "2kTigGbazXhE8qBHCCoAgVZcAipxe3gLo5VLTKUVDAa3oipiXBhMpBkJhDXoSVdFhRfhVB7BrhytMWjKm1o5BGTq",
  "key20": "26xN4RUHwXB2iujwLg4GFSByfbE94sRmDFC1YwL73X9JGYwxMVRvgYa8vVLK2ccQhAFSUxaWD1YKVhbi5mAYMqRu",
  "key21": "3d2LNuGCqutfodyRE19USeaFKAUcLgkcNF7bTCh51b5QHHCt6iaqV4v2MNUSbBgq5nj5tJUv8wUPpJ2EbtnBVz6T",
  "key22": "P1BJegEg8ZFvfSShp5R7JEchsqq64pie9GYjAqDJHYx7yqzuwPaUZMHj3kUgthE7yJbhPA6iyKxWcrRn5UA2T9E",
  "key23": "2Bmmqvoix53jqkGX5nFZMNASAQuy7pZy5rr67AUAQbJhUraQkE21H9fbziYm8A8iN9csZ5nXVxCgAmJwmsjFzxeQ",
  "key24": "3cHETWkdkHcWN5hHWN6Xn6hvAmpeeSJ2EkHb51jNac425dBcTHLqS7NK5sUCXF8EcBzosJGyruFBjJo2hN3qyymj",
  "key25": "3qY45ZRwjHsXzZt1Wk3ReLnVMDWvkH7QdsHoxvsBdqwhtcLbbgAzFn4m4XkoTCNTisuNPdMFUySdkEap4PiApycr"
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
