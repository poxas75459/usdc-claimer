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
    "sYBAHcmc9hPEYhstBs4TEzLnhCWXKMZgqznNBebUQe6K1cSVwgqh1Un1TiP6xmkwY3KjgdZQwwYrqKHE36FaRbn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LHiRRv4VAfR4JqDpp12K9bt8LQJ4kvEa3BkBb7wNa9mgWe9XrxhciTg8XeV7ZKhqgfZBcKo1PoypvvwHdTL1ZLJ",
  "key1": "3SkrAVVWCchuYw7dz3XRQT23EnYE2jDT5iJbcMrULVREuETVzSbVGjs4coZG97UHrMFsxUDvBx44bLkE84oroPno",
  "key2": "2dQzHvRFoDto1w9Am26RbuBaUJCbmDvFT5JMRd9nC5D97gYmedNmKNTmJJ8zFazgBnapZLuvAc1dAHEk4LzaiZci",
  "key3": "3p2CxnM5nJec7oP4tbPSPr6bBT8teHZ5TfLAwC6YxNGJKLjup4Wtm5kqPfg4tL9KQ3EMTh9oDLFsdWbByFnLLtFJ",
  "key4": "2UiyS5Uy2pFouYx8eVjVbftJBF25LgWuczqucL6Fc8U952bQgecSXw1s2PbxkxmwGMQ26m8HwtHqrFGGoADtqiTs",
  "key5": "7ffV9rboyEiXbCnb2EGYsJnYhYMdQzdv1dNzo7TShsep3bojxqgMJtLhNv4rLTDomQrqKDoMP8runueGAiHGcAV",
  "key6": "2GZmy3uLwVd8RqRNYcPvbkvBJSeenqbMSAqt8XgAYYT5ewJhCSG8J4ZUro3FEv5oQF8oi7kBLFc7Jsd6h7BJ1BXk",
  "key7": "KV5X4tornui9QLhJxUeQyAmjqW1XrSuQ2vPR3rMJYYam32ZFN16GGgHUSCwFf59s8BdWJrLCwbfvW3Dp5D1vEm7",
  "key8": "5Ea31DYW1E6UvY5QsYZJ8zGT4GZT3kh1sVabPWFABiFmFEQagsqjUuTJ9CH4zZm4cQCmX8KvGDKAECkUCv1JgM5e",
  "key9": "5xYXRbPykjLv4wuGXKATVdWNpePSrLUzbGwHHt3o2KTecvX3kD14c8MBYBHaFvBB2FyEeZMb5cwN5wpKiM9NDjQo",
  "key10": "4bxFHz8t3nyCZhoEkMxJrm4WxkBGShTr6gNmmAzDv9P99S6DvUKiV4bw7GkWJhk1gzb4zJZ2LGe82BCXeM72oVCj",
  "key11": "4rocLjE8m1eutRGpiZGWquuFhiM5GBSMp8hC69nW5iecveHAwsPu5pJZMEGDP7D6o3cJA6NW6hkJ56LXFBaVRTJ6",
  "key12": "4oGp6fXNVp2gkBcEqkYt8XuhWRtokadAfzazE6udf7RmPFT4C8uGX4VjwK2jLHXAuGjcfPveJc3Sr9ADFvLFTPL9",
  "key13": "66y98Q5tQ2K5YHQjVQJidLqPUTjnvGtfQrL7ZcCoJ4q5gcHmkV12rGZNymBrWmTsQFaw4cafQviR2TMGka6KoSom",
  "key14": "3oCma5T41Kx3RHtKEHz6mBsSkrcCWEtysvy5RtCyyyfq8RgJ5jfR3nd3Estro2XagqXiJjCphWbtpPs25wNPkEHf",
  "key15": "5U4A9SUorhuq8MsvTaQW866bjCJrvHL2ut9ib3d9sxttXkr2xZEZAvt7hjJvWgcZUHtwYoCH8tWCCpEape8sXWxF",
  "key16": "4HcRBp28q984p7rot1ApDqgq9kf1C43PiozRzwzBS6moAjUsjGwbav7NF2wBvK4xMRanMjT97bKYqjYNrpqep43N",
  "key17": "4y16GWJ5FXzgF55J1XqoTAWUvPkV78QGM4WB8WRX95ctadCd5hPU8aBFypLq7Mrabvfg9KFXm5UxS6pt9HhPD2vd",
  "key18": "4V8cVny9ToNHYyse8gKzgxTPAJGJheytMKNLjStRtjYTvVWfkc6CN14ZUb1Y7oG8VQaJxWA7Ti2CYUcMwn6mNMdY",
  "key19": "29DschEEtM8wdaASwD6syf7PTdz5hLeZHz7sszihR6kt6GxUenNmg9781xtPwQc39QDZAQ9Turj9rw39PCerfAZo",
  "key20": "g8qkZYcQuTc2FNeEVFSbU2nMj1ZQtSeL1V7Euggocqz4ycPYxcEHMuhH3V9hLsFcPh46gyLCY8kFtbZZ9e1Hnit",
  "key21": "4EwYQ3d62tRPBTLEWKHtAkVYetrA1AravkZBFGXvhQJmReLwdGtFWj2aZPhjsBnwfRroKVsAEtnXkTNQijqc8uNr",
  "key22": "3vjhPP6AR7pgNY6HAmWSwnyU5L83rTE7HnUu9KxZDjofsvNApTr5vWsnFgDghUDZzzBGcAFwvbH3nUcYWfb1bnsX",
  "key23": "2ZTgtdzcUjPGgKvjJMeRrNJQ6JdQawvBFn17kx4NfL8FyfEzoLLCyZY7APrLZt7QAQnTnEdEXYWERP4yarEjgbFE",
  "key24": "4z5VQC643ncisPknZkurSxm6Fd3soCHt4DDKL1ERQRNspykKDQm8gbgJrf1m7geiALtD5H4iqAJpgKMbngxonNfS",
  "key25": "3ijNe3nV9vBbWnQNzwuBeMCRGEEfL4W9eqLonfZVjCkiMPyrF6vmetQnXkkSy3swJsMQGt2SrQSa6SPUfu9jQ71F",
  "key26": "3V4eV9Z3mkaw3ySPcomVTPh294BgKroCP2yduysw8RpcYaM8W2eP9dF6ygBeQ4p6npXCHH41BUJKhMq6CwazuttD",
  "key27": "4feVNjkMxwg7UqEqL9mZVPeNj7NCe497Yff9vtKkQq8xJjseULacUixauKp6QyxpPsfq96z32pcUj3sjyxqUgT9s",
  "key28": "3uTQL5MmLYYycwpMm2mcfY6HfiwMqEhrSiqdV19Z18bakEGuyvRtha6ZjEg6smyRois6Djm97P15maTn5GYiiYgb",
  "key29": "4pDRp2k6fiThYf5B98RFcSvgM3BQYpCW1ru7jrrVkSgYx9gPa4Fjqvyhb1QekuNAQjdjN1VSkbkVBeGKnZF34yaA",
  "key30": "eH246o8TLYrPrDVfkBwCMc5RsWAQfYEbo4VXTZR3dWYJX1J9EiwWaXQGbyzHJVNAi4hax9GSvWeoLrhTh9jkK57",
  "key31": "5f3yU2kSsvSxjaC6K2sjCFHVpAfA76MJ39qvdFzrEBT7LirAWSnbVUWafJndojbuiRhhQJMhuv9G6ux9pyq1U1qE",
  "key32": "4Tx9nCRTM5DMRLgANHrnJ2EyEAze7kjRsJ3TRsMWEsfarPMSGXfh98bxKhxTiabnVrj6FkmsFw2hyajpLdGct25T",
  "key33": "5RWpb95KwNgnCsQxYrvGiicf15SVCD3gzDXkZHeVZmW2rHAGkAeEBUxWGfUWNZC3s4Kbnqtm6MvvABAx4sH4vYt4"
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
