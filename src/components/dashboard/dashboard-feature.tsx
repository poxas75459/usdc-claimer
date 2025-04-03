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
    "4YmsKk6MUEuiV4Hr2LzyBRhYWXLy6BopZNQezbCjRp38ZokSqAeMX17yaYj1hQSPDCbkPyebAnovQxzs89oQcpk5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iNgEBqT4zYCVpR9WuJBmj1y1hCepQ9XnaSVLsGF6P2ereQVa3bhbYd28cVoMFnRfLPVuVJLgQbVrwKbfaSae7AK",
  "key1": "jrJ5yD9BdGqNeEDNXHLYD2DGSoxQPAn4aWMDKAXBd6pjuaAHW1ssgPeDcVtRhS4FhCHVEWYmqsL2SuEAwhiCYgP",
  "key2": "PGPB6NpFHBXzApaRNB5UKA2Xha16FcUebQfzm74M7QgJSWcLNqkzCjDdCiWPRB2iq7zH19mZ7cJanqpmWgGQhbW",
  "key3": "2iLo7HJQGhpiFc7Z2Ah2Ve5o6Xi9SGJsEkFHn4KU5WRDCJr1YQ8KvJF6ZREQau6EmRqy2piHLjqGkzgMVa6eY64s",
  "key4": "3FagcCwVjftHZRGXmNbzrP2X9TUvqxU1ie9K2V2tWwyXRhCLNYd8FRazkZNgrj2TEK6j9ps8NN5TyAFhKSBq8XPi",
  "key5": "235hbLcKdr2oEZRXmUHsNdRoFeaEfExAJMAvmpesiCQqdaCPpFReNzuEbgKWSVSaDj8roqirWV3dATBMZW5fz2BC",
  "key6": "42MvLg3qgtDnrVfzm2uen6bMsYNLcg81BZLUbpv7qUZsF5mq1EQsxui69FGdHwrt7Xzq5phTjSxzSPLPyHFQs9ea",
  "key7": "YVN837tNfPEJwPTCLgUxxEZ1yeWedMr6XUPMfSu1BUh4cEuK9ZQUXcrTRAsqhQ2KJ1imxMNPWyyGtUsbGyTVEDp",
  "key8": "2L7izguXaMBhUb4JkX1NanKXZSUrh6eEpSyVcbTGpJJHq6yV4KbUSWGYXkmWd9gkvM7vkyxDm6f7ZtxQTdW4HnhG",
  "key9": "5r8DtcBtuvu7BuPtcF2zHEoPZw2FPyBgT13EutfgiTqDUaLw448t8pNgNZSmMtq3Gtdie9qWDoAAPQrmrB3tLyUb",
  "key10": "81HiWTvD3pNgnKKuuwffXzn21JEc2tMLTg3BxjhNMR3xtPApuVmmS1wWBoUZotcymXubxUsEYhbxkeuzoZ5SuYh",
  "key11": "A7PEnyV6QDx5JWB4K6AgrH1Bsej6TGFCCePXab1vA7q8oCz3okJhCMir5TxeH5uEtbUfXD3qzAdySFMPYXzEyUt",
  "key12": "2udyn9NHJbRpRw7MzaqCW61AfY6GX8fj4zj6HLrxiAinRKyjpMmMvfAQpx5pGdgMvfbh6WXe5aXX1hSaNTpcwgYW",
  "key13": "2dfpBXc1ED2oENSExyMEnx1Cr7inGrXHgeeqo1RpzAzjBzNpmbHW8ckZBFczSntpm6xg94z77iCCjg6iZDXHxT7g",
  "key14": "3yt1E8cPfLctDbES1jVbKLSqosQgRBxyiVZgcgg4jExXghwS26uzgQtmvHPtFBfMuQA2oqUonZFUMctuTCj3CJLH",
  "key15": "4Tz6yAmisjoGd9ezTukqqspMGBfy4VbGYuWhV3NPwrXAWdgaxxGhmjyj7q7YgXxTvWg22R2wWyNcnyTFByffCaEY",
  "key16": "2pfWmPr1832oENag5RxnrCCtVmuNHHbmnFz8TXh3Mow91kHtVFdSjWXisnPaHYk2qCfdu4qUGMyNwF1eaAEogpPX",
  "key17": "3WH9Gm1n2eAZYTaa5GhZLNwoyZ5CEYDRmE4MoQ8iR74MuTGkGS5y1hFbRdmLNGkuKbeqTFGrEDkN53RPRS1sQtL6",
  "key18": "4DBS9ucWaWw1uEQqHUKFeznLFnmNRt1tTJCN6bjnUgWK7F32cSZZy2hcpzGjCDBzhwrzHWPQQ2kEBMcRDhH79dxx",
  "key19": "4WqdmVtiSMcpmTL7bYfkd7pcfC1suNYxRtFBmaRpjQ5ktXUnxDLG9UDMX3CZC95Npgge4dQG4QJ2ycFmnFZ2wymQ",
  "key20": "zMhfAjTKa7ZoKMqq33xFdb2UXVpCqW7YnLAkAbNmyrw4GmExHDJsE4ugL7w7WWfw3j5N8GDLqLp8EnAgWGqk7Mx",
  "key21": "2j5fThWxhpNFgwqkxHvKPNjeBNGKKmPhDndETS3PZkarrCzpznWPk7tXwJ6iq5duJ5oz574Y7K4A9XsZoPT9d98o",
  "key22": "3tq3bxb4Sv1Aj8sEvZkFsGTnQ6DrQMmP6GK3Cr2mkTC1W7e8Md7axiKnPhrBpwVU4abcgvgfdKPG4W6NEc3AHJkt",
  "key23": "4dyjLNaZuphTVkpKbHZnCVfnm47wzbgw7MstLrSgztBDpwPYoiFH6H8DnQhpW7PhKRHF3qGQ2ovzXM8xGqbjXuW4",
  "key24": "bLsCDu2r1aKoyL5SaqKHmSM3tVnWhMpViQxSbKX8MhHFNkXKgYcwXkXDWVXqMZhtoWatfUpLEdqXzgqH7Y6coy1",
  "key25": "2zSiAbvzvm2DGGkphwBxQZu3KaHrtMsLJckS4x8dBzEp99Z1342CdEjiH2Wdvx2byq8sSo67fgCDKwmSBbTssHmM",
  "key26": "2eHweZ6yrNYC6EKtyuCtptFJkvQEo7v5v5vanCeHFT2HnJymuw7YJPwUURH1FQ5UeQCPCq8XJDsayRKXTfRm4v4k",
  "key27": "1FH7Bp8hvmHPe7byXhgy8Y9VdebHu5jdYPJd8aqyjc8q78BtS3btzrwsffkxKjsz64wvsJyjZwRCk6e5GeUzChx",
  "key28": "LxCz31qT46vfFjzYk5DHfhjhrFAUUPZL8txFXjhpyNrWqL53PFGP7jgayeeqaWJaiLar7bLhhS2PAafFDpBVy6S",
  "key29": "zjTgaFVC6Qz8djjwiMAYpsoUiuhzgdWUKMSoMCMz9ePoKJYiG6ViEawr5Mnsb9NfUYRPWJH1ALZwc5frUVLV2PX",
  "key30": "3VEamBoYd93QwLkJnjjxtsR9MKAdzVWJunkEEG9NCpH1JTPdjX1P6mzgsxd3BWVjXgfHPmmGw1PZfnU1MXSsutwr",
  "key31": "4yudc4nZsHMU2Ag5tP8vY8PXjnubMENF5Y3GijEdygitBCMmtF1PAKk9s4wNumoT5JcZYawMDAhVmvyYpiXNgCEg",
  "key32": "EjDMNYHxN5WjMrEHNcJ5jcX54PQVcmbyqZUzdCj1Rs2EETiamcX6EfuRwbATjBjrhjy97XsjSQoJTGYbTBEeNPH",
  "key33": "2KYpPw4zgrZwFwFsgNAeVHds8SYu1Q2DBWTmUGwjR4m8hyq7sggThW1F4916GcuZtpc5bLLFDaCNFiMmADcQ6jCm",
  "key34": "5JVc1qJrzYc93rcE3VV7yxnFijAXssuXx9g8ipsRiA5TFWWye3qpfM5BgQ2wh9ktkrVLAgcZByBKSpMPNSASpwJs",
  "key35": "3LFXntsQBDwxzqhdRSTncxH3qPvPWg9KneVGM7aMYvtmH2VWBMZmTLXWnPjzoTVmkpX8FPe8bEc9mqtvfwbboNdX",
  "key36": "4EZaVEx4jkDcDXQ8EmVbdqZSshykXpeWVNwQFwYtYx3HLYgBprHfurSvgxLv1gBqedPQ3awQVz4HsNE2imxEpvQg"
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
