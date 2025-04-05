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
    "2NpmCavYuRPXgQyRfRMja6B4eQNQqVvA7mWYUu5GTXJxiDAXv9o6MP5BYtKHpVxvtAn3jUW2G6abXkVCnXnmN3au"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sRjJjgSAoCpzxWsbKGv7q6r9GzobKGSwnozn4D5hWyhZcemg6ZvekqvEkHNqSMM6RpCmgdEc5xJF29wmVYdyx7n",
  "key1": "4cxHy731TJsoTZin98V3pbqQ6G1MXg5LzbGFUjzapA6zq4rNNDgfPSo2qz4pED8JD2D8Cejr6hJuS2pysunVZDNv",
  "key2": "5UygvB34QDiYqh9ZmQMnA1a8QeB2DrcyuwL8VeaLy2DpRawo4EiRHer5H9Vsuqq2PfnhoDKXUwhMXH9jk34GsjKA",
  "key3": "5GCdYXdfFy3CfvatGjaj4u7M6Jr6eUiSVFmsCuaxAEyUpkCw4vQmRADyJYi4vUGjmDuyZw5vBavvx4xBfwAPZqnF",
  "key4": "4PdMHQgfiWgWhvYzWA5sJVY4wg1Bk2qPdCnLNJK7QYfgQ7AHpvmaPaK4oAtbG1HW8cCMfwZnQE1bDKndgScz8By2",
  "key5": "4dXhkQqGoMTtSWouBzvMsaNxdM65TX6aeYYyyA1QLPtmsn8xp9BMyghnQbaPAmE8BwR9GFMH1URWm6Esvv3hVj88",
  "key6": "5SjCHowL9wXk8etJRCPa5F7igWHiohZK6zzLte7Su9HcNdouGP9psMwfiEFMr9PX6BkY5kF2rxyCwn5rhTjJFLmM",
  "key7": "3jyzNZKNdgVCnPS2wNdnBQXDVfBkzzcy8bP9P3SkepLL87Mv3rEz4MbvwhbnzQamzoQq129STVpotZhStPgZyoJW",
  "key8": "2pQAR9y7R9GWDmjqTtcmvYe98t1XJ2ZZZuDtaRoMKQ4q9S3396ionSbkV5Mj3vaMSFCj1sCfnQsYX2vBTCzpzQuu",
  "key9": "4QpL292qTaRSKEQL7V7pppBii3M6wjsekyTskwnDGMRNXLpscN93baQEHpUTSNAZWHCDV4JsC7JDD3tJZmB3Ynbf",
  "key10": "5Ct31CUJFNcnPRkDyCwfrznVBLLXLuHHe7L74b4perAhPLDoVLNCDMoR1obFSDgghmAz1fjhPQocXGTbNYwpdNwd",
  "key11": "3b3vBpoj743KTe5Y81nT8YxPzJYVxPhkt55q2KpEFNLwRuFrCpYxyZRad1ej8XoysXc3eJwS1LcyPzdM9yXLR37k",
  "key12": "qUbsnzJ1UnS4aN7YjfEtSD1ywrC3ZbNwh9MyLFZ44jW53Ej6vpk2TFVm3HayEa3P3ZCVECxgnU5mqPdgpLXJ5RQ",
  "key13": "5uGuU1RYrPxK3tBL6CfuEdxKLCB8d87J9369C4ruZkmuc3qBZBgpfBC2J23RjMaJcumZTysCoZYAHMftk6RCt5m5",
  "key14": "xe6GSFuxi8Xo8udt6LYEGuYxiZrmbaBnpSyr8KCs5TkWZ2pRpxUQJ3qSEBkuAaTKCQA61iGyeQ16jp5mjQaVbq3",
  "key15": "5w7tTgjnZqTHD7HN5jR215Riw5gauf3QZqvG2qArhCjvtAd2nTEtR8TSe3eotGik3iaQR5QFjQeKVyAsmhxL48V5",
  "key16": "5FKmbxGKBiHp5FvUhZjdC1P3LNkswGPePchL1P1qK8zDwizvxRCWYhPVs2CviCUMUoBmkvp8ahVkphi8efGFWjVB",
  "key17": "4zvG1RKacaUjAz9wFjUwZdwS3iyN8BpcJsWd1AnSbbE15TAqYdAAuD1Y3TtY84WfKJmj3swPkYMczNP2cUH31Vd5",
  "key18": "2LCo5gpds8dyq4MX3xzv1zWGTVseawfhu4J5jBxaqgxuTzVnkLM7Tk6ZZoFVWCz48S4e4Hy2t8k792tk1sS84mui",
  "key19": "26oS8XpawKDpH6bdewn8u15bSjSg3XfajugxXeABSqLjNshU3Z9tLy4H5cAcZzrpe3gYrqqnqg9ocRUDpAf98Jxn",
  "key20": "4nYsX4NbbXjLzrR8kiT27cjpr9myBTSqDQCePFE673jtGAKKEexDDrHpxVwHhjn5KwScP8hbgY7eLYg9j6J84h9K",
  "key21": "3L8Y5FrLm1jBoxZB6DJf4caEGUgfUECMzyGP392YQG46pi4mgwepx5cbpN7DDJVAh9cbkZqUbQy6g9oqSyfvAnhg",
  "key22": "2RtpJbKiS2oW6x4N4GKjAKdNvCXynZECDj1uMwRPoGtP45WgE22BtogwQ13bY7MJRZ3zExYcHtZdSh6vaAAM1ZER",
  "key23": "u9pSgNpTpaz8vU1YyTzoWSnZWRegnM1yA6Ts5P3JDimKb2gNvLMh8gksdSto9duuTNxsxn3a2RwmofPoYoZiRUX",
  "key24": "3oowgXyn8SuWUfeBJhs4C52k3SsRQ5cd8SGEY278ok2hZCfbu8KLrHoK7X7uAUwGUNFi7tYZi967iiRMbhwbwZxS",
  "key25": "4w73We4MQ8tThosWk1Vt4UMASV6g3652KwiTnCwbwAaQaTnxeXyXAdxttAe62Cq8yg4Gz2fnUzJ25rJzu2t8aMhq",
  "key26": "48sTPF5F9QarQ4kuT1He1zT6mzryX56ZsSjVFtSkZtVZAZJNymZ1q1Pv1G2G3Y6DtgAWyjwq625nnDC36depKheN",
  "key27": "MsQjJ4uhjpeW7oKuUnXLRLfkXhBFNiqqBp4i3RYQ1ihnViiwrexzwBYrk7Fng3twSEVRnvFiuYn8RixydaVhwob",
  "key28": "5oCkpSgZvf1V2oksFd7NWLgsassQ44GsY7cmUCn6RParSY5Wczvkk17h9FFh3jdjWpKXbkQue6ZDc3aRrLy9Q5da",
  "key29": "X9sANNznT6c7hq7MEoAE5Z6pWqkykrsUWGfUnpAcsyiBZEuTzSAwL7SEthxZ6L4adVZUkPXK52SiR3sGa2cekLn",
  "key30": "4jfCodJyEngE3mDW9F5pqvXC5GkqKqsBstBVQe3sUL7n3omFtBgqusyuSRS4S7BXPN1jJwKxwdsMCtaucZaQ7aPG",
  "key31": "3DDyvckoB8RxYor2DNq5s1Spz6ncwAENDihvJkoATe4VvLYwgS7qQTm7tcwas9zoSM1U3sCUgTHMGnvSLrWwSXYi",
  "key32": "31dG8UFjEzhedA5rR8dzikyZJLSEDL5V5u2n4eEr4KBHPRMg3xtWrFChShuznPZUCUwpbqyvyUG7TDSGMJFU2pVS"
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
