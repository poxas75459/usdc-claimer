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
    "5fdnupckrEzH5sXryRBnuGKjTgdYyZBijycUGReZtNtee4kkTtStoBYqQUQ3nb6HtegazHqC9rRZCEhBRbcFDfnY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e8rWhG59X5UHxR57Zez2Tiq4t8NeFjRLr49cLGeAJBLCWQifix9C5UisYwMtPZ59d2r18ctPJsPnDh1v8WDqUpz",
  "key1": "2qAV2K41amT2y4MqaN6a2CpxmXCWxCgK9E95PBtWwy83XMcvzeLYhw41VN4m5uyv9VCpMrHjHWTEAQspZ3TsToYi",
  "key2": "KEpN2Cpqn3Q7W5iHzSSPej9Yj6nYAtB81nakyD4BJ1xNuvZ9FTa3SQiGxpcAQuNUJvfD9HHpasrtz3Ux2NL3QpN",
  "key3": "2sNs379mGFhUtZ5FujrvSwmmiwyWPz8C4KpkYAcYpXzoeVbZxpmsA56i2A7JkjcmqMPXxCQK8Y8rKRb6nn4Z8wPM",
  "key4": "4AqoVTsm877n5agFj5suZBUS4pui8Mz7cXNcHqGKEhDscp7CUP7kALXBQwG8xNLSjhY56Eas2JMPHH1iTZTPFKw2",
  "key5": "2oLodAgMo8AypA2ZJMrrvkEj3oX6mbVA4vnaLzEPnh7ev6g2EkjCHEedmSbtHkFoPSfduBwRfahJiSpPRUrBSBrr",
  "key6": "34g3i2VT2sMqNLAXZbQrgovtNC9tWQiYph5kZTT2pVM7TUfhtLm15Pfwyg2C8QgSXrcKtfjZqV9uXTHx2k7XyRK6",
  "key7": "56CJZf5oHchCPsGiHp1ou8QcGYJG6CG28etmSuLgotfz1ZPUu2cY1JNpVw5VpuFiSFHNzcQMfVKCFCdjqAgdbdRP",
  "key8": "tmY3uEvQyZqvkU7JUPhMDCK34J91j8UUwUVBQnd7AQh8qQ9TXK3NGQ7AsTbAeXifMjqHZL3gBSRAkUMQF3m7zQ6",
  "key9": "XWL3HjX68AH78fB2p9xFCr3yV1yC5Z1r3X9zcWLVW8Wk6EvTHTNWJ4RhdeAHurJvFmNGzW6vAkfTUVQYg5haoLh",
  "key10": "5FzKFSufRLz3p7Z9b7P3sUtQCjrKDAkQ4csPNtRTc4TTkm1yarZKBkR8emP9crekk1rCom5NL1j2YTzfeHfVQazB",
  "key11": "4oovAySqwEQNezTWWqA2GSZDJcomhMQZq83KKRUPjowZSUiyGLtRz6DRnnaM7JvfrSAJgjHbjzPXV9xb1aarrAG7",
  "key12": "3NMVnzAEyoeihUNEuRXXzGUHo7R36zUAM52PscBt4xYTrbcTehTdUo2HhGxkmeWBSj4nMgLeoZvJVHcrdk1kpyKP",
  "key13": "3PwGVRcK7FrVp1SriHsR6UKDZxFvDU5vRachcpgasTKi5X63cqh7tBW1twAj7GCLvyaHbmShHukNx8jMqASEb7hM",
  "key14": "4LbuzCSKXT5xpFBgPxY8ivapbgbC9DoEgQ5CvBJbWpkTud5yX5oYymA7UMcKUQacVHDFLU1mwpdCwkSv9zNxTxwR",
  "key15": "cbSfKgt1MuXNGT3zdSqa8uoh4vYACWSeommo6w9p9b4wp2uhxTJErXVBS7dwdwVod39MfqCMdYmm6MA1N2ja4P9",
  "key16": "4HPmcAGpNZwyYWtjaoDG76qWV7nMYNqXquBy9JL9e5bjDZJQtn6iuc5KGNodSWYRtgrhGah5bTMF8JimTt8A1oV7",
  "key17": "67WZmN5Hi29iwvwnAJcp9ZTCjHTemqPe7rYgaTwcckDpYHPtrD97Q4J8L8S2MwSmX2jccaj6DpcxMJrndQbcAoC4",
  "key18": "4FG9i5iLFvL9HgQg3i5kq3RmcQvXQuiqKNGJzZ3MjfLADuTafDhbd8hhkQ2Wx18qhVmsr8fFTp1SiHoDYUuM5gTf",
  "key19": "5DBsRbUeR9JhDKHdDum9KLLwgXwctVz97ZM9YMGD8qN35p1g1mDjbYQEssGszLg1kbUB8QyixDqsj47gyxv9iw83",
  "key20": "4uD3pVsXhB7CZQBUCmsVnRViVDQLeN4ySn3bhhJumTLVGfRyipUN3f9gsE1tiUCLwZCyBfpwAqv4VAsRBoLe8wjJ",
  "key21": "2jiHKUsguug2qRQ6nrJRFywdj6r7GzRP2zV3pGBJpyJvkFU18DYdiRw7SdVdAgawiwcB8zzz5dBwTsq5m69XiARH",
  "key22": "5iPoLq5jrd5K36hWFWWYPL4Ygpv1KvmyPSLd8fc5VUPLucLu61YMdQyQXfPk6anhH11vMgUtWnwwSidkUxsQsd38",
  "key23": "2hzPwNbuAzdr4Noz7UCWNkG2xniSKxtvD2qkahkV2UDA1WzMe9h1cYTLv8txUMtp5GZiMHgjsxdkP6bHc7TGoJz6",
  "key24": "49jZDVpuVzf8DgrnouHJjAVgNyCUg4AgSBNAdF6Q95RkRRk2w9hDFsvzcPdnHc6tpyqfTQoL6koPqiVXyamHtWBi",
  "key25": "362oWBzy1wTYkapZvPcaV6ZGhrsbRrm4rRMDpxtoQqqdv4f7borzXCKUQaeZY59VTnfgBjhEMApihqaWS7qrjqap"
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
