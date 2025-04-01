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
    "4KkD1T6wS3W9sao9GzsNE79KCg2GWn4WpXGjLPf6m277htUHB4cbMagb7JSwUXwP1VUkqeAyNUNQrsegCNyokPHj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ERnGFFxgCAUsLpymeN3FiAhqf3DWxEjaAbEnRq4ey5vGnKWENbeDZCD6BUGLxD3Md1BK1sL4Z644GLhU6X5n5uu",
  "key1": "5QVXMrhWRX2PByWw2jUY81oxkHKiZd5DgzQomoxRKiJMmq49TdLrqTrADz9aeuhgmGBwcoLvwA6fc7BhDttxn9gu",
  "key2": "62HsWPDJGCAFszdFc1JLgzdffLHgPHVmGHMKivkeRoqsjjmwGWw33RLWhLibUz4RKhqB1F7HSGdYGbkVYbb3TzhU",
  "key3": "5LfEdQz8fMhsLkJgVAsame66gWyukVnbbPnMsrANuQpUGeJ7iigmqNMLszpL2rwzzrKY1mj6P7BJsWVX73gNo5FU",
  "key4": "KT8TkBgCG9zEKyfu9eodkFN9NPpYxu2NzJVfST4WeGGZmEDp6J2QFomDH5HqCT4eH8nckMbAss6ruWMSz9NvYQ5",
  "key5": "7TNfPmkkYumAdBDkJberNj8Dn4iYZA9MTNJrefG3Mmk6q2rfyXrcfb5LyJ3f79wbf3PtgNJQaWgBb2xrtxPWC1i",
  "key6": "oppRJnjRvV7oEgvYbb4zu7TKaVqYW69jxadvaDpvXZTFc2gw9ktrymVaARXN1299WVcmFKtBsRN1jrCnRkfG2Uk",
  "key7": "63FQKbuULFvrVEQPrtVc57c9W1F31HThNHSEEZCVM7deGXgn6EeGiQmRqGhKTjUk36CQ6cmCf7zyfsihwjzme9os",
  "key8": "5LtVuseBAVTRZGjKph2BiYBKehXG8XSfUc1gtiMgD5sqHtZgjR1gnh6eSCwGEPwESfKtvcAfGxv8nFBqTCLD96nF",
  "key9": "3RCi7uAbk2cLFd48MrpX9p7n7GBRbmYBKyTcUFzWoDg5Gt3AmWxrdVgEZoQzL3PKWij6SwPnhAFtmi4RW6Y1yoB2",
  "key10": "23t8kBMBWaxRU4yK5Z3p6f1bBgmnjVNo5wd1GoCGoeecSNcyHVvqwTCFeFG5xSjQmaTFGZ1FGYUxxaKQGPBKSZwG",
  "key11": "3URNC74CVGQWnKJ3fo3qEwDUvP1EYDVLUqZx7QRMJZM7WbcHCEE9MKuBjRx8wKjsCDEGNRJJTqZRq2pUNoNdx61w",
  "key12": "3aaP56HeCsxa2jx64dz6zmc5oeuSRt6VuYSmf1x7fcAYZcNyawJ8gxm6VmmssfwQe9ZCXLAWJ4HaW5QmcPAPau6s",
  "key13": "5PABhhTCZvgYSQNNSzwaoX2qHczA86FrAg2hycQx5SUwnSgyPc9fPxJbpjutfZNFtHxZe68WabucVeWtSLysXD1M",
  "key14": "3AX78gvKY85n8f9Vdut5A4ik26VBBQK8mWsk1dYY1mHnwW238g3TWEeTdKSEubWpxpREXB8GddUB9BU7smHFPzJq",
  "key15": "2mEdBrRMrPTJJeChHV3KrfSoDPm5U921Sv1qcTFsLnrQHZ6GsR5M9oobvu2H21jeSLrFX2HpTNRJwfoZqFXwUWUo",
  "key16": "5DaZm65p9Sb9Gu18WUBFtnTrMKgWpdoszTAkDwv2W18Dmt9J4HHDDBMJuJvLY91Zp6NuiWXrWdhXgnWPdpBEaWr",
  "key17": "2fBQNmrkCHFEZsQENprWHcK45PjBKrZv9RUGYnYHeXyjMaFpT3YTsNgz1AKgN2WNa6K2kYqT5NgfquRZun2aWTZ6",
  "key18": "2cne6hvJzUu3ZzPDS4NNgiuEyFNXnoEa4tWEe1TstcAgHCSJwW9fAJXVACWByfJRCMcwJ9uThcJN1emuDYhDDvDd",
  "key19": "5K8X7Vh2eYwdrBS2aSnFMwD8p6jhHW2cskBAnEygDDts53BQ9yPqtXwD7TcZ1sS87hwuRh2hsM6ju7Abq21GiBza",
  "key20": "2EP35rmXvYTTkuCZAPuF1ZsAVKeWhk3iVaPb9y1WrkvsUVrNww6fdRpXWSEojJcS7n1J8wuXicopH5tGj5JZ1o4o",
  "key21": "f2zbyCPq6PQ2oLhUq8smh4cjDkxRui2hRhv8Hh8wwvCAaEA3xzqVfuHfoJjtprkAw3ggoLaVdj75xer2auccNRz",
  "key22": "3Fj69dPCwugQEErwpzCNKwMAoaQBfwuC2cTjmrvjAzubJvAB3VHi8GdW92E2fMGsTnHsbv4WSLbwFANhDHM26vK1",
  "key23": "UQmR4CDSc9nAXNEZWb21Ac7PHqteKC2qHroxkxGteEHP9yDCEwztD835WQC1z3mbnaMMWKP92uiB86FjFgr8d36",
  "key24": "4BrY96wzfUAkfaaurMninqwWxWJSH1CH8Jc7qe4oefzfR3oJWafYpVQX8vB8DUABiDcePqW6SgrED2m6ptMcXKUS",
  "key25": "4mfoVjQmX474FcEohAv6srwPuTZehD71nsoiA6y7cfZTLzd4A5mmbqV5TAycicCVQXbCMWZKdAvAT7dVNo92PqdT",
  "key26": "5zpU1VDafYZP9LZUXKpovjaVepKHLqVo9Fxf9879yM55bKqRsbjbYvWGKWT5uTc6jGW9VSxpLLwWRa7aUJ47YMD1",
  "key27": "5y8CzCCp88JFoKE728qdGi7EXHEjioqqZz7tuyZ2wB4oHHosZhAzhTbsiAF8ZVaC7nSMXq6k62sKvoDacWPcTj9S",
  "key28": "quVPE5a8psr5jqo1T3eQ6kFb3nJeNQRuyT7JQoLu3t9a8yiU771tUyLYX1vrLHgdxGYNQtipqB6ezvqwdpeRy5W",
  "key29": "3Q1PPtCUL2GBfb3uRkKNwuSGboD4BrmL8QASnhe8M9LDfre6aB31mCxftKdTTbA1cxgAyqTEkWcV7CeAkhVoz8Kt",
  "key30": "35P4pnbF3mtbC2M7Jk5ErRX1fVWdutxcq1gLeVj41NQ7irmsf3pedMgCgsNKcayGNxRt7BHdmgaFTfBjYyWbwi9f",
  "key31": "HNELrQ4yD5oXpcQc6EZq2boMu5gvn6ZmuajbzCencBF2VpJfEqB5Rf7pUv5zusYEPxPUyK2qRrZuisQ7LGEsVsg",
  "key32": "671AVCQfJvW8rkCdVoc2TWpUwDTeYMvASsZVBTHtdAtWsUCgaZny7sU45HLNuM6r2fLjvHGLQkGQ62nHMEEGA3MK",
  "key33": "61GLkwKjrfYncVAd5nyMiYRxcoSojP6CxBj83nwQmpwL27Mxgh8W29kawQiQUerAxH9JoQGMpGkFrfu3aYSo18vG",
  "key34": "e87fCh6sNutm7bUZ2zXkPhkFeQXmwq3HHLnPBsxXko4uo5ANxmMFVNqR6YFgRrgeHvVH1ifdnKKZZAFX8pcvYK4",
  "key35": "4EpAG1iD8tC8CXoNgA7DhxycmmZmZN4ir5PXvD9Wixho5ZzzDqb3kKn3fpBGpebkiGRD4SBRok1YXoXFW69u246f",
  "key36": "59zyzaxXmUtjqV2nYTuq4ayetvMKDJtnYHHRMXuzdyBv5FgG8xnR1tN8WhV9tLWyx8ERAVg9kDH1k1GSFENpJ2Zk",
  "key37": "4jBM6ZYLCzM4ZTk9QVrbuU9tDZUBqoDSZhdoAX8H8CKw2MA8drUbKma2tDv44ss75FkBuWa2rJArahndLDtTKUyj",
  "key38": "38uTRWAJJqhYF3aWXBiBtURwYMWJ9jLvqqFkHTfyEr91VTHq5ME6Zw4vLTghYmrVxNTwacXo6LqZXrRaoHZYbwuL",
  "key39": "3bA6TV1w65tbJxEGBabR6oZ9onKVJPKJAB8ctqXPeUfSQPHXD22w1efmsbCshdjnWoUZGziEc8vnU7JTYNqMS3t2",
  "key40": "5RZ4GZAyXcHpxKRTnzfXBi9VHspPiiWcTksT9AjyB6PPzJWH2JLabFugayK8dmFBrbQBvubiwVQVfhtHL8XQ71Jx",
  "key41": "5SPJbu3j5T6jxtSHtVHnNckDNg9N7bGxJ7NCvgz9euCv7XQ1WWtvc3EDpAZsKwwdCnnHNVAk6UHXZ6EkJH6Vjc2R"
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
