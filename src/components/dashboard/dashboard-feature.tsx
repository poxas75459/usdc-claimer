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
    "pcYXV8nowseGYjJWYibDhZUqHvA9bLmgSGy6Pxm6GBH4p7ibHwSk9N2gdHdVtnT2pJh9vZ4QTqPQ3TTiiVJB38E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VC53iYR3b9e38FRht1z7cgFyegyPYQgNUkkfhSTFgf3d4BSCF1yAxftHxBMGu9eS9CUGzAuozgkjFNqtbtTRddA",
  "key1": "3p5HitLi6PgKoCBWWXrcm2hkkLiXF4ERD4nD7jnxNwdG758Zodebxq1b7We5BdqJBh8hPMvW4uBJZJrdKF7wbvo4",
  "key2": "4Ui2wwFjxFfnjxMVy6Warm5ibXjVwLiUQ25sUMyEQjDmozpJPs84LQPkqbSW2RQvLVkqfnACP2CGu1S1P9U2Z2bE",
  "key3": "VFVwE2Nwn8j7RiexpTxSiQuwSy5DLUsVmWfbxvRwr35uUBwuK73Zmf3Vddjb8XkksFXxtwsSec5h7Jk6FSY9ETK",
  "key4": "52vur2zGkQ49nqPZZXsuu3tam9MSecnumDvt1zVxX188MSLsW2KcmnJmbSXAque6U7qEjTXQqdh6EityN9c3sGsY",
  "key5": "5FS4RZv3uMxNNnDVC8VbHQ46c4TUo7F59Vxcjyd9enRLkUz9RjiA9z6uUBnydFF3tK3w7yTTpT2sHJKSYjwVdHgx",
  "key6": "5RhndGFx9kHnRofYNZ6vHCbSTeZqENnxXp9T8EWAJrcjZpuWpWug74TL9kWzgG8MkncUf2XTiAQHc36GcvPvLXBC",
  "key7": "3tQdx9M3zhNKxo1gEJQJVBkRtxchwZtQaUMJzgDUcHzo9bz6UuwdjZb2G5LJzvdEECAVc5muURWkT8n6L2SxaAC1",
  "key8": "23NVi2RBsbnJTYCz8aTn8t5kMDAyXw2mwuCYMogWiXxUsqYNArJW1teVmPavnJvAyx6dEj17zPU9qAb66xs4Xc4u",
  "key9": "2bhSXtp5CqE7GLNvykSeSc4Dh12hekHeTx3uoCbo9PE7pF7dUuckWwJyr58recBxe2htUwLupVG7akubDbacQyN",
  "key10": "4NqAmT5fmo6sfLBWPvC9zcZDLHvEXTTtiFqoUZxpAmNSN3KtrkwebFppoMP5oEvEEdhHPRbbCzuWa4VcE9EL9Z28",
  "key11": "3AqQb2mSemQGDnJnznMzBpgCrqxJtRErG874wXQ4rDb4ssDQTqoBcTb8rap2f2QWCtFtS44GX8iY4EihF5nVkTbW",
  "key12": "Fy8fs5KhsVWDCTtvFxf75qLiBJCd98ev6jvwH8tjKvYFpzagb6CVez9jyDeFLSSxDAqXuEMnb6zBSyNC5MFaFqd",
  "key13": "4h3q8X49gZtAj4Bz4QAWSsS8FX7jKz22brrqFMumJDR2dxJNeDRXnkgSXwJfWkiWCajtBgfzrUhtgJyjKCoY7AWZ",
  "key14": "2gypM13vxchAwTq5vRWjaKQHkSFtupBQe7iLTp5z2TSYr8XbYRvgQiwctfqT9siJrfcXFF9qdqQ6Nv1tXAjbv7dy",
  "key15": "xdgS8oZZXPiRHEGByxPh4EyDoyhN2gPEgK4rkWpSD1veFrFaLe5uYPwLwi7UecVgqMxngMBh8ZLjM4oj7qfyrwt",
  "key16": "47u37GqfDpzfLL1UaiuZrqdBpFQP1y2JQd2wSSx5c6cMm7Met6LtZVXQk9Hdj1iUtfnW8qc9sye4wcpUcu5Z6Lka",
  "key17": "4bao4E6oJ3BJLUTez8GWzLEFvwkbfQLyCX5859eWnB1xxyiv3LLcwr2Yv9hvY6WgmAArJjmhSBduAf7pKWWjr928",
  "key18": "2cvqCw1LfGdGPcTvAVGdk688vbEZQuRpeAjAnY7uY722x2NVNK5g2o7BbQqkqSFj5EP7Bp7f6Ug1xMzXSYEynG9G",
  "key19": "46KGvg15uY8g9cXFHPwrRWM7rwwGThY76oBDHeAy68Qxf8nV24nz3CfuKi4GaJAvZfpN7dqy7KYEmViwe1EfmkoV",
  "key20": "4NuWBipJVpayozwmywvB7Qs4scNKWWsTmG1zchg1PyhPiBuFmzFYSWCtxwoQHCqX7KNKu8sdMQFvP8pZQ3no3xGL",
  "key21": "46H9KqMXJ31SEEcAfJbfyH64BZEMDG3JwGJCJfkNtZ8UBbBvXPAX3AsBHndDrnqtpSqXz3LJHnAygyPygNfz1iE",
  "key22": "UoyuYpjRwRyviTZiwDD2TvFQ38vTA3bWVu3u6mAdPGt6ke6XFoEAz3Wv6NeAnqMtahkoC7ByEdFxeF3xbiB7u8c",
  "key23": "7sdDEbkMNWdCGcTohNcfobuonJx3P4K56h4MoRwsGh5m8XAdp3MYrpsjni7hqaLckJUK1QRgNaCNcfHoAxZkchy",
  "key24": "3escMecSAyXpS7q1bp6gog4fuxp1r2MDiRZu9ozwm9ShJnkNaQUaxPAmtGuHJfbVfWK8YMNuURHBFaHHtdEueCeT",
  "key25": "4NYqf2WKQWvzXHELcLpU7dk4H2pxd5mFpCQ79w6sUcdg9x2dkDmPSC9iUr1RF3G3pv18LYxU1NBqPv5tZxWNNyeW",
  "key26": "4UjEQeuioY4WqpKssaTbM14nqPQApFphM99g6S93yNH4uU1vXndirZnyP5taisTrQXZBu4akYfaYxmcaawzZkaPM",
  "key27": "5GNibcLx6arRAhjsoXuHtoEgbhYXntF1kEsnggAgtKzjjk4NE4biJjNt53ZCZzk26kNXSbSWx7KNBvBQpdX8cnDe",
  "key28": "4SZK8jUBoWqUXhYKwsByNkPP29GvbdUrY1qohqEcvwHs3X2h5KFM29eY3gnf8ak1qrPEKKgGiLBz4agHgcjVsNAS",
  "key29": "3jHEthzePY94jEanUHgqMdqhJJdDsRgDjHGNLfkyPgr3voiEYcRLfDBfcpMv8h91Xfd5D2w3acj1X4rWqDJyvLxf",
  "key30": "3X4vmnsaZNz6qFfRMwwRgnNhW73yK9yk2tzWEKmEpad4H2FAEYTErwRYDXeftZaFxf1QXAms3s7NePA4WKjm4urJ",
  "key31": "pA5gu16fDN82E28tLbuhVtNXBDmn5GAs6CC6Sw6vHRRNcRQjry9sMmvJaxHskBoxp3S8BaJ9Jcgn6k1m6XrP72F",
  "key32": "4i3tHEb1n1P6gc5ePEa4k5coebKwcUm6tnwzSwGfJh7ZM13GJikFSh7NjK8YVHKcTiWSYMjGNYgvPZUVX3oH6qEd",
  "key33": "4Q4Mviag9UyuP7fFJcUuoNF6HAhmBiKoo5QVqS2L4dSRFyYxHXWMf5h84azhxZJfp5CL8xJgfhBCigFD8xrnXxLy",
  "key34": "2hmSf81reaRxxGZcGMnJKcsrRkkq52tLTR6CfsJ7vvL8GNojHA1JHHGVYsasDF9a1qyT4AHFzMHfdhg85ztmxqf1",
  "key35": "NqaRHwq7A68Fr4msidk7hn69B9dvZzkjkHdGMh5diEDfWhPfdw65LgcjgR2Dgrq8WXGQ1SDzEdGngi4EhP635VW",
  "key36": "zw83aXTqKZ4kPCBeRNTPwLE1WGNsK9D4kBqnd87jte5LWKUddkRv5UtcnXUtimGHzcUJFNbHc9hYsvveS2EPxht",
  "key37": "BthLjcDVKJbW3U1dCPRjQigVM9edAVVdDw3G3Y1fL2WVcyCnMWoa3iJWgqi5sobPYMr36yTCgZAVYghdUJeXUw7",
  "key38": "58jHzPJfvbVXGeZTHFdFRdbiGkZkKVfLmtTqpPc5gMirAogueCjt9TYT2cJcaat4EjD82HnSDWKhKXx2BDJAg9jX",
  "key39": "4KUmvCnqrTg2wwRaPynV1snPidyiTQxeJg8FHmmpAQezE4Gg9Dqc75J1LNcVoAWQUymr2cBLHGJhaLLGCmheFeR6",
  "key40": "3t1UGiZDqMhqxUC8ez7PhmUKUa4421Sszf3pQjP8wfsHCmijf8nU8b8Nhdze3y4zjRsAMMcnZJSrN6P3GNfBQEwm",
  "key41": "4Xcz6qAe21A5nESxWoxCcZyBu6qCieeaP7YhxacXptWgAB5UwLy3NS9vHH812woPqFutEX7inCdfSWDnxmtgn7M1",
  "key42": "3GxefJfSdw44nL6fu1XgHToRA4TBrxUXCKS5KLPbprGveHPY6eSEUUZLWVZbTDyQTa6uyQ6wSCQFou2BSfjZXdhd",
  "key43": "3EN1ZGDrn9dA2ozTCHkhRZM957GmqsoM9sf92FciNbcyWzDhhyBUyvx1b4eivVxrK54Zv51RqwckvoY32E1x6r1Q",
  "key44": "4AQYmJA98DWvNuN6FFgfthVaLGzcDzWdLyE3gKhmQ1AyQASW3BNuFmdGmYj1V4pf5ce9KMwrQcztL9qTgkStKs4Y",
  "key45": "23xZBwzY3UxQRntPxBpZxMt8UUfxma7DdgVaAaPnRHsPevQmm1nX1MFbWyZrugkBcj53CQBy1VJ8dP8U66ELexqb",
  "key46": "2LZRYnXpyELVqJZhQgENzuN6SmbLrg8VAZ9Lbegw3VxKbjV22RghxK7SuDaPQrTSkHqrhubPdehJKYcrasUS1Cs9",
  "key47": "3vczM6MYMgvyX9FqAm8TfyDCFr1V2hshLH1pXTyTEDq3UZfqCkaMuuuvLgrWe7FwVeUYfotNWtzPdcNTqaPr72pg",
  "key48": "4tQoxbmrX4sRihDn4xaozBatgTn4pKMMcpzAgbnoL74tHiFhtnJVxM5jjwQGqHSknPPD2Wq9ZKNF1NrtTQuS28J6",
  "key49": "3EUYx7NkGNkzD5azXjeLpm96bhhXx89wLmaWp7ZPnxeyEGLbh2sRHKUiB568Qzo5dcjDfYYDFjxfBGPVix91MKqW"
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
