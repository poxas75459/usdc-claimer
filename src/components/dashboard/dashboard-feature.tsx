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
    "1Y2k8ZQWv7CMESrHoNWbDU2C1Bv3VmVnx8q2jeNFGMnXk4vRgayyq9Npn51AUKLzQpcb6Fhdx1bVSXdJXWjUt7Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kNHQo6s1sXxp7bFzi2T2TaEzn58cTPCuuJ6deic6Tz5kEGbdvqFmBMM8CswQtEKE4fseJnXTjVMEd8tHrrBC2dc",
  "key1": "4SwpFct8wEgmcsqsttj2CdwYjzEjh9CbRfRUmaQbr4KuoPMHvEyS2RVyMAW11vVUEJ3uT22xWCNMMst31VeNeqvD",
  "key2": "3ZGsnRBBeisEnWmBGrQtFhsnptdXxNCerzqf8nKjDtnmr3nCJaA1CGQNhuGePAZvXWpwBZyGweMiMqk4kkLfijQ8",
  "key3": "2BTwdvuebnmBqkszV7rQty3FcrcEFeGuj6mH3jZZ5Gns1iFHWcEoWfueW2qQvg6kuHMiJ7huM4mQ43da4xZN4j23",
  "key4": "35K4XbH3MP3znyYujYxeLdejPUXuAkcKixbJ9wh7fRbLCbgDHe2CY71dYd2pKhu25xitv7TjDhKEvPXQZzB5EEBF",
  "key5": "5VAj57k7hpzcbpdwDssByezASGZGNuzvrUQXq7wAASTdL6mY5GxjyPHJfnAPrfYqz78bU4pGd1BU3gTLiVsHM8BV",
  "key6": "4fn1ogjM1sVzrLLehbCV2Pr9zHsE1U2aqs81Q4HpJxCQ1CuXhd7rKbGHiFTW5azFEt8rdJAXMxMXMQ1xkSq3hZ9j",
  "key7": "2r8gLhCDwabfZkZQt6cZwG3TBDwRJjqry1zNPwXWwxxfoqe9nQgwbutVV6YEATztBMyjUzoAhy1N7kNiDUV5bgpf",
  "key8": "3t6f4APe14ChQfv81Mo1up2NVrFGa6WUARKjW5x8qKe2JewTZyJbM64G8YDRK2B5vRNmgkNDRvjAjgiBYSqs6fLW",
  "key9": "55PqH7Twq13R7fVTyvYsGRpKVtgUvPXHWC1yDVZ1GJ16RsX7hh96LXGy1HPwTYUZdepVULDwNWoPi7TgLd58K2MG",
  "key10": "2mEsdmELC1YNh6EH9hbsNN5fx8L9DFYmY5MPAbjnZQLU243NkPd6qPo5AENb9HdWcrJcoDw8FDGEPDFBMPTypduZ",
  "key11": "45uzc8knhkRFYayfHHPZuty31qSsmhAsMmarsBcxZ4jb4zK3Nw672dNBCaE8syTKNhCcCooetoUM9YDwfWDfkaYK",
  "key12": "4LzWCwp9M84ous58zK6JBZPpEYQPqnjkdB6zBPKtFUiy9XtDd2cMrP5AkkKHgF6ydaTb4dmkBuwGyBCRk3ekcm6x",
  "key13": "3D8nwknXYtbBKAd5i1ZBZg5S5Eqs75nZ6kCUHnjTNjzRN3Qwi4HhJCVXBXzsqEKaitc1AYyEU7Anb3Rr9U1uUf8e",
  "key14": "4S2482ssKD8BVDX8i1Y6q4kvAbHB53v6i5PNxG9LeJtsGvUePLNy3GTKJVD7CvGW4gmUts9YEfdBNyYGDAgEwMgc",
  "key15": "GbVaiVDyqC9oLJ2YrsPqLH2uHoFf82dFfk9EnTbH5QktP5FN4nR1P6jTspztkJj63CtGpCMyYjuekg3AtifsCD2",
  "key16": "4wT2nJQU7E9FkojKAEEBsTCPuGc47KAJQ38EmYFpjGHrvhHWS5wBafaRyiGVGzUEf5J8JQnPjAgPq2wbynHRPorM",
  "key17": "1Hv8GQak1hjZSXnahuhtfWNmAuBLN5rW4nHFNsPpoVhTPYSgUsCYKi4Fk6jgJNbXDzrWUzsuCdeg76tfRPYdzvL",
  "key18": "3Lx8MuDHMypaH4tZT4RNt78iPK3VN7jTrGSK8gkjSHx3mY35PdxYwYi1ZTDANzxL1SYCqCtCm75ZSokNYraDWUiJ",
  "key19": "1eqZjAJ2ae5yVvyagg1kfRazkKLtb8q4Y1GcT3sdPW8jR3aFFX7KDBzBMFUrpRBHsKJzzqCwGXbf5BmqnwTJh8H",
  "key20": "2gapx4UAwHHNNLJMLeovQFmXY1xZPXZCa5kUgFtA8syGhqX1MQHj4tYa2QbrTEa7pNVnmTNL53SM1oNBkgRjJLL3",
  "key21": "4M122dbokbGVBYZacgkJJjfPsjCM3UnYhczS3WtrGaX8gAjZh3JBTj9NT5SXpFLiKJsJsWQfQkTXEtkimALrXja4",
  "key22": "5J7b9mcKv8QiqAwaVd8UCe4VBY7zQpVNjML5yNXTzPEfgna9iNZCCZ4oSh6jhXhYnARq3zxQdYvxZ78fqe7N4yXR",
  "key23": "4mkjqLyXJhCjZxv1rKPiK9EJam7EiNFYgeiVFRNN2qKFQHQvKdFE3WeLWJ2q5sLjZKKq8XHSxUxZCRcukSTG9E9L",
  "key24": "3NwPyMaggqVXPfvw5sovqH4DkG76U9X6apcwDWs1WG4XTKtzNmRQoAgaJ5XeWan5dLA87DiSUNA7B7zWCszbunsq",
  "key25": "5SLw6MVgLvXzrgJnu8JMCQTZ4vggyt6VaEre8V8ATMVSs6AywwVpfbtmiGXpK6ckcZUKjyjX2ZpsczzNqBcf8wQN",
  "key26": "5AuvnR5ppgK2XJHHZFdBEQtHmPgURJHVegEdhRFTcesPun7eMx19gBnUvQv9zVQBygtR2H7Y7wtgkVVEnbUWnshd",
  "key27": "4gpBcuS772Cyoe3rwhYWz1BXaZxTw4i2YXswpA1SCZGx7Bbv224AvVyWkDDRXCUGXVqnBENzQtMaGfMCLaY2ZNQt",
  "key28": "5d8UU4RKJRUMkK6un3hZrEmj856qduaBXxqHP7ixsFRcNZTHtqYgBf2rHVfNq3LxsouHbGjaHrNENwPqGYYuzcMF",
  "key29": "2TofACCd8k2ebFe1GL7k6CmLNEYfWd1fUP9MbWV24xc2gSkfd6RKxBK7z3QT33pcnxDGqrPvFrvcNmhrBWcngox9",
  "key30": "58YpEnbCes89K3RCokmmZoC7S9GrnCRvq6Xt6W8HymfhW74f3EoVgNsfxSn16q8dEkoGaKEpqZ4cAaHvKmyYdLeF"
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
