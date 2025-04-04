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
    "2gE1mFbYgC1QNijB69xQZgvnwcbQ9YmGpeMg8KhmurBqZRsZcMDAAHRfbFzWQEQiVthy4UGykSHsHBc51Sdahqyx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35dFcyxwo7A4sBhT6xt56YkB6ZxVUbdNEzz3Ggpe1nw87muovJdNAwwadhAj5UbGfdjSPS7MeN1jE4nBP4i4LpCv",
  "key1": "5TnAvGUpceHcyZfuaBFzY8mDCGyn5AevDCNZp5NQUpNRf8k2FVvJb3UoWKQRM2rcScqRrBitA4yAGuJZHZAp6UeN",
  "key2": "49Jef4wnaz4U5Dqzu8y5riGz76bZJJT39XQ7Rid2H77kFVqVUe6k3STYKxPXZBuQ4Ki87gsyvZzSjBwLC9z2w4Em",
  "key3": "3BEXTZ91qSoD3Wzgqyooy33rzWbArzamoAXVbFXgUiB19TcAJes8oVvdej1Ww1tTZ9dhkBno9wHkNBHsiZGwkzWp",
  "key4": "4StKqth6mi5zFRKqRNCiEQ771M8UwKvtfez6PjBTtgSQF2sr8Xvbxz6K1qMRq2Kh51miiPZcZ2L4WDu4MuLJ6f1k",
  "key5": "3roqiCk5g7ZKHYPizRnHDfi4XQxJMpp89ZVxH7myJF3KgM87J95KNuaLwXWtrkrTaVAhg9ymdEfT4uscPMKJPWwX",
  "key6": "baamTXJndxmwGZtN7wvyXxFS7nwESorLiKWBaPCFCxg8EryfHMvM8PvEv7Sa7AEea16FKG8q9VZawvfqt19uY7D",
  "key7": "49UsdFSSDciiSfZXJua9pkGDAQek4gYiXSvdhWbKUveYKhUEanxUzAdzDDWWkETXB2pgfoDYhVj5vELkyKGDmQA",
  "key8": "3EALrq31ghFDZGQ46V9DFUvL5LaD6icDf2MXcPkDYe9EdW7AMv4XGUSaRi79HSTu6kmgfqChUHm754s2FPC2xNFW",
  "key9": "51qHCLzadFsnAWVoWMWP6zyE3o7Ei4XM9bqN6KUgULWEzqbQsBmvfLyvPRtvH9fVdJ2f3G2Au78KGGPbGNCcuoJg",
  "key10": "zShRjZ6Qde85pqnaWS8dr47FPDdenZxQ5dv2yuEAokgUps1aBt6fHWxLfpn39x16DHrsDDuroycpsZDp8ZxwhMs",
  "key11": "4pDXkjABoYFa6Ec6oEK5XrLork5uZzdDYNvxmv7jVpXt3Kr4YQCK96jf6g2GiuaENtwJJbzNS5BMMEHz9ff8tMfJ",
  "key12": "3kwFTrSKkuoi85fDmfiEHuCuiiE66avemteXAAhifGVArQfjjTz5BjLxa78tTJkY3njcmnGFVgeF1Gvvh56V9Vzv",
  "key13": "5HPMrWqRLKE4JJem3G7wM2EFQ6Ef67vxmEXRyKwqTLZr8oVK8yn8GrPRtVt8TrNoBxYRKvWUB9cXCLu89f23dGZ3",
  "key14": "ehhYP2aBj1KjsFbCSa4LC97kY6kUu6Zeo2FiYcAtQ66XTFoA3Ar55WfDg77Ue1LWjUvd3LBPRgXfRnwJgovhLiy",
  "key15": "31HTPtejQh5BtBZi6rRkibyHusShPUS11AX1n8cQf91rhRztyktb6wXADzuYQxHUoD8UdDBtGA1xE1y5ZzGX2CGQ",
  "key16": "5rs6f2CZCNnLFaP4B5o5D4AyE71SFFGHvwNn6RBPkvdNJK7pQVWqzSCLFNoyR9t8x3dQ4vGtc4CS4KRFojhfHMFA",
  "key17": "25DFzniwke76dT2x4meej1DxeSyonpkhnX3bjQxTqYPEEhzgxBoCHjV4Xt51wpb3aVbryRr35q3hAUCDRSxz2siU",
  "key18": "3LnxqQrxFXjjiABb8YdMs8zRo6Kj4dPWM6PGtU9cCiJ1fRY5JSjFM4cWF6SjAXGU1KAWrhcffFi2dnM2vCv2HFb9",
  "key19": "3PacuUdRpZbYoai9WJzwenZ3Pvq3Zj8cWe1jjtKMeNNrPxokBgPh4b8GZRW4sEzVyaGW6TFn1HHvhxYUQPnBoVKM",
  "key20": "3pK61MYTxp8jE8r9wTZHDYk7kimnyVdLWKX6XbFCx6aFiZorPQrjtXzvTqt5MButEMAx4Vuqx848EUmc2M84ufTp",
  "key21": "2EZu4YxAWkiapC2TbNMcyjRfqeLYwcKcstDZoxLWNLcgyac4j4dZ2YsD1jWYeNHFzEqh5nCRJoa3juNfQLz1JPE9",
  "key22": "4duwuGDwuX2G3739vxAP7BFSP1ZaafXqMNdQDDkf9gKpbKezq5X7D1d8FnVb3SLHFnyBkrJ8h8aHa1iPL3P6c6Yk",
  "key23": "dqvQRv4Q2wk5SBJdAVCXBXMJawUoQZf6gTvPDRGWBCwXx28abSyB6gSoyWnfcbp21EjgiJ74Dur5AwJyj5p5MiH",
  "key24": "2VZL6eM2mpGneg1TbTrbPcPWPFsaRb28UxJt4BGmS5m93H8P6rb8E3Wu5qb2PrEBQhBNZa7y85dc3aSKGiK3krbW",
  "key25": "2eSAwKTRyd2bqcGD6bTtDi7iXeiL6LpgATTk4qKU1sP3gFCmNms82vX8XNM1sL7ccNVjgVVrdprW1dWXxohcdSKd"
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
