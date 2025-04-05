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
    "2b8eh3W1VB9RAZMgaRJpThZLLYKfU1fQPPUHEL7ZFR7MNc3ZDynsGukWT262PMmJXovawqwhhvJ2Q71L4YDhS9mj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HNLrEetokiy1bHPqEfskVdmKb6xbNgxGmJK9HbzqZ49WABrvQwAzntbAJ69DiDu1mgsY5SRNb8wbf7H4sMkR6Dj",
  "key1": "5noAkazr9rqfhR32FNNuCRW2CNsgZxxJXoenRZCTzvXwvRE3v1YMzE6pUAWtmbg6zDNcCvxJkSCiSU4mnVAEKGu6",
  "key2": "3YHrSm5uhABTjWXc6dzJwPLA9E8GTzNFrAcfACw3wzg8Mm9yig7mF9iHULC1Wd58uUVnWaaZhpLLcbWV4fWJSr2W",
  "key3": "3V5HEjJLaAGEoFVuKmt3YcYj2YJQNWD2RDgF2GhdUoadfcHeXGns7554SKSvkThwpxjM1YHu2XZKKMrgm8jfSpCn",
  "key4": "3g9un3y3zXMBapEVXhVdu8fL1wG3ws59gcj7DtU2xFaZCKyPyHZYhjM8Fc9jCASboz9tmMtfsX7ygtPL8z459R3e",
  "key5": "ewx6hoUWTqBDxpqTNPSL2efWGVm4hhPSVQDYjRZqruU9UmgXbWXLgKpKsNsRG9Z5iBP8HgRvs5k4aH1W52Savce",
  "key6": "29x4gbtdWjWwc7k5SBQHBxUHdB8yUQwH7HfQQzWZssEbuve8UbstxNt6oCXeEU579EV4xWQx6aCKD2Rk1BXae7d3",
  "key7": "48CVzvVVYZZha1amv7bV4DuNdRLGCRCgsYj5eS62c7d2SLBHTDFkcGNrU7Kuy7UXVKfCYD47WnpPqMYctCF8VhvF",
  "key8": "5ykGpCCnunpC8gEqHavDNDtAnRuoA7fgfZwnXSzyE4aoH4FKFWp98kZq3aXiqKEjDrT4yjDBv6H1sqDG4pvtR47H",
  "key9": "3cntdQ3HLhSPjroe74FxLJDbZmu57KVLL9pXn18v9aXhKUdTshxdsP1Sm8xaUi1XSmCsok7RsXP4x6L4VqLHWSZw",
  "key10": "4SaKvxWePQF4EQ6VdfPQ1kvtZqGEFrSyBgvLNZr6dVjAjkS1nzei8s889r8paAUV4iz9tsUNCCDsLubgLQiJUhrY",
  "key11": "hos7WURA3fHmqxLAs8T9fyYLaePbX8ztzHdKWu6DBZw58TBkx5RgXiBD2Bf7bXNW4bJ52AD8wnup15cNrumr85b",
  "key12": "4T6FFY9wfGLhF8XbGXd9bCM3VFrpKMw2nvX1wa31KDyxwy5Gs4Bm9k9wREMKtcZigtP2N6JKKYphsXnKt37a1KfJ",
  "key13": "2NcbqbDgT2VayBG4bxLERoBR1td2Jad6BN8mAGAYLrD76Vs5K79Ps2x2oemcyFEzkcwfehG65yfDaicpUdeJ6SZR",
  "key14": "4UPxvyQShv1SCqLQRAzcfEBPzMxvQ9doAnL7qRojeq3WXHdA8fMvjULb3pfMmZRM2Jfv5MC1fj1ScEFxBMJEtF6f",
  "key15": "2qrGH5Mf6qRruTRB6bc7nutcwSD6aymdMnXYnvbCMe9EMNqDDDGrTwsm9E9kcHZ88vJhpFW2fwnJ76Uhb7yM7HzS",
  "key16": "4MCqn9ZekKwJQmAsQEFs2MkqdogFs1gu7JPiYVakDouWPuAUoeZQ3QS5Uod6k8WTCtJm1zMRcnWQFpJTrf1tyTdx",
  "key17": "4xx7EwZjQHt9PHvuWijuNrkqkLJHQdck9iQvf19FkbPFreMrujRQYHDTzsKrP83GosoDnxKTZbxpa1cLfcxhgPka",
  "key18": "4bB3gp8m8dxwJRofTTx51e8RV7GfxDTvYwVYWQZ6CBbZCiTLx9CwtsarGYhKd2Bygp3e32wLpjnjPS17f7x2a2eE",
  "key19": "4FpEzYHF6a7uv3ctGBoaPzoLFzyTeBFZsvNGmgXuXmKWDHZkD88GECFoa4soMkkbP5o2QMVRzXBhYxbWbtK2v6VQ",
  "key20": "47fPWmh31N9gLarefk24myDTHFwBe4MhHz2nv3brVp4KFhSeU4po6u6KAYTJMpKWJmAr4EhXySoojZipi4MLQyZ8",
  "key21": "3DF5dYn8ujUQiUh5MALoA9RTNfzns2b5VZpq8mAJUdVEzaLuP15LRQDXtjZ55NzZf66XbcQ7omkD7qiUeWWcdUDH",
  "key22": "2uTUyvzqajmToX8jnaCfjFcnHfGkyy1Fu6WKgSRTM5yA3hWcbMCiAiYj1ftYbo36dGLjM3kwcEZDhshWHHjurAZS",
  "key23": "2EHw63pv5Vu1QfPgwi7YJh6u6ZBk3m9at6Cdvcau9hXcb1cDzQDrhQFpsYAf5uDYvLjVVHDGeA71dzSQaqEQX726",
  "key24": "3EhMBqHaxGzXRPzQihoi9kGSSvRFhLoc7sRcr3MtM92HEDqoBtPsiS5oejUF97JAnKnBb1b77ikR5mmc9F2S9SCp",
  "key25": "6ygmnyGFCveXKnMZaDo2wNZZ3fZ8tEvYysfoyhTKE2xF8faxtmQmyYVmnEw9RGuHW373JRRFUBAgUhRE8yzUcfz",
  "key26": "kebs56YKpti3sGYQFGzMgZBFUSvofBUs5v6fPybBQCo9ZS3WhGgbT28wtQ9D4s1Jpetnjm1gYA2Aw13Vge7yHoy",
  "key27": "BmWgum67b8s3YJbPrtWgfWTCJ78MZGnxsArrJLiWaMb7tdASPFLL57DrapHRa1xfZy2Wkcn865vCia9pXuZLVob",
  "key28": "5LKv3KMH1sZQEsVmNHL3daATVJ41dK8MQ3DLN6RtNf1HMaDDi2FhMA2XLch3WhF4mfJ5rbkxE7vtE58DR1rcYZXK",
  "key29": "3Fqx3yHv2Tbwf4jzKCXeKRwWHMxE2PHm4m4B4WrUnW2P81uQwLmcb8XypoSzytzqxTiL9yKnm2i96C4DVsk56zdY",
  "key30": "5dpNtkkL5b9eVLdiNKuEnxN4tAfGM3d8EsVdfYtEWLJAGPayD4mDXHzSDZWu1AqDx8UxqXz8qnmTv4HBtDLYkWmG",
  "key31": "31P5SnKP2AKctdwygjQ1VRVsEpFtcgJHSk2EfLCoe9fk8KATbsVd46Bmsebh6xPDuX7jpdRuqxDK8En2fX4qxQxw",
  "key32": "7D6TA3Crm1rXjcFaag8ybsUChtv6uzZyTjdNnZAturxD16KGGjU3tdNfiLHLejbDjTEwFawYNEFJYq8EydRMS29",
  "key33": "4vYKTd31CyP64hMgbS5MeXxAeujichffhkV8zh7FHVZ4E8xDhm1jf7GS5uk1sZ422nwf6FfAtiBb5QiXgAir2Gh5",
  "key34": "2foAu2gukEPmtym14o63Vv6984zXZUqJqYbVxzqJwcS9WFtVrSZCjh8mKT2n8vP8KbN7aaeNxm4esBBWbVq85bnJ",
  "key35": "qcabC7zte8hAJBkW5JEBcq7r94Mk2obAJV6hSwguo3SVQGA8hvUbFe5HXxdhSX1CZVCmumYTc8LJoGzSiFmwumC",
  "key36": "4C6U2653Wi6pZku7nUYRA1NbuFitjnDPueWFde55PRLFuBSLbiBu86rU29kTjWUDFq9TtUwvgK9u2GE1YxdF1nig",
  "key37": "4eQgHm1jtS8MbsfTZQkTceqaGDkwy9aZ1qayb3AunUzX19AMKV6SvdNPhUU1MMiqFVmXWyCqo2qVqUkzXbivKmaD",
  "key38": "61KgSY83Pzm3fGKjtJ2ZdWD4roPCsjf8YUh9LpCLPPyo8xWcn4RDfA5qpBB3pz9T722qrXr3qde2sNpVUSqZ3ESx",
  "key39": "PdnoKvPL4yyPS1fjWcyTVjqjbvRRq18uYJEp5ZXwy74THjsh78cVCBwcaqcAMF5GXQ4NMhJQcCi4MKNL9jJdXzb",
  "key40": "oRiJdpTMEQfkbZysteFTxSJtCrFyroPDvBMwrq3Nsyu6fEreV9LMFHXN8PYF2ZwfWRG4o1B9zjiS68o1SyUs3n7",
  "key41": "5xsm1kw7MjFdMdV6fCTkahZjKJNBXzdPfHke3SysGFxSuoTgk8WLuusnYbUBQY8kQS9igbqeynbYDKA94xaxekyk",
  "key42": "r8pV7rkqgPXX1AUwfxNimy8QRuCxCwDxvFj1ArFu9GfeQyjtZq4MyMwe5y73ciaagB97iZ8Pxxocc5iKo5E85VZ",
  "key43": "2BzBHajboka8w1SWh7Fq8A8NCccHhrZWYaNBQj6VU9LJ3XNu6FE9VyXXAngQoQNFGNb7nqtffkxWPc11AzH3TmXp",
  "key44": "Qq7mRiPT3U8SSRn3FRN6LnDcSCvri6XDm4xwKjfhkf7MvG3Vf2FM6o1FNACsM8kacqRtU9tbjes9uwWQctLtSiM",
  "key45": "5dhZvHHrYdLxh8KG1NA29es11cg7AvZx2g2oVYwTph8fcECCaDBidnHKjXESKx989VkzABNzypUXFqcVnCmbK9Ea",
  "key46": "3uiqkNUeuYq8msjjKzRptSWgnC4SiH4uTXwNEfgeLsTxmDUXj2gaGYN443TumKYniz11A53Bfc4oJwnbjLn5PpED"
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
