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
    "2KQ62uRS7TAMdxk2WsvhXuNyQg62E4bmCDadBhU8SKxm9msjY5m7X6vKYakQTnULBF7ZQZmnHodC8UwtoZZgHj9c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DrRYDG3oo1kRSodg1kFU1So72KPJFETp6xfFsJ724UAN6YwyASQsDEHcycPqL1tuVpsdcfdqGyTZCkckS1ceEwV",
  "key1": "5eAZEWNrRFhZqErpmqvE11vXZJSatnFi8Fgfq5T7B8y6vKrBjMDYFcd2qZvZhjV6mcu4SJFLR89iYd9eV2v5BTcm",
  "key2": "5sTAtBk9EjsQ6hguc5Re8WjirEbfxL6dNNiqCy2e2VNzcvCkTMstGaxRaZbWEv26JCP8WYrynjdcJnWLiwLRAjFw",
  "key3": "5Kno76HP86mQU4pnpBYs4ie4cCmaQWhU9tnSfYd8F6hh4JJGEfkrx8myNqqjjtXq6M1fNVmWoXDMrKuYApNgiYBH",
  "key4": "2LHyo7Eo29qUmsuRxPaJM7d48swvnRsWbMqtwhjRJWvoKgbFNmtYhpN1j5fDvHedzLvkNX7xLqcqStCBCsdNRWGt",
  "key5": "3p2nx5jKkLCyeyc1GwyUJo6S5qG8WV1BJHUDWPR6da3j3etzkKP83WLepP4JYoNgxK4Ma3UbeepHp4Kn9grtKhvj",
  "key6": "39bixpaTXQ6V3QG6EEAkhNK1eeX4uaryLX8sp3vm5FysHsKJipmrLGHqi8uQoZWaUR8Ga35XQRvJArrbxFGYeLJr",
  "key7": "38z8s52P1qeX19kJELr6Q2u1Qq2DaejffpF3MEaZYYEBmpKx1yrabmPa9Rq4LNL6tpuF5cPpgbbypD7x9ngATea7",
  "key8": "4YMBp88ZhSVrykt5yktQpSZLxgFsEEK3KPd7VUn2GkEsxSb4LMUxmhGxFVTK8oRGCMwfxnpTDYng4e1poJekLFG9",
  "key9": "EkQ9MTzGNWU7vEq1buSEGMPTtBNSqvDBZRUah6zgGrcUAWXY78WbthNdRUakiWstBZXARfZNRU5Q2muarx1bxgf",
  "key10": "4yiQSM9unnaFZv8QoJNw9omkwdAUxSzhHtbzVhRoeDKKTzdEsEgfo6mMjCM9ouktcap1xQeC3tSnkC8trpmm9W9J",
  "key11": "5f6EN6wGg5N4SHmsZn1FqFSwJboUFa231gDM4L2SJz1EGy6B8pSLQ93RBiighd56bUFvfhvqkmGHcLgbTBQRWFiq",
  "key12": "wvyTmW7xZSC1viPToyPvqCdb5UKcn1PEodWtut8u5yYdaSE7ntsvbMBSCTDtR4gcZDLaAvn2T6SHZTY8H1dqneF",
  "key13": "64nYTaeBmjo3GsXLzqyAFomRdtc3pJ2b11UAgAwWJfa4xLSKnnYM5GBKgjJCB3hasHQwTu61dxhYkbbpVrL3JYZn",
  "key14": "2rmKD6yDf1vszaCVTGZ3yzx9eF4SUY6LVuqxLcb25zL26wgYQCywgKZ64SfZPJeg7HYvSo1uYGL1yArHxntgeVmW",
  "key15": "2x7j67V9sGg2eomGMKop4NXukNbe8sRmWU3W527nuSbsW6KQw774HnXnWVDjq77iaahEhc51YqfDHA5XYubhLEKY",
  "key16": "uy1rVBAK9wiqi9g983jLeQsQtJpk22dL1T3dMADa6RzqDdPfnZNVit3Bqw8eiQH6VaeE47HejhETYzwL6aqJ5jq",
  "key17": "3TpWruf5sohVLCW3BPZbMM6okZFmRRTdBF2odarp5tWZxQr55SbBa36HVw6BJAX7evnMdehr8tV7K6WLURhPwLmh",
  "key18": "3uB9HMpEs2YJxGz7gm6s7r8C4ZNMRky2uFWeMJNtmD64wJwx7fjXtkABJoav6JdHAmqReVF5WqLMiCJgYzq6FMGk",
  "key19": "t8kF4UGietULL49hirFLEAfGEjtmHsLy6UGXD9hWkPASnUavWHfwqML3ncu51Z7V2atdb6eNdp52H4cPfRNvaKf",
  "key20": "4QJv8aEXFac9DpSNoGCE5w5ueuJGz3ZY4kfVvFRpJGEWjYFjYoRYNmzPjp4PzDdiQa4FwJauT9tFrwBuGMX2bAUw",
  "key21": "5m8pXuBD7iEqRTZAvbktKA3pDpMFFTHs86aGmSBJZhWMZX5oqgqVJTsTmG6vHQAKbnDfg9u22C1hKMbYmFJKTtZU",
  "key22": "2yHYzWSMNAfQfvdfJZqdrVdTA7Kk35AHHkksoRVR1CFVWwzvYWwT7G2p4dusuTQdcvCWYJT5wkkPT8NmtQjQCJ1t",
  "key23": "3G9JdQhc8A2GUXnZge33jAJLsLqJ2V7EfMXMdmtyDWZVf5d1WBE4vpd3gvUgCvsBfjenHRhRT6mn4hp4e9bhHBax",
  "key24": "2KR7tu7DqvLbFtLxENPKQxAUcrWM9KidNsrmZMHvSHQ6zfxfsBttNobegD4TKUMTsWfPvzyXLhTBmdyTW5te2Tvx",
  "key25": "5mM9PyEo3CZF32FCJE3U9eXZF9o8qq2i78xSARvVEz4WN9RMsxZwmP2Za2pjGCVuqyHi2pwcgbaLGaX4acJZG8QY",
  "key26": "FWaoFNUTPuK6CVZg14ef6LBsMMj8Yky4bsSPJaCja27r5Fqi6t496B6ybqnnYQS9xTVNVpTkcb1wbDFtfRoeP9y",
  "key27": "QV8sgVZBSr3KHkW7jN2fGnudhX3ueRvqjF8CtiyKhxfcQH6jMcKCg7TvJtKoHvcJEueLXFoLMjtxjrmKdqzXfAy",
  "key28": "58q12iBgUPd45katbFDC7o3Jx2J1jYscJJSJnqqCZ3DA7qbfQixWrrXU3AKjwcSRq9xbahxrgT3oPxeAGniDXm5y"
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
