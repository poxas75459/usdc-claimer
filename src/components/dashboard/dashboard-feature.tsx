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
    "3VsaBTpSdvsnuD5E6Ry4pZ4J4fwFQKUijsY28N77fvZ4QwS9rR58Re4T7FskH9mmHJWseJQ7EZ9T5yybYRxRpM8R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pHzhBbjwoL824vKvXv1Uju9HcwM1P7B49HJeT6qeWqyPC2imSNM1ZiRgbyCW1RJmQ94dU3Sx75QbWpgbv6cZNii",
  "key1": "2CsrjHQbAhpR5dFf32aByxufH1uwuEPhzXiJS28soR6ybmt4x33GSYooGigVaB8o2AEwecsuvSZf7oYpNE3c2pTd",
  "key2": "3LtHzxZSK9PUq369AjN8NXVsB3cvvwcTpErNwWvsBBZs6q1ask7qxuyaBrHkKQbxMEoejTQttCmMcHL6R8eoyBR3",
  "key3": "4eR5vCf8Nii2CNY67D9ecBNQoH4JF1CPna25uJc4VgSmMG5AaTTBhsZarW26VAFK1ocxTeNvBGuc28JH97GMDTZF",
  "key4": "2YPmdFKKvtSjLWt1FXcwY784WKt42P81WcsyJBhKFhRqatyn5XutsGf1oDBKQLzRMPUUR6hFY8PQKZz2KuQfJtXC",
  "key5": "4DdrT8NLZGDcbC3vQrUC8KY6RgQZEEfHsv2UEzQiiVGDmMwTmTPJ9HswsY2BVbpN7S3kBc2k7A6gS99MWx7GoBrG",
  "key6": "2BupYgpogu5FHQCWKsrgb9ejnTSK1aXwtm7NztiWsYwcBNTAWse1vMXqd1zpGSBbihYXhCND9LHBsWqE45YkMHQa",
  "key7": "4xFm6AUX3D7fFF5syxyFJTBk3oBQzfVUV1V9tkqrj9iUMLLjDvsLjreui2jLQ7kBgKBevC4PRQJmyMHTLp1shw2M",
  "key8": "BZUnizSjpsRjEme2LTpbawn8uVavnTYrmJdyzGhuEozHgMzqTj7HkJ1ZPiww9UDpTreMVtHqf6kBuWqFDthMbZV",
  "key9": "3f8VFN3JFsnXwcy8KJrG8ExPXHXwcwZeq6vKVL3A2taBE5vgEvDVMqePj17d3GsLbzL1rTvjGSNHyvcUcfkDttLr",
  "key10": "4mHuijX2My5fkKPpVtRV4N7Yd4njxF4pzPyHWXnHtQ7mDSFbj3GQP1ZoDEcFiZ52S2vgWaEfhwGrDFTMWyEGt9cd",
  "key11": "3dpsQraTqjNDKDhf7fQ6vVSYasFB52DmTcV5Pa7iMAbJcPZ7AaZHHZCpdsE6BNCemSWHFYL6z5CqsuN8ewkDmLzJ",
  "key12": "FBSWEmLZ5QDeiNdhqYJhhoWPSMhYUGm6afSxypoNZG7wwNViU1j7yUMpujihRQ9Sh9UK9S8is4KtfB8abSsFp59",
  "key13": "56dAHV75icxuGbGX94bNRxqNdYJC3dRF8YsbJdfatuvKEJuf5poFBr7EEt8yaSMUR3BHoUGTKFgN6HcJ22eiYzrK",
  "key14": "KBaK4kJabUMm7XLWbELXxGyyASaHngF65J8quCyLhgknLnTJZHSf6odbYctoi9KnmbgtW3Ekr9nEnqD2KJycygk",
  "key15": "59yVYFkxNMir9o4DFNm1uZstN3osgFN3RNNmso1qKWRxPZuYRfUUxRS2MBbCRiJGAJHQERgjcpCvNC1iTrv8chxH",
  "key16": "4LbDrTWbisgREwowpFiUombo8ojPhoodFrMwajqCrEC9KoNyTSAtf4vTAiDtHnXE7U57ufbwdE9TEv5z9TxqsKPm",
  "key17": "3DQ8GL1MvHqzBVurhXLhDUXnMmWQtDnQR2se9Dj6RN1LGTtGTnHGCM1UK5fBPQvd5dPT7h7TZH7yM6BhUgMKJrx",
  "key18": "3o8EgqJXwLdbfNof5GchPgFrRWnane7L6CYZkhH5eRAa6MbPrAeqh9YSa1eHb4HvcLWTdihwiWRfFxXjrevkEMX1",
  "key19": "KxYroyD6rfBynpzXvoHux2tWANpaq6LF5rHGeejPmCQrWZHpwuxxgxCaf59VLBXC1GLa2W8Gd5DnpdHJ3CXQG2A",
  "key20": "43sJzQhekn2DABMvyYuxcvFaCH1LMm5YxSMzsWma2bUdvz2ZfhgbtcooweqhjS9E4a8JHhMHzWbroKGyQD1cXXcw",
  "key21": "2ToHPfi3auSzLnTuh8xisGYyyGGv3cpkJarfieUqiHbcRYH898QceJgMQWJ4b4zTaL8WzwoJa3qL6LWh8equxJMA",
  "key22": "zqcqsQ5BHYsy8yfuFrAwMLLM88AU8tYNnMUEPhpGNYJpZcq9yrwKzqpZWxhYU6jXTmgb1GPyoBfbog3rFNtaGia",
  "key23": "3yhURm2n5xRXsKKrPK3sRWtXsfEkFwLdHBz1PgPwJCsawWt7E6F5GzDLuizm3iGPS8jFkwzDucxUPt3Q2iSjtwgk",
  "key24": "knYsBbKgfoqku8ZWJHPTk8PMKvXga6uYY9uGYRmycaaydEQ9yoPVHZPngfzviGKYbLsFBcpiPfT5FA957dvGgjw",
  "key25": "YkEBqhTnRC1jt2uvaGySRFQnqx2rwYNb6Pt1c9TodXHixMCyVMnWQ5ioB688jWvbCt41Y9H1aQv6WrnMbBxiHRp",
  "key26": "28Su13wYkFCvDNYXSKHbrwLfU2gRSrvsNVg8azMX9jukoNfcCm7uTRcyp12U9FgM9N3WUepi9jhgmnzQasRGWukg",
  "key27": "5CeCKFpoK8DgdVcHbtPJjUQ3URFAuMZ9mquRJ59eEwHsk8qhVCZqSx6DNNHtLfmghBzwCYpTpaX2JidaT1xZaaL3"
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
