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
    "2K2w4QwngHWWcmQa81fMFhiwpiwnBLywgJS11NWpFjKk35BUyBWUzFmyLza7s3AdMUiUKpm4AQibbQ7RDttgimyU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jZZtLVtnjSh7QKpPdd3CNZLJGsYcL2D1jUZvgGZAvETqRNNHB1eddEvhLEd8GeMzme673Dom19bHDoTjD8jfs34",
  "key1": "4ZVbaVrb8igUPHA8Tz9T9fXqPEd8C8KPGYinvCiGa37DWBjEawQpMUsjqEFXbToFjWaXh7UytxW4VTNsc9wnaG6g",
  "key2": "2kJqqgSqKu98k8N4e5vWhwfZ2pfV2UPa1X3Zf6ANwXtAT88yn26TJFEA5qga6x3GhPJYbR25aLrh71hRX1fJQqVp",
  "key3": "jyh7xmQHWkWLYTjJGCCsfGWTih3Gp1wTg6CkRQtWCxpR3oZv6aVu1hsT39UHVsSaJYeobD1Pj7XrUgULUYzm8Pz",
  "key4": "33jegivPRhZZNmXYtKrw25pAf1w7URb6dvNPXUg8e4a7zZyCnLkCR9C9dBy6z75B2wSJxxt2Srz5TkXDfnn5qqjR",
  "key5": "5TKNNekbfbLjhzTxxGX8VAs3GZMXh4BbodsATCXwLcSy9ZAc4mfyufTBsBtexaUp6TYGSaxifbLDD4v9ukPLtQvN",
  "key6": "2A4HBAC4DLVzebHebvWS6ueuAbQ9QJPDw5BKe1GoxmGQpbEPZFsWf1cqjzrUyXAVSJzKANDZXWQfwG6YCgNU7Ens",
  "key7": "3udD9CoaxZUuL5GW3ghDSiz9BDffZzyQgazGVNy6vvTgDepovx9XDjUtbHRbi34o43iCuggCtdMjG7PVhkgi6v4H",
  "key8": "2VcQ46VcBtbqyXNVKyeGZ2MNzCsnW6WtsNqyBe7GAntv5LEKTvp2XVSnbhEvi76eq77f4ZgMUBcvfLbt2HkzJQTs",
  "key9": "4bFGRvNVPRauAJsvjXrxfM5m4QEgDpHNTywF9vEZkn4FBonQGytzcNrekZbQY9koGqZiAgA8etbNscQ45xFzGJL8",
  "key10": "3qf1P8LER3LqXDx2nnLADzno1JMZe8bSnjxHrikfw4Pq8MjxTYGxPUTVY2xjrkGx7qF3JwmSEJBT7JX6fHSS85wv",
  "key11": "5jasKPt7MZRstDTGTk9JxVLYmVpSjgZvx4f1G4k5Vzc9Z2FzqvXkpNYF7XxxxUEk1NustcizzqapAqU7WjaZe2pr",
  "key12": "5Qcv9vRKFeUAtHGcuMf3FvH3Hc6qxJtNZVBAS68qmV4mGvtaUBT6CKiAfAyPJNavM9CN7V1Sc934Cnq2aNMobJdg",
  "key13": "4QemyG75pBR5Y5A73M9PtR8w1Cdsq5zoXv2NdP2Hy4GabdFiuDkZrkBjmf4XAmmPziJxWpssCtjheseWDP6c3Ufj",
  "key14": "2QmFc6WXwwW7doUbuVRLjdsF8GcrsXrL2xopLUxZyTEbBTYAeQ4DqzNhTrw6atktr1nmfnVodo6HnRzLrPuHsDeR",
  "key15": "3GzCTLrmc3qYtjnWckLNaB8BKcioG1sLbNv5PUSV5CWoMzUAfnU1SDwojHFTtgLzoeCfTt9CqykZ97omwnEigKqN",
  "key16": "2JhbSNyTW9t6y965H5YorF1kX3qpXHEDiknLgT6UKHtwj2cmmtYWRZd4j6bPN1njKFWQ5AQmyqGySsSQEMPo6JrT",
  "key17": "Uypcd4Ks9eS4PpJCyUFG1jrL8gQkqHWkj9KvAwHQU1L6Hfh3tiKf7ZMHLUfb4br5PY67YsrHMvxsXRH1mSVUBdm",
  "key18": "vbchM7xPaBSdzUTV2hFu5eHpy8FKNy6nnR6QySaUdJ2LHmchBmQEnqgWf2dgAKQRtMdzBFhtGFZCvHRor5vt65P",
  "key19": "cESvWw7sUyx7b6UkJs4QMAFL9d8upcs9XoQcZBrGocLuE9QmtGg7ZUh1vafSPyJu93JLVcLShG8meuAHaybeVuh",
  "key20": "5oBPcxodZNpXQiUDKzcohSpomgk17HsR3pTbbECCpHHy9CBuJtWeh1d6ewBA6FhLiHgCFxwYqDR4pBDvYAZAGMzW",
  "key21": "5sfYSFQoGLxCyW6BR9NXZt9GwJYNNriE1tDjM7LF22CuqLqRXJaF4qJ9UqcAcvm9cs1Nh3FxhJmUAicHy8ZXBJfR",
  "key22": "2LA6814Cuw7gTgyvonEbCPvtMTgGQCAGX5RWdo22gVob6KLoisHsHVf231txVin9TCQYro6D9y1tnRs6DQMB346w",
  "key23": "RPaks1hhyjrfdNfkZcVk9JXvTX9ACQKvoU8r3o7DKd8imm7fuWLLUFotWMdQTxtZ5HEVXZnNTzuFChP9yJpKRkC",
  "key24": "4QFeT91mYniDrCfFxubRmVkGdupPqq14RK8uuz5YePCoinzsPSMbDjZT1UjK9YP5AGYmaMZyMU7mPP7knXbisnRZ",
  "key25": "3ddYpEndz3tXoK2XKkA6aB2pvZmJ3KvQNSNTsLJTEmTesRt3mfahTQEvxozuS1HXwPsch1eAfjAH3wQjLtVqRAxW",
  "key26": "3rfDgzvaJ5cCZzZ9yy4BmEDQVjiCMEZFeDFGW2on8FbDsCfNNmLdpYXnyo2Yxh3zpD53iPTqBMVZrbVsceiGdAM2",
  "key27": "2PJpQCxHnZjQKQkmTyWJ32m7jPFPUahyEdufjieAFz5QDh81ohC4AYfdSAe5MuK8v8hqAoKtxRapLy2XGsWAvLYN",
  "key28": "5Sh9KQjD4Te23yk7ZcPH5qpoFegt7cxTy5jh7Te3R8u2FUGoBv9JriJ6F2ZNa9V1zHKqWuReVhrqVJ2xHfBMGAsq",
  "key29": "2GhrUhnurHuADC2rvusXShcCpek4ykJVsiEZFaamFmTh9ZCvrZ65fV3WGEgx6GjRJ7Ke7gpEnpqhYqiU7eoJqZLA",
  "key30": "2253TGhwCMopCkFTNPxQK1yvhYXAB8ccw9ieJ5WkerwsuiQHLjMz1Y4cyfmTMAa4iMNDNL7aMxk8o1tTCR2ug3fS",
  "key31": "4tqSXF1fnEBKB5piayWXxdGEtWHyEaW7i4GPMME4Cuh1KDq6ZvEk9adqkR9EkQwtSq1M2DTkk5faNu4rZXeH7rUr"
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
