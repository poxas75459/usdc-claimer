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
    "N2xJqUJ2TUZLVRV2NaTHr6TGzk884nt8dRJyUW1nB1GmVd4JmdBtchJcEUMPfsMGudEV75mrDQUPQkpPCBTp2fo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sMUBbEv95wwoqjHBjis74mn7iLazwMJG1DhJ6wCj5Pd1vvPmfxRDvm7qvkAxqE1n2WtpQopTqqjgxmP3bodUSCQ",
  "key1": "aB9WU8w937bESJ4GxturVCXW2z4Fn1rAPjMiWRhYARe4YK5N1jofbSLLrRdSDHSb7je7MWVvkTZS4EwQXLjEHr5",
  "key2": "3WQceWiSLYJbekDMhwpmfXTnoWZvfG26DDgi1cN4GuvLk6jZPwgD1rmQFewNfNWA2mHU816EVmLkkHMxX2XE1L5C",
  "key3": "5AxVyVh1ZKC8CU4PJVPnWHNbFVbgYV6YmHM4ANxN8aws81ZivPBLDdhf999k9MT57S5hhhLsnctmLQMDira4qiod",
  "key4": "8vxL6hS669ipq61DYNAQopXaWkB6Lq5q14WbRVyquNut83ovfDTm6kko5qK9S99XYLCiuUvxkRLpZxzajNn3urf",
  "key5": "4K1yJU7TN6x9vfq7Pg9VE9Vw5KV7AjNN34uZB7svVtzzMFWcZcE4yDJdvn9ixBPYAN1kuxNGRYc5LWw1bCyy1tFB",
  "key6": "n8dBDJX6i3A5U4BWhaFro55znsfAWLmVyVnXyirkNT3d7M6WHr3vV7sx6pQhvWbvnzjSwoKz2LDmaY1k5s7ca64",
  "key7": "4V4hNWEZZVXAW9uvzRg5oPpQTWhihSe3JUXn16zB7oUquFPMrWnYovUb73vr5Reo14uFxMWp3gvnaL4JFRvMvtWd",
  "key8": "47cpn9wAVnPAZpKEs62N2RnRXfnMbDDhFGsZHN4MqHvRZYYJquhHLLkJAzyeKQfYw1tnnzwUs8MAfNZURto2odaW",
  "key9": "52HGDhtnrs7C1Z1V8xSgFMEJaYFjT1nhypFGuEpc4vgDG5HJjTH4hE26w9DHkkSqQ6VsDr2Z38fyhANkpJZdk5zS",
  "key10": "4PudAEtexKWJ6yjDiQcwwGL1BfqYL4ppqyg3NncGXgCnquG8PLRGMrzTRUgxJhib8JSNxiY97SVMZiqJ42b4HVtD",
  "key11": "3ozBsyYknvP9dspR41rNQ7XRnDhrCN7KavRVLCH2Rf8Bzn4KLuHQPkzg28EAFjSwHFxv3QeKnqdxHEGKbkvoYAEG",
  "key12": "3u6n12YXcdmzLsydkQ16Kb4ama5DdfdqoPkMQT11WgGdNP1zRyWWCAE8Paha4oPYhdeYYdGFvjhs999WJHGAHH4T",
  "key13": "5tVEQUJvM5v6ToGJqx3x9iH9EUZqouQK5e3PZZkXYNmEpFmKNRJ5KyieiUqVmbNuWmBDX3vuS39cWybPTJiyJwTb",
  "key14": "6ThMwucjbZz2LAMSPZHendREtiCMf5r878xXtGpnsarWJvd1K7jghSgp1u5bSGh1fHwzBpSVYuRn1bJJFZ64ARt",
  "key15": "2Ab7gT5QxycUb9HkYdFRa4thui2fNfiH6Zor1ZG4JYDwTF1TYXiz2u1KRPBJqezdkL41eWq7UGFRY7aSnJEBxxZ3",
  "key16": "MbB2rn7E1kEGS8K2u85fwQPW7bBi5W1cAzqEdH3D7nA1xMnrsNP5wYofR9WxtWE7t5ncDtBRRzST3vmPh8kbhoh",
  "key17": "4fhUGhLcP8vbEBg9BYuXsRzsgr1RdXV6snPp2FcLt38CY4krReu8FL5r4egWvT2NCMdnbBsMGkEKXqECFAX7H2yu",
  "key18": "54ocDBX3Mmu4q1B9LWmgFKdDmerEfwk1KjUPohWKGDyihVfMTeBpeexP9cmrFDz4ZrpSn8yTUQr49uFBxipe1YD3",
  "key19": "5Zjh4uTnA4DYuwu521SdJmVdeBJW7RTwhRT89xDxxZa6ZLbDtdRsaaFiFyUqbpVfGEVzbAdnzEbYP1kUMBhtRXvf",
  "key20": "4tPtzdcnxEmh9LoeApdPbmeUi9a6mDbuhhtULvQZoBxhUBHpQbpmSSTMcwMN5z74Zu3s8fBHr71iMJjZrNXh3ij3",
  "key21": "4DCfbB4W3Bp8BNQoPMjzudbV83fbMBmu1FefNi8tg44m8X49vEWwBf1D1HKMovDn7GXjN7zp6sPL9d3qsKnsPPm3",
  "key22": "5TJ22CWpHSBSvZR3NxtP67BGRoMWGgeVNBwTrCh75gdrpzH2zymBL5asJEZv5RBNCvPnyz3nDFE9vcAgYh2SGTxK",
  "key23": "abNavjavhMGKwtsCi8YwJBXJ6Ay9JnAB4edeMeMn6EqTNZ2vktBu7Us4iqve9NFsWViMZ4GrG3GcfrMKYfoArit",
  "key24": "5ZLvVvu8jYr2ha1DcSuyCpH311yUfrT5cTv4W5SLAVXRKbRc2mPheeXe6j9oEZ63cEPmrDKau7FcVyXL3vxqyupE",
  "key25": "5F5gEZcsaJ783AYnExWfPDJezBNKn7UKPKUJx2qGCfQHVdWvk9UXRXFVApFdjXaUSFWDwRoRvT8ktmydnk2KoegB",
  "key26": "3VghQpBiRnB5W9gT2DnvTnXhkzo2Bp7ieq2gkD4hsVMFrXnou5VbMeV2KQn9jCdLVA1ZAYMeEEHR6xSndQ7LCNf9",
  "key27": "hxzLL6dM4o7s1ndE74iYo1qgj2mEQMCwPdAQYsRhF92APh78Dd2MygQ8Uvsz5s3ximzMzyF6ft8D4AdtTsdLLAR",
  "key28": "5NJhvD4fx91i7Pwb5ims1o1XcuPEBbHMdM8XbMqG4moPXDYwDYa63KambpiKqB7RtzyYSJamFaUgaA6L4BDvBQvY",
  "key29": "5T6h7rRJGSe2GowtS3rTrxX96TdhLUnE4CDDjH9PttnNU4v6E7UprvGv2TsgresSuY4g5pDyykRJjwoWCmM2v6Sz",
  "key30": "3dTpb9GeEvvVYStWWWJUFsnAgd7TUGPs1yFYhUu45pb8NrfPr8fjSSJRiiFm7sBsq5ydK5KARPpumRx31nNPqoWB",
  "key31": "2EeGBqp4YDZrfxEUjoiLRabxpgZEgQRXzfWzciGaW3CiGghnWJqkWM7jkrRWmG8QwBstmACtTpws8Pz1n8qXjJQm",
  "key32": "5JxncSn2i64VAbkPLv7Q7Rocqs7yoH1NzmMypuQqptcdDfcA6dsgT6FNRd2Bezt9rGBktMR8RW7R5eryZA9MqqLi",
  "key33": "5CBmVfCCaYADXQLbdKogLsZfaHPj73uYwQAUMHifZ1fxLsARv3ncfdnb8tXtNp8xAWSeePqnNfwiUvW1MyZ8AL2Z",
  "key34": "3er33pJWJyFL35bRgjvnXBDuE2rCAbxSCzfAfGeuQWjxKLFXnsFGF6mUrtuEiu88ghwBDGJHW9rMTWeuGamu2uz",
  "key35": "298Fsr2S6zTaRmu1xkn4UzJMDG54MCTPA3VKZHFj99r59JzhR8e7oj7o3P3Q3ACkwwrGeBAZAjhNQWYQcPSE9WWC",
  "key36": "5i17TSseARdf3kZyj8RnEfEgzV9bzo7n6UfcajMCXQAFss7syxipNXBSodQ2xjijGV8ZTk1h1tEkLdh5wEbbYZFc",
  "key37": "Fa3J7uT5L5XXHjcmJpRPghvojuSqEoWearKj2KZEdq4hFBChyF64DPEz2sReYacP4Dq3SBhuNhGj3NEDyMaWYwy"
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
