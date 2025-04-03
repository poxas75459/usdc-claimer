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
    "62JQfj3fcHFckT7v2sp2odbz4hqTysfyDN5uU1oYGddb3Scs91ik2DDw1s78tSfM3CkH3GPqAJee85mnu7b1K2vr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G9TqsfCTB6bboqJ4PDfrJp1Dtjeenc4LpZK2qBLqTYWa2ZEqhzF83PF79s86KZFRUAcwnHieo7PR8XZdVczTNah",
  "key1": "2Ch3EVc4et5BsRPeu4ofXJCwsPdp6yDiLqtSk1FmdcuRSy6jdFfDmaPmhfMxzRKkBn91H3mvVVkZ774u6ThKJaEH",
  "key2": "u4bYr7aP69b8HAZ92Skx5ny967K28GGvCfqWteniZ5i8h3GkxsnJEKGvf9RuB8pLNJdkcVZJVj97UxidDuJGMp1",
  "key3": "4pVdhXnVgjuUPRkhTdNB8LzFRx6PSA6jZhbVnNZjgQ67GuvTAA63Gxk3uNs61pneT9zK3ZLHnzqC1L3sCehWeGde",
  "key4": "31zwyvy1Hm2NZHni29t6GegJ6br3j5Uucn2fkZT2BqAXozmtS5fZg11XdMU3TG93dWWJdoB2CSi8t7PzZtzH4xXj",
  "key5": "3GXsPCP79Qe1nFDnsiYD5sZPSRczVAdD7VcgV4taUbNekeDrTEnHHZWzZo1PDnp2cSiVYJ2oGcyFw4TCtCYZPQm2",
  "key6": "2efvzU4RLvsfdoCAJWc32YhfkyVTC6KSCnkcdHFedV3MKBDPG9auoNyB9kWfssmTQiN17veJfRCjkzBcjw9EGF1b",
  "key7": "2wDKop65YR3qBZrc6NV1BubkRsMZ2jNSFJ615YB6t3DszbspebxXM8QYcexihJ9PcZ8xHxK85UHjyoqHkyjewKVE",
  "key8": "2f78Rvrdpb7pLcw6ZjcFzaN4srHmQNHv1nuCQsNwpRRPAGwDZbBYpqW3Ap4THza7ADLuQUS56TAT6pji1UNa5twC",
  "key9": "2svZoGnyp2YnPC67119WSienQ8HeuxUdUcc3DvWnzdMsv9WrQwU8QUqx4wHuKiXPvXLGUdLQbfHJWFZDuH2Wtfcj",
  "key10": "4HGww12MnpJaC69bMV3hPQJ2GDPhNHXUWwe56BPStQLeZ4n3WRPjYksz8TwxuTMhDcPXgJLgx72mbe4kMkRjgtRi",
  "key11": "55Vxiy8APeg663rnRL8N8E2ci3GkEr7syVo6U4hZg9dCRvtaTxxua4wQvXgWzP2deMP8gnKTNxeQvwFamjYunPyv",
  "key12": "2Xx2ZwTQkiEDfycoTsEraa5YkGQaMMtxpT7DCaY6mnSRspKHhhfHhLfT13MgDWfLTjvGiJiwgQvHPoGZdsnw5Gik",
  "key13": "368C9ZwUgRDnJ1bN5A3N11GmLYb1iz2xQznTR4eL2SJ77Vofwaes5C69tuGQryU4ACxApQQoZssN2pPX7fFSH6gq",
  "key14": "3d3ZnHdedNRT4KQbkn6MAeV5oXddkjkDUXC4Yf4AqMSjm3EhGTvR6T1YXdcQPnoAH57JVLHhU8KZV6BSCKKKuhaC",
  "key15": "Dhk4UM94ZGHT8ranqUpyuFHmXJNGPLKDAxXsGq8tVSJoeTtnQ7cU2YuGYfW6th77UKZb74sKhKSYWmS8wWaR9ic",
  "key16": "5GCVMZrKMtCHzT31esixdKy6gjy4yXAjuy4WVBWoR6tdwX3NVjAtKyB1diu9kdo159PABfrTXHNVeMMfctXdzXs6",
  "key17": "5Ra7tWxmZNeyLQg8Tt7V4mf4ZEhkXaSm1nDZKbhqpzkXUXBYvuhhpVuZkN7BWukZjjwqjd8HmePdr8dnFsMZm7qc",
  "key18": "5uxAkffibsAM8YWNbCpXjTprjGG83DrxX9eUH2tXvE3o2LRn1HMsyJJGEihkmxbnWJZrNQGCCspFSbrvfXmvAGQB",
  "key19": "4a3zczRzxvEgojvsSYe1h8rYupxTUKsAXNpht7DwSugiUpfZyEByKF6f4FWCyAf6asxoFKccamic7rN2q7ukvYSB",
  "key20": "2SVw8sxa153DDj8759xfQVodSEfNhdEsB88dqBp4H4Vn3bLwYuoioxXn57E4VMg7CdA3B4HHwhoqfmvw7BdnQQdu",
  "key21": "5HojK2XBMLkKARvABd9yhgY6boxkoBKa8kxmULy2xQZ4egV2fqvJxTh6vtmcDBZV7CfMCXVa5pz5kNKPpT3d6UUi",
  "key22": "3KenRpZSKiyR2fZ6oVqAgmX6ejgXCYCLujQo5wy5c34sGWn5nUGn4LDf4L9CJPECvDWGU6i3kVLo2eKcSgT9Cdfn",
  "key23": "5iRhLBfXSytMP8gZ9wBrnrBFA58Mnnius2cCycHaEV9VJPq7QCxm3BQ11F9jhaQuXaWLSWUSeUBkvH3zQB54mWUe",
  "key24": "2X11wAWtg4dEKBBi8LK6ZtKP1Wmf1tkqes7eCKvwHk6BLABtmiELDYp81fkmWoSKdeR51gBPagbjP7HDaSGqR8g1",
  "key25": "52a4MpwQ13WPaUZ5B7auHRfVpXLbFEr528rBEArmPkGFRLAuWnnk9pVjUYBKyUuJ8SEBthnaAo1Ee3ss22Bn1PrF",
  "key26": "5FQYDaTm4CLYC7ahDbpFpvLex3XuFo8qWKQmrpnjLVGqRXPvuopbSKxiKPnz25SzznKhRphMJFF5N3oPLibVYwcT",
  "key27": "5He9QjP5Fgnt9vuEsceHt45DHC85LDiHngnhZsJSDvMp1i4hVCkufVCzyWoVJ18C25zXCUBYM5EkpP7aRjXSX8pX",
  "key28": "2H23JiJFyjWAPRSCHX1UJ3JPqgT67N9BHNNWdrFkmGvpHo7Ec57Vv3LXQAay9XszUpEJ22JsPJBHPZgo3EsGRcWU",
  "key29": "269MvsoeKs3AMXZ8MEeZSM7WJ7azJtsbJJojWzmXBHxvbeCC16yJczmUkcZu4nsjJ5Hcotb6pbS5d6LbEahpJtxU",
  "key30": "eZ69QfnyUwASxAThk1bEWUXqTV38MGwHF1CkHcgLMG8GoTDkLfgSNmKXFtsK6bCaF431znvvQLfmgZdUGvFZ2nf",
  "key31": "4eNQ4nD2ABnoR7vutJbTQY15VsWDHt72bQH3u2GgM8nLUShrt6ih28mg1ddvnhtowQYx1zCLpiYXAJ1pBrVwqyq6",
  "key32": "3S6Z5EjQ2ozQrCK68Awnau9ihMN8ChnvsQaUe1izKQeBo1MwneKaeipu8xMqfYSHCuZfUg6BoQyZ5Y81kPPVw8Ya",
  "key33": "Y5jdS7HNPJPjbfHR5ALx7QtEEs6c6vrxj3sw4GoxPu2mgbryT3spFG8NrgjTT6njm8pFMUaUZ1aovLuKNh73Pd1",
  "key34": "4ysqfsK3HggWr342rrvgxpYvuKPxpevZcXyzFxr5jr3Lvt21qCBCWoswddUcJPmG7Yq9PZE1CEUkfvtQtmJAdpyZ",
  "key35": "2mxKAiYrVKutT4EebtGqCykTJ88RB8Av6bgajA4sBGUReKCr12BiLKWqkPb7Xq87SwDxBzVi9ExDjgk5F9W4xWjc",
  "key36": "3FSXJTCRP2LWMTEgpS2pizJdfWKuY5XsHewZR3GPkRaDsu6mM92vVkLPgGkLS4F2VzH58GNB9D5BxmX5rXVyRtQ2",
  "key37": "beZ9XbPHfKr9wiSaZz3nrkDG5jPonCJxSFgrvq3YHYzpV7M5kMyhsbm1HEsU8wNkq7b351XUVvcmDThSG4cD1SP",
  "key38": "seb9CDcctsVbkiRuL6SSZhUsaCeqPmPtuawxdFUwDgYiS2bCbXEv3iZu7JiDa7G6nLXjPBYsac2PEWsbzKTZi24",
  "key39": "5sKAhtTbe8JsM261PEHAZ39gd7WDbxtctNdEXML64hZUSyNTg5VbqAfN25y1mz9i9V7Mi6Gafsqde2xkf4aeLvXR",
  "key40": "2FqUhHcyFaPjBesbEibRaUaLC3jSkajquH24sGnYHnuDhtnmXFDKcQa6RAWUS99cPvLpkwWKGHPMkWXgdyhyKbPw",
  "key41": "5baEMi9zMJ2V4sJRy7Mi4w7qZUwVUiRedk3afTEvwfG4LddCWrTNB3eyhjtWcoRcKvpnUij7ujEqdJFuQ7upLMRF",
  "key42": "CTrvrzwQF9RvQFisYdhiFSMdQgQeJcwo9smT82HRHkHHoAsL1FEkT2mVafcRSD5GuPUFq6sGdsFKeTn5R6SX5a8"
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
