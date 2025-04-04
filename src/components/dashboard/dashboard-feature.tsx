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
    "34R1kxJwEytNRtdGMdWi2h6MEmXvuZXcfdGdXn2FtHHL4tCtJfaWuCuChJpzZTgLF4PfcE5fRxXW3TK7PYvoGVc7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZUo5c6ZDQX2qMNeUd5nhZ2qoKc2gnkvYu1JdtWNi7RTXcW3iSZDr72sFnwwLMsn5MwGaPtawAeNbsJncUGsfpiw",
  "key1": "4rZj8Ne8T3NYyL89kxkcnj8V2erofu58WQfLUembp79e4h7hSUidzzAA9yeXydQEQUiK9VURdCKNVfT1e1tM7a9E",
  "key2": "2x4v3qyo7YCTDF9hWtkXXxnth2i7XH834En7NhBNr4Y5wox5K9QyTatPwnjXvvCBZgAoB3LJLm8mGAkDqMxbVi4N",
  "key3": "VjAwXPkh46xUbYjVumsHvkqk6orMPSoK57kuFDHE7AZ5L61RNK69v6Mru28163qPsVyCRghQwUUrC8KDeMz6dEx",
  "key4": "3DoC4oWVbwH3nsneyaQdtz6RRpWdTcGb71fdaLEbvwxw43xYVb1s1haryJ5f3z9QsRHBcktet8Lkd3TnYvhVgeu4",
  "key5": "4qqii2n7FB2unmgWQVW2UgWTXMHCBcErH9tCJcXk7rZe85qzR4TH2bpfh9vzDU6GE9tnXewck3ELYDGvk9iVr1pT",
  "key6": "4g3QNVPYyCXWR9UmmrABfSgct6nPzVgiRH1PSqACBSmYixbv9nfzdQrtDMgbiRungGMPsJ1qQLAxe3ndCcF8nvhs",
  "key7": "4fGNFABXhgmNx6YGi3W8vkN7AjLiqrK4B916K4UMQmzKmojNge5y9kjcK3ThEv5U9LJ3HNrV55eshHj4UFdJ6Rq4",
  "key8": "W7yusKP3JBud9Tihg22EkgtDq1vknmT6cfqGULRN4PE3GuphgAzq6NZoPFqf2pzNnRNs4VK8SevNv4esQ73YkMj",
  "key9": "5uPJd6X2aL4oKzJmL3ppcriyFBHdnYMyp64jNpd9eytGbqXcoStxjyLZWY1psojxffpC4zcc37hcjCwEHsmhBVqX",
  "key10": "3NgHjTHqmxdhPmiCRmymQB2jqffZT7zAe1SncrLEGAMxtLD9S1MckFQEfezbKafkJ1CTnsQXuD8jvXQV1DZKUwNp",
  "key11": "41y1y6x2j4DuqbdCnG7shugJvXGh3mJxWrj3fKaiV8vcX1bLRGRsYc3cbTZwLrzobyStmHG5FHPaiVB6P27gKEfP",
  "key12": "1kA3KzPLzr3sVNtnqx6dSJPA1xfLv8siC9ByWRQ6T2muHPasjZUQqPLKUfQVJsd4HaHdM4rF95Lg5mv3dLR3QyS",
  "key13": "3d4r7msirQxi1ZMVTfKfV2TjX9kKaaxAfdh8UNwQYnY6W3L4wkF1JvCQ1yuQdreaVHNkbAP2cFJtCKMJPzYsuBua",
  "key14": "2T2FgN1n46HETwgMBKWvtgx91189vPyMHtCTR7DLXwHexQi88yGvbqxu9CeapcquKMGgi8X7fFe7Rfk7V8og2eSJ",
  "key15": "3qFn6jzLGK7ZdRZSRiqSwx4uscTUBFMW8mkYwWau9Vb4CediyYsUPmb33KH6H7i14SCqkvVx8G9no4znQfYhNwLY",
  "key16": "2d65CcCKC4TKaM4fnjNiiND3t9Q4ohiftoBKTF2Be2tQMVybBcnG8ujRbWNrgCxHKrTbNX6ofB6Tp6u9mBz1tQAE",
  "key17": "5A2YQZA5yHY8q9mdxdMuLPosKAJjMEMebWVSYzDkSqTLvvR6wgKdWNLAsuomCTf9Zq6x9ydXJ2ViR1gwqprr2fM",
  "key18": "539JvXwQwaBHTuJ3wmSXJmo4ixf887VhnMLjMzM8wXx3dzr6zBFPWtEhF1fyNPQF4aDaakVDiiYiUiqs2DiogPEh",
  "key19": "4mSax5MS981Tt3jeKqSekniNJPVJKsuoVSyc89zKZBQN4BP8enPcTFeGqNsf36oc2krJ5wuVMwTZjm1GsFyQnZrK",
  "key20": "3a3agmfjSk7YToGfHBH8Bs9x4i6BLT5ETC6CBerf74vbNZw39iqGQBmUJkc8kcwyMHwTajWdGBui2Xka5KPCGE5t",
  "key21": "3rGCGubjipTBT5vTtECKukY98Vg2w6TwL89FSoH4gmU57cGqxyaPuKmTAhEdxRGmBZJZ3DXeEy9S8AZtUqzSGjEa",
  "key22": "2hpgcQYaTq6hBme8zspZEWoeyKVYX29ioPp47bdugkrM1h9nfzrfwxB2dYSiTNRw775w2KBgw35mb1NXkjuY8boy",
  "key23": "5MjUCiLeUvz5UXQ4mGc1dkmbv87QWRd2bFNmZ5FmZsUejnmQCqDFbbM4LJT72UFxuAvB2fz7UaTBUEjQjdic8xm2",
  "key24": "33jomaeLDZcEVWaAEuwYZARJRVGzdibHQ81op2yL87xNanFJMicty2Y5dyMM1kQS58U9z2FsNgz1RW5AN1Yudi4r",
  "key25": "59vYHQMSbMK54d71tXqfycA69cGU6xH8iajEz1t572URrtx3NGhEXwSVaR5e8Z6fPLDKqZXLKSw3GpaDwHUPenzY",
  "key26": "6FkmwjS9q1nduPazwDQ7bB53gFhR5QQ7ZsS6aV2KS7C6tDj5kY3aVBiZFFffcweaxrCn7qQgedRbfgyo1atYfxK",
  "key27": "5ws8V26E63CNdFbk6Jxxnb8gMZSHoVhQa27nMZtPk1w7ZaTwK2F2Z3sJVoZmqoRAXq7gBzofU5xmjE2mTZ3iS7Mw",
  "key28": "3ecMNUkjhXPKdMgHvfediWt4tK5JbU7VejihhfLuW7UbE53ro22F4tWuzqs7vEcyjRqExRjt3iadXbYYQP9RhSxz",
  "key29": "2zo2ZinpPNwSWHNrbhT44xsxQh6wxxxGYfYVSUHUNKDqU5cy5HQHUrLPcmKA4EoZLsMEriVt33TZjjPx8XNWXCFb",
  "key30": "2RgMvmVqNXYSZtT3pa9Vzy7gUr3MGPHQeMAnyrVpVrHibFHWTdqBAu9Lf7uXvaXVSsEZFEwp2UAFEsEiae5WeZyv",
  "key31": "2S9PU75kBtLisKV5AHnpeB6yKAsVbDy2xW8Smu88GZmhCz8s7DjiRnxK6rFp9iUEdTNUaFMXF86zdxYMBBagohr1",
  "key32": "4Bexzn9g22BGDSyGbUvRuukC9FuDzG7p6KhKwt3pHep4m2LzcUeJVmhVH6BPphuJPUYc9MW53LjRdMPJjS8jk2iy"
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
