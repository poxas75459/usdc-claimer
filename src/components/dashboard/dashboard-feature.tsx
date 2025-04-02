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
    "6593Be4fBioHmAcQNTTsxaMfArZ2zMnFAKmENpcHp7xbJGuWkMHkyQU3y28HYYKx8wGtcD4nFxgh4vp85gztFUhx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CRRdUXCZ9q7QXkfKz5GdcwNz6mPpQsg71NYMRUwJ2sSNAFjr5wHEKuhRXxLv9wbLpiMb2FzaXK87wxprYuA8heH",
  "key1": "3MHTL4arVqNMGtmDCbnEnAh2BBebCASTWd8vDUCZ7USrTiX4Tfx1Eax5TYiWrbs5mRuiS8qjr99wj6kCMHUQooJ7",
  "key2": "5RPN4ngduwBB4jwVXPFMi7XEkQdV6jEL61V9VbUyJvHt75qtUpEbtQVtMSozcu8RuaWijDBWHv5oHcRzejfwEWdK",
  "key3": "5w6fCDU5LmVD39Fr6tpnQVeL3A9BXP82MXdbBFWCnHzgL2fTz4FkJ3ZwWuyNhKb9kUWFh1XA1MuJ14DrskBzTZpd",
  "key4": "cta4ZDQSxXEsGSvxYFLc3tk1X2sb48jx1yJTB4vcbRjeLZBEfBsnFNYUZgnsuBLHGtQA28s8GGHZzGKHkZnxQqV",
  "key5": "UMo6e3C68sGWEQJwpyn4CKYwqozJNx7c65Fwtg7SRaUDeAQDtcttADxKQFFw2bVvNfzGxwHpKRQaDK9G4affBKB",
  "key6": "54BMAJ4yjTpbr76EUWx3dCrM96qEkX4L8mNrqXkWxgQJsTG7EBGvW8P51QYisA58Fcv6SnD1pt3wSwTJCGgc2LMg",
  "key7": "2VYmaySCBGsWpTMLZLUZpKZNwZVhdUh9AFnbtspCJcGP64wAdpdZj7q1Qd1YfxHRvd3CBvohAbLMNphfMnrp8E8G",
  "key8": "3Pen1SkYGdZQgTwNNMNENasV9heYHjD2b8afJeccqb9DhE5Wqe5jrmAayKwceht9kuobPKWizr7oVrCWNQcqmZhJ",
  "key9": "4HpCnDiGWtugGcgrS9s6sdHQd2Z6cxMJGoeVALTDuiKLJJAjApcaXCcw3w9NKvvr3s4kBPZUvjMVEmQVY9BMxXts",
  "key10": "x4VEfA6QHxZK5bNNksfG8eAy4L6phHoGJiQ2W3bxUmsv6pRyYyDyP7NvYLtoftwckNJzChdSw59e7GmPojGuJUv",
  "key11": "228AciQMRBsxTTofkbwahNSzZ4NkfWNt3NUu84dPW3X2mqNorhkzsx2f1capSnV6SvAUXg4HefirwwxD9pLbVpax",
  "key12": "4mCNSmnWDQkHeQ1jPiPrDEhpf87gcAFfr7bfVkq7aueuPornAPew5QK7f1bjdqpPsbr6C3sFRbs79EvY4dPW4y68",
  "key13": "2T4H82FNueRGEsJUmSk2AQbZ6yWuDHxSZLPamz6qe6qFvtJLz86hmJJ5auVzBfgN5yXxJPXjrf3SebKxj9G64CpM",
  "key14": "xZB6Bt9oqZS2cSmoptoiqKTMZDEq2V32taRKV4cumkNUfzuXTVxxMJP21uE7b9LJ4eSWpe4U4A8x8NPxJ2swyNA",
  "key15": "4sxxMZykKjqK7JQH2QoBFG12FqetHKaTT7Bv9RX5PRrXBeQj8s9dRYiDXXA7tLGHg9zaKuuHcjp5TK3okaYg3t9P",
  "key16": "2e4PQk8ZyhGYy4DU81v6c3fgYtfFUrfoqGWpgBukQJr4HLw9gTLZtmZYrU36x4yWFWL8FpLYzYyo5BcrwJxTYsjv",
  "key17": "3wzGCJaWaxBm6ezgavoQeE4xwKu6QpLTfR9edMd1sCMU9bXRBHm7g9fDbucq3cr724sAHRdzU15Ainok3ZBNTSeD",
  "key18": "5e3F2HKhwcYTKKC1FiNRiozqzFiFQkDqvcrjWN4HN1sZHec9x9TEvkJYGYdqzFCW37UqmDGLy3GpzJLWWP9C1RfR",
  "key19": "5FtuMeGGggwfRjyuyMk1cJWe55CUnTLYgioaxM4c2gjiWr2y8nGMVVcbuBT3MdT4hhYgQh6CXGNv7rJ5rRS8evF9",
  "key20": "4ApNivp2YorV7eSismk8W5AZPSfQh2mE1Ry3yrJusyxTwH2GRzWF6nqPQxe9MwpTCvsBHDKBbm4pjLpeeEGeaX3r",
  "key21": "3vnJNiPYo1BC6HiwEUyhKamB92SKeioHUu1YUcvGLiEiw9tdVGpVKchSS6pX1hTgiLFQQwcgF99MdmW7ZnVYa5sa",
  "key22": "2UJRFLeEGSymYsCYK2UBoqExYm26fgqy9k2iT4W3FrdadSwgLQKiUr8eyNpSiyrF2RX7NB3SNLwFkqW9Ksap1ZeK",
  "key23": "2U9Sv6VTjdPuDsmQWdgDNtYwB8USxdMzzJdQFtWLeGtpABTHdsvKiRrxTvSWj5HNx4W72HWdda9Ersdakd6Symhf",
  "key24": "5zqgsbzXEB1JfYj7XVd41qqQz2wsANgfBgcNSAJrhioqCLiWLpd19bwh2LcxETAVVnK1vp2jBwmZvkudidj3KScP",
  "key25": "4YuweEU6x8L4eLobZ2kaL9dFCjcXhrrDWRaJXTAHdz7GozJrF8XANPK7KHu7Wg92X1qs5RkDUCfVR8JiW7LHzyei",
  "key26": "SJYah8UVb7jzBNi7J7n8J2bWrsNsPNXcKqK2qhtRbSC5cA4NVXfvGunxPd8ToLakaXB7pM2kKpGumnZbcsYNKoi",
  "key27": "3vvWtjPGDNTG6h8wLQz31ViPA7rhDzBJrkReQEBvRissSm9DetY4kD1qutGMQBGZX39aWVLf6D75JY3JNDUuS39o"
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
