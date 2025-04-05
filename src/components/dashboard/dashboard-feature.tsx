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
    "557P1fkBDQKAyWDrZsAAXNhE6U3aF9wBvQ9fkjKJES4DMVkKamHy2wJmJmt1sAQeXYy4vJ96MzWPQtBeYMshuZ8B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3skuXg8WT52hwL9k6KpLJz4EnD4ZSHabHq4DwvCchjo61w4yg7EXUGE8fLXDABfskjprtfYwR5BhJZ6CBHTd7TcY",
  "key1": "4Kgw2XCnrAjZcDrhjwJCCnVvbtiu69atqDHnMJGrJrA1UNfeJmnrPRLrLnNXXFW8ktSuJCUFsEzDzCGRqtAbz22x",
  "key2": "2Cxe8ibWDfG9yHXwvyLZwRWtF3SeDTvrPwY1Bq6VY71DFAcwKVFon1CBMtPUYxBCYJjpxHNPKZLhArhPoYB1YdwS",
  "key3": "4E832tzCY9MsN18ddLMGsrRmYULgQVccP2EijoHKWxFUFjNFgnR1c1iTt7JGxjxoPziFy8nhoAZKGn7g4nCRSiTj",
  "key4": "4iX7tas4LdbxnaRo9oAtZNpzN6Z27SkHeVLFb8TqZqpAdLe1VA47EFZjAFaQHtqoZ2qoMdjQhfF99eUutXgeeoiK",
  "key5": "3HLpWT75xfuhqdGNJr2tzmD5x1DcZpE7xbNQUtTKXXFFLyEehDNZ5khuVPzmQRUe4GMpEN4wJLgVGm1SBpB94AZF",
  "key6": "3crq3zakPTG9dhcbiqYzMeXMjsvTm1FjKyVF55AEDJYgexeBf19sRxH5UbkV883DHs1BX4RWkaixcjwZDhV2Dip5",
  "key7": "B2JPGQcuBaKnTAn55CZgufNM3kGQoqpDa6S41Pc2W34Uy9PmSGx8Wu2spnQukmb77t2neK7YFfcBhFTW2KxPKuR",
  "key8": "3awvYgdGFZuuKy2oX6sRqWsmWEkDSiJFydNJg84ZrUHuU5b6rySratve74sZqhH9JQHd5TkP3FNgRniSa1g3wAXV",
  "key9": "LtyZkpWZEWnq5D9jmFHQBZms4nEHPTafCEn6PyFPFfHANadcGSPGLDa2HSFXNXfjuVPiSo3atYf9XAoXo9zyuWc",
  "key10": "2qRg7QMqbYLTk7f6fJnc6WfLpToNQHHJHmMmUa6dEPkqvkR8nuoXgXbLwQaGC2STXTQMzLHoCKAiKikeRMsNaimT",
  "key11": "4U7SmFTGmJnpAjrW1UB2mTLgCXoDDiayaAH3RsBQZ6KNJUeK6K4WxAFG4YuQv1NY1oGK2ujxRqmoCLrSQRx5GX54",
  "key12": "2Jo9jmV4KbL6q5yMGRVrtXvJGbtPGiCDRdSifqgfYKpRcfqdYT3u6YpwFYDqMKDo6yW18QmG9Ni63JTpTXSpPpAH",
  "key13": "4kf99bVmeFgt2kvw9FgoLDpSpkkhK62AmWHPgfuDJtRoLbA1nyihRwweS6obXLkGba8eTNZZVa7Pfypqo5ue1868",
  "key14": "TFASPP9bqu8c3Yx1enTm18bbTPF5RLQuw4he4zqGWW6aDyrDWa4XSybK1SyTWkwDsX5HDmWcP93bVC5g9AJVNu2",
  "key15": "5zp2wtYnkEyG878CLPqjvsbRKC2LJDZ5aXt3hBVeoTmyvj4QXFvTBbPq4fwJ67299HkuksjfV8dTEG3Wzf8udnPf",
  "key16": "21Bzs3hgR6TBvFd1d2j6Yf663txnXtaQLXsXEB1zRtXMvBf8jkrhiyorNXnmHQjSYebSbejrahFb6Tbg46d86sTq",
  "key17": "49bx7q8cjg5vMMX42KewtrQsuNuzWsVVAnZorb7YuRDjg1pBRPfLcy6v3zjcP6cPT3TGsM4sHfXUKhkkmQh5waPS",
  "key18": "4wZ9UrwpvXA6gd2St9NqEBy6sn5RvLMjv9o3W9ZPnHvzCxxWgDpc4wyFxpF6uQ28h2GvNT6c53PgMwAbQmS6Zir2",
  "key19": "2oqZ27wTryZeWbMudb2oc7uU94Jhp7AMtqVay7gf7V6nZ8srBTbcaU4ZfwuHxo6z64Ak4pxALWaVZb7kxKDNZ7jU",
  "key20": "jaNbSXbTkykLafHfz3MEQQ7E6XayHDcWz19EewzkmE2AASHp3LxiSE5ppLJN7Dt5pQvGHGLzioG5mqwuatVaijx",
  "key21": "3Q1oyP4ZqGbAnwgoUXWBsAmLvQWLKRkphGKtdhdgUG8KhUzBCzrrD9VgZs3knhWnEPEaGd8gfLcCpktTegPhoPsM",
  "key22": "3u9yoRH8y42uwFdQHYNdtifbGXuj4YkXcPLZByYxYMbQXXwUAz6LkJkxCSeKxvKjdH1tHXiVmmE7nZHZeLQQqx3x",
  "key23": "2Er56KDjVceCVsbsZHHGonHw4zm9Ugj4o4D4D14uxjkCu6ZFyJVA6wFa88Hj24y2vD96Zhhv4dwYgq14PHN92Bz3",
  "key24": "4egofjGW7jJ1rgU5KrkCueDsry94MeLKsSQyZshqZhBQ7uFAyVZWdR4vbT7EFtzTpFEqjtV9cL7j9RMNLERcX2Nc",
  "key25": "2czHNPYPBbf2jsuPwi9F3C34JggaP7cs4XwYwfsogaKfPg5YmfeyZR18USSWuzZL8dL4qSV16CjhtBwa5umenmzv",
  "key26": "3gPyoqzeV5pJjwFp5cfanWbsZm3jv2dKkmQEa3A3kwzzbLapgDFiL24HMAWwUYXj6scJJNKr9avQvsDdxrLCth39",
  "key27": "4us9cufL8a6vijEfNNFTSMP5cWTwbiBhJSdzpFcEPHbwCueELmiYsNTVV7ifDEjb2CxVE337G8am7u5n4enYB8Wy",
  "key28": "2GiYPvPo7QURa1JZDX2QUPJ8bykae7nNvvoq4HQ4dUCtEwHys9dcYGEpGE3QDxAApm79iE844PEzYd3CQh7cpksu",
  "key29": "4FMsSbw6PGPGyTRPkYvGfBFbgWwkfG7ULKuoNC2Kk4gmnhZprzwGjEHnLL4QQ6hd66ww2gbBGJ3By8XdKB7twDov",
  "key30": "NH1LVchFGvaRfptZeaWa4FbPZ33PFSZ2yjVC9vYWycHkmeQAfQTAYumon1rq57i4kgqKTAgZAgChQK9BQQQQtdE",
  "key31": "5wKewRW738pb2HRiQtXSfFisZoNWuzDsvVWQbgLtRhabVbKgaRzULbwBZ51QfrvkLrD96kBLDSWrnJXAW5tgbJcM",
  "key32": "5jJ1A5fhAWWu7RUV2Do747UZoLdk1ASXzKvTPoVgsg1pLimwQHvrsFW59TTcU9p7bbK9gHJRjnfThTGoq68ZNt2y",
  "key33": "5dvXR7xLRPmqepG9h1VDyxA28Heazfzs5suF44tp83TNEe1z8L1Xauw21fgqnxeizBma8t2xqhKi4Px5mc7S3vgQ",
  "key34": "3ZpuUuWN16trghCVTFBzDRxM5C8KBUiVjcgj6bZEvHFVxWrmwtJXkHuRCofVCVNQnVygp13ZzMgDGjjYzeWnae2b",
  "key35": "4ncVWh4f6Ev2WegzgKa8Zj6jrQuEy2GeAHxVvkeiyT6rQT3UFVnTpns2SgduE9WkvyMSZ7EMchZ9tz9xpeqettZN",
  "key36": "4gN5NWNPmh6FPzkjCS8ywR9Go9fYMqwEMX52EKQWrPh6d4scbCNjr1xPK2qwsbfVvXcXZpBpuBy98mZ6Bso3L8va",
  "key37": "36QctbsfrPoqPNnUhSJqfCBRaQVHb2X6DHmiP766UpnZtTShux2NyyiLavei28KC98naCCaUmutixYoY8aWekhAs",
  "key38": "375QirmGu4jqk95BTGY1L3mF36o2Kfq4D8wCEPJj7KRq1fZNcvN49pAPGAzzSnEGHQEV5oo2KSxTMZ8qiWNsQ6qz",
  "key39": "3ajQ7ChAwJMLevCi32fhG7vUXaheQyfQNwTDH3i1zVfNtUwYDxcqY6nxynRcrWaPcCcxNhB5wSSjyRXGimPivrzt",
  "key40": "3mckwMhU4ihRXGQb8SxyUscrhrWRUCspmzknA2jnrBRq2m8486DbC21gmgcMF15iijADrj4MmmuJ6Ltur3wUaYHd",
  "key41": "Uf49ap2su4m96t4ZD5tzKNowA4GizLfHpt9DZZPwtVAF4vr16WWtYVkoZokjWhzbCFmpp6YZMFYcYnCwDfoeGbX",
  "key42": "2WtqBmcqLJyf5fqwLRWZmoq8GJ5fRPgi2S5Tb2FGye2skDePADyU2Uiqu9oyJYgyX89ULzACGaXM6vKLqYYpG6aE",
  "key43": "2kzdNWSJg6RjkwAUwvDKuZ2edRG794eaXFdoK3oxgMzjEEsVkQRzaxD99G3YfkLiHusSgKjFdkgFiMnDfvmUPM72"
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
