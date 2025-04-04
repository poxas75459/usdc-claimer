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
    "2zFya9AfkdGFZiud8VGN5JCRTx5ZLW9Vz7gSzxjaxLESg8BTZkxiBre4G6RXHhizZdpsJeDptiKFiPoGy96ejUrx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qcr63bUuLv5aCLE7eddW5g6dipcMa9rMcjSrFHK7ntco4yHjvVQ2xZWPJBzpZeHfqsBCPvb1gKkJXEmhfMNyFu1",
  "key1": "61tS5uT5CJMgwY4sq75bHEY4kfLLrhMEQFdUtH1C3UmceqmykrPhbufodoX3HrbpuxQRkh6XxnozYzcEAfAyczEb",
  "key2": "3FVHPyb49hMkyGv5waB81yFxNVPW2hsQ1bQTmpkXzHS2WTD52qcXZqc7AWcfCXqiv7wZgMMEzPi5H5v6sNno9sWN",
  "key3": "356MLycgzCqhmSXmL9osEBmdvwTQMagdBFrB2Jt65fmNrBxQToXyfPZEmfFzyEEQFTQZXubamvoZ2tvB7osiXR4K",
  "key4": "24gc9w51EB9QMZa5HrWtLPNkaKggkSXwyUtTZdfPE3zTq6RUL3WQJUvs2E3k73hSZkBGa2KdhdwRnJkbotfJ3wDR",
  "key5": "4AeTeeoT37CpjdT6UMERZNmpxBzrtffLAwuGNQKF8Zaa3EH85LCmMf7WtVLvdDGZGvEYM3gymXCsTLop1Y9fsbcF",
  "key6": "2pFM8mhWpDCbj7jxDkDwtcXEqu7XDJTb3MMr2Fe7RjwDbL6pbwPyXiTHRvRafomWd3beCvyYaJ951CCkTq7PwXF8",
  "key7": "3sPgnQjjZK3pduJSovJ1kSkf5ffEBbtJPxpAXSZUD5fyMm9jSY9MKeGtEgGMhKkFyWyfr7H23g79Eyrug7GTYryt",
  "key8": "3ZK3ikZbAnuH4NeoauT6KRBukQcrTJQy5AUrFb6S6Hzm2xhDUasYJxU2WDuSyMhv9urKQ5FCjp9978qinSTnfxxB",
  "key9": "8WJWnifsZsKGBMXVqnVG3Hcgc7fupMHkq54PBSFgJG5QkR6DjdXM1ajExCSiv2sbx6VPdpu3rRouBieFW9cmAHh",
  "key10": "xxmchsZTgvwwFpPbPxrLCQSPg2zuQAehFhTg1Po2APtpAMogq59FLZY4H1eC9ikXLfctPdoxdkeu73DC4i1kXZw",
  "key11": "413Zg93796ueFu71Swjs2L2PAG7WNgaYPxcLGgFfHFBV4qRvXtpQ6upN1npNRp2j6uk2NbLSRSua2KnRaaqroGfr",
  "key12": "2YZuVVvHeRmEaiT4UV8VmrNFJ3F8zaxPP1UcxZzbWaMZFwsVwBTiPcxuzk96gCQiUkG388Wcpp5gUUUcq1fyo3z7",
  "key13": "3d2NLNSNdpPNqZepwxygBbG8jQVHa2b3LArpaofJgmg8MviHahb1pjEKP7V39cakLQ3fCryWzE7bm4gTwaHCV1ZE",
  "key14": "67r44RQbYFbG67AtGVaj5jTmKA313snyPfRDrpzDwAcnyQaFJjsp8JFLz86AJsENWbcFPUMgua5u7wRTvR8k3B95",
  "key15": "5xNVGJYXh33Pvb8AjNuK1qzaK33NuMimwQcdY7ybPbRnWcujbp7sJgBJ5KXVAbHD6kHgnzVxGwi7deGVMyGqRjSs",
  "key16": "4QYZuDe2mJx65aoW52dEEr9vKe7nMJfafaBQ4eRttn3ynqNquwR8crPeHoEqnptarubc5mBMbauEwMBWokVjDWKW",
  "key17": "DNjeV4cxbMrrDPwZ6NdSCYiNyjNZvzzsM6uAkcwEwKzKhbRTi2gKpbbDta1fmUugnvP9n4YWKRRNZ1CApWPFcFs",
  "key18": "2znkV5hq3Bm9WPSzVNNLhSYMMDxKswaeUqKTe7pkPBRH9T9XsDy6ueq1NqeeEg4eyKvfDcztR3srboZhCHU3VuhG",
  "key19": "5eRoH62yMTRU3GKCZgDDhzS9sbyNbVpzZBA4cudNmG9je4v2BLAyLjHsKuVetJppbAiWLJMonhCiZkdmQo3fLheZ",
  "key20": "5EMma1CAuRhnqdg6qYWupoaENFYA6iYzy9hNFhBFY8UHh3tEYwQJ8jDeYMaqHkMbr9xVkWjiayFWQGk1ths6u7Af",
  "key21": "gFR7fwunVPBBnDMZu5zmBmHHn8svrjdqcvx7pnEkCKNJB1sQf8gpZfhRQwZzqcnagkKeKHa1QT7UKaykkdaA7R2",
  "key22": "3zPSpHmJLTJCTsWSWGRWAGDMictDA61BhFcTajGTZjqPKb3XenK2Tm1PqeJoiwzGcsqvz95b48mKUJxJ37pULaT8",
  "key23": "2hiaoNVuaD6r8XVFLEmvbxQWZfs6QHhF1E1G7iCrsmMiQjLJbHfG4dyrDUkPp5fiyZAfKQDJSJoebWKKAqERa9Fe",
  "key24": "5YBLhwd9agtNpFWn5WChoKsLUFWJtzfz5wCncKVkbSZwG8uZR3jyu9rKMaZBSzsVrQtCgVUNdPZe6uXEBow7mapL",
  "key25": "Ex9DGMcNVHL9X4DeZNruKWxefkSkxGjopbswDZknah8A9JfjLQZ8Vv2482zTfzwcjvNBFsiWFKEUcLz1CNiZxQ9",
  "key26": "3fKSaJsS2fFpzkQ4rAreetWWjkxRBhTFu9PmcongkGVvPrgorasfvBpHbbRMDa2yxM3Fsehhrm2Uy9c1JR6u9Q7U",
  "key27": "3Cp4QFq1DEZzZozeTf3zzTDX2MWyFiCXXCXD2S7VNG6HATPvp7SRm24Wf8mY9Hyam6w3fL2ScuXE926Hdc4UESeH",
  "key28": "4ANAV8AJRvoTe3rB3dtd8HS76PSP7RFSWoAjuY29GgsuGMSvLNyb8mGZYN2ZRP7fP6u89VHccjiJnp63Us69FC6q",
  "key29": "55VdsDHcqTt1FVKHEbGL8DLaDTbQf9A5igpZk5Wmgrkn7gcm52yVAoCrAMQ1h4B6tW1H2tEVyEEu51cxqKdkAWuM",
  "key30": "buGAeR4zNhMq4p8s2JBTJKEntpJigYzgpWjtHacRDgcrpcHkNpvu9UVV215g4be6YAadgjEP7sg1KqvKL5Cg6a4",
  "key31": "3xK6DDzGWFXuxTv8szyZrPuYKZjyj35YDso2AyiMBhxm8ENGS9RUj9LgmyZiDzQ3NjJXNuYza6i8fBvjAwRzwTRe",
  "key32": "3ThW3z8NduWHKbYfie7Muw2h98HkLai72NtRVQHJwYRcSqi5qziZiTBawvQovPQPAMCmeQ6stWsW8a82EYFgi26P",
  "key33": "2CbbNQGvpybDsLYBA5AkAhkkwUZiHWWM69tZZVX4iNGbGbM8szzV9U5KWFSwUfvtVZBVxnS3ZCN5afo465EqbDbg",
  "key34": "5ooiZKvPHjqJDGF9KRDVBMT9Jdob26M4UgK8cJDpseDiot9RJ59d8SoVQ5EaqQBuMP8Ehv6YkJrnM8NGk7THSqRW",
  "key35": "357FE4T2Marjjv8M5ykPjDSuH4SBcqJsscqLm2jqqHLWNNrJUbFTFXMd4x6hFURbqgFKUNPyd6ehsiCGMdCwcjn3",
  "key36": "VxyBmrKnpr3TEPzD3wtP4nXLEifrVhdQsgRzq6iK8K9DjEZVFDHmr53focPHiEagxJrq4kzHbFtHoSsnLY2ods6",
  "key37": "35a3nJzx56Nx8b212EF7zK6qTqvttMVenbFtonQ6Yr75TREbMSvPy2KaeJz2hWEP7NVoaybksT7wDF271hgynE3Q",
  "key38": "1U6CucSCVUqCebE4bX8gZCD4GPmowCAMonM7RHpSfBAjjhAfCtBuQoQ7qTUaJviCy4jkpuS47d1Hfg8Z9JZdC62"
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
