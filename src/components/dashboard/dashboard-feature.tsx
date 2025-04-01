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
    "51VJWARZeqxwNpsLrxGBpJZgnFuehyBvbb4A1LT9efFcaUVnmkLbeQjzS92SauxpfuRJLxoe9n7LrAxk4Z465JiX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29XnHiwhsFkTDpBhuJ6D5UgKQiodJbyM5Nvf6t3i37rpoNNs8C7YoHuWTrhy6ZRobwLfo43E1sUNwEWb6X9RqNag",
  "key1": "4VGtwuWZGZqNgh7UUmGu9ABBzBGbVxiT5G9vYhFmNfmytvcWTaKJVwv7Z6G3uPX3Yo4mnLWDvJh9CvKA7TWE2anU",
  "key2": "4kNFTiy29ZnS8hMw7mdpmUnnY9KBnETw6DRmbNwgGpNX2Ha6pDWBZu5p1bjHJS7rvdpuj7BypSHHesKmbhWuvN88",
  "key3": "5tBV5Su87hUM4yVH22rR3u6pdnu55Lbh1qSyWAZQLEK3LY92u5vSmbsyf15Y3XwGZBXgzfryvNcKL4ZoXLUQoPj8",
  "key4": "2X5Zk3wz1GX4HDmSn5LxJWV48pNbPCyDGtFov35nx4TD4K8qGxFvNiXuf9jbggaFnw3XScL2KTCj2xnzk8aT7ekX",
  "key5": "fYQ7rx4Ff4JBivFF2ScybXsAcdyUVnPn95oaLAzhipHz4yA3Me7EeHMuWEW2t5AtUWJ31ooLz9m8S6px8aywqJU",
  "key6": "brRTcXfqSYbFngeg89CvgENZ2rEq6mzxDgRqrt7WSYUp3j6L3BudojV5TnP7iucCqLE4Y6EY8qMdGC1JJcRHBSn",
  "key7": "2aDukb57uqLqMW1WooXCY8TB1qF2WW1aGmmEQNZKs88b3nGQ1o2Dfy7Vqzj93n8LBscYD6fQMEjbJ5nQgzDGLKJd",
  "key8": "5reD8Wt5ZnTcw44sR396Cd8BqS4qhAbyL26xQ1yKGvHbt633Yd1rS3Kd2EoLwGjxC1n2nw3GdhxQvjzte7ffWfHf",
  "key9": "5BzSGpfb7apQCNWmmTPHAxgBtBwASDCdD7M8isMAvMUNzMN5M2VkKQosdsJGAQhH2B7Yq2PppvNnKtnPfrXAnZAZ",
  "key10": "3XjQM9KXwVrmbaeidhy2G8nBRjBYD8LtqH6s7UeJ1H6J2npuC58Dj8EoSRLfp7DKMhg97xse1tostHtVpVC4zDkz",
  "key11": "21tKQcoeqoDE2kiaaUs3m2dw5VQbK6mLcYBzhunEyGeMGz6a7jCLfib8ujGps7dbPaC2QjaKpSaMPdSKxUEDMAgT",
  "key12": "E6ZzESKKj2EHdWuD4giMWZU2iVKTpeqSEyioaCEL3U9P2nEqpdHgWa5BuyJrJe8M5HVgd7bDYvvkmPKqfQK69TT",
  "key13": "5p93Fe9QcCP4WoUD84cgRAqmaqoQDodQ2Mub7hju9M8hDL7JomvtM9UUWAMxWNjMH9k6uf2VXamXmX3vkeExW86f",
  "key14": "4PpNpA6K1zm7FEs1oAt6WKVURQLeoZnQ8aREWrHcyy5GCLJ2iSDDZHUMoWn2JtMmbodnzS7Fy8X5Z5FCXZsWrQAP",
  "key15": "3chpWKbPi6SbmXDGibieLfG6z9w1h7cVyaQ5tRf4kGRfSZuezz41Ekf75X2EdZsLGzqpJG6HQ2foepBpZZQyQkjd",
  "key16": "56LySdDRqBggdPQBngWHzzxyJfJA929eKhBENwAXiR8PYTLU14FXfo9H3NcCg1T7nF63KPS1V9DCyiBFVSnhZ9Wg",
  "key17": "CPrfoDE3vPzGHa2TDZRDFkfPE8fMVrFfWbyjY8f37sHQfkpx4e8XSkm9fCF4En8b9aTmohgyoadStNV8vkoC9GY",
  "key18": "4hDjnqhCH6PqVYZoipPPSt3n3WzNFNd5VLDYkxVTggcPhpBQW54cmmT6xn9RRhZurzdVX4usd6wvTxp5BVdw1tky",
  "key19": "23C6tRmV97q7697PS4CbiSGEx8tuG3KjSQcrroevHSeqQcXyBrsXPQCPHX6jgJhVtRjpDsSqVTDjEARFaumQdPQf",
  "key20": "5uMVsiq6BWnockMF9gawez1qknQ9uaEZMKALLBrGSEFiAUyxeFgeJ8LnfBeD4BiKf81sozfgmo4PWBexz45HvESn",
  "key21": "4qDsL4PK2LYD4zeYfPum22yMUvZtu7cwcT6w8bgGK7c3gVBxEL37jCu6dxTT9zJhqeg2529Ncoyi8yba8DBQ3p1s",
  "key22": "4Zvb1ry6HdVWLrExrGXY7Gce3e2SyuCPyruvqZ8zvCGvGByJR49Cg4rAjanvdsFLnFMZmdsS7de4u4tdpgvivqFV",
  "key23": "4pUcNPwzg2L3oVqMbXLWuJpL7LAixPw8NgmUwgSQxyGLrtMwie5BMm2eZtVTwqTGqVREtzXqqeKEJc5QLHTXeCWo",
  "key24": "mz6brYY6PJegTKuV8cp9kjLyexc6zdEF8N6GZPeRJgu3Wi7AiB696MuXB4nHkCbSfGPHASCHa2BptCYH1puvYVC",
  "key25": "3oTrohLN3tdnZbCbGcNX2TuXZniwuHft467FMg5AMFLBi5JezWVheYMRb3fKcedh6Y8HoLZKtjsEx7pnYDD4Udyq",
  "key26": "WV7EyZBSkcazAL3drP9wT8TwqHVRoJDLRTCDsGFKhxRn2rehFuEba8jxRBtdbE6BRwwPKSPXLf3asD838BAjAhy",
  "key27": "38FLSscJLk9kXcD2quFL1MFbFe4QEZNBwwq3zdat9ZWSNTcGqsdkY15PkD7zt36MWokAgjsrvzwtwiFiCq8CdKLs",
  "key28": "oP4vm2b1nqpwEwHDxW99Xq5FDtXFEvkksDVqSMMYq9FXAc56tPDyReVQCcYRp5EvUnMmoF4fyDvyVLVBMLmrBBq",
  "key29": "4jNyUKE4kkCdhenUHX5vVMvGnChijXUg8rc3uKW3DVqvHm73jRuXowVCuWys3uj36DoP4oMgECTrUZCuMET9HtGn",
  "key30": "4FDykQz3CHr8DbABoFn1RNXQ2ZKeoHVpTHTXHWj66TaJJjL7vXAdyeUc8sPXq2WeiGRr9HQHgfhF2BboLyjtZtR9",
  "key31": "5T21znVA1j2uousDkxBfJSgA9qTHSFGMygtsNb2DxhGiDwQzGZ6CVzcMPx3DtBijNJCFqeih2DmCbTiSXdQLGEgy",
  "key32": "3XRngC2j3cuezExHjcYAqJBY1Zy9UDNnxP6v5YCKdeqpBXmDhpKHv7d8fE7iNEVgi3UWUYEeYhaSzcs56Je7XdRw",
  "key33": "5N6Zrs7ZRK1WacX32poyFz2B8Sw1FEccu91rdrykFZ26XjELMW9h27RNrT2D23J3nAvWV99zxtnrpQc8M9xjcENF"
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
