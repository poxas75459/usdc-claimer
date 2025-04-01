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
    "ggTm1QSXNf4RBjT6iztzk9GdURGcqmh9nW9WP1RmQv1jpjQYjJDNXG7qP1gzCBTuQCY6wCm4Bz68p7r3mZ9yzsB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bn6G9fimiQVvjYb1A966X1YwHV844BA5pMZvzr8Y8HEMWQJV5K2dsbgk9qQQ13dKLC9mcvDWxd2zkbzvnS6eAod",
  "key1": "3h3YraaXJEetpBhAH4wKr5YxPaGAHDGERRzBUHBdvgQX5VCuZF7how697uQ8WVNJyHUZTrKz8vpokky7qMEvgoKy",
  "key2": "5boiKQZ1v81pLREQKyLDYtxV1mXrKcHgfjiA8CA3Gi1jePUWnGrQkFbw97VcBsFokwB7q43N2ZX6gVgm7pJE4z8D",
  "key3": "3wr6HojZPpSbMnWysKEhiZnu43TW2oYcEoaz9qPH2mhfs6AW4xFAGC5ULzwNcuecgTvyV5f4J2sKdPRjZNtt29Yg",
  "key4": "2jaJTiZHxgstsSBm969FLKBxiH4kU7ye9DeapbSeNTGFFHwkAstufygpSyL5ZhhbfYvAssMLthZAUkoQFh32Stsh",
  "key5": "5ow4dFJEbQf2bzrgZ7NwqSPxa4JYAPkJeRvD7RFuA8TcH4NtfV6LvWehYHFsZqCiz7KxG3qfBJd6jjdNAvQf5Usx",
  "key6": "37Exe4TeYdqiYRzBLjvna4QsLegLDxFWGVUqsihkvBH5FdF8xR5NnPUypNk87L2nVc5yVP9kdrf29NyjVr5gx2mf",
  "key7": "2cBGMncCKX7HwxBARwYeng9P2mjccyzTwqf85E3xvNzRosZ3f7wiz6WqBuyi27GcSbsMZzv4yLMSKjB8on4i8k2L",
  "key8": "3a4x2iexAg4zVs2DR5ESaQAzwZKj7MpdpyW6iQ7gtP8E2ELWfj89vyq4rEv345MbZTGX1QCKRZUCo1z42CVphg6o",
  "key9": "37RgZJFEHSLEZEypefAtrgJjSJprQ7DYB1gVMJTYNwf6w7Da2gTEaiFiMtb6gugJu5NYWR8C4aRGoZuPVK79PeMb",
  "key10": "5czzKRZ3uuu9ce4pLRvDYe9sRExAWpLLpHFQpLFM4aPZ8q7GdVqpLC5vJ3uVs6Zu1vxtSK4X7EEu7zz7cUYjoVJ",
  "key11": "4p9rz75gzy4TvPx5F8mw7gVrUx4wGkUNdjUbiox1QWDDYDbjGdahZL4NoHurdm64T4MXEmYZPW9DzXzXqBSC8PKu",
  "key12": "4JRS9FFj5VgzMsEkg4dkUxbnarFy5548LGTjPqCnokaocdngzxrGqMH3XYxCjxpDzHyjtT3AHg5BPUPK2xX2354a",
  "key13": "2oBaJXzGFhjWsV7vH4dyMnmhujce5b6t8wnyxDQ3QmJ2PKnqz55SKKWzuc52Uzg3kuW23Pi3DwzTJFUEsJGFSRVo",
  "key14": "2XEESeSoWPQrjTjfz6CyVfbvBom66XLjn6usqjsADsLGUE2EmwfGLDtHK34nQJPDiQtuEg64fGFHQyn6yjwntouR",
  "key15": "36zKCgJSmEdzPZqKpnNAy1QU1hVUqJTDMi4YvSzkj7UZbNEQMEcHQbXDCNyhe2eSuugnfb8FyteXNWzoRHMWWpPS",
  "key16": "32PXYznX7Vcj7mgUopU4odr899X13uQ4pcvThBzca2yczoC5RuYBJBQgWaLr2BwPRqqyRwvBWZmiUoLiizDL4mxz",
  "key17": "5P6oQUnSxC1GtXDuySgGniSUun4hhHCJjZBrxGNAAVwkCYCv4929faautTv81mcXMdJBAc1KMykmb4hxuknDjLNA",
  "key18": "4TpZFxmqZT4vTCBwFETnzwhdfNUJ1JQr8aKnCwGBr4jWK9ZXksa7K9LTXzD8wxgj8RT9M7gT6ssHutQdkCz9bq3r",
  "key19": "3ZigqGKGd3MNumySdwhPTY9XhG6n3c5J6scWcuT8fe7C5t8jYETk7mAEjCZYiXuzUiAD7Hbd5oU1pvsM3xsdX5W6",
  "key20": "XQcpefUdnSoSEAE4R2fwm5y5QSDH3PEfZmyHpjqLvTXXoTXKkCmDNGrHMwZJobtQPSNSkDPUEdZMU4xPdpTsJdM",
  "key21": "TYZbe9Eg5z6VbMx9A2Xh1TiP4n217Ven3ogR4p9JBMKrWAcNyP88v97nGMLos6DwDVi4mHM3TJ7wyy3p8PYqZEu",
  "key22": "66gRGps98QuBAc85V5dkbd9LaK2UCeH1jf69TDXACUvzPQSxmZMg3ifn513serhHbNoF8yi8TpbNzyWRUMdKmAbG",
  "key23": "CVaUCoqiLyrYTiGKgyxZaBZGXJx6TmCsoLqr9AJ4bdDR3KG6r9sQ6v7465YknFwoRZYeAth4GFXMn2cKu1d344h",
  "key24": "Wxr5cJd7a1jsjwM9MJdeEA8HJrhvV4qXh9RiJFtzoGXbnb2eKHHsGDHznRijkYgN8rLs25h4AdeJEUsLmYhusM1",
  "key25": "5Ve89tG3iEbWXqJYAT8cocECSWgbTAZjnVfNZLG9s9j48i7zMN1oZmT77pKPp758eAit6kT3aeFtxXvn9WncDv8q",
  "key26": "54v5qxPqJLVkBBDzHMfBkWQixMDTnpcbTGZDjN4TPeauzq6EXxKUW5NiJ4KnrWHgipLMyMDhVZSD1A5yahpc31Ss",
  "key27": "2DRtjdNptbFduVkKJb3LnXR4ShW6GCayqjWVbDYiy4VoyMgmHzMTWoarZ6TkkCoZAGR3GL9suxV6uvLXXB63jhDU",
  "key28": "3Wa3iTrjpRY8EzH64sqtXv4aJ31TVPStqdLtU4ZiPjYXYrrsdb8UndZgTrYk8pLtxHSRD1gKZCXEvBbTspvy5bEh",
  "key29": "48z5SyBVAFEFvV28yvwDmvXWSRonhA68eKTQw33HiNbRtXS8oq524LaTesYZmoAufp1QMD5pEUMr2Lkk23U4cPeA",
  "key30": "5mXYWezCgteuPCzUifqkEEaVmD1rHEJ2WbcKwSVsUDcswVgeAVz5fJhbE1w9mfvUr7FVbxxc6zHgPGXi6ZfRgj7K",
  "key31": "2NHAHMoWwqF2WBF58GVJrf7d2C9vnox8J5Rq4WxwmCXgVpXBYMdu7iYR1wrdaxzq8CugjfwhmwpiTWgbuTAcW1rc",
  "key32": "3wxavQ1xHk1o7p722aWRQu5M1i354yqEFT56vnxMbUnqfizbWAaQeZHu4tLRdeC3ADMDcAUu8Eo99XnAc4FyKvvK"
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
