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
    "2ak7YgS513uf9ERxeyCgy4vKEeM52VrvxVUxeuDYL25bJZufqyqiHuqHNpEhERvSsBSuuGha3eQsPeso72L8fDQK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nzYtuvEayk8Xc48SEKg86kytGupxzR4YUXhBRvtKADhKMeC29sh7weSPbYU874BwmDM6pN3P77Z4qqTzqaXQkoQ",
  "key1": "ouAnuvDkD6kHQQKjvsjKaq2tSjSdzAXahPA7HqYsrz4k37rSTauTo1KgspxhF6veHLDhbQsyknz3Q4xBXTU3sJS",
  "key2": "4REFJpMNhyaXHuUPiEEnG9eXiXsqSMhEq1XqFBp4Pne31g4ejyK8pfyBgFEeFMVAzfCvuitmJ44XTzQ2F2vPX5Q2",
  "key3": "3SBAW6sxcTiDdqBMdeFUjsDGB5fCmqhvhQtv8XCN8zraNtYif5WBxtgWmDEMGRPSoSwSBEgqVERNtbWrE8qHauJo",
  "key4": "3SZGvK5czmyh8mERWcPXNhvC8npP9iFtxuaTEgmkdMefdZTd3qAUGRdFPDezsXTykQjguCjHTDQz3QUUTvVjY7GJ",
  "key5": "2AnKp2YxC2dTTk45V1JtaQgp7Fhctt5jQp7bL4rPNXkSMM8AZx5K7WgbCGkTLr6RxuTmy8CE7bQEwfuaMLTVwepV",
  "key6": "5fh4PAxv5f5QE573C1cAXAUF2Dxa5M9zex6WGd5nJm7af6bftE5WHwAq99jPsWpa6bZrpTqQ9xPfQ8u7cG2sfpUT",
  "key7": "62zs74yWksu98geZLAHXjGJm9mBGEZueQpKfqLMRHXfFuqaBTYJRS33Fvdp5FurKk56XtrzFaTcSnB75ZQm9ufT5",
  "key8": "2bWaS1WRmSNMwfj2kiTZonQAmM7WcB6Anz1dav5w5d6Zv4pzKKcvLzXwrtBabjxY6yxNorGt8Av5RzpqK2CfZ5gd",
  "key9": "4kRmwoTYctHGrLVBicGsazSctuYahLWqDcPzxoFLiSAQXsk6RDsDkFnkktnUdVxVzcNBJFWsgEmSW4Vag9E7NLtw",
  "key10": "4RY5NZ5r9hTrHM7ybgToRKXe6faQaNPFutZTeMgGWem4G76sBqhTB5Sok5FRGbCbmuxr7MgoGXSiUfYkSZQF7GdA",
  "key11": "5sEGuf66vLaEUPRGeGoM2bMizuiJT7MFmHESk2q3ZTugiNacLqaBbzUCmLmjYCWWfy7P1k5xrpYwDneyoKx1p1qy",
  "key12": "4TLcFLa7MGGvvqhiFEFUroXs8qyqZj1yVT6dNhU97ypEpm3Y6kydSPZ3KGSgyTWquTTGZ5JW8yi9uBjrFxQWkHnE",
  "key13": "5W9BX9KrM9MyAcsiq5yE4wjyQ44Ep61wJVEhEXS9RK3v7Bv4hTotqH5MbhCWqFjAiff6FeKT8DsctaQrGxAQyHfS",
  "key14": "2mr9vZMMxUv47To5BMaMYhdpWbs97iZPSwAjqGbeSJU2tW6p1EhCTWxQWRTxkYen3BxJXPrGpaJkWiNF7qLuWimJ",
  "key15": "49XUZ1TZwyWPTN2JCmeemXcVemHSysC4aJv6ZSD8tq9XBrbB2wz98yb5gmc1acLfaB29VW4LvzuvF6PucB9bVYu7",
  "key16": "2iB7Uqf5XRjmaj9EGrCZT8N7oRd3o5n2GkuSwCURg5V2FZNUpjUzpbH6gKR8wio1mqDEdsLN3iitTKaGEsZQ7BUr",
  "key17": "44A4jkUErPGsHBLBYw8e7UsLCVE9FmwV1RrrsuaHPEvLvbc3MshH4Rd1x7G3Z8DWmT8BVHZaXrh78bBeztiykgNq",
  "key18": "2QGAAKzJghHaUsSu93d1kCH4dmsqwxEn39sTeDCU1sMH4xWx72PWKmr44AG9DQ2TvnR9zJDyMR3rhuW5fR88a7Qg",
  "key19": "5WD5m3EhEhj9NJLYWaMWu6FHnLETjEeQH1mxHD6D9212r2Zf9byV7iHPi3fKdG3Dm2Ws87z2nWgzxjsjFmbZy3ho",
  "key20": "4i916q8diiACecDQa7wMtPxiw5E48r6hLCLuLBsjD5qLb2E1pCSg9MGDKidL625T74sR8LtnENHh9CfNpokGQXxn",
  "key21": "4dSFqMgKH7k1vHVipbsLLaqSWpmXe8NKxXkrbPM8MzPXCtetgV3Uk9gb2i8LXhgPsupQpMftwjwwALuNETUFvFAM",
  "key22": "2rmbm7eiu2ZHKCXB42t1C4aB5werkAZgTRmsFheG7vajQvuj1QM3kpDfqqFEPowSG8P4HkaywhWKmLE88or2kSyj",
  "key23": "2z6keJgzTG1gDT3q69wtEid7gHLh2me4Gh8FRymR4hhEHDJ1G7Yrcf7SrAoS6Sd7KCjo5QFzPVjWKKMCxqxHc4Jg",
  "key24": "XVxT9AYyckVqyinLuz3cmsMdKqL6FwrwPMwbwFWRVgU43YZpvrLK4ocGpNRvk7wYUGb2c9LtZPT3wpRz3TqigiS",
  "key25": "2KJe7mvn1fz2AHdLMRGASD5uq16L2Eh8JwNhnSYZfcKQMojddHTvGPwB6WB2wzKHe5fKWqDwnKuBjs1WiJA7n3wb",
  "key26": "28Qi2mNG5LL9tVehw6JP7baX4mUfDJvNC4Y7CihFM7txoPJV63VkKyzmeFN15g79RRpad2NUoWWfGGSUp88WNppJ",
  "key27": "7gnG8iW3LyPymZNfRyK283kymk9t2qkvojQpvohr1ezh6Ev8xj3So8AvMJhTpv8p8LnqzaA2qNUDmCcozFz6gwF",
  "key28": "i2P1gfkycT5Kk7UrVHdvuGYZG1oKsPga5k5cvRzKBNc6rqyFLUjw35R8ab7q65KwGxnm4k2HYcApyP72i8gAWER",
  "key29": "5N898nB8nomUTc5HRkpXjWtPnQzmXpFS6c8uuFnJzpZTxqXSQn52f75UGx9TT1oMErrW9zVuLF3vYka6usqdXbZj",
  "key30": "Wreim4cw83xFrvMvVco63Z3yod51ZUWvsqxDGxnfQU4eupyWGkuU9PR4GQvR9m1bDbJVBvRczCEbnVADwquuj2t",
  "key31": "2uUZQNnQVK88evy7L6NyxD4ncVhzRXZYropRv2UPkBshMjSgiBhHt6nKodMxDeTjQXcQyBhxa7jzmd3pXheDjSxV"
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
