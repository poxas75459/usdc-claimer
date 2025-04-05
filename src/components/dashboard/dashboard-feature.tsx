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
    "3EE78EdQQJJehFPUn58ZWUdewkgo765kpnaLPMkRdrjQn6wWE6SdvQn7PGLW4vLHCL2jmWUQYPqdhiM3TMRDxUmT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zUzpcHrNM83rmFS9UqGt5aZ3vnUEysUnBPEb47Ph6XpwLgzXt1ETMcjdnZhndYm5HcwvWHb5cvqTG5QBsGYnEDC",
  "key1": "5vCXqFMyHEBxGHPGXjCEynygkdU4v9MXrDMg8T8YynBvM175dmjZcQfD8heFrvP2sjtBjQtVKCBg1YgkB6mXS4qF",
  "key2": "3UusdU9nQAGCbqED2UtDcSWxWcDtJGCcMP9tA1JMxVNgAFvACDzVnT7Qd7hz3KHnzvsaTzpLJmmN1vpzE53pnaHC",
  "key3": "quMzYik45PdrGQwQHRhxF5QC3LxiRGmowbGgyQYTNY4EjA8DCvkSEUR68apBXidcxa6XBT9AxBnAYqUHJEDZuoS",
  "key4": "3zpgHE1XXQNejRh91SLzgwmifo5Noubry4uowBS1P1RKruK8jd3rGspvVnJs1pVQss9sih9xrkRVVoAwzHSRahAc",
  "key5": "5heJtXqwvRj6xcVsbHbaecKnniyxa65BNoP4iTizJ96qZ8qdiskuCTXS1VXD3JQfui6Zq3VugKzw9AhpwCJ56tcF",
  "key6": "3PPJndXZvQYs1uQj8o56hReFYNmMxnrhSZbYW1LS3ZNEZaDLCLzG5MYggMzjXrFRegwqbwSTxupVxovstorcUvvM",
  "key7": "QLfYhZD9xXfpaCVQAEswoxTRkvomkpnEwg45GCc7m4KVbhHD5vVpJCaP5vJULLp5qnLpL4LjurZPF5AEmvcJB2D",
  "key8": "4Y8jumzVr9c3qkjgLgAr1NdWnf48oS39M4NM6uASZR8v9QbK31KQnmyd4x96QNiGWsmDZvybHMmyd3YaE6tiiCaf",
  "key9": "2d7TvKHJLrd7xFko7jWdMCZUkmSPPeLkMMLSRFVjxsetSQgai6qjC5LAk7AqL6f4GE33g6zxA6R11KEPjykr1qiU",
  "key10": "YPoGxfmDWNcc8LutwGpwunoou5B1o7kdVGpYV7Ka8S9SaL1RGMVfqc12A7hpDEPA1R1N1TR7WhYs5iSjh1Tz3CL",
  "key11": "czNi3dEYpzNfSFv2KAtHyiQXz9PAdcodCkHWfDPTHhJUaPc2ZgCH5Vn1o6qMco55ESGaQ3ny7MgHunDYspubWzq",
  "key12": "RgpZbtEULC2VdRBQWmVHWmGX9SKdH8UdQVNt444fhEeozhzBxR3sAks2fPTgg5sxh8KpYfJpCYyCVGNhNGj147G",
  "key13": "5jxjFHvCTkXhzQWdsKpDWAeiENz6p9VvNm2EJvsKgswnamNzqPeTPNRUB6SLm9XxyqqMhBAkt7W1JUT5A7wtY3L6",
  "key14": "iNhGBKiJyAJDzbVzqZnJwLYJN8puTs3YFkzwYNbXWxRRnQrLTAHQbWgqn5Ta4EnTL3q9fjen17X6yb1FHvmndq7",
  "key15": "Ft3YgAHu7mvNswCRn8zocs6bGfWF8xXuSP9Q8XWnmShad2qyL4XfvtFe9FQXEXHpNZ9wPW1JZ6KchMh2Q67ogav",
  "key16": "5Sf1iuQcePR6qZWNfrEbuofNgg2Zpx7yJazkks6RtadZdPQfxxZFsQjgb9mCAuYSJtTbx2XhYQhbaWimaBrnrGhS",
  "key17": "mTMCnBuWjRJfQNvi8Fs7c1YYuYdgPXr8whqJM21JAZZE3YafkHWpmNSAHuVWvawfqhCzmMSYpxWjdkAzfUqisR8",
  "key18": "hMm9gEyVtfTkoFyi81FaTzUMutStchZtrfStHsbTP1oxkTeuaL3RmRP157Z1Be5UBSbjebmhrN6xHtg3rWSKp5B",
  "key19": "29kv9oDD75DhJ83vqzdxrCAinChs1JfckRrNPfkRBVMiFFET4ht8hxfqXe1PBWUSHyZ6MNDHoVjmyHUwec166pZ9",
  "key20": "7FY2v7zgsMvDtr3YiokLzfJCa3xEUZQZQE8AYwowWFNNDQA268PgSTPb3QhktkRSvVJtRQK8xuoCKJhSEcAVu23",
  "key21": "aNsN59y7aCCCMQRzVjAE4NY6dx7KR8akihQBAkk4yQiAzobsLMZib6g2ysCGXwZLW3C4a9V8qkruR4zdPBu9EVd",
  "key22": "2rLutJ2VjzfjDcTVRu3aLKyS322tAai82zqF6xpJzCCDiEaQVHgBhLu4CfBvxKhpfrwJ3J9omWDXMkiqv1ofbX3R",
  "key23": "2oWxw35keDtZSskvCvXeSYRVZa7ss4vqTmDgrU25eRSa2zxMAUNESmgtzGAwQVjJCSCLLJysb2q8Xif8SkhEdk4o",
  "key24": "cz6wUY1jvHVV3UAyGr7gGfj9X7NSbzrK2bsTnRwM6WErQ6c6Wivnk4REfsA2xWa6wSALAruqm1PW9FgDH2qnMrV",
  "key25": "4kf5dPg4mNbsxNwkgXLUSRsJgs1ALL3PDQvkHYvuC4L52aQ3n6TPsoYrMBXRJ7YY8NSLR8nuTEZ89sxvJVE2iA7G",
  "key26": "4Q7tKM69rFD6sWbq8UaRWFzhDa5oreKArs1BNALfQJ46CsyBL2KmwDoBCmSQXNLCeYqcGpkggBzX7GXqbkzt8ULA",
  "key27": "4m8Zbc2QH8XA44UoYkk25wCqRabsy9eQcrNGSvAUWNkXBn89mzhTdfZk3ScFVMovbuGASskFNtDfTjLQ2cihj7rS",
  "key28": "qF5oxkRZFQ5FCvfaQPETEXVx1V9CXCNSpwEovYeBbztasQ7PwcGKtNMA1tg8zruemPHRN7hU4Pj8jDej3iiUr5w",
  "key29": "KZ8UPrCLKYsR8xk1HabGn8PxAb8AFArKJWMtKLJjRdwkFxFTp4dQQvL6QWcACLG4GTJKLxgjtenV2Xf4i75xByw",
  "key30": "5RA7cA1TT53WUhVY9LU7cBd4JdVLoJgmdnSx82pSPU1B4XoXCobotvb3XJTMQj4PaSEKxMBePnmpxEoVACTr3c6m",
  "key31": "KhjgbyroKs7uSz1Etd1cjzihy4DJ9tejNE7J9iFF6YuXb9Cu24WvNanoqgFo6b1Hdnm8LCuEonspPzoDnsryVkd",
  "key32": "2M5mR2Z5urJry3Krz2JBroRvNmpTYpLB21Tsvyi2xyPKXX85ckR4ybKPGzjsPRyjZuPahQtg4wwJcmvs8UFXAZit",
  "key33": "5SoCrZcUgP5rp6NgTGEe7dsw4wxJpiy5QuTc9hgisCrTYYs9UoGy7Za1JxMUw3eAWfzm5oDkx2kTA3PtkmqUMzLi",
  "key34": "yrzmMEH8aqDbDJA3YfQKjuWcXqNhx6sTaG47tW1QiJrbCJ9Fozeed5Z1xxeMzeCzVUcSn58j8DUTbmAGYKG6uHq",
  "key35": "45sqrHTGpGRyqzqHHZpENJ2V7YwWrmcL41Ph6gNnKE7uoCBhz9KbUivppd85hU3J3ik8FMTJxQF9TKfmoSk7qNCi",
  "key36": "4pYFkGXWbvLa2sWS16EMGTvDbsnkmS3XkX7fhPCrfGTtQxVFHNkMxGNAQKRyNhrupsFKC1GBNGCYF9BpgPogU28",
  "key37": "2vd15SVyCaF3iQMDthKYbPTnd5FmgXL9z1pNg6Ucup4BxckbuuRKCh1z9MDghQcJKofu6si2iwvp1b4GxH2W4nZ",
  "key38": "4yMRNaziww3q2GjurRrnrRR8oWN4goeNat1AdeT2vnGhvHNetHSPstCF1n2hUD2UuzvY6id4gg5u3Yd73ANWQb2u",
  "key39": "5Q2fzk79LrfbSFRv7ZBtZGbiEtmtKTbpkNXZDwbqzefKLnk2G7jEmyQ2WdPn3iRiVMYuhZEXuNYRPuPW7gBdkjAB",
  "key40": "3nbjzw3UPVogxrkBBWJ92U8emDVb8BjJpZCmm7fECgC5kvbZNTTPkcMohfNELNsqECNabVgq7ZA4iUrQKkKwGbBP",
  "key41": "5ALrMLU5DXXzMVwxatW63orhjC64iMvAJ9G42c1NkKcoRvVbs87wjNWShCFVLrTNi34vqaYARQpW1QAXkmqEyoh9",
  "key42": "5VeVj47J9vbEDmToEkYgM5a1j8t9Qaqu6Noj9QGMHtr1UCYC8nQEhRd6QAhq1LMZK3dmWBuX8r857cq3nUvk1tvm",
  "key43": "4qz5yw5B9nnLMjuDTHXMJFHqhAE5qKVefkAeVp8ycCZQom7y9PvhKihhZY21B7hNsqRwEAJMbhb8QKQaWbDy3Khq",
  "key44": "2UZyJdnC7ok5AED1MRdXDHd2CQfMCrt9UKqyprLjGvgeUGhTPoLQK8jBiGdZwh7d56kGegAkYXB3ZiHad2aktE4u",
  "key45": "2Jb26qjkP5qwoUA1wrKcammPNTizUCtbFMsQzYF2T2ZApW8dPcKamX5sLx7v9hq35FwSNBWZFFPswivKdqssPyHQ",
  "key46": "4pLWR239ps4n6pvRFLV2jjVfPBRLhkoqGiEXPPJ6cGm8GXs7RiDnvQK94G8qkpAS7gV586uKbksDzvCKNXHzcVbz",
  "key47": "4kAMeQFquQeXyt52krMd5hZxYKSEk7KWxSjt5kgqNjiCata7jfL1A8cYwjYTngfi1Fbf51ccrUqbAW4PY5F7G5i",
  "key48": "3xpMDxetNNd6BfN9tijyuSL8PhGqZQs2P6qPg6XkmTDR86q9V7RvKDNpNGW1W7nkF9sVAuXYv9UqRbWEsQyR2rJW"
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
