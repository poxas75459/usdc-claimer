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
    "2Qf8wtNCTqFJ3FQqn3infD86C6askCBPVGVnWPudHLugbanXTVucuFkgT4X6mTfgajnbwJDPiR2fNkcjRxki9cpv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27cfWMyEcys2Zq5r2n8RrENkWaGwbAL7SXuoVipgpY9EoDiPHHiUCg7zHy7n78jn2Mt9fEh1mAU3caKdk5GrDqph",
  "key1": "3QimM2rUwabSSELqZ84CY2yFBtJXDLjAaWYdGgW38UVaL2yN5hoye7hG7Y7B9xY1FSMfQbJQ4fbVRQfid9enawyR",
  "key2": "3QofcSLiiEwzHhqgqsPya3362ErSyajpsLAk1KZcYsNuPPkCTdhUfBEBrdt5Ebtib5tfay3azUHwat1dZyBgqLzK",
  "key3": "4AMgitm4GmNPweMWoAGtbXixzR2jwP7fQQcshBMU3EBDYBnTAqpB3zg6QG7KDqjAVo2AUDEASmeLiaPgjsp8x6yg",
  "key4": "3bnGWovFK4g5XF4fmUM7KJsPHsKbwPGmEGATdjirjphGxxrw1uxVigxvG1pkRYuChTG9PD35njSuZYUy5vD3soHC",
  "key5": "2uLLjac7ALPb1NSpZ9v54vWXL4AjwnXqbHhQqXB9Cm7nGTSJhGa6guCBVt1gf9WhDKKEaWfp22GQmiTjbk4V8eK1",
  "key6": "46aN1ksTfWWSUEAitNRjrHi23tZF7VYboersQwNLLFfhxhJcTwy4BqiJRmCnVb9E5gKHHwsQcbHJyTasSHARhrEq",
  "key7": "3mr4y1gAyzn7K9oQp7kXrWWErMYghgZGvuRbE94sE7aFRDpy9NX5tJx4UKjV4HfGb4Sb36FHChbm8XaDd89eZDHH",
  "key8": "5qfxwAKbtiZdSEGYxdrbwvSs3myHBdsoZqATkdp4Ri5LNFJ2uzqDE2dZ9npGQHZeRu1mjTTDBFwfRzfBdM8wgBFG",
  "key9": "2aQaFc8PpUG2JFFXALLTfS2icmGryjmq7sTELryyJaZ2TRKWxE1pwaUDgBVwp5C1SnEaHh5hXFLDmxRnt1xVRETB",
  "key10": "5NReZ7ce2a5HhFyHMqqgwUMTMf3Zpi8RCr5qo8LVY3JbfsRsasRSB1otoLHj3PpVoVjdzMv1qpfP1gybcMakCJDX",
  "key11": "48bdtXjDoTi7zs2EurgLvzgip63fNfK4sQGeEwPo2J2ubGdwsPtHigmAmUrwoL6LEt91g4NZ6hkkJTAV3mjqV7HH",
  "key12": "2zaGMKFudkFPWjE6GD8VX3tDvXYt4RKa2VW3cMcQGj1243xpDZ7tFs9ZZXXrbDkRY6NhTjSHGvYyeR4MMRbk6Xkm",
  "key13": "5itcVnVTxLKe2pRxtW7czWYJunv6EZPVW2icJLLdzsJpninfrjnWBuFoMQefz4SwzaNCcgAptFoYqpiAQt9dRrZR",
  "key14": "4Pw36AmKNuJ2muiygBRu3oTMF89dqSc5TKrMJSzUrw4gpUT1wogivcVY2ueYDedRybaGm5UdFSJUDx3dRqr4Bft6",
  "key15": "2ip3WtXp38HcdgpiwHirXt97idxy28GEPa2pYoy7Q5DmdVUWRBWCmmk5S8qiHRthMxSkftMqQuCiywTZvACzemKH",
  "key16": "4aapuQb92m5EQh2AwcWQJrbZUW3QC8pMMU7jWdcWvGmYt1onRKFpzLFeysVp96T54xzgfdfFS4SwcE4TTjYoBT8T",
  "key17": "3LY1c35Bkt8b16xvsmoJ72fTJ4DfyzWTFDQ48oC2uJApw6sBTerKweJnrfckJq6UWf5C2fGLK4DeXhA1uQTU8ZrK",
  "key18": "5E4hMTq4GU5kb8VuwvYRWjte4yHmsx7ZV5EpPuiuzaqs2gZkzuBzy4bpmjQNegNnmotj3osZHK7cW73byr77ERDz",
  "key19": "5qKsd1agGMm8q82Tp3cMmQt1EnYo4o5h6KF6yMpuJZjFnm9SHBiUyJPBEMA3WzRUu3a9JYhCh5GykwAXR9tNvB47",
  "key20": "4VRE642Sw6KSnHs4GzXCwRzM99y5pMPJHP7ySRqJcpD2TQVw5aCJwCmvcWShYDdVinkz7RyJf3CR31DnXgxdZgnd",
  "key21": "365PCM9Di5rHc2PKAZcesjzebYKWhe3DATTJq3BVcVvA2zMHTcjLWNQT8c65PgNhhphHBwhQHLdeDcdgXDYArYPe",
  "key22": "3s7BqD4c9qdTx14jHVBvWFaz5EDAAGdcpzewztEHq6HhbaNwsZntwgzoAXRPdFscKxKjobUQKezhjZqwkri1dQVc",
  "key23": "2URk9hh58bMsftchndEgY5VkVamxh5vuPcRsVLPcRzosjyMszZbwnVZS5pMUAocXPwV23JEnqeExjEguJ4jDh8M4",
  "key24": "DntpgaWkwM3aTkveZVECSxmkyjUyPFBdKLhqgnx8p6KwZs6u6tigkrBgdxYQbLZP89Xv3Db2EGRx3CQn9DbThQp",
  "key25": "57SkW2V42kTCeqnzXGckMwnX9ctAj5SMa7LiaBN1CwgKrp5nA8dL1e5Yhdrr8onxj62KzXXfhYjVY7JGZtrLnogv",
  "key26": "3AGwCiv2b8ZcZepXATx2ocEivK6SrZWs68wpQPTdJGdRfDu7dnZ1MrAbXNw8jxuDXKJwix2F1jKEqh1YvAvVWda2",
  "key27": "5ZjUmUEvaincLZCYMXg7z7N126dGBu1ns2vumPHEz3ZN7gcnf1466pzJESpogZuywVJQU95rCfLnANTKDsFR5dhq",
  "key28": "5NmUbE4m4Vxo5BGDrnjH9crvrPS6vgiDtPvMhmjdGV7grsfs2GsAKrUXcjiXWUu8HqwYo6sRMioyiUErM1Jw4PR4",
  "key29": "5NzRAbAG3i6DyNdSdx2trvEjHWbWGaPmNFthwmGmATGL2CgV4cxKfQj3BiXXhUBy12Ng3nnvn94ng8e1hpw4CCK",
  "key30": "4qnZK2JtV3Be3rM3VKh8v8ykdoEW1Brdyr2KCcy2AHx88fsrCdyKad8BGcgDeLbSsM1pucAaXQVECEipap3X8XBt",
  "key31": "4ZG3hh43d1Wppk2fMFBZZpDgi5ET3Q2o8KEm5Fakws611GADFXzPYH4qxb9bHFYYX3anoYjXKw8t2Dd69yoEoDfU",
  "key32": "8PLeW57vwFU9kAaAvarRVdNNBy3kWjpR8e59ipAnUpSeowAsLD5gzyfkEFDWot4GvV7FaZxJJA8mpVoDVtAp6Zm",
  "key33": "2suYsFQr81WjWharM2cbA7RJRPqpsHLeAVxMgNdZNKM9PBaUGxLsX7neLFzXMvNBbjFv9zJgEVY5Bd9N6xTq4QBQ",
  "key34": "26UWiGFhMoBfrN9H9h9YNugNys538Fd3JzaKtccGdM2saexCteEmTUPkxQQonUSuqiG8Atg1pu1Ke4i6F9PfQfFz",
  "key35": "27gjN69abaSoo22cWM3ioYS3ULLu4dBPeXcvS9xdCV7q9Ej7o7CDWpfk1H2Ry6TH78f9ct5uuKooWUD7iFkTjpQb",
  "key36": "37Jcuv1SMbCCstbZpshs5rPyMMnPzx5DyebtD8DCNM8R7gqcoRzNRZ5X9w2GxwatMAmGDRaPk7mjvmQPVxhCf7ci",
  "key37": "2xNzBn3nL1g3rTAR6irmE3NVWuWCikAME4CpNmxmvhSTJj7XCZVh6NMqjiEV4JLmQXvvg89LbhxVF12yaRhbGoR6"
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
