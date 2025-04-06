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
    "eAe4qYFYkfcJ5MWY272HaQWuYBEkWgQVs3BAiHAYHoC9VL8Ghi6TRUEYFr4hTMYHH2fqMdAyBiSvRW7XZ2wfQma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iWyrpP5uUL7jceKQCHRHRLVFeVgedxieCu5GRmBytG2SvGB76HYJ8pc3TYpLU8mSKLPmVWowep1F7XNZDuL5GC7",
  "key1": "fKu2bz116zy4aZgj9AC8oKA2MyG5W23iPiD6VEKPZXaZYyjLq9QuxSj8Gi29jc3H9EHZLPoHszKBZqc9AJjKbon",
  "key2": "4DRodnTJP7DcoECcNuPJZtn5BLAwHGQT36ST8Kd7x2KNvTDrTwsaJ4wmqANDW7H2gHq4wQ82n2zDFyqPn9LgYWj4",
  "key3": "HaVm7zVnpVjqvRpBCvfkHKGNw3SmoG4asxksWbhrNh3nm5AiwuBAVEqxiSNcJgbgnfczoj7iCQ2QtqTptt1RuJ6",
  "key4": "4NVRWTPQxfRou4b6Z5mv6de3GEvKyxGRvQf53rxj3LGQdhjzD9MgbNjMW7DppmqXzSNr8aGXYHPrHV8WG5Cv74mX",
  "key5": "3NDHTR6Q9uWqFsF8b2BwnBc1K1B54B1HuPQJXEikeeYn3iV3oKVjA7fMTtkaiiuWsbPpoAR16QwQoDm1QDWSrQZB",
  "key6": "5xP9YHytFuC4u17N8JFM3gYRXrh3eobZdmJJhUfFV3kb1PmPhChweWY8pEqVjTS7ptVgQ6xvoZ31731CfKue1bLv",
  "key7": "5ygzC5BPu4gbQo6RPwzoLh9ZWrdkEwjwar5F9aBqEwgLN7opwUQZG6ZYoBJBG3vZZ7k4z82UjmXYApNS7wuQXHr8",
  "key8": "4eCvXLDo2JsPX3JvtHZUAX5gkeWhkKe81Vzn6EmRVBZzYBBXir2AAA1K1AZNVBoHUnZ39jiuiQ1npqWKUQeEbb2f",
  "key9": "4yzkJC5szLSQuecSc4Ze1qLFUNSQDrjoKjPscA2enWav7RHwAeUtkQJqysRhFa42NkyeTZvrKdQiDhBVARwYcr5C",
  "key10": "5zq5sQ5sh1LzyWqjgYs2Co2MtW7D8FaP3GzbbnJ8uqRzceVPTpehQGLHuvbJWb3REdPNSWb5gcF1ZegPsba9YbTk",
  "key11": "2Q7iGrA4qrafFyRGcWbEMAga42nn9cPR4qkXbuvJECUU8grBf9EvkJNo6gxbEFyKgD2KucuoY4VMjkvgf9pki2Xx",
  "key12": "5iSDuQ2fb6oSpVAfwiR26DaZo5aoPqGUqQhZQ2x1aEmb96BHXkvfxHR6QMG7NYYHk4s4bFqme9T7NkpAqpkBvZsE",
  "key13": "65xSYZ9x3c1bqVFZwvY9wqhJV5mLnzyp6DJ22d8PCvYFYdhwjUS8nEK61BBgPamNAv3qXrfiM74mMkXQTQUQoHRG",
  "key14": "465b1LrWFcXhHz1ikr3Niy2og9Ys97vntiCXArSGgfg3qdDtkVzNJCZxdNNE8oEnhRVeWvCSmSErF57JzyZj57RA",
  "key15": "6kMLskyhm666RCq1dPfHWpUHafPB5HhdsLrW1KgHDTyVNHCjigTpMxpEFE77hExeFJ6QjbuX4gjbz4LxPsBBXdS",
  "key16": "2dhF5fie5hnkaUE1HPzDdmsMKfaq5A9iyfxNR3shk1EesbBJVeTpghGNB7Gp1KQVQvpgo2N74MrofjwrBPJt94cJ",
  "key17": "3d59cYm6TEWV1gqmFbe8jcXvLD6bkTc6CNYXcPjhXjVs6deQVPThfHjsCQtvBg1KWrUH1Addt1Kdbi7Zvi1NKqJe",
  "key18": "5C6m5TFuEeKXQh1SEF7m1Ayfmecs6JHHzB6tkX7g69cJgkzLM69vnVxhSXxg7SYjphT2L5gx9aqvSiUSmEcq2QLL",
  "key19": "5hUMesQ5w2ohPw9xJ8koeJvrr6F28FdH7YRJeX7s3c83JL3XQS4SVhQaRuaCyzNgiXUadREJ6ogZ25GsnTLY4MXu",
  "key20": "2wQoGCuBMrohPjQsjeFxsywpxW9w7HhkfbZ1EhPdfUFsaCzdrjsNrqkQ7S33HdUZis9XN9t9Rh33w4j1pzvsZ5zL",
  "key21": "35dHbR8EQwJPoUsFsqn2aBKsjy65cbV1xpWgrwnY3dBXUmwhwCCQkmJ42AguWBeUbvAMpPkCSTb38zZ2tnUHTjNK",
  "key22": "3yTwN8uwxCf6KXKh9ZeNnC52AKL3octc6P9ct5LNGnHnAUY1KLnEx7nhSuog6eAQE2ne9jyfRRTAPbf6i8E2Zb9S",
  "key23": "3SqjDAV3GwtPNbN3nzzLXZLPAY7FLcMEjTYeWtEg5R6HNX7QtxTK4NgdRuWk2wLi56kRqcxCb9YXdTPzP1afA8q",
  "key24": "3G6dBzEXoTP1ukQt2sfM8fBP8hx4WrpLec1rogXxmgGeTLLbtLyrUjVzNjntcyrZcg15k4KEHQ2QEQBQaNHFH7Fz",
  "key25": "5srzAApdeXn7FKMjB2edZK2xqsMFMCVQe31fnLTd3Z6xGhTQWKoaTT3FXqE7F1Be84uYQJX6rqfgUK4AroTKNEtF",
  "key26": "2rDHyDJQ6sV1nTZE7iUXVH59RkCqwsbHv9mi1wrWtno9S9wb9ueWewRNp2TJNvhUiNMTej4PQkBYFhYyVfg4tbSf",
  "key27": "3bKTt6RcUyvhycTkQS2ZscUHQCeT5GtEECjUF2uTYJajSyhsU1z3vNCvfxdRqBB72dhDQBKjTvpdTMJy6s9PEMEc",
  "key28": "4aeUZLXrsBnHmadp9Aha5yvHn9Lzjsn4BrAYfkrgLYoTEUbunVmEZuyK4yru4FJMJ1esJ2W4UHvo5mJ6R3kEmcW7",
  "key29": "4t6jZTffBb3oFefY977tQ1fssL4XYapoZAiGTmWd3aQ6bYzELVwnVPzDLDbCciESRbYYfjTZB1TZ91CquL7buwcn",
  "key30": "125ZVncCUuFtgfmKPE1VMtzVS3JyWJb29zxikRjJJq83iTQmuGqtyZNpc1tzaT6CB9nDLPiHhUMvwEDcu343dFdF",
  "key31": "4E8wj6DvXZqSeHFEE3LudS7kDHXqi5JFDxdQ9uL3HscrLQ2feLGkAj4rnLCZWjzgsiqBN8787PdjQGupCRRcj4vQ",
  "key32": "5nU6qDJMC8BjodjAZeHSU8kgAjp2AdP6oq2nqJXwb2RxAkmYAjzXQy5JE31UMvS4HkE3k4Z7q5dhnsVeTA2emVfP",
  "key33": "2XCYV5LEGzHWpp44Eajn4cpWzMtedH3XKMDBwUfioyDHh8ZUvMVocvduq76XffB6qzMANSnL6h4Rnc8zHaENc9uG",
  "key34": "2mxCQZZpYj4ZMoLRneGRo8ndrDjG64yc8YnnRf863bWGyt9rDQQsJ5QdNrjBtfcWJapUUneXnyD7mKvXXwgQ5eWt",
  "key35": "2b4CkrteBQj5SYuN38s9V3DQnjCS6k2V59Ar8E1YeYbbAeTKKPzmhyD2D5h4oyA6eJVempXbH6mRvZzmzzm7ess6",
  "key36": "4aHQbLDaruczDkwNzuTL1GKK8mjv68uQjj8sb7BP2RdXisPoJTUcPdRaURhVhwNk6yLWGoSnqPTsrX5xdyjuq6kV",
  "key37": "44veKM5VD3H39PjAANvumP6qNrrXw6j4Rx2M6zCa9BnZnPDuy8v9uXVSEyb7SfQdhRkHNv3QqnaB5WwZGzTSs6nn",
  "key38": "eiDeqVv6KE7TFqpE82pMQV5C8Kaq88Pr9CNMPAzpYa3uC9BWyyt8p3ZZLEUEbR9CFrmMypjBMy3zsxbf6UXmewB",
  "key39": "jcCNVtjBNvss3Sfe871seuomM85M94XiwWZCHZiwTvDyM7xgLQ2HYifuNDWEwod65zHLwajEtr8wCE5FJZKV5Bm",
  "key40": "62BUMZ1oSLSqhGpDJDWUogfcTdRjoHrFJeLQ3eetRNu6Tk9G2Ls8Jvpt5qgGnURpNqjpA58Dx1ALT3SGpbCBw9pG",
  "key41": "59ErCk9f8dAkx8FTJjQreKn5QXapsuWaYY6BrMYYt8FkN43TWsDMu2RZpyNvuE6xRcAu61WBCUcHg7sUbbAbfjZb"
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
