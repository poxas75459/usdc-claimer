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
    "5reVQPPC1wZ78cP4kj9hSzQQaoCPG2GqyuU6iVdbP5z2QBZF2qJ7ifoAT83s39jSzbC9Jr4vJCsMmdexNYhLYJ18"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q5bStqHKTmzvmTaTFWckSaNZXQi8bb1H1KNMTyMsEdWACNhTzg8ZmMfyuz3bB7B58qkPfCkmHYAResguLgGBhL4",
  "key1": "JMUp9XMiozv88FKBfdGZiWGFqUTvAjJG9ekW3sKkHHimN7iQ2ViDqfnWJ8xnqoaJ21h7qPAFBncdhhszxWUcjDC",
  "key2": "4ixzg5zFWkKknD7qZFdP1GRTR9gxmD1nq2NuaqpDWq44b7KffLBsx1ipoLrAVR7qdDgHpFmJJsPChimn9Jjk7Qyy",
  "key3": "3yBCEuv8b3eqW2EZ5ygrjuUbSJBnYPHsVw2wzvY3Ys51Ffpszdssw2QgtoHD2WqA5ohsyTp4vxgh36jwQRNFRjYV",
  "key4": "48FY5qCpAUUvwjcsGcjwbAoFuME7yVeKDApKPp4sr3mSRaJaRmYWbvzMhUbRV5XUuJjmpdkXsWe8V41H4smtuA8a",
  "key5": "317TuH3qACRToxxfmbrRwUxm7Zo87jDsgVt9Pu1wjHeNdEBK5dGrF6W8f663nPSXGZSJYL93kgpKanZ2X5YaKQv4",
  "key6": "2cqNTCWDUBor9fYmCzDfMSx4vVDSsobo1PNEWmgrtXkgDwr5cWocfbjm7V3ine8M486dEQ5iGXJqfr9Bj91TKTtg",
  "key7": "2ynVYuT9wW8b9vPMyPaYBbGK7YCeEQjN35whjrLyApLAxEjnkYpgN22p6gcehUkabjw2PtV7Mm7FCjjKoEn2ZPV2",
  "key8": "3TD13Pd6QRCbSXpCFzjb7bAv99GDoFEr3oiHywGtr7ncjx6ibT2tiAj1Xoy1ePRJgQqtcaAXhHie2iZfVfJb1ZjB",
  "key9": "2TfoCd3NqRzFQRk3NLGumdYPkP764RpCGw9Qyf7qWmNArmaq8fWr6M6KdnR1BvTRpM3v4ZiJ2Vv4Y8LwgKdhCP1k",
  "key10": "3vCNGLYx9aHuNNoKaV4HF6SBzd97QVap9TwYghjEz1y7bBmuHQexEqnK37zCmQsyNGSqcfT5QVZmhDUP6ZXbqSgg",
  "key11": "2ADJc8BNuQfVyTLbCfRmUfo9qsUQisT61uq7iN15T6JN6j1i5kc4XCuXa9t5mQX2nkMzrWgYNAp4wq4rN5Lxkoni",
  "key12": "2uAm67xZWYwpoLXn5mUjaAHRY3fGYiiZW6oZCm99dkCSQzriXb44hiNmDXpPrMjaNQahAS3qtsZXJiEEgLKo7L9E",
  "key13": "5Q9ovVbhRnv6cijACKDNXj8n4V7Yje4KKWsfV9oQmYKkXmJ1YUUb6VGs4oUYf9ti1ieS6zibW7FLYsCL5h46wHWU",
  "key14": "ZJNv9bRJ3JQBaFvMxY3YQ1Rd7wNQYD9cECmVCkCFLD5M4A94SoVVtCJbyrdXRF5S29WbA49GL3x56q34rr1npvb",
  "key15": "3K4W9WTREPmH6ZiGpi2eVXypVWSPqgHw5exrYhDr8dnh5nJXbKPMbiazcLzLawQjqtuNWvQz7RrV2cr7Mfm8LSNr",
  "key16": "4Z9N1QY8iAjQxGt9HNSJooRyXVZX6i717Zgxi98YnA9Ks1SW1itDXdyVDqFBDceiUVgfbqxMFx4m3jredEFLzahg",
  "key17": "4VwTKUrVkEFMm3Cm6qaGukwXL4h7aX8vRSJiGbDucAoB1pKeLZv675VQKy9cQHJArKqgW7JbjMnW1nc8ew1us28G",
  "key18": "4sz3UXG97EbTKt4Y8omHcW5hpazpDM6fhB2Fg7TpMrxG5KAWL9oNhghSqUifHGnsZHq6fUbVsdUtNpgCd49rztRA",
  "key19": "pyyFHTK9b5EKdiJTh8dX56rNpEFAmAJA1P9HDi5LHErSyEEYH18c9JwFXhTVxgah6mDkwyyF385zq6r2TE3cNdC",
  "key20": "33jHnkPop5Xiq9iQ6uKoAnVbWP26CqwY7Agwov3u8hU97rLNqSUXiuRFisFRvcc1Daj5QH6Y5Pws1W89FPCuPgep",
  "key21": "5ACGx4KHVzoV9u4qp1bw67A5KweSwcrq9yyzw1WJEbpPnJgSumJ2sWd3c94ZjxjSDXpdh4xj72vLGmjSeHQPB6UX",
  "key22": "4FSZxtgijKFPKPU2mnFFmYTF3yqGzrzT5N8hF12cJWDgMhaS8V9WMV6jrdKRbHjANa6JCaQ1Xj6pM9nhv636dqcc",
  "key23": "NpnyzgnzEsTAo37mg6nwqvN5Y14SMbERkAyap1azLyLf5Mp7QHvoU35PowfkoBVxodgvHjMsfFA3bRr8tiwoWb8",
  "key24": "4m8re726sHK2oL6vXcGvZKsM2j6ntcdyQ9TN7kqqWsRQ9Wv81bubp5JuZmwePfnJPyR3EzY4t8RRdFB96HJCZ6g",
  "key25": "27sBgXuMrYDhWQ4i3KqWttdVSoXSKAhQXZc2MPwqSEGVcRSF2C5566B1xsHVHiPgeBc8PKL6shgmMHLhXsDy5YM7",
  "key26": "2tkM9PU3GB2sfzG1aecLCaEsbiv3gy6n9KPmsELexPCBurjGxDagEveK6bzNCW4aCroJqUYtGLDHQLci7U6PKQqo",
  "key27": "2DxWxNFkjxRmF7hD3DG98eTHVmCETnBLzHQEi6tgxWqQ9wQ4G5VfqQAMB5emtn9gbTqjdyXMSTMAULci4NkcaoAe",
  "key28": "2RLcGtAA12zzrCzRsZ3C9m5GCfqZ5vSZZTs4mjb5iBcEpVejZxB2Krt52cGCvwR4MvSnYFMRAXurhjRx8VPgh64H",
  "key29": "622QeSF9riQjSDoCMvSjEvoFvSMdrQKywVxtp1ioC3JkxczwBHxh1Ug2Crge3Qze72nTt3j5A3N7qJ8e3nYkNU7x",
  "key30": "pRG5m5iZ4fyHhsxAWhS2SvL1tVeAmVdLnuJrs8gY6H9BibhmcvvoxjnSJFjNpPJbJ8kprpgpfJe2kXvNxWkFfND",
  "key31": "3frjk7ZoQEooPZUSGDG2zALmiHVqLUJEcgLav8ZdCy6G2V6uo96XF4DBsMJXtnZYWhPuqM7cjToPtBdT4vVPWqYE",
  "key32": "52y9XsqKcMewKWSBhcG9XGnCLwLq7HP8jx6AvRtbTLjcoLrqAGAXmoCw53myRA887Du8YeLmwECvM3ySD1kGuoPN",
  "key33": "27GNW6CTWpgWG2bF2HgAE8J5TY57sAHY5DiM1CUf7cF7vztEEun5sujkCaqzaAoixFrAWP8yxQdHDkRdpxFTj5Qa",
  "key34": "5uAJkc2iBtFYJMJWbu2SrEybXEchsvKiJSNR2cQEDUYffxzSgdMEAbxVT8d1GxYKhMrsSByKM7mytvC7bWKD81Mp",
  "key35": "3JDUTRSjYFSqrX3b6CHdsY6S65o2FaYm1oEjT3J3ZBeV9SGMarY8qnzBF2Bp81Fo9cWHDkr4WjrHtsCSCU2dyCjp",
  "key36": "5pEGPfB46NyvC8G5Tp6JrprA6xeF568fqZpXMYqujnEjSDXpHdsvRvJQ6GGofwpxnW66EAqScgdMSBPYhpdeXQHt",
  "key37": "6395JN9x2fgJTyrMENaNGSZCTvZuHaXHBzMaawa5httFhPpCJUYDWuPKt78AJWov9ZbtYpVN131A9gQPv6MDLZ45",
  "key38": "4gUm7rSGaxchQxA41MrXMRvC7XdugSePL1hYwtPHR8E564zbUKnoA3bdgWH4rQ4n2VLmEbqF4X6mLjJUaBfFAosr",
  "key39": "3SqbYjWAB4ToyiuZv4UiWZC6M7qFADeoi95qYotScRZzQqiqNKG2JxvGX3LUsSjoMhjoz5rhW7tGFFzniaBbMbUt",
  "key40": "4xufrByDRmJxM2tE5FA1LN8eHWBSPgerZZE2L36gh8u8sr2D2VXMc1WteeL2jAa53EgJkSj5fbYJbUxEfYiKsP9f",
  "key41": "4BysPCmptYsdpuZ4VDL6VWyRpLz7fJ7bDGino1r2xfvHZHVbwq19qp6p4j2UaTFAcQquo2H82XhXjSiycjnhMoWM",
  "key42": "3VU5rX4wHyBhCeQLPU1Njztsgc4mYvJbuG7pPxncqCbjv6E1RxM8MkpU46EUSkbYXm783ugyQSxtzd2PnthkKcdD",
  "key43": "3SZiP3rM4Pbfcc8RYkuNYKL3kSy1tcfTxocwF8HXKjJMyewUD25Fu2n8eHckeoZmSttZDGLQi8Uh6MnzpXZjH6PL",
  "key44": "4o2J3f7XP5fbavFnVBV6u7ah8isp6UfZS2SL3wQ5f3C3a3cL7xGad4xsCgrgxJWVcNLcAH7mMd4cHtnmqWYNVCFb"
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
