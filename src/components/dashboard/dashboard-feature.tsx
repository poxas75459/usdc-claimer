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
    "3yUfJpbpLXFtm214pdu7cUNUa6nyMxPUpakeA6aNemgozBLuX4oHTCQLFWkjU2bbxF6SxGGdS4CgMQ2HEq2ZgHHu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sgT5xCRq1b8naoUpZ5kN4YsnmN2kEMzkUAYYVkwx5n6wQRsxhw6UNCwB8YkG3NDccXwUcHYynCU13pczKosri2h",
  "key1": "5WAqpsQnDCyE9a4qXBAgLWUs8rWi2vABMwSi1f65zKbcG3HuynGP16TK2idTXdgshsZFD67b9bA5Sy4mifLhz6Yq",
  "key2": "fGJk9KQtjoLkhh9UV3d6octWuqYPgdCT9nKXVrsKEmUyyXLv68d4gDh33SAoEAvZxnQR1PWubAXVEHmeMtYdQVe",
  "key3": "5pwyGhTHPrvHti52ct9PhmZNdYCTPrnkQWHParSWe99t2rfKTkL3E3aCVtCRHpAVf6eD89uENwmcaxoCgv5xs7gi",
  "key4": "24hc69db52FYjkBYLW8XbwQ7ZfCHU1T4vZmG6gB5V2bgCNCZGihYsDrTbQccPicmKjDCzfyfpAWJSEgv7uWoHum9",
  "key5": "5LvSv245ny1uBxD4i9fEM9A8anpEJNti1NhDbVpGje2fRJqWyGii1TENAx786DUpKdQkDT9tzKqWXbGXC8YWfQSG",
  "key6": "5nuoU8e8mtHkWeHHzLRLFDH7xLrxfeDkYjM9qeiedyQejZt4mzgbrRFczbXo4ZsbDSBooEKoCgd9vDpY3mZG6tPS",
  "key7": "5LC1V7KPiL5YXgrD4y4pveBzKX1KkVhhDJTvkKhV3Q7nM8Q9Sig3QdPXz2BCCCsoqi6wPX2zjwtcK4sM63t6ivRa",
  "key8": "5oJHNpu24y46R3JdxfH8vibnXp3fUGESrgUVmPqLAcCqk1hwL8Ya6hojAzQuXM98uY5uczpkQfLZwSjGtFLocX4K",
  "key9": "KzRv2j4PcA5ovYeUuNhrSoRXijrNieeja4U23kWUjuBe9d3bJCghF16yGM4ckKVfCBDLRPu6kqR4SYd4eRiCdZt",
  "key10": "4kyWBLvtkHsR46EwcmR96m53mDuusVWdYGq9m6Mj1RaUGXqzD1GNpWPJWCMX6yo98UVjAsLunRKWg1df66TMkwtj",
  "key11": "5exPdXMXxs3KVskcD6XkCgqjCqxzCcGDXgEdojLaw1NiqU1gADzzWpcc8icKXHwS2fPU5QUYjLRaXBWwU9BZcUib",
  "key12": "abapP9gjPQzaXbJBf698cejL8CtFqLFkfsminsJwVZjFRddPqRQTxBrZMbrDeAvdT2A7GF9Es5Vdn8Y6nnKQbyj",
  "key13": "5GewT8p5TYa6FTBibuY2BtFYo3jxo2Vh1Prmum4cHtGncD12BSREvCHWikbiXuGnTxAuKQfGsdzTBpzxw8EXT8oa",
  "key14": "2wNtJeScuPxpnRv5GbnUBHBZJ3T3MCPwRAydZDFgPuUw7vDDnBF8zos4btbnHDW7xKSGcaTzrUhyQdaYaaW9DWuP",
  "key15": "5n88kNCLhvqCA2Bk6B7wiWJmGTC1J4KSBZsRarexprScV5KAr6d4XiBt1oqpnDZzZ1YiWmyqUwC7Bv6j1Bc6h5oB",
  "key16": "2TvAqjCCDNSKdyJTxLYZoaGaMrVKdGgMiZszSDCqNCd1foMV8Roxtg6Bc9e2MLTVAurcWBaomZkqNa4MVVgrnfXs",
  "key17": "MvUQ62igu74XHKkYGxuy7XwPwcuCmRz59iYp6QbCGDnHNNj98bYEYR9Xk3WPhn9Hh1cnwjTqua1LYAUJyJ8u1g8",
  "key18": "5VkdpWrTti4ogmXN8Yj4QE3iW8Pa9oWyNKdQ4Mb2NgJXLZGhHoSM7peNXLGizbrLeKXtF1Gh6rV2AUQJk9LFBX18",
  "key19": "3cyxYxqJBRLCjL94RoYiAob39S2xhdFKuu6pitn6DS94RqbbAezuccyc4AZbyv7PYAnEUtuz5TaXLKzyw1f9NHso",
  "key20": "5sWar3Wh3drGQ8EtCMqXPZ6WzvSgjG4EJhqxzkFHYibvUC5emhFHmB1kZRnz1SDKJNLhvFEr5DkphBfPHx2YRdD2",
  "key21": "ZTuxubdCX9gxtD6D8iM3Rx8w4kDkDkUkeMHc7rVKAaDEUSqroEYQeaps9eUbSapXp3RwrfpubyopXB874d6NfeF",
  "key22": "2wXWTswAaNcArqCWjkWq7D3XoFv8XQpYusRJRSaod7ydRuPfpeTLbzofhmaAfCvUE65iqy5EkdK7yGUp3MRf6yrE",
  "key23": "2k3aQuh7oaoXc6MirHEVZSNBgn65xDpmcdo5h4az8p3P8Stg6znvMLUVRG6CVQ2Qdd6CD4itAP4HAYNXxG9FviTU",
  "key24": "3uDEZjStYN89RKivcF8K1XyqxXTYSQTVAjFv2YSPjzDMN1r43mNzVpFJuZWUR4fU1raqq5TwfgFApPbwhgD7JAC8",
  "key25": "5hXUXttHARYFZMJ9JvBCU2bD2TbZ6bhyomeucqqWFjaEXjoPLUYck5G8Si1TaVA5yWkdqYNBjw83kVANc9PzGLVk",
  "key26": "3NTfQHoTfJ4LpuPJpvkAMtBvf64zjjT11sLMEk4rwzMwHxXEjHmH7Rdp1oCLoFKhF3ZWuQEY9m8Zz748B4CKky7c",
  "key27": "t7K6Y7sWqmD5zdoHK3jDS5qNVCGuw7tWTFmgvJaW7BsJCa9kXXBwA5JaxMXG7T9deWXMLNqwTtWnkFA8twPLdg2",
  "key28": "2j5tydykQ1P53MF3LVR3azqrmfTnV8MLkDhPoR5wwPukz24NW5UtKX6zsgmPFvScTLcB8kw8oEuQrT3Rjn3akspr",
  "key29": "2zWWgh5NDs5W5F4b7jEjSYNbA4Pz15gGxpxrTy27ErC7Prn5SjanEgDfz4FcS5pUCZ9CBtiyMZU3b2TQPpJgoCDC",
  "key30": "2ak7ZC4wCGgc1c6Ke71cs8dDk9axgNByioGjHwhwmbKmE7gskxFDmHHYFu8JgUwfrWi6kpUrUoqNHoV6RJJmFR1t",
  "key31": "4yzqZxwqz9hmdvHwUP5LTHTVMFoynHegLGSpe53D2UKU2aJvGxmU11RnoEEc7T4WmnKKsqR2qs2PPiWWsf6XjGsj",
  "key32": "2LYfCQeRqMndnozqFQM8VWQsqDAwoE23nA8c6ZwPZSdWso2XEXhFwzrf3ruHpcYtcqut9NDhjA4GM3c2VcMLSsUL",
  "key33": "23cM3JqprK4JdFVkKmgmNYUgfwkEKSjTxhmFTJ4CRD9Cj8mHAdexSQzsEJRTy77jPdjJGrgkHwMdJQgvy9DKVUfB",
  "key34": "2N5v6paREzBHr5DS6hDRzRzEGphs4jCsqoYE7zkMF6jWKXHhQBMAURnN1xDSLQndpNhpsopda6RgxtTfG8wF7YWi",
  "key35": "3XfArqV9QpPr3nddGeGZn1T5pNpcidBApZq1xfJje2kUfXr9ToHkBDChpM1dQWUxcJJrNJXps2yWhHABnSX2STJh",
  "key36": "4KrmQ4qqgEj5mNo5cvVTwxkHqjEVuHjEVKFnKMUwr7phctKiBcru4LjwUyJwjc8ynyvTYHXp9VXjQHZmvnSR3KHv",
  "key37": "3Q3bFTgEf3XvpgNaQozhphKibruBQPpS8xvQ9CijbhSjzaLedBo3i5KUdsycVoEAZJa8HnF7eMXbkfPX76pVfuWc",
  "key38": "4HCzYXUD4NAeEnKv3Kez1X9FL81RLYHJ9AbKDM4Asnfio1FJENt1n8uoTjtS5AJ2zw2WisaVLd5rYHuAZPgjuegy",
  "key39": "5TnzxcXmgy9RT31Jpj4FeLNXArMgAqA4CvA5uEr3dWvxm5TEWSCkNVNz48pnittGQxuneCg54xtUNeatDKWDaDBa",
  "key40": "52WWuQ3A7Y6ZU2uxePeph5KsJsJnZX9voSWaLcrDRtpYQ8soESvWb5WSGbJB5ptek48cMfKrwAQJdY4EaBK51NS7",
  "key41": "3dqYyHLk9iEWcxSyoEKBe7R5Gf1j3eRYakKHNomuYBErhXhNEDzRqsFUvFPkcNT2tkRbfTzP6v6wSqNvUQ1c4hoy",
  "key42": "5ys1rwDSG1PoRTZJqVsyuHqLTMTMTZhSjYdmwyZ6eaFTZfwhqiGPPTSFpMEkKup6WWRj9MK96Mwx3TGZNFs8fZsi",
  "key43": "EsCnC7sDyYZjGzDN1r7MdGfcuD6yyaBWTXfAFYuvZWyHFL2TzaMs3KhEEyFAAfjeVG7u4ngucg1U2KC9X8WbMHD",
  "key44": "3sx7DLE7ttSc8oq7JbTHMFYjd6GgAMsj8vVabN84Bdwu2CCE4x6buHwVpMyfT2dXqN2RSWhA9UKxo6qAjqHDP8iS",
  "key45": "47v2sYuMk2eUmhyMeQWJt7cHbPXoNoEzZpVYukEmU1zRKWEzRGo5MwVSLSkpXu4ygMFgx6st5ZaH1G9qNdxapEJR",
  "key46": "e4iauADXfDVHACyWvkvVq5CWbubUV29zCNuT691KGEt8vX5MsjqmH37muJM2JrYQnxbuB5HbM3LoS5WiBPZMGze",
  "key47": "64LXE21S9ovha9Qw8RCfqrtTJB14aphNkJxUtPSVNJ8FZiYpjAGdQHiZB7NFBTgDnzi6TaZF86oY4xdFsFraN17g",
  "key48": "gA55F2xrr1XgtSHnFeGKKgSa9BMAtjYg1m8UYkyvxqSbUuzU4bTDouh32Xf4EMm2KxY6etwXBk796qmFd5Yzm2p",
  "key49": "3nhLNTmSupBDksmwqA1ZFQQfBxUy6nj4GG3dBrGphjoaTzBFJw2GYJWTz3MUmQNGk4EoaJeawzbmidDM1TQLgywz"
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
