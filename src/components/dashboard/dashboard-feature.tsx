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
    "31cvTZHSaiQRB99X5oLYCcLYKKkDV5E7TaPkMRPXAToqGum66diuroN4jndFDubUuNQhMmSaiDeiwyTumpiRMvZ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pUj9ni94hQSFdQjkbEAk4U2kd1PyTjWi6cpACnyB31wbqceG2eRvpkt2zAnS7mjvpzn7HLAnVmeP2Y6BaNF6AgU",
  "key1": "3Pw6EGH7prMHCVagLK6oxxyizcgr4c37hEegRQqoYC6aFtnNXkZTtNDo7tDfNDBmc7pZQ59zUQMPa1atRVrWDCct",
  "key2": "2pM9fDJ2ppY2ooJWsbHgBW73yyk6hYRYg4GzU57oCZYi4x9jxL4UccoHxVxGDcjq4XkkawzUEMmTCvjnXGQWpY9C",
  "key3": "2h5MHZon1Hv972KDrzuUHBWxYLw2EqRx82jErCPTBmq3GWCb6RardgpN694NSEedPaMEVp2XgnnAQFQNysHfLGhc",
  "key4": "5uLcnqD24MZbQwQLuhmjh3HSBJvKAHeS1f52MrGMyBAXXViKE1xzNV44f1bULsFYGwwAev8Bf35rk1WWHfjjeXAt",
  "key5": "4Cq1UPw3JjyozWt3kfWgU1mnyxA5PZKTfqsHP88dGDxfwYqfAxcd2sJ58H3UET2qwebXErBUf9vDsZCXrPuCMAsG",
  "key6": "27cD1nhqGtnWB5Ur3FP1URXzK2jxoFtvSK2KZ9KkiDhVXAimyyN69NXaLZxge6hkTbb5wveUmbsxJQDQSSm3CEH9",
  "key7": "435P9BWWTDDp2VpQ6Zr98qMzsqVScFQzTxmnFPwsPJDiWj1BJ3z4qskPq8n3CKN1wovgmqyRrJBkPWusWnsQQBqP",
  "key8": "351EiCCfexENS1TxuZfhdKceZiUeNeZNnvL5arMVu26rEyxre1p1jExKwLELJxCvG7qt18VwB4NzTxjdCsuL5DpS",
  "key9": "FzeStDzrR3E1CZKxjFxgXZPEq2AB7sCFcediiDMLVA49wE66M7uzVTVUeMjUkG1ktv5sgcwrUesGa16BNHVuTHW",
  "key10": "5oUzb6BDGqJYHGP8bRmQGBHfJcvu1GC8w38PgvLD1ZkenbwqrSfVxqKSjB6XA7sTW5vkF7ozYwawT9MPev19ArjA",
  "key11": "4wxttCYSwL4BkfAeUFhT2PT9igvgY2NjHbD1cjnk7NSYEekYR4hWFqYNUTdJi3hWKVX9N8ceBJRGeMi9tjEoRnhX",
  "key12": "twfj6BwxC3mRLBg3LpErWbx5dU4NQac344ET2xYnfkcPtSRDzRdRmg9HB8Gk73BvBKmatppYMEwhJ14JrxUheL9",
  "key13": "62rnD5ZDQZ7ZTcWG7BXEJJ1VT16Drr7GaqpUajpVANkbv8jHtoVPs3PZCndorCSMTcpWjTsJEFVCmM3TzZRYmqnY",
  "key14": "2HB5prwsiLpfMmcp8XJxMtqCfQmEpPdryoZiCZXvV9bu3UUToTD87Eo4siGLxwcW29zRdjdonJwrrAoQyHToTmsR",
  "key15": "31dNd1FLfxdw76y9zsgZkPsMQYMHrXDGwmthvh5f8JVJXAoi2QrcaT749r1goMAcL7yYDMadoynmWk4ko1bGxPzm",
  "key16": "36m42cLFAqxUmGYtZaiWov8iRijMRVRMLiavTUZkRwQAAiynDXHz2Pi7J1dYasZH5WcZfy2ujUhMcyVteSMKZjsW",
  "key17": "urnBStWCLqfqcmx1nSr5e5nQnCG4Ysy2AQ1Q9fS6EMUZg7zCJKGPeT7xyf5rjiEJSbVhXGUnG9f5MHeBvrsKGAw",
  "key18": "2W32vumN2o1zqbq5MoTA7iV8Egmm8tjJzeYp6Sqfso6yHsGjiuogAMqiP8PgWnnSc8mSUpsFd9Qihas64k2tbb8S",
  "key19": "2kfqf7rk24FcuXgqPDYqVYCb9F7VmXdVvpMozHp6kwAXUQSnfbmj6gQJEiNaeXXiaBo4tyvN2Uayrc76TJRfFSwT",
  "key20": "4oNwCjCyjoFqEhDjqKsr7Vd9Rh1tCSdHhbVX764BZps5xjD2TNnKvsGwrF3uRhw3Bs6F8zCW7kPZGArCfu1Ybwv3",
  "key21": "H1yWzj3M4rGiuPBxJswt2XJNCNo3Xgo3bDWo67w8w8Q921htzAQXoSNneRh8P85Q2MFwurYoZHJYdD5meB2Ep1M",
  "key22": "4x9UzqXT7Y1JovGPYZZiP3xd4ZCnS5DPUzqChuWFpS5pVYCpoBE2idYqkasLV29NhfjKSTeAoKxViiGL8TmnPxjT",
  "key23": "5SkL75vxw4bEDrfEufP5Rc8so4UErxtSAzgURkviHTJd8JFHr3oLg2eWPZtBPp4nbDRKwCiV7DHQN9nw9veg3Zn8",
  "key24": "B4tDgKYTvvNU6pkt4Q2PWLdAxk4ptpVg3AHHRuiHzt2ittCaG25pqTfS8EHxdrmBm3AitUHZ7B5NBy9aVXBXt35",
  "key25": "5EvRP9APGRsCHLAA1FcMazHCG3oNYBZzhjz3oaBZMVcqUqV7RRfAtG9oXP6cN5E6jKnk8ECkDkGmhXa1NAyJs5fd",
  "key26": "3VjbN9zAhSPNDqspcvMewpSUMoRqzLn5J9sAv4DaotZ1t1deCobBJcHysdGQ8mpQvdrwhqx7wxyCmQk5Ha11EMAp",
  "key27": "4WUKKHAUfawWWGYJxjyzKyc1V3qAcwbqNLp4D6ttmwrfcE1UmPoftgZQqoQqVY4BgeSPSV4YEzFPxynvTJGUiwMq",
  "key28": "4NTdTbsaVJv3ZSvTuCwTTEgxAYVVuU9pvDDqx9pk11bEdyRyLVGrEEPbrhyuyF4KpuuL7kpgErFWDom8PvqvQBJC",
  "key29": "4Hun37ZPNed4g3nM6gJSgZZhPNdroDWD48syrT7HsReYqMqUqV4kmbnrr7HQEwL8BJkC6zoPAqo15XumKQNDSYH9",
  "key30": "5q9hi3wv9kvC3wPYD92xPNMFaN51thuCutX2TgG9Z5Di6eg83MKo7aRgnG1RoxC6ViHDWhFtFZ97SDuZcsjZePtx",
  "key31": "2qzzbLiDTqyvnC9UrYQ38KRtQ3wch6WmqQ4me3SHNbHkRA1qmzqKFYizc6UiJj67y2s7jU2zpWdEnj1vjLfK7bi7",
  "key32": "nBj2NsCSqDcEbtbrQLavB6RBWsrnaSHfxnp1ejAxHTzfwk7imC1xa4DehgnEceVQrQikRnig2PGTNxkVSpBDqUv",
  "key33": "3etjb212Fg7eLKuKEYtekfzAmLZjJLmN2r6CH4LfJwLoikJUof5fm6LiNQqMcyN35kq4XTtYJvUgtFA5qrHzy47R",
  "key34": "4RGJNzmLCBJrG1fTV3iD9XunnaP97dXdnfii1AVP7JMvxQAntwmVwZ9tL4p7JGJxBBHF3usf1Fm3LsH889hzXv7W",
  "key35": "5hp14poCb8rC1KJ3CLRvvfKPusbWeGJ12y57AnKS8ctDGxx6Frf9gc4yUYB3Wb8ogLWSbiR7HVAZsMEpm6RmXKoP",
  "key36": "yMDLKCctfKsHsWJuwAaYZDPXPuRzb4ixQJpowTAog9tKNpnm5o1PM2DFjGr83u5wWvigUD26By3rQ1PpgJV3Apx",
  "key37": "HRnCWwPgP1fLkWWbt8mLVSLuLErfmz5q7rCZErebXoT9b3vmQXZFDZuWP6u8r8a8QLHpZUrSsEmmoifJXDRPByn",
  "key38": "4hF6jbEkiJDQ99MLJEezpPJZYCEsU8kgRHhavVstphFoTqPukCiA3JxbvPqbBpb7rDSDcQW9RNhrak9TfMgxNb3r"
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
