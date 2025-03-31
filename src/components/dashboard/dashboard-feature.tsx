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
    "u2X2n6KFFWc7uyekTXebSBDUfCfC4oBB6ontKaompE6s8ymNmDRuk94GcTawvUj2ZbJoWguEdnELKNU21Lwq8K7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FxwYZnN6ThqfeewsHmKgfrujGKMcB8hQZPVDxukYP21kNUvnL16RMHy5mzPw5cw4iX5M6sRmiUijE8S7xsc8DyE",
  "key1": "2MRF6SGyev13u5T9FcDBoGWdgC6dsSooyHtLjgAJ4YHaU9w5jwvg2TYT9GpWtrw9VE3HsksMfTqsFyjmPw4hzDcT",
  "key2": "3X632pAQxHpUdrHCPaYaow4QcYeNN4UsgBQBtYGjiRDP9eryiVwDWE8zbbS7Kw4B1BGDgag8NMHjNpgDHwB1Yut3",
  "key3": "3XMVYtfm6VKSSi5kT1VBanzGkWCyEyj2RvjamfJ1xRRfTYgMGRVppeJWuDPbwwvTrxx1gWwFtbYgcPsz6wwgoYU7",
  "key4": "FDSxKZWipBpgL7VtSACLZizBgAvs79LdRpJx54viNdwFMk8eBXRWRwzKuMC4BJ2WsbnQ7AXXpoXBfYzGYfokJQb",
  "key5": "3vNtojLHRVADr743mzJyvgLNyerHZzDDG1LuMDeHtDf7TEDLYtoaw57RweoeL2e18j81wVDUcVQZZbEuyqxfDkML",
  "key6": "55FyjZnaRKkbUSzXTusgHAV3LEPFB3PGBqRT4wEUTWowjyi9r1vS2LiRySUTt9fmKhTTKYDc5xy3JmNi19txwfQn",
  "key7": "31pzZEWACXAMQ8uNC1gpH3HLDDe99qnajbnhPqWKYZVNCcuPM5gxq9ygDL9FZN35pLrohbwCmW4SBAKwT5qeBgmD",
  "key8": "5TJ41Hk459cLwSYru4nCtGoZsQZAjJJjUSHKDPoxYviTA6dzHrJ2LX9QH6JDjaNBAnt2eH7AnNioG13ZQZan668z",
  "key9": "2AEB4bNsX9SLoVyze88VmTwa5EqYpWPtiCChxw8s1d9eNpSnL2f7tgSpkvgSnu3TuE4ty3SS5wretMBjeMaLX6x5",
  "key10": "4geDFGBcJMgyaWdxAn7Exuu9WVTNnj78ufsc2yFbPwdAaWqPWyX3ZbHD23oPgSaTooCmzggzvJAphJptqcQf76Pz",
  "key11": "2z2gYgVEytfspwVimpouRTzfuG9iF947rgsE1HoZtfJCi2stNDguUwi9rCdeUdEXQGTxe94EHCR5bnXooLnW9QE2",
  "key12": "Gebh4cCBwQtU2fSM4MZPohbZMePGDbb8b1d2N94ndJHHPeY8sX9HFFnmk1r1hwp9gjBH3an3NZcLsQrP6Xftw23",
  "key13": "4H5hJwXu9M9tjLCZTe6kmrBGEXVVN2BDEpSX7Yka7oKj5a3Zdrh4jSfhpM8odZDtYnMWCdtTAFhLJ2nYYhhefdpV",
  "key14": "CsLenbobeewYN2UBRkwzA8CodV57wrG1RNL8zGeCVcp8w93mroTEQC9CofDNWq2GrJ6jgYhhJa9qFL2FGPwx51L",
  "key15": "2fo421ajkbD9vSgxwm8frgGNgseiKM6YFb7LvhoqydK6q32QvBz5EgJfF6kUMAjZgRxcmT9qhVbshxnjmdBo6bFZ",
  "key16": "21QokHyShtQPHe43oGnYNUF27S5Hw2WHmTVAyBA8wGk7XqC1GwYKWDitRYLAUQb7UdRV7h3davogGyeM9RBP9vvh",
  "key17": "3Z2pzcfH23Z6KhWf7F9HkTvzvmGW4AbvdZ3NRXqnWUbaDofXBPo87hY7FxoyoFgkG5RqQWpDnUW1MtBJJERWuGxF",
  "key18": "3FbTPK4hcxm3wRDGGdswsEuTxckM7u4V9wzBP9euRJ3vJacKs8BwaVd4sZTSLqDCxRi7yiYWukBtkfG3zkVXEFo2",
  "key19": "34zEoKPLfCsKLP6y5AWMM3asAn3PLb9T3gojC1keEJiRCUAgrjFJqbQY8RXzbR1Zx5AVtu4GwNid5QJNA4T8jzax",
  "key20": "2w3X6xfH6q1FL4vSXHt3i1LVuJyzVqxVZ2tWTZrXbgiUThvKZvkQRADFNjAfkhLJmaQzLnFXFvguq1h4f92HtwPB",
  "key21": "4eZcz5KZBvQ2fTpZsW5cawmF59rLVwCksPpDtrATR5okQdindJu3KxDbzc4GX2g5PqLd5KgPgw1ZCdrZZUCJT2Fo",
  "key22": "3NH229KP9DbvBGLqVUxZcXVoQfxwnZ6ioikyyMMBGgjT1Mrufo1PtUwTkM2UpuzDfkX4EWMA513mrEQ7DgLxbzfi",
  "key23": "4a7KhvFR4CDZEZgcSXu5PztBJuhXRw3NXLNRo5BpvQgY3zaxPaFSn2KeZCPLt5XbcNYp3tFXZDeK36uUc3ojKzVT",
  "key24": "61Y2ENJ6AG8sJyTgpoAiyWJAprfKmSejHifcMR6qQ5m2CLZ16QErpzWvw5veT93vKSbvjq2fH5PU3hKzk7jPfDGc",
  "key25": "4iwADG6cV9ygvk1MHd7ZNpFgNeBuJ4aqGdMoEh5yZWug2u79eAuEWkJfZtiYim2BBEZzxfaTUVtnLUCmY54KRLAc",
  "key26": "2XYn5WsANixvPu8j9cyvucdZ92HzhM5m1nV7kMo2PQgEbHCRo9tcoQBYmkC1pKQeHGAyGquJHcuL7g31Paf1m4YY",
  "key27": "3GwuKAAAQxUyjoC6jXMqdaHhFUuTXikwKQeuoxUMFqVjnZaYEeqcZTtd8TnxUARedKLBWTTV4nhF7JxguVPkarCj",
  "key28": "3F3UPcXoPGWk1NUbD2hm9uPagLKp42teFfi5sYMdB4CYBrRUjxa9H54TukQUdPZpgM8jeXwFev3tFTuQKk8RmQYC",
  "key29": "4nNtN6NJMKLRGwNPatgxRR2CR1HxurLxJft9mQWXdDBvcbiBsgXpZnGrqRA7Dwzv3FDGafNMkLyKjVxZzdVRGCZD",
  "key30": "3PjPKWdpvHV8WGVjS7hGty43Qmw31qsxfHPgWYGXx3kKRn1i7rx9Bi6PeAAiFD1mfmRYM9QdpkQppw5KB4URoRjW",
  "key31": "311P8Q2qGVzNC17nhZdG6HKPcceudfbfmYnwnKQ4sqt697T1ugge5cMRR9Aq3GGBpWXyhPSAMmkiWVRh7ZCivXtW",
  "key32": "4EsjaMj4z2aPmjNumzpJUXzjBqu5q435rCtBmKqaJVGEnEzzuejCtkfSVqkaZ1weEn4QkpCCvg9t1J2TmME2eAvc",
  "key33": "2FVYax5XYzzaCfh3vpVMxdXqhqyvH1Jh5uxfBtibk7Yrqj96m15MP1LFu3UzNqYtwhNZgRAgktt5a9gu8qjKw4pb",
  "key34": "4reQoG85vHJeJXHXKYHDNv5NRq6RNGaUJoahvisDdrjzEdKQDvVmqskQdGSVT9M33LBsKCfnWGYDnz9Hgs9hA73c"
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
