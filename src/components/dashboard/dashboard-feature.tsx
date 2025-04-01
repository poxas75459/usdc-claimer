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
    "2wBTdx2j1Bgpw6anaz6aRAXYUXaHhqYfW5oLFhrpJGXNRsgVDLRbPsLFYZ1Lt7eUqFEDhhCdT8tGezDBvXJDVVJr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54YqY6inaoiSV9cRNQvGFukWCY16NNRG17y1SyBjBEUNeZtwUDXdNYDjQSzU6BCvgKA1SxvbFH6Q8mUGYNZ68gV7",
  "key1": "3FbyYkoTV67Adg3mvTfWRFUDJmJpGR2K5GCm9hX7HT3BJHsuPNhuWdRf113bFQ7KdShNcHNoWpf8kHTLXEvN4sDm",
  "key2": "2t81S9xqhAD1Bt8tPbgvA3g3vz9tuJ4xP73NFQon3Y6e2qT9xPJcHQKGZw7jciT7bLeeTVEsy8nwHFS2LmfHtorc",
  "key3": "4EKoxy1zFgs6AeQVxRxp7SCWAXrFodHTQteYYCW9i3VZdnVwr6Dfrkp5Wtw35W9gS6mg5fLV5r45P6mwjwwuPWXS",
  "key4": "4aHft4UbXb4ijVJToySnf6fus1hUSRiTEnF7jrT4ngHXgMDpoHLNYYBFdzr4CC6Sk1msg2NpHjnrGfDbFUHWBdLE",
  "key5": "2DCfkbJeLyMuqZhoifHnZsBPw5qrKS4ad9ekLhvwtZ1TDXBTo2RdPRDweTTE8QbMo1rRx2XXNdwy2Q8pbUpMFzej",
  "key6": "3qWFyRxJfRzEc9mJQJg6PMMT6CvsdeYCfe3qEMJTpyHUmN47a4ecc7XoScQjKaMBTUJmoLDyZsVQqKwt8hJ8EFFJ",
  "key7": "3S5WRSs2FYW8q573LX9RUvjUdGyLWXeeNUqRjpkdMxgqptQsQ7Y8GoCMxihkwTAHQXGoxNaL3SaKhj3SS81zGJoc",
  "key8": "27tQhU2KSG3kzzYD1wpThaJJt16UJe7A5ix4Fe5gFebkput8gU2ZsYK9M69aZ7t7SjAhjMgTgySrEzpaNhpRoJZN",
  "key9": "tufmysUiuNsuLPCGgU52M41rGC3wewdbKJ63xGy6KXQ7WohFWe1izpj6uVuiaS3hcq2oLpdvKWN6nXUb3XNTNjq",
  "key10": "4x9toavdF89aJDJivywqRpKh17MMpQ7nosbMxbxxSpVcEYhrEB9Cd9XVMvwXqNM2uMBc4JinYapzm6oNkBbR4PcD",
  "key11": "46wsiBZCSeR2u8PXJ3jXcAAaVhJsUKdrJXgzockLXfFvNjZ3WwtYwGuUMpk2VNQxJAFXiYfGpj5cEAHPXt6XmATh",
  "key12": "2pxePzbGr2QhnAH9qgsGCLg9W2skWXEzvR8jMLh4FQ81TQ6BXgtvmSZYeXswe7Vxdp17HCMrM2As1KH8aFjXN4qF",
  "key13": "4wDNn4sH75gzi6wbtXWNQHFr9qLmNHQMXUWvbP9K2LyQAx56ytZuwcpbLo3qzxBAvKoWSc11QEEWEEc8yczURTqK",
  "key14": "5nYNFHxruVj6Cvg8hfuMCgjfKjgFTh2wt1ZhbiWNz5UufSvFzUvtEpujPKazWvS7szdHt2SuTvYj5zsPc7qz9Kjr",
  "key15": "5yB1iU3EPGsqgrZ4jcBB1jzopGdnQnukPqKuqA8QxxT3qQ6CbDQ4zkt3Aje7WguXE1CBg3oR62QNxnsXzArqfatq",
  "key16": "48UV4vxLhubFnMDBT6x2AE6goFv7HcGK6CgYsESiGMkFae18GNefAnCjpqZh3Y5mbvScRGdiWRjVVU282XC4koe",
  "key17": "pwzBeW1mcZT7ER1SZ8qAfCekn9pfP6rRXgiAoa1aHkGYrMMTPVrPKXpCApE1aupex2B6wSzNDbsLyKmUZmokGLj",
  "key18": "3Y49SLXY7ekzWqLTsfhryBsXuvisA7nkYCkWXhupVshv89mj5JhZ6TfMFi9UzG3VCz6vydGNezRSYEUej1sHg34v",
  "key19": "4vSbSWU2cxhW7nHzxxuVbAwuU8mxt2YJaV88Sv8YexYCyRJq1XmBLfjeVqTxiuVCgCZu1gPCxdWaXxWLZeVHwkuk",
  "key20": "3wLsyNa26YL5PmvZDwVBv8WLaMaShiZDkwiqMJXhN11XRRptsmwPj2D52bireK5RUFvV2UfbjSNUC7DTKyQJbxR",
  "key21": "NEu4KuPQCAA6zGzAmkWZR4goseGnP6CdE8ZEbFXT9xaf5ZmT5RVozWp7dUJTRBsYV195U3kkRv4RZGHrLV4X4Qm",
  "key22": "4paePmZ4fpxY4LoZkLcdvJ54RDjd8WoD7BNTW9njmh258asbpHbamRAS4zMx6F8hDmvCW43Burco5eB9dQBQDpmP",
  "key23": "4kPeypRrhg6rYGzrMzmZTZapCSvKcrzSAEk5KLZZ12mta7jUd2AP6DV6n3eMuJTsb1PoJqK6PU3jFRb7jPcJqZNs",
  "key24": "2bBZPfi4jbtFzwhwwzLPKUGz3ydchwHSbaUS3Ht4n1eR6QnhuNDNymGu9Yk4JQ9U4zQEaVu2Mxi4JtUtYGbAycJs",
  "key25": "3jnNR46x16wCLqyxmbfF9jSqnvhx6HpcbfKJHsDddBL7jSfhtVSC6DrRKD7PS9tSbRA9BRpa6qLXowajGYPYRYvJ",
  "key26": "4sQgaP2ZbyHk61NpH1jB93wENAB5ujGU5mkbQJNm7NjivF7d6KkDDkjDYPk9WGQkFKZMAy7nS7sfTvGDiGa3472g",
  "key27": "22aZx9tPjR427Am8VWDAUTJn8d9pDonFGB6hwNYTHwatXa6McsEPjrHTJHRrun7FbwLstA1j5hchUydVxUBmxdL3",
  "key28": "2o6NJHwb5p4iWTb4hoLUeLUe7VNtmZu1WYNvpBgMzz6RNHzB9hfTCEw5VLPKKu5eXV39srKVPuioH3mmtBh9anBB",
  "key29": "KLcKc1k9CSiQ9jxUKhoChATX9zbKNC3DrYqWkXwJggfJkssJL443Huh3FCPSyYymx8ngFV9DURDxkQJTHXfXL64",
  "key30": "64LtfrwBkuGZJra2Bb9bUZDsAb4iDsfajwTqR7T2tS82PXvsbGgcL6hsQv5K7WfLR9wGDBskkXWQhbqtRkQ2v5aF",
  "key31": "4WP72Y7TEVdkamEy545o1JRC6C4kHm4nTu2UaBbkspdz6DML4T2ggCGAagTYKqy6LLYqXnQ1Paq48HtTywsiSZDC",
  "key32": "4jX58pioSE7tAC2Yut4SibrMd4hWXzuiePq2K7NUdBdFNx2pmTNyuzmYrEg7h1dH9MNFS73FRRQewcRuwJz93Vyb",
  "key33": "JfWb5qrD8BKvdbhsMsHxnwQYHUERSoPxZbv6pe5Gpx59VnuuxDjfnA3WXwvmnUHWztevtgrCBS76eWjyFu8hhGp",
  "key34": "5bPHE3yA8s999HFzWwoiDZC8VeQK2uXyNFMpN93Bv9z3AHc3Bj86nZgFmHUTGXboVuH6JBT7ajfSWHxD99qAoU4v",
  "key35": "1FFcYRDy5fhYhcw5ohE86qSip1GFhQoxC2cZSVMWjHCtvESeoy4GnArPxXDVUc2ocFEjXhHiLDUy6Dwe6MKw7d8",
  "key36": "4XjG7f7BSAAbCwZ7TYEQE3UWhGFd1BLeqGgcquk5W4xUDcuejRuMxiXybVb4jx1tByAt9fk5rAdQCfsp85zNjnp1",
  "key37": "4eBpg8vVCetRqtXMzrFAbhhg7Brxfrfq1hhWFZ9zJqWD1YehpSXkf8SDgVvXSNQzdmRZzqPMrTsYRdUtQSCkrVEx",
  "key38": "31ZuRtSsWetK3paW2N9HtxcizvnP33Nkk3aHBV5LkWm4a4WreQj8Xfrv9V1A9BSBVZqYUmJczZJgQ8pk4UKwh4kX",
  "key39": "5vSLBaX7HD5Gn9fBmj7DXdvpUyVwAKHgQbpZKXMiC9KtcnQKfcMgbKwLk8mH6LG7Mpb1Y94CcLYA5uNfiGbiwtrG",
  "key40": "3d74pXRJtDaP5Xr2tzVt4SMDrg6dvUHjp3nLpGJ7FSP6NMnpz7okdA891s5bnc9dTErRoKKxrWDTSRvQEPfr7wGz",
  "key41": "5feHNXXBEzTCzHdEkcGLEGNLbd3pXeSFug3nwtD3tYur9TPxWJyvjiB7Qt8KZAPDbnZ3CLBLzxw4HnGrLW6myGq4",
  "key42": "2jCJbbWr9NWRajbQRTMmvVZ9bbwutiZzNamEM5pWVwYL7ue2VRB5Awjvnm4iUTVvoSNAz5ZPLBShAAL6tB3j6YnK",
  "key43": "3LVzjC2TvQWyM6hxT27rb2grjwBedtSSH8as9APW7NWB7gRN1gm7EXnR7ctc26j6nPzSq9yeqzLa9MTemMmyZx15",
  "key44": "2WaqsnTju36AqN817PpfjdDriBorozFeJEzNi16PNbpwAftxHTVfcGbi4bGVUpChKvKh3YP12anBHxsmcdPfnmjb",
  "key45": "5kXoqumkAeqn7w1Ru4oY11FEeLQ11rc8q4o6mWjGhACkVayXNaJj4HwAgaRWma832B6UbF96jd7ntY92Cns2MTri",
  "key46": "gqEGgPLVWcaDyEux4Z5kuNaypDhaLavwfemF3S9YAzaHus4L5xCnb5g1FwAPgQYHiTf6oEe5wRuG87cAwkN46Cj",
  "key47": "3e6vKD7u2RrGB72yw6P5QuCpKTcwLWVFZqntcgTcx7N6R9BoDwzAjjYDsNc1TbYEYBBWnMSgpZYDwVsk8wVqG2ov"
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
