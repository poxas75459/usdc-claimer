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
    "MSuq9rSeEiKSFtrr7orGHrHH5EYidNLMVxXT8SSXuqbaWBuNd9psPmtaz8BAiPAw8WFfpABUE1AoaqU7ew9LHeJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MqC6uHg5WcpDFyznmpTWBMSrqC6hBMLbKgDycpt2Cj5Umv7fCBtZipAxG4rUEe9NPqYiy13LGJ8ZhEjc7oXVrBB",
  "key1": "2SUiq1V1brxo42BvH3oQ6Y93ucQFjpKtcp9RLGCBFshvW6d2kGgqJqdNWYmFDYpSarGQMNkQzkCDcRuBKqsYRXB6",
  "key2": "4NLMVmzjxg12ArLgNu23rPNmk4kN8XxgLLouNZ8dQ74CH8hP6TTcRovu7SoGsaCYJHxogt2zqDbvvzNBxBmtUcpQ",
  "key3": "Xtt9aWntFhNSGZPs3CdaLWWZzpdW6T64RqhAXipyREZSTBfUWgK1WnjEWWM7yFfFbWtTe2ANaH2D1PcAjuk6ZEM",
  "key4": "2fLtaDresJ8jrfTbStBL2bKEP4ogSk3R55tZwaBgXMugV4g69NZQAixgdiarJN1eU9jfHRFTVM9oVUp3bgGJ3nSV",
  "key5": "4kuK1wbFc3S62STaVUKcdrUYUd9xrQLLAAVyn2CzBDMbrztCDGcCrZa3Kr5xK1jRhLo9xVdwZJ3DPpnMq6XCRDuA",
  "key6": "49D2JmeGisLENfPmMBD6UFs8Y934SAfATSJ2E33c3yXTS5GWhknEhhm5AaY4xF5JvgRF9e1sz5pvBvAxAbxdxVbJ",
  "key7": "2KvBMsTMCD3GHx4TSZC8txj4BRiJ5bJMnBc2N8KyKkxyz63smNsNuy5EH2p2Fhs7YmouhBd94wJo6xnkRS6xTWdb",
  "key8": "4CaZWsRYidRDXfq5yMQ2ZoPRLdPmqfXCFbrCkHyCGiefPNeCUQXNfeSmGQ5Ph99TjmXCgrgQfpgWmFs1FKNzZCYR",
  "key9": "3awZAi7QpU7gXujnU2KzS7jTfJZ5DQw37cS6Y4pWRpimgeKq8rb6LZAXGW7tL9ZS9W8ujDTkxB3FUe9pkqqbmNv4",
  "key10": "26LhNkzQv6yPK2SE99z6A4HJE3e9rzcQxhuF7HQGF8VtqBmFpkLXr8fBELhjCdWSy9Xj4uqXq8WmMckn4XJ965Mo",
  "key11": "5rMBWqAM54bSpq7ACsoE4ec6fb95YZ2QmGuaPpyjyMYMtCifnyLune11VqYMNFmTxo7UQcqCmc9u2ZfB5gGhEa4V",
  "key12": "2Fb8pRs7CaM8BN9z4xz5sb6Y53QtjrtdjBPzYDh5hSAsUKJVFoLUEL6tmkpeib8W1CkbJ9RUNyizFzaQ4QunsRgU",
  "key13": "5E9WSoCCasWV1fiUsyssd9hPf21QJfNB6G6ERVhddYCAuWdHXfeLQ59xoWpzhx4QgVSv2APbWh78HBPcdzs3Xdnn",
  "key14": "3WHSLHoEcL17SoTQ9uK2nAmXDyRipxAC2J5GerGnwSbdMsMkDJvKdhRCVqBT1Nbr8TJJjhBqVhC7j6T3Siuk35x7",
  "key15": "2mDqTEUKnwVnK6hskdq2sVZ14J1Z8gYGADwEuv5TwtyaZVy9Nz7yJ5nHkmHr9HKsTAW7Bb5QCLUsL4A5WbDV7AxK",
  "key16": "3fAtxmGcQcaTjmFMSE6e26CLLj9BcNRxQTXp2mJpWyhJbXzoUydVyu6k9CHXtzBBLByUeohjJufBVP2xUpT664SN",
  "key17": "3M5yVd939b79vpZFiCcpApy8Dm4457hTX28wtWLXd6ezH8JJavdjThSFNcbf9unrYjtpu2Cb2KyqSeE3MQ3biAsw",
  "key18": "2h1XHQqgJFSB566gpUSvM7xnXnLJK7PrLhidhB9sdmR2Kf4hoVVY62xwrRmp9uPvFQCfTF174EZEJwisL4TZExvF",
  "key19": "2z2BawTYmux3yDfRTUnFfxXaVTQgpr5UUFRbGMAEFVXGHoFZUZDQ3EAc4eYTiiJ9XPgKd91KjPh6e6J3nMatP2rf",
  "key20": "2tEftX5MaQxoiQRXxJ3eUY6BykhDVZgV4a3y5XFSaVkgwCP4AXdNsmREEq8viYEJRXLhLLYr21SjxivVJs4H9AWD",
  "key21": "4cpby6sMnPGFbZHB4dP4P4hE7YAdqa6EWassgmvjHXwcQACkxf46Frvj8aoALYaMGYBLz5GhZoxea5AGsPWA5xXU",
  "key22": "jjEKorYTV61Yfuy7nm1JMtMzJKVoDh3rYvZq5BtwZwrdcorERaXTMNr3rSoQVsPZCB9TSFxxdMJyzXBJUxmEMMq",
  "key23": "wBmQ2JejoMqqB5TFux3Z1tnEoPaELBMwS6aYvSW7jJXswusEGFSPuuGfpNKF3bwQ8t9r4nh6TUnT7xtKrNSXmc8",
  "key24": "2n9ctvWKVupna6mMjRLJoDQj7XmbvGdY5Zyt3K497bXh4wJmKZX4AsG6FvqsCW5NMSf2Z14PRhYWzUp9W4VTZFo1",
  "key25": "33ybJ6NuMq2ujRWzdsXztfFBpKXDqeze4xHuJzwiJdk9mwjRJxLLkYKoPAQ7NykyPWof6HQyAgk9QHzz8p2K1rJQ",
  "key26": "5hU6Lr4bYKBNs7FqxPDo4A77rYLC9cU7oue2kd3KCpqHgFs1jXxBqdxzwBfbfsdj6qVYwSrBpkMNG42vQHVCVCDQ",
  "key27": "3wapRE9xDfMk8fnsbg1bGzjP8upxWygLnLF5cx5R6Lze1GioeZjAp7vEeHyXDX7f5oWzLppqttuqGkdS1VuYM2RL",
  "key28": "2SvYn24XSyhEcjs3AfaR6VZLji6F27m8uH8FnrVrZDw2bw7YyCL5bWg6eLnKFMFxueoJHivvE7H3VmEszE69yb4L",
  "key29": "65QyRsLX69epVkzhh22LWnyNesK3hYpPYTNErM1yxVQgg2C4K8B5wfjwiHrCT1FNz7KZHQ2qGEWm1UMhs7mHRFac",
  "key30": "4GSiuDwjYEM7EfKP1ze8xxWtzViyt1xbiEkAu22sthrXW2MGro11UgB7y7hzs6fCLXMpDJUSK9nwredxPbxtNdUc",
  "key31": "4otvrTqi9YHNTDGPFaQfCiasoAfz9gviANF6niBSdwY2wfUj2AgppeQ7f3cTGM9HEFb75xLshZjhs8sVyUa8EKPk",
  "key32": "2u8AVTP1tCqRrjXyCt9ufF6saWAFcpWV331JSieESRuu9qwkv62tq27ZTVLW5w4wxCSaC7vF7wYFGhtfgmtqA6dh",
  "key33": "3UGnXiHtjprBk6BDtjubQfJGcECRujvGzRCWReDMxjKuB6C7prvs8E1KG6hX8e5oHNpEn1wDoPu1jSGG7bXQBHQs",
  "key34": "27UELzwHzudqByEoFxFA5hewXeAD2G4YFUMeSTCsjKXZ8TQYSdYJwtJpLs56RVLN3s8qBjjsMSg2RVf2mL4Kmrtq",
  "key35": "5PYLrvGVAb8vVdRH5fqdNKCvpYVribMu9YmNbYJNqxrqJvoumA7oGfsc1R9Q8GD5qjhLcvRD2fUbvbcTVXniPdhx",
  "key36": "yoCapeecy9tfbHYsPzdbV4qvxWKKdNCHL5U8YFuPNyayeQjcCBT3JAGt1oojYnDL5btUsKcWEffxvKJYi2C4W9N",
  "key37": "2KnQC9k4qpBt5y9bHFeFsZgdVMi7VKE42hgVcxkHvRZnAhxQW6WYcYKS9u2frqYGv8TdEw6mKG2V5xu8uUd8Ts9x"
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
