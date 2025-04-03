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
    "SjSuSzeFaKczGzTib2CzXrs3gFUCj7S3mhnVJ56uDc1w3qygnJPnn8LMuA2rGLVatpNnygStGHvr1wsa2wvPHTf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EG2RHCzVEEZmTdCZcq1v2QNuwGKJaMYXKMnhWSrN7JQzQfwzDGLL7wQsCt9c7RPo9x9xFLDnWXFrsMEwcaPNJep",
  "key1": "5JNzSxkMBMrmrYYvGB4xf2aojcEuKv4v7fVpXPUJRifgM76pGxrPNkBrCHAA6BecDzzE1v84S5b7YQ6z3Gyg7Sxi",
  "key2": "2RsB4XVHkGgwNGfBEq2pV5582WdbXmaAUEHzTARhjM1nsnzi1bSg7cjU9SEACkCZxzesV7WrVWi7WBZ56pvTXZ8i",
  "key3": "HV5DDY2P5Yfs3kqTgZybn7sbScrEHdfuc83xV8aiLiU8CnuHLxZ4KpG2UtTHXQETdTn9FFMGwGBPQX249SJGDKX",
  "key4": "5rMRu6QSLwwnV4nZVy55FBXBD32cWbAXV7FHhNTybS1noSfTPN3FBGpFBC7JHeaJ9jTrJWAFrceuCrMBL8e7DNch",
  "key5": "aqeWArne4Gyu7w2bNLZywgme2LhbCHTrqgUSpi9pa7WCwn6bgKVCvZcvjt71nhULXF397JwgghVSqVDp8giMfXr",
  "key6": "49ZBpjEHVQ69rsUupg9KjnJtDLqY46TRjQQRoYQ6gutGnAQTwQfUpu2H8c7P3eXqBFUHyiVTmGforNdwTBiT2XGH",
  "key7": "5KZgpFC8ZEdXSPMpopK8wKgPbUnWVgek4VA9EofEFrR9HdSb6KbszobV3d6aUpHqQr6wG41MY2Hp9G1hfKisX9iD",
  "key8": "3ssNXgMAFQaAzTrjB91XfQjHiXZSB976zb4wAdH5oj4aqC3Uvyifb3hm9x6aiKijdPrEJkoiNtduZpwzmu5gd6ZX",
  "key9": "4E3iGcjppaPnKzn6fTfgppKRxr1H9MUm9xgND6hk2ayniNmtJHHi9hgNc9bjin2ndFoLWiE6nacQcBSENy4MWh8g",
  "key10": "4WF5oUx4PAPXL6RyPfdCXJCrHz5VmaVShZnFbyhaemtamfaGV2HCKiLZNQbpPDphcD8YsXES7UQxKUDyLmS1XjWu",
  "key11": "3PUbwz7uWqApdDFw4VUwKAqjoffbFvusWeU6G6rR425gkiPzJGH9x2XknkMVMr7CMTeBmF9Km4H8x8xF5d8gwnLV",
  "key12": "2dDKJHdYQdkYaF76DSo8sYu5MBAKUG2bsFFRpyZNKwo6eMMAAdxHPT5d9Gh8igsHKkpXcJjtXAnu9n8ncYb11dwv",
  "key13": "3SzzJfnKSwwYNbN2Nq1f5JMAWgQcRCBWDpxg8orTyq9mMK7bPQEYJG7beGibBv9YTqk6xMjLJnatE86uneZ7MPLg",
  "key14": "5sxXrk22wQq5g4K1Rrkh9ojdPq6QiCQpQK25d9ZZm5WA427tgwDsYUuRjBuDM4cq5zAAeSnETGLQ46woxL3zHKTG",
  "key15": "27X8qAn44BGUaR2r1mfBADg2nESLK871Pko1BfdH79dqro6DwEReaKgkq5M8Tigd5wGZcs4j9Zpz5F5z9drMJGNu",
  "key16": "2EW5YtHKzd52nHmBYnnBDhv3zYwVGxd2ibA7PE8kPGwTvd6rSx1CGvyGKp6qjHwsa6SMAqkWZBfZ8DFSaHYpFrd8",
  "key17": "GxHqCW65DamBm5FG8yZbF312X9CbVZyPFuxuL9Py4Kg73of3ZXxGQGy9ZtMLE8oFBZnDWdFG8D7MXE7UkB9wMMo",
  "key18": "dbkKz6aVQLusU88r9RaDTQUNFgmKNzMBJQEi5LTFZGoTzqhkft795A5CprFYrjy8u6b5yUi31tz6zsnyRHhMacT",
  "key19": "2bCxat7erC6zCi9TTe4JNFLnGUmCDUPBnBkiiC8hprC8BwUNrqjbVhYvFRKQ3qUVvnvBSo68u8jqMWd6hTV7fhRj",
  "key20": "5nDWewKyaK1Aox8wCSfxTqYPWj5tLP9dqMKWVRGvKge45hmYmUULJzqfdmgfvH5RkMtGDgM9bouk3vB2jrxvs6fb",
  "key21": "2af6fmdrNw5TMgwgmVYzY5ykZ874g8xQDf729PGiEKnuza7HtFVJA6GpaVPkmbv4jyS1b35jydC2cxLk5mdtXDvH",
  "key22": "53tDyqQiTi3pM19gdNStsnFnXyqMWKkA3gB2zpujWGUnotVHAFfH3d1qBdswNBbSGXuK79K7ViymM1ocqbjzufG4",
  "key23": "H4nYQTmfBn6B2QqD9FvJfVT6TBYXHVZfi97BT6gbJ7w712Ji1E5s2LQyzeWdKoYFMcWPnfADBuamz1zY9519RsD",
  "key24": "4p9omgj9CtfQGgexkAAFQE2WaDWR2SPFPsAUfWdUM98nZZqqoVwWSX1JMGiSomWLNsJ9xfsWc2r5VAn1gpQ9pB7R",
  "key25": "67CXS6sQQQYhqTeicWvJQCxr1ZLiD3NibmZNL7V8GCo9zmPkGRHwjJgR1M4wrknMteAVg84vBzk4F4sX7Wa3mRfj",
  "key26": "5j5vg9mMLb5UQepXRHYA9zGHjZUwqi1z1Cg9y9sfaVR42QMq8nBZN9Mw8WNjT5CBXmTxm2LxwVvRUEDYZTXrJhVG",
  "key27": "5WDGTPm2aVcgLdpEefAUZywiAXp9qetbijqMccfPAeA1y1c9yZT2gJnygVoAXBWP883KsH6wHVTpMKV4ch3XQg2x",
  "key28": "oq4VP6tY5kWyPStUrBMs3Y5BYXwf9apfnnurgCWJobgeJ2muvDnQhPVnqSW8fhjcTJRqmg3J7xnypZELTfoBcWD"
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
