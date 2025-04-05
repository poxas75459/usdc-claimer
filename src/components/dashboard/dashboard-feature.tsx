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
    "3UkcWMxA1aNp2NQRdX6t7wBcwy4eLXHAi5h28CfyMAR1heFVKv8JTzYMkatzad8ZYZiUWQwaiCkF2MFDA5PzGYbr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pP96ACT87yzs5tboEXYvioU9rYjLYZgNcTvDAEJs33fMwQwDPxk1txX4RXHftx31ebeVguD5mf12pWGkJxK6pwB",
  "key1": "45Xjf5An1pBtPXo1N2adwXk28EJ4r7SQLT2ovYWJoVKLyvoXBrU1XkZ4v9RLgYNi5oPoaN4pX8Weqr5z2JB7Rvhv",
  "key2": "5Nuk2fQR9YBmwPwak5zGMPkDJLwdqFGVSt7fygYWmTGk7wEFrgKJn163qTvjoBvmxJMAzfZrmDF7AnLC6piK2hwg",
  "key3": "bDAPcncHsCVvjPrC9wxBDvRzhUWuJvtm5y4TVy2TkQ5PRdhqu1ymwLXb9rAu8rkEz8CZpQonuZgMH1YSDFwuzab",
  "key4": "mQzZrsaK99zkKoTGpCJ74wiwHod4y8YSLcFVqCjiZiQmGHTF5Ldc6GRHmVnbRxcgysfdy1AyH5dehbHLET8Fk5Q",
  "key5": "2dv6kWPRNWBv9JLeaMF1Fv3sCcjhh8ELjicsTQXLxKPjjTQg1PokUz6PpPDnuUExyitwcYEASCZuLcXNXmzkJQDk",
  "key6": "yUTspAfM4YNbnZmpqeN4qLJe1HEehQwHfyPmvSyaZGCWnyvQo2StJtCWtV5VFcrbCpvBSJwHJgbYg1T26eUcvz8",
  "key7": "36g6nxydDkZcHiQsXt4rFKBPUcpaFajDoqodCEp2qGpdeHK7qwANVTn9ojf3X7UskXxXpNzxXkJMFQTo47tCz6xN",
  "key8": "2HfL5zC3ecGMTN84Qm6TkdpiSJycwV1dJX1q7czVb4qovjiWRzx2vqfA7LTRpbJGbSBqytGKXgJWDn5HJtuFZzMz",
  "key9": "5Gqkmy8r6GoLpxUm8AKGEA1MdrSjEn3rWZA9B1v7zfadFs4VEc5Z12muL1ZJcGfb5WcKWoysMjHq62i98eSdybgR",
  "key10": "cVQe75U2Nm7bMuWyoYiMFTiFLdeHwwTKvSHG6GtsPv79LCz3mzmQhN3r7rNv729G7kHXgHTSAznGf5Q6HsLSBTf",
  "key11": "2twFiQ7vJodsbzBvyKs5Z5yiqRZp3cpcvqBp1ZibFifjzBAMv5tdGFSSnDPPdMdCrPNhPPohAChTdQwWTp6oFSxX",
  "key12": "3BzGpsGwzmN6q9Prjd9eerCNMuz7G7r9AcvBmi1sAKJ5hCAacki3KU1pL4rhYfyWnrHvSB8fApdg3rZTMPsirjS2",
  "key13": "2CE1rUCGdhwsvfi9PMZqqFEzPdmadVtts9yF2ieF3PMTa5vJLQ6K3o7iUevbcKt1qHChaSKckKLWZhFsmLHt4BH6",
  "key14": "5TqozTFxMASSTPFdfqMPKJfLkas91ZkwGGT9YJEsUd5EzMPdsZ3as5hRFcJWoZyiNe9uaQXDL4xnw4SS58LJ8NNa",
  "key15": "3DePQSYYvq3cyCZmMg4YNgoXivKB8Nv3tuct54qGfsup4tfit185MNBWFP1wEV5u7JR18No1WAYpB78xVRmo7UM3",
  "key16": "pmrHRaw9oZRPDHTHLNoPRb6ez8KM4tQSaTZ3YJfZJ7P4hcrNVHm7FHLAzUq5xLHupH2H2dMXdCYSPtfsqLFUEB9",
  "key17": "257dzDL8iCCiPJ3hz8fmpkMoAzRuzvk15oRmQAwo938BaPYsia6VUPtTvytcoZ2RpseHJLQnuUiqXSPkZaa3zb5Z",
  "key18": "21dND2GoHR7vJHQKwm5s6CVeepU3B7GUtBSJ4Djaj2ZsixpSpdpmMAiKS1K7BHcQ7PGGvJTgbZvs3RPndZXHKC9s",
  "key19": "XGxwE6jMU1CbeYHaf27P4T1vprkMqVZRBM5hz58MtL76krNUXeX99eHRHKmmq7odQY3nDMCw9mHpWviHoPQH2Ex",
  "key20": "4ZqJtvQxUSE8mdGJpP343U32Y6vyX8PQAikRTz44YyzpiCDGa7EvePp2dgM7DdP8jypTW8iTxkZLu4nKffKw95wo",
  "key21": "SSqmhkzLByhzjeaYcuarRXxAXfayHnffqPJgbLsYppEdwNsCN9EYDTrHqowjqNtGd5syPbcHR4PsE2xPgaQEf4p",
  "key22": "4A8afsWBWLDHzwoLwSd96JD3gyCntu1cQgczreombEcGd6aqPw6YxVow86FfAnS31B6Zed3N9jur9NHGeDRjBo8V",
  "key23": "4YXZ4419KdecU9zCbppn7G7Enqwvar3ZMGfgvs1pQ5PHroayqCY8tHd4t2gz9p9eVhF2NpZmjPmM6a7Er4GwZWXG",
  "key24": "2v2QUpUM2rBYC7TVpTKyv2fPqUyGk8MSJ6UJ6H7DUCpkg8vRQH5wHdnW8ENoyk94PG2xkhCeQaSB2yYLsJgeprFK",
  "key25": "3vZzcePgGR7q9AQvKJkWRNqAud3Kv3xxa5U46c1dAM7rm7M6uGzMGvec9Uoy53Q1T143uToGkV1v5HX7NdUEnoTa",
  "key26": "5c2kcYXKxMMZwCdHoUGHM8NTjBP64oa5PTD6vWiSWYGJxHt9n8FPeAFtG43SJRpADKScaDfY1EMqw9JVfB2wAoWL",
  "key27": "5Bjn7QDJRf2XBsNr7sAi1QmKvGGnL8hjAPYDS2A1CN47QoNJ28bcj3hKWimMBHBhqMpb5fvM7qRKdNELpKEruTxB",
  "key28": "2myE6sXX6US9vQ1o74u98bmuhT41uhtweeZDw1YZYuLzM7S84VcUz7FpvVrghbjv9A3dyzj6YHLzhQA3Mg8eukHU",
  "key29": "21VzUebQ3H8ohT7KUGJ9GVQ9NnTYXoAXTLD4ufxMVuBvMX82PjrHpkrXe8Ls2WF94AnAQLEzxikKVFj7VHzka8hU",
  "key30": "4H2s2mPEFG2UoMeJ2q6MqUh5uL85md6RztHCiCmiFbAj3aq6AHVbsGhkveqrNZVYDsanAW6tbEJTtvR8f5uASf3U",
  "key31": "5MGPgJYqpmJgwWi2wwdDNPZWchCXjcm34NpvZqkVC8TDEf9uNceEw9vP3d82r4P2cXA4PM44C9RzTzoo7GWQTn4p",
  "key32": "D5WZAcGHmCE7z1ipCcgBk429EiE5mQ3CbeioiQu9zaPDu13mVVPosJCALMXL1GChT1HrhqkJTUqxGu4Ts8g584p",
  "key33": "3HgbHvzTzJ4ipKQ9U4nLnnxeaqnaupV8nE6AtT4U6PkveNKDNxRhyxuAVkw1FhZouUcsvMGQiSjm7MfJqzEiRo1c",
  "key34": "23YqsND9aCB5ftbq77sn9HmbsrPQSdZ8uLTqwaUDVEGEcN2khgWBYCWy8GXAGaVuQkPkmk1z7ZtCTiXRagRMLv2N",
  "key35": "qS2mma1KhHGjjn9qxPorBtMrtLuVTXgzWyLZMpF9JkjdHZuyU66st8yz2ZdZMgi6CB3aHg3HgkMheYtArYAifox",
  "key36": "qnaQ2VPCvCt4jmdHoReBLs5iGtdLySEJuSKjNVtpQ6ibRo43PPk497WFKxRTKtBUukqxL2YJSgwMMeAzQFQXJpi",
  "key37": "5mW7yqABMpix4unHLFfMVeSZ3aboGhECaj9z2W8T6XCCETH3ZNfUNot1GzZsHebKLrjKpjFGx2a2y24Xmyatbp2E",
  "key38": "2UoP67rYhGPJsT2oF1kP4D5uWjK9axgx7oZVBXfqm4tNbKwpAKdZjzJS14vNVegtxRag8DVC7ykCaV4GJ1CNjeWk",
  "key39": "2JVNA3gDoEawPSNuPGzqBD5B8K17ZeiQRzGU21ZrP6U2AJan95E9H8bhvHPtvbGzN7NsDNZfkanSKZe117JSkxUa",
  "key40": "2PA6aLJPD5BzYTTZ4sVKy8XxvZmCoisNCmYnRvrib6LLPEwK1UTJSXxMt1ebwRo82AMnG3YbuujLK51XvjC3jVtQ",
  "key41": "3Hstmb8m1fjuUVSJWkgUBWjVvgKCuTryKErYcPwxm5x6YtaZJa76wcQ4G2k9BQGYqLdBUBzw43fukp6knBtpQmS5",
  "key42": "3dxW83czAfLiG5PA35Uu8axHV5krSGt6YRA5BdDDgrt8nBamWB3GDZudhcqb2EGFBstm69iWx75LghQgQdhZFN9D",
  "key43": "4CQYuXg2FVwj5YcDXW7bnFFFrN1HfPq6mzg9tFENjhCd2CHRGE7zEf6RCf3xFQgQLygQTcQgqiFadhrf7A2X6trz"
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
