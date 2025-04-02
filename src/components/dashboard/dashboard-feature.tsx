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
    "2LAYH2YXrwpxNsGVgA8s9hMMPNqqNXc8LuAUoZD6M44MWdajBfb5qqUmQ33FxZ7XTNM7VWYaLzE8g9LecZteAZFS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xyTpLSdqVRF9hRMy1S39oz7M4xLQDQRGQKRsTzmjVeUxeXycejjAS7G6TYGrXbkE2E5iUwWhc5ttY36ecY4m7fJ",
  "key1": "48djAF45P3Uw9joW7GcszEjp2jQKzE6Ff3QCXBrib9vbX3dGWyXdDh5y7LHBj2aJ7xWCBksx2U3KG8mNbjTVKaQe",
  "key2": "5ATsHb5GBMhGeKzHVpU6AChbZtFgwsHUhCuVbH2NJ9Sm79euQnWzay2eq6T4LXcaW5kZ9gT1Ln4dbybUSWjUqMnn",
  "key3": "4Kov8g8Cjgjo6eBVcNQGHhXNztTpCcV2UzWyifmH937iU18rcGNBap3ErGTqUDSbvkZy5C7myLrCLXAXhBty8ZLA",
  "key4": "2WsDtZhc9SqE9sXaH2zDEX9Sgu3bhwTmBUiiiXMeY9t84Jg5kqorHEq1Pxocuh5cvCGqmQK1hX8vKxEE9LjfQi9u",
  "key5": "5S4dZ75UuipZptMU56Wt2iAD2PVsMSiYbPBYaHuC15bEa5GpgSsyP8kays4644vbhtMyTQfh1wmq3CGUtz98Xzoq",
  "key6": "24PFr9kskgDsGmSAPaNkj7XoifNyi9W2iJJ1wUWT3nRnZqyBJt15fwwp4G7mbDggmGT4ZvynnAuY7b1VTpGQ5yQB",
  "key7": "5bdWYpMGjFmdNKnH1Fjn4ZuBkpDdxZkbAcx9pYhxGPmV1VxjWNUhcyhZHydQSeMCraDgF9AKn1aFevLRkKL4pqiX",
  "key8": "4xnehWKmNa96MfjSo2VFx5WMwN5ztoH5Fr3gqzbjjr3V44W8NjRmFtETZtxEcp9vnzo7zLAw9JegPYdUUvVdBmi1",
  "key9": "5mFc3gn1HhiLbVcxgJRuuZEAzkYDQTYDK6WkUUZdk5RSUascrvpQTpk2RuanYRksREAqA9cvJdztEztrJ7pVwVaM",
  "key10": "59p3HjneE6tnZiZUi5xWDysq1d2iwpFMYAYXPMc7LgNAuaHGvdm4CMwWfNoN9NDPiF2SyQGbmdGCZPCBCXtDU3it",
  "key11": "64wiQWPseRJ1ujwEVt9PS6TjjcCw8tUctn8v3Lksw36gPRPPTkPH2MtibNGRHS6PeC3hJ8ZvpBp6oC8WF8janCSQ",
  "key12": "4FSvBGCaH2tEd7QkvKScS73xUJ4QvTpQmKqPp9VbBNNpqcqd1eAbvkcj2owyiqEBEuw48u7mSkZbwuCY4hHt4D73",
  "key13": "34JQtyuFwYgibQF2rcrGkpveojH9EVu783FzW3eRS93Q8z5BzhfoferrjpDaoJ3R8gPb3gveDtxVe8VHJRL7Ad7T",
  "key14": "4UryDWMoKPZPs4D3FpY9wy298PkLji2KLGXMJeBqdRnkCScYBNgCddtxdvMfva4W1GC96ugtizFximX6d2hf9k3P",
  "key15": "53TmyC69hM74MUQPGzJemLfyhKQHN67cxHEHVvRmUN3gkvED1PHdY1eJNwcbDSWB6FQVAkh36oEMK8RH6HeiLYRY",
  "key16": "4JPQM993ZvcVeHzsJC83yzac48UfbqotoMevQoXTiZhHnrSMVw6sUTNM2PcqhMgpis5BRfsxwSbiQTxZJdfeEH3n",
  "key17": "5hx6weGzfKZtETRf5ybbahmcwbMPdzSK8tHMpoRHvQbsDWcjsQ9Lwtkd4jZ1eAMTWpoPfygV26BJQp6p4A6M2t3N",
  "key18": "4T7DhTcoDQsSqBEg1cxUibbDpTkm3DbqhVtFFQD8eR5pkqBDjGoBobyCfjVSmteVVKMwVP1ZkSksAZf7HfZzr5SH",
  "key19": "5yS8LMXqGXxKs5Qb5MnbmM8D2gzDsjhsTzYcxMGVB2yPHuUCRvev1rskhTUyVWFnq4eycRyHhdKeYkNtUtKG1yyt",
  "key20": "286uzDmAyXtQmByrQuAhod93fsCcgPVdwGNjdjhT1idCRiuYWBKsUebYzkT7FxxJeD14TcNSfJgRcn7dx3yabXE1",
  "key21": "W55KF5Y3AXxRmbBbrJK3kek6As7w7nZum1vigdZvu59yoBNYyByFV59Q5y5mFPZR4Gw7CC55QA8ggZJD5jLQKfX",
  "key22": "U7e7QY3Cav9EnkprcpxoVvEkXYDRBkoDNHvHciaij6pNJS1AMFSAZJdF42kf9b5DN3ZayHXfTBFxHzdAP41kyS6",
  "key23": "4JF34r7fnsXCFASk4acQgoKgnAngQYhg9g4rdriLP38gnyWDopef3eYYd3YCnHqbyUpjxockh4FNaV31XcfxJ46R",
  "key24": "2JiqAmKyDn3aZ8HTrk7NfZYmhJpWDRfnJJdUmU3WvhvBjof1yArhzHw2yDVMjEtMTKh5BCXWbBCjw8JcQuYfE5QL",
  "key25": "2bviQbJZ5hcxnDtF8jC2MS7wJLQw4NCiRwLzgUmQfqg1vJs983j19JyWa5j7bpYKvgF6QjtF8hrd9rsN5EQL6Mcg",
  "key26": "XHDj1uQBceuNRiBcGTcuM6mqYb9TYmvxNPijW5WLZLKVgXVa6cgTj6A2agRgJVsPB55encBz5fXiVTgCDTbv16y",
  "key27": "4MGXshpBRC8phFLBgGCwUunZEmGfnVXCLsL1jirVDYobHpgeGSrJ8RKBnS8juyG2151gfBc1F1ZLY7prJXnvkAVb",
  "key28": "2LTwKPx77G8FVsYmzrj1cLgskisegMJFccM89At1qQgksWaWjj2ye27PUGPPcotva9QVaTMhzQrBN3ByiUYnSSSJ"
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
