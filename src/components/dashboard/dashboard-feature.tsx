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
    "EoW6aBjLi1fahc3gQfYTH1cKPBk2kE3zGQwEEuEtqvbXCPsL1w7Hbm7qiCwCLymK6dbh1eFShsQahpAGWEdpJc6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pXiEw3iictvr4BVeYazKpjrhzxYfpj9wtHaJKpCH7LBqCsTYdvrTDCpqeUXmE5TSo5Q5129TB71qyogqNFrGVfU",
  "key1": "4hnyqKu53Aniq488kFxZz3Vbm89MqFrLe823uiUTMdkJdTo9m9wcRyJs9SX98ZdeCJbNMxQugnRgjJq9whr9ARk1",
  "key2": "2aPuyFEr7gtg4SCKJrufsiyfV867kd3nRtNfoB2VbXDVk3GBLNc8jhYe7WjcTdGjJGWLR1YcuJTxgbo8tDCMTr6q",
  "key3": "B2E8HpKyYgNo4i1CbxhhbbRsbdLMR5CyUSEe96EjoqNn9936gEF5yCqmwRDw5KBUY2HDamXwX8XXtgCuxZwF47A",
  "key4": "HworHrEFih9KrdDVeXeaWckA2uxaYEF6Eoh3F8j7UpybPx5zDq8GoygLqDofw53oHVJecpSGXjo6DdCGKiUUxXp",
  "key5": "p6Bg5fC5nM5vNVMaYG8CQDBtwa6Tocd3aU1moju4bijq1PhgqUaXaThzXGYuDqgAhDhkGDiWMi4yXAPWfpAFJhY",
  "key6": "2hrCZn6PVjBx8DyRHFjD17R92E4dahnLVdw26tcxrJuRM3hypiMjKyR6mK9AA7JJgS66Aw1W83Kfj9X2ch5Lo5UF",
  "key7": "5rPMedfisfuYePi9RUj3ENYvkLbfbzgH4spBSYrTqL64gF1s9P2WmMsmGazkRjB9hhs9TeJd8EhvcoECKaLmF9w9",
  "key8": "4wgLYRaHQcmcqA1poto9MPAwSFY8wjjo5LNw6S81zZDCkCW7AoE6dAiRL3Dmotb33Fp3VnMtecG34ezmztx7irrh",
  "key9": "5TU8RmA5nYRKmsG6Sr3WuJVjHitxUAqg6g2wZXuagsUo7uZpoWJNqzjTmLC9RqsqeH4XcNZhrCpboZdXtgVQxVjP",
  "key10": "jL4xHyNWVp3kk7MSTfqh2paPEsjMw7FMPRrdBKzwXmhR8nBcyoEq8vWdVpeixgatwqHqffpTqrXf6yo7NDxpPMa",
  "key11": "QSGyz8gD8TVyW7NLGdk8n3fArDWnoY9FPudMHkjGLSaSZgNUr2AAovzNPSxVsY4CHFDnrpHvqudttTJzKH1YfRp",
  "key12": "Cz9WoH2e5zSCe4CxDUYf9DJSx9v6sYkUZgigZVYg31nFmdkdNttoRUaa7HXL3twxEbzdgPQ9AAWcCqJP36iW4eP",
  "key13": "2daKD8JHRk1By9ZViSA6LP9nvhZHz1rLmhSzJ2eA6ETGvQFahT7uymJxsrcpYoVZGDBrHyXzJJHGAwVMftafJbtb",
  "key14": "42t5SWUcw8WxNne6atk8KadPM4u9qcaJYCXkz7BPcboZ9pS23MqW5dE3h6Y1cTL6VTvUYkv8WL6UTmncEWNJDbNK",
  "key15": "5UF9zxLvY7eWs1nx4fNxqZs2GuGbhQ3t1LG9afpHo3rJzzoL9gSFjZcuMTkpCbmt767rR7rFPM6fJZted5qhmN8h",
  "key16": "5cRWro5uTFr5UeXE57oivu7P69qV3QvVyudB2kCJCw6MKvLxVEc3AG6do5pEN3RJt5HnGYyJihxshuZbqVcaRqhE",
  "key17": "3Q8cxcPfNciXsZniVxiDydGBHMwUhCqUyZsRwk1rpQDomRRjcCWh4YM2CdNceU1e6bWnAnCkDe9NoHPS8NVTVbr3",
  "key18": "G8Gkd7NKvYt4mrvzfNUDSoVMSvjhtfvxnTUTLKiA2BCnKPD2bnCMa8tFN2njWcRDybHYjTZKcPdbtF9jRXf8ksw",
  "key19": "5RRMYG4JH5imNnzDwXFfGnKThjCrbP6fy3gFuaffJCa6wb59hvuDTRb8XKAbT2y6LLv3UF7e6WrGuFtKwESsAnSs",
  "key20": "2xpNDFsoP8dDohqscBx3M9daoTbQLbrPo31z3YszdcTLZoAC269xu4xhViEb5ZvqnHpctzhdxHzHUf4hh16zA6oM",
  "key21": "4a7d8ME3k3Me21PFd1ntBUsaVSHCKhv2s2zRLodwRPfJEnhH5tssGKc51eobMhwQq5CmHPHp69GscA1XK2x55gLZ",
  "key22": "5zVFeS7JSDpQPTSgGhrDy72KeWupdJWzqr4EafMsas3y5DbwdYRPFCNqaFcTH4cWLSV5MmSXu7fh1cEQPXuDk7z7",
  "key23": "n7ooNdUTWDLsm4WHuz8y4dBA9Ae8Kh1Vfvi4XiRhLkGiRcEo1wj6tzXHLYq8eqy6Gd2shN44SCjQoDoZRjgiKFK",
  "key24": "2sDBD7VT3hRNKRgQZ5Bsjt88voEGHC1VfGpZXeqhM8xg5aXhcfW2Z15nzb9YiL1P4gyTLLtMAWD21ee649rATHGQ",
  "key25": "LeNYd39ic5gNuQyeEwTwsbdSfXutbEeAAXG7j6FaA4R8gkAB6Arm3rUBztTor3gvFfF2zy7cu1UGB8Nt32x9KGX",
  "key26": "TRJow7AG5HCU5bC7MyznTTjsRhv4EjLkxyTEzT4wxhxTbRhRb6Y7ENCdesDy8f8RUvpBgyjCBjV9utMGiYeR636",
  "key27": "FQLyA78NiG9dPUuQ2R3w9xu4yYPscCfF5BKsFQqNijRcmUG4jEqZhpYV5w8HDCwajsByHrNELxmwUGLzHDntCnG",
  "key28": "5o63bCW9rNHrrCDFC6B23k8kAqbQuet77AqG3EBSLufFdAZ4Jw6Vqeeuu3aoaoAUdW16FnoTAZQCNys2YSiSB1C9",
  "key29": "3AoJjeXg1vWUzKvBJ816m82U5tuek4qV234MyDFwsyza3v5DxL5mTmSg33iBWC454UrfLimfN5ASZJdE89bardhU",
  "key30": "4JzhJv7G3zauyYhy3a2BSvyoPnySgiwRnf7ZGvqvbxAihVZj9BdZRWDs4NuQ3eLFghG65i6mgGVJkdA1rAd12X7h",
  "key31": "2CjdekjjJzrvwq84tWsS37ZtRWCiZv9KxrB56Wek36Qc6kZekjAp85469Lktwc8epn9UNN1kSuBmQ8uzbUUNwZVE",
  "key32": "VrXfccWjfrf79joSrXGmShHAsw4kuhyH1Hoks37iJbsSWcAgYPu5nukYvANnDurBf5Ran3KY3bXnJvmRZ422n5X",
  "key33": "5yir4vGj2wkeQFAWeD9UXejiSsnZ5pSctkEDVp8Lx4qxfnCrTLtyRTCsjrk82FNBgXe6QLHdFZPJCHjBdgYUozwj",
  "key34": "2LxoJx8MQ51A67p2NfaMRZHbha3RYRz3yC6EHSUh6LXkpkVf4ynoKE9EB7DZakgVZNiJL4bc7BpBEfanuK6gLGc5",
  "key35": "5kUa6RiB8JrYkjScgNASrRoPGvckcLYvSZBEMRhkeeMfRGpXTK1inpYhTXZYwHJPJvsoy45SvGCtW9drfNHWWTkg",
  "key36": "5AYMJpykotxBgRnpsnv3VpMowprs5sF85Z3zgZYWvuWgakNwH2o1qnyJ6MvhQzVPwMZ9A4kuQnBrJfFrxES8VzGi",
  "key37": "JcpRkmtcy6i27vz5s3bPr4hJn5fUGwivQGx845pRFQHiEuS5UY9r2w3SZgNAcY19dRwhBpdB1y1PvSsPRuUSpyg",
  "key38": "4xhj3SjHnEjCHfFS2LLUTU8vZbthMmzma4iAazHnGmVWrViSjmuEQzZXZX6dMT9YGPARB4PwombYTd91uBK5ZPoU",
  "key39": "5CBQM1N5Cdmi4XSekyMLbjRYiwmarTifxiK2M4kK61fARxfxGk6Ecep9z2EhnRr6MNSz4tyCq7DgRmUK7J7mXZjT",
  "key40": "3zE5FJnur3DEsfjUHLcHkSEAu8tf52RrGddLJmd96SBERLuFJrFPE43qqNqKVFwSdogj3YZo1AhehysS5ZSVqynz",
  "key41": "31hsGLC88eDBLFYGw2dy3DoJbgdUYYr16GwfqGrzyuKL7nZHHnLdD1pHzKR6uyi5sngYeAE66nCRoibusCNZZ8Yh"
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
