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
    "d5aJiz1QBEJy5tXR65oySh2NC9J5g7WfhXNeYsAgAMgs98EKZvysS3puZDd91At6Es5zrEKjySkJGzWqdi3Crwb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hUwdJYmcPsZo4eo9qh41Mj1gvaX4RmpswnQ2YBsGmGpqRtc8ffDgoCiJpdnChUmfDjSK6EJG4dXqLSRqLFSMdAV",
  "key1": "66YRMa7BQbHchpKhcVMQSxGEseBh51g5ZJp9BSh1cQ9gPcTNACLi86SmTq2BHrWEozUkBHhLhzHzjQUTDZ4ab3iX",
  "key2": "2sXWmzoLMgmHmbuKjHZvsVaaMdhycsT3MJUhbNPyGNcxnXD4ovRGH3sX4n1BQcoEsRV8Si4tj237uXMGFcDy4GBy",
  "key3": "3vNJbtUrDeKpMDKf9XpWWZJt8qnmZpmi42TBMDB3uAfa7JrHRZeTge5udJE8yRcpFXdLfj91Cs8XyAP4XQ1gqUsY",
  "key4": "57tSyMEu1ESAgjSiJzTqQz4Z6eHuJtnFfLKns35X1va5QQhGmDs2mjWZecWfUrhSDdXtEg5K6fcKb2YzZynzUT6W",
  "key5": "2uLnqvCotD159FwcTvcf5MPzYxwDVfF6njUA4o3qYpJSJNSTWyTmJzAYUfbHYusPzBdNpo3VASriHpVfQXAtiSig",
  "key6": "2kkK9sg2BwFWsoBotf1ZtmPWsf2eBvX9jD5pRTmvsXuVqkA67cxziCi8pg9rrKDoTuGJaNjYd8GAYMRpo8oHGVyY",
  "key7": "3RfbbqLKi5LhBb9gPXNHRbQjRM8s1b1xpD6w6G9fD9oSCBqA1ZkH6agUGVwjQCydGHecJ1Jq4VcuG1MkZNXY9Jam",
  "key8": "65vK3T4x6bF8o8QsL2SXXSJVFaxiLcfTpuA5ZiuG5WetYbWu4Z9TBSKkU9aTnFJNFhbC6jL1kDQF9ELi6GQmPQbG",
  "key9": "AFwtz8HDky34GXBrrGiDVnXe9QrhHnw6aSfpgQQS3BgTEnMrUdrip87gAGkRWACHkkZunSxfNCY93LHMVJFZ5a8",
  "key10": "3Fb8XhG4HmU5vWe5YwW4yQrk7zDBCs6JY4LhAXKNKfh3rDBHdNLSCvrqzRn8r6vusiYiRZr4mfv4rUSiZQs1b1h8",
  "key11": "wjuqrNsK7AgEjhVs6FJrtuLKGCJCeVws57jP8d9zcuqxUdKcd99sWzHFLiWjVSM6vAqLM9MvZ5hseeUoAAhjtxK",
  "key12": "5ELZSHnYy8vzydPAp5f58aDMMjGdJB1KiBbDpEdCj4VMUwnpfrf8ZuFPCD18ZPcSi2ZrKi6t5JkgrbvJs3XefQJv",
  "key13": "2TaW2qy3RU1ER1GyQ4kdwTs7EhdjGRSuH5APZWznJWkgqka81TaLHv5z5Qu8sDAfQ7NQ28M9n47jm5tRezoibUiH",
  "key14": "5qZSRvNheTUB9cE1FTS7UWRZ1acU4zJft28x789kQi9m6HswikcvAoAHSgLSTKzKTKbZvRL6NSB8av8p6GWzLLV4",
  "key15": "3Ef2X4qPFxBo7wfdjHWU7ZopYDJBa6PyHLy5wHHYBmqfhJNh5S76WJV4jGhh9N6uwqUyocfSxpUvUu4rmSaQbrBx",
  "key16": "2L5a4LnMLXZCzn3fQDNxKQDmQSeGQGuAX8o4bMZaw2BgHibQjyqUbTKfjAkVSpX8S4cBrKrsgTVoywtNoun8oAa5",
  "key17": "BTm4CiGiKEZyopGriKZfDxfHTeQsnS5rTJHb5sgu4UEJrD7WnNn1JVUb8igkL4Tmw7L48ws6q2NQmXsNav69afB",
  "key18": "2rsHYbhpw5CcUqAokhUT7bW3aEjE8g99hXqjkaptU4pJxvv7Fq75swhzbQMHh9KPAUXn3zDVjdre5aQi9XerTqDB",
  "key19": "2sKo61oKGjZDbNPMDqAw8qPNyJjPXnn5Cg6Sv4gEP9MwnjRmDwbrvGE3peaLNoaoXBNsW52ertR9QNQaEHrUFAUh",
  "key20": "2gGNXqTBPsWhj42hhQgcRSkuHRLWPN9ZXUUFdZ5Lqccu3tVqrhK3MzEA3AzA6jbw4Mvd9VgViR4VMCYg9B5CPWRF",
  "key21": "5fvKfd2TzzV7n8zRgFXpJYCFQu57zsXUTVDnk2C2Yq22Asw439emA1SEHi5x2XgCXka1p398mfRALjy5Cvi8nFoh",
  "key22": "5Eie9RiogkNqtw5MsAqJ8GDBhFTgHYEku2fU3rBEz7TYeeBhTLPBPDBQVivFAKZzKqJZE47d8M7AFpuxZM3ZtWnX",
  "key23": "RXNR1NKgGi25cvj211L4MeRvAD3TmwMYj7VFhu15MYFcoDDoums2wrQmCM6v2PzmyXxDVKFzkw2AQusutWTE7Bz",
  "key24": "4pEvoRpF9u8isziFnXt9ALBZp4smmiXNma52a34QaeCkzChRmYGuP3ey8b5DfvQdQjNwBEuR3i3fPTkjnDkQUdYh",
  "key25": "2E5ej5XTRygmMrPR5uawgwtvPmSdZatVX8T3aAPxBNsHJkEaGH8t861PF7gLKkg79PGSGtr5Jk1ATyGWLH6P3Pkz",
  "key26": "2fyGY2rZMfxnVyAjuEXbVeaZHAxyrawJ2mwoxGwTkJvvzFprSwphjyFsj5qufd5pRu42mZDEyDpuXUDotULq3soc",
  "key27": "2UotHNTSUGYKm6hYxyeM9Ah6L28vMyLvMoMPXFifVFioGvWwTyYxgo1UiDrmFEWSpUBcP6FnrLe2GfkdTbxAxsN8",
  "key28": "pdN8zagJdi5qecb7Ak83PpxkLkqGPNvTRZWGhYbRFFFb3735QTVtvqUpkmBeetNu6YGLhabGchPDszKaen7TyBE",
  "key29": "4MM1VbR99s7xWET1VpFxySfYSQDCttJrY5W1VEmHwz6Vyd7qbGaM8tGVweSzFxjfFYFmiEh2uvRyubxJ5AAHdHr2",
  "key30": "2m2k8QNG3Uk4sYAz2gsXzSc7kuLTU8Jcq4n7nZdE7YuQ3Q2pTBQFnvkGnpNAk7FYCEvDuLmZijmqEEk8BGsd2hJJ",
  "key31": "4joXe362MVoVkMpswCmmXM5PRkPmVoMqC5sv6e2qo4sBfE6aDigHQ6AdW2YtsBFJyv6jUSkCDayJxADKo1jCqLGC",
  "key32": "5aBvXgLQ62Aki7aKtu4xkC2ZG15ZeugGnqy74EazPV3soSDCy72mLb2Z2YYccMqbYDFaT3g89PhDfwD8xeg5CgNY",
  "key33": "2oPm8aTgBSoqoqsZZTXhouBfdak2hcgmhrzt2sg1K8YqJkehNRjXhqpKcypdKeC4t5uvwGGm6h1B7Hz53TGcTXv7",
  "key34": "3FWUBe5Y8jgHMKCBA1KBqccjycjKaN7o2YaWM2JsRQpafqZfkN7p5uiJCo4Au2wR75MGHJb25mGmBnWa2jEVL1PU",
  "key35": "5AvmtEPxtwwfPdWTgnYWfwHRFBUvhbiFzQpoNA3iZy7N35kQFzaycqM84UEj428gH4RkT3YPDW7Bhi6scVqp4Ew8",
  "key36": "2EpxXPNRyJYzKsJKEJY5ANVWpTzLZWrwfqwyUA3zsvq9Jx7AKgtUHpMFaJ5c96PEHGgfDXXT6LAohiXFNHjfhT2j",
  "key37": "3fF39UUbxAD9UJg8331zVo4e1G6vaJ2KqBYjGJT3LMRPMsPjVD5HebNt2uptzwNhggSLDPwJ2sRZTDreXwuWuq2D",
  "key38": "2pfYEGubd4WCMeykdowMppUympKHdVBUY5Abw5q4kUYpkfo9RxAZxFftBw19Ya3V3QLE6EHXbP1tomAcs56NCXM3",
  "key39": "tgaBMKG2BCysqhXQo6ntwhwJa9WvHUcFUcJp4fbqXK9M5WRNoAVNJAPmL5S59CJANgU7sUV3VXgdN9u38wYmhJk",
  "key40": "4tPk3RytsguSr4MS3P21TEFcNRALJdoV9qLuMExYNdVmuJREQk26BWdjqeAgk64eV9pvTR6LVo5u4bqEcjDzaxNg",
  "key41": "ib7YwtFVga7jkNMtK16P4xH8UxqkAQDtvRUvyv7QD2piqzMnnBr16xbQPjrv2pq7hzjb1eUB6bKD18w4gZ9tMtE",
  "key42": "2aUGgXbUmoAqHdT6R7HFLFm9G8FydmGWDhDE33d24cJuKcDPhCk1TAJAaSSJSp7cNcMwqnDYvpWrXDe8ej29D5H4",
  "key43": "49EEMe5QDSRqcEzbquTtcZAhmUHRDvgboWy2N1c1SC7zC241SYbFsuKsjePC78zM2JVMuvPiBEaoh25CJHCEmouM",
  "key44": "4LKHCQj4Zvk1rGFngoNCr4HAL5KUoRVhPGwuaEnx1Gw8C5EvpVRAc2DtxCkR1DfKX6rfdWaMHganoKh2MqaE4Q6a",
  "key45": "4Pf5Sc2fmHYwf4h5pjkXUFEHp1Ywy65DuTLrJ4GDpmhQ5QmdkMXvNG8cu9tWWr23F69niRxvMb4YzikbyHAGTFdV",
  "key46": "3HkphGCFuTkbuFUJRYSbko7UcjQZneL9CrtepS94wMuFwgFMDipqUwzXyXPgkLzhUqhSuhobD6exeh3MHbum7uVa"
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
