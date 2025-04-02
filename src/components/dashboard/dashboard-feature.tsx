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
    "62dsJAnqw6fPfcXbD5LSvqPZYzGHK3o46KyW5kHRZNJS3epbJj7W2Hg1G4AMPmgt4zZEYDSdQR35yLBXqby6PrdY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mHgmRWE9hut2uKcif6YC9zedSLRpC9rRaq344YtoFehwFXqzMsxTddacVv3vovKUndkacoXYvWwDEEhpBj7VaQa",
  "key1": "X3dEwKQdmZVMJcWbRz9pxYHckwGijhipAKmKFZgxuq8MXPEMbWwNDZzw1MKh2Ez8Hq9iWn58TUUpCdAnaY1Kd8A",
  "key2": "63JouGKNVvbj86mApHEpMYrM43fPWQHL7MwB6XuzwAWL9WHyb13SvC9AEdKeWvSnf9xFfd9TF5bueCTH81rR9biM",
  "key3": "LCEuCXVUDSrJgAtujmGPPX2tE6ewg8LY8acyKCY931r6333NBnguGiYGXauDpGqimvazGMkhDMvmV2vgy8oLyp3",
  "key4": "3RNpVgwPhUdxDw4dXBQYiY1PnjTMJmi1qe32Qoj2PE3oSmAgtRLFKxmhL4X7Y6yjG2bs73LcGBSEzepRDfb91T2m",
  "key5": "58FZZMpyayCj44WrgQTbbarygoxxyfEGR3WfMCsMMaFQqAh3nM31ZsWKZz89fdTURu6HJX1P7itg2cNwNJXbPc96",
  "key6": "2bpzFSpi8Qe29ZYSQfw2sWx5mqKFw9Bh5DYRZmDeNY2EwPWdbccZaDHHbkPG7rcaESeWYCb1wjx61FrrFVuxqfqM",
  "key7": "5YiHu2PxY1dcbZniqM2XSvbTwbYHKmxXQMCxF6Zr84yFcyp65x5o8S7T1PSQLUzFLWKCjaEV3EGq1WzFLCRPSceB",
  "key8": "eLrYWsFQLU31vvtkPL25zuDFkSVENgxdMjAeberhUnWbuJcsnuw1QTFFY7hALsCWH2nuwEg2i172N7uDhz2V7fT",
  "key9": "4LSxfu9JrrDcDU97L6GDJ5wJULaYfnMa55y8q3YH1WJ6RvnXPaLW39jd7Q2nMYhTLcbDwVdcifC2qQWWD58XqT5x",
  "key10": "2rjrSkQjbYd8MAGp2f7Rzxy8vGv1zcoPCFr5yUfrwEYNH2DG3Yqc4QymC1H3RdYWK6hPtV2t46N6UrDR7wUk71gH",
  "key11": "2Rgf7k3X5BS4sbV3JJ9T8X8VVydrFJWEXPpSNkC34jf3oico4zPonpe5N33U49mBtzmKsGkneDnHZQ78JZCmcD4x",
  "key12": "2xj6VDrjubwM9URnAjWwJQLCYWo5ohur9fsFdia7PSYnyfdMwGVLpcMwgowVSj2NgjHrmanGbqERCyEyRhmnsUaJ",
  "key13": "53LHBTowytogY69DN3CoLmyoRgFioFBDevsEFwgRzvosMS5mbJHmLLGpEVzvf23vWeG8dncoD4Bq7ydJdKMpGqfA",
  "key14": "2F9fUawfwkNNPJ4T1VRPaQooNcLfRF64QtkfNyDKsKPb2Ecr7Zn4BhJTiMRhGQkhrm4RKEgcHSfQ4xriFCSaTPhq",
  "key15": "24AawA7WR8uw2SxUjcYnJET8qCPWKMkMuFicgDEZU3YZyPKePbrzig1ErVwbi5x9vFCZ91PkwRpH6PsGekPabzzo",
  "key16": "Ls9bFDM399TmueKqmcvEhqNWYqiDZ1s7BaXKSmZcLgo1j6WUymLzt2sJkcUQgx1BTaro6cffPmdADTaAWpVqFMK",
  "key17": "42pJsKeEF7SvM8VwyHtxFc2tkvugSgzQvfADF631sj2L39ePDBkgtMdKJbh7xCg9Mio6v9Hid4n8awEiGpXNkdxd",
  "key18": "3KJEMKyoHxPErdx8fjAqAVtvYyrZuiQTMRZXJrnWccGif4Ln9AMpP7jo7G49dARrGccmvcygVMwtecRSHY77ASK7",
  "key19": "2kmDA5xYLgfchMvRajAPHEhwvJYt3zudXdgXjr9YSKgmGbqyPtsYrB41SKRWEN6cYqMV3XwjC1ANoHeA6Jkd4KyQ",
  "key20": "4WZ7SHu3DBjf66xWKQdi72Y3uUDvjTwN3cqkGU9QB7vmP4hyUUaUGMzm7KGm1weYbK2msDErGqF7QYNd7kimvKvz",
  "key21": "4gHPbJFRt2k4nCUK1xXF6SyqANCYWrzqfacf5BfcpFaiPgd36EUtrnnTgW8QWDWba6S9DFosmnhk5TtY94YHBbBr",
  "key22": "63Pw9YZ4xr9p3W8vRvrnNA3AYPRMMSUFCx5apkWJQ5nW6iMviBQNhJWC5A3B3eFuMBB2YNR84NSXxnYBNa9c9HfE",
  "key23": "riBcxzXdQFTNrnWpUTfCgp435bhvQLcsN7WUWnSGGj8UAoMH6Ro9XNWo2cQGPwEu5eDpyRm3BVe6v3mzGcLmfcv",
  "key24": "5fGuFk7FeowXoDzhMmmz98v8YDxobavMFhSRwzcxo2FiBcm91tfsBTUVhmnFHGy9U9AY9XmdvvkEgiakRT2Yx8Bh",
  "key25": "293myBn6oz18YhCiF4h3ep352iYTdimTa7Hcboht84vLFsW1Scav1CwyfDDHq3oWkMJCZEmG7gKc46Xxoa52hJ85",
  "key26": "jnZghnKWUopLNzqdytuMbzANoAEamziH5KwewNnXYBDYL4rJEQx9wCQsRhYCwqs6CpY4FgVsiuJR84Z88chhSoK",
  "key27": "37kqiPvT3mZ9JbYpdXq3w6eAdZ8A4WASaD8fccsh59SjQBMKPmR2weqPjysCQ2EzWrvKWhqq6iQYC9p6gFgaJfao",
  "key28": "5KnZRhZEFmR4yQFzdQP3JXMJLHsmVHdmd6PN5CcishqiZWFxmzJ1asSiu2XTahMB9Vptw3xo5s1uFGb7WAsDRybd",
  "key29": "2qLvgUT17rpCxUERL26gLaag9YPWqqp3x5pJpJz6psYQ4RQBrZs14evbmQMYFNzvL4HQx2ffCAkDzKDqkCy7oq5m",
  "key30": "uJc6cpRaqP6LSnmtQYLCtcz5QDEdRJRfm1t8FrfTE1hCS9cxGa4ceDFNERssGw4LSZxXgZW2kYFEhAa34Srw5Uu",
  "key31": "MMKwW5Bdvz2nxUcH5abMdpftEeqmbp21dvkzkntQW5UGmgbbFi7s7Qy8pK4fXL9dTGQob15YZxm4JZ4o2xFW2io",
  "key32": "2cQrt2jU8PkVX7TH2FuEvjjEepKwbCZT4TANRv49mcQoCWwg2Bu5f8aEXnzPGCUPBWiqj55Cbs9Pu6xTESxJhHqy",
  "key33": "VyLE2cYix6odDLFTSn3HLRUcSkjucia5UridxPuMnPp9GC3ghrdVndXcgLab6nqPd72vtVia8jaD943yeHb4QDs",
  "key34": "2peGQqwenEabKLT2jPwHkDQSM47ZREewye8tDciUpgpxab1fo7hcWmQXRXdfv1phjgG7a5UBMStKVTsZoaaWoLW9",
  "key35": "5SjHX1dasx2FPB5LNJr8imrCzeJJ7UkTX3m8Y5CKX3twgigRDUoyepJvd87mKL912UUBdm7oULRkE9eYevCts9Rx",
  "key36": "4EkEjMau9wuQsb3inAnK8N2i8KJSQmXZvjTeerfLbnduZvTPLgbgYMFJAogPnf2NGwuszYZXffPtSdhaeKEimXf4",
  "key37": "648GNVdhEuUszjGZwJzsa3FYkT9NFVACvW1yUfC5vmyX31TQkrPx5U4oVZmnmkaoPfJWHsY7KcFJW3P5XPAcZm35",
  "key38": "ez2bWrvyCteTEMYtzjrNaNNztKw3A7munBikspRCShU4TQLVSQ1gSsh4Z5jJQrb8SxU1r5sySVAic7YTMPN7o1L",
  "key39": "2BC9TuckCnzYrK5CbyAfgecJ8VQ4C6VvqquyQ3a1jMA6rzzYyqCkNYTc8Y8QAS5U5R2gLGWDX18iAHHsaXmfbLD6",
  "key40": "EyYhevnJpCdL96DqgggmdNdYMBPPiRCTfEVdyc2jhAuYV5tbKXnLkEeJHBTsXVP2tVnbaYitR3L53jzpabziXPA",
  "key41": "3vecNAEY5o35zEeGPTMuX9xZSqdDtCnVX2b5A3cMDNDwoML6jAXKgmze3cfKEWuuUzZ6vBXj2R3sKpfTXgwMpR8P",
  "key42": "3dTEEaJymx3YeEjsyV44ATD5YqYUjHZdqHjtybokea6R7Bzh5mf21go24oWxmxU2UghDNWNHTmwrPdfQF35hzrZR",
  "key43": "33wkyqA3JYvjvf6vzCB5iNGkZvrebYPWkVVC9QB6Z6vVJ7QgyN5ZZ4J2tXkwqG82KDckMJMe4Nwgv9WnnUusSjDT",
  "key44": "2WL83hLwDSL1aU7peGH3VSbzU5s8FndnbULMS1ax21Dyj8MJKR9vdwzLHpUryhZowcqmsbYutTmbgKwxBayutfJm",
  "key45": "4K9QUnrN1ZAmCMVKj3JGpFiVR9ojSwMMTfkRH1TvFaykMGdbxnK4ydyhMFsTMUvSTiLitnSGvkXtQrnAUzq2S6Du",
  "key46": "5HKoCe56SqrbWhFFZzkGb2j6f1YyUujt1gMhi6ksGx3itJV9TVdB6LwGndp3e4RwxDuP7Nd1VxkVsukpSTZAW4g5",
  "key47": "2NAfMtS8cCY33w7WMvfsmdGh5BzVzmGXyus78un8Wa98n8V4EQfCMfkcL8PB2VmyBJVSu1k9T4ScYjPLmJGBUcs4",
  "key48": "LSsmZiLsz8JSYx24zMNQoKPae5shx3s48aSC8XMXo2QpHVA7M5dwuXfGz96vreRXJ4KpSphp8joutGy86cUBChv"
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
