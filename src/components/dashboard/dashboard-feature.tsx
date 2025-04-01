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
    "2M1smb118Wc2vZEAQ6Zo6E5LqwMxkwNKw5dfnyt5pv4f1EVkoXi9SSz5qdXLKWQXxhLBP527zHjJSrmMfrVsum5p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a7ag9yV8m4URrKRpihhajfX4UgRPNMRPWDGMcf3H3xNJT6YHAaCmwdEKV1WB63ArhuK48suLLi4t4iywJhrdwMV",
  "key1": "3eds93CMgFJ1tP5oTA42jgS1j2HqoW65n484N9ibJNshJzHRL8m6bKw9XyY8ue9BZX82TRsXSHppFcDR1Guu9kar",
  "key2": "HCyxvkMz2ZfEZRpHVfJ34LtShygv55Fq1DCJn3qR7wgVdphkDaySVrKv5FYbAurr4m6FbRjckRXea5Cz5GEpFeq",
  "key3": "u7pseRAcQKdoKKdde5YQyuK3d1pnVVcvoDEa5NL56Zvrsp4ugjtxhY5nhQC79wcYhEpmzeSvjVFnKkvSUg9jk3Z",
  "key4": "3ST4FqyT2EaChuyEJF5JU6xbkBWWcTRXVeyM6gsgPC8J3yjEcDivdYJv9jrj12feiBQdA4SqYbSchb8csya1nvDu",
  "key5": "4hCxQjSf5LYwp5dyzWDJLVWELbWye5B62scpgVeAmH9QkV8BPg5GHGw9STpj3qzHV9LLgqAFZxYPfdAXKaUi2vHX",
  "key6": "rCziZyw6HU6WXjRVmjcb1MJUVbVyE1mh1FhbJc8GfTjoWFzbKW2B7UWTDQ2Paw4XDtNFSRu1HQXHe7SfHGf3FW9",
  "key7": "g3utrUuPN6sBpWT2jjBpWXLvJ98HDsTWensLmQebzeAjK9Fo6cUFLn2broku9ssxc4aMkzcVXZdYABb6aP9LMXp",
  "key8": "4h1XHcqaFEikyUykg1azdXmg55W7AViqEChavdAtUUp1pq1Tn7bJ36BpNuKnjf8wevsicMuW6Cnm1QJhtgmhq7wz",
  "key9": "aEKdLQCk955PTofRqs8oTKi2kpA6JgAP1VFan35ACngtx3pR6oUmDoSaT2pmw2erSWTaCRY15DzL3ttk6ed4m51",
  "key10": "31JdrCMYynS6CAvDgeCaS1P3ko7pvnYT79AxPBYbQ5rNM8hPDZo1tcsmvoEe4HumWoN92faGckY2fQpfSar7xm9v",
  "key11": "oGv5rmjE8YPS3f4MekJ7zczsXKtStj7gigB84bpuufJcgLzCy2VyAPtD8aBT7H1jbmWzohEvB7cvHDTJUeuaSP4",
  "key12": "4zcJZNuURPnqohVvtjRnToVxqYpNn2N73HxU4UaZ5wpzzAis8eoQKP3zTFKy9vuLyrLGamb3ivpvondkLUbAGjTz",
  "key13": "2Kdpszdg4g22REg2as8gNSGX3M3S2VfucXiwfx7z96DvV8SXpeKF2x9Risk1tVSwzAP4fjL7tov3fBkJvuEiMTC2",
  "key14": "4ciCj6DvQQBsMePcpMVnsQw7WWwtg6e4gYsXQGndXbWYouoYKonEGmeGVKwnrM3Lckns2SFZi4SPeVYkKqMu5LnK",
  "key15": "4CPb4af7ZDo48b9WGA17DAV4SgmQAqCad67h33qSjsGwthjthxxomDmLz8L6kdKhGnp7cVGUpa6Rvq6EkR3XN9Bv",
  "key16": "EDzZ46HN5tzkZejhZ3kuYExRZXtAG2e8pH4g9jtHg1EFyPLpFBgjFyEedLhmjDczpjhvunpBRMt8xjxyW6ncFE5",
  "key17": "NWJTti7d13dD2AosLD5Q6zAAn77ptzYFAeSLqp2dAN97PmWEt729vUMaTkSLVvnYvt55eWSZKB6NFY4qqDBJNyf",
  "key18": "28eqv6JtdcKWQx4meCK3qR1tnwVUxKxtWVMtJ1o4J1HJfPKpxYyPcBKwV46MgCogNQfy8XhqD9BKyEbk3p2J2Zb9",
  "key19": "DKwp94U324EnxvZ2gqAN2UYSr9EasN5DfDfz7S26xrL7xgtGvmd3vJ92NHH43tsppqQWbUoc2sDPYKMsL7o3uzJ",
  "key20": "5wAGQhhtfX4drQXENTUzb1GeXYvxaWREoSJB8upcFFiSF9TFVFs1iN9tyVZJS6rrwVkFM8WDnTi9Tp3gmoV5K6UX",
  "key21": "xadVZSkcJ1GsNnmoBXQAbZ7LwbCWLGBrJgG2n3hqvhsoC8YVYe4FemqZt5XNtA7EnztR1294fZ2hsMW7pw4XoYh",
  "key22": "gcwKAdW3SVHGm32eKasa84Ei9WFhrWTmyuWSFMP8Dw8Hdt7XMfcQ9HwoyPvWVvEHkPfT2F2Nj92TtHPnMDeQZYk",
  "key23": "4P6rYDEBvXXF1hqWxFg5wgndTuojUbYGs4rcQvbRaaDpEbneZkh9WkL8YSoWBFCJFqkriB4LGimNRJqdKZ1wkSyG",
  "key24": "2ve9RpoZJvVHtbaiLbVndFdA3tCcBJ5HqiSCVu3pHzs9aPGBBm8gfyZ3uwUonEfg4iccyHcxsLFCdDT1huGVi4Yq",
  "key25": "2PjM3EZtFv9EaVpujR5J5YXAXUxfqkiEakAiFbyekDar4e6CR2Ga5TvXzoFGG3esfofrK5id2rDhhCWy4RQyGeZC",
  "key26": "2rT585hYSs5qR7PsqxUnJQMBVMk8JyfX5cSYNjLfXH3BT1qRgHrVDtPVszeXeh74md9Xyi2kKGrFMgZuxT2vBKdo",
  "key27": "41H1CmCYFwY7Hv1i1ZE6tg8Cgm1eez6wcd3UwBFDzgrrgh4WN568gEZvveUdQRmY1KJsWNpCFHav31htJeEJ5pVT",
  "key28": "wfHMPRoRDtwUsg66NtcUuwYt8vQbRYdGWJiRmZ3LjA4GpvPfrk6JJuFcvpE1eQbn8PNYu85geeoHNauDvTjMatg"
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
