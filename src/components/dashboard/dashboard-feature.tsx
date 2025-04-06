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
    "4s5eHmMbswmGQU31RHmQAn5mX3s9wNryi5gepsqU8JcXcDR7mPk9yDqgVHdXXbuTpuHJnsy5czsqU3kULd9ZmBLT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YuBQs5Nmgx75FE2oP2SkKtaDCcZjC6zrA4J2U973gqWxEckL6dUkFVpPwHTf3cQRtruWjYDm94mxTJxLVzpiZXk",
  "key1": "5vuPzmyY9U5WgWif7Tyg3GeHTNJcqXUSsbzoRWzEvSVNCmiE3Mbcv8oXHxF5c6TkQLo61XuHyQQebjZahSZ56wus",
  "key2": "JXNZF1GTPCqnJzdGP5BvxXxDVC8uk7WDLZCPEHNoM993NNFoKKBZKbAjJ89d8geyn72DhtrUZLW7FZLWVDoxX5N",
  "key3": "3jzbC18ioQbLtPNVzRf9AbtZPaVzSxBXJKQXXv57uzeXpChVZ6m6GE8PfStijsxdZxQfNr81Fd1tEnhGLhKiwmus",
  "key4": "2gpnKbtHDmvQ5sdfydXSzg53esA6c8uyn94gUBQ5gM85AD3sDBCQzE7ppcmPkKhqpw4i1R3KnMJtmfcnmMmgN9AV",
  "key5": "5qsF9n1RxDdjYLgprzWLiMLRNnYE2KAxsAcaSQzfxQBiYYHCAZ4RqnNYWL1cknDFunKKWpbsRbYqMaEFyMi4eSi9",
  "key6": "2ftPAiYWFrDfvx3W44cixWkAUEhM1LzYMUmFBcUoh5ZUKdCauCCZsHxgGERH9iiaU91s6eKw2jJZKNczBxPeZ5G5",
  "key7": "LS2ci3YH5jfjtfnhZwrXf2JrbBatxdum9t1H2sDWogPjUqYULGaJ6fGXXoToiijsBAgJNF5DB5KNa6q7ZwUM6rZ",
  "key8": "52kiVpzuLCAAQDnuobQYAHAj3ARVrL6ZmSh8fSiZyJCKKJHhnNFJsisGnQ7BhvztMP3AnhXerUPTH2fhFU5KEW13",
  "key9": "2TAB3zTFe6q9Jjv16YRVGKWetmBS6y3G1swW7DRE1JDTt1jUbWbTJ1GXNGzaVbWrshP7HWvVr3UAaESubyGHYF8u",
  "key10": "5Z8EAvGYqZVEJMoezttVMgUC3wqguf8CzMwop7ZrgSQBoMEJbr4uPQMb4vUYRnDaQjWaMhuiro4ukWG7aa9VAR4u",
  "key11": "2H5cTf8eQ7KUyJucho6xhBeZEzsoqQ8Npgyz22RKqy4GuwRfeaSpmCdomjH5DGcbh7XhBou95mAopM5nG7B2ZiLA",
  "key12": "5qkLCzkayfV6RYuKYvJSSi6sjG713XDowsxPN3GKSwvTFBNZYayaTc7buHVNppU4ZesJ6PpVHmG2N27r28vKJ7rB",
  "key13": "3rR4ZeyGaPKk5iqChJ7NCc7zxE946ecvDmeo7rfR85nym6YwfvA3CmGVGihY958wSN37ARcGGQaVYpM6J9ucYj1T",
  "key14": "k3GMpMjpBLK6nLHLBchFcTJRzKvi3hL8JZZnzWHaaiZ6heQZxaGyETBLNsxX4EKkdsc7QruC7SE4YWE17Zvz6B4",
  "key15": "4E962eveVu2iSYACivN7AjnkQ544ZVyoFugnbErMfNnyKQt3mjdYjviDwcfotJwmT7PZGSMCkpski4XtQknDsXAr",
  "key16": "5d7vQ9DJTBVP72nYyxE3VujSyrgLAbyuaivBc8jT6hAdcsjt8BK5GWuhSZ2A8k3sNGCB4hq8vYhAqieYdZ3kTC4U",
  "key17": "3mqewWmy7kmVoKVXGQYBe2frXHyxUmWyiqsdxumpVB3BmLjBRcJYnwg8tgAQpzBggmA6NGJrcmjyAY2zziAokksd",
  "key18": "4VB7eier7wHHiwA5xnUZJwhQncxsxSayg6wiJQDwrwsbhEabw1T11L6wERYFcJaeKSHykVKrrrsc54tfSWGqyHBW",
  "key19": "4XWedt5Z5Xf5oJwdcTqXSc1Ym4HXiGUz1qeyrJWzTxPvvmDwFBCfJqQPpEw5DDSXWzwXwBTqHNx8Zox3o8HudzNb",
  "key20": "3jb2dnBsAGbHd6npi4mMY34oENBjYKawsy1iDvmTpZYcUR9Jny6LbRC8VgSmLu1zAWJ8uNUsgvVsGFsqdBhCDkon",
  "key21": "3MZpP7PJmFhdZLMtReD9axBC5USfFCExRinQ1dEJHzpUHxuxnnpptvA7vRcr8xsUg6JcN45X5rt2hRSuoRuGD3QV",
  "key22": "2AnEX7ugZctnks2mRaamrpPeGiF2CX1EtvBNSGJxm7zKYBBBiMisoZtQhvAfh7G4wrwZqdo9uDQyTFvEo3Hk4Gjc",
  "key23": "2kWTvRWLMMPiEdynXayGYQm7pKHo2RRyD7yLCEH9FVAcsbHAQWkFacgkKNW1CPD2PmQ1xepGHJFPxAdPX4gSsfMg",
  "key24": "4vrC3Vn5dbpQ4FMh8BRC1gTv7cqV1mRa2TXwhLiLx8vVoznLn4RwjDmYydsdkbmPQatkgcdR54LqKrsz3ySeo5X4",
  "key25": "5rNZ5SwFCYpE8bBbYoy6cZyEfUfBjoTWK3rCPnWvDXproNxvRV4rxWnjptPGbiGxC2Vm7fAwJbBL1WhCyuogA4rR",
  "key26": "34EgHr5EbrgQbViMNexVqZn6iyAhmRKP8S4QKN4HFajc9XMzq5Qej1vQKqwghQpZL5i8ViPGMjV4mnWmnnBCaLZ2",
  "key27": "25RG3ouKPXXjMVFJYnkLnzZtBjEZGhDqTNj9RHdbPt1KYPUpLV4Avy48JCCgzDwf2BZSfuzMhxqcWtaaz7oPdkkn",
  "key28": "2yEgYnDGuSARNWtgiWPY4FgAipnbJ7kbAp74WVMKYj5ELAT2ZqrYyS8oqnbh7q9J2e5b46yMTkSMax8UnAGTusYE",
  "key29": "5A2rVPZrcbeA17pRUuPbaBQUjRv5KWaojABpfsujZMUYkw48o6WTznc2u7qNToVtKHTCzbNLkqgTBWS2t7QTQfsG",
  "key30": "3ga7VtKt2dzVu53oDbNb4YeZAouwvPfHhbUhNfM4dmmSwLabDqAUEEpPqrYwc61Brp63jRSvpcBS85FSb6G3tkg6",
  "key31": "5LjdEvrf7dicWUgEpf8PbW2A8KTidAa2uTEL8u2X9triAdbxozTsKBayau5yNFKAt1uBg8atSe4v51Y6LtjeMe9x",
  "key32": "nVLeHZp4P2e5E1Fe4gDEwSFeHodmkNAD8rSqrHkF85GN32QF1dRJ8S4ApQYBe1NGsXEA5SAuRMUe9pVvV2s6NT5",
  "key33": "3juPCAuggA91MqTTpvnT23hQx6yhWnAFVGiMT8KsJkf3NrUhF8q6HjS4sG1XhLv2LG5k2RQPGgtiGLGPZf43d5VR",
  "key34": "45wEntJ3eJ9SYgTpVypPUXB5U2HmHUjJr6hiGKZvRzDdC1UhJmiHx7UxaStBVr6behuECvgK9xEEmi3RXkawnsk6",
  "key35": "4oJ9t5kbnCxbVhiy3U2r3wTXZQ5G411tSmzJ2CbznE9euhMc4QuYaxwzETJLLhzDghoAGMKNKeajiAtCq9cKUt3g",
  "key36": "238vcnq8WRxrk5HwG4x3vmdQQo1XnWeEbmYBY1T7vut8kG5VRwZ9gvGXjeWrgyAEooXxhfwRuG5coFy3ebjXWWkE",
  "key37": "bECWY1aQyrpuy7syeL5turG4Sus1q1pGRpH4XNKz5wGp7dXPpqQwdUJ9QaJSiWxd3ZdZLVww2xpQKsq8j3KthP2",
  "key38": "2yQDixp7hr4sBh6VZZrR6KiMXn8hqgchnrRnDVuP3dVFM6sDeESEvuwt49LJGF4e7KknpvFbyXpXxPfoegPzjET3",
  "key39": "irxxG9qgSYs4NzdGiyMiSmEwdW2PjzP1xLLJNk65S9voTDYtEf2eZt8HvBC38ykn5WtwiC1KVWHSYDxAJs1RY8k",
  "key40": "onzZnzZXNDGsBEXeM2NgJGvPAUcRL9yExuoJcd89YpJgkZHHW2RbBP9sx7i1sUd5rqbQQAR2p79KUNbCMp7phXi",
  "key41": "4RKEhh5Rrqy8a15sXTXSqVxReRXktGQrDfZeCcT1xGqokX27QHsu9cCkbybwEFagfSCgXLRcVf5Xd8R7CouLqnuB",
  "key42": "3sq8D5UyA6ZmGPjidCq6ocwsuTbM7913vWA27EDxBVsx7Zxjv2LyzsvCnehn3v815ux94NB5pAj5eQu9NoKJiFVS"
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
