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
    "5cDgPQ2aegmkKPVry6bSvyETvGmABBPhvfVDT3WGHD5aBbcnYtbej6sVgTvXPqKcTFL6hx7fZjns94aSt8hW3EyC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tv8g7vy22CCZJWAK1YVuV8gRZcu47CL4w4tA9jgHTqV364griyeq5EKN84kQXGbzcK6Pic5UQEeepokBG5HBX37",
  "key1": "3wK9HDno7Fqbm1joj8RHyKcTQjSyJRgBAyJ5AXoscYnugFL29dJv3zd9APdaBKsuGt6CEHBGVCtMgjgfnKQEJs8U",
  "key2": "2yxjb7Z14X3KSJzYNVoBWDKmVqfbJ4YYU7BhrHMP9uNh3Bq1vwxwZXsNVKF2DT717HWBTUrB7hWvgyQfTCJxx5RN",
  "key3": "2EGxjoP9vCGYi3PBdKnmX15c44fi1kP36m88BP98xbCeyRrEDYFEaxV8WVfGaNv7fgzeHwREXUQgMR7PmTpC5mcw",
  "key4": "2xM3N2hi11gTKY31FYUU9j5gZNyegML4FRcoXHr15ie6SePfw7oyEMzrp4pzDCGa2LDigWMLntp3dseCkeqdD1dU",
  "key5": "62f8nTDxG4Pj5sfcVY8S3y26AULqpKaz5haxd1iG7jmNs4YHGyrQE8QQbLAcwM3xVj6FoKdxcvzMtxrZPY5Ji9Gw",
  "key6": "2UYq6t234acLrsRjaEzmSiNHT5utc6gG3AKhswy8hvPCPfNbhpn4cgr6xuaanbFFKLmoEt5naGoNMf5xrYwD1u7A",
  "key7": "5H883PzTcSJgBNmsBqsiSLkqriNjVqE6WGbHVFafEN4CEt2ZmNbxdqPA2TSi6uENTNoxtkLQtGbcG63pTn3fkxtG",
  "key8": "5TYb47MkGnurzaZ2428KiyE2TUZTeWYhjbiXWmCWw8VsdHdAXTP3UB8jFkEkrki7BV2veYuKMHSc35YGLKhYVVac",
  "key9": "5osHV99rkJGUhEDPMU5zZJee5y2vsrCef9UjbpsySkhU1PyMHEFf4pDqQC357XsvpkV3U8ZbQrJtiMJngY2byRvT",
  "key10": "4SZXGzWgoGkapTxjzrkRwcp1n2u4q8GmrvPiZEfxDoqSDvcV2bwg6th8UqpSa9T3z8LT1nD2j54eV1Q2a64Mhxjj",
  "key11": "294V97hLq7gTxJ8LYHUvyQG5N8Cva1KPKMghnjuV6A3hXnXW6av99QLWXdm9vWmJWQWoJnVAsZdb6x6BknCwdF3f",
  "key12": "44RVhMR5a5KqXAJDv3mPw3srwx8nrvve1N925gkRqgNdifhiLyscKU2Q4JsJ3PPnfH88XTiEr2Vm6fTgLBeuFBrT",
  "key13": "2d4NSDzCy4dhfS2zcHhnkkRAQcveyEc44B9pocjdbwAXxVxg6aMF2WFa24WadJgMXMeiNhn2bSmrAsJ7CpXmYHLL",
  "key14": "4CU4A72QMnEE2gj8hM7Tskf3zUNQrxQ1ZvD9TifEP2cbQmwhnzTPqsjSy5U6fjpJbv8SRJomkTCR7K4mLfgqs7QA",
  "key15": "x89dCTaAdbiGnVShPZkSVM1WCdRaNs5tWGMhddu5nAhgvevHTjpaZdefQKhZYoYhSxPDBtUWfgb3iaVSpnVtb3x",
  "key16": "2hQAz54AEMRXEtxdjQzxR1J9t5Fq33tMYwSrQCLnBpheVfbQX8D7Wb11W9S2BDxiooend6FHvA4yYNN95236bTYq",
  "key17": "2JpzzwhtAPKhhq19d3nKWhCa9wJgoRD8eh5t6C5TjSztS1SuWDFTL8jiNb8fC5LpXmy1MKXeEJRLDRNzQLuiKVvt",
  "key18": "4N8ZZwZHqUsi4EB3n6KaeQjDkAvW3yTSWZ61e8ANG51FCjqs5cqVa71aFFo4Ne2GUDR2gLsqfNN5snwA6XMhzQGV",
  "key19": "2sKUbEaMkyD3mRTRTCJN9hPcwqjb7QE8xJEZQJUrUKX2ybVVrADUpDjxMCvgMoNmV13sT55Fmq5XsRq5Rq9q57Uk",
  "key20": "cCuHpmwdNQCs8PZyxk3x4EovJs8qT5yuWFaAgVgPguYeypwstH9JNw5eSPGgNVhmCsaeAz1wWM3Xbz9uLGN8Y9F",
  "key21": "4hFFLLGv6eaWftUXrPeJZC1qBMfkc5x65cojPzRUXxpmK8UrC3imFvrUQNQocRLf9TH9EfkHDP5R9RuiLWwBhgBB",
  "key22": "286CB2EmtKDEJLsYGBNsf1rbva2JZuLjUdLKVzMTgC1ResHVD5WtVJq2S6ULEwRPiRWyFYjJawpMNkUS8Gbc8xGd",
  "key23": "35fapBk5NGsLuKC3Zh4zcpSnpiwU9zsZPzX9MUZNi513uGpapdTKf7oXFUpQ14pquoGtUr33Kv1WwjRNje4xaLsD",
  "key24": "38kDWNydyKjFdgtT3AxkADVtJgQ948W6DgfsCVADbaaMR4DKRAHWqCyfHf34o9oL1feiLquTftQL8VbbpAZkpUCK"
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
