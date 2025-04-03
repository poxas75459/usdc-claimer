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
    "4q9kU6QAYUoa2Xt2FjJ5qgbzCfcPfQz4bqLgHfxpGYoUXCAk1t3a3UNEdbZPWUxc6MojqF9vajKBubcymdyyzZrf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35xYjyXizUMiuthCzJ9afrEu1HKd1EaXcV5v8WD34u4sN55yPA7gMV98THGUJLRpR4XP7VMEiHgBAsYXqfvGcufy",
  "key1": "dtueKCvpHKZG3ktRjRQgPA5jY1igjYAHiN7sm27BjBSxBwx17ZsUvAwrWETLeuGFZHnxdgq8RFijVoze9Zr7nh3",
  "key2": "62m47v1Hnk1aywT4nXvQfSNkFa4FxyTzYivG121CLc44Bk12o5df6hibLXRQbWBhzxy44vQ6qGKDCJwbrPHHKWKv",
  "key3": "535yLVYnCdPDt6TTojRQeANgpZ41wYkbd3d3ZxeccrpZnqD8v9tbHATFUNoZPSSj1FJqb4dB6JYBCtpq46S3iX5p",
  "key4": "ko6vRNtXdWU3NsjPXzxCKPL5zYPQtEBqS7xaa7qRVSwzHmgxy7JUFqAY2YsuQmTgn1n5nEtfdvRZRUjqbW94oKZ",
  "key5": "2N9FnFHs8hjKyesxfmZy1uLkSqHLwwJwPs1ZnDc34cPV9evrNKVvqYSX21u5DuNQ4Yg5pRBs8Wof97xqtkkaHqbK",
  "key6": "4G3yePmbiLEMQPUQURzk5UCbCjHDodQ3KPACzdR4ZKiyWGf5uByTrwh9duaB3ZKXq1AaTgvdLaTX68NUcFpyCwGQ",
  "key7": "3JJmpadHsRr4E64Nck5g6KJhQuAMB4P2PfnvRBfzAyZ2u9ehYc5AKXf9WN4NkixKMVW9NmYe1MijUSaV5uRixD4n",
  "key8": "5XxViLXGf354i2oDxuEkK4Aog5DX8rKQcCCx143xgEMWhPTQCutyGrHyYMxvZy4V4jDEogt4ECANtwYCg56wkE18",
  "key9": "4q17L8wz31oR36SH92wHWxS4krMJZ77u6SVXG6MWGYJocL1BSCVyGjSF5PB7iRgoAiCmRDwEZbCZoJJyGhVi4nHj",
  "key10": "5qfvG5aXYppuAYsmQrSchA3e7DtWVdksVMxnXz75jBtf25QaF3ZngUXxwxu95BPWZoFFYMeeXJkQFxGVUJEoEmLw",
  "key11": "Zwpd6ch5kSbn7Rbcb9qeWv8XFAD2cQQeyVAe2ei8p15B29UeqojvJSP6WhCC9QjDzJCNarqMBjQX5nu99n11aZ7",
  "key12": "64b36xGiJJpBW3uWNmewiZxTDL8Yz6p2XVmMAU9NYGasRs2XZahqmCB2AwxxK2bL5atVeN1vXyXV8X9tseDDP9Kg",
  "key13": "vpDyuQfnaNMFXzjyn8HDGuoxu28w92apFeD2z9Sf5CHYkvBQPm4mif4tGAwuh1sV19fGQ4GgZkxzPsN65gtZLN4",
  "key14": "3rHQDktGjevRaZVik3geFWGEQwLEvWcSYAzFRBQdJuxohEVWvnXy2qGsMmSYJNff7Y1gAB3McX8qXV1njMqyZLBb",
  "key15": "3ho2YGFcejN99VNdzCyxRmxZcJgLPyi2FdV2C8dRAeqUvR5WZjFx9AMVDFMWzZjJhyzfz2LiWrtLUVAC62uCuAdw",
  "key16": "uWVGEmnGkUtPq2KjEU9bpPyXaYAdMd7HDuzwehVkhFofMTcz4W5xZkABf5cNY9KmDKxcTVMGKP78i186b5tR5TT",
  "key17": "b6mhzj89sS54pesU83zRNBtCCajzq3onAqCRnrf5ze3gqAi5Rt8iUfFpyBMHE4H9qCBQKh1VnLd4HoDuxrk8RWD",
  "key18": "28yCq2KxXbaJ64NRDSw1fDnHwtQ9akhets7ufFHfAnJ9pZvnGXyTV6mURDjTxi2DDRhDfhMpFXp91egfBYJjn8V5",
  "key19": "2W3FzjwzD7FV3h1rRozfUwXJ9N6Qaijwjp9Xw4WqTDUkyNGejF5uXJnZAXr7sJqKNpYecA9rgWKkWCtJNmpAnYmW",
  "key20": "417TeUwwnJzYKcSehGrzNo71bADTdyq3grfAtw8QbgCG6MMS4k9VxFqNMxFcFHrVfspWWKigqJMM9ohAhCVccZe",
  "key21": "5LGNPbafXHpSFrxvwtFWsqiwpcJEyc7deyGHqmUKZQeBm9VC2hyqWMpVTrHo7HwKBQVWxSG4EAj22CyBH7nsqPvi",
  "key22": "4m4jNDGTQcu94qUZxdzmNifLsDsU65kCa3it85r3DmcRC2Rvo96jsSu5VLcBaRHdJxyAMEbSdbaSf9nPXcn9FeNS",
  "key23": "51kP6dzAtvnrm2kd2fcVSzULnD8TcBcerPdtSDVa7HHNfGSQag5S1CRNKMFEhXiUB2sSNpFBnXtHtEjKmrwCoVya",
  "key24": "27uPwjAvaEH9hLC7GLtqkqFtRHMCFJuoPNfCXRu83FZo4chCpzL2cUmryJKytyaQRyacuJ2shAamPEBntC2HPwUA",
  "key25": "4rzJTGbMzMpat3T85QQzF7i8vk27WK9744sZc86CZSkJn8FJgSGfGRPxLu2nzgnV9EJuzDCu9KwDrkVNjoSy2Eci",
  "key26": "23ncRW2wk4v3bh2kJXxBVPo7M1fb4gSpjoYXLFmL8s9BJSnUNA8xnKTF4WMnwEV1Ut9ZN9H3zdFyaYvgs7yBZfPE",
  "key27": "4rd6PLbypiDL3NdSdFwDrm9K3S3kpQSzb74P11kZ5w4iGkn6urMhpjtMqaAkMA7Db9CAtJJ9aogVxLeGYv4AUgD8",
  "key28": "2LLptXvsHmDrUNgAgCTU8MuJUHBVAkVLaRUFGLQUup5epLp2mESHwfs7XrbySwVp19Rzq4FHgN5uSVoUGRJFoYJz",
  "key29": "4BUeMpiaDmfLBSRvvvZfymU9Ff3i2E5or3V3TrpLsRCJynCuqof6RcBdGZQGo2EuYzFkPRwoqF1deMLrHkwr8o6G",
  "key30": "UaRB2LdCaN3UrfWV8T9JCkDpFaHQHcZbN4b7vevG16QRQ8kWfXMgitPVHqmdUQ9dFyu7LFSMwetjv7xTgHLNGCD",
  "key31": "3LthDYdQGJwPJpRbx2PqTn4uLUsMvsPJw3zGcp78z97jXbQBGYjgLBWEdicPeKQQgAFEYbWYy98qBGr9sNNcowUa",
  "key32": "454129EV5uA8xDRqnTMZkSnPt1dkQxHVeCVZJzpTGzC3hRB3Z5Z7jAdJiGotcVcCdZ34MKQXP1hnu5ttVRCVgyVB",
  "key33": "XjPtET4bEw7gh1buehzkcYE6ZQysz84AMh1oMNvjLmxvfXRbdasJb8j8AS8o5khTz9WyVK1G8Z1n6GTCYHV6eD6",
  "key34": "4YnXEHzxczEwWkQNLDVmsxeB644HGpeMCxrzL3kJKbYtRsttSnefyTxJpnR1VTvCDE5i2au6VCiCKr4srxxhpzF2",
  "key35": "61ujpByPgoDCwyRf8MuyennRGcaBUkEBvpYaqChFTKbRHgwoCT2wbuDuFze1wHpWbyMjtWYRdowiBnoxQQSLg7qh",
  "key36": "4Ah2mbdeuSRb9bskSxgLbmJT1yeWfRYMKtcXydg2zjfEgcRv1mc6QaT9DueFHYW2CnRoVSLYYFxtc25NBgmZsuMZ",
  "key37": "5btVpkiWiCzh9pHRMSPUKLi1m97xrDdyrBk3y4wssSRTQXqMo6BWvZPC3AgdXh1M3fs7VJQTwRBKRLqhrebthVUN",
  "key38": "ejZxtYSML6Ln6qEDeqFXvZywwuNHJ8avWDGMN9WLEMFSwupbFXz5ebLBmNuxCBTMP2stUPLyAatmNuTHFrY7b6f",
  "key39": "4ujudsnM5jKaUTzQaTEEkeqgfVAyLb9MXbPU7yGxrqkhBY8yyEFSsdgpFtxuBHR25rAgcumZmRyEEnDMxEG3mHR2"
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
