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
    "2va16DSKUjtNHC6RFGnhuSRDJYWngZm5Mqtfixm2FAbVrD9JbmF4UciiUgVhvwKmMZdbHqr1dEnt7ayecNYng7Vw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RBjz6z38q3D2kz61mnFkSXvVKEiQFBZ42avyBzXjQXesDUf5Zxm6JzixEKJYhSnfqHyU7CXtmRDi4qFspPa2KMm",
  "key1": "2qKHZPGvqi9rx3HQtTL6vWc1Gv4ukdEs5JN2bCJuBBhddFa38qi9ceseHsiTVxJewzK25GKfPas5jkTqPX9eZKpi",
  "key2": "XtPE1uYeu4kHDDMSYNgAr8TvMgP2P4FZw4oRXvFmo43AvkZLZP42im3ps2VAfcGY7gsvRSm7bkemjQowXs23X7d",
  "key3": "2QvQ2MyXnFaQvBqK5QHDL1CVv6cT8pMvjQjX5byHuWZexEX9PHYSaUC6CrFSANG5jCxVReses2t6whCXSyuBVcid",
  "key4": "5QDLbW96cNbkvBegPfkQCqesBvr98DaiaVu2yorSBYNAQL8m6ihPeVcSvJjKh1zxnxxrsQEUURF1wX62jZ8nQ6ie",
  "key5": "3MNZF1FborHot7pyT2HMJ5Q4V3eqxHv6sJypk8E6tETNuhJ2nFwWeJudbYVd1b8tV7gMiy4b7NioFrUJz8xamwyr",
  "key6": "22TrcZVAcqtn94v5AcffBQNW8BCcvbN8G6vygjAkLkWgezVJGRfYV4dybH1Lh9zGbZQc5fXWyWbRKFG2jhSoWUzq",
  "key7": "5Eki8onPYbwSk35eEumKSPy2Xx5uErAnTBTxV3BSJK6mk8BfHJxyk6ePx4ZZAHYBLYLu99TzeybazaWutUTaA7M4",
  "key8": "QQRoHgZn6J1GcuH8PudjS6GANR8rW1SgcrPmuYrH8kNRzRa8jFm7ynET4hfJ8g845eZYDjirkLbQGXPSCEs5FXN",
  "key9": "5gJY1PNDaGwNfLXKSaEpAcCujFkBMaA5Jbtio1gwD2Po9959m8tRRsZY6TP5bv9C4zfUrbyEGpbUkyFy5dToSN5T",
  "key10": "2yedKKj1zn1dXDFV4WE3QDRfigrFUQFSQJDv6VbXvmwHcrCBvsoHdhDnGm5v7qHW15Y94oN8ZxpabKbxbjCF9eYH",
  "key11": "3k17kr21K9GDQaCeN9CVTiqj9x5w79G2sTpwFo9cYmer1282LZ4yvSg5KPwV8Y8X8rMgiCuQzPYN3LseNjQ8PeLz",
  "key12": "5SENDNcZJYYKuSB8PeNF4Fxif5ReG6n1VuTqCdXzVQJjNhJkzczoa4W79PXN3bhihbaVztRvw1SKRjFQ5gkXE5vG",
  "key13": "4mEhy8YLx2xVmNViR8UkimgyNBz4fE9dssVmqFgkmBTVK9RC6TU4SmPmwsSsp9DDZypKkN43vnPSFHVZyM3ciVof",
  "key14": "WuCaxRA7rBsod7Vf1MbwrdmLGNvtgASwDxr5EheJ1QRwHg86LUGLEbAUdZCWodh4RynmjAaRFVSx7St8CSY5R4K",
  "key15": "32pefByKvwZwFtE4szdBcYpPDHJLYC2foH93aFfi6y3xECfpCcPh5LonszwDVX7zVGLjpegPd5wW9Ndmw9paKNB6",
  "key16": "4H4eYSsu3Wc53R2i2W6Ju6C8CKx8RPSk54bBeXY8Ur4xHmf6RiN4T16KvvFU3pVXSpVkRTxWowR6Fx1hEHcJGL7y",
  "key17": "3tZXQN7FXk8YtfB4GXHW2awF7NVJ8tpEVpV9XJv6cGr4Sx9etyJskMTcFjEW5apWDB2fK3j7G32z39TBtFSvrycS",
  "key18": "3z4DWRDvSk1iS9BEG3Nfa1K1LRc6xbcR5ukdNcVF8cAza5h4pqnJ9L629ckPTUu8gUsSTq8paGQXLJMVU5XGnKbr",
  "key19": "4t9NVeEs7UBkcRQ2SxwCpCKHZLWbJ2G5vBKWGVBXaLJrhvvSp55NodB9JxkfTQyxxvRYSGeq9desukaxP9bAMzuW",
  "key20": "3999uUgs9QkZ6fBMScfa8XnycbBe6rVca7QjePVA3SaDYuUD6y5kJrz5ihJFkjkEVZkQ36AFvp8BZibVdAhEVrBz",
  "key21": "3Si3HNTzfanG2QHSbjU6gL6yoZqnEL9uDAvekywPfytuV6ArqBrDcn5GyjfQFP96wvRqnaeKHhJyyNLCmgA35H9z",
  "key22": "ixH6rvUAKBspwLXyZ3961Tvrvr1LH7js2FPohitRcLcVcYB7tiS6DA418vbP3yzQ82gWNNWQ3kmNst9nUXFfNn2",
  "key23": "23ubSVQT7F4zMSgDcwQUACUoaMxnooQmabeRJn23nPheDkSoMc5Cnzy6WeskBpJ22BDvQpsU2yAsFAfwnhtCMD4i",
  "key24": "5hBgnQdR4mUeFXBXCnY2hFbMszgbD5CpSjxqZQSVwehPTUFEHi3nMNAwo1pu85kMKkUPgdbnKUkcvF4Sczajh5YL",
  "key25": "pHq3NYo6cKqTMUraDvZFP3Bjj6VKWMxaYayAd7Jd3KFt6Jkp6sw8RQsPM1xuiBXfDT7DxXSgzCiDuJobfcAMVmM",
  "key26": "5NCv4NeMFcA9K8dZVNwdsXRDPi1W2dm8X4XLoeAbsMz3wxSgavhXfmRntM6ffdLVM1Cw9vjF4WiHWHCNv9nZYJuF",
  "key27": "35rn8jgTm9d79WDYSmqf75BQoUoFfZvGjxnQ4qw9ELqFnzAMtDvW5D1YxnNx2dMPLx9dNFcD98cbhwpmSMrGaxhh",
  "key28": "22rjwM7FEVWm9cFtb3zqiFZsPpPRY26iNor4M4B96whkTZpM3jv1QaQ9e7DvuryfUVnb5pF27WjeXsNRegLcHJJW",
  "key29": "3XiCSyACpXenyFNRsn5HLaEEq94tDsAnX4bTdutb45BJKgvi8LK76FQqJH5mY2GtkMLWgUBHXND3euEq3tEkuHu8"
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
