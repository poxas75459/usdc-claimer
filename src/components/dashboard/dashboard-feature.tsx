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
    "4coR9PW8av1kpFujdiuWGsZemudoSzmMCDyv1WVfo5Z2UHyehCnEQC6g89jvQjFLk3EsSp3bQGcvXJjNu93iNJ7B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zs9hjkcnVLsGR8NMn5xTF1uBvTZAsXSdQDdzm2wnRvDLom8RnZ2L9g597uvnyX7WfW8n6fPD616LQJHryi8fh37",
  "key1": "5sVmhzdCxPJ9dsiPY8BDziySvRQUuUV7YQcXSD5cp4K32A13txjj6VYscfLKqgcTowtbH3s3mdCFSw8tUoZw8e4m",
  "key2": "SCEALvJHdkDCkCFumcYYLLTc2RR8wkzsRe2wLEu1mqDX2Yc92j9zDDQrWZZVZMbP8Moxi5VaaWUUofcQDL9ir4R",
  "key3": "5wUFBtZCouYGQx9bw9skvPgtEbYZBWkrYiPaELY5sASS4LLFQSccNy6smVKgU19Jeb4F65zuVGkV5QNjM2ohF9m",
  "key4": "3hiE4Zc6CLio81RqogVnRyST9CEdfRdHJwzYG6hVS3aa2B5yZivx8JQYh9LrnyHmidJmVquNLjEfRiXqzgPKmqZV",
  "key5": "5rDnxX4BHWszUEKgtYTGCh5Syv3RrBeDdHZabChhgo2gNFJgkAnwYt3Ci7rPM2g96ES4zTmiSaZFF3mqRCa63p6a",
  "key6": "XD6sCVAjppGcuytruXToqZ3JWdSigQgc9v8ZWxY2k6feTWidsYgHi3yTtkn6CxKavL3iGmtsEozaCcEQwcijhVi",
  "key7": "5odJd84SjLQLD6PAgtKEJa9sN3G5BudLG9MJ4oMJ38GeGwJtKg1ZV3grA5oGtJ5jW88VcR94ztu6Ju8phRQRiBJ9",
  "key8": "4Cx48bGMuhGAanAasBx7xYkbyzZn115pRKrLwSWdQ6bQxsb261evNRQh2i4Jugo3zWQ6x6ZzgvMsx5zig5h52qfX",
  "key9": "R5Q2Qm6QaEcRqwJwsKuXqUKLoUJtZBh9REfjhBgARzLwrYeBx2imczbCAqGNNnKEcHkJVDkCYrs616U8na29DA2",
  "key10": "28kRMifHVpJoPDC92GkxPdCvdeBxk9EMEzo9Ek2PBeFgW8xQhearetdvvpdNWRWcy9My2TiuwTwv8NvLeZ8CZTXi",
  "key11": "YPyRsZijZdZSLLUZaj9Qt3f4neHoYpP9sL6fD4qwKpQZoC1ruDoDQQmBZ8o4N7QA7GzRiCtKaDS8XBBAdRoWTv4",
  "key12": "WPSjZgH9WWjmNukZZySR4TipLJMLGJgTp2YqQYxUjTzE2JsSyeng6CSvuPM3hi9c9KXM7CnH3SoVWqKmjgh6v3G",
  "key13": "2MkaGr4w7jJTgD6sTT7J4Y2dSUk2jfXswHxqkk6z6Ned1tXuhkrkgPBDxbvfc1uoSgtnFU2zQripCcQeiMnQmvma",
  "key14": "3HmgMsnuHJrqqWSX3EHfU9j45ZmeBFXKsKLXTaog5G2y5HeL29PTSTdDq6xV6qJpjbCpnUER9R6uc89Kg23QHXvN",
  "key15": "2Dz9yVSpuvMPDks5LKH6a61chv8Gnt7xcVoiL3Je9HuTP2hobtEmkVHQz7f4fsRkCeYJs5GiUkkxmvjugLPGSc5C",
  "key16": "4tJPjQ7a7gF5WwYDz6N1YVzFBwahZ9j35FcdQDpNcTB4QXUDJ9uxnZBh1raGFRRK6FKgpREedmPcHgmTrurHTtVE",
  "key17": "5t3BN5VqaUUALDa12hmQ47vUUbqUmZcN5vxQvxsn8QFV5GP58gruwkbKbHH6G1pw51aBELddnLS5SXpnfSgFjpg1",
  "key18": "36DFcUkwVGpdz3G7ZVNEWHfVQvgtwAKkHKgXJ1xyTZaVUp3rnr5q7jCEGBGMpLGHzUCndv65pvW9riLxkv7rP4mG",
  "key19": "2q5TzHJPJQNLtvgM7mCqcJrUfTDLtJyppFLhccxCSHWgMtRDYyxKHSwbwkN9nn8iSzfC6hZnF7hXgCMpAeFWQdC7",
  "key20": "bWrsECdbyfVu9TtYGZqQAhM1C92RRZKePBKnbsavyctVeDHs7dQnVGJ7eVRFXrfnzuidivW2R811ASPEsCK2pWR",
  "key21": "GNdLaysoW7bTaADSqGXmGXDjznpN6ZcxHWjgBFXpmnDTdACXVRgpqqp7LVYk38nRmut3DVYJkfvMSWc6UoFGGGQ",
  "key22": "2SjmvT7mtaCdNjXRKx1xiZNT7Hxh3exG8GTxLoNti3JiDgQf2mnUb43RipE5SRXBtUzgvoEs8UZmNqy6mUdaS5gZ",
  "key23": "2xQ8PLH3hkn9VJLY9SefNgKmFt6ttLLSqTg8EXjCDmauXcZyZjEfK6GgndmpmbFE9vv9MtoYUBoFjkFn8QwrKsY5",
  "key24": "PBwuvcg5FMZXqqGNJ1tkge4nnoggbrGaX8au6JeaefeURpFD3vEUrxt9CnX689rxaoBLHQMaxZMzrjsnocBnGpX",
  "key25": "2QWC9VeyTYcjeuen71nb5zjzyV1XeWQ1QQMRveZ7vHrAcywdt9Sg43QemcEBX7JWxhzc9vnNymhtLcuE2UB8NSHh",
  "key26": "42iRMASPpxnMY2SwYT3dEXFqSR5TZEaHDZYbc7a9f4KrvFaXJjqtSV3ouJBbxmRaE2fGmU52TNDa4ufmahTvYubJ",
  "key27": "21XNKRJtHiAeFDJu82ZHHvVkoEjWr9S6rY1fJweTQDC1nJ8jF1Wj8wVeVWKgUm6FJnP7Fi4BH6nYedsM9TT8gJpD",
  "key28": "4zyT92DRVEWVofj8Dxc4HwpxzdfCWgixUcSULBCVGKjJcGquXHLAXGrHhf72JwJN6rFvx22E2g8tDWeuEKTsps1w",
  "key29": "46JPrg29Bm4XQ5t6pzWoGLp7LycX7TCfr1gmq1T6E2FmaSAY9jFQpejnmXYKjJd7S2CryZ3tUY9g4A6EC1i7mM1q",
  "key30": "39a8cHXNgZjUiUFDojusqppgXWY9ynLEaKMfBk4jpMqBDR5sMTfwdkeShujhVoUwPnexLg7BkD2oLyRSzHtPEmak",
  "key31": "27gHHFdnjFsbwFtGJUZNBgA6JetUa9gH2ntH5XWWvtBsCiTAveEzvYFPLmCK8oSybJKehghvpdqY1f5q2LbCqAzh"
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
