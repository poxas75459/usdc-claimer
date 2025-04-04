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
    "RHwjntXjsxnpdShwUeG6Q9F6YtFrBFpYSyPeYnHJbRGEfrK61MR2XogN89gBocjAAnHmVAC7fNshUdWjNzwZukL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kG3i3aL4V2NE38iHVDUEi8UUG5A2JkpV9Q3iooedkyEJvnMhQyvafKHWJqZP2dCL6puhnwaD2CqdCKZ5h5PzzuJ",
  "key1": "4NeJSKtdFjmD5ivDLQ9Xf1WqZhGdNrK8kB4cuEg886hM771eR16peSiogFMMAsiFvvkJUemPYhfXTZfhfw9UoRT7",
  "key2": "29LSehj4gKfYVX9QyqErNzAaY95kSyvynPfWARVxztbHH9f5eYcuw5p8ZE1Xxk8H97abaipHzp1GgwDPS771Nk4J",
  "key3": "T2sp2xmuCVBxv3ALBVXqHzEytCNoYxs5FdQE21sQos2Qbf9frYLR7XDNv6ZJVSJb2uuZqFyZNRng1PUub7QBZcH",
  "key4": "2xGa2u3EynL5TNYjqeR4EVAP3DCdWij19Y9aTysc8iSHHEZmq8aEivGAfx6KRsNUNKkAAthvLazmDUJHsVj6G2vn",
  "key5": "21i4eY6jWbXkrY78DfFbR8jL39JYczXe5SNvuEhp7GxVg6dkCWDjrWKuCFvRuookHKWKFbPxFovS83EpmKpYeesR",
  "key6": "CixqWdGKx4NDpXFDoQvnygLcAzyuxMrAF99boqiuMXqGb3FVjjXES2KWpkZr8Sykk3fR2vr6h627yDXFBE3ue1V",
  "key7": "62PHNcYW4jcJeJ7SELRFqbBsZUA9iVGr5ELuwCB9ct6f4uxSdnAszk7Hjqt5cCDmTu7KHWrVUpxDsQhJtPvh3V4j",
  "key8": "DNWfx6cMabYSA849w8XCiwYSsMrv9nm2VFUut2DoxpoXD7HP5xZezzTn6qs3yNocvd6p1GhW3tNFKtFpr2UmUCL",
  "key9": "5QQzBgzoHqdXDhruzRdqKWr9cJsomGpCrcFi62RtixWiZicnjYCkXKTTnncmmmNSQQhgQ9zQfY7rB1VrhfwYJcr6",
  "key10": "4UfXJvcRHev7yQdd6CMmBKfMSkmoxTEiPGFgDvHq7bxprrdnos3ga3sJZmz5bHPUYPRB4yCV4iiq1bKee7tHNFYk",
  "key11": "4u517KB3pwAC4kLrT5F5cLbuUyranqxsd32XjtpemUCvg9MPfxwzcxA4disDT3tPSw5a14yqxdpPirbGbBatJJ4i",
  "key12": "2mTFSy3WmYeyenJxx5XXvdCu3QWJeysaPYw5WFB3hchQVpCMF6UL8YxenMSgCSzCd95paDK9NneuRUGZZqpYwUab",
  "key13": "679Szd7uk8K1URZdoDKZGrN1sikgRMQrhw4As9tyTMBZK1gX9MCx1NYMYSq9iMuKb13zKTASXo5ZSmzZippAf4wG",
  "key14": "4j8dQLs6wKvuUjenw3xMyBSjHUrwCd5U8LeUyAKYXmJYXjVhWeMvNNQ1oAitxTT51i4cieRqwfgB1JCfCmtFE1N7",
  "key15": "4e63VUYzZHWdsJTriycVAsQKrwLKXzm8RV7G9hkbwGAtX9p7cU8c2Z1MCS3cRB4Jm4DEmtF9J7PChWcoHPyehbXH",
  "key16": "2aUyEVAhUpAHgMxQSYHy12K3xMLCkk8bfqnXZTLzQonVFt1F7Rfv6tiKYSqndph9AxX6RZE41CoJL7pfpW5Z8Xy3",
  "key17": "21RYLGHnwr4BV5HtX4gTZPycaezvfP1PaTVa7x86C9LQZyxXaZi8jDAh3mHwuk8dbauZSoAYGx7TGVGLq7nQfoRf",
  "key18": "V2KGepU9bjyvRNkUVadp4nnN8FQeFDtWfkh2PdmWoT8WhUYgPgz3BAercGVebVZo3WeUa4DxRsz1T7BGWwcJ5HT",
  "key19": "3VARanNvroffVYNcU88ALHcm1U7W5TkqNCV9U3d3BusfUdfwi6WwtAMNynjV6PrdM4AWnSSLXqvHJSBrra1xasiJ",
  "key20": "4abNRyFgPttu3ezNNj4Xf66YNcpB9QZEPAQJGkw6N2YbNznpejPKqP2vchjEvVrNHKmPRYuaFNFFwPdYFwZuwree",
  "key21": "3WWYu6NQDj67tBg2Y6LfiqyJVxRJZSJGWozeo5uWk9iEUyeAm6ekySQcChB2RLEGZdVuTSWGyW2TwcV1j6UCAXjG",
  "key22": "3qa9U2YmbED4AyFcFMVnbvv87vrDbDaEfDAG6MB4C2WiKgeuihiCvsSsEizAjV5qwtLPCFmACp1D7L7Tj3HGbz8R",
  "key23": "3W3TsZBsE3JW5C6ox7ZReYz1qZPWkMwtfCyGWFLTfECfeZUaRbpBmXNzzxMjTpv1dybgvNydCfi2N7xwKJ1v4Qfh",
  "key24": "hT9VMiLyJQdxyCDWtyZvDmcJLQS6oBf82RcUqP9VDYUfP6tRBPexZZFzJbNKM3NkLybStd3hR5i2o2o4h3JMD6y",
  "key25": "2owaX8v6QMB3ojQiEDDnnb6KdTnB4r7eDcdD1NyNi6Qs39dxHK7wb6gCR2eDsQ7QmvzdzQ6HesCU55go7o9iJVJk",
  "key26": "2sVCbHuMPoJqz5DiF4zLUpq1E2VTfFQQL4aSKbNKz8BWz7aGgWCncqZRv99KgZBimWxnktCAChekWzyxNr1gDqKa",
  "key27": "4s5eoAzihZxh4MZPT9J1Lp3EKxbvtiktwViVxzXBDra6b7aFKi1aqNK32AMZRip8yHcEVVPTrei81oaRAkpPWRBp",
  "key28": "41TjMRyJc5WBWu5vkUGXVy4TcaLFbnCW9NbEViDMZh2MNZk9mvZ55LMrPoaFNvhKdNjYANeUkqAsG1JYR1ZX2ne4",
  "key29": "4Ah5L4zuUC2gJU342DBJ3UJybVRmyaxTTB9FWH1NfH9WfNcs1RowEQE8bE8YYgpEFsBS7phtyDbegWu5iNfR9Bs5",
  "key30": "5fEq5FooWHN97azj2bsFq4qGbh7E422wHjjimHCSNFWKpq48rQRyUHfkB2n4KFnAC1ztXRjNbfUa6yfE94WXVfLW",
  "key31": "5joHh4nh76bfYViVsn8fuuzGy7FJaeE85XruCUpJUN593Xawdkg3uyhZYLcwqYSEZiyoA4FPhZQwUx7uExnfsmuZ",
  "key32": "5VtrGnQvEYa6stn3jKjpsSvVzzG5izzP96LcJRhtHYYmDyyeeVZkBybMxNnCvoqZSatT41URD6xEnsVcwQJPhnnF",
  "key33": "4PZWHVcsiv6eHxjNk44XaMKUsLyY3svSSkVHqizuXeSNxxLenopVf6CcmmY1FYGHKU6zrns1MNCvUxzd1YDvvouW",
  "key34": "33nrHbXx17Be3q4FmtUeCoyqZJuwBpyjrL6mB8pn3MHGc4vMZdSnpc6s7HGDsw6vJBA8ixPry2Po5WSz3XvVM3jw",
  "key35": "3i8rAFQQW8fuY8hLsBhMpKjG6JGDCLaosR2REouTvLsoBJis4Jvw9NgFPs3jwRvxaA58seHn8cabRqci9DRPHLfD",
  "key36": "37Dm6khDrpdPHXzhZR8Urm2R5vu3Gv5qYLWiAYmjBvvmYFzsqbzuBYmn5xBx5CuA7iij5TbrqgfKcoRckvSpVpbB",
  "key37": "gxX8Zm7BfCZAW4eR5CnpAfZTzijiH9cUGMduaxyg9hdyrXvy3Qo7RDoh8tvWxnQDMZPYj9AeLNXj7SG9nnroc3U"
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
