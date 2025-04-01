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
    "5tQeQCksTBNteeRZnk2tNLSUqarkB69k84BiVZhikEka4wdnHcjrzSngZ9xS9XAWPLC8YfULeVsstKS7B7F3iJSh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hikk4RDfXT2LR9JdjJcJPeQQ1C2Sn8jcno8hEkTBaM3SUNLSSASwkxYo8hxHxkJFDzUDgACjrVYppA9VhsKipZF",
  "key1": "5uT91z2221HzbApXk5XKf6PUogwPKsKiUhJE1GYeqpQ6yiE5H1TQfYb3ietZEXLL47sM3VYD8QJkdKnixUkzrecg",
  "key2": "4Do4bsAoV9W21zgdnwDyQ3YynBycBdRKVNZ72ESEb4cVT3Na2VPAaRcMZwSuh2GMwuSaiKwv8wn5MB2JPemh4Cpz",
  "key3": "3J2P5BfiorEnbNqkb6wADF3wBJC6UCnYCAHQ6cnEe32XggjrwvTBrRWt9ANRNZrmWdbcHkUtErwY64b1qsU6YCfR",
  "key4": "4waXye8yKAN98Fnea2fqMkGJgadnWVUnnf4NFzrqk9mKV5XdMBc7KWQT4eVVz254j9vkzmBHr54H79LRdDrnSFfB",
  "key5": "4Tu38fufxWJ4GMXFnENG4SPEVNK1xiqWWzmb54EtUqFvpak4Emqs51qvWGNVwF6mZXQ3Lxaw6ys311CVNGbc6yNn",
  "key6": "4oevFMNTn5CzaGoziaEKaHvvmZJdoiTzD2DSsAVJeKHZ4FCqFCyUg9mjrxs9BeLyad7738ubvr4gCzi1JaP6FYMt",
  "key7": "5KdPNS7Tu1DYpwAXQYi3SHsdKKB8M5qHAJUDtq2wkhEcUFW3HC9xGehWA4p63WuHzwh45wNfHhh7BAHzS5jJ6u3B",
  "key8": "3QwXZAXaEUGWNvL8gB9immFxSjCSgmeYyhMeYo3JVmTtUtrvsoShpuueFszZwq7ywjcXKFzE2h3TJ4BYWXMKKjDY",
  "key9": "2ZD2YAPAukQojdM1pMjgDAVYvvmcDPvY3uc6KYbaYvquccFYxZRnVC9LwQQBVYG8huNi5HunjvyaWFs9FgE9nKrH",
  "key10": "58mocG3F8Y7pHvTKqGz6waeL4pZGx4FBX1AsyhrCmiSUJoqZRZrZZT7T1DFSQ6m48hpoTb2tJp2JxBCehYL6CrVT",
  "key11": "2M73GDA749BuWbkDsARML5TFZkWC8A7pPyBCJoH7ftSNZp4Evoo6i5yvBBfHLgbPzhimZhFoe9aYYaSyfALfzwGC",
  "key12": "jytMw8MesNTnF9Sd2KHyTg7ETnqN8Li7bEgWWUYx8wRpiVKHHRZL339W8jhDgPHpfSiwSDqoFqeNNAtUnEUGSGj",
  "key13": "2AtCqDBb7L54aUXA38zKW4vscMcFrKam6t7LXLFhv6q6w2KdsgvaTWSrNkpRgNh6uVTafQ9bmxQeeL36nLSzBDKS",
  "key14": "5Ly7s8Cg1WqKi1dQCt3Pyx9x4dMDZQwubNSHMGQA2npY6XETBoWh3cgykTnTFPKKPxNe96LxhrTDaFxUhv91vUGT",
  "key15": "34XNS5M3vT6KG9HBGE81ZTQx65w4wqScQqZ81WuBMadWLob3Yi75XHhj9RZDeArernx8k4MGZxpGKK6bJLDbAhc8",
  "key16": "28jo66tuT38zWex5KrLsV1nw4Eu2YteegT1HDUPMTn4bEQoMo5PxscuzThUomuExPBXLyHXWvdA5usFzC3AWUYqG",
  "key17": "2DscwkHtj7cCBp98jutTFxyvREgJ5GmxvGXz9jFoJkQYeMk3WGUQA9XKP3fRvQxxf4vPZvbrbiBWQCipfFeEsUHP",
  "key18": "5SLqjTjZqiWDaBQ9SqyjKx8abcnd7M8AYdcBUhmDpX17X1FTSJeAAXd41JqBc2KQrzqtyMEwNBrsBPi1eZcQubf4",
  "key19": "2hWY9pWeFKGeMNtZJMgU5mWFRG4zuQBkiCu575RApXZ5frFccNPbmN5RotXaoEN3Rn8ZEeLkcLWZ1TBRNXTUaMmL",
  "key20": "ShNB2hBuTUH5vjbyj8829uKf3xUgyz1y7j2Hdrchx1db7ZPzS3rH1V87ajtPj1CpbLKXp1wMVHNtDTG6BXe3gHS",
  "key21": "AhHi5moq5MPjK9Rsdj4jEUdDv6KGR37sjdnWJfyZfsN1EwSZLhCehigZh28bNJAfiPjeeZWG3Zg2qgNwAW4og98",
  "key22": "5PgGbb6LsmPkbkn73K8r9EJxHaSB2ZfuQfPDabvg1RiMiUtBhojd4asqa9nNcjg5BFJHTPWazGDZy1q6K2awE5Td",
  "key23": "3drxwf7tg2EDr31Kr7tTsw6ACi4RbXjo8YBpmVMtCpbxFFG5PcwTBKWFCvYbg9LCa6eZET98QtBYS2kpib3nEj4K",
  "key24": "32JzJ5Tt3VwLq5Yey38KLG5p7wKAYZodqBP9b3oZeV3iaT4q6xU52J5m4Nk6iAdiQHN1p1PASYN26NWzprfwXtUa",
  "key25": "2BjJhkxT3bsramLQddoQgxzsdusykPc72aGXcgAQX3ehzG8cKZtJtZVq9e3RW5AMq9NPTiwvWWx3BhtMrwruYt88",
  "key26": "3s6GNp2oUrBoCxHYTwnfWpgUFaL1CKBCQR6sXqLLMisHFR3pFX9ALWNHh1s8dRYpkDm8c7CNXKnyQBzb2ytj5zE",
  "key27": "2dEJgrHLkvK1Ln6X5wC4k6PBECzoLFYuJTSkBUrWK9p26shgwtR76Y2GgeqwrvFhRXjqAjYiEVxLF4bEuseVsVD2",
  "key28": "58hLCb9UNxbFzWDF3mtpkU8XLhVeuRFkf9BBWpw8UC4xsNqa5WEJUa66MfL1zX7bYvsX2dabPxKeL189y8hy5hQQ",
  "key29": "2qspcKeGtEom47hMngndRsPmTbZfHE4PouuS6rQZUkpjc3HrnpF7rcZ1nLquzg6rP4enfoY7Ja5DKyzeirBeB8bs",
  "key30": "64N27ErApPKTNfVaqWttdD4ixT3ApWpE7kwQZ4vaM4TeQ4Et3nub7tT6rTdpX1BUwmtCy4t419SUBtNvDN3kSevp",
  "key31": "51UVPgsWCrbpBsFvXPuYGdSZqTiPHUXL1unLcj4iPgd9hc66SvQHBLE43Kzb1sdtYY1puQy7rNuLwtzDCpyLrgwD",
  "key32": "HaDaX71ndRaoc7QEMoZggUctKaP1uUx4PAQ7DQqbhTQbAr3TG32JkQ8PeoErrUmXikLMvanJHLTLqTeb9kHfvtN",
  "key33": "414xK7L1N5eYHwpgkREGeww71g4qK9tCcGzyhErtQDCbpNdriHzASRipmXxHbnR43pB4PCB6kSfAgFjQt3CatsdB",
  "key34": "2SNKjw834mS5VEQW8xJzVyP7JMdBp3T8UuRQxGWW2kyxezA6Lq1gu4aZH4jVoJHQPtz2dS2K9Rq8J38E2A4QcVzP",
  "key35": "4AWFUtG4wy7gVxnZNX7CzWCGSisacdpLXvo61HxB7jTs4kh3em2YxvKuwSw7CM53fVK4MbLqVgtEfuhauB3xRFZe",
  "key36": "wNH4r8w1pzBkLCorddcuDxxRCWg3jGpNKiDGJRMtknB53eTXbr5PtBmQxZCnFKt45uGgSvrCBg7HUfrdCaQctnN",
  "key37": "DcpVn3iaZQyQbe9iYyb7v67LBu7hLroNAfC57XDCriLzoYAmnoUtyZnLoeWTBQ3PSLGQ8oDCzyq8jnXKM5pCkDQ",
  "key38": "34jx2poDVE6JwekGJSqdGtpkBHkMoafEZ56QVMRNRgQ87DJFwU5KQNYwtH9QdSUzBBSJZTvkF4buLxm7i4SpHinY",
  "key39": "5pkSptECTSUEJqHwoGkCL36vEgPdDVi1aCSYuEpu2h13DHJVxHmYFTS6S7DZD9CmykpLNo9Roxw1e2fQpYafvDev",
  "key40": "HLVtDeu9QKQF7oYiqqprJVgn9xV85LQavGNW1BTRsP67yxJRp5KCZ9FLjTA9JmZq82bPXdBhv3SqQQncWBoYDrY",
  "key41": "3xudSU35HSPrkPHwin76p7jgPUUQ5264f5reCdj1cvTzX7g2bDaeVbnHRGBL3oLSHDxcMtrdzdU8WywtLmHFG7bM",
  "key42": "2kG3aoF2oeesUd4Df9p5fvszoVEp7KJ5z86dQSb3Qf26tSM6ksyqP8S1jpVgCCoGCLuTs4v3c3zfQq4QVRhE4YPF",
  "key43": "4J1xhpqhtHqczRQhMdyeoGXKkRRzrnKk5D48SvcnNNDzSLVQodtBUBMVFAFNeJgQHyuMnchEhLYaYT7Vd55RNEU4",
  "key44": "4qeocdk44zjSQVfduQ6r3Rfm3VdGwRqGvtDHW6uD4Y5enpBkEcVq8xspKuzwzDxgKtvM3W4sMBef3hgKmtqrEqLG"
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
