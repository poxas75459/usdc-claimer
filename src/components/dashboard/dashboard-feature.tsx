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
    "2Lif6VP2fsVdX7K45fmoFypMgBkweYCVapuuaUhi8fhQNzfHsjBPkWn9JfskFQZXVci8hA1xc3SuTN95pfUedpW2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XAvuqkXzspdGVKUMgkh31NvoTmZcWnH2S2F8k1v7F6QueGyJDdt9sn1ovGMd3LK5otQxCjwhvGyQGHGepHErQcE",
  "key1": "65uyeaAVrncrfucdTfSWiwuN2Q9irkEo6WeArsDem4AL2XNJzVKcTkeZJ1Da2QdtJ9zNSoesBwFCMrtCNYS2CcZ2",
  "key2": "472pDcZoTN3vJsu6J7K9nPVr5EqKxwEtxkWwjP3PS1KYBda6ycXUZRz4p7mYvcrwGeKUzcXbSjzpLpDHHFkc6TzV",
  "key3": "2hCpmnrPgHdkSiixWYizgFPf2Nb3duGBAFhFdz4G1QHM8pwRiD2oFUGadLwRRdkExN7vjpYrMZwXcN1Z5gmXEgSm",
  "key4": "2cBbeZpSMouZCbbyVA9SnUxeFgDVBkjjc9Fh6QfaaThpHbADQ5dmEM4xvVophQdVuHAnbcj3rUx2WNopxVKCvUd9",
  "key5": "2ZE3yDG56Z3K7t4LUNCS4fUp28imoXy849GnDh1oYspvAVt3HJvakFaF9y2hJht5unD23WW5XdDYMWSjHW8MFn1z",
  "key6": "5EHSCgG8MnA9EwQ8LGJq3dMJSg9ieHTKGoxNPoZVcU3CxddTCPAE9yTn1fkh3tKBHtWhHaRNx7SoJ229JeyPRSaV",
  "key7": "2yarT3wZiAmMf3BfsCvEx1K7faD16uTvDudC4iZcBFLXokkaTNxV7C5Aeu4SDC9VDHswVJzsjfsjygGuGVx18nEW",
  "key8": "5Zg5xDf3H3iWc8ssyYyzAZheoCFvkbrxtJLrPaVXfddpPAytFsGqfTEkBmyYyYU5UqqMMVqELcsJeSmVmSo7BAAA",
  "key9": "5QCXvorEaRsbvgeu9wooy1fKep7gukXHqoBCFcQkbugRwkvG1Byj9c2eTLXrn8QGgB7jqbCjogMAeN6QTRurueS1",
  "key10": "5XBKswjTKrYLsn264vd8B8DgQoQcyK1kUVCTwhM96R6GxL3bQuBVw67edfRvJMQ9WZqzRKrkCJR7ipTHXSTUkD5m",
  "key11": "2EJGxc5r5znu79nVHWXWx6MCqZaTgxHGktqh15W4QY63Qz7wBc7NmQMsrAA3xMBsr9Yfr57yPsegsveru7NNAkGi",
  "key12": "41ZgaixANgdkf2B77TuzyK3p7q7hFEjnSnBqCuQQZpVW4WNYPr8yUxytMCfz7s67XgATcG9enarGZyd8myNUrVZD",
  "key13": "37fs92nVJZv8yY52CHciMgqmftuLhfJw7sv8SLtL5cKZ51gGe2Qq3dWf5cEXJUj6ydE8MNZPDWLDPGHaAcNKCKre",
  "key14": "3vHMAjkKcrU3Z1JSkrU4HdgTVKeX2rUwWJDxbWceLQkauPQAJP2jyWy3B81fVrCHERd5N2Db1SLqPpr6raCD46HB",
  "key15": "3B7WPXdZPkCiuFhkCh5D6FksrpZgqP9AaRRezNbwVhaFk1sufsxLNmXk2VgmQGRRaXjs1GkXXrcYfWJ9rBbx9Jz5",
  "key16": "5Gbhe5zzCMvwz7rhdwpfjS3xSDeBrMb9kwzhHS2GAr1mmqDiHz8D7f2NtEB4kVptCfSvo8kBSpAfa3Q6aBFzmUDY",
  "key17": "4b1nv63mgWYTXnc5dXL4Jt7UGw2YnTgr1HZZLYFv84ZWmqh4oBaLgiNsFPfTrYChtpVjUn1eCAwxCU55ywrwQwAy",
  "key18": "VoVFDGmmt4RmoiqvPD9XkFmq3t9yQPCw36ax4TfMF56GfiTSRcNzV3oKuUDpYHiodEDuKGfMCuw7YbPU94q9gKn",
  "key19": "3nJLQaucitixZqGCv1c1JD8p4DbKBHx8Nej8qzfn2FdbrhkLkKDriZt3sBRPG3SuSzCZWq7JbVc2uP43rj3yxRvx",
  "key20": "dkjWzzUXz2SoNsBEhFvS7sidExixUVVs65aWrwdkodGdR7pRc11AX8wGTQMCftYjvhuG1Xvjq5QmZaeV2Q79bRL",
  "key21": "4YRZ83pUCuBPBopckcQNz4J33PzKJr6hpWJWtZh1se4dEsdBMX9kqr8YBfDLXEB4tFJVGcJybeRoBRasmL6NSmWA",
  "key22": "26BrptYZk4Zm2KwdWz6cdDtSjn6viTQJPYezdmrnzhA8VdPWd1A9jaZJuuytqGDSz7phiXueSgJyVGuMFwoDBnAT",
  "key23": "5HjosBSjhbGFBdKtVW96E4QRreweZTRT1cPQ498hWWRAYAv2LCf92R9WL2z4JQcxRkw8EXLq5LFLwre3qzu9HRMU",
  "key24": "29SpFVEAfyxypModA8dqVRABbR26oiWM9M3Wo8Kmf6AhgvXv53dk5FKLV3SUxePaXr1LrdsHpi47QwqQdcKE29Hi",
  "key25": "4nHLG1gBeWheRa2LJcdEbv6BEn1hxmj5wjYgsP5QBf6HPF3ez6XDs4vbKeQPyyPkKTWpmGXfX93bMdVAJN8Uw8nD",
  "key26": "3tmGRwKugMgRYyffzfREsNPdNEzi2R2tFFX5RYzjZ7Fas2489ezYJKEYiAbk4uBaNAk98rxDU7d8vv2E7heEaAMC",
  "key27": "xZKXrNpr1LrDHTXVq2oPVBCBC6hQasgLXv13QDtNfQSLQZTh6RKtcMiVLmq4pbtTYG7fdpH8R3r8pj2rDQ8Y9k8",
  "key28": "4G8RuHBngco3gP3pJVAKenfn4c9sJcNkUJKEmt2hcqKkQjGkZ8wgDWzrVQgnuCz3meizsGqHDniZdEfdVxWnXZwZ",
  "key29": "4xPbeMZ9awL3MieT2UL9xTQ6pKfebtHVQ5e5rR9Mop1zAD8HNUEg1jMc7f1qCNJApmEbFgq7EodLBxupWo6aKMvL",
  "key30": "2w4PWX9gq8CnLYmEsTN6DdSUt6qTkc4MJoAGZf8HnxGbthPJuFAT3RD49RqWvQReCE98BgJVUG5WNP7mZ5jSLzMR",
  "key31": "4D792CHighHC6dhh8o2VqWspy2codqghWSSrvjvw9r8uUZ5kLfn5SN1pBvqMQr1MKJgMwPad8JPgBb5CEdaUxmX7"
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
