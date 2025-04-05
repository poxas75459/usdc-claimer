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
    "2iRAcRZM2BYuFL1UFuiZGkSM1UfGUPMuwMWkangFTFo5CaqsRXsKjhmAK6L1wSa2RFNLC8vCE5aiXfDc5jTTjTyw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BKB1FijDwJnZMHDfQPUSbzEHqV8TuBeeUXn6zChLj92CW52nXhiUZyAZDKocqrxw5wCWRwteJfLq7p2ZnbctnHY",
  "key1": "4jnSpLvqxRw1vWEP5xJFrkMADEKh1ehsW1QP5ajukPWEpPZtqRAT5YK5LbVCryphhQaNnBSuzffRDRyygmhVEX8b",
  "key2": "3SXBc66hAu7QpZEd24YhYBAqdMSWj4okobKtSZWAZfimXWeHAwTu2SK7Hc7HCccbyXGYvMUuYn4sKNrq2pH8htrU",
  "key3": "5d7QDdfsHJWCzgJBwKsUsGVMuFdzT2b3czdctnU6attfu9hYfN7Mct6GHJhEgSNUMFWW5rxFVtTiTmNWmLvg4U3m",
  "key4": "2RSKtGuiwUDUvJDTBK16gtNK67Bm8S7fbTh9mTKhnkvxhEGA3jMQ7MqAZm1ULEnTqgDK7kBNN48eKjYqXz6heZrT",
  "key5": "2PBVnfQRDC3KQfgRTGoL8FCHLKUQ7gtJu9TZMn4evwT8M1divncnvckZSEnXgaNJtueuHxLVHVet5Rv7QusbE3y6",
  "key6": "4nX5XRf2PhWH9953fB5tzxhLBtMXznh5gdvezv76pJGiENizvX6hsciysYUAJDGk7iAEVxkGkGYbzwjNCttm1pP2",
  "key7": "5Cz7ebez6aVxashLcSFGQKZhssqpvPEDq9fyCQvEs6GP14sW1mrecUa3BYzJtLYQJcmN19hVSkR43NcJo3NV1jZd",
  "key8": "4PyfcXtC2ps9s7b3PZJXY8noYgUmmz61EEDicyZKjKPYbbePWwbtF978dgJjMbcHz5P8CszEZvwT62CW5uyWUakf",
  "key9": "2fW5rpVE6ZLbzbhkRrEDjg9HG69RPpSmHP5hBBrE5meBUteVMW6mhPod1B17Ei3QgkqExAB95Y8QXWtnV2mq24y5",
  "key10": "5uKQJurBueoSNQkoV8zMKSYb68yfAiw3SMdwF6giBMLcVUHN783WY2GDbsAkPoh5t1Sd7vccFZ4bCWhy65tatzD7",
  "key11": "2Xke8FgeRCuB6naJSnzAwPuFHfiVE8rm5u6mWU9dqyhdBUhEGizjFDoucX7gEV8UqWvQcm9bvy4mUHk6i3q9yJdN",
  "key12": "CcgonCQ4gRbKMiTJ1myVsvp1cmuLeb2eqszgnKt3MoDw4hCGLhWCQDazAimYm7fzQJdE5yWPyvqf6f8KECmPJL9",
  "key13": "tXyxvCEdDkk5ks5XPy2wd34PxZyggfsUodnvR9d1rnjx83NZubrzd7sRXE7RjQqq8ia7DHW4kE2C3nzk6R6Scvu",
  "key14": "4pXWGbtzL2P9Qx3zwuWqj9yEcatEcDKRHSZbPpkxH48QY6k29r8KWYTCbWVg9rGXZTczfjahaSVtSsD8UeDiGXxa",
  "key15": "2FmGvxD9JQLF4roMFGdxEfg43MMGfrjPynKi6ET645t7tR4qeDyxhyDinkHKFmMDzJSD7Ey9RCybkEKjU8oLWR4h",
  "key16": "5u2E7ejmSfs6kZYbP3yND4Yd4zmANwtxYktsNar9meg11vfBcbvFiYNPmdy9YCMEVoQouVeR87qEvUtcqg6qsrv",
  "key17": "Nhdxd1EG7cHGazGD467q6sYvAsfRChB4VfPTYwXcUPpqFmnwphWk52rTBZRkmfgowyyXr5hn48KY9DCHpoppteq",
  "key18": "3KnEE5rX6QR7FLkF3ysy5AzR6d7d8865qqntfqCHkbNuL1ticGmZXDJLAHa4wufuAFiGjLDGX7bfpG5Q6YFDJykW",
  "key19": "42nPEb7LuVFT5XqtVZjieChwiVWKgyTJ212tEX2DiEUtqZod1AJX3dZfUkXZSL71momSkCcCggeYDnUW3ztRjzWG",
  "key20": "2LR8M3tQmXmG4CtqEv1EDCGq2PFANHuih18SZ6jEEMSAob5bLPuA149S2kkCyB37sNUpqP28WHY7dHSnu2Go7srf",
  "key21": "5vzWQdi1yHpH6CLd6xkBCm3b3Z7YTzcgcVokTZM7b98ugz65MtPUbPx23kt545FhfeGxNqSmiuTwtTUxw3bDfcH",
  "key22": "4QKjkDT3To3LkduTX7kuhHet9jGgwrZFNNvrzz6UcUTfdmXAqPL48DVNA26A8nMDDxkQCB5irGv5hy8TUJWcVer",
  "key23": "5Z2YYXKw9Bgb4m5ofo3K3NwNV79cEcAxr66jB2n4BZMLCP9C89nFpBWmT47Uxzj7rt1wkjpwSdutxhH1rDHpvHxc",
  "key24": "5241e1B5hufEx1b3GmMkXsosQogZsnQdwTzCBRxN8T2CL8p8gtfvEMUxvYKvtgGWgxaUSqomuDFRGdejPHgL8LQ",
  "key25": "2NHoJSRrmbFHAr74td2inKJcpVGhZ2dpfAL2DYDe91kpga2KAceq9Df9FzgrDnx8mPVQpci6LKUyZyU6LmUvskdp",
  "key26": "we5CURW9gmViXN1C1em7y4dkDw4jya6pHH7vDEHjLcRbLwhHEByMbnDQbwZswDEzxP7i4qRMbc9eCD7HNxFx3Sx",
  "key27": "4TkaSPRaQF21LjDx5k2WhdxLrcoE8foK3YJXQeyxGgtwsgT4bmFyYiVKL5FKkvQHKMakhZhpuNsVQjCZxbiB3Xjv",
  "key28": "HH8ctHwdqEmv8mxeA3jhBSnVSq3gTDMGQXHGU9THxziyS4xFWK5nKygUtrncc9PDFKd8MpdqcFvw1TyyyMcmYbG",
  "key29": "2eoi1RdZXKK91ouzM6jNy4MYkzHczx4x37DAovbU7YyLTpKcjFAuoKfq2CGWCgpFd88uygLMZmM5aqVejebBjkW9",
  "key30": "5rSZRcvuZLQWrRzcqtQQd32V2tN1S6ubyPVsAg37AQjYuaeP172mkJGvYAovCXesHRfdNgAawQ1cwa6k2krPMxWH",
  "key31": "gamVKtfzPeGV99yrpbfXTZjQU3T2k2mrkutPtXyzmkeK1fabQZLtCuKC6UdS2iaXp8LohXxjkNn45VLe9vDb8XT",
  "key32": "2WnXqx6Wsfd6w46nXq1PmEv4RUwu7X3U1RPqPxcCWpuM7DWv8dGGigCkGkyJWaTZ2qMqvS3xEDJsFyDWv86BQ8SQ",
  "key33": "2DqXx417tV4ybYD2yjwBCs4GnWk2GVRpQWrAghbKTGAo1SjjVHHGURdrL5iR2aqbibp53wVu1r9fiuEckMZke27t",
  "key34": "5YqSpSnzkzZLHh5uvMfBwSoks2FGcNGiFU3C83bYYcqtXtZdT5Ene95JFiHYDo1NzyZGJZDuya4MYBGxGKBGdRTS",
  "key35": "4KSyPJ3TBPRAL3v67zKffY82aKg2dmzfRk5HVRvDAw1qi68MMDjpQv3stxEhxjFuTMEEw69u7xNgZMcWuhryhDS6",
  "key36": "2Dz34rdq59gcGHNdsa5nz628fN7YQNUaruwyw92AR5XGDRDN978ioGtXHibhfZnjuFsHoZ8ZtcHB8nn6ahEnSYQT"
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
