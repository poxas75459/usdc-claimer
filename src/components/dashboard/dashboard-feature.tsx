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
    "4c6Ue15KLBWboHd7kRuCbBMw4h8LJNxJqPMfrERzbYvJWuEW9wSEYRYK9Yb7e9GHqpU4qun8XpkwA7SH54EBJLJd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WASqZQmhDTofTKud834Nc8z1m76CiaLp17k1JSefat2wMxWnuqUtYfEa5ht4bh5EnEGXq92o7h8wBuHfsSd53xb",
  "key1": "5dKTBGML51ZChFvHgGpEQqrSBhPYSdq2jLw3hkqASKrH2UZeiDiFWdf6rZkKMF9xrNxgG8xUUchhvAcbP9jMVdSX",
  "key2": "WUzPdtdyXNBwd3corXAZf2m653cLUCGo5medBC7X3HYSWLPfqv3PL9FQS2Snc253W4HdvEY1PAabfRtBtzTTZEa",
  "key3": "tfvxAutVqji2nuaMaX2zSJHNKRA8biXJoFFM2BgywvjLuUYdYjo8h7PcJPVFEZ8DBjtqaUHpHAMEmyg76Rfz2Rb",
  "key4": "2TunPLL9vXQd8T4XAqZQ1RhzZZ2YppXFTBtUgFCNAFKmrqQCmRBWNWkPPsWLuJPaoBuWzJaGx8tza9AEVrVpULcv",
  "key5": "wyvuZULFPJPRKpm1fF37jdGD7AcSoLsFH1LT22QTzFiyEjs296Ey7eJPbeDKfTFuRWiGNgoq11EMvoumB2W4hyw",
  "key6": "3K1TgLMnFe2B8MWcdCX89oWDMkjJ4sswJSUexvLp9WRjGHqKNvWZXJWnWimk1x7tA96NVM7b4ixz1HgtNpstW1Ja",
  "key7": "2eukbLGJQfdHCipGPgnws1oLGKTvTKy5Zjy5tNRkbMJzRMB1WnPpuNnhH1K9ZkGq4ujKUGmVefojtEue87n3bp1F",
  "key8": "5CcgTE6q4EBb2mMjp2jayNW4dRbHmNN5GZedX4mrDxJiiE1kFvUA2L2A57WgFRm1yu7wA6yPeKLovidCNm1wzseN",
  "key9": "3gHCwbvDt5fy8jZk3QVUKFVxTp4zm5sg7EQ8Y1YAF3MjWQc1Ji1DX5nJveVMo7jN3EDknC16uL8nUkus656M3Fos",
  "key10": "4gvMR7dwUs98ipoTLNy61LyvCKBfuRUWJwYkYCLa9Y2fnzg33NKFoDWyt5b4SKEGTfSmraqFobTYB5ZeNRvUr5cg",
  "key11": "4yGCZTm6FtJXN8m4XzuxReJ3FM4NSXXRhptXmgLMTgaarvq36TPJJ6Gdux3QPfkpxoHrggxshqEyGVztm7kPHSDT",
  "key12": "2wfCL77ahKX6vS4ekuRYMT3TPxqsoK2v9dVvjtVPFhnCGNGkwMGUNrnJPC4ujp44LnuBh5Z45bp4royd3v3hM147",
  "key13": "2tc5njKL7rAjbsNtbnaEpewoLS4uhkL3ruhcsUQTdVmmfLDvRsxHdux3p5F1VNsM3ECetv3kQV2kayR8vLrU75HB",
  "key14": "2g6boisrAvJX17dCA8pjA3ZAnJBDXdeipWxXGrzyVX2x41efLvZBLaFsBLfmsYYXdRyxKaMEUXgTZF3SG2uJdvu",
  "key15": "569MGoVhvHuvXkoV8dSFNSy9yy1xUKZZ4yqpZrKmcmqSwqcauXtoDvwv1uS5cmRo5R8kc3Tt5NHqRXMZDvm63FLb",
  "key16": "5zZXXbrK9b2184mR2z8TP8wmC19LMTywrDqJ7AkYE8zA7v2DYb5U5C51yu5gN7A3gUwokyhCTjn43FhfqNiwD36c",
  "key17": "2NhBre2EP4MSRKQHNeJpjZCKoxvGMkyRMiP9Ru7vw9W8LhUQHkntKuTTxzpF8tXW9mL7HbecoENNtYMbb3BNdpxY",
  "key18": "2wAATfVNYm3jddvmM7wDSU7AiELzvbAbREkuP3Ad5X2os1WPBGtkFX4StdsCFjqwXzYy1PDGKDnRwmgJLtqFMp9T",
  "key19": "4b9mgdbdKpcpbUXg2Rd2MysoJgXsgTLJGFcH46ozQmUtKPYNQFpC72RgqNELw4vBzau4VPYKoPLqqRxxaVmdtNjH",
  "key20": "2hmjfFyQ1JJGq9irLban7hsxms7K2HZdrBAEJoTRKUbabZx8Xwy9zipNnYLHYNY3G23cvfJpWZ3w8SCJxkPHbsd1",
  "key21": "2ppkhq4HMePh4VPKK1bsz8ffFN1ouugo9Yf1myb5VEv3EbRhgzuw1yoG68H5LcFqys31yLLn4G2TGUYVtjh3nqsi",
  "key22": "5ebMdnXdrxifFEiVQhHfzhgJQowZ7my3UStFWN4hJmQyeXpZtgQ8oTBP6yDMcaZnBpfEHv6sCxRM6dpfmW4bu5uu",
  "key23": "4WQora86J53dNVA8zQt8tVG5avJY7u4LuwqiGZYxsVM25xPAKLpoJpj4LHV85XhYMEhPoxKw4yBQw31aXvKcs5Kz",
  "key24": "4XtVP9d24a2AKQXk9jU5CGMnVC2H5qdtvxW34ukBVDFHYteaZz2yCp1EoSEuhSeyo6LX9DwmH8hJJwccFsNAwx5g",
  "key25": "4LyFssRAyeKDh39wEWLVSYKm2ATwhCJ4kA41EScgerM7YZfVmNHU8Ksih1eJfsAMuBygdYEiMYXMSPzbsQzHH3qQ",
  "key26": "59pzmv4iwPD3qTXXyQTaPWkhKB5NksfC8QvR71uog8nrF8nVB15pqU5VdhAUffqpfHoDEkDQkyQG4eCiycu5bSwa",
  "key27": "mSZrbjXugYCvJAuzjHDhb9JfSn1DJjo7PwE67tZSmCrogSwGarJ7S6KiVYYwjmAL6pXT8ZNZXEBnn6hnTxxFa7n",
  "key28": "533Fsb5pMt2CPdtS6hCRqZDjxYvVwMS34TAtyYUU5z2YrS7KKD8oewVMmtGNmXaDHhcCC4mT4sw8gLt6SLc8cbUS",
  "key29": "3jSKXTZ89i2mfsSJNVLPk2eHbdTNKsEYa7fSvksnsyyTqGeJXzatGyr1gKmzKAP1CcGBVyH6NyaNX2PezMJpxxZE",
  "key30": "4UkbcJaJ21nu4aTab33nUgtpFgqhpAV4G6ontFDqxK1u8FH9ws7HZuNDwVZYyE8yUCiJrPCESvxJ6oPga5X8k4yT",
  "key31": "3Rpzdbcdx8kq43L47KuZe5kymx7gaH5yTFVy1AhsvEWrmXNHzTrMxJceN6hJaV24Pyzj2SwAFMPcC1ZLZ5bfEHYc",
  "key32": "4LV1dwqhL4nS8mWmZhA58anWEW6heCN8PmFg4xgbaDjnLh5fxhgxxXann9Y18kGXqztxPzeNPs63CKZGHWWut2W5",
  "key33": "5H2cq3b5pSmPrZhTxVD7Zxmcq3nw2YDiJ6ozEPA7FBnumuBmdfBJtou1K7zivvzbm5C1n6V3M392h3cwe5c9HLce",
  "key34": "2NXjtGDWU3HvgaihthpFfZDhoVcr4UhaXBwnqGxxQzPnvRTLNcYAt7eC7yrHU7rEh9ievQdF2DQREGFcXQ699Rmp",
  "key35": "4h1w7XBff4uQTCcFhreLRr5Jd3pKDoNhzfdpsowxTvk7Wm1D1BcKwCQQXPPx9dpF9iM6MDHffBfDt7UrkUF5hmyD",
  "key36": "3VYogwqAKUQWwTPzNL1bRCNXtcQRVSBTVqRkwMP4tx1Wf3FqJCS36A4R13ioJQTKffoyfLpazoFPXUfHxCZ1nKX8",
  "key37": "46KvN6KGvAjdjE2UdYkmGKZEpe2LFV68Q3MQjgxfkJV81X8e7ogDPwnnDdMwT9emvUrgoffx4H9zMSjtxypAhHGE",
  "key38": "49G7zWZ4CxUsyxtpcdTtaAVFC8ATrJs6fPzgyovsKrx3kTEVoXnAntmzvvjRYnEvMqNeFfKWB4R2ca2wguVmU2Gy",
  "key39": "4iB9mdSgz3nPZPfDk34bmNcc9vpKHBkZbYeXi7nvrZSjrtFpi2UaahAfCEmoNC1LbnnFUU1sMMH3RLqe4VqpdsfZ",
  "key40": "5iUbmRUM1PUSRkmX2x1XjBqJGkaVWsZMc3nQxXgEYvSPJoU3drVhEfrM84tmp3XEHFarziYzY9cqqGLBwgH1Hig7",
  "key41": "3jTUAVRb9MT6qoJ4nqDXWWXQ7YoMq7eJdVyaKiRJutubzRV43msVguwG3NKuD79LojP77rh7VzApcFsCVwwTRL6o",
  "key42": "5SjR1c5eJfhVufj9UrCAatgW1a6ZSsGEG614RpWExT8mTnAtjCft4Jf1paJ5HX4CWBNNaDxnk7Z97WN6G7f2ikbV",
  "key43": "2FHE5iiq1khHcEGQJmXc4KKF3aELsEh69tAspLkweevA3nimECkhn1TQ15HzYmsVjHLicumMNv9Z5BrYHT12aFFz",
  "key44": "4UbijBCrXywLap4x34Lq5VsA8d8faXv83m57PReiDLcwf2xSxcd3Dxdb3ox8efLPbyXuX8821wNtCYPGwduHoLuD",
  "key45": "oGdVWTTocXAbJ7ysKYeTddBWvVWrnydmkjDneszeCAVjpGGPmBrFchJKroDftatm5mN1LFnFaxioT3uvSm2ZLWr",
  "key46": "5eN66SnnwDTfT2NqTfQHf2EKwMJp79sWPDudipGzpTSrme9BoAzMBCmgh6EvDvzZSgwaVvH9cSX29wPaJvMdaWEB",
  "key47": "51vmaiZL5pvoaVbCtSoC2fsryxBbGXVmtg6p4hZv2ou1NHQ2DmFXi6UiRh7qQCDCenCEUEDapi7qkz6RPHG8zyFz"
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
