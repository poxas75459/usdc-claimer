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
    "7WR3PdMxmhNddbbyRKbRMT396j6LTEfeBs8fFWb8z6qgHQPjgVTTWCgXfBbwpPZRFM5yaZdCCukkFHcEXkVpUxp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25hMGujQ6dvAsnEfXD47kbzvRiRrr6nbDpF4k6gAPy386kJBsb6wX1nrWra8RHFdzk3dieiZLqRjMdMxnkF6m3dP",
  "key1": "2fpaJHo5AynMnYFXv3tZBeJ1R5LHBbtFqcfVS6QNCWc927JohFYoGrSUsrSUJ3F1nz3qqu1yCgGEZHmS1wEFaic5",
  "key2": "3MR9kDwNkCgb7e7v2GAb9PQvAYJVmzhL5LrFhd1GS3iVxMvxVFU5Fzymp1CftCjBTFcbuxf6MCTneDuZeLkqzQci",
  "key3": "5MDCskXhKjDCSCZoCqR4nYwrcanaoE1QJh8WsWZUXjjYxzQgL3w3ALDdbDArWK98FywcCSJ2kggCDXguVDhaaKkc",
  "key4": "3nAwNntLENZr9gihdeu8dBTBJ3pzxSUkYeWRdWuA32MMB4dt6pJKZR2md3RwfYjaKkGCCCunCDF6BgnDFHfq3job",
  "key5": "2yCzj53uUGNEKnm8b2j1Ay2QztsgNWBpZgbA1S7d4EDQZqB9DXKhxc9cVHr9x3tPqqpQA4A2TPVCsujgeEgAGcbE",
  "key6": "3i5FMKsVG5siGfW1HjSeixUAMQoRvNirnCU3GmP7thKBXPo9HspeTv5X2LfMPZ1Nod6wqmJr8bYhPstfXEwjyCan",
  "key7": "24xF4o5HvDTe5jVTvMd2pb7DwHsnY6dscoiiwFDcpb7YeZ5X4DaLav3nFBw4A5hKkmosyvG6w4QKFNJcYAMt6Pkt",
  "key8": "3dySbg5Fva9GoueDVWGHFVXZzkg71FQ9eSXrUb2wuCavVaT4AmRGDJ6fdDvKvkwETVjEDnZump5XjvZjrvZpUuDH",
  "key9": "xikCvkRrCzhqrZmqdRzRiHofNtPyGWCcuFdnNVFU5BmCEtNVo8xzWBXaaZYeSjNTM7iKEi6ZX4NAgWYDtRXavjg",
  "key10": "29RTzVs9zKiYX2BGNNkuDAEarJFyTxCbWPFJ9SzALoCaikrECZy4WucProLszkjJ79Coqd6iR42mR8ao6Pe5frAD",
  "key11": "5Y4CjmtChqRojH1js89K4TBSzAZLscP8NeEGVE5fNX4BaA8znwyeG2YT3hsRbShzda9mBPc5BdRjexKio7ohaM7N",
  "key12": "3Wjz2gbjqxP44y9iNXd7fzRJoYPjeW4JKLbJ3bCHgP8M9JTiaXCVfhQnURdDfPWtXWGBVmqnn2cRaBmUekSxY6gw",
  "key13": "4KWja4nG583dsYJPf1YS4izp6s3ChSKWAJKUNJq58g4QR25tCALGXePZqq3XkX5bFnMpPRWgzc6WdWEWoUPEkVj9",
  "key14": "2J33PaGevH1gWtK59YsAinQjALXKh9Wa9qZVuuWRwgZ4qwnNru6rxnXVMDoDFPeTeMTXoh7BPcm1eB2syfxo1HDv",
  "key15": "5ba4VSw3LP9j2CvyDonWdCT43Dz6pLuxHWnmb2KWHmsz8ecbFncDcHkVS4NEUUQjLhW2fzB6w9qnR4HqWdKRhemK",
  "key16": "59PFnSpPeyYdybgKijGPH5nm82C3VSBP5BtbegF9zwm72BC99FXn8iUccP22J44YVdSpnUVesW2mV772iCz91UZa",
  "key17": "4YtNEkCZtsK2gFYkE6pvLpiisStdUM1rM4JC7E9W92VP3q4sbpLzU2oUdA7cwdtz2bpBSnJb3nvZmsscU46KvXDC",
  "key18": "2Y4q6JKXH5UBniJbHnKrBMGKKVGsW7nMRosWudhWU73SFeaxj1VG35UK5f8xqMgA9wfc4Jb1pXjKTNp1v1BQA7tS",
  "key19": "3mTmNv7uqK51cqxfHcnYrQ5gqgpBMEWJx8Vu4r1kzWuZK12d8ucFGbmTaXb36Rj5amEg3WmN4VQpKqRF1doCVxsG",
  "key20": "kott9XKL91E6ythRo8EZYqtZn8FVCdr6UaawVcjwF2Tivs6cFK2cKb2bfcT4iEy41DQPLsLJN4sN3WTkwA4BsZp",
  "key21": "2QkvnqHecpv6UWvbxzwfhVHE4wuG2fzzNbNdLcoMSXRjtP8MkMPKP3wx6zsTgr25uxB5d9x6Fyygf98RvhYygUN",
  "key22": "2GbXYNeegr8gZCph7ft4cz3MsY6F7DPSkjF5tQUnkCN2bKFYeeow6gZ2AHiqC73eH1XAmGdDyBwXdcVRdY2zNngE",
  "key23": "4FLgCdU9pbb1tVmYdMP2AET8fhpQkPLiyCPJbW9qK9fy1KVATL4QAQR1m61sa4HXApeDhyyLaqqtLDdPeb2NW1Mr",
  "key24": "Kg4wmUoEQfQxAEeMJMNv9ePcW3QfFRfRRpYwnSkxo7UQfbcmQaUJnZ5cH5vLqvagKkgv21oMiydULifFDVsooWt",
  "key25": "2oVUYYtyhm8VfZuwaisxh4z4kMWwVxWhYFUgnbs3xqkXSyHYSrLt11ZcBacv39j4vp27WECQg26CammSbw22XChT",
  "key26": "3tjpK4fnKxbZKLsLanfsj5HUzWbZqjsEGPtsCjpCgwBkhpYak973RCApojK4Kqg9eA1m9sienowfuv34jsQjayC6",
  "key27": "2AmCNH7k2NKxs9MZVGqkr6eWNvRse4NZVuiVE2pYsgCxw6vXnh1Caz4NjH6nzfTgKjE4pqMmhcCKZ7L4EhqN7enk",
  "key28": "4kaZDrLPt3sicA49dync7jpaTTkJab6VTNja5mc1d1879GYDAmcivUnoBb3G1QGRDHLPHYEYDF4WqAtejJneEfbz",
  "key29": "38iWt9LtDRLQno8Kr9QwR7YbarsZicWRCJiMeEicn8pUVd9WdMyhFybuJ57CaEsh3KtcriCy8xPGLBP9sYqgV1SC",
  "key30": "3daVs18aZLZej2X2KCPJAM91n6THjpJZ1HGrGgZf7vhnodeFjENwTGZN89xM56MxheAqdQCA2rQD6mToLZj8BNgH",
  "key31": "3hQkR28TNkD9xPP7n4p1kokSFHjX7o6gtB2wmAtv9eR7TDTpGZ4NBL7MoYfWhZsoaG5fLRxnqDWa3usRYRU1ReP9",
  "key32": "3khEnHQjiuor2AvTnQya4dUY7QmF3E8DKY6kL1q3K5PwsaVm3QC6bXn4pRdPY6LUH43SjxrukVQuP36BehSb1tiq",
  "key33": "BkMvkSivej9m2y7yZYztpgq3gSU5eQwDWEdqmQVJ4hbTnYu8fN1wvMRCevt9VQVRz5gRSHrYjgptB9D2sB3wM4E",
  "key34": "3fiuWsqULYzs3hFSirH7nySeLaStA7eZdbGTkZUMxwgygTeXGvAHH292MkXG1yGVHKECsyykieWWpwx95bPXiRD4",
  "key35": "5bBtZC49Suqp6T9ntE3KHyc4crBFCUpgEgBwmm48EtmmzwQzfzWtwZDaejpz4w9TG4FpjRwaHAHJM92pcHmpS1QE",
  "key36": "4nWVikssAtfLm3811xmEVq83D4dZeW4AysWCkMkqncB3jsoP8mm4ZbbBcGtZgyYhXrXDVJv9yMFwns8ZVhXnBocX",
  "key37": "2daBkcyQkTNbkvrESGzCwYp4WqKpRVYbDvqXSEFHScPv6GovowW3MiCJn2ZdWJCyHz9fsHLsqY7CghLoKu7v5Q1D",
  "key38": "543YUeXwwQmjW1SoT7qSNKPv8EReTaJ3HLTTNpSs4Yo66FzvdthRsyoGkf7fxSSauarxvGvuaJkvAtfkLCz9EVpt",
  "key39": "3qzCoq4hWQFR1MVS4gicNTKd2XAvpEowrChpvXXHcLbSE3JoDQUzNwohdMKMFZznvcCfdv2xs2cQDY8aWrYxhkvk",
  "key40": "33cCewskE9fPAPjPFh4WBa3ZdYtRqAJghv8v3fDw786YECEKHpfPrEt4eWJca57bu5BAC6UogPUhCrytq8okZTtP",
  "key41": "3bTCdAigNaU96gpAS99KZgBtyk4JC7CG25F1BDegpAFejm9uFJo3oR53q33oVA2DKdJjBvRPsW1Kuf6xwHsJ9m8h",
  "key42": "61ZTrcs3ivPa3VtQfcXpEXXepGbs57STg4mVZGTx2efBZ5WZFZ8nndCdAM7jjrV2KcJwUAc4eHFp9Nrgu16bbaWs",
  "key43": "3jNDXP1kb5YCN6wnsGmu2aXV7fwXyPbpDg3f8FGPtnyQensyyRyV8oD5BrCGVDE43gbF5cECLceoV6HWVZk9egGg",
  "key44": "FxDJCFXEcyyvP5Nwx76oyNhwFWQ31w4hbtMvvPenfoUCpAamEUyixLPzaz3ki5ZcgWpGBeCAWdcxVidYR9xmRWS",
  "key45": "31xH9YtS5kSCfgYjHhivKgm3QV2wKA4egkgFYrwakfNSWQ1eHDTzhoAgr9Yz1D57YYxWdJ7xZEzaGY9mBbSMrFb"
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
