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
    "57D6bLGzA7PBnjmXUDaP4JbqvB1mbTLGVmCRzMtzHcjYn2caeTQzikPYhNDAAR4kixgVWskeu7nSwNpxHZRhas9h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kVzY9ao2AhBmDd9c2EqmmCAJGTtUkdZsajyJNvunRhXh8cdPKJPRnCQfctQs5qDQ4nHo8yHB1AHvzvovnbBWPhn",
  "key1": "2ipRf3mXaEx8Qh2CmxomZxoHHM64BaesvTUE4FQ1B5n1AdvGbJiM6ZjTo7EszegiuPSDxA3smVwg8tyKzt7Mcd59",
  "key2": "uG83barpi727Ghy3e6rw7mTP9zbfg43jWBXWxPRgfRYfJBnQZVEBm3WJCbjKh5n9XLUycqA7QrU2BVKjHLC5Ne3",
  "key3": "29BbVcoBBZ8UDMgKGHmq3zPJYp2EZ746yuauZ34SSgUqe9JmhK1dLc3S3fCK6Jhg7KhftyNZX6xmvQDKBHMqnSi7",
  "key4": "2ndD8p3o1rRoMCTso1iwS98En6ECVnBSfCWczHcp9jLiUcgPDhpRBGTDEhtEdGqyoDeD1QK5RC5eLfLVfXCT2ukw",
  "key5": "59aRDjmxPoMBK31cDRRdbEXeR7qaQ2nzFXAWjnKNdouVK2JzBbZbQs3KWcNSeepapXYHirT2rJ5SuiUpk9SUBcYC",
  "key6": "661nqBCrtrjaXWS4m6QWL1REJtsADqx9bp8vFSEfD1UzXvSjrHjqprmsGhXeD54PH3Z8myLbCRoypCLTZ8FSFnGw",
  "key7": "dtckg8Ei76N6yAXLcWGSWAGqL5oWAQFFtSrp2nTTmVeYjBwevKcta93SZNd667cmRWqaUVYS22A1yRWzPKQ1qTB",
  "key8": "51k2YEBHCBcTP3w43CzfNdcAo6ZN4oApxhdz651PWGHN9n1Px2bvwo1zPHHKqicsccj26McRr6GNwz7LMenG58A8",
  "key9": "4Z1NDdvHjA9Q79k98BwX9TrTgkb646fLsLQ8s3zBbZxSLKke6tdVa7qqwtZQJU1BUBvpm22aXsoCEksWeEpvSBVt",
  "key10": "5VbjWBeUoGxfptjqG2V4HBcbzxtBWEpQBJeYq7mTNystjCBSKetjNLtXz3DtSr97xRitwwisekqKvrPyy2MwyUct",
  "key11": "3ST9ZnVRKa7YEhAAFYMZ88pMnXs4zU8RurYtvZAPAFZQABLAKoqLw2EpzpzzZ5vMSA3WRxvPDp4zu1LnrHHHKZvH",
  "key12": "5nvH77EGgVm3VYDPoqzsxiZLvA85UKT7QQexyEA5FeGxFX6pSSNfyuAW1irvFgFLFYJsioNberwqxkaBWbvzJnHv",
  "key13": "3QzmvBUZLViAyeKaGsMeNibc5CVC5FR1awNmKveP1mbtR4xRYdfJ9McLNqURZyWgTLv8y5qV61dTLSifbths7reZ",
  "key14": "45DFWkBsdWnPcXHjFG8XpMmeCCvUXUs9kChzR4viSymb8mBUtnKnADqoLXZf5yqAquRMpVkQQeg8qHyaPTEpQ5aB",
  "key15": "vsPMGdTMbBPMx7k9jobuqVr7jSv9KUQ6kDAb1mHRb2xqJWYscenYRrvkgjjwypwPi72XZX1B4ToFWKCzT9hnG1q",
  "key16": "3WHgLEVmzPWvsfscBbiY86YqezfCA69Aq2NU4TcNHCtJYsvwDDBz6NFQNhPnCmvPCoww216iDuxPCUiguSHZ4G5S",
  "key17": "3vsJm1JpiXbK5zwooa8364QhhbHUuUX3e8QpU5GUUdEdsuV81LWYogpdCS2Tb4LTLSSeeLyQCqoYprBdrbyhrNPQ",
  "key18": "5XFPgEe5bG3VA8GmxNXbr2wL6VgbvXH3DBAL8ZGjL3FAxTDH5F9CHj2NaSN25dHZsUvPLZcFZRqDdVXQSjsfLCww",
  "key19": "eNca3jGxm9jinmbxmAJVCsi31YEWJYCeBTaLuKFdanwafArSbwktx6KfSYK8io7nL7eCaD3ULY61ehAnvUegfkC",
  "key20": "AuZBXF8b2t44BxKKtPEwK4rCL1fQzVjqa14K66EWLDSzSQMv1hVpBeJipKuaZpZUZwougX3UQNsJgd6L71ocf6c",
  "key21": "4tgDiawnwijnmRQ3d2pe1pULjeDU1YB9KNz8o6sgVqUHX5A2aVH4jtpyFwpb6Z3jBuczuNnCSbdBtyC3ypwYrBc",
  "key22": "5rRsETJy84Na6fMwL1eLHk8D1yf7RHFuxUs3i4ePkkY5rzoGJZVfPBw72cpgu7bswLim8n69ztE1t6gEbUJPF7A6",
  "key23": "3BLD71spzgfYpGMSQwCw7Nn7uQSiUMzq9hGk8W3g7jV6fNCVWtsHZygnTSDJQuTgL7qo1NLwxngkabzQoQyrjwDj",
  "key24": "5NWeRWsRrtXYqoxXV8yR3PtHbVwu3UQryfMRL9epQbzs3TQn27e6vcYQ4NqS2o2rYCg2NSfVexfoZQ4hn4htaJS7",
  "key25": "4pEkX9xSpAYXgyP63FuxmFMLFSMQayZkkY5tgdAMMobtgNnGGkgcJfgG6z4njjW7tmtDpmPKWMPhZnFQuMSHRGdc",
  "key26": "wM7eKFj8ULLkjRXsNYcpD1DLjU6Cm5121jiqokx1mKGVA83P1mep9hRwAHv7ySBG9x4nc6pptV2Yf8Tf7icnyUs",
  "key27": "3znZPPDBSDHSrbb5Xp1DMAg4ExaQEvC2xcV1722rtFqf8F3Xy57tv29c4eVaVXyXErLQLi6A2jkJNhquzMkWFchq",
  "key28": "4JuB8nTtb3jhb4GsKjAnNT15VAApXUTboXjdLKz5EkaNm9T4N4344w3d56vgD85PtU4JwbYUTyAaDdWK3Q7AsNpy",
  "key29": "ywqXF6PRTsiW6EFMg3WmeCBcEzYYVEZBRSVu5ibtKtRV5nPW9azwP8zKkfbpGBuamPzHyoxfywUqmT45Ft6i4o9",
  "key30": "5aCZugGKsf89SUfYHH91uoDFE1tuS7Cp25qSgawDV8Lqi4GJoK7ERRWmBFtG37wVEbis52nFN6WgMdUjP3N8QqSa",
  "key31": "3GXD9TPNfVpHRy58LM1uqrgXABReJdPNQgQ8JJxJz6HHMBjis2F4y5fHGXxeYX7ucw6NUhUZ1uqcz93mxT8kvSMW",
  "key32": "2vBVA9CCY53zzZ5oNEExNtjC1BvXCiigjBJveVoRVSLnTagFCeNzjDmduPxWGahVdCMQHteU3kXAxoxxPHHHPkeL",
  "key33": "5fxofYcLkrxpGQM58fXoqkSYtjopETrA3t4zPDoqAqNJaeAbWXpfhEqB9rL8QhLYTfVzvmJAjp1bHg9pbq3ytY8H",
  "key34": "58Enwz28jEvVUjenPsViBsKBS2x7u1goahU9Yxt6YqJg1uroj52Vpy4jr3pqUjk4pxkEPVxdu3jWhdt35TMmb4Qk",
  "key35": "3DaW2bWHL12tBNw7MGArk82K4AqozCUzqaZAmwYKCsXMpgyDGWFPNbZGvSZJiRYZGexqhyjWGgqft7WywViVjSqB",
  "key36": "44rg8oLaHbrgAd5oaAiUqJKK6CeXaCzsJe4wL6PB6addUK3Df85ugoWs7rE6oZHJQnvtmCu1aZMuYmz83FPrYXdM",
  "key37": "5qQcahufLhHr7Fv5H4xErf1KkgJpuvE3sNSC8Q1wW3pr4cAGJ5ueFWy3a1ycwbuzqTPt7s6H7UajqQDgoRnXGXbV",
  "key38": "5RXrKh4bSaUUWHDkccp3be8k9xfTXGsFbnYuywqVvmGL5YAo9eW5jAzSPqpGN8pzkKzRRiW5k4a9ekXmHpC6fgd1",
  "key39": "5YkjMsbTYYFA2iYrtnsezsDozCgP8HybN3ABpiZ1DZ9fH7MUMez6roz9RtLvdgbeMKXVXTL5rpyHQx41PCB3FKe9",
  "key40": "2HoVbq1nx2PSahwnLoHHQZouEJ8LYYXuyQjK2KWw1raK8yBYZKYR5Bb2PaXrMLQTtuWAUuCMetU7sUut6qJhJvNM",
  "key41": "4Gen92efpxMsfvcb2Z74CFp18LYVAfw2rfFXMLekXgVMFrRpLJDY7k7YePXXANvRcP4eR929oAcESkN8nxy6z6PN",
  "key42": "3trZXnhAGMps3esCfcQGY3Szg8Uxsw8Zu4UwPbjoQY2pCLmTMP9xShK51pfZaXdsTxsurbh95FbjYsjYpPP1unix",
  "key43": "2QruzZFvZTqxqfmXZzzxoCN1iK9aGAsYhZ18Uk27QJNfiqYiusqtrHyt6DAN83fkHzexxawyc4qWJFn1txcbuuuH",
  "key44": "49QA3kvQKtLVnbXqDJAgSdGagSjH9fESAJ6ZdHBPFqSPzv5WZ4zxo8gNZqmVDiGzoWsoRAU66uGA4VbT1bemJgW6",
  "key45": "4sfMrGyLyvVfs5M8wwSm2ezVxkkaMRGuGUJhhgwmVozgiK8LZiZdhW64sUyYVzKg3Fdt3kHQ2dw28DBa7Jr54vgS",
  "key46": "2rtvj9Wq7K4969iqyMd1PJ3o91JEMLRqUbNLjRFutsjRrU5LAXGNkYaKH7bvRzw6f9p5nR9p5yhg4gy9Q1WUtHtS"
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
