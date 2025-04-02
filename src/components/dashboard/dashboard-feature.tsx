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
    "3Coh7NqXbFpacNuQCVxGrvqFysNMiuAdJYAd7UkffaW1nh2ThmCainQT6n3am4DHasDbsFPbmuVwR6WDnVS6zp5J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TcygNjrxMzrPYnHwTNS4sYQj39qJgSqNcFp57q5NLCnS3cBcze2CUcMAbEWGL45VNigdeJtNZpftBfXxcwmbigX",
  "key1": "3tmDJjsxte6CwVypa4ramF9trxU4aSYGskZU6kcKZYZ1UTzMxhANT6ZPaxDyXFo9CKpuhfUYGWqQHgvreP2M6gzC",
  "key2": "Eyay835159EECqPXB9NSTYGS6bfnnXXoigRZnNPy8wZgcNY5fmQThvXQp1uQJCzWMKnKyqxjVj4u1MuCuNeYya6",
  "key3": "2SBgAGknaKF4nc1BodEVzh8fteWv64DqQ3PykQLVFV55A1J2ktZcdcZ3c8GGx65dwKCUFBemLZKrAnM2x62SeFJF",
  "key4": "1ERxrkU3JfdFGws38vNBVX5iehB2FETKiXKzRxzR1QQ1jjPSuHg6KbW1zD4ZFWYZUSHdqsxvat4M788qQhgUpVQ",
  "key5": "5pqJ836B1Y8FBRpxrzJKnY4YCY6dZB9EbnbNVARxhE8fVEMmAsDTYCtqxtx7GY3T4bCJbQkT1GqF4Gazrhu6Vv1a",
  "key6": "3FTc4DLp2znciQtv1f8vScPyQVm1DKfeDN5uEE3kXGMBLf9bLQ8t95pmFPRvfRMRhsm85hbeBLbbmojvshDo7jyP",
  "key7": "4XSkRC9S2QeoBXGvUPkMxQEjPe3R1xaRrx3yM4ynssFaUiUPqbYr5h2GqZsofsetVSxB2FTyqkNrMiu9QcyihTfk",
  "key8": "2KNhVbbtpuT35Vt12rNpwLgZfKLHBDcvCqrKK5E2PEVyaAEH1LyTyR2BvMusqDqfGhgwABwRxryPFEmwqjk4E8yu",
  "key9": "5KjHcuhZRtxsrW4tyK1qCFEcpRVqnLpTCuAKY9wBztBuzeHxaTtvsHxL2RbcdxfyvBnWQighWtoGVhr38BFwvs4e",
  "key10": "49JvCoDUGGDoUNo58ZGFD868rSBcFei8xChNx79UdEAgUj6nVM3Si67qy3aTqGv939tbdBSCwPtb1QT8SMZtvRJd",
  "key11": "RVohNd9frKN773zCPQEcveTXyC2E4SR7aZJBRjPsfbGYKyZu5q3T1wLaMXojVaQkkx7Mb1FwMXUz21v2DM4GHj3",
  "key12": "2MArY7qKkduYUBhNSN5vhBt11D7neZzG3HZLFP6ju9obnyiKcseFG79fXs2iUamSo54jW83ocmD8cWTjUVgSWYVd",
  "key13": "5HW3qEyqaFJwLTawiaMU4GAcvaFH3wjvNfBcuJ8V4GRkbF6mZk8aW2YpiQwkYFAPYpga3cnzM5RetfRTnZrcxQ9b",
  "key14": "28TzHs9ioNbt2te6c9UPbmXENEwVwaKqhKtqYuryTzVD5vBLtnRp5EyNcT1WS7Kj2UibFZUCkH2vnBzTALatT4AY",
  "key15": "49J4QFZaJxnyMfZiD2XoU3k1BWaxEdvkiJ4ShaRn8jLuug8QtctkHbfSEFmWKMPpuEiNTNRiW32Q96X1Kn7Edncz",
  "key16": "dC7uT3LVskpYS3dWyVxZyPrtFfBNNQ6yT7Cmon3aj8MbGUveK4uyh4J9hHkFhUrLYMaDjxcsinNKciGmJCzbinE",
  "key17": "22FMMsgPnQhWWbwtWWB9TiFYkWsjnKMbfDSBxqtPMPCNGVDAnp3gFPJ4YYSg4sbeaExGC8enTSqLi8Jv3BsS1c1T",
  "key18": "4Mo9M7FW1fjskfxdZ9yojcFLtSei2hMau571Dd9Umf2ASMCbP6Wb67C3KnQ6LuZjGGxFmhq7WPUsDKesVCVtSZyy",
  "key19": "239xYcEDqo7RQyj5CfzfYwsTFz4KuMD8WNkvvsVRhi5ZVcnpwwmQJbzm6Mh7pmMKip2UX1yHj9wPwzBZEfubtWvb",
  "key20": "3qcECHAECjm242DV1RS746brunsNLjAWx37JpHqqduZ1bUizZTgmdJhxRcFrBRYhZCPhurXJPCB1jBVzyvLwYQDy",
  "key21": "2ZzKUteqaDWnLRiLMytZEi5dWd1ELoyVkyHoSneNDSKzzHB6LbTUT1quamYgP1hYf826Jiht6DKTVCrPEkkCVpwW",
  "key22": "3VjC2w2J5iYk3E3sUHZeUQQSZz1K2F2bVKzmmhVK2EWosMZ4YpFtTrKREP6dV31YSZPndCkMZmSxYhBB4f9yAqb",
  "key23": "3QSgcD2K5E3KV65fLrXFK4rsnUK5N7vTAy54dZX8EaNSrwAsbccBbrb66T31TRH68ukbNzt3oypUNv7VpLyeriu7",
  "key24": "5TTmdzFioVNGcCKE3xB4x9uYTmc4bwGxp5xhFNyfSdZW4xksCC85Rqb2o33UARCc1MxiPUEULZG3hfhefRpQ3ege",
  "key25": "4UHoj3btdBETyxogg8bNDSihTKAhS7EtWsS1cddTF7DkBDB4ZPsvsWsgxugbJ7mo8Ga1Cg9tTT2Efh2RRH7HW4eP",
  "key26": "23cfWEgTLS6UWsfrDBYhh6CdDv2TG9FCBypewDi9de5nCwgTK1FVHD4YFzcdAmcMpw17zfYZaiiacZ1ubSJVwWaF",
  "key27": "5F17GEpjFYdCPTepMgYWUibGNoxhB2VJ453MJzfxYGzFewnApVHV5vism37HYGtH114gbzbg4vEJ6sGZQsMCHVt2",
  "key28": "bBLB28BA5gD18Js6zzfZw2PH2RVYrYXHuKd4V6zqPpt8S7wngiVL5PhqaLhoUNPMJXX4ErXiMxoHLULrP7YR8Eb",
  "key29": "4ppT51DRVACKmAMtimT7m4v4L586atYoP2rsYHgoSDwTqT18xRZtSHEGcNJzjkuCEdVdnCdEbMJCGXGQNTkhCd3S",
  "key30": "YCfWxUxRc9FKgqsFe1GM3XTq1fWPZmfybmiPDJW3rNibPdYb7f9zk6hQfrNLJKwZX2o2W6yMhftsW65fSz8YDgM",
  "key31": "8aq7bkKcad5kgSy4A613CJQv3CD4S2gxhQSdopEuiUz9kvuYwmZ469G8SJJPRmJ3VicKXN5NoGmJKWNqi935GjG",
  "key32": "4JmhkovNvFeWgTgfSVM3dM7WZYUAR2HFbaZkRuiTL4MeRG6aJxpHMJ9YAZHgwd5UXUfjziq4aok9RR3edMoSpawT",
  "key33": "sKvTZReyt2MHHxo8sHjCTsUS8HtmqwPjJSeymdSKBp96wV4zzqf53tbgCkEPAXKGrhddZ3oQ2BWuM6Ni178HPKg",
  "key34": "32AZ5aiStxWURt9bPPJCRBVQtTpTjnawq1wDGknXBSX1Tx1uXEgCMr9c8kU9fJqk6FmrkLoKNVEj4jAKGmkPKoGH",
  "key35": "3DevEGHSPL49NQTsrrweYEAFYBndiPV7UuurUmp3onmmoJdhndtAGm6Um8UJxjfJrmAD9HyVsmbPp5nwxL9Wf7iJ",
  "key36": "5ntRkPeB64NuJay5E89bx7Fcb9sPbGDZrBAsJiJUA1dEnJoUTBms7MAH3JvQkY6bCu2mH3fc7c8iyntW7Bi18x7j",
  "key37": "51FYoeX4cMvm7fyexWm3cCSDbpn9hm4LNxCq6uJVzPaNBS3FooQacp5oC6BMEsvTApzqy3kdSFGmjNURd31ddEL7",
  "key38": "25d9LZPCBmtQELZyLhpy8nsRYvi69Rrn3ixZ65ZnQ1a5MVy9Z6GYAuZ4qx5rb1GFP21ZqZyk9XjM6PVovqECWsPU"
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
