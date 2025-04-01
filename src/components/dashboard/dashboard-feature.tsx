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
    "41AqwrKm3jxNE3Za7UymWhhgPSkEwGiDpgAGPRmpZdWYLxRyMBLayraReRKy3wgxMEEpyspJo1gJY3Emg7o7W2df"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZZsACUZj1fgoWLjRf9W4w1ZW5JChVsAWocoMx7oiv5ZXx2p7ec4vFkjJKMK8PsUprB6HBdiunYqcgfNeh7bmMev",
  "key1": "4xhaXG8dweJ66BFw2g8e1fewyYD8LbMQ9pYyihEVEGtWx68P9khzajM4cPc6qYgH2zNwkvnj98oM9rHxaaQotQzG",
  "key2": "5BT1UxKKoTQEvYk5fxwhfhAvTXrdHWCtCAMvyghQ7TmrEv6nvZ6TKfQfW2XCCxvHGRqic2j4nocY65UHMws4m7Ay",
  "key3": "2KCM2iw5YrqkghvxNHAMYzHNjzZz2UeLnWrGqJmnmEvmCyr1Lo8HUK5x6atebG6Yk1U9AYx2ci1Sz6rBdKEKo27J",
  "key4": "4gFPrqAVfFv78pAofX81bQGEkox1ponN6rJMJdTbCeokTLvfseowhF2gBrsKqpRkz3i9zbStJ9Tcuy4TigCnWwnj",
  "key5": "62V9Jq3esvk7D4wjTgiUfhLVJqxBw3xoG7Pnry1BeWe4JNC8GciUQNqUZKvfiggd7tnPMHuhfdSs3YkyPCxbSXDw",
  "key6": "3uodoeHvZvybMhuS5Hy5RGG2GXrEpYLMSbbcfBGAvw6redEDdjFg3ju31PNtjCPXXEhkx61Pszbdzck2SqEyQ7mZ",
  "key7": "5DWj6m83SX9HGJ2RasKivPsCdYeBvyLenpAofgvdxMgBcwBLPELPatvLMhdLQzkgtAntTofRRof8jsimtScvQE2m",
  "key8": "kRQo2phVZCJpoa5Gc5DydSh1H3EjjDj5rK58xgv6cG54ePdtNFodxos6Tin9ePAWNbyvtx1kFNR79tTcPv2abSW",
  "key9": "4W5gUHqDKxTnWg4Jr1miQaJmpY9aRxGJ9kGbV1QSCCRacH3FzibS9jNNrYp4Vk3Zpzjkkffg5FHS1iFvHmtRcfYB",
  "key10": "35ZV4LFdWbpgqU2eqrP1BuBdz4wgaTgqNJpRGMbWU5n8gGMdGyjnEPs5vwTbbVdfCFzvVBRyRFRMntriGT9utmEx",
  "key11": "3rNL98u3VMBqhq1a5gHip7FtyzNFtcx4wmdQqVUcCCCfVnWBc8EdPocxE424MYHMyB1fVN4Pv4vnEYH8MagaJ52s",
  "key12": "35kip1LkuzxApa8fXED3DsEBFGh8cz347KGLK24yVvXKb1VQ2eGBgJGzAqUBSDcafdPQKX6K5gaShTdpZPjeXzzr",
  "key13": "4iV3xZDAnoT2TU1vUswd8KSYzxYNXdLeMu2n1bqYr9MGEEZ3AyYjDFWaxNWNpRnVVbETQSAbrjVmjn4wBk3rDFin",
  "key14": "5m12sFnYyii3UXRzmnM1Rc3BCmrKBdxBaDbWGurdNVQaQ6qezPqeGzYTx45GPE9z3gC8HWXHVamtY3c88Z4zoC3L",
  "key15": "5uhB5k6ag6kUgTpUKj6n6qZweie95yvfMCygfo3TKkpd2Jss7pETgNL3QEm5oQNkGN3RvRfg1jjadPYwz7MKjP4J",
  "key16": "3YiVW5WZ8xA9ioyUDHbCDymwrgddkg4prbPmNzSU2QyvrzL59baCmBjFVEUs4ahuHz4bK5hTDAqaYTKrkvGvnHqs",
  "key17": "5qwuWyEjqV8HKLcvvSq9vrL11QgVSsDkV5WntbfsnjXnJJfumafS9Aw9uhvkybJBAzzsFxBMLK1j57BeQofe5zg3",
  "key18": "3uvmBbouGWbhwcYC5af2rv6twPGo6QZbPkCP9KKJK68mCNRrwbiKZmgrDfjXTLCzwvmpWGHFATmBCi5XB4fi53qd",
  "key19": "PUsUtxdnKEyfiP8qBBv6Bh5NKY1KQBSsz6n1kP8UUxHAy6RFsUMSw8FjnLxkUKNYpAJiBa1FJ2qqTUV46c7Ajfz",
  "key20": "3nybGt71uMAPCxrQVACrU5ihyWERRMR2gjxbMfgqvC2nh2KZXjRTUvSAYMXfs6umSRZoHVmzApaK8ZjFhNEffUFY",
  "key21": "3TUxiRzEEGHzSnAV4LdHxgqzkwP2xN3CsqesNLDLbHPQrjzuZBTsn3CXFsU4kVXfFsuPJuTa6FBXJVYJjVzMDZ1C",
  "key22": "4VBEPzxogBodpauBukYhPUR1SFqhxPn4X9LZZtqzjoapMmghzKqc5b1BfYHoewzb9AWqQeQXtj4RnkepoaMkK1DQ",
  "key23": "2vk9orUxwQxJKxtc22AUEU61wFkaCsu4YEypiACN8xiHZqomrr2MB9sKdeWQk9RvYcs5ARSd2cyCiS6vDCAGFJxf",
  "key24": "3cXnWjvBTzi5DQG46QrGm8QC6kaLfHrWFgtYJhb27u4mbtnm6tNjxrCncdrAQPyezDp2GqpFH2Z8EuNEV8k6j1PN",
  "key25": "Bb2HvosdpaRQMYueW9ANTkobsQftQVg3FBYgWTfYg3c4B33FknwZWfbdtCp7U2SJ5UvvVBHzhxreMfzmTqNsuSn",
  "key26": "2fbihbwWamzG1Ncay8iDxPpHxgSb5s66ZwEVC42pYJ4yZXCB2bgcRa1eBTBJ8b6itsycfZZYcS3jTUibwtfx6sjB",
  "key27": "66k4tsAdjEpGp2KUcjo1rXSfX6ZvTHJzcwYD4qC43ougLW6iRDfFyEfGLYmbBsY5AvEbtge8t5QKz28NJQAVTbGq",
  "key28": "3rWBk2WnJdt3mskHVibSjTEq9bYth8oAJqLXX29RxzUXgw1SPPyVHSyJAdZZ6oA8uximUGg35anBPETt7XX4W4VH",
  "key29": "2qQigeqNMdxRNNett97pwNky9D3LPpsaGi8aeNqXxjm87iG4PKNNays7AnyXmdJYRksASAey3agPfHSrzK8XeKpm",
  "key30": "4SpsHoQrDRAPefsBoLqTXW5x2Z1yCDa1AmBUq3oMPpmSHm2nVrDwNjJJstow2p6dKv1bkeeGbi4Kevbc7fqR1fRW",
  "key31": "uFp8ReQAjfxcoUUy4dTQWdTLVXb8A9G7uLZ77H5aTmzRRubG9Z9LBgxhCMCzKdkDaWGX8g7XnEcCgmX4ZUfkrTq",
  "key32": "3NSkrjXs6TbRDeZb4qAMRrRvzU9x4fyDyKGYZfQVXoAXbcK5h7kv6wvH7m7vTqddX3UMuxBvkwcSGnMjWtugQ2Qi",
  "key33": "fVpcRxLRqzmmbQVFZLEzat74PBRwHcmaMFy29ydbVWKkeWGc51tjR26cE7JifsKbQZMiMvLTXdwDgL1PnXrSsX1",
  "key34": "5JT2No2Gyjf71SfWMuHC6Qh34RAf71n83SJ45jqHFRJ3f9QwMQNs66zZaHUZP8emPZ3KtJrBTmiCUjnEicXWfesi",
  "key35": "47drh38VQLAAKa3RLRH3rN7uWTGcWMkUjNDxEt27eWi6jqQQJVfq9KwzjHNEQtFwMby18btEjwA5iWtxzzoLLqrZ",
  "key36": "4ZNJKprcitrb8TymSS8TuozPsKdj46xjBWsJbhAkzCT7JPrpt3fmPdjfQcFjoVq7UStLakqAGJivQJfst3gRtocW",
  "key37": "5f6sN8Jg5XNe2LztJMVnH33v1J2tupRhrq1xorRku6H7i7yehXK5TquNn1wVyqYF55X8ce51n22T9o6YVAxeu3c7",
  "key38": "2jTwNx7kwCBjtGe6EQSVDqgTSHzpAFhypTJEmExwcmUSfmbQV7eqZf2KCfixz5W6X8PaEroxM6dhQUE29EYxhRKp",
  "key39": "64Am2HawAdokNsmCtdJJevBTTVky1WBNavnNCRKarts9YAA9TbSH1HyQDx3u7iUwytYf1bMf575b9VM2AeiU5h6X",
  "key40": "2cj44RonXAW55Gybm3EZTGfsrb2onDJBaddhuTkeYUnqnkkTFp75ADQj5eTL7thhdzccRDi91NFZueNSiXNuEaJY",
  "key41": "3pGbKDU7ZPRnBPHXzzaEUhPzmsKkvBBKzVBgp7gGAD6K4sWQNoifAD8wXEtsUaPTQryUjMyo8ijthLK6JmNhSfXf",
  "key42": "m4wEwcggiYqnL8c3JSdt6L53yYz94u53tAM7tUYiFrvqv6J6xgrTsgtgtvENRR9hDuoFWqKEJV2SafGBXCdc2SX",
  "key43": "23SCcg1AKrcnNQXSjz9K2EdBv7feu2HmPUb17S7vJexAvoei7Wu5WR945zYqU7LW23RhDu4DHXE7U3EfVKGGPcQ9"
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
