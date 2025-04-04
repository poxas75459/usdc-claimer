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
    "3FAgpe1a2K9xGh6eyZzmU2mesCGSdN46Za8i8xHt7SNAXq9kbXu8b7dtDqdwdxS8uJbfussuLqQ1XSFcoAdFVyVJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hr7rgCFEikgahsXUxzZ8gLRi4CsLrQDBjQy69TtBmbNawf4m7KM3pX9Bw5L2vzFByZVbL3VGVZuvpgQJBaBSk2Q",
  "key1": "5CAHcB1wDCG4BL38UFBrds2uKcaYRKC8ACYhT8rZjDsYNyNdDcq7r1AfpeSqZfWJEEuXAH7ufBRGc62f3MmA1eJZ",
  "key2": "3iAdpRiKErui9vtLibQXJQS16Pyf1HCpjJd74vnh8JoHErJdLXX9yZreKpEfd51vSNdahawDwHh7QViBRaz9ErDd",
  "key3": "3dmfu7R4HKipb9eBMTvCTD3v52b7YuiiKWQktQJ4ppZ8tGzwJWVf8z95jmwFb8dRce6HYpYquLrsvCgN71fVY1kB",
  "key4": "4eRB7x9WuwVoVDoeomKNs4GAevTaDpXChPNDL47KgFs5Bs9bCYjhYEwi6RwGbEKXhQ4eFs6uM6oysxLF2u9fg7sJ",
  "key5": "2rmegW25gL8QQPq1VQHhagwBRjf4ErLVAK2JCWrBuKgCKtNeFpMxApGSrqdLaC96vsHR5DPEneGiAu4CugLPNJcn",
  "key6": "23zDcidGef1zTYqqjceeKHcC9JW1j6qm3iKcQ53SGXuccxPHcjBt9unihqT5QVmvHEvh9D51YamxidPzDCuUsovi",
  "key7": "2Eca5dJzK25ZfhEZ75yzskSEtwFqs2oww1qrydPAhWcRtdDwNNnV77ucQCgyQHkGJ2cvddGftaEzteXvxpqsopoY",
  "key8": "rAke3JRFJM2XeKL3zv4qqCNFD5u6n2EttBddFm3z3qWQBg3fsErpW1PjcCWonffU4wvF7pnur9XV9EZZgx6vMSf",
  "key9": "ih7j6KgpcKeSZeGr8D5rnb6XywoZTHVqf98BofycBqeGBaVX8CzNJsT1GzidWMaMGo5t9xidLSi1i8ANVs1Bzzd",
  "key10": "5jZm9e3mL9pnPYE86vdyJhJ3wUL6dVzeRgyrTPHtk9Dm6fWzbzR3zjgRXUkSGy2KsLXQSGf2cRxGqvoq5UoiSnj7",
  "key11": "3Y93ZRfX6pJcUv5ph6nmXN4i6ec2AFmB5ctHdoGr32iScQq7bb6ycV9oeonqMiHMU3Luem7eeEv5R8HyEah2f1D7",
  "key12": "e9W7KADLYR17LpULCrVYHoXF4aujWJYe7D3H2o7X7x1BQHmH7kHvUMZ39jYGcbMMx8W2dxwkagcZZBPqiXJneoF",
  "key13": "44rgRX1K7G3HRmooD9sySvvzWYfttvGNSGm532kRh2t1FEniTuaUc1bh1zDYLKS56x22eLTYDqFVaW7FuGgJKmgm",
  "key14": "4WeXCAvycjiHYum2zmCMkx9pAum54BrDS9rH4E6bPAcSGfbAJyAhRGs1E2FaoxJBozUBpFr6nY7Y7uEW5FA1Ajgg",
  "key15": "5VZfwp6uYTMqvpdUkmgns7fL8YPK88EGBJGhwWtVABsJSF67EsMB98RAcMMs9pE2qH4XCxWZmbvny2fRETKsjE8p",
  "key16": "DtaTzomhyayLeHedwGZKsys7b5qX6ZgMnjMoCNe7gdEuiEHZqeLk8T9wTszBsvBkCv8PTLS6j1bNDWd7gMEYUeG",
  "key17": "aMjp26gGLE54RXg7fA46fYMHuU7BwX53XR46JGNrrXi8e4B1mvNwTvi6eLdgpNrgatJFBwUTTN2EmmBjkG8RMUu",
  "key18": "5gQEoZXmDVudKYMnp6QhAdE75uHKFycyhBL8qJbvQG8FE4cwGa4pCvofAuwn7rN9GGKFHzY91ZhoCYgNLZHYRQsf",
  "key19": "45hWtMTarK7vP4aoKmt41aKoghVwkvqjA87BFhynBfauKm6Pa3iovhq9QfmpbgRPPLXhanS3rgR3UY3oQXDhhedm",
  "key20": "2teBGkNtMtNDMKvV3NS7a8DbvTiUJcVDuW2T3qEwXn7bW6hCkadTf4cuafyhGeAGTVY3ZNTqmqTTP1Wda3g7y7hC",
  "key21": "CdmuLDbNwPVhCjS9pVKVbqmTzx9PXuXBgxakuoWdMyqs93wJd1a7iJi8sKsm1ddcEQH4WvkoRWyUbxfAS5BExxo",
  "key22": "4acTyj8rLU8LdTGJrB2Npt9BtSrxojnpWqvxnTnmLDJXkU7rh1JjzmKCok4ADtYkcCCFATGPte3hSdctcz1sUvwA",
  "key23": "3qagAKtUPogvNn1dH1EPAevxEqF17zPwPYahMeHBF2x6Qq4xk3TBfzQHGW3QSMC6xNuxNr9yN3GCGMLheb3retPh",
  "key24": "5X5Z6gc2ufPoEUF8nnCvFyzhQE6aHAoAtexfZjmBC26ETJFD6gtDZYA2WJyoP4TMCJCfvQFeRuTnAcMFGmJVNf4P",
  "key25": "WkuCTPygvEfztxYuxQHKfxfjTMMCYTcRkuqwaDTuTmefmmtpz7ycy1ZKuFitr4t7NNRxnQXzDbgzxgBvwup6Vco"
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
