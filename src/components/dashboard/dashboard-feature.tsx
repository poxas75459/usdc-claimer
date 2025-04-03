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
    "414G2ZwVxA4o1LS2BZs91qFMA65JVnbgPaCtqyJ1T8LeAALJJ5mckjL2QLbN2oSntqNqDj8Yi8syURaBXyuJh25H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iXyCNPgE974CkfDj4ix7hor1udbSsvs93EJAHsoY5yUhisNwS9yLiRMDiVva9mgC9VBGn7f4vNqSe3CJ314yuTt",
  "key1": "2BpFCr2BkyhZ4geFnNjwc9uKkmJdfWeSs8yL5yG4zQWWeawvKC7a8G2VwfUQBu8HESunUUqWm7LjsW7TrX4jeYYY",
  "key2": "3QZoeAuuKVoHyN8SuZz9yeqF28JVheEmDRV5o8sZkLShHxESrU629dX9HpdkFRBh5tX6APbHWA2Zg5afN9eA3X9h",
  "key3": "3hhjyGT8kYRKq8VAThYmfyVZkkmgj8yYCCntVQ67Cm8Z1nBt62BKW5q1vY2FXJUk3S8SDKCPHA3x85sjQx1ci3Vz",
  "key4": "4pmm9jubbqNwpVGwjwce2qcx6yzVm3j4AHpLw9tryhPzeZ6dHYtfymz3weq9P552pX745T4hxveaeD9rP4pDXUFr",
  "key5": "2T3R8kRX8zkX5bDKF7drGZ7fXzyPKQRWqUxhRRCFDUXgdTnSXhC9ydDkaAEakUeFAPo1howuACrG2NGuhtqLdhdo",
  "key6": "4pMY7iaZYv4niKTACufYsN8LHdNsrr9RdzX81QF45s7B58vyV7vL9yW9sBS5XKafSxGvrms9pdkaaq2rSYdM7RPE",
  "key7": "3bxtN3mE7J4itWW9enrRAERWZqRVVJd7YVt6Dc9zuD67MoES51jJHbcbaMwzFRgkbJ8HwG6zgf4wP5rNuKyQg9n9",
  "key8": "3ptHuEbsWyyFCHPS5jLB2dttAer4vbCQ22y49EcqR9otg3gWWSJVbRUa9LVbrScneeDawgKG8P5Lr52adG5h2No4",
  "key9": "xr25AoxJvxwPN2RZYJv9jaBoKs9wDmvj9BJCNHgEQXmwngRAZ4xhjCzZBxBmuwvVDDkFQjNL9RsEnLqAkWcJZHG",
  "key10": "3w1ek3XCdbB8m6vDLdTGUu1ddJCJg3SfHKCuEiuL5xHDG6dNwAAuoJvbKp49jD6Gsg2GH5tFK3gviCrHWFCWTx1q",
  "key11": "5Hn2HxkypP7ik8fhNzuuLHrW21ZEa9TpfZrX5BEB7cpCVht51xjkijMWga1DSfYj39bE3nzpRJXYNvmn5no1SXWR",
  "key12": "3yAZyionuTVk3p8dgnB397DTN6vU8NvJ7r4J4y7ymQmwpdDaHwAA4mVyimzg42X2EtAq5FnYrNScuP7tfmuXDK4B",
  "key13": "5unBhy6tsWHEEZEULrm45zBkHBjRBva31tWEfMse6VPX4bNK2dBAnvFgzQffUFmKj1hcFovpuZGTJhhpncexgrVE",
  "key14": "4hEjsMDQCeLky2T5iffMEKEsoxM2jQxBKRiy6KuaaqbLxVLsf5X1zCdCGo2JZL5SVc1Exq5ogis8PgKKAfLSDpLy",
  "key15": "5uPJFXynxARVwULeNxGGxbSwEaRKPzRp2cmTBBXVpXWAQeBzGBEz559UH48axopj7ZgvG3gazjX8JBNDkkWL32Dj",
  "key16": "kqWjmbN1qJmudWioghETBAV7WQYbLTLCMZxADrpja7DV68Lf8TfbVqkpcUfwQNSBGT3CGvnu9wGGkuH1jzZpuDc",
  "key17": "2sDucCZaBnESPHVYmQW1ZkN3ndx75axXdPYu29AKVCtkFgAVxivCuD6HnSje6WEtXaLJ8FBryaVPC5bpPXEwGKu5",
  "key18": "2KicoyNCVsShGqH73GoCu1RAo3qgYVyYaDmvG2a13k16Q2KJ3VwAswh7RTYhHUu2kG2VDcGtPkN4HGcMBzJcWBsu",
  "key19": "rHrDPGY7BsKc62hyhKpxEidGHcFDUhkVygnvAdprQjNpdkLptdaaxgRaFTH1dtGmTj2bz7d9CP3TtjFopd1iqHe",
  "key20": "ri4FN1JneMw9wE412pgsr8QmrVQnTYCsPbfGd512XGQ9FKdzvZfYHjQThKDty7HVoVYSkrNfzkyhELoquaUFV5h",
  "key21": "sZri6rwepKNohrb6cSHuBHfDgwxgjpPC5fNpQ7R6coH13rARCpVQuLn4CpcP2uGGvgH1RjJjmpNH2NVJ6tUtS8C",
  "key22": "2R76q3j4Mupwg1hFiz6kgbHSzEyFVBbuLeoxha8oJaUpgXsp8WwTZsRUGctXeNT2ukXRerBA7watYnMG3ErDhDHY",
  "key23": "423G9PjJWNhHWLfxemGvwJakdGncferuX7j3RLxZod5pt1dRuArY4BXy1n1EjJCcRbxADaJUiUpUZ5Ei49spUkhy",
  "key24": "t8vh1aRip2VTxfpESF4Xi5aHgA4qcKiDqzXT8AjTe6X6AWjQSGkgHjvdCnNk15JwTZtBzJUjwaVCyQEhvThQxKW",
  "key25": "c7ddwrbhHD3trimZBmDWtVkXnjhArPtJXLq2BqQVPG6vh9MDjosZaYEEnmp9ZHV7ZdJTtpLRv9d5JkgSPferQ79",
  "key26": "2JzuZgsas4iYufTTrNjW1BbC2Ftn2MadXQw3ddk7uEU7mryiCB1eUgA5yVaTPUitNX2AhWdvi6vhCDN5dQeqcu1Z",
  "key27": "3qLM5zR9kjWE1iMMQrJ1YgMEM5WAVbZWKudwsJD8g52PSFoTrG4tP6K7Ym4epmgYrgnca38Zqw4ErrysW56Av3FY",
  "key28": "bo2uAbba9nRweqMs8eN6Xu3G65kaBgHVGrfMmt8fC4ipeiuLMrus814KU2xn6eSSwPk3sxYmvKKToZGoRtzTm31",
  "key29": "3ceJykUj7ndLWWsaTbgbuWkpTtF3M5JtXMeU3nXXkrBWQYK9X8MBJPUyfXhYWC3xDgLQ9iiJXDEXXvg4YRjwkVc5",
  "key30": "4TD95LPRueprPTU4WdU2mcF2eMruVdCH8BspmzDuDi4AQ2BK7h1Jv1xUsmSMEvMLtHj3KWg78PXkgTdY7DJ46YMu",
  "key31": "34pmZpgV6Y71gZ2MBAFREHEURMuaTpmt6DfJkcZZQ6KS6fxKc98GiRTy3Nw2fgR4JnGnyXA2HANJLUJwGBvMKPNf",
  "key32": "2MjBKgkkpb47UeoiaDdMpta1hpXi7ici6voYUf48zwR5DQMdhXCZxpw5jZMRV3LawtgrvZnmNtH5Wn3aucy9MZqg",
  "key33": "9yfvcmQWBKYhmecXTzhF58ty1wh8Fwe5WD5mGJhkar97iqnjKYii7wenAi5xnekrbdj4h3WXxDDKaWkaQAWKaxy",
  "key34": "3RvXfXFfDFTXWEo2L4hodhXxD3BxNLzwDRa6YYZUjGemp5w5Zq3q1A2ri3BkzPAy8uTCwScgC5cSr3m4GSnegoKX",
  "key35": "5i5GJRspJV3VnpzrozyqauSeyAwu2LzgeN82khz5wfpyc496hVaKNbDZPr9SRvVDNL5v9GMMdx21pqJiutN5UdBj",
  "key36": "2RyCpE87m4JHYS2qhUKqgL8ymNLMzfYVK5YR2DvKuWd6h9HkJGj9N9SgGzU7PsPPQY285u29fnpm4AQfJkYSPRtE",
  "key37": "5bzPxNQZzUWbze72UbKgcjgvZHWrZVFiRcjxbWmqRvoxfkAxKhSe6yyF8h2qLVKAazhdA2qyyiD62p1RcB6vCtGQ",
  "key38": "5Qv7entMq63EaPjSMA3hPYtVaATUy23mQuyb81CE6zvAfwh2AZmuL3EcSZ1vRu3NCy65BoGiN1DfVCcJ7VTU4pud",
  "key39": "5Bs4yV6dXpJ6A6SoUTNsFf4zDVLJcZwv9DEZ6i1XArtETPKZJZFYukuDQqEtB7hRZZ3ZqbBHrdJ3ihstwv7uTfis",
  "key40": "d3AC3hLuXdZVtc7N1eszRjaekcrLcTooh8ffjusi5W2vDNdu8xWCkpNXLq6emLAymdWsD39KRz8h3bQeSEJyunM"
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
