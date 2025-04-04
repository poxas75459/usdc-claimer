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
    "2rJ6SSpivgwkhYC9ybXibj3MBu43iWuvdjqvAMH35MuMXJk9WuYA9dyesXgoCdDT1BgqTi9n2yABdFhwTZ9KfD48"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gjc3G4TU3NyvXSvQJDxSXAftuZsQ2xwqJUGL3PcdKJVVb8F7FdHZ5Wg9FMaZxbGb4RdGTYedhcpfuAorxvYVLxM",
  "key1": "43Mmo3BuLDAq39CQ6oafyyMZVNt2j6AuCAgBvdkbpcb9ZghZGddH5ahSUKcqRZQJ3JVoxthWgAsV1Seb6muAN79M",
  "key2": "61F7ZjAxFbCWGgnfL3WNsupG9xrz4GbFiod6XutikLN2jURLayBFTZF1a9ApJEHhxZXXsthasA54gJ7uU2cWmddU",
  "key3": "21hC74SzbTC6k2Hphb7PnQZvt3gZYSuzKzoszMTVFSPv2ceZjCJdTA8kwFbQgNXKS6h5Jh7CgqDZarZQjBefmc9k",
  "key4": "2UfYdmTugWUkijneeeFqKHPzNhcMxhoy9cGrJ1mkfQ4YXbt8oBpcBwBxvPY4ZostKm7dZxxJ25Dc7MSargxCVSXP",
  "key5": "4dn7sAum1T9ssijmJumTUNQEYxXrDTMvYPhvpZQP2pRwJ16dzz7pHZ6a8ELVRKUW5YfDGaRSbNWqeK2ccZEwXkrd",
  "key6": "3Ydud2Q3pzzBkhN5bXLdYQRQDDDuMqCnQcueSzG9UdeNZVif52UGLxhUr4nDEhYvmEKxuwWjSidWqCzTf61MTbRg",
  "key7": "dNPW7Zny17zpVVd9bMLcYAVphh98CUSC1FTEKy4jdcXp2dkhtB9sLc7m6iMiBPWug2d61AHG5n81W4sxw3YbP7i",
  "key8": "2Apf342RL5ea4u783ZSZcdCDvstcmyMZKQTzdBgUzoEdWMmAkPjLNc8UoY3hBWT8ZWoRLhr3kmUPHoFfh8pWMfJB",
  "key9": "3j8SPqFbd4Hs6KAVau3FopJ5FRtp8ZV9MQW9qWJG5TeFHi12B7EMBayF1CJf2g2vMsmFAT15Fg2iiWAqGhtj7oCR",
  "key10": "uyK1vuW1WaGgcD7WmZ71fpTYcjVwjQ8zDC4JuytuRc1R9rukEVz781RYLoykekiSXLKye3r3Sj11chPggxLa5hb",
  "key11": "3ooBNFMc18eqSw7HY8niuRNMSpkbgzaHCavrJSingSpCDZ5WYShKmk7fGPhH56VUa32y7k45GaVdYqpLrubCRGiZ",
  "key12": "2kHzi6fCG9kG1epD78Cup1HbrQirvjTcjN86FTVx6BDC6C2QydYW1gecdXEykp2RQJE3ar1Uubwnk9VYE4EDju6V",
  "key13": "3xxN5mLaFgPaAMFyKUpDKJ6ojmduccKHAsqghZ54K52hyDfiwmub9eb91qXPS2bpWj5nK5LARY2sidjWXYjq6aEN",
  "key14": "59eqHK3CHzrsxy3VHEwVYsANh71D9F6ZZNQ3ACVfUsED6Cg557hV2kSF3NGbwoEbPVhbLpqFQiWniM336P2WL3pL",
  "key15": "4mCU4qdfNBu8YWfgvAxeMDUqBvS9JDwxjWzazsZv5q9rQJRwcJkS9yqH77yacitDkaMxNoZDbbTahhn4Pzzbqm3P",
  "key16": "2kWBEwoX7C94522TLxRaUfQzejteJDdaWMyPwoHA1hULu4LoXnhz8k9gYyVr6L7DbdzSwtywr2jNGvdFt7HMBVjm",
  "key17": "NigSZqbFsqW5qUachkhG12voaZ1R3DQhe18D9xiGTow24yeJEfnxv1BWSHAQHDbQDmb9weZVXVYTq96AZd8EhcQ",
  "key18": "5vuCfSA4c1vZJL93eDwv64JnhCW4Y6CuYu98YLRa6T47otuhZNYCsXJb5LdZvXukXpy3K5qrq2QnzsTZoxwqazak",
  "key19": "3Qj68b68NdxZm1sgjyLwqSLAs8yqNBqqe8au5Fuk2EzdDU8MV2WXRrrBorZRDtSo6sueLcgPF8WPhxrz1XcMYasU",
  "key20": "4wUEE4syAJVbYEjdVi2LZj3MdBXKrHvryStJyVvkrxgoLdDWApYFnSKD1eKfh6KEZSzMRmL38w5MW3J2dt3GS2gc",
  "key21": "Xi4kY71xbtKv2n8jnrN2kELhE9br23UUKYjQJWjdYoUzNrXWvf1vD1Fyj9U9tPxmVdmCy5g2FEBryp99ArfKfr4",
  "key22": "4wDJDanjJJ2rXWk4TpfPvANgzwKQc36DmUFhV9PpqmugCpWbGfmkWgmX1HzHtVGtLM7bzdTCxGfddfdhRc7qwMaf",
  "key23": "5PGk39xwbYJRKrhNEaHuk6nDtM8p7fT1z6E1RAGHV5eSn4Nt5e3ue1n1jUQyqCtu6cd63DjHE6BhU73zjojbPFt2",
  "key24": "4vzEuSuT3gH5cuVttDyyTaHFCyRLjgCpaywH5gn87s5DAuUVxth9q8UppjRFSLq3auyM2vd9Dqk9JHsV9uTjWRHe",
  "key25": "5VFcTxqj6zbErv4azbxk415bEEc1XMn63fL39KGveZMoLEGMxJtFydaiTc2jXSEjrXeTdMveTXC4YHZVhTxJPVBH",
  "key26": "2cELy4PoGW338VssBU7DQUTCLvGrvPsKNonW949YRtpjGD5SudNMJ2HabzsvEmwkmYyU8s2HsmLLgKbQbaKfLQCb",
  "key27": "2Miwb9HpndWfBFRkjL2f61a9U5dwaXWefUcmQPCeQRB9HU47W9qEm6w6xPYkYC3WhgMEgxJCyMFBMUeN1FSFLDKu",
  "key28": "pfcBAwpMSyiLGH1SrQ343pJYGYFEr7snnDL66D4ww8DJCaxXcXCWZ11B9stAxceTELkM4nfnbGKLyZHX3P2RVJL",
  "key29": "4dHMzVvb4yQAZSwZLB4Cu9VVLjsYwFwML2ncrckzFNtt8d6bwLqYDTPshg8s7wVRpack5pcSNJhDjbQoVkQT73BL"
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
