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
    "4xjMzTAMPA1d1sF8yusATsh8u9dNrVs2PkVwn55HeD5Xwc2zUFbUzzFdQB2s1Vqbb49yXmYH6peZHSnb7MBvPmmQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M7cLxdFGec7rPmddjAiMu1YnCKxmamexYvBSndHP6sMyGuqouCxii4q6My6GiJT4mqvaaFTx9eeZEUgCYJJ47dD",
  "key1": "5SPq7qvwXQTGdB1WedGkBQj2qL7zH8p75PnkTttLobJ984ugcGCD1V9BGKsjrzbusqDtgvXv8UDvReVTs8ukBNaV",
  "key2": "3bDgwXjDbBHL4pY4rYaKSMPxHzd9B5YT3jDQiseVzQJvX3QuhbeS3XGiqhWKzAZ8GcsquuKzank3w35ECrLt6k8C",
  "key3": "2nPK5B6HvgnFgs6ALHPdf4AJj2TDcVyeqfCGDT3uRVQcPx8qD5TWwUoFQ1uwJnDY3LFYNS4NgXTeTQY7dn3eRPru",
  "key4": "5pLeut6Kwsf697mbShdSdKMVZAMvn3ukoMvvuBHbdYseZX15WnQTCoK5vdHrxFZ2GWnive9x5ktorzMgTzhrMjgG",
  "key5": "3PUoURJcDpjpZVHmeQ1rjYdwMHdXZKQTJJpYP9kYaMJVAiYAFjhgr2KecFKHqCJy53mNKWHJQxhMbFbgmVz784qn",
  "key6": "2Mx32fzQr5tG2MgP6XJ8JSULyuegstVghVdJbSucNGpWxHp7KxWbk5QJHSd3GxNNr9EwmxWkQcMzWRQdAaSY9ANH",
  "key7": "2D8sQaiyzv7KNEYYNhB2bLqFpo4HUyp4cE3nZxYmsSVtPKqwd2FiACFecYf1NPcxLgeAJSpKry5p3UN65sjZGNef",
  "key8": "8rK131c6oJDRvxLwzD7NARSrKtWrZg82aqfuSeqHDap2ykYRF9NPrZNWw64u2yAaFVnz3sJNeHRU49D2BW5ycrv",
  "key9": "2KvZQ1BhKufQApUZGho3Kwx1ASz1anEP2AuXrXS2Zo93Nhdp9g74xF8mVA11y3pN6BuynuuKyPGtuLABkHdvXra1",
  "key10": "125aU5LVmCeGWuevrCWDmXpFc6HkoxZ3zVK6sDJeHPHuK7oXwCmU856YdC4XnTiX5n2FVkTp5PTthZJr4d1TmLqK",
  "key11": "3KokyFRCkxMSJ7rCjdhUnncTYnyXPo1QrADq6VcXpfD9xmJeVRJPHGBWabCZ7LN6ZLeZGr7UAmeb5qpH1wynzPN9",
  "key12": "3twf6osjZ12gD9hPVmrsnifv1qvnDyCh9DC9kbGw9Sb3FQXf1ofK6UhQ7c8GhzB1WQUMv1US2DiH2g8S3L224du2",
  "key13": "59nGB9XoHb89q99LvkQJX3Yur8o9XcVveh4WJVe4pzdKbAF8c8R4TmwjhZD3UoqfS3NqHrnV4TeK9PmmbHocYwc6",
  "key14": "3NJ1KCNY1bgm8keX1WbUnA59m5NDkRRpve4fCx2182JvMWYYckMp7ya1bydVwf1Ea25rrkAC16XSNtsDDuTBYRFm",
  "key15": "52JTT69kkdnJEPXJHptQebsRgXUXkFa8FGWFjLfd6yk1MxQhcT1fGAvhLQsCT9CioosXhqrzvhTEyhcByuhQrHSP",
  "key16": "5t7oDaCASKy3xSfS9rBKVDKr17s6xWD8SLpGX7acxWrrFr73tH991ydWDLSeoXeTtKE9NW5uRbwVCJpWsPH1uSjQ",
  "key17": "3b2XAf6ZVkHW8YXmc7vChzuYykgDfuSictwpsGxhvGhuVC5hHYjHdqTMGMzjeoDwUQUJ8nwkaLoWULZoe1CTzFxi",
  "key18": "gptANHfLmnTS3ixuYzqXp9MPamK71fkuNDzDuA6Zwvbm3vBaVy4xem8Wag5q7CiUozsfJ9abUWJZDTs7igMvggk",
  "key19": "4m8i3wUp48Ui5MqoigTY6mEqN27JwUScW1AWFYVgKt2nDFcxV7EcvaA4fXPfDNoGySsnLjy5BdKVFnAjkiD7Xiqm",
  "key20": "4JZEotZsdCFPbUYh2b1emLgNWPW5wVJEnvCh3Q8GnAduUYKSuyhmsaxLFfcBB8Ntztnd9ij4xpmdu2pgQqaFXt6f",
  "key21": "9wcfGu9ncFAPBQCBGWn2JuWwFSkJyqmghufUWBgDmHJgwnrpnzsqmQ4LJYNTJ9xp6VDR59iSqSpbhTBxQVih24u",
  "key22": "2MwrXv26WY18LHWwsstM8fLZBRG1zLVzyVX5zL9ETGY9sTpEp5uGCSTeWLjWoJbfnw98189Uunkj2Bq9q7ks3u6w",
  "key23": "HU5MHTvSmzzQkkyEnv5L7Xjb3R5WSJWeFAKu34ETeXTa2y3CF7CtzQKsyta4wx1Qxsc4ft1QqGs3foTeX6Zd7bM",
  "key24": "2Yfz7jXTnVAW3fgBcjrBMfUyke7YijP6WYdyViznbEb7h3mogrkaFh8mCR3gnKKLLEEV2GPPQWz1VoNHpKbbZv2f",
  "key25": "VABCMMWuyuHDKAxAyku1KwgW87V1aL21Dq9MjEiyKbu13j3G8JG1zYnhnEynQgi51Cvzr3Sgqm3BNunUN2KF4rH",
  "key26": "32HigNMQJ3g6DAh69gjAK2M63LtauPPddVLH2g6fHqLHTGqHeWkS7LmWJmVTProcFxyXtH7xvhcnUKec9kEFGqo7",
  "key27": "2nbfKpdAAEs6j4cLNubttXpW8judb6zMteRkZ8HFrpSJp2CaRHEVoDzRyKQWrbVGe2EZyjc5kK8Viyg4fFLUZh2K",
  "key28": "3STe1nCcMPuez9gAfbBiyASp8pgZJ4yoDfRbVvsn34szvZSAxcYFU6m2vEAMprXq2w81JTJ8tmZh4oR9zbPhvt1A",
  "key29": "BCPAcu8CaKTN1k9ny859j9MjaKvPvg4DemjU38EXpDJYtVCJSXfLqNopQa7LjDhw1J5ED1pkXb5EgY9Drgh8DGq",
  "key30": "3QhxZKoKUvDkD36dbxtjgKdEZhbtDdprRRv9Zt8s8cxtYD2BwmSQdb8jPyMfuYjN7LdxfVJSEzJ4Luy7h5Xs5QPf",
  "key31": "5287uYxJVJRJdJhqtpsg5sSUH9GACDZDBLPitA5jmNB4t8KEN3D3CdyFvJNd8FeQjt4skFJa5CicUDaHJsfUMwmH",
  "key32": "4t6oyv5LTCiGGXeUdhFQwF1AmtNGPEF6vrHqyvfxLqrbrbzwpTWMoRmtWzQgJXhXoVMydSZTimmcwwPZgo9E4uuM",
  "key33": "5554Gxb1ArzwjZK2gfQjzwnkP1tcrhyhFBB2NRbA69UPGDyEXPLZbwzKcyRpQ6MBcDKfnz9V2NhPEMt4qUkTgyhp",
  "key34": "2nERnYfiK7V4ueADAbJDfNKEEjb65R9Lm6vpD7Vx3gqhd2uqy9Za3DJatA2XQnf5YSM9vwXxizWv3yCEVQxiXnKV",
  "key35": "2Cgapr6mRqy2RHogVvfH3i1TJ3nzxGncYvGRynmUhWFs6vAGyq3tvapiSAS8KTLWr4jXp7EbEgu489UNvwCC9W6G"
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
