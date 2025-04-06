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
    "3togmUewbcHuwPp1D7z8bWDraT2ZS6YYusB7JKr4uqQFwuixyD2Vbo9hEbkQPXtsMvEriovmS92QLjkNAPHuQhpi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42no1dtdvR21RiLGSduAY42jTJMejpmhxHH7te1oreaLmwvAhpANfG6MdeKLT8DZwpdvJaEqzGZtKc5T8ULwTqXz",
  "key1": "2H1wsa8eH11X24xBWCf4tBnJX3TJJpEytsg2tTSgrRUNu6yS9v8fLF6EteXRqAFwYqzRbhdgwzFavd4P7SMmRyZC",
  "key2": "5Y9VAfu9kAuGRLcDjWYAAg4nF61mKtVSMetuibtykoKyKQRQTRZ2eo9Xs2GHtgTHLwu2A6qncUaQ3M8diN7Mzk6j",
  "key3": "3fXEzWJXxGACMEYsWiRjpwUnh4Ch2LcU6zu5UxQEuh4uxdqTdFCkmpSi8SzoeTPYFueRJ9wPkyyoHLvRbHkAVGTY",
  "key4": "2hPkkwhvn2NEzkV4kg653Yc9UgBTz6ZGt5ue86DJfA2WDPDhXt4xBJFqTQy29PiUfqAuJMk9uBSwmNGoujRTShB2",
  "key5": "525d3kNLZvBaWgH2GYxefFePKCqUHfL833ES3XtPAaMG2tDt33n7pbZxN6gVmtDJZEkgzatUAKhq4dtpE5g7VQxQ",
  "key6": "2S4MHDkwVV5VK1iy6ShtS9nwQP5wZtBfJPPBXgRSUuZi2eLU2UFt5sRekSxjBpyLkPMd4gmuvj1Tb9p1wE2auLys",
  "key7": "yoAibBSiBedksQufi84fabATo7rcsx5SoJo8kFBuvoxP3Q88gfRzJyUQ3Yqcp1oqH9eWscPhCX5kwjNiZc5GUSV",
  "key8": "5j7mepaY9ZoMyashBEMVbwjLNhD8jprKAF6hiYpcFF1z6DAAGvXjEabK9rwnVCS2dUFpKhZea1RSzwyBmgzuWw5u",
  "key9": "2k9j6YHs5anJ8oDaLPHiiTxwN8GgoTYY92XLCZrvPHCUkjfnbmV1QCoMu4PR3DYjzy6qUFLbMHAdGqnZHTbW9e94",
  "key10": "3PmvhoqrSqTiAkHLxScxtJPmukSHewu48cGNur8yH6tmxTSs44VaNh29yUVsTjpLDZNdLMk16XDzxdevxFFxZ4Ph",
  "key11": "2Azy9SRVYZ59YUjxkLnJigYDnRDXETR6nmWL5YgMZg9DCrF9Tx6ajffcEYuJoQau9uN6CsaJFzC8peLz1kbxYn1E",
  "key12": "4qkjFn4pEmXgYURCyLZM6ZXX2czy33c6NwDuJFhsD3GhiJ4dF6HhMApZm66Lkbn8qQKH8yPo7TjJqidJTHuY7GFZ",
  "key13": "fvZwbr9J5x4BCWXnqBXuQvtbJ1UhR8AArjSui9pAjMVLu1hFNT5gnLRLrtpGwE7v3sLu1kSB7E1fbnDUquS84mx",
  "key14": "3zfH6qGXGtmZd1Hs7dm6XAEQy4BHmNn3UuDXx2VjaDCJRNx6tC1s6RH3hoogGKXKaDKm72jqazBfc2UDUJdPwvbi",
  "key15": "18x8Cwd94eBJVjNdYFq6Au8TYDXT8sz226PkWsZ4hEseBWvnG1Fm4rTJh1J8EyG1pHLBd7RJpp9GWjwU1pbVZfi",
  "key16": "2WJz7KRUkmp3iw2PQVWin5VG7LhmCLVPUV1vn9LKcgMzqV3FGkEx9ATr9MPeFN6gV3DSLVKhdBup6DSPPWaN5Dbb",
  "key17": "3WKoKpMhrNa8XEj8rr86HFEhMuJfMubYaCnwao9sAFzAKRJedUxxwjQGGQsSnUiRiqjwbzgMsosFsuwu5MYmB99e",
  "key18": "54qvziS6hAQM3zhBsXMKtmU1faaMvLc1qtaUfFE1XHygp8farqfRx9kMcXgukbeWg4VPkKZUrTTHcoMpsDXHHjBU",
  "key19": "4QoGz3qfUc78agY7Ai4aFsRfuWiRaqzov7CywPaTAMb8bkaUVZyZjKPQCz9gRt8sd5oTokxKwKXT89yhzfwnTraz",
  "key20": "5aeu4M49ZF4pTQkNnCCftggMhLfWgfZqhJQystUDXGhieRmpbVUpVfUgEkhsemmebs3G3J1sMS4PySjrGpCCGquZ",
  "key21": "5T8MScS7zgRJNhNtSqeg4pKvD5hp1EQa5GifhpsNEv9J5K1YANDMMTPBzaD2gfUgkdrKFQcLj1YMC242GtV47w4D",
  "key22": "4FN88xvtNGP9vi6Qsq2PRuyNuW5VVCvpcpVLwx239Yo9kGz2Fpjda1mG5TQtPLYDKezqMTxps1vmfj1k3qy7UrEc",
  "key23": "5rfff2v6qJUE5b6CEcrBEV3f5EnkmgKkTKFyiL99CvsdbLapJVC9geKTEiS5aiAtFrpcRUL7bF3G88azkmXDK696",
  "key24": "5xB12SP7WSNsLFcoCfY73xGoH1Kv489G4f8pnk544yPBC6oGoFxJQXSZ1bZTUGiHrbkXZHRkG96LnVTVJ2VsK8pH",
  "key25": "3JwZdcsE8xQA9nqzDxuJKtW5YcfdaZvTnScsBku1VPU5v58QFEnY16pQkKW8psr63VhYJ68ddehp7cSj514zFGM4",
  "key26": "2rnYAcS6GdDHG93QccW63jyjrt6VR1RfajpoVkexi6eQ4tXY7RrHXAKWCP72q11mgEqa6QfP3Q8vn4w27ghKGxzW",
  "key27": "3CJiMXiJzhdorpwQb5AJzDAvCzaMJonbPGPBGEiF5hMwj8tBHbwW63F9PKhkeeZDzEVjLyhFsR48AFZHnuEvhZGU",
  "key28": "4Td1yG6FCy9uEYBDUYWMXUqPtFDbheZZhAjiCK1HqxGvdyD6Ug4eACVbmh74ZDzuzMpS1cbuiniNR92MFafn8YoP",
  "key29": "4QGZaXAQ2JVoArS6d2ApuNKtA3fsmxNws8cSYp8vBNr9VBrcFXb6REvEtNRBoUMzm4opAGbUnRLBujH9amREfBaq",
  "key30": "5LjCw2FoqKvpZyJWo8DzCnhfhxgR78f23kK2BNY2f3qTAXTBgZGiGDiTDEerozk26sUicsKVddYZzVxegtSLLqWM",
  "key31": "3QXceEg9JbJbGjgR2hNpLWukmBkukExupYYWHyipTFyhouXoTDw4JwVkxBBtGdyQecif7ST3TwM2KU9EYuPoZHNF",
  "key32": "5m3UqkejpCdGfv6LNT4A7ngwNc4QwZRhzcbrX3wgkdwH6u48WkfL6FL7PeiL6EuLQMDKZGAMf7Rb22g5MaS8VQ2q",
  "key33": "4cLCWzY6wPBrbToy6LTGsdBhvKmUC7ukCNfTLW9FbAzDTZJtSjAFMXTXFpPWvtwqAvr1V5f2TPQ21xnwQb4PJ9Tq"
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
