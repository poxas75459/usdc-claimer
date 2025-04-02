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
    "2dLjDHpEppGwN14sdsyaskgo82PUo4TAGicDSbQs1QTXcyGyUxZsrPNGXbpYNdXVQpe1s4eUp5BLv52mA8rFYCXA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p3oSUvn2hiaARcLbcaMfwVzLY5ANHTNhaYr4v6sus9P6BkZVomJ1LbnpmMKAGF8npDTuLKp8PZvt2WffDHYdS49",
  "key1": "5nPJXPU78GpC7JcJ2SyNJtCnvBRXHN4FLBfhTrhqQ51tgGKTQgMxd8LEoivXrgRc555kfAfc58pLMtF6rfQ3vKbM",
  "key2": "Q3KVrNwYRSrGbRYNy4eWpG7eHWJv8cYNsQDpKLsKrYb8FsFNFEEx3GB7XMjjNLKUuEj25JwhUVAgAE38TS26iyi",
  "key3": "28dCE24FY2K53dcaxY1QF2c4tsoNaL8Me7FJDnqM91oeJdxR4h6xoyuZU94ikd9nb628h68B1P8a7aTomYuckG6s",
  "key4": "5EeT7mxSuEMfq7RMcGK2vaW7AiZEim43Y72LsHtSPhg5YW59yHgdPf5i8T4D3TcJ5mNuwYZ7kFM3fasWu3bqEmBz",
  "key5": "2ALF5fLwzjCtNtLz88Nc648FFsV5JZ7qT3gdVdhYqnv2qYv4AtJrpuw3GtmvBSwHsndukzVg6kHLjceKx5FbrWhv",
  "key6": "2vmkrHXNAsN6j3yKLT4r39ByF4LawMoPxuWVeT7XwZvyGobx4JhTD4De9qS33uvN4sE4eGST3CpvdmsCx6fvSycE",
  "key7": "4Wi5KseEpA7qZbXhb1AEsuop8o4S34uhXTkbQX7mtVPeQh7cBa7A35TWJDCY439dtyf6s5soecd4sjPvrjgWButC",
  "key8": "D5gXuEpPUAFgGNTjxpEZhyrw3nBBkYUYV14AxVwvXouvBr5eWNn1PQX48Thuxh9YtAszXr2pWaXaWEBDFxhHtok",
  "key9": "4Mf4X4hkpzWGJMSoBCRkGGEnLt3AqJEzkXyo7r3NdD3ng5kthELjmtQgc2qi44xACUjb5QDrLHey1RUCe2EbgddR",
  "key10": "nrKrovGhub6h8cLpkCPiLXJ2d1gfpwksZbdZvLiucgZjFdifCwV3CtZq7RCLSz4Wt6Suva6SKJ7gFKxwCcVA5ZZ",
  "key11": "2XfTxk9xUpxKt8utzLxqpMQDKvTWvhkiyM6SY3ok5UruXgMPimLMAq5hzFDunPaZ1i7YcGGMfmxdJXpcbQs35MEv",
  "key12": "4GLNt5FZm2h2snL17NvVUuPxaoQmYayM6DvtgxgwVBd9zzDDh29rbXZd9JKRJwsDP8yTuJoftHAE9Lj2FW95gjQ3",
  "key13": "5SfQxNst4XJEHhwakDT4X9oLqBcS3hceeFq21yshZXiBgiKT4xbkxgqJUkVRzYZ49ZzTGzbmh2AYLudPFHxiATuS",
  "key14": "2YbFUqgwV4xj4uDeui3dvWXURgdfmkULquqdVsLu98MHzA3jtv7d8sFpspBGm4JzLaRv2KgHPFWer8MeX2J7eg2i",
  "key15": "2X5sFx9igJo2hL4Zn97wAaosn866RBkdrrcp6obPcNzJCk8zVDDTtuxB3pLkGMRbQ478y7nXMr34HgeRJvKuRF6M",
  "key16": "2qRQLzbs2whgiJFrkWthrfzsoWSTDxsAePp8qxLNHKBVXN7v7Yp1RUDyg9qYfoCCkWsqfTySBhd4vfEWykACfR4q",
  "key17": "2k5uFWgWePynPUMpGFvezKV9BAivH5tMMdHFagXMVfgdLpgEoK9tznTcqnW4Vs1AUfdp3t7c69MuzL5ZtJ4D4v7X",
  "key18": "2EWEyVyAoAHdYXD5cJocNSASorDfiNVPMT6nW1GmorBTJa54EwU8C92F4eHG8NE4LX4wGZxiZTVhBuA2WF1yu58f",
  "key19": "3DqkRCrVDBgnG7NbaUhxvyQD6uMuWPg14s7fRmsXfyqrDDv8E4FqawHfNjSkPznYNGZucMiDZtxXv2t4Y1mcCTMm",
  "key20": "4689FyXSJSm7Q4dWSzqJXewfiVcqxto5x8236vPLcJ6ypS3MFLuJjrdJx84k2VUNoc5fAABkcVowPWCLCdKPKP4z",
  "key21": "3tRnbjYKRyvkT7T21hiNEPvVBBhCpd5PBQLTXFgnxzdyerQxpdpJwEDWvTVth9FwQqERLyyVpCpE3bGU463cW4yv",
  "key22": "5ehXpb4FoC88Nn6nKd1u3Xp9kLx8WRpjjwNFVVvYXPVB6nuChpEKKrEaq8ayhRqiPQZNnevbaKUqq9UdeJ4WM4BG",
  "key23": "T7rknfocHPcvUzzq7GpB8KmXYmKtYoDT8aD5UVSUeMMsYd8utZSCqGdWCuUGQi3ALJGsvYpdZxGrvZoGvsvTj7E",
  "key24": "2rWEpJ5e1iER3HoH9D2iLnEAz51oZt6rdkTTUo7YbntYuLwpdj6LR8xGWRrz1p9LzHuLaYafZ8xSkEkSKfyF8uLq",
  "key25": "2RSY3vquWTCFc33HT4kuYfQCeQp6KdeQprkZKvdV6K9z6DetcwVjEaAhr22ipZGx99yw5x6ymvUCZZhncJW4z7dx",
  "key26": "27N2vsT8bufJSuDcPcpHNZVtNLeCy4fqBGrXKqZf1orpsDwSDn1U4bgDaiGEKmn8Zq6h1NSfpeu5bJRdAEBZru1Z",
  "key27": "3TkvRnfJP67qWe3yZoqwXdd8K7wKSDMA7Rq8kyXTU5tPJrXWs9a6fRuSGdfiRJvLpoj1P8ov39FF8mpgwrdFAAGg",
  "key28": "84XaJ2Ta5dKeffWns3v66n95xCj3upxwHZ4pU9iYdZhWAsoC9ddVNZzPxoce19CKiwBWvTTWZ6vwwUubESH4DAh",
  "key29": "5gas4ZyeauD7nvApdSi5Uerv9sM4ynsteRNHstf4fiKZnyckpAj3d9rvRUXGj9pUATwng7XqY4cU9ZbrwkRSikZf",
  "key30": "4qnPFdKvNwYyWGvt6zHW1MMssJrvjRryAnQS4eYsPpo3SjqtTxTvBej8oSChnDAQvGDqByYrdwatyapDfx2uVCG",
  "key31": "2K7Twe4Q8rnZAkV1RoLDkJHXBtjSeBKKhfsoam37prLxcuoJHiALPFHhFTNeT5BZJ9twXSjoPnGjn8Abvo53fDvj",
  "key32": "2dQT2eqjJTWjLtitJNvVAyBepqDWq3K87ypNBGFqqH8YzomAVUQvHX7miJo5G9tTX6YVinkAeZef1MQwTdFj4be5",
  "key33": "5vvEdY8A1n5oBnX6beviFFkgctxQREcaUKw6WT7bD25vAHnAuhXCR82MtuCecnxKy9CUp7kKax3uhZWzxXx1hLTA",
  "key34": "3jzZcXJahYW9WZoie1NQD9aESceBwWdasD7BjhkzDH4mhKJavM5Lzy9n5STpHoRwXS1jekuCQnbg6gq8Jwb2KRRZ",
  "key35": "m9rqUxRq7SydCarnU9vnqUs94gGiX8tJePPLcQhAUnrBwmjsVg9YkopY3XQBBuzGUEUMMf3nZWjhvt7ZHwmyXRC",
  "key36": "RER6FKbMJ68CNYUe2SHzUPGkbHdqUy5TvGSTytFfQYdfvRWuFAtpmF9Rny9Ac8uFWBcDPWJjhSjVzwGaZ7t3JRj",
  "key37": "3vYeE7ww2MzZyh1SmwtSob7Dq6R47oLRKsNgfUNkPoAvNeTq3CbRoRzLwd46Dvz15KWfMo3cXBNDsBB7mqHfDvFk",
  "key38": "3FQ8wADT8gCt3qdMeY1NYS7HqiNs2Q3PianHJPX6qH43oxApWwotjXsmqteUrjgDZJYL5owRPU7LkNY4V8YnrEKh",
  "key39": "2CVYqanHrEDBE2QXZjSZYTM5Vgp8yDauLNU7BNePUJr8iguhzknykdtQHtNj4dxjvxx3VU68r2dmFAQf7yBxNkez"
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
