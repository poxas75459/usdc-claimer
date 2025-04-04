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
    "3yFf8RRH91dJc8z1k3qJnGPUEq3XaNdcCmxGiRpoBc2sx2Rp33SmvYyoHJ6HFWQjZAQk85rXHMQLWY9ZvawDgQky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VeStN4VCNgskFxTW3YuhHg4MWN4m4TJqQE3k4JCcTMWn599VrQsVhf7Pxqc4DVVzXZExEH217mmabmDJCvQrxvk",
  "key1": "Qetuy8beub4PCKm2TYMZEP7YycJhYfqKW6GcGMGDY5jpavNvMoS8HovJgkuohTrA72UzErk5Ena3Fd48LVaMg93",
  "key2": "3CPE3bTnMPDJxQWRnbMNxseAe4TRmy4Ga6ccEosGDmP2SrFoT8DJUfwRR9upiocyiteLsHVq3NRnzLa8KUvk138b",
  "key3": "iLgoyHWfJDcEiPbYcDhureDJmPKhKyQfdZuiUyKn8Ver88NJmEMYRak9Etf743tKGHrG866xY5fPzQVbvF2WRmA",
  "key4": "4ZsTBkpDmKPETTK4H1w6fKS7bkxW9Xhrm7TSwRphaou76oB4QKfhriNRb5zscF84XnM7JtS5815hQa2g39bdZDxd",
  "key5": "4krA3Hn6FSwzTXWQMGibFARb8K7Rd5TxZa5LZryqHjeMf6NJqt3WDtpcNge3bWpByvsFD4PLzYDwJKpfFgeeXwyr",
  "key6": "MYP95VtEWp5BnRHCwvsYARuEdtywyeUPCstfbMp52QN95ytF2858PEMhQr3gSXa3ZvfvjUXGNimMqBHp5NUv4zv",
  "key7": "3ud1peVeMgxoM2d6DqNY7xasvXs31XQ3mexNEiSxTB53vyrK6hYefuu4UGsaTA3h5tn8UDmHJ8mdU3sayJTtG8aS",
  "key8": "2J1tHPuxgmuiHBVL1vhkxLWBAmRKnsgmsAh6xD1UpeqcQKBBWrmkB7vWN2wVo5wwrDFtwv2w342KJbkADxAyouxf",
  "key9": "52PhPVU18jwKHgPLUoJ8uWEDNoDiZ5KmuFDMGKbPpHgugHKZtCEVtC1RUuPEDFfYAsJL2FgYxpDtcrw7MW4an7Dm",
  "key10": "9G8NMjhSpVy4gcCeJeA8nt58YsjT2LMvxmKCoDarKJDC2mJYdSs5PoFmqfTenZDGwUuBZnempQAnihPRwG6JZ9j",
  "key11": "47PmJnyV1z9zRWWC3abRpFXkZuWnNPAHay7SncKdt6QZKV1MdWgpecFCukDG7Wu3y8sJrTRSQQdTTj6Mm4NJ1MNW",
  "key12": "5rvmt3CTqNbrjkRcLCWFjCwtn5YQkzvhb4u5Ke4zQQzVPjzE557xgWKGfrApMyEGbpB87Nx4m73c4bGDUYHSDjxj",
  "key13": "5fHoh8Kg5mKTsHCkG6zcu1q83FCrgJqdGS8TZ6fLr9j6xd5QnQGQkENTAcic234FUDVwK8Q2yHWh2XVQLZ8wa37Z",
  "key14": "3mjDpEXEnUiYHEgKBNvjZu6sqfNe9MSSQ9AHrmxZmkc24ZUTtPg5ksdAMTyRELdWH2U4T9WenV2vaJ9gGFjCVhyD",
  "key15": "Xb7h3LfN9JGuUgMNuf4cnpAUSe9GQzpMmnyomuh42AEd7PsWnq5HVgGkN9eE1nRrgCakKAicXaBNZgswTb8ZXC6",
  "key16": "3MwnKKfVh5qgqU4kCqYrnyTzHcg4kqapb4Pjvfr2QmUXq2ezbSRjiSC23jM5iE7gtYWi6QdXxTdMWc59qEXvkRn7",
  "key17": "67dXZtVtsW39SHMnYTtUGw5pNuyoEAMDgGAHCtaXw5Lz3vx9bpKJv2NPiBny6jk3tHdbgPCT2pmoXCYBUwuHiLqM",
  "key18": "4ttND9MZNY6wJ2qVnFrx5hqsK3yb4fj4Jkr91JoQkGBTE9LP9WDaza3pwceKiQJvUWeUJ1CoWc9918HCnKdE2ZVr",
  "key19": "mwBbSkfLtmyfySv6qPMg6Qehm3RtH53S3Jvm5aJRjm9EZbQ14iLpLdkC5f46nbDvoTYs2ocA5SHBwr7Q4MRLayn",
  "key20": "23WTLsgpkydoJmX6m2SkUzMWwn5ND4LEfrs6mtbzm1a5NvDKJxMXabjeygjimrMzj2iskzVo62DeXbBZByJUmCpn",
  "key21": "3rNoJuPcFBxHFLQtUvHSsuMXFRocHCfS6gfHfXiHN5VXmBYcWoNga9UErifPJfzTf8hQKF3XByD6FZifs9ygUyUo",
  "key22": "5652t8zdPjHE11cK1wDfT1Kg5E56XG6qso9rTsWZnknuHeihhFh5TFkknkNHFP5AX5oXTedqqShAH36cbgD6DSHP",
  "key23": "2WfxyehmwLGPg7GSnx262qpT72EaqotSuHLCaucdmuFYsZZJABcMwGsoNKZpYJohXVjmvoNt7bWGZSJVM5iUxyPH",
  "key24": "58uJL5wWuWHRrjCDyZafPzGNy8wCbRzyk1k6bFHsMVRb88dW7pVSYDrYVr4qcttfvyzRStn7aQBC1vAyw2HNdCPg",
  "key25": "2tXWESfacyzYfg5F5tMTVvfRwBNFc1csELojAaB9jhQdRugrhUepevKYmHxKzn7enKnaqCVTDkRrBYg5ywCuuB7q",
  "key26": "ZsakqZ9GoNA8WXYZbpYTREyqX2XgGvxedL8HvQTvGgXUM3quHD5FJcWtHwxTodVF13G9SnjSgHWDFgyXsyEAGK1",
  "key27": "4z3gaoVadja1c3gdDgh18ce9rYNTBNhqmimBYeZCKDgrMbuuRtA2LXc4VgabVGxqczoeLjB6jSyBZayQLqHnUoNj",
  "key28": "64biGKLgiTvuGNfQh6pohR4mGXuNEt6NPMYqzCp7giTdxNqxxQ7aepG9C8WrBDcCyNkqpkYN6qgRVBmpsxrMqNk9",
  "key29": "4gXmEb5vRzvgsgH9LE2cPdjWWjG4ND2KWhkWu6NySkr6fDqEkC6zv4fCdNkCn1jW1svPgmmtnA53uS4ap3DBxo69",
  "key30": "3u6WR4m1sRFS6tBt6vgXA9VChu8quqoaTYSE2hnVsvZoth9hU3tb1p9Yniknwg146eH1WJgMiVfnv7uoceBu8VdV",
  "key31": "4G5mmPrKYYemSSpPQ11hAYX4n15Pr2WZ95BCzVYn2mtz9icxTKTkL6iWVmHVSQt5tfDBjyny7B8WEu4zTh8ju5Lb"
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
