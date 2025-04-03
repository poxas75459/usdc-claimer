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
    "3rZcnYNypzmeHY2KetGQtBQE84dRPJXv38CMpWs1k6UEjtsgpaS1yvXGyYdktRyKGzF9Li1rwKcYdNNijQCJ49t1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X9WxYTomAicCJq6iUR9pcPYJmBwV1My7FunzjY1eBWAbppNXbFSXNZrKF9iRigRiofPejZqLeT2sNY956aVcNpm",
  "key1": "VZG7HXFuofWvc1uRGgau5dhx5Fez1atFa3RMPG6xnHTERoFwFTzKaTCZchZS5UAc38emQWFAg5314Gmtpnvv6dT",
  "key2": "5AzhJnFhMp8y8R5EMuK3okqpo4WEBgVKnWi9Umt67Ji3pyZUCKiKYdAsu73xrrpLtuBgxnmPHPGHeLGUR9BPBiZp",
  "key3": "S4pJgMdwLw5quKi2VgyA4UMpVPpX3WRwJhEP8dBja5UMfdYATfdiNZx3RhLmFJ5wAjsXmmPbtMnG8KE211TgMFz",
  "key4": "5tnCM6v3SRz8fyD5LLURNKnNTPgyXCn8wiUKWFk7L7hWCao5p55qwFQsJWL1QkvqQUB2FjXnKnZxKsRR3vXqfjcL",
  "key5": "47GtkfsEFeeaDLo95DEtT1wt5FctKtnWwKyejTLJq5eMvfjQnkbKmsfLBgEdbcJRHtEaQK5rYBQmF34L1qAba9rz",
  "key6": "4ZXQVsNHvGqxTMPJ3DcAEsEfvDDU9d3kGzZsqp4gvR3wZnMEKovzzK8JsTkK5LoG7fb3jemUdsW3M354P75969Ba",
  "key7": "3f6gWQr5WTXrM3emqHzWWSCUYNQjUJ9NPxYZM6puBQruuPj6rWMTx3DDfRAhnAc45cAJaqhnb3CDjAdk13ZVZT83",
  "key8": "YVPLa8xLY21BXhJo5JFY84iB3VZEYk887Sh7hrPP4MeL8V6DxgVP3jt8M7zsssAy8yzhpu6jwZaYwTjY6j3iEkN",
  "key9": "3EYjtHQ8GoVYAm8MZpDRmejQtdkeKQGZf7nEMnZgZ1PL6Q6QeVezrknNqSJSZAjU5syUEAGCFRAy3KfZ31YzmKya",
  "key10": "3D5woMXVbqiFDLCzm3FM8ReySNfr7qkQcLTtba13ppQ1dGzrYxuX4r4QBbWtbraJrFDp9n4uFAkg3zsTJJ1XeFHp",
  "key11": "JBGVPEps3w8VdNmGmpUhotFzfscYHTQzqDvxD9SVnSu2X9o7Sa3vncw1yG87RQDhffyKtkFrN4wZFLbr93tzvFe",
  "key12": "4r8yebjwQJT5kvYhQqfUWQsTy3g6xJoLcaqt5GhKu37C7RqTPY8BvMxUDwPYpdikXvHYYKtFQL3SHJz5kJ4tsk7m",
  "key13": "ymGGLAmB2Cu1tRiZaR6kTjSJtxtiJ82QDVNszSchsLGxApsG11q7ryGvLi88f6ZMAyxwgxd8MjXT88qBBv5Y6C1",
  "key14": "jTZMmknCcRkizLypY7m6HJqQeW641ZD918uFwatgbPbYkPdEWNLkji8WGxoNatSj7t4HTvxUen9wHLHabQwdAyH",
  "key15": "2j8FcVCzRov2r7EWKkcaLF8vBrykxzB8EQZNcoe4qdGusqRALxHajYE7FeVtVqpsDeco3BXPYpCzfqSWt9anp7eK",
  "key16": "53gJuxQL2MgV55XbTrUsDwzoBDwbjEefVwK19YjRNX94qveM6F51i7MZW6jRjpL99yR7tS6tGD9Z7S71h6oPg2Wh",
  "key17": "2JF6Ud1fdzP86KtWTSMkpqgZ6hR3A3EnCxBaytDM5PPXMxkmJFyFw9ZuGDnH6rVKp9pTn4SfNuLM1PEKQJA8rzUr",
  "key18": "4nAAjJfRcczf6Cm1LToh9ULKwRicrqvQctL4GWVUp8js98ZynHoXigjR2yfdzwjNZuyTtE96vdqiTrpUg5ddjPaW",
  "key19": "3dNdqSdLidco8fthoSU3tjskUV1oxsmzLBzFNyC1CHUpoEYx4jov3xxAsyHYrzAR9nKwJct2sZWuJTNdMCrUQ11p",
  "key20": "64HBDXxqzeC7hUcW5DVBUw9RmrfKCvjwTaNbqHc8r35M7FG7ypEpGHFh3qDBm2CdHzQpEcy9HgiL1vLFyZmghrPp",
  "key21": "3rDzjjiTet8SQuwVsiddLnYNRAEFa1RqvpR6AYJwpBJMFcvBpJBGFvrketHMipobmn1HEQLrVJy6e6Q3vh9HAbYt",
  "key22": "4eaEdJzdvzA8RhaHkdCE98BZYnf4W6R4d27mm6bQA2D81LUzN6UdFy1JuUAmKuXxar2VzGnCRgqtDTuqrAE8XnHA",
  "key23": "67VS76kbRaFceVw9H9gjrgr4Gz1tLFRhMCn5aHcrzoLEjLBp9puMgGuCGZJuD2AwndVTQPucopMaoKKye5f1Vkru",
  "key24": "Qsv5XNtTVXjujjQBjQ5rtQhra6FR7gd4abiRKeTPAPp5qP8QLZVzSmmVMorz29qsHUyuMG31nTxVweFLFQASUoa",
  "key25": "TbpWPNb6LDPrujAMtvSMisxMBsXVfn1gc7xYd6GjrLjNu6sSf6dQcVqMe1Noj81ytNgxuRRmJx7qDtJX4HKa9TU",
  "key26": "49b3jUCuKtP7Dprv4pRj2gyYo95r6G9SM6L5ixmX8jCHpq2sNA7vsFYAn7cjb2YqtM26MS5gvCQLxkwVwYFtAur3",
  "key27": "3fY5neoPFiejTz4SLezJYrvcgjyQcpkyLoKP9Q6QzczV9Hee5v1pJAkuA8TRg58u9VD1QDFrvnAW9pfYvfJioNM4",
  "key28": "2N8dYxGZdLMfyzXqdcrQyhoFZPuXT3rWiNhG8QLs4WshNQpHMZoYTTcXPoYMgVVxozskUkHkGhwXwQXGoRGejsYM",
  "key29": "2tEqJiJ5immcwnx5Mhg7ivzCo9BVG9PYwcLbCe4Df7DmrZ23m9vAcgBhVHHDEzk6AHyyew28qrAjdPhF9mA78mUz",
  "key30": "612D7BfDVwPj4Aa9zXhvY1j6jhYAsYmYJYg41pJrQW6NxgLbn85NyVNnUJt1XQDcLWDyBKjwwj13iJct7fRkEQWM",
  "key31": "65nSrHCWT9R2dB9he9Es7RqHxy2pwKJt6wgR3RhU1E4M3Y8gJDwfeaha5CUMue4nYsRWrLBHUUKEjp8yNMfJh7mG",
  "key32": "3RHpVNhq9LDYnPWSmRgyMkgiTXeKDwNiQ6gyF7mQ2on7yVVa8bb8oAkms8tp2ELPezALHxkpjVx66mef6mq3jMd9"
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
