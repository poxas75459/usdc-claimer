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
    "RfhznG2gtb2uvtcn2TjmmxrZKiseY132LEEQ4FmtpPtPtqo5G3ZqYatZTEafUJpwtUGvPnrmyuujWHXJQsyHYXp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fwdewdaC8X8HnWCN3SW8JFZcPEPnsdaffWhk2PRJjFUDYoKbgYCiMf79ZGZYDMqJDxzMhE88n2mVAwFrqqLET6W",
  "key1": "5NFnT4og2Mc39S3dRTo7TmitWHxcURY1z2cHcR8YtG8USykYHPqXFtWNHy7RRuuqdBxm1k7YZNahF7aWdNEFe5Y9",
  "key2": "3HRGu942MoDhKmAY4ZbSpV5NnHikZX1Sbg5nFyFdmL6gEPJu5NbARmjLF2diCwqkYc5TJrnbsVPFoAQL31bmALCj",
  "key3": "3YTueLhGNNUAMJa5qTqzztFcKY2Jc9K51a2N8CEpdsVY8AG9u6ut4dQBbgvbdzBqBBZ926WHBrQ9rab8GLCaeqcU",
  "key4": "35fztvBaGs3yfjxXbHGfXGnQKs39ZstBBPhS8qeivPdqzSiAu4LuLPs92oiBG9hdj15E9P9TxDGkn5CuN1GMEbxk",
  "key5": "4dZ5p7KtBX8xbSD8i4RKyUMBGNnv6PZ5SMvR7RaE1W6ScHZGYJqfV2Z8X3BpebZYdAbiY6qMZHfyfSjdQM9WaFVp",
  "key6": "2WAVX7vEZMEekT8DnAV2RenYVP4iwU7t45Ab5UDuRcV6fUKnS3G1DfDZ3PmhHCFGTLKoy4MAiLZC84Mq1cAtmywd",
  "key7": "2Z9bk27hyew1XUVvQqXWfBLVDd6bx6Ff5gUxWs6JNF1qPmZGupg3nM12SQE6pqjoWiX6PivCrQPtXkwzpESSPM1B",
  "key8": "3EpejGaXg2FmfZLaFcCyFinqYZzDTaKgieaV6JbM6kZtH4FadKMozQW43QeWWn6Fd3jwv6bWtyLKr7wo7jEg48Ny",
  "key9": "56VFNcyvEXmVeF6TSRZ8DmUZZRA2kH7xxgcxZ4LA5FqfCSH6RKKPPXrXLBAPFtQiqvfRiFye3RmYA4KYVsRZcJw8",
  "key10": "5yKxNwCNagefPUcuXoGf5zpQjkYiTViNCC8jYXLuAVAVxRMgj4raoss2ta2sWMmmqxCZiv2DkgTzgtCZgvNs8NXD",
  "key11": "3J4AcnLYvW8xvt2w6vjn6ogKc7jztJWWxx9RwtYiB2Fkj5ZHu2ntoWxDUuFuy5tigwR64nF3pxqUbX8mRMFVNmxu",
  "key12": "2XwNdy1f2no3jXujer1rH8mTf7TbLdGrxfmSajJHaHLRGmQafUaVvAHfzZfWLurfXxHuFEXQ8whnFaFqpyrd3xBG",
  "key13": "4VwCHhdy3XTVdAXzzj7wuXTRB547nWsvR6QWQTy5Q3pQbp2zEDhs6kaESp1jzVQ97FvQvXD5WHtHrSwJQe31fkmv",
  "key14": "39gFgvGw5xj1MXRbL8TiGJzTWCUFudHrSZgggmTbPmiKbYE6Nwd5ncsvjEta1Tpswme5ojzxhK8DjBaJbcy4nkyz",
  "key15": "67A5Xgi8LsJcE9Bybd2UsNTWQ1X8ENdFJPenuok7RCdNNcdJiJk2YSBs1yow2w84J3BEkmWGaA1TmrEKMBgJqE4c",
  "key16": "2raz8fKWHBxonixM5Ni81zoo66VAQtjkvKRzFrKxAby6UGqTCzsAapyeX9PrQvZnwohoGiuqJAuZWKf44RnruLYr",
  "key17": "2AZ2UjJyp6LBV3KPUtYJmYiFvoqLQEfcqMtM37rzQsaSbGQHvJq2AVGSeih1KdnE9aiWWPQHAMzF6xtdvuHSfNqA",
  "key18": "5ZWCQreMeHwCEQPQQGTfd6tmrxMQYRmcjW1qS2oXXzP75Ud6q93sh5LKmhTn7ee49rRsZ66PBJL5Mx4PcmKLLasW",
  "key19": "2KwEFJY2m8qx6GmH73sJxbWhnMusPk1BG7JqhCfUXdpQKzs8ZYiY3kaPVwHozAXeAnLXVPyXaigcjyVniQqJAaA9",
  "key20": "4uLrB8K33h4xH8ushuiedaHnxTHxxTXf1DGLMzhmsGMqC3TZ3GGADrEyVFMTgupFtFqY97DdUcQJyGVqsU9TaGzF",
  "key21": "5R48zXDBtbGipS47LXZSX6uaMJkXJ6b3ReiaZz1m53kAhV6d5ZbBf7vj4HxhJqFp9TVPHnwGpPrPCyTzj3yRAXiX",
  "key22": "4dLsW3Taxb1NtZDNk8fZYyT4jF3nLaYCU9offBB8QJwur7L5WAxQgFrft9pBf9bck58GX1fBngdZ1MAmw3A4NWkX",
  "key23": "2QwonyYhQPfq4t4mDU16ZhwMt7NgiHWR2kgYSJnaSBaFeE8jRJbfCHKMUCb5bzXKD7mjzTNeE93ahmafua62YuYe",
  "key24": "DvxnR7jXzX95zaBKadisPa6qqocgbJHAF8vqALy2eJUbsoj7RT7dwjneh3v1oU4dMKXDdYSFrmHhCyJAXJcikzq",
  "key25": "jvk9aiVSL8AC2TnTQw82V1QeXcDuyLHhvzK76TR7Aimmh12m1KQaVtqjW7YhXvw9NWq9tVeSrsgzQhpCvWFptMY",
  "key26": "41mD7YYzEXBS3UJfRHnRC47ykwHgtf9ao4shaWQBQNLAw6qiNXy7xZJtin8MHgdnKGFaPGfDto3rrqBrYHTNrHiZ",
  "key27": "4VPbwr9hyYYYRW52CSNWVV6m1aP8nxcLcrcDFnBPJmLcowbxWc8R34xqGUaGvMpkgdBG646ee22HkUHWmEapRKP4",
  "key28": "5nHrxBGMv7RjjqGBSeVCYmCignCHXmpack22kKmMhHqp5NvYeoqXWzyWhxiRLKsL3jayY5uXoUnwtjhpEHbAaxi1",
  "key29": "5ZnYzVi6uTqavMgL6P2PScvnwkXWgR67v9d7VPAsr2trTfBZTMNUtVdem6RGbmkHce1ptwHX73dTyvjnZ5U1iJ9v"
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
