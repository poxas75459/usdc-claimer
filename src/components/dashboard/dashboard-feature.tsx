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
    "3yPY1fRyoaKrbKshtTz51AHVSDwGgjQJzhm2obUEKbxxSQSGs9WM7xycSttQfSEoXkjJauvFRrzwpHDZfu32mXED"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NcfzaojumtdKarwREGx4KN2NKkErmro4poTseWbWX9NaQhxa3Lh1x4s7HH6GyYsGa7xsa9VCG5YSbJWZX2NVUzd",
  "key1": "5FbbEEFJkekwLxvkBkbfAaymb3PBjfH2QhrVn4mcWPrQGse8cm4qkjEatwu5fkvoqQ5Q8XDgH5xw61LLGRD2k9K4",
  "key2": "3hACxHnhzxKQG1MnERSK5eTmktAixw87wSSzfRg8BR48bGp2LJF9haM6QSCwuaKFRcfUAwGvTFgU9yu1Qsz3FWH9",
  "key3": "2eP9N5utJULdBVTSTkZVMkgx6FsBzgSS1e4Far8EssmYvWDoHumv8ZW9ibkJUJhUd2cMXrCALSpq6BqJsfo8QGQF",
  "key4": "5FK9bHvm81K4gmF7C6naAX1xxgE2YXD1tBoQTm9EQJYmaYEbbZQHf9zJFKsmjmbtff3eUrFaNK8dBUnMjy1g8BvW",
  "key5": "3fZZTfhcNnQrLtLfgjnXcXYNYkn9hYN5xrLRQvv1LFYUssLMkDc6yYBtquX4yRocBBpkZasjUoZnMoJhwLM93mr3",
  "key6": "4Ky5dvC9ocTG72EcHhCQ5JtVUkg6G7T46PVYScJVAyazy3kwz1Tk7Diwzhh1RiorFf2vkyxnk6eG2spXaNuuyPwq",
  "key7": "62Ce7D3JQy73nPYteyYi5QU5PYyWDMW51gEahzyrQLejvvMHUfYeNg7o4XyeQ49zR5rt2UrLhyVruwveoZbrpWkA",
  "key8": "4esS26DnSjJyQ3erYPRaYNRkXugdJFMLRHe8enSg3iRwhrug1wW3ghvHzFzgbAowmi4op6VTRGG7eJHvXM8uEbyv",
  "key9": "2SRcvCKHkGtyVw51yXZ4pGbzYHQ2BZcngJC6qExd1N22Dg1w5uahfPMH7AAKdSJ7nHhhqDLEu7S2yqZueBhXt53L",
  "key10": "2NEYxmuicJffhFLFRZb9sYoXcKjUv4VDDXSJLzRGmz2EBXMhkd1MhCque6mp5vQdpSSN4LCASpMBn8ZkrmPEBxPP",
  "key11": "3fHG55tpmV9DXuEYALS4euTanHXZ9W4Xy6Aor7Zkz1Gzh6LRcGEHDLUj7EA14j48dc8zRxG3fG8xHStbAPFQ7J1p",
  "key12": "4Ck9NztqE1NUzRqnQsWyJzn2gfQrguggnWUo7YPb6pWLHnoP3o3DaehXaGkkagV9pL3NV39QX1PDXL1FCLpT452g",
  "key13": "3vSyadRSeiQYULCSsVuZDq752uS97tjZZvowZxjvGbV9CbcoUUXuuRd387XQiQ9e5spUhchnS6tLbzmUu2H3o4Ef",
  "key14": "Dfdy8zTFk4n24FKnj2LqATfKn6D47GfhYvBg6oQUX3R8uLMa9KVB1TZvobDnxvkRMfvfSnDAHBFcbp6eNo4pxnV",
  "key15": "2SHfFWyLgjLHLCF6vMKXfnPWat1VnDmhdY5eygStyR74w6mbGoCaQQrc67aTUPRGLW6jpyjSTAd2bLKxhvewQen8",
  "key16": "3ykrGBqS19EbobPL9dCDjmjWJxtAvftncWnSobnXkTcdHQWmEbXTmd1HwFNoAdTq3qY82HdbcANqtfKid245qyop",
  "key17": "5X6D6JeymN2FA2GYLTBe1UUdgF3pXtCgGmLXTnx76PmkTgr8R4XtQH1y1iBCuUQZJ9zsNR6PXRCjK63nWqXQ5Bqt",
  "key18": "6ADPCRwRXZpEtJxVk5uxD159Fuc1jovbid278ShNzjihkgWBR1LnZWDn235DtbgvinHpuq2HdvXRowUMKxLKQvJ",
  "key19": "3dUt7dP9xytJ2T74YoD3EVyKfLXHj8ZeJviuQurmhscXzo8kSFF6FDPj2xm9Ju5wPYWSH5HdqncgPCrsK7ewBq7f",
  "key20": "32eycYC3tTeMYgx8avGeTETeqjMV4EdDrg2AZ1f2QTASQ3jGSZ9DZN9rijZyu3ATGEhuY3TJR9A85ZskcXsXb8Dj",
  "key21": "4LPdWV3td8Es28yJVTsTZDdhWcaN3mTu62nqYZ4HTcKUUWSuqHEpxgrzksAvCQSadBse5Q2saWV2pf9thgVyumgc",
  "key22": "4ZMKrJXFaJuHvRH32tKZMhMSNcVz8mDYvyiytbYk5EicvDwhAxKLs8uBtg2YumSKDoVLY8h1iwfUUJxrcwid4mhb",
  "key23": "4mw3JPefT1FSSD5yr9pR4VKt5aB1uSfqT6ReDFb7yrTpMmXG2c3YagsMHimrC7NR4HVHcMcwHeV2oUGEqZi1hyf4",
  "key24": "3pACKaMBGXobFy17rFtEA466LhxwkyR2AEMUVpRMk2oJx3zxqq9F6KwrV6N33rekp5hWNLdpvY5yLRJLWYyATxjk",
  "key25": "4bxgoypHeDNhqApXx16wWjkciu2WJNBW3iEyP12sgFXnH5oKdoymNppAXZZ6UWP8eY47eLd9dU1LsGk5649hVrZe",
  "key26": "66rstxs6Undk6rhgc8WnHZvmjuPFQZ1qcHXC1nJGLjakxXpmzaKQxMcRQJed3xV76V5GuEJsbDeUu6ao3VB1yftS",
  "key27": "31buuqWGVU5AcGQy6j6gVkUFkqzzND9bc2QUKaweRwBBdrdWk6ZJqPbah45Z1trGzppBDTNEFo9Ktb26jZo4FPYD",
  "key28": "3qvzNW48BGXUopyBDDaqMVPbswGDYNwjGRDi4mmin141NyMKBCGcASYAvsu8r5ck6S3cWFtHFkT6Ri2RAHitT1qK",
  "key29": "3SzQGzzcFmneyNWKoGdjYqcCnasWmzH4nW9hxKShQgRejvdXuVMMyMVo76pzk7kz2UAvZ42i9ZReCBSLHdhfp2uR",
  "key30": "5qUtgVUxFuQRNpWGxHYz5mmn2Bz89TyM9qKZBYSNP2zu5Kuep9coDP1hickvjX9MSsgUihzj4EGN5eBXxSwpmVB5",
  "key31": "3jp26yp44zZ5dobn3f3PXPYeRqg1kwxGjSYQ6qheqJKqSDU8Z1iHgycncjJbpmMSuknX6WxaURpYCyFXWERbEVNa",
  "key32": "4Dj2DPe3z82JUrsaVztdVRdv2BW9QDL1WtLjwHLuWc11DSL28brWrruqRDHKRJNjNiRLYzRZdFwMAonkcP2HnSBo",
  "key33": "3eBMnkxFpMrHhEzzjUHfntLJTtV9hx6fXf9ussx2LRDHBEtz3vm7zmNMyJsQ6RX1bZQh6J9hcKwhyp8egW9TTU1K"
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
