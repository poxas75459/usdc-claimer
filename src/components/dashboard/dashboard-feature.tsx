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
    "22YnC4KyCpeZWkLtHGbMKPLzZznntAD9Kp9YdHtkKXsTt2XCz2szErpiv3VgCHPCsjb1oKak4xGVxZ2TDNu1FAdm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47tLJHQst9EShwh9B1Hvc4UhY2W8iuiEus3SeZJwty7PvUwFu8hnnmPpywJPqHy9wzcd54DgVF1AJj4N7Tbyg1TB",
  "key1": "1cVSFmqC2cCEq6o72485xp2Tza4Ruyz413MT9uyc5HX4YBNHgbq8FPGLHuSb57ScgYYdADUREHAJW6t8eK3ZjTX",
  "key2": "361y8tS3n1MgYmAo56cmjuv1akxHFFJ54g9HnDTGJp84vfWqmJJtDXWajsEKzHAuwT19TrdX9m12xZ4LjJp5xk8h",
  "key3": "4okzji3VbLfRYPimaVM9MintbzLqCnRo6Prnt38vfEpAWn4pANoAxZqaP9tP3XQgF7v5UjSwfmDju51sr6ngVjWZ",
  "key4": "3r1GPjYSqvPhGp5gJtvuAuQB2XypH3Xrh4azoNhupP7FesB12W9NvdMB592Gk8Xc58wwHYHvb79MjMeJbVjTStca",
  "key5": "EH2fz6LHBGPbsZZJADsUUrAHHX5JgU6wv9Y288ZX8DwuJEbWDmf83Pep93ihoPyWq8UB5MGVCStLa6VYJfTrJgg",
  "key6": "3dzTkW4gsqpL58ZrKsQphsa3pxyEuKHEqwc2q4FVPat2zEz4GEcoKsPwrq5y3cobF9suTzYGxvYQV9vS3sZkHuuB",
  "key7": "5JqN27BfKv1bM1uEaERDEtHFjoSuTzZTCxharP86UTT9jifvZTgjXLrTaRwusAqx8hagBQswhV5FaA7mTGZsz57b",
  "key8": "5bfG1pCm4MJPPmFxvn13U6xLMszdjtyrFs8T5gaXFoGF5edDnBqnLMtDxeEgEcSyWoY5qDACjJjAe4zQfChj96yM",
  "key9": "5PqL2sQVZnu11zYn3UoFHim282aogn2AyGYY3a6pc7RaHMk9F1cAiP7ZwMtZWvtynLTJJJjXeTTozbf7xkdYmpHV",
  "key10": "hhLkW64A2ecPTSg4uKTdR5U2TcYmeUodPi8sDcNf9kuZ9MYV8s7hyBS4ZJdZULBFGWL3uBaztN4K9s2hbhNWxSM",
  "key11": "2jppXDgqFRiagnyJorw9bQLUHtJV26MYbAvpfxN64tzso8SN1tuWrNxHL3fCJnDMzzC17pMZp8c6Tp57NtL4n8no",
  "key12": "5grwUcGoqYsdH7qFsYifaPaH2oCvaW2Tf6aoZ8imrFiPWnHY6corBKAXamkPmcSkXWqf7hnRH1FchUsJKngusLsR",
  "key13": "TdvyFsYM9AeaDvcr6KwgLzp66rugzwmygiiMnN5Cpefn4UkMjG9vzw3TZ9aZPRARuTfgeLWrz4E7qxSvE2q6sh2",
  "key14": "2MWcKc5N38wqAZQBSpsDNMHBSV2xgSnctjopBHv16aguacG9ZGhuw4SrFXntCqwuAD4zF2qpadsfuwvFmxfqqdpZ",
  "key15": "67n1LkcdU8fNnxd5gkftGhHzZgsZ61Pm4U5bFQGWtgPj3Fu4WZxFEagVpkSKcyaBGxvaEBTUpoari72oDTM4UjHB",
  "key16": "5RA41fRHa29WXTuny9M5bHJBfGxTEXEfZJ7XLGZAmzacTkLrwKBVb9pMQV5KdfhNXhTD5SDkGEqygHaTkFfkfQB",
  "key17": "U8jGYT6G2Anveh8G79qhEzbybFXFkzG9dGaaKiUEffhrMZCHiMpCK9TeE8khaMfAoZvDF71sxWyWpvvuJtZJPuU",
  "key18": "37ZQimjvh6T8ArF2nSfBh8ZryTRQa5xUGgPjLMC6RYbJib2jfG2MhsC4XLsZ5qYZSCSkPn2AjakTEiLbvJsjuK3L",
  "key19": "5tCmt83EMEiwrHBMpt6SthsqLGXPKWGeGAbsqEdU28GdPjdAZFN63EfmGgFXbsTYd1d1RdhRWyp4vKkvjZaBj1QY",
  "key20": "3pCqgrYSJKAs3mPPFTPZKanY1ey4YjiYVWBZ4zr45F1FXByyvbkF6E96ZBLChTZdwhsLjnmCpSp8iXrWittRnkAu",
  "key21": "5w4pcoWHY1yPkFyLiUP31A5Q2QTcEwJyX3hBFZsKMG1i2fw7Mj1xbnVb9bCrzEcuYBZdwjQci7JSBbCCeiB6kRmS",
  "key22": "5Kwq9uhLLSSgDwqp49XfXaP2xgJUe3Ju283WZ8Pu45tzeBm6W6YXnUaR6ywepz61oFvfhnfpit8V56S3h2ddszTi",
  "key23": "4NKMQ3XbVfo1qpiDsm4Tw6AzHKnC9ogPQcAvSA1bke6eZKjSQ1Z66UwcRm7REygqG8DCS9FqUPZuHqehoHV6to1K",
  "key24": "5Kjx1RsQEK53S6Bng1mW6Tyh34EUCDbzyYZkPwqdt4nxLPngQKDv65t1pygG8jMwBMCayi98bCrnatrdBC1j5cFG",
  "key25": "kKzy5qYLuar21zCrhe4f7kw1RupUR3uFNCXdm32jnj7yPKpEWHp4nMXHQZzWMo2cktzKkJnZUuLJP7UqTMQuUQ3",
  "key26": "4ad5EYEcWpUewwpXmKEVSwad8wPiGVKvVdZ5gRZ8ALdshWL2Zo9CryP5UkoaLbfsCCHAYc4VUzrPHdUvUW4WvWiL",
  "key27": "62LH7iXzoxRduxUrNnXP5PN7WWrbrjAe7ygsZ8WYMneTugos4tuQLat1xC9PCHygBBJoULbpfrhKGC1xepj5yAHK",
  "key28": "4MhYiUgdEWuGmGyDttDE3PkWeyJAWgEycnnyLnwqJxAquxZAh6kL1fXbif3BZ5s2M5En7Qhe9TLahCYwu5cQZ3x3",
  "key29": "5r5w94HNsR2XefAWBcGNZqG9Q8Uf4f4npaHFxCjGrbwndgP6XFwFcXLCzNwYTAgD1jmkYigRV1KoZtwnGm13VGr2",
  "key30": "K78pPBGUhqsmuUJ2w8zDEDa7FnCpvysWyTesKRRtnPnyTyYyqqrQcghg1dR55tPx98nAdrWdsCjMqsqrz2sgg3a",
  "key31": "5kxxH6FSFehoyUiUuprDHu2i9pTxxA7ZadisCjptLuy3pQyGJLxwceARhxxroVcjcgdVG74bCjGyTex7EyNM8dG5",
  "key32": "3QEaYWmURTm2svumvYztPBjGyfoaHTCHXSEXoifNJ4xQhTijhDYxKqArNgqB9FMsSHcuyCqKkrX3i8x2cPcohsFj",
  "key33": "3mbrav5wpFX7C3Q6r6rT53HAb8f9NTYBNzmTQpjf99491pMC6toF58K1HJQYZ5WpxixGkLWxhTsTiiZV32giYQmh",
  "key34": "2tugtSC4qicJ2dudGx3z33mQ7BzE4m2rCZvUa4f88UhBcTMgBnTJMerNgKCh7Uo6RtCuAs8NUVn5mJw8DF3RLuCX",
  "key35": "368iy2uJr1AiPqZaNnSG81uEDcGa5a5nUUnuDyRCyLKP43WueJeeJwR8HCFQWTovWx8QQ5TAjSyX98D1iUepgxQ2",
  "key36": "Z8Jctvce72FGMHg18e9hKbXT7U9FRTa6AytRf9ZhasksUp4MhuFoT73ptgkegnYh6tYbgStL1DXjSJ4FRAMv7ua",
  "key37": "g5yAYRuGrWYoKn2S75Ww36bye693tVjMDmnpHD8reAt4r2FQE92DhbzvBPHbYz3rdmeYQ9jNUhm2UKDSiNFbcfy",
  "key38": "2LSShxp7pVtCotcDYCbfPmHGYxYXSGEX9z1UHwDCrBCFtwuBx4wkQZRWKP1q7rHVt1SNtvEXZoCZrhusCXf1LZ9a",
  "key39": "bFjAUnEsMYtt3X1PPkudBsXb9NdeS127ibwzvoyYvsANohidxN7nn1Bbpo1EBz7BRNZAYNb62wBaqmawpdv9YZX"
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
