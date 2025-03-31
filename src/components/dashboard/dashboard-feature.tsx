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
    "Mp8N65hGpc7QQAAf4UTq2bcusSRur4w8DPyAf8yoZpjWk4bTMJuJufXyDhS2jziu5KDxuAPAyR8eHH6DEZ8JhyX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mUFxTumGoQrAMG7WMZnK3ksoTih2mAWtB9hDNVqiKGkqL1t181WUkpzfH3PgW3ZScJExyACLAE573BjNjVsLnze",
  "key1": "3qygpJ2gvVko5hYET69Q2hFdKMjU5cjhnohEHiVGzD5ybNCMYP1g8YS8xxVCKjSJrrG3e65o3mbzf1Eg9jkYvwQ3",
  "key2": "2UEEhuDWHjzuuuEAAF7JN9CEf8hRANa9hr9htau9daDre1F1iqNDzjr9NwcxsqNCSKWodova5t1NvvTdLKo8Bvod",
  "key3": "DHSFw1AdgEuogpGnULyBZN8GfYWiVaxax8JP2skckrLQ1xC2C3a3qoaxZm8YSGedTFYQfP8JKh8NbcCbyzx8Cn7",
  "key4": "2TZ5VpFjQRmnMsQEEGDkv639CJJycNKEsWgK6rg5jDRQC72XaYixoqAD1F17Z68SHazanzWU8hqEsYc95pwrKktD",
  "key5": "22BH66SzyZox1bFu8GZSVJRZXQxKCR6mkZdEhrNCqujBHde11h15kju2E43kyiKff6HGVi5eY8SGif43ZnsGUikz",
  "key6": "5rPnLQgrV9szDDySwTMq5oYVLA1ZPrRQycUzt6evnZEoKucVLz1PmpieZbeJZq8ri1PtAJbNFkRsRkNHKdNCNimZ",
  "key7": "3aTJKn5UH4D973EWSqLSEUrzZgbAgMxUN4mUY73dUERPBZ5hXpbKrBSr7keQ5MEaG15SSnyTniU8LeGmBVkTbtFN",
  "key8": "41FBqgiAmYEpijZUC48MDvDXXRfH2Vv6Lm9qMf3bqiKZNsbtyEz4XqGQuW53EromVUKEkhA2jjNAU7cekfDmSJ4",
  "key9": "2RC3ZWsE4JTyV6vm6GW4E9wvKN63KFKpxTwd1bXvuCfXCPqqBx2qof63uEHEFHJicN9d4cjUpLFkdVnERYKNbMfY",
  "key10": "4uQJPNkQigh68fpVtb5GYAhDRNScvdtr27j55CASe1hNFXbsubQUBrRZgJSy6hdxCQdByRyRyXc1JTDPPYzoRjUC",
  "key11": "3Pgm9hMf3wo9ZrKdGzgMDshEv6pDJbdnheZ8xqoBS4AxSVtormsaghXwnZASNegnZ5hWcrYbj7bjfgUjHtwfzhhi",
  "key12": "2g6SswzYfdDSUgh4kh5gcExKKGw1RB4fAYhUCGEeShXy4GLLhtWRnetPgp1PAZ2ArHoJfHSTa2BadoceTuJdiai8",
  "key13": "2zKtyTNcZ29h2rvWhKWAGUBenKM2NtynYRKxiaejZnzkqUkLFAda2qMyUsZfbWqSB2RXenJ5tKMiRpLcx5ivjaKt",
  "key14": "5rahKAuRMXWR1oyroGUJ6wwR1HeWXoCdw1tJrLnCYoGbufJNcht23PyTCPziwFamvWJJfV478ptJ9rDeBEhp2nuc",
  "key15": "wddWTRUmtiW5oi8vVhB7fWfbUxn9cxivwcFRBqZiNGSdRD1UdS1EpX2NqsGN5syHeaLVRaTzWjr452tGFWd9oyF",
  "key16": "3jTydyiHTMndFUG1cPw7tHLvVAxMJ8eMpVgmpFMq17358FcZWSSotshUTrhahoJibUM8p6CcPCCZSEtvM2rSnhCv",
  "key17": "5t51oQoAM7rx9ReWo71pFCBkwKukA9TDFHYycKSSewXdcMjuxL26fqRMX4SBtHNqCam2iQGcc5wM1DjU1pLnBU37",
  "key18": "4nU7phtx6JLXN6UVaqEtsQvV2cF4Ba8xjd2iftsX6mrp2soGVkitEqc1cZGvzfS5UyVk9GZ8kYz37ZXZugfVDwLm",
  "key19": "4NTgbUS7jx4eGQUb4SN1i3RamnHpyLCxb2MhcPLhRFYP8C1MbHNiGyNBvjW4kn2osLWPqzt1dYUgEJfTQHNg8PnC",
  "key20": "3vDGqiab9VbVJ6A4rBkE7gthCerut8BEFNGLt4AbAh2g3YURrpd7xRxavAADswMegM8qRh9DVWrEPufRAWLFw4z9",
  "key21": "Hq664eGsVMqzyXeJV4ozJuhdZK26uPpJ82KgyYyybjPUxFFwLEnDp3PmeDHqwzfnqCFnroErrmWkEjQoBVS4HjZ",
  "key22": "3WqrkR8PXuYXmbF3T4wfSZRDc66Snoyu5gdiLodqRGoPji155fQxoQ6apwMk94GNY1oCd4cHEzVnoTp7nYiMuCck",
  "key23": "4b5bGiQQp6YaLAUjtP22sgcTjF3owSgPygznYQnyUt9DWXw9uHvfEDu97rSj1u1Bijjq26w2oQogzDMMB9DDurJS",
  "key24": "3AjMuPjkjEoHrNPkweW9e1n6v7cofqBxpAePxhqvy4JCqxZQYbvnLExj8wZKp85ybGTSsZGsT7fBcVfPY3zgSeAA",
  "key25": "kmFwW88tWbfXQuafAKzKzxcNdPeooU3pKkA8gmh8YXk6TiKh1yVgcaspSAzqJrZHXBfbjdiwJk27Kwr9W5Fe7cm",
  "key26": "2XhKQCtscvFQEfdj3m5rDgWF6dmSrENjXKMTHjGudopTXuCHBx2mD5yGxNJDNQcQV3z5Afotn2qRWCJpRRtpoMYH",
  "key27": "28w4k9cByf51KgGjX9nZGdUa7rtnEQm1oFQghQzi5VwUbqjpdSUJnCSrPYdnnqYvg7JiqGnE9HKMdH7MUBs9kygf",
  "key28": "2nzos79uupRt6DiNw7qrpcPpdqkmP4jwnjePZVmKeF2H238UAWssNbqz53JVekvdfPAw1VjQLGRodDotV9ePZ8rh",
  "key29": "22bv4fv9ja7qNSuagp4MBmbQ6AWEZgXriu1h4JrzNVDRx7ex5u21pX8mAjh4A53B4Bj6ZMKkx7dnJxrimbRMC6wV",
  "key30": "2C8bJjayjtp7M5qnB7n6HLwseQT9fVbPCwU2FyNDmQYrUd7F1n4Yfi3cZBrFmmUfAxCcHrsjf51mNkrpTCQTXnZJ",
  "key31": "3GjCuRbJPprPjwoV56wr4EJUG3tMHjwLFEaCDYwyhzvt5qYHn28TTfVCfWwffGPfn51aRQfAT9DkGowVRH6qFKwq"
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
