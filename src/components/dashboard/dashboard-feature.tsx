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
    "4rzeThusvEYAaWJAxb37TaxnqK1F3rScg4TxR3K28XJ3ZvWkTLY3bbxBExzXDqVaCTyKG5wjbjwReVHGH8XGPJtx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PpLkEQeeVAj8iMSzzVMFX6phHi1hWNcjcPxz27UjpB3UQk3trNJ2SS1daQ1cbXA64kSGztBnbv7s52ksEugwodP",
  "key1": "4CytZKPowhw1wHCTrudu3WoKYDLK3jedAmp9rXBtsuN4UL9xWMXEFguPxKBCddgaBASLbQk2t1qY2qKSw3MXQoFK",
  "key2": "527E3janviQ1UsR94Z1J3NRy9PMG29BRnHi4WngKJJB6HaC84ffkzQJikCWMSDiWtYt1H8w4DVJVXVY1iVbTdKNv",
  "key3": "3nwzhmdvz3RGhhFdMzDLyivdt7wTTXHsUf7LMpcdtRrkoAPNRgGYmExQ7CtRJEFFSfzdkuFk3TZQE2TyF3nUTcsX",
  "key4": "4Fdqw4MgjMx7BjF4sf1sooP846aszwPrwYX5s2yWd3Ah9X1weeot8rnfyNyjNcC29iqGo4R6xusyuBxMmr1e2HC",
  "key5": "2P97vTKxhYv4NZYoFkdqxFZKs6bg6hguJfwSSzpF2h1q9nMn5T6ZvckC2KsM8owibst7nzF4Ax5y7BhAZ9SAyYV5",
  "key6": "36rA76Lc98TwuHatevnziVJgR6E6HEnQXDwSuLe6oDG3ecgC8Qf3143a8mLFTkmJwLBY3QxCutvcAZRGdJoaJzHK",
  "key7": "2QereVaFppxxxkmRiW7rCWmbDtgoc8T21Dga1jC7aQVUeccHnUfSc5sBa78fkawREcdy2x3oVRg1yKXN4dAqdyML",
  "key8": "ZaTw1PzA5DTHddjcstcZYg8emofHHHhTVEKXw8GiU6co1wx4TfknkV2BNWywBCPpsyUh9DeWGhFcGgqW6ucq9LS",
  "key9": "3Y7hVRNKNWwMnaVJWfAiYEiy54UPSu7LZnLr6MtqxmDj7MGZjVc6RBK9RVS6A3FhisxayDfYwXwHtw7D8NSuVpDY",
  "key10": "3xHFTYxjiFNJPfVYtTHs4G2G2bmmc4FY5eo49ZB9vfmzxVb6anY9JULEPTpWFTjQSi7tK5qhJPBA7xTEZBi3vTLr",
  "key11": "2CiHuqAqcMALcBKYSp8sdQxvYCRCS1gSNfydKMrfCdrnNCbb9Nn6G8aeQjWv96GnURpESRayPZfUEUHYhspVRTAK",
  "key12": "3msKe4fhaBeEhwcdE8ntGUQhiQyWGvbpzGpznTpan2qjq31g3F4SGr54c1YvM3adiD1zSL1stPmgekCHpduvn1WF",
  "key13": "5izcYTSDVJVHJNwf93jmFooahXQJyGATMwTwBVitW9L64Bc2D8i87b4y2LLzrRdG6WubPkqhGWgy5G93r9kzfD4q",
  "key14": "4WWdZKmLvb5RfhNhgDyCcZ36JtU7AkF9KCksaZSYhAgoQ7RMuzHaTSPJ8CKMG4R7MVx145cRA9kUViz2bxXFma68",
  "key15": "3ar6zLG7AzRcyvFEqQ8kGwufNW25zrjJh1eZhUCCjU7iTvMEqbqXxfcrMQCFGErV8sJJr71QemjZpDFYBkxSwVow",
  "key16": "3AeLwecPZStQa9sokMfN1M4Xanfbv2ydHCLxUh52Xx5uEwo7qJz4Xqo3uqcAghQpxNKh73SGEuervwuL3cAszHs9",
  "key17": "5L2wXfNkA5bE7YKWJtAfkdct7HCK1xMWr1D5tAQCZrNQmjC2G7HgHaUEACHqfVSXYQyBxGFwNtTqFKGJLw6d8jkL",
  "key18": "3AN3C1h76TX4Zw8Eadi29YUxvnCfbyZWdA4kbDidYRu29LMsPENZbFJUKdFhMg2b9ce1S1Nz767cuFh1nLc8qjLj",
  "key19": "4ohovp8un6Jo4DNG822NGT7vLFuemWRMv4tRj7D1qZtFUqm9CMSjutjtPBaUUqvXmJEaHSe2dFtu7oVFTPWd8Ewf",
  "key20": "NoS9rfcniBDnuAn63vYZgYezNLGpWC5Lvb1PdRp84urwNTD5WtuSMQpwGBdkfTx7TJjuCEhzbJayVfZrn8QWM3R",
  "key21": "3sftVAjMy7d562fP8m7DyDFet6CpKzAMofbGGkUW9umGanwR8iC5bspQoDBP3CQmfRj9VP8zUtEwo47y6pXqgCQc",
  "key22": "gsJhF6VqpD4PfVMrHfQCoL2eCN3x1L4rcxywd2hRomVwsBSjrBa12eZWyDLix3EysCFUFWQ81JQRVJo2sdEpX3v",
  "key23": "4jne1dc11em6RaYQv44mqfuFvoJd5KkKu2iBRHUzZoNvN5nkriJMskUWVu1csiaX5PGNPzjE3YeNzBSfErtx88cM",
  "key24": "5QGwvrVdoUw3TXQQRsd97iTtUq61r9VkZc9ZhvDYpmNTyC2b69VUEL1EnnsnAQLZBqDz3TqMsTAb9P6oYdwMNMSJ",
  "key25": "5MBFB3M3Xmiq3c6Qnyk9kPjfTNKeRTnJkTrNWd67rubTZHgFzSyDAyXTNcnut36gMbaBBCAMYG7LYMBMVLXCPBtf",
  "key26": "2bJo7Ed64URJS5RMbakudJHTAKNoBEYPEPm6gH2nceWAARTyCRKvhUNxhs9iENxYgTNm4DycZSDjpR1ck4KnuSwn",
  "key27": "SvMVbXDa2GRzVpt7GKfRGJz7PhAQJARkuKbp7Zo6BYkfBAEYwyzJgsvkqCCL5hrwgmtnuaNyN9F81US7QsEcaiG",
  "key28": "2X3LiDiHuWwo865uwMxcayRiomXu6QEdW8UtGDQJdEeecqFjYdy6wP5kwqosbC7RUCiRf7exrfxafn6B6DkFHWXp",
  "key29": "4rb1KDrUbCns81xhDmTjRtgCpi8nR3rFCGwZvZ7x4diWapLoMqd4wRuXvGR46XfrknMyQJH5h5XnT8EoJMdtsSxN",
  "key30": "42uqueaeSRJVG8suNBXo2oKRaS4x8pRtzZDgWffBYsSpUQgKUq4UR67rW4UauGpkJxU8HjBoK9mVaKtuDsqiUgLq",
  "key31": "649YrKvyt824P2eUqkdA3fANH13WR1eLgA1g71g8yZSAtBUhdZTWwZWqyMjZGF8BXmgRcfuuFYnMcWmwcGTM9Mxc",
  "key32": "37mcYtiVmn2sYP15NdchEUcWHAWpR77BTC1qXLGN35ooZiFesAUnxUkbdMjkXzhWCtSJVuS4kfVZngq2DqpGBUEp",
  "key33": "YVM2eK8BspXdAUuDfPW9b8ezdyyQbNohKABW3RNDXVjsEoe3STFxQ3MnTFyZTAj4Dr3XrgZAdw9cJFkfo27xujg",
  "key34": "5ffGF2Sp4aytKT3AfN5c5j6dgLMH2C5qLitc7bL1u9TzyFtTrFbZrxw9LVMnoS7s6syVA8W2GcTCzX6qSZWCRuhV"
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
