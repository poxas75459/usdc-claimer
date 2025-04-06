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
    "1mm79RQqw99sQTBgLNKZ4pA66xdqNmPdHKN4xN6347RMcUybrqoyvaNywj8QtAMLn3gtCPUkvtVxbKdws7uYzXK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QTse84PZA36ryGHftAukw8D9iidXHXjEAwoZUwXnnh3oQ5GuZJP47S8FzjACZkASbckPc8v153fN4mdEu3CxsHA",
  "key1": "4iy9pdx2SDwbAD4WULUvHw8QsVAynZt2MxCcPjrrgWQrXi4YbNesVHF1T5EXcEz4sFRTCgNToQp4qrFwwVKuAgA5",
  "key2": "rK2YUYtH9GMNwTjvURFVE2ArGKyH6dyBhNnLcd1FWq9X3AubdZ5wStirQPcSnBgxoLpjfeKv9icXKVue7w1w1LF",
  "key3": "4JLzu782FJF1PTGddstvyL2wvaqmSszhhJpvgYkLYGZtMtQwPr1WdFZZKwHQ7AsMSLjG91MBzQHjK4zDHacqE9Je",
  "key4": "5FqwX87NrJvnKZRR7thmaJQubE1mGamK8eLStYRgdDSD8xkKup1i4Ug3C9mohZV6zDLGx5m3bQBceWpTEdkSK4V7",
  "key5": "65383Tz9mWqBZPSJMdSc8QmmLwzTH1LawWvx5tUdsQtGDdsmdV9CtmnREFjk7ZgLi11W968BYHsCeQpeoV37tCM3",
  "key6": "bmWNVCXutmQtSbLQUpVoDztjA4LHBM56z874JViWDSYJ8JwkUTcNAGpB8LaG6XgoMAzJeWeqKBRPwT6dRSfn2SX",
  "key7": "NEX42GUF5wUf6FjFkxjm99P1DWt7DguPXQ6vy1ankhstHTAtWoUkijYQY5cXUuNnPN27UqUhhLa3Xhqbo87uGVM",
  "key8": "dwNHJRNjTkmoKRAJ3hrm2A6pgCaF2dLdk7qrzrzBAJ9teWmL4VzR4Mqxi4aVukBo7DYbx2nC65A6CG9LSCeu6Wi",
  "key9": "5fcGNVT1RkC8D5PuNSb6Px7zXF47eW4Eq3qg1kLaLPqyWbzxA5DXo57erV9qDR2WkVihs4g3hRtwudLiKCQGbq6p",
  "key10": "49CDPw7NzSLzP4YqCFx9bnLYwNiLHebV5nrp4Bpd94TNiYRUEX6AsoxvEmUkZhXBRzWuZZCvviJu3P25tZ17L6Kp",
  "key11": "37aHkVwFraCEyYpz6UKKBUeSKTubkRHFtWgNz61PxNcMn9Y57WK1WXbVJNLdgauRh2NRskLsMXVWr8BALexpjk6V",
  "key12": "5dX6zHnpAM6qwijNHX3VZBUvxneLojAkzDMwL9iPgA4xzozeTcfAgNVgdNbMkbpRGRLK1LhN3XXKbcECgsCvh3QU",
  "key13": "5pmaWsEfyGV6E6R6HwapqqU6jdcpUiBnZ2YufrNoRSd4LaFXXj5AwUuS78Z76eTSr7jK5AfCheH6DXoomrHoCWvY",
  "key14": "5AMMBoqsTHdN2jHmU8YgmcC1UG83Jdm4HRe4Cf1Xk1KXmXPm6sZK4HvGdBxhK9jZ8ANtmtjXWHo2uPyHZouS6LLy",
  "key15": "4XHzs8R8mft8xe1v9wonijvHHDrW8iwpEVbCL8iwAxqcaFETsvXRuUMA2GK5k1x6m76xGD44fBVnLBJpzEMTTPdp",
  "key16": "5cEow6iA3U3wcajwEp9aiG8neFGJMU1pSFKC8rzr5cozQRMZP6Sy5XTNxUZAdeGZvXwApw6fM2bYVBSTiLxJBjPL",
  "key17": "3oorBD76Q5DnCwxeD6isqY61vxi2xRrJYUbWesHohGkvHKUVZvyQEYGUwmYAG5UBmJ9GNvBWNZhodY9UntymydYo",
  "key18": "3gGhxaXLKPoFSwjkw1agb9BqyRRBmEYrjNqrU7GfiS7PcWuVdfVs47MDCA1vSDvTrs8ZedXsR5vLs1PrEsztyeEH",
  "key19": "Guxtzu1zeRd8ZPnPZW6n5xW3EkcLoxV1dc93Sv6tCpjEtsCnMae9X2344Qwu2efKjmrPEj5h8y19rZewgWqUoR5",
  "key20": "5QUZKouov1Tp2urgnnWMAzJYGXKo4S3SA81gHKbFCtoA9cfZsvTWFRhMFb9rxj5dGYeVhwb6H6ymK4KbHp5RMrGt",
  "key21": "5UHuM7pXSavyo77BXivk9pnhhykcpndM3jdc2QDM4X1M9eZEjehRQFWSVxXFmMETgXKM5gy7mxkhbDMCHLBQNWeY",
  "key22": "34S6c2xo8nJZqqNpBkixxmihYXwHUuaoeTcxvZFCwLV4Z4hZ3TG6CmMogLsvQDv2TqYSDUq27Z8XYaWSpJePGDP4",
  "key23": "6773JjuSmJGLyt2Y2nxcKk8S1vf4YTQPiQZmD52Ly9CXWgHFac3oUGQawdfHv9UDN6aXw5XDGEBtcmrcHQq6RmHn",
  "key24": "43Foame1LzhuQHYkBR1hK4ZWCgsbdZUn7SjKrXVXLsW2EMiLmxu2nRuhk7YXSzxVFZ5ekhqrqpEmhfhZXHNyaUFk"
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
