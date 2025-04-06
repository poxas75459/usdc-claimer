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
    "m4UBRToXeGCtBSvWum1kHPBCmdPdDY1XLJGyDbw1sVSjkEJgtxhSEUkPbWan7nKKzS7onn1E1KGAw1878yxTrEN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rgzeRVPzqgsoGkjmEnQGDEJj7RZvKevQDsNCRBTFhb4dm33y4B9G726sYfYEqvuNPCCmgnoKPeJoELG7wcJUxqX",
  "key1": "2tXbr2kCr2gdTQH8McazSc1si7tf4MewWdRZrhrTrdHMtiFJ6msWmNt536EtzgjVyBqCKrLzoK1pU1XUzv1Pq6op",
  "key2": "4zduKX1C3VxAFsENVegzrNDjr7ePWbxUp5wPbUokxezEqHkFbxvfe5wgbcgwHN4sk7oEripvJCAmU9yb1K8Bmtpn",
  "key3": "4TjX4ZXweKCkHEd49vyWuY4DNm2PXWyhkXadnMT1ykvwdLoqi9brzvU8BFtXFTYXrfDnTLJzdWDrgUTnb7BrDGrc",
  "key4": "4cndRS8Gn9zRBaPaL8sdB5LnU7nZsqDMoNheET4QYM4ha9GiFENoRR5SonEScyLi8VQ4p3q8FUL6bq5fWGexTAZ9",
  "key5": "VCqNc3Nh5QCQsm1wXWUmyo3znTCSHM2vS7pmSnY9Sjq8P17QTJQVqhGVNQrX5Ag75smED25C5Ne2zRKpKL6ewKP",
  "key6": "35VikyYBDnjiyMe7byiPKMvckPSegxaXAh3QM8GVAWqZH4QeNviS4LqgVwiHQxHxt97sLtV89TQLExekb8GLm1PY",
  "key7": "43xZLxKH5ytVwEPEbEnaP45VRyKSzb8PU21Bcg3jH5PMWKtEayiPsrkkwvCVoxqq8BVvaFD2EvBAQmrgHcmsboJ",
  "key8": "43DmRu9CDMHLW8AY1ignrRJbLYyjAqZeHKgKSX1to8Qz9bMjEC3FNBAvp6WbccetxRF798DCqNdoFvX5bCmC78Yw",
  "key9": "5wk646WHNW34cHNijdVgKAs42TJK99m8xqbvK7Jn1Q919urKMemfr9cZhH4eLSp7Zuaudm3QUMtmhQLhupT9Sui5",
  "key10": "2iB1hwR1EWYqbF6uLcuxmcyQza2oE3BRHYDnkP22XqCdhokBi1teyN5HCtC736iqxkqtrnCgzqPmPwktu2NY8oSr",
  "key11": "33LHjhamPYsdVgFucLC95AsWbgGy9G4xgSQU57GxuijST8BDay4FNbfdRXppZvKAgo76xbWbAum2EwrBqkD2rT3U",
  "key12": "4X12g12vQnjrYrnvjsKzw8J9imWid7xqRYbMsZs89MRXLgQ2XPQw11snDJHTzY4aNYPBgpqX4y4YVvgSqbNcrGqf",
  "key13": "5eWU7ysuPokHgs5SKoo7zggPBuKzMh9WmygSW2UEMdq2iAX9r9fopFNhiAtPtmc6yiTiUu87NVkCbBLzDxPEYppH",
  "key14": "3zyuBtfprAiXUzrtJkX5tpqkuaEtGSzriHc2MzzREdtRtg1TVmQ21oSSBkdHxfQoqeqMSVs7Kioky9ADdoLr6Vga",
  "key15": "2n4npCVNLXovXzwCVtRiEMAcPNTuikd4q3XdXkceax2MTfEUWk3gtnxWbrqAewwq3vyd8CFUaA2MJV6jhRqvEMtj",
  "key16": "58jauRiNJXMLZ8i878qUYH5ewNWfcaBp3wKvSgiJExkNihEJGdcNo3bEnV446LxkMYYUkZfP3tMhptRiG9LGkQW7",
  "key17": "5sJep1aU4YN7pm9bz9iv7jBYp4RpnFWhqXW3aEzhPf3g55wfaqzvB1mFt4qSxtniz75K3cPzbJta2gUU7vLVGY6E",
  "key18": "3q71MR6S8PFYReXqYH7ujiTfccy4czPE1YGmtwRkWUzQJSBkUhQsydQ1CuV7RnmkJceqtVdNgZPin3H6VumjUKbZ",
  "key19": "3UUjVCJzeASEqwNCHcvY6DK9UmvQbKBaX33tb5LPtYgFeNJnRTLVHz1Laho6vqsCNQfwLK5e5e6eaNiizjtKen4w",
  "key20": "2SWD3hLL3M6zoahniWtfQvcGSFNhyAkZdkc9mkpNQpv8yhRzgYBdcso6C5p4QxKczeDy1GXe7BYzVDntX3VDTunU",
  "key21": "39VzjMznFiT1d3q9cq5ZDjSd67WLf2JXJ2yrqo4C3YG29ZVBkdn7Hv6Phn4SHvmQPiFpLeZ5sasTWULXimwBDUG7",
  "key22": "4ZGPuFLkQDRSqs8HTmMNp11qK8uWXV7rY4GJag6jzNGWs2hY7SqVo8rSUzDGEzCuv2TysqjZbaL5u6E7YsiEsgyg",
  "key23": "2FSfKVfaEnJtvBATocrE1PLFhqSvT4vzmTonm8kxUx7MwqhHTxo9PcbX2S1UXGpRKP7AgA1MF8r9uGiK9NpyK45p",
  "key24": "2EeS6kAVbu4tARNAB7KBCmZdxbJWnnzAevjZXfcGfLFVsR5kuhyEjgaQwDPxyGBuVVBkbWwyjH1NSDmihd7V9EEM",
  "key25": "3GDRMLF66G2Cb3XUjzF9XEKBnwRnJxLQj8xZ5HhR7HXxx6LbvAsxTqAgkGkL426m7NwkBFEHqnX15yNsSzamL7iy",
  "key26": "3qbv4Bv6DZ36xzzUQMMJ7x1SEfNn1fYHFkutLTyqfDJEzXbcVddQFfgkyaA3pCChkG2kz9HfUiRi6yjLqGw2q3ku",
  "key27": "2eEMPQ1V8fqdR5k9echHm5kHb4RYVBdpkgGdkiodobFeQM4jcP7wzfqx8P7mbRB9erNdXKkfLiSnNrkNAQSx4Xk4",
  "key28": "Fee76SMMcvXNFxf3MazvZjQt8utWVXnS4gVVVWHT3HAz4hiaoDNkWptsiDNJuvYQ7CgR2MCfvHeLKLpZiaoiFY5",
  "key29": "4BgsZnGy4BTCZLD8Gs2t3RYjbkxbrHkMPFCGwBL52p1JPE6T3R6XBasfHPKjjzDjFWaJD23sh1q84ssBaxiJxMc"
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
