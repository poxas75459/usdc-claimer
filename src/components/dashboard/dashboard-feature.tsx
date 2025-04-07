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
    "2pke29cn7dQ7pAnpTZEdAopqbCtuDtjRTMFjWdrDocCbEMA88zmq9eTUhj5y5Bz8HutXegMHVLB8MqcxTFw75uek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ejGkMzZoomMJxcnccecrTZwQqqV94Z7eRTMXXiEm1MBiwaPydhQ7vQWNig7eBTboVEj1QMLwfHRdTb2qk4wSibr",
  "key1": "3iM4CbgYwyr48QHEpsgodzmWfUTuQp9CoX4DX2W5YYKRLX1Mj8ivQMtKVuNVGsC1UPnn57GoB6yiddS6s66KjKcS",
  "key2": "5fM2KRcUzVDgVAaj33wHLHRQro84Nbnf2CaUJpgJV1w33x7vsd9AB1ebiKvR5zba8LRUQfVRsxaU3czpK8ki96Gd",
  "key3": "5ZH2YnN7QtkZ5NJuHNMYBmQUNLtDJfMU9PiSAjGfkzHano4eokVUXC5qygUCWQL8jET3mHrogYoWisVYBbPoG1my",
  "key4": "4tvHgpq5c8ztXndNSkQnPUYKrRMeYbmhWeHDyqk7jBg18BeD53EvJ9MJJmWCzV4N9PhbZKCwqYehFsvjY8TQq76U",
  "key5": "25CBHFQFhgKf3dHkZtQjp5bLHME7J11TS3SpU4YgsWmS7mQmvgKjc7tED4KWkcUivgLT5yeruTP5zqM58fcc6eVn",
  "key6": "2uGosvjQv56CDd6Hu6bzoTHccw4mtYTujNpTvseKtuxREKr5ki7buBsLUrvmX8kkChhL1TVTYtVcGvMRDNcyRTZC",
  "key7": "2n5CLuRXFQWqPKYud2Tzhzt4U6ksXZabFworEsX8eoxHrjTezuLJRuuM6mYJKQRFNk7S3Bpd49w3NFHkWvxriBKN",
  "key8": "uyVD9QQfbETPHifiSEwt3Y9HRCEXDY4571bavXdSnCpq1UT6gMHKuT4KRAfjSKu6p1KK7xYLnf37Ce2iofaV7MP",
  "key9": "2o63H2uQVx9sizZdqyeJ9aC2Fj1HJ346mXXDkQFz8RcQ2VcaTzFp7WScc8vmv147nTXhyb2Fb8eKD2N4bUffuE67",
  "key10": "4MGLbBxRwJJFqbhoBZyQsbm4NLXG1TbqWK6ytHcmYSjhMdMESNhux8hgiFv1sNGfdTXE5eaQ6BAGs7kdviw4DPLZ",
  "key11": "51TwRo62P6YFo7idvmD5cqNC4UjH2vPFMhPWPeaV3yEpN51cvu8qAQhWVZsGnWwP4VLYudGrHz25PTkARZtuSG7e",
  "key12": "5XugB3rmxgC6VaPcxMUKkwYeyxXeDJhnoNJEXjNKZXceMECp7A73hge52kcTWvP3PRh4o5fh2TAGzBgQySopvWRH",
  "key13": "2GgLfQFkQgXrpwp1oouRAVv18F9dqdRzT69RFV9rPcTcpLHgDaheGw1CmMSt4zngHqWx2Ya5vpYZdvn2pm2YHu85",
  "key14": "3Ljk7RuAB19sr99gn2SzkeuXNuvYsQstTsyxsNxyoCEN12CSbGGsKx1pgWYnNhVybQNdAGsB8v2seF6zYvCvMNWB",
  "key15": "4jtknVkRGMUsRzCAWjSoB8WoYua53jnn7F3G97TKkDMcXeC1wjncEugp9MU8V2zuLk32Z5gnrpdteCzQYBHbpwEw",
  "key16": "2hmpRWHLb6bLqCrRxoxTUmWZdZnzpudP63dgYSHx2uAFTV7mAv9wZUaDpi4iDWiDQXq2UKLtCB1Epo3yScm5kb47",
  "key17": "sfKsdUnWjmBgoroZ4x5VRi59NmtNW6QAURYGbyCd7DRTiunXsxmLW8115D1DPowqJ6nqWjtH6J7MizcpaX6p8zq",
  "key18": "eEjP4fA5MVNJ7rZGia5YdJ4e4MRxhHGyASbMx1yBhd7bcz6LvrjSHMkJdbJ15eA7ffjNhcGqJtCWcX3wytpphgW",
  "key19": "WUGF9rQc17QPJREG6pijvPVuQENE6esdf8Q9YbXjKYhePdTFK9xRT8pt1VEgHAWAPgUdqjAYB1wMqbFvgjCh3jo",
  "key20": "5km7JtA5HyLcoHudF6w8seQGEcF6tfdjhBKDtMXrHX5qdxTHzHTYF98VCtQURw3uJ8TMmLkQXWfMxBVQPqvD9iNT",
  "key21": "vjHdGP5Lahezi5Cyh1zA59DijLgvU6i44jHTs1nF6ZTaqjp79XLHFnDjfbMxJjYamyamoxQ1PtV8bcsY2me2tRv",
  "key22": "EmU27QSgq3faiP7m9WnTBetgjHc4A4Cm5nxFmwxNkZAkTBWSDLzdhsG2nJsDPsEjNMSwzeb2JKc1t7DET6MsWS6",
  "key23": "5z91BLkPFgmFHn8xMctSuvGeBrBatYyHJSAr3MzNid2gK7AmnqfhMRmfSKcrVSJvcMZEEjQHopdcXQBrDK2dvsYf",
  "key24": "3QeaWQiyK6nwy93mLbk7LdTxHKh8P5g4f3t2voqMiLjDR4LFebG8fes2oefHNKqShxDtdKYEcuNRLhi2oPnYCKqS",
  "key25": "5QpBFeaUeieQewvucLEaxHb33m5aLgZEg427LG6U5EevJfXcDcaMLJVUo4Y389QRmyvWAtQPRpVUQbB2UdWQPLPM",
  "key26": "3QPvUPomao4frbAfuMYwSPtNdwTRUDAaaDdaFrF5fQF2bCCoJ4s1rhDvL5Bffnv7aL52qN9vzjw3SuzicKom6h3m",
  "key27": "2BnzdnBho5xX11wvKG6dK5HmR1quMza8ZiJbdo7979QMCiokqWUdgdGpp2QbanTR9dqDghSSS5drWi8YYBJNGoCM",
  "key28": "55k1MEH1REmMpFkv7AiaVpph6BhTRdYByXSScvgWdQQJVcyKgrK24gUT31S82uHgr5ZL4CZahYuSWApT5fDpwRAm",
  "key29": "4MGbeTbw9Dys4t6QJp9aqyYoaH6aQBZHLdUUvGKqu7goeaGMZue2WMQvBmAfLm4Bzb1d8VudtyQutCHCLNYfc4Ew",
  "key30": "2wPihQds3FkY5kaqJTqQ7neiCwh18awYTFPUQPFLubjfZAKkxueGBh4Ni9wt4FG4wafAhLpMu7mzvLKX4FG3VgzH",
  "key31": "4MuvqdCN81iZdLeCtFRMSjhMfdRf25zL2fTSR4xKkUdLyoC7kC8EG5xEL9Zm8u6yGxaYYqoMqaTvzVYyUQizfv3F"
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
