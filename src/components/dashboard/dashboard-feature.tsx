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
    "34zdnVUQLFwQPFuttvgJiavKP8E3q3cXKG2ghSgKsubYaDbXhz1NSDFz5gvR6onpDp8gCgaKTLRwkGkugFfXEheW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C2d8JQPsfyXrN5x5NF9M8a2u3NPDqRYjRaNuear19Bryiq63nZ7cbKHbsPECgHUBw7RY6Z2PJeLY8PVprbXYc1i",
  "key1": "5Af7aT8CXTUtCcwHnX11TiLEbdrdbH2iZHohRxPc9MbWrWASBdGXgZ4Ae2RZudGZokjdgd8YX5mEscQFGEYKbeZS",
  "key2": "3Pi2oN1aRnxjoLGrLLu1BmdWqtrAB8MXjmkUoe2n1RH5eTk3ZFZwj6Gb4zsrAJbw1UYMJmbk7cUVj4ST9tDwwaPH",
  "key3": "5ejSpPpxsgfr4t6EDqN66LtmyfoqD3317jYo321m28Sw5XLeFKcDfWzHL172c65nzJrf4kPqEKFiRBFr3k6w9WZy",
  "key4": "3veasMuKq4641FbDVbr5oP2a7gXEnMLZWkWpbiZxT9SdM3wSKwjERY1jUu1PQh25HgLUNWJcHHNyMw1m3ocJPW4M",
  "key5": "2AbZZA8pMsRJJ3n5tJJrBa6Cs9BuMJzGWo6twTpbAFjBiL3p19qomt25922W8L9ixeuxHZ3p954a4obtaSHZ6NM8",
  "key6": "2vkqAauKUNe4pFpz6uWEyuPZNBejp6dz5z9ZD68LyrLRif4pqk15kPo8g4gt9fKxEj2viW1Qm2an8DctwXz8j3Q1",
  "key7": "2JakUYSbjxFR2GVDgqnRJq6JKXi36BGGXJHafjrb3konbGANA6WA7rM5BRJKB1xnJNfZZtektS1vVcGRrfXHc9Yf",
  "key8": "WHxYBW8coJWiJEiJQLHEJzxS4hjhbuPMkRGpeT3x7P9a2BbufHAhGTCJcF7YA7w927j8vYiQ6FdFhR64tn31EAh",
  "key9": "2PC6eByxbWvVxZwnHEQMKpX9cQNMLHSpm2fb6SSoScEwqGP5jXVETHZuus8nvkyJc93TKVksfW1LWLmtR4LR1aaD",
  "key10": "5iByeya3WaTGvPCTvwjGFzneacfuPiby3VeYB883beA515bQGSA81jEbH55Xxck4MT1RJoRyyVaB9Umxn93giRW",
  "key11": "2nHULzQP1VbvwN65n1C21BMDrrpATSFG7bCUcgUqYS2xKZqhfm7em5u9rtYWoMw9cqp6tLYrkDRcBDh8ZuzvUhzv",
  "key12": "5gFtHf6e8S2DqnXE8qA6SoXQa3xNdabRyM6w3YR7kvtgcj15HJYpmjYEV9xrZZcZDDmn8FNveSQaS2UvR3eVJX2F",
  "key13": "d23msuGfv2gCbUZyQTtAxVttGAmTt5ayH2AjXUBMBUxLFv5tiFEuyFkzpaQt76BVZiRX1x2LtTTzPwcBF9tdXWT",
  "key14": "3UhZyfGnkbmVvS4Vh6H5i34dEXc4TEmwTtzGxwb7mWZC1qoepqZLUFYHL7Hxe9xGUHZLxBv1np8RFeF3rVT5XFLK",
  "key15": "oxcsntY1kXqFvjrmAyAEbwko6EwAzRbjhAC5Ggfgu4QQKUmJWDJwtmLP7R515RAnxUNGLA82igpqFUePwZvURCh",
  "key16": "2BBjxEBcUajcFHJNKQGbCCYTPLu2uWjNqVTAvBTA3sjMZBs82ukUpyCuBZfkoGDExezbAD5HQ6Q37ZxfiHpBBLcj",
  "key17": "5K9oAtD8y6FiipRUE1WT2YWsHJSPGgskPnA3jAnZw3RaYfdA9fEpeGDyFdfFbAz7JfXmchP6YHNy8h26ntRFkJE7",
  "key18": "5KqWoonetpF3vTxQuKSaJMgfaFHARqyUSC3pjjyizjhHHLL4vvTUCX5q8jS4aiFpD4k7NW33nRV7JtFzaea1bKAx",
  "key19": "mZLVhXx6ueDaDmovp9auUXQLQndYxtwDo8p6cMek1y4gGgmjkdnpwxuRGFE9K7M3baJhsbjRwSH5pLZqKBTb2yB",
  "key20": "4Uz4qL9Rsp57ELMS53EQPN5kcZGSzYHZdYayJp9xJPZrgktbNESu5HdKkY39pXTetJLDz73Uhxnn7J5jqmgmNnNA",
  "key21": "3Yz5YJ43rG2aVtTYvXr7vmZPQgWAFtH7tULktPYaYCr6PMwbv8eMLRbP4YxCYToUcf9CfADo1TPjLZ2qjcwvhaTM",
  "key22": "2BAQ83i2rofcsnAzVw9nuhdavrX4ijtoawpTRdKCFBFH15iQEZjcbdvgpCn5mPF9YjNNXz95s6DJNSyHQAVzefog",
  "key23": "5YNQ71RPkJQjUgbHtwiTWsE1Pwd4zvHcS3PuxCxDbLdr2JUArfDM3N2ASNV6ThDPy5Vmw6GpfTpAo1R6WaUGUM7r",
  "key24": "41VVLcAKCyZ9rMcpEnFb5XbCt5XUC9bdKGwZ5Rk8srcjzryrkbDeNm9P8dGqVLAciJ9iX4Hpz5B1nUwjZ8xSr9m",
  "key25": "5Kbb7ictd931137rgrRizmNFgFQiJG4LwFbvq2y4MjMg2rRFsNMENqGJKgWxr62s9fB3w1WLcjh6o3U2MMMHVFyd",
  "key26": "51qUTHrrQ9bTorARRZkZK3d4fKn2YXB3vjZCtYNiLHMfRWedBDv8CcVmRn4MqMrcLveqp46ebGeuDQRC8G3DoUgf",
  "key27": "EYTW2W2572Fs3NWYjKGYDyyqYWX6kBse1D2cifHVqHxJRmgoGM8FRC9ReQpWoPM191m7fubbjVbx3VA3ZqMHUmw",
  "key28": "5CLjeS8yAf6zNsnMAvGaPKLM6USGmWEAHJfCVC8LY8KXTzN7C2tTQ1eTXU4i8SL4fh69DoWeQdu9QcuzoQMXhcZM",
  "key29": "2vwTUzHSJP4ogLUeNS7ZWAwNeUR5RVhbE7omgycaaAjXLDiewDg1Bwc5o6JKjPj1me8EtL8pUDxUoz3qhcZZEFdF",
  "key30": "3JScqyVaGdGCyXjwwrsygcLfGYdQVw773df7pyhw9YanxV7HK4c7zw7YiRWCGcEktq2GQRbSHurWUjntvmoYjfaL",
  "key31": "4WphG9FktybfGSu4aezwJ7vsgpnzFb4RKtbYbJ6XAc7ycLphKna7sP93MYGGzEC6onXBwHevdAVLWyV8e19VBzPq",
  "key32": "62sMewbiTRKRYRdymffZEVELrwUJxFYhHudZxWYDz9KNb6PCVSKgo2qWicFNJDV7D8SA73ZH1QFv9xz7Vkmw1ESV"
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
