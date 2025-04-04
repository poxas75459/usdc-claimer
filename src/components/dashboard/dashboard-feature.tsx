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
    "3AgyGdsoVEjgH3LmuL2ZGVtDptbxESAhFBpfUDhwu3GS8UrzK8tcNQa9cgos9boYH2CWkWXfYXqa9U1KM9GXwGXk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Tg12Qbjh3gdpz3nFJAarpBYRkAoAmcGm7qZXs5z6cwkGv95p8bCesi9bmW5pZNwU1TJpKmKGczU59jqsBoBkCgT",
  "key1": "3NmM3DbLxGK8c8SopefWF8WthwfWWDP54LLj53YmoVLnrfMAtHSf9X5xHfCWfne4uHswgsJmjcoC9xUhwK16hqKJ",
  "key2": "Sz4GXJmiwGvvrqFgNYVhUttKiHCHjdgeZ6Rh8WcZN3XDggGz6bABUiTRHaVX3f1W616Y5PdQWQHaDJatvMFppEC",
  "key3": "brTGZSpMZy1NssJsAzpvPdGetF3bZeGTMdxDBooFbmir4AosNXGPSLxkeYkTRGDdG5MrMpMeHnNFuJC3oJ9XGo4",
  "key4": "aHP5pQe5FzGML3hhxt5w9pukwUsNL4UNVFgobuWD2UTsGKLuTNhYAB3bU3KyCZm5jm9154unohGo6ZX5xXMBHUH",
  "key5": "3kGeV2iktHiiaYYyd2Ej2f3vdnGK2sUzP7PD18YAPvq7fKLRWRf2S4Vs6LikS9QvQhRgmswFC5GQEWHBjvJ9pvks",
  "key6": "4TgbN5RYqBfpGu3kmSuoA4LV3tQgRZBDKcFVXdZ5XLfStR3wBS9o4iF551rKpFFGHNRmtE7DxKXnJ8HBx7yWYbEz",
  "key7": "BKCUym919G1bfAcDGQ6YeC4UbDjpQsrvosgctVBpAY9BGosKtrK6MdE2agofK61y8BQHcKCGqLS75WGpMnDLCH8",
  "key8": "PtZm2PwCmMhLwetMHraMg1DCu3uGqaiNfKDhNxVw7uTG5CBhBER2o6SDhWb4sfknhaBay5bF5twzZMLbxngfuAz",
  "key9": "2CdRTRaKviAwxGQPKSSwDFkmozuHdD8JduGWLEhWCKEhwj5QLfHgd4gbyKT8pLWkrXXz2tMyzTe78fLJYvKczeqQ",
  "key10": "pL7YVv8hXQzffBda2QXaBy7SAjWnia1n5HGzUjt8qiHUokowycHbgAuRS1EXE147i2YcwTT2EAXEvuycbqVwD5W",
  "key11": "3rgiutpJAMKboeChhEt6JcRxyFMmmBccuVPAY8rfB1WhPpouCK6tgYBGXmTuJD2ZLuuvurjDsMCxaHHeVRoK1Npq",
  "key12": "2ESHzNBB1Y4ytt1dLsLGuxaSGmAffow5igF7m5EYrRiVkoSFc9i4vZox4jwDZJor3VQb9hEjTakFtQ8f3tCsXPSC",
  "key13": "2c1qVTdmCVcdBBAWG1g876NWQ5YeAZG9thCjmJYBUgYfLZxrHsmDA9G6gA4aY6Ecs4NG6483mXgHicHBBqDPfQTJ",
  "key14": "5rQQM22qmGfxVryXLWqrEpfaYEfopGSjM9rQN7Bq5y8JydNPtCvozoV32pRHfwJLjzcWNswdJfF6wKoQtSXLshmi",
  "key15": "PvM57UsQyBq8o55k1uLkJuasqJkocNp7J45TVRUe9JT4Pex5eiz9h8sd6KPTyX8A3w5HTuLZaPU6eTWbHyUAP7B",
  "key16": "21L7txSYnSKjsVRSWpyVYkkFRkDay1iejYQvRArLP8TCJkvbtnq9xctSMunYM5NYXV8ANFMw8i6WvnttkhdEQfWW",
  "key17": "2JiBxfK88pBoowdbRQSvskss3SjswNAoNeszT6W5qYsZoBfR157GT645S4hqpDbYFJF76UMUHBp2kpjGWE1peFMW",
  "key18": "26EbgwVCakH76hvz5jynXoK7xGRrja8GBEXxLCgdxpERg6PVwZADU2mGJT3Qce8h49CKZTgmh9ZgUo6qQNVZqBh6",
  "key19": "qAmxJ52j7XjXG5vf9a7fjujLPrcUzgj6PcSnvTJvGS5CFzTchQXHNXtnNzK9La1e3zprxQt53w5mqvbZo3NGgbQ",
  "key20": "5WwanU5q8iisGnM7RrAmcxUrHByAPsGs2ybtjNCdgmvccqttDtsH3sgzZy3xUwr2pS1uabZBcAHvsWvnpZi7SZ7g",
  "key21": "q14q6RHdCy2ygnhTmN1yWhn7x4GHNZ3zMeYvBbCQeo1RNhAzgWG4YNxGjHy5sYCE2nH38tQsetXxLW93wo3H6Wj",
  "key22": "48eseQMZCiTkNd2YJ4WnV94Q5wxT2Bh59J6qqMoHprmKAsJ3hSKe8jXHXiPedK4pK2JRo9FfxekuSHVSbhxRq1Pb",
  "key23": "xgftfc2FVDWZvTZYSe6SnbXaaNgQLXe75QssCeaFhcMaGmyb6XEizM3maE5bFLA1cCZ3ZmLCpTNEQFqzzTZdodc",
  "key24": "2KTkAYDQBnoQE5RNTgKWBrB2Dv51Sa2YJbtzZP3ECTTDx1Qjua3kgHDZRYg5XYdomjLQRAFT2RtZ3L7KtCk1tbQ4",
  "key25": "2LsyPA1q7piju52h3UCxDBgB51FYYUkabJkKXAACLBbWbq7byd8PzCLzTJcLbudWNKtrpHq8uJiZ1xxNgDm971fZ",
  "key26": "2XgyENwqakMCu97EZMtAriBP3FL1sUCvDgnVgV4axMfXd2fasE6pVAfk8BF9xuQ5Qjstq1eKJw8WofwJWY2SgC2E",
  "key27": "iAUWTgxTeCvt4NFHuwchpvQLmQe8X53s372FH1mzuK1EpsFruwxcJfJmpZuboFuJgqjEFeet66WTtDfa6LC4cjB",
  "key28": "QBYbswxL9jGQ34qq93YhMWQUyptsHtyTjVwN6Un7ZNmMR3yr2L3UB1NGa9qJeu34J3vtertCcZePfaGKdthdeTy",
  "key29": "3GBmbVBZijqsEpWMs9HAAyMu3aad2x4HRg7mMFyZ4HMxy3V1M8K53jdPn5DGVz7iSe5W4hqPDia316i4hKmo5i1u",
  "key30": "3hz8f2WuRR4WgMw9nBYhoJWQZjgbaW7H7DKiuvytGbGBkyDGWwLu1q6HLbzfcVNfDb3Ai4LQPHM2cK7uFP3pR1w3",
  "key31": "2NDZKLGs11cqezcxFn4t2vD1KEBs43a1sCTa6hcPXdknVyrx5LrvN18dGKbHeK2FtPrusFibnTkKDNGRsazcTnyU",
  "key32": "64Kh74qvux4oDgw7ciNuNX2L2PVTmD8dfNPxNhsiHQPJiUdWMRQhMqYgiE12ypgHbLakW2W2JKXTZKoT38wwdxVW",
  "key33": "64FvEWDwowB1KLGTop5esXaTaJsYnqYb1pLDQSbwwYUPRVeKZe2k1r4qduG94XabAntr69uobUa187B8GBS5k1Wj"
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
