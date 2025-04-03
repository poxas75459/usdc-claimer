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
    "3NBivZd8Q1aDqXZFeZkv6bg3nUBE7fiZTHCEBiuqAAJwWgmK8NY8rYWH7YZbqfvQBuY8hS59kMN7FsfxFGxeNtjg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PHfJCbR6NuVJyxNUoGCL2VxcLyjQ8h1Dvrgno3WTt4onihUDAq9F5oXppb2sDqsrSJe3QUR5dBt4Uu7oewPFeNZ",
  "key1": "2MGKFr5ecwSxbxmtdfaSCmZXpNW8S4fTyfhuLfnqPGYWTjhd4581zhprzUrpHaYwycoXfZqJMSQgT5krSyqDyTzJ",
  "key2": "2FEBMtH3kgSQQ2LcVmp67z4BKngJbHcV17DuoCDzUteumxQtuD4JC3eC3pWcUBWzsLbHNRwX34xWwPcgpU85vryW",
  "key3": "2KMuqAVgZLf3nQmc5qJwxzogLiJjm81S2VuyGPkNknRtXcF5R7gQmXy9AtUoYsSWpTZkrWxdkq5TzajydEUVEoAT",
  "key4": "4fuFC1TNetcuSpg5vkwQ6LVUot7UZ5WguC2QfPcc2qaU3pvBikHMHP2mEGQd942gzNpgwECgybQk45MNdVVdsQ33",
  "key5": "5puYHjxvStPRpbMgq1fTDDaEezd6WN2yZLoHd1ZUM1y4da8RgMhqPjDQuNsgjaPr1ZxNDgNQYepthfDSfRnKBQXn",
  "key6": "64UjSBVK4JDGvbJzrcwR19eH9CHYpui7L18orez1bKbPHPjpgtdujGn5sDzkW1CjX9s5ALfaLu1n44bzC92CaHHw",
  "key7": "3uR4LDvSc9kPeaT2FmEmDbqP2Gf4JrR6YExLKkzA6zPWhkdBJYEWZGdixWT2JMaj9AQCEymDi9Q3KNAud6B1CSst",
  "key8": "2Yfi1Mkgra2jH3RmseeCxhQBpdYbie4zVCw5PFhy5eSG1ijGVgB8EHUuwVAjCTVTJ2MJGv2GNFZ7EouF7G7vq2NT",
  "key9": "3bHpVm38M3rE1RXhMgC5mLTVyPDfsAiL93KXuzFKExm21EyxLfGcxMQegwBk83fjib4U2gmNVDkax1iq4C1G5Hh7",
  "key10": "312pY6XCr3ue1zDyrZTqfbv9yJ2FvdzNTbEcyx6MXxU4JTjafDp8coSymwFgSQKPdCyPYtndGMXeiumeajq4kMYE",
  "key11": "4T2QtbbYn5ABFnBTD7qf4ZKD8pUXBXnyTw3ycz1SzGpDHeptRfdFLcTjDys3jpJJXqgfQs6tW95tdAgUv9LAPpwg",
  "key12": "4AzwT3kcML7Q6fUv6mdB7e9WQ83C4onowT7Bfh9WsqjEkpGhYbXWhp98aZRVX6uhib9JB5vUZ2EZsFFQMkkzh4tr",
  "key13": "4vuHuFFKxM5gkoRrLtx1HCuYrA61LaDkipwQdc22sU1MNM9NA6P8i6Lxt6vPj2a1Xgq7J7W7QTdTSFEvRqhUgqBX",
  "key14": "36SJB6X3Gv9fX24vGC2oD5BhiV7buvpekD4Tz8j7BR2AzRgjSHCjFKVnDTkt8JGWd1M8DLRsM1KS8ri5N9BnJ4v4",
  "key15": "5zrmC6XtqiT9yvBzm1HuAQKSLsFGLu2DwBwxASNmzvzbPXfanPDtpSdeMrsmEiLB4uriBYHtxYrk9RKM2ZcJT2bR",
  "key16": "3tMd7CDCoGqT3QHSSyw3mDTGUURqZoy2DHLK5dR4d9GeJmwV7mjoaSAtQGBm6VTzoVpn88byFZXaqSrG2dXmW6wJ",
  "key17": "42wHZGAFwK1bj1y2yY9k2axLhW9GCF8Wd78MuzfDzjtTywapd8Dyawnfzsu423XimdQiUYdu7Qhr5qdMDVgrEHdD",
  "key18": "5sDdLpST718Ujzzr6E1tBYu7JWNzxHE1iVfYhAXcz9RXYEX2Wanjw1bNXU26eojmU5NgupmhSoqhZ8p5QmJJdJDZ",
  "key19": "4fRTA1LDJXTW8JHjBXZR7CyL9L2W9fgrMXDsqxK25aXKMW82my4UFhNUsaDFZxcNjNRAGxxEqWgXrymsGEwjqwfz",
  "key20": "Ss7bmjbse2XYkCibUmhtr1SY9HRWweru9dZZNeimiBpugH85tYrkCSNXe2nFQGEi76EuMjQiddCWv3djSg5HKpq",
  "key21": "5mdaVRh2S2QdgVZWqXGahQPfKLLfTWyNFSYGKvf7t7m6CsFqRv94eXaMx1iiNXphqBqT1jTADAKUKRJ7K5w2WdQC",
  "key22": "3ZFKSBdb6eeBqdNk7C6PSyqH5K9FX9uArmDTmtNGo45nrm9zFYQae2xVxLz2nu78AFRH3MtZK5ygdRwT2cHB4vYs",
  "key23": "2NCeKZbpw5EgmXTPdmX4iNsJQDjMUzC5uyCH8yDvgz3rMJ847MEGZyb5tyjS9qH5gY3m4dCDmsqUrG7ZHUutJjdR",
  "key24": "5obYqJcUbMCSMu2awRiTaew2ehTP4PXMqZEeRfXaDcx5KZYoquNrMEiofsCeVSD5TzQoXWsHpVracZynbRctZWb7",
  "key25": "4ExyRRiHZmB6RqkGfx4DnAKGQjZr1HbkzvdDNHagn6s55uu9mXMhPek7HVvsULsCjzMTk1uz5isgM7pcoi86MgQb",
  "key26": "2Tvaff2TX96Z9zjjQKq6HJ58whQhrE1ULmGqKn9nSJQ6E9vR8FibTpdmHb79zCUhcdWuz6wqncuU1Eczim2UMcjC",
  "key27": "4dBaEY5foZ4ysrnJhX4pXcCAfHvbcmi2UBt7Fzg41uBiu1CsADkw12kSQek7eYDdFr6tHqis3mXtiNLWzs99Q2Us",
  "key28": "3mowKWWQgkLE6sgoDrLf9NYdkRJkKdyrU7SEfFJNVHF17eH4r5hUgpYvVdtVhVL4rsbRD1RcHxxWtTMJRw3hQDhT",
  "key29": "CTFRyQfKMXaQ5WeknggHXMakQtgG4q8rAqtjd3VwNau6UFRcqmJRzKJHqSS8E68dP5E5nujn9unwF4U7CfNgNgg",
  "key30": "WT5gRduSeoaQh5CJ5gWHov96oipBQB5gFL8dHUTDAheUaNQqrr6mmHrZPsdRfkgvXCa6LMrYUEPcZn3w8wtJZLK",
  "key31": "4UjwauFQ2yozgSMXrGm3dpZYYMfqSwGwcwbRDFkwaDFZDFnLsfStM7YVmsLAETZAVGXfnG6b2X279yiUv8M1yf3R",
  "key32": "5NPBYNQ38TBSdiZHjhrSyuafeM2upqs4HM4GV1iFUJac7KYLc5hBqWFEWZBYvTwvMWgyAu5VVthNg6bUCz9yxvJu",
  "key33": "2cuEatTMFRpJETRVK3TA8iEXsaRepit3mSV5G4UR2fQ74aiBU9cb71pcmcUuPoSwaaLqVX4AoTKpfZip6wrvZqkM",
  "key34": "3qkBB1f7ygPFhukbKCWaWL83WNe2gMxAfaj1ejbC9cgqz8BXbNTmuKXiL7gXwjGp9JdD3oa4aWzoxrkJU4ETkHQ1",
  "key35": "21p7osfMXrY8f97s8Te7wReR3dPgEWpJDPtYp1GyLrpPZG4Skx2Ff3hWWpUEjr322hzomhPfbThDxaVeynpCbCsC",
  "key36": "35X9vSffxmVv2wQZPVuhYEDY2gNHvrgfdPEaXVTzhSYP1EMQJiNuy4ogLKHamX5feHDiqj9CjTY2VCAmTLy6aX1c",
  "key37": "2c1UTNoLprjXxvGvkti3F2Po9dN7oipp8YKLCz3wHnRGftFm9MndX1DVU1H7143sFcPPVx8oGshdngG1uP1xMeZq",
  "key38": "2eZJBuTo1nWiMonJkU8p17uvUWYMYRbyB3n6tKaAuANWrtFi9eNKa82wJBFcQg29JG3GLC5MLQQMufxc9s5XFKvy",
  "key39": "4KN7fwwTZRXZdVZkGp5hDSbLuh4wtWtvdZkjKSjJwJF8BHye8WiH1La5S8VfZ8BFWMFkkVijYM8Tong6g7zrBKaB",
  "key40": "3sMMeUJHfdoCSryqYFqEEUPZrCh8gG9RftLBi3MGnh2Nry3ux5MWRb864i5YKLGcvAmbAMYXpWJmmKdbwbou8tTu",
  "key41": "5XcWgZqGKjndHNZ7Ku7cBH7hGtXhWwQLF8nQPTsSqgKU55LrZw5K5qUYjMXoBRPjRR6ooc2XaqdpjkZfqR6etaUZ",
  "key42": "4TM2QkmFfMB2m2JtdW2ZB4Un2FqUfdDqWcinMfpTbGR339sWt6K3fEdutNr4EwWhygPHuHPiCPSDWDp1wHmVZqC7",
  "key43": "q5TTyrEvC4EGfARfykga2YMDtj5W1ikwm2L2B3TxqiQQF9uFuJauQDVqYbqEeKgsxzJYVCuvuPsNLkpGLb53dF5",
  "key44": "4XyvZNjBbvtfPsUC3A2XYhU8iFvkSG3UeME4psmYwWnBYeigaSMNdYFysEDjohEvrGiLaGkVSXXJcqmTw735C259"
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
