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
    "28q2YnViUFpmMPFyFsp6s5f1G5qMoXtoAT9WJCjqkUxou2tz3iTDnhCxhuJCFtRit9NATxF2wzjN337bEqqkG4bj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QPe2yQvQxQz48fj55nVeGdg9iik1ka1LAbzExDEmW3246iyPyEdMrFaBdteXducJhTzeKMer4m862HVweXL6yK1",
  "key1": "5qY2NRiP5noiTX3MgZ5fKsx4nH9WsMvZkZLzMnGtvDhPXAro917BenxHmGQABykz4prxt2PpnKiiMWf8GENrxsGp",
  "key2": "2CFPKQq3VeCHFesbAARwWJrz1z5pLQhGMWJS2bdmRFB66jeQzn99zajQ71nU543yutw31tnDAq5i8RuWBuEXsMpC",
  "key3": "2iHqs7W8SwN8U2WjKbUqDn8eMzdroM1ocPYfkhmKbz6NGZ827TAZMfvnAbUi7eGWLrXeuNqS4ciPEUQMbbFYCRxf",
  "key4": "2sBYxxpJBQsan25HqfSPMKGi72szQYoEZWCwLrp8ecDetdZiX1UsnV7B67S1Yh6SoSufGrE7cgWVrJhwmHtfv2nY",
  "key5": "2nMGqsQGa9H5HNcCoDBdAkoeQU8AztQDr3rrr7eCnsBpaSYzhtAhWLQ1wPaUkaRVLC8DCaVMHTNg52kqGKuY4xJy",
  "key6": "3Pcqxra1xFjYfoCghkertM3CBoENP8d8dRYGAkX5SYMzXevHKvNkgqLr8yrKwFvs8Z4vqpkGennmBefWVme75pbt",
  "key7": "37p54buPgHjUypFnSMEYjreEZcD2QHdzGvyAU7jsYKRQqKER5r2EiAhLEm5jPsJCjaxm5bbKgPZYpGpWNEMV4BCt",
  "key8": "3tJzrDzuTzWoWvStjDTHAw9pPChe6gj94mgpQqfci4GmHkZ7jbsherRpqTB5CZEyQ2ogwPFm5tcQvqzEX59qpDXP",
  "key9": "2Q6DNV1RKv7C4cdmTodfxWjNpCTeHsSgtrGfbjHBRozTvoz2Tcwq7xNcEus6tMZWLVn486tzjsqqd2Bc8K33AtM7",
  "key10": "3utwzbdH5MiDtBVe1FTUPBvDzHJdtoDC8VTGbc5TaoQNc7wPkNYFPteGkEJKT3eLCrWZ3Ji27YMdwQVmHCVpEuhY",
  "key11": "2JiNwJEHqVC7A6yCzQWYQ7LJBkb134mLkAwWtcSS1nuwii2ykK7GLPz9afLEH5mk8wwGj5aGqSQnJbF15yjUL51p",
  "key12": "4uGy8SsgYgPx9jSPG7qk7mZBY6DewUNTMyGWiNGGfjKF5UUipRmeXZjCJwg34KvD7XLUSKkNBLKzji8thPUrmmZo",
  "key13": "3AbLp4wMavoGbAu2oVhMj5GAHUUZFnfmShQ6KHPf9QZMadax2r1rjgdnCZJzQeokykperVToGz46tMusbS32Kzbj",
  "key14": "c5akrQFyMLUTgyphdbsirJRyckjrf2jCDUD6dyAQes1drsSgE2kS6NLJq8Ge1HpUsdMeLeu2badHj2hTKVwMCct",
  "key15": "2BETNjhY6zuiQxvs5HfN9LrxSVnEi8fx7w4sPsZ3r5QKEx6egag9B4gCCw3w559FbN3Rcni1c47Bd2dPYcvaWyQd",
  "key16": "3cG92UWzngG4NMC8NtcJpMvCTzJGkLwuL3cFhCL5zvGPVGHucsPSbmX4TscfqohbftoohqexJWEyiuS5poD9ad3y",
  "key17": "125BYR8WvKPAEWDT3FNNJGz5zjPKd1q28qvP7xHwYfgk4x3Dsz2mFYW6xSxgXQUPr6BLbUTYJXz2G5HyPsqpiH6",
  "key18": "mayeBjyLN2jiGWxPGqCDjPnkq43E8V8VtLPNtYBqeTCPyNbSPEgtX3ciXXdgi4rqHjgWieZA5W84wvRsyVA4vyb",
  "key19": "2NyGCyNz5GbhWFuqccBqA72XsQhLMRsz6yd8GJAtuc3pWX8p4cA3YJueLZUYNTpD5MoAn5M29EDABv1pa7f7mrno",
  "key20": "UCwEgk6fFHpn7G24rCTdxmabLERVJRwxLj6umn1KrzNLCSU1WX5huWj2anSGx1hpQj1PvWxgUuPZ5LM69EfwWiT",
  "key21": "3jWcJpEn6Dk4BdKW48quWZNxDwqNCXCkp67YUoPxr9MfcMZoFb7CFgNtCWQxug8qquXyJHcdQb6C81syjAgYzVsy",
  "key22": "4LMJzDobvv4ZHU1K7y1dcHZxiGmVAUaDAB7n5FdBHNzmD5YJ1J2sMwEhNsz4dUCUvBpdKsZzCEscYtRMoXrbBn81",
  "key23": "5Ws7czvAN9f7hui3cKwEyxobDbd9dogSYECA48sSB2LHHAdWuXthCBe9jVwHEs5ECo1hRoxKGKepoXL5iUkEr3pB",
  "key24": "4EwBLcKKvTZiYEgJ9tkjoWW63SJADqFAE6wh2SpnJaBpzzhVzSoBgFsAWNeC1YFVt91ye2ZFzFg7A7BwjTEpaMsU",
  "key25": "sZLzBF9qmxmDu3ysY26MmjryUvW5Rxmbqq6r9fr4oB5tze2B5YFszifxW2HTnbBd9sB8egc2diqwo8F69y9YzBg"
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
