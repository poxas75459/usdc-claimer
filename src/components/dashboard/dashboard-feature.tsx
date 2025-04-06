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
    "3AiCRh1DwvE7ApkqaPCKMQBcYp8VvMNwAsvDQK37BGm2gZueg9LiaRLu53yK7pmweeKQGr7vdfFEURJSua4vWH4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hqst3BwhWzuwznyLnDvXxR4PtaHiUKW7NMJPRKewyVpXgmj4qarnkKvy3T6vgq7tgcsYwAc5UqME6tRfS7Aii27",
  "key1": "5Dugi1fiff3JaXvc3XYyXvGyAwtZGx99APAYMY7JkhiyYPjVHwrq4gVkhFvsGXsmBMf41JnGPLjGdothSg1mTF83",
  "key2": "5pcNkgY4GL4bXKHtF7KxZ5LxZdcTdaqD7mRMMxe4Qnxxq3zWSNxqtkjXNymFr9kBmN5K4fidxgVSTaFhrgPzAdPc",
  "key3": "5hgYstxi5cVqpQXb789C1ErpGPnJyz7JViwphaSmVeUQFEuZ6LMzmz5QAepFiL3963fmsJ7XYT62HmSVmfdypP4x",
  "key4": "4L5SYch5v6giHijcAhdTHTzdMV6oix8VJPUg97G8NMmc3yECFd9Vi9oBzT6UUZt8ASuVEkfTZEd9oiJMwu2e1KVU",
  "key5": "5edTUVu41JPqxza24jSPDdqedueTBvHGCptLvmpU8VRxJgjG3KMQtAeuaX6s8BqXJWcntXRdHFDg8X1n1ATBPgUp",
  "key6": "2c3gSjQeyPirxZnC1ZKEY5eExRZhhG4kYf4FLBw1KkNJcmAZn5rdiANCZVUo2BQY4Z9kEwm92upo3BngsAg95kUH",
  "key7": "2qehcR3MkoLhE5tNNzGzU59SBY1G4KZMFc7qfMgT5tuMWYoxLczZbAiSt7WPp5Q5WChXKroJnrVteZL9Q4BGnC6h",
  "key8": "3UXRXXFYuN5WyFLDJEQ4CMAHVsV3b4feDKmFVb9SiDTM2HbHSwJPf4CYoy1WMFtzva5CgDT5Kk1nEDDBHnQmvkQb",
  "key9": "57bujtWgx9PbCBZQkci76bHDcc9auHCb6V6uAupTC6CshAAoh5z9s7fRbY1PuvFTdBChGocFj3Skrs82Q63CLWT6",
  "key10": "2Q1auyckPNdofGRLtCyj33fY6vU8VPecyUpHpwn8zKEYekwH5vWSpNfHVJ2gxvqiWj7rsVWSU83mv1ngKoFTLRP6",
  "key11": "619o3ER3UZpMDCbsNM3femsUwH7huMXq2ipXEXSfhLHotRBkduzx9bUTArUjsWNXwMAKoBo5UZRf3g5HmUWHXh8s",
  "key12": "3RsBYijRbbHGes3RpezJAUPuRs1qgVcmBsCJVEyTBq5Z5hg7bBZ8zDg7gk5eEQQhRksVBzLJwfuor6ho4AewsNBm",
  "key13": "5q3dzfd3dNAQpCqRRKk9Np2p9gZKUx2huy8hQV51Eq2DqSrXwAL8sNMT18wgeP7sVPg3pgdrfiWgV7Aa2H2KmZjJ",
  "key14": "5C5fKGNNbRaHVhwGNn1NT4grFxeuGvgenpSRDFB5cRv9K4FNvtehHWh5rZ696Cuz6HMbxRwWbbL1ysWBGn3wigTR",
  "key15": "2BmFsqTMvcjUgvQmDc3QwbHeZ8sqoCWrvtspenWeos4FGvz9U9pKyV7xp9QPhNmkkHdjJdMvzSRLP35UvvbDZ7YF",
  "key16": "meQfwHLXZCDxFdEqrEQhEvuJBqZPVUBp76XrrYaSpE1ancfBv5XFc6ECRJdnjHzryXx2KKJW8VU8Hv9caAZzWJU",
  "key17": "jFF5yFKbS5He1NrPBMz68mXc8y9kw98SNZrjY2DaZXAoA61VBhgG1PF7aScWxSGEjquezAn4WtecDZ33foroDFa",
  "key18": "VhLQ1yh6kLAJf8M3btbFhtr1tdFBAn6VUKZfZZRZN2D4973oyCzqaiajTspjVAQbZhnRDtLEnbHSD5LFzgB3LzP",
  "key19": "3LVHFB6CwnwgdrPao7fNeVL9J9hzp4JsnZZUwSzv8uZAMFMetLCrFtuBXhK1dE4fNP49jA7qA9asmKHiBBPALJRD",
  "key20": "iDZFyUGzZ1X42rPT9yDQ5meoAJXYoHtM5yD4kBjJPWsADirMKmzzAg6aJkKCwB3Foaw7An95MfuHaHFPFvSr3aY",
  "key21": "2Ea4w7ZgCUs5jdAK9xNNKp8puyvx3mjCKTLMcdDQWF5qHgXnQ4tpq8wpwepa7jCWDyjD1tNyWsEzBf4z2et9wdpb",
  "key22": "3Ka9d7Tmu5ZDD7CoUM1sStBzaRVb4mLKV3HBGeRN6HC49xrpT43D2aiAew2Er7Ekmtu4VqaMvMRiC1qhBBHjcihr",
  "key23": "2e5QAnFiv6MHDxcedE6Zx8hjPbTUVeZ9fza14QJYWybFff1Sn3iSDvvRWabNznPk5BtH8gMGqiVdEUxZommgNcuy",
  "key24": "5dtAGRZBEP9mFny25mZ2jLmGicnwNpGxBYUHSzEVfutkShuyG5urvG6ZfpX7Qzg56ffjC7bzmF4sLvQHMpNetyfR",
  "key25": "67q3hEGCQS4FCgpjLZtPgkAX5zN3APrtMRuFnbr55UPPPaGJKXH7qmebWfsmL1H6G283cMtzbNmWovzivspwniZu",
  "key26": "ttJUsAFsfERPa9SZUvBCo1F35xLLkuEG27sf9wAVTVkWjociArUqyEq44Y8RwDFxQWssh6FoD3CeR8cPTBNfGNM",
  "key27": "5wpoYCprH5YEXpgihYrs1bZNQ5XqJUhr1fccrWD7hpsb1EagG2Wi49f62dfFown3R3UShzVS6LVrrv3znWk3WHxo",
  "key28": "4AcW1y4RGb9J3Ka48dDQtQBAAZM5ywUaMEGe1W3DJS3pmumTLkDbYBJanPCcEkVpMQy7ZRL9WfgzWC4ekTU33DoD",
  "key29": "47fX9g5VxBcUuhwkfTJwsZAzGLFwvWvMRj4S2teDom4zi9JzymDS5SCuSCLPRVsQBWYtt8Z4aXGDNV8fQTcm19Yp",
  "key30": "4taMzUmEyaGDZpW2yyqqC3vHyL9DyvH3RJQmCu2hAGWLzKbvbg2npz1s1uQ1fXp4u6hRCQuJQyBmKHeuQREJbfZc",
  "key31": "4mZfKGJ6T5TrZA9C5aTEY3ZHNfZr8sM4CTybJwZDXEgh4ahswtmX3wsBALPZaH9a7RQyQ47XVBFXeRHuEBPzdoR3",
  "key32": "2iUtdGzCcrMsVUq39fcCnEpa9wyfethRTFvuAptspQoA95AqNBHw8KqGJtQzdoH4P6LSZH1MVcRciAqWnVvpGvSW",
  "key33": "23S4NWuq45cv2bd2ZHEXFEZwkyPAofaCwdKz53VZ61f8j7WduZzkoXgpyZkJjczCzcyFdi23XoY1tQEDuqvPB9dj",
  "key34": "3KbfMr5bK4LcqFhtDbA3owBN9SEznkmDLbjWVEPqk8xjSRJBoqoxDm5b1Mtrv6VaNWCSFNRNGu7viZiwpHEDxKw3",
  "key35": "46HD9M39DfeuYwHnyzkCwseyenXqTNWZLnYY76Z43HHW7j5xVHjAzJvwif4AGaq8xBgdxGiuq4kxXhHYLcMUeKUF",
  "key36": "2rJk74mUEXMxnqZVpoNbuxRxFbc5jdkN1j5ErgUaEK3JDDDBgT3fAYprsSvU8J6GFJPFGcad2Yk8wWdXsUTvExg5",
  "key37": "5LppwSoN2DHacNxjwVM5gyemD5QAD81fjLWPDeuWsW2zCu4Z2SUMnhbto7m72RBt83ZRY8sQ7A3rac1354D8LMyi",
  "key38": "zD9k82LyMsQP9Z8KyTGbTaVH3YeAEagg4M3JJUF6EyySMqTGRqVXYoQq29G9BdQAeTadn2GJqxQJMJTktMWQNBT"
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
