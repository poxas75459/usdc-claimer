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
    "3VZt5F8m51dJpjo9e8DDtGyg2dncEUW6LdDu2ZGw6v33B6H2qkT12J9VsbtF16SrshaZbKw9VfFigq47zuD43Vn8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R7VPApeviuBz8d86u9LhgbDdNzrWRZ8KapX794zcchQuGVP2rLiTRyG7xSJJsEdwWL51bwJFTMNLCFaq9WSFAPp",
  "key1": "5Gd1XeDLRz9sKvqQb1dZ9AmLeZ93W8EQ3BJBEDKUTBzrRzAtXiXKDyZZqe7A6BWeCje9e8wfSxtgcNqkZE2rDiJi",
  "key2": "534mbhUrPqt6LD4Kb3cLs3dDJ6XG81hEXhgnJToQZeTbr2WENDEu7rzGbU7YusC1txoDqBd5hPzkKDTc7S3DUKa7",
  "key3": "5nXCrYE458gkSNzWiz9n7gSS5avBzrEMHuynHAratUKVvRjmWRzXoENeXDcY95TgL6mtihWdKKR2BXon5NwXWVJJ",
  "key4": "5FYgWQkbtyrnnhsHk5uWPRqteqDTQRk9PWg3DVVKQWn9wWYMHzEvXVvJ3w7iAsfMYQm374WuY1B9o25KYMWXuy5e",
  "key5": "31XFDEuDw1bcWxqoA1fV29QRS7Qo3yv9DWxzx7J417rKq6qYehzf2AbqXFgKoU3de4dhf2s8AmbpyuJedftBfn6f",
  "key6": "4HteNvKxcKoUv5kpZEZbg8cinLyXJqWYQC6DJDyoX6WdeQgtgJCthyiz1KoxpXtrWv8nRSrY2oDREEYciHcA4dLf",
  "key7": "31JFQiAcAeZdLB6xYW1EvmrAzdKEYDTkTqcEwwq8h85rF4S9ZEBgh1Pc3WCtGboQfpvrRydvR7eS15WzCk8kxnAT",
  "key8": "3L9QkWnGt3bJXyjnRQjUaUXs2BiYdkqivibyCxFtCEje26KiCnGmkCDLwd8SQiaGVn4HnfqpBpesLAdG6uZ73qdT",
  "key9": "5deaK1oR9LhEEdBx2T3rfTJeYVEYuGRfWjpDZDHnP9mdmzFFRMZ2PxX28H4N5CQ79MazcZFbppV1aFUJPADd9VRj",
  "key10": "2B6SPyLPTwoGfQc7SZJZAGmyM3FEGrc4Vbq6k88fZXgnYMfP92RLHfD3i56ziDW4gN1DNwmmZr48BCi9xCMc9hjb",
  "key11": "2pV1rCScRaf1PLDpcyMBhv9o1jMBkM8YKQpP2HRT9gUWqvr1Hr4vq4jn8yUGStfavmcbRq2xPDeAsdimPDzNJa1f",
  "key12": "32DmXGtYYeXg9ccj5K7fqipcENb6wZ1sBHPjnNv7HkzostPzdmTseZjVZ7XVTdQjRAWi1yV1m2HUoQwrgvSPbiHy",
  "key13": "VYFnZexmjMChS7mhomHp4B21BLVSRAqh54XoZKL6KXKMjX6tGgJux3F2TGUf6wsz13wh5QPaACdd8ngJNX8Hv9x",
  "key14": "7RtYGmg5hGGmcGQuUMhThi2Wsbq3fSGpKG65mPqXcpUmjJsJTzwPGqj9ixahYDYVKnhC4anbUa5BGX12qn9GPTi",
  "key15": "4ocep8u1mWSAtAE4Ni7avgkC6yKidf67WCyAPgG1pweP8nornVkkcdrxrUkX8rMMeWV8LAqPPeezDK34z8NRvjvw",
  "key16": "5nv7mSttGzdha9qiiytLedUsNXBJLM27pdvpBChd82iyE3mAkUS42pb639xGc7XLgNxTqFxs2Hd2YX9iHDZuowRG",
  "key17": "3yGzhpmMjPgopacKZxrVEyNmdAVPmGrgNzerWqPMfspBf2jEsLUwn8vHP81iFsA6GgtUo3Ma62AUnCBTv717Z18i",
  "key18": "5dhnjX5Bbj1jjvUNjbaKWgpDzhAQqX94xnd4fEqNHcfnVDEZuwdiGHwidGcHAwBQ6uQCqW7wsNfjRtz544NxoPHS",
  "key19": "573BtyxQLcBE9AhbqYVJvoFpuUx2TAyWkor4DGgBVVSEGJQvK5F6w1aYetUbPhfLvtFcieKm5RoccdACLZ6Wr7QG",
  "key20": "22HnMCAXDz72zBGvuqmgTaMw1R2ayZ5adBU9NoVoCzxn9KbsyZskArhPkroQWxzYrfJF7JAvfw1KZ21Z77Zzrd1W",
  "key21": "BkUhRYciP98HDaYTAPVQdrKD6ubmuxj5L4spUpuuDLFNMYoGFUeWYgCH8XMDnhzcB5cUQ6mDcoakpRypPn2bD2r",
  "key22": "535c3FgNjiWrfzPGzoMYUCPuUbJFYMfSuQER66YYPEAEzLvDvmd3CcRr6huTbzRtQfzhAKgGpMpAExJxRyWnK9eH",
  "key23": "5Qdc6HsEsxWdhNwTaS6WygtTF8WTRd9xfKin9zpXB7pV4WdshGEnPxy56zpX6NG512TfzEQVvc3Fo2bJ69kuaaL8",
  "key24": "5mLZE99aTGErypXYqDKmfwS5yFzA8fNai5te82oxenJsDkCBYxU3MBdWGmhuffgLnfK4965HtZwV3dn4jnah6L6d",
  "key25": "2gGvdmmV3E4EcZag3V5pnqb5PaVA8WapMmFksbEZLtKg4nc4e8tvFp5AUZpAdpoWXFFHmgw15v75iUGgc91nVzuN",
  "key26": "3TJ9G4KJREX9JFUHvTnMz4btWMcYBh7kC8ZAwu84NSC3YaAKqAiwziF4L341mJj6LuK7Pn9gZFfgUadC3v6LwZSg",
  "key27": "5fooxBLtJdmNUdUrwHoFUaJUReLAzGETg2f5xtnTBASoaefBvRvDdh8XopuPCC8XQoDwDyEaTEmGNqxGjoJFdiwa",
  "key28": "4oXkhmVugWNnfbphEyfiaMfkDq935anfesR4nv71dpabs4bn7GsjKCbSxhsUFyyetjaH7VzVvy7jEYpMgnGKV1AC",
  "key29": "5ou4EooKmYSQkxTqd4k1fzgVkrztQUW1piAcyzRXAWJU6HnFuLUbLTjqcGMuALochjNVHTBjeoFLCBdvzu1TMLuQ",
  "key30": "3xYJF1gRqfHanPkQ86uYCKBx8XfD6QwAcMPxk4TvS3Ga9yVRD4Uh5nk9jZZieKdU1ysW231myZrb2iUfsUhn8eoJ",
  "key31": "3D32fPeh8ncAq9oRLeWdioYicNXTRFXB7impdoQEmcLqVt3Aq7D9ikTtMFWscBCTHNzCqR1epiT1mkpQajJKt7Xs",
  "key32": "55NReBn5mybNgWbpPT5gAnfrWKjk8eQfGEQVVQXcW4iVQSSzro32RZLyizy5EpekndusG5nPNdCndHfZYZ1w4pb5",
  "key33": "wHvrTB6iUmpfXp4YiCuq8hFwG5EfaFWQQaPNNfb9TvD1rWHVRgXr8YdgFxNhGZtYU1qgzQKLKFi9b3yAa6swkb9",
  "key34": "3tMCzncgA8HYh8vmksBxC8icaMhesZ9anChe75m4Xd9LU1fxYKzaDuDtUCEoadoz5iNS2SqGjLyzPYrPYvUabE6p"
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
