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
    "2KdLNNj3NxBbWn491Fy2jGC5qUYZPJ6E7Eign2QmjLBMYc7LyyZQFwJmZQQta9GopYyvduXYzmxmBLhKm2RZvJhS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZMYfycWMMa1xQjp7uZj1deGCZ3MJJLUSrRPv4yDUqNXZAUSJVaRSANxLLdF9BNwwF49wsXHwkQo7rcCkPZzGEWX",
  "key1": "5rw9WRsywk225BaY6x6Rhat7W1H95a1SbW5cdEw3TiLseTpFDuyoF4ouQuFHmp5sWotbVECftEQF7hpc8KDkbxMA",
  "key2": "2PTjDKThbAZXW4UZSnmWHSXGBzY6mCESYr3cEPsZKfVV4N8DNV3NYjsNiADcQPBcopFCiC7aqYDGp7jEBA42J2Ug",
  "key3": "G8RLTiXYkgdyEwpsS4nyxbReMWhhCjgQWp6KoaV6kffrstRGC4rkSGKCqKyF3KppbjQQFwt1DUA2TqA18BzNqbr",
  "key4": "5ks3KhUbWFqNWpHnkutFaJospic53mzvynAvPLKMCvq2NaiZ3qCHrUiaAFBHEeT3Mnghrak6jDDyvYxZZo119Px",
  "key5": "33m5K5asJQtX75BQ7GGcsVs2JYFJRnM3GGDo1SNxRgmQvSbcH4gY7tigGijJPxr5zTNbHFCU6zVu8MRAN95DzGnP",
  "key6": "2H2VrunLM6TSa7GpXKh4kwN7SnNqAFy8HLcXCiozDMSGbGB1JAoLgkXmucB5EVAwsteLwX6Pu3DMm38AtzwHhFLj",
  "key7": "2FhSvaACfZUXAj8Msp8dVYXDmi1m5iPmi8sgdpPCcDWWVoKAvk2Hf3kiLr5bBHxrDvb66exSmUu4KJnC991WAEz6",
  "key8": "2WbF77tBm6jD1vX18UghdK1TFn6wpFTymZncRP1YG7sdp9aPVetf87juWZk5bPm1DSeDGtH6RpzG5LYkPKgiUyJv",
  "key9": "2ZKXWNL5DATeudeDyzabLCN3gLLurdo9jX5TkRdvSsWwmX9h6mKtq5UENY1AbGTdMrPaweE5PEzmJxZXYzngwN4V",
  "key10": "3c4YCY5rjVr6GVWYA1rdeMHkedp1Zr6S2JMaD3xBXxGEjvFTerFwVnBksnN8jcoc4ftdDrjDc1H9KtHutyjw4ikS",
  "key11": "5EjZbhHkzRW87xFZMy8euVnn1wkfu9kvAe1a6RDKuGah3PMM5X87kYf2ghPsTHUFoyMg9TUzeitvAdbXfWx6ENHM",
  "key12": "3c4hqf5UW3ee5f8kxnLD3Lp1MDCdS966Nq4To2R952rmfHfmK6w72HFnVtvyHunptLQRCoked2rUaw9Xh2oPBP4A",
  "key13": "5xK8AxkvbgC5XcrDiTUtuSS9nNvQT5zuj9DjyubNtVXbktWReHAKZwDU7yGd6HfzecBoRJuM9YBYNtCumfKnDj6y",
  "key14": "PNjiF3DTvaqriyHjKSXW7nuktrBECUcWfST7X74F8vn4mPo9qoadHfL9Q9jNng2A5MjVL1tEitdLmcfoULLEfiz",
  "key15": "K83RKQeF3oG8KDK9RXxYVoQjjMBR69hwG63wx43SSRxMDCPJQWYniCbcreGWqTkoSjhXEuXMhLZBLCTPYwhLgzf",
  "key16": "2rPj46RrJ4QDe5oW6gACRgQMsva96pAUZpTdLWBShSycAeceYMcvg7wZhLkQsdit1XybG5N9EdLXr7XnJyHFuG6T",
  "key17": "xYcKA5HoCcp32hGUzwLM3AzUP82wcxeodebd8LDX5RWQN3wStXSjBdJCy6oEiF4Jt9Q9Luu6rhR2najhUFZSMTf",
  "key18": "2R6FKEQFN3UemrC9Xfe9qsWZEcTqWJ1SPiDoB7PhEEJLSkyoeALBVZgxRXq9FZQqf1TfKWAZGtSCjZUF9yFeyrZH",
  "key19": "gUbaGvogHBeowyHmqaX4errjcFbFwwFyTV3hjahZxaqGhUaaFPUCf1NYMFtzvLuo4maSBkYn981PQwqzyg8aGLZ",
  "key20": "2W9aLgPfjj8YdJFmVkQEvGQPyndYpr1tvMpBw8BqzaakjpLfgngZ43FN8hsC6LjRqJAPovoNkhW9QH7LRNBpwFCG",
  "key21": "TwnH1f92UbxeVuZhuyLkY8wTEYrEYhHkYsjie6W8CJJFcwhc4trtLrM9kZd5yojBLgkm2zSAMD8KqL4PJMcm6uz",
  "key22": "4giFMXLR1eik79AjAFkL1BRhsp1C1YTKADcpzk9ZtScF17LkM913ZvU5ZLVgpK7tPHmpPLz6VCpn4HnnaV7PnPj9",
  "key23": "3jUAJFQr3p55v5Pk95SzszFXotPxFNquq5d9WU9tgkTCn3xz8ar2HXhgd5BQKwPesyw9jX8eoHsoPvEr1GnCWnZy",
  "key24": "2tTx82ar3TnmKdyHMjt8MprkJUedxyLCPJN2WqzEGDuNLsJDrbxKTr8y2rxCcKtPXXg94ixSKtjZaZqbB5jKqEcs",
  "key25": "2qwWyADQzfCdz3HWZ96MPiHis1govcmKLWpLRTLqF2sq6yQKcq53rzHD3fFMCTZsCakgqhUZHQdDiDvAPBuko2c9",
  "key26": "3KMiPgyfANuX6nBUwisHtM54drQYicWrv75X78svu2M343in59HZU8fcb9ZdfpWtwN8TYLnhWodSfytmUUwgZcio",
  "key27": "3QT62TUb2ckLHM6HmWQjHdGXns2tBX94TNcT1fAny9rq4ZmLvBoWDkay34PKH1oZmB2TbdNpYkHp45GXJ4DFuR5o",
  "key28": "3AM7X2bjGbHQvu1ETMzd9q1W4GR4GjTvkZvGFMJnmHd8P7qnregntNrXnHzB4Ee2L8sayizgeSmAvTYMk3pKv6TR",
  "key29": "2KHF8B3pEcGUUgWvJLGDsJTTJp8vfwFiCBsPFevFi8jZkDFEi9jFAM8xG88wJwySLYa2LxgcxeGueduDiEJtC5sH",
  "key30": "5MUVTejk3HeB7bJQ9dLBD7vjYPPqVGYWmnNwRuxpWxLHvVZ7HcLmLgmqjg1fYsC2rMCJqZkVZ5KcLRLSCPxQdYZS",
  "key31": "2Aw97VaMRLFAusoBJfN7QUck1f8EecLD2diHaY8eqrG9JZHEnGj9GNFxUZMc47Ri4AwZskhGq485zqmCWiq2fGbN",
  "key32": "2s5o14T7CphthuNxWsBpLLEDswZefcbKtecMWJy7cGKAs5cpgpUhXj9xvkPEZyFmYWP61bboMASmFuf2S4KwzKDR",
  "key33": "4dVyQUkJNg8xzsXWAF7dxAHgmFgGBNdU7P6eLRjVkLyXVnd7Pk4ifkMjbQZVqNv8ryjfctZssVfuq34rJyiMVAsk",
  "key34": "38ugKdCMfHur56wVhazhV4CELvQuhqLcDwRD8F2gFLjiRFGBDTJhyvzBxKvbJcX18xucEsgaVwp5w84Ej4eqGG9g",
  "key35": "4J7fDJyw4K5jBQm3jYUTPos1GAKWKAfoZSHZgFfxPGbivgX4EAh3hoqWV24VAmCCfCHXj1d1bD4cWikDwBq1fMSa",
  "key36": "4nN7mj17xE29t8UZqTPdSHM7qNWiKqR4CDk3ApzijoUP4eXYzUf64oDG1qMajuzHjnMGXQzywFGJ9J6748SyRYVq",
  "key37": "2DoaWb5Zc65HfyuPNfURmFDP4tS4ZesJbDuP5dYxFKUo7iLGRoHjEwJPw5NUF1rpCKfb2De8fqpzy6GWDqdZmUiQ",
  "key38": "4RDympDSXtFGXdm2iyGHZVm188ZvPnSEjhsSgUcXBDz5HMkfxdgQuV7u7xuELQbvUNYsmcfneKMoibMxgZ7Zon7C"
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
