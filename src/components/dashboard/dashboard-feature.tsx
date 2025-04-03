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
    "juwmD6aim1NRMWpEXS5vqTK6k1e991i1KsR17rtLMp44UX6sV2vNvwVpWc4jt6aZduJb5RL691y2FUkpRMQew3o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A1mPasn95y6T9zivviGjjh224cTm87JbR5Rc56pvHfEiosv3wiTjkdxCHXdsdCnKppoE2PtFknB1CN2QgpzcAVm",
  "key1": "4KeEsNeRRXVtVMxUhUua8AjjacR9Xwb2vgvSPoQkBE5b22K9TozaHMuT7Lgk1zL2xxnTuTjuoZ6A7vCAE7gD83yA",
  "key2": "2EsjE3nFCNbrMYKvMPC6tZPePBGfFsU5o5Bx3bBxtQvcuserHznbAo6giU9ikQAhqyYfEzAxctME6gFU9pXdVKnW",
  "key3": "5D3PKAvwpdG93cape3nBWLtk4ht2sioQYxpJeRSBYFQjYXH9n2V8MUcQSEcqCzU6fVcEu6Tytt6JwHTk35cMKUmU",
  "key4": "5SiEk7GtzGFtnuC6GWMd2Xu7hwR1vMohaPmgvSArG9X5uigiVoJqLhwzPQLjao6RfkYF6t3RwZi19SFgXWwqTt6i",
  "key5": "4SsrSFUriZ1eocXN5Co59hYSWE5xHkUUmJFR4GJicpGg26bRoV7UKC9sJ1eaHHVj5MBffthEBQNw6s6uFYGWzRHa",
  "key6": "N6e14c7PJeE2R9LzZ3JG2Pti8mUyGpJbHT2asJvPMRRgh6pXYJVA29ucSxWeTj4jeuWeVDkQHGTMqqYjC74VAxh",
  "key7": "4EFhsM7oMXUEH6tK6v4SmGhy8frp9pcwjRs9TYDapz5L4E9oG6HwbEXPehvTsVVHHtzJyH6XdmPeS5W1c9SqwNhS",
  "key8": "BH5X5rbAkRVoWhKeh7AbBzRWnasY6BDyeYqAL2TtLPyJYYEjLtwrv1Hhs3MnzdHJEEvuJCM7PvoorePTapThZ5o",
  "key9": "5bc3HgvmNFJU1Y2t3r2Tw8aoWPLWVNYUUQbnCrzP86ifU49DLvK5s3XnwoL2yXEp8eJJ8MRmSbDAmrcb4adH29HJ",
  "key10": "5abL9LqSRtLiD9m9Z4ku1GDRsWdr2DAqLoJNebu8YXmABCdgbrrTX84DtycbZkMz4hakVr68ZSnLMFFF5FrxWhts",
  "key11": "3unuuWaeVVbp6uTdvTQqtq3ZVhXHocjZoXL9pMZBcnUVowDgpWgoCJ8f2nsWn7gRsUwqw6yTqRuwaMXRBH4K7vDV",
  "key12": "54fvywXBQLsgLebPFHaTmXZSgroT6p5kES7zuEuP7GusFyDpzGnWJkPB21fqvcBUnuuD7rGuFPUNSG62rCEHeK16",
  "key13": "R5UZgp3vJjTo6o4Sqp4yg9RHt1evjEaysv14HjpHg9josNAvgon6BjhKXJVPVvgzmLntH1DsBZa62urDPysKfLb",
  "key14": "3oTNm8MrSeb2vtAQw9Au6QPy1pNVUJpGiwpdeuEo6SGaynpsArNYG4upvhWRE3KXRgkY91u47Q3GkfnSbzLiB2bv",
  "key15": "kUnDFdvVRhFbM6XuvF9UFhaX4nPkMtrZFUWq1i73kJhbPXxreoxTgYQsF4BNxcMPB2sqXBDqKTPv5Swa5o6EFQW",
  "key16": "4XF9b3XAzfpwSBhMRRYQpmwy7YMkxkC7q959mTL3Qtaap3kCHz9tKwMDqehWXK1kCb4p8UWuue7GyQbRiFqPM4zu",
  "key17": "M6CZoarTSGEJ6pUsNQjSkpygSnWSJmkTHG4How3nQZJWDChuWiF2fiHD8hM6sQSVgkKjovcrF4sw9TTatwjRmcM",
  "key18": "3n4GmwCernJr3gYXjYeKwVRDaCNdACRoGNyZwX33E47FBvLrEqtNxkygogHXRgp9CRQS1TTyFH6akYXApxvpS3Rk",
  "key19": "2rTDWqAD5FoeMhPAs16Vs4C34TtCDZEYU5HKkLHGiySwdFCQuWy6dRdexcTHMgNx1tCqRYAfMk6hughDmaFQQCgC",
  "key20": "64giZ5z6s6hoWmrRrqDvwGiaa51n2EiHUPdbpU3U34GNrS8vinCd3EiWePLgybeY4ysWedwshxbMuPguc1pa2XGB",
  "key21": "2kpCsVdSBDZrCUgDffJHymWGmTbmkWH6ucN7RbLf7RgU2Mji9HTzbF8WYZe7qpxbPyxhhYPpzAq8PCwncU9jw2ty",
  "key22": "2ebbJHHRr1GLLTevPmYdcSni2idcEbMYfyHTTT1RTPJVSEfTt5aA8hHuGdMqUaYGCJyxv4BSovsxFZapKpEfviE",
  "key23": "5eBf4wsWJ5Cyn6ZgtkTWmPvtfuDtSt8YD2vrhw6wYKuEq3rjhyWEonxue2KkDpfXngKB6haUg4eHUSYSQqQYsSvF",
  "key24": "24q3DW6HeLibftvZJP2e7t6B7QJsiEe9G63SvJxc1QEPMY17tFTMGufcydPw8vk8XcsBNVCkBMTmet6HxnBgK5LZ",
  "key25": "4uMswsTHBjaWLX8jnUjQmPA5Re2dDtcVr6fbC1zpW2ktycxwc9utJCLvmiFrczg6bkdPuVS9NtzNqqJPNdW8Brru",
  "key26": "35y41kxNw16QE95ojBDFtVqBhx2VUnm7BhqFkYDiQXJP6TL7iprwaNib3RDuPQ75skki78tCJ2KpjXVhmYpGrvZB",
  "key27": "ewFn8VyuqoHvTSs2Vv8rTGktA7Yd42iRhQEoAbe8Bp1Q3DBVP4eBgbyUdeu4cqiuh3eun36c6srULJMjcRDkvAp",
  "key28": "2W8PKPXCPbwuTg3QKS1fCnkdnsp3ViB5JkQKUTEoUYsZqTekENepTCStPb9z85GPZ918jeXs4fcgPf4nYnK3JUuP",
  "key29": "4fjVEV1BbjXnJcyG25vVHHdyha3JTaeP9L3AwtH7SQyXtmgEf5fT97mFVRzaMp91XDD8pqNuaMt3KGWYYeLM6ek3",
  "key30": "2WT6tJD1XE3bToZWJD4bKqPXLr8kRKEjqPZPKDSkrkgu5ETGHmEyKQMEKenGgMGKrUsgpWtYgGpbGV75VkSCLwCP",
  "key31": "5KQqM4J57vJ3v64r2sMjQQKYPYs4AZ2TFWJZRDawba5EqPGKpuYddVTMovqQEv5zdBS74qyowMRfWTQm2YtUqZg6",
  "key32": "p4judNwzQWm9SGHNjwR2mQsAYGwEDuaHnuvju8za1YrWhMxRecLrS8isbEysVGndvmWTg4zHNeAjwV2LbNrdsgi",
  "key33": "5PKsAe1cinHhpaydDKxEceq8gk5H1zPzrWk7N3ShfrXAG2fq9k21f4BLoyESBYMTqMx1KGn3vS3fYwh8jRvu5kEM",
  "key34": "5BJMYSwhLRYYwGqaUHPP7RRFsikEJUNRz8obqhBE4D7qUV4t17Juzxo6d2WBpvkmc72qdngCUw2rkedLbgKYstPY",
  "key35": "43yQJamVGWG1M7HoosbGfTqwTB1qMqhH6UjahKEi5PPJhoNtUZkYarrYAyf38iBCrj7nejQA4VqQwQqEKWAvPerf",
  "key36": "KtYS48aUPkLTZAfGsyFPmLq5K3WmqZUev5iryYMfvPjcZmdQDgNKubS4iJszLTt1f4CNd2hUCrbb3qBYVKz5oKs",
  "key37": "w5kRqGs4bQxi7B9xwB1fVDASLbYjyUY6FpymT1bCoAKQUEECfomGfGHJajYWjwt9hDXggj9AQcUwLVaB5diBXmJ",
  "key38": "jZUkxukcYuC3BghaQ2VAEcmuDQ1zSCiA4oLGJwaYvTcLh6ZF7Cpsa6B3GqWBvTxJVf8vh7HdCdWYJBAqBoKY8pY",
  "key39": "5nuZqEYHNCJnntoYC9JFvNS6H2UHzqk7HXkDgPHDF2oRoMF5V9GAUCX93ouGivkUW5yqrTKXitt9mJeZMHGGCYMZ",
  "key40": "2Rtctzu8KU1sH6wDnxc9bPBZ1NbDGYiSKXwZ9EFCLC3WMcv3Cx8oz4cBsMxXxo8voQWPUcLpKTgFoWQ5eC1LAAib",
  "key41": "4rWQ9uchyhMzY8F53qdvuvpV3htriDW6Xzvc1qWMzcnQYds1jpo2XNds2D1X1AbFRmUhRjtr9o53G969ZG9c7CNn"
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
