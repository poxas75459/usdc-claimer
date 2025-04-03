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
    "TiqsYQeMRMxKXuxJc7z88Ni9pM9FNZm1HhDSXY8TEs7EMyv1sFctSeg4YigmYtTqyrxemBuhwuaYWEFQHuDZPzK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48YEX7QG82z4Nn9XZPt9VGDJvp39sTdy1LULqsEdUStuzV1baSDjD6ogJZUiDLgx3yUwBVxQ97odbij2M9LBbv9i",
  "key1": "VJ4gs6WDTMP7Ei2nDoLWVW4kXJzyG4qs9sgq22EXuxwr2xbhLY2YgDN1tzRUmSp9EmDYijJuoh6FiDmMm3WoMTe",
  "key2": "NKZdtsNnS4jPBsuE2B7626LwYAqxHkcf2kmspRqZYrL4mJJGRde3tz1mhoBfeoFq9pe971MDAax79NDGAdnfDZV",
  "key3": "2uyotqcrqPAByHVvAyjRUNFeUMT2iJPTw1AVWWbwaJNqM52geJVEhoCrGkrpGWzgKYmwkvSgVfrnMCF4qiPcwB4c",
  "key4": "3RgjAtE5KFBCuy8mW1neJHG3GWpkf52Td1JUDMB5dm6gcPoErzTQqqaQpRb3jimKeGwWJtrTgV6xDrfWzLAXnEaB",
  "key5": "62XASkbEt1mNENzkEygAjvCeFwdxbFpzun6is76pfSNDrc3RBFbDPmsUHLzYNACBjh3GiDTmJgvrWuitPbWdew8m",
  "key6": "4RbyC6cAGxHdPqV3SV3Gc6LpRBzuENjHdoFe4VSoTLbsUAcz7fhe5FfYDbVrUFo1SU79RW1jSSNoatm2ZbEoniqv",
  "key7": "2syRY5zTgtG6rTjh2PAVU7YS1Q4oUj9o6jA8yKLgRXcF8x3vBmE3E1tWmEtyUmztJxpDnpjk7NhfHqLrQ2qNnYTK",
  "key8": "5H8rE8CuqpAxNpH7xiehADxLWHPYKe2JZLcdApoL89dLq7jWCjFz9SzsLHUoDpfTJRyATtoAiJiiEn4XH2DuguyS",
  "key9": "4EuVF2CFopCucekNHe1UAXJ72H9pFBmTJt8M6rVWdTDaNfNZsesMuKHpmxX9WvGAtXnAkNhKugEUicVLvpzoH7Zh",
  "key10": "43GqeqMXds5F2FrD6aKmHerW6hT5W3hNjQtQLu22frFc4EEfD5sqyGWoX8jwfqUTRfgt8oEjTq7XREsiT9JuKh5t",
  "key11": "MSxSbHBDycTR8cTd93cHZ1Ud5VartFtSFRk3LNw5mbsjWBeMM1gFMo2qi8fJCYU4pWZHgL5snRTRDuiBUY28zN3",
  "key12": "52Qdd2Aquzb3D5cEwxWUQL3iLpVarfa5xX8pyz2gkYW8AQR8TekwMXAuSJ4rmmrGUUDCiCqMLMvnfoA5yRbTawAY",
  "key13": "4vBzVvTJ41xGwDH12RXwCLCujgkdRdxPCJkMXptTY2rAM86xGvfNGbgTQoM5HTq3ekzzKgLZAo63pNjnsDuGDUFd",
  "key14": "57hhiTCDdg6Cdi4re23nZ9NGhvpqwuvE3KGcmEX1GLFwmvuG373mEkHTeju1upXRNGgjtChE2QFcdfRwTzbGAj58",
  "key15": "31iPraZrnN552oCAQJk5dGDK34dvY7uk6JPWJNtTcQSyUnRH7gUNwpJ9x85AUsyzvU4b4io4P1Qf8uAD6PoF4bU8",
  "key16": "LNYeQhrSzy7jdZ8bKWdarLL172oGcUiXTddoXFfY5yctPSkZQvRHSDSa4qY4zscPUc6VBALEirhGV35uP53D9JK",
  "key17": "61kapx4LAYdDeqpSX8Ft8LGVnF1GumE8t3TKdD6wKjYmTVWAYjF9ie2ajHqauLah6KHbcJouxpKzm5aegVDnB9Tt",
  "key18": "4eAES3fpdnCvs8ArTN8aecMbuzCggMz1ERJM8iC33aTjAChok3AaBQdZHD8krzRRVgjZFjYQzAFMBuTxi4MkavhL",
  "key19": "51rZAtsoMURPPZnsn4GLhuhY2tx54FoxX9yrTtPBjyDF6Nj8Lak5dj7nJcCxmjQPLgek9qKF81Z842UDrFUTwGgo",
  "key20": "2shCkXzy6TQCbEyqv8Tm4wCTqP1g1LJiVyorZ8QbbCNjiL2YgCnDYWM53WcfD1CdbRZoXy16khmUKry7psUALQmE",
  "key21": "2iC8ZgabDf2jWVYxEZSeK5W3numnyB8p4yvrBNKH6B9TSMaDFVTnnzkrEb2uveuU1DBHkogc3qpQ9GCcE2EjZuJR",
  "key22": "3X4U4zDddN8YrqudJ1mz6wpko7k3gSAkvnruSiMMVkyEa7zsTtEfe2zDMitpgbAdvRZmo9ycJCrwpXtTX7AkZ8as",
  "key23": "5m5ygCxZuPo7hojddzkSQYhAbBMJyMbh2SWreZgc1PB2KWKEqzDsKXEuD85Tmjhj5TcpnCQk4CsRhhwAH6BcagMr",
  "key24": "2FpyxYh4s638tLMnmQdv9AzVyFug5pKo8hF3SP3vPPWDCM2TnpawWfr5kR52qmkoRcnM3pcHYhsKcHQXebgbfQxB",
  "key25": "282kMYGJ3QJGGHk2XSUk9uUJk7eAhqkj9sPv8iNrkDjW95jTs4Scfy8jjeb8Bc6ikkjQzpHNX2ZLBeCUQ3YKCBHi",
  "key26": "kVV8bJv8J3SEf7xzs2DM3216CvuwSL7Rf4EPg19bJBdhM8BwFQWswWcczW6iNx18rN82FvZUv3EjkigaMUj9VL6",
  "key27": "2FTBahgYUSDXYRsiRBZ6ayZUFcnbJzg47Qn4eTXZYSZnrt43tm4RZEV3kGRgMc5Cw3ojcWC2rmQGqt9kW9fLtnSj",
  "key28": "TVEkGyQKE212fYAsvPaKq9QQFXi3Gobf7qe3fdusmG3uHXqQ2w3Wqdx8xCaUWkPmtjJcUKdfCEPrqiRjuFWexe1",
  "key29": "2wFurVVRyu3z9HCwDcxpYGft3vDURAWgodcGztwpv5Gh1WFuN5Pb15KfUWiBafSH5oLspAvoyPebqPj5MwbWytYa",
  "key30": "2HPdFxNVxXN8HEF9ZG2CcAhDs3uH2He6HHUee3msnNPX9dbhwGyN5MPfTCtKpDoNbVjzUGHVpicgwy989wZihiVQ",
  "key31": "3MwCaufM9pET7watzWBd163eHVokomr7cvMP7dLmckbyjZRy35B8zdVrTqRwpcmfxSHYU2EnussFxJq5n3ge99y",
  "key32": "3cYW5r5vUSgAgLGKXEQkmnirLiNP7ij3dzb2eQ1MKVrSrgiPnpszReyaG6qZi1qJLV7NTNqV1CvjoHa1fJL23jK9",
  "key33": "3DJWQa5SyhPtTFKPrqCXHhtQXiPG2VPPjF5gxpQ4KM9q7ru4pvMWuMu8EX1aeYrKxAGAgbni3X2fa2PS3d6Mvjjn",
  "key34": "5Cu27q7LtCvj7LUcDBYt7SdLYSo1hpkJtpqJtuB7k4FjLmjVCGVDHpbajwMTyjdDmRTZ1fuCcXMcTFsyur1uJMeF",
  "key35": "2ZNWvuAYod7pjZQdEaEkiR9sUqP1mGtWK7mcY4qRY3TrQeDmTwcFsk5Y9umVgtvbyXQLmQAea8xWAHYfDZRwFnHU",
  "key36": "3Co64DqbPUxjqgAxE2JpzmPEj5mhY1ffjPdPbzxCfFvChcDPsxVkJVVx4HSyLZgR45oRrmCt2QHeq9hocbcaJEy4",
  "key37": "5y1V97uSLSRD99ypU4JgWeykuNerrqPGopaEywLh4oeSKFzVU2QLW7r8wCxEev7jZGF2kr9YV1DEj97PUn2JKnSQ",
  "key38": "58yKoTFfsHBEtqbXREo93mpv75D2jBtUKgkQxwvHURnVsSKVWFXN4rhbDofVNEVWP5BojN4ayD85hXLpeJLQQTvz",
  "key39": "4Vg6seZ9BRyc7KPSRoWygCeFPAmfWKo3wXzgtA9fg423M3DVBFXKKWHEGJK9uCVQFCjG7CDhrfUehxeRNUyX9abk",
  "key40": "5ZTSDLeP8BXkVXKGvoe2JYwHoxHAW5zvwg5VL57yYos57PaEdq7xcZsKwdSJ5GhtToKmE1Fc3cTw2PvqazsvoqbV",
  "key41": "oHx5SUYdm7uZU5jHkVTf2D7LXo5Q2QdEAnEW6GX8SqX3CDV3Yvcy9NGzPEKsqGKF38qmXjvSYSmXgHq4Ew3uDMR",
  "key42": "5BCj7VijCQdZyqedwzfw6k9fn3QEYcnhzGEnRQ6htp38rJ31z7yzyv1jFoNKnXCteksBsqW5XDLAXoRY39MWHwTc",
  "key43": "22jad2RytEuScyGDaiewRvDGjk8rZ5ag6mmSbqwkCadVfr6zjdPhEZQ2UqLmGaodtaB5uGpGiKhXYJ5afUmha8dN",
  "key44": "4Dm1QhVrV9o8eUguHs3j5tsGsrMbiGtTyHYH8zeFTzxrHsVJHpuLp3bqTL66MQq1mJEJGjdZbBbj5BkEwE2zEuBg",
  "key45": "3BvqLtF2qMAsXF9GiQsTqrgN6DTbtR2iUANH4jb3sAnkWSJcG52sz6sXVSz9UrWZuzGs9QNixpXocDztqE8NsziG",
  "key46": "3z7hNrpgyiwJmgd65nMNtBNaZMnehb8onHsBRut874BDioEFjeZaS4wFAaVL88KR1Qdz6MYoRk1GqQ8sU67fSyHt",
  "key47": "2LFzME1ewZfM9a7uGKnYY8Q6wpQ2kuvdNGY1Pw7a2WiQFXiAyoCKq5i7ibGgU7vSvpTZgLcvgjrNvYJ1caZpaNPt"
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
