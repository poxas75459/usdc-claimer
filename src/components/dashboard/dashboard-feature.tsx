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
    "5i6VU7oX6EuBz5MhoMYFLq7bqorrLLCmnkx7W4S2Z9xToNHYB7GtFCWyokvaZqmwdEHnfL6wJAm1b3YXWwUDvPg7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k2sdszn3M28YgQAUvWGzzTAtQzxTDkGZDS9pdqXv87a9GhWBYXBSvVJrgBjyx4Co9nX4nGXb9SfC4FPT3r2zuJk",
  "key1": "2obwtyfQGUqfbEgqDAP9wUtvwdRi9XuELe1uT7r5RdtUd8scUegBWpVbxiJbSo1zCZDguiUjVwcJEnk9xoBy8JSP",
  "key2": "2Jd3DhJrLLM8yz9B9QuDmzpARQqGYe9Z6bBcwBbn8LXBM8SDmUKfv4vpgc8F2zK8HugFjXGuLiSryw9KBWsfxX9i",
  "key3": "5W1VdCcQ6bF6HgDWF8NkL41LUdm4UFSR3w9FCe2TPt9mxYh87KSUZqH1nNQ6q9XCq3DfcVJjsMGXPu2GDwN4P2uu",
  "key4": "f8kcLGJiA647Sd182LZs1YEXLe2Xay6LUU1RMJZzC3WgcxdrpGSJ9XeDZLCjVnZehfSzeBEkhkt34q8ugNZQTh2",
  "key5": "3XnJKKUkLWDdNRMyeTFYubUjrGboXao4ccDfA3P7aMUVMzR31w6NdbHLwS1K1qJC98W5VV2omNcV8TJCqB2oqzFb",
  "key6": "3Nhc8d4Zqgd7TMVEiebkpcdFXoat39rDTYMLgbZHGLWpdWMrJ8oUfd6chSLPKFGgPGC5dMs2CK1YTxE35bQWF6HB",
  "key7": "FrxNwyfYk2YtmsG2iSoUZTWgG46UJMCTPPPeHTDGW1iuMsoGgGU8jwJBCC5JmJtGmGC92yP2vjwcE6mCYcqXNqa",
  "key8": "5FQab8mJ6kAPHTYiNVxPJLgVY2kMkQvgKCbnzAZVgsuy3rDgLgNrrCFjJR3DmXdB4dBtdNsMa5zxjv8vbu8zWYMM",
  "key9": "2gct9rM6CyUnJ28d2M5bq3iA9HhpHT7gnMTgeTCGgni2ag9xSAdDnmrKowEQsB8BC9DvWXZZn3EYZVw1EW3u1HfW",
  "key10": "4oAmpuFeCbqsBb8nJHPX2kx9ZkK5AvE48PbKboNxCyKY98FdcB9U4wmKHE6zPRTS4qs9xayFss985NUWPLwKguLU",
  "key11": "2DsT9H8kaXHWkXjVfMckmYMJLzB5wszqteUBth8jfwaDMbzrDTaLn171AGAs4UtHh4vL9UHXQfBoadzKERpkxmYg",
  "key12": "4BxoASwbjnjnJV7DTPquZFErLzJdkKoPgNnD5ynKRc1mBetDJaRpq8YJNWc5LnmymaVEtrandx6n1ohWEAYSmSKx",
  "key13": "AcTnepkaBfdfVdEQYu8pbbFPDyydvaRZbdpkb2YSx6RphAXmvrKnbcxnEAXWCk1GNgRUue1f7pzXQH1RDEd4o4N",
  "key14": "54wtj6BzvYpEN7Tqr18urRU2tHmvf3aTxj2TFmuMxqEcLcq5UFtF76TMeRLNQwEmintRmdns8ZYXjNd3PWH28rcP",
  "key15": "4sueqpz6CPd135yY1oR5Wd4raFUVCPB7a5JoNrmNk4WoPcN1hjoAseGtDhTid3Njg7fnhxTWjkxKjszd1e3fEHCH",
  "key16": "3LybjadAd6JhWvCu1rhLNt3R9UWxgYtaCXRp6XCwJrNFSTrv9MKXZvZEabxGJ1i63p8psHSVrf2SDJ73XiGWjwiN",
  "key17": "3HJsMqUHBQ8tdT53DTLJ4J6UgkqYQbV9biWB4nvaerZ6tbTXwAeSLSCdXgEQAdTZR5mGRni3jReq9gC1U9aaDzk2",
  "key18": "32K896oBwoVFBS7K6xjGtZXcLwYRPW2KPuB48VU8X8o6Gd3gJjoARBBvJhKHL3itCPwSPgdQtD5f42A2mFdioYux",
  "key19": "5wK5Tn49qaswZbBPHsb98BQqG4hgpR1fV1RiwLf8dwfAb9JukJFvDweH9gbNUUUefZSFqwWxb23WWGm5Q7i1B61g",
  "key20": "5YiZCYBKBqWCfAP8CFWqk22nKP3TpExWgef2Sy2TtzHBdZzH53bWw183VHoD6F68VrTDyKPinN7feetcFowYgEHe",
  "key21": "2FEhzXD8h3KYk2dn5put3bykVrR5H3zzc6QjB7M69ZUSUCmzSGB48MC78K44AVUWkNptJLud2uFJRWVdKV8ch6kF",
  "key22": "hFL9jo9WY2wTBTVtbBonVC8knpE25WifKT4GDQWhgyQi9rfUKv4eAXLMWboJwnE128QT8NjZqXCDSACpMeVhc1W",
  "key23": "4N2bVGkDb7gV7PDGrEKZCeikAg7PFD4Fv3UADAtgXkN5kSbe8K3hgebzcBZobRD6Ycee9AANx512xo86KqTyhjtB",
  "key24": "nnNQpdBX4cWK6agArX2a8dFj7GDf48aFhqNGphgettF9HGQye2VrvCmynjShuUycuXWrnCDo7N6LX5keLHhmSa6",
  "key25": "5hsy1vGyFZMnt6oTd3utNZ4gFqih7E85mGwV69q9McGj5rrVvTGmgicHE7k7RfSYnvqoQELaW8PFXAMf7eNbPXsD",
  "key26": "5c3TksvTkpMzXimb1jt2tkQYYd2Udm6JYxFMKADsfmzMeBTR5CmhCTiBprynSAK5CgHQwsKrMosK1f5tEuzGSuJ7",
  "key27": "29BHCWHi5gUzHrpBU5KpTEwg7quJ9YNtN79dorBKg4SQgecf2z4JR9CJT7aR9EV88A19T79CMKbQEvBnTtvrvEm8",
  "key28": "2KWnUGR9QmPwU4Y5aQNFn5pGz32XLwksMjepVkzSr63Uw93nLMvrctd7igRR9yT46zMkF3Z2V5hphn5Hz438z9fe",
  "key29": "ZqTgx1JefDuryW5q6hTv8Tn5f9JPNs3ehALiFNRJHe8CKxbXpGDta7YZ57KYuQ8TjVfJYgaQRms4hbn8c9sHuL7",
  "key30": "5LVE35FsbdwJHtzdUTXYmrBC44APErBnqh7CL6UmDPmi4adThkSb2YrWjQExcUCDA2H74zobrVEeHcMFroX2GcKh",
  "key31": "irdy5tYdUUw3kJF8cqHSdvPv4S7ERqi1X6dFSbN1K63kvno4ZMRK71xQoFgkmeqgcVnscnXgC1hCWUjKZCghhn9",
  "key32": "27oHHjL6LLEE3mtPdWoBQenZ84PYKbASoXPTytnfTr5QWA5t4sMSwxNVU7Vp7fgRdMFtXh3cNkp2XruTShEXEZFH",
  "key33": "5iskkRacCfwRUFrnauhj6eGvkLYkpQmMsiX5GCHh7V2SPyFN8LYvtHQq9beji6d85JCKVj9LbutaG7JLP1BX3yU1",
  "key34": "3HNAJ8R7rm4tvPjoCAYb1aXLD4J7Qu3PnCdwUV5sUm6jwPUoeaxUpkGQBkA4mG2DMMYz8tsFgqz2UVi6aQrbJt6B",
  "key35": "2fAcqHubYHXj5GkKSvC3n2r8iDvhYHE8P2VRCBwgFwoQG6Vu2B6wWnF8heosB9tBsT1gvguBCLvsLZKfyRonegyz",
  "key36": "3BEikCyXpn7g83me5mdSY4WGD7W2fyhTT4T2qM24Q7k1duGnjzQpnB5HLBB4djodr1Y3pDbaHVNffHovHiriQgb4",
  "key37": "5aSRodzhdY6FH4GrEKV7idandU92dSKARWyQhrcp8jNAvXaWkgE1M6hMPA3USDtXz1VufgPaW4chsSmXVWanB5tb"
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
