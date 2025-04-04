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
    "2qkGobg7rTJxVNQDcVgKp7vYePgheyqjjYyyC7dHrDpXJ9x8V6rUXctJJTRhAxYTDGvzNmy3r5TqJGStiAMgHLKy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KX3DFtg6u86oX69QUzV4FyKsWGzrjCmsVVz9sYnWz4XNR4o77HDj7tEkxro8cwRWBjeQKG3N3k3U6MQuxfQaUhH",
  "key1": "385hPpGVENj9ej4ukhFAGNMAxg8JtLCxVS786QkoBAu2GMDUCxn7octKo9NrnpLeg2avHGBtxmzpgBatoTzuEZN1",
  "key2": "4tMRhNveara1n2SazoRgU4jBNeV9urAiDxxCaHnE4XSeonTsRR94jopMXg7CgN2DTtPrhJPkcHeLeqsec4GUc5hc",
  "key3": "4us9S6S3szgDknNRLPMHdSoMkEHwXMv7u2YEWj2rS6KrictCPJ6nu8J3khCaFEPcGcqYwqqSsqwfAdjJygH6jX2N",
  "key4": "5V9j64ZsWvE4TgT9YWkzkdciLuwwKW3iUvRi9qJcHWNZtfxsfEnBsGRmb6yoRqFiWBqeSx3XhrX429UpAoxe1d9i",
  "key5": "4zC5gVFGSPc6pF2HMHFwxuPLGXhUFroQzFTNzUez274Y8Ef1Jf6ckGs4sq3zn8Dub257LmvgL74wRmftWacckQAu",
  "key6": "5SjmEqk2CWz2WrDgYZDKbBx92HqPGxXYZmP1HLgfnoWhkVMUiCHbjcQqc8UmdvAfxHAUEKU7fGHQC16cZzfWktNm",
  "key7": "4xQQWPqntReAv12LCv8ThEnjo3sM8Z6ht7E5nErURxC2jkuiQPaNGaEt9x9uf3rnX4x6Y1rPkRwfpYKs5HUvCyop",
  "key8": "2FoLDhZwRU9PyoAMiX4ZMS9AyjrRdJUBpR3b9Q3vSEr1jzc7NBdeKBrEEXL943gGTC5xxNZDyCkZ7mxXhiFJDRs5",
  "key9": "2w7Qky2VreoEt1bFnf7sZcNP3asusFPTFjSsPsnz2JGDBDPMAb8XTKLQP6pRxfdyi9XQ4YWFkmQ6EYvZSZRHog1x",
  "key10": "3no4faz2NwhBPQLxR4EQb5B3UEFFshCShY2SjRGqYMyRK4ChhU1b5YGgCxi43RbTihnXgRnxEEQ4rJS5HjeQQaR2",
  "key11": "4M8NwcfRkEDUqzdmtJAReCZ5RC5FtP3vvpHAZJPnycvQi5TR1UFFbfHdvFm4SQxBjmb8jeofkHgaQPZ5wpkjTQtV",
  "key12": "2MTmSujyJmEeY59PPVfeGGjMmq4U4U1sgQDQw5w4KREshBUbJZCFKX1kMy4yodXHkbfFtwJ9zUgxM2QmYowszeG6",
  "key13": "3JSbREmDjKb2ZzbtLg6ktvSgUoRxuVGdcEiQFe5J7PShjm1TYSDcR5Ra2R56uBYruCVN5ZW5rC9py3QPeeAtQHAo",
  "key14": "3HWnKFrYE5bwczYWxweeZMmWBDDWQjbHZQG74PA2zKPaBKQredNvcMQBrCWZeB2R5kBdQdc44NEjHfB5bivk8zJC",
  "key15": "5uSe6bLkQ5n8VfHfVRkMMvG9dwnhLYCGoCaZk5yrJUL1iYAXCWYubhNqZj7wAqC8o5iZqJusjSHudJEBM3DDdj6S",
  "key16": "4gqQQYM8cAggfeZnRzWo5KnwyPNU4qZpUYZLsj1HHG2y6cfwYLVwAUox4mZYnYndtyAjgvDKXbfYzNg3v2AM1jNL",
  "key17": "EQ7D1KvicGWZsoTVaH5au9WB6LWDsMh6X7BZQ2rfEe1KQM83iqghPVYrMMaFefb4wShSg4F4EgEofrJd8joxfGk",
  "key18": "2chmm5JNjQJnJKztPxrB9JPeQ5N7tB24FfpcjZ8MH4dRtpVgJhF3d1SUSSMuSPuDZiMbKZtXFTR7uH1EmvATzjjx",
  "key19": "57RkF5p8t3san3r8bfF1tFD2ZYr1k2XNBVanjN3WdSV625vzLgfTEU5p9UJjep6FeKrc4YRqK53uSSDrF5P8atZ",
  "key20": "2jZiTG5iskSM6yNGfz3oRFCZGEVf7wBxhUkj6Y7h9aXKMnxn3iniLtPDERnz6XFtcSiSi8tf8B3nMJJuaAAm3gqQ",
  "key21": "2VRQQNeZNqEHciTCe6aRYUxsjTmMRe3ru9Neze85C6AYRXwX6WdCsRZh6htBDrKB1YC7tEggtJjfX9rUsQu6nuGj",
  "key22": "nH5MdGbYkfCYKuUbdrvezUpzL2sA8EoP2RxqRYvT7QYT5Pu8JdxteGNxsJ7pvN9f5iBQRxaSKzpbhb3cB25PDFn",
  "key23": "636wBVKrRpRPsn2DbjiZbpZqU2CYeeSisi8BwVab64nuzbQ8kvStgDFam2YgTDic6FsGTTMDeMKmPyrjC6z5vTRd",
  "key24": "5KQiMefjDLJisTbQ1R8hPsmwHfzCb5aKdhWQwrCEs4FzySAqsMdZMf1wrTQAtZqET2AuyxPoz7cTBjw86S1Ek5Rh",
  "key25": "3ARU1Va29nzQ9jpdgLDs6igtxmPmyEeVR8CTxP2qu3MnKvpUVaQv5gZBeKXd84zVsEqUfGyz6XbXNU1NhwWWSYaq",
  "key26": "4p7CTtYCTTgtzXHf8aYmVvA5byDv289BD9CxdmR19tpSU85x5WhUr4L5w7c4DSwahNkUWUUsUPnFUFdRJPG6FYxN",
  "key27": "2AxHZHdKxtSqqsNNUL7cNaoy9p8vbTkT6Df5p9KebxWNtQSSvPR7FqJfM4UBPVF65LUHKWYx2Bkrz5WRXfThtDVm",
  "key28": "2CswYHmP1shoPvWv2VpEy182QAYHxV8TzQVMntXmdJHghz9FiMRHLcBM1m39g6pyZf69MkFhq9Rn89c1p2E1uPj9",
  "key29": "mF9yPbpNzmHzfdXZGLtJ8e7YtvhetK8urfDibZCXr5J7PgPrpBDkw3YVzGYGMx6vfu93WPecMyxMa1VFg1NcbTv",
  "key30": "5745Jpx6vby6QwMABoknWPBarhN6cYrpktj4yTpWXkNUMGP7bT9xsHyWGKGbn1HHnA6KCHuQACtmGChFrBEESvY5",
  "key31": "nMP5r6TF6H8VUsL6ezC9xMLnJbzYRH2VGDEheZacCGh5xxg811TSgTsa73gdVgJ5BfesfUAAwXbQcUzdLWuaowS",
  "key32": "34zTjFnKq9zfWjVor9jSMzrKxaTmVcTAbGFSQSsYYSeS6VvidXYnre1wgAsTvggqGEppkhsfHexzD7U89qNGDzcF",
  "key33": "65wtCVSDoodLiJtHHP9vd7p1madHuEMyR6kNg6yRq2KgQLZNvKvV8vGC1dnDHnpryuG1inmvwB769Ermb3oMfDyb",
  "key34": "4VPDUApEmdM34T3yrEdsTr3WS8x7dGxSeCR9scvCJ2HvMy2HKWW7v3DPfoU6VnUi7CYpdxR8WjjZsRVRwa6py7WP",
  "key35": "mUdRBUcnmpiDGecmDRveLoCwYhy61CLA9r6JH2socRbq79ig9nBykgJmMzRGeYftDTpSnvrQxJPvo8DiXResfg6",
  "key36": "4JWy222N8KVq461uC9jtq51VPkmctYwSZGPG8avnXHh5GhymewP2Gnz5H6ACMRkDVvw3c4ixj47jTQqtvViCWbiP",
  "key37": "5m9fYVtXBU9s8jtGGsdR4DzAx15vJ6dxTqqDu9eJAMz995U531Uc6QJ134LPt2NUsZ7txFNzP6pTKUNWTHLu4LmK",
  "key38": "24XtWmt8M7KwoYtPBj1Mb7VHCa435978M4w9TAPXwbt4HGUW9ri6QD3j48WJBqEACAe3qvv8KMBmwxY9mghs8CyX",
  "key39": "5EXvgxouZtnqGdqarmmgo9DK4U5LKZTBk4BwTY4W37meUEMourEZayi8SMkwGZvbgPnAKL9N88nrxoMHVWCXkKSU",
  "key40": "3d7aTc6iaTkqZaEDffwyvGXCDXJLDnLcvQc6XTKysnMizgM9g5kwaU8SMxeF9XVcaqu7wiBGPzY6F3Anh8nRuhBk",
  "key41": "2mLKsptfYZsaDQ8uuChoBsrv3jXkMrZJnHQJwPDYLNH1FGh22WDXQGsZ4R4vxE1C3j52E1jWVYN4fPpt3WXQkCMc",
  "key42": "2CXzmR9L4Hk54B72Tf7KfbnEMqQiz53aMtAJuHGt4GGCT1U7Wc1rLzVQnoiqUkHhwQ8Xznu8ejeP7bzrohCcf1ip",
  "key43": "oYhr6FtmzveWt8nfgZ7h1bzpJQDVeL9G1MJsy9hbGqVi3D5a6M4KwJGvKyGUZd566N9bCSwPqBJwVVDZGneijZh",
  "key44": "59QfcNmLdzPnkw22SQLdECdRjTjiefQT6Un2Yt4j2jR3vrV6pbVP3KhvN4khGn3a3ouBBVHPuWbJfdvzCSPVDJGa",
  "key45": "365NJgMQ4iczVpVyoFTz6ujpivxFW6GasXBdoQXpYwvZdu2s7enLYvMRHL6a4avRgUDm4XvNWn6KyrDim7bzaJE9",
  "key46": "5kyCzkLfEnb3YnezaXwkT4Nkk5FnhMJKpynnHvejn7ocL3Nq5BouCN4QMdwbDBhoEHijaWaDBZfHY9xKnJ9Xv7qj",
  "key47": "iaTh7NRFCUWviMmQoEQDAHz9UsVMojP53oiasFmD4tW3UcPS2Xwdxfb3GF3hB53Lkd9gegsQ9hzBfpkdhYgg8yd"
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
