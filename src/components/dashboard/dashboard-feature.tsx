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
    "5wBh89J9YUBGnvwWNbbEtmmbw26iFH51QGzMLnfsV2GLqPCyzfkTMvMFCxy6Hd71C1sFkBUTv7E89fzNahH8GhNF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FE76YFwZtGSyX4h92vu6qJDSsoQ2ifKAP1hb5dm1JFk9iGhojy7Gm27cpiyoHPdANfr8jJiu1HDptYq9RKGkiRJ",
  "key1": "wRgQrhdSgNoeu57DJ7cEVrnG2q7WTvkwyaxKB5sqmLRXHE13NkfhL49mFvCuMsejmzAgUvXMCoh2w6WuReQF7HH",
  "key2": "4tqcaizYQ3LwL8xA6SsmT9GFzH4x5grJ2nV1MvNB3LZdPkqkAxsidby1ZAuqHebEZWj2GUxYUkc8Z9LN7jYyMY44",
  "key3": "5Zb7PUzWdgRgggRyiun6xPVSUdeY8cbRgGXVnFrdBfxFm2HZ6yEPtkzumin4zLSTK3Gd9WftkY14C4BiHTvbQXD6",
  "key4": "9kE6DzwAi9P26YfFZjnNQm5s2Gfg1W8WMr8NraetCCeQE1PEmLxaZCSYXsqh6mFyqHvsHQXWr6gkdPznRH4PpPB",
  "key5": "3x7VN9Aw4E2jVdKmF4UR6nW7gCh93xVqvSNU64yVYYTH6773cSRFbjb897xrjshfAZBg2mJ4nRxWWuCf7AcwS4Dy",
  "key6": "6525buq6PE5izA3bvADZfUxPFFtJ9XhaMMQ273qFJaqotznvqEHzHjBdKZV4cTFKAjRVnUbN4Gn6MhU9HUKiezTF",
  "key7": "TuQnCenKyMehAJ9upGStrGL9adkuv2ehngqVacdugnHLjrBYhaqkfpppFaSjkz2Ct4chwxjXXMXyzBLQKJRtViB",
  "key8": "3TvHvrxcvYnxxgn3Ww1zryKtCBnFvJJ7wGSc2dJ4EhF61Qki36AcZWhQvgWiDjZrD6BFoFY4mCAZeAuKaVsP9n3v",
  "key9": "5dD25V89WUCrW5yNU6eZ9cnAz49htLSBUZPo57y3UrDoByc1oDvcNWABQ2CceEi8Wa1PAFtjHVtvFao2R3BbA6cB",
  "key10": "2UhftBwwGeM36Px54qjuq7p3asM3L2YudMScpbJNzqB44zxYD3jwVLZD4b3BFLs3nHz2nysaLxinEdJDzbBZb6MS",
  "key11": "43fzzMMiiMEJGZMKB66qvWENBE2stBPt7f56gUbwFRVZ3Jfw8j5x46RM4RigrQuKjEKvQUjzGZf1xgwkfxkmeSJQ",
  "key12": "5YGnyndeJ2XAWmXrt2ypx8jQvaJrL73decfkNf5K6ps9jjrEnHiKsDCewi1dzgi6nqSMBdmiDhn4aeGEYj7WXCmP",
  "key13": "51j87oKPkftkYWzNFWi9qhF8noDvXeXFCN8cTZsDPQxYtm5i8qYn7FEwbXY3316irN9B3Ey2SMuYAZ6D7U5P61zA",
  "key14": "tKbNQ8RNFLZ8JdFnb6CZuwvF4gNARY6B7QvBXq9ve4haivKyLHUgsW2vPYYKjEAmm7cbbqTvoXi1ff9gThTePBx",
  "key15": "4f3LyTdrnvzHf2azqXRUTM6UtbRnLGT99HJwtiZuaBmc5oGZ3C2Ftm8QVtK6GHvyu7Xzovuh1u1zV5Kp4Ydaxc5q",
  "key16": "427cF4aMCE4oTr7M4cuZgn9kDGknd944YqaLn8ZVUCkTVM9sLn1Uh3o8ZL1ZAgCg4mc3Y7z7cmvsJTT6WVZmPEQs",
  "key17": "3GUksAhjGYBmPPDvhz9xZriopcTicQmCki67z9BMqGdaMXJGE7gxeH5eBR5uzccdTYPNN7GCXaTR3x4UeQBvGxQ4",
  "key18": "5Msu439MM5gY9qmJhBdkLgztmhoiC758AXxyVsCsZLNMtRbwNrpWyopQs6tZs5cJ1wxk6pzJhiJnH51BFVvR3awT",
  "key19": "3etmuLxXhNGsdTBVYjVsjwWHDYaVDJZWN7JqXTLajtgyUGwgpyM21g9uWUwQxZZEF2bc6h9VDMFFn6MjapkeTeog",
  "key20": "4a8h485mua5dv11W6zfBmosaTrUeSH5cy2BQGKfYfGksAdgtwBSubVWgAbXqFRcTyzFi76fUtgX2Kj4Dw59MZLfG",
  "key21": "hSHKjtaregykZpbPomZr1R27cM8H2QGUFV5bhLiWkc228kac6jd8FLet5cjZbuPG6f1p5JXZJmjBfNSwQLGp8Wg",
  "key22": "3oVYHUmNf7NMMy8f6T3TCNhEu1dTfTM6Xo2Knmu5fSfs6KwcFcQKqsUknPwHupSKGUq3yh1rcYd2dGpHWUyCpRgf",
  "key23": "2ZLWGQGu5KfJL1KwyEg9N2K8AN8uZNpCWdCaiBDjv9mUVvFxGxdZceqvUjADiD3dRXh1wMEMS4Hx5kSR58qkkPuv",
  "key24": "3UpASqgqR2U2NjgJi4XvQyV1d26SRm7pNggW2fjD3UiVuC3XTU7J9FBUejiD2RTtedE4SeFHVF9p1fbaRTBiCTvj",
  "key25": "5ChAf7sZQU3iHMi6Joct6cVxNeg3PtAWP1ecM4GBkmUGmTKwEe7SwradZMQJ98hy5UyzgFFqVHjsESDLUMD8V5Q4",
  "key26": "21J56xFMQgc8weUsRSyJUL8Ex1gxNvUSkH9m7DfXwo3tj9vqy98Nie3biSTbSSvk3ehrKzTiLY3aUzX5auZpzHsd",
  "key27": "3BPXTFk7kxvTh4pDsWV8eqyc2Ro8qF2wSrFGJZbfdFPpeuQ5k1xXMGPSqc2nHSTKbbohScEM1PbSkbMfeRcQqyP",
  "key28": "2qZYcwff3uvHd81xKEKC3mP9XjbUD3eWuuBXD6cddk5Q4naHJKSp4ZSgjUM9Tpo9erqJ75ZWRqjmxhC5m6yr5WfQ",
  "key29": "5sbGXLZVArozwikQAFi2pSZHDaSjH14oBZSRMZr2o5frbQzx4GAUYBwLtk9g65TWiL7XEEMcNCckT9g5FDRzarsF",
  "key30": "3qSC934oS9U7VqyonH4LxGBy11n7zVUC3V7QwGEmW8W9iVaT3W9m29VRij81udi1XgRP3RSeoaNqgK7KkPWpyyP4",
  "key31": "8MB7eGBgES8xtdfGdQwzABoaNDUZ2BsBd24ZTAzd7JUA7CnEKHq5JSDVppXMsFojWuEQ6fbDvTnWePcVhU7Jvwu",
  "key32": "nUxwN7rS3WFsL7HGAb3RY67NXAzu5poiSKAJUZXHULjT3xPddVVf5m7PbuEnpcVfNbm4Ps51XHhbWZVo3jPRsk3",
  "key33": "59NnyjBD5DWc9m6xUzQUusqr2a2hYnFw4pYSxpoRkqe2WmnPG4bmUxzDuhKWCnMdedBmjd5qJsyzYqnP1eGqra86",
  "key34": "3KqKQiuSpvKvRVkW9LXgNrxD3UyZU3uo9HQ8UC329mPCoUVLi5Fmy1HQBnhkk7YUqG9Li9EJcn1hJcjM5R3fJ34Y"
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
