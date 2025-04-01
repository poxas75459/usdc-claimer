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
    "31qHRREYYSPNHJQah1En9Kr8RE6Moh2RVqxFd6bcGyKiZsES56BjX7fxEDFN49tQaypvq7AVn4cdkW9pfdfajQ1z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5etUayhchf9wQG6FgH9TUCKywGW4MupswjF2tCGBQKu8ZAwScQz9CatbmudgFAGh1UM4yxzR8Si1zpRh9LutaKZz",
  "key1": "24fJsPWu7x6rEmZfxwCmsK4dnRTF93tGudPCxMyyYRzeEUavYX44G4CC7J5Rq2YwzT6YRdUu4RsQ6sBiXCTZRdEW",
  "key2": "4Q6H7vVCGPbekNsZSn2yqX29HkgFUX5R3PLBmnBwSez7B8DwWYTgN7jPYRHWUaRHQYfeLjDWueX4ryWrR9RtdX5M",
  "key3": "5LYAhN9NyzQWvxMU3CbDi3gTSCJ8ZKZYXKzzAHS7sCR7SBEp14sY4eJ5LkaWyK1GsmRdy1UgBTxozAGCZUjSd441",
  "key4": "5MRfqPgXLqdMAJxqDy2f869xCnCExcFJWPdFzMY71RoQsX6V8heDPAAnq2vnmypjZ9zd3Gz2AFmEWktz9nhJE8dZ",
  "key5": "3HJnx9TuGbu2yG8EZk5kRit8uY7vAWsqUWt7ZmSD26CwXnWvsxF8TBFmmUKEj8f2KHWp4c3PutHsT8rJZHCgj23H",
  "key6": "3rbQUSjq99gyBF59iStuWWnNnfPPwKth8r3Uwzb6dPCJZ5GGdCTEKgTZ7CoWojNUsVHD48Gk3wrz4y3QY2ytq2su",
  "key7": "2L63nkWQt1X8fiwmstD1BKtTUezbAexAFME2nykJ7Erv1r4YpW3KGEteBbTiSxthVerrkUCPb1gSFvbDG6TfHDT7",
  "key8": "2upxt16JTtNTEgAJSYBTarZdQet9w93oyWoE7xjfSCHQpGPEhp6poqPTwrXjmyki94d1b4dKx8CahQVTHPQjk3m9",
  "key9": "2wKdPBX3Gx6kwb7E39xEZkivi5A6YkwSNnRf2bKUimTakzd2Bj8Zuc528eggH9aR6nfB8PsenvCWZ6XLfyep3GtD",
  "key10": "4Y1cZdu8C3ETocdKPEFWDPu9FGDoQp5QJ3orkv1uxXQ7BdHBhN2cF4i2k1jiqUW8FJsPTCB1xCe15nnoboEW6fTn",
  "key11": "5ZZ4CxX5SoDKQ93Y9Qq7WpWURV3fr2Jd7Muu5ehz4XhLDwR9GZjfv1DP2NgWBLEZ5suJ6kbUpwFbXkKXtQ6Mxpoy",
  "key12": "67FiJT6x2nr57q91ihw7CE4g2NVTPDcZRohkWCovgyzJnEV2vLoUYPqqaaHiqfMuUfshEdkVxhPTpB2gnoSX5Ytb",
  "key13": "4VVK3Cw2Qpc6mXKLBfvKD3GAG77qfy4HKYiMKxCg9UfoMfuQbiMsRyeezFCNSx5p9YsKNiS5bBmbaR1Xj3ajv3MV",
  "key14": "4epZ7QKypzNx6m7Rs1MhAQV4Ukgf5qrsVzFbta1u9a5641GJq2hMNFCUT6LaBpDE3dFiinAHyHyjut7zxNC83XfK",
  "key15": "2qfrWkXKxD32KzVC7R4BG9dQvEyPVsqt9iZYUKxtdekeYhRvCK4uTN2SW5XMeu1ifBiGAmQzpWnBnrDxy2MCeCtD",
  "key16": "625M7TrC9XnYrGXFRToFKVroM5ZLiq4xEUT2tk6sKSza691mmcJZVkRHZQaNB1NtGC5kFJeRh3SMEwcmnEYGMiFQ",
  "key17": "4YZxHWL95cHRBdR1vXkWHg5cMGwQxe9WoN2mMzYggjo4nNKPuBkT7HDosUkvBuLqTWbpDm4tqZE4tNbvg68XD4H3",
  "key18": "42bFcZT9rp4AdGgTJsp3nMZTDmqMBwaGNmYaApu7sohHXpfmxEz7uPsPNJyUK8bs9NU5DcZbkADzyEj4dphZdMaV",
  "key19": "5xVaMchX41NQLHb8EsUKD1c5LZ5PR1ZyidWHuBjXKLmsDJBUceTVHwVqgqwc3PsPjL18KSgou1TFcuhXTGgN1dJ3",
  "key20": "4DmUq62ftSuifE188eFRdzB3cezGdBLrud3Az7ByLEYMkGEHxwQKXQP5yLkqAunKzmqdYN5XPQEHFaL96aBYugfK",
  "key21": "2Rjxeup9CiGR78V1qco4R4XMhXxKWyj77ohzF93MxaFM1ETinBRHYeeoE9CiSyhpVwC2omgdFCd6rgZZorkzR7Ny",
  "key22": "44FgnLC5P8rxrKgPNmiWRZiVMU4xYSKqKno9ygYz4kFpBx7xUTrPs2SApcUTWEWqGvi2XQWW6popsdWQK72WX5sw",
  "key23": "44kq7DfcvPcz2QPyX1rqnauNUb8eBmxCQaSJdvkvbZXiamJXoULacQ9J8jtyr8eAsPAWGb18Rv1WJxs1r781GFcr",
  "key24": "3UeFrX4PvhGxRV8ahUdRc48o3Kqg5LHbfqJqE57LkudXMS2nANos9DMYDmBgcYhg2RfkMdyYTqESSreE9WGwhsj2",
  "key25": "5yTLAzWT2E2Ar1yiNLGSiqtFF2za8i8AySMJG2NTtbCMsKWcUvT3c4GjTu2CVgZLSXE8RidrvZ8wBdD61djb6P3A",
  "key26": "2jxerFdMvg4mwygKoctxnjvzrmyL1TfZd2qG3ugQLoib7WcpyVcbcN46Lkf8vh8xwW1Unw25Z9CTokdXAECopL9T",
  "key27": "2RyukaNu8LwnR16Pk9ssQVABF2ei4VA33YZ6uxXLaoRfUyJUcSRR6XZS5jbtawWYXyvfFn7Z9H1xScCueqwnqoEm",
  "key28": "4PGaWhUJQy8LxNa1SgE3tJnjCA6oTgf2CjKEiUNbPfsqvVXh7j2kCfkHZQD7bSnot4vfLyoiiThjTUcMyLrL3vNn",
  "key29": "2toyX1tEc1UW9cEm8uu2NHPWr7j84JkNQvaD4f76ENBvB3sNrxfr36N8NzQTDwdBwHcQN2yeA3bbuhMEZmQtLPgQ",
  "key30": "3EyK459U5iguXxXhbCPQpBaXUB4E1z77DpYa6JLeyVQvEPwbQcqojQcLc1eevh6d4yU3vbYfXfZ9yjM8febba38h",
  "key31": "28RR5WoTgzunr7Nhn8hBk8EjZs5mnSQ54Ui85r2VbrMQoyckYSwPjzKHynjq83a8EH5krJ9Gh4RQcrjCnaVdQo6t",
  "key32": "37NazkiYnqShS5t3sy5rKDCxoP9FLL9qVJGvJhGQ7qmrVjwYJ3v593tMbzF16D2MZB9nraud87hS9EK5RtfWuKqz",
  "key33": "4NKksPJVHjBYQdBbo7Syom3ZYeqvFFeBNx2gcE9rpWBpGpg5CbpoNFtbuo4yeCteN6QDfhcfiwyYLmes8dMUvrC3",
  "key34": "3n1hixf2FVS8XKSeFWtFAHMhyUQ2LT7nezZvbQiRZNM8kGFnpW7knbA4S5fUdiwkUnqR3brVChsEBwZhUmzsK4KW"
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
