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
    "3edmVpZkdyVUW7tLehjRpFjfpXTceEx3GGuTWumDUjJYwFc1ncwCi9m8vZLFjv3aVJxefJLi4Wt6CU1g4Nzy28YM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4veLptj2V1meDArf7GoL7ozT4ARUhBoiKjZYQQo61e7G5KK21AULB6JFQWUpfYozBw2Fkr5zsanVPzLsCgVUdJhw",
  "key1": "67rT6vcybqUreTcUWX8Z4nK35DNxk5pF7S3GaV6BYxMi4MLzSwycmLrarcgRTRiNYY4MD9YzEMUT8A7ZdQiMJ8M",
  "key2": "GCYbACqJHsve6N5dzzprR6ZBHVvmHGqfsfGMCMjM8jwGAuM5EdnPCMH25o9JGHYpysYGSLUa7VyeKQdDdmNgJgx",
  "key3": "4JpW7eNGCUUDwa4JRUyDQ1d1c36MfzcVjzyTnvfQ7j8sQuwySCpqcQDtu1KceMmyDUoDzJY6MFdyNUnzzrumBghG",
  "key4": "5dSAGFmVqiJUBaUryNKj9StVr91ArcHp44ttHBPGuVAJdMGmMpxKswLzdnS8REXK7s9qzmgun1jzdZY77YATcUUe",
  "key5": "W1VHcvzGHTbsW44feRFLYmLz3K3DTm2qHmdpkXZ2PXZbfVBGu2dW9H3ZYBSTF99YXd7YuFusCDjcQYracRXK4vg",
  "key6": "28jvLaGyAFob7pRVTcpwH9uCAUExz2QGPKNCn59e4djovzm3YHxKKdDtqFpG1kiuTY9tKAwd4WALmN5ibWgPRadG",
  "key7": "5X8oLdERVvjqafXweeGVcdXoC4im1S2A5jqKZD7ZrVApeRa1QbgkPRdawPDoAdFneweJF35MY1wNVrrmvdcSdkLY",
  "key8": "5n3NBXBECdR56g8KYN8S61rqw8HSDjwhmL5bFGTnVEWsV6FfcDVz6dBP9Nuftd4ieGKQdUPJD79suvbYWCDt1iwf",
  "key9": "63kL6CSSJZkB2chUgRKP2Cw8MGfwhBStJAMz9dZrBSSWYkxxXpWSCZtt1DdDXoZBg8u1snKfUp9CAQbkTbjCQbLB",
  "key10": "3pi5KCUzBqcKCxFjdNzCXTppwiNjioAVrUkkV2CUr2JhssnsgUpidAdiYHdfjV8VnWnvCquoH4A7eRvovk1qxHJ1",
  "key11": "2rAaM8ycnJ7FTK429dZ5Ajc3RRbLBHtauQhrLCFnEYLWUVAnJqUXU4NUBVm1efjjTvzfJu2JNbb3dyriZDypdCkQ",
  "key12": "5KqRwTWhUbVv3mvLFG4tNLE8AKT7FwUMYQnoVNLy2saBYyvUERoBiBbBYx5KepVnMRJqihhpucRY7B3WUqHAkSGD",
  "key13": "xi8kQx9Wauv2jjitmGiSGLsFGVnTtuFQUpm1mcovYkab4cRePsCDfbeJw6sfFU3c7BE4qswCoMwJmZPayVK7WZ5",
  "key14": "37CS7kBVnktjsrRvakMseegR8EXdNmpmtxJcFVqJgx98pkWxkPHV3cnA15foeJG2UUGSberC7dA2zjg7pgeCC1Ey",
  "key15": "5itfYo7ouvtWiLmyWCyrcd1DR48U6qSG1nYWdG5suFx2dwRryfquNatnc7YsotSU4CmpuaL7sNAVeQvFZnPbnhXo",
  "key16": "YiupnjNkCPyvKPY5cDkLxGbUxAZ36rAkdkronmW8U81GA9hArmmEdn69xBAFYv8MgDPkJeGz5ST59u5jmAAcgjj",
  "key17": "3N91onLNC21F1PNQ5GgwcfjHNqs72L5Vu5RPb19i5PVqY1jy7cPvRejsjQmp845LfXEXgBTWmUbY6ivAKe4PcheG",
  "key18": "3kw9j9RGHiciRsRvs7TbxzjaCLKfmS1tdws4goq2HdCgCnv5Awdvna5yNnkJ2dEevUwX9gWzzPLwMM9bkpf9fQT5",
  "key19": "4ujX4QV4SU7iDG4Vb68x9787z52nDovhWQ9M2Bstjt4hRLwh87veqPusdHRnbuZNZaYgcPrj95VEBBUMKNvoWrFc",
  "key20": "4ERmwN65UZT5hGHGrDbJdxRyTFvoCequhmDDVXTZoqjUTmK2zRbyKezc3vB3dvM6GqtJ3bJ6QuGAtxRaubWQg8qL",
  "key21": "2VUe6FfqbYq4yfv4YiPZDA7uNRu8jENGCAXvNdhoBqjTVYLWKFeR7prdymvcAoRAnZCgdyL9bqDRBT7At31fPEHw",
  "key22": "3yEredT5XNt1wTvzvRNGrcs3xwBTnC2DFbdaH24dnaSVp3mhzRWdHugj6PnCzBJ1UdgVf6eBbMPLgBhmB8M4r5EW",
  "key23": "n7mJp3Yoy6EQuLhdYNp4N5pBs51RSoTQZFNLpi6KZuLEyxhzzrXUbAnKwE35PM6SjMJus8pJSm5bid8kVNLQYtY",
  "key24": "41vsio5LjYs2V8jPWBVSeSwsW8QXK19rcGiuZZkofFNCkXV2yFWyBFgySkfZbEu15JKqZ7e7AbTc2U3JQv6jHGd",
  "key25": "4p3UL2c2eKH1j3rRJLbnQNzjn9qnmjes4ADUi7477FBsub1eGbK5qX4M2HKpEuYQFRhw2rVY6KfRrPUhG73JxcDM",
  "key26": "RNqxyqMXiELn7ratZ83VwAD2qdVtJR19czv66fTjXUCfbeEdHkPDRnEPrr8wz2raFhtX3tx565juyyu9Kob7RKo",
  "key27": "5rPadLiH7PvBXHHcAcrH3qkrMszcHa1r8k15yocCEWwyWB6t2h6EGka9ohJBKPz3hsceydmxNa96MhhbadmUUmD",
  "key28": "3mbTy51sg8ANrtJUSPAxwVoNrL1GWcpgdf5J9o8wK21f9Bb3hZFZ61uCATq7umavL79Np6zDnX7jkRZtwkawHRAo"
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
