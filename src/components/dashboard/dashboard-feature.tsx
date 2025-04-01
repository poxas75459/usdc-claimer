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
    "5hFf5jD7hYDhVwZq9Hf1BXWfcLuJYGxcRodmRD3Cs9ctityoxrPoNV2z8QNMk7YSr1DJdi8G7sEWNe7CnGm5V919"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "281Po8cP9GhCC6UffFaVEgbLZdj1tZMc5K96kAjCFRfCrSM6brCpAcWYLCt5SDBsQg9PhZDDUmPGu1Lzov1WhUZc",
  "key1": "3vqg2KPgEbwBWzpkrUgU1hgi4GH7BfZ4qmR5L65QPGZ8Wy5ait41X9VeMWDuRD43TjdS19fhwyNfJL6NmDfLRXsi",
  "key2": "45iQ2PJRzYPBrESiEJt3u4Jap9WhJ52qXgc355iBjhsn44ruKLPeiAtdsgNjeZTkMjHkW5z3HxEyQwaGqqdVedqZ",
  "key3": "3syvAeYLkxzL81GnMVxCQqbssMzdxmwmoEzrwXTrRAyTuSFQfQxKwZjP1gmAHYbbnz5fgiDcBG5UymS7PH3qNqZh",
  "key4": "2Vk1EefTpTy6yagBL7R1KFDnGTqVvhqnEW5MyQbdZrrKzc6JLWkr4vvSfytv7zAt2qsbYDABdJkGTbSuWr9SzRWJ",
  "key5": "3vcX4ksYDzCa9Yc8GLo4DgHRbVjCPabNAfpKXEdkubpxLS54motfsmn33dqTbtNSHzT8RWaUJwzz2Gy2rFbjEsqj",
  "key6": "26E63zjCRChKtcSGim4hHgwtpkBrEaNufC48jbrEyTZP3CQ3LWPjBndWkfopbvUBgKAQAapv3YSaX5nuPCMBTJmJ",
  "key7": "3NY36LW7iCJuHM24ekMHfGMADpfn24TrTSnA6RHC1CFaX65h9ckyf3nbsE63ALoqvobE7w3hpnV4G2kdPGN4JuYK",
  "key8": "42Kq7br7PUAM8qbcjkoxhmFpMhzpZiUBnPjWZDo9tP1m95JWSCQxMoU7akTHBVwFpr2n4dx4FViNfR9fX5Fpbkcc",
  "key9": "ZMJMSNBWrbV42PByihPHWQYnfA5AU96FVg9i2rs34xNffbHHVtP71nxjGg262t9XnKGdPpDrgtWp5MNGfFricTS",
  "key10": "3hz6Rs3X36ycCJk5AUmAveC8oberk91rB89hxxArmwGyPz45nNBPQVr2LkiYxiHxdktSDaDhpLVgadr1rAkydePP",
  "key11": "nEJ1fs3tiz6LAZT68c9jt1qYKqzpcBUtyxYAENnnFWusK6xz5Ea8RmN2Lrz23fsy4vqNsxbVe5VtPui4FGtQjcA",
  "key12": "2W1XZB1DYJV95nbsZQoB6BQRADjHf56T8QvhQhmEKzaXPBTYTeRLeKmdGab84FQ9CK3Yzfu144wFHn4JZ8SHpP7U",
  "key13": "3SvLqPjyzJ2wnNykjRsq6Sdgkn2QScmNfJk5ZFEKTE4fkj5fAP1jG4vd5hABy6tmXNKbVskcWRRFqLV39tz7CRMZ",
  "key14": "xUyzmBm8huUnRgnPqL12SjJ3twBSoPPdM1U8FxSWKfmpd3hQXTVDQo2wCNn4ToeNiPwyxCMCg2tK8gpqBGqjBdu",
  "key15": "aYsYcuVvBgtUzxU2GviQVLJkhBEyEr34np76kShbaw2e3zU6PKrwAQhGLUe6WPxqZ41r5PEiaoA5hai4Pr3HEUR",
  "key16": "46GKBLz7GSyt1gNE3jgwxqFggxyDMJsjQpBpi2oF2vHA1pwZPgp4mXDXcBw8VW9NYfXrZSBRLcvQsL1TDrCQnT9g",
  "key17": "4wCPZqyddB3MxfMRPQSiMqRTMHmyPdNmVAzXrALT4iZfxdby3ATGgnnscFEhcgffY8vVk7DctwjdjJpHrpgaWsgP",
  "key18": "ujiVENL2zS5UpEpuZt9ck3M38YRy5JHUMQxzxv7GoF9cg64u2wub51VWk7vGrNy26orSkjf6HYeydugmgAsZxyw",
  "key19": "2Pf6qWAhyKtJVBqbp7Vof4CSCBdqFYYehatMFXUUuWDSf1a17WWHZiwazHupWZNsXStZtRvvsGhAMHHXvMxtayXC",
  "key20": "5Sj91ar9NcPgwKuVCxGvn4bveavgPJiRGVbUp9vjWvqhowsWQ7sQy8avWSj22twevEcGUVSskyuTHtGncVcDf2dt",
  "key21": "2ak3MGmjH22bCHG8hL4s6u1zjRkcw9P9ZDmu9hmM1St1tDy3QQxaLb91ssKpA4AoJDQJpt3kJVLmLJrFns723MRm",
  "key22": "u4r2DiB7Hjc4s67UzJBnsrWig1HZq6qpLWvmfmyFAg1ZUihKAA8ZXMoUGFC2DPdTANoeaUtHoyrLPBmg322Xbbm",
  "key23": "39XB7jYhGHqFgjmKHBk7JEwqqv12Mo9gp8JiFBFVXhP2CcFhLUmME8pZmshF7VF7WnRoHcWYz5758jgXPTY17oa3",
  "key24": "3vdMCzQ3gXjPWWYq1pcKwr8NbSHrmrx82QTZx9QQK6JJYdnpnviu6cuxRSVgn1Fh4qfxNeDBo6ihf21yG4R5wmuy",
  "key25": "27EHDY3tDacsBhtp2jKSYVH98UAJh7o52nazYxwcX9xK1c3AWs1j9Bi6wYe9zvfFvc7DQ8BUub9iPB2CNapsxj2E",
  "key26": "2VXwhnJiEti2MfQQNVAVeCfyLA7sRMU9VPiiMAufj3z3etK1yaU3Dwt3oFe7uqRj8r9xxC6XFNcxkJpqY6wFkG9b",
  "key27": "2rV5AwDMn6M2wRHZkWqVqQ1iK5YLCqce9o7iJ6tmtej2sAy4MJXVKAUHNDz85if8GUN27iwBHEqZ4fuexVvJh9jN",
  "key28": "58uge3G491mdGtRBtkzxBRhgJsd7Z3cTkoDewfS4F3VZTBmTKqRRZDTsAopQv22w1DJdoGMbxaNPc6T97Dp4YjGD",
  "key29": "tmH6GAHMheS8orAnxyQYwYiu5QkXSd3FsrztyJQToH8oTLMAj1GBSidAkjoQt3PdAt6ekj3WZB5Y4nSyJrX2FCU",
  "key30": "bWxzgYhk2eg9bbQ2mw1vsZD1y54n6YAei9uB8SvMTQ4ZUcUkziff5P2JdonKNBFiXPTy6LHXRzPipD6QT9fwb6P",
  "key31": "2hUESLMiyCUyZVbsmDsLR5jCC4RDREgTPwzsRtLCD7FobmjDRbasRCeYzDQVzCMfejJFKaa5GpHNfQkiR5vxFQkd",
  "key32": "2SD9bwyAoKeDJZDf34s12vvkiVmimgiqcjHXRr3Fi3MJnkHRqhM3rri3L2rbvZkqzE6Qp7wL2a9n9TxySqgwTmCj",
  "key33": "664gGxMxADrRTXZFY9Nvohc8Ph6uumPRTiCTzHXABPtKMe1evK4WJAmrM68Lvb3XjVH1SNe9sbUBa8YTtCk79RAP",
  "key34": "2YHVqESvPhYL6pCJNRbj793kSDEfc3vo2GR8RrzapMFrYtULJiv4esE6mXCHzmrKTjvjXjByo4mK2rx5849Ly9Tx",
  "key35": "4Rxb7Ze158oPoTimocWyR5XCWsAUwY5tpgXnT1B5TeAQco5CFBhg6cm8Uwi9JcfVt1C2uJmQPdHcac6RpKxV687y",
  "key36": "u6hF4uKG3GGYM2nyhobXGSSEXMk7HdNwMh82D3fKVnP1rwtHZZDL4uCw2i5jAvMgom9frpjGXpYHKeE8qEwrEYu",
  "key37": "mBp56JepSqaYGxzcHmztjKQtzsCe1rE8U47E8u7rexmfNGNPPjPZf9gaAJNpSqUzTvXv8isW1Uwrt3XdQofiy5w",
  "key38": "28EzhnHa5boLvDB9URBvbYnPD5z8Tsam8XQ1deYPQAQxxCgTJbKj6scMbGMbyjMg95YXzJymhhFhs2omdoEr2CRw",
  "key39": "4eipBcerjTjEmVESJXNkBM9tskbiRfhLk78YWwRw9diRAGYv3GxMb6ZaK5gH8kFZs7FPUFGBWfUELLrZdnVJQuoZ",
  "key40": "4YrdLtqrReoRqKL4ZRdaJ5krzFkRXhRzTh6uhFvgq6c4oQxcjHbsexFrTC66FPA77xYS45DvfihCsQ2VQNCDVbAF",
  "key41": "B5Rqx9KeNoechfsHagpnqZJsPVBsKmM7LFagkT8T5E8vuG8xbyj4q6PA7wfdzXswFStaTiYXXetVVS9hXxFHZzE",
  "key42": "4hZ3ACvw1RMH24TKbrtQvKDUU9BGH5pMxgffNkfu5wLTzse27AU41aZf477txb8t1BEHo4awrutSCJnMXqsHzCns",
  "key43": "3BTRMzqiQqoGMqSe52oudv9DqFWa1VfQupnccYoKdX7Tv1gqjSWGUcgwKTvhjeqCtyWzboD5BsVnrLvzVhN7HBrS",
  "key44": "3b3Bd6cpCj7GRQqfCpL49z4mcrDKtoCq9Mhp3SaZRQ8PQffuHaFpftReRiko47rJ8XFVADLm98cX2qJvgZPCFThH",
  "key45": "5hNnbNqVYQAFrxsPRj6x9gUKPNMetnrqptBh3gKL3TyXJ2wBMH3hVyhai5cSkfzQJtCGkVKGbz1pjSPhUmUEhpab"
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
