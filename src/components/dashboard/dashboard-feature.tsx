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
    "3cyDTD9sx7e7drHW4wAaCXXhG3uWNmGr3x1E2C1MLsozku6NPeGBN4BJNND3G5HhCLVBBWnEtyo327n1pHs4ToGa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51bevAwRrR7gcd8TuGzAXnQ2nGfPz2HRiXpsmqUbsyLdpztSGbCndufUGzSk7nrAQACTqwhjyksgSVMmavfQoyjr",
  "key1": "2hzVBitaP5bFPJ7cgjAkSeem8LqkWwgNYBnybHnW6YNmnr2cjCsQcXXn5SVHfaeKYdFeKP929HSENzbFTZCEZQhx",
  "key2": "5Nbj8ZRhi3d3ywqdQcFizghtLpFA8uzPcnP3Zgi19XuZuXn12CT8S5AX1r8XfYURLeeacYeAFbsqhP2B6KVjxf93",
  "key3": "5u76wiD5V4QcKwWEMPATKwG1xoSnzWRSgRE116dv9NHqzA36vDyo48VqAYpsVCDPz9zJJVwWjQ8XDkfdDXNLDZz6",
  "key4": "3dqwpJ98SFDQ1gnNKqghURQGhU2UeiH9gjUmqdssS9QrJukiLXCTGCsugBGb2fpxX5HYonoZbrGpBL7hRCUQu9Hf",
  "key5": "JT9oWXSKS4BTvbixDQ8cW3eEzWVAYJTpzPSeFw4uiFNX8z7QQwUFdsFDGBE2mZTPTuuTCYm9niA3uDh99Hccgxe",
  "key6": "Mqu7hA5D9vcjgg34BvYPGtigizwYFC6u1iEifkB93MJ4WjPtwQH3VpC3AYX2kQKnZqzrqhVCbAbtH41xFuqpoWU",
  "key7": "2pH4rJHxxG46bSFMBb4zHQk7hSb6oLmrjh3Ha42EUjQipkS5g4ZiZJrWR2VPMUtREzGGbbEB8iT58q9uywozr6xj",
  "key8": "4n9wHN4ychYzxLvL1oawQta8xyXD33BSsAbSMEGDZE68GntuHHGToP5jUwpDvEsu9DTdAfpNm1X9QxXmkxgH5wY",
  "key9": "UdqtqCcEuMeNM6UujWABFeiV4FA8WphRHEbUDEL9GehiQH5pxiNEdVPdHCcS6qvZ1NCB15wkN8Jk8UBv4q9p2Na",
  "key10": "4GKggfvpf9DiW88XxjNvr3GyZBRdaeHjiPBfLmHNaX8HWR4i3FzfLc2CYdARuFyuLd9RbZRjCkF8Wgt75aHoX23v",
  "key11": "2fSmjU536gmWKDrAwRMopMdm47QViRPWLTfibE1qk8AEAPvHULaqEh6RPCoKEA2rMRU6kv2S9bvTwmFGFiGcUsz6",
  "key12": "3Ec2541dxKQdjYwDDLVNfwvctwtwZzU7SYcShzbXmPYnGFrDidYPLs2cNF5g4j9si1WQCq4SMkDcSxgFWG3EYthz",
  "key13": "PR3qG1qQLn77ZfKXQGYiubnSYtvKZAYAoA1mM4ciuDMJd6wAiGLdMXSNoKGm72Xrko3sPR6EdoQMjaGJBPRN4Jd",
  "key14": "3shPncZvD6tndPBFyRqJavLNxXd35f1qaGaDX3vTrZy6AsXfX2ddZ7LqyDB5C4uuGeNr3sjQc4EPuSqMqakAs9jx",
  "key15": "5Es22RdtF6Yut2d7EueB8gyCa4cgEpJ7T2tyPSpztJzP7xbbXc2vELKRZFeDdiheap5HmQRppD2sBspxT68hmNav",
  "key16": "5uP7C5iMtjqgS2skrQKRMNRDDJQvMb9N9XfPXKDkVPLvMHoZcDYAf3uo5BGPqgYZTi8W9j7zBuyoPp9MK2KFhdwx",
  "key17": "4gDkb7JtSnWr5wJntid1ojjHHb3HpaE5GNG4BHRDBbAPGXaWPGddoKKNfmfJd8zkab4TBz5qF9iTzeBEfo8CPJPV",
  "key18": "5m9Uh5f4SYLaWnupoP9hWS2QcAE99MLtEuD9KQWe7UfC5MNA77DwiPWbPsfDs6PpZoBqScoCXhwz9NJfWYCgw5Rr",
  "key19": "4whw33Exdd6xKhLajeuWHV2qswg2bvcn6HPw672NjJUP6vUxrxukJ51ByTxAFMiNuU1sU3Y9ur9QbgWGQR1zsD1i",
  "key20": "4LJ8HCYdbwhr6UXbk22dqaH9wSFZnPq5dq9a5EKSb1w6cRftPoAx3RgtQ4F3WvovUKY1sXbV21Nxsq9g2rdu3vTo",
  "key21": "212MxtL3i7YUP8vYx9eEgzuDBNKGazTjsGiUm2S3uB48f3VBDABTCk7ZkLd2r8jm4NdWuFCcTpKjKCoZm9pkuCMx",
  "key22": "2MtcDwSobgKJdJcuvn7vCUKy4GCVrS5hUjSbXYfBThyLd1zypZKsAc1HYnE8h6ZzRpCktVEhednqYy8K5PP2PBJT",
  "key23": "38yjpKHdT9icQmorVah65P2Xm7qYpg4dnhV2akd3WrKeRweqh7hYtpuRSoHkLmQF1TiYLXEKmfhT71xAtFtjpahm",
  "key24": "h892Pd4GpfzMyts8DEk4cJbdfnMGyN3PrZpvZuKsVz7ykcf3erJAnjb4ovzVTZXJTFJRHGDKyqYow9BUfddN7kc",
  "key25": "GBQs7aWgg1GiiwTQCLaCFKrbmbi9oqLEvGCJyjY1brXiufiveri9EHuNfNurSH1LGB9yTbbr5JCFckFYJiUG58d",
  "key26": "jPTybUwRNayFKKqSdBitqRXgFCjXvtYxZnPZoEnrppw13NMZGzxz77wRed8RN1w6bQdxcqMF9cZTETJdideKTBm",
  "key27": "4tBDVjSdouXRkYB6erPrGEQkvmByfyTJuh8AvtuYeyshxCyuAVVMLa3ycm4sTyS4bjmxAUdq2hQEtibqmCt4Rsn8",
  "key28": "4pZg6Gf34iGzZ2smoxcHq6p2RQ3BEDjA58c7AoQN1C6bH29zHDz6wnRsb7TNg1U7xy2QunKdFbg6584MCuxL9Czb",
  "key29": "2AdjcwxTvVx5c8jXpsEC6u11c13T47Z8aBrV8UGJ76zdWyz7dBk54cgKJKRKWF5QiGceUc3E319mCeCpALHyFQko",
  "key30": "5tBsz4Q8EKXE889q1rnk4uGfNbY4tjDGywZ3M787fm6ohc9nMh7SsNiEBNqonNdF6iMG28WgFATzF1jiQQuh3M2G",
  "key31": "LHfuggcjYcsq33SLLwvbwCfN6CyiqWMDgk8kh79g6qjRLJGiwJCeM4kMshiwwxizyFrSGK8swdJ52hTcfjvK8qN",
  "key32": "1ycqpvfGqFXpDkNg1dFZHuSgrmNMaaTe58x7EhYVtxGD7P8LSquqxXta7EGZUejgjPdRaH1frJJpU8titDEnihM"
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
