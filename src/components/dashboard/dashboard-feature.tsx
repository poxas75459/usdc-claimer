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
    "5DYGtHZNPE8hbXLgBojhoETxYR3Fef6TdtZ2rafn6X8ddCPmwo1du9tjXQEbuMYnnLknEoHKpD2hNwy3ga3rcCwa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "13cmZ4W1bcdUjSpYwfU9ZAgx7fzt8uF9rJuGyhRSNW46WYHNU5hTYGjAntjQmHAs3Qgz7mumjcyQe3i1goA4nLE",
  "key1": "5NtwF3seL5vaTr5yd4m5ybrRV6H9FnGNqZjhpDG47ZQoT3DktMpvJENVdGkeCBMppua3kRXr7VM5bJJ17vguekmz",
  "key2": "4ZuuXcrX5qm8aa1aSXixGwcm4PwQqKE3fmZnRN6s6J2Jp46uNf8BLzd2SEhQAvLbK1zgsoRNfc8Zy87Zt15WLxUi",
  "key3": "3wNMbSu47sPdrPLvBxBNJmbZP2BMT9MTF7rtzXCxEGkw4AFbS1wAuryiKKqPQqjgtmcv3pFWnunVSfLxSmTS96K1",
  "key4": "5iwwaB2YSgfndqFnLjoZma4NkmSxQ1sVXKd1h6KmJqAZbAassND1FTsdu3dnSsMNMAd3jcCfjSQArkd8eRYbwHZs",
  "key5": "4Q7XXJSAyzZS32pPkkcfS8BduvfUwT8FPxL6EiepkXg3VsS5pfvSY59CpW7jaAC8SCxCQsv8QwJChv8c7K3NskPa",
  "key6": "2VgTL5foDhFHQQPKbAdNvWhEzAhsy83hnpkixoFKED9kdo8wcepi7wcG3QsHMnJ66AdNTatEGuCTg93xKKzs6fTp",
  "key7": "2aPRp4V53oTG6KVgqy6zLtQnMUf4md2kJ4jk5xCJr39JD3WiBKHfUk55AjTh7djg4bMRSnVideiMssdSky2vq3fC",
  "key8": "5Cp8Gaz9GaGUECEXrPzLij5wyZauf9fTenN41CiQ8trHR72oXy1QLEd9PBc2ctuubwULchZAfnH7k2rL8v37g8Z1",
  "key9": "2Kj1cNFtto8R4c5WaGtjgpEReUTgYCuxb7SZ9gJbN182ZWodpjPLo9xoGid5x3TNXvdPpTKYCgG5we26aMxJytrc",
  "key10": "5hEBMqUn31umZK21isr8BQZ24S1kJUum9sUFCsC8o1dHP6Z2C4p29kjnUmWLFr3HUyH75CgbzT9r6UCqFwAAv8bN",
  "key11": "5YFe15yCmoT5Bj5CP1NKgAgo4q21ZKufipFx8MdPnFT5D2J9PuGi5M4BJEL5HQcy6c1vRw8hGU9sHUe5iiFtEE4Z",
  "key12": "4V1yE1gS2sDskpWSpCSDRsshkyJwYpjRXdE5QrJ8QahqnCQ53uk48nxVqcE35MXa4LuWqUzdGfAmvpw6q8KdoKJx",
  "key13": "5sePVWidD5HTXqMz9PLS8WP3F3Q1qMdMirTkQ3XSmQaiAfjPBrECUZ4DzgzUDynKnamqHVkaN7FwhfaxVPS8rBJN",
  "key14": "U8SoPbNiUqgf7UDtbHnD6cQTQFBEVyLmj6j8eZZZsAErdEcPbmPnH1ryNvbXcjpg4VLiPu3tbrxqSWXP7Y2o8FN",
  "key15": "25VUGnH4RkLTF2iNju2nDty4emTiMFhyzDmLZ5AhaaXQVhB7cy21Fza4f9qmSiTmV2pm4fzkU5QH28j4bfWmBmBe",
  "key16": "5SD8g16fPw4fXXxWWBXwg89WxAfBYMfSu7zw3D91ciQ7P2TCinpBSiaVQhGSdwa9GDJk6qgBZ4zuc7PxULPogg7V",
  "key17": "PXyCz9wQ4QNDS5wfNaWvmCW9SVrh6tJ2f3aZBdhxeSnsmtGDLi3MzRptQvF5G3XhJgcZ8mBWwpQqD6rqzKQuakW",
  "key18": "4Ju32VMxTVaBLKdftP3Fcg9CcYu435nn5DA6cm4M39MDovxJtoh6Dtz6FgUXbSoMdky7pNbzFRMqSzFXYP4nt9mz",
  "key19": "5BmGEMM5c4DksyWs5KENPaeWeVb4WnRDiEjvdkpQkspkhRhfLWLQqis6oB9xoXo1jEC8FyfJhC53UA9nsjFD36AP",
  "key20": "P451M81kVUafmuLEgAztYSSjrmYTpnovNo3FiXtQU6FUXMT5ajxbAdiF6K4erbYphfJNd7GoCRSTpHw34zBgC3H",
  "key21": "4EedemPU69ViNM1b9uMxMAbkXpYBK1QAzg15zzqKCpDR5QzUyjLHgBTrDy9T8rCSz8UcBpbWcXzQBC9GAWYyLSV2",
  "key22": "2JeQavfpGg37be8BHBBhWpDjMQhC1QHczzWafWzu8xghVsEwCrEDXL1k4KwRXGjZisabZuMCZcVN72YPaH74G4EL",
  "key23": "J3WA7RrAk9vV1zQMDT186LWihes2FJqiAT85EDQoz7xKswNYhwzMVF2SWRi3u8gH5LT6xnvBrZWtssugA3grmBH",
  "key24": "3ejnXzr1EavVdexTVicoNMJocKCwzoWa6RWmhFwWCr67hE4zHPF3RVuMkrXTv3XX5nGXWJVkR14vb1aNUfBobLCs",
  "key25": "3dmWabonenM8va27cwPjmTv96e62gngHyrvwFWZyEwDLbiFoAyzHnQNx4ukSFNQfSZQM9k5d7RLUC9nubZdJcepU",
  "key26": "2ZQn1PmPm8rhJa2sFEv3ztxDbnSRQZB4QFxxjXMY9qdJwdyboWDTiAMeGT6C56ACHFvMkAov35JhJeXvbTdjvKXS",
  "key27": "DC3CvPmXQ6veSsxztYnVPkLBERJieiTcYJozu6x8PDY8nCmbPivsWzoA6qyeQzub3sE5UgnxosJKNDawUVyQQC3",
  "key28": "4SVgkQt6cAvv7aZ8ctpSJx8AG3LwDR9PCZMGJSDtEkUyHoLatCutVvTa6Dm4NJnRiXvuXxrK52YcF1PPXZw2vKsT",
  "key29": "5X2DB36wetmWjhew4dp6c12JgBskpz1EttRDs89JumBhX8ptyMBd25ozubAchMLQrQZbJTDj6cjdfTdmvoCvjsPt",
  "key30": "47gBsyohNh9FQrUuymT7XveCYnSBGq5rZUhLo5KVxuRRNVjdUH4iZJqYCpZW4eY9TYsNApkBQ4U863us5LXwvgHE"
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
