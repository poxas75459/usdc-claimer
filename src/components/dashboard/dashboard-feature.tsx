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
    "2r3SXr5tXrN6mSFqxStRntTcL5jqYPmeK4jiksufGHqFRLLzG63jsq2U6X8ZUhVWhByFitUsfQJzrGDY82Ppqmf1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U1EsRSKbHbxkQox7M1ygwpEhofGXNzeRE3vW7JfKbRsWF7BSxWKfYcZmBX5VxqE5WZsZLDS5P17z7pGpd3A9u4n",
  "key1": "tSz5SNCK2Ya85Fqam58iXQNULioUA2JbNKp7jAdB2hQPE5u4ke5F1gLW9KGjZZhLL7ByHDwK7wd3GibDV8MpTtu",
  "key2": "2BKJek1ttvPPer5CEeoHkkSvZFEeYS9wsaQXienPkg6YT3L3BzMHtuNqF7znZHnyZpRjWRMCrmzLvpZsKbZwwXUC",
  "key3": "5hR8LELiAsRxsvZCKJuP5qgc5DSNM1yy3MBURdS6yxbjEDyiH4ZpBHVRrT6SDZhxs3ZbrMC1cY1rPAYxfgF9CgMr",
  "key4": "2jiKgxXHq2uCHRsxk1iSq8GMt3BYyj8wZksXf1fCPQJkYenqnj73V1eeDffbF6XCAZi5vcE7JJU4E2WXmi8y1MLw",
  "key5": "53Sqi3giLw3roiiPAAE2BsBZJ4APmo4ubeqNvcD87uXNKY3UFYXVkW6w6mYFwFNaSDufw7RDH4QNgcTPiBLNRBhm",
  "key6": "4FSXQHmrL9FbaUZjXiNQaWceMaLfQr8hkMpqiyt9oYnrXaXecC9inJGBrNW2S7x7MZo3jgyr2a17PaeMxbiXWLwG",
  "key7": "2rRRrNPvbk3PgSyS7WLUmaYVvABCXjHc8WjGbf2wiRHQyivPoMHBQatoxCFtvxGNCZr3VysGpugegvuyJv6Ditkd",
  "key8": "5xZshPamis5kQZLR1MbbJZMyEvZ6hyGCbeb74jEAsz4oZJSwNjTKejfe9Ac6F56fxbQ5fs6C5xNY9CoFTBjCb41P",
  "key9": "2HuJ6jH4ph7GMnZE4hp5rCVcPZvhzpn66tqqvVCb9oMT4roEVzb8WuAefhxkWL7eBmCQURszLmyaJ19o4VRLz7yR",
  "key10": "3Lb2DCficBYfS52kQRzkLGVjSZV96mq1uE31wyDhnLJBNV9zFKA4DT4xwWFBNpWhK9rFReiJbxwwN7BGGa1uUR7F",
  "key11": "2dWx5PatbvSVrxVJ6fgkW7YtCWhRHr5NvwsV7d3e2LpXdtc7htFHYkcWSzLYqFKMZHracW9PEp3imwUySYNfvWJi",
  "key12": "2t23yLngPqN2VLiCcqYXdWxfMJQMYq35Dt8CUvSkwayiSEqwMMbbpV55eHffDxP7ir6QfLXAdYp9iZScBgpWyF5k",
  "key13": "23d65CmyjKUNNEiqDXQDfEiY9rDCTPcHR8Hf85pvU9ShSVAUWcFe62kd6WoDThx4MZX5GUzBADqhsBxaXer3hxUq",
  "key14": "4KfVywkdFWfr3tkACcLZaEdjjB1oc8F47b3JwR5tXMAZkGggyVLLxnQhNHJA4tr44Z2tfLfEHn9auMVeNAuWfaK8",
  "key15": "6ddv4XdZCQF3FVHDXoWRtGy9Fh2CPEGgq2SxBG6gvcVGNHPqRjpCFnBqKgGNrRx9w2RRiKWEeAKXvyds5wcfWrs",
  "key16": "3CJkDhZtQmYrvkiSTYijrAyaAXqB7iZFNd2nJrPxgnMJEY7UKpV93xBSSPS1iFxQyJGSBsoZgkNwSMe7ws8U4J5y",
  "key17": "Y2LYvMsMeBz9X89ERtxZr7YF5YYxQjQSTUP8BU3FiB4Veioy4WJJBmjqwWWCCYFGDdr95pBTqbTzAurxXH8xM3F",
  "key18": "4roo5qdjqu3yYAVibRFe8xZfZqgEqhrD4DtERQQRJveTrLXM3gm6Fr2fDcZj5umrpYdj4ZfHJgDzwvUiY3vTKEue",
  "key19": "5gENHUeQfavyyyhGvAieXnWBCwKhHyrwZkTo6xbMmi7iu9gVz1cTHy4cbp7bbCosTssYFjcP3pBV9X9dPKETG9rP",
  "key20": "tLeL1heArvqmuVvrqS9BKzBHLP7UpfDQP6X5FFAMgngSLyiuUnLjpHBdAxe7B6bzdrJAEf2RxfhzNCntcWuFiZr",
  "key21": "57qNzPzU6fHnpjYpb3YfLnSCsEjkGYHPh8R1aJAenSPnnvf4J1brYT4gcUNxaSP2yUWWuJAhoq4Z4MRLbkqNM63D",
  "key22": "3eVTa3hZnVdMSzr46h4YidP5zLnprHCCzou7N6od9NaqzZbfEL2YcXQ5k9zBT5AULqHTy1L2CsKoj9uetdALyG9H",
  "key23": "5c4BCbc6mQ1nV7CF2hCrdx7cwpQFMoyNwd48cVXn53HUhrfMdghWrdGQZu57k2jW9A2SbBpogw2iq1CDxrFkmnTa",
  "key24": "8s2YyR5RxaBd4itiu9SYtWeZKSCRhdTjgB4KLHNbaJKxpHSjkNa62AApr2m2phUV6WnEJumzHqFk13ZWb8ajv2T",
  "key25": "3zsieXbknrUQNZH3TFQpGXEzwVm4fcp3yvogEwsxyEuh9rRDRwSZhKpQNnHuwW8A1YLkEmFmFsdn3GZSDu9cFydM",
  "key26": "idat5wWnm4ZSRt3cSsG1PwKUXbkwg9gWnZa1FKhkf9uYft6YLUXodU4JToiPhES9eDoJ6UqY6vCEJ4oGk53Dthm",
  "key27": "EeNLFpjFBp1NtZGtSvYmM5UreiqgyRH2MqhsHxNgsch2ZKrckWcSjfapFXTBx83vSCekHeYWxhi4LhXQAowSxfs",
  "key28": "4iP6SHefj8RhiqXw5gTPLKd78TCTuHT6HzANW8cT1nKXaMAxFrQPZxVq4GcZLY3qDXT1NnooY5cYmiNCAsyHLdR",
  "key29": "3pB8ZBzK6Nh4pqSrex1EfgstDGXCyGZ1ZDnhCCNHvvSoqbX5bcLs73TUq9LAC27vdz5L1RxBmArsUMcPVMdphcQQ",
  "key30": "5eURfK6xM9Zs3CfXkXqCfsTRMpibmGHWtNCmnUQtjzrmxFYKSabTQyEgBRh9tjmgEbthQzjyTDssPTpRbAWVGBoG",
  "key31": "3kqT82r87SV2DrYktbmtBDGg9WjR9v6YvFZofYXFcW9twUQ4pbLLWLAt8zyWPZNkv55ASneAWHvAMfUiYUsEV3bg",
  "key32": "4DJzuJnR6WA7eGVX476cXw5N1msQxRVsDyUobCjMLNnxEBEAL45kDrda7PfCJBbGm96N6S8ArKLczkGaXSS2xMts",
  "key33": "3wAfGpkXre1FBKLhvQRo2YxmrvoNteUCPmQ9hh5CfRJxJTJfiuso4NCW3CJTJtdBbBkAivMBFvD11Ksg5esGwkX8",
  "key34": "Q5UriX9PXnpAcywKSQ4WXzN5ZH4jad7oj2RauQmMvLdHwyy757wcau3Gau5nwEVNEZSZwzsZEN75bqyxfdiwmJz",
  "key35": "4XcygZQqaBgZysrnaxDtojve3qXXiTbp5eSSuhTsrQgR91opz9vdzYM7mUyzPPvCRGukfm9HP3Sbfe8AB6RAUqyT",
  "key36": "4mqgjYyzqA7GyQcjSSCAnDgnf6VkQbeJBLpBFD6tsA3LfuiZoEqTZGY5Qe97rqxSKwSEiYmo6gfGbT7dm9EyjryP",
  "key37": "2heiFXruE6CKQFTZdPUzaRMYKHH5HkbiJuvgAcdSxzBuuoZdUTCAZepBxFCRoktnUTeyQcRA9xS2K9aMjj2zGewQ",
  "key38": "2nrNuR3GD5d8MaLpiw1vxxtrwTCGjSbtBrWHwGrFy7BMszhwVMjPrZydYS1fpqrZheMdVfGR1MF6Fv1yP5FaqYi5",
  "key39": "3KcNL9qWiDZSTvLEHXUvbKTsHyKM3ZgFUjGkc5a3T3TRcZHRrSM744Jvqg7tbF4ASaoSfcjWbMs7R8YZsaAKYzG7",
  "key40": "3hbu5w59opfaEosyExcczZUwh8kaE5383b8BbqRdRgPPyDbvYFECRPDvfSaNfY5WXuSJbbWETjyinRhLfWezmBZu",
  "key41": "5mtjrmjQhG79zGC2pGtQhmjZzJHfNi8GeN9rsrqy6LE7Mv6mRSyfNGTGYJPriWnWNYE5P7e1R2XiaybhJTNgkoJX",
  "key42": "25ac9ExfEhcZJDgw867sb7wto7akToauQuCaasKgAbc8EgszHWaTZYZoxCA1We6UY3YVoAu1yDXKwgkmer4aknyi"
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
