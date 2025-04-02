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
    "nxi1dUEsXAXVFdpEdfriVSKrDqzy1wCzvEPrVdLFEdwZuqXRzmaYhyjy96qLE8GkE1gv9KKzrC8CucDos9xDK9W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3msir1RSWnxUxsrA95Ff4wwNqHKt3ZP1n9XRBqM6TiSJKSf7mkdhn4pguZq7Hz35g3nQFfPpAGYmasaGRWfMsu27",
  "key1": "Xg3QU5ZNib8d3H57dMjKVK5GJNCLR8AGwMThG7A7V5yqwxmHNizaiREfazatBXT8KSgPPmBXBVXu4Kz8HDKuSXc",
  "key2": "2ruFnM36f2HjSyZ12TqtuYxviFKpepSqm18JYxwiwUmN682yN9LbbV9Xc1qSwC3jyq1ZJtQjBUfNXE6RcxxcuFCg",
  "key3": "5mtyeBRZbuUkKbbyx8bues7dasp6uq9PJgGiaspk3vdD44Ehc5iEAPdb2JRxYbd9fvr7XRzCVp6WDKJjhUFvNR5D",
  "key4": "3LULjwsdVfH43xKMZYNyU9FPjzKiJFGCoCnerPdJVL7kEZaVGQFaaeCKLv69QWNszt7SKHnMY6XyTUVCMZs7cGfd",
  "key5": "2KZN1joGJZDhyKkHwMcKLv4dtx2rDo8BzL2rP38kAyNaZoiRW4rRNVPHG2sK49CjUaMBbipz7NbBPn5H5earapDH",
  "key6": "53c42PuebNsgxLUJFp4HDDXTDRJH2f2CWaYrumMqtULmXFve8tCHJz4Js6vwKGYQ5KDU7iwG5SXPbmgfE34JoMqh",
  "key7": "4q6HWT3S6Dos1uuYs6y8ddHKJkAKRrso67pYyU1hZmHaSkT6bhdFvQUacBuH9PRtLArGFP82aNVhX5Yb7W5haR7q",
  "key8": "532SwqagmgVtsnvT5cn7LJnArU12KTtKcTpcQQPW2rB4wp3CyYq9voDTMWqVX9QFAcAacUsbU6z5DhE1KQtHTMss",
  "key9": "3qaJPFem2AQvEQC4FQmgpJB2xuUDQrLMruoHXYj3iQDXb4S6fRmQjzDTek8PHJNoRnhb7NyD2Dpe5xHPA86dHqzr",
  "key10": "5okvos2VnVxsLUFLf6P6XCs8HVGffwmQvArVmKApMAQG3kKsNHpvWqiDqfZDEtvE4KvKrkgeyp7VFqHt2wkM8KWP",
  "key11": "bf9SPsr5nRfTZn52KHnVXtpqaX5BiWfoTNwpYgbG7v4M7X4JU37qvvHbwuHiSXAVYoSEguJsz6yUfsrfwNesueD",
  "key12": "49QWKb2cQqy21uhqzzXTZpREwcmVttkPFLtP87hvGeQ4hCmF759BJQtPEjV5aiGgeQRYGETwH7bXgD9D7zucQnBP",
  "key13": "3KwhHbjZXUvxujLavWMmu6J44JHADjUrL1adznpiZavF2Koq2yqcCHn32SR1F2Y2esDactbnqk6JJtuMhVUp6Jds",
  "key14": "3qdwyiusntwJ2KNQw8QoDPi2pPU7h7RfkWbvaQckim9cRmDqn5Q5wHaKpJZWYiwWcoDnNE24a2VU1vSJaiCXCAvZ",
  "key15": "2dJCoLjB7NAwJ6DmEf3Up5MNNwSWDs5NHZJbHV2XrRTABUY3iwxX5bPJD39FbMLLqWjYTCRs4vHvare7ayxzx42B",
  "key16": "5CG51uByBwi1EpufrUxwcMw6RFuTaMMjhWUmaF3m7P6emD7yNz2tm7uhoXTuLyvyZsf2T2oa3catoR5qKC9mM8pL",
  "key17": "2FTpaWTUMMDnhAuZNDrZRAJWhCaQtj49g7x5SxquubY2kuwzcAtKhV3avBZY2vz5YzEjLHBmXgCVJEUBXgVrSFxy",
  "key18": "wFKZACjW5hMEgZz6MiVFjTwEknr5mG9iiD1Kfx3vDGNckTmrDbNH3RGzy1YrAKCULPcD84DPCx9ChoKwR79we3v",
  "key19": "2SxJNsqyrHmywdpqVDhg2iwzqcqExiNuJP1QgDwk9aoijdhqJ7gnymfEqTFeveoFuZpWidXKQVx4FGYHDScb5GMX",
  "key20": "XAgTPMLNduJDxc7Hne665RxJgX8NZSg5CmWHmGJb1X6fPfs47cuXweUmnvvo46LwxWS3N4z7DBWfbDxhcC629dZ",
  "key21": "3YZvwUaJksr37ZbwnQw3137aSHxPvcAY8p3LZY7nuPCqgB14JFWZXe4VzYbDv1gdFLvPSynztnoCiQp8hENvbWbu",
  "key22": "4JywpK3rVd2pu9oYjZiMzZXbKu5DrCc87pMDfCfwgFKpuEFRHjuTf7wn7iC5qkFPmtfki2SSnmPAN362jqqApos7",
  "key23": "5e6NA4Cc2rTQfXZet9dym3LX2C2TjHBmnjZesYinemKrS5UYvTrce384k36TAaEGpwznPmQCS2Qx5RuEwqAyoQg4",
  "key24": "4CymXLsp8AgKHJsaNjYpdHUVdzx67wPKmjTAFmED2H3zME9b4zCkyTu9zjjFq2piQ1HCbH1ySakkKns6DcMxRM5m",
  "key25": "57kEeXQCJj9boMptfBjj2DsRuVRyc8hyLet9d1Uiy52UfKRebAksXV3idzg3ECByTwyLo9yjB1bqQoJ26LNurPcj"
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
