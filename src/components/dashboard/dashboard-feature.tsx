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
    "25PmTWkQmDXRNe2NR7tnM3N9Yo9USqhM7AvcZmbRvdqAC2XhFtzsXKQDPqngtpjBdtDRc9rMo7yDPhezQYwZGBCQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "428tjxXmn8ZyidsuXyWc2w968bp7jtE1vaBr8D5CGYQe38snzMut7ZCu4h2ADhkgJqkPycMTa5A85FXEJNq4f7jc",
  "key1": "rVrcWJFXDj7ZqddpJkru39BnTR5WSkDk3Feh7kMzqM1bK6BLzRnHWtZjyhxKvox5Ttu44PbHwR3kzQE6KuLwosq",
  "key2": "3fiYFW8E47A9TfcWK3egqekah2PizmVKHm9FB9gQ5gANebAp37u34PdMuZTNX7Vr3kiKaVkLFihsxFPMbUno7sSb",
  "key3": "5cQwTwAP1vqVRXin91MPW3zTrJ9wpKL7F94UYQSiRDXfgtXXoMBsejrnfYYHHL2LUQT47ZhEf8971qNWY4f8HSQD",
  "key4": "F7sbAFf78EhJm8FtFaYcRgM6XXwzh8mqSVSLKE9XTLMGmrKpYRqGb4EMc9xhKeT4MHoCmf6nGqA877Pb8aegrf9",
  "key5": "5cX23X4ZxTEStBeM4NfYBvVTSz8EEghGS5minwx7gX41SjgGWUgiTjwGLbeNz9Z2y4RE6oAnPcTHtviM4ps5yy8x",
  "key6": "4piWX8eTJAjBNEPhcqF9saz9T1UKpLGknpd6ijwmEb3VdHAVa48Hxzrfiha9XK8QUGz3c8TZcyrMMayDaMjG1XGJ",
  "key7": "2wbD1fTmiY4UciaZ3rMaceaVMP31kh8BQAtgqxi2bBLd8ESyh7SnacUKdbBjH2xA8qQquTn7RiStgg12B8bDfyU",
  "key8": "5PffxSKX6j9GqNnoCxYwReq8S6WsTig1bVHhYAsm4PaqF6wEkheFSazgGU6UtCNDsk5sBVvvJdjvL5SEbHyQrUnY",
  "key9": "2NwK1JHHJdqkVzd4wVV7Mxv8N2HTuj6G6PhZpKPmtbBrZGdZorifqbaDRt1WnGQYzajLqhNEXFWmNQRvj7nF9Sko",
  "key10": "57UCLcp7oQfTrHykpUJghoDbz7RoLxThRqeFWPH8fZwWjhWXTC1ZxdVyW3aLSdDuCaDQ7C8sgxekRPTDkKr2L7qf",
  "key11": "NeLKXFWYK5UnA2CXXPyNh1DjZUg8A4qGAoXQirgL6jG6xoBx8xBTxPFxrmRwk4SJ3Hh3AxQgYWE4CGUuZhyPzEn",
  "key12": "3dBT1AjtMvgdPwwVgdY4pc7phuz8r1c2UFekMXFrLPHU7wUkL1WYYRsa6rZLgXz19NniYTv7PtREBZZKXnz6jNcL",
  "key13": "32jPWtNYth7JhGJouWLyqSxovMrvhW9ep1mubX7SJ1KxSESYaQTHfJdumNHbe6C8EDB5uepDj7ekKS9MMLbX2d2g",
  "key14": "4PcZMhFJrG8cX3hzqS8DpcU7Wekht2QkPMnHocwSuszfYdpbv5v8iz2fNwHuKSwiVnEJw13W2Ha9Hj4gvkyGJrEd",
  "key15": "4woZvnWqPT3dRGMoP6346ZqcjBTHpZux48rD64TPoDKHWLW39uymMY8nY5q5a8Udpk3SW3k19LtcUVNZjm8uYL9h",
  "key16": "2h6HuEqEKQYcFf1fzLVCYsWdTAVdwBFpyCPWDZjuSWbbqVDsWM8e1qQWdfjZhzoWUymz2whtBE7rSQSveuq1S2KC",
  "key17": "4ictskoQgR7sAmJuEFab3tjCuUhCU9SfBdYqFwjWStPiv7uHQQ5q2pWgiiEZ7Nqx72Yg6gdG73d8jfugyJkLqr17",
  "key18": "5G4HBxUSUsYCpa7Lv23HGGacr7utcRzXVH33pZueoHwDa1vKnU1Ywd57cMmiR5jbzk1vm6hfFTq2rXZvjZJC7Xc8",
  "key19": "23FyTt4QHTifUR9dxnbq7t5R32gj8rnCom1jeBzn7NHQU44ftiWxmYcKYNHAW4vUwDGTqmePf7RMNDiVP15ckmdf",
  "key20": "5uhVz7Yo5GHt1oJxdAb9PJSs9uZKdvqsB5pcuyHo6kZqE3mEHy8wMdLGSqhyjH2nj1dzfSbwQ5gQiUWtnpUV3XMZ",
  "key21": "3iKmNv2L9AgQWG5aGZYsPcxmrmDNDeGEWgQJkHqgN2nX9znKiwqbXR6TpyjRCWd2UMrUk2V8z7NcCHybraLw91G7",
  "key22": "2pxBRfWiqXKrZ6ithhW4yQvHKe8KdVw8YFWxQGF4r8v8A41sdx2GPkanJ2DGfDitmazxe3WajHkAAnGzk4b31EBi",
  "key23": "3iYfakqe3szTBahjRUKpeHbSwsNJPNTGv29tK5SXpeWFShKpzjioazX6gaD3wcx7s7CT9894YiPgjnUodUVt7aLR",
  "key24": "8FuRxC273k1B1NRcnGxEtYANgYH8LhGKyyYNAwh1BQy6UtNKQhsGz1wHjDdrBfKH7UYFEs7q14rKKQF7oHVpug1",
  "key25": "2C9TGUKJicyrnyPLkhQdYk1CB1qbTZn6My6VJz4gBFhR36dQwtxzJAXgfQNEpvP9BteFxAiY7sgojgZimtZr45BD",
  "key26": "2ZNzCkLrRQVSviacn3pGhzSe7TFEUwfRXveVvk6sDq5586FJpkuoPcXmh56pNjkYcuau6zmRUSDSgMKbhKHPq6cV",
  "key27": "4fbLsrayHCc5Gj18dzwPejEhkjZtPAHsrAHyiCr9wj9zx1aQS1ZgAv6yAfNWpjvX3Di6pxWxALddPjEpheWK2xp4",
  "key28": "5G7WYknMw99YHDveTL5t1DEBvM1ENKgUNDCUKAdoSwb484a66Vw8hRaCQxrhgw2eDM3pc81GQKtfpcrNJeW6bJ8m",
  "key29": "3kDtj4Ys8bfSLYg4gLa14grUW4skQCKQtnBVJiEPNT68S5yAPRhZq5EWXDBKwroLJUQQmNtCHZtqSJWenhVuoh4k",
  "key30": "uhmBYE1x3dkfLxbr7KiQAjsV6gzgptddkn3YHDHypzqCK9jbHmoYusmQnZV7KGZ4SU1iipXDzrLTaHcXLD5xHTT",
  "key31": "4h6HGWsy9oqr8mCiiZYGgC731N6G4EVNV4R3XcQFP4teBPKs9zH8hx9gyTMJoMykj4rZmgJRppaDHBQv4CveiZXN",
  "key32": "651MpxtRJ4DxhaTuWascNQogHgNtuP64gPAL7Wv8xbYo7kJdrBvDTgmaobhM7qSNa8VGgxGemHSTQP7g8ZDYJrXw",
  "key33": "QXY9v1v7t4GtmhaQ65aiwzkeWWB8H3vE8r9hriimQQbkND4TpbhNZYBKrrSi4QvZQzwHkBByv2m8YbSBWCjWTPw",
  "key34": "5jN7UhKXVsogDN1SoYBDxiBZEcSxVktewsAcFDDbjikEhaNgzW3KXeecLj2nrLXL92A1W3NmStCbS1KWJF4Gdmi7",
  "key35": "49B7Xgem6zWSQffgo3hoEsYJyfSiwyc2feEQaBPtqkuQqa2xvUGqyDiW5nYkAJTQpFoGRga55n2aDT5GKLYVm6uR",
  "key36": "2kLAPnBruXCLqrqH28c1jWYMdyS7oixaDNhVgDvMZdJUCicBA6yhd6by6ReaRHHWQUGi3s2qTh2TDkmbRnAkEEJk",
  "key37": "2HEV3A6ig4UCFt2yd9hfdqdis6ktKeRYTJLJETm8PRDeJ7hx4fwHy3KvzHyZE1xxiKKMooZxNCebHbQT3nzUiLtD",
  "key38": "2m9aQnRk6xm4FrNBVzKu9sLaayp4YB8hpUAeXWZ1NhrMY5APMwwFPK3uuJZee7bcxnw28tqYgfwijrowmpk2QkxH",
  "key39": "9TWAUuJcQt2Qh2wqcx4xr1DtnRWFTzSVNGYyj7D26vqHDrWiTyddNZr5P5xcBDFddKMxwkpKaXHQzbnWiytJEJL",
  "key40": "2E1QzAVzCAkerekbnMUNUoRJWYtGdDfjT3L6URnfWuNz5yKjwEtRgUa4eFZ8K7reXLLJhYX5sY5GbUguo8QLVxAP",
  "key41": "543FMvppFrWAtUu7nYCgziehivVyJYQ3iEWW2RGtetSNNEJ9K2q622cdNPqmgEbgGs88iLbNMeKDZhnRgAszfid7",
  "key42": "5JXYWWo9Zi6tEGtZZ1SZXNdu3NnsuSpznnQjGDiaQyGzcWywaHPTeoc9JLtutBPS7XdK4yET3AChjzWgXmA4PFdx",
  "key43": "3e8VbsJ3j2NQMfZRwdVZtDiaVgWLwx1oke5icCir8bGNuGcBPi3xw8HU2UxXH2ggAJ448rMs8krMf1enb4F9pPVb",
  "key44": "3S9a9z4vbmy6ABQe1xNegJ7kHMTRdHJK7qHKNQDqbqZZoghrNdsxbW7u6GPxLKuNE17Y4rKjSbeCrMkfKq9QfhAv",
  "key45": "5ZArFb8tiaNB2PxzifTG16yUcehoJW6ByLgFScYwTzyGgzysmpvK7ByhvnqoHPJ6zf9GdRhjkwdwaUM1ZfuFHeuX",
  "key46": "4ybs9aWGHB9jYchnt7gaA5NMfqKHN6NViY9VUC5mRg4pqVGPocTY7UQGMop59wVT2qxKaCWhjbK2U5U3LAAYUc4j",
  "key47": "23yXS9ocnLoH1muQh7dRJHTaUu7YtRYRbeP6G2mr8agFF1FixNbsiCsVNoUkUACAyDm4FNHHqdVzFAJGNhrvoer9",
  "key48": "2VCLnmsBgdsuuEma6JdSjZvAVRsh9xz33d9VYeA7sBR5QkdgVJRVvVhMeMsY7qiZzhZd6HQjaoUKJaAj4skgp2zt",
  "key49": "4t71AeDMz6FFtmHwhA9NibTQ45xJ7Mn39C5oa6xpqHW6TrxHQGA52ify6pQyHJtSbvSU27uyB42dt4pHAi778HqA"
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
