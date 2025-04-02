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
    "hwDCQSGhynR2tvvA8jMB8hwzrQVqkReYVtfRns6XLWqGwjxkYcqmYBRRVq8NgyKFG8SHvMTwmmrTMxJu1isiE7y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V73J9YbNLu1ZwCFxz17tYgTJnnHAGeM7FaKL8frRLY3VGykTaz5kVHQHQ6StTihQX8eTNb2ifBAiLNAxxdgYgF7",
  "key1": "5tPB28hPvj48ddveqE1PriM9w5PghDFrqE37toniF3MT9fNEBUCBSSZG7Bh1pYyALJXtoWMBCCnPvqXzpUZTHFzW",
  "key2": "3SYENA81HddurXtLT322zcwUWPJ2xqMxsw6J3E99fuWZxZBR7hLmn11nCfKomHphyqvpyjUmJndAaJ2aNNt5f2Qd",
  "key3": "8g2vDMDVMphmV5EHm8n59TE9m6GdZuTQL2t7MBbQP9SSCPcRwTYnbZK5pv3isXh4CcPopPwnDp8W4xWpXNmrK3Z",
  "key4": "GuP1tUTjm4Zdc6WtTRpmYTaNewmBZwAAbdDjgL5tWawEyjY7prJhccckj49388StQ22NHnsFaUE2LKPU6DC3USW",
  "key5": "2eaWttNFpXu7DFo56LgRPnuV7EroToBhbuawkBN9SLhdee8ccTZ5sMreX8y1ysBBJWaYStjbFMukNxLddtmSNn8X",
  "key6": "5DnxMdL1LdYrLS6fjQpw3F9PnMjwLwtZ21Fj7ypuDkQ4uqD8Jx5DXCELAEmKsa5DgtkPTwMGsDgxomR6NSxfomiV",
  "key7": "2S8bnh8WVCxg5PkK9THbwphzt49sBMv3U562m2qcnqqFNrgz2iBKFkzZRVGcRYo65LBLNGB3pkoem4GMovXV2MLr",
  "key8": "3xcJKdkt17uGoczw1KxLr2F4ZtaqdNHxvep5fPPMNnJ2vXana3sp5jcGW5LZ5t6biHuVm8SHw3qb6m7FRWphqWAf",
  "key9": "33j3Si35cZpzavUjUPLSW5JGZ3MYexVBznNPVzgdmobLpssz6ArLrDK7Cjtqm7XYeNHtdDyf16a4YU2akvzoiVyk",
  "key10": "gRmNUiqkSBdjuCvsy7Z5H7B1mp3o1kssUXbgcSd4uYUpfym53vwNzb3UCuuPTocyFYD82kLUaGdtNcFk3xwhfgb",
  "key11": "w2crEd4zN2xu6fPqmR5ozkCSJ9yieCBdw1kvpBx61tnXzz57pfAdLpGQw94yo6nxi2T7kLGLnJNYDMTQ6YtmbC1",
  "key12": "58X4bJVTTguEbJsXWvYJ2tsztbgqcuvaaLpXMS5Akp1VL4iA6pxiE38hhpx5PZzkcERWLikWMqi1TiPceu2kmP4W",
  "key13": "5gMsxfQPkdvqSFdfEnirtaWZwQzZR4upTZ7vYQMcbhkYiuTD7nAun51RaZAEtUNhqD4Ca1nPgtLQphDaLzgpxfM5",
  "key14": "5D3s2EctgGeRBYVV98a65Vg1pZwByqSYCZ1fHqVaRSp6x4e4sy4nifr2bp5tkcYMayRa2zg2pUTLypeb5MncLomd",
  "key15": "3vrJijstTE83rysEqDRTx2FrRVaiEyZyBLG3NMr5tGw6Bs8YVtLHJDfwE6c9AkpE5TfkgJ9vfd1o6zTtzsHK3bhw",
  "key16": "2meMpPTKQ3tsweQkxNbViNTgswihJtPHbjavDzohDsFXoCG7TPAfmWX1ApjTXfskxQczrsnQB1F2oGphtYzoGuY4",
  "key17": "4QqDw9nWVxRSb4N3j1eB77s8ZzKs415sL9z8wzAzTivvBKeUL6imddaah6kCZKb6LHkkriSHs1xuyu2PLg3Qx13k",
  "key18": "4mT795jtHCFSc4RQp6bCQspstiMCrRp7ZLmHQm9oqrSZZSQF5vAg3jKYJsLHRGagmRd2WoLZWgPuSur66jHkWxid",
  "key19": "EexRRRLHu6vstFY4qAaekau7QShrXtTWUi2tGzT9RFFK1XwDJuZheaL2piV3MCh6qYd3Mg78Cm4QP3keo9iAUdb",
  "key20": "51vctJY1FasZtzYB44ovMQMW5zmCmcP2JvZU6S4droumc1VKBnSyjGGtVypSUR5Ts887H1YWUpQNzt7DbmYomkwC",
  "key21": "xiSwTc49gR4DPm71xAPn7piP2dftTZPLsQGdAFwRXwfqmm6WDgsJ94cma41AJbV8NMqBmFXzKEnyiPQPpoZgmoJ",
  "key22": "2MfBraXXyuuaC2AkcdHrv549guB5mPD7WkUfqMwxDoZxv4grpUSfc9Q7hNdcCWcpHYcuYba2y47iTAUFFduno319",
  "key23": "2P1Ski9ofqU54CGwndRwTSQCoWCnwHTUKGT7BckGSCeR4e6mMUTqXZjWm7dQtkAdBttvheN4BvYtKc1RR7zqjz4s",
  "key24": "2vCotV8tXNcr7mtHm3mGWEz1KcHTdRomhLUWL9WmEZHwUY6BQuRDeWAPM1PAosTJC1SoF8W2LYJ8C4iNfe33vVUR",
  "key25": "3ZhFGFEwKpYvnhEUTP6aEAmNXWppX6XE7nKDDyjfJaBwghGkcM7aHTkJryqwxDrBZdSgLjypKz9LDSwN3cvNgS5V",
  "key26": "2F6yAWRPkv3PcYZdJR9kEPQ1tcWnNrTzyAoqZk6jw3GGnZjLySELWfaAE3A7aBc8Gb36KWnhcQmZQo2ftQjCfmjF",
  "key27": "3a4XSSu47cZpK57CSNSu4bcyWQb7AvyENSDhkThLeWk3qxYuzNqciw9ZQymzwgjX366eJGXzNVDxqie55u8jKtCt",
  "key28": "5uUs5LgmiFXvkFYjXQY83TnazZrMBbNwiKSYKS6SvxjCW44xzoys4WGC5kFnp6oG255ZjRG3JgKYaCbT3c1G1AvC",
  "key29": "4jJyb51mrk6KpfyEehRVQt9VKTVA7raWMYDYudUNDS3bbCcoMxw67ePaiV78eiEbrBwRdefWVujD9FsZVPBfFrFu",
  "key30": "4a4Y96ggsbzYg8MaxQPy5cZWRioNaEvGw3pcg9QyNjFgFu63kuuoXaLbKzkUxDnPaJSUkiWs8CH2snZByAhDrWRD",
  "key31": "3PhEnBjkq1ebhLQzPERqjuangirVYzvt8cxpAiSYd75ew7rxNqmSiWUWStAr2Yt1Maa7MYZhxqJ9Ray3PF2PANNr",
  "key32": "5JTHcGK6gpWfeCvxzVxv2j8114MpLamAChjLhAp9Rgd5BHFZkn64BNNhTgQGSzcrqTM2AyNxhAeJxLXjGUv8oxyz",
  "key33": "d7tWpyGQMjf1uGQDwSUNnexDk1sUmM8Xrcm35VsX9KtLYsVAcBeuJ1kwDwsCrzK8U5xDKT1ymSeFN2nj4sJWwby",
  "key34": "3eoYGqoftACR9gesxg2YJfZnNb3yCBWFHC6vtooSQy9AieXMLdgbZVf34F3yzkcARhBNGLBmyBLJxHFoAGyUqCtm",
  "key35": "N9jDwyFK3AaqJ7heAc8CVs4Y1Kn46jMVx3bS2cr9gHWegkLKLivNMBztR3ADQUQnwWnBZJUG7JMPk6a8rU3cQto",
  "key36": "3BYdzygbPkotwxpVjZftb1RfZK6EiKBMetMuhHSAheyg1ACKjWPNuFVVeAVWCCJ7F9tzvS8JBuZGTsaNx6XGQLMX",
  "key37": "2hH2P4hfYWQEXMzWx55bDzrYBguYckuzj2QBTYLLCRgZzUDa6M832ZH54i7eotL1KARWQTS6HDogVbexpSxBCwXu",
  "key38": "3rmVTK1v3KaRps42efvXeRXNub5x6pAkf9gAfa31PLfkPo5HudhBj7afy8H1yNGHqmYEspfdiWYYsv4TWTUZjVZ5",
  "key39": "4MVTqabZXmnHYGnW95vi4ZmhNpiVUMRn2RVAXizNW4pw8EVKc2ZaJAXUEwxM5ciyVEdW6NdapWBcsjiy9o35uapN",
  "key40": "5Wcpvut9ZP5XUJjzWAbNR25VYV9wkeEH7hALKREiLkAaab5SJ7hWyz28bbBKd7YXdS123LHtGsbw8z3gDwGiZvyb",
  "key41": "3LiUgnpZQP3sStbnrKj1kqATaod2QVwFcbyLco99ZieEvg2yEjHgdidzzVbDnKBghnP97wfABRtni8b19LiBke5n",
  "key42": "2WVzd3cLYhorE3YRoEUV2bwTYQP96V6NvYGYKYhTjYaX4w4C57PjfHbQ8XsdrcbjnzJwCCqpVRBGnrvwAsodvkZB",
  "key43": "5YRxqcPruCFoesMkv3oFXAxYtNHRVjzUeBDUcrmPjDbsiSRxKVyAQWj5Zi4BSuJwsbLFutgnBb5AHhNeBn95ZXNE",
  "key44": "4GWxaoSKaUpsb6sNsqx4WXQm1bBGV8eZgvAj1prYPwBajVXfpW2MuufYNskWWjK7BmNGLgBNQZxMyvBu1HNxEFax",
  "key45": "4Q2vHNsykoXXPWxoQ2dNLzfVfSqPpkDeUGnqRbkJhfUjokGyMLa2DHZgpMUw37hoomz6XLojktwjeN9oMmMaZQXf",
  "key46": "WbyHp2rMHscszojbyaCThyq26tBWtQnHr1ziFUmkXM2Mn2HWGLeW9ZweH8jLKEweux3gThAuq7nXFmRxenxrpfo",
  "key47": "2J4vwhpBdZ3Aw3tZw3eh1GxsAXcFuFoUJM5TGQj6KkQq2wAP6JfzMQvzMJ3PcE61hzfkfZgDYfG9UbS2CqjNFzcM",
  "key48": "65JMEdHUCzmqM8W4nSr7Kk5Y4HYeQLGPCyVusdEvg6qHPbLbcMxNzi4ZiSut8NvNapkUqRXdnTQKcgbVsp5k7qkz",
  "key49": "53kUBqdn5YSF3veoB3GBjTsFn61bTh6eK471MvyyqPyzHGoFc9GxJze5oLRHuFZSFEBnR1rzWVSvEqp3FsCvQ2XR"
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
