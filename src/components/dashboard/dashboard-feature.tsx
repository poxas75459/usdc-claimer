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
    "2D2KYgJzbyrH6HdxGaLQPDLTyj5NaZN4Wuy1QYTM3yF9vYg1dqVtBjT53NwWwQNPtYy2LJGKn8BTF5HSf6URB4R5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ikeRNm5WixY97pT93w5kTDGsMpJnYZRxSbuyBB7mTGDChwoWZJZo4Cv5NX2WVpVTfz3qPERJqWcdfEqrvm6KdbG",
  "key1": "44VKfqF9qcFgmA6pLnfcAzfhntBL6gne397T3uxbgV7rizcrjtL8sWGry6v7vQqHExdFxAAkKcxyDWP2chkgJjvF",
  "key2": "3eZKnc8sfSrSkeybDouW6tqcGkr16qQmvi7ZNQBrHjBB3m9RGvMkn5fFXqSLbxNtbYDni8vq61RrrrnaPxBmeTqC",
  "key3": "28zaxZZSsHXkHkaifLZwbR9rjD2SELQLy32djzrwiV8QnvjCZWgnWSXsBwSZ2TUUQEx93eN8y5ReiuGRagHPscb5",
  "key4": "5BoCwQKHUCi1TiHhCXy2GYmDwzaSwTTke7Ce7HJtxX2qMXFY2C8fUmXjgg51qoRR2PnspdA5vLWtnSobfBQxdN4m",
  "key5": "4CCiGa7y2Ph4PUZB3iRfFNZ261c8aU3RCQy8K1ymD5r9hToR35giHvwKjNn8hz1jmXLFuKZJ4ptcSEUEhzxHiztG",
  "key6": "67132YQjCWWWkfyhkHXDW9y9pBRB1GnK2QX51ev2JdGkMouY6tjRiB4twMBoFjQbRH4k1bYxJwFev6xJQB5Vn7e8",
  "key7": "5RYp7vgKrdQRL8fL366k1qFR5meZeT6b68i6Qrhti1TA3B3kTUZZk1d2QYkfXkbfECGSV1WrZBwWvcQR5ZPGg5ev",
  "key8": "4wm43XPe6bNq4fCTFVA3nc2szPoMzu3UHabT9oxAStEv1X2vkSbybMe2V5qejreZTzYq78h8CaFCPcT8cKswAUGf",
  "key9": "5ty8iGWKpzBBz5wkVJCGNa1JmNmxeN1V9hQYoPnpnu4N8hUGjykncNZK3cfoiN4gMrYNdWyJtSKrgdyXqTFfmLoY",
  "key10": "DC71yyjaUzziygPur2D4uacFe2o8zHb2Gv2Fb3vA5FgKzdB2ZyR5iUax56FHrTL8CRCNS38dnsmAh56hsYzhKUm",
  "key11": "4bxEk2pw1gTkCtTbmLq7PxP9fZK5gmTiJTt3B829kfoHuFDv8fQLm3fNAeENr3dSJTSo8iah7funZRWFjSYLnj7P",
  "key12": "XiLP2ZfLnVafAvepLcjkLpYyWKYPCBWx4SdtApYujurM39voB9bZMwY5S1hBfJteKMkL5JKGpjVCpF1wQB3FJJK",
  "key13": "2Zt8aCPkktaQfDYrNkrtBKq7Sd7378kwJ1cgfubDQA8KHcZKP9RDR8pX2r8x4jakAK3LXVUpeX1p9Lr3Dh4aL5j2",
  "key14": "47XDEXkSmtJsp9TTDHkPobDmyFTP9CU12JodvGnP2e3UUy1yjSJDtptQEGrgeGHP212Y6F7zwrKh3vyKEq1otQ4x",
  "key15": "Syks9F23EKNjjysAP1dQ8n1xxYFfhCwymYEYwb8PUsWPgNerDSEcQmQYqyBaHkRcaoWDTw2BfKZ8ycefd2Yq8nT",
  "key16": "UXRCi7RDgJ3exQ7KPLpsYni6FyQS3XFptdn4twF9a1DMktBh8xSoQscbqSWnWsWYWzF8f2wwSJUJufKybvsnRj5",
  "key17": "2uSLC9JipY9v9Zs1PGhPxRZu2XrPkxF7Lt61Yyxto54dQC4CT5nYJvmNzjviotpe2WqBjXVJVAvudvpgT2xUy84w",
  "key18": "4oui7C7YAmJx99tuymJwudYfFtRw9HxFiuWSEYGxHfGTTW2fu1bLi6DHFnqo2qHa818Ashu4pmfnZGZ89bzYw45Z",
  "key19": "RxqwVrcG6kw61JaUGDfeNkHDW6mUdX6ifr1YfUJLtKZLgj8iCTVQwo5gNRFrKn6GPnqemknxQr9eB4iqDM7FA5V",
  "key20": "51FTCoxcWFk8wyT54koEDYEDkT6N8b87v5AHMhg1eTitqf4763DN2k2hMNbRuGY9cUyEh9mJpS2fRPvKDJjdK6ZT",
  "key21": "3ZsLyNpbk1a8CKVdcdgc1rtwGHmDSBZ3HmkLWyeSahyN4M3KTX9BGW4bUewKAJ459fmQfKVeG48uVthjzme462Ry",
  "key22": "5be69fczEeYGeNUwzd9qNhVKUK8sgXJ54GedPYZP59MKxPh4GYRcUGUR3PPMnBGuUn3cXf4gcxjUJSxcFfUaxFhZ",
  "key23": "3rAUgvgsnY3nNV5Y8NN96oviyqcoA4f2UQpuJFe4Dj9PSekrtBs8Wvm88xPkgG2CEFFsHvhVUehgveVxmdV6N6YX",
  "key24": "u26sMkGMS1s4VT3BLKzqRDnsRuGnCZLmfZh1NDvWVbyHodEVT892VQzaaNGxAbZDrwccVB75VYgrsuvrbP96x1f",
  "key25": "5bMrjE6x2xbYRnLhKjXKfNbebsuvvJveFyUgDd1DTgMDpBvt2oxNQcUeyRNFMLosQDLmnnhruV9ea8XcFQFWkNw9",
  "key26": "k8vCPEMtDbLNfyhCVkqSBmVsoLQ4Lojcx9mumdP4f8M6fWGAjdX4e64XabEtwb9Vm7Pi6LWro7PWcyzC5UYKS5J",
  "key27": "4V1mrif8kFQm6KKEcyqiCJtPQNFmF66dSdF6x3G1GhfATMrXBMZJVsvRhXSHzUxbWq22LyMqyzWQ2btudVGGqoqD",
  "key28": "sC1NfnzVoFFTS2o1TkUrbquyNpW9HeLirbzMj3yxssHvBP5x2iM7udsKjdivCT7aqCViQGVaLfvYYjH6Q8i6Tj8",
  "key29": "4b4YZB1mxw1n12YbivQtxq5ytu99oqJbHV2kwAoEths1w1yipwAHGdWbGunDwVQy1VQKVnf9bX2L1taeEp2Abdpn"
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
