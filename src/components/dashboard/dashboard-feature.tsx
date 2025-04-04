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
    "55GoegTwc5PHz8g6zYP6s4u13D4FG73DyFjx6AB7jxiFkL9HTbuqCKVnkKN4mC1ZHhURbU7RRa25AQSc4cpRxjMP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pyYbH5NmjVYQ6DDquyHgnTxNRkL2uBDPMbDbRiXorkR7mVwda5Bq4Ynh9tHt54MYvHyKR1bEfCSK4eL5W1PeBzV",
  "key1": "4XZZUTYjmiuX52LYWX8LDE4KbkcFcJ4Acm7FefBFpvTqHLALqTAxxCd3tQgnzX7ZJ4heg9Z6iAahm9iAHZWphsi6",
  "key2": "4NU2w6pzZyUHVzaEtGWpkp7fmQHuWpX5dg8NAXp4jTimtyCQcLa6Fxq5RfwgxD1GwqsDouGSMQCcNH8v2oXqqWKT",
  "key3": "5yhx8eVP981dnwKhxQmTxjtnrumXmutyFh1JSyc1BqDeNE68vyN7EZDG2cPZHzntj7xkMwbFhNGAxxcQLDqNyGJ",
  "key4": "4EMfbx4nGCtvUXTtn6dvnp1vnokHGQwvZz5JqdHTPjfSo8cRx7Ke14MUhyZ8Gyacu57ob3c4Lz6y9qvsE6onbrpi",
  "key5": "xkzrLd5vaSTXXuTPBim4FSqCAaycfXEgE4rWD1zJntPY2JfJG3ZcYV1EuW6FTHHbY6G28oKB8DHRs1UA6zeAVUT",
  "key6": "58nh7aN4VWFjTVyXZkY1v5tsH17j74z7jPGRGghbwLrCtEWtBsKMvTDMi6FuNH9povNgYRX6eyMDUEWvTQGH7CUR",
  "key7": "2Ldods9hrxJMSFY4Y7sZC9C2PuQSZyL8WfGVs3jnG56HgTqSNzwZdvuceJFU6P9e1VzHxkBDHDd85q2xM4ehnSQ4",
  "key8": "5tVLNRuC5JzXirCtHi7dULfGibHwWrgkkvTdWBRMFcPFu65L4bvHkeeex2LubZNDgA67Wm45RcZYFkBe1svd4sQ4",
  "key9": "4ALr7j3HQRUHeSzqbXWEy1qqJW3vcvXi1rPDPVRgpi44u7VaeoCAcJHpSbyru2hUbRYiLochoEq4LsDvoKiYq7He",
  "key10": "5ev3CDsvj4yEeiuzUJ3hcfGqMcDNhGxUb7orZvoQD5aLPFKs8hx1KvR7yZJJQn9tUeBxpph5DTdFyYDST4yzm3WC",
  "key11": "5SZxw5bHaY1tespEvD9RJKRuWRwRhby3vgDo4Q6kFMN89aSczFacJWqpQtsp16pabu348LoPKHEARZuQ5tTUB6rP",
  "key12": "2D82TW72CLV5qkJ9GSU8nwjn2TdYvsE1fkyRnF5im1aZJL2Nv2HixpmBjecch84eA9Fc1xph6awogqFLEZ7K3WWf",
  "key13": "3MGJwnJF8Ni3ix37gYZoCorLsBUwuG92pxxgYx2UbgLiYMKZpGN8fcbbXtziVoCdqvb8JHJZ13jG9abVqQ2YDzMh",
  "key14": "5fkjb7tMeuVTkr7WZbgczE1AmiqQc7QU5YmXtuQiQZmgA7CJsSibxKJvJDzEJmU1Xy7FE5VzJXmiw9ZddbsQnPwh",
  "key15": "iacsBWotwGpbeQY2p4VYLkNFf8JqHTybv1F2xh81xDMApp1yneruMs38weoEVejE34groqg4EdeBkwH8nvXuxtK",
  "key16": "qT55LoWqif242WcsRzzAtkksYKD5CW2JpXFD7FaByr5yn2kF9DnAiyaBJcSG87e3iv2uXEHRH5AjNQP5hvHbePP",
  "key17": "32NtWXA7PoPCVfChm3rvDLd3iYVUd53eShFgRyggQJy7ttBP12AZysZ9iyxHF2haeSdQsD2P1jGy6diakj8RxmwS",
  "key18": "Vy8yFVu12kydNcrZCThXYxyBaMKBG4ZZEuWxyrrtmeVZgyTNZUNeC6kSK7sbF2zgQtvo32s2Q1xheXPuhRKNBXQ",
  "key19": "63uzVt5bjxBfKxvjTjQZDh72Za7LWR8FafS4VxeL3gPBpnDGeNidmuiA1LnevU4UZEmvH3qK2ZWasd2v7MFcHUfQ",
  "key20": "hKnQsWsJ9N7tHhzn3tzEGH7WhcTztgxeMeQU6mRTGpZZtYixqx7r2nSwwfYkJj4ozoregr4k5TsJx5B5ssTbLbJ",
  "key21": "64R3PBcqew6aEQe8i3ocCDS7TDyNQ2wBhfQyoYGmvpb1tnn3sWzrN1SsX4bXLqjeVEKqwuBRrQGw75cmcB1CkXJn",
  "key22": "5MKfat9FhbKF4fZprcTJVjUAWN6FhEf5hBGQhD5xptxih2MVSnKtBPbs8kn2W9NkAYhBYhh7P7xzyR2rQeK2GLx7",
  "key23": "2nwVQSAouYbtUaMRrkPc3htnjxwG35ScK9cDN2VJqBjaw553zayzGjjanJajPzisSrh19bqAWHTUnT3GE7387LdK",
  "key24": "N5uo5spqLmUDdwSLPdVEuZAqWoHCRU6C6H7WwrN5iFSa3CahABy3k869KA7kZ8LpUKaM3qA3hHjqYLe2qafewkP",
  "key25": "wy8fdTdYmpaHzjSu5cpgnN3QqZjV5ijhKoU2C8YKh4QC4Y5a2aVZoiwUeUAogvJKmwUCHxux8D8B8bcD5rA2drX"
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
