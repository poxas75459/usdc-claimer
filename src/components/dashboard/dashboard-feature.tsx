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
    "2Vewn338wPJYcRg9ubNAJNs7mgJ8r2VDNiXdxZPVEZmhrsLFHAY326HWm8ycz4sKhntwf8GmqRzHAqCEoFEK2tKF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26BHoPTEtqgU1hw3vj5qdAxuasADhBX8qeSNPYRMFpA6xbRGuGpQqdZXPgbK1WZX7nVMQjP4kGgNrj5Q6Utm43av",
  "key1": "3be2P7wLfh5JAB5RT7JEtQrtCLnRsS5Wo9yx6NChJNTtpLuTr7Uz3Z6FdsompyWkeube8GbSKfFrnUXSsGrTywTq",
  "key2": "WNJue5soLtsStPKfzgwqfqfFUaqVyTeQoL6eVyMXWsVfV1RrHoafoi8GAq7zWkYeHy46fcNH1WUcM5jVthV9Ffg",
  "key3": "4QrdVtKYRmQxXzHd1z5nrusPjLPva2jwxfS5aU7Wfy7PXMZhCXbVZkVo6pRQd6QjuZybe1aCKa1wbP3f7bkUhrg8",
  "key4": "2ErH2wZnGrRazPiXqCpTGt739vYkKenEbYLmikAUTT64EgVXVVbsbDqqkbsm1FHpMk2NmevjQhpmYyjDuLt5gDup",
  "key5": "56EjzJVgpFf8PbwwoT3XbPP6kZMp5z2LvSWsLmYiALDeYRqjhVNRwd6L4GatN5wtgRzahWr4DjQ4F1nMPp2RyAxf",
  "key6": "qL34taVLUKzaBRFwazSpraNbXdjME3DEwdqkLKLPE4PYXFQRquWeinRQpbY5ui3vRQsQMt6b16UXo721bFk2rws",
  "key7": "nm34hFSiBrv9f4pxpXjszxw3PgrKF84g9vha6NwXQBkskurr5YQagnVBUf6v3qu5eASkJQfAGJFjzFVNJqvMtWo",
  "key8": "i1BSoui7cqFP6vfy6MNi57yRAYMLjxgvzWMkSNcS89oEXiNMxSsbrBkLB8hxBrufoqFNLu2YzdxG1daEV86rMEs",
  "key9": "4yKz3oTVXk9WvWXuo4aHrUrvPxN93nXabRg1H1V651virMqschA7mLbcQS2MY6EwoSh8LcfbKcrwGoabEYwRp4V2",
  "key10": "3TSMFZ86cuGWYs6QTd11jAD2wis3MZvENQSAoeTaC2zyQ57ksXtuQnPgeT8vDqEgEKDQaqwnDgnyKspg9AsbXeCk",
  "key11": "2keK127VdAUQPkXgnaA5q6YRJxpQmjjj7Cpbq3kVzqQR5bdYfmHQtMjzavbcBwYf42wGxo5rcL9hgGJybmK8H3VB",
  "key12": "2r9aYV3NF7mjH8xoN69AfwzSEQ1Rod5dE8pq1pKH6fvFgYSYAMNgNE2WzL1sY1vzJnDTbxHVDLwXoK1CLLyubVyp",
  "key13": "311P9BWt2enaCrwxay8bShyQWgL2p9tFeWvodQsWBJYwFGodQMsMKuRBwRpswsFCvqNJbEzHMBD12KXC3BnV7GjS",
  "key14": "62oxV7BLo9ZX3575Q3ZxDJjV6ZZ1fgeoUryFH5jq5Nep8JdLYqsDfBedz74xvMNBHAZrb7P7QG61hJFXmTi5jy6v",
  "key15": "45BviB1wFfLrbcs9ahp2QQ1GH52SEC6wAiv63RRoCFRBdrTZroxmN1hj3VJ5E2tWuGgGgtNjBbHMaQKJqACkozG9",
  "key16": "2wKumRkYDgkz5w4QN3Rb3YNFbixEHGrAk79iq5EaxkK7TchkBQcMoB1ZHSXuETcGSATH1qTBxtZkyghtq4wbdD1",
  "key17": "4ydyQF2au933dADpohZSJV9gQ7PmZnC6RBytwjEdhRfHhqXD742SmgApHif18Cy5CLHbtjXa2uYcyjboheaAhriw",
  "key18": "2BHrfwk8XbwCNnkTevCXghTdSxupgUxH86sDVdZvgY4perQnXMp8BsUsiX7ig1w58haSnkGtTni1ztqjhqFqTxU6",
  "key19": "3CtHp2CYqz6WPH6Fy1uNdWTDSrykk7W7GqQVfhR9sN8fSa3ySNVL7EvnnjCQRbgjSM6z7SUpxnyTATv7CFLA9Jym",
  "key20": "n57b8y19TPsj8Ef2w2Q6ifkEBaA7vb5NEiZ5vzJjEobLYCxbr9rQ2aJ7e1DcxGqjmBggUN4xqT2dxAc6ozemSw2",
  "key21": "5BXyeHtoFhWgp2kwTD8AJvnPUXvmxpARjDSRHE35vWAFYxJNr4NfxDLgCbk9UzcZREoH22GCofY9TAPQX11aqAC6",
  "key22": "3osBGYoLv8LDstm9AQZJWXEhKc7Mx2yHeyovC9Ba6fASFdLsQC189cPZ43BpQTag7DAjKBEN3kWQnDKwdksxH12E",
  "key23": "42kh5yyzkGuMqf8Z7yMoAsqmvCi2Jgeo6m8owGwVWx3HeiG7GoBii62i8gTvsUrmRCJSrzEnfAyLauiKy9Hqks2u",
  "key24": "2tRgDnZs5v4dHhuLmeKXK9GFBukiTgYbsUmGj2s5RFbvYPmUwSb12TLmqKQnWXroHJWXXjvycYiRFzohDy2grL7n",
  "key25": "2mKqwKHbKRdko7DzgG3CTJ1RmJxKYeo2oq9G5TDNdECMhc265qb2FYmagsuJgL6WaQn3Mg5XxrNvdf15di43sk3M",
  "key26": "3TphYs19zm7CLztv8ZGqFVFccccD2qsyQmXxRC4BUkCAzNyEQpjw5gPtGgXD7XvUE6WLQgcLP9JnEDXNQA5JeGXM",
  "key27": "39wnV47kXBt4M5maTHR3TR9ds9LMBAmpfbqQyWKjbKx3FtejpivxNzSAA7oDG6M6ykDEmexGJf9HrK4GGYg8o4wo",
  "key28": "aWmQGWeVz6jLCzWqpchHcrrrCqBDYadNh329J3kZdxrvwfVARXg8dn5cTnTeYFhRpFnZvV54AJojFNDRauiJ9hB",
  "key29": "4uMxK9tdDW2VKm88DbhVFbbAkKu81gfKMuncWAf5khsQqj7tp4pu7ppbhrn9WN8t7nAGcTKiFu8MP6AwWWoeSNxh",
  "key30": "5mf2xrqxDmNwLTdmXupLafYahkGZHMtzR1WZqmouC4ryUseibmQwDqKryQbVVKH8x1DPEAtmRjzyk8LyDcYjMULB",
  "key31": "2PKz9qHRTfHio16ABxLedoLdjkMKnTA5vvKNukxxBt97GiCsoWskgrBT6nT8YcfnUmeU6N5eZbRUB2qYyZ4qGFVE",
  "key32": "24sX7NkSnxXVRL6bQpQn5kM8WvJFF3ybUyMAXXMXvkruYRTsfGSn2CNBwK7zj2ELqtfFK2BD4FRoHPptuXcveFm9",
  "key33": "2cMvks46SuBYmLUCHX7CippXuCzv3MvKcZhejicmypkhCYg2jFyg1sfR7dDgkH6B4AoqAYwgQgv3eQpDzhtxSgCG",
  "key34": "67orS6wY3xGyH9cvVnVpmJqwHpQG34P2Ej6CR6YvEq3oJDoo8HJiCgBLAz9Vusz3S6baoK2dgGwfAz5RNLmeX12V",
  "key35": "3JH9mVTpp9RsNorKAmmsfhcMADTykruL8C4yN4hNTsH1niXmNg87MncfQ9HCin2YxesddUuNU6jYtrJ75d3TsT1j",
  "key36": "23jUuhroQzRi6RfG6deA1xJGsBBmHHuQALfk2eZEteH56RYNWxXEZThhjUJTCmFFN4a3ZdvvLqkZmejzU8KaL7M5",
  "key37": "ZSywJr4EVTvCmSyU2wXHaN5mGgNVMcbX4xqCHp3WqXZSwdVQasZdXciQENfjyihY2Hu1qfELi77o9kF8rxiHdYT",
  "key38": "5Lu42kSu41EztNtBEYRYtYDpS596MADCWnNrJz8x8XFnWWnRmgGkGoZecmUAMVtaVKc3PsPdYqcvmeAWxcqZKKFR",
  "key39": "2Wnk3Wr5nSsgHxFKQo3CVpQrmM9pitgo39t77XUW1PWD4Gn83r29f5axtL2tubuvaeMorpzWzrRnRnzKjJtbx2ZW",
  "key40": "5yzuW23qJJMfy7L85TQDujYrGW4N26ABnByMEcdowgygNgLGp4nVBy2CxU47xyAtBaHbMvJSZobDrbHB8C8UDbRV",
  "key41": "2bVbXdSFMGgwaBuwvQmVwpsTNQXnoiN3wgtizZG8AfZS42KuTtXMT8KbAd25fgMU5jHA3vtE56AvenW2eCcfjK5Y"
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
