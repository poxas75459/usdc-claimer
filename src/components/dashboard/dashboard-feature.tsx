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
    "n4DFFt9ivaRjDgfc2QSKbzGoYVcSw5QukwtU682mLYi58EpMbMTzvF5PhgR8RJqaXmx6m6NHUmZZwWJbuGVQGop"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FFkH9XCThmKh5c5wVJyezzsnBhqTRxePzaixf7AuJijxBA7N6vHBUvRzpXemxKpGP9LQxjyCsqX7zfhMMzMhT61",
  "key1": "2Sh3JHvCVzkswCwecD3BUWKotSAKx2ED6x3tXd3a6s83icBSKiBnXS9r3VCh13iXZnRmqxintnua6PXNfkypfFky",
  "key2": "VaRvvjLTxFcFW5eu84NtcgPRCUBVgBPVTST7FpeeR98NtADYq5wb5oKtdzgGQD2rKu6wZGkyaunMcN2tx6iR9LD",
  "key3": "wRvWTxVgCt93mZpofW93g2xDijjZ7cQ1cPY1N2WyboykG2ahU1AJEyKxPhUeuP3bXs8DxnTfMhxbq35MmgPx9kJ",
  "key4": "3t9KoKVtReM7Fc11EpaG4ntmXgWckje5chq7EdwDiuLUG6e1LJbpJe5fihtWsstej5MhCxnaMvL6Qy2AARWA822V",
  "key5": "4TEhDRWqz4hSG31QktTfzvMdfawexRASZfXBj9NVcxBeA25t1vJmmzFwhKrhYAoeu4vtH1FXosuvwKZ1ZDwszqz3",
  "key6": "5d5MN36pW1eWUmiDgnTQegnrMrDcriZAD5qaBwn7YLCu1P2tLN3e4HCHwE3dDhhm4XqGHnH5KpR2VxDomzxNafkm",
  "key7": "4ihUMDM7KTfBtQfSeJNHCmaWiPNNM7jaioPMicrYJRnDgGnoDPXGUCYWHb2iYrco3jGRtJFzdPraPijb9EFcLG4k",
  "key8": "46sBfAd7WtJgvZkHPyH5abYrsqakn1mgtwemAXSCCrwDwvCwvERzV9LUgnf5riWmVDSfWoAKZ64jcLHW5Mcnc1S3",
  "key9": "4Yc7nubJJCo1PJQJKPcqVdnqj9StG1ez2RcwFQp2Z3zBfqZP5VjK8YziVtverWGZPZVR1d9a4G1vFvg5Ss14CNnj",
  "key10": "39UoBHN1jNKvmXJhMYzDvR5KDsoxz5TdbaNxzhhPEcQMe7Kk36rEBptNvbTBw2AMKrh8oxecMy5nStK89vzn2Wm3",
  "key11": "5kmPCkep2BLuTAN5tUqfFZdhZQQsT9TNap38LWJPjWDEZW5f8sFXvxQv2mb5vHFCA8hqQ14xF1aDghCy57U9QUf7",
  "key12": "5qeZMLPp7zNfBpNEZ4mygpuMD27jwTKZBmG9VsiMJA7uFnQc2cEbXD7m3B9zVbou1ATe2BHvb5xHibX6yAHwhme1",
  "key13": "3hq4Ft22YFAJ5D3Q3h6EZfb8z6VtVjMqFW47JmLwssdcBaAnoYzM3H7WEsgioNK3oxZ5Ub7RZJ3zNSEJ92B1nJxr",
  "key14": "n7nkMFHztEDa51qJpWmXJpmscctaxcuPtgd45zFAFuNB9FHcw5r2ckvssYMTn69n4R7x74wLUf6NEHwobB9C9Nx",
  "key15": "acKTRqHKi6KRoqA3HUCYpcavEbxtpvRdgsPqsT2pLZiqtDLLJo5HTPPXQcsQYmRNEuXN9pncJRuSdpftYa7EiLn",
  "key16": "4WsFE8c5fvT1syYPpjmpGkjh4TWtnnGEAXFfaj12kZ3trBEjUH3n6RtSFaAcduLg434MSAMsf1R5qg52csxQyZfA",
  "key17": "3tPJVh7PWcNmmmvC8edus1RDRX1kmVSpnHA5Azr8vomtz32Mzi5m8Xb41HCbnCu1F7nK9YDTD2ihfX2xCdEs2BBQ",
  "key18": "2QEcmrPCyG8HMfytmNQo2Q9PmS27y5asLLWEWbLoU4s37AF3Fo4edujz61LcoLZHBQLnUUTj3goNrunCVYDS97Lu",
  "key19": "4VGFHgywU2KoDdfYVWkUQirELiFmJdqTj65V1rZJtgCr9KsW46truAMnHYZeahDjkZSFkDXJUaQS7xucfpD5b8M8",
  "key20": "2Bzehp9GoT1rXEQsJ7ZrSLFJmtcondc5KqDWpncqjxSTwgfb2MWLQzrqTNjuCD1gXYKoJgYbfZswhwuzqej9yEdw",
  "key21": "446ez7NgUjaU2EmTrvczY6P8arXFUchdLiDYbopuXqoxCPQEsd1a6L6QzgkMckd6jKo5mvGu3YU5TBpFDqzPu1kv",
  "key22": "34uy5zt8gHn9sJT4NFK4NWToqWZfG8jM6AkLVbUBvhtn7F7yVVmBkEx2WLvsC7ibC9TmzBnPdU4726oB4PLn7zcR",
  "key23": "411883MgnSBMPNU1E4AwGFY6VQVetN1jcdXirxxqEGF1P95R6M7bdHgtz84xkUv2jmfSGkFpDgnNUqQiMJwRUuCc",
  "key24": "4GBtY6Wp72Uzr9Gpzv1hstcUcFnWKkU8arV5PY2s5nnYEzaKf786kxLCyFnMrUyZD91C5BwtX4U51mqDuNFmCLBL",
  "key25": "5jL2PSPPjrdAHcBECmcafmd3Uad4oDDBbhWDRJsmWVFtbmKHXDT8ynaY7HD7f5v2xbYEynAgBdbnad8CgMAdsdY9",
  "key26": "4gVBUiz5v9c8VtuHNXzn3kNoyqGFJaWqqQaxqCAKLPW8Qx6QCTv9fkrVyTS2vGiNyZv8FjVh3jYSsF16YxCKrZEo",
  "key27": "5yNdpSkcvHMCX13tF5EskWUMfwAYLSN6NurQm2MoYSdgkVDcoUwdCNimtyL861u7WzNXvpQCbCSmA7x4GruWLwKa",
  "key28": "4HrqhW8nx6n68HBWdM51ew7WXzhBhuVtaGYhxKkyuwEfVtSENnCXEox4L23qVDkFkfZyNt6Cf8MRJ8Nm1pT4SosH",
  "key29": "9GjZZjJULDoTzj48HVeSD8nbGniqQr96S1MfzhcuuXFhrpUPYRAwB1Lxu1dVjL6vDR188sK9NzM7P9H4LatMGAS",
  "key30": "48RtFYhma2aPVkPhgX2AAGdzjrAiKPNZ84g9gYacprgVjkcrhMY8B2GypU9U6aAavrFQvSXepGLbHyF2y7Aj1jxx",
  "key31": "3UpUJfY5PZnd8jddL5Bskya8uNWBwqLRwvL28ajfFeDbN8sU2MYS2kEEdsrtVmojAJtuwbiRx8rfqZ1mnCnPp3LS",
  "key32": "5HB6WNL6WKGGG5EnCocwcHp74HVCrncgCBJAMRnBpPAwjwZnSAP5cP2ud3rNLB9hzhoquKVvQAyiU8MTiJJVAFUG",
  "key33": "3bKsBYJ2yMj4A6S73jahbQdQFp6fJACTHTJJCNSjs4MwaN9T7L5NaezRtL4yR6uBcDqGcVAZuoS46sRRsey3QkPx",
  "key34": "2DGpr9LDmmWB1n843z6mxiW7aBUJkZREF3BV2xbjFWVZExd3TBmfsjTBacdbifk3Csw5xczv76xXHNsNEgL2YtEv",
  "key35": "4tZpXZZZrXu2Y55z9GU6Dh2VFiDgJ56zAHg1NSxozEA6ffpqSHgLXvsyt8vjUUYS1tnz4beDnE3xC77PDBHdNbAh",
  "key36": "3uHsspTeLmsr7gzMZjAKJj4nvfsyTbTd71CuNoDYhLVswjJ9e7fGsu7GMDeddjymrwiFBHy4YwrExu5Uyhb2W88D",
  "key37": "5AsMMhNWsGteNeE9ULiHyqgvt4vnVCqN8YVSSY5YtiKvznjDsHu5tbjjjeM3a3vLUx3xYHFH44Fb5h1L1XnxCuWo",
  "key38": "c9TpQ46K1dr9h8xrEUg8gLcZx7uKtGjSrHtuPRtnURpmtYgvjvPLLfutukWFAzVxNExjV3dRQPEejP4TgotWTSp",
  "key39": "2bbubzcu5wFqjeoe7DUSNCvHzVeGrEaC3Nd8z2kwBxpnrFXC6CWWuCmRX1P3k4ZRaMhCLTLKGXpZUcnhEhcSGjA5"
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
