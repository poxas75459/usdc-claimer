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
    "3doJQ367mvuXnRCpCVaqjvYdSnyYwWRdwFcURNSb2z99NQbNqF7KterT5ah4hCTS9M8YjmK6HRKkPh6CUuChhip5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pFbRbEdyB4iLupt2i2qjpk497ZBYu1BLoDGg78v97i6rdqb2hxiCdkx2Grc9a6WGY1nh7R6qS54vGWrPL8XZiDs",
  "key1": "3tQutjuTueEzEUzJGPJY4p2YKzFxzUhXqdn4QBwxk2M3bNthEDtg6DqtYaUv1zCUcLYcwEx6oJWqnePuxgGu7DEC",
  "key2": "znTC69HyG2L5ofS1YFEZMdSD5H2xUCaQJP5cuWj4AMS6jDK3vPNwBLU2T1VGTWwXw6PP7BmDtthhJUaR1XK6xxr",
  "key3": "4NnWXS5VgsVhqyo37QYaWLrRTLctgRBvebSdVJY99xn5JyPjnemrARFN8WXXbyJDzBzqP6GouPFuLHCQHg65Qphz",
  "key4": "4cixM9hHHf4QeYVeCxRQ6H4rFSAHS5bJrbGMjbXMeo5ANQUVMSWtML8Gg2vp7LNEz3DtYN4EYWJcJ8PySx4S5MM9",
  "key5": "29ZETeHyYCitS3QvmUbtgbhfNAWwtkkz8VP7XhLVpnsAnMdm8kVothCBe9kGWXXVfKqycixQjAjQqvLnG1LqcwJc",
  "key6": "5e9CfUkwDvsBqxyixvUnnWxDYK9Gm2vwZHKZcaoazWTHbG1q3azR5uBwJdDigWaafCYzFTBkvTJdThySLcu5pV2z",
  "key7": "4vMz2dvaL32EA3SpCujdmdv2VQxqKdGa8zhycuVFZSWqLFSXo6KQoL58L7hdcUyrfJN7yPE4atEkT9AYmJ3UmRdF",
  "key8": "4YdGEZrvmAarn89LdX2Kzv2ySm671PoLBvwAtR28HjiN6qag1fVLgCzRFBdMDfiNAkLCmFpoe5cbPJRnyPpWbqdw",
  "key9": "4a2wGR5Rx4FzMeG9gSmWh6ZekqJjvarzNrxQGBrP3HfLHYdhCUH2DfHSqmUUtXH45R2Aq1QU4GJEsxNLGvfb9dsA",
  "key10": "2q62VWEgiJEbXJdpDfmn7XftxRUSYwBmhgydu4iE9dJFnFZSnRUJoPNbX4qfe4jxKFN7CTYATuUppzvxvDgwgEQD",
  "key11": "28sskxv6W9HpL1BB1H4WbQDtMCSixR1pNTfL1K4rFzqj589t3hed82sHMBwFdbeLfxoBBBoYqk1PsTSLVVLCJGRE",
  "key12": "tJq4pvDri5fXKY1PUGBAkJxXkCkUSje7iDRGJzcV5yjpscouv2f4vvmapBgE7cGhrY3rPwAS3QHthCzUrMshkfG",
  "key13": "42Nnw1m69z75eWRQ27Zgm5rVaGwvepFdT9vHmqo9jCM6Wv6mR4EZeYTV5EecrAgPmuFmbDFcG8JQ5Na4U9FgidVQ",
  "key14": "5p3Q4MZ8c8r5vJNgjCEJhz4vvLh1YKirUuZd4g4Ps4cDeV26UEfA2Jod9NT97A9tcTHHsZnJmZbHh2KVEs5HPoPR",
  "key15": "4JGrpppbvYUsyd7frK7fwKqF4JSFHF2mS3FZ91aQt3cvMEP8PmW4XpDQZaoBYz8cdzGGTuBUapQuCTohZxEEhygG",
  "key16": "4MEzuCoQK4DeZz1PhDZM1EA1H1v7KmseT1p4GGRaja27uQwFehf1NMqZZostvDEbYfDurniWrAGyo1EZ5xood5u3",
  "key17": "2ViHEe7XGrDgM3rrb6ej9zRgNmbsmyYqmwvdLpW3VuJXqrtbVNALQiHG8SnvhVYYxx4hhgk2ceRPR5ezAcYYoKEQ",
  "key18": "CHUGZryNhfVoCR368M7FprToR5bTGHnYsHKZr1vQbBFPNzu89YisPKA71rFAimf6UTxK3ADBP1MuQa5Zxw2La3L",
  "key19": "5WBxW4roqmAj1au4cVZDFR3tfDPbdnn5mTnvtL8Ethg4pnPxoAKWiCVdQPEWY7URVmxDLf8XgpzxuUMY4L342x8v",
  "key20": "49WL98eBf5uAv3Kxghomx3wNzGfwZvVY754u8gwx1oxZg7dfhKBYbfFdZHVWqNqx4SUZzman2ZSfrDLQeXaZdqtb",
  "key21": "3P3tT46jFixBg5anKLq46AaN3hJdWbuW2Lr6rVsNweuvbN1WJ8K4FJhM3AyLAsmHkfc2QLUzRM56oXsyDTzprEk6",
  "key22": "AB1YkGcxTXFdVKSzdLGi9ZEUQXifN9CnYQJFjz93wNnV5R7kxfAtw93QMMKxz4NWwyhmuKuPd29R1F7Uo2KUBUq",
  "key23": "F2EMEQaM4B6UvW5c2UVmNw5G9AETX3eMTB1TmH9EC9MdWhFk2Mit8iuryqicy37a2AKvXDzuu6z9mueSi8XLiqV",
  "key24": "TiCsoJcgqNBJaF7NXXfY5AKsxik7wWi199QYYv93kCDz4xodf97Pw1i7BM4QThZpmfESkCtoundrTDoSJUjRJYU",
  "key25": "5eq86MbNmcxECQg1UPkS9AV4vxNSpxef8ToeARdPTjyKtKsqNrTyghTNpVWHgAprHoHW8piMcaAZjW5q5MLVzV79",
  "key26": "35y3tjmmHoDvJprP6VoB5hJvApcHtKN3T7KN6z1cQogSU24WYtabnvZbjoQBMLuDKGRuMyLXb6j4saaDhcGGsma2",
  "key27": "4Gq2rSNZJ4qXZSERWEYCwddp1K7Kh7xeshuHy4YgEciQBCLSLA57pZfxhaQeT5B73mpgD6oSoPyRrsJMyhNndxkF",
  "key28": "2qrWtD3b58HKybFwtap4k6zKyn31wrFFJ1xuofinS1Lm1DXq7dbVW11ASrzECMcZyDVu7K89ceVdntCMnegBUnBP",
  "key29": "3gVqYpeVEGcBfwu4F18bbuh5zUaYJJBzsnLsgiRty2necYZXpHQ45xdqxXkhuJgE7y3woCLsMW3A91vNnCft95qn",
  "key30": "3U9jdytzMVEqL65QW55oRyLxDeCKaMD97oCaQzxm4bJ6UvWyifHDjwwaqCWaTUne8eb9F83RJ995ZpbaNiPFZZyd",
  "key31": "5guWXb7ciq7iYN9ah6EBLj6Zx82fdkqwZp2dJWJGwDoqqfx5CLnDjRUA3QZjdGixJJiTHMb3c5252AWzMhj8y5vH",
  "key32": "hF5fqBP2bzPdfpooPbRxrywBZxnbWGXyvGZgDAumiEbkhJLfrtEZAaLUPvUGYCruAgQrp5D7yZjULdUqLpFVhTb",
  "key33": "2NwkrfXKp9SLrNkZn7UbMSyrGzDeSMcBQpr8sFXz51JKtGUZ5LvzEhGNGdFuZDBifk162rETWJgw9DaBUGwuPRg",
  "key34": "3cquqb9MniG8PsMxby9zQ2kNWQJgpvqSzXa189Ge4hnZtFebBgYToWDrQbtCofoqqtBJBogF7oSUNby7uQ4zU2Nj",
  "key35": "5Sw2QdyYrRkfkZ3XacRwWEZucbqCiKXJSJM1MEJfZs46uyciMKRPk7hahgVBDray6tKJJ5ZpXd7Y8ChhPorrhKYx"
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
