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
    "5wEQYwAMndwnYBKaV3bdwCV8NJPx37ALdX9KVbPKFYXuYfwVh7R1VBc4yXYEMnEBdTHaURRtwFJUTCPYk4PCBmtH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WDmrBtYWdSE4RenJqMtYiGR51dxthZTsa2ups97YfxaGfztGTTbnXpHeYnG6ipanmJfMN1UQfSmfKkPAwaH6xqe",
  "key1": "2xcFLxK6ENwhJYb9vgg9EDx8BmcfbT5shMpXZRMsNUYXPbrcH75RsrwFPVNKtTn5VFV13jjxgEmFfMwqNE7vPCFB",
  "key2": "3sgpqnut9dMU9mHpNfmCsqghtQRBT6VQvDGThYxTbVHPCcZuWo1hEiAoAAc5N8tgGJxZ4vxCcZqUjbgz1pnzK4mx",
  "key3": "285ZTyZhdBbuFTWUVEiQgUXNRfUi1gKG81TNoeu8ocYVfbnHMqwWwrWDGmx2FeBTPdAA55E1PHCH8rh7v96Eefh3",
  "key4": "3o67HsKV2PQiFjghD1kNx8Tso7VwAdWopgnufJUTSXdQXoLEYqfDxJJwyvmx6EKgBBFWNX2iyN49MpaqFnMeEvs8",
  "key5": "3Hekhg8xXPBbNV2T5Nq7W1aWCWDQDw1FY1TPPrpkzcstJwH8MWKSXDEci27AjahRfWuYbKWEHZ2zrCoJS1wdw46C",
  "key6": "3cY6mM62stK3PtEAVtvdxmqF4fd13uHn4yExCnLj8ncWMRNzwTepS41e5Zvq7LxxJnQKp3CYSbbyLdp4jyDEs5DD",
  "key7": "52KbscJ6QFkkGF93pyzzpQZ71CyTpiFXvc1kUbc6nsCN6N3FEuN7chPE9oEcac6VeaFyet7LJ1Le88wq9pgP7av3",
  "key8": "34Y3yTgYpWCKMd3Waco6vVrt4d4SBHqtDcGEtDuuscYtoPfPiu2UMQUUNk4ywWJxj9Sugo5S7bQvKQ7h6S6sauNa",
  "key9": "5DrFmWhF3DCi5g4NTm6xX6Kg9sRTPK3M7UkGsysbcR3BYJ2sgZPYtpF55AdXNQ2j5pk8JPEFP8EimMYvYmXrmjwq",
  "key10": "2nSHA5QGSPDkXXSS8eP2kR9cxawmVu4J3raSkfBiuaGKZ9XgWL5kuTSBhndVkzquaDkSgAykrthCduvFuTtzeeBC",
  "key11": "YqGZBVv3xPArFScvPxTEvgoNbi4Fve3sG4mWFERLGCFXRsCHgi4exXHdSbiU6H1vwWxQFxq8DHxbw5vMofDDXC5",
  "key12": "5MQyw2wHPNbGxQYttU2b48sSgKaux8hLmw7UFEsmH8a5nZx5ZyWZmvbXK1Nt5X8ADxdEQ5bCjS7rvuJionSiTr3h",
  "key13": "581ip5aq74xnu68uTd6eJP6TJ5jMSGF1sW78cwHYA9J1S9GbvciUFfo7EFpa9DFtnQt1K2VgUhJ8ZuysMZmFZxPq",
  "key14": "3j84BsDgUTySesaRUhJHTZ7HNX3yL7i6qFAoraehmBQhxKgUNjLbHjAu6RjG9YjHo8jmJHpxoAGRzAgDwWt37vTA",
  "key15": "4p5SzrhtBizaWegvfjEqvMV9k4VZLwXiwrJC1Bb9T3nF9UpQ9cbdCJZRtfCKar3LoNaoA1Ja1822uvsqQRqV1PpD",
  "key16": "2bSrg9jURyyiB8XwP8v3wWHMghuY2gka7DH82NJxuJ2tgVMyVwjSYfQkSiVbguEw6CazwGXZgnpiECJQkHibkZuj",
  "key17": "3kif6Xsf9ZknSupR7WRCfTngB8R7YJRRUm4KAfxcJtnYqPBzTq985c3gCgxFChYYaswCuUzw5CXHxJeYT9tau4f8",
  "key18": "5RQZNNsvBeQkSVhLmxvp8TnFZdTKdsvtwad7gXFuEuURZcZ9jtcLEx7Ma737hugJMQTRB2ghgt4AoY8cLCt6Hz9g",
  "key19": "6766h4GSqeZg7W1UVVkBQkt4xUHt7yy3VLaJ2j2F6qXuaMpw8wBqnHeqJnpcj73AvKAZyM6uWavD8CmUJ3P1bRAJ",
  "key20": "5h4XQbsvJNQAhkpDoRV7JRdXdymUcntwHH7yuEdBygt2TTaA4uym7xJtnRTes2Km6bF7Hx6ZQYBvMWCh8JgQRKzA",
  "key21": "53T8kvaDFGDZWfhm3VAGySHwFUC5xJACEmdPHJLfCPCRpC2L1JNKr7ZCMU5x1i7tabdGEuRjsLTYXe2CAru4fFKj",
  "key22": "MLj74jyo1EMT1P5DpKswQYZGbokFU6gXueUVeTzHpLQ37DQK4r149KUzMyzDafqqFcTDcfa5NCmPLpZNhKGVCs5",
  "key23": "4AHUVutqE3vqUCXngRdqWuUhwpGmkLo1dUqcvG7yu7o92FLkw1wbqMNva83nomPkyxfsYnn1N8hNSfVANU2QYAEi",
  "key24": "27RrSPvexGt2WJw7b4fTw2uzjPRiWtkxTE2B7ZGXszHNP5aADY6DhWwozF96YEdbKp62etjatTibfmheXXnDVECi",
  "key25": "Sa385ssA8xCAXeKUFYSkn4zLFPE63EndY5EKSGyPVvisrpPKYRHfoiJsdi5LdZV1sr9D5ArsxrK8rDT6YpkymUh",
  "key26": "pa6bApoMLs93Nuq6Umuku2KfzTnrHPjzHdY7q7es3p5gZizqQbYhVAhn2eeTgMBn2s6Uz3BqgGR64hnmkw7X44h",
  "key27": "2Vi5NBj4QTXcZHQetm6Mh9364UnLa9evkoSKcjopbqS4Ro9JhHEFi99Y4dYoMvAUjgJjHv95K9n9uriR8scoBe6f",
  "key28": "3dj8qVm8MNdpy6C4dqsp9urQDahuE1jnwXjH6FJuc2cmbRxb3CbvAe2CFpGrCYy4c8W4FpDhktMfZcJkzSHegmVV",
  "key29": "3UP1xHwEuaAMyP35YbiTmKPCVewFk4ZPMQCPQNE9XBWTZSgjYafEWejrqUYtE9SHmzqkcByN75VJBg8cgzZfUujw",
  "key30": "vzjzMK2CEv72qFMCcXkKHNR4MqprxDAhTEviSEsbYW2qJ3RmqzsKGV18UV9c4rN658QXFApvboLmw95UwHvx1SX"
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
