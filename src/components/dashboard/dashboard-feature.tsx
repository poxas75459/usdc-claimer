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
    "17q3iK2B87SpdQqEvQw7CTpZ92YhR4n4CKtkQga7MSfJREvoJEM4he8MDLQnYZdcXeQR6QGt1yRi4WBfRfGgrqP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55gQ7PhtiAe6Avnzrktvfs9BFpJa8axTg8VT3W5KQVjBwDj56TA3McAS63kyxo4nFpAzGdw6QnAKiWjRrTppdRiu",
  "key1": "3bTySb1tJHEHrnqu7WBdjA69QCMmniFbuYW7ovDCmeiR6PCnGyzE45pYE32zrDqedDLpWUpfRmHn4hVzfAYtzb3W",
  "key2": "3Qd32dquvZA3NDxpDSBxNhZHp1rUfnGrCbtyz8Ddk2CCLXkuu2WMgqCteddni5KiHrSJThov63epEmKNx8jwUeTw",
  "key3": "3kFwZmWzrSsRBB5HLwdgiLY1Huwd7JhmyaiVCRtwQbq2dC2QN7CVatBobe9EqtmWucAdsjeT2MZJh18rPci9g9bX",
  "key4": "5wqeYuNmSMRviq5m4CdAuTanWrRCmce5RqxuoHY7fmft8D4uz1QEQqzLDmmFvKK2SaALF1XcTYMcdbUptH7j2Ea1",
  "key5": "2hGhqmuQC4PgcYPBUd8TjEzkBDhNPsRXckDwAWPFvJVJQ15BhATGe3wU5zirRXtU1QUJhE73X6yAYPvd9FNnJTRJ",
  "key6": "531TePNYbnyRBpQrw6nXrtiU6CTynD7TzqNRqDcmCKqQYzKT8L4d3Nc7iyZb6RaHEoZe1ZKosv5d6XCRVoubGi4j",
  "key7": "5JKXbbmbNwzwjJGrCXjiKZGkowXNaLvYtsYDpog52tgvz96MqQBpfhyfp2uLzcz6iZYbWvLmG6758eNmQcmQxnmG",
  "key8": "5pAVBk1aygba7ca6Vq5aQbQkXwZHE2XvSLzkZK276pL5Wbf84kejwnJ5T1Lw7Ci4LzAKsPqGces1GkkLwdsZT7ed",
  "key9": "V6xifvcxz6Q2mpcmzD7xcQ8Vg2y9fjUBUX3W6AwsQpUbxD25tBdJTM7diG7wXVLa5WXVzjEABQsPndc68cNQ6Dw",
  "key10": "65WRBGnMy3nGYSJYVqLVTdgi5QHGHDD5PvxdHsvHtRAAmAGdcYoTpmyebFXp4HxUN6r2V3shj73T9TjhaeqejthJ",
  "key11": "5RNXt6WJUNQwMvEo6N8nhP23FZsEoGVUkxBT4yApxuvV69ASaWCC7zwpm7H63gGprNU2q1Canxz5tJk6tuXuyVnS",
  "key12": "4QH8YKHCusxuw8DPZ6vPieG1vCFBq2E94JsUFGaYyWac12KQG8YTf48Jc3ttdNA2KSqNJfosJRMjNbf4sssUzgPt",
  "key13": "5GKVrKRFKe932tfN7JvuuBWtMyLMaYMUfA2SuisauKZV9z62ifHwwTjCpjf5E7bDChv7BQPU7g5exWah3wvgq8V1",
  "key14": "dVzRuHTqn8bqDFDzYnYAkj6MgJ7WEKxH5ch3H68VRNjuJt2qcgtiFYGwB1g4D3H3yuNiBzLVabPUwptd7FMQbXk",
  "key15": "5XtcGGdPHVTMCRau3ZodWcrcy48RKYNqBjRTx3nCjRWuq7Y6hSv4XkRDiFXv9znveqLDFg3KpwL7wQa1vQn1rWqS",
  "key16": "4fH3GtjhBeBEeUFmfiU1geRGbz2hezXshTn2uvnptdq519GwPMwa1hfbBF9NZvwyCpBuFe49SxWzqd39QGvw5LSy",
  "key17": "25QGX1GtqoxXTr4S9yEZapQ2it7LTin4ND87qZj53W4CcgbEeKq1Urps2vWvgPwJSkumX6ZdNSpWCmcbGMsvPad5",
  "key18": "3dX9V3TkBHpZiU8S1DfqqT74iJUUNx21t7hu5xQdAEEPKwXr8WcYvcP4b58sHoSCG4DFCM2VTtQhdFBTY9nLtYD",
  "key19": "4aYwHj2uF6x1LdRDnkcee7JC5QwPcxhtcjYxq84k7PVZSPUUcdiE1DDAecA7iJeah8A1krcJFoutfGEZjvonxciU",
  "key20": "2s1w3ABR2Ep3HvcCJrnG9BTt5zxu3dQBUvdK4ZjgWy5ySmRpLjQzCKV1LQ6yQr1iyoKVq3mbDpqZLfdmi8AfZpUL",
  "key21": "5M2WghvgxumNJvpZx9ZrD81k4noV5ZYJb3f6vzKnmU5KARqv4gwj95ifcTbQitXVfGXAA4ZuaNBM3Hw3sTDThWxv",
  "key22": "2qcX2zHGwBpmNwqm8Hyhi8iEMzUYVNastcugXT2pvkyskyghKNBSDGBhXXcKmrn6Tu5WjF5SGa4xDVx2MPSje4rT",
  "key23": "5Kppt7Vxr8YEPnYEXB2YE1DdjcbbohXyuL5P9P6yQ3HhLrdNyZAv3viDoDv2rzZCDjyVC4CoYcFLQXtBY7xP1sLa",
  "key24": "2hbUaM8SZo2hc48oBLc7pB83bw6ewuTgSQqKkJP6KTtzyVwm2ZsvgVfirGydidGujYGWpAqVAqvVavsDvcH8H37g",
  "key25": "AP5z4jSKFCX52fgyojPH5S7QCKNbFUMHQeTEK3Jh7qKDuXdgEVMNox2fEXG6x5cu6wYbkg7vg6JBawNyBBoEGXM",
  "key26": "BjV5obNqzNjqhsJ2jewrYi32tDARFw71qtL9Yt5Y5wXwqwg8ATkfTf1ueBQzybUvruzYgZwRJE62zwWh85vJoLX"
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
