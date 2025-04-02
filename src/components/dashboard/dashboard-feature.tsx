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
    "4ViFrYPzbdL5v1xzBkUaE4cDL7pzRQDpQF3xsN9jwcKBsDANBHgZ1ny5AU1dvknaAHDUismLvSq118KucjPZskoC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HwwtPewMNSjpZw58YxPmHmPhYqHzYjRUoXv8YmccgH6rVm2nEGVwqFvwUQhqg1b65E5NWnKBvfG5CZyhXo3gPjs",
  "key1": "4bdNmYVvmWqTefszuNPAPzujhebVXzzCYW2DdTpKYSX5BCg5w1yNg2b226ws165si2MijDQJA8Fjnq5JJWNyaAxL",
  "key2": "3o2qp599D2ZQKJbPke91U7T4ogxnzkXW8SLeCNCwwiEyx2XBaP5MPc8tcfGFxfyfuE7QYVErrHdMn4VxUs8KqdLb",
  "key3": "44jGKeJsqe1K5WAocsgvYhhu2EiX4gzi1CcDgX1vwdrVAS3e9r9gjoSvbbvX3ftNMXiWc6RqYvZ4tqj3x5SwFix4",
  "key4": "3wAUw2uL2mioLBtw4rN6B2mjm74RqAuhdUW7h2cfY7HS8LT1qX2JRXXD72brpypyCkB8D6bgBsPDTJHsYyDQgn4L",
  "key5": "26kqoCqjsGQvxGviqVsHkWsbhP58ViQdBqhwqcqc1qDAh15q2YLmC4vC2EyT9Rpqyq8zpm341yWWEAWmidXMWRt1",
  "key6": "KSWo5YghyH84bPAwwKKFuCJKEKYSaE2EwEbkRr3yG7EDMw4v5UUB4n8vSMu4Pef4vJcUiHn6nAoZ3mhQyiYSvWG",
  "key7": "3X8koRqAficnWBudbQjMsctGwMP3iG2Qv3rpUiK15GBdTCDG2i2vi4b8ZhpyPXe8QeVJmdJwu3QDWNrHgznGFEJn",
  "key8": "3GtwrZBSJepsMQsHvAAxBuAvTrV8GnDNseC222RotpXUwCyE6ZAEQEcnER7ux672qJoNA5iPoBjYEUz1LVpEt4tj",
  "key9": "5k5jWdjXdEPEZdyaVYZqro93Z6LGNqG4mD2FDEw9c6BjT7wpQMFR9UDmNvRpi3m2sJRL8PdXFE9aBiyjCuwYWtsJ",
  "key10": "3cczmqQgTvkAReNZ8rUxgyL8zxeLGmLfCpt51QHN22VmPUwD8vZD2nvWHvMC88bSVYn4Y7ECXCrsQSqKrQaB1ZF3",
  "key11": "r6dTs7WYx3qc3itEB9TNhXApzmv7DYTkqYEH6ws7xBarX5ACen4wey9vzWyEFSQgJpRWoMEaHW6L5FEHev4UCY9",
  "key12": "4BvKGnEEhDAUkcbVPnmYRvkZhvQeTmDYYd4UtjVhXRsxP48encsyckz3Bm2m5eSdCmDDnggWHuwyNLQpvGwGncyo",
  "key13": "3ZUrTbnPJsE4yCXfJNsyyLPWSo5NqeNTpPBYLh6VoMhf7eyorFTyT1c55wkeVDeHLnn1JQDnAdYEuWXMCbYjxEnd",
  "key14": "oFxxodXwPr1XytHaXozT1WXjX8pDiWMdZ5knjDM66homhWrpPM7A4dCxczQvvFHF8UGdz8baMqMSVsCeEUPvLdp",
  "key15": "4dDzHh7hVHcWCNjjw3XhJJvvHHM1FfBSKMrX3u6FWTabPQ24nooD1wKpE4YYFweyTQgEaFxH5foUzLexG2WZpcYA",
  "key16": "2P1suY2eWxgjoaGG1uf2BPe1ChEjXJpW73nsfwuYsJ99J74yFMe1kzKYrCAvJxYczB7ontgvqoc9RQejfCqq1p7V",
  "key17": "hiRp3Tb2j72iopQrJwnPT56u1tWwWctANynUyA6J2UCUCYgVhKLCEEAQxBFSiQ9S7ru9WwWXEGeW1wMY7g5pAZr",
  "key18": "2SnaeMMKcRCu2S1vmCe7S4cp1a7wPNHFKJ5NySEAiboXUo2sbJqbn5nSd5ZbxbCpnSe2z6mkSWTMd6Wk7WfeyoMu",
  "key19": "4vEcHimqXdo2tWtuVA5DFyQvULTgJUMXwYd2372dbi2rNRDAtgWmQjc1qdBkWU1WdkCFyBMzK63m1TnWVnsKjLdf",
  "key20": "5RxyWu59MJRPdd3bVbZ6UUfp88H1D5Sez9mSgepAX6fUPRPfBBCNUEbszP4GFVVrN3SxdCrzRFyWqPhaAugH6SK3",
  "key21": "2HUXGVRdvN5Ku5GFAaziRaPR3oW9TsAyZ8wPtLWUEdGBRCKtZ7UotfGYMnp2dtTW2fb1NyGNvKrQWrCExZv5w4DF",
  "key22": "4AJx6uGfNprCtjphxRS2iRjtsZyMwNJMayptTCZhxWbEYGUepv9XxWWiMqKHcvxCdTtG2tYYsHgPuMnX4AyoK4w6",
  "key23": "2oAZArqKekQChgHkKeCz616VfkvfHHPVyyysbfTuM7f6puVXtXXe5YiJfsyWSwnusu39gPHZHdamREBYShRjRNRP",
  "key24": "5nu18vsCujDNnxi2LuTZgpwViSZRgYk5bwMdX69Qpu8AigZQKmRGWCGMYyS1Lyw6ySkd3kr13hV9CeTTidQhT9LP",
  "key25": "4ja6BPwCdKtu6YKwgYwCQ8f6FPBwwioATbYq3YotgE77eRyb2iMfhwcStWQ3FEtxmsWxW171wKQdk8Epw4LJM8S3",
  "key26": "gxFM37UsQJ6mTU5Yhmrhb1LNB9Cq5k8gysNWbTG8ut9qAFJBFtR1X6PvJehU2p1nDMhnYJhcGzF1AapKAk1J71T",
  "key27": "2mqdoPAryQosgrAPzhgMGNDBNXa8wgHodgoXQLZ4Rr7HdB1DJikfqak9PTDedF7hYSgAPqBfeGdjNsSRnGfvVPZG",
  "key28": "5JWeTsrh8gA3yzuAXpN5bJG8xafTPYstsx8vQFbtHERCj7MBi1ZHG9gRq9u5VgNvTfP2otzbgGZGJf2eM4MGAjeb",
  "key29": "5SmPWZbRzCNGPZCa1PipDHLxsSruQfvk72SW1hyNACZibK8vJK18zDG7cHcFXXi6uRHMtR172Qev1QM3XFE9qY6M",
  "key30": "3LrYxTe2ZEKFhMKuNQPkPUbfDbBLtcWW4M8pVcQKucDyugqvNh311YF7DBATv9WxskSFUKvibBhezDRheKtefNR6",
  "key31": "5h4ZuXq7jAUD3nZGyWK9w8A26GaCBNJhGYSknqug8A7jgHa6Lb9CJp1hUDM8RBBdnEQbUKLfwXMAs6w4U78ApQmV",
  "key32": "2QmvB6fKFGayjrxHDRFCZLi3Dt3r5YxeQ7TaocmwFjN1LXq4W5tx3twb6V7uoJsfsqMFkD7wSaZwzVndGYxSz8zR",
  "key33": "2MDuf5aeHtGWaZREWEoYTf5PmA6FSagbQrkuJ6wq4WuXKLAtsdqHgtt2C4WWTPfXuJmXPFt88yZhb38AjQuenLA2",
  "key34": "3uAkrRw5U6eRTEy5MbbPGjscVpq5xaH4Ly1ompCyYJyZ7NuuMQK8oQDVwy6D8iNHs6fkFf9Swn53cdsVjWmBGzXy"
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
