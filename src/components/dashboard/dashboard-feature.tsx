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
    "2ma1UC7aMQH7QpzXpPrjKeWXYmX4CbWk3L5ofUqpQX3eY8RMJbJNMad5DFkBed2zwXvqwDeS9DmiE5VrCAEi4A5e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o9dquUrGNH65jQ8ipbM1JMz8dspUgkjCdqAfDJ7Le9ZgTqqNQwFpGnMAXZGxVEkVTyQPXo41N1n9SvX5zPGapUY",
  "key1": "2m6UC5bMfUG1p6k3wuTijjpdPx8pSYzRt7mAnvwpXE2QCr3CYs5jAHmN6rK3J6TQJnQ8L1DnbywFXxfotMr9DboP",
  "key2": "4kPEaA2XFBf3nC6D3fDGAqweqU24RD95iTqT5zy88PFBx3zsHUTAUwFp8eWG5B2vusPF1yLfyrbCTLLZKYd2cZTh",
  "key3": "4SYUiGyNFzak4yg3xhYLt5KbPvq2Vvd22eYx7ZTJJLFZ28rFY9hJfz5H3TMJY88DwuVFogB3DorFjDarTUtk9eip",
  "key4": "DG4NhNhW53gZSZF1kPqPMTYKBktu89FPVFKhubg9Hx6FyW5CxCGBV2w8RkoSsjH29jHHqPjsaBxpjjvvSffp4vX",
  "key5": "2H3CgCcwDtvY6s2Kk64d85EgL86DNdKL1gzgLVsou2A8aexNQbR5sJXPq2o43CsJvRbX5T4gYSmEMJWJhFoU3r8J",
  "key6": "14bfLtLkMJ7DmGutf2QT9omrLMGSFgYa7wqgYe7T8VpyAUwB78YAVnyw8KDMa5ZjLZiZv9Mbn6897usaTQVUhyK",
  "key7": "3wUN8WXGt9MsComJVxfwmxZbFCmSLP1pPwNxR9mWG2N2bHBDW6JemMfEF6hwWPFJis1sefcLeVzwHqyeAv7WYFPG",
  "key8": "iVo891XYZiB26WdE26GkNn59512QEB9f1nyJETdEnWfhVEYn89DdMCdKBCFnpGSQdzdGcA3RF7HuAvPzZkZJrdP",
  "key9": "53nsthadYsZsTPfWUMwKytTFKsoA9LG9A2w449xW2vsDHPasmhRQE7WrYn1RZikT9WHqdS4XHY7SBmjtDUknTbw2",
  "key10": "5Ny9and8LQXX5w3enhJTFExP3EMCCGDvRxyFyGmqVJ8pREmBRhgJKsYrYCGUcZ7snYdYRANqPxjd2qk2fZAHcVaa",
  "key11": "4vavE72j9xL3DVThStEqqr97KdbyW6GvKgNMFcajAjKtFda6St4U8qKFnRpcsrFkJMqxHg2N7uoAbEcf4HUoos8Z",
  "key12": "3gys43zo6Hx16XF4MmMBoKLWHxTt7NBptFunENLADmfDttK87yABUxLBFG8eoesNRmzL459fEJGP8rZHuGNJJwie",
  "key13": "2YcqyiXxPRDmqEuWFNhnDK5Bc9QBh39x9Lggx9waY4WL6RNu2LFJ6SgyUTb9KBJUc67GNmGHSXKsEp3aFGqBkPuA",
  "key14": "4qeU2CN4Xhposk4SMhWRm6JsaxHze7xzi48obxyWqpwd5Bg9JdWxijpdUhWYbVPjYmyxJyKyCFDLXKssQdRo2N8B",
  "key15": "4GcLDAU4y1KAfHp9JvqSBfnYPe71sPyt7oB8uzRyAYyNGoJyR2dLDbJNTm3TYxaD8KEkAErqfwwGZ37cZXvASzz4",
  "key16": "388rGEHsauUrPLDGyhiEo4YhMw7uhhWMmjN7mhKPLbco3V1BW8uySyhijZ11o5QHVxqENYzQUgickM2xsdwV3G8r",
  "key17": "3sospN4fQegW3e7qbnSYSwkJ8pAqgYAqssvnrM7AYGzfZeNk35F1c2KgFCYTzTtgKvkLDSKB2XuFi1iYEZUZ2CF9",
  "key18": "55x7P2X2CbwyzZj6f34425XADZho1iNXYNJaECuoEoFY7XxCV6wX7uaCXg572Vo2BykiGtCeRM4rMpXg197WXyxK",
  "key19": "5ArMMQbeDPeAtBv7k7DzCKveD3FPFKAeWGauKKvVNDSgNaFtntDbxMcDT9aqzDqng9Qw8jCvGB5HWznZhCp5aTtt",
  "key20": "45FbbgU55HfAPjeFBCCzqQQW417Bbm8MAhDvoyfkFYmHLCtyxAfTe6AwwsjDZZxM82CUNmZqC2HP2mVdC4BMKNtf",
  "key21": "38uzmSyQ5aXEFXntVfjmHDBMeGuGHmuwU9C9s71xr9dKDZHi62gzbEYuZeFbyaCWhJzKo1W7mBrHmfEC838MwCXH",
  "key22": "86xaJgYNfcLX3uFt4PFzZp5UD7fyuEqo7gE9K2HGKkHFZ7jz35BrfUMg7UjrCfXb4AwrmTst7dR5iuwvEZqgTrB",
  "key23": "3PQyfckk2Nx67kvdieNR2orCtoLiJPL9zfxCSHjZBvos4yMxfpXivCwRqcwZxaejxdCjFzVrHCdp7Kpzvs4hydGS",
  "key24": "vgMzNeJeAtMYxrEUStcsiTPHDyK7UcgHfxD5qMgbR3wg5C7iHAPCfYFhnkVrSSiYQRC4cE9HEacaMeVcFLRYxnf",
  "key25": "3R43KuAkjtiYWvZUdWH3ELjTzFQvWKGWM6t2a3PZSf5Va7RQA6kLgcu5xvyZGdnQVDVKFxymMFAhpsJeioUcoyK2",
  "key26": "4R3JcCiAg3GsuX3dyYgKqd9HdCqAUucWqNLGWRPiFpbDwHaVu6DV9ujk48CJrv1jKzxndZrxp1YC4SZY5qqt7YSW",
  "key27": "3RubBFwZdkoQcGGiY6E5YEdXcwUyK9gr9GznhkPBR5HULgSmLFuUw3Wv7hzFNYdLeiWr8x8XUQxvEUvmjrQX6XTR",
  "key28": "63tmY4LbevVzWKRy6hQVsJ8wvemxnQXadgnMDpaU6dnvATQK4hqw8tqcsd5iHVxMoWdctrSEp3DiK12GY7K17on3",
  "key29": "HcRwE7Y1PVFHMrFNuskqc8VbgyZ5QEdmF5svekjeBWaPYQe3vaQQKtKpUxRRxNpgUKr9bwNx4Hnds5kEx2nKWy6",
  "key30": "3yAJjioVUSxR3t8YAnSGV3A4oMC7oScqegrGR3WqyEgTiHS3jQWKUrYtCo1G14DU8v66aNrccEdkhXa7ojNtDV95",
  "key31": "4hUEXTwEpwiTwrL98i2i3HSXssjZkEdNUsWGvQUHQ39U75XWd7cX7W13tc6uBv37X3cur9rDCSwCVhMR3gy6dZJv",
  "key32": "3V7ZnfNe4yFVyCdE7UXazZMRQ8o5AEa5r5iYPwsAKote3k2ySHHYx4aQiH8v4hWTWk7nz48dSC1vKAYfiCRnajjm",
  "key33": "3BoeG19dAzqZMf7L1SNYq3VLCGRCMsofYW5ZHCFdtgsimeUpaCBq9t2P7sqpSn4GbWMH42zxiXzSzXnPKWYodTHA",
  "key34": "3NjdGyiF2sQRKc7jNSpWrVYnCgn29okRUFqLLv3GkKU5AcGGYqXFu6m37t6dMjV76FurvAJvFDSbwaEgmimayTAd",
  "key35": "5xmtX1BY2G15NtrYxsM24XVJNBBkF3zwd95Hq88ous6y8MJd79M1gVhgzSiWFa72RUbfDFzXg9K5m7DStVK9jTQS",
  "key36": "211Vf8kNVCLjMXxmgR78FDdeq6ukmV1HMYNrnkN1vKatjX6gpoDfD2VezGWfXeEfAMYCbBSikn3jQp2LASnh392H",
  "key37": "2ZGn5tpHFuXfmWTGLaHYSwKq4viVMmMuDWtsgcw8L7SBXz76xwG2gVGQWjWDnN1S8sc3bQDw4xZUZ2EyD7FNxoA6",
  "key38": "558PVN15HTk6JwDe6gjUWbbMrfjDd6gWMdZkZwA9BXLukocdR83q6AvJ7nmJmswNm2FNZ27bTmVxTrgiBaKJGwxA"
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
