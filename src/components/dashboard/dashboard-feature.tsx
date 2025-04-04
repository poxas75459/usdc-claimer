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
    "2EJpc3vEpKs86f4pS7Rq1Vm9h4h3rmNuqhPJsZadyoRDQyyf5Xx7aazocFVtgj8xvnCrB1cP3sArqXWcfKrsYsrU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VC1kT1GwdCVRJiAuQAHqg9RZrgpLq8M3FwiXZmAjF6meZbrha2srWc5Unf6t7oJWHavqhH5ikKydHZzriddrbjm",
  "key1": "2R56XG8B8mAFdGzgNnGLiX7EmUGoWU6N5vxHj7b37DVHajbGHqBzgDbN27Go3WTfiAgYSavJ95dRCGHKDqgehWT7",
  "key2": "2eayCdWzMxBpokVjRuv7uvwsjVpM5pw2fAecfozz7KJiW88osR8xbziAbT4Ar9hQcjwi4TFa7C7XAuUUEpe8UCZe",
  "key3": "2xrt4BCgdxuLrCGoxZA3Czue4q1LzryehkGs7skJv1mpa5wuMpy238FK4LwiGhv2pa14459Dem7m1GKD626SxwPP",
  "key4": "64DDgGn1Atow3Uy38syQJw9SNaKnKDssuvWf9mq6B7RL8YC3LZhKpF5VVhK9aXcUJcj2hvUJLbpxcV7xLbEXJaPy",
  "key5": "29hTZG49NRCbV78hbJuaeszcotsnb8jbTJcVpDKhcSxBYmdTMMF3ogkMVRnBoA6G4sK27MTPDJMiBV3s5aM8Umps",
  "key6": "2EDwSZW6VreeBoF2y3LTMDyu8iYVRzrmGpTZc5dxySWh1zeR2Akku9WSoVZHXBjSeaW19kp8fzd3VvejwsU68AXh",
  "key7": "3EDQwURNUcLqXKEh4yAuJG7sCW3Y2oz6P1yv9z5kMkaJRBpUbPZUmfQe6mqSf5bK1m1QgQBDw8FF7vgow8Xg7awT",
  "key8": "3mFQ3xV8Yc5eQr3t9MC8uGtAQHPdBys19Q5dg9r6bzjaghWZ3PcynXMr9jyrWHqv8y89GTtiSjKKbFaSYVPbjKVQ",
  "key9": "5BKB4obuQ6gtBLf2TQZNJ7WRrWqBFUoNWoz26H4KizqGvEHPaG4ZidFa6quXBzHgetCMQM86fA79ztCShvNsWW6C",
  "key10": "3mUJkrCLiWLPACZyYcbeDSSL8nNkfYSqzmoJHFSyMVchMWxasWbBo9Zi7ocNL8BYQMaN2HWrnQtXSEVnXp2NRwhG",
  "key11": "64aoTAqBqyEXtcNbVZ11iCSr8qamUEwnyDFiewEr6pZ4APAdbQyQMP8xDC1P9Us4SzE369mC4hWFnMm6qM1Rz66Q",
  "key12": "MGH1vAFePR7iBpT7KXyVvj3zonuo76gknj6DQbzRXkKQ2PRwqNM3ZaJE2FwzWSbQJLTnj8rBuQxQEvbE9nD6372",
  "key13": "4degY1W3bikKdR6mQYSnFxR8aR3i4J7kHcG8vEnYaiAzc6Kkzqx8jpvi2rC1jqfc7UWnuSY2U2RAL3JdvF4n3zjU",
  "key14": "3SaYN58zD8U5zKAETVZbrgSPqmhvr7NTFVfwVTtmQeRAdLHqNTDQPjowe4FmphdZjaWcigd3YzXRD7EZ7GfhvrUg",
  "key15": "5kJ4xQpC5capq4ABQUR3XRJdSEt1jbvcY6GeZpNotM3HbnsBsBssrnUM2FSQiGnwahKL8KpkGgdQaVXpqnuw2ytt",
  "key16": "2QNsNq6wpDaYu1AucdR6k2H3NBt7g6eEMFLmBcRbfnKSetqT7F5XCU9GSdjbh61LMJ3aC89mKw1WzJkSZx5iYy1a",
  "key17": "4eeHTDGgGSAeNcYHGHdVQ5DDpsYZkg4KWbtm7JquFbgQr4iLVwskdRqBF3if6B8DvZpiHPtRx1TxLoZFP1WsCoeW",
  "key18": "CJj4G4X98PKCcoNXmryZ4ZTwMusbu1pZ2em9bNrkgFT6GgjwkaJw8YUUTqDc2aMiSsuyyFpxRssZAaYVSmNACJZ",
  "key19": "5aakyMrP9gn5z5ciESpg9wokdENqHUfjMyStHipmbfkMTeeRLnFRcDQnz7gu81RFkWYJZnRwwHJMUeVKXTuAcScg",
  "key20": "5YBHcYk73keFPiEkxYaYypkFkDssg17MqiueUTwtT47qhg7t6JBRCX4pVWFmrQKjAxVMKLHwWDRVRyFnwEwWpZXh",
  "key21": "3jc4UrAKzyhbTPSPgCmQxphUeE4H3FuGqygDYkQQowj9tSycjNA3UfY5DGSKa3EEYYti3bYUHBAqFvqq2LFWR71q",
  "key22": "4MvKX6yc2oS5LFjkCLna4ErMoitkeRYhXeXYakivUVmEE3x1r4EHF68fjc7NoiANjMXpdpS1VbYEjqhGcJ3bh7zz",
  "key23": "Cje1VB2RcaZXtBtu88xyyDNmanjkYQm5hEPtZA4v1mAFPexdP71RGsUgGfguCYonCnP1X22GHTTg4D7jhZRtC5K",
  "key24": "5ycHB58KpV7A7aFAhu24ayEcRTgT64P9N3bEB3hrUWqnN42nmB1eSFg4ew5Uw7qfaUSy5QcieckrCzQwk9MMVvJW",
  "key25": "2KYs77pxMVNVFD8QdmS1PxNGvcUUVgeuSc7k4KJ6pxTWxvAZpxpV8qHDSjr5VSvWNaUkoRoCh2p43A5vJpkqp2v9",
  "key26": "3B5dEfqRP8G4TgrSqojHC7n2eWs7DSKAD9xixZy7Bn3cHt8JBayY1ErNg6CiKGJmE1KsYARd1ZBd97XRXdrUK6EY",
  "key27": "NoPck5RetNbEQcGyH9a4JzaoDc2fVRf4mn8y7xxRXCzUTFT8jjYE8LKEvfAhUFGHXBUcVp2cwnHq9SSGvmpmh4g",
  "key28": "4tfntWpAS17m1XfV8yMUB6yf1Bo8kZsBzhKxgx8F4S8iV186jMRey3aiMTdYEqtU85553857PNQL3LXx1Ewgenfg",
  "key29": "32b1vd1GzZuhw6v2sXbfpNipc3CBbcRXqvXbq2LzRe2REy5FvpXoKyhHpxm4daa4DPWjDj6Lnb4p3UhhmjJPz62D",
  "key30": "4Ypmyye8JDHnM1c1FFdmmXPXU6cY3jKiQTsN5oQ27H2vEr9Yxq2Vxb4JFT767Emqvhz8WWwVwontkK3C71kNezww"
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
