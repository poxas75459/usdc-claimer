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
    "4tavcpTgr9yBR5MnxRuYfCYLKLJ6Y1BVXeQFCE3UTg1nDcjJzeM27Hc9yZ7hkwGgCAEZ8a4MUsmixmjxN4ka6eTA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dYR19yiuY9u2cfLfgSo8Z6cypGQbG7dnf4qfXZxMqhQ2v6TjoiHDhGFUWiHwXai5xTnr9S54ETrfmk5iB8NHbbR",
  "key1": "2fdFHMVQLrQzuDEAYHV7YvFSa6p9h7CeMP1Gg6Hv5oR7DNaNPqvZx1kVxafZmzVGGvfXJhCxt3vydg5FFQAeH9Pf",
  "key2": "44WzBC81P1ZeTk79zx18HvXwNJWkAJybbCdss5ArqtRoEe2Eg8cPZCTjveUhw7Lq68VUGwQ34vAoFGL9dNyeri2V",
  "key3": "65vA3P89m6hBPyYYLo3bJ2Rt6zKiJfd6bzJndGbEca6JirDpiih21GBsdw8yKG25dq1DFHZRQ9qXurnS2fjxrEJE",
  "key4": "3FTFbVTTjWgkpFod3szTpYFL8BGuSm9HeUHkUyaFRu8GDKbFtC21px8UCMi5MKQkX4neaqvFrBHtTibWWX2DGXNC",
  "key5": "28oz3v2V2xJkGbg47uY5TzBrSs59nbfzdW4PGvjZxMTBbvbnY2cVis5EmEeUAuFrMD7LepTWrUuQn1TqwMyQBNtX",
  "key6": "22tTFVYVtiEPtA8ZmGAq5mkSKN7xoVRESMKoSUnwyP2Yp4mMEadJQNw3N5pfTxbSZvupFnS5Khi5mqfUh77eyGpA",
  "key7": "5CcyZjVjbLMN9hbEk8L3pqBw8WcK4tmHF9a9eUtiQgxfZxkTnLyj4hfZBJWBKsoSM2VMisLgLrSLaCcoiutusvL2",
  "key8": "4jmgL3PEytTpP6MwiNPtVj2b5Gs2yjY9hhW3zMN6nRmgcKisWTD5d31DXSoUHMRkYynTpP8o1UtNFb8MdyMfvs96",
  "key9": "2YeNJ3Gs1igigRK1D1FDxq1ZoEFSWgniq3KZDxfQgSNQHPDa5NNmETwH9iXNeSkDG7B2WhiwPE6dR6vah2hAX4JW",
  "key10": "fWN17s5gvVKxudyUAqthLprQbUkgrng5vjZiHgrm9UQKFHaZnjjEQWw2pha3KdU23z9Z9N1gKeEEnwJSUWuwYsR",
  "key11": "2QEYGydmzpwm1d3Qt7WcnpY5ZEoddyAvzNGaDuv3BZYhNvR1GpuJf7JcSzEUtwSFfGAoVqdV9S6oMzKGUvpeMfYS",
  "key12": "3sZp7u8PP8GEdBVj5gFRbeNDBmbWkdhDcbZWqYCuXxCEMVaQbfdhJW9u8R11BAf34pbxTRiqd1STWCUmnBotUZb9",
  "key13": "51fjBptpapd3abPREgBqiCDZHEY3LiuBKFgnsbn2Wn1YVXGjUULDZVX3UZ31GZb38QQnnTSsGRXbWhYcQYQZ3xUC",
  "key14": "YyFcTRtGW6RreDFHpf4z8n3Veg6N37xKH5zySjMCkpaMGronqNETaVbupBATeL4vqu8rWmBQEhyBuLuizMCFWm6",
  "key15": "4uvWTG5RmZJVX74SU1JAxeLyerR4fDP1QANKR2c7eBKU8zuSsT9qvqxtZnaGaEWYaEZ7nUrhuqdoc7vqYi5HEMZJ",
  "key16": "5kPj2BZ55DJT8FLLo29GPgTkujshdCvwpG473VM6S3aBwUDJ2D37jLDFiPyL7wGz5Ae9qyPQhoW6Vs55ksaH2f9b",
  "key17": "q2CRZX5ozMz97ByQCt7BVTjWbHHhLCDR6zaydTWkR6BbaE24qh5YVkEaPERPLtRHQDcTEWWpYf12KFkPFWiWZZf",
  "key18": "2grMmtjutWyiZBW2bghdobveoAbEozUKSAgXyx7A982FED7CfxhmfcZBwrKxhS1Pbz8X1n6BHNT9kgdXJNGTdahH",
  "key19": "3GwezirkhRT1CdWTsQaEbuZ3bs79APgP7zDotPzZYJosw2uvx9FGHtLuD2jW7jCjQb26fVt6ThyJH5JJhGcVCoVT",
  "key20": "qbT5dW46dGPTLWZ5YqK277Q72BjG8XxhMt43oxS3W9Fps1mDZMrANiDPvZqeXBaYntpCQfyAUZ7AZ158CbKhnKF",
  "key21": "35bipaYidzjy5vW5vKdY3XRfTWFrpb1ruJHaXbZjXCRg4ieChzEvcopFSztVtfXwu3XfHYHkLrB8QEBNSfNF39qL",
  "key22": "sVjvq75pQ7H1p1qyCNTSLpX1ZG158uNLwReoJiintmzYQAPwT7JtKUUpeNRmwSEN28czVxJGcookdUbA67MFprr",
  "key23": "4WKAxbH4H8oEXbKwULazbo9iFvy98TNQXnYjKbYChLs4x5NR9TEPe3XL9TqqZTrskYf958ZDwnDcEQvWQo6QZmFi",
  "key24": "2BDDuXaSjXokXTN5ENRM7fdHScJMNHApU3C38ZLBECLjbpfT8Q9Vy3HZCVNLY95xPy8dir1igpptKL39BaLQTp3i",
  "key25": "2fMwrN24EsKB2UPTXF3931SnYTggS4XhPTGn1HkE7Vw8zoA3iNrmSpiKugtuXfPoEqXYF8UnFiacTxNVbWYZZmqd",
  "key26": "447h51pa9B2nX9FPoJ3oEQYBj1hh5XteCJwe6mVMovGChJMRgVdrruxkHwQNjg6kgCD2iA9XCjanVzHHmZu4t6bf",
  "key27": "2Bp3yn7B8s5ow2zYCy3f9Q8w4HWeCLTcFixpfUfXhZzjLTNivxsUyETyCpqjgEGS3mYYxTJU3rXkdee4rGYNvHGz",
  "key28": "3CZ3YM11oi5m27c3Qx2pGBDbz54j5hKwnx6hDwmZJgip8rVDngNdFtEZuQdnwr6sD8gxViS8farm5gJJmeDdATqD",
  "key29": "5tNXN5kWCVqBJ6UbSXMDiWSpemTrJDTbNiHuSPkPoPNr69JHnyfTkpnFDjjSSFqRUEDV5XFgkb1iuubdhdW6bF8Q",
  "key30": "5sXJ9bXsbGGaPXkTRiiJBfUZPmRm6zVE8BvJqoqWhJyvrZpst6PAEwFJydPgvZa7HhHJLX4xpGUFnNQyBhrCtbcs",
  "key31": "5Mdcy4hDyCU3f23QuBc9x8vidLdF6E2MLREj2BMonPX2WrT9hPHF8DcoddAb1X4BurstpC25MGgbw9oEn9gNrN4d",
  "key32": "32PbBydaTsTdwuMQ8rgwDeRZT7bmsSASnstC5eYHi6XvmkkenQN1FxRumteP95Yttd3fUXV2meVaAVGvjbja5y7K",
  "key33": "32rMjKoygvRcV2HAQH171XvSghxhFDBiJZ1rQRkm6cUMtejmYY9qYvgajgHGeKeHUqzqYEfCz1wKHagGUYgwxWXE",
  "key34": "5JUp7bFQL72WcqpqWx9nQSdNLxWaWYvqT5Pr7y295B7ZmVXcGLEg5L5C1GavgYZSix5Am3goPUzCgBDP622uz3VZ",
  "key35": "5Tsu1fp8DJq17NJCNxouuoS9iYUnHT1VmY5rZhVBvJHTxHLP9wJAKdstXEeGwypA8KdciqkpR1UMk2m25gm6YdeS",
  "key36": "4o4o6jUqs9AjqNbm7SQRQFJR5aPmeDNADU5jSkSSbByp7nMFqWJ9qz3txLqRiHS9x239Pdt3vhEnKn4MU4QWNDjh",
  "key37": "EbkiPMQMiB6owTjzmiZAPZkYveRiMEntKiBMiEDVJeRGV5roixG9QqUuvb4gThVb9oxYpcJQpxLBrserC173Kig",
  "key38": "3gQtviCad4afkd49zKN3UiC33XjjmuDujsFMf3m3CuWdgJctXRnhPHN6RtsF3cFJMGjwKArUjSo6hDmy8BfBu28W",
  "key39": "47rcvWxuC1tu1GViQCevrLfkHsBcAVvs2JCwzbiq6iGpX8cTcg1UvNNxiDeuAZ1E5STxg2SgQ74VSXtXkXSeJNxX",
  "key40": "5knDxCpC3hLSTVip8D95tnpMW3RHvooYueYhuRramKiw2N1DN8bDpZjJTWrbjm69x2ir7XipgjsyduSkpyHEFjkJ",
  "key41": "MS3zAbDHg78i1e98VE2z7UMU6YgPJtB854KN8WeY577sN8eJPBsJ2QvMtYCB4oX18BE3h1Mn7vTCeQPrtnMPMM3",
  "key42": "LwZc1XRF2ktyLveQBmZP64hFW8dgAxXpwca1Qs29u26eeiaG1rpSXvCT2Prxr45nwY4DzNtVv5yziphybBYFMPX",
  "key43": "fGcuMjgs3V3dzmQNDwhG5KqVq8Tbg71Qg9Z2AR4D8bXFFwjJsJeNUgZmiFyvXkA862GFzXeVcqXRGh37rKgaFyo",
  "key44": "5uqBt6HYjtc3JLs29TKLrqBBq6oLvLwTrrv9ecDt78FqyLTcK82E3LKjRurgHRovMeL1aruGDnLecqWjjUvX8GVo"
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
