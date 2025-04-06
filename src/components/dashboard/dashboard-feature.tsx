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
    "SNzqb93aYWviYeKK1ozxzzKrtFkymJxJZJk2AdhQMYbRqVXEVa3BAM2B3iLFw1guQfeMoVaCux1vUQsRde8Me53"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XTmmSh3rwefxGYKYzyNeNwdEXFE1YtmjEmMfAnDo9i5uFCmTzNgdSizDHc6QNSMk2spA92NaCuWgrYdWS7pkAH6",
  "key1": "zmNe74V3wJb5zbxaaZe2RVmyZzvsK5NX32akaVDerpoykPjEs2TqnF1qdMAj6TBd8f5c8qDiypSsDQqfP6pR8Bz",
  "key2": "4v2JumPoL2ishK4F7UHcgN337BNgfU1autiTtLQpimcqCNUWrBbVcsyGvE4yaHMDzpPSGWgEoksPynpCe9BeGuRp",
  "key3": "3JspNwq3aG8tRBppdX4xzwYHjpEzqPoSaeapkqgjykLKuNfW74MMUXH3CzSoic1SvkeiNxZMNmTV2gAUxuV413fC",
  "key4": "oYJhP8TfrDMDdk9U1Qoe4jMAN2shWSNMMjVoEooGJcLA82oT3HCu63ThkPyuGecR9LQkBTZsboutEb5iEtUFKfH",
  "key5": "ndxcXgSVNgwETULo3qFbjYaGvmu37KQLpp1fNXPB8AGHo6JKhzMqzJ7PaQRpRK8R6aLZJxAJbNSBXGiq4jcNPqX",
  "key6": "5uKPZREREHudbRDiAMMZNy8atXMxqfTg8V6a5eVsmVT5DRvjFJGa8E4L2iiEmAtAauiuLDY3YhW27tAK688LdMPr",
  "key7": "34Zfz33rPAdpJD9KLMQPNJvYGKzy1zqt3vUqHUnM6fABfYFQr85Z9qLoVasGeUsTZiJigRYiWnzV5q6uZUXwsFci",
  "key8": "QAz6UgAMUYUPswdo4KH6Bpws8RsiesXcbRHnUZzZnfHQLAZi6KisnMQJ57KgNvF6uYC8To9cHtDY5zEt7v9Niau",
  "key9": "4CjPxr9dKhu7sMD7Ud85QhWJW7NCo2ea5HzvQwyE55GbeofdX8GJte2dwrmu338RyckhPHyYnNGM84ZzYoztcSXK",
  "key10": "5HTPojiap6AB3FnjUdJfeydwfKKF94RZeGq87UyyZBzYmqCao2NT6nRCTcQvzu2MReNgFppt4MGGNrR5EKSk1HsF",
  "key11": "5htZwcdzjxNmGgyybGrGzCRktcqqV9B5CGRqJ8eLJJkMBcywNVKUqfuPAKSXq182eTvHPacqDS9PceuSdqsw2M5y",
  "key12": "63E51ZxdpdAF2A8u8fiU7U9qVgQbe1D6LYuVL9UfEMkMdhMNobCAoEUFyZGoGn5RGyBCyHKRWG1HhmhhCA9YiFdR",
  "key13": "u8Aa8HefRe2qEBqRK4EUqgasAkfMEsVM2ENQvtgFW49VQdPzdwwPQRRWc1QgStiAQrum29UHFK2ojqCVrxMiJiZ",
  "key14": "5UNXiWuvHeALMR7TN1Ag1skohfjSyPNmLJb4WcfPwWVKC1NL2wLABzTcTiWWpWJQVF6ppoNjLDcAwerqxPRscGeD",
  "key15": "3vqenHNeTdVDC6gmS3jTY7o4peJCJcCk5Dr8rrwH1fRy2c7F2M7PTiGyV9Z2udKfmMH8rbESELkUNbUtaD9YfGPU",
  "key16": "2cgjw1yDdvbYFL6LdsYahiuphgBJS6mbM4f3vBd6U4AdJVbaDKv5mGdrnrhdk1yr5nujwC2GUnjSCsvuELDAECKw",
  "key17": "5zsTojij3HipsPRS1UUZ64yFrjmE1JaEXpXRNnUxFGtjwBBSk4E8sG2VUdr1rpfc1HDAoi2Sw4orTXXyCJ88WDc8",
  "key18": "32xUp8Jv9LUZVigFkDPo4ZnscSZb76bYyznhMAieDdaNSG4e2ATsuU53HohFh1zkcHSKJ6PuRaoc7cxZenZnCcCZ",
  "key19": "26HLf5Jhvtaz8ejkU4i6snnPxGdPvQCSfZGttduRnmmLtgrtambHmXnZHtYCTC6szmWtwKYW7a68cnHqS5aTceZb",
  "key20": "5PijhfqEPESoa39j9bvFKacs5HDSuEYQhbNPyCSi2kdshAipBR4tY7ZESnGWZ731q4zJyr7cyfN92awVtGUmUPgq",
  "key21": "63o3u59SoYdzHbyt4Huk17pRG3cJVXJYvp465tpuNk3pgTQXNgbKow2yNFdmZ7oDXAoca9YYFs28hEssyNUJ9cY4",
  "key22": "xiRWn1jQA5uadtM1cfcbnKi8prLr3KtRasrTZSukpVzT6ARap5Adk8DU5b7fN3W5hg9sWA8YdQvyjRpC8ufykCT",
  "key23": "22XwwbGjXgz5oUqHKa4oDCZtkaHT8YNNfgfQ9yDfYjK4YsF7xq1Wcmh628cL6pry9YH7uw9Ke7fJNgCqsQKkPkg7",
  "key24": "4xk2RQZHpdwArnt6MgMduaL3t1RJiSHEvdo8nEb3QymoBi6niW3mTAsfqAiP9AvUsEfvYWtby9Po4T8Ys9RDpLdD",
  "key25": "2KPP8Q8Rd6nijCZSrM6FkzC5SdH38pFgaPzLGaS2WFG97jqzHRTvNw41nBQEiuwxFWYMHgeQCy8yU51tjarkuS67",
  "key26": "5M7J4Kf6MZYwKc8dDVQpTYvhNZnTqcg3X8UZa3qxbbMEy2UZ6zBtsTRw9CSbwHZqXkTed6JNas8Ar561vLXPQaY",
  "key27": "5ecsismvEk7DbWoMKDofZKyaETRnKweHTBVEZTjoSQdsFBdxpvW84SXWMd6ySixSMGDAgmgkASe2iPAHEYGTPsqX",
  "key28": "3S1bzKHLjF18ZqC7sac19ku8oDMFrjhz8FpJj32QCnZNQp5uweDZfLhLnt4gfMLP7nEE21jSs6L2QUFxXVhwrs3F",
  "key29": "1fCftG55cg9PK4jhf5pZCTAkpR1Mr4Aa4cJscPNtum8TewTEPPyMMXZWxzL4LhXe8ZNbDvmkEhkX6GC5hqWvjmS",
  "key30": "5zhvERU6mCfxsv38DwGqUrxXDpmzhm3BBohMx3BKCktth2qzu1rFg5dewgjBD4dofoqJFRGrr8JfWYFubEhu2axn",
  "key31": "2rrme1ypUcU7srLRrzu2duzzNs3zXc3wd9fW8do215kRnByRw6zghKn1UaowibVBydYaYFtnnc722GunbqoWjWXh",
  "key32": "3SCZLAhF2jXwqdRqLaPUpmMF9SRk4T3u5k3GajdVrkbBAmprqB7si8JJXbQKow2bvE81718uMvzaW9Rxbsi6TcfH",
  "key33": "2ve2eWkYZ9H88VR5YUcucy8Fcw8NM1VaiJ7CDd4Y4f71vRqykzC9xCRbgcsjboq3vtEynLNUzNwaEwMmdRFVqVAd",
  "key34": "4HwTRa2XjbDXbJoyx58h52EWfRDTSEXd8rPaxYnV9ZQrunYoS9pujFjuyvNKUknuSkEBFT87J4CUfgSaAeQ5BzoA"
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
