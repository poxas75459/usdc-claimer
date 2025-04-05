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
    "43LHCQjS6nFGdJSdg8SMD31gPWjqmenL5iLnuiRag46hGLGxJLu8FU491R9NkPhVvaRNNdiGzQeH8p49MQSfjujj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iMqaM5vTU2BTSdr4kv5yjWB8V7x9e9ZnDFB9JFVdJD77m2LmU7CVZWX5RmjXQ1Yy9gbEwzwyToDtgf9Sv7qZ7dj",
  "key1": "3NBqJAFZT5tz8PDJxx9jVHuoDun6vTCJmTDLSfj2ePm8WiAUqx93jwMwnnuphLYUDkhcbGeFDvPw5mNov5tvHM51",
  "key2": "4TiJb6JsBHoXefN55HYEKbarkmnn8RycetiELw5VsUaWvUJUkuZGGTJ21rYCzRj15X4Gmu9BNTSbPbgPzJHKnbAn",
  "key3": "3R7MMDKZznS4NiMR4cGciqF2APood9YuNLyq8a95o99QuJtsXEH2YC9CWBHptzoFLQYhXEVUphb2ACsNiQorj5M1",
  "key4": "2vxhk1x7o877AF8yXAefb1FZQnXxgiV5MxtLcY3Ybzrh5ioR2edaqN72uYpRNDcTcyJ8x3nY4CoQqKJDzTPGFLW1",
  "key5": "2fUkBaFZ64FKW21xmGjbbX4QgQzvqq129Yzn7DHqR8hpY9vchmeZ5zDM9dp3mwWTur2Bacftk8SCQRpVXXSD13Nm",
  "key6": "2MPx41nm41FjxYSHntEvzt9Q8mTxumJfBdbxfQT82MKndHrKvjUgLVNSaeNJ6JsBthi83uvBp8K7mjf1hSnA1Y33",
  "key7": "5bpDq2RSP8rzP4Dmq5AUfxtXv1CYhusoPMr1vLpqEGuobzCkvd1zsZezp6bQ8xJ1CGx3fK78AgZjMHHEx9KVsmP6",
  "key8": "4yiUyCbgeJaDaE3vcyUviYy7U1jTqo8eaJKN4kxzjy9VFvSJwuQx9eGw8weLswh6uVpQVhT48e94ELAArNbGWo6v",
  "key9": "5szcVmrd2FrxJvvC94Fy8nMYpVTYfotUq7cMUCLSQ7s6R4B2TR9UscCXjYx85tyT2UWmnazTvkDEXhNSTBcrzw8W",
  "key10": "o7YNQK5N6SqRLNEe7f2NoeW7dPy7LeQekNXezFoUan5jQv2NoUbtinGfzxotXNhDAKmHGCfsg3kHk4AWd9wh1c9",
  "key11": "VUPAcqZW1XLHAqVCRrLzjzqQQxEFESXE5h8HxWhMQuUNDo9UvjLH8uMh2NZZZxLtZn4TRaxSTAPi8oK8ZaF46DT",
  "key12": "4d4qopnXhkLwVfXvAdtvt9VtSmjskb2fEZki5D1tPsvwV2Fa5tDpJo7wau4GU2LBgp2t9io4o7BLPt6k5ex67Age",
  "key13": "3waLzdtbQ2SWXV25Kb5J3vMoffFTabCWXTD3Wya9hKsUzUiKo8CDXfpBGrbtb8shocqZpfDu7z13FThmW7a3bH3S",
  "key14": "p6THiJUp2pAUaRe7D9wieMNLFXoRiVMGiYpptVGboKiAa1vACwkWEYfS3T2L3jEzgpPLfC4bApSmY1uRLfBUJ2M",
  "key15": "5ureDmCKCKUK4CyRB357C6JqfbWV7oQheACSFYVzM659ALr9DGBQM8EVD2Sm3avhDd457iF9KcL8c2JeSTZ47pzi",
  "key16": "5JxzQnexehQvTK7frSkUq3anUQN3J5gfZ3EyMMDhu6sGn1VCFR4KroYbswzbbAdLzmXWCez7NKTT3TPGu88Kv2bX",
  "key17": "31b1cbpatKuszx8UZ5u4zqbkukR92wWHZyREjfGjLsWov1ctGgWw5hK7aDNyqhF1ax9dwjrwdpZzd8Kh6FU8AUXT",
  "key18": "2NSSRFg2LrrU6G84cynyn9a3T1zFPzqrnGfFgSAhL8G7uwYZyAkeqvcToJUi6E5mBTNCmfw3qxi1bHT2kQDZPGk8",
  "key19": "3tZeKtNgtUMavS4RFpD4qQyRFjtin9LY4e123kPvEhkdbuDn8iu1Wtr2AhMLq68ew3fZa5GdeR49cQ5iKRPNoUex",
  "key20": "2eEXeGpkvV9yrHVKHS1xtPUPprnNLvtWCWvW6sU8B4e7ixfRWUzEwA7nEuYRQEQz6zoD6zSuBDgEaUch2hH6id8b",
  "key21": "36QPXUpiosTMj2tVAPN3U5SqvMMfR29CTbR4DhTT2VMErVJfP2nAY9qndmwhotVsEg31T7aqDZkh7y7U8BoM1h1j",
  "key22": "2fpTyVQm1o3wWM1kxr7HQ5aNb9BtGFvFbLz1H1dfKEwvVQAQM2nBaMsNdnyKPAePA2ckjTg3WxQTgVBHqxr3xZoD",
  "key23": "4ypMZM9aJCssFbucazBqCEZL4R5JZbS5SwvFbufKsaVeortWsUXqSe428SkNoTyNm3R32RXPKXH34ApnGyaUcnHc",
  "key24": "2WEL6rZFa2Co7mihoYAVqT1kf4wGPmL3LTbyFQXGiN3EYjnii6pHMtPAXQPg9JdhCKm5nRYP59AxH1doh3zxzAHp",
  "key25": "4XfEfVc47UEgVe8ndMRQ2bmzsaxZNkLk1CQ1FvsDPxn6V9NdAvgwdbHaSxX4goTYgWRqecmsyokobqQWLEGDcD4p",
  "key26": "4jJ6qXuBtXob94kcrckufrDcw6ixDQmh3hyGTVMoCGB7wBMN7BLJbrNt1gDeYp7EgADDhmvoHpgesCbqF4Smf2tQ",
  "key27": "4kK7JoCjA1SLJwV93PtTGMmanwnVCMUeEXDJPzLMfztJYMt7A99iHVpxAuA3xePUkt6w3iDLfXTMS6iAZxt8jCfg",
  "key28": "2rbXC5VzVG4kmvBzqj36NpWM28YyCrrqiHFaSDsbiuLJnXyJcmpfdsjRczvr7pDFqBHD9ZuUkZjNYwHosCkFziK9",
  "key29": "51sTKJ3nmqHKTboFKPb9aAxWFdBfSyvfHx2vq57SEa9YNRF1bsUFun73cVC15bU3Jdnh2RnswC2G4ssxEWqRvDi4",
  "key30": "31kQq8tpE7Fjcqapts965nz7KUTV26gAxFJ1Z1y2n4S1avBLbWt2MDzWjmiAn4ZUwtuiRrbTbdqWzJpTdrrSMSto",
  "key31": "22y5CGTu3ahR2EM2PGuEp6Fk82TuxN64DxAM38jsJHYpQVA49L2bQ6g8GSecd5vZzMpuqFK98jRZqwyhKBAgEWzT",
  "key32": "3j4Jgsc6piZeWt5LzhXrwWMtyay5bTkEcHLJPs8aunbUkLbhkTQ8wgzyJsxRzUG2xskNpE2wZFSuwcazhZWNEWic",
  "key33": "pxDqnU3VsejxH3Z5v8hbiVvAjstqSJ4PfER8Wdi5ULG9YUekEpXxnZPruhWVozgeewVy5twN8UF2c2xojAxDf5C",
  "key34": "7VzN6aGV5KreQ5NdCW3VAJvccDTRLvVvjNMr1GGvGW4YcLtSLYhc3WGq2aEW3938f4JezpWqNBiH3eJuxHU8HsJ",
  "key35": "3yUaWGR114CxE46iyBaCk8V1xTTcaW3yW8PoEpY1Y9xTMk2MB2sNBsVuf6pniwgU8Xoo5pwzrbMFtRbNhZn7mUvY",
  "key36": "5QdXaLPqMYndC4SRZ363Kd86PEzdxdRrWdHQ2kCnpDMiLSFqtoeWYEJDRqhVXHBvPJtKBvyccoxJezEKDTnonAvb",
  "key37": "bdazfxfgaciGxbmytdm6nXhBp8Kaz6fvTRTRhtuyEx9JEnGYBHumAmkSYb4PM2Vvty7mjh8VHEGc8VoN6UtsXRh",
  "key38": "442KJqgxfMhgxg1U6i3XmAQwyFAopJS3JCVh15jUmjcFUkXYjpCCQfQUdPhkaSV9mErooZn7JNmPqKzLmccSBCY2",
  "key39": "3twnbTTScXQxNx8aSzQhey1WZwu6XsQAbtxsfBqwX76PurBrNF9CH1gUR5Ljm6eJf1yVbnj27SJvspVRQCTxQQfq",
  "key40": "4rTvwZKMzyfUJZSe9Fwnk27ogiajHFhwp6r1X1uu1R9zv9PfnrYtAXX9VzScT7dmZ1amXErNxq8VPsAutGSfrmFw",
  "key41": "43mQTRb1JujXE3T9rjtqxR3q592RRH8V9Gf3YaGCnL565DZ9A2ahxWeC2QSxxS7ZkFB6guczxbpSkwxciRkHLGVw",
  "key42": "4r6s1Bgvr4iWcM1MabiioJ33evqrSYJugVZYyYRNNLhF7esS4imL9o1mtsmtvEAKC57RmPwmZEzPGEiJ3kR9PLMZ",
  "key43": "3WP6qJv6prWUzrodZHZ4vNvYgKZngtcb5LKZpEu4DKTePNd7YTpm4RsyzB6Rh4JBmKVYAN2dqyuuDcMiSWqqkCTj",
  "key44": "3yKEeC6bWTzQ7oWeRTWS9SZRvzRQJJ7oZihNJ951GGDDjcw4WGxTbqVTrqVXFfDh2dXzJVXEa3Y1SNjD7u1ebJJa",
  "key45": "2X4f1ukPBHzxbbse5VGGEQxAeYMenQRboyTEnYxYT5RPrjsUVQgqYKka7BSvHCaDnyUHUocD1GdwoCPBz6csnmHU",
  "key46": "2zd6m2fg3TuwWtgCBrF9mwaYHdb4Lx7EwqT7FrWuftLzyJxSxBqtTRFH6ZbB6CZH8NNzCmXXD4HJf2AL8WnQRJTn"
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
