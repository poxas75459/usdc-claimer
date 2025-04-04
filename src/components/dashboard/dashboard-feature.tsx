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
    "328kB8jwiY34ta1pDjgSCKb3xRoFC4QtgCmu7tSageAMCELt67PL5TGhBHRFEfb7SDPsAhwXtTDL3qHXhEWtW93k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kJGqd8Ckj77bKTz3pVmWukun1GQdccoHqu9UTCqptenXJWSNeAHuaQcDW8536NovWCjeEjigjCzpVQjVSLJyEmi",
  "key1": "34WHYABac7USgQno5hX5mSLq4PQMuZP94vgbpQmcoiftCPujpMpZS6PMbzD2iSy3A34Sx7amLHAucJBLjf8KTWoj",
  "key2": "4ZUDPwPJnHxnaWZ6rbFyREjGiwpPPo7X3aWSPtKbyS16bwdktfqfnRRcCUcedgL1y5AgtGGNCwsXeJbSBvSqJv3B",
  "key3": "2QFq5uQhhXoaXjG1vBKdsbVBS73rveL2naVgK8qCpSKJ4iR9sb4FkVg4Nw5HDmujaAK5WWinAQiMy7YE3Uystfbs",
  "key4": "4THb6H7tSAzLVyHVkG782wvz2u77C7bNrNZhX5cBoRaVcjBVxB31iPrXNeKVE65fkK7W7vtPvnkghSQUiio8MbNm",
  "key5": "Ex4qsFhpoLAUEUJD9BcfTkicXwbcZAqsqZpMXWAeWCNs41yGxkL4CSbA3ZE3jQPWXbubkuYB72KW8CgpSrVorVN",
  "key6": "SFDT2jRuD4YQ5SzvMWrvSJMHCX46zD5HhRmnNFtiTg5vnTRuoRdaXV7ZDv3atW5EQgePMsGRWnSa2Dkf7jPuooG",
  "key7": "3mSSBobw5VtRE9UbZyrqDawU6aGsPmsDbXE3v9Bg9sDhjXG8uHSEYdh78YJTZxgHZ85Tr7YnMtQ2NtyQgMfLkurM",
  "key8": "2P541zM3rUf6TsZ7q6EggBSWxRBNWkkqTbZMRL8QQGinLjDNYFSWc5vQDK4BYBTXhuZrJ4YPbn4421L71CwxXibc",
  "key9": "4GKV2GhDAfTG36ps1t5mMv4A7HiHNaKrJaKvnSQny5Ue1AfgP2jpPHNnn6zEaAmKHbvAixG8D9DSMkr8kxfVtb7W",
  "key10": "3koEEFeZVihNxjK6PoKwo3gZeikyUdgyY8x52CSJfpKZEmbqmoBTtSHgGiVZEbaACQpoBnUKDQAvt5EiejW1XXZZ",
  "key11": "3yVwbc8Fznz4f7EuAgMVKonTqveYjc8XyepjqBSHYasSoCPC1kZNYcyut3oejEpFfJtD9B9Tz4akaHw8nMmk9JFZ",
  "key12": "4fzvud5VpRFwzFwz8LAYskzHHj82xyoAF7C9JbH6qi9KMsfKLy7rfvZxxgww9mti2En5AWwopGPHRaEhjHCwCzfn",
  "key13": "52QGS3T1tuSUkBcEqQj2ciSfjEDnvmBNinEsMZ2jXxQUfiGRF77VXS3wA7Cbn2GcCik6iicbdvHAKxUVoxAy9fd",
  "key14": "rFy9m6rm7dLZACCBUVb72ok1Yrxap2X5me4HrrN9rnwLGeoVx7JJcRxzhfkG8vMjd9g2t4tqBWUh7KwzZecUyAE",
  "key15": "L2mkEWGoqiHLQtpJvVh94hkGwqu9ifQSSfPyQY6XDnZamAvg2F2UW9t5vtTsbKGcr7e2owX3ywU95okU9CxCsiq",
  "key16": "32e3NkzBvHUQowBcFCAJT4hr1NXam4wupoDyZ45KCsz286fiXcH1iaYkrF1M1dpHZKBCetuKtYiEa83bme1gcMHU",
  "key17": "4GR6qssDjudCP9ZrFZtaqGMLFUbQiVipb5Z4wJbE6JuBvZUiLrJh9JmvdNaDnP82ApTQP1qsAhNSbAZADqZKauVD",
  "key18": "2P4Kzyabn6o3ZCpovwccxmaZ1RxqdLJK27EdXbCXnG4EmCayJ47Ey6xmbouA5be5J7tAfQFtvEohLLUF9pwYvHY7",
  "key19": "3u5NDsyXZBeVVHgGzv4Bt7XzZEHaog1gWa6ruGRQJd9PDJSDAkRHwf7gAFvTB4oPpR6yHKv9hN7JWsawfA3xXdtw",
  "key20": "3uUgxpZpwLvZ65cHpGb8ViGvymZ9pWanGKTNihwhGTmLCXmvP3cBZ1mfKXxAkqE6HPaBn7co957f8RwuVf827q5J",
  "key21": "4zfDJmTPBKqqo3gbZninxQp1QBqxwBte1xbx4m2JDjEppPvJR2yfKBBg9o7xStBycEZhkwUn665epSy99EP3Mg6",
  "key22": "3g4MSuNXYVxQoBmUTxdZMWj2n6zSQC57xcuydhcztoAwDHp178dVADZyAxAkQLg4EpCnyjMb5aNdjRdwmDhuLPmh",
  "key23": "4MC3NbJCqwvb4DiaF7cFcqpSJ4idnJQuV7uoa3GXyazyngcBSBFdx7kxR4EwM2X2RTwKF6JcH3DcMGxGDiNW8Hs4",
  "key24": "43s5eWwq1coSqyTMNNfUn5orHZ7rHPgBUWZue8KeeEtVqF2yCeNksLa6jzGs3WY5diXn4MDH5d9vEA4fQrounEDP",
  "key25": "4kVDCkM1oWx4Rs6NtC2LfnbCBJyxTBEybKwyKZGUcHFZ3sxSN4PVAdPt9NVZ6WzqLfp5moSv5N66TJug1syERRdr",
  "key26": "3EtN8vk9rvrzvBGjcnq5UCAS3CCbuzGZ2y45e6RsvzzAUCSPNHG9SwVvB6K2sxcS2hciXXzPpGpQcW98fkqAuaQi",
  "key27": "5enrCthpEa4J5fqTjv8k1VrRSUvS471SJtn5vP5qLGrTKH67PSBEfiQfXxWEnRsoiVLuo56GPiEmjsq8Lo2NeF1h",
  "key28": "2hKEnMTWfyAjbcAHxzuX65Mb8zfmNw2ubgW6KUoeUaJxghCjynQxH1Ni7jV3e2uALpSfUPxU9DxV2AmYKFc9sLNe",
  "key29": "SqAKWbVRSahEnX7Jp7t3Ygbqh4N2SXCPESq725jVJE4YTGeK9dw1k51xxi4oamwkZibCEcmnkgYLjon8VxHoYJW",
  "key30": "2gxPBKeRdgNUanikMBUwLKAnynVp4iaefX4rjKcbh3pmC8qgNVqduq62rYXZDzVZ1v9hXMFzxDAHXPtMsm6oZJsF",
  "key31": "eAmfQ49z3eBk5ZBsWzDTHiHT2T3WyQW88hSNMhEmHvq8z5UDGuwAkJfJCJsKjWyAxJMWCFysEogqAA3DWDcDnUX",
  "key32": "2QPAC6Lv3CG56HrXjmMuxaBj1b2wsy2XLC1GFddH7aiC4i3rxGvMkEr5mHTkszHSnubyvPdjbsnLt5tzDGaFGCaH",
  "key33": "2xFQ3nA73dHAsky7eNEswMDEbgxHQjKvcYKM9wh5G3XWVidu59jTg1qX4TMtbZzwHvazVmSyfXwNebLpLBkyqTBg",
  "key34": "58W1H4DEU1b1F6vLym96NB8XHHYN2kQWtRkhSATaGifuAFbftStM8uDZug1roxnyU594MVZLmbRcspJeLPe7od2i",
  "key35": "44CPWjvu4TKufm9xTUxG3ibzX7LVvJd9o7xv74SSiiynJwFMWFoeDXQRrcvHPtp29AMoJgU2KN14mgGum87Pq1Xk",
  "key36": "yMJkWkWm7BWP5L653m3kGwYLHeUgPp5rfG4CoHaFi2TtRs4wyzpq9cuKVwdPh7gkESh8g1Wi5XAY2D9VNJc2ndG",
  "key37": "tcAq3YVvRrxjm8agzyMhRBMuEjwmoPuDget2DgqVpav2qmSuGoivRgaByC8fL8AcMf4wNbkqBJ7tQDEevffwXgH",
  "key38": "45HHHoc3YKqPaRLeY7VYrS4NLW4QmCsYANXQg9656Xygkvb2A3XWX8mwFP4rP1HxLHkvmqoarDSHNpsgQVNucXN6",
  "key39": "4qd1ouZCpW3xjoRugpMC42gBGgnwyLqyVehAmMkuMFwwaXX8t7hkR945A3i6XHxkiLXzS9kVNkDLW3aJbwPcK4zg",
  "key40": "K4RLLSviwkJHuSUx1kVQ9sBE12hiE5wLExB66FyPWjVt14LLgr2zj5EpJtnek7kAuAv6MpEox2ffAbCLeu7p3TM"
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
