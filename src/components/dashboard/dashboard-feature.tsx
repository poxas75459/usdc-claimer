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
    "3LSqGNKkysdkE6XD8mToiZjh53AZQpu32PDdRGfZg95YE6zogKqKGc8Q4MJ3pP1ZrBSmZ2jszP9UhzkaExf9wFU7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Dp8DK7DQJhe5MGuvH158XvrEa6ES795PZzkcACSeZSZQzizPEDLsDZdEi8qBMgWD1UDQ7ViVMG3ycw3vJJCheM1",
  "key1": "4q16BeDE1bkzYMRXy7EsfjZuFd4Ynmq7zL9nPKXBNeNdCUBf74nCLqAXxJcpsdYDwdMLyuKUVteGKwUT2HUn4L2x",
  "key2": "LbCc7P9rJnYkXepTbHbygCQxRvWZneDuvVkv4ntDpa1dweBmCNRFnp3oxKK7qy7fX11c1QmsiMmUan1oxdXYLuC",
  "key3": "nPpQtGxFXiyWghDPirVnjboUjgy3zh4tumB92sobUUJASLcHg9g4dbBXuqpURaDDHVM9hhGuqcgcVzB6ZS7PAaM",
  "key4": "2vggM6XiizTqvPVYxJoFDYa68sVze6mBbPPxJe8kJZv2YqCEcx4skQT5NyRbAd6ADnXX6YhZ2UYCwZLWyZCQMEuM",
  "key5": "vAXSEN6Q2emP8kaRRh61g64UFkns4nEycGkTztmji5cVj6tFMF7HSVekJKojoohUoa6gS1zRJcopcb1VpA6yr3L",
  "key6": "5H8fkTpnmU8Zkd6Fx8KCL1Dh9s5SkJdDQyEQJbc1aeyELPqPb2nxefEhfkVHH9aWF8LhwALYk7W9WUdHCK4Jifgc",
  "key7": "5U9ut2u5duv1hPHGPv2dAQdHbAmCaWEEVKpwfKfWiDidxHZ66eYCL3xnPcSTW9UZqozTx4PBKoKMJ17yosGKZ84P",
  "key8": "4Wubxp2yW27GXWjRKCNJx4ui71Vwk1uYRrmZR4xpGTXDjsCn52qXoJ3EzPiz8F7GqDwEXHVoYZMLBTQN9PKBn1Jp",
  "key9": "2jPXwdzL5iZaYhmAqFDe93kw66KUmneDgjMhYTyMRCnaXbnvA5zJkMmethrXtmZBgtduVXdsGwzFrAbqC5k8pZ4d",
  "key10": "cFFnTcmaPaCGuLLUdZsvvTkaQTtNLnfHVZ9p6m8LsEHpZitQrvhLHKhDGLBZpgenTrzrM8TfhrKo4g3M5pTjRbn",
  "key11": "2J5JjCb14YPfWg9HKSguYYcR1nzbvKkR9AFaufVT27vwvSu3R8N1w84ZAqiuFPvJoXyr1dLWNYjh9NYaLjDYYTu6",
  "key12": "5Ah9ngUWcFrUUk8xYaTTyKYMJGR8yGaG9gHXYJ5i4dbu3UQtuP6BvbUxKZaK2kRCEeowbwRsfBtJxKNWzDsDbscU",
  "key13": "46MHLPHzSZRxFUoHrdXFb99tXekR1xmj4fb9CUGFSVaw3AeKMm3gy5LhT21fCk31RQaxKYZbXqK2wj7yYGMKwPy6",
  "key14": "2Ey9V7nyw3sWewJJ8dZtyNwZNAgMMgwkDEww95qTeMZGvFcxz3PqibAoKLa7pydo9BisAGxS9dtuhGhP8zkiyXPY",
  "key15": "66ysWgxum9XrpV8xxxmedD26A9rqhpRP1qSCz4MvTwgyELgAA46oRUgHJXLwnZxQ3GCa3hDtSmHdFibAh6yrL8ME",
  "key16": "2oYXdDhrrG1J1arKrVypQxywqaD83hw3Jk1642boHWncsxp7KGp8TYiSfV4EtjVFgAnErqGFKYJ4jkBXKxD6zpZW",
  "key17": "4XFwdUg3vguk6SwzcLnqHXudfniqPgZfVdzBN3McekRnQWjrHnivJSHtXejJk87GioVVEnTxwLcucfjVVCVeBboX",
  "key18": "5p1yU6zooaLEmvMRFvvnTJHZN8NK1zFyXCLhxQijaF6PbCYNBsttod7KZbLF6eEYk9nBSnqTsst72QdX74zPR1dJ",
  "key19": "3g7y3k45ZyPhqe9LpqueyPCtiQL14kxWBDJ8CjeWeFD3KHYGwmg86f3Ya6wvJJ8gYPcbVv5gkwfgTBaLUtNRbEbs",
  "key20": "937GscdNoFVGGCgfs3ba8MNC8XV6xztsDzAUBPgMVmUYgfP5HeNcYrPuGxwb8FgAjSornezhMAkb5mpG8RrsbgM",
  "key21": "5o7yoUZ6YexAZVkAnBN4LPBxQppii4GkdtidxgGAXjpNuxD8BKjBPTLDf6s7bG3ucTyq1YgGiu87VVpTGhVuW12c",
  "key22": "3U4gSEdshXaMMmFLsv7zD4TSpE2kiGq8fcacShpPuw17GuC4YFqXt6L4VcG8zzSfhKG83N2pnnvssN5neXJkZZH5",
  "key23": "5DMs9Zf7sf67dxyqN4G8jB2Kr5zihi6B3xQu1Pv9FMNKgQ4ifTzUYu6fXn7zPS4eP1qXG3Bxj5kTDe8DkoywTPyB",
  "key24": "5wKPrFEvwzAfxjNTQxa3oFkTWg2zH6XPoHw2pvVU6Vag8HHdzawaf7WJLwaXXgU5hh4Lk7yf91aFU2MuLFG9kgoC",
  "key25": "V2MH3dtkHQdvbV4ZPeCHByvqpzmoDXCAuFwH3pjmdbTNXtPvBKSANifrbgHa3F84YxFF9FLnogWD3e5bEiLAnf6",
  "key26": "3HewJ8Nf7CHEBoFYoKe5KJS4uXw5KQP6eKQUepHvG4LLv3Zpkpvwu6vamCdBuUho4P4FzeuePQozkCkSgaZ1KEuN",
  "key27": "3HUssfQUMZ9p82dFtJXEmXiPKVfZhZTNxx17md28kQsP3DcQ2HufDQrggC4Ak8Q91KwTUTbfjvqHC9jqfdWTYjTd",
  "key28": "EEBre4UD4Y2Nmet6daCKYYsjJJ4KUPf2KG2xBL5tvrErz876aDPAAGgSi99HdbfqjnJ3eba3KssTwyiUHJtT6dA",
  "key29": "4ApLF3tHFyWPv2dicBad8cGVQXfp53mCDDdVa5VEnvfre7Qp7MmDivJ9Da4sA6wJWjePaYJN7fEMe8S4wNmfe9L7",
  "key30": "5Rhg2kWAQFvxxpgwYcW19yx2tJeXuhHTHrXBuqk7Rz1ZfFHjq2gDcBnyA8k3yMAxH2dKJLZ2CU2ueonVmCMBK9eS",
  "key31": "VvDumfsFrAHJpg6vBPVMdcSrpspsyDMJKfUcdSKAPQVS8y199eBBiJQwNqiooLSGvEa9S6bU5nKjSkENg5DLqFa",
  "key32": "AKhu57cSgGu8p1rmX7TeTaNfWv9AomAbZ6rDEyAPJXS1cqSDkX15rvuj36LvyscVv5p9MveUNBHdgRGBeD9YDLU",
  "key33": "f12kjpbDFe7HZJxSMaV1u4xYnHGtN7yLHJcGoroJ4TeUmr4k5SnXFgmiKy8zTtiDKgajYfR11e2kZaQ6UNdweiS",
  "key34": "53JJXpRsG3zVQ9ZX5jj3Pqw9mfchTjysQUCyfTJ7jLt96wHfKSNXM3RRN8Dh9xEvrsiaKxQZX2BQ7biqWDJWh3FZ",
  "key35": "5kzubbhbg3v8a2uzue94L8upyyzivyeYHnbf6DT76UkmkC4Eb9wARRfEPj1R2Fa487tivdUMF9HwPBZAWb4uZ5Up",
  "key36": "3SGaH9xiGDYQ7VbSvGdz3fXZ38vDfJFXyyZRka2XwCNjAvw68g2utrSRqrUWasnvc8myZ7GsSj7eH3ch6fE51o1Z",
  "key37": "4DopcEEzMVBEMVo7GmzhUZokithqa3vDCzBAtgfwKE9gc54AUH7d3yTsVaWmxR8xRBaqvDEFufjSkguTEBju5bXG",
  "key38": "sUM8ZziPcYRZaMC8EWGNpazBrkxqqNFXdVma8SsbPM7yYGg6TybGJdBt4fzfr966czxwCWP5t8gjNbRhJe7Qrhu"
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
