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
    "59GHimVJAScz7BsDJhQ9ZJcpdCdwmNtfrk2etxTD2jtkzRWg1YPknSroR1SH2qp6biRqBiwMhHt3Khpfr4td3Ju3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mpKMyFHmqgLzVbAmjXyxhTf1M5i5BBy4H6znNdHJUZaVTxdd9jT65mAZwZSaCdg9thhU8XsLJm6BSodoZ5dmQf1",
  "key1": "5QXAMCkpvyCsHqtMMd7RCXPogC18je2NjdwDvrMudhro2bt5huhwsMGBeJJm7dJjHyGR1NiANyNsVb6ocJcVWPsz",
  "key2": "3YfZCknpLD2sqGagVRDFVF86mAciW4V3dWvJRDvLshuzbHoNGB8U7MJ4C7xK6qhtNK92VpVGcbsn2hLscKxuqGv4",
  "key3": "2H7gRZgqNs5N61KYZbsuEpeCXp1dwWoKnCLY4wZH7ACKis2p4MbHdfhfHvByA5VuZTLV5wAnE7nPGZJPvFCkaSLh",
  "key4": "42J6bwVvafDDurrsc7sKCJ1yfXf62yMJtCcYgzP8SFtd6wsvDHZugXS4rceaV7epagaHsoWmQ2VN5jpkeYEFXEyo",
  "key5": "2oZf7ZqPWxoFSVGs9vgFDjri6WGE41GLf8DMk8dGUtNtycUG49H2d3B7m9Ukie6vQQzoDMqkxiXdxCZaD1RkxErM",
  "key6": "2Cw6RjYTbQtTnKuKVgpVjdCCQptjhEFsQgcEqqYwTnnv5HgsYPga97EfRFA2ezSRDLBSAu44xuwTxJSYSh4rgmwK",
  "key7": "5yGe6qv6MvqAd5ryk2SzbChbJuSeTxLkw2kcYsSi4JDj9Ag9iNeNPWJcVkXY1etD9e8jWJXi9LJHWoKRo6zrvBQi",
  "key8": "3sM6uuoEci5the3tRvSzMBStLAZYpibPoBZcLqsSynpmtWPfUW6oarzpH2mYRA9ptWwe1vYj6DnQDEcgEiRUMPv4",
  "key9": "PEmoz3g6uyXwMuX3Q9nojJUamqn46gUPRosUi6Sf4bFeB4foag4RiumieLdCCxb4Ju1E2emYMLdEQhd71cMeagi",
  "key10": "5LtcAVu9ytAdh2QWgugoHj8es1NK6ESsmyWRqK5c7CTjrBz4FhvwN2bhZS1Cpia5zwwsSxakMu6cWsyvaxrjx59u",
  "key11": "Mo61a2ZoyzF69dWeg1e3AzRUNVg5okodTNcFNvzEBSaEe5iaHoBMKMk66JQS1FrWhArmyuEx7K6Wn8nwsRjKsrK",
  "key12": "5xAn3F41o6gXpLWGn4q4jwuJjxB3oii9CQEcYFCjSB9oSsk7Mx2DrMgB8DrFaDeLbsYaBKhiV19NF5uV2oUXgLwp",
  "key13": "5ZWhAi54aC11ECVoPYRnsJQy4tLBm4QwBy2ZSG8xaaMPoLFGEv6dABjGCT87JqwZgZrrEvrdGX65xurnmYDdWL3Q",
  "key14": "2J3qQFffQp4ZeS3LNY5STs4UhHC9VS3EtcFqTMbZmZV5om47dJDEm9bAnDACBfGH9BnodoVMoh3gNQHHn1Ri8E5m",
  "key15": "5o4652wDfykS3ew7DS7LTo6HSG5nBkrwcfC1gmHWJC9cfoHRotwx1oA8z7Joi3RvAuiNe5jLsfLu6o5gkhbuEe1D",
  "key16": "5fuFvGqzSYvdNA3TQZf33SJWqtK7uwPzdNGjxErTiFf6jdTmvnzgMtbsbCmtKEuoHAppiXKf4uFYBUZoivJjL7Dt",
  "key17": "3pp7Ni2aCWjaPFk1FnRd6bdR9swYfcmABXk69dwJ3Ky2tDZHbJQHiVbjeCyDEYMtS6572EbdvDf12ccXk6jKHmoc",
  "key18": "29nP65yExnDbJS9Gp75Vk9iCdcP6vSY29TUsu11L6jeCcBh58RKpXhcmVrDzReCh5v8NQR5RoqywgYi2LLEQdPWg",
  "key19": "4GRVkCZyPVvU28yJyZGccfRKNxaNwPvV3bioMZazAV2tAByzY1pVGRwwBa2VwjXQUqMdbzgzhGA2ZgDcwGhy2K1w",
  "key20": "3tPUzZFLbfVGCFMyGGMWzeMdcXSY7NaSB8okzYycABUVDsLHioWhAb1wC6vqZUchWJJBD9wPQf5MyhQbUeE9C8Zi",
  "key21": "24TakXmsz1tbtuc6mtidNZr9XF6xS5gXw1UCYs5L9TQFvCBqv9e3yQ1G4PYMRMxH5wBJH3dCAF57CvF8G3Romt7C",
  "key22": "2hXyN45woDcQrM5Chwr67KDBqFGF9MVZ1uvjFaBbYnHmRBACyR4qzTAkAFCCiUS6sj5RMFir1bn9nig1SGnvpDHn",
  "key23": "4oS9cqAJPoDX4jistbMThFTYxFG3sB8CE12JmCyz4e5ps6xPi9JsSLYgDrnvMgRQURj3h8rA359G6QrjMWzLgZKG",
  "key24": "3TtE2hyzyM4oWFva1TXDknqjsGxjKwyCtRRhGejhyKhQ5yX6UBsyvdwSH1AKvWE2RzKpykYPvAyyhmaRTFseRfGW"
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
