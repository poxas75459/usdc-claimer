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
    "gqTVR3HbyzjYFWiiWCj4CNHe511ZFCg9DUs2km8CGR4pvs1bMCRptLgv9oRMbhhRpXYTRiih6TQ8fuFV5EdzWU7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rDw4k3owmtm78SzNyTFNFLbZk64u2K9VFSNwnMw6MqkwGNJPTMNryMPaBB7am9Tws23tqtfozLMNFSaD8YzA5Pt",
  "key1": "g3NPpCcQvrdRWWhQJxR7NdSYeESXbQDGCXxLSdLxeixgozfT3h19Q3P7kkCdbcNzpHP3pXS6tmy6LoX1XdWxSkB",
  "key2": "3t8NeZiqA3D64Zkx9NYgQd21RAVhMnBx1LBY4v5wnzLTbVCcKe4gya4DjNGwNnvPXA3yjEUqwhfmM1JityBjkwAK",
  "key3": "4ZvnA6qepTh7Rp8J23jQyFQw4rFfFSvoYYkiwURov8ioF2URBLstpTDBszDtMMEbPfvbD7N13pbgUH8Fevibmgae",
  "key4": "2etWdNFGWtCdYHv61FdMy2Jwr4vsLSFH46nHts8kRPJbHMRm6gKw3mxpCZzRYE15Fyc9shDRCet1JNYTNwPNh9w1",
  "key5": "2UwBAG5U4nBg11hGKbtF7fDuTzdxnz9MapDyPLV3jiogdtVfeVbokosVuq1uHK2FpawVqPuxRken1kvduSTmrsWW",
  "key6": "4QgQAoCoGnqnzHT9RnLtg138CEbWTjLYCYcjQTBLmoftphtgR8gjezj6gZJqAF91o3x8gL1PxzueKszV7seRrmDP",
  "key7": "5VkatdcAyUjuYrLJyUi1xmckGMZMX62Fi2QNx2wjUw1iktjc92ceYmZmfYXmzqHDz9nZeD8J2v8fR6SaPBusd4hP",
  "key8": "MJ6MJDWxgq7St7XEcn1c5nSrL64qWJCugCgSMvM8aixi325NSmPi2WKQSwKVNbRExADY3N4cLn7RwiSC64u2o5A",
  "key9": "35fzQaJ63unuLmXMLB6PrtgEWLMt7WQr8fZm1jFdUsYE8rqLtMC3MrcnJ2WmwXarRC45RGLD1yLKBS1g2DbKnZCf",
  "key10": "2aQWZCi2DZcDwGULUTyzcuMReqEYS6cb9AQfFAVxHoT5LTTDvfn3Ltzwq9VhTMnqbPeQGh3mgj7D9t7QKK8zqbcU",
  "key11": "4Lp5BXBNe4zt53jDyXvAEb5o2zt41BCcgdT6Xz5DmUS4n3zaXDAz56p4YzfZbYasCHRrTVxuygSKXsmJ1p9RYkXu",
  "key12": "4sY37JSRyZRb8eov6QjW34mXyadwohk5wbypKZkg3frwvBWrg6NLegyAPrS3E5c9zJthQGuL4mNT5Yrogt9ouwYU",
  "key13": "EDo9ubUcq5QpRnU4FsNXHAdbTU9SBkVXXDtrdTaDBDenRf6tjC9kBYReL3UZT7BTKX4tsBgt5iKtXDdjAjYsmGY",
  "key14": "5qMCdMRsKEdtTjAx7bNfoMp6aJRei7vEm2NGEakeVPcahvZjUxdgnfybvkrhzU4xTdN4PYzPrKswjxrA3DAr2wtJ",
  "key15": "38iTWR6kZVnvKjF9WTnJFNXQHtdpn3MMb9RYeFa2rCcUdGgnCWkFMWvGmowDbFKAuJfDMhuzKN5J4QBS9KJBFkEb",
  "key16": "4wuq4pWkudqAP8hSAw3hhqjWLQLbkP1TM11XSbWpt8838fiuaDtLwRzrFDtW2wjHuh8XNV2oAkrTXUDEyV2EvGFw",
  "key17": "4ogt2wroa37zFp3XLvueSdXd18jYiKUegYC1ijQKUjkafij1Jw31PTerHGPG4RrtnYE1YHCiaurQvQSR6KpoNh1Q",
  "key18": "5fKLFXpxtjeGKBXxFmJYgZdaJA7HxnDRSJ5ZYDSt4ZQjayV211eNjbJopcoQuw25erdaXh6wcHpokfRniFEyV8UE",
  "key19": "5RHxhMTo5THjD22U6zgQU6UxxGLcEupgxU7theGALCEhgJYSTziNBuj8wkgNtK9M3eFgoR9sFUuTWESr8TDWeUAt",
  "key20": "2JZ87NUaQEuFyeie5hqx5GVHYgXZAqd5cy97Qv5CXgS8Do9PEVMCzeAJ6Sqn1Dz61U4ZPonpjgQ4dAPR3d9Rh6NS",
  "key21": "3z9uuG7kaPPyKm9EgyGf5bGbgJfnfFkB4tFgYqgz1NaCGFzaNuSWDL3MLKEWoHdGuCwkGoKBakQyHSydZn8xV1BJ",
  "key22": "5dcmqFahXMSEKw3ehpjbLAVCwKNhMaZiHPe6ig1QfA8B29KXEb442DMXUtTEHMW1XainCFam9roKrJC9aooQgGSw",
  "key23": "4ZqzP487XbngK6rAQHEHaYQr1nkoh3vjy1kDyey47XVrNGb1FegYBJt4KKRTsDyRCiuU2eMEPXMr1oPnedYRnEBL",
  "key24": "PXpEeLuFP8WVq21KerwB9WbepiXtMNV6gsctsz2L7tvWtyiGktYJkXp4BeFbiEt8mApHLzck83vdZQjJfCfPZZu",
  "key25": "5yeQjTUkbfPAYoYf1rkMxiei33XNjruFYwoCLEuJpDKQ9eXvHS3qGZwZHc5g7fqVBmvKcfvtzwtM1fkGdKnrFJk4",
  "key26": "5LStupaVoSvuVmLZW4oH5pvadQWdMtdXcpUcaGw6B4NnnDLnwqy7BhsTMnxrBki1Syewd4MsoJycKSt8Ga2HKAd4",
  "key27": "2XHohRNT8pRJ2mpV7Zisz4F7iGjAEZJfWeSdrku5GDWYpgwXUjvzJMQNxhu4nQSaojQBTugTmpV7ry6DhfLqBacQ"
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
