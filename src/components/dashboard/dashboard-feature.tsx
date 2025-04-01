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
    "5gYPT1usx3gpw23occX8p3MBU6vNUhkDGb6GpR1gB2Ezi3P6Xis9no5GSRjosmJa7tDGXhzCubAUouqKZgWD8kib"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38GUgEFuMoemLcmcu5NUpRbRWoS1EnLBpJCVk71KbkpZXoSrB1nEUn4CNmW66h7SSrTy3M4qyeJQsFnDNG6baCvW",
  "key1": "3CcaDL8G4PZfikSJMCozLQqdeFp8hcM8eNKBXZyt1e7K9MoKBK9howNuQBcB11Z5oAd8Nd4FWLUHkizqASC5VfA4",
  "key2": "2n8rHYrNiMXf8t8A8CqZvQH9hv9vDEhzZFwPS84N1kXdwY64i5cSqmGAJxNzdXZoDuyeA2s5M8bXbDmnTZf91Tk7",
  "key3": "5NTE4ihnX4Xs3qKss7Qp3dZ6uPAwRZ8KMsMdXHed3wS2uyF7qufP5b8dxHmEtbUh6qgyCTt3z5mT1Kk9ip8Tqh8g",
  "key4": "29XQgpP3U6A3WHK94oy9bavJYaTc9vdZf931qZqJUxL9pMPDW49mcvMwpHdSe3m5CY8DGjfjPB9WKAfRS6tuBYVh",
  "key5": "2KG3w8NA71GEHT4pNLtik8vh1gPD3kWpyqUfzovRRAzpFzBT1MTGFuqq6D2148YTrueU7bdNCKsusfgQUAEeXSru",
  "key6": "4TwRzg5cJ8FD4pY1pA78QWJD97T2aiPw21fp96n2vaUxeBvJjUAdDmadGanRCdzCxPCgcEPhEsvahXBcG8kczT7L",
  "key7": "5XGtNhKkggYUgLQtVVmyuuHPwaQ21FDBab5zzHZYnyLPwwAh437LntPMhULjv6wVvjsLHSFgHBhzJK9c9useQSYb",
  "key8": "5uNBVppjFNfm4NKFB9jGBTYAdYt8LW1gwPNQDQYvfVPUt6phqZzn1FtaccoK4omH8NkbQ4tJExb38LdscQqxRKq3",
  "key9": "3AwA9NQyPW28nLKmp5FVX7om89Cn8jfVx8NxyrApU9BGnWHfBwsK2kfW76SqWYVi6N6ah685vR9z755W8iQvcHb6",
  "key10": "2H7ducpqVcD1KswZ59BD3Mw54KFvn9KjPThGQCidb5sNErPhdfC4htC6jsUgYqNZ6Wkjj7qz7CBKRJ1mWZcLo9D2",
  "key11": "5iK6Du6yLEC7iPtDjtAY6SMBChpqBA5F6zWDK3YyiAB4RmdE63dbtSoEjn3Dh4yEGA7jTkoMy4VwDUkEWmuyiM7k",
  "key12": "5YKJ46g5DuLWjdhjaStX3t88VJJRAyyiG4i3P2dmYojaeJGLLJpSS7j6tATdJC3LEKSvv8vmaGgoeGyu8fpYyjN6",
  "key13": "5wVjp4LAx92CnXDUY58pZh4m4RKJLnzgwXDTSajCp5BeXzJd54drcwFsWtzKRQGVN4RYkTKJfmaXt3fjWqzquXxm",
  "key14": "3sBYGbd8TSupzUwL3T84reFLsWHqfEmCDZi6SyfetojG1stGKtK6jLD1qWwDK5Nj99pWrGSDF17QtYqAdNfkYAsF",
  "key15": "5qFMTciHgDNN8d6hkf31o6Fe4KjMyjsTPEEJCLYvCxJCA6mRMxq7FTtyXPVCgdoSwxXgUrnMraajMjqHUeTRwt64",
  "key16": "S16C1NL89vtPWhcm9dVqtmhKthRf6qvFBbp9sBsr5eMQvxr1ajCbJ8BG9cxUHzASL7xwnvtiJe9DziUB4KkMf8m",
  "key17": "3ZHvBrizLsBhDsQCjpLVGEgUirF6KxaKbsVC7c4Xtz3xQppcRaPG5k6c8hPjfHabByb7sPu1KqJHUzCdoh62BV8o",
  "key18": "U68rfySDVYACgaDRbnpZGQhoCLZMsGxNXH6ErByBM14pejNuJytgbuwhqcAs19uSyY5CSESYKVDnGRonxb9BtDC",
  "key19": "2ij95B8eshhP24FsPrEh9qyq86jWRX92cJBzr57d4D5dMwruwXTVrFRq6i4JC7vQRUvyuPX9NfFEW54CyhkB5yJF",
  "key20": "4R1tHfkmdKQ219wUdjSB213RiuZ55v5ubV7wMUu2aT1kub33JaHFCLtgNiSeqHBFdMjw9JppnjhemWtz67fbi4C2",
  "key21": "4zRfWPYh6jqoUwEJ6zu3MTqsVk5hEcVsqW9ZXdn6JskFq3uQ2ZMkRfGjuhA9Xt3nHpUnjNxfrXws1DYbk8gjHtT1",
  "key22": "4nhm7JsVM2sPhXxivYqcp8jLXE9BXzevFFceCBsCVDvteonKvZFaEuFrfd9GXivdPFg3aP4rwGyi81KJDL2fy6SJ",
  "key23": "5n6DLAjwocQayZYhFZnWAc54kfE5c48kPKSWm6D64ut2RmHzCygi1nZ3dcb68gapJMGkpRJ47p2NAn8PLNwLDy6S",
  "key24": "5SVxkY1LpTqfjcfTBZUHCuqJyVuPJyW8vgzWr5B3SYZu7xCanrinAsTdZnoRm3GuVnJKa7yDstUUoTdwsC76weye",
  "key25": "4qFH7sf35Wt388SyC7vdXsg6qB61nVLNDosm3R27nqhRHRDQX8nVjHRmLkcDoc5bHCg3jnGPzEGxd7YShNW64ey7"
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
