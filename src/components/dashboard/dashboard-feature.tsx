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
    "5TBJMngDfpMi4DHeaYQS8JsZV6XkJtPAwfVTkgTRxE4Wx4NGFTja8gcaUBbinPAA6LydHTsvNK4wVZg8GgH6mhCJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XxfykC5qAYnt4XhzUvpBYnBE9RpDxu9iXZjhWh7DMfebeaCiNsXaCvoaDJbAvdzLfbC1UhkScfxFKSoty9xhjm6",
  "key1": "5Tc1fb6YASR5ZNUJU5ALhTo55K6KGJXJE5YbiDM8yMprCEXEQ1WVsRGzXuTkVRHn73fQrTA69ueHgm7MTHQLvNdB",
  "key2": "2p6iMkXiJ1z9FUet5jYgPYeJav3X9edhNLicsHkRzdDM1uLbxthe8mi8WrD9XtEdMwmMwFt4h4vUnLoDXByJCzZm",
  "key3": "63FpeSWD6EKbvhmnV3zexBQQi2qSv21f4xYaZ2JzVbMg19KStAbHeQJzcCERd8GAU6mbDjckK5VJCqtTLtRdr11t",
  "key4": "4Q5AhyVxMjwq9TXfysyZFnk66iU6426obWRs2RpPrcMUhcQzyeAjTAfUABysT1Pocta3qV8yY1Hvj6TGocjYLBB8",
  "key5": "oShYa8Lz1gVhrD7dxd1R3SjwiCthamedsDQg993cSLwFbtbzDT361UTCzSrDA4tcHRkpaQt1GEjPwYPuM4u7cmJ",
  "key6": "4tpzRzYJU41wwyDciBuNQSCDehwiSVm1sgYRAT5BU4XZEmbd1vA6QeF1af9Tt5GCkBX9LvQaNogy8HAn5qPE9Y53",
  "key7": "4WUHu6nK2U6D3Gi6KEhL14pVyyNE8eh5Ys6UDvY5rN3xwB8rjCNt913ZBDGaw9CtNfXnCQYFa7fcX5cUdeu7z9e2",
  "key8": "Pu9nJ1W95NBEqTzZ7sRwmHtA5y7kgRBhD28GU9ieo7vgrPK5tQakm9JpBYkcKa8rAcYq9kkqmmAbnbg7ADRYzeV",
  "key9": "3ATXEMJUsto4YLxnC9nSAi1sU21RZS9qQdVivLTYmSuYz5DCtURHodS1iDMXYvMT15nt54VGt86tf2781isksHrQ",
  "key10": "jcCScRuuSgE7ufWvN4phz5GRnmFFc4TyrX2wMg2CpncpFSkvhBiXf9XREsSpXM8xnpXXaMmc9qrEwwC9v2vHfg6",
  "key11": "4kTP1EqTbT1jUQGVZ17ttWaXWnaJz2n32v4yT1NpNRwhxZhQVfhqL8wr9CgQP3CvegaVDBTXQ8Gvd8RVvDBQHL64",
  "key12": "2z2ybEDh5JaqkB3whX4B8rBy9ptVMaaUxJJqczadZ5aRRiq8fEAyK4CwoCEAuEE9wxpVT9c4uzqrMehubzEtKCJe",
  "key13": "3dnsXmZF3QGSaAtU8qowG9oUgz3qMcp4kxsnV3Bz3GzvAwrv9rZMYAgcN7gUYkCgjJq5fyHiYcs1F6436tsAnfQy",
  "key14": "2DvKJtHpmUEeGbUnsjPRDWqmVt2EoCYee1XRvPNvcnCMeUJTtpxisryFRnRUoGeaGHAwq29YmmRV2D441FmW38re",
  "key15": "519VE59hLPyrDj9Si3YCJXeRcFDVnmFwF4HxgPi3JbcY6EtQeUgEFeZReUb6hoguuNW1F8kqFAqdzfh85ha858Fe",
  "key16": "21Ke3dytb4VFpE5icGyMZUF9yteKiqaVvWaQHVhfc8kaPkTpqWLvFymE1NbCkJEPR5XVupFRonMrQ1h4YVw4iyfJ",
  "key17": "59enA5GaNfrqL9zU9uGzJusqn4uzY4FJ9a3g6jhfoufXnaHmNgFfq2GRE9549DdEGYxMZbM1dw3NPzCCHQeiM456",
  "key18": "4khqooV7YtwpvcYqwwRrrhcA8eK1FAdHgEkbyz4NpQ6yZ4E1AXr7nfHHvt3QQXBGv9fUP2EZNXop283sxREn6btc",
  "key19": "2o2LBs4VKPVqgshCm6akmRQgaPmFxXub7Ww7K69aRnN9kSX8jVhPk7JzyZE2VZMUo7dPdTBFWHaMxhtqScNztApV",
  "key20": "22bFPRcgVutMGiMAVD3iLV8NUUAPrY13HM7bx32spMed2hzynJkPFbPHV8nW9dbUUyBuK1gjHyqNkRCQnT2zM3e6",
  "key21": "4SXTAx3bfZbkFK4L9iLU7mYb6sQL4psx8CCZQ1X2cTYdrKcpDyDWJh2p2NBcxfppZXyRTG7DvdZeAvQUFAMzj12A",
  "key22": "JuCfwXYhD1izKihvoyRztPj6FUjszeDVW7it97YNs731FB44RELFqDZBECc2ULza2C2fKb1wwFC2Cpee9dEpnQk",
  "key23": "nTUswtHKPNVPSiq8uvXoBYUzc8yJgWoXyYQEHKnKXp1K1Rh7QPrjYWekyVFU1o8MfL3T9n9BZEppwjdR7VHiza2",
  "key24": "5hNbnPa8UqeofAmCiSskVWXUr74fm1qxG1NnrtbStMRapPuprYSZpNWnsfx81bhzV5ZpaV87UCJBYSZPAtGuyFSx",
  "key25": "63DP9ypEJhcYTZHhUKPmDSpafDsxooqENBfzmxtKmB4wTvB5oeuDuVzudGY1yb1tDZ3WFq3wasM1Y5xv2psjET9W",
  "key26": "32hq3QxUCx1hTSF1XzpwKmKnxmDT6XESAVAFL6TL7QuWYPCnhuaM6epcRYBkeUvrPNE1eSqVZdFhgPwqDDvuWHfF",
  "key27": "4pXABr375exoN1AonTg98WruwhHW8UE5PkgRssixXRiLP17qDjDGDDLtZJx3coZrfrra1huFiStxLjs5M9q8xrKj",
  "key28": "nWeypbZtre9CZAevx4DrdGbtDHsGsontMo48U73s84KzRhDomb9c8d2p9LxMUFVMmTW4L8jAsm7XnHzwz2LeVFf",
  "key29": "UHeVnJRWqqErkddcJcEWA4KkNw4WHKm3oD8rWC6U3dVhk7cJCUvhFAZCVB2TtRCPdVCZRmf7y6FM7UoT77Upjkg",
  "key30": "4NhAn6PoQUfwLTgtC8QPPS378E3s7n7hHsqENK9h6wfhVpNCFpGPaKZud4nc9VLNBQ8FhZAP3o6tVGoaJoPCDaXm",
  "key31": "fza5tmSApscTYrgKntVbq7gTa5E6S4miErG4VJMJn98e2gRN9hMvHXDj4igAhFMYtQzDHZ7rGvLvGuJpioFHykB",
  "key32": "4KJTM17dTS9rfWL7dSH9yCwCVzunQoHxYEhBSuySbtJJ6Npg4NfxhFdPdVyskqxx5TYrZRBQDK8yQnNWQYr2V193"
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
