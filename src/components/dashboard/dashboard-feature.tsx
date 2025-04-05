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
    "2S3gy5mx66Fx5yhbchTqDwpPHfoY1CNXTQwF4xxEbcc5L8KPYEy4SDdAAr1eqCWkRjQhMeaHt1JYg8aNRmQo8tNh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SafAYQifTktzSAMJ98isGikD5FGAuvYPH6yKyUHHU7YPqyJYY9135uNh4WEyPQ3u9HjZ2BuBV7QJ7gAAfvyHmyU",
  "key1": "45JwxQAKuN3JQ1vgeaXvzv5UW4mRQ75bdXnBK6rVL9xUkwGJhpBLHUTo9H7K5FHMpBCT1hbbTtTEFzaYdA3uV7AQ",
  "key2": "45LWAD3s1Zp4KzUEWz2AwVvVehTYjppGkvmpSjpZJAc5t12NiPYnBVTHAiGgvuoYDFHHH6CcK8bH5ttposaP7nes",
  "key3": "3dHw26KPXJJ9FJgFbJZtRP9piMSKm5rrFbwT6cFxzJm8e4aD9xVanCdNKhFiUHkGmNjp1Yb63c7c9dkmCuxKCGJ2",
  "key4": "gDzAcr3PMHEMyugeokmhzTk4AcRJkw6Z8VU2XxNbPjvjxBCVs6S8nJewmnD7DygrTgyWHzBF9wDwoGbjsHQDTSs",
  "key5": "5UTwq3M9uYKx3jpvWqPM6D3HH4z8B6YDGYBmLkUWsECk8k5txzuVQa43iDgWKTLMP2dQhW7kBuLvr4bweBZXsRvG",
  "key6": "5PK7yW49JyM11R76AKxGeCUUEeZsv6QrrL4GzPo9T6gHJZLN3gS7HTHQiv434bJz5e1wNJbw7AuQWuTxRLVUiRFb",
  "key7": "2ZEeRssFeuWJeej3hDAML4RLhwjMakAL17keD4bEcRW3yyK9LAnMSmrUGf5HmYeSDCuLxp6F9qaXCWWe6Ep7KNR",
  "key8": "2nmjJuXaTXGzwgGjTSVTUSDH4XFQ9iFYLqhdBf6WSJJrMcDBtM7rrzCsich68pRa88Q4N9U6k79eqkRVunb69TVD",
  "key9": "2HBDCTnKZoZBHCk1M3fb7Z5YhWEmqmCWx8zubxmvQAsvbfBw67dN2ZuSz4iYHgoSbZPv649Qg8SVziG5dyLzsudL",
  "key10": "2Th2q8eV7bB5JNKdRHJTFp3qBdNicFrgBW5s1KCoY6Geh3WtCU1QUtkfNuN4qihT13bBh6uZ6Yta9um3nncud6Xk",
  "key11": "3K8kAoXyD3AWfG38pUitNcAyEqvtM4KFiFDGFQinAmnuBLDRRcrMr1y8qztWV4ZG7yfVRqzJcuqyqht8SvNQEFAs",
  "key12": "5GAqA5BxoybmmvRruZpCzkj72XHPPcPrs8GQCwG2fbV9SRF7JKEjYLrpuScJo2Td4QdZvS3aQNamCXmaBBfsZpJz",
  "key13": "2iK63CJ3gMkwFTWNELi1PRpv6umneYRUDkAbVk6CriRWkEofmkT1vb8WAc7SESpifwsHx8gubWPAWngJJ6uSfWWy",
  "key14": "4Qv3w3Eo2EqsjTfK6C286KbvPXYZ6ajCZKzer1M5vyqs1aH61YPFiUc614cWs59ZsAw9VPU52du4rwT8gKVYHen4",
  "key15": "2uVhFymoE6xSi3qRsNuaGx8y9qcf9Nc9zYpNvtsmorjbqQqLm2nV7QHGQ2iyjfMQE3iUFD6tZpFoQvg39SC8wE1y",
  "key16": "3c9ZaYGLzEg1WJx7qdoYyhAFkuH7XQe75YeEboErVWRCCWW9FuCH46hm1jdXgwbF25VzxL28k5iHhXvA7cwgjpEj",
  "key17": "S9JepBGT1BpC61jTLK9LmPADZNt2abaQYUUtCvKQ4h5jinZN16VmBHHLavwe6BNoEmPMh5mFKQDYk7dfzjMsvH2",
  "key18": "qZRYZ9EgShqui4yMJZPnoxjFNqkmawVoTXwMGszRyPe3mKScGkkaVo92yxvmQEhUopypaSEnByE4d7MmTsfnujw",
  "key19": "jo8GczfsTNSTnomKyZohkeF9jW3ZCNUZHZ2gFmktqPA74RZHxMrCDW83G7LM9nrcf7F6btNBmviYniwwQwuPuox",
  "key20": "3m7Jmn2fJfSMcxMkQb7TjkcrhE8F3EKvzFgSRri1dw5ysE4gJaGBKknTRmf5zKm7LmkbnwTZpjKhN5bicC6S5bJh",
  "key21": "4R6jAXC1Qu3bMjLPjeLSs1xPX1hkeapQtmiRAfb8PxBE6cc7XH3aR1RKQ5fFrSwFmS8dudCrcw27Y8vtpmE4Si7j",
  "key22": "4mdGN8W5L1d7YbyATjo18iF66Duv7tZYJMKjgeKXieXf51PBJm1zSSreshB7mJtSf3P3zcRZQRtWwtDRfgotpuuV",
  "key23": "4WKopk5N2PKYSVZD7oWX4RXB4rofgUJhiBNvL6Msyxii66D3giMph5sHYtaJDR8TtkMpgVNbCy6fVTn7aborpcWv",
  "key24": "5GJDDnijiwqSGKd9QcHosYFAypZzwMtjx421mxMmCqDPhvFjkaiaFefEBGFBEd8iAFSv2E9yeTfp79PnaHhDckKk",
  "key25": "5UZ3tv6seqr3ev7FvztFX43bg4LfDWnFNyXoag8fszxZNkxYC1D9YWcS3q3GCigahwixfqZWRd98iEf8d3y2HACh",
  "key26": "5Vi3CSALbk4TT2frG1JqXytBnXMY71wujSXPfkJdXPomFw8xUvhyD8cVmQw93YfaAQoPb5VHEqYZUPvgwYAzN75o",
  "key27": "3MgEPtHuV8msZSSakKnMBTFaZcNhFrp1PFP7sboTP9RBxcVz8XMx5P3vMifNk5KMUUiQjU5mY1vcJ8eRdVLSXNFx",
  "key28": "4V5MS9acjmBCUuvbAkVowx2qYy9UECRkj5EYfcpn7irDopShvWoK5QiJQ1dNKvijM6iukmKDxdyMHJintHcfwCEj",
  "key29": "aaM7zimrYxcwPjUH2f5aCPLunNZgGFHM3Ysssxzz8n53Nqd5Znv47zrkA97QAk5eSeTGfodg2JDNuYgvxzq82gu"
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
