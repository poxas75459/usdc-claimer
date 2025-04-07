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
    "5CvCK5s1ztMWGvQprfHZXH7Kh3qMXkkPRzXsDuw5EN6CD2Krm4jDEi6ES6CNcRgHzpvFrdZqQxXKkMwuwWvELcP4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KCowppAW8vvSm1oQEctcJfZVxuoHGrThkL8qTECyeeTPPLL6739qDuNunfde42j7Rp4xEiJVCVTykrY4GWwS144",
  "key1": "2ZfLg9dSYHo27JLCgBFSm9j1aeYKs4KAAHisp3wWFTjEoiugE9ErzdzkVDCNG4iDLYogvg6bVewJnDvF9DFgSTf1",
  "key2": "2VCMkWaN23HGfobxQNnFWLzpV1aSTSks4zJTHNhiQnaUKjNnBKhVwut4n6PGrihtH9qzKUXVZJDfGnHJVcQ8D7BE",
  "key3": "3npeDs1rKfLbcrWjEeJN3iWxsLHnvWbSM238jfTeRigrv4gQ2FmGBGtxaftEWHTo3bVutnNzZcv382V8x7wso2of",
  "key4": "2RsQPjVnEpXr9fne9JkgcvuCrM5CcxhmjmYjDAeWM8Me5DEJgFQAf4BQCb2vXyAdPk1SHCGK8qWg17c8DMxsmaH",
  "key5": "24ZUKpiZr6R6wocuTzyNax3EsjhxRd9VR6PKZKg1AnDTkfLkvvzRq6dcqhRwFegVxbCVtS89AHqMUkZAUNqtsQgX",
  "key6": "5iJnUGqasxdy9Gdb16ZZG5dgS2paLiVS7Bx5YHNGHx5h2SXNExvWc5fAWXA1SUEyMHwhgqHRZz7V6G4FjUh7imGM",
  "key7": "4EcwyH9hcWAxxnbbWW65DcHMSb2gEQntyFpkw2CLTrBptJnRsA6FL1HWEqAS6o1Dz9nPJqdxzgbEAP5h2czJVgsP",
  "key8": "5w778ixEf9xrhqcYJ2HX8iKEn69DcdJQESuM4GvNTkpjGaoHPhkj2rWFKHiBkRuSJyMJmbes7jjGoK41UPVpYc3s",
  "key9": "3tWsBNDW8EdTqzomTxHNGufQgoK6kbsT169yjaDauC5NMe9X2MhWmoJdbcM8r59q8GYTB2YoHG4x9uh9B68r18yr",
  "key10": "KD6A959Mx7g87SN6WRbYi6fYg8sJjy2ubn6ZpZiuUWRGrgfVhSRiU7Dj8ecvc6zLGeMai2AA7RjpDKcdKTUnW5X",
  "key11": "5z348eZ5KdU4o29JcW4LYLx4L7Nn9cj9ovUtKYyUYQqTj6PJ9A3Q9K7mXVBWR8AcZSgkZjqD8R7mSmZoRxC5ooki",
  "key12": "3MyWA7SA3SREqDQZiqmSgBUwUKZ71epnU7ftNsw1BRF5BiUk1wjgEHrNFTEEypYL2RRsC5mb5Ltx54PM3UuyQzoA",
  "key13": "21pB6DzfHkLHJSLtf2xUhQHN8vc22Ewt9cCpJoXeSUppdhbMdNtjMero7mGTQY5SUCPdd2Gwk49o3VhH2wACuYhG",
  "key14": "3HwGK8UzTTNYuPgbYhLoDp1rmVev5HAaEpWF5U2DCnNhXJWE6ZcrAsQLj1rV3GgnHKcdQxNEEGYMPpmbYdstpjX",
  "key15": "32QrtZj2saN68ZBM9TmZWRkrGzRCJ2g9hj9QtZkxni4PiXgKpdKwbiVikcwG5SmVqf1VE7iScgHwVvNWeumbUmvX",
  "key16": "wcHbgJCoP5cFTLrVeXjgvEmHR2GmhadkryndBbVCJ7PGfSmccRqirmqDnvgeK6pBDxWdFd1oKbovDLuX19MWdwy",
  "key17": "5kzPZ8N65QR7HqF5i2RC4q5vPZivKVKgncQ8fjZxjXGXZTWbr8FokWF25Er8w8zBzjccdzQurgNgLNoFeT4kHCpZ",
  "key18": "4cUkr5SL8R7aGmwC3RarB3xB8wEg3NxRQW2SvwpefnbMvac6m9hZ6aWFNxaRP3Cu9ZgE96RQYkqL5Ej886obadAe",
  "key19": "5fFqPNmD3kWNUbuUFVBKiP972t191JXzfQEpR5k6Lhj1qnoLNf5x6Pcv22rMr4UvoaJZSQgLvFcg5KifdPUeVALx",
  "key20": "5FdeVA5N6Qqv3aRVoTyoEmzCnCr5AZo2BYJzKYDpuwfhKuydDD71wKXWxVwigwaykQUqhycYP2Cq5RTVbW6gTyhJ",
  "key21": "2etPZjddaVUh5xhycm4tsGfVMPXcvqkafvvdM7tS4UwBpvoNtEigyaSDQVKJ8oX5pKKEZQR4QUrYe7b3etbtyKsu",
  "key22": "5b75aj5zDUPW7rXJN4C4p361STFN7ubssEybtr2hnPvaSVrWdfLLQDgFyJB8YrvyxEu8Fsa4ygvLNrSWXwBKq5BB",
  "key23": "W4fVkd3Rd6ebnT4GeKe8Mu3ZyQtMyXvg9P7dzCNWATWvEY2LnVsyyMtXVfUqYRwq4HeKQq7S6PTkqaY1C9ZptYd",
  "key24": "4ZrVxENaeQFkCHS8KeZBLBRqyJgSEUQ3DL4cquFsBqPnEjRDGWgc57gpuaJqvj74dnfPootYmt27Vgetr2XQ8RFp",
  "key25": "3sN7sf6LQoxkNFuF2entCUJXFU1jm881ynsoTiR4NwZbjZc1R2k9iWCB3fhpKt7VHckCZ3DwhCTyrYUaWfMwcXEU",
  "key26": "59mtffe8pLFcgQfK9ohy7YuR3JPmkq7sxA23kWiDuBzZNmhmrGJQYn5r3f87aGLa5Cmpr4Xw7T4vBB1hJ7mDN7iV",
  "key27": "5UXUSiShn9MpJKE5zG1T9kGMGzpbYyhtGAH5mP3W8jD85SE5WrkXwJWmCy3mP46WERxqDUdz4xRe62rDrzsxevon",
  "key28": "aT6aQasop8TpUfEnMSxk5w7QcWb6aQV6XmniGRQZcdwdTuz2BnekXAwzE8cfNx5TvTidZ8XsB9AqCtVtNDQryuZ",
  "key29": "3w5bJnZPLcC42ipo255rsCFcfPcDssDj1ZBjh836DEDgYJGmTDkHxS5SFX1SrT3BLV3CZovaUQerf3DUGUgd5rBe",
  "key30": "365xx5aT9V7GHN3ZQEYMSSC1Aj3YWqTXHdWQJ1EbNfD2KYRW29MDiJYtu53WZ9SHYCFAeeh9MzUQ8QjCA3gwNdGg",
  "key31": "3wfqxZo9NmtuYHYe82HjArbDpxaxS5dAu6skuXMBmWjTZ8a7X4Ub2s1xxXyD7AtH9P5kfRmzN4nKpNTfafsCVFyD",
  "key32": "55WP4NZfLeZX2GeAuN4hvktZdPQksFg71yR2ctwKyo8gYPJhSS7A9jQmVWBvRgkstbr42afHi6ocZseMY9P5bNRX",
  "key33": "rbfnnH7ARYCE84wWr9c7kFhSZ5hAFj5nYBVVCbZMim9bcHksoqxnmxLEZ8g2DMofQYoKqY6U1xDr6odPL8fc4VS",
  "key34": "Jg2y3Yt6HPPjxHyaMidy9KF3XMq3dMw7cLmgGBJfKMn93PsL5nRnwdgTqRsj98qCmg1ypEWbb79BB7cdfeo43Gv",
  "key35": "4oZLBajesyUqqrgZaSEzNGMAyiZkPcpHNi5wBJHfBDfg51AD6bbFDBgvMK9dcmSdwgc3bD5ja9FzQ12hrMRwMNmc",
  "key36": "4H6YKySjBJc2XHqfok8PdNWpvYYKDb9kiyxqD4pfLqrQWsQY6sbX461XfUM2E2aUsu6WzJNWGCN56N46hnw5yTcY",
  "key37": "3kcPMEFzpYuj1bkaVu1c6HfmW3V5ipHJjMdw4FUdb44T6g4WTaPm6WrDYYN5TvLZ6c8rxYig3rpQHAwDAJk67uHy",
  "key38": "5DLHn3ZXUEeeEB5he7hzRopHBdLsrXjwXAFdKDERGVfwrGx7YNw9vQqGyV7hsGizJEwFFtJe6RRRToLeqbtwCaTa",
  "key39": "2Rfs9jj2C5pySJRiFMPK5ENes6vUJj5TAf7dTWK57G1RCdWP5kb3WqFY5vWuBbkBGj824rAu4r1Ft3wdyZY51gCC",
  "key40": "nqRQv3X2R1ypkZSADaPX36zWYkBMfAGtpmQB1XoajuGHfvxNyrv21qh888ocWzJWuLduM4uSPkVkbAetTeVcFXk",
  "key41": "3PBpuLnp348iJamPAHwqLGkNhNPf4kv79wGbeav2dKRC1AwQJntE16udmBxDmNqpKZvzgCkBH6t9nRJHpHmf5LyP",
  "key42": "13T5UFxsA9CWWyEfkFrdc2qKmj9sNHxrigpBScC2hWwpVrzhuCg5vsQNYGXdZ4zwpBcW3L8mYtzrXtTC4jNeEX1",
  "key43": "3L8FHKK7kv96K5zbHY4XBanx8ePzGpDtMbFuJVZLkrjqE1Fz8uswHxWZpKDBuT7jDKYVWRDceA1eXuzq6rRNV4x9"
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
