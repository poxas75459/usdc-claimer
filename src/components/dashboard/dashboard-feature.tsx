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
    "zQAdTV2qYifTocJCPK8xaxvVLiVErL4ne24xgwDbkFkctRKVkxmaWJnpMQt9MNaWN6i4ks5ZayxBtznW6PW64u3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BpxAuNC6fKkZTaQYSVk7hk4yMcQdt7ehtsEfo6gVCjHqkAPsUXcpcRB1M4vNbBXP45n3e6xtLUgTW8VoU5RHNRv",
  "key1": "2mRMFAnW1Cifmuvnun5oTNGP4zLHnckWzh9non2v7daKUZU1sXY3A5mZQnQ29mSnNFBvvPGqXtUJCQk29KEhsso4",
  "key2": "28JLjHVF3uqq7u1DyQB3nuZMcc5iLCThNBxzyAGYMuU2wuHzak1RdcH3FWNRCXARUvveTETEVCanJaoyCPQUHWQz",
  "key3": "2VZo3hi6RvfdHhTYpkcXrbsNq1tQZLQGRVFpffLQaMr8wkPoKk8UAx9MBLeuooHyiyiyH9wwBHKhF28SJZmAaTrY",
  "key4": "cpiCoiXp3PPabvivEhrfvg7BWWjBh8Qe55gxB7xCxvWo96jLMPaeW6qH1sYLM8L24Y3bMSnBQqgbGxZYL6C4HYp",
  "key5": "4BESYU3tMYCAPnVHgUUU4GuUhc5hTJUX2t3fTiMGHiNhmbcZHA21FpWY7E3uxJyE9UZKRuQLVFSrLZGFdDhWbAD8",
  "key6": "yTUAAXxL229B52iRvpw3TABkE5ctvbmMGZ2owWFNVNWrdowoYSSCfRy1YDuQNXYbrrCJQ4cicgYizJevrcnrxxH",
  "key7": "3kXoUKvbxjD6bbnw1kFmH2WQiBrVwRQjS7uHhh8kwikoo8X1pTmZpb1ZrKBVKrouDVRu4j2chkZFsktaXQqWG9dD",
  "key8": "4VhVVcmaA2dQwZqyFdbkoxoe7t9CEekGAWyhT5K2DaZWmoC2QAq4uKyRYDjK9gz6KAHv97AYP7uKcucB6vYM19R",
  "key9": "5LyCqv7PkgmYVnF9Gv6h9vfGppFUdmwpyoWPE3PKFKwm6YrnR5gFL7bCPBhYpqC2EMZ8U13JVNuVBwgnEALKJC5B",
  "key10": "2ATP69rcsXxSwDR9PUMyHF2tvRrYUGStqUCip2YERWFVQLyAa35tscCdzi83xXV1itEwFoGQLN23rTWiFs4f1be2",
  "key11": "5gsvtSTuAqFKVyDa9CRrbEcokSvtwjj4WcCi9eZZ8wybyu8AJhs2N2dffQTfnAWKKbogc9Wh6VHFk5HCSxxsFR13",
  "key12": "5URW6onf8B7cBouDBhYis1VBWqdncRCpS1ZxWgVDXuLtW5eYLtNYNbPdwzbtktUNYThJ9QnhniPfJW5yT72TiEbQ",
  "key13": "4CqfyKAHUHpGtXf9cb7hLqc6xmWLaiNVnXDJKFG874vbHU2jbQ3TPWxYREqyp13Z6dc5iVrQyPKasvEUpyTNo1HC",
  "key14": "34XuKNH3EwLwVUZaFumBUYseHQCesstcUuWzr5P5TvtLcLvDqL23php7Q36e5k9LpnWWJjUQ6nEnDZRzwYdB67bx",
  "key15": "2xgzeLervHCMX8L549nNYLm3VQpASUnCTcRVXi6NLhv846KGh5pY6BwciwEv6CBzGcoJijzJe4ZPJm7tcuLYah3X",
  "key16": "2reBczx1EdaWXfQRSSWozrWSYrsppxWz8zg5fDrwvZ9tMJWX8VzoyGdr2N9qf4s9ngEj2ao4x6MxCdhWGbfS78TB",
  "key17": "3hjVaYXatKJSPwhtpWGqFLSs7x5tZ7He4btvcKWBJWngjt5Fnfwh1e8tyrkUvxAJmW3B4Y58SeSwppkCjK2k1LnV",
  "key18": "9Tugisb1KXWtfgAFka3uouPsiJcUmeBvekgG73uFzCXTaxgV994MdHUvMabariubWFhCF7pXK8vJgWgBqdMtNsL",
  "key19": "28MY8BD2F8Cosbz4uAqVqggDevemr29UmqchQShQq5BUauHpuVRmANGwLVw487nFjFyUAFLBZM29a8ZntvLdksgy",
  "key20": "4do4sWyTEZUNmGENxnetYqZV8fChkzgFVhE2TpxwGL2x6vU9EVvrfLmmWtDksyMBYLA2x78yVq4y3uwxgV64hgZL",
  "key21": "jgtMD4M5SU9QNfpkrTUtsg2cXMrQ89UrU9U88dzKgY7A3nLyq7EdQvooTSyChEE5k9sv4RRwTNqVZGLAJMNAcPv",
  "key22": "63nkNyRtaTCL7UgfDcwTqkFz524Z4FPa4sPAo6GrN3mktGaRSQQzNwkKtbXXbMv1ic3N3NNqB34fireu8zdMfu5x",
  "key23": "2jnum4herMB63XbDbpazQhrkDrjv9eB9vJ2R3YJoJvT7Fxu5jGdLpUgKY3yzDf57ZCRVTqDLiYt4JEtZ4RSWqKcW",
  "key24": "5yC6PFjBXt2hCCGaTEWR8xohAJf7LhYgsB3jEHBVjzpHiV7tvszDVkMPcAwrLeXcityU1vKMQmTK7JheVLQ1PGpt",
  "key25": "4a6X7vqFtREQ7wc7eMLGCy7Vke4SbY74GZ49ZaAbg94CV9ykZQ4VaKsQd3YKNZ8cSCA4NwimT4Xg7ccirUBYi95K",
  "key26": "5BEP2h4C1NYQV45unqoVYgVyYhj8nyGC5qtRagYWxLS4oTH41j2ruGMDUb8YRDY63LCgni1ebsYKTnVThpaUW1eS",
  "key27": "5r6ffNvHbX6EVKnmqoU5XJNc9qu6HJrvdnntaXwB5jiRy6eQkA1XKurmrNHGgSoh3DgMbpgh3jsXs1949MwVxw1X",
  "key28": "44Xf68eYVbSo79CFAuUB69NP5Gq28cZyxxgKJcd6YDnufNoWrN3P7aATmd6AC1FNAeHhtptL3LPUqpevm9i51pDA"
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
