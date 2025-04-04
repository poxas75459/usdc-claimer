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
    "5sSozsitaH1GvGZBt5VnSRwr8kN7bdvLjMsxGmQnkdViwzbRhR2Y4hkYYE1syW4AVPBr56Lw9RXLHz3BSwYSxZuU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62ZbsK7vryqcNRpLNgsmyjxiUukodgrCc7xddxw6vMamci4imZytvLrch3PHq16LnLYdD7HYcfj8WVnTb6ozpxTG",
  "key1": "4Wz3464xh7L9K8oLp7Q3oCwuJXgDxS4QAji3BxQwWQ5boVd6965YjpP5QXAfNUdyxdVpvy6wxXzWJFjRoHUqvGw5",
  "key2": "4r4hg81rUMey7mmKgrExbWcFzyTgcinpTvNTPwzttYeo8sXVBAthdVH6vk33Xdom2kEiUByQwVHmMS9cXdMK5jnu",
  "key3": "fAzdpLxEf7hiJvrxpzMxs1yGL3zcw5aVh9w8nDF4pJCsfnKYAQhNSLpEhaYpSEPyyvXaf4wYXs9FodwBGCznTKJ",
  "key4": "2nNMEag6YFm8neBK13D5NKBx6JJ5gJbx5aGVZ1TYyAv8doKQeYiPsgpANmwAMmzM4UMR73euQ31tNHF8Dujump5B",
  "key5": "5crS9q4xkbKD48wYKfz1htJU81SxWxZzGqw42A6MzXxoaa4H81t4yKqNpZuKwHqs1MW4Vyi7rKj38Dn5bmGK4gou",
  "key6": "5w6Tp13z8eEZjLPLo7px5JyrxNAPL8ErNGXbAYc1tD6ap6xreo3i6YrRCBgetCmHZNQRnDv7e1RzUuGtbrPhcFXy",
  "key7": "5DrDtMZy46EZ27m3QturGN4vWA2BYBdjyarG2ego18KbdzgHyZgBHYMs7sTrRYhoZxoDsNL3XhHJLNWKHJ7nHKE8",
  "key8": "5wBtqmFsozbwMLHk1pNeWnNRomgx8HsL7drqoCqRNFHGxSUiiicZmUZwcdkF4CD6LDnybMADL7uXVosKbDHr4kPP",
  "key9": "2UrnsX7iNHYNxLQU61GWpZG335Kux5P5qDnt1PDYzFREo7eR5yAiMy4hEvXtwnCAZx5TD3NgVEUk8gojNNaXZF3n",
  "key10": "5gjaFh9cG45dqPBCVM6J1VxrDcxk8Lfa2sEqkeNFJVxrZCPBvuTQ2kKZtRTYMejc5caBpTWJqLdqdJh5nw7Mh4kF",
  "key11": "mSaoLPYLsoDWDnaSJa51EEP12fY9tvSGNNqCUwL3Aqvc9G6sGv3tzmLmC4FuzLeHS5tz84xo8U3ZUpfWy4aGGgY",
  "key12": "3F5suvbj1hpedtXvLTQTaXqfSHj692FVHatiCXHLfBkEhHpSyz3bdRVbHSBtsyYtCD6FS7mJqe4MoGJtr2jWJ55v",
  "key13": "4bDqMNdYtGFx5d5vCe4sfy7x3ZoD8gCFUTMLg59pRxbhRyATV1qsayjCdwazvNeJpQ8W5EVVa9DHdaFiUkmZrR2G",
  "key14": "4rRxKytKo1D68iwRP9ZYEap2oCtRA8ZaWGcotnAk8HPiMiFt2uSfemL5DTnVDEkgKCf1gR5QvAipZ2WeJDNGfNf9",
  "key15": "3S4mhcRDUguuVAP3WYJDVCfY6JrwGAoSBBUdk1ZKLnMGh5uQzih8VVmN351G4QdBKVnjzuHLsuqHT4evYSk5Vn8Y",
  "key16": "2n8bz4ZeaGTmEMyHVoco3GDuXKmxaVqU6wpGCVGG3ftR7MmRRgRtDZ4i4eMufqCCmYA3Fxr9i1bQjpC3v49D33VH",
  "key17": "2HcWY72XrQo7yd61uxx7V7LXVvHmzvSYfLcxfbmhZGs8ERWsKA37V1GvKWUb8SRZzq9UvjWRSgRGibhb6CkQdHn5",
  "key18": "4nHH9WuqiEfUj7qAanyqzqqhKaJZzyQ7sa3AYb6NejHea8idp9qAmKQGL1bxLRLbmhKzxfg3pHH4Yp9FCVRowgK1",
  "key19": "659yDT6JKLb5qJAH2bCRTkd6HDhorUwanYLLrmwsvCQqzBEvGKN6z3siBD9mCsiisuUZKMPj3EdkeZcYLQzBH13t",
  "key20": "3GYDsWjC9XwsbiBDG8BLBujYYA84B1dgJptMUaYFBodF5xfstK1r8TeJ8tZG8wjHzGatgZQDZNJ33YAzUrNqKZmx",
  "key21": "2gdpMWVnCUUZUUrvNuLyWEDQovxm5j91a1HkoaytsjMpc2TvX2m8rkS8f9WYQaYSdtQ6cJvyQUzNrmSQXwBMjRsT",
  "key22": "D98XXcjcH23ee2zvFba5qnRLy7EhDxRqBrjXdurqsxtLJvhGAyu7oAsGTxNe67Z81ouuungMqKYQKvMSf1p7tzA",
  "key23": "5RpR2SgWYZySLr6GPYkAbEFpMybLtwpwoyvmA12BU7g6tSaHsDR2gMiwQZv93ZmdzsuqmXnisnnPvAqCwGUmGaRW",
  "key24": "2j9uBE7AEP8rm4nWgba1pybSfnp1ACPthzhZkkcdViQD6DtiRBcDtw3ezW5qEKEB1AJsococi5a7C9CTpsqXdWFs",
  "key25": "36zTuMsK3V2qmRN9svtChy67i2Y6zTEBydjwaXaiKmeEep54F9ASfiQLNyQZ31VZanhUuJb98ccTTib5bhPtmetr",
  "key26": "RFWFk96M31dwwqQTGYvLFBz6BMbEj2Xk2EPfB3tZPPUhPSR79DYzbsJqyhWTkUPzdZxtjBHv5sqE8eVC7qCL88Z",
  "key27": "JE8ztubiVhMYMgEeSv3Rc3ryggux5kPMR54FXAsfvtY2C1rinPmBfEuGL4fgJf48Fn5h7TH1wtA1BFNXKbYZnLC",
  "key28": "5Kma81cYyYkCnEnDDQvqcXeLpZvG4u8PB1k5iLu7872gwKavNpeELomxXpggugyHj7bSrbfU3WQvc478bypUcD4e",
  "key29": "2DFEppse1Rj1d6sFVPE6YXAsPDqkW5gEgFBnk8xeBzsRkajb8Pp7hyptxtLhsR9F6tVeU5JwTpPoKVepuvJ4YBZ4",
  "key30": "63uLu1wWmfv8bhdQNpa7T9EmNLpLLQzskZRZgEwTwZfB6Dhc4xhG2rZsEFpoLoEifxvzGBr5vjmtdJNd5PkDNqnw",
  "key31": "4f6Gc7eKtb5EQuByQ3dKjV9E6n4gPZwxrLdw6PafKwBtgBGCRXiMYyWPHQJ1mSRH8iDZEoMXAhUveFuvNieoARNo",
  "key32": "23a248XaM5UboNazN3a5LsXPjHnoP81VyzJdjYRFds4ymxiDpuzDK5rWHitehWqFZRGovSkG5tVW9qm8Lgek5Vm2",
  "key33": "44CynhJVJdiqufLsCe3pmzFu1cpMKcKkjU4HScE5aPgXGTuWwwqgLQ2xjwQky5wRAZUbLViY3uiFVmzQhFct7dk3",
  "key34": "86Bt1PJvd5J92pi2wdc44DFzVgZ9XBYqmHaTohBA2L524veRGXK3JtuxWELJGPS6Z5DUSxotpjCcQRc9n9QtyL9",
  "key35": "qTduyFGxVkX44PmwA5HH6uZWWX9FzGxcNCTNR2YkUC558zSqfBhnuqmiEQRC7KkY8NL13b1SssNAKh83Xug15yi",
  "key36": "3JHLm3fXKoSGAGkZSxiMRhUrQiRsFa4tvGbJuGwisgZ8TSUbCJuEQBHahGQmfpfThp2X5vALSRqTxhBsfL4tqehd",
  "key37": "2LgF7uyQxHuZd5JaFMLbtnxqYcc34AjpiqYLm5qrmvFDXKuu7pDZXsNH6HTiVSKasPZbHqSWhagbwn7mrse4vNkH",
  "key38": "5yoTvGktXucnKps9SEAYiACzGmzwNrkTsG7FWad8BsAXP14H6Y5aiYKi4bgPoWxh4YRTgLfmiSrR8Tfp1omfRmZv",
  "key39": "5Mdt69RwFsU4iix86ogPqeyqGNQGsnpYjmiZq3uVH1zfkGJjiaxDnrEqqTJHHtEAB2ZckkduoWieHRvj38rwSmxp",
  "key40": "4Nh5k11DWAGUQoTMUjj7QbCMZLVXiVLYGYHm3aozNakjPEj4y9S15b6NWMsyHs11qjwHAAwiZhsPr7jb7d3DaJCF",
  "key41": "5AXXSwQVMNJ85kDzJUJXRZPK5MKCz5WURNH2TarJwCerJdz1SbFkisxcLTE6jNDF5v255duhJ3RHX8DHnyJU3EeS"
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
