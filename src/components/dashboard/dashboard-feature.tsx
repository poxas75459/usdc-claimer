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
    "3STjf3QuMPDhciAtGjs7QvXT6dqGcoJCVr6ShVFLYS2ZGiBm6cvsrNzyjYZJJf6sdhjGct1FEWSD8XCVYy3gH8AD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E5GXNYkvG42s8FoyDCFfgnySeGVL9C8ReCWfLcqrn1dgJH2hmgwp3Jo4x51LQ8x2kDoBYuiiBSNbZguf1RpwYQX",
  "key1": "5XMP9VTcq13hnxh6Bt41ygZApcz8UNMPQuXneVCDHEY7UhVzNNNdoQFtqNLmaecef82zifREioNtcaozfVL7bsxQ",
  "key2": "4sUjMB1b5zZ9pABGhA2hk4W9z89RdhenpFo9K6fAwEgBW6pHDQEKCHSKCJbFpqCwjQ8P54bau2i9DES7fSozaq8x",
  "key3": "4SmdB1byo4PbXEBmsFURaHDeSRVigdMjEXMAp7wBtgkGesKqXTsnTNyzvvoeEmNkiVUHXrmWmriZNzFenkq9eBYC",
  "key4": "5PLdnrMxPcvcqVxG71VDHuo2WYfrAhB4a22KpcACRUo1xWJEse4TUAMZB4rXxGovStNfAj7GUxcgbLfjzFTLGNPC",
  "key5": "8udRBGHEBw8SFV96dg1oeeZyUW4hhrSaNLvj2gZFPWcyEELSipPbzq5pfvTYTmsg3sP5Q5sq1hSemRQHRvQkxbk",
  "key6": "SLRfSk637Q8N1wbUtv2DLs2PEkw6z5CBAqDoXHVWEreCdxDLo2uaypKEyNAWXUeB3786ShzPfMvhypAhUr3KfeQ",
  "key7": "4HjWeEi7d9iWr5WyAtGQn5aATvWjQcNLfdCLwhPpEAzojMfRX6Wn2GoAut9VJvPUPYkKtj8CpBEtkNS1fZStTWqG",
  "key8": "53zEuV6MMCdrSKrYBwUo3ky92eE89Jfzq4adGJSAdUtr3atRi5f8w4S626T4aNK4PQkgZqkTNBLGJe6vLQ5j1DsJ",
  "key9": "5rGAauNRSzKMRuBAZLjpi7wUZbkgKgqyqMUNS2zEBJgSoHXx1xysK3MEVJsQaqXi6sV5a1pFoaVZSKs7DvhCohPg",
  "key10": "26J1CP5gNzHN7iJzbAwrQaw6ZUr6v6nyMsMtSWz6Ki1vAU1Nu2EePbRwf7uE9UfbfNtzrjz2Ha5LZmG31MZnxZJG",
  "key11": "3YLY6xgc511s3YVwxmJG6NzYzBrC5FiK3BXdLPnSdL6kiTTE397Pbh5wuDWatoSEemc3oNACWrwx6mSspRYCG3Be",
  "key12": "4psEeiK9Eyoy99mPZNYMTCvHkxQzFrmXTo85hKKRj7M98TL4zDANGLjHXuCSpNseJisWKNmoH3AzbxfoYuiJ8hUq",
  "key13": "3VJr68YX7jaBxotKgdCy1YXUfTykryaaUHmTpxL82U8Y9AG7sBD4wp1HB4RpnW3vmTTjdmVr9exkZvtsRWruKMAM",
  "key14": "2AnP75siKNUftzuG9qw1gSHA9GD2eu5SV4Rv5e1QCnXaBsWT4gGZvEjLBQYVimQNs32NidVyTB67yxAqyZAY5K4x",
  "key15": "2dh9PudykwfjR9Mx4nq7fQqZrB2gV2oWUYJ6eTZQJrGXgT5Xsh8YVkX4wZWw8iQ2Kt15zaYRYBebKdN3eVF8Py5i",
  "key16": "4rRHLJ2TJaYGKiqGwqWPKEc3uRwnTwF5ydabg8oLoCwQnSeDR9jMo78PD6HVApBtC7Qafb7om34rLUCbHwfLvsMz",
  "key17": "5VnXkDf98iKFVZRbs2U6mZcu15j6qLTtx5HmgUA84NWEzuazyJuvXAifYsNkoo7e8UerpQo9Q3rsB5y6eXxmEdNf",
  "key18": "3VbM8fLrfuNHGfYhPRe4CXXFHF76vgJ1fVHe9yZx1ubZQ2g4YyFTbDeXHUWue4whtzvuj4cJTd3UkEPAtS3NwLKB",
  "key19": "5BEH4BqiWuWAymXXxBCCG3XTsGsFEFmfX5o2eHZMbbZfE6muTb4hyE8DVBCufbsxvC7jQjyWRxf8FjTYg6613oFs",
  "key20": "2z9VZ8fo4DiS2pugwEeansVX6CEnNcFzfG3g3fsfUVJEhG1xnoEBgFTU72ELeUTh4Qnh5eEmyqNAqH1WNwTFgqMu",
  "key21": "2Xy8DBZSH5Ud4nyzbUNpFzFEMDPn9ZyQSaVnGKfzxeaFQvxbppY4j42Jm662uhsc3s5kG4SXpUF3rRuBPsA8Yz9v",
  "key22": "KAaTakqeGSQc5YFRFiHxfWspjK8eNgEBv4WGAsGq2dg6RKTPNPsVT7BjHa7cZp32LbeCf5ENVzqPccwGqQy9VeQ",
  "key23": "4M7SbN5is8T5J3zt2K2M7GEmY2gRpP1uFwEWrt42yummtt7SGEnELiJ7Coisj6U5iERqMVJTm1aFJSuWEbxXJ5ve",
  "key24": "5zAcgu1ywjXqrapKquV11vzshQ7e95FE8BTt42AAc3wLm9YUCT1UTX1qCWgp2W21vyNPdt7AKhAU9y2V9yXYbNjb",
  "key25": "2n156H6CSxuRSWrXQWhgrXp5UyZmHDRssi7Gfu8obhANGvcE9A61mqBc6uJNg3yspNprQqpgW8PgL9sTPvjLSFX3",
  "key26": "3Z2PBDTN7tRa7WWY49aRXJf1x4dRc7vqAN3sj63wT8PH6xMqF1YWWjwQwhcaTgV1w6tE6HbGQ99VeVMHAWZP6m16",
  "key27": "3mxmgTho3PLWVNN437qKVA2YUN5tcJQbBq6vuarDthBJTGSeenm3bzGpWjasybB5hRt5LhjLpSmBjWqyTxRqHPE6",
  "key28": "6sBgM4Lc65kz7iXHWHL1BHKCbdASd5H8EZmHuKUG2672t89G4iyhjnMAieukQYseeFJZy2CmnBeE45QeEQJ4jgN",
  "key29": "3BgvD5cvfeMqGssy8Voyzxbf6mCB6DBCU1QvevU5Kae2bCvDoiTkQb8BfLXp7f8incP9oEMJbzEBAuzcpmsbhXhk",
  "key30": "25rkZbPmTyofH112iTG4N7BmuZnfNBRtFg73kgbN7C88FmjT3u1ZDW2Qimj9W11ZVboroRWQfZzgxkHxfTTnSP3u",
  "key31": "Tk1meibqzBt8dBgJoxdhhntdN8NShvzDumox4ugccX1QXzjnRWgjRu17PApoBKyU9XAa4enFaTD6iMvmdsf7Zj4",
  "key32": "4kpSfyxwhhpGBpnQusW4YrPL5vfBKCT6wabNdgn49doEk2W8JcX7uFmPYKqQLkRTGiwFiXRAerNeZv6qxs9SbM1t",
  "key33": "4zy5ZTKweoxRv9sg1Du544nYLBLSs95XVNkwn1uCW8kTRuxLc2BimXezcEhvx7bGTci7Qspf7wwMGET9559bYFT9",
  "key34": "KbXEt8Umg5iKGCN3tiWnBKGZTFRKWUZ1Liv8LZ3BoxwBcbiWHSq6JNjahWCkFd9CVrQc4UTE9ykTaYPEbVha2ci"
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
