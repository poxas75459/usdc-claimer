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
    "5Dgy87dGTj4kkqKvoGNUvcazdAHYnu7hFYXXfCaN71LLHdpNhFoCVSXmxiV8DPsyw61bx6Kdk9yRqeLZ2C4BUyfX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NKVYmPXny1Kc1RjMvvfrdDpmpNcGhD4HYP3GzgFQmhojVWKua4N7zK41XNyE3E1ZngZnwc9jcCQ71wb3su5fvsS",
  "key1": "q7ZdzCYAHnKvaypbDaxV8tAsCQ6Doh3h5F7Q4HcoxSQ52ywxG9EYhry6zAWSjUHzrbDRsvMJq3AyaQhkmMcGaQu",
  "key2": "5ufk6a3SsnKtJRmDswnE3CEs5Tntc6JrQdY1wi3YQ8oPaNkWR5r5YeY2UmjSUMtYTNcFGaSLbhkZQhTSsDcFE5VY",
  "key3": "55jvMxZPfbQM94D2GQa62C53fzGr7oYsurdQg9CHeHsG5qucD5WYou3jY5X6cDNv9gPvQbenZmCM9vnd7fFeQYDE",
  "key4": "4hskwq7mjFJKagneydAenwg4qfeUMtcDsQQ39Gyp2ojouMmxjfmHCV9va6iEnv39XxphVQPXsJST29dUUp8amkUR",
  "key5": "27xgLVczdibjdywWCBiKAWWySH5dCqbe46iDX4m2sgEB8WTZEmBmsK8a7PHuaCsmHxvY7dww9M89iM3cbtBh4Skv",
  "key6": "66pVSYAKWAqtPXCvwyQBUeGfuWwDhsqevShoK8yvUPJdkYwt1KLQogrrsWhtRMgKcNeV6f2oDmNVnRcH6ns17ACM",
  "key7": "HP9vehNyZtBoqa6Ph7SwhL6Ad5DE5uCagEXwP8jQpM4dymP62sXRf9zBHhLBPNsR3hB4kdPs3sEAfKdqVp9HGra",
  "key8": "2vNoU5FMxokuBPpVxKab8mbzxhhiaKzHnRjfDVMyaAYVaUDojpmj2r15tpEgkkHyHkKuW2b4d97keFBC5fq9F16u",
  "key9": "4UL51YXHvkW5FMToZx941GqhVf6DxuC68iMD4X3uVRqUomzKR126HY54bkZEZfzoAaUdQwogU6XKm2Hda1TSBpAd",
  "key10": "64b8K9LLupuhyxw4mTP1cgM8V4FtNggT51Q4w71pPfbhaBuT53et7EHimh8LLzq181VciaQmHorZhau6DhPK32k9",
  "key11": "2ezCoXHwrcaSCWNXmYkTeK1tMUYkXT62uJASAazKwpUEUttxMCLJJBDCsZYiSAQ2Uf3ntxz4jn5gQyHbUWPZayJr",
  "key12": "ZnQveu1aH1CAULrdoVkyZKpi82uTB3CNQKyAaLJR82zdx3jzNh9XwfJ3ojhYYttpH6uP9vdUcQfbRi5c621jEx9",
  "key13": "upNccQ5dsiANG4YQRBvDoZZHGNizMDa4StwoNywnL755DGrmf4pHXiz7FS8KVxZCGXZJSRvGas1TZcuVY9zZvq1",
  "key14": "4NLt5L1PHBzvLPKe8vJBVdaHd7KPxuYk1FwS3nU635SEbx14iJZ7RWUDdKLjBJnVjuSm3P9K9yHYfKV7FbvndFrM",
  "key15": "t62wyRHiVbDcBmRyT6XixepKv9VvE4MxFbTMKXc2KTWv2xLb3TsCd922CTBYCRqUp2Xc4hVmLmkS6QacFomGTs4",
  "key16": "FkkuoKbtHCVPUvCMMTTzpGRjXPvXoGj58rFfFyawvShtJwkebFaNKzqEwJEKQEU7BWpAK1kbXjmUTTBWfop2thZ",
  "key17": "2WsgWVvqV31Poq4vdWpyKnpMR5Ad59uzv6zsvMkEd5XLAZ31Gh47mseegHMRrDdkxMXkW7DmaBowzaJ4oPH4zAU3",
  "key18": "2MJ6gBr1qcUvb7kRuy3jvjoa5zkKyR7TaPCdLwsuBrUKTTXVV3KK65u2qgvPGT8kF6DcSNxUYga9xpW2MTZMQYAg",
  "key19": "2udTq3Yjn9CV3HR4aLwSe2CvVL8rzAQT8j1UaqYVEcsn6S2uSpeFz799zT2cvLMUCPy9rVnzEsfkyY7rv3qBdTZ8",
  "key20": "26dS5YyqPP1PdoDCJbwDSkVJJmynnoGjWaswQVcMtnXnBrxEL3Lbcni4pGoS7NrmE7X78GhXrx1n4WKDPiGQeUrj",
  "key21": "5gzuHRbttqPyByc6XQL3DXaZeuazufTcdjNdsmVR8pDTsQYDQ4owukJnzL4ZiP4GbtPkybMCpgM3yf5pKkbsNDmX",
  "key22": "4wXmaur8H3odAvAErqL82zG5oPbXzrekexj8ZmDwvQZRTyUjJBKnHmztbo5bzvwzL5c1j7LZQvdcCgcYzHf7nCon",
  "key23": "5Zp7AMLjZuQRSXzFxXWtY9AQ57vmYVqHDvFX3QF4uwaHpJ8hjrQe5Edo5VWb1bn1Y59XuZniBmQyUxZ7kh1rN4vb",
  "key24": "43Bm8NamThUHjjWT9eETgZymGSKA46o1tUKeJoQrbiYUbdwCRLcDy5hFLEdpVAmGR3nn1WEHRNAAr2R3z1LM4Z8h",
  "key25": "G4gtgcMdjHVuFRhCReDCDWTKMBhjuMZ17FBnJ41Ci1cuww7xjagTGPoeVAqm51xFsXHXBbv49Rf6VEHdzzB3JQc",
  "key26": "5PuQ56cyYea4bHwoHuAv3Cc8RfYquo1BpVzu3Cq1ynJVpgaDzf5XYt1kxNkpbS5W9UBPJg3emNUGzvUTBjaQRwgb",
  "key27": "kjFqkLTPFtsyzjf88SJuaG2awLikZ4sizHbNxeHGYESoRWdVyWpdSCuBxA3b4WRKXH8knffcqm7XGL59KEqmH41",
  "key28": "kyqeCBaX2EZd3zwN8GhUrR9znJNCknFnCt3UqNNKKJk16dotYnNfsypBqo5PHvFoFPGGp6qoz5wG4iVfGAHKorV",
  "key29": "E6SdMTCdnpZEvA89KiYwQ5CuujoTwMzLzNXmZHG3oEgRn65L5mjBnXTwEyEYwKMShvGSoXP9TdgM4pfwJThMW7d",
  "key30": "64LvoGKWorbFtMEq9JpaeubSwBHvuay3dESR17wHuusBcVAyLkCi6aJZrsrThFDDNDd7frXBzuAkhgMYFSCH9D9M",
  "key31": "3Xvc1bjoiLhqJ4JAwfqpyNgSXzJ9P6kyfYBePRQNxqMdDmJSdXZu6co9tZukrJnj7V8pA9oD8muFFmm7fbr3R9Sm",
  "key32": "3cugw7mRynhxs86QiL5gChYNichFWybERpeCsv66ThMKjzVUxiy2TgsEGufZeiitD5PpH3oTrJoXR4ER8meJmaTq",
  "key33": "NkKb1VEU87WV6PhqpVmd1wbFNAFka4SMZVCDUBM1hUx1nqJT3CoNmsmpabW3AARsZavSvHXu9HfHKtWg5iG7F9k",
  "key34": "4DujnSsEj4wDSpd7aZRG1piAeu3PiJKQ62RhpZnQu8mYeoru7RTMFuxBXycQmCWvSK8wnSfk5oVVt2jsmexoFT8J",
  "key35": "mfcSFZPNpAmWfT6ecXioRoMdt4tt5SxY7ULYnvs1ZxQD1sSqmqTqVRiHoACVNRhg2GuRfrNrJxbYPWJrDiQktqC",
  "key36": "ByYyUr1yZvfu4uvUmeBpog3bFksKSxZwS8GeDEz1bDwfG3HLfZEwirax3VUBGBGpLiLWoQBrRxsxvzdHZxE6vKu",
  "key37": "2YAPPNhwszQSrG7frHF6iu19uoZiPDPVyPVT8RiYfeDsgVSNLuqTgd8BUsFk1zawLzshd6G56njFbGFyKVceiRPY",
  "key38": "P6FrYYZkYaCoQtHX5WPmXriDUp1LwaevNi9vJQHE9UqVbnoRnaaBXCguNm1rNC2Vd6s2XLdCRMVrAQS97G3nYsd",
  "key39": "3q2uKjrRps1grvzNfR7biSyCARqCnh43T3yRGoS7iTS3W1HCHPhTsweYhbDUxQZufR9tW4ZDDpBTRvm8QXqiX4gS",
  "key40": "5hkW9uefn8pQRUFwjhDi6U6NsMotLMBKRrUThLVwEXmiBN39iA9aXxrJKXHibD9DXs9Y8o25keH7Lyy6j8pu3NxV",
  "key41": "5B3GaMSRVJVdpubcAQCDKnpg6U2NtFB1QTvfgg3hso9vwsMtiLEuhbsoEQrbC1SuY4BsZK3coYwwRgTNC7L6Ykvi"
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
