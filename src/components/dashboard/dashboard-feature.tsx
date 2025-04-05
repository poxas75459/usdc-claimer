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
    "4xuYvbRSGHLQozb3vr1gZsWjoD8pw3GivDbLqgmynZnpkXpXAiVwZgCDzVCGTFhHPSwA8cSm7QWkff7oKXJZgRpY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rxkJ9duvAWrYB9W9URHohPnZ9c5fWsCxozW21MGQAVWDFFHN34wHcWhJgg8AYAKmPwDqdavkb7R5vC4e1WHrySd",
  "key1": "5WbTDoH96XuDre3QZQodvBery26M26qCaYAmRp3kqPqNV1vq7oWUjqsQTqY7mXDH24h8xG6aQM2vq3E9gRajgVhJ",
  "key2": "27LE6neCnGxmKPERUNHjwKsyUeWGm2wwurKDNLH3biBfGEySUbeKjVfXqVTVLrzC2QaevwJcUvfuZ7u4fNMe9HwU",
  "key3": "2CS3nzJr7DRmUcc2PmJ8ymffxkPNfAPab2skRanhTzz8WetyTEMuSkR4bSW7hb9YCAX2MHvzYPsTHvJ9HT9RTrUG",
  "key4": "6196k9jQdA4JP1tvehP2nHVsHjRFipoJRGSkcB8aC3uTVjt1GzPSkbE5pwcmDcbEQqs5hUECmdV26HiaUqN9jsYQ",
  "key5": "4JEJKZoFcgEU5PMpa1furMMxhMzEhPJLF8gbWFVWr3fK9NGeGTWihyWowpvmsouqAtquSXfU6jrrh4JyT7NDFvn1",
  "key6": "5xBK5SHpit5oLS6EsVfiDHi6jnhnA4ir95JTNNBEUdaDwdnL1jobDNp1yswpxBfsequhDor4eT88S5T2KsmgAP8L",
  "key7": "52RYwkdLkEUQmvZKVTaXRU9KGbLnj7VtJMdk6UvvYSjicHqesxLsdPm4CJ97biHmYjSh3nBYmU2wyiuXim9jUHmF",
  "key8": "PgoSpbWSy6yPJvyF9QhdWQkT1AnWQSjS3VLrWTrfqNentoxZi5kyNLnfEvrp7bsvx4m5gwpoa5E6ybfFai5mUv1",
  "key9": "5WGqxB47egMnEReSinpf4JLGibfTVdHBvgw1oDPGW2xprTrcBFvKs1Tqd7uXmsrE1Wvi8RZMcoZMVenPUkLwTxn7",
  "key10": "2YNszLHjJwQo9SaAya7Qar823DvX5jV18fEn6mwt6FXu6zCEY3vLYk2mjbmATFdmBYraNGyXqcjnXjgUzg9CD6aM",
  "key11": "2hTWedGbiezH8ggpKhwNWmxWLSnBsbiAT41WSbnwzNFyB8BKuht97oiXdwEi6XK3SydLWaEjWP7FQGcGp3XFmBUN",
  "key12": "s549eKRHMRuiDqgJRLEkBiDnAzU1YtX7cieKDgQV9A66YJG6zAW3woK5eLFuUQVB5yUAnH3HyyoXDpEKoeWuk49",
  "key13": "2yikaRELWjuHF3v5QMBdAexkwnxBVFC92VHmVLVfz3SiCS4PoPbsdQYbDHwh2MPgxCfvgukzQEYdY5HktRPyDELT",
  "key14": "45xe35ebezwr2UdPuofUPuP9xEQcZ9Fjq6xEVaTDHysCb2NBZymtvA6QcMyZALEM7eeVnbqpakVQ7eVH4V4baFEM",
  "key15": "2oVytHg9hCtAuX6MHyA3mNZQQz66bhrqC91u3LEKwpbtcg6VY4EAefrbBgGRAnbmkE5orU6akZ1qAnVHgT22JJor",
  "key16": "29xXpa1htwD23atoajNUomnpVH3VUZwxyiTK4k92DZZ4g4xSMp5YM8b5qAADEmQW9z1cwwu7dtk5Z1gPiWZaBwht",
  "key17": "4uTLGYjXP36N3CfiXTiTcxDKy1WxfTAJ3gjDifeyhjuvQBPVFWE2JBWh4dPJNSYddU9UHE5wZNqMNNQtFEYQvJF7",
  "key18": "EnEu5x7G2gJiq18KQ9nM1dSNAqwfTSuQPGXe6DMzQ71aDFjVwk1yw32j8986ncQjf188FrrxUP76jfL6WVs7e4e",
  "key19": "2vBGN1wt1cbs3AJZXHYGt6Mwic3yr1ayiWqV9sTL7cAdroyNimdGejVBiqStVnaGTfukoeAfibHfp5L9CuqR82Be",
  "key20": "2zTyUxdMTYRSoTwhiRsXbeMKvbNFtmkPb5ARs7QB3FDZdRMnXB7ZoLeHGDxskhskuACXkfQepphfosMW3SRQekLK",
  "key21": "3Rij4kiakufqTvMmCdqbEmB3izzMVLYRy6Z2iG8RJ1rJEYSZAKgY6e3rMSTh2qPg5nzcYo1hb1vQ7p27Pafy7kz2",
  "key22": "4T4SQpKHKbhfxEQVMLRz2mpjx2WJxmAvLfp8zLyUomeZeAD3pQXGZRukgj1AMsLfFvq371CtGUuzDYqzpjqKJoii",
  "key23": "iyqhQf89qPzYcAprRQgnWF3rM27fDadgnSHgqWxN1VMHsVCkVy3QfjJXXVRoLRmb7JQYj8Xp66f2yWU3kXxCoYc",
  "key24": "5H1BvanWahsQPsrM39R2eXiPmGD1YWaV9hvMZGAWREMmj1tr2wSRQy8Yur9Sn2SjwbJbVa2xw5kZtfR8qCQETVw8",
  "key25": "v6P8ursuXKw7ejwboY2AqBba1XX9SXZQTzN77mx6C2ERfGsjK4rWx2vugHZoRy7uL2YVxcBL3qtyu8GZ6Vfy3D4",
  "key26": "4T6bZ1jvDs9nSYJcmhaY4z5UmTmdAAceGsmmXJaNKSRNG4raZTtbibinRdAkLiTY1gkZ9vP433cBkwJ9nHmiTXdt",
  "key27": "5YsscKHBbd9zcALydV4AVG1FjzT59Uo3o1jp15zvgpJMPmke2bkZAgNKus6AiLQA1wn8raXdcev76c94d8c2kYo6",
  "key28": "X1BwZdURPZehc4MD8iGXu1yj1j7Zp7EPZfKSyrUrjtvfY5ao7HgkxruuNAg1BbYo1vq9EA8m1uDv2UqpRaq29CP",
  "key29": "3fRyJ9JesRuXqiBrLtjdqW4njoezWHvULNSfrpidQ2BmNGqSSbtpD8DNTJEAvvwQcdpSj5Ys67g5FHf7rQqPm9bH",
  "key30": "46KAfKjDuqN8CMAt8YrfRVLXxNRXtYeJWYcNG4JzT6EtgPu4mrBe4idxE2qp4FCrUioLPJFHBywtnZANZQzSb7zG",
  "key31": "V2gCMVh6KFFUkK1oM5cUiyWWDod9tW4chb3c7UQHLUeGRahjUtGxjx9JcMaLEDqhhoXcLzytJGbxrRXC42newxF",
  "key32": "mowWSE32CHj4HukSNApqQfojUtUTDLwz4JLaFsVvDbAqXYAcVZdM7Xhg9DrBDC1YwQEULqUgu2JeffGVtjFP1he",
  "key33": "33vXVJhyHzdJvzH7SsTRuLDGcDR4wkojPVN4ELyqta4euKnkgAeFqQt9VGZ1FyyL3opUE5jY8NCFCEWxgoz2oSXq",
  "key34": "2m8FesYbMYYm2FmzFuBktjPShnoaiDGY1kX83QAiduamnPH6tD2eTKJrpULVWP32wgAGeBFKz8saHxiiHiZ16EDt",
  "key35": "3M553PnLChHDnf8n9qGBzxuz3TJj8jfBRpP59NGzcntsp7N9Htqc4mh3E5SrC2DBs3MMmdk3A7tpghjXa3qT3a7A",
  "key36": "5gynDVwYpCd5Essf8wv3d2odNDiaqXcHiQ9UHNegQ7bdbKj5FLRTetrjE4bZ8RfmQ85J5bHvsg518iDEY3GzEzXu",
  "key37": "2xirSdeLAuiGrhu8suqvxG5wXcRtQ4tizi6ZTZT2sJ2zgCCMqPiqPu3EBmN9ozGTQzzdHbcWDxXUHPwXHLjhCxv3",
  "key38": "2THsG2fJer4cwNsrGLQHUqKd3eNi39aRAHiKMaEzy6AqxpXaHNFqC64njiStTwxGmiUrpkepMe7Y5y9ih4V2hMoc",
  "key39": "2bx6e4NtRgomioF2nJ4hmA5devPGKGJEhsNzPgA7WprkNZCTEv2vPuX5PohMAJCuB9BdU6qC9T9PnB3QP4crjPgK",
  "key40": "2TwzbZ4VpbqzQrQGfC4RmaQVZkLQj9bpy3DzMJpxDFLDYSMaqaieHRaRG4FmyMVVZwTK7y4cf6tRSnXzEePozxhZ",
  "key41": "3yhGhYTPzrydYtPUU25MFScifSxdjwFM6RWKZWW9ibBBEf4GhqyiXrERb3jPDEq4x4y3NBKZ3tdSpMdYLyyqZPPy",
  "key42": "41csNkMfXLB6jbDYt3UerCb7cNgpzQk3DhifWmukccDDtaKgJBgEtMQxsemD9norCngEyiwpjvqxvePTRGp1gQL4",
  "key43": "263iiiWGdRHHusCrsJ2nyB73Lwc23YPW1NSz2e9pxHh7AYVzpxfYHHEj3JPDQS8yL9fDZtsgNnRY4g6hDvLHLi5Y",
  "key44": "37BSnioLdPtQrCbRgfnQFhKZLYk44g9wKVtEtnw2LChQsJkfnsvToLxwngcr8pVXXzKVRSEgWiTQyJm6joKkzQtX",
  "key45": "4WhxX8uFZef7PA32M1rxJzmk5xV7Yx7m8xuWwfTMHmv4sjfHwYxtgmX4GV3PvZSzHSAGzdNdhA91tijGzLK4g9F3",
  "key46": "3tfVXfZDdtuizx5RM6eprh7bkh1BNyabpesgmZjS3t4guXT2fHDbQUZ8j9PSM9anch51UEqWZHJz3CPwspMQQXkj",
  "key47": "5WdENfdVzfksTqvmm2ECyja3MvpTvAv3RzbQFaKaJ6sghbiNT7eW9BEcBftHKx1pvWYvi7kf6VMVX3ZPiYfRHXkf",
  "key48": "rjPD25p4Z2Df5A3XTwY1P65Kqn3Rwrw6TTt8FYCtm61A5cC1K3in9orTu5Yh7xG6rf5bnyvQW1xdDKYXgWvJVed"
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
