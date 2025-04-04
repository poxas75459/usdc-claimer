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
    "3VMV8tuDwy362LUcqe6RBbcJQUkVAnPkN6h4XFSjCeEzjSSZLn8yNqqBt6zK1ym39vnC86a7iLKrV7PSe6ppnicK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KQ5mG5qEyph6EaX8gtixRgWFzopt9ByWYvAsehrt5mZUkoo1Rk96eQm2RzMQvgvp2WHxLc1RD4sqGLy3EaqsU6Z",
  "key1": "2jWpMHVLx8TeaBp1H1LQjyRdjPZ6meCeYfwsmZf3a93XRci5R3QWD7XXW7QBRu5jqZPGqijRrNSqU78p9Ny4fX8u",
  "key2": "3xqvNQmM9BbsxMAC8UDtJ2EhVPUSUPJ1Ts5gao7V7RgP77KXzvHKkBTZdB8ftGdCBdvycW2S967Abx6sEfQXVvUx",
  "key3": "38X4PZeBBCxrC4Eq572Qh4iuvpHRrwrKRyxPbE5XK2y5cz8Bj1XksuMZ34aqosTFqVX16S9bXNYwXt6BwLVy2KR5",
  "key4": "36JcKVRwa61g4KeWzodi6JPp9YjzPpdnAB2HDwzmoAu54RxVPMpaUWt895AGNkMNUTRSjbJP99R34ZdTzcnB7h62",
  "key5": "2ZxydbXrQkSSHHgG19hW6ojSvExkThGrUGPQcqfHK1HAhgF2CHRhH3pU9sKwYkWPq6Pw48F3mgM8cf91iW4AyBN",
  "key6": "4C9mKB4sX5nqFNu99fnzrBKNVXgFTixvQhGYJAKtSi54rHUQo5GZLk34p4kSs1Erufc4k6mZ8qmGpWHS6HaQRKQS",
  "key7": "3fkNgQwAX7nDrZ87E3L57LALFDh5GQnuRGDf8EwA2SjHJNTW1PM6753oxZNFGYYNofhJ7c5eUoLayPdrh9TYiCua",
  "key8": "3ra8J6NPGMxXhzprJuvKvojifGeUHu9At3F57xdYx7HFNhwPBvcNdKJfeEFfuXdv524wqRiKxdPcpMTd3f5HXVMQ",
  "key9": "217AH4A6rhahFUxhWJXMKZmrcjB6GLrJvQcejddY5fXzE94Gy4b8YZYpi24xtBFymRm8w47BmL4iGBZKnKbAV1Po",
  "key10": "228tTzhTcoQ8zaqUuuPGpqhThczBPTzbZbz5aQ87cWHAV2codi7rHeBRy2YaoZHhx7cRiR6qW8tgeUm24Tdz8LgW",
  "key11": "46EQTm6CKX2gKAYkn8EK3vicvUcwfjGMUyeFXS9ADKwqSKSCKLuVH54gbWCU5iZeLXoRHmFzieyXoTZENNMCendo",
  "key12": "2CqFocvkcBEGNSdJ97PRDUXy9fxMUAHi8kpdC3sfban6dLn5uaoqrkcNbe4wngnwgcnwgBpLVxikYWgsXvnmHDW4",
  "key13": "xLb7Kg9giTGMYyhCoeUFnLhWPd7XakbKezUPXphzLr54a9cxpehq1yNAFN6SBRNyr4F1J4ctsHz7UpAo8H66Fv2",
  "key14": "NYoBVvzWoJE2xuqtsdkNpe6k5TicXjVQYxYHrEtsMdt7TQoAWwjgoZE2oAPubVeRMAkL18ov1g79jcd7huHNKrU",
  "key15": "477ULXCops55vEtteE2Kt5AFnpC1fWF8hz7wUfVLAX2r7VCxLmnCtAhXNmi7tCBbrxFeEtgsWXhmh3setCPAKMcd",
  "key16": "3eJCax2etv3s4oDKv8H9RmuBE7qRAXY9kRpngcgxiwBDDGranX9U69E9knK8DcqzYdeJtQziunNwDqWoesTK5VRa",
  "key17": "3LbievWbXS5tCrDbVs5cbgV3vyMsWHfkY5eE7z3D8CVxbMK6tNbHNjKrhPVafDKLenCewCLuhPvdWjJ99Ntnp13m",
  "key18": "3P6Rk7kSBF3CrHRHpqypFeiJ4jKKjSaMSZEFBnDiY5xkYZgdwyWYvBAFdLYELirYbFQ2utDfVrF94dnxUePXcNEm",
  "key19": "AWVGbAZdy2F52HXdLbLrGdddYc7eUQ5YSVjBizcH89L7VwicF4VWHfvF5a7fGktLeMj48fCBWhzrnCTkDpNxCp6",
  "key20": "JB2ggJXh1JLhc984u3ew3kjU1m4mt8QVtzVtFME8uPhuS4SszsZcJ3GHZ3fXANq1FgRhthcrAiXcUwJw3WM9ubn",
  "key21": "5q6gP7K8sXcJGDWViShpi5VNxuscpok4L6MeEyWGZ9Su7HEq8ZMt8KmKGpNRHWSpD5sU5ZWgfbrJoGAjZcvzomJN",
  "key22": "3qZei7TmSFNBH5R9aWBTcuXvxJ3qtZ2dLCfQ6Eb22EoTGXNCBYk1FRFXY84aAwDMBKbHCdhBxfdaXSp2wr4NjJcg",
  "key23": "5dZHd3f8DHWu1aHjy4Ysit61coKwWKmmzHHEWP1SQwaGy5yBMm8PSNz7Z211T9RgSbYqoVHzxFDkedUxAZ52ipEH",
  "key24": "5G87Ba5nQbWTtCKBes6FjGmSrgEcfUcjvUA6QZSAmnHL2K5iVAoGcrny8BkK7jsMLCmqe4m55kVbXiMEczPVjMvq",
  "key25": "3dRaY4os5AvzBbXRHVfNBUJN6JZQJTyXPhMw44KDpkYC3qmtWbLkhPkWCDCpzZ3hwDCVsef4nnM8ycfLkRUJUzuj",
  "key26": "MTK8jjwS5TPR5ev4cYGRr8m5nphZA4j5NZzyw2m9B3CA2eaaA3iD2KcQVWS9qEtXZkggGjZEuMGMeTvTJijajSh",
  "key27": "2ZhA9RbGyfiSRKXAhuc4BkmY6pfmYyTWkvXBG3kHSwW91BEzz7hELAqE8kQz9iRjsjw738Gmi5U9iBZNU7bXjaf1",
  "key28": "3rVymVjvVUdJwJZcU6KFCTtWMfAkW2f9Ei2wYsZbxeBSzFubVywR37J4WANLkrKJgrxR6T51btASGGEo6DTXDqqp",
  "key29": "3beFYocaa3vi5AW9oWFkVLgyTZSUpHn97GuWteD4Z1jcayrEioxyC9izvNGKrLDo1hvGVavVuFn74NkasE3AF9D5",
  "key30": "JK2pMeCZd6S1w7X11sf5CrtJCnDTmYjdTCCmMRaWzyEkQr6VEw4SMe5hWdenvUQiySJJHvtFDXRTMEyPiAzvNAM",
  "key31": "2FHbYvQ4gHHCT1VoLfiqVrptA2ZydatgmS4XQ8Hsnq6N8cspLVrkvhWN3xgxAYi2eKeNabQY8sdngmyAMsA2f5mX",
  "key32": "5q74ZF2pFCeqQYfVPfxFF2SFFWzm9HBjFzMuqUG5R4tZ9xgC3GJR6qkW8mmEMfcA5K9VstM1D2aNjJrexfp8QXtc"
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
