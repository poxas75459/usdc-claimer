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
    "DcSgWA7kP6NiRPgbhNTotAxTvcGiUmnprpvS5jv9ABYUt1sLezgrrvULXJCjzK38TcYKmETJv3xCjGAP1YhRHfp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U2cJtpWbsztq1ADZ5i5bc2XoctfqEmyXLmoSGD1eJ2xVP68wAQ7RqyDKC6s35hUaZpw6Up38feshNt2LF6ciTHx",
  "key1": "fB3rjviWwRBJmj1S4EsCQCka1wEy7iFBQ9cK3b8mC185XDFfjWQ49YbepyCUjNQ8e36Agyk4gMyAfe5W2psak3R",
  "key2": "5puFw4TkvRfxVURWRj9j8BYP3oXtodNgUSqzTRk1P1q1YimjARJJTYkZfayZoPV7Y3pLtV29dcaRftDZL558MK97",
  "key3": "VzA5G872jqKDRoHcoWMmL7g4MkGiEqYYJEtJkvaAmY4uDHF8A2hdDZKXpuj96mDqr3w4UCzsAJ8PU3jzp1RkxnK",
  "key4": "4joZzN5Psv1FM3MgQgwWhkik7qVFFSsEAHhVThZ4v1nmWaUekvaNvABPAiUGqAmvUQ28mW1HNwRUumoCG1cMjmUr",
  "key5": "N5DqjZp2ZvNCSuHv8xqEFqDQLDZCpzxLapGZzh5oMt9Kdfrjbbt7mWiSNVPQ6o9Mvmrd8krvpfDPuxTizKiU3W5",
  "key6": "5b3Br1QT5CwDnKSR3oexZFcCQ9KYSuJPM17sAy59hgXz2b2MEYtcGX3P1ZiQmQTqyGpoMMY83qrFJ2NApH1nMgua",
  "key7": "5GA899gYRgEEAWqEx8NBN4nJ2PGJEQWJPV2CeTVgeJw8RsQ7oYZiZdzrmjFJEAZXb6L6VkcC268KqbhZ6My8cbQb",
  "key8": "5BZhgUQXbodopRgyfRZEfACNnfiim2fUY1mXbDMjD3PWoLaqQJj4kFwijS3Hz3oUB98dTEb7npccoK3mdHTg5fSd",
  "key9": "3vzMJAQ6V4C478gDHVDPe7NX6f8wEoXcwV6soM1PVkkUaq95acgBj4VSftg6f1AEVU3c8KZYpuQHec7eCCy5Kvmz",
  "key10": "LGnxzhWfcBxADz4jEaKmYZ9PLyVgaAwQngemkywLMJNeKjHMTMEQE1192wHb92m6fAiCV7GBwgLWQmjtbzD21cB",
  "key11": "4iFe7anRSsAq6wbKyRSwGgir1YpmYaXYbiVzgLkBCzaHHk7jrQ5Vy5kKrCkNhsMJKibiDQ6uKqD9TwGUHR9A6Tar",
  "key12": "3wVwaJD4Y7gbYCAR1hPtVFZFDa83LXhirBtqxKBMBANB4FLU4cAet1b2krsUPVZjCwN44Cukak94Jc4xyCo4KFrT",
  "key13": "3qbcfTFC2Mue2QGe3j6yZtrTFaUVb8FVDHnsbWHaGDGhWnTAfWwESYkqSFipvhvGncwnSGbq3y1LZ662JLhpMjAr",
  "key14": "2txD1YigZwi9rwxgy9yX7otdAu4s5do17qoL38sfKLydBGSSgexx5jgtMej1ooUhYJVyzpw1CyiruijeshT745zq",
  "key15": "5tzvq7aeSh2ri4MsmoxdK2FRYDXNh89EfGgCo8upqdD8n5zujEBuKq2So5omijZdJQUn35tJpv3dsGNLcuVfTTpi",
  "key16": "53R92JgLV75nxh2X58qHEMqdqY5NUM8TpVY4LVsVE23SHNWKcVueCbH5PMPRqQgV5fQ9Q9n2zk7qdsh8Npnv7KWt",
  "key17": "q9h9pKLSHioyDbs2dnnhZG2EzwYVRG9gwKRMA55W5Qr8dULNVA5hWM6dBSJ9B1AD667MBxntgtf1gFuAVcfzeHw",
  "key18": "2z5mcxN1ocbL32jwDD7R9om7z2iHiZF25KhqCEX7cRH4CMrGX9Rv75CLRroVMqjnXt1NSC4c2rTGCnnsSmwN77Zd",
  "key19": "4BeVX1rnSbpSk98wsJjE6gHdLMhaBNLfx4vxs8wQKmTUS3FDeyL4uodtz6pM1vkRTmR7nGqW2mkid2Lff2uzUUvm",
  "key20": "5g3ndfLFtRZdiifYPYLosCnhKH7RJvQPSfDhYAu6iR9rgmFa7LBTA6UPzhux16gd4PnrT4PbwmjVw8hjpnsV3FHU",
  "key21": "2B2zjJcFwoLibTWp1eM5cz7R3bxEM1pGMDW5FjbNMd1VSWYMSoyRMXEkf34rcN3vEGGkWZn9ok3tVE2GeY7CWink",
  "key22": "57ay8TWDa4xe84KUHb3iMaU4sRLk8NJ8nNBxmaiMRPkAwG7ZC9ZWs9XTV5CC16KtbhrytsFg3aUBK6t1AA4Qnoau",
  "key23": "53mRtT42abfku96jTD6DAa9gDEV39RLE6CaqUkLX3cMzg6M2A3QNTidw1QT594uFVLEpCBYvW7n83tKBWhdKGND7",
  "key24": "5F1QitMWYYANfEvv6Xw59sdKAbp8VEReYgqkbw7pR2uw4zcVKTMB1JT8aqrcL8DtVstQyNu34WrFcqEe1Jxpxe9G",
  "key25": "5f86Go2D5q7rPHXux9VBZzg33HeWSjF8mkLfKuyZtGc7J6kub15cii9qWrJUdFV7gFAuH1NkWpjjc93oQJ6MbyGE",
  "key26": "5VxH4yZ9KvB3xynQC4aQVXb4TTm18EtRjNhrNAuiTgwCd11KJV3pQigF52Q4uscUzRMthi4KeqK5KPdYrBeJprWL",
  "key27": "eHGaK1bAQtzoz56Tz9jhem7ta37MjUBsagvF1jnZXZ3JYichvi7YfTNA4vRwziaHiiFDaxzgBYCvePFJvDsWRZF",
  "key28": "38j7wyGvrQN91KSuD2B8tvfWUGGDSrZpnVL44XWDkwPTrMLs9H8k1G5RMW9rgJtmTf4gjZcwPsgCuPEVJqewScsJ",
  "key29": "5DmuLkWGRf1Q3xQvQVLqBfqjcGqUdHBausyobBsYUfQDxu7rccbfzkuGfUUaA5Xou7kdA3aLKKvBFJjUXKt5F71n",
  "key30": "3fK3vQffxtrLswrBSQNBvp1djiRQK59d5xB4afyxDJWrRLaecbitReHTpH4Lr8ki5eycynyJfvvsYLwRvjhVHM1M",
  "key31": "4eYZwVvvUrxA7NXAtS9aDeN4F6hr2ape12qajcSBQ8fQiawP4aqP6vuYfk2WS9xXZbVpxRhY212ASCbJav3EPAFC"
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
