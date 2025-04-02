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
    "5M7ePwg9P5ygq9HT6KwkXzaLNpACY3L1nrVBEmCYrGdne5u7FhKWtR61DuNtar9pGuXypxUnXg91F69SagsLq1MA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g4hPTKvomdTzwhUNmbpyg6MiShS1GPpAvtrd7PVYcUiiyu3e6GyZ66WAwmMaqqbwj5Hq4ZHBek5k8hHS8g1uFQe",
  "key1": "4VZLFLk2TAmJCobjxU3Z4R9KJAR34y6Q9AHxWEidQ5TRnjhQwuHPzs82nkQej95sVZ2EhuwtzLrUMpGRK1hqAQiH",
  "key2": "T5tBUdGMa7Ns6vCgPBzpayT5vtWZmXeTyxsr3xYGRPQJCGbfEgD7nBVpo81px2bSbg5otmjiERJ5g54Ty4ENVKn",
  "key3": "3roiAWB7w4FFHmvBFkcVZAs5NyMGfsHRXyGm2Kz6uq3Xb2hgxUvnPM1ALvxPSCGZspzok2raYpgTo5bj7CTmgfb5",
  "key4": "2PH15exbg6bQngfSofB6wyh8RKsGKTxV4Fo2hE6igcZN7msR9UFWNYh5xthUZDuQeboQ76NJB4qdSgbBBxG9CzBg",
  "key5": "B3asUNFZqhLkNZJ3AbThTb5dyYCJHwxvHBxNuMYDVDLag1DTdMT6gS7RRUNSSNcbP5wMR4wmgT5GDEQRp2KK3EF",
  "key6": "4t4gHktvpbtQyxiWzoRKgKrvmvXHwWCcNpnXtiNGGJrQoDC7pbtrRUHLJvGQoq5Cuy5WX5AY5mFCgtRxjFh5U1Ec",
  "key7": "4WAmuUS8Bfr4gX6gYD6xTbXT37HPQ31huPX2mdcXPxgbvibnnYPmYNuWdmYo26PhgGp4FHczDSR7U8FsE6toCavs",
  "key8": "4aBLNvpusfAv2NWiGsrja6RZdExkUv7eUjZzkceRxgYvJBc5xJBcFez8NY6rNvG6xuEdb9a9Kh4rwbUzwoCXJNjn",
  "key9": "4YFM93fehPKF1mgrhQgwjS44a32DecHqRECLDnnXx4PudjSvH5d4kLpEPS5yYsRfq5n6wpgFQQNt2KM7Xpb8zFym",
  "key10": "4SEp5LypxszP3Kecy5jYUpF4G2d9Z1ScfDFHR9Y4YB5dJ1gb57FR42pZAzcFvWhyeNRQkJGE3GPmS3uWmairnarg",
  "key11": "3G1CFBuZtXdHivNoa68MSPLcK3e7iBke5yzZQKBSofGxyXHbbzDFbsKgxaaYdmmM6vVNRxYyXinu9tehokfPLyVd",
  "key12": "3VaPRcsD2AYZpGYK4rqpDVzaof52qyN8W26ApWdEJYBthBvFEp4YBMCDKJMZe3FZ3G1LrXsffG5JQMnPsqjfsYoC",
  "key13": "5BEyfodskuaoBDMdmC2BacAosmqqf3KHEnG2o7MWfPtbfbZWkFDJx1VPw5u2YM2X5BS3mWoeZQqQkmSWU58p6tfp",
  "key14": "4NmR6XzwkQAVN7qzDXSts14AgeJiAQGbaMAQCuTAvHYW6axZzUBsccyrFj9gN7VPmmYM9JZdfvVZYw39nvzZQDsZ",
  "key15": "5jzhibf4m9r6Z5T1uDmEMTE7Do8TwasyPv3LZCe23Ja2RDvzwmjauoorZ47ZCwu7HZqxaEDTqdzj9652Z1rgfqMC",
  "key16": "41pHYtRJ2hY4BShx1yRaLx4tw5Yd2M51tWFuBi14QfduTzgoaj1hfyBSSt8kVZFhJ126TyfMyqELwpcmEsrpJdM6",
  "key17": "24bbBSSNWkZ5uCk2X7jH7vjDrHisMAbffF1APZ6qiWrE74CFvEF2KWHMaqRgFXRwYMjZ7ANeae8o7c5HvaEJ2yms",
  "key18": "3nbkD4MYB1DZW7rsvFpSo2mint6QQ998fFCAKBPJxbN1Ux7dyxhBoNxfbLm6DiKSgvXKc5vUSR4xb459TPVPgZnm",
  "key19": "eSPrrZhCM1v9nCMnE5ZStVccULt5oXUGzLKYUPkxjqo4CdxLAB1QJPoYsAsfUd5jET94XVTAMvfjJR35N7VpuZk",
  "key20": "2cWtehrjEWVpxHhA7eyzZ3cR9MruDuHEijGPcZKaZtf9MJJoNa8A1juU483hRXu1WyGHUkNY1zjksMghhmuN7oEf",
  "key21": "rP1NRZj3vaK461SKu5cT1wbN9StBkXP3RMw6355cn7j256fNpHcBsjFitshBrRpnijh9CNvT2tQkxYzaPBQ88By",
  "key22": "5dfbvL6unfCzCNsoHXDkgPs164MtyKDHk66NYs4KpXB6ywW5BvBkQc8tjoYxycWHWjQgsyyveQR1ob9287PFAykK",
  "key23": "39TCCpuCXfJUVHRPG7noyyQ5TjabSzV1nRGSfge7X6reHvD7Dg6osuCwRsM11pAXX2AYAXfxCvZHwSCezvrGgMy9",
  "key24": "3qYbptRpXpE3MqEWhyPqpN3oPAQhtU8ThA4nuDFgZzZRPZYzfPNhGHwr4QPW3QmPfvdCM7zGh7JFHUH6MTExeHw",
  "key25": "oZ2ADkKC3bTKeES1iDr6yE4jQSQTJyWn1MwSa2BEL6qJtXmaPcnPvGWvujaMGWuYv4yd4yXRMHDm47NSfwgW2dh",
  "key26": "5Aav4bdP3faHAduWha2BHZ1urpUYPcb2LGV4rzYN4T3UN1mMnkfFseThPsW72ZwkGbuRtDUBL9LkzVSiVPFPP7DH",
  "key27": "9xsFrjpjwxbQxotbnQATnqVZ1MUyP5LWNJ5Vom5TDwX7J4KJsABG79r2DDjaRDoPRRNPZqKAZnqTeMembpyZpmu",
  "key28": "4UrzC8hNt7PrSDLfA2k1J7fmZ5yeoMJzfokMvcS6uVzVCgxhAtp7Kw8SWNJ8nByPzRMPPELJJ8gmbaY1eCjF8Xn6",
  "key29": "21s7sHGRydxd82PwC94V29du8dhky9n19rfn1RLJMPSRrqPeiYCAx4TPFWBHMh4osb76N622A9C8j3mjtKCvwGpA",
  "key30": "5qQ3dKy1coLHEjG4Deq4T1topDkUFMcKkvzr6GDkFMxJQ3ym53Mw4xqPf6Ar1VXKoDKtcjL1ixePqsdkAvYWhZay"
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
