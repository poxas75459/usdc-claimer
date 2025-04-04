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
    "4c9gJETwZwMubHvTfQxs6iWpnQ9p9NiuZ8Higz49MJo9ZKBWHQrhf5oW1AoQUdTv7eWTZmGNUQdcLss9hY7dJAg7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UcjV7VzniMBRHRgeQ5TCgMUbjT8kwRCyhJoXWxJHhAuv8kLAU5KKYVLAhRtER1NM4QhniB1Ds9v2qFcgnhWog2X",
  "key1": "5qFCUQP67tYJ2dezST7AT8jstX5ssKRSyjwJKGouZMvEcoFzihpETjy7TUUqGh8RngqJ3yFR1fLyNcsnzK7CyXPG",
  "key2": "29bc8V6E67zmCUiwbFCm7AJNYruadu57JWnJiTdx97bVpbJ5iRuKkdgTND9aTyzvwajrscDUrcJ7ZbPKNxU8YYXS",
  "key3": "3hcFEXyeicX69xawxw2hprjZuU2pxyczxXfjv9m2VzLdCp11gZ4tLEjubmmN2rCAZZUUzstJCjbZv5oXjkyKrgCg",
  "key4": "4CAU7626fS8erTvSjwC2UUhSm3ijURgrrhGrHrhpTYGSDDV5xvbsL96kU1At1EEE9yhmMZ7iiRe8hJSbKs477wmZ",
  "key5": "3vKxfZQPCnZp3AmdTcREwq84LT62HCxnojBXqukSgacGsJEimWYas5rVt9ZBvwZbY6UEatBuotTdrkUFNrPKigRS",
  "key6": "2b5zfAun5pW9pEDpeno8aDvVh9ktC6areMnvvYFsEdX4oDYVxQUQDEFPki6dq3sWf7se16gSgJnivscU2t2AiGxj",
  "key7": "2tB19AGSwgSbbDaZUWSpqvQb4ZCBfCnHWdGC87Ht52v1omL2Z1RnKmrDUBinFku3MLbbybmEndTD1ySAbei3by6N",
  "key8": "2z2VzobRYGUGdDPBBSCXr98Mqj5T7k8DP76Uo92BpkPWtoBL3UnGCyXE4hv5zpyvb1LP22odvdFip8gkRTu2HVCg",
  "key9": "3MFMhDqohL1sdszsdPCmDPBgmvQjjd2PQEFAARAMptLGSLi4bmLNnVJpax3XbQjeQZrZfWzM7N7WSgtzMqn4WvRT",
  "key10": "p1YNX3CvZ4tnwHkw7Ra9LiHs1gcVPhcZRqYxyGdr8DqdBmcLfwoXwAur9A1GpociWkiagsLYuqJQu9GwH1QL4qz",
  "key11": "5FNrBzdcuG3kWTEWWLhtjbJymRjz9emVfrZz7UWsJXpZdMR7XAGyyyqQVZobyJc5YawSaS8CHXEcft6wHsHtFKiM",
  "key12": "5yMWpTtj4RwD6BzFSUwcYoe3p8FkuK59h9wX1ZKZuDVUSj8t6bJ4k6zp8eK1MfV2ZkeR3x7iCqJvBcuCsPX4Cn4p",
  "key13": "2VEZu7pvcoKbZjx64hn4ZgYxQwM1VVNqt4kBgcrpuLjTrZLXbhXh9hpTenAHDWf3kR3tW3SQ62h45bNoFYoPejBM",
  "key14": "3i44LZiZ8hA5AfWJAo1yHwsPUVVtTEqmdU7dsot2KGeC1mKd94zU9vqBsEZXN2yPyRvKoDdVTMhdoBKNk3DpeaUo",
  "key15": "5ZVfd5SfbNRTeaAV2UNkPmBgkMgGtGpiLqugHqnmcBgBEEAd7XqCPZJW1irTva7EhjwAuNSc2fJY3JPPSS3y5v8X",
  "key16": "56QAX7nN7yhiRmFX6ocS4FNya3JxRHy2Q7MXpwZnLzzA5d6xk4eXoTn1ZndGT246t93nuwvFpQjKX4qDP67CZgye",
  "key17": "4AY4tnA7MGvHfy7dbf1UndbpNv7ycDU9bxgBZ2JdVbbiHVkj8QKhy27Jc5vJi7GQM3AKTwZUMCE9kxo5MoVVvqCi",
  "key18": "61vpu5p629gr3NpoAG1aHqWJiZ8HsnAQtugUu9yqPZ1RmDZKzrX5ZVNvA6EvK7vZD2hn8Lvkdz3p76xfFUBaJe3p",
  "key19": "4NbaSwktT66xehSiSyJENjyjYSnzfZiJwpgruajrxZyxWpVtQYGdJ9uxe7ciBnE2RwymVYre124RRbmZJ3NH7Zyo",
  "key20": "382EwYwyTB9LiVifJAQQGKM33dD6Nwku93KdzKSfD2wpzzYUPq8AUJcjUggp2MuMpe8t6ADhHUK2apJAygZF6p3e",
  "key21": "4LjkjuJgaRuGJSkWDhEVB1yCqQxJJWiEWEMUo38dTVvxPdegdMmgYuFXC2zrSWqZy42Zvya9KnZWqfoZnxmnticS",
  "key22": "4aas1esAQxLWv2ntKUqTyczZErYRx3AW5g6VsGfRyCLKnw3j8TbJbQ5LLERMiGyQBAacMYb9ykT1rYTM9YWxarpT",
  "key23": "ETjqicJWU5HoAKyMvBt9qXrBBJ8tKjJ7NQw1qK6nHw1JenBp7CjsLKnVWQoNiWwWwd9gpitNf9XSQPKdx45iEEv",
  "key24": "5SXmPpUGxqtoAmWTPDchYqYwZX8Agx5o4mXbF2ioGcDsC55toyeVRG3PN2TfBZAiUCE8e8zbf2Up3bWtTpijDJTg",
  "key25": "5zKDFSYiSXCG296R2GyxyPQiGWrajUTcfLACdCrYDzDVsbryxAB4J6YSmPPV2Xt4jhhhp7C2yxN346L5ahRx9FQQ",
  "key26": "3fN1sGo6PcidoQPy837S2w9NXpCikAAMKKw3dwsHTtFzweNSTWBmpmTHv1QjPPj6LgY55wnch3iTYYMdgqpFDCs1",
  "key27": "CXdonZwcSDodJGnyES1hrYpXwuZywb7sBzAKXqrErhiz1Fy8VB74HZ1ST48R8Q7CP5RMPsRv6qENmcExJiu4acb",
  "key28": "ojKkGLUFAszu8fQRuvwJAUXKVbEmEhoZsg4ejh2C7y9t67KtjVdvFjNSJytAbSptbwTByn9nTtLYEZLuwejVgfB",
  "key29": "2forCwp6GQdn42Zp4BCuE9VvVNoXPshHG3iJL6mNSTEkKWKfsSCHGDzNSyLrYDcbbsY6oaNp9jZ5wmG4B4tvq7Xy",
  "key30": "5bMpRTeUnimYP3TD5cXRG7xTgdjWLjPEz7vXZp5pfpss8t5QKwsoUCGiq4Nv3KMrm5MmqKSLKVezKWdkeGh5J8Dg",
  "key31": "bmroa4vGRNu28KsqxqycSnujP5pG8W6nfovXRUiQmu3pWbdzH6Zf3q7KaFxnTC7bzhhPbsQi5NjzQzB1eQdg48B",
  "key32": "vHpspukWoQ9hw8uUfjqRaDwDjQP4RnXArbXyfMfedtVRG8o2nhKL644JDJDt23shrZtbJKHHNBg4mGNt4p9qv9G",
  "key33": "T5UCbq8KVAPmPEucy74bcMixvd9ewLxZGWv5Aj42nWro8kBiaWdusBKXweWPoBV3PhDDDw2gv4BTzdSFxndPFno",
  "key34": "3Prz3gAUmEEBVLzki2r9ZMZpwF1hNFefzXw53YEHtEgn44UYV4o7BNS359tSPZFDc68rAm6cijd5wq5QRU5Pa1Xd",
  "key35": "4j1CMApYTnPt7Z9Dsq6gUiKyac3RV49fo7eqti6hT7ECMLkiVG4aAGk8SjSKp1MGNsAUvX48nmTCgjAEWxYJ9nqE",
  "key36": "2EfWEbtLEnaeJAoHakYV6F38qxDTLtJSd4U6eAtDc8WaVH982g8YsxPoRGiuUhSx55MTtqabPgQ9MG6VS8X3FU8H",
  "key37": "56gShGXZJg9c8R2BAHFb4ZLbiSHi1N3HoJJGW8WNTWwyPyp8BQZJGJ9A3dGWf7Lsr6X2wC4Y2QmJebp6EJWD9sC2",
  "key38": "ihAMbEDWE1me9uxzAMRon7vhSRz9eZbZgabLUnvFAPQvarsbJVpxB2vkE7FNCJ26eX35ovBvQAmcbyzz52QpbNY",
  "key39": "24XUhGKSDmiYRWpKF2Dcf8knkxrYunUYHPXukSZRWzHjV7jsJxx9xZujcqEpjgoLe5XyqqzuvgaMKkpCFvMVtgT6",
  "key40": "3AaRKfvk8oTkDtLdAQZVzWr15SjTmg1XxSJjz7L5iV8e6TvVuAMSaRqhYCcTsnLXUqwMybiLK9DjbRw8EKm4u9dj",
  "key41": "26aMBmnZbCRMGnhofrQbPaySYPfgTbkSUibEKURMM4hZqLyy5UnMNPvUbMnTsveyYNRXNMCmyJv1THuULcMkeQru",
  "key42": "sbuLrHwqYWfUNocHhhB25BZdbKD3NeSdxZDvjihPhZ6ywb8jemTXSg7jiJ3NwGjugog22rgnZZhQmxBVbvYQEsH",
  "key43": "1KSthgWGX4jAU935rmbjWSQenKSTmpYuARxUGkhVWQeEDH5bRmrt8brfPdP4eXi7FGLYgkbsDH9y3V2UxT2zktZ",
  "key44": "UNe17qvJ4Y2CzTkcCKodmHLRat9j9NEPokdFoZ2bzDWtxRPoTTNLsxD8kE4XUMTLwX2DxC6UMc8YJxjc9RsJhFz",
  "key45": "4jwmU9iwg1RBZJZkhwWzdswjKHwQMjrhzR3aSZL3x6yfBoz63d74qVkQhC4yTvSDiS3KQ7VxPecXuJYzQuKUdyms",
  "key46": "29QifVE4DPjpgrEohcncPN7fofuMJpDTNAgGoFaSgas7SJDHoehqg5ifXU4fZBi1isUpANoU5HSeAt4MLBZPJiyW"
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
