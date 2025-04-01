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
    "5UgDGJw3W7CijxTcwtHhsRmKascjP9hS4tDbafi7JDaCtDfe6ctjoMuaZD2X8LfL7PNpmZNAHtKvbhXYgvWFyjrc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o77W3UCnWZf8WrR9JJLmQWrc6uTJkWDjYYR6BcoqD4BxDy1qfCdAm3YqZCRZhZdnSUPVeHFHbKsGD4f8PM3yUYD",
  "key1": "2aPPrcGVZGPj24DXWojA4YYgHtmcAmDaeX2QFnnemfFMKvPWH7vKMviMfEcMicMSwqV2E5tkRE8w2YHaNbnGtRc4",
  "key2": "4ybo239SRkQMFkUBMDseMkzhtDe5R3RvDZyYd2qQtsHN5Pv5GRHZb3UvecSDKeLSyPDJqoJ3A81XgmHwP9wxgacX",
  "key3": "31N7W3bgSNbfCfMkbF2sNd1TFZCX61HgQSCajehwxH6j7ujSs2kNXq59i5mXouxSnd7YuKwgBCzvt9giAuwDSPBP",
  "key4": "8QsgGp4zw8f2xMJwrUv5vToZoNp9GW36HjJZYERrnUcaZC1Eo2qAHXj8Sj9yYPab6dThCKVQFernXYQAdjvaUS5",
  "key5": "37EGzGDsGR1yW3HSzzgGtQBepmmmfYyuA3TXK9y8rTKeTJwp2bTCL75iqpgbB6MKCS4UGxoRkL5WpZcKABoTTMjg",
  "key6": "28fzsLj5F9P9gmNmoque5j91SRsUQtKX65CU5xcoMKXbBXgnqB59fYRDarj9RydC3JX3bZvrXxPpdpHRR9PZmrcV",
  "key7": "4eoucf9iCPepiYbSKTkeQREdCsrTU9mkSupg2qGzaVMBjc4JJNJxMCdvmthVUodrVGdQjh4Jm8aWTZ66wQ8Vwwyf",
  "key8": "5sPdg3ttR2ZNJMMH2JV2Tayosi1wZAnaWhapkuH9XkgPpGRMFq7FS2d17t8s24mf7HZCxT6Q886ACMSC8fj4BPgP",
  "key9": "3SLwhofCUaj99xxpMt74cyRGjzD1DqJMvszvhCdPkemAsF6TNQLGfyL23zZaej3YR1jDp3UruVaWNuDWCz7sfNR1",
  "key10": "gdSDLwYpoFKbMkrDgwEfKKkk2np5xsTUTzZQQjLKaa8EsFXAj2TFLPiWD1uz963QrzSurkCuoPhCBA2TTgsDCd6",
  "key11": "5CrDMyRGrDGpQREKykjJncUdkQLmzKTyLy6cnjen945EN8Bowq7w6RA7gkrG3nTWWBkmfBNs1ZVkc78GPtP7FZTZ",
  "key12": "5jh5ERBMSEcXni4BZoVcurHrjgjJEbE1xjB4nt5XJbmQPqyJUg8o97y2wgc6f1xPRZt48Z8wzkWBV5tayjhJMLZL",
  "key13": "4QNetvo951wLVAwpcazFNmCwm3gsukLNV4t14Y1aSYKw9gLhkGeFLjx1SxS6vwpVbP9TufZ1diSDmgBYtPiy14mo",
  "key14": "5FzV6MAq9qAW7WH3xiGfqQLx4Y2SPgX4aJqG944RkcrBXGS7rcSPMoZTrvdDVvystcmmhMRCEfh63L24M7DkZzGL",
  "key15": "41L4yC9Zab7HtAywD1NzCRuByumvR89Q8gQpE7W6PxuYH963eJwmDGk4Npq82uzXF4dYNUH56KCyVRzNSDv6UCeW",
  "key16": "5ASz43ApHJqCvRS1CZvptAKsZRBStqMYgZnP99sKNGGYPBHnmXg4rt5G9hfDW2hcYwryjDFGdLAAHWdmtvuU51Rc",
  "key17": "4b179J5mYeGR2WRjtTUabNB7a3wgVrbBy9BbC54C4X1SoBxx999qZt225qoPgqMxkHFxEh5ws9EtdvxwpaRXhiLi",
  "key18": "4iQzFMCHWmPbFMgJWfwWq6zj9tNvogCUU7R1gdyh515yqtXCdyQkH7TwYtduVK8qcVFot5aYrR5QVe63MsWBhkwu",
  "key19": "2PPYNqTthUYPU6Hsaq9DtdbGnsd1k1FfPorGPSJVSzBe3YorWkrMekXEo5Nphkn3PKLdh2ekzkCfENQZEPCmYkCK",
  "key20": "3X1fqCMAheF1XULkMMtJ64n5AQLPDYBUjE2KXYgP9QJfwSqXiVvQcZBe1WJbBQwdwMdjPfP7gTQcRThc4ZVWef6K",
  "key21": "5LM23y4p3bQsfzifywdu9Ld16FKJX1Krw4oMmPG2gaafokBSLoZmeHotmBrLD1Ney2G2fjcC5xqmc24oJa6gbTd2",
  "key22": "2fLNKpPXag6iTsV3nXsjHAuBrd6oC5eAmNZGGVkasMBc4tK6no7gpNrMyCb6Xw2kDWVSSMprFL3gP6LPobSGrHfo",
  "key23": "28kQstnQgPvbJ9y54WFL2xvS4HgFMU5dC5rChxv5hSz8iG4SWcW3nFTSZW2798oELG3bPGaDCjnV7GLMk45pEGuo",
  "key24": "5gR1s3F7Cx5ZVvwZW4vR1ryhMLameZhRmNzR486wPZNkgnQgbGWofkr31nJRh974f5KsxVVYpAMVUTAbtUxFXvc4",
  "key25": "498CvYvXXXho7Nw6YSZymuPzecEQBd1yAoYiSAvdwaVLcaS7cfrigMb46252o3AdAz7U2zLZVPfgpruzM1jcVUfT",
  "key26": "2K28KjVBe1hyzE5DLL4B6bS1bLCNZ8Qo6fJdbQpXJSyugrpoQUzWrjrcPC67b6cp3S62e8ByycQ2ct2oQCoNzZq6",
  "key27": "5pHLpDEa4W9ewDYoiYFZ1pt3QAgoyHnq7hXLFFitQ5jEo867MBaagdn52coyUFiGoqYiVzLVG9DsysvXh3MuXCGj",
  "key28": "4iG9Gu4maupqzeKKDaHec6bdeJUEUdQMmuZaFi7xzqJt1BhukH9Yb2RywcTZJo3Hu86T71bQmMTTkra1gxARNQgM",
  "key29": "4syJyoiPzMoSL7DRkC9q7Fpd5jVRUhHj4TTyrgRA2YNb2kbRYCJgTYHjmZFKrgTZ9bR2fpaQA52USa1pK3YsnsvS",
  "key30": "2nz7Tok7BwvbjdW3kizPx2MXmJBnFjZqocgs9BnPsr9mtv4j9C8VX61zqtYjd6iJhs1QtvS1EGufn5zmcwmWfNjc",
  "key31": "3uWYdxSa841LdrTddvaYFDdMKzYRD65wppXTgdwDkmRSuqLKy96VQzhKHz8SSxb1PfwLWfxEpNobhZTorwwm2Ws4"
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
