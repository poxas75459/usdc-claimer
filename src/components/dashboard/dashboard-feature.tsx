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
    "4RqRejSV23CCEAgFQ7SnJ9mad8cF4qrjhq2oaf6KZeXcsy5twi36S1kMwKZfb7hceMoxxrSegeajhsojHPjc4NFf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WmfYThGcKpxH8uqRQ5DdWz5NfWeCW3T5rCLWHnaPEnx6cx4JoBMTctcvsxxjyxUXgLnHxkEb5C6e6dixhAqs8hX",
  "key1": "4ReqkHYYPWvgTQMsa8rqGP2wMmskkXvuDep1Vd5frM5PmBjcudjgBPb1esp6fHubKgXpWpMGbo7pbugVUTniUXms",
  "key2": "47zcbSmPnts9D7qKcyN15RTAb3XX4YP7hwi1GnhtX67XydXnWr3gfqMPzyneoviocVDELFmWvCwpjA6hoDV1DeWq",
  "key3": "3HEqdQ12McKthfCKHNhgFJUyqStddGib9J4E2trmdMgsSME1PNbekhrfLHnb6T83aX4WeGzytw8UhRTsvDUkLgQZ",
  "key4": "5bttJpnWmiVfpKTe3dp923Pc3SVxT5KKtLEDXDK7GZ8aeCUFu2MZJk4SHhH3FgU4KvCHeJ3gwu1o44voCvCLbjdC",
  "key5": "3kuaFw5i7Zmuwn3fTrZvfBAuL87FYS3F7SSqJ2hkDswwo3Bb1r2vQG9rp1JTRCDGkP6QLsrLXK7uguRPKVGpaXv4",
  "key6": "SJwzjuqGMqJGsJojYkygBL7H7PDtbUpWaCseKM7by2hGTM94RbPKFpurHW4NLjxLUj1KK2yxZhn2Qomjrvufp3g",
  "key7": "5KyS3Mm8HU5NTAsFug7xeEqnDWtYGkxTJZMQWTcGtE3cv2sfXLj4vJLKBwo2C51qi1yfNwNvXFJeJbc5Q2Q87ndp",
  "key8": "4t6KXywb8WVALzV1mTSSQoQqSrNDskcFoqxxEebfu7sF8kykQWNYozWZgifp7udDuu74hSnPgWrej67ZzJiLduqL",
  "key9": "26Cb8qiEXSUKFybXrZ8k1oC3mgSDgTLzmeYkpuTcJ8uXphLsXv8RNoRcFxN34QygXxSk8DdVpuAptzD4Qwdr1ZDV",
  "key10": "65Ec9rdkVRS1baY5T3Xuad1dVnjEfaaLxPUp3s4DhPJbSMDjk7mZNSHYgTyy561BYtituK589zWZj2MxqjbUVxEz",
  "key11": "4dEigCSdTLUdQ2nrtmL8iwQFciFJ3nPCriZZAN37USCC9oD1q1GftQyiykVkno6sL5poVCf8EqeD9od8SdAP9DiE",
  "key12": "2WxUvzzCBVyu1bHkGfwnijPcA4wmnAAvs268dmQHeTBfjLFoJ53Pes4mJY3hpcWXddBmRUwfWitpMdA8KCwKgw1B",
  "key13": "3DX8N1MzXbhKwF1TuizrNigacnGXKktB8oJWDvwKoPr1jjWZBpUseFFeiZ9gkSDQSqu9y5LDsZ3W6h4fVDuH1vzD",
  "key14": "5zw1MAE7aPBG58MrzyGpdusuU82f1B2D6RoY1stCGVofFFp3udSKgM51dPyEJHHEM3EbLYb9xcixB8z9cnVAzkgm",
  "key15": "4WCrXu4Qk6we21x96BGSnKHHWaAuZqkj8oPgqdpWjnMQ631ThpM3esV3dcb2fZA1NhnTwVZbKrwfPbnkYFoQ3kjv",
  "key16": "28zkFjeiy7kttzcwUDjDNapCiDn1vnWPipNZ3dTZwBYHbxfJdSS5dPFjmzamz2QQ1amxEC3VuF5Rb3gVh9NiQuuJ",
  "key17": "64ScBNLV8tzNaVHbVzfsTRj48jRwdFhovtJgwGutqBp9vtRyDbYpHW2M9S6TGa5Q4wXR6MnCwmkKy7L8BYHXqm9f",
  "key18": "4Yek5xEjJUJvrbyg4tYfVvnv6wNHjcNJRmfRaZk4XqUtUhLrc2rHPW8ZSdPDoX5Zj3WPX9ksViWCKFv7QgWw5qXX",
  "key19": "3o5aqe1vYEfS4bUmrqtCstr5VAAjJTdfaRjQJCjKrtppYjrPmcRF2yo9QW4LYAVzjaY6atse1apfGPLuZxckGkUj",
  "key20": "FxnvsAK6ShBAWff8sS1MBzQAkNpSmU32GmgPbMjdQQUDtiqcCQJFuJRc398MP5ECdxUzpeu7rbm4CCVHMUCCJwX",
  "key21": "4epPd1y6jTfEqtrk1q9gEPb87qsj3bSQ95Tc7p7CTcGFQuCsPNr2hEbuBM1icjrpWekoeUXWLfqMKuThToL1jfrf",
  "key22": "3azrcKPg7peRWMA7h9jXzLbRqRAMXqorHTNV8CjXRFntbv8fBDpvTSosDDmunUvRBqF3yfxiehFkqAa7HvBiWrsq",
  "key23": "4LGykNpCbEcm8fCDaQBrKLrvPUiviaaKQfPtuZF86RjQRGx55SoEpneyuEVdiTKAJA4Fzc1cbAB5v8mGa4t8T7cH",
  "key24": "2eSAUguTyedt99BvF49gNDH44LREFXkdSU8jfaATtpd4TkNkJXYq6g2y1qigzVw4SSE4jsYmrkJ8RSXbwUXGid82",
  "key25": "3vw1KN3WFPgLpKjrbnsrf5mGHaRWRCDHXcSdjzQUaMFTUaapXxEhD5YCxGgjf1gLzYbSKVAybK9V3k27e3m5sCn7",
  "key26": "4mM6E8APvwZUi1Q9NJVy6Kgdqb1X2JeLfdDbKmCb7YkLTSmPYWeEUvD9pKHfbqL2LRKQC6Cb6wjREqCFA8DBi28B",
  "key27": "5JNnGzHpQcUZFz5cxrt3YxyPKvMobvZPDSzkGuGJevRyLqgDVor1yBMDJSKNjxXi1xwU1gAvT265MVSTH3fqYaxo",
  "key28": "rSoz62piySWE6A3q6zNVxEEV3RK45FMbtZbLCPti7suVu1qquww7xapUe7kf4U6orTVVZq2miK4RsxYWWY1fSfC",
  "key29": "49RvhishN17gPukosFmaazWX9D2VhtnprJLVAQ7fjfmKzAUndgMRXQSvs2xfFu6CUviBn6bbf6pbD6CUTui4EzYT",
  "key30": "2gNVkQctuutBkBoKXfhA5ZPFMqxq5qxWZLrspmrLeM9JqHaqAGSPqP4ucw672kYCG2dW66UDfVpzbLZEx6yjmNMZ",
  "key31": "3KAzFbD1nSDGHJCsWB7HUWYcWMqu81FmBJaQvTsyeDqd8wVem2Ei6FHrcwuTzMifGkHwHQCc42CuAqRDej3EB4XA",
  "key32": "4tLFkAGuwW4tZ26EddrGD4ermLrg8Mz6LmGY2VUPYuTc7xiQiMamWNHpUonbbmMJ1RSyhmBTUMHPe9tYWrRbnNDT",
  "key33": "2Jv94tjNqyW61Yfsw9Lj5xhMrQpzS117LkqQo9FidD2E6fkivKgWJRBrxXk8wFexJWcwm6ZWQpSbzu5co8nbbVxA",
  "key34": "5kH2BW3k33ghajveeusprQTHxNfaQvYgpdQyEAv313bD2WFQ9qXkWw4sFBJWfHxgPWLFveG7EgUE2kVGoKAdW3wV",
  "key35": "2MChwCjohn2CfMSxQrY37qMrS34T4H1qoCaswDvENxWrGxgjG2bs82AoAEAPvVJvoPhHixRhKZtZoTYbEZ2TRYPA",
  "key36": "q5Aq9iJkozsiSfDMSfpVVsxFhProsZoFigmbBN5HrxDqZZeqKpu9ZKWMZ4ftSmmbyuNihg5LDxLmyUEUrHQYRys",
  "key37": "4HGWsMAaVKTNPwdoj3RDyKrowmjhYR91jcdyTeoLEPeWokSjw8rgj23zBX9EMM7QeRxMP598ryUAA6GSAdCe1yfu",
  "key38": "35bAHF8biPDFJGzKuzdB5ucmg96wPnhP4H1vneVUqZPJMh62xMeEcstH1j33ae98PinP4ktVfe9vYm6oCYqmBAzT",
  "key39": "2PPej9qz91fMeT2Q514KzuJ5cVu5RGnQbbcJeJAacR9ZRpj8t9b5fMaLmKk47k2EyN45TKMgBH3rMFFj3ZFMYaR7",
  "key40": "3XCFdVHC4kmooNkNvUaL52C5MjmmJZBMmRbTVjD6W5sdpvfnv8caGJj97goYM1XZcyZ6317n24tM7XmT2MZH9gWh",
  "key41": "5DJLB4SFTwX8GwMiahU9QdVTkkLbEMefVbyx14VYF9os8s43mWkU79MNiPBLce9RxszV9WeRoesRERYJAzVF1oCB",
  "key42": "4Eh9LdyP3PkC3iZT3KR24j2mdbVLUFjTkq8Wjp9722KAHad87zZN3yv6niGNYNHJuW9LbiSLmttbHaFJvEPdFCgb"
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
