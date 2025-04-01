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
    "KLKpNrTfVsfbthXpriw94NrSsqjsUBtRerBV9dkKCb4bYQgxFPLE54RcNnmd16cNcC5pNwHZaopu7oLtkBC8vbk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "424DatWx7iFJmumTg7pbgyf9mueKfYmDtZzsgHj6YQfhdVjmerLzrcdNdqRz6RmCgS1c2rGB16fws8tCJyX82CXL",
  "key1": "P9u35jZgvqmzjFJw7bFkjPLnZw7Q1Y5kehGWZNHoN72oLNgViHnxiwo75ZdDo18thF5PjDRdNFr3m7zmH8HtJY2",
  "key2": "L1YTBZeNUKpwt56WZnaxaXJdR8uZ85Qmzre6xtewagWyATV8cBkgBA4LeBuY8Th7cvEgtS5jvyvNTSYsDkoCRX7",
  "key3": "3Yhzquj61yfYFGPW2K8UJbEEn7UVxTQYLYZbHfQfUBXBTxhz65JKsdHerDrxNvqfMVHVYbftvPa1pdnghjAnFLcm",
  "key4": "5kqQ6bKKWf39XKqMsdumMtXHR36XrzkxGj1ijJWDRzWuKZNDtFuei4qthRbmgX1tMWm5ho8XKweJEU6CeVHTfsY2",
  "key5": "4a5QmWBJrqhc7UAnHKNKjzoVnCytqU6JHana9SW7EsBUXVGZbXPvPxRZu2Nt8zWsZAmYQFe5ak9oFdRddzBiTPJZ",
  "key6": "4iMys4KTB1k2MpGvWtX3tejsiwAsP66AR46ZHTp4JotaKWH1VNez8EhEie2wgtv1NufrDh2qR5QQecAJYxCpF1nG",
  "key7": "4x3j4bo7Epvqu9NtqXURYjw1ukc3CxGsGuY99Jy7NXrB6fjHU7yVDQTL8AquMFTSpSyyTRghJFREcFuSqb2zUHPR",
  "key8": "3JGwhB96X9QtN7gSzadnjHzLpR8ZrvrteWbbkRR86E6RaFhAZyhyGuPExCMJax2FbCCokzPt5SqB9Y4UufVYxK1N",
  "key9": "28uHCjo5EBMWb3Yy6CpvKCZrpsAQ1RyxCuNsvAkvhYbqM4e625uHoXMVTaQU3rW91FL3Rb2bzoHnvGV4qV9KWD7F",
  "key10": "5tnh21iUvqEAtcmHN3MML8YuULLDxDFMtPpA6sV82cX9wcN3thJsLK2bSjWJGt1bDozLRgQzx4Ww6TZEQuZwRowg",
  "key11": "j9yH8zJUa2Dbf1PnEcVe3creGYSNHA7hXQpTn38YXx5MSWpvimiUzdsuqZ6TaWQeZ9zZMSyU1YAiFaEEwK48WoT",
  "key12": "3zm2SmcA5d4VaKWkir123xD6Kuts6QpAq7f17wwfyf3WTXEyEKdDiKvqicSP1rhJVYSFgRV2ARSiVL7k1Q5bo8eF",
  "key13": "3BHm1ALgBW5ZYpo3sa48WN8ao8HsuGda4CospuRAfHXqj9ZdAtbsWF1y3oBYKQ9oKv3kQGWUsCC2DockCTwkfWJD",
  "key14": "4RLZZ8KUfz3DzfDkK8tKBjcHK6hfm4msarJhnUZHEegzwBC6DyWuSqpxA43Br9mSe65keiCfKdxmGNhEYhE3Mhi5",
  "key15": "dhcUHHTPFZom8J2ZF3LrHicopjp48mJJXeNv5MpuLRjPxzKpNwXYxDzd1B3HVi9UZBw1rTPE8QXykvgJT1qMJ7r",
  "key16": "4oGamrLxgsWXaiFEeso7rwnosPLhxw67RQJpvDaQCgetNSsdgSQ2aX6Sr8rtKomGPCRv7VeJGB1CLau3EBdZ6mXK",
  "key17": "3w172Ao1gKzVBWYVPm57Ng8F9rHbVAiGYhr757krr9BTKmAcRtBN28tZbTm1qZjpmS7KDpYoh3HRFbbiECinL5Mg",
  "key18": "2k211fvXCHaUKwLQ2WAUMNepmSzzVgW4D2fT7xDULArt3UVFYLAuSbGZjy3m3fg747bmBeKT5jJrYsHghUPMzBbC",
  "key19": "23mz8WDPbyXpiHCiER4uLdD9ahWF81P9X6a1Xm7q2H4czAH8Vmd59nN8DadwFWMcKeoP8oKZRAELJQ36hkghcSWF",
  "key20": "4zE1WhjaTPXnMw2nHZt8CsHn1Evbz67NEY7A3YHEQZJ1wV1vPkM5qycwm7hMoHGiVE3KVfqouPvjRHWcd6b3AjZK",
  "key21": "5EyQYtzYEnK5VJakTG4yUTTpYZ3BYRE5br3zubtHzoTumnHqcNg7PhmMrM5w7bgiqhqCFad2adKdjYMZu8eKoz3C",
  "key22": "2cFxhVhYqeVKtgre8URREGboUsEW98Dp1q8bB9jcjyeipHfsZHX9Rsxb6Khos9MzewzTMuBDWsRJnzv9m3FicTZR",
  "key23": "V6pLD7Ud7dxW5XAfabp9w7pYUQ3Ax4Wd9qN4f4J1NjiZ8dPuBiqKFyDQKQ1bGCAqNYgqysgwufqPfsracCnkDUL",
  "key24": "54HpxnuPm9mLuvZp69fbznyqwzBdPTWVfm5Y1TTwWADy5C9EvZLsQWXDaXycvakMbDAGZxJgr5QHJ4dR1wKHM6St",
  "key25": "5vwk7BTVVftgaQCSjGmVJGAZts7hTA7FwYDK57eFSp4cJYgEP1YEMZf5QgSmnyJFKsb83utEHVsKktfFTxEXowDd",
  "key26": "43GgiRxNQ89rUfhp7ddPdQWtj9Yzxqp2KEkg35bE7ybKUmCFghjifESeoAApdbE3FD3cBRPGUER6j4LopzWjhSTh",
  "key27": "4p8tT8zMruwspsDeJUs4hjyVsaJit9Zbz4z9HgVWqG5D4weqxuXTpEPozzNp8XxGipk8KN4pszK4bs9YWyYbZ132",
  "key28": "5kmjb1R7BUXguAsZfyYkNuun9g2mK7G8eCk7jKtHJuZ9PQ5QdYB8NfamBNSGWqmkdAbjNJRnz5DtRWKmNo2JPzHA",
  "key29": "F6wFduMxPd6mQFd5BxtpEKUUKfUiraDVPvfedjpRNnof7VqzuTngsnhFUfwo1ewNHRK52PKnehSE7euLVWB3FsD",
  "key30": "2hrHjsMoUvqk2kdQtXprGBeCExpL3WXdcEwcTQNPLiTA5Xzypm6jvNSYrYmCtNwHDJBnZQCxxqUkUamDapxRMkDC",
  "key31": "66ZLGVebxEjrd3g2PHk5t76TKejy9wXmyUPL4wiZpnp9ivnCKCwEiJmYW3PGEH4EzdGk9jLQSxU2dxi3bj1AdW5h",
  "key32": "9WsrPtYuboRa1uBx8HnDYBiL5T27CQHH69Q7qJzJmNwKGk2ddSbCMF13p32dHoL56B72QLMMgK1JUoQMcAKtFd5",
  "key33": "2D1V9hU56KSFdF4VJCxfnCbkQA124BvD9Ks7rJ4JjkLKxCxPo2tXaP1zCk3hBhUFcfsPyvep6G7wfxD4FBsHGG2k",
  "key34": "4sCJehgo5tekbJF9kTyrM71HgZpodhsXXevpwGQ2LTj3gjQP8o3rn47tNgcwT4WyyVZfpjNZuWx9RhfMmoqj5g2K",
  "key35": "3NiJ6AUvEfWSUjYs9cobXqWmh6g3ZcF2ogTzvbexgsKk9fPQJsFkANsiswMigPd58o6WTqPeRJ3tRz7dvafXG9CR",
  "key36": "B52rzqDg1bfsPyc38WypWpZbV2EAVErUEckvePnbkscgZeqfGQefoJChLxT3fWyfizU87Euz8btGwCjZeyQB4Gj",
  "key37": "3M677mZE9rSfvgZ9SwgcfdKBRwp85qdTK1Yn2p7SEFjLLYPejTw1XKJ7BdVfD6Tmqh3txZ3kPs7ogq2Bs4HeX7K5",
  "key38": "2RFrPwdDgAY87RWKYffoQuUFsnCVJAFrExQwt7PtFTHFUfdJq7ZeWgv3T7KcV4YDGNGqEG6heQhxyVHTNiPHUNZ6",
  "key39": "1J7gybyuK6bPwAeYCXe3g9CakLXV4ijFtBrDdKZAoQja9PNMRgBQ8ghr73a9LtRKgM45GazbtfnkqUePPR3VjjV",
  "key40": "3aqkfLyERGnNzhVcXytCFnPrCtsaYUbgt9VQx9f9mnEpb2JVjspAiNwRhGwUZUHdme7pFjLRACZry1EybajpsYga",
  "key41": "4a914ZztKEs3bjByRKmCWXhbaNkjCtMwmvtbWsq72PeJdQppEH4NSRYBraqv9yt7RoK1ZV9CyQzcHbk1c5HEQbuj"
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
