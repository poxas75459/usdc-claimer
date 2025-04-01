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
    "3G4XeWc6rpuyrVbbP59DcFEiuudp8N9zw4mVex2sojXV7PPzGfgBrumBcVqvT9vsJCpThoU7s1ommL6L67fodcvq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k9eay2TZM6Cmfg33V8qEnu3f59sG44VGFnzBBNVVUJtwsWB5HWaDD4rzGfxk5uRNC57Xyhh9u6AZ5k4d5LwYuMW",
  "key1": "5Stzu9DA8SVg9sDraP9a7r9a9aawy4ZVqhetyY5pVscUNWezXcTc6FT14KAwVDiHegSCMuFLLghmXhSqmrWGWubG",
  "key2": "gou8jjBfKMgSgsi6RaoXKiQEXNJxEALFTDaefc8nPFp5rZSFkkXWg8xuHgnQhrkXUFrXvaCWRDJBzUMFm7CZXSg",
  "key3": "5amAbCv29sBh3LgJg7PQiVsXi4BmEGQJckshnsEdcrStf3mPycKBhtg1vBTKBnuN5r9miz9RQYaPTvGMhLU7ERTh",
  "key4": "48nvQqogJDHkhL6BYh3EMZZumNbN7v2TzYbZwCnw7pLmnaTDW6Pqh3Mw9YNgbUwD7NS81KDPbKrzJPqmFA7zLAie",
  "key5": "4Ukkt35VGy6YzTFKTmRbuySocPFcFT8kvVeqBYqdCYhMjRv4eGUzxARjB1J5C25KGqQoffJ4MvFwuUtSLD63Xf3Q",
  "key6": "3ecz2cuyTBt1ppuNhVLbSnwjZW7o3bTqj9Mpwo7qSnggYQSZFxpuoZfCDgkzCbJdTMjQqxQ5ECQVvLMqSR8uSMBz",
  "key7": "dmgjsLdaDn38obNiBBcXUS4vrW3zfKd7rFb1iyt8MQ5a9h8gMtaUmMpohSSt7DVDwPE6ayECuxXmNDUWmPUBgNQ",
  "key8": "2GkNf761sqFcP7ftX8K42dBW2wd2ntqFonD3z49DJcXG1XaeAguBfQDbS65AZ8mdxyVRU1XouuWhDiBabQ5mFZtC",
  "key9": "3V8WY769pvy719iaCTpbf4mFYwtK29RFgjL2Geekp8piK2CkyxHdQcChA4cAVSmdsbi2e9TqafoEQqUsSnfyXKfd",
  "key10": "5LiihyFjLnFAssfskvUhA8PGo6VdLZg8XNbXK9DHWti2oxPqsLGQueipDXP5BTihKKPDBcwKwhDg3E3vjN8gRHx7",
  "key11": "82d7EVLbrwjsndBdkLJTT6iJocnreYRYMyUW9uk7Lz5wwkD6PZZXT3siGXNfdfF5KCwUf6RmQA7rSMFsbPQrHcG",
  "key12": "22df5gKtzDuSRwuN89VTnRA8eCGY2FRM8Yu1VkDm8g5kWHSis1A7SSwze5v5kPYw3H4mo7ZzpFwGzbyxUrL43yku",
  "key13": "25w6D57hnMC9bdoTrXgCkCvcTCRNq99pE61u6bLWLYWikTb52mFzqwB7LQyqPnKFz7uZqrNDVrCyFQzVGN9oQna6",
  "key14": "5Wu4YcxnUypBZcdWuPMsho3CavxquPj8iidE8ZqAQTVYwruzQAXNrvfQWTGH7NvdnN91rag2ZbNsC2QHJhJGn2F6",
  "key15": "4Beb2RZiKa64C9U6PUZaZJCmKUGxLxBDPw1Uc1ke25Q4P5EyfVdcP1gxnFLCdkBHdaw5CncjPxaWxfsnWsHNSqoK",
  "key16": "5xN6j1UwrTFxs55eumvs9yyuxfDiuNMg21oE6ogBzqJ6atKaTCN9WtVHZqoZbpEBfdjZge66QAZaMGx7nVwp9Nbc",
  "key17": "4SWrzbATibiqCRvSxmhmGYbwyDqwQgdxMrA4CX5jL5t3VRwEcTeKR4ta8sZ1HY5AuFB4dWL1NwJw85S53dxB6e59",
  "key18": "5ruPG6pPe9obXXXb78oz7AB73rHCyiY5c9V4cqjXL1MGfSGzoH433yhZuQsYR3m3B3uxA9tRMpnbDRn4pwuamQ4n",
  "key19": "BNyMDT6M8HCQWxEoJ9qdearyrydfUpsg2JgTYxZsma5pX11vAmyoVsiLJbPWmM4dcLaTyH8EVKr1Sj5g5x83thW",
  "key20": "4KgQm8w92wsCh1n5ChFyQhbi4tduCewUEPi39kAQor7cfHJ2N1zbEo4EP5vpDhpd6t39tBPCVfRsJzMoZ1yumkTL",
  "key21": "5eVBw4zSZ7qc1AQu2RhjkuisvFahjyLFBL1U8Vykd92kZ7dMDPzRHbPdon1NVhNPVD6S4pSeYgX9QP7iZ24HCiiB",
  "key22": "5pKjnpv8oE3XjFy2KgJcv5RvryVGqgQpugptVeeWMSUbsWtoazWsX9zrJypUGxk1s4GYW3htWwemZmGyRBXcGgRg",
  "key23": "2A79jAfwbtNwpRNuSs4faDF7fHaVmzx5BYQg28Gct3NVcy3mfKasBQ5Q7GEDRNPc4Tv1A1rGQKQQnjjWismU6ut9",
  "key24": "2ymprAwMXXPS1d35PutkPxJy3hP6U3FtwJRArnWKGzLVaoA9L36k3CpMxSNsUYA9QZWQHU9R9qRZvsmtfYeCSRi8",
  "key25": "65DrGaivhH8ZCxseqB3tVPN1VZgizZ8UxTDva97FqdPGpjHNp2pBkdvXYsoh1cpaav2jVYRTAzQ81VrVVJ3qmWUc",
  "key26": "2Qh1CnbRzBSRbs6sTVMQnrZShPyx5peWzC9oXXkMcckeCeYYcTr59CsNuJPyjShmN7Sjb1jzjSw5m7g3zXHo9HPs",
  "key27": "3yFoadwpnaLuaVLuM3VrxCq5NDPSHuZ6EBRPLRz75r2Gxew58mspMtDHA5p3KTsrSFnV2M86USsEb6L39dfDV5QZ",
  "key28": "2hD3ww37RrEXnc8R8NmGHRbr81AQ1eDA6KiJUJr9TBUcArLGmTSN33dhJMKfS2HsAxVwDtH1xcmg2qvt2RRkqmi",
  "key29": "qsEkEcaRWrkCZ1xKe5SS2SQZBNZcWFv4TLNTG6h1M5DDsuFKCGn64L9T68sxQZnzhhwxAgwhuSNY6FsREf5JA2r",
  "key30": "34Gwva6BXppAKdq9hGK1Fe5tyxATzCVSL6Zh94GUQ1XWjASFFzWbwvFG2hGjjvMgxNWM416rnea8m9TN6om36WY2",
  "key31": "5P2XDjnBTiynAXKEhxJAzPzUoQb1GFaZF3fHCozHa5TXsXBAhar4GtWW6y4iJ6u9yFRo8Whyf2i4SHuPfK4rhYLA",
  "key32": "2NEhmUY5r1o3DzvR4L6EiRmeb6aDn8UHRo3qMv2nV4GA2aqhMvtFRkfdPomaFWcnZ8dMfn5qkDfxKzwk16iQmgxn",
  "key33": "3vmsR5o3dggWsuFhzrdYfc8fezqTVDDo49nEuoQEMNUdjWuGRt3cSejYWuRypwDtUezkCSvrdDt2sgpZVqNCAGxG",
  "key34": "4utwb4MXNywznbXQWeiPPsxWmj6SBVDhEr9KR33JCotZDhAaWr64ebu5fZVkAxVY9gr5Yp56q6FN3d1VqYNw31FA",
  "key35": "3qFkYH2arHTebKprgi651DYqH98MWgGk7gs15oQuFp8RjVMhrAAgy5Sph4uo2y5p2Bkbdh1jS9dLoUEyzGvButPT",
  "key36": "2YPNPTuYHX9TXj9dycXEX2HjU6j4mUhr5xr5LMLM8chtCsNjebT1hTi1G35C7G3frDUKTsPBBq6HQowXsiddvkTT",
  "key37": "5mB46TX9Fhj6PDoQYnbwS3Zhcf3a5Msp297Qi7kW3WgYV5F6an6YtvjwXxtkyQvFvgWuoq8GuCx1MjYfRmfwg2cV",
  "key38": "2QKBEuW8wfaoWwWzmN2Y2CWGk5FiTeQ3AiS9yehmch2wf8rX1kCfN2iE7U4RUpW4TCzn3jHtfxmajHeHnRGTDJ9h",
  "key39": "5GZ7hccD5AY3SJqPf8ZQCac2hwyTRAYsCt7aw6DDYeH8sSos2pakJr29YaCw1zrm39EBEcewjK4dxXGbAkyxicnQ",
  "key40": "2y9MSskwFANeCb8mtejwgK2MopXobCbCoHpF7QuBjJngtmXVmnaFpYRjFc66KFTrCTtoogV7Y5tADBuRxTNQGfBD",
  "key41": "3r31f5dNvCXeRxd1gBwv2kdA8zpFP6G1F3KEMBv5a7QGK2idHmiNjyLC342oRZwsGoMRox7KKw61zUqkkGDDLZ5E",
  "key42": "213UwsoEkRLsbtoD1jW13fMX9zYMmGUpX9ZXQtexj3gQabTashQdjcJXjnCsWrK6MzRt8ahFZPCv9KmCVVGvvgCN",
  "key43": "49yja6sgHTA9suQTqfLYzqGSwktWP2EYyvt5Ja2iKWfWgpHcPN9MVR4yJWaPcg2FrDaWNnGU97MvQvsHfnFak2i5",
  "key44": "UD7KwEqGekXzFpmUPAnvL8VM4xojuio1dC4JGqpcAenrPvDQeBBNbAgfwEAwXAFaCb4Qv1QJVSPJBVHRnQovN5Z",
  "key45": "2vLQUpojZ3dQw1X2oedL8AbimPMrgnLLnwZweKFM8P3MxjfFhWqbGoQnFLRnn73tCsGqrVHjUfHebeNjn6eyTeNn",
  "key46": "5jkodW26d7TNn7ZH2N4vsVRB6UkkSHzS1msf2aj7a9sCaHP3dxkZ4w3RJqi1KYHh7MTzaVLPXCW2DZHoVsYLDfdS",
  "key47": "2uHbfgpDRFeBo2F3mCR4LWPuv9pzmAKRLRuxpDCQ8mV9fcMGJcumw9PXFNkwBHw8SYjyqca3qu1Wnt4LxG7gNLwt",
  "key48": "3V5CikoLTzcau8wZUJxdNXJCQG31JKfb4crcTmaECSG6qo4ekDotqLtyU8hRWp71noppxuQnUDxzMuQJGYJcLMzw",
  "key49": "2wVRPWUPghjFhXsxyowMJsSZQhr3jUi8DANGpQjDV62q1rSZpzwGmqBp68CGj5AU8eM5kwkbJjRzp3wfdQZ84RXn"
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
