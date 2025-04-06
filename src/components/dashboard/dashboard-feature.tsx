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
    "2W8hToxwfe7hSnbHY2zvW9D4qYDj5S93tsrn6EFVAHDQwAWAq87dTbWsFwmVmbNTGHuwwfWj26nH4on4PefDySnj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dQRpkmgcmfVVZ77wuZApjvyVWWWCuo9xJSgeGzXwfjPYimkft5LDZcqvNejvkqhAx4F5zuq1TScVzkrKGDZBf1W",
  "key1": "4Nte1ExNCLRXeVKnzk5xCmfiNcwzhijXEoQ8JQKy3MNKRF2n3KnZTXkxW3C7Y8iCFyBKEmzcYSWySdmaFyamDr3x",
  "key2": "4CazjFfjghLYa37B9iui7semM8daeJ6GBDA7CJ7vnfpcYjMcWu3JVdUHzTE3N1Se1VC549HU8Sp7kSTt8cx3RF9h",
  "key3": "9xDemKA73YjxtLDUWhryFMspzdsrShSQ2zE8H8okCeyKfnnUqEzkJk3Ci6wX5UnRW3nauiz9Q6Yo6gHgBMXrUe2",
  "key4": "34dXmhSdTfDym18wBY1CSxXjbE9Vmd5YHRSkUcMCLH6MnqjH3QznBZudmYdudWCV4v9djqUCgJMXrQv59gbQ8W8h",
  "key5": "r2D8JFLnyKJR8yWj4srbuzkPz7FBWyAVK6ZaKFhBhjhaU1qVtY24jr54ZXKhEDcS2o5zEu48BG6KkEoiGiDtAn4",
  "key6": "3gEcHkX1JXrsRSQjTgbs3bbJbgHT6zuEXBPTZoagAHTMFN4kV5irkobLs4tk6YMVZEHdfDV5YHkFxTxWWqiM3cvg",
  "key7": "2qkfoR8YzEAiD8rBxJQX3Q9C2NjjruHNjtZMDg9eJFgyfaNdhh6rjLdC3FwWsj1eRpmxyHKurKUHTQaSi2KJ7n8M",
  "key8": "62ohDKFCgB5BAkfChSNTkJfYmKyoL881nUwJ7zQKi6QnxD8kravGiP7tBWGBP5aWe3mvEsvvVgF79hG83eQD2SQG",
  "key9": "3KptHWnZTwDvjubPgKUAhvwd8psuJyJnd3okGxKxpm7fHpunA8VZDzHLdRKpagZhp1LLmNjW75KRvsRUzk5quwJW",
  "key10": "3DymLCLQjfQ1rV7nfJKHRJdiuYtfLXVXB7eAnevGPVz4Z8tWJzKZdDtyMRvLpjouSQ27T5xHbA8UGeRiAwrtQsPP",
  "key11": "5MrV2EbW2T9tyMrccuHRA6PAwnrcBms6U5BcRu7iSYHLkJ4kq2yiPRW5sdcwjqN5GFWrqXDaRRXKVNuKC165eYx2",
  "key12": "2zwuuCZjEnCXonRuZ8f5DTD8JkPJ9Ncc7osXJESGrxcgwkARiRiWMXQrsBQz4JHSeu7akMr5S1FsxQ8acWgqqm8K",
  "key13": "4EndYA6bz8d98zT4D817D785L7epazfP7gNKeUQK4zso66UjvPXMGsiRJUMmzwkCjEsA98qx75Cr1uRnCpGKvWXZ",
  "key14": "24ytuoVT2ovoX671THAjSJ1G1UCuijz7ADuBgTTzGZVuveCptTRhgovgJeH7LQVaFAmfqsj5PNQRgVSAFpyjmAQR",
  "key15": "67GGDo7SdrdFfPBe9wvpuXRcRqeX6i8Gi7VgKaYpaV5v9ZxkTYAxCfBFxdMyW4ZGR5G9cvTMqNAZbAUjAcMHB64",
  "key16": "673xp4D3uXPoZsWvwNfF3ttPKx9PkYgUuwfmZkcvMBWE1N8ggKioUBqLkrGeHWUXSTFgh2P3yjzgPLxeNAp1dpaJ",
  "key17": "5FQXZJnmSK3b3H4WFbXrh4Y7PZQwSvKU9BqLHUpjHNtGm1pXAUqqFnc1kdchiY3BacPj24yuHHV7EWdYDNcBWrYX",
  "key18": "522hSc8RwFwUwdGQU5w8kYfzBugTFMwYarEDRvgbon3DTjA8dgFJSFpgzo6koKUwvgsuz6d915XcraYuV7kZLL6V",
  "key19": "gbNNpuZiEAphTxxQLiiMAay53KhQJzYrXrdDw1WKQww6C4kXoPHSLDgvH8F8RkZszkx9PxSD5HQUYQGL41w8YYS",
  "key20": "4BCWiR5SnDNJvVop2KXzLKGkd8auZvehDDCYU1AWfCpgAjkWPyjspMnaf4JtGp5BXJh4SMfVm3voj4njcYXre36B",
  "key21": "5GUM8mNL6ZieitVC49FpWkxhmaMhQZUJ6nz2y4DuCr8SrxnroFhWJ93yzdYfhBh2tgZFZwvBtgnZLfhzJwAuFWqY",
  "key22": "XdW1LK6HgDaZkhTe7QaxQqNN33vYqBtDExAe6TvPgZubVbBRX9eF1Y1hA2eK8rd9Eh6aYsNGnGVQHQ98AjuQwQK",
  "key23": "3F1rPP2fLMR99Rwd6UY153z7gfpNfVn7Cjo7Ynj9556KBBFEXqCdVjG6iyd3drQKEgP92D998SLkpQg2thZq7CkD",
  "key24": "2UpBXbK1KHxtxU7PPqMjS9vtFuTtAXkKM6KxtcQWrkgvcdDHxSC2ews2q7XqBBUZ6jVxw1fre1kxCXXgCu6cPUhV",
  "key25": "MwvuMkM4FqYuRXoGvQvsHq9i5tP7VyLqJL9j7qLbkw3SHQqgmcqGQpeqBNSSj81YXY2HHRm7pwnWmnAYrWSFHai",
  "key26": "TEquNFMhsRBMHcbjJLeQ6JnjZHtypjQ7Q3R5gcraW2e9hKitwXf2yzacw3U61tziBeVtd3xd1nNVKJX5m4ArFe4",
  "key27": "ntpohz1Yzv7WKsfNnHtp1XVhq99YGxvsEzCB45aziqfq6id61cWzL9PGcx9qhm4sEBYnTvKop6mGaUw6xhMCS3F",
  "key28": "Q77RziwYHSdrD3YHXdkymzGDVUdycbzxi4tCaTkUjdaXQYBJ5hKsESDRFijDGRmPVhGm7i9aeEgbxyHDUbypqn9",
  "key29": "4hDDAv9H1ALfDu2Me7qKB1UbdyLMHrmfsPGYk5bjoQqykF9vRJpmCRKxtit4NNRHbMsfEtzKCbNUmVx1hoBKyfWE",
  "key30": "66RRnxmSvLHigpLvmP8o7DiyicVXQJSGTdQAaRZ3QrhYCxheqbgydsdmrRwJkzU5KM4WhfBThK4uQZzjnhptsJuZ",
  "key31": "3g3wKwT6qRiwQ3bF9poC3rnjUL1VgrN46Drh4aoZL38HzXB5ZoFHgGWRFNjnp3FZHtWoZwCWR1iTmbZSbTMsWgNv",
  "key32": "3d9ky52r64DyDYtYAUpixb19XWYsHkebCgq9cKDE16HoBgdvYuNPjTUXemKm9BzxuzFeUHSz62szxMtSu14NQC3j",
  "key33": "mY49AqsbGe4tuufc9iFsW8AxgmnJiGjMSt3Yrtxo31Y87E24HD9Gsjj1XtHtgCv1dv6zVYCnfG33vqCDA7Wa2tj",
  "key34": "3cgpsDETd5G9rebJQVipTy71A4FLX8vu2Bx97EwV92ax8RoeemWS5hZ8THn1xFxjUUmzZVvuHiUiAg7NbNJyQRpT",
  "key35": "42QWKikytJkxq47sNsKuJdDz6CmVxKuTt9AcuHbRQtG13C6vJKekvW6N9ujc5eJbBr8WmGTsXY8CbMPsb5fLdvmd",
  "key36": "5MhoL9EpsJWRKMhUyxa1YxhtZ2jMjpUPwa9VkytHpx1qtmptMmCP4Vfm7dyFVqKgfKDR7PY1scbx7KP6qaPYevmB",
  "key37": "Ffn3Uyzuq99PjkXhRtT9FLwAaAeDRtZjmCQqPuzpouUTB3xBexS5jRwW6cX6SsTA4yAcQwyMoyrXtvjGwRKBbfK",
  "key38": "5pHpiJZsyjtdz3NyY8Gg5vzfD74pqcuDHoNYiS8AFeVkU3pyXLH6MbcaekSoR2195z7QCHyYuYhyTDwHAQ5NsJxL",
  "key39": "4m261DPti9zCD78tFxo3Jgy11je9tx9Ks6oNHsWNiER88yUEVTeY5gHKVMjTt9R6q3enfBbzvZnNmDYBK2ozK8D3",
  "key40": "5ENUU9gqcPuMnwhQ8zzne1oYKQuEteigT4AbJ4iEZ3mipnyB3QfmKHVFAMaW66dEhSJMi4aqE4zG4Fn6ZUhHT4Pd",
  "key41": "4vjw2vcMg1b6TLYqgWSRskaxrtsjWaUr3dWBQmDHSQJFYhdDLAjWxy4gd8NH5SmZaYtRqQjmw3m1bYi5gzhcEvkz",
  "key42": "2zUpBr2JmYWvLYESEVDJfSnnc9EmGmfMCGwvbZf4g1wtg5F86zQGpj3zs4wnrK7xWivgKXHVo3bsrtLRoQzBsaXX",
  "key43": "4GyUFj8hTniRA1F9nhaKp77YcqgA6JZFmdDXWKL7R8UBbp6MJUo9Lako12fPbLqPwBPJKqhMp5cSt2LoFZRRsKT6",
  "key44": "2jWZUeUvMcGiwSyrU2s7hLNd5qXAxENKNFSwGjCrzjcBjQBCitqRNVN1oqhkh3fiAJMxoaTMbsUghoWufgwnjaYr",
  "key45": "3MQ8iLpMAhMoLMY31wJKSkbmTxPXywQsiaYxVZEa3euorWNMtJghgL9fKxC5r1yHzLJz1XtoQGc3CPnnZ98MXRjd",
  "key46": "2Fuc2a4ADhLHLYKcZpos9pVFrwmKC8diAE98muQ1sUzQ8CseQDmGoreGE58Jtf4YS37WQ6d7i1MD3fHVxCVFypov",
  "key47": "4144ULS1dmFLK1eycSQPYndLi3ZZBeLkQdL34EvvbsujumnZPpP8uYk7WS2PENWXfRzaYdVQmwHb3yh2QDHMC884",
  "key48": "XJFuciGYzSN9WoQVn2iJtuREwyY25xC1MKcw5RhoSJRroKzcedU5FrD98LAcc2dc2FFYTdpRsdfDQmLAfUz2znL",
  "key49": "2y6Bk318kf65qmLBQnrzUpph6i3wgmPSx17tcZakhY9KcSihAhCMRbKga85ntmgAU3fW4MsReEr3HyCfPyWDwsuX"
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
