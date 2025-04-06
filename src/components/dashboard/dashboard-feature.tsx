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
    "3gRBBrVP8wH8U8sgFbKgGoACrDZcg7EztdvdbPH21rMgmGYuF8jmYiPzAnEWStFf249sWMXZdatK6jUySKEpmt9E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WaW3VKDN1LuxFhRZhRavAney1MAVmYcwJHM48D5ozau3duuVhiuS7vsbG6o5G61ynmaYdR9YqTjjen77HdHdi2T",
  "key1": "YHyp2gq6PyM9hBoc7fUNe6BVUcDAzq35BAo3cKvWwC868ETN6QY9QgmaDD8PZhwZS3ZVGPSBXJQKb6pSWHeSvZB",
  "key2": "4a7zYyxdpPxUvstVBUHrqjKYo8MNLso4GfNyfjay832sFcDE3Jf32rFoyvHnrL2LxvQkjGxBmsm5x2PoXLn1pwrw",
  "key3": "3nAtaTq2GVBQCKGErUHwqjDHtj3MDnq8F33cDBPtMhyaCKozKJRBGkL4r97xyWAAGcYhUedPcJD3793gmTmZ16i3",
  "key4": "4qpd4GBBE3rP1Tcgpr2sLuMGVFKUZondJS92hBG69kWaX5E3mzNv92yPTM8PtaWCChTNPaVzjRNAnzB98mU76CWQ",
  "key5": "2ZJ28GAkmvC2aU9zQfgvM9KdYhKo1pByeGo2HHzdAeWk5g3SsoTWmT4eWE9EDEotUazVZqxTnDknEXxVBRN92hf5",
  "key6": "3fCGbZSYKWTXkPjcxdX8eGNzEseaf4CDPnuAHYU7vBQZmmPipYrpxEzrLYncMudF2xCCxj5tZSu6mrcvwLuy9Zwh",
  "key7": "28fh9wBP6bFskTZ6uSjKJu58oR9J4fUYRYqwyQnoyw7CJRCmZeSJ4SnnDHrjamjReL4nCrw7xkH3SqMioXppzPw9",
  "key8": "tq7RyA3JmejbArSUE12FU7hJZKbm3JLH6neCDjjYS5ZpjBsRvQQts58M3wwxt4tz8vtmvCSqRzyTKqD4dj2MZgP",
  "key9": "4xDEPzTzrqQcCPs4ZBbtbUo2JgwzZxZT8ugWe4XqrUYzuJxrvQbQbCVMxjDa18bfxhSBjLc4An6YfzkFmoSG98ks",
  "key10": "4uzS7jrv16ZjDUuFg3Yi9pr43VdNUFBknfp2pKWEZPLkqA2VAWnkBhqpmRjtNpGumePdiEbmiQrxpS5iULko1N9x",
  "key11": "4aRkVQZBVGxnH5taqUhpwFSuftZAKz7bja4jEotbE6QErXmfkRK6MqRjRvMG3cRW6Btjgx7CGZbnuQSfgLU98MTc",
  "key12": "3kBAVxL4igFy1FzdUviPuq7pQ8nfkjBssySCyvtDtXzWSUR5BA3s1LPf466oSY1tg14Y2JL7pYWksLauAiif9gBQ",
  "key13": "rH174zkXmJUHcwo8wVRSmA3grGcDnRqkZrRTVjgtj9e8BU7PDSP19s1QkP7RBU7be1fs4aVS8upo9NKp2SwBSDP",
  "key14": "3fH2THjXiP4DYfSdW3Qss2x2aFktDQTWNQvkLEao3omGRjBuHabEpZd2c7MjJuRRa9RSNtvrA6ujWkrttgGtqNfN",
  "key15": "2zXW1LT3RktsAgjfUT3XWfq7uVtYQx8omBua49j7hA8RpwGx1Wgx8B1nozNcc9BsNd9oiuEJj5HzRZWkTwQjtaME",
  "key16": "3HVHWLKGFnLwBoZ4u2Cxm8R3bDYeST9Dapci1DMDW1xPVZCnjmxrB5z7CjYVPFgLnw3du1jSrFjrFrt8aXpHyc9X",
  "key17": "3Cr9rzLPjTFYkCGoacNCjjwNKG8bs61oXqgMCwp4rLgJeTnZrqWXLKUg1DUyyrh3fwoZvs9mEk17Jd8C8RW3Xm9A",
  "key18": "5HayRmvPeHFLueNwQGNasLLruwLkmDMtPpLNC1wDeXo8Nkadc8cY3MXzVwANrBkrjQ5QabTngAriXzA4zj39vJbS",
  "key19": "xUSDtw6GpgHumUPtZPvrP5pWnRGTMnuByi6PnAyYR1voXYUnrRPW3StHAfDDL4GipHVKhNkP9ni4s1EDftunG1m",
  "key20": "2dukXCZ2jU3PVc2o9ooeskGQbY3Z6eHqe48uPg6RNeNASFV6To1Y3kXC8sWPMEYo7sHifNqNrcDsRKBjqw94gsaz",
  "key21": "456FTH8WLJHSLeVtDk9Cfc1ioFe33y9qgCRR4frYSCs1pyZzRj5j2EVyNwzRLrnpqW4r5k2riU2xM6KS3wUetHb1",
  "key22": "2AS1z8ZNkPg2oahyJ2ZS2FnAphuwnSScYdoGCVffewLXJZrhu7vVtrrsbTh6GRFvpwVSNcLaRzPdcWNvpEXnrMpr",
  "key23": "2rQwQvYkUkS7r5wS41uveeDsmZummpgL1XTaxTWMBEcnHXjEBTgZh65XFTYqfJnSBTbDp6uHXXSeBB4XUMteB8TU",
  "key24": "641bVv2JfWZt7HNxt2P13ZwytLLvUnNdiq5Sx4hJuV83HkBtAgemo6uP8v3iJqzKGtftH9AAHvWkHu2DzAUanC87",
  "key25": "2P57KU6nTmuFzMSvstG8dtXRihTPxmigv9Z8dri3GDG4dX1e9UUhYELqvwB3gQKRv6ob3B7FV1q2b47qVTnqLg6t",
  "key26": "2pJ7p6vfRdtAG8Yt37qFSnkydARgx56KWZJ7ah6huU7feFuRJDLMUXRAujemrcrNGjNMnNyJ3Wbv83CiH11rGTx5",
  "key27": "416wwMAX4iPosY1fYVgiunmxUZc91NYUYCLfUVbct6zp5vbVdtsoZ3w9NGV51qDgjm6Kf1HkDsNdm5qtnxmsJ4oH",
  "key28": "2aciKQS1sMAeuNQqQxRq5gRhH95HeVvvpjqG4XR8cUbdPmcsqPwUjZPYrCWMvFLTJ1EC8s3sUo5WoJWqRYHFpA8y",
  "key29": "rQMTNng1pAhcvpS1YedwDrXXK3Q3kdeFa6Ls5wMt7Egai8E7XeHQQ7jF2VmuAtdn9C96KvXLHVttiX3LFNCk6pn",
  "key30": "gcwUpbBeQX1YuX4LnKb3wn42gapb4GYDaZYRFZ8NHtPTYPyyLKHadhMra74tuiHa3uU5WK3pdhAw5SnLDsy4VRe",
  "key31": "5aETLXvBQ3B2hfBfY9fqC16Nab6GAYvmNeNQbumYZS52CnBGd4qpjmJEFmcLWRoWtuRSqTVFsVAyC4j9ASnwyuq4",
  "key32": "5D1xgKjk3uLpLaNPshbPKNuA1oyJvRTMoJ2VnaLtqmqHwPWUjfakBVkkjmim7UNp9CQHr48xenBUji8koFcsonWQ",
  "key33": "HzKxWDo9bDY2p4MELzeAdcZn43xKTYsQuxj8UVD6TAtYewfAPviDTYKAqUKwUYwv5HWmMC1F8b1PQMynfoLBUWp",
  "key34": "5GSDo7jS7xN8fT5vrcdbm7Jppbebwg5fXr511A6xDMZzf1A1ZwDhNzLWwSmEyzKVWAjgoqbRSPzNYhQZo2kgff3j",
  "key35": "26c2rVVruXShkt1srSXtdDTmpVYMyTQLJ9Asu9hymcZgFuArApRPZoaqxDjNKtKpaUdjYNV54uyLpo6hqwPmtgFr",
  "key36": "RvJBvg2JhhtxeHynW1ebsj6ocHxkPkQoFrgN6BEVjvhA3VSw8zfRgdiZn7F8TmGS8s3QZPsJsdKonAwKc2XiMfN",
  "key37": "2jQvcV5rpkWg4DEzdUWU7kWVfGpG6XTTF3D38EHSrnYnmPX73Wa8V6srrZxtrPq7sVoFhPAwvM7NW1UMWKYmn4FZ",
  "key38": "4miXLY7jqGD8ktjUhj3gLBe4GND3XWUkv6oQvCbB8nyHzAte6Gcr4toE26Tt6cS5vzkkLxDuW1F39wpueqM6yYjv",
  "key39": "5mU7tu2SWX2qyVuWvu45W5Jf54JXUKQCADsKDVvEFdLdZnUiHGmcxwKBxTF5q5qXiUNueaLcx3ZrPHQdqJi6FvEe",
  "key40": "23yV8WNYhXsYnCEpT6QMx6L4RbByte7uXhmmMsLjrcxxJGJhfpZF391Fmkse1ZFbk8zdcQec4ebPpTyCRuMnudEN",
  "key41": "4kqMEemDZU394vTWcwkNqydAUGv8JrGGGqKS6CZti8NQ1JE3f12tUqBiotpby1awMRSAvzmAKUwbjFsEYGFvZ3zE",
  "key42": "2wtoTUNwLJ2ENDUW3c4UvBeU8GynvvUoWAWimseVhc6ihsmP7VzGGLzu3EZZRS7XespaThhAt3oLShLdshWfYw6t",
  "key43": "3mSdpiteDmo9qAPAYKnwM8mraS8w7ude3tfmkm6xmH14emgqw7w6tAaNFGmUucPAdL48yggA5hUWrSanjdC9CJss",
  "key44": "3H2GS3jw3DM1v58eW67kz5rpAKYBhry4FDq1uSgU37eTdoeddK3Mi1hnha8i4yeo2uos2WBN1H7aJdi5pJKETFz3",
  "key45": "2SDR2j8ZEHNZxEuDRBQTwzBDmhoJPsQrCbDf9SfykkfDjmZETCjkRwv9jBE78cUYQq9HTaLZQVp53nZP5kKCi8Hj",
  "key46": "3XLR1bMfqP51hqRt5yVFawvhksibUbRqAqC4F8JVnT4smu1C77jnSHTwiNWWzfunHbR5itbWRRrP8zPjiDxAf7tH",
  "key47": "2N9TP9ut8QLx3RrPNn6rbwfyaYupVYuG1v9J2z9rF4iKkE1n4ZyeM5osR3gtY1ghvVv9ipfnxoDPFgfch9BtjJaM"
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
