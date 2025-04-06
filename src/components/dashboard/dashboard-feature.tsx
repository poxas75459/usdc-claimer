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
    "3REmPdc4tCkXXNQZRB1b9EF6wW2b9evwXXiLh9jw8sR2kSisdBi7jna5r47hv453tc17rNcKsw71cnqB9f29sb6W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GfX6oBaPUbGqVY9pptqbUSKSQfhbkNF7mJg6QZVoVxiZLGTCHfkG98negQpoRbReUQ9RKdTdmJFNciDpa9bkYeE",
  "key1": "3iL7kkbXNQiRsdJi155jNvmS3X41rEoUAVz2AyFz35UpzPwxUdN4W1dUVJfr8PWUri4u4ZR3ntrr4v685qdDwgbw",
  "key2": "ZCjqKHtiFV6EXT6G6UbWrjfg8TLtRJvdAXX9NLmB6ciU645B2gTZC4ZC9m4xPFkt1VGndjeU7SJ2uFoJiMxc5Xp",
  "key3": "2WTSCYGv7mJkKRWt37pFKkTdR9Wbz1HnVFFnvNZmiURrhLHZfAsgEqrFLvQ7GG15AF4EjSAFqe9Q5uSca7TqCdDP",
  "key4": "5CDQ4cB25qWCAQuYVydrk1TbGXxJnvj21Gs5bDt9M5XkthfZz8guJBypCeH48rvm9ZFhCJVtUWr52wvfMwyhtQJc",
  "key5": "4Wb4mNRRRLTuEPHyfVkEBKQbCF2GJpDGmE8PjLAeFWRMCGQe2fDzFoK1mQRYWpYXvYnCwA7CmkAo9xsaTYTwQSdf",
  "key6": "24zUYwvgqgwvgCMU9JmuvXPVqQjt4rrndU3CX4VzRBEgrkUiNxuXuiJfDJ7qGA8HS6w8YtQWx2zcRN2qhCncNyJG",
  "key7": "5i6EzMFxvn5hbXsCEUd9X72smvLrAtpNjQ5KH9ehyRAPL7TqoZ2JG9Peuzs9tJcmDmoLa6a58JjeUJyVhG4E3MFy",
  "key8": "2dkfQhwrwmmiczVfYX5kYUHrGv2h77yncw92zBjWmLgGH8TSWEjQgbv2Ctpbc8gJk28mCTAPf4MLbJQDDKbM9fxY",
  "key9": "23LpxGe2JeqLnuiRY4wE88JgMJno9eySPX5xjnysqp58GBsupmxmE1XsVtViYjnqgPZ6ka7XHtKurFeR1uoxHGs7",
  "key10": "3LUcU2SALqGuikQvLRvmLekmCRscQABtDXVQoZ71WXzwM8cexbr11xT21QrJZaGrCxUvyZUgJaAE6bmiGHxCZuvY",
  "key11": "4gDecASatWsne14rFkvgwGF9wk8EzCMjcGDj6jQgXgPvG4z79FS2Fak3kMZaAkiwNWnXMKxBzY6g3aSKT6iAewKL",
  "key12": "5BBZGoApVrnTQjpbcrrg6M6DefbxF2vgExVDYbW1633QwwMtARtLqb8QSD1ziE7E4cPiyBJe4rT8bcQadVM9KTkH",
  "key13": "AcD3Q7JmVMDQUBRZsk1qpH1gLciCQLzE4EP5LMuDZKPCHeQh4yYmGrJnJ59zNjQRr8MTMSUJXSb4kyuWdQ5q3rE",
  "key14": "E1iNyxr6EANqUgBHtZDA8qj7Ei5pcnHusx8LorbLeTrHuCRYsVJQTaQAMPuboka8uVeuHhEVTRzLzrmRAPPWAGs",
  "key15": "3ndchtrsQgw8TaJvGFDe3CS6LTQzcKx59kDgVcXavFFJvJ6UpSdE6fCw7E5xbohQmWnrj97wX3q3Npkj29fJqP4A",
  "key16": "4qi5DUty2W7ximKYmSnTUT17uoQGczDoca9Xb7g2Vo2CmaiAsaoEQ7cU5y5ttF9gv3kw3paqH6oUVF1KKJYGrb3a",
  "key17": "3buTX7SYorAKnmBJYhioVfgUVfgMxzzc2URXf19bJ2ePQtmwxXYJzmenpmSmvsrctZkJFHhjWyv9cs6kUHqvfrds",
  "key18": "2yHS4u2PU4xrmD5XtVVRVPTntgePnNeDieHJQuHuQ2JcpmfAUUEzPpFx8HNG8EhjZjVDjbXTX5HWaoCvVMyRm36Q",
  "key19": "2aPzg76xyTpomgeVC9DUMkqrbPchHdcjqyNMUfCQ8sP2cqLZRMpeGez5ugkvX1QeMap2G6JN7n753Bo5GVvyr9N6",
  "key20": "5KuNUMiyGgei6NW8xt2bJaZppEV6tHYURYNVjokRqHN1y9CB2r7RPLTRAsJVA3BdiNVUH6YHdcVCX3AwchgGnCog",
  "key21": "3ypDbPLurcZzLVmLk3XHRFyi1P1vnyfRPhAdcBE3bwg9a6PCk1h1t3Jsdbz2XQ3iGzuwrDNjZ1RvuaqsDJ9pdqHt",
  "key22": "5pu2wSEAnUavUjjGSVviXqjNhMia9BKbgFRKYewvr8XCrKUBr7QyXieQD1cUBH3fVopkUfwAEJSSYnjUWWL1Kxwa",
  "key23": "3Gy89vf1xHLuBhfPpuBpP2RXF5VyVzZwmTXy4d8D49tokSEK3fKZemwNaw96Xix75Ro3Gc6eWXzBaapwkfeW2UFq",
  "key24": "2gCN7dPM79kCykUouSdK6jDawqDgSPATxZxQ1DkVVpxvqFfBJNc6Ne8DmRW4m8MvVVi6SAwSyoFN4TBmfpv5gcmQ",
  "key25": "4BSfACFfpR4R7oxVyJfuWfRWtiuiUZ3JRVP7TkbiVfv9UrJCGiZFjUQ4TgpNUdwLuigN7zXW77gALrpcnytVwo93",
  "key26": "4gb8dDSVskifZ8mCszkWiD1g8AR3BMSoHnmxEbE4pRib7Up5k4UYTmKkTTjm1Vya79nKZ9EsRwJXwP6kxEoqv316",
  "key27": "dbYEHvSV2oKKBFhhitLweFRoveJLfMtTjg3r3JAeT4rzgXdXc8nZ5x2BUymgyGasXKk9iXQ6beQtcPq7KMPWrw1"
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
