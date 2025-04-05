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
    "5C5598f2wZt2NfNmt1y8brvYJEPqv1ygUF8ndASFuKHeBQ13N2ia5fgs3MT8PpwRFeSrUg264dMfQRT5fKPfMuxt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dqhiuYEpBAi9QR9zA8aW5h1mhz6CfjCHKirZLb2H3DVR2rZS16P1pMS4GB57SNaDgReWPgbhxjSe7xzArudz4Rd",
  "key1": "4eCdVrrEvkNfqNnA5cmrqcGQDpUx3kXaaBhLNMwZoUuxhRbBHcogTfphFBu5FZKL9UL8Tj9428CjWwgpzZU4tESk",
  "key2": "h9vNp8ZaHsjvRA6FrU473CyGhSfZP8CsCshA2agagQ7zDWv9ZoMmerCpXZjBWsWVdBasnM54wtHJy4AWdZG3nPM",
  "key3": "5AmngyZBCNXHeeXoNkYgBMSYcsR8TSWcLsmgkbBU8xrNqKLArJrVVwR2PFyuDjP8YncKriH2CSLS454BZC5Fxg4B",
  "key4": "51gPVUx45sBtDW6Qv4uMEeQcndnYSXD18tRvLRhwhSxTNs8u6VRGdfQuDDd1wY7bkxPC677qHHvNxMw26aL6PJK7",
  "key5": "oYjzuBhToYREAfJxfJr2HgsZcNPzxVSeDHXFGuKuTXZTgC69Zb2rP87ThAu8pAAuRGGddbsbgDLSZr1RUDveWhP",
  "key6": "2i5ndVULoJ58VfEt6RUJ6iudB3ZdNJakD84jFx34TwQiW6whQBitdnuR3STKCjjpgAPrKSMPTUoBgbxTUYoCtnDQ",
  "key7": "pTwgVrhR9J4zVc4btzuZfvdPbVG5cv4QiqurPSz8VYQafnqr8tus4CamvYNCyLtZfyyDCocMu4CVSUytcAvqbbJ",
  "key8": "23pfRiFDxLftHdb8UTbrSAHDeQSS45hBjJ9NsZpbe5AcwtoURzDRH7akV1swCT8SxNCgKSk85V47UwiAwciM6rdg",
  "key9": "2CUbH6z6FqFdysyBsAj2Fur1UMuc5V5uNGgAEk51RCG7YCsmRCfH4URbGuKe6fPhcNkthgWm9eezybVyg8TVtq33",
  "key10": "27AZuTbeVc34UBY2J9pPa7UdJ2YV6V3mMGDcjE6mvDPaHEJnxpt1h3PzYg7ZcaTrA8BmgawhssGi9vMPLGxNpXyH",
  "key11": "46uJK66WvreeW51UEnJNMJ8uCYdxE4Dh5Rg8uhzMn5sBh2rnQH2onQy4Mma41cmQ8ZZVFbFhpHDxoXXoNaehbZs2",
  "key12": "2vxtZow6UFB2kDXq3p769R7s8sqWmdaezhuaaKgF2AvQmbHZPCw54r3YkUjY6mCzT2ymGTgXU8eCuv9xpJvPapLr",
  "key13": "5uRcRvi3gZY9Wm4zvPvXuGJBuXQNnmdcSz4ZDHEqbPqHZ184cVfwKdKsaSc6D5CxewrB2DPDgTJh9SxwbxzWYL6D",
  "key14": "CVKzj26GH6812adQJeZGJiMiMwWkX2dRTacXesLrUDjj7xchYSzn77svVLukVLTmQ6DYvtrcBssSpTatoXBgxF7",
  "key15": "uEUT7jNQy156XYnWvWS7yfcxB1QD6gGnPPWE4mJxCtYwhiZrrgFxGc1rABPNsfrQvkWKPmcWrsmeWEf6mu3BKrU",
  "key16": "56w7z7Ky87PSW8igLXVw7CKAUeCUaFLFgo65aR5a6PsNM5VysqxvEPsLijTyguJtV5GRrAmyw8QurV4K2NRn4uiA",
  "key17": "KCYScYhwiKrtPY4zqK4QeXk9Zq6G6XJppkkAv1PC2d1cP7NbWgZwmuUGj5sDUWRLZjntHRnwdDqmiAh64rDgHvU",
  "key18": "5FQoRQda88uyKTn3kJAmXLgYG6Lky6wHCLaZYvJJEhApFsNXmb9Cdx6Lw9u1ykXg2Aw5rp39h7dQS7Q8ap61fJ3R",
  "key19": "5g1jJWwDwUQaLnp3u7Nqm7SKoQjdnBjmJChg9jyxkT8ymB1t6bCkDdPfjdqLSCUUCKrw2EtG2YYf3a4FYHjd9em6",
  "key20": "3Us6bvKEFpv2qHprbsGb6PXtH5guK9uhmBKCqNVBwW7hc5ZetaJdieRPppQEhzkNMepsKZhoQTEdVN7AQQ1meBqK",
  "key21": "4qqwfZVYkjkKtY8eBFxP7Z57hxWhCzEyx1Kp29idgH11LJtH8SMTNWGxLr5gf2qCaWyDs9dbG55yJqiyUrHr8zMK",
  "key22": "4UF3f2A1UNyb1Z316fRzA2H5Gm9fkCp9gFDCJyR4e9iAKwTBqChPYFgyAUmisVgWG44VtZNsDY2R1L6KB1dvkJ3u",
  "key23": "4AGCJgx9n23iyDwhWcaLN8t4qEbXkGEzggN9xhd4dFeCyw7DupwS8CVgbqxJ2ty2wzNgRnByYqsRycNGKu5M2Gvk",
  "key24": "5PKPJCczMa7YtmVHtd7R5iN7bkfYe5tkfj8cBcvmR7Ao4nvYAty3zzuNx6DGah6hSQw2jUn91JZw6CnattTBwbpA",
  "key25": "4zkgFo2CR6kBPkr2nSgQ6pc9BG9LFi2ACEBYPXiTrjvj18W7oo2iN4ddGU2okWU1CXJXxjtrZnJVajcqTVhtBu5w",
  "key26": "5DBTjh7DSCy5nUDcjeyuTvE74PxYfAx2npDnpHptf8UDQbgLMepjy61HP3ywPe95SLZFgxRxXRGJtnDnV7zBssQY",
  "key27": "2HSCBZE1P1jPB569T7udxH67VpivpccuaU21VXSmznsDJy54xfGR7bf4TbDgdWTuC9r93u3rFHio4UzeQFRT2RCv",
  "key28": "3whFpMcJF9RVjN7JbUztk67qLmX39VQquFAvy1rcTVkxDarJVguhFQqYbcLTHiQqX5bJDe3V64NadUnHTdQ3P7r9",
  "key29": "37iMKdoFaEppMX8Lx39MbZA3VD6EM2b9jjrPWmbxffqz6QDSrG6knbMsaXCCLgKWhtBcMx5fhqgsH8hxtgVdD7Xz",
  "key30": "4m33nodi68o9vFJCDXdHhGt5tW4Sh3WqVHBGRdb7MRrfoAWo9vck5U3sRssGNfWGgzATkh96M7dBDp52BqQ5qwoa",
  "key31": "wi35La2L6mUhNPkS2NRAVS3fFejwy9JeuhwYvkFbBLzziMeedHgTx7A5sPhCRgAoq9D7XGBk4SNRd173ktnckNT",
  "key32": "5cB1UtBfM5Lw3X3RUoNy81zYsEHJLbtTe7UfJAdXcjigoQSkBZvKKUmMD3Ga2nRZkSjVz2nr28svUuEMGbkSKZBX"
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
