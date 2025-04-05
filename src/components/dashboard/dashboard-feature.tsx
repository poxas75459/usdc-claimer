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
    "2EciAdnk1vA4P4n1Mh8B1k8DEsJpCjtUYv8fjYBZcJLpXk34hpM5WKWptFbbkvwriUfupfriCPB7YYKyr5MkPTCG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e9KmYDVsYEvwQMyLxdqAXHYqb1kw4NetJFsaDrsE7ffMYU72zieNJSpiiHg61BoEwb1Qu9x1mtZwJNssGPmfWs7",
  "key1": "4oAYjp86XV8ib7Qjff2oqif4Z4vBqJZ64mm5Ku4xtLzWcDdp472Sh1JZ9SUUSJA3H2AVEBg7LuG9NZCRXb9Wwe1W",
  "key2": "ym4L5F4kuPekxE35qQojiuRDtEGydkpUoPJyrdNRMoMZgtbZN1u4Xr2EkUGThSTtL4U54obfZgPj1wWZewH3MJK",
  "key3": "4rPospwT4hR4mamSeRgvNgATSYY22inEt3CwXZzVaTjLQ1AHQqKwzWL9Bd6vkTetAhX8sxYLM3hhxq5meAjsGLmt",
  "key4": "8C3rzsoAeYod6gEVznCTEomfBm1eMZFidj8i3DyQXKeXDvGuXpZbiUawAcMc28vMCmXetfK7NuJvX7m2AQNAiC7",
  "key5": "2K6AqVq5n4RskLrNZ5ntcjcoCdAdnujvTjvxGNzAWxn75oxmmr8KFWgkzetXKAXfCXaPU9zp69RvgEyTo48X9dGM",
  "key6": "36XLM4HZLWuPFBb6sFFcYGNUDKCYrakk7nbXjpcRou7zFFd5MZRV9WLXvVAU52e2kSpeXN8yFzMacqb6StP7VTfC",
  "key7": "3ZxRaZMzdAaqjRgrvN3TAa7YW61Ee6fYoY6wGtz78FvCPxmfS9Cn7CW8wTj9BTYeh9bAvDBGWaVsfwW3WbYjChfM",
  "key8": "3wA6THmdoT2fy9ebwEcqhnegFc7UvcsuwdsfEcWLpyouKwZ1YBWHJhbQCtuqEfaiy6HqMtptZCtmibTaC7zFFMDh",
  "key9": "5pwT7FNUqaDbgnvmn4AN2u4DPXjHNkzp84A2qUapcwLDxwL8HoQH8RbW4QS5hQytm6zTKbeTtDGot3VoTCCWNQy5",
  "key10": "34mJohGAsj7Ej2vp7b25ob6dSDqcke93VfP7kp1vSwZ7YyogBtenBcJKhFMAYr92HR3JdURVr7Jec9WRR3MpJ6Gd",
  "key11": "2CVN9XNH4faDvEWFhxQR6GDfKLBmgi9BiMWZYDknzPovRQoL9Hp1vg3SnGLELCRvrEtT1z7w7bpGnGUgqM7CdAqZ",
  "key12": "22izddiYMBKH8c45khYzPdiruCm7oDDb4ZsfKAJju3eFujsT8Nbcdz81CQRr7wVNLTphxqMf21KgyoAtzMgsKWTE",
  "key13": "2gRWqwiN1DXDA62pbVXnAtMotMDSjroF5tQezgBrBUmYQD1UkVF75bDfdf8yDZwZP74RgPYXWHFm48rPAtZGdgSm",
  "key14": "PFVZw8jd1mL5ytsnkwvVRHQCSDWzj6iMUwYo6Bzcvmzx2z9tc4McjssRRXuuf1ef3eCkod24KqyznCUCotHK1wL",
  "key15": "4ow7QkPVtL8P2LhZedACKLwQSxJToYM2fDjGPrqvr1FfaDPUt9ZL5cSvFdgqHNopjbr87MwVqcCScbMm7H6nSS9r",
  "key16": "9Ak7r5pFQ1izajUAYvD4NYaF4nufYVjSQErVwaNSPYZchE6ziu2wEPjXdRMwywH5GGpqkBgRDSXvGwtQT1f6w1W",
  "key17": "6srQT8N8tAFmNd7WBCizV1AgdgqDdNfjgwn4uvRWB9VQEiUmEVdj6Yo2eneLBdjQFJezsekJwE4254DyHAxn4Qo",
  "key18": "2ziLzRwghQ7edTpCwcfGzoRT1sBipYhSXqKE8c3AuxhrW9pPXdbUBLHA19JSoQMSUTPfyGXae6h9WT2CmzZ3oWH1",
  "key19": "2dJYJpf7sGLUarGtBUFhXQY3YoYxvTiNQCCkQfQtMKKh2E5tJjqpWYgdDeJ6jG9USDrWs9Twj6B8a9Ncejgw1LEt",
  "key20": "4p58A8YWNjnRN1ZMfpYqAqmzAzdkRMHfHNsviq5TFEs6gsrTAdv4wwPYEoMY5GBCs9RNT8kBvNfjyqbWkxhu1qj7",
  "key21": "5JaMmnwkdD8DejapKpbzuXCssMBK6eNXmUzzxiV6W1pajsB3uyLyyFtRSP9SPqbbVHqTaTv72Z8F6jYcUHtyXNxg",
  "key22": "2jo91jTjywwscLhCWT2koCphcwwk7KaNiMHZpv4Grw2DHcJQzwCnEmsWMKLD324REySw34LPqYt2BWHvhivc5XTY",
  "key23": "4cpm52S3RPsDPwbHLxsvhkagdxEoUu9AeJDjBguNYUjdvqwQCCn3BugKcmiAt533yXkBf7eNuetNtb8omXmXYZWx",
  "key24": "2kzYCgrL6TkpWXR7j15os1ETX8EiQJ9iwGA2QzZaSiC1SPH5LhwdBeKRJVydPE912ps1DojCXrbzAxhifKHUJGm2",
  "key25": "5zEJZmz6q3phvS4f1H3A691JhBUSXPX5fPXURdfKzkE8FEXxCEAasNJ8agjsvj3LeJgwjur94fpetULno1Un6o7P",
  "key26": "2mNnWsqZYHMr96gUxDAeeZeq9XDR2G9Z3uD57YeyxDigbvuUapqMJv3dHtvNn5iAzJ8HLFBbH96nnJDNijmS3x4P",
  "key27": "3o1whknLaiyKbPFWUrp3oEacmGMrroB4fbt8YjUa3JECZ5nodyL61z2rzWLjEqUp6nhmn8Kudzux6mb3u4brKxx4",
  "key28": "2vBBgKv6i6CTETj5v48WxVtM1DpGbs2ouk5Fu9WEYEkbT8mncJB4uqqo9HL2hTtHtmGfXP1vFty6gMvsJ73axvE7",
  "key29": "4gPPVkVr9oKnXWFNeqXi6EpRvkTJvdNmf1nW3TFE8MVcS4f9wwxXhY7RWcMCiY4DWVDptETLC8ywD9ZMqJS8o4KW",
  "key30": "28cTWcCgwNRJM1wHLhChtqe6g8hn7RxbCZUMc1aRtnePrpbqKK8f5LVdF8gR7JNzeSTdgnWPP7Ruz8TVxddTPd21",
  "key31": "YEqS9oe86zJUkiwDHPz8jcMudijif215PLm5eWKGVgzyMyitmzzCBe6KVLtAQZjKbZfVzWkd5evJAo3iWhZUfZH",
  "key32": "4TmuCgyaJv4YtPzzC8biUmgzkRKBX8wipTGMMQfMbX8d1rZYaKrdrFN8WkGxhSe2vSbfG4w626jHtXdTpEFov9JL",
  "key33": "54Wpc9qixd3EYgXPxn2Ya1FXeCzMNXhQgnNGBbAMvaqdPwhhfMrewh7ggCJt4CAnZ4bysuVWMK51fzgStfwAfS8Y",
  "key34": "3vY9xbwjouQqWT8bejmm8Nc9DHnjp937PmRDj7C2SQ1BeqyZQf6Q2k3PUjzpRWTMN2G1pp7WMDMCEYD92GN4sxYJ",
  "key35": "3n3sMb8pCmH5Qyu3LQd7nu5dT6a4PKY43C4utoUuLPDdi9LMsT3tAXafYsFCYNChA7CAAVyaBikZXBerV8dFkMV7"
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
