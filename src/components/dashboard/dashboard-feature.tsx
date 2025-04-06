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
    "wCGMsXY7E8WNKk2bMGkniJSZ97xKS1tRzPDkMEk5Y8Cts8FbLZGyBgseqzJhwMVHsunTC1RRsPNoUXrtyLBZwbq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24TAcBBkUUtz6V1ang2HFKcaZrFTdQ7BSRo8zTPNr2MbVcn4A1z2QWqGqgnyeghsP9mNujuDSui8rqTCmg3LBYW6",
  "key1": "TecLpFkjPB9ERx1kyqZ2LwNGS9mD8qSSEv4YX33uX3kgZd7raDYy2HqcPWWGcFx5sJD8AAL39mkhqJJRgPbTZp6",
  "key2": "ZCXsXvbBZULYzPNyHQbpx2z8v5GoRJaoLrF1GdmCCTHdLEP6LzHrC8Rq43aphwodhCxDHgrHQRDMjtTnmyAD84s",
  "key3": "3SAtp1C668E6cFcH41trqzuTaYX4sNWSukVkt9jNat9wdxNZoA4k3UW8ewUCEqnzeWNRTtYc5qJMwzf5D8ooVQQz",
  "key4": "4wkj2gJuhq6Y43oCMhbsLoZKqdEAtxAHDqaGvh1jmxPpHqRbusMj8nAzTq42MjWTZVALZ5LXAnRKR4ZqcBv6iRx6",
  "key5": "5AMqindM6kJ8KE4FHiCeZ6skCTwsMnHRSuMLux4uh1CCVQoZTHbsSKgrCHLJaaNtzohCkhZB4YXyJVipyfs5bq3M",
  "key6": "3XNtMPWgVDFVGWyxodTtixfr35eF6p6Z2XGZpmbCvQv6EbA6SEv5L9wu6UTdqximVADVA2xJGm5d7ai1Y6NpGXKU",
  "key7": "5wvRmhHZH2qCRqxAzDBD5CdRXmdvuE3k1i4qcwg3suUyAU1GijFqs3LjD9rAiUtVA2Zq48AzpnasG1gg6HmU51Pg",
  "key8": "wWcye6QurdkLa4HoKznk5bE7oL2Mg5C5Nw9SXoxW1a5bqGatoPHJxSLkREr575R1nCce2ikTJxgWkPM7R4tik7y",
  "key9": "5zd7J21by7nk48CKeUN2C8NPg9BgSR8Eeub8SZ5ML8ZfwNR8Nno6NHSe4kLrKiyHbmPJqxKno7oCDh8JsJCSKR4T",
  "key10": "34b8vB17j9jb546sqcC31gbWAdm1zPzgkLu3UvbjR2ZdSym6LBJt9tcD3YFvBqtSJu2qV7Dnjo5VECuppGPSVDSr",
  "key11": "5nbRCqu4G15eXevDtduE5t929fv1ALcjbfeP5i45dwTEWhcKcF3ySdRjJowV8o3DdEVy9o29H5gywrETu1Ch6BrQ",
  "key12": "5wJFE99a5uCyTrvDRpK7fBDr16YAhr82fsztZGBUCLsXgcukijxgpeYdxJhH65YkcutRJhZR2TemmhxGKjLPio7T",
  "key13": "2WwBgdVJFNoSLCsTBizicQcFmWTooi1tZAAamw3y4TQrCT9XNi7CSELmwG6GfHa3zkEThZNqSUhHwwY1QSFkFZLF",
  "key14": "3BCXQ5RYrQ1dS5yEkZomSqmwUPRnSfihSFbRG1fMggGyio7wdzVWzQiXcvQvpW4VkU2E8tkiNo8K3fTQPoqhz6Pv",
  "key15": "3FdjvWNmGMHg9wf2d3imu68QnA2ZzeuZeus4boyeyDXiyR1ybJqis2hWAc11GmvGTSdR5Z1qJkQKnLnvgNiTkknB",
  "key16": "3NhauXCtHNkNgptoYr47aUKeTpJZtMqfwMdCp9JTcp1XKwNwTFV83GQBbjcYpZPAZP1NYso3mrT8vrM3J6LTHHR2",
  "key17": "Px2m3AjKknZQVnMiL1qSJcR8NSd2ocEHqXB1Yf3rpwhpXb4Wu41cvso3tkS6QHgaQzoEbrxBHgdQEfT3CPAWfrW",
  "key18": "33beqFQzXY7Xd7bvck99YC5M1tYBqRHCCzr6JZkwc3qQS7pGV3Wg7ACY6fASFH6oenkFdTznEJ3KQ6YPre5YuVEi",
  "key19": "58EkvNz39n3x2ypMEa3mmV5dpamNnDvPcAGePocizhkeVRBTDU8uuWrDsGX3nsLBZhKbWSyrYGbmj35U6XY7p2T5",
  "key20": "2eip8gH9VEd3aFjfLaFEpy63e8EKy6E7Jr6MDi4fcyxPaDQq4Hx3ZZUQqYpzEqvK9h7D1hnugujMNujoPUaF4Gjt",
  "key21": "4BuUKRJe3FoCYUCFcGQ1KtUNwcVM8cSrV8j4bWm5qJbEheZrU7Xa6ArQus99fE7d3FafBF45D8iLWBunQX7a9bjU",
  "key22": "2V6mL7Q5ohYmy4DRUNbcdWrJT7679sF4TTsMSwtqhGXdYRhUirRoKMrBPtuWWswFqKa4zHmnnjWYAwFqcwUdVgyE",
  "key23": "2e8xmsJTiW7DzBKdV6sjfhbaiXMmMTqMvzxNpv6o2zgZNS7pNRGMQ1urLEBzpEB2SMg34amGWskuWzjPRwyHsK3t",
  "key24": "58gQPsbzSdKEy32DX9Ctz6p3pK6rA5589ZVayDnk9LqfDoWjzTsmozUrmHy6jsTPPS8ERnyWxWkiQLnWxT1H9EWf",
  "key25": "4MBpgWQu7qneZdyDLThbgMuSPJ8todbjKtsyAehGUNrM56zYomtap8mWZhgq94G6jdxDy6X8oXnNJAb8CxkLZyNH",
  "key26": "Sy6kDc9NFkB82xWLXqLvs8kagYAXQmZr8v5VTrh6QAZbu2X1oW8hbmqPwBTwwZJRpsMPuswgZHKNJnJf3bhcppr",
  "key27": "2sNZh62yoio9ft6FoTfeHc2qXiQxhjo795g1PxL43GdX5U15XbsQDqrQ4TLXeM3bAK4h3fuCLxRS7c2JFuqtvy2c",
  "key28": "2cyHavT5wx1sp74qg12FjxTPpoTsf792mM34QeqqpZRgRvn3o969XW88AdBk195roLBuPGk4W1VFvwHcS7MShP5D",
  "key29": "2CpE7rcwreze4cfY7uDB5m5hDDHctyv8i14vHPyzDVhmdyX87jZ9Pm5NntdkcxTvoAjEqqFLxCnqjSMc7ZsPDsTu",
  "key30": "3uRzr8pSX5eHTzKVZhvXhoYh6UXCRjfBfoyJZeeZ53mfLc2N6ARQho4xQNEp2D9dMMJo2m7iWDqhhMM8onnyr8WJ",
  "key31": "udX9ciE1P5JtsW8mRZKmGsV9iUqziuvxc6QFBPWQBNgqKS49RndMnXNSY2NocXPsYgzZP4cJtgwM85xRJyPzeCj",
  "key32": "45vePdjcHs9S9N764tyWTcYJXuhMEx7MRzRNiHUTAPGffFWkRH4EW8PZ5eAyKugHZ1k4wX2PxB9oXejWzmjFpzqr",
  "key33": "opPiDUHLkGxQpgDK4Si84ZVkPVBREXiPkzkWAS2DTKGwC2xEfmnBoZnqGBxQdk8FkdYKsoWeBwyYCsachUnoqgi",
  "key34": "49GoeizFzS7SEwfQyYSNWYfnLDAMSAJqTVtZNtCJ7tAKVKzUNy6qTMsbHCeQRvEdWEZrZhdebfaY1GXN5FpHvsXt",
  "key35": "4oEjC7CnPQQpyJ9gwahG6feXmWAxNsxcJiKzTPqLazJD6cohsfvgs4BkMXUcZaNXM5YPAbZAr2P7QPoX9Y9zCU8w",
  "key36": "5G7VVPvX2RJJFknGfk5bQwdYsxuLcb1sNbtHWP5yy5vNFSb1DSBX7EKCFLn13HUHt7M5BYDA9QYoV58eVT1eca8f",
  "key37": "3GLk87VEFdnrmCFQn5XWitLCDQP5ZRbfYZt7h92CMCxeCo2ez7NmdN8dh1fmpezCnFc6q2WWz7JcNnMfKiLUuZF7"
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
