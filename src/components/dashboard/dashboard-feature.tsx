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
    "gySbJzS1EjxtnMy2wyzWHNnVa5UU6vNUecktXParH9Ni4KMVBEcqfNHH1BzfxU5QkWoUjroEXxugwGRXVdaZSB7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QATtqYT8kDjDyLjNsDpmYKyCHfbZJ4L2voRVK6cNp1NBNfyG4bNYry2jnAXRBVBeYSDmCVJTm6ksnc6ijAycXTk",
  "key1": "HugFbL2K3KwcskRknDqN4K7xwTZS5WtA1zRrSfRBn7BuwSd5dhrnqUaxeYZzxyNNfEbCJcdeQbUEQrTFJ6npWKM",
  "key2": "2RT9C9wVLvz2d8ubqjdtaXCwFpQcovcGEum9vtLPxSxsPfrhWrwK9vresdybVVfb45KZsdABdLP7AJ8FfdSrFBk8",
  "key3": "2dxMn1jf1t4HU8VTuGrtAe8Cmx9AhePEKgfeG1HHaK2zYhobKENzndxDNtZrpRc97QdCpPgRHjJRzPN5BYaT2B41",
  "key4": "2fGvgxY5iKayvjuAPsHyj7WqYX9hkfcAwQSfNyHB33yegU3bmHB219PJeLbDnAcZ5UFtaDNb2E4gjCN8Zr629nCd",
  "key5": "5yhsJgHNcdYD2ZwAtKJZNZwoYjkhpm9fx5y3akQpSm8aiAY5Lz1dz6WeQUGaD7tCmgYbycxiYhdJbVb9Schi5MA4",
  "key6": "2AMwbV6uKkdom687EyDTjKSHxqRso88Rts3S3ADVWmKYF4CL213DgMibVWmVLg2NjNGeFtz79GATCmEiF9Evk5TK",
  "key7": "4PPQL4GQfh8UM4eAwyuQo3y7w2NEmKgf96b2b2uaYfuTCJT1kBuvVq12iDEJYTak8zF4SnZa1o5mzNqY8yg5Zpnk",
  "key8": "2YNwnxeeSiSmekUKiJrNR3pBYry2UQHQqKeQr5A4XNYyHjn8wU4mQLBapF7NNZY8cNFmaEyJVUs9ZT9anSQkZuq2",
  "key9": "4fkSP5bZ2Xm95W3J72vvWGNyjVUA8weN1PXqfEKaSnRRYvbpcUYVwbcxYCm3v9pvUMAetP4pnRXiGQycBypTpqyS",
  "key10": "8CofWf7apTExqUnMbtMenQMrFW3b8ExV7G5K1ziCdcKTqt87yE4LR9fp2SskQxpUk716jtPixCgghrJo8wdX4nA",
  "key11": "4ckhf2VeoAhkXJ5MMbqWT5c519U8PvV7bWMLAH9tiVKwdSfRZF1Y1pE5JCs7Lxqu62VqqTzTdndN33mFnYnhX657",
  "key12": "BEU2FaaPLPmkJBTAmhy3d2X3SPCpwKQwhZd2QoPTLju7cN58X8R5Y8ynubyW6vq3iHjUYkFzEFM88ARHuonh3Do",
  "key13": "5NJD2UEXSmGsUcw6GYEcWatFstRtA3tEso2ivETvgi3fyviXqEHNrrW7hPSNVENNCyybKJfFC3SKcwgA6oWGQbpp",
  "key14": "jb48W46EjBBtEhRub1NtnHAvNhRVnP82G1yZomfchM4HTjM6fdpS4hJmt8RqNCcPHxZNdrEbAgJ9aNUhpxqaT4w",
  "key15": "4ukcNXFBa8BpmKEsosqVeJkE5U6xMdhT2U8AYW4iPiQs5t37EFMQZnZu2tM7eHTvUTPYyhLnkXA7eFi4fNyVjW53",
  "key16": "5zeJ3vcA1nvKRKc5pgfJmFSfSX9cCrFQKjBaGuXSzRhBMyWUcqXwgk9YfXUfsF2Z75tZxGemLxnwk7dFSuKLfBPQ",
  "key17": "3yGPzGzhMx4LkyFdxLSXsK3dCWARco5XiUiixn4yvsz6DjkUvhhvCvHw1XFfNDn2EKyuGezH5rJHsGm1DxV663EF",
  "key18": "5Nqgu7xG93Ww8EdeZxTSqTEYuUaHxBJgcQJHxt9qqEWHEsxYezLYMegKn3oxM43Z2HTkxmXSLDC7ZzbJs3F1SWWn",
  "key19": "4UrLK6AFoDyeFYfGEJU4JJe4QVoDrRHQXiM81nTYfQgMdXa6bXtRiZYjeEg26A584r7FTzxu7LAzJUMcKhary4e7",
  "key20": "ea1BTsc6LzJuDEmRSfkrtbhE4R7Ng1XvY6M6vdSFDbH5senhk1LDWTBc1gMqzUoA6FPBXLcaTALqr7Pnh8VFjsS",
  "key21": "4QKwJ66deHVmLgEh48v9KTUjUTvVPBzhj1VBQreS7oAGJQidCggE6TmTnMCQYZP3ffnrxLqXPiXKdgiWkhbrJNiy",
  "key22": "611N65oNWpSkQdsG33GkkQAgikqP6sRaHdBdHXkg8xF3dmgZzFyXv5gYSDBcG1BWer1UKNUVCSHBaT6CvgYRYeFk",
  "key23": "m4BZxCrMEveCU9jfzTu3McW5ygRD1Xq8NpojGiAKqf8g8HHwWDSkydzaJfaaWiggsrxg1BuDTpf6bSraimUkwZ8",
  "key24": "2VsFRGLY7zYqNFFtPBnLKXQoJQ7hizWYaHySsr8WEkvuUS3awMjhapAZBWAtzyuYZbT538TFhUNkA2nRubWjMk3t",
  "key25": "iLYrsoj2Cmv7FbgaMvTzLL7dR2hJgZRnofDxTsTSMc9EQFptpK2KJxJRRGBEbmeSu94HUK7XjXQDmBGeWj2ZP7j",
  "key26": "4UntWKP1u97V6rs2DfvuR6brYi5dWpPiV7SPySykuFeaB17kVVu1brjm2fgfZrEjEX1WCipkrg8DQzwNfaxPLbwK",
  "key27": "3NgfeTa8BpLUuCf8Nfrb1Dr1L4Nd8Uw86S9EVt9aqpBu2rA2J1HXE5AzWBSWe1snoyALk5Wg73tr8PDttUZ4BpCH",
  "key28": "5RrdYpcVpDmojZvgZdCMqgNH8iprHSvt9zAXdkpyjUYYZNR1cqgLCxgXgT6A4JD5Um8TvkJps8sYSw8m7pHEiPew",
  "key29": "5apxwPwMgDcUtfFiaseKyUHdQd96KbvGtU5JZdUUeJLZT8dSbsHCGgi5JRqaA3hq6n7YwTwWpxuoYKnVXdFyeRuu",
  "key30": "5QDBzrpBctoau16MQnuNNV39RU2wcwBMBPXsXnLe1CR78mCYji9iUvZqzWtRCbR4tbwjNsiMhmZ2zwuFBy9sGSGx",
  "key31": "VhgKdn4GYtVaR3yn4nQTYL1deKc1UFoJVCb8JYLHamhA1Gqp7naZLtkEV84cvCJ2ttLFWQ5q5Q537uW3NsJjoJr",
  "key32": "3bCJ248Ex5BryMAdfAt2mvrs57c7de2QY2qyZ77ZikRP2AqMSDvAUNqr7NCLSELtbnRuCrcVAAMKbwqrZ498vXyD",
  "key33": "3aAjDLG8woncePPbK8WnyDMw7jXm6ZMcp7muVMHeatct6uPG9schNphsSPMCSJiASktM5h9PWJhd85YVY8om9oDL"
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
