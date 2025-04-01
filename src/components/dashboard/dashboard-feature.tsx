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
    "5jRwh8hNikFiPP6TCPFXdNZzkd88XZsdnRjWKvTWLPHKr1cBChgACKPnLC4qBHY7oinPfGwWnqfwkY4zmXfWhhUs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PHcLjtQ6jeEZ6Z9ZVrnSBpDgi5JatA3bNk3dxxUk975QqNmb5hQGW9skfZoGwueoJkH1Z91boCMAmiedRtm9MjR",
  "key1": "2ujYebz1GydtdZCpETMokxUnf2tgNjD7yCLEbRnDGE8ychKvurrQR9cYpN9nBGzgCy8qfN1rbepjsAFpz3nib5Rd",
  "key2": "5HgsEg438zmzfogUrEWkyEBpmrhUzeEa1Zm6aLtGi2Y5kHoJMphyuPtQJMtWEDaE3rQxuecWgFW9t3QP2sEa9PKG",
  "key3": "WZuYd7QGJtbUAirwRUME8ZtH4Hk4u34U1Aez21gdCmXzRJUCNa6d9v5szNtmeM4QAbQYUS3TXYEw85S14FnZFEU",
  "key4": "61bZwDKPsisbfRPU5FxTk4ktwx2Mkgust7Wbm39AfBK2pMeQaE3GZD9HZJ9KCkuAMDaGcdrCLXqr7EbZAZYZwD4w",
  "key5": "33Npxk62DEuh72tGbbGTsEKpbHQ1oJZ5UU8twwfywRXntTVMAs4axgJWm7QTNpnDm4UeJDngvrVnuhHiUXEzXgKz",
  "key6": "5gQBGEGQmUF42X2oqJntjtfjFgrA8a8Si47LJG8ZUK7n6JptcVYyo4P6RKYDZDjUNErh6BRjEoFN6q6sjVDrCvoa",
  "key7": "3UBvgbNQ18ch2h897TzJE99y7FfSDSKStQRJJofbfnuFua4onsbf4iUmAgW83LLaYpMuMVLHQC6YHikcsJ9ku55L",
  "key8": "4eWKFJjkzGtHUCegTTXBLGUUSJ7zh4suGWYqjyzm71LowrM47UiNqxbypdntyjNDQ9y7JrbijqgQutMU1kYSgofD",
  "key9": "4nXUmtyqYeugJgaRegDLgoSEgT9wn3tS1sJTN1nwwpF2F6MWbsqUbKCTJaZZC5nQh7jjWqkLa2LuxzQmbmcYj7Jx",
  "key10": "2uNv1S68FEzuHHoMChZU786KpeVPw5i1jcYXT1PgHX1XNLpwGhyFKd2J3B3dZ6fTdrvstwUeHRXfK1iSvBMwFguD",
  "key11": "2JZ81sRU8aRor3jseyKJgwbXX8Cx9qhoWWJhsS4yqok5Gp9e5nxyWp6pEq7bHKiAjHCnXh7UFAefrw6WC48pPtww",
  "key12": "5V2p3cqxUPARbiTBgULvHtqbTXn6hbtwZbCRpBcewrtJFNBNqaDmJzgavYc5GiY5eMeSJ5QPdggWWU5fxEo95jZW",
  "key13": "2trJJQ9BQBzDV2mrL6rYwbWXt8C79krnbdwTCbj7ygBvNGHtvff15KqqWnfZ48AzwDd5RyctahgxAdSBSiupZGJG",
  "key14": "2y2ZgoHevnf3JSKFh8KgCBt7gxonjthNVmVLTw6uFDgEYqTHYe1oYEyGt87R96rFEv6HK7QKkH8T5RiUAt3v8PMG",
  "key15": "3ssNYbLA1GRZRZDFhBod9t3qiM5idAJbq516iKPV1vfmC9vAZ2KjrFXZmfSYtRDkX9b9QLHBk9Pi98vhzMr9WsR5",
  "key16": "5Ye8M7muJdTzBAKgLYYWYCTYxcrggXPcJwcRUE6Sxd7UakJkFsV4Bh52Aj1G9qEHVWwCBC3EYu1eh6B2cUHPqsTR",
  "key17": "zvuj9KrYV8Y9jvRAymcYenW8LgJetnZraMPxCPkvRhSwu2GcMwfgDoYRPUuGEvyK2da31h9xNN1nZBZZqsZHYfX",
  "key18": "2SuSSQHZwwRfgPjsM2v3H9JQhNist3wxC1Tmiwwp4yUABQx3i7D3HddQHJnFciX9qBtvo2zFZxQ9UnhZj2jeJNha",
  "key19": "4B84Wy5tAPDivcwRQkv1rndKdPx7YvUk5hNdfbJghVkVfXmGAYdumYD9Burg5EsfovoexF9BsPu2KqYuoorxii3x",
  "key20": "Z4RYUsdXi62VZNGxYRbzkN2L7XZJB7ULnJ1EW6bCDHZgkNn9WDY1S3WYgUEM1SXhpJu6EeKFzmndWz3K3b27k7q",
  "key21": "5QLiUcTg4Rcpid6qLHk37CdodgL1GygqaQ5oBSpsLwcKkZoXn2GM9sQdrWusy4Jnc1oKMAKRGd7RYjQZFT7LZ5KE",
  "key22": "3tFsKskxjfDTWCK978U5sAcYscAwXNVbtGcd8srq2mo6Ye5fTLzGLYGqCufiHXJKazdMsX2r8xtSY5bPpa5G6vgt",
  "key23": "RDPfzYBfZvgRH2eGEtH9qtnvoGvgei8MHGsr9D9M7MLWVnXiQePNxtMy7QZ28Sa7KX9Ftt5o45J7EoBistqXa9z",
  "key24": "3sXUX8x9HFr6UgzwL973cYdEZy8rbNFcy7A7B1xcJxkP3sVJnJakdZt48iYzfwq7ZuUdiSTqDtYTb4vmC9zeG1mp",
  "key25": "3kY3onU4Js6WDBZ8taXPb2eJkUJLXmnxgZh7W5kenPqwgVqAiMZTfsdcHbCr9AegBRdTVKcPigobUrnJsnmt6UYr",
  "key26": "48sCP4iDb2SxWoGcWmVoMmiEy8LSEp8DH1w5R7F1dt5HbEh6B52sM2g2GEMGaZJDtRcTNjKdzaoAebZZFdv7dM3E"
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
