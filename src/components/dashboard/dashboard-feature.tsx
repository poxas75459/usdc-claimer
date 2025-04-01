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
    "qhpHFLZunNtzvvHy9Hvk5ebpFKRocVsavLqdKDtsz11PCt463CwBeRfVDKKUwFERccucofJ2u4ppJtLgTeRiaL4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QRFaHG5su2UEDvLdfPy25MftYo7jpQG1fxwXrgyaxy7FtXFezLSnRV6wmZkJWAWY8AWbtcecr1B1mKKJSbj9Ety",
  "key1": "zNt2eM995hiy5q9ZeL7BtuMgEPvzrFbKqVaUdtzgzSj4Go5xw8KLFJz8wnfztL7CNdbX5dHArrbk2WNoBHyKB2U",
  "key2": "3BJE3LvqL2N1ZjcoTRpovfdeu2xyvNduLgeeJdPFZyvX2HTGfRY46kA67RYPNzL3nL8nqgsbNAKSzqXtWHprECGH",
  "key3": "2Yw65v4qVjNvnK6czwUaNMuNpdHx4d1L77ujYGuzPM8f1PMyJNUuny1Abc96dKsbJz7BwYYGv3QSgnX84YcGKUsN",
  "key4": "3B2GFtGtHr4Y8hTG6o9RVNHrTpyDKKiTkLX3LJFAM7t243jyodrVQRb18WjcxZTiuwFh6mqRTWbw5dkgLdcv3Xjv",
  "key5": "4ghNwFcj3VPGhgJgUYtunkY2eEmqqPqh5o1GJy2ZL4GAm91G2PhLecJvYhtxnz43sKvaPb6cnj3UaYHAt6zpR8WG",
  "key6": "4vw1PPzCutMTqQmcxkm673FJBNGzxYGHayUYGeVKax6JLcbDwPvWtpTeGMjtvcUH9TznyZvTtviRBkvqsGvWEpkD",
  "key7": "3YBfgrZcxJrTHtU8iRxdEz8ZpH5hhCFxVZQUVUh35wHP6152f1bVh3GzVfq5w6ztMSHZFL7LanwVfPZKYa6x2sZ9",
  "key8": "32Wy45LxeTFfxBvvbeMjkFQcjLyuVCXX6iY7J1ccqdtXMUBEmp3dDwMgvnJBgxaAeGdasPjxZotS1VMV4cbe4xdz",
  "key9": "5UxjZRa9hakZ12NcDmXnTm13PUxhcSa13KNbHEuY88ewsjFvpQDCoodBhcMJZvTnKrxWU1nobiEwYD1vnoyB77Ka",
  "key10": "q9P9teqzk9S49SLxC7wALdwwL7svBbVRyETUjVhqDexX5j2HkjkvfW6rM7nKNX6mKsGSCEn9x1a3qHqykw79nWp",
  "key11": "LZJdzzhTFARs1ZkXWDyyrWfhtgX3Rogwk9us4UvM1YaQWNeAv7rmK9qwpL96CVZj3Zxqn8F8DTJxYKY1gMtAKvc",
  "key12": "RU4UYVhncpRhHHE5ssSkMmKtDRhG7U2jtpHQG2UHmcWvWoLmkAYK9K5WhrW2DXz4W8om3LqYMeiei7A6tcS4Bm2",
  "key13": "3f1VreyGporkTQqWm4fMhBDS19mh2XfsqAW7JYMNQ4q5bzuzWBr5b84yfbuaVfRkFsoLLVXep4H6pTANGiy1F5ff",
  "key14": "z568N1WSbJzGPPrngJtKYjijNFZTTVGWXs1FvYzcJH45xnAgivvTQMY6TpC4wnjAssT8TRe4ouTy5uNmQwbKjNx",
  "key15": "4dbStiyGz2NebQwBmo7b8Xc5WhcEDfAywVyF9iXAXqinNetFBDaTvrKft8NhK5vJ2D8iUGStoKzayg1kWTCiTnp2",
  "key16": "3A4P1fa48qJK8ikkXKw14FzPmjY7xFH8xR2zzcVi5d6PrmpZEXqTzSPbGiSnw1NKS6gvjMYGNWDvWM7x6wpE8Zhm",
  "key17": "24b1xK9fmLbeE6jZVXT4GZ3ZKA3KWSjfcGuANB5xEKsc4yfrTHsSxyrq9wWZHURB4575bQDNTJfn8u2J61Ff98wm",
  "key18": "63Vi46KA24wpWgn4q3sBv4yPM6QmUgJgSkocMpKTCteHwRArmrx2tHkcnLxYpSKwitsdy4UARWaqUS1uauWwcmEe",
  "key19": "2fsNsz8JhEb7hpVFvJ3oeoGxoAWbLosvDQr8aF8dJcoR7di4TjN3FCytcCFsLKgXFBvChJBb3NZipsfafNnhBcfS",
  "key20": "5rijP17F73VHrrqcSBwvmzi5XfCbHzTn7woQsCoRSLFrT96TE99uTsTb8Ztksdren7DDNz3FNVcXVfTXt85Wi9Qe",
  "key21": "5pGTFwDJrs3V9LMiZUxE3VuR8FyhV4HNcNrDvm6Lmi15Y8f3LQPLQKXh93ab23WwLVdDJ6soFCyCy5AaVTrHDLVK",
  "key22": "4VPGGf7zpqyREATPmuP25JfPKgddWozWKxqH3UVArRKqi8NNEwCEi2AsuMPygynoCLQD7Mn4oK4wYCieM9EToHpb",
  "key23": "2tXFUNLWqCukFS7ChtPHvyR6B8xqg1qMTVX59rNUqaaTukN6NMAUWZEoUaE7BYLPoFokHUZfrYYixzgdU5nmCSsw",
  "key24": "51U6zXUrmnuj9PB1cRyuYJ3V6vrYQreviFbfiD172bFjVUrYWhcmNnJExP2XzKCHY6YrcgRJSDsucEPJmvmrZ7Vr",
  "key25": "NmwayeLgH5z67ioFD2mNYrARLiz78wfr6DYQcF8jf2RBU9fw9HsbG1u6aK86HJBBz4P7BVMR8vjFeWA8G35BTnV",
  "key26": "FvLwBgERfBoMQ3BMdEvVT2ReqqDJ6dRUf7oNCgqAjmNViTnKXF3PURvjf34ELVjoCd2KsH1jnVuyu8f1cCPGG7Q",
  "key27": "3J1Z5NS8nTEHY2V7bFepPihT7kdXeYU52UDCmsDHHhqe6gerX35PLiZ7rXyATUADtXYuXQw3LU1MdZjnWDTbNUnL",
  "key28": "2f1yeGRadvrzAnJBXGFoKkgnnZg49T4Q6kqjkfA38jAW8uFKmhj4WXCcbaEiGGzNVgmitRvnBdmZoHDDJTuq4ezj",
  "key29": "4juWqRCAjPz1gXovmHFx9KVAggR6NNRhZoXff5U3HcCa2XgfYABcaU6xqviHTR4Gp3qxLU4ep7m9fNAejVo2JAbf",
  "key30": "5nprgDU4LZ5B9vdG2U4PJ9dLKTiBBkCiqwjHFuG8PjyL8wPq5wvJ364BcPkdqTbwxDQKB8iexfZvzzNPgWPwivk1",
  "key31": "4fKhdCumS41RUzViH4kp7HsEzM2BTtDPLAnD3bGZp6sVDqN7LENr22CccrYVjEsSMmBHiyFPzJwHCzmqBkhLsc2r",
  "key32": "3UmUh51BYQEjBQcRoBJkLx9USbSfjNzGG2W2cbRt5RRFT3CYc3a44FBrGBX1CCMN9uwtt6G3WELpH6zcjuKSoR9o",
  "key33": "4pFmKR7xUMoWGfiMsLSrnhFL7L4yMkKU7raiueec8xaZi72HnNUgy4NSJdvsUTy7ExtrdTxc6kMQ352nBSszznQm",
  "key34": "41yGKBhfphjXU3hhXqHbnjGhubpMWVMQaV6y1kC6PJQdBLHRYFeEP7Vx5RcDXvJBWa2oz2gnY1MZ2TaHsgtFo7ZE",
  "key35": "2t2mVBh3mdvqXRMFvAcicXA9QRrRueAkkvFBwu2JwjEeSF67sr2GdQXQim2y2u3GmGbpRsbwBpjUJyoYRMSsTUu9",
  "key36": "2oya2YEmTJQJGN1yovq5dVEFe28tKgBe8Zpkh1DcAo1AJJGZfafqUEVCTuKJ3f6gmSn3kGEobrPHkU2Qk2YxrSmd",
  "key37": "2nD1voi9TP7vmhAux2JHX4i6Jbe7yV5nqQCnUpRmJAd6o71oPbTAPLKHsJwDxnck4aTDLNym9TkNco5MYYVHdbz2",
  "key38": "4W5PEfGr6xgCGYEbqU8jyS3PE1oCLNDPLYvZ2xD9k2epDEkHbooyXw3wKALgmKi5pbt2eKYpFJQiku7uAvFTcUMe",
  "key39": "5S7GHonNYWLzVvxvux4gGn9L452FQ7nPdz7WDW3VWE1KvM1j8LL9MWf42buLCJoQdkNTipuVbPsf8k1ga6rsDXSD",
  "key40": "5mD4dG3YFevXh3v8xJfMUMzivH5fqfJ7izfhTwFycgNN2ZV4gmezZErVgoEgEjhnPpLDshWBoc3hHdJ6L9TLBsrT"
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
