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
    "38MBFiztLVgCviEb4m8K9fuC3ptJLtsoXWxwsWdLgHCkpDTqNy3oW9pHHtTods8SwMpBQuETXM8GJjZx68tRLjtJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gNChzqCTWpS3hRpAW33oGEzjaAQmSBM6XvjCGXqU8PquNB1MKVgvR6TdSMv5jxm9ct1DmyUzyLwV4wf152Liagu",
  "key1": "2vAjaVjHrj7LXC817m2Bo8tQEAVWdoY1Tj7GaGpXxZ1dwk5Aoktso3iAXdh5ykARcZp7D2PvHJ8uUaW2aNdD4uEq",
  "key2": "YeQKogQkPdctiQhBcGAhzkx31Bax8KUsbmXDJPhSzJHwDqAAaJveyJ9oz61XEk5EGhSLkWBmLuVYh9chn4akscS",
  "key3": "593SsBfLNfbHMAD1jLDk8qd91QKSLi1qPdDHVSYZ836EZKr34fCSUCe4qgQxT7gLq6xq5aY1LcqKSt6LzukHDaUi",
  "key4": "JnrVjc7YV5xQHN3zDQBPMmQsGD6mbqqKUwFaZ9mDbWyyFYPgcKikAj61jPBru3L7XnKNVmnfd9wdKRbHbvJeeou",
  "key5": "4eftuqFGVpiPZVQhiu5EnNbhKENm8tPwNV7Da2g4gSaSR5727Gydn1QgZsh1G4d2gHRwcTRF5imHbrgB25kbL3UR",
  "key6": "4PWJ3Dax8dPFT17UJVL3XxL5HvjQTmHshi4FaKHTynK2ZhU6wgUTM7tNivjU8rABmwEA4qoRnAtbUvjtsA3c5MJn",
  "key7": "5yxFtWoBoLimnubH5mMau28vaHWfDd2GS6zFYBzJYCigg4cTVwNNEbG6Tva8NDKfcYRWdVbNSwDCuaEzS93LzqAv",
  "key8": "uPMND9KronYoUVc5aPvmxGWdUwEmwmiZs7LwV2Fz72viBWw1zs1gD3fYzCx6zADcByRSvwyGkLQ9m7CcNF21Gfv",
  "key9": "5JzLvVaEMCqp7UVR92R9H4GRCUPdrsYMV4D5RW9P93tFisS25cUzsioqFUbvF7tDuMSNHrFLLdobRdq3P7ykfWxL",
  "key10": "5NV7pQti66LpR4My6RWtgScxfyg6WURsDWJjghbxPSn4bDYR2opva92MBN22cRmfU8ucAhxRfZpHrFa1vAPtNLqD",
  "key11": "3Q2xgKN6w5S8AgNmiuP3nV3RmBLK5RQ4rf5vwKFuNYXMbGgDikQWm1DKUAXz2QK1AvVoi5sbKwg1wgmAJeXUvhUj",
  "key12": "3fvKg4EDeVHgfHVbi1Fv4s9K8SsgvFmzi7zmhAUgaPfSQtEChyGkWpgnTDhBVLiSqirE74eZWGtjxiMu9xnEzmdm",
  "key13": "56j2khV4FrVfrGA5A1eD4P4VxGEmYPDJidF2qDv2QEzwAhpDQ35szjwNdEmNAh8gGCEgFdnNEKKifbQKVq5VEvoc",
  "key14": "3StcEYZE3NHTGw8Zk2yq1AunZEy3HuQrmbGXfea7hbsB4xuvoXNtNBFxdDQjeJFaaiStFQQf5UNovHPU6Z3a59VP",
  "key15": "Vg6rhUnD3BRaKfnsvstrYQwn8zz2ZcMARR4HZPwbGEUneL8pQaM1geyznnbm6j99Te9AMeTyFrLJ9Z5WXj22Qnr",
  "key16": "2BvsnDYXbEVrXUqGJoqoQ1qR4T8gXaGftgo4KxC1k6ECeodfvfNvUwgShXSWvXnkV4DyhuU9R1QV5rPNN7eqbih6",
  "key17": "4KtjQGdcetBsCmFYQunxDVKN2GQ77xLC7Xh2x3v1i2Qutxbnqoabvwm5KSJsLyXDM8PHA7NojM6f6YicMKZEfXo8",
  "key18": "pHA1ueA1rWVcE4sdsDddRWiCW3fqjxQ5w4SXggyqFaaJyCorbmHnbY5oiuXJh93B5JqyJmHANyqjZPABBNyzk8t",
  "key19": "31dgYeLeT6WLTMkbmPWSPKcksM6SgSSGjunDWg4SeodL2ogqrRAY9AXcQBPY5e7QXQEH1NRY2MyehxraizaeZ1H8",
  "key20": "5RYaA752BzZGyNoeeYckN6Vedr2PsgGkHeuzmu33ApryGH2VDj5ix6pCKusHrhNm3zJCXRCj6eBagRmydZ6sp9ko",
  "key21": "jeSv3oi7hVrXpTc3w8QZq7Ae5UuPox6S53g9qTNGNp96y8zrSiBWxaMnC1otMVKGPELRkwF5CN7njng3x1aczjk",
  "key22": "2gkDg2T72UPGXhwuHBzYti8iwSoXCTQ36R8TBo5jJU9LiXLyw5SJureq41x21tVgBWLC7Vp1JcfE8uK7Sc6RRfk9",
  "key23": "2wZj3nSmo9P5adeL6Zvwv66txgXVMAz5fv1vcjzWdKEVo7sJyxFfXdKnhm6UPywxXTapu4P4pXapoaDhcXh2Gw2a",
  "key24": "2AuA4s6RjDctihwKTwoXLMPgVtrFMPj7x4un2yUJ4VgzHAG22Nh32TKEr2oXM1TkxNFPPKRjD9DjWUpYQwVGVxaF",
  "key25": "c3ntvzPvDVVwuErKYK9iQd86z6Ur51dhhV8pYaQaERkF1WiVCRtky5pvPEHqQ1Zia4WLLHMfS7DLKTNPT7ZfyyY",
  "key26": "4rXE6cMuCyBcA63N5Hn5QS1T8jsVrZYHFMxEttEZBc3CoQFL95QwTxuwBqVfZPWqpDf2wkd1nBYXYsG1fAy9mXfx",
  "key27": "sYrdpdUmTVW2E6mYy3bZN422EwFtRkKKJHFMNqHAyc7AefZyo8FbnnDUmfkgHA9oHJMewYqS2bSNc9hw2iwzTWu",
  "key28": "5NXCi3aM7f7xhHxDqDhwRxdPrU2UTNcpoP5WpV1duPSoyYrviNbZzYzRhpXbzg6PEWHESzmbjXbKVcNdY8dcv4mW",
  "key29": "9LJXWma2EjRhWxWUFHhpDCF49jDGk48MeSWbHyidGxweW12iUwEQtzui3MH7HGjPJas13rpnMyPbiq22V5J6m1D",
  "key30": "4feFHfyCuXbeHjwJL6dbMW7Xqzp9MMCk1N4ynAsRZkN6AWvZMyUUtMoDSMEjecLQV4pfUq6RGGu9FPHp4V8vCGUL",
  "key31": "4MoovStXGT2h1Yk3C1xZJqS2JTXhxb4umcyP712MiGaXNQhyS6rGr2LgTA5y4Yhgxn5dMwJLt96XguQoBmpV611d",
  "key32": "2RwcVwyJ5qFaiR5nazN24EezZREoHHxGhqNcGmfapQkcP35LxrJFUsDKnHt4dugg1mYzBXSV2hpcb4LYWExYEmgk",
  "key33": "3JCwxbMJJ4t8U6e7dCZQyC1pte3vCREW27GoZbWmeNHrpRhCvRQJtz5o1w8ypxcRMijvRYEzy189yPrEe9jPxhnH",
  "key34": "5KcxivgEbsfvJq85EuZrLUAVs4JZcfr6U1vLpeHRjv6R6FcsEWv5KocRiGb2XnekC74eH9Drp4c1Ck3k2rXtQT9j",
  "key35": "5JN2sNoUp9usso9XiNNHFyutnm1BXpvGdQX2MeUQ8Xw6vpmPmZqEBzfoPc4SWUUxb6tJQQBDkYmrawb4zpMiBweW",
  "key36": "R9WJviJgw9jGvpAdHpEQsSf6N4QLhzepM2iguMXVFVmFPJ6juPEDBXU8FWZ2R5c62gVBTL38iUrsfWQ2EfMKxuE",
  "key37": "5GGFiavnTuiJ7UnP7qbkjeUVWahEWLn9CGQD4K74U9Nf7L6pEEVgWES1B4vG4BbVQxDq2sNhX2aTBkKiMUEiVpAB",
  "key38": "5rBj49eAv4s6o4nwpNvS2WXKUYwh8XBdg56LkkSBwFtRjemBusfvDHv9xs5tnyVaZ6MVJMAhcaRrF8riAJCW4VSn",
  "key39": "3cQASgT7jGiHvBEMMwEr9bLriHUW4XoTzyGwH47YbP4obyLZZVig3xX5PpuJxcuRMFFu3yowVZWdzAjSjdpo34F4",
  "key40": "5gDYdpiY51cGDkz7JQUfTCpyuqFiMkEJFjpk8qE2sAJwKfUdCxitXdEAgcNwhsmZ8Ejd4bW6akPXDNMREdz47cyJ",
  "key41": "4UVvSuizf5gYMhUZNKjwoUXrP3FJNTtmNVvfLhTgTToRxbZpVoqxXvn1ApAMNG9RwrpfeYnFcichWKmg8r354rLJ",
  "key42": "5p8uyEiC29MG2eSEYq194JKU7Tkc9Rx3c6gNmibx6v4AD7JJMBkbmDknXj2iemnvRzVjvWgeS9E1tsDVhkLicqFd",
  "key43": "3vpAuSeN5riTRwGcoDq7doX4ymFNUuzHbDWg1fpTKe35BiUz7DMNtqMQbVr2WgKP4oEZxkKXroDUoJeBtGny7WU2",
  "key44": "5HKG58R6gtUiE1nQQ7KusTnDcvTpbEbPcsEvCrZZsCchn2r2Qn4msZVmgKXfi96hgMTNoWYAtvw82o4iPuF7cv6G",
  "key45": "wUtMPakscimQ6rMCMX6V9iMgXFj1ogNkf2JaYDK3Q2yLUzSHYJuLYF9aLAJKiVAyLwyqjgVgYmdouySJq9GAQBu",
  "key46": "2h5Vdfw3CVswixgjyEvzNztArE27jffXjcApd66rzyxeKj4noe7CTYosPdcNoJDf2ZFZDwiUeJQ6uTuZ2giTE1b2",
  "key47": "2fTUPis3chvBf8waWmmSuqoxkPUKcyg3QBMiUgoDfNuR3nXEvhjXmhVSwydS5qXGGJvNBr8nQDhpGg1QXfudrgMC"
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
