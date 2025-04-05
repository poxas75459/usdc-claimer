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
    "2BfdF7LttaNBXENgThwCciLtdGrM4vw6Wq13Mwmr2EMLn3vQYDKcJAYXQ4qFJLtm5trttTcQkMRaCWcH9V721xFR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wrPx8cGZeKChkmfLwnsh8QrCB1ns8D7AbTAEu5GpDtQYcNinuhqDTt8vENoUJjtUtEDhNygveGpU4wD8zYJFfWT",
  "key1": "3nVFSnEk7uhc16uMrg1xdCA45jQiwWaATzx4URcrxu4rmZQf5vX6sdSojDCiR1dVfb3b2Vt15EHmQFtBkrkEkpA1",
  "key2": "kgYKW6HuEnKazoXQwKbi9J7j2ceQ73ZtFtsgYjvrykJyb63Rkw6mA5pUx6jC8uAkUMW82HpMenY45Js3cJAcv45",
  "key3": "5NTh7Azq1hW5zPziLGUvGzWKmGfTaYrc6paVuhW1CzyUyHdqzGcgyjPHCiuwyusYrAWYeMzRawWkT1timGARMSTp",
  "key4": "5gcX3BBFGVZQVKwwxRU2hwXev3AJcg2AzySLJPNhDE9cjXoiB7sXbf8hYMULsH5tWgS5fujknksVbVURgqvPZAKf",
  "key5": "2dP89CC3TrRXVQyRvHKEzXKsEe3MyXAxe9njTLigvzpRMeiFGSx1Q7moockNzBWLB6EPEo2rBiGTWRiSHySt33QX",
  "key6": "5MMMCmTPFHpFHF3zj58ffoRcui1FmQKZ43BAznRpAdSnVnnojZkDcy3xzvkzJCdgBAFvvByx4eBmNp1JkSdTos7",
  "key7": "2bfuBTy3zK6tx7acaZUx3YHG5ZZmF7JkveuQ7rgB6PAQkopFKLDc82ajZpN9ScMKEfeaUPmHWos24F84fDy5vbBU",
  "key8": "2AiBVxekmFpDgvHkF2Tbg4MgdXGvnjZu1PS2CxuZSQEK1Qpu9xtsRMtAqQzh5S9TqHXAFkfhfNfMWguEdVhmTdm",
  "key9": "5o83PXmJMoA24frsDssxeq6gRzj5mGVBFPsr5hq1KJANK6KWkHU36xD4uDggESUQFMS2m5XkE8H2xHgWj8jw1V3x",
  "key10": "2fmUQqvR7UQ79uZUxAhYAumHhrXtFrTRfAqsNYvtd8uhisaFe6hNt7UttvrBihQfSJ6fJpi7vWGDfiiM1joLWx7s",
  "key11": "4G7TmEhq4GNRWxZ51aNGucp6AP8iX6BWzZ5DCQWxEBDv1MPvq913WguUUzMkGVwyMxi7LbJvjw5LDhxf4yZGaspx",
  "key12": "2H9ULYGfHHNX46nc7qmWbW6qTZnBQXxF9uGxKXQ9yond4D961YSEmK8pg12HNFBwZo2xLhcFPdBn9uZycQyxkSST",
  "key13": "5FxGoVmMPkLDogtQ2TVUNMdxbaoN1L7ZrEeG3MyUHwf4vmsNeh7N9qvTCmwS7JFz67F57AijVGjdyoAdV9pmfeqh",
  "key14": "25QJBYs1DmSHckgyCy9ekiQmqk1My6G38yPoeY8fBymLzShdGTzxj2S8pbEoHAxYe8FNknju7xJnfrv3DJzKNg94",
  "key15": "5RcTSWF17Xoi8tsY5CBDR9t5jy7usoFYJCpP5ws5tDKHKiDvE3yK75Bgw3LFSsNoPtyFyZDumTToHMr5WGvmhJtx",
  "key16": "5tcUbCmE95cUA45k7sEKxsqy91rJT4jVQSk5SWgXF7SxBYVKAqPyeuqXShFtSQySTejuBHbBoUU6nizeKXFfgt8c",
  "key17": "mR3MyqxpHkpeYPcd75tLNbVxGZjjM2BaUaJwQ7xB4NFp2Yjbnj3CBD32PeoNCupgW68Qr4s9QS6NhFLNqXdmTD6",
  "key18": "5ujatzpPbgrtEw6YvZkLNSUXjVGyizCSmuxPMtP1v2LTbcZnYgPRiCHWPjTxnYDau6wSqxCqVgBHHvatYCP5qufw",
  "key19": "5EEx8TW3RW7PkuroZXxqUcvhX5kZV7148t5ixcMc9ptUn71xFCSqoeAez8shdVJHiLoNtUZvzbhvUKpHAJ2mWymz",
  "key20": "3ET34GXuJjRfB9PZ41F3UDE6vWWcKknvSQJhx4jrY5VdEGbTXjG48rJ5EogE5XhdJChouveXhGdNMFGiMEwCKrEg",
  "key21": "3QxqaY3Yv5GuMtNJCiWubptXZpg1JqxmtfUKNAvzrca8uo83ctNnUsuBYufH4vioWTg1mNgkfcJx844xSZPcdCHV",
  "key22": "625oAruXcj7PUGsWGmFpAkLYXh7KvftNKxxfHjkG2ApbwZAqiVwG4kaiX6X9xg27DfCCb7WVzKVEfHdjmMWjiqDC",
  "key23": "jnGiBaBwctafvR7MR1Nrh5EPTGuhBCk7YPXupNozwNMixA3s6ivjAMjLKdcBiH5ZTGrM7DQhRSAw6nq7G3vXPDU",
  "key24": "245BEUoutn3NLLxZfsSip8LakboW5PsFZemBs1LiRCHkqZuVhaipuFPAytjysfYwTxK8b86LSWLckxLEQ1RP9KLe",
  "key25": "4r7GECkEm4E59BUaZy9ZohdtLPQdYWkTT8KR3ushroceYgjW6naGHzTdYb5jHWjcK7ueYTck3dubDPaji2BoHWhL",
  "key26": "61DyoB7c2Sttz4bXvH9DwVEsvQUZvML3h5VFBshGFLERiQ4ucVTH11zPebQPwnE31Cm1yJqsb4xZvsHvSPnwTZhg",
  "key27": "3naGkupBqG7KiDqf3pfUxwVs8953T77yri1MAvkK4jXhYqoudmL8wh5GRxNac2pm7p5MyTa8JtEFFUhyASUCZxYt",
  "key28": "4Jh33W4hFSeisf2cEBBtAgsoWiwxBh9RNek71UUByZF4xoW7vCd4i48hfA2b1Tu4ENVQCVABKaip5ZQCRkyGUehK",
  "key29": "555YzhcbSuppN6VZUmMgQBv7CWeHzAwdLD1FLrYUnDbnFMw97FfHkGDjcqF1UUHxbGEq9wAbN7yWvGZu4HpjBBnQ",
  "key30": "5FaK5eqCquz8Brzm4G3QUcdwpaB56LEmLkEVBp5NzfSDMh5tHhqvJ76zLKp13SsAxqawJNHRThbMEsCX3cH2fZPs",
  "key31": "4RjRfiA8TRYkxvgz4YoePjFZR7Uoid1bh1cYM3yoMpHRS6hLqFnxZhxH3UGYSTGg8SJ4uL7oQUinWPZzHF9cdTrv",
  "key32": "dBdFLdsHBDkJxJKYqHNF78rBuBWy1ci3rZi5DBooVVizNSNwinzCCpQZMkDv7mCCMox6SYZhcpHytinxydf8Ue9",
  "key33": "4RebH4P1sS1E1zgnX3iRztHnpq7YUrMHHDcoiX4wkQnQwRodqPjxfe2kPFPLhzPUdKNn6Tev7ybho51d21oScAss",
  "key34": "2gax4e9JYVWyjb13zD74HES9gUrWLm3xwprTZa1GTDPwmgwjPBUJwx2TmRLxYrdyaTXtUroyKjG4ft7rp5W8U6jS",
  "key35": "4esyQZF4MdEpLRY1ej67ZJqsAC2dVcXzpdpZ56UDvyMGTEMZ72DYntVsyZD8xci92ZDvKQ99qrnvAxT4Vdfzpbpg",
  "key36": "4fKY5LX8cTvkAHVQenL2TbH8eDi4LViiKeYDZHtUWFAn5t3bUXS7deRgVzwdsPd4nWmPnd4HK2R56LE9gseMUYPE",
  "key37": "296mTq6aGvvUM4gj8pDFWThwNxGDEUqVa4b2D4ZfDy6xE7Kp3BKdbTX5KCnstdkwPuiaGWEWpX2HsMDDUW6zb4hy",
  "key38": "C6GpChztspKqZmxbRm7Vd1AgjyJjR3kXozV6JFegCx7jxaJBFNubXFEVVUm2mabheLkEkGg8GtjHZPEFJLQrzNg"
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
