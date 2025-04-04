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
    "4L7rPx1yGBj6NXAGmB6nR2WxqqYwJWbW5H4X1FpLvHBg5GSZF1dWKNyWH54fvWSj6KNXk7Ywq8DVh3G5gs236wUM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AAEHS1zkNprgmmDkdXCMyrgnkXN9uWGbYMS9f31dBVfqcTWymM4gfHFTwwWzXD6kMRc5W2PGYva2dJyQhoLFBHu",
  "key1": "5yQSzfMrygRJyQzvmMd3ta3AuNKScD9B7iNPirkAAap8Tyh9nJJ8rXCgMs8eWnaxdDPjjj1x5UFJb55wh8eMw7XW",
  "key2": "5jbs5KvTNygMPPYX8pRodjw8pMgJjnzroetm4FwsUHG4gSoHEcofoJnL1jJDne1cbsp1NP1mYW7wUH1mUwRgiCHg",
  "key3": "41LnYqDX1xFY366GZmS9pdefKLhKjNHYhS7m59Sw11RpUVrywvHdzRTS8hRbfM3773CnTwQ1txopg77iKrTjeXM5",
  "key4": "2jjJDV1jbA5dp7JxPmVXxSbKNPFDxHJCXyPJVCm2qzMCq7JpFDPHpuEvzY7d28jg1H7Ycpg1Aegpjjb9BdxnNm3i",
  "key5": "3e3NakH4svPV6JbeXBf9oRrfFsH1zHVH2xRVaciXhWsdceb4TzS3zi45eXz4RnN8aiSiUsXDpww38tsRBHt32KVB",
  "key6": "4u1ePugtjXgfs7EyWv5HywNu5WjtTqyPHCy6Fnu5R6GE8Xz9rtLtJMZBnYzfuZqGrUSbmThTS9wTugj1oPnFqVJy",
  "key7": "4zaDTh1T4fyNQMmDcQNMWq7XYuARtntQ9TqiUaiV9J9atrJ7JnjLpvTy8zhkw4CSzhesmmvrhQvraCz7wao4LWot",
  "key8": "4phWHPpVdf67QvR3uBx9zHopUsNjHk2gGdDZn8H3yj8wWxX2BYWnP9vkdZVFngQYzSn3ezZtfw69XXadNHHjGauw",
  "key9": "5ymyHYnzxtK9LdGEPddNkuXypk9hm5NJLLpBQwewwrQ4Tit8fgjXKdXZ89T4PW3geJePwqqqvTub4m9DNcDrs4e7",
  "key10": "51rrA6ow43Vkj7Pt6Mb3WC2A9ACEAaCdaX2FNhiZTKkCJoukHp9uCV8shxERQmYseTFRT2gMPHRqSoLP2NSywCrZ",
  "key11": "4zEiMdnHa3e3JY1vzCZezrbNDb5PtTURiV3hyf4XSBnU51sEk4vLsNJENnJJLf32Hjt1p7WyGGWNJ7Xgca4Hj4KR",
  "key12": "2FE34P1ZRivGLYja44bEWh6CtM6ynNTcE5aQMqgF9AyQMPPH1juGvHtFBeKykjk1kaYeuEGiCZqqnAUKWihghPJP",
  "key13": "1Dkpfk1Gm3yXXjgZPXAjWvTC1GDtF26ZPvxMhP5A5UmxSHCW9mb2RM8Adi6MVXAfPbANiiohgnukkmRo4X5h4MR",
  "key14": "xbGQSgHdxXkssRKMSSNBR9c1yVbvoingwbBT5HqQtfyDf6EFz4Unt7fPHiK9FGovMhuoDTK4z9wMcS4FqLBf2sW",
  "key15": "5o3XaoS7fqfF3RZQyt4xAwZC4RJ1BvoUxWqsFh9Nk7HBDAUnxrA1EcRSZ322GUpTedpvwDF26Vq2oEnuKmUNPspb",
  "key16": "a8UXDN5we23kYeCw2fE1oEsXBgqaonJGcjce63whkc96S8brpkD8vsssPciaDHt4LmWLu5KdYc5DJ6rUXRGeAZZ",
  "key17": "2ZX7ABgwzQdL9NZYDtQVvwN5p4Lh5EnY8WFDz1dsMjGgroWX8ynxvrTQTCufLsZBpNqVEqSBQobWY5PZorayWaDm",
  "key18": "2NZkXTqtENyLzWubPqYJjb9SqCBqApV2TW8eVG25ShtcVYC7nQafdYLacLUxvUxBXLXNmUhL93Gtcr5BzWMU1da4",
  "key19": "Zk8Djj5cErU8njqDZALKdHPAA5UonpsPZk1PneExvbCqH7D96gSbcnNYvJeuPQcFaYoJ9KDaFoxDn17isFHkPYC",
  "key20": "5J1ovtNgGcxUn7AMwenuUP6LJLcUZVF5shmdmN7e2NSRdYJ2EtbL58svogewsfnDk6mLMCGMxm382rnaFETE1qut",
  "key21": "4aoJF6FvyaTEE9jWyHR1fC91SuGW9PwU2gnSjYmKLKbVjdyjLh8ccz2ZiCrDXhLyuQvEjFTVb1k1aMBedHghQnhx",
  "key22": "3mNebvTrnadFcPFNxNSqCFu38cR9v8yg18TFgzCvAZ1kMAFoNj5Cpc4K75NyLvp4HNQU9N3SVQoQXTDWkNZaR8mw",
  "key23": "3AkRZMvhMVmYwYPDH3wutku41fW7ncdTK9EokxMxCzw2T5rGa7LY491q2j9CZviRSE1uzrfVnUJxVJXwACtwDcLh",
  "key24": "44ohXBs6w3uZcPtTEeKvJRPCSHY7uaczVc1AXbk11jThepNwqAu3iLnBjs2siv6Pkf4w6UNFCNyr3f57Nh2a8ADr"
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
