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
    "5QRLFkUqpRZrdokBs5iHQTGjbz69xxJDp6RjU54oSENfpm2AFEcZx9dqh2e45Son98zUyHC2Zddn6gwTxTDvjcEd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ww4C5c2GKpd8Cs6grApdQy9G6oZkqcyitThun1N59r2mSTf6yc9FWUmJZxU6bkyeFPeBFiP5xC98utLQ6QWKG3a",
  "key1": "3upaKhKwsuEWwY7t4Tg9GjQB8KBNCG4PqJT2v3svJMcQqAWDzxk4HvWmooummM1hUfTRb9hPLkMAYH1sSr59RPU4",
  "key2": "2LFDouqoxmAuNsiA8kRsLWedcddq9gRB1B9ocv1fAUtyq4Vc4q4QQ3DzEajoDT9rrvadxtSehCTjc2zZP27WSzL8",
  "key3": "5zDjjyzANqp9tC2ijKJaXo5GbPXyokgo9bv76AeCmNndVnrrjF15zkYQySoZtEduf6wDwhwLg6WevuKkjmUgjm82",
  "key4": "kFKrpPbgi8rJ5deisgeiUWcHMF1UvkQwvTMHmdWcubZjk1zAW3ERb9zfHLTXZd6gC7GQ22wz8D2JP4zqiW2TQGV",
  "key5": "UBbQsCfRSoSXQkm23yY9ZZmbyGVc2X3anLfHMyFzydWmKqAT264zarJ3pns715LhxaTPobn44ky1k3uQZ5GTRbr",
  "key6": "2RM8GvCSwvFjthtEwB6dZ4VKZPFr74ozFZkjkMJPyQ9R54CxDu1TMkuV7r93n26iy8BEkdrnS6cqPU2NA3HPtEXQ",
  "key7": "4CMJRtgPJipVYdztZ8hwmwXttUtZ2SsH8vvETM8a5hYvC99JZz8UZbSM92uvAabTKhmQmZhcCs7q39knAKhuNLf6",
  "key8": "8i5a3HToWqLxkPXeQn91HWSDMkcFAqNJ76W8tkKdQDnzQryMhxYGtjkqVGq3rjQmEfbBn4AzxDnVX6an2tuTx3r",
  "key9": "5YVFrybDnACbCJp5Svx8KZuMh1r8A7Xnqqc4U8NdCJEVzUeVpA5NKM2aBN1954EfhsNcyvwnmUn4xxiojszbWszt",
  "key10": "3bFYLsBmnafDLrYbqrKERVJC1UKAL4cEhTSvhKgKhvACNnrnB5Y7qX2KcJVnESkjJFR3QrWxUz7J4GoLM9NpaLdg",
  "key11": "46F4akoW6zj7Lkof9mbKktPk4QRijLH9nfnwWQr1tzHz9PAPT5jeLCyzkrfTRwLnsPV6wVxh1juPtHuBP7XopTZn",
  "key12": "4uF96Utpg9V7sPUfieihmspLN535gEEMLdm47RwbPrVztMLr2BCLVnfjmrGBXVbDhn3TMPdFk9AG2LmPdPbMUDLt",
  "key13": "5ymdtotMcmayHW3nVMeDZJWiApCJuCo77FnXWEK19bRecYPXuekVPyaPeaBw5TTJ2Y9znub93g5eEYhko8ntrqzY",
  "key14": "37oid15TspPoe4DxZu482Kz5BXZq9QTM7Px4sTCp1qh7wpWTiDEmZjAzBcSzm9rzgMy9HYywfqkhihvSesQgrH88",
  "key15": "2aPMxxEh7VJnP8gjhUxWGnmmF8tJQksfQsf8WcesyLZEvDnD3QhCkEhTwT7zcPux4n2bW5dRAyQWrQLRKf8v3J7M",
  "key16": "5mUimPbtZ2iafpd1Ey6ejr8fyf5si9iRqRp5nUmv1FnBgL2PDiVWVniKvDJxq2JW4NhGfjeWB7tVdKyfCdHjdfAB",
  "key17": "7q2vVMomsVK6VV7bcL78FXurcoGt5dfSU2RC1q6PcUQsLVX79qkivFgzCUgxjDe4eYccJDpDHwF9Nd3jSe5d6YF",
  "key18": "2y7a6A3YXAjNENCxcgouVMYfBSJTXfjAMa3X2AMNejCpCyKLSRNCuTpzkwsgqsCAtdiWoXGw3CCEmrMq5CwjZyMA",
  "key19": "4F12hVrgs52LAqwDQfBvD5P3ku6baga4G2vhNm5yJSnK1GcA2JPe1yvXj3xgHTkEFSk42GcSsrKHWsEpePRVJDWP",
  "key20": "qUqKCScv3xbGn8qhBRhbkrPyJXX579pTxWoo4EFeUGngfCunFTe21e6dJV5jFLKiQCropAetzDV6QH5yQ4iGKYq",
  "key21": "28pcFZ2QN1Dg2jkUE4JztFdsr25EudbbZBJVgVqb85YBJeW2NkfqVtKd5kj73mUu43jNK6PgwVbbjvnHFtrkMFoh",
  "key22": "23ZdAQ7XSvNrKoykh1sSAdAftC8HgF9sMGZ6SThg4uhpr1EWBVc8bijWdh3qhyzdthD9Yk2DHdd6jsWYv6XjmRue",
  "key23": "iX9JyQyq7LoJTcRDJFnk2LJpmrkKzyZSShxvHEwCmUuBB9Co149L3xSPn5hth8wvSZqeG9vrydvPaNPbnXQSQMz",
  "key24": "3FH2ACeBmdhwii8SpHBFVqBRh4KMqDpUoR99v5mJX3CZnbY5vNPmvSm4mRBVD9MAXGkDeKED9qrqbVXm6vGRJFnG",
  "key25": "4KEihpBvoyLWWhat6HseeLBEnz1ZZBjMZnRDJmf31ZGEFpHftg1TGv5YcgYakpNs7FmZEj8NVQxPxFBTLtiVYusP",
  "key26": "4rCMDSK2ySNbTUXVjKdytzApAiEPXSScCpL1cwjYLH5nqSrqMWqDMW4CT8cmjH6nPjrxQxn4zYPZYiFgrsxcsLya",
  "key27": "5txaQWWzgYNDpoUp1h3hGVh9uHtGv8vyJuL35BDM3o3GVtBT1HRRYnvJm9zrFn2KtvdRt4bNsMhaJXywSPYffVMM",
  "key28": "5yLtKWz8HoKu557TXGSmA32HqFeR8dmNt3va4ABXgc366ZvJJmnCiHABgzSJFkxWEuP5FyZYS9qeRHtEZ5qDKmHU",
  "key29": "5ZZo52SXC3YQpYbXKe1ciogfn3y3AWCZAerWxf49qTSwWH9M48RPmRUJL9Hyb8cbGr6iLp5VobUUH2a6v7w4Lghc",
  "key30": "4DVEmrVySfp5CN4pAuQLh82soBTyGebvqwPTmMXhXakRpuLwzqDsjrosnnAHcsYzHdMrAzHJxiyv9P35LLSVkKKh",
  "key31": "3Jik1ojiPZSK5RzgrfpYcubrL1Uebk9t86eSFV3hHqNcPcV57sgz7aZ114EW7wzcw3b6aAdXsbnecNB3EjFCQmQm",
  "key32": "62VSEno5tqzM2Dj94ZWYuDodrozEiiLAjRk7egny7Pk1LF5kseUcWWqDji4bhsoBAPgFa16em7kddu1WfxFEvzGm",
  "key33": "3rA6vXi5UNW4ZVTTGYrfjs5h4qjvtLs4zuq6Ey8JkVMNuEMCGnGY1GRxUAb1zdm1A2gaEaPd97i9BL7jo979tgyD",
  "key34": "bW9NJbW69UAJhcJzPRu7rqeTq3qYg36qyeyXR35EFMny3yD8SdoCYTzRHATxZK9LdAZVUBh5EJMaVWiVRrjwbQu",
  "key35": "W7PENf6f1xboWuTw63u23BCeLD2J8nKmY6Ek5poK4Dx7XiXTpgh84C1CAiDXixNZXEavTMu5RzBGGb4GVdU33q4",
  "key36": "4D56JKWdjy89JM3wat5YEjSHdViZWyJzxDrtNudAPZz5zasiAQiNEmtL7KWiq34cJpQowfs9n2RN8zMKXKxZ7pnV",
  "key37": "5Q9kzGd4PW8sre9khwxzr3TvCEgXCMBtZHbbQmLv1u62ejZqFuWVVHhBvSBpzwGSvzeR5PJTAKiUzPNmPA65EZ2D",
  "key38": "2BVTZYXNcjzrzzojVXpxRrRCt9pA9zphRyqetkWXsSyMAUPC4xFGKzNyTLGvcox1tp3DcxdZturTEgB7WuMHPHZU",
  "key39": "Zuuekt8qCQQjqAKDUg2zPPyzFde7LU7T8r1S2JdkEDyvf9yNrmNy1ALZo8u4MAUVHsJDbncp38GFJGXivrVD66g"
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
