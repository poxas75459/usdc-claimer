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
    "3dArwXkqWFg3nexA9178Gv4NVpK7J3jHofFK3e46LNKHTLpruVS7QwaugYVAawm59TmZ5qcHjLmy77QVT5NA4kcL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C4FbzBksvWNaV5TwyfUy6rKjKqVBwM7V4VCYT4WHGmdnYYrUbfEyVE79kspj3LvPw2KQ8qD22wcQPf29qJpiEFT",
  "key1": "3vngrRJbKLdkUoCkMU2isUTd6eQ6hsKxwmYL5aPiCMkzWpopR6iKyKoh3AUizxnFKRNxkQe1t6997BwkVYWu3GpS",
  "key2": "5R8rA7Ba45xr1qkAnY9RsENqw91mfaZwcC13BFp28x1vBmpWB16jiPibTjM7BxYPoxGXDgqviKpEhR28n1DshVSC",
  "key3": "47onwjykXtJkFuFkwzxw3caNnoMSdk7n99acmv2fHg5bBcAYviXB7nKC91pH8QmYWEmMmZFKopATtu1fRE25S2gp",
  "key4": "4AgB2fjSGGPSuypXL5xJJ4DxJF5fXt6b4a4UwidvFEWnrDxukbi6dXdSRmGiJqAMgyxUzjughCxBQ67fPMfGhng",
  "key5": "WajHHhyr7vJ4uLEHNozPbkWanyN2ZxePoKsNt59BQF389zQy9YmBHFdmjWwcoNfcqXJUiXn1jBPjcRW9NXseXAK",
  "key6": "2kb4nMU2N6rET737iAyNMrF2cML6EKip24k9UqdYiMc199MmEtfpiZdiX4MbP3YXsVekLkBndpuwk9Mq5k3UQvBu",
  "key7": "X8dqwTtoE1QqQv3yWRsUNY3H74cftbsC9gej4Y73m1U4YYHvM1HLBnRAw9Nr84B1EaewCFD7T24xgcTiQkEbPqu",
  "key8": "3w3Cp1P53feJxdRQDQTzN3mfacN4zJub6PjATgvwvPEAf2xXUts4HrUDckpgvMotbeCoLhxprDm8s4StqPSJGxsZ",
  "key9": "4tJB1vxLLbaMWghbtUDybJ4FQj8bT8j78n9jAYpqCEvhbjorEHBuRfuKGLtkwEriWGxuLkeS7NUhQjAFgJRB4gvy",
  "key10": "5fEKDij6sDDuGHxQzpieWFyKurRkA62N7RnW2qzFbCNbsaCKBAFesRv6KLYvgbNkBbkrBtuaiR1kWg2BfxDQ4Yrn",
  "key11": "kSRC7D2VwWwaokPCmHurPVx96f3CHSDi7ZuoABVTpAFxBjRFcYuT4ixEiTixpwrvBJ1tExY8QXEgcsh1iz3GACF",
  "key12": "2tkKaFZTsnWi8gBLKQHhRsdTubx4warCMU971QP2RSvG3RdimkTNsTcP6E5d4WgWA1tJkLo7zSbodSAxe7MJwcBK",
  "key13": "2eE3vW5Q9krpoaQkyNWTwT6LzKLpDdGXBedCcp8nXpphGMzvDz5KvZj7hvtpgNSW7ReeUahutsFLuX5RcRq9cBam",
  "key14": "3EZuoBHeerXg95KxZSqtjkQLam5w7i9fmH7hP42sKfAiwwMV9w2c19ccD1Rvweb4gZTXECKV8nyHE7R7CkVJFKXG",
  "key15": "4XC1RU4pArhgEUTLM17DWtcie84akgqM2mLjALUYQccfzZVhTYspxnuzrEpjsoJFrFXkxeieLxxuPHovrDGQMMDX",
  "key16": "4VnZh8RGyBMGugnZ4EpAZwHn9DCYxsxLdUyVDszdNVmHgMS7bX49tzCwcNycZxWv3dy8CZuP9ECfqYbW4HkPYs1R",
  "key17": "2nc84sFCqRGUAwSxEZqiJkbMyo7TYMVDJNsdAAwYZPhj7uTqk1vQhvd2YhiZmwM4mtgnes8fxqF3DXRUBpJ4ByiZ",
  "key18": "r6SUhiADfYyLCHF3LjFfJswwVbHAs3yvhwXycxURqDBHahUHPcySreL45LrgUqFE57r2cS9TDn7iQ9PKm7udLSW",
  "key19": "WPuXUr9uWdmx45aVrZyJAijEWmadSx2ZN8nEsdz22vMS1AQ7fa5csfnA3vFN5ZPcbbBbFnwtUemRiAP8CbBEemm",
  "key20": "2yiCiBGW1godHaCYmhBudZ2toWvrcHXZ7CXfpLqmmmbSUxG1voq1HZuK7iTzhaFCTvqkS7qpjh2gqQcX6TPTvSMA",
  "key21": "25p8h2EkWkHRDFNH3RMiGHe9By2ftfUbwXWH8Kq95iZ3DTRyKhvC6hKNnCXpfodhPEucDQ7ZeqLUNPnacogwsNyx",
  "key22": "2ySNEkQ1kGw9uCXCkSrUSU2NkGS37BnhwULs25Ueahjzm4SmqRFihiKi6RhxTA6ob3Ccvi1hyWwfXMRQdGHtaMK2",
  "key23": "2L3Q9jrFchvorMKXgoEsiGxkNyTKFjRs9GNHuVXZisvQPmABZmq9ZY95JXKW48majeWjcRhr1PgXzvnVSppZHePw",
  "key24": "3Bbh9Wm6sNnH7K7MQ5PpmXL21bwNhmv2tSpJGqMTpseGRRT2k2gCaBEDbe8ruufsL3W47B3AoKY9cegzjzDwiBLD",
  "key25": "2UoGMYJ4NSQMNzQ842oUoLvXSiQshhz28aFPJnrhND8va4R12wkTKHyYUWtiQmQdBNargWU4d3C6htLBLqv2DpC6",
  "key26": "4oYJAfBmvNj4J8roE42fVn2kQQDX3sa8t2KtfJLD33kfwhAK2QvcjkDDfGM6eXjst546R4hUodre2wLBKSCiyVEJ",
  "key27": "3hUJh7S617UVWB9PrQAfNMoWvmHgZr7tUA2kHzr1WhMYRbhuMUsiJ4gAz8F8rrweHbx27uKTHi4cFnd1K5gAxXpZ",
  "key28": "3mzc31fUVeq3ov9LPh1PiFHgPYz8cf62LYHtHsXhebWpNgYTf4FrPJ4HaohRYuWxrV6DRP91ZuX1FxoafkAU64en",
  "key29": "5aKbK5PiRtBZXA3giXo7k5H7jLxC9f9eF9UCzxQSp3eGB673sTAhd7A62P56M4PR4BmiZD4t57R6qPgBm6KEDKn2",
  "key30": "33DeXV8HHLRPyCPKnDVE1kczwFtrP5xjH5VwDswENks2sWYhHdfoA73usn1Pc2ni6K3j4Dk49YVg1NxfWaYcfibT",
  "key31": "2x3McRJvBQo6HvNcSHTLSGMqq3SyDacG3dRJjdEYJG1HyLTQXRXPXZESXY9AzXvqREcU28c3ZLwnJPGniKPXL8uE",
  "key32": "5jTtKeNd98DrrsYhxbv4AJpcwF8jrKfWpcPZxEPm1T5LJovTwT4KJGKKnBzxkXyM3eqqJsTn3xUs1Eg8LekMozN4",
  "key33": "3kPc8uaXRtouZzQJxWkQBhiUk88uG8ZcvT5VCmEt4VvgTUocWyxCxSWKRmeWPYGhC8xAdj7J3V2EW2m3ghSEkayX",
  "key34": "4AVZSEoH111VHVWLVopUL6BJucDp5di7VisLX5RaYj8CoTxyuPuf7EtL7hE7qzfauAMki44UJynnDLCYVeX8QEcB",
  "key35": "5paaVTTVC4v9y4TWxBmBrvWXGFGAQBenSqEY4ud85rQSiXzM7PERb9SE87JNpPScFF6gNdSVeQfrtWCJjVZA8snw",
  "key36": "y7N97wtSs2w9CRYHjkPBQc2o181SzDQtttZKh7HD5Cjkdmn9eG3oTFY9xpuag6NDrg1Ej2EeQPhrCw8jHbTKfLy"
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
