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
    "2Vk3UqSsKiW3RbfTd5RRKWXBQF11mz4cUAjVvNzna4UH877eL8ZpQ3fbEz72sx1SpbMdi3vBcmNCZFW8GZQSgo23"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vsLm8AyR3FMp7C2KztkG8gz1qyjjqxkndHKUYCp3MdUDj8UfDMMrpHgVTheBMxn67vbgtz757rYocDJNbwUKwCB",
  "key1": "31q23zr3PqdFGMrsdT3MzcnAAUTpR4qyo1t8qYVq9RsUnRvFPQ9hEC54pyMRX7NnVuRYZFNSJBetkFPrQzHXcRfu",
  "key2": "3kPz9GXmEejTuBwscAc81hcMV7aAm2d1fvDM8mEcYjJuufTuRam2Ya2CNSYN5mSrQiLt337MFjC8FutUdvELQUGC",
  "key3": "2jY4kgVBnaxtMytKAxDnHoG9VajTKdWCJsmhCVBpEaFbTr6MiHWY1vyx7aahWSTEMhPW4c3fdRwNpTnpU8VLbpSS",
  "key4": "4NHNukq4UNPtYKSCWmgvY5ExVPNuMoUyG3KhSWFzD3pjexfg6twp9jiCHneJ1Xw2nY7HebfFbt9un7nHXbbxSeZn",
  "key5": "5TjJXZfdCesDxYJLCgZJndXL5bmfDNR4uG4vgNYbZppTh2kMA9ph9W8zfDNw535q6rJv65y7M9C3JCEyDUjnT6ry",
  "key6": "5wWT4mq6qZcceazDQgkmzqNPpkb3u8jp5LTzsiEH7WZf9Wx7Un6EvZJZW5XjiUwTg77KeZZuV1AMeKLA1RUqJM2f",
  "key7": "26ikjvY6bdhgwna5PpKNGr5WeU4Zn4HqBonD6F62RGqncK6ofuUbWhLtJqQLYdgTEwowmefyyS14ZzotuDcLfTmN",
  "key8": "2YUxvc3cNQPkefbg4A8nDpqEWYMiPQjfXFdkpitkXvgfYjkccpuNS71GZHEpNeWkBnUipBzx9x9TKEjf5xQKZ8TQ",
  "key9": "62F7NpuQ9zziyZjKRrBErUsFfyD64Qfeostn7REsogGPJxxbR6fHUhxF4zi1NPzg1HsSDwLfhGiXJom7RpSAuLms",
  "key10": "47proXPpKbjhCc4cNRhQrgBpkHh4zdX6p1VBivL1LTZeSzSo4xnWv1PqrcEvf7poCfCTWXQtCvvSbRyDE9aN2Nmo",
  "key11": "27fyZ3azXBDw61eeWm6WovwjvtSDtWbdAe8N8uoDH3oBJni1eq5zA6v3Zyen5amireEdviLYFZgjsqFXEKjenoQg",
  "key12": "51ep8fy46fQ6F9jeccYnD2T3SVuSfDnigB9fUwuNToaf3iWFw68dgEkrKJpL9PMMwgpnxfqSWKVwhwAiRqdvfNv1",
  "key13": "3QWgUr8EuBk8gkK6eXmoNURdDRxRVFUGi2BEXLF2rfGXLeRJbf3djMmJ78s49Xo9rQqheBmPovB5x8X1wUSXmSGb",
  "key14": "3doNTVDTNkfo16T4EsTTxDs86JcpxSEAQ8dGXH8ttkiR41tH6wWxvz7wWcZS6biTRtehLq3qTD29iNccF3hGgk2e",
  "key15": "4ogxRQ1rLzgWzjEjnn3byt2YEtscvoUkdmgCYckej4aXMB6o42USJvBfkSKJDXZa4c9evFqvbFPGwTnmgeFXZM5e",
  "key16": "5AMajqW2v4Zjodmy3hoFH42ZRqmQHRt6rjomcNXETnz5UqELAz38ghRHYeNuMrp4kTeevpucdMdmv9kZm2UNGuc",
  "key17": "5rPPDaySmFJUYX87dLf8cicucDrUBZXc2afJoNeDtJDusS4Przj4w6htmQjxvM8kGVEWZHYBWAMy4VaEsN1QKKsP",
  "key18": "5ZB4GdLs15VucVhFj9kAKyDRCU9zJh9oXvxK3PUAZJCmTQpb3KEGuLb9cFETtRHHK9e7grXsUC8MSs6ncJwDjZwx",
  "key19": "25APDGxrBLozUGBMq42yyU7gLfnzunYsusB1SFWhkaBhstgXtqc35WWHfGRwHW1wnuX2Q5taew9mBzSjZmFQmuEZ",
  "key20": "62tizuCseFJ4zHuEwWhQLwtnys2Cdo9LRMXXsQzdYgVYSA53CG2zA927wHzAXTP9ZLM76LqwoJP1jQBTvXFSLKAd",
  "key21": "37iHTbDQjknynjriVp83YL8f6aXQ6BdsvwKsiALphUqFntXFakLTKiTEQrwgGXWs3TJaMGJidtBzA49xs8JYTQsT",
  "key22": "5ooRNfuRL7dgjNi2HpEgDJH24kgN6FPL3m7hnZweWhhzpUWiQ7LkwSwM1sQpE4715CGUeGf2LUTyRjjU5bcCg9hR",
  "key23": "uRBJyHyTTE7qyVHwh3ko6b7ViHEbFZqAHuXXwLVvuNLJADF2wzjS5EakgrDjwmg55khnHGxzs2DvB1isijHPzBK",
  "key24": "6sxQGJLroQvXvpy3ZeLz6SUi9TP5GZXFs8567ToBykqHac3pyCauNWuPvvhzvDGPtD5z4tm8h94JDQ2RdZWPyzB",
  "key25": "2gSj6eqp13VLa1PBTMdWbYC2XHhctbKRS4KV2evvxDtz2tJ4SgiJGszdFGuFTV5coovuDuhYAFC6N1FLuXhCXsB6",
  "key26": "2Ze8YF3vUhvmcCkNdJPDrvA8oXvVAYGufQpxZBhAjdbHXDBYU5V9h6yWAaJ9nBHim2tHNsfmgBQaGuunyePkJSx6",
  "key27": "FK3mDLz1ZSKBEMWfxuEmAMMuQNSzukZ4ryurFyunpktByqzBTqNgLQxPfgrPmq8nsv8fCUwHeTpaQjzf3sxfmu6",
  "key28": "5y5XyrWL1vaAxud1qoNMDYDx8rKSuRQdC4942SBnxXN3tUSkas8seGj9H6BVQFptYEjmEDkYfTXWrpPWAZQPp9iY",
  "key29": "27jPNSUHBwNuiufzHrrVj9odoKgsUyHhg1NKV2LeyCvAyJWsQUCpMGdeXQ9GFkLvKowNJpmfg9impMAuEFGpkWoK",
  "key30": "cv8y6hf7v45sxZDieGFTDtKdUxWnv2BpNRWyTwwYBXG6hBcSawj88BSwFWLEDEHEVy1CMrYY3Z6BHMHm74RmuqZ",
  "key31": "WEwimVWmoH8XpgTyPHACAXRFfJLAQYwYYbtp9MKvZ7c9jHyu9ncTond2n1HVPsuzXBLiEpKCbcaqd2YvbSvsXXE",
  "key32": "5j7C5xjs4Sv8rz2zy5NrhsWabDYiPK5hn6oBJ3BDKYbCT6NAAbhpTrJeSrSVdMSbbpc637Y8cy3pxW1q4Bh9Bhqg",
  "key33": "1YVCZQy9TG3xiZ1zQr7tmbXXnni3ae61tesvc3cUQgy6GxrBrTwTaXT48MSWyqAyYyEY7Mbpt6fEnR16xhARL2d",
  "key34": "5WpXqnirgQDg8TBUMHk2HD5opPJpJWyUjSHgzZRJVgXMrvUXDTfXxTGkNUktNCzp63eHWvPQP5e5K1VJSHaPwgAz",
  "key35": "3SGBE7Xpexjc1cr2p8ctGAVxFwjLRXNA7jxJSbRbLxZSd57bUSxSi7itUY7LVuZnFgQBJwx7YwWJfJ6j6owRD9r7",
  "key36": "3o4zi9DXEnAbHXu5cXCSJhWqfifdCm4oko2vDMNkJ4FfW6ETDaEkKu9ej1ngf561ST9zcdF2ZSGhtj1vmPJKp1qd",
  "key37": "PjJ2mM87AzBuuo9HWuv71JFKCXdDaj1JAvCdSncK38P7Kh2EwXZFUhxaT5BwZwQAVEdbnj7Z5QPFf6G8L3NbGx7",
  "key38": "5LicF6Uiea1XPC1TFhjXhLZiWRkPfcVc3J71j9Bvz5DqFz243w7fCQFVzvu52uhyG2chha8D7Dou36YpyvYMjM4G",
  "key39": "4xvn6moDtCWQJTEmpmtG1FT5uDm3GNDsBi7FxEBJya8gtRcz8QwEhnRCSUxLDLe5ebpAgGLVzQz39m3LpEHM8Tr4",
  "key40": "ZQucjheBdupj8jAQw1AT3GLoB8Hz7S6JJRkZCTbWwFb8vvtCFf4fnRG9DWBx2rNti1J4DyYN1fSN9Cdi7p44utt",
  "key41": "2ZcJn7p4PgCfkZwwzVKRbY7fHcay2LJ3FPqkWrEbud568ht4NT2Q1VVAWDoUNjXEFFGsF4Q7egf5yEcgFXfrdmv",
  "key42": "2xZEaSD5dumKbYwy85XFD6WXSsgCFRT5knZ49XSo7djjyzFJEjJv6yYweeCT21XEzaw41GrNfT6PH3idKcXY6R18"
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
