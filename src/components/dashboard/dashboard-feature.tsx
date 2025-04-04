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
    "52muaayhV2skHoPZx9j3jmoV5LSHxLXGbA1jDTbpPotGp5NMssVt7xdmUFnVEaUi7tYWStKb43PMSi5Xsp1A2oRm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hcaKcq5w37Xp1BeNiefuTVj5dE9k6ZmRtteskrvefstynEAx8DwZxS17cTmRPNHzJt45Jqe6GFq1bQWnCTBdWuB",
  "key1": "3cGpu3sx8uxxfBymAkkcRF24NHjm2WGmqgVer9zRAsjwAVUY7xfeXkCFh7j3eorzKSrPLVUQf6WUTKrTVJzKc8s1",
  "key2": "2DFJYm3yJpV6Pd4tNf8mt4tEDngj4Gr9uVaZJkHuSAgFJjsM5oX5XVpE4X7z6eA9yyURCLg3RZYhBQsJsTEQKCv7",
  "key3": "36bX4uZ5x7skiR31pkAdtg57PaEqjk7ce2RuwqZwyvVWry1SwwnrChpxy13gPzfddWtdbsb7VceUf7d1g7xU3XSg",
  "key4": "3zNjD4Jgs6b8YRfLjYbWrDt3JE2Dfub9eQF6khEjsirNHFXpSm75MK7QRufEVvebpqWQJ6D78kwqqDwWhEJxTfNr",
  "key5": "2hFvMabo6ApM1eevisJDQy2dheKsyZ1tMvitgGqAZhiDjhMGjE9h3jScjikAQTU6GAyMgVFDm2fXjdJ7QWMPLdDi",
  "key6": "H3NzuVJM27Fms7yYnsJNsETzXCJucFNhzNe4vaPUayaqdS4C71QZ3jz4TYxfcFqUhDD8YSF2U2fZ5VhPHAopdYy",
  "key7": "3YDFJdkRkzxVtbcnTF1nrUPqCMdCLoiuyUwHF46jM5DVErnbwp1UzeneTQPr1wMscr3ANppZv3r4B3dkqJhkU7pp",
  "key8": "3hEDvnoVseVA8nvFCvkeGWN1es62S2NwdfCudjmC7BqT8NEKt3EeWv87N2hdNmvNXhkNgBowuRLBMtYbPQdkfSor",
  "key9": "31Shzi5rK57hs4NZUW1JHM669kFGuaPatp2TykkDQX8qTopPBgFHUpvyGp1JbV3QeVwar6rejXJZ7h2SWcsam9o7",
  "key10": "28dfXc6HKkUCRAHtvvm2tWvb6NXcEmPmECEBsZAYE1bR1hif1WfFDkRFzSti8yQ4KGxLiBfsBAcTxBAbtw6eRYza",
  "key11": "3X447GukSE3kxDX3wCDCSpPeqtiFuji86aizdhkLGytS3F41AbRNu8vx8MJkpqUR1DmW4CQQ3Q4eXvbSvxkqFst9",
  "key12": "283CBCQj23emXaYom6ZZnRYiibf1Z5En98xtn9mJ5zJcHkLx9BfZ16xfiCLfP55KJhX6vhdrXY4Bm84z1BsuaQdS",
  "key13": "GFtyyGTTWUvJFxwvnLY4ZJsLfsvtAPMX7nhguePkJCE1TRG1x5FPcc1MjazvjwD7tuQwRsgMzzJnDSRQRBPCau5",
  "key14": "5oJZaz2euUBevDnEnTGu6k6raGLhpSE2jDPi9no1obxpjqtNKy2RYoYixzPBZMpdBptSk5C75FVK7ztH41GxRN3v",
  "key15": "5mUkRBXNYpHrP36VoErvtveZj9qhet6ofzzeigPD3Ub6qqKbwxZTNYUu4VVzANDzUKG18c9v842qqkQHecGdnJYQ",
  "key16": "31h3bm876GUDiorjgeFtq6ioVnNU9zXYQdX3Pw22cjhzb7Pjvoce4c7MF5cus3uSNv2SjHM5ngZLzXvwjqkUT4Nc",
  "key17": "5D2GinokMyNWDbAiFYAhz5uteyDqmPi34AgevD8uUDs1ib6XJgvHnVh6vGbTtJ8vM1Cg7sSWvQZbKCmpgLR8Sese",
  "key18": "62ewFz6drBjSfzK88u9KBhN7jou2QrrLQtecWMwDcFjXSY98goJ2GzaFyXb4qHJkRBYe9iJodPFEGTfHgxkQM3yt",
  "key19": "3GbEZQC1rkT9a7GeTHYD2ZfDqaChc4EqQDRN52UYAwCHa6wVnppCkBZ5WapbjydUoYvGhEnALHznA9zcaP6D2sgm",
  "key20": "3pc2w2cQgk9TcgBfGBwipbywkQr4QggkJ88mJm8dhpr1CjafupDfSdGJtFWZLGqJYHLuxjemSULeYfUowsY2tHKL",
  "key21": "5erdAYEQgVPxGofeaLteghduagkMCC6LfLe9B1ygVrFNQt6Mu8qgruiKamewWqieXnyVJXmi39UjdXCXRMbFnUCc",
  "key22": "5iMVB7wzRUkn5nbmmyezrrW4SufE28Ngd5DDo9FPwyvCbuQMQq6RWenTbQBVkHsJnwyjcKrqunb9fh7utPax1GY5",
  "key23": "xKXqopgrmXPAUfQ8ookXPvXwe5Qf3bARuYWcvKKvjLqgHr4X6BXTAB3YAaW7XYuTDT19vcchYVccY89RJV51b9p",
  "key24": "5viiBL488k4PpXmiKzynSMiR8f7xoPC8TcwfHmTVmgf64GXcQuNtNXq8ofBT5T5WBmbq3fdA75ReKY85zMCBYFa8",
  "key25": "5cgzqm1FSZwDiTqHfB5h9YDGM2L6SFo5TZyfUU9y4go1tLJBtbBX8NTWabchgpoaUf6e8U7bZpREPCkjaYVrMzb1",
  "key26": "oxnQVMDf6Mn4RbEBGRcLmxwHJpAr6y78XVtoWyYV6XoHD3iJwE5BxrwyzfwSa2hG6k43PAGrmQtiftj5UNBEeBd",
  "key27": "33VbgtLdUZF4RWmE9Fx8VFS3D2nDmTTZwzhe1nZ8ww6hPH19GrngRyDBQmcDt4kzariEiUmLv1PSA4swBA7GS1EP",
  "key28": "3saGNgCZYc6P3FL8KXBQDHPoeiRvqDPxMh4LJwWLYN9o3zC9wudjNdiCxS18DksCGGBKZKgmA2fptC9HafppnYib",
  "key29": "21fr9b2xhNMWDyDU4rf27KSb2Yi542L3e9rXNEUE3eCqEUGv5yQUGbVJq7cRTu51kU1Lszh5JA4MCDDtFsHWh9dc",
  "key30": "56YbfyV1upmk8YSB69ceY5Bq3RyTE4Qo8RfCad1JrVSPSae79TBdwHJJpususaynhoPzwQBgs4quZE452Qn1QbhA",
  "key31": "5W8QrjFGAUEXjuhzYshfSgiWiA8TDN7N3bpgqoAAEvtRJpmPRPMQhSABKt24oQ4cY9WXT9ZrwJPGy1yvP53iUH7S",
  "key32": "UTXgFcySXg9yfNrQNy3GX4fJ3Y4wByRLnvGMrQBT3FfJD8ECcECuZYmwYwLrQUtMHnC1dQdFk5BxMnQDSx8krZS",
  "key33": "2MudWifeSmKas7TMkPeP9767XnJzN6zZ9PfzrvtUZSeo4T2XPLwV8rwbQkkBdL9XA8FjFtbYc4hNjKokHYfWUzSD",
  "key34": "3jH3n1eszVzUYrPozyWGFw7z9jxxQsB2YZJhD2PydYshbjsr6nJS5TuC7Ftx3UVHMxLs1bvS63QTcLFd2FFrb4N2",
  "key35": "3MVSnuTCksdKoZhD5Hk69hujbW8u9vwFhNbiE29DRmn4SvruG1z2eXNZCdQm126zVkWGincpDXFE38tWm8tuasWM",
  "key36": "67Cqy1n77f1neufo1v49eneehB3PJsRNWg2n5WZeStsjzBSUckyeHhaG198KhRmhdVWziLCDR5dDh4w5rVp1StwA",
  "key37": "44uGcMgjhMJirvB9KsvZNkKHS7qEmaNYEfpYCtzNBqLAaKWhpJ1pT2H9hQdJ4gSC5sXLqWUkaZPq3mxCn8xA99ke",
  "key38": "2oYZUYVgMtTeANw7QcZzeh1U5Dotj59NA32KLe7zvWSSQrexSrYiHPP7VrD5H8GWtRURVQX6xMvDzDu8eGA5a1ZM",
  "key39": "DQzwFGEYy1i2Ad7RefX5XAivhfTVywbAaE4rAtiA4VHXNCTNVAUwGKeahNCwJpsbQv2wiY1GTp8FerZuoD9r4EL",
  "key40": "2wGrMWYZJAfsn1FBTCNnyFCKAKhmgViSpmJ1aMMie1wAauozd7Mkjx2Z1Any9GMdgrZCzWrLqVeRqgGkW1uLYVQk",
  "key41": "2NqKqWPM38Bd3KHtTeANsL4sibKbg6Neb8oW5MoJYwwzsQ2AAvcPKTqCjAnKAZLw83QxwUET5UoYy5mifFLgzrV1"
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
