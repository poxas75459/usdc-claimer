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
    "48pWyUZVBhG5pjv5kAcr4HjoKvLUFDykZoQ6jM1p7QtzWUzABSWNa2DKkjB7D2uh3cnTYiocBDAJ44PnJcpNbcHD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LQyPCEgmCWeoPJQCQPAybSfEPxCRqJh5Fqvnd6tQycKENoz7RJHKcL7VFQcyfxJ5NuaeC521nXGazRxMKvCGc6E",
  "key1": "5a9B1iyD6xy9uHhuj1vYXFtyhczioeREbbw2Bp3M6HksUWCCtZnawqaMRMeciuhmeZ3GxX5myiG5P9XGj7v8BgZL",
  "key2": "43FFKFNtagy592nY44J9uN6McYkeWBzYEPQekECviUeFyd4AbH4RN1kKbNgZgo6pYPoU3cJogAbsEBhXiyGxnKu9",
  "key3": "4JM26tHDnmWo2wLcM5ih4D37F57mairhFiek8DTCkKKb3Lumszv2FG9H9bU9tiFCEXR53VNyiTZYjBB7snnVZmuV",
  "key4": "5nQVvXxs43hwQWCxfqiFHADsKyezbni2HRM8RzcZ5HxfM3QQxqr7whKHDtJCBWYsci1eyRTzPrQYg2VqHeMEXNzr",
  "key5": "5euasGi6XFnV4k4kNHsD4yewcBfy4cCTeWmPkoJ3h9CS4z87QmoFXTQGoHKfo9vxoBCng2fmVFUeJviF8P6SaEEA",
  "key6": "5YEs6Htibz5MpAoksrgqNX1JYCv4KbSUzdcEoMDck6NnFSq886z8RLU8hjLAPgdnz94Sp85ab2runE7SgzDWQiu1",
  "key7": "43S67ptbvC8VqRU3EV48sCBbCBnrJ3GKkBK9DgECsUmtfHLgQJhNjjnDvbnw1R1dQp6ZjrPhk7s5S36SnwKmNaHN",
  "key8": "3iX5LKVWKVSZkvX5q635upoeXxYpg4derRGVXnZuyRrx4Kz8aXdwgJd2cx2EnbrASAtia2wrYnhUE1QyeFzJRqsQ",
  "key9": "FZVn5yDuuJpsnt5rkbCWsJr5fmVECU5jaDrBCnef75kJLft5peHzYSBS6rUCBqb3FNsWfgppgtp17kfW7QjcBYH",
  "key10": "zMvub62CgLbPH5ptcJx8n9b7dNBrE54kZMLsJTPY6YVxLvJEJcghAfppk4hP9XkXb7Ey1fF2vTj9a88epiL7cnW",
  "key11": "4Nm213NSsqw5wprQ2f9Qwhv11caHzCbzNQfthpUeM4BYKYApsUQitS9ngDu6JvA7DqJZZAE5oMV6FwuWVYVHNvfj",
  "key12": "4TzUfg54HTB4dm5aLdDFhNX8Chws1vpJzj8s2myKwjd5fjjFzfWi9QnsCHdsDpTVZCoX53LFGkc37YUxtpKU56ar",
  "key13": "3gjzhVuURNVATJC6p9PcS6J1gzpXYwnfk8xQwSywxgQEfXcmjZ8o7rHtCpBRk75p9azQszHHs9XZXTtWSSQ5Cgio",
  "key14": "48NAG3oTr4TYGdWCjmMWZrLA84hZB8fbpoyAZXWoYoksusj77mFQQytt3wZNNufiVc2jWk3545LFCSZBAyAdfSXu",
  "key15": "4EzGB5MjVk2Y2MdFNJEPrNx5ZTWiKN2Bazqcb4LUGU1rc3CRHx9KDTicLG8XehzZgSWPYE2KSeepUD3V81QBkMCV",
  "key16": "3qrQyCe2zvoCVJPRxYwERe1sE76gFCXKCJh1KRpvBoRvw2V3KjwcPFEatDHuhwyJCV2FH8xGncRwjW9TYTTnkudV",
  "key17": "2X8CNyc8RbmSvRNki357LdTvYcuwmdoFjwmdx7mhDSVSHVzTbgAXi9QXQJstJG6KxagGnEPVVc1J8dFDuVggysR9",
  "key18": "4sb5tgqnzpggNeVQ5y2sAkX4BP7nPVRp48VyfywddENVDVAWFDjY3yJb7v1mWwEHPqmw8AMTPM2fVfk3RMnv95bE",
  "key19": "299PkYmu8Aekwt6Z4Bp2DDT4jp2yaxfKST4oPm72LDDEivp4nPT4zLXmEvkFkpQgPoSwQCkvLKTBcsM4bcp1nXko",
  "key20": "5Yp3ng9HgXyYV4z3X3GKfCkdkg4Kf6B42P3JNpztRd4R35rWGKhzGQZcjRHPybHzKpdX5Rk7KDTgtnPvgYDRSnqm",
  "key21": "5JG2WiSEgnQ63sT53CFa5GZZJmFTKNTZCEsQXo6ujbMNrWR4EnrdzHJMueE2vXQXCaLcNk6d7whXosoq5aoRk1XQ",
  "key22": "21ctdWteqP1G9sE7bwX66NApe6mHEN5BDF5MTPf3sqoQgggW33Gt5hBSfQTcV3vXyzXaU2eJiyzd2r1aqX8gt5G2",
  "key23": "5LSZg77zdxiLTfff9wAew67USjMxEA2CFyfEfYaUtJAtYxaFeSkgZ7MSM3PDJqYrH9YxqNTQU3fEF7ujKguemwAx",
  "key24": "5Gn6UB1iWGtfiJRC3GEF8kn3o5VQ6ZfcUsGfnYKPzso6QLs9beLTypUjHWYBRZTBxivLFY4AnzFxKMEqZVtzhdA7",
  "key25": "3bGekC6hE9GGF8ic9i9Hh9YVmoMEW2MFf1WjYtAKmwWCEh2DnH6W7XyWrNwBqkwD3mfH1mwaaAcHMtZAFKHCsb6V",
  "key26": "3Co1MyCSAkY2mzrXH7H6ZMhM8wv9Y8ABbf9LcgnpLsyvpGhPiyN2GhhD6tJ7VkNJSFgyZQQV2d7gRZbwXcqMenFb",
  "key27": "3Q5nTMo2A19TNkZ6XJJpxE2yG9ZrWngsNCdGD8cPoJq7X11rUM5YqQEF3jdvmvWVy2Gz87wWnspkSAVswFw6LBr7",
  "key28": "3ufmkZQtW4NeTBk9mCV4sm9k9sFp2JnipzkBensn6XyfDceZ3Noa9zW9hqgEoiGdkRVwgMo8LUTjB1fPqb5tfS7J",
  "key29": "2iK2BbHdYQR32UsAGWHr5osh5SdhkHSLTwC77LFNiJAUsi59SKz9PVuRGgsULtDCPFBsTyfnsMt8othULRtbXWk2"
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
