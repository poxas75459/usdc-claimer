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
    "5UQhovEMu4eX2EYCSMQRzLP5C1fM3hgigL9EPbpHtzp6Yn6UbA6DMLxeRuSPodaNheajBJ3pmqYKxPneZrYk2US8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PuSwLvMBS1LRjA5Ziu64LkCMpsYezDLTSF1XVevARcZv8Y8PV8K3kUu4oNFRsuRmRGjWXthjZqJCSvFEkGR14hX",
  "key1": "38RTxJsecZV2c9kG1VbVLayFp6s4UmrYfayTNnvr3urkSjXB4sn25CGzM2YTLgMBGLiw9yPNUwzFqSiTdLP5h3Zc",
  "key2": "3Zc4qC7BPhriw99BngQrqvyJ6hCDrPESV2BLD11hm3ayNrj2jAAPvnCGvSbwVnw5E5Hq3JhKP2K7dyxdK1hQ882j",
  "key3": "5zqSzhacKMsVAiaiwNvmvjffCjdMD58FLRL3XTVGJteLsJTDM7gdYpxaKBmM3fKu5QAyKRJSymc9tYqi8Savu72G",
  "key4": "3Rp95yrBukYf968f3ExB7u1vLiufoRYw2Ukuey9CLpxuwTmdmuyfRPHgc9ant9a2oUrpnrXid8bnwBvAPMhjrpmD",
  "key5": "3U3hnd5twFjaKT4QjESK6PWoWMQidUtJxoPD79aQZDexUSejmg6VgV2gY6k3T4CbZbzh58crzEJRTEkxedAkGzAf",
  "key6": "59ZojWSRvhqa2KQajREoVq9XXDx5Xg15mSa5R4SEUszxmixqGyKNQDYbWH9WfcEapHXifB1xWaBhshBNcXHhS2br",
  "key7": "2Jm3LTRYL1WnrZf9jWWRZRikpYnN9HeDwGCkV8spjK7DZ2ucZGvDo4yAyXAH9wZBWWRNd6BRBQvMW4CmexDD6mqC",
  "key8": "KGwizDxjSB2nCyL8PgGKj6VQ9F7FiGPQFW7ZEYuRMRA9Z6TpN6hFocF6BHLNSCRRjwHbhvd7zeNFc7Mxgzha8yN",
  "key9": "5HBnTTEx7ZGXJEjncKp6545x779JxRFJxae9tpXKbniU6kUjgeTxcVyfySN7mtdqBAg41Lr9zhrh1kQvwgya5Vdh",
  "key10": "vbqXvGRKBSdNDKa6AWadb3s1KkT4bQFziUGqvpWTejdPzCr9UXfLMZsdEWWFPZVfTrms4dCnH51XrU7du5X7xTH",
  "key11": "5JG669KagUkaxHjz8nC9mNxFQRErmk7RUxkYJRzFAahXuaVfWkUfjusR4uBtc3pZCWbEb7892WHzSywb8KjUrNbJ",
  "key12": "44g8cCSgVqZBxaFxKEdUAeaxcDRpQKfAxbHrdDFQaBFHWTX8aY52ZRBWDChbWC5yLY62iZdXpACSh7scSz3SAsMR",
  "key13": "227UV8gXD3MYDJfK5CguUK3AdpQQgULduBg32YxW8nwYgfdre8BGhEozm7jbEr6E8R1PZ5JYsToPjfaPTj5XHybw",
  "key14": "3MwVjuvmPY85b5qFHpAFwhTwebYcPezX87eyewE9iXiu8a1QxHjBTZWf5kWWycgcvBKdiwtLqZ63GLS8qVxHwy6A",
  "key15": "FRpsVC7acmGWAeMWzSy5XqCkmTWmArJtWTyGAQrZYE2wmqYVZESXebgHT3HD5g4tjkL3Rq27wKZ2sGh14hzAK6e",
  "key16": "3AxZaRRWcpipRi5igKksS7SBGuPc2jkZDvEdLmXNrBPp9rrYpM99xXFnJXfu653RQ1iuqH3cpUzJAn6jiLNNBmv2",
  "key17": "2Zm8zARvkvByQrYiPiF9CHkp9h4hM7mz9dS2mZPPHGLkyB285YoThQz8dToZgrpeNjYCi7v2WyQsYhQQNMAgqQit",
  "key18": "4CefaoPMa8wVwrdZTHcTKYtiGyKKPvfzKChfkZpbP3AZ1U9DEG2yPMgy8cpsmRSZPJKvyJGuByPkGUmkvSHXY1Sm",
  "key19": "2fFCXPdQXEFTnveJJnzQ96FP73TZG471uqBifSiatJRoYodg8MkJ1mFo2QmUfg8Znb2gwaAxdrB4SE4ZERAC71cU",
  "key20": "Nu3oWx2kQKQrYiQA7nEE2eiW4dPiMCa93ejo8V97Bz6Fjuva15Ad4NyEndeBya6fvj3qCg42cU3XgxFVzePBu4n",
  "key21": "3QvT1HWP76m5F3C8XsyxiLkn47m3HJKYvMtxi9zQLTxu7tjx37wTmprSeAQ1RNcEGJYHMUgoqChwTV12LGs9NZff",
  "key22": "3JDuyDyQhQ21zNDcq6Y3PPAqQcyFcb8WRjbfkjQrpbTBEsrcvU6FL8J3U9iZYKuHNe5tCcGcq6fGxKZdHaPZDscM",
  "key23": "5hN3oGJwvn2gob8CGSv37WvR2k2PNaB5eyWEsoBC6hgaZ7LCoCjeFLF94fiTEXfoUFBeb4bjv9ZQkZ5cbPpB94fT",
  "key24": "2qmTMNLaZBJb4D3GqHcSmBHZHWY2GTJDKe5r4HmGPLFV34RBVt75ugysvF7gA9nrgKRMVVcittxHnimDQ1y3gxcN",
  "key25": "34KHwjGPK6VXQgZrbD4MmuxMYVKJWp1fkHGirVg4XGvtBuJE7e5Ft1br9dFR3UAeo49HfJdqCG3G4G8WPRHVeLJT",
  "key26": "2kX9PE9Kwfpyk3GEM27jFv4uyA77p9iN1E4WNki2RgDCWm3jNLfL3gPfApJkugzi87Uwbn3c1y4aJcXswPNjzrrP",
  "key27": "2PYyMu7oBX2mKEJP1z6xJ4vvhswSqekAbPf7EpXXmmLaRZmVhEyZsXjpdk4oY7yWcxpJDCa68p4aHxBVr9nfq32Q",
  "key28": "3Q5XjMUbDLJKxMJefB2N24PV2ZvVxx8ubrwSDJ87pwgdRor5iLpxYEarXHUYK99A42t3T33z22zmnsxoBFbD1QzH",
  "key29": "4q1bSXSVpqXQta4woi7yzrgTtUwmGVi5uXr3uAMswFUScqRyMtW6Cg4J9tLosFQazFF2xYvUzcuQerY7KCrfgeEf",
  "key30": "45poozXz5K6EWRfZrnHpa7WRfazkTUKQRevSt2qU6M8r4RvWcuEvu1YmC2Rie8Z4LifZ1oVS52F9DdNkijEoGRT2",
  "key31": "4X2PoLvecRK31NDMjwKFaZzSZZXkcc93J7ihx4h4AC7MsHVJ2cHJ1uj9jvE5RMwjRidhx3uNKBzVjy5WHZimBpgi",
  "key32": "661xYw6Nrt9Q4sYkfX6xLsn8pfCqgzMGk6Ddg4CYnKi6CwTk3gmd2KC4ybZ3RBFMovUcBLAH2Dnp6PDBJ67QnRrE",
  "key33": "u1MfjJMzZ3ZqmSqejasrdidyFXFv8HhKtYfi1atcDeSUkh8LKfRJduKb24cgKnsndgXqRDJipXnhYsbgHt2Jrom",
  "key34": "63EEYACsqciJKKzAZQWupsbx8ZspUMqCR4Do2SGKHPYtx1FcdJvnHkmLfe8bCbYJzKLpcmUrptWn2U7z6wpXLXTG",
  "key35": "4wtVm9NSdY8qP1EWpohQ44VReB3BTAaoazjVjPo1zudxgTALsyWCicYusWocz6NRm6HMRsqYHjR3BKzspa7KGnko",
  "key36": "9rQy8RhiECjjH64m3s3Fzu3k3Zo3iecfxmn6V5vx73EhaByJmBXDhhob9MYVL4SdNVk4oqioZEumCoJxBVC1zjp",
  "key37": "4E2o4SaNRjegjEsd2zrARYvt7mLR4AyeJubfs2zwmWow5hjVhSDaeVBSo83cQwtPTAtMcQQVP1UGdYMzdKEMDk5V",
  "key38": "66sHJUMtoP59hPDccMU1yQoq15SrhRDHfuZcpvUCTowLRUFE5f6UGfB6dTVcHp7CehUkUw92Hh2qM3APpW2X3yT4",
  "key39": "4s3tHJWGhmvc9PV6d4TotfUVKfATtdYrw3nvLUC3hRiRCBD1dhAaQsqujEkCPXqNYM9dMAnLSv9yyVgfiVGDrjEy"
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
