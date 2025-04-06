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
    "95xwG7qaptYVnYYLWK7c1C7kyffh3mcokzbFecpmezTHrJWwkGj4stbAnMDwLbZh2UscTVaHC1PHGo9SGrUfJxx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z32JPVmLXHpJ1eLLUgCq184fopqrGaXijuxJKxqeBrArUGGguudP2GhgoniqwRk9TYkXVsF5PeTVhR5Gj46oA4p",
  "key1": "369nKuAx2roCjM33eRHrE59CoaA5JxYuhfptfeDqotAetL3vKg1JKgXuyXTUCJGYhbTCzjRENi16EDepGFAodnwE",
  "key2": "2yifFa4LtxHCpc2tZBpYM6ugsXDfXZSk1dFGeAhfNhyJPH23dvk5Jjo4owNS4XXT5ejG7FtYRE9Hth7NhQs7zaVD",
  "key3": "5AFFRGQCtBTfvNanXAiE2ZdkZwxsci8Lk8DGwrgXN7ss4ZYZjjaTdJbrnWG6tXHqBUP5vNwiVBMjfxCxL55kAXX9",
  "key4": "45TG5yxQxV8ezTDu99V5JecPkHP6dKJsFM2iW9vwyqFun83VShrEc97SzXWPCKrnTA3hrgW16jGncZ7VnzQ1KZ7z",
  "key5": "3BQHBctFfdwDL6JhNAsCyBkDR8kJmXff9WaYVCSQhUYwHFrYGtDZk7e2ejjk6metFNQR6D2G2AV6zSJU3cVbRppG",
  "key6": "28KDaxgC5vYDHvYFV4UUvUmG5FKCDktoGTdVqU6KYw1geKD2VWU8xVPceSADEqntmg5mcTszpSecqNVzjscjKiu3",
  "key7": "2F26WkyBYSUNiKjcVdfaUT7pUwR4WskoqfJDqG4nSQ8DWTuoiuSZQSUfXrgHLkPp6eW9Pezent8EiYG2Mc9qyGaM",
  "key8": "5inJH2QincLAzjCkuGXswZGXcbsCFEB7VWYRDrqEgJqyAZKoS4ovKtKg8iensLLHrpam2YiAQneUzxJGiMGaEzPF",
  "key9": "3R4jLsUU6nwED4nY8XirfWyM9DmtUcPN2NcdJ42HqKJpshCmvQQp7BUUSHhWkvgNKgz2hkpqqRZJvozRqfeCwkcp",
  "key10": "UrcFhf9Y5QHyGnqSj8v57x5Qb3PVha7XqMvbbYpVDLfY6cswrhkQUNo4BrfGPrdQxDo1MrMYPP1L8epUwd9nf6K",
  "key11": "5pptZ1WJMzCeYNfKRup7RorEythuMWyU5dfiwv25G373YswZrzzdEtBzS7Dh8nnYT5YGugcFiJrs6Cdaqrh4GCDq",
  "key12": "5SXodYB7bhhgM1624A3vjGnHcUWKGwTV3ERFFfb5HRkcRwj3sVKNfgALBmHvGXTuF3yopxaJpJE7GaY3oyJmyvLG",
  "key13": "5e3psJCVtetjiYMWsKPzUMUfaDK96KBp1eLv9mMXrMwz1KR5FcKeBHSpnbwsAy86h8uVUmsrpbDkFCY7QxPguQcP",
  "key14": "FXR7xYE79KMCgjQxKvhqc9Z6FNfSQ3fB4CTu1754wUtuzNNtdmm5YxBpWbdK3SreJYvhHoQAeusVnq5rwxC3zkH",
  "key15": "x2dvpGvkw13zPSuyBnqUhmc8wF619Wcm6uZL4VXcTtkcgoqevYMYdkiKSYo5TtGiuxTKdhdfikaJFaGgjdDuAto",
  "key16": "2uYtkmxxiz7NUbg6mBBV4KK9VjdTVy4Z1bCPxH8P3eL5m51oymJh1BqYxM9i45TuwU5jd1tzW8ZBPSn2okMqPjE8",
  "key17": "5FvcVYbVbnB3VDr8pvF6wsVQJsCwfWSJ6gy8LhoQnsq5XN8SCqywNBgY2Y4ZEjkfJYpEXfAW8LxaKePQss5CaYpH",
  "key18": "XBPAoeSNUGXQd9Tod8AgJ6KyijHoyNm2SeA7TPkkG3GofPL9VcMq6PJQ4ifXRdcXBRxz7exwQNkjywSUvnATQ6s",
  "key19": "3XGpo36g2tdA1nErjARzPovF1b29YT7g8WdwgiHYUpcoPTtZoft9qirVzSERVN1PDd2BUn9U7bZkLpriTgcyiamr",
  "key20": "495rpERyz1136yHM4xNRxpMpnAieeLM6MHj2pqEq3SNwYtoBTvHhWkzKCgYai2MK3gos8NPGS9RjH7652xzgeUx5",
  "key21": "5tR6i9xepgpopKXHg5cNYTBzQxzsy978jJD4hSscDrVWAgwPAmtDxKDsHagvrSS9S4VCEWoTouoS5rjZupheXfF8",
  "key22": "3yZe13Vifpqage7cpqEBtabieF34r35ggZzweJPLXVPrR8EqEZMzizMW1eE9dvJBmWMYNb3zvzGqSAjkaTndtVAt",
  "key23": "21aoULDNWshLoV2iymAdUN2tct71BLsFgSe5h7Adftxpmzv3spoe5449kPvDJZ5R5fKordyC9PPZVbM7AV2NoyUX",
  "key24": "3GWpMf3TZMUWYuFPF4Dx1wRYVRfzQcQ4fQySG26LBNTCWQEhziWCtEKo22tdAk7QE6cuxFR1WqXHtfP555EoXvdZ",
  "key25": "5VtscreQR6L14tbtMySzz2andUeYwRc7MqxDvHun6DFHFxoxCAZRK7o8EPuiTBVYxAWyrXEnMhCtxqmMvQpyjBHy"
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
