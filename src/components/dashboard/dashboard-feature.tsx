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
    "5CWpbjkp8LNhVBs7ptnwyJom7sRQiiuozAghtEn64EsmfexoMLiTmAy39MKEashhsi7bGMpcaHMu3Ky1Qr9btsNG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5726UgSJH1nbx96TkBYFEk5yEERF3967M1NgDPPbHSURnTzJj5qNz5eek6W1MwM5j5xMKumQj2DDS9Ph4x1KXfLd",
  "key1": "2VejMakgkLBMxcdxkPSMZ6ob3gksbp71HN1fpAJiZzrEXTXm6NCZStnzZaLTCQeL8z23F6cPykntsFDnDdEhbLm4",
  "key2": "2RvvHWDGfjdpjYNmm17pm8WfYEHADk7X9MewhE5mhdLDZmYR3pd2FBoMmRWt8KbuN1PiCfYWas5hk9Sf5pJ22gMu",
  "key3": "9gXhcxcPoyKdzGuDHRt1aJPMXTnozuXnvHPnGJAAmU9myWafZbR2LngVmjYuM5HtmYT3qbvyQohy3z6hUqdEvj6",
  "key4": "2W1UQZr4Ahw77Dieea3e3bnE1Fpn3or7rseqVTHFwHSTfVabeKqNEAjMipiXwGN2vE4TtLY54EA4cav5WXqSZ6PW",
  "key5": "4F9jLfMefxuy1ss4q1D4ARCk9FZYag9F1v7CJPPQh2pcKtQufnBFCx8ZjjcoycqpiqyYGLLxGT8vxoXtkWW5nKcZ",
  "key6": "22AupbobkHMjpEST2Ab5dBxooJgKcyQ4KNx5BbzPpYroey5hsrmuwEgCjiDLibvrBT6PWYbeTudtKsWZ2vQc2AqZ",
  "key7": "2525tQX5LY32modB7UrCnPyFSLNqTbq5VEGAVxMAhBJxD5DEMRCAqMi9eponndk3nCsAMUf55sm8FaFMUnKQYWgS",
  "key8": "5G6D9G3fv1eXhRpje4EkREiw8Vas3epxN4Aba32xEDjs929jmKeF4D85rAQQTvRzNAfqRcenuTt5uK945jBbKF8V",
  "key9": "5edz3wZ8hnTS44MFJJNg4Jya9nSQw33gJwCXrEa2PiRCD6MbUibVetF2MAPMf28dwHBdDggxsCuGwYGy4AWjaPmy",
  "key10": "4ztrR3MW2EmSpSiPyvtnuLeKgToEeDBnsZqDMeo52WmwRmWE6P839Cn3xgcR7FPUMjp26mUgNuacjovS8cKqF1XG",
  "key11": "nj4XjRrY4xoGJvivNcYXhefNjTKNQeydWYmYhP4ETj6ShZu3i3iV6BB1DNK1Mw999WFYpvk37RZ8qNdjcBAKpGw",
  "key12": "3tKNRXggvLWsNcs2NWk3sZ5P7mCaFNLJrqXLr7tpXjMQyLyoakEkYi2diDQpLAcAnAk1ceSyKszd2a2gSXMtDjXw",
  "key13": "4nFkxB7jTnoKHVcxtrm6fStDKrYxSXE7ThtutABxCRvL58QnXEnGJGrSZkkoPuK24Jku5KrANVJSXUM74G8xDfC9",
  "key14": "2pcMoKEX9bYTukNFtwmE8qTaEwpKex2dqkJNK9mpk8kaps5478MVzDbACynAQDXsABGNtUCD6zoLE5W3u7Y5vgpA",
  "key15": "TUySKPvAG1U7rMEneiusAqCGy7kj56y3L7Zb75aqwUt6Eo1nF38Vqbzjp3vHwScenVFETPLJeKEX4nuvybpGCeK",
  "key16": "2aa47qChBAnhrD3RUKg5u3myzrqtzmWaYieic87ZBe1UXVTCLYGbbvxG5rCezLEcb7rTQVu5cX5Qt1A5wT9tKjik",
  "key17": "2uJQM7zKNGXEttk81u4tbUi2YCVqaSsKKEfhG8cL6NWZPrUjq5fC4jyLr9zzUULXxcLBGjT41oWyUKC5StgSJ8Xz",
  "key18": "4UgRaRSKEBqBQABAkitb6soNJy5A1uh4kEyKreAuDamBB7NiyPoqmvAsAbzwCCRBBejevG1Z3wynVw9eDL69HiJN",
  "key19": "5NmGvAD9jeoPMC8KBbAQ8RPkGLotTUQTpTiQabGeErrQEMDjAS48eTZVdpeNGfsYUmXqy38XMJGGu9ACENkHeGC3",
  "key20": "TB5q9ttWWQNYEMo8q88C6sWRENrErnMqm6f4UnxP4Gy324x5LqRiWjJfoaZx4MUWsrBhQ38W3LkixzMhXuruPXN",
  "key21": "4La3vdJrC4fEmzjYbghrWeqaUnrtQttpLymUVqeaGPSf86Ga1sSdHVsJmCZ7FteDYKXahfGT973JGHpNR2bESmWG",
  "key22": "26b8vr2JyatWMGKXx16BqoCNUTHxTVmMiKBQqukDSUMZMoqrKyMuwBHBeR5g632uEE9xGcYrzsCeGCHABJT4FXek",
  "key23": "hMUtgktD2AQa2CNUKDweZwM2ZQw4dqwAAvFkLAopebVXf9jGtTqHTqa4n6ZQ8FcvDPb81j3Nq2bqSGeWYf8cA3M",
  "key24": "34hfUJ9fxicPgCxwvmyKhD14ro2WjG2VWaPpni3YY1HXxkDrJybh8B3J1FHn7ASSCZ2WnBAcS5K57SZwAwDpuqcR"
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
