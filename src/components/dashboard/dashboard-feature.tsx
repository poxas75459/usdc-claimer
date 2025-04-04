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
    "4fC3fFRZ5tAi7QhXDEKTgT34G5Hagih4K84LB5w3eSzNzAMto5P717dEUXx5zULaE1CQEufjYHcMbJXWdTaiJGLR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p9VW9LFJ4ZNqRyCrbaSe9PfLWmHATPtmjs9nZENixqhTP8bLA3cAi8VkCuMQcxBLQGUG6tYSW429oN4qGSkyzeW",
  "key1": "2ZW8bPPcvgdabrydmogEhKxEVUe5YzeDJt1dSRagUH2MDqVWZvT3a636zQQRDhknKVMpT3P9sJKxbGZWVCKP6mye",
  "key2": "4ozDpHiT3kbJuEzFL6LUV4xAPqiyF3shuSbV3R6bREGeSB5sTiFBDsY8WKUJSHEp5VMXAkYjeVPfHiZRkXPd7vFP",
  "key3": "4XsSrJW58EURVRTGed9fTvQfm6LTQsD5PzPBSRPJuBEn6HFHtSRKFrCCYWZR26FGxgUskXnoxeqJnq5QWhs3BsB5",
  "key4": "38XTEWADNK4Rq5JM2nhf2UBNov46826DzDKkHPyMQnc3GZTvdgVVfUFPEPd7cXFfCE2W5kLYnaJ7xkjGouU2iDYv",
  "key5": "g1PbEwVkxncPKJRWD7nJBrds8qJqTMgs4pg6hxUgT6K2kzvgCmNMcmDT83JgsaMo1hfq9SJfNbteFMG9fHyT7X5",
  "key6": "5DSuh4TeEnxJcurNCZex84egNBq9d6mkHp1fhJgxbwhW5ZX3Rsw9HrBGAGBaTai5YbNquNXZwNmDXnnKpVCLnMHA",
  "key7": "dg3GXSPJMXdQB5FrEAGqNysxw6awQ3Uzod2tevYXhuGeB6rRtqS9QtoRujxiaz7aWCg1UhXUc2XwxK4nVV9EU72",
  "key8": "3ZnDLpqDzUXmFetrz4q12KKmXAzSUUn38v1EsHh61He6Pj2xeMzsurmce4BUfprBxobQCaBbf8v5EtfwCZbhjXTc",
  "key9": "yVt5KpbxAbXFBiYc6frm6XV9P5588CHJaU8n9wrZ2bckbfuXRhvPA7jJfKEGqCLbf55Dma2RCc9SswryE7SxEkt",
  "key10": "2THZBN9wbpDm6gKPY6eN1ia4RiuF24A2hZMew4wYG74p5Lo2pd7aWK8z6pauAfgvNbjK7dyu9NwXednV7QR2NGRD",
  "key11": "3zCSFjQfmypKhihotep5cpXdCTa8WeErEafo8g8ShzYfBFQpWkLSCXAzTPAqcUuatF9HWwJoS6ZzaJFbSGyo5QKy",
  "key12": "39a4StsPuhQxBP2TvAy1nHuNdshs1ztSwX7QbjqYuDfR9v5jEPAPTs5FVwhiZ71rxg1TkRxeYAF5yB3EqaSCcJQJ",
  "key13": "VXMxehsWfjAZK6bxxf4nUdWuety4WXXhQzCsdfADaojtuc4DLhrxziEwVhgTcGCWdWRYSCiYVgJ4UHB1pamsmKx",
  "key14": "5EU3tJhgFxpjqmFd57TH91BSWfK3WfpD3ygSSX8QTGEZgzyoE5bko8uxZTdhcvkDYqWF1hwy2J2TduCQWnTZSV3A",
  "key15": "24ycq4VS4T8jSTAyB4xQpNz2vcvzrxfJ8mYy9BWLAqsoog4Rz8Gaq9srLUg12MKsvHHLgjihrTw4ZW3NXMWPyWio",
  "key16": "YQszdt9ZfT5SDwyVWHa2x7nWcerd6JPMUW1tsEDg3JmyVixbRrEKsyFoYC77PeDTyStRXMaz3qagJsVuHEAJE7h",
  "key17": "2rzaUAPT2VhobWrfD9rBBo3SjWwCt4dtLzMfyGJy5bYdAyyRM9Q9SxjpZ81r7i1ZVcAgVfEz8HSvkwuLDYMi9wLc",
  "key18": "4qqbbL3gMdWL3aZo9sTkvP2BbhCscxzBKFT5oVKgiAoTtZHzuhPNcA3vH7TMhfZ9QTSxYmYdzgK6CN3Yzf8GoM8a",
  "key19": "52rDoLmnny9nkkzqWaahpNjZ5PdUjdCfqGB1ysPxdbJke36J7ZDidfxiuwjSRNp64zUPr9zCBMYJNSzhiUAPhur4",
  "key20": "3gqDwk5TtndTjHkg3zFCqbbtTN4pu4jTpS4CxJGcd8Ud9yf8NK9jPb4cU9QCvQseFAXfZ6Nae3NM8iWVvFses49c",
  "key21": "3ynPhYS7mbXXFwNuBoLtQybF6L7N228eheHzhjfdgL1vVbNCvsq2LjgTEqxkHVmkT3Mk3RmxwMSZBWXjfo9abzXM",
  "key22": "59iDsd5YsQQKVzvCknTksRSi7aeR8oAsoNwK9sCgxeyAbFb7PeqA4sQquhBcwd87x76oVRVTfrZApUBRiph9DQSh",
  "key23": "3KZ4gstBSEMT89M1qAtuJwhRbWzxVZKkvNEknFJNCCSL1g3PppFrrA78Z2QVA542Nbq4uuRzFQex2HTT1JigbCbd",
  "key24": "32bsAeK4RvJzKekZejQTxZfWG6ThjdRy53QURkJwVXpaFrfQdMvYhmaETZtK8NNDZgxZcTLN45AwBa2FZVaxdasv",
  "key25": "4V7uGvTr3ZmefezcSvQ2ch4Rtog2bKVBkbRDQE6wB8pVXFRW1u6VEsfiw22fQQdYoY7WsQMsehKMKhRChrZNRdxX",
  "key26": "3Rbg5PmnuDL9oiV5WCh4ZaMBQaahLdcLcioQJt2kg6tfYkgjc5Tb1Q299oEKwJCPxtVr6JGQHKf4rzWXem73oMPs",
  "key27": "3x7PTh11ZoeM818R4pLQPpXgU59kH6jWbWGpDybtA8cTsmSosWjmDS7N6L5BaPVknKEi5Q2CohefMbXuJ8PZVjKm",
  "key28": "4Um2Z792uPn2muAmvGh6wvLncUxaugLtKP5pBRYEupNYqg7LEeHevgAgKyBseA53YLZhkZEf1zenrEBF5V4YXT83",
  "key29": "bxGayL5pU4izyhWXu7SkEvUABRKfveQzVTechiVojfZA1MZh9B5mNS3Whyae7VHjyALbyYkJhPvdEnqqWuP1sMb",
  "key30": "3LyDd4WfooT6kZREKU654fEZM8iYNRga9D4MKM1ZaZkK5FSPo7vVx1eXZ9uBjfqvjhBLc4yRwRZWn2UmNoWtMNrV",
  "key31": "5X4fczEeeCAqLxuTrwPiX4UQMfDjRt7MQ3umpoEc5nhowcqKVjNj6QguuQiME8Nvzx2BDPmiraMxUkvfvxHvnZJC",
  "key32": "3VNs1XmqejXF8VwAtE5aYnyjozx9bs6GDana51ryimFao29bVo42iGbxgpedfBsJx6gXbjtNmjtn7wyVU8qmZiAw",
  "key33": "YkZmGKTG7wu8sf3SFPtWU9xwEbV4hWn1UFXM4PdDtfhzXNpEDudNK4cKnZ9ZCumEnrHJCDfPUdGJwxTWWfQtsMv",
  "key34": "4Tm74SqKmQhc9V3tPLQd5sFx1vzmsn1MKuYf7RKtHFTuMVqAmsCLoDxQC1n1LWMpCraojSXksBNXPEyeCuk26nb9",
  "key35": "UvtuoWLzRAthNLpyaCn4Sxhd8PA2ZQC2CdYpTBQ1PEcMBUfUR718apo1gU9B17Zm8UMNjcBKL4CxXDu5y6pgrmd",
  "key36": "2FdGCch8Z2yXpLJwtPuoXhFWgcW4o8rVzdmaxCBQ8jiWUzrgwKLaWgry9GzMGcPj49D3NSXu4hq59q4h3aYhVmz6",
  "key37": "285bMMDceQPPJLgjbPvbNZjvACyYK2VvwtC3NKvKjBdEK2Dv8W51v5muiXe9YXiW8v5UiVfR3gXb4STWTidtQGAV",
  "key38": "3frp1tD1h5HQQ1GjuEbCa895FkitB3iQuXL8ie7uTXZFTz25q168Yh1abNhSmGtPn6WFazr5mZX9Si9aQG1rxwgT",
  "key39": "3kdRC2pm5ifwHAREMyJEEdtbho2XRvGkm4bFUYzYTXRdFoK2EDveLfXH4pb5zkimhvg9JCLFfr5m2KmTqTpkqt2K",
  "key40": "3MrQQapMvGbHrZqW4YopXs92HfyYmVWAoCXDkwJMY46uBPCU5N7kUyPZPwFtGdK9oUxHceCQWeyhnqPaCw8vNHkK",
  "key41": "2TKMW5HUnAhLV1GeAePTTAVkYsa3KeRxp1taBBWAQBFehwpoimEGzhxvyhS8uiQsCuWiA3yCkDMqEGitF6K9wRgz",
  "key42": "4mnr4yDrrKf7u7puFNYgxA7oRgYXhf9yqg1Cf9QERoW7idtQ7CxeHR9NzDfhxNcNkLtqAx3SC1FCvTkdvmMtceXr",
  "key43": "3Vfk4tQZwLdGp9WpBtc7XqTtEVcHBdRhZXZnodXZbR6ARSFBoeeCvBq7nPdb7QK43fv5993VBRSf78DwfaGmZNNt",
  "key44": "44Pf5T5qZyC6iahrUswMWZRiypCMWLwTwKieo2VPNZWJm2KFYpsgQjC5ZRNWZJAuexbvHWF5tj8tzQ2F1qQHrA4P"
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
