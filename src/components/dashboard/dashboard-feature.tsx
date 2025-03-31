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
    "B8pZqnFnYx3QRXSuLXpgBMCmujPK2BDapJ7ThwLayrD8uuTiG5LLxbvaKhAsb8EEiuKXY2KnVDFNiP8r22P7XbL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DdnTA4yEVdzEUixXajbCUuHAgYXRxc79mqqy6Lub7vDJyLUEcBLsuztnXfMdSfzGZt5SwKgpDKJ7B8CcCBZfmBs",
  "key1": "3cGhKhkYn6tfKw81Uz6BuvhQiTWjMDR3kTtNk3ydN9AAjk5R4fZm95guWuEms1gt5khhwtBMacnRWvVdxGZcCczQ",
  "key2": "ySjK79vfiAaC4peVYJ7sZbgmBGE4PNS3uJ5q9D7FLA8dcsQg7iuYRgsNNnCrgsyzyBNHEJuYPwMBRwK7NTk5Pwi",
  "key3": "21MzraBm6XcNiFtasrpG2XuT2a7YCVcLB6CuMLhwY7v6zQ7BtcK1td7Xqd8uUV2anyAWgYQCL7PztAjVmDaLrLyr",
  "key4": "5nsoBemF86vmaxGqqWM7jkdRg7R6ccWXQvEWt6qzrsjoxC9EdZ4xeZYB2fqvobrq5HnRuGHAzU5caTPYG1Yh4ENc",
  "key5": "5GYHvF4XSDNUYL6NZiuQT1vShuHKzBxzeyFZ2NbrNsLzaSxstFRdn1WdgZ2jYNjUmUG6GW41hPfMRcR3wE3i8Chi",
  "key6": "j4rYAKheMpXWKXjULnSWn8UZTQYn4KabGXpQyy1JmZtwCyatDe7weLC5uytkUC8ygPweRGx2RtaZpQac8jq3KSc",
  "key7": "3pP1yfRbdSEr4tE4noWMbh6isrCL6nRVqX4WyhsFKJHPnNrxWCEgMZxLYZ1VKq6xf6euUmugGEAm3TrNQooUMoxM",
  "key8": "Pv43DHDGPCxFZDXpMFDku924KL1SkC1m496kxk3vEYyXjZQBBBAPHgV9VyXQMCM7PYPA47JgCUtGxaBAiF6hcuV",
  "key9": "5ovCnHBDV9AkmHpdCL6UvBCMN8ZMdARAoVize96WSJvYLh68fWfVjwF9AjTkbRgY1zcTidGwNiRRRm38RjETyZSc",
  "key10": "2YfFHgi4z2gQwBgDXbWpAtQuJeHZiFJP3yMR97D7fGjiE2jZCXzNJejmqvitS18XDX84CyGUETvMr38WXRCU1kri",
  "key11": "3KSLNByUMmvRLXbbsJyqtHwtbhsLHWeGKsV7Uv4fdibW3ntEFZHU9XUCohN11KMmwrrsWRhoc3TzSpQ58o1oXx2q",
  "key12": "5CFH4aLzfeJWaoAqMTjq1HWXxcHo7QwBeM4XnazHJatWcN6NpcW44z3bEPH7fwRH5xWf7S4sKeyTinqsGGMRMkEb",
  "key13": "333ga5qWPNt7T18sfhiErMtW4nLw2o2181xpmE2bneGjpG1oZScF2MBBWNw1hR6kQgTuMDQCsEhrs9cev9Eytar6",
  "key14": "4wgb42ZJAFzpD9UdjAbDZ59wsNNswwbjF6BiR7wATXDMyrM1AGDS5sE6oJ8LKso7XUDwBunHPsiwYT8y26ysdN3o",
  "key15": "WLYrSHDPTBB7GC3DBfo8PEz4fqRQ2AkjdXp93XW6j2cBvJfsviQ9t9W8UrXEGbrKE2nDm46bGv65XfPqHLhMBiN",
  "key16": "PXQYJQHEDb3EcZuMZRxbrZWJ4eGaM7iSHAJvp7gmw18QWMQiJ1hdtcjaqx6W7omLjfmxfvyWgHDfKwW35DVHGXJ",
  "key17": "43C4xaBBWuNnN7gYaxaqtRwBAhLpBEcuD4GNjBMdZ3LSiyNxQoPAEaZh6nws8MHmUKM4fhocfG1kchF6hndhpMeD",
  "key18": "2Udm8Gm1ZorMyg9JnVC77ZQmq4Jmp8FwBkzERftiDcgDwBiSRPrayFwe7X3NMHe4c1MXPpPbNjx1piqDbaihwcAk",
  "key19": "3eYyRHtoGWSYwZc22j6QCwJYqjHHNMyYU65bLVPjHtWPZuA7Rb7VZ4tWfH9QKR1FMTa8m6PdFUaCXegKQy1qhKmi",
  "key20": "43yHyXqM5bWt8u2dHXNU4gwUkCmhWoYfwvgLfW3tSPXXGuGeJrptfd3KtAD7DD4ucGruJ1RZKfBJHkrxit1LHdQ",
  "key21": "2BTSthv6kFVwm16itncET5W8aj7nJMGG6eSBsy34c6m5AcbAfPo1pUr7PA9R53s6WtWJ2djGPfCqq28nUvLTWHT9",
  "key22": "5yotfPuJqu5UC4MLT9LfsB4gCRMq2S4HsayJ9wQ5fimsty9Wd3YZ522BkSAYDVvGMnPHEeKoMMK1G9Pv48Q8sMhD",
  "key23": "5nPmenbUNobzsAYk4sfp7k1ZeLUWVbDeTcZYiovzudKrqayTduVuV7V6Kn7JguXVbh4thikMmX83au5BMjeo49LL",
  "key24": "2b85NncckLBhQU5r7iUm5oC2Yqrdmbfu3a3FoV8aAnchPQZV9K9BPDQKRY7EmeCrakNDcHHpspbv3zUQ6nYRD3EK",
  "key25": "4SniBKCmZHQC4eCVkePSBMm7kFFEK3edM6PR94GzEFdhWjgaLHzqpXHb6EGDm6HH9kfvspSgTbBZYRJqAgsD27HH",
  "key26": "5zVhNE5Lu2DpmznAb1qHF21DUz2w4PFZfmZf1ZDr2CZQo6rJo1yGjDjZPD98iCEgCPw67Xd8iXiq9ub2GT97U9gz",
  "key27": "59wSWngN4LsGDaRDaHzufS14yZ2giNmLn6zRhhhUDBUdXYfBb65k4u5Ugv8hGDh5JnPdJ6JtJ6vcoPuw78HqysuT",
  "key28": "waU7of4gHMxcURDnaF3xBHpSZpETBEo6rtk7uiEk9YCc83TQeWUmcV5Z8B8iGocvQHHsZVkSEAgcHratti8mme6",
  "key29": "31TPGTtMwLiPT8GTeryKEG98SygbedMs1Nq1bCmUFu8fCtWJDTXgHL25fu7wyEG25EDT48VzJ72QC9Zu4gX16oXa",
  "key30": "eyyXxEwZ3ZLy6RJsSHzRtfQiV5hjRUC55V2yLdaCQB4p2Ws5AYAe2MfoSVP4Rz29Rdh9hvCg1ePCVwWa4uP7geg",
  "key31": "3uDMnsxDv2juCqyYtz2UnRRYU92kKvYUHrmL2degN4zPhykbTRmieG4TKRhebwuZ73DVHZ1Kg5SNbNAniLftBeHv",
  "key32": "9f96Wu2sfaTCdgzuXf9c3Ufs25q9eJJpR6iP4HZsRuMJfBWEsWg3XAXU3QazVQaqzu2YD55aafzMQoEVnB26oh5",
  "key33": "2CYy9mTe6MsVKD4Rmj9g5AHNKb6i3WsQRP2HrFHATzNmcZvxCaYo7QKmeARQ9if4eJ6WURs1Ta2twKLZ5uXZBN5s",
  "key34": "N5trmZeMhpFTcNNSeXojJy4FPSJ2bjFSitSePTEyrQMSJ2c83RiiqMrHBd6Lb9XhFSWht3vg2gjCAJJSwZMpanp",
  "key35": "3Coi4RZos8VCK9Ycih8zmMZ7wGyjjWFCfEAHJS7bKxAMw8XH7FRhsUPG3NDVi6BM6Wfxuotf3wZwyWFyLEdcJVXN",
  "key36": "2hcVvUXJVCdqaaZv6fo4pZKnjSKpcGMsni1XsyMMUQqbE9qNohCTnVvAm5YquxZZNxDs4nhTvAudBBumvd8RNwAq",
  "key37": "51fEKgH6HzaZkF9ZceLCeN8cEdj42493dhTtPSdi8iVEWVaSLtYyGqwyFE4enMa7WW9SfP3H4jy4iagJvybN4s6G",
  "key38": "5KpxouDdWW1pfTCR7HhyrtktntoRwsh436vgEt6zHJasTZiZNxzQvshbZvK4WFUNDkgHiVjJa8RGYqpiX4F4xTsS",
  "key39": "5JhMfFXuGMcGcUC94EDuqMM9Fv35pmMawL97rAWfEj2XPCgaa5jT1bGnUgjisTFJMmzkyp9BeDqMwycWvrgnFuF5"
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
