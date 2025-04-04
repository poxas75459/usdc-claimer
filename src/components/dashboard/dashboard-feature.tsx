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
    "3iPeECm8S3h8twi1wQWnM85CQE8gFtMB5sHb28pELoPDuEWR32SSBGEQgy453W21fNdirvgabSqN1YeFEhGbxcYt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jCLMuxgaPbBKuLwQkcveDn3Hu9KxYazFM6hYZ55jp1QJkMmMtjmV8eK8kJzGm2wPWSk6LfS7wYDbWuGUQp2kgjP",
  "key1": "3iLTBaVr839iifbNpLtAuCVrfopPzBQjR8URZ4uZdn8RcUHfxW5x3DpXNmLyecnuYXvyfNb2qyFwCynZ7gM6VfZ6",
  "key2": "2GRtZtwuUgzzu2x9a8P243WSyQYS19kJeEt65dey3SHn4kyuFoVMJ6h35StfynYH2rJiJVFhvGF2PJAPtoP7P7tX",
  "key3": "PLPzaERTSNuDx3WQpVQcc2Me54XUFpuXdQmvJuXzfEAY7nY7BGu92FKh4y5kNizYrjYXzLLqVa6nYvgW815sYRF",
  "key4": "46aFRUjS7zP7MubFJTPy5nfpXk9UqSiNjCNodCgBPKeR5EpoNGiB4VxGasPXsmRgZm9ZNyDrBKoYqpnPk2qWWwjX",
  "key5": "4LNBCAcDaTtZxyh2bsZmLm2XQ5jRdrU6vrHc2pKDYBErPp9wBM94erR8k3v1r4EUz1DsT8W6HZy18DaKiaJD3AY4",
  "key6": "5RMrADHJnS7cDt4RWSVd12YMiz3LSt9n5wiSU5MnjGumzjCc3zf2RNv6ZTjomW6Psq6n7n5iWrs9tfFT1ZHrFcDZ",
  "key7": "2og2SnWaEbVkZjUPzoMqzjYbS5JQGNfq5gbgpUbtcwoCJcmMzVy8Aimze7NnhuxLL169d1n7wJBgKAFQfy7cnLiV",
  "key8": "5W65hH6vKb3AvnN2uWhe2VNzJBM7KQ1j6UJpgDLND2gyNj71G2Mgyv7nKg2Vz1gcbBb7CjgpfVwe7MbzmzPeMkcf",
  "key9": "2N2aecr27T4V8LPGo8qEg1BbCQhUYRYmtz31PAU3WoKG51pum3qXM2UXLCqLJooUfFrVKptBxPLwXhDx3isBKZrZ",
  "key10": "5L1psDR359UboJJtwE8nBTWkS3J5A4cM28iKEtSJtFvYpfJCNgUHc6g2LRuJhsYNm5N3BdJNq5pkWta1im7GXJcL",
  "key11": "3kCHr6j8wY7KUAJyAssbTbGtK4TVbUywaAhYQUHSAeSVumbrNCLK2h45qAJ4JbTgr2U1UQvmqtoxC7X15zmGZXH2",
  "key12": "g65xcDokLKvpH6atmEtGNmrKjNco9mBksw9X9uA5jescpPNTwwk2DhvFbPgYwyHCGHDUem1jypxk9gC1ABwD1bu",
  "key13": "3ADNFWGyu91pYAwUe9S81BXUYwjKRg9L3j7DjHyLb2kXM4kpZkUdLsTU5AuzfPM24AvYYm42Ld5QK3Zp6JqB61NA",
  "key14": "5wHdzrDTBi1LQAQHCbV7moeNvkxcgXTpeRhyTMjRZNQzs3eJRiT8Vrt6g5EwPAsZtBGiBFKftkXqFjPWigpeV8k2",
  "key15": "4mbyYTsTZ8yrCCi57mRCBFREimF2BJs5ChNHkvM7WGRQrNxgTuErwkCYJ6PMpFNLE86UubiWXssk8DdQov5QLSEf",
  "key16": "2SUJLDuqFKQs84qkmyBEpjFenWeRZCcViiBgt6BY4AmNQKsbZWLkHZ838YaRBppMs6wAbQWSJ9ZnDG5G1Rzbh9DZ",
  "key17": "5xq1zgybd7d8W6hxTuor5drHX18f67NM6S8WW5V6XHWL2KzHYtC7a2CZckT7RXBS3ciE1Kh7du8XV6SfYKyo4U2z",
  "key18": "5SEvdCJZtNjLyhy3KcSC1DK7XB77NThC353zP5EuxYidJ5PhaJoKJwNRF6kM7phiYdbJVLbjF2e655YZVfJTcCAc",
  "key19": "3oLqLSQfLATomoY3WsJp5jBRLu1jCuf2XjrYnBtzUzVjgwG8zU5ysqrjKMDHP7e8QXdvYiqyPJPsHYGQm17GFjPY",
  "key20": "5a7vG5x663Qj45oq75sMCmBZtcSpB59QJ1SUPD9knGGSxnmJaRDwz4ads7WRFZ33oxg3bQMFsH8sSpBLu5DA2UBC",
  "key21": "3refV6vsNCoVtGYd7dJLATHzFJonugkai9xQxQ9jtAcYH2MWtV661McSgh7Rvc3NZw8QbtLJ3Q8QuhPfuTRKDi8X",
  "key22": "2x579oE7iMcjieeKA1cuEewFZ6TYoPbexoKNAtDXCHbwEE5NrckYms2HKrzX5E8iJGrbBsQK1Fa1tW4VCoPMrWKK",
  "key23": "3VVv84STV7uzhqrRoxDNYCkjF1Q5p8fL8uuqXFJ12QvY4AK6sEGphbBbpWwQr2gTdRqWQgB473vUiD4moPySaQ4q",
  "key24": "4PhzbXBKudMYQfQ7YY5WVeBGWXcweT6SLqft9RiWSk2TFaDW74WpfiJ6oy9yNKdX1pJs4V6WpSRbrmLfgc9aLeHg",
  "key25": "2f6qibXBUQqndK3A1vpsBbah6dnd1XYkudFkAntVqVEB68h5tGshznm9h49RxjHBAwQdVGw3MbApQ2wUj67fWcEr",
  "key26": "4sJ9Hp8UnnHt4RK4tEdvHpDSfixhdnjNrhYqtfZKacVVTHGcC6UMBurtuQafmFkkicUwY6Kq83pNWnGL6zc6sdQ9",
  "key27": "cESXkRvwiSzhakTECWVkDnR3xhbjybfd6YadXiFquY9SkS51iRJHWVVXJNDBUtbZkE9xHEgy5Gcn8ksfd5TALmc",
  "key28": "3MvsQCrdSJ1puL5XNXvvBZsPu5c7Kg5ms8Q7doornjwdEY7xdkVwczNwn5PGAX1k1kfvKX5JPEuxFzMuYqBT2Ezp",
  "key29": "2QTSVCJyaGevGigpWb6kGc6BvXv5r9MAExkZi88coFxNetz9NaTKtTqG2JVHoRjieKCCBu88AuTrbotSzD8yCjvs",
  "key30": "5d1V31mds4zbXnQad9ARUnquoVn5PL8H3XZHgwwYcMPmmv8xZZSkj4tg4c4bNbJ9fXaircByBv1hz85oV9Z6cRPJ",
  "key31": "5Vqmw21rsvQtWkZ8k7CpBeGhPcEsYMT58d3zGrthDnWC5MAcx7o5qDg7KVARDERLoYUGSGoCAixj9v18JFcRmfhh",
  "key32": "34xqVpY8jURzBKUnkTYdDkHMDNqzbkrhWzoy53fDiMksUKWCsCb8HMVGTe7DtwpJDiGKBC4By6ucDmV2qmmM7hc5",
  "key33": "4f5yVCQjeFi3Gh44CuVhKcz7rEGArMihUhnSsnx1XV6zwVYThizPi5f2QgJCmtY45RWH8sWB6qQCsF3ns7Ckvf7b",
  "key34": "2biqb1QKYhWJzwMDd2NkH1JVEZA9nGFKxwQ76xsbpp11N4WYNK2Q7zcq4s1SRMZ1BtteSViunCMdPnx8LtYYeQn",
  "key35": "3AhDqdb99G3p1SprZPaRqCDzypgBnj6XVcuEhwrcmePaPU8dpMQ7bJHi38tP1DANaWRtmGWZHCEPNAHxWj2CEUjM"
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
