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
    "4EUZty4En1mCxBAsAwWwukgBU4sx9tEPqEtzTfrYZYmzpigFLHECPaisSkfiBkrzEJsMZhcMgG253xatG6PpiSQt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46ANpyU6pxqE6Mf6jaTzzdhpzYebfbogaPnA1SeG9RwtcS5MrWyGbb3aFf7U43dcdkWQDZSt6zmHpRy1LDNreqfq",
  "key1": "2zuoPghuUyEn3nwxSGKTdWjmTdvNaDrZgH4Xv1aS2LMufQBbR9Emap2dTVHZZPPC8EamcFokKSQQiw4sLonkkxqK",
  "key2": "2jPgcVMbLxRTJwPafUBQMo4pHTjbfyqdpx8ms7cq5sjBRrzKag6FavScBnBrmbKn2HmDsM5nzEJSUmVnyvoVUX6Q",
  "key3": "CcmD5aViQEkA2utVNJ5wG2u7uahxZskc3bHjoRCK4yUUMJFXhJdRphSZXASUazLXgy4Z6Fs5yaA5dhbxf92TNWF",
  "key4": "2uPzazzbmRs5ogrbZ8qQ6HVxw1xcuS1KpNi4jqV5xjM2FEgxQcP7QJkRSYTQPa4TjgEtmNJ4tsZMoMK671hY7A6R",
  "key5": "4f9X9fztyGGQr29fqjTbo5DKVvXZMfpKuRtKJNFxKytqV7kLoDact8MiRFMvAnpxM2HnNQW8srwACq8wNhoWV2yJ",
  "key6": "2YVCdXe1N1kN9tUMeoPJTzKbTYzcq3VKLjxkNW8XirMHPDchZKbHdxdmb6jjb92Jyp6bYqKE8Q51KjTCq352RwPZ",
  "key7": "5tx9k9xAvNDtvjCUWQr4vTFgY6aH7ozLcFYcRZUcSgPzxRXtZboVXUX18uEpDev3VmPFtZZ9cTwuQ9feQgvhPVSE",
  "key8": "3MBtUsyWxN1ftqdDCU2bxfzx4krMb9TvLHid9QVxvEaGDGG4sZDG3kQeK2ay1HqyQNU5a2yijibbXdArxMgtQFwX",
  "key9": "E4PX1TRCURuAQom6U2W1Me9WNQ2bhfZhtBVLBrgLx8g7g4sa3ugw88v47ag9rumbA2q6xVEw8dujNWzsyvsTLrz",
  "key10": "3t4AqB6xMdncakmS3w6Y8P3iPweJuz2GazTcYdjTS6j3giCRdvbiWs2x8J9TCatAevsXESrzFdW6teEEDiYjXg36",
  "key11": "31DgvTxCRjobZEHMG4moUiYMX9Cstcb9BkpAQaZs3oiwxVXLPTkenLPiNJGXNBuSkcoaZCqLvRwavYbjTSnheuWa",
  "key12": "4ySTSn7MXeQmqdzgKQzuBNYqedsQ2AkKexnP1HU9sQgD5XwCqa9APv8NXDpxCyUBqg8eMuge8aFqUFgBCVK6Wsei",
  "key13": "4iuhL3sc1FFZAEyvGZWo4fUVVaQg16UbEzvPtGgw8PDXnwEc1andkD7qQKpNjtm8zbbXmFxsNXRUGR1VJ5FrkPcz",
  "key14": "3Cw3w2WLCutEunCDjgpvn7YgtV7fwXyq3RWauvYtoMCgzPx9NXtFY1Nc4JimrP8dmzF6Sa3Nu2YYQqqz6eBfLwy",
  "key15": "2cYAHrVYdT9XRHyvdG3JcbrtFkhaanQiR3yKRDrJoSGxzn3Lb8YsC2Y2zB3XPziQTFdCRf87QYGAkVgCvyfMw7j9",
  "key16": "5kBYogbJMR5M7F1zttrMaa3dXTtCbvCDKq92FDmLjy7tLEBe8WvESMNBtHCdJ7vhJ5knXrCRfHX73R6TEjxr8Yhe",
  "key17": "4JAf4rPpUQcG4VsY4BzxuqnDCHCS4boMpVx1iRSX8xAjXXbowDEjn431x9icLZUX6AU2bfyXPCyd8Weh99uf73iE",
  "key18": "4qrez64vCz9bfEqhhQq6BHf9u4R4C8Uam164dqUERkYFx3u9kG3n4VkedQZwv4dvkyHL7q1bMMMMDZSedCfwH65H",
  "key19": "vcWDNinpeRHAzrEvLDayP3caX8smrcRkADeguTUBWrN2Mzd1uxEwFsW75MQ4rYRxinfLk9x3qNnNqBu2qneyoRA",
  "key20": "5po6nM8rKDSgmuVxZAzUBaL2MrFhyPARFa3iBD1jc6NAVjPhopYCXgpiXeHm3zMAhn93miyWqdKCiDTGR59yfrkK",
  "key21": "25CF248HwZp4y8bY6R7yvV8teN3G1RTvXqsUurtBqKQnr65XgjZ7dUpUrk7Jn6xciqXfTC12h8XKU1hR87ycZn67",
  "key22": "5sPVYRXqVoPHM2pLHjYvrvSVqse5pJ91GAwhvzB5wpdKfFjFtDv8tZdFwwJ98WndbkcsjGJhpNWmw1kXEQav67YH",
  "key23": "57dutsKbpMGTAeRXnADzo1R6eEfAwMEYaLXPmdzfsap8tjzRXzwGgpKojy7RRj9LsxtSuXKt1TZzk8uS7ARbWRpZ",
  "key24": "eAJwm1TyV9Kdqn1xpVgNnd5N37D421SSdUffY3VCinbBSyeQKwEmQChMh6AX6bZkehUA6oKMCw97sBvJVnyww58",
  "key25": "3B886Zhps5R9QE7T4FYCNXadk6n33p4KxB7KDZ4evZnokwWeGQhGfpZ67qbiVFgE944FwZYuEZgVPGkyfoxtEZRx",
  "key26": "4yCYsWkffUMi4mVgAyB7F3ykAEptD9KGXpXC95xZbhs2kxWW8W955HL5h4PCDYsWZYRUgnfWVHqiogqN5o52xzML",
  "key27": "64S2EzxYavpFQxTmYiLidZzAbK5wXgKHsdyBo44MJ7QwN8Pv5CVq2X8UM1PHf7cajbBdXSaahDDjX4E3HiSttT1y",
  "key28": "39TFkKuxtADExYD5pSoEmgaevZssJuaAeHAi1NK3DB4KeRz1hfoPCgkHyPVRoENGqGNYX2ysMCChqBHz4pcZiPsq",
  "key29": "2wvMSfBXc17uHTvFHLtemPxLcRDHJkL1f9ssHU8FSEWkaJBkbqc9FgabuBoEoE5V1HTZTD8ngHmDYvS3Yhxoec9p",
  "key30": "2493hKyNeyBKfRp9Y7scquX897qtKGY4mdg76hfH5Q4Sk7wygG8UARuFzPiz8anZCTvK3uAbJzenpi7dL7EtFh4V",
  "key31": "4GjqLRgVj6dyLL6NjVPY7bvEdL5FYQBwGCiR6W53CYUwpPra4UsfrP5KoPKjfYimWf24h9Cc4m3XstriwUdDbrQB",
  "key32": "5jEWJFrzNw6wumYj5dQBbRGZ88jqsDiXSZwZ2ngvUHnVEwgpkrxuYw7H3ooFtUYRXhb8aq8deoUDR58T7yJ3a791",
  "key33": "2dk9kjWY7NznGVi6wRHHuFbwzRkHJdyUNmzJfGPAt4YcNsVLcpmsmLp5bqkm6RTzFRm53dCnVKaiKembzX4WWNpS",
  "key34": "mSNbQWv5oLXg6MtvNGhD3tigQQsSCCSMaHcxh3PehtApuXcYmVYusjPNhi357sUmjcSjsdgZ6ZjxjjbJQNXsgSo"
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
