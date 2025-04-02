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
    "2no3SNM8wVKaF65kixj9GdKcacffu7WXpNGKW1QPV9mKGgF4Eh1EqKEn1UpVP7FTmk4nmdhMET5TjC921YbnCSyV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FedFB4qZjDPkqKkyCT3bDvW7BWU6FouY5XSuZ2NXohcAqaz8nH6D8JfWTYK2uMkV2UWVpLhGDhYRVMfWaUKGFJG",
  "key1": "2JviqmB3avLRFXfD1LT8EcQGU8nF45yjQ7VW3b1WoHwM1P8qpb1vMcmtkAFgaNesKZ4fBmQBDUPj8PUqs4Kav71",
  "key2": "LCQsMYS8ZPm3megAdTQ3tdeBH59wrrW6nYq1VZ6Sirja7kEUKXM69FrLcp1jRVoCpVW3fQwLPyFngY2Zq8zGibZ",
  "key3": "5oNo9uXmSo91FdAmDhue1zZZLRZbqwgcQ1jPwW8C1x1uKjNGHCp23bmKg2Yq7tAps3oYXyzDH8fYH3WWRsTkzXB6",
  "key4": "2GdRW868bayxdz8VGpkLoKs96e9mQDc9XK9Hm4aomYFK5gk8NTqEYZ77jNLdhPqL7s13KyMKut788mT4YuMrbD26",
  "key5": "4LYxEpwdZ2XRBy6HTAF4qVTJD3h5PLMJKYVdaVrTsmfbwvvbndxJ5eSa9HRWYVLm3todXE6rTJai2Nsm5JC8Sz6P",
  "key6": "5ao4gZ51TKyxJnHndWx9rRB7oYFVdPnTVMkNHr8cTP2Yx2KE7nVpMGE17eG7tp7mrQGMPwiwuLoTT1G5ZDrdFZTn",
  "key7": "4c6LtZFo2FSvAzGVa4BjxqhbDbNZ7KHV9pfCtp58n4GubkoaJ7qQffAPVPCf6pjud2aqagxwNfAeDECj14hSqneA",
  "key8": "Ak8E5PJ3NV5RN3Q7SDPMJmpbdbb9kTkJMj4W6SzV1CVo5h2Bvf3Uj6KsXbTDskX8Ge58B9Zaqq3e3cWR94fYM8t",
  "key9": "4Axn9nNBgH3gAC7NU2778kWzzs7AtCBZMYadFm47bRQ8Br3xQXkRGSgoiJVtoict4kTqYFxqz2HjWvKmoAgnzV8L",
  "key10": "5o3jqXkLnCzwcc6Xmy5y8cc1z9evsPYjnHKbvSHVdTRLw8o7i4fYasi7je1A2QSwR2ms6jF8h14dfBzqHG8QAE7q",
  "key11": "374rAVGREevwwouHTwcww7B9xQwY8SePSUu5xyv2YeKqCxTjfvpMHXb5E2TtqjaL3rKDUhon8ZeMncaqJ2vpRH2a",
  "key12": "2LbW7rxGBLdwDknTBuW8Nn5Euad6qck2c6wiZWrYuaUTu77V2zGPrt7q397N3My5KxyoJSdQGDosXW39QtgJwmGi",
  "key13": "KqYehKbSvp8PBxSSYD7h9DS9R4EAhz7t7wgA78bPj8fL1S9rfMe1uaydyTaujHFDWJiXEtw1pnfxowRtWfFfXrR",
  "key14": "22pho3VE7sHW2zp7mcrSCmxHVmyS4rkjoWger6CuRcBnKsoLMzqZGFNaivoghBsuqHHG7B7peh4Gy3tdCey2JkMD",
  "key15": "q3yJ3ekeFE8FAWjvfAjAKvdiqfBieVyRs3MNRXyiLLo9BrbAWkBed46WhzAwmFxgo6Acozqfm2agyYTPrFVqa5T",
  "key16": "kxY2tEiKHMK2Qo25VsufRyYmQSYrWSLHZ9aXYzF8aGtkyZ5Nfc3m7CLrWpE9ZrRsYXpugjV2yn7bMWW94EWw9on",
  "key17": "3o7sS9Rws41xzbaHLNsgQSa8JCc5dJNmjrPJfcYZedrroTfTphH9oAejdAk72kon7DKHobKKZ8qnxajvhUH4ADQB",
  "key18": "SW9Dtkc12n56fiNK1kzQftAwq4wvCmohkteLPRbLbpLSjcx4FKQHsvA13D6x75PGGCnt19a1Wc5ZM3oEgP7z7Em",
  "key19": "33Stg5PxSjAXNV1sMJLeoG6GrSemUE29E1U53WFvQQKipXco5jCnoMN1QqcGsEQjwv7RGxMfbenwAGi3WW3o9eyi",
  "key20": "G6rJixZiXdNdnXEMpW4n3TBEDrLZXtAvXXVvQmdcKbbjZmurVKyErh7jkirhVcDZJkyuE23oGAFHjHXqoZp4ueh",
  "key21": "fR6AsyfMfbLJgw6zB4D6RdS111NjBZGvsrBBaxgULA1EfKLB9fxjKdPL9XjsodYVR5f1eMeXnbzhRZ4KE43UoV6",
  "key22": "254ULgPz3ho1yKqw2n89Hf4iWmbA7f9v2VqdCAFEqpTdDTKcQYcYCZtCwq9ivdZMCos8QSpt7TYmFxuz2VFXkhpS",
  "key23": "5eVB48dWzcyebCNCgN7DqFmNjx9pXfQFVLi7rv3ArhzwqsTAFLLT5BznHnvGG8Wa3jeBJ8hPHTGzmyvshQyK5VRL",
  "key24": "3p4xkZsNyieLGc6svx5tGj7tgXfoYehsLAPzp9uoPcbT9fhVH6P5Dwfojbutp5S6JTxMr5fZdnTWS52SZxUuDGXA",
  "key25": "5yBp69iaTAbnPP5FUwisddj4iAyXazoFSamwArTXk7gWiZy7JvjzNrczhTmLpnxLnPSvSYTUARSMU96PgVx7ce8E",
  "key26": "4b4BXjTcxvchjA2NwzS67hsho8wZjRYthVxRH1CenqBUa8NjSLNxAmiwxmdgwj8JEXzovySwED9YyQp3qyLEcr4T",
  "key27": "2jyBRG6dfSpV3QCsXnnYpeCh638PibxS3PwLfr4JE4v3L5R7BQWfhe3bDsujHFx1STtp8TSGM6bY1bMLrWqeTftw",
  "key28": "66YtyvEo9yRx7k7GYhJkVof8MXQVnixWiBrwQxDV2fJAopDKvSJcdhVtCyn2YpZLhFE1UhkhJeYaHBZ4XDFJsi9k",
  "key29": "4xuXJsC6y7bPCXZxP1AA1gX2teBNZrEMrn32yQuoCCf4uHKSyHyT39Wm3MtHQMmjshx1pWGriWxDdjxki35PuSJY",
  "key30": "5QuCbWW2hdLvJWnQFaEnLoHZcVfHu4amNVtUWoCh4mfHfa4TSKFJhi7jqSLbSz9MdxSFhKA322dok5A2YAYAuN8x",
  "key31": "5gSv6wNn5igouCCyEQevddhWTYpXtLtwDGRquc4aHLu2wHgbsTLgiXSkkt6bPbuCjcpcm1b7oUmyKceQZWukJ6Qx",
  "key32": "2NKvepMZGMqiHWhDgAk8hbQkBTzELRRMZywHmhkfAMaYFUb1V5wGiZSYFbCgCDaoMvWHvGj82EWotabutwHdZdBb",
  "key33": "2aQzPupbxoiLvCDF69F3W8FaNpQf8zFU7cjk5SvzgCCz7K4JoF4hfg8vaC1Uc6a4iWi9HTknAqWv6xF8TCvUNK6i",
  "key34": "3c1hygcjcDbcQETuNrtw9pPUXcnuPupYAyVJWYB3HPZeS5AaHBQDvMkmNbjdGiR7G3kgTzpYG5g9qWE9b2froSDK",
  "key35": "4jWHY6AsQx5jA3oADy5T6DYfHfnEu1mpC7Vg2fqSzSza7kfFRq8h4HcUgtucBR6oC5YScu2v6Da6odvBYnjU7mR4",
  "key36": "3TT1he8vFUxMJwzGasf8xAYU8wQGYLhnhT7JLK1Dn92CR6mb6nUg5JDNVPf8gEhKqmDXqe5HaL5csp3w5uMpxpbk",
  "key37": "2VDy4z8mVzNqnDzr8Tn8q17NuuFCoRHE12X8YqiyJq5i194Dwa8Tc13iDUSXdvwpJKJsnwwqdR7XS6tSXveC2ZCo",
  "key38": "3qmzyMrw1BYxDUU9STfpHxKu8shymYErGpxDovypCXvL9rMKk64f6A2FYhXF3TUKySA7G2tXZGV7uPBihPJPfGzm",
  "key39": "2eWSJrCbRMY5GmmNihWEW1jS6uoNRj4mQ2HswWHvpfxKVgA8pCtuHbGBMCmv14q6Vi1hWpZ4SFci6RxcfZfgkPg1",
  "key40": "5ezNdjrkkThX7V21B7XdCHAXjcnFHjbBGNLSechzcdPCcnbNwvFS3XsRQBR9YjvezU2ehjXTYzLxAzzBg4uv7ngy",
  "key41": "498LazTV7JAH8imWdtEwJoiashhqGg3t2KkzKR6hxLYeQU91EViyzs1SWQyQfXyYZf7zrW9BRC1g7mPnk5Jbbwn8"
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
