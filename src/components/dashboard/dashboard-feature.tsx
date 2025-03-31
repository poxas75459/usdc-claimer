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
    "3z2nYKZ6w7SErDY6G8x2C33WqsEQnqM1nUJQwkMhWE48Kc8PQvBYiALKvqs3qVFvHM4Z7XUB6PPGjX4usp69rR24"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ErD9NnFKq3gYPHBrzr4wD7KWz4JRzzaASuGCpK2ftuWkjiXP7qbPB9bsPnqLVdaoSmXPCT5nmBEKPCnKaV4TZkn",
  "key1": "T2sJefNLwfjFgcK5vuaVZ8NhrzVf4oViR4m2GiMftrqVeCWu2MGjqs2518wM5tZKbinX6znt1edtm3QABgmW157",
  "key2": "4XdeyAyezsZUiP8EXq3GDubfNjoWmCUt3j3qffAXo6jVX3UwPieTRgEv8GFCWnWLJU2j75ua8Fk8ySjRRyRq5T36",
  "key3": "3Y5siLvyLPCRUNNa2qKL2ZexgVL5UJ82gjS6b21uLLtWSFm7keKgzFz9wABzdZ66PkmXgd17AVVMSwreagcTKXaN",
  "key4": "9nKBavBMQnm4iXJbvRmQFYY7LiiPTKwoNLnC3WDhmJ6zoAPFNGXupAxEmaEVRaeWAPyJSXQrtWg7ym1kJ8uKvaQ",
  "key5": "5rgKAHS2ihccM7jFRDCgiC15xXwzQ6F5WeL5JVYeTKp779UiLkPatQygyayjwkxi9weHw9JLqZm6Ph3GRsrumiLe",
  "key6": "3XFgtyqgbWEm82vuiv4HbLy9vmzMPcdFToCHSN7HLQ723PtPbcAAemPKJfU35crkjksi7j5bZfPCtMnZGiJyorhy",
  "key7": "4YTYpP1q7LUxfxBc49W4LB6fMK7NN6t7SsrcebvYMw8B2sZpBy5YweQ8zyKtHX2G5u1uZpzSs7Br8yS8dVTRs1Si",
  "key8": "29Hf7Vd7iXZyTRVfqZFdfSiT32bobiPhcwz62eNg1LuCAjN4otKKJr3BPtk8p7K2TCYKytkQZPMACEaGG33NucE6",
  "key9": "HM4M5XQiVY7fV1Sqnq7bbfnyePfULYx8cKcF4rY7dxvZqNZ9jHahb4vVfNRap69jVmzmRBDw9ja4DKAqxjvYQzw",
  "key10": "4zinScc9KP65mGiHMKmg3t5Y9m96iWVABGh3gY9izegMghGvqugk8ckrZ7HBk4gx4zMKwNNLQZfFF1uyqr4pVgMS",
  "key11": "2pT8PFc26rALRhNgn2PiDGF9D7NLFJUFqc93cK5SpGja8PGCwq8Fw5hQeBiAVBSCwrmjYrd2SFxxf1gdL6FmKQa4",
  "key12": "3PFHMYbBe7dKWCioUP1xfm3YdkyuUUziMmXQTVDK9b4JkSTTeiAK6VeiZsEHgPnZPdNfTVnZCnhqGVvARCLaNPmf",
  "key13": "59PQ96nqmoTegDK8ENCGe4EpG5t5GXBSBt2xSaDPDRNU2H9cK6W4M9mmqJhd7p68oCC5o379bFy17zLC1UmbPCSk",
  "key14": "Ge4Dm1cNPzmgVM43zw5nRwumZs3YryxBYyec5vthsACCceY12NJkkBMwsGARSGtD6uwoAyJzYJ7tzSQUc2zx2t7",
  "key15": "AY4mYzMnMi82ZACKsBwYzArnHrLLo2RnmSS5FzcsEnwquRuW6vhXxWCZLr4hXVJvuuVh1Lxz5dXbhYPyN48rvRL",
  "key16": "5ishv4pffNGTMbJ4XmTG24vWfDHFHL9UPsoLuW1XBU7UFE5evwzvNmSFCbzxSkXTR7mtm4tYpTm7gGJnU1BNfLts",
  "key17": "3kXwdn79eJFkVZCCEAmGFmmuQ9ciVTt4WEUbWZTcoAXfiFZ4R1CzdVj6xbJEc2rqSNwjE5eTUPgYyD8bVwQzmXu9",
  "key18": "Wk1PJLSrxqZ9bExkkgqEb9M1nHmxcCMDgb6JftgGK1h6DtnddHjA8zqWSkXerjMAf7TC5UVEuL2mwiLiDvnkPN2",
  "key19": "4VunWcKc8m5hEZjucpTSJY8unMKa4YxdzQYtXn6hw65M6oh2JJfnTMuHdtz5SVyBNfs7n5SV6bVqwPySe6ePFg7P",
  "key20": "24MrTVmqx4fDFX7Fz1K4D7kpzRi1swt9pNhJaSs72BRGFAp5ZVWK7sGdPxiAuC4EwDyzznx3sGSRKVtB7jsQtskS",
  "key21": "5TvvSy4sS5wBaFMU7hvFfaMidFu8ve2mwVcQKyk9RVroFHxK7td6dCuTyeDEH5R8PSkXkiyPWffPVctbcP3WoS9Y",
  "key22": "5Dbfyq4fGGeg9Cp4RMS9PDo71sWYUwGfL6Mj2bwkhUY3FemZZ2Vpb3iHFFMEjmWBGFG4ZnxkiCXs2whPmbdYrep6",
  "key23": "BCh2bWHzewzgjjiKfSNc6ATDS9S4oPYwuZnTENru6uDcrKfB4yMWQLoUCd7fwf4ijGKLQR2iVWoxyFHPbfA5ACV",
  "key24": "5javCRQ3wtuCm5rmM2ZLVsFbSv9hR6Ep2YdZVQhn5jJuxGhZKFXLrTddfFj6PLjUwCdwY1C2h5YKvtHvWxb6pGzQ",
  "key25": "65k65d5jjBCU8B9qyozCpkpr7nFPZyydCBENNyHhr9LDDWMhCTGt2KgwrsjorKX4tNPFBbRy5H777E1QPZgeiamW",
  "key26": "qdsiDj7byQHUtwcUJpc6D2A6tUYH8x6BHzPurdrCsxe2zgZ5qrM8F7FD4TeoiAyySuydBHdiMQwRS1XfYPyp8uz",
  "key27": "4CQKUoCFeWpWtbHTqcC1g97MPZxy2Bhv2JfX53xb7uh9gZd6tFzH7BdKdvbcviHEsTzbpwiMBqYnChMwNaq2ertm",
  "key28": "5MxcaMxHBBK9UsxPXz12Gzs6z2noojqgfFWYpkWbah6VDHmkkiAALxZHLQUMxywdd7NadLc9VQmK9muvLyasBXm6",
  "key29": "4XTegQGbCKkCxmCQrDgWCysBpiJqFz13jDWnGJefQY2wYR8xXzJusxjJ3bjv5DFzQh4BkG2erfBcW81JadnniCKw",
  "key30": "22wDUcgtMJTHj74R9RKcqMPUnpeXqaTrGhCW8E2HVCHeiVaabcaxPk2XdyNzzi6djUp75TTMe9UbQfuUngPwxftD",
  "key31": "bgHg3paatm7EjXrweHNyx4rY4cE9XoZWEZ7VnTtbpq2R139qi9UePPb4XNGBDtpWnTtTxEChyXF97wCifd2Qast",
  "key32": "3xhbijEZJAjZVidfjqqZt2xYdfEvLLzppBNMJQG3ERGqQ6RPFMJkLSehMWWRYHeb5sKVdS3KmD4ibXTaem9otY9A",
  "key33": "nnnardUZkawNV2PnqFSrUHYMaPkWQ15n3dv12ReWtv43jQPf6U3RCuaSjHGDJPFdPud7Sv53r9rHKJaU9dxu14N"
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
