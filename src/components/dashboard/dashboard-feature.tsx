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
    "5CuqvcqS26N4E5ZEivAT73BuGsFP3irz2xkhdBh7t9SfrnQPN3f4t6yjBydLLT6S4Jn1MjTdSTTxDaJ1fwWq8Y6k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YNaP5VMxFS5jDLW8PWVeq73XMdkdhnV9NEW9rwgu52MTfZc7QXZAfs9WSLXdCuno6UqPm5WTZ9wRqSjcnaHR96T",
  "key1": "3D5NehAmupQVMXaoMnifwCB9zSWCMTDuScuRsWHwmyEjG29Y6b3feonqFiMjchzbyAgppQDB1sK6V4dULURUZEgR",
  "key2": "3mBWQL23yqsv9yLfUdzi84b3JHC1ZrWYFwuY6jvZWNnVbPbdAeLk3yQGJ9Lh2TYsywaJAff7kaAnqrsxBQnrczPR",
  "key3": "CoSnsRwi7BNC4aaAZasDA3yWXEWn5uFZWdeeZ48aif8k7XRRgPZ5SWTYXz9AA72r7pQ46DB85Ltd6iRJjoTBTkr",
  "key4": "645pa4B8Z3Q7Dd6UdqoNXeg2FDzN14XNEKAZpTsyvTE9vkZihC2xyEGfmeUA1XQCwb7fwDNfvwwYXV8Lq9pPdB28",
  "key5": "61pcS9nqRQuyaN3m6tD7fGcAkc18PFGW3nDQdLqAY6KyPjRjePiUHxz9iT85hGckuogN4vxeT9D6SFnyXvvmb2av",
  "key6": "5wY1EY1poNrngHrBiiZrjGgGKQr6nye33Vp8iEErJoe2KX2ihvZRKk3S7Bz857fbjANMR3KjdoMv4T7NnpCLXHaH",
  "key7": "2sAXWSb6RWKrw2ryyjc5Keg1pUvrEBWA8bj2TuAB7oihscAvH7CoqXc7yWQoQgncftijNVXJKB6nMNS4Dk6N4DTU",
  "key8": "5fy2uAULETcsogDoGgm4DUGHRELxmzytuG3tihzc6QYTbvZvzWXuUgM92vS6Qp5anAXPWGLoUX4wXg7BSWJaWp14",
  "key9": "51QxC5hkkL1mGdDG5oSNTr778sBEXBJ5L8pXvJteUYFHLqp6Scx1k7ZEk5kd63u7dPBsq5eCWRiLUkpcPfJnUxHR",
  "key10": "5XXqcz6Dri6RxrCAiaW9fhmN25hk9uW6C3Cs4s4C3tX8qfMgBwAmUYSnLnFuxBet2ZcAymCeE1USYCH1cSuddQnn",
  "key11": "61T4EmATRaeGfNQS2nE4YQj69Mt4y9juc8BUZjM4hJrH1b7ZKFMzuAtaZzWgmpdbaKBqFXWeTefzuNgZjaNGE9cz",
  "key12": "2fxegSqF4Xb4QYXjRHqc4gU4Hw7eSksKW46NYzUNWuNeBnkYPLmk3kCok7ULJ14gzHxaMqJtty3zbek914VfAEsi",
  "key13": "4316T1w6TxMLr3oNoEFiZJtpJEqVKCxFAcSnxKYCJXRHkhBoj5VMbVnHPAxSNhNVQDY6oagrhCivfVRKNzJ23ufk",
  "key14": "SMeK9B5PsdcuT9yayTuWKTdXaKHDn2U7j3Nou9zc8f6MfbR1hY6emaMe2iho1Rfi1QxBnKaFqP9be37HWjeuPiM",
  "key15": "WiPhab3DkoCaV3FgyEZrTmvFKNxTHgFbbrx6tjvTjwaiftWTy9n6XZgh5zciaidgbZhn3yXQAnqrpdNaRhcszCi",
  "key16": "5nUnVmkbQcZbNBLz3VWoPdGsdQxA4HY1BUNEwCiayz69SCqq9e6YrpKAS4MnG1uuHEhr8HNVaq1WygoWzqgokMnf",
  "key17": "48kcXiFaqA7tA55BFqw6n2c2954MsNTeM4YEX68tRzH9kabAGvYySMiTpvd8mtbNsRFQALa379nxsTkn5eRHXs5s",
  "key18": "4BdnTZxjBdZPJuTSP5HUyZqKoatj13VnNDRAdZA9px7phTCAxuBTct9a111ddFAvNxxWN3mr5RpS4f2N3DwyY3pG",
  "key19": "2crW52vz9gg4Jj5eeF5bN9UbyBPdYNrFpahCUXf56Ty8L9cBpQEbJaQcKxafqTaA8YmZn6XKqSfiN9iVCSDak15r",
  "key20": "2G8eohAMQhGKssH7UHEZeQtyX6KKAPHUi2zMcpZ37YFMKPCgzcZoAgr3MXXBd2ewR9JQtMRfM23T8e9u31NuUP5w",
  "key21": "3hVBTqL7PwAKUBk7y3m39fKcai7dXvW2ZAjyHW5DBeiStY1CYj3JS4wZqTt97ViCEW3buGxxoyKJPAVMddUfJdK7",
  "key22": "3w7ALEGFt9Cfq4oTnkk8S8tvpWVxQ5H2VtkZXD5PhxAtxQ3MH9vUgg2YqTDFH87g32Twu1R8FPy3f1eT29AgMBLu",
  "key23": "3BpfeK9oZeJorzD9MVWtUFFcPwi8boGbUhE3U8HAmedzhBCmgZuRUiaUMi5WE8HQFNmWViqmTjmHbsBhzQjVRRFq",
  "key24": "2VP5HLNFGfALaF2Hv9y6aVW4WwcGdtQa85WfpBMBySoGW17V7pxKMc7PuAS17pb7nPMJVxy6di5EnXjPpjEfUxhp",
  "key25": "4t3zWompqGUD9wRSypwX1ZScA3EvugPqs5MDoheJDW5zxDXURxH9ZVxydh2jVh7V3SA4vsfS4QpmhNnGCjGH2s3n",
  "key26": "2U1zS6PcNLpVp8jVC3qzRcUcZUmPpcoNoYDmuM9kWVYrjhaS1QefE9yScLZJRRcZ5evhgXSJxoEkbFTwyLj3k3XZ",
  "key27": "4towZfTEhU7SX1cKyGeTDDitR3bh142aNZg61YYoXAQ8mz2BWL8WVqpDFbnapfgCbPnpCL2WMUrAAfwm1QtgU77p",
  "key28": "5M2bfTrzQdja5jMxFACt3BRyY7AKNibG1cEd5vyjrJidNVFoW5XMPdEjkn1z3aQmMzAhJdb7V2aQWuKhPnFSdCnB",
  "key29": "jrsrWbsfxKXnuA6DxPWH6g85Jp5PvNiXWrM12J5VVaNEy3Rod7nvFN34FYM8D2bMF1kfK2uEdUxX4cZhpELzbhY",
  "key30": "5CkdW7nS7RBVN2JKrFB9Nh3pn6Av3uRRPi1sauDYojfbTL8vuu7JFTzHheVWCMqgAw6GBifJfPLFC5M8cNuE8cGo",
  "key31": "2oujTXbt8nou2YzxzdQQjUTv9Zc4h9WYTCWKmgamGLViD4VWe2SNh4TWeUHRsQeFumRDf7ePicmzPsjrXCQHYMBu",
  "key32": "t7ZFDxPQGE4jLAKrsiVLZzynmcS9H7siC5uwXSRsZHuuiJC1Qmjsja8kEX4goyRc7CtrkMCkTfzV1adeGvnGgu9",
  "key33": "5PLXqHyVEquzebof4Zqnjg4RBMRZWT97CSNyBcc6MZwUGY9uo9tQRuzvG5dKKz1Qzpi8VcnMgfMBbLxKVrNyN3Ws",
  "key34": "2THrbe28bbXQswZmmMjtvYFqH5Giph2ydaCFzD38EiCFVc76Qon3FH8c5tQBPb4zv4VFuHqwmbsmEgAEjahkSAdm",
  "key35": "33wDP5uGagz4KJsqW8a1qMaTKonDKNstyzMb71cSYdpcWU34ibe5LkBfEXQb5YFQKDwu3xhZnHMc27F14BYjxkvo",
  "key36": "3gxoBVMP7G7Ks3RujtFmPBTvpNPXPUoFJDEBs8189Scyq9Q3sArWJf16YRVj5GyGAS7uGHZpVX4m7ADggAkEpSJm",
  "key37": "2VcFkRoGmdb37wy5U4yG13NdKkt2B6NeD1av2MGLJt9Qn4f4Awan2EpxD3WS7UEeSaVgJpdtUNJyyr3cCUYUTjVP",
  "key38": "2vyrBZCEUDGqNR8DF3Q5kJjunAHttyeZD2MoXhsVvmTPxrXBKqunpy7mBMfWeaqrtKiEBtVxgF7jqzXYgVU1VkmE",
  "key39": "4YPGSdDQaFDTqvzk4urhwQVRXwt5bc5JCD8sqpj1oWfjbJpmqrVr6s3NrSjrbFNkDTwhDbU7rHMW2js3m99wSFYA",
  "key40": "4TZSFNv3zA5h9FxHJsHZW1dm5MNzUPvptrt9T53w8xeDgcVf2qWUqFj1sdfNWXgZcA4YMXrX1Y7UxLVDHQPvGzqW",
  "key41": "3mnee2bgGjXyMduN9qGpeDfSsEq1ABHYg6SdWXCrwyLGgAtddaXvEcgXh8Z5Ep3bTy26uNBvoRvTPb51eJaVhPig",
  "key42": "4PRrqgvJz9DiL75eprFCRRruteaRqM6Dfd4pVmQtgjDybeDikSQSWqxNvTYNEAHDrzELfHrYK3UFbmhHkbyRVKTE",
  "key43": "wUyffGvyd46Xe6fuappXf1rvnQefcvEHZFKzLLdXU8Xd2aPPWuxVgp4oYyJk1m9Kd53xTy4Mg4oqiqSDhNKVjDs",
  "key44": "mhgs8UYhGWBnV8V5rVrKkGSHRcK526Hwqa5dQRT5kovnoHgHEi1FkHyjvVWV3ZQn392fG4azE3fT4nXTPShDNpJ",
  "key45": "rasVXVtPRmbcVjx9zgfk5f5wPCqBfK93qi4HF2pCC6zZQjtoFdY4yBBaA4FFQc7kpL7mjs2kvvUoqBpWtynwiH8"
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
