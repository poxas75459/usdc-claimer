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
    "23DLekuooTS3fgEHmgNyDJB9jgpFWyRUP3QMe46yfHiaoLtuECyKDtEJ8CUiFpk41mF5T3FWPaQhm538NgqsAquY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KVatiVwaSwVcwigPpMFU5yePRGLQsUNa7cCvgroyrgkppa3HPWjTjVo4LZkmRVNdY4Jzj7aFb9pKyUYUDkwEB7j",
  "key1": "vg7e6MJ3SYgasX2Xu7mgPwAip3Dv9WaAYdZoVBSEjvJzBfy7d5tSj8V2rEaQX7EdWTZzkKVDqmPYGe3u4XVj3Z5",
  "key2": "2EN55HrrvHxVH8L2tTCVuk7QJxr1eyDe1apM8SvA14WanvbdkCW3ozC2UG3FK5541JpCJ7Ruj53tBHSPafGPmEcb",
  "key3": "5cCuKLcMQyitJFNJS3nyr1ssB54Cm8EtFktByXFEPtRvtAXWH8jgHghgotp5RPyUdzaNXoJr1nKhK3k6xzk77Jqt",
  "key4": "4GDu9bP1xu1w8P5wXYMEUPzvydEMyNwzUhfMiTP588KJ66K7p3gVkXQ2u6drFbZZen2KmRNakz8Ux7U5XRZpfsAZ",
  "key5": "dfUv55R4y9m9JpgcD8LdQ5sJSEYnNsrcuDUWYdViJyomZafHz5WKwVjCvQunR7XHw6wzfSzXQtAGHq7mN88ueqZ",
  "key6": "5rukobeoVV2JAw2u4a2qdrr63H9zZPVqPDhST4Q1duurF872WdJF7eg4szr57XFs3TuSun3prqHYrHGCuoQgRcy9",
  "key7": "3NMZD26QFH1AMUANqkwabV5No5PBxwUkwgYTk5nYYBVf2DdS1VhhbDdPkWUADrfcUoinBMMFknNR7b3hCqhi1oVD",
  "key8": "39n3h15wpkFyKbxiGUQNEg2YBp13SeEKuVhLLnkFhyd6S9nC63phWhNdr8D9UTmkhpdT88E8Kv4TEEL8dy4ximpD",
  "key9": "2JnmTGsQtZsWtfAT71YYUVwM9aVXbKJgzjDW9FoH4zBsL3gPuZxGndzHmUYN87Y3abTqhWVJJ1rQENE7cTbQE5TZ",
  "key10": "29dWcDZjQsctNxRMyfALFm8M8fPxwYAbuxETF9jKu6DaS1mFAxDspmbPQ7f7Dj4vtodBYJxnMjKS7SgnRt2DKkT6",
  "key11": "3k7u9nyxXAk7aFp3sAHEgYA2856LN6bfPmEdscCF6GWHEoG3PoN3gewQPWxxjnuAsXhBWCWUMTxpYS8CmyNdPu9a",
  "key12": "4UwFwVbkLhDd3oa8Kyfysg7kHiByc33WRcbqLXfsm6J1Mhftb53SLaF88naZUbg27eAtmQD7Yebhsubzpoc4vhqd",
  "key13": "4KHAFz15fsqZW8JVDx2K2gCei9UN8sNemoWZ6tPZpayMnW7unxQYLkFdoQ3XcALqD8tWHQe2WsJLBecXkrC4qctU",
  "key14": "39AnMa4zFJ2HhQiVrHtwX3RcDaRr6yNCW2XKkLuQdtNSHmLhRVMznTzj8ooAbr9Zgh9yDqSM6xWLuZiyNmtXLhCw",
  "key15": "2Q7ozskvp9uv78cEfjbTnAEX2Uqd8KwZQW3S8YfamLbZpoy8Km7UwUEuWmTXCMUJzYwZkNyXzjageoNTbVfd7ABk",
  "key16": "4vHTJ8PiQMbk5ZtxCNwS4395pwoXhcwi1RUejGPDd7YxewngTG2JPDXMq1UJRm4QdHuochXxGudQS3zMgYDLxKjS",
  "key17": "2VuxqMzHn5eUZkrvp4KXLZLkZNDKcQ5sWhVP7WyTNPj4LurrzaWGSCb38RjXjXMzGBCCH84xrFjiPAstbpN2u2yM",
  "key18": "24rrPL6xFRrHJhCgpUgjjZcw789one6byP7V1ewbdcPvs3DMnh5hD6MdXPhHb1wpKo26Gfo2SiKTLWndiTVNdGPn",
  "key19": "4qjtG6gBiNEYXA1ewMGZ2VCEV8taVTVHNwvXDgHfMsSpMsSjQwP8rzPFDUucHQGmzq74GNTUxYJtWqe3rkvsZV2a",
  "key20": "2vAgsaND5AXgLdoxtmBwDNH8C53sPZ9Z5tVjvqSBSBxmqXsuyC6n7ZiLtG5LrmxPzwBxFioXsVNDcXdc7pMLwsPt",
  "key21": "7pWbZKLGRPSzFgMiLWshfppaoeaNULh5Mosn4QDUWxcPEYWHQ23Lk5ERgZxUFfrLfS6sS22trBt4uHcSj7Hd2oZ",
  "key22": "3EfEcksSTDmoXc1HMV2zQ2D6knQdway3Lrg5aD4Ca9HtNxuqUvGBZ5X99fDWKNds34bbg6uboXi23YuMLcFoRJSn",
  "key23": "Q84teNcpaj5KkpqwsDUsLZqd8T1d3mKobX83Zti7eiDna2vqEQCLFjPb89oRT1mTKH3hprPH5fWETddjwk5tTuZ",
  "key24": "55vtFc1bMgNxKRDvNav4c8rbEwUu96Si7LUXfxjthGrGfQADyxYjYzhJYHTTdwvcdvRpzKJTMaYocZ8CqpZpxJgR",
  "key25": "35hc1v84zTz57rdJ4VHbtbQRJciCW1X6YsXNbqXaJ1KAoKuSzymYFaN7keqcmo5nz5JRZ51avk3q4Hb8simZhPLX",
  "key26": "244ZuJzuQXZxUYWd6VY9KZU4qEFTo6926Nu9d4ZEpbeEpnj2dyCZ84fPrzqpFBkwGMrLsPDDhWpFGSqqsxxocpgx",
  "key27": "hBWpRyPzNXUU1rs3VFncHdgHg52euag9DyagzEewTdRzUxz6SRNtj1auYojfLT4Mr8yZKtaKb5cmpKjs6oJ5HuZ",
  "key28": "4r8UUm9u2XMM4SerkXMDAQVnzusWFicAUdTbK14Nq9RyELDsUKwjDjR7WW1R7S1t4LjWPr4fRuPteVxsriPEu3Aq",
  "key29": "4mnHH1jJ51BgC4PGweucjWWGyzXVEitXDMjWGKLkiLNASTpdCEz1W9QvihWoYVM1KsEQBjCYjudLKPPF1zV9T2C1",
  "key30": "31H14QS7UNhVzd2q6cTMSTwR8ag5cQcK7hbA272QYRR3Rfco5ocCqCF17SVvwpqjfRxRRsXmpcEp8jHdNxLqWY5t",
  "key31": "3DrtfBzeis8VLeAtUxpqaygnA5sbgFX7AYWDiGXqmiKdvdUAUxFKvSpigiQyaERWz4ny3AfJtJSNdpagy6VMLH5Y",
  "key32": "22ZB8ewggVZfquoyNauoe5XwtHNda6pTDs9TcmqVYPHo19zzRcoL2ZQ8gAtr2zMgiGVWRGsnZaSmHP36qTESCc14"
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
