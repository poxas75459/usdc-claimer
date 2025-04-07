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
    "2kA1bfKY1UnYQK8rywejdfrnAvBDtmEBdpwuPXSY9nVYnCAugvvZuvV13A3dAVERnLvQDYcpJRvvRYrgr8ygf3hY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RmZWBh21h3VBW6Xcf38s9XfTaN6FRzzVDYL7phytDCBisXT54SSUnyX1MTEyrJ2NFFuUaqJStXqNxaYX5NT9dKg",
  "key1": "3NqaBQwm2zzbJYRrqq2JvKJ77LjmWDBfKvDwqgMAyDSaNJoSW6iHWMyy5NAcAn8rUBtabPGgs73GgRSHZ6t8FPnB",
  "key2": "3jn9XmNpKJTqzGB9WSrdFvfSgdCRb5RNPuBV8GiPb8swnZEgm9n3gJCL6EsBXQbkBfG2rv5ex7FwNY5ugKr6HDxR",
  "key3": "orBKf18feKQBBy23v5HJ1ZaoAv5zCtMQuFtdUH3nHvzpUccyUSGNsjBx8Be1Zm5CL6P3GvocDjRjzTFncGhUXFm",
  "key4": "s1VYvkjnbNNLDbRq5sgfgdQW175YfWHnhx8GiDuaYxfZd3TiGaz9y4tZsuHEdeHqnACjtk15M5GJFkEMUp4hEy9",
  "key5": "riPuVwaoxKP6j56uwarj6C2oNQD6YNBsfxrLi1t2hByfDNQYqGHoM2nvqMXqpXV6GmdyzTXEamSgasRtEzSMLeX",
  "key6": "1wcWTms1zpPtEkVKuH6ACKGM9TkZorccjnywwZR1oYySQ24xnHWNa28xvURvag5VT7fKbuYT5sxTWVeskWmJWz4",
  "key7": "7tbsvjcDwxL8yjXXsHbZTXGMcpqKQnwgdoXGhJHMUouCfFH87vX3qVWWaqpHRdZWSMR7DfXVtSacKUQxPqzj8DU",
  "key8": "3WQUzqeHpuQ1MpK2BoJAonw11urDkAKBJCxH3Di5c3pCgRhxoXCFSUoM7bAzp5uiUi4g9Tkuoqwt3i3gd6No1YPb",
  "key9": "5LLz1yJ1bFuaHmtWthBdiaSH3bvi9AqC9omrbrb7pWz5sdYaJBYMYYdqLrDogAj1r468Vj6oAjTyDfHKesE9wKb3",
  "key10": "3zvVbJ5ZpBhL4auoQtzUgb8oZPAFdNDZDsg5FydNKzKbhDiDhBm2ntweJ6W21eBiiRjE7a5W2prDrB2GvPs36udV",
  "key11": "BV8kcAebLSjonBPjBvAUHjrLtvn3TZJ7XVuJrRZDEBKWr88mCZhgnBhCNVff1zTgXgC8xKSrp82RmxwPUXmuZK4",
  "key12": "45iVmzfgoU1Z1e92Q5sMGE5X8ex245MV6ryBKxbihsRwZ77AUFENbnwqCmWj76FXPZ2ADXyh3aWaRTyif4wzimtd",
  "key13": "2n4cPfvaSP9saAGtwZPPtp71q7GrHBTMervxPk6aiJKv53Dc65yTR6MbsUa73sjCPNqAzSR9ZEPcACBcurKGRwAY",
  "key14": "31D9JjtsPLGMy6hqyDE5uj8NJWm2hgijxFbJ56EDw3Mf83LP1rWnPFXTwbLhbXbk3s86eR2qs9p4Jq2cVeNLYJkA",
  "key15": "3cJFdfkFQWPTxbrRkneSstLgffUdyEjkD9aujijGzxttSEzR9UMMz9ADSztcTJ52FLCFXtzzssnMj3TRWZYU9WWy",
  "key16": "5rD8ZULrT94xhHBLMUNYv2Pnw28uiSYBY7Z4QhoVw9i9X5gtj1fTE3MVEfo1meuuApmEwLQNT3NuJPYcfFcPfewf",
  "key17": "2TUHyb9rMN4VZx5Ph1u32XQwsJT74rZzmugCrZLkGtYDCbMF5BGnNz1thHeC2dZaDrVot3Y5wXBfjG8TxuJf6M9F",
  "key18": "2nrTpX713261GoRbbXdMCqKZcufxtpEcGZrVbbMe6xub4aTc9FdapBLfgzpiPUfgmts1aqys57nkg7w2K5y6e4L7",
  "key19": "FqtUK19y8LZjv39HpDQpjfMerzk1SBVkyDsDPmAsaYkK2WMjqtVJFBPQkoyq7zytstDZYhzr6Q69UNX6jNtZYo9",
  "key20": "LJenNeVokUm4jE2sxu7ZoVBXm64tuEASRuKVNVFtVG92hi4HsTcjjJqVtQktRexLMnQgfTRKHSJsUqY3qbSjuYm",
  "key21": "4G9wL1Fmn5WCCLc2uATpBacYEZyv6oHuG27LPySzM9XHNXQvTXCDhGbMipdQZCchpjLLjevR1oXeE6PbULKiBtjf",
  "key22": "3JKKHKoh2WSaNjRT5okWeupoYXc8XWrbDVwQJdrzdNsd1h1akw8eAyvC14Ma3pw7ZHZZYUwbNo6GjYkF4v9eSdrB",
  "key23": "56WXYe91vWT7WdsyNAQSCRWrVTxpQAoJWbew7G7vSEWrNDpTQB3nNsjD3mavQbsovR4su3X2UNFxAydKMrK8G2KP",
  "key24": "hWuxLFpjTUSH4bTi59n36XpqbUf69myyv3U7YtYveTa1m1pqi8VnewzuJnDBrWoj8h55TBGnbDXjUKwc3MnoYeX",
  "key25": "5rMM2g8uhAef8R2bfzqYBz5SWaDaMseSQGRhfSh7Tffusgc9yr7JuHiApXGSedv3YGguLA4czgJTzyBhbeFLPrXk",
  "key26": "2MJvSDCquktAR8exjBifR69Go2ixCDv9mJ3puWT4iUD7RiAWA4HREYAb7hxHbqP4dFt65UCgHb37PJVQJ5FiMU36",
  "key27": "4uDVvRLaEfdVUfLw7oM6aXYkv7tfjRj22ziAuvLhZjccagSbFeQTbnC7nW6wmkzFxwrSUkGFMRGoGyWx66VHfK3T",
  "key28": "Vm4xngGTfXFRjE2armx1YYhKKVePbnCTi6dtSL2SC7JEQceyxj9ePkVXa6kFrHHqurtn89WvGGkgjjxZuLyLDmu",
  "key29": "9qnGcHHLg5fZ8pyhsELahgURVZPieYi7N5ofkkWgnH5hhwAZdZiVf9hTR7MPBktWgpJC7U6gq3wQnRFCAniXZtS",
  "key30": "23dRoVWY2U5qZFqU1nFaEbhNvFEkTUnmn3mZoNiZuc9k7pFJNZznozfchnAY4DXqwNgFeNtZsedN4DsNBC6SfGox",
  "key31": "4ehyt1MuzXmN4XAQnnspbjBKiJPRV5c4vXGokR7KghJP4bye1yWiN2pmwyDPkKAXy2FNf9XDSjfMbKM15x1dZAaf",
  "key32": "43xGkA8T722JbiQwqf1ZT96Dnr9pmKamCTbs5Qe4Vg28YtVdVHFE2GiD2GnnjQY3j1xjceJNNNzVf6wjwVfwwEeF",
  "key33": "6GPBAJWUFQ3aHF2idituyzUzWRgQFidpgihKeFySXrSjxQ7gh4RF88c1kSfM3NtS5zyTMqGfydh2bq4tr7D3APt",
  "key34": "dGZYGgK9GbE7S6n8rYDKRTfGqKeoYapgLGZDm8vWfeAfwemo89K1W9UdFJ8e93cKaidS68KcbBXVw83uuP1Hizd",
  "key35": "J46b7g4pCrDgPiAtHP2oo3UBip1bZ23SLonbnusY3szoWQnzAiSB4dH4U7z9RxT1sCAtqK9a77ysHPYEkspMDYn",
  "key36": "4mociLLp7ueyZYaigCvoBii9QSFADVCMPYi8h8rxyXEJ2SWQt1pLJoXBcMCT92xRPyVhddDLV4BnhwrPYGDvnWRV",
  "key37": "MUavrzxvd8NWotw22s87KUSR6hDGAH5i1UXnjdpYmXhq3opJShaa15Sss3UXHR568tyn7AxoPXptPhAMUVmWx8K",
  "key38": "2MM4nNmtNRqzeaaEJDE2K1o4Mqtiyf1QFQ3jtFzSjgAEuu71MRGpQ7tSosuF3MFbd6Ewfk7bVQwtRQpjhsJviePb",
  "key39": "4BDKLgt4ziipZUzFeCriFQQinthHGcyTEeSXKrQZaXxvuJQk3Ghovi1VHCAzV6s5jExgyUc5FiaVbrdVQmD9Pxty",
  "key40": "3gfnbeds2iAHUbgr5cgrCzHVW664ofB2ZPdbPgzeghXxyjwVDg6BSMLiSMfmDe69QWgxQ44j1ET78XR3eHeS5nhf",
  "key41": "1UmNiC4TifLudd9DUWzQgCd4odbGd2E87fY9JEurxNNzUXPHW66LTe6nq7j8kkhYSRsu6wJpzG5p4HP2oz9Qemp"
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
