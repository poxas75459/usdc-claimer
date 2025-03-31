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
    "2rmVG8wsCydHxfBy4sfWkbriYwLCVz6o4WrYxVB9XPTf3Nhi77v1NGL2HTfpimy1uj8sNZ3cBSAsaWNDNggaZV63"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R7gAawtTwujDGbcTcxx9VFd71o39tVE5oEcA5y6KetGFvzvotYLQeeTeUPDvnBcpAyEimSuuEbYG4oxWKw7u7oZ",
  "key1": "4S4cDB1V2rZofcEcLXboijBPqumUchXCeatnsMjuMoz3F9RYpsHzGo6cdybVbkytL2YJEXsEC6rrDkpHdEad9gDM",
  "key2": "4kE6VLzWSCoaXGfFjXMvnwJBiMfTWE4XBynLXjSERwErx1FhFPrcyZNhhoQ93RVBXebKpMJi8M64EpJbRE62Kxiw",
  "key3": "64TG9sXXX5cxQwVUNkRxdGqJmGynKvBxLQQjDbrSe1XjJeQxUMSTPKv36QtzXUJt3XMRkxA1UjuYZTaKzigV3Y4s",
  "key4": "229QiyYDztbkm6vmrEwzJPHHvPGYgZrAsSVNSxWDjCHxViQiaMAYhRptHFnPbtGDsqVHazzLMyGwoWDKg8qEJuAL",
  "key5": "5DAawYg4dVZTsNeLSWvcGScJBesfq17cSMg8jgAgRbN81oEoiTKk7NSzD8WMhcBF4HETHidTWV77WqxFqAfyGyGz",
  "key6": "5akTGd4F1oiWVYoZg17UKK7sisN9kAi3xLDFtbqLNALTZDxbtAs28BCbMovC9XjqK3kRd587JBJtp36fkMG7ddaQ",
  "key7": "3EsFUWAyvPULQ5Q69mYM1DqFPnU5SydKioN45JydLhPJURZVkN2R7kNxsH8fBqLTSyubdiAh2ZVR7fYFmaaM7WFY",
  "key8": "4zFSKK9mR9T1MCeehf6m4AoDxPAD15dYU7CfqeeAohPcvJf78cr77WkTfXFhVQ9hFyDMh62N5caDq4tMkwAkShQy",
  "key9": "41ij8srFe4ViufZadJUT6tmQ7fwLtnofWRGLyfnUAKaZUGHNZ3tYpPeVdCcsPYjWHvoRbDEFyBpC9oxzQnYZiRtE",
  "key10": "4ocQen5GNqXCgNwG4drBPjBjCY2cxfWjXu7gJwwiTk9oMAS7tBrb8kXqwZfysiRrDLwEfq23ip3mjN8C1rcxGXNs",
  "key11": "2oz7n5XFyAeXSFJby6h3iy49pZqr3yfQuTgV9koqBpWje3E6sKgxfsdkBXyfKdnG3kAZWbAAYv1sjXri2ZKoWDfh",
  "key12": "PsTWvk2mu1iRtiU3pj51Pz1hsjsrHDZAt8CHyu4i7dgG68iArduJP8e3jgBYHzGMYpSqZ4d23x83pJAmeSuP8sH",
  "key13": "4jPdqvVJVnCtFkTbA1wfeBcT4upgLwerBQp31b6Mxg4pP6xJDxEWWSnz91Ne8y4WA5Ne8bY5Ae542ZaWsM3hpX3d",
  "key14": "XbGKwdt8nAGZ3V8jBb3TRYSmsBmUBnTr8sKNf9PSGVh874F8A1PypDuNzBf7rowX9JUcrr169f1FYA6FrAiyHHn",
  "key15": "3PXw81fVZsuwBfKCLgHJt2F9zkCMtaY1VPGYAUVkxCPBpLcw6zXXZBarzG97dUCk9wEvXsRcd7kYb675q1xPgG1z",
  "key16": "2AQScorPv1qVqVg76moL9H6xhA1ZKmdx3yuF6GPqApeXvL7NbsUUYtXtNSxVgXJxDjHbgd8m9gCcvatY9zXvRgqF",
  "key17": "4KDurZXC1Lc3nWtcuuqbLP5dUj7utQEojkFjRTxHTBM4xKwdg7rUzpGNNyfst4JBSFgqKFXnQQAnh4TrQYfC1nZU",
  "key18": "4BLGPvCPzzvAs6SwtnnMo9RwsLx1uoRQhLy2fYvp4RQWKdSU1jnKR1XvvdnLQiujHrV6oesALZJutWzd296oG4Uk",
  "key19": "4PFzaFy9grLyY4kRbrfSWV2RKK5wiSTGbay5jHsdfsYSnfDwr5zVYu1nFu4urLNymAShkPn7QkY63TsfxvrJ4X92",
  "key20": "pEwVe4yaYL37s7wxFdfa1QpEXiv4VumcAKy7n94rTzAq4txshnbafP9Hp5UsnRNVnHVY4Mvg6RPA9PWCHFY4UJW",
  "key21": "PuuxhpRRhb4sibYVpDp3cz5QabDVV8FUVs8wZqUfiTKCrMo5if8G4o9njDPY1uwZVC4HQNPvQGdRoe79rx8cngL",
  "key22": "2PCRf3EYQQqdMhHMiSq8t8TXgrZw841ssSDhruf4Xaf26GbWYKB5wsmxBkzNvMLhaBVrjpRMbmLHcxRCyz62mSJA",
  "key23": "4NYR37tYi8LJv4p6BtGmDFRPViRkx5uaHf5r8oQWHApd3tWcc4TEHRAC5DxS6xFJHkkrbcqneBnGaXVKcRxZH1LC",
  "key24": "4H7QkKEsFpUiSG77RKfUU8VQ2YsuRXfQ1gPRV46NovBUnS76Kk4bYF9hNPfufcZmn59ZR6o7vRCrpyyLeVoavjcY",
  "key25": "2czXNTSSGwSgxr6NEfUdA3ESMLPKuaCnQsfnoKhVPvy3fc9vPS8kaFZpfAb3NTAboYnmXrqD45hgJx3bGPYF8s4",
  "key26": "5k8kfaSWJ42HrGvrWU8QBkdtiR7fWbh5BRMJ5okRgbqvCQKnUWMoEvcHX63uTQPvMu3qFR9fh2voAgXFsojfiao7",
  "key27": "5PFH2PuJBLJtaWfW27Bx61Tg5enVz1VFSyu9EXdtipS6PVkCk57YoQJNrko7EdB1rRyDitAxtw7FUUDxYcfZs4H9",
  "key28": "3fBrPye7BLvUoxHidfHig3TMd1xWWqGHhEzG9CpfBftrQbuVBPgZPrih3wCjEwNSZ5TKoD1d8KfPzPqy8XY9bzFP",
  "key29": "3aMUQREtjsQC8VdCFJKSLd7d5E5pJ1ruSzBHzujmyVFM1ppTj5Ttu9BrsnwtxQPA3FaEdqkiK3mdo37iVqtag1Ci",
  "key30": "3TR3AWW6jx4zuyv8cwHCY3kSktAv1cy4rppRAuHRvitCHUNMuTDga1dfa2Gg5B1vaMtPfvDvAxhBNZm1YZj9AvXk",
  "key31": "5buoV96qwXmbrUZW6DDX6ZJBNCh1cdxJGSjydwiS82wZm4w1jYvjc7io1aBNemeFJKrDTQrNx6jdskKJCvDuerXS",
  "key32": "33uFQbnGBx9pdt9baQpXAy2NibA1z94UMBzYSn1gziWTv4ThFBdodx8RBnFNdYe6bgmWWViCeBH3x2h5aDhZNq3Z",
  "key33": "3VPMSy2TvxNCczzh4cWm3SK8geEiTydPZG2EZBM88oXwZfHRyYwErKP3i7WGMHB1b4Jb3FD2f3W14UPVzNdmJH7G",
  "key34": "4NgbVUGXGWBiuxNDXpxiw38kjPNTdra42e9rPti4JDJKWGPzZf4kT3arwq99AAqt9NBeDfyCpF7NkgC2dvEtHzAY",
  "key35": "5N2rb7ecrYVFkpNfkh24ky2xJqc3EXDo9beNpwY4njj4fhCoaoHVzbkcQndMHJkNjoGpuze3XcXY4osZiuFfW68b",
  "key36": "212wWFsuMeEdkzTdwNPiB8BHsXpYxHYuKubo7S42GACdwsjN5oSENoxTDmCWGGDJeT2uQEQRk4VYAJYrtJonbvRo",
  "key37": "3zNk6kWBCaknC9FM3GhJVR4vLdNcBvFy4WQG42xauRD1Ba2iafkBYyrY2yNti6jXpst7c2nAdxqxKkXASVRZVc2g"
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
