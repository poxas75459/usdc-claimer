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
    "5n8upjBgXHPf8VFpwb4RtFrFWCjvrJ1UwnFujb9EpDWmThRYXdZALuemu1JXfdNvqdtJDhyBKc6VfZfa9NQbLuWo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rbeD79hUChEXjo69xNVts9U84pSnTmgUDPJZaTqBC4P6wGAzzUauUFfLX1SFFXJpBE3i7qxcxnwJePsQaXSAqBS",
  "key1": "5geWN6aXXcw1hFsqmkEAbyYVtw18boDmh25LggUDRCf4uVLUEeMQcgStVPqXLziChnD6Pbffzr677E3UPhA3QAyv",
  "key2": "5ghabuEbjJjELK95AQxHfzksoq3Xsn5oguEGqzYgpCKyu8LVL4SFkQmU2SYUojauKeTpWaXoBiYuARvmPFR7VKbx",
  "key3": "tq4HVd5JEMABLUQCERdM2VytpFFf6Bjqu9WPxfQKTcVpbCyFUHCV4nmYYZbunHiomatPve3biE2Uyr3UovSSyTX",
  "key4": "582VMuApfWaUM2YLw6Z9hZDafwhRwbFDh6pWmp8TaLm8ydYjJ25wwrBx12K8BrAWn6yUpWpCxrGzfv8RspggjMPm",
  "key5": "39htjxXyNjLdSo1npCNFpDN2iKSsDivg9aFraD7iu377GmZUnJxJirsa2dtipnvVGmKzFGNTnQ8YQ3NgcJ9TDi4M",
  "key6": "27L5j41hD3LjrFqEf84KWCSZGSqtmCFoAZg6yRBQJ2HmwDZtLvHchkEFeqHQk3ruYw7BBTYskBSntZyxopK55jhJ",
  "key7": "JPwzkWatGY8vzmcQt591QFxgBqTun1HMVcmXJC2stnYByYCQuzao5pRg7g3MLMntwwgC3Ctdymn7E7JDxQT3jZt",
  "key8": "5CQzpWHrpKWsrj47XpwWCuwbiiwmmEeU33AXmajFen8SR8qNfaaZmvfY5DCKyi8LYP6qHPH18yQcchjeQNZPKbVK",
  "key9": "5pewr3xcSCozLtYco4yurNk7iCQSitKYFYAsvivvVqGwGRVDRQx3oq8o9enhKxQwyCuSMpYukBMFfiJyBVV3B8km",
  "key10": "46c9DApU8ZRcsHnRVKGdAKWpfhenUEjuGtp44K4QjSzAtcs4ygCRFxFCnkmNGgGEwdhyVxAsSGn6ZuR4EBKgpjFj",
  "key11": "12AxAJm7X3ZSBjB2ggzMrBsNTvs1dUFNSpsU4N6CrWm2wosQAtTh7BAzBj3xzLRtMwmMZTKjMDNKRXDzWvWZ22a",
  "key12": "4yG2KcpVvGa6AVLy8PHPd15euyhNSXWLvaFR6xWT2EcH6a1u4FxN5wquLwb9Wji9WbbfdGM8ief3ddzhnrn9ZzZm",
  "key13": "5G9JAMMkvauyBEcGG6R4RtNnjh3gjrHFBY5bn7aG2296gKJWv2VFaDWPxZ5eCjBadxTdYbAHzNhzA1CdywFzbQrD",
  "key14": "4QTFkrLmxqQW5Dq5vXv2KVMjyfbJaWoccX2jBAs9X4y5Hww6RqhvUwQRLSVWZKdDeFyHsx2TffdRhJy3VpM1pUUh",
  "key15": "59GWbf4De4HGwJtSV63jHBU3Ufw6WRHpMW3nHGSn48W9GPMGEoFbeM3MLtYAgn9RmySnYRzC67ECLbNNokDe6wE3",
  "key16": "5YDQKfZyNPvpX5VHeVGPu8KCvkMZYvfifj83GQWxJg2UdyBtFT2vtYtdifygdmgzMFGUYnvH4gBwbQ2TRf3sj2Vc",
  "key17": "5bYcNrJ9jBN3ZyVmY5rrrFboSXp8XPzuKRwLh63TkUVBwmom9gg5m3b6cm2ZMsc3pyqzQtegGtxe3WPkhvC6mcaG",
  "key18": "bwCrnadXpic2iN9Ct8pC5o3Ak5SuiAijcFc1qAXaTk6Mkf7EsDkJoTZsAJsYptRAUN8Qp8qYCLaMrkCBWAnXQ3M",
  "key19": "MLpBEc5FTS6JpsByyCECZadHSbLZz7F8bUifUNwwgPAz4wAn4oKsXte5Nc2QmK4oQZCLxyi2i7Z9Vg5CP8o3GGK",
  "key20": "4BqJBHQYLktdzSLygJT91sEMFDR93tZkGtrVEaUJZeSrWaSsfbgvKNWqDkHv43D7Ndp8eyz3UB9xi7P2gn9ALg6y",
  "key21": "HhxzYHM9nGMyRjJpcKHDru9yJD2TbsakShbDbt5T8yWefqsKvLkjbYchHa9SLmLJzoXMUEmCHBZ5gNX2jWwYCce",
  "key22": "2i4LzBuKQH5iAkcPZUGfn5pEQvLdibFj39zr6nfAbDrpTyoB6zaG2udBhhNipNt2E8wR9L7JQRupe9F6FmHA3igC",
  "key23": "32tgw8Dv2tj3zDEtK2VdTL2aSY4UR6JZh4ZznN23PZSf65mMzToULar1YBtMfXxvDbLJvpFrUPDjpadVim4D8Eqz",
  "key24": "3dgAAs17Ctxg31vGXzfxR8NUfmUr6MetJCqLaurncLen3yosEFVzxdrKEVC8meajpKe4hkk7mLsksZtoNe6sfRbd",
  "key25": "3X6gtAK7dh4StvbBjnbG5Epn8kdQfLuUaQmt4Qkjo9zGers5ESUSn4xNQtzVrrQzpdcJihbPER8dGKJtdX3Fdexw",
  "key26": "3bSxUbBXng84YfE1t1TdPonzCLzNBw8poBqywZ1FerzDHgb3WDyDUeARaj2jPWJitmzAbzLEcxPZugGACYzMRFgQ",
  "key27": "2K8WwSoWic9QxN1qyH8CXB5DiV8hcQMacXnuPh224QePup3iMxzKX6HzFuRvkF5VKySebU3SjcRUgyubsdi5biJM",
  "key28": "VMduouy7LKipxa8kNEWPAPghgTbRgwg6C2Z9R6ExN4pE7FdRJ4UEL5LBzo7aU9v38KZeVmf4jHLHa7mBhWXLDcN",
  "key29": "5NbZYDVg71i65ZXFxavP2t4HRr7AdYrNaHvz3ZQUnhJcgDA2p68Tfq9tfRhpRTM7rCUEuDrVJQJ14Hz9g9wt1HXn",
  "key30": "5xPomeuM7j7LHtXcdsa9kdzJxkf6y4rWU8rVPHLBaFmqNaLXxWGvoFEkBbjKmF12nQNCuHsvAKBpiUo3AhrfmxpJ",
  "key31": "pfcumcnEyhysi3iR7Ki8uZjbfWg2hXFs4mZ8a1iM78xyABXWaUYDQnoueXGKTvaEPtoEmgzyiiSV6YmM3qZqzTh",
  "key32": "3Nf59m46CubERfUnnMmiy5PGHHXCx2h1hbubBA2Y3QsqE4gGL9uskqfHCjHWccy7ViiLbhjPvywoddaCJ25Hvdtr",
  "key33": "58W9sD7omogQAum5mnHGSYWEJvazS2XeKxKQNSxAhjRMRgNpd7MjdziT4fpHbwnYPpMgAU59zAaxDgkCujC2CC8e",
  "key34": "5iSamUJ8PD84aLugMzQKP4cKVAj4Kby2f7EutALqniESqqXK5nqetmqHZhhnbAeEa56q2uPJkbo9nVWjMxfybiHt",
  "key35": "3zDkwvrYZTZvF2meRGa4ea3Gx5omg1aWqyv95Fu5eSKEYq8krYnPpv6p9k8NYKTdTdpKQK8qCz9uMUouFsqFFWSf",
  "key36": "3t4oZPu2b4mx8LuVEpErjCJGSqp4b5UE2iyVcX66i93wfu2WauZgmjfeGUJhytcaNMUip3b8ydoqMuRMY2HUnfN2",
  "key37": "3gTvxtKYyfpXDL9MBPK2nWZrhKx1PBPWz3zTj9zjBXcbwtwkXKVBskptxNnhHKDGGFmL2aFYaPqH6qKt6DAZrXLZ",
  "key38": "5mCWUE6u2ojxMqowcsy28TCoZBm8h199ADyXU3PzpQtJ76bqiRgNF3USoWKYsvqX5aQ6Uubvi1eSuUkVnfBF4GRG",
  "key39": "b2Dog3iZFqyUrqMFUuwQuBf8Ym6HCbpj5ZRHNS1AZCWmKjJewxzo3R3Gz1eg8vk64i5z68ptqy16aEtxmqsb9Aa",
  "key40": "5HQTUYgRXkypHKbJP9hjnQV1AC7RzPtihnVzuuxYiL5JCUEKBXHPQz3ixKLre8YS5fNPQ4K2HHD7sww2kjKrahne",
  "key41": "5Pga8iouqJS3fkqqXrtrBJ5SXjPqhCwB9VmQp6Auun7cDgR1Y9jEvKZ5VErTdEtprQWYs4FTn25wfXKsDvAHXmDJ",
  "key42": "guGGN6NetwbcUtPv2EaQ63cBLwHJXV3dwiczKJ2Cj2CNv2rwWaWcUv5RhBHdDW1zdrkSZUerAKpdjqU4goZNqWK",
  "key43": "3jLNcCnY3wVLxhAR64y7UzCRCPqrz9wuSvmCcc9fLysRmfPHjpHfWH3PtZMQbMLzwNE9tFBzfZ8jWMiu4pRRn1Qr"
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
