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
    "3U25mGizEamhduBq2K1KRxfHwkQbuB7TK2AM6FiVfMXWchwVkBqpQ7fuAAa1rtHwsgvZCiD3embPThXWqF7tamjM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d62CMu7DTkAyjntDYzr3G3dNU9emCK9vzeE87PRjqHgt13ayTPMyWJScrPknqkBtBXPZ82umYfgkefzaREAc1YF",
  "key1": "61Bbi4iyaqnrjmMkrwghqYkKAztmNengYwvHYhXjz6nM6yXhKG2AhmyKozJDAMDyR1y4p4r6qt2A2FyEmudaT7oM",
  "key2": "4E9V1Hxy98AvLF9B19Fntm2uGfESFZk4brPTF4kvMe14LR2fpZgmnjFzYKHXUMvxtgvUX6BcRfGHy8wbNb63gWaW",
  "key3": "6baPFzyjT4eZW5Zz8CcVbo5pT6gbUGSJJrV1ZXSYZ3YVf9UQRGaP9jMqLibLkYHH4cgEi7mB3myGrbcXRnLcoBY",
  "key4": "3ffCHTgJfdLtivVWdUNybFBYGLMSdJLgF1rVButxw8tanrccadeAfUGzZvuMwH5pTr33sH49JUe9gve4uiPJVbnf",
  "key5": "BVS5EPsGN8UPL1RDpZLqPCRar5yLGsTmTmLxRju2r2kx9h6haMwHVYuwduevjxq5L2EheqNzTaKMFT46P8vAUTS",
  "key6": "38oeX4VNLTD9pzGoh9HpHrw6N61X1JsFbDMH9K24WxQ8AveK2gMmCX4GFjuHVxvU4aFP2QYqR25KnEg72hwPCBfh",
  "key7": "4dpuDAL2JKaJb1GSrcEVttT2hd3GzWq8H7qEb92FXDpjYJ83Go5NoQHuXJ5jAmP6b1XjrFEtGq8D35AvSiDJMSHs",
  "key8": "8sKeJdxXNU5ronUvd3gQsM3daXWt4Kz88CJ7f73sRQeF91FsBaH1BrYw84h6hrGdq7sii9TUupdz5JMbS8GjRKZ",
  "key9": "Y4W6NeZpNtyLveyWwSVgUDdNo3U3KcTfnKpfKzDVhr6V1jpdWLMjJSnfZa28eszfLU58FUVvNz4YBy5EyLtmq4F",
  "key10": "45M9aZHqv1unjV5ypJqSm6Rp7iboaB6gZ3ypcxyxkxTGGWwV9Hr1d8fXVRVvAN1dvyuqddbqD8f5UEwrLBXH5zgP",
  "key11": "2uaftW5UaWp5CzVbDenXQV56AoshndYaediVHNhfDvge4yC69t5hFJRmSHW7ss6kQXK59WmEYLosB8BAtFpxens4",
  "key12": "2P2q8rizg7fcvfHVa3KRc4FXZBjyrDYAnwptZr591SFHCGvhsHf2Wwe6KGkoNcZK4UxZcP5tRDFYAanJ1jz14vrD",
  "key13": "424By6yrnngWBB2dNHxLEdqYBfMvjzteGDt92Kba2qnozSK8jN2SLt7kbjQA8u54fPuuoK9ssDm1G27oy8Kh4QLu",
  "key14": "5Rn4uNMRpPiZgVY1sKJe2d4EdtfkTZFevN21yxkMeW5L8Da6EgkDqpkfsBqgiWVrigLW19eDwkPbfuSH7JQqQk6q",
  "key15": "2GKuK1xKHQdH7SmqrBz4L66FiVTqZdKAQFu9BicTfVQaiCmTkr11Py464ZEM76eBezmm7heFC5Qgby571HHQoUc4",
  "key16": "3mmEqZg57HvAU7qHxqQyCNpSW9HeyPN4XdsgdKKwk5AKQ8Z6pD4xcD3i9vzpb52BoNkgWWzvWXCNRtXrkKQRk26z",
  "key17": "VZGvpqGriECvd2tALH6CrMEp4GB7pCfTzbsFai5DeNXUcZF9xyjkNyWEFndcJN4uSw7PtYFZNjt5A4qquHuh3PL",
  "key18": "3EqHtNWNtqokENX2ubbwEaW8YTGwjoG9rh7HtdgX3hLwVxXydsS2tg79iPbFuqMivCH9gM2bAH6ukDczDSZ4z2yH",
  "key19": "4ZBLACFq91EjGyDToRda2R3kxFaABvzJgvheRDmNx4ZBxftAqdvixDVGDVXBFSxnxNe9hKMxHiJYTe7cTaPuVajE",
  "key20": "58gFYnwNMmiNUBebvUSBgpo2vnzVEJRGrsHpfTjmFVz86N1ht2qufs7Sw91nhTYD7fBZr3Fq4sYU4vN9P2TXg8T1",
  "key21": "3tWPUE4MSzt67rw7nWA5KEpYWYSkepPUPB6rQduT4kJa2Zar6C2KykfjykeUCsZf75fYmVoPPhCEyW8XCJic6DYb",
  "key22": "4azrXQKw9RpXGwo6UVuJYiWuCb5yYQ17DeLJuNboF9Tkix3SsoQUU2bBScszBNdpAPYwiuFWZZVPHG1jS2nva1LN",
  "key23": "5fZvb8zU4D7wiQanM8bd4Aep1oDsMauvjDEzeqSpNtc8eRR1A3xMymLdFM5L8zizSKf8Vm67fzJYTBfSVUDHQXUd",
  "key24": "5rprVS3XgGZDEVFYcuzoW3EXPHoQ7M1fg2eBS9teeNQirRRWpVRsS3qPKakjnuvhZydoiQ1Lhm8LAW2C1p7x8SiG",
  "key25": "mh3fWT8mtq32cnMaHyG6NtQqK8uDL6edm59qnSF4DRF7yJSUHbhYkQZwXU1rGGd3AX6UseFVVGb64ZanzGsNzhT",
  "key26": "4QHQ2e3K1M9ZMPy2RzrDRuVQNScuxevFeU7kiHrAc4kDqLLqXoSeSTmua97k7fKKY4PDuGTwzx4KcJ7Xj7s6pXjY",
  "key27": "4LD4KYRJNQzpJBAXzpc6BLpgNRMShGZoy5NUDxT8dhSNrPgANssYaRLf4ZMASa9NN77sErnK5kdSTeN3WpuPqdan",
  "key28": "2tjx9151BrS5pzhE4wmKdS3d7zVqR5LnY6ZjZhkdJkYGhLaQA59XrGWSqYENeXGoipU6XssbexUqsPoLAGuzbCWV"
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
