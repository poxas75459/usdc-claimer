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
    "4igwYgjkPrT4hKwTH9iBAN84ghPhJp7NSfZxwdj4e2HMP6v9zsLWds2NsJZ8NCS73wFdrExx7nUz31bRJEjG9a3B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rc2mWHKzjPxUAcQEZ8gqHB4tLAkuRK8gTLGSpLYqex4MZeqCoqL1LoDTFyih3q6W2XWCWsTsD2UsPK3TparE67g",
  "key1": "3UH1nLhJ6NW1P5cbjVDRsNigSGxo9qJHvGs9CpAsSxxyPcDoYR33AYYrRNShE7BDHarWvoHtw8vv7fHcqAEbPV6J",
  "key2": "4MXXyMPFcxZTRh4cFNwqpCeyNUauTvi2V53SoZfQpLb9yNuzuwQit4GRo2qtaja4DHc372FE9a87CvcQeKr5msWk",
  "key3": "45vJTTgvyDyR6LvXMAv56UXdYvMY7D2XrtA7XLAv7nUDDcmC8fyj6ovGXPFZczNse1DwCXNbgSi3ba6bqwgh8jrN",
  "key4": "5jMAHSCoR4YKTMiqP7MPpHKQL6tZBAdMoUZv469Qgvt9rNUxAjc6LNCsbHehQwSCnzcxSsH5RxqAKA2vQx8NZvhK",
  "key5": "h6N9tZgUoHUrnp1nokdAKYv6aqse1qEH877xKZxgnWQeihKrQC5AJiwKEBeP1cZg4dvc3eGgHvD6EbH57wh7URb",
  "key6": "2FuWRP8FowBnEAhDSGx81GQw8GaxMkgSRS9HUk7wf2cyaQNB272nSPZRT58RS92qXPv1imta2C5jsxNswjuNfqyf",
  "key7": "Py6RgHgZpH7u9Ka1Qc9ruBrarhDjmoN3EQHFKAhTRovc9GKoZMgYKX6cypsHCfUSAhiHg1RhjURtpnyDU5N4e62",
  "key8": "5VBXW7xRDoBD3o1hYDugeXaabaK86HjjrD7PRq4SLsMZ6b4xiPBZx2PpBn4AgS4zjjA5XhsWJCx7VxPoHmUE9LFv",
  "key9": "3A58unbKNE4jhPGbqKQYpe9Pr7xMAKzeqMJMhTLDyd927vZczw2pdJMpAzpzD2veU7v7jurL3cKxQhQp1DmExVxW",
  "key10": "3Sx9rjAdCoJLvBCAqz271hNZKumTtoLeGmKLGCYurxfqNfWrqgPszqErSPXkZHShwP9ZWsr5En5otcJbLNxbos6k",
  "key11": "3A7rNTf94V7e1ucGU1PKWKMGfgbiM678zZ5zC75P3FzpEv8evkPop1dsy27xo7rEtz2KxkXva5gs6rjVG8JJUCk4",
  "key12": "4bzf8QqndMcq3iWuusr2GXjbWWncmKaaov2hPQCg5TYkNtrwCms6fGEkXAXbfif4zcfw7tCTaA2URYoRcjVuReZT",
  "key13": "3LwPPhKWSH3cfyibriFq94tZFQDPduip7JkTLh7YBG1vkkTueYuxLMyRY4A9BajJuVRzpqiGoJXUtRwRMD1pgjwC",
  "key14": "2NadsWhfE1SdH8CiJYt7Rf4PYqsXfNnGTZFCtnnds4gpZEHYyLdvcNmhecirjSJBbHeCbaGhkym1hp1TkTkTWhWZ",
  "key15": "6aHbPpQSfMMD4hXnZGw93GX5HNa6Yh4M9q3apds8bjygqk4nbxLPU3ZcssL8VovJuFibhJyXvFbUDJUH6oYDtjJ",
  "key16": "2QQXL2yBmrbFc6DnMMYv5GZCXke6snAKzwjDa9Gd1vD6YRSqD9E3BoxUHUAfxuUV6nHSUuwkAWvPj5z9vtxbSXHv",
  "key17": "gHkkeXL9xPevbZytpebnCnfE5nR2mUwpV1zP5HiUs4dhRZvX8N61n5rjhYpJPAFy17mTSGbXEYdN9XzC4Me7WNq",
  "key18": "2mkMDWsFyLAckoircWSBdNTHve7kxu1B6NYtb2dehxNzvecyLdQxHKYxMf5R39kXKgR1cifdetv3XZe8PCGSWftd",
  "key19": "5J1UQWXRhX6jzvKnqim2AatW444ibk6N129zU9Mwzn49K32JWHMi5kx16VkBv6Gp7hFW7B2VECTpu45V3cJxcMeZ",
  "key20": "4gA4Lnaz5XvPJzzixviEaMY4ULXcsPM7TVq7zCbwWQnW2zBuEExdxs29jAM2ugbio9phQpVLFkskxeaR3sPkb611",
  "key21": "6795yGeTbvPnCjir1pJBqKebbxaLRjN4kGgVzTa9Q4NkmMRXnomQuEroiMxBJHSD1mGCTYywC4aoFQECaKYiNBKJ",
  "key22": "E9W3DgaUvi9U9EdFjrHRBgMWvWjBrYezusZou9yC4fX1dfC43Dj4zUzogXKSmuqAenm6FqmSCtiGNd4SLcsdvNA",
  "key23": "38MM7Xac3oTGdHWCqctUDHScjdsies3ZA7Wr3B7FuQsQwaL8dPaPDQSHnR4tJkdwkyyGnUKfNkKxw4EAfB6BVLJa",
  "key24": "BgeaC8XLCnnnFsBBS24pY6227hqGRv2hqjN5zsoZFbJoApbqEdePwzRbynhR5UJL4LcgQSYwpJ4hR9CgjrWJige",
  "key25": "5xgozzQMMhxo2WHhXrBMNjVrcBFWSmecZYZLbGeSoMg8bgS7PCLfaGMkran17B7e9yVNMQ5pAUWQije7Gjms2yb4",
  "key26": "4t9DdsPpGQdVvjLSgmAcMuxY9W6nf3FwGoKeXq5LwN8Fjue5ND3ZxYdsMYhy71oHvcYqdFf5j9SHKNzKAVFecyDX",
  "key27": "2xAVwGFPrno48J6VqUagRxYDbLhppL2r2pWrE1vTAWJekKcJHoxWtHkAXvhyuRDsnP3HFTTvi2M6eyCHZxbApdnt",
  "key28": "2nEbPgbAABhJeHV235qHDmiqVzYpUmzo7ipfF67Qh5LYsdqinuihWZhtUYS2M3EGQBfzMMoJeWsGVk271rK66KhG",
  "key29": "4EippErNNEF2P4M6JAG2RRPnaRFiaQnkRZKDWKVKoLHBcsQ5qSGGZ6PakGGySrseVcpADHWW1bVJoRmM8G5oAgTA",
  "key30": "61t4oCpnTxPN7bQ65oRYHcKdZNMwfFeDuNMx5uNmpARc3PPDfoEB1nvP4cP3Efbks5eXowcHJFdaapy7GY5a52fX",
  "key31": "3SVVubm3oU1BbudJu1Ww77kenuKCkU6xf7akQd6tWh1dZLDbQxeDjMT4Ubku6mpCXGhZfMwRAry75roZTLNBhnvq",
  "key32": "2SNAQWSYujhqzsfFrhYwGse3in7zviu8D7rh3qF1UGXPfkqWjL5Yoy8imHxvE79zGyzCdhVuBRA62eA7Kgo5tWN5",
  "key33": "5rEAuwV8JyASHhdLjNnZgYkthRGgQwSADqTmn4DVKWvJUeoGgMfNmjWGQbuevcwiHvvoQ6uzsc5258sS1dTWhpws",
  "key34": "2SQGQcFyeFiFwy4dCJF6jasrQ91Ks8SdgdASzPJHxf3EjF5xvQSHkpcYy4XWGuU1UmNEXShZ6vWabESBRxjVtCoR",
  "key35": "2yt5pA7NPM48Ct4NhAWDtuKFRjediPjiH3w4cAkdzHFow9mo44pLwE6CFVBpCqLkVEK5YykyUHqJV5DL4C4sxBQe",
  "key36": "2scUyMDsQ9UU2McwJTP4eVRhr6i3zYjvdKQd281skXHWs8DYW1kbEGfHgSTm3ZM6cRr4UD64kx4Pc2E5VaDebC4Q",
  "key37": "2zG34QqbiZFYh53MHEBKTHm5cmifyipfwNVjpw4V1QUw7ha99Jmcc3yzEeeWhw6jFx1245yyAy9sUmsGjxZhdwjS",
  "key38": "YCVLxRdjm8dre1zuCHcjwv9bqfb4n86v98V9gYs4ggxqugn2bzYji1cyWbnRXDj7pRvdxnYgScRxfqSpQk1oVjH",
  "key39": "3DcMRzv4KqvJtBGDS6qn2UkhWr7HYr23CJwNRGuBDWqU1j3TtZM7ReVhGR6RRyVYSgSoMZ2tT1T9FHcebT144jp",
  "key40": "5BmoCra5E3JJ1sC4hakhjfmgxE99pctMb4Ta2Estj3dMXTXV4T62fHUhjtjVGvtCw6ALnBogHhDJxn48nP8idNfo",
  "key41": "62ptRPsq2gZWEZvkPZPr3WmsWELCtu5DRLqGDCRpfLR3wS7Z2HvVxGdmBU4XgbzGqG3Nrrioeswwgqudx6n5uJyQ",
  "key42": "CRA33J9b3WHTuog14hmhG6952cNQ9t5aryDJky5qR1gqLoAUiUykFdFtMLGdzgK4J2TefgF91QppnvNg9RGLPCp",
  "key43": "5xcCmVuNJj8VTmktfSFNp8JkULXdjyrbBrRXJ5bSGW9ti6CmM2S7yDzzyN1KnUm5NGpdHq5NfnaHHqhXFpfZSLAF",
  "key44": "54ZGt9yCpJK43swktxj1dTgJDHMqzcCFjZD1ZwfPaxXDRPmKSCDff75t4vdBTn5ShWegQD4Kp6WRppDH4t29Scrj"
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
