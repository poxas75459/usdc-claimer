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
    "RrNJHb33DbjoK6VowqRnUCytwZRkuhwSaKyb1J2cpb65GegatbskaQUJ3mwBnsnWKKguaBK8WcQR5dvGUmpRN1c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UneGNu5vS7FaabhZsqBipHgAmKKZacMTiPiNsPGy7uqc4NajE6htxsBV6WFfAn293CyTmpAhznSiz6EsQmNAv4E",
  "key1": "3UwcZ7mFzrbewAka1QbgpWfuQeeXcZ2MTWbHKmjicbh1nAn6qUSf5785srVEB8EenqSQcH2ypvUkwyoFTMtfQDso",
  "key2": "2UwbP8enU2PQW1eCVN7i9B2FJAbJsXAZgd5VDGVDVeDFVHBxD5GD1z6YKLbosTUB88EcCETyo62EVgWVpua6m1sQ",
  "key3": "5DW9VPftC5fSEWGfgGLodN1TVkJPZK9St4dsPH7e36FLQBYp2GftCvRooNi6RUA515p5V1ghTg96ZeeXjj55vRr1",
  "key4": "4SU1HjURhQ4w7P8cP3bYy91JUYWu3tBYaxLdcfN2HEyyAchAKN6xeFrkhWm6SEd5AGNCwTzcKAJoMGN5dcQMonY9",
  "key5": "5M65KAiUxn19F1HCYJDe5BF1FnFGz9sQHMFnFnPuRs7fFsBxRXTH1JBiNodEveu1w3P1sj4fdcnkRuUcgpAuvvcs",
  "key6": "4Qsq1vj9VUnAkoyFPQaHM57dZRr76RdSEY3rdRv2CMFa23VJEV6e2qYFvmkT6CtAohW1erqsQhKP2ZM17TdVqNTB",
  "key7": "4H7kLBYf6aqGeAm6su1meV2nHRRg5NPGx9LKRJC8cAk3P9dioRBq88v7FpSz4WkP9zHMzh8GivE53cghFWLo5hPP",
  "key8": "LHP5Z2WvpZW4FS5fCtqGk4DgcpHPRWj7S3K3sEFZPjUnvX7yMGWughS7g8iic65mLSGMPXAYpeWPvthCmJoAE3e",
  "key9": "5RQwuCmHyWYL7wp3ZAbLs7muGtbRVgDBFjJbbDyfvr5hNXV1rpSqKQoMBgNPb7DLG41XfdFZhdrRF6cGC7jEE15Q",
  "key10": "3q1FUi3cawXXv5UhRE5aqTtp9HgmPJmUho3oaHbzu4fT9MpEfgjQo5LFrarpwRbToCfD2NPenpwdMafzLS61Hju7",
  "key11": "5tNx6Fmreds1F4cK6pZ7b3rKwU8zmNqgsmEB8zENCBWtHtJh8d9K1UPeaSuuLXVseqAu5FSEe5BoYU5ox6qex1ni",
  "key12": "4wAmRU7UAq3HvQhRDvEtcofbg7HvmWJNG78KVDC1Nsvwg6rtZgWMtro3LWkyUmb4NAcmkp5CbFbQoiSwqyFVpLy8",
  "key13": "3FkSgvGmiyu9PX87farynDG1wqTZjmovRAWbfCb5Peqkos8hET8FM5VtKmhqE7ViQFSgoXPB4JjPoyjFCZLiZTCy",
  "key14": "DKV4tcb48cYh18qDCNV1oGDwXGHrya9jmR9vvNrqJp1GX1KBbAbLQj3GaHgpGSE7CKnZFtTGBkybySwtc3s9ama",
  "key15": "45A6PmkTbkEv1DJpGdqtRdmsZNf9qmrCmbFHxwj8DqgzBeShEw9wDW13bPMJ7jh825auNH8sFaehxiPrcGwG7UMV",
  "key16": "3b3mWck47KxPoR4JVMtNt87zi5KzzcN8X34U1QAGGoeuYPy3fT5YfSD8YC2FULmfZa5PdEvQ86fzoNeEUcUGkMaX",
  "key17": "TcPDxc86cPj9j5foDS8ZkQHp2mXeqioFA6y6wfxMzjThDYz2MFNmTwif3NasGNggiqS3f7B8H3K3mrcWJp5nQo1",
  "key18": "pYhnHFhvGqmjanjxADVZfYFvHz396D26dTEqbBGDw1bCbDuC3yJ18mKQjto4UmZFYvprmemPRSm2jGvxpiUaxKi",
  "key19": "ZPRqm5NZ85kdMnMxYad4WmMC8d5BW1ix3nAsaCstvXCxsgZQkFWXoNz5qCCJ7wGDAPuaBzBE5sUnuyKqrC77jam",
  "key20": "2bKW5B8iRLf6sbCfvGoqno6xc41Vm18SrzTw76xyAwETkYSzJqwZJTa3tX8HbkC7EmjyU1hwj7ywwcq2U8RqAtTH",
  "key21": "3niuuVWvyg6Hh2itQ72wMEpwmVYUZ9LbP5ahuaNJABfuGAUWoJikNHppdgkhESuFAm2jYNNuvwhvZXvn8s79z2KH",
  "key22": "4j1gi32Hr9t2NBVTWRfHHU6gnXBP89mvsdciV9mKkGfWNT9F9uaQJBzpVBpt3q5xyYVDRXWsD8yajumiVJChxsPH",
  "key23": "55xAgFhz7AbVDbo41PbLG57pqfbpivHPttg7z6onnZ5EqWZFhAM9WVdejH3Yf5jA2MxbHLReRDccyH1tmQyXjyU9",
  "key24": "4iKq1kmrKYCF19wEGNfsBUFeopreQ3pQw3RH1nPSqsXkt2Zzs5K3anYgrDA2rdEXqowLteSF1v5SCC9MT8vfasSL",
  "key25": "3Tor7RSjNiMQjSM71ybsW63Pb9F2KXDeobZ54dVVHRVSTbQMPfcHm6ncaYZ8jWs7hU2EaWwqtdKCCTscavCgcQL1",
  "key26": "42yNzWshNEZ8bzJe4f7Noa1SCGigpjGt2dvTEDovuytc4duocw6CUKMTFoBTzvSAc8haQFvMZkZGgGTYebT4QU7B",
  "key27": "3JH7Ljt4kHJpCFw7BuQDxWuhGGNj6iq2qHQK5wDMdJkxVjP3a9h8DZaLjVr6m9FZPfn3ErEG3PRakNRgescfFyfb",
  "key28": "BFCs5v1EQFAMdKV6Szk68Khqe4sDDfbEJzGpireyVgDZLC36utUUi591bH1yRST4YsSq8GwdK9jrZ4yLx7AhekQ",
  "key29": "4VWgKT7xRTXDqdK5nbUvHKUFPjUBJ6NXaKwhThL98sSUfj3wnJyrtFR96nK8jd7xVgPUoDnUjGWSw9VpzdQFjBUb",
  "key30": "5gz6xu5gA4xA8BQwjT8ZwCXjrzm76KDAKBLd2nXmhdmiWy7R5AvCMft5Lpq6VCpdrFoDQPRV56L6DtD5i4Faw6bY",
  "key31": "2fvy5KghgnzSmc4kwhAWX2VXvXbkkJ3Ckrxpz2sKc7AUf5Qy3xvbopJjghAq4LwCqZU7Nk1N2vjGj12QYQXEujYr",
  "key32": "2QfBH3mBTKrmAkhQDPcxt3YTZywDxVeXsLi3zZH1AFFLQKNC9TGb1CpEdszvwNbRT9GLNtXwEEqniVb4femQnV4s",
  "key33": "4HfVwLZunma9NBsxdMSrdxXu1Ywmy2tSDJT88M7kaQ1veUz48CCtoQxyHJJhvmxtLyZyBaBE6mdBRNSGVbtpWdg1",
  "key34": "Nfn534Gv2h5wpNHgHuK1WMCQnMzv5LDFPRgnrd9QsCYPiuyjVv6R6AeQWcFzLhWaqieY4ubd7XEPDndJ1DBvMst",
  "key35": "2e7cXybhNR5aAvZHoY3XLWhtf1tJdjMkSgK1qea4UmRXtnoSG1dXaMGJFuCmTCTFqerYNKLjYNcVkPYQEMR8GKVM",
  "key36": "5a22iPN33msKQ5v862L8quWn8a3um8ymJJiKcCFuCd1E4dPFCzWtCgEmdYQt2GwotiE2uksYgA6gyabDMtVsrbTL",
  "key37": "1233BmLdN1SdmefAwgZzpkkHqe97bF7q92tE1EDCXdQJhq9zMUFrctfhU48X5ijVEzGhxnAbXNDM7vf9WX6VGCDF"
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
