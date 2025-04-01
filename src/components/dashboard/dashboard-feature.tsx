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
    "ZpiRPMej9n41wTXaz7sjqDWpgWFCPK243iwpWzZf5ynQwXPEpA47iga5VfuXnPHehvYG3xpwR8HvogEQG8YoBZC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LZp5FPjRMku4zmck6uQWondQ8fWDFURkfqcKiMFfYutRKhqddnpsLM1aHs22ecTTu4PiCx2m85HWzC5BHSkRfFp",
  "key1": "EnmAvUstqx6WpRqqkLuqKQr4u6XDAWRPZnyuCQKtM1Pgx1xZVdnanmtCGBEPwL6nQ9VNhSkdGba5jTe9unYi8vR",
  "key2": "5nfqn75H3V5n1WYrmo7UoRHDfn2Q1hrYXB2xhgFKvZn5F7y1FdLBzvbeLPHBFi78RBeN8kER7QHpu9pWoqwrfugW",
  "key3": "3ZVJ4nbZusFWn64YjgNLAR5dicC2wgkEy4w9m1GSEUTQ7eyTuY2QQrwAtb6UdPJMz8sEiH8wNvVLbYzMSnVyqKak",
  "key4": "QmodBQ2qkyLYvnxBu1R2QC8HuBuoSGN8NYx16yWvTKghBXzFPc9vT7Ybv9mgb5Q9cCikj3V12woM4pfcAZi42zK",
  "key5": "cdpPFDTR7LHd2evkTMZ8bS4B5xMPF2knZAkneLBo7Anb15Rp1kykx8SE3yAYtn1sDNVVoBK5jxBDqdNRPDoSRYS",
  "key6": "424hqbbDMG8djp8hHV5Viv66haxpdtQr1QDQWG6R1pJdPYBsunCtoMkbvfzFy6tPwaJx55kgb4dtL8xByMLhQcH7",
  "key7": "4vrtvFTZXN2crW42if3xUsgKJYXwk2RcSr2YZQdfZbGSEMVVvV2Tb9DmEy4uHDcsqcekVM2JBAVMiEQXhdTHqvYh",
  "key8": "2wKmJWcSDML5YH2WEtoY8PudSnScXbNZXBjRPes6HsTcu5oTzjBTwNVZkkUQ7VHnWUXcbLW8wAFu75xvbREgey3p",
  "key9": "48pKAbhXWqeA3XyZ5sHiyqfnadAHFRSfqdH2fwQugUy5gMNZSPNyFaoaStqTyFi9ethLEWLuxNQiBzLGdxTdAtv5",
  "key10": "4zxb1uFHuk4CXBDh43GDnMjByfhfK8HqoXArHLFiZk6tP57Dwf9HPuJkh2EKQRSWGQ4ub6ftoiVLdGmfSqkT1zje",
  "key11": "53pHC2gkriGjuAX4AjESPGmkxdEGkeZzrQo2ZRB8FLtX1bTJirgGHDLn2FKjAppqRoJzt6pHAPvwe6G9uKsbVJs3",
  "key12": "5tz1tA6VNPNCbihTsznzu3DpY5ekzHMoDN4Vqwcp6nYHPdVuhFotWd19pjd2Hwi2zywFBV1JnJksHHGJFSk8bBaX",
  "key13": "582RFbLCrZBNJNAoieFs2rHLbmEvtCtW4ttkuyYno2VpEDG2fjnouqgCJREFdV38HBPVkZdf7bX7dZfwDjAanDej",
  "key14": "433Y9BCqqZyH9FAP3jiN5xy6CQ8SbR39CdmN23ji7QN6KjcDRqBqk8N4Jqipkv7ShR9mRAL3BXF2vmcJsvnV9wTm",
  "key15": "wz62Gj5STUDUdzJ5HhC2ZswWfN95n8Fiip7wx3XU31jfevyegRsMC7WyTcJFHMyahi1Sdfk55fM4fi3ABkeqSou",
  "key16": "5JosivPTuAnhvtL26oSwKJwGsxr3G52HQEhi5vNKCKdsS88e2t2GTXxcUZbgKXYccciSmKPsF6Xpk7nL35q2CemM",
  "key17": "4qmCfMNmwsssDpx1Fg8SnvojjEmzRqwkaNA8jJskpLyK7giEEMSPCZMBS8AkEnqdrF4j4csp8Pj58Qpvt7G4rFTP",
  "key18": "2upaNLYsASJbFGecwAwLprjHRK54qf8mjUAXVPpatuxdyEjS4ueWQCbMvM75pocPFUoQnsGuPSXj57Akeon1jXYC",
  "key19": "5X1C7VvtEiZsLTCdLcqj8dPAtuMVAm2uysWsK2WosCJ7erYu527UsN1he2grRRMqpNbEC2FbQRo5dFfHrPis6C3p",
  "key20": "2QQeMpVoKmZxQmoFbNNQNZbL1hkYbDa6ntjTc3bKXk6eV5T6uWfbrncwFk8P4FSFCvQ1B7RQrRSjYude1Y6atZuJ",
  "key21": "2YvvBoCFzSAa7WYVHAMHPN87bVXWuvouUuKteHkqPnSquLVKANWNjLvozn7Qsf75FToQXbYWW3Dd3B4awhEGRLYv",
  "key22": "38tg9V3GDDS1bBVCRMKwjwEj7UABmbcN5oBbhNsoru7P8GDtNc2wpJB6FWpTbTZTAwVvEoJpzUJTxds6DxPKQq7e",
  "key23": "3bgMKEZYVfcCF6o6zLqxkG3MvjQPe4KXNr3fEpXZZgthqB1ffvXo6Pb1aFojvW2yM43eGHR7EuykhkbkFMTEgwCd",
  "key24": "46A6Gp8FfjxyTLME5ySX4nNNnLpFMhS8y6fANVBRaJN9NXsJk8H2FGbJTZs97YoThw5xkKvi2Dnfi7rs4MPd1vMZ",
  "key25": "ymkZAtofXnbarGDcPxRQxMuDjKLvTwZH9nYJXsTo1CThvUT5rRxZJe1YkWMperRFbcUEpKhVZbWJmTtAsxCiS2c",
  "key26": "5FGQmgpu7sGuiDAF1o1JW3V5LQXfSMq7FgRjvB4MKjhHyCuuedQbmKu5asfQoDBguPmCpVwsJzDEvmdQrNC7ehKH",
  "key27": "5nLdQqCkF5pb8ZJuH8Z9TzGG49j3HKPXCwbuJA6F6juh8wrSg3QeeZY8eEycCg9zUZyVK8RAGnzYesaqffxGk7Do",
  "key28": "3ic6UteEbFdEAnpLKJL7WLz1vVfU3pJHHFSeefoSvQ5Zv1ZK2yCsS6FKW7ZSe6uR9smYZSMGz1pgQ3HU7smU4gkK",
  "key29": "3JDRpDy32sCv5oENhSM65ccyTQmckgzpRQZwxibBYgX6cNCLpCTYzeAFTAm3SZCiEUwQhr7VT99LKn2HjCjYD91P",
  "key30": "5L966bZhndEGPhRgDZfD7kTAYQWAeSicjVhyVWCxe7dBAa1tDxyWguRvBrE8V8nDPTu7tyr9uaKT38URJy8PPmQA",
  "key31": "4SQwznF29mSC5pKAqY2AmM3o4CPS4M8QL6PPrDfGYZ5NAWcQFMVq88qrSSDCjYSPmVzwbK6iwespPrXDPhYHEPGy",
  "key32": "5ZGLfWd1ZDQrqQPLzpcAy3GtXEbv95BpsTf9SwUzB7b2ARDArgDxkiiFYGrgjTWuYmt5iyMDfFUked947tXf1hzj",
  "key33": "49omgQrCjsttA8vWPmeTDsXaNCvBVqQGdiD2onZJnKtLwYhE8fi1Fn8AFTsGXksd2gAt1uzuCNgfTpYZPnye1TQT",
  "key34": "3UfBUGXuLBi8c2ab9igqdhuYuUozk4k4JDc9ftRR1FqSLEARTq9ab2uAAJYpqMscxLwV1jiqQfBXLC2sJLZo8mr6",
  "key35": "2V3oNctzLwybaeHGmdzFyu7ddU862eBS5dJcADueTWEM6ptds6PRkYMsaoy6SX8VYgyaddgEiyyonL3njP2i5bGR",
  "key36": "4Q4KwT3e7DrEynxsYrkHcmAVQy8ez2Li3NERCVbQPks1XXQeMZRVFyDRn41eTSRD4kTuF5X71EcTWNR8vxfYv6nE",
  "key37": "5fHWjJ1gjobFZj92TThGwyAMnoBw68nWqEJH7XAR2H4gVV9Tbx9CutKVV7gonwtMcBTSG4UfFMTm9Z5WMjazoyrX",
  "key38": "4wapwibbXJpoQVTSjPwHNAyfDjxGLqTfUQ3ww5LGpXBAdAeGhtGLTZaBMAPeMzJYL9y6p2h1prkkqQ4i5T9sJZqo",
  "key39": "fmcwZXTir4b9e5oPmA3wHCav9tudku5BG8iDkZBQMLXDimzpieDCTm6u3QQnxoA7LZsVwHZcHbhjAe33kuafApr"
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
