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
    "4CSyGxyhuTBVYju3D6gQQWHpnL3znjBhvJYSJQg2Xf1vqDS1ZMVmmZ79zyN2ZFfYW1w2BgmoYjbzXXgnxSYYwgsu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BcuEfy7gnkLaTTmn6sQqPb3CJQq4ZMm16dGbPDbEmMHMvghLx15251tKcN72dvvBjM8rEeAYYCzUHaToPT8bYDY",
  "key1": "titWNsZStqPSJexudHTNwFJX1gRdmgPk1cba7BhuCBLyjMRZsiiQJQa1rMX7BLPerbwNDZ2sZpuokyrxj7vtyPR",
  "key2": "2SRZfTHUixGBpUu4ssrpNe7ZNCiCKpi4VnKkQkVtYDa6DpYAtgoBwKfFogEKEHXFFHRTGZsn5NnUS9BNwkntgtFX",
  "key3": "2VjCqwrxspiUNqmA5a8HeocKQFxaYzc7vXCHivfQWQVBWv1BRt5di6mxVGcNNSRmQ1bvnuXWnceTtxVYpnnnqi7K",
  "key4": "5L2eEJgH224Krg9SwsYq7aEkn5P53vwPhpwRFdxeRGUYCVL1Mq8kwucfWH7gSD9itNosigFoyrkE6z47Wt1tdrbv",
  "key5": "3UGRBrRSywzBcubA7jWaTDJF2dXrHv2A8BhxzTvZajDVFeSAEV7bQbmguwXjnXcXUh9eYNS5B2yDbRG7qxoBwndu",
  "key6": "64cWgUQ8gT4J5eY4T4gno5ty6EbrQ5LGSoJSixgtVArM4nCCYiJroDt1V8qPzJkXbRoQDbh9V7fBh1VaXtzBMrzF",
  "key7": "321dhCxvXkJj1PmCiLJWhv8DTzZLpgxoyYMBkpEmZvmKQN8K32hLZXbJY1D1DkXTcAPEbmBRVAEZ2FCuQKYP8Zcp",
  "key8": "4XGPnnpovjGTJySW5gc9jNTrwV7RV6radyo9bMrnzxnm8SxX6VVCoXG79qH9d1iw63kvaEMEV4nBqy4uTjXvhouW",
  "key9": "4zsuMTH3VFACADcLcdQn8YZdA6dVe28ctah81yx8ssVLWELagsWH2LLAD18fzHZibHEin9tZ2HzGmnqs8VadeaPx",
  "key10": "3thER1EzxioJGqiBXcb1Tv2i9kJev6SsLHKKMattEq2cXrYwkpPRx1JxhE43meZMkURkjUrZX8HXDdKNNHUaDRyp",
  "key11": "5MnhN2zsVe6Ca9sNyKQXE3MyZQdEjKydxKZVG5JpJzVjkfHrDLVoD7TgWXca9WvMUnpbeMf6bF3BguJ3MABqRiXr",
  "key12": "3B5oByGy1HRyS7vj2vU6N5a3ZSGNP4D6NozEtp9NCLpfufFfCxuFffQybrjQYNZvaGM9jDnzCBz4pjsoGhoUUgAQ",
  "key13": "39exoyrsnmrzncsATPBYnyRXKMVKSk7QfBQa1H5GMv1TPDYGwKmiox4KHMXhGvoVZzqRu35djS5GGfhxHy4MBoxT",
  "key14": "46wJR5NrDmUbmsFx81CkAfnvi7wCRZsDcNpvqR1yo4zRL9aybNdDB9resNEnpvZ1HLjYsQPHohA79KsSof7qRc8k",
  "key15": "2avtPjHEwZw8poGVfXowAQ7S4kGSfRZFx5FEBY2iFgLdJ9hUYakmjJRJDXatfW5Ttdzspgq9kemrpFQVn2hGeHxK",
  "key16": "3hWXNY4nPEz446GyyX6xsPuEdBq9va5Sm7ZYTB345Sava8WKYbfNXRTwZopcmBQD65vW2tMjFo5M3RcpsJADyvoo",
  "key17": "2Rxg9v2E5o6aGzGvJWMuwL4uJ6PzrUrxQYMXwaPHbVBk4ynE7XaLqWm9YpFVEPKJLpWeYdEApbkpi8qtC3yryDec",
  "key18": "5KrtFPUCGHwE3MhR9HdKBTJV3SocRZugRxuWaVMVLApiRo5rM75PmnMUjT488rGKahMYWLFghTvvPzfm6bbjukop",
  "key19": "3jZG61jfqLaqRi4xFhRkHQxTuAMeu36i24F2yhxjeiKu4D9teqdjRbFSTwbQCWXA3CyYoPsb6qAeRG2Wq2nx7qva",
  "key20": "3zrDMhKCuUz7nFvpNYwMp1xhi9dQuhvjnxxx45QJTNygw7kHtez93ggNPDeyqXReyc9mLRvDsVTL3fZ1RajSyys8",
  "key21": "4mmomLsMQRUgekjNLs3tirTiuH7SDaAUoovWFmBt9bVcz8PQkVarZUxW4xqveSrE5oRfCSXiWgfAv4x1UaYBK1Lk",
  "key22": "5ifFz82yxn41d2RrbHVuG6XaBrc3AUxmQiJKcEp6weLAf2RQY7kNFHgA6o4NGqqXN7qz5RdK95zyAqgzMTVQaKph",
  "key23": "GrSfAbc6HmrS3Fd41JjZUsdP8xRR75NeHM7Utco4QoVAifsAuzeH1qUWgcAatRVq3fY57i8VrBNu58Ybn9ZKFTc",
  "key24": "5BSaoh8PmxgxPaAXWd6MAzE32cTnpSLocps3u9GyiVnoGLFpRfUfXQBqWaDSdcepRDyBsXRR7BpScErEntbVZpxC",
  "key25": "4emxjyyfCoSd9s6NNvQi4wyBzWHWBBp8HbegXdHS1aCgMKaZdJ4Mu82NvPBictbxHcMg2n9aPygSqnEUBX8hN4nq",
  "key26": "3p4MKhu6MBmYE15LCM3Bn4qyZiAkbJVCefJd7HzVbAUWw6iLuuYhW4cuCbP7n3RTrCtyQmZ8maLTxGas6PXuz6wn",
  "key27": "3WyaN8YeiyKzYYhNpSJenS6eAHgjGss7FBwT226sTLgzjunkDEgbQgPht9UWbR4fP9uheMSsTYFVEvoBUG5vjJUq",
  "key28": "3xhqgkikNwWiMgVNHceHv1Ct27FGQRqeAffd2KMdUiLJBvy4AZs1Suwa9Q6WWhsxk36VZsAtHNKha5GJTA6PLodD",
  "key29": "3Go1DWuzr79tRDKP3SrF1R7whQtwpbfWKu9GH3MN3dhCj9rBrMovAaM9aBVebWx8CugbN56KRygA3JTXUMJuMKx6",
  "key30": "5KdNmqT4maMyFPEQcwgM3M61bm2tUrya8Fvicg75cfrZ8rgXVxX1LzsQUJgni63uJGBuhL7JWMA8tMYwF6qM2g4U",
  "key31": "3mPFgF2DBpi3b1saqtMhWbhokK9uwTwE2jkw2akoyYiEFx4e6Nj7KwVySq2j24xULATkBWBPP7bqX7oPqbP5CrP8",
  "key32": "3ZBG89WvYCi51h5V116URbkP2HDhpD3h6jgyqNVa7779HReyxbfgwMvLAKtszS9kRW8W8zCNgMmyC1yNHUNfSvFT",
  "key33": "4BnDFd8Eu79HmfRi438Yc2wechueiLqnSnbAbgLL2spZQYDBgPniZHWDovrDhMJtrvpesNDfEbXHsVVoPSFDSVjY",
  "key34": "5EoVaQskGomMmvfZbxc9sS28qWoPgrNwXWpL6JNYqmgYXKaRtuu41M7p5Wkc1GVxG18zeMJQPchJgc58Yf2bXo9q",
  "key35": "42PSinWp23uY37hHqgzTqAoVGaEn94RJ17gPa787bze1apoPF4jesioxC4NifxNk2kfrkSMKbTFXG2z6yuuBt6F3",
  "key36": "2vemUZ4z94vAfDvQBeY9rLNVZENZyDgKfuBFDK7gxjZHVwkfi9112es28K2zBEwv64pAjvoxkBH8iWuf3LCuMy94"
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
