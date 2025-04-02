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
    "shbJaRYZJ8JdCabdPSEFAGbPbZey1TT71Tmb8gjY69gDsLjhUwAyJc4bkjhLfitMvHBC9QsDazDbeGsaGZ5ecKn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qeM3263HzFMusa1ShiKpkGPUfcMeqnBfpy7JKBfh7UjfoMjVZpJhmctJ35HnmkNVAnYq8RrdEDMEZ3mdsjH799v",
  "key1": "5wyQ6XcAgTACDDhk5Nm6SpPK2YJsheYuc2bYZWhJ2rR5LnjgGP9y1KkWpsjnEFC1DbqPFh6Huxij4qWEQkpNANGt",
  "key2": "2NakQNkbTXQYmn8U3Jr26y8zruNQhmZ9BMVWd1xArctHdMsMU661bBqXADRvgA19WpfyH649gsXyGLoYQh6PiAAv",
  "key3": "3RoNoxR6U5gCK5qAbWqGARzSDFzfh5JtkjyPVL5TERvGWaykdcQyH81cSFG7Kxn6hjsXGmBhTQUgtRQSfeHWnr4A",
  "key4": "4jA6iTtuQ8iLm2LyyxR5XJwx79njjEtPWaEeJw5ivfbwHFKoyrvH4o9JRcgEMD5wq9VAu4nge2k4eT3zt3u1V4ei",
  "key5": "5B3wkR7DmD3w1KuGJMs8tqDbtD2tLygveS3W9jha8D3h8avvQNQoQbJ94qjBRnbkq34tNukwzX4sLNeUCVwbWGtF",
  "key6": "2ZVjYbq4DVP78bgi94CyBsufD1HHj95QzxpyejiYHfHoNMaGZsynX36mejhcrhmKrVDX2gShKjyuf5ZPpD4EufNs",
  "key7": "5s5mdYwAcWWaET9a7MZmsSwcwVxnPKbHvtm2YXLLU3oqSQszf3q6g5ApnpFVsf6yMT5oyAxPGybmAqjoyaiCzJwx",
  "key8": "b1V78XsP2c6fvGzTVW3m5gpY2rhyd3X6fJZWBuWAWGuNaqFG6HTDMqDGW8ns1eJaxUrEFAmZ8rN5vYajEpywaKK",
  "key9": "27CTQ8CTM7Pvhe4RN9Uq2G1Y2YwfVbriVSRSsgYyEFb1doxMMXLnu15onhs9YV4EA8m7BDkvoqidxZ7YsuQCtxF6",
  "key10": "3v6RvmYbS3juTRicZRWCLBQJYfkGRdBmZkfBtJN2ahsohwVtjVefFtCUhNKwikxQpUhzWQmK5aHtpsExaQZJSV6C",
  "key11": "5cvWJjVYzL7N399Q4jGCBkXdZghvEkq9Bhf2t9nfTE5pizVD1C9RvyyyXFgVRQXFfCWNGZbMVesPgQpsAt67tp6N",
  "key12": "HQbcKprpQi4fnQfhHpJoDP31r4f7HyiNMjEXJ7r8Df6arvgSWLDVPSRkNdnLqwxMj6Wxn4bsSe3aRSXrJZWSDPW",
  "key13": "3kRUPh87MRSgNJephd67Z3HQfT7GqdsVBHEa6Fm6GA2L7vYgdKiHbc8FhDRtm23FcdqSqgAAntxnQ1KCFZu7SPcU",
  "key14": "3fshbtGBWDKYPzhvyM5TjX48riGMX9MWpaF6j5q6x2PtKUW4e6M3LKXhFuHj4SZ3HkhY68b8wyFswSDxTRJRMG2k",
  "key15": "2efta3a1dFwbbBbEB53oZXJwZvsb82zi954qz8pF1Qke8VpDrEtHAiLsDXiaduUPNjzJvxbhuV5cVkECsiFrPK8R",
  "key16": "43YTj1Wcvkg12qpuvHs1kTGaqWukWgQjrfb9vMNASBxrA4U15Ds5xN67549cxVwU4yJGZCyXFg2StZEbN2zFSsU6",
  "key17": "4BXqMvz3n9jq1KKub9CUxAmp9KcCSNn1D2eMHJDscGZmf2PAZmFpmCwTtfJusqML3PGWyfyq8ZjUy6MpAa3j73Zv",
  "key18": "4aPZdiGLc18Y8azbf8q7MVCwbYtQzixRqb2MfNBkYURrUQYJ6SejNyNypfjhR1A8bN7encPDzLaNeDe3GBnMTE6Y",
  "key19": "4LdpkUAbpUD6UdmC1HLTVax2wR2fgPqz7ihvVXpaitASWGPGYsLHY1oypqS98i1t3LHYYHmiRWZbeC2MVRYJanwW",
  "key20": "549LgmPrMkar3sUbPRQCkbsxL9YXp83d5ZXgeNZZoVjZgTgYDDKMbjxr5NdJaWK4tTKJDufPBApP6HDPDn4j9jjc",
  "key21": "VcgxHLrnox1bZo9VaSDXXuZfb6N6BuAChgTiHQQwz5k3NrnZLgfweuS8XCEkSi6PaAX3tgMXsPZVNiLazra5gDJ",
  "key22": "4Ckee58fbAK5VuJ8gGGXstx4AbwXZoP844JDXvveA3Hhnz2AxUWuBEepKDfErUvrPrdJLuQSvWTBYxJXWsE4gG5b",
  "key23": "SKYYMXxz7vahdk8fU3H4NYACkooFAf48HGNh1cANVfHZ59JB4E1Dcb8RNgBsc9HPExiiQbhGx743YhTw7UVJDA3",
  "key24": "4kcscFY8Rv7WnWGqLGhJGnNxznugiHvPBuSYbiqPAy5YVA1SWH27jkJoD9wurA6gpKdnZReoENjd4MFcLpTfJYE5",
  "key25": "mZ4YgA8NZep5SSzqqRfDezCrLxLmJCePP322SuhwNANpqi95gwkLCAoSSDTRSuEqBKHUmtDKF1W55J4m6pSEcS7",
  "key26": "BJn7DthyHeFxgYa4juQYj45PKtfawcBhfK94WDHGzKm6Xj63xDjay2GvrN8DnUPMoLCDTmMCNczx9SawcGbFZzy",
  "key27": "57Fy4qmgBHc55C7A3Er8vwkzTSEQwU4r7metSTxizTeuzVZrKZ2CbQ6BnrmSvqe8BG4tKpXxQwMHEkFrxQBoVLxD",
  "key28": "66nPxuQJs48iBkcYDcz9PAKERBVn9kSfvM5yY3WMyep3ctEHjj6cJvshmPGDBc9iFp9b5kNFhBvhCTDfXJK4WV8d",
  "key29": "3iuVPiGgF6JEJzKzYV2LVB7BtWszhe4QxpLaz1oukqpXu541E3ee9ytjLJ13isvb9T8NR5KRxVFBW7S3JmpQ9Cfw",
  "key30": "3bvaSCLeSjpGkqU5i6d4f1TvmbSnvQfMnUXkaiMU8ypYLtpCuNTDLGTsUgY2UAfnCog6RyHavnEdzBbTsn7jvK4a",
  "key31": "5MxBjgdCHCK85oCfHJT2fLXnh7VRpM896aX5LQVLkLLNhksuSz92S6trhBcKh1P69ne32eyVBf8Fwu7jKr7ceSkf",
  "key32": "4ebB5SGZQC7TYwkdop3Zftoe8GdyUqgM9trpUw7oBjMxFD9pTrS22nA9V6ZMM6ggGY81g3wRRnw8cAB9iUMgkV7B",
  "key33": "4LcKuX4rEwvq7noRFnvfkEfWwniM5iigGA69YfAyGfyqRS7VdEFZxmySyhk2H5epGk5vcLskJQXQ19LMX28W5dbT",
  "key34": "zFqh1iUkD1cBKnnnsPrBHbVGX6J1KUe7DZfaCHeXMJqJSS1KEcdMHdGWCRbaBMHUcXWwXUkHA94mfSxXabfYAcD",
  "key35": "5sGdrTHGtpccqpEBuHvPnQrMH3DttpDZQshfr2TD6K5KvDK9hzHkqaEyursKfQARy2Q49dDGSYf3nfCXM7yWKoJ3",
  "key36": "2o6FV86Ayrqu8UrtuLHm6B7eU2kEcTaT47RH9vNyQP4eaNyh7NKbjTiyan3kCz8drR1R8L7k4oMkCXFPmuTGEDTK"
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
