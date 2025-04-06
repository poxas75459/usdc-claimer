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
    "oiZQxCHSe7RsHtRgiwou84dqzL4GC2Uj8c2QUvzE62M7MFQPQNnVULPFsCoQKvr8cRZ8xzUSeQ1L6EUjTeG14Mm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qn3N7oytofCsaZ9eBzZH59SbEEYk4NKU1U6QyqkHZEgSeVKHTWL9ogFQA79BEg7kBuBtXHJA2V2xnpi5yfQaPbz",
  "key1": "4UJrdbDmBUSz9mW11NnXgmuMRvvvKoF7fGj5tPrx43WACUJT2XG5w7RtTV9rZaVBPjbwKf9WPh7HtkLuYcQp9djq",
  "key2": "4EDbiAfQ2nXd1ZqEW4PYTPk1s8E6imMajmia5KDw7tbszsPxMPEAMHDfYJ8kSE37RSzSHbp3GBXpS8iqXbJp4roz",
  "key3": "5tx87hqzACbtco6sAwY8F4VugyXDv6KVwsN6aUvuFpmddVQfXwv7L13xuYJvpEHvAHjR8urXtgdniSPBgyfSKG9Z",
  "key4": "4tnLwPKHNHFN2k8TyUM2sn8wHUQcqg6VPi8k7Drr5zv9mojBXsmb42ouQiiK5CPqMF4qy7zNXAZJVkrJFeVHmQXu",
  "key5": "92W3VUXkdNvnRhzmP3DQ2nrTnADPf6ob4vWNTE5WCpBNLexZpr5KE9J4xp22dVzB1gZbofUwgPtnK36sZYap1Kc",
  "key6": "4H1F8cvy9uvoe5SCxcoC5jkg7qiYascmDdYXRzGQdsmjFsPCuhwUy3QYHmpr5toHnYpy6dvmCxswpnKv2RwQho8E",
  "key7": "2ziPSoXd38MuVkPKwX6wd73sMPjRrhZBTsuhBFXpocuj5HvPxgP9wvaeReFYL84WZam2rQrcrZBGTUchp9yusiwr",
  "key8": "3HR2N52Nz4uAL8MChffb5fPk4KtcrzP6GAY88s3XeNucRyfhvkDu7wHEB8mQk9vr8nRpt39CsGcVT8rPSDYwWnm8",
  "key9": "4Jg9LEMCDVPHuxh58VsAZnHXDsGp5SoQLhPk5HTDZBekj3LXwvjBGds4XUe6JvW2CzJPbFf18id5SV87UqS1f2gj",
  "key10": "2gFujgZ8Sd2YQbhaSMgpCH18zCERpHuej4Z6fwY3B4JsBvquBRwZP6dEqfDeMmmMdSvf7BxiDvrgDBCN9nA9iQdY",
  "key11": "5MR6LowxeqaKwdWudkP92L8oh99CXxcRuKTdnmTM6jLt5cJNibCBisuMWGrRPgi6A1z5s4N6LGVX687txaTYW7xv",
  "key12": "5EreZuFCZ4ifnuj2yKNgXU67MnK5iKWzcr6SqZpMKtb9pNiguaew9F2LQgvCrgDgpZ6h6iHHjuHfoXux7wcsc7Xw",
  "key13": "2UR9QQHaNLJiJAnFbRyegSrh8PUE2WsFrVxwHuFzEHijzouUrCmjDwks7ga6odEq5ftvS6GLZ3PBuqaPMgkawAy6",
  "key14": "4FttD9LXe5e3fGMUuUBLYA2WAUiFqiPrPbAfrnVaUuK2yrB9M6HQioQ4VBkVY5AxqtB8B2hnU7YbQHMipMccWdU2",
  "key15": "2LnABP21qQhLaYuwA3sBcoCmFbiBfnWtP9bUqQY6vM7Gvhd9WFgXAtH6GPLhLYuTAKHrWpeyKxA9p1zcgN1D8bKY",
  "key16": "4en8fUfQrk2rFDGntFYpX12ZRCihdquyXzGGB81w3FeTCHGcXHxGVCffxTas3STvMWbYgoYdo4KR4j7USieNXGoF",
  "key17": "cxTzxUu9HLKBZeXXmxftcApe6ofqibCusvCyp16GssSDZBwGZaExQThWkojr4UyzNJyCbPN1mJyU5mK4b6KwCFD",
  "key18": "62CHB2wkcjzK5Xcb9Gajk3VCkcPHtDZUgX38K1uW2Bk8azynrv7QanTQL9ZkZAqqNtgeKBYts8fbLFNGErW7wQf9",
  "key19": "47WsTbZ6ffF3wqwM5rVgKvLdLNjmJA5nn1Ep7zq5qmXHXMRAQ2uz536p5noBZVQK5LUwAUGbSjhjSLH4QZ1iFivN",
  "key20": "4XktVFhLMCnUK8JPP5FrDg57oXcPRWc6dMUAayozh3WgKTKq6P8BhminmocHjdDSDFGHr5JmzZLMBfyH6vVGWmU8",
  "key21": "4HdtteAevu1w5jpje933VS3EFoVPoRuM1mtDuCTePVanBL9QAUK35tbH3uck5DpDjxNBUtAEJnRhyhLik1HstZHf",
  "key22": "4a2HmkWopgqbsoEmuPwHMceBPceovJdaDRPDBfBjrU5xE3tScr6rcd7zcNVyz3UQFsWH9H3uJdSsr1WsDaB3VWDG",
  "key23": "VddKUFUG3EFPZbPykqjvygfcQtYMiYSjQ8ss994QFjRP2uiFTRo7bLcsFk28SB1cz7uByFKxz16sY3xcmaT3PJW",
  "key24": "2QQtgmyezsX8um2Cj9XayKMA3mJqXp7rBWQZ7Lub3GbwiAZ6ZUicpLQMJg4paNpjyRzfW6M5NQX5ujEazAiTfti2",
  "key25": "2NURrN47xyA8cihjAXUQBC4Z9R25sgDsHbZSs5EUawLhfrLgUHW1KYQjomLAsqNKHwWAa9s3B2DL7dfe69JwS2bY",
  "key26": "36aax5cESZajWQL7LS9w5VCPR8o2NZzfMURAui3o74C8mx4VFW55wP1W5yAHYMhkRrLRgHbrT1vSdNNK1HXCncpT",
  "key27": "5dbbWWGffFksLaeobH1EVk9pqTj4gj8wPjYSZnztuf8RQ3cbrPef16zdGesETniZEpZB1n2vV4oXckkGFriXNfk8",
  "key28": "5tkpEK8RyqKqQh2d53fgbuaLQB6bNguauMimnmsk73BoKx3PHqYG3XVdFwd5MRj2vLz77AD8T8YnE1uCENxUPz8m",
  "key29": "3uYFSJFoNztp9GeoLgTHWb2d15qbQZjG4ptJ5RAygKkhyp7MT2DZCqi9GKahZaj9f1PpPVMkyXRn2RQEAGAbkxy",
  "key30": "5a6nzc5gFr3Kzhfu3MyLP1QP1YXYwRUyTd7P3wN4VbxM2G1uWYb6vzXNFp1MVDKpiG8Ep45k5jk9NV9cfHdU62ef",
  "key31": "5VPxBoTcx85vjfyjdJXRAymPGFp4MCBaTXXPAfsLR9Unj9SnomFeRBzh26asG8X1ZgjHFhkrPh762qhR24jft42K",
  "key32": "2WQCQDkrXZaiQ2KuwhEfz4DdHTaZsYSduc6uZnS4tSFeeQTKiTt9w7UpwNYh5H6E1C5PsKfFDcnPh6u1bDG1vLGW",
  "key33": "GCnGtSNGGmk98YvogXrX5dzN4GuhffULhur9K4CNtw6bW5rjpUHFJpKAmm45saFHnQcCtvkEnPQpqWi7UXHH86N",
  "key34": "1bCoJR5f1UDfp4JAZCSWw7ZvXhArdfZaTAuVQFPd6q13D8p3UZMsmSjgxnSoEbDnX9ipW11RwfcEhEesgLPP43M",
  "key35": "2pJdrrffpYkq1XZtAmBqbVWWVCT16pGtfB7uJkBhshxeNte6w92gXthx4L1D3SNwFZYrnu6n5CJyS6MH2jhUaXLG",
  "key36": "x6MBVFXMt23D6pe77zRoxYQuRNjr3L2S7AKBzuAXq9uKR9bXTABLfum25WwSvjn6AssmDBdc9Sq4MGvD1jJHsBJ",
  "key37": "fSgt58bWMMrkT4PcvE4aDSK9chvdQGFYD1MwHZ8JJpPB3B8Kz2GHTiTGCTT8RFDKJEjNTkukzijuR5DFPQUbYhh",
  "key38": "61ybtkgr8pTQ4cMfNbLHuAJQSQSy699aTX6DXaRm6sBdedLSLkbTBj1q1a63JGJrrymakYpeB3Y6oSxECbuHxXsB",
  "key39": "2YM828vTtXtVBfNiH7tvVQJ11QPWdQeXXmnNGt9EDtJJ43t2jJDNUChqZxNpw17MXNgnDqnT96GFidj3ZykVctVX",
  "key40": "LyDmvuH3LFSArQJbe3hpWmU2soPvWFzKkjKxi1WDXJTAiRmrzXTUUPVeCZUnyirjC4vrcXpUyAapEtrvaUrTYPv",
  "key41": "4rmvy2z288s3z9C9x2oRa5pFK6LCa6wtxbpmHH8odmXC3UMfrqGLDUy1PSWab1oZ931x1bh2kdwKWo4esZ9gNuPR",
  "key42": "2eNrHgAkpYVDt1yt4ex1UFshSXezR1LdXQmH55Qqsi7p6f4eeNiiQcC2nFDx4pSsfhgAfKUMSDyuSjpQ8kVG9WV1",
  "key43": "36cqa8sP9yUUsSyhooNqaoSwXWh2o4mscy7DzTDVV2L65RUxYePoqTd1dYdRNuTwaNrfSdxT5U13yR4PzS7L35pq",
  "key44": "UdT8LGqz9WTMHewVk1E58qM4gTYX8u56poWiTEWGDpNKyST27AGv2Bbom8nh8CFmnSdoBNxviFXeFUwQXTrRGjW"
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
