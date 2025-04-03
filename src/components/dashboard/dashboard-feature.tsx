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
    "2B1iJdpT5yybQm81wn2RFFZRWdJKdRSFaMEJUyU1mioEqKJH6i6eT7fNMTNVQ6VUfHxFuP53oT1UVhBDyBSxMCdc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XkR5BNBk8L2ogo3sD9U8ySx8HGjxsi3kH6ydDz2Gxr123pDTcXDFtUs4R1Kj5tAa9EkzBRnq2DmwpbTzKYNT2ob",
  "key1": "VmSifnJwv6dC5ACp2zNW2H5LcBjFcvQZo2QEPdaYUUb3XNAJrHRTduDj2LZyTkACKxoBmpEQddWhLfW9ednHQJB",
  "key2": "2JVH2QvWokhX4EDq6AXGhPJ94gjgbKk2o4VNDikzWK6nfCtMHfcsBDPR4tGFLoqWA2ZkXWwPdCwV7p6dUKwB4a79",
  "key3": "4bgZpnLQWQVWxp9ezdbHsjLXsa3yfss1P1iv3Rf6bB8vJxy3k8s4Qgw7zMtp8Hm8v5ieq1BN1N1RGdFP6aTMr85A",
  "key4": "5iukqpe4oynY7EJ79c97VGnUS924AWjCd6rb5pVbMud4S6McpdMqy8CEPot2n7HQcqPMQi5HM6VvLuSL58g7cUmY",
  "key5": "2JVsqjL945WRuxRnbgz1E6A8pdccp8GUnZkyd959coMuH6QgLuufdDGbyXQGgXz3CyofKydFoduwNAxzEK9zd6u9",
  "key6": "iCiF2a5Ed5MWBMeDfdxdQwjmoyaG15ZWB9HLpea32swXDREPkkrvtfHXVpsoWLoBt4qzhoZP2vKxSQ5pXcsnTBT",
  "key7": "63SXUYg3Q4b22iuoF7CtH6JJpbHgX1fSm6yfDzVxDJS61gkcUpPfnAiy8pa7aGbkCDaqKBRuBSAVuv5uKEVsWkHx",
  "key8": "CLProMXQ73zjuv5gtmjC8Z2Tyi1MgDYnPLehBrQQpKwRW26L1kzpAcZ8mDMJydKh4tdfBAzREzdG84e6o9QtQPp",
  "key9": "4MPa4X4Dc7E1DPdGhRxqzvTqQLLEBGEx4Lqhtj2DcRSZ1qu3LoSRV84Bk1wYzDa5DCzLRgR5WB2MjxWE9TyvZLXV",
  "key10": "2aCNPTcg4vJByPRnNipYcwPDgg1UsWgyfF374QRrQ3QX7rAx7pJZnzgCvhdrmUpyjgWi3kPeKfg5caiosEcWettY",
  "key11": "dhAVJ5y7BktFx47HmnchTARLJUNQFbB3v1UYH5DWEzXdp38HdcNGZpDQNNeGJDBPborBYUrx3hfkBcWXnLzuSfD",
  "key12": "3ktXDHtgPhHk1Eo9xodzTe6UNtY3XWNtaGCgDaNJsPtPah2ESnq3FgYwxpgtchsnqdsLneGRCGvGp1gatPs2hc98",
  "key13": "3Xhtv7FE6UUoU9FgGnjq2xEZHwF93ktewFTFs5u8KbxqMAe7HsTJY8mXaQ47CF7UZmojgXyKgQaiH2xHvH9D1F7r",
  "key14": "4MGXL7kGxnuzxbTjydX73oQy8mqFVMoTfZnobpTZQk8TZ76ojzXjSj7dqj8cvCerSUkmN5WDqU8ukTvpJb4tWvXT",
  "key15": "48JmbbtPCLjM3H8kWtJssDBCsPSCVmZ1Uov9fpt2cvVfXWTiffv9PFmNexqL5JM5jubi9J7HRrj1wqHSgzH6BEWF",
  "key16": "2W7j8sGGQuanFZjCL7o7chcJ2dwMeEELLtDKNL8cuWAZh77kANDc7ayrqMCths1i62MpsvXGYArXrYWg4KZiPyV5",
  "key17": "3gSHqSg3GXEWE3Vaj8dhgPTFq8uLasU5wtW5g4ctLPMWng4e3gpf2eJ6kVW8RJfDsP14LGNb5P7fqcFxL5bt9gcG",
  "key18": "wXrCgozJR1HpbEs7hW61HwHoKJaA4Wc3LaAaAbNSBdymJT6gKsLNvanM5B9NJ3SBoSxndCMtEndQEePbm8rvA2Q",
  "key19": "X44MBc4ZQCXcNWQUGGZRNadKmJDJ7vYdCKoCRsbLZBqQfEvpkwacVgrr13tduEWKouCW1W2kFECE7sEtAtF79yE",
  "key20": "5b9ZEQaARvMnHkEwjU7VqpyZ9xWmhhdmkvzEVPfvSdt2wo32YikaSD4h6LsJ2hXoJi7rDav13zjhVd2bcirKPMei",
  "key21": "voF4HZwMmYdQ5z7pMRDRhQLC1vGrUdSxdiyAYurDB5QsQ2LgvhFkNMETAf7MsQn2heERUjg4bj2xpowWvtxaNdJ",
  "key22": "2sadZwdAG9cGBRAceeQ8MrZiUbGCVvJvcdnAZhaJn1Tf4MPohC5HdJ6oVofR9B2QnGce417U5X1xrDPy1DfX7KQi",
  "key23": "oGKfhXPEpZcJf2wUgeBptfWyPWvDR8wvVWLK4JbHYSCwurR9pCUqTRUmAbkBohwJhALcBruM6MgnuznqDdnKGbk",
  "key24": "22MmwcZ8zfoMwDkB9F5HhXmw3k5hNTCnXVfqFfKJoH6hmB8EuxcQmJaXAnFRFvCBFx2t2yg9FjdHESkVfCFp32zD",
  "key25": "2LvC39yNN3Z6veQ5NQEnyNWkcF339VWtWu7N7ucYphJrijwz4DxxwvfQhEEQWVz8zRpGe22WZ2BJTaQm1Lj7chJ",
  "key26": "4UckHiLnbnMZMbQE6umqRBqwgx3ikxirx6PwWR3uvYe2bzZ5EFXxnBNnJV8r5EAv6FtV29cyaiCTuSL9BxUb8ifg",
  "key27": "38FTuifVa3QB4dCzyFqfx737JXxphAYKZhNHVSirUcC2mniDG1REjQvbsdJGpwomXUjR6yCPf9KycUVxpZm4y2Hi"
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
