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
    "5KU9aWr3W5FnSgGn2QrsWtnDtgN7PYZKnE4VaRYt3mdc652CLCKz9H6jatPmUvivDWakdxGvHxRRaxgGGEfFk2Gm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rCsuVmN8DVvAzpNs8LRvWpcJKTTbnUeXcnQ2yKGVVJvT6rw4t26jHvNbyu45mMHc5SUcWgWPuKoVwawMeXZH5KL",
  "key1": "2H31iXQRaiSLoCEB2S6TKoRicar6Sh5ozFHz366mF2EJHqQaPJTdSDUjwPyhANUy4Ankowh6z8rmBfbDR3HESm6c",
  "key2": "DTj4KeNWi2uKBV1u5aQ3myopWWyCzDuZ3Enk2AuXRVhb4c3nSCZUT7YSnjNAbUbk9ccKwYKfrKKzgA4yg1Lkw4D",
  "key3": "618ofiffmdzpPRhHMpkjbJDF1yiQ8df1gyMHk8B1ya1hmYr2qTn1HvDB8fLcFHjiZCK5N8jZSi9jLpR2YcXeyAzN",
  "key4": "2uakDhkcfb5ZJWGz4wh8671rZjGSFGAb8k3TxVuetsSo8RRgbDeHkwu8kGwGXBGrhxQfBiQeYDRPSPa5XCyWB9jk",
  "key5": "3vykpyC3GSRFtxsCEBDMU3C7toCrxht2R1AK7jMXdxVPKP5vFbiJBidGy5Z6RLcTefxqS9cNdaU9vFSZbGc3rJRG",
  "key6": "2aSvTkg2JStfsieCbeacLoAAPNpzktgcXqekBnkgHFagvVQCX6Tzz8x8yqCcpRxA7otCa9aa54ysmqMUdde2DK3B",
  "key7": "5WgdWtESMeVCAdQRsSbXyRr5YnYoMy8ouEfbaTur3fy3T7z1crd4TzSGTveYhey1UdASJGVbt7FDvBXMK9rwkMgK",
  "key8": "2buLzvX5kLpg6mkSx7AAV38CYx1QbQcaGpYhnxed2GH221LU7ukVdnFmXMj5er43gMktHGt6hrDYjmVJVWCUHGAY",
  "key9": "5Np44KGs5DFUru8qvkaX1XSVA6vu8bYhRjSSxc7DFGZzJF2qBfaVTJLafqZuVgp6zvcV94civDHvyCToUPvXx8QB",
  "key10": "3VHQwmNTHDSKvonEtabDnixfeqdGxqhijEarS1YV839aXMC7mP487rfVk1Km1HrMKi4NVDNX8GEho3a4jNmQzK3Q",
  "key11": "5ZB36i3QMo4p9dGCpymd4Q5f18Z8D121kXibqtJtM45MvkZ4yWr8HYRAx1aVtQYgYnUAMWnBZ9ZHR2p5EbkWh4Mw",
  "key12": "r5Z6f2sWZs5oizPdbpqPHKhTLBJAtNET2A9JJjr8j4KgEHNS4hsAMdYeryzsGAbWWABSEzFnW1KGiTaX9kZbGks",
  "key13": "2puiHpFsqTzpWJP844x9za89MQNVC1hqga6ATCCQUPsFjak8pMjzPHCJYB7GqUX1ngHqjRLcwFD5yGBSecLLjkt7",
  "key14": "5TsN3JBuj5VHjUyWBPQXZiDTkrazPgNytfaDBsnLkxBUvZcvgJS2TzcoBsmwHoTaR8BwyYfgqZ118aUvLJAjqRJB",
  "key15": "8JdtrAsjJjdjoheKhkVvB64dAQTg1ezJz6s82kCjUB6tM3xyJDk1KKXrMue6scUQ3fs9LammGU22MTzAuRfXRPg",
  "key16": "5hyyLiq5m2166vBtKAADn3SDuSsTZuupHMUvbXWxBuSmJ52bNNeWEW5dZtFTjdHWHopCLrEUCkhCo717ksxygNy7",
  "key17": "4gxgmSQXnWYLAdPjDsavKvjqEv9egARS9TTFFTfSJiuCx3snGMHhyrwx5dwdss9Fs5zLzR8sszSoLpZTN947PffZ",
  "key18": "63Fs1DEXEKZTywM5F5hUz7w645SFARdT7JUC9TxSv4FNwk3fFxpwDsJ3Fqr5t2G5bRZQR7Sarwof6dUPU9GD7BCy",
  "key19": "3pe4gwBc65Jfuj9b7LGTv1vMu1aatwazAWd6B8xA8nm7k4LWMrB7bwia8aP6X8XRUpA64JM49mQJJMGbu8NdqoDg",
  "key20": "3ZCatBZFhvJYMmrJHqGs96fRArhporkoMmVKrJbvvmiZW8LYoRZyc3JcMyv7B5nE5toiYJweGMzyZBXhLmw4N4YM",
  "key21": "58n3zJZAH5nq3zRWr4tMk1aHdUwh5VL5vAbkiZ6zLybr7X6fW5ykZnUgRwZFSvaSXXZSeZ35peMByY7z2uJtaJaR",
  "key22": "2yqE3Danws2gW7mhLA61rCVkiGoznWSxEPnTJTNc1uPW5aj29e5ikH7HrigFB33jiAv1AFeLSo7kRv2DbUAK4rWd",
  "key23": "2PW2vVsbPZ4XxXNSeYuxWC7dA8hGgqH4e4NanQDL73qGi6jRE1QTbfyeQbv7jE9TzowQHfqYN2w2JbU2vzbh6USG",
  "key24": "2opzAtX5vN553UA1RmvMqr3xmHRb5siLKZk4V37JzmJXGn6ZxuWZEPNYBTmRSD7fdfLdSHhmeScxm2ks8cJEeCLH",
  "key25": "5V9bWKC1T6Et4zCd7pyUaoppVJBbxtxvsaZU2pv6L5jV1tH14J4utbiSX3gZTJdimKh8B2256gpySnyPJ4WVbNif",
  "key26": "F1XbTzqjBz5pCWiPGJm2jEWBH17vMeM3nnQwohG2xMYVX35zDV83SasyV9LRghAD5re3L9UEaaGNonfV2v2Gdv2",
  "key27": "VkQ8Lsn4fzz9zPVZ8pjJy3vGUTH89HCit66j95QrkfkKNHQ7g83ExuSbAqxfvyc47urgnSAe1HehhnPxjbVk1D1",
  "key28": "4VuUcPY5yrx1BdcXjNPEcx6F419QJ7ZUv1p6Nf5592BXS78iMN7UVqrYyKRFsh1D6JsfQF2V3zH49fMyoHKLXErD",
  "key29": "2UJYybV5MGagQSDp1e5Uxa5wvR3ct2yi6EzNQbW2FmAof5xW76LQNq7HZT4pNvA81RuDcMAdDfUj93zpgYFRK8Nz",
  "key30": "61hPDMpaDemN7CKxunMobkkU91LthxxX422Dm3oaBhwSrbrioPV6cdAE9RR1tPk1A37QHkYeeQekbbidnoo6v81k",
  "key31": "2kGuk3ZgBeLnebaVZQvCJkhPigygvg9BHMknNY1gkVtZGxam3EBj8BNJYoa9Rn53YFKobeguc1EdGMrvMxLvctfq",
  "key32": "3vH43VzuW6zcQ76Rn6yirMWj8t8pZnab3CEZMcoS84rRhyPm2kXrrvdXCV3xsXu6kT6RscUy81MYpd8S7sSa8wYw",
  "key33": "3eAgWJ69T2di8Krde17qVpfRbhSVp3M9bCQYMswhL18vT8UzRNNY4MEagbx4oKaRruWDTByyUqHJEMFsuS8warrf",
  "key34": "65tuLy6nQrdZERBV5zrWDEPeqVpemAvofUqNqT5vVwvYHcYk1gN5gRTcKw9jU1fGtjxikWnjbvChEq92ZoaBSEdg",
  "key35": "2iVnBZ5Dds9QDtksKj5wgDjB2vosYKenL9bLcrEhAUKykXRP6LByjtwdLsa6mwgLSEQLbsQFtdH9aasXFZhRLk5L",
  "key36": "5DTF1kQTGKJZYE4bMxt54DJGoud3GBoexZUHvhpaHbrk9GmTcTbT8tZkqfED3SkWsafJahb3HrQocQkw5JbKoaAN",
  "key37": "4CxfjxQSS7V9ZXCnNg3YVmgSyJfyKhBLVyV7kKKzYTdBzxyWoDUKM1y6ChJZJFKsbKWFjd6jWtDX8GnwEnCLpCF2"
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
