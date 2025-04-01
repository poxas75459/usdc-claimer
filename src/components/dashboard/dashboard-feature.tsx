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
    "3HaDwuJNkWQbsPqAj3CCqJH9tKjdDCN37hdHjnKutfjuseKz2pxVhANFrZayTHsqdvdkh7r3kQqmRMoFvVoZZ1o5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sqGN2rHpRsCC8tzf5PYiAThTZTKgPWhKgSRTkqJnpqEsazHJxh755hPeWZw4vA8vNhKRLd8fXSpe9stouyfBHw8",
  "key1": "4VQVt8kTFnJSqxMkDAGQinW4Gv4YJMR24Ey4buRHYEvzU6nUHbzupUyrBtE4HRL1reWtXuUvUxqWKRnbmFWEwR43",
  "key2": "5pBR3G2A46ggpvgqvPNcmBLiVLsmFHU3ZE1ZpjSuevA58y7VtqbAo2EMo8dF8uASr7As7d888pcZw7N39kPLQvuG",
  "key3": "2kvACt7bw7hRxpytMQR8vX2eBicBVjWns8CbQsHHLnS6E5cNrv4woSWB9Y99pEHpZQ2nPfHJ4T7GwXC9DKGViVra",
  "key4": "45ap4V4v9fvuRE641oQDsjLjq8k3yfUQvF1nsjxU62g6nCAXGP8YMhAtMaGSkeNnQDirWpStq8oBNBd89Xy1SqHC",
  "key5": "2zph29HCxPMnS4xneKrPijtrvsZy35Wggnsb8BHugp5vuMRZcitMkwjYHBsUb2FXhBjhA3MNkBdxVyhyatAbePrS",
  "key6": "TPY162exk7idxUFC8VNyUgF2aPitA5wiiENv8ULtcmjkDFB7AdoNszZc9rwUruHi9SrSd7K23xZt6WFV5Npjy28",
  "key7": "2aRQ24gvFcW8PuoMGpTxr32yL9NPyEvnnwAYHPyQewh1X4PacJA33X4PaZBz7dZ9Yz7XAViYaksa3X2NLYogyaYK",
  "key8": "5U4LRzGCFTEJji2NCaJ4ivCm4cawZSVDcQAqPXhnxwgdPzuNEokDYT9bd2ekgnKdES9uGNw6wPCw5rtkmVgJryyG",
  "key9": "xoyYqjdjKbG76W8vUFrcrYSjieBNJ23YXL7hKqxDEYahodkDYrZ67aySmHSPHKLZg2wti8tCJVhBRr2RZRL5Jhv",
  "key10": "3DcBXGaJtnQAzPwgNVnuuxa6xYu9uDmN72YSphT4hzR7CSEgEszf4q8MDUAbApFHT2Y7ZnmmKjfXjD77G2MnzYGh",
  "key11": "4Jmj9xHDkHmueEeDVxrZWvXLyB28r5WgwyBBFPZ3tQHGpriSUue9CD8rTyre1fdr2BecGMawEAPAHjzVFDcmo9D4",
  "key12": "4rcETX7NhBNrghPjyeoacjGh84ne7MqaygZhRj72KuAsbEb9unqnVxBbKhH6UcF3SWHBXgNGGq3vSQyhdXhfRi6",
  "key13": "5YmziE31sC2AvaanS9fzLX9qR213c64jMmVEtbGYXhRzKvrTaH76YaMjpktuWVff2YMaZqhn349QDKu7QFZeJ6kw",
  "key14": "p8qnwutp4GiMM8Xk1puvGeZgnvbRcGw1dQ5Q9FQdvsEpiRw5Z3ETFMYQvtCt3HCoj1Nx5yHFQro5w5HdXvkw88m",
  "key15": "3aN38vKE8bRcCC9TTXyYNrqUhroaLW3F9DLZ2iMuqYnHgiZHaLdHq3u9NDVim4BiBECBSF6qCDYApZXmqm5Q2CQT",
  "key16": "4zPb85Sh2UVFFoWMSx6cjxS4DRk5K3nQkHsi74ur5AM3RijYNsZUegUpRY266AZbMCH1BtGRNMscc9EougQL4dWX",
  "key17": "65pJFr2yxzTuRDu9DTkpPLZkdtcvzXwJ8nZRL7aJzdAqgSCCHZqfPisPAShwKXGt3Xbw9GLnVXZspG3rEiSZbbYT",
  "key18": "4qGXufERjXFeyMLgZpTv35Cei7RK8gvgcbsrVAmSGf8V1BmD4tjPsMdDu7zoDpLbeyn9CFxmNL7wwfmPPXCRpoME",
  "key19": "4YoYyA5SxGjp8cggT2qpdwpz8YxKnCs3vPhpyR8spieHxxGgsgDci5qnspcN1p98fYHvXdbmVom3ihCuxQJfRpJj",
  "key20": "4XHq2G4Yhe5VLc1UCagELKNcZZQopefG9Gr5JrLsfWPqBXKCnq6jxb8a8ZFE2P61QaoKQvWHCpNutfW3YcQRbJkN",
  "key21": "9czchobwTZgtn1BdoPkeHuPnem5Agb6gB1cqPMxdsNfCHGANHAYA2SrxxcHTh8QvQuJs7XRpnjNqn951ffphYND",
  "key22": "4tGnopBrgUpShvqgriArBSYs7YbzhfFigcCfjVyVZWGzjauWXzSWopppZdUq49P7QqAsvgbMNpVNKpQTjD1Qso3C",
  "key23": "66vSgSnKTyqVkGqchJkjmeomHRYQspZJAKsgGhrMGGFFZV4qknhDSjsu1oDU8Qhx9t56WnHHkk43d4RNdpUhihdN",
  "key24": "3MfFs2aqsRGGhTiXyA6wR8maXXrmqiS4VZForjSi4mNPPgWeFMrwWv88arTACBkbZVsPHJYLaApUVZjYHrHnfJEG",
  "key25": "3ocKkrJGVHA5p68gqRyRF4z1zmjdxqasZXqCQr9yVR9zF5hsozg1ZBxDQY2Hf4tUnrNgBvT76X96WuUfeJZaLpXm",
  "key26": "5UDvqqEeFDNxPiLA4SuQweB2tDbdVRZkR6LaaXcUiAmzfFhbPzqS86ZNQJVhcPnYu1FtceSuTwkjqDeCBQHA9i27",
  "key27": "4GrVqaxz2YyxokwqqZN71yh9uXyRv1nhhLKSdLm7s4HSH6iajWLDkN1LZcXweNoQcuYL5Wm9GS3q6wq3kbzn3vrw",
  "key28": "2GbL932KMkGrYigjbeS3phbbA5UbtShzrFEBQdBDwweD658Xu5B2tjHMmeBKVZiFDXMJQQfEp9KUwzVtkuis7vL8",
  "key29": "4mWWNT4FXM7dirHHgygfujz8FTcjcmoPfB18o3HA8WidfYFqjt84eh1Xkir8AeTQDd3HD33YhZpXi9g15fUZPEZq",
  "key30": "2hqApP7UTBUFjnX1vSiCV4dYFYm9f26uTy7U34vGDhRzaQtiV298gW41aMzipkpzvdSWDn5Mg9QXad5wSR6DgyS3"
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
