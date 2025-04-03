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
    "3fW5hp7b9Sc6r3F8s9VbXUQjBXLUKjapp9Yb2ygbNLkK4FR6fgmvsHzhQoEGgA4ekQ4fVmJA7NFiUnMTKiEEH7GW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VtavZiGXUxCrJbKWegoANdictsQSx7oFCCmU1fukXTzEnaRro1DrZhBhKVuB2RzgELWxy2W3XLUWCXCvXH61bXk",
  "key1": "53r8WL9S2pkpQNXtvS393it8MQiy7gt7eKEsEM7XHoZxB27bysBDNncjop3WVhnUWzEXVqgNqRVsywb1feDwqhPi",
  "key2": "5LBUn53zfpRBqWBtba78G19cdWen3pLrU9LoxPZZvRCTz1g46xF5Y7vRu6S9fAJaSfrv2petQc9nEFKncGuzZUqn",
  "key3": "3prFchyw8cCtCmxo2gdF2SfoMpCLygvGFtBM8uK2F1U4uqAf4mz58oPPwikbSsTjajznUxHfFcNAVhvdT4bi1EDS",
  "key4": "2ARA2DiRFcLg2A2uL9vFxxfvsSxWBCwsGL39jjxg7dTXhuKBt3npuoYTi1CnT5Ea63Fo8wXfDJeLajg66Woayebu",
  "key5": "5e2zuKpUJYV3FNTsNxiVu4v67fenXTrmvV9adsaNhagppFVCBGh9zRmMHnjjnD8vbRPzoT45Yw2UmEKfiGno73bY",
  "key6": "5om6HAJvnCJJ6Sg5WDajzgBngfSmqK2GoHrRVcL5iv3CAgHHurzNyJS6AVph2qTt8ydDUvEgxjcnns7NUCgpYm2V",
  "key7": "4gvRVLki67suFXpHxQaLdAgYvH9kGvDUMFvp1uua6Zj6bQ93QCHrYyJx8gqjMb9qL5tm7bK49rM6cX6oMQBEKrpj",
  "key8": "2U8J17YZqSA9uh8HeZivE8ggPkpddmaLtaDvSFYVg5C5HrUtCaMRd8N8PVBFjCnuGYL96gfVKwySDt6diMZjyqFV",
  "key9": "2YifBJDB8a3kjNtmPZHyY6aw5NZ6Ug3vt7ERwYanf84t4p9DDZWF9v5TGToqNXhHVy3tvsi8PiEyR1uGTDa93Yg7",
  "key10": "5iVbDfZ6miDBA8be9a45F337hs35iKvDbBjAV5MdiGa7NvJ7vTKaQjW35iPCFYKboRUvrSGikgVS1NA8uYJzaFuF",
  "key11": "5vkcA8nByqpJE4HRjh45vVfqEy6QEnHowYtqVynkPLL4buiA56tJ28F5XqWxCrDaDf6oWzpZbDzqFvA47atVXoyy",
  "key12": "4gyyDc7dC1reSaW7GTM2W55D82cPLznS5aetbp75M1ZGC5zWpmfTXybkYUrJirJL9CxMm3ZniDq1mPdzpNQEh6DL",
  "key13": "wzqwEWXH6UM3XEBG5S9omakeeb6SGBLG1Kzatb8x6uw4NaEFvkXWxzeHd7xVcGhifyPz18yxQ87uHD6dXGNgEkQ",
  "key14": "3z7jEnjKwoQqGhgnFShzjFgRTwXoqyxboRGwJuP1NmqzzTTh19kFUMjmYZqpQnta1E5XpjSXtFBgcnrAsTAxrHPu",
  "key15": "4HZLoXLFDC5ugqQQoJxb6WgkbPZK638immCjCz1dsYoFzeswKfpKZE9SoVQCaLfShrV6Xp2oPzFqhXcFimobKYXx",
  "key16": "4QZfsEQRY9qbrMpnQdV5A9bX8YHLcyjWBE3ve76nyAKzeSUS37Kjv3cmZdmjgKVFiQM1vYYydeS2R5GrWFpCP4m9",
  "key17": "3UMgzjVDyZNktW7nY6dsoY9DQDYKfz5Zt9tJXcqhi9XcSJR33amJwxPgn2AVXxt3X6VqdsdwcweP6etaeCXMzbog",
  "key18": "47k2NFZNuo4g75QWDraT9Tmkr54LkjbEz5gkRuG7hMg9yiq5qpHXyTj8Wm5dKRTJVeMnUVf2tCuaqR84BCcZrs6U",
  "key19": "5tw5Z1bZrmDx8VkhbCi6gofxoa6tnJzmCCsnNW4Gjsj6NyEJTas8QriWK4JQpFHnjFAisoUr4JkPdZDE6QagnhrL",
  "key20": "5wutpwnRc4yJbCoQyPEM5gLQ3kB4PM96i7UiHaGdkTq8FRiF4LCUMnTbVFDYtHpPDiwdNEQHdXq3i5MXFBPpw8M9",
  "key21": "bB8YFkecMcZ5MnEac2nSgU7c94jDnJDptTKf1Vtkq7yVbDc3AY9veqpmb9HcUjkusKeJ1REy8SJg4mcw4N7VKCV",
  "key22": "4JXqgnQNJfjVd2xhYg4zCGhtyPHrjMoMtssGRt9JeadpEf8HwGrBRfP5L3GBjiUwxXoDBvNty7cprn8w7ecpjGAt",
  "key23": "5BEfESRYbtmiJDiYaun8p8bEwuXjzzBvNVPgduSYfSnXpieXvzPSxxPHTufrihzgN8E7vQ7qXRMBDzTS1T9km9Qv",
  "key24": "5DSPNmpQ1hoiQkj3Ug66DuA97rSdKEujUtkRdMQGPmstjGFZfkNHkvL4A3dzrygBWuUj5jEdmQDpDF7X4Eqcq4C3",
  "key25": "5uFUuTnJfphMakyjq8gWZHCaxnExjBVUBHTDLVz5vaR4YcfUfgXWdoXoFpZU4MMWbbjPaKN1t74dp3jKD6oSJKW9",
  "key26": "2h9qJogpwxm1sn51nfcFvGnRSjv5RypzTiTE8tb8rqobMfDo8rBLF4r228812DadgJ2dp7nGvSf1BsqJt9ADbZmc",
  "key27": "4S5X7Fs2A8sKcEQVDcqzzfaLuaAzt25gDjUEcDYr96dWWwaF9cwzhjh3LzEUY5BjJJasUqMV7xE5GnQpY4ZYftdV",
  "key28": "5TDAxtaPYSuLhEPmaJ2ZWwD7u4rPukofG9mgSitaBZ4UYvjFPcEtYigyREku8gz4GZPAbJFFfyDkn8FdiD68FieT",
  "key29": "4h7kbrY4tcgj3ASJdSTt2nMEAaAJnmQtnkxaYJ8aVKywVLdwCMhqSYX8ne4YxD4nBxLQrpmagvShyWfjZikxDacY",
  "key30": "RsUnyEpBHmjZ1aeGVsGoL3fJpGiHHgftA2cYjSFDjLEEicWybpTnRkcdvYLT9hURJUihgNFB8VkB7Y5JiqqHXRQ",
  "key31": "5sQ89WTBJd6MEijrLu7LG3WBshtQjZ3YSQJVtHnoqYCgb1cd2thdJw5QGXZmBrijnEse23XspmmxXoR7KTyJDDiz",
  "key32": "4xCbk3ek45j5F38bX2nuYAbWK43qPpi4vwGA6Eoa9hdCPSC429KXZMGj1AHRu3cJ4pFdAgQ2Ud3LZnTvAszJ6yth",
  "key33": "N5PZjcUcakD5hLLdPh8fjRD5kM4HYzwDtjrvkGZz88Y25bcYm87jWAtMR3Eyws4PttVAE7SQLrHSYw7PYraEXDT",
  "key34": "5zenWCVio3XMdaWiuvQsURNnGnMEziJtS8jiy5Mwk3QjrMB9vgWVtWSq1E1Eb7iwxDrEc8a62yhwtj74HEdtrVzB",
  "key35": "4qwWWobLCF3t7yVvoQhpBTxGxg7pC42Uyj6vZVPbtwAcR3CaGDq6B8zSrTDkJrbSSfgboZsCsZvfwkitqjVvvh3Y",
  "key36": "2fNBj9RVTnoarFw5uLJ1pHKMmW2YmgSNN16Q3fygggpKKEsovt6RQi14p6cmrGv5L1dguAvvUDv8PvixcPGiA76y",
  "key37": "2zF9NNhSDcmQsfENPw9fM5PBFEg6mrVKX3eUXeCbjhRv1FNC2jFXRp2hdGPANp4brUGPKs3TnYe3BytF8hFWW18V",
  "key38": "nnMbMenE1eXRxgmBw658K9S6EbEiwW4sAfqeK3XetgPYL6Zo7QwMLYWhMnQWxCKV9WtLnW8kKVBwnNs5rjxFpNm",
  "key39": "sAGQYP3R2nCLnbrDdQYrYTnHb2ihBNs4zHkUPjdbozvUeFUiKFx7WkBDzhV98uuJJZuzFCwtRwc6a4yDE17EYCf",
  "key40": "3VpSy5V6p7xGwwF8C1SVdj4Gr4jcrDYQ9bB2utE7hCRk7iTUAvYz5wzNYi39v9oQUpVEyXj6M6unq4HHN4W4oP2t",
  "key41": "61NuRsbUZdNdMts2A77wAsnTpRbaCnSu9CSnVoL6Mm39UYBW87uVGqdqQSY2qQMNaKpmsehMoLr5HpJZbp7JDxKW",
  "key42": "QvjuTe4KUSN9YzKgoy4uEfbWWtEWeTNRuLuD7wKL6CNXssYw566h3R8YfiUrLdiBCwwqK1V5mGRwwwaSfYpJrcv",
  "key43": "5yQ7zQYnaA7pJYgRrbCZ1uBjAqf5z4iTQhWPwqbJBvHfBtagi8mJGRkShTVJUumkZRV9vgPYUpSuk7beYMqSVnqa",
  "key44": "5DGJ16yXrxuGbLk7v9MDgqM4GPo22nyVZPrTM8WMw5pWUi78HxwcyPdER31DFRTurqiwE5HmeDECwC15Joo2sJk8",
  "key45": "guf9V1u49okCDQaYAbnMQzGzwcC5tnZbjLzjFFZGZ1rCsAr3bgrFXCJE6iSCkcJuWYHx2TWWBuLWh46dFpDyxBT",
  "key46": "5qBjr2s4VmcCoGRe6FmS6BVV8F3JPR2m6dGt9bCJamY7RuyYZFAWEdNYMKD3fV6uVSW4DMkAYSCAAGm6aGPEPQRe",
  "key47": "Y22KKwzfrjDafWrDUeJrsZ88j46LvE5ohx8TmoMUdL7CsUHgH5mb4VV5KffRPG2WdPCnHQGbt6s8R692XUbrFL8"
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
