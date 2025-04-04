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
    "5R8WjBfSigi1XvyBCDK7HSPm9LtzaVn5JtM5gmEQEntJJW5HzrffpgqCTqDtWDJBir4QMowUyGEvMjDgo8jVmu2m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tziMCqhyy8z8yiZdNXWfwD7nVGrkaqRojomHJMc5hhh7tAXUzZfVrGCngg7meuQewQEqgHzN2ACmsqTZNHQQcze",
  "key1": "3wcjbxUhn3yoGMbWLE9EZnzm98axKF9xqRPwZHgMa1N6NTxGVdG5GAVDggJNqhd3tbWL26bVp8Q3yp8AkHJH6i6Z",
  "key2": "459HiZqXmQr21oVUtG3YETonYXxeyA5xLsjJcL65jBWk166Lo3jNfkWjXVua5pNiDbWHFoE24pU1XeB3eK4CrHAa",
  "key3": "bu5ui6fNcnpBwifkU44LegCkABAonQmDkYgiph4YuVNiQX8yAjT76SXASBVa1ZhGVmKvARjEnuvagUpK3KeoGvo",
  "key4": "4gF7gTkK7Dz9X9uMcCp4hL27FFMw6PkuQjYDqBHSr1f4xzSo75nJSD6F57XgEqvYyEA3GxNVW7rHwrfEjbiKU5ZX",
  "key5": "3NGWaNhaY9pDgACVytMAQFVzP7FwdZYSmyKbytytiuXFDrNpN3Tqb73XqL54Yrkib8JLqDtakdER5HXbgqvZ8wou",
  "key6": "2zYRPo7HSEqnPDYYbHScvBASt8TA1RTnXzFyxhwopWoZddDvTBFxpwS7eS493EENNiWE1xGAkq4EWYDr35vs9URH",
  "key7": "T6YnksXVd1qz6NVau8hvnYcaX5qJsLjDAEAjgmcAUMAYdbVTa1pAbLSwcsCYAxaipVYxqXaGEwTeTNoyM4pRbri",
  "key8": "HyQNXJ2SAzJkC32kEdUrxLgCGxDQh6CfwpYBBiwnvBNnG5FhgdDZo9zM7Vd6Gop3FTS1Upgw2sAW2y4mNRRxqnZ",
  "key9": "5QzPG8ntoy2SJ9JYKHHKW6Uo2E1StakxcwNfMkRcpwMfBMrJT1rhGrb3XREmH9SY7AjReyajoLv3jwrSPFHch67b",
  "key10": "4ThrwTUSaEZ9mrVKgcqtR2bRfp6jbugvFux2aDjMxbt9iwCu8jqki1eWVofVpfg6qJ4FjVS1dLe4Mj6foyjKX6Wm",
  "key11": "K765hXgwDGTKAxicDR8w3XDMZtDvMWDxwC49WeHpNnXsaSEdreR2uKZJh1Gi24MixH5QhEGMFzs5qwQL5ezf4CG",
  "key12": "XyLhkZTpdREsgyMfS41mBfzeW3Mwd8EK5NNtxpzRiVBZGCrokwP4N896ZdgYTQGqacbibQ6hkd8ynHXgoYkrHE4",
  "key13": "5QYLYqmuioGeiQDoxakmGkruVHEAzRr17k3jJFMRAyhPvJLJPdoNNmKV8n1FHsggBGY2FiYev9AtpPiZxS6GyefV",
  "key14": "3n1zmjwYZRtt8CXGXgCGosgQNAyih5SgoAKggsyy42mHu2BN8ZdkgMvhvJ924Beia2yYvKgEWQ79d7P8MwP3DUyY",
  "key15": "67r6GZQguEy8w73dJ6cWVkpkd9vL9YG6gygSw2G5RcXmHXAC6Z8hJtk95PVMpEwQSauynCPjd6DamPJVtUNmzDSo",
  "key16": "3cSgouQMhLKGT4PQGjqAyeUjtyBvzqkZrFrUncCKrvDRUvgLUeGw95FkfYiy5rKReLrgKNGZW3Y8AvFbivTjkTti",
  "key17": "4nLTmeKFyPmYS7xbFUjRehA3HnJP8NYDxyJ7CdywzgoqiRE48GEQZFNnBAV5pEDLuFHdHQDDFyg2mS8VVUzbrdey",
  "key18": "nwXwsWtePCLCC3LotRU96S2NR5sHvm6qKZ8BTkpR2vwaBXA6bqoHpASe5k4AmMGfEtN2uHNxN2GELFEBDmw1nuJ",
  "key19": "iCJJ96cjQdg1WDu1tVT8BvVWfcdguL1gdydsZQFmCY8d33Eo5jBBqZokMrjbZixLr6XFr6DVRhu9vsMxYHPEXVy",
  "key20": "3KFQHSmZayGTHvUeqvabpb74DvoHnnZoLjrVqCVppodGi5u33ZXCTFXwKXizMaa9P18N2wA3ettyh3BWPZKfgJaX",
  "key21": "4SHAN8kjEv5BATwbd4EZ1huf7pDfWKhkuKE7ZxZiBYt7DtG6rN9ZsMKSfXsL2r7uhiiU2rakHMrahSCobsr7WrW",
  "key22": "49sXnjdU7qMhAeoQcb3YvhoiqyZzPmvSrKSoWnHb39zB1fyKsjPdvZsDCPBMS9AKhm5YAGb6Y9sBkdCqsmcB6npN",
  "key23": "2GAviCzZQMAAmHd5EpaEDziKq4uPNzzpsh9jtMiDaK19wgjePM5dcyYKHv3KiSyn62D74WD8oPi6anYU67ERUxFZ",
  "key24": "CgKpDTc5ex3JhxvFhyfPgiNqFueHsaCMbmcY6Quy9sbWTvUhp5AVjxtk1R5Xs4yURg2B5cEpV2YtKxFJA9fR3vD",
  "key25": "3nyr6HnrnLJ77igSVZQ8suDdd62D5feCC3Psm3kKjeUcgv75tw7xzRxYg8XM16FgXzcyMhkmbHzgZ4w4MQ1tFtEs",
  "key26": "5q6P9FxSsYYQ5oYm3X5NfqZne3DB2Z8fTsVu5eVndHu6nLiBedmiW2Vwx8SCKuiBM2Qapk7pSqp5WABDv6amCHH3",
  "key27": "2f7YhYJh5eVSKGnqzNCrE4ru5HSo4ym8rNT1iM3KSg8Pakk2CKz9yxvHvWDWrqQYmXL246se1cuZbaUsmKXvuXag",
  "key28": "2MYR1WEfDPYJuyEPNzkWrtxRepoSkW2xhzMtvA8jJHzVGUrGUo4QjDUCDRqHXGUpGj91A7Sg3t4nnrbQr8qT3gaK",
  "key29": "4FsGSev7uhxdF1Jd3h5J7PAMmmPQo582jKYEpXZqw46DkhvzKb2abqME3UgzQk2xafcFh4rTKSD5AsXZokkT4ZQe",
  "key30": "3ZkzE19jWTrS9WK9mD9L4SDxWpfARizcd4c1N5RtVgK51fZW2KNbRwz8s6iotPsExz3ZtokddtRJ7jMGSkNAYs73",
  "key31": "4ST3fiiZgUU93s6rso97X9vj7bcxi6Pz1LmySxZxjeDJMUoinc6Wn23jAju6iuXKJodg2CioJCSWZ9GT7qarZtPe",
  "key32": "3La2my5P2Sd7CZSipDrxaxdsC5XSAHe7Dhyw9Nu56tDgbDFpvoivELCzU2eDTXiQnnNjUZ6csPTdVwQUxgdGiSmt",
  "key33": "3vpygGWJCr2csio57bYwBuTrPX9DPH8onc18RHmNY9tiBzkNeso5x5877rd2ueucQzmo6uH9VZEH64p1hnRqUz8Y",
  "key34": "3NehJQaW2f752VNL4fyZjBFLrzUhWv6cMwHx9NJ2RLii1rr2SR5wgwUKGJW2LXtp9jrq9zpxEvnfArsHDexRW7EN",
  "key35": "5o68YbHKAdpmxtHhYm797mkU5zoNAbruBsT4AjTitpi81nCH6TiEfnEAVBWQYs4KbpJ8spnMeUgdCTUhUqBsY9e8",
  "key36": "65z8yX9S9Avf9vwmv2hZZaJUHmLtbceJc8doE1NdX62Ly5hKoVyQcZaRXPABKvZK9djAdhv7Enq4Yh9wQdSnH2xG",
  "key37": "2hxSwdmnLQutaFR5fH3dCy7QdudJ4rJhV1n6amLp5xP1YPAYfGZbNgYmemAbHv25QwN4ky3KKZ5sm2Wq9Xqq7hT4",
  "key38": "3vBKPubZZRLS33mn73j6XMU4r7ZvsKWeY3Hzis1gF9nVt1PJtw4jqA1UxwcKZkdBWoLBRmCeshFd8WJbFs3DTBj2",
  "key39": "59sdBFwG7QF39oYDz1CnZXzj5GBYT4VJvRp2r15p2MG6D9hhPy1UthXMWqENhRLbLvuYCKcsdpCo1BoFFp8eLWf6",
  "key40": "4q7MgLi4nZkzeXfkkh9bhGPTZbhQQ8txwM3nn46Uhx4FFE56UD6CaDyd7DVGKaXUk9dx5wxAAqug1gB4BASufBD9",
  "key41": "22KH3kGPwVK9Ja7qCAa8CaNVnZowCu5Jd779RZxxFUFqyKyosXPF2oyQwXw4bacBJLU9AZejuz7fHDvcnH92pwYD",
  "key42": "4EPWazhWc7CqkwC5Uwjhstda2z37QTrZuT8MmdaNtm44tELtWXXYqgzNp2R92eJBGtiDi887KpUrZqvM2Cf6KT6b"
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
