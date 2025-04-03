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
    "2wNoJQxJA2eiyVf7onNwuAAvhzjxgKRLqYvZbwQo1gmny4NXnck9EAgzku6AmMZreTqpwcZaizycPk8VmS3MJTb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sTHZPPD5b2vXk8zmGNfWfwTng1KGwG3y3u41sV9esMeAaD4W2CsDVNHYpbs1AUZrFqJb2RaBbiYodNzKQEV883q",
  "key1": "3WgEZeFXqmnJ6yPWS8V1gbstMsP1FpFdnpzHujZNcS6jMjPpWW62sRHTZmNxyu56Z2fnGxWBN2k5vYXCB7uWdKqG",
  "key2": "4c21nnrg6XUgWRwfiue386SbHnM2dB393zBDtpGQ6aF9ko9ziYbgrwoAAtVFNkDg2r3JAWNDsobxa1bfN9kiAnai",
  "key3": "5TraH2eEcopozBvQc1MN5EJYVaWbutfSLhTATqRaXQydzvuL4A126whaZef5eHCiXL6CzndTTwoHk2dbB7bL6oiy",
  "key4": "4fZNooPNgKUXXBLZor95GTi41W317LvWckRouSPqbjmXvCXCv7QiN1KWfhh6NhcZdXhdJoJJiUgtytL4K1FEuEgj",
  "key5": "4nyuCqAExg2ekTMuEZoxqf4t64wqts3Dts5hJbJ5TkdgzJU821Kvw1cvcBsYtALfumSqNFPNxm7BQQDt2D9hXDBu",
  "key6": "3aD58XQhKnjRcSaNUzWV9AC4gXnXA8xbCPnZGF6uJZxqVti5mUvHDEX1dBRsYgVXm9oH1K9nk7UcY5uSZuyCk1kx",
  "key7": "24D3m7JAPqqWw69SQUWQopw1HLWMk7XXyWtNghtFYFe646GV2VcvACQPpHaaead8feLhNSb3Wx5GNQQHU31Z59kQ",
  "key8": "2kpMULkUYKbAhWVuhz1XJzbYcVxRjuJqZ77uasuH4ggQiySqw5h4LGgP9Hi3TrJaH3SWfTjNpmufav3eLp1epq4X",
  "key9": "2W1STMJLesceC8dxEpoww8GsnXtubK2JwVEvF3YroudWWxeKZKYEiBEu6qB5WGu9f8WSfWYZHcw4kNpSQNzbkf4v",
  "key10": "5hXq4pkCwSJpB4moghU4FrDursSZDiYCKK7tKk9Y6Ajq3Xp8FWZ71sEWGC63RUkCDj8kpy8Kp24zTo6LyRDvGa74",
  "key11": "25PgEEnpMs3oMfnQu9XmtUH9RCWvYvhM6om4G7aV9n71ztsszSjPGgPRJ8iw8RAnZohSDMzcn75arvsTdy9YcnSn",
  "key12": "2CVjn5k77vpASYB4m1pxo3x517HPhSZtJhZqw1LPyaZn3W1irLEatzWdZAPUtZqEAiFEbYiCGmwWgWg2AFPVMKKj",
  "key13": "55yHYeS4VSWB53wCmwEqdELtiRVHFxCZFEFTeeWnSmMFesvpwv67m7G7qXKArRMRqJkYqMtjx7LoUwbJx5dqmc1z",
  "key14": "2ZfJBkFZc3WZY5TWC1JRpdUrReLioYrjhNDDP3GC7kL5YhHhTxsKCcNUZK2oK1y93zUHin9Y9buhsHNLpsTxLGgt",
  "key15": "Fpb5L7PRzPLozEL6mtYYnYpt5X25UmcvwvzerqnA2vTV1oJbyUX7d5kSSLPnovdPv9WgbSTwL1geLh9fT2qXoVQ",
  "key16": "3w66QbkRYkywW88V8uKbcTBwRJvUcNFZ7fvRt2r3MJ2G4kAEi8UNRSUPuK3D4xtVLJjypjZ3NtbmerNmhKMCECHC",
  "key17": "62qKf5UZw22jF2ef3wVpZFxZQcKioAdBown2YUJVV1jnd26vSXnma2ak11oTHmiihETQbkrLefim6NjrLmCn2jDd",
  "key18": "moqWJYUupv5e7PmjBtj6S9ymA8JwbUxp5aQUGQFL9cHra86qkRLidv8CKursEvGHZWh2Wfdtzz9tZTnoHyHLGMP",
  "key19": "3u5y1iv1t5YnuBMtjFSBWRUZ14zAszBHKriZNouRBP1E25UsyRjHrfMdftFBjB4EnnAPwPHLPt3uPcVe2AmSET69",
  "key20": "cPgcDVNg6Z5bszbcmDxhBTPfphheZ6oXqPN49K7NnPodvBSpuBPYWgURABGQ4qUzr4hE8tri2pEBowSh2ofArzf",
  "key21": "62P5swX5GGgPy9muzXat3JGiWLWwfURA1HgV1Rg8gEtKPDNnVxaJMrWBkCvUqytzVKF3tv81efwpMm8V9d13nUJn",
  "key22": "2TxfspDvaveFaJtyAion6V9vWyAD2tVTtV49zj1DoHGKFhMMA3FgKK9tWGDiQM2Va7LUprfJpbHbfdT8AucZJ92K",
  "key23": "HCSXGhhDyY66NdxTZ9EpWtJLY2xDjNMCdH2ecdhx3sT2HuF5CEbV1V1fgZDGQaxnvFga4uBsAnNUdHwuJSkD4aq",
  "key24": "4n4zFMA2hRgzTorUdsiqntGybuB2kUWoZiLt946E9ckJQ2K9Bfo5EUnr7yqwqHzazLLYCqDoHviVaSME3P4ZmEwh",
  "key25": "2p3YYSnpJh3wv7VRbgsreeV7N1kiDYM6jDcJBzG1hA1AX4HCMPVFpv9KGWVaHVHbaQKo896sFMrjzrEq6A6DK9qa",
  "key26": "3En6z8L3ScMTF5WWZb54ESd9rB82P99EE4fzt4wtyWJNbLSQojzH8AaRgv93LcG8nyuNKHJeqMq8m3wWTr8tiL8",
  "key27": "4aCg6zFRhx2oR74PzPmrSLuyNeb9hRerEYfgh9fTPfjzER3T1oe2FuU6jynvMpyrqrvmhctmuDvy3zTAFrEyWvrT",
  "key28": "5PxTfaMNp6PLgpfvifYQRyZi5Bq4uhxtPaB9w9ukd8mGzqWrdTJjuMxjxocRXywVuNDkDttVt6aDiHnXStoL6MEs",
  "key29": "3638fiYTjSL1fs2127hVwoxK9okVg6KAQ8poKhJpn4roTfZjZRUvzSHgqptoPaeLKSSH6AANP1g5ikYFEQJ6uxie",
  "key30": "3y4snsjwog3wVnnAfpsRvm6eNs9wKurKmphDPMWvDtiBEXPknNTbSvJZgYD1Cuxr7ziDPnMJ37rG5geNyMV6ScRQ",
  "key31": "5cTutgGNAydZsk8a7TtxUM7tqksTEdCUxpPNbwppkmBhbwfvijbx9D7tKdLyUZzDjo1JT8oakpF13JasKam4V3hB",
  "key32": "t4ndgmTQ2yaRPvzCBWtwxx2g9QKFvjJQE3i5u9ipoxhVSQV2Wy9rKTVrahdM1mgtg9tMx1q7i8hjs7QfWQe3k4n",
  "key33": "3sYqjGkUQHo77KjuhSwaAgd9y4GX1ZMSuTtWido8ay8VTsEx7vjweJ8Wifhyf33tirnGsM9bqADz6XH4q9wezgii",
  "key34": "3LKnkHww56tJ7bR2PcePgYT8iPN1bWyQ6FMXXccVgbMfamGKE8ekFmpWqCq7RTyedva8XTZSsCQP11Tq1SyyYhZW",
  "key35": "3ExCqbNmKRqiHxmu6iJVseSQLnYtbx5Z6vNeAFNyXZFu3XLp9iJjRpVRSvzjNx2V9rahuFqivVkuKaZzyWdXJtPq",
  "key36": "37sPpAtVpx2NgVxTsyPF1gjJMWEdohsCndrisbCWoJbe5UtnrSoY67gZKqZcTuZxAbdSwqXykpgHmkbGiyvzoVWW",
  "key37": "3hwRZxCQVMsTujaBR7aTcTsgKHj8ojyh4Gwks2G5mR9rKGus5n1cUK8PqaFgE6jHGj2BJaokmrWP8F62Ks3hkQWp",
  "key38": "4Q89PVGWyv4hfuzybYCskaxM19Gawo5gFjqNGkBGuzdSaQ3jkPBVZoPkjyanADmQgad9VWf4rtf5coiYf7MUJH1f",
  "key39": "5nFDG9ccnj7cQpNha3LuFhL5gF9G9LxUqfDgP22Kap5PaLdWxRQBSxS5AoGcZ19t5c72JwaCrs1W9F2AqZo5miCx",
  "key40": "4r1J9Eck6qiCbtnwTJBbCopxit6pcP5g7vsjCdut6DTg1qwJ9a3J6SatLx1dkYF6kMpDQyJWBdVkTAzYUHMvQztn"
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
