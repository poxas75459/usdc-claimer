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
    "41WUWkmPYJHGqYhrKPEgSfnnbd17Uh1Zx3d2pvRrADhEhjPtZJ6KVjPnuqRk2fQdq3G7VUN3Foemxyqt8Wx53JEc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W8sqK4R8uD3edTVtzPL2ACaNdXw47XT8e4ucAY8cmn1gAA3kLCCq5jf41uTi1vCakum7AGFyJZANddqYFfN589d",
  "key1": "8NUa6HggsHBLQobYDSzmRa37w26oPqHxb2SSTDtsjYTLb8Ak7bKq1U1HgTMZ1GdQG2qp3PXpDhRAAFkwgZvWeBs",
  "key2": "5bXaMos2CtX7RGhWdJfYcy5NrnqujhSWxZ4kadP7PjEr3oKoUbL54DRxmEjtfa6uq5hvxiPXQYF3g9Tsvo9cbfZt",
  "key3": "3vkjQ7WmJ9gX72h1BzHew3W4rS6QY6QtpqifC64z6zAkHqU5uSsvHZSuA6hhxKJZBi6ym9Qei2srgvEm8hYWz1Zg",
  "key4": "4nujVdzxQAm9PJWuHEo1KXdbRqzMnrqAEbzE25aEbJHtQFzxeLDUQZD2oR8QN9u5T1zRobc2tWChreMP7ZZjcBD6",
  "key5": "2RedWpooU3jiQykR66n3qE1j8RKEtBfL17sf1XLH2wHprdMMRmtoZ8XSoZGBbbtu5xBF9qBeR4ST5ZH8gSPx9xUG",
  "key6": "RWsV7FfXwDyLVbSHHN27bWHvvX2QbhgnYiX7EzHMijEAzJ9FdbpHGHLq9hpPkWH4ZDQhANPuTBLjLSXvzv5wQS6",
  "key7": "5cBUvGf7NEqRwYWi79GdAyCtuWfoefsTFLgmaL56s3y2F62GSnP861nXVpmVszHxa63GThgiKndX7xvmTxY8KRAz",
  "key8": "5Y8JVVvdid87n5WjChYfvEyQyiwvb2JDrWh7xsXX6LHYj8SvkTetbY6USgfvWVUDyVqtmeirS7g3BAE39f1VY6LH",
  "key9": "GScydnRUaMHaCCKvb2ifi76o96BYdSp2Hwdkw4edAjZN2HPGFp4dV1i3EE94akJeP7if27rQW7yy8PgBKtydoQL",
  "key10": "5NSGUC9sbDqng2Vc2rXQpM1pdYVsHrEakjqYMhdBVvM4Niz53yECAV7n4LCGBzAEhXLEpTWULRjPyvbao9Crzs79",
  "key11": "2CkrzfF3F4kvmN9ytznkWDmGGns2WMqyHPegCWjqFxQ2UnhenjYVcjkfGbpHDGG8F5mfp8TmQWWufSukHAbjjv3c",
  "key12": "4tL7yRRa1skRPo14rvTA8EWcsZa9byyTbyGTZqJucA1hXNKgsJDQFYxyKTHREjCEg2TKgWmfnhhk8pDkdCYW7Emm",
  "key13": "5hYTajWHBnFnVekqP1uqr5RSz4zMd6PX2xDiAwEmZmB3mwbQvsacoQEzphrbCFTccLZQBH1m4aGnenFSqcRarqEZ",
  "key14": "2JcAYzKrcfsi5sxgFLn6Go6tzpeyeYiC6gMw6XkX1xwwZ6xE2pw1bVqwCAgbAxBdMRP7vv1ya6mFvm9hjP9vQxnK",
  "key15": "5XVTGRGuqpCyU66EXrXLBMJEQe4GsCniCKK4eqRXtucJb9T9KuwwXKdrveSn8PmYBTLFeoQeJQyz8gWRMWFFQoUv",
  "key16": "ZrWUZp4CsWWvVPNLRB6Lyr3iGXwfbWdQpy19gGbAd4JyP2Adq1eXiLWhTNpKYBn91ikaNbTEZ7RYRcTxCY4x6p1",
  "key17": "4w9LsPNm2sDfNwaeZ2mXyXfsBHZXN6vJgenPd2t33B9fWV93H1TYUUh38Mk3Ckn37GnszK7eap5SNk4JFbuHsMVF",
  "key18": "2Q4rWnzD3Qw1xsPx6TwZoL5FW1ezfyZCrDdpNY1JjqeL85m9Legxbpe1DoVCCufm3WF5SqgZzoAKCP6dvYCPZbYb",
  "key19": "3uG92T5Gg5Cf8Aaz3ugaAoUPQ89Y2iieya17QEZb5n2Z6z1s1Sh6kZgo8LEy6iCYMxQ4RAB2wFLtZutqmcR3vLHa",
  "key20": "66h5LWcyYgHxd56aW2EhDMjx7ppFS6cBunEgSrPcSQmqrPb1eRcC2ozbRcetxEsdtHdVCdQvqmH4KF31n3DnfFVP",
  "key21": "3QC7q4fsE7NbMhF7skWRQ4bFLQTi3fZx27n1T6uoUMC2oPeDJ1oGjJhw4S2V5s4RCPPLWuzXRpjQBeYpzTvkLtn2",
  "key22": "4MTR3N1m8XUD6pRB3uzaiK8vWhGDztGbfzDoNGb3YuwuhrEh6WErsB4VCfgwtGrgQpkaDVTz8UanzAhpDTVRp8UY",
  "key23": "4qa3TCsEB1BJ7MfLiRUNGgPwsa3Hx8TB5BiokNFmXUGXZi8SkBaouqf1N7jhsxRc29zz3fFbVizk1hLSRLX28E58",
  "key24": "5dVnKkRVV1DxHScwmCEEjdEQgL7UAaQkz6v1XDgYfnT9wWTFU4LBF1NdQuTjRPAzLWzzTkVFYSycD2iuFHqdSeh7",
  "key25": "5LjnJjEvgAf9P8wP23LfSYN2YyHWZ6VruJx9ADqVq51nZ4oMDDcjUx5GNvQtwiUreWLGwk9bvZWJWGUiouaoUUN5",
  "key26": "2rfJ5J3uxoeXr7M3TQ5oojr6JZHBsz29AJdL9BBJ3WRNjC4LrtqA1moJPwFHjp5JRM59iDzUsYhet6LFZY5gJxEp",
  "key27": "4y7RB1H2tq6QzP5gVmepj6DMAw17ELQnmT7qQZWEcLDUZCqUSy1VuwYJxT4e52RCNRFKWXf9Q1NQKd5Zi7FhgpnU",
  "key28": "58yHF4Tmwb1hVdyG7g4VXBopaVGBdrA2SCzqgqDun8QKsxLAyffvuYgRJxf2RhiMBowYAiJh78Qek6YpLG3CppGM",
  "key29": "49CsPK3Mwf2kFwHAZDrVYKVMfXfVoZJVkUDnkz5TZQQuDVQyzYnR8sQtx7DRm7m1nEfBghD1ZQyo64NPmygj93Yz",
  "key30": "3hZLjtV2doSrNr4XLdHH4bmFHFzZb3iA1NPpsnkBZBvtQWj3PgLJ5ULDYicq9uR4hkDwSwShqD2zLZecYf1DMxUt"
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
