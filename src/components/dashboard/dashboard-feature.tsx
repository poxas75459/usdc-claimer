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
    "4XHBac6Ri6xTNqcEvkEcLDpEx6WCE9J6Va3cvRBTpY4MckvdVTXyjkGbx3KaREfcN27atrFzv22VjE1QFTcVikJf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r6RaNeh9cwsdNWhjRMYMEmdLGPRa9JQ2dseaw3fZ16AyykkahcjsrpA76fRrZQ4VFYrMFwC1z8CMoALJv7kcF9q",
  "key1": "5BCT5zcjwwfeFQpmnYNXsctbK1xwFrbEPmMHdwujDVfwbkNWpAvZxXAhajEnBbdAYo5s3XmiZcZDuqhAbdxLBiHM",
  "key2": "5HcpfwF45bUMbwKewDB7nX9rk6jfXDKNXSEFhQvM5maDhjgyxUSACjkrSQ8mJMkzauAZGiHoVjSQhUEfPQ85AKfd",
  "key3": "5EPoeaK11s88xkimFQL8SDjTew41CfGyQQAyn63n6aZzmrbTaXKF7gSfDfVDjpFBXJkXqLdmH5NDqEhnyugaENdT",
  "key4": "591MPRCgCSxTKMi5vF77pVda8BeseKNpbToGssPcAKuL47wRhat4qWdoinCgxBgNMuUscqBsRCrTukctKCkAWVzQ",
  "key5": "i9G2mvQr8UCCZ5yaq7zQsZKswyufd3waQjCU84UZueFr5AwVaq4ewd8gcHtYNsCgt7rKe8tpi35YyKZG6rTeXcC",
  "key6": "2uruFpcK9xVD22ZKNucYG3CXgdJ8qqj85ZQnQp7EkSV5P9AEJvzykPGYgxDd21ehnhZsjm9o84F4jaeU9LrPmS2W",
  "key7": "61VwczK84jeFx5Cxi2eEiY2jgq5DS5op3F3DaK2P8rFaecxLdkHLySVRZYcmnBYituDmp5mtQJopqG6247jUMbgF",
  "key8": "4cCxbTiapEZ2tK8Sk88EaGKKn16Gyf9dMz7pyJPTKKsf8ZxRjwZ88BBcR2GDX5DnQzGPL1NYSncQRR41YAntpsZS",
  "key9": "5qRDwuWaT2thFJMXGWHbax6qVeW2wMr9qZ9WroNbE3BAyTSwHhf3xdRKYLzbMi7cCTa6yDEy8g4wZAm8i69w2szp",
  "key10": "KQ3PobmzeAWEeJ7wZJVxRGzvDA5n2xBuBn7839Eber34gSWUDKZFroq26aH8ddj5HQji9qGgTkdCs1xkdS2PVzp",
  "key11": "58CscCuNs5WXjWTQwA4JwHVLCT9RAxu113K9AqMYaTK6XU4Cca8FDDihBc7H8zhHBSWsdBhSbsaussZWKmFnzeXV",
  "key12": "rM7dvRMAqgBKs6QuPyPUTVEUKZ3Xn1aRkXrrcavLnvYdHRQT1gXU4ngCq4iNwQ9W7jM9dytSTXHKtahbNw64pMq",
  "key13": "ZvThCa7CgKw5BoNB16RT1oNvNyQsjBFaj4jnsrBF3cPuUvD8SccFy39NgVybbUkFTLWCA51mivhFjXhx9LietXZ",
  "key14": "u9JvKiqUAutmuUANFMMpTKbtwbxp5HYV8RFd9Wrc89emjx6yaEp677F3jzwQGZepmosrzBvrt3wn3ZUxhJqJd2N",
  "key15": "5h48VqhQEiKZwqW9r4N93hfrx5Z9S65ut7kGDvx2M3UsX77StQtCCg53zQ1K4rgEhpFmX81sfXWafuTAAFqWLA29",
  "key16": "31H4kVVUr5KPocuEd2qdwAhGrbatxFai1hSgxJaVYdfZwP9E4mCMy9utvR6fmMjdRmeNKoDRwyqCbFVrsc4WUHhf",
  "key17": "pGVdFHmiQSA8BiSchk8bgx4tDNMuLMTDJcXb93pxmEv65eq1Mi7VjGWQWoYHKcuUWb271hpEY2kUcMCJ9iCkZ7v",
  "key18": "KLEDJjTsdtDsoPo9Zqcme6LfWBJnnZQJqASdfwkv6avmyu28znM5mqdk1GSQ7d2bCg1ts9jJvuTobxpQFUS2Ucw",
  "key19": "MTCgWEJxzr3JYRg9FT1SwxxFCx3ZtW2oMTSaDDtxW6QvdHcxM3g9Y49wvVwoZQRU4JvP6bEhsTyGx6EDB1wpDPC",
  "key20": "32364rm84XsJy62ZTkBD9Tknyemt6xJaYfYpAo6dcdo6mFhgFwiBCvnYwx4RX3UANgr2PqYoq4hQveuNznAqTkA3",
  "key21": "2TWHAaeYf5KnzSXKjXHmdJukFTDHaCKqY5erQaPfxXyLnrbGssEiyvk9w7o4yH5dPv7JxjeboW2Yt3GcY8DDNcxw",
  "key22": "66RJ7x3m9Mfq1kieWs1KHzTnQUs8og1KGz1jH81PjdzmW3742cqXZp5XaCXwQLZuikdQ8DTVTg3XvbdLvNmV1xp7",
  "key23": "3zNoMQz3LkycKm88BMSS47qK9qi7h4p2fczNppa3dBKx9YVrD8ZWdhP9TGczd6mpGHZKoPi2qNJCGnnDEYYet1rU",
  "key24": "MKa7nko1fxjpqdZ9bTbb63NKoQwo2srLMrZTiksAJN458CqFf6NRX5hJm3nPhnrzRPgXQqiH6k5RuvfpF1v2v5Y"
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
