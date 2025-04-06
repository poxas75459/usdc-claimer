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
    "2ueeuYfCP1JnPHThbQNs7A3uL3W14hYAt1FpG6KXMyDA4pwCF7VGk49yvxCbGyB6g2KTGPHP5HMgScRGYydLcMba"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WpW3P7uycPoJts3rvvbr2UaFmcggUoer712XGgQt5SbHBP8A2iZPNFqNzKdfQmhqzVzT497EgwTEGoFSnozifRD",
  "key1": "5Bc7dLGoUCmwiLgVKXUUaurhguFZjFRwpYoTgfRs6A1MTgQvXU2PVyJnN1xTjzJ1VxEzab6V8nKnyFpZo6phgeYj",
  "key2": "5M6q3ebgDxr3e1qa5hRrYVVC582R95uzgrBdJNrLW9cobEjQmjmNUpaKTpxcz7eUShSs5BvhJ7j9x3N9BhoSFTHW",
  "key3": "2ATDFYm4FNiZQuDFLSgQ2VT2Bu5aoSdQE9tPKmgtKdkRvjBsMVg73gaFgMUTYVBVZr3j5ZUeMPsGBHbq4ANW7La",
  "key4": "5n2TS5FPhYMZsfMzFtJrdGDxs6U8hXZ4Au38Ysn2pyNga6n2yZsNDkkiVk39PPENcCtifr8zUjB4449bA3bH9Yt5",
  "key5": "57XK9p7LVmVpKdeA1cbKU517XYkLGAF23mAcnzNMFteTpsvFkAAdHya6FFQEtuzJQV7QLwksgNfMDSyQ9Agv6Kq6",
  "key6": "3P7NieQfFnBbJAzjMf6yhmAr6D4WUrdD731FLdQpAZKMMcWDCYkWqCM3NfeXUR8Zr1pLJgzEyLrrNoAQrjeDLKgM",
  "key7": "2tueACrtScrAHExPu4nv2smwGzPGyRMa7cHUbDh8et82Q1Ti2fJMF4og39Bb9yKhKWqPVhsFfJgBF898JS6Gznbz",
  "key8": "2ux4kQ2knTB5ZSUHXZGqGae4DNQpxj511sgx2QUijzdbdyYT5YvnXb6qfcKTeAdA5cshSgT5gWAa8gCeq2EESGBT",
  "key9": "2TEMzx7W8XPNzvT9wrYFrBoU8WnJtyeR9unbriH5PKoi11FsX2pqPFxhDNdETMK6bDRV64odaFzH1h49NfRoKoUQ",
  "key10": "5s6smQkPRV3zmU7v16ppuGMWNugVVyUgjBs785Vz4iWSxkDJd7oG8XvH6BXoqAJuuhQpju4cW5W15HqD9g1tVjzD",
  "key11": "2C4kLWcMRPHzFf6gaHvJXzSs5GQDt8N3NoHwbLA9HeWaphFE2Gs6ggjtbk1S2tKak9bV7sUxPyUMX7Y4y2TpuhUR",
  "key12": "62wBmUuiuxEHyzio1Bsek1NzZAQf8K3CXLgVaqT1xc1sGphJhFnbcm77Yme46i3QSWmcY2Mh8moz6dVAjeazJtij",
  "key13": "311tktNXL8FQedu7qTcwSYYmjHegm22NmG5vPFMAJBjijB7qnimRycFon5D2D8QtibJ3SwTwTwf9U7TBdGBJDQH2",
  "key14": "2vNjHa1Q9euJiiD1A8GovRUGS1Ktj4Fy9163if2Pt2ag4p2ET5bRtPDJoTJZJDfdvio1nUTAQ1D95xJfY9mYS2Sf",
  "key15": "55q5eY5UWe3jGBMcwAxYrkvuZxSH3kPhXcjmFjnHgiohHHh1Fy738yzjcchBJkb1jQEJihaFQpr6kdErU5qmAAZZ",
  "key16": "4Ci2cAkbCVFfqJWuRxeqHJLwadua3Ejzg9phnSApZGBWEQ8Eq1cvt5ia6EQ7gaqKfppjwUoScQPFStRNBMVNCaGd",
  "key17": "mNKc2rXBG2vcMv7frdBvTGXnLetokgCXdDfANjdvUG6hcyfQBp6pMPfjd42swKKvyenk7y7KC26859FZ3th3o6p",
  "key18": "2g7qyMUTCDsXSYuZeKtyNdWhM3MDcQbCyj47ayRs4gfS4HVHTeh96QTWNrnbAPPtZ9cVsJDkUn9xHsGGw4mqAEbm",
  "key19": "5z6tf5feVKytobS4iPuMxHAPLD6N5oSVTzXovNY6YNK6JvEi5TJNitzrNerZBGuvK1RhfG4HgfrXiFb1AXteS8Kf",
  "key20": "5HD46PjmpHBTL2seF8JTdz2KzAFFfuH4LSuGshzRFBJt7U1VqVtfRKMh34xBbxoqciPFyXRm6wi7VeyVaqJxFKEA",
  "key21": "4nQsmKuacM3Zo7Svd43aFarvBYGqjvWvBTCuE7Hk8R9e3VUkndSjnWsLHbtmNibWLaUA8cLu6k6XdyenNPCZSxgr",
  "key22": "2UFYtikYw2zLdzSf34xnMKYMwyWqXopkfwEcW5xWWU1XJBupNXMbgCHW6MhhwrHHF5RCfif6Gw4gCq4xffCyNzb5",
  "key23": "4c86sAsFRbU4FA7ewBdBnnZ1w9NAmPNWqB9BAVfg6zZ1LPZArsP1PTkomFf91auAStuoax92vkNx126wPPjvreTE",
  "key24": "3hCy5VR76Qk6fRMfn7cLnm59nJNzhCuCyPhVhrunvW8Ew3fkCFy1LGTCdjb1QoTP9A293UyknTrFtmkSog299VUS",
  "key25": "52U9ZRZwMQXmTo8X8Ci8b6FuEnrA6BYYKrCoa1S3fzFf3mKESaaqN5WAUtC14HiSj6NwJUXMrLTFVJD9D6PATyKc",
  "key26": "4C1R6cNi5Z9qxM38U8cjHp3wAMVaHwN3vu8b4cmy9hJ2MF3k9re8aqKy9RrRD4pftg3Sth6b1VmPzoWZL7sLrXtK",
  "key27": "2xn8sbjcJgRW7Z5ftPLBemzYnCxzmV9xFvy77Cp55bo7EV2AKFke8drBkHGqhnpjctMjP6D4VwcRgL4c4HQ543z9",
  "key28": "5YQp681ZHD1GoevFbx9XjbmkWjTGcY5rnRmGpoFHdd2Nod4oLYEh32YxdAMAqFW1sbUazVhdd6Lf5BLraJP42Fgy",
  "key29": "3XxmxW5mFxqQ9wuXdoZkfETgP9xbnKKhPXoMV9n9okSHgsCwVgUMRbeKwtupitmptuHbDERr2cP1oyvnLMumjABJ",
  "key30": "5E642RGdbphwiPMYtVeJciwcpMnBKz7GkiZ9dzFB1kPZLPQDNKTzmbMSPPn7dgbe4bTa8d6eGk2azCN89w3QtVeK"
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
