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
    "wri9B9uEn2k9w9FMTTDioAAhh2k5keNwyVuc13zZ2hberzvdVEAgJs8kN8e8Jfip7RRKuTXeqNfCCN5pbRFsL1S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PjBqHuuneFFTZLnSxDC3g1e6qVNTxFEtn5heiP8SXw5aYQdrEm9pCHMXPZPgm2sDbnawaSNDvb4jmpRowS1GWtV",
  "key1": "QXGBp3weiQ5byX1pEy1sTTzePLoErEzxHFyXigpJvc4ffifxVftr3DAkKs3zRgcNF1DmpBVomiC77kHGYSfx1zk",
  "key2": "5SvCL2hoeSTPYCaRLeZiTMgMqQ1u5LgE6o9ts2vd22xDqf4yoUCRNhQybrs9UFCY1BFZUwjzknkPD2JkGB1MEjQs",
  "key3": "3LphsXvgF1uypMCecwHHqsJYb1y4e78cJ5AgkdgcpdzeiV792KW7gBuUnmAuV2xDFyeMP9qkQe36D28DMnMvC7iA",
  "key4": "5Fp9cRrd6tH1UyuZtEwjT9ernZmFYRs3L1AcqfSGdAYqr5X1maHE7ecLKigAVswUWg8ZdS24z5txtQ3AJtTm9oXy",
  "key5": "4kmgayysf2WZYLLfSJiKixrB9fhjCCm6zNwuX5pg6APyzBvihxx7scuyipiGdmCrap9Nz1yEXuFnZtcWdeBmnUE",
  "key6": "8pB6kQaU95SMX5E54QTJxodTM7Xym6E4TCzVayUCkxotwWCN4sGFudTUdPVHTmwfV9Xm8gQ5SJyQchfWawhUVmJ",
  "key7": "5mCzQYjG3kBUUxdqz7L8FZVagC9g3Z75Z6XMUP2k3unf5HrkL1826Hw6C3oUBBy8P6NtvsWAHAKyRRGfX33x1AXh",
  "key8": "5gcREMwzici837EE9cPtj5onDG58JQCQzdSigPGh8ypsMsGY2iRW7FTBVAbYTHzyXqyrXdb96kAmb2YxyzXRGf5U",
  "key9": "4jQEv7iMr6LWQFYqCZaS7Rd99o8QV9rwaFDRoMnh6odHsELhKfLQKPC5GD9Gmr4PN8XzmkEkGdNH2zhfhGE9o6K6",
  "key10": "5jGswCbomMEZQ8FHnPzyKGhyJZQ2m1PCB9RjaGmtARdCQ4aMv1GZVHKn18VXzSqVJKFRJM4qPHTiDo37h62BUaJe",
  "key11": "4ibwyWQ9AHcjhM26WdVViXe2PzwiMSMCEdBNN8hfpw38L3LT5oy3WVBSCnDpTxCieE72jBGQNqLtzkD9QBhdAY4X",
  "key12": "2vnRsZV9uTyH64JsLW6osVS5BhQSAjs4hRhY33PAGTkodngL1cS4u9iqV2PCyQPZjt5PwHXeiY5bAjyfzwFaSXu2",
  "key13": "3RsuQQiMipnHiqmyJRKi4kSkzqPKbNwmxZm7wLwSWoP2ueDkxT1idGEscntoC2DKvpmbU8p2RpFcngckbbQ8cYtk",
  "key14": "4PvHyEiZsPtfKLrFYc3ccdkdHbSvpd7WSr2RFCDe9tfg53pS1bFdBBqrYw5U2w67neXoyuVcwDZAvV5NUbApNd3n",
  "key15": "4N5E3pLXV6VzDo1Ym33hPaYxMSbViYGZvccrGbuAcNjyEAezjZSkXaKRqkMVpMQZzLjMzkfhUEq1V3RWbakTzSQ4",
  "key16": "4RgXDczAT4XSPMkscg3U2CVcAsGPJZzN6T7e7sajqh3gURUiuH15iDovQbjXH3AiB5RtPgRKeDoggzUwoGPpbDXo",
  "key17": "62S1w9ZgfPVKKyinSKvDGtt3RCHjpcpStZRnyQbXLevKuVykS4mn7ncHEPX3TMGiiUjoCpSjg3Vvquo8W9s3SRSm",
  "key18": "3TEKcRkGkUBzhWpsVFbpA3Hb2EdvytRh1PeyuuuQMqHf5zd6rkyJyV2HxULSB7ugP4ca4oZXXv4vmqVLYKhGzZ4f",
  "key19": "jSKqoBSakqdYbHW4w9cRb51kDCFJvXSonHgCTA9yVNKZFvfkkm1dGEQQebn5b9reAVnR1TjhARpKG9LecVwbUED",
  "key20": "ajFTSqivPYRcdgPut8mzNHC9pKmfKFasSuh9fcqZqaoeSqznZHfLShVyakMft22eMfXVeQUxsL5AD3tyhF7bS4k",
  "key21": "4dkm4f8BNkbAQh8TBcHc114gQg4SFWDa5sAzZFNUCfnp9PkLLWx1Q35CkTQ8do9eqDCNcWiPNRMpsJ9Z9tvJJJTX",
  "key22": "2vu4nuUJJ8NK2vtRiDBrWWU9qXK6ohKkFGfSPWBBVNx2XP7W3G74rHDdguv424CKMr1tLP6b2tuHbXUFasSYWp4c",
  "key23": "5ihPm35kp62i6k4Vgv5YkzaPTHjoppyvvXKD3SV3HJwHu9hoqgPR4kVxy92US4VQzHGzQXq92DeADr6A9mbDdhBz",
  "key24": "4kmZN8mcF18DjHquwuZWS64U74BBhYq1CNExYcBB1wvwghAQeS9jGXEtFUSQkmUuLCAuyduy2cUiBvTRPbGTZdeW",
  "key25": "bUP3MfYiX7JM3Wreh2UXtqNsN3tboPfKPBmZnn3eRbc52HmWTCwqdBBFUwnbhmnxrJWmFJwvSQHrtqARWbhLLiG",
  "key26": "Du6B8vjKB1rZvoFDGdCE4AS1JbnrAsWtEbb9o7uSDfMdV1RqvSnN7nZ1TH2cwtY5ezJykXtchLEUEun2TtgQaqD",
  "key27": "X6nbGDy3bsoS9JTrBQseke7uepyTuwNcpLWy5JPQuFAquBRo8tUX1rULV3Nh2BBNjnXGfv4BWENK6haJWZ1NZns",
  "key28": "2pnPYDrVUgwXAgk3jn4RxHH9mqrByyudf6x6x3b2Qhmcpo2GMXuY72xh8Rfs31dXbvazmZAfwbgijGqPPVcDPe13",
  "key29": "4Fr9kvMsQLRAj6Ex3oGR37LNiWfgdpqtDmbphrS1yQcY9sPpDNfYSHBeZ9m32gXnMaDsyrBYz7j46GFhY465uaew",
  "key30": "2YYHjuhjouRZEr2peFhXL1dLFno8CrqbQ1N9utPzSHFJbBC3xTjNTLHeHxEKMh8cepAuymg9UK3bkquftH7y2UvS",
  "key31": "4szo3pkcvjhU2vY2cbHhKKGdVmkS3kec6zsksaKogdNUg79a9NtzRWqGXzYpEXFZZD7SMwXWSCLyymdBtobCiKks",
  "key32": "3MZeUqLNdW3Fk2yQqM4SLZjHMCaTgjDaBaYvWH9XUs3iEaXFqKvXtsPsemgaEcWaS2MMiHEHd5wXYcmroZSmaWc6",
  "key33": "i5Jv1aK8BVaTwyfGHmWNSoQwq1n7vFgN4KTqJkCeti5vxJzGNCTrfQSg2jhcq4S2NE5dPm2u8UNBqwPdHySPDSw",
  "key34": "4ee4o3daXdu16LFxyA76VCSA6BbjYxMQBuR35qmTAUibwtBZSj3M8Y4ENGdyiuYDoDm1S538EZN1nwD48yV33DQh",
  "key35": "bGpKF9M77LWoH7c9uRGxhNGj145ZkKRGBJVbZKeeg26Db5imkLRc7rmKyaZBqnKnvKsUNoJAdW2qYwmwuB5EJMY"
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
