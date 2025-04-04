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
    "42NpQvPTXKhnp6fpoMRirTNLn4KKW9aLKPpt2ecwn38PxLD7pwbZ5gbQCtEhp1TVTLgt3nt7eHifcvQ3pu5gqVgP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yLPyk9CTZHKctYSYBpduVhryGJaRgP1tQkaaMVYijeNp3kC2k5RXWyuNAs6c1kBPBWgxezEgTjxWDQchsZCECMS",
  "key1": "Eg3oUjkRf9MmhbCzdnfw3wse1u3dyU1gdwheGKdD1Joan7X9KVQr1gon59DHLD3dhVbqgj5c1EHqxTU8c9dG9gF",
  "key2": "47nRR4reT4xDDEdKorNC7NbzBChAmc133W1YihK7sFTZRC1qKRGcXhPM6NQd2SUmWhZkxZZZv37dcZJqeaRryjSu",
  "key3": "4b8n32TS9FcqDq4PcbfxNB1mDQhxaPQJmLBXFagrEMdDpvWbShteX9TnkdCgYfYCYG5Uop7ZxXdaxh2aUfGdiWNC",
  "key4": "4Pg7zJBoS2YWsnyZsQs8QrgihCmA6dmmNa2eLba48xSfh42CjshMQLh6TkQUabTg7kqns9vBKZgEBd5XJHxPasNe",
  "key5": "X29d7C7ZcmVQR485dqB8RNLGWHfYEEiZB4Da9ryGbbrpo99K3EzgiAL84SQTAVEgQTLmunF1u1ByXXwSQSxhTFE",
  "key6": "5pEw72ZPoco9feeH7SSWcwS7twGZwuwxzqdLGU8MRAirXaW4EpwMo9WGWakrVnuydekDrqXgSFhhyNcysxfnXWyJ",
  "key7": "v2gP1h6Z6jxtAyosJcQNGckoVizqGovZCF1ranpjuNsK5Jr2xxG3PUxy5EdYarBrqsLGhEUCMKmyFpYXgYbt3UW",
  "key8": "4qWFtDMqN4pZys46L5dnERvAW9xyZZ1NMYHhVrTVVX7ii73oscvZfxazmjD543AiviSCBbLHeNU75nJ1j9FMPsVo",
  "key9": "29iSgpcovTvXUdLdKmdKaJaSfsqVASzNuNnVWbDK88WCEsqdzXzUUVbpk3oyVHf6c1JQntrhnCiYGcNqr7Wm9Sqq",
  "key10": "3RCPwL52QkPtDSGrVUpsXyJv2nbbGRfbfxg5FEvke3q45MwQGLMCeSx17UCzFBgghRtpT9AW7FMEp3HGyLxDegef",
  "key11": "4Tr8YRudUi6KMef1p1dDa9kMEvoh8pAA8oyBiru9zQBaQuSDk1xadnvXYwUSmWS9o2fmADuW4Wdb6gC978i1XAxe",
  "key12": "53UvcnxovdB4vcH57pEKBwb3qMjSiKbG92qVVqtW6BV4SoEDRHafx9RVa7mdpE362bHWpoDR6oPVvMyZCVggMMV",
  "key13": "4JpwSapGhC9eB1gNrjcWmNJMvB9JoSvyTcEe1HZUFcQojzsVf4qpo2Czdtqzb7BU48bKicydzWhKhV1P86Cy4qHt",
  "key14": "34xVBsji72ZSsgeym5G4Lyv1M12qLpbX4xAB7eeC4334xFSvKCVS8TXcNVcbc8VWATSopr1QQEnBFjrtAg9biC3N",
  "key15": "3T5BMD64rLozB23GUcYPkRBybEPwJF4Ay7mTvohdcjjQTAu65KFcaorooUyGx7GCND1TnPZcggkM8UEMUwisoyTi",
  "key16": "4YUC1GsoD2CwRY5Fuxeg35YHhAQjSHsCA3HR4pTD9DUgASw9JFAgvBAcj3dwJYpSqWProWQeSASQEQERv9DpszqB",
  "key17": "5SFGBtUFxUtRbCi5xrhCa8UUZrZTEf8yGX3fitVU8UVNmLrTCgnGKD5V1AGRz2rZpb2pNGEmSvUTJswHmCzXnQWP",
  "key18": "49mJVVrV67koorGwEYr527pZcrgGHGe1enst7jdwR9MgSFyNfT2irVpjNuaNkrbzhUJXvuQAkKDkz63929aDNFUx",
  "key19": "KDp8RXoyrRJ3GapoMGTyVtA5ZBKzVGnR1Qv6g9DkjV81iC3mGHq4Y5q9dmzt2iGgPoyCUofEHR4qo6Nz9v2Cf4D",
  "key20": "DMVRE8Rc2aKEnH9eQXQcfkF2mNTvJGxxbQWwB9R7boztcwLtr2vPQ52yexhwK14nnoP68o2J71uL1PJWYSJgaax",
  "key21": "378Bi9g1tfLmGUiWUy9ZcSPegu9xixzJgxFx3nHMkzHW89DFed8zwKEoVhrYhrPKgk74wasduXn7kRnwQWBhJQLu",
  "key22": "2BkyvwTtTv12qgoqoaJ1GmPxc574WuXgpKgukJy28TReUprbZi1FUutk8qfHPt1moGtmdmED7ByqXyAbq6pH9se",
  "key23": "4P9yVWiq2qPVRaKaDA6CcAsDVy6HwE8e3kUAaisas626pVYJz55UypurQh9gRLgPEqHzbDbka6YUrfQL9LgcJhqK",
  "key24": "4J7WRmHm8NCsoubyuSyCemvRLTpKzsD5A76um7vk4Q5xQG5bm7cLmwpgHGcUR9KDz6J9FFhvLGkGgceZkWDx7sn",
  "key25": "2prgMJN4pJ2git9kWTsB99bQ9bgHkzt8w1kZjgPXqdF5qxd9UJ5uYaHasG5PtBWML29vx6KpUZfstkHrioYCg8MN",
  "key26": "RSzAmxqfYfmtfsbpE82rw2nnGTD8gMAwH5kBiWMqjEgMqTPiJfkqxxASwJiS8s6NLRA42rx6J56mAaVrv4QC73i",
  "key27": "su51kr5gX4s7s82Ly5JkfU5JcQhjmUCyeq852f7VndizNu1ZWxLLP6LUKwAT3AwmChKyFZYJvvZHUaMQbBSDLD2",
  "key28": "52g3ACcrspfbvVt9PamFvyPjhcFeujCUvRoFenzpWmWubEUoWLf159AM7zpNRKsLUM99q8QQv4migAdpE1keWVAb",
  "key29": "2BwhFtJnfKHH36TwKevaNukWPbJepdm9RhYU2wRaqRSNS6AznmDL11teFVSRf2b6VSKTmkSedmPuKBDPbeVt1SHc",
  "key30": "5shVA25ikQnghZtiswhviMa5opW7Ji2LvZPHL43qdC1WvhNGzNEczCzVKchXvDG8gh3LBGBZxqBCyCTTsaK2BiaW",
  "key31": "4gdedf4YJ9EyeGzkxe6Ej1cTwUSp7JAkS5WK5GPdLwBo6df4fkeFDSJXtERaJpJwdr8m9kWLB7hTGTaN1YEmB4wK",
  "key32": "5V1uvk5QXZSm45RJZyAiXQSDcSnmFQ8bn4M2EnSCfRbrfvQrPXgCxg6H4ffbB4s4gyD9w44DviTLDJ8AHv8XBsd5",
  "key33": "4jzvfrAng8cuCc21K38b14UTXxP8j9PLXHeWN4zosDkzwhN4vybWR1DRMhhbfP76i5M8XqeMcr6hh8yPu6bREJVL",
  "key34": "25vMzcr7yPQedvZPa3pr9Tjy1gibUsXXmL5Zw8FcFc2LA15AH5qLcbhGBF7ZTVtFDpuchxYhQpM79x7CKCaeR8LM",
  "key35": "4fwtiB9jyyBvkNMLYmUGyXwSJbY3qmTCmjdDV64EEEVz4Txj1KhD3cb5p4refiCvWppBpXojMnwBsnVimoD3rEXj",
  "key36": "5fcNFeXRCAbG9gYVJ16DcKJzfeqrqYRBKE9SSiaKZWDDHdZbPSLtm6bbQGc2YhTJZEmbjnKpQtqVdr2QHyoZ6eSU",
  "key37": "41FpYZXmdN9u63ZCiN4LgweVztVvzecLGWnV7WfTTYtHB6U9q8En4SJgw6TrMhjZTJkXBSJVodxcvxdS39WuVnGC",
  "key38": "5nVmhPN6Azat6WEFiX7qxw2NtXbKfN4iRRC1vTz1tW1dVmYh9ND5ZBsRdxA3ayGfVYwWxxxv3E8qBdocxNSBTaP2",
  "key39": "2m5SsfazaoDpMsKstMB8yCequmwGQ8XX3MUsLhbBjk2SvCag1fMcsUXbGHqwtqs5b1iEVuv1XMXtVrg6qDwSiNAw",
  "key40": "3fU8DrbmK5hXq9hy3GgSiFzv5fr47TAsRpwx6UN67iZvimiXNG6aLVnaucFw2iv35THezPRjQKyGUC5j5hN6QHg",
  "key41": "3sQ2KTwr4q2ZD4UPkXRAYh9hSPJzN9aeMWj1kZiKXpZ5aknyDjtG3h5Q6FpxkgHG1bKroQebvru3G4W2iX6JYhKz",
  "key42": "5u61D1ANBPnT8ynZ19pspmXZfDLJ6fPoYFSeTQM2w85MUtH6QMHjwaB6WuZdj7FTmZ6EmG3oqBGC9UShTJPnor9i",
  "key43": "3NaZRVRGqnS25f3NWAXMXTR9CRgfipWnLHpW8hmKyzBkopaVhVXihVjhoiCJKb7T4hnJggsVLosMLzMHhcrYb9n5",
  "key44": "21yNhXEpiCxFZMjPAPM1PK8ZL9N77GLVD63DraCkv17xQoQ6vGJV32srdcMaSaixQLzvr6DJ9MdzDYXzNFWUXuPR",
  "key45": "33HTvKSLmPPUS4q7hUd6EHTsJVRNEKMYXvxJgSvRYH1nPk37k2CgtmsZSguT3r4uut3z2jNJbiZ2ZJJJZ712sRM6",
  "key46": "4yDSp8bSUCP3diWdwcUxwWKqp7K8h2fEERwFjR1BBjJjXTrh4fPuVoFwCn6zZzhZWAwyXBQC6RacZQ5cLZiShU4r",
  "key47": "3mis3WEHAQx7XdTmsCH8cdx6vRRi6RN7Lyz8TPUWmpwbYFnHTC1r8Q6YJeRt5QZrRo5ogYeviyqJ4FSAv2uZiqUC"
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
