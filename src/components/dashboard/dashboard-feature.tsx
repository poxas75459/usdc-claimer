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
    "3A9rnEQJrEuaXY3pN1N1cA4eXZDRTTyS4iqVEXSNcKJ3TpjNrkg753TbRiLhqHw9Z4aqnkbVprv6xQih4SxM6ga1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HadB4LZQj7ro5tivEb2RLbVn4fQiSRsBknjAEkZq8ZhaE1sUuxGxJ5jAm9rwpeZy7zvvaC7d9h4BAcaBoVk4YGQ",
  "key1": "3cJUjmQKnVfKvTRNvvqw6GogkUtEzKqVMPuFLc2fjX8Xgio8mP7kDMSU6AQxh9cESyaDQ5xwdn93RnAbMxm8zzCP",
  "key2": "59gxKQWtru377x7ATahGPThZj1PcoVsxKfrB3GXov4igY2uZNuCyf9qvA1TSJdysMeQUwnKdj1iKYr2drhZsCGAd",
  "key3": "2RaVQzxyE4UcH1vzm1HKfbmfp2btWTn8iSTVfgo8XJEqNTihSP7LbQds92ReLk7MLv7Ygrz5AmHAo7oNT7APbAhA",
  "key4": "4uoPBng4hBwbPenPZmnRvRHMgL1g5bGejV2h7gWatu8nyUFtt2e3UKwVZdP4ZxKBCPU7tj7NGVAhtvxP9SuKiWo1",
  "key5": "4KtisgABTtDoqqNDftuiFgjwe3NrHt4KFxmHuMHidZmHkv8o9SNMCrUyCQJRdDVxnszGXf2gHw9YhzF3V7noJ36m",
  "key6": "5ekgWE4FEdyvLaGHkqueofNYeGpWDRdW6vkWJkAheCWQz7sHHVN5FhoudUMSQkrzuCEzv2P5GzTvfkGjKBqndQpJ",
  "key7": "4TagZ3D5pF7YX8KRRAr9HmRfacRs2CN7AsTTuS7ZjobQFyBbA5o8HfZ3HXxR6suwQ6p3jjkJ9DC1DRpeoa1yU7DK",
  "key8": "4tutiTpoyPtXBgzUtfPK3ey6BpKq2uVePJJyjZBGxdZrAvxPsM6PHnpHug2osi888hPSFTj9fPrvqJ5GkPZM1a1m",
  "key9": "513RQ8WmgGwuBmBbV73gVwted1hUAejyostTdYsXuVJ3czA2VFiMTZvVZK4dtKp8G7BkBdFGsxEPWfZXyiKmRLNA",
  "key10": "4m7biUCrmM8urfi8g9ugb3BmvPJXN6pSHXwNouvDcfuWrQSnsXPVpe5ybRzRj9Vm7qVQRHKuPYCHZz2Vprj4H8dw",
  "key11": "51zyY8ZkBFgaCZJv6N85b4GMfeBrozCHyY2tPJ57W7LB12GfxswiyBfvJaDSXmafpXL3w4gX6YLnBeNQYYdKLzxH",
  "key12": "5XS4KKWYPnukfxyCq1wDYRLmJYffipWGAYMAPr8A93Ed3qZQe6fCdFsDHkQQ6oX9vdy1NomJXJcrxcfS945iHz9m",
  "key13": "5xNKbgjUY3TMXCx1iyESXu5trh24Yf3NfWnpYXkpg14eRrvKPSHKZHVJfYy6t1vyYoyM18NzRap6f866D7M4orhr",
  "key14": "MJkrmDiBtabKTawyXJBENa1Rr5VrzdkvCWpAi5rFNTHyR7YEeVGHjRyaKyQFKX7X43t2LBrFf1aVCYt1GUFunj1",
  "key15": "R2DU6jd6E3cpBvgSSHUnbFLthvVzo6NoMANoT8awLQskdyoz1NBNiK31RM6JWep73JuGfLFFgfS5US9Au3LFnhc",
  "key16": "3XxtVXUkR85hPSrmD7UEPgBYrh964x2stKtdAkesMpq65rynPq3NN7JJ6LwWcmhHznT3WnuVArJaxGnTdEtdt2qZ",
  "key17": "4u1GMiWdvfJYtnQpsgWtJDp2UbsoKxZbnqPE7H1rGYB3xAthPdPCw5cJdvwkTym4X5Qo5SYHkvVW6FmFqR7YsUnm",
  "key18": "4JxwQMvMV5ZJjnuaxUd4nqSj8gjGQZhvQjzXxWKR2Rtkw4keD14T1jD4XLVTZz7irLy2Zicy5EQE32b6iiidqpEP",
  "key19": "5zHT2skaS84MnmkdCFHLH7Ge1ErtiVW1nJw23FFhg43tpQTsGo7GTXwZrsHPd6ZcLQnfg7cWkw8PfoT9fvMMvgPR",
  "key20": "2BkLdccBQktfsxh3bUnpK56XmLpY7WBzMRqmrqiDc7Xb93fbRZL7Lvp65qd5cKJVAoSKnZYHjkubcWqPHKFFLasc",
  "key21": "64PRcJWvJizFqUhS8Bo6iKY8MF9P9CkJ7qDCEAarNqhQiQsEbwxsZYQpBW4CF5AAserPqe3XTvRXp7iqd41z4ZKT",
  "key22": "3FuquXToTc14ZBNHNhY8kdLXGrm9rCAufvTruSDfNSmMPNpRd6MP88GLzd8wMREabAZtN7h2oxkyDwzmdKkZTfzM",
  "key23": "BFptsMQUujPuexdVAtH2stNxfycDWUQvgEgvjAtdeyF8Sni73hGKnSoesbz7rATTde7CKpTWukvEwSPVr8ryY6q",
  "key24": "sXeDMSEhSiKUAwW2TipiopLbVP45HXYPCzYGgRRxhpmauADuUvK1cBsv1nTwzH9NU6N7jdLpyzQNztYffmfH4n1",
  "key25": "2vx9N3xqNu27xWXaRJLopMwL7F92wUnCXVHSguaZ5ZPxpnnt4wVvwNxnFLuwQh844Re7BWGjmUSFVk8isazBDFVw",
  "key26": "52zhmz1gTHA1Fpq9e1TbWjD1Nt3GFuLFbap8fPV9EU9pFzGgSdma6LS9Etxr2JXryiLAPCAtFwEh7DPHgzB7ggC6",
  "key27": "3xe4yjytJU54BqtjT54cFsmAEjjyrMHQJcmXw536zqkASPRyGUgqsRXbRCGpxqXnGre51jPoq1yh7MKt9t6f2NbP",
  "key28": "DZAhPobqHUZMxhtoaDeSaMZgBG8MmQ3dH9KEdzJS9LHBo7pw5Y1dCPdUeH6qbGa8E3TmJbe4jyygXG3dSYRxLNL",
  "key29": "3Wpg5j1AgNByFKHf6XRBE6PkSRnzXKcnL5cwBrrZbmWodRhbowmMhsyYts9YvNqM32kUyc2md4vRzG7j6jg87GRY",
  "key30": "Jf9Z2CEVNmVukFPFFG3HFkT82vVK2m2KNUYqiBe1EigkZMuYV4diAQPYRaJJF5dvBwEMcF6Tn1VPPDi67nD7x7q",
  "key31": "5ywNd92HsNxcdvWA758q2wtC3Etau5TTznJQEaXCzQT3ZXKNL772JpJewvsaaEt5J7bxtuj1fr3RrPtbA7jDFhbA",
  "key32": "2nhk2yXuUVb75tHedGJVU6mFwGZZhZPF9vQwJUjy1FeTqicoZDEVxFXki4LQajpMqixqeHhhKpGWKqvFw2SkERKZ",
  "key33": "jhhGfAknBSoKWnep2hEuqD9HNbPk3f9A2MTsAziiC7TCG6ANoeJALVJED8GwZp7HVoR8kfCtLJzNk5JA1uPGhwR",
  "key34": "4gDjcaySCLFcbJsUdyPvidnv3cmUF8SsEvbZf9qZXtDd4wickU3ZGFrGKXmspcothhmydVNSdKpq8A6GDQUxnFBk",
  "key35": "4cZhiS43TuhiWdX6idCPRhJKAZ94yPQ7JPqPWcwxg1VhCTS8gPkBTUGgoQUyxQtZhujMmKpNLqGipg15EGZ6oyty",
  "key36": "5xUpyecwf8QT7cFDLCp5PG4YiT3RuUZHWVN6jhizxNGiTiJoMw1hRhM3fBTii6PihUbD65hQVDLaXY57R5P8Pe23",
  "key37": "3rMKCZoZamt7Xou6AsqGxhd6qfPMUyLSfZkitTomJCSwkQGmd1uu9LZB8pVebHa2HDMQE7pBJSjeX5m8t5s71wpi",
  "key38": "2UTh9VxPtp5Ypm4EiponryrZ8xHfcPTf4fGF7tUDDvL7kQBHKXwT13tVqYfifXYhwiRqCiMirkyyRXQFP7td8kEK",
  "key39": "2taT13DNuELHhzFF9nSkaFY7t2fxroFR16f8jBjwdLivEQuQr7HTGpzND4P7pNyn6LJ7wRReEh5daQeQJvsZYZE4",
  "key40": "3KKBinn7jjYm1ZCV8DvohBPKjYfrGgy5uHWb11B886nzCsj8TEjK84WKxo8zcZyfyBqH3AMboDoLhi8mV8v4vA63",
  "key41": "oKfrK5FAad9SA2Q3vFpHp1mT8Uf4qxxCg4NV5v1UBg4u22i3SVyZhPmrntzJu2oJiqRBamsidLd4pfkEp1ohe7E"
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
