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
    "2ejuhE16UetcpbApjMZEpzXQh2xrXobRhGu4Lcy9vHuTmPXYWE94B4eS2HB8ZQJUMRkXkDuq8d1u7vRJSMdD21oR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KV7x2CRYgoVX6Cj7z32v3QPA7ygjH9tQP67WWwxMT6j84kVgK55vtMUzWQnDVzTuip5rdxiH1xY1pEE5r4GfPs6",
  "key1": "5PyyLSxs3jGGo6hHg24BjpNgB7xSGtbn19CHV457YubMmjW2BeLSq3axdBqDEx8baHzZoSHENjM16NDVdqJQ1dRx",
  "key2": "hbqPN3SUXWnCkXJLvopRn682nFw6gAiuejw8exqzUF2PBNHHDV5WnRLHe6q582yJzj4AMGEhCSh2PF8bsDkEmPX",
  "key3": "5pJNbqTkuSrUuTz6nLzf4LHZxTifzAh4MFZsLvcwPgeV1wXFcAqwGaeJfRJWKBitky2UYBPENnea3JMozT74LCkx",
  "key4": "3B68JpCsqyWX7Qx3mmBrqXzFPdBp4VwdGRMXk6xbQyC6drM6XG2W3Pxr36pKM51oT7UTfkF9Tofk4RQuWNUEvWf9",
  "key5": "5Z3a266Yifsw5AL3yxju1HVVQB5C7YnL7v3YRkassfdG4cPcuxj4S1PiH2ymTTmHhy8TLPyL2PWWNM5FDKpBSSsW",
  "key6": "JMFoB39926oexwjdQPzJcAfxQJdH2xn5usvnYQWFoTD39du4EAAwo9aYweTkJ1Drhzk7KeTzhFYjk4Y4JB1j5h3",
  "key7": "5tiFACaBgvBMXdJhxp21rWYqTRb7UtupihdFoCLEwTQFXmWzg2u4Fm9nxUj35J2J9qSNyfSAvAbF634voT7GisM2",
  "key8": "yqQfgp2CFgd9En7bSgYzAvaVxfAfp1hxzTqVc4b26LwQkMMtZYaVRP6KXu2pi5UysZ52xYUWz61h1EmyQGAzofo",
  "key9": "3tBJ4LuwdMqpSUGkTD1bq28Dj4do32w3W21vSPZ6rFfrNQivaryH1cxqiqrZVZHZCyzYhWfnmaaZFhq21TjZCeYP",
  "key10": "5Wou4mp8uLjKHAv7mNuuNpa5zYB2rF2dMWctU8FpxtyRxBR5qzWzKHL6tjGgwgAAbMriJTgnnnDEhLy1BY1RcVwi",
  "key11": "yutVCNWoVkPgYmPwtJbsLRpXsazRn1xuWsLmo2JKSso3GRXEHRX6ua7bxucwF8DUYxK8csgTzXj2f4gFKQrnsRc",
  "key12": "ZdmdR3NDQJVPpjgufJVLqkFoWZp5vhidtsMB8njSnxVHc4GDZwQuybLX3GdvSUDEwLioPNy8rzeKYEkcpp4BTso",
  "key13": "DHHHQGbSMZUo4urE19zpWEsznQVZdkEpWQ6jwUrWevEq7T3qQ9N9DHQjArhHo6cMPXjWujUKSWm4p7AAJQ6ZmfZ",
  "key14": "53qfeLzk9S1CAKbtQJZ32biUJdMNpKF18EFnh1M1BsbLUpyqSgDsHQR8DAUe3iKHWgQEppyyKRxcVjkiUo9D1rMp",
  "key15": "4w7gnujRfKRWaTzHKz19TQp9GVKv3SDRMJGU2NtcGXyvLjiR8oxzXoKmNG2S2k9NYjmzCym2XAMdL8MdoBHDS6nK",
  "key16": "4Xc8tg2dqTdGgqciDNqDYvnVEcegEE5CLVbTSuudQWeMYc1iqMjkrHcYtcQs2gqu47ci6sD5HbEJsogRpHtAjEVN",
  "key17": "3C16yjNB7yVqJcw4ghELcFb9kCGLyqWszTAxwKRh96Ustrfu9LFwMcLZmbTA2fpFbBFJ7Kks6SE1SJasFmADpMfz",
  "key18": "2G12AERBqHm3AeQCVmkd1GJZpR97Avkki9pswo7g8yVhuMMeU9y6S4LCJsCoPaqRiwdeUaxbuTkUY5829n1V9gEu",
  "key19": "2wvb7U8RaF6Sp6LL8R8eVUWhxrkLeFa2wnDmnJLcopptu8ujssoyHASDGYivXVHbcGcbx4MZwusv5Lrex2q6NGSx",
  "key20": "3XMKeFBQ567bD26aaZ5jXFbc4LwgZ8CnYkwEbb51sRzotn9oVF2rJdcf9ioWpk1DSz8fDRmEsLMcuHQUtJTCpshX",
  "key21": "5STNeM2YUwQvMvDZefHc9uuNLmEQoP6Xd5jeHyJXgqxKMym5DB367f4Xz889qtruep2KYC23fHmQsAmKAFBUgWQH",
  "key22": "3oGhQDTqrqWSWVa2LcfoetfAQnB7E6mD3QeSgVsrwB7gcfXE9udznxZLR84rth8hLbrsTvnBzPk1UL7RrfW1soNi",
  "key23": "CmnZmi1qpBDYg4GNGKyNQPgxXkXh4ECFsgDm6ZbLotvEdNTJXiEWaTvQ86SVNzdy7RM6X5CR7iuwmwQKUUvxF6b",
  "key24": "39h2U54p1oHzmjcYXDYDhnv6rUSjNFe6mrdCE3QrNxm4AGn6auRYyhNxoFzMLPD2FkWrY8b3mJdbiNhPAgXigQko",
  "key25": "oJCAThksjkjFcUWe7ZdNcm65s5n1bi8mifvZTSnPtbYpHvnjtDRzxZQ3deho5VeGgn8sKWPmAM7WqZK3cAcYbmT",
  "key26": "4Dzog6CW64AUhQg2kR5UgGB568JWqK1MyyFdeZNN661JRUUJDKJmpDB9v6XmoYGesVytWgcGvspWyewxyxfQVGCa",
  "key27": "4dm6moyXpeyZn6NNFC2fa2G33wv6wi59EBiuSvdaFJTgjYWYUgVAdg9WLgfD7nNJFmMAc6W3N46c3F2P1BweFvZ5",
  "key28": "5HEubYGyj6KfuxpK9ZjZx5RXPYCEcZd4RgBsaHaM8DcTepYwHMTGFEg58iQe2PwNBsZZx8D8X4GwjUy3NHfFSG2w",
  "key29": "2QRpJ93Ttw2igwi8ikTwj1jZPw7tWrMNNd7MgMY19czkwhm4iKkdXhocT3sC1Rj4aNQNJqdUKtnb5G6cWF6d4QWF",
  "key30": "4wVAnBXHZNpnkKkJy6o8sCk3yju4knp8x84syBcYfPQzDAp4fF4c9jETAeLNqEEZN8hfeGSRzD98AQyENGNz9fgW",
  "key31": "5co1kLcN9nxG4kuiiQQsAz5iPsvrziRPpuPmAf64Tc1yQXMvwur1yUD2dLLHKJNiUNwFzorHKAcyB7qqnLmnKDoL",
  "key32": "2SahyNUVpLqqSqfeet6KdDsK2U9sD8H13EuVSHWtR1VmWxnW6mDtN5xNEWMdEPGtGG6vpzfRaSG8FPSCkMXRZdEv",
  "key33": "5i2Xzn5CfiN5qv8Lh46XvurHLrjaYNMfHa2Esg9LD8f16VmoZTVguGW98EEi1f9ykxKmxHfUx8KHm6K2uH8CHZ9q"
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
