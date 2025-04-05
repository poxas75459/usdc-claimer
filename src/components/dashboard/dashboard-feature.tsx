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
    "4DYKYyi9xeKd9SvVJKyMPBFuwZ7PaaukVxvASFhftu4QWjeUiPdtZ7Q8qGjnsA8PgzRu167qWMZGWQy1UFiY3w69"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3khN1n4yLqNtgtuiNSAupBJHn1ZcrGabXwJZkmx4FY4KX3TQK2hVbNPS9ZebXeuKHzyBQysVbQLysuUSDjMAnHBH",
  "key1": "5Fy2eT2EfXUFrtcPWkseffkNvU684GccB8CFxuGnhBo6DkiY3DaaXd6SyY7DtCA2a6qz8wPgfFDZKvJw7cTNk3dN",
  "key2": "3nYj7Tmv1MGnyuVHEG3nUGCG7zzwjN4DXHYc5hCvLzzjQrqe5AuBJDNQBjZYqfDVimAyYuZEZnkrVzPotVZQARKu",
  "key3": "4YmDxhpbWg4yBdKkxeQ2tny3ZMSpJJUxkp56Bn8ZpAvXYnFvnAJjsGhPYJdJg1z2H2g6zdvdKTwV6QBPtBbjyFTY",
  "key4": "5EQxYyDKUqkdJ2NeijbXyAVuxqwU3tckHze8Bmb61Q9DGZz3j1a1qvUxRST7wdFxL8tja5F3tF9bGC528e7CN8Xj",
  "key5": "5rUmU95UN84PFg4fA4az6U5J2azdiz25cGNX3i7ZVY4WDGX2ciCCbLgJnEHHBFDecfuF2s1Bwms3khDhCydYbogP",
  "key6": "4j2hyELfvBTFYTGEnADXJiBqFtXbRwMpkTxkTbSADcpvsG5HDSb6xntUGbgWtPpKcn3y5Eemuxf5eUQRexWhE9eQ",
  "key7": "2uh7hqHtvQTq2VU9CsCermntnP5zCdBaE6YwFERr7u6hLBm6qshYz2K17jjfQAYtJ2997f6YJEyQ6Uf7ZG4a25MU",
  "key8": "574XxK8wa73AMc82ccc66YD1niJV5Dd1jgsSykUcZAWozNnPTUsAm1VbvpLaRmZ6rBKY2D55pENoUbqAxCQbU9x6",
  "key9": "4N45KSi53ZZ1efDpr9vwJY5SqWSuBzRMVED13qGw6xbmuRCvYr2YxBZUGktSzuriNHqzt345JZsifbm9zKggWQy6",
  "key10": "25b2PsT8m8zMhDg8mm5jShv3BhaJip1MCVpGggjZczFUGvfm2S1M6ygihBxJJ3T7AQQ4mUPF4FxbU1yh9d7scNT5",
  "key11": "2gKpUr6R1AvUeGmkSNcTh65sCHmE86y7FRPqcKd3CMy6wBzMbg1qPNyAJvdUE45sD9gS7Xuk8qCTDiGWunaAbabA",
  "key12": "4X4tbAMNm94vRqtAwEPJhNryPkwKJZEEqJDfcffG6y5N8JEznDLvoBgMricksrB2YbDkMG9ScTwgDysiUKW84Dr1",
  "key13": "5fjJLNgiEFdWCU66dFKWx1XAkp6L5azr43hNGYd1aF1cJN6RxL6JhVhH3GeqQV4o3ZrdEiGdhBzgPNQngYyxuf7e",
  "key14": "5hK8VvzYUnxX82N1esMqrczZenKBj44BxC8nFZYBQ3Q8hpfKJhobhkbHhKoEzhVFsPQ89Lh6rRoCgwXKK1paUVh",
  "key15": "4JQ3WTs7TAPiT1zrkYM7sJ945UGxaUGzfyW1ZLErrKUMMPgsVP8gNJpSXjiREBfw4CTqGPdwxcYd4aazFgUs3AqD",
  "key16": "5HVWGFszRkTHh78UznrFDzTVWVeX85vvw6qLGgrE67iCcjy7ErDBRfw7pEKoMxu572ZcMJ68q2jN8aQfbctvzyAK",
  "key17": "56W6SceapHX7ZZk4WUHpXmCj18ziyLPPPNTPxGq3B6C8e9dcv55KqDp1FZT3rMwLWwhWhzSGEnnHq18inPrktfzj",
  "key18": "4DPF5uXCsbUNR9qMAnReu7wdM1Dygw3qU1PS2LPJCUcbHgWfLg8GGqHGcHYmxXyuz6dKB1GJjN7mRL52RB4sgnCc",
  "key19": "3Ke4HLrbBWb2aVfsiQV7LSQj5m5oZbc6sBTReXMmRAV5VLQKswZ2DFmemnDi3rHF1tTV3nYecmkjJVK5qFtmAeDZ",
  "key20": "4FjfuSHpDJn3dd59vs4BjxVkDyANxty8qQB8Ygy3SEiZ5VVcp4oP8EFnnjDYoMx3mQbiwaMcm9WDrzwYWGTXdai4",
  "key21": "kFQhinuNcSphdKMSYgaxHcPDfshighACZLBNtSKsF6zwqHT9o9bV3bwc6P9v7H8VKUNfWzq5XGHMbhH9MvszcqU",
  "key22": "4x2K2PQBzXZH7JXD6TD98eKvaChUrXAuByAMmWyRbNaimmZv1fwnpXPBGNEmLMZpGVarPq4mWt9GE5GcrpGhNZBT",
  "key23": "62ABc53ZWFfAPCpXLv9h6fhX8LPWagWL4JVCw3Bu2mS2YxsuApKK5hFVWwVmdmefVnqFRQT5HrWroduie2aXnrg1",
  "key24": "3UPj9dqTF299QrxesGtW1moK4QN1YPEsPNFNbBPU1Tt33d2zXMJmGvej4SCWQj2otDvTxjpzDECNWFBf1GRYg6LX",
  "key25": "3FgorMk4MDpWAtusfZ6XvRbjuAAWsSjAixfFLEeRHrQM4YMXyHpuKe7RTLWB1Bb655Ze4rw54EzWg3yL79eU2r5r",
  "key26": "5X34j3zobvBPHf86QXN7cikrvq44bcrxreSG98sCQryms88zNPJK7QzTkz1Edv6oM97z7VQW9TWACq1Epk8fUA3U",
  "key27": "3PStfZq3QuefhKC8TPqggZN4Muu4vSCoMmP3A29dtML5xjBnYuunKzadRLwHmHcvEiGPkYBgBKA1DuviXfPFkBmv",
  "key28": "VYfVoh4ZAXRbM6F44vXYSVwpuogWy8CwwbtfXYzQckg25Ka5CaMRXtXfGNowVFk9ERuevo2e4ub44sBmCbPLQQW",
  "key29": "56s6XFcay8R3xm3hGsshe8cwvjHGzJz64t51fTeH4oV4D1qjhDXhU9GmVywd23BKnVToSKGFXfERw8QZX8KA9v6c",
  "key30": "5rHcLgyhoviFdDtuKYuMPpx7M1HvtquBgcYaQNyaMraH46P1nfqvcur3NbaVQkuciooa93DgTyAHFU6XgxBWZ2M1"
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
