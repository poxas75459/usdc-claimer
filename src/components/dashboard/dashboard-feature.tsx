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
    "5SVMScmwnWNgk33fC3YN4gLbsfP1BZA5p7dgpytVQ9F8cZ8iUdGrPn3s3q5wFucMpXYjtRdSZVrm35ktbtXcQywe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YVryLwKP7hRd9GbSFGq6W54fuoqjkfa4pHeF4ur94gDeJjH5iGgzUU5RCJyHg2RNwQLHYo1jUSxxqXe66Lq4T35",
  "key1": "4jbhUC3Qn1XLc2Yp1WYNmApFcguw85MSNuGkhH2YNfZt2LCTTbV2cE6Y7jFs5LJKEK744v3RAwQEVevNEhFV57g5",
  "key2": "247MYVmGse83am6pgYJNDTSd9D7qs1ame29uHETF5e7FqewkKU5S64crRtwT171VFn37bvN19omcP2N7468cZhRj",
  "key3": "2WoJruoZcMxRiAWLwBY1uP4fhE6UZwt1iDXSyA1jmmxWfbJHR753mqJ3ttxoRS9imYu7y91nEEEDVn3Vi6xgoxjD",
  "key4": "634dh3vrztomQwfBoR3aEfHC2LYkChzDjrc8hqbuTczzE36D39v8AoNKEfkAPmidvAh2kqEECWMRUHr48an8D8Ut",
  "key5": "66yW2K5nT43xCxm1idsd45HeJMervWe1BYjRZuWMAQjXM9D2eu9hey1YThoQdPjVb5EXZhwpqZsWx1C2SFwJUw1L",
  "key6": "4RjSEXWG4PGn5YESm2z5zRWNtHDB9Ftngiupe9A7o5SbdVEcfdQNiZqYgioRcWn4tfmZV2to3AP9jTvE6rtA334r",
  "key7": "2iQtvxdyqnMWXU7xZx2yTtZwV9ak8FH2Sn6MeMZ6RQjN1ifnJK9RtGUuoRdHNMbZL33mnRRVExeNiRzobgcaZKxj",
  "key8": "vv3GR1GUvcUQSf7tCXtVJd6NSU6bMD651kjEkgwYmrxg8jQpH5xJuGrXVQabE3CzSoPBfeDGxVKLAxge5qiLLFa",
  "key9": "NveUqGyX3Q5WCdwTFgmi6oe6scNURFR2bmDHMhAGjD2rp2Q8PfYFLKFjbLRS4i31H5LA6bqv2zdpx3nzod3gcQG",
  "key10": "4eqNdHq2saM3qiZzy1YMon75H34QL2TeMigKYNMCNKGdr2TC4kycAeGBUZBRPLzokEk4Yevs6mpNTD5HSfnETKxU",
  "key11": "512NfWVGY9j2aY16VobT2zJ9c58qgWUDMyZ2crHZDMsNstSoMpYjxTroHMpHDLz4UrrkQHxoB5sgWZPZUapEgDAa",
  "key12": "26szXCiTdMRKEUwyFuhCoNrw6kfhyT9WM3tEerdqoUqbmi8RXPkCh64biPREUc8MQVT5DMB4CccKTpRxLmt5oEUd",
  "key13": "VCY3cG4VixC9zodKmzuTGfTnXvoMp5JNTJAM3EAjTepHA2ZHR6ogAhLANrDCgsBj5Xr4UthUP5yVGbfwu1zwCvD",
  "key14": "RPTyBuJUjgm36YPazdGFUKTupbkq5s5d4RtujgNVhrgPbuu5bpRtPKp5UdRQN2ibE6tDMoPUo357E5MA2PuLsuG",
  "key15": "5M5UsUxAmd8YvQGViRjCc2oZFagD1n98x6XnQjB1PdDkYKbbZBwzw3q1upQV5f1w2USA5BtTnbwVu9TZ3c6p4Thc",
  "key16": "dWDRqaaX7sCHSp5zESVjUQYwrt4eD9FMm45MVwLXyfZzTZhNPnRpNkj761nhPiCyeNX3KjvUa9wxNWHZXnqkBV9",
  "key17": "62pfUzQaNzev4caPVfLRPTqRQ9bbDDNPvNwLMp2EJ3HhWR6WBjwMCQNigxcHUnkKXrTeQ6FBhcucysghPEaTqSWW",
  "key18": "2Q4RMhJzzfq7tjnFgkkbYJrF5hb1X5tFQdXYM2QmdCpLyprkVBNn1qJoT4Afh8XKyjKeP1fMwZuNtKb1UTwECay4",
  "key19": "5TySERFhMQ4faDp6QgVv7Rxt8zUuaZmbrodco8XrKxrt3S4CHoDvc9L1EVBuqCo2FxFzCzfbrRe3tH8RH6EhxXUW",
  "key20": "585GnRhzQ5t9KGPbEzjzgzj7kgCdyoFACswshQbkfR79Kgof56YXMY22EXc43AVoq9PTrxXKWKAVhispnqGjL6CZ",
  "key21": "7QrFreNJNKpgBEmJBjt4nDw72WvJAFz6nTbuufCwWaSBH6jciBoR21yG6JUtMR8SENJ2jYViijwK1EzVg28zRFc",
  "key22": "biMX62vyCUfDV7oxonzWXcUdWNKjpzYbzuMEqsdKRgLN8D7MGmFLe8PcKHRfvdWZURqsq1UNMYvj1FRdEptugGE",
  "key23": "41QfZjnkxPxmRrvWYGfXwnxJqUrLMtJjmNmzcTt1YTidZEVjPJqzEME1dZfXfWHzUZzxpxKYNLE19JFafibKGXR8",
  "key24": "xMdRYv7QdNaquezyzBGLrAwfqqUS1LJejyTAFD8qPqYmXA84okX1TWkqpcoz8McNMZEvaf66BFZAWji94L5mKtG",
  "key25": "5fAt2SdtJGznFHHtRMsmXTChbShtMk564SGyEXhQ2NU2zNF95oZjkfQgrLDihwmGeXXCzq6bWCdQaEsTWecRKh5J",
  "key26": "3R4YpPJhToTK5XqoAgNGeS1mVRvY2xRyoKCc7tksb94UJKUum4euvedPFy9T1wX52XLR9ZPYr5SXW8FALbBz1wXo",
  "key27": "3EAPFULAjtWqJKgGFJwmznvpYGsUUdgjL91ibFoz4tjhHgxocggkCdZq3nyQvMbT7NFztKFkoZ88kLQSR4C39Cjx",
  "key28": "EfHgeYdwKxByyijK7gT9tjJHy13GrXcfgUARDScA8mfHHE7hYZGSSLPz7zH2zDXqDAU2h2hdMXu6bSQzLEoCqeP",
  "key29": "3J4yJkrFeZVwsC2gVKEhfbuL8gx3HWnR1UeWsUaEkpdnhMmAMJcs7X5N3dGMiZE7GZM88hsdXt43fLkBHgopSWHz",
  "key30": "5ZzviRXnNFTAQzsouzXodu72DygwjWKFZPqHvmLrTmqk2ok7feZY5pjpB2FKQAZKJSws1dpDvqZHPwBXk7qh6ayX"
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
