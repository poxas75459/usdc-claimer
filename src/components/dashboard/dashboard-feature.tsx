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
    "3sBieg2Bc2iytyuPFXkoBNaGPwbgpeTwX3AhRybR8JLor6viR5nQ1Abpsg2aYGs7uWz4vex74h76JjziqXKBzMMk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "543zmgmaJ3XgyAf7qozi8hLTcmvs2r6CZiLcqPb4MzTEZY7UchyWAHfufGLYcjVhFSxEmTsc9YHtqFCPGYk6M1BM",
  "key1": "5UGjMZZJ2X3brLgS59xvsoVQJWN9Vn71cLAfNKjDnpbHLZo5mQi3S74az3qSRWNKxDCGtEk43kkntSjxkxKLnw88",
  "key2": "5QQ9kotZT2aqGJCEmXcJwUNwxaqVXkeTaXRp3ZGhpKXYtmiCadvGt5qAXr4T4KTbcn9URchARatyAykjNCkF58VZ",
  "key3": "5Z8xEP7XtABZsSyTtX6crXd7w9CudEhciP6UCfht4jvfJ8LuwzJFnRWBf7EfXwBTsfqB8xaeEkTbTi7RsApDjpn8",
  "key4": "63yfT3w61sk933MJJ36J2VTDyY2edeFWhxz4fzP63hCaebBjH5EcjV3RRUKUZUZwKhQVfEWcLsJRvkM6zDPpvqy1",
  "key5": "4RYqR2YwGJJEcuFwNmTkFepomdikUe1wzQXPMACEprNcJps7SGff1p1FuRbdjGS9nsuww3V5UVapMLffjjmSY6zV",
  "key6": "amWm14rhPsiac71VaSLfaM4uhgYwQfZwDcYV2rhEz5cDfxE1fY1NgFLVJ5KxJGfcnvhAy15pGkF1zEvj8rpjchw",
  "key7": "3HBdq6F7gTUygiV7WbFtEz6CYF7QwRLNGwxUX1YD38oswmrkJs45py1V9wSEaDnv1L2w8oqhRh8x2c7w8cM9gNtq",
  "key8": "56Xd1BbFSX4kpWHt2AtNMEdPx53ZZTM5mpUVf2o6GKcAQVVed5MvhWVpcDxQtcLonsLJ35HschZx58WHPrBGuhgu",
  "key9": "4iWGdsZZ8RoEtoKMN8NkEf4iuEBAEx9Lphi2LfHWLX5wdsBdEKwiVghTC64BtD2SDeXx2QdnhbKgV2DFA3yc65em",
  "key10": "31y5aX15LFDh3wor4h97YNrxC5a99mSHxE8wbai7d7K2BxXJe2M2j4uACXT72dtfB31MYcnLJTAxto1G6cvyPiR3",
  "key11": "3BRaLvR4WLYXwxwj7bYra54CQNmmuaTG2LG3EEbsTqMAD4hdUtqQSjWyDKnwFC4xJ41jzJ8MRazE4MC7zGY1Bpgu",
  "key12": "3r3uN42qo28Y7g8LwgpRMCELogukoddDsoGiuTPTSGzx8pcWoJBg5npmzxxn5xn8r6nq9fyvLqQHpzwcj38C9wAt",
  "key13": "roxW3APASW328DGRoKfAA3BfWEWcFdErXdzFv7WRFEM64TcuNQt1PFjFQuSp6FLChvCNN21qCpNgF3g6cqCDXJQ",
  "key14": "2d7EjeHpeCZDRPGnVUmxdvn5cNC27NPXRSc6hQBmKceutPB5VMfN38AZKD7TKmhDbbPeANBxMBAmAWuyHW2jLT5z",
  "key15": "cMyL73rMZMZWBh5iyvFwCVFa3vtfKNZwDMdQ9sE9FRBrargpAShuNnQPi5ZkbCP1bTUhRQS77pXQmHkfN6DY7Ed",
  "key16": "3RBqkzSYdfciCZiJdyr2WkdqcQrM7i4S1ArbwnQwR84C9nDfAyXaoVPpLZvbgPLnRDnrQKDiMzpTn58dV7MQFazA",
  "key17": "5LkDG6DsLGTz2QQef4jHqYKKoGqsxMnwZzgWkJX9tV99wQJkjZKpxZqQgBzDXgfCQrjrr3FEe1XDoxcHuh59Cjd3",
  "key18": "2Pk6nJitDAVS7oFJG3n6vALADarod4hdtwDzpvhfUvsH92dpsHKQfyWuof6CuBkpf4rwsdS4ykQY34nLYn5AeXxA",
  "key19": "52AEUuVwbCk89jh9TtVQ2hG6rNerb63iyedYyREL1LhYSfH6JMNQejpfpenMoiG2psBosfJvU4rZ9QbHesqoaN3R",
  "key20": "4hoHJEQUv88H28MWCQ6zwL62Zk4BxZ5zCjG9eDByT5xo4dDJvKJwN7B7HTNaPpzfncAHgJQ9Hvn96AAb2gPs2yF2",
  "key21": "2e4JDTpjdCspAaRX3C2xALwaeW9qD9pSLMK4Qg2z1qj8KD28Vqn5795pGo49X2hqDR8PwQ7adQJcgvipZSfjUy7Z",
  "key22": "5QrfquU5TA9Pgp6ePirEKJbMXaU8bavjZtQnZiEJFYaPr7RUkZRVofdmCNQUkU8gwCcFZb2qUEYtBBD7QXGw6XGn",
  "key23": "3V1N3mbAYWC41dGcQhK72tGBsfhAvHaf3fSJmJrh61BKnpf61rBYHYVYnsCGYSdC8tmprAcqLxLVBKsKghVmkDaa",
  "key24": "4h5pCgpt3tb7qPVDbdtDjK2WiVTcyuEWtrwHRPhieeiTd7u2eMzZTnpMPf5Pq5a13cRgePX2ujmFW9XmNMv58Epf",
  "key25": "3hkAQ9F91Y69dU9p1mWj8EoCJtvnuT7qKgGYyoYfbNbijja7QLco1DWo9UpEUaKF5ZehvD7mbSdEtePuobCMHTQD",
  "key26": "3s1xG5TPLQnR1SkGcpFEXVtN2y7EDVXHcLW3uRuQHuczHgEEp6XKYTTjSN3pySbw3Yh4VgSxwNk3p3Bu4bkDxQGL",
  "key27": "4rWE49nAzkYhUnT13zQm6M5i7XdSEmJhQHKWtYL5djEYtmHirzqxokfGPCyDPeL87Kk1VEr7vxvNduFPS2k8C9uU",
  "key28": "3BwbsEyDvoVQwAzRTfkcb6aHXanqoV9W8o94n7FhnWni1YsTbmdngaXpoJoBr9CWUb26oHcjosQhYrC1eCga87Hf",
  "key29": "4mh7dGH15aeyeGLamuMJyjgSm3j7DeN8W4zqgaavz6pU9yKEEKabcfvWPfrsJdbfF7Ga4skduNbp1eSAfnDDugxx",
  "key30": "4GH6P1mTNGfP59VmpdZFuo4huqmRsFDm4EDrE3o6WggzHjDMiMzt8cfN87wjGXH58SARCsi35edW6mTk3hMKdvWZ",
  "key31": "LSSJd5gJb6tS9BoHCr8QzrVVPK3WuvEXx9YaQhBmZYQjL4jE1ZVMKv5spJtepospkdJqQ2KMgkREVw1m5SPk5GC",
  "key32": "2iyLwb1K5J5rrhDmHx2vUgch9iwiGUXmajzLrCQgzCbEWnKxZt5QzUMonG4XnZxY9mVMox64NryFwphvWdqycHtq",
  "key33": "3Y525sKUfSkNYpJvPPoWR3wSwU9aUr5RNGCiYMyMEpJgMd6weGFAL9Y4GmT9DQbRx7zuyhkQFFcuXTKpujuZdFv2"
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
