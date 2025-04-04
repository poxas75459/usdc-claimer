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
    "55ofXwff8bxWdcQQ3odir97cyhMPnHoWp4SSx2FmnF9bGK1cG76Fa2dCnQ7h26JeczHa3G9NGS3QhZ7waTCm5XYk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4djCpxTicibwdX98JF1BoSnGeWZwho9ZsZ79QEsEqTUJogUCd88iNLUsA48F9b6PqjUWYFRpgqm9kQQ5S3ns3GEH",
  "key1": "4nKsm6PQRrYRiMsDTN2G11weZof4BAEv1isHExrtorjxHHSV8fge78whKyUnFUsQkK7wtRdvKCtjDbYtxAUpvQKi",
  "key2": "2WdeKEbZcdK1N19m62q2ZAEfWe1ySYZWbSgiyHZtWxkPQ8ZkjvbbBgGDov3Eui6J3iZZM9ZTeiStyx9yRKG9MCDn",
  "key3": "35eWuQ1yjAszZvi3PRhiY8L1VSV6jW7vUJtjmWaEHuAKQ8DXb5oMF9yuNraKZMnHtSQqhjB7Bkzq3NemUGFfUAyK",
  "key4": "42gvpfbpjoxz3nAJiermERGLULpUZCkUpWc9umoUkLofHGoPNJDghyd29wibVGRR8J2AVLuVsnXofZEjWTjixoPj",
  "key5": "4e91oWoiAFUs61HfENuLx4AbwJTxTp7vEsRKnbe7BSPpUCp9bicKeFFSD5xKphVoW3UfBpERGP6txqkVbx7Q3FYP",
  "key6": "3rtAzJ9YvuC75YdBLcY6VqggPpiq3nYpK82VfFRBbisuYCqs3qWPqxucWVoLu7pBYAdnAyH4v1QaFBdfwyyBuQ8V",
  "key7": "5iPQ9v93eEEPxCNXv9i2EkLdWwsAKG1SfaVBjxU14fA5VwJotFiVJyvBvJAZh49iv81aMEe1peBkZ6riNCn3QFPQ",
  "key8": "bTLJ8oQrLpj9pyPXZ5UXJt3trDwq9AraE3Ug42NWtt8aJ19zD1osHfvhAG78ap9PLrcWAxb7cYr5AEaARqAQKcR",
  "key9": "2SfNmACp39YTRwSpNAf8jNaLKQ9LtR7hF9bR632hRm4B7xrSxxCF6JgyhRkJV3vr6cWeQrwi4FcSwhDXYjPCr8Mq",
  "key10": "62kmB1VjDNzm3niWEahhEMhL22SRVRunmHGKHeW52Y38YHz1o5T2XRwJVfdyr3Fjq4o8Jq4GtfuASJZidkRpPrCN",
  "key11": "3u86ed1NDJeY4iWSxpkGwXGzDxR8jwCVbcKKX6xsTEP5osWRM91j958cNeJcPJ9E7F5RQSzYYYTMiciCZoNAUCcv",
  "key12": "5pHKMfsdzmdfHQGxxLdKEV2zSAQARLiLeXm5THaoUAaTKhPNjHYNi4Dp4NVhkuArtQXchRBqWeKxJjTrn8ULYvUe",
  "key13": "vJFkjSqYjsfNswwEVsBdxuYvVmzBEUVcCPjacoy3HUMwmFKj4SDa1HNtKzDaPe4ouXYM2SavnfQGMJPVmRMkRHz",
  "key14": "3sw3hL3nThRYCc7HJrxYojxtasW5GmLaMPd9JKYTcgKe2mwepxmT7gNqJKc9nHA3HVqxSgq7Jusd9xjZsS6WAqvt",
  "key15": "44rz6UX8xpubvRCnaaupNWrXh4B8QMbrCzDCrxKjvPSQiM4xkiCddfzZnY1bQYxsE7cCsiME1ZxapUbWgX98aCLW",
  "key16": "4L5s1wYsaafQFdVu7gtcUKW5HXjc6Qe3m6k37j3MudX2ZTH4AjFkxHznP527J379cEDhQTggjWGgSGWppXLQc9PE",
  "key17": "3E2SzHefT5KpbCy4nuhw8r9ni7S6Q8aDdUA3JY1DaTJQww4AFaJGmbf8eWHbAko6irgGfwf1gHEWcdaym5jaRZQ8",
  "key18": "3LHVXJJE8ms11tuj441gH6bD4bauCLFueHBKCobZxKnuEkf6TtReN9tDpKHJjX76qBHnPkPiLxmA9byZojQzfwUq",
  "key19": "5xUC8YM1hnQHpjBSesDARLfHjTq5tQNdAatjAXURkoCjfT9JZE8oBt2R58YRfzbS7pykCBGu873JRYTDhGRgd15U",
  "key20": "4mxmDS5VBBQMyMSNK7F2SkZ5RHxnN8cS1nXqfnQMy822KyffWzeuzngkCueU62wDfgvVBdfzjk15UBnEoeoMJLDu",
  "key21": "3BsQoQQji278QWwHueWfLFd9uY2sXhtDFeYR2peJrEor8hmyULecLbQJmhNCTaLNegKEFp4HLDZ13qmbVsbPmd9j",
  "key22": "5N2oLRLv5psbyYexPJdbS1tBbMXC3deYyqDMqKvPEkHLQ6ducBHfYXFLL8JGVxeCUsM3EPZYHwLeSXWZ1dhjs22c",
  "key23": "QsXRfjxH9QatmCBnyhmz656z2THayStD8FgbZCbttjdYNg3QtdFWstCQBkaftpb3xvRZLVXfrRv7azxYrso3BsA",
  "key24": "2ZE15VMiV57Po9tDS7CdVoitQtwsVfyaCqLLP6TUHwuxrpmEc9G5Nzm2E2hEQGJTQjRiJxoLYiiGv5AG1SVUCMuB",
  "key25": "4uCgfkx7ZbsBiBZF4EF6hpJ823E4mvja6rUjm5wfu63RCbD87QEMzReJotNmnWagKuJRnCdvjdUtccV8Dqk8uSAZ",
  "key26": "3kuX7qzHVWPCJnvy3A58YajTXxuspgw1LNmXpbHL94cdKErq6CqLwS8UUYC9j8ERQnipLqqXWnz11q4NBRAB3FzF",
  "key27": "5uuQU444Jj8VwexstpPgDowD6FBjgw1A8zKcgmFX9fwqjHpPG6EtySKwQT9mbLWWofKkY8YRquWuQHKaXmoTAZNN",
  "key28": "32SdGhL8DSQyHaXaQmuZj4ZXmnyDp5cpXdAYefa5rvRrAhkpLTunda5q2Rxn13eiJY5GggTqb3Zv4dA2gVYpTCRZ",
  "key29": "5jxXHGRVpGcZ9ZjggzAnqTyJPVP5ijKcbHM5wTx7R575Z5bWZCefUp5Z79P4Mg4Nd7siG1UVGKS2U9tiLTiQkNAw"
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
