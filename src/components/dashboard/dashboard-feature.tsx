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
    "5ijqJLWJhcxr712yjVDQwnQRX22FEtJ5pf7XqrqJtdJK4gxRU4gjMnYqjhion8eFacp6DwMYPaUXAUPyei18hGNK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CgaMuSRTkbU8RiDqnF2Hpg1dqwoGNhwqqduv85kuj2A6qu1nTRVay3FW9QoAsYx3DHarQ7dTLYyeqUFYadPXeL6",
  "key1": "2m8rYDE2PGzU2W5oqW5bzsHLh4GjePveQdjbfdBzp5zkA8YtjU4goKdiyMqH4W74goagCqsifo2RwmT5EXHESkr9",
  "key2": "3SdeJ89ACjDRYi6tvBnFdvnN275vcCpBUcfbv593Cq2FeSX8pWEvBZUMsmiQTfNYmYj6HWxjQKbMbnsKZVfiMgp5",
  "key3": "tP5kWHZbMTAHBx37rRkHdWf2MpwfXqtdTEX152QEJyNHdcXYdRSdWGyp9iAEbZz1KB6GaS3DPC5yy679LLhiBbx",
  "key4": "3DcMsvXxrC2JgdeLMeUq4FNQSWsLBDJKDzXQPSVADcLHN8fasbWFZTKRofSMEneBu7LTdbhRCdJ94mcnAA5QYEmc",
  "key5": "5chDAZSTs1w6ZZVS8RFCmVQKmdHspXcKeYGqiC2LDXgk1B6r4ns5kvJCiDLtHLYfh5rTUDogjCoynGgmnuKtwxmh",
  "key6": "35641sa2u7X51hors8Cjd4pXKEVos3tXRAwoEgGAsfayBRq2ipq3MSPLqaz6BJAYZuGeVcM3oxH75AdTDbjTFRi8",
  "key7": "4GgLCN8jnsrB3Q38ckEZE7puvE8wJCEXHYKY4DNVzb6ifYcY35uyx12X2eLyTGhP9FSBc1ohjYGEJBfSvmkG1dpE",
  "key8": "37seayoioJspZpo6REFgvN6KH7jhfBFyZNvVJnSzf1EAcx8vRhU14J929RmnTqV7qh7Bdv4u3obZJjnbCinb62qn",
  "key9": "uyeDXbqo3NUqgJjzEdA7mw8PrjsyC5SbsvtJua6uhkecEcfrhk3cS68qYi86k3WdspA3FRELQSdTGgSq6UocHz4",
  "key10": "3jPvn9BYAHxJwL2tmYyxY9tTD4HRhex1aAu4mMyodAKnuMC9r1oQxwWnmwhVW2quZCMAr9LXUssyo6ujrtLMyE5p",
  "key11": "455nqdffDh5MJruTHkQ6qtB86Av8Zbonhew4YRfkHCjWjqxJzRANt9xpWzdprkBo4xcFcgjq99zVZWzSZAPoTW75",
  "key12": "aJbWSCN3J5Js1fgCnwQxDJvNR3nw6gVka6eTSARujJv3JQhbYRxYdWUSyxx9sn2LCdBo3Nd3s3RaKTySAwJ5JiL",
  "key13": "3Trg4atorTwWzekLLw42gJQeaXCzsptm13rWK8RG2giRD6Awod9TPusMHGwpcN6GcLt1P9mqWp9CkSCj6g9kLqcv",
  "key14": "GGZpoJrhWeKcuwAaZo6iPHP35hydZk3SaRDNKDhU6KtM954jfNYJmTFgzaB2E5PuP1qA5reZ3BDD6eWenZAQtfe",
  "key15": "4biatic88fcRZKsYcEebDVZpyEFhKGeoawyJRE7N2UGeEuHFPZgQJ8YtnXw4cvcNBom99UUN7qr678ULzF1UpyNo",
  "key16": "3c8qPDSnDebJ74Q6L1UrQHY3yM8PAvSSVZ85hk35r8wU9srtaR1QZMgTu6qwW9AKq8dW7nDWFvPG81UJsrPzzbaE",
  "key17": "53rH9WA5uzAheJtFcojKTyniAJJjn7FYzRxdVxooRVL6PoPGf7Xc4FY8RyKcNWeVhqnCHoE9Hoy5vAuJWFt5or9R",
  "key18": "9k5PajbVUvBDbeBNtwqneKuG8wigj7p6GxhBNVq9esouhPdoZZrVUQaARkvwRjYUvSGVWhJG7ChUhzYLSPkq6h4",
  "key19": "5M9PVMemYznbNWVGhjrYJz9E3deY86qhJbZ1xDm5DYyHyZ1LfFaSuWGSJhTiEZv2ushw38aCfvvp9kTicojRLi9s",
  "key20": "5Gc43rcY2Yk3J6LfXTmkb5cBobvaVNb1g1xJT3QzfZ5VfjyJ6mr87HNFpEwf2PhFcYB2qz1sTWKWjPaotGMcHHNi",
  "key21": "vNUHzsro8fqGg4pUZaFANAjR6mmyJfx1SXhL2dH2PqAEPRyJo6bD9Jxff2vzRveywdiRX9Uc73ex9bvYYpyLx4v",
  "key22": "3RyVjyg6Ko8RAsMUMupsq3q4SweJNGGJ5fcpuKWd6bSctgAynnZPo8VCLJfgoKs344LpRsTQRE1LW66PNfSZxMCA",
  "key23": "3AkTo2j4VUujttFMZs541tbcwT2Js4zLUTDGPnyYJsoysq8SgaZ7v5CoyfL9JNxC8T3w616vtjr9ufHVmtdHaWUB",
  "key24": "53zer5Fp7FAkS7AJWEBhMzuhUVaQCDSd6Dsn8hy9nWq87jAXgWqzyJk6wzbUH76AaA64bx28fUW6KVfVj8siJXHX",
  "key25": "2dugqeDECyfVEszrW4FHo1uX6fxXCjTZwb2Dga5r3eXUKPfLG9LCTT4y8y1a21BRZ8eB9nQc9V9cy8mybEvjHYeA",
  "key26": "3P4DenuwcYMV3LvviJRDxq2rdwRPrjC3Lc1nAz6gn4PHTcQ8zqTCJnYQQjXQrqYsdaiyGa5wjxKsHeYNRfkgUTBf",
  "key27": "2577K3DUvxJiqH8xRkWWJFPMLJbjmPTJnoQFmMaX3rBgiCU6AjWFeqrYxLw4aYQbjXWYAz2G5UTb45h9gMuyMsuA",
  "key28": "5sb4pmdSKGkKH6fC4x3G9GfLsABV61no74h3nckZbbQinj7Ag6kRD2LgospMf7nVyGmwY4enaqQteeLNsqC3hoyq",
  "key29": "6oNkMwd2Y8iU8REpE6E4XhJHGMyeYctQ1aU3UEfz8UCioSFtJiLjCYJ8dzg5x8DnVbFeMshZxPBtckVyAJZsVpV",
  "key30": "3TjbTYLc66U35K5vxjowUCzWtoqgmRa6JbFsRqg7KnUg9Tc99v4xZmrLTh3yHTSVjsRsY6oX5vJnFayyxscvHW33",
  "key31": "4M71DyGoaXReUGiHLRN9fk4ZX2cHFdfE4R3b5iA1E8CzURywFyAYw5iNg5K5S3epyQBsD5HhDFo61DhS5ULC5iRj",
  "key32": "5qYSbbXzbXUxVC7rCnRM3XthWmP2vrKWut11sjJisJAX7QLEErEoyWJ4rShQkEpvM7vHa4YMaptedrYzsSnbHH4s",
  "key33": "amkGkNoZxaYujaYjTQ6ENknNcFXir3HSTHcVjz18mivgQYES9mCb1qPDS5sE6b8uQ4mSWxUPiLnq7JAxKLKVwQj",
  "key34": "3HrE8tMC5f6f3ocwUxbg37phB2HzsZcuumZ3CPKh6U46t9hnDUV89gV1JBWsQyjnimTRv6B6Nwp1GUMZdQZvwd5j",
  "key35": "3jFAqYigfiGGJmCw2irhmGox4tQvD4YjDgxyLsjcDuBc4tRgP7FM1zge3YE5MuvP7YtYBBiTezjXtPMVraBosQMZ",
  "key36": "2ZteRpT4CJ1eYCogZXHmMyhM56esycFUBKjf8m5DFdytV4JUMZBZysRQARGAT225vCCJrrCZH4Rye666d5BAdgTV",
  "key37": "3TPmSAnaAFqJ3opzYG4HeqFa7QKQwKXe9kKeq8SiwhFjX7DKymM4EHMRmxxwLmGjDFgAdd9iCoH3RghwTzUfF9nr",
  "key38": "2ne6FUHcVqDzW44qZPV9Zf1XA3PtWHrpv4RdWj8QT8ihW6mMxETCGmGdYLGFJbSmF26TNaxhEExMfa1LzduxeepP",
  "key39": "sG7gyP17zc7rmcvYcwooB3wrfC4Tw24bBP5ocer6K3DA6VTqnVaqhUE86zZupPGfTwuizgBHGDws5JY9snM1qMd",
  "key40": "54DSoaVs4L3iVLhXc7LZdqoz51Jd7pKS6E8fToVG9zL1fLDb5KeoCXjXPNm9CDwg3ENKsZvfdqceXiWJKnV1uds7",
  "key41": "3eAdY6nzeTXx2x1uyL6xnLrRB5qonetBffFe7LaSSN8rcHXeYb9Nf6QbbgVpqQkWpwZT9NJaUMEokKYv2uMVn8bp",
  "key42": "5KKjwkmr8HtqEgF6NckR4z8QQj3rxAZMdrEJK6t259syshQJMLfY4VfpLmou5RSz6kFfQjs92889iveZzEStfxNQ",
  "key43": "2GfMdyzGMvmNR8fSo52MHYn8t8vevsN3wy9rPzG33af1bFNL5sUqiqE5fz6ryhFbRPpAGtfHJmYY7yncEgS3nYYy",
  "key44": "3SmiRmHh7gxag2mdp1YjPUtRGtcXr8xmhSoqcPhTFc5uHxxgzNJ9DiH7VehpWQHsdhQy93WvM4sS3wPDC1Ja3QQ1",
  "key45": "4ofrxgc1szA43oz1LmaLKYWc29ERJM2Esrq7FHSGbHo4uPRAo7Ejt8gHPSLEkw2AMBtcgwMF2oS6LJ5nHGhogx5S"
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
