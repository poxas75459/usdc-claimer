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
    "3Sd7QcKkn8zEhL4wJ1FAxt1qhUuZc68ZMBa23E24Kfo87EcXmXRwvhF6ve9qiGrZCDLN3Ekt3x6ZhQxa4GBPPNXx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qocF6ZRj7sXYkQQDbnmowpKq8siawtvtzSNvC6RdW6YRCmZym3XFxCWrLvkBSaa4gMnqtcbJZeuYmQNKSDGWKXV",
  "key1": "3Mt2bsmYVLCbbUNy5qdLXQPkDf5Dn88ijMNvFV8zcuuXy5XPVdw6uvsthJ8MxQb2SmvRa8k1qN7F4DddnWBxvSex",
  "key2": "26rRYe1DzcKd1Y1HAiRFWyCVrqyksS8xkqAknETgWRNJmmidZSJrwXx9durJiJCcouNtPD495A36qfoRmytchtdX",
  "key3": "rFn9FyDVmCGagf1qdg4n35QsrkVkyts1gnWFEthkcrEYdcb7uB68b39SH7y3N5MbbGQrD7HgwLiySb82PWUeGwj",
  "key4": "3s6pTEkpoCDziHviwmCzv79yPToPQjzPw82jd9ayqvmcjoRAxicy9MfqfGFqBZcHKbd7s6z9ucmVUJgsJrGtVz3B",
  "key5": "42kuz2RAGpKg95AT7g3A8NiPtELeYCtKqM6h7mkrKPh3DkYVp9qPab6uxZSEfhouNt2V9YLZVQpJERd6xeDeiFc9",
  "key6": "2iriNZe6vHQa1DwEikNnmGyfoiVR5zLZS3ZJ8JUibDjKrJZfTz8DogBLPNguMv3psL5JgpYdeKqid6JwxdJGT5mo",
  "key7": "5TuBeZojmCcoTgVcUp4qv6jwtdjotnXGnFbGWu9nyMjBTKuA1vWH8PAs9G7r6eL5kJFtsfgqDFyLY2bpagPDVWJX",
  "key8": "5VSRSSVtuAfFpUWHXiRDDsMGJQBqhgqPAzd3143abERHHyFMqL43HBpQJWrbbKidRm8FHga3kDbcR538Vndg6Kt5",
  "key9": "46LWnAvAzhrmn8wtSiFRGgE9ZEstw5TJLkj5kbWgwP3yerb8UQcyeuNCyXS8JoKo8gCVNyx6K91DxKgnjvLrrda3",
  "key10": "2MrB4H2bL35pNZrg15e6AhcToCUTzY5883q7AbQW4y5FHVsiTE785iBuyWDRJtPLCneywMKZfyZPF8U8LKzazJ3C",
  "key11": "4qHNagxj1KKn12MdRCRBws3Aooij6WgkULnUm3fh3FZ39RdiacGHibbJ3dvqQE24aMkXAxCcFxmHW1Ex85BoEhrp",
  "key12": "4YWNpyXxtmaUPNX6pqJWtwWMHPG1fnCSoxgANAqGGDTbFrYKWP3o4isUtAEQeX9nfwCL6TEWTJzKfaJtvEik6KAc",
  "key13": "b6E6qUFyA53oaG8V97YtBb1CPsfHHNRTSBxq9ekqsfjm5oh5q4fB8768X6xZHMp1RrJvhfDFkTdLMkwok28cYvm",
  "key14": "5Qst6HsdT6RMKosj4yDRPJ9ZYwVNVXJZ6bp9YjWqeA9mmGVFUDRoGkviPtsRKWxMye5TTp4Q4sPZn8dhzLgfEv53",
  "key15": "Q11efH6rM4eMKZsp3b8R9daG5XmUAHzMGduzRS2d1MwtkPRVizPgT7zx72KyZyFgQD7kS8xbvBUuXNMvFyVoWZK",
  "key16": "3qADgxHxnNJDgLqNTscch9BthZtSVqCr7RKhRKofC4qCYcKD6zxwmLuQroMUixtW99VP2oHN816JX3iiLFDoKqFq",
  "key17": "f2uE1VTi5BW95fngKNtvEkAK8tZqoLST2ugwiY8mwFJgjKYe5L2T2gFh48ev1TEeSz7Dt7vB39Wt3CLdMk85zkm",
  "key18": "3rpLHB6XW68xKtncjsuLBHVcA7VatREP9j71URLcAFScsKryAnYwvNBu7dExneURXJfyWaKGG7gxdrVppoHFhEwK",
  "key19": "3qJQjxza8E2RupyDEkr62Q8QeupBdiwsvQRvTY8HTj4r1DyDbqfNkrZdaR3eGu8iW4WzbfrktNNFQadCyRfGdSNg",
  "key20": "5KAanFqbKrGHu5jeKKd9bV3G6iYJoRzUfcXiAckfiW8PXMTHvbqgjEP7yWhfFojnW6Xp56UsmZx5YCKUwGV1vMNf",
  "key21": "4sCxsrh76ZsVXjqLCb4BSVBdhQCzQyKjCSo65C88A7QXXc7WAY8q2J8TLK17p8zHYw4oxPyMrwv2f9t1nPk39si7",
  "key22": "4DcEDBcVp7reqLQe1RU4zanYxNdawfTYFSBtWq9yYRXYCXiN12htA1SPqp9Qpksr3yuQbmDRnKgwwGqK1QwX1uRR",
  "key23": "4tJPSUDqnYmjhk4tCizRnv4QaxY9w6dcMddEDPPwqzeSU1ePzBkmmmW28mL539ThCHTSnVkxSpJw8BD4zg2qmy5o",
  "key24": "5Wzn3BgGvyswHz4e2Qd8FWduGZfPmUKnchM34kHS2mVe4tCjJHqv922DvYdhQ7YnFFHWVQ5oBdEdM1WbMdDG7yvZ",
  "key25": "2vtKRT6mR8cMQESTQjhatWPDgNk9PSxi4FmeC67tGyzbHxe2wm9FgQ8jyJ638u3qXavqwsFsUJars5ibwwrVbRQX",
  "key26": "41raL3Lqpn1wD9pLwhhrazLs7tqFEkCm1PJ6FgSgUyswtox5EYW7vgLGyqTwwqFayi894NMHm6vd1fd7iyH5jpnz",
  "key27": "5AVqpVJS4g7rEgSfPVz8uNDQEinLP3rNpsTmN3nT97rDwB3PmMnoXEoMAxYACHgK5qxazKZzYQ6RddS3vTnswfmi",
  "key28": "4CSxuDVfVCY5u2iWreB4feQtjSDogdj9C8hYuqizNafzhx53sC5szRNUGZ2jzJz1eLZ26ktjsXNz6wBQCLqC4HoU",
  "key29": "4pYNYfQaaFMTy91Y3Ccv3rQ7q4DbXFitwf7Pvje6ULKpHJmf5Zmw2x1HEcZaxqJ22Ry6uCpewxXEYYqSRhmNFJLV",
  "key30": "5HtjCdzpzJygv1iUE5rabKHvZyKbRmphRyntTT7uHaGoaJTUh2XTXzmEwng7bc64JdHuHEUJcgDX5tQXNw3ZSDoo",
  "key31": "3pibfhyr4wj5h1xCciFbeAgzKJBmgjr1RtAPETEqBtMckwXLprrXK6zKfRvtX7b3Gbdc4osjMGg1kRiDWGvf9ief",
  "key32": "2hr7JiegsBzhu1UGpTYVcwHwHbMdr48FMnEsGR29kUtmL1rBAgMkfmjgUgVcoE69g51AKqERPcnkAFwjLvWiEZMB",
  "key33": "7iHsMvc25CaJaX5obWWqnyFugYeYaGC997neZtsT7wzhC6NNrdwFqed1CVZ4BktuvkRDZF8TjWgbPp1rnNvLshZ",
  "key34": "3hWanFBJNixpLri6jXyd3ukWMoNiiNpndgSFvJqcCJVN6jQ8mUJAtdCHJ4bCjMc9s9LTGzqmKbA2KcqjTL2tJAFp"
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
