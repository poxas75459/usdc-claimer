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
    "26m5hHHqgcrYRphK1ioY8GUKTwvMm6gfmRRVANXs54Laj51kLjPcQHEj5fSfGNkBQ8xByNRU6zPZezbnFGqTYbxy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JUYhesVdRmG41DsradBbktddHiLsbiXsDEhSUBwzzaKDv9Wwdpd2wg6veWKLZH5UmYrzv4skJoasQZ2nFHdqi89",
  "key1": "3mh5CP5MEiKaufb5jY9ues6LePWQ6QnfLMDdwjCuP43D3GrgDU8kAvbAmN48fHrWVeNXCAd6RZuuxYVCBFrdiSi3",
  "key2": "4HfuekegbyttpSRWSv1Ek31yqPbeJE35k2hnsq1fGBqFxHmvNfHKbg3x9x4PE9df3UTPL8HtLvRhn2AeJE9fubfY",
  "key3": "3RrM7f5zYvKLoGe6C9Vj3tdZE4wxoskZ9ouV2qTL63ajsTG5caxZF9KjUmdXnJryo6hWnZce5XXfLpmvNwU8Rjxw",
  "key4": "wzivSd97XgMnCsc3C18vgu8nufjuodkbkYU4J7Qxc8XfBhmKWYQFsW4Dkynn6468UjD93yeWoV8sQLFFEW4mfjt",
  "key5": "BWxGuqF8tZjFPKxVcbDFp99jFkXh51LwjXMXyAgaor9PbamqW2Lzu8ZMpu2Dsqqwc9Ad1pnL2y2pz11sSkiApth",
  "key6": "2MmC286aRTbjFdn2xtx3gwHk1RL5Mgu71fRkDiYAijKwtdpNCUyMFY4jjwTHvV1x94mQpxeSy8J7gHRs2mW4rEGP",
  "key7": "5v7P38zuQvQveiaXR86DqmKPtPbsEGceUuEtHUCoXQNNa2GnFYpiQ7qpbP3hLhvQwD9F8kJsqS1W3jKM4bJd2r1e",
  "key8": "3Q3mpM7sQ5GZD1u6eJTzG68NX3tdzPZszZbya6ruXSCSGCYx54qyczwvoac7y7E4jwmDrtSYGTP6JsPrfbiLh4x4",
  "key9": "623TAYzi2cCSEanpgBT6tC6ZfVvMEKjkU5MU8DQBmnwfCSRZ2KJ2BAku332vdxQL4xTfRFXvPE2cMWW4MmAQGZd2",
  "key10": "5yS9EF79irJGRAwSTm5kAKbqDgLU8na9wwRjQqgexXPF5ZBuDqWBCJXShYYDi4D5FnKtJfZuJuJ3oJsW1AWV4jVU",
  "key11": "3XP5P1Eeb5ANDM3qsvanipuYYuuS1SMtW8qpX6fkzuSfW4RaAiyPSdRTGVTgBN2XLth6bz1hBFZkmhDc7A94xn2o",
  "key12": "2BCEbiy4WZFcdBJJVPpEdAi4uBsZnqG5rCFBaM9JV2iYz3vZbBdCUh3asiYvj31Mo6ftbucgCvYKWiPgCpmZsk8z",
  "key13": "mZPVq7En3FXb6Ru59w5xSvUuJrHNWuYYtgaXEd1HgofDqHyjsucB4bKBu3FUS7NBT94uH9TthRT4fTeg1WxwH1a",
  "key14": "3qEkzKBcCVGxWBMmXSXcYacK9rLmGy395J8v4YacjcavdV2YVqxjYgEr63bP1aHLpBnniyP4qyTWML2m5MpDxyzV",
  "key15": "55DvUFJemVxZo9rxReoxgZDouS5LnbjKV8LCgjvGprwgC7yAwrM3e9LmUKCwSGr1m837ehyG2x4ZhiEjtFYKEe6y",
  "key16": "dxgARnzMj4zdqeGPkPenKpm47r2WRDgdq7gEAryMg8zU2J6tUefiKnJNUjcnDzaBqoeFafG6Uq8AMW2Czx6yKuM",
  "key17": "4KidcVrvLkTXnb5Kz7D75ddiLpMwfLfdosUGEefF2eG5QWAa5fcB3db36BTZxmJzoRmZNPGitKKzZBM6NCibXL39",
  "key18": "4ykfuEVNEqCR6Akp234e2nYpidNCdMjV8pz7hkKGPQVWMhGqtrqPX6EEtDs3Zu6qwNtCDzQdzovSrmCowQWAoGSg",
  "key19": "AcztFqmEaYr9oP2ve9fFpuRs8U1RpZ45FTuRSbTukFzuBugRCpfYtAtHTaTqxrztkM3LpNHg7N2xvd1vBt5bXM7",
  "key20": "2d8MBqACCnQ8cQVkptq4tkgXUCFrwohvhCxMh4rRhRqtUzyiUfM2C63JsXYbZRsuzcw7CYynrRHetVcqPWkvTJ8E",
  "key21": "EDWmwPwrCz9ArtfRPiJWBGGqXD1MoZsjRxr8fYJoUFA9FRAgfYc6DDU1UdrNGtapoG6htskS8u1GHvzPNyMB3Nh",
  "key22": "3EkXNp6e5J3XYE6dBJfDyzNShGgCgEtSg38gx2S9QMM9Dg7xtigo7havT1nwxXQ41Vj1Ncg7DCGF9fpiyrXipwuz",
  "key23": "DyTQM3DXVheqwT9ph2XknyGJWk51QfCHvykUemtcZvwAZtksECwtRiFybQaSp7euphSiyhAr75QW5mnYXLD2hHL",
  "key24": "3keFrhs4kEXNKBbDtVVnx6yr6braKkAdVuzpD1kuhf1VS1RRwEHn2p4sD9zSJ8k8S1zthdGr1m8FYMAPbsACnBzw",
  "key25": "2urbPpu3thq4n9gbbBQD1tzvRkqSSKvH9ju2MLoQs5HdzGx5ihRHDmsH1Vwd1kxxcPKSkNMf6BxLTHxkTmpaojMQ",
  "key26": "4oc4Mn7eCGWMoTNK12BHFFat8HvqfXf8pC3QVYjAGyGEL3YyiuNoGWyyw8MH6t2Q4ZVSs4wQpcqLw3q5W5D8FaaA",
  "key27": "nwEuJziwYpfUZNHtHCvbrBu2Ctx7LCk5zA6Baz8nsW4czaG32tt79WP7rSUsiB7GdqtBCDAmEjENet4Gsita8MY",
  "key28": "66vuNPkSxGEFWhkEUBrkbCwJNVSrLTmcU5FpSvVxSB1jLyVnWDcHFAjYttbN4cX6XhZ6v6SmVQD4ys8U1qbEGhpa",
  "key29": "28vWm88856sjBCuDpcqF3kEPsUnXhsj9XeosLCfHRBqA6AyWkyPXmEc8RJzosp5xRp3QUMtdZ2ykDffJMWafWWWv",
  "key30": "4yFcBBy9YAVDex8JN34jmZzH1cNNtiZxkihzf8HW1RKbzaMv2E1TeVz93gUPkiZULJoAyr4fLV1NAmcLtLYb2XGu",
  "key31": "2CSwBiANUGDWvTNDNGf49RC5e3NUdgsYPzXYJZW3MVksPt4biBgodq4RNt5zPziumAgFH9UtJbKw5nwoHktQjCPo"
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
