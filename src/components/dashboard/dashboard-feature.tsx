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
    "59gCPPwoHBbqd5gzKiEM6cXFkorxZFui1EtGSAkwZWCiSC7vbNfewZ6QF22pqZ16sx1Zji764yKFH33XywZgYvew"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tvWjGc1jvpkN3zeXGqXK1oGmeLKK6ZEEa6LstgVJmofbZgz3KESNovw5BhYuhbwJistJMcjctobrTiS4YbskTLj",
  "key1": "2ejip622qiEUTkvxxKfW3E5denS8TiNXXWajFVm7TwBjv6t7M63CUgJsYmgcGntvDJ2qY4sjao2LnU77bdNxb87V",
  "key2": "2ovT4S3gAyXpbV6Mnnfm6ahkiyHfew9zBgZ3ezXNZ7hnv4Cm1WGLiQrVEvVKBwx2dBLd1i9yMUPvRQeR99UaDnJk",
  "key3": "31wYCM8YQ24DcQFASrwLnbav5ddn6odiHjJuXuah4GaHNp4KiMQRvsocKtpWDVuTgEavFVGg8BHBmx6CDoUdcgBc",
  "key4": "38H4MzxC4iRPEFheP5gbHhksqJao7FENAgQQ7vngq7xLVbQ9VBRspcuayQRoxVhPXFrwETYPrkN1QFjHEdnXr5fp",
  "key5": "G4a4yB46ReSpHfJYBeWx9JAMooJ3YcPYhatZMEiDfomXtBfvqewdMXKCvaWJrorfeFTh9MkSZ7qe4XyM8YkcnJS",
  "key6": "5zBqHa8qw4GJBGQXvMwofnJEXPD7jMUo9ADitv81cpXYPaeRBdY4gReQYLBfLYphMoB35j6vTbSdEEcSXnjR8FtU",
  "key7": "4n3s7RvrUF2dHMtvEtR5YeUcYaDBBpM81i1Ytmdiu7ZFEmqXfM3uFtmNwfhDEeddRWSc3RJTz5g3axy4fG1uQ78T",
  "key8": "2Tm3hxzqwiSLsJCdZmguDZWXghCnrar9CREpKVNc9rBtKATfCPvgqN56SKACkaotbQrsvyrxammNw6tavX5DgGDg",
  "key9": "5Ry51F9x1SnmtbgbMpxDHxKWgmsHbWHvD9hRTGZ7hGPF2N5ogcgTc1xiubsFcDfNAVnfXkZ4V7n44XhPFLhFZMJo",
  "key10": "d8HtznuSWtGoy6SBvbVpjLvAnNHEMnAZQJEbyzLGsbcsB1fn2YrCtc7gVPqHQJdMSJvRc5iK9gPh3BRoxo2RJfg",
  "key11": "4PaUHvUSV8RS9MT51KdVh4hMcS1yowkmNHtyndjdG26ngvQUCWeF9eoYwEfqc16tPgFMNHdmKV5ESTWUEnGFAQpW",
  "key12": "3H97UCAPHXXWf2X5QAskGNAGW4py86hdqtP1iq4H3YYs4HHNkgyWvKrCbAyV5KkJ9DqwiuxvpRtXYGZtGowwLXqU",
  "key13": "4zWLMrerW5ZQaSjjBHxLeoyQcc7mTskcFWth6SnkjRWDREjkDebYDZWwn9qkChtgtcNeW4cqrvGKoqjMDjJQ55EW",
  "key14": "2dC4Gky8pTjMEVCKSVeZpijF4uJZNjTV6FSwzEWALM761fpW1WDQPx9twk6M8gPkhLj5RrhwFtSkWKvADDnDYQjE",
  "key15": "5wQVUJDugZEp3MN6AWZrhhmcZ1wMfX1tZcdeszrbKZUA9TmuN93f7VU1RgEBTED1mkEDGdHGkoy14MYo4PA8EAKy",
  "key16": "37dt8sSpRKnj6DSKajFzHsyTUQkRuUepUxcYadDabAo8Goz1HfeA5yp6Ym23B3YfZXmTohXkh1yfWTrV9iYBR8YW",
  "key17": "651Upzi7R7vHrJvVHAxdiz5ntntzKp5nRGPR8G1qX9JEwFHu2B4YbgMaccuqHBEAB6Sd5cDJMtFUcG7SniCCwTrs",
  "key18": "5rhwb5Jodo32i5WPfrrGbE58zt2jA49MPrY1ZUogbi3ARd2hbRDGsRbJLJ6C2QJWjYs7Qhtq6cCzfRD7QwHmohW",
  "key19": "5Xf7f4VrCxgp35dSUrG9rsq4tmzUmMSZnCz1TqwFL8fr11DoZeaaXwuwbxeZUnYLTqnsRQdEJ19YY83ydjPFAtsL",
  "key20": "5F1uq7nSgax2dJLSsf2aNesqVhEcjfVNzE6qHmtuqz8ohZw7bnfD5WUojHSjuQuARxkJhmBARqksdWWX1GpQsamG",
  "key21": "X6SpMLWxvmhdmxWJV7BgNzwuwGExaGkace6Hqp8igRxjFqWmgENLgw7qKH59w1CN4cjrLavMs1mzjkGBvdtp7RV",
  "key22": "2HcCMH9R1toK5Fekr2M1yhntZXwS73rETfikL7xJWfiRrcamYGEEJBC6domLorsnM7E369BQzbqMmRyFqRaaquzm",
  "key23": "D2kZwGNJ54nnDNcDvoq9KiPNRuZKnw9pmtbsih1AYzs9oR7wDB2WGvNqro9QWxt6Nymmvv59JWkvVbmo1Mk4o6X",
  "key24": "588ZFt2jDs98AAThAvAsNxArEtnXhjDX3pz7XyWXx57a31xn5PrZwhnfbWAU4p3GafKnFzmjn9M1N9QXT5KiUgSg",
  "key25": "2n1b66zX1eqRoLXV2C93te3v8wZJfNd5LHQteztHi4UFDiufNV9hMQ8k3E1LXW66erfhwhnJsSpAUrE7WwAXv6CB",
  "key26": "3VQLRo3cxQMNhvau62dFt265XiGJrQBJXfpeuuKsJCrMnK9v6gNW47ip7spYynm4nNfJ9fdpenp3g8f7h1wMhC8b"
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
