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
    "YqcdYiukk4NoTdM7rRUKHkoyrZQ7A4F7Ak9uzvJR32JyTppcsgHjQderHB3oGGDUfYC8Ddp2fMqPV49hP6qT89s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22hbx1GZY1ApwPiyP6t9X8YkehW8pgTzSPzf1LyKz314sPqDZogufKL6Xmakjy7MX29K78y6knxGKKDWHvKUBPt2",
  "key1": "1btBJb4JhF1Jam2sEQSJpL6YKSQbWxWer4B1hTJpShD2rL6BGGKjK2vztfPu6DXBkzktPSBZ4JiZJDqLJGW5Gjz",
  "key2": "8Scgws9aTyQHgu96eQY8yZnGF3kjGqTn6X75fyqhP2maUkHHsU8TZdsGsG9wLQSxYm93HDZapE7CWv7z547nCou",
  "key3": "5DoDZvcZ6XvjKvTL9U3xa25LrPCG6Vv4zJcgt7Bso96b4uuTkJGXMFkpmcVXFCktT9Gr5Dib1ddjQghChs6e4Svm",
  "key4": "2mnMTDtVX3KebuREUex2KLYpGqCwzEpzo4ccssfffn1vduLmwT9KAM46g4L5Y2D1tkkvFd63ArF5W7sdLYLsWr2Z",
  "key5": "2A3Zt3WX78uiNxfTg6eDJJhaVfJtD45JL6rexUod3zMWybi3dSY5YfbWDaqsBDBVbHmStaBLnZtJZWpNNH4vMhyE",
  "key6": "FJTmS1xKrvjjXVARMdVZT7g3mJNsAQL4n7mMzcZGjgYV9Qka4rL1LN4ZzRhe1Dv7kMVai2nXqGTyxYikh9XQDEB",
  "key7": "7KhmkYrYFTAwjqM59bBf6uDtxAcAeTBFWoJX7ryXXwH73cbNSHRnMS3aCL9nmQTQu2VJ1tNR1RjtdfozGZ4xfws",
  "key8": "2F6v9PD5e59XALFdznXYKVXKtnxhaaDfBvGe1Kt3La3KjhbaWUtY17uypkkNxdrPZ42kdaw4SZWVaNvov56raE8P",
  "key9": "51uPtmyYjnZUpNLrF1ZJP8Ukqzd1bfvKh1Hv32rkSAZeLL4m1GYvoK81RqKzR8NJkFVtJLYPr2AfZBVW11ntY3AD",
  "key10": "3gJQjW7MSXuHh9rMTcFHiXpXpoAojaWQns588tvTmqfptSVfFnrPjjAqjcVaAPFNokRV6BzvbubGNWxdvLNs3HTu",
  "key11": "4mCGcGhw75gcAn5S57h5TNRxMyKKo6GtwJJ3Kj6T1LBxqDY8sBrCnmRzjmvByEpR3sic13sf2ukExgtReozbLs5r",
  "key12": "61L4E4V3rF4Ug7RiABkfrAUeV2zCwz3NATMnNNDYhj9hQ5j524evSEFqiZDYfNoFEN7U51UoRSAwfLVRDiUQfTq2",
  "key13": "vErVH55jpG56KVrqKy4dMEQaaVazpJ3Rv1RsnFnsqfGBquFut4uYp56JfU82555aNcPdyPFRM3rf8tYCog9jF8a",
  "key14": "3NQHXtr4y1DF53jMozr8bssV3G1fp7tsN2CNdfECxtABP8XDu6zNrmg1gJEYWcnT9RzxLQSazjVsAiRFUxR7bGEg",
  "key15": "2E56NQCVLqkJECF5NdYAmnCMMh8AEj2R2LtaZS9VrkT4r4DvT3gAVGgNpzDBMF6ZmS2C52Z7DBjDkCFgwj1CKGV1",
  "key16": "ckb2gZ7TndkEE4nhVxtBQD8MNZNd9brPHhoseWgtg4nHg8c9FPruywEt8LvpzwhCqoLfMa4HaABzZkB8a8MYZK6",
  "key17": "orxB7Jwg32yyRYr16t293s8Dyu4E5QKYjKRoThAVPWvJ9DQC3AwzHcT7Skr7y4wPhFBaaoV5NgokEeLu7qC4VRc",
  "key18": "5sEnNbYJLXbq36HUPvkHhjVU5QV5Bf3XRFdNRPwgVbJ6KqFNp3K1gistoQaZeitfvNCBZFGPGfxXkeshoNCtMAx3",
  "key19": "26LTYxqXQVDWKhf4MDwzdmedZwvHozecqEKGeMWgyGaNFGnTQAjquWz4czsFfSaVAUVVfphGjVZgZcC2cbJgjjYo",
  "key20": "4vgbVJuuXk5g7tuRPGTcLyDYWbMzxsfiZkd7uAwFvQ82sPpk2vEs7LGUEJXtUCnFjb7GS1cTZVsJinu7i8paYCQx",
  "key21": "2mmadVETY867Y9CPs1gcCgzBrCGJDZSdaWFa4ipDXYqAarp7Yn4PWQ47dL6VmtfVTqkD3fEz3qYWKAsXQKBoa9Uy",
  "key22": "NBKGzx55u3N1pr3GHWiqFU2mJ2p1AGGPQ68qDaH3cQ5ynUhLTwWv4usEtkvZ8JpLLbQhosqqeabAqd85hEfWEAR",
  "key23": "3p6hx9fiMgJPgUS9FojARBMwyNmYKM7VSYLCFjrcmfPaaS973WkSxiJGtxJU7TrK9dA2EhJvwUYpAPeTXbr9nECn",
  "key24": "2T8W1J3kUtU4iniPcTYKp8XXCHZGjiieefBHjB2FL2qbpJE8F1TE94NM49pLUR4nLzDyQSSnD7EadfLn3ARQiZNF",
  "key25": "7GMukcrzuWWmew4KbiSDhF2PxjHhjWraiF5pvCSAnTkz2RM1gjNtw7iB2X8XqfUTSDgt6BzeUVwt65Zp3PcMzN2",
  "key26": "yvGHhr56Jy5HdRWJJvcs7mcZYf9mRPBmHP2TD6M4K44vewefojENRq25fD8KY8hrdFpLDgyhoohE1RXzhSjKQ6r",
  "key27": "217714mqyEvG38MKLGmkhzZHzv2pcP8PLShiiMtLYtXJYqao5Nd3eFxnepLsnnBS8SW9NQBKTM2zz6ciWajvaxnJ",
  "key28": "3Lpm3BTHrygYu9Hcjc1HHSSgqeu32x9dsW6XE7ZnF4m8Y8JbphvPCWoLP7MFwDRuwv8c8KDwre3t9bNxwCvADXEX",
  "key29": "3YzCYR8aZbX7c8iyRXfjYKGvruEGdrcAztcxTGkcchpXdmBkLw8Ukbxyf8NAxz7SziwqkVgcFoGQ9FgLcWZRYeg5",
  "key30": "38WHzGodsAQokALMJJLJ5DTc4z5nrFCEKwMYvLApXFzw5S2UiyrxHMPNie6t6Au7wHK1zMXtzwZs9VyGU1G6pnT5",
  "key31": "5nH8LfND1yS52FqDERVTjg3RKKA7fUuJaay2P3mnvwCMvC6KLKr8hdxzTXgZSZvm33vTJBLT99kt3h5FMdqFUj2Z",
  "key32": "32bxCjJG2urcpdXhnYzRPeaj25EEXnTn2gjuJSiVdS9vSh4hYdmFqjwuFRcDcPnMnkgKLEX9rQMP6jyKsNbgABKo",
  "key33": "5ZNGbgsyAb93j7kJ8UUTFG7ugghktCWmEcUnpuJ4QoniQ7W8iHHi4FvuBv4bLxEYkc1niDX7B2NR9DFgTRb2A6aj",
  "key34": "xVefW3BW3ofL8F7XioGtst2iiR657bwwrqEQk4BBoDTEm1HPUEndDbcqwUfLzUpo4CkFRvf8X1UbC1jKH2X1w8g",
  "key35": "3PnSqGKd82VYyXBymF4Yb55hScL2ZscEmZRPhofsUdsGKLU1GPMqQvEN5jxyaRYjksSbMqcp7pbWUJPzNY6QqW3b",
  "key36": "sMNkYfoUZ3duob98hm9tsi2oCxnc5KsAfgyNWb3cdvUk2s5UG44C49kzAcNh7LrtB9LsJ9ArgKBaQ1aRGBJvGFC",
  "key37": "5nnXjjPR1fTtCckFA5YAM2pCrMM6Xi3EyBqGc4vUm5th5Sgk1LZooKLeCy6FLj7p4VpWt74iKREixD1uKTZWpUDC",
  "key38": "3fNvcpvjWZapx5NipyQH6tHo8vNoMe3Mw86hgFG3HeC3unZZd1ayQNy8jSswbAAXLpzSzbjfjTBJnJ6QtXgypwDw",
  "key39": "3wMwYNMN1C5oKL1qDBNzFJ884PoFbeCKzgenqTuw1cghk14wGfLqnPXhUV8YWUHU9ShmBbqqCs2NCawynpZ5QhHm",
  "key40": "h6RWKVohsm3jg5ztuxNT2fK3xRjGwmqXBgDpuLYBrbGLDZ2dDfy7ktUvBPe7ZJa5BUmMLWH5T1erNHitMDEgEbF",
  "key41": "TWorheAPwRVhWUePFAnGiHRrfGa8JBV9GgBtTrL4bKR4cw1ePMLK4izXESmpFZi4jLXHtYqKFbiqtiMjb3Mbu7X",
  "key42": "371sdMUJyQLWMnZh5Lf734phV1JMHfwj5DoTUuuqvhi8v4jvgK7HXugLDm8U8DJkSbRNyR6hZPPehFeDWEengDQu",
  "key43": "54PBYFbWxCgepuVcdGZLBSpyBPFGGcWGLmFrCefQas42UettaxHcmNwkqmLgJhrPY9dBopss7ZAwrGZDNDw4NwvG",
  "key44": "2RGXkEok4Jw4hqc1H5SsaDWcjLCxeameqiz4azqSeEmDuhkM2QKSLYSsQb6x4iQCcSQzvG73yVJT31Hyd9eacuxV",
  "key45": "4jE3owpZdiEiWCP1qT8K6D5HcJcx6eoFRXjsn3yAwVYxe8k5oD1FLLf8z47ohioE3XJj5hoQBV7kjWynqMWHx7hb",
  "key46": "647ZyUMN3PjzXgGgXe3rzV7tMjH89kxa1oi9iBA3ig4SGeR46ytQ1YsgXrSNkVjpueVWNG5fNZb6uTDu1R2j6ygS",
  "key47": "3dAkNUHkM4QA3pTXhydEwsVLgCVKRz2pzBME25uzk6fAmdN1Auqur4c6vpA1Uw9PWhtead69d7wa6NjveB4apmV",
  "key48": "29xDhZt9dKrLnD7Tp6nq2zyYQSPrCb13291dSaeypDgCvqkTcoutRhTBWqh5uHUfmPQ48Uyqjy2iW1C89WWKCpco"
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
