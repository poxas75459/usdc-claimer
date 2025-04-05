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
    "RNuW4eLqytHEdnKAztMfgebSBdeRYjSf3BG4EKBUyYPNV1atE9NjTLKiZ1rAisiVihKFppxc4BhfZreg8U3RkHH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zFmJpFWP1mSNHesHc3nw3LtadFvujSHzegVjLBqHYF9aU6n7Jm1VhVFj53SwXJmXFVgr5eP1XZe6f8rkhJExVV1",
  "key1": "GacpsC277Y5Ucx1GHRynC68fz2EhdmVtZrMQYuJgWerveJRWHmSE9GapWaKouNj6ddpGKokwQNYc4uY3QicAWxK",
  "key2": "3Y2E1RsTYvHnJWNnRU6qwenTwdReRYPwEnMEdynXSgU4L1wgCqD4t2xW5Rj5BU7n1zECRgEPMW5udsqMqSWvnDfX",
  "key3": "673D4MfiEjeZYNHvp8MLzMfcJQNoHUoRDoSU4tyBNvi5xfDgjMJA3gZbQBE8k7TQgqmGRXGcoLFuMnH8t56JSh6T",
  "key4": "5U5h1qcUcdJSdAZ74RkpMfh7bgZmVHm66utjwV66oeHAeQonqNj72YJKraxwe23EeBYSMRaM1NX8jLe1yjmkzkDM",
  "key5": "2SbX3WsywQujtRmuphjNuHpBkcWKp4ETGMuLBqALhcxxJdG5gTWEmi74rvX9rWbixrrNN1BZMVdZRkYCkwkmZVMR",
  "key6": "64Q4TE7Yxon1KFFkwvZWuZgpuGrFZCwAfB5oW3w8rhXUHs4MakQ1a1tVrJcn7aVu7RprdCWCJujoWomJtJb7twei",
  "key7": "5gxT2vqxrsYbnbYTt3kLJtpEyBuFJyZ4F1qk4Se6kNVSneHxbKTKtmtigzWHPrPPSJJNJskP7qJZ4oLPtaJkkBYt",
  "key8": "52ffdM8LxVVMsyg27MoCQsx5mRNLYtX6XMU16AHLYXQfn6oTUQx3eHpDaQz2Vy381JBaz5Sw8CdtVn3SH2BkaiCY",
  "key9": "QBCq5RGTsVTC1jthoSThKFG217Mjcdi1HjE2GxA3Hn5AdS9fDpGJEAC5JrTZnSRpcBn48NjaG5aJPEmRw4GuQ66",
  "key10": "5AGhkV6Z57WenL8Rd1ziGNPND1HL6aiz9MFAtWUmvH1Hrkr4MYAGJfFV1RYuUeaUYWrkv1gUS1syWSndiUqa8fGj",
  "key11": "5a9tS2FTrgdFgXn38jegQthbd7pMoWpcWeJRUKQD5DF31Waw2qmae8R85impCrmgXXDnioJcmwfMVWCZWoyKFwEv",
  "key12": "ZysEPoP6Yb7AfsPbrBTbzrDKnYhbYBZxLKxxLTmgh2GXqjU8LpJZPpXWh82tESoLJi242uaK4L2JRKoSHkjwmPU",
  "key13": "4GgQPNK1WK9D2HHaCDACYEhTVpPPbhFAAwxnxegFSB8asbH2UmS83wWKKvaDUSMnVxCn4fKMi612nPL9LRT3y2hj",
  "key14": "59VVKM8Y8qd7m9DM7Zg1sLes6oLobRGu66qgVpMZuX9ssmttZGfmmf17mhhYCMeaTqsfPL357xTCExoC6esQ4ahR",
  "key15": "2L4GUULhobrU1WCWMfmh1gfgB7up8ndLxoBJiYjWFJ9LPxS9aEt2zgvFXWeWjk5fdK8Y3TBFKyZLbagHBHx18AxQ",
  "key16": "3KfhHGiLBwFwibSVB5WRbQV5dRrt2c8X6cYBZd1kW7yYJDKynXxBvGkJ4mqqL7TDkn7gJAhfJYaYGA5bRc84R4Ps",
  "key17": "3r335aBZ6PH5cMcqkGVsQftyLrDSB4sXZzkySwXve6afzrM8bDDp38u8aqkobyHLeEpKsEUdYDF7KsHAhNELvKDZ",
  "key18": "2KTXFdhc7jNLmvquEdHCmbc7VCWagvAJBEkTespPkT9GmrjTX88ZLU8EmnxqQzzAYXbjvJvziiMj9VroNkA8J6EM",
  "key19": "5bxrhG96nqxGz5FCz5UAWyP3P5C1L6wS7UqtpVMnFmVtd3GpqeqBtW3MP3G4Ut8NcfUKNZLaSpHoS91gZWVTh692",
  "key20": "32FZiUhmtDBLtxkuHFFGEQcgFnoFHNwKq4thRD45boNgh68K8QTQrZkr4iFw1KbxcZPmGq3LQgEvxoTjgnMWdZSv",
  "key21": "ohP1Sd2RxmVdsjWeLqS9k55YjqhUgpesarn41NXu3wVX719gfsKXZm3V1hL2twGsEEEA7xmRiN3pGBWGcXhXmak",
  "key22": "YthDBcZXJGeAzVmejscibTj9eUKqCEEuxcmYnZ77nT7cqNQsZ4zrt4ZCH4tKdJYiHFgX72o63BzdxRLxxHsByAR",
  "key23": "4pFLRGBVngf7DiopK5EM6EdD2fLcqCUtjhDLrnKbq3vDzEZHRU5PwhTMV9rUWxUKES5qEbttPrhgUSVx6P4m9YhQ",
  "key24": "2qeVsy839fHeYkQYiXKCH2ZYF3bJBctFDu7zLXycGf3EkeY6Xk3mCm9V33AJH5CiJ3i3v5sJYN8TxWN6HXCGPtca",
  "key25": "4Ad77NzH9CHW4pPchHMbmHSYJbiGWkqY7ruBH6Y5uQPwRGZVVVF3xXWzZkboxFQAWzb8HTWFYh64suhtGTKyZKoC",
  "key26": "u9t1EV8yc4rmeBZSpPUuq97bBgNBJH6C4Bj635igP6vygvdoSXAUMPTyTMDR1uRGQP7LMXJzaHDh3AryUF1yT79",
  "key27": "47WzDneULx4A9LVnmfgyCJxRNFowdMbNZucKG8fGu2XjMkzqLzfUoHFz7q7NwcpN6dKtYrPaykQGD9KRYAFgppKT",
  "key28": "26rNoFtE9ZJgKYFoSM8s4HFZyb7BmVPeuba28h1WabaW2QU6XetipKYzM3NUH74miSQBry1sRqkviYyKAHPm4fcG",
  "key29": "Fu6exdE5i8UonueeHCwkzwm4pza2L3Ps7qxtcyzNrxzk21NkZ6VMjiuDWBVJgehP44g97HNLfTjiZ6A6JtmPHC3",
  "key30": "35RFT5P5BbCPr1txtB2pDfuxm6vjEgNmuuhS2uq3qN4UsdzRHpB7Vkxq4347iYnGLxRjX6jMFLesoPgX8ThzDboq",
  "key31": "2kgZt8BoFc93JrSbnQnxkV8UBLWVJo9LLfABUE4iyRJs9bkLZQSARNEzwkH8E95eGK9uz9wU4ugkJ13WhysWd3jk",
  "key32": "22JWJyZkmM8AidSWGJpXjZxNpggm6trPE4kuA5HHoNjSMKNx4QZJZvddsnRiSnc7g6edgNe6AmHfkScdxANsTLXe",
  "key33": "4KSz8FBsfSg5EAtG6gtoFLZerC1QRhZR9dVgr6g7Lr7EyRPwbyYesEHFRKRy2UP6BRzubo7GWULGypLM1d3Xp5cQ",
  "key34": "4qsSPRzx6Cr7PdLWtQUSVSQGuDoncbmiuYbUZnhRUfXWKdHoTEdNbe22BPXDKN9zSGPmieee5k6GYTaN5LYSGtst",
  "key35": "2sRauVpBvxELPbcqzRQ9LaLJwwJhLys9GgVifobsiT1dmSK9i21UVnAgcaBLmGSzxaqQgMGtrxHF2gwQLZdorPEr",
  "key36": "4AV3V1ssBW7VM41LYzuWXm4mnU8CyeSMYn5apispjmJD7N5jyL4FS1ck44fUdGhLEi4r4eePnL6DuNYQPJtsJfDM",
  "key37": "qNVMZ5ww79KmFX7Q5xFdAJm8MigZeyXqT8wivvVKiuUsTG9WhQWT1wGzUPJscaeXdt9BiuEuAaoZrmLaBoe8eqJ",
  "key38": "4VoFFWNCu9SgWG5qaNe3FTRbzCPnkwE8sPtvcCamhc4xtk9Y3C4hMvbHFymk9caUoaRhDkaU9sw5ddHiD2dscW9m",
  "key39": "5WpEDFNcaksazMW1M1xRMenp4P4vcFdXH48CCWLZaHPgrhnvNHYi4TLm8npVHHP6SqzPkF4jq5CL1p1ywKck4fFP",
  "key40": "4zWz2HKS6BTtHnfQdXDMSEwtJLx7UJtJ4dfCPLsqK2QNwCLNwY98wvV8N3ZnuDHANpBmAJdRoXuLpGQnZVGfeD2b",
  "key41": "4k2br6P8oe1JbPVrDG9p4UyYugZjskiiFhcVys2bSjYmpUFAZfJ58VQzELLmtRpnWvaZ2KmSUemRhKnLvJx5wAT6",
  "key42": "1FXr6suxKdeapYuSz6YbsAHK2n4UZETnyeEzJ2FCw4m58YnUGCVY19WNY635Q2Qiu63D3FRqKoEeT8HR8BKgaSN",
  "key43": "4dDHFMQywEgTkMnnvCrfUNTkt8jKuqmkMDMrZiEZ2gEec6KyHP9BNtN62aJz8nfCBFdzJXXm9Ggt3z16Y25go1ss",
  "key44": "4ACsJLea1KFL5vQa6XETnhetjky4jvZZFwpChnFUaA9GYaf4Rknfp8w5EtKJKzfqRqKaFb2tM5JRyugbNsWbjVgo",
  "key45": "4srLwt4TFaxNA1ihR6zRP1S1XTkov2mE5hXo4nHcNDjPNh1XmKxS4JrwPjMU3WsT9b7SC1r3WTenMsnu5KsKrZao",
  "key46": "P5r5P35yHnBLCNKC2JUsxtzWp1VfBzgMMTBw5n1YGwkmeJJXN9mz6vcXn3iMDASQoTCuboTMucia87sJLrQjJ9b",
  "key47": "5UxEJADPEuLrYyCavwzvHxog5ybAXxXk4HSAE39vBXkFymtTDt4AwVxEQkKjyhp6ve9Vu7FGZGD23yq3FDVbVvCM",
  "key48": "4sdwVBD2VuDtnCa3nVqM8tY9eYcwv7hSXWPXBxC1pxsZZjHJD4cqwHd1eA2Z2zZEACVbsxUSicefX2VC5XxLk8Xr",
  "key49": "5fc9tyKKXozg2H16jnkaPkTQdza5PjVsk8UPrh39dmKVKvqsqAfm4gkPz7XDVNxizLz2H3yTj8TAnww7ABNNb24L"
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
