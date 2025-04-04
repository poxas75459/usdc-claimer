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
    "qeU6TP6b9sgGHrCt2ZGN6fhSxgW97oLACzxSuJqd6HwdpjU1dQnPpzPgHB7M9VsQp57CySRc2e5hqfVVYimvheK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38MHhwpDGEW9ksPgTJmva7uHdJFkpdgAmLcTUtB8Jr2mM68LUynSuFm3drLxzYMpGMkDtrysTFb787xMxM4zeyYP",
  "key1": "PDcAYLH6H5nfMAcN2Uou7GrPSczfqtfCKHptKLW8fuPjKfbY1VWenpC3hmHpHYigDfBub91LBBifiNwaCqTXpob",
  "key2": "3Se4wZbGgqkSJKudKygbjTeX79zLeX8wTxLuHQAowvt73c4fVpmgkaxR4dJp4fi2Q6p22Y2H9JcJM6Y98pPHRC7b",
  "key3": "3hpS7X2pQjdAtT97nveMcY8hmfsfvAs4zriKDwnMLHJWnzVGDEUx42qRdS5qMquywoTj31ScN4Egj5urPu5ymMNn",
  "key4": "YbuSSxQZQ5Mu1PbzvHtt31zfi4FU8fFjKBoubj5brpw857uFvu9rQtVmy67nNt7ptJhsPMdAsCCTN6KD4P89i9D",
  "key5": "2kbwTM1kNVdtxcFu9EJhbNvD7xhTMBMXkFrSyzh8XSJLgguEoBrjpZojREkw53PW1yYxZUShzjTo9R6JrqeFBpHg",
  "key6": "4YDodGfCBsZJgegH177uNLnz4s5dcz5Jj8iNZZJWGRzuYrgj6qhhVPphmxhU61riYDoMMU2NrGA9qDhk9zHXiWDv",
  "key7": "59fqMZMCrhCvMTP4TRxfvf1T2S2oyYQGDa6yGZaEW1pB3tYrzQhzWgBe4igAeAKdrogfr6SaBFs7VzppGrZ8eFdA",
  "key8": "jAJPVcXd1b3EicaqTXtkAyLCamikXmgFF6VwndvycWiXS1JBs9TESeuwxafh4XabJfm2XJF8vAevNa6wVP4sdvG",
  "key9": "3T1P1tkMzDrDQjqfVMR2B8L37bk7hjcnzdzLtzcHPrThFCZmcHtG7uMKgYWrjWFZfu5ASrpXk5xBLZariDccXSW2",
  "key10": "3emMpfnHi8Q6t8fgqJcahWav7BFER8PPnh26qgYogELdwUCyra3trt3d4TktKUYL61jzkyKpqVxEo8LWNwmGmvcH",
  "key11": "5YxDkwypzq3mgWt146LoJ4cjC3eSfJ71rS7YBab2ewYk8XK884XRTgGVCfgWEdq2DdmiP98BVEK78pEVGrndaXgv",
  "key12": "4kyJAQxZLVeDVckb9mtXU2eNQaNMEimmo1BEjtA7f5cVJPRHV2ayYnktoB3PQ1HWbT7W6ofr9wRLS1AL3Fh2CYvH",
  "key13": "5QvuVczMyZV8jW21Amw9U3Sbyq3GQXRvgRgtscWVyxrsdybE4qYoXrDKbCwRv79FGwFTCqPTMRsb8Tg1Hah95Mkv",
  "key14": "2WxjoFeigt28QY4fyK6LReEFWVJsHewDsvt2sycrtcBhymVhGRNfQNyNqYBGUQUidtE3bQ1fkY7mmtoxBPK3CacT",
  "key15": "DdYQPEPg8j4sQfZ8pTofzaBw7ycBti6hVfGCYYaFSNK9gQULGYfZiax6EriQNeh7pGD7uE8dxfa84kDvyuRUWH3",
  "key16": "34GbcTgamsYcReAdV34zfDm9zkExwoeMyJfNVn77XTdaz1YHNXscyBb8yKzFgbXF18f4mctNVyWAGfKeB2G7VkzN",
  "key17": "4LhhxQtcqUfAiYWJzMfUSf1dt2aLJnMfCuM7cghH7jX1Q7gJ7W3pCeFZGhcKWgbHSuz7g6Yss7dd43sYb6dfhhrA",
  "key18": "4N95W6CQPXZZhFq6S9UjmTYLfgQ4r14vuspRZMAQixUGAsPmF6mBaZnr1AbsH1mCuQ29tXT2iuLsGgDNbwS71G65",
  "key19": "4wQNHgP8wX8yM4TSHETrnk81CEzqYPiWJWtzuTk3vp5auduns3fKG2BCaTVb91eHSS4BHgFgMYF9mWwx6hvxMW2v",
  "key20": "25qKEUgRtvSWniN6KLpMKnacPWirjMXfybUFVnaGQLAPSRLtVoc45wmN72SEHkVQVKrcyBdCjYF1x7rh58aUd8aY",
  "key21": "5nNVqfN6jD8ngPwN8RFUjL1YhzYwL6QP19WzoFA4H4TQdYqZZ55qys9Dmov13WugTWomYCh4tsZooyh74qWkwCix",
  "key22": "64SvRENQEWZExHbyroFYRfzfBFDJeCLS9hHVMyLzVZBnnavm4dVDQpfP5xCpMKHf9YYdmAAKzjnmW6KGKWyQbdve",
  "key23": "22GwJiGRz1DMT4ZLWUT7sVWPfeKnXWXkELQDnZUaFimBg3aGWBxTpKAN99dYyyf1vjxNxDda3j9DLXmJTrBbwrqk",
  "key24": "36yd8RRYMvp1y8RYCSNXHM8Zpsw9TV6ieXcgkDTLPGTcTmFSe8STWRjfhxK8ryezM5Uurg7bxZznatpMFGW5k9Ps",
  "key25": "3rt4T3NwfwMtytocK91nKmr6bgnJbzRNdrBpKViwSL5JVyHL6JdQ7eETUbod2GctFqAZVh8RsJFb6tB6A9USwZAJ",
  "key26": "5hyfH377EhQdWXvLB3cSYECp6rMtTFbWkuTxgyEP2p2RW2rmPKh653Z5jd5i1FwSnfFLWy6yULBuCstCiVzU86BL",
  "key27": "5V2TXdTFfjPQ2ycVKgewyWvUYZ7tyjiRGS8Jqt4Qf3V2uutw3iL6JsPesy5bzULBXDBHzReVbsTNRMpQ1dMfbwFE",
  "key28": "PdYdXanSG3ssTsnSjA8ZRPM5Uk7oiGiyg76eK3zLicVRuaLZQi8NvPzFiVRZWCfVeYf9XM2kKKzJcmrEdAmyPiG",
  "key29": "2dCYZ7SNtGzFs4sBihk5VcJ5gJztKBcDmjXeJB8A4NY53JgYxXTUW8HqBYY3WGM4VUuZ9Sc8q9xu3SdDQ1AMim7C"
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
