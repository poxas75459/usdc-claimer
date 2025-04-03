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
    "58TNuh1CH8bzECVZ7NXDX8MB5mw29AHfVqoLU26qsv72PLTGMwth2Kibt94dX53tXucfrqkjKq7zJGcAZ4jbQiGA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2inMS3yU8Ux55oS193RMDi3BgyaNoGcHdXxNgZ89QktCy87odxZ68Jfipg3vqHYy21bUkWGzeZXG5qP6KWHwKep6",
  "key1": "2f4iTCwkP8b8vvFdTo6amzt9Cqh2PP55ACBMYLUtK6szYZqziSXQJbktLW4pizHgv1zLEyuNdJCi2PJ6BMv8u8H9",
  "key2": "4MNYSgRg9a6bQrdtZuwG5j3zABV34YBoUbfq5r2UEZeLbdQwV8hmmWer6TRqeWVq3zvXYgfhPkRTB3C9Z4sgHMgk",
  "key3": "4NQKR3kSqu49hpzBnDxcTUkYUbKwWt2rVMoPLUWjGiMhtNmmXUvyCZ41HBDGCS51cX7hPb7SinRDLh4Kw3Z4Siuf",
  "key4": "5SDBmuz6dSvA9dcbWap4FDZrM4pYka76aXoRPzatuxhtJPeZQYZov8u3QMsCg2yoiXNiUXFX6BFWpScmcddg1z8E",
  "key5": "HeU71wM6GVFfbsBCYWyQ3pFbSD3wUW53Q8r4isEeGDDCWChXdgyRz5Y2as8ZHEM8JaACDcCxqq32Yu11dSQxtwz",
  "key6": "41jkNtmrqDMKmevcYJ1qNYvsLwWMJM3DpZQg9gPcpe9akVqbKNdfDAwenbHcCMpHgURDpqxy3S6gLL7RLc1zqCYT",
  "key7": "5wEiVHMijscABUyAVa1RvXX68RudVw8p7R431ujR1uQykD3dfxtGcAo8jvUEHZf7eph93MPEXbzYDDJyfxBrgqA6",
  "key8": "5J1TfoGSKg5XbJ5XfHoMLEdg2TF9ZTVjAMZK6dwqqkirZ4uKQKkwQue8zgWs8f5W2HvbnE1hg7tcxbcgdwi96dVF",
  "key9": "5qbDef4dPRzCLMbx9eYGjANHcTvhe2EkBjEJn7GGmsDrktWRuzwVGM2DPGG6hJ2YmXdioiua1fx7scwC7iwHqYvC",
  "key10": "5kEQRnUCx2eyqrdjWkMfzv5DX1vBvmhyEdmY42ECLiSf86PjAmavjR8G57m2aUqrrF2PzHKGA4ZRQmiNxVpwcjKJ",
  "key11": "3Vv8E9xox2KFx5xG2YGQNJFLtcMLBrLTn4EqK3YiAs9JZ9jpycGMx6ScxGVkhPymtQ9mbE1rvRbZME39TcuJT89g",
  "key12": "cj9pZTMjdXQqgXamNZMWF9Lq4bif8MsX38KGPrswWVzVt9JCaXk8tC2MQZ3fBTTecVqUwevTSojCDc2DNoD3rRt",
  "key13": "5xPcpPyNBi1qqVist5AePoh644W4e8XGVT8Sta13YYummWPfLQ449aAtPUWeeGTkyvvEZfHPzJhGrHkRivvAhuvA",
  "key14": "5Az4pjMnFVskPtAyhfU4TtKUdjArkEUnLYD54j2kDbGNqmuXrwrTVZWCng4QZWb7hHBQaohMdawgL5ycsywT4R7J",
  "key15": "25v5uaqQ6HkX9YwR2xx8QveHBdxA6aFX91gNFWRPqFr7tbfSBPj7FXkaxvMEd5BzNGMScL26WAEajPEvDf4gw12t",
  "key16": "4pnQTfuGDaTpnyeSzRJMFhpCXYEAP1Kaa81PuYbDDaem4Y1yizcjApGtbbYd5V9Exm1Se4YLn7e2ji2Nvx5XwBPJ",
  "key17": "3AEdUWWpwsnWZXoEsVxGaeJDnwzeZypo6KhwSu54pkn6QdajcU6uQtgFY9MG7vNrr6ZsNDh3ewuVdX5RmCQBd71R",
  "key18": "bnAf4J9GNP7SbUAzJM6zGUYwMCtAYbLJgpChfWeyUqG95rN1Zv158yvbiUpv4bH8an8jEyCdCSDrkVycwiudJyE",
  "key19": "589nUoZv8FdJMdcUuaYY6rhm936MmZ3QBBtPP9dc3gGtqpDPcYrJd2m9DshBna2TzCksCgJRgVbYLeFKzy5LV8km",
  "key20": "2kLWdJXL39sMymtqEmVusN6VqpYRksBxHRRtFxe9KxFTT7pFTjr4JDnSMbdPZDMW4bVTg9Nh5BF5fXt5Qz5sJCXb",
  "key21": "3eTXPygRYcWwkYc2Ls5SagFAddM1qZZNcESvrCzbetbYFw1vbP882KjB23SarCnKU5bjdhCb9K88SjV5No6FHkZs",
  "key22": "5E9imp4nLhnqnMru8LvzL7NCedy7r3CXdmvo4QufBFMK4CJvDqp2YaJiYNVmdLePCPQzvU94rBes8PeCGTrfk4t8",
  "key23": "9EVVTNo3VvPHmtuvSB9tVmBh7dHSTunJPSHvNutABe46AFtov7DTM4S9GhsgvAjAa6jgbsTZcd7BJCU1W6tBh2F",
  "key24": "4wtvcUGNAomsrc1R1dNFkdWk5Wf7nV5FURwQQR6TfuwMYc9EQxMYXPhJkm2UPJCxegSVE2Dc3YUN1W6fJUAWwBqg",
  "key25": "1T2ozLN4uFQXczdfCUpKY3UauKwD46e9wPa6yaREg1k1baBEZGMvone6En4j6y2ufG4ycddE4PW8jsmmy1qfUKq"
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
