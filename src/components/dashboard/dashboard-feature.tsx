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
    "rrp8sTY2REUEJhC9uKNLegQwv3Skyx6sCQETksJVMDPw9eQkioq7mom32XaERfdt2egzLiav5xCsCWN8zFL4FDa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TsuGvB3ixUdGBvqVio7zCNgv7HxhL5yn79smjcdNjgfZJ8yGScnyQBXxP7L33nw8ceEv76Ss2Yph9GKKPaCq5Tr",
  "key1": "2jQnvTsjXWMb1jP2DqvPDSxUMsTpA7wowQyrHhdvLCTCETi94nxasVDpwUQqhahLGxw1gWP3VsXiNFB68U67uots",
  "key2": "5k4BMnA34XAyMFAPyW7kWnjFpLrERSKW4sREh1qyDKfKtJK8ChQrtBrtXkwN8iPTqLDRLAJi68QVU4EsPsgMSavF",
  "key3": "Gx7eftY13LEE8HNQYyCZ5UEtXpaA8RfAtFgGTj5DhzZV3czpXyEM75c3z5SKh4txJkHynpXyNoZ17s5zbfRUgXt",
  "key4": "2HbmRrarHDWS48EJvQDSxD5SNJySw8xczeern1Pw3mibNqbFPkDWXtGSg61V3zAZ3J2UPLdXCQM87SxsQ7BoWdnG",
  "key5": "9R2cJ6e2TFCiJ2J5MxGhNFpASNrc7BZiHBsa8pF3ipYNyEzoKvQgwUNkypHX8m4ibA2pcrjKtKTtCbcDcKy1y5D",
  "key6": "4YAfMPvAick5R3TDh52r783KRSmbvN22Bki8yitwCHVM7Fx1DmYSqPS5VNpTjFao4hTypUVveY9BNkrfScN9zgdZ",
  "key7": "4Z5XEDhf7osWCBVviucD4MLKqZLTyDV98uHgXMuJn8wuxfN88JBMk2ErDWSzZkBvE67gZaZDZwWS5ae2DFRe1kLX",
  "key8": "59r8mEksno1tLc1bNX6w21qYRuwm88TCFsuMWNM6YRpYGtrwy5Hpm4f1Fg6hwSnaKkaHsgYouEx67paAUY4MvsPd",
  "key9": "vtXyqvgpp9De3nE5wPQSWW2g6Detpxfpc4LLZWCBkQ6A5Y6Za3GQD7GZbxAru4jBLuLMeXeesA1bGDmCaxkMnM9",
  "key10": "4RdA9AEDo2zg43iLzyo5JjQdzVfGUpWuG66FP5SBwnuLEi9biGFgP8twf7yncbp2pciuxxvQ3D8LjV1U9u6fdRb2",
  "key11": "ksLL5KJfJnvKi545jMNZ889A6FHuvSwQA5RDzX9ui1DcFxgeh9th5kuHFgVtw9i7KcdhgHYw5TgvGgNB6cXSkYs",
  "key12": "5jLKRj4pbUQ1mDGAA92jV9gBMQqvxmvR2HHNZUehWk9LuG4DFWqhBLx86tMMRAvUGEASrQ61j1MurEmyoH31E1p9",
  "key13": "5nLWXXbVStfchFZRja6CqysGpUgitYek6wT3boaKFzfijJQRZNAFBP3YpxL4RbuEd4P4XvuDVz4W3TV7so2kZTzn",
  "key14": "57GRUwLX5BRGLtG6LVHw3S48jd8GYea3YQL1AWSGMec87PZdcyRgcTG4yFbpWMoanwMmRgf6QJLjCv8UqUbTzMtP",
  "key15": "4KMAyg1TZtqVNCixYhkg7AdGFT8cjoPaahPvt3vrNxrqyM3VcbtJ3XuRoRRxHVYE5yoUsyYwqSgAppRBHjC5jMvt",
  "key16": "3fV6f9LjqvxPtA9u2GK9ZDNLEmWa52tcLfqTHwpPEoG1ioRKuembXKBdALiiuNYJ3yqhSyShkmQETfRtJA3P4P9M",
  "key17": "4AiuHPT4mxmHMZ2S1zgaEcUXGA3bAuz2YTczyayDk9XQUgkaTUZPVMff1ubGaehvKChZW5ykwvjig561R1u2LEnC",
  "key18": "3mmdGPdyWAdMYaZcoryaZoc5HEAEKFyHGVwZdrahSdp23mX3tDv2JfF2ubRxMa9Tj7BZEc792rMKZEnfababMfyn",
  "key19": "4sL1ChWp9H7Fzp9WiEcxjSKgoLEYPi83WAMhXtFUKAxMFj9EQu9a5JYb5jovnHsHdUfEJb45kFAPC6cf3a3qaZ3D",
  "key20": "5mGssmXKUrThLq7PxxAfe6R1crdDqKf5QJ2vNF8VKUwEs7Sx7ogEBFRyGd8WCe4H1z4ELpgyjFJD69mCX6x8xm28",
  "key21": "4L28XGRMU7d47rXxXb2A5RyTvhx4GVe5aVBkTabw8dGograiMSpVEXt9hG2UMhJhzvRnEix4fUyB94SEQNQC4rFq",
  "key22": "2Kvu6nq6JMydof3kKJSM27DKgSw1AsfoMdEB3gwEdhDYijfTQnhHHXqHxjX9g946rsFga2uHtL88ha16qH4p7wkc",
  "key23": "Uuw688UYBG2zTXRDxc6iR1wp4QkxjX4iTDE5RbAKgMPbPWkBBr24b5zd6KUoHnF7YpqFQH54bYW8htzn4r5BKjS",
  "key24": "3UfGHuTSdVEsZw1xayx1GJDALDPqorvd1rmBje6UsGDBCrniSQML8v7yUJ2bfT5CGRFghAFTJxsyYU4bGJYRG2LW",
  "key25": "5dW9ZrqEmzmTWZTyzssRQn58SqRgiL9X3mRRdJipcWJdVXTKfPP1Gq3FAsv7rvX87jGf7TBsmmZbsghduxUWUZUs",
  "key26": "3q2dBdojfvfb86qKAUtJt8BEZSBfbTNDGPABLC7uFybcbLhpkP2zjYRAiMjZ5NPsKvqFA4JR8PuxisEzyi4GAmYf",
  "key27": "3XNqWkj2cZdh6kufoEd3kr6XRWVAHyxuNTy7jFrBKtQjwaKwA1Xx9xo8FwM2cQ1QQNV6SEPCAqeUvnzyx7QthDv8",
  "key28": "2MwJ5rh6SSEQptwnbGoyti5tzzyQ76TFcnsG7Ua7iW6LYwx8FC4TMJMmDo7yo4ANZ8GHKVuB7MWUsFQnAQuyTfiV",
  "key29": "4hhz7pDPNR4akCF6a2qupiCdZx1EcNTqASCk3GYGZnDndm6eEcyGh16YeCoxpY6kWrqCLiJuUdT5VLdjwqvtbRRb",
  "key30": "2Cq9LRV3zLy4xtanPHkg9DNyoCCvmi25dpEtyxE2qC8p3wcq3sY3fe6vkVyvUL8A6hev5ZsDHh2rXMjXFDSwoEjs",
  "key31": "5qsY4pnCmoDAseMwtJjx1c5qTfR1iP6Qhkd2YfdiBvrNs68okoZq8zn7iST7gFdiDtVaQT3H23Tp7v3EYmTAijsQ",
  "key32": "3MaQS6LypbwP9FWpBR77QSsuKUbxZHb9eKgQgVJP6pAoBtCopMuQ3Wehf7Vv4DD8DxPuZSeoPWXwLjJ8BvfSPKUm",
  "key33": "3Nh5a4i6BNBcYuNEyyRqjZeX5VmKAnV4T5137SH7U2a6LCs8xDiAM14oGgVShvQ3VVwdTAUyjHVaUpXJMCkqA2LJ",
  "key34": "4XKpKCqQEFL5qa3yqqnV1Q3GkB6jP4auzukpYSDz1Xps9p6PmSn1AijrD1vHrdfVpTH1rzBbDGmd5EiE464xGQcA",
  "key35": "5r3Vef4AE7cKB5SteugdzMWo337pBc1p5nJAz9N6C7L2mCedZSuXUPkJo6tD8jYtosR1dxKkanjr1RhUJYcZWEHV",
  "key36": "63umsnNFmhsLmA24hdgj1VTmFFGpFZHZDY3xxY93KDHm23KF5fWxRMaAWjXJhzeUoF3kiub4b34ens9t63ybv5f1",
  "key37": "TqhyJNC43VkRkp5gwXwdmhYm3uNU4Bnhk5Da2AT7iRYpK1gZBZRsVM7qZ2hkmJgM2ZiWvE2r3pPorFJzUUjArbJ",
  "key38": "4bWUjyajDDvUK79n4Md3G5NefZuaTkpZdP5xBhrYSih4qmfS7zUYgypzAxquZawyPMMYHjGsgKgGh5CPaXkeGAKt",
  "key39": "4mcS8c45mWEwAPCyqLgSLt7cqDQdwAteVVCubN6b2m2AHtokQVwKe2nJJiA5fxTchaqPNyN7X4Lgh8uQbeynXzJb",
  "key40": "64ZXq6pUcagPGAay9oDbUPruXoyqnyq94tu7rKMiMVNo3k7Yi47sZvxwWCNoqTc1Vmvq1LjDNDWkpDGBDvNhZSSZ"
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
