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
    "5grMNzXqH1aUDAZ88h2Wgzk8wiaAbK4G7aWNcRbSUQ6Pxqo6ndV6MNaU7VUA5htdmoUtfsZMvWgyBptcFaEee31R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42SVG3QWvz8qVAC4Z2SNNfpnHmdxdD3n5roNX2wBQpvaScpVm7VYhki6yeqyaujR4SeFi69KV86XJyCFUFJu37yB",
  "key1": "xmrwFvRMEJpud4ZY4znbphwnEbefye8Y7PX4NzwNY6MLUcwRK4gR9FCzXj7Bo9DsjskVUZSYDjcfeJYXiHbKvpd",
  "key2": "4ePYQcULk5cRSpgyAe7AGemyumN6hxZAtT26GJqh3517rEm59pRyq583DLYBQBU2vSMooLmCCXT7W1xqdPDuU8kV",
  "key3": "4W4bWke2WXvvbUs5FNZU4zH8DtWRV8N9Srsdg51toMbWxTtYPygMmz2xDm6ZdxTqgDafGKiNX8sjvai4n3GPcBz5",
  "key4": "2oM2nDV7rwobLREjLUXEJNHQ4cMyDE2Lx2HHyyv4t38c3KtFnBTMKNaE5yvxqV2VbYHtbK1cJM1iPMGMMjbwiB4A",
  "key5": "3TgvVZajriqQrzkWHP6kE38q1ybP8Njq9JeC4SxeUxTtJH4uFewMvHTr2qQjb7T8fGA2U2dU2Q2JgvgymgPUjuKq",
  "key6": "4Fg2CPhjLKHW9TG2dEPMmwHQwZo2q6o6pvQppeeeyF6uHMqipUpJhN8cBDmaXsKNiCZ5RnBJUS1Tvp5MxUs5svtW",
  "key7": "41mcFciJ9fbPN4FVff992TNXXabnneL8XFZpi2YHrh3nnhS9iRE6mEkdL7Pqp4hmvAzn93hbwdV9RkB9EdeADCGa",
  "key8": "247ZHnAaWrxnnUxLdV7zEyahXd8EENDemi9tUyEGfXuUipDzr7QoTBs7ff6z2g3tiFdp395oYWgCEx68iC4aMcDW",
  "key9": "3EMtMmVy9msNqpNPx4ZDAEL8kF76oLcpXJCWRnKQwiBQEC8dq8iL5cLJPd5xwPkfJaUvnhXHf1if2ySdyU8YJjSv",
  "key10": "2yQfAxbwbQKienJN7aCbuS9E5Gx2hGmJEhSputD9Fepmu9Rf6UKhqiQD3kxvN7PqoVG4W74Jq5NheAzFHA6wTMGH",
  "key11": "5FAqdtTPfqwKnYF26viQETS3KVj2jbkewiXKuC1iQ7dYtAkhFbwBbNQX7Z1vaTxc1ssyVrpN2npUJRv79ruSdHf1",
  "key12": "3gxYemg2dLzJXJqwHhuZRhxJ1kJYJrrAh5QLBUvJKnydDUkSZeBUAZEGXqyLwg2XYkkKCKKkHsYqMcsid4eGKpM",
  "key13": "2iXnWDRHBSiD2oex5kMkUtBdePaCJFkp2qxE97iufGcYFUSCRdBfEwAqVzxrr1KihgQBtvGcxyZ8YbRJFaw4b1sn",
  "key14": "4owoe5NjDscK1b294R8HWGwV8PCDP33RepziHokyTieLa8LqGxeCvEdvjLp5JwLKJUTMNjqfhqjBA3ckBE23qrBB",
  "key15": "3g3LABpfztzgkemizWJvCngST2dGCDn2rFsgSP7NCk6TciXquY3pSc8AC54RgRPpxHQXCchYq9iDrkeDdgWrc1QM",
  "key16": "4KzCSZgjd65DmuqFDXHze8Wi23ipZQnMKvprwLpGwdqZJgYMWoCGospqShbnhuuMMqLSJ6JxPi7FsvHKT37fWJNo",
  "key17": "2fms2SNJGWbEiC9xQKppsEDuA76qypUFadd5hegFNc2Anp7LL7z4JMHcYvuACtqHwYpp51aiqwVUjJxbVN4L2Svv",
  "key18": "3Lx2ARY4YpV1X4yc6Zo4ysAFeqqheyq9fZTxVNWN7F77vVFAkxQYcLgfqV5PhJG18Hot97DG7eknCEUrakPzbtCE",
  "key19": "61FLKD1QTBrLKnpiwSunHzCPqQAkkyRiwVN8nXnMUVQyfgdkihuYgSh7rwv3uqH7JuBM4k5EU3FSyfodZ1JVkJbz",
  "key20": "2DHtRdJM1pJuGXadUpW8KwApzsuHYE9eQgHaaPTBPurTFhbg9i5Ld7xN6ZXPbcznsUGqhGBeDSXHqHJbAZMmqNZD",
  "key21": "2F8vrZxfQp9NmG3BJ5GZLr5Dde7W7khgVs1ArQa1SXycV8ZUtNVyiR8p28AKGxqzaSEzYQDMooaxQmGaUPopyh7W",
  "key22": "2ohxfgk1qr2mywtM7hYgxM1GCHpQ7iDAc5hzUmUghdUtMAyXYN7Pt8j99FeEGyBjuYu5NXtoDXn27AfoUxAcXQez",
  "key23": "4CVzrLgEFJCbhXQdmJXE9disT6VX3VpeKJsTRoh31YyMsHPshGxhmAXURuZhwtgcFZpeEHe6XRX5DZyuAaotkXwT",
  "key24": "5KZUKkgM5bdVE5DZjNwM1DKx2A3fAb4zxKXnrso5YtSRRtQXTBZdxpuNaPJyDh4TWj2sxQVVib3GQhQydGTcfJia",
  "key25": "Nq8hb66wXVZfHVSP67cgzkiD1n7TPJgRodwbzzM6rzd7azJMKUW6pnGzzYZAhEgY4tdHFx2vaMLzrj8GsVVko5Y",
  "key26": "tqPN1PZq56iCDhCwmPsqEpyX1yePtXnmRdY7idvkBiuZ1UbqScZqPsbhMVoyxd7E2DGMkGYC5YgqDMUwpUdsBWK",
  "key27": "41SgMsVj3MgW76vpx41iLYp3kY7dmbGrmje6jJ4GcDiWTPyxUzywba9GksjSk6F27E97YTL5K29MrtrMpBtiyPx1",
  "key28": "3LyPnkimYW2yDBRYKXY8sJXeSbDedGsXqJw9Q3WQF4qx2MaxrSpu4S9vYGj7WyvfTgXc5wR1dtVU6pexGRhDKfvC",
  "key29": "2i6VT7M8Y2hhoPaFPt7JeeUPtuh1eF7gvyhfNomrF2amc3JDKe7meHAbuZfyBp2ggEN8DGBUHkqaX7Gdhai2G7ej",
  "key30": "CB9JnvGer7u4gVjp4bk9ScwKQpgCETc1jsPykbmTtMH8sL2YQygC52UtLyfPX8JdWiiFshUJVBJm2pnsUUAknYo",
  "key31": "2yS6Lf236SMj9YLzjXDptN19AWE44pNYEPLDw3opkoiZFHxa42VxvGVqBwXyWoqZnA7yffjiyhf9UVyuutJ6A7Mk",
  "key32": "a54AbmB9F4Vb7XskTqRdqNiH13ciNuB8anXmUnHK3Sx2egTQTNuTBi9PiSKPysoQVSy4PbgZiGqn8GRhN9Sq49r",
  "key33": "2idBzGcm36mep1ndoghqYm7vAfuFteNPM4f9NRYaJGmmNz2FjNAVrAX1SXYCoyRGPsDaPLx46mbmTw6NrLKQvYks",
  "key34": "2QHCy7DcfuFPoJxbjeGb5MxZFZfF485nwDTfcZC17yRuttbPmhJc3c8BBKCoLhbUgxQij7mpThsFp9y6eKkCt7is",
  "key35": "7dDEG9hcS9ZQhw7XsAodJKPXL3Q5uztVRetwhZ7Yrb92BXvRwgVTRjnHiDppz8W9zgk99Dv7fkA7XTPTv8vE5CJ",
  "key36": "2SepYMuakJCaQSLuYv22vw9a8BrYUfdP62wPj41iz7jNxugYDxw83GPZER6tTYyEdsK6tswjv4iBR1rnLvF2W6eT",
  "key37": "5UifuMQUNKrVRtJBhBKDk88VKY8cWWSX9XiFiBDeJW4soHAHNBewrNsW4jkWdy6wUMf7ARsHhhMFqW39uzteM1xp",
  "key38": "x8CCsdwBiTwCSWy2736XWY8fsw2tfnH42zAo6mJ1jsJUYDcFbgSd9SeN6SvNV7LsyHiGdGtDntvWuAjCGiaXBbU",
  "key39": "4Qb1hYvXqserU75eJpFV47y16ieYNgcxJrS8r3E2TK5hKQFkZFf48dYwT4R2N65LioHt4bW6KNGfbXQ6Mwxo28ER",
  "key40": "2D7bqMeNHJRcVQdmBfoT3cJDx8T85dnVs4D3jAbBUqhPz4iKYSBLK2S1VAsZAHcWqnra5L9T8nrDV19t8jWbdWLT",
  "key41": "251iW9RtdhKYm3SrhfE8rgw4MbhoX4yYSDENvvLmG7GhbXSYC8EMAUYMi9KRERhS4xuDXWzG68QD6B7jrKUsvm5A",
  "key42": "xFiAc9qP265NHy4zMSficRgYpdNSsRdFLLGtcJKZFGWLUfTeNG6X1GQaiKcwAUFpimKy5MJquvwfPBWQGACZQa7",
  "key43": "8W43ZgqE1mbb6mKamao3kXWFP1tVQXhzrbv6pxUP8J3p42nv3EVPbQdqatCdofETX179qyQCBGDeA3rPLAroEYs",
  "key44": "4w3PJBYkr29Mts9z8CamSMhsF9rPPN2nvhJrQqaFHBWdc432X4wK4fuHRFGVJ8xYZTYmeQcf1njFo2CNWXnvqXs",
  "key45": "2MD5VNko1hoZt2ouxqDxgWkmXMZP8oMbj8PXNHyUkpuCz9ksbsWq6KwUCBDRJzgA3MEzn5m6bPKCd8w6282hhfRW",
  "key46": "7pHGoqtHW6oWdiaUsEtXsdagbVoMvQaPvbPQeAqSMWv16iMGk8KWE1mwW5qWUuDYTQvAo3i4BCLpke7pJnoboFe",
  "key47": "4TmZASWyzCTYBSoMNiq9Z8UVzyBagy4sPDrSP115nfrN6hne3nRPTtubH68cRcsPDeTMP4abAeaxkEk2aGuS5gVP"
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
