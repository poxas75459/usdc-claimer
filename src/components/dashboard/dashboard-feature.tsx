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
    "5oVRfYSR74DgjcUkLVspzXVBR7ypgP87N4YrpVnCQctVjevSsgdp2HNSaKewRkcA4V5UYQDXHU9G7UbaK3VnRHQA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Lb8CDHwL5mFUXUsXZg5kcXzYSxA9PFrQjiwTQUiYv7sZ6fdaUHwNAcdAhVNVoDuhapcqr847NorDkPbWW1KjUCq",
  "key1": "HTD8aV8fv6UyMFYai1AkJppzJWMYGZ1i4ibTi8E6MBJqC2yQVjJyKKo1mKReK6APhWpTfmX4ft6VUrGGyPssfQq",
  "key2": "RXtUmcHVRTP5AyjDPxCGCir11Zi3CBaz4QbpUUHNCWBfB4T66UQTPvRxwXjjmEQpy4emtBThCqi5NoQL9G5vp7E",
  "key3": "5iNku4ApbxTvGsm8vN8M73tYLADt4wi4oQUFDB1i7P4dJsHHN7p3iv7qQin23giV4QCRe3k58hwH3sEMxShgMoZU",
  "key4": "39RFF1iTna3CASm3HkiDFyM8TevYC5S2T4xpy2f6MA6R6QH5oDUMjBmUssizmCX8qEAxr1F5PrfQyJ3ZXZcsyRdr",
  "key5": "3RBvrLe9VTuAjnbn9xeRVGfp8zdYW9Q9azcdJW7Um1V4CxEkyWU2kkGcbypKoPpfzaWS9eZoENxG6jWBxBXoeJQz",
  "key6": "2JPxkytmBsUPBfnpUBpwuHjgZrNQcFHpSuy3b36H2p1oJRwxhgTygsJmcybwZShBhLKLPHqEGzsvUNRMHeaUVQXM",
  "key7": "5vjxQDDvgrWCKxAD6WBD3NKfHu9pjheFsLqBWSCdH8nKbJtsuoNjricgAtqxzt6fk16y1Cwa4XHDwUC7xWJ95we1",
  "key8": "2gGRRrjrziAXaVPcsjExbGFYKUSkxHYWapwHG9Qs5xxR74U1me6km5TdshWxxVkqiN4VGCUpEq6pRZ6buL277c1J",
  "key9": "4pqnepqLAgruRKrhd2KSVaUPdR3iJJHH3PtNamPpfcW2SHRrnyefDXELYYj99tW7VgdtXRzwBtBxiq1SQm6d7Ez9",
  "key10": "3zCoRteE1EAzoQD9kiHPwPdS2tqQF4Wte6Y5eoL5mniNByH7AEj3uCDZQV67iz5LFmP8sJKpdbKBK66tRZMjAgcV",
  "key11": "3uoJV2VVhsmMqTGFFY7ia8oqRJkvvVacqCyU8Xkvi29r9irTrMNerfaw7o68cdGVoEhzTYbhbJ6ouQeSegUxZZma",
  "key12": "2YVvGaMiV41XSWnb9uFTXSB4Wnvk5q6hwWCPRnteUEF8w6M8cMQtaeRQEZQxWbvj3PdJyHGFz8pxn2im6AS57vcz",
  "key13": "2ru1Fc4qANCCLgjYg6VFC25mAfK3LqU9yeH7po1SBDzX2r15RhY7ttpxco1ChELpi49MM88M9Kba1SfzCHqDeGLu",
  "key14": "3m5QB26dwAwJoVFkxXiiGB4SgqBG3ND8xNuX4wn7qpUTRmTeiioeSiCnxtdcyohY141biEF879NmgCuP4FxBNiT9",
  "key15": "2qj9oFy8ZJSyvxt3LryMQUy8VypqxTb9wqkFbdBUSDX728iD1DfGsxMUmDoLewkfRnh1FpzkrCZQU6V5qgX42YT2",
  "key16": "TEmARqMzxz8fH1prRM76Ke12EVhZDBAZ3ZkqLLzmauRTfTdiugAZWPc3doz5S4FUtvdsK6QWf7jZxdZarmAwUox",
  "key17": "3B7q7mxro1xPUq3rGUrebhrBM6wGFZEYE5kXgdNC8hzgNvroaJm3CbMtHduDj39nRrNFYzjAJASx6vWjnfvNoVYV",
  "key18": "4PFT1wu5b37uSMzep765hceX8qxre3GyYzkWUwni8xEnWDdZRhPZAv1utXcBtVZA8TYfafkL4ctShqycXNXB6rVu",
  "key19": "3kecgrYLUYtGB5YWTfvhriHDdQ9PB7Yd6hnFhk2cuoD2wiqR5KBGMvZ9iPNjg88CVg3eexaiBbZJEbpei5dY9SN",
  "key20": "2NQU1mVooPVyPcLNT9SPp2GhLhkpD9ji7o8Wwx445i78RCLmaCPhHV3aJjeg54DU8G2TCLzm54MzXbAaZxXE9TNH",
  "key21": "gKt2xVV9mYEif2AXTKXg248YPsnNeMK16ciU6GJKKtqUBtKJW38YFxzqgA2vWYrkJr9bBgikMCHeagXsT7ahxrf",
  "key22": "2uPC3BpNGugD4nk5vp6GkrnwVg2vdGtPckwuDnTvjzXCJ9C1zsRvUAXMMYE1fZZAhgQbJWQurWxCGBaPez2wtBSb",
  "key23": "5wesXoQRbLGx3YkBtWBW7EHxUKR7CHy6yDQhWd9QsczK4yEZKbz8zoXM6FtyGWXG2ZBXgnaMG8LaKo6mEf3Hy6tQ",
  "key24": "2QsK9wYTEkwqeH6sqwFarscokvQYEtqXFJfhYHvwJdPufcfrE8MXsxwhWYbAP6fsduu6FX9cwRcvS5hZhw3fuMqC",
  "key25": "5KneKWVAN2e7LGxz9y3PQPn1GrDUXfj8W2V69Myz7e61anmowNrfFscvqAQBUED3tGtiPATgsEgDFhAoZKRwAG11",
  "key26": "35XyMYGU2kwPqCoQxoRD9ZiRPJfqADqnD9FCgkiSWyJEELq2qVkF5Jttmzt681KQmZ83nqsMxXqdBSGCyhM4w38j",
  "key27": "3HNwvzn44UCcs3zs8YTndau5pTQ7FAiAEhsDM1PWEqUudLzhc8iNasHBtFPAC44JdCTbnRJAodJ5Gs9kXxGhm3yc",
  "key28": "4HcX42yRJ2N13D7qPWbP1GQiTSk92NHRHt6WUrzJ8p7UnSoFrqVUAhxvBvVC6yemSGqLKpKmF9XL1ubcakUAtpY3",
  "key29": "29Vhns13y4Pqfu45kLrrDBaW3tfVaf7AmyjTTBiEvhzCrbudMuYZUZvGRzTFqAcs4XnfYoGCy4V2hnpEjf45dP6F",
  "key30": "2ViumWj7bebQBQqC7aKdZGrRbvcaBFRaFwHSWwsaG4eyVf5SoQv2ANeNdbBFHqErdsCftBZevZwdxTrQ1yALVUwW",
  "key31": "8vLHtnAygq7ykDgnFLZPErDAdbF7w4hSSuBRt8EkuPnkeGRgADQEA9ecLRyNw2jRPUERtSRXWxo7uFRGwD3Z9mt",
  "key32": "yYwTGrYm4Ku16E2azea5VbfHdkwXaDmfoCa8yt5MUVDz2WbnKcJRp6Vd9wj4nowBDwVJLqKZBtwp4dx67JBWUqD",
  "key33": "41w7uffAQie9GRdHNoTQM4U9f3bca1g8Ujp9GXNqy94Pdi6Auydo3qGFyEMsEAFM2Q67YCChnYAREdmBtwJ78PUK",
  "key34": "57yPaxgyAmb1R4egE4cQJ5tXv56Uqmgd651n4vu6PJDpZgM1gBTQfCSFN8KQAtfbaWy673EA13nsDBznk78WHEwo",
  "key35": "bk7C9DQTTPhpSH4NmLKGGeXEowBManvaDPuLgq4MNdZLrfaurHR2z7cpw2f3o21fcPRKoNH79vVTJoVX6PJjRMC",
  "key36": "MKtntKAZ2BucSJamc4ErxTp5nwHz96eBAWrtjR4FgWW48D5QVW81bba56BDQPrwbb7BRu81t5Ao3dAZqvkKmKVU",
  "key37": "2rhSMTDaacDM98TfU7Y3oaTpducXtVKaJy2GPZX4WBnpCGjwset4HaHvzKCC3C8oemBgvPqiJ81TYmYGAdo6hKy4",
  "key38": "3W2bFAzMjZueNRfM2uRZ3i5vNncuXGtSjAG5VGqMGTy9eLqryCKapKqrz3p1qxEB1CZYoy4fkQP9WnKz2qbDEuPP",
  "key39": "4cX56tGvQ92UJQVSU2CZF2ZyFUdjU6eER1ZZ7siay8AevTp91qkLDQ4m58pkznz2u6aWEtoxMnRguqKcGUScFaSS",
  "key40": "mhvsGceEFp5AQfQYQBtBpa1UuUzwe4StnGyLaP8BRRYaves9LfTfcCAwkUgBR9xv2brNjDycBZ9sTvUrCsDumaF",
  "key41": "4yuvbG2s6o9QeJPbLXgeRpTpCah8e9VjgZnBLgFv77jWUvBtgsoTZtdDtewMeJPwYSn4gbaHkFtCbZmLS1hPJxGD",
  "key42": "2X5S2h2LtGyLAJqYGcveQzWajVnVm9eDefndjmVwW975KkCKi6uw6BX3GXbqxHKaT4qSPg2vzup9uSktKzYHJYZ1",
  "key43": "3sTBYut5Q6TTiEyLDyqBas5gvSdgueu6Ld1hbUF6MnXm1gEYn8sQWtBvTotMHhkUfryL3UuQ8MFZfMWegfiz5H3F",
  "key44": "4qGCeWdtNZAS1TJyC63972PeXtLaTJ4tD8YTkyUqL4ywLAnUSV7XZns4JD7HzWrhhFTPRvcW8wXmqEAuLLXfueBc",
  "key45": "49d7YUu32H3x8rGXn4nz8zs7ZRTDC9wqZBGqvJtx1fg1twgZPiWM4H3GJx5tkyPna8z6PtNFwFyCfV6qfyAFDLvp",
  "key46": "rTMuFHHuiur23eR8eQM1mDonn689NnN9h5Kx9RwzcHvDBeMEMu5jvAVbcdUirU1SCL1hH58Y5DALggcEut7pF3H",
  "key47": "5yRkQAbGuXKNct4tJ8C53RtR4gHKKRfQYiD3TLt8bfDwzqNRaCmdfDEK8cfrtKQHvb3UY2tKBwSp4JA4UJEEHhfL"
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
