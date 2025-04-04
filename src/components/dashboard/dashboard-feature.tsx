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
    "4qoXVHg7f38QRwg9aks4rCa2jqCXYYwRxnQBAiC8gMRxa5kyp5xhQy8ko8JCJwDwXku5Vz9Y1jidsq5Uhq1rvNyj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SUdGmQcop3KhYjDiXL6B5Fi4ryx8Ahe9Vwh5AEUuRW6XyDkzGkScjSrgVV7Qfh3QFESEUCkiMaRu7Hd1uNJj8Wh",
  "key1": "4MHjvc3RjB5o37aQ5R4QcSdpGxBZLGtVa2Qu5DKG4MLoLzEFcMgi9NSnTXuXEuv1QXBJd4FnHhhwcMBJKaP3Qp2",
  "key2": "21NjqLJUiiVyd3YqWoe8zF2QvQcuqr8iXeHFwgjUz2jT9VLA93wooXtHHN9mcGk3cTvejGPbuiFRgdGDcoapQ2dc",
  "key3": "9Yu2R1fhhPjJU2itnyxaDbgqZ48Cs7D5vqCAwH5Ao8pJ7QB5XQebCrk2SwdaF3TDh3453fK2RMGpX6sX1SkSMt2",
  "key4": "5zTKaquQBwbYatkXfpT3qUxUQx1pGD1Gvs7reqSLJysNBhty5H2M2CLvFryQkxK36incyj9Wp6vCPJwdKszLkuJy",
  "key5": "3rB9DJtbzfy7TkSBXKjM5V4L9U3f8Q27KuePKdn8f5nftnPvbXszNwspCqJ91Pi5jgFa2wAfWrpMArsLHKQznhWL",
  "key6": "q2PiKH5g2fF7hrn5qKWcY58m1Qy4t8J1Vtz8bq6tTpSaGRZnSCPagxkuacvL8Hsv4nj4kYpVBK6e4VFmBW6hUV2",
  "key7": "3xUeUGdnuaPXVPfnsavppKHfUZNQ4nZTiia5di1rnBhsv2QC38FikgbByCUtJm373v6ZKtKD6wyHEDo74utxSkqw",
  "key8": "5bMYRK8QQfY3LKceYiGs9Tik9QrDk2uUd2RgUFDcxFZ5DBTTkfBfX6EiJX6Tgp5Y9VZtGmZuYmLxPtAcyFyGXgtD",
  "key9": "43r3Ztec1SicYzmmNzzHhY9GLLCjtVfRuzrPzsG2GDnKb2Chc9TW3pemxgq1h16pv51q3y7Jps6wAJiigUCmY6mQ",
  "key10": "2bBo94gNZf17sUsxSiCALAwpRXGGpMLEFubBK4yTNCVNwYbMphHy9KSuvEdrQvsAFjJHLB7mAenvNx3kEX1wqJJN",
  "key11": "4LMJ7FXewZcQLGN2QTtsrsA1E1jvVjDUrphpVi683xsCuDrnStD3wsFFrB59VZPMxBA6qD1F6BfyKVVeDLfTFm8J",
  "key12": "22GXbww9RKf1o4Ufu9wn5FFfJQCL9ZLjqKHQrw2BXzbWjPym5YyUwj9gm8A1GCvynUqGf8TeuMYuW5KXDPCvvX5g",
  "key13": "4Db1dFR4CpaCMHUr9DjsMKnAkQXmMRUywb4MbS3jAsxu7y87f2YpEJCNx7F3Xya194Mh26Z6WNfrAJnEz3K62Dyk",
  "key14": "tgAQPAX6t9QnEFajKCgXKU4NXeeVExA1n1wBsNdawV1QGBuLMcyUndSfJMoW37c9rRYCNnMLfURQeeCagVTMPoA",
  "key15": "UNMSpyywvWkzUALEMkobnNFgCZvWzZEGq4iJCbd21sx2amsng2Gq1xh12SEJV4vXftSdLmbS3iCh2i6VHqeCx8c",
  "key16": "3TfRLToqHTv8XYX97n39QxJ4evbhZCJupNfjJPnHdq4JWfsFcFJCf3r7PnzQjUmTTgTMpiTF6Hi6VoMDsi38erw6",
  "key17": "2b4Sps7MyeEyePhXDAU68hGgetKBCcBnEibyykNCCRSZf6kvo8KP4T5LQ3dRSkxfq7hHBwDzHmqpnuuk1s8MkXY9",
  "key18": "2p6wXvkqjvuLzbaf2GCmskUPCGLjEpeHrZyXi3pFVA3jhPCKu8PZcmbbBaYauGbSB75o4bxfQxuRSL5NMkD1cZdr",
  "key19": "5ZagKJA7KnNXU4uJJdJjdAniuqGrtNbzoHk7wcBu25yCggeGDUJGEQsTC2SRh1ewbE898YdRTYtgqhCYEAsBnpvi",
  "key20": "TWHb5vF3DsrKeWV2ufP7iMX4n9vZLutYyR3RDttNpdt3VtcgednsxsaZb8BS2kc9YSZbTTFm2Bj9XxzibeZ5kDj",
  "key21": "4jnMLSRS1rVdkadnrg6tzHpR9TEmw5Wn1y4fe1JN1dXYpXrNF2sDLxkYPLFYeA7A6Rv6pgkSMMVua4pK2jmiiLec",
  "key22": "4MN8RTN7Ck25DoMfaxDYhWzMYsAjxHAoXoRBMc8LYTTe2rBfb8uzbqJGffCjuDvthtDhSX5Roex3ADeRvpSU8Fd5",
  "key23": "3K98ph143wrGc1eGCEyXd3fQE4PGYbomjf2MgQi5Shy7JyNEWtFvi2fxyecc4kNkrMad65sXnWGhMzoBon6kgsEW",
  "key24": "7uFTp6eZMKTX2y6RxAqkeaNPJcMQbJZ9Q1eWdUAnCvX5fDbftCiB4JKUJCABKAJ5mWsnU6ZbvWbRkuPG4C9YQHM",
  "key25": "4Yb8VPUbje64GTinLUvvMuCcwqobpyfDujjujFwtjX3vKXq538V4FGjjUt98VNDxzApUUs7oNAXoVFvC7zEypk5V",
  "key26": "4zyA78riSbhcTApupCfx3SMUUpKb51T7mvYCNEeadsBDofCTbRsZPdrnh9VimgxpQ8NMJM533hNRLmpXnruCnXTg",
  "key27": "61zPYDLx1jDnEGx89dzewJCr8khg2e89MN3ejJQ8sXUC9kYZX9LyhNsFjAhsPc5V1EyD9RLycgKh81if7KPWSZMC",
  "key28": "4BaaWKce43GakJRKccx3ofL66XTuoWRsjBqhPFE1QBpH6WV1z3rgdVfPF7s552STECdn9svUpLxPPKCSLzwTRy3g",
  "key29": "3f6hheCCiMt6F9resyoZqc25WBEwwaEmQh3pVxtCHsnixH4VxMqx1sAYbUaXA2PSpzxxkYm2ptqfuw1oyPG6fgpt"
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
