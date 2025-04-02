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
    "3LsfZAaXmNbf3ndPR2Knq2wb9HC73wdNu32dJ2Gh83dgUe7PeuuAJKB4EYH7LWhjLS6n3zgZhSLfiRTUt5dS5T5r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WGkbfJRYwobQ8cKry71oQjBwmw233bJLWjLzJd8JdVsDHuw3ANczJt1R7Dh3ifiKX1D5uLJeBLjkxGeyQCrGHBj",
  "key1": "4E1tAXSus1M9NPajkQAtLDxuHKPt6zVFnqK7noAae4EYAnzuMB2dskaF3QNNEdizLSQ1xe7BuvSbRz7orYqjXTJt",
  "key2": "5jZrkFc2uGkLdbo2x7cFwtAV9QTDouysYuadQ4ubcu7GFqi4UTWEP9YZR9JdFiyqqJNHRdzjMMoSEnPAEFBC8RYw",
  "key3": "44ShjjnRUxzvM4iAWyNZmH4whGKzzKUKJm1K5jW6ngkmnRiXizx5raTNEXApMcPWBoPeJp5LYkv6pNqRqu551Yc",
  "key4": "27iEPp3bujgHEkAL95SMRzFuvXVFpTTGA2Va3xKT9tWsSVAFk9M5vcMnGChJceDUNECHya2JFk3nNJwiseqjfhWc",
  "key5": "228M5TDboUmbUMkfyqeGHyUdgmAxa7FqEnY93MLC3TqbamT4EYCWAg15xUcke3FctMob6jRzM1Grk9M1jF6hefTY",
  "key6": "3WW1tb9bh5VV4QnfZZ9HvqM1hLjwouo21dfZAaYF4hKN7Bn2qmsGSMxE1z3DhzbEfo2kc3ougcNVuUoh4UVwGd2B",
  "key7": "oU1iE6aSky87hHxac5c7ANEBuei3ZU4EjuZbv1wWaDeq38WDiG9Ues65UkzNEmakWiLWskrjSbChDo41KJh6Qwu",
  "key8": "3tVSRihYQMCHsVBrzNjq6qR52mU1ceZpULPmGcjhYxww1BokC8mCz9NS2a7JQJ1KBUuCNnEPgm1f1o5STLkMb1cY",
  "key9": "HEtj8gJdHwh3Sqm8t98hRP9Kkq266M4wxBb6TuEsoLa1LUKeHvMeMj3iuKYHZ8oNxze2UyKWDx3ojZeAA26Xa3G",
  "key10": "4dizb7BAFemLXfDRHa4Kw6uRv7UkzJSTTD3qYT1kxxHFBsyxDrLrdaqTDFUXWL4m3UkcPMgoQ2BA2cHwaJFdiL3a",
  "key11": "4a8cB5bJzn9xSETduW6UGa8r4ACC2k2oce2Hb3Ptk7AfhXmh29orSw8mUbzJCSkTayX4EHHxpkSvx1J1QUFsJq2s",
  "key12": "3jp7WW4onGB2MmqRbdzZYAKrFhir3S7WhhJd5eMGCvAr4WujRG1XGcTkWDwxa4R4vF1S1ZyJ2pCrTR11GaEk522Q",
  "key13": "4vi1moRqFsWHEX9UhwmiVP2aNTMuySPusGd7Pxh1uTSnviQ1s3pdzzW5WD5jkT8YzWeS9pnAunWf3v9sHN9gH2Gp",
  "key14": "52ajAJN1nVmUwYn4hH9gyHXWsNKVmu5yNcqekeEgBeTtfy4qtspSxZXsyCFYzDdzhiWUXMvyyjxguzaedTnPQ3cN",
  "key15": "3gdoJormtRNAivSyo17kxsbX91Xmmt1ez1U9732pyCwYBfqtzeUANyA2f1ZmcmhRJ19JNNYp8FyuXUvcPwzqbThe",
  "key16": "51aPj5ETLcj9qLTgWYYpDBXGocxLtZGWLThYyP4J8h4mhuktjiKfsksGqyFqu4ktdjVGLvyjMNj7Vfry6DPMLbTt",
  "key17": "4jrDi3B4BhqB2ajoL7vET8hkTPx1wXkYna11L71JZu5QTBnkB8488hVx9Xutes6F1bi34NdhsDt2R47ojMJtPY3v",
  "key18": "4BmwmPocLBdUKrUjGk4hMfdRrdZnf6mXyCrw19R8JzaDk6RsCdbxJZD62uWQg7xdJGyoTqnYrMn9wFeZS5aaFQ17",
  "key19": "5QkyK9c2grxnS5CEfah62YvjboktiHfNCuSgxhqLTHv1nbtPYkGxVgAH45F6RoLmjgYPL9awz69m2d31LoxzpFrp",
  "key20": "5oU9TeV7oLPZLauqSvDp3mSN698rcc623gtgsXoymwhnmHutmYndn3aLKsyRWoCGsWKrjLKTkK6qKEjYyZ3XnatL",
  "key21": "rmZdHzRkspZDEVXZt3PDJLmqjCFhiizoo4toQwo8AFvf7ZSjjPv8uiZi43qewmS55axcXcPXK4yCPGDnMyosGZR",
  "key22": "57n6jt5jZHs92di9e3TAJta5tav3a7k5YVe4KPPpAycyunNPunWYin6nBBWfjbiZLhRorqnKRiRAwjkviJhrciBN",
  "key23": "4rBEtYxf3GWhHb3twTnjqXbksuqstfQUhv4TefRN2pLM6Yhoza3pNzKEc229ZWF7sHuBqGHCf8LSE6nJLXmie4W1",
  "key24": "2EH2ygMtFK9BhyaBz3udh6K8gVr6DXWbPq3hJMGpMEK1Rq7RipXutb7yo48Mpp8oXCYrD8DfzxkGrHv5x9A64XUc",
  "key25": "4SYVw468v81CcE7R3cqgmki19HvvJHhgvJHXCTjjapzPWQiZZxHDbBpMoqbsRcDibkRiMo5mwh3HMGdutgA3PEMe",
  "key26": "4MSpG2ReHrd6XNXbdsR8Y4KSeusGDX2AvEz1cU4gY9Fr647oj8xpCj7w35xstmc2VSLY43Yzj1khRpT6JeZumZdP",
  "key27": "MtTnw2B6tTEPF1oLS3dW1crFn95JV2bUDCgd4HDc7Q53pkHkYAUHU2SSBkGUWGUW3dGNMoqpAfL5gHApVuxA7bG",
  "key28": "28V1sek4Q28rrXybHwLxkwvvgMz9J8NiPedFf2E6agjF6Gq99LxfoX8BhF7U8BBxbU5zdvmhq88GRpWccKcXYBx3",
  "key29": "5DJxBZN1HEKbh2pdMP6dQHiXGdEV81j6V6bENDBzri2wxuDtLPA919QwxqDNxbbsVign7WXfrryvi9BzSBwYyyBu",
  "key30": "56MCok2cEsfrJXmAFaVWoR3uMEdT5YqSyHfkDBJjkKbVRm12yG6w4NddZDiCAgSghAeMhKCsjGAGevZDD5pmUGh5",
  "key31": "4YPRsTfh4t5zJ3PA95q75EPEZLKh2eW323iNxcdytd6ar32XkxrGxr4GfY7jWLqXVpUv6UpGjGspbY1Wij7zBZdB",
  "key32": "5nksV1PukSdCQiU2AqefivPVY54FPmN83twmA4Bibuag1AAioKABmd1Qq8Jcbb8tuiHaSqTHHJSTSTgrK3NTx3FH",
  "key33": "573uRjj18UUSwn4HUfH4M2HuNfLHexz9wCJugqiyVbPnWDq46DP7XE39yc1ai3jYKLRTWLwwDRyepBJ7W6fa28WM"
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
