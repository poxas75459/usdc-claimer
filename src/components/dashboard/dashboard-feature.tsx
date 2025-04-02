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
    "2sU3Y31J6QSsHmpdJqqZAzhvTygwGq1KNSnRLyT3gzPmZfxZkp7pqAdKKB6FMzdVGJRqYb52JwhxniJJek1rRMPz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KxE2gan8MzDk8j6GmmoEnpQJBsXNZ4e8DJprzeiJLgB6nRZq8Wwid2gB48A2wnuV4wQE4EpQEqp3wTRSPFzPSUj",
  "key1": "3EZNXT3wMa4x1m5HU9DebgYH3w92GAEHDsPPAB5TUrP16348qZRtS3xVMsM3bJNg55vZYgmrHirngRoCPKxjqA73",
  "key2": "ZDMAkHv9MzhNDN71SUaGRfzpv2B5Qs4Ra4xsqfevktPvRnCWkF1AFKSjxntgaaoP8cu6hm6UFu7VtxhCMasKGgr",
  "key3": "2sUorXW4pLmjh5FkM2BzXZ9s2U9hCgaqov3UoXhy7kM34RCD3vwPFbgjYHMUPwcD5gMs1eFfd8HYYCSj74eSG3s5",
  "key4": "23K94ZVY94eSaRWE3FoMwgvvWa3TT3ZMrYdrowktdn4XhiA4fY2yPZXZRhfmmJgigB2pAD754jinoR7xLZShLWNM",
  "key5": "5tqL5EywrWCRBiGSwuRit1WQCXM3FG3esyBKp1oLsTbs6QTn15SVyYVA8zr8StXbgkWQnA33wcLbExUMMNNghBHS",
  "key6": "5Z2UYa3Jyb4nzrQT7gBAVU5gvduzZEsDrN2NTfeqZA4QwMyTRBCKzEmGNsRDrvqXWLVxfp37rMn4YKKsDEKSiEW6",
  "key7": "3gGam85dCJRDbY3mPsGxjBTQTfHYnYGa1P1t9qBLnvgkbHdQyxVn5WJ4YMajS5x8uCfdRFWytAdD81bkKRPPEvZc",
  "key8": "4cMAXq1Qukj8av21V1EEsR2YqgLqHHT1BaNAvj88bRzaRomBw4s4iyKxrtFAhPwVmQFPUZJnvw8aFsq119MJykdG",
  "key9": "pK3qbKsJgYgGvZhtUucoLTEaBHadyAAYQiaEYn7WNXeeQkz2KaZwPubnSyCFesTZfT6T56nhBXoREH4FG5yCpo5",
  "key10": "5hQcFCEUHJ3aG8vfBBvPnCmBNtjYNTm31ouStbfesPqjCyLEsyo62TQJYrxyhVuR3c2GhcZnS3ougLWpygMuswoo",
  "key11": "5raLTXc1UX3D1z9hKyt27pYgPSY7fKvnKY4THhtE6TYnBtUZhyCqr1LhjoHfnZ4FnTwRLiqSsNyw5AGNHThVevLs",
  "key12": "2qwMYukQaLdFg1JKLEkcM5WK7jAMFThuyhyNQ4AH3BXMTAy5HYRwWXdgUS1PpPqq149QyCfo4vHohkrZYGqwqRsn",
  "key13": "2u15nMLa9MmG55NGgZzVDUGPz2hVE23wqBms8gXjSaJTGyR9p3jFMhwz1f5gox6m2Q5McGEuuYiXpDrwiodBdpQD",
  "key14": "2WoS282buLbnjEBqJZMrBr37NvCKoxXPLSp6E9DERDDFNx1LJ4Gk22sATE1cHLDJQm9Agwspcu6AcgJ6Hrr1CiTR",
  "key15": "nhPU2155v8idnabjjwYRHptufSBF5y8WExtsKELfGyeuK24RjGSLzKzCMbX6FWBF4q25mkhyx8YB7nTVicAURVC",
  "key16": "5AHJTg9Ah4V9neH2KuqPxHFuJyH3vV1FGF84rQgXDzS9ynodvUWjgJPWSXjqT7BYsBpFwgqjafV96AbCqEnHUkg9",
  "key17": "2oQd4YUibmBrrtyJLUwVVfuQNeW7fzHcMJzmXpBMJ7jD1UC1EZthfTN2GoT1MPjaYzEr8FTuZNwqfULC2sikTr6",
  "key18": "3Qbjob5K2BUB1Cpi9PrXCigttGCZapX3CCueSSsEZpBSuFUkBMhtHkad8YeKZq6pfbaSyV9ZctRdrZBjYdewfpp9",
  "key19": "4jmn1UHKwRFuF4V84wSzYhuB1DZz3MuhvzU6obHTGbe6k93vmNkKfgUh7bFGRzKyQpYHeCbCJJbkTwk5bbVSFTfs",
  "key20": "3TysGBaqSAZPYrfTgAQWUVPKZbAR9u4M3UwGPtRjJDa8127DewGE3SeCUZCDXsowEjkVqDBWLGCVTP5qoPHK9mxq",
  "key21": "4SPfKNgDeBo7Wj99821UbskPJG8z4DpzhS2FRa1YzpJD75z4jn8R7SrgyJJcFz931nvKdRA5qpndam6LV2U98aZf",
  "key22": "5Ey9Lwr6zQF4AZ2k5FjRexB8XGCLaghAsRkokUT7YaLUhTAmqiJn49vD24jVqRYz4nkuswYaLzHd3iporEyhpu4w",
  "key23": "Sno3kcLuH3ko8wjEH6ZH7yCS2x2geYE1MmKQygMe8GVwimQpgksaAznzuYPuidvRxMiRhnCr6kLbPEajYGP69Zc",
  "key24": "3seZnSTNtbvX5DT8v972Zkmvpvatf1ezB8jrAXgbbThQQQ3fzxcPdx8vo3rt8tmmo1cfKWBFuLniTCSE4mSytTWE",
  "key25": "3X5cukHC3NnjvCmFogpAsu3GzEsCqnEeZ13hNZqVTKbafiNQWk5wNs5WkuLdn3j3vtZ4o13pvHgTuheBTwaJCetv",
  "key26": "Pthh1JZaqciWhqraDkc9zrHQFhfZnShE2c1vuRJYHCyH5FjjFpgRZxPmsoHJnzPGj8QeKNGPJ6Y9YoVkHGTtZUP",
  "key27": "16X66T4qEcVmx8PgNC9L7te49joKZ92j5vWE8XnGuens7vjfuuNSX5rPYetzraEbzS4uftjkKFhKxda6PK49fJv"
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
