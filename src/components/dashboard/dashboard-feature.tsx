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
    "3D8P9r84KgFtgYtN4UPj8LLsEvCafNuuX2RUi84Ec74NL4vEydET3CALqNuxGW4V6qHBp1pe1ExvHrrN4GNwia61"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v94DawAQeipGxhQg5EnzDAGCDfqmBr579D5GRizd1nKV1ekZRadHQroARJgjeMDvBe1PvVBpyQxkvrwt21rV872",
  "key1": "4cWvh1Y1iEWFA3nvQEFeqkjxMu3amkChf6yNNuFJBXJc4Sc7G97X7gi29oAoERPDYw6q4xqqsVWsHK2m1HbP68As",
  "key2": "3pgp69dAKnFhxyUoiPS37XggF8fQYxsruPqMzuiZruQSh93CYNnKba8dCAFmnSCD2jb2Gz9E2K5TRKrfHPRGkiNj",
  "key3": "5SqVfE17JoEc2KueimjcgWLsEEcJZ7VhF1kHtL2nv6riJxKviHan4L5cc1Up2M7D4qRvLY7VewgiGDVg2JrSdUpP",
  "key4": "5eQ3eKiV2RHbVex7ZpsKacVdVTW87cvmo1EWyjXoLKBwiLd7JdHtVFnT3HPScdcSt5Aekwyuo3FWZWJpqnQZyttJ",
  "key5": "2TRFhCWJgVqxRrwJ3hRRz4L4zS9ivVTerLaAJpUApqNexkeR5tdEDhL7J8AZcQLAQX6v42ydL7yj84HNayczwXCF",
  "key6": "hq192gqDxMW3UMoe9tp7PNaftnYsNtYjgWSzrxgNKPDkQWWN4gp3GerpbFsyyt6aiQTW4ZGTUnGz7LLhf8ycAqc",
  "key7": "4uqRS8pokMR4dpe7Um5kWNv2VWabf3jy9UWymVnU4FcwVuGQf5dRNb1NVqiNXreKt2NXc8Tc2FtP2TfU5yfrCA4v",
  "key8": "5trKCuBcN4bHGpchmtcDxJVxqXApLaiHYWstzYrnJAZw7NkL12R4Thwjhf9dtMrFkptc5mCq3F38dHTd3sDJhEYM",
  "key9": "4CUTWawgoUYSrYPU9573h8tgsDRnSQ64PYYxFTHqEMnppeKoGteJZ1senzU3c44vdPsjvezmP1s2dsmMUGLvGdXo",
  "key10": "37pbzxWm93GFg3TTD5UxfFPmUZc1mLjZ8re8hevFMpJETERVynasCDkGyNYcuqDZjV8FDRo2xfQLKWE4nMZHwrRg",
  "key11": "5yAw9WajBUfTJnM9pXVhqc7Xu1B4YuYzRA1eXxGYdnGUh7zRYWbBy3jHYePCCzBEsDtaPQPz2JNCTwcQrm772CUQ",
  "key12": "4GZeT2SJ95H9NUdi5ujbpKgTAR5eqgryVejFecKYYjU924PZVRwYncqZr9o6wSJgf8LDp4FzEVGaTdkhLp6GHeh2",
  "key13": "3C1Gah8uzCYnMcN8WEpN2waBw6PA5Yq8i5WLt4jpJBiFMaCb3Kd942PvYcbhNbULYDBeNxypunFXe9H66CDSg3Tg",
  "key14": "K9KV9JGEDoBm8u8S34SWPd88X99sPCwjzFfo8nffex8V5d5XdfFgA2YipiteebntvSFkW36ScdB5TJXzvGHcst7",
  "key15": "5pPpdmU1HfiiFe3LUKMzrWnyo4tfsDAcx18pGN49FFb3GJyGQdzMWtgUhizeAY6o3uLtxSTCjgGVJt5Dfz1JtTUG",
  "key16": "2d9yE8HHXArwwQUC9fnhSQooCHsBmKmu67ozbjkCi7jsaHicLepcSRWCzMu3aPPVg2D1PsV1yai7WNnAFknwHktQ",
  "key17": "5ZJPcFqzfjicx7BTm17Ch7GqrJjv6TdLRHK1YpqKptQb3sFERjBYnf5kYNoM8xGcdZdWvU6MCELFMGwXnmqG2y5L",
  "key18": "4fzix4UmYZCaLf2TxbReRydB5evRux5vtjqiz1FpLKPkBQ8Q1NNSFY1gkByZ1NutmLjQgrhYuYUtPd7m2NNxApAk",
  "key19": "2gfz7gAHva693eufw4FurpW9f8x5gA9M6XMMWMrtyewDQBsv4A1L8Z3adbLhU95psGyb38NgK3o8ppgDut6J71bB",
  "key20": "kRWSJvVuBHjVkPz7iF3D52sy19C9RkCiK2kwSLgWRqwhaugfoaPHTQvzKUgASr6wiPGd3PnrhHRaLKGKMy5nrw8",
  "key21": "2CfT4Wax3cGbw78BAzTyDPL9mY3thfBMKrdnQXfFDPmt9cBwSrbWftULd3F3TytNtsyLsFxedGzBZsBJtCW5HY3H",
  "key22": "5cmEWuwnahnThfuTxnmmPaBWAmJohubznpNYDfbfNPpkEtisbYqtff58AHCvcDHg6KrZsDpnWRgcss7p3f4Ufw4i",
  "key23": "b5pLJGfArYgVXKpEKDSJkKdDLu7Y5mF1ab5SsFFCFuXP3yGqSaL52jDrVV7DR4ehhU879E47a2KcrJBjhZVSXsx",
  "key24": "3hqzpankMkLziLDYoTEqtJffp48vfuvvRRJtrZzfFxwLsuQFwBEZCQXEw9mBjNZ2f9MeJRuWkf7kx467sLwh7XZQ",
  "key25": "3jv75nsbz3DtNHSw59EmVRQLcqoQNWfWVf3cDH2Bco8bFHq88BLCUwAd1NeZyxpqh9pFk6MPvLjUmeYWYgshrwXi",
  "key26": "2BbFRBGHdjNzcdU489hYfiqUoWC7AGjkZ7vn7FsDT9iKXNyA44AoNiYo5bd6iBjWdYrXJZWJqerjQCAD7jKUzGJT",
  "key27": "3ippu4ZHeRNixF9DMiG9iosRFrXpcEbfUg3bVh4fxbxKUnNuRto8m6A16wMWVJzZtLWo6FGMcR5CBWKRYwrfvi5y",
  "key28": "23hdAfPQdGMeJBBB3FwnC5JoSWp1cpN9P3PY1e5FXTsaYC6tcNMkLwuaHj211ux14ESud7FcZVownJBWHd7JyajM",
  "key29": "3FPmYHY8YnE2NtVRYfYUKv3NbptL1TGV8iuFPeZVpHL64pLxiWAeQA7hDDgVVSRzcqZ53vC8k6XFp33VF3VtLWUj",
  "key30": "5BYSe6ZF3mByHHAKiVq7HknXT54H8pqaxeC1sUksx3DS6mEN7NYDgit9bSebcqBc6qQLjgPeGpdT4utYLsqUQ2x7",
  "key31": "GAjzN2CNM6Sx8WgJ2oai2eBbGFkxRVgVQMMRBwujGWa69u82G956HPRQkqMHFs8dJidDFNMZyzQFcwxt6i8obGw",
  "key32": "5qnmAbUqEqpBYLxHvWhTZQYpVdK8rTb2LbZ9S6oXs8iNSgwmyqh87CKSfuryt9GyvjJFHJef8rFRBxEN2T3DZYHy",
  "key33": "58EhVBAQyhcH33uQz3HBptUtvttN2yRie8nENoLJGWfPfdRbveXf1ptafba5cvtPFQtjS5ZThSLs8N6bknbQg1dr",
  "key34": "4UTtKS1aipFW6b7RVoiMnAUHrhEtx9WvtueiQriLrkA16j89SC1cdxygUBgtmziirD58WBcwRPeddugeD2hvBX8u",
  "key35": "5fHzrfZfZpDpE1W8EfVw9t5jKeexojuVeBTLUWXeycxxV89TvdfHc5xMQTTr6bj7ruDR8hjFaMAkJ9PmqkdH9Vye",
  "key36": "2MWguuzdX4AuPUxLwcYc7d21QZstNDTZRs4pne37Hir87cUz1EFuGJtxsQeTT1J5Wchur7HsoNQDXsEhUxPizkPi"
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
