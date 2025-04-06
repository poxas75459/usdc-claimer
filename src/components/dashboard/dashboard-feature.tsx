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
    "3ymscvTRwgB4NtvkWvCePq5ncbBioGXkyuCbKrLk3xvgNDF8zpH6v5qrztuVv5cGJmbcEZZMJyqeq6w3Emowjkmx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sjUZMsHjPcsWBf3xoSoRk6dC2TqWiR5DeDkk32GqJ9Xmon2GcetWQrSD2YFJXq47N7k9YUvNRV31CHwSms8RH5f",
  "key1": "4H9FdDgB3NUyXnxJJXpSFnmymuB6BbmcqKyDW4bYKviBQbHKy4eNz3aJSasQmmn47N87dk86bPf3SxcHZ8qbzrve",
  "key2": "3bJr1XDGC4d3shW6hWAxwyXY2pPbto54eQZ35Fw9jP8J5MWLcnScKhBAM1PuAeGwXaUiWAB569xMxLc39bmM3sdA",
  "key3": "28EeVLP4C53yBaDvF9XUHZLC8LyMeWrdb6PW7BURo6PfQThvSVjtxP1hLRQjc8gN6NrLAP4RrLmc4maTy2eYx5Jh",
  "key4": "5xZpustHBS9DgDLebbwgbRNTCdQ6JrVn9G7qNFyrVymWK61D9AXXmaRTYHwSHM5fpnwLqN3XwRiNkAN8YVJH6PRG",
  "key5": "3dwhMRFApJSNPrb51kBPHsqNKb2pFGsEFYFaoeuu8DuKCjWi6nQJpSJGxqwMRP2hM4pkRXiZEPm4MUujBDaKCwjw",
  "key6": "36Cb7KHwuGw6KxhbkaTzM4FKtq5MiUqRhx5g3EY24wRT9BgKwiixGMiWy6vtKfsRDEZt87CTqBF7trDHrPY1ro8w",
  "key7": "4rXGjd9rqQmUx8RwRzZ2S8bckQSiutA9s7y3Wr786nKLKTtFgNEEWfBWYJjxRXrrUZudtdYMg9bKfGe7av6Ubtaf",
  "key8": "4T51jixwS1npeJpPv7sXc3oHRmB9zwXXywkkiVRzZtsZnJa8FunNK4XqTCtGJmjsbUyM5EFLwtp2GGimeQZYQZ7j",
  "key9": "5MmBrvfmCEafgauAEDjJENY79yuXZRVmjad7JHbeZSYVZz4CQussgj9FwP294s1te3VV23g6xdfZ1X9i3E1iGtui",
  "key10": "3qCmpRxvGA1tT46krgs1WexGYPLCaKYX44FR7eKFgVTkiAdacBwS33Ja68fYe32D8hZQ3umHKwcWwRenJ7Zc6BSf",
  "key11": "5cpTJuWNUa3dKR8RZ37XEJVzEQZKWuJAtsQpPnUKzhxYMm1Jf4BLf1qasctMPpcg9Vh5Y7NPeH9uPuLe8tB2qccW",
  "key12": "5xUJUEphALUTtd46aPuiuh47uceUqpFVYSgaFGPUjcy5dy6EY1swh2C9gb9777XS6oXSCXvjTKin5Uk8uZeVmcdb",
  "key13": "5chB2wmzxXJtzmXkxngfgyHMUsdeSKMs7AG67nf56MymuDhF84aZHALzksJeQm2uuTxZFgLuUjQma92HaPxY4q1R",
  "key14": "NNMF484VLPLUyM7xGnWPzwMtXoDA7yLNrHporPvqmuvA4AbTEq2teN4pCs7p38wcX1srKHpD4dJdqhjAJxURiWo",
  "key15": "2j6vp2QDNdAsFiedGAbLxQfXBduxkaxrnYhhGf4Trc11YUogZP5hzvU6S9GB1KrwbjiiNixbxWyv4ypeFxgDfehp",
  "key16": "2ZUUzZFahgYfXtz5cQ5YMfZiMBS2oMz3sL1wfH7FuMVNQoYKSuVEHkvAhQZMQUgGrYAo8mDvqRDZCzgQ3uRgW2ZK",
  "key17": "3xEAwtfm8xPL6xzt3MaEa8w4fJRJ5HzM5RzxxWWBVJvUffpoCwEtUPEx3r2RK26ymbsi68vmfq5KewhiGpv52D2X",
  "key18": "2Mrn4nDH1jmbeeqHV9qR2SsVdzH7f5bqc3R2FJuryKXgMREmHR2wVqVhPSyPZ4qK6GhHFdCeaDnxAKejf51hrVY2",
  "key19": "KJJLtbUn6bU1xTj7RWWENmq2zaErVGS8stTdatAf7ZwGPEq9nYKB6vSfZ2J76UUKzZs1mr8rfKbMydjEAdT3HJG",
  "key20": "5CdKb6jWbUHexP9kb1asHtU81rQAt2ZSwWBmAQAF3zkNZzoxJ2L5gU4rVdsqGHeu3MjM6NBpKnkWmLWW8Ry1xnyJ",
  "key21": "5n6cT2vfDKueCQwUXP265RhRxhTLZumtvEUNqj81j2ZnxSAVTaEHMWWEeKXw1YhgNygKzmSLzBZ7qbbFUPJGE4Ea",
  "key22": "4YSBJnVqpdhm9Cf7dxSQY5vfxiSKBUrPPj8ADPMgdrksQ6JPcypAy8ZoP9mCWUHyZLEFjgQfxPMqjQfQnnt7eio8",
  "key23": "3JVvQcvc4uWPZsfix1tTB5HvioMRuELWsQ7Rd2eXZv5cn5v1KhV2ACYGpzU1iVoBakK2NQTEoGzE9CYsGW6r8aHX",
  "key24": "3mey6wsnyx6Vn7Gm2D1TD88ea24pV2YCMQAMyYecRkZyc72fDorTJni23YAwL6vbHDnBjKNdR7Ry488mj2HHWu5A",
  "key25": "2NrF73z9kYvc3BvNXTTWJu8BKKf2azDdXfJtwuhMuPGcciT3DSZcoU6zxdSms8hPfHRPKPMu3cT2TmoDT4uDuUgU",
  "key26": "rV12xdxtAxzQwzAKXzdrxzyep2zrixoWP85gibBVZfwXVUEJ2gbLaJJcVFQPzZUZY8rDt21s9LDVSQmP6XGeG3w",
  "key27": "5TdqFew1P7kozYctL1qbr3wCfdGm6tc2N5sbWq56AQWRF9bAotkL9KUdNMf9MbshVmNgME4fUhDCinzpsmKwdoTG",
  "key28": "3tD8Au1S5DJGTFbC2j1ww9Hzv5otx8qncB6sQ2NzE5gcsdNJ1MNFWxWXrrAuhwtA3kZYELNwnrVqZWVXv3zbWPhz",
  "key29": "4DsMvDV9gMUWnSkALqAyKWJfQHq6iBMwh3wXfjU4nUJ1o4PerUL88AVZtszb95GNC4qNRLqDzjNa9Ezsj79q4AS6",
  "key30": "2e7XabueoS3Uk7uGfr74JVqWDXx7Uoy91HYejNMsHPxu8bkkd9Ei538VkUDFhPzmfoum3bHwSLdAjnMNEXR2Ptk6",
  "key31": "2xcpj4rwyJQkyoCapgs97EqcbP5Ky1fW1C1jYiBiWx493XQeRTJFBqWZUBWd2rannhZVbfLNJ9WfvCdsp5HUrLQ7",
  "key32": "2CDHHP1daJWr9VwSN7CVszg2DzQBSsApiEbwrvMETSfA1LMY5DgMGqwVaGUzTQxQy9D76Y4zXA6HkWC6VK2L6sVE",
  "key33": "Yfkd6pjauG8aB2ExkjFp41TLPLHbd6JcREeGGkXRAQ3ZWQZu4yhpDEPMVjHVZa79ATzAmmuhq42HY81WkrjZPjW",
  "key34": "5mzmADkkbF8pQfp7ibBGparbP5a7r9hKq4zkEMruPedQwdieFENYBNUNfwTcpyV3P9TiLJcDpnr5rPrj48VjCPyM",
  "key35": "4cw1nMKKrzVuvYZqSqsDHfcNKMp8PKBu46Gkc4FP2vRTu3TJUFESwhhzn1kHQd2ziQdQjnFtQPSGC3jFGG4v4XHM",
  "key36": "2gdBkDWeHjA5mCGWTBzjDKvdXzPYs4pdfrMgtJA19s8TkNgWi6dmZvwKBR73xUJmi9SJprAvGWtHZF7nDKqZY4eN",
  "key37": "5imvwAgyW4gzUugdQCmDYYxymjc24PHqt2krDPvy97Bw3beDbCaMxrPXGG1gGbp4eVkRuJRJk2mTcaBAVrsH4jAA",
  "key38": "5TRHnMGYjvDEhMfVQPhPZj7KwfHRWvygHSrZnmL81dR9NgugpR8HfHH7xjKpFRrTAYjZhwiN3ATMW7mCVPGLNamJ",
  "key39": "2TL6UgMAzM2FDXxjH62LGPoX4njwoRpZQWrXQX1xius95W7xBL9XFuq1i96xrQb4M8e5gQu6g5L2jg3Sku7UXwZg",
  "key40": "6CZTFBkn4ess14DNWHjGhcF3rNuXS3MEM3UQ4hZyEmjs5WzHf69M5NNqFq29EBc2ctGwMhsnHeNQp8WjuSZovDy",
  "key41": "2Sp1JhyoVTxwmJjbGXoPq6V35vXRuWzjsT7MA3eSnJy5mxFp6hnpWJiRgGBZHajBAU5QVxWmgXzH4FN5SoZuPXr4",
  "key42": "5JUrZzGsPEX6igFbcPXyVhvYoSsa84ooeD1gTN231vemQRw62yiQZU24vLikyab73REoyJiN7awR8uaKHRoTDhTb",
  "key43": "374yfZFPVmEeNoDhNJ41kkd1Pr7x89ZU1Uf5qmnLP5W1xVwrjPRDUCWPiV1VQBPX9LZt4f7z1jgjCjTQSznzVZJn",
  "key44": "5SU7xnRPs7hx6YetgBNTibidBopj37df6rKXXVaSjQeYxm9hRKtENFjmEpQf4sqy6qaHyqB7pXM3F2taGCBeM26H",
  "key45": "64sjnoYpZYVJZYy6sCsVx9YK9F7JUf832v4TEt4hY1UbxrWu4yY1umVwbJHE3PADVGprum7mv6xv8Ayd6MfPgSAZ",
  "key46": "4oyAER2R4eqGJrd4QavLVsNU2hbawWYXiUkZht5PJKiC858wEkpwxJVn9JAqPPsk4qRvhheZHmmavvaFUr4VswMm",
  "key47": "4AF7pUFHYpzHSV7HdbvmLemKLoiB14xhATHFoX7bwSyVVxcRayWvmbW9EMnxDEUXU398pHXtLvkecjRzN6uLnTd2"
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
