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
    "3x7qpukw6cqH7sr53bj5L476vD3BEZXv9mzaDofKHRfjKXgFTiYMdGhvKNKKrHmcefiRrmRtgWPy5u3Erkc2scGS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WvBXrzoXaN4CRFdV8BcfY7m87V1BCgyKBJ2DnYKbRnvy36vum6pmb6WKDRpgBEXg7oMWBm4cGWeTzGpzHFyAnqE",
  "key1": "4DjpqzidmRRZDtq88i2wqfbxLqzMzGvdfvBc751CFuMDkQ3Vcbg9TWWmJX6FB3AFvCeKV3ukPdBpXTpr43C73MMB",
  "key2": "WQbZM1RwF1BA8YzbfpFBXm8qPozebNuMWEMWfN5hjsWUY13ieTryvwTqcfi15Cb2EDAZwL9DrnoqnUH9tNXxZ55",
  "key3": "2MVyh8XoxTDtf3N7P6bwH3ynxokRKazgzzJehh1HezcKBRXpKvAU8Djxa2Yxczhez5kjGNuGnCnqGQdL6fGcGp6V",
  "key4": "q1AY9e7YSqUsh2tshGnfgTjxC2JepQ3rmamJusi1PS2TQ2Uqkpbe7vTpmRndxQswJKqNdzeMSDbDK4V6p7rwqZJ",
  "key5": "4fCDwrYLNbUZL19ZmGUBa5wvn9dT9Sw7NrmBBbfd6otRjpzKk2bpzLU9KPMs9aSrrPt1yMStFAzka8tQQrXBT8qw",
  "key6": "4jth798hqMa6vKBPe1uUMQRmSJ3SvoBgmZaBrBceYPN7yXqvnrQUWMVy2isG4x8rUx4ymRH8NHQQgqfa3STSPQRb",
  "key7": "nRGYVvadhxyN7jwtb5ENgf3xtAKt179V8AAPLvjafKxysPfbxTNjGbPgty8Fa3owwApxQ85TKw2vJ6bSf2hk51c",
  "key8": "GMvNaFggZa7NtpMSPbDVSSfwfqYySvzPQm13g8KD8g2Mf7WV4rtn1bhPVVLoNm7FZAG3BoTA6C28mzTkPLzKJyW",
  "key9": "46bs3eTgzAL3myS8d9vsxj89oc1z9udJKbRdreJZG9parxkDkXJSWPZXFFrXAg2NxcnR7GVDfR4BocfrDEyCzywQ",
  "key10": "2uviLfaYyYsMxjwNUQPLsKUuRQYMeHTVqh3aMaXYQ133b67Wc5Zgkp4JPSe1yPNfLiXfXeDVTkkiKJzNG64uDWfq",
  "key11": "4oYhNArSJgajzpNpMbdQiBXQhEuueX47jvetbuamS3SqjmZCyeupNTJa1YxBtq5exeugW14gpeTMLQQTgnzdGR4L",
  "key12": "5Z5mVSu6Va1H5jP8ysuFpgesREBmuMFvP3Cnxz8Us9c4Y7UuXTxWTUSkjAvNfgo1RoGL7ya6nVpA2AsPRBzMuFUC",
  "key13": "2Q7GXMrWqSABhfWfgDNrjVXkiBrXHbeNJCYhUN3DkRuyoQESAJGuVPWrcQ5zww3gcTdPzcZE4S69eM9taF8JzeoZ",
  "key14": "3W27M2uePcirWzvq33kACKQoPn5BZQJG1bJ3B4cLhXiTv7RkE7qPkSCPJ9ke2hvzTzPY145CbA4uoEEKGLd78kwX",
  "key15": "4AThw4yMAvKydiKmBtoQ9LGwCtyX7He7aweEFAP95LW6d2Qp7kkJPQ3bryUhh8tK3JVN6omiKXRsJG4XvAuXQTUy",
  "key16": "Mk9oSGp2FmFsbBUjTazNNnPRK3rqUs3pQ65S4unV8YqrbxoVzg6CPmzsBjBXPu7hUfVKobMza3W9aiZiSRywfdG",
  "key17": "65fPuwLEoV7MKtNsyAfroKmuymseGscVWxp5Q5g146rbEjpD7ytvSYUVSXRconmbBvcFobdQ77sECNTdAnfjoUdL",
  "key18": "4YzRynM8atkmHQCeawCqmtobG4So63dAnbGGnZu1oFQE9UBTfXwS4dZKs2cEpwo7nJPgHRGMR45m3xXLuKCXZ2BN",
  "key19": "4nnERpz7WfBD22FgraHXdoojW5H6PbKU8G9ZHx8xnDWZA1sLCzRyqx6jHPptahzAFa5bBWBUjBL7aqfRz9mnRtk7",
  "key20": "2v7SjQa59puZNEfwe2FLWjN7WgjCA9ThW8zesQyeCQ1JxbbTXhevgVXA97Kb1P54HYnxk174XxpSaBheB2Wmooao",
  "key21": "66rVirD9qD5UYCcSNqWSYqMW6DhcLx4xdyBFrY4Qmuuyihh3vT8H9jxjWNr3icbGZNaSkbR9S75sD59VBSeoGuqW",
  "key22": "22JuXdv4NHSj1ZwQSXzMCHzoScBTMLYXicSfeu9opnHiVBWmWaDkLkuyymQSKtGi9W4xj4sXFZAwTCNfJnPzjMBs",
  "key23": "4TRXf4pmh75TqT6xryVzt1vkjE93VVM7ohrRyReJv6NtMGzFuUNQiL6iZEegfAxXuPG2Kuo5CPyBmwET8hjqTAAW",
  "key24": "4KWs6jAzNb5P3MwC1bwcF2jxvoTDQDQeiEr23citWDTeKDR7ZhgCax7NVYgyYdxSYi66EZCGrcHn5U1KX18FqJDJ",
  "key25": "2GH8cM3JNR6cUJMKz2tLT1tWy7faTErP6a6XuSu7QzbDjVZTrGDb4eAxNpBxzfbhXRNA6CejRyP2ytVtF5kZZpgH",
  "key26": "2pCd6PCrGjX97ZvsyDAsJwXq419Vp7UXineYMMAkNPhJNpWX59iF3zysdQNXTuKRe4BtGXxYoMLd2o3XE4bj1yMF",
  "key27": "bXxJUM7fRoAtdo4Y7yXUnRakKkDz4HQn5yHNvd4KH2YViujbeFdGztwdFhX2mcYc9syaZBWUy2yEdDzZYzCQgbu",
  "key28": "5kJQQJ2KB69RN3Xbyy227fhtBsYviaS5WwdwK1kZEQsDM6eN6anYKyPzo9qQr8dJ4WPsdEABjGwTUndNdYDekz5K",
  "key29": "44RXdY9MN3mNfeqEMongVurWkSysqsnbQFPDRHP2CkvMkJ6vzjfkUdYA1ZBuXizkrEVGm9iHNzKGho7A55jRBbuU",
  "key30": "2mTiSKQ7jTTGM9Fymmzn88yrzcSvdmcJUzbvCKfPnSxeVALivkCnDkpHcKxVDKoWRt2AyE6Hu6FpXN5K6VfkqTw7"
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
