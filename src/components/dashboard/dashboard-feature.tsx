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
    "5fk2X5VEjb1y4zUV4PUQiU7NArU86P1JCfQjF6oPH8MyhAhcHG38ebaNQi8BtufAJbQqfVr5kdykPs9hfGeMuB9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EhxnqoVBnA83Yg6kffJm7uvxmo5hsWdNk3txqzaQQvFxehe26RjrYBj6iCCazpHzjyV17zrFNXvbbTX2Ae3gkM2",
  "key1": "55vUgzvECLpA4P16EGxyRRx5Z1aP3ZArMe1REtcREzg5bYe6ruqQZc8P4oJKoLhqDeNygmXo7gcsgDNGfawQ97Mm",
  "key2": "awjTgifuFU5AS139EJTd8fP8DY4zDrkSWqDnxK3VkrUMR8yMgsPGnSmtXv7Pd7aqCVnMEgiS2jVkdC1SxgukNN8",
  "key3": "5FhiJJpWmCULCptt4zCcjwYG1yuARRBL33CPB1uDWpiRixFo259ZgHP8pGQh2LRtQxKBCrM5RjcD78oert2MkCd9",
  "key4": "51xvwBmCRmEHbafmskTvdJkiacEg2yZtj4DnPxVLpo7cT9K3JmS857x6czKRTbDeSdkZghFUoJt6KkWawfvbaChd",
  "key5": "3eZxsdy8sWoF29NJQrRtE4q6d4g1ERDhuhpyoRNaZ3ByFztQhy6hsXyB7jhXqX78azPVaPw8xU8nFTTgDo3EGk5P",
  "key6": "2cs9mwrNUKHBUBEHyn2eu7hRxcy4hjNpubVijN984KkcEGuvCfKkUmGWvT1MaT4WxpQ7r1ukhWCZntNazmS4Yu2N",
  "key7": "22amQTXM9L12vs56BLMkRVg6W8TkCXWvoXhqq7PUuUuw12DdWyaCHJb7P7osuJ1ssUzJe2baf9yZ4gGsVfSgKA8c",
  "key8": "tg1CDRHoQGwwfN6iAgpnwb1BNfMb6chERGFNgiFChFKhPbtY23fvCyANDgVKRGSaaa4wtHf32UzxrtVxmrih1aJ",
  "key9": "5wjGjfGxbrzT57XP1vWxqwCL6NxRAbqtmv1QytoU3XaYMaN3hAqdc8gNTFJA3F1V12y4ANQ7szMczb2ohWg42Cqi",
  "key10": "5yuCN4mYrCEGXDAtrSikNRYgfRsf9YDU6KtiUqSqEw6eyQaRs5vuy73ACmq7TW8a1rGsGG8MazHNH9M6BxhP4z4y",
  "key11": "3RqEAbbgRX1W9metDFBv28TpBr9sqM1fS2T1p9tWiy4jpakErQ4gA9sgyxKmKUnfvsNCpSz4fAdeWySFnngpeX1W",
  "key12": "5nzGHGdtMYAFnPHDPrm2y4XjAhw84ffRSUC8V4YYuUigJc7evMArxwQnZqshFSouDJhwrypgpj5FXdoRpgUmDe3",
  "key13": "3DKX7BwNcz7rb4rSpcMQ4puyKacif6us5oP8Y8zVivg5sngK8ophPhXDPjbDA5UEiuJv389ypPKr6Pp19pYtxHd7",
  "key14": "4VvqXoH5d6itVXkapgtPo1p5sJZJQmFnSB6fvWaJhyoEiFsqXcMuzZKAc18nEstfZ7JE16xYaNfLKK4mvWaWEpwZ",
  "key15": "EnvV16MBUf3iy4ajGixYpgimKTFCiST55TLYZ8hK9ugmJL4cBVN1aMF8ft82fovCrngdL8BwJxXVWnSoFkTVbNb",
  "key16": "26qd1g6i1Fxfy1AWKMvPiAXr4LsgXnj2kFA9fNqdUxS3QQhjB8MwxJ97sshS8tqmYXyMqsoUEoL7Qnu6dM7zPh7v",
  "key17": "29Hz2pioPx7uNdkhAKC6EshmtBVeWnE6ezW99MQLsm9VuUCTGQV8k5krmYwtChCCHXw8tx3hNi77QwTqhdqh9obp",
  "key18": "22Qbze8A2NhWvjsEi9XkbbkfcFJYnsBLVeimFB6BY4dPSPQQq2K1Rp2XzSKUr8xi69ccFjXsvv3nVfJEmrheJM5i",
  "key19": "57jfjpGXXSesmTo5upW9tYKeXxwKZdPBLrEDtb3JHFogf5yuypSFPguRLjWdw7sQWhKt7iKbTgt3SNvespN8HWvp",
  "key20": "5vewHNDhneqeK2ve2LpriuhE4Hx4N7wn55gdJcM37CEuLa6YALmkyL6GFmFBMTEyqLd6zRMm6Ev3Tgw76B1z8kXb",
  "key21": "3yt48VSUHS1WAxF1mLTqSdgBF3LiDggwLEd1gEs7UsboU8nnxo1vdp4ywYs6cefPg4Wq4njAuz9nBz3TNAckR3wL",
  "key22": "61cmfC7dp7drcWZK2NzcAVaGc2Hswd3KaAXvQvBgJ4WBgvEhonL9q7nRLTh6PGX7sqwdDf3438qMZ5trwy5GHE78",
  "key23": "2RSKdeihSTShgiDdYhwh9u1rJwJqAnxGLu6tuM1u2kizpoynyqXfGRTk7jM44bgtjRrbDXu9iLDtj9REHkKT3QJ5",
  "key24": "kFbyiSY4nSwv7Lb2fVhXZm4Gx1LJH7pmp4Th4dZAojyAsi1cioQ7bezCJCY1R7o87hdvjwokrHTbsgnxdHKhNKA",
  "key25": "kzreGUP6PRS13Cmc6ttsgdixg3H57ir9FaSaxqKMzJP97aWTvo8nF3MNu9FnMd5AUN1jiTyzF9wJ8V5bNU4KVAK",
  "key26": "4NpAvG6mGy9xECe9sXQhMDKKHDZ2TJgMES2oLDRbyUg3KQgk49vP8DGpBFHjguPzTbsYZ2hhfJ8dUiQmfLG1DGCe",
  "key27": "56BvUBhNJuKG2g62TaPAYuvm82hEqeJ2BjNvCHRJQi61Dso1gd6YkjjEfJwsYHPKXrEF9wb1LSKKEZ9dkr6LbbaM",
  "key28": "Q2UwYR1jSG6Jm5oPAVP2369C32AWB7nWMZ8if3pcHg6F7E99yaHESmBQYDQPCpkskrGK9omc5tighyUtGk6LafU",
  "key29": "5ncbzMkaciLe5aYVVApGnWsMe44GDBHKszvSJCCsD6KEFmr8h4449DGhK7RPVi85T51DJNkc7xcd4RtZHBfgqZXj",
  "key30": "3dY2CB18McuhUsHHydmZ5nEqridDU36GiWYmMSZk8w5Mm8UainNi6AKkfmj6d9kZpXYNMWUCUQmqssqGeupW5TUw",
  "key31": "2P7bKRdjEyzy7SHoVygvaMNgoJwgGhaPLF8EqDheBJjkxVxNWCCKvpQT8i3VgKDb86XABwcwt4REyWJUZDgqyV1B",
  "key32": "5WsjW1P5rYH9bx983drmny65qqGDj8MkkvoyxCpJqv5sDWwbLJBVtmM2qiowYWaTHdzKfoR3RjxDHfi44qdCuian",
  "key33": "4MLgd679WZvs7KECj7mZDi3p5mtY5QHqkW6cmBiSR16dxfVXCEY6wxfR2Nt8BgnqJ6C3GjEsNPWKUbLpZEV1zzDU",
  "key34": "2e3HqmqyGYuGucF2fiVgWgg2MQtCaqHHuoF1VHyPJ8vFy1ZaXK5REbSj3Lgcy1hYXqbTAVM46w3ouv72Ze8URhYV",
  "key35": "3vsKmeiqUaHhAtrF852s6qpWpYmc4shbPmsUHccE6Tt8AK9tkztmTUUvJUmjekA9xDJWZGacTyuXacRmExE5ZUAX",
  "key36": "2CBCN76HE62aAPjrxoenJSwbe4LnG314dPA3R6PLQJSi1CyWyuZ1bcekEAgLpg16QXL1GCziTmCLxEXP2iXrCd1D",
  "key37": "3qNYD3iHhseLUVBKesYYs7gxXpyXLtuTfE8SLcjya2pxfX5xhvj8SD53vrZqe9bEinhdENjWGhm8wK6tVffxaTy1",
  "key38": "3vvZHByXJaTDE2bNmoSAYZmnvVcAyQurp6efGfXnbRZstSxnkRJyDNA5qRDS2oyoQTKLTv2HQ7RtbdDzie5zmFZF",
  "key39": "5vQiwubJoKijMW98CHbFriDSmuBNXbzCuidCHrU8sgftTzeuaqe9b4qUfYdoxZgZpBFfdZnDaE6hKvZMAa1cWnZy",
  "key40": "5n1MuiWp3xz3DqyAJupsea6pdEXTgWM2ESKHM8CVNkudtNR19Q8dKynpc9T3LZJD5Ng6ujWGxrwcG8RWC5Jdro7A",
  "key41": "2m98975sVfo2zHXtG2gaG3yACPpp74a1g8kvKsLeAL5NGLVXbqeN99sfDNuTPGjuSMVjDLTZ6GvT1SDTqSefDjYY",
  "key42": "4wicNsM4rBR3zzChBmtQM6ojXv5sAzyHHwhGYEGsVUtp9tCVUHyGX57zJFt5gyXM42PK16m6pPMa5f4nKrrR93D1",
  "key43": "5EPQxgUxNiUvxWbTneKtXV4S46bJNcA8yzNM26hiBZ8qBkaSduuiX187aKPv2nh1N2weCj3Wf2Sv7cHfJj8pXSzS"
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
