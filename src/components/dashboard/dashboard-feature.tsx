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
    "5mFBpQPoCza3dRSeonCc3M1q2S635xSsaeqZheR8PWvBYyF3kXCemjugdVmpjb9PQgcw5debzLwqnzii62MneiuU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pFxha9mDq9XSExs38dr69NdSwCk41QheWdeeW4am1weun2PpmwY21a9dHN3RDgmCaYgs3DAyyMyuVzimy1gkAPG",
  "key1": "4X4bcVjTVQrUP8bvkHfNW1fBMBUfuqhzamUJ3wnL5w4HrLyjvm4eMhFJHHNUEmZeXMCsmTTi3TNCNvATsJsy21ZZ",
  "key2": "3LkrFs2bguFj6mvSnukDNXWNF1hzxfrNsj5ugWhT4mDqdB9rFB6bJjyWb542sUfRZj2X8ZLMFDhfkJrs1d4RTFDN",
  "key3": "3sKejozYC7F8y31UxqF7mSQYZ65GF7KJDUQje5AT2Y1rzn6QyJmpxmnPWQyx9uo4etKX1ucbuhdADgUCqxqvv5bn",
  "key4": "494qjnMrcwbkQLV6JUMjiqyUCb8nQEvz52VmcRTHK3AkSdRvKcirHYWRZ2pwJ6fbBNQVuwSnQM6JW1ueQzYz9Ju9",
  "key5": "2n1Tn9QUQnhUHgSjdABPjjG7vLXU6KW2AMK6oPbqShMSxP4vfmYHuUocqgwHjzvZ9B8DmpZLAtUZoAXQbzXnMr5F",
  "key6": "5MdgmZ6dJRj8rVK1aPwzGeg6ciax9FCpV1qix35Dc7YVhQ1xmQjMyBDz7hRNFqAwK9ZDAvgX6NeQHWku6E2mNKTy",
  "key7": "5tHDui6dMsLwEw5VGe6noWkdJTNmTvBbzEwi5CYQLsiJXMqoPzfDh54TJiC2GawvBaTUeEBNpWc5LspCuvZbq2qB",
  "key8": "4DE2WJBVzLvXKC561VtSRfPvvSD8LsHspCQ5meDaXWwMCiBLbmTfhaJojbrRU8T6dAtx433WpK3KoJooqW6axHfE",
  "key9": "2JQvghRBQhm11MeN8PQk5kRbHadL7kJ1cu8MMXvtmhK4FtggrQTqQmjoKsgdGpBQL2ehxU9ZVuS3cUmRjnVRBbmq",
  "key10": "3Bj7Fa5hkXzxKnNrDYAZMMHTXEDoz3Hn1zESLcA7QbdECHQvKkZMeXcw24PTrJVNbK3feWa9xtj1sQJFykdFjBFG",
  "key11": "35wSD6i2kzqkTTyrTuzPgQkgAPUGe73HrYCPAMXKTFzgdfgkdbRNiJ66GLiw5zKyZhpyZNir8FDiPRttPUzpMQdw",
  "key12": "2BauiYCTXtxDv1WvxtsxDhHJzy1vdWYzWBMn5djtNqFg1fdMHJLHuTjCbKQEMVbtELFUAhFCejYHRrWuGd8C6mdx",
  "key13": "4BnvAmpYpbMJfqZsHgL1wXajBTt1uP61sPMohAj7xGefhnsgxwYpbyxzvq5bBYaC4smAUdMWGSojhz2etggii3Vu",
  "key14": "28bHX5NyG4wG1HX1wxX18jUvBeBH7ytceCeQCytDRFpGcz3dFbuKMHfKtTnpL7kwFkaYJ5uW8QShbfi55yXn6xm3",
  "key15": "32fNeuzrjHyszmtpF2jCFgYFu6PVsQhEUYrqqwgV4kHWA82R7yCKczSBBcDXPixmmqdKfQHCC8aWE9tQc6phw3Nc",
  "key16": "2x1yQrArccZkszPJSkaWfxHRwqSoGLpo4nvRZS7x6gNn37XLJzGTB1eGEsE2xwN2R7vB9jekNjSiQguKfKPDse3a",
  "key17": "4LVTP9Sy5pFm7AK4P7WTC3ijrkR8PjR3dVoYozjJZvU4MGPibmz3nuSHrLGhEUA5zCTnwsbKcS2cKjYgX5FXQGHe",
  "key18": "5tQm9u3wqhWvhmdnPEk1KZNN3ytYzrPWhK3pbPmY5ZhTLsF3dM1FsyyfBSCfRvSUD9gNg6CTdGfKHGvXGwtJjsfL",
  "key19": "P7pWnkVW3kmX667CjVsY7u7f7jEuQ5GMUhnSTbvykrsuTVM92TG2kB33Raqq4fMe1TwNvBUh2jmqv7gqKMHRB7V",
  "key20": "3i7wNexka2oavjPk6DEUTVjuiCM8VTMYCbz2wQXUC8y7SFWxxBAMxzUQWtjYDdA3ZXXwGvZrd3cZ5jrFxmwvPnsC",
  "key21": "4653FBetT7d7nZx8ifxCDM65yS1D6Suvv3QXTrPp31Uc1UiTTcZR1we4FFA77D2H6DVfk3aVptBupAstcPhiRBxW",
  "key22": "4pRXiwfps5zp8CVGNGXJGEhbTJu5EZPDqaK58vVXRo62DyTtaYAVEbPe2eVRAcXq1LyWXNugfkshoRKUHgzrH8Yq",
  "key23": "esDurZbeK2zayXD3RasxCyh77zwpzfyZPon93LPoYrc15zpRUhZQVcA6o1dCqfZTxETDTJRp68BNNxDfW7TJk4a",
  "key24": "3Xo3i4PMGqXRwEEPPNqviicjN8Fpk2xmm78WJKJTuUax7BgrXHZUJD8qtTJT6pbahnYsXvFado8xkX79n7C2ojgq",
  "key25": "gdMPujKrmNCjAgWzHqGp8qZCHEh3X4yLxgqLaR1M9xttNCWiSq3TJmJkSB9iDuyCB9XoSwGcYNRxRfFbXiFNqK5",
  "key26": "3Yj5CvHrQYVP3ALwbou1JWcuuQirh38d1hxJwmJ4FE8ZXARrgtEGN5b13RDU5rFVFu6TUD3FC2pFYyizXAVtwyw8",
  "key27": "5SX4RDjpM9zAERDjdNRoqHuW3DkkSmdpR4xwspKYyz8nNSfL64EhwbJGYE4RDtG8PyoZyavtLs3EA8bcgL2edEYa",
  "key28": "5zZRhQAqZzdG5GgAqhFRPBVDTR2u7b1r9KxaCh616E5mwqkjF67kqSrkMjssm3cn8BwBFUW9mVTzMnjN2Fs2bvMu",
  "key29": "2RdAs9Kx4zHPsfPY55X6ejfSPXq5LABtpZB2y9x75EFfNG6NaPMiWffbVRu7hXnrp8BAaJa3BMJerzto5LwC72NM",
  "key30": "3vowwGPuQbTxGoZdwXUazCxxc5AN8h4EGLce2s2uerQdpGQeZGU5BcXdCL48JKuXVs7MTtb7yTWSJf77vnGFub51",
  "key31": "5wjqNCp7vZQhji5WsoyK1THTdMgbbtZydggnxZkmsTpp7QUGquinKZSHMCm9qQ7iiisaCxM7xuWBPvXyTFRt8f1m",
  "key32": "2FmNJZiaFV8qJgPkweGoa4S4QLuouRTFYPz7WEFvXDH3eDKRPVM7hCTeztjJkcEKsvg595UXAE7eopHnoAE2FZyQ",
  "key33": "4kvyzTKkeLbeDHnR2bKoQwWsnBo9xJALpEzHYd6ZZAEQtk9rrSmAsEM2FxqaRgnL1tooZwFJj3JJd9eviq2Ttpn6",
  "key34": "59CbQ2H2uqVzuNKrK2t4Bo9x43ukpSrndqdU11mGsLL3q8VDjcS2SsJ3GrEGKrjuMCwBLCKnsXkewAJxTusKw453",
  "key35": "5VeWqvBiTjwNpSrhyKhSKA4DU5qqAL4xa5dZ1MVrkvwTUipbgjMEZi7tZgeWmQCfcV6kSdVazGA8Z1uSERcmuTvy",
  "key36": "3DJGs3oQqPnhGobkNhBeebhx2E4y3iaEzz2EG1j9ZmVRny93VsJqLb2MGDdMGVXD7TeJoQBj35bTrPFT1rmZ49CX",
  "key37": "FMPKJx6fJpxdDjGgjCsubbKrRNFyPvmnT5a936PH7eDYZ71PJvfrvHBkz4rhQkwipiVpFyWNXmiMG9BtzU9Todn",
  "key38": "4pPwa2VYi3Lr6pVR5LaB9yN7pH9cHJzr1ENDZm5krbbqQi6r3fWLiwmD8VbmihAkfhvYMPvwkj3rEiyuj4VxeCYQ",
  "key39": "LC8p96G7vLGDV1N45EoVK957yJZHV8PJXK3LLHPCc4Eo6mzNNJnUx5Q57vDNVT9Ja1qLRowzxAiMEdsQbXRB11Q",
  "key40": "5iHXBRCZwAbPwLjSufsYWuobpdiK59wYcwCmhwtDR74MvrQyyqJq7PUQ8wC9VuB9yfo7gx1PHxnB8JwoWUUumcTN"
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
