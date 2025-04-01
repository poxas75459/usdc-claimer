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
    "27PDYmX6fcBQvPeqKyv1SxLF2aKQbabYnEkSUReYdmRnthohmpaQPJx5LBYbjjSdbDKWVEr1enyrGhSCJPifBz3X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mm3PqbXrUM1EvAp1YFLSHpPfBQcrvNn2qxpQYCC4qzQEa7UrrCzGsKiE4FAtnuTD1eTshAgYmMG32xbXUTsLrCU",
  "key1": "x27RqP9d6HzvxbtxmJGgD92SHLEXYJmL7RacvoXf6EQM1zJZeGWBQADjrZVGLpU6yurmrqrk1K3KcRz4RJdNF6V",
  "key2": "4HABjeEee7B2wHK136BMhARNNskYq1XgBqDmzTzKDMTXtB8vMxAuCPHo3jn9YZBFhL6x48u1FWRLvzWF5AVuo9TY",
  "key3": "5UcwopD4HsV1Qsm9wj54wsbdstroFpXzwwUgfAVn3WTRhLtyjJXEaMSGbcgj5CdhHE9JCY3ixfFFRQeL6g1B9E29",
  "key4": "ALdKsr3XJ1tK6MxDvGJTW8bE9xg82KrMEz989BX6w6AigNsEZiRLyV9vf6WzoVvRNGwpXrumMQh7iGYvt6ggxSm",
  "key5": "5BaUPX3o7dkZ7ZKRkBzVhdNk7CE3zEDRxL9BMhM57cXAFLdybChx2mbmRpriBcAjV1qFYQZwkTAy3ZnVHLw2GkZD",
  "key6": "5L7fDM95vfXoYWJJgq8JqiVGwi9VyQrGg5tdSjBMxrHbps6mLD8TZ2NevZ8p4zLauTzo9EUFm4pQdtsUR3uLzFGj",
  "key7": "F9Tbv9KaJ796QopTs18uFb2BUkqzU3EppDzx8ZqWeV2LRhWqZ6sYiWrkVThWBoj1TLmgxmKwDosz95tDNtbP6Q3",
  "key8": "5Si89rxAoXfuKZGmPSqMs2mdci8DApDSDFjQXYVmS9zMsRZ32s5AfQQevj2phugDiLRiiXvg21vbbSPjLUB44jKf",
  "key9": "44yZxJ3yabex7v24e9uoTWtnqYyjF8M2FP28gdND4EGh3MFubob7e5k45TYd9J5pdnnFztCQhpwDN4hCCbcEBF8y",
  "key10": "3DpjfKs2hH7GusV4hPR9Md2LSQjwW8BD1TjS2P5MwpEBbBBt58YuJ5Z97rSRYNxLymkCH6gGgZAUTPDZRLxdE13q",
  "key11": "4F9Q5rCCywNC1S595SKfRsZZkH9mwU7xrQg1DCqABfSMwTHuv1nVi9UfLGLfeatzPT8BvbBsjTf4UAhJHMjcsm69",
  "key12": "33ruWYmepQPcDeHv1q4HADDZim3zFYKzEhDJCiCc5xSHwKyZ8aTeJKzFdBSQWvxY4otNdS2dv4M2AG2LTjnKRGwe",
  "key13": "3i2oRj5ywcVHzU3FhUtAvXFGdNNxu6jQM9G94EYypfMJMpdirwoUALLKtJUeh1171dqYFT5CDY9NTQTc1ttdZFaC",
  "key14": "27Xnt3uCw8Wb449giKpGAfZBG2pMXVvFGzmWWsXGwmQ2i9g39ZyTgDAGm4F2Nq612CJp2RVok4vs7mjoAPvn7vog",
  "key15": "5AY4kxizRcyggycB3ZcozTqbAxuuT64CuzgxyUYMzFWTkr2gr98mUd26Neyem9mVMW5Emfgu4G3rppDXyMSFmmXZ",
  "key16": "3atAsFHCnHqP6rHFc2hcpupmWjp9wwC1nCYvmg6KYAS3dmFkZsdPLadzU6Yij4aqt5NWFMeyktXQjPKZ2JZxLcQh",
  "key17": "5AUamouj21eszRrk6BEtA1JnLtfDCbo8LeVQa4SmyhZjsPJ1BVJ9qUqdUkBC1MbYaCPmYSoP6eHLnNN2asN1C31h",
  "key18": "4fVBxJviZqXb4u4SCMBjvh4DjzJum97ToryGu4BhX8Bdiwg3kMS1nXq6fz1ffJjbXH5NWnncaFvMVRa7yyRUiBFc",
  "key19": "4HxGmvMeU6oGxcJevXQWSFg1sdHxtToA7Xemh6AMFS6RyEia3BpsuDUt3aT6gGvgMiFitqGjnSVCJBt536W2atBR",
  "key20": "4vJ5pGEfHrV1bFfU4psnHcvQ1ZwgsbN3r7RZS5ewZy4xBJW6fncP98L8aXaNfqsCR1B7h3CA1ifMA5dX88UtzFcm",
  "key21": "4HA12uetJMkr366TPrCZZ7U5xsgGpTaKs56tsBvCj1Xzy29aMEcXg78yx3mQry7L2BfvcjmWXG2arm6nMX3wsiWr",
  "key22": "zd3TJwKqZ3yaUVJ1cxz2718jtj8p2PJcSxwFQHeUf3V7wW2aNZ34G9wZyzuPiKJvTEvw4peegE2FRkbhJUoofz8",
  "key23": "4Pg7YaN8S3BsBJLJhLh9ZgT9VecXZpGMfQSfv7ebBzE5F8ycZpro4Pgd7oJbLZWicjkd996KydCjUFkrHmYYkQfs",
  "key24": "33e6QmrZyX2TFHNjmkPCUwQh92y6RKGpj6D3iwN52bWLtPmyU5TLjS36vWtghG5P91sBtajtwm38TiijZq3sCvzf",
  "key25": "5aJNz8hEB7QaPzpeuf2GUSC6GmBre1b11eFEPkkFvgRceeYJyZ1WCsYKikV97B57QG7SWkGRPKWAW6XmQTBD1nif",
  "key26": "NTGfK2ChtK3A5RX9VazMMqwbhZvB5nubH6sKBqceRHmk2oJFraAVJGFp3wWTjyGUrjMsMH4fVEpJUxC7NRYTovX",
  "key27": "32LwPgQnNAco9EajQowHHk1fJsWHWmsrtW52cKxQbNxGcr6HHC5ndwMdnPZHwQx6oMRpYwdLWc9ECuVeHcBNutyU",
  "key28": "3Nq8nSupvzmc4N9Jo8Qi8W51m78i9uDsFmYKJhonqwkUVq6tMUzs5yQw8mpFQBPrbfxMinhPsiH2kdW114PtZ7rG",
  "key29": "24mBYrdeEUc3KoRJN6MKTJ1aFJHwNj3wugfvaFYJVQzmZdVP9A72mCgg35f56kvKJBXkkCrskrzZu4ctG8j2sAFC",
  "key30": "5DmVTT8hpFnPW1TxmyEE2TUYhNiDjNe8JrgwCfvWtjbRwyesxMx8m2KbP3vpuLG9jAJynmEzfcKYdCyuRHq5jBtL",
  "key31": "yQNWC3VUxvfwcXhmSNjWkQN7BnqD2mDdTcb6Jv27LfJr6j2NBsTEZvVawqXHg6HR8HiLJH84PrURJyPdPxRxbiB",
  "key32": "5wCCcKNxZNBUQdzNoFZwv8hPBpEp8tDKnrHrVErqbjjdHhPxKbQ3c6Wxr5jLtVCLncUdkZHz6neo1iuDiAi5kanm",
  "key33": "5dvBs5Fw5UvaQCzRjjnc2G7CQikYnLLB9xs8kC1qQfqaU2zxes6A5BFYQVntqWDuM3ywkdLNv7oVWn4vtGRXbpZH",
  "key34": "26VQAjVfTqpENUEMLTkk3PimHc2GM5zfgd5SNNBNwwnKFhQ4UFDFAhULCcrJLQkDcxt6XHDdWCq7RWx1ouuC8Xs8",
  "key35": "kA6KG8v3oRudwkaGU6DHPa32mWJcnNQ84Yk6Wdvs6NCefJS8hvvwREj1meEAfr1riEx3yZx52VLLVR7DEiRSHyJ",
  "key36": "58Y2gEjMeq3KAfD6A35yLUP3oNUkK7EuF6aUpZY4zY1E796jcQqYRcfz3WMmnZ66U4TkZJqpvnLpHeC3iSJykzVh",
  "key37": "3kSyFegPY3rdFzdXnVr12vgbZTYG4Q3owU6fUoL6bLp8rm2yYqb3iXESg9iGGjSSMFct9UZBTwvwRMjo2ZMEpkjG",
  "key38": "Y4btK3FpxVLsWGwsmTEekHJzhiEVx4jMGqyvrSfkZQyXR18hRfFxphjm9vSgq589d21PUnf2R3dbi4iuq3Xi9zP"
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
