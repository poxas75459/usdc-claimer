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
    "25rwEEDGP2WZhZ4TAnTUDK5wNs35cCF6QEoSiiRZZC8jWeZyTnjSzyjva8qe4g6S7S5zyNH4UkANdV3Fi1if28BA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JBbCAyqxDJUmJxL876ydSkagFpzqaTa6T3CVvZvGZNMN4rPCpQnDEvxF27Apms8SqZtLMizfBDot7NhsD2BQhMF",
  "key1": "5C47Zf5HvxVJrczouzUawVPJnEA87srV3PAA43jGXSLH34hJnmYzSfKjkh4MW3JLr66JGiV4DbQXzspGWLhMnPiF",
  "key2": "C3XMFZSGSLp76DrB8pC4qB7phrGsPwDw1MNanbk9Jnn9Up251c2nrXaccnHG9D5pKUNtuz7mkceZ3uPTa6RWXFg",
  "key3": "5Be1Gdn4eYEACiZ8jMGb5MzKMDTjfCP2ECXbUGHm6SHKvT48G3VGW8GZkiMghpDyQJadMzEJWvRVYRpCj8953G64",
  "key4": "5jecq1C2XvF1VJ3pjUTVTuNGnmYVpcW1GH6rpUsvDpMyTeLQALHKuZm725SXSoL8UgdYZnKKwCgTNGSBzp5ESPum",
  "key5": "2vtC3udLQ6cwh4oLEhFPVjnHx2AN1TsWsP5D1jDx2FRmjZN2DkFj7Jmdau8sRb2cWmV76R1Z8xQmH1zSqWsgt27w",
  "key6": "4GC53WvAmYwZjoAe7BscKn5eh3gvwn9eLuNZYzLfA6zeWaxH613gDcZZVr6QL2aFGETMpTMGgJG8XVuXdA6S4ksU",
  "key7": "TBtweQNnAn7ArCmciKyMB2WJos923Sq6fPdVahBtDW4mq2km3hCmRWzgBx6C6LB8L1ywXK36bCQRfYoWPqeQEdL",
  "key8": "2y8A473cyx2DP6BiHU3WeoRmZBAfjQcCxTTN5TsNAetj6czzbavj5cyQtyZks2DUYfCa1cgxzH2XCkE4N7cXEJDo",
  "key9": "5PXD6LjnMJcZx295j29Zavu1pej4htRA6UBKadPFLdUBqXfDBFWfH8SfkTYHwVp2teLeqfx1D7WKBV2RpVqVt2zG",
  "key10": "5fPdPSWb3DiZT8qS34Hdx3qj7V1g9Axn4TX6jq32Ei8JVahnxwSHzWimjXdpMP7d6Xi2bgTYhJruuDs7mcdDqWM8",
  "key11": "niWgbAxSZNb5FyR3bfL9P4cjbD1s7UusufM1XHaA4f3NxCfxZFQaBUqVeaaXWXEsi4sQipoWidSJGpnNe7s3pFF",
  "key12": "3oKRSatcwXEopTzSmU464LLeo8Y3Q3rbwhFNCq2MBcwjD53kgNaeAhS6nbfmZAbA7BAxqY2bTHGg2x4XdHtWmvPU",
  "key13": "41idoWH5h6jzpx6kaEZTbuHsRzoyxLG25wH5ceagWTdfBdLRbFuniQZFVpd65pi6phZrzwfVdQWKb4V2PoSiDbZd",
  "key14": "2wCmfGejf2U16muXFR7L5iKvFAotW5cjWq32anCCtXwwiwXiAocYhVDRBVCKPA73eQGKuyCw5yGL6mrfqTi11Xn9",
  "key15": "4jHcw4fKrnEsAEjydMQvnVKTxogewdDTyZ7ufYibBVo1LTgWrtmPo7VW15ScQ5qGzBvtJaX1kBfyv6CdvtpoHUxF",
  "key16": "3YMXACwwoJdCC2anVrKfzp7xvPcjinMn581nBXA6yz55xEHx9WQ8bY4SMQrgAahJWeR25KKwW15fQwLv8aTvnm2r",
  "key17": "4PyEQrC1eDsjRwhjM32QfR9brwat91PJeDpbBvjrmi4um6jfCEGqXPr6oZ6muNFwtpeXiHs39xmUe7yvbnXgT9JH",
  "key18": "63Cpi5zEwQQUG6USyZGM18aYzK63a78kFruLwBBhQZnLRdB5aHbJgc8A2eLVDLaePamWdLbE9AFWB7ybeMHuf2YA",
  "key19": "4Yq1cQQNi8fBXzF4dkfnTkshqUiDc6pgix5mor7Scj4VTdWi4wGJEgfsqupX6LmdQcCTAtGyWQfqVQWQs9ygjijb",
  "key20": "44dmMxAH9gN1WoTHZ9onh13t64bqLtCfo63Tyff9AsCNvwVWdB54Dxtna9RaW7aq4GAFuM7TZdiV5xzhUy3ERdBa",
  "key21": "4wNFW1js9UsDhCNmr9Lm4bS9Nqd6PBNcVWEp79WMQJyeA3VmE9S3eaJMdTm98NZyaF585j48Unr9NbDKcoPL1yM4",
  "key22": "Z2PizDgtwQ1jWkD1fL5dJxS6mpMQkni2RMy9UhxAQet7nm4bCUKdrKpSVNoKrJXRRDis2wafs3RuYqyJ1rPX2rw",
  "key23": "5PHRaocCxPxSXRqQRegimNz5iTb1ijCoANQNAcY7vKdcrqxt16wwHFTXacYpqEvSXbgJeGUQRa6EUCZCrkeLzWMn",
  "key24": "2oBDbLFMLnY7hybxe3UzYggNkwtQjW1aoMa3iKikmZxT7pp4DJvYyVXeAPVTuKocTrgfUFSAMszo8zWDH5QwvsUH",
  "key25": "2qQ3GSbtG7z2bUEeeqVjK71EkCn8BVhgmZv37jpdvN53czK1Q5UWEu9NoCAc4ZTegff4kcKj8cuyb5oSq12JVoLu",
  "key26": "WAmNazdBbSdAsFWXUvJ7yDLVnYXEAyJybaG25BU6s9FofU4wWTLZznenHnKtQ62L3adz7M4QkirTsqMDn7mazYv"
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
