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
    "3HsWum3ovgDsapsTGueeV65gUZydFTTSQ9ekQa6Jv2oRrJcbpDo2pg1NpMMoMosSdPZfRyJJkWzus4wY5M1UY7Lh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c1dWWSVAZKN2ussRwbUkWaj1eoTd7EkW3qccp6YgK3srHkYk4ZqwSSzeTs43y7dzkNW7tmWTg2Lgd416ArybWpt",
  "key1": "635koKktvenabf9tVShBNKjSZ78EWov3rH3czEccvRUaYTrJe2dEaZGu2hBaVtU51Uv8ojfcZ1Tq1YBWwM5u242W",
  "key2": "4FyEM93xLXhfMq9aSnHdu9P1VBqKGeY9rT4WmsVBvCcgEJw6NQFfMtGE1wc9s95gSq6gR1L2TEE1u7jwXH9HJx6z",
  "key3": "n5LgpkgvvqmCzGirLAts6DSAzLyuqKfgB46qWLr5o46P11fLEGRo5J78piWCZrW6trKkRGhZ7nW6TNYCMtYAns7",
  "key4": "2WPdx4SgT2VqSuiS5vTnjvdH8YSR1ovEmqCedf3b9n3ty7GZrXa6V4gVAY68uYdrMS6vjU5uVKAvjWLawxV65Bw9",
  "key5": "2CjVYkTbCsuUzb5QoX6tTPHwRQwka85GgPM1M3KuTVCW8hhHuJncLBQorckqAe1Um1xo38SxAeDspkgf5SzZnvQm",
  "key6": "391zzhqG1udM1MyUt8SgMpNTdpCT5DWFmJDyw9FwZzbkMPSVk6myGqrEtpU4pmB5iFEcFwpCc1M11sXWtxkSJxVi",
  "key7": "GrqyQCLtxbCh5ATSU5Cw8DRY4E5fCNQSVXVmjYHbbYEWh1mBKehx4oY5wKZYe9JKKfciXnjwozuVs9qMXrFrny9",
  "key8": "3WxV1vCDiQPFxLTzFp8JM8RdytXChunymz52L4s3k1ftuc3eenqXvEx5THa7x13BQ7uS5NzZNk52A1dpH5rXnxDp",
  "key9": "2wbK8uh7QHDM3V5RsCzbiDXVGPqH4ygpWHSUgJ7kP26JE4aiKSjWmdChyUyhcEHwMMmBNVVB3PgEy39NQ4ntgsBG",
  "key10": "4RWgAbD7caMZdufySG9x1BR9EUyKwwWRTRzwDqgwfrsryeRW4HSPNxVM1pfefjYVK3sNjfJics4xoY6EDhhigTRX",
  "key11": "3MTe4zhCYM6HtSfcfUeXbzWPTXg1XaHVaFTskTFEkgDpCoZNhHsMkMY3XRNEayp8T3ciiA3oByirzbBUiA6k24Yk",
  "key12": "5WVL6w9P156mBDeAhrpq7ejYUMnvT1rDWsojxZXam1XqeWfbKo5hpseSnYpUUekVMH8mtLsbduPv53fa4CvsEmSu",
  "key13": "55ezJJeq5TBNpGusXTfUvYP6bGGdaFYZ77LdyMX96y8EAR59unfhmsJVvYXN8r2qKDjbTZZf1VC2mYS8fP9zGMY2",
  "key14": "3Wf1mJSqv7S1JV5K37zFHnRK9uZu3896paR3PQTZ135VeqEjVEWz5icduhpMtGQAQdXtBrPaEBosWE2ptYiqhSL7",
  "key15": "T5eUZNasYf62AiULr4a9MruR2oLKxETeMQvnSMbMR57KKbs6K6vS5pQSba8LY5DaDrFGbLnb5hh9t11PiPF7Pas",
  "key16": "ZFKp2mzoxt3tEkztiDJiWiv7cTauvLX1pw9xk1MuQwW8x813CxBziQBJnSPKV23X8xjQmWqw4d1jNKT9fSrCvR5",
  "key17": "46WhRK5rGok6eNxs3nvnd55zJ4bmCkbFB6dpcUmMJicLpkxvUJFbPWGZUruVHR7gYGPrz7ndP9SpbQLAhpwU5rXX",
  "key18": "uLVtBTX4NS6RwtyaELNfP9Hm4Vx9HKm9bzqAtvJCfFPAHBUewg1LKFGmXBcnJYwsADeG5kMrQ6CYbG1WnPtFSk6",
  "key19": "3bHWjNHHhCavjj2RHboBPhkT1X2CJ9oCpdMRrsu55769iuk4sJZhSBR96tX1N5SyRxNjZzKB983K1Krk8VLCz3me",
  "key20": "2pusRnZ4ZP18oYmrgBTVPTsWuEhW2tdZqvWCxxK2o676siaXojRTBozmJSTR99DLKgZ1M2RQF5svNQ4SKrBUY4uK",
  "key21": "agTFMsWKmKXUdtpTLvvTgyUTzS1QmiQT5kcyG6fpUForMXc3qZw17VAd9qSZG9CJh7WvFEZg6p63ggmpxQLhiVj",
  "key22": "4tXvEpsvEiGsu1uxchXpaGm4NU4zrqt3Me3m5UxyEb5NFpaazW4N8tTKzvTNqP74zc7jFTUUPZZijtZAXrfXfFFY",
  "key23": "TGn6ZP8jzHqhv1bFMnoGTrspfLHmbZFcJfTT9wCoEMfLyAUAzCnw1qwWQ7xLRsSFHXzo9qdLP4wVa1WhceS6bWQ",
  "key24": "4JoYMtFiDPPyReK8Yorep6D3tDfGyBsmbjcpxf7Ja6rFu4bujgSAehXdRGDUcb6SgNZcgxU7ZpwJzjKkZumLzY7V",
  "key25": "5mxjZ5F2Xcaj7Y7ErmZY9aVzXf5uR74zVvuaQPUg6EXioAUasDJSv9ADxzt75r8wY9CKkak12KS882FqJfjQJ2RF",
  "key26": "4g7F3im2UPWCuREVpbMLUANgbRuez6AQ2bGGmWVZGcumYNmxotjxdU974kwd4wj1D6rBp8WMgb6Dudhx1m58wxzm",
  "key27": "ap7PBfUZurj6DtqCmRx6GmbUP6Vx18LhwcwonAZiL6hwmXZyxGF46sb45YpDhf15BPVrUutoWQKHWcVdxAPLTLJ",
  "key28": "3vKdi6p5wbfdvfQeCJMsJfwmcYoVj2NBRpkFxubdBFWP7VVZXyNt9ufBM9s7rKLBNw7ssTgARhiDJw5g5wGBfGNk",
  "key29": "CG8M95htTRaGVSTK5thWszDWNoyNdPDSWX8ZgdN757BbMy4ModrAqGnTJVtzC5kiXNswJkisn2tzjxfD9ooguZW",
  "key30": "3qc7vA57o9RxuZyCxKtbatFCLJ7d4kSJYiTSuvCzcJFq2KkQejU9jasry5qDdU6RHrL4iaxJu4AnmXX9DjpDguZE",
  "key31": "6BoUrGAFXb9AxXLHj1FfvXkNwuwkQbMbcCYNez6eWRkweEujrtUQspywNgHib2ghL3kiQCQA8FyYevmBae5pmTb",
  "key32": "52x8SeMM9kaoDkffwnZJAjGoEnqxbj8boNNnn1Hxx1CwwkNTgL73N3aqdwrXFtdfXBpURTjUHEy2EwPNhhcXMiAm",
  "key33": "58Nv3QsxtPDm9UELri6RmpmfjqL1FAT2MaAmgpCAZAtjjDh6nxGjtTzKcYc63QmAwyYvuMJt3WgncN3rUtgrWLKr",
  "key34": "3KimWyNjcB2zvKcScXMQqfkEzPMomxfaX8bbjSz6ZvxE5aNYgJ5ipZ4GjkUYQq2cLtQNw6G9zyk1sEnP5MYmDDQm",
  "key35": "2zkp8RVh8qAwZg54558taNyEB3arzkGwb4D7LhnvQsQcroxdpPUF4LuYmUjNYvKfFtbvVsXvkzvpKCpwLocVbENx"
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
