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
    "7oHqYQdyKw7SequqCTPfNLrpZzpXXh5AuKCLXr7NE96o8kGqtiDgfu4sVhuhtEzZEUSZeJiNgaF5ufWqPpgzHG1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XgUAmedT5W6iLcqD5H8NGwcdpeihNfDUZYWNgexiTuAB58GbnfFsiVWTyEo6gT5RaHsiJpEWX31tZxpswM1h7pS",
  "key1": "3pReVsvhNF6W17ZoAmLV6WXUicAbjbPCXgNYz7Pq1rLsNEhV3kozJgvt3zbxtJ2ah1MixiZ9F72ffoRXLG9TtbYf",
  "key2": "2rPsPMF21Mw334gkQDjR6FPB2QSkaoiPugsshKH1xLMPakP18nh2AV4iaHVQWxWf3B6Xex8jkdv3G765xtUzHKny",
  "key3": "349ysKkmozpyK2jfkgGBaGQGzFZK2uoF2uGbJ58iBRdQfvB7je87u4ArmMXjtc1TRhdaCehsuUyJc2UD4d2NbYQr",
  "key4": "3xaTXGUceKxaKNkyKo7bWd2bfUD3DHzmNonQ4k19vRsdkQLXS5rcFmTRxfHFWC2c4V2TZH4B7GjPGsd61SELGaTK",
  "key5": "5uq99P5QyiF3kLRjouVR23pg1gf5bjnvocg5UutBb3RUBbVrAL4vtDnCtA59GztxHL6WkRKuj4TanYN9vscfwoxp",
  "key6": "2g2utKvtCAvLyPmozfwxNJfMMDA1B7ZgrGaKsMAEWu86bvuxdXMvEci96nU7ap8woiRPzR9SYfj8bpApyLoYw6PN",
  "key7": "4xwW1hM9n226MWMWzTuPrudfXvYNzR31ZWCQdpa3daGJwhLWtVezPmzCrBsavsMujsT3T9nwHVuMnBt3KkcSsLow",
  "key8": "5GXzy7dADGzh8Gd4Kp6qAcM5xsPFo88hj7atYooTDJph9uJia3tLddh1vSL7VSQnj2LfKWY4KZwppu4RPq22otTS",
  "key9": "Vde5yS7XzVntugFwpSi8QsYdR3wbse6nTaCEUDzXvvU13yNMNrRXPSUHwC5D4pLVvbPJUgy1XKDoro2YMKiuY11",
  "key10": "63oDMNCCcGwofYHo8xM7V9W1kJ4guMtcfe6ZCctdEWoMVSNGbspCVmXBRtTsLiY4jSSg93FzAuJPpHQk5TQ6QWqU",
  "key11": "2kS66NagUw2jvfttZaNEJUSiBVLp3LeJAjs2hhpCWy8fm621TK9XkhcYdBKSB1ufRKxbC6ZuUs2zDUpkpQjbm9rp",
  "key12": "3uCiFocxWG4k12bN3MFS597ofBmLEJEvr2ABBd9yA62BbP4tiGqjnG6bqeeyHEaDRH4CugoTWD5yzK9JFxExaCQm",
  "key13": "3Tm6adwv3trCX7SdRGKuXxjze5NchnWA9WtQ7ewHurv6uurymkAkJNgC2q8tBGpzNTd9WDHySpnfyVxBnDYWKoGk",
  "key14": "iCb7FhSnR4vesixxJJuMGCPcTV73dKmDsbhCX972ho6Jw6DahMYtumwETY5Aac7nsL7qgZ9LwkXLdq77R6CFwM4",
  "key15": "3kQ5CDnv8QpsGjLm5UTqph6QWBMKPwL8odgF9AciRMr5Tir65kDu5Aw1YKK6h9hmBkSfdt5S5RmndPoApgi3ZTed",
  "key16": "3iGHdGCn6ra27dXW7ViN4ziAR69TDjk3M7TxrnAX4vP9yvmEh779jFtaqpFeFBZze2Vm3dFrDKmbi2zALufAAmh5",
  "key17": "HRZbDSsj4W1zjZ94af6NPaZcg5VPPaVGS3WFQWsZ6kDikxPNzQtAXexSyGqxbjvxNiYd55kAfkAXHSKUSME6pk5",
  "key18": "66rsCyfBCmtMPpSSZoRn9UFsLV2F9QxoBDgArYiuVADvRha1LbmW5x7rzhf2SbBLryLLbuMru1psconKrGo5jGJS",
  "key19": "4yfZETb8fgJqUuaVL83xdbj53yHcchPhspqzfRYc1MJmXUDwnNxERMCAnkV7RNvhbziFTBJbS2uWFreDjcZuqfux",
  "key20": "48ogtkw2ckj8QQmtWRt91QgGZ3Um1iScXxDC4Vf9VUX2kdnWfdHbv1MmtJ3ha1vE8bV3HqqZUDGAFjEoFYbu5UYK",
  "key21": "2MLBXLwSt9vbLPiVun9KLUfVJMYHbfWwAnVEJWDLuuzJ5BdhBwFhf6888sBL3fgC4C4fSggGKrgmvS9stTi5nR59",
  "key22": "7coJ6KAc5cDCpMBa1VNxgwRjQ4nUubVsnsA6BTy8XQ3JbuhFkgRNjEcYuhNVkRBp79GqBh6pXGU1pZo2Uo2V4zA",
  "key23": "2QLCHz382KKhMDHgSpTDs9ZWYrbWD63A3tcJcw7yXtWfjPGKvH4HgkpbatGtwBT1m1meE8FEMzdxLUfhgwBRBi5z",
  "key24": "2YyHMnx8Sz7tiQnv37GoTx2EMfBH146UbHJ42spf1YRsxFECtLQa4debMSQ6wALyTc9YeEM9ZqqmPmPGj8eS8PST",
  "key25": "4F6UF4ofXwbgyTWCAc5i8qjQdCrSBBwqCzCSC31Qz2qgqwLox2PYNF7rvyc5c2QTRKmxxrac59UKmYPPhvzgBTJP",
  "key26": "5JdeL36svVuzum2hLfHcgwqZKzbXbbCPviYXoTD2Mqi4XpweKfAnJr47JDaPp15TSeJSBrqB9KB5ZjDtgCS5twPw",
  "key27": "2bi28NvWFWsg65DiMUkQnxe9jeXo4gr5UybxdiZiihgKiWPPsHsKDZDSsA9HCrJg2aLm9idMrC9yor6QWR3tteAg",
  "key28": "4DzrXtfTVBPeteQkM2dpaZiVM4XHYsm2oH6quh1M6RihXzZPBPu7ie5pG6v1Xpovx8XGNZDYPCL1DsngUvQEmL6G",
  "key29": "4yy4LSzNfK8JC9yGCxvmp8whwhsicP8fyQcYvAgZemDW77rBFDgbTS3QTjoYEAL8ojHkC6Dd1uQKkkAvBqmebC66",
  "key30": "USWevkPJerjirxn1pE6Ph8FBfDvtSzrQvMKE3s9RxTQ8G9HK1xgKPPJ1k42cugmDtXFejCRELHZZb55S7TEUTKd",
  "key31": "9FA2yLoybc9Vps1RUQhq19Zr4ewtd6KmnwCuzwda5a6t1xzfwuGzuEr6jKYoUK69NwgQydsmQSYjQp6kDjhzcKF",
  "key32": "3c5bYtKUT9y88yEMRJmSkp8chWogsEGJEx4LMVAWe1zYYV3GiHkm43Go1zqrfmbxFH5ZgWWZnZxDCNgSFSHkADhi",
  "key33": "4GU1aho3HD8Zp9fpRjNqtE5pq4gxoY1wumhyaqGTVtFhLHLRcMur2FBPFsX4bxBC7LfMuxGNkjqeKufeVsgvdPmK",
  "key34": "2MvvCHL8uPajDS7Mk1kYj3ZtXWoxRcZJLv5WBSgsKgX9uXcuCfUdaqUNW2dtMCUZm97bYLgFb2yoNZCYjDeqGrvY",
  "key35": "4xGMHRrsipES5YLbd4oucu4CGZ6oGubApnCtev1GhiWqjpmDEYizvodfEM7NuhryDoW3qB3JZij3dn6ADDa7LBPE",
  "key36": "3d6Yns7MDp83mLtbASNpFjztJJowDg14X6RJHx8zaVjDY2LVkFxUxVE7Q4Qqj4vZPEGcNLi3bMHv9e3L6bHuyuBr",
  "key37": "5HcaZ7a4yyxyhD3giqvg4NYWzNtdYmSxDPpdmsUEYwciRokCodETeXSghVPn7v6RzSs8QnqtGJZWoomSYnFsztPC"
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
