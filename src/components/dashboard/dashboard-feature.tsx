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
    "5KR6Zsd2bax2Tup5S3YheEN7PBtgAuWfdFat4LE2e5a1XkBwiHyWRhjEPZjKq95gs8b1fNuT9nki8aNMLTTgmATV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TAsge8pR67qwobeuZkzBGPLz5dNESFHu6sUq18mugSRnzkLxHtqyoRVq4mm5hdB63CXgt2WoBAPiyoadCcNwqmk",
  "key1": "38DgYqGLWigq9nQcc7P1kvitLF6UtyjxzRjpyekLvEAbnA64rMEScxYj74BWnbyQsqD383xthdmUtszZ82f2ymRG",
  "key2": "59NyS9ykYPjH69ZHRFZSeEbUnbkJHSRb5qQyg5vbKjmoEFwHr2hevGSGnGS95tcthxK2ebfezt6HouoAfcpFwptb",
  "key3": "3YhWvbUFtrkTocuovtwiaH82biB8c1sqjQCcZzdf7ARPGny2tNHhu1TeFU6fswqeieDXvw95S7SNroM2PUTRSwJp",
  "key4": "3oMZvB8W6t6PYTzdWbFXc2nahYfmgUSwKa8MdQ4FdocJ9wx1mqUcC3x8d2AAdYwi2hBT2dw9pMgHjr4F4nXHigkg",
  "key5": "46aqw2jwxLhZG4rMR46dTmjdYGEwGvUCiDhmJfVC5Lgqt3Ws3Gwz12pER8xv56kP7k5jWZiRSr9KWh2FF9T6GSZ5",
  "key6": "4WQMfk2Wiyns2iQmdv4x2B4EVz5yYmd4yt5vTuEdePhei56jJELSLUQZcuWzMnrHKymBvSVx2q85dDxVV89tD3xN",
  "key7": "5zxBF2oqHoeenGVrkXP3Rj4WYu6T5mkTtADG7wiW2SmjkS6Z1CSThcGBqrvkujDCMiyKcsJA4i7Y1pQnBt76bP8R",
  "key8": "5jXRsXj8jwTNRq2rFMLjd32BdHAAPPDaZcRN1zMAg9yBnBQG867Bf6hNdxRj4xzDpLwCCa3LeQ11mTkzmP46RL2V",
  "key9": "2M8AuY8jFs4qRPx3beKEFo4FtLhCxzSoVPNzEhSmupqjB8BmHpjUVWYu2YtBCeM2pySGNPE9Tr2KJ9xEwep6WD2f",
  "key10": "TdNYCVTnk8WEFJFbj214LX7h6yncQKQSzgxjzkRrPE15cfUS7LL9maCabDaoXMXMG4JVfwbyFcXZrhqetQb8oUM",
  "key11": "5iaW9by3Y1nWF1dsjWvJGrQZgWyd1boF2URqvXtgnf4uuPwFMTC1Se4aFtpB8TPU59cwir1gC182CnJQxHDFpFFc",
  "key12": "46sdovb3X1jjyBa5rhw5bUHb9JvubGfgRB3GA9JVM9zobrT589rUAMFruQ7jfsoD1oVNietRm3X3dA62sggF23tT",
  "key13": "3PAvNxuwif6nKg8RVM11scqdGrfrNvLk8DbmmGMmTSvnQQ3ruG1YNrDhzxAsXAfZPfX56NVFjZMMYX9FjCN6Wr87",
  "key14": "5vnJ6b77iPqbqDgGj1nMZZPSDHDY7fXNN8yS5RYwh9CnrdBXSeMNSRLP51RULMKkpeFkemqv2jHKPy5w1vQQs827",
  "key15": "ZEGmfNX4EMgnnUscb5uQ52SnbtbUd5CmHZKVRFxB5CVVRbun4BrK8nkrauHSZG8JG1po4ke4Q4kc9bwTxuafTww",
  "key16": "2saHiJ2Lcq6edvroEzdcPrKNfqRZuevvdLs7DsyJ4HZ5r8eC6Lrnnnviq2rP3QXQef6cLy9cNy7mKgSUzUzvyM4k",
  "key17": "4D7PcqP9Typ8tYKLiU4maYhQKv1Xiw7n1TAMZDMNm3XY5rnjMeoZYHs1NUioSV2eTv3Fhxc8ZfKY4GHSmgexmK5E",
  "key18": "3QMgeNBjqDrd2QWgvE1AUmgoq1iP4yURmxAHYECzDYmMtkhRoxkGc9d2buxeb3Ba8dPD5dketspSGjGmFSxJz1UC",
  "key19": "2fpKTMK35PDEMzCwUQP78LEuSVaau7nNX5tXymmTbUeQoCQbdu8F78WvJcZMkqaoYZxdjrUMDe2Bu3nrwZXFeUVk",
  "key20": "3FwQfGAPbQShbioGQTqwvK5T4VYKEAWCGBgWRGxAHft3U3iQweeLmbMfEpXW9BMfWX9zc2xHgRoev8mFtYXW3USa",
  "key21": "5TUNtib2EkqDzPryg43aJAMTEUA9qagduBF9BEyNjRNorVMLQoxJWWGm91z5uXeXnuVdwaGavy6qG8o4YJwEnSJM",
  "key22": "o4kzffPAtUdaFq2AxWqJ3wPs94cWBj2FgaFTWgAyCGcvkqAYarJ4CL75FJyWkVh8c418bPhs9pUW4RoKg8rGyVX",
  "key23": "6ffZCuJ1CqdEpfXMUmvQHdfptto18vBsKV6M1HQuc8UNeiYGeWxC7dYbuAHtTDXeVtnL3byyXT6He7EX7wjWBSg",
  "key24": "5e3PVt81t9Ndo1jLeTnR54nLDcmJAebV4ir1D3MrhSFY38KGzTyAjdA8z9m4DDLc4wvygq31RCXYCumi4XQ5Emrd",
  "key25": "LRipjbVRHrd2VE85ztESDiRj8mqDRxFt2xQtLnrt9kGJesndGmgkei3Xa2QyxLpLdaZ5YmM6xysDU3rGjWszqQr",
  "key26": "kc1kjG3fcTeNgFJgYM2mgau8sdCEXPFVTTyP3JxXRpjbvBbr3jBSWdwU3C4gdvRaLmJFGsUgxwBURfHZpTyRnsB",
  "key27": "499S9zPfVeEMojdMApdVeskuvm2AWuyqjagMNU48pUYoaHJjH1VN5WAimmwiV2wxaSN1q4w3sZUS2Yhdrcp4VYeN",
  "key28": "33hv7DYwLPoERrSGrxovy1cdn4ew2ahYLKNqupFK4qPDePRJxLf6oR3RK7tyKegHbYtjG7G6T5L6byHHN2BCW7AL",
  "key29": "5aEiuLRWKErzWDxG5kqLhj92TjC6NWRZy6KtEzYhRYJrAACBVcWr6nsX99pwZ4yLT1cbFHVKxk42BUSJH5cPRvtY",
  "key30": "5woa1Phbu3hYHvApktcrX2qsyHkRguTDdh1ZhS83eWcheWovmoJrq5HnwTT7tNVvHLF5N24n8DaqQCBoQMGHKVZb",
  "key31": "5n5DnBGA7cf6bX2URU9PUgndiiNM6yk6BqgGF5CDrJHEWVBYSdCTjaPb9rtcgp2HdKRkrv97W14jGDdsCh1FJv5d",
  "key32": "qBV77ADNLp2mdRzp8XRmwKvBpEakkH2cMkz3GTBiE5rfSuSuJkRwg7j1XX1UbeYiDoV3woy1ADQ3ft2Q7zoUE2f"
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
