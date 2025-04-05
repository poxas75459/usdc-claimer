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
    "Pq47Bbwd9uZhFG42v62nJx26St4JAoZUiNEthQ52D4MmBfLNixKm8jF4NSgAXQwLv6zp7gG4ouYmaJAyvGHS1uG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H1VaFD5WbHfd7E6XJ1gbV9CdAFLMNhxMJVRmSVa5mE3oMAKpqsvw4jbF1GTnQmNhsL1MfCTf3CvNE188PQzRG8b",
  "key1": "3cqqXp9Us5nxjgWCtewy8RTgQwvbKyyrv1TUJBrvtGSDePrnaSQCDnn19gzLfZD7Er4DX89AbYCMkAP9wj5fKW8Z",
  "key2": "4VJJsRYeaN1A8457EPmDgjXrxBm1zxYqh7kV7dZNb4maDEJ65mCDdL1aL7NWUENSLgDMUqsgJsBkHb2LKWW23rXV",
  "key3": "66uzKcgsUWBHMf53ihno8dbhbuShQn4v5yZYUpDEP6LEYWs7KjnpZ1PyrBV2Vv1C9SwtCJ1WVtKZ5odKK8T5UDR6",
  "key4": "44mzoqryi8ZETaP7uxwHWCYUuBysi33tbB3X4wa6gGs2Nafp6sJxYxx2krZxUk5rnwopCTbKd99fqQ7EKp9aDzP5",
  "key5": "2qBMKjfTJCRb4XpjwuzbxzqBT6gAUV4HL7LRyPMzgWq17x1KtHf1EY4ksUkEMfJEiJNG7fFcAYmRm7H8bdRkkWJd",
  "key6": "4rsyhaKQ17yfsC1DdLZF5GuPhzTDGyET1dqf3H8nTvyaJrRvkQHfNPCc2UazN3kpJWv4yAX4jUQ5Mbv9jmDgJxb9",
  "key7": "2XJ3rFbwMQcJpdTNyNCCcggFQCUonEacoU7vbhtyadrVzs8xsc2VZQtDrgxraRcRDpAjypnogHjF6mesBr39wpGW",
  "key8": "AtVfXWHRq1ckEERPRVM2dMKpvn9zCC5KYV9Kqhiz2FLb2oMN9ZEsvZhcFcuNaGj28ENQmW3AmzbnWhtRxSbvhnL",
  "key9": "2rKyN3uyNviukemfdEGKVz6Y9EpTxEncfw6bWJhTYqEzoSoWqoyJJ15ENUjefRb7PzRYCmJYHujYpDa1Gfc4dkEv",
  "key10": "2eWBwgtjM9pSbTQPuQzudwnenD1hyhVpkKMp8nhe2FQdQybok6B3f5cLeY7XBgrGuRBnupDWNqgZ1sSSxUdPz7n7",
  "key11": "r9cSPEDGbrKUjFhU67ZJLdbvxJffVn81CAWw4ScJ8hRku4Yby1fZnkf3LXV3EdCmF6LgYhLBSvUqhqfGRLfCyri",
  "key12": "2gtQUBpVFGG3HZvaxZUQ7QZV9VtdGgKjjxMXJ8rSr8j5e2s5VkGQm6GLkgAP1N6rFq9wepC6FrdyFfVbhjG1NC1P",
  "key13": "3JW85Zsf6qvhAJGCT4KYVT5Z4PMfKqfeyxApDfZFs7GPqPU7kFkoucev27AKXYbC2tkXECFGeqY2JvFjGmxXKMU1",
  "key14": "t5ESCZ4E5nHbQSLUiajVmkN3rfwjiWVeQkA6ALttz7QRMcHLGVWrPXLfvpZQzD4K26yVQAx1RKFkPQBekLgu8bc",
  "key15": "44GEXBF25BzRXrt5KAqRyNcEonSSv3aT4TiEFsNTfRwn5K4jj5NneeAx2EMQvYbRVE7dnYFecyTHe9boz6tbHXHs",
  "key16": "56DWVM14oyvGvWS1UMeQxM4y3G4qowSY791z4L16T3WqHqQFvAhWRLVJJnyRHmQUW3Pwu5Wde2oZNZHnt8vxn8qJ",
  "key17": "4SoUWV87P6LuUoDs94PSHLtNNiPPFpdRXCL7v4bm5wJxAc2RCgjBwv4QcDtYvYwnSAPaEQbECH4jY5ZZEw8FXUR9",
  "key18": "2xAgKGmfDAeHTzKox7LSMhwoJ8DPiiz6VHNVDzdJAgy65EZJ1broJDScAdLHNDEQxYN39obtwSCyk2LZaicMk1oJ",
  "key19": "5FrUmVn1evzXV3FTXxreZtbycSoCDSrxehAvy3TNv8922vPhhaaxNUZq6tbNismPZxUS9qvL76pN6BqNUmuCEWof",
  "key20": "41mqvBgNoRosTGykGmtWqVE6zczbzotrHoRJCrw6nKDFGazcnij1phNRDnJDr9XyYyfXirTwNxSEfT6LomdjEj2",
  "key21": "3CimBkZYhaxia2XGShjEnawXAohv2RayDpFUQNjN5ULKTjNTgucGjbPk7Vnjd4SBPXvmyvUvLjSF8BWeHBYxn2Mi",
  "key22": "GodfZa9FqYGRNmzY75qmQiJEMo1DWNNmyUXq2eqNAe8BXCsVPp5eiMtbeXFd8FZjCXwStuY9o2Dg9bWM1GE9qVe",
  "key23": "2s5DgqDLUDw1soNYd7cC9haLEzQr7PWiyM5vdsYutQB2pD1HcypYTCwHBhz3JaGtPCSNuyUhKE5Hh2M5cQmtSmkA",
  "key24": "2YV8HfpUaN25q7Zg93zYAq96KiJVTTdeof2j1MoJw7tqUo3VvLvi2AqNuKCWya4k7Y4TudLpWoDEsEYGSDksegVq",
  "key25": "3DFNmayZDfKtBfmFUsSPB4PDv1x9DpyAAXS59AYJ7tKT5wMbpfo1twxZCurcayQReCCCqSYCrnHXuvfU7pBt2ASE",
  "key26": "5AxXM1dfGMKhoE2FFmvZtRcqAUWPMXQA2eqVBN5wfwMbkUk1YBvFtcc7LLLzh9CmeNb2kBUT2xZ8K5Jaju8YVm75",
  "key27": "4rZpDW8aKNn9fftfxa5r25x3yqoCkf7fJcK3RwViUwHoGYeKaiH3XRtVAfnv6LtRuB9gHEpQMtrmTM9J4EhsHzL4",
  "key28": "32xGf8tD71vjGLhXbrP694Vs8ya4rbWP2wcCtVwXX86BwErdz1fnW6XiWrWwrT2z9zEQ6iLswkSpWbq8VhcBiKSb",
  "key29": "u3v9DjMSnWyXCbdADsEEs32uGsqmmqVgjMCKJeLZEMm8dz7qZHaF5t9vp5GUUMZiLZ7BrxKF3Km4d5rsULNMNpY",
  "key30": "4veXoTHQP6JuEbYZpysYXhe9BK1LhoCb8TfHg9rLQERCbsxMLLcwuN1e7KMe9zEe9woCC3F8at5PjvNgMwH9iYJT"
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
