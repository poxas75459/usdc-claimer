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
    "5zG4hvbRMj2WLk9iL6mEuzqz5f25mnVDgED5oosx8ryFrupwoAiSUpbiY5BhURSs9r3V8ykEAvDJyn9yg2vR3cks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pLPoEhecBkPnQwpeDGkfHaYMg2qzFBWywst7KvFLyehqiqPd3kUxk6a66Qpmri9D5ec3nqQkTpTVMVQEk5oRp7T",
  "key1": "QbXuTqxyExcgsDParV7e8o96T9b83cHCEqM4TXbo3YoK1gPYveyJDEn1WyC7SLi36RpAVovHVk7cPYgEsZUGi46",
  "key2": "So6VqWeCiQGhZvGcrunnN1wkKDqtFD43BW4rp5nvLEvf6L9W369crZKWirnWLrGKFwCVsc3jDJdJ3kpBJ8zdPUL",
  "key3": "51tJqpxPbB4XiheGPpouUjhvNg5wdfKFnRiYfFF8WGoBucMGpALSS23EgbqpWrJC5HUPx5VbBRK88nkYSY5ADkhR",
  "key4": "2XAo2B3Wbouo86CPtWjkeRnVPDy1cwfcyAGNCdAaVFbXRTiN8xpsebiRo2fLMbcZv19YTQ1TS2a6Kt9V3RqXGUGo",
  "key5": "oRpristDWmZfECpfDKu4zJyJXzw9KgPfQaog7W7CnrCwhfP2wUMdfCpJxRqFAUkkzBsWZgEfAhsaQvmrwCMjmM3",
  "key6": "CibAuRcDB1EkQGhes5VcZeJYzYjCnFYEHLtyQxAQt4L36tiQjtS8SriM8ntZmzdMetfkGNpnrH75sMJFtkRJ5cw",
  "key7": "29yLmnCShjHkuDtwWGB19pfsDT2wUdY2vfQ6z7qPcTWS6Yb2PAkEveubzQSG7nJXYWpbwnJQiW8SqbvutmwzTkHf",
  "key8": "5CFaCNn9UAbeXhdHpUFkdL8fj8mpebfv576hfnUMiwTZgC7AF3iHCbCz3vnacHvgcTGyipoGt1V9DXMpBpDaDbGq",
  "key9": "66BCRLkvPeFyfpL4EwqHtvwQrMyeiXj2dUAfHcg8uRunB1K5Q9eYD6BjPYmAW6UfC9TZ3ZsxgBhJJWyUFfw112rU",
  "key10": "3aKTstmsp6VC8HCLUSNRj8yGxit9k1WdNVQLANgsXxRg6ZsDWG9WxJsKqwi1v4H3t4caMpg9ihitfuFhUx7gA9SE",
  "key11": "24rPXrKFCZCHPcrJ29cruK7eguwDwx1Ehg1eKpuPk5kzFba5uRDu15A6B9s9DbFSwWqH7XCBAuD9sFLgDGHdF7gd",
  "key12": "4eY7pqYXpWcj3uvQyReT92i3SsnyUP29atmSaEB9137Us4LiWjGxgZrD6vF7zFeCrxa5yafrdc9VvPxq5btkRfGm",
  "key13": "67r9HaLWnJDneq3Jo5Hj7xyzLcpcRzbyRBhzMsjiMS3LQ22a6eyPCwKYnNYj5svSgTZxscyojrccEgCTLysurqGb",
  "key14": "4CmEn6RyYaELfT7UnjP2JW1p56ULExTVrUgXWebV6NupbZnExNTQEsAPjt29d3NLB5qtuWAYDPo2mS3YgXoYnLof",
  "key15": "25e3K4wMhGPaJemPnp6hqYr1mJehXDvC6mAVHKM5fSLzpziD2MwxTu3wypi2jXGMtFccp9wbPztNKEzmPB6ZeAds",
  "key16": "5xdSiHb4GiEa5wVcDJfE8knz9K6pq4vZBxsa79WymVYkbNMVo7ig3LPrVbof113Vk5UN9h2nsyeZWaopnaXzF2BH",
  "key17": "5z1s5foLRQ194h2Yv4D2emTZy1xJ3XbvQ6zPZ5BLbW8ham8CjzCs6qQJmfFdE7fiZzYZ7WDqds5pebY1ir1suP4X",
  "key18": "2u8jwt3SXs1VMMWSfiPL2buwccGQuUXNMCrBAvSYfAXi2dqrzwY6axZF2a4WbV6sBqLXmdfJvicJ3ABJnN5L1d8E",
  "key19": "4bPfnK4FwNJXQyTuU4xuYXRHny1SMUaoLVYGhaioKrCtrJgqA1ofZjuMoRtdNhZiuurtrrVxbK394d6mqjj9nxR4",
  "key20": "2nAiEyF4FZB5Vv6ZY9doZCrZwh1K823D795uhKnhs9SNHdbZ7kfFqpmEFptq3Lf3msUR2pEhh2gdxaJPwAiQCTVF",
  "key21": "3HHBmebUqLLqd4KD4aHK51qC7f3YQr3E8oPCF838nKsQFVkgEPjzErwT518uyTZrJoKiSXBhhzMEFrgaAuZYm3Vi",
  "key22": "2yQskRRck16C1gPs9bt4oDkam9FmtfZqt3E2sUwfvkLa3KDH84BWnVzdUCVyWnaGVBygXbCdEBRTuBFHZhfc58iE",
  "key23": "oP4htGhKBkM3mGGJxj4NCzDKD8hk6jGixZaCqPfdB46C6mMekSScvvD1Ex8ommJ8d1xzqU8G3y2BM1vRg1VqFh9",
  "key24": "3qGZKqDDYa218RPkvwPS8A1k5wGvLRvDNs2CPFCH6QDRSTF4kV582LoYZ9ra2c5x7VEC4XEpxsiDrs3TT8zYHBD8",
  "key25": "iYx3qdwZnWMMsh63Bez7crdDMQ9SEXFQDvKC8bEt8GSbzt11KCvW5oLeF8RjZ9KduUuUqAxHcdy5XjxNM2EXbZh",
  "key26": "5XUjTnmfGhy7nadJ71GeRykXamCjMyJboGcxMEK6HfzNBmCdRnaxXwRpkUDwp5WMLWjEBbfxZGDV9E21GKvPbTUt",
  "key27": "5zTWQVN31qTJWubywVXzVBZkDWSF6bnwMGhcxHmu6chqoKGvbdKUkukHtjVQ5wiKdek8K6b7Dcgf7AhAkydY9ydp",
  "key28": "41WJSrN8WyrDwaTxvQSB34Fo1B7X9q94Cji1r4gpQkVWzC2h5KCf5s5QFvNzvpMKkz5nDZuwC3bZbHR2gcSy6GT",
  "key29": "WwvmB2BqerPoLjzna75BnyLAVBoLv7KsJyrystVRQW8UzbdWk4kjbAt9FmpviJK4G6zkp2z8Zrjv4459T9yusiu",
  "key30": "jg2PhEMtR7GpLWa2QSVSJLsvVS9YF9hTiAYKABBwTLT3tTX2mSodzBCfHLBVYfUamdbgTrmzFP8vzg3Dm7cY9YF",
  "key31": "3QBTsi99ARX7LpVetnu4ao628DKRbLKEx9cvnbEMT8inznZSmDDuyrpE2Xhy5tawzdXCQJgcqnm73oxkRmFE4Zyo",
  "key32": "5uGtdB3QGABRPeqBZD3DWe2G8FkG8XiXS7jgArR9X8E76wuAi2ocTqETWAykRRxEZ5hegb11kbGVoZVCMF9ZoxYm",
  "key33": "3Kd2x9Nk8dVSgPLUnhr86CMofyYtaSEHAwgzcAzy35KTyUiL2ahg7nfqdnQSGwcSnGoSy4F5trLWFEzNgs2HbcR",
  "key34": "5VZkqHCcqAnjgkTFSQfjbs4y1ccaQ5j5iphV1DkWmLi9xTDzY4mDd9Wg3t6wAofJm8Yt77ah8K3Dq9B7CDQ2bKwq",
  "key35": "ddiHCkkHoP8GqTamUUXQBu4KbLedJ7swbe8eT3stMhUq6z3BWyBd37iN5XnMS2wjnhtCSJh1iKyTP9KUT6pv23o",
  "key36": "4kKhrGS7FyVSAZ6aV4Taa3pKMhn6DpeRKuBUGukcqAZb6UvAvsSPPqiDH999CRTepSoSvA6DjcY64P2PY6wbBVjr",
  "key37": "42n2YB1ZrwLxT1rJ6MXGCryc6Pz9xT7jv6BRQRLozUxgaeULGc9XnxVm1bgnBXe5Q6ijPTSZVhDcBUAp1ByH5eWW",
  "key38": "3Taik1SC6YpKKfvVnT43RHwXiwZkvp9s9RWiBMioJfYwR3FunkQZvXpJs3t7gUwp2w4qQXm3tpyXnxWCkQzvVMp4",
  "key39": "vBCkqUWrMNyhWSsMoZWXJLzzpoGruF7aNzuiroCqkm48zbn6ADQX3o5GDpo5isxk5pG13TEFTuvfVQj6LL1xkJ8",
  "key40": "4Z2aooZz2yfPrU4MAGcHRhpkqeSAdMHBh8Lo8P3pQuCjyaTJfUAkof4sTiLvSwSsDBymN8QWsrTRGgXkqjrrYbc4",
  "key41": "49L6HP41F9QeCsvMa6dZmyQKRHDk8FctyCMvcGgBBLV3ZLK7PRZhSFS54USadPKpaFiGmkiNqm7hm6Z8QLHNMmTW",
  "key42": "25ZjZqwxDcfXc4j75yv53XeJm84BUnuzyqibZBpaPPWEmJKLtH3Wt8NmUzCtTJW62WwzHskNk44XD7AGXJsCShpV",
  "key43": "4Fnkki2CPpmUAkU3EpFpJFozj1EEXQ8xnfi7SBjaiYxyXhW5eVNbhQg2Ezka5ZKrC3242Qwdwe7poDoz4LmHc857",
  "key44": "5FPZquAcc1xsjRKTcJeVoS2Jm35vXCQ1wqs6ChV8rpvVaoq2CVRGoUdqhJcRbvZcWzfJbGrrjjvGM9PgxKgoGeaZ"
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
