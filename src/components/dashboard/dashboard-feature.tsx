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
    "2ha4BWz6Lnopgyi5XhPqnVgY1uScfAgcLMUJsQhiN8quVYDP4nSj7ok7sgtrTW3ogWFcEx6sKUcaSqFaS6hVingA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yWNhttMLCnTqfSzbqhCaZVormgY2AViKKzrsrndyXuFDK8HvdEEZmeDvLykpEirVzEVLSCKrXZEjNHbxYJhk3jF",
  "key1": "5MZYwpFzcyvDtBHcQfa5nr9uq6eaRKertxKjn418Jvr8WfMuixNCVUgM1gudkmK7wqmoQ3nL362TN9EmyKbSk7Gn",
  "key2": "5hGUG8vHgTqXsLgB8V3GEAJusj7TE887guKLp4Udjeo1Ha8EaFDKCU5KHUB2kXfDc3zaJzuFn8pVYu2LTCEvpohU",
  "key3": "2V5FBB3zKu7pM47iWx5s48dr6AwSvGwiuKtMqVskWBKJL8UuEEDAw1TBAywusQnG2PQHiavYQuidE1LES4DQVJnk",
  "key4": "7gKx7z2k2cHED6N2qaDCgEMA3maypD69e87NiUA8cBHJ787SuSih3UcoBPgaXkDA1RQujN1u97m2zUctBzQdk1B",
  "key5": "2A4aUwbhiu9DJHfkWttSryRVcbAPWiVa1pmVGx8yxXsjPV49d6mbeGBaW3dRriALqjgizg7vxFg64CYc6T8tpfda",
  "key6": "4G21NssLFa3ZLnHEetWewK6suwAsVkCVji5ikHZXKP2yAwb5NKbPPjUzqcRCpmt8arZ9oGuvjtTNRqgRBbSH5AoQ",
  "key7": "2Q1HYDq9s6bsV8rBAsxRgG51aoRYpCHZHHvgCFmHdi7YVNm8WoXd3tdvFPtR2bmkX8i32MK2tYBBpf9PFrcwVFX6",
  "key8": "2kGM3BzgF1ryGtngeyjHEi457fR9pxyeaubd4qoVNs29UwBETRUND71sTuh44gRmK7UPMvv45UxVz1q7fpiKL6ra",
  "key9": "4fMdfQLBxHTpVB1pWt2gYZW29VTA2fFAwqxdNJoHfrtP8reRtLnvDraJ96ymbtdei8Zi7xNRBJx3vYNiS1kXuKdq",
  "key10": "YhVySqxNJw5EzNnQNTzARnA1FE3FRuKSUboF55ZxfTS9DQq7qE4BQsypGtFaPXddP1YadUq3rPmLsqxQq8h7awW",
  "key11": "2cLQZQJQ4pRzTFBGuMaHgYfJce18wiLutH2gQrPerchqizHbxJnjjdaHGb5Hb6k4d75EHYqt9bXumoR3i5GyVddJ",
  "key12": "3FZKLTUJ9s5TK8EP6n1oJ8zNCPZGnjBcykjoPh692KQV7vVtdXEYa2VFwN9cFayw6SXZMtYKZmwtgSzvke5yHA3L",
  "key13": "4Jip2hSskJKtqTV1svrPx483Xxr2XUnjtRs29Dmif9rX1ajcb2Ap1GmVtZ7tFvMoQjH82fE3ZcsNzMFkoW62xxye",
  "key14": "2r4dKLEWkVCQHLcfXWMMHNSL39UBgH7Y3LUNhwbC1y9nNm5VoTEzSsgBFY9vQAvfNbtDgRip4HL4vv2V2Li5TySS",
  "key15": "4SVKxndH1iDZm5r3GRPLG7GcrEp5MDSk8bYpUcqnbNe3KwpqLnqM5nxRVykt3Bg8i1gyUXfK5HAMqsJE2aBcTqPk",
  "key16": "2ibwAXhd6BnUvKrSGDE3YvAHDXGd7tKr52ijtAb5th5dMzwz7dMR62cAPDviXgvHujgHigD5zh6GejBwRNYPUX6U",
  "key17": "3METbrF97PWur4s1qiztbYHDNvQVdkGFW2HiSK6EsLuofq8GinYnmXXJjUS6caCRTZ9mbUSMKPoDVyVBUQoTHAZT",
  "key18": "RiRzLvT23Kbsxnoe8UqvpmgmSuE6Gj4feJRKWpcZLyY3zdFh3GrYiKgApXgFZV9vi8UQt7DjiSdpr8hzPLgXtgZ",
  "key19": "3kVJ67jXmDVxpi7a1ALSNn4B9TGqywV5VT6DoN6zoDGDLVzs1xuxUfLYrLho53rDyaGmb57FPHChDnDdauQ3mEtV",
  "key20": "vHzsxmENwydHmL6ASXdPQ5KRCDfPraHNU5sNDuWGQ2BYSSUyAntPvSKu3krM1ape6h985UfLkiZ8cMKoWssvqGa",
  "key21": "2jpc4mgp7BatDZmKsMAXtWhm3hagEyomR9yQvnDe5rvDLYRAh853AmXRsCVUJXGzJcbndpAT1H39z6hwAcB4fw6N",
  "key22": "3qAURrv9J34aTofT1Ma5EB7rWrFU7cignbiK2jKavx9QDRyJve84U9MPNr8SggS3PDtaW1s3EuVZMNGpSB1Dp8gm",
  "key23": "3dyacY7ZicNbDoYfLdHmF5FjTTH9mQRkWar1ddyujqr7BBeag28PzgXNy72RgVTRLJBqXgvZbLsQwnYbC5wYQZ4y",
  "key24": "3Z7uqHFUzBEQHrbAqi3nU4vFXBWWX8sb2Kd4PNi5Z8n9oCMCAuhMuMhuXJcdxBLkmcGhEBQqQ6yyvE3jYU5uqKkK",
  "key25": "4ffGwUxZNJyPv4s9X4fuiRD4VftbpVzHCnpgz6HXGraVZedfeDaT5UNymjpicWWMUCByvtNy9wxmSS48PHWYuP8r",
  "key26": "63LmRzV7Ubsd5x1vWeDmQqLEXmQAba5d7RAX8fv9QJMwJ1L1FVmG46mN6JcnA1oSKUEAh3MghrXgy4N5g5UYZqRB",
  "key27": "osdNtRPTxk25QDoZpp6yGBMHME3gMHm2r6ECmcreRPz6wfVRU4Fkj1CwBHj4Y2suqH7GgbHQ8YGkfN5p9orURaP",
  "key28": "2cEy6qoWmGWUjExVeXmJhZGuzQH3haZDELgGEuiWPiyKDj567CYyLwrrZioQsP6kS4AceTqsYaNesJ9u8uXH3tyw",
  "key29": "45WdFoxpCWCGNLbjTMuVp6cj6uVP5bpGuo7X3WuvR2dGHzvXEu6JP1cdK9tjEQ2QBMBiedyGZCs6zjd9ZUr3vn2A",
  "key30": "48zR27syRwn2zkVLg7yu3vgjFhEEAhsieLTzyAiFkHJwVDJz1p4fgPzxmgsjc58ZV3ZdapT41LBR8ZLDrJFqj4Yu",
  "key31": "64Hhhb6vBU484n9NSTsjpjumHCBsCFjKvonW6yCB8fW14MUTBsoPEwdy9wDALrrV9qinVjtc1gMtpfobbLKyNY7U",
  "key32": "3VqSe66KdQvZp7si3gxJXihGAnKtByvRpVTBw5dRq3T6z2tFyrL7EyDNXQxSe9UztskvTLgpbh5UZivT2fMdJLXb",
  "key33": "4QkF6DLSJ51tYbWa1RpG3kBmQtXyWpkvT8JjE89rRPBxXDHAAdotseGrGUtn7GuSs4kBWscNqBXvnqT2zvASPKcZ",
  "key34": "5PRWGqA6xNQ5xzsWtLVb7oGL3kaGeQ9tb2z1a8ZBnR1TTAXSG8EFutbL2CruLBF9f4T2qLBfFS2btNRKp15f8tWh",
  "key35": "2Tj2yJfkaEehijwGqBgAwacp3yz5YHPcjexExmmg6UmrMXTxctpsJzpVtnhNgnhKcoAfMFBywnZYExMgRK1fpzH7",
  "key36": "4Qz3EDhSFDcarRVPSA3wuQPhVWDrUyJuUdSGB1LAVbo2WL6FqcwZLcemL9Lz44anLFvsHFERr3PqR3BjCxbpinyK",
  "key37": "3EVxcrpDjfEK3Jf2nzHFWi3QT7ekz1n28qXNGJ4iwQ4jWf1codJyF7SfFSJJowM16iEMNY9QDA4ao171H2VzKUzk",
  "key38": "3YzSumpHrEA4k9iJyHmkQQ9wj8YfZHYjronfnviGwNEadYwjBzobEoDbPDJA1oyhmJhaBgkdWCU9wbHLhuwugVqJ",
  "key39": "4B8LgPBMZh7mPimc4yLaocQyCBXXagvwi7JoUrahz5ASWES1HepSPzd9Rqrz6ZQzKxzGufWmQrtr7a6XGeYMkSn",
  "key40": "4ppafSKztDwJfHziRHU7kkMgDWwYDVevY5C4FRy1Ssgfy4ZJjD96mMXRbfEbV249ymgmXSfRunCqaHpMeUhCjnBC",
  "key41": "4FwxWFcJB6L8x1QhDapiX3pGCtbYcGMiP83oXht6LQYr4hpcCVT288Akrz54XyTdpH9xNnCniyp4cTahhw9qq1Da",
  "key42": "3iF2pBBgWk7NfPCuAUxaww3c8usQ6Qw8rx8Vst2AXcadoEn636e3WuJtjhZrKsPxmXHdn61JraY5N4az2zWx2mTJ",
  "key43": "GuQqiUZ4Y8ZczZWPNCR2refvFu2L53CDF8vqhsqYk6dRLvgBrdSwZRmgpfJRcDGPm2U9cyRHaJNjvY6izdsqHnA",
  "key44": "4EyPqWf3TGKnNMv67qgkGKtYq5Kq3EgKBWYew2qkkaEZ1Yurkvz8Svb6pyfx31MS34KKdfEZkEiFs2jgHpfppjVQ",
  "key45": "5z8H8u2YmR6Mk3A62bvC1w9LrXs8y8RpzvpkuF98FzjUfgYkQAzdHfMdj4tVr4jtztFxQ8oP99imDhZehCVs1r55",
  "key46": "34L9inLABz1ECTuDqubAXcaS8UCwBaC56r2y4wAb3Q3WApA52XqKSzngRVkLGWwSdyHde28XzazXxNTWmBXB6Aro"
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
