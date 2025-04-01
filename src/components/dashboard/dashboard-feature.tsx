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
    "4nPsuVQ7YTrehgdDJAKXgGTecMweDDY15dctpgCJjGr3drrppFyQEnmTcakGosu9tVBVgGY6FZDKUzBpZZpYpK15"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gk6UW8azM8zw3RyBu7C6re9w3TfQ6zGpwJ9dZ5udBsL2EoEBpo8ydc6dres9CTaB9YGKPackWn66LcB56FxJM2u",
  "key1": "5bPwJFgjuGrzPAoyQXQPvdW8SKUEqcS467mTHv7aqq5Zp7NNzJTnXt6GcJFhvE3uGKgjEraKTHNBBBpM3YYN5Awb",
  "key2": "2hfsKGjpaXK3R1UQ6Kmsx3R82xiBuZVexJfBzqjsRSB6Uv7j2QcWcwDAbnFXBBoaiER7qbb2bj8AKN1MiLwUYvS7",
  "key3": "3QKdGt1qB86RxpR54LCnBTXNj5wEmyCH9pvs7Jn9Tpsev4tVS7o9wVtyevCaxNzVhzGnZarZu71yaK9UirqoS9hm",
  "key4": "37KUGhTUMmYGac71A8ktZq3r4zyUR9PQHRpKRy7g44So1tWpxDEoAqFVGEZk3uCphdHpwi5ras6QTZc9vDvUCG7S",
  "key5": "5Q36EfxBpkddScrXa1pGfqJcbiHoD37K1L1eYMpq3CYWqa5yW39MiC6hq5JvDNR6iKr37u5pXHGzbr32Sij41Jqm",
  "key6": "2JBNumbwy8yWQ46dobJ6wvnb9uyy87isGFbNeoo5u6Xe95FZsF7QtMu8M1CZAgzfpm4zABoe8daVxdncADzKJN8",
  "key7": "2wjDP2hVup81kCQ5AyqgVjTHcTY5sc6e6z4KEiJnqWP8EjDrVPZ3YZfRWxZbDp1CnV1qYMaAmTxiqSyzghQwzG7z",
  "key8": "2ehwhKnoZVzb87U8Qbpx9jo3DoHSjCNCuF6NvkagfHtqU66HPgUNqDbFhQjTM97igU1Mq2mHPUvxrow4yLx3f96p",
  "key9": "5aiSPYham2Z9ni5Tnnk6WWTpRtYZRJbsvUqEPd5BPu7hnseFw5TotebNgdAMuBbfkpeMTmEVciXfEXsRiss5ZSAN",
  "key10": "25QVFDEQid1z7vSti7SLmhcaLrKZkcdVqVWX1ocjhVKcNHXc2ZDCyRQAQVdEZ9H8t2t8EZZ38xsjvjf54mK7vtAK",
  "key11": "yfjRKgxx6D92kdtLEhHA26ThuTcCJytrvsd6ce6Tmne2g3XkBzSGEUEkmqpaicboEp7zzTjnZNqDL6Wyd5WbgSY",
  "key12": "3A7rQafAo6zcX9t65civwBmNaNpKKntnCe963jVmnXs2KveAN3AYCEeFpwRkcgaTDg5HxsFyvhFfvRufRTLQaZ4T",
  "key13": "2RQpfJ26UUqhFPpkSXjKdMmWuRwvaQdSQiyJBrMWhL21dYmSc9vkUCb9W8YpCapy6YrrWytqurMUTJjQWP1RzPea",
  "key14": "GSf5uej7EQrrtDh837iDPaFMTiN6DJPrfi3mDWupaYKGKXK9CZUN9ERKJeCNYFigLziEUVZ6rhYQGYLf3T7BQWT",
  "key15": "EaZJvmemrK8rKP2hFdfv956yGhWiwTbgcsDf7MssNFoZuwTpcqNRioWGxxU5C45sSPWV1VAQXprcALfaRhTS2ED",
  "key16": "SLhDWjz3RVFY9ihhY4Tcbd1NFEu6cBuhkSoVTqYeLcRcnk2u1P1wM5j6cW1sXaQPiQGN9vxNWXuvLLoJeAsqjfw",
  "key17": "56FquUeiSfL9NbCTX5eVyiXm4NyF3LF5bb9XfwcYCJNYwvjLocctsfwRrt8koRujJFENFPwafuT9BCGKhgLH5roe",
  "key18": "3o3mbTyCiVkbHSSS6Qw1GjQ9WUzZfPLKzLTcTqCVUn7XjR7S36UX2DbjRnM5b23EubicADJJCAdd21cLEHRhjZbh",
  "key19": "dCbfM63RzzsGr3md669biH75iR21wdnYnxC7uxP4ickdQ8v4gRkLXNXnfsrxNTKdxf8xqBn9QuqPHyP8JV7K4yT",
  "key20": "2p7W9AoQQcU2hBcNE1ZbCJQU8nrAdjwg2HyUffayne7PjgC9rwHJdW4TgJgh2mr5oDaiXwqY7NT6TKrV3cgBSkty",
  "key21": "ShTVvnpfHDufoXWxdxEG3c65eDJ49qLvfwdqibRjbrhpCW2nHRu7hi9txhxE39v57EuZzM1Hrdu5QgHkevwaKi2",
  "key22": "3Gb3Y2Cbtbvndwzj2zaacByj2kxPgMu6BNNz3DKCz8oEyVkrT8gXbsf7qYX8aBbsRLxN64NmWn29hLdF2unW1rbd",
  "key23": "3qPzN6Vhv5Fng4d7N1MB2BR8wwkNGDFLrVNDfTCoDCqn3M88c9wFrM2zah4CuUTeusq9xt9zDfrwAAKzhu1eGNmv",
  "key24": "3k72g5GmbqSb6Dzy11vuU5pBLmZar1eKwJEqoxXhh6UcuvS8MCyXm6EHooZ9JW9tqvaxPqFqmfTSb83XdCbxD2h5",
  "key25": "xAHFpVtcKf5VW3AioNS8MpzfwznG3RDqZBXAhzFwjZczFpLPGi7xnwyHg37WMG6XWGnj2GYhkiMvScEL3hQ4qJU",
  "key26": "4V71HQ2Au8hBxatAEtNJ3js2RMrbcHym4HinTyUUUd3iJHqQGfo8pzhnRfqF12CT9Qk7bDiQkvCV5nGvf7nxvJ7K",
  "key27": "4KKS37AfKEm3cLL1Kv5eYNKn3dWegRNUwAL8sr99V4Em48YCd3HZ49GXNeLRjwxAvV4pea1jWZoDEuBdEbdD1NJt",
  "key28": "5fdhrg84vCFVihKs9UnngPekaKqugPw7rKzKmXmpXxnqVAFNcwYCFLcu2vyp9AUfbjrdP7eV88BW3eXWjm7QGjY3",
  "key29": "3LbCCXRGeC8h9YbfUKwnDhaFoEu2DiWr6Jkg1aJijBVhs5XQ3QeTfnHG99RUXWBuRBv3gvxX8zECaGeSzjz5ogNu",
  "key30": "3YdgV6LipdpojYF9XLe6NMtEFJYHmyLhsoZ7QTqCjVkHxeHpcXJ4fPrBUUaG1fgLxvVz5FD3uneU4dnmuyr984ph",
  "key31": "4AFbdY4M8c2EmczV53JNstvq12HN2VxZQWjqcKvJaU7KPfRveUxVMVC2imFtg7tYTRskJzNoKCxx6hQPqETbjB4A",
  "key32": "KEZnarg3xFQb7obGfvQ7jGk1yHdZ6o9YEaREVuq8GoDUnisjWiivBYhb6BTty4EZLyEqx6h8vX7Vwtb6QrxrrKP",
  "key33": "5VqBrnjpZ85nwnPA4rSWbT9UTijGxppzRf48JjLvAg5BLJ8Esko3KE6D3Su7aGumAtwo8aBuFPDDci33XZRqTaQk"
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
