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
    "3aYgJmBQVNkebTR2asF4jvAHENJb7J8jajdvsAMGvq3c17TsW43h6QwLPfppb7vp4VG9snTJ9FCK1RWHA761jGMH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ey3s4caunFH8xFkTjxG3A1YG43soZZgUZMu2geP6xv7ZHxbHPZ3rAmyuLnSmMgztCLr3D6ULCxUAYv7hchX6YR5",
  "key1": "245sWmeP4rWcH4MrBLyJTtBBDCj83JVtFZsKau6sC394kcVVqqranthQYSyH12r7aoU5yHfJqzP56N57dSz6i4mm",
  "key2": "5MLPpuJLmxonXykN1tjpv83oUe1mS51STagwHdgRwUJ2ocavAeFJVmLM9PBz43h2fRvRQNZgU7rwvTq7SiueJDfc",
  "key3": "46CxmvzZwwnD5HeQqnWd6g3pp7szjeuTvh2PRHeMVhhGZGcUQjigsjvwXXiJjpT7AAKYTNevwSEqE9sKNVoigsrX",
  "key4": "qifEUjLSsj7HnAEewQYaWTvx7bW7e4oC5TR7ATfJML5dv371v4zZTD8rLx2bupENMYnF6cZ5GoimVaDiWbHk7LK",
  "key5": "2rcqqqCP5GfC6dV7FBNux1mXPQ6xnzfCXp2NciVY9pDhfMAqk3VwTKJqL9R2DiuzECHKxZx7to9AsThTvazRxvnA",
  "key6": "3T62hUf8oqiFJXKmgUt244xDifEZCPvFNRh3T2YbZXj1b8y2Q6AFev7xNmF69U6LQZ7gph2BpFGW8YzByLX1qhNV",
  "key7": "pJbge2igjMck1qVhnnpJDXCcuLM3Ai8yNtP9gSwr828Gws3zN7UVKySEarhAeQ35EZK3bFEFpdC4EPp3Rua9oHo",
  "key8": "2cQJGcd6kirQmtAHay7MQVQfgSJmUdjY9WwpvtAF5Jew4UHGyMrrPEX8gD7WCEh8dG8VjU6DXcfyeBD3q5MTFCc",
  "key9": "5JYDBAA3MjVpoUeMgCHAHJEJk4mVJMQUmfP3rsdo7ZMujUEhxbGgtLumSuNxt5WCZJe74EyMmPgEdhVPDnpBce57",
  "key10": "4iSJ7oKdGHHXvUBWK5RV4qBAgx3JK91dS7KyBdqgExcsjeuDBpmi8noXDgr4oc3cLZCy4hH5FGkDfpRmw2Wpz4Rr",
  "key11": "3Teusk4vLzkdxu8884gpADKq7NQemiQhxZc6rJM5APc5needAX4V8xp58PmBaUMyHBh6c2uxPsaSwaz4ReBG5rwQ",
  "key12": "3X6GpvhwuHFzA1dSBjaRZPyJkWoM5zdcRhGarChUkAXngqfX3fd9uwbmSikdAMJwnaQLLSjAJW4GXax276cfqBRR",
  "key13": "4Gr3M9HER41dJM2dY221nnzNzsfGhRNLHiBsLL3tCJv7LeLC2L8ajCTDiw4k9Ri13MnsrU1XKZABTQEVQRD156Pm",
  "key14": "2jpubasdYDucGVTQQUdtquRsyi1SkgX42w2T854SBARgcG7SyTVStUDRgEBeKSZRhrsKgBw2nXgLPT4QDbiTxDXr",
  "key15": "675N5AneNSRXu6Nw4uw8R3uBpsqNBP5MooZbJpnX8JsMZctBHsvRYTR4pVzUrxPM1DF5fMWBHGSvFrcZiXGqZLo3",
  "key16": "23Ax3RruM18rV5wb7eQtUXoyBGj72c915W9G3aRhLCqsP7LF2qbCtYkjEzd3LEbsYgWkDvKsqxGqtXHmNw5cTTgF",
  "key17": "46EQp5FknDbHHP8jcny9DjzRtnZrHNwfrsZbdYTgjFYWxCHFCxtyXACqdx8QUdNQKLXSGERMegUhvgUvvibfZj7U",
  "key18": "4D33BDYHQ2P5U56QB9tCcarmYeCHSdy7Tbk4W9GdLC3ExKc3nGQ2X86pBTeiYZwse9yrq4HRax39ZdAdMuQqoRcg",
  "key19": "3cAhxdTfbFznh2hMBS6bsqnfxhnzWg6mNmAmeU87UG1VwbwSzhxBmcgk73ymV2CAkHTpfRMgS8AoSzsAnrVBQfSb",
  "key20": "2M2ZcTXoMGAfFnm8GK6eaRpk4oq57FbL3Q3qwofcom62GYA5UeWzYGUgJXK6i9WEn23ykL6XjxQgWyxxDsTFvFMM",
  "key21": "29JZdc3XbtY5cEA28YFhQhRbaLoS7Fipq1BvEZYG3zJm1C1fzRZVSpiYQLZJ6wsukTbHsgT9Y3stUApHSNiEooj8",
  "key22": "3dCk2drF4W44pw5tUfRGmybr9QdSt9SJ1BVd6uL58Xoso1p5bTqfhk1yiemiYsbiTs7vVoszKo8spoGLCifR1fso",
  "key23": "2RmXHj84gGCsQFBEHF4gJUPVH5kFCwbac8xmuoXqS39egRFf4pUBY1Nxgkuz72XFUfEFaVmxSYrJAe14c4CPrabx",
  "key24": "qS9gj6QQLfgjddwjjCzwzXxStJGEXm7NbPZZuPfoBMnv2xVwLFNf967Tej1i5rjXTAmK5MWdMkxiURZ22XrUfVP",
  "key25": "23oXv3yk89n1TsRv3eNkMDPkFW5Bz3SzTHYLsvvbvw2BbJ2yGvWpr66DzjTnHmp8G3vr1NQf7fnuB25Z4mF9qsD5",
  "key26": "2i5EekfsgUUUqAzLb4WsTbE8zD7K34LSazNkdVEahmm34KsDWBfgteyyWgY1kH5jfbFkCkURQKWEEaHWRMQczWyt",
  "key27": "45CwZnQnxgEsR8ej3keqxDJDySB3R3N4YdwmCgzyzvVVBgXK1JVCMYY3zkMq8m4yGBVortM5aFo3kuU5gjmT3tPu",
  "key28": "66w95zJJpAm6KkAKioGfNBCVVQxWbkz78d8d4hHXELBSYgiMjvLbxj6PH3H4HWcjgzwrFqFEMu2ZtQSW1EGxCjw5",
  "key29": "2HRLdVhbU4uv8LN7pdwLyD7ZxJ2UuVdHjvwuUkByQWCnHLdasBjweiPCXitF4AaUZFp1weudx9dXDoi7i4GsvuUR",
  "key30": "2FxCEe4quGFKmJaTwoumSCrRpqdP1ZtA4CS6jUy6uow5DD3tKx91t8ugXtxMyh142gtwXRKA3jYDfTTv2S33Jjn5",
  "key31": "5YUiDitWvc1fXZJaDYrcTgizYM2Xf6i8DzqDGKYo3yphaRqfTC5fn3FGuyq9XMnqUVS8RzbSYzTqJ5KMmyGPbB1t",
  "key32": "5My6DpbxAJhfoBYqz7za663kMRZkSVxWzFgBnHWgLNybwH6AHTkaW7wpkJczCorcx12N4avrEmRKBsn6BXS8t4kV",
  "key33": "36KhLQuoJGh2ybWJjYtLjzdK72muWf86FicTy233VG4Cv2ryJNn6797JoBNDLVEf3etFLNaU4ZNJodGo29Zcpx9i",
  "key34": "3B49cBb6ceywYc8AQCZT6qv5naqkPBnX7HHYPtGEXnjWNfbqLMMZA5Zn9GJGaEFduMDPSKjTCZv1XuHzRnDTAoHN",
  "key35": "4krRg88E254Bv6pSNsw1SqjDjBajmbpDF8PrwZx1LveXWWfxL5BajYNNAeazYosmDxfZLqZrkRjys62NaxkZxWoq",
  "key36": "5nzFGSSwtQag9raPJhKfsM7Vi4FifNTnreLHa4p8oDTa6oFbR2rZjx2BuFJ6HDcHxdCoKqUuVhHhvMVeZpVinXTT",
  "key37": "5kvbdgaMb9vru96CGTjP9aMjRHaXwrWLCS9KGjGkb6zpHcQiS2HdaKReCqdzUGuX22zz7TEyCehCkyy7kfsYSCFK",
  "key38": "27AQVLdbshoqwd3u6LYy2EaMSuxSbreLiSCEWnNFVG7piEvZC1XowHN9HS31oVQMaidqjes7eSuK9mBDZypCSBtC",
  "key39": "3L7svpc5rf7DmhTAC3ZPZfk7Cybm8k5PXWeeZrGaxGWP1MCzYU5jTFgZ4GUBXeuon19BVfFZ99vA4FLmWC8kEfMn",
  "key40": "55fWfzzKKBnRHToPBknTUkoqpegGXo4Yz2pbHgb4AFJfgQFGQpzHNrM7Tqxsrgs3gQU9pCkyKQZSgemSCPTyFnWd",
  "key41": "3yikEXSgFjTQFjoBijeQ5tkqFvNCHsyizPpsy2uZTp8rYG3o58YFf9bTkyQLkykH2gDGKLFRK7p7JCj4i1gDo2St",
  "key42": "4zfAkhZhpng1VxmFVZZJ73GASGsSCPduNAmgXwDTsuM51dAL2JbLCArnSckjPo7kKcxtYNxfeYRRPXcrt4i5dr7e",
  "key43": "57fqzLZh9MeR5oxwe8uWmCyFVQTa8rxXbTS3ycVMwTjuqJ8tZxGSVudC8Cx3S8Y3M78sXP7LpE83A6UP6uPV3FRk",
  "key44": "5vEzYPd8C4oRnCyaRkxcotxk6bUL1UnLZQn5k9Yhejwjpa64CPtVkFdAB6S1GQYZVag8sLjLg5CVvKUTkk2ZQJu1",
  "key45": "63Js8n2eUaNYkdaqumoVvKyNjGRYKu1N9uPGgMe2quMrX8TKueCfgr7fwdvzChT4BGMxfFGgCzCXwdgPqiu7o4h7",
  "key46": "JoJ5CRfWKtVyCoyKSJzfDV6ANb9qrs7NwAp3b2LfVyYCurJo48RWCHBzny8MckuVTmD2j9MrVAzUpgPyGGgtpB1",
  "key47": "4EaGmVaUnuMvRG3eg5dF71sa7fMrAVFWavnfjCYSGkn7FjtMnNjWd2cph39xZ8QNWmizRueRknEK8JZDSWrUoRhv",
  "key48": "5vpNrNjRbYdR2kbmqcwwGgrXxYVr26FgABvVqSCASHEFpBekezUz2Ai81ypLrh8AqFuG7kvj4DeWx1RNtArLUBVu",
  "key49": "65EnPuwNk9WQqvowwoY3Y3UjuV7aTgXDsYK8yaBbz7T9rSKViN11VHhosEQnMmDV8NXYwmAXQVMTt7NAhvg7DBXK"
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
