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
    "4ewG6Bn3pxwknXzKcgNRbPpbtGAgHY6BZqajVdFATKFUqiunYcbLE1A9zTFq9xRFJ4LNaCrT6KGa4ksMMtZL1eEN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jJ9Kux6esXy42q4DPxyukd6BBoQfes4EKvYPzZoakFyKpgXnTxZ8q1iAU3VR7bhqYQsPx6ZBxugiGTb1QZ7snpq",
  "key1": "5i7vaPXCPS96Fch3MztAhebTLrg1hr7okPGJFTPcmeoadFK35We2kvQTVvyssfyhXFyiennukr6Nv3LtQNMFEzpx",
  "key2": "MtbzH7voHRC2T8UobXkdRVF59e7WAz1yEfqasMP6SVs1EkRgyhdown2DKTbiCw4bcYAmPE9uk7RPkYyjSGXq5VU",
  "key3": "26iznEZrQg3ujaEHcBt66diRRVnTjKxL1nhwDSmbB64tJ88LhoBu371ktv7e3QkS5uCYzF8YxfFNxn11VsVeK2sA",
  "key4": "4rGef63tvKX1tbEQjHkUGoQ6soVeXuhb214pYZYNJRMC3PYYRFmfKChaRrdZU25WoT1RjGgtbxqciQLTdidVtj2y",
  "key5": "42qUkKuYpmmT523ay8EHa1Ajen7bDhnfJMEEubHtbgKLKMEsdyDccEgdVB3d6qpVa2cDBMm1kuhNEEUvDD1Dqmv4",
  "key6": "SHhCGdX26fgGc3F3AzVSbDJpCGcgREgAz2mNcgysUMx1vTJXe9hAjgFPRV4GET3ajVWhTKNJoLJsGY2oms17ZU2",
  "key7": "SFno1K68vTz2Krav9bmWiFiK9B3xrDpb4iaQ6JzJSY79c8ieqnqQ8jF6MUKyGRKNYmjZPBV4pZuCnXvL1UU5oeN",
  "key8": "RM7XqN2x6yTUdAgaK1xrKbkqTnHXXdQRHYouHEDyATy6avADYMk5DbKpc5bJAtvQaDNAPrXtGAE88rSRWLbY51m",
  "key9": "38SSMw1amEkxZoMD8PytDDjn6gEKuL1LuYLfLUDvf5L86W9UhZV1m54h2mN7ShQ96VRU2p68SbRDg79gSWe3MgDU",
  "key10": "3nWdC38aa54pK8HNReyjA1LZJfsyszfA2ppgHgX9YRK8z2hYPxVNB6JqhmpH86AKHVqXhHaoEXUZ9raKTpJ7FHU3",
  "key11": "4mxgZbMty7JBNHCFKscj1wUqRbHhZchXkANRJm6JuiRnuhAGXarYFzBz8WgYxeDVFmXDTu3Gy839mQgoA8HTZ3ZW",
  "key12": "32TLdAYtyaNf3tddqsmevjvGV8mBzd2hDC5EuvTwKdjjVBnJjtig3Aa75JUcjZYdC18kU4raXq3PmnKWjML7WVQQ",
  "key13": "5p1r9g4C1mCw3dNKZeJWh92aAcg9LcbsLg1rDw7qkJX1BnmibupewnpYwQiNruMdt8rpGUBBzuTRsiz7RXwSzJXp",
  "key14": "5WhsmDgz1TxxoC9yXFNw9Rnu5kaoK97fNTz67yyfGyxfVRKFJC8BMhgLXxPyqtCfkyAK6iNYuupHwkFYo75qLGxc",
  "key15": "4WyiCwSQxcLuwhV9KJfvLxuTKiNY6xufz6B3KCpYFuNy3GHLGopYLubnj3Q621ro3kAPZkfVc3Hkbh7dZSH8aZvZ",
  "key16": "5ivUcEzBr4y24S1RbgUiG7tXzdmmpPpzhQD8Y2bdUUNk6TGJyRpdSfvwx6iH15cAZ6H5o5aCdVGZnwpUFXpQ5yBJ",
  "key17": "3wUj6tHUBzBnrKdPox2jYZ3f5rwVNYYtAHnDqRmNy6XJuWtmLcXYWh2HCJYcDipvg9aGAih3ftA2ATMt21jVD3CS",
  "key18": "5UM1EZg6abwxBwftVYCrgdWcUHvVWrKRezRhhvqn4Mge61rc8oUuxChmWuXgj7iqyZjD76phWNAkF9CCmjnjC6Xy",
  "key19": "4wN8EQTQRFaMqpfd4xuhx3cPxaLhq3i949j3aMCpkLzwTVJkJtfYz445fzPaN7YEwPdC1EhoKPL4Hur7gT8Jd7tB",
  "key20": "4vNt58i7GuN2X4Usy9Vm3D38dMFpcAbzXEayTk7pe8mkgLEnwAnv5YHvNnfgW1whueEyvvf6aG5k1vcf5bWLN7kT",
  "key21": "z2yUiiebuFQJPjV52rELaQaMvLCaVnuRGGvdduTWYv3gbRwURu8aM8dagWNrT4UJ6wmHDuByzWwpEN3iZieeEBW",
  "key22": "63NReckpyiXhFdeU7wu29e9GZKfPrz4M4ngKJSW3XoerK8BmBJASMrQLRRQXWnAsWEuNhjSajcec75gt93cUMoJt",
  "key23": "5pH3WhzzTKKoijErEyAmDxwDAkH8fLH3jJwWak9xBwG3PJR4dvKifEvDNwNQhuB1iQ794BKDKtt39Ap4Sevtgue5",
  "key24": "XmBL3KpY21c8KuPWWYrFbPBZdjZjG8erBLhaqe7kyTXBDgoKMt9Uob84hNmrJiX7cQsUZQJaRLFF2NFbrQWCezn",
  "key25": "P5Jd6gkSo9uhc3iVxPBZzyzU7i9CxSitgxAyqnpdvTCvhaGbteXxeEpmgZyMcNC2tN28RcjfS6UMMXapcfaeTmq",
  "key26": "25QoNn3rZzAemypNDPdUZ3NJAmKcY4EFLXmyD9XddM2NRfarL5SUahekzcVaHKm9oPktZ2F4LdXXQ5JVQJqoAWS3",
  "key27": "33CZUyLDYdygKafoK7VtX9wqxDKbjzvH5LGzjRNLNRkqwFhq3p7h1v6mCJjsq1eUxHWT7eNiAU84Ft7trsFSjDuD",
  "key28": "3VZAHEmWwfWourhfhmQZ1FkVsuvuPMxw2rBrPrgb1GkfKTPHykadtqpvZ9P5KBgtYDsyHxREhJceXdpGZhgb6sWq",
  "key29": "3yEhxdvpyMDzDY5sn8oYpHYqjC7XU5WKAdJ3LBBUhwXgJ99SKR4F1r5wFGBQ68vUwnKzTrYdBJEZRkL2FGnNBgT7",
  "key30": "59CPu2WP6HxM6xLoJAUGn4BCvzpzKwQLENpJhDMAA3eQwjUK2TJFy4W8r6vpqu2GkFytwNucVjAbhm2e9F53JKrw",
  "key31": "4xUNT7GnF5RzUHddbNzSsFZghrrzfQLmLEwdMFfydNvXUqts8ErZkby241LFKnJQgdYMyWD25CoqYUn2RtX1g7BM",
  "key32": "55id7Jvgq6R89HUcyz81sXHN2Su8kr2YtGbfnq8NqH3vyY398E17s6grW7cQcMomucVsi9qmLDj45F5gxFCy6vGQ",
  "key33": "4DBZoSE1R9rSjJTzSv7vHKbANt86UoaTPTyRv5VJ3WvvPabSeJyQgQBip3Qz5syv9HdFjCDREU3STNh4qrsz7MvD",
  "key34": "5qRCPAkkMu3rMagwHjQxzSasLHxVCzPT2K15SnBnBwS29Pz9XpnSGeVfDg8WHUEVyKcpeqfHpH3Fh4XzYoN2XVNA",
  "key35": "2ctCuYwyCfV1upDbGn8rXT16st2zwznpk1if3EuX6wG6Hz2Tx4QjhErYoDu5Uym8jq32oePntsGYUszLeJZL5NWP",
  "key36": "2WMMnJAgZE7w1CqjFT9gcV4eyD9yGte61VeTEtiioJRax4QkjqUKTVkYbtnLAXasDsFgAc22Axws4zzBtCDkmMoH"
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
