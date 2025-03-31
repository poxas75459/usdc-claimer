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
    "38BhndasmRF2UMdqBEP8djMa2h3uf6NB8VDaHL8danFyT5rKfCjmxR7WhqzuNiapgkLjRAKaRkvJMXaCpAiQm1hn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UrW4Xi2Bn9dLSb6pJU4Y4oh1gvc9LWPwSk8y7kLZ66tHxmi6Bqsh3ksrvY5XGgSGySzmusLWCAWzeWvKXZivr2s",
  "key1": "5HSm5oXMU8vw1iW9dMwdNB1ByGNPqtsEvp1CwvAEAruZNi5UjiNvwENVT2ogn9N3midWbuoTeRxd2R6Jo17KhRQq",
  "key2": "48XE69ccNtkLedyHUAkbJWVpQojfq3SBk4ARjRNEKTwsRSnjto4S3rrabh2T6QNCrbevF8t2ogzX6upFeGDEXvkX",
  "key3": "3qt8VuqQcKSeJVjMjmwgH77vEQByszDi5mBz11sC2fwqhwD2FdZqY733G8tCzjQDHRw68TtAutFyZe7SbrGbWP4W",
  "key4": "5DxQFdtbcsryEZZjaepnZ6cSSfmvjWUhotsCxYQaHgKf685fxEtAf5Cd2WXfZNND7HWNRyT4Gow6MDdLmb6bWc5H",
  "key5": "5zhfvk1BuMYhRMRN6ov6Se6b483Amz8cktZh4Krmg3F4ytxCVv557tNyCefuMe5VJnktYt4E1eXcKeYt8ghX1yrG",
  "key6": "4NFGxyKoYf3uHU1NfzY2zZNwyVRjXNAYjJcEDqHoHE6NLcxHvSD6WwWyJJ4CeUYAvabyXLL2hBkuRKtPnkmhPFbZ",
  "key7": "2S4NVSCccfBCJe3U3fPkxeykYbVwmup4GVfKPwPWsfFVZzSq9KJVCg7XcZLsRC9VjSvrTGKuWWadbjsjiV17J3Kp",
  "key8": "4aYiY3FVk3ZPmFFYnc21pwgh6SjqUFTfgBUpyaNkWcP8vBpMioGoKHHsWVKTFaMS8B31AFnDg9fYiZkn5nYsev3K",
  "key9": "3pHcSzqzvXDkBmvF1bCVHV4c36jHRJ732mNJCt4XkHgjzBkZ67TvgbAdMpggKp7sbqjyELe1LUZFBJFMEUUvuxpq",
  "key10": "Up5usyTuq1vzn3QJQvhc1qiqrnvHju9bcXTa66Ncane6b1dkfyaVWT4r7NP3RQJp6vmS1rUodELvH3v4bJ4zioP",
  "key11": "61kRh72B7DBWqB22JrLKWta4t9pYA8rypXPQXVDTDWSWVaPEZywasAzHBVuQJjARG9Q1Bi4VNLcWvJeFNWHBzCNL",
  "key12": "43xckyN1gQikkVF2uLYzwoLAiELp1T2g2sazm7kAgqxj4AjfwZX3jboyvgcYyyJwcDx2QH2UzSyJD183MKaDHvLT",
  "key13": "4T9ZES7FyPTwYRBx3uWz3zk2XhojMBbhu7YUuAf858XzShrahgz1kycRWb8uv6zJdkYrpppoqLoqEGzMZY3tTj75",
  "key14": "5juqxaYoCL9YTsZMNLsvDLwMLe5GqUd1kF7G5DKNzcLsuZh7WpUAPCxrMCjX2DnpDfbjchyy7LHgJQ51j8Bj7WRt",
  "key15": "5AWmB5kX8R8EF1KqVEJdBzwaT8UyZ5n6DYFi5BwivZoRUNQgtB5C1NsViw9L4Ym5eaxddS23A4vkXi8PJf9zoVFi",
  "key16": "2wd4zKbbiao5vF3vFzcE4QYYN41GqseqVYes4wZtMmMhZjq7YUy466UGSbJN2We6oW4vT9pL8oY6ryBzG7zKwT6z",
  "key17": "5MA2RyMKcpMsuaXooUKhsaN8eYwnUD5k9yquW1FCqoGYMMeurgwgRL7yhodR6YyHcG1FpDweo7HEmNC5mJavWh6L",
  "key18": "2c9LwvBZvsBTj2g4xv24KDDxbHcfp8cGeghxiNuinzAvwDvxNinAGLTX71eETtyxM3vYYGEkS3qRn43UkXPMf3DB",
  "key19": "2Ggwu8SUEfZo4rYUXAxUwAV6SrA9UQQYPEJMeG6jWySivRGcYAdb8vbKu9ekz48SHhpa9rUMA1opU5d5hqPLBrf2",
  "key20": "3iz1Gic6wY5bQYXj7dufcFaywLvaU1dbtS71Wup7d4g295rv5vGBhmqbHjSoaC3symvQCnYQygmBhv8YEwwKpabr",
  "key21": "Xx8knMzqjDE8oYQ5Wa7Wr1pPGJYrrSWpvBBy2PcTQqiyeBusfCaJKAVY4KuMXj5R3v8Wrx3qHCxu6D5gh8uEAFq",
  "key22": "2phtBURmjfeLTxHnxsABPMi1VGqV2i1eyA9DMLDskXyq7bQ2dyxKwUcDbSk8zypDYb3Tm3nQe1uZ4RURMEQ6bzTN",
  "key23": "3ChhHWcooWv4XzQGneVVHpMRc8HgUmFjp1VJ3TBUrqaRDhXcPnv45Q33ZeAdr5KiFMeMescfswVmtgSYqCPnmUmJ",
  "key24": "2fhFb3qKqWcTk2dRyEA3egheT2t2MBKnTbNhwpwUUu7LKVDH6FdWLgcWA7bdUiAxRZDiP2tg3FVkjnckJBMSNqKT",
  "key25": "22Xu8RW5yr9Yhc9No4tFwVKzUxjpGBvXL3Erh6JbNum53sdRk9gQT7WL4dNP1fh9P5LkrcrHzhmbgsvXB6eieEBk",
  "key26": "xiNBaQbBPP1Evhf62UCRaTR7MtkHQ6pbx8iYWUZZkNVx1ceGhadH27RcUaNyp9bBn1CrJEJMoTv1qu72Mj1EAM8"
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
