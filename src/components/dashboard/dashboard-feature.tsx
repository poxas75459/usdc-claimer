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
    "rFFBRYn2yyt9PSrPycMm5zzz7W1SbdpFHYa7eEgSXw8jUQ3XpkEk8fNvbXihz9BZT6WjYUdEicAUEKxTPDx34si"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53CpWiv7ckZLxpXjgV3c2WQoV9vxKqGRd6yfKPg546di82tB7cyn9gqhNKqNt7keRiP1tjbJLiYft3Hviwah9vB3",
  "key1": "22HK2wkwnhkL4QAKtPPavxtZhiE16XEugh45deZPM8QuB9f5NcBgY4LpHauJkXsZTCT73P6Y6Akuga4L4znd5DY3",
  "key2": "4u3fV6J6GwjACby4CnH8DVi4QAQHHryyfGRVKswfzaE4cTNFNEZnxh7z117rxs6oWLG6qsukCmoVKqe2eL99NgTh",
  "key3": "4AYxBFaD5GnboagK9awZZRr9KAYasZyQ9kLyAJHzA9hZNY94DDSVYjiERpZfetvrmtzBr6kY4SvTFSb8YSpRz8B8",
  "key4": "5Xv2QTxUEtE58yTKGkSh1QtV6zGZmjunHbpp2n4D2KeJ1KB8c2xgt8hvVNoge9NxkU99eWkaV53n9gFAco8oFjoU",
  "key5": "58xHavn2TPdTnDPLvzA8WoMZo7jeXv1eJVEtXvSryPEAeAhu1tZ1EKjCCe6fXDT288SRLFtU6aW8Wg2Ts3gjVtU",
  "key6": "4ukkuXf9ZZAF7EjtvmjGFTtCdgiQ1swfiGdGFa8MxcR6QQWzQBG5B5oTAYycsf6aZfeSH9rYf5QCZTMNbpua5Np3",
  "key7": "92JvYiBdd4PFFVRuzMUt7YLGUqzBk3QABTeGZzMJvhdiQAbrqaSpWzqgqcwyZjwNCEZYWAWaRQjkJ7nP5uBkwLW",
  "key8": "5eAo4QhWDWUJToczdXsJkCZGuStSaLYYm4FkCzLRTAPDZHQpzFXupjWQvmsQ6mVU3ojztNNV9bx8Q5mwW7T2QBsa",
  "key9": "4d7tfVZZL4zbvV7bgQ9p1qdrJLTnL1kh9tkxS9Zw3jeWe2MmPUrFEeSbqrUEWY4ESNbbTHBDyTAKN8Ab4iRUiwQj",
  "key10": "3KmmSq5peXNcnRqoL1AHo6EDf3fidzYD2JZX2ENTRvE9ZteQ4nKBqzAwZcTRb5JwnPzDQQi6RKqYK4Wzz2kFLCyk",
  "key11": "3v6vUN9gWU8RkgrfNoUaFrdpWuHma8ZsNN92W9def3jpFcvHpyR4epMEVgKCyHiB5husCCU1aFcbt11hgtJ86ngi",
  "key12": "4f4YCE5CQ6Posdvvm3FZabcaxMKZBhNVmXhvLPA8dvmH214YdA47Qgmk4LQH1Ybk5CL8e2XH3CYPXPHNFnLSWDgL",
  "key13": "2z1Z5FbCDgabLxWdQZKynLWkaC3yDxF4YMa5zRek4H1gj7wSoncVtq7pCJvHwBe9jgqFD8K112EFhEdKAqrqkRmU",
  "key14": "4e7WdzFWQC8CKBtA8F6RYjpeuR7TLejyYfDBZFqPgkRpCi5XWkXsW9ndtWXSFy32UpBv9aRP6Fhai8k2debs6bTy",
  "key15": "Vu8xCrurjc3dCAtZYg5VEuwjKG2ma3EaeMMKvxHXQGZcm3rVcS7WMDFFxobhavdrJu7otyEaVFCGsM1W4ZGhtxA",
  "key16": "3E9mbRbAM7egHcG3YgqQbKagVFD1LASpVCUePAiNKxB5gDFH2BKskSNx2uqtr7mRnp5jbhYoaRStZ57Qx816R1LJ",
  "key17": "3zkbveKqSmMyvM897hqwUwVwXLyKjpgnLWyucPGoJ5KmqpPF79nw9DjfbLoLYqzMS59rUanaPXtB1aU4C1rXZrvk",
  "key18": "5rNmwHytjaM1TPfdsbJdeo8SQyC7MYpixPnSUEEoVuvdsKnyhVWkrjLZf9tCWYBTrLoKoMCuCdCmEye6ykChWm5m",
  "key19": "nFWsLdkbw9sdPS1Z56M6S4aq6SaDTFWchyjYgz7Qr3BEbsLSBgXetRYc3NYHNtiosFoH4uzFBu2LrazDMwqwCDW",
  "key20": "UP3DhwNf8tpVB9qRNkG6Qqx965koFnhkChi28s3b6dfaATqiiCo4E7fEJyeub1rgzn6AJ7UBmKpapjhiQPiriKd",
  "key21": "5QCQJDH6ymRGzLgaaAjqk8UegKz2zWDvF3HMhGBb4MCe14WcxhufZ2MiZ42EZdWVZq7jvHp5Vq7TbFKqebcSYWXf",
  "key22": "3gu2Y7EwpEXdtqXeqPXN9DiCg9brpBSfNwhYYKum7G6FR8fgTRfBG5iwjo9Nv3FfLvYQsKnwDW9rU2qwHzCTND9R",
  "key23": "jwN9H7EU4P4Gh1Zh4RH3jRGWqc5rrAMJyJUi7GGQKEA4AvWfu3EUfj3jfKwpXgHBHvny5hSkFSPw2r51JHQPiGM",
  "key24": "3NXozLnGvKaamguJhZbdchFN5xgGN3QzEdbH6Mq8NKb5BxQacADRDAkDaBbak4f7vn2kMwKPq7yv6D3Q1oG2yEWn",
  "key25": "ujbBpSsJ26VhEof1qQMfq2thWSVeZhhGw3mkWxeaFoab1DNqaMkDp8qdoWV5cPVLgCSmn3HXmr1mfWPDiioHSWx",
  "key26": "2j2ketMBcWxNsEoyDapQtZBVKEicgP7AaCEYhtrMYwqRYAp3bmjnXmwTkVDiUcwEcgCtq2yxa4Cg7HyGmkdR32gi",
  "key27": "21TaxPPNF96q2xAhffvSDwPzXKk6gvcEzHobs7dA7ZqM9KcVoV1Yq1qsJiAwEb8EcMarSTRu7JSe1MW3pqSWwz5r",
  "key28": "PZSt8ukEqg9SiQ7JrSe33k5LuSP9CVp6gc3vXXjsVEbT122ZCEDsiZKrCaWyS2YWmQ4MvbKcP1h9hxAJjEPUbTA",
  "key29": "4BqtnqLJeBcqrTjSB5zvpHpeNtuZ1gXhqWShnUSVg4QWiNNUZ8ppMngNhCdfkkaNbjAsWzY6RktZdXJEhQhTgfwL",
  "key30": "kMtLuuM2FcaxEe7y5yCXQmKFc4bsHrq9txVL2wCg1Btrt9bdDqxg59FUpimqXvFzXHjULx8Sv8yrbuKGCY2nJoY",
  "key31": "5dsr4cD1cC6M9DunM2iEy65JKz5RT1uQBpr5UAH4QaG1qMV4GL42JpFUboFzFiBxsSU3rzda8NfdEhkiZbWDX7zj",
  "key32": "3rBjbcibkDk7P1kWrNKhvz4e61RDem6kDhjsvTUhp5z4p8aqu9t8UnrJaJm575h4aQ5fqiPRrzNEBuFiGfxTWDAF",
  "key33": "4NEiF4BkrZSqh7oqVH2SJzEw2686zua9HjRHs6BA2XUeL4aenrW57EHMAr7GMEp3Mfus4P2sYT5aiGFqeGx9ryBT"
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
