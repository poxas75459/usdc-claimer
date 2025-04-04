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
    "5yzK6Nqp1ENFd9N5wk7KuuGcNCsgNhxjRF598zVp4NPwZPmgtpLrWoUf8i99GbxHpJN3SEDo6ykYdqiYRHDLDkBt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21MqfjYg7hTfvjvUfUm1v2Dqk1rDqJWQQLm53T5WpdP4XN65B89CuyS8UVamz51hdvSG1MApoGa3L3xghTV6qcag",
  "key1": "4wWtMvwKC1TiXWnkqvmUiuJfcP6YYamkhe3hadwXfXfgMZ3ghuWoVFgvGZ9CqjmWCkk2TqaCA8ASAYwxHhcQyoyX",
  "key2": "4sPxeuKG4CburrMND4vEkEL3QTZFx8TmKUfz5irH3DVjSJsPHD8wS21htDHgJAN9gWYxBS3dG2fsGiy68zWpjrnv",
  "key3": "3Pa8T3JDsTEqSd7f3cQQqegDze9zeUdzgM3sRegQbFc4QKmUtoi6xEWUpoghWrctZbg2Zm3JTNHS2TaA7rjHxY15",
  "key4": "5sjDQc6A7YzivkQeJuC3AWYdLisavE6S4n7prMV8XZzaCYjntkHRH1ARq1Bdu9SQDa4eGjEnHTJoz8Fq529DVfbu",
  "key5": "5C2ajgrXJXJu4WgCfpScpeyZAVR8sqbG9BjXhAx4nyRQYUnZvpCsJeHuoGtNgDbu32rrfQQMKgYTvPZVAExvBWB2",
  "key6": "XhhzxKQwHK9wUzUWoMtCsaBaMkHADFiPYVAiikRoUEw3F1PesvVctkcjnc3XdeQexkWU25Tk5gXeaMedzc2zwwt",
  "key7": "ucnxxpmQ2vc37s9pnYodYKExEp7dqF3gL8K6gvnFH7MkfViZrgyF48pWVwG1seRU3n2j2b4ooT6vhCxqfi22xiN",
  "key8": "3qyGxijmQuVT4yT24B3tEDEszE4ExTnfkZbKLRevAJfGqxLKGDGT58ePi3XH5ivVi45qupUp1GKqC8vrhUSbphhT",
  "key9": "2MsBxwSQfcBmpgUxm2ZSYFR8rP9513mbNv7vh5U5v9Coo6hu9NneysVv583mLVu1TyZQQJfrwvfSuUGH8UfTWgyN",
  "key10": "35tyD2JMSQhvzNh16wzFnUGgjsgkWaCJGPiA4QVsxeYNDxNtu6i5EE4XNvjK2HnATFuttAy2x9hQFaGLkzQZS3Ks",
  "key11": "2o7vQsB9nnpuiYLsUugZXPr3t1Pwkh2pUqxw7zBWrTJ3mUpRzzKGrN5NmqWGFtgZ5jxBqSW1Vd97j8nNFNsZtwc5",
  "key12": "43h9BU2A6rpMUQ78sF7hMi89u9gEJay9ztZspHfcpweBLRAK8cvRDyW39qbtWSq7uUjPQWwQF7jzsMRCHkaL44N8",
  "key13": "4RrdhNJHWbAB2nEpGJmWphtx6L2TVCWKn2178u1KJHfc4dmjSqYGD9ceNxL7Bxm5rKNwR7DSbkYSdMexqiLBaBAN",
  "key14": "4Qt25YubnDFzjnoe9Hp7hQX4GDFeTJt7HuL4P892j9TBeaTW6D9YebdA2U2BizjouAzcNWLYwtWSpEkxz54PMqEg",
  "key15": "2KoVy7Kmm9qRketSZ2Fp8sTRxzAFp7WYxG6kvbiPvkwbd3VF2vVCKEaU9AzPZdxJotH4A4jKpd11T7JBrJRUVKPk",
  "key16": "NxmiG8q1xj9pV32MM3cY917o1bVVHKDAga65VkQg9duSXDX6Z2fuAh7YgrqdaMVgQjieM26fr16LPeSb24tMj52",
  "key17": "5C4XRaZinFxyY3uswfqZvg6vFwru8NAWfwEuegkJbv65iD8yGf73WaxgQSkY5AjsU5Wj7aE2uzTP1HxRcQjP7yAb",
  "key18": "ngtW7u8CHqvEKjCFGo7KtWH8bpuyatUyb24mbo2h1j6gEDk1YwTwwsGYuhcQ1LkK1jfcvQWohFV6uJLENG18w3v",
  "key19": "2APusedr1MixnXwLSKPjBNRjfnxEqxpjJFjiUzEtBBxMc7p6x87kNUwo8Mx9meaZ8MHHhmuss2E6SBSvojD7HRpe",
  "key20": "pthfaXmMshY63byEc9yDMZHsocnWinGRB1yRa5xKqQH9xgY5grYAyCW35dZGqiyG15LCC54QPH1HpydkVthYfnw",
  "key21": "4kZB3QZM1fdQ3NCjGSKiyZLHM1wGyVBPSRmv5jfQZ91ZXP5PVRTHCiQHYYqPT8uz7LvsXvHav8wsF5yK3Xtxj7zH",
  "key22": "2k9xSj3uyakiSKEK5q8o2bQKTKLAKY8LiUK8cFUozHmN6YbQFj1hemcaPQNg6TVSpVywMqv1VDt5oKRu3ntoJHMo",
  "key23": "3oPywLxWndiR2hYmRTU9vxWtErwM8ZfMnHKBpx5sT7ydiYzrKyTjzzmYCsku6SBzw4H2myu98fgaWPW3TcU35WF6",
  "key24": "BB23PPRG4HucFtaqpRp5MqTqsCV595n6aJT7u95mAMBTiLPjRj8KNpiFsEvjp1APqJ3HXUE1x9NNVx2BmLWj6MU",
  "key25": "rby3vEjLnFxgvVRnquzZyVyqkPDugcyVwq2o6Ja1rNFwChip8QUknRuTjj5fpwr4t2B9UhtBRqPXQBEBA2KspEW",
  "key26": "45hNBjfvMk6W9xPv5Jo7c37KzBusnvTddwTq3pFBkiBRAGug32yEmegt9vKehNiVf5TpVzNhnxF9MWCJH5WESpfV",
  "key27": "4J3VyYphoaLH67XU9LdJXRAL2RX5zByFcetqA17UTQ8LvhFzVykZ5eS9nc2bh1eG8XKduptmpDAuhQ3D3v6fX9nh",
  "key28": "3UFLfykjrY5RpLQsNmArDZ2tQeCqRCQDRhrXMb42UqX19TdYzLMkcovtcorzCyP8NEuDdxAMGgitHnSKhUFsW4pw",
  "key29": "L6edzpYvAW79g2sG6AaKcEfHgMg2UnytkTw3FTrHvUH4f7asL9fwdGeTwFpiQUeRDaGidHbXFugSarU7qqyfpsQ",
  "key30": "2oEHXHtHbitJnjPuJieADym7garNRTdP21QLcMWJyHYJJhwghgNNw5HXGTtLPqhhtZyGLv8ienuNMyEMu3TrLFK3",
  "key31": "457RXAgXVaq1cpKcakaQpJHS4BcJ2sx8Am52iqn2xjjWzkdUQLZZ5ssFyvxxTHvpUqMm1B5GQK8CEG97fDUXmeLX",
  "key32": "3r4bCzPRTB3mnbQaAvasoEANN3Bwq5DAnEYp2QCT7oCm4r8zs9CFQ7vcTskEVYybBLLtHTYvdUw4Y91FbmdNgTp3",
  "key33": "3Vh4HkZsCY3ME9grSJJs4XnBEUNKCbhgwdhX4HLxck18B4SFTDFanmV9Dptw3nFF3VsLTiNcTi2Q4NFWNT67fbP8",
  "key34": "3qH84rHEqk7BG8ZzFMUCAcU5TLZEaKubQEC8LHGjXvfA1rC7q7fK19mkPB8kcgqZoixRLaZYXCB62dMiQLBHrFBo",
  "key35": "3domcgebmpGXgmruhcihzLkfL2xPbRVYpbE7gtzXrFEbjrWoLhcg1As4zfPAJNLBxtm5WFvMa7k9HEF2q6N9wfyw",
  "key36": "3TuciUAJBfzABFHRdq8WxX6gRux9iokaDFcP3DVzWtTyBqsqrsxQKJtoSBJoQGLmqQXbvdJFp6a6jxzshFS7wEbf",
  "key37": "4wpbkVnX1rdkiBu97dSuRRXXbpT1j85XFGxwspjLuwsybBhbMTGNGCPXdrVsbssGChqqHYAuBxWMuyf7rs7WGpbK"
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
