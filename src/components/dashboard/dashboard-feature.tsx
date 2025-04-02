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
    "4WnmZvTRbZAtR4SDXjP6fmDtmsuVSWmEJAi2YzstdrgU7wcccogsZp7QsYteVzXhmfdQrTseXADRojmXihDHnrez"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sLPFScNaSkDBVPnBov3xzXLnZCVwByTbj1t9DCJR6QkZTULwcfqD97vk1MWhctGV332CKa4d8BA1w83MLHidLTA",
  "key1": "3HCGNtFREfm5dtDA66XiRoirUiwfX1GVnXhGKauxsNRYenAkPWTN5RaE4kqFiUc5DVh2UL8ci8uTCsfQFRhNgsWm",
  "key2": "3pjr4Jex6vMCabjL6oFadFR2p7vBcBivkoyHRXVAqjWEteiieGbKUbRa7sSQ6vTBySox7aNE4U6KetrRcDbKXkRx",
  "key3": "4ekiwE4mLy8pgqrowYCpwvrj1p3dHLunvCZqX6RnqUqhFuifEcC3uNuFJ5brMk3a9zPmUsrjUZe867Qa3rzTUuu1",
  "key4": "5gt3nhknTPa2JyAr9MAnN2Un2QkobqPsrnHSrRSzWrQRrzNnk8fgsqFjimcDyy4d1xBBiaMq1RdusJLSXpz1hab4",
  "key5": "3c9QuRK1wKRuH6xNDNBUy7EbsiWxTn795FgjCjjBAQLKzj5XqmWevrSB1AKbdKzJs6qcLVHsn51Zdx7SLgVWH4JE",
  "key6": "54NLrMnsSK6TMBUmhkZqzRYSG9BbaSAXXpGx8uqqTPvrmafDKJ6oqsLpzxFCcHjJ8PMi7avccqWyByfnDUinBAJv",
  "key7": "48eHNCBkeUGpSBMTHRpYNM1kMgu3mtLocpTEAo5SfLSXgT9TmqpK535ZNeJupWuL242EbqsnHJY45US6WjjBg2HS",
  "key8": "5NFW1j6NtEg1eQhKcZcq4SRLp71QXEtQVzHBoti2UDEAgsX1fUhKtypiqNKHUMgquNAKs2cMFM4zVg3Uq16zNsgC",
  "key9": "2oXer7bu9gifh46Gt3vV8sxoRRZFGyggXZ7ZZ43LKzXkLcHLShAfwqzTtT8adcm3RCvAnnLcXCgAR4yMsZQFUmvK",
  "key10": "3eQ9c8gHoou1swo3dhiZEtzLtvftAg3YtFNxdiwo8gSL9VYhA3knVTCATzfHD3oCEEzFeFydDBmABU8tHYhWitYb",
  "key11": "4rqtoWoCnFo3cfTD21tpQLfnVHDsajm4yUh1Mstvgi6kRmsdTANdmX1bakfnVfqgHAz2EksaUeGjCt2NrKmpfTyq",
  "key12": "5LudHBU4rNvJq1GUu5SBrTKbfN5FNLmhswxc6st6iMujnsVSPpXYnnC4sMWVA4YZ64fC43StAGdfp3JrsQ6XBfXS",
  "key13": "LHgbPpYzEuEXrdLeeSXPWR98f9BAsTdv3DLsjiJRv7iiEyCxzQex344pagVYo9D4yimK8psJoTCQZ9gWzSpdD1d",
  "key14": "5sQq3USuQfUS8bQCsx4oH9X6DorwVZmokXg1x3LHiWbkGdAf5uwapUmprLGKkpX9TVRio8NaFH75q2tSgf9mhmmv",
  "key15": "3H6NC3vRhRzX3WKvPu65QJLTWWb17JbbsTgDhpkfeQwUfJCbtnpRAUfhxjsjHZLx3SSofcfben2VdEG6SJ87UcDZ",
  "key16": "2xRDbX29hs7ZggXfMjAuuxkomdRoNdMHVfuuVrRP77c3wkPjH3QeNCDEjVXfLdDy68uwspNQEmEATb2AepDJBVQc",
  "key17": "aPGWSvmfXXnTypxZ4UqJSTp4n9RddAfP8xMFo1N2nvmXaU3VzNdYDbBwgUmJeJzjWkp6pzQxGn9WMGJ5ZoubGnv",
  "key18": "5YekKpFYQ6UYjrZyuUCDeXAayxwtTGHmzZkVeF4UUWpny6C7BB45n8wjG6QQSHAKkZFFckdxHiuyHXhURsVbqbfT",
  "key19": "x1hnJKfZ1TUPPEUMdUm37gxavaMJWuWuE9QmJbGRAPPtqs5sCrzhRWTjEp2Z1dP7SovQYZ4HGyWZdpwYKXpsjuU",
  "key20": "28o8fP7Eo6cL4hGgzVzJU6ENdRTuz8XHDShKK8WwzHgC7Sr8yXCVnSe56kRAzDui2nE8psAPJvBx2UmfdKQQ9RvH",
  "key21": "5M1M96QXKmjAN8WuVKgY4CScvSz2aFUwRAkRziwzWPsKQZBFFDFj2FJMAUrWnFNuusiLsH4XNEQKF6XvkXjoeDF6",
  "key22": "3dNJz8pm8pbCCE7mxnFqJqgaWJaSxUZvr49PEd5EpZreDVno37N4wJ54PNL7zjeBWocksGBYjeiWHQ6ZNzERvhim",
  "key23": "4KraZXo8VsLCvayz5ssHckus315ewYqAkdGrbLFYmM2HT5QVfkbcrGegnWkUZogTKSUySBtoESqcMahLCqYtHgnG",
  "key24": "59bWebskCUL29awiA2TcbGZVUFNw7gzw5BSEtf5k3ij6zNQbybVpx7Pkr71FcQUBDXsTJEGmpjYVTwCB92LBsyxk",
  "key25": "29dUMR5SGGT3HatXxFTDfd7WqwqZfZDnS1DK5cMidK8EadovfMa3ujZn7oeq4chxZj4wcoJxSdN1b2g7CR3Eq6hc",
  "key26": "5EKK81dhnVAUueUzh5d5wJztumBqDWGfKCnpRRzUPxXRKdivbG9Vg1e4FEGoRchH4Dhb5krDFrxj51zCytaHyFf8",
  "key27": "KFAFaJZ5YpHF12iWi9LBaEbc43LEFR9dyv38WqhQgnNeCCK3wwGLbLfNsJrKLp3tgjCJ7wvWG8RBy4o1A7TXxu5"
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
