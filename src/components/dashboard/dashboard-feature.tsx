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
    "57Qn22udUgzCHNMXGeTvpCR6TLEzX2X7DUtB3vnVVAYDq67nzHg4iSWQoH6qQVK8SahxFCycG3DkSbJjuPYQQVvd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65WVeUodfo2oWZ5zUz68iyNkpcPBGSyidFbaYwuAB33V6BNZQLLRVmLAqSu15KGuxGe5KL6SW1ZUAqpWSgL4T5nY",
  "key1": "3PHHVBTwkFKXBChwLXG5M1ALWzvFA6H9byKkTwdkjiMGw5HdydiucLUw5dPFDojy5qKz85QKSdCmaazwJesnzZCy",
  "key2": "3Nbjr3YDR88iVrJ1MYD8pGJuT5y3UPmTSaCuGjMQs6BVz4LNWTaR69v8NFtasC978KFYXPRQJKodKaYkX5hvUSDr",
  "key3": "3NGCQwNgsti2nRdQxmURvSZGF7v1hrbQakkrgBodwbZPjGujufVBTzwL4ZtUYpqJEe3tzdssgpmwegpn5edvEKc8",
  "key4": "4tg9wuyq4v6hnbsbcXAogydE4UbfTotL7irhxNqevXiNxR5ZdKibJxEZ97GDqPBkxxDnc8Jw9rjdEckhM2qaz5k4",
  "key5": "3HRpZ1Ln31VSf4fy4JPToa7jMJs3pXZzc4jN8KvHRyVsiF9kqQk3XQLPaR1tijpDSGnwW56uWktozroYUAFHienS",
  "key6": "5NBiQ72zgmVR4LTpZ5buXP9nq1csVHYypd9Bw5a8wyh7FMiAA2zZiCMFid8NdN5wJRssEskyWB5T4bqQEaMMew6b",
  "key7": "5BEAW2fLUG2sQeo36ArWKbsLmg2GZrikKw7sbcwYhpRLz9struhAwCXsxmM2QRueeX4oEeoU8VXDnAarcbHwSpgi",
  "key8": "4AafPaThLvFTW9zqg7yaNG1fjjUwua1yJ6VXvCitVHJXT3Q7T7hvgBhVVhmYiFaFHzL5afsimeGNSMoRG43hJfuc",
  "key9": "3bTJnp9rRFiGw6uV6zwNJuDSdBmPRATT6eWfb9Httz2sDRpMJLLBn8uP9RmNf1vfmZGKyr5DYXv8UkiCM3dAM6jT",
  "key10": "977iRiYmcgGckATWeoSMzMU2NQ3KBuu7ubpzpB5ngKmjykqeh2UmBPANJkcPssTM44tNzueamZ8eCvU4jYGcquM",
  "key11": "3Zepkcbysgk5zzrcgAkRuPnzbo9tny68j6p5YvaDA8RNSTaLoo1WeqK9Zt79nfcGGZ8agJxUDA7E6jHGkRL2P8Y3",
  "key12": "5kUANUEZk5YKLYeAectuKkBxgfmFPpqNKPyuhRFE3Rrw4hd7RPfpT5fTU1uLZpiGMJdeQPz9x8yYGuUh2UZ2BEDw",
  "key13": "4uH8U98Aq3FYegdd6jEYNp84FJ4U1XFv28TAM5TueJiWUmo2Yuxswgfnwp7PtFAdod4YhZND4w1x5PpjWunF8iVV",
  "key14": "55SVUYgXhqXSkwTbpGShSCdQnGx2eTm6UgJyTTH7qGqs4FcRwa9fgm7y6VcXaEp7ofXiE18XPB5PyUWus96p5pa5",
  "key15": "2aBHAJrEaq1jAokacd7PzepcXqWcSmwuFS3sKMRxsXCGWXL5mkpg4apqk6uqykhfYiPvLV4L7cTF2ioTZsQ2NJSY",
  "key16": "29sWUbWqD5rBwBAoJKkQByakGAuXVvCsVhCm2sYUxHeQEvk65LnBB81QxYPV43FL6AAckC6HPQUDWUGemE2w4DgQ",
  "key17": "363E47uQixAT2x7G61DpKjKnAVB7bAUdKLNDBh7f5rTuebgphmR8Jfni9VnZVfNWDWVzhifvnWfS4kGYBZQ3G1f8",
  "key18": "ARpNwqqqB5gazybUmrYT66HAAXtoxLqBRLLQEFx2z6NT3TR9mT2BdyvS7SfVcPSrvLWBEDYVFWoAiME3kaH9auA",
  "key19": "dc7Vx3nju8VGwAGQw62ZZ4J85H1k99GfW3bNA9NXpLPPBCR5Wg8B9p36JCa3ySgMXXbhZ9f6oBQMp9AcWkzFWM4",
  "key20": "CYnkHq3NSwVWk2jWgYZPsmDxLX8QeTmihZwPwBnmRBedmWgKJqi9DeC2P7YxAto1FCLL6VZYGYMfTGkJzvNMxkx",
  "key21": "5omZrUKA4gcqsW7mPLxeHtiCd1REUpfPCBVm3oMHFv1HbqMF9WVRjnFTpVeG2Y5uANVYJvjjFhocB2Lg3zgH3QtB",
  "key22": "4XdfwMVNpxGShEiMm3DBZmcgVThHskc9XSFFRVzkUvieKKcRb6WPmG2GVB8ut6reMLjTjSWxu637rXfYQHLuGgBU",
  "key23": "3HMDesPJsXVpo5MdUFcmvMXpzFfMbP7nWcQWTApS8w9dBXLg623jkfrrrBUqbFoAaam6TVK724EFfFUKStW2og4r",
  "key24": "5UdYi8vygdwjNBNCVA17e6vuDL2eN4xiTeZh3ZY6drHqcrCcPjBaLxPUpbKFLuHUwXuAeDLURjYArVUvKeZjEgpm",
  "key25": "4e2CMQ6zmStqQYheUFndv72UVy7Y9cVw1d1FtdM97gsM2HZEVdqPa6byUifL9DLCu33vT3MXCokmizS7hSoWPq87",
  "key26": "4SUmKCPr7AkM4ZXrve9hy6zh8H79nhEJ8Xv1nn7K1aQd4cemkVqx7xxbsEF9YqdB3FtK59xNJ9pMopFqLQ7osTft",
  "key27": "gF7Tq9t6AafiXTLcDGFstRwqKo2sbAydiN1RxTuB5awLLFsVVQ4Zi1SkXThQLKsLcq2QeJoZVy3AXAreSifubUS",
  "key28": "2QueBmGLrFkYpu3TYqQj8CyaQkmcfwrereELg3TNLkEz9eSgYwgm4zBbbsJmiGCMsNbeVTUotomJ2amVrJMSLg3m",
  "key29": "9m9FnqqCtCiCX5JDBusnVdWWTfzUF71JcuCVrC3PeNHJ7PrwzHyZLH7fvSeChq6oJjftKTLTpKzdYtaxZekkJ3P",
  "key30": "qqZbo21jQFnvcDoAEq8dvVsV7rok9E42jW8NZahizyajfndM6dJv4fciXhJW9eMCwUXyXMzyYRfpErfY3m6BJix",
  "key31": "61iNQvYX81bZvqAS7qkhN8Qv33xpzq1xhN2qaYhzBYj9HMeFwuJbSd7yhmp7FBFsxrSB8eZijuiNwPG6u53dTZpC"
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
