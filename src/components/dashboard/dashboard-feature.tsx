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
    "HgVw9DtXjC8cub8Gf6PLi1Rnyy49LExC5dwBeCBKttwkrgrYpQh9uEZSDvgttKDYBv2ptuxqHDubyhFypuo3g6h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DiYkGkk1KhcvBercWRG4jFq4qrshai9Ev37Wa5SFaAWnPzpSeqD5RxKzhYavQCj4j2tSRkTPL9PP7A5hSepG7We",
  "key1": "2Ery7nNzWE4ez3bF5GuCy36YuUHGkrN6BBtp6pCx9egZfZdXrmUSAbh5NEjWDdGj1t4JWxdWxY9R4t5AaksCViHb",
  "key2": "4hcSRnHGA1baz7naT4a3MmTUCVrKBxi3fcpWpBvDYnMFAjBhrAbLw8Jo66RSR7Li2LaHDYGBgyd6yy55VKkrzDtR",
  "key3": "GKPZwUroZwo2FQrHmadPYokd6wNN2pQ1cv6PJa6QQX3bN7jCoF9a56TrMDkezL2BzGKUvYmkBr8pbvmCxmyZQCc",
  "key4": "2jfgH2bne1AVjYLESgR1KTiuxbo7h3L4gazPuwqT43wsJed9UXcdrXg3WxBfZMM5Ge7Tt4XtCymqyGnHinN25YEB",
  "key5": "5Fomuynk2tUytYLwoZvPS3vQcAuwZodwSx4UEqYm7yY8ntuD8BTykZU2Q6FzQdj6nuXyHx1o4mqQa8a9V6HsddRp",
  "key6": "5Wy7o16ZHwqf9Bzf3WHLiFavLLewRKdPg9uDTSkWZGaNfRW2HgbJZPktQFqTr3kBHbqTPx8ckfmDjA2qfT6vHynB",
  "key7": "2y6NRCLyPzoQEEKPUKiHVgt5JKjEPuz9uMUvA8ynoMXDDaJ1BGkPNTHqgZ3JKdBAFJDfEE4HRePSBwQCc5WCDRmJ",
  "key8": "2KT2RP6TAq6ZqBmnKqzQnctHW2oyDfdpsyJiLzSSaCJ8im2UVgrKzUecMJNGZu9G59oKfJBW4MeMfYZ2jJhmitLS",
  "key9": "3vd9XLdh5RYgnA641xDfUbZP8sTYj9VQsc6hmPN7NHjZyRakAytkcisExHCsc89sgAHvSxJGvwfi98wmiEZrfHrx",
  "key10": "4pFKxfw8Rx8Cs46o3Sy3pdse1pdSawbB7PLjE7TPEE17tnaFtvNGLEGdzFx7uSZzrgHFLWaQDU614DaEh3dDKqjg",
  "key11": "4ZYxPJ1shxePnnZ1kiaJ3mG7d7VnXbNHHnmHdingGEo3jimzzJM6J8ZWq1WU6w71r6Ddpco4MZSvAdwdBTh1soAV",
  "key12": "4wBL2LMGH7sGCWtTHN7f7RqJkS1uvHTG4kFda1DoNzsVs9GsDmSYFX6e1YZGNsdrhRTbySBLTu6ZnqoMpSBb3DPD",
  "key13": "4LzZGicrFHXgCujFj6MyY1CuEAjwjp8StGD8cJaeTQFiB7o7HzB33JvpBoCx2UUUoJcdmqiTTzDTvhkSJwb4Urx6",
  "key14": "66fAhYnNXgcykQkM18Pko4uaA8GFciUEquVs9SmQRwwGGEUJdMEnw1crpxqdQwDSPxusQAh3Fjycja7zQhGtfHpJ",
  "key15": "cxy8enbPg7MWfgGk2uugXoXPvWsCBMaiB2YhoUQ8xwMAPhFN1Cy588RXVWZfXqMVQwrLN158X2TesWVo1WCDVnG",
  "key16": "3fWoUeqJTpb7JrMuPH63xosdZwVmusxYT9RV84DpE8UMK7KdP4WYy95CYDaGsCbjkXNrfsxVQQKT48MbQDt9tTgx",
  "key17": "5FkzyYhnVTPQxxM35abettsv4Vx8APMnKzypnDwKb5dCYnkLemicHHnyJmb64WBQNPAAfF21Zd5NyZyRitLYfNZL",
  "key18": "2xi9N9vwaHWhzNecDMXh4tPJvmwqbDrUALsHeAjCBLYTtLZuFY2CkYEgUiv8bFyrsBGvXE5kNjjMbxkE5bn6X6zy",
  "key19": "4gyYeV6vfTTReHenkbEaxdUvYY5bFRv1rrJLMBUFaCkjtnfWgwkhpmrwPrgS3NK8czD3GHFPVGjy1FsBz3h5PRom",
  "key20": "4pqsL2PJAVRDRyC5ArVQSra1JhKFBuyPqGD6PrFvojHJtriK3ngCXC78VRX5tqXvnsqjQ9f62wr9kBMxVKpPwE8q",
  "key21": "2v8vh5vJZatT8oXdp5n7SwkV45JaiEa5z8PWEs92R29kBbdh7UeHbq18LLmGsytZZizvczsgMhS81EcHtpWTb4NQ",
  "key22": "sEKR25K3zzfWMyk7PCyGjSmv7UoL61btZ4WmeDY3N1BCkFjeE7WswdTqVASbUUVZi5rH7TmmnswAxgEndmPC81a",
  "key23": "CQsDVDQs7rU3Hn5p2Jsoz5h6Zqf1nuYEejoHDav4kwk9zp4n9hKEpu71QmVw5jM7dthhQCM9gLxJAjjEywn7Vey",
  "key24": "abnch3fb8FDaLfGegTphuzFKZXXNne1izQzyAWzDujfwRBaHbTjtbwZi34vuF2gYxBeN5gzX9WXZ6FWHQUykvif",
  "key25": "2hdzYmYgLh5SeZEwRWa3EqkrU8iUAn9zCtaDCzfnH3BbviGMRpNZSy643mjX7Few5ux5i2wjxgtPPsraz1EkfVbd",
  "key26": "4ZcneQE3Umiq83HUaEUVvRV6S7PLnFub8xbr5kbLmfeWERJrgVB2QCvvQVrYdQX7gVwftvu4defvNBBnBQPYQEL9",
  "key27": "37HCGA1AV3hxZfpTiAqVKrzFqviDcnNoLQMPoQEY3dt2E7yEPLW1fqseqEfDXXVB25nioBjhAvRKppK5Ka3oZVYS",
  "key28": "5f2FB7wG7fATPoYs8cqLisbaAMjGaV8zr3LSGSkixhr74MmedQ1Epm1Eozo5hbPAEKsbzj1vW9XSFzfTMJHzxiA7",
  "key29": "m1HjjrjwLWaSjQbDCUMhEHn2YWcU6XNGLurYbNPVVs2diqP61RJfGm39kkGJr2GyDKsCW9dDCnjskvUq6C2htVd",
  "key30": "661CXuoUVKkiKuEGRUWGJ5ccpsxTRig97SyfE46kL1se1tAVuytmNym7NT24aQe3GhY1ZKfetw2kYu28oaceCs4v",
  "key31": "555CngPJBQ8RmydgxMNQ3MzCeBq3wJ8Smscw43Sz2zDbR2BbSHGgqeRcTVasrjRG5RkjmdMeSDw9zUKWBNthLcgg",
  "key32": "4aCdk2ewLiFFNVTeZD9JLb7w6o2K3XMfsCbuEnA5AseAYPw9rrVbjxEBhBHz1NY8DV8uwYP1k5oMLHzN6LnVdqEE"
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
