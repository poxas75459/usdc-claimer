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
    "2UHVAXKFsHgYjxKCUhAFBiRjR85G1nfQJCkwk4fDCQt1uH1E8wdXdqpBQdQE45MSyH8GkLheYnucT8PKSGbcUpv3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22gT3Sc1UCtu35S6keUk6Nzj2BDnbRtnuLUAfudpygsc2FgGfFsrbUefB1E1pbGFzxQZDST3w2FaHxohKG7crtbQ",
  "key1": "5n3LnAyZBiH1twPjnc33k3kj6B1zdJUUm5pdRSv1dvQe7CcvDPn9NT49ACJShU3ovNmHkbiQsjmmeMb7x4aUMb7d",
  "key2": "AQH7rnCumixHZgNECPkgcQR2FGBet3ShRtzu4gFUykyGariBJDb4EJ758PoxpqJQTezwmuwb7RL7GKk1E7HS5KF",
  "key3": "2VeHB4nbeARmcfWkC2pFXwnWJiTgEX7LUQUSVrU14fqwnjxuAcz8BZj9X8aYUyTmoUiyZ51c78Qornmgr6qGfrCh",
  "key4": "5PmQUpENiGdX6M5jswpCR4twvGL4yszaKtnx3aYKKLFCvCLtieybhV6wFzBCDawawcwhYwbATF17sicDNEaYReVQ",
  "key5": "24GgU4S7juRc6tVz3obTwfbkgJ3nqJuxKmzsovWfCnc4HKeotcGfRMjU3pY3kfMzZFk2wmEU1xzjXAv73jVY4AsR",
  "key6": "4WYxpYqVqWZpdUnn8Lvphzx8PkkSk5B1jkV1on7SgvSLUTi9Z7j199XZBW2Kr6B7V71qEoxjJZK3Z5W1rqhzn8U8",
  "key7": "5JFpbeM3sAK2KUGrZzCnRj6oGFy6b8UF1NWYXU3kVdWwFmWV4HZyXQdy6mBfwJ5AhzFruj1aMD6K2ptFcjzxykwh",
  "key8": "EFkvZvYEqqcaQtVszZLpuN3WoCxq6AYVMztJxHoy1aPPF55PhyUCFTyREBf5qFqong6y2Jr49XjQ32Vk6yBBkRQ",
  "key9": "5jFev7d7gcw8aE4ejCoe8Y2VYWBjZk1Uz1THJYWu32fYckEriqrLxDRBWuFV98VRk69BFWZoM4H9jFYoZmHRVVmj",
  "key10": "2DNtyWeNLWw1wNLvQ4ntXwwVgSZEBPbk3KtLnZnk5mW5uSdm11H9qW6WyMpGZvb7uPBex43PyAJh5Q1zHpBwpBXq",
  "key11": "547gTzqJmPCx8yXkxN8kBeXt83zZgWC4pqKdifWMD4BFDk4VAeSghQeAgPrMqKR2LNJDtfr1bMdejrCc8TKjhTT4",
  "key12": "4yncr1gqDMnt7NdQaypN7jkEcMYZxusbWewfGxwt1TSEWktCprnERNBXFuWucGHyT9WZ1Fr8rkUWjBvNexQPP1G2",
  "key13": "4KZQ6g7rRzwWFFkzkPq1Zn7q1mCtgvds2nGgz8bgtQDonwDhEcZxnizQdCekvC1RPPru1RX1rVm9SfsZqvyzBvBg",
  "key14": "5CrMgaPvZz1puHnCMmRm9zXq4PcgtotQGzbTxyM5s6jGHzbrKoYt7DNRyBjTkb6iyHuEUmSkH1MZK7yuRqjmmWzv",
  "key15": "4tYHoGRNAovu5J7D2TLa7P2jfAgpgY3jjoToLTxsn2DcQ5HFuRUpU5i9D8tQk9o3LWZnTDUJPZV7SR5tWo4SP5Dp",
  "key16": "2TRvUJDst2oga7iPkKr8VKyYyEtnjqsMp42p5KXZCoVZnVdsQ8KfuMNKa5LnQKSWub4onnYEgmey8FRPWQjvpAFo",
  "key17": "4cjEgfhxrV2y3J63eGdLYJSHYse7HRb1Y3vEZrhg4ziTCRX6793CNsKyB9CD9qLdKFQysYNT8138prr7PS6PQpTr",
  "key18": "57aPCYjNDDYnu8aF76ySkuPFwgDszMQfqf263tqgDALU7dN5nBPkY539XdwmobaSPJKg5YQfaoPVVn7hDYjsthLQ",
  "key19": "2vBhVxZQ5gLKtsqZ6GAKsEijVSSiwAGRKpY4MmN2h5aM6TSUgYfti57bvsBZ7Nj66jDEWcfP5fiQwwvSAPyFTSQE",
  "key20": "3fgaBg35UiHWE6kCAo2Nn6f9vXNuD2YPL5CDpqBxb7YLadNSUGDcpn3vfcp8YVHVPmLyjrR9dgd1knFN776esPH9",
  "key21": "4Urty7FNRSJKCPq32P5Y3UXWPkAt3mWhzVW7uzvQ8UShBCQStBmzXhAiTVLVXSG7XW9DZWD9eoMn73cxj1EGFYE9",
  "key22": "41UfvFjhUagMTFtv2GFyn1mxS4UV2AP1fwtVr8BuSiQkEya1xya5qx32HmLVTTiGRc3qcNuDkx1ZDerDwssP4kY6",
  "key23": "5wtKQYETdYdksWt1GY3o99gJadSCCQ6FsKWa8ZoywuX8KTYvFgpTp2RcYAuSvmJFrm1jkM2jCyeQawYGQYMgxxuu",
  "key24": "522bCk3V3uRcRDmCy6CP486FK6K2TrNKD2FaxAq9EQWP4ZDBKYQGDdWczwCFo1DKHT8YKqsDiwps8Ww7PGG5iC3D",
  "key25": "5ThVtMaPmwJGwAENaiAauSM9kwxBJ39fPvbxZZ2R5Qq7jtocMJ5wmcAX6qJ5Z3cVXpojbgDTeXUzaRMnp5pryW5u",
  "key26": "3U45bqj5ZbrKacC4Rve7YMfzRyBGNusdDmwrimK7jXDCisdoy7RWCnCKSbDTsRZswdXYY1XpspG2Xhm3tZ3C3T9X",
  "key27": "27AsWPwdYNgEU93CCzxACv64CoXGi5ikzpAkVNg2RWxexbP61sPh3AQrqkLiSZc5aN4ubKwaJ8b71NRBNjNvMAQM",
  "key28": "24uMTPgy2VTL7uxb4NwZU3AgVUmYaKVtE964SiFuwCPFcvLoFABsaabqXmiYAudBq4CcfgtXByMZgDTqsU7z7YHb",
  "key29": "26GJRxYd7DSvL8hrkRpPsx27jiMZ2Q6iJ8ztZihLe5nZmWeUgVN3rBkUrQww8qPgpMRtvEutUajpstYYnpgoQzMu",
  "key30": "2Ueghudfq9xCF5Za2A33KQBoWXiQYq7Ho9rz4TM9oPDydqv9cg4yPtpncuTp4Hp8Xe6xQTsRD7LAX9TVvNposL7t",
  "key31": "5SLyd5jGh1w4gM48S8drkCWas4Wk4J8GTWk9wUsvMxN8VrN4gvdrgUBo9941osxHTt96hum4Afo2mNGxFaHPMLHj",
  "key32": "3UR2JRAKSKbzpTb8CdVPReNQ4vszhm3xQnEDTejrfT7mpCVQ2Wj3YQxSdwWKhmRecK2pyXvEb9vmigeoZrMgMHgD",
  "key33": "LXKB3AqdMCoCh5EMnfYfwrxFxEiFMZq8btCyenz7YgNYdzfWs6VuLD8rfcGxwr5aVM1hptBFURSyBdm4kYCqMhM",
  "key34": "532F6vTNMtKw13u5idbMqYtBU6qj3t3U6wSKvdNuYmvYNf4FKCoa7pRZZCe9ffa4c66MqyRufAkWF68rTW86VmJz",
  "key35": "7yyGyw95kYyb92yNcQSd8A9uc2vgtMeFYRGty9mGP8seZHRBrzKV5bp3DA79YMLV23RX5iQjbWP5Z28m7tPduqT",
  "key36": "49qUGWF1DMwsJDmUSq45PEyJdgxQhCYvH8Ry3zVwkgbBzC1mHQFKdW9jy7yVStSRNDF9QT3eBsZ482EL5M1QfLjf"
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
