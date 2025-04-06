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
    "Y4nxHUtVcSDR7CsAY7Eiejsyd3MAtQnGucaRH2p8AE5sPNZmS2bkrLfBHHUEhcvLFrfjN8Hftn88h971sjag7QR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jjjUP2DjeWejz7nxfWv9zh4rDfxrah9jsb8oY4ft9JjaCWKN8admosnTAC3w4FeaJKFSeo9BWF3K5tcNCXvzHzB",
  "key1": "2ySxsTNMxv7EGSpCGTo19H3AU3pTGksezNDvK6XHgqN6544envvXKeG4AcYsrEK1Dbvm293Tuu8ix9F4bPfhH2J2",
  "key2": "3FSBAWLkheWLqUx3zJcAF8FE2RDrwktdaNVRipEhw3tpxd1wMro9KjViZEu2jySGvX9ntRzTGBS7A7wE7LvNWdso",
  "key3": "2sQiCQmW5YumyXMbZxBm7VRgtjZU1Np56GcWMLYbR6L9a1YCwdy3iY9RPLcYAA7m8HsWzjuyJZ4y9hmBsAreLZzq",
  "key4": "pVBRC5i5Bw9fNwgB6spgiWk9SWE3FMqVb5Lwm5mpa1uMTDqv4jzyBdyTSeutcCFnLP82Wtq3QNMBKRLuCYFrAMP",
  "key5": "56QHqWuWWFp7sDLj2Z7DiRCSvcVKxFPjmfqQP1t4KeVwVK4qqoCMThsc9DY6715qx8DZDi2yaE72kJNoacabujhK",
  "key6": "2dtwU5ASuTLgZcvFrejU7gkuP6EykDjJVfyan2CQr8J1k4qUHbyVSZc5AirChKkcGETTd3NEFoh3ZR1cKtAKhFDF",
  "key7": "4dMh16jhzmhRjshNRodesfbChi8LzoHt5E9f7qeaQz44mBaqdkdhudqJ8p96Cu92g9zYx5DAAGsvZUP1UsMn3Qee",
  "key8": "5EP7z8VYM3eMQWiT5TeQPMCpEbXYMhJYLnFg4JxaCcWrMNNoMKKzhbgoiMvX7f5BRmxNJzbZ5oaygp1D2p8xDR73",
  "key9": "4eXugjXX6kcApaMHKvPmYaWFfdpLNZmLPBx9t8kT735BZRznq7XyVZ9AeHuvMMAaFhf3ZfvfzvY87u8X6hdpvB5Q",
  "key10": "2U3za8uExd3SjyLEQ81UDFUgsjWePna7nmDLW97vb2YMUvyMXUafejnB5b9gPXohm98yR7oZ5Av1Bf73GcGVvcXV",
  "key11": "5Sw7ewq4Ah2kZUb1aZpdxpb5pvyK9xBs43aocc8C1JDXfDTR6uWD9XBCfRSDfxNvj9EYxCmTJ9vcJA2SjZCuHiL3",
  "key12": "2TVuBezpVCDppo7UhXR8kC8xNjvvH3QsMVawu6rti7avqNC2FJuKEFCRSTbibDk8e5StFmvuE5CzRatmiGB9fpzu",
  "key13": "3K95BdinBdhkbo8NUQ2YcnJ67xUSoyjA1u1n5kVTNcnipfkuiFPNqRuvMsDFW1zpE9qWk42YqH3XUVZoUhM5TrDe",
  "key14": "Sf2Z8CuXuPzE2QB8P5xLriPkCUHkmGZwB22iz3jTv2SpC3XyTh8Aeb39d3h7m3q7e2c8KLY7BtPRqKgabvzVcg6",
  "key15": "4tkTBssFycMJSXewax6ZXh8Hr1pc1jfmjeGsFro87bfC5YLCmM7MS8qd5U2ge6NjTBbpjNhbLbxUs2EABStrJdyq",
  "key16": "42sbaDZafbkYjZ31PwdRCgYKSaFpZcLuWjBPucmz3wjwjBUkanp7JQZzd7PUq4S6ibQJEtP7WDmWabcuEMFMPm8P",
  "key17": "3vZneXo9UCLyjtvsNKY3LsWHK2VSiNa3Apy4CVBiFYZLdP1NPNftk762kxuCEHNf5PWa29qZn6iyoihbe5zbvN2y",
  "key18": "3CsMvgRV18rA4ecRu3TARGZFYFQc2YRCSFaBDi53LrYHbibCJ7YPh1LLAUvKK9RTg7vQBGAnNYaEFAQfVZC2xVEV",
  "key19": "2qnvEZqbNRYWJBXXUChFrF4V2WXozvFAicsH9q7HU8jgEkNjH1HkYxzVsDPg38AGxEDXNSzUG2uyfitGMJ3WS783",
  "key20": "2y52sU7GBipz7cUEkddG8Acg5AdfwRwCmuhZT6RkirBodbHHo71n4KqKa6gMopFGVFoYS1Lb4sxg4pQZyLu47qYQ",
  "key21": "5KijWU85zK81cMNPTmpFJ8834tkUfM1FDsvDn7tJK1kbVLtWniFUgRr3vZkgkpw83w33uuSdfRAFAxCZYmDT9LWU",
  "key22": "2U2xJPTow1auouUWTCmMBZMehWjam2esMeypQuCPndTBeuJzAtCXimK8fQTQEngguFeXXP5UZNtZAV5oUx7RfUB9",
  "key23": "3Q5gBKB7xNetDvm3V5a2HHbFrP2LsJvYKSxhwXDHQXfuBLSf5MrKxaDUSBqikMeVetdzUoT9gHfiS7ut9moyvTRp",
  "key24": "5Bv98dJJAWsHGNwY7HMiLxZtoZAJQVFQX4aDYNjQbBCDpKR3b7jg7asBuxp5m9ZUctGzhMmCfMb7XMe81JUqW41t",
  "key25": "5trSvnq669hxVw6iz2oi4AHpRS66SC7R35iwjTPeKmrMmR9ku2jHqjfaaGd9yAnwDrsnVgoCX553EGDJjk2wTrye",
  "key26": "NfErXag4QVbDTrhAUzernnWrX7DSiL2D6Ms4ADLEzYzW7ERF69UcCmiPsWPGWNCc8Yh3c6r67mNcD1Jqy15zUzJ",
  "key27": "2dJEt4eTrLojjZdjJfzSG119XDhRrNP382uy74be2Hf9sCrKYMeRha6PwozkaCCzkZL7gKniMcNAQqXzq9sMs1yb",
  "key28": "5vhQtDjRAuc2CjLWC43xVEvQyZSeBXiLqNCKjSYcMoa2Sp6EMrnbtqPsCGGQhTr4o2zFfoGN5fL44QxMAD1tUt8u",
  "key29": "5CHV9G2E29xiWdvTZd6gQLtv7nDHTVVaMEMKUhPaDkvMLtasH9cYKqNR323Pn6Anz9EGF66fhE18BbLhwwu6C2UY",
  "key30": "35QZmkwz6o8RYTTNNyr7oYgbd6bxSLMcPkrcnBWmDqWdRuHvyfWsw5sqjLomRjZPCwaXK5vuE5e5EHxrXMCJHPxf",
  "key31": "33jdm1wKET3YsATbJcM9bWQ2QiQCzBevY6yUJPeV5pWbTNMR6MqyegSui2byDGYCJqnMtSFBgkw6jGk67htG4knm",
  "key32": "2PkvTMFcK7PjMSyynBxouBPWpFqQhqxZ2MZeNY7V5Nr9DsKNAqhcynWmGMJWspuGQUr2xmdjXTK8wSvtVFZBME9t",
  "key33": "4zXg1tMwbTbKc8kfdFx9yAUAi4u9TwetjGSUuXF5qyhPAdC4N9u5KLvUAAQbrknBbhm9WqB6PWP1PoPhFH5hJxZP",
  "key34": "2a1zaqs4bBwwoNoCezNAUJNc171obAJJwsgLmdmTLnezHWFYBH3pw4acuS1RgwJA4Dysp1W1L4WuHp6WG4ePm1ph",
  "key35": "55wFmoeuzJUym4hYE9n4ATa9baW18Acrk5vuUTxzmm1jFn21pk6KVBjTXZA2HMTa8oSqeQefDMeQRgsWTL1nuhyL",
  "key36": "62wziXD9mErrvCuUcMMbkG2wascLugyXpv42NCcehmcmscEXGRwxNrkoNNwN83sWBL77GsxjN6Ft3GhhTH4zqT3i",
  "key37": "3tzifABspheBp5oFKfBKKA7FWyMk9bSzKKvCdLX1jtYFtEHPpXzC1KzbKRnWqM5nYoo7mdAQcTTXptVaWTV1Q6qu",
  "key38": "3uVegYWYQRjD7eZPjiphajpN6FJqMCJ628Df4PfHsu7BhCVcrEUNtB9ZmssyDbGZtx5NEB6MNGAqJGUkqH8egdvy",
  "key39": "3hcEGrD1Exvqw5scbipheXJ16JKgqgfHewMWhucwYfCMHBTuwNynrq2SqyXQXPtXTxUhQSdRR5KoMo7BJ5vewU1f",
  "key40": "3NCmQdr5nRtppHa9LEDKBr64144XcqpS7bhiZUuR72zNXsVJFc1C9YXEJSBfYKg2ZFLUbEfvpksQgckfWwWry9KG",
  "key41": "3Kr2MEt4yPez6KbVtnWPqNe4sa5V6kp3f3AJAi841MDRhdmH5ugSyKrTYduVKLVXWxZQpHq47ZknqocAYKRnbU2Y",
  "key42": "48ZVg3STJ4kpATPgudysccFGBiJdDJCML1pVPY5ixy6gK4iiVtGuuEyKj8tEHPdC1rHq6CH4qjHXRKANkiCUG75J",
  "key43": "99zFyqV4ZiS4gicJhrto4NCYyaiudbuJJkwB4bFgG62qtiQ8GfLYDX9W3z9L2NfYQYwAVA463ud1H2mKbMPCtnm",
  "key44": "2ksT6eNfdu1QaVaNgjJkjqWNifZ6J44Kq1vtjCoBikq3Fr39TJVs37VcfkgP7fxUktzb8ri4Mqrndqb4D4rYUTYP",
  "key45": "Q1FeaaxYk4qQypdFZkzNVwqUgY4SzW8JHc83Z5zQk3ovzcmxqT3CRdJ9Bu2Ja8UTnTdYkuLjRmnv8dXARMszjCk"
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
