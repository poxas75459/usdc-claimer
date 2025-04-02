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
    "5iv7Cd6GSis9Y1FMNutPBDoCmGy338VKX748dMXXYHEdKNsv22AWmfV4u8JFD2JzGFMSHjcYjuJYzcx4UtykJofH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qtzu1YdhysaBELByRKHL1AaZUUt4CLn8Tvp5QgFfaX7HyEGv91npgCVZT7jz4RxghD9yHJLuuqqen9eQ29p26RA",
  "key1": "37nAASvLdS4mMYa3HVArFc3SRZu7zgWLLMa6gLQoL3xiGJ7YsDXhKupTPj174DEMKaSfNHN2XBXZGmQjwjmdc32p",
  "key2": "4PL1xNA3RLvF93TsnKwZM6LySamZtQRHrY6Y4533CRCcqX4HSTgamdruxaeHG5tkvMhzdcTEnjtSNqZuE4x8TRCZ",
  "key3": "2G9898hfJaJLttvYpUsKmjBfe46NPhuhwfKzqfoF8hskg4BgCtqD4zrsamyWkrQm1fJ7D9dsEQxvRNwN1yhZqtDk",
  "key4": "2wVB4Dg4sXfwvWr4VLMiptVzXLYv4LTLwF2Nqoqrp7ggvfKBGVP4oj1T89jcamrEHWZz9ESqG4KudoVmtckJkNT6",
  "key5": "3QmQqdo9Ldp9mEtabrAzCbigvNjvkZM7HQPcD6GkKn32Y8hSArwt3k4n95PqZfu7a5aa9UkyTYTs28f6KiXELvxY",
  "key6": "2xoWfWTk4HnJXQDoaJTCShKTiUDPHBWaziYFDiA7RH16NAYG7SAbK9iAQUt4vpxxNotc8CiYpESPdh6nXSHd9rae",
  "key7": "VGyjSwHaPiBcyNAF7XVrU19tMc8T7YQScB3JyX3s6LRumpv7bGkAQJXHze8NokDBQKhuiadxMKPdL7wF2k6TMJq",
  "key8": "FB2BvUeMRydEwJHC7VbM3TFSwnAxuZzDcKP6gr8bgSGHbw5pJ1B4eiLCmkRkQ4iPao8ppY5YRpc2KFJCng4KW8P",
  "key9": "PsHSvkGLmpj49tKZiuAfQsRpWiuytJ63iWQYJimW3P26xa49HBiLF6QGqnHCDBVPiqbPRtX59MTzTWnmSA5s2Jo",
  "key10": "3idjtVBxzBRfwH4B5uubQFuvwdQ6XHHedbGDJBxwGXfNCrmrtjHXNSg7yzDFbWcX1ozFf9gRAABVhJwx1jqUauaA",
  "key11": "5x4xSZeiphuCywNMsdr6KgB4QpSSgyBZW9PQYf8QoQxyaCn1S5qR4c861aN3vprvvrzJdPEAspi8i2v5KLQPhNmr",
  "key12": "2MJ9AyoBWy1DkLKf3Uecd6MLQC9NbggHCCmw3La2MkYTHzsQguoxiGFLt4kSUhrSDSwSjwF1D6K75HHkAUu4Eqsm",
  "key13": "38tpfLCSZBqgihRVenp2QKHK6qJTNdcYMZJFMqzc5AS6DPekQ97AkZ3HTJoGK4M2Qg8nHsNegRJrgYetqgVXaBX8",
  "key14": "51dn3juHF3x8AKyU64fxDoLrrQyK444V2ciVWAVXxNW7YFKsjgVwxxwzdoYnbpV8WTbByHHrFHwQ5rPYpVhNpw9f",
  "key15": "2ThvZj9ogzeF4RjSFdAzYc3hqwz6kTuTnfBYMHCEX2drwnNr9EUGibcvc95xAHfV6nXa2UH61mV45h8EbnWnUxbB",
  "key16": "4iMuN7B2aaAuNJxPnnphPUnCCkYFwMKjvDcZK28G9kr1Sxn9dkhvbTLMqo78hLfgDvXQMoWYbJhiFXkCHP1E8wSB",
  "key17": "2o14TzUyZsvF55khhouMpnupf7dZzGdzjCJBzTyj7WhRSdmCP5dFX91k4cAhYYmr6dMuWLsnT5Qvds8Qjy2LqeHR",
  "key18": "LoCZqwXoXGpoAyTezeozkHtaLETvgG74W8z2KSFUnrm9Pyw7nFim1UixWpj8G6UUY2u2AVJMQWT9yXwFMeP6ert",
  "key19": "5SMe3thoNawBP1QtmWX9V6jvTWyicr6xk9UpgUUZJVZ8szePLUPrgaZAS5yRnmfsMKs5HPNSsoPXHPwfRhDBXGyM",
  "key20": "3iBbvpZBk2J9X8Rc6bhVxm2nCgrs1o4dFxCkms2MXYSvtsNVXaifeFYDVwshRXUDx6Hmf4adq46zfos6PN3XpTt1",
  "key21": "4pjtVgdgQaG6QQf5F2k9y43BsCU8ZxFkoaZFcqBCqntAQmruTEXncQpXzTyPvffzv9t2w74bX7MACAF2AZJPWqsZ",
  "key22": "4KC4o8pPe5xt84yNGvU4bvpSroSQRwWWjo1PNZcDDrXZ7Zp5QrMD96ANmSfuDvwAxGSLj9TXRu8L6gW65zNCaX9Y",
  "key23": "4xLg7cftmdWaVp7k1Vm8ProuH2xnuvNTJCamBZ5Bmz4pfKikekd165i3KVgbf1gqApatLu49azW4Su7mrJk8fcMg",
  "key24": "2KQyozwP2mu9So9CcgfWhpcLtzTEapQuBh22mu1SPGSZFyeFikyD7XwLLcQcELmQAEkwAMw2nnqHATcHTroqFBkC",
  "key25": "2wfhuQMkXcguNg1LnPJo36szekrFHGaqXZybvDBRTUUy8CxoLzw7xRU4464LwVeLRttMxr8y7uzPdrKjxqBbSx4s",
  "key26": "62uPrHmHry2b65wpZrJjwMTELeyxcLEe86uwpyihHyYpQPApGD8UN8YZqCoeE6Mejwy1rRKyDFACYAANhkzqLJy1",
  "key27": "3JL8tcLacGJN9W9q95bTde58thPHLVrGPRPPEBUjXaLMd5NzJEqhPBxEsA6ZERxxbmiL3gN5T7LFRs3KosN7meEo",
  "key28": "38ACSUXy5SUA5xiWY9ugGC2AzNKT997Q5RLz1jeFn1DidMHmtg3DoE55ErxHYcnTVRDT257JP3Cj7FVyPEdBsaGV",
  "key29": "4YonW3errVU7hACD8UQpr3yHiAJhBDpbLsK27XaY4Hh5m9szYcT4z9ZrJPXnaC5qUxkKC7o3o5t3wKLHcDCJqgAj",
  "key30": "4vXdBS6wQrsEz5tkCXZ7ezxd3uZXz2S42UcVtmaB9WVUNHnvNdCVJ2NUE4uoT5boFBaYkjBwiCvbvDVXvPL67U59",
  "key31": "2vBNwhYvwpdgZ2Ct9yGGyL6HmqRk8QYQpDzQbPKc1BbAQzSrfdg2MfULryRqXCVTHLBALsYSmB8APkL2pEuaDFxR",
  "key32": "4W8AgCm6W66Mb24LA1teAncMWeutdaYkTgpfj8nyYZ965AYDqpMChN5ciykQwMUnqBMDy5RQDQey57apgx8rYoDH",
  "key33": "4hWQuyjW9iuRMMbjCw4GAGERcMM3wVs58GVFKp84Xvkberr6t8E8Lb3rwzspSyaNod9YLuDV3Bt8LMyooCRBjZjA",
  "key34": "4fTc1UFnF7DybLkBap67JPb7obYBVXaPVC1xvL7nuYKFRzoUxudfsKymCTkrCByTA23evhricY28kUCScSFHVyGL"
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
