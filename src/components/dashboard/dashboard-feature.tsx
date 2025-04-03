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
    "5M9WhizAok4t85ECx6o3dYfYQaCAGXHBX549LW64JMBt41GxR2AuKmMegxzzysjaZ4sX5nM61Sdor6Zh6B99zeJ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j2ZkydchD5z7amFXWXDJNtCvBJWcccAgrFUms4DAcYwZ2YwtyuXP1r3t6w1hm7xPHxMZAAgB9J3Wt3oFjGUtSnT",
  "key1": "4UZftv7Gkd6JvB9orHQQGxj9hEtmEHQruQZAqHCq9NWtQPGxdUVyDjwAhsgakhtx65qnrN1cXAxHYzbuLPDV7s7b",
  "key2": "5ec3fLHrorJyAHnXu9KkSpgKZre1s7qgGwd1E3tTkpHpXRuV4LbMvivQeXRL7kXGCtVYZSgGaTdk93vxaVsi6DBR",
  "key3": "3P3wJGqcPzShkBPuVpH4FCnpvyhojKHdKynLfiH4ZqQwDqJ9x1qwYa3ogPF3udpD5YrgtzsEcLTf2kwAWvEEinnx",
  "key4": "4VBEEoBi2aTD7KY3ZUncRkvYd5UWhWJs1Qbhrz3vb6c9BR2H75y1eMJispZL3v8gSZwv8jBE6j4hyi3V3d66QWcb",
  "key5": "5KN6cDfg9mrtNB95aPN29WMNFWGynspRb5istmbFSJsgt5e19uvdMdCPvMU9XpzVBZRv28aBUizWPUHeePfrZ8YW",
  "key6": "2VenrvWA3PCFmHoKmahLR56YDdXTzf8ZSKoSstkfL23nggmgeyyXtRqHeRmLy7yG9gCQZTG28xA9yyR4QpyPV3oz",
  "key7": "2SK7jV3yw4fY8gfH2agzwgzCzK9A2fAqKhprJ1rAzRCJuUJJdPV8pHcekBHqV3b2TNvpa6TmP1hEv3Y4sUyJnwFL",
  "key8": "SkMwkbXpTnLUFXdiip3TezLRwEVzuFzpyRbEn35vhN7zMaQp2AvQk16ETXm6Bxt3zaSekRBquAyohxLSMZkG4vq",
  "key9": "3o3avQ4WKyiLGZq1bVAk2anYwXiAyWZsogQHeihEe1a3MoH61QbUnJuGswq7oPfkMCkVtiBHYjxagNMJ6PKugfjA",
  "key10": "2on4xqxj6ZqGCKnBugzqitTXKHr6JJxmoZrg5FKR4N5mpym9PpjwjKZckeyBwXxwxbR8e1FmBbovGCSyJC2vTEef",
  "key11": "35K1pLjSesDNczx64meAR2nf3Qyma9ZmH4k3HqTKP5Nh7xoDZtgrzfKFnmz33ThjxKC1cY4WMhNFfZdQNa4cQs9f",
  "key12": "3tRszCpLfEoDZqSut5w25y7iAYERiCw7QWuM1bbNkCHnXnRtxXzGcbokrR4a6RBMA4wDdNZXFWvp2gcu7uERofes",
  "key13": "5hgaCxSc4HeqPNSZGqCdPMEeg23dKJJ7jJV5BMFPVM1wGD9Bav1ATCJSrspndJ3HLKF9yi6xBxufs3twPYc2Ed33",
  "key14": "3Dvpd2ivSF3tUmxr9iEEFrNddbSc7Wn5RURmPWN87Mot9U8kzFYXiAQxoisVjnVTVrQjaH2RNdYd8JZpapKqH4Zv",
  "key15": "4RWgNAByzLFzAB9PKWTQpiVBNietHkR5DFYEpmwKDvfmoxuqm7w57SXkinpSdUGhJcE2TEFqKFxr67MVBJQ1Msrc",
  "key16": "BBSwerAXrEDq7Xs4NpCy9y3GcfTC9heJcxD7w7EHJrhA5YBACELCR8Mx44gt6RRPwEk9wrTKS2hpaBfD11GvATE",
  "key17": "47GmQ7QT3nVK5a1gVzM3wBWyjUeztVVcU3kiSyRu8V35R5jgzppHgUBfrHG9AjFHx6y8T2veErkS5xvgonuoCjEq",
  "key18": "f4jAcdeWnZkzwoF9fp3MTQ7daBhvcpShvTHNi8877F8U4EKfYDkTn6kEggyMgMLqnxsQ4BvcweR2ZEwhDvmjmk7",
  "key19": "2C9fcKEV6DTtJUP3TfaucV5APS8txeQbG4jwbcrqjFSWvFU93EJtMPXQPzzJUeQZxqzWDH9nsnZgCW46bZLcMmj",
  "key20": "25oyNAq8H2zc2hty8sxY1tHkYjfzuusDV1QpLuJ7nEy1KmyQxjeFqzr6xX1Pz5DUg54Bmwro7iykivZ83johjswf",
  "key21": "4jNuuSAku8TfKHU2N84irfCrKy1d3owfYNB2RHyGffzfkaKoyF1WvVbTGsraKTSeujXMU9CGwDdFsC2eaW52bQk8",
  "key22": "4evKgZqdGc73379EKy8zNTDRHQi3vK3f5Me6kPYsLBtrcuAEocuBu17Le3goxcXX7eJeW3PxwAMaaNSiTT1sMaJy",
  "key23": "3nhtzKLDBCFGNSR4YsAGWWyALk8Hbj1oqF1mmYBjuNKbzGWkfTKszuWr94X4C4465DV9gK1xZdXXVDhk4dbBrVyc",
  "key24": "44KC4oGYNPbJkR7gRjK6eH6vejuMgiDG5jh2txf31T84CarrmiEF62X62axbnW8NaKTPFzhS716foYdYBYSdTZgW",
  "key25": "4DXTX1BhXi6ypJm5exXsv2Qf6Tah3okXiQhXU9z1Z3deEomd2gUcyWTp8PyhEq22VykNiXSsMo9oSpHW2yzdqyq8",
  "key26": "53PiVxBTbnQBwDjdPbTrtUJAzgQBe2KVmaWzZ2k2V89j2AmV3pVTX5WhEPx6ezF9tzX4wrvAeiqLEJaiDMDLeJii"
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
