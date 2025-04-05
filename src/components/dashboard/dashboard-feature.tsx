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
    "5U5w4XaqESbCMhb8ZbMD1GY2Kki9M7XCH25sqz6maSbAYkWKUGQkhRDdwGSobnbviNEkGfSLDfmMAMcENf5Bh2ab"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37PU5NNW4UfpzzhL42UyE6yWXP77eJp16oYdRw58ZoxF5xBfHz1pySuhXfeo57S7yafkMidQTFW8HqohL1j2cWyY",
  "key1": "rVrFfoPef12KHBiQ8tcn1uQ3Zi1uSgFmo9zT1DC96qS9LkjzQmbbKQV5d5pXrHXd81uzNBkbE4pDi7sPoLpANRa",
  "key2": "5MSV1fDabPnxBgPDmFp1dbPbWAjMdCTDPzof69vVysSnJiMihGLU2UurdkUxBAAcoSxqjcj9iMuiVU2HBh8MkzjD",
  "key3": "2dmiWbaYDsVpMezAJZYLbiavYgyQqfWaYMqAD5Qsd5kXkHLCPxsceWsCmrUhxUMjskZkyfoiUig6Prp1r8mXiRJR",
  "key4": "4i4SexXtzDxGW4uvsadmzGscTnGMA2W8TxVRJUzrwkTuXFHPXkiQ1a4h7y1aCbi8m8p8qqc4eWUYT3eQ27kNCPAp",
  "key5": "5ugzkUYdHWDfY9zansCCgwbsm39RYWyqhSBrL1a96rKnLGfLpJEC7VFa5Svt7Xg4Pj1tjb21D9LMK5vTW4S2SQjE",
  "key6": "5QNcBP8GfFov1JDYEEvk1aFfuG6wcLeu5vh6ntW3iiyUUFHwuD9uuzhaw6wXygZvoFDQAZyNkZEr3M9pRder8UHp",
  "key7": "36qH3jcnJPbEAKttyFCnrfWaNKQvfHaBoU1rafAmWHZeg8hKrEbCv9eHwKD9ps7B5eJi5mFqVDEaAHHuc5pPdrdU",
  "key8": "2kx92sqE7ax5kyqT12QhRkPyk37ZRUANBEuMWaPZPAaheQuB1ZXAN1aS1k9PEw3RqfZ4CztyEuZNj1e1i8KdaM4V",
  "key9": "28a82ZaLdmX7t59KvUR2zn6pCUzS3ygTe5Mi553LEjh9r1X9dhKuTxQybpkyfZsYZT7PT9RHcU6FyFMqUvmJDvag",
  "key10": "7UT5HMF6spGfj77VhoJMop5Ckv5op4zdb4ktAeNHbP4StsT38hARjsF5V2DsRXURvpDBPhAaudXRBC5DqaAb7Ro",
  "key11": "2sqnf7RVgvW4tENBhN29nTWkCo3S44jhKDnQ87Gwx2HPc1Tpub3Rs2po1PVBUu1t88ZPZdHA6fVddpMKbXwPvYjx",
  "key12": "3WBBpm6PefUPpWkrzsZiFSh3qqoYo2qcSoMgBcMo4kSyTRiKA9R7mECmSU6Vnu28LVcvyRc8Rm6H4X9HwXaVQ46V",
  "key13": "4LjcrACao5pFf94KLhVkim79DrfyAhEvQoqNTHMwrF7QnscuZz5fZ3jiQV5vrTQzNQY7wvLY3zrKJgYBpekYQBaK",
  "key14": "3GZCDfK5on7qW2CFnYJ32JVcnNbPArXQnUyKjKRUnGK8xm8t9ShuhCC1pvN5Tj8ywyCzpBdsxVpEZeUmjjapefMF",
  "key15": "21xULUFs4Q4dXCFTA7FSD3u3NasDVXHQr6eYYyAoJ5dhUbz7Vbu4GCGYEBERSUvWsDCNUPFhJ3e9W8HrspSNpM9M",
  "key16": "5SJmbgW6oRXs6cz9NcxpD8HqMD5pXMp2xWF1j2Vqf7ySdd8Yf7YSPfMrgfRy4LRu7KNbjnJuQAXTmNtJJ8esAzNP",
  "key17": "2GnR31Yg3z34fWtbAWYo4uBNvgRqpAUczDsrWsjR7EmTaqH82sixm1xPK31yJg2GV8jxALGEjMVwzKTeTu4BgdPT",
  "key18": "KXHihtWvWjsTSKechZcBMvZXED6NLd3Z1CdVaqSfEMMLS4bWzLFfY49V22KSf6Nxc594exKM64NhekdC8oKvwNN",
  "key19": "2Agz9FFW4HkXW3eCX5J7AxUUmH2WkXxQSNFhm6bPNZn4cQDRQqb63piMbQ7Ao14j3ihwPAGjf6dkshD9qEec1QhN",
  "key20": "5o3g42B9MrnwbKn9GpPoTwc9CaVkqwkmvrXaK6pAApHRyDgmcCagm8CMHeF3jKxiLvCXEwCrtg1cuXzgSqHXwTMS",
  "key21": "5g2TiWPxpvyzKzzCGWj62mXhZGZv3dr9FmnFAe4MGhywiomZsccyEYeoHgc7nhqUb4LPfGkP5Wn5h9mHSuwTWFH4",
  "key22": "5UwiUfQ4HVinM3UsYbKtCWcCtDkKYbu6iHo5J3riu7HniL6BAqtdUJTQCrf6GZkgGHLapgUKCNN8sBoBiTg1s45X",
  "key23": "a5RDmVsdCXdDLyhENcELrH8h2UJzw6tgQvVUAFcrFZopnAWsEJSdibLZz73RTpBR7iQFFuYF5o7e8cbzbcDFcT2",
  "key24": "3CrZ2WtqkGKLKM8ERABRdFkDtyDZAZuMNriv69WS69McdBK2ycZfgcFo7FX8ji8JtoaaNct14dp7kazZ76yAgDV3",
  "key25": "5PrYAvtmYDhYkHWPY7MfMMDZ5od2FxHRVnEpwhmDhP1f4kxoFoEHr7BSpjDDjFiyFczi4yFN7KSoAVgyriHFspJF",
  "key26": "2fghxd45GKS3tiBEarCSWLXcK3SUeV5CEN5sFN17BeaF6DrXqAgVKJNuERM2XQeGipkUCoRvsaA7oqFvRmvgmjK7",
  "key27": "49XxAhKeYChPVdWvef8i3vCwB7tDwr2uModcQvNBKHLs5Qqghf1gvhS6ZX2jHSdCtveGoz93qhjD3xcKneb6t3uM",
  "key28": "4UZALgAS82viCWMDNbUjBC4iJhzSWSjtnDpMd11WFKjjWoN2r6Ax4uBQ2GQSbNvieyjTV9FQs5xFXjPo8K6dHu5W",
  "key29": "4sQpiqWPSANJz5MJCv76T5oK4skQWRHTCBxLP5DnjqdZeS7z7VYNYo5DW3bxRMGuwLQ2K3G6vzu3W5tqa77XgYvk",
  "key30": "4PTkf8nPrPPdMVpz2S18XL66MubnYpH6yKZStDKcnQMF9S5G6n7UyExjy5g6yvULNxs4FWFoBpEHGSHVH2aMFDiS",
  "key31": "487H5br1vRKUJvVeAnBUMpRNLZHkbSkw57bBLbBszmoXawhAhAmVGnjF7tNqt4KoVT9yj3BheBrQAar5JjjqPJaJ",
  "key32": "5ERriue2rbXg92v8wUmCayXVCVHmgW2zsHFBKrbT1RYmYVvXYVKs3zUdhkJHPAv8VVrJMj6EvwRechHX5k1ZyRdZ",
  "key33": "3X8ncqM4oBXrqrZm5kJPb3eKsGYAk1wW9niwz8FMVH9X7oR1RaBpAv3HcyGAQC5AVye13NAUC1AisxVByu7r4jxC",
  "key34": "GQ6Nww1EfkwEqePYCsQydAZYsMYBeZ3joPDxjwFz8sFuab3VsUv98Pt8mPLQ4GeuXktxvoKHM5zfvYSj7pFdWRD",
  "key35": "5uVKqoPnLCujDR2GmXgD3vkA1DDMjMdAcsP5FtQud38yrJRB9yq2jze9m9SizgxzZEcJ5R5jviVfw6GaLnFMSnNE",
  "key36": "2fQRJsfFAtxKd7hguVbJSKhhaUSZRGKVoCQxS8EAQJm2z7UXK5V8a1urnPyZxzrjvA43YerrDsWtqBaRaoxmVkuy",
  "key37": "5Eu8F49K3NZ1tyJomt5dve9Bk65wzrqG8RsDSuZuSqHLDfWshRfGNLXLDp9BYyK2rnQjGiVW9yaS1i1b73LHt3Gw",
  "key38": "2G8VZnoiCnSUDC5hw2tEWBfLWAczYFmdexXiJFj4WTvRX76gia7uHayKkEdCxCKBrkxRdu1AzXeT5eTbLvkfTS13",
  "key39": "4w8cQCgMJbkfDVaXmj3VatHLG41FHUGFX7DHyHvxRtKDKafTiZWAUhDkVSHWFKCEJE2JRWNtCwFTt4ZTtBoiHFr7",
  "key40": "4DDckC9XJWvdNvbh3vrh6q2ZiA4cqTy9jJQGWMz1YoypSLxgcZFf6qMEKACN1N4RpxjnZtKxFgkfMoJhLkKxLa5E",
  "key41": "3xLs5jR6PYdvAnBVHRusbTEtsqyrn8gRjCUB5eXq6FhiqDCs7RVzCs7kAni5Bu1r8iUkwNhBcdoe4odynRWYmGvi",
  "key42": "KF7ZVPUo9QWNRBcxn5KijVZPAKQxKbPPDDs1axGqFmgYuKM8n7rVkuSMcTuR3vg9jTKEjMMr39Tz3yzsU4jrN4v"
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
