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
    "2Z6FHd3mfyUwaZabZ5vqRBn4NK2YmbfjEnBNaL182wFzdQL4ebrn8DkomdDQdVLsmc8hsdv6XN24iqQVKu3SaZWy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2poK3Ma82jKw6t7pxHnjH77aR98gvvmjaQjg7zsUJ5SADfSkyyHqBKyPCapL8r5q3nhJEeyCfKkrzoyhvYiYrq6S",
  "key1": "2LQbxGwKfAZZyrpUpKD7Aw7EUnkjWjqG4h1W99yZgde5fHknR8PVaENAWu8qqi9E8egZqhUBjX4VB6SXfCScBw17",
  "key2": "4NE5bnZSmSAyPy67iLcc9hTVrezafVevAQRQnTPBoJgcZudrDhq2rgQMxANhgT4fn3wPujM1xjeNRbDf7YHazV7K",
  "key3": "37ipRVJHRbqf1mGxCMH8hPxRXaxpfQKQ9JiEM4odRJtNxm6xVoE2kwwmxpFzWBpgfbGe7gXsrFSpvLHD8ZYtvA7x",
  "key4": "428Af2xt3kgKT1LVy4wqPhkv5qjVrHa11xNd2nXBd666RDEVu1CH4jSbSbD75a9a7jLhdjLLWbikvbayJchx8hew",
  "key5": "91T9ooXtstjAyftJkEjhxYWzrxah8dESDGSmrFfSrKf7m7emT4hfXUuGS6jWqppJGYr2wPw5v81rzX6gNVCY5sD",
  "key6": "LMvBT8jS58VEpogpMGdm9RL6vKTEjneZ1gAaTSN5sd8ZS2tZfS5w8G8n5V3bn8VyTADjusCALtD8QNa1D6aGXMs",
  "key7": "38jdE3SppFsi5oRovc9Qmmw3rqPMhFT772sdsXL8qxhw2cAFafKgGqs5dWv9aBVwFgNHZ6J9DnYJ7k3UCvZqbjd9",
  "key8": "5sLTsmvaY5wExhRrdjawuTh3WXK2hWV5kYcvFRCW21jLQhA7HFDfD8m9eiLiwtyvMReiug5eEuxyit9o6nwEvoPu",
  "key9": "fQD2SopF577yANbxTHoC6UVXFi9V51iQvesuRbedhfDwcfNb4H5qeikvBA48WRVQR3aACZK43gmHarZ3zsfWrzS",
  "key10": "AamjzfBqknpXPPAS7ypHfVKpbta8nbmpwB6YWwAPvB8PkghVcbTTJtVNFT2WVZXkTGmqbARbHV7RpgSUYrrdrzj",
  "key11": "xvJj6ZT9qwLtrRRrDcos8ZyPMnU4Qt1sKSrRCQfzzHU1yLHZjyEuNQseiKEeG68Et1curNArgV1N7F6AEfF9mX7",
  "key12": "3WqS9adg4CbPVqiUkLjWhGzx5p2UsGzk9j668ptn1USQFUN22i5AedfjJVsb7KoKTznTrfZCDwJoKHf25WXJ4Mva",
  "key13": "5LVbPwVJu51jd3WfSTaiAYRHAke1XXYEkh8U66xHdn8j38jU3SnU9JovbEG5kqYTjn6rfceNwJ7HkH2YpZsZh7TQ",
  "key14": "3HbS3rqBnhqUwzLd6MzDwuUcJAuKrU4UTn2Spij5DenxpJeW6MGLiZr5Zg1wEi24rwWiD9ATERj7a8gXqYVuVhmu",
  "key15": "3vUfwzteoj3YbJdzLJqXjZvFS9UoSH1gPtLwJSYmQkHWZe71cmsEeFyB3vT3ZDjTPpQdMhwU9mFbFEauqTPSsmJk",
  "key16": "4FxLqk2cRL2PmCxtBVtt4nMCkMtez958toZWCxQNm9vBxrSvWQTPVR4213X9kpJSRx2oDN47fUjiK194sJXBT6MF",
  "key17": "63hsk6ihhPjEpfzDyrmwDyxTYJGGvgMFSHAsogqNtL1VKpMQ3SFoC9a8wBjiGpdh8SuZoCoUNaw59i1okCmzKytt",
  "key18": "4mpzcke31vLS2P4To8G6RsP8n9zBEayQanmSzJgy2VjqYCWYPCvVgFqeokXedVpPA5MRC7uSWTyZrU5nShxrkYJm",
  "key19": "5ZTmEUKZAU8J99KVPtAsK12mnc58RAyhaf27Y8j6iGaSyGLq76b3VTV5Qx99Ca28bVoPT5gmGUuAUeP5dXTkGzvn",
  "key20": "64GkgM9eFVdg5TDMy2mDGdbd7Yyg574tkaw8ox1yYMDWPvpVMCjfjXRRuQjAnJPn1EP7P1TVBb3iChFFeLx2oaEA",
  "key21": "3D4HysS4c88qX23hMYX1noP8K879SRqMpa8wUetuxUPF2gt7gM1bFBAPT6iUh5zn7bsqd1W6Ue1YhkN22CTHvknK",
  "key22": "5rUXA8BdR8yEwnPB1PWPwxZ166d5ysLD1MM6HkuDp18Lb44w85Btq6JNGX5msNaVXsmhWwHsbuiGN6GBn2LjuBAZ",
  "key23": "5SzUwvkoXVNDw8ak2vvq2VJXHDjCP5j8XBpFzVskLGp63t8DPnXLSdJ2Hu6uiKEvSii6HmBKiiSAd9PnmqraU115",
  "key24": "sLw21WVkuXpKtwKQxoGWoZKuzwfduQBxZxuvhNZ5e5FSrYfQKnHsgkZGX8WfDRfK5c1RNV8S4Zj4bzMPTSUPSm7",
  "key25": "64anj1nYhfrHxQAWkmnCRcNRiycUJ8y6Dgs55wq1KXU9vZdJEgU7bSmaK5SBYxkP4T8k4bXAgDh8RR9aeh6cvLT8",
  "key26": "4aN5aaShGi8JTqwkpTQLjoHuCmkDZ1J6qB4YoyuryM7dKictN8YJdbVuvhDDsEnnxaV7QQJ576seL4NVTE4yKtLM",
  "key27": "5vjKStHGE9KmyQ2iWdiigMpowiZ4suL9EhYcANP7M7ih9VUzTmqkfKtSnkNEX5uqZQLaLrqW5oLVfV4WotaECuk3",
  "key28": "yxciVDcvB9E2Uiu93iKuBYqcPRU2EMFt88d1gUHybRyZTgQnKqGknHVAzL5D685LTYRKxKxoDccusn9rztTRyeg",
  "key29": "2LPdVooqh8RUzsUfAiopTvt8mPyyefA1K4wGkNHSsn4cazS5a1YSdicFWxDkL9LYGYVouqtmVM2FWm1xteZUz9nb",
  "key30": "5V83oWgeJMzeykXCBzKeqh9fCtC6wYDMUoSbnwfhDPx4GoRkgL5jHfAJcwUsT4jh99VdYVrm6DXtsVqTTz8pjJ4k",
  "key31": "LVN4yavoGBnz4nHFH5DqeDJypVgL9kuVLgoL26xCQ3cMSGCyGMoSPJ8aMktLLxZs6K3PHdV1AG6qnojMpgoSSGK",
  "key32": "jM61C3UqTaZxJLccgLvAggaVE7rrp3DXrmx75QN7jVX8zXK1xyQGJDs37jXcHE3EqYArRLgoSk3TijT4wLr8uEc",
  "key33": "4wmADwY22HvDgVJJwFLw7FefavuGLCCo7YrQ41PVzezcsa4Bui72YnEaRGixLhrhZV2n14CPJ5tpHYyQo9LWFPD4",
  "key34": "6288y3RHoVHqK5gfTPDSejHyvWhrduUP97we58XfUFnFMYdbppjeZAxEDhfMud6DUmApaswKkw1LmaCBpsVGRNbu",
  "key35": "2jfnp8Phrw26X2XTCGZSKtaU98UhVx2tnV56jQdB83MamnD6vWZYzEbGsZcFpz25Fq4GzzXCWiWzTAX4rn1cGAvh",
  "key36": "2PkvhW2Yopb6ky3TXUwsPHbHbziGFnpc7gZwXCJ3NYL5oFBman9AnhhgjDmwzsp8gDtZr993r4Dcq5dEGQvFLRvA"
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
