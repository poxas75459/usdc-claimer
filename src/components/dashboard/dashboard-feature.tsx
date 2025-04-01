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
    "62XBvcaansKBZSmXJpApcC9sq12tynhNd7nts8FzVZMXWg7oNRy7kU4g1xDmAb8XooEHmth4GxsYix6VNNGwtPPc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vcuyHay1QaPB1GeApvoPojCxRS3DKc5gZQicyHci8qoxVHmGAAxU7hqch1ifH5c2YeqX5ZhF2huhZu1Y14S4qxp",
  "key1": "2vGkc49Tj6KMM7W5e4jUSB8hYH5oXs3i8E525mEazdvfZuFiC8pLx7emcLGfv4zEwJdQPC1Ptcb9xYcMkT8cVcsQ",
  "key2": "2EQnSMhjkomqvNYoq9HJZvsuDGsLQcNix9GPCwC2zeqzcAEDRC7hPpcfstXyYRjTL4fKDB3DHyhX6KAXJTuiGD9g",
  "key3": "K1SMXEePPak78q6tBHvLbRbs3yJNJ4PVX9j12Z91qR6LtpVBfizAy5NytuA9zEfzHgaVp37oe1WMsGmeAuMFFtP",
  "key4": "4ADcFyAB4o1wz1Ji9btAUX55ShN5Qdyu9WKkGRET6Z7ubXwBmdPqRfXSz1q2TXxG5T97dwe6WfSjcsnYMzsw1AKa",
  "key5": "3i7pD59Mf3LPMyJx53xXGe5q4H1N1PW4LKcaWw7gts1nw4vZrXnuZcymA1Aj3YqH3cH3m2w7bgtUe5TXAjo5MJBB",
  "key6": "NLLWe7FTqhpUpwtof25AAhXVWUgP3NH11eVofZzH7XxyZ4zhQpUSFvs1dkyZyiLnVrRUSLBX6PHUJj19gWVFgC3",
  "key7": "65jTX8KtwnxxxWVW41Wz5Nncvtnf4YUzG1Lq2ZAifjbQnZqnjnhEKUQtVCe2RPDb8EWzeF2rjhHX9M6Up1Eoeosw",
  "key8": "5vZsBLfH1f9hGgGBLY9uJ3JhLyA6uc8RHSWNK24MGFU4k3TxiSTo1S4aUhjzbYwej5uNkQFqNRx83QgS5zkrbJXd",
  "key9": "5BqGgWYSQZMuwn5KcpqnxqJiA9SCejnEHwePN2iFaB3is6srSR7hgU8q9Zx8QxTucnZoVYq1PsLb4qjopF1R1Fat",
  "key10": "4xQoLxdGx4dthyV3FRXi61PS3JdrozVXB1o89q43gBAGioqdUAuNPBpTc35mwjbNQZdZ3wqmJhqPbSKpgoknwJdU",
  "key11": "3iKEiFdL54uuj4M6Tm5eY6LBrEJmandddGKztJggAyvKp3aWEGb3coJWLqGDNpExSMt2Zi68PAfLsWB9JRmJXtGN",
  "key12": "5NxJJEe7zcv9QXNogJdRxp4BXvrahsDQm4gE4CqgFqyVwMCfmxsRHKb5eqrzwrhgSgvyU4WQDmuWVvkG5xnX1kYe",
  "key13": "5T2jFL7sQh3rWdBT1bTrSuMNYpxAZtCGU71XMPVuvNnNTtxHMoVqLWbBEFzDFbHyvq1siQgTX1Pq3vuqasznDYbY",
  "key14": "3S6f141RfctTEPBZa3BVV3TtJWbuayTCbSiMXidBnkaMzH89d7tHQK44j2XeA9RaL5e59G8GZuau9pEhz2LBnqzC",
  "key15": "4gDBpvXV4rMgMBsEq77LyBmXNBMPkgFDA4foikHcfjVy8Uy94rGTMR9xYm9gHU8cCfW247WnbbLV5cz55K87RjD8",
  "key16": "5DCrRR5faP3HjQi88hx536vGVnD2qtYNin1o6CtiaxAJz9BLd2mTQc62FAJqUWRK8ZEPvU4Di38422uJsQPEFDRw",
  "key17": "588wga35cjVEFJgHPtoMN9Nvm7gRFrFekygPWVsKvQCo7omVBRkboyA4gvd3hG8PoAtjumUqphEbmrZVASA9YG2t",
  "key18": "2q6e4QnBjWUkrZkQWLQT8MxpLen25sEezmZN9ArNMnpbR8nP4ZSWQuDCNUKYPtuhw5sQpAXktF6VZeAoosVhNXyH",
  "key19": "2doYeFJMdK9W2ZBPtC8888xVAKt4xXzFTrNvxuhicd1gk9P37Svtatj2Jr57PgBMpmnwZqLHmoCx5za6H5JvEZ5e",
  "key20": "4mZBBsYUq1AY7VeQnvoeWyVGQhLuDsyf5bgv5pELwTQ4upupxwe5Fhf2cG5LpHozTe9q4dvZityk3ywKBwAJNaMf",
  "key21": "LevPFLt8X6NSbreD87byhzJvvHs4kLMqeyAAxKGXzvx6aAA4Moo7PvNxWb24djma31UAiUFDd3UTQhT6bEnehZs",
  "key22": "2kieTEPHguTSbB7VwAzkJgpuvtPsyUYoBQvuuz9TMvYKL6xYKJJjAnD5BoJAzvQxrayE2Uw9ZZa54q7kfrswyAMU",
  "key23": "oSohgKkKe7GAtzsdFL3D2U74DYPg6QFxDUiac7e5nkm6cnSNmuRQbv1Xh6sizkcaFfCeBSxtvVQCdC6rsjMP1XW",
  "key24": "2qzHmU4Re1X7dMMwYLAGscTmj3gXZwddXUZxYETxyFnKVScz1Xm2XrwmUhFk1jm9Z2BMxQ1MAhzjHnBtEguGnPof",
  "key25": "4GDjUZjJDtpQUq4FSm8X1PyeFKVBE3kYXVFS1qmmdo8MCxzGLxJ5tkSDE8f6ddL3TkgceJg9g7dz3intMaECHzNR",
  "key26": "4mo9EW4UK3V1jesu7zNEBptAEciJM4B4wr4Qz9feKuGY1n4YSonFi7FBBAA1RhPZHpUPZgV3xb2zVEpsCzadxizU",
  "key27": "4KzrLwozUoABUU74rdU2sBQpTpbiQQodHMFNTFkH72VrCw4Qj4GkxGu9TCyyadnoLXHStZjD3EMRzurFdE8QbWzM",
  "key28": "26V7YjEaiWfEwoBAmi3YX7FyvsxeTuRijunQ8SSTKjCqspNsxdcyV9i7QTHXdEeabsZz7gkMRZWhjmPgirrnBigx",
  "key29": "5cCAChstrapG4XMvi7AUsKr9hCsAA5g8a6NxXUq4ha8QNzC9Yc3X5HDtsziFPehWy9b8EKNWp1WLkLs1P8ufHemp",
  "key30": "XC7eX6pLL2j1Cefv6CbARYXoyU95LeG63nCW74ttXC8EJ2kcTK7qgPneCkpfQkbRrECe4F56QazTTXXUj6GF58W",
  "key31": "3dPqsnmCkLmJb5JtLgt3VkoJccsGexCpZYkuEwS9aGRrLNtWEyQ1iLGvSReNnHoLmE66fuQumNfim34kzfYo5YfM",
  "key32": "5zKYf2nrjG7YRVDXW4xrQT3wwrkoGuP9d53tNWAnP98v5UZkZDXsXhoo9fWD28AarWuJVv3ksfiocunnDpQUKhXV",
  "key33": "2HTgWB89xGFbjpQbBSHHbvBptQSm6qhGPaLGBRhfzRFXLuJkuqmTB7H3SJemNpzmBmCkrJhYUnnZ5XayJHL6vA8Z",
  "key34": "5nhFupAgdR57gcpN8kXpxVMfstp6E7nHAKE9RrkxVPZArefiQ4w7JfGHcDWfNRuWiWbzoQbjTctPLQdwLxw3hd8q",
  "key35": "3oTKVqApDXdJccg7tK6GF1dmZHn2toEWPTGtpivAqoTyoiTWAR6fsz8egAUQWpzzFJ1QH7V4vcWH27okERfUq4uh",
  "key36": "62kubuMtbifcRHdRDUMdZujfxXq6t7tuCNeXkfZJzppceeE843Jj1LgXQFq7hVaEv5RmNZtLn8R4uskEtHCDLBww",
  "key37": "2aSiesgPdu1mh3S4TWZrrYJeEMfYkaVc8rbpK8uy6FhisvWrKmB2afCwffAtb2LSqd6e8r33EdEHXbu78aSpPdpe",
  "key38": "3b9uC9E1NCRt6ouhSYdMJYq4B8kfrpoX2PY2jnJTE9oJuBjgikXHVRS9eH9trW2Vyu7ztEMmZkqaseXMAZfQyaaD",
  "key39": "3s3YFptodEhDt47TH4GH3iKt3G7qPEDKLm2dd3bXrpCXMAHsYXXfuMuAsPTrQGhm8ibsMJuxAkLGkQuBo1DYd6ZA",
  "key40": "3gppA56Y7zT9UBKrKXQDpnXb4PK95rUpPUrBbg8qinrpAFmtHLunqj7BSEmkwcwAzVPA7B3aFq48NtVQM7cCKXxg",
  "key41": "7vSJ5hhcXDoqMj37rx8AhsjXPHSVtWQRyZs9z7KDiEqu8iEc1vg8syG4qekR114aVVCgNyQtL2EWyaoqYAvtuJz",
  "key42": "2wRrfCmeqyjcjK6F7AiEPYC6wU99bRTSNZrCkWjxVSLvREPaQLWvEHtoRyM6J4SyDitDgjNFTFMCXhvyKLuu3DTr",
  "key43": "oNLMZ5Z9f5kBP7ufCKa1VDLYDVepSfS1pfYySapqTek41cWeq4guQ5n5NxP2oFsZmpvW52GdTqKBqjxQn2goJEq",
  "key44": "36rkFMhnQDofrxEKDM8isHsxoR9FTYBrP8r31JJMFcpQVzp1iGyYoTV8cvNs4Hbdj9pu1L76JSsHsYAYx4xrhuks",
  "key45": "2XZs5s3e1h8rJ6VstgzbmqoajHzVrwwZ3SGVPmaXdVSPKXLJaE2xfCMr8fvxnrGZRA4wfVZgiHm2n4PmZnSRZrAh",
  "key46": "4b1JJ5RvwmLEdu19oHGngTkZJGRJ8zryCforwmZ5r3wCcN6bj4rxu1fhCXCuccjq7KjY9Bi1CZ4ydCaZRY5JvpNQ",
  "key47": "4pFngCkKu7Db1LBJi6N1wg3mZZUswWLB7TFBVqu1WkLvUDmPozxq7oe2FsGgvCyi6GSS9YzuAXDcLYmAstpxgtmQ"
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
