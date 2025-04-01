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
    "21eRJ6HMvzwrRnzt4GMqf8DLUym5JB9YawJVkKHrx5THAWdZCGv4Unm53JNmELbTLqQVLNZ68qEFtnhGmLCpfwG6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z4h4V6VxW3651d4qwL5vz8PH6En2GorWKAXxySdRyu7TpFo7n3Z4Ak5A7ecPi98sf6QHKa32LLfRTTyfHdZf3AT",
  "key1": "28nbrQjGGnCXa4C5BvSveHtX3g76UDwNKGmKGJmsmLjBjF7dmwBrrPJpTFfTHQEUCjuK9dwWt3NyYEptbbNV5CWJ",
  "key2": "RRx3NCV8eCZqrYxH72utBJbA1fAps8D1gpGGXANBMiH6HSdP9S7CpZJKx3Ja5aJ1Bv98hv55DCgk7sXHxxTpj6C",
  "key3": "4cHxkn9P4EZE8rLZaX78sJJB36tyzLp4pHLLfRTFPhrvUyc8zxZdc6hQn3otFKiKrepq1gjfSLSWZo2YoDMSDP43",
  "key4": "4uJyqrAyCoh9Yeboak2EpM5zc3kDRhnKiBP4Htg2T6TPfvvMcVJqD1hM5hvVhD4VVqCfXz8AvVvGG8NVitABLWUn",
  "key5": "646prkKdJWWmsdkgwoXope755C6fhFy9RXM5HPibNaHzGmAJ18HtZcp8KkKkZVt67DeotUXYeMeVf62Dej14VrQa",
  "key6": "4JtnJGHTcoX6Xve8azggNhakcXK3s6JtHKEJPfZajEGU1f8MamzPDdLWDcUKUtNWDBZp7CdNXaoV7xRDFXVgPs3A",
  "key7": "saBfRn8NSC9rQJPMCi6cEoCGPvyW6LaoZ3t4ofnpbnc4UY9ugYWKRiivuH7234wJJ7L2AMvuSnUdHLhYmYhLcXY",
  "key8": "2vZd7m6fYhBWBGi9c2Rda5vgp1KkGjc7sg9Mt6WMszTx6A4QUsvKhJMy4octU8rtDD61DezgmRzfTMdkWzTxFpLe",
  "key9": "2YMMowtE7zNvdazzyJMH4UQaL31TEX3xXqasGPoioPVeZp8z7XfbQHwmunxJwhmL7U8mcNkEsPmyrGv8Qj81gNUB",
  "key10": "5PWo8Mdbwg2sMohzj8gPDfnpcc9Ug7RzB2QnpKBgQccfdoywtVBvmyG8smhxBMUZ2JstgnpjHsgoAKewkT2DdRRG",
  "key11": "2WdWbaWY4BZMR1r53ThCVUgWDwTvsMwugcnkMZarSY1VgHWQXJ45bYXTnSxeaT6bXxPUb56Tg6RSvV47BTsKdVRr",
  "key12": "3kQa3icfdCXj3g91VvVPyZ5yWKFLD1VsfP55J2jDXBjo3ySXrGuRFHhit7uXzQY9wYnyrsuJPur3eEavjchB8WtE",
  "key13": "MTffjPnn1BfdMNNcnNv3yKLYqn1QdZjV3Pagk1ZByXExKq7ko5n1jqSQYPH36hd6no6vkABEVAHBgBcQtB2HT24",
  "key14": "5noJg5pfenEwVERo7HRKNE54FqpfgGvLhpy8gNfZHmMM7tggyn3rTuUzQaVpZg5DNxtdwd3CvemNG3gnKrMsqPfF",
  "key15": "3bU8hmiC7iyRL1JWen1EySRTsKrDFE5HBEqYb7LJPAHwjKXC14UXjhjv7oag3EgWS3FzCqaWPiQL8ws2gMdT4hF1",
  "key16": "5y4V3RPRjAtd1GjspaKKostqLzpzGP3cnYgkPv5iSVHdr9PWkhYWvJ3xawZtCAdynNGZqaieM6ip1jowddrE6hwX",
  "key17": "MXc9feQh8Sv6GTYTcHsya29vPVcSEgMWRiLrnMKyA4dHXg2kA832pAfGSnGercpUWr6VPAvixqJhDquGjCgTZjJ",
  "key18": "5uR6BiWfAgXKwbHtQyQHpxmte42j8Vy52ofizqfowgUf8QHwzZHX8uz1oQ8jdwQhPrujx3hyK7SHRBgWkkdmedAu",
  "key19": "pHpED8ZkvizmsaUddtimLohguB15bh9nWHHL8VpXevB1KM9f5TKKjnxc3ebESsRHLzwAuWiP65wXCtK9aahnjnK",
  "key20": "5TzS1KHGNfa6knWW3U5ByiM16pq8vNifnnDvKKaGMZjBSBusojNiBBPWCBzv4Z87eggDzwFeXt7rvRnQcfmTEbcM",
  "key21": "41zoqPznXbj1r8K5CQnNRNtPCaW8o9Moz4zGDw8dVcVPKSekyAGwBFXz5pALJycyhZou2cnqbk9KUrZHcK8HDa4y",
  "key22": "5fQ56TuN7NSNTPjhTu5vAGPWYFM1yP3cAxtSuNjRsZNtyySAJsHKJzDx3wMDLPuoiLCcA1y46ptFGDei1KWNWLhc",
  "key23": "4a4huG9bmMVZxS2k8T5HzsPzomsNShEB9cuRcdt8cohfU1PQCfMyqvY5yZJbwiK7RD69KHaBS5LcD1jG64xC4pKo",
  "key24": "2ZENb47M7Sk3WxiYpefCyarjTXVn3eP8PfpNTjAnwY88mupDRqWqstMMkeY1WqYd1KezN981DhwB7vpxNZ3qykgo",
  "key25": "3XQqsxdf8jmSzMHJRBJfEAqpszAshB3Z1Mq55XnAQnUVW7Pp8E14QpfSY2Xzdy2HZSsd2agTxuKzEyU81oesAQ1e",
  "key26": "56LSMVjXBVgfMYL87j55deo19ydZqNdiykyzywYXcqnhnGNpsLegthQSUUWxcqcPh9rRjhwDBv5ahkkJuw3LSwKx",
  "key27": "4HreVbFSxgLMgZHMAxd4SaKDNQGvH5ejyEa7ABYdrz1pckwz2G9meNejWDhzzSSFHZx7iJH7yyf1girqXtmYJPza",
  "key28": "4RYCK7DZKaRcyakhd5VwMLVu2VQeje7J7oBQ23LALgQQqbuGs7SbuFYJCBWVt8Wi1FQL5Bm5Ki8DRyr9RstqUuyF"
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
