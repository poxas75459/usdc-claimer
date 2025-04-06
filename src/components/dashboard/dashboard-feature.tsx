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
    "2f7WGyqYa6VkTy5zaorh1Yjj51unMPSpgmHegCH6Hi1QzECAyAXgrKXm1oB8EbTMsvwbi8Jc5QqRDmwhz6evrLAM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sR5649TjMoinf4pRYDqP3BEShVWt7AKddufosLDyLgBnSVaSjh3MvPoiyghJrfvvHaWY7Sske3wACrEd4yd3cK8",
  "key1": "5yYfrTTrFamSt5irjTaVNJVe5KXt7C42qPWQKRafNCCgtfgDL9WSbez318PSpqFWck5G4BQN5dnPyznc74hzPp89",
  "key2": "LLA2vaZzmUqRtuvozdyxNprnJkjH2oYa8NPt4uUDEC9uMFTBsaY89vZSsteTxymucwsnWDpojvKQT7V2jo9HAUd",
  "key3": "3qXiVAzS7vhocVbys3ryvyx1vsdUh38XY1B9gqK5tAkyWLW9RGvPDZSkhz3EBsia3VTDu4Wo7w6f68xk6P1hsBX8",
  "key4": "61QG8CN6XsYkVkT7eWH76uwNZctNv3xfztCnnXdh6TukUjb4Mc7HbHJeaiRg7mU6bPqb6ACqi1jBNLPy9rEmGRFM",
  "key5": "4o2tDCo5N2LfgwhpKEZs9GgNVweTTjcnkvANxupCGvzxKWR1dCvytRsHMSGMBrw51vvuEB3VrD7QyUojSnkapfEj",
  "key6": "ATRpwn5kRMJUJCyHogVKVmoVWyFXQCvbsP4sHSPn56vEypErMJefGGedJSztVEgozzA5pfy32WCVqj2Xun1zPbB",
  "key7": "Tm1MZG16ncdjr4UCnr7nxvAL7Z2maNSJnqtTbvZgpimeEWePGWBrHqLuiwXkSYCFFdUhtT495wPfLrPnXceRf3o",
  "key8": "4qrT8Q2R7xF9XfYmbkK9LxuWaiiwxPNLEgnYHUp6JYCGw1EFcU5V7soia2Y5Yr2APfK3wwtTRnbAQ1aiZN9i1GDT",
  "key9": "56TxJA67KJLPJDkGcLTDoW3H8PR6f688YEcpux1iNLiKuD31Nk3opruiKMyy8tLwYoAihKNhe34KeB4y2rM6w2ZF",
  "key10": "4Xf9bma8djC1bMxvAWsqSh3Tsapgg8QKfmgxKFkSNYHB3YBoizmJw8dgDcTSyMCRagu2SKyo73AskBGrp2ghe3yt",
  "key11": "2hMcLfhC9W9YMvTYNuxqkqM8xgKxBTeLPcNKva3qoMXqcixM6yNKaT7Hx2PQ8V41emnGJXzuNfBj14p87vxyVQwz",
  "key12": "3sZaBSsgnPE4Ujn1AkyBXXTbqtihmnTrNp2uCH8WwGyKcp94wyzNA48RfW4tKiziRTq4nMHAVQjECMjBhGXcChji",
  "key13": "3g2J4uEFoCdL4eDBYUvxWVh3TQvcD9WBmPA9achUubztpdp5Rq1J2cNGdDV9joeR9mcovAW14xzyYBKQh8ZAMxxA",
  "key14": "3Xas37e4oobGg7eoobNA3D1DpFyNVsv7vSnDKjfADxKXjwN23zn1Nxion574msSJbPqao5imo1rcTRjsy7bk8R1e",
  "key15": "2kYtUykhnZWye4uGAnLuv8GASUuNaLxovgvfzUEBGmxisy3ZdCvGbcMqJT7NCcGf3qc7Y2J18UyUPKFB3oLgX1VM",
  "key16": "3ksx64ysJEfLJLxLnMRnBY68S1oXPkdpUoYnXNuXuhSWi6j7rb1BwAevEdnYqnqUQJJowrjmpKinWmp9meeP4WeD",
  "key17": "2BnYKCcrSFiYFTco1VpGzd3msnuJ1wPMin9rdfYv84z9ACtb4E1omdi3iJTkFSpqRnGc4L72rZZcEWCcVteUSZ7z",
  "key18": "54gUdVADNoS3yswFmxwA7EcLauJQobJ2uisxFZFE2HExSfz77xvoh2UN7EVWYYniEEKXEMh8j1Wat5naFSCmzJhp",
  "key19": "ThfMCUZkhryukTxm7VnP63F22sXB7MrQrptgqk7rgr9cYvnXwjqW9iysd4z8jGSe2VmALo3SxAr9nBT36bEU4ZW",
  "key20": "53jMHwfnsWGUbjUKdDTt6oKDPXtwp4xjQ9aRkF7LTdm25kQNAMwfAGRjjbHZJvfgx6SQxbmQ4z55UZPb57gDHxJ9",
  "key21": "2x6LtMtFgYLfDhSBrFNdSvkKSA8HyxrUtQqsXUapF9YambyVS2TUx6aBsf5KQ1xLB69k7d18mCSDWeB5fYVqpqzK",
  "key22": "FnLmbZ9E4jcdUiPX8wJg1T1mC3w6fHZ3rUDymKDSqn9snf91MTMwAtfbNfcKvKTcMVHyf2vkaN65Wfd6LWkDkTe",
  "key23": "Dx2tiUgXCf6NLQ5QTLTtHVLH1eM6CxSfzUYzgWhWCeKm4TtQ5ahGvowT7Mua81nhaqEoDMQF4nzxp5iwAEmJKFp",
  "key24": "4pvaWCyxGp4QDG5yGDxbyRrNDUh3FMWPLiTHn2xW3CWipUr3C5DjbFixPFNT2hHmummCqXDJc7tmnSJ4ngzg3jip",
  "key25": "2Wrq7PSm56GzAGVsU8XKND38TNBki3xD9jf9JBWWTFDGsYfavNHa9b5x12d43MyyUiUFJoXBCWdwiS5hMQGUqPvg",
  "key26": "5PJLppBfoVKSZ9jXg4qmYusxCSmQt2GRuEB1MWgKNfBGGMu1MZXSTRdB6y5FCNKs3q7ma27AkCzgZjCLX16C36Y4",
  "key27": "4zjXZPgezzpaBqd5Z4XzbqBuB2ZZUqxNFZs7fSBWxhSFTx9i2GPi9GnSACuVd7fr9nfbvtS4g6uvBC8uk4q5cVsH",
  "key28": "3FPbrtYscGvUSps7jkRWfSNshABy3uTkdkLJG1TngGrWE4RWojE296zVdaQnfGRhFbGff4PHEbKTZD1oh5sxEeLF",
  "key29": "3XBSyY8jd7oNY8zmVMoiCeywkFzrydMh7xKhAAn34hCPjq1p7mGwHmeiYJ729ypjoyeVkH6phZy4stnWEDezgxBT",
  "key30": "3MxdM8nZZK9Q93pwGdPYL2BKzTEeGB7s4GZcU2zpZrf6NDeEbMZK6UB2AbtPdkJ3cY4LVbwTNmRZdJHUx7mLDPAP",
  "key31": "5227U4irXkiktQjzjjXKZMtYKCkbb1R38tJX6kD3Avck8wstR2BWuhihntS5xQvoZKV2qjscgnjJopXLPqiKuXeM",
  "key32": "3cDidK3EdKpsqeaYHYewZvyL6dV4X4WBYMxLaXZjkR692daUZE7uoJSgvweiZpw3zjEaQ3C64e7U8YNTy4gsii4s",
  "key33": "tydMpHsEngpes45KWQqGVJ4ejse2GV8VWDNK7Kwaw23EdNd1qkuij7dWc63ScZ4A2qD2mFJbUVWCjNVU6qosbk5",
  "key34": "61zpXsjL4Xm9Dwwxdtip5ypnd6Uvt2aqjiq4P5n7TNSCCeiQ1sVn45fXuYEBW9jpk5J7MpSDSt5mjZYNRRZ2xPQV",
  "key35": "3BNJNcmSteipi2jykbFv7mwUvASTdsdCU5W4hjdzU5g6KfTu6MPPBpfFSYxGt3xUpqZjWbiWGYrYooEvh5AxwKPK"
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
