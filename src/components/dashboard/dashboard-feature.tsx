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
    "5VvwBAooBjCPTis8dLB1ZnyPb6XT5RBEyBZPBxSXoYHM3mYS8r7jV2Xh6EobVuwV1DirrKXiFQmExR778YBMk1TF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q3yTRyNEnSxoE4Ryu1kWv6zkSvuzbd86E7xQHG17VYLmHJB9eyQ3xxHKVhoJ4jfeuAdF3NCWRtjLSmGKMCK8EyY",
  "key1": "4HHrJuijnPqZTw23pma61THACBE4rpNxAD3USipWcFTb3XD6NT4AZ3QXoELQQ7jTTAJm8UgXdWkpmSRzZY3FXSSt",
  "key2": "4rypH8BpH699u7Ki3oyKWbBEgBN7DmKZVNXVuGfw9SpMWSyD2MEWePsS8798paUMTNbms8d3y8GF1wJspqMLH7KG",
  "key3": "XExzPN2LYe2Jtbo7V8yjTUp7CuAFebYPSACGf2stZJmANp7LLqCVPAscMgPyGoANiQGkrGxdLnvU6vYQgLRFUeX",
  "key4": "5X4jUZ2ZRSCTAek9TU97pfwcYPXYdfpBskCMRTLzoY8t5MauaQtoNPxm89uDiXo8PxVdvX3Ha4mLYaGq61GFhS8R",
  "key5": "5ms1igtUvq2UJ2yu8GpV2VxisE68Hd4SXKLH1Qcc7xpP5mLUeRv9aV8PJ1eDiPzc7xS6bT8B4YYveA7hcKjmqKZs",
  "key6": "2bNSYHdUSJcGJEpEKu5B6zMwXneQrsD4xf5mW9TWzRLZqEPMtjUFSUPUGWmd6DMf6tQEVf7pimQVuGmCEzjPu2Yn",
  "key7": "2BM81osigtLS5xFtpnPKVHNe6E5RJsn88AE68TvTKzeHyHcZhPmD9xKgjYr6jp4FAbCsU49g1i4NVovz62DR11fH",
  "key8": "2f7mkfS5ReYSk3E5XYb9f434WLzXbTE3nbqNhLTQAo6MiMrBzFat5AetkfEpRUnRvXJtPaJsQ5w4Lpeckfdsw7ZR",
  "key9": "3d3NHm4eCyvfS9qRSEYhegTpWB54QF6e8kc4KeUNQNEMBGhbmY6cYizvJnhHd3XUzSpqm7sCW7i8PmhPar33jPZs",
  "key10": "4vWGNBXuGnpWyDtL5Rx9WuTkSV66ZegHSQHAL9btZtYsf5VNwoVJ7tEzwxRuxJoA7hHdM3gtxsKsTy7FsDN5Fdf6",
  "key11": "C3uUguxgycMo832dUFryAYysyyaFqHswqrULzsUYn8yKwZ2yPDS8zHywk2FRyup81mAzCxAifE6U5MC8KKLsstv",
  "key12": "5tTTSuQfDwBBWfHoeoA3ddrQKCLQBAxpS3w79SvkSu9e11k45upBiuh2L3fLHM9CLs4HMejKyPq5prNp6JkQMFLo",
  "key13": "33JWr44oD84rXNMXnBmsAHy7g5g2GQGqT7ZZGcD59Kxs5651qxUUnofeSpA9m1his21hSLysUn8eJkdhHNVDqdwQ",
  "key14": "52Q3Q863oKdKK9SkKpxsHzjCvPWubuUUvczpcL58XPTF91FHVwodXGFuEKDHLk3Gnaoo5QbjTa36rLmGkyrygx4j",
  "key15": "2opNDi7oF92cAYCQ47VyKZgK7vVHm8DsTmacAdUkWumK3aiiCN8CoZytqfucYtbjdCBcxZ58G1s2m7FS9gzBxj9K",
  "key16": "cZD6PUFut6KhebyGUk3MjHEm364HmMuC9SaminjBnnqRfv4qBwhCYUc79ims1L45yg24uVJ5LSfdaiPHnA9VWMG",
  "key17": "23CYGzm1KsLmDVR72skJBTEXox7CF1AhAHnQknLy8L633p4tSfzZq5vPAdNJE7is4McZpCMnEBCcSvgzVVhd3ax3",
  "key18": "3fTZnXvpDZ9RJN59FP4VCZ3VJY7y9sgMmwRk2pCrS85H6ifaEqRynwiEp6i9ogp5Q9U4hQTLKCpcgva7gVehiRuZ",
  "key19": "3makYtRMnupH3XAFkKAms3bt89xGKNMEq2dBroytjZHzAFeyTZUoguQrntfN1k6GudCsQEsTGEdn3cWQeHscXVeH",
  "key20": "3R9JkJHDzaRVyUouaMoRkXBEeNczNhNoTvQp7EZvtMpowKYAvwtYR7NkpkThDLMuxK7S8JSSTXeoSXufYFsGTCJw",
  "key21": "3szmM4PJJFtT2YKy45a7mLXr5iViJp3Cig5LTCr8jWVpKgWVGZCgtspc49xXwf8rPhv9CpkjjWZrtA4HKayQznpk",
  "key22": "5UhCzxPWv9rjq78eqFki4nsq4vpTGXFMwV6ZToh1gML1EEgT4N254DAD1fRh3ivPZwHxRpPB7UdXBMuWyVYeZzWy",
  "key23": "5PWE8mZfxPuMWBZW4vfNTu3U7dmXsPGwoUY9Gmj3f43Hwn5f3Gaks3DCkZQWwjoQ9s2KQFBFNAgoxqyTH41nwhiw",
  "key24": "3ptds4U4ZxfnTNWt3jQu5qxmH6uRBNVuK65mALouBRBjQh94VdSCcJ7pqDSA6NjyiepAyzvCerzCLp4jawTizE4N",
  "key25": "2K78JzmVjv8ZskZ2jyJAobzCHPubFtR48j14ScUmqC7nTFFb5QmeF6ahVbj6LUXcJGfY95525pUr7fUbXSkgvG7j",
  "key26": "pErfvxkJY5vVNvwa3mRmifuDecBEUfLrLfB6uGmWWT6swWccvFK2N8pc7Qd41bKX5Mnj7X1PDyWwyf3cA56Kyim",
  "key27": "kaAyWgyUqxx7bMZZoS74d9GfA2PvjqD8QhBBbeMbZPDhn24Cna4wx9VJjDZyJAKKKyT2UCzKp5zT9HXnea3qdiq",
  "key28": "4vKbUXUWJ85Nytkoibs6pfNDM4qA6cjWy7bT2eKvHXKvmDU97YBq6runiD93AULKPN3PdFEQwiwjWM6kj7D2oDS8",
  "key29": "ZaHNEJbYqasT2ijZdhrNTPyC7zBiePsodmYX1QdLbcwrLnrJ4neiiSR6qdX9q7dJyzaBWvvpSxcF4NYnC7YL4mm",
  "key30": "66uFNuZFeGFFTuj4bGdquGLWKHC6JQA7YchYdFrEtN9s2GEagABkd2XWZxrcox5rQtZMDRSiXD7Q7DbnR2uiS2oC",
  "key31": "53oDGD7rPksAVN7n2TevVDNQRqQ6osLkGqeF2rZD1SyYWs9VLk5ZiotYsvGfjvFxZ7SvZQ9mrduCP5c3JTTMiNu2",
  "key32": "5tpyPYhEsE7qWsgfiELjsAXpe8h3jStMY9nK9XakfbXE5oE3NnMT4yuPYJ6uU2zE39xW1w7htRDvP65MSZfDJPEG",
  "key33": "4NAPvY2zKPWdJGJ5dEhdCJLMfQffRRDGUSGXTey5byoHxweTqg7GPg4sv8S848rUH5xVNWdjArTyipm2Wa5zUxJ9",
  "key34": "42RAheDTHFNwEHDWui5FrDi7SfpukEjJ3YbLSdug5LhgiXyESAM1dYGdwWzpYVADin6XvkdXrPy3mnuvYVpCto4L",
  "key35": "DD7b7GjQiqxx3udsQzL2nhwbSvbapH2j43eJ7jdKgW5xKXFkYQLRo5MQVJVzubYtwWPHWipEpfH7b1peg3CAeVw",
  "key36": "52Mc2i4bhceYHzVGu8spA3YBFgnUWDAUxD5qnZ4GHpF8GVjEWBUpLJuE1JJu42AzvzKefg8FMvUorvZKtUnpsu3T",
  "key37": "5PzRx9PWwuPqf1jQ619vCJhxHAaAngBHmEYg6hVraFhFG22ogeLEf6H6eNHuUCMRWHgCtqUjhkEdQNxPjR5uLKNc",
  "key38": "546mPYm13exCHKowSuktW96MBiNVydffmh4dpEhdS8kyVPCbNuZQ7Ck6Z4QukjoYhUQA31J2jPEuxChfUHKxhueo",
  "key39": "f4iVERLPkVWr3PV7HEjxLbkB3K5gXvuiuZXnDMjn5NEZPNTy9stMneBTqcEoN6Y7nnY5ipqh1DSPYZxyWA7aNAr",
  "key40": "3GQSdW3uurw4PzLBK5Ui6Eu1c6bt2Eu4AkNEjJhsANYXEQS374pEWFssMVHcsghTghUyyCUfVmzDzrBfWiSSjWYW",
  "key41": "4giQ56MXETP44UHP5yWMih1GhoapYnnYHt7kBk4xgmmznPtSB8xinpaaPFXCQ6gjPpjLWXxDfJb8A6q9ruU5UXP5",
  "key42": "4X55qMVSe9wxe2ajretXP8sLYLCGoWeXNH9iRovepxroAS77sy5dKytJgreMZ5Lw3N6ahAvKrgmae1vd76okSEsF",
  "key43": "2DDdqiCBV4u3gQGXzM9Pvpqb7426HZvKJNbZvA5AjCgcrzembrgeWz86pEYM5tEYegZHwjKmx2QxkmQtZPxnAZta"
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
