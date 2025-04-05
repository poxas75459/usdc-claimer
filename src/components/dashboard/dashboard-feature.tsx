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
    "285Gdos4YTBxuAVgRRrpnrbBeUjLQnWryvYD8zoVscRnHAj8PKPwstLHJozSS2QSriiX6ZfWP5byVq9doM2kiCj1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "spMx1zopaZhGW9dpdD6fttMm83qiFeKSiHYeujW6UxYyC6KAmABzaZ5sLRJ4WNJ6NHCVwRfKeRfpfwVCexiVTTm",
  "key1": "3irn2P1XvvswPwzUV5tgyKUnoh68waUtdzAC55uCuqUuqXp3YJ4zudLBQX28KhfiGBDGxc1BPjPGt3dTxcVQGMcw",
  "key2": "5oXFjEWV5KkceTPxJsD6uC9bC59Wu9GAT1939Wbo3hKv8P1wufG4bHegoDU1Jmsh5sYFPR3AcaUHAafBkkpKnT4B",
  "key3": "3vhfBxnMc9SVgjLrQc4hn5cPA24TkUiuPikdGXfD5FcuH9JDgCC51VsrgEUXL5JtkmCQkPy3uEgAN6D6LzLBV6gC",
  "key4": "v7pPgJrPm5t6sZEfn26xm9RKzMsxtwVRrJyHawBRZY2nP529dDdYGkqiZXupD8PPFZUpLoEmmKpikEMEby5gfJy",
  "key5": "4hfA8Ud7UsusPkUkANydqxYxtLYgfV4c8xsUAmySnfnMRBiuquniC9zcTT46UtXLKJLNb8ahfYg2SpMTcuKyP45q",
  "key6": "5GZhHdM2FP4uBjvfgBY8r3UYwptdzkfhbKy6V4WcMHXSkkjDdTEtSj82AzEaKkxYx96Dpv5462xZtkzmpCXiR3aM",
  "key7": "3MKkLdua9bHUEiZNEc5mnVFRtVtN12v7fZX3FhTzG4uYhNSjBG8hxq779vHKBE3WusJeaVCccpPt4fp53yThsyRb",
  "key8": "4F6oxaBRCmQV7pVyFQsB5tckwUHy5w1UYx8cRAG2XU3aVGC69Yro5676fvjeGAjB42n7EYbLqszNhTeLZYfPQrtw",
  "key9": "EnU7nKjgcNaP7KqqYVHfxVqCKdzwMckGDgceJPGk96f1WCEf6cA3XTHTzVcDEwS5vVjvKp7PDffGVAbZbnZFszP",
  "key10": "3PTknw4VxsBGzyCTTRrCVkwYGjMhdJq4JcZk2s58Y5AcJYP1B5o4N8Ns1xbM3WipWQ6dTTKykKpW7fXTZyFXrY6q",
  "key11": "5EvXiHvZT1WGbzC21PoLv2DLz8DZYSpWK1Uc64n19QDuprJyceawtFSAVjDBM2Y57erF3P5WAdbaQ3QaDGwmi8io",
  "key12": "25WFLsaLPX8krm3R8ZrMvUbfCptAd1mC89avYAKHdwX3JdSPyFsfj5Z9TGNBFEPBiux5pHCS1PzrANmzvCt2WiMy",
  "key13": "23K4VquPrwFPYgxNjPd5J7SWJrCRDzg8QTg1ZftSBFo9cnJYrT1wW8TJHG1YrTiZMXT91ByAdGdho5JkuScepVoE",
  "key14": "48ncMH1JDr6YFskzaB9PCuZY9EinjhAsHCjHfWEQFcghPb8jpZRhxYycf9bLV7gUHJm9uDqbjwNnRovRSZMcGZ1B",
  "key15": "3X7VVbMjyXKstXUs1ZuePXSr8f4tNZh2tdxztdsNJAm3msDfW8UZvfMSYAhmqSLSguCE7NwTgAfoMUFKbRHbeZQE",
  "key16": "Szm3qWVMXZpM2pysX4J7aumr5HuvFuXMmMsoeLdY6CAgxwypV6jG6BE9P43EbjwuwCSJPfB8QyDzw4SNgPf2jkz",
  "key17": "2svNaEQcoQLX7TZrjYNZKj3nZSUz296Jt3DkcRyj7PmVGQHnSk453s4PsY15dWiTKBzKvYRKRHLQTv55uj74ivtS",
  "key18": "5E4Xn19tJfUpyBTLSvudGSQEQ9kxWdvnxNcbTtx3t7exsrVDq7Mc9Kg9aavdXmEKkdoQ7sLEXCdvJMcnzsRV6hzp",
  "key19": "5fBUKkp3L9mrkGqSpsHgGCPMssPb8Rr56PTEQ2Nh1dRD87cG7sjXXscdxAATqcRh582YzKqupfRUWMbtjX19wmfh",
  "key20": "3sYHgz9MbnQVfDFfWiy3QHMXPk1f2TXbigbcaR6cv3w6iDyh9Hwoi3HyPkLVHmt3By4PqyCWDKQ56soejGJW2bq7",
  "key21": "5Hgqcs8a1UGdNeQT5Ww4zpeq3wbZzhZpMdMheS67NqEXngiGBJgQsMJBtQXcWGtL5ecE6f48okMYt2xXcMiffYNw",
  "key22": "5YbS8mfJmUKFrysQ2H9DdEYjwJ6KUnPkMtL47jBDFEP8vGs7iW8Sg8sMJCAmcJUCyG27XUGynrcCkBLPGru9rMn8",
  "key23": "2tDQ1qCQnfTDrKY6Rv17m2NKhERgxBwgs43G5q7Y3wBfmqvkEm4j9bWGfeAzMWaYE7JoSx3ididgbFRNtvVWNXN",
  "key24": "4KrFxqn9PURymP6iWU7sz56tZrg6Xi1ABs5mfPG7FPfVt6ud9V3vZRBCXbQKDrkgXWoYiPmRqn8Basf7KMV3KNux",
  "key25": "4c4xCua8o3pKoRg15Tjbs7mLmt1QfFfYN47pU5RoUDACsoivsr4HTbhMNTQdKHztfvYAyQu8qCLsPmYHgQzkjCjN",
  "key26": "4A793ZczjabV7VHV3Pk9asXfEAuirv6nKTqANpTEMeTvQRLVVJcD5EGGzQoUWdy6cLwtfAjYFE4zA4eWb7XwvZDh",
  "key27": "97EkXShFwh4eKRjQRsMxRi2DSCAQpb2YRKS8RqxAbim9AQjr21iHTU6Sfvw656Kwx4fV7UJKFfMU3wnKt62keaL",
  "key28": "aF6Lu6C5cz59bdiPH2ax1Twzj6yo8bcoZynQCXNJLfLmpiVqSNHghTnSMP7noPXBsbtFQoZnX6RXRDXFkroRCcK",
  "key29": "21PSTZptHNoYGGgpXqTFBsnTfnuAf4wV9hK6nPLcXkFr2z7cUsFGUgB5bFxeFY77KUZj7EjjtNpKKwGPbeMbvpTh",
  "key30": "4qL9hYkg5rAQKk79z7agQSKKxWFV4HvTuuVDNFBD5WvQha2Yg8b7YwR3XPcJ1m4P6yARqxYeQph6xm8YqoyiBx4n",
  "key31": "5eHu7arJvwyia1F3a88cmv9uXBAJuWbSqKxteWDnzqZUfqecSmTx9JBXUcvbpgoGjL7FHP4WBh97XgpLCDu84w8w",
  "key32": "2f6DsLXkt7rv8Y6i1EYtGwiUHEwuBpNc5sR6upBiESrt24yGC6Rk5ksXjdrYa2xAqnAmrGhCTX3dPMNCxhmgwCR9",
  "key33": "4s1BqknFB6UKDCQEgy6MN3tiVyRdNw7CfksfQGwcTZBYDUdfiehG4hvcoF8PNtV3Z4NFTQEESyeEFsvjNSaNt89U",
  "key34": "38J5uinK5bHLJu5A1dtvsp1RAyvMkV48qVUHx7pk2QrMfaTxVfWcGmw9zXVnWJUfJMjRoSG1cGTw9XsefbapeMiD",
  "key35": "3vWck8Xeq4D3pza77nfF8FA3ECLxx3KryiLg25nNNAqKUZcMSrgfwCg7wTdyUjzvYxD5TeSyWSN2Qxz2STJQRsjk",
  "key36": "mMEibjdc9GG479tTt81D2QW3Vrwe1tYEy2yqvfAQg5xp5o5Gg9qamPwtQBqVSZmNLHu9k82hkXh1VV7HLh64coU",
  "key37": "43CisxAp4WdG8FMVLYTs9f7X1aihAuJ7X37zo8pxuvzEruC7bz2d78bbTayY5SVx2233NSuwrNhsGfWixmbH17bG"
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
