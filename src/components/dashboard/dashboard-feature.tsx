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
    "4hUDs433TpvRtjWmosB8XTwh77GBnCMF3xuRxw17iJyNKcEPspcKxx7SJ7yY6TMG35WfHXhap6jbG8AS3QW5M9em"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MthRE6ETxhSg9tGkMaHqYhyBYiE2LyJPHNvG5N1aT4ecaARMUBdoxtsGkpYUeGKCmo71uQLG8WTmmgHEoEdHbyf",
  "key1": "5vpcPBVvGqhPBAyC4LqDyED8Nn6ERaiQbr8muUJEfBSVHAfFUJkmcReGDjQkJ7XCxHpwjqqPZpdtDHFCyn6rnxD5",
  "key2": "4mYTtyfC2cxLg3t7MH6qQckQaWZHVoqZ2mP3cxVv11mcXcEyt1MNMYLH2aAiGFXDTBBGMWqkvhPh7J26WdMkH4Ud",
  "key3": "5Joj7RmSCFExixLnJj2p4mbweHqMaFayvSyBzYhvKA3jG6hGWZRaCoFW2RQW6WLj73Kz3aeNRZNh5G6JTgsWaaJ1",
  "key4": "58wW9THoaELCTgXq56cGNP3xPWNEiBFf2yKNr4kos3G9fmEQvNMRavy8kMWZEwWhZdGBW2rvb67nAgc5Gd2E5ffv",
  "key5": "33tbvtTDgF6e7fTPttu7GnNc6XZiMYHMTZ8SSSbQqNHNExdqJ3ULhVA2soxZUZVUF91kLc5cucdVqkA18F7fWURa",
  "key6": "4TfY4gqKjsPTv5eUUQUuVUM1etMzTkPhdMHz1vzTwE91t76nPyS6kTp96kdy8pp4amwpYCcLwxcPiygB3MtqPuq2",
  "key7": "3AnPw7YDPyBzaX8qRe6gWfBJyHHvXiyLF6p4rhAVvh8ThVtwLwgRLVPoQ2sMGPxecfsgX2hN69rejy9fwPCgPxhd",
  "key8": "3dPzdjuiRULej24AvRZJ7pmvjB7FVHr7qPL1raS8eKMNqNBKfoPckxaFuiNCSiKZ5YVWyUxBaR6Nma7PkBgTGzNg",
  "key9": "34KjZn1JWt9LgEPMKKKZ9s5e6VxkSSi8avN5AAmkgyroY3scTtTU4iywu3mVRQaCpTGteKQ2K56rVyRHoGgYZhW1",
  "key10": "4GRuFK5r5uuKTDL9fxQgdXdV2qh25bRvgXmUz92HbPuXogtJBRTpVX6Tocfvy98HHrZYXxhVNVEvS5fYJCRJNFtU",
  "key11": "46QgchLbpL7iHv6E6z5wbw6er1kQhkrbjb8nqC3kNUHM89CSuEVRAKpzXxQXNedwvV4c6mh9d7xVByxiHpc7svNj",
  "key12": "am13a8DbsLun3PduNhjhuTxY1vhhxoSVxRfy9nyKh4Ro9cpKRbuXz1gxyT3myWmAtgSofjUBb27E7npMxPb4ifL",
  "key13": "2LVHS3F9Psb83XurqLN5uPZMXztGsaK9soFDW24p2tCPD6AghX6MkxK1UatNNBzmYmqkKBnTURUdWbJfy19nZYkq",
  "key14": "4aKQ1w83bGhZaSkt8Qg4e8MH5ra7GE5JCRZgFA1DzeLQzDnALUXjxvk35Hv6nN4aMPr1yuJgFj3E3R8FDDEzFbzS",
  "key15": "21f4pwWoJ2UDGwdmquv2KgeS7iTwkPMKx1Gpw9R9Jh3erd5jZRtL6NVrdkNedT2Dp69o5NdEzFp9544vgT9qvQE7",
  "key16": "gLXomrQtuH3bFuVTxXvAuvU9eLg4Qt2z8VJVknrED6nHYR8VARika95FADYYWDvt9qUwRVnh8gpBhZGGjmKYqCu",
  "key17": "5AkeCGJ3Fy4dz8PbxPjNDUeSS48CMoB4ceeJjLSvjRBK49GnjLuCpJvY9AdCERB7dmEtPzNwKSi2TxSssHtLGED1",
  "key18": "EUwAtp95CPR8WWJENmFyDEmBV6yrpCCDn5Sq5kD9jE3VyzMYr62GqD9TK8HUCRJJmca8RaAWBuMJ2iqq9gkoDYj",
  "key19": "bEex4WW7YHoZ8vdi1ovFoSKo7qC7BoFGs3bSfUqhw4f9RncGd3Dj5CWomWiGVBMzeLyrgs19pv1buRErFz4wnWF",
  "key20": "4pX4D2ZbaAMtx5aQcbAt6rVLAh3EEaxkXqpBWYVVDaUH7wM1cDXzvnFGYGyf3m9CXrz8Euo4JkLCFQRZNrRhaEZM",
  "key21": "2KCfn4HNX7FatWViFZR72fkpxU6gmf7BqDUVoiPQivtymmDENFZr4MqkBNt7WZGYiLbMPXTwvmPgYdfSQiPwG2Cm",
  "key22": "Enq3JyUZ2DFQ7Xvuv4zHq8YFkQNaKThoCDg8zSCwCQYjDFHGqVV6QF2QkPGrNPqSTjDMZuGyg5ESGg73LMRcpEs",
  "key23": "4Czc9ieZ1bkUmZmcBitdjrhBq4DYEqxHrFysf8szGocMmAcxmSq3ewhBjxRLZwDaLYPi9J7X4W1EaojFttgmLjCy",
  "key24": "5NQ5tmYDdXv3SfBGTvECFp8KLMTqJfNxm645ox1Z6o9R17P4iF7M4sa5CBmGkY2TybZBgeZtR2KAkYQ4yvE7XLsS",
  "key25": "5kAvrE8LJG4Q81uEy69LUvEMNKdDgXuymWt6G9T4ZEMFi7vyEeHbVse5a2TgEg4CRsyaDXv97CquBPcLsipAJhjV",
  "key26": "31BFokuDncfVUDDSLmBJqBo2M4tPkBHk1hFnbS6BvtPH226nBkRr2MSL8K1WXAKYWT2MsScMR2zLyS2v26tvwYJh",
  "key27": "4YxpCYzHSvLiQ7HvHdAcxnTeEhS8cebMU9WYKQAWELvYPv6t8h5p3jc8zvVGUxddHKS7n1rBzWhaT7yVkZVCEnfs",
  "key28": "3Z7NsTcdUD6AePsmdGhseicDQD3NAhAb6aebjbAQLk2JJE1inDzBNMNB9BEqx6vypNhDeBPN5xe13M7K4W32RWBW",
  "key29": "4KMUzfptXytZkrqnWPr15k6SF52EjB364wbpwdR93pUzcN5WBbgCKqfF4rCL8W3y7v1xAJvZ2h7BfYFwKRYzzxMJ",
  "key30": "3vYxLzKaLf3qyAK88X1xRq8vHaDVEZWynTizkeHf8StCBQGLJz9RyRHq7c5B13MC9WfMdzBinyt4XUxmKR3nfAqZ",
  "key31": "48bYpKATPeEenLxmGNqK5YDkiitx2ERZGpYHKyUx9w4HBnhfdNVzEWatcy86mYjF9RuYZcq8185X5f31kwkzFQtX",
  "key32": "4yoHr9EuYtvLU6QbUcB1ZqJtfQQQJm5DJZePHoZ3Gq4Um2EyJnA94S5D46pRUi4yYjLi4yRE3WWPbaUZMVPcdLJn",
  "key33": "3xAo2P9SRLfiUEMRJnwnbFBZYgaAnPDvdHqCc9SHGqz365iNmLra7LWGvs1kDwmCw8rf8j1xNJcjEocsU2JTHUMM",
  "key34": "3oaFYprEbBCAQzmxTeAaW7ekhstCrdshiRVCTXWVTsemodg1dBBbZ2DUtoVfuRT3sVYbVag1aJ4rBsUGTHfgH9Uv",
  "key35": "3mhdyfNrMEALxH6XBJX3fKRUtPxUyGXPSroFAoo4msDcXGTzitE9DfB66JAkKz2TXoCW7ynMJ8oXanTPaHGYEMy",
  "key36": "4hRkEFcbekMfwP29GH2ZpS4Dac7ypjsch98RXgVqytVDo3yaYeNTkhqtGWKuB5eQnZCx8ASTQRUWziV786tx65bo"
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
