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
    "3Eh1SX25U1rtQZWAqidPgykaZ6BxmpUXoaYaawTCX64RVEa3Y9578zAATPFYBvLZXXLXT2zWpPWdtApZEPfRpxcU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P3PFVqN656UPBKKbPpFCwMEBvpntag9aDtPAn6JrKphQXxtShcMKmes6n4kMGqZBodQsmquiCi5tj2PP8cYtt9m",
  "key1": "2kUZFFiJfHdyp4XD1spUCeALmjqnuiCaPoFKowCz4NkDAGYndLeHMHFaRg8HGgGSooaLqT8yJah5dtmX7RvDfs5c",
  "key2": "3sbkjnjKNBy8C38tSJxom7SoN4vYGgbHFCftLsqvnFEcWRbidKZ8bekYTHe1Pw1ai29i4vEWTMLsGkuv5AGz7mXs",
  "key3": "44fRs3xBhDsUCXve9SGPLnB4ahXdTNoi1LLWFCpCgoncy8vtsGa1uqjkessu4WMrL1W8Geo62D22c5Kst4Fv7kyU",
  "key4": "5ZdDm68TwqDyqVnW51XxqdFviPLLkUDJhRDZB3UD8XyzMoeGNtw1sB8m1NSvLLAGbaEDLPobEwSHVD6wW8KUQnZ3",
  "key5": "3eefa3zs8Dynr3BetfrUUJHLJqaWHAFff6coNWV1pA52Z16AtH4m5SbFZy1xW6XnKLRdqcfPLkzqtRbXygSvGD7i",
  "key6": "4xsTE9eLyQxT6JsLTdqw3hsmkMsdV3Ci94bQCnBYUZNtsGybqbX7v8Dx6v7ctVHQjpaJkp4wKmvAs5Kt2cJYkcDF",
  "key7": "4uDVJU3iqZKD1FL1ixZ5Z8pCj4uiHdn7kviH1qcvi5TpQTaALMFbMzwjVgfRSYfbsudd7BGHZKUbcSHpgWRbmRG8",
  "key8": "3EN3EcQCyhk2k6mG3fXTkWN2Lpz8M5KgTxmrh7FbKcKG3fs1M5ev5CAjMMRtSYWqTt3heznJVN5pue8bzbEbjWMs",
  "key9": "3njt7rgr19ymubsLKrzVhawr7VsM9H6DSN1H9UGzu7odmHgQ4uSJ3MeELQjHnpgtj6u5oBch77DUr9zhojkPMfmN",
  "key10": "3LYBZ6BqRnBYEVQdrxVctxkGKw5FtFnjUxyqUL33uHq5Lg5dPTC3aBuA3XCioo7Fzt4i43U1kAJ1kw846WPVQamB",
  "key11": "5C526pXDR5QW9cA9Ky3NxabN2hXP8NwuxRCS3DPV56xFsDJXQ9pBh7vpk5xSPG33eRCE6KHSt4Yjjic5hdeyX4t9",
  "key12": "2vFrZNRjrDv5J3zEJByJUtpNN2Y5PYWkNAGSY7rqrbzXgvcSmZ7mZ3BeJo2UawwnNonxFLzYKQe5QQRjPf82dMQc",
  "key13": "5y42zfVDaRY95Cjj8nbxpXadkYpc4RjJjMsJrMiiUZhztJFAnsfaA7Y3nh44Fd77gK896hXjmphdkqjK1biTiiX6",
  "key14": "5z6XzrhGSUKoXn64M8L54DkXE2GtaSCGuaYa8evS4NowAmTP3SCmW5ev5HkcXKZiTiTW4w8jhSabLpzLDTc9R8Ya",
  "key15": "u8GDefeKbko2e5gQoNSUATrVshoGD4RZ8AWPhZuB5rcDAzzA8YNb2SvmpyQpT3gJ1rpNxL2v4aFMb3s6XqhCYba",
  "key16": "2nesZUcUiQzJCgNtGsthk1FYRRgdpkpPPqiwQds3KW8wEVp3af3mZLQ7LuTiPc2rEcG5kn354ttPE44xSJMvBtJP",
  "key17": "8KNHdUMoJn1rTPZXpv7GEcm99SEt8H6ZkZ4F1hY5huFee95x3vwEqQ8DckXLUXAPKceAWCkQqpxRZ5fkDmacJ6W",
  "key18": "4P9qChtHvQpiuFhkvSAHFta9WPsVwZoy4CUFNaddTftLEqbdLYuhP6o4DBCGc9SYuo3Gucs8JeD2Jp1sMCGkaGdQ",
  "key19": "36MCtRAt44Vy5FfAC39tQriLZDk2yzQDz4Fg2uTNSvnL5KBXgrpEWh6kF3W4umv9jZaRt8tTnw7Up5xyL1nAUehW",
  "key20": "SMJfBqbawxoDJziyQVN878293tqQyr9TRJaKd9YEJubSmocfYD5ETTQB7E42kcUYdd131WcpRGJi6oGvHgZAdLa",
  "key21": "4PSy257LuD7KyHDXvX2PNc7CKemrMyZKFMVG5tPZ8u4zEyzii7sKpaaZFSdJDaomEwd7NbpY6fw88jTNtgpg6MiS",
  "key22": "5o1TbR7ZrayVCxo6WC4q8WAhZAcJgSascL9iWvBBmxBT2zDwMvewcCYJb6cqeAqdBCds7wpdQPMRCEGL9aqJZLSq",
  "key23": "4VzDXAfZFmt9pGziYCJjeS1wmS8nUipm9mWSG7uGwyjnx1QSVEECnAwicaJBjLbtgfcRLjgZqwqiNHMPeKApoGLm",
  "key24": "3o5iDB36WJMfJRKp8frfsB2U9VB6QCcC7bv7pCKajUDgs8BMs44ueMVBtT6xqYGXPbuLnfE5JUtpwQJQTS3urw2g",
  "key25": "34DmGRVY35icou7JzDoJRfNEszWDTjHZrMTGCfijmVN7CSH3CpxbNoWCPeJw1F14atMvidw2AxwmyzfSTuasrZrV",
  "key26": "5CZ3Mpav6WxMbYP8sWhdxYHrYcUx7qgbkp3tr6jr9pwBQbjRLwRY9bRXsM9NJojvtnp2mUF4H9ZwpTeiRQJDADz",
  "key27": "47wVzdEehQGV2GJNvTna3VBB9TkeswErioUPA3mS5iYTXTq8PWSzbyS2me4hRE8eahWBuV9qBYqJdpVHg2v41xxx",
  "key28": "56VasMALs55nW9zYxkhmiVMu6NaYhv6icYL97gVuHx5eHawp4pSLP9bZgWjaSp4o6BosSwTWn34HdQnzQX1JPpYx",
  "key29": "cWjzwp281qy8rxeEHDtN1RAZMDvvS9mppVc9kSSSNxEJ2kLtssVNgim7tVzRd1h9NwjjEwpqDSFtZcYTcnqyDja",
  "key30": "UoughCR82yi6L1Gi6igHpECTrVvWRupAGjbBtdGR47UcNszdxsGHGSWcqm1vgHMCtZLAsZ5K9byva6Fu62DYPBK",
  "key31": "23Fyz2FHMzY8mNqYe7XxkJ8SQvPdMLb7HVWPgYwpoPbv3yPdqQmPWkUgm3dTt14BeD2JAa9nJYFREZLGeddZiNR6",
  "key32": "5EKDrHo2XY72xPRHLnsm6FxQ9zA7WCNrebsTStP1jPUwp4fyGHnoR8D7Aa8js7sWtzFn1M74UmPmJE2qnkZ7qmeV",
  "key33": "3Hx6EJte1YHJyRjZNjgWiokBTqFRnEsUjsRHFs6vbdxK4VBtJr7be5TY1kz1zjVmarp4nDhBGtTPLBT2XEmiD9AH",
  "key34": "6651WWQpLMwqdFtYm1X9g9gwUsBwB6YZ8ihotoRk1RNUswA2iPq97j7HqoSE441jXTv1o1s8LQShsgBYpr5U6CWR",
  "key35": "491mmmhMyV3Wn52Uf6g5AyHv2WTrK6UUAwA8CQSWwehtZtNVJ4uHy2hSHGqsyPZA1gsxRM1KKQh8ChYiMBHyztwU",
  "key36": "2ZeUJk7DD8v3i2eUgjvZ3mrKvSwixWVod4e8frVT9KGn1ixNLQfVxxcVr81rcswfkRoAJKDmfDwv9aBuDdJi9dju"
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
