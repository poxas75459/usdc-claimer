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
    "4gvEVGvFpREV7RMSo6A1x5EVKxayXghri48AjqZPa9Whd942EDADykTt8LygQTZE6SD3nfNdCie185b9z8sHs8Rd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MpiZgDr9c3Q62mZWkj3bEahek4zt7XgJ51vYt9CFmDdLUWPHQLZsS2QYTYYNTaxHthYTYBNogjBmqgamYmfHjSR",
  "key1": "4yd1zrnt2BchHrZ76RtFvdFsgeXZ1h9eFy1CsinuvAo4GSVb3WHua5ov4at7PHkMPmGnMSaCJpRrRXBEQLkc7osg",
  "key2": "44AdRGeSg2ummsZSEZfpbWbtT2hmZpQjxf5xfLXesQRRa31XGkDimBn9Pdc7HyZA1FxBSSXbAwAjvhu2Ei1mLxeZ",
  "key3": "2zKW17SCFKFGgNFBEwQzqQof2XKwEQfuzFbdieq9m4NLoNXeNQ3Pcz4JRmCV1E9VLB9yxwnLJsfE4cE7NNmtvKtE",
  "key4": "35pCLKsG4Eg3EC1nnTLHSncZr1zFsRHnQaEzpE9BksW3xb9FEVtRZ9esrD89mYZgWLgYaNo3fBSuYrdR6D8CMQN",
  "key5": "3bWvRniu3gZS7uxabuo1qQisw2dnPvKSPJTQW3FREBZC7iEGJSrDw4kjpqn5LXxb74DgxL6nh6XQdb86YyVGauzg",
  "key6": "4gdSQq8CLN85aw7kkxy2Cz4RsZrw8Vv7D5bc7x9XPxq89mnFxDVkfx4EMoYmEAZHPGaw7QuurmScWg3VKKNHX3DM",
  "key7": "41TEygKfDnBUpN9oXZF2knQ3cLWQb879a3FBvbN7zb97phZRcEg2zN9cNj1HNA85nrvqro6xgqrGVVY4azfGu1jr",
  "key8": "3gUBCx1zoKxi7YebxxVCDq6sZ6mB4pNjoyH5hjC7uhah7faB6HE8Z7swBhTDsTMmZEnqmYYzKjzP6zj388ZPtDAm",
  "key9": "2FKEidb2QaY7Tr3YSWq2BxASrPubq11t7BXtPgN4v21UGaLbt31NMGJJhfiwYGFe9LtEadwXBxtkZ67WogQf7o4N",
  "key10": "5tM4LpubHKwVHcDRMnvBc6Sykmg8geFwC3hNEBsj8Kw9xzXLMwrop4RLwUBRkPfZG6rAPPQ7X3963PRpCAi7dF5T",
  "key11": "32mNZi4yn6nvdY74qb8CdVVpktJZ3MEGUPsfPRjidZg9PNM5sECKx6jfMzqHWQ8wtn5eTB11aB1ed4nnu6h62CyX",
  "key12": "sQAcsuxXZcZGYFLXk5auvbbMkbuEpkXD6e49tiuvSAXKX2vggYcSkEPcsnaeeBEeKYFmmxyADnuXxUPSHpRyMsM",
  "key13": "4REvfdfFoJDLaR92kbdK2qXA6sPwWExZGKLNDeA5YTV2uAZcM4eKjw4nsfq84N4zuawZzv8pFBQabYPqKkfPXCyV",
  "key14": "4aVfTmV525vVgB1BN7NAECn838zuvVnpgkMYFB83XaG7JL81Wugq3itC8N1jjzykjE5tnk6TcZhb5fV6Q3PvCtJC",
  "key15": "4uc6sxMDZ66PC3Wae6at4AWs33rGsK54nTTkbKZdxx4AQLTRjyJVRvQC9yAsh84nyV8PrDjYEzN2CGjMxVKcccic",
  "key16": "ZADppUAbgy6ATV1Hj6rpxTL7593VvSY62yXDzJd3hpQWN8v7zMsBLDqURMzmy9dEg5wsqa8ZpT6X67Yn1SWgKqd",
  "key17": "47LuuJ39RBu213itG665r8c4vkVwLrHUqNmtSU5komzvgALxYMYkyccaPNEFQn7mtBn3v7qF4yWzcshvE7x5WgWy",
  "key18": "5a6vkPw7dCrm5mLrs7ATKH3vJfy91Jb7SNEYeziBwDfLshCUtuVbn2ByHdq6kTPRhfttsGo5pyQ5jHGkX2gBZeUG",
  "key19": "4e4NGNvAdSvB7jbJAFjCi1q4YCeVWwaGA93o7sSVFbaNLA183TftcYgwvHCpwUJkJDH2FqpFFvCDbstbZAJ4Vk2m",
  "key20": "2AeFbEzU6bukzbWAU3rEro9UzKyBVmffGnTrWFUiU2tNbrtpKp4CZQCokXmCzvJn4Q9tGmDS99otDz3pBrdQ7ZHC",
  "key21": "d37RGe8QJipV3uT6CvYrhccB61JcdYdHeZHiGtHsPtLibkthf1W5YhRCpFPFwhdJV895QA4s6X6yVQ9R9eAs5jA",
  "key22": "tFwyTYWpdxKcfJBFQnbUoxCdRKjv5aDTVgiKZJan78kcKao3AaqnKjMQTq9oeHuFL1Rt4t2dzhbMMM9jRb8Dw7p",
  "key23": "5xhCD1BXvefTJazsiUfRZge3jwscaUdvkeM1KEkF4K1HeXctayTiKozPoNC5Vfzn3sEa2jZjtaxzvkUsA7riD3Qv",
  "key24": "zF2Ymaf4kSLJrNNXvUDnr8ERFVJf2ZngSvhKMY5PmnZQXQyUv8pVzameYK6aACphm28aK38DaAFqSiDP3GhHtgw",
  "key25": "4vBSkEeqnuc2wjEa7ZjCGGWakrWaXPsvBjRmguXV3L9v3VCqqSa7WgaNGQjvmhWo42qD9NuscUjceHpeTMBnh3Zt",
  "key26": "2AWw825z8cv8jy8j17UyUb7yPrK2DuQf7C9tFGhmTBPuRgpWut1vZZZyL97JikJWemsmZo3UFWsSQ64JfvWT9Ucs",
  "key27": "257r3BGxZiwDY3LX9mL3iaQQ7xpZwhYQ3v88GsWpxBC2ARoCCjjo24SZ3LjaeiR5k2ALXxZPerpLVjquBCj8Gs6E",
  "key28": "3sURk9zcopzvfADpPgEQhWmrxgED1AqovJ8tonyQQriLK9ce3BDcxkVgEqhdZzhS4wuVBB2khHRAAgf2ZE2ATGdk",
  "key29": "2UFzB2NuVtLrcU4joW2jLoRy7tMW15mHiUmMXiZoNzoecjw56WpPwaHsby5wyDZGtuSdCXnzEyMwMA4RptC9mRjn",
  "key30": "493QinZDemhLsoxXCysCDiLW7yqbxFj84v6dedjJJrdcs7Qm6YMkkqRBSFxW4frjXFfELwypV1AcuZcPUmr1p3jF",
  "key31": "2fmJTHk7EqCY8jG2AHxMybWPuZ2zuiKzfsKvCsABaoK4ePgoFuFt2VBBuZqxKVnQaem97Qz13JEz9rc5r4gpHYcP",
  "key32": "3b1kcJFr7wL6CsZWEXHkDen5cFXo8o8wKeUHanKpyDYthq17g4m4T7cbw82Zns5jg3bbADi8wwgpD7eTbz4RQopz",
  "key33": "48QNawJQ2c8ZFTddEsCb2zieURFRhH6qn5RL66fzdwoqoUcpuVv8URT3rHGvp2eTcHmtbPoyTKoPRubnhVjU9fpe",
  "key34": "4HrYRfFguXMdnxP6nzLJdVHbDt154SncsXFHxbMwNYYcaMgX4q8U992sFrurvhMpbvSA8cMweJ6KpMoEM47UZFV4",
  "key35": "2C5xWHGbDUVMh6uMU9mnHnFE1SEjz9uwa36AGmnGFp6p3fbP6J1caYQFAyUgM7UDzJ6uEB7SMG11TsKGatzmbYLT",
  "key36": "4iBKfoj1fxj4Tjm7EiB2UyLZHM8UeVBTM46CmKSQYPgd5YrjrtLcb3SpauGp2jEsBrvbsk4GazdEDLg8nh7Y31Mc",
  "key37": "2dqu2mg656m7DQkEXSF37f2eUpPPPGCBNxFEs6CDvDDHZp13EjhNap2jhyh4ZPVuFJdZbxx66WQ9m2FYbixa11G7"
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
