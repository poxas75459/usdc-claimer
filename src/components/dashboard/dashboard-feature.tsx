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
    "3fZZN96fe1UnitfWFnd7j73M9QGufyS7o2X3yyBpx6NBV7wmTZQhebPxL9yWBqmKswfY5hTA9LPR7sVycoMSxs1Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31bdLAvzLhQ5wS78w4fHJuJsUYdc5VtE2vvRXsjw1s4WwrBXoBBLmm2NJ4Az8B1ABFwgrNYFe83gtDDmFNam3NYE",
  "key1": "44zDMZKLw3EaqwZMkJc6YZNp11unWcuVxYmAXidppBycHJqLVEypLGoBqu1waMKGvxekXzrZy19fQPVFYgVn8xKn",
  "key2": "48T9Dvwp3TUYz79XLiRDW5mSeADBTFUQ2ieUTHLgcCaKGsx9GULM84cR9GTVLrkz7grXT1QPLJGqhB4Cs7QRauRF",
  "key3": "5WesQ8ZPGiFsY5shDiTWqMNDmuHW1GB1WSBc8KRSWbc9WBPbPSfHZXi1BftusT3ER2UFBkfvsEwQgA4C84dSaTaX",
  "key4": "5TbmwbewRDZ48hxjZ4TzeJVyGgDw1oAeBJf1J2xreYB2btrodwD4aqERXdojYYAbCB9epwLom4V7aqbxgyph6X9R",
  "key5": "SkV96WJi6Xi8deTsYPe4dKiNpjjY626iEqQqVn7S7BW72CeSU5Qe1CwQ43zu7mgCVYmsBkR2NjEqLFqCX2PqvUz",
  "key6": "4cHRuzTiKbZ8MssRxbCAXieGnweTkx3BGqcWtJbY8VU6isYCrKZ3eQL5Jd2YizhqRS5Y98VBgzMvKYwNG8ZaD1gy",
  "key7": "4ZAtHfemHXnK4Lj97rb5fPmh7ufqyHAmwcXkYcu5Rz12r9q3bRo1yGV2DgsevFRMzc9rxP3gJTACoFzNkNG316ZV",
  "key8": "PdiqHPDHCXwbr9SGDuGmUVsi1BsRMu75LM9t88FtsicHtpeFjZ1YUZ7FCKkTK4b5rVGFkDhJCW2qRuN6xuGutWo",
  "key9": "TgLTGoBgjCygXxLNKsKn2ESWR42jFNdKGi3Nv9H46wASLh2WTkPssBWYS91gcsh6czbM4ZK7Lc2J6rujJ2svLBd",
  "key10": "2MTc5yT7ehU188igJELpjsGECuP74YYzWBMnRF8nrRE2FFqNTY49K3yQH4GbYav7iT1XENXard3g5pXEm2Wgrwuj",
  "key11": "41My8QPL4vTfyavr8K7L4jhcTbtk3afDds8RH9Mb7ontFdVPtoRH7NoNXp1bVt3JDRv9hCvBkr8mhn2rTJmxkXkX",
  "key12": "CxZEqTzcz4U5wzQxTZAim6Y3ryyPifPji69v8aVGe6dUkfDEq1mKUEAHHWuCp9HzsJF7TpwCYhVhisVksagCbhL",
  "key13": "4NNJyCb8en5Yzmm3dchso9VGMCjGKKGqjnFUHqaBkczcCA32A83Hikx7Ps9sHXrT5cATiVQAWqL26roX7ZUQLmSt",
  "key14": "63PLLn6g3egYRFhx24b4nRosjBiSAVTgZt7aaBiGQ98jicq6eRCvhM3ph8d2i7b9jTm2eYBDeo4GGFNS497423yS",
  "key15": "3xAWLpbFCpKz33dEdiMmTbxNn5ci3mAA8rNFs8LgwLHz6EWiUN2XH2zDUJWsKYavw4Ksh7bwWpJhMEF7PF6UUk3p",
  "key16": "47zKFQbBiWL8soTXfQCymVsZs5dd1kFtybeLLXuWwC8aH9PNi2jqoQ1x3taudGZURJGWgyfjiSTgXwENfpVnpCfA",
  "key17": "2swedXPgxsCYd3VJsYChqko31kuM9Deab19eWNLBTVL348pAZLpr5hGbM1ZtkCkC8viN5PY4bpcBFdvYGz87iEG1",
  "key18": "2iwakBxntkEGYwEj6nXiHze15fnPu5uM8AwFKUGuLmRhkMtUQN6zLXJC1Vv38RE3KM4dNEZiKQswXiCP2MCHxHMs",
  "key19": "3TRQ1ZLjLSduBn3J1gqXpi8ZY2gLssTy7mwCgxEcFZcqhfZ7njc4YcSMuP9vTApMEqcjbjuUkQffzzfe6c4kQGWA",
  "key20": "HS9ky2N437CGKEPrxUuwppgXC6eh6dAM2WP9aHXHAEDL98cAbsd4dkA7tjGmELf3eoqkp5xYSQHYcugVUdMV6Em",
  "key21": "3ApjFNkpBqZJjHvxU1JmyTggW6wNkgV2gkf89fRfdZVBRFwdm1WVpEPcJu33Sm6VNMUcX21cmdVi82GBe3RUxtGa",
  "key22": "2q63b26FyruYce4Juim9inpHHGZ1veJD6gQDPWNQbBNTCHdCdN5LdTXjgE2ASngHwviCh1g9TAi4dCauTDsAWk7k",
  "key23": "52rAqRLjEbcPHxgSxg993G5kibJ5YXjFew5yWXFhoVkMLQ4S7wG5qAR8r567UJC5qPde1Am3uoH5asqXrt745MXA",
  "key24": "5nxczp7sjHjNbJ2RUhUxAjhCfLSZbyUPoFZoyXNee8Bmmk3dUBmwSJNR2KgnpicH52xBXs2NjiyKxFyBop9emDAf",
  "key25": "5XLhnCYGdGseGf9z2ne9gHvHCgjSMd8nJxT5Rf4QfBboCqNF3FZjA7z2c29f5TrB2A7EGg1GEEi3paqv5R73EHg9",
  "key26": "25DEsbXTvw1DtLVpcqo8RDWeJGykobatFpmEusR9GgPMYtxbgeCU3Ynonf7pFf9sMBj9sQyCgwzG2JMUgH3R661L",
  "key27": "3mPESA9g5UNa9uLM1VDrdFSkmEeTL8DuM5M5A5A52XQJw5efavUrJ5puLkSUGPMqxdL8pHuha3aJYPZ97TCzuvPD",
  "key28": "3WDeE2cpoYmQQZhwmGw7s8vspckNi6euJQQcAwmyxyrVNNrq1veYTN3tRXsT7EdfE4fyvCcEFoCNgavWbdZ6ATtE",
  "key29": "4tbGaKEG3gpvbzKoXqucAkCkpFGjLYnFe44pTBKFsgiE3TB8wd4wo5VinrGRpjipEBYrA7KtEnuTptmJZ35nuFCJ",
  "key30": "4CKrW15KdeA6mWX26kwKt4YEDhfskmQDdy692JFjkxtWZDRxoYw9o3Nuk2VfSCkHtpMjQRWtst7ENmkMkk5SoSf6",
  "key31": "627KYjw4pbmqsR4gvniAJcx33bhfnA8iKh9bhqH7pQagdpm8Z3jMtwyrybpwGxhCyBwAqzMpygo6dFoKsJcD6Jk8",
  "key32": "343g2SNoHJMGDF4DzrHVorTHuo8P8GixT1LkE9YhSXQBgDcpYHJEgJu3ace6V5ZmUGZKfsYB7ZJrp1ZsUQfDZTbv",
  "key33": "66dE6aEYsaPohmHa89nomkz1ce4Z86eAfbu5qfmHu8A8SfKyJYsRNBWumRSyJ1j5ezL8SyZBJ8UcxMqvtFz8kAN5",
  "key34": "2oYQESbMamJYkxx19N2aRZttSBDHtJQzvwTf5F8u7T23eTHtRUudPxAzyifKQUSipBNckp9YVTCsty6XzbGgcjp5",
  "key35": "3Skz1dQtM3hs7Av27FQ4qmjC8Lrh5xyPB3h8mF6f553gt7pqpYfzsGmmy4YffmE2bR6kU1JqnwyZqGJiv5uLyjc3",
  "key36": "bGGJZ9vNETor5j8HHSaPFsKCkzqWJGrFwF4H5ETLt57A6ZuwUh5YWzdiHLsMMXepSEa437xyA4hsrHLuq5Djhkv",
  "key37": "4EwitpFeDrBniEjYcWDzF2gYUoq1oTwWDhpYE2uvCG2WWFFfWSTM77NtktgwRWGbPHuYz3SqDEm77sKp9j2gCyik",
  "key38": "4NBBQogjvrUh9ZFaBm2so8XHVZcqbmrCZ8YumEUSJ6k8EihmzPqva7BHnWdYtodjqew9u827tkW45ScKND1TTwRZ",
  "key39": "2XeFGESKrgN7tmLd2muQV6qZ2BvLMoCLvUbYx4MPCsUwNoUq4epCt23inwkdWU2AezjKVihBPJhY1AuUoJtLHURi",
  "key40": "2Fh47RLcWfavefmkRh7cyaTC4Rks8hmhU5KTe8hvLqRTk5N3UmzD1JdYPVYSTTPYD9mk1oEe1KuMJaCrh1GSPvqB",
  "key41": "zzYNAmoRNgLaeqUcURzvzx2Wzsa2C1DxDxD1tPAWRw9GyLvLywKmMBwr95iNe1uHj7FMZeC5sboyDCTzWtBXUC5"
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
