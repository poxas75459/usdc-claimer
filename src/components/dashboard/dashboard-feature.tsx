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
    "2aMpTiV5h9BTYMZcfPvSCLbDD4ATvwXDUvHooR8ByXY91eQFkwUsbPs54jukUA6C3N4W939kcAGbSxvpbx92z5GY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ia8Etd2gSezZGCv69Fxp6qz5eLQKbpMNZ5baJNDNmr8pBvDGmYDoTg2fksBydpV8hjoW5jADQVLj12yRMXTFWpV",
  "key1": "94rbgbmC1oN2tJzLrGMSt5KTaHhqP5EQgDbkjeTo4mhdXd5poapkY2s69RWFcM9UCC29c5uyS6Q78ZnbH8CXArm",
  "key2": "3KRhvAh24z7VbCKFFvtT8Qwswpd2Bs6zjFnSAFLghCaMvKuW6DopyNGhBVm9CAhEE6k9rGE3RfxzwbyMW2xfRNe1",
  "key3": "5Rx1GSDq13ue7ZtetdQzW1ZMstzbfoq58zH2Vbttp3LPYcD1o1Mr14QXPmYngMSGCYws35bMYQ8TeqQ46osSmNvQ",
  "key4": "4wSBZFPA9jGEgYySs1wNzcRWE2NygnBg5oxenmfEyAhBd1ADajwxmMUjATcEYybAbQsk7Sgy3Xz2kCmuCSkQnqNh",
  "key5": "2ax4sPtVq4FEBi234Zp65WswDd3d5ipYnJ9rg9ZxZM3BXQ4xoyQfb7Ys5a8qGCBxQ9oof3rKep5384iQ3paNqen7",
  "key6": "bFKntzCGUCodKgh6chF9VV4GWVSZwSpRN9fMybB4Mo5JK5UDDQjfpk8Ef4sHVvNPi8wBcjy4oJKC1dMhPL1qfYc",
  "key7": "4sE84xn2CFRWFXMTCtn79898XCroGi9pWCqfrepUPDyPNrjfLGgG6k67PkCYvRqLHZkos4CepKu1VFmgwLrTue3L",
  "key8": "4ewphXLDKk2YhsLF8YETfFRYWKZD8BK4FTus4gpWABBjWmicoohmp6WYy9TkPgSY3BQpemBtDPFtZf1Hja4HLD2a",
  "key9": "2P6p1Gr7xLuownbVkQLfA8CmGy31QLrXy4hiUw3HnM7vFXKSrF6hSCKZXvx6zENkx6z6boFNTj9j1k4tEpoLgNhW",
  "key10": "5gojH3W68tMBtwYGxX1qkLHzA7nzAfNAvWnraeNjfSAiiKiQ18TcerTBFNGtozPjXtqwaNm8UScnMkSSwaTivBVm",
  "key11": "3bR5o8PfkrgEBVYfaK9PWWzzJ3q1dbA6EsveZPTb8QBYsqaH51jYdtJeGzc2wuinu3ixZydnMorfQiVKAazB6ShP",
  "key12": "4HP7N8h9PKHsNJzTmwHyTKJR9tEy5PkPuLB6uxzPCQJUL8JUxzAytpE3TCokDKQuED9oXFPqh6VASVoogZitgeTo",
  "key13": "57noRQFmMA8gipBvUqnMJkUPCVUbbBF1qFwHrbR8MDbCN5kGJR3vQxx53MSAF1Ycww3tLZH22N1gUKWwS8HTi3Pt",
  "key14": "5q6q1KYsXCtizkA8VuaFxZnFMRzGvz3Hx2wt7fZ1pxSbEks7S7RaxQNRDsCkyDTyfsbYotj3MMbhYCQ9DArQU3mb",
  "key15": "2hT2qzdRzYsQUVQ69kniwFBjPKQZ1QZc1F3euZxpyUdLQaj1tyxha5aV4VLzsCNmHepMMkfa69LtF4tQzWtwj4Fm",
  "key16": "576KKsieqsXkJthuz8eKC463HVHKWxttGiVzj99fyXHNffSakCpcyZS8Lh6ethQ1mCYXJAvFX7keRJocjA4uSoxT",
  "key17": "2nCpnU1R83yyqNyeb92SPRcG4zCYGTq1Rg7JpGFZJpS3GWozS1aKzix6yyAoETj42S5Z9sp7htRgbeGNBqm2ySpU",
  "key18": "2ebnAynDa2XYf3HSj69KRq6eZ2qVhQNtiYf3heYKSbu8tLWLnqghc8b2XnZomhtQXYtawEfU6wQf175vrJqGhyCd",
  "key19": "3KXCjomkV1du2J3bNbfPNKZNM4au3Lzs6ECjSmXR6sHzsKnKS9USpXSgZMdSJFs2ABM3cqTa3hUA7i85TX16VQJB",
  "key20": "gw8HrnGVV1MkpBmusg9HsHUDYpUnoKU94eKW4QLPZgtGMLJKQ6kLBdzFkYt8NEjrZM7nWvzWZWhJDi4pnKpfMJS",
  "key21": "4VJAdqpQ4yZ6P5TN8EUidULzdwTyQ5eowtQ6Sc7a3ybuAnhEymjrhJVLmGjXYiVjsUjFYkwcuYUS8WdasfZDiqME",
  "key22": "5yF1X7tHk8p8qUsp3t3QhuhNHy1gevXY3r1Zm3uyYVxgi4Vd1HaZf93VpLgQJq3qhtkjB75vW6tkKRoiyRKFJwrM",
  "key23": "36LT2D3NrLXwmH2jmAsebzuCpGhF19FjiW1PMHZnGUN8v6jtYah2JXbx4a5Nc9LcFwHrCnE6gPyUDrWEFoKtvjoU",
  "key24": "3zpJNZNt4Xsgqe7KN3sFB9HTE2x6SAekjSD7qwAnwbsguPoSy5eoBSGba6UfQdCM3R5eUG26h71v7DvU3bbhKcMv",
  "key25": "2QUfkGcekbMpYNgJbUmJfwD3ZD6fG6Hw23t5Z23sTLHVaVRVGGpiy7KWUrUJUWibU2DwWwQSobFNCtqGRLiKKYke",
  "key26": "qnNJWvT7TpzMJMfA23jWXNh827ox9buDjw2vxSPj5iNfgGysV1saQiVqzFgp26hRD4h1MkMPm91HiQhrpVRfs9w",
  "key27": "3xAaypDQtoqoQ2HfWy6aSkuMdV9zkkbQNBwuzB77Gu6NSV9uGXD6P2AimhiaWGLjbH3GWSh1D5EAx2N4sixchcVS",
  "key28": "3GZahzP8w1SX1zBSPPCNu6mvyZLMAXyAegwMYDFtuq3FQ8ysbnqrp2dZv3Jz5ka5cJ7pHXXfeYA8p7nfvHDeY2vH",
  "key29": "4BfwU1eoShCUjCSAyP9vcKrZ4kEHWG1LycHfzvq6tQaWovXhMjrc95SK6qVEy758Q6Z3osw1XR4taEGA7xaAsxsd",
  "key30": "4FrChEVYnhDLDgyitmkQnZnRCzFyroxEMCfKB7C84GBu4boKYtLow4fxmncCFhJRRy5pm9BHAfSVsFLbjSRyDx9n",
  "key31": "396fK4uuD3fCouZhNkBSUmesoKnZNxvoDp1cEFBYFb9EccM3vLVhWmXK6Ss6yzhFMDDK7ZusPKFeeM7jQRNWLuEB",
  "key32": "TBMbKncBNtx7nYFzrKys2eSkrN2tXz4id3SAwbxKzEAqx9TT1Tf9uW3UDxLLzQH3tt5iQAARAQ9GrexSTzupaNh",
  "key33": "26qe39V6wKiX3FfyAZtKBVJefaRYGt3nTmRX3UWV2FvHLDY27nN3eXC7uv9zwL5bBjbyGgvAUCoWPR8BYTGQnHen",
  "key34": "1GKwXQQSsPQ2xgGxCL1HFVLU3bC4FG8s6uZ2wWnXoCjXxrJMDqsWRiiVpjiMY4uBox2b9ntqXS29HAFhEgDQcJu",
  "key35": "4kxD6xPgbnQWkjh6rtPNnqEw3Nj1uzGncZDigAt5YaZu3xi18LcxxYFAfv9FdMchyVtVVgBEhsYhs9nSWGvT5mWR",
  "key36": "3TeGep8dvVtgCDAdusdaATN5eiJNyHhTggvybxrmdqeS38RSGyid31gkt4n29pcekdQvQwe7F9ZB11Mh5jVeeRnK",
  "key37": "2LwuuS3ttDx6dwdUfJd74q2CdKS2xnLQjFr3EBXpw9hdwHHs8GxPSibC2UH5QnQpzRAfQSAX9Wu2E2TjhSzjcUZz",
  "key38": "2CBaNQkbyw4UVEh5gyo9EanXY848siNm4QHk74s8uVs29HACsgKBYz18xtjReVWVc8BV6EUX4ZwaUUnGwvyQ32ZD",
  "key39": "L79wVWyBaKVKMfphWkByxsmyhShamBTskGv3nnN5UHvehmX8nSuVkmdovzCAdshkt75wuLytdPirUy5iw9PyCtM",
  "key40": "2fvacHZAnDkuqdUKGDnLsaPQdRw12nwGaHhqVYrZpm1sT6eLrhVqJ9FoMtHuMzCX6RswRax2jZrgKEbWFmSFZnRs",
  "key41": "F2qLrgf4BLirs8B6CyUHjXx9TeKids9TnMRxu5P6nRRMHtnDWmXD6JrcM9EKMM9hX43fZeBYS8rmCbYypZyVxtS",
  "key42": "3eA78uijq1BJXdBvKBx82Ydh4weBUs6VRWtNZQS22bPoVNtu4d9qzMykSqfezTy4MCb9xpkjJTeJqznaQmsM1Yjz"
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
