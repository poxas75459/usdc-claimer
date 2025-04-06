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
    "2qkCpyhmGmbY5RK4MxT4Cc4o6dqcEEDgsQYg2pJFLswtpFmzuLahmvRMB3vPMfwMXJ7esWn98DspTMQqyQxoBiYE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ydeUcWokENBe6y4rNsKYVVtRvwezcm9fvuhB8bGJxReTE79y2sqQ7oQ5Y7cGSusurXobrY4UdKteZAjpgD5gon2",
  "key1": "rorRd2zma4ipaPdAXZVVKMHM9Ayajqw7iALr5Q1vwsiZSrKXfKtrA2jgARSmNxMa27nMmZXjM7ZrPwnpNpuu124",
  "key2": "3ArBVqEr7dvXM26BTyQBEwe3FaXwueFvB8baSR7yBecrJ8YYPAe4BNBn1NMRMyeSg66yQxsBdXJr4at6kmoHyZDY",
  "key3": "2HifVLiteXQptWLruxYeFhiZBZXaL7aDX6XS9w4aqt6dYKGyJ2rPsKjP959yQDvSvMPduHYHZ9c1j7Xiee2VHrZ3",
  "key4": "jqp42Jx34A7GZdGByBh8pfQAThvThs32EyTLuvRNb6DVXeBwCL6Mfs8FF8B9wtpcZHQHiJBXbuL4yM2k9acM7TS",
  "key5": "3HrabrrQWAbFHegr9WX7SXZkZwUq8Lbw3UeuE1is84MefM8mJgLyXxbDJEwFmJKuTLf8AXgaKrEeywoPJcz79LU1",
  "key6": "bSsNRv5gtt925FY8WkydgXfQG7o8xxSNJUfVzihdxxrvQmUn2Vo7VsxVnMksuW7dqMPvciQSn2aMoMUKpWP58br",
  "key7": "5CQ9d6aHYUxMFo8Xjthg3HUKRCJE8ZG8MCn7um8TfSeBH1Zys3LdCf4RbpftES75rByf5KmTVQBvWaTuaSmDR1AL",
  "key8": "Wb6AyBwhTB2cfTSGouvrUZg4SbHSCjRHjoDPTz1S13pQAz8tNzMW9hr7aGwcEvohjbxkR96624DS9ichJ8BYVnK",
  "key9": "3T1Jc9aHRfp7ipLogb6Ax2zYBjPkdPyTbWtcHQwZL9pxVe86HXhZrLvdxN9nUfZk73XFFXsULGAcY9e6HF91vaQW",
  "key10": "2uDhR6MvHvBVXqbB3dPZeK6r88x9Xw4T2Da7eiirLbpqGRYDFu4KjQEbMDFWQnQ2wD64m24jEtYEYdaQ6YgZbyjL",
  "key11": "37zTU6Vnu3Ky76raMVh83ZUPbHnBAz3cuAVZyWANmpkZ3uTEkmu8sF5sBXH1pUC8NR9Pnv5VaaBwKkfc17wbDYHv",
  "key12": "cYC6DDg2RcN2zqWzTXegXrttv3KTZwbJ8ovyp1k42i1BgAnoQAy4Moyhvs5rUuEW2Lc77a1a8xsAcaCoB9U5w7T",
  "key13": "gKzdvm8o4gm3mQF1kpdE7mok9DfAYd4kSwSF92me69oLjdEaeBPp1UP1fdyFoT3rnVt8vV1Zqg1zk3nsiortgNd",
  "key14": "K9qyGPCKWJw8tEZFQX6ntR1kAm4Z8YKSf4fGQeVe4cw9UviTiWKm9XcEUQ6zmZEHC9suG9ic5RRHhkbvED1fFVz",
  "key15": "fDV6PZZN9cdy99gLs7SMFH25om6ZWsSKcuqibxRWmDy4M449oLjE62KEQPSz2rmNWuS5Ex9ZYsP1BCS4FUjhRPV",
  "key16": "27memE36DHegbpVc7UKga4Nwta432ZPAtpvYA4yrx4KPME7F31tjfNfLSNsKHCaP6twrXEwT57Vm78VHd17CYJXX",
  "key17": "4uvBUFNoXdxx9uj8P2NXPqdrqmwKWprQG8LR7YqChCsk1KgfkrCZr1iDihVXXTPgrLhCQupj72f6qXRpxgph2RZY",
  "key18": "25g7KkQ2YHkZ1URdqgNbtRtWpm5ibCxxYamSzRjyu9JZAg3EXQiTHybZYeWMPUCLAJeXbvEdcQVxSTtEpb3vAgqs",
  "key19": "5PDF8xQ3qipS3MLxsHxF25p8eu7B6nF6ssQTUy8DQ7EKNGVbhsryjytjvWTYbnyFBFEkNQ98HHtPKeYbV5WJ1s4e",
  "key20": "2D7pKWEmGiSi9Xv7n3vnP9q6PwKQAnhVVCq7caT4duAJabzU1CdA1E5Pyo2uyAteQknpVwywddi9Zd1veifzoFtz",
  "key21": "5nt4Dn7hDXVwdeHMzMyNJxpDHDygmbtsWWfDUEu1x6pVsmMas83BVnHQttqPXmFZ5T4C7SpPtCxJmJ5LwSRhorpU",
  "key22": "3AN8xo3Me263M5KF6CV8A1bT46YJESgoJdqvNtijBrFW8P6u1G8o58Xjan8BN472DbG6x1hxifgo162TV62mYDUg",
  "key23": "kCfQo3t4tiF7xSgLWKMsSRkF1CcFLiD8q7BWSAdPyiqJt495G2Gd7VZ3wDF34jBbxnsT19dFDjKJbpcpq1MCvKa",
  "key24": "3Q2AwDEYpEoE3kH9RaCQYVU4mMGnRyx5job3yGgsD42yqLpSWbp41kMjcyY9brwcz2H7eRtzfdeGcnmSaVa9Xi1p",
  "key25": "AKcXZESF4GCj2LG6sfxFgrUvU4sSgZAEEjmagY3LVdHGWa3fYU5rjZU8fuEUGMjLWbjUUk8xEUK9jARZCssq6ma",
  "key26": "3j9puxnoGhmdcZZ1JiRBw3oPVkP6FqY1cBZ1E23etWGEnVWEvq4Dxo7UC2cwEz3xWPfHzWh3EkUv4tao9GeQPJgY",
  "key27": "4Dy8j6Wwm7rPHrmQaEKKR22UQzecBECdksjCpRPYedr7EZa3rqx1mupgWbRjDAzNdKy8hBCpgyPM9bfyuzHHPfdN",
  "key28": "3ooEPhbwi5yMqHRprAqxc7D9e3rrBQeoAfcUMVVZv6Hv5YN6hN3obBXjMRbbwLsNCXSF8i7yMq14kJmxZjBjzSHK",
  "key29": "2vq5WYxaBnZCDS6gDUPqRuKtzijeaCavJDCjJ7A5osqViWHgRy4bcC4TukiMA5mPX7nN4fHAaHjcpaG1HvgMFGk",
  "key30": "HgZBMZXWgGiy13Zvsgyr4VxLgPUH1XEAUnmoLnFySBZrfyxD8zEQdxfjQLmy4T1xsprSRJyjPRf6WPoS8o1Qhsw",
  "key31": "4nVGR59eUXTr6f9zV5sB2K9eEQS57rjKkNiHB8bnudbh7SVDMXtabazkuvHMbdKGCt7aMDeKBYd6gJgNhwjCyeiD",
  "key32": "3m6qgqWkoy4YqYSqAL4P921eRWkSbz7k56GH65H31aFErCDUbvWww6c5zUdEfQdezyTQqSD2rA1tRfS3eN39KfgK",
  "key33": "3gzsWL78KQQTyD9r5Ykb3xhmYzL9feX7gvkgJVojZARtkX4iDbc3LeAGni4mPYy5WpcHhKRX5FcUqMBNM4d4FTkD",
  "key34": "316ecgGDX9jkZv2gbt8zDKqgvVYnbHjBBeNjUbsP7vWGsXjs63deSCd8gVuy7ucdonuNWRwDfJzSsM9pg8icE9B3",
  "key35": "3xiPU6szSc8hysQytB4jG7EJ2ovMAVR7Upy3f5mHUicLBMTXctqu7kVn5MP3XuLPQSG4kQ1XqQsz9d1otXZLx3Pn",
  "key36": "3iQJjehxxsNkBLxFg1ywX37TFNBPs8KwjWVWeA9WaNRDEMXAFWcdkw5sjR8fFUTCYLp8QmP52zSb9K9uVMQ5q7ok"
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
