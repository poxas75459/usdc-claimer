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
    "3jcNFRdTNVuFQ5HMKzLrycNRAdgc8iiJQwEvtMYhwWs1huSA7rEpZcZZgyVVjFvFoLRjJRAvkM64FfYSNBvUoBt6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "255ieQDaNYXmLGQVUAjGH11bRGGWFiCYythLrr9w4zE7dJrZvmmAJfBzHAuJdhgAnmPGJtqGXN31S8F7Hzasw6Yy",
  "key1": "Gw75JPejLNgaq7SERWchEsr5cwdDCFLvEyQQx1Zo5XXhmGxTMfX7q96JDFznEG4s6XbynYomXfGMrgbNxmNSDK1",
  "key2": "UAXnwfsUwBNuWoVTuow7PjtG1oo8k6E55SiE679N5U35R1u26J7qRVHYK5GHDGRe6Y3waWScjsZU7sGGD2gPRex",
  "key3": "2HqoNPTbzucaeCo6wD9G7eGPPoF6nRZsTXanuJaA7evQcig9BzYkUQBzgq1yYji6DCbMSoWFkZiPCZjTFUCJd6Hz",
  "key4": "5mAWSwb7VHarGXAnd8aJw2JmJ2vXR9nK11v48igbtpZiRMG5khzEQjsa4ZzcFrPSg3EfvsTjAx5eBHZ6MmgaHgKh",
  "key5": "4WBG3qQsn8rSLcXbTJgGmrZ77eeHxxKu1ZzaaxCFxYcdHPxbZnwWCazMnZyhu95upbfmkECUjhBm5jyNuP9Jo3Sy",
  "key6": "52YVjt9MnBw9AvHXKD9w2C6gux4fjjAmPN26mvEKfmPH1G6RmXRaB5GwcroDutJbXuL6EShzRBpZmh4dG9n33t37",
  "key7": "tKZcGJg5jZss1z2mS9CvYBwY3JjjGFY7dA4rGiyWEZ5qfRerdHH1zsspYJuNcMTjE1AaoFp5WWG6afje426GCpT",
  "key8": "5wYvJWjMUCCcVRxmAqjPWrXY147xVA1SyB1oqraUgixjNbngBVVHQANdSYFRWoqz293vgpe8ZJEcFJKMENtsAHBk",
  "key9": "2ACvpxsnLBJ4rEeV73tPcGusLLy21bmCMtdMWvn69V8vHdUvFXWfheEiESwwgZ8H87g37JBY2LHDMQ7XY2WEkNm4",
  "key10": "58drVi6RrNx76XhSC5mmt1zwwSZpXKzgyNzUBCSG9ESayM9QGqP6oi4asRCYV8Ap1xSSCeyobvDzmn6MowW3StVd",
  "key11": "3Kp1doHKBVD1BVWtTHgSqkX5eFZcxwEBiPrYAabuJpiS71YaxNK24Gk5spztJD8iHrKZQMQPV82LWLPBH3179jSD",
  "key12": "25vqDMUUx9KJNGAR2wuZs8iWrAXmhAQb5B8EaTamBaqHDhtG1Qdb5tpaKETHGvsLE6nyMF1XQtfB8ZZVwKjaEs78",
  "key13": "42KAtTL4UwzYQjS5PmCpdhLr8fAZmcw48W85NNpb1sEG7pZcLxPnbwfJsX5ZhDcmqyDwREDt5Z8Aff3NLjKxBG6C",
  "key14": "2bRqQmsfKcojjqCMQaDY8ArTJNFNkQbnNRzMaJwuhANzL6WbSC9EJe7uXA1ebSb7K2TDdQQB3CSWcohvAZnDjrCH",
  "key15": "4DTnMMY8mWPv9XD81Crq3DqxAmb27sgv83ctKLCSQ9JcRLEVm4TWgMGnxi3BVZP1eMPg298Py8UpdGgvJCZgvKfp",
  "key16": "4VKnuAWDLF7VmmdqaGQpcnpWMmX62PpAozCwuXvtE4VuVHJPDUUiUjNPkM4Uq7estfeUcR91B8pNCG4JeDH4zVa3",
  "key17": "Gx8pxzfHFKdS5kXYDcGw5uCW9cSkWfAnntFPUkHU9K9Hn776wFDGGFs6ZLAmJ7ZxMpbZQdAHPkbDGwtJoNKsCN7",
  "key18": "331CHqFMtEQV6yEy58sEnwBwrzQRU1Fd94MPHhkS7oHHM57hNa2GRkby7Bo3zgqAPzyAymcEvvhdDH5eraWjbK43",
  "key19": "a1gLaqgbYwnyz2kHMfvnFEDq6kqYNzLcepApLJK28hmsXw6YU31GEGuVJ6TK6BbVKN1MuZsJsdtY6Etyr3mbr5X",
  "key20": "ezZGvzXVgJedAgi2579NpDXsYa43v8vPSxMnkJauCqKUUkkXxkhdGobHsWV7CJDqVtzPFW2SaGd3biLb1mseW6J",
  "key21": "5ejZ5hUASPj9HStDdRAKkwKPHt6ggRVFc83Z2GPidAzmzTkZc4LuB6p9o1YPh4YSVw6thiXt23eKqGSYuWbTfpSF",
  "key22": "5VAxQadhyC2xhApcNQrW8pc4nCSCybqkXDbGByRGpZdxH3xsWQFfjMNSdjGXDJGhCFoTa2XyUHrZBUdSVHtWypPv",
  "key23": "GKpQohvdyVibVTf4gjnrNGab4Z24s9pSGi2tUWgj9UzPAooPLvZtoKPktybubzA2NLChECfe33vHWtrykAkzt2q",
  "key24": "2XzWrMJzD3ocUXkYwmqCrvrCwssnma4dFzN2ChGJTUTD2cdxYEigW6PqmVZnbRAk61DfVRodegaczoC2bxreQaQJ",
  "key25": "5zxmE1QLfHJ7vetoezDZEhKSuwQcHJruAxLzgMVX8Vb4y1F1y1tgtsXuWo4zwNLPwvxgjPakJEuBJAHiYS161u9o"
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
