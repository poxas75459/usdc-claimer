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
    "mS5ANCDkqATApCyVLbJvCmrZnkyatx6DmZe5B7Z6Eh3ChzpUhaXfryYqzzBzkm6RzYRgtBW36EKz7iGD9GyhwdJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KvFJhfnsXoYxgp8goMRPUmJva5ymkMdBfUzJpHBPazuR5n5DJ7syPWZWu39w9MfgkA5bywjZy6PZnqrfunUmTE4",
  "key1": "42w6R8UCRsiZLDxptoWqk5PmrQbCS8d1ZxRbLjmc9d67PTUTFvaAPzF9DG5L2pTr8fD8DTwmvHLrHiyrZ8FUasWv",
  "key2": "675NfE8f9D6PWQbnSxg7XVHKxia9aTtrVkuQD8hwWw8qVZPFY2vYHnKhPF2sN9QVFbxBG8NKJ4FvHh51wnF5VG3H",
  "key3": "3HXfjskAce4MYFDP8PRyhnNydksYe7ENfHq6Kt6kU4fwJWPA3vnk4RxdMgYnDT1DJ45GzkQK6BLQjVw17iq1XWVE",
  "key4": "2NhbWN9pjcMA6SoisLRhqw1u3sBgxNqRDcDpYHKY3LJApgLo1GcP9HEBFPH4TJGe6hc8NoacBvaY2QyYmjuPT5kW",
  "key5": "3KBzMsJZ2Dur27SNfgK4J4LtCjvtFBZ34Rj44U2M6xzm5vr6NsCsfEe35SQTooEDp1wze3Cpbxdt1y4xGwm62zvU",
  "key6": "dW7pCrxHCe5JuTnka5VYM9qm7E85pRPtBhmT2PxWh3ugtCDa4HdCJqGBQRKc5nbFxRXPf5w7Q9M1uLyXMzCBFDu",
  "key7": "3TsGg5Vm36CA6okVZhCFZQQpUiaLW3pZ1JoscZhSZZWm52guXYtv6Kkxorbx69PRdC845mx9Gb4rnBEJCPRS5Fw7",
  "key8": "381e1gVMGTSnLJ3RGuzKrd8MmTwgB6LrCvZ6PpAUQS6RCySjF6ubpaAH4yvQUMkys8yAg8MyAHNrqMxx2C7j49h6",
  "key9": "22v9M7Cm7unwiH7qFesmpFpcLzkWuLpFUdP591rwLojYNUvjg3nTKgWkuYm2t113ehoTC8WjXdNamijRazVPvUfE",
  "key10": "52EnEgFNTQZ8NEhRVfXiVfqqWxxF97AutH9yG6K4etSEPCi27EGT25S5Zv8aesohPMoRPGkUksBExn4LZqtE8z3U",
  "key11": "Lp5Hz5mBFRnCt5RwocdzeJHz7BZhcnAnHk7ThTt3JAt6vcSCNSuGkLGDGMULALcR2JdRHb9xLkwFxNRoqwmBUE9",
  "key12": "dmbVFYvCvw6fh1jVTo62GPn9Bd8HMUC95bn5wZm1ixAjzSrtz5v7JfeXcXGZoaYrqEhkX2rnDu88JSfrHMV1nZY",
  "key13": "4BoNzMSEWeuFKMQ3crs5UbHqoeKrSy3gZLn6vyZSg8L2oBqBq9v4BrMeAKvhkCm8CrmbNicLhETtqEve1gHSL96u",
  "key14": "AmcXhNFTz82SAGD26MpH9Lioub7AnJVSqFYoQDKzntVFbGAcpv91Js6gHRFMr1GYiA7ZCWcvinGqo8mZ55EFyFa",
  "key15": "5T52ijupyZuavj3iGWr15QvkkFmvEYxnqZDzjkEVrshAeoQiUQ4Ejy8HBcYB2Y9zDmEwMv9rAPg1NuSiXc685TAy",
  "key16": "5SFi974BaKJxNg5kfyQCoBFAsAPEfr3S7Xw8349mygukVCrAaMzovTrpbqU7UDPyo9dtusEq6v9wXBZSD4WKfkNR",
  "key17": "3nCLC3w2WrYm4CoAZiSpNpvy97q6ZYHdjqQEbwkAhzDp8Cq5AzPgntQ1UWXmZVDbBVA7NC4TqZGWbgLuB8bFDQcH",
  "key18": "5TjiEK5CAyZAj5WQLhmkg8ybKr3EuaPPJyWvnamKZE1sHEUSSTWj3QwdRhJmHTUEMzRQ54j3fHpLV8yXFJTjrapZ",
  "key19": "2Ek7phak9fKvm1mHP6VKySZ3vJ3Wo3EGg3oNniFeRXLFcfSyJbKZ6jBwMn4FwGwcEraimsUPnwsLyaUAogrf3vBv",
  "key20": "2DLunY1M8Wdfta4Lk3bHnTmFVKyr2oYPmyhePMYhxAcvY4xqQe9NjoFpNqRNEFWtefgwA1xe69bbFPvYFRQuxQcQ",
  "key21": "65juo8aPbachy62cDx146PLBgAWEAMCM7zRrMWCzcEcb6F7vSRLwjkUBmqnqZxGR939fMZimzmxL3mC9hLwt826D",
  "key22": "3ubtPehNpHcsT5EvEpMUnocaqRGu5aJ33Pp286M19KsMWNpo8savEsCGWhtUqJpmLFaXH5NdCeLJiAWf89XeXUoy",
  "key23": "UgtY2V5EYudyf3n7CHnnuXko434GHM4SCZmGr5ggsK19S2UFj2jZnV7ugZMEAkzwRAhtAFwgdZ8M1anULeLjQjM",
  "key24": "5bLVJsDqhuZ6xzbnoS3hxnBsRQgKfhzP56EuV9YLKTDyRYvKWvrDwAZDWu6qGjCBgMymeq2wj11ipVzwHyXWKGqe",
  "key25": "5ucwWfhUso3cS2UgpjibS7gp7JdZv6Y58VwdzvPhxKirAMR12BuCqftwNcwePmALgAaFgveiVzKsMdyiYg1VG7Z5",
  "key26": "4PWCwuEFTnXgYfqtePgWa5WfYD5io98CPfbRCJruFh1F4TyxS7rSnKEQ1YccBA8HZHFqBN3zFRmecAFJo8PyoPrj",
  "key27": "VLYvfj4AiwXuzNbUgbZ2jvsS2cGYWyyB2WFXKp9EBY3uAzAQeSYaMkf3gyscAmbGWQcq3o4Jr4Kt7sAycYomqu6",
  "key28": "5yCdjGsug6UNoQJZJ4CiEvRfxKTgTHEQgGtffLR97hW6sdRXDvbRrCyasSm7t7MokmBbYzFpjNBKBycnEax8My5d",
  "key29": "2NFJa1EkcGyrt1yeksT7JboJQnGTSWwQLYQPcWzBApMhpK4SwUeG5A2AyKBe7s39WCcnXUjJsXyBTfBYzh6ahvvX",
  "key30": "4LLsmdGn7pfbhyk2UWu7kFQQpVnKE3jwTJzyV5bPMqXn6fZbY6Z8FNYcXdJ8VBKhMv12fu5AXgybsfjN4TVo5SYj",
  "key31": "2DpuSsPceHCDVRhvuycFU3RwAyNCd8i1K9QBKzeFSgWnQQx1EACVPv3crwgJHn98qMJPTzgG1RUS8kqbnQ4enZev",
  "key32": "2wbxSy5PRYcV1P9SJcuPbssuNCCN6xounGQURi9SNrcpHwTHRJXVwXQ1xZWExXTG6SdzfVDGcX6DD1jfxMohoA52",
  "key33": "2LNdVbLxmb3LXMAEEpsnZfDhQEUMNRdu52CBWWmXd7Bs2RT9XLWrfYynzNtvvDBCKAksFixHBQuZdnZVB6TR9D2c",
  "key34": "3AnZ4NwdosdvEkCXUwxZG5KDXA5TTww5QASdNRJ8pj9TPXo7AxMtFY6RNnHBmzZd3ZTkA9qNNP5wtSoEXS4pxqJU",
  "key35": "YXZqnbsDGsTeEg5AxsNgmCVYHVpCQB2jFJWbSnwyudoKFndabjg8nZtUnjUcDqb4QRxsMpv4VdcDb4XUA85p8km",
  "key36": "PkytgqpzoPrHeyChAWLkL7aztg8zJhC3ZWNVnUPGzLMUQEhqMGyFdumdNiziLCUV8aPPX7euy3t1TkRms9FiMH6",
  "key37": "5287k7zHd5Xn5RsyumueULBpinuQNcS197iDVJwSLU2yHSKBBkpMArTJG39k6XysgBXsKBXruZQeLDiwh8PCY6Wt",
  "key38": "8z4VYP7fKB7NBwBoExDGmsfPFmyc4CeuZfcWDVHRJdwm5AtZwh66P3gParPVQwZrWswjw7jBmV5mUWafzBt6VeN",
  "key39": "5h5wZ6kWPpStbRPZiSrA9BcyVyteqDrvGkxNTW47mf1bwDLhQgXLjUz3F76vAwYri5GapTfQ84nTc34LYBNNNRWH",
  "key40": "4KtNZs5pdJ96iKNMWxPE9rXSih4U72qprCLUxwrKdaURX2tyabp6V5kf5AUZP8qZQT64T772g9kPzQ4ie6D2Pcdi",
  "key41": "3pGnH9sYvxZ4VrLWeiXd7fpieZaJtxnHjJkeF7xxF6gbkXKsbD9XyEumqZF33epucasFGn4fmczGnGAEfqsdDov2",
  "key42": "2AgXdtJsTLe9wSojzKayNUtha14fuE3M1EzYb8MuayW4HgBoqfJoxgeAtu4ZH34iS1FQ7em5anzC4VdxR2RNRacp",
  "key43": "4q5tZCZPVXmLX8V6QTzo6wHpv9GSwRhHCqpz1QqknxkHuCdSMwRPUh3QNCLUg9brsCCgoUaGYuPkCEqRkXgGnKxX",
  "key44": "5xW4nhU5ZMvxbPHe1FpJaSWNpPdm1ABRkqu9wwrbEEq3TLp1Zju6P1N3ik3aFwiE8fPXUQrTzS4tAGEZXt5MRR9M",
  "key45": "3F4DwwmGEVdf7dUWUXE5Y24qSYDwt14wxJX1ePbjpjFacqbmwuKsnc2A8vP4D9N6JTLXXe6S5pfNR3jmUDaj2noW",
  "key46": "YYG5xQHSwtey2wQe3A62EEQ2X5vwz5yQwJ876dQf6bjo9ZB3GcDFW8viLwtiQE65oid3exYQYm7RYBF2qWyNh6z",
  "key47": "adGB9jCmN7G6oGghj1XSYcsYEUymmjncgobpNh2DSQ7gLFWEEjkSv9WXH6ocGQRpJetdNYJznGQCYoiLvrsdZND",
  "key48": "4UYG4gA5gp17VU7NMXJnkQJ9W47LeP9QQZ7EbZY3KmZT32WV6egWjJTGDLkQUKV9t3VyV3mDgR9Mkey5nVCM9d3U",
  "key49": "51buLmC3u9PDytAP1rVcWXkr21NDXpBmosRGuWo4QAdzvavNb9k2dT48k7jZ3Vo61TYgdzFqki1c4NBEzwk7eA3r"
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
