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
    "3whWcgKjt8nKPxWrVZjocvQNyJyLkPncYFRxZuqHFcQ6JkkFh26giaQbRWXryP7V36xW65zipvm6nZNHT7F6Dsex"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HfxQngsLwFQhXzcSRtHgamd5Bk2kJkgik4pMv7yibbM6D9gcvWMfr8A4ZSdgoLitQgvK7efSroarJxa4ZcwTb5q",
  "key1": "3sDYpFixBKX6QZUrpvLpaXgqR33VRhU9EcLoSsC4C5hAdCJEsgtjYxUpJxtTLwLcaQYfg7johiQuKDtgNJVVpCVE",
  "key2": "3KcSq4KpEgvpHWr3rpM1AoCpPQy33WFZJAGdG3KdPUJWrZeT5ovSCoYru3jZBcsV8KmDczFjcGoKeZe8vNoFvVR6",
  "key3": "4mPLXGW919YnP1nh7ntVwWX1oCkP19TBxXGbDxrixMVSd5tMUSi35U5RdULu1PoZRh7gzihRVgVGtRSfYqv3mhqQ",
  "key4": "2KNNrPTAwLojhMRg4fsxLEEnUW7gyEaX59RnPAG5oRR1ogdaeTUn7WmM958faVMyEJ4r1of6MqNB1DowvePvnmGR",
  "key5": "4V1ByoAMSkBxZ4eLEjcxgh9vURn6QiRi6QDbrY7g8PdzTQ57yfYjcCf6nteTwmDZ9JTBdCndqQkqAWNh1WXmXZ6T",
  "key6": "3BRdYrbNQJo5hMkNyhvo9NuwC1BhQHw264EtCtXBZFMVjonbmnUuFmNVh7SqLqxWsXVARzzz4hwo6zVPFrZbeDip",
  "key7": "25RQcjHfKjwYK6N1BJsUxACJP2rgVvtJnoLyEGKdJcpURUmzfkvUMLnHBhKSVYrnoDGbZxgpisgiY6GsFoup6fHp",
  "key8": "2WowBLGisL5b21gD6fD2dXQS1pQDX4jbKXV9uXM4jDRsGYXeLHFHojw7iGjquzaon4zxpGfyByEDkkxoU4Xavnjc",
  "key9": "5XLAesMeawicVbMRDja7jdcmRu5VdGC5v2FhPruim2NrMGtGpGcjSDMPXBfFFzQYwSP6nrqYfARzqGwwHNU1F4Qp",
  "key10": "bLGd6fHWRUbRGt2S8sUbkK7fe2nTVwqK5XPoTzhngprmB3sXf49D4Cs8WNQuobLc8UnMjBfsgsST97BNeWG1NaV",
  "key11": "2j65RooGDu3NBgZsNfSQx9w69vVaodbYP271UEQSAvGpR4yUZicUBXZAjZCEk2ihJhbvyfn5Yb7s7yebXDChMCKF",
  "key12": "2TgKDEZt6aiHyfXjwskcHfLdeqRneaqLRxK2fta8dGKpG8qZDcsp1mBc9zJux4QeiTdsRiMCr31akj9DCQyUbN8u",
  "key13": "2gfDr1gakonaNBrqUy9HVSYS9hi3LL8MAjgSbbY7AeS2gx5Nz56N56j3M791bDuueBX3G8gQZ4XgeksRSZTZFF8A",
  "key14": "qXKSTMvLED2w9Gj9wxVvaoe5xd7korF4tdTsjRi4QVw6QaMtXKGicv2K4GZVafw5Lzh9EDpkFJEdUDzfcoosuVW",
  "key15": "5HwLeuNqKkdiccMygtoe6CA4j7m1BHDQ9kfKBRWhLZz5Yf4MyUBKeQYjVUaqcK9tCiXq4jxFXoe1UwMGfPU4jfnb",
  "key16": "mSACohZetsoPuLHaPQExfdW5M92K2wVZ5Tvgx4Yzsi5dwTEnSNqFDPbpLSiiUBBtKk928MYpqarAnXhiSrYvuaw",
  "key17": "39cf65VdEjbyiGzJXLFtgNvjzXocjjqUgPdLPAPdsALr8xsuNJHN1kmBiLQnZS5TxsHqWJj92MtSHsRfoCv2i8xL",
  "key18": "M7mat8neMGE3shUT8ib1RSeUbGzijVtYCAPBXfHMLNR5Cubfwe7krjqWDxxzNafK9JQsQ2xe1UamJZ1utc5dfEs",
  "key19": "UGawP6KcTpZYxSRBvUje7F9pykDNNpSuRM7p8fwEEXi9oPtLphWjbCzs5dAh9w98PqUKFdY9bugchVi18gFVtso",
  "key20": "5Frs9QFhWcxynRDnVGAPS7LFA8oEGmmJcDG4HnL8CMWxJtiDxYCTMVJZiayPbqvDzdfZ1yLAjGQny3zGVhKKt9q7",
  "key21": "2eHYrPPtSNdATLk7TBjqr4pGaWDeFpGTU1LMBAfyH1UH1sw2EFBhn9UeSf2KsLr5rRi1SP3kYQijf8sCb1qaDX4u",
  "key22": "4skoFf7GKHT8k7zCxcKvewLXepEd6nLmH9MUU2ASqX1dGPah5oVoP5jjVaTCp3fAN3o2qiC8TGC8PS3DQw7P81ho",
  "key23": "QG5WAi8cgjV74o4maBHKpfymrcMbK4P3u1JJQ5kDDR6b9LMpKieSioHiaKsTd5uL8134auUCmbRpS1FC5hCBnDj",
  "key24": "3THQmyKyrxoCSFhcd5eFcc5KRofrzR4jiLuDpYPDNNszkuysEQQsakCpQdRuXQjydZjmJ8SbmMPF4qMDa9HfSegn",
  "key25": "4V3FsSEdZzkP57F6WtmWw6m6gxSqCW6wNFiMg9XGTk8LBVAqVH77bu9dCDKtqhdL2QyVEeP7UkdToRzp6rX3pbrF",
  "key26": "2dqGamjs6ZKaKFp6125Ef9jXiWQymDAhrQreiFReUaHtwQHMtt9D6jGDfibGnCg1VhQwZauJBmriUUt1b1PjSP8H",
  "key27": "57DVLf9Wvt1vUFaFnSGQNSWuT3PVHYEVfwRGwptEg7qmsNg7Z4agfWi1kiVnBfr49K2XjppzQ3Hoxm4Kym6Pvh2s",
  "key28": "2eaudzbjm33oXAHhyPX7BRcf1NE2L4sc5V6wQaUxL77hKZ5obtR8Zn8yj4cnnontfu4HrHBGD8XMfKkUXCVVA1f3",
  "key29": "EgXwmDJJLSGdCxhCQMYrSb1XLd1NWposKU4yw9xYAsTnjBy2HrPpXzJvh7hGDgcwjkxZmGLADy8zV79DWCXLkqF",
  "key30": "4HaKaotJ7Sojb1ZkBrvCW9gEpNpUP1KZ8xTCqxSnL1MjeUiNdNRVRs6DPL6TkjWgJLdbEzcZjrQvjHNxdGLSWtbT"
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
