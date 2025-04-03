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
    "3ipUNoQMG8xhfzJ9bsYrNQy2UkZjq6L74ejte4Ai7LDT9nuQQDxJuqgQpz2JfHVcH63h1nAc9CieSiZm7vvwvPtV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H3FHTijXMXWQaou6e5WyL2UTMTE6GoCen9gyE2DroyQVh2rC3A5f9zWhHBq6B3yMNY6vDiZF6vPLKnBidg62LZG",
  "key1": "38sXyk5zdpCHHu35CGfjkHJn2EPYycLN59rwMCsh54afSDrBS1w4oL4BbvxeshiNFHEmin4WNFU6h54Tmk21Yk2S",
  "key2": "umMMUAgXqoGJtFkrtX2BTfr4EQ8kEgaaHJvfmZ1RRLZ8fUoUGsoiiA6HDJbayBoNX2rcnvUX7bH28dMBStWLfbt",
  "key3": "5CwxfkGoCoWwxum1noT2zy7xRGALAn7GaLFHc4jXnfzLzwBWRG32BR4Dxq8AbRgxRTLwXKzk2qX5UbZZtzTGNAEd",
  "key4": "61G7KkXzam7WP48jAUu52ZwCpvvLDgoCDJgpmVdfksKbCMaaToG7hAgFk72q5sf2JAHdwSnsL4XAgNy2VDV18s81",
  "key5": "5ZZXb2kUwVejGSuzQVrnf9Mh1m4PuNDx6DE4ZjejnmpaLocoXLoMqHyXFco86FAby8NqRRdeAiC4DPHW2z4R4e8G",
  "key6": "64xkoyAKyYcvMD9hdc2vVmmDmjx2Ym7KzMeH7gmoqBvX8W5EK1KxuezSirUS5vWdLPHN1FMS1rGXu2J9qaN1hTBX",
  "key7": "4FwfuxdqHVW8Hb1bUfBhjMCSSJEQV5XtNCB2jTD6dj8HZ6pc9nqtYt2aZy7kdXPR38A18nBa4f1Yr4uvZeT9t3u5",
  "key8": "3X7ivdLBmWx5ka1VRaahKunmYkYPueLKCab78mkZNrVgsaeoUKSzu9phGVZDfYtYQud5ECed6rjG5pc1ph5atdsc",
  "key9": "3dJ98NFGNTRajLX1rXfiaKQ8y2Pt2o18iMYz3iqZQd4XWZwFe6hKqpK8KvnnvQqbQi8hrCBhRKU3wB4mH3c8LWFY",
  "key10": "3THDj6rHfLoA3pyAG7yzzp5sTDiN4fZgBJN324SeV4eTQKKtHbMac35JBo1gUSmC5VrbvCEj6mV21Q8C1zCfEht",
  "key11": "5avShpckT1AjCe8UCXEXhLH7NGbw7738dgpqgMNnXmDSteaEfgo6XW79P5caAYKuN4ZvVUpnThFapmxXr8mGgHoU",
  "key12": "5aAagtB73cpTYdPWpnTcVLVdKwBMwzzdQyYwwS4NUAQ5JFhCNtAfQrkyoZNABAdrqFdXoGM9F6r6umwjQfh2qAe4",
  "key13": "3aQAqBpUqnJ2iDsgFd7dnSZk5TpWnRGuQXZ3sW9DHQ4bva6BSxssfCVp231Gd5dX8SteZAnvHMsonKn1fy7h74Hr",
  "key14": "5sNrDmVMpxbWYJe7VEBUuUwRCKW2XjvrajCGQtCbDtnPo2vvF3ZXtWM8sk4YYiyLcQGP83z755GKEMg8QoXuJ2di",
  "key15": "5PvJp8et25VMwYfZwDPy3u14fDTwYNMyRDdgnWGwiPw4jUwjMbnHGNoLpxpR12HMV2xQFmA4B5XXxKafjfwBHruk",
  "key16": "4eGdYrNoR6uq5jkfY9H78ZqEvxwzKT3pWBSkrKn59cNqzJ9L7CreRyFRNSEB28tjs4fnAMmjUDB7atDrLqDESkeW",
  "key17": "4gZdRGd6sRWWjrwYcUdrmhozEcL6HETo4vaxQiaYVY1VBRFYSo4iLe3b4JAqbD8oQwGqCTtCUXYn51FzHaW8hgbY",
  "key18": "NtjwJ7T7P26hPiepsDSqwgrFZBuDjSJssfWJfi41drkk3zARjzLqWx9FhJDqyF7vhrKQP6wYipHDiBWG57SX2LX",
  "key19": "39dcZx4CriKkSBWuqmonj8MtyfTNTNHMggFEKbdxPG1wGkzDUGYVPRvTAczUTyhHPhhhxDozUtoQ1qyNzEVJGbWF",
  "key20": "29R6eUpUTrwoKWDAn8qLJzdhxNnX8dez57tvurgypegWM2YB12n6dFp5T5xx9jqy2dUPW6mVn1dixTqTjoh9C3f7",
  "key21": "5dRbqVztrwYCSajHaBz5hxJrYAhaNB5dPVNh8h3wNje1iAbWVrMGM4mhAkeWthEPrQYeuAyXXFB5kv9BGeJ8AbtF",
  "key22": "BZ1Uoin3AevG9APATjxDn6ZxpcqWc2esspAHEBnm9KPNepYX4uyR29bUFx9t5qfRAvxHeivHdta1eVPGM7F4kGV",
  "key23": "5hdZH3UhYgtiWfTv4GSE9xZfSABwU9qgx6WNxfJYjXeHudHc5k7gF1jYwHCoAkMtDR6M1vnYwnHw82gfYw4gXbG5",
  "key24": "5pjpgPpBw6v6R1que6MfJERXR6mXkieXiN9WM3snWg4PHsBJFk7K6P3hkMs9xnzEfMJDhauTVXzchcpEMYWMug6Z",
  "key25": "3oxhYgKn1MZzQXEDzTQjthahz4h88pEdc3ho92YxbubzDYM9UudNDcnWy7Qox9AJYhT2aVktsJpKgkv7VdJr5p4g",
  "key26": "4VEA9aYmgW3oc9Prza5xTjHN5PPN7B3DrFsrRPBsvFj14gnpfbCManoHiRnTmR1GnwbwPJK23LkYQSJQQU1bYKL9",
  "key27": "3Pgvb8f1efbakvLPXYiXxZH6wsPC9CVfKrZfV8JKZcuW54tcm1MkLnZ672Li4mg1ag5etjD9Yyw6udF61WHnJtca",
  "key28": "4NccEsPDJqNSxaBV9AemxnYnRTY7AgnoWbuKLyxfc5vPgDi1VpA9YXXG2UWSWPWkmyFwAJvJgGgC4tmZUxdhfwUq",
  "key29": "67bWE7KpnSYiFHuGWJt9gHmHPgj3qEdZEUxsgN3LuxMskGrnZXMhh2dMkzEkypBvKBkzTAG4R1XJAiBzwT4jdCA7",
  "key30": "4yS9CdJmwvjBtWxSrDvPjiXHkJ9N4wafUsZ1LrhUd8ZcQtpbDUfCr2dif6gUh8hrYdoajDb5aKezvDWwdU71xSjc",
  "key31": "YPo84VNsQFUfrkoQbTQqAxoBkZW5NmBM4FTSrLQQcjUxC9Qg65Evx48uHjRdDRB5a3znZF7MWHa7yYGZgFHBb7h",
  "key32": "5bAhVSDLVePCttcfSohFXYsfxqZysae9taXz17euVkdeeWbDTntAF4E3mHWsqBMbjq2XyFDbqN2eZuYuy3eoggZM",
  "key33": "58SPDx93bKQoqM7cRYB5UUpMyDDrYP2fxG7z7Ddbd5KdQ9EiZZfiB1iTAGY9DWSDwaCAmb51CFPDgaeLZ8MPoM2k"
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
