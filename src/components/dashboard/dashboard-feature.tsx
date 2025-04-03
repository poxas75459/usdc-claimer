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
    "2SyHY68StK9L9ZgGtF3AmxFd69UnWyZe8x397bMdDdY1N9d2vgyBzZ3LoTkEHWk942bZSKCGpwjTGKtUWwLmyNUK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GSNjVD8G7pYhMib9Ey7ZgUKS8uNnEth7qQmYwwRyUHi85RjYv95Y3wsVTd3Gr6qy5fVvK1SQqZFxgeuWMrG9DZN",
  "key1": "2sTGQCTQd9q6b55b5wEaBccoa8dXji2HEir58MVS5mMkpkkV3i28WKt9cKhYeVzoKH5tF2kukLiKPjfajH5RrSir",
  "key2": "2WGEEZYbFhiXNHWedr874NBECTHTo32Kkqi7cHMb3vthU6VEW8i8vaRRhGyfyrRNU4imqZ5DShogz81MQZpdenwY",
  "key3": "KWnVPfCX9c2SCNf2fpkqB5bcVVePUcce4vDK5ZVwPJKPDMHMed1uqKAaMk2wm7ZsYAV1oQrkk3k66zdxxJMCCM6",
  "key4": "5QzX8si7yVioziLtybDoQyDACKqauhAfqatC7sab8FbFBZhgMjwkKCeo2y8wkeX57qbRqaV3fZdHU5zzdgYV4fvf",
  "key5": "3J17X8JLrX1KXM9neg4GGDkfQGzsfxGwz2SYoKnpRQdPK71rVBGppPZQGXgZPMZDkQB4Uz687VCWwkA5LcJWPVoa",
  "key6": "BSk6bFbWudrvYumgrQgvAM7WFCQbx3gHdo31NH5PiC7Es2dANeDDochRg23Nds6ZSpUnSB9giCc3MrDMZtbcnnd",
  "key7": "2me5sgnYSH92nuJwGqnhSzt1c6eHw3tF4nZYR9DKVicBZmRkMq89bnhwcSwvzo5M2DwRGMWdfk2GAmxbuYL3hBrv",
  "key8": "HssR5NKZXzPr687nNi2SAEdPokzRWbP5hLQqaCWZzSu66tXqDc4LAJKw8EgoHHSFNWNzgBu5ggjNNATtyTGhTo1",
  "key9": "2DaNiNDnASZi7qKVVLPKGXvYDj7UigS4Ayv9b49rjjxTYZLfGz3De7XPDsLZaZDuSg6FhK1tQT8yCtyLaKnxrxuv",
  "key10": "4XuowqNAuKufhjnMPYJ6twLc9gZPEkubNH1kaC8JYXJfSU886WeGp5bgWjDcRmYCYVzzghtTdcLn4ixuuvz4bbKB",
  "key11": "5Wy4BYCRfXQTqCzmrNdHj7bfG9KfJr5ir1DmnrTkp2maUY4qkcDdxqbcJFkdsGjCKAx1SWuGA18YduNBkqWnbVNw",
  "key12": "4tewsg4tuSLxF6cwtWkTfFoX96m1cN8MiKYNXuLijFtd8EQbrg9Z629vWPwUJGPB6mJzZT813mhxxd64NAAfTLJA",
  "key13": "3enaeX21jrcpoZbJmgo29HfS3bZ9H6X1irMhai1t7UxAPK3bqRMzAGeajqoA9XpHv9RMTsT3KcPGdcurugpNU3en",
  "key14": "3ZKYDb8oizuN34HT4ycGLQYiJajfoKySHTTxd5dqP5MYeGWFumwz3RtWWQfto83kQKS279rBciSNZbqRBPqKtHw9",
  "key15": "2ZJyc9zh6E2vPs1mbUJ65jf9uUEL5FD4uz6oCucL5qBn78KippzyuUkxd42BHRiHvte4pPQk6Tnt6jnDd9qtB3fR",
  "key16": "5yjoPB5eMKuBdBtk8x51Q2toLW3GEzbCS3kcU7MNiCMHsQdqptPkgu8U1HHhwDaoTubnSG274x1rHWpjvsprMpLY",
  "key17": "3sZMemYSeZs1fwUWC2dt6E4eYHvcJDSb12f5euGu5snsqW4u5fwU4JkCZfyShJevF6UpkwVhoDVUTvQhQJadP7Te",
  "key18": "W6Ktw7vtrb1dbXzQtYLQ4TN6RxhurBdDFGFkd7ve3aS2emUW2MDcouU42Qzq6RUj5NPMmgYYtxjGDF5EYxxVUXb",
  "key19": "3cvHhZfEaE2hK3MDahyikqk32f85e1kDKbyu7aD2ueo3uoC3frE3xXksXTe4mVU85XU5z7zWs2xpDibh5SXsW7hB",
  "key20": "3F9dCF2kLD62sNLkD5cMfnVXfsfbp9vdy1QhovL3TBvdUhkEWXA7bGBU38nqkx8pyhDypwsk71LbB67RYF1dDLnp",
  "key21": "7YumsxBtKfxvjnepbqKohDjMsEoqRWS45hzPqqioD5g4df4aGqN8khwbiBGpE3CZJeCqimas1y6xE4WX7nddkQs",
  "key22": "8zFKhLitJ1V4JP8es1Vx7wKx386yLpHaLoSNznmzV7nkY4L9gRS1uzL7U9U2PMTmKvL9tbo6docdCwbwM4mB6WV",
  "key23": "3k4x4pDJjpbn5HtKd8wZGphspS1cLYNbeTweoBrRptCcXVczWYNPq2Q2YSa7JyPyjrNs36viatv8tw91g9MKt926",
  "key24": "5nKGgCQ44J5t6BjPEsh4u7CKKRaZQp7mLifnPSQKf1axM55Ta4NyJaUsCbyAxaU5LHzXdVeDprbq7vgM1VC8GUFB",
  "key25": "5oxASUEfFAYkVetSU4d9Msfuf5dfhSaSNQqUMm8c3TECe33LaC6FmnDsQH5jgTmLtwdbuyTvFJZkuqdcL7RsmN81",
  "key26": "2XMFXw1ZrErZm6Nc4UpcJW5NGzJuRKagQLeVEwXgGg6LDSKWFiCCxAeHBe1TJmfsjCt5tVxC5d5TMFX8a2v2LKkJ",
  "key27": "3hekP4nhD79yE3ca4V3TJD93BvFyLkNWXmpcGsfiFuQzggUxdVNZC2hwH7D8KYM7BehmM7QDBxD3T5A1X3HdCsFw",
  "key28": "2vAgd2nZVTKd9vU6z2XF56NnTMeRyuEfn2Lj8xYq2sL4Y19fh4uzibm4Puw7SSuxPm8iDNiin6jF9xvSKhQZJKhL",
  "key29": "2MciJnYRnKguJoWvfULDEpcgdhuWQCAfUEfUyz7LYQNp94hVrdoFco72pPLHmfUd1DCBXzr9kRyJPa1pQFYTJ3Vp",
  "key30": "37uNAwqQcZ7YR1Bo9CFHLKiRTvMhGFHkwYzDJ5drv4ymevhtGRseniEtxixBs1pQJyxWpNDuJS1CWn4shiWkXS2x",
  "key31": "45JU5vzo2jsTy5U9JGhF97Whpo2YXD9GhdzRihqRvFxzXwNYAEtNwQtk7zpcqHvczrGaUh2pwkLR3dkTLtiVAFUr",
  "key32": "4ZyYhB7WE3ZhyXqpYvzn8XYEWmGcRvBqzSMpDhs2esM8EFpW1feA6QUMzxLztmuMp1hnzhU3Q2z1xkcJbH1JB7eJ",
  "key33": "4XVTK7maeTFoujibucT9QjQ7y6iYu2vF34gjAFRrfC6r7Yy5rmeFhF3kSnEtHzgUtTsUDxX3xGKZzXTUbwBDNFhx",
  "key34": "4Vtgs8n8219XK2kfS79KABRCu7Y2XFzBBdqJuF3MYG5anC8ugn9582gDd3yeNP6X3TtDNjr3nNgsgaEmeHPFyxfC",
  "key35": "3Ro2hkZuqyVqq1k8Y4GXUGoLzDX38hTo9SFxaDy3b9oAmsU6sfKj8gJm8wqa4dePRXjjD1dE5j4R8LcCJpqoEEdr",
  "key36": "4xCXxrv5KQUCvA4SAi22MFMCKvfeYbW3QvMWMrMMAXxJbqaMnaVXzhwWJwxEg9QEQzyPoWwVTgu4zpARA6tfVmet",
  "key37": "4DH4dK9N9dgR4671jyLKgwbCBjps6mebayjPpSqqFey7yRt2ARwt3NxL4UaXPNHSzcsaUDfct3A2P1fHnqWsWy5Q",
  "key38": "5kTtQifvtnYhvrG6nFm56LvnGi5wNbSXAUJEFvc6vr8TsKsQ9LwEBkniSXYkAXWzAhxcvfEMbVJAzjXB9oMtG4BG",
  "key39": "2fxPDxNN3GevQ42EtVgRjdxKRkMgSEVa5LhXJ8sjA6KntXQxqHgVRh9LvUSjFiswciWCthuTsUsoxVdGHUCoqzDT",
  "key40": "3ZTyDqi77eoE54g4ruqGYh1weqSy4MeCbuAp693mfQsYtwA6t1SaN23cftfgfexNs95f19c2D3Xjm6MC9h57Mb4W",
  "key41": "3eMLBRBdYjeWQxiDLM17S8pERgSfJsr1g1WMSRqpsDzABfEcJepogEKUc3caj8GUH2ahBqsz9p9U7dov5QVqejxD",
  "key42": "2uyK24vcjZXFXHeMMkCBUcdPVcD4QjRw6vwHP6dVAvjzVoUj3vMMErpi839bVWWmgaWLpgHez2hBRfTKen7YQQon",
  "key43": "5L8x6UUkk7K6MBFpq96pCqBuQAj8CYpL2Q855DBVrDP2bw11SAsUigJpNUFv1YY82B7be6xgbMVAfe4twva4nE57"
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
