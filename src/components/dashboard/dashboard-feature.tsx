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
    "4aurdrwhVa9D8m5p1Tf8uE9d7H61jssAEpNenZjQTvT6WTSqUnVqLrBqJWKZgEALLYQS9xebhdtrib7azijWxrRg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JvXyxNmHbVPizBtYdc8xQzJ9vtCWgRrYF8EnoowZoqBZ5v5UQxiKJjAukZKUrVMiFJHJsS1CK9EqYhqMZJ49ZfD",
  "key1": "5oQavvHs9uANLtd5N5rPayMmy9cvbsaUecRwMAiLkfy4gJErT2H1MQtwXNSxiHeMJjdBgz2gP7bSp21TbZz12cTb",
  "key2": "kcfmMMTn3LcbtP6rngHBqEfq4qDjNLcfwK8shCK8MrSDNgoq3fXZLMyqvE93w6NVvP6NCjGVPkU1AKtVdu6AnQY",
  "key3": "4Vph1usEwWD2s38wJ1an2QPMq1UB4Eux72qrGFFXQoRtopjWBBdTqyZ9vcpaT3azNULn8uDNm1UtJNxhGzJyvTcz",
  "key4": "5ZMYnTHntvRMmY5QfKxN5zgmNfg9XtZwXxMY7tRRCCP1twCH8gKhWcgKpmuws23cghSriUp15nWXffVHZnGazHtP",
  "key5": "3ezs521HkXT3BSC2mMrdhAbQRJaYdz3YzG7EvKbYLoSCVPwFg67bzz63bVzzRHXQnh11n9XJFf9cJ8RXbiynTXDH",
  "key6": "34v7C9vq1d6ZWc3gpShr2LnUhHHFGcucVrhXyE8w6K7VxrLDBZZiLrGmKj7GWCf6G15dLWXywcJ7Ac2MNWriP732",
  "key7": "4JzBKvutkQhQNXy7bGjktoXXvpYs7EBARxbexg3SLG4EkKGHNWzP9ipnrDS5bKcEJWK9rK7AWPQvxW6S2SjzRLb7",
  "key8": "2SmDTLfuko13U649HJQWa3rhbChmQZrhXUi49B8FJkEb9U3HdMkLJeuNTtp4DXBbYTaXLCCZxPVxMLRxbrpjjjT6",
  "key9": "2pzcoiWmtmHM7yPyjADGZsc3QXVRTVrGBa8MriasjUtfA3P1cRjR1zPATbockH45urXG9csVymW4YUMgknRAmjY",
  "key10": "r6Zc96VT4TdsSzTmRMnXgVLbqLioG997a7fSgg9gujMZsHUwbbt6K7LqcyD8iuuLBJU995HXnpbPvfpsA4eXL7P",
  "key11": "22v7oWU4Y3wBz7RDaiw3vi7MJjFk4GA9cj78bfyHaA7iHT766wjav6iW9ZUH7C2EwaLy2MNYT2dQZrd2p9qkq6t1",
  "key12": "37rCK9EE8cFv4kC2Atm4tZnqTnN4JjSWbfb3HnmJibtecfcnfhkG4q6emJE3Evv6nrVL1HRriyMDwxavFYeHwPhW",
  "key13": "5KSQiERxa7ry1jXFU5ExH46nV4hiXNhbtqPME8owZxrd6aPggSsohAfzdj9mTnuMnj81xSCAFE5kthiGJB2ygeC1",
  "key14": "3DeEWRTvw63uu4TysY52upc5gLnr5ySAnnDxCGYws8i1jfKANz2BwcznPxmijZbTuPbn6hf2wDciwCUpmkKnsyto",
  "key15": "36NkvSFWxemJ7TiesvS7KWirqBDLxEWGxbzTLijqbMenE8sh4bHAzah5r6wnWFRavJ7WGdb3P3MsWiMsoWna2Pyp",
  "key16": "55vJyDdkY3YUkAqhyMBvqePuEKXnjKis958g7yx52c47ghUCW5cfsNoe12Z5QiMzwHmN1VpPDdBPc5eo1PUPUZ6S",
  "key17": "8iYBTUzptCM5Ktz1t7zySqQiXEbWeLcgHWfp6bYF21hwQqFEDijMPhK14ChypDfHnWiEBzBzYdKMikARxwbFaWP",
  "key18": "5KxZfE4g2SMG9sRqWxPHmtwuTn9F47xK5LXN8HAjm88YzS1pNjRF2EB798gvoByZxEA2VP5UjABxyVN6s8eWsrTq",
  "key19": "4eJkH4EEnLannGXsQJnMEzi4aFxvSJV294q8QqrtGZFceMHBx77MdyxCrTVQThHfdhAV4LanHGsVR1MDXBMqzAN7",
  "key20": "QKUV6mMbvZT746mx49ziocz51zZypCwFNLVdmxyXHbPSdBhf4es3wiBT7WMavZDd78KhUgiDTda5bgJ5ukJsBL8",
  "key21": "2an6VryGGu5SHpLxKVsVtsQ5VodqYoHqsKncfw7BNZ9v5TvdDGYp4Q8t836QdsiwtpHAjSSYB75j5cowxmrVJJMj",
  "key22": "5wUzmsDRaqFFQXnQP5oZ21Qkp34FHdggh41pAZjQAK8oGPZoFjTXdEt5nhtAcRCoCh8k3qw3i4oyFAbBAQuQbpqq",
  "key23": "4KcpFiMLUgEZj4wgt87FVjPynuffb1PQnyiPz1BrhBUUvr7o95YNSG9kkmcq6B5J3nGhUbnTEfFiwWrGEDSUJSrQ",
  "key24": "4z3JnujhBLiSSCU8z2WhvWJnGmc6UKvQ21VojJUXb1TBnW2SSELEa5pb5yY53j3tAxNEqmQLY3SiMzZP5VgguCeH",
  "key25": "4Tmsok1F6h9uzx46Dw2GYP26RRcy7vnLoyFv7jjtmvFWm9JhLSj1ZuTuB1KKitchMzK46CZAWt6LCYnvGuHoAm3E",
  "key26": "5WdFFNEykct5nvufBvd6wdw5g6AzeXDob5VJEoNHGsiSQBXxS1aSZ5t2ebPvFqRpUJUd962SSpX6Xuf4maUwYYQu",
  "key27": "5Tc9bEbJcJvTMFpU1exeJWZcThrJ9uwC51tHJLBKLwSFNWsevRSH9PWjtB1h3miZ9Hqb9jZzGenkLNcax3X6e5UA",
  "key28": "5vtCzZEBuaQ4qG2vFwY38jniThZykqVsPb67jQtjgpUnnFGHbCqTBepYnf66K5RbfhoN19Hf6pcDbsS4XdbQSp57",
  "key29": "5cRRRLUt9kL8vYHby7pF1oSy4DvTuj9MfdADFexAd8js6kadLxsNX7uSH42JivuJE7EtFN9ehXH3L8j319b9FyLC",
  "key30": "25PMiC4Hsgv7ZUNJZxpXrsXPbnfhkuh3Ga9BqYRMGXPjnArbk3WieqUrtjZVKrUQbpP46aTJT5FuzhRTuEXstL78",
  "key31": "4aF2ByD5sYFA65VdmLHC8bbLbHTPaaH7ytzGTkV41eLuNU8vghVphATs2pSjsapmiR9cBHXCDoxEj9hB8en8og4g",
  "key32": "5dbqEDo19B28Xxr17K4zLy4boXwKwKwuq83JQPqrVk4GXXLKLEMxNoSg9is1BkhVFbfq59eF8iutoPTx9CmDG2io",
  "key33": "4p4gcE7PTYyt6amwiiCioftZMWhrigAsWRMHsGE7m1cgbgLSPwEaRmn9uGdhi6nWn29Hgi8iyhLzna4LknHQbNYX",
  "key34": "32j3bEJ6FdhPqrRHw4H6xxiAP9SVwBCxRSpFTFZzzqMA5F4e6XB4V7H3bBvTWJDPCjasR7SbGxAgWAv7B2Z5FHGL",
  "key35": "4acMoBNJ213ucqJKadvvbAmR1KJg1TMgzqiXaEeZj3gxURCEA1ovtZCpvyV7Y7fnKsWCB1k2j3L92LhewkHsHcLT",
  "key36": "kEQUUFQZ3Yu3D3uczqTHviMpLm63CW9oPVuu5sa7hS6nWHg9c5b2AoePYyUqVqumRqtMYv9vayNH3ZC7bWUtubE",
  "key37": "kRgAikVghtFBuuew8mNmWrUAberbu5mNf8afEbwNf2wRzSsfT6YYf8yeTb8MLDeZW9Z8nxXqm72G8HdKFtJL2eR",
  "key38": "5wty8cX3W9EbXKxtaBFhx9GeoJapGGeuCtAb9cjp9BGWmPgEXrJbWA9Ao3nqB5jVPu8CSnTirADPnw1LtyGRmw1t",
  "key39": "4BKYKDB6Wr37WRUcNABjyZW4Uf5fFecoHAXiox9UycGAA9SJdNyDBwjumhLJN9hdmXoB2yiECfafkrx4xEpBWiDR",
  "key40": "2EPmndUyivNYJxzsTNqnqU1xY2qx9LWWfdLfrZ3qbseRW4djgGG9PNNgFNrJB5hHUfgQVLLv4uCLKBbhkqA86mAw",
  "key41": "4x9oRfqSAP9RW9K4oqrs6opYtBSRCowDea1v3GBewN3FMYrJAHrfyGkobJbEXoHhFCRPYkAMa7VoiDyVjzdV1k9X",
  "key42": "4x1Uk2VNDyiWQTzu5woJfNEJwKpNdYtXMJDFiSiWgQeYWGWEQvueR2YeHgD9YN3m54tQZAzjgG4zDgBZ1EEUqo18"
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
