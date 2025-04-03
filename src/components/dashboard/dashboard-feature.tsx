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
    "4pJWdj2V71wL9j8GJm8P1z9VHzDq34u7xq2kvueKjwmaJ8zmojJedqbGSnr5gsD9gbP2fhUuhHsteoKpFTujtkvv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KDCvrgAxNq4eFZz3ain13e8gKSPHQ3hU85dVMCeiU9oMUQjo8km9hTTN3ZseEkcPMe4voR63DugXHFZFiCvAZy7",
  "key1": "5nQ7GBgKoMJVGZfZKXbjGtKWvcvqrxNaSJPFgzXfk3BYse5NPTBfzBDkmEFsNhBur97ZY8kexaAjvodNBxfyuTpv",
  "key2": "GwuNkYQqJ4RzdmMBvbU8zBLMFk3WSKBGRPwAwRBbNcyv3rDSGkbKejCthNRGEUgZe67YgZWYegAGxWRNrbUK3Vr",
  "key3": "2WovaUURfdWfX87q5p8J7YNdT6JDqfQ2Nzccz3FPJDgG2qLg4TMkq7Mx93X42dFD4xdoR4rcUzkpRvea7dXtNkGE",
  "key4": "4nKhC779X8yJhuqFcPWu9mQk5x65ayv38EH1iH5u4FUPka55ZxarVDaFHmNBJnNDEqk6T1QMJmrsQJZzSHkMB7v6",
  "key5": "55KLHyXHFk3zcnAxasCgXPEzK3E6SJuDRzvbg7jVTCbBnghamPtwwjw95fYArp3uaSuW5aA16RDgceKcTVVN7QAq",
  "key6": "exitV9w1ysfFDZgbBdR5HtWUrBm3UXR8q4UMeX1D3Ry7a6qy1S77sQoVr2CKJFwb6E2WQtegkBMXBgDoDWnGsce",
  "key7": "56TqheUYYBC4sXr5AXjo2fWiQrF3JnM43bDvJd64kXaJ3tpgfYmtZFhvmHNyLoRz5zmPm4MMDDGcM7xsYLxey6io",
  "key8": "Y3HgvbTEkhLG37G1a4cyMjAvdSA6DoH5PJtG8e2TGjDz88TBZ7tj8PfJU1M6aM8Wv7aJm94MB2fRUyNmavG9HqQ",
  "key9": "355MrdLNM3GCrJxYPougftzpuY4UsSQXamsCUkxHYrdnj84Mu6EmWsAEQnYmB1QcNF9HatEVbumdbbo6n8WBMwaC",
  "key10": "3trrkA1qZgB47oTJpXsucyCSRpFWwcJSGtqr3V31ypXuveFADWTQ73QV2W7mLWb4Rx6J7YMF1pgPm97dZNWuSZpA",
  "key11": "y28HKgWigEm4hjcwjz74h6QG2E1m9SmenZDd1AvdFWNAjEaUsDCgBqo2DvdA8b4QNQPNAQZWf4kRZrpoMSeeR6v",
  "key12": "5G4by3pMeXtxum8xhGozYdGftBgjLw6FxYdzaSUiY5XTsaXq6XBxkTbRDCi4X7NjR9CL3L3Dvu6EXJhXKVEDziFH",
  "key13": "cYgFNTbTMpoLLgnqPbJCANzHqWdUAygh5hZ3uWy5zxkEpL7f7QkrCdocsx5rBWmCjWqfACWe1SACf8p5KrUMFVi",
  "key14": "4xBuKSPJRSu1LDuDA4ycEj7WCwTfpj9maHNb8kz5Z3HeN3Pz2bVCeYumgmExutSsJquc3bVqtDUYTsWaqTSCcNRz",
  "key15": "aonxFhTJgmFFNWpXhJGXM5AY3XJZiTN157fANZJMrNDxnUxYYScQmxi8eVzKK72iW7YjvUqDrebe2jUzJfP2BsH",
  "key16": "2v6n4ERYC3Xju8RmczsPeqS9atY9iHg7ZXrhsRqpJpeT6NjXkfh8Rkebh2jyFN765U4TznAQWi1uEbiV3kQ9tj44",
  "key17": "3FJx4XePcSXe91NapJV9zcT6y8qS9ndEusmGDrNSVzw4phuCDUFptpiK7MYdjTm1u3puGbaYQ2k7SnXPbY5PhnCK",
  "key18": "3zTA7v9kpdZBfqFCMsHtKnY3FEjGmRX2aH5VydkzGMXvCtJPBab3CutaLRjhTbCeJuWDMwz9EgF4aeynQNKbwxcs",
  "key19": "2K5aJSkiagRmXd5bFV5PM44SSVDbv5AzQ5urJYu4AiFZnQH6bBeyom24KQ5SrPy9CDFRh2gnDzg11ffaNDk25iY5",
  "key20": "22zKwcwj6x9j2yB5hum2zFKKTZ7gAoD5UDM35aE18fxhSpMRzDCA4MxwBw1mEHgQRikkZtE3MKfCt3SeaDqisLtf",
  "key21": "5EM4nPSVWvP39VXkS5zEmaSXR6uZBceFGbiyrbJRDrmp7TSdMFdPL74xYG6omg5LEpyrQb4DqP5q2j8GXoF7omwR",
  "key22": "3XLv9zYxf6ih6qixLkrpD2pEHPWtCfYzF3uiKuRfCALw1ZdwdvA7X1QU7K9EVjM8sDq59kcUPzU7gZ4w8RtUNvQX",
  "key23": "5SKNdYjRiKxzJjLT1a2RbWA7txiMwYztpfouifrD6D9oxaZvCjrn447kuhQKeogjH3JnDVQ7N7zy2jpdetjL8DtU",
  "key24": "G3HezG1YJbTaQ3VWTMaRfM25wf4housiCF91ohQTZC3PtTBMcBaTuohygt4LrLgprZa8t4dUkwvFqgNM4XJymTi",
  "key25": "3mFDjoB3mHjef9NQbsdjhe3J1d8vK38k8NZxfhZ3fcY7gG21QE4TtVpPgnT74Bjef2wTfJS6vi534LwiJ4jPhHR3",
  "key26": "3ztFpPoeZcg4E6VnUzQXBX3J7ht2cZpBNQFoM8jvZfaAVHkuMs4yR5Wo3TZj9Z2zvaKEis1StNMcBCVW2a81yusW",
  "key27": "4Y6yz8enVBc4KYwUzVg5qfjxrYEKbdN6gnnQPivdYvAPHXs3SNQY4kCr46UZzBy3NZ7yBH1bqwDoszELgaDxyZTi",
  "key28": "Cz48Y8YTBDGWhC6G9hdtFkkoiQ3egmJV5fUWZgrfJAX5B7GeJqVMby1fqja3XYJJf6G3L8VRh7CSTgA4Ca4knkA",
  "key29": "61PpYMSzoxwJShKDvEo2QJswBoVqFq6t6Q24NRjmXQ7S4mtTg7Kx2PoA2yzb9p6dWUPBV6QwV7ETUMhEQETCuw8d",
  "key30": "4GSkyrc3JDK4d6Yk9MesAvEpjrZx9UsuEdhQp8XTDkxRz9e46TXJRRpQZfurPXMgg7dxHcxinrc3eYZoNJGsk3Jq",
  "key31": "5pF3B4TBmRQXay1SR3Q1cWiWtiSqyrR6R8U7FMLHDkNYpzGsY6SmZtoKDG1sMBWbRGJbL33FrHUFyXUhdN2HD5EW",
  "key32": "2YGgGUfSSJkmnEcD6xaANXkdCXm2RaugYKxRtEajywAmoGjAs3gNpxWon95SteLsAeWJhx2Tiky5pdXnNVrLzLuN"
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
