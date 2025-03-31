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
    "2J14AHgbZFXvHnX43arCTyvimkESryxkyR37ycjRMYAVttdt6EZXyqWFNqf58xYjXxsPM7RNjqQza6WAmmPTSRe7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i2ArPBE6D8NMRE7UqyAaCwdeohMFbXD2iRidWXe5RX2hdoREWfg7pog8yeQiVpGtpoh23SpsYymczNASHDjX2dw",
  "key1": "2kp4WUWcN4NPzJVBkq1Yw9eukBNVZ2xNpF25XFYhXk8od6pt1ArrjRn3rKcwqtYPtSQVM6G4ggyB9Cjmih2XpPGH",
  "key2": "3bsFzM56gPLvGUvQLU2xushefGaT5nXVuSGnoVex1RYN4zedtWWtVEipEGn4QNURTPvxtC8rxHMGeCXCwA8dByG5",
  "key3": "5BNq6DfrqdTn3jxKCYk3pbWfDhhFs8sFC6xG43NUPYEEAMJMX3fCgTSaCWqQ98dUTkJxpeogFcgvtCi1T2oUNNzZ",
  "key4": "U47CydiJVAUw7fux3o3xY3mg2KNLNVj1Uz4Qbkyz8mvhpJMdX9xUunNFzaRxxQxsTW9M8TT5wb5HUQZTWV38hwW",
  "key5": "67SiL8Vw5hyj7xtkLWywDwZow5fNZjg8yjcVAve25jrjpgj7EwVZbXQfjtf1wvVGDkRR44fBKsymp9c9KeyLiEH3",
  "key6": "WbAEfBpDnYdm7gNiMfoaxauB29Y2pvjLTFmMzpD2sNUPoWm9T5KUP4d6QMd3C4AaK3bt4ER62mp55r7bZcCp9Ei",
  "key7": "5MFsDXyoBhh6n63hm3MCvKFaMGrvrUFQMfZ2pNxyUs8vpyWiBxnAmSQhooe7EBAcwbJzvcY7ytqHoumoAYkJhY21",
  "key8": "3Cuy2s3YMiirRpf1oH8PdtTCUMUKVNGM5eeHrpr9PbMtsviJH7AmYNZ6Bbf6uYtNJFZfrhQT6oLyx6UckRx9Qd1Z",
  "key9": "4GGjWnVoWfpRR6VTZcqUdFftdKdofNhmCCtgMmTniy6Xu6e3cmbG3EKf7CQCCahhtzmUaaLjtDyRQ8qRPfVWBEAo",
  "key10": "2azxzZE34nYHgoHyedL3pqDW2JFQGqKPR5VThLWkWFZuHpwm6uheDq2KTyHUnKZdkMGceVE4Vr4hA8NVgTkPQYJq",
  "key11": "3gDfNmkuF5uyPDHokk5a7XvYvXCnrpKXHXLDkBMk9ThWYJ1hbRnagKPBPsnDYMPCCg7jJnPMap2dybwNyJ4BWwEB",
  "key12": "4LrfzBxRXmRFpTWw4q6PSe6oyMUKMDunr7jmqT11CBEqiJzL6yLnK4751r7672qv8zf1oZ51YjwRcyXZPxzcXeoS",
  "key13": "3Uk83aEnJc7bPFUtKi5nQA2Lx56qsBL5UWEnxUawQYwfhWZKTwE14cRLkccHUVQF3a8LL1whVkGaveV9t2m8RAkP",
  "key14": "2oydzKJbLTjWtHphokaW5au1ge1PENA1cn7GNzMA5AhSNPNKMdQYNWpV27cEfbsbTGJYejkEwHop6K9ZPxUCida2",
  "key15": "2nNVQxFGpA8DjJD9te6B49qu1jV3xAVucPV4qEbXwEq8gb2ReWBAGeTYoWf9UXeBKPoQeseF5S5gNb9rSnyCP3U1",
  "key16": "2tkiWLfPFc3K4DunYSHtjpejbJNiD58EzFwhPsw2L4NkjLRsbTAEQh6mnvUevbvdZuo3tkLCvRpeNFTVaF62d6VT",
  "key17": "5r26xVrnZBeNJQYUzpRH9ANB3YbE5s88ZHEMDw7uB5uyGYc3FBJSzw35LzsFzAKesmCYCdTjd27gnjYSvq2QRTz2",
  "key18": "5MUa1MobEZ6S7CDaqHEmLqxAYFKpM1M988GYU49sWB2UxLKmcvYr58cT9zjj4WqCsXetLqdpmsJ99bLjakUPokPK",
  "key19": "5whkbGdBkpGMNk25pfo7UoGSZy3XWbSLBtnvzCJvGbvzNsigjgrD49k1YppNhaoYNkCQJ3ecNsAGHPaRs2MpzQHL",
  "key20": "5ipbKdaydZbeGaLDrwbz6mB2KBzPNkycY5G2UYDVbFUg96Fn7LRThbKcjErXguBPc6uixeRk6phAVDkMYHipsfus",
  "key21": "5dL5SkKdvux8Vu5nxDXqt9yYTvfphqMcPf4SXQiGs26Jnv31PNimbE5BtiLXtsrH4GurbjkauKj4jnUVTJkdi9nu",
  "key22": "34JN1i2mWpzgaTbkcqs53f6T969rbKr3cEicmX92PaBQ8BciurB8jZRkSpQMKgvwTaVmSbLe1kkUeUJm29XmHiGf",
  "key23": "3hsZc6QofHYSGvVyCkc4Qm7UdcmM33o1iqV8tGrZVpSfXqqBnGDgNYZ7gjWjWqAtYhPNiTXW743A2supDEVowkdL",
  "key24": "hF23sPLVzssqNLjYqJCS26YFiAK86C8vM8x4L6Z5zuMg4kVN5GQANQg1HB5fS66s1Ragu6R1SZ4nnbHt6DZF9cE",
  "key25": "8jEyy1VEEPLKqF1wdbST92CfYvCSqaWWsZvWaPoYhXKyo6uGg5CKGbbADQ53r8gt7gCSiYi4wzorombuEcFq4jL",
  "key26": "5ci2bepR34obF3W9r7pBo9Zja3VJTGz1K2Vh2qrPX94zZUrASSW8pRmH4B7pAstFtxzkpbTPmEbdqy8j9bRw1yFp",
  "key27": "5hiVM2bVPRUUNd9ozU5rC9JvqXPBGnjRoDbZhMUVstF9VDuNLpFM7NU5g6Brd3GyWUk899DL4yDLM7kGk1H89zaM",
  "key28": "2gNTt4pQvTyzJeoyuZk54WDBZzNGi9vdi7wKEzM86wkS9LUzgcFQVvf77MRmN83QHogjrAaGX4eYRr2vaoLhwMeD",
  "key29": "39BvdQAPEyh3PZRPTrjZq3R6srmE5fXdkToTMEHLDm27uWQXMFZRAfPrcDctXn9XyZcKtRE4RBQNNXJhGfT6C32k",
  "key30": "64NVfrwqaquUPQNHc9hSWAvVAiieCueEizcnGebppiSN7nLhe68RwsgnQLEhj5kLxcVAJXmEKEFarV8gqVHP9kL",
  "key31": "3Cm3LMyBGXd9dDYRJ3ffrLLzmhEVTzJEZVy9teq8adNYjrm2EhfE7E3uVxqutuG7CYYmKqzzAqw6jmjiH33wJaBW",
  "key32": "EVjBEkozni2b7nQhGaCsdK4j5p2bHLe5w64qJkmyxp17cwLCSJkoqHBoZXYEWxsUSN9tsEnJfrMBc7meUc5VxMH",
  "key33": "4xz9MnuknKSVitgP1oiyoyyHSu7KRfHKaYfJzMQ1sUMA2sGWwBehgjbaH2uJMg4fM9N1413QMH1irbYZXThBw1V9",
  "key34": "3hWh7Y3qJkbyv5ec8rytbQLs4pbVTbVqnCKobJWmWMFmWR2nRUgWNCw5RWUiRBHyt2VxDrhEqaQ1MpW8SHM3wZyz",
  "key35": "2BrD53N1rnsMpE2pYtVD8Xew7L9E4EftKKbBcZoMRr86LNnkfrKmiuQZRZmnLLJcapBFmNuV5UizzuUDc4rMxJRq",
  "key36": "51rPWN149VHBaUqz37H9nfW41oUWX8138RomCYxa8WU8QaqUzN5srd6gXyjDLJo2e7aSdi7qzrx2wGz3n6TKWHEs",
  "key37": "3Ng6yrFsHZEF9xEtwTFXmgoJVbNncB2t11Rw6fnDLH6oxBtuPLosoBeP4QG684FZwpSkoZ8zjt9jQHM9SQMnp1Sa",
  "key38": "AQjFww7yZZLxmsj2Rcnjfv5o8iteE5X2RD2dz4cc3rcEQ2Fx5ytSqwkRzUdgcWnMPxg8XNkwtUpTEoaftF3wYHM",
  "key39": "54XE9icg1LkBxmytnUjif6cvSUdoJmaLW341BEpS7d3augzw25mAQFQqYxbAP1VwdWZDuoCESbkpuji9FoANnJrp",
  "key40": "BZiVM9u2tWT4Md4LxmUeGBXSHebCnSFnwvndu6xjxKkFoW7LToVSvFxV1RiqEYo4VkTTCbiBEchgYwwXCHy3JL8",
  "key41": "5VP2YjFedtYUezC21eDNDwSfvJwHW5V9v15jSjA7pdnkeonEDZ2R23ZmF8sfzTP5nQ3AARDASiWQNZugeUfR4Y63",
  "key42": "4GUvgZtZd7vwHGnw1pJjoqZRHDcZhUSf4qxtwMUwAapkageDwCDRzCy8LB5udfGJU6ayEtnvA9rb5BA6q6iShkCg",
  "key43": "3G8w1wtEP9XCRg762RH35uS7SFzXBD7EZMK2RoqmhCuvF1CqHDXwwsWpExku89V8SfNpsxWUGKtdDUn7C9JbgD2H",
  "key44": "3DouMezdrWvCP9jvMFjxvkWWrgGVuCmg53cKmfyvd1SF2CnVAic6DjFp8jYnziCCkZk7jyUCfc6XsJeCoNY875ET",
  "key45": "2Eerkh6Jxvc98Dzvy6C6tHfvXDgVgt4SmHoCLbegc4qxhNwXwSqprWpfQ2bvDrvVtEcPoPePWLLHMrnFEtYJhVK5",
  "key46": "pjCyW9h1YpV2yBvFAiRSmRNEikPuVgXmy4Lsn1DeqPHbbuGZmTENfUxBm2kezLAtmAsimkCXT8pNvGPpgnLSbjj"
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
