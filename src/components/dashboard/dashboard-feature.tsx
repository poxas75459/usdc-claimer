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
    "34eUuvrkp3mgHga8DdLfa2mH2Vf1ZYAiCsmXNC4ZWwGuBH87sqvPMDkzmrX7eAAT9vMJgogYWmjCCtqNAK5Zw4Nf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LKA6kmjXgdELDy5cuVaP9FsBoDfY3Q2gqTASP9pDeqLG7xHtSs6dWKbseAhpNuyU727APFpHoyX7Lc6EpHheyz3",
  "key1": "5Fy6r6u3ZabZMVSsijQD71RSV47PiS4pfZufy2sWv4LTuth7RRyd4xSU4bnU9bL7YZVZEwBCAbXpn3BqXeHVTfWF",
  "key2": "3fmQYi97TV2MT9Q4qre73sUocwTkps5Uoczn4wguLJeMxZbHYYF1NqWMePDh4omMAFP9drGEp43FqX7pR4itTxLE",
  "key3": "4Biq2aEM7nruQo5PT2uWrKt3bP3WBrVL99i84NddopM2UMR3h163APxytg8gpurct9gYJTtpHxTGA14RpcdAV5aF",
  "key4": "4d4rKVHCx9u2Q8Wd5DGb3BnVdNS1EgVhfQ54ETM8gzVkr2yWZtb3AHg7ydjUM2725QrniQj72vGg5Kk121A13tY5",
  "key5": "66GdDgQvteFBiYvRwpjV3PUFTvcb8grN8sEes43Q5MAaxTX7pPsiJ6hBvWKhfHfN5BNdWp1rBLDBJb5AVRrKGdk2",
  "key6": "6aYLkpCTzkGxKoeuGdtM2LEnxrwTSUiZLTmZSoQLFTC71EGq5RuHkcBtz2rxzMXJL6p9ZuzgP5aNwxNiWCdTXcW",
  "key7": "5phniGnhMbnhBQhXrLBEvBg2QngJW2bRHD3j7rMN2LCkV6bE1nb6SHhzDQ7pgKL4QhNibsykQGTD9Krk4UsqdwFU",
  "key8": "67V14KowU8PpQ7wMGqDP4RKRtDqkagR1THtrCZ2FoksB55AM6GPkUEeJ98ipVmAqftcHcA57m5eJo4tYf5ZsoKCo",
  "key9": "3KfxWAH7LhNUypTSweV5nD5Wtizc9p5aVVZGzVPu4FQVNDvTPBUQHJt65jNNNFT1BEWryJfz8ZueNnBoYG1mWw4m",
  "key10": "3HH2XNuNUy35iH6yCCyd4NzUqzWSqsHWUdfKTrHYXS4Er8ctWCuAN7roNSLF3tcARjwzbw8Qy8v6Vy9cVSyqrFF2",
  "key11": "o9jN8YseSSAhAo6C3ZPpbWQcYqv7vE9xBw1QaiUpmY3r49FHbYk5yBJRyNiLQnLdLCNrdk41spBuHYVn48D3Qn9",
  "key12": "2fNGH2T1S399AgXcdYzCqHc5Fj45rTTT6vbv3sN9TgHmzaKnqcUSM2iDdjc3HJUMoaFt9e8CMvZvUfNFyAkX2Erm",
  "key13": "5mKZvB72VKcK3caH2cyNj4q3LkYs9WRNrWxYem8y4FG9ZZnezu6sHcmRH1wgoz13iH2B8h15fRFsJUNSLejCpM3v",
  "key14": "2kkZow6Ai5YEAv83CKbKoBeM61GhkZahn6sq9mxHyEMpzSaBeWYS3fLGS8jTgvZmiN8acmimc3YRnE9cAX68iYZX",
  "key15": "3goQebEhNaZiGnakyhBAbPfkUpXpGeokv2GV5BBRRK5xgXqJeFffnjjss4TAE8mxk1hizZa1D9qzjCAmqofDNb8q",
  "key16": "2qSy3GLibBiyqgErMmvuKm4vf5FEWEVgCWFBcsEXjE8cNnmEHSJAZyidY4Q48qCwPAvwjCYy9LwHfR1jm3U8sic7",
  "key17": "52KXYBZSUqXvDpNDvuVPs77TNCuR1W8jQ5uY1eHu2Z8G6EKv2aYLArWsDDrpfU89FvofHJgZXrCFdERdkh1MFxxT",
  "key18": "h4G4YBDAUkn3gzAg7qgzAWbnHBrmFRXcAhEoTPsy5ENM4KKVLZRDSaHJrnNjrbLTtranP6kQ6ndZu8HKkegMueo",
  "key19": "2wbNyrzEckbNuVNEXL6NZpmHQBJCneRqJMbdzYm7i62ZKjshKXS4FAzbsBwXJE1mG54y3WKghdFpKZoX23iTSd9J",
  "key20": "4udiEqFUyhX4jmd5ag4M5qEx9WBuHTGgafGuxKnCzvW3Fvh1MWARZ4SJn9WVMD8ucjsFBw3RPa87W9Eb3spFKJCZ",
  "key21": "4MxbwXVJ1iusFRXDNeBU1RT65TCjLc3D2eJ1AgBcYUNsPr94FrkNsvuCiNp7618heTetUaFhe8xWmk7tM8KvTjPv",
  "key22": "qjvTWAoDodD8WQG12SsVcx5RXuXa4MsjXYSorXUAPhEDC8HEmUoMiPAHuYqq2Uin2AU9AdiudMCfnhzDT5HyXNE",
  "key23": "P9oQpJyX2d3KmZFspzJsq4HZVsqvBBAQgBL4g8TZYmZd2k2ubtEXjQjfcseSmpnXNakPNrpq5BgZyVvy9HGmemR",
  "key24": "5UstaTLdosPeTLs953WXuLh5KQTeyjZUPhkBffX2FEzrw4rbA6HvZJ1JcwniDnqo2ntP838GskyVLt4mQBJLtYt5",
  "key25": "4C3uLJv2J5y32MXrc7opfoqNvW8UPx9mUHVb7Vy7sBLMn4qtvkaYkrgs5LxdAHmSRuEMTHgtWbzN6vsK5EX4yJaP",
  "key26": "3zGAAF8G66WZAQVMiD2zckkAmwBMX5nQc11qKqCWtfge2cQVe66xUh3it2qvW4wba74dkD8NXb139BDNUhvbTCgd",
  "key27": "3jQsxUBPcNqr4ue2wvmCqZtS4Wdq8MA7Z8R8NzYa1cyBgTRMapk5b8XPPXRFrA2XJgqjRnvNBspdWV4NenzTUG9m",
  "key28": "2zWtwmwYwG6JvMDYLLFWyp1P93qwppW6BtYnzC1SrUoYWx6dgsL6zEa1EQGbD6XRTyzJBcwPq5hjc2X7J9QTG6Sk",
  "key29": "5wtXcDCd5V5QnDYcpcGwNfndQTgFRSzrWMLKAdEFWXdfuJKJqrfkYWW7WwBY6ZxNxZejxW2LJkWmjJyjWCGem5ju",
  "key30": "2dpt5sgQa5yTpH5c11eyoiDbLucHDcSx6dmwtVULrbD6Vq3rM64Fum5kMQg5TWrveQ3ipCEE1HaY1qFGEFMZhjio",
  "key31": "2F8BdBQ31xW1t2p2MgbWpnm8NronBysYoKs7DCN5aKi13qFUYcjkdnVrD6f3NHDCQMe7dkdMYE8LPQmj4LS7Kb3R",
  "key32": "5bPqhwG8mS1jhBWRJLKBLxoTn57Y8GvmySug2ZtbWs634Q9cnqGESD9ifsqPnZ75T1ScNjQrBMajDp6EQeChPG5i",
  "key33": "43DZvc1hKp1SyyM6NSjZ95Avb5zSAhbmDKphaFSWrsE13SVESZRJr37STs1aKeKqZwkAZ2omsLTqAqEF5RzsUaZ6",
  "key34": "KAg9FKa2oY4RpiujZB3N7d9qWWAawkYQq2KuDnRp4JFRwymufG2az36yu69Zri8vFPhVrnTaV8WxWSZc6twpV9y",
  "key35": "34ZVfFN39tCSy7aDA9MtjQxo55VRF3Aq1KEEiUuWpGgRyQa9qQVhmxMhoRDGFsrhxgtRrhu3a6eHyNTMVbp1KANy",
  "key36": "5vhZdn2SUJWNNZjvtdYQmbM4YDP8uVJ6k9UesLHzLsJXpPYYy1xDbhGUhYt8kc1r6Ca9q6fwQnGthFqFMmhPSCJ2",
  "key37": "2KAq5bCbYdxoAHzV8VmPesUD37YEgsSAyLyaXeCZFpdb4TPHQwKsmSD3RmTaU8snmDduQd1fnYuUnzksNE5FvsKw",
  "key38": "4g1L6mpoLMUFGvYzMeWz5SQdqvR8gHR6FHwfUJ4iW8gyyCCG6XLK13Kc4qdxv8PzqCneuKsVkHUghJyKccHQSsSV",
  "key39": "4VVuQw3h2f7XGSJCyf9id4dAB9VLsCoYbv3hgcLxnRCNvmsizvosHTLZEndy3u2W3rveyUPvhGito59cBsuCTz6C",
  "key40": "5Lcfq2KB7ohbFMRrfugYTqSC7qjFK8EKMpSLa3BiRYi8jSA1ZBs4nDW3g1dYLoisYqaBizD5VXWCtjNGPbVKibpU",
  "key41": "MQLDzXBn1AhPQjeCPyvagnKqT1mdYZc5vZ9KgJ4XEYKghqX9TjDxVkcXZ1Z2F6wPP5UBzcFKNTD4kU4JMZncBbX",
  "key42": "39NMiQFyhPKxqhzTzdTFXFCXAWSJaVgCvKZhm8TNXrKvQCfSmw7g2ep8a4RsuwLQEgvNxM8Q6PQUeWseUBPr14iC"
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
