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
    "49emmQM4dLTJY4WxMAYLnt1BjDytYwsKyKVNi6PVjW6iqP8JZ6biE24kbyi6SXwtXRs3oDjD8TwFZHwc4M7g2BKA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MrbbmCBFDCzoDJwY5eV5hcu67fZhv3n3SyaM98w8KyrcojRVULdM7wTY6bH7mqW4u7fdkCbSAMt8E3F79JCczG2",
  "key1": "5p15MWXKBFwg2BoRLJMKMHbqt9VgLAMSLGrqKRbPQ4FhkKDCMAJXmTLuDJevT45UQDsa4r5URMsmX4yANbLAooVj",
  "key2": "4nrd6WCGVwZsLnB2homikx65ZMxqc64sRAAPoReueidU5Ut9kHUeQEjsjEUhPRTGqz35WQHd5et9pwxEqYa7ZafP",
  "key3": "rHum74fB9STRBHq9FeuemDSRbEzvriGDwiRmxHX2fWD1vsBYrJDJtYGNNncwUWDymow2n4kowfm4VdAUbiHMtqF",
  "key4": "2EMtBcDfBxb7sCWQ2LBsuWCY8di73Dbdn9JcF9E5TRTedHF5sd6VmMpARp5V6rPeiYLZQTahubTGcwCxjxq9vcRR",
  "key5": "4FzYb47KzT62WyfQSLFwuQ1E9aMCHbHQJUv5cgNPXLrhnxF7naqDX8XbW6DWBCRkp63jn5RggjxazwtmuZHNaLuw",
  "key6": "2ZyN8gRGbrvBwfiyX6SRp6N6gFsAXLJNuLRTA9RophzcTqgJESdQ1iN8GeosTRZVWw5QEb1DBZB7KWXbsxEd7a87",
  "key7": "2tfppUZtGR3pYJqMcHTqmJfDX8HhEsZL1zDmJHiKxcQQXW4jfubZXbcEGHjSHM2funQqJhL4iQhbrpdRNexDUANo",
  "key8": "2CYiH5TBbGjNxNg52BX4TuukQknsgWb2uZc1DPTTKC3GxE8UB8ARbx6AKrBaostRJqJy4tZi1h6R3QY7kNkXyrBX",
  "key9": "4ArdaHRT3VpRuCMqcx4xaz1Cc3xPUneyZYxXw979Dm59ZV2tG18LwFJyFqrjKtmzo5NJZtcPgqZ3ppfYovTwCcnY",
  "key10": "3HJ5ggem2tLfSZDYPDHn6pw96wV6t1kYKyQi5KnHL4P4wKacNJkxzEHwJe1Kx1T2vxEDFEZYyq2NdEQ3u4vu56Sg",
  "key11": "5GekazGQYnuGeKc3RbnBKXhiZXjVS4rcshMSPi4mdsvvSNqfAVJobDnAfsdyLvo2tJjnuP7TpmKM8VAZdvWkQE7k",
  "key12": "2ZXxdzfZmjNMccSXTNcU5FWuWjdW5ztsAB8Xc4BoBs4dFaf6BfVZQbvqxyYczaFALZtFS3Q5LCqpQPfE85jdGM1w",
  "key13": "4qWVFGsLsZfsfhdG7G2aFuFKwPX947zSEHPjZuALpWXWm327g9k9AY1zwcgKGq2aHY1ACWxRPMovxd4wxyjgNsoU",
  "key14": "5Nj8tcKdytC6A2xuw2CYmgsQrV7GEwjETn2QTySUxUowBrB65x9XzzcF66c3GfE32fqdZwxHackPTMZx2N6NcAmi",
  "key15": "PxCSDdf8yVKZR6zt7D4CbgVjBouX5FxWwVecLNqnKrcoaxTwKQVQREDKS7cVieLBWMCmycZ9fjeD3HGt7fKYbff",
  "key16": "3EZK3akN1u9QQx1eJ3Fc3cCgi8XfEZmVFm5yWgUSvzrKk3kiPmHZPvLH58Kqd5JRvB9HMDE8ZeYpuDFydi9BJr2z",
  "key17": "2Mf6U7qhaUk8NquSBP6PkQtUqDUb5ShpfADTqCBU8wTA3eWpjTKo9R5NH2WrcobzaHT3x1eaiPxbDPLWpzG6Wgr8",
  "key18": "5SbTpoTvxJvuJZqJvMXWUU9nJLfQqnmdHdZ99FEwKPHJhGhLRuZRyApdUUJCQSnfJqzZaTPiJCtCUS5Dn5CCHvbi",
  "key19": "4ze69by3gthkvvmE3B2ArbEXrkzdcpPQBZCgt1PwyytzyGpsnmnqCjYBJN3qPLvVj3bPJ81UFa3dk2NdrY4XV54t",
  "key20": "MoHpabGfEkZQZ2fWZtEboiNZqHBNEopuRth3gVvcPGaTJq6jWYKaHoN3gaaU7ou2cgpbshN3BGLHoQQ4Lemyzfs",
  "key21": "KhAZUwdT6d8HXvQnNKbgX2gQzGYPXwqGwdqMV7vfiWGophbScMJLqu7YXMA5op5wUK98Cq6Fx8uBHhkapnd5Tsv",
  "key22": "4vn1bsqexFMqGy1oZa1igHmLdUKm6Vy6DV8HkA7Qw5NqFtjTXwJwC6xen1tn9ebzCGJ9kPHPGUe2gptFFeL9NYHZ",
  "key23": "2NF3ngJorFWx7f33Sh7mBCXQvkatGTyvVzVvcBt569XDiFbX2jHAmJYRQEx4qvb2zuqk2bPeSHisWKuwPG4wX5Tq",
  "key24": "8Qds4yr4ADWAPkQrNrAxpPjcuiSWogcu31xwXFoRC1AFwmJRALBhNwKGYuko7Ek8wiCXRrAe6RmZNHc5cb47AaU",
  "key25": "3fYcDv1HGtkSDLL2Ri2gssKhqnVpwidTiKaPA7X4zgVKNBhDt3e5uJz8QfTa6Z3tPJ49mFv1E7jjEJiPMtDPGj6A"
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
