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
    "en2YBRV9urm6RMHmPqiyTULoVsWFhrAqM7ueeBDxaJnnhbZtq2m8mNpzgV55Usx338yPMu7GY5gaFUGLCibp1if"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DbxjhyEgTBByrwiHhackfyrQKrueGqKyc32ba8me6u7km2xLL64p8FyNNmUKWn4fyLqanrxuhMVtAH1KYC1nJ4V",
  "key1": "4N6E5DnULR9ymeQxaEGxY3VeNjq9kxQ5gn2k6CPR6vaS8TV5PqN58oaSjStdRtRMrWdptho2qB2jPxo7VutK1cit",
  "key2": "43eb9aDGES65iXyAA2Ad5jf7ihgDV1GDYY9SzupRaAYi5dVEK1XJ6rbvBuRoTDH7YabzQJ3emJyuwtVViCzMV2JA",
  "key3": "2nivydnZJy1hSN5Vo5Hy93rM8zSjRhByLymS8aMKeKuLgeXAipoaf7WiWHTTHfhiAJyd2X8ZKFpiFZrqNph7Y2GV",
  "key4": "3SCr96T8H6KNG7SXHBAX3fwBXXvcrZ8B4Bxq5HdPVjQbLdf7CksBYB4MVaPAm5Zg91rPyWaE15wko5T74w2L93Zu",
  "key5": "4yqnRSpNayCkbXrG5dRbAkNCYnyTu6gyzrhwnae8mTCdswcd73EmS7MAMf1Vc7sGCngSCb21FgrR97Xpa43vK3CZ",
  "key6": "3HzQu3CsPaQQ8reK8z2GxHrZMDZQJMuq5WjT77pefiDMw4rjdcz3FXrD5Mw2bDktgAc3U3boCWNQBkoA1XkqympV",
  "key7": "fzfbCtUQHBY4VPWjW1n9AuGCHV7gmM9wt3HkDAtKN96Vu4CLxagRiGrRp5YPUauzHLSRKfh2N95zb8YF9CtXiGc",
  "key8": "66r6siHr4LehoNk4VMRm82M7pjNsPoFjpZoT2PncEANBRiyvzV3bkqSSWzJirkkSAfixX2a4ktibKcsXfRiahbr6",
  "key9": "3Sjc8J91ihnsnXapw4szC9a3i7EG86jUfvxEw3T8txEzz36QeqNKQsw8phSWaPRq4C4EWpdR4X8ctHkiXzFUSDTW",
  "key10": "5v4q2YKiQ4twuG68gozryFPPhQpZTGVmcn7WdYzqVKTkaGYEtSZSSbHnSEPASxyStwej7FysTqp1NYbGvFB8mmtA",
  "key11": "JobA8FBHL8a4N2WuwUiSuRq5QUybWsbXCLzQMepibJsHHyHVtD7t2Y4fxdhJv1Fza5t2ic4RkEdRCCo4JASVZBG",
  "key12": "3QHVTkEGXfJfHJwrzbDdsBZLWRLsFXqhbz5BgGRs5WhWgZipEhsihWBEhDmR5uePbi7xkWGFYHKEu5Hamjvrk3Kc",
  "key13": "3WspfbyrVfQcWq5W433TLmJBugZV2yH8iSBEsTw6Lj1eicM1fPgYRBQjtyQspF9wC6huXPruD4rdjd4va7fYGdBy",
  "key14": "3tYranRxLVoBheqBtktLG9B7oyq1Jn7uJ3BS8zqbMpez4PHhCW96MVtDPp8vexrxEWLe5pMioR349MqTUyqnSH2u",
  "key15": "2L8esnsMt1z7uFN9oh3anuTz19UQufeog2RSyzZbuRtg4EYmTtGEzoQXYeUSR73Yekbhwb18Ha61RbKvuFGCjfT8",
  "key16": "2SNSdTWpMaS3AZBur57W1M8Ery797VyWHcXt3CLjrtdWMG1s7pStveKJTB97h4SQnA6uhHD15kJAEiyfAvm5RAGg",
  "key17": "5DstUkjWJ6vyqdBuE9qpjnHnW7A5in7U2RP7kxTCciNwwhy8u5SDizxvxuBu3hzzvWSWpNzKgRyMwWX3KDhnTNuP",
  "key18": "3LrqPyeAG5SXrLJaunubNyb1FAYDERz8C5CvbkmKYzQZLGfXGqxRNN8GqCLQcHS7F1AxgYf2V7ycmypkrbmjzu64",
  "key19": "33SCsbxCjBHGxky2djQe9fYEEz3PfdEjxiNApovFr5Rgpjw5QXG6CE2LmgD9GEqQXNUbTx3Vuu7TUCrCC3Rd8DKS",
  "key20": "44bG2BquS88L2wZs4D3pREM9txFWxaus2ZJKxxput3XijMPFeeCuPzvtNg6i9u6w7xqu4Znw8JFdD1oWkpj29G8w",
  "key21": "226on9MFbo2zybyUvt6VSEdTRsNUpTZc8cLG51tr6YDazCZXuxiGx4CDUN7RQb1SzFU1PLgpH4YTpu2TpK4vNP4J",
  "key22": "64bYRZ5cS8WDSqq4WHB4gGGCneqR8rB9kP73hxfG1j4NAWJ8J2DwX8djZbTkTh2sssnXo8FDKvpDTDrncYXGKZoK",
  "key23": "25Wch1NiosaQRBRWRdNVwDJ3Cr1xMSS5eUxP3LCX1uWiMMz3pkYazuoNCmoQniVkcePVoi5vz3uqpWKxbpT1DQMs",
  "key24": "29N3CSAFTkpojC8x4TY75rSnFeo7MvCT73vDEBpsDuxEhWGvc1L2b7j4yCDoBw6WQfEEt2wo9bpFEV5JSpiRDEvn",
  "key25": "5TL4BRsnooQQDPjrU598t4mZMCGRNa22qvuCusiCoMQP2yhZ3vZRTu9NJYREr6TkJcR3vZKF4k81ki1XNAH9CjmP",
  "key26": "3pKpMGWaRdpEPY8eXDswXvNo58LBrCJLCVQfPCCPxm5WHQW1unKdkJwwnTvJb86CNASkYvN6ogcPZHWjFbivjKQm",
  "key27": "2zRdEUksRdC7CaM8bGivKadGeGCVo6LiS1NJZtTzpBUDjMcK763f1yVLM7vA2dTpW3ERVRrRFfPQirPtZwLrpQcd",
  "key28": "3hQ4wNs9KHDnNciKVB6bpcmBJ4ooij5wZdAxdvr1KVMVWqgzk4ALbUWqCppgRD6DBkc26mKrZdwTJWHzfqwFU1HS",
  "key29": "5ZzxhaVRe9vZyn35nULfp7mJBAoY3WLPoB35AWTbrfheFn586Z9n4x8mYcGurYpsKBuSxavJsG9zaUQVB4LYRhSE",
  "key30": "2BqbV9vbswDXzGWwtZm2ZPomdXZWvhh8tcg9hCfuwY6qpe2n85ZHpY67CsE5zfZHbEBGLMnEfGSNTk6pnBWwSbjg"
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
