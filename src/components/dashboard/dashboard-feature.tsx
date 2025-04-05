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
    "4sxiAVNvgaKLuxorBhSs7CLvJ9YMtJeHeNJzFpXRQSoKGCUcojJTu6RLeghqMrK6VJz4i6EygMKVBjHo5QnfgGT5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51Q1bfpwhJk7pF2M8WB2SNG2NidMzXYrmRbgHdv3vmcCVujo1sdBzED1aaWzkxwX8ASWuW3jxnwxgY4hvVZvDQYU",
  "key1": "241JpiYeCsWab3yo4uAMMtb5cW47XQhZkFkFc5apVLSNQo6XP2EnW4rnt2ya6Q3wfLC8Zepf1xTNWBu9uH9m8SYb",
  "key2": "27br6W4RTdT7U9H2FS1CXTegB3cUdRKPmgGiCAuNH7XQ4e93hhDV2Jp8yCNtWAGVpPqZ2vBcwtCpZ943HCyEbXfX",
  "key3": "4EFkfx9NuKVdZJLxQvcbC7ohF5MEGz8X4kzuXXptcgDwjWhA591odV3VJyXvsZRXcHWK5DhDn3JB3URvYpjFr7zK",
  "key4": "5g8Dp9yPesA1RTTFgBhrmun1QN9JrQpyvqRgA98d3GKaBaSL6fw5Y5A2m6apwbH2hUYYTvihKHHrWGAqFfARCqm4",
  "key5": "4oU2WoUJLomQ2FEHPJB5Z5GL1P5BEQh1dCSmkEgMgf1bLPWozmHr7jBYtp7G5KrWzCUCkWW64iXABzYU8evadhSd",
  "key6": "42CT8riNtiyknKV4vbN5dRvWicCyS8gaFUckkPdRSCdU632ZJUiPLfiBWDXnfZg34Npj19EtVQzxnHgjV2KBcg3y",
  "key7": "2jMq5p1CL6hMc1mCDB49f5aY5EHYwQQ2gqNPm6phoqRsrHpZTQbUbXesLK3R2hDon4aXpFwtN8KzjVbPiEmGTtTP",
  "key8": "2EVwyK6kt9qZhs9TWzQvGRGs8SpWxmBxZF5qX14gGSsUdZ5URFVT2eoGHGk6sseuRkuiQg5btP87j6rWmstvBY3Q",
  "key9": "3jM6DgKLVPyiA3ynVvWutV3kpG2Mixa7wv11TmPjWDtt1J7HUnqKg53owSpevEGZ2G65AQh7x2YzwhvSp5erBf47",
  "key10": "CH9PtSd14T6771okQAFPsMkgstGWkauVE2pDYnDiYtMQNYdfWK7zKSegDjh4tvDEPyB9KruLCxEGAjYWaznYLNV",
  "key11": "4bwERAjA1TSBsvwpzvZqveUdqgD3GVnuMPEwboQ53TmT5QmbjGqvSvLyn7wi7R4hWNkn9dHWoSz5meKjESD1RuNv",
  "key12": "2R6NzetEgTgtx6tyoLvKtxo37KZURXgQEm4LP3boy75nQabSbd6rpEXXJgYr27Mci73SzpkoNwJR133JLwjJZ1ws",
  "key13": "4LXnTekGDMyv498ZYVFM6ZNsJmRakhFzN22HCcXpARYKshxBSTfhqPCaBoPV5xs2wQSJv7PcKjYtgoExafkhiPsC",
  "key14": "42tVoESqQvsPLKJ51ufrMioFRUraGCbkv2VqKEpALBhw8eX1pJ2X4N75mJAXvbv8wMjY5AhUnkLFfT439isooZhf",
  "key15": "4DbywnVYSarqeQaBxqLTTL4aGsNoR9tRLH5CaBpfRL2j5UGiQHbGCiaR7aiisJFThwwYjGEKFYmQffcxcRu5W9XS",
  "key16": "3Q5GGuhFutWy3QXtUwrjAiWQYwoj5DChnAuL9tp2RuLzevZHRur4RDSAb555Jxt6Rysr9JoBTrcPkjGMHU8WHL2S",
  "key17": "4tJCvb7y57az19gXg3c58SbvDcyF65LLe76TdoAXcVWd8AATg3SVuHCeatjNB9BPwT5BNoAr9s8Ydeq3hRnD1oTC",
  "key18": "4He1kiX2va9m7PtfjdfGkxSQQGP9fQxrLorc6LhZVeQavAnvrFTWuPQJJDj7Zd9ZwBi5NbUmkq6rYhdBQgiefmzR",
  "key19": "4nJDec5Ra3riaAc9Ve3UqhVvgPZKQDuZJmiTtuighH3eVsAtgaspppuSPwuahDzKyvD1thCPxnnF3NcZ831qHbwL",
  "key20": "UZE3q1hr7TozpEJswMWavdRwCH8m6eiauELok9kctYi76SCsf7oAmv1n7mcDPH35duhXt2okMUXadr5xoZQsRxs",
  "key21": "5HwcbeBZH2WCuLCeD4pRJnw28Mdv5tYwXaxSvSyjdZP2cft2gYa9ASTLarxodaRU2Pd3kCKffpfnfKX5n17z76yM",
  "key22": "3Sx2gt4Qo41bxoeuNVcPu9CAjpy3Z1cNRrv6MRH7MFr4huhQCbsTrrrkPCbFJXEZtQ3ExKg6Pn49YR8mM5HkvHKi",
  "key23": "54wQBP7jBmfhwWhiLVepYxEmYkRvta63wgweP1r18SzTA4h5cV3wa9r1ryWSqHWTdyeNbEES8ebNY2RK28UFKPVj",
  "key24": "3qb8saAkEXL7HQfPyYF4TPXjeFutj8E9RmQkT2ERFZjdxoDYRkAig8PZKba1HtByCY9KjcXVoECA3BvbrCMT5hLJ",
  "key25": "5Qm2wq2AkAsNZK3HBfTBLnoiiF3HHGtYaUoMfXwj4wqxv3Qgadrz3QoTRvrN5ZnCQgBS6WVrHPhaLj4ykWZX9Kyq",
  "key26": "4qjQfCk1Z7ufHyhuaud7D5Y77stQWgUPhcowKjDHFP7sGZdFtG6BkAFarqjzYZtQMd5gZKT9vpT19yCZneNkxcyx",
  "key27": "5eDbyr7VxkEUyvE9tMQeekNFWY6wGCjw1WzayUWXoSd2u9kCTDiRnoYsJeQh3tUKNHGWSXxWfZug65EcfLq3cdpY",
  "key28": "5amFvzEFSjQVW1ubQtnMYhjpvhFaggmrydj1w8QRmcG7na8QvhWpjQY7AFjPJZUVumGnkUxTm4vAjTf34PoShQVo",
  "key29": "K9F5bCmHR2RnVoWomuLaZDm5Cjdu1NVamWRARzr1PBL4aajVEPnaG5bg4oMfufE1F2FwFqetFUbhCa7wtEgnsTi",
  "key30": "5inoq9rvzUaY35DmSNuTRVpYuCW7GNx9z6NyKmR5RBoUpPBqtsVdQeQy6bJMh7U9ibaMnXVjYMpsZvroMouQpGjd",
  "key31": "nPwNpkUMer4vBUn5PFWSuwnLitEKycGWj3d8sXN3vABP6TXXDPRvxtqjBYLGGbHP9ymiR2Hz2FWUxe81ZG6km77",
  "key32": "47Sub2AeaofKwrhKQevJ8rcHzVMkqsHw9Znk59oamNUGkXdooLwVQQZqnivYh4Vw9bzJaGZLdJAxPKCnDkBo1g3b",
  "key33": "3r6UeLaYXQh5zarFMEUNaZzt8jimJ4u4vHAH3WmvrLTAoYzx1GC5ViFYA6eQiJ9mRqQYaLw4kaGG7yN8efU9XqJC",
  "key34": "32YnWmeJQoJC6MFqNAtnrZeC5SonuwWxMpkG7bcC41WUa7B5eXfFAbdrLqKgq2ENroFUxoAsB8gHkEra6VcGyTCC",
  "key35": "52Uns9P2MBywESqs9WPRxDTwMMYP329r3zZjnJw1apombzt1WTqEa6DeZm9U3FfJtod85KgqRd2VqrW3EqmKEeNB"
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
