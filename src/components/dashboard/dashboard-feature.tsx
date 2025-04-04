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
    "4dxuQUwN8Ex5CK3Dnop5vzuzHjCnui6soqg7FbttfNwLSkyKA8xeBsk2FwffWKpbhrxhHDuK2yNA5sehcNjpMzyc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UfgL6CDDYPeNpEHtYAhN1EWmcqiaixcrPEYyumxRinG5M3LhsCvJQtoPwFUHeg2T7EUCdhPYXYZ8pPq23DoUuR3",
  "key1": "3sDxqbK51mwr3EQe8EBBeMRRhpN6NP3vuwUQFPJWHacukjX1UzdmqHtik6zX61ZR6sC7KwYeq6vq3JkPu8uAp4iv",
  "key2": "4DqG9L8TDRS6eqztPG72jdUzNnnQ9knAPTuHWaiAv2qaJiSt1UT8DwZuw9woneNwJ5dwUYegJ58qnoLT8QJgzGpP",
  "key3": "3j3fkPPE6mDMNHwPNKFX2aiBv34fXbA4vaeXzjNu5R9yruDkwqqExmetWMsJLG6LNyfXJPaud7tr9WifAzD9EQb2",
  "key4": "56MSZTw5FzTuS6swc3jMgb5ASpTuastMSqmXB8YTW3awBHuUaGJoUrF4dqqaUoGL6ucmEk7RAXr3VZy92TdSToQW",
  "key5": "3JJsKKu9ZkrFDiWCChr6tFjSi4nL9AfhFBHsX9xUxattuFtYb7DWBE3UGCVo44mUMQ9aicKdbtFFKDVxtXX29Cin",
  "key6": "3ZBgfVbpcG7iq6M7rqJ2z8XzDCJ8w4dRjg3mQm74P1Uji5asTA2FmmJP4hbrHEjxEMwdMwz8coGdFWPzM9nSBdiN",
  "key7": "4HdNgkQjWBUsDDZSRiM6Zp5R89k4eBVa5AjyyQMMW9eZcXQUeqqo8NC9saQ5Yx3AWUtSA6LBhvY33mCnMmUaqpsC",
  "key8": "Vw5Pmn7NnRzyASgNaM8hrFbVnd6tAVaNCz3r42LpVUxwFiQ6GAcMoyfDJc3ThcVNsqbxfvnA6jw8Aqv4FBbVY7W",
  "key9": "4sQN9ZYYdbXAtm9AHKz4sR7obPG1MncwEdfhnvmKredrUpy3FgDKPwdmTo3iQaFj5AdEjMUDq7nkwTP71KvUEu4i",
  "key10": "EwZvqECrVHvTn19WPaPih6rWP9iBau544qjpaCP5jhY9rWPstWF1yZeK2UUUT5M69k76UiE1nKz5aEi4SS5mX2p",
  "key11": "3xC6dx595AhBFQ5eqdSzBsXn3z3JCeqHxQ4os9eUjXSckBzbUfU8Ay8wjDHmL7iVuMW6mfAGBUWF2bF3K7Y4ELiF",
  "key12": "3bFjEA3xwHonM3rbpo9UC1EVYMNYS6wJwqoKm2b321JLqyvo3yjtEAMb5z3F8apqwm3ejVtUBhABXwXaU2FgVY82",
  "key13": "2G4ULuzTeRxzwT17erbAMmy2X7CwgeaRyFdRMPapyxQgd2upYysK9tHiFh5TsVUB9qmPLLcrg6VPNcdMqMKwhbzp",
  "key14": "5qCHGXB2yM1qhr98xLqSNRUZe2LcVTLqbCQk49VXe93nDTWQGquyeuDyaKVmQPyBGtPndHaatw97NUdxyy5NFsfJ",
  "key15": "41taMUgx6PA8BfUx5a9ymAs59ngajRjECXVSiixpem79N6WF52rGB35V3BoZHdMxa2q63JQEevKJCXtHTcnc5VdF",
  "key16": "4ovUGZPAPBg6pA8vck9Mm6BDcN4juw1RaUPAoaS79sWs7hTriYkMcrVYoqZ2mitAVJKDxboZCT3PELwkPyiCPaka",
  "key17": "4hNjbUfx4no18pFvK2zi3sX6aFL1waF4pVYzCL3W4SC9ecwKrFCbyiPVp55L3dpKcsde2jznNcbwB8qZeTP7QFqN",
  "key18": "5jrUREaCce4DRWAzrMdAgHR9CBrjSSDKFFzQ2nHu6oyev4YSxWzAffuae7f1wL2jh5Xc6Npqj1csLVXkjoCewwRe",
  "key19": "3gNFHksinWw57nUh8jufjw86pVHgd7Q7LN6iE3mQyAzDVUxvMrk947P5TxWFRf1dnfJnXeYf33XF8n7VhQcfSaq2",
  "key20": "tt9NxFFP6Q2rbJ3mRmUHAQVxmNZWxKbYVcaMMTJtqMih7N4pw3G5EkvSdNpiyH5HVQgcPuFDGbVFruMCpsPQiv6",
  "key21": "oHHNUTQw1z723QaSg2ZuTvv31JzQn7jZgHWHRvhKWCK8iTfSxE3ZErjzs1M6dVhWVysvxaTekWRw4RdwUhQANeR",
  "key22": "hsK6HTGCSYQRHZMAiSBuJJg4HKMmdmCqiFK3T8swzse5tbwayzbBaWczoXUc5Jv5wimypZXLcZ8REM6ws2oPaxi",
  "key23": "4FxVZXov73suwHj3mbYjBguPXmhLeJVvk2xJF8AmYqyvT9yjyKj4QUijthp6SEsfYaLU74B6ZN1tSUUAJuypamzr",
  "key24": "3Ebfytj6Y5VBVbjDYseghZuqgaGzpMHTJjxyZk4rjVid7Tsu5BRcUFbNCib6Q3ywoJGAcsTRGhVGH6jKdPD8tEhw",
  "key25": "2nefsw93msAZRGRJ7Kbzcu5oB7rR7KXNEwff88fCfjVb1G9znmirJby6vxMCETxcovsUTCERhfb7Bvop3WEaGNqs",
  "key26": "7ikfhs1krGJZG3BrhuUuRRDs1gRng4DbxMTgJmtTTvMwzpG14CgFiWhFWruCkKFLjndaUmervMpGo1jxgygbNyA",
  "key27": "7qv4ivXksyRsSAx18NjL9Mu6YRxR2cF9K1K8ZYrrVY4sJy9b3Bbys7yN5NoGXrKnCpXMWQ7d4cq4VUsJ5XnY1GB",
  "key28": "53TuZb3DeaEytgnFHxi9YrmkGQ7deC3hs5KtXxys4kvu21LWakFqYeEb7kcymNQJjibGMqAeHNbjckMnLYJ37ygU",
  "key29": "24HAtX9cw8SDPogf88iP2WDHepaacfAtYahEaz9fE1Z43XQfb6aXsa5Np3m6zhw9gRpzJ8k7TMUMiXEemAXWQjYS",
  "key30": "3cgxWS14F3YtCjcfzF7HDzKnejbeg2TvRUTFFrQyKezfUz9xo1x8XK3ndKoLjP1WtVSbsXxNLLKxrmUGJqsnuAaR",
  "key31": "Ak7eEZypRsaUqYY2EqRfuBSVcyMp9T4xqE4dbD71KxiX1Um8egX1aMN8Bj8zittSS6Zt8JraDaMn2ui8DudXigj",
  "key32": "5EU1a1eu6s1doV6WTxZUqsjrLLYPLxyNCEaKcJggCF8Afmy6SqgcV6LHETFdWEbVSU8ktoVVj531py7ZQtknR8LJ",
  "key33": "3wCCfZ9rtNxhNt4B9V99WC38kJR3uNRyJEGTw8YLBTakoGm9XmuCLiDkpkbMGZ5X4n9AEMA1mW4Uq68NdADiLRK4",
  "key34": "5x4giPzJqbceF3AMc3R6qftZWu773yXYRWH1PhPJs8cvQSUk4tqr3423NbSYJJauv48BUwfXw4jskxkjoGLgn6d5",
  "key35": "3wQaxaiPgZgjRn7V32SGFr4j2bPAgdYFa2ejGxFjG6qjtG5onLwDQmoTQo4h3J4ke9oWtXjegpHcr92WCap3pu9a",
  "key36": "4FDPY9ZJau6zfZtXipY8XmDprXcUWTqjQioLc8XcG36pAhRAEzmuteJFiRf6k8RDq8zPd1Mqh1QSDW89Pgn5fAAk",
  "key37": "j6RZ1aanZWeXG7osB7s58JY8RcCDjk4jpT59FxS5jWkpZJuQAjWiHUPxRPLqEK2cZ1TtbMsqyzqboBGLpBTVv9A",
  "key38": "PVDxyBC9Sxs69vNkor54tqATHNEZFrpqM5TgiAE3HFUy1tseCbGaE8wtUYYi8pwjbFDP5dZZnT2VicHXQpN2sX9",
  "key39": "4ao8EtRMXw6Gtn6sqX91XChuCvetmh3avjQ2byhCqoudMdnpNrK4dik37dbchBwQci7ixaNA4XEZ32MD5v5jjHWF",
  "key40": "gJ7ZGE3DEUJFdKJX6MYz89YMfm3WeMj1uqz3CtqiqCT78iyTeUT7wPrnh6vph4MsvLSRYArxZCYdcY2RYgieuqW",
  "key41": "5C54GcfXkUCKvzVZ3YPd5ybJGeMKzwM2zgREVSGeERyPPtrn92cJaTq5LwNfNc3pgZr92pwY6wZGsEbNdxk3Zueq"
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
