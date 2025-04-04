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
    "5yw8oMfZ6h3XQx6SbSg6vVCbR52wBZzfKmk3bj4EUUEJEswT2gqp4aza63ByNhuT14G49WK4qyNo2EtJzA2vCdaj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gXpNC94FRGntKJF5KJTkBmZBDd3DycHb1o9dPU75q3k41h9dzF8TYLFahxv1GoRSQkfWfu8E7EBnbLBQRHZbViN",
  "key1": "yH25mYegWuNufgLVxjhhoBSWTYntgyLB3SxshEFaPwvjqV9RsR1EDhuwJLHCeMfFebByz1T5vhU7SZ582nW2ovg",
  "key2": "55sy39VFjUNQyEwDkPXn4YXcf61ukEzf7jPGDsingBGGX5jGyN14dN7kEFBLXDtU9m3f6zh1Einq4QXsLVz7C64d",
  "key3": "4wjtWvYCieDbmtAgztYCu8CrXsAAjcJR5R4hsqc7UUDEgwwVwNyHP2yLpQVdrTLXUsZFwQ2auFFKLzgwQWqHGuCv",
  "key4": "XpJsMYvXNKFmwZVBZXRgWbHZGbae7xkG5j7R38o5BjiK1g3UbJC3WgPfSgAk4SxRSJr9x2PZBAfZRxaTXBkJPmo",
  "key5": "4aGPccHPbB3yb9ScPcw48RRv5G9aNKJJAn9u1tAqdFbE2JPUUqcCELBE84hrRTg2iXY4X33HSPddazXot8K25Tyo",
  "key6": "2WKLgn4qgP2HsdyZHvGUk55BhnwkDRyPhHNV9HWpeaNz7dnENPfgtL4wSvJnabcku8hq19aNjsN7iLNdUF8wgmhn",
  "key7": "2njz4UhJySWGxjstEwgsxmpFXzULhccRtmcMeaWe4YrBuKwmK32YtvHKcwRvoa3oQY3c36ybDfb2JGHMDeGzePX7",
  "key8": "g8Rs63cYEdfji1zBtL7ye3GHcq1vvWAMUcQDhAJCWuUV8emqow1y3xU6MDt4TS6g2SB3mMzfggPWhVnD8T1MVDp",
  "key9": "5WhNCdMQsN68cEFW5xMJyMoThWuUJfYNdUyNKzpELxYVh5SaxAo2QU4Y1PqoR7RtDb13jotJZ7sV7MfCjJrFsz38",
  "key10": "5r4aHSFSzUhzVL4ohLxJVQXpfL5hkNq41p8Vd2f4Sa1BLFDjmjC5z4c9KzzjbrKeHjfSknN4qh7Tmc4u4wrp4H3J",
  "key11": "3xpH8ob28E1c84Pukn1MQoTco8ZxVE9cPGJopqUoFKeGBmrbJhz7fUgj1v4BgpBLiGaG2gCnSnkQF6QeT67eUNtu",
  "key12": "3dfVxaznn3wRtYWnZsQJyd4obrbV1aJwZPujwCD6ZhSUULyWs4jw9YDfWjkEErDqenBV3DgByUZAdjHE6mf5XDV6",
  "key13": "2JH9K6Vkx7qgBmzZwyrwBhCup8XgsjL48rjo8NbBuWYzaW3Cf6Cbhc8vv9H783BVLPB23S3eEYvfCn8W1by6tZWa",
  "key14": "AmjnJubUrSZv8nSw11TvrG5xAzaPxCWGpigYaMmRkahdfQd3znRgYvyx6shUtbFi8yvofU1dvM9icPsM3kJ59Ra",
  "key15": "4yqF3vr9Khpz5PxordWSh61pWDChQzgViasnhUdiZrKJrpUSe8w2ivgk8a5tRiNEec5zyyvbEFpEnHZbrR4Gs6tL",
  "key16": "2otFxRh11cTKqA7yuq86WYhUU3vMa2yPfXqjkhPiZ46LmKnpPZina2fVLydPDWWV63MtBt17JduaqKhJXFTwKWvt",
  "key17": "5UDM1FzrrQaVaxQwQCfEy2xVKRVC17YnLkCg7VtVV5n5eCiT8wdcR2UqYEJ8u8uBj6dfA1839d7bx1XzViNDhDkA",
  "key18": "axGA7v22F9ji2qbqMyudkHajvTFVGRNzMPdZwEMniKsQh5DVVk3KMG3ifkzcQ5dP2oN7ExSD11cpkzi7Kk5qjYi",
  "key19": "bUJDwViNAfG7MuBuWYTXpAbDNrWqzvMdGH7zTJ1CiNB3ZjeUatNkCf65ioswWLorWiwsDz6GFCC3LwVh6rreWdB",
  "key20": "3MZWhzsFtWwQPqsfzWSjAt9Dnn9e1Kd7zqregmDhT7p6ufdxkHxTAGx55ZseFrr5PDfX9QnLNa7K9r6mvfdqotWy",
  "key21": "39pQxLPE33Jd1nnpqrdsgbe3DtNdK4WZvrujFBt3nEAP1E86vvuxDthJGtMFM2cBsru5tvfSoH5sPRMYK7hee2bj",
  "key22": "Dyg5aaV6b6snTMNd1jJvmToLbxhhtZu51ZsZc9GbPYWqba2vtaQUwh4H9TQLLxYwNucrDtrp5p8HRVDvGeAUsxy",
  "key23": "RWtyy4qPDLs71kGa9VLFfiCtdBHJnYNgsWSp9rTpak4HQHpGezPGj7XQtWsKX74ZLxe9bmqocF62J5e7Gz6UhNL",
  "key24": "2JFR5e7N7oFLwqKxMBXLT6aC4AgtQhD1omLSAsFwdZirGu1PoEC3vkr9ZFUVHbgk9DzonA5hsg1EBHep3huGmmH3",
  "key25": "23p3dg4xgixrMyn3238eACusb1puUwW6KSWG6FTsMpcmfhjqckTJV7y5aQZCZbJ96u3rohG4Wx3tBb2MHK3kHAH1",
  "key26": "F7HYrvNtmrosvwV8m1EeZJoUvqveFeEsjUNtdNC55sraaUBEShpLGXTumzeJqE25WLiqJwti8AiMGR9jN1ShGyt",
  "key27": "U9YgEUJ7WsCi6bAd6ZMjLZknQ2CPJGMvU7mD8uRdvWHPsZHsyTvUw2zDdEqyfVweNC9X6SiSo7Mrb5wn8tWiZsd",
  "key28": "5pY7vYEjWHryNpJtmYaxohaPokguQpwMu7yC2S7yLeSvjkb5eqXtCJtcTQsuqctNTLctzPrcSMQD4QKsev4Bpzyf",
  "key29": "2r88XABXSzAvvMtXYi5VfyTSimk1M7t3HrsxuEhQCrWGRBJ87UbacGGKigEgYQsUWYdrmC7sHWHhPPQgSJV8ukMq",
  "key30": "62NV2geMicfKNDgMftXgkWBx31Ncs3LFfZAeVL8kgsBSGDziqBrwkQ5xmNebwhB1wKP7quBDHN9fNqJYeLkMqwCX",
  "key31": "4BRmBhEafH3jVPEYXcQJTTvP7NvyvfTDv4xMsaLEdgr7zhwsy7jZjzdCXffBTMASg4DzzgkNo54FJdpPBqSzyJoM",
  "key32": "2VtDaWMXYn3UiJwrZi7QSM3dW7smM8MBWX5cw6aesUYNjk7K6yk89QcNvSj4bo8jhqTzhyNioizhMBXYMyVRotaw",
  "key33": "4mi9UjzoKAFJaEugrFCSh88jrJeZQ75ZGPzwEv3hipLihtVxxb67t85jSbLW2YexrbRavysWmgdEZ5MZiigS5cB6",
  "key34": "57L91exK7QM5aJxZRD4H6pmTWj8NpmXYKeiMrezj7hm34wgYxojP7YFoXQvbw9hSVExKw1Lys9iFjbTfK2gvgNKo",
  "key35": "5ieXZiWTZR4ZETrbQK3gcKkE1cKVrLtiBrWibvyQ32UWxMn9foxhdeJWcMs7hGAs7ZpJhCJU5WCbHgEi9gA184iv",
  "key36": "3CpPmGRGqGLWMEznLL15faMuCgaMxmQBygkvBL9AHiGX8tBCr7zMxbduCiNp3Sub3jxWbL7Tv8BbgGD6T6N8b6p5",
  "key37": "2TAkdupZRUUFiTpWxN1z1QHrW4tXBTnLT3KhXJGsS1jLPVg9wATEyrSsvKDYpM4PkrDCvA2aw15A9meevGL3gL7k"
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
