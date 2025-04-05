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
    "2LmqMhqL1petXewwjPTRP6dbgSjxJ231x5oNnA3Gd9bAmpStp7BV34BX8vXZC28YTHt9yenM7bsKHrnEdiPKbnko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jMhfFP88rmGVEtCHhjaUbmmwY1MVEVt1DnraD9LwywK8fGVkPvfY9CuXppcfZfPfi4CKV8sNsSZMRceC9YpNtwS",
  "key1": "5HaNeusaGKiD5ZNnNxcTm4jCP1wHaPzCGTkb9ifMJRDNNZ5oLo8zBiwMZSSvkZV4nK3bvJtSqC7t2G5EtKhAHYoc",
  "key2": "2qbMfh5fjhVTGs36DDxbCK7HoM22akk6S9jBjGPMAaq3rUWCgc5fnvurDttxzeRr3gSxBUkisXNwaF9SMjR9X1Le",
  "key3": "2HByrGvq6cqfQKsqkfqqGMMsms5PuKkNT5bozy9GGnw8rU2hBr2V3CqFxjtsfJzCZDjWqcDj5zfQYjFY8CSu9tAT",
  "key4": "9xc39jm6qVGDDgWKskVgcgMLhRLVCcdH9Ls61heAWADqi3XRzpxU8XHMwwRjBwLBVM2RkvWTJR8VdJmd53uGv1p",
  "key5": "448Hm1upyi3hCNeF76uEScqxWv3Fzw3C6iGH9BkqzCMRy19DtQEC7r9TsRR37CQ2DNNGGCyKhE5xgR7wEEJGC8yN",
  "key6": "3ccYpv1wyQsJPxUk9YYQFKLqwt9Evvcva9JJ3BRxTYiiyrV8L3twxtmsxUZVoavX2zPvrQf8muvrP1Y2DPXoGiqk",
  "key7": "yWAtUKdgVYAcDubMeQnywAnStddLGXa48r5q65MmuJAEUp9rMmJzZXsQypugCQPCCkGAupxGGJ7SSvUEQq8ktMY",
  "key8": "69HaDMfLF4ECbfFjKd5uZrFcWVxfahEdcREx8owtiTUuetLfzbP89wvtxq6nxBVA2GXXXM9QbfeLHGguVj7GeFk",
  "key9": "4zqSPjunYfjYCsXychzu7PKqmFoJh5qZz66CVv91wwf2Gkf4Sv3aFpLK2BDgAVDwPfVcsHnVidUUsTi5y1iaCons",
  "key10": "29EoQ9JJK7YwDr4DRiW6cNgN41bJZS9L1vtUSufxpVisimJXuSe7XnSeD2VpVU7BByQwmHW59vm8fFzVarAimsKs",
  "key11": "4eLobcuZMo6y5ktmBuKHWhitapzxe3DwevkmisGqet16cp6X4rFEoeDxcs51b56hEFBDhvuCj5Cn8Ro9DMvKPUJ4",
  "key12": "3z1RLxXJMR4BWyKGtnJdu4FVwYLnqVJg5hLJmzma8NAQZYBhFVBG1X6AekXJBZiHPbf96uFaSqV4SNc8ibc3aSjq",
  "key13": "3sYCLM4YHPUNyLdGEVrFmThfhx1qM64hZmWh2KZFcKkBgA3N2txXnt45AHzBx7HadwbfHdDvctNSpruqyPaUZ9ZT",
  "key14": "27VbVcGpRn2KSN6bMpLaqzLgkHiEK8JvWx3MXUVi4qSHVxqRWCgfcSH1sHMFWUkhnfhGooKpVEtewxpdEbdA4hk9",
  "key15": "35rWoBxgGWKbxHekn7vYW6uBp2B2vL4VzWTEBfWVUUvTfAecaidofvmmsMMZmX2qaTKTSWGzB4mJK7sLTYgNe6YW",
  "key16": "itu9dthj9yM6Hoq5YcPVB3NEkUTUEi8L9wM8KRuWqzX9NXtR66tdP7AR2DUhkMcPFAvGaTSBXoD7iTxKCDufKzh",
  "key17": "5B6SB6UvVrKa5J96JnfHopGR84vQrtVS5Nt35uwRTL7Aq39F4TToE5ZnrwBFNGx4QyApbSN5YbBKzyU2raLPtMyZ",
  "key18": "3nJDVQo5DXFcwJRSqZkj7re5F3EDQeJ7tZzp2KKqumKs4RmCdyFCRwxgMJZRK94PV4oNxYrGa3Z6zicfyR5mKWQA",
  "key19": "VZkzaHqd5bRjU5Pq2ph39Jr8wKg1vvGbXAEXxULpqeWLm1nKirEXjzAW8VqyW6FQQsWdB8SufMKRunPnj1VAWst",
  "key20": "ZTqZMddzaqACUF164CSEKgk8dRYaKqkRZ74hgvJoFuF6ZXncgn6V1KgqKsAWqJVvUJ6RsMM5gGnNGQPGogG5cpV",
  "key21": "5hBLPxCSphbgmPUJM5bLg5qGMaR34dpF9s6gEebiJN1H4LhFyip89bcLGJ3E6VYKMmQ14hdjPx5j3caWuCifvsdx",
  "key22": "3DFXSqz3DSBaozso4z3rbkC6cp14Pj8anh2xCKLDbTHCPAa1gcrFYrhEYJF7N7NVdi6GJXyELVpvBPc3KvyBKVph",
  "key23": "4QvD3duPc1Hkx3gyCGU3Uhs7i9Fy69HX4dCiSUAQG7NK386wE2HbBtK9NnNbn1yH8ZpxYbMTJs9sE7SaDkjfwSQA",
  "key24": "25sxGnCFf6Tgpx349iFKZjyCFdKNHFcvx1cEjPzEzZb7EHBLSA2RUVi7mxCZhFQxXMp5eGZoC8bQJ9z9VsE69h7A",
  "key25": "4SPQPpccrECNv6Rkt7DFi7fSFQaXXw4qrU4BNFt8TSEsW9jmLJiRVcUdUGjMvaEs7Ac6ih1rXFzk3DYJDPXRJymx",
  "key26": "2ufYKisVLUfSTvchNgPtDTmwaEzsQf9coKTRN9WnkqVToJ6Nsvc77jKsC6iXKFqBNHz9EM1rCmQxuAwiFhzrf86X"
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
