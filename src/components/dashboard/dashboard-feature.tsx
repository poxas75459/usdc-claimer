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
    "4BWr4Snegxy79jaqDK4emta7KW2dLZbgUo396nkCt73Bmj7SJbz1FiLkiG6dfA2xYDX83Mzqt4wQt7FbMRUm7k5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62mKZysijB5AwskyPHbCG9Hr6nKH5yfp1VX9SRPV6NovDVhYFqYEhRY2jMAbNesXDSw5DNi3k28g3BFvHRC6tUAg",
  "key1": "zhFN7aWLtuwGCVakcoeEM6fDWQvvqD6Enm9g1Z3N97DrFZ2LEfhjnGA4w3wUomVcDDW1432AZwyV41orWk8awmj",
  "key2": "SxMz1rYR1Sa6CrpoJQQ4DCP4erfnCMj1qw91pkiwczYxzxMfRngsPHEmQh1TGQXta1BvmTAZhXSPhWt36csy5Z3",
  "key3": "5ULrvri4sf1TQcDbt78xL2XS1mLRMG84wMpAsFAfUF4Rvr3DXR4XKCuMGkDp9pTMPh7cfdwimp2BJyLVHVLV7qMw",
  "key4": "5XqhLXZHScZofGkBaVJkrCVZJh3CpQ1QAXgj3Ws1mByqQTQn3ZZmstUMjh9yhRhMpYb6Vm1EXaMvVge3LGfhpnHt",
  "key5": "3ppKdorLpLKaWDHNhJF91thZdeiKXcRyg1KnBxXgCYLDkShGTkCNrDkdFi4gAUKVcCnPcYxVUppmkRr7u6B7U5jz",
  "key6": "3AcmTvSVeLfQgAEyouPMcaVELzF7zjJGoguHtFDafK3RuRSeENsViZDnBghTTyTHD3hXBAjzTQf5jMpqsw6z7ggK",
  "key7": "5tUd6CSJvFoDX7oUQejjFQKg3crAocHcB6NjmyConCtygYweXXNJJPbz81xtgsrsAR7o1N4QmSQCHWot8guGW2gs",
  "key8": "2VCbvngcA8rrkdnpPMgVRoi8kkqtqyXjFWhr99eg95YjBNHjceyaJTyGMTbBPUrMMzVtD7wgFpnooFgTbSYojbDU",
  "key9": "QtMDmLgHhSPjsTFe3XKRo6CdDtSH3NbMoWGaxt55g2D3re6ArkaaYi3QfHiCSSE6A9EvU88fP9LvMPvp3MQa2Vt",
  "key10": "KtHWuaiYWA1Zt8pZkb6T871KwQzgFMMUXLYpwWQUrJDCHS5WkbBpiE3r6cB5EVZHaiMKowiaVkF4yfxWNgkwTdn",
  "key11": "4sHckbfBFASLncCU9sDdWTz4xJ1XG9j84j3YdDDf5zotTaibdu85rTsEDBSHMyB3HRWq7pTV9kyPfyr9C9QLzBCq",
  "key12": "5enJbafEAEwsV2H4WdSmZem1YNMF3YR6DWzUAJs1F1zMCjkyouifz1u4yQA4EYTvUfTuaszDzJWJKpC3G2cor3U7",
  "key13": "3a9FXsCjgV95a7NvT1tkhvsPefC9LbaDfM6NxijyrFvkitR4wTtsvRAVKA2BrHGrzdWz6eQ3Ev4H6uabWP6bgLPE",
  "key14": "3bsyFZCwL3ieS4wgPgjWNg57v1PaMYTaJNUC4eqHSsDAM9MryfM6W4ZxKwJKCdpBYQ8QB2viChbMs8mGK7zfbA9d",
  "key15": "3VZBdB3fZNeVeKKQVsbFzM68wwv99kTuEDAc7NHWxcqiedoUceaGFp8Q18ZxEi4w2dsadsFBcZSRayajtcvpEueY",
  "key16": "3dpE6nMk414CxZyHRnBs2gEhevZ9PGpXh9GY8C3TBXj1svEkhwydeVCrGXpFQqzYWp58fuquQ9dXn6SfFGjDFWLP",
  "key17": "28kW2wd6WB4wMRSRW8k5gymrCFyqR4LCb6QBpSPBLKzY6w6GNdmJ1MEHXrjqD1znkhtwJ5PxzTUgHW22w7ZoE9DJ",
  "key18": "4W8HjtFKe3RcnFzfpEMk8ctyqt68EBGjm9XJA3ZY1bQ42ozCSAin3wQrJpT6QUMhyXqZQ8JwDv1G9hp22M34KkLH",
  "key19": "4EtMsZi5j5taiLCnS5UQ1ZYtSU6Q9vU3F2ULGVBYrorWGievnD6DKMsRnwYvVtzdqptA3zGWznC7CkC7uFc3uDTP",
  "key20": "2nqiySVyY6sLQnoUbGeJnWTuuskjyvhR6G6qicErrfeHU78THkieS4kB4WATAmdtC43uV79b25Vo3Dj51V3sAz6y",
  "key21": "23Pe2aFCMqWgYEnC2kNkWr5DhqBW7anvRKBvmT8u1D5ubhmi3SuoKR4jyCpEgCSpe6MRvHDcJQHFRqdSamzVwdew",
  "key22": "2Th5Jf2KMraB8RspyzVWmg3DivgGopeGvDzH6tuC8vtDeXCogAAEYMFbGHSWa23Wc66Np1aCRXm2EhoYB2zy1as1",
  "key23": "2UwgL6H49vEHPTrogCe1EdZerAoWFhgDwQ4YPXjZwGEYYcrqSMmGW5AGx3SULcxR8LyZEqqy1BMqp39sHa6no1GG",
  "key24": "2Wb4cgEtghtguAJziXLuo1T2kZhZ5bH6gKtzrFhbeKfrzvYcFPAz4tHM3WK1T9HqzNwkRNBuXzdbVAF1eMr9DVKZ",
  "key25": "4pdpzqoioJ8bqwXpyzMHog4F4LUUdP6v831VetdaMvKzohjnkWXzNDdhHPbSGs2G6DpCvWM6D4gFeosXKxmjRDUa",
  "key26": "5YcGL5oUfCXYQ9EAJXQYifW4e7pYmP1dsuZCQbxXVaMcUEX1p1R5PMQMHn7hFNBo1vz4oJxkGfgAtNNP4ujUEsVN",
  "key27": "4Ak4XKHwMBHrEyM4CySqsV7Doef7T4YrkXYsSdnaDRBuRxVZdGptXJFx21eQmx8YZgbUVuhJ14ZemFDv7vqFcMfw",
  "key28": "eyZX6Rdn8cwabk5Zf2xfyNYrKUAVJaazurQcbui4WZEgK5uuuxBNi2d6pTPJ33kSkQTzoLdPyb3LJsEccNxWPN3",
  "key29": "2sDss1JSeKBXWXYT8YDmqnVXz2uS9gMwGygGA3feuNpEyK7uFRsPhx3EBgnjaHLGDtpVDTSqAaw41kagg4fb5r59",
  "key30": "2ZNfjLC4Za8bLHGDRFrpiBM8yMEPqx1kiFDRW8YcySH2Hdv3afXegyhmqWXfhfPp8ryK5LNSNFMvT9czRgRM7Jkb",
  "key31": "2niLo4qHMeMoZy2ZmZvyGLSqGFgJZM2C2jQiFY9mHCRFKyaKThvXyQnB42AcbSNb8TJ8QL5UH3LfQffzM2aVPEFS",
  "key32": "3RNJaEsdtpHBFuGQNfCZMWUb1W7JH4VD5gjk3VfSXQKXZdRMbufd2AyEhH7aYQZtwFYrkgw8bTYkJ5jAbb2Z51Du",
  "key33": "35uRnhco4FpYUZmb2uisSAExXZNKYYvDfEHddCMVowsSTEhqb9qGyVTYjavAuikdPHJokNoLmzX9rz2xSr8e2pMT",
  "key34": "3beyYHeQQ4EK5njjwtXsTXqGXEWLvZBjCLiZMcPq9kMg5VHEhjF73GBGqWBwH1s87BaiDwWRgoK8yUXJmMqmgJw9",
  "key35": "Wfwbfzrn7bmXiKmGZneL5nLncg54w4oU3rnBvWER6YAZcvhFTPEwN3SURJahGEiRvVMJhCY8Y789RFsiBRp4sfB",
  "key36": "rb9YTubZiD8RFiB3go2tzwhyEYYgaADy1qQkiZiq3FEV8ZyBkcGuZUYSgzkQ3sV2cG1anPC4tfFvuGrHJQ7ci6k",
  "key37": "4V9YzTSf55Z3Pf6Lv5HDxCVWrSLKxh9pZkbU4rKHRB3dDDPqvWWj8a3ZAFuaghL9wSq1WDpx4VmJ15j5Gp3SHq9x",
  "key38": "2Q4kBwt2i3zcgnSsis1LgXuNFRRrnFFprCKbujE4dkXVp1bkeX3YKbNPcwmvSwH6YKSwsouMaDB31VwikMozo9Zt",
  "key39": "4ne8AYcY3BcYaBZ1asY8QUxVvRBKD7gdUyu6pEDwdqJBJhBnriLiqgD3X183SbCLHPFwtrbJJzBXNLvJThLKfnH6",
  "key40": "2BcgvFt4vktxvdPKNsuHphHQ7FNwfamacMrRkTuCUoWogyJedUJKwitD2fKNTZ5mWfqjFVH3QX1FWMEBjrFqANFP",
  "key41": "26J3qjc36XSLNhfsr7Sbs3ZFVUcYPny8SARiKtTqr3H1QHzB3ZchrD4NLJdokdLA47zPb6dzGN19pUFRWfoBDvA6",
  "key42": "b9tVRxANGuTnBKCYzhVFVngQz81i2mBvRpwM2kEgXjj8DT3gx2j7E99T3tQPrbFLSctjbujw3ZfUan6Ki551meH"
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
