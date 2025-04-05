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
    "2hpnMLrrTfTxbxCxUM9g62LaCr5fKCFSKPNpDnYgPBDj62fdrDSmvnHiCS415CiFMsyPGJ2n9u8qYDJxXEX8yqx9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4grjEh6RGj1MnQcVKrfKqzVQonZgB94fY4UmKXEyzpsFd6mbSvyo12DA1QtSuXG9XJzX5o4TqVGQ89nN8BGtLNfB",
  "key1": "2b5ztZnSJfSYx6knK24pjdBxZPZqaHo7XdcWmS99AZpBuVDfShkixKmzbSqJKZh8zq4oPFKB3X6nhcmG5YSPfZMd",
  "key2": "2N4z7E3W9438bFe8EKMtHKk38dsdo6EVs6CkXfuYh4secFK2RG2kixnBt6rPN9qTJgMrdVyegx4x47uYMt7L5vFd",
  "key3": "3tz7XX9BjgEMBfmgSCeFE4SfuqAHyGDiNmbebRGw5LYvu2YEpbRNdQRc2Nzy5h7ZMcoDL5XmA32sQuCP5urYsUfd",
  "key4": "3HcghmRV3jqiLbYM1XHdnjYtRMEbtK8j9yNaLNBYbytxA7mnYzb8u5BezJ9AWUmwkduVepoobe57Gff2omvPsUYT",
  "key5": "3E8F5tcH8b8B2g29MhNsxQETfDaACVpfaAZ3RVnPBFwftczcoQnHuAq2NGsrG4KN4F1GZ61xqAEhxuiLsVwCCYRu",
  "key6": "kdG3GyzQR6KR5vpV4hY1tQ6cEjHQmHDs26k3gsts3t6Hx3EyQdEjoQt6A3U1jztscJNS6SJgqfZi2FNjThDipEk",
  "key7": "5rvpTu7cgzchrGDN6RqAVXqfJ4h7Yns2srakuzongWxWTp9qW48MYFyC5zzAda11zsqBDMLTS1b62tpFPqcVvnMs",
  "key8": "4xbEC6gXbFNqxRHJjKZJCVStHJ1buahnREe5bm4kY4pDEzDwGwcFRivLVkrZEdHfQxjDTtCYx7VT4TC3poEptzQN",
  "key9": "26H781256JG1qKiExFoLiDSn41ttmjb2ChxbmbXP8etuz7uEZr3JBsBDLL4PaPgkh3mR6Pbi7ZoytaK4LFhwxrXE",
  "key10": "2d3PGw6HXJW4MX31B9AKqPkXW22ACRSvW1bjNEKChabubuoiWFpNb8g3VnPZGSr8umsT5y7ponwD62N1ose3KPXM",
  "key11": "5LaTKQ43UesWWzCH9tRNedjPpVhsH9a4Q8DDRJ7eJQeAHUM6d71tvvuyucRvPx3TNWZSprZB1vgqSpwfCPjwVnT7",
  "key12": "5kD1r1VuGMtC21Aadqzrgz6HK4Cn4Hb8kKfbrY4DEqs4YFC4FXHVr2LsoJ7hY1rq6F3V1ELf3XEa7DAD6PDyGbUN",
  "key13": "253ygLeSqQHx6QKwyHdzwXz7czNUvQzgvNgEp1kXTjMRaEZMVQfkW5GErSQt1KAQ2gqvyMsUnU1vLovY7UyKtUfZ",
  "key14": "3oGDb2wY3GCgUUZQJsiKMq3d7X4uFXs21kqCSX844ngmooGkaBB7gEypaHSJ3AF73nqh9EvTyhWFNrVnsniazxi4",
  "key15": "4GBvXMuS2emCxPWMiDVPZcZDd2qFxZC6LsvgLBj3JB58V4GqGq9H6UQxriuGaF2gT4qkWUK4P5kfsHKEQBgRzhE2",
  "key16": "2QonGTJ4VBk4oVUucdM2nFJnJQVDHrmr1xfmGLXZDFmmDWRtJirc6rzdnLpWGjJXoHLrebjZHvqGdmnSjeosz3p7",
  "key17": "i6KuVKgCQ256rzhndTzWocmeLu43vjpHcuijX3xwRDh9HfhXLPbcHBbK7HURDy31QQsTWpF4VfaLf3aGrZZYmJW",
  "key18": "5NFzgBWdF2d3HbVhFkkMWvdUynn4XNodBuzuHLHWJat3yPrZ8sXcm4Zfp1unRrspmUssAxnzuHqCHXCyw97HBsH1",
  "key19": "4n6T48TVqsVrGU3o7jx38mr2kU4FV95NakupsUY9r4BBp8SgLD5N7s1jWawYFciwQrbxxiGSNKrt9Q9emDyy591n",
  "key20": "47sWYYnG62wuuQEL9ie14E2naMqQe1LRxB69mmzH4f4d63JRbWbyPpXSuxUQUT7LPuxfCUamNESqVQ88ZZK45ncr",
  "key21": "416QRwzxxX2TzcPnygxjk2S6qkBovKcGjiPQYMXEh88Kx1jD1TPUD6GyAfGtkkHJkzdQFaAuDBYcgPQ2AfE4Zns4",
  "key22": "5NrNdEFSFpD8oXgvniJ3MAyzCnLXLDjVPA9AGjtrTYNLuyZnHzyB7MY9YtrWoTkgExLxRjm7CaTFD51HNotqSh9V",
  "key23": "2DfUiP4WaM53w7BVqJHMjrAyrFBqT1MqCrGLcgSzSSFpyCwmo3NKSU6oJfj95ndLrAar1HAHAXT5Ur9VJE3YAPaV",
  "key24": "K6QGNk25FdUB9YxigtTzZtPncaBntmu5hNCLuvq328nYgKooiauRKmrfh3LwtT82bKL3QKCP6wHUHwx68vXnjuN",
  "key25": "4gJWwQWjbqvdXoytafgxw7FYGS5g6CupbC7orsnoXq1yCkS1W7GSDoteZrNXz5PS3Z5anZtRP1JdM1BJ2RsACfob",
  "key26": "5WC4qGJ2XCcGmC4P7hbrseyA18x1TSsDWDneHTbHy11gVi56NV7J7L8wcUxzbLyNo2nYC4WqZFW2K6WdVPDLUpEq",
  "key27": "25rXwgpeQbKfdXgStaAubyk3oRUzuiLTwST9GzabPasQCGJmQGNSHkcQYPRJxbwuPWQxESt3GXgTVFnBGut2mJ5v",
  "key28": "4xw3dcoLp1xwyzSUfNcHmDkTCBSwt8Xqp5TFNJ4vyUQZTaq1SvrAyJMuXGdHkEADor9ntyRYGTxRZs2ocZwUKgT1",
  "key29": "2EjrRXLsicaCv6gBcBbdvJ4v1PQa679oJ5hmysz129yWHYcJSj2jYMau1T36qx9HCBAKpu73YxGjH6pEJcJADfyi",
  "key30": "58xBX1WF7iyxM3mUjg4AzTNC2vFQvo4a41arBT7BeFTdbXqWPRngNU2gmgZFoQj6kfypmFHf9Kp7jWDav9YzhHsF",
  "key31": "5v1hhiykRihVxDWor9KCUMRJ3FyAS2Nm1WqTeonYK12aUeLPBECLSAYoxSx4YnX6eJgjidbwFMvUiNEtGJ7jYahT",
  "key32": "k2GN9KnZbZTskyCvAD98hsqjAuLEKE3du6Gw92eFMmdyBKck5yY9DXf99NvE9ehsVj8pqALKyDRrfwCi7pnN5Fj",
  "key33": "NttPkqjSLx5H9YYmXq2VK9msTKRBZhBY1fSGMPbPXxqHYw9o4f5mGuV33FfoeK9ZLPywS1kz3VYqdNMM3qh6gPd",
  "key34": "4DAYW65bXxYcfJWU14D1aHkGitcmTQntZDaQBKmPSydxfYqJqKgabKWvDeYxyM9YTfs8uDo5rZzDd6j34oALiiSi",
  "key35": "JhLZuA33zNB8wxSf6VcSbRp7DxEoVUyAapABpUUWqZtYFVZDJCBbD5TZmDuaNLePaWQs6LbsxBUQufA3tp4ZCzz",
  "key36": "4YmiUkkk1kzC7qYUuStqXBDD6dVMoLtrYRV4259Th7crhdJvRYUfWGqdBEExkQAB7uyejnDLrSfGR8rGkbuHqhU5"
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
