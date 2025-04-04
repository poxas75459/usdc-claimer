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
    "3Ma3XRrmJwyrydYr8CpaCXh7sNcQznUS2vfZ7XG2TxHt2QdvpzWioJph2oaZk2Nw8nyFWTMxyLu9whDK32ySpsgr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p1qpZyL9o96B9sj5XUYTWXCBM9ftcYNYKo6XFTH1rEbCPiodvPxLwJsvmRj1eFXoBhjmdTV3LqXhUC8RxcBZEQh",
  "key1": "4o4npkrGL6SYFyawek9ZrfsremukSLsEsJQjMwcE4usvCZDyEi4dgfkZJ7t6NxKFhPEbCqmvayU3XC5JPujQwn2u",
  "key2": "3L3EHMeGtsyAdLP6JF6tjkFJxiDbpHiPGG1qjkx5nekdcoKDJyDv2RY773sC1WS3jmnonbXgW7N33wCZjosao25N",
  "key3": "4KbwSY7cM1zj3yqtmXfZcwYtpRBnDx74DYr83NkW8vMMskWuCLQ9Vq6qKsHaBWgAz2pWuDbVpuzsRkVvbtW1x7rt",
  "key4": "7PH3JiEE59RP2v2gLMNsSpjoNvhX4eQjtcsAHZcNZyR8thAMLY4s7RN1DT8d3E5k3kc8naN1ANtA7ZZjWVMyVfh",
  "key5": "62DEYDnrD2Vj7zyoTHdgNzBE9tiNjwozVKu6YBAb34S4ynUxd5T7ZkSY1miEp5zRzAQpjsJ4kdhKo5guVTCNagT2",
  "key6": "YqdWQz1JGPShTE14wLFD3n45u1zfM6QwxXau2nserB6rvq7SPWKJCc5kQMBjxpk7LvAQHwpnF8egxtV36zo2qDn",
  "key7": "2ckQwM3mk4VtqPsTMDP25iNauz49Hac2ejdatpanjhDCU6kpupiYk3bKxFhc7rhU6zR2a6c2kH3Y23MY9srmBUio",
  "key8": "4TiYbTuzLQChA4vpVz6RoFF4dPEcwfixw69rff6gj3kgMh4UGptxqtp5JWZAiKNX5ktfg83oiMtzf9uTT2PbveKQ",
  "key9": "3Dux54CAXbZcCP9q8qZRR6wuZorjmn6T8oZfHz38sjBapcQpfVZUh4t33CmWyWpyTagfnYwcQRuH7hz6wZDRiciw",
  "key10": "4jH78b9jK94sF4AwrDsBHXdCA6SrbHomCY3pib2XSQWjGtVHGkzmtcVfjQnfMGR3TyYLX9C6JbqwdBaFkkqpDTn2",
  "key11": "3oBmNmYM3dxDDLtuFpjR2SgVw4chLJ2Z99YhjmRKU9WLQv2nZTk2JvBDUijxKJuBHUCQLjFHJVN59DMtjGfnfE1W",
  "key12": "GBM5qXSr16tU85r4oFV3WEMKo1yVFrRrfK5ip2dyd8WNr6yg6yQVSy4PUq7KG7vvVWMB7wVAGgtbvZL9tknPqdo",
  "key13": "5qgEeWLcH3Zih36Gfu9UbdtMSMtUnxsDTeab86GQKHWApM2VjPMmzpVj1hR9CPTFgbCrMCuBHg33YFgGHqmeJEjk",
  "key14": "3FmWggmHtTEqM4GZWt6qTaac1buK9QboUUPdC7cND5kqFLXkrPARh46b2KT5Exx5gDSbFY2GeM8V3p3HybRw9rAm",
  "key15": "61CaccEST9x8vyoShQKwQh5M3ukXd1HFiQadBxV7Fxp8w3VTmpugSXSsZUBDPGK9YFWBwrr4fuQzUVBZGdVkTdXL",
  "key16": "4BKkwyrkD3wfrykWCjuz5t2xoKR2ZT2XvzgMHZoaozcqzUxSwescxyW54ofE3xYn81i16RRZN5KPDFKKq5ZUY19w",
  "key17": "6esTEJX6Eziie667cFR3RAJrYFhBpgHyzZPSGj6sjKFA7XGAYQnayzMvu6oDGa4mAJkYtQDqjMrKkfgxDQLxuVS",
  "key18": "3waE2WhfzSYRsyjoZnJij2FM6Razr79XLRiR8amJpo24pxAaq8T6Pbdjn4gbKu785KhVmQ8baGJ61wE9Y1xmVPi6",
  "key19": "5YhMoFCWmjTrQ34Bo1488auUmC9A6283C5zwRxs1h1oyLFsA7EYYoQ4aXSY7BuefAEP72wHorS3TPXcRoRZFLJrw",
  "key20": "27BZhYUzxxzCS57jtoJX1mkAtQX1SbfvawLYtxhvcesBamsC2MpRC8VEDWqYB6HxHoag8rcmG2rL1Jwc97m7NRYz",
  "key21": "4HjLp4y3rugJcPsvveH44cYaXSf9sPicWpaMaMHHvnCJ6RTHYpepfigMrUAhCmW9uLx9h7RC8cimJqkfruAmJmim",
  "key22": "5YaKWxcjBzHpBDUkT5L2GTpWppmKiqgj5b9D8cwGhbH6HHS1xSTD7EUPM61dfA3FeYfLhv4TM6cjh4VKeGxkM46N",
  "key23": "pv7aPA8C85WrBbDoy9uaD6BCKqZdNFPy4MyBRXhDUsdRzk4eXHMKs9LdN5WKmG5C9K7m5rFtRFc977NstH2SziR",
  "key24": "27umzeUZAVafEVZVPxjDHsAJTNGRULRTkjKL5j69W4BD9eND6PHmq1Wk373sM7YkYB5iFKSxK5PjZYK8HWkHh98N",
  "key25": "5jnNmnSkJ66fdq6rHVxsxPHX3NBs3xukAaqRKZ2EyqFo4WCLn5nFxEpUPKYoDQinKNXSw3ka5Q4byb2AWTX5JkEh",
  "key26": "3dmNvNz6GAiEAXf7myyHYTaJNUCsCug9V3WnbAUgPxuSNFkPQdkt5Eu6yAZ1ee8eG5rWr4FH3X8uJ7eJdm3yDn4R",
  "key27": "5SwR4WBEfz3mnLPETQ4W8afWips7LR6oAsuL18SpCsKTK4J24gpfB6decAfW7sWcxE1yFkRUvcGPyunMTyYeoL7x",
  "key28": "2ba2PMKDj1mEj4wwL5VaLSmkNQso5eNjyRa8RBUrGA487J4i8cgqA2UuToXFx3MGk6nmcavNtgP8SmxWLoPaVm3J",
  "key29": "2LDc6hxQmXZaSX3V5PgSUgfjdPXcFuqjNg6aviWS9Eb6Nth6tyn5HDta9wpiMkWAB7aaDTL7gccTq6s3qJBCvUFU",
  "key30": "3tcvtqLcvjCh15ASKAGpUfrmdAafzZaJpDxCzX38KLzQVa1F54twrezvBBtkrfyQBMcUdSoXj8RSvCiLZLVe8F4d",
  "key31": "51n8jtCzDuzeu6iaskwP8xwJvQcWbkgU6NuD5AdSv9TMk6s89E9bZnxgRdDwHjfkah6ppEWrujwvKJeHMbUQPjpq",
  "key32": "5Eoz4iZMoiQGxjWAHSJj3kobwWsBkKN2FmgF3vJHN42TVN3THnDoANWeA8bBt5xBjxEVxqxkHicwgRxoPPEmvohh",
  "key33": "jtk54DqkbzCGjj9ncKg3HciYfVVNs5awuzoqCRoxMtQCezXCt6hs3fPD7zwHFvXecapDAec9JsXU5wn7P5kY7kG",
  "key34": "4uxeMMytm8D6fsSQi4Vx8u4bag3UZLJZe8eW5hEngXJs4ZuKv195xab3c5A5g15azJ71v8n1MBCSGerQ9NJaQYR6",
  "key35": "49kvDpkJ8wDugeooZa3MEV35vNc7yQqkZqwYa6UB9M6Gv3s8LEFnUWN4jhtfEPZ5j4bsiufWi38kKwRXydWFa63A",
  "key36": "3yzaZccMbaNq2Xu8HzC4WERTz2AKif9vi6LB6nHFLvqit2dbqGfhyuBfV2wJePSJ1omSK25mNDKQS2BpLZtkQS7b"
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
