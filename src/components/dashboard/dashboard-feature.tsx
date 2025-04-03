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
    "GEp8mbcPyXdVRqdTeAYAMUnGXpJcv9ABduucLtcsQHzGCNTKfwW6o9VuyRz2doGU5egwVmjiQ93tH3rkg5hWkM6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x7yMpj6LFvxTkctBxMKNz75LFpZFKLFmCRpEaafXtw2s9BDce6Favi2omnTTVjQz1mqBjKiWCEXUGuoJw3FkfLp",
  "key1": "zo1CH4QjebpLNYW8mugjACixBJAETF37TcCefPSYVdoPB9Nz2v9EqcL9xWCLyHpXhxrnWrFv1qGZEFJHHBGKxnr",
  "key2": "FwGjXqVKkQeh74FLzNFLVaEUDUCV97PygvyHbozeGsLyrshN1qaQnLPtw66S7VBX9RNeStTy3HGfffBTwgGfgUL",
  "key3": "3AtQBvi1ZwPfwmARa2Rz3pnUTLp6cPmtCxELDMvif6564jB1HLVAtoAhpf3aXw5qyqrA2Z5zVRo8CxdqjEAm2iAd",
  "key4": "3edv9dFqRbJFcSENiopnEWUChczUVTucdGaKCbQrEytdY5eEPcuRQa4J1XTHRwUPRgHMroBs6zCyyBVbJsJWXzYn",
  "key5": "5q3adX3Bg67GeXx67KA4L3UaMxiz7yBWZZ3qaw58bxnXcXdjehfUPEJd2eP5LYcSTMRNgsnrSje86tVyutDj8W2G",
  "key6": "2DzQ57miWEpJYiUsXymxPunJApEoNQjbLtu2u5JGiZiPSZeBM28XGYcUrXKCjhsu1yvCMKYgk93PnXHFWt9hVbU1",
  "key7": "55ijpr6YwnwfCyME6trPHstYSxQC2Svnh5PVL2buRbu45D83Gzn7qverfefu6jzE5rjgveAhCyM9iGWBvpadPr1C",
  "key8": "45zki5h3XLH6dKjJdUs2t2qc8ThfcgaRWdWKZVvKDpcTrgyWtju1om341oqfotavDFWYAzia4XrvBoHgR3rTRbPz",
  "key9": "5bDp3Kr2pgVxEQ3zFW8gNPdsszFeAjTNdCFFmfzCV9h9UjGvyAgWsY8jKZUwWZ9oCmU6sJXSVf3PzoXV373CKVQ3",
  "key10": "2fYij5cp73VzF34rwsa9ajrLzCcYsJBNJ1KwuEriZVhuExZ1SyyJYxM5r4ozmX8EpscP3A958HVNQWiQPR7QwXba",
  "key11": "2Jfw5kuiF7wyKtDtPpcopuYnUBmUw6bCzpFzGkjCxHmcVQ21ECm2rQeeYjdn6BXnEph4tzokuhZ31W3fGa5JvtX1",
  "key12": "2C2bV4Y7tTyMtdAhKUj278NrUcCWs3anDphsKyzNfNRgGSocRrw3FxZifzkndPBDxDLUtHT117bpC8LepcHGmPua",
  "key13": "uFd828MtrRcJWfyjRUvq8UavJE7CYz4SfKra6eW2TyWDqwz1yMqNvM884PkB89Y8KAtC71pxdzZnNBZGhW2QwHM",
  "key14": "2Yhq9wFw5E13gymhxFeJTUSEAJbXag8Yzuu5jt6d676Sx4y9EdjVP21gDcRFmM5voyxEBVpBe7PaefT9JXTZpp5o",
  "key15": "3NGJ4XFJKUWFB3J5B534bdcFviaL6nSua5JP6Xj58L9t85xPy8bnJuAzGAqUruh8snHbu37JftuiSyjuykTEvsup",
  "key16": "3EZEGL2sjtLQExEqyTfk8EwYKgK6fszacTsSx3wFXYKfjzBQeVZ8HYEWqrxMHtjeEBoDhxfrkisUts7GazDFZBxZ",
  "key17": "29EnmL7hMZb29zr5PyYUpHeK7oe7d7AVHtevbjJ67v59dYE5GTiVSdKXzA5Qt6AkJ4Wrc6isH8C9r3359Rf8uBat",
  "key18": "3nfi8WbE8baxoHK86ML9xMmFLYob1sL7mXeJBC5V8nAdsoTCWmhPpAGR9R4R7xwAC2xyonbwcdePNZRd1aWvJLGV",
  "key19": "4Q5VAGz3NZAx9iQEJvui5Xoxo1Hz7MXwdUk1XCn2oMPEPRA5NLjzGdbpnbxBZY8dXX3o3muCbfURqY85xoYRTANV",
  "key20": "5EQe5SXYbAL6VCREuMxkgQe4EKggHfLk5r6EShP1X7DXooPcL1rydc4Ji5bmMKGkfbUkmMuhzvdgpztqvbBhypYA",
  "key21": "Ve7zADdQRcPkXdqP6qqdTyJyf8BGt9Rcg63P6kx4oaJdAELJ7EjMsrnGtM8izEQYbJQDBmXQAvrnDxCGK5FeHot",
  "key22": "4zjoWW8EXpjeHvTVagBtagioaCjXfhZqgziZCznSFhudm6ETRmrhoM2dduU6mfZo65dFeB8tbeT4nFBUX4vPuTT4",
  "key23": "4bLHqjvBKrmihcRcTT4yUV49KipwFMuoE7uhXEpVjtdpUSKfZhzj5CbNKRTr6gA1QGYAYbQMdGuyWUG3z9xK8hT8",
  "key24": "45RDFjF6qVdTuEpLx8okCMnHFQDviK9pkqRszVLYVjXUd7kDhnVCDzWnSVMZbzDqg2wAqcZWvReTWZ4G9PYrJeBG",
  "key25": "2H8n3EgSUukWdGMpfte57A5JTX1hxcP3haF4mXDYhw4EJqbMCdpaZBoHyuU9CdzBuZJjDTtkGguDaNH9LLYYM7A7",
  "key26": "8Ws1jMYyh3teP9ZACPqLUxjAUNsJXa2rK4u1bzwm1EsrB6KrKudkYchJun4zbpNB3w9eQTYo6Vk2tMYVSuSLefp",
  "key27": "5XwriAXaUHRzMordLbqRqWsF42WjAooVkmFQZxwo2ujanJFV3QcW8dUzLSQo9431tBUGiGRNjtXgrYoHih6i6msL",
  "key28": "2ZzQyJb52nuEmeHGawZzXwUwDXUsZQZp9eQh3YePGfZyi8HbeKyTZ3APLHKj6dTqVvVxUCCScczz5DxvR7dPU4Nf",
  "key29": "5uswLKQw5eofP4QVHSh58msQ74maii8pH4jJZterxHbpVXUbYz5qZGrdX1HEHDKjGQ2KX5t8RWKTQWViVkmDaVdj",
  "key30": "4oJzh9UQWZuc9tcFimM1zSeFKqCT34X9QZdevcr8U6Y6vhRoJXKrf9mjSdcARhhSznHAS2UMAv4d8rQTFKQHPPLe",
  "key31": "5mdhNAdmDs1cL5DZ7aXceQR9MJxqBfycAV3hgwtF7unrT8GtrBBtMP4qqp2eHnBN45wZSrxD9KX4QVFfnGNVuSzQ",
  "key32": "4S4mBaWWhWTGAsQzJNvQibDmG7oUVwznauTEEEDGQqNirjVT1qDpMMW2oUx9BphkNrZD2SzgrPqdp3WuTVGr88wP",
  "key33": "oUVhBAC9oVUyAXY9Rb1rGrCvxLyd3FYaBn5PTDPAbTJShSG6KVQEQV44pHo5EUPJVd9LEQBT4aUyfbZgf43yxU7",
  "key34": "5yRquszy3a253QB6LpbE3s9oLhkryMRQt59c1u6kk4fH8rHwWF4dXFYhguLpx1yfHEmWRAVxuT75xuGMDjX9kSaD",
  "key35": "3rmv2dTo1atTMxyHvSUjnFMrmYY7TFvpLFSAXErp6hDj3p9RXhMLkov3xf92Kw6AZjUmezi6ARnSEiqr5KjsQ1ab",
  "key36": "3FXETSwYVV1pe4ibn5A6r3ShYwkijv42a9bzbXmPPcEsCNavbjb5XUZ8SKiof4rR4BZshQP67AfAuzmLzCPSD3mC",
  "key37": "3hvuifXn5wyfaegRLhB1QJYS3fDFePEGDyh9c45HPPG2c9iycZhA9JjCbuobDygdfo9gBtRsv9msGpBv2yZ7LGSK",
  "key38": "RByzifQp2sAgHhLQDrYaxw6A95rnJWxFME2Ai8j6VGdnU99PJ1DR9Fj7zhdc4mt9fhmZXFHmJfKrwMsUfm9F4Xp",
  "key39": "2ffUoAaauM8NRHnPAJA1m4ETbDF7dxzY4UrbTAKXbPVvKZYASYYu9hotxeiHQ8vakuzBeCUpb4dGE1mPdkMFGtxz",
  "key40": "43BJgGX1Gq9GunLptP8W52xDcGyxaGTfsvkk3uk41PrwoNmm47DRSLH7sUZJK6UMDyPKwbaQbWJqhBQQCnh3qwcG",
  "key41": "4vM3ddBYjQBuCF7w8zGsmr9htkfTACTA69D8ndwPbcFfUmQZtCSvh9A3CPqFRm1D7XrAq6mdyGPw91tqjqTQ3mxm",
  "key42": "5VmLaUWVcytaU7ZeFGQGyFozQk3NHBhDqX7myRLb3us4UR6W2L6VbEhKXrpgCXmBCwDxE4qSEEsuWGWKQspSvz9j",
  "key43": "387VfFEg4DURg17X9reN3VDZvULEhQLWRaYFcQpV2Po7ihMVBuMTPSGf4ourWzPxAk9bKoqbKa2uRRBMmFRhapym",
  "key44": "WzPeQxCgChLvsU2dVZ2hupbACPfs6gCEUddaxGyncUA1kkHmnoL5xRLMLi6ebZnDMf6moLWabdthx2duSUsJDf3",
  "key45": "5C9U5x4FenPURwbEyoRpyw4eFLRiEzGpcpoic8TvBcZ97yugjXyfTBL5YDWrmGcyaYTP3z3jSJsxYMHuHPzgykB1",
  "key46": "3nfdyHk9SpkpgmmZB9535fH34KBxPc7KYYwSzQR5a8bXLN1uYYCac7Br4FzsegUXoNTqmWsS3geQ8aoLHrra6oqG",
  "key47": "24Xak6TTVwBrnn384Ns8aDsjQU5Y33FjFcQPmJ4ynsvf5CAgX25JqNNGATxe8coB7QGmZPbkeqVhpRLXvxRYehfC",
  "key48": "F6gXD8cAaKGb54DrDr8mpa3dTFUvyyhSueZ7pyqZkkQUEahj1nJJgtt61jq9LoebABcXw9hgMKWthUDbuYxhSc7"
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
