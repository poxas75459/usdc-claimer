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
    "8Me6jbGArPKZWkL3AHeAjK4qubSyJC51QeVmeouP8TuYt4szCy7fdAF262F8m9ctrbaNtSxmHhn2HSWerX7fcui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s5THR5F5hUcPmGytpZacK3pu2QC79KRAgrZ5VVjkv94eicfSt37o4bDuneVYjdfNPoxCfCeU8b3WkHtk2Zd6Qqm",
  "key1": "3EofhiX6MorrudL2ucK2HKzrimMWePKFmoCBTjxo389qV7c3G2cKapXgSN1QGMS7qGz8m4dr5YRQS8rNDHffxtrL",
  "key2": "4B38TjZmbiWcYHoP8ZHNLAq4CJ99QgKrgZTugFVMVjEpxNdue6nhZNjEc9n55BMEsojGJynaCPN115gVJzbnijKR",
  "key3": "5WAhfVoJWtcLCxxunSzSTD8DrFkdbYdDheYrEiaVnQen4ih9EgCDVyF8B3sFYM7a2QRooSrAsoifPfaxMt5UfSQA",
  "key4": "2XcECpZfyH3wQ4kzNyd81DvondLCXWAyKq8m18AMJLGkHJkPz93fMxZUXxcBQdXYi7MhS2F88DQjo48ZM2S5dwbM",
  "key5": "4acziNQpCsU2LyJJ1JaHrs9w43tyFY9jKfbGYrh8UzkZL6JHAuJj647UjDvq4Xs3iGme7ZaH7AvpSMMPdTYee5PT",
  "key6": "57p5ak9Yn8UtEBC3a4AnMvoqjau8bRikbTBUT4Yore5SA81Q3sAxcaK5guVxeQWUHPt3zV9vYLTdBuw1xFv6Sy9U",
  "key7": "ooF5haRT2W589zqEQ2QrJH1n7S6JE8mRtqaWwY2D2JPMziN8SGaxiTktmrKpr4WNhCEtdvXkyTDoa8GUBKe2GWK",
  "key8": "fd3fk3B4aYP5cKjh1K7L789ux2rhawiDurYCjAaQKDWCxWexr6evfuXouPqesfTQcVWctJCDAWvAjk4Q9tcXE5D",
  "key9": "2Wp2DhjAyqgoixL7q4duMXXR2d1Vpt9f7qFMfRBWp16n1U8nRdch3jbD6qb2pjpzkVw4gQEmS1pztXKqchSbcqky",
  "key10": "ct4ngw6qHgMqMn1So33aUuTm9S9wrNmhbkgxiSUGxbDkqdCTbBEk4WMygvo2MTAmfbQNSQzKiCVF7MZAE35mSQU",
  "key11": "2k2rPEf9RMSkoDkbh4HqjgomLkVCpY6SPQzGeZeQ3FGwPGbCQmn28mHPuR4JahxMHkU6kXZCqE1FxF9Yka4bXciA",
  "key12": "5dEaPETfrue5AEmR9YJbwts8yJQMkUp4GafVytsNvSUp8GHavQVpMcmNgqtTMkT4QW8rNAQ1rP6ecWy8CuGKdEeY",
  "key13": "5DMP2Spk2GFyVxXQrhq381i8U3rppZ7ZEQjm1LyDFSFWYyAJGYCWwDPG59J46eDCQEV3cgQAe9fTfKcALPwfqkNt",
  "key14": "2WrV7LPKAgQoKQhETmyqUQnKE1QiA2oUqgRX3YxFj35CRZNjoGkqGrSRkfFboNHhXDYiBQkuVCYsT8iNfeUkCd6S",
  "key15": "2RM5qNGcnhLhcHHPELaj4kwSV6aA9uuxDgHdoBkkBmhyyJABh6xtZzCcDLVNHLJjzGMWKYsnqBW7A1RDmnYyrv9X",
  "key16": "3z6JXXAwmhvm8XxXoYMMiqCT4K85mzNmf4evdo9a2qjgbgo21UTE4F6xmgtNm4vrjdASfnTQ1yK4iVs9n34y17y9",
  "key17": "2DWGDoqobv9Ds1Dyj17EH3fi7QqeM6kbC5YMsqPnmmTefx2CWF3LqM6K9yR7idHDn8doF8tyd5pE7s5g9EZGikh2",
  "key18": "9qQteJHmquWB2rHkhYqEGaaHhAs3FGodJmmMoEYBmanBJrDrn6A24JfAe5nqYPSMAPkzN9rPzugz5XqJ66VyVLn",
  "key19": "3H2gMY7Q4dxs3MHygKRrDagqEdMW5bJGEQwU3rMHXKGwNcg2uXqEUhSQQo1TkiaZrb8sCfgEaVefiuvPTFcJYs9S",
  "key20": "WZLHFymaW27gtg9k8M4EoRHKaZK1avD2ETptYnmuzbGUCZxA9fVeYRiorrTCQDZpSYJSjTjr48wJ9nN1XWYPiao",
  "key21": "2BiyB81DbCyj9g15B9e5m681wfUmVMbVKLADx8zZCibDWCC52dJMou2WxkFHZqNtWUUDoJvECJon8Zy3Ms4gWXVq",
  "key22": "4ZMD8tj1g1Saga3BsKvq7AM3dpNjzfAzEJ2tQb1b27so8SR8ptt1fTvLBX64gzcPpyhVgwdxJev7ph4MVVxxUHFg",
  "key23": "FX6RT18YaQaugs5ZPMYVLKmonwW556ZzKE6GDK3A7L7u5oFaNcgexiGqa5N8NNpPifyCcXZwtarjkwMBzJH6XFZ",
  "key24": "4s2sVsiVsUu6oswZyL2tqAq8ufr62Tfv5U4PYhJbPTETJxyBsLo9eih7m7bDTBLUEBGPGudxjTDfpK3Q4GKoRe2d",
  "key25": "4ZHpX28ksZLgZ6V8pXrLGfAkSBie1yeTfJNNtQbieZLkkd7CCtGxkwd5Zpvu6QAJBUbJSPWxmcvvcjuHTKwnXFbo",
  "key26": "NAx7apwHfF9zYDusoWRjys6QdnhThUpG6bc2GhrLteuDtqWyJS9Q1N3QnGPW8Uq2hqXiW3NvHy4Epp5tMm8nQRX",
  "key27": "2Eps8kYDcdPdbTwziTbtzwEYVNZ4MP8huWacYoYyZdeCp1nSQMGSV1nXnJwu9aFEm2BFjLoNnNYbVqQpUmzY9ZuT",
  "key28": "5iRovHjVFZbGY9knu4euPJUBiDGHRDaFQy3Zh7gH9pNFYLxn8yVVqjBB4oXtXPuEW5eKosQc1Vu1mSjN17eQEk4t",
  "key29": "3K5bf1FsxMw8YA8tfLwGRbec7uMzHgUW2rns1erWJsEytqXyegLXj2oG3jT3iWHL7QVUKXRZA5wEehmHpiByTTuC",
  "key30": "x1FzbnJBNFk6GTpA1aELgBXu99FoVRBtqfX8KiqmFnKNC7tkxbezsDy43R3ThoeedqhsSb9roUXCQfELXVazQ7Y",
  "key31": "jyGXHphEZq1PbiCN9ztKBuVRq2B3cTDrYNFkY44RLfSA6UqKtNjXw7G73aYfwXNgoaUG6G7S9RXqaftzzoavFb9",
  "key32": "3nLkyXrk1DRFiV5FDNfQhxikfJtvPkBKSDa2Kwpjn8T6st9FCc9KANjxKNtq9WkQwkeQWidWNCh4eXetzU5DCQr3",
  "key33": "5ndqZMAzkM7ebUipt3TGU17RQsdCrHTS5YJA4Rci91kmNsJngXJgiwgTJrcjFProyCWsLbQheaXajJq8Zp6RVPZY",
  "key34": "2ytVEPXYvYQQmbfDdGwCMkHRHbag16Tic7cMjHTVhKGZUXrLPGmopzffZ4Qa8PaPFLJbTdJiUyArRQH2VxRwUXa4",
  "key35": "66EX3c2oGT7Xr2ti4YiNeUm9qjfYLQkdKVjrsghnGDSF53b38CQDt9sjSJrSF6VaCHN9746xp5KiTxf7oJgy7Qk9",
  "key36": "4KoDk8ANwVVg7vBQtf8TM4aqhM3FqMe2MT6vpgrDGUKtVvEC2vh1NDcj6gUxc1pfm2yaNqpYDQDna4figSTwF4PB",
  "key37": "3sgE4veCqqoZNcsXjRr1K87iShV7yWATU4bd9x5qpvSTm82uLAB75WtbafKBtk4UMURFiHUkC8LUrJaBBagbPUPk",
  "key38": "4eQtnGXYp3d4Bj9jW3CaUuek3uJRmmfk1ATuY9y6zwFVvqWw9qosMiqXns5mY49SDWW6uMdp2LoRJUYc8iRS67uq",
  "key39": "3p3ZSB6KRPtHnk8MJBE55x9YefoLN5DsTU2ShQDC7fXbjQJXaguKvxpSmLfWMk5uZJMLWhQH7vAN5EwCBH4KR5NH",
  "key40": "4eCNhfqrXDSmUfwrTtYy4WahSGKP2r6ws8Q5T3xBn5tp6jaiKHc246yoJBJNAbKWHESFWeszTh9KAoBJ4vkJitPp",
  "key41": "GF5HvzgerP63f2KDyx4NbVHa67ytRH5d6wnB2is9U8Vrm1NWG1aWhKE7SUFvU2ZuDRv3bQFcgNK7JcQBH9LTint",
  "key42": "4jN44CGMsBsWdBBKANmKq5jRj3o8S4eZx9SgsCvZ4Nj38uWjdLsCcawbwXZYobfi99vsHXhWrRVPE3oMMxCuz3Bk"
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
