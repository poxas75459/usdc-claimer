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
    "4ZSFy4o8uqgzv8325vNwHhotSe9LSbDRHMeDAzxkqeQ64RS2ynemTV5kwTgSd4XksWMD4exEqdoZiaTWCdt19mk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HvtcNmZ6JvHxczE8ESEgy3ohBV4JJDjPfqJcXkK7hUfay7aZPnt7ugGmQrHmhEzwFfe5yuUKaVjr9jnCMgpC96L",
  "key1": "5MdMNPMN6rQS6rUtx7VV4gj1jCzWp2uU2UxJcVyRfuRtbnEN51maj7r8bVuUzUVzpipeYc4MQygyL6q6hhs7xfCg",
  "key2": "WgSvbwPTZLr5Vkf96KhypskPWsdy4zWg29QKbeBtqr49u1DUq1A34wchT9GqofyBWZggqPSYNHJXNoFrVnUUSLj",
  "key3": "5SYaPDLnGKsca49kc92Q2E7pSBcWvZT7SKBz3JnvsWJCnc9hBdz8vZJh8qtCDQhs5E7jeCph9Xx3KFZQzPERivk6",
  "key4": "osEEY1cHdEBugbbVroYnogixRRCdXMgmFCkkmBWgUrQdLUWPjJDmFanm4yRZBXxNPpVCG4BzJAG2Wx9AZ8u17Ct",
  "key5": "4kUAWdoU22a2ubA3ry4wtXTcEGSg4mhz3py7nVjrPh4B24JNc2Bz9CaPtUBVGbFrcVfnCKkiW8kuzVkP566iiCbF",
  "key6": "3aaaYiz7GfnDLWBcuUi7Dk5sDM97HgKmuqZZPcgk8CP1nZidyTpUQYNcKnTpuVytKB3fU2hmYfXHSZ2CQaCiBVjS",
  "key7": "3SSHqvMDTxmeXJzuhyRjkpJaNBZt4FVcX8UbM22QRVMTNfedCTSzcB5vjnYegiJ4LL7zLFjX9t6T2Y59fsZYvPgP",
  "key8": "3HrmqSiXF8XcZYwYXGCjHjrSLqSgNi7xT5nRQ5fCWtwTPAVRNadFzTDBgfDq92dw2EabTKvGu3Dbv3TweP7GJJcq",
  "key9": "5Rp28L6b8zv7rfdZRtNd7dr4DjsY95h8FpvsSn443jWxEaxQt36bU8JqYEmbx8aGgzy8hT7Yr37GD7VY4bkABbUf",
  "key10": "3r4HCuLoQHGaEt71E2Y9k9YwYuaae4nkjq4J2jForiUnz3WXSbmDGKQRieUoyJiSWBzBsPFhpyV7bKPsRyazbJFz",
  "key11": "qML1SqRg757GsAW5j95xvHXH2XL29i3m7nZWsEsdEUxUwT4FDRSVktN5n5HGPonn4TPiAjBf73H66HHKV3eEMmL",
  "key12": "2JHnYTSgkWgqmHHCLiDXXuagpJMZEqisiiNx6xTfehPrz4oSK2vFbYkjwPwzhaxqnSEoq8M9HXLAp2X8Ht6vs5y3",
  "key13": "4G8W7wZ8CU3PCDz2yxXvc41u3rP3654DE3g8rXEREgPaa4H3yGStAyqTkXzfbGYJt4qMDNiGwgfMDKbcAZnq9yQR",
  "key14": "3bxupuEuXJscaDv4CpM9J9nSdn4bcL3fDg7YsTYRwiT5HLGUZjLiUNyabbtjg7enfXFBotJQUiM4WcPfQFYYboV3",
  "key15": "4GBj78kGJWtpRyxqNSnf94R5jrrifx9RtqSDpSwnmW6Jzmt82hJTJq73fQ2QqBjbAqDnuvUR2MmiumnNC3ukTZrZ",
  "key16": "5fvGDpAkpf5yBCPU7iu8mwGooRw7dBuBQoXsYuk8xNBqD3ZA3WnxznnRZCiecxYNa7PYGCowyHPQZeywZdYqXP4o",
  "key17": "1eh6dzKk3D13q7SBFX7XjH4M7aEy2qANPnDJ7mRmX95whaAcz9vBC9X2W1eUfBEzntfy2a3hmYhq91aTzZ6wxUp",
  "key18": "7dRnR2BTefMTrYTkKRKNJ8kwJhrWTnbne6kh6rwcHKr7f4rmz4ZXpJc9bZhCwDTuW8ZL7DkhpFexQypxMNrKEvo",
  "key19": "3Mm9F7EvarKryMY37EwtnzZfXozFcoBMRNTjrHa8aPKRHGvKXyMUz4vpC3EdNhSbHe1mvMhjeDEbpRrQtR7wZxYb",
  "key20": "5PPxuj4ZP4852odUcQ2atgbRG4qff8DBUHzbGrK9vhzbCd5tUo428S6P4cG4wXENv9d58iymZT8KbaijbhoNpvQS",
  "key21": "4fWguvcGMKd4qeTvZuhF5oTJcQjzWC3S1aHAHK4QrEBTqgtuZ17dD2tx3gs7JuLjtRGbyYE5ffBiRR3LMCD5ts5e",
  "key22": "3y3tjNBEZoktfTJrFNRhNyYtTAM3yJmZLd8rn7PEaPJbmdqG2HHraB43d9pikcLLbJAJgKfwoW23XwVZyQzk4kux",
  "key23": "28nG6vUrKoxmwnHxmhXTrrqQ1dTpnmUAUWkaVqLwPtZFzQTdErWs2pcM5tyEmJWn2WxGoHwHC7Kg596t6b8AALiD",
  "key24": "3u4Xzs1BKAfY8Z2dNnF5bHk6sG9wV7w7qmqwDAbWwqTWgVGKyUWuRfAmVRVtAmFet9muRFgSd5d8UHcoTkq5VEzX",
  "key25": "3xc96WKbArK77RnFaMJjDvAmHDGHYBhrNn1Lc6MwkuQFscv5mum5FZhyzDJRP9WHEEDhPr1y1B5yuc77ibtK7bXD",
  "key26": "DwVqDAiSWYJvSUbYwRHMmRE3p5adw8uEvXt3y9YA4Vy1Kx5793yUMdmeEJ4kcaHcYnkAQoXji4EMok6bPqwshgD",
  "key27": "32ARfLe7eoZvWw2Zk3GSXcqGPL7T7xF6Hdiztdr57H45SZT4jJ62YvzgTv7JA695eZd4ubQDggYA6MoHAbvvgYyn",
  "key28": "3rBSisLeRzvkeLDNxegwXtijcfsAfy1JF7kyFYdBf47hmv2HWu9ytVhZWsjDxMT1p1gvpvHb3Gab7UksACXWDFCk",
  "key29": "4PMeERF36RWZnNF7BKys2bH7ZYETDMagktZQj3Xn69abJ6geFBk5FP91H39pi1mw5GviDVN3M9r1c9aU6ZTnPKQs",
  "key30": "5AZhxpBjJ4D5L4rHEm2wf2XQw6Ahpt45BKhCpgvPWgtfEgJdEDrBXR1ZT1BVtUsUWJMZL2UmhMJR7qX7A1UkrUoP",
  "key31": "28cENX8eMWtJMY5YthFCPdT3GTjGVau6qm25PwEkxQKR5cHPV8GyYZjKgi7kio5jcj9XuvtG1VAZRo8smeY74xFZ",
  "key32": "3s1tugtXFewFDRC2pd62Pa3ErkMzk9vVk2V8CTLYdyzTJbsGu9BP4zKPWZiQ1Hrbf4oHjqTDPPEPKLbEXUCFJhH5"
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
