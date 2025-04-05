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
    "46QdAHHeSH8MD9gWEpZFEytckF4GLiEnDgWCQpvRsKfLrnJq7knMVewKGqZJqqkqvF2xQ9MeaxnGNExaVLkUYtDN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52f22PmS97d4noVekncaBxJUfFJoLFt8TZqZxACKgBBGF7y4oe9eBo8pFe55x6FT6eVLdT63KDWdk8T9FmRh3XhK",
  "key1": "yeEk6SWCaK1BLRVLSjfzQNbSMHXchmNtojCo4T9FECHonE2MkDcSaGoW3EdatLLuP3P1yNgNVigdim3AEW3GVVV",
  "key2": "2SXyLrgTTKEZqwFPDwBymwsSgKfwQAm1ro3AjkM9PMqNWedu6nX6CyQ598FUFpdxkhoeGwrAbFqevcKSZKzEQgGm",
  "key3": "3FSeMnJNUhihZfRKaPuDBteUeeiNFK9R4FAU4gGuiVUqMp1dvybSseVdiDAnf8LfkWP4QSDzeKeXWrjizUESBf5H",
  "key4": "2PyLrLreD67MNiNa441dNK2wwmH1dtSEWcBUV4MBzc9VbzFfdYbvL1Zw7p6W9ULuqx8EDM8aGzNygy8M3HacVS1",
  "key5": "5PLdTmNWp2nB9VHrgqJDaddHwR9xwtFeDhxSYnivZGQiAPzpoTqmaEqkFGYgqv5ySVVN3hhg5gKKCZY9M6paRL1C",
  "key6": "5zvSKYTC2if65J6VJN1zn9k1qZyN9mk4TyFXTpECQPhJUEi568Hmgm6VnZ5q39XWUpwWzzdDBDKCvdWRwK44kgRE",
  "key7": "4D5qUc6nwvUyGtUvsY3n8Pxbi197w4eDpRtD92Dg4mL6SVTDGMYeupiRJhRrPCUYXdC3tNLQ7bYiovadf9aG6h6X",
  "key8": "pebWQ14uethqDbJsJq6TfdXnb19uBrdWDxnjDWwankHscxZrH1S9oJWvXp88rVZoMihDadFjp7e3L25TwL6ZaSd",
  "key9": "51sQg6F4tfDxzmHA8MjX7JqWjGApHc52i9JcJB6iWmcK375L2pYpVFMf2DkmU8cqPr7ZUdtL6t6DAG7a3zjVZujS",
  "key10": "EJmZv6G3mUV1VGgkpjDpdrdMNk2GsM9rYkbbJ2kwjFi2wGQGn77mSUD4cqQPXz9zVAs7yqmDingGgDjkV4pfLte",
  "key11": "4VVrCRmGrqMsnvHotDfNoUUmtg55wYKvSTgCXh2UvW3eEtQn6BX7z8Rd6jeAFJB8qEmU82NySS8UHdjm1XhynKpH",
  "key12": "oggDM67dViyEJBEJyNE1f24Eq44bxSvK55U7GJrZ6iMHpLMSrbVwr8czDGK5VbH16ZixBLndVDqE5Ls3UxDusY2",
  "key13": "4zkzZLRde7j3XXbhcycXKoEWr6B2TChc9kLFTKtsnUkqBbkBeTcQinV91iDbWf4bdrtGMB2wJSJ6TZAxZ9jatLt",
  "key14": "4AGbrisfHdHTBKueGsvzHT5Z4Qf8cbKrafkF7BAPBRDFqBodvubX5RTTF5Q4oSHADxUfKkGNDRyLSPmTTEPoThAU",
  "key15": "JJxpG8P9cVxoEpArtTBLdwLgDBBGqzqEJf8fv9q47SgKjLd5khTjpSZzmFD6D9oPTTSDnQzRN8hZ6WjsG6xS4bm",
  "key16": "21zZ5VnZa3aXRSE1XcgcPCn9BVKXgMWxgGgenyoBq8nkFPbvD1AHzqEGy8UbgkWNwuGVMFJW3WoDjDHd3kowXMKe",
  "key17": "dcJYzyAFfHnbWPvixUXhYUGcp7JHLkVvMPEd6btHpWEDnrHuaPY5eFLmzpokFLGBPLXNZvHFaspbT4XpUfvsURT",
  "key18": "2sMd92HpuU12JtCLcmaa4WMB6CdtPkYz2cwaiiFCMxGMxcUz6cZtoYtpngDyr1jskjUNC1chRFzfvDffpNgg7adR",
  "key19": "64CkPzQVB9mwa82PHtapwFvVgDL4pzYxgnYAwc9mKnuNMfprYs7UjVkzqzC7RLJwsXMuwspnToWS1WRPZbt2p955",
  "key20": "4keqjGGkSvnSSjbskfNENzrFEm1Kc8W3TxTKtpsd3MzQQ3GAdNMsJuLBYGwyBfBpHCFaauxSwGLy4Gpj9YS4EHRZ",
  "key21": "3PtEhUXu3rLWDBTrCTU5TMNE1mftGNn9ajDWEqgg7ZBcniLnW5pnGcoeurEHYC8FzyyzbVEM5ppv3EtTRn4X52gV",
  "key22": "3Fh8JdHjduuddLceeMbTVqzBz2wzu4Q4tJ1EJ6w6ixAfJsULigZoggf8J3XrUq2RQv7pZC5kJmnXyVSyV2EXe7AE",
  "key23": "YVgXbHEbff5jPbETVGayy5zHJBb2XgrEA14C537FdCBpbnumJ9KcjH91oU2rjJm3LFb6ihLigtYtX3rQKypvz5h",
  "key24": "SEWVL7qYSRym8t7cs8HWyS1koUj7vCBbzbUQZ9yN6ubQx66NdjXCev4i7LtsexJjq58UT4mDkZnYWX4qVqRWXv8",
  "key25": "LsZRRFqJGn6Kh3DPfTjbFRMGBs5W1KthPEwL5H1rtYRRc6MwSPG2RTvjas8pPMa6TsbtXSe1kWmiKgEMaWh79bW",
  "key26": "5F4qnxtoJpWqBBsWNiE3s9AZuxTwTgjHpeCN6UXhXzaomc2Dsp2an8eQDZWa1sWMd8e18dFDdGmYMk7GSP9K4cUr",
  "key27": "37ek4asjMjdRYwfiqhViFp5ovYzLskbsiScF1jW4UvUsW1VmRkeLhp8bFoTtJwCZ3EP3yWTyEiR8ZqBVG8JU6Z53",
  "key28": "VnRZDcqi8VgbGjFpcZa7DNQ7fWA3wDcCCZ7PiHJJnTTDc2KEjpTnmoFkNdrP1wdJ2xU1crdtKx6LgAGBh3SGxar",
  "key29": "411SG7JgfX97pWPeQ8ruHhVyte52bRYMztuuBPbQcAAkXDWYycytyBypNZYiWM6jWQBkSu5xqtaPk5vEmjvWYMMx",
  "key30": "2x2L4tKW6vRfdZb9xYp2PWQ7zfRRwTZWidjmtssCRKJ3EdqzPUASuKzgiGR2TfkkJgNLYLK1c5foqjAmkDP3HnYy",
  "key31": "5RoCs3gSgLZnYKRx1NCzmif9U7EXePZdc5RUzfduYGQgGjzKbDCnMfKN4mfNXZE4tr1675qNxwy8euiiQDVtXVw7",
  "key32": "nobUF4LXE7abJrfphnDoVD8UNwV3bGQ1mAWnAQjnc6HizXJwtmd4qA9p27LUGbsuz4kX8uU8z3R8FnXqkpSzPvm",
  "key33": "4BiHCLRNUuuEsgEPM51JrjGMznDduHWvKEMZMVurwqAncSYe6vQhXM9yGCHTbpjAjdCUDqiN22gPy6yNi1dd1F3D",
  "key34": "eDe7ReRny2bQM7gZMPoMcbCTbnTNT14gs79jVvMbZ1wXbjUxMGtKiz8U6ADGcRKfWBgV5SL3ynaZva5H67kmzj4",
  "key35": "4cZcLCxbX8nBivUXA155YRVyUpKFEkqRkLkRLDo35krS4EBRdqwNJLhxwPwTHFevwPWSnGDP72W1p3z5VTC9ktcP",
  "key36": "48259Wv9kzmz6Vwsgr7bFYujkzgC1VVZiBqJs5kcK2iqjKarWXmtmPYJ1xuHL6w3es8yFp3oBvnUgBeAKYL3or1n",
  "key37": "3zay2JwshURDPQ3UmcnXSgeso1vsWrtVeTcUxt3TKBX1BE8UjNHJbCgXDzVdsmnRc5eQ4KqJxaiNe23UrgntVjD1",
  "key38": "2qom8DdvUzdKC6wFQvwaW4XQbgw2rzhFkxHhEupsCGvUdGGKT2hSg32Yt4t2WemEwk8WXuD2sv5NRcyEETxBpZPC",
  "key39": "4tmAKKVCg4joPDVmjvBxiyyLjoYokzzedaRgrJRBGKSKYi6xzZBS9mzop18TQpEGXLzoq4pQGuK2V3uPmvwENwZq",
  "key40": "4YSra2dgAdvLrrRbrZEG66dat9hKFk9nh3h15N3uAbParkVA8wsMC8apW8ztisBLoNrCamfKWmZqMJRXcG55s5pk",
  "key41": "4YZs5HbwceusvczShWPkVtT6eetW1VFtRJQ14rZZ4GARD1GRSd5BqxDigZBf16w6sVQse1A3aNmPgjoBdpJr7RvS",
  "key42": "4fJbccLbVmyjZrTzQQvKSuenktw4LYQhqYmksfKi7qcSrKRiqkPLv8edz3NQWJebrFUdfchokQcsw5DZqjQXZkQG",
  "key43": "Citi2txmCfHVWVcL97Lb3BgXFLGx1kMpSCZsBCNG8dScBpeiHABPXzmQneHNsfg4rZ64LaMR1ULFpJTH3Vxyrh1"
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
