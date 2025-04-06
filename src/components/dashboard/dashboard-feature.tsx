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
    "5zHiw97E2cfAmw8nVqQDAYCBpnRwJjktbvauooJ7Yy3F41WwQ3C2PLSiU7tVq2f11M5C3LTuqWn7Wmgevtna1itH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DQ3kx4oy74gAvy7yP368fTxiVP5LawND1ws2yocQFN2vHfwLTHaTUGwUguzrY11tKvFy8HLoUSUSxwDsJWBU4CR",
  "key1": "axnksxbLzF5GbtccURyvpKnWeNNtKHVDSHtmgcYrsKq1hHn8BexrEEcnpzAKS31nufX2nAirxaENnvo6mAEdqK9",
  "key2": "CsRHYLnwALfMUvnXktaD6sUdUfKuPZ92WgSJs8MRXRFqS1nUsHrewur8Uuj2adkQGbwVuKaFpWCdgEdifJchyr7",
  "key3": "33MUwa1BUqtFmKjPyGQyzd12GtBtjrCUjEUFmef2LdvLTmHF5wdWfmzdDtfBrJnmeswnNnTnttmmW1vVqrHifVJr",
  "key4": "wFYKhY39ehfwscQheBRRUiR5SCDRJjB2i62PsbTQpZ4a38HVDQjD1L95Q6kVC4aVJKqbToVUhd12BD6aTYqyNrL",
  "key5": "43g4T8c8YBdzCBArNTJprSz2FcTC3XX57XDTWkCnk8BThbV29KvgvMHbh7xvFm56VrdkAh9LuC1ehjp5Lh1P7hzi",
  "key6": "4Vnz1Hz65eBapvftSheDL2MD5h3iqih2zCYHWDea77BCgyYsB86DYgRq4QyLEu2iK78UZuTQMNnpTWPCG8dRqLAr",
  "key7": "4XGkVYntsyyyCX4mGs1MKf1tX6QuCyLBW8aQDw5EDVc1Y2kow8HFU9ELzr8WNM5ghayUjCnuA3RXBpY7uVkUG9Vx",
  "key8": "4vzf6aGqNA4xt6XMd63hUznA8aeBYRTXjdrdScQmU3XKgsxQbidyBpvdYeVwwaLB1v85bpMgdUVCvomKnzBHoUvE",
  "key9": "21BLRLvtyGYDdy4ah7rdWiGy2sQJz9JrCtvXDgzHjWX7QWEYumnuta13bVPibyQUh3fCKNdawZmfQdjEUnDVFgHc",
  "key10": "R9dQQt6wKkMHg6FScL9pmUeYhLkfZXyg6vSm6ecWBVwQTYnwbcPHbaakZGRYGE1rgjk2VxpqNidGQhvNEiarkvV",
  "key11": "3pwXLwhcSNH9PtiRAykLZFrhk8V3mEfsR4Zb9CLFhxeMpSJR95WZhMExvyosBTxTX7RdGgXFPbAWHfTFkEFVqyGU",
  "key12": "qVUdMqTvnXqgm2qLCk7XDRosjgdxnsJ3xqq2XU1KAxUVh6hJkkiE8V166VhUhBdgSrgz9tR6jfSro5UMx1M86nb",
  "key13": "5PD1NXHGVS6xH8KZK52j5QEyv1HMcf8QzHEwUtTM3wyXDLuBztTpTBbQchPKgfPrrr1d9NNrahitSbiCymSdd6kk",
  "key14": "7muGEKDww72byg3GL26woyGGneUirRXFEYHiTZyb3yNRi1QMMBnHYfGSMYSNLqrisipeUEYURSBJkhprSJ8N5uP",
  "key15": "5fhyBk6adUB1CTGehLwWz5q3pPqHWbk4TU79AyS7KCtissgJuQGUnYXoHnn4H6ajotZ2durb4vXmNEC8m4mkTKp3",
  "key16": "2LWRfUXSBKJJbYiCQ7KYi7HMjky4WBUGYhJAn7prDFYTXji4c2wjfv4G5Ya67LFM4WSoZNyTBhTKHUuBREkRqmqz",
  "key17": "4xR5jpwq4S9q9rXSGEcD3XBCST5rFEnDnS9neQWcipdaKv4Rg2oNqAihFr4SoFzRBmhsRDqaNszXGw5C8a91LJZB",
  "key18": "54Qq7JMqkD2T7Z7f6BvMqrgzCHRfBSMjtM3dZvKF9r7iLTA73QafBqkX5iPKpY68QDsQYXhzUJZBZSpM4c37Guse",
  "key19": "tBFbTroCcZ9DUWimGZEdv1JdA8QrD7W9pHyhZGJwiSf8YZ3fjPyLzh1ByAR1nuanyDdB8mjJe5uZbKj1W8VmJDp",
  "key20": "252YuGrYyP5hW1ct6xSVBS8d1QyVtc8MThSxwHmcL4rNKs3hnYbcveJjEp19VwGvyTnyguHeeawfRH9vrLr7mUGF",
  "key21": "voMnzWyN5GhpzvvbUkEaQYGMfVW8KCw9vGc2Ft1wWEPCzt2kUeAxwWBAJzSXoEpKVcL7Edrf9Z9BFVCpHXqFETs",
  "key22": "25AJaZW7FrExS9qRh4NDdN8DtkE6cDd2VSFuqwGnkpL3w9jishUbWUQ8NbhWQiWdw8CDh2T1ZeokF1MTH437qwJ9",
  "key23": "kc13HzpFpJDbghYyY5fSkcUrocNAtpuBZr4iXYt68FW7fGiHTTWE1mB6yv7b1Qbqm7VWMs5tm7FYpfXtX2a6MQ5",
  "key24": "3YwKbjqmwW5U8HujPz1aAiuKPNaRFyu5MkREBwdEubgUjJaGTRpMFFgcVsWpKm3ChA1QwGkphmoHxJDd6CqbdqRp",
  "key25": "251kwd8ZR588q9CPWa9EmLULrVebXzaKAsyJ1gwtbnDDdmvYwXVjCN9u71dx2qDJFmu1pedMTjV4bWaPUGnsx73E",
  "key26": "2rbPiLDRWEorJsx2yiSL3kZDMJ6qUmH1ddCuRA5G3Boj6nDGeBgG3E4A1Y845pUhuycLXLRuJPg2bBMp6GfLhFpb",
  "key27": "2nhB2CtEScuTBD9JCWi45hnvbh2aAGQkJdB2iQQR46fd374544mwLQB2kGtFWs7NUgE36HjxvatRUDndkN8cw4uJ",
  "key28": "3uLsqCrpNDVaeGS1WDq6Ctb2FmXf88F5kfaozf4xUcuDYBjmEtYhTQRsP9Psa2Mf2VJs35VrgENFJf8nnsSEJ7SJ",
  "key29": "a8kVkzRpsN8vtdkHEn17DSWaYBKEBx3mrAKWLSsMAoNu8QAUzrf9AcYKfkWtt8D7JGfhpXbd2DwbKbo45JobjWT",
  "key30": "3HFfbLKzBVABeKah5m7TMkTEeorDMSfh54CijmkSUBWQ4SiCLgSiKTkG9SYYMd4njGhpiR3et69C3wADpSXzxjj",
  "key31": "2NoezcDPfsnu87rJxzSgt1zL1HkgEqSfHqXv845nRLWRAmkATxjWkuEgt64YsGxCm5io1jQTKRfhY9WWjPR8gMHa",
  "key32": "sn9tKkkadcjn2aJhoFa3YkEZtDtFyFWrrWVKedSkaEexYQ1FsAx3QGHxUwXvEwWyvB88pXHAj71Hzstscj3Wgq4",
  "key33": "4AwGTzNKQtWy8di4fCtfwv19G2xtB2EGayqtLNHrakFpiJMd1aEPqKmZqhZAQd48vZP18BEW8PY5wCNGAXVPNz6P",
  "key34": "2sLo27RFUHVRkU6SScZBtjUDeJhCkskucrWAZ4G676na5or94Q1BsW2pmrJ9X5RsLTNopNbL4UVxRYdeHHgkpmvH",
  "key35": "2eGJRVMY9w6HmjnqnKGSWPkHRJ8931zDSDgXswfVbD4HYZxyk7ZVtBk9ZLXDwPT2Fkbh8AkHXdHPm3SFdS5UVdou",
  "key36": "5TEzWkPrh9JohsoE9vPgcL3j7eFX9ovBB7yGogiKuE72aB8p2pgT9sAgd9V6vPUSuRHZhBk5ekxWJV4WfA5q1SRg",
  "key37": "3nXPrPsvycWSCMnKnXFcuDv4sKT6HgqU9gSoaWLL6CyPQnDRuZ4GPByNJ8j6eaxmHviREU6oWLPpSR4QU5QdsQEg",
  "key38": "jJYwVFdA3RcdSP6UJCpCzstyknKq3eSZEdqyTnxhLj9arGLbd2GB8FYk9u5ngDi6GhRtqKbXhegJ4FEBuak2eyY",
  "key39": "4ZeRbHqDUYYnAmbhxdFqusYpYWaL3gwsrQdfvYmhkB58pr6cNuZSSkcY9TqE6mwamRdNSTNmJ6mGoXbxm1Z97TtN",
  "key40": "5KgYbzccAG6n1Ri2HGkYuWZDdtoY777NBkAMmgQjAVYKCMCw3QtMaNFhXQ926Z8mVtwUmqXA8nmAcVWnXuov24md",
  "key41": "3sdxL3kFmDCNsLFxRsvV5yrTc2szQLmfHBrosTph3CKMWF76VB2itYEEr6ouzJqo9EeJdHe3nhzYrYP7ka1eRmju",
  "key42": "3Ck3djaWwNZ6XtK9yGaSNTtLD1rCGFuZdgP91ynBUFBzxgDYvfB1hEc6bvng4TtmB46VRc8qwTL6uvfVZNtHVbZS",
  "key43": "3vQkLPdvnoDVxsjzkAeF72xEKfod9962aTjuZn2tdmsq1sFqjXZzZJ58ZWFGQeSJQhua7WTBUPynZTsVxGVGRjib",
  "key44": "3DNhUrC1xfrDGvfyCdKyzfLzLxZxrpdD1He6sLWL51AspkR6MQnSXNCUo7CzRGhrCfZcW94hbqTWyPV973yw9zLV"
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
