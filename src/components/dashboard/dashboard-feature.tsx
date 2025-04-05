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
    "2kftjt6izZ9G7KsvJEAJr2kCdVpjcS4Bg5PPRBo8dRm2DghHs8vVpaLZsRd4439khgYAn2XjvekGG4acSBggNAMH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ezHnzy183sfAbtTny8MLea5vx9dQJxcdByzSoqfBMraPzpMj5j6LpWV4Um3bFVoNicSMP14wBecFGgq8tZCZmKp",
  "key1": "s7Q26Mb1PeyUes4X3z1xzaruHLtaxtoPTVQQxWDubsWSvbhUcyuSeKuHevaD4NDzQZHyDPNQXqvtsxAmTb9uf64",
  "key2": "4FHyjdBVF3qFgCwiJ8a4qsYhYwFxJBst6vZevNA9AJ23hDTBAT6dhzHAbvUAZVN41vGwCJJPCNBFpdBuMVxmtBhZ",
  "key3": "5DNvttn4cpd4aqUB7QZdJhcSR8AR2f4dJ3Rr7FNzrG8v9qonByU4myNqtEoPKcgbo3ELBemzr4dEufXx4Rgzqq2c",
  "key4": "5uvVxfiCpPonwZhw5s8VfuKarpg6Pm7RtNiZugNGCJryU58cP9mKcLZHk6ZurBQRFvKhwjeZoXEE6drHHThRjuqF",
  "key5": "41fbK1vfLWXNJyx3Ah9vBfGP3zPiM5beVSucEj7SGL6RCvxe241EiCES5fohQbEF53mMzT7TejiRMd4G6fXXu5bE",
  "key6": "sz8pfgnavGajWbgc57nTWz1mahF5sCEjQzVRonouPjYvpLEbf63K9FGckwhiW7YTToumLMQH9QREW6DDuBpxdD5",
  "key7": "3HW7Cy5xMUwHsSVhUmRHzWKGhN1NMR8Kn9hjCwLyy4xfW8BQGkDiDhWZnkRzxkrhvtB987hqg8avvegJ4tGE8fbs",
  "key8": "4cbJKhzZ6JJtj7MZhZ38AEAk1XuhenqE1RrWtQGah5tVPJMCW7KMcGh488rRfF67psLBhrgjBa4Ui1DstQoYTz4j",
  "key9": "5seDXCLyX6S8mWHHbodG9k6943GLmhcLtf3yg1TduzexhPDHZJAQmzZ6AQGnZMWcs6EtVSx1DTsdZZthsepH9tMC",
  "key10": "56PTVDsHQBjJdzNxdvrYthmHwFqB2KfPbeHzDDGQfbFKZ8oWQEBYLWvUB9PxM7guzxd4WnUjZoqi72XSswwU4o3V",
  "key11": "XfVUKM9KsH9py8SfR9CN7vNqGN3h1AyHG8Fhf4X9Qp2gnjySzAuMeWc598JLLRKdZo3zMeeMHyCjxe9uTd7TEQm",
  "key12": "56TBmGdtg9xWa3pUrkCaTJN3Y31geriy16gN4bt8vP1FbVHDyD4oHmwwkNDoPn72fNrLQymEcmFwQPu4jF8MSo4F",
  "key13": "3gPLtnDMXSfL5JSmzcZhWsxqpkiGLNsG4RMCZ2qouMK47kW5K79DkiXjEuXiACr27Qg25kyrAg6usUtZEMRZHvvx",
  "key14": "2nmdi41dFEeBLSyXjjbjTn21xCt6xTHv5GZPAvgTYenkv4FcinQVYesmvvGKwg8Ef99a87xwnYtYYqmFE394NyCp",
  "key15": "3xK9rEb4qXvsq6tBNipFPBz8v4eSu38td9p2cWPwBwR94mVBrcePzKafJSFkZAJLbfPk315LAPU2uoLbjRFEf2xQ",
  "key16": "5RPACQsJxzuiVit9D93ugX73WeJNG7iLD7FYMhYhMET913rwuYWRbJyjY3UM6xjWi9F92DHvNvoxRszZrYYzfMA9",
  "key17": "2nZUswJ3NYHRGgY4XooLyG62zCajw4gG7J9G8d5nF73Z5JQD1muXBzDiWeE59ddw9epTBBygcGsENp2w6o83GMu1",
  "key18": "57jXrJHvciLSoenPhnzt5pDdjJJBTRNqiFfojZFr8JRk1pkDnMZm4Y6uWZTJXnU5fcHvKvGrRtN8WFypimQbXpkK",
  "key19": "2odwwxWcu6tu54BCEs5U9X8FLJ5jCYJbGtaLTFFrERAZss49AJ9L71WGVyXywcCKN9Xtjb68wv9qUbZdHqRjkCyG",
  "key20": "gF8btVCRpyr9eXvvZXDrcfAdskCtwsaWKEe5WKcemMfdjgvqPjKxc7qTHs9ktoP3ePCsmKkvPcN2SeNhBA51VoU",
  "key21": "21Dh2Ah9zhCxmRxKQSaAW6tH3RY7FRZFGH3X2rDhiet9niGYxzjtLbeQuA7kHv9rQwRtv1WGSg6fbVibVrFgPcJu",
  "key22": "2Ep4n7PAuozUvuyE8xroNFZEyFQcoAHQDxAvEHVTMWyU3HsDDe8TmW41Cvkr86HAcjT7JH1a8rSHMK2BXobdXJqY",
  "key23": "5tnkdRSVNQFBBZjQ3dh6gUuYvASyooa5opWNo1ipQjoujUuEeQZJLvZmX8eKrXBSPpeHC4UC5Wi19yqd4WT7FK3C",
  "key24": "4b32uXG981jMfEZnUhxRgG6m5YYdZAy92KkuVN9frJ5G52dknFjrEZyTfjr6VECJkjx5uLMebwGDfXsi3Wn8caWq",
  "key25": "4P5WcAhoirHuphnoooSC7aMHpLe5h8WtsrbDMAxb5v2Ktuv2edmTUbsUxoHFLGZfBpkeFKPhqAT533KXuCevqY8x",
  "key26": "2D7hK1DF53uoBdFQx5BHDNgjtB2pgXYDhhZNTHDsWrm16tU8ZjZjJhjURf8Ea9KSeQ152kAGFASqRSBumj9yhJcB",
  "key27": "9RhbubJUNPJSNw37DQ4z6BYWg56uazDTEjMQQepFzVDvDrG2GJHRfKRKSKZEWhsFF4H4ape8vTX3wXTQvAMMeaB",
  "key28": "3bwTPSXtgWHHYqigE16Xp9K9ZdQj6FKgHnZ8v6aLTRehxs6L2n9TVRhuEKJdLwTKjPJXCcQoBgcKyseiKEeEDTsa"
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
