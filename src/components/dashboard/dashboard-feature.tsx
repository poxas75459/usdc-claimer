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
    "5t5RSP3GCJTFYinbmzdcVoPNXVVBveLJFRedWgDBS4HZLuf2H38SzHyUuRfTzBNWzoBnKp5rgiU39H8EQEoAgbh1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vo3aaTyuzVMGr8eLE1j5a4oJRJh94NiUbRL3tggXYYRtxwHLRjFcerrwcQjSqjSfyE368o5F27tKGjbSdnKBh9V",
  "key1": "4qzkCHXp6eNFbfrvRrmSRF2t9CmpAhF9fHnAfPfR2W6z9bttu7ZXQgGCqGxKs79Fkw7yKcGb9C7vAaSiRVx3BcaY",
  "key2": "675QPPziE3Qcz3oEDQgATCYtZ1e7ovdAqWUJfCitktWL9ZYY9HEzbLqiUDsrrtypCo8tYDpfi2V2hgpQXLANc6VT",
  "key3": "21dm7MdPid3SaCASepD72CbbzqfJDDjsZVP2HTyeQ3kvL5bb8p2wAu238LomMysDGqwQgWUQPNaAZiWWEgG73F15",
  "key4": "3uZfFikM1ueKfdLcKZ4yw4Bg1iGGW1if6JefPxKFQXukwLugaYMKa2jLMZRVr4jmgQDYFMcynKuhBENqDEAjBghg",
  "key5": "5eErwU4DQdG1pn3mxFbQaJUXtaM397VhvVdTmozV8WJdcWPpEFQfDVYuW4RLwPqx8Z3nwYpUHgrKLxJWWrUrvVG7",
  "key6": "24rbZkPkE1macs3sBHYuHx4Eartabw4n2LHt8XYr4dUsaEBybiu8NHgA5x27TvRMxfGqt7YxqnwHimah7QorYaK1",
  "key7": "zH6uXViZEvcQhThBXxTbNDEgd1p2suewhNYqVNVjXk1ZGBNYHjXVHHCxW8fnjGUTZYQhBC1J1WB1XtFM6sMsgWu",
  "key8": "2LHSMkoJ2a2LdJMtHJM3xeqyFBrh2EyxNGn7TLoWMQjcz2nFU7nVrtre4LBkvJfQSYAXZv9XJneBgAuMT2Ye9wHy",
  "key9": "mGKsYtRVzC7nmnpJndbZZUr1xSPywWBkLTkWoZxiXENCLKbTbRAcn6SHBarNvQRZoZ1tVA7aTcGKFsGWnenwZGc",
  "key10": "SEMMj7bYnoJg6jv93mZ4qaUwb99HtiLhFRotQgeUtoumFNKWK2eWmFd47PVdDQrToWydEdCgb8yEit47XqhfzC1",
  "key11": "43iAsW1XatR1GvPyBDw8wo68y7NrfbZihF6WkH8LZAAbYw6zm6krkdNKgdhZHZMPiLTAW3PvjNfoiZVA5Mzy2PJD",
  "key12": "4FVvsjzjpTdBWqjb6AUmychJsR9AWayaA36gR6njFgoa2TCXPpV9qgJoa2WaeFGqcAdXrTtHYgxdZrGK9BcE4d3G",
  "key13": "5BVjSGRqLjEU5E9W7ruGJVcTxqzxksZ7CemoHdPwtSvQ87KA7qtZGNtEk8M96EDbYK3BCqb8xzXXwmqgqR4pbEtg",
  "key14": "3rkJHMU93RaU8Fse89GckRWWgzoG8oYaqcfK4um2jBdtCBWyniL2QUWMZ9Tvvm5o5M7bQkAtpotA1swpnftxMXuW",
  "key15": "JpvgY9VSCTp2Y7raC9NB6nHX5wjKHGy5GaSsyWFjXsv8jyg9DovT7fMEhSZJoQKvfeeNsHyLXHVBGoZm5NTFbXu",
  "key16": "2Aiv4hAzZZRNVG7ZQGTwLAb9N28oZYpxzqf96WEYKcUBsdGwCX3U4iUYzLWmMAadorXxxpiQo6Lug15Gof6pYgzj",
  "key17": "5Kzcoj8aBHXrTPbpPshzbeJ2HEHGNZWT4it1ASc28dDqkDFW6UUFiBmAscmu6pQzUXZG8KFmTYX8NB7dmvkQGJRZ",
  "key18": "4ASTQ59t26Bp7qaY2SjtfquXX6bkzke9qi7mzadmUTB2KeRuHgeMZRYgHoKVt3YYZkigT1yhdw9uuY8LZAZZvXQh",
  "key19": "288xekjReGhXjPFG8C5d6U6sPpPP82kZqBAa2KtRPTwFvTWjsBwQwC1htnZGVjrYQKF87GdsE8XeyqHi3drVsYAK",
  "key20": "4ZMd2BRqhraKc7U7St2AUHmYG3nwG17BvJJ6u5ch4SCGJUUvyBAatKsJbDSzJFmmS8mTJP5nfYqqqYbsbDFCy3HE",
  "key21": "29SQzVRwh4KsskFLPSS1AC2hhMBdz6Y3VPUQwiZMwuLeoT7o1zdnQhc7WwH1baPzDHH3ztyapb7HQtjiAg7SFFbb",
  "key22": "tm76aJUF9vsNqvYB8FCtxuQpL6hffjXTgrJMTzQMwKGBVBAeh3QxbJmBhAFJmg9Lo6hCse1y5ri9YrmxvdEtmiU",
  "key23": "2cm2oquu7XcdKQqBKpWAa8FZsBxSPBSPGh41tA3iGkZFd8V5rjiDtpGz613KD6YgUUxdQCjzkSqJywt17sCLx8nt",
  "key24": "3GQ2fgVVqT7pKd5wzpbpGZdhf5b9n92dMLjDfgQweaP9xipojsmFMhuMZDF1gog2TxwPSU7Rr6mRa7g6iPhQQu6z",
  "key25": "3GYLBhNwXeFsmanmoyb3WL5Nuoduvx84Yv731rT6w9TaCdsrh2C2n7HoZquZdQQzF1nTxU7J2KNjo63ad1VCsQX9",
  "key26": "4cQZWuGHTNPN57SPkwbTyncDcL7WDZJHigur5HqpEUEjmszyFkx9c8tckQi913HuTzqRk82MyaA7cTNeFp6RZmHW",
  "key27": "3wj9A5Sc1q3s7dB4KjJ4N6coEmZWyrk3r1FXM453qD11DX1QhxyNnVAxMdtwTC9TkAnsmmbK3eAgoTm58ZMYXcu3",
  "key28": "w5BY4cDBLk8MmvX4QSGcoyw87fjLdsnJjMTU4PERgtwqR61Cvv5cdUekcyDe244JUNoYB1Dq3m21pCYVobDYT8s",
  "key29": "44F2XFLJcEm33PAR9VUbfNEM9i6qsyeLrM4oNqbXNUtsgN6MBq9riZjyKjiNQ3ug3ot7Ud1qBY4VAzSejNkZMX3x",
  "key30": "639RCQvwfsWCS3UvHF4GJ2ZiFWpQRndx2QNCuUChZzSMTPaGiQAK4ED9m8tz8fUcpJD7ocB3R9AtbkVWvLwRZtdJ",
  "key31": "22PqGBjYE1AtktdeXJFGm9qt7tupTyae8iqE4KJwfXrvnjQT9jTcbh4bypkJqRbzZwRcno9fPNW7RcFzQqFy83t8",
  "key32": "cBQgKYTuMwyerfUoen7Wu1mbfU7MW9JpiuFTLCSCNiXaDYoejX6MH1obM52zTMTWwZB6eJ9PTV4PYEXGcHHGCH9",
  "key33": "5edDnYtyadKMAF5FYCaJoYT7ScuGUwKxQiZY6TyMngsvrMA2spVurFnAjNbkdkvgWB9BisYVqS1f7pQWQxBtbzjC",
  "key34": "2V166GMqSgyqDVLtDzjuG6u48Cw9TW3ve4Edn1hKPoEAexbRTR2Hu8EdaFXPFzNJw3XD8PEEtd4deuobYyS1pdBn",
  "key35": "2dgWcmtTguiLqs6THiMork5e83HrsTXZ4AhXbcsDCtTMjK4vS5KuTbKZNh4HnwNzJngoprHeAVD5AJAEJPQrWGqW",
  "key36": "XwJfaTyvC7TpTmRGQSY7aSEYpu8auuCLRutpHwLF6JsJ8dPdzFDhMzjx2PQMHsLWHeXRj6qACSvPqXTfAssj9GC",
  "key37": "4CueLQ21V9y842ucndKjPkyfxzXbrZdRwoEmU1KcXTY3bz2xNdBZD16CdFPqdakWDGwR1TLY4SpdAhikvsGQQBjf",
  "key38": "2y46G9XXWsPeHLAcqnSx5jsVQeyJY3QNeAeojwhYa7qgDJNjKz6BnK6njEZmnvPo8UXe9Lnd9SSa9Qr97tqdehYd",
  "key39": "Y3E5zxtVRj3KasGi9FiPiDx7yoGXfi4u18Zy7CXqjdTvKD7ERcU5huSvnWfNpPQFQKJXkqrH42gYpXfvvC8Gspn",
  "key40": "3vCYg9zxvP6yUMcRDHmibfzcSQumVKWYjWUqbVTomG2AMUeTCgA8YnAPtXMpJZXEMQMQSVkZ38S3JwML3jEvtRWY",
  "key41": "5TbzTc6n7cR5zSnEfobDa4o6v85k6BSTqvJ2Xm58Ed7ueCZhbF3b3KQDxKotFdtHce9WfBWajRidp4XYHHjFyu6c"
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
