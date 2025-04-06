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
    "5esH1NjfLEN8vq2GrZKFzhYiJXN6gCbs5ge9aC2FVVd6VMnXGDVQQLdVnp13jhmWtdRVvvzNu53Q5PZ2gScAxgkF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iX1okSe2QY8wVzBfjzqNN9PFri6LsVKZxaWB5cQbeuc17yfHJdK8QtyAmAyqS1NW1nJ57jDCcGXkcL9FNNQdABi",
  "key1": "5sfHDPV3G6FxjXgJUi4Dtivo64TdRpDSgzSc7nrSY4jCSnhFPo7P1t5o1CJDD3L8YRFydhKSUfcaAfbsEkppJUVs",
  "key2": "2HfVy6CNQbDG9gNXMrq5d3vMJy8oWYxvms7Gc41X82m1DfjBU351fwoC6ewoAPKA5tCqodpaSnnGnPD8BfNLKRHJ",
  "key3": "5VS8YZ95bsVpFZjMZsqJemw8VUBuDLHDzRFbRz6LGBfYauwxz58ZLTMvdJ3PEh1YME9AmVFVQoDPzDAi6qTVxyEU",
  "key4": "5MmkkFLGij6rb6VyLvv8kD7HmZtnxiNx6Tt5mHbTVGoVmc33cbBY9EcdHcE5ZAMRcNG9FBz36NcgaPUHWZPhRACC",
  "key5": "2Z2FMAq8zgZqPUSxFRRB1A4ioCAHaY69dgb8d3mVBkyZWUBcdT3J55Ss9XqszH9aw5K7gqGG58DqKPkrzPfZGte5",
  "key6": "uDCkxvwuAa16iXAgH6a9uoEmukwb5JWcJSvACpG2P6HtHgmvpQng6d3DXbvdUxskMLRcBTpNfwWbkz7ZBMS1WNh",
  "key7": "4VnzcbMmVCukQYrxHpfyJTL4Aycfffpf4HRsJAz5dqZCRAkmp21kdb9dfBRyMyhQ1n24mr8G8wXueeVtCcKbqQXt",
  "key8": "2eG6B8R3xhz59YBnkpcJbEYeP8BYXnsynx7tGWnaPvrRnbdKe8RHhbvFGUk6wBPkgScsts2EBbdrSaLKZMSiDFoY",
  "key9": "4t6HSEHBLRppTsunwHGAGeL4DcHYhEMJh1bYSYNVTd5iK5zQFRhDCz3nrSkUrkDZFxqb9XwDZBExVz8XjANGgYrB",
  "key10": "4gsTMb1bWvpsgK1yeykAbnTXY8PPJnGThokkUrngD1iVAXfTuySizTW66aPAwbSUUzeHFUgG6ce4UagWRGVTbmPD",
  "key11": "3mUcxjMvcPoe5Z9VnTt5s95v6BxBYuD1MQFmvRmPfT7HatZHfiXgGW8QtBcNZSx5yoYSr5aWcjfCgB7hJ7VUyw73",
  "key12": "2zGMfZhL3xptvLi5ANdagsQyUGMyNJsACte9m5owhy6ia7okfpBmtfGFbMhxbJVTC3532AEkoJG7BGo4HvehKnYa",
  "key13": "3zLPkdyGsv2EvL6jnhFbfiuG2CK6u7NRsgYtheWV72MibGz37X2GGk6dSerE6d2fL7m2A7jqfeGaiPCdzMrGKa8J",
  "key14": "4SLXMoKeE5vQDEMHrGBnJyAzmckRtSKfWHbywFtFzwutLwUR1JdGrnQM1aKt8xTaeTZApRmZp8yq3De9mW2nCLAu",
  "key15": "3NCoSqu16bkeisE5wZvvEZMD2PY2boGT4JgmQaseXELC6YyCYXuzNUc1z4LCiBJ2rVGYx8DpBqi4WpVowYx1AnFK",
  "key16": "EXGvR2sZyfHHVzbdokqL8nupyQ7oxXCbjb5nZ9F86oT1JeQZjn12ExCrBB4Rb15Nu7h1sGUhGLNNRVsq7vahcqX",
  "key17": "4mYAmPvhiagnpPyk9yZvp7vdWBr42fb6p4jDY7WPcC6xCZ13NX5G3ephWw79eiUcwobf5R9kq3k3JgmenpAGCogu",
  "key18": "3WbCDuweRx1nXmskrrn97ESd9Cm2uVxPNLZMu1pDwq4RwCivWzQbbvzskq5PdP347GRFBDNtChNGE7gwY1w3GhZY",
  "key19": "2zHXRhJQaSZTDkHtnjZj5ia6J7eD9Ea7CyXzWTrRWymMVhUmF76BqEVUmkTTmSxMfbcRMfL1rT58JJErNVD2y46P",
  "key20": "apxtenor2zWzkrqRNxJ2ZkHnnV48kjJgWGAaS4NLwghfMHztECLeYgX3ACtuUymA1iNgBtsznhMzDFwjqp9Thz9",
  "key21": "2wxvJMk6m1T1yTkyYXKcS4UfPokqHQrQj249GsuK43We3PRSHnRVnvG7tXvs4qz3ZVT4SMFfMoLxD9kDnX3sLLgS",
  "key22": "5LmzvwMhuKP2mnrm5tdRQAmfBATjP8ui3MdX2DmuSssbeEQZJCS8aRmj4jZx9kY4Mi7uYvE7LxjxAT9uhatx5LCo",
  "key23": "2ahAYDVS6BFufjHvSSKZQDrjNaAuZCdfN9pFciJU6RSHmQJAKVdtC68fESWetJTiGM8mChCihRMfvZdZxSLZ9JC3",
  "key24": "2rAgYpJemmCoX1e9XPeRd3yTziCY4XWgUzjcwad9XoN8peKAb4gV8vXxivJdED6QQnhBNmchXHuCEeHHCAUvwGsu"
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
