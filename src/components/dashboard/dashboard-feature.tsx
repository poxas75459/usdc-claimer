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
    "5Q1BPpqy5xWjp5Nsxkw5w7G4oBsyeAaueW81ZExPoXNTmfRCR3xCEwbZcYCNUeGSnZPDjefe6FwMzKpw4ijzFz12"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56sN28i1dj4dn4LBN8anwCz6vzLNABPde4sRhAZmhEKd4HZzsmsy99euB2Q4pWm3z8u1YJAAjdSkXqEhL41o7zUk",
  "key1": "hDYwxKu9QARNwqWdgDR5DebTdTqF4VyRY6Gp8yMexgGTWExbA4SRQDccgCkNsiGdqyzYdfTWHfZFdmES2eoEm25",
  "key2": "5oqBbaMT6TVrpy7TMmG9gg5LHkC4yt5a1Gfe29FcFpFmuvf1MoYLsxEwkW2ThV9xvFnpqSs7HQC3SpiUDuYzMb5j",
  "key3": "21q1yNaHzWkYtqNgY7SPKpTGAChwvXzfXHWsnfaEtAt1DAoqzSb84FxA7cL6cA4gpfdroagbUYiArJaLHJuGckvv",
  "key4": "FX9rywuLbzZ7Td8j7B8C8yQHtwPXbzGaJKszSTuG5VUApmXR43fPiQK5Z4oyhAKjSRTjgY3BVX3ScVNAzPu7PsC",
  "key5": "jBCSBfJWxvYWTUrWYn9JAkxbXAXS5Zigbm5quCADxNQvRKPrwndSuFRfhSaUjLB37mWotxeUHAhHaGUQFs6wGyW",
  "key6": "5mxfSs5kSbzcXHBdtZaXaktvhgszZtNGnQQASGBB3jhYmjcdQ6Ajr4zVmqjJfjWiYFJ71e7tqU8ezxfDLs2SqGEF",
  "key7": "HsYJwXKKVTGXx56sRvrcbo3goLP1nfyumbqhehLTd1nH68anVLDEdpBGnwA42oG2mqu3q9hWCaRm6CuYrzo5KyB",
  "key8": "46m4gqb2mgaVKxqm1g2Vz3883ui9cm6h2YGu1zq3VRmFFYffnWphVf6UuxUUP1s6UeBS745XLeLTxU6EWVbEmpnN",
  "key9": "3cZC8sMT3mMg2VNfmZwEfhv1gLBAF4ssWT1JspQ1CBvC3V8kx1SLyyBBqfnhk3pHypAVM9HDR7KiZKQxy9Q3sRGK",
  "key10": "4HpcmEatHSSNBPSq9pK1io67gJAUVNoMz2LSfQETp3gGw2JEozRJwx7X4T5Pcjo1axr5mS7W2rZ1nXermW9eaMBR",
  "key11": "59srtRQNu8MjiiDr7X5DLQi12sB28SheATBrcW4YnsmVfbfADoyHU37SGF94kek5iQeNxs2bzC3SinUTN8sAgTkH",
  "key12": "4h3aasNGKT21xJNSyhrHrDHug7H9P6oPLuRMx96sZNxuoppY9m6kMTMhBKPX7KsWwqZm41n5MGa5cRU96pT9e9wg",
  "key13": "65mUMJAuiKBqBKax17qg1791qz8L3FeHHkQEQ89DXLCAZnj34gW7hbiWABmtV9fHqWCuuQFZTe669KVFvsCM6hMp",
  "key14": "5DcudjgYoGFrQbXhFs67inE4yG8HYtGbKW5rSsP2cgQpfEr4ZWbaUQvY1M2S2FT9hWy1Q2E4fykdjEY2DNgxrEpg",
  "key15": "3BzsbqsarFBYYGg37PgjYSZPbpwPENvqZi4ZqY12yhkhzRNeH2HL4H56Uu7sRDqqgC7ENg2WK9gUfES6bzmXXQ5z",
  "key16": "3C5HSWbg9tZTR6kFbgAh27SoH7K87agxRtdN7wFNG8wgYk4uKkpT8dx8YakCkoumppTtpm2UvJzqxR1vPr61FkPw",
  "key17": "2T3zn9LV8zoaJdDSSfu3rrKV3qxsTmFUCaAvx2x1LzjKpvUtP9NMXL3k1VTpkpqc65r1zLJZcndbiKcDZqMaZ22v",
  "key18": "cipZZLZibWrhfRCcs7ZE43VsCrU7mmeEyDBjGiCdhe1Bd2oQbR9iQwGLeFPbvpHuNqhUSQUt6nBqygJPjN73z1q",
  "key19": "2vcMCS3bUuKy1SZk86bQCwXffymArEJbck3ZuYynyxEKauZAQFub7KWbYuU2tu77YTWJ4qfY3tVsSrs8X9rM1vwW",
  "key20": "2CuZqYcMnAQpeTmonS3nMAXaX7cq6nUpDeeKuuxzCHhkLMUqDLzmQkW8pYPYWUuRSKYgPEyEwvprCjfYADF91zFE",
  "key21": "rD21HYu7VfEWFXvuKw3emfdBbXaBoKyDnupKsKzrcj1tQXNhv6gkCA2L1sDfuzGjtAJyJxqmnmKjRjtVouQ9XAM",
  "key22": "5xaUcwVcJgNoFYx64XKMCLNUELSzs2rVtEotey6SDSJ59KzArvkS3iNaRWUbTZ2s8w4v5tYugsyguD8v85WxdXnM",
  "key23": "4jREiC4TGu9zN5xVx9YE19MMhKfJAVcGLBbGY6sAzu87WAeN3NinGmq4NidnbJxXhwqLiVxHXsprpF2dQe19qxAg",
  "key24": "3T6EaPUbbKjhqwAB54JVS8s4g9iqr5wMpinPLB8ynk8gSTEr6HUqmQv1iCEf9pAjRjYnRVz2mpZrXrEK5KVdStrF",
  "key25": "2nHhk3tmG5JHdrgmtcSfg3KQrqkF9kq7SJE2vEQwx5WPN5p5LKVMnnF1iB8kYucRuKkyouYbQtFYk5fnFqUmJuMS",
  "key26": "46KZW7CKS5AYAmz2SkHMFCVrtSgiVySMmSGZeQLVhMHTa7jXJwNkNg3KXLrzHiJNH5UbwkU3iaRtTvtQYP5xKpKY",
  "key27": "25oRZhH4P5dTrtDRCoWgv6hoqhKtDL62Z1ADG1jRmAHDc6xrdNVnoi9F2usXxWzc8xyC2f3ZrTK16gDoSPENr6SV",
  "key28": "4xTnpG1Sp3JLwPfjbb64d5VnYuUuRQD293Q7ps2K9aWJm2kuSQz274fezmxvmJaGjEJq81Mo5FW4kgPMDLYNJHps",
  "key29": "532R7FXXqmCQ5n43iQEiZ4CWpaUnxDC3p2E4dkdVQkc5YnTfu4kRY52rPYkyHuoz33PuLZowVkVnWChveinjt6kk",
  "key30": "3cLShx6XhDoQEdhtmCt3cEC7V6pumHBDTPMBNf8jZ1SP8syaZWrUQU3SHVdGyJ73ghgyq21R9HNS7cFVzLeEmnPr",
  "key31": "XJDSRykKQURCZp82PJWQPat8NEGX4YvKvAWA5iwrTMBXDXLrV1WJUhuBTeGRaV29buC8bx2bUSCZ7vokispb8cF",
  "key32": "3Wy9VVe4pYvP4Rge52qJREKA36G3tGGgmzzUKh434fTEWgGnJA8ReCMH31zjpnN1BN8NgomfN5mQ21KJh8RhEufn",
  "key33": "3UkoGyFAwzv8MgY58WizhKiiUmRf61U5CEMPbC7cbtVvPkY4rm1SuuEbjwTWXM3Qdrcmz8ZUZzr4rr1BNJrVA5KP",
  "key34": "332V9gQquM9CdjbcHMqwmAfUa9cGpjWVsYPa5DSWqSQ43DvLHxUzu4kGwSGPLYKeFfbj3BTqsXvhuKdwJxgnjEGD",
  "key35": "3F1DvaxPY6NbLvwtBj9ZafLZHhKKQ3J29vAEw2HaLnMrncMPzSbGhrfH9U5Wt22AxoZM1YoyJTZuuWq2bYhZcHdt",
  "key36": "45Y8Yn61Le1gkKsp3HEzvf6fdq1PHdrNJYh3gCwavnfzpK7g29fhswbmUn7SX2oezWZvMJxnwt2HM89jCRHbdVDD",
  "key37": "5QaU5N3Kh94UqPR5V3C5kM1CQjBM4DHGLbZhA8bTziChqGaBPvr7sekNvFRuHXHBdZxTwi9razoeiHRr5Y4rX5CU"
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
