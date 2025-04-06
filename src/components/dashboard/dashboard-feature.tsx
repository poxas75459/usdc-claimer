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
    "573ciUUvmWrBAaCpUrE7Nu2gCAhR4pePF8aKMNvv5njmjrWTAG79sRKmmkxaz34gnjcRJ8JtnTpX5RCF3GCyV3dj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cDV6udivkrgUiigxmjiKaRAsY31NUXgpWJuy6gLXdLUK6MGeN6uWQqGki4UrHjvdfySdZVxJmCiRE6EGHVNLu1W",
  "key1": "47C31c5FLm11JugKpMQz7C1HdSNAM4MUocMUSok4wQkGqKQ9gHZhVXar3CXPa4XMEeEEJSoHQjhFEnC4sqkDyva2",
  "key2": "2suYJMqRg9rAkrWXjYqvY3LUbDTioca2CCjxACQHYW8bMwJdzZD8K6ENS21Eo8myZr1wLR6z7UmHCAQUpg3dCwmu",
  "key3": "64QdQgTKsvhnhZAc5V9z3UVJker9apyLfyokFExiLJUUV5ntH9KR3BMTrE2QjYc3u1dWPxPnM5fL4ZPM8Tyt6JoV",
  "key4": "57xdF1vjmEzJ1XQtYYFMZ4zzyrrbJZZd9yeEpkYjqyY5LVAfPoJzVSaM79TmrBxLp7jXiRGewAg5ASPitvitZarY",
  "key5": "5Ny2htnwq48cyqEu4LAbjsifSGbD8KwGgzsxm2kCM4NL9Zt7drkR1Y8hufXAxrMrHNCrUadaiWTCoUVyP1ftag9j",
  "key6": "4ViRH9KBKyFXVpqhqkVJehYj2K3JCgDrP8mpuZpLTpKmwbVJStygiBUk4oR8Jex2BqZ1E8c4qf5HNHq7qoEGk3Z6",
  "key7": "5uF5PihV5yED9fF4zF5iqgiafqp9ADZmMBrRMemfBoPR5RoFyEbBkoP5sPPvRiXDQKutZMoQqoUuGdL1NpyhC4oV",
  "key8": "auC6vwd8u89qc8gXBMNe9jvJT6RbWDrQ7agALFAbrM7AoyVy2vjENwU52gMZx1WP9E4vBdbKuvwZhrQWtoBLRZK",
  "key9": "4eTwQP4rvpsBaCxNgzuaxpEPKM2qu8F865VonSvDbiGHRPWBCSrKo4SyaQ3KRvMmhoEDPgbK5zVTfGoerHx8uFFh",
  "key10": "7FxSndnDVm9fEZAEcq4XKktMx5b3Zcpj4VsDzG9UGvfbpGi9MjmLb8eJoe6dmrQX2CCRU4TUxUWFztVBQHSzNj6",
  "key11": "pUugxMDog8FGSYzhgNHE47gzNzU173Kmd5DjNpT4GDFWK8NaGc4tfRExuZVdneS5TYkoPZ2EuqjV9R7aZogaM2p",
  "key12": "QB2QrRN2KKGBwdbErDqC5evnAyqfQ17Kc5iC2apcfiUArhMbohycQVdnYonaxK6678CqmtRbKcNB7FZvgJpC2PT",
  "key13": "HqrXmtcQWhj2MnehAPZiC2RArgbqAHjP1u2FEEXW9vLvk7Dxc8vUj9ktZEwe5qqGqfLPYWy6KwKVRHznMzRdBQz",
  "key14": "5UrRcdtVDd9dEDP4zsojbH67Z6x2urwaw62VmjbPd9HpkVxiwn6rouztEvqfxckRTR2LsESunWqhnQ83RX5nMyuG",
  "key15": "3Hks5RremeuBkT4MKYBeT8SFobpR1HtNnw2EWw5e4H7VfAmnfxV2xfRJoi9De85Uq36XRmzCsRJgCAjCfFaCpsth",
  "key16": "4hVqKMqvWnue3dsuZzsuZzqagb9KdHjyMCrUCAU8GcDHjQAGWWbaoGNcSRwUhnSSz5pfzQaexoAFpZB6vSjcTXe4",
  "key17": "BeezuYJaxvnFdSsbGM9hGHLfs3oyLjzx5L11mDYZYBNWjPUu6TuVQSE2vF8RGVDVZCY1CeNs9kSUCx7MsUNA5oZ",
  "key18": "5VoDZpkNQkejBMMXyCZCtCnH6YRr6NA4xs5ssXhgFkYaoLWHb8UWKykA1udHuoX7zmocRtcrPN4mLw3QQvG2DLgE",
  "key19": "2UUmQgs3GsjoKpdRvXboF8QREs72jfcmZRaqqxBnQawNeo32fc9XhsMDuzVsqT6mjtRPQjkNGEdsovgC6p3zyJ12",
  "key20": "3uaCUKbBjhmCX89P1Wxj8yC1ZEYsL4bqKw1R6bJAcCondpHqKaM2MSfBwc7PK9KNWKGmA9vj8kCgxfN15BP86QM8",
  "key21": "2iyMSMnkkdJCBGXnu8jndWbbWqXS1ce1rrMVrGuvUfYrNmPJxR3c4RpqJ1ZKMug6vHAzbG5PymhyTUKssQ5L5AxB",
  "key22": "4tzhbVbJjiedWXn7duR76QMyS1NCqkv5u66hq7XLLsBJpCUsW1B76XAKhf3ZmE87zqwoLBzgs5zQQaSRnD6eNXBY",
  "key23": "5kURP4MjTkU9iEKisahGku2mtEtoqbpsjuZcdmnkpPz9LYJLayctYHwocZL7E4dyKu5eb34dUr2v8W6k2Myf1mAm",
  "key24": "2ZrerY5tFEgLkqFBREMJ7b1pKE7fEx2WRZ6BkUXQJBGyf2B1LqpBHSndJ3VXNkRFWSNLHMnaem5YrGhFhJAcwp5b",
  "key25": "58RoRiMw7fgpVTz6pWa9mgcLBy73e7FYp167UWg3NTXjR65rnpgyrzXeLPmCmWLf5jDTBD8WmpSwewSws2z4Kd8T",
  "key26": "653etmpg77sx4pgzokfiufcja2dzgWNgejNuNqjKbLQz12yp19g4LQhP6jPr7EXiiw1UGDr9HY8eKftZfN5CUSZ",
  "key27": "3WqdCcY3tJWdgB6VUBdnvYVjwbKmmUF97zAGsu1V4t1xJt2MTTsZvADesCwCj2r8pEjgBRQxy6Ex3eZcvmPZLKqj",
  "key28": "3bV51DQ3U7ChzMdjmTUHCJJFiymGKtQPrFiyTT987wFwYaKeoYugZv3WQAZ8rw7YMMbnkq16v1EJ1kAL4rBPH42T",
  "key29": "5d4TJDfnvR33jEVdsPqfDnSvABKK5WFb27s6aNEfPfhzdZof78bF4BnH1b4TixPL5uniTHVyihum1WDQ6c4REHi4",
  "key30": "4dVbsZL43KzmR2va25TBxdXvghGmmvybZDw69nB5RFfK15cB47kkBjs9mPz1gYEmz7tsspxjhuBhYLpSYsbPCpE7",
  "key31": "2hp11Riq8duLNy9hqBm2if5obU6A1F6yPJ55p8NigNg4N9XDNDWk4jqsN6wByoteqRisrUczQkqYH1W4H1uwULZj",
  "key32": "3zpyXEasa7uyDFSoLAa7KvkjBznLpDRQ7c5KvD7dJZjGSHqYYLczQojTjMM4kCN5djJ1pVUQFxXB71h7vZFCU44u",
  "key33": "pRd5iFT9KQCP8wg6twSd1LjFdwmXpuvtqf78qxWh3S8bwa3M82o2Xe4KQmpNNumvwRJkTGgS3JsScmqPFtePsUb",
  "key34": "Q3WV3ejrBwXBjENirCubQ468FJx6bayJkUKuJzaJtbiiTEiAjPnxzUFdjvQ42EtVQBpifz2GqPGthDSL35icGaK",
  "key35": "6AxwLxGAA6D9iigc988JXkp9EdiH3YcaffdSszVNc9mtsbf9y3fMoszSenHqL5S1oo29MhUzRwZ3ktwTysSN7cB",
  "key36": "5tWP3iKoX7zg59wt9EZRt3gRVutg2Emrt4sLRnv46Qk5oVU5APoL4JLGVEpLyZQcRWBuBC8Wv5gUzKDuJfc8EahS",
  "key37": "5xSmbEUXJi3fN9LPpCdFKUbLuVm6Nj4CqhTc9iCSocfXbTMf1bK1Jhigb62tY5NVSMuRojwdqrotTYPEERQXekKS",
  "key38": "4ep8AVEnBbgVsNGjBQpViyBxEu4yhuaRJCdMDA5Krs1zpeZ8qJxBkpv31PuC37sh9FMsz861s24xkWM5qa97bCxE",
  "key39": "23a2KrZDeSbpQvXBqqhjqfbD2LrguAzSZoTaKXSWGpujgwHHEKWL8DTUMBkqDcFkuM9dagbWP4CRihz73Wx8mR1W",
  "key40": "4gnCrbjULwCeRdcj1WzgwNZXaasQZAjy8ECtzNW8WnEgpm66F9mKYzJdZz3C4RTVTQnvUE2QZg7MARqr3CgQBGY3",
  "key41": "5V1we9U4Wnkeu8A2EShKoSjUdhpKxU5GoSiu4B91cJsYE6v3yiPSSuu1hYZuewp6spAN8pwtsRtwEGHMCBoAcyvi",
  "key42": "z8jmryRkwwsYEgBHJeJmoPaE6g8Y1jwrGhmiCYHMabXkHQ4JrpM5z5hRx9QCfi5AJif1dof6LEanPtwHASRYvE1",
  "key43": "3fv5vNk4b9QRaEduwbaTfXDgiiTTxU64fk1V4Qvd9ive7vkrjy3MoKRHuRazG3NsTZmMfLpYNcnLrdWLwGrs1r4R",
  "key44": "39XRS4tff8T6WVWJsueFus3V4LQWaPPZtki6FFyAkkPq6Jx8A8ducKm3X3z54zNbjPdW7AGHnmzKR3VpaJiDpFo2",
  "key45": "WaCugW1kdTMzyfPZfsVnsVB2xH8WpJoVTeMwAFDnbCCH8LndHtdXZv3NpQjRQc2Hk3WNhs66mHERqsTUQ8UFaxR",
  "key46": "2nQwjafit5hygRJ2H1NgsuoN8rqx33Z9mwVEpEDijxCwwH6Ft2Hm8a5VHkLSBEPt1pYTzHK7HA5SK3Qy8yygM8LF",
  "key47": "3QpuGrgFyn2wvmKgfSBVXSFMzofzseJ9XJDUCasamAhoNfEjmwgUxpJcgSytiQ9JH99DGT9dBgadiAyvjpkSUPuD",
  "key48": "25VqMEiNJZekckYTVoAN7693bEvaB8PaRLKT9QxouH8HFMDbrQaCJi4BZyeQ9wGxpBxgoyKtbbywUREF6JUeWJyV",
  "key49": "3fzDwdqnJriWZNPEA3ybZkktadEjj5RjDzpLGEHayNprSm4t6KEYcDg9kUQGYigKZGxzTy9bhFizi8ANRyJ6iPB3"
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
