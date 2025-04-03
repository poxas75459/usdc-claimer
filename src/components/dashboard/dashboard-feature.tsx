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
    "2BDMShaLppFUHzd3wtLC1jo8MNKt18LWFddB1TrMp5h6DCgEiiPpmvoLSgQzbQGdQxsedUu5EKo5DJb1SVC3SX87"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52rXaSJiiMJ88YBzLwzxBr3BFgzt2bxnA7QoAcfB2PdwVzUDBvmhfmEmHBGQnNNwnrsWRF2pFwc7aoRHrqXoPuSZ",
  "key1": "ZpsRSAGTskqAN6woPqRg3ERkMGz2s5Yc7zAuduCGhbXCaYywy4uMzGFBcToa4BvHxxisMiH3nfBBTewYS4KZpoo",
  "key2": "2SbV9UKijYiZQ33EG8RF8DwoaZEETLGKxEKu8y3shPNcxu4rd52WjxWcxib67mVHtBof5J7eTGHA1DG8KDRhCodn",
  "key3": "41FGYu4wxAtGssM971cMRuN8z8PvwQzDLeipwpPJMNoXUo4X3rMyTp8GVxVDVoxR1JYBMGmXBy7qDJArE3fesVfz",
  "key4": "4mGxeBiBkrrFdbMmfDRrtLPavs6WyFCPpGWULPDvkn5SyjCjvPkPG9GDzQj1KAPAWSUGWtFzUCXwALze8M54XX2g",
  "key5": "Q1tG8nKGevyWFpfsdauFNooWLqsLwpXAcLpnbnV6F1v5PzM2UMhEaBkfM5PNeYGUPzCv8o6cykMQSytDrK9HZ1v",
  "key6": "5sdQPvwdiakB6og8oEXfkbz7oEjmwtEH9RF4LNLkAmvaYbhWR6F4KzufUgBp9RqpoWSfL2VYKTDCQof4EpNtFQuC",
  "key7": "77LVa4YJiDYksdUeozKjBs8vJjXs4e5Azu5gYQgJ73tWNx6JD62TdgM7xvQE7kyZqRJzThGqAF9ehwdPxSZUxjj",
  "key8": "2sro2Z36KYhaD7CDVy4k9Nvr1gM3eeLQvTsdvZMRNKFtRzQGagTp6LdhwG9CEn5m6oNsaCyKHy1FfWQRndVyVvDj",
  "key9": "57EPo6qcQwf9XnwM11Tej7vJveKmjEf6NjqsKo8gRpVxY2hxS1PPvnSWFqTBT8omohUWtnySEhprTFc5Ym3zq375",
  "key10": "4DpreQLPkJKwEZDqL5rW9CZPLFEZT42LUdFLRCTjxu2RrWvY7Jksuj8bAgw4Ly8kVVmpZAd2X7d1RktB5tNyRNRH",
  "key11": "cs4fuGE5S9mCFovVi1Xs66hripAnQfBwxgpAz3efGD164GpgH7SxZEXmTkHrCLiC9P7Dp3fHPGGXBcYfzRFZXJr",
  "key12": "3X3Gs7QPgythk3Xd7LAM5DgNPhZBWBDvaHWTdkDv6NDUzz89hU9Srcg2dzf1U4vuqAgQciayQSXNfm6fUsKmDxJa",
  "key13": "LdtYfuRaHkbkmcyXgaF4FAwppyyT65DH3TKHrVfsi95qMSK1NsETbBXgx5UedApUSNiTtGQYW9jeXLe6Zu68QoM",
  "key14": "4Cijvakt5ej8xqkEjwwm635AJccXaQFXE7iBJ1DRtKixMYKLc81BYFfk3tC4vPthCESZxYi5kJvjVXvQVACUjfdU",
  "key15": "zH7WaxofZ2nX9J3vvY3XpA8ck6eAbfvAE3L1BzVxMTsWYNGTZSDQKRAJ5KgKwQuvivW18genactwpBLFV98Azma",
  "key16": "4psmL1c7HrXo2TfdujAsKPxBUeVcN3s3XhwR41bNHaBc3AtY4pBeV38HrFaNzqAaPqVwVBFDFJcAD8nYUEP11DDb",
  "key17": "2zqTdDa6XrKk3WanUMs9rMV7vpuPCNxBzYgrJ5uaa99CidZ3Dc6HATHEMUzH1abAv8okuSmCYxpnnx9EPjcnFYXA",
  "key18": "GHrjLgf8egprgGBRFgUqo2UviuwqDMvuC7peLPtKoLD8uHDvq64mMHycT4uc4BnTfTgYNhRQ41BXz578ctauNFU",
  "key19": "5aSzv3AEZBZiAsrL7gJ9hQEK6Tmcx26Zqxzzs1N6DNeJFCBUbV9C97TUFnWZPNZ5RZ74BK8xv2xrLxpvB6khAzd",
  "key20": "3NkzeJVh8sLdytehKxaecHKhDDbMFjazVGbKrWr82vLcUJdjLD2Yz8GDzhj2g5CFYY3b1NdsjSZPK98H2G8R3S9i",
  "key21": "2PXBFbirNypkANWUwwqsYPBbyrQ2T9F2nEApbWESYYZUicULZXTiyTHxD37gsoDXCapDWzVq6zdYVBBKBk6KZPAr",
  "key22": "2g49LFS2UhcSyXHwywd7zXjWCMmqA5fs9HpqPGPnNMducQKbJ1aoNrpKscdEZFqs8mrYzHJ6sYHZaQuyrG7gL9Ux",
  "key23": "5DQDuiyXQ3Qdc3eQykcrGzkma2Y5uuYHV3p5H55gsmak98HiZQX6AFrW387aenoJ43UgqxYk7VT5L1dM2Dcnrqth",
  "key24": "5kkNQ5gtFP3u6ryqnH8zS8mMPkTjy2hWDj2iYR5MP1Z7HZZRsnB2qX68C94rfH9iKxyURv4r7nGKJ1zRk4kk5Wjb",
  "key25": "4ZZkejDbo51NUVzhJceprLzhGVmMmujWMrKzY5FyWr24L3v3VB58RS24YMJcjgsZCDC36yWxeJ8KJdwggAN3XT1x",
  "key26": "4EM2ML9BbECdCFShrp4vNwpYwThxADCLbCrbwEJaBLZ7nnKGxE7y1SyU1o8xJLG76Ro78f2QVpJN1AE5cwgLiVVE",
  "key27": "2WwnXHDp3w2T5fKuAK59MYgDLKrKVni2M9eMME18cMtxkci8MmeCeYApcRMQTt5kvE7w8pyHvMQfSXzngMPjavFZ"
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
