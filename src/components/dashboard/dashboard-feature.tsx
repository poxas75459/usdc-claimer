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
    "52igVu4tmdc57aEQ3eVNcft6rjKCL7eG4Y47HtpqBp8Lr6AhJMRDTeKkFftbEoeLy188o5NG16LVaEq2Lpg2SrMU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ezXuJbFi1zdcDDBkpmvH5gfvtjNuYmCn9czf7jEGTDGGMvxAaAaMN6nLjnT6n16XkayBPYvangpdyFeE7qyzLBZ",
  "key1": "41JbcyGCWWq7kgWWnGGm1bUKZF6kK6VTmrVUdNDGoRUaSFqxNW8NcumZCD8MoMv12HypBtXy4GVjPfrX3T25Kin9",
  "key2": "5AGhvtzAcUpnUTnYk8DNYJHdL3f3T7zt5DVDBo7t5qsgS1YoXYkWwpGjGudycjrM7uW4RAmArrQPV5U6jq4vpNr5",
  "key3": "5jZh2uF6HpDbh4hdG5nY2H1AukbLAMXaMnV6uLpx4vxcwMX7J2ffgxzdRoSQoAqkTyspTmX1GYH7YwSjVvih9fqJ",
  "key4": "2yz3gdZQNEdZ5WjvHmtzf5AF4rbgchY7DZHPacA1H86zx4bSWADKBm5pufAaK2yxcV59sfc54fXWk1As3fBteimm",
  "key5": "338PB7Wn8yEkVeeMznU6kQG5HyoWGogKSUGAuuN4BfkPq5rJ3SZiotcT3QXbRww1stUMawJUG8bRT4XsDSmc4UvQ",
  "key6": "3dSs8sTcv7PqiRaJcumQzep5zktTtUUQdhGi2952UAc7FwrvcVwaadQp9EzV2hQXts4GhANiwu9cWbSCRU6gUMEd",
  "key7": "2psJFUBkzjGVDpwzw4T3abynzbF5ihcXddHvEtCC3g23kergie4DDa4bkqQ9Qe7nVkr3WKSqhrWR1um4HYZfMkwZ",
  "key8": "3L8H9kqYjoKSKnkvC6VczGS7ntKaVyjuabdueT8xerR9xDKoQHKZiioD5nYJfrjDKor3hE5KTmHVVzHSq9EJApd6",
  "key9": "2xYasmPEw5sqTxDFYmusBghjQrumH7n4cj3tvooFCYa39zGF5JiCyhX9S7YDeEBrhjLS4Z5kJ6CKxmLFrm8XZ9ur",
  "key10": "3wvvUSDPNte2RAiKV2p5FowZu1Bet6zkidsb78NnGY8ynMZGi8a66nWhsVpYhrLoPqbRJYvdEswSb4acwzM2J5cq",
  "key11": "4hXwRdn9f3UuW4WucvgNVWiDFRt2PoDfakRovJCByjMknmid7Ci7ZRP53czquLABMfMjkFdrwaT1EqGPCaui6AFP",
  "key12": "47HqXFtHyUQsKfjq18c5takiik3e6k9MSQGmnyiivvv9wqYThADwXKnGMUoLx3JuzvFAtMdkkYEcmeRgqGr63HR1",
  "key13": "4UTsudDnUtZsDudK4s5SNEE7jLyb6M2EEARDqJCBGScc8Xa6pe2v9ZRuqaTCjZukesv582mwAgumj5zQV2S3tGQa",
  "key14": "58J6T5TMU7MkH2H57rJD1ULV5wo4KBF57PmREUyiBBDnJ1XdPFszNxp2t7gL72ABPTwQy8DCLKnBnWwg7gbS3nr4",
  "key15": "4APT8wZzV2CdybQg5bGhen1nR775PqGjqWihSMsqMZfQVBdBYx41wa4C7pxC1u7EZuFbCmaW78fBePvvBFQeW4S5",
  "key16": "5QUgFihD3RRDjEwWL44e4EtkEy1hW5r4NK9qSBEqKkwtdrGvAQJJEB1Hmt9jfMTBu1EYNwLGV5vciddZG9cjyDH1",
  "key17": "3QetdCp7ChEpu82gV6arPqQkRdmhLZvK1V8PBbKdD3fiH4Hw2ZKCVysUpQcYnqk1x5H42wUFC5UJU4ScAqcQRimr",
  "key18": "4humrUvyxphRgJLYBqj8yDS6TmCrtj5D7Li3YAiBuwatvGUBtwV1JRm46vzGZPA3mJZXefLb7LVNxWVKUuVDfGmP",
  "key19": "4t7hKicVTjuNSR4v9bLr6wLvAhGWyjoTXz5zgFLj5a68dkBSnGqBuLYYcHESnLj9GiiRdHCJU6N22x4Qc2MgpahK",
  "key20": "3s7zibPydUVeexURAGTWz3G9AwQP8xbJEqRDzMnA56GTyjgt5BVyvo5ocKwdgtHTFcJiJ1owXLHJdHVwGdFTDW3B",
  "key21": "3SUkVK5dKCBeonwwLYTCtoqorvxdt388B6Y7bHL1JDUGDJKeY9upQ7t6c4XYR7PcVRCBBjuCz4Gw7qGRTQBB8g74",
  "key22": "LZQNk9SWoKjVQqbt6exfQVY8wzHDwSdwQ8fppxG6Em2oYdGiSBH3ezKQKodiqQDfExweLfCPS7jZVY1oj4Q1Nrq",
  "key23": "LYAiKfQm9zjveqKdavyCqCV7wtV5TjVkv47GDDTXmhSa5TEnjij3vnuLXJ4ZQjqoxN9CVy9G1ZHPzjJxNDqERNw",
  "key24": "4WRWjk1ULu9MoDMGregNKdc8itx6WBvKZSJr4CdvHdaDRpDFyiYwLRZ1B2BpzC44npnfwK3Y87BVY564A6gZad9r",
  "key25": "5gDH1NoyQiXfkH6BnDBD3ssz7jLsDoLjeMpDYj9EyJbnbLm9cc8ZvSK93d78ED4TbxQj4kvFecvMtUhd18kVfgXn",
  "key26": "5xo9TYw4uSnskqnzcr5Ln4rD5yAqot5PPqPghrpVsieSzMXhdHGbtzRrVuBAEsVuqWsoL58BmjPpnDKDwswbEnKH",
  "key27": "4kKxKrX7ozsjcPcbsEETG5vznR7tPDSsPobpCFS8KSKjzREzuL2PraeWF2ozXcSDeHqN9i7nq8PHEm25EytHDUvG",
  "key28": "46SLEmCvGM5jCYZj9de3j4TRX6beRn2mvHmVQWAeYR29zEU79rXKLwyqZ9jXxSs1H126McT688eRoUmKt1e1V1x8",
  "key29": "2NKJaPKZVnpkhEBbTyMUz8nvyP1rv55uX41WTzUy4k5u1bbb3sogovGJLhzDeoyQwCvjw4bSM9KtLxt2qNjkMtVN",
  "key30": "VR2WMjm8vicaitr8pZcRBkSF6ZWfwQMffDTEajYwaAnR4yF1dFzpt7RBD5EzYr3HNLBkAjmp6JTmbCtPTUmCa4y",
  "key31": "3H6LN2UjHARYPRdF2bJxaC6qWYY6eqXnp2JnDYwx388SotQCV3qsfEKX7qke1yCytCY5tPPyEPfC3MZzoBceVuza",
  "key32": "3qbvs5ZHHvvQ4TA1ma5XtU9X6uS59mAPnwCb1SyJBag8bCrsY9cZPKzLer2MW9CKr8hxWBrqXiwZscyVErydzXKo",
  "key33": "5CBZ8rZXiYedj7QyAQKJ9UC8YEAnQJvX9JpQTZsjMhUJXbSbnw1pDT7Xa9dkbRbDmTZpv2VKLHcuBi3yT72aUYma",
  "key34": "4MMjFQLJNX7L5LQvy8ohHfovVvdFLgmhJcfUqnbrQPbGsqM9Ms9YsAaBs3S86ktyU7FrKpHcNo8mST5YkC1EWbnM",
  "key35": "2RQNpB4ZPPU8RiDr2npLgwJmMBqtPkHf6xhFx51gKmgur9KSjjbzcm6ATt4T5gZjFSqgm2HkKadsjVtNZZzkmPzS",
  "key36": "4UyEjqzQZH1S5SXuLMAZbXSXec7ttBzhgv9B2dDDfP2bNDTcVU66kaXFhqiu3b1NoMTS2b7Hnumbzmyuik8niiWh",
  "key37": "3WJZcgwCDQyc5U4XhYh5ext1ST2XUZxnSQkV4Nyjic794sjrCbPXLN53J4x9RAt8xCsx1gvieXF4v6g3aAuZJ9DE",
  "key38": "5fmLkyrG8Z8JZHp4tzJ7L5T5UvyzsPyv5DE8jCyFVctWSYVbyGRnP1dzeJAQLKndoNUUXFwD4FaXy1G5MgeZCwpV",
  "key39": "2ezZ2hH1F1GR1FmnTDMwb8YmW34CuDJPptvyTsywk15xj6c2mdFcDxBRhNstTLvjdLQECirUX1uZhtGuu1AjE5Mo",
  "key40": "5NomiwrFQyXTV1fTpWgGhHDr3cUhfBZcd3AkYNPRazRcMvr2DYh3oot75iwmDGhduK5R1qGw1TZLsepsPuontgMw",
  "key41": "424GPzXBJW179CrG2JztopJXVhK2sDFCiiPuqztwPZJYMZQotUcpTLUWkNh6QsFu2bsyQidpmPugRFuR7EkScvbX",
  "key42": "5m9BYFuZHZ5FijfhNAbAAkkkdveBhnohWDSXzwC66Cfv9krs3CUy46Gk2e3E7vmNvrpmzHcrHpFpCLqZByxjexi4",
  "key43": "3UwaDFBcg82t62PAaMN5UDrv5NCZgDJwRyN8EBQZJkMtciqQX8LdLg6Fc13FojG5xtcdryfBnvhaeZKfBv7ehuGp"
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
