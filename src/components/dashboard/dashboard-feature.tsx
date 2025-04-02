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
    "5SCrNYZcwxvu9cGkspWLnpmMrb2ubLsUDcQafm7Yr62DjynZ7zMzDGgLrUmp4LYUxbDznGcsJVbu7S3MkndBMQvq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bFTm2WaKjrHqqY4pVzTzrv9Cft4QgK9fv5RNLk6LkP7tZwTkbvdG1SaUeUCfAd4irvJex3VHNn8MaTMozVheyX5",
  "key1": "LwVfNuPzGJWg78hHj1aKx1YGLtjdtrUBavpYUWA8NiziYQPoCqipgWcq5V5y3SeFFY9UmwmAQ8YWTARr88DdFum",
  "key2": "hFt8n8oRWVdYy4spJ9jHZxP6jjW5qkJchAYLdiCARQ3wCTAsWpAX6sBZFz7M1ZmaFLFU5584AysAoCm3TKGg5mW",
  "key3": "5Tuqcx8fnJWw4pSXJzPyBAyMaxaiiUym4yKHjBm4CJXdN9DoZP7wpDsEd82XVSrRzviLJST1kJgHJjX7sE3dE3GE",
  "key4": "4FTtEH4ryeKwhvKXDkddGvMQ7nddJAee1YzNCt7Qhp4RpdMg2X7CLqn4ykDiZMr5psg59FB21cFRyTNav4soGKVd",
  "key5": "1EpTrAymmKtFP2aL3Xg3sXR95vuN7TNUFPKFgWfgmCTzZfL9cXbf9BnQ3aPC8CZU1Ws7ZjwiAGR29srCwYZtPFy",
  "key6": "TuoL5snr9WNDf1Nc7bhk8BnhrH7vBcZL83jeqJwV3Ju1zt7f6D8awBxSwrLXmPKtwysztsZZ1wSCSxXTuk5261R",
  "key7": "2sirUXd3HtcF4eMr8kvaGKR5wwg2KgWSKdyc5UjRJuSSoYpZd3PPU3zTgJmKMKxcoA4FTTRTK9H2w3h1b6brYdxd",
  "key8": "4R9bEZcDpZPpvvsYT3b7BAEYJSokz74GRC49qtVViSvCViBwX6VAdSh9LAfBLs36CNjRMBNDArjLaXBxqVyGHGkw",
  "key9": "6kKiH74f7HsyjkzQD4AbtmE1VfgtjSjABuRfjqfAkwJCCUxpsxwMvmLJVcSAAfvjyzXYWE219h4avV6Pv4rdY1U",
  "key10": "a9SCSyj1hzJNFWsHFhQr3stKENRu3zwPv5RvxAYijNemEsjqYshtWWiNyKXrbTb2ZnxnvMkUftxzxXCXY2z25ox",
  "key11": "3UYJhUAqf87paY3khfzFihKEdFAwiubUHCN8vUPS7hNXUYSeo1fuQdVVtLA71nf1bdAYEGwEZTRXucDG6v88Q9jn",
  "key12": "2PG7Vpvj5wJTaXKuXxVDHpxku4z8tpigBacstt7dyxAwQfkqvzgu12Hyr9tjoky21WVCapj5njk5BT5Aky2Bf6MP",
  "key13": "47RaL6DYSF7r5UTTrvai4C2Qawf9HKTUeYJX6T93nETdf7AfLtTE9KVvFLsHJqWCFNcio4b36Sycaz5Q7q7AF7Gq",
  "key14": "tDvxVM4qoqidq5YxU1oNWjuguhkLeYfkTq88dxPfqsoiaVJujCatwSyCDscEGZ4eDZdSyHDUCJ4c9Bog3Bur1jG",
  "key15": "216CD9wALCPEjvJdZV7U63ybH2GCnSJfUc3927AWKahVZgD8qC7ncAxUiRWXn7nvkDnJonrWJKedETHjBTVACifq",
  "key16": "4gvVZaKEb6gFjkeKaRP4Mhg6gCSzWoC36Yo4vQLpyKJ5WkNdGe38UrXvdPTUQ1VdjVCfchje7QD5y7ATf5teJ4vs",
  "key17": "3BF6FSCsJk96x65ZFbRcR9pHGhfwuNzfs1dHpKxXF7CkRi1aVSKMWn8Q6TNQGeDcroKQ9bnbBs3YDCriduvcZLjZ",
  "key18": "5YTz6KBz2kSXFywrqi1zgp73oCVZjnxwkmPDtvKsqzKE9Dk4tZ7NFtHnSLuFnTaf1v9AiJ2thJGN5iePBcSxcKUu",
  "key19": "5Pjs8eE3egQbgvByGFKEDGxfG1DmkGQgMXWvxxHyiVwzdnhbHXAXUkuR9ECf3tbC6oB9XNoVSiGjZec3VAEsWXUY",
  "key20": "4dtaHdpEety1aScMPhu51LgTj1NFSnGjn6LAmybU9yDgRV4KxQYgQdTUzFsGijvZBVgPqFoFQgwsdSEH4PywiMaY",
  "key21": "3DgAh6pKoTfH5QxQFhQ7bLNi84GsAtfBbbXkwAs78jxg7sxQ9rdF6HYeKa5YVnYdyCQAukC1mj5MdW3byTgJCDci",
  "key22": "5czohsfmNoZzZr1fa1EBZ7aiPUik2cAWjwKs7wzpJgtJ6BeYLCaPmpNwDzTCoXswwMrUkmjpXD28px9k5keDScAT",
  "key23": "2G2VBMfYk4JBKZqneAfLhFKxuNwGWau8RG7KnTuWkenXA2wQ3thzwYQJt8kUgUUUfXEyPuqoyM2TJNEnLGiKbyp9",
  "key24": "GsXFdNMYbnA2rtiYkmToVVZKXwYx6Vvz7sHH99tCwiZxUv9KB8PicJHCGzsLwsCSEfyscWXeKGivLH3ykKyYWr7",
  "key25": "2Jfw6PZU6YzQ5rDYtiuS6gE351SmG4ujZ1mf23gKXBQrnzNs8tton1L6ixkPwo2TLrXrrBP9Ef7cJFfF6uw2rKyj",
  "key26": "26iLBxzVQe5iztos5VKhok1CW5CPWanzDYNTDwJBy3Dw2XXbTKMgTYvoqH8DzSP3ZNb9nNThqZdEdjdWVZXgVnZG",
  "key27": "3XnAMUFtbUW4aYiCJAkkfhW4zExPEbGXrvM5dcm5R9aTmv9BvtFif5jEZDKsSDm8UchW3Si9NRKhaFSMmQ6cAePS",
  "key28": "5AZWii8tBGEeDrqjhus1vASD1m3Mr8d2RT1fgzuo4BrNXVDaeoAArvUWc6iVRmr29LNJd1W1oGxuokFEDxjLawAo",
  "key29": "ZLpeqaYeUCSKnQQdWPH7J4nZ1cbF284YQzofpgrbTjNvsCf2x4n4VCdNh6dDDuzQnC2NtAYkxfoZ4XXTpEu538h",
  "key30": "5paSd9VbLBgDMdWBXJNR3BXPATmUrEXkxWEvMxLM66amssDQ5AqijBHEF2Gan9K5vFbwUrsHZtMCuCPwZRbmkzxJ",
  "key31": "53yQTW9ZRATeuBNUwtMdVDRW8q4f4nZQokqMkD3nSLtm3jCGTpoTxYtgAojARQ16FE8Ub5w7Q5WU1iauVemaESG4",
  "key32": "5pHi3D7oQaeo44nVeKPgBe9Rpkw9WTxUaKpdBPHX8hVY15t86xjNogyHB7Yd7NZL3YfvjgXtBgAwksGDKdRQ6E2Q",
  "key33": "UXTSkybJpCh7qxJUxQQMW44nXoK2wtvfus6uTZD2vcUhKKsnFFobBkANGzTxHHqk1bwrbXQPze1uUHssvayGGiK",
  "key34": "9GEyBbatEQ6ej3qzfrT7mQpQKc7YSXrZtvUiW5ZxzYBkESEyof482Ec9UTCWaLpXaJCuyGkSnVqgjn3wH662Unn",
  "key35": "5Yth12xTjQqKGgv5ouL7TvK9KtUXRQCCHp5AsEsRL5AdB6E1cTwePNMsHStKsT2Kx3UqFREgPnDRAkED3D8nk3aB",
  "key36": "D9Znpd3kfFxjQz5gS9FHnkoJeNCLCGF5rmv2BDzXpyePUGuY1LLJKPnoM8cDw1Ts6iQCBBQi1bawzbG6Sz3vEBG",
  "key37": "3RoTYD8SuadMffJxuESmx4xJNa7Fv5rEADAkrnS4QUzMAqp57UaXoHKbYo1oPcDGzXJLdMwitvRtGKjJf6yNfgkp",
  "key38": "5xcJQqSKD8y9DVMJSESFVRk5x3GdsP2Strcz1c4Kd2YLnQTM4v16srtDtPqg72cdpUbxnKAD7X6o3Yb1WU5xsRWs",
  "key39": "63TcmCP1FSQVgKokMp2Fc2CHbFC8ka1rsEso2JmqCEvYiR6GRkVFuWmZjY9Wm8SSDVkfZLCaZqi1655PxwfYdMQx",
  "key40": "3cpYn5vX3NuoxU8zVnBhFVZgRhCTWuCAVsiMuePBG1yd9ng5RhXuqkE5nrusHbiiE4iq1p59h8LzoWKuDHjsA6LV",
  "key41": "4uhcNeqXpCWdNGxuqgUHuQ8d4CpTYv48eDFEgecWwHYBY7pCbSLdeoMfecPeD12tUoPcUuiuVCkSsDZ4iP4VRRt4",
  "key42": "2nzXZMkwX8BhkE9aerkKYWjGugKskrrdjGysNvRx3CCMj4461LM6fCHZdyhxQ3MuoSJbxCvGPtVyntTzDjPcZHeC",
  "key43": "BZcxiCTnHGKgk4J4ocyoNNt5MY7SRdRBWwKXniLTU36PSmJAQFcA8KYGcG4oiVxFt2vTLUw69UQx2ms18WFk7cm",
  "key44": "2Ez6fZ254GJg9jtZ9trGoqmemYiYyHhmK85sfxGAReeRjmmp9jMbnU1ywQBpWwF1Psav3ND2FyYVPXEnLQxHgrZ9",
  "key45": "4U3Ffta9HjLn3ZbNrmkj3TYqH8spe7QSshtkRFcm28Go3hCecXF5BrirpRwdxUqzBVczrwz577qmZfKFFpQhecHc",
  "key46": "4oGimwibDz1AKkxm6L8FytwshFXN3qcPCy5zDYCguUL45MFroR59Ko7pKLamTQwsBCxcDmnRcvF5mQDmBXnD4aVW"
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
