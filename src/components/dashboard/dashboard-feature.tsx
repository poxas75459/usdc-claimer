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
    "axoYnDeKBLhREaxCVkqt7YArrc2gsF2HfQYXX6g2YW8VQ21aMHLWfQDKkPqyzBTVbaTpUhmHiqZUC83KcR87ozc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UXKsbKAHZkyfrzKuNthRkUL81nRsVBpBDrhnEgFXxXJMVwqvdsT31GG2sjR1T3tyRmAtd4uEEQYj7WDEhSHLwWh",
  "key1": "gd7ys584Pzd4v3aNEyv6StsX4bqp7LJ8zaj97F9r7isVhX2Q42QULRy8fVzSZqnT977Nzj69B3Wy4tWwCbG5gEh",
  "key2": "4YTcwiR24uifuj7QRbta2qyCUubk8rUto8TsP1BAWaocx2L4277ppzFHuY6g9EVaiMHyiwDyfc1ZHcrAdHJZ1W5X",
  "key3": "4rUjMykpZpBXfvxmU7QAzpq73psCirNMoCMjhqCUgdjLcbV3tTSNkxm4QLhkyqHCT1ropJUwt3xbeaWUjcHgNQx1",
  "key4": "jHZ94nLU3YPk9Liy7E2JoJ1Yznx6ikNrBvj9BsX113krzdy17APXZiQgoqCmE1LjoV4qtFGcSDEzb3tx5TnRhiE",
  "key5": "3ooUoUsZWV3PwojXjfVbzZz1e9BU818fgSaKY3i1Dbb1vaaGcLqJZWerVFpLEhNRVgtjMCCZ5VWSLRujQf9YimGJ",
  "key6": "4YV6NG7HbKAtsNhak6v8vpSpPPtogKiLr9rxUzbn1p7bDTfqwgpuK7D5CV1131Jm6yLj3NRFxnJvbWKgtXeab7wK",
  "key7": "4RvepxdkzTkG6yQdbG7RhSZbAWgkPngeLthyWEx4vxcADCnv9zgVWJJ8YnQW77y481EEMfUHwwxxWkzWN8ECTyuR",
  "key8": "3Xb9jNgQHCK6oSJ3yNveprTSv7x7dwXP1xd15LL7eMUSHQqkhBLkk4f2x6Suhjho4uEBc1eAUMQrugyp8AQfz3UJ",
  "key9": "3bWKmGzrjDuxGFGpC9imNAMKcVEAA2fUnevc8hAWN7TWYSd36NZyAgPnGGTyVDTCWrnvnLfCkihP3HQEnsqiwwha",
  "key10": "2fScgXpyUFT1fwLUP1Et1Rm43RUbwVg3bA4Ww5SzRrywWD43ym2FNsQ6vySNyfnffCH4UHc6wG5CJ8jUGRKVjvrg",
  "key11": "4cvrivbkvmjc4LYmPBjoMkVd2dh3hPJnnMgEWjyDEsAXWyEvLJUer1vKCZzWUYsWHv2GmYhskTJvjhaFQ7Z7rPHj",
  "key12": "5wBNDFVd59zCgYgmvdHm6RxWECVgcGRiFtjHovnygx5FTxBfhvvgi2SMSvvVKgzZ9J8w2afGp9booVZaHYtQ5z87",
  "key13": "4aJrFi1f6cAWKDspcVWoeTacRWK99ysLfhpUnTC1DQ85cDDYE3kGheLGbuz42Af8Swd9h9Gb4YbEdFeuE3DVmeoc",
  "key14": "4YUAKifqqPzjDG5s3AKHEMpcp4hSbUSr6r467qZWaK535Gy9mnLvmDU9SQxq2dC7SGbcEuU92zir5eihFaeA1KaA",
  "key15": "3TCQG4LupEyiqX49ncL2hrk2Xg7iggNHcQcTh296YiWz7513Q3c6gh1UezEA82Tb1FZess8ePFgUkMyvhwVrcRN5",
  "key16": "bQYztv2WF4XPLsTsrPcUGGQacHnVjawLiLbhRv3WkR6ErqH427a9f5Ggv9F3CGU9op88ZsMMueWzij9pmMxwAzJ",
  "key17": "2RmEpYtQhq1iiE9aJhkojjHXivVriu1SkecfEVrABSo52Bbeuj1eThvwpvS9uxmGvEH6PsMKXyJCAt477dnyuUG8",
  "key18": "5jUqcFPvPfeffK3zVChRXV9dn6k8jsKMESTix9MnyrAPiLLWsHCz4RDqrB6Tzm4cyCU2tj9DiSAypx1V2JbWrLaD",
  "key19": "5Fxa1TE5nGXk4JAxGygtfAYaxF7rdFNFH8ZFt2JJiDgrRAtH2zK4GMucaUQsYkYpiSfB545pdrgg8QDQwN4yQ2MQ",
  "key20": "3fs6NfX5Cce8wQnd3ZrhEcNjqWe4ZVRAcHJKg2EBtFtreVrS7NVZnGG4Jcgsv5gysuyxrhPJE5dH3mm4rnBvdhLG",
  "key21": "4TBKLhiDAwVK2LV6MgXu4W1SgKnaaSMybrtB2mFBHEEdt94deu2St7dyFjAZxKTnWd25iBQp7z7xW75hoGszoNmQ",
  "key22": "5HQ6NNdrkyoyb8y8ghdczUbz6xXrVfgNnJdcctFV4WFDA9GfeaUGUrETUrkF54KgmFH3o6pe7gFTCvRPXGGAM2H9",
  "key23": "TH5BUFQVKDd4Ts9MQt5F7Epf4vDihs4n2LyWsoa1bq2Ec5No4x99B58AdPAhpQmABfR8T2Qd6FjGhWcdA62GRVw",
  "key24": "4g3VwRgWBjyDWjVpkMQvqcnQvPtBPegNSPKVNzPH3MqtDqjjvsHM1Fa1yZkPCs9JRRVztrXVo8nHeKw1eyaq59ML",
  "key25": "2MQjbSYYw42wL8kNLDyrGypiFFaLsVvS13uLkPBjYRTsphX9wRjui9eukGWwJ7tCffWBqYWCHCyZaSiiJzvBEomG",
  "key26": "3GYQJUGz2wRs8B8CaXDKHJW1CvbZtbyq8uprB5nLm614NP7CgVaYt7aPpLNQLY7od64FRXJTqAJ4YunnVbu4AnvH"
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
