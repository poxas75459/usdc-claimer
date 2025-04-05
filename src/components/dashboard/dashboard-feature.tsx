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
    "3rtoCPfeSqyhbWhYrpBDFjtTyrQyGGgEf9JaS1pm53uNXPEeU5YZg1VeKPSFJB7WZphhR2JPhsGuAhWkJs4B2ubH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BXG1bKcE1LPon11mUFKwjp1LHFfKxYFJfEsgQrXrHEWDdZou5majYHo654QofwG3UntFYgk3ATE5EMChK8fgngG",
  "key1": "5EDgLKpaZb7pPPE8zG4H17wshWfZJyxZVmQDRjHkMRvhNNj8SpEevW3oN5Hfqa7GmYgozdY2BNmiskiAUCJDPTPH",
  "key2": "3AELEc3ydzkrCmXNch6itXSLcVooBzHLsJZoRnYeeFPkVUsHFgVeZoYE3QUc9wTVpGXXoMyKbiQ5jFx6omcsitfi",
  "key3": "4UkCE29tu4aGL9SWJfQbUyELUhKt95A2uk9sdoQ4y9u13cfTvzh8iB4dYCZLTDVZSQgLgm8XEJEJP1rWpYtV1sRM",
  "key4": "2Not6HfBeV77P9LpQAcJCAjigDxH4qzPRamx2ySCQdZYdfezPcztnknuB8iwRjdr187voZ9Bp5oayVmohRfxG4tM",
  "key5": "3Lh2pqZcGsHacGpDYCku1r8YRi3pGt1LDwAEjPgJjCSFiMAkyNgnV6KF5aSwqfyv9c95GLgtvJFuKN12yXwUyFLY",
  "key6": "5bH5r8dRnUEKTBVpjToNH56HNHsFNiYuhhianZsFGoTfZ24GtPMkKWJ99HEVgTP72pqjQdkmgyNb1QQdftnYZC2D",
  "key7": "3YZXNDMm2Ppepe8KiRVmvxigbNWQ6arCwgg6dPXv9HiDvsu37SWL2HSjrCMpRngZVLsJnqDWLunLvpB9ZnzbQ4th",
  "key8": "GQjgmuzkWvNHrns7Vbeawp2R3kbYKHknUasEVX2Lop13LBvQS4JkUiZEJHaHq9qEGVXJZfvPd8UcMTEyF82XmNJ",
  "key9": "i1RYDmwo2eT3uSYRUsN4sCR4BxwwzW9FSt48mTc8VHU724gfx5FBkKx3JozqMQWWS2HLsxABndUszKHHjvZE2dU",
  "key10": "2BVFv6qsMNnTXnMnUPu9rpdxRaDVYFrBAeqARBDg7vsscgqpGCeQfGdM9bnAGeNLHAFoHw76uatS1t95JvLzgVmQ",
  "key11": "DZne9FRbYiMZE5GfLmnQKa6XJFvj1841WVRQy9soF9SRtBt6NPrpQAduVhowtaKXBLJLjWybhZEDxeLeXSgieQ4",
  "key12": "29P3Nyc3AuxiujD46yenoB3DC5ayhTP4DiNLQnvm8xZuUEk7e4rrB54JHm74UYEtUuMJzaJ1mTrCbHpUmngCfmmE",
  "key13": "555m78Di7iDmM4dGZ37wk2k463YPEhz5uxe2Mfvq3xShwzKTrockQ8v6UYh8rze8qNbCVJ8KDDGtp9RnmY9v4Ppq",
  "key14": "wojdfseQk5Wg8BFtbJa5LxPwp87Sy9ES1ZZmFgQvdM4ToT6fvknvRcAjcGbSrTurvvXXogjPLya3FVe4rWFowaU",
  "key15": "aZGg45BH4tptDX5GsnapTE1N6HuuKVT7uiH92mKHUEbMgKZCrDjGrhESnCKeV99w94XXTWokMdEa7StE6V1hrs7",
  "key16": "eQDC8qgp34CLSvHqVeQY6vbnhA39eVDHym4ZmweM6xDUEotDAKCARoGnTPexcBM7PgwHMLp2Ki2vYEXrfHt3Tvu",
  "key17": "3Wgb2652dKEG2saGETk9akBz1fu4TvywU6PnS7HsVoLsi4oYCwg9gqSBHrMtALaFV3qzAxAhu5VKAYse8cCxJvRn",
  "key18": "5LFZS5ZYJMhEG8YqsthtBDPUfFxjZVwamuSkEibvdXUR6dqDYzTv8UZzaqNWtyDmJRB8xRZMkExKQ9mtxYChQHoV",
  "key19": "552cP233FSmdfwTKQ9hdXGHMyyBTxLss5y2Hzd4ru98Mm57BJp1TUNVGdH58cLorCZNSTf8QhPtR5ZG8Wa1yHWkr",
  "key20": "57gLUhY7p5YwZx5CdtL9rxikMxp8vfwDXFi7bq6t9HBUNobYBEafVVkm3YYEfCXffW24zLDrBsRQHvZufdwsWfpX",
  "key21": "4LWg3VHtXEfMyrA64Fu7JCms8NLAMPETTx1VmApY8bzLXiutF9nuk459tAguXUSVbTKaqWeYxcBin1HcFdZkRSv6",
  "key22": "3CmeSZ3ryP3Tm7wo9hGWarTrvmfMRgQ7DLuEKUovanJQgJvsKZ7hAm193U3SUmXVhD2BwjB2USzTVEFUp2qXZSVg",
  "key23": "2vgrXyhweKwC6XzgzB6F6T5Ep1yw3eEpnQjVzehthTZqFeQMEWMNxKAhXK2Qt6TK238uKwzUck7kE7PEACHfyP9h",
  "key24": "5KentowM4dok2HmRxnoSKK59Yi7Vy72Ui8AfwYW16CcHB5emxBGnYfWQKQa3ojmo3JnS37QPSdfgHPznNenVao6f",
  "key25": "4KfCSh8ikUiMsFd4mzjtqEV8fFEignvDr2ukABzBH3abAi8FMtLA6gFMqBSkXXoa3hpHehKy6gsheBaWc5gfU1aF",
  "key26": "hz5ZLUzzHfRypydxsE19oDBHpgg3qoHpZ1pu7NW13S4FzTi5eB1YQf4jaAAvwEmyj7upwHBSW1sfc8Ga4akNwiP",
  "key27": "ob4J2PYBK3PZzuNWCG3tuWhQuxFeCPcQVw9aCqt7W5LyZNMJiWeP797a2guJcyApnzdUKS8Xc3sqL2WXsssun89",
  "key28": "35vtg7E9MQjD8QfD4gxkSXZAmQxG2MysubT1WmQMtZq4MfDProyziivkL7kipubAi8KNwsxgT1kthEAFTh5Zjy6k"
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
