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
    "2nXmj2Asc9m7Ak3FSNEngqqW1admGVNccYJhJsNE1bEZuyPkQK7bJ4ErXdKTD3QNzembsosVu1miAyYVbDQ2W6g3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gAex1T5Lyv9i6Anf4yA1VvF7e8kkKXdQE4UQpqrx8h5FQMgbkPYzgapjWdVBWtQoaiN7zGxePmnAuBPTVDWee8",
  "key1": "DaaCqyMKtZWS9T3Mf68dwucCrDE3yWpBp9s6jGRtjedDJvkNN9oW6gddtDuPADXMviiDmp2GgaYK5cPzKwC51vk",
  "key2": "5sLSZ8yzyPDba2G8hqQjR2V9SdcjduaoCzkmP6vdJ8mDQYgthErT7HQrC13fqMHHH2pdFVz9gNJupQzpuAQKJK7s",
  "key3": "3JkhN5Jj8BFJg6Eoxea8uPDvjYwPxEH3hVe6E22DewDYtDmy5xhGbxCsd1cN3Ck2sHEmUgxCy3c2w1rtKwRXfkk9",
  "key4": "5dLNZEakUMGGg89QZRPVVopowj5tFbMyTrqJTabk2djyYFXqGwJ9UJF1f2C5AAnahPbECYU72pLM6yoMWC1WFg5n",
  "key5": "22RCUPpgJd3nJkrCog1ZSedacegWmB9nxwzmDWc8prwGEGdMaDNTrs93YJSMowAn3awuZs41Y7K5oYB44crCkqkG",
  "key6": "5mTTAFZkQosDA2a7rHR8npnLw5fRKHocvSEgVmxaTjThyTDmKigxwd5K6XKu6DMYvTo224Nh969wnqafpHqoQkmj",
  "key7": "DYVUpu5bzDQe94deRbnwLPtsnm8nHumTMdTzDWCZMX9YAMUSFZS7YTsTAvyXVrp6Hxptq9pAnGHXzGJoKq6jHFJ",
  "key8": "HmciWppGhFRVDbUwUrionLkCradfUQPypwkE3Fq4uXdTn7WmEWacLaNV4pcmLzRLD9U33gPntvmkoyQ2XPGFsH7",
  "key9": "V5oTvpNwXpogkVtns1YwDruneymEG3DRwmhV7DVxkMfggiWbcyn9YhnPTy4RuqsrfvnQTzTGsrb7d8TyF5pJ6yU",
  "key10": "4rcjaXGoUNEJCF74zRFN1N2g5NrotmTtqMdxP6ThCG4rhL5fXj3ShxX7TrM4rgoNuMbhGbuKrNg8Drem7Zkw2atU",
  "key11": "4WKw15kUbQxdgEQjDusCUkA5G5dfrDi5Bq57A5kLgt67dGftXqvSrNzN6fgKPEqcbXoc56iGzAxhUgRo4oEYFvQ3",
  "key12": "5Pmk4ooHRAWpBr71jNhwn2pvsQErShkt7Yn2hxzUYkCPjgGqqLGYMaxfW3YMAjNfFiXjHTev6DimoMyqshbixzyy",
  "key13": "2WvcWPQAEM65CoKZUUYP1M14AATPHkJxupkRGvkXGTfEdebdnoBRcqeShC9VwDsgXiaPdqKxp4xrfgMbUDvoLYB4",
  "key14": "2CmMRBrqzJu5wArx92FggXrjwqvEoQWnxPgXG3D5prQLLBiLX6cxbEAGB4GTYHq51xhozJhqmpWpnBjNC2nmuffD",
  "key15": "g5T3qSHj5M1RUSXQUWNHgZL81Ans2SoELDdafQkCPHpFuqxLfpV8scM2EcCq3xhhDeaqEioPfbwUst8zbZ5n2v6",
  "key16": "3z91p4zaJC7rApYwwZJf1fC18eLMWXCxbfcwypcUXf12EpNGH7kiQdbzZbGpS3jh73cjs84Ndd5vV5zYAycYf2ZD",
  "key17": "5Tf1JhZ8o4b1qJHcFhr498CcpM3jusjJo2ELrJpZhm69QkNRyXdqwYPTnnFGN59hCjxd4HUzf7BHrNJQ5iRYtYcf",
  "key18": "bjBbdsuoN9psz61qwrytchYj7uBfH2hrmxYR6ZWEw31fRfsmonpKfnxjRFVzf7icHyeQcnpCXQi7cVEQZkHrp25",
  "key19": "V3dwph2zgosz18V6pej9jwWAHyimDH4kFGJfTUCGxCKevWzXGtVksj2ogAhBZxJX2e3BnEaFwgSnuuFxXfeW7y9",
  "key20": "2vp11KTZ6UKGhjuzvVw7utEdMe2xXAdEHdCVfAu3t3jZBCz7ztySkeiWVDuyhgoSNNFvULuCw31WbGHat9b7UD22",
  "key21": "5FxTc7tohnjVthG3dq1ZQWLE7shn2gtvqAone4DQMGJfK4BofoWSi7ZWSEw7hC8Y6oJ7wDyjFnnJPv6tRnkF88eV",
  "key22": "2zYU17AhsMY4hfYeDtmUBMH2cwBe2HQH8kVtRoyNUXUBYxP6wBX82MKURFJC1QYDCTmL9WHvoN3ja8LbHyZWREcN",
  "key23": "4ErcyPTNUEZ2VoTdGUyqLXqXeZVZp1Md4MbMnWf86YBZjYHcWERXHmhbTH8S5FhBi5foaH9W6vQHVjnodPbxCuXJ",
  "key24": "5PX4DP3pKAjormB8uNKNqksFgw9Qti16QRFjktZL99RwtYur3tktE9fTMXXNFY63ZJttbDJMNAboErmq2C97QTSh",
  "key25": "EWkDtuRwpqWi1V5VGXDH7CvE35gsMJ2matmZUxK4SPFLvCrsFxPwtsd64fLV1YdK7XBvbMcktLJMDPSsLVrd7yv",
  "key26": "3jVggXwubDH4gFAzUPp43fzDhyc9AdYiEPwufibiVnmJKA1XJrzjSoeY1vHGGWMuvBpZNw3mzLzu1v3WcZGQhtWt",
  "key27": "3zS8tNEJ184wJiLyM5pi5ZyXCHB6m9H2nK362mCobmuuWe3V4D5hFdT2QW7qPXZke1ABFHa85Cf4kK7tK5oshi7b",
  "key28": "27UuJDbQwVNQ4CQ8sYx4bLGNmzjL8xZqHKi4Loe8bq32b45VmYkz84hHEb2UVJZX5XC9PnFAS4ftcy6F6n6WBuwX",
  "key29": "5DmaKTxnbWafuML4nAGv1W6WSA6qJKALfPpPDs6uKyjSRzhjcLBc1YHnGoTzWpcQr4d9PxxfFaVvC9Rpsa1va76J",
  "key30": "5TohsYTKaB2XihTk7ipYDbSKEzZABpx8XkDkivE2Zd17iQcPGwPm2TedAiGBxGLLVfTVCDe3BA593soKfPAtKqGM",
  "key31": "5QbcEx69141TBVZC9XdfMxf3fEvnJN1rfa7trQgQqTwUCtRDc6QrN6tkE2maMXc2RyS4gdgLiqMCp45RZL3a7JMr",
  "key32": "3e8GySbQtSFEL8KSHJa2esRbKQ3T6JSQjdFKEi2QogqCx3UWbXpeXmsqWjb14fBvTCCawT6dbQY7SR6aRxKfXRMs",
  "key33": "3Uqm5q8dFhHCKSCutNFNTkmodRP8aAqEQMK5kDgdX9HvpEzXX9YtWqgsGmCYt7i4bKHajPRkYqqFDAJaBbM6jPbv",
  "key34": "4pS69EPkERQWvC8ixB4jmdHSaaUyTSFTvwtFPWd6ii1QFtrqWF6eaBNRBxhS7fKwp5h8VvBh94mKNyvUmhdgVVLQ",
  "key35": "44oJmXBE8aWhy5kznYYXdG89yoMVKVJSJCES8Vnuamd3hKx5d1Mp5QjWKd53byy6MAcRLDg2ACjWeBa3u7Rttzst",
  "key36": "34CYYMmiHpm3SCdyLKXZzj6bv4QTm9s41SqA796GoSpVArSNtcsNQJCjuXpDytKxbEd5DCWV49Lu45D3gsDaKjBd",
  "key37": "4HxUUtP2QbePGHuocZhxyC7kUrvpGM58G3Z3nyymk3s8djvmsgp1HoHMwZufejXQ3jFBgmfWS1mbnLHF1r43egid",
  "key38": "jp9v2C7dKw1sz9A75GBNTcYGAgS75YfzgGRiBTy2jZDM7HRRxRpJwgt8CFSgBH3qEVJzpHWpjKHZ7tsm2X9PJV6",
  "key39": "5pwiE657CUMMQuPSu8mGCcX3LTT63vdwpcpv8cTQrFVQjHguh9SXP8hqMh4L6qbiJJEFBgydpVPCaBupNczebEzZ",
  "key40": "49FFvUrScXLwv7CauSg52nX37YDRCfVKaxGvDodehxLzXKoAjdhR3emKbN1rTvJ3fu8y4NaUUWomoPMdf9fuoWaQ",
  "key41": "3xRA7EVJEChsnnfLJPaDnHQY6mjTDryNL6gG5Mt6Jie4Roo5kqqyJaNQ8X8fwZ3b9ugMhAQofTrRixdvzwdq3htN",
  "key42": "5HXzYv1A5iTE7avCCBzyNza8acUJJ8SQDa2ZdGHjmPBKbaSNxfXGQyfAgzMYddwW59xBoetiziGErXMQx8LHPj4a",
  "key43": "4JLJ2yf5c74ZcnRB43u9Zgf2FQyiN8te27rPaighSpPreARkiJPww2Hd4v463menf5RyiCbipsNVuRxuoL58qtMx",
  "key44": "3hRxSyDjR2tbroUfqmHmsBFRFN8VdwTdbVnvMDhDXfqut4FMNQsaxgANaQuWjgMawcbwqFvfXibHocauLrM4C2AQ",
  "key45": "481teTTuopMFBM8kryuVvuaVzrvhDSrpRpY1wiSrPNxaq7Ex6hg8pcTtsSfif58GjhbnS4VKxmeAcJxEEJ8JxtXD",
  "key46": "T8RsRvTGz4Qm7QCFfBZzWTE3bYazH1QW2ouAq5RUMP5tmQoxeTBQv5t3MjUhPNyNsG7ZHVgMFBL8ggNnNJtgdEc",
  "key47": "uM3tKM9mXeAVsPX6fe2WCnQfUHNvzJU9hr2TWuvRAh9TbhJrweaKahvTWFGXMyocEJWwCnqkc6rCAtVknqP3AxM",
  "key48": "FMPnBZzyNzuuVCvhnqh86ZPjuZKdcZaeGzJHPuoSzLpmCxGY5smkJcdRr1reabbv9Na9LLcStnBfDpPspYkVjRC"
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
