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
    "3WN1LGKK53cnXR246c6eSSGegCXoyv2A9EpdQJA6PpexsfGTyEhx3R84oJbZKYRN77SMbrgnacob3mDmk2meDKCs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mcLhGVbKYPb7CP3f7odVuuFYSC26ikP1s6YM2AtHat537pM6SoUaw4mvTNz7nUnd9GM9QuqbmaRiiAQZBWCoh7T",
  "key1": "42DU6orJWBpdWvGLTetKeako11YHQAeRrRjMp5byuBJa9nWyKj2JacGY77b8oRffoyAvzKdi6bCDja7PKkKs496p",
  "key2": "2LjX6rf7rX4Rus9qpyVqK4ZcPRgRWBaCnhPVJcRkFHzBFtUjn6i8w83ysMSwaNGQXfUMuwwZDYXZKFRa41G5Xnuu",
  "key3": "2muUy25UWMT2vdRtPJ97WoWLb4kEhNGhnqM81LmLVvvYoZqUG23V3h2Sp9LxVrYgP6yZVUSA25MQsrFFNHY4w8Xz",
  "key4": "3nnCDP4uczTpX9PqUFTCz5Mk37LHjzrogxHrgqVyT66Ai3mqg47qmXv6yZ4oba2TW4sc6YFwofS2KMN8WChRnRrY",
  "key5": "2L8VVFkrACNkBveRSahqLESS56BLXw9KxKV85jXdwnaEnFdiRpHX88kzFTawS7eWQc6rfst22FHPL43MGJ67FaUh",
  "key6": "teWTwkgwWnoMuAa2yLvp61HjqJxqRcTvoEnaaDDmfuCzfaKVSyTad2JcnDkERymtCRRCcq5YA6zwW3nr3Lor7q9",
  "key7": "4TBNL6uMycbipxgcFqkb2dbungZ2bMgmCAoHqqaMLgsCEb3rQ1hCTRb2QqANi9Vt8NEDCCjDmJ8WWvdmhi83A1MZ",
  "key8": "4Pm5Y6PRs6LPnRzpQAuo8HJLofcsPwRNhp6TPWVHwyZ4yzbv3eHenQ67amkZm1Ldw7ZaMdLmStRJLY2bEcxt2nt4",
  "key9": "Xwo7WETAXybpYA68yedjFDb7kKkg553vP2pAGVEwGNKqsxqgQVXZ1m41tvtSLd9BPWcwC4FkjPxirsGkwnBb5Fz",
  "key10": "XwEp52EERMHht2d8634HNMXkG5r6NzVAZVLWHzt5W95rPfrp14xwVskdcC1EaR6Ks32wWKiPv9n9rcyArDyVZQe",
  "key11": "5WYaA6f4xvv2gv6mR17ADrAer4prnxLXgyR6VzfzGLqae4L7zJ3th9yZHVQVwrN4yzVgP9DJJjhBXX8JvbXfsS4G",
  "key12": "5yB3N6hozBWodbk18m5ihjF82QGgx4Ur6TnujTxtMh3CVDmLv3JaJgifp9FkFK5NLpDbAu7Kpd2EB8aaBRt2BRFW",
  "key13": "2EDFFRzafgwnLfWjBRMF4GVrqS4sy5R1Vi9pgw4RY7DBMUJsLgFW9pr7ctvq3K5heZeRVoNVBFAAgGtS5RB7Yo3J",
  "key14": "mRuztN25iA1AHFCRzEuuxkYn89QGaAYRyFjFquay7QHUArtj7Kvo2dQGdDfY8yJ2PGjr4Ze5zKBSNdakNs2KP4m",
  "key15": "2BxvimWzhuMfzcFJbZUS1X8oiWtRcAkiVbzFGF6nag5ZpyXU1dA3wa5kTf6XHQUGfqKXizQCgCGUNBYQMhueLEw9",
  "key16": "5Uyb322aWX9gymucJ6Li44pesvS3UQvnG5f3euiMtXwz7XtkjaLxgu3vHry4Q41Pa9WpyWeV999oNtNEb8pKJWan",
  "key17": "2EJPfPY6q88WzmmjwQ7MeCjyaLPicXGgSTLv3pVbv1xxc6RaABvv9G3RsX8oRZMp9CD6s4hU2npKb4mawReiX4Mh",
  "key18": "3U68RAab7c7eczXg8dtzMzpW9YyEYb75Rz7hxTWFH6yP3sRXvstK5W5zXocXtnPv9Qhz6kEjpBLzUdYroXqBDvHL",
  "key19": "4RQ9r1HznoiLj7JX18jd2w7s3hdmGfoMzSfCp4EwsSYiXYad4C4D6nxMWPg7LpCZRuLtghQ7Hx6Wnc8bjLo6dhLw",
  "key20": "4QivsPVt5HFw3t8PVBUtKNwQ7rPMW75ZxErQifVd7z97Pm1BdrAdCc2XHjZB6VKFKZENg6Ngk2tzfQsRBBTZA7A",
  "key21": "2bAXHrZgyUT1hAVkkZ1pXcqXT8tqCZu5yBQ7v1asheKP6HVmSNviCNCCW2dnZ25yXivhPSVwDGoKe1zmsxHg7SGL",
  "key22": "454dX82prPhsCA5qfszVx1S7MEmpLR9FeMbeK9XtHu3RFRuu4YNd91th687ryEqZUm4QBwNXwb3Dou6kQ77Zb2Fk",
  "key23": "4TbTR2PAkT7G7vsXzkqAMgN5Vz6Ln2QYZEiXu6gmRfENg1UMtAvchPUsbMo1x3RVSctKYchcR8NmcVrCoVe5Xg5z",
  "key24": "L42anYYRnS5Xh9QnrVE57XUhQm43oEa3Q6MLTGiNkbjqHcX7iPFXYfUsgGZqVPGZABYiYDSPVbZZNANpxbLeAaA",
  "key25": "kkqP9FiHxTMzEixiDbZTnbiYaXsHGZDsc19hRkgfXjT69qyriLnE1rXbNBb4XPeFAZnpV9QBGAs3jzVztZWSggs",
  "key26": "5FSAwghASJbcPTUo56jLy7FpaejjEuHBVjNta13nnoBAAgDngTp9cZEEzcwGFhpsmYpsd2eU3FHN39dYtXEQwAyS",
  "key27": "4RmjifntcKSowkvaDKtSr6iWBuNTiXLrck6j9tv6QWtTz4VrfgrbxHPTxbJHmaWD8eDSZGShqYso9erttzNAdM77",
  "key28": "2esEriAkGPVzLA9m9EVYzyYWsvwMaHER2VbrUHeWvKjxfHYN2pi7zsq2jz9i2htLwCNg3PwvTYaxmvyLE8tVECK8",
  "key29": "5w4Kvqwu5CF8L3pQ43sH7LR5Hptmr6u7QP6DcsugtXHiPjg4mCvfHbK5V22H2nLQFcD36pZxPonGah11nS9yYE7D",
  "key30": "5njS3L73mM6t6dmUHDM1oN9cNr9fsCzHkLAjB6TUGBnWEwsYpPnmsSQouegshNjoJZ3xXUux6rw3R4oCPWdCXs8",
  "key31": "WtwPP364VuUC1gFGdktk1uonBSAbjUXYpbCZC8Zzg5jNyEWhfTNvme1JSW8xQ8uD6JuFHNFbDqHqPXm7Q6uT37d",
  "key32": "2A3xrVsmLmL9AnDsWCwGmuFQrThHWPjt931FgtEVeGSu2D16qtAebHh6DAfULt1t4XqjLhD9bBWHpF3aar55HwyB",
  "key33": "5cqQ7Jh374sXAEk5KDybkHzWyUKiueh1kHKEuQMhVMVyoHE1KmqR2tmrTKtMqxVjvxu1ssTf5q1dQjcuczDFBcby",
  "key34": "3TTokJX19TjrirJJDZJsYDvhvExMnu4ALRuKmYCkuUsuRuVsLMCwd6cwBgoQmddAqvZK8BrMLbNK69ZoTTWCGXod",
  "key35": "4C9kaTZuEQr3eX5rv2pTNTnymnoTthK1mBe1SgfmcTbhXqegwqPReNovYBxHpzsdaMX3EzhVk9PnDquiB9sVCFXG",
  "key36": "66HAwdYiD4QwcRBrkJVX44xnyafrzZs4Cj4Vqdx9xucuvqm6bdieuKG65FFHP9jgQhUTMmHFHuZg8F1oB4tLfN69",
  "key37": "2wEKmEHru8Kq8fjSTHXWFuKSWd4uZAN3zb68ecp6KgJfkDkdMEkBxph1soF5vrbQwLrP3RUmCEm6uZq7iUuEU4xo",
  "key38": "2hF2DFY9Xch9GgBq7pD955AiAyRvmhcTvztX8M29vFCPigZL2rb5wYrJnjpN2mr8MQ2HkrzxtdhKDhv5UX4DAkY6",
  "key39": "3ixPwR5FNyF32YEvn68gfMCAYS9WKDxr1jkZuTvjBc4fLdTXLPKdBztd2rtV7ULRz96X8zCwf927GPnZRzagyG5E",
  "key40": "4jnNMaJMFjRRDjeHWpqFywzqo9YoxXu71K4AcDJbLP92EysELQE1mJFzscUaATRUNekBVt1j8vDiJpTvpZPTbpxD",
  "key41": "519G2JTLGyNxw9Mx5qyzRA9KhmY5AWQhpuxjbYtKFWsu6kJi2aPRgYA4ULRuijbDvnuv3sESGmt4ggDHJS3JaDyE",
  "key42": "ytmLufvujUJnrxAdvL2xXJ9Myr9wE31GmRwigKEifLgmRwG8DqJ4eDTe9omcHvV54zeezpF2KzxU5unr1u9GuKh",
  "key43": "399nBAfgiacVEUqaP7GxHRYvUG4Xhvp9PRC4f2Nb7v8Q4bkN8Lv9fwwnW7fEgCbmtcZ8HG737iCxT34q28Sgn2VM",
  "key44": "2kQySMHWNZkD5PydXuREYvVmwyqEXc2yyJT1DpDq9x7LhyXJou8EpJxmkiRH6Ft4tHJ7eUuyEExEP1pRVjx3sHoF",
  "key45": "4jUPYKUqWVAcMWKN67cwKWYcfN6R7C7oPUVr42vGXJes544H2SC5Zer9B88DvDLsAQBAjUeSbwMdweizUMbto3Qq"
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
