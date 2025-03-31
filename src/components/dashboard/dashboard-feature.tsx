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
    "5Bs1J9ZeNVYdegR57ERCx6caEz6UASwyhwsFf5M2rq3P66rjHpNEoijFByErY63RfnArntULpZ5jxVsk2DRWKFDw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C7ei9fHaLDPmGZorYoBxycekazwfe599JmStzkcV1sQyK9Xp1TU4cqFR98SAbpieJGjvAaua1E4ADWSHx4XLipN",
  "key1": "FJKgdrmP6n3oV3gLnPXduGLmujZqGEEX79953KGQcKULdZgYVpCyUYKJTTgfKWtwaUnmAsBRevRsMUPiSXN6CoK",
  "key2": "24z3KrskzEVTo1zgJgLaWJ29vCRa7FQwGAnNQwJe6iMLyMbqUzvCEdgkDxLAJk5d49hLdutCkrH4y79PmtZryEjQ",
  "key3": "5UbEMwZX1ui2YxcwgUotKw4CSmBfa9tDk7f4wV1HhvghFYBnhu3DzjFtv83byPVzAnSeT6udA8bHPSZQpEsN5khb",
  "key4": "5dX2UNmLyfAybBqLjYhQgYdbR3EwZ3hQV2oTB3EWBGwSua2CqF3TVVvAekcAT7BPNQRtXnHscsPJmSvf17F1j5gY",
  "key5": "4CuiMkZPEJZJbbr7W4SnCfER2Uu2GzXyvdvNzY59sW52nMBdEULGtbTavrka8PCRtzxMbGZ9uuUuPYNSFbcZX4Yp",
  "key6": "46WsPbuv9Mymh5FHfAZ6YR39iSMZ5Vnu1YWQQergJVVRi4y4uSkRTAN7svtJQgXwPsw2Ljrc9cUd1vqXG1HZBsyu",
  "key7": "3WNj2Ak6mnCfPSmmuujdfiTVVKv13uTMRRpGr6zLAQMQyURp5WN39XmQLaWdf5ik4YRhFNpahctJShY5MCKHc13q",
  "key8": "671HsLCM8ajpe6tChnW253zU8VBiJ86z6gayq3SAoJG5jEmzmmsNiSFNDKB75GefzySSqELtpsM8NFqVvKVQaQuE",
  "key9": "2T7oWuoXmk9aSWVrZLucpi3cK8KANkpxZBaaGCfpZ1wN3SfQMV4A2ztfjgiukxD2kiQ9oKzQzvVQ9YyPqSAKMG18",
  "key10": "3x7FUT4tpK2F286euyMxnCnWLHfDxJzFp77XFipk9SCpzWkC1n14j52rt4BHatZ9xpqQZNuiv37Q8CQJabhYwDT4",
  "key11": "3tPeyRg9yKPTF6NPTwsJLVhhGLp2AD8yHNX1DmUUmqgRSsrmi2Ny13h3mi76otTJwwwAmoubwfJDQrXbYMC2CbZN",
  "key12": "2pqfLXdjkkzEjXv69EboP1NQzKrFPMtht3856wiFa4pZP2y5QdEw8frv5EwbANZUcCWRidpkXzPNpwQPJWQAneNB",
  "key13": "2oMCqVUQKzGqzFWH2xaGsMZC7doRt95327GEaZTTwyhnV9k4xSyvgsEYzsF2kLvQDS8ow2Ye1UGkeq5wfC23jPXX",
  "key14": "3D1vP6bspMk4wf1XqdvJDtkgm6SD877jwGrhuVrfMtTMYb3pTGtUa33kjRQ2rmsWwh9jKdCA5Wh8HTRaibbMQfQ9",
  "key15": "iPBM56yAynVieked5SsLkQr7GknUje5q9i62te34K14cQ4mL96sH6DLueDudF3D9s5PbXYDE4mXHRkMDnjAeStv",
  "key16": "3h2XyJHKXtZSRbvd1j6E9VYbyjtR44rnukNnNCajWGEyaeGZZ184eaAzNbSFSgaKsghRpMoGW6E5LzPPbBY4rqxt",
  "key17": "5S7F9nXWbtM7Rv6anYDdnLmaQYq8wtWNSFtor5iFzkB5ki83MS3geepPvjrUKbf7ViG2EWN4U5aSnXQx8zsvTgaz",
  "key18": "2LQTE6E8FrCWQuahE3dgTBSW6N1caraHaY2CgfWZKQXiU27T18qbwiSgGuv49RdsBJekmGWP6SHNgUX6yRVK2BYJ",
  "key19": "2BDQztqVdsw4qLby16bnYQ6pjtAKZXS3qX6GJWVhGkzGA5Q994675szmqujhRPmBXMFgzKUeJ81CEX8Wwqt9dAvY",
  "key20": "Mv85EToUhcU4t9yLVTgnqoayFvV4ZYUGxQtCARXgqwg9RusLchurvigUoR68GzXU3VUr87xLHj53E97cC3E8vUk",
  "key21": "3W1Lowat9fTttr7XKvVVYGsAbbjWuFsxiH6zkPbsdqp8JReoBtLmUbLQrfr2j554zYUynWTo4Rwtkmc9DeJguP8Y",
  "key22": "2QTzouooT2jcpWtF3MHM65Zb61Hfd5xp4bBnQAXNtU3AvR2DyaCuZLfDKGgoHfXAiMfXwsCsAUgCn3Uk6YsrD7ya",
  "key23": "5VFM9cL4xxmQj81z5t3dVGUgMt3bWdWx8vKfC8eTLz1N6m4DTnmdvgXueYKitBnEoapjvmTjpG4xtq6CmZasvCcs",
  "key24": "2Xdxb6nUizweF5XGXkPr11C8ZGd6fX8znEvYBvQmLBbijyFbswXeuAuBNkjHfXac3U9fRA5watGwV4mKvUKRQq3u",
  "key25": "5pi6M2kYruWWLdueFZT1iX2exKRB3hzLQKzMoTMXsq54DZ75FJnZ8AygJJNfspvdNoiyqBXpKEwZzSsebFk7qiqS",
  "key26": "aiXQ7s1Y1gRh6rNUmfhGVSAcEV24yKNveimkt2FzGxpafo3iqZH87fuDSr2K7uY4Y4k3gV2vZ3vXD3fzD7hjXuP",
  "key27": "3CUH14TqUUW4tU3hCU83wSn2jxhQiWLq6dVvexz647jHN7VdrNy6bCZZhUvy49ekLkkxyUKKQiB3qQW522cGZdk5",
  "key28": "5Kg5Bs4eKen6vVKbjRfuK1DBu9PRM4fbwy2vU42G84NPG214VyvGn1KqvwPrGAPdvnPSgAk12Vh1VZ8heSsN737G",
  "key29": "2XGHgJ57kufqHMcS9qg9ogWTAu5TAZe11EpSwPixQpwguj4JXNpJ2QC1BmovqjB8nDV7rShVhbMaMJz8f2uE4494",
  "key30": "4awSc5Rp6Gyd2QKcmYxF7apeRho1N7i1kdpgccHmfMnLB2FqwCedB8tmQnyuQ6tLYyQGHdttHs9dBedMv1p6QVMB",
  "key31": "3XJfRcaDSgcGevjsom5TYhTLAkWqFEXa6QSbU6wV7V41YNFohwP4A9QyHBZXDewBjf2RNVVFEwLvQWSVy2TerQe7",
  "key32": "2588QeEWY8w7RR5hSiQQBerRhq1QXLnBtC9mWd1TiKNtrph8Yv4kHf4Mnrt9raPRpWTWhhDT4GZ3hCGzYAHs9AxX",
  "key33": "VN5Xaue923a9nwxf2C1R6CBrnkHHSNQdy69mBjNsnEtXGfTTS4N6WetvqYNzZXyQ21QeCCnqy7vLhU6fdQCkkRT",
  "key34": "dvQsqRTGstYAYeCuUpvDDBVkGmC4AmqtnPbKFV5PWNXYaHMMCjQadbDriBbVc47bLVhYsf8y49PhppsXjsxDQDV",
  "key35": "2o6oGUDeiFBUhK2EeyNqHsTknnHvLujGwmrj6Ly9YxFqJVRmovCdZnnUbeMTjKKkTTDV1xopiJY2aegS3GyQ2TkM",
  "key36": "3dJtHHygWA4Yf3rRZ3YqTcHxYhf7Bgsie28xXmNvQpJ9Uigkr3Y9WRA5WCDaxPucSTdJG2dtLPNoGiWF1zsuELEa",
  "key37": "4V27vUqMSBQkc8UkWDzXBbxTmv7dwftWaHkPhb5dUMRQi4uXK191e4rSgrnSHx5ppq64rAVpsfhx33rAbQ94F3kb",
  "key38": "3axhUTmhoRbr94Na35xYAQG3pG635pEKdTBq7XaQAoS8du53D3JD9T1iEEhjJ3iK9SjkYYTESMh82AfcLLb96mXL",
  "key39": "4MpVk2YoysfyKjuvxTZMtnhbyc1HzAqY1HPHDeuGsGSGNEoE76VznTudmynhuiRtHp4jCH1n1bFURpp3Bcd2wjdr",
  "key40": "2knynMnapdnTK6DuxSmiowLyeYR3paNCTvBCsLaKpfXeCPyvUFvPawk6A3MfXZYFSfjW4zBKppBfCmcXiX3Nn63z"
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
