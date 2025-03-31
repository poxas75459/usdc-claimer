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
    "4iyBZq942fJKX3pWzg7URJbYv34aJ5PDxqftzb7zRaxwxmoW81RRmSGB9UkdQ3cD13gHc5kAJbs7eDMzHCykyBLH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24fotYdMqW9wQCN2n1fejH44zaNkCwfTYjCCPaCM6Y3jN1Gq4kywsvEWWpXqyHjoNZM4fiorpGfNxRAKS3PiYMno",
  "key1": "3vpKUFVsssnWU8ubY9mSa9nTrh74eC5cjneMgXvKixDjcqEzHyfftTjp5cjnyE8sGhbAkr3ZnriV6Ppb8VgQS9eU",
  "key2": "3vgdAEqeDty7fw88vNnzpWDBJTN4eVPvhKkhw4S1VciKfqVgqZg9wWAKWc6N8VG82hcUXhPAk1MMeJSmTsobJQ6a",
  "key3": "2SGR5n6CgronAN1qTcXUPpZn6EDHL8hpgbQ2UW4UCmAZhnUcb5nmooynmcx18648ZuyTps5GUH5NT3SwYLnSL2jy",
  "key4": "3kTQmf8LTaXpdvxSdZtCfJqhXvL18WRtKzy7VfFFtzkW4unE7NeNfKV1TGbRwC1W3a76E2ZctpXXXhjmuktvM3n3",
  "key5": "DzKVCznf4hmR8SogxZgBxb9qJWnFCpAygQew2GRA6iiqwFLi7qRsqzgvwsfMCkEEAWGGwvttdter2DjiB71AGS8",
  "key6": "39YmSw9q8JrNgE2WYbymbboU4nq8kxtBTwSz1B4Ftj4dCgptBm1KYZPft9Ngr1Ap5kGncYMU2AKmC4eJZDAh3vZX",
  "key7": "52fng5kXAYWMpW7b56YwNfULvBQngdfQZzTUVfboMi24TGq2w2o4nCeGfaNoLmMKrFLEZbuukZGi9XBfm8RAaFvp",
  "key8": "5Xau9xbh7xcuFboUQuPTyJ4WwVHfMke3SzDFQxyzmQos3P5XxVSDkj7d7eHp3bG3nMoT5jarzAdqXDw1ie7rV8CB",
  "key9": "3Teu4rBqJdfqFvrDkyqyf5edz19M7QLgfR8WJQezDhEGfjy1eeqYBLByVsSjXTK7dgXzybtooNZNCbqj41yBe5Km",
  "key10": "JazgnBZGxiXubY8GYjA5YRgkaVyXTfH8XP41A7f8SQbwUE73FJusHzwMRXtTNLLY7hVMfM4qtq9MVwFEVFKZjGu",
  "key11": "cgLgqgRKTQJmH3N6T5n136iL691k1HSNt3wPcg6bmRtoh4BCAgjqcL782LWCTEdQaZASUzn3G88JkFFisyzDS5H",
  "key12": "4EfRbzP9fA5LCRW1oDMXptGYS1bH67bxew24Y2RELnPFcxxWSJ1dFMynHWzPeoPZeKgJ9RQS8LBeibWWYTfkeaan",
  "key13": "5uDnpjkcLvDFw74myV4NJHri6dxsf6xSJNVh2gQACuqi4vCMcdYdLhP91jfFh9pngr5JPhTpfh2XNkwGXKTLv922",
  "key14": "4pDAFFyTFVxcCrsJxWVyrGSz26oi7D2GSKNejdUDY3R7SNwGE4DopbpcrtqAsGBnPppYgB8xmjwZwyCGNHyUmnuX",
  "key15": "52zjkXuTxLgAuNVM7pkrKet5s4nMFVujScnwBTw73avZ2aUEpmaRrzyynmuxuj7p5U2o8hytGzfVvdD7Lgqgfzkk",
  "key16": "2iwm8bsQjLBNuaYkaGyBY7b9iRiDM1U7KJQEjwkXcbsMJy3drkMFMJSL1cBQiL9ufgsVzPpnt1RSuC8JhyB9PPVX",
  "key17": "4b7JMPiBfhu38SoKsX2C3mJ9kKKifB1tRWtLcu6hxhfYgp2hz3yxkHyfG2QqVBcR8c4siyKnvyEggtHGf18ruSa2",
  "key18": "3aPFrNVQ4yg9jTshjyNv5WfDRyE9KvTfjxJYErKycKDyDn6ytwzsp9oVYcQoX1RE3cFwREtrTpErQGbwHbpwMGZT",
  "key19": "5MM4aGJUcNiZBkknhvE2UA64DkCJkcgf55pSXgwSgYSdeTn9Kc8Q2tKde2Rs96W6fTHyKcK7TVzzv6ubtDZQ8txh",
  "key20": "4UbPuM2DapUEbVyLj21AHwuesEzjp93uD5A3eq7xwiLBaydgYSDyGU5vvrRFjhCcEFYh9W7W9KwXvgQskSgvKntK",
  "key21": "2a6UqLGKaWEaG6Xf11wS1ygHMMVcRD8x3ezTMBzzSKqswUyatrsxxLjguY2sSTpATW8HjqYua8fBDm6gDTwomYGt",
  "key22": "qfs8v2RMGJYGkJ1snuMZherb2NjjnDfV83XHmC3fdJe1ajSK9PekfwYs18uizgwWibrVZ7gYMF4thKiW7djSJds",
  "key23": "43uACEXY1CxDVDH9XCKhQa9FZgnXY94VqHBQkMojNGqUN5YzQgMeyB8iXCF86v5rS3gd4tGjdSczK7ZrMJnu2TAH",
  "key24": "5ckdkV7J6V3jzeWwfHyfUe9tfZ7pZkAiE1BdaUvAB7ZoKwb7mNcBvpZroa41vBXMLnrcrRxjqwXbMxfoCRJhmfbb"
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
