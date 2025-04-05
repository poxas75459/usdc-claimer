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
    "4d2YWr88SftgAjkGdXiE3QDqUFJpGE5Wd9DG9UsWdQUMmjLDyQMGCe53KSz6EikpDQHLmFTAxKkdMYV7ubrmsBS5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EFemJRvtw1Cto2Yb4anFwtM8eoJWpFBQqhufzZoWY93RKVVqLMUpXigDK7sSqcq1WyPvixTLepPcBibiAJKErfU",
  "key1": "42PhPfjLXBq15u9PaYEJ2PeURkbG26dV7aA8WGofgnpUwH34hSQR4r883YKWVYY4pqrePc7pqMLKiH8XpWWTseKu",
  "key2": "5fvKRcHrCCHQtY5CH5oi11MHrob21RzfWg2Gn29AXyjXEU2DzFgm4Swu5TVtcMaG73V8CkTm2LxHZ3MW1BA8abjz",
  "key3": "3Nxg5osijP6cyKUf4LfvyhXoTjdJsC62Z89kWPcvxDL4YnyPjducGULGS6gYZ6cst5PiCao8RZdgSBpoRnk4SQpF",
  "key4": "EqYwgeCnYXRFSthiKXXToz2an6AmG74UDXmcW7cBNmdwjW79czq4aXVsZP423w9uCKZf64NYiXv6tcbw58iVLsT",
  "key5": "2itizV193SuwreTQvjad6CHkehKJwbXuBAQzvMNCkWz2krDmEaN8T78SePqeEVe6RifnRwfhkXSR2MCV7sWAukB5",
  "key6": "5MvGwVf9K7kSzUCNN8aa7yLf8UpqJRWiKUh9bGfwGpa9uf5QAkUaQqyKJj9RmTkCC6ALu1Ff6oH7gqq7v2t4szkg",
  "key7": "JXrN7LAGWAHXtS9TPQQ6fQD1rtY28LkUqUnJjkGuWzrS6Mb5vbyoEAg3mF5abvrWxsUY214EX6r2QP7qwSWvirR",
  "key8": "5wPUuZsDLKWkgmFXcFRje1zXus32ccCWA8sQzF19ERyJXqk9xT1EpHRpPAaBtbZSo37nxSTvtgpy7h75XYquoo3n",
  "key9": "67mzkJZ2axntsiE3g3k8LxBBWE41M54HpzKhBCYEHPfwfFSAyJHASBduiyFVsXuC7ri2YgRXWz7MzkQer6RKfgNu",
  "key10": "3j8GHHUpdJqGKhCWV8DK7wBkQs51NfkZLZcxR9wZNRmzmBp8Mfm44h1mKgKZ1c7PgNNVK4uY9VJC8SGKJq8cZAZ9",
  "key11": "3rgdpQUDWk778nA13jw5VEr7NygLGLhedsmfHDTggLB1v6GVdhfU3wfykRw6MefsSb7G51cqE3NN9H7sQMjGyqfD",
  "key12": "3JJ1Yw2UjSCCyi7bEohBCKVqQiNPAEToCR4qUoMthVwc7AEtfJ3bXKLtXnY6HSjbYXRtfUxtyzm1rbswQDTRaKx",
  "key13": "eGnitEoKkAo7E3uCz9rPvj7e1YEfeoMPk84TAokFPfWhpGdRaj8xTTFbiZ1QMoeBJ4vZgGkEg6DFLy6ufzxAqKM",
  "key14": "28mohQdJyCFuwrAPKgd1fSEmYinKoT9xsGbU7HfwbnQz9ENrfjoDi9TpbrPo1yia6XFt368NJcMpKwBKxtoZp4jJ",
  "key15": "4SVAgRxT84eZxJg7xSwNNnL4wMuTEV26zKmRBaUXTUNSEk8M5hLm8ZYYxAodGdoJKpPv4BqFDC5AV3JtK1obtsAW",
  "key16": "dUHJ6bDpsW1TvdUezmMRETgMLZX87CJXCpgmJBiPe6wxNZ38a9QU8PuEbndyrCCTR3MWj3zex19ayk9JZyzhfBV",
  "key17": "3H1sqksUbq8C7tKzFgwYRht5ruNsKEsZhR1wWu2J1gRf5CoFehMj6yxH2bC2URc333peK12i7UG8HGzWU1J6T9uc",
  "key18": "4M9UGzEkeLGKtoW7xF64Mz6xnUm894H9WgbAbNV6wnUaKFc9NB3S9MNarLYcr6dE5QB5y1MXSndPG1MboFbThf1k",
  "key19": "eLZPGZ1xqKjcUR45r3gbZJBGbyB6vSBSvWk1omexBUCGrqJTpT9fzxcfKeYUCNrsUQwpGwAMZPq6Dz13RL4QzLe",
  "key20": "csiXpzG3ppJ7xwUxqqfKSzDQdEDxXA5TJ8v7ReRCf1PcbwR5udPr3GaYkCWXjK2QEdNsU6RvMouDmTj6qo9co8a",
  "key21": "4kaLJuvFdByDvMawcXLgGfes9LRBGLjwR2YanHM7L1JHmG878f8uqksacsCQDw7djc1gitmZqjcXGudDwWb5nDBF",
  "key22": "2eAiPTmCrzqP8w6JkijuWT1tUm2NF3B3RmTND8qTQvNewa4knadN3qmnRMfUsEXnYfWL9otWZzkCdScHG2Kj9AVf",
  "key23": "61auezauRpLzS8pHd8NUp72gb8EAziUnfXCc6tQC1FakjTepwT29cjZPNXWyT5oqY2PaMDMmusM1rCtD8HtUycGV",
  "key24": "5gsbDayDLV4axPkvApRfwHU12rtGgo8Fs4KXEf78RcUpHUUc3ah2SiKmGzqd3DhgLSEBfGciSG136Dtu5FUnBrDW",
  "key25": "2xJtmVaRpabyEjbzJEQmyUcRAiFp5LcAnvmcLJv5bqrcBrxhU25SRqy19tytrBX9Pw74W9Ws6Qo1xav1ZtrHxAB2",
  "key26": "DLqiXd3uzwm6fbqiU8jL9Lggwk45e3iKsC42tmjKC1ya5oYV81Z7TgsxfXahtPg2vzXinJ4m5qKrct5WvVkpNou",
  "key27": "pYxq7ncNrsEesByr5wWqQJBfsnQsWjxEW42n7HdPhuYCiQDkxEXUVDfhu2VdHoc6Eiy3jHCBtqpe3rXcYt6Enqh",
  "key28": "3XcnfvJbX3rsTsma9K77xYaLxo1PHU2Zp4PNiMN83KKQ1ZCinTjh4P45pCuaEFnDxmE9hLk6UhhRBF3asVjpidTd",
  "key29": "52fZoMVntNBTZLCE4zZ9ma5TZYTEsNpJf7gPHez7rMVxgWda1dpXsm4HvTd3D5d6at1WxA4c1oVr4jyYEunfpPDw",
  "key30": "9pLZwyPvT1886YWMxHE2uhMMQMmHVUPstWUaKpBoN19QZnguRZusij95ukkMquXThPio1AYNUjPL3st7MFJzS3b",
  "key31": "5iFA9pJN2PmSiQN4nKQ4N3SSF1HZvdiBBd2cKvWXDSoskW9ALePh3Wgqj7jBSJXQGpuFjs98n4TxTBYHQsJw6hST",
  "key32": "5G2oYnw5AvQu9ruwqJ1ZXmyD3kQZvwsgTsnZqYmAJjjTw7Fp376mo9nr8mh1jkRuEaRM4g4CZqA7SM2J4vZ8Xe5L",
  "key33": "3PUwmkNUeVhe3Ysr3Kf23WDRiKM2WvDyHgUnfQrBL7cgMJd6UdkgEPYLWDYorDN1DVyd6Cb42rgvnGSDeescwXho",
  "key34": "2iTMwpqkS4yyNtGXNqt72MevK6mmc8vCfBir72MVWKoQGdJwJ5gHtx9KUMiqAYz14xGwaJFbjxYcxHUrLUPbqxpK",
  "key35": "2HRW3MrztVxce6S1xBxswyJ1hyH1FgEexZoKBp1fjiYSnF9eWBZUGopeFV1qC33ZsP2WyCAyPhnjvhqqJS1pKuGX",
  "key36": "2zkU5GiMHrWEYYX1kxYStYSX2jcdmv4A7eQYLfpNVkxB4DiQ11Z2ShqjVqL63pnfhTY9daqJJwedsPzuT6zn95eY",
  "key37": "3xd2tW13fctYL4hQ2ix923C2snRERhNtUEkeDk87wLu1KpVKyn7d2JLezLMd1S71qpttgJx92agYzCGEVbQK6DCg",
  "key38": "4oZtSWkQzp9SCAMHBGjXwyFddE9FZrxgraW3xbJozAS5z7LBHgMX4mBKRe5bD9JuWB2KkytJme3wyu8G79v5saMz",
  "key39": "4YoCMwQPHYQx5F1tqpyzVTH7Qg3HX1gPHGjGfHyd7guxSDdcvHYP9P95qUYkDAgmSMdqTeem7oa3BUyrgBTm731e",
  "key40": "47TQ4EubjqM8nyVJY4YzMmk3eAMmg4DtdCf8gpvhcz4HAb2HkktEFEd1NAJxCETa9AeYnMFiP1hm2V5Z951itZXM",
  "key41": "4C9PtyG2B74SfGTkVuLXPv4Bnu1fFL8g5rtnHxVXJJT7xBz6hTgwzq5R98JWdcxk6cdS4KB7FrEq7mKZWCwVG2eS",
  "key42": "4eC5GWHZYfPCb6CAWkUevsVciLTPWiJQ5kHEmvW8CzsJCnkotyyg7GfnX3oL2m8zpuAwVFodBjHidBh5SqSebQBB",
  "key43": "Gmg4gAK9VQGdudabNKg1qUZHetU65rULCg3bFpD8SDuy1vZKFB8NFGx9rrFv6jA2QS4EaZxWhhoePioohbBsenm",
  "key44": "5Pf9HLDcxowLHCufNgSrTDUc58f9M6fBugz7ZyiUiovrXhrNA4ycf3dDQH5SBiBGCYjzCTdoZmFXjcKu6NAExcsw",
  "key45": "4fA4LCGwWPC8skE7jwGCvkgxWdhxReSrhSpMfq6Dir5V19AUmAu58dV71UDDKAaGuyrRUEHQqn25oahTsYDrwux4"
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
