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
    "3HhGAZ5DkHkXw8n4YfJtF6u6e5dtrLWwMAPgcVhBwjScqBqsc3qsNzKZcyPfESuM1eyGeEoT98xsVZZCJVia75rR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mFen5e868agKYNZBFA3kPbLCNrdMeBNKhtrLQLB9ziy7nRDrN1z6vdNdCPw255ybETYHxjSdoE6z9xjCHbXZKUh",
  "key1": "3tP8JrutVnxKvwqGRnsbJrJ1XGXUeWffCWBnysLsFCswiEG3KGDxHs7uDDyZcTAgdH86YhGocCU5nRZ17UWCQ21u",
  "key2": "4jDcw3QR8S18xayrevs9SKMApGcjjNwWNdnFA4KV3UWwqyfx7W9Cdn4qv4DMtF3q3UVkSbfjbFMrTeMAX43M1bSN",
  "key3": "26eifqd3JPortdqmLCsi1msPAJnboZBYUnPxDEEu6x7ui9NV86xW9M3kYTfWdd6gRakWYPB8emSzcjcxDLdurZgJ",
  "key4": "61WXhmztpkXSZZY6tFYFJsupGiAYDivP38Uphai76UnS7gMoRmbdV2CkuMNxtgPvWMThDnLEUKbhgMtDGXqZmFEx",
  "key5": "2xEXCUusSo6fuzyVRfFJJKdyJ1eGQtixRFTAqUd8STT4W2bBJQgwBgFSPjhAmUyBGzStuXXrN8oF5XGLQByC1ARC",
  "key6": "32Q6bXo666U5Ay2DqL5M2muR7QjayfEhTzToUJPLWKLB85y8voigc4BHbBumZfDdEj4Jr1MaTY6cmnLXwzYhonnw",
  "key7": "5WyVHTBQiQt35NceNWQHMsxnjHmRYSMsprnzC2HXXuaf4q2nmHR8HGAvN7zVfxEqdkcJy6nvtMsY2CUHoFz7q8rY",
  "key8": "4JvWBwKRCWU2C8guZiDdLRPP4HSU63dHgPNEyPqtJ6SLwLumxL4eirbdYk51ZRJF1Dkznk1S8uEEkNBbiFsC6N3w",
  "key9": "4aCGheyTfesBk6hEXDGTxu9pRApGMqAEjtz1cQBvAnoFsm9zvWD83NaLsbsb7Q3fyFNyQNnuGHZgGLbSKJWfBdd8",
  "key10": "5YBvQcCooXeKVmwBhc2j2RgYwu37LHaCi58bZJnSXCqRrsHWk5vh8fiPBMTnohZS4b7h4f2AYtAp8QXDXeb7ZMHM",
  "key11": "3t6c57K5EPRhNr2NgyCBDNAf4uuFkXJ4bpi9eeeGMsEkc4Mmufcwz6Q6ZDUmShebonVG5h9EfXehhD1W6mt5j6mh",
  "key12": "4yTb8BYHb1iB23mRryAQ8BYazmQGaqebHa6TVfHyh9m6YDLF2C7VjSrmGisr51mLrcYd7xu8VULPv7rqUaczaAy6",
  "key13": "4eHg9g1Bjak6fbSiajjLE4v5cBaRpfeeFHNyc8n9ez7MV9PLqMGeXxjovwbYTf2PQjPHxryqzMB5sjbxggZPM9z5",
  "key14": "4KQjRVeS5k5hmNDznRCuLd9VgwHyLHtQzabYRoQQVMhVqsnbma8qwyTDHFfN5WBCrtoJRRJSxhri34TvoqoAAkjL",
  "key15": "4pD72yFZTP8FxLfembruY6j6yaZEW4j6jX125gXK6y4vvdAFwRuR2WxVxHgHzaL69FUkj1nEAe9yWL9RnEfXutWQ",
  "key16": "5BftJY51FsddkYNeTrDHtj8CoUVKvW3cCT3JFDQ1jpELdqbeDavgEhdUkdS2Qf9o1Rt4DJZpUp3U5JidutFGnm1E",
  "key17": "47QR3Zn9QXTE6n6iRxBZGnBHrYeyvRqmtmyM6DHPaCe5Tzc7KkitXQviF7aiHpxsRHUzMKdRzXXrQy6yivjm5Lys",
  "key18": "5eUgYQWaBRvWix1Y3wH7mrnkNUhWCJEe8ibHhvfxmyRo55fAcmHrKQ1AjRx6brjDYH5DGdDC9vgNByemkHSoy4fJ",
  "key19": "4hHXX7qbz88rxMubgrXsmxZCcaQgQdwdZ5SkYH9pPhnuKEM2b5JauUVi7b9Z2DcCKvdqAhLTpyMCPHNA3Vf3ijBL",
  "key20": "35YXEbL4bmJLMzDAyN3snEeuzShkVvZRYuKgTD3e7PZZhFNkMGydykAJxqjfGwYbz85jcxNHDQERe9peofVsY5th",
  "key21": "3mvrxvrumwn8b2oCrM9NuRc6T1qyGa8WqQHZY7AVVdmvMcCu6QrWD3vdSmjaxhSMpsu7HfXP8vHXJNL85XuHswmH",
  "key22": "2p8Xbf3v99CZxb2gm7f8d6os7nKCPvHf81aM55RaaQpCCfdJnFF2T3UrcTA4CCfdNUnEu3py9A7MxXgVnCSqZrBY",
  "key23": "4TRpb93jDWLRDpwWJXoQ8fqvuA1EnS2AYaF12GDtYLzwmtkQP38xPs6aFYLa2xEkkkfQQk2pgCeswzuryLVbEAC7",
  "key24": "3WMaAt9CDh3zKxYjRrnUFRVpjXcqw5wcnY3PsyupFXfkfazDiLGsHj1EWMsBhMGn3baY6AUygfinDDcPUDan6jeN",
  "key25": "5MhKXYTAfo9KfEFRoSJXWje77LxznnBcg9umM41rhEgDMFd4Qztt78nehhL9oKfFpcjyyuFwmbHKbGomZLZgvR37",
  "key26": "3DWYLzDKG57Wg2FvFHYNHXJhjWqYN6NGn3aZvWFbbv2MGBExiLsMTUMLStZk2K92em2i2t3h3QbrJqtBE1CwQ7jg",
  "key27": "XoAsnBxW24oRudjry9K8rFBRaMH3zsUERUupaEAZwrWgR3R9hM2ruq4wvKBzzw99xGU35VXZhNvH56sbmbnPjHv",
  "key28": "2mqk1mzRaq19Feu1rR9nr42TSA5KGWDJ1uUXgcguDJCf8FqZF9q6PfyuZSZJc62swXb7Vwoi9idMig4UHE5ynvw5",
  "key29": "4P7VrMAweWWYiZQ9sNjr6uznM29NF3gWwtXxP29KaHV7Bk72jhsGaS14x5UN8hYb6Zo3rDkCwdLWTCu4BH6uT7Vy",
  "key30": "2sGeuBFAfQm546n1K4aryizjcsfYwhfGMWEyvV2rRTSgXaGmAwaDFwi9X5iaS46FZ3DtGipz5FHJS7DG5AKcfbeH",
  "key31": "ck33KFx9q2aVXvjPUtBk7pSXpkQaiDvdqTzMrHs9GA7ctRSwra71yMXTKfgu3nXG2341NtC3PbuA4TLThp9h7WE",
  "key32": "5WnKUndujbXfEZWn1KVbniUyFJtvA2ZuQdnXPACCj9M2bScCmHseYGfkYYjwBDUgmFtyNoQv7PdEC9eg6hVWUwHX",
  "key33": "vJgAyzzJfvdyvztkJbcMi9fBoQdqcxxPbnLy62cLhVzjv9fdM9SiZLLv28FUNf8bPTUFkXfWBTtDADiigkJmQPb"
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
