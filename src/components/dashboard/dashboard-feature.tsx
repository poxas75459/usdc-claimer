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
    "4dM2szroZTKa15bB8xVVK3oV6ovPUyLC9qhdmDg55zDqAuoyni34VKAb34gPWorVHRKfX3Tr2pt6Rk4x9w6PjL7R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iEdwj9vDAg1hQnk9surN7jBoBLvX9CVucJdG1RHUmSj5P71885sWAvAfweETS6DEz7CZpewpQ839Rq32idvVzrL",
  "key1": "2ATThAQQiBmqUWEzZsTg31GTDbTGjzTYduPfnPxUaktZFbBaBsUc8mjLR2LiDsCy6dKp1hQD7NnAenE65aVjMjat",
  "key2": "HWRZ4bgLZF7LXGMz8vd7BHEfQt8Z36GwtJyPDuesfisGfDENhS835SnF4wYkGzE5F5Ar4oeSqCeczjNYnXS4iRJ",
  "key3": "ZC2LBonqLZtTEQWmo87hXWv4fewriT2Mx2XkNWnuyw1RWBDYGFMJrKE9XBBEDZYgG7zM4UjNqtLtkFFjKWAw3e6",
  "key4": "5gtejXb264kkNsU1WvDPm4EwcLs8jJCWjMk3s7d4L1GtWNvE9JSRCj6BHic1EhAMLgQXrzs6QCRmKW3ose1w7urD",
  "key5": "mEGjEiuzK4gaCtZsHmMTrrA5dzVsFCZnBfNgoKZDJvNBDezhhDQmgNUf2Ta42F45aUam11JgFT1Ts7bmEYRMgC1",
  "key6": "4mFPQD1FhtodiFbjiuvyNKDrXcuDggwJPrdvXfs7GTfu44MHcser3wh2eWoZ99zcVEBbK8Jm9hmHofQuRqFfnoia",
  "key7": "3ouTjafAHnCYCgPtWqjYksL64H4gxY1v65bcuQDRmwpFNvaMc4gjscDre4G3w43RH25R9Bx79tL9ZGheWstE8YTv",
  "key8": "5nTePRvK39rzyJwvWWtuJSsctVZZeHEG5gnT7dZjNkvrz1ynWFKZohbinRWk43JvY9gS8y11DQAKpf5NWyEAq9E9",
  "key9": "4SMyWj62FK4kqHr6BPvv5zju2R38WhSzfRn9kbi9KT8JktRECtaxdjqAkzv6Rmu1oAQtNGUuqX12opw4X3oSmpQs",
  "key10": "24ZPPhtK4Bk9PpoLJJ7GnVMM2APw8xcE5cMVdf5VoxHaKqr1WQKEseafWQqVRXFuEGQjfNGyDVEjmXEZur1PAy8k",
  "key11": "3zCHjhQG9jx2dk74sKAddaxCyciwTLtnA2uRQMN3jnJatYbbQsiG9mtN5fYnLwewA2AxePdR79KBxW65cKzQqH4p",
  "key12": "2C2h8uFyX3ABQTx8WxuwS5xXoxfu5xmYwDrcd1MfZzK12ykzPoKQUiubirW7X1euanBcWjcYuYLpir1niGs3EBDU",
  "key13": "uqFGpjx2iGsEw6HXo2ZrHx6ZpvjfcEMveGMDjFQJZJfSoXKjHGAybsCfBbscUSMVZMXsHcc6nq4zvCgq1jMhdWp",
  "key14": "5ATfRRmNJ1ivJEuwMmJ3fDYBd94VMZLiJd2stPs6WYCGqegpTdXVZvJeZqxrsi6VzywoQARZcyE1oDJVfBB6hz77",
  "key15": "JV7ygchizjRC9fvMuxff2Cyff8QBkEmDa93mfWDJYoCjncHJEgDMrnWL4YNJ3m2twPVjXi8pkkvepA3HFZWmmb9",
  "key16": "5hdiDmREf8C2CFk4eXoAC2jbrKCU2TpsMkrkEY1851DDmJcjkmRFKaBBT5r3o6LMVpH15t6LFEf7mteGEiDEaSpv",
  "key17": "2PSEnRswL9FiW9miDLPE8HGAmcKoZhTWtSAyChyiwk2UqHFt28guvtkCgMuK72yHfP3NWS3YdpS3dUpW3w8orjCc",
  "key18": "3CTT5hom3hMkCKps6LLDyH1JV63YWxVx7cmBhMtk2ZjeBXc5sKJwUKNLLXuPPq2ccCu7gs9yz2MiJsTZJwchnDBY",
  "key19": "3b5oCcGFPiW8JksjCietQKfG9dKGiYABHQnN78uLUbq4YRpVYs7jewUbAtCSabhV2T9aZj9PV4kSFczReHvTubWk",
  "key20": "3nBqcHdUDMQDmsta2KLH63Fv5WTQnyMsTXo9ru8Wc8kdgNapuAhhnhswPCTvNLBBFT9hhcm6yVZzqwHFn4W19MWR",
  "key21": "2uHK8tA4sNou2qExnBQaruY9GskzcWPp6T7XyhEH8DfKDtMqTbH8e4Fg9f2rZUJ58opsd5skszicgiFjmH7vFgNL",
  "key22": "35JBUU93s4kE8f8BePNhWpnZV2RpazDjdLCByXTM5AjYW7NqEsGTMFKb93dFLcSdJk2c3JVABf5BdoYuJ9bkBJcN",
  "key23": "p3x8prAi3u6agrHNg3pv4LyRvWpnizZej3vpkHhexueUQroAcmjgMFEFdXsdWfGia18h4xXSSFBwwdjeGUFKFsX",
  "key24": "4tYa3xk94UniUsmSLnPiVcSEJSjuycQ1511FyYR1FDos6fNTWgYnLTdpgKxuchvixvkzDqvQJ9FfMsNCPPiKfhwD",
  "key25": "5q6mn9P31N1U9LR9rsWPZJrWFKXcVYMj4mwPVe98gRQ7UsYWJrcMQLKRmQbDHUJrVBjCXTRFnojrtMmYKkLWP7FT",
  "key26": "2SH4uBgkPMsv3RYqonv8xj3JxXxQYbTUVRaj5WiYLHgog6fC6U5c7QXxYGY5KBUmS5RtQfv2JjwjnNX8VMBjAoky",
  "key27": "4yaY9DK6FW58YUGYWNzgpk5qD3dP6AdJhNH8AdgksAMnFEHRynG1svUTVoiPq1jURpszg18zNLTCqrWVP1kaHj7g",
  "key28": "i3KSmAjHoVbuGotzmLjdivcT2DsUoXs2Wv1njWVCy7YQWKDkqoy2M6BeLjJXBq1HjtXfLa8dVGhZhEq46YdX4g7",
  "key29": "CLPqU6bs4eTQTkLWeHeC5JNTjwubx2DY8DXbLu1ky9Nz9zA1XfCLUGeBr7iPzS8nQixFZGyjxeeEgtmGDbc73rm",
  "key30": "jdn68K5pFuTqXiCVsDBMhwnDbmL3gzCPo69h6fTfhrBGPLs1uLX3kZnfh5ZVrMXChDDtofZYRxW1wAwabtz4p78",
  "key31": "tTGRQVQDAs9zrjoeGUc1a1QSpxnfaPwL6VrhM623z4dNB57f5L5Zu8qNWv9aw3xxWcAXMN2uNRTpCJ12ziJWYJW",
  "key32": "5Qv8wSxdAMJAEQpC2QnXtRWYqy1gHp7pTfiAQ1chRzaeg4ax1HPtoFkNU2AW5HZD1yggxu2N7kgbHwDL2ZhtwkVL",
  "key33": "3RdC3j8kZwVb4cxR9rf65YjZQXQYs7h1tmSkFBaDCvMWYhYWLJ8c1zLNJFj3c1bebw61WTjVbYvAdkH2qYavvxe2",
  "key34": "6131GqiSLjE6ZTA19Nuy6S2pfWQA2T78wsE1JFXGNkWGHko6uWMcfZfP1EikzcaTzXfP3GaRBXYeN8DHq2w5k2SB",
  "key35": "2WYTJkt7S4cyJv3mUpxAydmdPsgCJ1WGJzRpDUFAzpBob28j9wEmcNTXBdVucktBFfgGXJmeV6vqr4SVNMDEGYcQ",
  "key36": "vErveVmfJKF6UhGDZfZJBFbgwWdZtg5cUGyARPssJoxfJRh2zgCfzfRjqApNLMigNQ4T2ud8fbTKbCoxKdghnZF",
  "key37": "ypDTW2Bhi8XAPpQ7bfmVefNzrjstxZJ51Aih4XWW7xWSAhyKf7XzsK9F4EQVqrHePj8oo15TaMb7hdvHXtm3Y8T",
  "key38": "55w3jZxY2EaiGFYkpQkhMK997oZFsGWPXSQjAdNnY35yaXKrnJGxubGbYGaPiG4L3GcHu1c71D6PPMqPNyce1QGs",
  "key39": "LPuKv311kyZa1YSwJQwS2jeuDjcUdhXExfKBotDCQCGqFNvUQMmU4UuvDgjJqo3wSngVsPDcqPo6ETCjwMvLK4m",
  "key40": "4nzvgidfSLUSfoNQAGGq749P4TQyk9pJks4BccWYHEb8LpDZ9g2o3TTnEhEhEwgLNpj8zp988EXTUgw6gEt3Zwdu",
  "key41": "V9fYjBT5aMG7gFWhqFoGuodRkvXQZxQqBb5JPeeUYrSuQm1xXDDq3FN8VmMJj91MBA2w7Hgdq8VxvQtZtEBHex7",
  "key42": "4YoKTbXZfuyQsniRLPrwmbATsfw85oqkge4vT5AqBY9Jyv1McN8JaxFvR4p5fa3Ls4157zfdz4t9ea4ihSAdinj1",
  "key43": "56feDZs8AVgfKXVWdXuePf2gzvJFThqAamzP2uhh3sv54biJRRR6GAWCXvpFriGtPb5hnttpYU6ESJePkzovQjeX",
  "key44": "4zayVSWZaQCY52beMo7Mr2pTEUC9VDbNg3L2ZkviyFU2Tj1rHgFVrfxRkha1tNvKW9Yudn8EburuNGFAGVwBo67R"
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
