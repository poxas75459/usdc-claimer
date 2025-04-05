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
    "5d4JZoDPAukhCu5j7GnTmDvnf6VZmqLWor8atuGFLShunrtAH1qgYBNLhW2CeFUkaYSZbaxaAwwBX647TviZJq2B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kVtfteiiXzo48mYAdAf1HtLPFu2dhxVgzEzW4MSsVe1dW4Ah6axegFNYt3ZcoRxRDtjpWj7wRnTapyKdmG8UNaq",
  "key1": "2WWG2yB6Nu2dqrcfz2d91DwRTynDvKGZUt3sgg2YzLUkvtdvCtowqKkT1NPPyKNfSU9SKWJZ7YMrADVLm2TpWjCU",
  "key2": "7C3gg3QS1jiZJdYZzvCkMM98G6NWQbmHoHNeDuVXNso3mwc3Zx4o8ABC4g3w3SYFWpNYJSBbRzCZigures1HZQn",
  "key3": "4MqBaGaKmNvmUYt2PrymMi57z6v36nPzA84roaVidRBVxh8C5ygvzeqkntMxGaG1ev6KMoBdJD6J9v6DUzP1a1ZZ",
  "key4": "3gbAPTAuhub36fs8ucoApq82A14LEyrXsjZGRSbgMjnRepPFhAhHP58EgLP7Sri35pRDdz7V24MqN3qJEEF1FYcQ",
  "key5": "4SkpGfAgcmbiKqCN7aJCRqswb19S39DyFpiz9ARRe55StAc5KdRVX9vUm6b4H6WzrnMqEHAb2aDnF3XNqjBXrRsa",
  "key6": "39hryWC5P8qcbRtghUd6X7SRJsgzqCdG8NZ5uidx5NnuXhB6zKN7hpzwVwaHstjR3DHXE8UbuqGFVDVFoxSYwuwi",
  "key7": "3Qm5w3FNLk8LjtyTPF9WVpHS1fB6JThQDSxJaX9sVonRw6APyBUzZwTn6GBF92yq8hutZnjanwDzAxwjCyGpwb5T",
  "key8": "31NPCXtW68VNCiwzXg4f2uPXWY1XwyXRvp333ZPR3AXGB9UHUaV6NWw15bNUEMvGENrwredGxBBsWeUiPRUtgMM6",
  "key9": "4uS5vVbPtRNzL28MRRSo4LVGvmG6nfX2HzU9d91qroR6bLZXqSX8mgMHazSMhApiR8v2aSjLnQPQJov8jdFcAhnW",
  "key10": "5kV4GQe2xqsxLwagSnbGZcnb5MLdmizRosVvjpRCRa712aEoTu5XmDfpve1tzJLS6SmjE9GecFyaaW8NE4fPaqLJ",
  "key11": "4oEfY7hKN5ruWAbSG5yjD84mfWL7nSdNibZrdc2pRRdcckS2ESuyovhjDbMbjtoc3fSw1gFtxAaZLBJiCZZVuJq1",
  "key12": "Zr916jSAxMYfUpKdyq5f5e23rY47cRvQ2SisEbTFiBp9fUL4nvBw9tFyBvUG5AJ65cQBfeKEKsSKyhG3hk3WwHo",
  "key13": "3YrtpyrPP59AS7wiYwWdg3akWTgnr1JCpomLEiLiGdnhdDg8GJptPVHTXJVUYPR3ecBikA2PBcqxozcXUt8yyP9m",
  "key14": "3Pv9ccPj5GhJBhAGrXGV81XZehxKfFKbF52oLULhv1AwcuDArD6tz8cVeNF1KzF8jFu9gVGR7Q75P1MQSTVp51y9",
  "key15": "3XgHxaLAFQjsK1qAmx7HUe5HytTeZSSxs6dkSgzyyeGBqh5Uf8AMubzXDXrmVrQUdTikYZok7NBKtk1Cp5TDDGaG",
  "key16": "5frz2YXYNTDjuRNRH2EJgu7zwLtQc1toVmVB5bzM4RQyHSZXEHbpup7kChZFi71nqcTAk8ucbMgA7N2zzBAzTVmP",
  "key17": "3qhyCp6hSTjzyNWbu8XSkpvgcVKStmQvAgc42ZHgLMzK2RdQeJPJBobEzdEL9UZS8nrwuE7qKTQS8Qq9BL2W4Jdn",
  "key18": "5nviLEXzeT9L7LB8bcK6Y15xBu58o5wrwW2boFBqLAusKT9riqEeBgA3P5E9BVP2QuK3iupW61Q6kbmBpdXrit6L",
  "key19": "4exsoRYut332pZVLyzK3PTr4n9EeDyjAWFKNsSUgsHqTVkfctQCx4CCqC7XLZ3Uaos5WpoboQ83rXjbc7mVX161L",
  "key20": "5cNCrHBSRiqzzr24D1tzcvijEgtB1MmCMmo4F3QrrZY2VdikUVT4MW2W32JbRggFvGQQfxCPikQa7JnEZ5u1dq6M",
  "key21": "67NcFprFDAndrpfnmYvw4hadbRSAyoAAkNpcV39uCD1mw9vCnmq1onsyfRUiMio2mzQWLMenwYKVQpCrT4iuWXud",
  "key22": "JQEK24zaS57mn692gQKQcabWZoa9a7Eh9jaj4fiYDJzUJmrBLDPQQTorDaUt959kyg84Z7WPn7goipoV2BGjXWU",
  "key23": "4PEHRWtA2yHiLmW5BB4q4iJY4YdmWSWxA8bXaKsJqXcfHmBUH2YSFncCSJxAfQNJrsYn9R6mTEVd2B8VxkS1k4f8",
  "key24": "3jqpv3bAVhyQw8sSvwoyjWVNzEaDhNmJujwAVnmap44Rft1q9GrdcA2fgpydM5Bbki6Gwux9gByVaVsa71cgsQYQ",
  "key25": "65yyvX9h82MkMLtAdV5HYiAAxGYmLWdEgRrYsrQJs7NcmXVABn9WvWE7Zxt8KmJcoeEarqB2FjdiYJ58MgauyQuq",
  "key26": "3JwhjmvyLqpZJ9LHTYao8uxZmHGxjCsGGyE4MJaDBjSGpoViDvjGyQU7CC5X17cNoAJctjdFvsSGcQPiGu7RPe8J",
  "key27": "5sZY6hYoLiWiRqc3AXpGx2mMxZjNyoDoWxEHhxphutEz9CpwcfREVa7LS38ui5tisVDCVsivau49wUgCXATFZkVw",
  "key28": "4xpmobHHU7BFfTM6uCZm4hitXCx3xXmYBFDfJR8hUeArPGmNdce9oG8ANKC9au5oZYcr3e1vKU36sBgZxoom854o",
  "key29": "3byPjfSkyaYFMqxJDpYKEsPrxkfponvcQBHkz8gryv3wqjNHMEbe8nqwhWLtz79ghkgrvDGK9VREfMqcPG83HZGo",
  "key30": "4LYMWsdR5BTdCTTgVn6QheVdHhnUuEDKHop5VxVz6ysajV7GfEFoKE9JPL6rpth9h8iVB8f8y9fj1fnvz6cDsRzW",
  "key31": "ed2JFFSvFKTTWpcT2Y3XvnejKBCSk1xTB8wibMook8xjQv9gJbeygeqxkiwpnzjaNezZ8wkmQZK9JLyyNCy4J4u",
  "key32": "4G5wTwchpe6CApumCK8wLNntE6iqHt8Y89GzTKGAHDpvWP4w6x9ZxwGY1jsxLXXUq2ZLAm2Wseo18zo46tVXrBh3",
  "key33": "5bmwSVgXhm4RoVHG4CQmidgvZrZoWxcZhpJZLiWZCiPqBpNLa2Z8AkRYtHWyv3R96yG8z37oiqAwBT9pRai6knmn",
  "key34": "67aNathggpzRSm2b4KQCr75UaTgS7eVQZBmiWmwMuWuNPH5tuutvkExDsP6KCp7DLQEaPDDGfRiFN7U4sBFgQDH5",
  "key35": "ebVLRfH5EJALqXCDbKfonvdSKgrEvq7SkhANLyZunEys4KmPDQGwrz4TzgYjKMFMqT4FvPRzgrWWrEjb2n5e7b2",
  "key36": "uGtBiQRFW7UHt6wY8s8e9NTPx1eyxcYtyVFp3scKB1oaLtqWsPEb6WfxscY4Yi1aAauQ68WTEE1yiqzhMRX7sC9",
  "key37": "54pQBkQ39SkE7pFLRJorZcjjBMq1MaNWXp1JRr94vfRFzLEEFRmX64XfogEGV8tptfaMsn76EjhL746p5Qeiiw7P",
  "key38": "5UQv6pfQdRcb6u28BUaG6R2quvoR99Ves7Y2Sryy2MoMR2fm7gtxE7j6mobshJFHqEvYozxQD6ZQGqXbADpWDiNL",
  "key39": "2xz7XzPXAoKV2Spq4m1x1qko4MJdALYEj3f9BWAbJC5MxxVWCGbQeibqQ8bWESztqgvXVNk4krrX5g4dYqWQLZrv",
  "key40": "fTar3nbm875A2Q9ritP14YKrNF7J2fjgcNwZWWA71MsCmi6ZXoXBMjhvEqZZXXoadFcgCMZycWT89H7uG8aBpyR"
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
