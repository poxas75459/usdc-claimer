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
    "2Sx2JNiJYddWnNBhqBmFMCFMqKNrUwUhp78JGxv2zufYbQgiDtX1uHEwRuKUATpCX3zDUWVbhfzApLQmcdKTEjgG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZiYGBfb2yUvjzcCrv2xUpSjfg9L1CrD6UbWQisgZXaHyZfs2H6nBAK7PhgyJPsXwhxu6LRYgvrpJhecTcAeY4Q6",
  "key1": "5MBVUa8yrqknHu862YAcVczoYG2iL6gCRSP7v4SUZBNJvvBfXsDP7dS3xNwdRogH9MCCuQJcdbx7gafKujEXNPuh",
  "key2": "66QANs7oBcgCUWFwEuFUdyo5Km4yvY9WgsiiV6SXemjbXMvohjjWW1hWRRGoNnjGqaYdoq8yvsUZXU1phCw4HumF",
  "key3": "2NwHixXRkgQySiF7Q7PKFUB8mqkkkR25UBAUC4ZhfxZG4RpFZq8ok9eHsWkpcVu4LSbj7WEb8dNe1zg3JnioX8bp",
  "key4": "4rJ1NjwSzE2KEKSLGxaRDYvdM2SZ1XrgJdNd1bfSWew1oqncwa6n1kD63R1Kv8q1Zu6JPDFJGdU7Pb9BWFbyUaFr",
  "key5": "2TC5zsYt19REfjVcxnPNqLfvbeGj6pH3stPPZD9ehFnnSooHyev6EVrTnUVabCttKuvPbmqGZeDz6F8N15hsrd5A",
  "key6": "2niPBXjg9nKsDbzGacoJpouByfh6Fer1fphum84UkicVtooKBfDgYKNF2TnJ7WKuwY78m2SGQnNP8qi53b7Y52eP",
  "key7": "4YEwMJ2tV946HBARZv6KfWp959HHmQZD6C4LS5ouPkes2Xf94AivEX2YT5cSvekcSDbQQAdV7pwWomNfs1EdSX7p",
  "key8": "2UnyRhmsTovcA5t2ciXYStyKaSj8WmLhm7VSfKonx6nS2GR5RG4x8q9eXRPSBAMZa77CWofovcp2FXEnEpw4A9AP",
  "key9": "5NoTKJYrL3aiGMq7h9a6UxDYGcegZ3WAo1gkuuhe9D19iKVYLcXEbbpkuy8o1yh7itbLqu63RLxMFQesG8c5k7qL",
  "key10": "jVBKBzUXxhEnUwen2UxTPWTehLTt4VJ2MxFtgLm34dF5B4wREqUhgVw1NdoiDwLoMJnJXHdvXupBWk8zMYnPYTb",
  "key11": "2rSX8fLPk2Asc2AG1hqkbBJKCUBepbjo1E99q2S23xbka4TBywJ2Aw6vNtKysenXsoUbWhf8bE64p7g9C2E94KmB",
  "key12": "5qYHQE5jD2ex24YQJJdm16bKSoERwNiVcBTpYoLYj5RBu3xGo5z2zsdAasmeX4MhDPgiqTRsQEA2ZviYPnFiDHfJ",
  "key13": "2nuQeb76uoCcpRidLN7CKvWH8911YtXBfdrXFApYghoJYWncKgfMHvwBwGAYJNBov6v9UUXXLsfMZ6KC6d6RvN2B",
  "key14": "589RwQA9VhDyXSFDtzFDScU7qhfSZpa25MGVupkZM5tfpEGZFprqAixvab6ogNPMXWzHhJqeiTgNuKyXkW5Q3GPd",
  "key15": "3SUwxPRBKnZnR52NrwA2QyBMqkcTyjg24JExZ3ikeUDCVtWQwmkM57NkekHdqEc4yyRJkoUGweSjHtUe1wJ2KU2u",
  "key16": "VS9r2kdiMre1LMt1NdwJiN5YwX7gins5mY6S44yDT9sFkaDFrjMH6GfrwN9nRZ5Awck5hgPt4V7bQZv2yXomaBi",
  "key17": "mr6H6yFssC1DcKs8fW9XQX869ZT9F73FEihUvcPH6xzau53pWn1fSEFSzdZncwsCi34WcL9mRXovb1ywEey9WKR",
  "key18": "5MFt1c8GLf9tZ9irisJdbAxBXDjBBVkBoEZXzeqmgqkS3ziBcFMVcMXn4uaGgeuXKgqT4KHcaKqD7FhmGDrDEZNE",
  "key19": "3BUvckmY8AS9uvGi9RJo4XH3QJzbPQJ1WYyyTfSgFmvZgKDahAqQzf39g6A9RYDhiZ2rCkjkR9n1BUPhpyFwvZXZ",
  "key20": "561wBZqpdWkQWkrsvznjc2sEgHxMsJrbxyrFQsmH168QwNGTQVLWXKgD3bC2BHcTnUySQqiFFW5jCYVXSNqXJhvE",
  "key21": "5TjpFgsERyir6QpmbapGdZERCX7EX6GyT9GHuWAQ7JADALRqpS9EXzcr3NFL3NU76PHyx7gj3XjqPeX5X2PcNVqa",
  "key22": "3XuaX9DmU95y265iA6zraoffPA9n5KFHKe8Fi63S6bR3xHXzW1TQDgAgkhstXHmGSK4xXeydZXKhEW1z2qEJSycG",
  "key23": "4GBtUosSnEzghp2xMWtXrGTAuGnSNK3UvArRWkYXbSGuKySLvxwaMJdZXKFMcFSDgq6zmoxASydJMeLSE9bde78f",
  "key24": "2XavEurzegqZocJUbSJccMhh7Ku7p6NcVQMoAD1j95e8yNf53N1SxYe8Zn9U6cQv9ms4fz3kFFpvNjpJ8dg578pr",
  "key25": "2YaX52mPw6UK9oeYQUBmZkUqwB7aVz5UYz4BjZN1MJKAGWN2Xbp62y1cyZBhRbAZJBvz8jBWvh8u5xN5bkRgJADj",
  "key26": "5uZ9FmiwQeNcZb2wiUH4u7QQJrRKdL76Har1xt461xV4rRxgcsDgpg7ZgJR8n6m75FTgsDXMgkvYgDweeAvKeNG8",
  "key27": "5NHCceE65LmmVDAbiFxxvCU4iCfw2U7pEjCXaa462E2CzVGS9gNJ1nWHwFBy4cEQTVcAFifmFE3jip5VmftrfxBa",
  "key28": "5fFwh2cRYuaxGPw6A55Db2r9zcNqfqEJcXeabKqT4nd4ceSRY13SdTdxehSMw5aruQ3uKLGAAeAHE1qKNvjimfH4",
  "key29": "QRw14SSSYJcqeVdA4ZUSDuqQ87htyc92WP3mmsfFYwRMvHuw5Gi3wQifiqGcinZWKLrP8ax1xWyPXKGmo15eMnK",
  "key30": "3mmMaQPnC6aAvgFwQ49eVjEk6yopUVGHJRWUFq6zDMjw3oN1eR937egR7JidCfQ8387wPKesFLE3JFEmgK4focPX",
  "key31": "3jbpAdytmJeS5msrRr8p5p3rt7v2PtEmEBeW9iC4ZAeePZ9oKWnMbC2fsJKFKpt2E41A8cRn4fqwq83TssGxorAU",
  "key32": "3774VXnDY3iegfAVnhpWz7Z21DyTq2T42wNJgB338KL6iVtPAyKFcrX8JLf7muFgiMdEvkMvzStM3MbuiG2QHB5N",
  "key33": "3SpoPPnhrMbB9p4mEsaJSkHoDJfYJ1oYsE44HTVLEMe4fVTo8EquGFuTC8i4Wsfp1oJMsajJKRdvJd9Y5JbJPAuz",
  "key34": "VTobNJKpFuhQbd8K4vKB4W9DSJy8HVTuoR2WeaD11aq3nWWNqbvmgY8awXmvEgBgjRViVDnFhacd2tGWho6Aqaf",
  "key35": "5ud2hSb4gCVBD2hh89p7YnapqXsXyiXofcVQ3NLUNMNFAWx25PQJpGGikkkXahhsRDXnpxuisrNtZEZfksz4jVPq",
  "key36": "2PKHuk3mKP9HY7fpzxc9A3D3zRWJsbr1aMCBc7h55njyTHeKCsyC9CKA3ZHFzHrraK4m9McxhfpDs3sXFzsvLW7D",
  "key37": "28kowKH7r5uddh9b3BZNxTZVyEnSFErzT7BaCp3FSP5S9H3QR64o1Qz7YzTFvqtfM2zQNWBUjKJ2pJdPSYKb5EQC",
  "key38": "2ENDLG3vvvTSo1ewFN5ns4enh6mDgDoRpQzP5ss5gq5UVWs3i5y7oaZSXbK1wPstyJtioBQhdXuSVBjvSLZ8Lfue"
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
