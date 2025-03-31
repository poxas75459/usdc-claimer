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
    "Yi96WVJkrcvnGidNofzYbMXYkyAxE6t6EJBmxSZGKH5bLbvwXtNji9bp5uUV3RBbe4MT2kptBJwfjzb7DCpx3pR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CZ9mLewrZa2PnGt3an2ZMVDf2cz1wAhPsZcYMda4YeBsv2zSikeW44DtEm8SEin68mtPh4FJi2hgyi6SAPk9en",
  "key1": "4ffq6mRBjXX3aAK9BwrwL7ZpqkBZaN2qvbokPyBHYegeYcEcp2RkLWN4nYpGmCQLT77Uv6GBHk3XXqWGZanU8uy4",
  "key2": "5sVN5i4WdtgerDJixZCDeBkY3Rk9RnaPtGESVhdz5z5J6e7ALaBMroASE8A4RwUjAU3f9ecVM22pxzgU9xLqFR1N",
  "key3": "5h3yTXq3n2WMi7dGWfAnk2AARmAdChvykxytX2fr8p4fDRHQ5f9ktH1iFK9VdaZa1Z5sCmMdARvZ5aRHbHRfmBdd",
  "key4": "3YHhrg4z5Nap1UAoBnP4b96GgBxedB8VXiCAeM7S1i9sG3gZbmsHdYVspk3qAKRLDpd6F5KHJsekwBY68H81jAPi",
  "key5": "5jHNbWTp45Rcwxmtw17Lxr1qyJzLZGTGMr7Kpie6WufJViAGXiMnR272jSKA4Q6DnnS4iVZkRy8Jm17VS646SrGJ",
  "key6": "5F5djd4DXYuWFZGNSDSAPbHsRkn5WomF44YfreYADxuRjfuSkLCw588CWELRRioXuN3pSYTeBp3YQnBcEiPEQ4tV",
  "key7": "2Yaf5UfF8dAALrnd3xhq35y2QMFwNujimnU2wxxRnodfF2PXahmHTKajHVXmkxrJye9BBkNoPa8XiZTH8969TT9p",
  "key8": "2bwCkhchYt1uLSwBjRv3jhDtckR2ntSEBRrqp8u2HoDZXTgqtXPmw931g48p2MKKRWj4HYy1GAHkb2nyVBMZ6ZPd",
  "key9": "27X5d9AXUpApgD9QVJY9J147wwTUnbFEecqWVWR1YhVPgEtEMphoY2JSUZemfCQKqcDMTQKoxr3yqmTq8a894BDS",
  "key10": "4BmN83qkVfAUFZNKwM2LWhYWvBcnXCPrXAG9BLGLHct4Q8rqyYKR9hWzDDmen9HeJUB5oLcEV6jRbJmWKwqrrHbN",
  "key11": "3Bo8zBK8gF16oFgbDKcRQi2vULtXxmNGFEAF8HubaAxPM7mvxjXqHDuLAAo8mAyGDBgS2BbeweSgkedFyk7XiRxe",
  "key12": "5RcHyJqE6V5ZE2ky614NnuAAZL2Npfdj2qrMwBHFmEKH5nsnR7GVBTNYKbHoNuDyyXJ8CLFWwajW26BKeVcsxxSk",
  "key13": "4JdBQZL5oNjHZXKrATZgNEy6tjL7b9ZyDJAAjojHK39QJKkhgPWiNqkPJL11aV9KT7bB4kcL7chAnL8MPAARQLSz",
  "key14": "4eGA38jFHEKwCbqi5KLcZfC3qm3GrwdeGjB1iemEorKXfUmdkPyNY2dtgXNAsYUEcVKM91AVoPJq5Tfy5k5BaGYk",
  "key15": "5fTHzbxa7HcpKecPWJfwMDAgUdkFQH6acZwubeUQND1iNNx4Bo8wq7xVNFrK92jBJFa9exNVyorpSkaC4wjMp3CN",
  "key16": "658E2uvXc9eKoogUc5Q6yDEoFzifpR4YMokVsVroLJvM2u269n7Yyh9DsUwMzSUo9qsBb4pZ4YT886szJRHtUxbX",
  "key17": "5wZyRSgGSAUNi6EgvuuLa61XYykg8dCokR65FuW1SmVDGVaYBV2ULaNYZoC7uSPJQjELEgRT2cLrdtVG9MiS8mXG",
  "key18": "3abrUeiXqzdJHcxcsiJpCneJYkQuFVLxGwZPjYSvYYk7BpbfLVzHfp7RHNZtid4YZnd5C7bbzy8ccWALw2LA3eWM",
  "key19": "2q4WaMxRbNnjxrTuMZxRXpz7qi1V7XRabGAgPvoykUFeZteNuEXZF2pHzAQNj1Dm8wtmkuT2RpHc6HdXYDNESaxh",
  "key20": "2BiYqNCv5QFPzUJKshSYU111YZeo7Ved4p77htb5AVyoJtmSzppEeuM8cHEwsE4JUDpSgH1YfdBZm47emCTk4QDm",
  "key21": "3mex2yuBJuLW7Exv7HFKD2gCfzEKDjiWgzHdE6BXEuC81okLJCqW7Z5hUb1sC4DidJwxhhS9RY4RESyHL7mBaqSi",
  "key22": "47BCgg6JxwJqhSmnayDuozTjdz4T9hwTfyU5MqczvQVQaeZTJK4HAdTMYhmN2TCLdXa1XntUiTSteV5dco9dQSRv",
  "key23": "3sQZFYJkYvcHx84FPZr9Mvs3appRwy4b7M3xiMigHQibj14eJSCpEsk1TzA2WQRn4zetYEyMy8rZ4vjQ2JTdbhaB",
  "key24": "XiVVEmNaeRodmdjjgAsF3X9K8vYNz7LVhV5kxcnuRfVMcqjnVQX4fJjsoSKSdBMH4exVnXoKajTDo5E3G6orUJ8",
  "key25": "63UmHekZQbasCLqoMVYe52sAARqWQBnqmTdzqQs3hTbkiSCm8Ys84j6VFFeZXi9xW37Vc9sdEyaPSQUbnRN387Wi",
  "key26": "5Xezq7jA8d8grbVQLFJu8g4VPDyxV9gzSG7utBhaHHHs8eFfRrGcikZSXWgH42Yind2HsoguckcDeD9vbMB6eqV2",
  "key27": "577coGvLKUEkMS1QdvjK1ryQxNqFFEMoJbony7AxdYmXk5DZ3Bhv5XKk2jb2DcKmjNKLmy13MPTVvZr8osFqJg38",
  "key28": "4zFLPgFuRhTQqUhMPy943s8CuiW9pdfuoy2qsucFsNdo8N72DKPARwNa1EzkNnqPJ3WDwzF5rE48TreHZAifvsaF",
  "key29": "2VLEuuNf9wmMZJL3RNGbWRZKtxWMNPTuxgY527GgaJvC2XsjsbZtq1NR9agqkbZHSNjy7eUU73AZbvew8LTpq3by",
  "key30": "4F99SHavpKKBhgP3niuT7HRrQJcnr5qQeToBwj1FFaXsgYEtPR2Qb6cRwiygrsMrScBR3Ve9xctcGrBZNNv9vPKq",
  "key31": "64tw3G9TjCSVJVLEgQAQwBVSnbnDSQjBR7ftHJFj1SHUiyKBmcy7z9sn7iMFcn6qh43mUpi2UV7tXTQESFSiKbnX"
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
