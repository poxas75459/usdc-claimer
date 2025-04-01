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
    "4FkyvvhrdTzXBdoxjHSDWDHgbssmxfRp1oXgYAxXDf2WfKr9eeNE1VLLNtTAK7huvJjTsCThxAp7f1Z91ii3qRwu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iRLcaeCk8EYBBnFejZc7q8mVxBMoZvgEios4C8ME6ode5eyW6aiirKG4JcK8oLZnbt6ttBjZmoVREt9p3PcpSdC",
  "key1": "3TQLimAcK746sZ6wwimtR349yWGC2GXsLRvWexh8RXH2vsZ6R28q6VVpzLbxTG4rb9LBRX1iZrDFPgsro97gtsrT",
  "key2": "RFDukJqD6dTcXeEQy6bNfAeGPcSXZJbbHpTnvs6JZACjck859DtZUGVYrvLcQpWhynRxsCBgRvvStjgjWZzxh67",
  "key3": "2Uzw571SPVEP9rotZGmNMXkdacuz8aAPMgeec4MAcRLUC8NtCuYBwv5CCNQzDy424oqdZZeg5so6QRceEBmh2MwC",
  "key4": "5aJWF3P1DrkZSFfhqmPHqpMiSfqT3axkWHDwqDjHtrNUCMNruMNX256adub45UPiJgW4sBrwCLNmaSqRjKKCHRKx",
  "key5": "4NZNWsZSs6x5w3haNQhdzUsrxH2S8RuQmgBgpDr8NrwJhrT46dRzBPtPsZtT9AE2agkJij1n1bkT6WLVTeFaMXbd",
  "key6": "57DaoLcZ52gu8qzrXK4YaN4PeiqofBomCr8Nwe9EvDLEAYxmJkYjygeKwVn4PvjEV1gErrtFQAkEZ9DS9yNAb6Hc",
  "key7": "5h2ZR2rqMjtq9YqDCgkGUvwsPdkL9raj5FUA9qEb9hw3DXzkbg3YxUudUZTxf4Nx944ghnRdJkAKeJcj18cGLLJD",
  "key8": "4QXtSinwpiBq7ocijDpukyqV9AW19EA4EGAySNd1hyeEzNftaZJivYHWm9rAfNkKQQJMoskzjWeArDPtYYyCEibm",
  "key9": "4293bfqj6Pe3D5TcR1nmi2UjW5R5Zw4aTNZau4F53Sv9ZKoABoS1DkngGBoKNNqSfHPCL2pdJPLZXQnTgY9oVfyC",
  "key10": "5oCMWbYrhLv5s4TbPynoWRKTLVGukPeADrCw2W7dGQzk83rhKz7Gd8yhS1v4PB4PXePgkttCYpm1MPWRmhLSJcuw",
  "key11": "3aP11WCfc64uYdkLxKBJbDn9KBmYYxz5Eat9hmTqu2G4Pwv3JdL6ACp152cPpg9h9B4JcP2A3TevLwTfieDwdwBE",
  "key12": "GGePucKkgSsQ3e3nrdqHRtsoPbFeemY1AUaUncs3c1zgF9SJy2idVxtshBFXNxcXHjr4VaGkCkdhAAehmJUZTsk",
  "key13": "3THnN1RUA35vJq92NUdQpfWxXnJ4L4QQVUrWZG26D3iKLKh3bp1LDrwN52cn6zbAQNF9DJhmVZ8FMTA4Vo8NH9fM",
  "key14": "GSfrC3r49JZBeXbJWrPqhjtQWRswYmnsNPTBctWCwrjfNMmBizPAUEmmd4nC2B5kWP6gFs6xU6gr4D3TXKJ5t7e",
  "key15": "5aAoDixK4CRx7W5PoZFhWSyZ5Bfv4EnGRHPQWMd5KVfUdrNUrjLKrbbqBE7ne5NYeFXqAZFHLBLbJ4q8o8G6y6uW",
  "key16": "67PHG7xYfrdcYCYHte1P8aGozMfKeYfcFYRRUZBAD5TVSJ2GLkXi3JLBC5qoJtFdCrPqoW3uUu3tpAVkz9FZHY8L",
  "key17": "t1DRaaa3q7hmpqHGDUXix9hKZevLeKkKVdyki1cdbmzPebJHWCXjRLXZG9L7f1SRS39V8HVvrMvenkAywFyquop",
  "key18": "4Mq3RY7z9vkghC5aRyJpduyDrbqe4qPQ6qc1caWkFGf4JJMKPuQMaxj4kLJJWWKARPNmDerBwK3DyVmP2i4geEB4",
  "key19": "32FagHi3YDYW7JmFvRTHwJw7L1Q2hYmUvxnYkim1x846V3nfA9ejtcZsu3oN616j8ravstyKbmyn3BW17XVGvPXX",
  "key20": "3ZNtBcYRaQA31iH5DCZg6XbMe5iAiA9torjPwfZnBb9ADpjav5apaCpZAy3s6BAQxE3VE8Rps9qNXTgsPxHMLaMt",
  "key21": "4eeGV7iM2uqk1nbZ6H9pKQhZ3XxWmAuZEE57uoyAjUr4bg3nFwBgaogGtGLWQqbAZAFyezv9D1TEydtPcTtWvYFe",
  "key22": "5s5DjKCBYtxcYvu3eCFQM5q4oH5EVNsc1AQ2ro293Gy32Ye2j4w8Uu8mCnKoqqCP6cS4mKFCihiMH6KPHvzvw6K9",
  "key23": "2PVawDLNSc4UL569h4d3naCAoJ5ENohGwinPSN2h7cQMEA1AtZP1LcW6L2hoJSF2ijKSA3tSFZdcRJt6dk34sgsG",
  "key24": "2Mr4eT7vMETUkcSaqimBKJdxpAyUBWzqQwBge59T5XrNvvTzoqiMDG1AiTcvVkuKqn7Fpoec6QUhWvGPdV66uZh6",
  "key25": "33c5pweMtfsJYT55mAjww3V5Gh57E3QdMXRJooijRnobsHKjh6CNfxPsyasaFduqK6L2fDnnyQakjfnxocwYnuKB",
  "key26": "457gv2qeqYy18pdpjuDUdkZMhV27AymjKGKNXa7tPGGQGBGqpMVrB7W8JBhTg4h9Dac8QkA7A4BnaCoysrhhA3HP",
  "key27": "3szyP1gxzQitms2gaSHLXA51bcCw1xtEDN47hqES2tS1rkaKrPK3RNLDm6DD6QvPFKNxzmGPgkttR95aXsPGACpi",
  "key28": "3CXT1hFx22Yq4yZNU39Nxm1pCWJN1zLGebB17bGGhBaFYJpKRyhpcZjmXCPEV5FVw89N46NhRGTXGtvzyjQVRh9v",
  "key29": "3fP58d6FE5dGwzkNdfKovNjgUw6fZgJQngG1R2vCdvbNza7nNZpjZe5LKpNS8tTDUADGuFgQzqdjG66zUx7saZQZ",
  "key30": "51MC31BMDfqS4prK7UecDmNu5Axei7B1oJk9SuLypnK9hGxQnju8wGvuPWLdEoKYwQayNN4rDemjqEGVF9CwzVwN",
  "key31": "4FyxGv1ogtp8w1pRcJzdk5LW24NjRVd2XuMs4TodrEbEm4mKzx5aCHbAnN8wvL7hgdf8yBXuGkJEJnfXV11J711u",
  "key32": "3AedcUq4ZhrfUUfPKNFfEDwmppeSUhog8AJBGkm2mwaokXdDogvKXuCjMLBcozZi34yTqmD9bXpdb1gAYnMfvig",
  "key33": "TiHiZ5Yg9pPMvgtsRkgsS22r6zAkXBFJNtZiAWS3UghkKXTeszTqyZgEzaya4VfVPY2o1uJD6ikw5shh4JvwCo4",
  "key34": "3JadsmpUa3CLQ4Qi4GEW1UDsRYQPofRcH39a6yaC8mmnkQpbe6ePKotANwJks2vqyAWnmtV5Q5RwPN83w2iJdWza",
  "key35": "4WFxhX4E5rp7BWkLKnHit9mjxc6wZANH3esKbGaTeuJQwXgxr7MFUABfHmFxt5xDCyKeeotsFSxWir4TMCifmByX",
  "key36": "2xEtZ8xJKxEHi5BFZphGpLcizMDSqWdG5ybmUxZG5YWfRy46vwwZGPHFQ7yDqF3CbNdPjCPj22KccCMT58hdJ8xz",
  "key37": "3GSNvFe6iw2DdfuKBJzmzr5EyAhKtXUrXJobCpUZL8tesqWQ8f2tUUFQ8CMtGQQi2Ykb9stBNNH9dUZT4aCWJHLU",
  "key38": "5HKt2Tje1eX9ZxD3sQQLiQAK5ShP7PmEXghZzbJ4QuqAhCTDNTJiFMU3aKjTi9sv6HeftYPGvMF31gEgPTjHQckh",
  "key39": "3pk7AKn9axqCpfnQLjYsbVF8EA4MNBmYwwdfvyd21tX11NajENCxgRVcpKsmB2r1HAqjtpJACKvHzn64XkfVrovc",
  "key40": "3WK2CHWBuYojZW41XKGqG4PRWy3hHsVuBRaos1TjfkpdpMZEDjH6frQYsWemSTPqX5LBWM2bzbMR6zEbbRAAAJmt",
  "key41": "4ptf9Fy19Pn1o8T1sfH59eZQwRFJUVfG9oEY3KwVkJkSkXxuZBFuEAB4csYDSUsfzzSCivKfq8otNpSXgjJHUCE1",
  "key42": "4b22wAVRqHsp9iNjHSc8hWf4dHKkCiY7NSTbVCzo5twwkxAC95DyX2rTmxDwcxLw5bDhCXftMxkcw6ryKTeFdMif",
  "key43": "WE4Q1csoN5s6hpjyHG5Zbgid84v1VTFoWtZjxj9o2wN7pM1tENKQQFH54Q3DdzrfMjMgaWq6EQdz9pTu7HXzC4J",
  "key44": "2PkqvBaAQDJCwMcoL84HGjPTmsoP7Jk9YgtJqYv379AXq6kv5EcRkZ2ydJnucAPW3TiefsrJ2tMG95Tg2Xv55nZ7",
  "key45": "3Ar6jRCkG2Zs7pHQJkvLYX4SwZwhGUC5giMgUTXkVtc2HqC9RV3t9qCTUbX5TgALGJ8ipNopDn6PWxqPbTA3qefd",
  "key46": "3i5oCnHEQz2Qtgb5aCErcPSB2CtWVx3ADwV2mLDqoWkj4asooqTYrwobFdPNjLgNUKB6z16WakHwFgrNVvPJ9d4f"
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
