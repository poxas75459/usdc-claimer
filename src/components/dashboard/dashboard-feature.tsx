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
    "5EWJsC4ZZCBsrTk973iXPaMeoq3gwsribrDZqCSfrCSaMFopWqdmRjvgkU8LQaTjBALt58tiXebG1kK33fzUkRWC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iN6W4WzDrRZ9ri6VGytjWkZ7g6WUpzb86NhzPpvdCKyb8pLp2p6uDPJhQEDBRvCx1CA8JdJW2XK8JCkskHizuxz",
  "key1": "2S6nmwZfXTcMmgVy4FpmqXvLB222491ee5rSEWVLMu8uffDhVRgtkKxjSao2udksScEpcWb58HrersntrELh1oSq",
  "key2": "3HZrUpXZY94MeXvJLJkhMa73C4P12WMutJZuFLurHYCX3tw4xKRnedQFET2vEAZXbvg8KbaGyV3pKqhVegCw73TL",
  "key3": "2ZtNdez8nZPfrqnvFkSW3bLHj7MAgCYukR4EGtTBys6VxBBa55aUSk85tMdasBD2fCq2ZaEHGdadWWVUccN7BmjR",
  "key4": "34EsrExy3WfpP8xCAmESERJDZRP7FWq4mH6ndwnhnT2gRNDSiZowW8xkHaxdqJSGjUZSkK5HjWoqhMLD7qyH6Prt",
  "key5": "328VHyhYQ7uvXaSnkyLwKp6M9UoAwMkXm551V2bLk4NYzMx9ad3EtwnL2axvTBfWpRYgLH9Pug3igi9rRQBNTFjM",
  "key6": "4jQrC1pfDESJndiNfTPfeQaPWNr8EXSgzz3ypqthUpVokNNPjqgTBKb1sU71VLQhx88KcMPWsRSEA67tHVKCa5Mu",
  "key7": "2TLe65VEhQdGbeUc7USG1Px5VaQDtzu5KNqpb8cCo7iAJuw4nJKDtkFdaxoPZpN6mbFqyiPKoXJqA1MyRxyViBYF",
  "key8": "5H6dFaF8dJNoGmB7zKsvFKpbBBGDdNQH9j7n7BvAhUWUwGcpEDxKjjGApSbRUSPwS52XUAZA3aTrdgjjRa7dZJo2",
  "key9": "4gHQDjfyodVxLkyS5vCdWag5MrQtckedX3p7VYzAQ5wHxFsj6HQBnsVmYsM3m5ELPUwJnPZxyCy4BEWkKf4hfPq",
  "key10": "3doyB15WM1nDH92SgMT6dr7TYnNneiWY6pwqhDQTHq76Fhw2Kd2kUozhP6Rqk558u2UbDihz4sM5yky2GSSCo1xN",
  "key11": "ZVxHPLWoy1x8qCarSgtdJsona1f9EPQbsrya312kFNTW7Ztx2US3UELNaemqRTNDw2MEpCEAzUByR3HVfaKqDtU",
  "key12": "5EcEuytwewnSdaGh7qUGwhAkLfpiAi4vnr5NTEBr2MfXY5ox5TQHCLdVfXVmLeMoKHm4ePzPDF3ACzWXeBXxnZBQ",
  "key13": "1zQ8ELg83SyLw9KYYqTE3QrwBj8tVVTWenZZU4d6EhsuMNDCoy4mx3GZzfZXycdNibPHqVgZVF8Pqot6qP25Duj",
  "key14": "g3aKTPFWXhfWJE6hFPmyZMM2ENot6UGjqYM8L8g2ZwJmjeXG2p5Ks2fKAg9uZBUHmvDAFbq1cEguMbADbSr53TW",
  "key15": "3m1dff9N41ve5zW7GTwYvLW4n8tozk7eHgMBB74RtGmdJAstwmYdsrJ8TA1JdFqUJKACd3wiotukTbCQvbFn4XZ1",
  "key16": "5nvsmJnD1LK9WMVRDjqFrrg7VFdsMnDv84tPoko6DWFdCx5nV57TEnpL8HhmTapWouf94J6Ud6UtKbET73naXbAJ",
  "key17": "EA8tFrsczXRHD5QjhjQdMqNG984z327Mc5gP5WnWbWYADJGCN9NnzgX1unC4hag8zF5uAZyEkjgC9LcDKkxHLhE",
  "key18": "3d3ogyZrQx8bofvt12rCkUgdiReqSVYcLwxGvaMBSS9wuVJSd1aauo8337Uem9cUAd7iN37Y1TJiPBKs9hRB94Fu",
  "key19": "5n3LKh6tcW6qxBP66xWW118MBuWRk4Vg8Bf4DRS3mtVntqDGtDGaZ94K8wT9CN56DFpboqvWfnAXTMUQZtGRndwL",
  "key20": "3r3pRkLEocox8F8crKZcgBxYB1nxPxzhUP6SZcqMRevXpGLMXpeWLzymU3AtjwX7ah7VsXHPyP91VFr2477883pb",
  "key21": "5J8uiMK52oLnnCW6khe4LfWqAtwmtQCr2MGNDQq8nGytBn4eYkUAhkuXN4x5oLtBfdbKUhDfGwRRvBVziuuCLgmn",
  "key22": "8KCuuvpm2QzmPuZXmP64qD4E7bbuiV2eEb5h1VUpxqUrPKDU6hpQrEaaiGY4YZgjPHVyFmZzhHfoqoZHHJhk3gd",
  "key23": "45DdtEF5WYicSkeG56BJpU4Hmb8xmAuMeYRKGv2UbtgLfXu5CDNeMWnBuMNEnYMXWxJbp1EN8KUBf4jf9W9jF8eM",
  "key24": "5fvjA2XvzD7xULveHDhZm8fxEaU2rZVzd8cZjYCocpNGvpkQ7yrWH38kxCjfA13rga6phpiMqLsfSc8zrFtho8Z",
  "key25": "3GeSoV3Ueq4qs19reYc6jc1r2SF5MArWFQfUmSnwDa5YFYXhaNzuS17LiX4eYSZckpMZwgGZhakCtu1cbXFnZ9rk",
  "key26": "5byja1kR2kBxteVGzBeqL1hv4jhd4dctgJWAezHAJ2nPabonqQDTzudtnd3A6F2C7N3cym7ZF9oE9o83FwU49KHT",
  "key27": "4CvBtcCMd9LT5Zqhujr9bA32boGx46ovriF9eEwMLYxcBqaFycZ28EidHs3AGq3nW8cQ6uwWAbNjeQXk9dA5rYW2",
  "key28": "3xtztH449PKmXEVYzX92hJS152MCDEJzE6z9GDnxQTtZPSRUMNVWxmMFWP3u45AdNMPcn2NbjXEHXEoEb8AtjgTq",
  "key29": "5gFu1ZZuf3Uhe6wfqJFRUr9cuNiG9Dp1coTdTCWJbFULPpXkZYvSYTQ2kzSyGQj1QfCFicki8chi14WdwGdbKAAX"
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
