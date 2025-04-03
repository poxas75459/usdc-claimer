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
    "3DuTeu716QSBCfC1U2sf3jpqq6FZEcivw3Xf3Nng7jT8V85BV92KUiJX6yHT7iYQ9kNqzLEhih4eejeph8gBAdWR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y2RLafMs4YPduT6dz754xNYjt4oWjwpW6LxdDqiwqAdpm4cWRKxHwMeUPLX2DrYXTsm1KrD8CTzbuSbLk2FHm1g",
  "key1": "AssTLMNCrYJkiiL7o3KrYB5pfEnkTnNAPTyHmkPbhKQNqfQF7Z6eC2jKzuSTbSj55KCVwUuqzfG7ELxhvrYr71n",
  "key2": "2kH731rihY1VyqwStjSRLkZo4VcLYpgbfTLRa1Znk7mKRXVRJdqy6vxXCNUAmfbT2oj31QNe8kDzJUBcQv9xuDmA",
  "key3": "3X5er3NHjTYyRCj8dZSRu24cV65sskzVmu5fu45DNjkYJyygN4cksuEp7ihmPHE7Lh8grNKQqz9cY4zWSNKbafnE",
  "key4": "gFiPGYiT5Uk4gu4bXLw4zpjsRX2VbwgfpkXRyPU2PYo1foGFtcuykDtmKANFW8DXN1HfpntwHUecfrn6ncMnubF",
  "key5": "3Wt51AugWkAeDVsbEcjPTtSh8ZAFDm9CdQspxdHCybxGv5oxBUkJ7kXV7aqr2Wj9JUbmBAnjFrtYhLEqStHe3DAM",
  "key6": "3pBGpvM4XLs8PhNomc3SFixXiYXyFRFZDWEJEHr7nsKhpm8NtxF9SveoeNKkSWBymfvCgcHCqt3APKAgor74hKdj",
  "key7": "26mo5vWN2QXMQcEVkhz3JfLDZ7fG81yLrGqYakkko3TX4r68eCg2xHfMQdfyrK682XH2XNxwr6LhYh2qQzGN2Bt9",
  "key8": "59985zBuap8epMtJgJpe3Q34SskS7kwjjeBe113tbjHut511GB4oPXd4LAdfDf57kXwa1L1u3DK9GY8P3HNnaNiu",
  "key9": "27NcrqQTSBin5rzNLWkMrpL1NQXay583fsCU2MUAMYPHAho829x9GPi8e8kEDS4om6Xe3ACqCjJpH7vYG9fDUL6K",
  "key10": "4ToBVuDeUHne6xVvrwpxMuCgSeSrBFrnBECJmsgRUL7PMwCCMCKNveGL5FwovMt1pdCQaHmnbdMpmd9U7g5txtpL",
  "key11": "3YHWTcBEWj2wfMV1cRW9rFD6zasARB5AUo8XknLb66FwKtbBYKhNjLGcJW3hv12dm1qw6yeqg2qBu3TkMJKdggyF",
  "key12": "2hbvME3FEDrMZB7HGfe7aXjKezPaA5AqrD9XCUv5kpDTGcMCos55U2dk1RAxR7J86Wv8GVvsD4grYJAmHQRFZDD2",
  "key13": "BTmJYtuGLTJJyNCbSzn4N32CmLSgfJaeq1reUqvAxeEhsmgSc79CRE1RCrhu8HkFrF4KniwASHgCLEkzP3PfAxs",
  "key14": "2tn5AF6GoQ4589ie4Gg1Dc3x3BS5mZCiBjWFpPkc2Z3bhXiabFHAfT2KUNmV9osP8Aoc5hP8pFNYsHL3aiPtRqoD",
  "key15": "4Lg3gU86hhXY3EvtaNtgqgHfYLHjk94VDmhFtQAWdt1EU1C95oKuzgmbMakJA4jByt3XYpoTkCfooyePGnKmdJHS",
  "key16": "4rZsNCqCcSPfGeL8MS8zE2TDZ2TvuKDfS4G9hPciAZavMNU7uuJoFLgWcVyU6uwuA7gAZh1ywJ1HXxSxW4ya4LyG",
  "key17": "2mM4GBmMbBBMQiPr1PF5Gxn4cMKJ1HSpCxK2DSb16xNPRyyMfT467GPLgNEdVCsfxMyLHyxNAFJwo8ZdmFp1WrAk",
  "key18": "42GGiko719QF96sfPwgZCj4eRpbQA65D3uemiTgjvFk4zgF7r36TqebFT5BAEWq2W2xUC7MZv7iLhqXD7SWjz7t1",
  "key19": "xXS8mVbfoNvSSXvMfDeRSeA13Cvoyeda7tuJ4Fo4quuAoYDUjfpLZ3pd6EizkoowW71DUUmyFCHwo8r6xH4bSX9",
  "key20": "4CwXkFwpRx9eAqUrMvpH3WHRH9MLweWaX6ChaTn5DGzwXQZtF8ewu7eZPoUNC1phdsV9GyZpuQGyrZaMMjfksWtG",
  "key21": "5qbe2ds9HkQsY7D2gQYG4cA8kyYFRk3GqVTVP33u8B4yktLhoYgeQrmF1SLU5sVutUQFAbRAXDjCqtzVzeG5nPs8",
  "key22": "3KXPnWEY9ccvVupJvqGbtJzU6tNvJ6KwqLntWw5hUAhYe7RrJ1jaULfbLZcD7RiuggvKg1otMR8d3dPpVjvUZNF8",
  "key23": "38p3PfKNJjnkzfcSgKb7FBeyiD536hTVjNopQUuonNvaqqHm6x7Uu5UYgTrqfZBEeRdcq1Ju7fH5pK8dqynTEpEo",
  "key24": "2nwVfXMutncck2VSYcnQCUNRVjpdjRVpNLsb99LCYeDgxhtTLpTJjErtHPnUz64XV98pSvrxejpG6dq1hpwKHoyU",
  "key25": "37nKg1oyUReqPDR6z3upbhzvEpDNuGv3EVU2Djvfe3NkW1TcfZEyYZgz7qrK44qHujUJc7YuExjZKhbfX7L8YzH1",
  "key26": "5E332Z6WtLgysf5sTKyAi7Ej8ECUVkmmhvo5ZatUPnjoAXkx4ws6DkwJZhqodJ6PsvVbi2Bx91z9zWR9RTMGetUw",
  "key27": "5tMYuthWxJmpqV2YwRJWhur8BZB6BGjs62kEiUyQzcqnzj9ou9eXn3JV4EnDMYG2Jo2XJCSc18UedXKgmyct8R6g",
  "key28": "49moaa4WcnkRavK35CvzXh8w8vrWpjkSTNreAmUyismxdc48UD4CLMqKKxtVaU4Qrwf4MqNy3aohMcWrZQYyHsk2",
  "key29": "5XtwL4Ltm4SPuneYM21hsUVaMhdxZjY2Kr3hcwnYgPGWrWaRYcNbojiH3wgETRzTKRDnubbto1yr7nhaez6S7kXX",
  "key30": "k37emSnWqUv4QHDzoXdt9QuE5nT6SFiwZn3sUUgxZeW5edJyn474ecMM42tW9kfxYBpivhJivmtqcTYVcYuTSLY",
  "key31": "3NKmcho5toLZSYJpSaiifXEJRefRH4RX8UhtAakPXBqtSLXirBZemuuLnx9dMEiG7EhNJ2MvsxEhy2cMZBh5XbRd",
  "key32": "2BK44LTymS2PdbzP627dkuv9XoETgoyv2g42uyEqzp3dtzMT71E4rEGYHast7J7fHo2vW1veryC9SN3ZKnA9au5u",
  "key33": "4KqseAT4rwjzCGqjJCa7D9vr86ceK7PH4ebn6nKpc8dCQSe2NqqXRZDxWvud4YJxdfMWsGkg6zALxcE93Mb9a93u",
  "key34": "625aykm5gCRT5zfAyrxYtTTmGgei2RfBAaBy8g17RDMFQsqgxYgP8mbqqL4Fhfqusgs99RtxoZE795rgGw5i1Q58",
  "key35": "VpkZ7GoatferxA3qKX1xaYqpu7m8znpKyjY7MrqjFzZWWVr5rKnQi9F3VvPCjSAscBL3q5ncWKkNqrXUrfvdxZJ",
  "key36": "36XSTEpKX2ZxeX27MPno7cdv8JETXBtkpV5tH8MEZtjtpjyEgWBFYWxyZJbfuNzYJtgZzbX6WZ5FX8E448xwMus6"
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
