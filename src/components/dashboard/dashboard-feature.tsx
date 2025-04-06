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
    "bB2o49LvHdScDAzT6eQ86M61iuroBW4nc7vGJ9zYVSpFBasPHSLkZA2krEHK88F7uqUTAta23Y5jAtyNgT3oEWw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b2xqY6DmKkBAMmxkYrnbWHuynEJ5ubHmLNnsSJSBPkA3Vuz2Lo7p5i1qZTaYgCpdPNHnnFfmWsmkrLtBVZbdmhQ",
  "key1": "5t4meB8WBaq5xRJmb22xdnFLXBgUwgTDF4XPL5p3jr3nWjpvC4x3aTxwQLHSBXdtfFZUotk1Rn7A56soLGdV9Q4a",
  "key2": "4Lqr5RrikQJEJhccCQD1DR92E3BhUEYgextc3qhEmeh7WLtRrUssXBcmcvDFAzRx3HoMfnGrnQNKgTr9J7fhpvaT",
  "key3": "4grNvtf1FsTkwNpDLyxSKtCKXB54jctYGBBQ7kRRGHhQj6bjCdiUjBHoytk7JxdQzF8p5jAagBu8AJS9nNG9ntN2",
  "key4": "m6oth68fCdowxgPSKNmSrsGyHLFNHxbokDfKebP8cSPLVYqjcMbAkADHCsY8pfRqaBFYNVLU8h4qt26exCMcsro",
  "key5": "58hn97CBRPc4KLqMxv1mfXa2oCM3DNEHjSEeoKP1cPNr3nmYXiho9WFgiHmbWLYBeUZPmL5nqNB4nkP1frVhRePE",
  "key6": "3DrwZ2kRfrgo5576hWxCLQSYEm7q1wBryF5ah7LEDT9VDVBXN6GwZ3atSd12ZSXwFFcoXbzfVRUwtxo31NUkowZF",
  "key7": "477787ANjeSfByHTzBEgfYQsikYNY99t58EVf8ViV3aQkKJvyhEgNjmd3Wdx4JmdZ7kijFvnvuU3q8NVaTVPW8e1",
  "key8": "8ViGLXicebkzLKY1ijxN3ToUnuiFUn9X6W1KfwCxPXopxmDBsyrrnAKBa8TfKrSsUNdozzAPrYFMZG12X9g6uH2",
  "key9": "5ff9r2id233xRkPFaxTvunXSEc9QrvNmk2pxo8uvVcsrfaQc2r7kHptHonYmG4qXw8maCyag4KTD7VdJFPaU4c7A",
  "key10": "3F461rA8XXXbspifKrQ99PcnkJEdehaWbevnMK4bSsQkyHsgQoVeP5V83hQcCk6pPELwr59Y1vhjkxFvudragQUx",
  "key11": "3KYn7RVoDYs5uA9dwsKhAaRjRP6bE598MBGeh9ZdRCRifDaHiBsK7TN9Hnbuma2LnNe8ZnHL2UQeFwHPk4S8dRGp",
  "key12": "2fYTw6sCzzcn2yMTbMdoZ1xpp9rUYYjStFdXLsbL23P3npZHEBu5GgRmuZ5R6H63k5u4MsQ2cgFHEf4HkdwEcbGq",
  "key13": "4zosqKjhPjTWYNNnyfCKXhXvyTSLpAAu5gmPEkzCrbNpDQFybBoCiy6aZeWvZHNPHpkds7ZQACgPfqY4m4XUM8K3",
  "key14": "4QRHWwzBjjaXJfTvnG4JQj3y4WmycETS1mRTN4pZojWtZqLpfmfbU6RtvRvDs5DmAjK8cpHGXyWJHxBm6AH9naBV",
  "key15": "4nAGr6itAX5tyMhpsGK2XL7DzNaGHYHRUpQiZ7vxE71v5Rp3gAF1RnNGVPaJhg8kSYdCNyAMu3zn5g6LCXHM9shB",
  "key16": "c7jGDGuQpRyUHjDFFmhKREcJ6vJ9mLBbQ3bUFjosgaJ1YcnXGjJ3UjAWeL9LECjty2XtGDAJucPBAqAZV6Krjvt",
  "key17": "3KY7tKDC7oAfQhh7bpSkqh1nNfcG8J7o838WwJZ1XGs9yBfLdSFFsAbxDvfV3ZhAcn4hgfxdttFnSLDLE2tR2DSa",
  "key18": "3EPCpwAYgb9Jgn5M7Ss9xmzKu8fhqr6Q6JCNab1v6aY5N6tXd6yLpwBqiQmzJ3hyZmELAxQ9MxEh5fnXTixkaqpy",
  "key19": "2dgy8VfJYFxq3ScQuLiEcwVdXppRJ7pS1rzbTf8HnUWWBPs1YwGPHiceVghm3huM6TByxqngicbfWGKm5M6L1D83",
  "key20": "asVATPDBA4mbAxfLCMc9iceE4M9WHLm6UKMADs9fTKp6MvjfheHrDUCLq1kH56CoekFsXh7uEQf49ckkPSMZMFa",
  "key21": "cwCZ8niSWr4sr5FmiokNG7ETjJBhyBics2gC7oGZMje1vRqAsTbQCiTTzfdvokSrpAeQvEZn88VQbuJYb5nFrFV",
  "key22": "nr4EYTXtyUCUxtkzyjasK2HuWpzbXLd4abZagsLqbYPWzFygEWvDyWkH9rHSXR49kfgj33NtzjwXjQw3tk4PdPf",
  "key23": "5HPTJZusqcD55E4RAfeGUpDkRnKqDMFytdyzxNz8eCAfb9fhqSFJcgmUMbcjHBHGVwUhmzs11vakuue3UwmqpqJX",
  "key24": "3GiTYS2reK7s8JRxdfwx9R2yhPRitb4PHLuWuVj1RhejRQare1cPi6nKdaW9rJ1PRbGhWrk3H5XyMemzLjz12rH6",
  "key25": "5N76WezL291Qcs2GzKWUJRWvkshFYeC8KyVZCLnnDZJheWb51XFpMSxUurM6TJg4NTUy8UqGytSd9AkFpXGGag5G",
  "key26": "4jek7Uw7J7HZ3aGLiUbmMug9Syr5NvFFRQQFHUBatAESPCbRikPuEfvycBGYQcz7WWpD6urLU5BhEcKSuwq2YCyP",
  "key27": "5ZUEZ22F1G9tDXtEafT7EXtAbToYq4KiY5NHFk8RiNNXdo2uJdP22PZtA7ZCtEqADEr8k8BB8EGTpM8dF6SfnPUU",
  "key28": "5HHfKXCd8UwMzT8bm9pY856b8QwGoQBho5yThQiKcZ8EfEsWzmGMykDWvWtHk9Jc2WBR5UdqnfYPyi3mBPQ6KVhK"
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
