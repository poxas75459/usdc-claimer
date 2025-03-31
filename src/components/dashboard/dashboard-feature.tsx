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
    "5ivKmjp3QCjh8fM4JuCUPa6UxV3kKcXQoF7zwuRNLAa122whEtKPKq4UXYtXpGs3H84ZwVgCEVpUic3MhNq3ibMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X9mHoxCUiBTy3MZQc7y6S7nNCpYZ3LczzQ82mT3wcqApSoKnY484dSvQFRTVmTaa6N3eJZXrCh2oxRbXVBoWdBb",
  "key1": "2LHbg32yD3aqZrzAyFQWbigyrBnFR6wDzpPQ8LasnkNyYYpNSE4iVdHgzrdxEUFxPqegb886NLmWo1F9fu68Tg4C",
  "key2": "656nfNvMZ5zpLx59Z7SnYs3s3cvBn8zBLbiysw45uvfshJU1tbTfT3nks2f9PxHB9quWpcpW62yQx3VEsdMdquGm",
  "key3": "4XgEfmxAtvPz16iRzkgz1rTnSpwixeaUXBVwTGGw5zj6ynecxuF9DsFd4AVneqzXpVXKNgrpSSTooCHEBAdcqLME",
  "key4": "2dBTNqbBAYfN8bJKQwTKj7d7GgawB85zFzzBH2AWhxEtiYEgKhs5K1oJxA6SCt2KaGLStEocZjfxFcRgSJxyrxKT",
  "key5": "4QTBCaCpPSfFJ1iXMNVq1Z7XXPZxex8toYYitGj9zQyPe2Qswtxn4CXdhAEtLapY6t8CsTCVHqEXpGiVR9n51FV2",
  "key6": "43L5dzGcLpeWyRZDR54W6zfajtrv9DK6YVo2qs3aghstjYWQw1rnmyrSA77kuEd3mYLST1hqw2GLLJBZEh7DRix3",
  "key7": "4p4MjPJmMz3TTWb8bNd4GKpiMESmjBd3nXXB1BqD6FwCbQY3gPzKNR8dr6YgXJjSVWtYxgpuYtTfdFq35X2Sb4dz",
  "key8": "5oAbB2SiuVvJgx8rgkPRoQ3d76N9yk5PvTKydEgoB71i1wLVjUWoeDpFKcBCNE9i5iP3HaNfUHA1rT9bkmr7r54k",
  "key9": "PUGmtr6CKjrqZCmDuVJxUbApmRSVrtEe26VJJx6RDhrQ3PhdfoFrNtDK5d21C3jexQ7CyJnCZGz42bhz6E31hVk",
  "key10": "DtWJNg5U2czLHW6bfSVSX2PUQ9Mvrg4gtN1DysyKtrcvGq6TtTiGxxCs4SQo5tiz3XsBVcB5FW9J9sP6jdtGPq3",
  "key11": "2Ac2JoeMwstQTVrp4GBaSC7b1JB37LfsxgGWK7qBq4Dx6V5tLxJPDzV49gJdtAqGvET5XLVZgXVTSw5Xzz3jjcBh",
  "key12": "3nGE1ZaBbQyDj6D3BMJfF976yotBYLLnxckQyDbUV6Af7RtkSaiHq57eREKQvpHeVxoP6VXNt3Y7rF1W1v5Up3MG",
  "key13": "63g8uVc9XUCyPe3R9mT76BUxefzphJ48n2zMQWJzPaVHRveoLGXYjastteAh9D4HHbU2SdozJWfiNDJFpuueCxpB",
  "key14": "5y29Dip2WEeE9LwcyvbQNCuqsGH7j5FQzjPNkkcAMC6zSd2oQBw5WsANCSQHjw2wHpwcfLr6yWvwbGpz9RrBNqj9",
  "key15": "5oWogvsPNvqPwf9EQHp8umVqHDFZ333nmRniLRVwSTy4YXu6MFk82jibVzv5cZAEV2pGw5buhjrouafDiQRWGRqa",
  "key16": "2iFjTDpn7XKyDTGNFHHLk1A1zqEPfFSHrVixvPQjWLkaipoZqaESspEFH4vPe8yMdijWq4BbBsbseXf9UfodmnZp",
  "key17": "5UB4di7kktLFiaTA7N4k6ZSpz1ojUm6u1JWBMoKQ4n41nhdKPeVuw1ptLCkMxHESEsKai2oVaGb5cojyzVbq7gMW",
  "key18": "2aR1CsxRkvVxtLvffqXWkCLCxSoNaq7thYjtXTNBA4gkEreS7VkmMdUr4X6GgVL5nEaSndmBKbuEUeF9QCWQHLmH",
  "key19": "LNpn63Wk662RJhUVoCQiDYaqcaweGi5rt3eqBbSJnYWGq7bRWpcrgyVM9fejZnbmpfJ4DBb8b8rog3imJsEG9UP",
  "key20": "3Dejt6Rsszuy9E5A2ShizZJ5Xh7Ua6MRGN6BERfDHM7JTnZc9NS3ytgSkNLiZQN9UB1utmVQShG7oeBuJHckHJHg",
  "key21": "3cosXH8nGoZRoRE2DHQzSxYGY7EciLWHF191x2ytsaiAySFaZcGa77bhQiy53K7TrmRpjbbVHE3rYhuXtdt7eEG9",
  "key22": "4CAZNas4SJrPNJQfAqs5JBSQ6PDKWXCVn2FKKsK5Lz9Jsa45bkMQEzQXYUNzcKvDaXznven9GDWs4XM4fFXG5fEk",
  "key23": "4yZW3LXrdC4itdfbZ9We7DRL6WxyD3LH1AUJNoazjvJFXKykZCde79ELnjSxN2xtCXKPdVY7tGjeNNTC57rBc8Ry",
  "key24": "58j9pR7AZN1UcQ7oH8RAtvDjRR3MBUuz7tNsJEEGuWdqp4kJp15H3ZHPHgKuPTyfaUsR3McswkYdaiub1VqpczXA",
  "key25": "5NnfwChvpXVHTYytmvvGsqfkmemREiu7kCQvgsPNmMyPU8ghFZMMyFYpDgLTgEXm83sN7y34kh3NvdVvhW2ZLVXP",
  "key26": "Sp2Xzt2kxVbG1m2UXMngirWCdCu8aSpztoNUxJ6xfmXQxXb9Hnwd2BHiPqRjjHhmDddZqc4y51hjy5nBBmkz6v7",
  "key27": "5JcFVen1Xttd33AXhrM86dCvGRpystpLE6w8FUMXH99Tm6pgT4tydyZbnsVyuXZvDd7VvjDp1HzyVPqEpHTRCd5k",
  "key28": "syc6mwow7Ma28geECLhL9avCZqSTv8PtAyNNE13DYA6ewvmn67WkPGyyKzJtpCDTWQVhjwGVyhqS2fKmwDEwBC9",
  "key29": "23HxXUxgWbtL3wR6qmnuGxhcvG52NDc6NDFcRLnUzu7CNMtXX6e2hQMLHc4VsKJR2WQMPpT2tVErH17wqYxpRttU",
  "key30": "2PF5ZqE7fBAjoGnLDgsq7MgGEpSdM8KkveLVsaAntKdMoimwuFKhXE7Ae8v6J7gz3PmP3hWYF6rijsSDHLYef4Z2",
  "key31": "5CxbPUqJAbpWBmrAjiU6ygC4wSfibhp2ZZDjdqCR2tAWppisWTL5wV6GssogwdYD8Z5X8spPwoUqAC9gTsMBRdiM",
  "key32": "657bJ4GRS16f513x64d68fT5KYrdgk282sfRSRma5nxzQVAP8xEQ3wuhtVF4DFJQu27e5dt8PzFNaQnt7reS15yk",
  "key33": "22wiVTtqWKNfh4SNMEGqX3SSebkedDo3aTDYmUbZKwxyVmmW7UrHCu5PUm8dYbDp4Z93buaGzeGan4Kdg9mWughY",
  "key34": "4voTJeTGQqxtPGX2jyP34LF5kvmp5Q7YRvG3pbdVTJN9Aj1TWumz187dhW2PpLiTEbBYH7Su5EgCuvYUXDuZWUy7",
  "key35": "4Re7Br4PC84BN9jMSVedjDryoaeNxwyn8fMXv2TqHdmLscz6WGXNPr949Hz1VQawtLnEYB1zpLHGpeP1mcfS3wb6",
  "key36": "2RSYwGwxJJyy9QDjEW8PHxqxvs9tD2w4nWswB58ZFSdkW3L66EkcVABLzPTKiAjPNWyZ9dvwpwjgZ7pshUY6TwxN"
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
