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
    "4E4wafU3CW1wRdSutkaijtBaNgUnRzhpV3KLEEmdPS5PRQKwLB2B7yqHjjYA4YE7fKyHwFoxNyPoExnHgArA457B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RHXHVMiBuonVByeb2uGAj6SvmcDqFmDeLsJDV86V9Zdtgk5d816VPgNjsdcMqvMoti2eZfiYGyHSUQBD7uzMgoX",
  "key1": "2EDwC5sYJe3rd5YiMXjTWTk1g6HRqK9fAoN4wc3wytNAoVbSQdnUFqbr5CpfpEzo5JkyMaPfaZCUbCh5EJnR4gwu",
  "key2": "6YUYo2tU5vJ7eiKShmRcFh53wEZtSHMUwA4LwCW53qMNYbiaXctLrjV4wCtQ9HDc14ktgLK4EVXDvoSLmXv9nbT",
  "key3": "57A7ByjeX7DQJpVTmiGAUaDMF1RsF8zzPUTZqf5XCnpSgF3YiwV8iYhBUxCUni3aXdLhKKLFz2zqmCHyHpbTRw3z",
  "key4": "2Cots8xR61fRGxDx9nWGUCQ27k5oyVffrh5HC31xCpVgrHcaVAfg6XQSYw8VF4yfzqEcmc1ahazFdNbYomCWFSQr",
  "key5": "3ffMy9CmMkD6z2YMxuskHmLZa3wnnu8wWTAxXsLKsSVNgRvJu8fGZGMMhfjpHqZ2s2yfv1puLS6Q1EdGgffXhbmC",
  "key6": "dyFH6btwcF3H9fpTVvag7QAGB3wZADpxuLEaanRHrGQ32HkPF8s2LjWbA8SWJsFDdquESfWJWyyzP6cmEnWWKQM",
  "key7": "3MoqMHb4rYRBkoW3cu5nn3fGciWfNqBhEZfAMDRvN8bMwEFLjKQrRcfecKSt7sbC3Gi65CCfqxejqnLpwTQqoYuS",
  "key8": "3JKgot5n6nXN493d18wcqRfxJVLrKDVMdxGAftZKyucW73dRd3cvEJBgSjiChShaJUyr9JiRWGfYik7eVKsx1Fhy",
  "key9": "59MzhdNhkcak6kxcDHqyFXtqiynWni2MgznWbDro6ZFsjLpxiw6YfQ54LPSSBEXHgYWt5LrNs8vYbjzJiRqRkWuS",
  "key10": "5acEVaLDXPQEB6zTSM7mUvyvzi4zXKZNL5TsArrji97sNB6Wfrn8fJCRLTxoyYBrrwVV6mAFK18ZRsmaKipT1WpZ",
  "key11": "34WHNJYxbqJUPtgG2ChYvL979ooWLfPAr8jawhFUw3v78JGEHCzUgPaL8sEMp1ESDJdkGxRXyXXmkoE4jgviGhsY",
  "key12": "wB3BckxbjURW6ZfR5AEpNPMFG9AhmMu5QiVDWEm3f7YRG6EoefMCR63y8hfx7wX2J4G4jvAHQc2KekkmdcUH5gg",
  "key13": "2Y8qs2PoDnXMkm4Yj8t38kvMQiytJvtTNdXiaANWWv3Xwp9YuY1JwLgzkMbQVu9XXypUgHCzd9tbaGa53EzMsPbt",
  "key14": "5oGuiYirTS2WkajJYKCMwbGRUU8VYmGvCn1RSBmmsYZKxNRTAfJBFTGKt7THP3FEKCK3W7cVDHCgYERy8KK7gZYt",
  "key15": "2tk7o9qxMpGW3Rrf6Vj4fWZmyBTcPUDvAPcbi9isJysyT3Ur7DT7KEiAa8YBvsWQeuHpre7keQrcKBmXp3CZQjVP",
  "key16": "dm6HJ8pLqrBGTevCbJ5Cz4W87gCnE51FShBVSo7qYsStaQkcoEfJaEh6qT6vKMWxYBKktPTBsvRBUjyJHbid1DV",
  "key17": "27DLuwRp8H1de83m3RugnAfMF12MtATQyE4KPSghbkK8RDvTUVJgWarcAwvaeDEsyJzA9tfzh6BCogFkEwGR4Bc4",
  "key18": "2QSMgfZvWfM8svMeJCxd4DG6Qw7do6FZRm35H15hLrwL7ENd3i5ENa9gN18vEgioxARBYNPpeXjtLu51uLhbG3X5",
  "key19": "5rStoZc9JqFSSKiCTXN951obimZ76zaE4j6h1KsJ1ectNVkgzY7bEKio64CSUiX7cCy8kff4igDdmdePBEvNo7wz",
  "key20": "q1ujhUKYCEDQ3osd1vaFekGpGny34gfpwuJBq3AdiSkNjZTBZLmYvfFQir7TjHSRGfhrJX26gSYi1Qor7wyrqJS",
  "key21": "YmJbj5TArZxQ22VQChpqyxxpa6a3HEWq6PHJidSgewGBHN1xwt9QQ8ttVwUV4n1kx6BzamGrGDawVgDQLXg3oUx",
  "key22": "n7F57THXUECBFYHnMykaMNxcg4SvYA8mHrkWYpgsQUwmUGUd7UnGTVxjaFhcvo4eUL5VvtvdYpgaw3qQ7vBRDgf",
  "key23": "2hcgntQCWK3CxNLoUYBy6p47q3fhXktf8NRUssiRjkGCqwsv6uYTJLg6wP94qHG9JWwHfMbqtw36UcZqfYo1o3Mk",
  "key24": "5Q7VcC41csuLjcuKJbfEJMVVKmXGggFesP8GiW4PFzGJvWRkKSSoUbdqVdmi3PhbVryzyCwbHFhPK85wt6XTZZ5X",
  "key25": "pBRAgQ9xvnmxfvpQSMdBb9tEenhQXa9CCKybwowKDppUtYrDfdVUzCXfcUMaZitZRg7ABdLti5SVsVLCxuQvez5",
  "key26": "5uJq7DzBtN2RxmMaLBDQJAHTtopapsQZ3jxJ3qCnfrh6mGtfY86bSGnYEMQE7zSZj3wiVrq2Fekf86USpBmzYGja",
  "key27": "4F5LG1UGxwyyFcVTZHaTJ7gBFduMo32vpZE7MrbSr6oL3iW8eoD6SLEnrjpsTzRBSSEgZQ1nSexiu9q5W81RSAzV",
  "key28": "21SHsFh3xSef9sNVboxfJL9iGnLgS8PwCsGbkQ9qPjgr3XBc5d4WgziHYhkyb5kejWRTrC4cVdcRKkFpVAwZHuoJ"
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
