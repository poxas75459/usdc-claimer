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
    "5kZZVwP24VoGDMox1dWbMQMbgaDgPMDmo3Qbw1kGF4nTVpNV7qzTEPiXGjDQJyBSWrRDszpYHFiLr7XwfrBtxG1N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eGxhr21qpDo7XVbUWUgtjCLzJezHTH8m9rsxnt8wgzfsPEnjX8WjNWDHxsAhfNsnCQDeGYbmst2jw8vqEf1LAQc",
  "key1": "2EcgTqR9C9NCXSZmK4V8Xdnhzdw8KYwUSmT1ZP9XwVCjmPwCP5P5Zh4iQNJPxhXBhRqrLCdohrT8yRtPyThPiise",
  "key2": "4qEXCL193c1eVGqxnDH6PXtugFBwua5DDnu5KbouWZJvhwqebnXPQiwhPgwKrnEXkd42vFAGZCPk55KEZXd9rnRM",
  "key3": "2kMRAkqpXuHEbF8dPLkbw1pTukcPB9WvNrrNgosxqRHeymwSkSWjJvABbUGVrNraQXUv4sKJdpMR8XMf6FY52CHp",
  "key4": "5gG7FcwnsgGDyTurFJUTsqeyCTroeY1AUmqpBktdNFFe1BPQCusPAR7HUwEH3y4Tc99hLT1qHNCXGWb7CenN5uQY",
  "key5": "5fqx1nSiYK9fCqjQUvgv9rUGwgMK8u2bgH8BBBtc9mA6W4MV6R6dBVvMA2a1ZeyT4qzLmUC1pQm2ufyNpZyR5ZPq",
  "key6": "85YqHVSNSe7K8kMbho5U9Evxj45b11vfLoL9p8RygFB37Ge7Jv2Tpepk8SwGKS1jPxpR46TLav7gcERHZNG8dJE",
  "key7": "wS9AVGAaABRcME2yjhLXfnnr5o9wqX89s4vmDuCEwAZRqCRhR7mvQLZSPJ7X1oWvhhCsK5VxfBzrb4UD12fdGe3",
  "key8": "5WkGzz9vRPrjAve62YqHbrAq3ejC9PX51R2ZZLkvZygkPPjMYQY5u32dCshoppBo38sYLAYGGcCHPRkhxKpWEr7w",
  "key9": "24JgykaVmtEa9mEQCLzCTKz2DVtFjCXiMYuSWRxFwKSS3K9gNQgC8BrhjypA6XAvmbskhk9JfsF7ZFytXkzMsLdE",
  "key10": "4DKgB4zzN13V9fmdX4EGaW6PkWEzQpAFGMvERj6FF56pS397FkiuiP3JRDkqxJ8ULNxJP3VtNPSXYMQ7Vkkt5Mhy",
  "key11": "27DBY8EG6yGkhbckyQxUYWGvmPfvTQbSrcbnpd8i1u6AmYsnZ97TZB6rmT5233F98PaR1vXkv8i5ZLv1pwN4GuHh",
  "key12": "3x16g2HoYUrpNvGSPDbFzF5wSJTS5sbtNLCjdmMuU76NVJJtQFi5FFYrEEuqyPTz2jmB8z4ZSVuyTzGPWG7FYUi1",
  "key13": "3bPqEjKBQmp64mvujfXWWJoE9SsnG4p99pk1ZyRsocdGW8Pv5FZa3iNpr8yZqAq4EWsNgKxiwc5uxf8YGGCxBwJf",
  "key14": "2MRjGymYp5zadcsNYJanPCEVKAwfYbGjA6zGBhhScpApRXxiPnGhVBvuohcMMXPbjoC1Bo6izxxr4S1RnKbhv742",
  "key15": "48VzkUB1zR7N7ErczsbYeqq27SvGHGLvxnLFxwMbnCh14NaBe2eHfuUYsvkonNBsWfGgrB3ybTqwa7XqudXGFuWD",
  "key16": "2iwE69f6SQB25McidcB5v4vhuFCFFybZP1F6GyYsRjPoyPkBjniFR5QMp9AsdeVDN9e6AKc8YEcSfCTnbmgpqaVG",
  "key17": "3y7jaRLWDXKRjgJy3Gr2zVmixYByJnRy7yVQxwRXbghgAm2dmZ4EKX2W7QPafU7EK5gjCfbgbsnfCTKh8Sbt14AB",
  "key18": "5WDaiQ99DW178BCRR1tXbdrhknejGt3wRwACTutiWGroYsCCuP6hsLBmqYAC8qGqErgnvPTCxZTsrVib22eWkuTh",
  "key19": "5sxkYZTEp77EYq7Gghd3cnBG1mTdm2SUjzR3gacJsjpfP4av2NrKQasRTFfGkEtVPPvumNAa7LBBRHnfwPnv4a3u",
  "key20": "4sguugnNMntDuGTnxqH7rRkciiGaqvrXwktyvmZUsgvn8wjrkSpaLRHhuYkmptWLUHX97x9i51aoL7onPtvFDXQo",
  "key21": "3yAKFat4T3eU2tZbvFdMMFhQyQtvTa4cmQjqWAFiyVAbghwkDhNd3ziPRCUgmWJWeyKFEHMyGhwYfeUATiMVu9LU",
  "key22": "5n4DgZFytFmhhGxZtpZUVpLFcAtxi5q1qDSScZRo2Lufn3TEsHbgj1EcJR5T3y8n6CXgLtgmAKnxZyEE6z9UYPyy",
  "key23": "5kN5RekLrf4cMn5mHEgwwYUFmgf3ArTYPZViA4iW89V9hkJL4TegZZsvEy77e8yFVGk1PDxxong1yWJsreu7QiCh",
  "key24": "d3PHL8PMgjneMbAZDabJPErPtBie4qUaeK2hc1MXj1wm9mRxiEbTA2F3sXtmSH15622Ksj86HfmUR8oLq8t88uG",
  "key25": "5JHJ2QfHoA8zLyYESbREftcmyiU56jw59wQxgiX4oShLYj5mGyCiycq5ZxWFRqjVV53hZRhmvpAucZghYWSJTLun",
  "key26": "5YQxmBhdEoA35zoU62iFtVtnCZBkm72sj9DJEvghM2EaMuHhzghFN1JwYtDRgUy8bwj1xVzLTScb5RZML9czsqMQ",
  "key27": "4hv5moaax6JVuPy26i2NfJ6GHX4fwYztabo9Jsq5svxXfLTvvSLYMBYiTSnJDWbAXT671PeP7N8a2ub9LkqFs2zz",
  "key28": "WbUmCrdUrDLcvnUH7VfKwwyU1iQoMc8TZ6Sx9RqK4LBs1RW1G3jMVdL5LnuweETpzTWcLTfqts7TPAasfvVytVW",
  "key29": "4mHNvAzPvhDbAYXUViP1GcFLJnaEtqPHumk2msmA3PoFAhof1yKPs61XzjpGRbtYSnPc8zK5MbLXCySqXJxZpacg",
  "key30": "2T9yjovvpMNm1nSxnHk7eDQtADwqxnMVLAbfWV4mAx3V4sSfEHkR92nfWYPJUAYiCTsPAir2B6Ya9HP72ii4xpPB",
  "key31": "56mD8oku4TQidxR74Q2B5oUqu5JyvKUf3PTt7AypHAqEuSWoaAPLs4AHT53FNdi4YPfGqZZF2GQfy8apRJaroRNZ",
  "key32": "4SWySvkJ1ssXXJQgfJw24cQVgFpURUnsWbb2HXrwCAMGmrhYMk7dakUAhG8koNpwHadn5HQvyiePhFqY8H2tjWL7",
  "key33": "Qd6wWR7iVXzdRmwrChkJLLnqxeQUvBnP7K8xNjoaohmdHKKMQ3ggzetvpBtgrWdV2XrdTZ7Ughe9BjR22SiBi77",
  "key34": "2NtpQyTg1jrnPuss3wBz5m56ncgRKQHLZnGWg8W4ScCRGG2uhz7yp73RNKpPAaJ57NedSsAtGjpvx4PetcpfuJxA",
  "key35": "2TFcScwEdstUHMmbYWpsnk8J1sCyhTHeLuyZf1QMs8wRteDoNbBpNLkSYh6BafcNJgyavBuf25urXBvkJkHoni8b",
  "key36": "4DmrhXRuD8rFaozpkL9bUGQxuvB2J3Lf47YoAJAbX3o8B4sc4wD8ttfk9xeC1F9deNWa43cTKjTo9yo9dRRAZkZW"
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
