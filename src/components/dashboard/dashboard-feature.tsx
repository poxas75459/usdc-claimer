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
    "6fBK25YSLJGf55oU4RkdT5aaaQ6MHYVpJDtx8XsYK7iPtAP3PL78KGe6Sd6racR66agjRSRLy5KdtNsCuvrsKrd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24YYaJ99nLTfmTYN2RTqS1x6bCusXUbftZoziPUuxYjjy4BTw6ignwgacpeSecMwAK243NncS72C9bffNDLKfPqh",
  "key1": "5gQ4DsJwV3KGteL9UDcctVnnUnJaxS74kqAgcpFi5Dj7TEk1TH79qKeZEYHN9ZydqQDvtGUri4CVqrXTPyqZ6Hwt",
  "key2": "5XTMxZx32sRVPTYSR2rzCCMaF5uYsPKbQjGJGG6zVPT7VNRncttDzT6n8vffn9ZAdJu61Uduai2v7k5sfU9jHo55",
  "key3": "37kxhtDPo8vso9YTACSjMW8QLumDgqpwqoWMKNoyTQdvo2RLqwhXWnWcTCkmV2yVf5afsJhJzU6UmA2rvSvrnU9y",
  "key4": "2mQqoyXvmDYHB9iU376FGmhUsRySqhJ8v6jPXNMt7TfwbBK1YvZpx4j6gW9MctUBsQQ51QPUXwvvvciyhnoYo9hs",
  "key5": "5rkLsMXcTsjsD5dHZwwrc6dpH5W8ajW2VPExqrdjQJaunH1V2b69xz1o6LEGeLEMd3SPZtBQKJ1q9uSrfxpBjcBj",
  "key6": "JkaU179hMhnEupnsKCt3i99CgYGWMeE2SDfepBNGG4QQzg1wRtPc6mG4mWZdePJLMg5Y7dfp5HNQwWYqK4U6H5n",
  "key7": "4mKZ23KfYEqdfexotMhwLjqDBmpWMS2Wxmyfz2PSkWb7S7Jpb96PQyEfFNeqSz1a2TkihXTBbCxZZtMiLM72AQWy",
  "key8": "3HESJSCsb22E4ur5613Sn54u865hzjSKJbwfiVejYUzeUj46px693G7BZakWLCCCdxQjbuddNqJ4aBnT3HEkanYF",
  "key9": "1Umqdb6YN1cxbbUr8VBVHTm4xBP5NJZ3MejcwNpffuycQQZjwmjUzT9M6aqCV4Kja1xi5TMSHZEwH6BwxV4xZ7F",
  "key10": "5AshztS1axAueWXB5mPXbp7SCyRyk7is6Es4tz6d45juvK4uykYAAd1NdbuZfwLZvYyYyQWpK133nVxbM4cDc4RL",
  "key11": "5xSLQVriLHANjqSjhAwBfkxSseQk8Xk2btaJQbkj2Def86BeBckVW8AP7C3AEAudY6vtwzshHdJbksxFnK8EHyae",
  "key12": "5g6ckL3mJthdMoBMzZpvbMH1q4HgonCNq8wHmkwLvsTfTb9uxBFKyNC6gMGoJW6mn82HHW7Gw5o7cRY6Qaa37UF9",
  "key13": "569mXbdVU18oq585EUf8ZqhedcJtYhxrEA6MjroNUbdNVEhQd5FNgdzpjgd7cj6YAWj4hFMXgmjGQR1YmaV8Gu8a",
  "key14": "2PjPu4uk711Nu8xQ1yzYbkJVNsbFSXCrXL9A62HmSTegvWWJpybn8AFjjZfos6CMSNtKDjLXUfx5hufVsfy2iswv",
  "key15": "47HyNCARxR5SpQvpa3Mpatq8JyzEVJXExgz8amBVuJzTvGhwxi8pJr5GQRxpe6TX1W3aaFZmLBfzihZiQi6ZWvk8",
  "key16": "3ReNCBYqzjKM4eegzo8fjaKQeNAtKQ2dEGLuCRpb1Z4wy37FuHURkzmye6nVe5TokUSiSRxVHAs2A3MGmppT47cm",
  "key17": "543zK5wfYRDPqmCwnpKz8iReBoFz5MsuHjpyUPEFHMGZbvKAEvBaQkhLph1SJ7HwoA75HvpDEBVb8wmAh3DkQ2EE",
  "key18": "3TqdTs4ryXSjGLxJfCvt7GC6hFWLc3SekWUwwWSUw1cGC89LJBpqWj5RxK8bvMjGhof3Xw8ZFe1BrZ3VxZ6ZU48v",
  "key19": "5GziSiKQwbabQ5HApgut9AmnLJyBYf8TNuupaMTULjq43uDM5X2XBo7MdGfdjysfRT4k2qkdipVaYosi2gSKbiGh",
  "key20": "PYDvbmtkRNMAxRBaqMmfut3JWqwkxdYE3zxSomi9cxShzGwY8ZzGov1pFM8MrVevTNUqDVapAisRmahBa4QbyZ5",
  "key21": "3zea7ncJ2JQ263bbX4Yz5f2XiifCM3u2qSuBvWhzvJ8AF7PeE56XQaHjgX9jrfpfBWY3q7PXYvx6xMJq33Z9wz7g",
  "key22": "5PZ1r5WbjEBcNY88uv6qoPCiE7e2xrFBTzaRnUJjRXDvdiyFXcbSdkiGQHVA3dtL6LKwQ84zqNGEje5HeiZt6ubk",
  "key23": "3TtBQw5m1eTeywNzbtWAoKso2RkVUWYmCmEtW7JaktuxyNUpsYcr2s2VHd5bHJvmsxkFseJmwD3JHKWWH4Lij1Ju",
  "key24": "QWt3LTFkChVQr28GNjXgMtGZSwMeqWFVnG4hFjTMkKZ3t6tuhFwPzJrBqUANXADiVvjk7uPkzdL35oDoT4LR8NB",
  "key25": "4bQRsMNfGSxdiSojt3RwdtiLqGiXJ14r2C6wrXxtxohWqmexUxEAqJD11Yu3Jmx9AsfRKRKVsjWrSRLfWfvJwG5J",
  "key26": "3eqJ4XmaELN3FUptrXM3v7rhcExe2VqYZvxS3BBTo6BUPK1Jo2HhWDgSTWnGkPnXDM9XMcxeqGyMCa3k1jhPomj4",
  "key27": "5GkCqXp7ySs3SNgepMdhkEQmtEnKTHfQDx4EBahzTeCexWoBM9tnzAT2tnNxV3jauKaUQwrn6jatX4taE6fa8jBn",
  "key28": "2NxaeKcD2hM8LMLmLTBMkYgkvBqdkHR4LMMgjKo9G61cguDsrTNp4Sraq7c1KWbRazsaNUganUx2jUTW7qkM23pc",
  "key29": "2GnfMz2fGxZ3QG9MPdhSs4ErnsdQdiK7KAZQRCKrFsNCp3BoEwhW4zVvuJHivTxhk5JNZ5rKXrZxEZ4H5gUZKS1j",
  "key30": "45Kc4FAwvCQeEXzpWjvbfT9JM4qePvNCxn7PqYJWREGBron6w3qDsQhtRSAZi5NnLMePqguyV81NDZHd7L678QcW",
  "key31": "5J7sv9PbQiPro29rZmn8JmokkMbVzge4PoH4UJnNkKNvPtWf1BqeEijamJJyPefd62HCvMSXEVBkcwJ8JNyBH1jX",
  "key32": "rV1AKfGGP6Mp594HyNLywNyn5BWHtTbckUU5VkNZbvYzXBvzScGKjSzMhXKC7EgDvmfMobf1WwYDYhjboYnesQx",
  "key33": "3J5SEF21rJ2byxPJ6NMzVhAG74Qc4Bn4y9pP1uGwsLPgZPSH3Py5AXKXspFa2ZboZAZA54Axvn6Mvt3BFwjn5QNh",
  "key34": "3SHzsY7i23t6sQUarVnWcavGiG7L9wu8EuWRvFxKfuzvV3oqxD1UXwjw7ELb7rwJbV4hC6AkL3pV9vwtgScUKv9e",
  "key35": "32UwdmzzyeD6cdkQWrK4MPKkiUgspkC6wvzZ1FuwHX8h56N5y2yuAbKmJzaTV9wgh5fyYR2vSUpXriMDap6HWGUK"
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
