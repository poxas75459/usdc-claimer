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
    "4kJvWGSPLh1sPhirdNQvy33PosSLuheKwM6xakNobPahuFdVnMiFVQETPnhRkYaXUZaJ7eaSkKQ4iA7LbCQQbhpe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "259hpXLqY6Nd4nKNvFmEk2CU2shq46yVFRWSzcETuU7Kg2HN8PrwGhShJ4yx2fadwLiCQB9Eftdcvcu2Wa5WFzAG",
  "key1": "5rS1w7QvTqWmTY3eWk9UzTZuZWeL6nu6prCk6b54VHfUHNuPS8bCujkK4pWhUNbAY9UB8YSu4vmU91tDPhYTXvmv",
  "key2": "3FLUfXjpfA1SkRfTpa4W8fCbHwQ7nJB2Esqpaqv8SzqTVtcHi9DZYPBfU84myGxfo6Ao6mM6E8Vfvn3CHHpe8gxZ",
  "key3": "4GaK4F6tFhRApc5uFtKmg4jJdvMTDqr4rLcbNHEDcRmjCTAs2piZ9qdCSMvp3RnytWQbnaFFwipRX1GbkiKNnPbE",
  "key4": "SBwepMhMgELNNhxwdkPHyTfoTZZRdrbh2SW6uuWTg5jF5vqqdryK6MZMxNNzhLUHhfbNgEuSz7RtWX9RxkMxCos",
  "key5": "35BRgqgMcqHuS1sJrxG6PV9ZDNj3hV8FGduHGCHgYLmrTgmTebP2eWuyRBFxucUiT29TMSn1rPGJJ2uNiC4LigxC",
  "key6": "5XJdmngvMAYCyKhc3UXZLx26cQc7ADVQMVgCyGbH9d8jjxfw1htf3czF4DH9gkpCX8NdyvTUdKPEXQkbd1rSb9wt",
  "key7": "4Njs1yGzubTQPhbQQh1fsnfPQE1AB1ZvMx5otAah8i8HDqfSDPnLPKsv2DBUpRWFoqDoetELsV8EDsAePC7XZRRA",
  "key8": "P7bmhrm3eMDoU5iYkyjJbXMUrHAEamt23ptj7dxFaJvuuHqnownSbzpuv49gV7baKeb9vtp13v5Ta4s3mDzZaWe",
  "key9": "4moXRdPZZz5Na5srNmFCFAsREsNeHki6CWu1QpphQFuaQ1g6oRmqgx2GoX3F73Cf7nqtCgpLyW1DAR4fWx8ckF6u",
  "key10": "8rPNgLL8hbaHxvmYSDXdc85zSSspRN5XXoDiSex5ixUPmmAWo9RXEenzRGr1P6XWy9HyPCJYzYnZHYo3ShwyWam",
  "key11": "5VoVwrnvy3XbtUEvh6AYoWgc5iKY6xrDRtkpAs8Dssz9DcixpafQ38yvQMEDzAJZ9sw6bMLdhbHgt2kbKhHsk7Cx",
  "key12": "51xE81U87sZYpuHPJqkhJ3jdoXxXbUt1GWGXBijLBZPEa71VGiwpMUnNr25gzgmJ9r1BhTYbDTLYcoHUQvUypdmw",
  "key13": "2BoMKw4VRHmhVw6sAcTVR6oFYFZy4xg21YnFDprjVZ6MpMcfBKxKkuQWR3s1WhQYME1TL9i8TRnoL7q1SnSanVjP",
  "key14": "b8rU7GaGdhFjn1FmLZa6yNyC8S36k2ifv2ks5vHbwdFWeNR37qDxm7cVPJxM9FG3ocn2kiehMCEk3PxFQrRbmxV",
  "key15": "4Xc9rq1RBFcHs5PrwewbEuAe4g5wvLuuqRXWmGLWnLrjZQ8GzRWxvUqRUmtfwZu1vPcCR3nedNZb6wwPnLjJJ1XQ",
  "key16": "5KG3YYo88e4h3WB4uqmzhwsn8ExYDFJ1EUT4Ab7Zimsd9Pw8uH4PCTnX3KT5Z2QDbhwrJmHrPZStfaRcMY3T3aCB",
  "key17": "5TTZyWauGtJZdKgzCGjojGRBwszxusnbPvFnH42k818SeAGVqed1eg1UZYbTe1m8BZHKwr4LryHps3MgWybkCkD1",
  "key18": "3MZxLaS2EteAZyqLbv7sVLtD5vndMCfizHqiYNP6smQd1rjcMnq6z27WFznotcKmneoyxD45cKJYBza5TnQPK7BX",
  "key19": "GS6HGbNZfqFE1vCMjSBu1XWfSkrxxfinDEPkuTRu7N1UhNvwEpWpDLmKP9mZxhtbFsoCTm2MVADo2RmcFaoPhz3",
  "key20": "5DNCyDVqehA1Y37gkiPRYtVJBM6tFBrXLu7jtn1sixKzSiPPhHQ1WcHwESBuJUobimH3TJxJagGDW3p6pJEEtww5",
  "key21": "63Z4cQSi35N1xxpKm6FRu46uqEbEqH9aE4wZpL1vW9xWDfJ8zBqmkKY9z5ijuPW8k4agL6wZufEX2WRartb9RGpX",
  "key22": "25kZ1cp759e1sPfDQXm5RpLHMBkW9U26ZFaCdDoomH9aHsAxRk3SF9AeuReTcZ4GhhjR9ZowCdGmoTbDEGA1x45K",
  "key23": "4pgzwcCBqobuiGtt8YzUJyvzuRkHbVWJm35vcyoWKTSy97mj7tgHMmk9dX6tV3FCSKgpTpaLcZHu9f8xhF6BtF2x",
  "key24": "432cLxofqVyZzCNfxhhy5jgDbJE7QZ1Z9iVJ9uKMCqup5e5a3UzjbDh9cnXurMBbRDEYwaTiH9LY5FzatrmG9Y8W"
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
