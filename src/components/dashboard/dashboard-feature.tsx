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
    "36ZbGmJEQcwLJKfD4dbX3Q2SKnot4Dh2389wn43k7B3xzgVV2s6oyuqkKaWG4FByoVLxiLgZc1RYBuZCueBPWcHz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MgKjDMjRew3NGZrufHT6Wc1TYFwhqBcypgfBWCSqKGMoCahyxfXnMH8k9DJZdBohkx9XbmnHTkKk8YUhz26LQyN",
  "key1": "5mUGDcT1V9zaU6gcs2reiLGBsJp7w7MruTnxDaLSQ4Jr2hWSfSvyqva7Wxn2yAr6vmhviVJrwx2yvewDGDWgB1en",
  "key2": "3Go1LEQqDRpLwzNujttBuosEV2xSgDuaxoexwHTrk4EBH5D6FPovoavarixVQswCV12wbPnRFfb4AQHAXZwQfrpa",
  "key3": "3H211XY2AB5eoZrHwVi2Snu59WTMEQQKGXCmM4dujsuNwMQsDKGNneJcRyKweUqipJJMffM1owGapE3ALAXKv8Ep",
  "key4": "3D8PBDsCmfcoZKnrVRY124hrNGnTrHq5wwvWW1KFkbv6vwxH1ZTxdo5LZiVtZAMkNihMs5G6RTMr7kpm3w8Baz3g",
  "key5": "52hsM6JtgKtNvHT7qgFRZ58ZMc5AGwedUmCG5ryQSzEd6F7jyB24JoBcsnAEbjUs9VSf91wfaaPdkjGMTh2bGCkC",
  "key6": "45cTTbcTsKp18B8Wd34ns1kArv4aSAMUfYQNjQfZekRwpdWRdaL4f6EhLgvqoUqHS1XPvGvAxNUXVahBXxfT5TEk",
  "key7": "5RbTFBf5sHR1ZZrXR6RRieym7tVGYE4AU3tv65wBZerotHXxFuhRFphBtw5Q6XREdVDkViR2jWsma9xMiLsitmHr",
  "key8": "Fi8DuhkXgSJTSrLBZF7oMWja6FDWsrnbWPTDKbC9FXQzZXXbp8j58ZpHmaE7iyZhrQ4o3CXxNS5AA9UEdC5aPWA",
  "key9": "4a4diR8KptyH4mauqDrbU3NSk6YdAS6tn8AEHPwxPwXg6gswEbXEm1hHqbbMjy4w3d1jfmngrfs4hz6J1kR43Ves",
  "key10": "59apuyQQLXL4Ez6iSsHf9MvgkfNVnMeA25MsYcVvNBJsRZtZXzYyabpnsER45ogSJqFjX3huSygNkKBhVY4BYbV7",
  "key11": "3czHrT5yUrb3n5yVyph3sPwB93fbGuF4qekmYbtsXZm2KRfyD6wNsj462BpCgwZoyCLhvvVMuxGa3fY5TF6UDfVP",
  "key12": "4ZjkBptTkFRK8kXQyDPTybDHWfurgLrQXR47rwqtiYZnHqfptxJSMn3zDNAry3bU4DbNSvDey1T6nzUvVJ8rXPyu",
  "key13": "2PTEoMtuKH45dirY8QVWt1Mu5duAaDRU9ji2DztDnGx1DDaVaoHDVRd7c5Z1heGrA8TdKD1AHj1jbLnP1jm4WoaQ",
  "key14": "5nEyZqMUnxv4iunWvviXhoF7bGjT2YdxtU4z2Va6hDLFYVJvMQJw1qniUbhKFYkKfFinzSdaCDfhrPyDvpex2qbE",
  "key15": "NFcATxVy4J5TTTpHDZLz7Pi7YTyXKbxUaWNeDKzL5xRbNaL5mWwdXhUT8GrpUZXy7NbvLCZWUtdYYVVgiWFi15U",
  "key16": "3LXgshoC1HebxAfMc8sgagQL8m7zDRCNvUNc1rYKKTLGJV8xCTY4tF4tib7NxSci5YCCxBZXqXzEPK6LwaBTfg7N",
  "key17": "4EfqQczjZNGgZQo2WfUjJkGzWgVzXZMe1ejCBC3Qv6dFnAyxioFJfMgNtxDwmkEjAgXAZD6roVcpEejrpKRvTFDs",
  "key18": "4QLGgxppvDRKqYaEa8a7srzAwFbMu9RZrTnyJWMBJpY9MPQs8LRgC7tggvY9GoaoU1eBRKKscBopDnL1Ac8Q5cZv",
  "key19": "5s3sda2f5Vhym4fBK4oRYKASsHoJC9wQC9q3B1Vs3UGU37um7Z5nLZkQeXzipptr4YebFEPRo1dxoWMV7iGJpDjp",
  "key20": "5cVjZUiEw6UtMuWNvyGfsDKACoEu2FiwVyzzKfsATk6XEyR89B2LUXWq7AUJkuJWeCBDffp5gM37kHfB57ZFHRNo",
  "key21": "44xPY2LaD5G2yYghPbrSZEDXaqLGYcuZFfN1RFFF2Jw2xSeGJtk9tnFvibhD9KU3H3yBPj99zhuEo1k9ic42AN5U",
  "key22": "62TfQDtFjHwBQk927NAbpPTzbh5RhvWZTxvDxfTyGeLqNs92CT4QL2HiwmoYRztxp3VHYyooHoL3cWLCZZM8zA8q",
  "key23": "WFyqCmUHLkr1tyhvSTH52aJZ6UBXoQ1qBpxobBgY1JNBfABSYGTp399srwDa4DEzuR13i1kjBSNRTwuLvE1s4kV",
  "key24": "5RhfT5XeBRnMcuZsD8smAsAP4aPheYwKMSsG7LBo7cMJZi1NpPrfLkeiuLTRwPj1Ka96519D79ByFRkGyzHzd3by",
  "key25": "4UaL9TDGZqkx3uF83oZsyhDja7Me4pKfhvdBmFz24ZqrQqYK1nvFEPnizwkMktjYMrmXNYyyTkeZnBqFjCgZVqFA",
  "key26": "4q4hiUUmsvVsFffZcMS12iQD14K2jECGGG3fHgt3Vb82HKh2JHSijchvykoSdLFkEbqS1M3Mqjsg4yb1mgcNfYv",
  "key27": "2vaMWtQj7CUgm9xZY7GQzniegvdCXqZVAdt8TqPqnXahGRNAui1FxXEjCU8PUWDHtBMHsTxk31mQ2UCgmQbNZLew",
  "key28": "2qARDUCz6bp5cDACWm7cbd2uwdkpgRzpyUXrDZJB1bCxpweGU9QwYPGj4iLcqcqopmurmWdzF45ngjTfCrSY5cUa",
  "key29": "rRpfCQ66b51djPsswrSDryNTH2EZNNwyRLgHfw9XseTfx17uXu32poV5XXgQAvATEcegzZUQLau4vo3LMvuUXV1",
  "key30": "3if88b764rhwMXV1fdDYVR5xcQpHhziF1MMxEEiT23StoSW8BuJy82unnM9ckbLV2nPAoqtCxyboaVTzjk1ToJEE",
  "key31": "4k7K5Rvzed8CcwUFgh9cn92mNidakYD6UuHG7hkL3vEda4FXVJzQsuoVbTniRSUWBiQJr71nH5jya6xVhgBa8f2p"
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
