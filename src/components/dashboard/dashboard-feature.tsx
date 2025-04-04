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
    "5GnSj7xX8FgL8FsnbivTUz8AwFTuvbKSNcV6CoWwuHmJ4tUMxT3AghwtXGtHpS998xKFxmm9XpY8rtk18AgpLssW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZzNz5Z3FZrAunH4kYyo8LaA1PPyDCqVHeq62ejmDV9m66hQhj7w4xHDNacjVEqTQv4RZ3m2FAPGCDitGdrkEWbm",
  "key1": "2P1pqLJNr4fzYbkwpH9FFA7b74c8sGYW99BJak7BL8nY7n6FhDvtMV2eJ2MZwWERzFjYmTNifNGv5ndfPrnPgqsn",
  "key2": "5dCZHu93aM8VeS3YQcTtMehbEsRzRRb2DjG8DSMRSTA1Qtk1D3rMHbXv8E2VRo8wTHzPC9roa9RFj7Doj3CmuGQe",
  "key3": "4R54vjPyYDNzHTjAiitQW7pRKwNNSwoqJUeRnYG1GbkGNh28NwSCWJLKUNHtchG52oR3rCrZSFmpGnr9kBABY3cK",
  "key4": "3Bu9whytLFYjMXHpApf9yHN3PRsWMKNzNCrp4sMC6WpcgDCFyqmrXTTzcUfVew2bBo7fP5Y48CKKf746JdnA1uQr",
  "key5": "5RaqPwgjzZCNP5ozzwK234cYWFodgwuRfjX6KW9DonuGP2azQNBooNZzsaivmHz5w7n7hTcNNTU8RzWwazpZjieq",
  "key6": "21cqhmj3qJaNNzhhwizEWUpvgb4qGFFSzSiuXv2ehpHiLySDEvbV7LA83fNeBV5f9XgqvPqeyxoeKkfdmkvbrfYo",
  "key7": "5PrtG19xLN8Km8abrkkdb6b7WkHyRK9MFUPUWrptysQSL9qrtkhtQnFcuWBmUQcYPsnZLWbgPHPngVfU2GTpBdnq",
  "key8": "667xktuFg1p2cquQH92XiHdYtWNewriWynWgryZUHgqWmRf6bbUVsHAr1PykmdCckTxe196q32hkW5qD3JUAZ4M2",
  "key9": "2U1f3F9vCEb5526G3DTzUGNJh95o9nKbf7Es1bmPhmwFQjZn3GyuPe39EZRFagznEWNPCeJ2FSH9wKGpVGNSUJ2j",
  "key10": "5YTGvF2PvFm3RotPvcN2UrhoRSq6zoB1745ZRaWw8cVo3RKxUqtarGgygdCKBGADF9gBqVjz73Dq8xoeXrW7Dktm",
  "key11": "3TbNN2XBHKYnG9UqmJAUu46rDvdYaakCFouD6q3q5eg3X2DEE9W1383mBh8jBDub4n7Ud4u1tSkxU3jcT3DRQZQW",
  "key12": "2qthifTCucHaDQuTwZKjqkgDFzG9dcLLaqC8RniRsaaf3aGqC5x26PodHHmBvYxZ2yMb1cR1Ww1oBjeyPoNTrbfV",
  "key13": "3aPLw1hnHUbpbJfEBoi7V4VPWofjsqieNmNe1uEpmwvHAodW2BuqueFfi8pGbLp1tgMnnLRzUH9oLG7fVb8TLQb",
  "key14": "535Ryxgbhu5SpXdW6bB4EF34j3nGfXFUUYiQvSmxhPtGaa8q75K14EFDybdnM67W1AcKztnRRhqP1HWmpHhx5XWY",
  "key15": "2d7iNaFKzDNJrPZR1fGGqfdybVtv9Lp7ozKssAwCKNw5yxLAiBfcfLoogeF5Dt4hQ5ob2FpuCZmzWVp6KcQr78gG",
  "key16": "3qs4xHDN93CeKdLoc6mKh6ersTqYPgCYy7Fy7rQC9tpsPmsZZ3KTogymsVQCLfRWsLvFfcNNhJT2bayLKS5sw6wv",
  "key17": "5e6Baxcq7R7z7JZ9NR3Sr1ewMWbqPuxFivo68NgHHf89eJVKLJA15inGTcSqLihjurhzJCVi7oSxXUviDqKq1Qq7",
  "key18": "2nWWhiUjRc1cSSzJ2U3M8sdZzAg4qtLd5gzAmzxRiErBVALq3CnoVvvanx3qRfxz1EDHfrv4fgrdsMtfwNCBsYT4",
  "key19": "5qV6hKFAyc2TsvSks9rgnCLsmDJJeceTckNVKUrDaYAP456wsj5ZCSDKNXusSfHockL57bJM5hfV1KMM8CEGgu5v",
  "key20": "4W1HJafKXpbE6k8JKzjvrubuhMd7KU3Uq2ddyCC387cL3HQL6pBMVUtpoPMCGrNiY3EMe5jMcmszVCv4pra9WNxq",
  "key21": "2t8DCsPGeD4Wh1CCyuhobyVApmnA1PzMLEZUBfHLRTchXmBJHKxa3w2xsoHRRcpDhjufuq243iy9aRWmLLHhtJXX",
  "key22": "44RXirgR9nBeJkDNKWYPSBCdt4JyoqTz9tHJGsBVWurRgpbyfCm3fK3fxVPUFcDqkMVvqDavym9XiBsY6UQawGKu",
  "key23": "EJZcFNjvxiVuBxiMSsPuEuP24xkRx37dQzu6MYwT32cKKF3EiRJPsw9mKvvHrgKnQJKnfLefUhiNVmson5YZtbu",
  "key24": "3Zfphy6MCBGuVtADeaFUsdt3AtPPkdPirSS8Kp9cjJaPE75BRqLX99nsfvLB4o7H8wXq8qYDs9Uw6nanDxnJuynL",
  "key25": "2i3NcF8aacLhZZ52QPbYfTXMzgaq31MugbrVSrHxpxf9M8JR2Qg6k3JxmKKRjjmMuE8Vn5AhQGsnvex6TKL51yRQ",
  "key26": "YEo46o6dyr3793azeaEHRJ5QAgqPXx4sJJyesUkjhoRfbUAb7gUBoddV1VxEf4bW2Ck6p22mVdoTmfJBa8G3bpL",
  "key27": "5VY2qHJAdLgHV6AuyL6UZN6epCneG7JCGzDN7MidzQN33AUQCLAHy5f4x35W8qh8NZXoRoLowntcK9j9T3BD9Fjo"
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
