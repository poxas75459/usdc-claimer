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
    "5f8dKMU1RVS2mEaGGrjioJuaTDeoDSmkfp8ocjKt3drfF1bEFEpWinXbJkesR4xdJfoxQAmBYPk7iQ3t6gRF6LXi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XAmKAubso7Ycgw5V9ppLi2RvuhJGhExzVfrDU8bXCZcr6H72dGbv44tzzYxWJavTDJyxPCDu2Y4djoLmNN7ZB6r",
  "key1": "5MuYAkczGV92yjDJpzQgiJbW3ze7uKunRggnqSeDsfHcLQYyMdaG6ySVQtiF23N5CuwvmNGC4vfT3sWsm2hhip4y",
  "key2": "2MNE7KHh9ei7xFp6gabYSufr2jthLVUKHJ6zZntojUrEhLLZRkQHD2ZP9pNpCn4UFk3mZxbMNnxMaounRSoYTq5y",
  "key3": "2edNuXvGj4hXSiTNM2ahKrs7BJYvexATTgUHoApybsHtvVyd7iKwJWL9ny5UFKR5tLpGvCZgVt7QHNHs1SeiyqPW",
  "key4": "335X7SxAjKQqPUGePsW63XnJj5fsPLg7y4DeTSF2NLSuZ2vQ3Ssc3Cj5QfikS2UYzQYG4Z4b5Swxrdob5GorvMHz",
  "key5": "vPz65cxs9dJuEYJBaCnM9pNzQc43ya5X29hYseCqEu8uqCL93YD3kGgb6TtPmZi8N89sX4vpiobJorbD3Qh4MUL",
  "key6": "2CuRBxRG7mtLSoLcsXVHeDAPSmK1DRRSRtmSapCqzuUDZarSfmqjuvfy9JdwRDace9R9LEUGV9KGPLZYrEibPGTq",
  "key7": "6bHbNYjqiYREjgcW4xZGDEJLcwtB9S3B7xFEoavtA3m6onXDszLd1geuXLVe4SahzUoknTK6EHEQbY3N6RBFF6E",
  "key8": "5LEeM6hb7vPH8XnCgzJE3os29pbyxTKthY512hYRCdLLatdeZQNY7VkdFzZcZijS3nd5FmfxokHUF6AtdU2frAzr",
  "key9": "5mP8cYUCfnxmu9Xpo2MCWAKHXsSgaH8Bdnata7Xzv75Zk9igjKewzdgisoHpYHEHcUU3ETc8RWG458K2y9MmHvFJ",
  "key10": "4i3s9BZyrMfPi4h5nK9DzZCs2JybL2VftE4M4xRWKS2MEG43CqqKuZSFHM8hczj6HraE2pmpsfNanqxmkcMG1TFy",
  "key11": "9xNdG7Vy4NoHPnmbgFWp9LAwgLE5EqUnAGZQTbmzkPFABwcRTbXzej2Dsija9QRkvuusvXVDsb4VHDqdFMm68pM",
  "key12": "3px2UrTfi4oj5xVTad4vCeWZQopesMU59ZBmnktHNrHethpoXbDTG6W8QZG1DRmgN6Wnd9J1fx2KQoniw4hdNa2t",
  "key13": "2JCSK5HJQUwJFKYLRa82RzPxSHS5ctWdciK8YaUY3dSXoHMDnDqVdCtyTkbe6xW1VNhB5NyULp7bLaisWaaFPw5j",
  "key14": "5d2AfPXUt9DooNEtdWLoYu8QnJt42c66bXRk4NEBnontuokVYjnaQXuBGK44ZvUCZEcf6FFAaTPDhHSVwxRxVi6Q",
  "key15": "3KnoiCkhjyL9hr9tQ46v72e7yYCCFQVvcpjZpCs7rPQ69Paui7Bo5niEczmicfqRj2CTRrR7ydfKFpiVjNBSEVWg",
  "key16": "3hn2by297TxWADdZBnk8VAqx81j4mE53zZjJ1AvnWE3G4PpaDJejXCBZfdvhsF2j3Qvw588dDXFQZituJAbhC5Di",
  "key17": "5upfKhxZ5UbDr68tGcpGdAWATTvX25JcRQikeudnAkqVFBvb13eACCdoQxw2ba38J7C677rTLYJCaLuu2nqY2CoE",
  "key18": "F2cMa8xR8oq7FvreF1kwGoxC7v9jgevCguvRmXHt3RxjsraqAdb1PyVEhc6C7wuxaACmvAnJ3ZBjYFzcSY3q3CF",
  "key19": "4ysXfuWw66dnYCjzN3g3BxuN5WyLz4KCUpp4LLoe9s99u3Yhd7P3tDRo8ScWnXiEijXGVSrmEiw7BD1gZohGqgAD",
  "key20": "5jKBuyr2s38CUsRkRHbddJfDesgyVne9SER6n4eePrfBMsitXk2hwxMMKAbE64csUCyzmHM7jY7VxFCppfzG62RE",
  "key21": "4CVwa9gCpqkM1EMSKhtFGdMksrE38NdVeGPx21pS9JCANq2vdSYVJQzuTFLWmL75HqxTSo2WCB3TMnk1mBq5ZNDo",
  "key22": "51tqz4V4JGgosNGMH6PRYSjJWM1ZbATkimSaqiC4pYH6hV8MXSmdnSL8gFoxRGL4KuKwZPT3i46hj1znUgymnB51",
  "key23": "47LMG1TvgoMhq4dhqVWfdvoUFJJ9WxHAgQYXYuB3gw2bZU4LeXqRvHB9jEmFGXfLaoRWGA6ejB9zmaq6ye3mWHbs",
  "key24": "2XKSE4UBm9G1xg3xYUi5CYo5oAPQkAwYsD7pTYxd8nFSEjtdWxZ7g1J8RuT3HcGrJMzpxf1wCoMyD9vpvBZkky2r",
  "key25": "2vkMj9MqJ73y988kUraBDXrv5w6Ru9Gkr9vULTKGhnMWHLf2uVtZF9YC5X4TBJMepdr8x6mGUD3qEGAYLhjys2gR",
  "key26": "5BpF3yhwoiSR9yo6qbaYjnTPYFTHC3uqY2XstGNSp95tN8yiEv4B5NiGTYTCgCu4ykTq8is5AfNw4mwWJux2UHRA",
  "key27": "MXSbauBdtBtDVbokmRjLuc3s9JTFXNqShax4M3fSDvvv1N8PAe4dAM5dyRJtD7oC7BGhhDYu5H2i8TJZKCjSsae",
  "key28": "62eDk3Dq1MANRUhSXJvEQM9eaXZGVNtsmCfjXM1BUwUcyBoMwRf3noTAVSmtgRYs7dZ1Did7MhbSEYjnfet9Zize",
  "key29": "3sn1G7yfTwF2ykWURgzBjteRsN8xuZVswywVyTDjmK2dHugSWmQb1x3TtD6Aspys1W8X6iYd4J5P5kDXPJa6A4hq",
  "key30": "4ZFCB9Wt5T4LVq3RwjW6mHFVDnerF81Kxq62LPsysGVUJxqGy38A5K2yALprfka4N7EZ43j5WRJ4F93qpzxHEN4w",
  "key31": "3e48TN17SzCkfxSZJZomNT1wKHQnQtnRZejqMdTvE6jjMtSVcwvNutwKL54ayJ1SN8Gqq68csgqnFWLxPDa2XGgW",
  "key32": "FRLerDn7qiYtjbubmFFR7pnpXDQ5p62c67MWYMAd2eyndMAJr8Fs82fjm7ht4YYvkCY5of6sP5danC83N3Vig73",
  "key33": "2MJZSSxfi7FDnGZQ7YZFGH27oDs3AKXnjFvC3Gwp85E92ci9QYiTK4m6cE57LiTze3Jnrx7cCF4rF9Qz9dEiMaWZ",
  "key34": "26EDKdYkiuUyJz5pdFxmW2eoS1uujVkNxhuis6XrQSb6WdBVHDbLFJ7nASaTgs36SVrDghGagfmumDasptocEX5D",
  "key35": "3GbrX2ujB4Jq4AC26kyFU4PLtRYRem6Txp26wfbX2YefH7b5oW8KQWS4jkmjwiwGn9vMxLKUSQzK2EwtZLfMr3Ry",
  "key36": "64pkKWUZZyp6qUnm6a6J85ARKk5M6D4zx9iZMWBX7Y53k47WX1A1DM91faEpds7EvqXmjsRMhzjDyVTRZVr63nP7",
  "key37": "2mEiGRfzep48UpYRPrVAsBTcbWsAZrrw2jqtSeWV7TutLN3tRRsjX9KZHCh5kAZmQnxtSEFzWWZBt6PYF3TxXVrL",
  "key38": "3rwJm6KYhLZetydsuA6agQ5fuzq23Z4kauYfKNXY7ee8z9pxKMMacrqrKKypYfmSKvUVjfiH3WXPKbH9wTL6wCnJ",
  "key39": "44SKZZ4Q9PzBfHkscWoHuToG48ekCBiDyR7X7boeyd1Ya8g3LeSFkuyMitJ2aSXiVNz88gRRfcgeC5VXNpSkLgrg",
  "key40": "4iWLMUiV1iiiZkD57YMJSMeRiWdzipiGVzQECdNYVFir56K3iKhJt9tWP9nwgPnqWsQR1xy8m1FV2SxWQdn2dyje",
  "key41": "5W2sy6CAJyF7SjPYoYAwH9VukCvn3fswVoVKWFFEvxSGb1b8FHmUEBAR31ZekiorLQAL4U573irYotetTkufhofK",
  "key42": "4WZJ1wabMdDfLGHYfnUD2cVJRq9xBiyRUdEP7eVvjmDMkmB36zwjnSG2xGF4U89Y5scsDu6RG3eVXzkbfAJLroGm",
  "key43": "i4RsF5eJERBZ8rPQHuuMMF8kNDd7VTcyrCriuzudaz25m3fivFXcp7pMMzQNwpAvAajkdyeN7MbKwbWCj4PQV4E",
  "key44": "2LzCvo6NRC36NW68thFr829bU19YSaDiNCpst3xa5pocLTYPKwmUAtdKjiDunoESgYTpi1PX6H9fUX81bJ2yQdkS",
  "key45": "2SD6KawQSqtmXdHXBmqrcLjiQoxnQZMmBJsp4cAzKpFDe84FnHsw5i8jzm1D6rhptEN6W4yaf5JQEpvgTVT6nFZG",
  "key46": "657Ls8KuWjXzrkEc3sUbCtECPnyLTMXyL2WwU2EWCS73T7hvkfdGvLkRSfFMoRueALqVkmSEN7213duF7kigYeT7",
  "key47": "5yXbEsyFTdkcDyEpbogfBy9SJs8eQ8WDvXQe2sJ7KWAGYXQ6ABGbwJnyvzLPcVk4D7n6MvWvYSo5tJ29xT5pLzDC",
  "key48": "498KW5Gy2CCQZBSUGpvjWcSY6M9ETCJDcq3CpGHWunmACr2PKkoDi72njUaXUt93z3fC5dnwV7yyqyDATKHeqGE",
  "key49": "2D611or1zQbLohhhPNpFtarrEsc9GbmZTMCmCuNrvqEMmaXpsnic7tyH6ceCGExssxuA2X4JZVVxXu6ivzBK3vr5"
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
