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
    "2PVTta8mY1uRFDWAovN6aedoWShWHaCfNLM7KCGNtWop923qUUVzWQ3TRtnZe77vQCVVKaSqETKXB2TT5baZHorv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nHwKLDy4vDQt8Q24gJQMkZmWEsFcxxJgE6d9UogrndqQgcjifnNXxXT6pS9aNqhwi9z5yy2BWyMH85weZCHRD3V",
  "key1": "5ECyhJuXjECeJx1XHmNvHT7itDaZsYctWNhz5PRLaf4gSV4HbuyP86AEDdjG16A8KHo2YnCeyhDQuLFPjjjKkptq",
  "key2": "3WRRcvz2gWXS6truReVYfgHKK7XfLYYkBRAM6Z3zTQCe2VvbX64GRrbv5ZPiu4UUaVYviyS2wCY51ysQbVBJeTdz",
  "key3": "2huqcywpsnoosi7HUj1bbiGsHQaPnd321vRrSBE2YKN8HVqkujYghx8G6DiYqVcaJUSv1vd8rPbWCuYQpZTXu7BH",
  "key4": "2CLyXXs6f5NLgNVCfrVtmNW53UonPkfa2JqLtzWhju8ST3iP6zUKVQTYf9WKpAn1i24pAdg8t7SeaW7Y5GofRQg3",
  "key5": "5TAVCsMA6hbXr3SYCo4gdbXRMhyapAMXqxgBSyRdzCR71kHHG84oSGgn123uNh7aEea4Nf7zsKp3MLUCV1H2A7Vf",
  "key6": "WLWYQhThdAcWoyzWHSk7jeQjnz5fiFF8D3LRwLG8DTdgNBhGYeDXtsJNCYzvkJWsMdaH5e9hbwXfNVuwzbYQamE",
  "key7": "4ihx5QZokbditpwunxpJARboJLPLaWYLgihrgEKX3Pqg2i9J6wwZGoQrfoyRqJdR3m6c6TYdqMpFuMry21oUpQZo",
  "key8": "4Q9q1S3JoKnz7RvmBqG4bAxQeGSrMnpct1LDeYdLWQxiUnCgutnQxjeL6JWHF77kVL2E2TkPX2EP5a7rcXvJW181",
  "key9": "S3ARApakWRLzHgCRyaLJFAFHCXJ7jMy7ihsj1L9Dk9eGPNbfXmurpRQ38JPi4ApauZcWvwkmwBeig38cD39vSfX",
  "key10": "39Jx727x48bkVe31uFJs34xVQ9DsQGU1ex7zVsX5avQhbr61s78TsLYYFB61ZeVWMH5X6HJYT1oarEnF22SEM8ag",
  "key11": "4GsafHEm5HBGRPQBRsry8iszwiPb9iik68Fymo6qVD4xwzgpkZzRT3uXsthVhAG3rzRbUKHDXgc7k23RcoYpNZ2n",
  "key12": "2AUU1B8QvnaEarJbBEy52W6nwn4zf76MSgJ7ixMiq4AnV6Kn2FG28hp7vURwVsEUo9Mp4ZXbtTxVK34qUbZb4ENT",
  "key13": "3NBhywZdSCqdmrs2wCLi7E7zKnN1AnABTpujTa5QdfjjBiAiapGnVQBPJ5MhSnNc5QFCHrmv9wocX5kyWaNHDSgv",
  "key14": "5J5Cgzkeksp2AnejBS41zNG8BUuiPA8aKx1MQJa1Bq9Uet8zvBYbP5hrVK1SZtHMTe7NY1qME9TKu1nKyvcvoHmF",
  "key15": "3e566UbDemhFgXadEWmYqGacmNJTU5bEb4CBqFGpmXs45PNjNqZ9qoQjusGc4Qom3r1dp1QQwUgsrvkV1BjTmNk4",
  "key16": "54kdW1mEk8tXq3tqQhUpTQzKYKiLTm7ms1sHjhcbLiW9PLrvPdjkLMQDAU1iZV4Du2tobtqVrEDREzkNHidKzqBw",
  "key17": "5NBPY433XxAfbC1LLhPQMS6dxeUminD9DRSkCXBrt46XD6pLcN4ySYTtReW8ZKaVNxLrMpnfwCb5Qm1UWrCG1pa5",
  "key18": "u9KmPQmn56z3HFhq9Gs2ffjMjsyAA7rZBpMgkFqFFTnVTj9qAPAXmZnBLi95zdi3Whz3FQLbbYZzy9AqWabJzcQ",
  "key19": "4QDTt2wXy3Kq4Y4S7xbeVSLxDCJJrDCc77Kg3QZzV6weRPqb3FMATMNipUnF4o5FyumYkGtUPrWbwEu9ob3FArWJ",
  "key20": "kMR3h1ftCvWdiq3sNeRybu2xjeJmWHd5iDoRVzCbykTx1LCYN3NmELdJQYuECiMv3Q8BUXBnG9y36N9zfkR1WYv",
  "key21": "4MhgvsQv9FA6fxbsJsfUYSYQA7Qq4jjB41onQbWA9J7ekWJCps1Bz9ySgm3pttoM9PyXW1hd4T2SUxt7HCFX96vk",
  "key22": "Hs9RuWey9KbeQbFBViiZj6G4f3g3JisJnbpzXPdKvqy8m5P83ZRa1qYz9Um27eTm4PZQdsYCbUx6rf3YLVo4oLE",
  "key23": "L4G5rX64vZchmPH6FQVsJa2ea12pZw4eCS11xhkC2HVjgqkw8BZvuqMF14od3xtHC4burY63Ys4eW1fBBrUUDAY",
  "key24": "2GXKskgTDqWS1H3EC6j5nE8pWXDXp7di6osdNuAEgomifPukpgrSTWBsqFvHUfg7mWcuaqrFZMwCU59BvQMYAcu5",
  "key25": "4BWCXMmo1Xkz84D7ESBEvvq42CcDSBypsUG8R63Q2Q75HyzvbgVa4E8DEfzCvf4n3cjRDdCbT9SDt5w2T4NDyaj6",
  "key26": "24YVkJVEoxXNZ9msaNfkJSKt7Eq6xb3BUQpAZ49DTw5ZgzeFyE1vjoX311wHu9C2AcwbezHS3Scykci4GpKjUqz2",
  "key27": "3fjoguHVnEtqk6Eetf2156GfddJ1WJVbbyudacm61xkrudUmqjmFD9sNdVKbYutY1em7ec45aHfAUABWMJnRQMpd",
  "key28": "3LF4yJQuoQjyy27D8t1jby3BNzus8AporUHw5KkyDMBhvkE4DMWxpxpGhYD7ebC8SzJTcwM569BDDeZ2WAfwvRgL",
  "key29": "HFVnG9xzR84pTRWQadycLopQmF2BCwSKCMADXaPvKofXzjp2zF5x3kiq4cyBF2k4nWXjoUJgCP3Z7qiHxnYBKQS",
  "key30": "2NjNGLfL7sZLHhCWPAmGqz4fWuThkFnriuFErB1YtToY9gM2Hs6TjCDtbbSLfSMCnPyerfZJsBmWKiJhtPrTbqYA",
  "key31": "67HB7bQPGuidFcrLhLcUywKyH3iinrFmEQAhNauX69QbZ42pCmDFPMMipPLjwVAnWvhGNBj4aUWvnZ78uyiuYjLh",
  "key32": "3iHmd77XnKLb9PFXeBACmw1MkjuaXLGrhFaLrvNypecMEneMWB9HQbiY3MrCXJQJWNvhLjbwC2K3kXLeRCWWqwxZ",
  "key33": "3mHifGu2msBHh8kjMNnVQzDuih7zAmRHzhJjuVciJGpxLGEUe6sxgrKh91N42cEcFwoUMAvfaV62bdHtdkQzLpUo",
  "key34": "2cKzEuMUecoVzVqmYoSk7fvaqntq5REXRy38WAt8WhFKmjVXVyKoxDsHYtc91zhZBQk5YV6raFapkLexafWFuxgZ",
  "key35": "4smQpnqC1JQ6UYqcGtC9WcpAW7ZyCuqE1nKBZiyCY6NR8czjsiCHWRKmTfpjSePhUW2yQWavf2WqSijHsBYYAs4h"
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
