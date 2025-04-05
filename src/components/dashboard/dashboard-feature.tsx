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
    "2eQe9rZVaJcavbxJggvvZt1MRszcf6uwCtHzUADXBTQVWGBv6aWwGKiuzpwmwrMGWJaKgLxpUQ3Ho8gharCyMHUr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65njWVTm6xeinRAj93LhZGGTWmyZ4ermQQ2hbVzYEzZLXsoXBTt3qfeATpaFjBKvB9DF4wBV6ttiSTDpYKPLfzoz",
  "key1": "3hLLBQtZDhvBxKb33NkMYtGAxxvDbQWTpArd6Nj6RrXz2RT8L2iNkUCdhSVZzAR1mmRpY7GWrxDgFNVU7xCMpLgR",
  "key2": "3fyKkNU7nsaT5cVKHPL6tkzUTv7WfG43WZgzpXj6APKxYCxWh5XtcUstAYc3VEHyirKioaSMRQheJN558PZma27p",
  "key3": "2cTnJP856JUzgxFJ2wL7yEDr9mRe2syQUyZLVMaMDnXwToxnkwKa6icZN87mAgNbKNesWoXpuqS8qzrfyt9RbeUH",
  "key4": "27DFoTYfwL3QB3F2YU9JG2pMgsLfg7kDb3mbMY6J547yEXXKKF4uTW64wpofxag8LT5GZnsdnrztn6MVPfTmj1zo",
  "key5": "4dM7ENWHgvd7LZ9SJVrmiVdhhdHUCqonVcaurAMcbpAguTeeWs2WAtge6FQX9e1tPTH9tTzjz1GzzBaco1yy7E38",
  "key6": "4bHouvEnneJUR4kcmpZSfd7Fmbec4F4XrTyuTN3KgC68xjoNK4eFywdL3YXTTWk1cfceaxybRUymTvWm9KQMhHTH",
  "key7": "5F4T56ttMB6GaGEtft7YMB78XkPFdGcugqQW2idi3ED3yGLNfXVPWnEMAyFbbxpRvshEAEGWNhcPQpGar1bviNnw",
  "key8": "5nGavkPS9DLvuKHxehHrBDm3BweWrGHyN2DYHvGarkpEE8XaV6YyLhMk6DeDRHVU3gsLrN9qopR6T1TeYJEu5ULu",
  "key9": "5w3P33ipcAAXSLj6pynmuyJubw18imbG427icSrjnatxHEC8uNSCd887GhpMMrQD7zFT5WvUh1rcooTsuCybQCt7",
  "key10": "5LznEBKtUzdzxYrD2TMBzaczm6HKy5Du7fMkYJEWgkMUkvUcUF6NWqh1AtQoR3632GnA3D1MZLyVK2FkSksvmtMS",
  "key11": "3HFAnZqoqjrZvtYEBEG23gJRsrs2mbiuxQ3bfG4aT5ahMZapz4eQctnchktzGu5WJuWb9QrLU52LkSD7xjjeShH4",
  "key12": "CpTdymwd7USPntwtg98wRrRpKzhmEkJ2MvbEmSeCmjbeGw4z2yxHBnMAJd9jjyHvdtYnfjLpTdb7UMs5ahYk8pZ",
  "key13": "4o6bWDeuLFGnLkjvENvZuT6tto4F1HGj9zh7GpTF1tGS3g7zBsa9nazE66FFA2vC4cCSdH1nLTh5ivVmJJtcHsw",
  "key14": "4U15DneQtJGm8CKgLdZWuE9XWzSgT8BeS1Mv5WzguNhQbDnrUHjZe1NJLoYaoTpXphbtdD1G2nt9QKAmJ6GeeDEF",
  "key15": "66VM9gwwQ1VPy3YKgwoFw3cygpdzTWjdx8omfT5ZnFLadBuGMt2WU3UzHJtVsVy8kCLT95NMB9y5TLux2EyriEBU",
  "key16": "fERP4gPvS6epkG3LbX2iabfjEfbP9X8RWVadHgsMscz3gGr1Lm1psrDmbesLbtTdMqJWUJmP79TYzc4wAyPXChs",
  "key17": "5uF1tDXLNHkpUfazZPiXLLjSDdokH3pUdD8kyxRdpmuEb2NzB3PvKM6T4ShxNCH2vV6Msp9WgKMJmgNUK92Cao3x",
  "key18": "2bXPc7VzGfc7GeoCccvqXbXSdtwp6V3HsdXDMckp4yjk5LAFbD2byHZcP1QU8BFrUUTGhJAiGtvUXBQLPwZYh8vN",
  "key19": "2X5Rrg9m1AgB8Y3xBHnXcoZDUQui5bCNLv4avvFweRxiNaXDUamLGq6EKybho1hLRpEvAC8RCdGoxGVmzgEaK3hw",
  "key20": "4Yn4toM82MF9ybiT1LGtfDBjTDxBmut59ByxFwWBeJrXe9UK8y1bbWq9xJFNzHJhWvqneAZ1My4otgQvR6u7h2Ys",
  "key21": "4kPMHhu9h91LkpXt45rEDMrXSingeRUKDbE25mtMSoJ7Ev353A3WWHgTJ59b6QiE5n5o5tMHZukasuEjqYabLxQ",
  "key22": "dBj2cRmiB5EZjsWTA2oVDGfeogPnNHAL6PCLvwh1dQkst8vbnruLTAtBd7VmQK67jRi8vviUH6aneiqRkdoQyTz",
  "key23": "4Fff8owJmQzDbhZRBw67Pfj8vfhthd1C9DMqCjcMrpk3VDUde1XLpENew3iaLkRvE4TtsNjspGPdrXJoYHxTkUJN",
  "key24": "3tuQqw1x2PBAaHUXMv6978uweKBnk8owyiZoNVfmGqrQnmZnfRDfXNGxQdjY7hn75KgJpG7uRSnz6FTyK2ykd5KM",
  "key25": "57CUucLBwwKdiFB6J1C4WNZmtW21eFWpjGqE3rz9ksYZyJRe5tXQBHiZkHNG5bE4asrHhyYJvhWim5XPQwqrhSps",
  "key26": "5EBX3HZLYVi5xh1dVdMwy1d9yAR8dDQ4xYY86jCfn3F4vb2qgoowsAERqi1zcrMirtwdXx8jiN3H8KkuypR3wLKi",
  "key27": "2bc2AJuqBjVoXnCoBjg1S193taRrwPMYynAeyBLqELs7kYmWRcFjjYBB3tw1oBxxBdX2w4U4agoX2VT9XaVC8ujx",
  "key28": "3SmrVhCxEphBA9YUfyKteUbc8tsLdhCyrukn713X8nSTAsJadHAyNa34N6mETZy91PKx7pWZFAnJyydmME7y4xQg",
  "key29": "5KWx6dn6QQXJoeaJFLmioVcg7jpwoWvgVBaxoeQq16xMBGV2M9fcYm2jCuVdub4xKZGKR4t94yyqfUkn7wckfwYD",
  "key30": "4cDg7UEmyJkpUA9y6kGB13Qv7Piuv4qFY2c7S6Er2BuP6C4iUjp8gjPcHeHgWptqFPoce4LRDnPV83ufq2v4bHtE",
  "key31": "3QWWmJwRsRfLCNqPbaDEDwrMBTmFX4XskpNTymUdYZufbSTMZ2ZJYsawVt4pMVqeBok6Qypg8YVLCNBXbzne7hAf",
  "key32": "4NYzSKtPFnmJa8X5o1Lbxs2RyfhfqB3UtJGM1hKHPKyUuskZDJk9h6VtkZrC8ZtnShckQsBAMpd6TP9QMPWRJWF",
  "key33": "5ozEJL3b2JVHjdbcirCv7pPiAe8GM7WB1gjUqjupFwZuD2KDfbxH1jpKVGYnz38QTS7iYA6zDe7Kv94Xsd8wCYT1",
  "key34": "4L1JNLAude1AhX6gghcFPAy4ojTGuWH4NH8ga6rmBjQgmTKVSvLB5w2XaQpri9fG5e9USmn3nN4TLbFnmNNrQWA1",
  "key35": "2sdvkQ2iEf7cEDhvbBDeEhGQxhQSyv48UZdu1EWA5tQCWG77youXvRJmLUUtnJGmLwq55j8iY4qBZEgUa5apP94B",
  "key36": "3dxiWe8dHzYGnkVg8kG1YL6hcfWhBuw1u7wo5rika7KMcjhHuCS4V12jsUkjcv5RLZ5AmkTgTmk3TPgMxVFGnMg7",
  "key37": "5rV4Q6AKCokbmbccQ428rrBxzzovaWuXkEnrX1rrR8gexN99sd8zcB5qTN14A9H9NPSSqQwxk9qWgMcyvVeWwpNX",
  "key38": "5cB1LPA6ANxCpbXbCANaAs2KS8VUiuE98pGwFXQ59ttParQUXboksgDZq7PQi9gKVZPn55552BLYsLRWJu7gfAmh",
  "key39": "3gMRP4WdZKEqJKK1XS7hB1RPdQPkvmCtQse1th8u7QcoNTk59jEpezBub9MCGjA9MYj3JbWZSpixzNQ5Mqjt9DJ7",
  "key40": "2h7kxb89xtUPfMUksy3cYLotwFaNoqrwWvxD2GJSqPMYmymuyWNRNaKnjT5cASHC3a1mDJxVRoZb1Jvso4NdcN1t",
  "key41": "35sw81mcSSnK51KbtKLz4SrHmfjCSPe1hiQovBuTiufEpYM5SWMjrXVuszBJLPYj9oyc9cwFxPisKmVQa4y3mufq",
  "key42": "RJ9mSipGf3TUk8RUmbf9AvzRiRkKtaKcR5iGvaHHXiFBvoKukycDshcCzGic7SQaxFnsG9ibCzAfkA8DZhp8Yb3"
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
