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
    "4RUwhZW9jXgJG3HAnB3qzcNiebqW1k43QdGCVKod8JtSD7bE35i3uj2ng69AYmPY6WGhYQoNuYs3qhBXxbodmjFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43TTQFw5RvKQMMxkdAUa9oyEaLwD7pVTYvj6EGxu2hVuKSGGw7ZUjhQm5xkWPU7eeYHRs6X1UDwXx6YpHzi6rMiQ",
  "key1": "4dseGqaLEzqDZAsviZBkycRgQabcamDyxEfXrHvCi9of8mJspUN4JFEseczgRUqQuW8ubrScTpNwK7esuf2duKpP",
  "key2": "4LU9qC7MzgkPPRQFyXhrh9USNdzuz3mutMeHx7S7RY1F7ramSDnrraYAnFNR6sQujD6S5bx5qCUm7kbpvVBi1KaQ",
  "key3": "EY4SKpppNDmnJkxYdW1S2dSAjKwHFDmp9kLZYukCeTur5JNYQqaYRYJx85yYKQe4fXJCeT9dVhcsVVhHu7mRGg5",
  "key4": "5cptExdTYeMBjBVzSynpMB1R8sdCDmEGAjhMb1dJ7gBoHTMEW2BXYCXmgqhmaeSRSjyM9KUUTznEFFpgLjcz6kSZ",
  "key5": "2uLrbNw2syP8WyvDPZ1AZtBwccFmcJXBHWtwkeUYeVu3iHEo1EwiH6aPsEvSzt5MwhEJRRDa1WKeBSAo96uuD3QN",
  "key6": "2qV7r9chcTA8Kb2fH7yDu94DBvGmbN45Bkftbg4CcFEA3snvgvNgcMg6pqo7SffrfxPadQAUJEohdveWDSGehrET",
  "key7": "41ctQdcKRHx5de8VaSmB1FMqBmJBMeHLW3KjtXULHYdXuH7RPtNqcc2ERYcnREkpCtxdnFEn5a2fFVUd28D6pVMJ",
  "key8": "3aZaVcJGA9Wm2dL3cGCbfu6y5QAxS557TZzr1mTE3Ca1M9DyDtzfq7peNZZME5yr4VDYLMpe4nP4mFZX75SJDHJm",
  "key9": "233jRCHPhtWPf4BvF8zVwgZoseUayGCpT7LbUQWwgB7FmQBuXyQ8enhwZAFWD6ypHTniza4LN7HCngx5PKzrsTNL",
  "key10": "295aisFrqnP5DtKc6V6DusFYX5Rc3QxS22Ud8w4BVYVRqHaraQCzHPgRdWAD6MQr8XyduELpZpbQqp3waok4wEWF",
  "key11": "1FuCsBEwMSAbqbBxmqP3j7rhypsWx1mzhP4H4YmF2C9khHZr2QtkASVHuHYd9p3f2QF1Un9KSKEBAXxgJ9NpZkD",
  "key12": "24WBdGU2aYbe5b3x8hEUPZrfDkL9evoDtbEcwJCRGqvaLnniiNNzCkjzZ8ot5dgSepbjzDhysoAZ8uJVQv9fMNFE",
  "key13": "4rDgzFfDMZj7LPjCsCzPdA5NTjkqiWomjQct1VKUjZtLJhiHDdq48YAs3oRdCVWfdCsnRSiWBJcWtGX4Uzzb6JcG",
  "key14": "66Bdmh287e6NVz8aQybfoThU6f785RX2XZtXTcCdc7SFa3jG91ZZFpU6ABtBuZqfvb1Vy2Q5jayN16VYscMJrJUW",
  "key15": "4Kf1c1rLsFMwoVTqoAJuWesp7vw5b6VQnukxuqDDjU3tv1urRfdXCdFTBw2XZjqTrHoKC2WaK47CDXomJ6ZBM22e",
  "key16": "4nbVowPVAmPWj12qbzxmzefFYpLYcbjbafnzspRdmi81TTWinPNJXiTE4hZsZfnpeqairQo1ReBkwzaKLJXJUKrV",
  "key17": "575J4MCKMUGPNJXhhLoADxiozq67NDBwLoJjrqWwt11R1NBr5PfpUSesmZHz1kmgQFwXnC6hiuZswWtvJqJv9veP",
  "key18": "5Pjxhkvcwyckn7hEbWe5AokkM9KgUZyU5voxiGzx8mKms1bef6SQsyXvj2bAaYJ3aoGATn781fz5hWPrmAbmftTW",
  "key19": "jppjoV3zksMzqJjcNvLVE7tmuGkBmgLnXc9t4Svi4rtTXe62116e1ALkHxmdFfkHuBdJM6cMAoopueCHbz4Fjuq",
  "key20": "2ETDHN9ws5VrsNMFvxACYnbHfjHafuXagtp4Sis5Ag9X7RyUtCqh6vRDXZ5Jq6Sh5NvXHuiTEHT5v4icmZDUn7Vc",
  "key21": "5xBQSHaNvwHHXFon9PRkvHuPdzPas82Mcm1GWAUkVTSW1uhtqcG6owCvu2RL24maWNkgACvJHdSikE7MZEjV6DVa",
  "key22": "BcSq3ariMqkfVBRy1i5MvuTPMhsictuGrwXN3CZvi4z3R5occCZx5JR5XN8DM4YqFdL5EGqiRFrGD3Lst67Jg6E",
  "key23": "3nhZgY9k4mmMtPePfdfC7YH8g9dZ1b3eJXLnykADpakHHSQWb1u4EPvLeSFZzoNmLWP4H9L4Aqc6tgqUq1PUfojN",
  "key24": "35cwPgHEjpCiYPFqjiBPHCaU88NCX8re6RT2dFNucAFVhJg4maDHcNXeHCYu8uQbRDHMQQLqH4vPVmrihYXY9eq3",
  "key25": "UsxTtnn9Wi9hamhy2Mg7ywNzDPjJswD373W8aYuehEzASSzVwMtgD6QkiZdfPEWA7SznVn7pWqSY8Hy4sjfnpoy",
  "key26": "3y4tnud7uuJmr3MhNXrXFPkadCraHMjshnC79SAJti996tZvkvRdDG7N7U17fRor14JW9S6kYzYDw7R3xNz1CdKN",
  "key27": "2JH1dJU146YbZNs5BC9odiKXGwzCga5t4NVftSqBi7g9v8WED6Hq39VMF74YhQkUAYhm1gLTEAW159fHLia2zPnU",
  "key28": "3kxPj9483gpYEHkrM6q5QckTAr9WnPTBxDCAZhuR3XKnzvPVhcunym6s6rTSEezHc6HfYjV3dL2G2dd9ArdwUVJo",
  "key29": "AHo3QTJ3D4dipEHGHEFagLGHzsE4sukqoMAboMZ5g7mSr67xdzzn25bVyPTLUiQjHpfJhwmE11GWTWeRsrzPZib",
  "key30": "5uQzUngBeoLZ7HR5f4iLCKAgaUKiQT2gArA4pnaz1QDeAJwxMWBVW9fx8g2bFM2KcyMvkeAG9T4D5bgMVmtM2pV5"
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
