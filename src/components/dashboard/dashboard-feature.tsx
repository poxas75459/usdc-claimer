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
    "kvtdjdwrBS89FBHeNZKmPSFDdPwLreN1bFAsBpQoytNYQETxxpwxNiNzNmvbN1JWecKGgTxKV87AfQn5qg4yfVK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VN3pm4DKrRPSPhJmmA1Tex93AjjHfn7Q4dqTJUHxYeTLMBpXW4efXQc2JAo17sVk3jyimmRcbkC7GSWn4E6J3ns",
  "key1": "3enXoAsuRyqM236Mm5CQs3p77DxizK3CwaYg1rKyNS5kCxT1v33udp5NQ52KMzbxkZrN45yKC9cNq9Xf2bQ47w63",
  "key2": "pAHRa5j74XDFJbz4X7rPWCd3XbYPGp6bXRM5A77hgf96Fju8eWc7FBkjzeaXhVwEgpucSg8G54LmfhLvWkvbd37",
  "key3": "3WddhcjQNCHF9EdLCXN2UyiyAt4dcnk2h9qRLLFdd5JWS5rs6eEbbdqfcWdKTqpsXMHqQBUXKxZZeKBrSB6RxMzh",
  "key4": "5hXUbc3iCBtvZJWNW3v6mzW5jZ1cSVFsSijR6tpXyntUeTfrZpmheKhxDmdBwhuzuxtSuWrQz2qW19g9xp7WCRQi",
  "key5": "3RxrKPtRcfshoK9szSV1kQ2ArZKdtWoRmQgKRqbHZ4AHtrDEyoYW22PKz9xoujDJw9PdoFovXdqbThgBy2Aoew8A",
  "key6": "4x4wfKUFLd5hPFU5xFDBGvC73rzhbn4zxvWGxbwTzPhzWCeUovDzTJaLKJBjMtGPTJneVcen5ZQ7bxbAeyvNTNfx",
  "key7": "3F7uB71y4fEQk5skDgKgKiFruKztT61L1xg4UJHeDN24MLBZnvV6UmrW1aJEkXo1ft2gAdY1KW4hZWTRm8HHbQ8b",
  "key8": "357RZRoEX5Y1Qotspu6ZpisgTGfQRfTn1jwpn9f44kDGadaKJNJbAFFqZriaTHANuak2wvwKpraqV7KMEZpZhVEQ",
  "key9": "4qLSwn8PRpxmrreed3W7KAgxeBGnRJHimjKXHqUTBfYT8HxszHCkXDQ5yKQEev5frfrECe3twbCFT5ST8j7FYf2F",
  "key10": "5YMysPP8HPpr5rSUFs9KJ57vsgk5Py1sTEzZMSW4MTm8u2r1sEQaawTU7vyHLFTAUh2o4fpCuC8DjYSaN3RSGnrp",
  "key11": "4unRGN6CXYNMAsLapQnfwMuCfoe9imDVnSMVWSayVWcwJPde1NCc3Ua3A7aKuqDvuEpVXQKF6GKEH7NxYJRj9PVn",
  "key12": "5HqcPd3Sek1fb9WabgyShUFdfyCsaQrAh6jXVGpeH6GMb59fVLkGCCwJLaYT3JbBAjm6GvdkWdVrrrQvBVsKA1Lz",
  "key13": "4nvpQUVLi6hMTbQoa3NT1vjbczbAzFcPL9rgPtS5Ct27TQuTiBzZJ2w4as5m47mbpeYMmKQFyZ1sgSeKgsrbPjkU",
  "key14": "4dcBynG4LvYNCJXabUecKF9iSBRuzLf1SryHiLdDMTPcXeJmt8LMfyeuMh7Ztm22xe9R8gY9rrnsZsFFoD9Ks74j",
  "key15": "66314nSfuphgrYM7WfNkrHua2qZum3BThojwLqvUnyw6U5nDXC5C9JEP5efk8yn62ZnMUprAtvwrtbLySb6xVKM8",
  "key16": "4B78ZKQv8JCZRsJ1kc5Duay8NUDrWQ1yTXhbzxLpduVrrHtdaAB3hDxzijy75RTJkey8e13qW4eK6yi8nfdwp4cQ",
  "key17": "2G9NPxr69ufNXGEpS5j4g9kWfAbjJaJekqYfLfDW6Hw5YmmRqiUPk6WuU4SCB9tmtMTAzUuadiGsTHotvbRUcWCA",
  "key18": "2Usp3ePSMf6BpunNqNaLfiUtooXMLAEz7D5DY3CgsCb9byZw6UgUmKFmrKhbUJhiw1UjtrxEdmkt35hDj34rMfT9",
  "key19": "nV8ZHqetSNKG4s9pJJYFWgRcZktsjY6HWANr88WznLWNH1cH6S4LM6neDs1fpS6NHWioki7W6y4p9XL87xKa1c3",
  "key20": "4NAyvtavw9EVEPjb9wAMDYgBNtR6fq6wkXhRH4R9VFMGo3bPnmzwcbJXskfuwrJoevi9xgFUKDvZehdLSDAJofhC",
  "key21": "4AttXbKLY793JAf8V4RhEVGQ9j6q5Tk35mwkKghXAxFW6w8v5qRouSfdxTTB4ezRVAxQ7RYPQGoTWub56u8kdMwe",
  "key22": "EgCYVXUr7DWFrPUpJmTUbqXhjWuVvSaNiuexpP73DYZ9NFZ8qUwPH5Dw7HvZm6qW2RKtc12dxnovcwrHcMSNYQ9",
  "key23": "3rZhVp2k7BfZeUwvw877jcaYPGFYqriv4yMPRFWJUSsVsnZz3CWcKWChTB7yooyWBDxXRxQFjfJaDWjepN1BS3DB",
  "key24": "5bSDuHo9Qa6T8FFma6NDk6TS6tyLFMEj9iisR8PsrmJLYv4aGGQPQcQ1EzMzjYTRoyT56m9k8cAF9UG1pWhpTGEk",
  "key25": "3v28VteSWthd8na6zp4nTiCqgKXFxp6cEo9Ee3Kx22yj4Dw3MJ7DgyxqGYxjs5x445RuJh8aKoZfMPkDbT4JiVFP",
  "key26": "4xngd2xkKeRet7f392osmq36RnC1Kk2SmrFxyTYqkdTFScZZC4ykvyU9yKHf5seDsrzr1g2xevMEZJpBEyFiBjSV",
  "key27": "3f8y8EnjNqgXQqMEyKssgMtYK1GPWTvha15aWwYKCB3HqUhKZu2Jbi6vthKaLP7FUasePCQgMq4wCvEcztJ8d3ck",
  "key28": "5UswRsLXAa8bTY5AzdCWPakDK3P4LgereouNDT6UtAFTaphYqV8w7u3Ku6VNttFFLHEWuUpQwx2e9jxEC26bveps",
  "key29": "6142Tgu7hzYzpczYNF4PYnBqVdg8E5UePN5CVu2w9HxiAVdsNpSAhJsB6RRhCH6qDrcAFtPnLCCQUxAVZrZapLn2",
  "key30": "5KVgNzTfLQp1EHZP1KLCmu8ik6ErQnhiqvLK5HqV5W6hopW8eBvz1Y9GDVewiirMQKrBvP3dFJDSV3bPx1JSBbXJ",
  "key31": "5YtAB2Re32HBN5XfEz7mWMbnprAQqEsZosHaYzBY5EaQugdxtPNZra1QN82jmKR7jX46NjPWKLWEnjBDkBtMdVMf"
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
