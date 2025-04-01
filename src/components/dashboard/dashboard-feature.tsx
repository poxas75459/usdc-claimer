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
    "2YnLNCcDv9EYqJmc64NKNAvNLiC9ACTxA2EsNKLcwcFPxw2u4a797ccCQGuAeGqEFanpQsFtvRHegLUonrrK1DwE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rb5YbZe8jsyHoyw1NYf6KFAQQaAkHGS9ekh3Ww9UaJq2vUPXLYnchgQLwxb4q9mD7WZKEBRDTH4YrN8tXAtnoNs",
  "key1": "XcRbxLMF73QcVTT57aXrGipQ6vy9A55z8U2RDpffL4NaFpNV4vAciSRWS8XBM1aSAcdBNVgKyup1ubjtS4GFG5U",
  "key2": "2PWggWsFmGKLGCRqkyY85Jq2CWfBqyhdDJwJFMkL3mLG7SmjfZ5fmD1bsgneZw765iG8E6fBZ9ZvttPbqVWtivR6",
  "key3": "3mpYHvRSaUjuPrm9T6nW4V6Hdc2Rkv5ZExZGvSpK9mKLbv1Fw2Ubi3A8ygWjaQPSumAF8DmJFJNop6fQtH1UfUSV",
  "key4": "4RY2EXkLPGfdMSc7tCM7MnADd7NDy3ur33FkNrh5i2kCH4ekCeXAXexfwJ1XQPpcM5BXQsrYHvRjr9XHQdXsBbh7",
  "key5": "2F3QfDPd5miSnu7VTcnVSnRRVRs1qfHYNSsCps1CqBREBbxJDLHtRMKxjErp3wtRq3qoE8p9v781QbupWV1A289v",
  "key6": "5GCDyvG1k2V9npDwL6ShvqDWwkXXnQguoEbpGvrDpUSRFtCVMjpC4h9GT3JHTsLhB89B68Xv1GTbD82fXmL2mKD8",
  "key7": "368VWbSs8V1VuqQkcNPNUKvoaSB7qnCEwCAPBFcxFrbWZ8ArZ1kNaMn8bKG7cjYpmtHHsTRGUWo1uyNF9wuo9BBU",
  "key8": "5DnWz5KdsmPQy9wynfmbfED1gCW5dozkV4RWN3dVj2FR1uD8cQMmBCDvHaexfQsQbT1xqwZXumZVGcsZWBApFee8",
  "key9": "2LqhrviBvFTLwnimHxL5H6MptRrGw33iQtsWkrTdbG5Fa173aqDn9FiixZtsMNHxUessCFSzCEDn4u8fci4HD8nc",
  "key10": "2qBebUDgu2PX6Akh7HZpiLqpikjfrBb4wWkZ7twoJWmszeuSc594cY25krt7sStod6dNEf1V55s8ftycbEDP1prp",
  "key11": "2qWctmavWjo5PxRNon3GuGLuh1j3hY5dxmTLqjC5MVGDJXW24fPGhaCfdS61A7p5asebtZU4uhyeno7dky4hYZWU",
  "key12": "5udLp9oZTkvgXPBGgAp4ymDcjFCLzDg1AM6znWwyZEKtUhqBHRm3kYubRsAsSQimL51n4BdU3SvFyAfrV21BaLEM",
  "key13": "5m3LGrXoxxxer6mU4BNRd532JQtRhUykqq6k7tBts3FtMW49Kysr8eEALFTYY7rbboh3TijZXLnqL1dfseKMVa9T",
  "key14": "2zZ8BuCbR6ikVG3BggqmpXCFgFmd7sh62WBAaQD7dXTVHUYV4AVD2kx9DyVNNJ7cVQHYVni6b6e9CEi7jbx8pe6f",
  "key15": "5tF3rDcwPgw6xv6cq9rGNmeE6UALths4sLDGTs3HqEkFL23kVVtVRf3tG2vzs47D7nXSUyhVNqBnFqLSLGipCBUE",
  "key16": "5en6sTzwJKJBVhsL6jhK3Gdr8hry9byQ2SeW7vsNPnL6hGW8MqZoeBYDRYQTpE4jgsdbwv8G5yissGa4TX6pPgGP",
  "key17": "3TtzVm3AkSYrog5Ro5nNW1KV24B3JAvCPRHdREP97cmT7pJSXCWxD7ZBaTX1MwsCmJ2SZpCMbAV2W6AL7tiVHnJN",
  "key18": "2cCzxzUFrVX7QgvXKrpV7g6ar84qAwhguwryaXNbRAuBRRw1DYWpYLQC2EY3zdZ6nen8mwwXJozUtSpDLbPukVjz",
  "key19": "3uyKdy2hCJ9FqTqCXcF4CfHt996eGoN3zhNAvggWYscHwWNPmQpmYsvg5duQSD1mxtGvMMa6gQWiRC5oxEo1uPYY",
  "key20": "2etBt64PiybGDDNpzgu3s51bB4KF4vxEn5MxdLcbueXvmxhuYZee5LGwyNLasV1zprSyVUcXDzfDtNEsLojFyDvF",
  "key21": "35fQJuktcasbKDtDAckVfZnettmPNkMPVHiY1RxYp2Q1pcBAGsEgc8HHh7ivFeXNUgjPU9KhWVxW5DKCQ2Hh3j4y",
  "key22": "7w8LUwdVqzD96BCLHMPpNo9eGmUxcseu4WsLkRG79RkLWzzwYYVwqD9LmLNcWW9BEqRdAUgtoCZCEjSPeLycfoY",
  "key23": "3C6JA5ccmBgw4eWSDRAzrkWcDPE9WdVV8ZAss6vNxAzj8R1vixxro27os4HEg4F4CrjbjRZXahTYA516fcndmcQi",
  "key24": "3TWpYTPgNF24GiWw7rVoE8vQsa7N7vwYQHKotnR5MvyVDDPsNaroxHVpW6e4twEsoraF9oh8NeVy6iBVcHCqS1kb"
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
