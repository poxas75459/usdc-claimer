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
    "5D3hcZuxBqHAWWkBFUWjUf6K2hhD5oNkkQbTt6UAX1rjSVhUng5ABm6MnhLhmoQrWceZ47ac5bHxjCpJ1HcXuWAU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W3V69EtzQ8gKkphnBxA6CBWy5CUErw8z7PhqfZGYt4D73ZXrgkjtyHwSuaeXwkkpHXwuGa7nh2ztXFCNNuFfz7C",
  "key1": "124reR9EBLyrsY85rg3mdYVHHpuRGCURgK4FW5mHe4owaC9MhxGRSvHEU2e2jFEKaxD6np317ZreXQWZHGmz5BJV",
  "key2": "3xKENNb6rhuqmH1GrNDB7azaajeDR3NKF31zczUyguBxzbSZ6rqLk3pQSAR5nT2HFzwX3Z2iGBEXYPie4zRCtsye",
  "key3": "2gybM3wrRr5siXksTT8RkxzcMnKkwmeqmv6cWMxj4jE2NBriawTZfFXZ7jzk9CEMUynBdexyPg6JZsM4S9er7zFs",
  "key4": "2jd7Yu4jpNdLZNNEA8icK8f2zQkWK2cL4B6ttbVeKKDRXjWPapYDLQZSuTphQcupzifdcERY6GhNVuHBhngEbBW",
  "key5": "4YcjCeog1ZZUdt4aD3zRH1RVdbwn9WE1vsWFgCo75xYre2Ji2xmMPzHEFVpowzdwgh4q2TnXrETxryanPybUgVrk",
  "key6": "4Jq7GBiE7swm7gMUncVk4KuktbsvY99ESzLKFjgM3iqN8MnHvFgwLgVfZtsn9Ku9GuPLL6GXSSsyR3LhFdcommxm",
  "key7": "3dCB8iTSvNJjZZmaZHeUnVZt3jgYZPAbKbk6GXrfQfdJ8XDfJEv2gGsDQQwHGsJTq21m1pWemjhgeLVK2LWSk9FN",
  "key8": "63V4wsMhuMEfymnf19pePsS2ceNtBNaJy1EsTvUJZuz23KdsfhtkwvgKag5Cd5mqCs8QyzMQKtpiXMuy1EJDowY",
  "key9": "2YC8EaiFTT2B4fXnsYVwTzkt4dviAjuPxYjCvxkacDXtJ7kPe64tz6VuiqSXhA4vsuDa87TybvLqDw1VaRAYXVsf",
  "key10": "ugxyeMtdJP7D77j58y44RVDbY4Xt3Tj2bR1at9b5PiJyT6Dv4SCana1u7C71Wxqh3Yx9M2JkJqJWfXpTKAYKag3",
  "key11": "59VMeCicf5RZ6QTVtNn2PWbYYqE84zu3VypRDLNu3DHPjJt1ivZFbt8bfYxiK352PnSPKc2zLFRLwdVQ8RWoS981",
  "key12": "2f23zYwhrqwrb5y5vctcc3PBDa8vFEL6o98ZnsURJGe8JZ7vQRqbVwGwnh4T5tLdR2g4DTkSGa6PDVUwyneCY8GW",
  "key13": "2MQss4oE73S3kjcGDCg2x7LBca63MfXr8jx3FDDBeXyRs9a7qXaPmx6wKpDVQyUek64aXwcngehYSNEMG7qDaZk",
  "key14": "5njh2bzZrHh5BcAdSzK66VEWvwJXTpK63XFfmL2bJARU6QGx7UtifGZCiWNQyau1S2mCSPjR8J8veFjB8xjggYxd",
  "key15": "2Qn3NURZ4dYRcvGhYdLuL1bSu8aqmPZw1fUQE9vsQCyTnnaywbfLurwJC63hazww1DGBxEa4Du2H5UZRXB36xMyJ",
  "key16": "5HB5J3mzMJ5Aib2Hbnt3JKdS6NJcCHp7uW9shKC892MCpm8xG1amBn96eWmJe4t2tD74MoMpaRyh4RXpsP61LDAv",
  "key17": "22mQm9DS7TwNnfQ84VMeWpViXvtA9PDNqMU9fqpsnNdWEWs6t15s3PeoS4pnUQy6tuMMX5W9nj6zJ9oTbRphk9Ky",
  "key18": "2nFKMfL2XMJCtZdWoRo6cQcQ5JqGLoDsiVh4b9BF7xMpfoqZyURkhf5UpZhrVR2y6kpkEt9FSdB34HgwLbPrJuxr",
  "key19": "3ZwYd2GeEe3BcUzEFnGkPvaXc8dWaMPenU6xysBAHSW4vcFUKVHzQA5cSJbKBwsoomCMSVVdq4wkAAeaboqxdsNk",
  "key20": "3en2DUJNt4qdPFeNapgWDuHKkjguQ4HexxysnDAUcxQVJa5u4JN7PR6mmCjDhhGw4XnBdZbbGwZQD23ppQx78wup",
  "key21": "3Dn2UWrS6MftZ2U3iyoSttpDXgBxyUSHirSkGGqbsut93wvBzzwfvBf11fHsEdDqDEadYcp5omTvxy4SF5GPQsY7",
  "key22": "3U5i7fh9jnw8MkcVyQZeZ3jygLtnVSG4PdQxgLvYirtiYgCqUMKAvutVmBVWJHGvx64XQ5GPWnshkmYPgbGPRTVr",
  "key23": "3u39hkwZzHAQrjobdP6hCLNs4aL6FHKccHk3nqHqZYepkrU5Kot8PFUHkN4GAX8WJMMmc7EQRAj5ZiyLzU8ZXPaG",
  "key24": "hZrxJDxEbiWvLmsQrnJVPRHfNjy9WHTXKwv7ZuuQyBwJUSFUFisgDfcbUnbjEKJDkfRWFL2r32iiVgprLbyrKaZ",
  "key25": "3N8xrbNjdvjjzFLfTKNTPAK6WW7UoQRvFbeoqaS8RhyAQm7RWDTGqM8yHuq9JvV3FnHcqaNrcDz9JF6vaj3WnDje",
  "key26": "f3MFqqT2K2rwm4x8bZtzDQxjDRqMd98ECgtaguFRGv5NzCu84ty5Yno8aPVDvmdM7kSzZqEKZ5Yt18hLTgJHWpC",
  "key27": "3qxbWtNrDCwc4jEUa3CnUinN8yAc7nKrkSFwt36W7iU1nBcf4VV4Cikf1HM6J5VRDZMZ3w9ZtF7dP7ktxp1pCUsr",
  "key28": "5ftm8MsPSBFYtupdQtuBZQAC5E7yUzXAv4NHbyCsWq92GLePuy3ttLkdEAzUKCy7xqKzHDE8bJ3Df8BPc8GRiZLH",
  "key29": "4ZnHkjfN7cgqRAGA59hWb4ApgHKWWz3twTDFMV69DcTY2EYHxjWVpVNATYQQso2ipCCvyYXNTkLUxbufojo2XsHU",
  "key30": "PJ51eUBJDNNmE9LwQCVQGPzfEY4T2edWSe7gX8cgg3phYpr4SGn6uKhNFArWUCowgDRxLWqV4PsgCDCgXNUDKDp",
  "key31": "3yvYJj1nX9jE5NJCDCbioX6NpX69FMz2mS3rZpWiUoB7mmQu6de9NTqRR6Zv3AHrDCR1HWpRjuxvobzuJWiu63Aj",
  "key32": "4kZkuj8seM9BcCpvbZvjfmmXCZi24zTad439rJWVCULUXQ1pCK3UNGk5b25T6umpgpHpnfZ3tkYVoKwBCKqNCJEo",
  "key33": "5UkhN8nPnxwdgLZVxj5yghWhF2uyqC9hrBgbDUo6tBCZYTfoQrVwY3Xwe946KQX34w9rE63EZCQZhYDMrHajXDqg",
  "key34": "yCjpCfp31FeTiS49NrMBPbm7G9Bp3jXxtvens175ZQNVczbW2YDd8ycit3a52dcD8oCsT5pbvUMdqSDKCEqKu4N",
  "key35": "3ELNPb9amsV9qr85S7RXLYCGHNTxT4ButbmF8C4djYwixYXxeQrGBjq4uPJn3oDFgYcCqNoFaCbcCCbtRpsZcZsh",
  "key36": "5jDfMi11KPZdkwHD5MZvGVVbF1TqAXHC2ESx7puhRCT9KzRE96rD5tn6mdtCHfSWetR3mv2xgLzY3AMhdjU2AEiq",
  "key37": "iEZdLmFaHHv6xwJadhMqMJ9vEnXBZRg49owdYay4kSpgqvGL7PfV8kGmQzM1JEWKAi2rQ6Jdi4naN8w1LNHQhdv",
  "key38": "2HktyKkbu1WeTgxd2s84DtHm31v1BKTdvKUdXNAdJY21ZnGjvjfgUumSLMrrfKmK9JgvTscvHwYwSXpZ2uo2akLB",
  "key39": "3DsZeHotfLtwDe4zz8zFzaExGr1KcSrYZRvVi3D4aLFXQszP7LVX4xVNuEzvNcKsZbxAZSwWXd4Cjbw5jjCvceom",
  "key40": "3k2FAw66o1kX8QJhNEE1QyYp2gCifzuDwq8ZKkb4X1CXMj5k1ngFZ4jLg6VJrMias5N293oaJJkkaqoUM5e8V4Gg",
  "key41": "5rgx9XHbk9MJDw7VQxfYpmZmyPBT7PKsLeWmVy4LFQpAUoojKCdEr5t11pkEAAe1Mur97hV3iDAfoMRm5tbkVAEA",
  "key42": "59r1tQAHxMVjor4Pgz4Da738AVQr16W4yDweuoPDhdo2JcLBVecgtCLZWtxb4WLyhrY9GRgmnoAiQzLPmkDFR34b",
  "key43": "4PfdaxZqrLti7UBGvrYZtL7mB2bWXUxnBEu3oAjkrcb117V63n5ADGR9hgFa9qnpGPp7gBVqKLJADDv33NXXc8aT",
  "key44": "2CCLo4XdFXqs1XvMX6yocu8PxAWgrnKdn5vgiVZZ8B2azPoWfLHEknk9kKvuu1gqCusCgoAs3qVqy3z3KPJ1jXve",
  "key45": "NaeMWsSP1iXhHPPaygyLfNZgCrzipd6fAEPruUMrURw3USLxxvRwcVD7qnFn3eajY7Fx6eDtpUovfeCcAVVWkmv"
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
