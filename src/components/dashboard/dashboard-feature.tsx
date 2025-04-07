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
    "3vsw1qauR38TXb4YRJEhDuvEW6niyiYaAmFDu9roXemrJryZYifosNwixW4ay6e367hSNmnJu3qhsUHeLUF8gzu2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H8cpsuX6fUJKh2zx7zRVTxRZWqGioeBZ6DUT185dkvrKpfM6Qt7xdKgM2SJxoLkBAnqVYP1FVVhhRBfYJgMvq34",
  "key1": "23ajX6YnEbArPPF9CCMXRPgyaQPVQNCcUiyq1Vy96dyVBVGV3yd8Z7jrnFcfEqeRTwQjd3MyzYvRH6grGNWVkPRZ",
  "key2": "ACw3b36dkSLvpES5JbJLoctLCbepm1XCAJtj95GLVmNF7F6bqD4MoKepnYiHquwtFCGXhBGfTHdQmzG1TkZ8738",
  "key3": "46rTwV8u4XyXWVDWJY2Sgx2kj2jKK1pJ6M37AdMCBhmj33nafNZS4qHcxpo363CEUUXfWCLgvxCVD6Y1hyDvujsR",
  "key4": "5MEaxBrKJHwDn7JsrEW66zYJZmV2MFxCiibwYUqPwNjXBGiGrb3WBSmqGqftqKZafg9d2da3NwR8LA2rfbEEvsyY",
  "key5": "49fE8XQ6YAPTDm9S9CMfxRkB5qZPxJenGbCqoZouoahvamTyk5VEusdW4QtQcWLRZ3TmK2Km7bUue5GAexknaQ4E",
  "key6": "zuwM46d2Q8SUii6RdYfDdLQD8Fj2hfDa7uhCmQoYjCH1dN5CftSfgFVYRczXpV7dxyURSpnLzmivFwfAHCTv6hw",
  "key7": "3RJ4N4wtrbHwhHB2tDtCh3Ue1HZ3QMuhThNv1Hxx1i9kJBkHmmF6uTVHYRpSrG5k7jtkig43bjPQ28e7gcZ1n8Qs",
  "key8": "2MiYkgyebJqj2i2e6jftDtzA2eFBAzSrZ6Tgv4MjGccfssepdbCcTD1k7qJTcN6os2ha3f7Zyby8hVLha6Dmqtfw",
  "key9": "64YUgp9dg7JrHVyXsWmXzXCXirUjzCqVBMxPqMREkFXKrj2r5bj3QkWV3r9yHCr2M5U9j2pqys2PVdASqkvPTJCG",
  "key10": "4ijxrsDyH3mFtquU4D4hemLgQHeNGKR4CuoDxZRUUxdpoh38Bz9LJYYmvdBSuMxQvTDNBotJNroW9Au1DoSYRvoh",
  "key11": "2obeaH61zkezCnEK5ENj726gmaWkEV3z7n1JYsW7iTu1RVYUjtEgBagK48MMN2Yjus5KMYAdsXVdWLd5VCHmU1q3",
  "key12": "5FuNiZS96aXpjg3zbT2w4JMBw5Uzuv38X6dANziDwW8oPRLNWTN81NzBBrpNVoFDbxUFvviziyL7HKU3w94bw18a",
  "key13": "5AtfahGdYK1yyENixAMToGS6kXUV6BSzVohZmwYZ5yWKGxSFtGvmBejQfFseoaZHbVf7DLNQUCQPev4Y9h8oEzxH",
  "key14": "5g2mEWiehmGpR9cJX2gwmCgSJcMhhwKkb25JHDWBEELB2E7F5aNC2FPFaXayF3bugZH16VTr7GNHrLH3C2RwaeJH",
  "key15": "tXw3yLdKBotHr6hog2RViKrwM5KonuaM5YBpwr75dvA5uV4ZFYpdfiukN9aoPm4PvAvjx75YEydgu3Km1EFaHTJ",
  "key16": "5PnVd84RPYeS78pMQtdJug8HPJSDDtoohP5STHLtrSC3rq1T3T6iz5YmYStRikCQpT5rxP3VCYNTCkykaG5gLAQi",
  "key17": "5Xp89sF2G4idibJTXjuV7aPLk1V92t28xCjdoXjbVSs9SnA7CRTW9oP587TT9qA92WJaMJv76tZfeAuVSDSM4KTk",
  "key18": "dzT5jxq4YrSeEgDDKNPKYL3s4Lp58mKZ7xJwMKMPF9hm2HKFAaDAKZpMQFgpMNUP5jzW7SN1Bu7iM4VgRhoEadP",
  "key19": "jiSXR7rk5rLyyomxvZZdKRNadGzR3yzNJV6xGcLaARvAWNDMUT7EDeZWSnBHDGy8FicSNuv5qVNoHc2FLuNC9aj",
  "key20": "2cdcuCixD51os2HxCQiZqngQdTrBzpfLWvmRCaS9mk94AXG3gsVSQW3gPQH2CuVDN17MQMG1zGFC5nbVsaz4zbAf",
  "key21": "3Jt4BstfsYAGcTiifCLuthJKEMrAfjoueJcvPF711EMw2HeXDnsThJRZJ8TmFbGH26KTK1HtDRkCQdhu4fVD8d2K",
  "key22": "2QwbYb4qCgj81AUihSVe151waPot68yKUggUvcfDBrKGp7A9MTegZ5utMbowd6BTLGEtLxgiTZZk6zoVx16rncVR",
  "key23": "5C6MxyYzKYtPCzLXVJakiXJLQLoW8qMZi88fziXKWEnikVGLZfKcJicAmV9zagPcVbE7hy8i9acoZwYDX1g3Y9bo",
  "key24": "3oMKFt8VVoKAX7KV1RBgWd7D1kwQU85SzhesNNT41dL76vPW2jSPafATTn9tWZhe8ypLPebsTMkyg3uxmYX4gLcq",
  "key25": "5f491VA3opkR7SQs8MMMf5kWYqLm8qFTdVm56nzPxM2Dyzxd5tNs1wctj4LXv6TcmFv8tRDr9yE7h2Gvw3SJM8gs",
  "key26": "5KVagxm4bQTGSWMSyj9E4pewew5mt4xu9STp32Rip2qr8skWJLEDAhnvc3BrMH1GGZAhjDds9Nf1dvkxSSWRzrsY",
  "key27": "5QtPKJMbKmtkgmQNFTfTKrnCjjp1aMWmiM7Pe1FPGWvEZdpnVUHwRr7vwastAu4M6yxrKWH8uwCn7a7EnycwB4oF",
  "key28": "4SSj7izdoTAbHWpEgL1yWB5FsndvDC1FfpGszXWv6cuLdz8mBwD7YUiVDwgfZG9EBMYFsQhUBVM7iuQKw5Vu3FG9",
  "key29": "2uekR814ue1fHCUxbTKfH3sRWaPJjsjxiwQevCUpdgBszW5MULP2LwxAHWxNgENaceQKRPkYa4vKRPpxcdPGoppZ",
  "key30": "4WE7aPNgxn52o7fKAuKHyuku4KQouZsg7geUNcbGzVVKWVamAQfSc55F1oGuhLaRpkNg1PTNbRC9Af6vH8rYkL4y",
  "key31": "4z6KvmjaQt2ZU7F54zCWem9HS88QR9NMwpHTTC6jZQTVmDd25nPPEcS3YkcFpK2WxXVZFmSJ8XFH96J59EkeThAn",
  "key32": "2vL6smRo8K1fVG1fYUjE5wcdWN5NnoM2xB4An3YZG3qo7U89gERViGHCQ52R78GbZt7hUdGRpzpRxN554MqTCn5y",
  "key33": "5R18ed5AzPQqBKPsA1MqtQTb9vYTXPM4vLs9DKU6Py7ovna5VXXQfdeTFf4gKySa22Amu13Gop1eF2hrUdTKzYJ5",
  "key34": "3xr5cZHo5UNdf1ZRyhiVkmobR8MPsT1A7o71Wvxkc99Pye7XtePUqxf34WAgofGYoLL4vnExw3icNmvogup587Aw",
  "key35": "3bVs55yHHxZnsfGYLEZVGUGhcUo3iNyDof7B7ujMC3wXQku6a4DU5BJ87i7BbwBsucDg6WaHMoucoYfBgeheu651",
  "key36": "56jPzbG611XqhEvc5biRse4Bn1VHgQMDaLsvhpf6ATvpwcPVB3Nm9oxoPLsPFYThT8YSUp1aRcfSinPSNBzYMcGk",
  "key37": "5yvRGAJkyjqQPCFx3SaaMNTCTW35D8fPUVLAQzWud8p5aA1Hhibnb9udyKYKMpWzjpzAHUy1gPvjL8cYtz7QWMEe",
  "key38": "3b34z6PNt6vbCzbMccZAxPGJFf5qykg5eUGNZfcjdNDx6du73dvb499MSsQ56y77SSV2UjbYVy68J7V5yW27zbN3",
  "key39": "3empQEBcyKniSKyzRY79JoSPcXS89SDVHq8u3hZ2zCtujeLfFieJ2Wj1YqXsH4cRGL9ZK6bdR88fNb9PZqN4w2jq",
  "key40": "26xU8XCuNtWJdDm1ESCsHWXsMkzPU9Aqyi7ZXr7wfFYZjWRToG8hNDLKFH1unieM7njPFbLZHXodfc4zH9mTASKM",
  "key41": "3wjBnALt4B4FoEqCVDuGiLnZ763ePvcmFS2VrFaYW2QdQkdCRDydotT7k7LTMmUA9x1xpyfD7u4YHtBj4sjKFAfA",
  "key42": "2gPS7yxZxw527UtfYGgDNGQ2nZjhoqUNqc1Qv6JYoqnztNmr3P8XmtowA8KSEmZTu4MvdYtdm3hrrxczsFTKCW2Y",
  "key43": "3nvQ8a9LFQ3Nf2EqcVfkrzmbjkJzicvd5bUCNps2h5qGApx4nsXoR2n2RyMoM58T4TsXa1HF4ozvEvhkbiRdWdah",
  "key44": "4f6vYBnQH8fPeqBxN29yX9XyqfhoC8uNEZaXh4XSwoFYz3bBaMoxJ1J4V8aFwZ2JUtRn6f92LwMPKrdgdQyFZ5zr",
  "key45": "D7s7wgnJCTyAoZucz6pswge5aCxkrd9AJWQz838QgHieS6ot7CUndZfdsnmT4bJkypGivq2ezYpkvYeBSnoVNGn",
  "key46": "49g2ZXHgNUM4VRhCVYBQGTvobKsiLwUBSAHAioxcHn29hGS9uSoy1wU7jSUa9HQJK9cm3nhr6dW6SJCfDAbZzidR"
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
