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
    "31112K1NMA7fMRC9xKZ4t8hkFGquKLuYwgCfhhdHXc5oZyX8Gn7BjyzEr9c4aHaVDLT4P9aFQj8r7cp4dXAg7bTq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HV8PMCSoMREGdoSeL63ZQyMGTvCM7uNdS6JwN3TnGY9xXsTo6EbqxYSZC76v2n3EHsUJDLQidnwf54L6YLLMct6",
  "key1": "tnCNEZb6ujUm4uynEyzkxBey3HgyYLaWPB2fpUvktBox1paHWMcUb69y5ooXZbxQMPKJfFbH5yd8c35NMZLqDfA",
  "key2": "XVx8mGgidMLzqqtqPnFagr2RrfLEaUotegx1kAoFGPEm6m6t2u1gymsUgUeviMYByMgdqvnX9YnQh3xg6oprd49",
  "key3": "3aanJeQKwukeiFxr5f2uUSf8pPtVtF7h7VdF22nSCAhuAkqRsucB1K4sjytrUsskhw1GPdg1PJWrs65x9qQWzUPs",
  "key4": "2HE2bxBrcXRjkjpmeueBobnsNiaAAZDqasjNj4YGdRKDFKAV3eAmb22cdVE8FBMvsuFSvtqcDVVMQ5NMQaotTzpN",
  "key5": "5zzV9ecudm4KhZZ1bZtVD1WAgJQgPDAdvc4BVBGwZpR8dk4ms3UYwCRkNz7fMpKvuvwbTUN14ecPzuPZi5QP95N3",
  "key6": "4AHBhS1Q6CHjvMTTqPX7yNTimCWwBgVpPNXFnN7zwpVDKnXCiFJ5p7mHthVhGQ5L3uXcjoZqwQpzU6vCifpsxAiF",
  "key7": "4BLwt17DLjcPFLfQcNuUkNqfSFikTJm8vrKP7cnGfxUYofrQyvVryTn8E99Xx4k17dTbMBPy9x8VznDWLQnNZ5fH",
  "key8": "dj7EMZZUh83cyZpqwZTwTgKpjrp6iqVB31KvjwP3mkXDFYEgznF9cK5fLwVXhEQntWgYCsfGXasnVk7CNn6YfbZ",
  "key9": "5eWKPiTrDXbyNxp4ayBkBtHNjD3F5Ni8Y5uj2bZ9yee21FXFNR5nsQvNehwVbCWSFw65BCfPY2DaSmfdfRcKHUve",
  "key10": "3mVTCW1mzXj8erVcWwdq8yPJ6aGPEPVYTKEhjovCpkzZ9Bif4eedRgeTM5vw4gZ3x9JcGH7SYwT4Q9Ub3TfVLdp6",
  "key11": "3i1fwBpnJwiyMRkd6w946SD19169M2RWfE9ALLitcGtxVad8XU71JWGEVST1MusUyaabbdb5tExViHeixf8SFRs9",
  "key12": "67F9xbHqwtsoCV5Vh5s1pxoRgfGCW1cK8hwMYZJPC9uo2SGdmgeRqUUhwoPs7z4tCoU44934mtQagS75WQxZAiRe",
  "key13": "4RT5AyKzcBj1aQntHmtE73CPBQfjDtvZm4qHbvVtCYs56Vhh9Bsb953CQLmLzLXgJzwNBHsryG657ZZvTywZic6s",
  "key14": "4Rc3WGynjLFCwQDiJxPKrrDxFHCrGGxaaZE62J4bTMembCqRhn57kFhheCsHDsqg1jRrv8SjWUVhR2qYufx9SYGy",
  "key15": "2dK6atqsav1z9kKYxXerZpebmbnwpyJ1PGrEGJFfqaxszzZP29VacajBVkTEJje7rX8G9Hhz4xVqTvwAT2LUcmUk",
  "key16": "24mR7WM4tCBD66oqhZ5uQyXoZkJqBGPVVc3y5kUdsMjn6qVNqqBkQdJi79dD8qSr3xUfDdFwLW1W7vJu2qRJ67Uq",
  "key17": "458kYmzCcDLHQg8gKDQzfKXaYNoPQhm8hGsDLdACJDLu4u2ScGCckoY7HLX1t9q8hzksUnWPWSYRoAT88TptGTWQ",
  "key18": "2DJCabAg38MLaKSNHd4T7rvQNaFY73wHJt2t4qt2Dy2AYjPLYeCGokYvWDkmadNfvgFk85Hfm4nKKA5sQq9zfh8Z",
  "key19": "43WAnA2ZBXfUtSKCuAw2hnSm9SmRPfuML8AmKbADBrpmEZfoT9wq7xVMcpu7ihQM3X5Hc8Q7XiFUnKmbkAEwRWVB",
  "key20": "5AqwPEFKWojUoYGqXUPmFHbDPvfREhXBiwvv4e9PJ4gvBs51KWpt2zApQ8tbiqyEUU2dmV9aU4PY8uEcGWSR5n7Q",
  "key21": "AwsTXhMHXe3mUfRLuQ7wgCd2eXCnG7G8EfAFQxRsDBZ2qNWr4s54xLivb1z4M8WfFaGWMbBxSxY7VPP92eSZacY",
  "key22": "bexWvfLaazJvony2eUpkbZiSwJfH4cipcUH23pubxq93ySPtPHo2viU5XfMzA6urxjpj6KfRvK9N5zmQwueWnfF",
  "key23": "2MaxM3ViwuCtsNiQsqGzM4FZGzLh516KBvLkHaFLwA13Cb7s66uDP8xsJEHsZDE9iXhzMHaT4LTzAdkg6iAsX8zq",
  "key24": "2uKgeLnDtUwKRd5LtmLfx7DFdK31Hwzrk5MshduCEi4tN1XPZjgaGNUHU8Qd9V2fzQj7VdEqLafVHc2GMs1t7apt",
  "key25": "3VL2R1CCsCfVrJMZw13G8VfbVnEteyGBDx2sYBzPE5w9NY6QYsQkG4fPKEi1Hd3wYhe2KLiPK9uK64f8iRgSQ1Cn",
  "key26": "43KZE3XUVq4X1LeHMxZACGE3SgdQAK6bYUWLgk8DF3PU2zUqhMmbNi8Jj4cKmjCzUHVcjRmbHvuphQxdojJPnAMG",
  "key27": "37Ui93c6v41PUAsiXij2fq5iEHHeYtAxXkTw4mT3tuFnucHQp8VYJabyvjy1WfkyXtanV4BH7TewCb5Nv8FN1pPo",
  "key28": "4ykw4hwRcunwZvdXDifxFJVCW4FNaFrAkUY5mm6KZWgaZmoEUhxFKgt7Cbqss1XgEx3yDQ8KSNHqUngXgVoHnwzD",
  "key29": "LffXDGZyNjN5DVmERi1mQS3kJTg4rZaMGTDc3KcizhG4uYibC8NB6WD43ZzUPxENymvrkdnCYbBy7Y5J3gHgSpR",
  "key30": "4gbJcHAGCktbbGphwTNRrMjjXjQVvtq3RVza5Suo5ncKQ5w6FfiygL6y4LKJuzPmagNqpHgMe5AXXKZB2WBPZys9",
  "key31": "4jr9DLCiX3wisp56JzBrEgBNztgUjeeBNiKHW8p2gdRFUATawhmbKAXuafygtj8FkhQCJUR3wmfYNS8VPozinBuM"
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
