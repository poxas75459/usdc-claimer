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
    "2LYq7hkWCHaEszFdHAPwAkf4HyD65rroYRSbmbkPK6fkVTk1u4RGPNS3yEBNrFQhFugqxg7cEFmi94TrhrUZFFk9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hmAcW4xqvwYiZNk4XqNRDyKNxLPfcT6RGSQwbac77QYDdbHtFaHKtK9WVojqXTfgG3gBNKGtwr7Hdzy8GBiqaZe",
  "key1": "5nD1NWgunj1hHfTayTcyKtAJR7bJqyHncEzpLCqwdLn3MDNdSvbvA1n9xBT6UoKvG2WRpgooeeMFbWeVAVx3nRrW",
  "key2": "2dXPHHAF65q6JJ2pZ8hxY8YHcFyf7MVnP2K8wbc6xfw1odPMvPm7R5f86Nt7BopECn6if3wfgdWiFyw1LSLM1pPT",
  "key3": "2ZxT4TwYAZAGbffvUjrSyyuDfC2LiVAvJWp9cKcA1xadgHqxQf8umMDYqsWeyS5sU6ETc2MU3RK3ohisKcj5zatf",
  "key4": "54NKARpeKxKzmA7Toxx1ZuC8ukmYLhJ7xi4RY6SGxDC5pQEjMhTvoLNeDo58yExrPMpdhjZ3uJmTf3QStULamtXq",
  "key5": "4uvLAnVViXbev4PTqxtJCAboCbJ4y1XwTR4cb2mxYPTqDS2Eh7vNebxSE3uUmXbHiGqgWh1He6coWM7g6327Nxaw",
  "key6": "3hHPTSDFRrFu6seuDzuiJXARWHKneoJso9LjSCCgMFSrvAFFpBMyvxEUZQParanCg71vJ6bj53et9fdErk5YuHK6",
  "key7": "5xUKgT7hmaabpdKfvVefwxZfEgA2xzXbE1LyouwwfMqWnxjrfJ7qV17mLj7GTv9pRA8b2iJwqMv4otVeUiNhWLgg",
  "key8": "2k7rVA3ZR8erMxxNWQrK8YD6Gq2tNG5Dv1th3F1xYMCkWpotdEnNVegVJb2v4XJqf1NuWCP96oVDdbYacFtea3aR",
  "key9": "VC7CarGRWAuybscjVcN8sPr9RYUh7DU7kYXcbUgJJfnxGDsYjsXUXVxZGomGB5K8azggcFAqZZC96bckuCDEpU9",
  "key10": "59jos81E18n19VKPwDKUeqThAvPYyH877ywnqEfMcYTQDrwBYid3Yk4JFumZ4KennmzGYpfvm4y1nCj63soXw8Rf",
  "key11": "4nihLyGNtXQdQuNBPaPZ2KJtT77gP7YsrZmQi29nnNweg4o62hzEN8CnSLSX8egQdn7aP8SFNQetGKqGjiXFBQvb",
  "key12": "4LaS5uXNt3QEFsj3HEP2mbhojt2FZB7eVE69RbsE4j7aFHcuw7PPWXeFVM3pBqY3aDrFS1ZJRKJcP78i7NBpdBP",
  "key13": "3EHSsjvHzLunELfMrbLMnV7Pjj3u43yh9EMZRHeGThWyyeigsPxVne9sHaVQtSSRwCEe4DLj2SGvQeD8uqq5REq9",
  "key14": "4zHwafcPETgVUPjBHZ4yvRZAp5hquC2cAVQzhNqZGyqswFg7tHWP1mhxHNFGYRjdWyvyYzy1zhS2qQhN7JhetMT6",
  "key15": "4Vrp1UMwBEVsEPai8DyJJjoizdiY4RDaDtJusr1Vxvz8QY9NFLqxifP36nau52krrCGFPfAMwfi1ubtfj7S3M2ce",
  "key16": "5hUsiZNkBccwRzWG5rR6bWiMwkfUVUMPVGMgp2o5gjLWATjKGKCrKxjYiqg4WNxU6b8oWjW9i2b5PLPL2kkWiTUN",
  "key17": "4pvYG6rr4Di35VoSMrZ4jfF81W3kgXagtC1DCfRSzt92EN5AiVtUiqJMMjVCsd2teb9XBzhw55tcTjDCA5bKtEBL",
  "key18": "3n1j5WXRF54BXViJMzQ9YFuwpr5b2mdEwYJ2zdvsV5ft1PjCpKa3XYSaHSf2WfEvPqowBveoGDK5qgMemY63Zn1h",
  "key19": "4VsRpCwjvwV1uvPRwjhQLW3WTCGtNx65o9HnrAncmgZrhF7dTjtMeHqeGRsgcg5osn9boShpmoWbjvHcofrzxdHS",
  "key20": "5iRsk2fkFivdw16qTNSF64CY2QVus5yutNCLLuNoK3pgMCK9rCqurndg5yzkBBYDg58wWfxCjthDGJCgobdFJEW5",
  "key21": "4PTtMvhZ8hYU3fTVpwv8RHZ19N7oBncnDqin8bhiEXw1FxBvDDfsvK7KZ2X8XvesWFQBwxhW5iB2d3hkiz9PcdpZ",
  "key22": "2cT2xWoBqJ37ipiCbgjDtFTvoRDHyW1mK4V5noibjppzCvBPu48hq66GmkyfYwPb1DwZ2E8M7ZoNRpV7hBkXuvEw",
  "key23": "3aa9JQuspNrXp8upRjZBAELeTPfenXhNmZzCpjpktbBSN7fYMF7xB2bxtYk615MdrZpKsnbgAiGhTU4Pr2SaFykc",
  "key24": "5CUhT4hLAfetCc7Qze7dBzdf3QnbuTu13kwAMikb25n3nKmgGur1ZiNBzt3jMMdcvzxg5k72MqAYTg5rbywKS8Fz",
  "key25": "3pcNBEsZZgzapTN7Rvbo5ZksuWZF3fBv8guU8GCBrAvLBPMCVhZNSQgAsEr4iSYkcyaeeSBucQPnvHeSc15hWCKc"
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
