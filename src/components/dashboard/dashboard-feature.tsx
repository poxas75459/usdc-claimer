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
    "dctsxHgNZeTdiNPErT6Ejx1c9FYtT84BcZXKshzW84fNtqgWZRpbk1bRieXXQg6N4gorvv6cTnUKf8YRrJ8QURJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pxCogkrzT3idZyn3hFKXhaffofnamcfeJyMB3jJxEPM9DoKCSDrxQnR3JmYrhJLmLgdtiGwUgozGiunzxzGpJp",
  "key1": "7eUaivkSEQj2P6zchRHWRX6jRGsmVDyUwrPWhvZcbMTGzMsAMytPEFNPJq71bf247ttDTiwcHAbjMxaH8edQBke",
  "key2": "4ZC2enYLVq4LS9wQaC2ycMSPUwwKTEdN71nngcLqXwVbJLuQMcYmcQs9aA9VVJb5wQ2wxB13uBvPwb4cZMH8473z",
  "key3": "33TkjDkNKu9kcTfiEw6zLHJspGbCeNZWCRVns6y1H7j3fac7LxEgZ7VtSkPXVFy777dLJH52GfsxraHzjnwSPbrF",
  "key4": "HjzCaoP5h4itdanST5f6VqxeerkKg3K2uraJng9Jah4JSYDEMcLmLBUVkeHMUFXvgwg4kgzhnxJVy6fm3P6vGcD",
  "key5": "LmCXhSVmp2bpPVkkMC1HiBZTuBVFkGv41XC1To3meQhbCeWzsr2nqzZYiygbxKi9LJPworcxxetJyhmpyBJjPSg",
  "key6": "Xym8eNxPGBHFf6E54SyzT6qAg6PkHGDvoCxorAbXzPM7D4DZa7ZNs1AgQTko1vZBVDtXUnBY7ueaCMXfkMLbkHX",
  "key7": "2Bo2LK8pTnjbUVXGhW9rsPK6bn8n6fJpHZxFU36oa8yq8XU7iCFW7cZcQWBxwVVV2dbEKPyoKRZhYMht7EtbHZ1X",
  "key8": "2sM3n6VKpCpRQZtinpFQaov2X8vgNyedLrXBuUNzoEbJC24Vj5qSDNid3tPtMSiam5GVejh1YBcrRrdvYT3tgUJK",
  "key9": "593cgzYU4YAqZnstrj8FRGpuEnjnhsHq3rbAcCC2to5DCpxir2KVpN6bL7AgX1DEScGqLRWwqf8zqJKAjhPxiHkn",
  "key10": "2Qf4aZxiwizwaBt21arStbmpG8Rh9ZYPqjs2j2CoSLPCMSvpmRTpVvkH3phaXS5vvpY1vXBdWkZNjnyM6LuoCyuB",
  "key11": "FBQ4sgSvjvXfCxHULviAwVEuxTxGsXzJsCfemxyf1qZZXD72Fc6mPrzyAcwiyKdvyctGcGfn9LtDVF87pQYKrAR",
  "key12": "WKWotAA8uU9sCiUV3rKagTGLD9DempSYuPbUorKTkGGjbWsThdeSJRVvy7PV3Yqnt2BeDoXMF6ipWLDmMFHqUg8",
  "key13": "2MhS7MELsU9Mb6hdnJQuTCaDop4KnCLrXvWvJGUC6v4RRYBDvUjG9DY9cw4TdMBi4X5uq3YngRRadxi5vmgV3H54",
  "key14": "jZYBv4KEsMaX99gTEBew348p37mr1sjhEzeCeRXCShY7E3pBtinfjmLsZraBEocELH6184skQoeGpD7Fy4AXpYZ",
  "key15": "23me2YxEyik3fuefLhJwPieWZo2MSQLqcmYxgi5RuM6QjtpDneXBXmYUB5auJsRDziXwGdU8n8w94wg1WtNDn1AQ",
  "key16": "49NSuDpea2mP9dX18TkztRPJknSoSdnWqS2D5gHbSLpdZ3QhGRhpcdQ7pbGvtSit4HWx7XEMwYbPEe1r5stZqttE",
  "key17": "5g2nRMVBYcMezswQzaazYoxP6GkiiwRZ8JXepCRRNQy3uHJUAvBGjRmBZ21vF4dEVh2rxAYwf48s3kT81YpJyRKz",
  "key18": "4oimxAmdWWoR2ziBRGULyCcSSYHoQDYZ2StsGpzvwG4q4U2E6YnFdHfeChCF3TUeA5StRQuQHS3UmgHFLR57P4Dg",
  "key19": "3re29N42eW8uUPeYdKwPmcDVUgMeDk4ySsT6hPsbobPju3CPE3HYNh6fkmyFkkPDQ9KykcpcKFfgwgDjFWKCimNb",
  "key20": "26DV8PiTnaJamxagyQNMdjAvE8DLd16KjQ1Xpgpo9Ucyntmgf5aUvGP8SibdjLYsp2Qtp9xNJdsnnE7CQE6bGJcy",
  "key21": "3CH5gGspz2XufGMswXA2ZnvinRBUggaQftwR4wHY3ztZ5pLKWWz33C3riT5w8XqiDsZoVQ3Bpk24jBZDurRU2utr",
  "key22": "5LDtAWHj93WSdXRUY2gxbjwZvYtG1wsGEs1R5QP9kkC5MVAFuv4avYyuy7HYKohjvnroNdmNR3nqHDAAq7DWgcfr",
  "key23": "3QUdYQyf5kxJJxBvCtHg4XHhh2d9ogesvaaSdWec37WPdz7VXn1oXeoVAidsj84bZWos5Zos6cWgc3972ALx1H1g",
  "key24": "3bJ6z7BinCwoxdxtH6k5pfWzkuZzv3CE8jgYimfxtGaL1Fje7AgTkqjkDqWrZzg9LMhgUA5bmUDCtKzv2hdbYAG7",
  "key25": "CtBKjy2BWeGryNMJJYbjMobrBRwHTC9a6EKACd9t69c7ZmSuYWhJSwkEkK2yNb4aonpiX8RqdxxL5fWamtJFt73",
  "key26": "28rWE8MQQphrbeQzUo7cPEqK1whCjDSGgHkJsE7StSbkc9RrsFXHMCWWAc2CucwbnUzL4gXvDAd2VkwXgp5q1Khm",
  "key27": "3UwxwwTQKasX3YPYsWeb5ybodCMT2wyG2rire7RmBkJzTK6B3VnAZj1QXcytzwba6XK28jsBho23BzCheLP1RQo8",
  "key28": "3siE8iL7cp7YNb9w8nqW8DwPSBMnB4McL72kRagrL9CiCB8c365nqb7CHQtN9F4N2FDvAuB3FZVmdRFYenMTZQ2C",
  "key29": "4FR7UcdgMFrtYYBBfhR8SF87STUQ5rFZoo8DmeRdZYHij9Tfu6h42q5yv3xCyPnGkCvdL5WP8ATJoLr5bw8XFNZL",
  "key30": "4xZpXAVwwKmqq2a6bvm5YRx1d6u7K3zJeT3vU3UpysJ4mebkuShNYaDshAtKK7Gk9TaVXBgqtywKei7C1yGNLRcE",
  "key31": "4kFMbYhuUdG1KBmD3Yot83n7j29hKQY6q9QSQ1guFnFA9SyqdvwPGQgcRD4MtpLJUZYcJKxdCVQ9rxmeDVTarfER",
  "key32": "2S78mazE2qxemVua1KYLx1V2KvqBsS2QYhESKmhX96bLL5aRQE1QEwCRiGYuf6JKbzozVNhYzPWx6zBSQCQEPz6Q",
  "key33": "33a7FbVQ9CNpnhAVJNryKg7JunRLE1rEzREEsPoT2RFyHC2ZEnQUWc1ek8AwMTBrnV1VPWeVjw2BRTowPi8qevZi",
  "key34": "38FprnrvmJ6jHMjQyJQ6rVHvtKKb1b8ByUjk2taDncWRcVfRvEnVt2ddwZ4T99NGBw37HFgoDjq6YRaBz1Jkbdir",
  "key35": "62ZrXYRMPqGTqDQAUrL36eJLuk6nF2VjjG4peaiddBC1NHKF4CXX1ba7qwNr4QLY8on1ecaPXKvxbnmdS8CQApkU",
  "key36": "4bDYQ6tgQuYtTE9m8QhpQJrX6AuUovuPGfU6Wce61BmceMnCaEz7t1Xh8pGUq71RL3urANpYFrGVyZk93jdUEhWg"
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
