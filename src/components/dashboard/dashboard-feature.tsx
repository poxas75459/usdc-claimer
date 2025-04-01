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
    "31hpFAXWftNJ7u3dNHnigycsSdVeX4AhLJqXbTnm6T9KsoPLo1z6gTJHB9RXZaRjBw54yUACbycmqH2ivz7Zw5rw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LKVsQxmbfbg6gnzzA7Z4hJch3Jc2SDK5DtnDV6QnZzuV4X6HPJ1YYQBofVSpyjt3pvSpYQfEW9wASUKLPKLCZ1s",
  "key1": "5Qjzg5K9GKZtcRva9Ui1m6knsvSVPAUrsSpez3PNZsRUxvHB9dxuTC8FXqKLL2kEbP8VYE6iuVPBZoyW6fa9Cfmk",
  "key2": "5wPNzwmVP3hq5gpg1AAc9TFrH1sWqupLwfjyi4HcF8dhpaQAAwDUMamkDFcjGZ2mdSa9qvm98Z1nzZ5vvhnhQ5dX",
  "key3": "5cq53CcbuTZp36RsknXWSM24FYzP2atj5k3mqXRF3C9G8iHxbQbqeBzUkQq4gnGkK8XHSvtktTZXC77euwFLc8wu",
  "key4": "4CKBPQ5VAjT3z4JmCt128FSGYGD4PYF2C8hMnAoKC2YusWMEyQRjLZKSkDUMPK9B8mFijv2Bp6cz46uqWkDvTuL6",
  "key5": "2mmVrWDrVNH2KK7EdJ8VnsUARtmfcHxEvKeR1tsnmqcnHZ3qjzWsbnhkQ4egp7MZasCKVgiz8S8sbBDidATk35zn",
  "key6": "5yYdT1Rzncu55jHFL5t1x7PBsKnNJe5ADhoxiGxiATSg5tR5fWSRnzaSzvgV55Dume5c26EBjjucRJHwyZ5YvAdS",
  "key7": "5q23khk2JxwLCHVzzeN6TnRKu7dC7QqtW9AceGMyYyuLDexkWYHd1i5v8LSSr7dChJ8c3uiyCsrS9BCUFs9EwRFK",
  "key8": "C7w9YTYN783d1mVLivPXLUBgBJTxr1qWksfePBxKTPNZ2uhw2cF7X21gqF5jk669B8xgcbhUatnHUn6eVMZMpK1",
  "key9": "xvRKXGWKkHWpqSW6Detm2QBiAgNnqURtSdjMe6b8EbWMReQCM8GLcBMQeunMY1EDnfxT7ov4S5NDQWaucev71Ku",
  "key10": "6peXhGe3st8dxsdfi7zBJjVqyFYVCy5C9NggcRivFMFdZbNzbc5AWHVboo4BYJqJL3bMP9Y2pXA5oSP5YqGJRdN",
  "key11": "WJ5GstEzBPrFJpWygvBZDeNnJYJFuwc8eUaKqCh2sfdhYGsdi3Z7GWdDfzoYMbNWEexZZjVMdMXjbJGS6MaDto1",
  "key12": "5LjAay7Q8SyNQ6hTfZKcoSQdaUMt83GNhHfnQd9okVcnonEt9oRCX2mkWhCw8ykcgzCS5QEpwxwEbA9KbEXPN1nM",
  "key13": "23jJaBXEYaeCHtRCAo9Fzy7X8Qg64Tj41xfRnfKSE8UZQ597d1SXqP87p8X7BHuoWQBsG83snajfSsgjCySZ7ujh",
  "key14": "Vw4BCz7YrsrXw1MtJWNpbc9ZKyvzfFvf34iRL9zhmwGyajF7ggLwExZV3ipjpRhvQET7gGa2DfkLjgu113bFck8",
  "key15": "5FyWJeR2coXiF6wshh71HP2hBrMdWAMLaZBZyoAHeQLmY7P6Zx3yv6GXeUMRsTLjG7RdNZqjYMn7JCRE3A4jW5jn",
  "key16": "65EotyUdStH8Q6txaA7dmAyqae5xtyxUtzfTYEdpLdX165eHiBh9igewSMLzDAEmz4T4iGK4N3iRBNnjcb3u4Lac",
  "key17": "4eduHwB2ou2HFWy22ncgGLYrGh5VQCsukTw4zHhUb112d72jDvRcp6dvnhDQDw1pMy2wrHaTPY5mxh48f4P8y8Tf",
  "key18": "DHridLWum9GXn4yhGyAEa8EM1AfrjRdFszsb9MbUGz18jNf22qqzdYFwU7a9rSVn2D5zYnX9wdBSNdxYNC3Fovr",
  "key19": "kS3bxgCXZnU7gq2Pkc6mcTbSCiVj1CxapL7C4jiZnzV79S1fuacR2oNgCDXFoYLLKH2CfQ2MBfQkNe7ajLSFudE",
  "key20": "3qep4s3z4PnHFfBshpWHGxoPmQAM3aNfq79LrY9yr9ywHPeTArCi5axYUgxLQFys5fCic6u2V8NTJDvm2zcnHU5G",
  "key21": "3CRfgiHS3Dpv7otQR4afbAHZWhxtszpzSFyrg7s8xjt53mpxLTkcEvfScge2MJa9izYVVT5G24JatMaR6YZfohmD",
  "key22": "5fEBYoLAvx54yortoQSNLHBVgwPd72RSe5Yb3onhdZz1SFKxtwwHXGrTAWupzbt66ULCMw4PCCBK2EGwpiaxPVop",
  "key23": "3Z22YjXYLUncv9jYEYm43nXCtc3PL3iwARcGBDuUBYFgNMzqHU8LfcabkB7q2nnnMU9REMu91zQomwssSSWqjqMK",
  "key24": "4G8hYvxzwTsKboS6WJpticXLGrX1nKWcYHsgoyUA85RBQ43PmMpqxNpUXSnvcXDnCo1mW7syEJH2XnN16BvqyapE",
  "key25": "2p6chiP3HGozL45ErQTMMAFLwxHzp4ZFV3b31svPeYV3bU3VDCciTEGKLguz8WcMKYURamdvjd5D2eFDLzUfeYex",
  "key26": "5AStsPNBMKMXbEGwbPLxZtUVS7UhKyzxnrTL3tSNys5k8baAmSjYLG3M29fEkackeod6KnU4tJ1G61ku3JAqiNpH",
  "key27": "4Mo1BuyCrmhHazVUEnAf9a3ypcWaBG3tusjrd2BKiMFGzsn3PdqKnvHGAZsubYiyutT9ujooZAFgdyNugjoxawVF",
  "key28": "9S3kZYYfRHGGyJg2UvGP2YCfdHP6msPLKU5jm2rLw2o7xxSd3SUp3fUbA6GpKjEE4a3jyitqugP6gWxFW6yhQAW",
  "key29": "3oB7ufL6kbNj8T1VC6QSRDYPsQPHEWPzSvmduTd6qaFN74YvaMGFuyJHf6Y6Wc15MaFVMLwcGCaYoG2xvHnHxFxx",
  "key30": "28ZtrtHqK5YTuCqK92MhUKPiLKm3ht2ksapf5oufiTycAYLRuZ1akfPNQGMupiVi9JfvwTLtX5n9iZCJU8MW6a9X",
  "key31": "4JSG6Q4sZ44KDSufCbffprxEwLQb4VupGynGc6okpdJv1rvySdNBgmJZcgTcmuoY8CrN7kkAiGDmjF4Nxhdm2TM",
  "key32": "5tMAvFkGnfXvmVSMncWYnugffeeS5WiLcUkNjo7rbguS1UevYn6Hx7cnFYqYuKT8nLVmoDSoVbztsf7tfNEeFCiv",
  "key33": "3bhy7LEU8qreuV3jt3PofXbxoQSmSMB4tAbjWfysoR8wDd5egkXBSq4JyvdTA8NHzHTprbVDPmAJpZYt4Lv9HgSk",
  "key34": "65DCxZqPzN3g7orXgiWL3p7xW1nYAujt9qQcx8ebkBhSWoqMhxXKU1iREM5kpTCWbQqy8XBPUzKKjBxvaYU4gcFs",
  "key35": "62YhTuCit98SBFX8Y4VSMsvHGLdHXPNxT7nUaGgRKJREnnxA91v7xfas1itmUijjUWaCj4RVn1AvKYDP7DcX9phJ",
  "key36": "2CooW7C52hjDiSP64B1ZvyWDeh9uykfFBrBWNLYgS1Ud4TNP4a312Y79a5QoMpMmc2J3GPDj83cJL16VLZvoSF62"
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
