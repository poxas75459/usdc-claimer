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
    "3emjWFk7mMBoncT8DNP4J3FfhpQFuXb6Gf9yptohbo5E8PCtEn9we7Y1ycyE7DMHtnqEp1BuK2yFGZSVSXWBB4C4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iu76EziE6ZaZHUuVbuWQabduif9HPxeRXQ9f7xFg4bWjnqCYSXGXWbwLp2RPStdHGhtuvhJxvi92EyJhzy7ekTY",
  "key1": "fqrw7h1yhFf2KkC1ExiRCmExB5fDEd9SJzdjAYBm4DHkBccYAmXS3V5TfaHz5g6XXXaVPEbThBD6ttujJH1zdXB",
  "key2": "3gHYAfqy2yxNrZhsCdMyp6Phm3rBYqyu6KXVMyLWBGe9TpJKMfcxyuziAjjWMJh4hH4PGChoG6tzQhd6SvZPB8Vb",
  "key3": "4EWEvAbG7RNzgJzGD3UdiF2ntXULcbagjygFRE38rd8mfJ5L32yUucFh1jQQ4naL5i4o4ctE1H6di6mAdqm2VKjF",
  "key4": "Wkgg7jfTEPzpkEPMLrdUzYbj7rrcsNbpWsQu2XaQgdKo5aJBeP2PKseFfiDVZWxE4HNgLbzDQnQKVA928V1Q5NZ",
  "key5": "66c17TAY1UTAiQNuGHVmrjKNn6VLRyxiZasu3YkQvFnaUq5KyfnfLtgP2sL15jTYxw5VCE24Y1YogtJ6zzwhyyLh",
  "key6": "5NPrXujNuoNKeTuB14kjMunhKVMRjqcuUxgsAxPdCmHQCzaDEC3cy39L7SEeg8GL9LtYyVGaFapeVrkPHfW27gcZ",
  "key7": "4vJ2Rz8MfEGfAkxtHnSRuqaXu34Sg6DMrNyvTU4EDEQQVJoJ2MJdyUBHKJkgQ7J39hZyndA3QNK8QH1TKNLe4L1w",
  "key8": "2UPt7N4acCfcSL5yawEKFrc9BQTWnpMcyRQSRFU2sBWGGEkM83qBsiB8tsVwcwiTn2M1H6dKV5ga5AsQKxR4zX6q",
  "key9": "2y15V6UdjfC1LNsf7eiDFB2khDsCMQqoatgpJMpziienkuCAD7Wi8Q1TozJtdSbNcoNjbCwzgnb2k39g4fygKWzK",
  "key10": "4zR9xzZmo6st5pCGf2cCMh5Bno54DJC9fCXqXC1e2bToB8bxQVVLL14YMSBzaS8GXKLgGiYG6ZZcLBP2JWVHtpM6",
  "key11": "2iDNK4Lh7NVTgH3mYZkrzcHq25Rt5WAng8jtTNNyFPrvshu93QBZwcWc6CeMWc138HCibCrbuTh9KNzVW5pfAR3t",
  "key12": "2btDXcrMu5unfNzD5zZdokmXNDSV9esQHgmS52pbgbmnX48AY5E3PNFHJQyHk8ghdkkJnhUxV6FPcBofoK9CPtsU",
  "key13": "33x9ZZuwgkjuNAobaJe5vRHXSGRaFEGBfqCPFGXnAmSa48Ck9dN3DHfTcRaNHM1NpL8FRAaEwYGkEKh92hm7o8aF",
  "key14": "5mZpo13f81Xtw4VfjchfSp8ZLNbe52b2NvQfeRM7UC2Ap5Dtt2jP4dCRRUWpMC2UYK1bEXPU3gnmVrVq8ggMzbpC",
  "key15": "28mPZmkKhF3g2QucoNFvP3r8YvZhBksRXzLmgiUk7Li5RyozGWwQmSKpy4XmHadQcAEuhe5pckkGuJvVsw4xmrEv",
  "key16": "28v9BJJSNCmGYgAt9utVyD5x5vKDHFTsFU8jb9B4uW9nfFhmn5CZUpuCqtDdYpsBUdMgv22uvyQV9C889CXC2UC6",
  "key17": "hHtKnz7xonitesumiB8SYp2YSTYqsEjkN2GrLPXrT4vJaDXjH4AHJpgUAguTRsjbvw12NpCVszfBheFSVFkR7ec",
  "key18": "kjKvjFUaQHAQfeJkJJDyubBFPVbc8iF2HkfuybbkQMb6Vqw2VfpL6amNDtqqCeEFaKqiFd3RZPwM2UJsQnGKnm3",
  "key19": "2ECFXmUwErHY45sKU1ab89FJX86krMeeWBKrEEx4GeZFwae1CNSceF73BStMKeTz7mVDWFavRVn7Ri9rBjkrvvkd",
  "key20": "2TQRHnsrajN3EuLhXV2B4mrBRCME2VfkXVG7gQAKKyFK2FbbvY1kD5AfsUYLkxBtJEPrtsWWrHELkxGVpeCZpWGe",
  "key21": "3z5YWkf224nv5ZrLTDX7vRunQ6MZzK3ve68vBgmcP3fLh8n1FNQwb6vmdAuJHwY6p747j8d73kHt7qQxATS47tUd",
  "key22": "2RfNgsLPmcBdAJmPo73tZn3mr47Dy2kof2JLA3vrUfS2TY6ZLvyb57GRcz8tKVyYvpBzxx5eYGvKon2b2nHF9RLw",
  "key23": "5dFJdWY68YPDoHqsq8XzJWYgrYCEKj2K4fAFnNmdYcwRG4RRZph5NouZNncnyvpKVRibX9kMj9PcnMiVK6CSkrLY",
  "key24": "51yXFoNGr18BpmuCkhKTmbYjsthpXvzLjvVezYkwbNgm8G7f3LR2iouwSLzmWzLocXkpwomqvpMv8PuzZ2FSWjqR",
  "key25": "4JZWypjbfWDtywXHcfUnKd6KHLJeBZNDFD23JZdY4xGfLQzEkj4T8QrL3ewoxqREKnNvtWNvkm8JDckjG6TFrmNP",
  "key26": "2f4Gf4aqMfMwXyq1pD5xjvxgQzywd9igvcwEPPtW38sSkVZmBpMqiGydFjjm7JMmu4LiYshKUyEGcKH7jnQvwUTZ",
  "key27": "44MKK4Wuxg1vtD2ygeCqBrnPPKzFFqRec9PZ4EaAHSWfZKF5zXQ5JQoFi7gzN7EqvReT4qQ9DuTiLbYPaMSPCoT4",
  "key28": "42NQhw3nGhPyc3ZPCyyeF8a2Q6A8QFRFbNNm7NEBDiTYCEbaQraXo4LziVVNXABxBFNrbnMPgSAiukSJbQRzHM1k",
  "key29": "4o27RVoc4eRZQEouPsdpfnNkuB1petHtLRMCwop2L1yyCrQdMNss8C6Y1Y2u5QarFQJi1HhqmvAbFqTS4HE5e5Fc",
  "key30": "5EewoLaSnXG6FfxUzhVPwfWjjUs8JnbgEDF3XNLa5wzNLEgxGvdo5az7UmsmYXCw8htMRNyNm664BUxmR4HJnCxe"
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
