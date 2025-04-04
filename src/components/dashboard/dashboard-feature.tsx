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
    "2ERQQe5ra8s6znRPjZFnUfaY6jGBCtykzhVNXGamXNT5bhGQtTEyXdZCQhqC8wCFLBxEeuwghjrr4JH5wadPoAoD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54cVrRJeN7zUmE1nwDDrqYwnsGHmBWkh7B83KbgXAVXJ6ZaAToW51KYy3uvrUEywu3NocM8sE89HDgmRQygLMqX1",
  "key1": "62FM5hSJaNyPNmKqs183aBZAUH4FVGMjH28gAnmEesDEofChTDs1KTmyBkWTZECX4BdZaSgPxjgffhBHijJiNE9Y",
  "key2": "4AhjQdTUtP6wHwK4zSp6HgmFVyoBn7o7DMAyUC1RDUk3Z97MvY6MvYbthVSkBofbsCLyLfwgHumWaDA5Boo7EvSM",
  "key3": "5TmP85YxXnLVVJVB4PLvmBdNsdHqLD5Lkhuet9zJ4Unb5DLaEm13aFZfpTEdxyhDmm2NC4hXqwFpHVzFScWMAtQ8",
  "key4": "2p3mMeBd1wZpBMhtdtyp9evKdUqp9azvbkS7dxyGqAjwsKkbCNHoL5cqaQgoH3qv2afspgNeZB3HEETiTkT1EuMz",
  "key5": "3JV2jnB3Cd9X9oCQPGi4u9fbd98EntEuSmUQnUJaNd4AKcKTiP6ADKBhy4sHry35nAKWqCP6GtMg1TpkHBsKA2A9",
  "key6": "VSYgdKbpkDWDrMdDMDzn7fEy7VYRcVwQP53AM57MXtLAkBBes1z3MBq8KVzfQZUH6GFLukCHr8dGJgCv2h4W1aq",
  "key7": "xDNCbBoDNSR5ki8LinZ6FgWd9ZWxYgbSQXPSSw2P9v2JCEY44Uw3TmoNsTKy2kyeUacbTUxidhnD6t1Vq2rCteT",
  "key8": "4g7oTQU73qBBDzVvmyDeBYXzifFpUmhFPDUVZBw3wBq1eH6s8qDf8q7bAJL9An8VSC7fLAPwfAAGVK57dedzc6p8",
  "key9": "5gsQzVvNEtAoARkupdWSqBBoUU8DPHt6NuoNYaugRgTN7SFMSQjXnXdMaF52fa3HzRz8Ym5Wwyz2ibSjaRcbSkpY",
  "key10": "Tx1ykhdzH43krqEjfKYbNXh8xJafTJSprLj7ZPY5RswcYVJ93HQ4XRAaRKqph35gmEGE74996EFJ4bew4But5DD",
  "key11": "fpmJWx7p6onupYnYfLwppf6KaUJiXoPPAKSRtoYxLyuHh1ZhpQWjekbww5L69zvaGS2iQ1JHDApPjxt8uaTjcfA",
  "key12": "5sQvLzUGoitbVCBRjG6iXXS4Qq3LapYJ7y226kdzQeWd565orumb3vHp1Fmh8S62MsR8RYurLY8968xA46NH8b9P",
  "key13": "5rdXan9TRPrpha9jxzW8SLhRRVQeakanqVY8ADeoj838RoNgFyR2YgSHqz3JLwkYDmhHqb8CarxCqN6eKk7r5365",
  "key14": "3DLQu4Gcqy5NpYCF4k1hVhA6657mWwSkaMbaepesTuS9a9U9XeMCAAN6ehprnvWtjZUhVcJU9T8fJM5YMb9QEvb5",
  "key15": "4cPHCwwWWQizoWssXrVrmMWfC85NybMRpvYBWU66zPAVxy5E1oxusRNUkz4ZoKmyjtH5v6o7SimovhXUzh7cCZEB",
  "key16": "3s2mVKxyuzpov8htShmqQDpN2DATcHfudt9BHoiDVpLURiiaEvvpiAsqwh1uhxKZoQ3tTT2mYSkPtWuruCDJQ7mb",
  "key17": "2nN1iVD8a35YTByxRxiYhMHxYyC5W5zRVYUFUrMix5aLwJsMX1vrpyhrV7hFDQPuuUB3psPbpyXoQg42JMiXpSy7",
  "key18": "2GLKuD8bnxB84THeGPoiHniEuG6fN3nYS9Zjsf8pxMGqbYrpT9VjEipTngPX6HBYjGsdA9SniNiqbtK3iUGTSZik",
  "key19": "2os98hShTwcmnMJgjXVfKsskBhgDqrcALKav1TYpjaKUewuqd4k8JtfEukW7F17cre16TTg1Vrfb52wTLAwGCvK9",
  "key20": "5zffWJYtnxLsvAcyWU26qFAqoz74a6UbYy4CRau9EY5MSf7NEE3dTZVgHGmeJ3qXWDK5qyVfHrkUVXDHSUxJUjPw",
  "key21": "5A6WMbPbfY3MM796nVbeDSWhP5jNhTVoRGZoYRLuPg68V1Q1i2AQkZVxmu4iBTf6Xza9c9s1aqkMQ8zdPv7AP9RG",
  "key22": "3H35rg97FVUFYFohRs2Ebrbg2sJFEYQ1SgxWsCDoMqaexbBraK2e5V1GtAWUYVabdt754VKrXyqp8tdJW6EmcQWo",
  "key23": "56e99NLDNfMRuwcmW34u3BSqNnFK7u8N3NzdCTSZngFYSB2vXZksiw2asnYpmXN3btVDA2abf5gySW5jUynnJYs5",
  "key24": "4dPx8ekmnVmaxL81HP7iMN5d3LRYpcF8vjJFxy1mYyhv41WkbyFggk5wrra35gouvpJ1iuEUJAeTGT221R6rUUYQ",
  "key25": "3kQ1xUSmiWbweicang7GXmxxJsN3Lcd6hUAVA6dFLdwjwmBUdmAqq42xNfyXvrPWUCrZKdEX1eJGauGm3FX8iHMe",
  "key26": "3r626cPGYNCseNA1mK8Wfv3zMWcHFPEy2vBFTX8kEL3EAGzUENTRrSpPT4SqBDmSa1X1qaZA7fHz37b4MFxuwk3R",
  "key27": "2Lp4JBhzwGAqkZZofNsosgqvvTWs1n3wykWLSdgPCeMRkHnrFJVESybMmKEe2mcCG1qMDNFgX1T6gU8YqbThzXPn"
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
