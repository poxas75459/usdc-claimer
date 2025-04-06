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
    "2uCpFfe5e1BbbdKPHjyopUwoyPCcpCVeRLU1RoAcuPT5MzPaWLjERY2oaWvbzEdLahtPYq7UPB4qf6Asb32pPejJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wv5ZHtK5iRGMAq3rywcvdxeszaLGm3QK64TSTD3pEDgy1oZmdmmB8Tx8rEowDTgRiKth3XNt6nvvRxToNYWSJXQ",
  "key1": "2XsLxurdSaTmwNy2nKVbFqNzF1sSohkGRfiEM3eyyrYZnmhNjd3AGeZ16AQ3ouCmygELPZSzGeD6oGvBSQMZ86QG",
  "key2": "3yyH8K64SQkBYrLMZLtCVwpdDZkShRcDNsPhzfnLVcE8FbGBivR6WBrdZbSNSSdwEdzsnpcrZytrEbp5eN6pE5kk",
  "key3": "bWnYa61CYcK9B78gwotPnnjuCYRGsV17PbBbXNV6iMXPvYP89EQSEdAb17xCwuGiqpyb2a7EFBeQ4p8NdFjFQGn",
  "key4": "61hHt39yYMhdXcFHUJ3D8Dj3FHiNsmPXWBxHZfTk2bWYggNf4M4EdafhaZiCBaCbEpVApwVMR8dWYzy2ECssz6Ud",
  "key5": "NtaUZ5mvTCntj8yo1Fzi3uUPZasKNN2fW2QcwL5DMbkX5sN63BugTpE5A4g9CBumVSB9se7o4Fi8zhWkPEwtvqu",
  "key6": "3iheuFCP2sT1Z9H5HFw3imKL3uR43nwRqvKvvncP2Kmu7nKeHahPCwi3nV3NykE9aWbhBpEXbnsNGEEGcucZWZGm",
  "key7": "2KsSpEdi2TAVoYk6tcs1DpXqt1bw3jP5gQJ7bviAWeGbDYKDFjKFG6JRsKBEkpPD3bBKMhyrBFEMLjMEXjubocdq",
  "key8": "63fhyoC7wUnWENRRkRVjfQRWXyxR4tzPaPqULS9PW141iYDr7HVZzqwi17pchUDC2yc7kQz2DiDGyA7gzMwUFTk1",
  "key9": "3zCcqaPH6Hj8tiEkmB2wBnAaXW3gZkDhh81EfytqZcdz6jgSWPh8BDWDe8KwVfHxFfyTfzkipLjTcY9QQYruYpe",
  "key10": "jATZYKtUAXidYYBJv5RZWGc3tnpdDqmFpoAVqcbkBo58vmQJgLrdfXRrNsTyduWNMnydaPMWwYwcYvnWNcDyMPD",
  "key11": "26rtBSJ9Ex8iQRpsRxy7fSzK4wAABAsfufkj7fxtj35yRjTNL1ZKUNDiYPz9CN1womNnRXuPJTvozPA5CAsvByG4",
  "key12": "4xhqX781kDP173cKr6HzkwM4m4Ww1mJVbx4douqNrPPwbgsXMq861ijnRUw1uxK4CEwjCVs2VkC3Jhkbub8LFrgb",
  "key13": "2tSeQwWfwBw57KiYwR5fGmGtsnUxgACBKFGRhQCnMdLjEw7jGb4w66mjBVF5heYkRC7tArnf9RNHStwpP1FW9qAi",
  "key14": "NrzH5KaYuTV6Wt2uA8Y5Bop8r9TzU8FzzrnibydEKevdC2fGkxbHQVN6xLWSWSjuhA4kxhEC2FC9zb7NRXgVtHh",
  "key15": "qRmaSZvJbj7RFuvgW1VwtoksL7CHtHYuPDCMofQu7j4oh5Z1u3FbkkACStVrUzLui8wDQbeJQvAtXg6YuVj7TgG",
  "key16": "pxSkQCehSjdGF5vCiW1mthgPPQCw6WV5PqJNQSPDDznx4V8BVnXK9mnySHuz3RjR2fSQyt5mqJerKCR9FbShgfy",
  "key17": "52R8Z7rWbvk4qytK3CUwQguBJ4tYCEPjF4DkgkEEVy7ZCVY1yzGhTRgAXPNXiAWuSaQSHVJ9vqBHXK95eGqYbny7",
  "key18": "48AHeZsytCywQtbA7qYAq3EniVjJ1HgmBoG3WcDRV3w61k3GkZNF4BSR9AxqTgz3xofvAKdgh8eRSm6iMR38jGX4",
  "key19": "JQPPw4jvjBtd3Q7Twxbdnj2d1BrXcdrFJpmMycHAAaKD14iBDwytBQVD71HAQs2R529u1FzQKvfbNKoVyXzUTUU",
  "key20": "3Ex8vyrfpmkaK2wQAj994KCWFfH9JUFpS5TEsJQC1V2emKAnZ4FiRgTPvQnwr3PCBYdB5p2A53CPbeaEVs9ULNvR",
  "key21": "2x6agLcWscLUGCEXFNSduNRrkh9BvHBoVgcPAyCEUWszxkM3hNywxEqEjPyecrD7ULsVkffy4inNG31aBw7isUYj",
  "key22": "5DmKWDMzfApzQjtDnELNLmPbPSuEqxRUibNPzgyMbx28ujjEKKQfKaUprHVAC9AHwvtV2tzcigB3WrYQcebu58jk",
  "key23": "24dS7vZ2JdhzsbWDE4kpnJ4SzkPxbB8UC5bL3DQVTXNyhfuVD8XzMMJxjGrpYGTXdMnxSa2pMcMxSvXr66GHjjJF",
  "key24": "63eQ8La8hDuoQhP66cBm5j7x3zfSXFszPWz8jY33gS4JN8DAggfGCeihMFyHsxynVdn4fprfp4JLFXZpWtEwoudj",
  "key25": "3NXWXVAyABu61JhUquq7hEbAimGgb1wZkCcbEiMwCWEfCup5JcMpmx9ArEPYEViaJhPRPBNHUcgkX8MjJsr2ASK9",
  "key26": "5Eksduq7m2cuzrWKrprr1uMHJeDCSQCqcDvzD74D4UBQdi548xMd3ZPm2gLjXVDFHxJAWaAArFWSftQfMhmm8eMT",
  "key27": "4cGGYN1wYXXhW42d9i2v5NWaDo4GHadjfSkN43V1oTTiHuBtu8GqgMmdbyatoEdqu4gQE7S5VUy8oG8Mbkqe3Ba7",
  "key28": "2TDjjFP7GppZESpqdfjBnHHoD8DN8RKTdhi8GgRD5kpzeCmvKhDsZLQ8CgP6xAh6hwkobTAanrzPhwNRCipsZKAk",
  "key29": "5pPfkYiCr2FEFZejeCeeYHvErmEeat2wP9ZhvXmDVY8VHm1aheK6LxNWfJyKe6dmW75UmbPVpuEkXEytFiQesdnc",
  "key30": "33HPJQeyxCbRdQ9rAyt5JedJkVTJaxdVTKhrExSJPfMkze8G72KeT1Bsn1264adNzXpxVmSFd7tnCBcZEVum12mk",
  "key31": "3FMiQosuG5XgLe2ByGJfCjA3nj5ZbfJ1S6EVDbbjaEkNgNdE27hfRrYdD6t2wqoAXfn5W7TFFCNyYX96VzWsZyTe",
  "key32": "5ozi6Niu9pYM3LYU3oWvJTei568bQNeEqeVczfC54SWQWLfzbHdn2bD2TnBEMgoXmve7DrkxVynin6CKL6oZ5px3",
  "key33": "3UDZmuro6MGK7VSkYWDoSefZYEQqhdoYce6MSNJboJHZUGG8NXYkgboB8MvrtMcV7fVCMiKxiJyiPMHedtRsqVZm",
  "key34": "pnwbnZ3wev81pv8wupWxjm4oDWu1cCU6t6gZG949xi4asnjs3KHkdFqkoLzotGd5ZiH43tfD54DLAFx2qP8tmZX",
  "key35": "2dRfF8upJdUb967bQHh6v6LBt8ayLv5M9ujNEExiuoBVp8r7HcMYtA2puKZj2JaxVxwuTDf4MrL9PX5p7nzVaxVK",
  "key36": "3xCXB24895YYQvx4tDya6qjtUToGX8Mt4dRvVAb5nRLrdyXm9P7icVwZ9Qf7xZhUULXDxB8vNKejx1bV4Mze2yiB",
  "key37": "6z6aWgxeHpVvDh6rysKZF9X7nxZ6gQPAuXFxoc36fHL7iyBUVBm5MJaKQ4xuYDoxFXZNJ2iV9N6YdSEfCzezAvs",
  "key38": "GCa3twjdveKeNXEGW3HuzPQZTFkNArRB3AvXBiYhVnurZZ5cMfK9mjQKE23GDoYftayjWcRfsLuFPVrQ4N1xepJ",
  "key39": "3wpx7XAPa2WVNnW8GcsjAFrHACjTrr6AHy82YMVXAoQLpJdhrHoCTcNA6nGKp3AzYd55Gb4NfD6ws1msA3j6EA7H",
  "key40": "56rqhdqLYK3hUqtQL5RA6mcgBWZQ9TwHUD7HkW96qUoUYs8kzaMubtfcsWgdaxAAQFbAFJiHQxyiZbRXzGNK3V7f"
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
