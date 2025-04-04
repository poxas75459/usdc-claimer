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
    "4kNQByrpZuceigZxB5bLwsANkq5Vd94FnNcdrxJgD1y8UvAGZFX4cxPSsPtrfwrJHPLRZmSdTZVH8qocLJEGHdtw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oByv6q86aEQFsgKcvZPWuYKXbabtJdC8nqjXiW6tvRWiwvca9Zsm1hZvtnbdntHTRYn6q6E57Gsuf8mnN6x8rXr",
  "key1": "4NwEgQZBHPAbBH4xc4zGUxSC9vCFimkddPQ855pWhFWbqzupRXffK36UYhCuN3hzeReejJ4fT23hyiPYdow6dnUC",
  "key2": "3H3PzvZhgF5Fpbehv6WayeBNFuJjYdtVnnaJ6xpUwZshJqvRr91XGFdrV2LxJZ7nbc5GoNLTsfLozP4zBAD8FrGe",
  "key3": "27tXXVwYZ3r71c2K2zNra9mNYqSbv6qYt3NRGpnKY8LK57aLKtQAZ5b5zDPbCqHM6gEJmnoqwF63pyTtjGayNHBp",
  "key4": "2dVrfzY95SX4GhrbjurUxZERuw9cT2MEidS775zKZtB47Ms4R7SzJTUwE5EkxdSeLsowJgnREJjNwoLugAee27tn",
  "key5": "9SNomvfykJiD5BJ2tYbgTVC64aVqXhpSRU52nwZE1RV6EjVK6k39n4792VCty3YkxFqkVugRgsmH7cpQdKiJnRb",
  "key6": "2M6aAjJ497abuDeCGBWsT6UAo3zbo2wBpxCtrs4tnw82RgHZR4gpcgJrvV1gyq8riNZC9LTKg9M7QaQwR2amzjni",
  "key7": "2CTn9fXsx9yR7Y5vqLeGYTBo7Y9So25JM2VeMYt297n1GuEAGGT28Tk9h1UgkE55153ubh1bopGjYgXWi3EUCHCt",
  "key8": "4sC8DCT99mqehVLupFWpqRDFfhg6a439PoB2NbMKxJrkT23KBNbekySiwRGTp5yjdeS9FBmLuHqDkX7hGymhYBnC",
  "key9": "3TKweSotkWEjCTwZ42F8r6h5uzrJQ4K9yjvgV3VtUzFUVAZ5dfPgM3NmDMiTjWzkNgHe3oSTVsjKRv7iudD6pnQh",
  "key10": "4MSUd7KMwk1fYRQnvNgGfT2p3oG4cVfSbuie53ZJryXcPQCkD9gAbRLkQdHstRaekRtTsxb649FCRWmzDEKpcroz",
  "key11": "64SiWoBaqoUJ8xukiEqAh5pSCXp37q2nVnDdwPKF9LJhbW5SzazGhXSt5pP2PqcR5dPze7ZiqtyKKWurxtBuRzAw",
  "key12": "3xytfQ5fsNHaBNLggMWkB5Ji8scZm55PEXHX2avnJHKPPNf5QmuWuVKjUPsedgqZLjmddjURu2pnALcBzoUxhPjA",
  "key13": "2uuvTknQY5rwpGMhYXNcHBXfieg3JUqorHSJ8gZB1xPhpqtjudiHXPALrhDwC1Xdw4n4m2XUBZ53nRTpTahW6dEj",
  "key14": "G2tLCQQmxb1MiVj3m9wyxC4EoKN1AAaNtz5rGQ6Ain3UQ7ZsUEygCrgsLNXfc1x2yqHuKbBQ9ruyH2TyDC9rcaG",
  "key15": "4qrUhY1wjDahCoZ77a62uxYwS9XsLwQT9UzEZUoagvUzwbMhYEaj5TjBoXYwcvt6JterKWys4ZRdd57MgXa3xVhS",
  "key16": "DUieyuXfroGrLCbYKhpm9Mog33BoHf1m5P7VaWsmtVZtfodftnz92spfh3qPvPxpFbFRehjqUiZad7VFj4qcdFy",
  "key17": "3zH4aNT4pMbxF8oqhKx26i1RKWmYb4auiLQPFkSW8EoFB4tA4ymsDUSEUkx4dHJBfq3mrLoNQydp7KqEhmBakK9p",
  "key18": "4NLWC1UCyytmid4LonZddtJdUBe2u6XcBnsheC8S3AdpNXU6gmQU9yD6FnbdH1Lfa75zHyvwGwemdjssU32wfQ79",
  "key19": "3aR6yrr7LEZzmKPLxjkD5ffRFgZNq8YLWUiN765SjfogLyDhyLh8cSMhBcYTD9nfVQYuv8rdnpvA8B7dXfSGpFRf",
  "key20": "42EKNPpMcJzg4PJkxQk3d4aCVf2Ha7bmHTwV9sfyqpr4rdSUK9Y6yBoFXgikKq7bhLYEZGpD7KTQQ2shFL6ALrpW",
  "key21": "3rU5VRxMjCKKu2UYbMwvQcdxw1jLaUnCndroyCG3XDSNE8gMRwbpPyHgRGqHaiL453nuwDHL4hocpZmW97GbXVu7",
  "key22": "3LYQ4Yd3YsAkMnjn9cMUdVtanXp82UHtB3VexL61i554UVSHg3zPz81XLD7ZFbe1fWw1ZJiCgLUDp6HFkPXxCizz",
  "key23": "YhP2PNgF6vBPbMqecS4KhZyRQCx46thgYygtGSP97yp1Pv8Za6Z5UoiMRdobT3AFd9HVXr3ASr4mzhhnfjD6ygY",
  "key24": "amFg9KBWyEHpxSJne2nTbqoBCGPaxNqFthzFiXw3sHQkJGaFGZAX7NZVuAyACuGFCbSj6CFMufCsRTYeQ7Wvi7v",
  "key25": "4CrX5t2VqMwJHfJmae5XiWRrh2pQviWuHLKsjsRwvyLwKd5ph9W1k8VhqE9GQ4q3u6rskk9QRWCkag4eA69Unx7M",
  "key26": "2rddk99XEJP9cj5DNQBDeHdy1zKMt5fUameumR6TuJhKNZwmCCWkHxvzH3ka3BMEjoWsEcSD7MCLcT9C2ZdgHSCW",
  "key27": "25uWrAoKaHAvRZ7EJEPvPRcBoGpcik2ukxQksoa3eeEe5QxV7j7UyN29tZP3Voxp9noqDPTG4ueG3jKbzfzzLr3k",
  "key28": "3kLSpwySjqZnCnhCNwY1oHE9xLsxYdGP6vFv2WxBKd8CXbxUWrDK5QT5c1NoEB5DHx6DEh5rok9E9oSVQaY7FdHX",
  "key29": "4TD4hRwsLni6Xt8rxFwgiHZg6YA9nCyFhpXN5MZL1fGhEQ62ofHjA91YyUQ9PqUWo37WYr1xN7dwei5npq5z2eZT",
  "key30": "3PsNjd3ZNFexeJpPfTJbNoBwYDhupi7XpyGrVLziZT5Q8qCz5fp5r3h3f13cfeH7fdNwXx2jZiZpK5bXJwPoByDF",
  "key31": "2jLSWW57R5wVWgtuPZcbRQBWoUi8PyjqQi69NjADaw7HygSgpkAazM7C3dKSmqwDr2CdDAGe6aXsFZEaJow822nw",
  "key32": "5NEjjVrZd9Jc9BZswmkX61zMVCFNhKR6fNtdKqdsy5sToB4yYRwQL7iUUtDXzQsqfSpTY9ZiHw59BzK1mUH9qUmH",
  "key33": "jgPFwUig5f2Kzq6bHAJhEBsMTY16769bD3FmVCALEJovuMpX3trsQSN1iMhWniyvVwxsbw6kkuBo51SCsdYxvDF",
  "key34": "4KNNWnTkd63wVBBi7hXnEGNtzQUAsT5M9QtDmZqNVNnesaA4DvKHMFosWedscyELaHt6zTMF3U3MJRxXTE9vNHmm"
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
