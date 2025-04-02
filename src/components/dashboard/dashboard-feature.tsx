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
    "54vCdfe62ogVnfBCcZPfKXfo6CsYShE4imgqvH56CVLEyPTfUep9HqkwZ1XpoxZqL9e5Gy4VjvK2M7DNNck3mtJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sNBt498ATYkzPpzCWkBn9rBEMknrAg1VWdKTSZygkDY7usRLYhzPWQRLb91L3pw1BaVKYKkESoLVmNqVYm8miAk",
  "key1": "5d7JP4yBSrd84RsuATRxWzcgKNQyCvE7rpstGiaSZHdBEbCL31q4nnPEKioJUEkRHJQ2AxEhDnrhKuFEQHiTj39",
  "key2": "4wW2MjkmE76snEYsYipBRFc3f1gUmVobep88Vr79xk6SphmNghXzonjCGGJmbTtALu3zd2q4P1t3Hr4H3FAJZdgK",
  "key3": "4AZb9k55KAv1NvWmSmiNWi1xaPRPenGz2anMBAHtHuYB8suwDzJrT2H2ucjzSFZYsScLoPNqt5S8pqJ2GT7qdGid",
  "key4": "5EtBvdSz3EHEkNdNDoPozNpRM4KCjgwtutTyduF23u43UA4Zr7qceuuRwL1dfXDvhcnejngpsm66ipfxaBRhU7UX",
  "key5": "3zsgkZAUR47wbabST54TBpXmSvzaM9H5VPpEnetJAda2gX32JjvSZBfaXPwb7yL56e1GPwLcUZDkTzBDGKc62wyk",
  "key6": "2P1pjCWhYY1ynDprf6zAdpitKK354JtTvaQBtaAZEt5EeXMUDjKhWmCV2YV1FZK4N3sHWPaw4XUCgP659DWWCuHM",
  "key7": "2EkQr5yZrr4oQTRhMmn2a4NpXk5qyD1NuVhawrmJWWwZzYQQhwY74pHk6s8UFwwHUjWUSbnwQ6qsdpbHjzR4Zr15",
  "key8": "4Afn6Aiq2zKbBesBuByKa88zdrKyMTtxn5RgfzWc2ZUdHPZcMu9CnPqkYFidB6LyChGDi9Kp3Qz7ntEzN33QBM9R",
  "key9": "3HxWcFvkksQYHfHSszBrKsqqAydTxizZNmQX5KwgphVL6FgG1DjJgeKb71dyxGKW79kWqKqmwGHfsymLngQdHLBL",
  "key10": "RPRp7nLMHYZ4ZxZBvkkwTSNgHeciRsbwSmHKCkRAYg9T8hJ7otwu9fD2GYnr4StHmGukkdHn1HieRRAAgdQdg3r",
  "key11": "4K3S7TGgKUzqhr3kVFMwStHBraqgPHYi1ZtZRQCTp49LqaT32qpoPpMAchEJBHAbX9mt2UoF4KnsdYxBbKR7JTCx",
  "key12": "5LcEJSGzcMXFiF8FEQ3sBpeiNoEso3Nf5D8sChLf66oS8iHCcP9cMwMMNJ3e4phf3RZkpH7k5pQSWm8v8v3Up9Np",
  "key13": "4uETBSJKJTFMKBKyguXjhx3PhkhyuGizYVRQhwZwFmYpfSz9XSxURzqBcSk2wimogjLNv2VR4J2mtCQzA9ST9ua5",
  "key14": "2CSs2CfRStBWs17xn1FLCQggmjLwhdCQoTXjpgJWWTBFYN8rMVbWSczah99MXhbEBuQuLE5svYjbRdY5zuBcEvKw",
  "key15": "3TPpAP5CeJieuEAFmK17UaHTxGktXJFEkFRgDe7LiKw7rWn7KzoSMzKmnAGyjZuyaY9jFnfTbCTNvhan5kwR6X1Y",
  "key16": "2bep6owrgykM6mLpi1GCDj8xoXGV61arX36jhVVm9hzwcMVpyCwiC6Lup4je4CesPNQbXVJ6RntkMtepA37GUoE2",
  "key17": "2dSThBSGUhKnUNkUkFmNLefnmS9j7pUtrZsPhwheqUgZMZ1n184rPExCE5KBcxxaQCdhtWXUJWtGD9DACbYJHkKC",
  "key18": "3TbAVFcQLbbJSjyzjP78YtGXEF53XvmZL3qu25mrav7b7jbbRv8VQtR6N5DxrV9QJ2szNA76drhcQSSKMWQFuuq6",
  "key19": "3EoepqgqUXEMF4zA4Tjn25KwhFQ1x3en6k7Me8GArHyJU6NjeoxxJ5PVxFeP8P7Duci8kQETnC5VykUHze4sQsiP",
  "key20": "5GLZqaKpWsVeTPT8Kz47zJ58GEaWxwU6qUWN3q7upBkNMwBhUGvhubJ2DqJAV45TxTJd4MSXpUjf1XcprRiFB71",
  "key21": "FYkjpGcj8oBXQAJbLy2ZWMVXvn47m8tVKzTFsEQb5Md5qYgj3T9JvNTZPmviY7wYV7ZS1HBhS22sY1PHmgUxbTf",
  "key22": "3g5cwfPuSh64vVTSZxMGpsMD1bNBGCof6nLUUQFr11iaeo2vpXBJdPQ1Nvr7GPK89tF3YKhzYqqu6kDDTQab55uo",
  "key23": "5yGPHx5Thu4HfoJzYbxKTFz65VVFUwaZmJu9R18qw9D6BnfijVbeGTE82oSUh4PVHAtGj8cvQoHEzqAtZxNWHqsV",
  "key24": "5efcTZGHcskrB8R54na42i2GirSJWcececgnobDw3RCfXnsgLvh9Fq8o9m8s1gJRRqmQVvvvwPqUSHZb7rTgbKsn",
  "key25": "3UaUvrizBR31kVr8WEkkoCQGing4yYrji5FwGtyUE32zSqHtAcGwmJNRa18ZJriKBxMLf7yvtQcG2tCtr37vutDF",
  "key26": "62b5xZwUm8QVTEVyd8bx5bQmfTW41QP9LuicQvq5LZ73n7dY9rD7ZisaEHChQymrwnwrpLXj2LRFdiC8zWyadWJr",
  "key27": "2BrCxa9Xv3A3DzNNqxjRKEBQ4spo7hEGN7TU6ajLgyXyk7igJuvjmqpwtRHDNPsFdk1Konh8n7WjkzT6VgsHhTL4",
  "key28": "3ZvQtdP2jToA21pfgKuhPzrQtaa1snmbbg5Bm4BhLWc34Qk7vYQtjSYAtQk8xkFcz9R1JKc8r2fVi2jpk6mKUDk6",
  "key29": "3jKhj8oDNZLJhPWt52SiynoYKZAnyBUib46bV5kUNDEoMGHB1FX6pqmKXR7tog4xuW4dQpCsB7RFCssPkc7KmaVG",
  "key30": "2ovnLD5GCFkrJeuHBMwb5YWJ7XdzRmxrNj5geg4fRbmjaYA8cuEbc4QYmztFf1wCQ9Hf6Zc4YdZLW6FYo91NfJPu",
  "key31": "5FVBADnT3ga2YQEf9MBsAECv9wQ4Rhi9vpUNy4hhSYq23eWp47qnNWBfh7RYCWfBsCHwHnULYK4tQGa918qSPgrr",
  "key32": "3zpL9p6HY8fR731dzh299xzJ9EGcSH1hqm9DzUreTZxfFnaPZ3qCMikuJPooB4rNx5F5czVRWZu1JN3hwmP3kXHP",
  "key33": "3VpxJ7o6pWhdwWC3u6ByMwr2nbJVEVKr1JM8q6RiYu3T9YL4STSucNpG6SVUrfxr7VkwYH9Hyx8fzYHSDuddJVEv",
  "key34": "s71gc9U9qxH4ZTpsbvKnfANVYHnrPTT1wbmHeocRb7ztnGXckoYNxka1JWUMQiuVJtij31FYygjqHgzQ6ToMSiz",
  "key35": "3jXPRbBi8QnNqb26AtjBq1VxxRymYqtLN7F5pK4kRzqPuJgJFJUNkhRrYYauHdjTUT7n84aQrQezvEbPhbg6xpiU",
  "key36": "4AgwF8hBSTfGSF49oPuuCdLzXTQ8cKR57UCJWvUsK3zuHpDtQ1mRRBHrUr1ffojuBKYSPnotPNagmhCfhrimev2v",
  "key37": "g3dKmQhoozpxv8sJdMVjHsXFh4J5WN6u6NS4D8GnF7n82kd3u5bJx1j6sNemGo4yZ65V3KWnyNEYdVL3eKCDBdm",
  "key38": "PAyeMAxaG1z6YJaUbe3WzrSXE369xou6feuy4NDPK8Erob5DGsMgaq3oYPLvVccyY3MPZyk8UJuA6p7WX8TtFzp",
  "key39": "58u9Xgb8C8NqtDFCAHYnh4ubLZ3g6MJGY9LXPKVWP8ysNaiwkjCWYcvZjypjj9zEpDnSLZMtwZQNEWa24PULhvo4",
  "key40": "4YnQpbpYguTLM7KNzFAfaLLjgMzD3bnJrU2NNgJQTXZgXDFjzSmQzHwNVcnau5NRMhw1834zfAAJxSymqPpSeGLc",
  "key41": "3XcYFkwDx4Uas3K13P6Gm7cAkPrAbSnonwLhY1ecoyihSMBqvKAo5Zre3dik4E1u4YeLKbFutmRi536dB2HpzYfh",
  "key42": "4KYjxc92JyyATAUSPWT9M9hi1Ze2tkyT7qxr7Tm5APhEjBELBCkiwVuLkQ19se8CRrn16w8B3sR3FJfdvYgnSqwZ",
  "key43": "39jiM1S3S2KeDJefjzYJx7icGYJBmMoGqLRV2YvBJykFdr8stiFkj8qyK8jcMu4J5bieZdasebBaEzJpemnNd2xp",
  "key44": "3MV1F66kEQGuhbBC6PFyQkNUEZYbTPeDNG6DFV9vncogp1ARvmkmyHMQWFDZaoTc4X17h6kspBUSDL4cCqNEuBmG",
  "key45": "3atCib4yuua8qe8myktsV144rTXWFdiaZb5jXXNzMFgrhzn8g8BqWs7nqQd3yFrh79V6aadZt73fPwwDXzZpgnhp",
  "key46": "3mxiJqY416ohWLunHDo3GiQq6hWPCM9bLF13DvpKSEuh8gm63EarnwA7MCSp9jwvzoyZikzwy6Fbj2iTyN1hEHTB",
  "key47": "5UdwvYkZ4mDWYqX1a9gWNkZrXzDkiHEh3nos2K6bZx8LSgY9YSb8MsSKc7aWxDpfP5GYQ2oEy9hfopRdTo4vZrvL",
  "key48": "WLibLNoZiNFtDvir9EWsjNSUtamPASCVWR7f1wqHK1Z6bfsJN7mrz3qFTo9AVRBiX6AJtHDP6Ky5d2f4azdDav3",
  "key49": "2NzbfLm91rMigAj414w8Hjkn5nR8PoNmCauFP953RtSF8Z8dAphe6rpwD6dLrVDN7NrFZLs7XfmFXmpXE9UvVhKW"
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
