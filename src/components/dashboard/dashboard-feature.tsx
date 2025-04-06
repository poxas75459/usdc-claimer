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
    "pSdccGwqvziPF2f7dv9WhZ4aJmhv1acDMbf273oqHSTzaWFLaSTCb26nUqorX73JgfBCUDzfTEFyJ82PTzS9Noh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QhJbYsrf4i1W1snBhfM2Hr4do5Yaz2LEne1AkVGLQYb3FCov8CqYd4CvdruFAcLX8Ji2W8PVXAqm5zsNx1KG9qh",
  "key1": "78Pq3VBQFVY6yyawRNcieh1sr8Kg6A58sgcd8DYq8fTxXdU3B14BMqYALiQDXi9XXz9caVuVzf6ALyNnC5GSNWv",
  "key2": "58zZP822hk4tDJyx4bPCT2uY5BdJeTRiQSuwRZLu8idd5Cu8u7kSpmQ7hnVtNifi1v7zHXpaFEHhvtKmtB7DQqBx",
  "key3": "5EhN9DKzqRz8UB31gtmRvUzQDXeizuY4FtbN5Au8GXHSA6wPmZpwXAmQjQMN3UrBbszo7FQbqnChm9N1t3BEME4r",
  "key4": "5N9D1cbBDH9DAKMY4c1E7aGkUUVKxzHadenewdTFv3awe1uwnjzemVZ1cweSsvAVfQvUsLHDamYY9xovygcSfJqG",
  "key5": "iQ1xe8JsXtpCkGw5NKBaMNGJMPUDdpCiNETciXmPo4Rwi5YTNGEA6wctKKQ5LbWi1fbRQscAk7WkWBJc1eLy5Gy",
  "key6": "ntRxLYNN2Xuz46ZHn8d2QbRSE6sSGLTFKELCcGMAX1Aix9jYXRMgrg24Q9zSkkFq1gut52eMg1PTtBssvZ4RHzB",
  "key7": "5aX1MDU4x2V1pwkvE7CWxE6qXDHmGTwW7sFGLj4URWZTWjsAZKpB9TbsGf7P1KyaWWbnn93xpNEUjSN4xSgHNFDF",
  "key8": "27NZyLn5tLG5DUtDzNQvJfkWEfgPpP4WJqUCRnWneMPV2hpttsxwyw6DhZbgWZ9NB1t28mGDRk1g9z8MU4YA9feq",
  "key9": "57WrRFvoYaB8QjbbV2umC14zYk6a8oZ4zmXiat4M6KExCnN4mMZCsjCp73QwbwmAjDJBgurffyxVqUWFn9CPmhm",
  "key10": "3DwzF1jvbXfhDLbAsUNVPLevhSZ2tW8eLUmJ5kVDRkaN9bA5TgYXTcYf5jMZyR8PvR9fksXyrQnrVMihCZ1wTSDE",
  "key11": "U4D4jaEggFYbZ3BR1XGjhZAS1yM1i1vd19tBrUYE4bRK8FppvUqAckrTfaLvNDYYRtJeSYN759J125MiajfLMGR",
  "key12": "4YrB9gULb7f4AaLJqdLRPPu2gZQXgkpzQ4c2cTTDRFDGRMfWNNcNCPg3GaT4K7q2qqsYoXMCdoN8DBJYF2bvrLrQ",
  "key13": "2LCTpcpXHCZND2Y1czUpVu5TLmxD3go1gQESfJ2odkG6BGmaZP7W4S1E5etPbqYHGg5D1xb14cTedfWA7RKy4QRC",
  "key14": "5buQSYQhCc5SxEwBLq8DK2P9wQ53qQPHw7oULF5F1pWzQcGH1zFyCZinBbaoCup3TGb3gWHUJTfXUgypBw6nxJXx",
  "key15": "4AtndCxCfUAFtTFS84MeMaUtGMLdXJTYapx6bnfeGDnGUaXiXW4hWvbKsXDipBL8cRFouWNqAbKKKFW2ykhE6xEU",
  "key16": "2dM7cWDhXsEiegemRZPsHfra3QbvZT4RkL5d7TgocvDv5GvCWabyLJJtWL6xyfuLGpy65NsqSvfo5TX69Yu2YAHe",
  "key17": "9EqFPwSCBYsdY4oaYUyxybVzQMxArppZWYggqDQc9eZXZfbXBUhKiHbzsv6tNeXzk114eJCc2L4kHdoL1rvAYKi",
  "key18": "3db3ukJEpnLEXHXzfs3GhU2DRvUWGx7drt4z3ZifGaz59WVzWJH7H4xhw3YuRdMKozeEEPKMrpMB55Vj1tHtC3kb",
  "key19": "3DNrfConwACMxFLcUP1fukvzd5FvUqedNTnQtMjQWdon1KtbqeZpkJA6kyEXmevqQykN31WsMySZ2oSoTxfme3pb",
  "key20": "35aGbjhuTmQTpqpAv7UkohMSH6izCYzWyDmF1rpxCdhe8XHA8DBaceg7J9P4a4WYLiNS57eXhNCpaK8e8ZgsfW7h",
  "key21": "34B3tNLpng3GBBqLfhq2GmoVbsFRQtL6kYdKzmGvgS8MRtKBwj6zYk75vf1w1sWFHHqyg1xEktWA45sUBJcBRwYL",
  "key22": "5X7qE8qVEBoaWmyiSnxD2K1bYCs3DzDSCnfDqujmsUe5MoCUX67zWSbGDMpWoFx1WfBVLt1PhyKCF25ehEyzPdSf",
  "key23": "srXYtnR7eaUXArhPX8brHt52L9VDAqAi5xSP9Q4pRyFsBESuKw7brTFZMJCnJVdFtNf3pjfdFavN8GhaghqH8xn",
  "key24": "5wiYwbQGneifygpJDxdWJUpvGRpYg3n8GREoy6X6GtG7E4dw6MViTBvTM4LMYJHV5X4Sc92dxqLb144fX9Va6K4M",
  "key25": "C6iGshVQNPabrJ8UdKDpHC4RG9Dw18hjnMgbEToxvWr9VX7A9htC3LVbJPsEoZXTm4eUn1f14Zmc8rohCy8vwQv",
  "key26": "fAdyGJ92N5yTQAdtr59uVeYzWEAbeHd7U8Jznd9v2aRPrKwXKhBWWQ82N8SMDHbh4Z4K6gPV85tuqnRyo3KKaVp",
  "key27": "5gqdPPszh1fpBosRQPuSqufSZSX98tUR9b8uWfPcipykLgqNPD1HU22txLxu7KvkGGFoGviuT8Zd71GBiATX28Li",
  "key28": "3i1JWCqyjQiiAK29YsRLtYq5kp6Zsw8SUHf5dC9rGjLhFokWfhyZtYngViyaAPhtF2sc5mpKb6YKEsHcyjRBXMYi",
  "key29": "2gEjv1DVahMBZZbp5ggf2o2B3CtHArin9uS1R5RKfV8VDtFnwNVKLGFentGuZfyka3zvRKqoREPH21783oWQUGSG",
  "key30": "5V6AR4jNGbZKu2dyQdhJVnriQrUEJKaeNPKypvQaLq614XPK4UMJuDiLTfnu4CPTmy6aGZB8xHpJ4iLG6MTLXC4X",
  "key31": "5t9hh89SKjJZn3bZK1Yq66SHG7nhuV6N4VC9TKVCUUZ1LGXZ71iC51juRd5sUvkm2k2CB2Ab7rETXGRTuwpwbrim",
  "key32": "5hJESwCLFAGByrgnKXr6p5DBFxL32P9YL48fnU8vZAMyxiHTd8aBMwbbxZirGfhfBjqP1cbNwbB733hvu5GdJUva",
  "key33": "4Br7oqzcjbpPYnRcuUZyFs5EJkRhcds7Ewp1hZXtN4fxQqorpBjHxVV1qbU8N9Tk3oHd9z7VFdD9DuCEaoDEcMac",
  "key34": "5f36JF3swcb2eTHBfFprFL33s81HtvLVt3Mt4mAyomtSY8PXfJP5po1L6Q1niG15m1EGsB6VZpAZVpQgw1qFVRqG",
  "key35": "rkADjLtcG4bWyF8YiBmXDntWGzWGcZCYVFZpJxrnARPmV83sqf6JdCwX3Stcnsb5PtHF9mz8nJsjNC5dMAG5p6x",
  "key36": "DVPmAQcQ9t72NxQqkXCSy8RZfF1A2rvewZg6ujTk5eRGeNrRHKukncTTz7wUrTwoEdEk5c2rkoc7b7cd62JEvc4",
  "key37": "4K1CQnzcDLi45cbqnAnngLYTAiD55MNsqbAjgEzg2FzogK56E86kuAbTcb4vhCCRSjfFikuRmA5VxE6ptUyqTnZP",
  "key38": "2seGR8XdNfHDJEeaiuoPucrgWJaNKnfZ1s9ZBaZZBPnLL7oJnEbUK7jJM2wQvooosbBtkSiemsyYXfbk1mAEDuL9",
  "key39": "4qyn3hDWYzkBuHAt6dw3PpaGWXVaqgR66P6Me62yKW9EhPkXDdkvmTzHpMHUUrxFWCeh4uNRE3xTmVTrtR2jy5oV",
  "key40": "2GYczgBM56x3eCKGmv1tqYU5LvYHJaqn89up5zXesvkoJwdES3zybxE5KGziGoyADqWw9okHBYJnKAVQuvPzhpQU"
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
