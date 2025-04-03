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
    "2xXD6jyPfw9SH12LTLYDd4sJnQqMrvMDr1URsghy435YbQFa2XGPan6wHurBTT8DGhFS5YAwJFMu3NMEpVTY34YD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uUtiBMPMKcXjDMPGQfCnPDrANrxj8AMindPbYbNW634Pw3y9fXrti4aGkEqJTY8iu2wcgsDArksn88jPKxtfJCH",
  "key1": "3HcJ56H9uKHvDQQ11a3M8ZzKAPv5N15af4mUqaM3vz7MVRafAmcKWVnTWQfYznnU7bhockB7doKRW9jMbe4F2oSH",
  "key2": "nmpVd6D1tVyvy9by9vv9nnYGWsubLrU2NCRu3q6ZP7KeFRdgEAs4qcsXhicwRW64UBjti9TgAmUR2791x1xRHCG",
  "key3": "ezz8WyEsW62fMUMDGechez6j59f8gdvD7TKMVeqoYYQcDXjUtJ5az1Cmf9NBRiGsaPy3JAneFDzvYfZuKkhHfwm",
  "key4": "uG7gzLTUo2jopgFjKQNFRFXjN1NzoDrBCDx5ZsVaFVAqi1YyTUNn7jwKxs453e4qLUvAS8ypgPntMpQUY1wuhnL",
  "key5": "3vUCXtMDrbdhBtsdZ4cT5v2Vs2CUbMfnxgBT6ffGquKfpPwBU6iYVxmCotdsjvjM6MwDEEm25xjYY3FJFUPvfKoe",
  "key6": "4rugkLbiAY7NNoCJEeiUdz7nvMBbWLwbH8z83Gk6Py1DnJvPtkxApyZpKSGzTQs8ofRY4iDj9FuRQ1PMnCQPPYPa",
  "key7": "5EQf3rL7qARjQQKzUW4PxKYFEAW9KBTxSYH6hHM5FnDiwk4gxdyxWxhxFrL8xJE1UAFBHuKegnkdBkCJ3CFGM6pj",
  "key8": "4Xf5vtpf6AMWycftagecXhh8BV76672R2VFpYpgdHSoXSAHmrTddeHHish6xAwLUNMweL74Y9kQefP3hE63VYJba",
  "key9": "3q6x4xkwv4t3cUF1Z9b8vUKjgEohoeHsrtmQDPxTwpxkExPVppAu45HYBwxm6aNQrKWugqGWuSYn6BwNTe5gx24c",
  "key10": "2NKZKo4zCXQRLxUwziJqR2MWmAmhgz9rGHsh3otJ7nxN3q1dy8UGyqnkvgNXiy716X36Mkk1UAnHYciKV9s6kGvf",
  "key11": "2T5DkjJ1ekJKevTUFoPiMx1P8sqRXpgWqhq3C7YuQ4mcoFHd2pqv7qp56DRPF1q5i6pcx6ryjAnGJKHmwPvNjVjJ",
  "key12": "511a4GPZAgzfRskTBU8AQ8xM2sAzP5vK7YTC46EGJJoBP6w8ugdnKwGE21JZ2JSk8zrBY6hHk1CQijfingRshtsD",
  "key13": "3JDuvotYwfEiZ5eSMwNd1FKCTSWhwFbnKdCv4hKg3xY2dmyV5GpYtSgeqbAaFnFPopoqbpCN43kssSSMPPpCeBL6",
  "key14": "4SPpKwfin1zianY6kPt58yjhWsQPHGsMxFkzzEvmRxRykszgW9NtfeRJfyWT1w5BKGHqDEheGgcM1b6aFZuLT9og",
  "key15": "4FuxLESgNoUFd8VF5RipcDu1ZLE6mRCGW9C5hQiDPhHJzgMDE2jzkMrsK7mh4dpvwDo5v48YBkF4CN28jtJjcsRD",
  "key16": "3xEDBrGeFzuMA4sq69nw3yTJjrpvZEyXATvJTUmSy4NWk1LG6F2dh7UPQ8dgHS3MMWW2RXp7pQeaT4tWqqDJ5uGP",
  "key17": "5Pacin5dLAF14wCwC9vHQ2CwEPLQYVYbs1Qdrgnbt5pDkDAVDJfVYpMucin9LdiGuczREHbFEJzWjgtNdLaHzYCm",
  "key18": "5ggwx2wZwPs6rc25Kabba7AzrqjZUkvfr1Aqj3RUYe9qhf6A4jr4Pqpvvhv3A8baWwLak4H85uKjwz1dFmc1b58j",
  "key19": "uizs5b18zdU7B5kbXWRKRq34wecaYegY9xco8pi4k3kNE4F77acJgatkhtYiWQcZZUqeYSsRJ9SZeGjtszBjgqc",
  "key20": "ccXkf6LHhjuxXRvSNXQqGJb5C9cZKszLscXbnYNMmkbnxuj5AYhvej9JRY6LyXuNy7Fmw7CQu2SKZrwZNM4jEDv",
  "key21": "f3oWAXRqpkDYd9on3RjUa2z5CpYHfhNZ6ukrzRurNkpjqMp6cT4BknV3WK1t5pq4mciLzfS5fPxtCNHVE6xXf3B",
  "key22": "2G8mVEYfhj77PjWSFw2VoA4P2vtWqqi23GRxf5XsgsozJr4JmXZx6ULZ3PRvNaBn4LearEj8fazGcmpD6H2e13V6",
  "key23": "53tVzfj3aenQDqy66zLVshPbztPv9QZPjFowhuLpF6ZVLT6RaEWKFZb7jYQca1pvmVSyT4YtgsJXGEyWoDNtBZPY",
  "key24": "5L21u6JbD6fBTNg6fjWviUttivzKiSNHM4GwXXN1tgwRZc7WFvHGV59z4FtNAKSmhk2yNVud3eJbegbk5C7QSrGh",
  "key25": "3RrxThogErmiwmFPQRTMXJnpaNUjkj4nm1i9HZw7RZZHimYo8WYAJEaNFpEo2RhTNCALWgKG9KkW5dVkvyTVtn45",
  "key26": "56hwHRnjpiQPhx4Vsou5Lkmmw1hSgdDf6EyxjoRR4k7i1tNtq19Wsp8ocFNST6f8fLaMy6KtNLCXzbxqTd1TdzEY",
  "key27": "4BJsd3nQYnDtSR4jpYQ2tXrfBHxHKQvE2QGry8DZnUUXcGVJNAPz419fBpxQymzGd9oUsbnXGBMWHz8L2UpTRVc3",
  "key28": "y2ddDkjaFKYddwBkudm3UPot6cYt7sfya1wH5vLQpbWfMkMgG1gVf6fesaCUdJazy9LujgaXnVKfLj9G8dnyGms"
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
