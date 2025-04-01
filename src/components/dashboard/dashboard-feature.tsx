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
    "21tmJXHNGanZGtJi3N9rAiTHwYeQroav91yidUWPcfr9b6evNCo5zQrwoFdfeRWLA97G2o3NpMXzBc52RTEPZasV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FCfkBvvPaUFcZ1ZcvVpXPHesHRFFPxRs33zARsDfYqcX2L19pAc96SG5NETxBMedUwbwcgbFMHCZnLyafboAouQ",
  "key1": "4B47sKpnzNMyTYUW3CiVfem5DeLuoRZR1eMbNqnwjmQgpHnVoAS2psECj3u3Nqma97njpe14sdSMpdwfVxpTCoia",
  "key2": "3X8hLJLfHQKXZAWFdULP1j5AtyMok3vRoxa6kAvLth3RWS1nHB11UpVtg8xVjHBCsbEdA3bn7Ker3CxUtHZAis5z",
  "key3": "3rFMjXah2HTpT3o1qEHsJrFgRXR2YZqUEx5GjoBc8q9KEc3BoSuGhcizu5VzYrnm8j3TZ3maF3ZuMXKrwruEip8s",
  "key4": "2DVAVUU8BscVcoriUkV1NqpHhVpF2aqs1yqHrhbZAZPu2hA6t67DLHCwdjSvL9THFu3EaXrrzu7hb1QqaaAQoiV5",
  "key5": "3STTf3uAZFhjKgh4ma2s6bn5DybiAbPpktiWpLJKzZFsLfYudcnkxQ9KapCL2fq1Udp9spJDxhhtrnFbuxWyJW6D",
  "key6": "5sksvFsNQ6kU4Kzv4TjemKGGXk8Cc3AXaB8xFXJ8zbkiggrEPrttduuniSZjAeUwVWK7GXuitnaqc6c3zctfEsxu",
  "key7": "61BkNVeU1jzDAxcjeYz14H6N5FyztC6Nz8UDcShLk9kLNwpU1wDPXv8PdbXCegJ4iaeheHdmhtce6kRdW8tjwRTU",
  "key8": "3zaNgXo3XtoGoUBeLBiG8stAvSxjGvcG3Bngoh9wYHhfrbD65id4oj1DRXZom4j9xQQjUrFsVffGpScbAqoK2R8n",
  "key9": "1fWTVg2bAxBG8BE9NkLoZXhBc8EMd2UpcssS8GmZ3EdUbJ81bZphrygzqoroVPZfmEVRN5YGohpXiYTpjN4WecA",
  "key10": "2sDpv1gHz9n33tuCDV26oBVHQR9VUA7V2UacgMJNMJLwZGkfMvLSTVJjpbcz1y1qy1ZoEGAKMgxmdPqFuwestSm",
  "key11": "2U5m8EFgcGxwv9ehjjtQ3CCewm4nufCJnjjR2SczNJq9qfafbb62k2tU2CtWyX13wWhxLdrkdFkKyjA8SgygyyXE",
  "key12": "2e4e3iZy9WgMkDswv6NpNv4Jyd7kMWaNtM1R4Z8THJXBRPiwnjjJWqfQ9fRfjczkBY8bZ74GzpRw3eSkDvrTXaYb",
  "key13": "3v5jVi78ZTixy4DFeBCLdraGemPcZHNnZfLZyavCJnbzUfsCXMAiSZKuw9xrxsu3HJcZimcPFhPQGbAsfpXbUwGh",
  "key14": "283FZYx28gUwjez56LNGt6rtGnVJNwvvwqb4ksy5DHSVdynrK2tuDRorPErKPRESgj5SxRadwnaszGXFquvheBKc",
  "key15": "55gSzm4G2Xve5dq8SREZ2T8GVmSUyx3pX5NQdrUA9XL4X3FX4u9cWxWxwhxVxjgupYm2EUhsjMUf68tQQKeKiJ2",
  "key16": "61kShwhV6HjTmMEhUw3medNz5aBT7ajmG4N1FwZ5Gm54eNYXNfQ6sstKpeS6Zf5X8Xvkh9YDxQgJdCs4G3L4hpvK",
  "key17": "2cXJMjeYH5f8btQJfAFHZdywS5LHByDzDNfgmzVzb3aqmH1GwWLPEdUqRtzSkpGHj6HgEKmwWLzvSeAyBWjETRhp",
  "key18": "4vBUTxYPhuSPeRmQmyh6s6fXKocPSzCmQiLSeYfSFUA1mi7nq1kDsUpwzLuqSqYw3hpD6GVy9zUtebPuWDpSKkNq",
  "key19": "52hoVun1u296BVhi2ySsCwPjYfTJJRmDjm48dEcsadycYmpoJ8MZc96Qvn4z687zvuJQt94L5MjemjCYbfzBgcCc",
  "key20": "2L7K62noWX4sL6evUmFFcCH5hpkRtRh35oSEg6HMD6ZVhA7NFrAAS3yPz9QbG9x23t1gfjhFowNXsg27JDiLZ74k",
  "key21": "3bd2xX64iUt7QtHr425rD4Wau4iTdBpR8CuKby6dvAmXARkNtZDbQwva3FpgVT5x4cRGqZdfAcjzwXShBsobMtTB",
  "key22": "uxPCXy9vGWVksCBCSzQbmQzwRvTQFJ93NG284FgQUvq5VdB8LVS59d1cVc95vAdh7wJ7Va1D7q1FbNEY8Q9e2iq",
  "key23": "k4mGwmnV6mGkLyX7YYyVeqLKF6r4WbdrEqfomTdUXsLjJ4jn9KAQfAwoKqGuSTy7vpQwGZSKrX9KeoDhKsQpUdy",
  "key24": "49Kq4UR3xJtDM2iqtNWzSUqWwtGSQtH7EkGmqSJUTXiFcsgtQDeHgq3EohaD2cu21K3uCmjcVNikduVTY2xqwjEK",
  "key25": "2Vez6kDkRnRRx9ZDgF8GyfpV1x8wDchSpxCdQF6ZyMt6y1b6GHS8Kb7nVSqk33UcmDi5gAAqUy7LLiWmeySzQSL5",
  "key26": "3mffmd7hSyuHtcqPaC7W44FF4F4Tox7XJULuuR6WVzEmcNDrTH9SzwQSd3P7rKhFZ8DS2jUqxRgxGEWZSm4YBcGh",
  "key27": "Gxpr1cQTCeTrgwexVNozyeSzYnYms1cLa8wiPu2NB2PS9o4xFVTSB6tgfog1CwpcM6kF9C9vV96RqzCQ1x3CLov",
  "key28": "5JwnLsehYDdA93WjsbTfSznXSkAj96icQmJncdRDv5jEdu4wscW59aGEv951V4uxGo4cDWHiL5dF9x6oWEbwueEV",
  "key29": "35MD4mgJMb3kkwehvQ6uGczp4a4kW5XJ9kWzwMGp4FuwNYGydtHJDa12d1KJuFsTY3kZQ6HhD6VcoUTjWbvzBf4m",
  "key30": "3652gq8xoHmoXusNDz7RybDWgCTwzMJWNs5FSa8rd5vYRdwWGcD2TGoCdEJWckw5hrcHs3b9ad9NVTee5sH5E1EX",
  "key31": "34bw6hevnJn8QysEUHVnivQXrWRuAmJAReXRrm3K8omFt2L14xfG159Hth2s1JkDLnS2CFKiziyNb4RX24SZ14Mb"
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
