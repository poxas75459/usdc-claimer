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
    "3WqXzkHC9rDnmskqJHorzG1yUMM1b9izRMWr4ZTCozGrXjEdKSKuYmFmGVJ72AsHi84CHqAUAZCeo7PPiQ4ZZ13D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26t4tQGhNyUqDML8YG5GaQCXsgi33iiKu2RoP7nWDECyW7gxXU21EAQ1E9bHDZtSYqbDCUorEj3MUrpPwkw8PEUE",
  "key1": "3rjcUSUtmRkzrxyMqGZ2AuCpx3tyavZyaQq6X6xLYNC3ZrGdPJaoPVPHUFiWVv18MxmamGVbDuxCsSYYnpzvQnF9",
  "key2": "4ViLVdCDP8YmGi4FsQo5Lub9DohGVWS6ANr9wwhQ5M2UfgNrvRg3sPsyQChXLbqpH9NHGFLZFjYcSTjpcVzhZ1yr",
  "key3": "5ZVQVGL7ErfgMHbT1YXCdMH3z7qaKLNAmUseqRpMth89b33uybXbaTFvCuaLc9Qbj3L4YtjhDepgtJa4xipa3RWC",
  "key4": "2s2tGhJxpxiSLEgHz6s46eyqbpVGDAPZtoF4qrfe2E9rWqQ5Dv4dMkAdQioe1kk4YTn3Xct9U7ooicEP9jsH38UZ",
  "key5": "3RjdmMeHYbsdCtj7yGU2xcmYniU4YAYwuG3thEmdHiTkGzeoJoSZAChdRR39qrthpeNziTjSDLVi4Fn5NQG3VzyQ",
  "key6": "431wc51q7b8Fd8YQJEKH7ouT37QW1NrXs4A4bitScrzKtbTP3syhe5bRU9hdFgfRLDWuR9iBogtUv9u4BSkUsu66",
  "key7": "3vLi9a8vJiBgd42SEuwE3KtidhbPquUgeoH2wHRZMpYgJcH2tfUopQCUAh1qDou92jixqosfCSG5RoQxFpskAoDg",
  "key8": "3A1KBZ43FShmhWTs5RJ8cEnr27vdWF6X6gNuLm9FRANKDCuDKPNut9T7qLWKQQhk1aQdqM5CLEG1MEm8VQWBauDV",
  "key9": "5KZkT4JbSEUnKzVpZJiSUjSVj2Qw4JmGw1rbtf1mNbYE8miizTcxQRhdyfHXAaVnHAb7zpfu7Rz4JwrK7LtsaXui",
  "key10": "4kTVwyCdBGCXFec7nnz5kZp55P9hnHCn2Kq4oYD2uLTqQjPQSyAQ37r6Je65pdHs7MenqdGh3Q1UY2UAJsnsTM6d",
  "key11": "zokggQ4mcYs8MeJ2zay3rwNqoyXqHMBf4D6uCUsEuCtz1xzbLJyMJYcrZkJ91GThVWivHCkfvDY6UxW9Le2c5X6",
  "key12": "i8f5PXZAeMKQgv7XjHHky2Xz6CCCpknMibfKkQxh79HnV7titx8v9tMjAMMHJEKepVL1JUfcXEygNqFpHLqTYJG",
  "key13": "3FJm9i9gKbEpMRiHn8TDUS6ioRg8fSHKzgCTGhscVh6aA3XZM2JTCveS7D56vcPSFJyQ13MZMsgXQYJaj7apMPKU",
  "key14": "m7LYcARgGwy2t48A8KiX1LEy5VTPvvUW6stZWEiYRCL5VmtuKwk4RJ2RCEa6TuX7YxbEiAjNM3mkecVLqYS6eWm",
  "key15": "ht6YZ2zsu72XkMZu5DGUtLEZbfiqSgUeL5JrktNM1dDX6kmwDfSSDSCZkYkRvTv713cTQqkDwZXoDNBdSbcGnQA",
  "key16": "5kyM3kCtJZwcjECP46EYoTaeuNdbMqDcvNi1zYkpkXbrHiP1GoyPHhVG5B5Cy82QQWzf4xxZYkJVJ4YNEwuYB3sn",
  "key17": "2PXjrziawmnuEFZyZH4NHA1XecTKdR5hp9pkPeD52uFGjszqgXMhkHp7KY6VdcQ5g8uFTPvNQT58Kbwh6Atn2wtK",
  "key18": "3FCQPmW17uznvfvPkbwMi4k8UZVKFeUbDQDCUAxLkcptbsFsydhd8cRDEL6pAZ4iUj3YDmC1izid91ipV354neN9",
  "key19": "2VTZLyTK3uoz65uyPbiLnKk1rdkJcyButLjQWQn7zL1bLWMeSe9sBJcSr3TymMZJLsxgYbHfwpSMCBkjbob6AqsX",
  "key20": "4tGqBKVJzZmg1nRrHq7J7W7ziQSVfLJuGkG1YTTWP5jxttMnTwyXNWXuYwqc7uG47617omAdpPMZeoSKQuR8kgWc",
  "key21": "mtssKyAaDGChduuRqDcDRJqAHCQUnSpBCZjG5bG4ny3nhKBe4cQFQcTeuNoMmrwPMWVdsHb49iNCSt7sHFf9G2X",
  "key22": "5bKR4QyVHyHuLawMBjWP6HnMNkQjbQb6mNAHB2LmNdLzK9yVfbTLArayPGEJXPM5Vg3MAWyvbm4hsSJjhbc2nono",
  "key23": "FCK6ydpTGPy76sLcWzwnTZz8Mxmoa4csDYDzWnnBefTDDxWDvGGNBCpsApAJssgEyTjzZ5yupsGXQhKzt6HQcGR",
  "key24": "3bttEDnkm4Z7vnavjsB5TRG5f9kySVxAAm2EXrgh3nNiwqAAi2kbXWJRAre6w3gfdjg9mFzkYvRXGFMntmUzyVsQ",
  "key25": "3jDqDSTKT1QuRk4VqMDmuaPtc9QbA8yDd4yJt76V8YpGt1yayZQCXyKE9rukQDmZ4J1qYbxRvV3QhTtUuhgcwBhs",
  "key26": "5aC56urxjsSjdXtSX1ufd5fqTX53bPqLtRCkHpfJxTsoKdf5n4ZLrSypADxCSF3jd6MBdcW5XVyDquWw8RPmuF6Y",
  "key27": "3R4i5HX9Hb18ogdXGKznjvCvMpCG54Sh4EuSyqwD9fgAY65XqMESC4Gy3wSeBvRPcu1igKxvRhz9jM41iFYAiKvq",
  "key28": "PtLNdzio9WwYPUX5gutU7o1JmPrR1CSEro2HBt2t37oGaeJs4m2oUrA4NE5TuqmZqRdpa4gVHDgNf4FzGcyGQf1",
  "key29": "5cGRk5X173iN2RmUUuZu2ajQRBoUBRimKR21PtNFGxH7gkpBKUTprAJEdfDd9TZ1S5VZEoF2AuWCGvMaR6nthQDp",
  "key30": "3YU5imVaDi13fAuBqDsTgqbBY5Kk6mSHzsnbxRtwyLGDQxPTz3TWoPHZFtjsFCi6LbG8f1tgjdkAh2HCetZdqtAY",
  "key31": "4be9myTGY1cYSTduyb6bVmHKd5BFCX6EgYD4aNw43j74QEhZEk71RBVCCAyf5dP9Re6DcTw765MXrVBcHnS18g7r",
  "key32": "48vjyVVkukYHRiEnBYQjVKtEvtXBdWTR9ULBPHqcEpxjn3F13DXNvHhncgFra2uumB3DxTrAgArm6nb67oJrivca",
  "key33": "38KRnqyeoEHx4HG9kbJ7QT4PTA8novkAaqQowrbWJbvmXNGiZ6D5dmjUcmHBEtVqD3kE13qxQXbXuUJLZEZUx22y",
  "key34": "59soWbsotp5985ad7DjSE6MiVNt6Xq7xdm5kdtY1A5UNW7dHJH24ZhSzhRPrytcn5XfoPJhZ54jVHEQ7aBwWeYay"
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
