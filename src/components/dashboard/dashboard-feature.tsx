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
    "5UiU3Kh6dQovQCLMZG7dBqjxfJE2Djc3aSRt6usev5RPmtqUK9KfPpZgWX5KtCvg9w7XGqdRmRc5MT8Bav32YpUg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42nejo14GgGyKGAVUjdq1X9YR2hXM3gX7L8kA8L22BGGqepHneBH7euaFFjTMiyzkJhfPAgDRcqufYk1mGxQEPSg",
  "key1": "3kSPkRQktrYsrwVB63E1Kyo6XdLbD1pQc3EJDuYEVoViynMDAxR1eE6jzRqGSNTN4ug4QUqGrWJ2qoCnNnu34By5",
  "key2": "5VtA6rJxiWmoCypXdHC7FkRir7jkkqHzSNoNFwAScBQQuQJh9fcfbRcNWJ5SGursF9tTmSkQVL4FamuL5hs5Kbgn",
  "key3": "4K9fUwv8SWevs8vpVXPt7rb3Fa6LCHRVr7uCYby4BB1pnb2vQoaDK1SNPq9eY2WUz7E7f43sT9cyry5W7SYf8VBz",
  "key4": "LtfjwV3Hcd17vBWmBcuTuXbCts9MUUEqLa5hVReRoQkFBZjMpeCwo3QFEWjSwqUfouAyAYPYNCYq7sqEKAF56uG",
  "key5": "5f3HK3ZbESSeHhzthVpcKdWFUeASUuqgey9sg9FS5WqLas7frkRukBtTZ7BwnwgK5MS2KV9NjEaQrw76hjkRXRDZ",
  "key6": "UFKm6CVE6rkj8y6o1Dyu6nb8RSSko27zqDNWPC9hVHh7Lm7NhAJJbkJaMoxJAbs5aTz4WHSshAsnkPih2mmcKsY",
  "key7": "5fPL52Y5WYm7FPvKBnrKStXgWeDoNkHVBB5Kt6mdGALBtb2ZEgTCARbBBnfrbN93BdfpgQDBa7XUb3a7PtmM1gaf",
  "key8": "4JxcWakKejLFYrsGsuuiPLthCwJaZ2CJiMBE7CmHeXZd4UqPuytkycd8o9R4cxtp6UnDBc6ihn36x6KpgzKMrfHi",
  "key9": "4MwNSvnwGXJnEc26oKKTxtZF8YoAfrvVCZqesQ1BHQqMG9TAKYk83AxEWcS7ENyYw3VPHBYs2y7yqkvcnW1M9AFf",
  "key10": "5zRJL9Sp8cQMfV1P1Ym2fYqTDtRmkkBMRLF65ojD6KsAWuW4xbh5WGxb1wx7Q2hDM4UDYsUUpZSZniarg8PH1xEb",
  "key11": "54qnPZiGSrPKhcVGpaSzwaiPh8bBP7yWHUBcF12ZrDq94Lz1gnQGg4X86swKbNZvyU5X7JPsZz3cWQPz5HBE4WRs",
  "key12": "5BuH5VtXVamg2YUFkjYFwSsuYbW8NR1r6YtwgELHDK9t2qb21fShurdCZPp3XcSQ2BTv7pDqn6cfjmKVQYR6CAx5",
  "key13": "2z7htKgSDssAyYf4TQzUyFf4HN6HqBJ13LDCJ387LZYEUGoii6fRt2CYRE7MgQnh9KrTFPLtnavcz1fzQX5HaEFD",
  "key14": "5iWgxGfLCB4Uqa5hkYkoVx1Tr5aWKGSsB3CT1aBUfcvDyNigy17fudD58kJC6abpgHfWjdheNwjxdVbccQe2i853",
  "key15": "4CXv2c5365LSwM81KazR4qvi4VjA3Yro6rAxGcoQtMK2vhYFq86cBghRQqbPuexxNWk6YoP11WWHsPTCrz38pxGo",
  "key16": "3n9mcgXUT5sCguTXaVFLQqth8F69jEsJisxTQAV9uXVmkTFUqWCn6oewK3wtKfaaxGhTLsZ28xxddm7zUGCJrAVp",
  "key17": "5Cv8TVnnjJB8HFUEj9YcrHYPfBHRSSiY52WLcX9iugdEydQA3GDLTySiWp8HFdWwPJniwxv4CFGaDTNKkiUy18MB",
  "key18": "zdf4wGMLY1ETteN8w8RQHYAWtckrq6zpeNp2hm5WUrz5XyvSgZ5y6rGwmhQVwGrt9ETxei9PVaZHgvPZeT6QHM2",
  "key19": "21A4EP4ptt45nE3x5V4zB3B5zVefJiAFFkpHjSs4mdCPRJb1STZL9q3VjNhUUfeK2yWS18MDrBKmRxQmDWANuWjb",
  "key20": "3rRFAG8FXnb2bUvp5Zw3u1z9HMzpmtivQ6yXk8aL3cGcaGktNA9rVc8coAZHvtt6d1o2dr4LQP9VcUqocA3yv3fa",
  "key21": "3X8xekpvqeqh4NzttDiJxSQQEawzy9gBmxaS5Uc74WQErA6eU2qEK5X4i8xSDCAsCNCryKoCgRdDnfPCM3A3cwsw",
  "key22": "4wGHStsnwHszdPhcATZuemBh66o5mGM1cDjK5ZGE4RjSGg1NjZpSSUZ7XXoQgAb17Y9DVSBfQKGTkwWppnB21gDF",
  "key23": "YBb6FFJJQJ7jbweAWfGPEddHs3E8Z2AkyskwyronG1xsYAXjajcvkZSRkaRwLoPTcw8vM4UmVCfLWzMj4EBGPkG",
  "key24": "2FdPTuEBgaftVKautmLuCCBWsEskCXcbKERBASG3xnUJoAnpyYd9NtWdb2EzoG49prAbsyYeuiHKxhvFUahrrAvq",
  "key25": "5Fk1YMizywJkanukHiLENMa6RPihSGNBFh4HjjNcM8vB1sCPqLUtuvTMmWUngdS7vNz1c8DqdLfGSbfG36keKH1F",
  "key26": "478S3LYH7w5taKNx4HfDk2CWNFNgt3gnxevk1sst2xMYemS4rkMWHEmdX8oPRci6qLgbYZUned3CWf3cotg2MFK4",
  "key27": "UFyWwvBDf9z34SZC1D5YRAj8R3dTs3FAuu5KNdrjUJmsXeL5D6JCE48ES1z8CwhASQJTn3qWAxtvoodpUwecG88",
  "key28": "2t35kV7F7EnKJZuACJD48Pm464bizvSRWY26XzVBPUL6KrmtKXXPTbDe6kGqPa8Zzchk1NBqd5yhaUiEyMjoafEp",
  "key29": "3x2Mke9DPNcoPYRW1TyJjnpuCnyorQ6MaNYsixns9tLsjwNgqcXDK5PXSjFDeKR6tY3EFBtzQ1R17AWD4NcvYTwg"
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
