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
    "oWykjU2ZEmpx9hwCgmXcfQSFT1JW2vNM9rMDnLdEzQx7AQdBv4w1b2q8eecbnDciMwtpBvwJBEBJePcj5sgPFf1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QgRS1yFZLRVGipnrY7o6GKy6R5MmgUDTvEzZD7tzaZaDWs9ARXHQtaEzCKgrz37AyXQ6d9JoZV1UDDnEAmSxcue",
  "key1": "31v42EVPCggG2TAGEnamVqVQQ28h63zs8ZT3Witw41ekXeZrmabKGrEmZy4V94gjpCSqWhn5BahVT9VuSz53bHRW",
  "key2": "3Zjc62ja3Rmm2R4oG9x9n4cojLoyqV1SVWki5eDFuSjgLkpLwU2SAsjN4usEAec771KMGhVm2euMLKt9p7adpoKK",
  "key3": "4u3epJyT7gWqn35ZnRYQXMJho6nUBtsQZ9eEP2gVkKEXG7tG3ZihHfWGX3MKGRFaYYszHutXKsPedJHmrxLSMHJU",
  "key4": "5xK6yFJzFzKbbE9HNTL1yfxzWH1i5oHnx9Ph7L3srKxaiMj4f4v2iFyzKMMdCSxPZYKbMpxVAf7S9d93h569Xudg",
  "key5": "XmLTka9ivc5aAxUsjtbhp7KXgAvc3L6GTGsmEuDiKH3HwkuqfR8frmkX1SxEwXcSusAu5Xp29pvciMyBixFJTiH",
  "key6": "2qJDrRjcGNeM4BaZzPHkt2EdcPCTioy1zGpjCSpcQ45gqJdyaXrBz4dbJxBj5XJEPZfuBFbEgrcBrt18kb4TuCpV",
  "key7": "32EysGoaB15AKCzYEyek72QHdHb4MSmyUBRYXNbW1PRhFaei1MyaT5GgfRTZvLs9NUXxtk5rhPejqRSeYCE8bUpC",
  "key8": "3R6srTtFVYA7gWJhthhJkaGsG9jMdZo3ZWxJtr6tPi51meV4BapXiKDFtde1AzJA2xHQani61LBdm5muHgz3FNY4",
  "key9": "4uW4cgb8VUfux2W6nyQEVsRapJNnFuerDsQXRJap52o4UrgDsmM7mn1mnB915q6yPD9wuLvKeVDuLChpPY1BxuVn",
  "key10": "4pDfC1AMC55voBu64StsXrqvhpFnz3hCHJcAEardJxCg71nzWmaizHzUEBNWsqbZvoTikkA2cJyxGVemSJ7m7TeA",
  "key11": "4Vk5mmy6D7rFoVfNMk3hNcf1dGC5aiChswM3doFJhQdZhxQf5ZibfzmGqgVbm7fDDqfox3kFehirLbbDsA4qTohf",
  "key12": "3Z6NjYTTj4oHUQdZbmuM4eqSHQypTk5i6TJAFV35RiCfv3ZppMrsum86J3JUmYz5pp1yHtQYmyuKoVZoue7VhbjQ",
  "key13": "Aowx5GguU398bs9yuWG79k1LvaPBrZeVXakCTpCobAh6MmsT6niqVku3bbqSaPcb8GUUNNZgCPUvs3MHWBpXw5a",
  "key14": "4es8wH3u6QRQ4TZUhNj7mZCudSMQn5jBR8s27m7wbLbPYsvcYsBrm4epfRn5kEZaKTMyg8fAAwDULErptWFYCXz7",
  "key15": "58DBe4Wc3r9Ardz4d4V2j7UTbhcCCCZANepdyrSAVWMJM1hsimhBcpTbYiG4M6818q4xW6d48gqVPmDzrchPA2mB",
  "key16": "39PXC9egs5hMuq1maXitVgkTKsYnUz6xXYYBMCHePhXdEcXWmkHGbXsc7wmo7d8Cjp2ZmtCGLcfnA9QHbbmrqmVq",
  "key17": "3TvgjSetLyVmtrzJeT4hoCaV7M3EGNjXYYZZtWGRoLYpnaipknN57ZzgJa8U8UDNPNxRG7qPn7TXWvPvV5fFoQUg",
  "key18": "aprC6GMH9fDoRdZsh91mPaQzbUgnViSRxhUbxp4ZdSJTjy1skgW3Jbm1iozuMJXsjHSRJkG8WmsrMgdQeZosWgi",
  "key19": "3piWwXCBxrU3KCFZKhCD1yKVU2iVkwR6SyazLBWdTxHYuE9KcvHXqqqAhXotVNNrDiT8Z8ca3UxF6zvotz39ukD7",
  "key20": "StiZ9bQwbHuCQYbr8tDJ1HHc4guks8p9pAsuqfLMaKEwWBsqW1TfJuSgkrYBfYUKGxMB1Vc7LN6nXnqnqWY3tvL",
  "key21": "4n6og5Uxniq96oyG83i94cgavVJB9kQCw5iUxSe9xoFSEfy214QsEPSRLxCAd4oouRxSwgytT8aNRr4kt6kcXaEU",
  "key22": "2bhxKxoafYEddcoxy9Aq8oJpaGna6rF42spsZCMBjqWL6bTa6HEFKx6SYpM7TWHFx8YC3VLAgtuhanzsm1pSjrge",
  "key23": "66oWCBGXVYNSLgxitqBN1LtcnjWQQAt7xiXD8DmVUn5dBZyMd2VMyFzT2m3wNvr6eEjLnPTtLCYLZ9qzujKxSsUz",
  "key24": "2h1DWJNdzy2Bqy56QWRtS5fcjNyq4Euh1EaLX952PoTdaTeqHk6VsHekpfEXEtEhKNd1cnddMgD3rJZTE6NiVVVv",
  "key25": "5K6sUbfMBNxWxEEmW8HgL8xeZMnjX9YiwHCyCAjMqAJKGidkt1jmzBVDbVPvbEDu6Ub5RvBwwS39dT6R6LGAEpMK",
  "key26": "N9L2FomBykpKhQgx2JFMq5NtdivcmRrD6dtQpG7mdCQJmbjUoepKajkrzP8W5EKjCpAFySxf2rX5hyvRBPJit3d",
  "key27": "48MFenVEn5uDDiD6qENmAezDUSz75a2VmgnYgjDNmK46t3C2q1eb2tATDAidmfrECZA9fSJuMLrx1J5RRKoT5iVE",
  "key28": "4t8v9YcZjeqBuAfWuMTMXgcyj3nVEHBrnnsNTf2HfRrPoVU1NQp5HChmJxCWGhchk6XxSTpMx7H55nJBb4ZCnbA"
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
