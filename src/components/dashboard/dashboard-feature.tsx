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
    "5B3jSQMu9Jp2GY8u7QEncmM1qu5X2dHGdr8gjY4D6SweLC5GffqGS59nM2QyhHkoS3x83bVk2hUeq7ssezoe41XY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jZ4u56SLQDZmStJXyEJBPZm2kcNiQcE8BMT3SvaEXMJrwph3Lm9p556U34PApsoNFeD25Gy69WKSr5PckcCUsbe",
  "key1": "5rBPru5aoYNknAoC3nZVvuFNQMLaMy2KhfU9oQHPVUXM2Gpj42523k9Pp1KcNDmcihqQbrPYKvKdfKXpZiABohgx",
  "key2": "46qKkR8J1CEP2JmwBzgACvbcHH913vPLaHEQB27PrUYfNxhmvg3C7oRYjJxb9V6z1GBx4nUG4PKUNiFE29RRVVvv",
  "key3": "4xV4vDhEiFLoJcGoeqLQvjjHXXCsaqRFshouS43LNsTBjYM9TKhCdZmnJsoiEL8sn13ZoyiadtTpupGmcX7ru5GA",
  "key4": "53xFiM2WCHfCTgtPiSDdrJR7i8fa8kuG7eH9VRwdeh7S5fcQCu2ckdMJcQwiZB37M4i2W8mNdejCxcDonjZgS1Wr",
  "key5": "cHiRvqyapNM7oXjxWnv5YaWnV69iqqGm6ikPBmHQgKBF7kg2twTLbpVvdB9fsC9mLNL5JRpC8sexEPS6iJnaEvN",
  "key6": "5oBKhAipYYDFytm4W2A6NVDs1fCwUSmVC7NXwYdYDseCkp92NiqVK9o2aCfBhXsVhQThX7MaPZZGF2TTh87TBd3j",
  "key7": "4zyYvv5JBgmRDGbzDhcXv31V5eavCWj5cA52LZ3RoCVgjzTma8c8c671UbG7DeX8DEgUTSr8ZRipR3doYnEP6iEn",
  "key8": "5yKgTptpXbYpGF2gmT5egm5MNgm4dLGQnJmPEqRvmvGxzJNhhh5hJ6bsATQYn1oKkoihNBZ8j1F9S4eeEUb12vJ",
  "key9": "3ZUr4xC9XvMwp4Vm9DYskRzGeeZFan6LSP1f8mZbERLqKS6QSFt5N4sduZZKp4gPhkzjTiKFhPoE3amcSgyztd3w",
  "key10": "3CZZhrMHLLxrajrhUHcii3QrMCxyRcwuAnjtXC851ZPZYuaTJfDZbdqF2K3LqnUMVn3JKmY7BuY6fTZyb2CjyWvt",
  "key11": "2sA1JYVuMAmQXXRkMm92Nn9QdkyUZceuwPGm8uYkeYRcGe4ExqL4U1M4NqrTtcHNeyicb97C98X5uBdqSehX6FuL",
  "key12": "5AWxxFoSnAPPFpDDfiEYn3SeBPRDft9m2hfvDX2L9Tc4wG2FdNA17XKD4RrU1vbgqv8tvY1Gyz3Rhj7duQvsbZo5",
  "key13": "3BaCDxxmrGQ13mtTY8yzcoF7VzyZbYdvNokRV64gsT4m3xdBuisRDaMjRaB9zKvRGaxucCHeghU1baqiaGkpvoUE",
  "key14": "3qNYHfrDoigwCzKkmCUmvPSdzP5XrNcVrhfUou1oN8BHMYdFnqRJZga3bb7g2m2ZzFAtv3vCdfVDnLgearsKgqTE",
  "key15": "588QAasBCQUXU4UZsgDbFBPW5mhZ7CxhJ5dfndxaY7cyGJpXvZ6nqvd7YVQ1iotHqaZxKswFiv2cheVCLE2t4UXj",
  "key16": "2Ks9LvpgLx5LA7DtJMSuhBwWj36W1BW1kgbECant1CeCP5FowDxEfAMP2UzjvKjrtcoX6WRTGd7aVcyJ4BBn7X6M",
  "key17": "PcaXd4CAShuEBd86gAWdvjA184BGutfiohZsaBAiUTZewJ4UWQKpDofSpNKt7RiVDoTS61F2CKDMtmo4oaj4oD7",
  "key18": "4mQoofP4bx43JC789RiK1ZMaJEpkB6zwbDS6gABhoM7WxhLtXuEXpwEAwoyU5Z64YCrKQ5UqoS3sGF39Sy5zbtVh",
  "key19": "5VJCG732DW3DysqyT4ZosRadqZg4k6T5r1ZXUSbqA73oG6VrMJCqygtgXWZEza2Mn6yaBWZggWhophYQLisXf6JG",
  "key20": "Ux1HtbUhGf4CCkeVQVNdyBSqCsHpaairUZdyb8iLcQcPVFdL8535MNqSGtpXzRcwKUsgpakZmnSJv2Z7E3d2NBD",
  "key21": "5KsTuhWz9sqXzKRL4pv22RpU7zQ1rsVZYBrEH2mUqCkzDvXKG9tixWsjL4Zg7ttSYZw7b4qZHS7E3YQwBH9haMvc",
  "key22": "zFxD5Jarsc6id3xve4ykRbToviVCKPJy8VLs5cc86agnPChyt3gdcB46DTfQjnE7qq6qXBMQMvi9CZGWfZrHk3b",
  "key23": "3onCXmSR4nU2SZHQyzHvHS7xizKL2caH1ZGCnufnwaZiaJ9jJ7dGVmbXkwZW2RjqUJevnoCmJhUpbzwNepxujb2g",
  "key24": "24xapd4HGg79eJLwZwCR4q5k5CFELFMASmpcNuRf6CMQhRXT42MFmyTt3hrJqRzti3Xx1DMJ6M7McnU7iboxgL9b",
  "key25": "3iv35vMrc5Yu6oSsSWGGMEeQ6Dw9R28FTJFy8mu82A4z47nZTz4BmhC6vAmchVjUaBUT9dv9MPgQN1LboBPxwf42",
  "key26": "5irSX1G4o2sa7c9HeRtUeDnuSAZLK976XPDW22ag7gTvrzCPeBJ2Rqq2LZzBdZYMKL29JS93imHv63yYxrSMg5PB",
  "key27": "EJdsNP51pPsg6SUKbY1gk1zoZZ7GUKzzr8zotAwz4UdgqpFayyhtU225PHkoLhdRuwjnhCKvkhLWeuFTjg3WHsP",
  "key28": "5j7pGPkTRtaprGCDrNTEca9SQy99uCBqb7tftce3iD6A7CU5JoYVX9qzdR2EuxqB9PwjDDd88wDDqyk1gqmjFJgt",
  "key29": "39a7MguGS7tAodCvvomspEpFSG2anDQRVBWEp42sDWXSirmwW8WBc6W6AaqqG9uQ81xswTZ9JyrAeRahjTFgCdri",
  "key30": "S25E1JHhuuU1e3MDMKoeNSAibXkTdTqzB5uYjWbShwytgXWkq3RACYcFkKp6zB5oJgbp2tR7xqKaLKL4MZwb4KE",
  "key31": "3xkLvvi5MtvYuAm9BXcswNcUqZ1m8exLG6z4tRhwq6sHH4tELGdPXAUAve4JYcRB4Z2o1p5dzcFUaKwqTusxuXqZ",
  "key32": "3Fwtxof8uPJSExVXyxstSu2t3E5cukzoXe1an2NsUgVN1zW7iXruuSm4c3kuwDT5P3ZMer4zQgVV7FmHhxcfW9vb",
  "key33": "4oYL3cdtns2kWouiF8yRtT5tgs9TvPEGCN8bYTe9Mk4MUtfTNsxeNABjGyri5xoogrRwtjDiqcH6G5XUYEMcZj7V",
  "key34": "2prapuyRDAgp23du7ngjFE1HgTsk3kaVbSzmrfVw6MCqS4nGU7nN7kZ4G4PYA5gtNf7an4oTLK7qRGXcErV6uyTn",
  "key35": "PEJJg5qU1nXFNyHU3TvNAQ8veEKoDGyeDfZr2DkLQpKZQjftvHPmBXvEe4u3hFgdhhepUQFhLnqUVeBYCJe3RLM",
  "key36": "5cMbbeAj1TjoiHf8U8NdkCxqS8WyhnnH7pzNGRENqcbYCR8GNZogj9XcsDGCMrBoURo34CWoxUJpx3sP74CkgCdC",
  "key37": "4e3oSpvyDzXRsPeEen4NvLuVm2iw4hop1dGbvhxF8GXm9KYPYDYypHS8ZpoSuGJ6S7Du69nH5bXbBMdejhs41CqQ",
  "key38": "xB7gtzEjM9ZWWHfgb7eSSJ1feLoswfP9ASUWqG8fuzKEqd85pcuP8hybBrzUm1oMETUPaLj3og2tTPRhiD2JbcW",
  "key39": "m61dGnZoLjBwxh158emeyxmLvkJZiUizMTAudrrrfSxb8NoyTddFppk5oK1LdfLhScsUcP7vigJTGErSre55CNy",
  "key40": "2FGqmZufGTMF1XmS68ahE2KHKM6edsEHuKTyWfhUyTaZqrjwuf98dSnNWmpmfzp39476MJsx3pFf3G2MMwnSdbYs"
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
