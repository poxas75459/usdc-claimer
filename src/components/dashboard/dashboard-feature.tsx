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
    "49nEW8t93uGmAKtsCaxnTTTBffNsgFXkDK3tERPd3qo99VjjRbxXPRT4sW7W96ViKyJbiYr1GWf59Q6ddnTuuSRG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LBEwRr4oCUL3AKRWnhvQcyHbPpbHB9CuZwHEjG67j8PmmYmsJNdxeBaABXQKxnbkgoavRKZuE2fb9V4t6RmcQML",
  "key1": "377m6WxK9qDWuQvoyu9qSfHQs9JfFfZcNp2HVBNFjNU1Zam77DueUdxjrArShkoQvTmzYvAqD6G3xDXHhb8spbc6",
  "key2": "3aTMrfE16yLdoJCkGLZf5REWZUCBxWiswHZaPfhszPpafhbTuGikxSnPNphzUVhhzfTutqVzzf1HqWdmqpmVp4TB",
  "key3": "4q9JhVHSBGwvPkq8KqMevBHpse6hXFXoddawapMYW5eVSrBoNSnc2R6rauJcsvwGCwweErPR719szYiCL1mFuWbn",
  "key4": "4C75dy3vUR7LYbKpgDYQRwGugwrPfycUJJ3pAURErXxLd942CTCQrBuoMhigs7NCjJM8CvH4ADzMXWRgLMyWRh8Z",
  "key5": "25ePFZKEpUTnPqZo7Rdt5DG4bbrGqVm8fc1Jo7769FQpMjYGGNGayJvP7zxwAmPgB4DXUV4SKdDTtxkwsNP3HAuq",
  "key6": "zAf1XVi9AEpPvPDUK9Vw63y88F4QaE8cEfS6HgVMv7JXKqRoVK8a49UYreN7kA2ETonnXmvdWSq1XYoo85iaKad",
  "key7": "5wKuTUeLVUcfWKCwYycVsoapfFij8GRb7ZMsawPy1krZa5nfKyQ3vzzke6oNnsVbWToSL2Q49czvRA2ihEzKuwBo",
  "key8": "2X5x89LbaD81JtBV9ebMq6Sqj37HrYhXrcYoxRsCif42wJBmKGqJksKMQKYoipUaJGrkAZCoc3i14JAYmUExVbbr",
  "key9": "2SHnjPzo41f2gaacXzUVNtUnVVaNqcWc8t8J5Ynz9hoTXAy5dkdEKoBrm91wVc8QJbpASn2XZ2JA6tqyksSdd7TW",
  "key10": "5js1ZC4Wy8n3N5GRAGqhW7hDUBnMHK4PdFH4Bu43GLgeJJefabFr4USqSqjCy7orfMh28jMQZDE9LmCuR1U1Lr4g",
  "key11": "4afUykYCBa1y9cHxQ1eKrAB9QVUyejV6wrtZUpiSCRppUuJBB7hxZbhTtGZ3gS5gQwEc1JnHo9Vg9e7VWSMR7fFA",
  "key12": "3XiahdqKMmQyN1JyVBsDcWM5cH7y8c6HqHBbJUuVdGo6xy4F8i49Jv3PDJ88id6yabvY9kB5UrKQV1CJmi9CFHjL",
  "key13": "4TkFy7nPHbmUerMKCDqfZJWEwS35FASytsTwHaH2JCC9ntGdDmwGuDEaRpRbuGYvbQZjCQyDLsDuRhFV7dtqgX2x",
  "key14": "GcZjC86otDVmfBRf4jPAQFZFWvMKAME26c5i9P8QAEpzyVQLxnf6h5ACsWyURKwstDKr5BJefpw78G2Hna3CXaQ",
  "key15": "5fYoMzhmHWPAkzLPR715hCadXk6rtzSuUC2EzmSER6PXrkuF35ke1rjXRxV5QY1iGtbrjLnoF3nSVQmfTCn3QeXk",
  "key16": "4JZ6hvJ324FnuWnDXhaMmNpZCgVSJk8v4ReaZkqpEhtiNx67YuK5SiJgNBFSXuDJpAqcAxL4KuGDf6pMnku7j26R",
  "key17": "58kfwrE3Fmafi8tU8Q8kBiyWxDuFpmesek62rGJ3DMDJhf8wB6Nx5wLav5qs6zLdSGzYB1Rv3LSVFvJhs3ZAFxD6",
  "key18": "45H44bXrZbtrZ3aKks5wxdY8rnGckbggubhMwXqHSWbqN2aZBkZRoNK62aUbuudpd5FDhRYE41u5ih6RpqUbFZdS",
  "key19": "4M2qguTPpJL5MEanEm6exVQYDipzQXgi8tnDhqL11im8wy2vtMd4HJZb9z1UUCX2Tv3WjWJ61SZvod1n1zYsn28U",
  "key20": "2qr8shCmKd8fR6MqLKy9DGFEUePXck7LiFQtazMBS7XEyKsUgmNahzTXyT5z2ECRaqm6P7kj2id1LnFmnfBeyGf5",
  "key21": "2UB3XZmunoKUbqqsxYnV8uwmYHBzJkdZcfGPTQ37a3h5ybXUsZ4ddd4ZGVcLHmFBJjBgJgBdnke3xjDYDJhnuCav",
  "key22": "6TAKBRYry71zr8xYE9NoKAVQG8ZFthit31WdhD8taVANngdjdAGPxRB1yfiRMPV2x1Y3RHYLXj9krVr9gDgD2zz",
  "key23": "96gvegVC6ptnVP4urL3Ypp7QknZR6p7UQh8XbrPqud2jgABoJrKkmX4denbGCET398Er4rPsjeri3DeGbzVf8F2",
  "key24": "38MBDaacfq8Dpa9V9t4KDHo9Nd84YHXCjEWtB1SgFVsBaKyiT5jKdo6srAhmzdMvrRkpNBnxt2xpWffXYT7bD9W6",
  "key25": "5QAb2tQ3UysTipnw2eLKUCC5j8szTxvhv8JsSAEfViKaVv7bmtf3vftSG1RqJoE9gNVVPzNwFtXGZPGCmW35nfjR",
  "key26": "56jApH6uVQqYvyR7mTVnRwjzwESzWxJk67xHP4c3zJAVVz1QUnmB5kb3WQfGzfM2qL8CPdiBnF9PypmyRB1L32oT",
  "key27": "vvHEh3o7pQSAU1qpDoun16JXR8Zdww9s1oqy2dwtoQJHvMEzc1hoBHeaeRyv47GDavdtTYqioCMxfsrpV1v3T9q",
  "key28": "4DK9ZbNDX1FuVRP9iCQM2PYL6dz2Di5kAFDzvAyhu2VtEJs32vskGxUri6JrZpM3n58YfY6CJ45BxLcL6SWhFYQR",
  "key29": "HSXNTEJyhaWVDE2npeVm8QDo1yg8bJKBi2hP43Kid7YrJ7tPNUftujpwPUazPTpU9bmiJCsw5rhYGRpXnsLvjqA",
  "key30": "5fe8ecB96qNWUds7NzSCiABa6x25dAYsiPGyCYpkuHHRAL6LaZ9pEwV96mmZJZREXTKUt8etABBzZCPgFADGEm8W",
  "key31": "5gLkgwuaC91nUTv5iKPcUxMgAYmcuzWJo27vmgBrc6ku2m4o9nKbYRmAihLj8cDpSBFpitu7DKum2cf6fz2AzgR4",
  "key32": "4Upv1mnz7t1ihe4mAkBqXiqKUoqAatP8RQiREuEkjcB4GpqLMfaoKM4VRjGkZJk5eVCA1KhboUTwLQg29JPC8LEU",
  "key33": "5ZmsKD3isTKctzAVZokmEpQNM9t6VQH9LfwRi45qvjrE57Mp57Ekk1v7ptZpaYDE7hLS5A5ZqH91ZvZmsgFP11sA",
  "key34": "5NwczMkcf88TzbitLQZdwrXmPzyPPE7wvUtp2LxdYB3qpw3yZkqpXTMagaGBFsxeZuuGSzFLko22LcajWo8eAxsE",
  "key35": "3ihyptqPrZWV6wZYujsbnudhw3Pr4EcPvjSrR2BYKcikKgon99A7VALuppTzmb2BRpLhqzV1199T4vNZNkuqVyaz",
  "key36": "3BoEoN6KDktuTpEbCkrgjpQba7in49iPwfHAo3Ht9iVH88X9VssfsgNhuHYAa4bVNhaVpf1ptgwzuXV2ZdVF22mC",
  "key37": "3vjn25JVrxbT2qpvphw4obvSPdms1486B2hYudQipse4n4WK4vJd3cWyKEGTBZCk8qeoZt99BWoT9JoCLiRbVQdm",
  "key38": "3kLSY1QVdNiyTZrDC6q4qqNnTXCwBmVqchn3wzuVXcMvGU156uoNvRn18MhnvP5PanYEvt3Rag3w5r6X3Swk1iqz",
  "key39": "5wL8GpbEWh5ukdwSHLduRV6w9QWsoPNgPC3Uk8RoQMqQpyJvjc5msDD3hJK5RY7Y7azwjuUwGFsaoUGaR5DYfXjS",
  "key40": "5KvxSz1ENFMWJAY4eLy3sysEc5zXGPnEtLa6NuSFsaXRXX4tJEYpaSjrgeq1S71zjBD7ZpEkM25WZFcZHHaUD4aF",
  "key41": "2qjeKt14C8YVS6au4UihzUm5S3jLnJGH3QnJazPnckMz8PfH2df9tSFxuVst7Wqz8aBCSipSaAA5YqH1gjDNsvP3",
  "key42": "4GbQ8C33s5A17ETnL9LUaYgmjnrwSNq5AdgPcdUShHP68qNDZzjoJqQEhg7N4kwgFWeBaw1okdLi1P6Jkcit63RS",
  "key43": "2WneLvjgNm4xeUsFVzDLoao7UkxQEK15YcvbuTRE8H3xv8UXBmnXhh4fX8XmsCy3VrPMpUPgimPEWftizwXY8cRk",
  "key44": "5MpygHysD9JD8NFsDmXzTBXqJAshQr28d6MKbEFT9fRX5PYSURYALC24GesJkGsXomgghuxYjQeH1tyr6FbR6Pdr",
  "key45": "5HCtpXKR34wCQz8CqxUw1PbzrcWF5gDQthTFQ2kr1rXUuP5vjXt7ene3KHqbp8mwtvUrp2DKZqUxwg9thUZVkev4",
  "key46": "knwome8Pd6SSBpir7xpxokedRB7XQVHoVF7RPY1PiR8XRBDbeeCwctaoKTx96hAo6fSPTshykYmdCMNZGtYQpZU",
  "key47": "3sk3eXKWEsJ6KuqonD5VugSzSuaa1Hrbi3UfjRJB1eLjCJwwMz1teWtTAcnBK5LvqCxs86SAfk3q1ghx1EPiNpLY",
  "key48": "66Pj7v54mGHSRwsEiUvZ6EbMv8wv6WRdUfGDgaNfQALzCRgUnJDBjeu4aB8uXBWriaASL5Ew8opD5DDdiXKKo5DJ",
  "key49": "36CYLZdimC2G7AeDt5kDAkrC7ak6RAifjkHGMCJW3ExLjKfsRUAjyyjKVtT1X4EWmwkzWnyma4Fq4o5oeDpji4xM"
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
