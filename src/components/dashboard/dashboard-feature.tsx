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
    "5tDZDgNLQKvdgorc6cByEYxqNwKT83LGdYSLctcBuhUMHGnR9soG2WmE1HG4jD9pZqLwBBhYmxAziqt8MzbpPMVC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mCCDVVn6kWC2o2pcJD2PnaoMsvhyfnKN9Dn88geDRMGMPcN5Jhe86q41tecWyMqgPRmuhHtY1E93ATnM85fFd5n",
  "key1": "4qZbJctwd5srmfUKgLy3SwsmNvRxn3vD5rC4DQo53mAn9Kbd1TK2jcVjwe8sNVX6CzK32Fqy7cJfQwTRziHBUWfw",
  "key2": "469w7DBnriCEoNx8thsmgX4BC2HcHYTftBLdyuVDGHBnxp8PJXuhJ9r6hew1Z64yXdtfv32JSDjgqAEwjLkUa3M7",
  "key3": "26GRs67K1FaiSRzCNtswjkddPLe4U1BjaL88B9d5gn3EYLcoXi66Jr8gaGrY7yRKD2puAHPXWWvvENQKib2yLs1f",
  "key4": "BVNg8mGAJJpE8TUaxeH9LvtqiZwwe5uPAizsk5p15nUuJeY8iwx9nakGH6fNdm5LA2SWvpsWzxUBdiv8kxr6N6o",
  "key5": "4QPc3mZPi8Gb88vVjjYrJqwnYzTTN5CjqnfkKp53PqSH1R1eX9LeWAEsanioQwbnQzn5GLQ3zR1n3cs1pBVATGPm",
  "key6": "37QKT3y4XPjRMkqixCoYZcAiLrpfyo1rd1p6hb7iN4EodozHDxwDuPQwhHkkwGPJyqbxhpRUothgnkf79PEtxGAJ",
  "key7": "uv9PinR3B2QPqJqnCCVkyZWtxczDQQko7cfV5bxJsKHEFGMvbxh7Sf8TCBF6fbGXkrzB3RMcoN9FjNqm5oLMiKV",
  "key8": "mac7SUQG4e7eCnBscM5p5Wqp9MxrJFs6yjAnaMQ7hTTWBy9FAAHUNQgcWUy2g4D7t4aMMYkmjiH7qELfYavaEjE",
  "key9": "3MYTDYqfVmN6Lw8frKGKHB6mnKUdn11J9yr2BKEWBLheSD3A4Fi3ECGVF5eD3P4WUqH9VBaQEeMdp9NR26UQS3p",
  "key10": "2DUP5bFqG7vj3mbQEn3jZUMVpNA5a77QJVDNfnNvgKETGEXj4GAiAPzBwT3cddRDaU9D11Lk9DgP2fh4Uw3JdJaq",
  "key11": "2T3mMaRufC6xwnYkaMH7ssMph13erHGWHAdJbUaQ4jKNBgEvi76MheQEUg4qHNsN1xb8pkhojdGk5VvGubJM29Zr",
  "key12": "4cQVZvhTKrXnzGBjE95ArvqKmcFdhmz1CAcqG4LCyXDQmzX71fLAfVhq3rYM9ZMaZyXbZtyr3o1Dq9ZShPYFT3rf",
  "key13": "5wvZ64mTEvhJwAivgCMm8MZudmzAjkrAGi6njdxyauoyuUeKXYhcPK5N4Y3boYuBB6osN2hmnSAxpCokPXM64apr",
  "key14": "3fM73Eq2XbPHWW29ow43q4bKZLXf6QWZxcnE7Wc8AuLvXN9gbadycPAuAzBphqRPfiS8cFP41kg4Xz9RJX9EK9Ba",
  "key15": "5wMReVqWoZj6DjpmCaN3d1eS566AhBdu6zv5Pi6JoriaRYneGWbrXr3thmsAbdFN7DNyhqihV35Rtdgyhj8bXAHy",
  "key16": "47CPbbCXKW6E2fhkut1oobNtufH4gpUCAUAVpcxf1G9S8aA2yDhbf8xsCJvNFpS6v84NzNSwu93Z6tD24aHgu1eC",
  "key17": "2jfHUqtoe5s5fcDkxUspZxkqi5Z67hoJRdDomSKU8xmHhFd17ATmVfXTS38TGwsHmrmQGiRrmAgZ9PeCej3QeA33",
  "key18": "NhauSucBjfWpb8PHs678pX8imLcYGWCxL3GH91ncU3TAfXaTHv3NxFyFnxFJT7F8i82pRpxmHpN2FYqNMdvnmf8",
  "key19": "4crDGqMuYnRQdKf8RZRcuHvnYdzMMEN1HR5fLYfroHJH6YuDKgRbPbkjCAoGpUd1x7CfLNxowcAFgDRpCQYFzguq",
  "key20": "n5qLP8TncALrao6xSHMh7k3MEqh29CquVv3JFQ6ewrgb8qcabXCfV6W6wdJhfERS3Lf9S865Rkmhbq4mAc4yora",
  "key21": "4DHXGtACfU19s7qJjrd4SvFtxqeuWjQh577UujryQEKHqNDJ8Km7Rnj7ARZ9yEdEUGVhEHspFgmYaKniA2vBryjA",
  "key22": "3nHjGWnbCunCmJ4yAPnkHzbAakqAU9cVacCep64J9GRjFrccryC1hJKAsqMJBECyvgjZPr9tqF2iCMHTk7qNKzYx",
  "key23": "5Mffhk111EnnCweiCxuzETt2kXNzyTudUn6Toz7UaGnEWUU9fh837DuWwwXTY7aGTHYnZzR1tzDDFJBwpo2dKK86",
  "key24": "SiRKcKQYNo7Pig5fzthAjcy3iciVYftXkUZNpGUawAs1JjiR39WVu24zfFUBGuJyM1L8kQvTJA7QMXwci2D5xsR",
  "key25": "4QNAbdUBtFd2JYEu99Caa6ZXtJtuM2xzD5P4j1UD3nPrvoKyUXhezK7xQCHB3xXV7APwcPwyZ1uNfMfkpYg4GYti",
  "key26": "z2iBRTeb92Z4zrtep8CFuGF5xTadjUdd1KtWzHtWtaeUxnYRpwLjtVXZoL54qenmz7nHsKsZGnnJ4mQxoJVkJau",
  "key27": "5iieCbRiEDLuHHLZNY92xPxiQpLtNk6Ay5efjcwgdDnXiGHxkSAmQ23e7vJiL3qDfnpUhPUw6YxuyHg4V1czb3ya",
  "key28": "2BwV36YarNoSLEmsYs7MVDxx8yx16T6Ajmp9md6uSmKnrQa68aUx3KGcTTd6VVw2bPLg741mSQNfRcyyuFEqAPQz",
  "key29": "5PmNwYzdHLoqK4Y89jqEStd4pzenQsQhdXY72Tui4PgRtHzMw5dWhnFPjQB675DvBRZzfUWWjS35j5GpRaUoq36f",
  "key30": "3xfYvtZ6CTXRcUDYuJ1YZYENGCrEkKrovUKfrZoGL5fEsbwiYKWcLMQFRsP3abeXhTecrzpsMkEkn5ynU7vA8PPP",
  "key31": "6f3mqG39pfu9Nxn2x3xspiZSbbXTdrwPFnmDrdTbWLoRxQV9VS8tLWSMYfRkfJifjPte1nCK3sWBoSyFWuVEkk8",
  "key32": "TDMVoSofXiTfBpxdfcbeigLCeS9EaMyepoyZ33F9T1g8q3myLPuxUztkxq31T1f3zLTSNLTTkByoL2yZj8BnhXc",
  "key33": "2uGFyxtDev6AEZh7iBnA1yTjPYu1Xzo6AEAqR5Q2CFdhopwn7x7B69gioxRaJDqEq7i8sJ8rsuTkzoh8BW1jQtQ3",
  "key34": "42oQhyGxDAZnUmbZAuDwUJCapuyYEDpHSfTfS1KWBTUYyhNfuEVRWMYGYT5RRuMGBo26ADmabPM3CqrkuxqbjFZW",
  "key35": "2EysXSyyTo82EhzZmNyXZNitRS8ajKHRXiWRVzZnBCPMxSmWkiiKopdcpxhrSqkpSGqjrz6f3tssTrxSMZGNRCgm",
  "key36": "5bxKPsEm4AcEX9UZHeKPzSBfCqqx9VZmv4Q3wRx7hAqSrAoKfN289PEUR3z8tUtdazu2TdwTxnP2QXNUwHx3SwMQ",
  "key37": "2qNEfLyV69ntSQwV1Ri11MSgDXbEtfDWd3YGMkZBhXLFJ4SsKDhgKu8KDKF1QwMCXoPK8iXnY6NnbESEBVMu8LLN",
  "key38": "3yCHCjJNvyh9ZFFpfCBVFDnpe5mTtXZczG7pQspCukD5yGfYsp4kx1PLieen12upDJf6PGdqGWjTWdVhiTj7t6T7",
  "key39": "4BpF6mbAwXPJKoLbT6xSzLzBm7X83QqvjKwbWirrUXPmBzBwxjoFxbVxnq7nCzLd3mcNugTyZfvh3g8hsufJXnpu",
  "key40": "hir6VrH98LCuaYbX9FG3Z6EKhMp9UNPMq6GQ9pe7NWVFeMZS9McBd1MTXmh3EoTE36UEctje98N8yF3Eh6Q7Wpx",
  "key41": "5nEeLbkbRCrFmmioLkzjCtDoQdrckghq645nm6WaDqXMeZdHEM6zTeyYLUe86DMBAGMZhAWJYyHkSnrynqh6Hw3Y",
  "key42": "4y3KVABPbvpZfkKJR3gac6p1LrR91ZLZ4Rta5LLegC6gRFrxY2ArSq5nS88DYovAx9RghvQ9Bc39icLNowWgXgZw",
  "key43": "4SPTHMCnofFEZyQqf73SDUqzZcVeAY2BW1TNQe8xVpt68BSy15TVBhWGYKe45aogTV2oYEySZCvF3ubgMQ9JpbYJ",
  "key44": "4fVFA2bum8aBf8ZEd16VGa9CZqUvipipzs42V6idpjSzDDz7wpVurmGeNAZFsHQwGXjC825vxAZCvPk758vZHeXe",
  "key45": "2js9rkmqQUbocUWLTghrkz4SDwB6t7iUytzX6udBhWEcnH5UFbAyq4L3zb9Sp6xDnBzzyPYXyevktFna7QWHw3qh"
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
