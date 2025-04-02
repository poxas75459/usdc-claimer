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
    "65sVfMup29yYCfirgwv4Aw58Y3mcNUctmLLh8FfMbNvzhYxRt7JJ55bzbrQWH2hzxF4o11EEErq8SbrJJdMmTWBh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eKu4g9K64RKQDAMQ54JuWvQAitxjLZCmKqTpgEf4rnNnGgFJkmwfPjF71PZRa4hBHJehr8rXcLujhR1X4u7ByTh",
  "key1": "2bNk8e1k4DoceVqh4enV7BJdDtei6PRngShme57aR53GpzbwfiZGjX65KJNNripVs3wN8FRHJqXhqYUGeo6FuXMP",
  "key2": "25fgGicMRKQtHmSEtcAdZKKRLnThT6s1ZkhnUo8kGEmdWFE74j1sFxEmFvCL7bnVRFqs9bSqxRrxAFbSma4bfng5",
  "key3": "4oAZYeYk9NaZF9arLPigcuZnxG6DXp8Lkds5hoV79DQ2nRmwJMTncDC343bnVsiffpCskyKL6YLXbQja3efxBTif",
  "key4": "N3sLsetJs47Mg1Z59XLZdkzesHKegjX3nSppRZ3H1Z3J7aiKdnJfexdVTNqgdPcN3CCqerjRpSp2vRZc77q328T",
  "key5": "5LfTty6Kpd2GzUey3es7wUxw7xUWKU1He2EAc491chN7oxG3NpvgbdqSbgAwgVUwdxPCuWhghEUggUFxDUSXBBBD",
  "key6": "3VbBdMbn1Tm4Evm4vEJ8jUvSLc7HmULxbEJS6G5y3DeWaqzbLpCEYCtAomon38VAC2jxWPzW84Qii5VcKe1aNiEY",
  "key7": "3U8UNiThXgcfysE4qtRBL3pCGdZ9DphYcswzLT2mNK44potd8HRzBYrCYYGhVuqP7zDqJAfimWkwcE7XhpVw2oxE",
  "key8": "2pLawzYEVjeUzevwWfBxmKhRxvu5hj8Tu835WTqN8DzjY4smRAJzLzeM6DhQ91SZQKQaJ3MsYBmLvJCkMUpQq8Xy",
  "key9": "2Z3dDUofqsnc9YgGCy1uX9eVPvjb9acXScWYkDf1A4GtpA8poNjF5FrV1YD43r2zCZCwKX5HZGnNxsXRrzBzRyzB",
  "key10": "5qNtcqgdyduHX2nfuKRSDrAu7of2VJErfrV3hZfLepyCrwaQZDQpbDABYFuzC7jprALcANELNP7eENGkS8S5cNBf",
  "key11": "29WdbpGeR9t3dA882CCKr2PTPvU6BzJ4ARVz2PJ1m4bEc8zv62gRTLAYfc43eDNSxDDdpBqipkZvhdEjhXB33eZ5",
  "key12": "2m8h2W7AQRW5SpxdRqyesVnQ9brw8aLKx936uzDqFv3yoxnL79uWtNf76v1DZcMjMt2i9E2SrGwUYyVRBMVCipxt",
  "key13": "2JvKC71pzRG6jpm2pb9bZEeCx51xxCDjq5rxj1bgxxNnEwnCvzY67RF36VMBJpPbwNmnEWkLprimgkG2wj7ikstE",
  "key14": "53R1f575k4WbCxt9WrwN5r8FZ1CKV91Kb3NuNiEBagYNMejvPGJLMeSo9v77urnBVoeZ1kbUj8WX2nWfh1PXQHwW",
  "key15": "5HBkScwdRQoL5bW2J55WM3jdaFNJifWARXzD5cBhKCLBQKTo35za9moXm1edr6GxLuxrtyKqvPmZQhbYG5HPo6tT",
  "key16": "38LJQJ3LmirpR4y4rZ7mJXr39dmAnR5zyHSnUZhYfGD13qzMPGW4hVmsnDorSmJYfwD6J2FYgCqHyzCzu6sdVe9S",
  "key17": "4Cwo4LLUd4mEHkB7kj7FX3tisRrRxTkjoLEs7E3H1GJV953fvdFLRjHHuFPQpgovv9fE88YX389NvWm5UmX8Wzu6",
  "key18": "1n4zD6HtSCMuP3pvSjKg1DoGurttBirN1UkJkSA8jbaPe37BhxfQuDFZBn4sy4WEbFQPHVELT8zdFwgCyuS5BZp",
  "key19": "U9tV5WqfMYiA4yBZPUxQY2cw6oiKwqx8Rh8pAed4LnG61D89zipYcSr6HZ59oVUzvZugne5BXia69UA4iPWPEmw",
  "key20": "4hxnfMKRnrUafPpQNJ2bGjXqsshnLxXFU5YxzzFNZwAWRXdmvmgfzt7VT67aif3H8k9BdCWRFihYgyX3m8ty1ZB3",
  "key21": "CHNA27dA14fCcMnQZVu1f23X2382HJQR2UyuSQiXZ3oG7pYiZLKBoGBTtM6KmacLndUEZtD9UXShKLDX42yjvVB",
  "key22": "3ujLS7pXp8FJ3tGid2ALegBsCj7jjnaTxLQn6J9dPsjJmeJgPV4AQVvE9PvKDs8uZuYPAiqE1RStFmJUVEjQQWCe",
  "key23": "2f1CECCGoeHaPvevwCG3eQ5vHd1Md7ALTf8UaVMeUkUGb6UuJGQsTC16ggje61meHGDRNSQAxvGyrtU7UY8H8bUA",
  "key24": "3DsmwNFixc1j6BUTxEXposaJbnugxELx4awC5aVsHmcpK9RywYnxZng6MHiKZVnLo2Q7Yj4gbPgBgXbLeypJkYV3",
  "key25": "HHJbMggzWk5MGNSLGMRNPPV8BpZxPNDBQW5Lw5FzRYZicDrWgJXNR3ZBFD41NZTdwCJihR6Rj9bTJyCDBSK5jre",
  "key26": "5BDXLhq3JnMV5ef1rGUvGwN4wtSERqFSsV7Da42CWDuS1KjQ1BHywrcZZAZ4TmK1RNKDami7jXP8PbSK1tHWS1EU",
  "key27": "5U5zteeVWWsF5E4ApFgLvXFdZprPYmkK8cRB5RaD2i5V17RvQXNP7SrJZPZZjhJAzbpXecZs5VEGoiN9cGvQVr1N",
  "key28": "3L3cht4XspquPtUCqatLKMkqVGZDRVTABewmhKyE6pbgimDBxZ7kSNxr3NA3zi8U8pfZbg8TwfaPrHQk2rqWBkws",
  "key29": "2B6GbJ8YW1GEVVwN3BgXymr5m1g3c6RyTjqFPEAvHHVhGn1m4p3rdWvhn8MPttANFaCzDBXsb5DQESDuhjaopDXS",
  "key30": "3kmkfqahzcfmJKLJ8KBHN6Hrae1cjEMc7pdpER22Lvh5nU3KJmzcHhNAn76tanYuFifbRvrWDESKDWsHGK4QjZrT",
  "key31": "5YjJWox7QdLvVtsk8HjW4XdgH3T9chyoCoVyWQsgjFYUGwhob4xFvcN92M78zqGBmwXm8ZaeMgpofhmixDn7u2Fr",
  "key32": "3a9TDX9y67iAeQg2vpuKxt6LPwufaonKkHmp9GRJeaESdCnz2jVe9Q7a35VACXsVKCyu4x3s9NAFtRYqWQtPhXm7",
  "key33": "4ieYaZsehuMpU3iZ6WcHMxbexDsT2KSKMfYdXukaRQoxG76QsAhYkZ5soG1qAYMmKLXviaDyyRwcAmx4zUeYCJHp",
  "key34": "53iNKDcHQXefGgFi5AtBZCZvXtiQZHDeD2GY8noXCrK8AevU6jbnoWPXfAgvkYThb4gyXNocMSVpL3GxH7uBKkif",
  "key35": "3iY2CWXQissGJVVbsSKgwpLMmWaQWUtKinYmQwXCbLcKVjZ3SokiDQLzkQEfpd4mASv5endvNae5YXUYrJ9URSjq",
  "key36": "4fc965MsJ6gCsmra5VMWCas3dtUrGKY4ELVokzSq8gdyRB6bvKugqGGpjt1sS5ZwJK5VJ7BdVY3CkdV7q1drpTUX",
  "key37": "2f118Dz8KJUq4hkA8DxH7KYbDt3KG9xH2huPxabS8Dzbvb1AnmfSgHjasiWJ9aPDjzymdWqQp8T7ZmrCq6widuKg",
  "key38": "em2V38gdyh5Kf1yTwhmHqFJg3dco3gN2TbutbRk3D6mAhc63kWXVw6623LG4pV1vMH5N8GRSP6PUpAoEyM6JEoY",
  "key39": "5SmwoXDpuNWK6G9S7JbAPayqosCDuCQ8sgUUAgdAss4QFJvhDR6dd9xuP9CBLsA2Fr2Zz2YGvkSULgnBHdufQZdt",
  "key40": "3dBfPkEaigWMKyeqyeUM3vJXtaq844LnwrrSoTBqvbXXUB6DNsN2UPoipYWaExhukCSuWSdMo9Jyttgs38S8JqUd",
  "key41": "3d6HwDtWv4VsTDxPe1kAwKgz62u8CFWRgGKMq2Rr1o764jLoLEjwWZjyFzxhBj9Qt634oTGsV9FfU8ZDFfr8s7Lt",
  "key42": "PTtNtwRaZ5MeHRRuzx8yL4j9Ri2AnLTMqDoLJGHKDL1NzJ8NajLnLpRDM8L69JEVCGP8QqhzGLv6KFTkagriezq",
  "key43": "4d2Kk3NNvYKEQ7heJcSBa4MZFipDr5LCQG7grvobA9MUipKqyRRYMybqoKREzouDGynGriMVnxADZKThHorLJ8TU",
  "key44": "5WVK8RQfiU5Kb5vVaP89QMDX3Dxmo1wsq6WRzUXpDNYCruSHSb1gmaNzR2BVkguXwqGbhqwU1cY5pomK72PpedwF",
  "key45": "3MxZJKgcYd3uuHsitvpuzmdU44HnD8cDY4dmMyZZrG9f4Y4rRzK3nCNKqnKKrA85oRxyE282YX1TnRcUgnaf7DYe"
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
