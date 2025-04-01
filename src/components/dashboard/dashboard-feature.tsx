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
    "2oFAzzzassphkGgbxgAoMJNNqByvziBmJMkRSXzWd4uBqsFxdE2V3H4NLLPjJsx7YgedRwRn9NS6yaSyTcQr3EAx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Lmpv9EDqBw45qCLJKZrvQ8TS8vuLLfDGk4jCgwtfz5VRmSNFWd2G9k3JtAzqBdoYty3HS2c22pfETXCu98H7Jxd",
  "key1": "3tXQdqnVEQGoPpsysAWkyGCzk79q1DpMJiDhnBjsv4JES4mV1fXKsPMZcJpwFSRmLppE28azPUUBixWDouPH5tnc",
  "key2": "3EKuzgztehekc1FmMMiNQYnXBoFKfBKZWdWuGJu56vrQGAxjt6NSm3xBWr9dpVvBQYVGMaLLoj9xqZ9vFvENNy6y",
  "key3": "oKH8UFMTfSrdoZNahZvPL6NPp9G6BXSsoWMdLy3wn4BRuyuQSsb5F2PaDrR5QnDndpfYp6g5T2iuwFKuy4UQpr5",
  "key4": "5sYe5ZF33P7G7MktdfiUqUYDYiaS9eNyBxWRcujjLcRio2WSYRW2h1CnNBhGeKSHqEbVNhCgEiDhQmLGqKLttHqA",
  "key5": "5r7oLJHpVgJGAkhz9GpnfKgYUc6CkNfoRfXaLd9ufqGg17S4CaqDqHMUhz5NLrJ5hMJCwBX7W5NqnUp1HDCQeJqt",
  "key6": "3CHcFVA1PNCUxWKT9jaXLRegzmse386HaeVDJjknjRYwEdAecGNkkv1FxvwpuHKTtqatvF6tcAnQdZ194yZ2EGBX",
  "key7": "4b8GxssUH7mBfVRu54pmzHLbqF8xsTc78hEZFozyVbf5ThTP2Nh9i5LxPDoN6ak7sPDY3ZYrig3jM7noQtasskQH",
  "key8": "rdCSdAQNFvujsnhurswEXRHRTxnSpj69GfdiVd3eRAYFDNAv7st86qdLZrJkF4HMsQGWiqjJYMnPteuyTbHHmg3",
  "key9": "4SkA2wZ5UYyHVur6BU6sVGsKtjWvCaDx6wA5VD7DzUt8x4togHFcuAkWZbLw7vgZtAseZf8ZudGfxGep14rrGR8Q",
  "key10": "3zjxw7uzH1qfd6iaRFobwnvfeiY2orZoTeAwEze88X1DcoC76hdrudmwv67EjBs5yyzRU5usK6ZsU8DZXQhCSJc3",
  "key11": "2CiCdtTdf4vTsuXiQcn2VXiMWr7DM3SweUncb95Z4oZ9t5rxs7AfY7f9uSfePMesRoVhNpfJx22Fiug4WHXLzgYS",
  "key12": "4zCkni2C6s2eaCka8oU4Epc5qqidUKQsZQejURSjBn8QwjQ4VwMoo9g3GAJVPVS4vs8uaN9mmttU9PR5cZpHVFAS",
  "key13": "4vtKLxuU2UuspdkmFbmyVCUUhhtoMZmG2BYWN5S7hKx53yEbgKihF4M8DMtdmNtsfVzrCUVwjMo4hjZV4pKCDhVG",
  "key14": "4h7qVsjRnXYGa3SB14mTjyh8tC5bxwUNDqFftUrwGdbKyt9sR4cYKeuJvFqqBkqk8mYP1azP5eR3B34b1tSfr2fX",
  "key15": "ZWE5s4Rm8cKj6c74xw5gBthbbSQCS6pusgmEVt9wDcuKZiFYiTkDhSWUcmtJusqoydqJGfiUbFUrBiZiVrnp8v6",
  "key16": "3haQd3gUm8zjVAg5Ss6pkptjpSinUoCandKUWBr38bayi2dxGUU2YwZmbCHLH6EKgdoUdQFqnnM5Pr1u2ZH9BQCU",
  "key17": "4GLFuaqQV9PTt31CdzqDL4UNJCf8UP2MmFpPwKUoASXL7UFDoVpxLGyUb2UXRtKKBzxsyZspvwzECttYDtTfpzVT",
  "key18": "2cJF9b4F993kAy4pxBmzmTSGitCJRQJxhWiexxmLzXDfjQHtxe9YKcuMxLJbxNKd1fj7MTAJciuAuZKTQ7n6gCZF",
  "key19": "3BFANEi7XenD8G3xRy1tdDavHjVtUC7q2oUX5dJjgixp429wKKzAVt4LhKW7wjji9We3tHLMp3AHtUnYBczUHSSG",
  "key20": "tJtiCLdtTt5EBZnEwUvTeWLGHsHtZVH6bBCajYebapANCs3AzjXf3i9SLDrJXAyPQyjcFUrjC1NKPxH1pWhEWr6",
  "key21": "5iJcmGBuS3ZdAzw9qhme2gD6fHVZv6kNE3LzYB2wXjeNKmJLxxy1uYNwzGhF9nusQJz61msQ98EHx3TQfzWVqmx",
  "key22": "3t8BE3LLZVNyatL5mcS9mpfAfFEiADuJGuTE9gF93wCzBKdwor6YomwJvSHivaV22YZBQ5TN7Kz93wiPtQJNeGY2",
  "key23": "k238Htk8jpVc3Q1ASUjEBTGzkhQkKz3vyKpQjcx16fhZk1Ujffi94PjmpjFEwpYFX2yu7Ad6YzqkfV1Ub1FVqHL",
  "key24": "4N4FB5hN4R4iD3VjT29dyYdW31QeDJumm4brFvrVh7BWHvVVK6VHRVNd9uiGAy6o7kUGWPXmQMkhapNqjB6HWXTr",
  "key25": "4F6PEREZkWMS33k7ATt1H3Yik5iZDiBGAh26pUXwdXMXWVv4v2kJuWELzYgYWWkXPE3ky44qubGPTzD62acWnewW",
  "key26": "3AykBJRhSZBw28CLPsq4vNPBqzZUYeaH6GC1ir6xzgMUYwdX7Zm2btxSzQ5JfyvBe5MMrf4FCrKv9yP9yxKVR7JY",
  "key27": "3QwdWN5ZUpSe1CH6ri4bNd3LgK4tWWjWasQoRvqEzno41A5qrwHEh5M4CFr4yk56GjTUv5tbnrNTg28gdj71Kfso",
  "key28": "5GTxrp8yNZyGH8uaUMuoXqt8jKt8wt2GP5g91y1wc9hUcMyfkvzCG6U1pJ793Am8WV5L3p2hR9c8CJRCtp2hL9K3",
  "key29": "4NArbtRNZYihRhMinJv1FqRDeL2hosnTK7dYssb839dk66rczzTh8hkUqgrRUNrWCd7kwifQmdFXSanNkrAgCRm7",
  "key30": "5kstoAi9rYt6cXPufvkq1LSNxPvFh11sER1BzcSfWcVYD81bxb7P3heJfSc1XjuCHErZT1ZtG2r3VsTPyX4oeQr9",
  "key31": "322jYNgaRVBs6SgfnYZSsLKdrTwJqzNwBgrNKaXUGbV2nVfBKVXegis6KCcbgv2MHizeNY5iu8cBPCWLnCoYdf7",
  "key32": "4Ggmah1Dhg2dACAtDJiZvL2Bc8n1RcJ2FFjkMVHn31mCwrNYTqvBnwSzNHrqMUgozx5UPPNVsMbDi62wMLmrYgS3",
  "key33": "3kj8gdQbgc36WUksVvz44bQV8iToTaiJwD82BFAYSwHrMnfpCAP8KP5TdgvJBLPaRw2FAgbzvvTTJRuSHtxctFHR",
  "key34": "5k5x6nFoGbKUQ7q7RxhAvsq4tB4iTeR5fcZT15vRhYL8CqxVkcEVj9YjcnqtBu5Su881JTiK2jD142ZfrUuJwhhh",
  "key35": "51XzEdoL6g7xYmZ7PknFmKLaQaJoXfDrFA9ZUDF75gAEpNWyj2bKHmRQduYMyGvRArzSJ8d41nKXuZeF5upUfTux",
  "key36": "2sErVG4bKS5FhRjRZWe5fCXsMzzfPtW1z9j3idmxan6Gm9PRBgCmsM8T1FgxtLFvxKqwCq7PmospiiSz6dCnS7JQ",
  "key37": "3VwmMdE8aZnLnoZ3NscYhG3GAT1V7PFFnLiCpR2QxR5z5V8M7ofKSopnekiTbh6wcDyohTM2iL69eYWzcCeHoAbB",
  "key38": "kZxie78ef7UN9edQbEFYRTsMhUfYH2nhjcEAmGzViYpTCW8gPDaBYNuLyN866ia7iHZwUscmNcPyRo3fQ9QxphC",
  "key39": "4ELPaTpJzjEvU9puVP3rEmzoSNo548Y8EdULbeDuKbjboNQkvXvpTs2n9Q5ch9he4bHPArUboufZfGzhhzbPcHZ6",
  "key40": "3co5dKxRULcG471bGbGrJEnMxzyws3ptmqWseL4UbWW27z9Ub6zd4UMyN8XiZo84CkdteoZiBs7P4gyMEEV6YMWs",
  "key41": "61KsMboDvnEBW7jT5yYqA15fwcXMXAE8jcZEv2YCALsSCPqiJfL8wCL3azXk429xhHsfS3jaHh4rZ9W9YEZ8wxSk",
  "key42": "4u6uCVFPq3C71Mmad3EWcjtUvV1xbZrzZP9gLUWuxJuzu62DPWG6ePfDkG5ESi4g5V4j8HsBrrT2aYbz8ywjUQkW",
  "key43": "3KyRgWSTpgrpt37cUZwJMjDAmDeroyDtQMGQxeZrYytxncvrBmSQLjrmS74WPem8cNCH2Cr9k2bF6FoKKQCAmvCu",
  "key44": "23LkhLJ336ncEq2NP9BGf1oZYWuVwAa4fPrkbD63SWHQ7c6JEQuvzjYBfsunTE2G232vP8Coyw9ykQpJwoENBbDF",
  "key45": "2x8VkWqzJmsoQcJN3zft8UXHGtagyuEHb6xFBUL15mfqvXuZvGosdp6NMeES9ZXm81dpEvacJzxHWQsTH7hf8PGw",
  "key46": "3tss7e5d6eJFdbV2XeF1oG3pdBXozfWQceGCPpc5gEZvvSLtNPgsutSxDkLxGD4Pq1CM143A4g2jV6wb1xcASw1T",
  "key47": "4rNhW7ducApoBt4y88RpLxaQCGdjfi6MbWSUCSWdmwK4w9Zq2Yq8KU3BuS2jX8N82tGZE9LvDoyF5qNX6hu7Eqb6"
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
