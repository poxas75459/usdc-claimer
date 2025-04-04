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
    "3VRnwL7WxUT3zZxcYWuJjWL3V6cZfQC9Cq2mzxvkdu3XNXuzFo8CANWbzw14mEpf6L7GvJznAhhkEJ17qwqrv35V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jno2xceTNANcDHAHj76gxJGQBi7eYDJnwKpEfv22isYacdTHujYszDHgLkCzLJVvFUmbRAPthnpkoF4G4m1Y6aV",
  "key1": "4VSz1TJ5jiE9jDdMgVDu4WVFkCBpLWkxpLnknbxz35RcBA5wa8wATYtEJw1AzjvmryPmNe44PwfappYFPLXHBDEu",
  "key2": "2JdYJMMKw9dAMVDKnewuD77Z3TADCLQxEGc29RPXjm7AzooCMkAnrsrpzu3zWNH2hc8SEacWJpkB4s4b8EyiYZb",
  "key3": "2LsidyTvWYt9Zaf5EuLBcS2PDzBC6Sk6aQNDLAAtkW6jwXRNmLcSuB1qUPbdGgCES7uLgRAMv4ZW7Cc3DRcEx6oF",
  "key4": "3qdU4Jo9a8X5DGpkHduYWfcg4bQdw1bXqsbjzj3DSyZ8LoGuXsC2ThKnMc3gPkWtpy7bJ8quJvynvLETzy2Wbeee",
  "key5": "2tbNR1YNNvRBiJUvoiYHUgzmrHyUn742pxgWnR7Ez1PTjoB6hYaLFCSQ13cZcaYWkpmgpBE7BnVoFJT1thGQX5SB",
  "key6": "af2LSQdHvxFGVibRHqz7Bts4YyPRMWHSRwaBDpkEMmVggX9uMH5tum5ANxd1Uvx6syLjyYeDxoi4aRf1Rz5woNB",
  "key7": "3ntg6ZJ5ye7gsnfiPyZvJoQhpkrDDDUR3q9FrfeJesAFu7wjUNfPeKzcbM5KTH9EKBuu38PCNXn6Ruf6pKVd4kDk",
  "key8": "LpHPRsWzXFknMipz9ToETFGjaW8fRLSxSYCMcxb5vRTRNk4cBbY5245L15zWC7cqhcSCBJmnJSKd7tmk43owN2N",
  "key9": "5Z1yo9qdvaAWkz6t8HcfD1XrS4ebJBwAJmFL6jagPRx216AHCnCcASVJSiG6bNKfWrEFQ1CYMSsRKmwBdzqbFze8",
  "key10": "3Nc8rjAq7o1BuSxEASYofBdBLFDycHrh7hZUpsYmy75kgQuqLmKAr5Trfs5bEdCxES8U49oUAmBR6th5ZUNgi7j8",
  "key11": "2mHN9aBJU5TjbegGcJ43cXFZoKcGSvfKXHSuwHBtjAaRcBiKDdifCaXYUVXbWimEfBfMQEzy7Tu49xVfPkxVxPnb",
  "key12": "PwiqWP3r7yZhofoJ4mauT1s3iqHrmfVHKXLUNbzRQg31U9RpfYpfJe4aESgQi2P2Jizj9Th5pqWz8jyqm51D5No",
  "key13": "wjB2TBAeoFuTizmqmBkbasEkfR9n1pjSuazKLbAZz37qozSxS4QQnNiNRMTxsER2sMQDMXqXiTwQQmoTvd1fLy2",
  "key14": "YPWYmwLGu2PzZtLnom3ZmqEXaWakTy4XGV1qqcS7UVzccEPMU5iv4T2GVCdncqUZ3wMtnhm4qWhTTo99QbTL38W",
  "key15": "5yKQPzHCeAjvwufjkZLTKj9YoikNvw9y418Ph7KYhrLspC7UDGJW6kej1EXS2X7zFM8TWQPdGnJ3eLBZHb1EvFzU",
  "key16": "3msAA2r2whHwSzUA4HyChgu3pyVzM7dB4qrNPxkSSdfg1VPotmLC4SQiJrC1BGpS7xJbrweg7rdcpZo4FS687L1h",
  "key17": "5xyyRQ8WuSfYZVssdKHJjt2cRmpJYdiGnspUYDS5G2XNrLeAJfSgRmt1uxfpVfv9QaiWDzLZhFtiiPLUpjN9PpFQ",
  "key18": "w277C4XrGzs4xuoSVKU8XKWHGHkrJCPzFEdpTbhZeMRjLf3Q2rARqyfzotQjZgpLb2wPqkxy6qG6hLv6sXgn4Qa",
  "key19": "rkK3dQiqwSFuS8oh23FAuCwsMtdhGBSx6cacEKjwoeM4Zbm8AAswhYqcwbed4Z6xYCFWsLQniovPWGJ1nxV8VG6",
  "key20": "5Yfpsj9sEekhDG4tGaRxaZCZzxKFCkwsRE9QSB7ue24R3md2R9zNXeP58pCPFppPaxzLCwA9g9mDuUR7XzCjDd4W",
  "key21": "2PUbdtoq2Y3VPcDUmRQxnmdiVxCcNJ8BeN7imDMWavMo3VqDhAvUV6Pz1Am1pCnEqPxNQfjdTKWLTm9u8UNRixTz",
  "key22": "2aFHBQEqebNs6aRKs7fLzvftPxDCY4WpUMXCCqcdEmtRTCTqzX8ffNkLbuzCEwYbqVAnPLNfwKJL9ZbB8dqkg4tg",
  "key23": "4m4zNkuc3ini92i1Chk4CHQSvqCJVd89Dk6P8aQWFgRcLdxmUuRsMyfhfczJwKBomb4MHG6tMSnnAPJeg1uR8Mbi",
  "key24": "JeZJ6MXY22uQLHpSNBirzNQcBByfUVSkZqsnA6UqhZojDS7DknC5Cv8u2nMPFvkxX6WMeNHPoD8Proq7veXaffi",
  "key25": "37mZuWB6c5DeP3xN6PrdMuxhFRt7oe5PY2N5Ue6cymmQq5wuL1W8UaQ658HfG5Ke4e88N8zWb4QfniqLPe9C1CjE",
  "key26": "RD9L6euRZS9V7fs9B12uqEirSPJriCQpHw1tw93Eza6yrawfViGV1pJqD48ZcPYcdaHB5sVi3ZXuePsnGH592CJ",
  "key27": "5c2BhUFm7XTadkuZUBoZrPNCSmmzG3Kvm8rDXaDaptuqLV2QqDkRS3mdZW77WuXmzJUhcAXbA3AAGZxNZ6GiztX2",
  "key28": "2pn6BmXpzz8K2aUApuoqMe5VQqLRxaBi4Xyct91mSc4PWQ2573FDRyzUEKgi7mCaR7v63o63WFzGtgywx4A1VbBc",
  "key29": "5ax1h6Jc8XMQzooHDRdP3ru9KEpJNkACTeK1nwYpV5tTBV5yejonpkKPn848aDJLWngtTW1ns4i7A32ibH4CdoKC"
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
