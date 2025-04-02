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
    "2F1gor3RwqZ3JyHSXaqZPRKBHewL9kjXw712bNP6RSMXSAiMUV9EPBott6wATFN1CdQec1DSpoCc9MQD9GwvPYw6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c7ckZfpBsfXUJxtXQnznDXPP8pGkkp5dLmymbNgKEGyHGP4EddzhzdHdkbtU2pj4aCv673YzjT5RTwUkRgGzsgg",
  "key1": "3jhzc1cRF8RUbmKRhsJaZ1fifaKGNjnYQQizGZanuFXr9M8TVrCCNk6zGsByxVmLpEYjLQzLgqvP8iYLMD4rPKU6",
  "key2": "5nnq4171QZ7JmAtRHKsGCxUXCXrejRdR6oq4H1AvCZasGmqW81LnqfwKJPNCoMYG9ZTX9gNz2mu6zTQQ5JiwAduG",
  "key3": "4ir8WrQbUgSV7cgUp6biMtRAHSbL2LSwWyvyC9wsMdRJi1tsypxPehMc4QScgRkaJ8co5sJiSTykcUrSwNhvCD7Z",
  "key4": "5DmBVbven5tMgTfnhd3Ex5bc48PxaoqRWMRxC9qE6df74K94YiEVtSKCKPWZ58fnkm1cAQKiaaCFKXxm8AmryAgP",
  "key5": "515BzDpfFHjjbTj9sitRLZbgCzD1ndxgPpLV939V1HmSYetWxDj2wPSvAx2ba9BYrLyHqoUPasBrSQ18UEFRq5SM",
  "key6": "3cNFegkRBj61zdD5WTB33b4PHouXsgESkTYmR8rGLfi2JVuZGXc6C4hFyWBqestVLSWRztaJbofwKqd2PN3bfaom",
  "key7": "3iHHJhRAigKiKb9GX2aM2aNTFnDPD4nZwFYTfCX2Y9zXJqi5NdpzDYK3mDK9pJF5FEVXgN31cpW6EsTQYTgj2x8E",
  "key8": "2QaR3xD5Y86kCUkFtjGUPd4cSDkCFGLQV7e9YSN4HbpCiVCybhmY3i7JRZiZSQRKh3FF3mi9TMCMjQQ4Yb8HxrhH",
  "key9": "5CWqHS1bR36fwQFE6pgKJZARpoTrZjnrCc6UzRN5B4kKcnGKkUWrHSYX4uEGANfRYDJFNZvBk6u3HQSv1HH9SJnr",
  "key10": "2Z5TccwmyFjgEjZg1qH6xACVEmkaEC2tcvDe9CqeY1yXnHZhcBzw8YBoda6cY1J4XoREzsRJTTxT6sb5y9FtFYyQ",
  "key11": "2zfZ1WbLhQnR86zM9eH4M5EkV5j4M2ec7HkLJR8Jzzu7R2nt6mFg96wASaNsno4fN2aenVEFRvPczXFyHdjUKFSn",
  "key12": "5tMbyYnhTvh4MC1deY249mdwVdPM2piG7oDcaEgjHr1Ac2uELBJe78aJqcvX61LB6zvT3QwUHNyCBNLxSBrxW58q",
  "key13": "5yrW1jdBw6egrYF6X8HXjzPzJvzPLsqNr5jsWrczM4dZeGmBbqy4KhFCqUSJJXAwLe6bb8RLYLXZpLWwN7sHbuf4",
  "key14": "2a6Kth4KYGGxkMhjMwVw7gfgUkxiA5pcRj38P1KzGCzCMCrDdWi6gU8imiiNpMFUHkQWM7izE3TjVhF8g2M3qKHo",
  "key15": "5Kw2HP9aZgAjAkJj586J6PaLqhyQa59EUWdgLcGKCUbhiAqvpFpwXW9pnjD6exhqKaGqt5YBARTLw56ZDsNb5SFa",
  "key16": "2CC5WMyrcCW7wNPfjJhQd9FnFpp1an64cQuDfdFmLwh4HLAqL3yHeK8MV3ACqL8QsaSbfpuxwLtyX5hHZrfJX8Wk",
  "key17": "7FCKepkFDwTkTB5tPR1JAt8US3AugiLfb6XEw5Use5QAf1UeMbKSmcrZYrV6ngP73z1w65ZUT31gQESsHdq35h3",
  "key18": "3akbQejpTu7XUzL97DuvwiFJ5sSuyGjBqoqLvB4uvqS9WMJXYDnAbvck8iKxhFwU6PRYMv7eooddJDNxYAfRsaey",
  "key19": "5aAif3GC4AYxrmMAz3F7E4UKU9uPG33FYNxwbfLfGdJnVwniGPAwrNYFQvy5DMArybvUnSrwEaDKBSYY2HSYN4cx",
  "key20": "8kg5VYCmm3FbxwJgpuRwptVk4S3WJyzhjbFaNCjz1ZWYcU8KcR2Rtjoe8v3UZL6T7vbob3FJ8ABiig6idPNp8Pv",
  "key21": "2swrRfgGn3SoX6nkPzF2bZ77Cy8BrHXcdrdF1bWwE9vjmYcTY7cAGu7Te4jT2aLQJ641Qn9MWNezQ4Degt8s8nBP",
  "key22": "BYF1gkBgkMe1QE8b18sX6VW8ssaHyH6njgHqvvr7Pb1oKnXFa8u8LPpGj5Abjt1QKZH7eWgoxtkxgqb1YsFUMWb",
  "key23": "c55F2LeAZh7CavmcMWn4FCHAC9gkjoC9AaBREyJ7wNUdnUhcm8P62oYY7bx2TJLea5gGrfmYEQJY3o7jp6FQsu3",
  "key24": "344N7qaNigzpHcgLLG3VoFXxjazhSnXcHCAUB9pMPeYFnTu7YdLoi2JaFta7SD8BPpZ9XTtg73dQDvi65DsVG2oD",
  "key25": "3fGonQgRGSgVCCzu1DYkFaqu7fi6FZe5uxhhFaAvYLJapF9kjbui5YjyQyKg7PkPii1kmrEzREujHSUksQorCZC8",
  "key26": "5e9T5E72NXrFyLYHAuTHnyFmv3CwSz6z9pVhq6giiYjNARsaywKCRE4FvrrcuSqJtvsf1djh5iTSbrtV4yxcBYNv",
  "key27": "47BsT7yMiyXy4m5CKJdfcVGo7pWFZaNj18124rwNb7ixpXdfcfJ1FPbjwTcpYN15vxFCxUUVnh1sKRrdUXGvpNfL",
  "key28": "5PeN7p3xSZihdmErh73YttD3rAZF6cCiQ5TCYbJzd7dhKY1EjdNxvjc1cL1irsV8wYqdnuxTK3FjJrA4tZ3krhaK",
  "key29": "3FxPGdwh3jwoAWVUEkRM7gNcM2nswFBPcam2jUoDjm5cNowyX94FPjNdL1wskb44RrRraUytCTujy6zGNuc2G8LN",
  "key30": "5aLjKi2NruC6ZG45RxY3dcN1wWb4ymRy2FyCTJoXMsmEJCYhcqekRGxisWHEEpZjPVgrgH1ehaEpvXa3vkaGMkE6"
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
