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
    "396igacpv7GSoBY7TzLPMzsA1KhQaSdjHsyRSQT6ATMKYdtnTYLMPWvi8GXfDo74ZHufxptMA8WZbM3zBW8KHXuH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WaxJ8TaXDy1A24hsrSZxWLkuxHoTNUk7zaiHsnGVBFdbVS2Fnd5e5qcVL1hseqdP7xVDmtvWnFwCJPzZ8ExuWYK",
  "key1": "4pm9obRtdP45ofGP7xEzjLKjzqHb7YcgzerXMQedJaMra2Re7EedmuuvYQv1tJfFFj23B8c4cv4gnEJo8fFRzbhy",
  "key2": "3wRZguBwKoTA2uJNCaLbRYhcVUkwfLfPkhkU43bbhSXewgUg8R7oPSbLAcqUzwkkyqoVoHs93iVN2qj4pC87DfyM",
  "key3": "5Mvdxq5Lxdj7SMdsgjxZkTZyQ1XU1FRzWcpMa9m2H5f3MomH4GY8j3avDXQQQEdXBghM9ivs7ha37GfvEcx5H7fD",
  "key4": "24gSm1F3SuzCYZk3HvzFi7Lrw1BnmSWXSSzpamyc3DEBEXsPeVRpdHLiXo7za2PmstfEB7NUNANVVqKM74FkyW9R",
  "key5": "4zqmHNLkbiaKmjQ5Hyt4wKh2Eg354VEZFNL2brZUzPffVTadTd9pXgRRuyJ7DEKiTmXZ6dRL87QZxSB38F2QDDDQ",
  "key6": "2EDAF6FeRAyQu1TVZC4uvoEKKFLuZHEhonWW3Wo8jWZGbwxW5Vhm4WkdhHsixAtbDQ9nmw3teUdDBewVV5zUVTKV",
  "key7": "3Fe9gKW2AMLBbKZXFgSiobmVGnbxLr22yUMyCaNi23iVHumkebNqdEMiAxZrpCZy41gzoW7c1nevU8fhRbwC7Ne9",
  "key8": "9sRokLfisjvtfQvA999ZGNVUPNZTpZyhYKD3xewi4WgGYba4Rk11rezPm8dcwdPBqcoqTnV5wcVrVczTfwmWe3G",
  "key9": "4wvEG8MztXV9bNGz7dxNf2otTW9RmxjQG74uvCBh2HBxg2cTNx4BbUz71SCbQqm8wdh4STPqvs1EakdvG6vzNPnB",
  "key10": "3pK7F4zX5VijJv4cpSoEztEyzN5ciWeyQYViCcQe5rSBvwGU21FFSSxmvFLt51nhu62p4yraG2Y5gJSAdbwFvbBn",
  "key11": "3EJChhYhU2FedTQcH3ypJU62DUdKya4kcKRbp96rN2apGDb1NyW4bFZ3XsPPKYGN54KRtzzaZnnSNS8FgFWLhrQt",
  "key12": "85pu235toTrxP5F1UCo8iqwF7xGXsunbbV51SWX4joPSTFwnSq9AHkZg1Fke8QTcGxPKijDS9gRFpwTLwQg2PSG",
  "key13": "aZVzotZkxoutCoBkRPR8UNZtfoS42hPnJY4A2cxSqpisKbLqNorSEKgTxTXduNQvFv65e3hhUgMbx9xpsEP7Pcw",
  "key14": "646dvQ9e4kaw2dLY4ES13o92EuhFSgaaEaS7b7iBwkkpW5Ypxtj69CAjNWMucDE2yCaWo9CUvBG1p5jECpWmYHwu",
  "key15": "aGVjExwv3Bt62mWp2ddiHSsd24vAbqDqPQXesftYr8NX5rzmeAsRC6PtdaEikgEnZuhDzhFuwZr31Le9G8ng1rJ",
  "key16": "Cs8eNeFdS1tfyUbZE66LvBQ3PuUKD4J6CWQhabFZgRxBUh6k1H84LbCss26g1vUkZyokZRFQRPDWkzCqNxuG4xP",
  "key17": "48h3Qe1gvPKr7UCGXcYFTr7SdZSHFmvnFQVE9Nx1UWqhMqjez5c3QRCAWqoYGGdRPfC4bT5nm2EzTrNE5Tcup9sz",
  "key18": "AKh94GG2ijnkUqPWEG28yGMri2efdzCNysnzsbxoGk5uNefUskT5An6qRjDCqnGRJ31KwKZMpN2M8wTCY2sum6p",
  "key19": "MMMDeZgiAQRc2qcyyK1aJMmyz7JMv4hbWMe2Cs9TKMGie9uwic5YmcP57TFfr3JH4r1boxZ43o8VBEwQeVpj2gT",
  "key20": "3UfD4X47Tsv8yRPSLVK9dqMGNhqxRvjV8wmov5CmArvvwwbrbWLxUXARcVv2nW5F8r4eTh9JZmdLzuaGDdvkbcKm",
  "key21": "2ZnvguARwdySdTpnSMfKosLQDsxVsJhL33ipivfNnj9486CH1UdPepRN5YFdfttSaH8XGCRP6yzigWbJRZzXRMsq",
  "key22": "5Ev986eopA6AwfUg8GT6wUN89xk2D2LwoeCWmJCWzn9Ldq5XdDQfWUUJ6N8z41ksFxpcSve5ukQLQ9m3zp9Ne46B",
  "key23": "5nCHHdHXjJKNEc3fv7fQ4cFgMhBtqp35wvg1QEiSNpZA5GejEmXQtTSDuKyyaMnHSCgbbE34qcfhiijTSySygTzv",
  "key24": "37STyZPjdYv5PEjE5F7QnwqvNw6AQfrZ2vVKrErogGF8BuaVFDF6UxTMLzyWP56BhZ1EmcfvL3k5Fk8cr5a7cJRH",
  "key25": "5mXJc7Tn7p1Dv9KgnwhaaDW2cqgY4ooVppS8VkUZL72hwdqsHyP3vpLTXi7swxBWtsFScafKunFdvTcmEKNm2gQw"
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
