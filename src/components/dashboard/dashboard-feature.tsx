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
    "4oVAqf9M98WiETfDjqH6fWyRNe6xrsaEym8UwAPrHTCXxje1B4pnU8iuVrEasLCC7h1L8PoZQnzciDMUec4madnH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31CWeSqcjDrw2etLDMhFsT7VMWNXHjy5KGvS7v77hamnwDwrQetodiz4Qdy64ZSMHTq2ZAm5J2EaCKSMxsybujEm",
  "key1": "2GKqGaKfjKjgu4D7dFAvBTHwjaVdhux9a4PifdNWXn54Pw9ffaXRATc2vKUBVwULGL44k1r1mv6qEg6cWjkA1jhR",
  "key2": "3TpSARfVSoJ54UKLbWrwdHu2dwY9LtnvnFBTmMeuGtq923jxijVK2pxoF5r5CSBkZhWtqVMcoRawLHUeEJCfjSQx",
  "key3": "3Q29jredsp9RtXTa4Dy61SWDoNDys8vNLrbSqA8toe26UEwKvmDQHgi4dS829H4HYSPcZpF5Xih9rvUnDdtDroGZ",
  "key4": "3zvWkAkppyvCgBtWARrzNVaVzAciMoGFzGqq215kx3zcDZUXYJ3Wr6hvpzgmf7cTD8zg9UMCn4eKXBjTqMgiFZAr",
  "key5": "2x2mXicpAjFPM36Pjbo9Yfy9mZV9Mka8TpwpmzKvu341CCfCMozSDjdtgynLZMSQg85oXE6BwfCH2PvAethr1Uwv",
  "key6": "3ezswpW4uw9P7YYSJHyQCudEdLL2vLJQRg861Jc5N5GiSgXjBw1MYRnjkbViRGZzQicJkAijf4gBKJx6UzpUm1Y8",
  "key7": "31a4XLwb4JatJWTRdLfCGC3VymZAtfbX1PPeGapnbwG5U8X7cbAqSSDaPqN6jH7WVsF3RZ5dcZ74q7DY74w6ycQJ",
  "key8": "Qgh3Ecg5zwH8wDhdxTabXJ3Hjh9ZbeLNkdF4m3BqMTjZYXVJn1kDVxSVHuypGBymaWmf2YD2ZaDCrQvb5rJkhoF",
  "key9": "39b9DeUS2si7zqC2WjaeDtABmUTsWfPwCBZk9DWF5MdmwQBvkpC8unR1mYFL8weRuLF5XWhHbwfg8mQrafwHtEV3",
  "key10": "2QwfHuVyuA5ygUxezHTEDYaD2tD4MMewfZ5XEZUiUvctotmCDpQDXECAfCEySWUzPFswctiy911EXKe36GnWD6yA",
  "key11": "64XFizE6DqUYSN8C9HsewfPP2yMJoaNHXAfs8dxgP8TxWCdqW5CqcHZP5QEB42YF5eYeaJaTn4934RCqRaJKwGry",
  "key12": "vQHFoBNjEEYZiwf4q8bcyL3MgZx4qbWsUwR6ez4tDtRDm4XnyYSPcqqVdCJhQcV7RVAgAC3Y56MriF2tkQ9DqHc",
  "key13": "2a2GHk4C992njM3hPcDTih3hTYLVGEtSY8YMmqaSnMrQEVxCEMHapVvRoxar6Swqv4b3vC5VE3KAcrXzRYmAkSti",
  "key14": "5eAPrzfeXZGcqxMdYXtkQNdgBCQnFTtURYA5DktCvqAKFJ2mQvYNszcwgZHDcyVxCb96MKLfBtYoAMkpPaszc7AH",
  "key15": "3exZFKjFpF8RK1Lwb6k79Arst897EmmYBzgrnc4LMraMBwVPaWRYj6x5oFXuzSfKRECMWJjCLyRMueNhgeUSZtjQ",
  "key16": "2rEXUkj7XAaWrnG38tjwAmzddgR9Dg9hXexpHTWTAVTGML4hbCVdfaELD7xzxJWRvrvArD1paNHsbGKy5u4fapq2",
  "key17": "daNn6rcp1qJu38dXhLySR8mLux5arj3qR2LmJ4f1TGyLibZ6RzKcqmrU7v7g4TcbRRrpjZniHbSdXCBPp7Pda7W",
  "key18": "QH1CiaiQDqKHgi7Va8fn42NvSYNSRZnxdiZ24DEDHde7wXKpUaSDctHzeYeTTddMkVaFZfszQwvXfPkvdHfngEj",
  "key19": "JPdgjQfNWtc67oBcPMBj23LTRGsbsNMa12ZVZCdu3FHtEqYBEo2muC22Fv2yFbXERh88y6MqrDJy6A9eKNjgrzD",
  "key20": "34551JpWbt8iKtZFAtvU75AJnfLoPgGwF2PwLwBnLfc9yNzKXgmjXXxgcBZ8d2fToYYsWvPyP4ixBfQFEHwJh7VJ",
  "key21": "5BBP6htBS7NYboP3z29CsgAtrcwGhD5XH4CGGEEsBuD6om7q6UJgC8jymZ96X18q4cDcvSNxUCkUPwmjPndfoivP",
  "key22": "uKnZmepiHUqK2pEAuE4gW8zfvjSFhA6wYrfXuKj8MWYT5cMQijK7NZHuLNUNEYzqwUB9FVCasd5TpE3yFGyx1eK",
  "key23": "2rV6swVeu1Ai5uCzgbPnN3887jWihHAfhQMXvkrxd2aWPhnFJnUj6MvyEfKeXRvT3tbfXpsYai1HZfbtEJ54YAxL",
  "key24": "39b3GatNHcqCzQGHU11H2UVs9WxZerZNrqSHSefJWTfBjBc6NwF1Hv4AfHvBVDjWwq7vDCM7jfTjDNrCs2pzHTXx",
  "key25": "46FnF77hW1zKLGibAf8ESRXf8Lqb5P2NxNBGi6iqrqfQPTYMSYLyRcNmsXzGDZSCKMRGKkRBbrzvujVvEtmHGz9b",
  "key26": "5qY12f7RJceiMMXoecxwkjjgudVUdL6fvAA1sR8yWWXsxAQFbwznWhTcmiA41eNZPzvUYj1Z61Hj1zXiAn5AWE5F",
  "key27": "2KoJAp1PQXdJCgxF4kAtgU5J4ebpWexBTpYeNZTrQn4cfYUvs5hxATvEcJmZkds23p7jvx3ZZ5c5aRLHJQPoFLX5",
  "key28": "2CzHhtc6MRaq4SnqFWA3suHunbtZobf9f3AAdY6tGQRhAPwENrfq8k1hehEpKHW12Z8wEeKUFJVc1dhZ82mRKxSp",
  "key29": "2rpHbiUa7Pi4krrbZpQFsz8T9fjy9nU6JtTmq7nbtQbZPL3rFiLaTJCxfz7kQCnNhz5Fvn37sRg6KfzFfsFYozRB",
  "key30": "34wXpU9uUcNNnu5TsTJDZnieDSPBKtvpy1ZkSHVa17Xvnr4EuTGKdUdPzSUvQKZ7VSHnQ2QfP841mVPPm9PKy6YV",
  "key31": "3qmXX53NuvwxYBUL2jczhR48tFeBPmUqoYn7P3BHW46MwggK1h48BmGg4ATUMQYcNTLRrAR7uksFNvvcHqWuA1EX",
  "key32": "5Fr1JZdTVaVvVkT2u7iCds3mLLSkuRkwn7MuypQzhZ7j9rqeECWiTUGfSAKPd1yiQy4MJXKNxVGcNxPbLazo7J1r",
  "key33": "59pbMggtoiAAGPJCfwEmoTy3dZdfvdaT3HpWH4UYqspUbwuswCYowudNKeKXZrorDNkTCexfDXfub4quUTGQv6ic",
  "key34": "55k5dWudG6TQxqfTeZQThgXZc4cff4yeztMzp2kyq4WTMLiKCVM5GGuwXfE7tXyod2RXXKUed9DxAMdh8pJkwV98",
  "key35": "4na8hNpUbSUFMWw1rQWFwkAFUPvCFFMWJ4XChEKvDrBr7tg9xwCS3TCp38ZvBTMNw3mkmZs15EtX7QBrXUHtbLoe",
  "key36": "2ji1EA8WG7v7UVmLvNxiYZhKPZtGab41dcLU3iEuxRtc4XMH4i7KHLkjVsD1kmih7m4o45avc2zGhpS8DLBDS7Br"
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
