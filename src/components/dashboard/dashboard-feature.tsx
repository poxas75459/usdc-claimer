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
    "D1GyFoYT1ipUhaCmyCaVaA6zuZRBtLftGqy4sQyXDU7dL13wxxTmPQvzycS7dHsFsD2kK72hSg5b9p5whhkUL48"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qeo19pNniRusDfGfDhDiNkWvokDGPNetv3fWNf8S11HtzwKiTFoFmwCwUa1dL3R7JtH1m1B9AYjTNqaZFfwumdH",
  "key1": "yzKSSe3Yg5hxPYd4EsNWXVZPbKfneXZLjVbb3qaBvT8X5ZN6okPA1pVqL9iLKFwkV9d4R5TSJM9pKMgyWJtZY2u",
  "key2": "5yKtemycDFzFkdNCw41jXvjtpBJX91WTh6nNjkJsLX21g6nxXRH9kCbDuaPm7ptwe7hJ8aYLZETSWwr5PofTRGdY",
  "key3": "4SHabKmayqgod2qmWFvoDab7TRVDG5HKYDLgYGP5EwDtFwzTH378Zs73bnDS8tGv86wDiD2YzKD1vzpwphyeTNME",
  "key4": "4CWUM4WG6d7kPTT4YDefTF3AHecrGLvJtzh99Ha1ZtoqGJ9VCD3JUm3DgPNoCJzCxgZ3FUAoE8npDCd2WCdXfHC1",
  "key5": "2GVbJhjVi72ck8d5TyPTUorE75pzRjSLCdamz7m8ioqrSrNMfYNLzHrW3jhQRZo8gAjCuDNCNp2XZUjeDcZ5GnLU",
  "key6": "2n8Evn7PpRfQeSFLYMqdmbxWarkc5c4VP3LYgHxk3fW45PgeSyA6UPVqRCJFwdjjx6J9xoBSgxEt6NYxTDDYP2s2",
  "key7": "64RADaTQEoMWrAgmW4Z8bCGda9kYjMx9VT7MYmakEuM4pTpYXP1FwNLnDnR7R4yNW8mwh4u3MTdpGu5eFa4ErsqQ",
  "key8": "55SSeffsHhRSGyGZ9MfB4QqpqRAm8N3btC7NX4Kxjo2SbU8MixEFq92GsNnG6ubxZR8cec9fdkpci9Yy4yu6N5V2",
  "key9": "319VSV8D62UDsggPQ2dbGKWx1U6dr6JPNHWRWc4quhSun8PgsiAVgSb2XCD5dX1L5tVt27zhMCSvV18ExxtvuVz2",
  "key10": "2FKTDBgL6q1gmD4ZQCf1DET4TxjFotmLKnTiZ1ggtTxyrMeKBBUQCByyok12pDUU2gcYXz1MVPHjFT4HxRxFwExi",
  "key11": "3Z4mJPuJD9A81CektvuHGWtPgLrvwQRBJ1x133keGWbTsRM5P17X5GyDL4RVA8MnWQnPK3PffyfeXNFkNKAMD23r",
  "key12": "57MJTSikuUPXrd5yTUrK1Hz9iVDheFyTzfgYQysp12pFR9Q1nPNqYwaHNC8XSnLedPSFXaLj2UU7E1upcvs65z82",
  "key13": "evseRVKo56GX1p1VKvpsvBVWiXYpdRy3ChsGeTtpokf8JEZd9yWxw7kRwf8GpmaTVN6yLvkQarwQCHkkJEWURLE",
  "key14": "2qn36eXNDAciXMwX7AaKNxfrirWqhmkrUaBdNAtPKGU2GS98dLGdXLG3pmhRC4x6oSLKFCYYC3cDidHKwYYw6TLZ",
  "key15": "4A54TofQACEfsPD37oXM8sY2YxMGTKdQW7KzSYSBqZyuTFvhvN6wnQLmedZp14RysBtQRYEjwVaewNnV2ZAAgjSG",
  "key16": "28EebmmV1Wi9iYNKrnUqkhwhtKeQFZKNwx8768HX27Pi5kLEYaqRUCYLwcvyTBMZt7Gxq8TzWRY3Wybuk9k9YT8Y",
  "key17": "4qcMxGnJENwHFRY6KJxBJwSYUJr4hc4KQwBx15XHaJedo3aUptp9AEM4BxGgCPRQsaAmrf2QaWEAN6s1u4jmvc48",
  "key18": "54U6USje6zCR1V661iiCzcToanpcJowv4K2DGRisUkAukgcQ5bC4xCRvfcu2AuQ1JECYj2Q5Wa8XZZrBNyWYir3n",
  "key19": "2tjgZqPAYg2epkff2g4PXHYueEp3etwEtDqpHNmd4sqx8szBK1EMNJR562kG6jrENnqJ6mvHD4FupbuHPUgwKDYt",
  "key20": "36eQpjjNThrr49sxpGG5o2iS9WgpXtfC4x3WceJRRkd8aQppqMJU12yKozUjz7hR9HNuVzXqYZH5aK1e6k9F4J9f",
  "key21": "2beNVpqZcrWxNwKVAUvcZT8wPJ1WiRQRzGQoTAjGC2etHb8Puo8gMi9SW7gbAmta3Tws1VvY4Th6SdXgZnZsnCPi",
  "key22": "3TUQFq5Kn4pwYqQT1qmASpZC7hpTb6Rt8wjUQ1j9mYuFEbqqRcnBicBVGa81JT1J4s9M9mat3L9LGXRzYGvhpEuw",
  "key23": "2ehbranRoW6e9rbjB3dWZ6pa7B6VtDfcvca7Ny7ozSLYocShNt3zbrCcsdnV9WAs3uLoruPJnZNRcn4xoi2sWnLL",
  "key24": "5nuChugqt5d4bRbA3RWxNFqpN8fbwvKsJXA9xuUF8TaeAiywvsY47pX7FGiYARN5y1Ud21XB2z9ddCHJ8Jf41yeU",
  "key25": "5ffERBeeuhPYfLFUi44eqEJbzapzGReif918xPbxYY7X3XCeiVi2snuEGR5ULDgLfutz8gJECYG3d4A9oN4pMRY6",
  "key26": "121mqRACzKqtaacNf2PqjoMa5A8RQjjoxGPSA6rGaNRTRTugSoyWwh4xiKjnNKeGa9cENRhkcbGXEDQxca9EGoPT",
  "key27": "63LytXzYYuETkLmRnNCo6Zqtbu4xdFmRBsHUy78rbztKmXMMYE2NdTTjHfZNMLEqvMYuG8niFn6efW3biW5AQE5C",
  "key28": "ZPoFexbGUdK7x1D89pp456LFrzJZuNTwuthsHQpTAwWuMRd5t177J7NMXqxaJRVEi3kSwBLgghVv2sLt6E32JUu",
  "key29": "56iuvz86kH2N5wizrVKgcCSu2juDndPL4amW4ZhmDuDwTa8JQyw7xBbKz4rEyouoaKp1r3y5cgoDU22E7Nyb2yb",
  "key30": "2nFaDfagwgckeAeqHMfDQcEMfPKwtFaSBhdUFwWJWSdwCq5xfxuQTNdBMpQTww9jhhFZuGod4Wo9mCUfW4jsaM9k",
  "key31": "5BUnwNQG8PD1mtsPmahFjv45xXxJdJpMemSE4TvhPXRxY8kjp3tNQYXhVMUN7CM6s4e8KF3YCG33P3P5zXSjauEx",
  "key32": "5hBRxjUbtum6dVZe8a8QxDbEh9JSsBgPsbkPxqc1N6f1zUr1q5Y4kHiGWtGHZkyKhrF5Y3V9RXyvT7AWWyPbWrms",
  "key33": "3iUki4ejJTm4Sk8iogS5DW1aB2d9x7nXvn61X9BdiCmnVJNLsPJAbuzJdX94nPo6846F6jw4RqvfY6o89uWXBYhj",
  "key34": "4YGQzEUAX6CPvA4hRCAdVKBp61eGozGQK5E7VeM1q3SnZ7PZofyMxGJrJdfMCKK85gDZpkxGmESPTBYUaq3bo6RY",
  "key35": "3g9oAsaVTEudr3hkSqHwz2LhWcxUqZsZsedpe8b45jjZNo1R6uxpDpN9D6ZdJ9ga9qZQAaMw7wqSozHzEpyJCcVR",
  "key36": "3NB9gDJnjidoSwJGxxK2VaC4ADbgezEjhitEBewtwM5ErqhXzx6JxtMUEcQfYYViv9G4RRLYT2Ko4B7SUxhx8JEv",
  "key37": "39Li4TNdDq8RiC5EYYKPN59tWvmZKGoLb3mEaJfKwLmMua2fnLQR2LWRxfGmQbspCmhgNosux5PawxynEJuMoPpB",
  "key38": "5GmNS8YA5DfHGDXASE3d6iJ4WbtiUSok2FkzzyYCZJJNC5FwkPH1nBRjSBfAcZnrhbTaf5XLZq5PLkdvBE5JMpJP",
  "key39": "5V1dBiHSSqeT9RKmHjnverBQ6z4rGTYwocpVcaamVtQPyipKLcXV8LSfQs6RB1vmsy2jyNShnjx78hujHW7FrFH2",
  "key40": "3DQfzfGWxq1ckgxis981njyP5yq257gqLTXrUkA6M8FPAyNx9HZRQnnjwpYh4UjShSd8DGPRn6M8veEdD42rTzfU"
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
