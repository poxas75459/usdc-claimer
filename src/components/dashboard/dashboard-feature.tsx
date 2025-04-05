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
    "3X8yQyiuW9EVoKpkmAXJPCPNqtJsfZuiE3gNtiJsbjVQEUbTKYQ84vhqpgC4rBac2uKjLuTcejiEaYLtC5u3rZFL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b3unw1tEdNizbAaZZWGgnN1NUzBncnYkCbBraPK21b13No7eam9izh3kMT7nccHzxYNsZ6trtum2uHjVgAePvP9",
  "key1": "ws44jm5AzqoFozkRGx5nWQoq7En3V8S1vmfcnRatYECGwSQetmMih7MC6CYAiSSKbDHFCqchfvyAexi25koc6v8",
  "key2": "55fAEGcA5VpmAsE86MPVQvdAxnwbJ4skDfrg2s7paSn1fcbiKqpsbCiTGhyyY4FnbXRYdHeZKtAyMKbfcQGreqJe",
  "key3": "3yrwQr3TCAgY9moaYW46s9uhE6NhDDtNybCyywDzUzcukbdb1FMAC9yjeZZYjurAFT7agpPMSmvkVJ9WZLR9Rsqw",
  "key4": "5H1WnNmoFynGepssVLyFGTNLaBYqcL85SQZFQ6txhCiVmwUeavgw7f3tmfh5JZVNGvoRGriNMiwyZbmZFG6ArD11",
  "key5": "2ZHfAveMLU9XkWuyoqDcj6gnbVQqvXtfMsvLSMkPx6Vmx8efWBCJSYREPQ7NfCZhQSmhwzfhoZXytVg1VXZXjMKD",
  "key6": "WyxExvrPK9Rp4rVG4K819h4nC7kNhznjvfG58EbudpYNQbTLjHv1UEFZHvup95AB4gGwpHgmfnd3PgrKEALCZXe",
  "key7": "3yFRarmk2mxMzhChjsufq6QEXg6VqeBbn4PmJxf8792dSmtxrNCVFKCJ6oxS7dfKWqivtgL1mx3HAZL9YTYPBwVf",
  "key8": "2Zm5y4TxW5hbXxKvzqGsHRpRJz5FB3Ha1UpduPVi3xhgUcudY19mS55Hoaj9HxudkyHc3UfJbP7RQKDF1NaaiDum",
  "key9": "aawo3DKyz7KCTMz69ST4dAcTFqHt1Q275XXFBNdEeTzjt5HHd1wLH8cMiYBJF5HSg3Vz4WGQ99pzxio6dgjGEy4",
  "key10": "9rUVKRZ72NNSn3yWS4wFfZrP3ptHXNtLRHvZ4s3grrweb3ALwXdSp72LEUi5knMidVTQ7Rt1m81v7ejBqMUfwP5",
  "key11": "2DekdH9twLE4yLzL9kDfGnBojSmS7TTZf5B8aS4uDsHieSJCoMhiE3RCtPgbN2CoGJvo28evQN4Wjb1xSHbFd12o",
  "key12": "51Ha6cxQT2AQL7kdN2QWN1HK4FMNp1hLKP5mURiDoRhkjPM4axRjaa21upHauyhFZGvm5zgmNCjurXBbskmfuxW9",
  "key13": "mds94k7D5uoXQB27UYvrXvSUbCjwriwRNkAwDTvH8nADgcU88LWahPZr4THwkCY8jHpGHyz5RHqZKWmDTCppSHU",
  "key14": "4U23xaTGa636N8GWPRzkacGq3oUDsYsSBACypStvdnXH2k7i3T9J4rr5eDuG4Qg8GnuE8sgSPKLrjPm86YFLgNmP",
  "key15": "3gyyVuuEpjpqyAP8qab5EfHN9kgnjZqKrNesm6esUc27aAuknvJfzz7mAEaAmr9q7aDAjHH9J1ebEe9q8EuMCpCh",
  "key16": "49SH6k1kv3w3RrDfVKngT6SGJzC5sudP61rTWAyjbFn7228rWk632W7m47vhQV9wJLEHCLfg2PdKhGL6ZFR27a8j",
  "key17": "4ZvBHAEqqatvKoNKe1zxB7TuFPAUMpqqJPzdxaqKkUXy1ciRu28NQwUTUnkvqQAGabvTisfReKVxcftyZhiWZem8",
  "key18": "2yyz8egfEzYKPuTEPtfUengsHY5cCpNKmo3ECbQM3SQmnoSenfitgTzwUhvdTzHcB3eJcfgXdXbrkJtSpWPeEhx5",
  "key19": "4qrBJBuwYQFAQubMC4hPKkg561hBB21ya7gyrgvE8Fh3v5CU5ttfgWVWYF338qbaNoLoReUxfr3ZYBMM11Fo8AQD",
  "key20": "67ReXasw6eLMdL3G1naWaTMe1AU6n9MpaBoQQ99aZVHzNLRYV3o7BLdbji7ZDr2FrjdMrqDTbrxrntt67xmU4h5x",
  "key21": "343xz735NABntZgQUenXPPqiAEvq7qbAQSdStiiiwRgbAjecMC2ph3QvXbsUHt6DmFJ5L9L3mt7SrcHxixefYejF",
  "key22": "3Ccc3f1q47U9rdpRD5fF358yESEokUP73CT9S4KHrykjC7ZmMPBcxELVqbWDvUFJ7kRQWzpavQw84FC25QiHcQRf",
  "key23": "2eqcPbCf7HFXyP2YiehBMcrvckWupVZfC52aZ5txpNoDpqjVdY1zQbx8vzXQJzrkuZ8BsVaAdWp2Ak5dDTaWSYej",
  "key24": "3vGChRoBx3A7Ns6dRAUZWPEBr2STCWCqQDe9gfTSAjN5xmuy7XnL11oa1SpXaTA3755mK3YRrHB2TEeCT132RNqR",
  "key25": "5tR8H6V4QGxsiFoZQNvSz6A4tfYVGMN38AhfYV8u344BwETgxfUfjNUWhSChchJ8dgkTuqjdAJ249N6w992PAtN3",
  "key26": "5tK68AAAdbWbZjsxp9eUUD2T3KaYozFtPF7D4mXZaQtzEsHivYSyp377q86U9PL3iP2Kp8SJZdjFMJVLhhcdvpvL",
  "key27": "3A5NNapUQRmM431ryJcySNcMPtD2NvECoF7vuaPhVWh6F4TXU5xwq3JRBVzQDiHpgvGsmCeCdSJ7YURR2oSu9KhC",
  "key28": "4WnMsPKLJaGJGsUt5RnerJKwq365ACmM7ff3vhdGJuVpYkHmPJzspZowbbe5F3kYYZfJpai7DebXsVqDCF4odYiW",
  "key29": "5NWGRskkz2Cninz8sy86rP9T3tQeP6Q3j8JmEJFDysbB9RKXoqLgPBqiKGSfArScAU9Zn8oSzg17hLhLcTSj7Jvj",
  "key30": "2BeDApDH5uDnSCEE1x4zGmxs8SfFJhHb3XUKm1SgV8mPuRE1juRVFkQub3SQw9LHxQWTRoZtH2Gku5GyuHbDqyTY"
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
