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
    "iwsj5X421xFYqdVQJgVn3dZYGwQw97Rft2our8vBu9dEgcksMaCeciiZje5mjN2541aJHmLoPFLMkJhNsmijz12"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nAHu2NY5hpypozU2XuA3gwtsWeBGA3FkGwHZ7Qy3VS3jqdaZh4EDj652vkpPoWDWhSijcHsJcuZNwHhdyqHdixH",
  "key1": "2BX6j78Ge7DeQJ6UBP7XQ1q1mja2xLa264ptteh5bJzMphBiX7UUJaYdXLNsQqGnvR1EWTQ8PeUfbxYchNuzq6J3",
  "key2": "4tHrNrMg5fRhUqjWL34jWy2Y6BA7hrSMryfFqNFjdGfsTgqrwBLNUtdkrfWNEM1Wd24kfwSw2XRBt3LkFvKcPW7Q",
  "key3": "5gEUYGdTxnnwDM6RDohS6qiC5S6aewUjJgF1LkB4JHTaz9uM7zHAhzmuT65kn4FLJD4AFr9rNmaKdMHaaafbUD9j",
  "key4": "5erhUE4B2SBkmpiPaFxhGrbbizWHcF18TqU7f76EAdjkpQEKcjUepbGkQD2zzgEkKs7onin12TXeURbCdsTAegM4",
  "key5": "AVZSQJD9XtcXGRbHbGFGemCZCa7roUWd9fGcHVja2o2cuZ3dWq5MLR1V5mc1Fz2ZV2QYBK4WQTAgCNJ3ByxSArv",
  "key6": "5uvfyYUDpG2iHET812hHVkDGAy9cE4LCRmJYmge4b475mbjwf5UrLqrkp6txwoAVH2BJgiZrxN9yhv55DsGxj9D2",
  "key7": "2ZXF61ANYdJMYAe3GxvoEHTAMk61Sz4yqFzAVpQkL4C2VXpN1As9vhWpy17TFsMN8qy3z57v6LDDo3dH8Zqfa16p",
  "key8": "2BApCTSoyoMw8Aix6bdQcw6Wg7554gbYM35pTuUUSuXGEjoQ4RtT1G8DSWtfhZ2fHUYy8o4HcBojGXMdDcgjT9pE",
  "key9": "3Frf1MipEyJWu7dXXSsHf2eoh5ygb2HVKcEzw5esZStQQPkMUhkzgnmXwDJX6YfRqqJXVeZxcivwTPvvMrv8osHa",
  "key10": "BAsCF23reFoqMZEc5GkzGfrsnbHjTkioJxYUeYy6s8BNc9i9uzEmbR6E14HTCxBRdLu5jXvmvozeKKBRCjN9goi",
  "key11": "2Ei3WHUqGFtJJv4zV8BGXZMUjtFVKorhbFwQqhBY7NYVkRko9hY6y54EhGxGuUJ5r9px8uTLaUinu7xtFDT3sBBV",
  "key12": "6KdbQbXYSUVaqq7CpJgkYQUqQdMA2TwHxsNsqaBbepovC9SVTZVgi7LqFJjSuDnPwSHYMboJyrzvrCSZbaKCH7Q",
  "key13": "uCaBTr5EMuPssCmJsehsSPEAcvASJcTs2q83UQtFgRqeQ63CfB78vPHp51gW9q2ZWNSd43dNjBWDkrg64utgJzP",
  "key14": "2noXYusiSyb56Ci3NQbtC6evdnnk3yqJX8ssMtA5466286pExtCmB4B7i15aeEPAXDmxxCR1zuPkMNWAqUpzAp1A",
  "key15": "22FPJLvpyE5kaRE2UfB3fLiiWY8WHFXaF6gD2BmTkXD2gJBmEgQiwHsv1nxtFmYxQzu8xZrofbFUUxdLWRtU29Ev",
  "key16": "GQpfbdmVgqvfy9KcZZJDWKT9ZGvmyRKHSZPNmvoQXYeJP3fq4jz6ASy8yTDusP9miS5RQc8qo3cN2H6NjGxseLX",
  "key17": "24bMoLhvb1fNgS8or1BR121ibqC67PxFUfXai6LcFks183bFtqDeqZtAeWdvDmytJhhtjuEmfdeodYmq7Dv9USTF",
  "key18": "3EVvSw4ReJJt97u2RWQCNMDzLpCiSPTpx6ZUwS2ktV1JmmPRBGiqJvJjb3eKftKurRZ7bWxHFCXTcm5Qc87H2TYR",
  "key19": "4ZmiYtaJYmfFbp7paWvc4awrNysCPf2gerftV9cEwEyVLJBa9vcpHTScWQzfkUbMhi4cc6xJXWgbwFk2zVbfaQGC",
  "key20": "2bhx4WuEdSfzha21EThix7tShXZUCb1TzRU8vWoXkceqBomgYM4BvqJQVDB4cUtNNkAQvM18spctYwvYdK986emS",
  "key21": "3PyijQyXRUHxxhH2LfvRboRSyJJYWdNWUPHEB9BBx49hAy82QwbTWrfxtydeLzBgj9eWhvenuxFAj14bT68vEqZn",
  "key22": "4X7qnDXHTfMd1KNR6SnNaxBpt7fximcdoBJdjiNwkJB9xmLTYAaPLFKKdmvJpCbNSzbuwAupgSrNJnKbY7xr4MVJ",
  "key23": "NgWcXMTV4RaJgFiqcgSz2xRuXtvkT4EXPthCXru1W2ZZMuXqDE1UfKBdCM9LxpNYVQpxt1L1cZzQzSzmQMVAkn5",
  "key24": "opZcsTZfJgHkUsGj3Bms4vAQ3AgiHyBJ1MAf7NwL8CsHQKDC9WVLRcKJsaFHG5gUKmqa8qTXsqcoZyR3PnGZypF",
  "key25": "4duo172wFuLxWNH4YgFqx7qpQfgUixdLYkKYpAGUo6HV9BDU9TDudpoqL8vEXbUvjLnP6YSCgFrQHTvX3Q4Txa5N",
  "key26": "3qf6b391VX3HdDdru5BEiGuQYVJVQGYgW2zZbBdYkHH9rBhwkBgtkQzsSVfEBW8TAPwq76i8qq2LWAuj7wXKEdYG",
  "key27": "2Pin5qEjU9mespgPF8G8gsReemsHT17JTVnmHcKphWCPSU4Lvofq7GsAsor4ZHHAdw5U3tdmaNEzBYestQFQBzMF",
  "key28": "3ECqEaBu5eqUF1Un8BV8cpcCm7Nx3oezFW3q589z532ZhrBs6Kfu9uNRYqEBEgWpWAQ7pHV5b5dcd5aZDKBbrhV",
  "key29": "2Z89SsbGAYoi9zZ1YWUvU83ovXJoZmCt1pE3ajVrH8C3nwFMJviFXUG8xnJbmx6bdQgTK2rxXKGepNFrCUiGR8TL",
  "key30": "5nPPvnbDBkV8BGZ7bfcZXc7nMxtjFCurH1tXSXsLADM7zi3o3E7Ys8Xk2v6gKc7qGtUzX1E8GKgUeGt23sVUoToR",
  "key31": "HBtGPFeTjTsnaGStWGW85xwmvS4C69oT8X5UWtoW2qrnWiWKg5JX2aRatCgR6rKu7YkcmVUdCqRrSvNnR1zqUcz",
  "key32": "25yLT3KrZD52ZzzYyVasy91D6bTDE8hLS5Cp3DpeAxMZe1JaffGNdMfJJpFmBzGa6uwqy7cZCcMqADgTASoqNYUY",
  "key33": "4DVjwxsU5PmqJxSA6tKWZUsavcT5hA2W59kxYww82S5GbYs1NYntdDw9fPmLT9aCKrTLPRq8pXZxKgyb2UahdmMh",
  "key34": "5QnLBxxVB2uYAu3rK3u7am4gtnsUZUnWEoMXdCoTewPw3JDkfZsduq9n2LpqFyNSfdbdnYMcRMTLE1A2bZ4MFyqb",
  "key35": "pHdGoxCzQCKPya5tdFkZha9CDcuvx1pbfG2yd8TSL7oYSRFQpyWUKx76Sh533gBpbeWKVkM9zmeYu8ffZ9czdMV",
  "key36": "5YTbYxhgprhZDw5BwaG3xVAKfDSkgiRZNxtQc3AnXLsH2ZtZUUJSms8tm91ktVpqocF7JgUePeE65WLvERZpD7tr",
  "key37": "gcjizjEEpv1EzVifWqrJfwbdunkJ4AFaN1243SvVWbVfKvTyDuot7uhc4QBUutEfAtvCMNaoyY4aboQRMbqxgdG",
  "key38": "3bu7pJWAYdw7QuoxZofnT1QGAWam6qUbGZCc2XEXd8FD9X3n57mDPcu77MLa5nC8cZApUvquH2qQ8TGrdV6hUuTw",
  "key39": "2b7QWzNotbWDNEtbZf36BVukTcdcNoAYBpQBDVGHGuxLS52jSjxC2LRvob5PZtM9udA1Ray9bby7ggTgErpxXU8B",
  "key40": "2wa8bd7D6fvprpD9SRqhsqcdSxP84wSijX1d223Fd4aLQpeJQrE51hxr2wgNNSj5XBLgRRUt8Gtzfuxz6boFUJCa",
  "key41": "3hYtA3hfzRMhmfQNiAbusPNgRmZaonjWX3EePuNmqcoMVKxipPAQsx8RDEYmTWBmqVa6zNUEbzua31n3dBQm3jUc",
  "key42": "4TSkZci4jxyKTquL761Usmhx1mGhxJNDDENLRkjjEuaWuue9XewC5GdTxNjiAJnSR8nANSp2ASSkSLA1q1m5P2rk"
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
