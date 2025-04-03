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
    "xPhNzcdemsUSWRyYf3DgnhZVjiD1Ynjc9BDEbKcagpc3proawKkWQ8ywqtmqH9FmpMr9Mh9QRxWXy9pNmzmSdN8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LucFJAEUK6FoZz8ENBrk3AYFaeqUvddekVemt9gUf6xGA2wz777RmUw3VvTZCozmRQDnsfMERvQxo4iMR15CZcc",
  "key1": "5VEEoGjubQ9ztjvMStSSnHGFWf98PoH2n2Rit6wuigQw2kvTsSYFsmn8eReJd7vkRsfPyR8bUd65EWBBBXkJ4JjD",
  "key2": "676cwBbrgLHjuaK5YhC5EqnGc7wHEdA6KFRkkGsyuzizmA8znu7NfNs87f2JtiZvVBtHL4tJgiYdEcuzwXGjsNj",
  "key3": "2EmELKZicG4Ruyqb5SfkvKBxs8YPnXogMsRKRvyKYbq3eA4WTe3nYUF4Qko4UPA2ELzdT7rvezQDSB4JZY4LixZy",
  "key4": "4ZXYEZC5TpPdgDYiJWxZtxt2gThRTYkQy3ooieWPHaxmruCZRZMYQoVGdwenafhsauR2i1RbacQLjj5JdvgsVi4u",
  "key5": "5Ru7UkPFDdRJNTCtCrgAobE4ukKZsmcWKvmZAvVxWAoP3eFm9WqU3SFM8nyjqK6WMLERnuBVTmm9wQfqXb3716kT",
  "key6": "EG2WAjiv3xjfWiJSoBkZ6nxCrUmXZXYEp8GqpTHWbWfwSq4MCuoALrGBctCFoCze8BfprBqMsPvnENLYdLnyAiQ",
  "key7": "Wkp5ufJXsksZfNzNF99LzLSazyQsbvwx421zhdppsuZBpLrrDacHfbvranyGc6ZXPKo7VQUsWfmoujmk1KWhTu8",
  "key8": "5XfqHt2cAR5H1RfUP82h1ceh9Quj6GqjadCMyrNEfAysiY6ve3cyyzdhdBc22QmHjuAjTfJg2sNLcvK874TPHkhL",
  "key9": "U5K4Q4TLQtjui2FF4g4YWdLU8uRWh6SPHKjkf6G5m49W4jZfdkCpgdXAteADtVQUnZSf9LD1gfxaQ6ApxErW8Eu",
  "key10": "3QaTHeowv3ZLtcbScBP6BhJWt1MkWp96Ypdj5XVgZ4ttxDSXyRacvzH9N3hmiTGgpQjqsfeMRc4tGwvng7SyUaeW",
  "key11": "4QKEEsfZQsVGuMPxW1TvJAp1JXRqE8xv1AdGERNvf9h5eQfm8DrWvFeXpSimDMt3BjfFGCbT32Uqo4ztUM9STtXy",
  "key12": "4HyD8BWUzGPqurkykZUu6FdU85PtcN8KeZ4hrE9r9GS3T4KkLLfp9tm7vCgQsRGQK5u9v2mwbF6g8ucdr2KcermN",
  "key13": "ucAyDsHdbzKhGowNJkZQaD3gi97XG1UNb7ULyHhqQEc3bCtLQm9bM38NRNRwQ1SBKftBdmJFEk82kk397LF8DY6",
  "key14": "3YGQaQefxBuK2NPv9j43r3Cm5iQitRhcm5x3rE6XkziVEFBig4GmNqfcXFdfATqYfmqHzToiQQYcPv4fhJBTQ5p1",
  "key15": "2odDrWyuGJ8w8JX8KvHwoY7JBJoixUoNp8UTkb5EFHfYLAFupVaGgYs9QX3At3ifnR9Jpv79btoLLKe8rXXZw9FF",
  "key16": "3wiNqzhAoKrGKtSgfgVV6f3nrFMCGH5gSr33w4MXn5wi76rr1B8zq6huq8mYGs3bvVrozMdrG7JYbpc2jjc9a8nB",
  "key17": "2tmULSxGsFnkXMYTo4zrETkparc62QhxhDYWcnzaureDDyJiiUnLN7feESHmp65DKT77sBHM3tMg9VZWyNjnRnWq",
  "key18": "PH7Snv4LjNtZSkUdUM3tbYXBGiwJhD87bceAXGJ7SDMKEUWsuJXHPS5sy89SRHsorjqvkJZednxghsP79UbKU6H",
  "key19": "m25jfd479hypwekXnC32oQwNNj1BHV1pimWAqh9r9kbyNkibWGpxHGqCnJLnRecBGzmiy7VSVz12QyVbZK1rr1A",
  "key20": "hYcxhFV2xtqnHb4yavSaKuqP34mSLwYcwpKXWDw75vNa95ava5V9Dp4BPLYo7riZaewUUNfuyDU1wRuDvwidArA",
  "key21": "35mDf3noUvYfHUrCB7roWE41wi3jya67vZ6MkBLSwUSLtykSbFCoJF46YNN1u9RiHF8Ece1xVLFc7J9XU1JArDF9",
  "key22": "2JSfFBJCLs5z53EM7sNR3JtMUwPj7PGqLVFhrJZTsyC5TLeXFB5t875pSQjxyknEoM4pKwnccxyFdgFz6XpJtKyx",
  "key23": "4fSjR6yxwPUBUevEJmJ8CiQVhNUbC5j5iuY6reBS8Q27MPP8mBsd3JovjhyriKh8168zEzfMtV5b9TbFGApb6Nji",
  "key24": "2uEU37zuPdQ28cZK2onYzcU18F2Bjjn5NqUzYsxEvzpxSCoZRQEcbAXZwYgeXuhA91VKog79rhaJiRsQu1Lyyj8a",
  "key25": "5j2GdF1TxZYjsNa3SXkFqUGkEY82FbityBsqVDqLzmcu8QuQjHjtjuXVdT4nM7iqAb7h9WJBngSTZAsuvcNehPmo",
  "key26": "3EiJKxoSYmogzgRaxQTBPu1r5yLAMLiuKdjKiaop9vQcwzxubN16fLky9TDcnAfHf4BMu9npLp6DWX5NqAXuakEo",
  "key27": "5cHbi1itzFspZqtHarg6EvFULmR265NrVmJLwjQgcbRdkrnqxkdfSaD1ajv7CXrTpmTq8TE9VCTZBiRdr1SngrCk",
  "key28": "5vbZ2rFvBcBZ49VVgABzVyKEzsk2iiv2c78DuvxGrj1YdBHNi7njAkNJVT3ivkpBienA22hMBM5cSxoR3PfPLVJ2",
  "key29": "7NN951uY5TywWSgNcKxCA3xQuWGdSUzjuRag9ds2EA4C55mCbnZGyghCJYNn6UKx6MY4ggj5mhQhqDWb1EYByk6",
  "key30": "44b7QmCo6D2ECtJXMuTH7mfGB9GWEuy4q4YxfspHPpsyivpjTaLYEBKjWbVQweHreHVLjZxZEcMAPvcTYQGGtBTr",
  "key31": "5j4fN59sk3ysqLixvwzevnyBRir1RbV1tkqDpFSZqGMtik1EB2QvhJSGrEABx2hnJuNy1bLAX9Uzq3xBeGmLszxM",
  "key32": "pYSVGxmxBFwPssuRK7B9mwCqiyhs2cGaYdCXzR1jwHFuQJAbMHfVRJaRZhbVT6sLTRzpVeetiLXjs9ZTJ65SoxV",
  "key33": "45SJmJzCncLYcSSFV1pdctWZLcTfFChj2EaM58pzSjQbnMSGBDENcs8QrgCCbdFDuLAiFirLbwEfoQAHHbBczcAF",
  "key34": "31DyYnSbDzFJC5Q3kNLnJVPyTviYUN9Cb9D6o35MizJdeMk4VJLiyBmASSZsQLnUPYjxpu9F7e9A8H5HbLMWSknf",
  "key35": "4zfJEVFbmVGCwLXNkfSwcNnCqQ5abXjZBn5GXfiPAarrS4vUkSB8nM16demivaxF1uRNE8VsnAWvqgPcBUQDu4HG",
  "key36": "ugs9LepZxMpiH6RV36gtunifq2CCtcMC338RHHGQP8tKX7gRFQ5VeBdMpxanB7bMdDq9skNH4njvHwVU1if6pTi",
  "key37": "4Mjf1CsM7wy2nz18xtAR7Mz3boxdaxD9cgDmuhwuMUmmjAYBVmR4cqCrCcjm2aqTUX7F6YNFn52CNUx3fDmpbBLN",
  "key38": "5nThNBqDVpbjxqf68ag1xUb7MbymXMoNN1ah9MySiCBgenJdayo3qirzk5pnxfJkcPyuMM5qt5AYeKMdWqjdcUQ8",
  "key39": "2Du4qhNBiYyGTQgDMz1M1h94c51W2brwh18VLZmb8TpnJqCeHZPVwccMZRGcdhYWxuUD8HEzFNmf2oaFppxxQUzh",
  "key40": "4LYjMfJSJiphrk6p1vSkYRJcWJjdLmRhxmkETp7PSQgcMpSaQyNT2Rv9Czydn6fM1agcfQQ5iG5MjxJ9bC6XP9f1",
  "key41": "e1vugonjFW5ker7RsHUD7ac22MzSyLZJZSKTfthLmsDkJ5U7d688F6uPcPrKzKvBeFeBsMo8hmJt45uiCdJm1C9",
  "key42": "5UVy2VWw4QupUCjBKmeG4CoUrrNtdoMYxDPPNBbJoW8QPNp75AVHa4Sg9scKsxqPHEhwJKfpKNQkbVcfEDaShVMt",
  "key43": "3zBT5mrpjsyTn2SCcss82BzqYqf5YJ2i2MgGjNcUJFwNSzcNiujwGG42X3tBVYir66kpYYnxJ9Kv2EfvafNrrLNc",
  "key44": "25Ffno7rNGRwMuEuG3A9kmqU31X5JoCZhN5MnGR1Lz4sWrUJWqnVtzhtkWG5YJ7fbovfYoJt9e7R9fEXyCE486PJ",
  "key45": "4ZgYPN1iRuXNn9uRPZGFdYXpgiXXbtiHS7eNuMMGWP624cdqfmev2i3WLUtztfriDP1Y7kAz89Jwf7P85YX2Jfa3",
  "key46": "5TYnYGzzc6ocxdBVhusFtevfkWr7JJkd1gYiQ2LsNXjhgSGzQhsqkJBEUJ4bHbhCBzwD9AfTgPfmHT7ozRs1VcW7",
  "key47": "3CWqnVqsyh1q7PV4xiSk8HpoxSTXRctiWfWms6UaHfhG3AuqWporUHJs14dRSitQQxJWNEDbgr2sQxonsZn3uFUu",
  "key48": "9w9qxiVS2RiRbowKosQNF9fzYgamnBjTNMZWT4aVz4g2qwwXRz88VpycJonWqJaFFT5cyjZpaDpMEbsZKaLtQyJ",
  "key49": "3e7Q4Db1iqazgQ4XLvABJuw2bwH6CPQqjyoeFHoMgjkqHqRcaemGsm1MpoVJDxG9kFpjgazWGBgRAXQhPDhUqmm4"
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
