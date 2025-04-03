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
    "2d3N1TYT2ZGgLp9m7B39VFNVuPpMX5p81tXEe1nQGkfquG3GVLZJugBiKJZoGr3fF5Au8pk6FTHwzXubbL7JtWU8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51e1RkBDhaWC1q3kiZRdgA76fyacrJGYMMAN6FMb5QS7oUabti4E41UwpR2AtKUGRDr8GBiTfqmBS8ECMFfFMNhM",
  "key1": "4uuAZsZmPfQEgJHCrBRD2fAFjbFm2tEvyErkfEjLbBCk53UxeTbrTJnge3QCPhgozG9V6UTko3Hs928gFZZEB5jS",
  "key2": "ccfGDb3wupqyYQ6AQP1b8ZRxii9rPXCp9fbvusTh2czvT7Sck32Yj7yaRETTVtWTa3qHVvDKXvcW8XTnQir9qhF",
  "key3": "2eHR6Rs689xhq62SuvXbdCjJoAo2PkEMHGuTgoWDvg3sZfrWKXnjAoCfjaw3NuU2aJYEXKX7PTAd7RguJytgBV6J",
  "key4": "36P42Rum3EV9enyN94HSnx48D3kBwWTgkBFWUMgjV5PmZUJNbWfZRYXrgFxvSXyqzQU3Q92Agdz7ZqTiBoXvqBja",
  "key5": "5yUUH65cHR2ssQtH4NoyhvjBXvRJcrA4Z5XeFifT2Tj3tsqCnDYMJJgKY8KZ4eW6m9bM98NsLyJ2dEwcSYq9nJhr",
  "key6": "sf4jAYvoUqoKjmWeuPaaDtdQ4ThXx3534rffreQQQYhaWKfhyQTN5yvG7ejFUaSKPVxUxQZHQvtgbApgnr2RspF",
  "key7": "2YGNVGwd9p7t4NgNJDeiqJFamW6gLFJzo8KqfdpH7q3hsd8HfQVrFnq3Lq8MMJ6JoeFuW19po5wTHAHF8PgCe3pa",
  "key8": "5aCTHDyfgAYPWQrVtYBaksFBLxMTiT2WoxaUXrQUpgezx61BpRYric4EUwT3bg2WzcP7iqxxUkUYgtBep76oUS5U",
  "key9": "3gQLHcWPMi2oWvzC6NYNj3pWnYosoFRiNbJhphANCVE6sgb5XAxpJEfR46FDEY7eJSzadmTiwoeQvAcgRxcqRJg9",
  "key10": "3oF73KqgboZgWkZ2Vt1FPZPNXPLJBLBn5isc32SiR3Cs37fVxhmwtB5wF9xH9BRDzexbibCtNSTcLnk1gb6tyS4d",
  "key11": "4DLLxsN1C2YgD6M4fTYaGJxAbdDshDxBjt2hX2UJJcX8HMt6meniZ8A11LB6vawdCD84jVyqPB6WmcS98GEJzXaA",
  "key12": "3D65WL9J7YGsDQKBCECqETxrf1gscf7hcJB2AJkhVy3Hpko8hXoyN17ysUn2aEq9hYHcS8KTZ7CH2gCdk1Xrdgpd",
  "key13": "EMzyKBDsbVoeLwju4fy4FJP7mAjkbGepcdMnv6GUQjNPoaW7qYsReQQ4XxapZhf2GZJH3UjGERZzS4bidfCr8QN",
  "key14": "5ESCRdcEeF5N56cgNYBrCRdaDHGNqbiLwUAdrFXUDepNmQzCjh6xLv9KSeu4qr5LfLjwS4vf1uv4e56ahCUnBhHn",
  "key15": "n47G8oBPsReqUcHAYQha9pK9eG4MYkuaFrRiF776bMsnv6T8sJK2G12bqconKyUzGmWpDdA6WAnwc4hHkBhcsYN",
  "key16": "2YZ6FP5e4EU7duLehfJxxxGLNGLz8ifkmRMCB3kGqRJLPBN3Y2swJELnH75rmsrcsKeoZNqbqDHjoGK6kfk2CSTC",
  "key17": "LMYvvc31qHnTQHBDZ4JTK7c8zAdAGUd6aHaCHkYWrQp9okpwxuhnGVU5Y8F8H3waEaLpqiNr15kCiPcvDfHJK4k",
  "key18": "2pjxJdhEFMrfFLfLFEQJsesh2L4XHR9cu6Cbqbys7NjXQdHcaFVsEkRm3hD2smt4MBUWkWeKQ3Ap7Teq1BmthG8V",
  "key19": "3xaZRcXHBJLSe178H2T9mMm8VYgFrEy2D3JuM8ymroWE9s5J1YuXZfaMcU1gwLb829FeHpJWb9ykv1zmkDu5WbaG",
  "key20": "2Rpz1r7e8wQwGuh5kfeLuBA9tSkE6dUtg7gALSSyZGxJAtPmU1XbVXcJx3SPV3Z1ntAdVxz5c1WkdWvnkR1wNJME",
  "key21": "5bnekC9CmdSjTZnYxMgFgBL8sEVFBa33TGVEvCCksXNEq5KSR2QJhW7XZjw2Z5gd7rbHwKoHfiikryNs9FrVSFu4",
  "key22": "gxzp6YGTeZ5ao5SVC9xJ7sJWbrtVa2XkBvxpzLpXo9w5LcKzmop87LTvGRYbirzovG9AKbRry3S1L2EEs8JqaPA",
  "key23": "6Bjh9kRPPztRSzStEg17rwGzD1rqsEjFdpZSmFsrdY3kEQp9WftKq7qdbujJLkJvucam5ykgwwLG36vEBY3Qu47",
  "key24": "t4RTKGMJxrUvWXYaF1n8nx2u913Rw7UwbBK8gWanvi4Rj3R25SiQ4ab6N2TiVtGvEKPsjSb5fSNTqAYmUBPP3HN",
  "key25": "4EUmzdv8QrzB674MBXUnnffZ2RXqmJ4KW41DDdcRc7T7GXjPb9avLKvCRjCn4g7EdCuhsXUskLr3e9tTMHuRDcgo"
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
