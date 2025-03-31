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
    "34JirhE4JXza3rFPrsWqDfHn1LzjxE1SnBEYw5ThEGU8xZotJ7gCGQTQ21TbM6PEVu1Cez1XQWYhAncobH9qrwg2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UYZdS6nJyXtXxZibkDzHnziFre94xgjPCJiSNN5xvKpmR8DkGs2AVujMFmh2WFmDbZodAiMxzf3tqSJcr2o3sMd",
  "key1": "GotmKK3soFcnxdj9CHuJhWMb3zw4iRePcLbtWjj94Pn68AN4nnVcMvJzoA9JyV6UBGwh2ZUq6wt8H4saXTtXZhU",
  "key2": "3rFK9V1zNoVoZoGZni39owAETijCG4zvTwrVE6gW17hpD9UVe4WwtMGLvMiYdhC8E7ZrbHae43NnFDqQAY1AVYoV",
  "key3": "q77TnxwnwWQzDnvH3vihDh1UQ247W3mcorRdXEVjbpTc7Jde9jSknNFrpKL7ZmpjfJSh5tqQ28pRrxyDfcJnqZr",
  "key4": "3i1bVq2eGLUMTDcxPpfbXEQeCysZFfTDoA2qbEPCSdM5SETykPiLoTRdKcaRtpdLWSSWTQUHZgYhcXa9gV8oLEgY",
  "key5": "4AUAFKq7JRe32CEKngzhReVcJ2XyGt1jDTT58oNYKAGMWuJZySQwexcY6vsXws8a2pm5ZPhgrqpmyNMP2iED7exP",
  "key6": "2onm4ybQUhvVh7LVTb6SzC6kXZXGyEQxoUDeKyjpxnNCym7T2bb84e3JhghsRBCJEvSj1jv9QDNNk8RJMbrAmVoc",
  "key7": "wPfRBgYtjpnXsBCYsUEbFkDir5NDHaouCAV9kvEQZpTy5XHaZAmHQSomdR9HXM9E9V8qkvks761wqVewQecoxDn",
  "key8": "26oFyyrb4hjiaBcVfoT4P3YUUsHAopkp5kytTnNXwiR6wVtSnJtVvK39DaFqbaxhvvXa25cCxwYuhFb39cX8vzCe",
  "key9": "4ADcjyQ5vjrCVJvHxZsFM32PgMtJbecx2MRVPBTwUo9pYodR3iWYYBhSWfA6Hxjf4JgQEanaq7KZGNozvUceRdN4",
  "key10": "fGCvCWHoYrpatVoCC7wHPEpdqrsLnV57r7AwArQwz4TXgxUx1WLbyjiAsrbbDPs2S7VaKhdq6SZZZKfMcpRM8yq",
  "key11": "27FmueuL8o8Lvk43bvZEFf3LNonQ3PazWEQiuVR6nAKhY4raWALuFoE7uSxgg2REH9em1oocQfUKKYuMP6Uyjrdh",
  "key12": "aKjxJZAwKVgV3mXbeMSDLBQu6LZf1vdGoDYJWEFbRy2i9w3w1CUB9wNk3nzniFhKPo8w6cDzEVNBQqqSLnEs4dH",
  "key13": "4ka6NVMWxxZy73xjvExN7B4CPnLiLKvG3u9UjR8Qmgie7HxSQa3vGd8L1Rg1gEfCHcrhQtJyKW57pvqnNXuwEVvj",
  "key14": "5tFRdZBZcQEMyqpsMwBWhbQigYSXA2mfx6u9EN2Ub7kq593UbR3mWRz8GZWeyLVDzgpt1btwBYn7yBrKcq56CqDR",
  "key15": "3ExWTyY8pZ36wsgJA88vTtjsjVmCefD4piR7wJPRpC3MQm1CzMm6BtbWBP97ZFbRi1pYfAUNs9YdwR3LvgnhxYNi",
  "key16": "5kP6aMGKcqE3Wxz2X3A5m76eAjePfGqP93UE3g4VpXDmMz7Bh8Cgff2f2eCzPYd9PL5TaQhkzdi1KTVqGKXtx3bq",
  "key17": "4B4H6qCP7qXnsfToXb2ec5Th47NQpeSWSqfzcN79Pd5fq6SHgkXxRmTPTgTiMaDSPwqbStXZc9p2EYyFSV6AkwhT",
  "key18": "4LSUft6sMMyvDWoN6RoW6JGXxt7AmUStvgzDkUiBjNswoBh7QxN2kdq4Ppg5vaJwY1Q8KVRiEMymRT6A54K91jGc",
  "key19": "3TyVQVLrwNKnRLs5MWuoWNdnSoRDerTSsxUV9dXsPp55x7bTuMSP4zPty48obK5w9DH5QnwSjzx4NSveoRCamTYX",
  "key20": "4JU3RuXF57sQ7zTQ6Pa7XReNf4WSFMrWx8GK7z9TdEdWVMRZ259aKRgiUpaxPTAeZnSSh6RDD8jh9R92v2bgbNjX",
  "key21": "4Q2agNYi7XkYvFrot2phGriAPhZ3oACcVcHtX2abb4Gh7Ufr9z6e6eGBw3RmAQHvaFy1nwYW33qQcyCTSHAqDJLq",
  "key22": "3r9Hjj5juZ5a3yXt1MUKiMjQDSdY4Y2MQJuTrVEKWgudG4jHWwuborqQ6Nxq6iCzufM1FFTzUi7F1ceSYJUQDxQU",
  "key23": "tN7QTazvgmbeKnJ56D9Ske5Lmndv9KGrPfPKqv5TTogUZwfHobappvP4sy9CLMCnWiJT8CtsBhQAXiCFZ3QRwMZ",
  "key24": "39QdEbJxZciMh6UGTh9eNBZjqiNDYCcNi7eU2EGw8A5AhfUBTb1L1pPSKBA4Zre9jUCrFm1CzsPeCZGTkqscoAAQ"
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
