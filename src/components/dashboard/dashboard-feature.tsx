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
    "JMnYeU2SmDm6quAzG6kb3Njo1i286Dng5GS7vjmQwo1ZAEzQGpStDNMzdDX84oTLN6KUvCA944XGtEMChFqpTZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HcSJtjSRphzz1fAPTkcGzJT96sRhW5bGh5Pkzx5YpFaqBxAN9SDiYUfQKE61x6VPrNEPYQJyGqoUQ3sBcQM6avb",
  "key1": "4wQb21RBMZuax1yn3Jq6b6NBQp1TU8FDL6qZhvLmHrswvMrWJ8ZBxoB9vhQXdFePSD4FPh7yWCcuG2SBXRLijx9w",
  "key2": "zKNLwoKb4U4Y23u2QwgoiLhGgR3ZvLxiF1MGZ13oMru45ymMo1U6G6duKQq56N3QLH5hy4zH1srtyvavvcjnN5M",
  "key3": "5gWfQYgFJCtN45Y1qcC3GD6Z8XPzXG68AqUpV84gihHZULW3SwstC145pcFpuGkUUxmNEiYKh7t4EW1JNKHMzKZ7",
  "key4": "2bDHWFXo94VPjb7i6XUeDReGqPDGjHACAJfRf3L6f4zeahSg3F3BvFyc7C95CGrAdWBKHYZSXjRhL2ssmVz3bZ8n",
  "key5": "2oSiJevvKjMc6YaHJaYcW4UhKiuq8xgZje72U44LqJSE1JQNLq2vAW5j8hEdA47kd5aRUSktcTgZJY9UiCnRstAD",
  "key6": "s8DyRAWC7BZiAdm4Won2NdQRWwi8X6MpmvaGNgQcAXX4DcBz5bEWZutN6EztiH6ocbFzCmRukLbi1YEDrfgKBb6",
  "key7": "3HwQAC3YH1TsvE55RUGPRyxyWcDJJPrjV33dBysjZNWxHmeSguQA8Q2tT1HrPbNfQ77jnxLNHfzdgQKQXUKqsSze",
  "key8": "5wJvdWh6hs932c78KbabAXGMQ7XY6WubW62LsV3YiGw6NSZTd8W7cB8pJ6fFuFvAo9MrBo2vGkanJMA56fPYHS1D",
  "key9": "3dY7G4PgTZBfi4vivP4ixTVt4PBZbm2LBHYWotnZjdcAUv7zkwttyZnbGuu4vqkmpN62tgksPzBGGXxm79JFipSG",
  "key10": "3CfVMocF1ZGvtym9i5RDP78AFQVhLNT1fxGekJEfi8ZJmeCbiDdPgB6ehjRADc2DrSZTyLF4DYwHHC15cxdGxha5",
  "key11": "5g12kZb4xwx4pQDAgzSiukDtu86WX69SwikDKwYW4F7AExSdizF4m4iVD7Y9Hzs76Thzjhnbne6qtJk9uGZ8zGGi",
  "key12": "3vK1JbRmmiecCTq5ogYfmU5HUFaYzUdYoFyVupv8ABDKYXLi54PhbTLBGQfHjf4vEq4zMGBYs3uHUKGtm6fxJ1Tk",
  "key13": "4bop9xUGMFusGdu3ftBrKXQQAXuBXcseZptGELyyV3if8aazJ1ibdwDrzMUNViL3hiFDzK9FuPir45sr4VXoeXLV",
  "key14": "3o83b3XYk1G2MxiHDp3Pfi9n1ToDWnYH1a55T1YLTv47VfaMSWH2ng6kcCw8weVztxAJA4uoz8GpYmdHsCToTmRV",
  "key15": "51FVA1NVchyVE7S418DYanoFSQwtPmPKkhgEAHBcvE1R65aBcykG4ENhFYgpTPSnotUyTJKdCvzcs28TfsDv3cXa",
  "key16": "2o8vi8P51Cf2fMRrbdf1LFNk1t8zPzb47MKz4dzwEzV45K83FYkNYwXqiTKiVVathGDJav6RU11wV8u3V8T4U367",
  "key17": "2e7tQweDCBS9PNoTwiHLhQgzu2acAJLdKr1r3S5HKkxFE2nkkMgctWNmYmQ1YSejXbqCjhehTQud2gXVa4jFYtXE",
  "key18": "DSJdfCtDaWMDicvaegRGcZCD8cec5RVkUaezbgoexnqvXfLXx4jyN5LmEmAVeiNi4G4Z3bLA8yNsE7zxdT8xBrp",
  "key19": "5boQKAfwXKWiRd6PshGuHAURB6Xk4kmsFry9gFUQ3Grk7wkZWxanwFMGHKS7LRvEH4QzuYTmGxsjeWFvhRDsj5tU",
  "key20": "4V74P8EWJXfTGW4qaLjRmR2ufNwzoXrQu2xEf77ZazUuTtB8E7fDFt34FgHVuuixvKR4tH9dph6FzBdNDS7QXLHd",
  "key21": "4oo2SgaxywTZKidXc4MRRRn4yNvPy8ovNL4bkUvUdReBtNM48kqhovkSqtJNeNYynPUa93DpfK25aPbSfjTLxTBk",
  "key22": "4YGixosmhFSJHqVsayfh9pr4n2wqUjT5WnfHj7RHRRLxV6k4SUeqU9Kqgkv2V8Rz48ZHT5Nxza2GuqHWETfbpHX2",
  "key23": "2kWGCSpPhVUJM1DEoRXVo3NWXxgQ942LqX9ATvwfVfrYwdkije9P8pP8hp1pd6g4V8FzYDNQqkW7kPNDPtfBSoh8",
  "key24": "5hpBAUT22bkPrTjybujj6fdvUuxkBxjaFCtFKRVLAR82iv7str7nMXGE9uyVtvd9w5C4JjpW8amnFeqa5QnehLML",
  "key25": "5rewNtUe6gjEWfWUHvwWpWC4AmEHQtmSZMkF4MxLsc7v4PDQogW2HM8tCcghnYkErn98eLqT4yGdqjFgacuAoGnw",
  "key26": "2juG2daV326SysRzeieoGrhnEQRxqnxdVY7ehTTphZ5uJrSfmpm6zdGeKjJ4rSSDiXqTJhJigp7sZxk3zoHVTuk9",
  "key27": "ScByQoqx9L3JuqacQ46LPxd85DBLMqFwi1oSmbiNDFJaHzyfyAKMyNDpfp4NtYpXyaHcGenRtjbJ8JkbuGFNTxE",
  "key28": "21kjxgVnYhCzj1kcwz4jmLLZqxYawZMR6BCJ7qy7HX7UaLSwakQAR6MrCAGYDfdamKVp8EGJspo598gzPjdAMkDH",
  "key29": "5Va1jmpcec7scfpEwbxV1wTnxXjDc2dfXNYjDD9UmNSHdVWWrSrFNfmQ684TxwtWFyWeEAFZHdtkV7KxpyYx5hcz",
  "key30": "3mHLZLrQHzXJMsPML5PhXPbaiiViDyEC7zyiWFji9LfpLMqvNS3XtKAS7smzBkLjCaCCPqQVPZutzpEdtVhR7eRM",
  "key31": "56k6GKC7qPDt8AgUsabdSQibqG6ZkauFQQTinoYxyJAbKqs5ma3KCrN46nh2ZzTq5hc4ir3nZRD5bk2BzdZ9hpyK",
  "key32": "2dtVG492qs1Ro9pQuka2e4RNMVXdPxQy45xc2MA3R6RUFFjC21Whkv2HVSmyPu7yFW43338aXPT4aZsJX2j3UpA8",
  "key33": "53noXC2poQwUbWHYMhBoUbR4r8mfht3mbEz4tghiHqZVZemYGMzZXFHAPyX1BhjiUV5HkGPzfLuyL3oiw9ph54Zn",
  "key34": "qLf6fS3wU2gQLt4CJ2XcZjeVGM9nD58hw7iKYwx5aXaKcS7gHZSwX91yoJsVjVnAkQhCqtT5LoTZiLKwvUYBW2i",
  "key35": "4cDdS47aTJAg7vkouwqHvuiGFXbfgwiwkKcFEy9A8ztN7vBV2f9YRsvD1NJNYkX6hZB5mu61rhSSYrjYuyEX6u5n",
  "key36": "4K6G5bvvAEroUCZErBwp57442VDxmeGx9J4nJZ5TC8q9to7bcTaBpJqSa5gE9UbUNeanMBz56xUgGbFdQ6bAiVWZ",
  "key37": "5s9vYWWTzzeUMsEpNXTFWiK53uzh9V4jpHPG1iyCvY2b5xNLXmw76oYE2Q8o9rLS83EJR4VZL7ujaUEeJFUYeDKe",
  "key38": "4p6inHbY65fsDjrJffsAcZBYykmSDmnmMurao5nQmcHC7Ad5JnLCkvhEFGnZZRZGycgwBJhuwFfUzuxE1mq7kceV",
  "key39": "3McKpyUmHskoS7LDkvm7JgaMtVSNfq29nXQ2qHnBGMcHo538udoScBvE6raQVpLUn8YaQGNjcDKUaeZZz33YKLCt",
  "key40": "4ESKUvZgG81nBKCvStsNktDSkZLx5YNZJ7czBTS3EQeZQHuqJGJajMPJYyADywnBaURqRMX76YNAjNjehLyqUYU1",
  "key41": "3mjf5hqz3ZZgP6dMnPWtEGyuhbYoRpC2QtU2D9Tx2gxYPCw3ef3Ts6M44SErzaAC8AL8qJpNXi8asDfz41NPQ3fV",
  "key42": "h3bRz9aLD7WCpRt8yCJi1qYiiFhmF13Ay3XZ299jQpwyoyP544WVVQVgaSQhCAa2jDFCFxz52XXor7QKwKfupHB"
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
