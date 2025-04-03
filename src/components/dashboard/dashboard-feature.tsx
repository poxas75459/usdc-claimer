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
    "4EbrYULxfXDrHRJ6snVVLsjmkcxDfBs9KBYTfaP49fhE6TWWopE6q8nVpvZQprAZmEkY9UzRUSyfZscNbBVwBPYv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sKme7wx3wDbxtyvAA5KpXLU4vxTHnWg3cU4k8ky9VicBtcV7VH9fWv5dtMgFUfMHLfBHaHe84gbwVq19jwExGrW",
  "key1": "5tMpwctpuWX6wXoiye5p2JxBioMo5zx3Pv43jaWmZrW9FfjMEA6LpecbRJBK5aQ7rMkJWGhWNFebRJAyiV3Bzwpp",
  "key2": "3FCtV9znSjv3rtVaebPQ693yXKuUSa9YHeTo41S8Y3EtTJ63adKdj4Fs3ybYLJ4r3tbdoKFxBwAFdafBRRkqH6bx",
  "key3": "3sjdMkRurDMmsxsPFSfTf7sKi1oVQmp3QC174xgh6gUMZQQvEVwLkTuHXcryC1bgYu9GsJaEBi1Vn5y9V48pazMq",
  "key4": "2ZZV7BUiEKf9wzx2a3xCWS2QH5WwjaivM1vri3YHCrp1u5pu7x7VJstLiehAfCaztNprFwMDnga7bg7sGZ6pMyeT",
  "key5": "2HpN3PYYaUkSA9NHL4ErP7rBfDEQyLYGR7QJhZx4onToWgAEL7VqcoRg2dsQiiLRn9ykXBzoEqih5E5WqU4trcsU",
  "key6": "5dmcXPug1EudPZ8fqHmuqjFEUaLDQhtN1PnmrbD8tgb1sjmWxD5WY25aqWHP71aZn5XeiVgusJSqTXBGpzJxhgwh",
  "key7": "3aWkbNzNMQ5U6zBubiPEnKtpjCbeq3pthRvGKYT1v3snAEozpfVv1WuQ1EMvpA9qGnT7KJAMtb2ms46PBdt6knX7",
  "key8": "zEikBrdYpgAriSx42f32GverCDF9hqJyG15aGyg7W873fkwu6MwsRjTibyfnJTHWYrLPXYMsq13a1A4M4NzG21n",
  "key9": "2tWezbL6vsPJLh4JtnxgrNdEqgYSRnVMSpg3NJBtFe7vJFbNv7rJcxKNF62Metf6QSVyAxTxZdpmSyforZtHvCJ8",
  "key10": "2zUrK6wMEDSrK6DY8xngUbLTUkPyMWVUH2D7W9wAJkcdP5RGzBU9tw4XJrZ7jH3x9QSXfZRoBTWGyLNadcWBPKwT",
  "key11": "TYjDSaXiM8tQ5N8jBCeLRdLHEjzpr6pv7CQX4bZvijU4ztoUAzcmwAJiYGYvAx3x8Es3ZhPnTLVKxnDAJjX1F2s",
  "key12": "3foENSqmahE6dFsbT9iWeLejBebDaC6aX7N2SvNd8zfSUruB2M6BLDPCatyQr4H9V6HxoxaxQ97mBB8KrfeABKK1",
  "key13": "2DKNvjFp85nY8peu4m4xCiw7onLRDHX2X9giFZaQwhfAeEHffBotKikDihe7VYKFqGi951BqTXF9vHujAGvodtAa",
  "key14": "3HCV7cYzMizyr445PCzCjiVbfuM7qvmrfa97UGzfGDXp8fTf6kRSLEdCa3kXtgUYPkPDTMPBVkDrAxokb6fTjPqL",
  "key15": "5YRHbRE1b76qX7QRE3oYn8NWSR5rGjx54uhNbp5vmjBZ6PKpnpZb42h99pfSnRhepyWACdtTENdEuABRCpgWYD49",
  "key16": "2U6TwTXzWsDrXVmuKwtgvzzVgpG19ziacEmACPxAMjgMNX4nenXTBPVeQhcTtSi7uuxvJyKf2w3C1h4Qy13M94v4",
  "key17": "Mpt6ttcPPq9PNVu7XQHjJAYAAGVm8xAGZWXesV6kfcRGpKz8Fnfkv78UoDZrUsFHzEs9Ad1P467uWx2bi4FXgaW",
  "key18": "BMeVYwHrUAeyvi6FxCXSnSVyHeYgDEcxwGevgbKFTT4Ct24w3P77FaKi3asv7mL6sTdfiWyaDg1XKDWEw6s1YBn",
  "key19": "5s8hARVZUkSyAGNzY65JjVqGePuQVURCJ9UcVFmbxvgCfGxMBqTKxvR8xNXeD5QT7RTm38FBn6UnuqcX3G7azmT3",
  "key20": "3KYHrv8gPyYDJ4HJkEs4PWQi83eaHFt9WSzgQ44NWP2e8cW2cmZwPU6paAF7oSb8AJJMzvWDDE6tv9uUHjq7WdxW",
  "key21": "oW8p18dkRPzXMVCeW8iidBfCmGn8uscKGNSvTDBn5cXAxYT6gVWvYmg55bNemtMrYzQTuvJchq8E42c7aQ16PKT",
  "key22": "66E2MYThTw2ZvKyDHE2CpDiQ1bM9DKEKwVgmr4EXhVdzjutXc72AtG5k3wcXkZkWUhyykMo6fbTxd26dPaK8GQLk",
  "key23": "3n1HTCNdnMDN3vVQeQ9XEUJqW5vgyonDYpzVCavoEyQXR8fDsX2hAEr5nFwovKHEcamJprSNeDMND1Uv7J7vVkfQ",
  "key24": "CEmZf9h3GLma9Yz5Kx5haWs2deofaocS72eNJeV7FBhL62SETudKQUt2ucGSUoe4MEVYtTZRRzGafM5EzzFgrsW"
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
