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
    "4n51tPtfY9nBrEfC1sTn2TEM3HJQcNgnQU2LRn39PXReSS3nXq8im3UXSdFS8sT5jiMdrfGhYDD3JCQwwabwE2D7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "igusGgLQ4p7fC2uC9TVX8UoL2AuzEtZQSwmsAdf76uhCRd8VR7wY8uGPpw1j2PSoUSqh9nq8afDDEAZ1bLsVnWF",
  "key1": "3yUw9rFB2476Ga49FMvztZTiUAMUP9zCda6gm9Vor3YWXEiB62UHyBRLzpxrFeU75Y92QTV8fhtR5tyv1CaT1Fia",
  "key2": "21KS3Ks2ExoJpRYwgVBJryMnNmWmQEjjv3e9sjyxxPqTJHwrDJBcwYRvVVaRPZUSRxARf8q6jN7HFoR4ZthuGx3v",
  "key3": "2pzTGZJhH3No4XfLcRkfpyupL3krbgtC8diyv6GbLY1FWEdAQTr43o9dP9noqkiEfHUBeKYN2znLTYNm3pDcfwtf",
  "key4": "2jLUjrrCSRM49Cse4Xh3aEZLDW56nmjrM87LxdaUineJCija7wUrbznwxwmGubf6kbyA4rUSsH9V5vub2zQtQkGZ",
  "key5": "5286hmmKrnUvtNRi7qqZnUemX3T1U57mCkgEMjbTz2kU556PvmuCYbiQSM1ZCndKtabmhPbX8ULvRE8TRpngbb56",
  "key6": "tD2qyKCG56fuyXZRhfpMyXfrvggXCYZq7h7U1kCAcEvcenuDAYDKcyufaxhx2Kh9HHLHPeJVix576v4A5SdZamK",
  "key7": "3GdYKzhegzoBbB528WQtn6pp5WLbfZTp7E6vgvbnNRnCEtEy4Wpt886Cz1Toa9qp6ykmFX9hJd23LazTdYo58U13",
  "key8": "5HgtB8Q6qhoHX5iMmvfmiBp2t6Aph5Bi364VEoHQjxFJ3r8J3HuQrCmM1vnppZqVrZNEdvyisfjk6fF6FyxHwp7z",
  "key9": "3vmWEuHF3VnpPKrVWHFhMsh5dGF2BQfb49HJ3yUy934tGwejdSYKzoBPdN24ZQwYVMVn5Zb1yvDeKXFZaTAXX8sh",
  "key10": "aqzV8WaCAbATMp7di4KUqRAgswrLZ3XtcrFsqkLjpzniEai5HdPrpd7ebot5HDPvL5U2Q5o3ne5oycUJF2XDaKZ",
  "key11": "4FCGNCCeJccKHAiatqMtf5Vz66AQ2iDRqMuWT4XVUe5GL2SvXqDBSQPzk5qcknLKM6Nn7AZ4apf8JcYyUEKpNM1V",
  "key12": "45HZsngk1j1dZzERWp9kKSakNpsmioMRcnQVfzabKzFZ3oq1vfDirRUdDhybVj1vfBXcEzcdgfBG9NniD9cxneg8",
  "key13": "8ciCb9wWEmiqZc65fzct9wmZF2QxSuz8jpgnby9McvyiJGwzoMFiE5cHf53ibSi4vwg3xMDzsTJwkNbbytinVd2",
  "key14": "HkEmfmQ94krBSGpXq5HzjXaNAtEivWT7MMqdDruHH9oSYrHf9Rwu1uWYb5tfeh1P2GnG65yCnPHmT9jYtmnjFnh",
  "key15": "4VG2Z4a5bCRUTYZWYvKRKx25jPHjC5UnDs2AVfxdxK2EZUL6wYrt1A6VcMbf4x48zJ6wVeRJ8HdN36pxSNQcnRfw",
  "key16": "87EmPHoX5eatazknTUsLrMdjkViDtj2xKFBUcQwBx1CTRahnRAGjrqyXzpeEKB5oPLZQ9GAiD7VegBirpW5fm5f",
  "key17": "4jCU7xrzoqZipMQTzrk9JxfxjMoiT3Vis5LkjkQNvRrVLFeDGF7coU5w8wn6Rwe1mXLhhW5dZXh7KxGWtFPsYqdM",
  "key18": "3MzdK7ifPGik6FqJGi5Rr88MdWWkRvCzoCgWN9Kxw86MWqHfyyNHxUer5rnsf3Ti2Sje9c3t8BJ7QVY5jRyCUaTW",
  "key19": "5ktnJb3XYkqY2goVBCpukutanrwN2WSz7Q4DGJiKJEcrLofdevhAeZoxfShYR4Sm3hCQ6DiR3R5AqbhiKsoqaZfa",
  "key20": "4yhqNpFm3yyJddtaT92zBb1skRLNcXVzeCWbTJnAgEpR7WCxFRe2geZAv9tt48LEBFvLSrC92uGKiDz7JGbuoEFg",
  "key21": "4VrCJKkmH2FL7yefekjrVmjRkX8D9iEZwH1snBnQPj76JRYqt67xT6oXVmmYkugDh3wXAipucScJv1LRaUgWANGi",
  "key22": "3gj395Fkhjok7s8HcYwdf1ppxMLUCgdyVavUSHkMvNuNwphthPsbwsCdRnWRbuXx9fBvkwg1bhREHwuUiorWx4sa",
  "key23": "4aY9p1gNh4P9BmB63xt2Kfny5DzMFKvWtqDUAYQuDZ7webzTtKrV3QCwG4CP8nuQtnFBkpveFd5L8QRb5afYQVsi",
  "key24": "24memBBXhprWWoTRz6SCCDHcJ3d7LAHiALJfEwYaQ6q8qqqkJV8dwmwAHAbhQfJPA86pMRSHnbVBWhd5k9K6LmwU",
  "key25": "4rJbf4RtMC65ShD4zrr7J3p38VeuURM3iPitvSkLzWmFnx51FrkmFLVhkhHw45zs3MN6tk2kcKDKDGScpydK5Dnb",
  "key26": "5Cd4243EKuqZAjnwK7WRwYby1XXk1PLNtDEkrwZXxKdFVPMApwUFZjPDgL5fQVjPR2KVRS4H7rYt9iuLZciUsSGt",
  "key27": "xcJtUM4Z84UyW1eR6oHvZp26iug33jKHmMZi11gtbkq1WxFmxsLpbsxvw8vH71vhUrbiwzZRcNJHTmHbjrH69Rc",
  "key28": "E9DsHX3HQ6RCSH4gPJRYrpFiWBy5gxxDUnHAm3VvpHpDnuDnwN1S7hTWX3Cj1E46tGpdgZj9z1qvA2MJ4BZ9cZ9",
  "key29": "4fYvC6zMx4CH8rknna6LpVA2ma5q5SmTL56btoU4nZ8beXdvgPwhwKKUKF4AVZUhEgAoLoWmxyZ8LuCny4oGHKuC",
  "key30": "5o1BTostxYMqKvDgD1gAjhy1ZTmWBcM3PF6YVs1JuHhjH8T8zte9jk4kBBbSHXn1xSUoDSLJKaVRTSEXvDvDfw3f",
  "key31": "4DaTt2LoXqZEGjezcoevRzQGfGtaWcv1RE3chVCuYc11JHkEvf2moY5h64mUbJdSJiAZ1X6ocq1NpVTBAr1dTNyF",
  "key32": "45rhvf9kiDz8Utp9qfXU5YbSwJLMQvqfVA1SgVHFtX1gyS8DtQyTvhJiYwKejQA5NZbz5nst1R1fwQ2q1tvvvdBB",
  "key33": "3kWL5vCF88sH5CRurZwspPSKwCMGruyqx6qbQVcfMaEYcTxJazsEP6oV8hiXta6x72eDui1JSqhAUYbQZqF4nDDJ",
  "key34": "21ysMmp3WNde4S5LJzsj3iMuj3BPPk8cTUvUtxj2aCsxnswLxSnmuDtmebgDzLqHzJeDXXfiuEtzhDsZDsVZ2gei",
  "key35": "nVyZQxm8cJvGhxrDzhCxJDXUFGZab3vaYuqkVujNRGK6NgtTsPcMq3i4xdUJTvqQAPevFXo1x33KM2ytBrrWpAg",
  "key36": "49j1qfk1fP2QPJjmdD3M7gwwBzYWEE9jh9vwQy54myHyGiFzyACvfB26KbDARQoAHreEg7zDNPc93gFtuNs3v5YT",
  "key37": "4nqViE9WXffB7Nq9e5RQVDCPvQ8rAQdYVBYYh1cNyBePZuuMdx1vXQuQMSYPKnA7ZunkHeAMt6FT7aiYdahff9Uh"
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
