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
    "6NBbQ8hbb4BmrioTbxwftsAvHMo8RGLetkwn5HTd42hCcWMbhPHm8tTz85po67LUupyGQkjghM3fjG7Yjo1YTAo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t6skEJN3Cz9v78dcEZCTWB9XJEVrxMVAzmUp8ULYNpJpbqjKfLshNf6BcdPPqAVvZVB5t3jCKuHr2SxK9ymuokE",
  "key1": "2YvGDaXw17qNcaPMFuccWB1JagW1CZ4ZXxcobchroC41xxrFYsMft7JphL75d2RXus4JD29SjL57UCkztnyqEyTp",
  "key2": "2bQNoKMthHc14ptXpoF7L2tsBeZmPT3pdXxvHwwTCRdqbzUyjoMUYrPHHMfcL231Uqx8Ctk95q659xifjziDg9LW",
  "key3": "H7ApngkSQv3Z32Kq2dXbFLnLvhDfkiQy55AvR6J6Wrr8ePXcbNg7PprBvPTSHs9rDtuZcnWrEEkUnyYHzhAy1fM",
  "key4": "2jbmebg36wsAH2Edbw6vsRn8SGkd3MpzbChpFbrfoTfGLiceF9RSQspX5bbinxFG9PToAvyoLLV3W57pjcF2jPAX",
  "key5": "89uBoxqMMwhzdUVwShMD8aQZiB6nm5bPkUnHwkES8nKL9U4SpA1tZo2JivSqJnHiRtoDGvLH7MvAinyMH4JgHec",
  "key6": "2jquWwgMbhNLWM4ftveRtJjMwgnDuNkDf9yypCh1c4GnkvTAAJD3rDyNNgNYLmJmZp8MNLWJtN46SfgkPiYUnSpj",
  "key7": "3TUJyvYJ8MuwvT3KyTpdgUcqMiCuTbPvJ6GED6epJDFCr5ArWcEYYgnavKmmu2mKpkP9nRvj9M9dNRDDhRf2CFuZ",
  "key8": "YYhkLLLVTSikhWgz6bjBQbegixAhwAkKpebQXuXxTSchdWVv5n71HuLDeKeyzxiVNDEUfPij432vNPDRPcZ9kUx",
  "key9": "3LHAm32rHvjVR8d2c7EhjhBKmacpFzeTvEvb2uig5sWQkz7JGDEQueDoPprPo5rJNexrcS6AkCdLudmX3Dh2VnDk",
  "key10": "3mne688GN8xKE5rMqYSyqcttzQJG54rnC4ZGeQodTuUs16AeDLzaPU5bWSEcuyysykVZ4wPyMfh2aNugR4UCvmFt",
  "key11": "SeiQoUo11EJAz3WvrXxN1VpyYQB4hhi85fo4fCQBC6a7hegfRZN9EndhrPFYsfcqhaVEVSkK98aiS53NYZmAJ1Z",
  "key12": "5ioD9K8sHF5CZSP5ohG1HzNhPsEvsTB3mhGbADvnfK85375draVzvrKqTJRRx8CVs6Q1zJ8Typk6VW61evJsxY6E",
  "key13": "44QgKNnBp9ymJH9oStAid3ftC6E2NgWKq3fw8zmzRveAJN9UCuRQ898TuvARFPfD6EKZ4Lfv2D2xrrhy3vHEwV8U",
  "key14": "3XghucPLyHNakPHuAeSJqYGvGLP4pU7UtjvXsg9d8Nd6wZ9iAeEmNYTpzpmGwNiduKj2uBMURij3PCRnPR5uxrpo",
  "key15": "38oW3kYqBoFx4MQVDpK1RwbnZiZXfLoUXNiNSRLaKtWFACdtkReynu2ziMGywUbijZE28W5nanta8mZbafHAV5jy",
  "key16": "536HLR4L3narKK2FMuJxk9CNGsMzSgCsWf1kwis5TAYbh9pSgGUUVv6MW2rkkvhnG9BFNYrxQPJ7KX9HtBm1hQBf",
  "key17": "5bXVmS5y9yXShTQETuht5V5q1BV1y2eRwq72SiKJfSqzwCuFbEr7zYnbX1y9jdVXAcLNi1x3RcB1K8ggMoHTDeBX",
  "key18": "5ocZyNDSNEtQQJUoDThLSonv9b1zHuJJubKEPnFkNRqzmgur2u7aZFrokZbirUw6NmMWRBuR9Xo5nGzA3AuHr1dF",
  "key19": "j7nuRn4oL7r2CVkvSL54bnnM4jt7FRV3X4YUdpBXM877f3XNAF8xiDQzxL6jktxsCer78eVSn4kATspxd7PUjni",
  "key20": "5jHvqBuyup3PVV79LVL5uKiJKhTxUKwbMN1ccLZT8MPDtYoGkHpE1mB63JPEcEhvFL86S8Z387pzeLeFw26Xe9Q",
  "key21": "4ko4qJwFEW6A3Sm8SYmoDUGvjqnpAQkBPpqVgFgNkSwKyFffyc5Rn6zToxJd3Xvp3VyYGds3g9ytUzXDZq5KwThB",
  "key22": "3yx6PK4RkDK4G2s7dasPtpajxdERW4t49Sta4C2LPf16qMPDxPi3JLFSfUjL7xhQH4dxNCM8xtKkYMTfnNSrDUP2",
  "key23": "5iQrCebjE4PSkFLzctMVu3QdZ8ZwucF93yMgwadFSqw1FCyhsbteJkzff4wZht4W3VrEYRYRD48YqfEY8y8vLo4g",
  "key24": "2ZUjehFjXAYWMa4isBWrYRwrJfoYu9Pwr2YcTBBe6RGaEdJ4rVJBk881r5hUjoKjDEMhGYKRK34XwhtYAGkfDzDi",
  "key25": "4qJGVuQsB4sLzqc7uaeU2HRUX6dvq2vcvXmeTAfwUh4CHhjrTqejqxV9C43dso3wCGZ5fXzFuvJvoBDtJaUHdhpH",
  "key26": "3ePRtJ6Pr7mKyfRKTd4XX5VPtS2YFYcjcuBzhFNar95edwySiQ668k2QJzwd6sF8z62585bo4fGedvx4mmy1cCTr",
  "key27": "5T5fbhgZfWzZcGwXqgBcD1VXx3WqUjid64UePL5a8mHRZEPiPs9SgeFRx2fcdMtX4q89miNFxjZztw1MJjBmbJjV",
  "key28": "4NVeES6W7PRGDgvqtQ85CX3cpJFM2EYKqZxYiGyNDyLK29tRpgSBXyPs4ukWqL596PmrzgaSLsVLpFHifhaQ7rPi",
  "key29": "3MZcCqbn9rKjR46htdxSbL8gSoRRwfWqafpf7QiqdacMWwo7h11nxynRuFeAXVWwLDpiwQCwnwiCnqZjfwJsNvQr",
  "key30": "23eC7NTN5KYSsNj6642eDs9g2naFh6FxHUcc3fJLc6kLrCT6z4JM5Z8yoHURZpT1ziw2XLLHfPDkft8WpsRsxdSH",
  "key31": "zajVdXj34X2R5hxZYupuk5sUoYqrfJo574b9NFQc24CgFo9ZemKNkdP7bFGNAm2YboCoDhk6HdkR6YwEuJboSd7",
  "key32": "36nHpEH4HzWhn8CEzErv8FPQWc21dHCFUZAQqLff1fpKVjjJYJXEoxrBoTMiww4LRtqrMcVncuoUmaFP1Ggr19JC",
  "key33": "3Ee9UebmmhUqwYK4fD5buaEmeNfEWpDZHuPoXDEHA8ZyKjK5SxbUHqkGWFLL9CgS6LTpyAoB2dD7HK3uWLfgwZuT",
  "key34": "5tNEenCV4WN19iPZivp5NMEdnLyymke2MTLbqHr1wPEjoC5G7msqA2Uw8vwycdBoUSAbYACS1s3Doipvwc58FD7D",
  "key35": "2gkZ5mdnowVoFE8EZmaB3sVgdj4rdDMZCDfYMRvfHyiwbT4ysWc3pSBjvF5wAhKVo2eMLJHT8Jmz7tk2DSzr42vs",
  "key36": "3oN8Xz4Zw246ro9qWQyY6C25hKuVWqRQjW754fr4t1fRAYdu675uwLWi9vBecYoxmbLn5vZTkBzG86tUbdCMsJnE",
  "key37": "4HGEah69QKjrLuP4k5MPJ7XdjRkFgDx9PDMZxxfifs7oHaFSRxjhnYYz2da4DTLA5d6aiSS8i1p99ZiUQU4JS2DL",
  "key38": "SiTGEMfLkQVDjfhKHFv4K5zfhj1urNZP6aYFuNtfpnVAu594jPJzu12uaJc98wdgmN1egQdM3r1UsvxE8deC4DD",
  "key39": "62KtYcdJ3jaEBYTBTy8dui7t1vjkdB83MoNbVTHVJQuKy9FoGq49Qe7VrM2RWajPsmWR2jqaxYoiEJJ9YwhZdFME",
  "key40": "3QRqe6jVgGPFrLEpKk6UDok8mpcSJv9qGZbWRHzP2iP7jheMQpoDWmVD9GWBLp2NixRQNmF2muNhjQefb2z5kHLJ",
  "key41": "2zf8vGqCmQc3DPUeCLzpEMWjXVgQy6xACfFnfztnt5i12nAFRBRXrLRZ1DzJjEPEmCta9axg838gsJz9GWSvAYWA",
  "key42": "59Nw2EzKsbHjzGnQDB7hdbn2nU4W9YF1uH9vQKpaMxpkXPT9FhKGvRzDRA8xW85dH6hFSwc55w4MqyfChEb48CxV",
  "key43": "3i7qsNF1Fv8xA36tVrP9BSTA8xwcaJgT2meSVFZKLg6oag1nvafCjfqqSYsEvRcdp4fhbgd6KYvkP6Yw3iiMj4dk",
  "key44": "3jL77j8vuv1UxC2DTnBq1AMsF5eEYLphcUuPaf6b37n1sBjWi5KsTZ1RDhSWeUrZJvAge3S4AZAeZLPwHcg4VtDv",
  "key45": "2czqWaKrXxkQCsBzyE1K1LdPJrJ6TnuFYbRBhHHLQVHyXZs9A3Vgj54c8fmriG2kiAq4dr2bmBo1wjcoktSwe2sA"
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
