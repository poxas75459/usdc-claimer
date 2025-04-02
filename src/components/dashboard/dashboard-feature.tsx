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
    "QR4rcJvpewdjFuDyV1xU5NQWYEM81PmaKojQSj7oxFGujvkpyyFNMkJyNX3eGfcXxX3QoDJUTP4aojqxufEDWNU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CGTJkdpHaGL2kkYGJDDC3YcM1LLU2obT8EfoyENj17Zp42kuSrf2XFqxPw1pd1ehDMPwmxaUNEkh8faQQ6h38Zu",
  "key1": "4D3egj63PbgD7GGxGJjW1P88WqYnGvq4Us3xFSzb1rvxaBB7r7zo2vWfd9q1wJ8zf1DtsrgpzWd7GsKqUERsWj7U",
  "key2": "4estYuPPXXvWNR7TT9ivyiYj6MpJoTrLdmsqKW1G2KLwpQCU988staaPtvdyXwo35sKvJdqwy19D3TQjkizoGRc4",
  "key3": "4vKvg2h3A3vKLbW8HtHJsAz1N3mbfQbszf6a1Q38HE51XAFxUYjm5y1748gpJdaZdnPUaEzibvxPD9Cs3mJNU9dp",
  "key4": "4nrFtR9hKrt9np2z23jiC5NWLBzK72mWwnLiUXUTdZz468J6jGsxLjQARWASB5ZWkfuSJjwC9iRJ8zXAKjZFAd6h",
  "key5": "2pMgkbJXsCfThfypeYCD7r7mcTuY2wPFQvyA3uJbGc5tA1sqCLFgshLDsmoKrRPkWyfQ7JJAvx2E5AhdMT1Ncw6N",
  "key6": "4m2S1rbRQxuDmhYg4QQq8w1vVZ3WNjuCLA1RstAG9r8QoxTUbkKXHsH4rUHHs4hDxM4kmy9tAHSNJyGMTkPb5i8e",
  "key7": "4mSWqYm3ZgJ6VjKGk5SVEFE7MCKSiC417shg3pcratkmX9aGsVj4MXYgfkyMhjbkRnxmPjQqXKdbap1TsxRkpnoS",
  "key8": "4ociEDocZWUyFpXo9mQpSNWuqq5w7Lu56Du6wYWRqsTNdmA9Rhj5WpPGs3kapsXiaSN3TcNChBiUZ8CYzE7QpJoh",
  "key9": "4uU5R6YFqiAoBfeeHVPtkjVgrVkau7auKtm6rRP9YnXg9YWKfdtQeZCUZkdRJNqQcpzvbpvkRKRRYsoCrcQKzcVH",
  "key10": "22dZQfKXCX4XaWNyH1f4miN6k9RdkPfLZ1MRugoR44yN42hLRCRBQPGw7zE6WL2tkpqq7di1cR6KVmRFTUf29WnY",
  "key11": "3bdw3pitjwedL2ipQFWiyNiW2AV7FDKoC12MQHvcvAwRC691CFUJMCwfJfuewFbVT4zpGSuxi7sZfPcwKQ5FvQKc",
  "key12": "5uL1WGjP5iKuTMvmJLiLd7JzjyUsax8X4xTrRPZtqf4Nmv4UV3XvEmeXhfMfg79TR6gYbX8ncaDWyukwythdyyNB",
  "key13": "2ZnGQJPrZxr9pDZyvrU6V8sqYNa9oWhTXCSKKi4bhtyeVBhMoHkFip7gKjb3kx1vexxYsKFAx6dWpu8rUJRRknQf",
  "key14": "3yTkmDu1VQ9TojygPt8PbWHdC9MevGVYrWfeFgAzq6UFbcmcsm5JNKz6pyvHNfP2SwkH7ZQGQRQxPZqMBEZ7vSKx",
  "key15": "4em1A9reeogUbz2u1TE5bFMykKmcV4CGPYT18EENRwRU73jCP9Ui1TgjqgrxvJMossKjAbK86JZ7iCUYPzkbNByn",
  "key16": "22VgkF5su1QXFtaYZcT3LzFzvZsTfaRK5RT1uB9VFFgRsVevrPUf2kBUViMiiuj77ZCNVZqAGzWQ3yh6wp22j1rh",
  "key17": "4ymdwPPn9c9RbufGfXYQDYBmHfzFuEovdVLkUsnthGCNTNHvJvj3qAeo2bnhELvHfgCJUp8U2KksRobMUdSxoJdW",
  "key18": "wG6QXE9tncMhvnr2kC4TyPnrnevsDFACDgRjg8sH3ogfwehb13v7Ay2HWz46WvVGAYwW1RA6pgNVK7vcnrexwgM",
  "key19": "3XXi3k6PiTUtwkgT76FZfds57ASoQq9S2Z2H299e5krBCRwZezDSy4UJE8PEm6twwXEa4S3V6WGhjBA9o1qSfdES",
  "key20": "FTB2cNzdEzawKPkUJuhbe4B3YF1sg3iiw941d49j8FkMcioYQmCdvQfHYQXBdkz8YAZLyU5fYF9XJYqfEppni8M",
  "key21": "4iad5CBE1Q8rAeQo3HwsTfb2DWQEoqWMftbCgg8ynokHZmCwZcgypEXNqT86757YqZHtVzWTx3ktV3gLqzBaih8Y",
  "key22": "4eMLZBqXgEWP2BGydMqYwVS3Bc3FVYqLTigH35VWPoaEtfge6dWJocFpQH8c3B31B2UFzVtZusFp329DLRfL9cxp",
  "key23": "qy1VdJP4xEX5pR6PBJTUkqAbQdF6BA9DHQ6AsMiuRJ5umQv2y4ohRpS9y3Z1KRi2Ycff6miKhyoud12eLZXCfc7",
  "key24": "4FrqUHoQ6yrup3syzpHUjH5yEfo9frmNqueArgy47Xu3HrD6ZxkHpzSoKpE8gmN3qPFdfBgg46EURQNATaQXKZC7",
  "key25": "27XbpuQM2hPGQxojXLs9JMLspT4EFvT7FBmRtzegzu8smZf26adSBtDR3cUFyynsb5TahoWaizbxvi8uNufxmdAu",
  "key26": "5c8knKV6QzFwUynBtsm9ioYF47MFjHTD6xdcQLq4EDxgaFLG7e8YZSqTBpcFKaYD5SE5dgdR4vrSk34Ty1PTwDCG",
  "key27": "4NAwSQ635muTtjLN483MfUCJsSn4hD12PVj3tmLzu6EPsTMzhJMAekdcHB7t58oPZKe8PBuGHBkwAjbeTkxMyYDQ",
  "key28": "4sByx1Fs58bcsNQ6sA3gBk7kYjVxDsgrVpBd2UaYN6t8Vc4jE4PFSm9AdkmhnEPWdRBM7CkNRo3S2RS5A9yiEB8k",
  "key29": "2UXdpaNhdtfmZUL9WprBNczwxPRbYSSvuHFt1VQ6nmWJu3NBKsJ3yvUz2JeTzWWNcmXxJazb5FHwN2SdkffwLGJ6",
  "key30": "5Br6nLXazYKEZKTn7ohohQK2igRfX5vSqJYDcEuhE6TyusFiszWJcLVo5LWSSnFCH5BZanDkJjXxM23Yt2A5aze4",
  "key31": "2okTZBBqjqMd5DzAiM4hC65WYpP8DDqfw2Zy98SJQBoDiinUbg4xeXpjq9u4FL24XZUMzHMcFp7NXigz4EVE5z14",
  "key32": "yjL2MzV9aAvn5s6QtWtfbyzRYs7v8xhV4LQj2ykqAwyHfH1kKYqQfX8Jp1bn8kMSCY13W33PruLGHS5vzHhmmoK",
  "key33": "3xwm6NVeo6gcXu8zHT2Jb4Bc1Wsr9GaL9EbkXFwN54yJEvTYF5K9d9bMtJZZX1A6e7v9w5A3SAGKSuy6D419tuow"
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
