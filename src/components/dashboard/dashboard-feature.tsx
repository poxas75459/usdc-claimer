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
    "2FCxs2fs6UGxbw1FiSii5en3MwWvaxCuXeTazCioRDzX73M4WbEcvMtTovfxsAMH2ZY9QC7jzTXt948tyVuW2M4d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D3F1WPYLDnmhznAYDVrc5fHHFq9aAjiBGVkqqaef8AYkyjCEe1nw3w4PTgQ9BAasKHZpUUGa4GqX57RHqszve4d",
  "key1": "62JSRtUTpwzQxohz7SHR3jCmyJA1CV5eAzxZAV9Qau48scxEYG1oHGoGxEjPxR3fKWuGrY63Y3VmFNibjoqpBRAB",
  "key2": "2oR2fFfvDpmgLit86h6czY1osHyAv7gHbaumT1b5RhHXst4gHZVmCcs4BqcsciiqD4UepQLfvUABHMxQ4X4L3Abg",
  "key3": "5hXC36CUcx2CZSdfPr1CzvanCjDdWwGeYsU8Fc4oj9AX2ShXYN8Cr3yUtn6L9GAavsTuiwzkWGUGz8A67Nh5Uaat",
  "key4": "Cgt9RdjN6PpmbsS3kxLaG9bLi9MosdWoYi59HUPoT8jSHdZvPgxRRXQqVcRgLmPG99VJ8b6sUfK6df3LDxMM5LA",
  "key5": "5nSb499UAbRSLR9YUDYpGy6a4oRwKd6YS3t6YEexP7JBTMW8UBn4Di8x5CwBWWio3CpKDVynBqFss6jGvCH6J4Jb",
  "key6": "5VMgv2DGGTdkAebT41z4qSbXanPSovwnsq7TxgUV6mY936y3b2qzuz5r7XgXCLgrkajHGXABYm5HNamLnyNf6UuD",
  "key7": "4Nhrfr83SCqMRkZVFpzA9LjkaMr3HUq3MN85f7Bt2xtiQyyHNJWW8x7zvjYPQCb2zwZ8qSNru6nHeY9FecuVuuoT",
  "key8": "3dKpQeQMLKLqTX5tkBDbYP9pZaAbwWvy1Pjbs7sfEhsqEcKaB8prZeiW2kpgeGi5LDXKckRY8ue75snUwhuV3Wz6",
  "key9": "2dA8beBWfTNb85kgGV8mFtVgLfTVaGTdtyn1s73bbUrgzzrXzTHgTkWe8FvYkQhVHnu5FL2Fc3LFduW23BvKbK94",
  "key10": "4KpVACfiQxrqHVhjuMhQWNxH3fkeiyKsS5cCqrSMY17MwwueHVCjadSKxLzaSyMxTp7dQmJ4Uya9Fb6UvUiJESi9",
  "key11": "5daMDP6YXN3B9rcwvckE3AN6oKmKZ15rf3XhEBKMMammvMn2C9t1qKwXBQGgcVkZTZHZQ9vDRoxMfcCjkY96ZwBF",
  "key12": "28CGZ494ftnabAoUF1unfuuavpogAemsBmEMkLr5YY33ryX2GYnJp5Yaa2MmUSNdxg3Gah7wTsjEtVZnmwHjTGW4",
  "key13": "4ZtRoRFsoQRVpW2ePiSrLZMywaxw1L6QDK8WZDC94MotbmHMJj8FpjzuZwseasexUrxQWXr2khTUTELD6LWVpH53",
  "key14": "4MWBdmCbZF5dbs1edWcoa5AdwDPyggy4Lvacuicw9Bgmyixxaz7zFeCUJZd1STvK3m7La94QBC74TN3YAVcBw2Vp",
  "key15": "4Xq93teBKS1GLHFrkTbmUisyv8wGGudEdqH7wi9BjraJqscErdcPo1m3jyhAF8muci4e4SDG8hdE4wBNVdRZHosD",
  "key16": "3veDNVDTYCC9BhetfQptbk7SFyGLZ2VEE1VKZBDQrrQdQooP3NPj9vAizCqUnQCFqDU5QKnMzuLVw2tCzj34gzud",
  "key17": "4BXDzTCctYvvPYEhfuC9yGNZhUpgH2Qtn8KTPvhSca8WPkYyn3wLc8iKehUK6rvzVN9MJNKMn5ZuXoWaUmusSpBJ",
  "key18": "258k6AGFis6yrpoAMAx5w8DSw5UpLLRzUTTHMzMkunHD3fpzhjVMmwA5eTbqpVgVuwYQstWeK8DVTwAhScmmHHxo",
  "key19": "4KfFj3NuBzbNweC9gHQByti466gVQDaWrHmUP48vkymxXqoeagjJaoMFQHYbBwsr4N94B7UB1LXM9ehb8JHV87DT",
  "key20": "4fpiQdGE8YxqCBnHWq4FQnMZRTki6x8ELmELcCnxkEeiciCCprbY4AyUCewsQgvbqMeBFcTFa5i3ohQnBUTDL3Yi",
  "key21": "2JGyRqMjM9uCBodhfVdtwpBFBQQRy7t3N2sK1GcdouQQbviwqxAcG6sjPKVNYqCjqBLmmsaDJyWQjEA5Q6pqsGAL",
  "key22": "33wBRHbNKgN5RWuvNVJaWE9JZn5L4by5pRCB9nrmRGYd3pwUNGavnwpAChvQUFcXiFBDxqU5Qpt1iwY2CNZsSiJj",
  "key23": "K2duGnNevq1eFAdBGCwNRPkX3Xpq6L7Cx6gqkp88iVfysf7KhQYKHLmS4GSAm71UaJzenNfJJKjxAy8LuGY2Y8Y",
  "key24": "5fiuLmm6TwQYF8vMjzfCc7hoTmk6BaVCd71PqehAUiQpM4XyiUzfJVSdc8JYR5AbFAofQerEHvoCTYE4Ub1PPbhC",
  "key25": "8Rmco5iJKUfJJ9ckvqPmnTEo4PnAnWHGGkNwU9UzHpUsbPADvKKm8fYtgPqNWTyuZkZKHhfL8TqfmjUaPKgSFH2",
  "key26": "xnqdUd93LbuvgciqRLhW3dF2bFnBZDRxfb5SoBX94uAhLGm5wDY1mUnQSdrLXvPfsAME5cKAXYwhC1zaDcvbsx8",
  "key27": "aZA31oGkFUU6Uj72g81dUv6XZNeXx9RKyzcswDsPtozawSbX1rDSWxrqgcpSkCncjBiEntnmdePn25w8b9tLhbk",
  "key28": "Lw6canUFgvhuHmw18cZ9wtoeJkbuTFAvqpciJXd8y9TJea2X1H3EuxcYoCZ7gcuiRE6BVZSAe7QL6EWvVemr3aS",
  "key29": "3eURgme7g1zSVeVxoCryvTmQwE1GSjiLex3BB86S8dwZgqYAmwTMJ2qcmne41B4gnP48CgfSp1XjU6tLuxRYdrQJ",
  "key30": "45VLhhUqrBj9W57YYgM5i6TfvdsegLxHnnKqus9LamArQH4aUsUH5ouahHYEKKae1kLEAB4wJHnmYCxA7e7CWgyJ",
  "key31": "2B9HyZqanQPy7yGZaNT3iNTNGZHnzaGjjKfuSbnb8Y5ETMvua819Fom6HBykS2Yb78jFQSpuX5FmPpDG7qvbvwjx",
  "key32": "hfBnPHPPH5AKCBjhXnvvAfVr58Z1gG5rc1P6rHXqfUeoJdQFDRxwj7q8uWKH9yP9AAt6yPsGgSjVkVoU5A1aNC2",
  "key33": "4J4vZncNqnxmvDoKzVgPud6zqBeVvb5xiP5V5Ro6GJEDh2n6dktAoPmvAJ3Yd6esGi1Z9tkFw21HTLQWMgc8mBLn",
  "key34": "2XTPZa1btwCqsXzfbZnSjbC7ANRhTkHpczNZ7RWv3jddeTgP549YVZxhCw9JX7zQWYHLtVs7sqxSTRPVPWSogAnk",
  "key35": "2Xvba2xBrUtf7SmQtkpdzAA5SrbvW7Zfo3KT3rwxTcRtTukfU6aSPmGahdNdX1CoKF7eBcDANtijro8B6npV3Gxz",
  "key36": "5RuNuZ5ngw5DjGHiwfHyLVewdDuestgfGhF5vcQ6pVW6HcYU2vyXgA6URxUQDGSk1h9ni43dei7mo4DyRNaHovBd",
  "key37": "4SxcTRQbyMsagADZzyvG96fdLkB8De2eh9cghWtsNJE5jb3sc2K8adFwJJGXeb9vt7phwpo8yPeMDGZCuVmoUs7f"
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
