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
    "5EbVnkPUTLHq8Fr8nAetoVZD24W25zQFYmGPtAXaXJFw39ZPjKbkREDHRWHNN5QYjjzVL2Q8vWisCvGRk5QdfXEU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oDkc3p6VgcMxEnTzs2tJQ2LEbmmhqijPQvDxZDuGitcwsoTsPouFwt8Qy7zMYxevd7K492baAaR6yNg9SaZJxXB",
  "key1": "5fJQoXo9Bz3JjhnppHBHvQUMj3RkA4agqfY6rKMfiVDRRppf113ms54Sh6hHqAueG1x1EdudWkQAX6L7D7E7cnA1",
  "key2": "2wXT4W2SyHyvzJ7NeWx8RsJqnjjxvjEfd5AP2rCJj78SnNUyouf1n55DKRx7qMkRXQLFvakf4BkfUxU2ZrLC17Mn",
  "key3": "54488SLuwTZbNw8tchjB5sbV6rsNrRdMtQ7C7VKzebtdNmFcx3ry3dQa1V6i5op3UK4k7mZyNDciPBssnPHH6dUd",
  "key4": "3Hbbypt2LTxcbVj6VJXmdEU7dR7Hyo72D7bqSxgELc55nN322V7CWEFoMUtBy1Qba5SSEYZHR1gcjzipMfbv1SWK",
  "key5": "my6sqBiH2NjtJYFb7gaAKhkA78yabeQNi77b1B9Qin5EwHqkHyCXVjfVuDGTZYy5vmeiqSJbYUiQfDk86dF7Eqb",
  "key6": "2W41agg5Rfkn6yAyG9Q5HHZXQvK6vtKf4N948838ueua8pQBrRb8chBZoSCRHnQBdHYwfBAYSKeHcAPW57ximnAC",
  "key7": "3Q79hSTwEJVEpWrQHtXgKmt7uh1hiC2Gre6Jeq2Xf4x5mPiei8aMDMCj19kpajuo4eSbRyibsNhraQvkQXhpYiEm",
  "key8": "yucE29D8oiupQdNmfkXuRtev11CJmPnD23iSr4mvrvVu6geFCW2w8y9yNboipTvCQye1HbwEhGeRx4pr9cjg8Qo",
  "key9": "2364GXg9s59mYbTEoWvF4rf4ymk4atkuczyqvG14TjMGjgHiRd72U1dMAgN59zkmMdJjiuFpdgxKLDoShG2h75xy",
  "key10": "3WzmuRipn8yNZZozuAwkYWoqrw827KQ1KpbnmtGkPAs2cDxfn7yeZRRLSs5cTcnCAFTPBFSXaivSKX9T5SnbKjGo",
  "key11": "5xiSwK9yzWgNL4K6ogYok6jbeswEqWVwhXRfYzMD7anWSdVrCpdeWAW5WtsyTGvwS6AStSq1ynipKnZr4PVzjJum",
  "key12": "54gWArpnZLE9LdUmWpkNi8t8CxBqhUM2jKVDqN2vh7mghogSyJodq6Njs1cH9SP3YKoGSAUoV89HN6qT4cNp3p3s",
  "key13": "667mEkc8rto5NvtFTptChrReGGMfehZSQ7v7HHBS7i9T7GEopB6VAB7i1qCswYX46YdtDC3k5CRX2pzzkXz5dvRC",
  "key14": "29oG1nS3up92okEMaynp6iuSqHoyuAxnfWNp2zjS2fZzAMkFRDGespVsxLM6yFxJ2wkFjeiycEP1n7MsLou2WgnL",
  "key15": "5L6wiSEgXa6L9p6wDTB9yxrrHppm7rL7ccsb9UDUtibiiDn5D3MT9ns3EoAeWgKyz5T3ymq6dwVAsusFaf8eWSyJ",
  "key16": "ZZtyBGKxdTZsngLbZzQtwYLemxTuzvG4zq9aEiSJHbU72oVuYuC1NpDft67BHsDGzTVBZKcG3bjwsL8wjKGJipK",
  "key17": "3xrnTJkeoBshREwmajqWjSZ5ipWjN7GbTHuwmQ7xfuT4G2tf4cHu4LbedTTwqf8a1P6d8usECgCkQT6Lsi6gQcoi",
  "key18": "31HRh3P7SRN1H9h2aFBpuDanLKeRcYJts1nY7vuZaRh7PQUDGiupN1DczTFa7bYQGzXcdKqAUcxCN9z9iAm2hvbn",
  "key19": "5amSkXUGcssk3RJqB4dUHQXrzsuLkJ7HHLsRsiMUQE6tfqtiGDhRafQXwAVrjtTRo8iYbehFifeLGfkJoFgxu574",
  "key20": "5KErPBv4g7TiezQmt7fWLxgCFSJb22N3oNeed2HBiXPthnvsGhtTjMABrRu7N43Hp8HEg2tNKyitEN1Ypxf2vj9z",
  "key21": "3srHCSsJhLLyEpaLevcRoyQz5PWWjDGSEi5iUdqGBkLiYmmq2h5jBQDLUqkustSaL9gK1YEjvk3D7cfNpGHY6qVi",
  "key22": "o2LQxN89fDZTEcDUHncVEpbfeFgfJLhjWGtAf2uYcs8hx2kU9q1K8sY7YSpZgtHxeHGGmu8Aiz3QLgDy3B1AoWv",
  "key23": "2y5Lh7LCvoNZLut5gyZr8ouMe1nC8aFerQDPdwMBhsDbiKwkGS7KrcnyrA8hcFgFyTktjfMmnNSF3P4Zyb8ZgWhS",
  "key24": "2tbhqt5HurXgrbsT4qs7zfPgu24N72pMUduxtBKGDqMwZMcv81gYv4KhaT5mGdCNHAHYsD8kboxX1MpXRXpUud5",
  "key25": "4UqzvSaayVCVjLxPxQHtULBBxRhgNNGSCByusfbLiQGnVRwVUbtQXtcR2vxDqaaJXSpaV6MNCuFzJbUEV4dijkpi",
  "key26": "4vBVzdM6QRpKY5x6zHmjdPDvXzUKEgca8d2REjARUr9p2yxji1WhVHMN73XTHimqhPQUBU2ntKzJZW4TnUKBWnvP",
  "key27": "5t5mv4WrEhMjyFGtEXtATdWFTzp6tDbpy4mtSWUNwGvuJKJMPGBC8oANXCaTtnQs79xQCizaihU6nbJHxKtzBcNv",
  "key28": "2ztupQMhAwngUmPiMxs3YoLEDvYSxTrsvcs8VV8gtMtC84Nt7WexkqVeT4cujsjksppRV88QzWmjDxRonZGkCFBn",
  "key29": "47uWBCmkrDCam8qNjefNHi7HQ3uERJ1sUCvqfsMtJA4DeBbAyRk8SKAZwvqK2V5pmNkoWMa8aGw8ZgSRv9suhyQE",
  "key30": "4ATbSmsZpb7yFZdcZLxjSefuT2Q36TspqEJfrbwe3LxEVf8JiH7P7Wi6RFEACCBcCBz4AsSZhVNrFgC9ARAUNf42",
  "key31": "4QkSPEWvravPzG6K34qNUgrGzjKZSKYiGmyRMDdx4LE6a2kahTQYssuouzMsQbPurX893RhkZ4f59R7Bu7BJ49zs",
  "key32": "2ys1WU9djpUKzq72WQ8cgtQhnTak9GFevHT2fRhy8hCrikJiMnGTcNM3qJcUmhoJY4BjzyVV44o7YzmsTg7fKmPh",
  "key33": "4VGbHPMXZ9WuSgSP5LcKQvtt29dzQAsBAha22wsXBBR7tHhDaHBx3aRLJ6bjoZZv6eFWBzWB29uZLfSnpDCCcYoX"
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
