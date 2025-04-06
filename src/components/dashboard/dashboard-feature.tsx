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
    "dH9FfaiYZbKoQD684jgRbwBWjVYddrWnazLk3oR3VkZWhqRRJcnoab1YELNXnDNqsWdZdYkKgJFcSJf63atgBPW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ubdm6SQiwaYYUSeLh91HSh3GM1P4qHKTyGnEwGuzxCYWMVFCLDV5TdM2yC9H8KApiiLMSXY6mJBChqG29TeNBkL",
  "key1": "KqcTJqke8agP7iyaA7mQxCmRrDD61yjdkKha3JHg3ESXq3H2dHcLjnMZRuAEW92ZaniHjWnUw45ER9JreCrNRGd",
  "key2": "1XqkyYKwBrBLdmWeQDCD6zq6RjQWoGeyrgEuWKBRjUe5QXufaKCyhiCzPZqFhnPVJUhhsyzf6Po8JcGT6S32qgh",
  "key3": "3TaWGgD7CX2N6Rpazz8jxy7Fj1nAe9cmHwXhSo6HJymVG4SPhKfvY9eBH9r9wUxjFvBrAzUHQfsyLdi6YbnMUAUF",
  "key4": "HukuofberQH4BRZzV8nRe8yM1MAWMPNgdjroDe3sJ7NqecTU95fD65G1ghvbW63AJqqPGabwMPwsA2XEzqG9FuA",
  "key5": "5K46pi6LvXnittW8ZD8r6rSEs1PgbfrcXxd7RvH1uZvAChQGbkTfhsQJGh9ejLBHtKBc58VgBe45q8rYQUD8susg",
  "key6": "6cb5yYnLFq1jMB4r8FpzUS6Pa4v4RW7RKd84UPFSJJ4WTjtjBCeNYabDqgvpthavnT6SfhfWgDhK6XLJTG8JA2d",
  "key7": "5DRRRpy3Dy5Zg7gtewAQmuQQZiJjuACSTAr8paA7m8XhmYpP1nXcPDRkMtZTY8mqgZYV9TAUBsApc6UoALCTqyXj",
  "key8": "YqdoTZxeBHjBY4SpqBCpWMTKCtxgTsocZUb4MVzXFVihowiKZ3WsPDQSVg9QwJMNWZX1ieerYJQee5q88qNy3G9",
  "key9": "4mefo9P54TeeHkv4qN8AUBgd4vvirR5AjaZmUZ15sLDKAAkCX4AhywC5yMHAioSWYRuHjRFQiUnwmarFiJbcGpx",
  "key10": "58Q1mjx6eumGE7wCzYBZFJdLCDRdVGbanBy7Ab42mznuLGB2BAEM62jfuDbwjWcWbdgreG6UDyVd78zsY7hb237x",
  "key11": "UN9cRyC9CvXfdMaW1TySEqW1Hq13GswL5rYstKTeEH53NDQrAQEYX6aA7mNuwc7bFfrk51thCTqjy54Ztrt7Pad",
  "key12": "45bKYaM1oPiVJBG6Hgn96csLh8nkd3FsF5FHEWnbyN7LvoDTkPe6RDH4ojnQ6VvPQVagYJXZRnEb4ikscsfEnP4Z",
  "key13": "4oe5cChgqTdmjz8wdEBT5ijTx5vpHD2NHazjUEeg6RsnXHB6grmdmZyXbgcR5mZFQXtdCCS1XirtUVrD9FqNNGe1",
  "key14": "3SzopyZH8yfnJZ5Eq3TXKUofh6ciYN4xogKJbu93ecYt9H4m2BL5WGuqncNkTsGLLb767EsqmakWUQM2PjPuBjYg",
  "key15": "2NJzPYmnqLaXumAqWFf8W5CRGVFbY43H1jMvoUSjgSGfNTW4kEWihnwXTzqowsDa5G3RUbnNNBrbZ1JgwLUE5N2f",
  "key16": "5v2sBwTFqy5Cc18E2597GjQ4fp8tmozTs5viwZpFedneNhVzt1LkoW2EzNdTKsfBa9dy8vdYujmFwGWFZQuQTzCx",
  "key17": "2rKKJSH7JHW5yp2wRYKSCm5L9FvNuXeYbWHQkaoqpzv4rhmqdMF2GF5wuHzoaYZNHQ5Leo3vRR3J2T4rweLuq8vS",
  "key18": "3uVTcBwUTrHpxzcX46zMEkUv4JPmqTSmZVorH6unpQxSuRP9S2p9cCRHjV6QrNmz73Hfsi6n1cCYABEr4zzftUyS",
  "key19": "2R5cokC3CptGFZGv9mzbyuZ9ihaDbQgpzYQRWwLwxoAzt3zqZnW3rfKGmGj4ic1F1LjES6h5uTRNBjdwRMWCkyim",
  "key20": "5fHjGTuTUv2rhwjJJCs8q2SigKgbYhnQV4Acytfj35nSYkGbQanepmCMMtHvW5jgxNmsqYRUUvpqHDqN1GaCkgpe",
  "key21": "5hBpvwkaUphFV7y2EJ5WKa17y6kmzXgh7deB7ceqKtvffDuzTBkKaPpSAMgpb5SHSJtPS2sXJjqYEdT5h2ft9yDy",
  "key22": "5AsMrgtq4Zg639j1zmTiCW2QMF6cfMwEGtHb1FDgDwomzqNZjopbLkQjpCazrmwi15aP1hc2FXAnAh7VGnZgsPAT",
  "key23": "3MLzaxdwC4ycogcGUQbwvreoe7H2smJcmt6wGMLmsv3huArF9bBZr5jcPXC2s1WYufFtw8Upf7gTSh56HsQ8BTeT",
  "key24": "2T53Lv2jqZCibooBg3rui6o762dAozNHWz9USprwDeqeTm2SDVDrWMbYrJC7CoV6m8xQPrnx84nQfZhUx2YhdybW",
  "key25": "38aEFU5siso8bmo61FRhrjgjyWtg77kGUGwNgUSGyfY8fRD9WQRjusJidZRpNRpyqTXKvVE9koZN6r5hURiKEmvg",
  "key26": "52wCjF5wHXGBXpymgGbkC54qKnCrt3cDC3huYQvZJMdW3vQmBvpai72qEEMh779U7wAyVCksw9iHhvK2mrGD2Jbx",
  "key27": "3cpKgAev5CVXpJysp2httcN8zC1Fwoo4S1mhpdB7jSjcDMVYHMDVWyGL31F59iuuPJiXw9K23pqUHczmkYGH3RWn",
  "key28": "2nW8Ws6Kr4r5neHCrGoVNVtKp7shdmff3TKY4gH6XfwN2sxfr2YVBpywj44FRMdHGJgQCrBYxUnLVQtMkaeaWEni",
  "key29": "4pdizoFSCQ7MWs7oE83amrX3gKNb5WQpYXkH4WexmoAEy2WpMpLa8cXFYsafjLw7Rg3KaaJZzEE7NUafCgjMzjH1",
  "key30": "3Z3pHCkxHyrXWYNRV9RCzptHvQ2R9MYQLfmVKneqMPVBsSZszmGB3NBfg4Gx6rMbDsT5aJcioQqvRCzr7ruvxD6w",
  "key31": "2MP8fi8pY7Sf2SDemHd2uia8uHR3f48tAw1wivYaucGigtWo4xq8ihnVv4SoBYLjDAHB4PjYrDybVJsQnqpu3z96",
  "key32": "2VEwJbuDYH6tmB8CnvrnYw5tY4XGfywvpBTD7a2JhE967WpjLShGvNFT8dKM5FxFreQhYwBLLb5caDcKeA598MUJ",
  "key33": "3amT5GFwpDfBbuHpiX3CYo5sj9i82MVrKrvatmky3DK3dFk78eMAf6fCVPdcM59q253vk5AjGV4y5z8wz1JqX5Zt",
  "key34": "2ef6FQbS7QzQC8umFchzWwtSBkzd2WTzJzCQJTXAMetyutYT2QgF3ogfB6CoBeF8ejDVCR4UBKDNgpVYavRQA1XK",
  "key35": "4G9ap1t7B7hCtVnJG3ruHZX6wZ7LSohQPk5dQkzRU4j1tifpavEDJGVJfVVbyTdSwdWrGfd5zb5GQpZncjyeqc8d",
  "key36": "2JmPv449tF5nvyXJukNcRXAsZaZCGnMkBbtYMBMcBZiWYX81E3kVcumg9Y7weKmMqSAPFM2KZWFN1iyiNzLmEZrT",
  "key37": "4EPPSnXwLs9Ze7Q4gqJKDxBFLxzBgCbhhySJV3dKhbshY6gg5hRpgnSGHPKURLPJFQRug8b2DKfmgAznHMk73UJt",
  "key38": "3x1XZNJpFa9wsa6rCjR7raQsFDLCRzwd3zPbfHSJYypaEn5hKpHpfbWQ2wgmikbVFnTYWdtLHNZ9JQtLya14UN7U",
  "key39": "32sB5P46ARLMBDgYRzDiB3fnEA7Fh7s6GdjkZF9awSkqt6oLCTeiAkLXmXXm9mkNcNVWJTYrpEY1EquRazhMjmsy",
  "key40": "2jssY4KY1bdkzj6CAWK2ZjAWN38Wd6qUQ8G7QqtoKNepS572JiQvomaTxz9TF2k6qCY9BiBRHTt3Z8ofdifANVvF",
  "key41": "3ojaHdtxA9RprVVispbGGrWz3cGbTY3XL7krzNauF9D5BsGzbMQ1XQUrWZdQ2AbADoufZcUP8c43WLVDKZgDBzEy",
  "key42": "QKH1N2a6MuZqMZ6piSV9A35soKUepKVnhjnPeStxYEHZ6HapEAH9DDHhix75KTkF1QcNpGjimrsrPotWfP6qhHK"
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
