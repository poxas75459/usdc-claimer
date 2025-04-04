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
    "3uSijGN1mJrmNMmm8VTm35vQ1BdRvXwmHrMhosdZPVJkRc5bdzCJ7WrUbPPuGmLGGtZMMBfJCN8vA1vzb8ByEUZz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qEjjH33us695MUJTUg5Ft4o6PiSjrqGP42Lh9Ha8mUrUvN6ESYcqmMZzKcRwA244W2ANtrLqpE4JV85yp3XjRd9",
  "key1": "i3X1cpR5PaCnfRStqfqcaCinvBDc9LVQ5t5FX7wiu8B1iFyEyp74BUE1iThmBgz2L1hnj6cuYsnGQVNsjmg4DQB",
  "key2": "3XZHjrnz25iyuA5SzjvJPkCss4QVgDrsMbx8p7TwSoYnLteySuwm8erGsy5oaKQGCsYsbNeK3TTqccPLJA93KFnm",
  "key3": "2rGmxc8GhtShB6nwr9qGANAM2NCQ9EWGNpyDPza6pRAi8Xk52MjTCCh4vFviwgTzCMPAxUH4VUpRUbaMoy1vrnUP",
  "key4": "J5LfUgMo4efqXnD5fgrqmJ5LVnULSo1RswoXn7wSsQf1zioM9rQm7yUkBAGgWPdSLMZYvTozG53nsdmKXKRAAc6",
  "key5": "4AKJXMiW3UpZ5945oRR5UfhqWkW1bLufg5nTzfdcp1SnWCfJWgB2S7pRQzTRXtACTW4hojimgvHTCnWGvfqQ432H",
  "key6": "61xtMSqaqse2GBLfv2bgtQrZXMd6kPHsVHELJbUQLcRxYQ4JJ7Dk9vSa8CUzvuGz7sNbyopvKz5cprVseuY1gUuX",
  "key7": "4EGUJCtiqM6R2RHn4Ai8BZTkCLWsbjJUvcUwbvrNkRZyY52ifVhEhiQiaJD64mnZrVn26xZcozJmer16j6RUBNdE",
  "key8": "2xcNprHtf6TYrBBMkZRwAS1h4FuarPVuSQ7zaystVoPGUSNzxbTXNCQ7FrcZV6KXBsVP5nirmDXV13LbiMeL2yzh",
  "key9": "61DikHyFkcGHyHL1s4LBZQnpuCU7Ek69Y32U5WqmNeRtYimVznU1w5RJYfY8F1BnSa2quv6M4Z8gX64HMEFBNd4N",
  "key10": "3q1Hdqez2gGHfhhZJq5ZhDFLdhuLFaNCR9nx2mEZ2dRweECyickHC8giwg84gbKwyGD4zhSfxXhJWsGJavntiWDg",
  "key11": "5AfPZjWEE7eoX8WVdsEvio1xhCULwPWmYbL2J6P7VE4gZhEhoL64TupaBug423gEJ3SCgoM2D3ZTk8emuVU4hgtv",
  "key12": "UkRPaagpX7u6BM4F7DGqh5PumX8y8m7g1NkKFoKTrho8jQC2qEEcQRPLgA1uUjKqG6dFdkaMuLeitqnYy6e5HAL",
  "key13": "4schP6vnnXRuzch4ETUTLivqRsEDX7S48RsUAVbQUXaWdFwiqByCtNVDWRzncvSCEcc36k5UtF4Da3QKLuvnyfMc",
  "key14": "2pRLfEx1F8W5dwoYU88U6GSryBCFuY7g4CWx78etSdcyU2UmUAWyVcvcQAvUgxmtfSWm1QVnvJq2gJ6N99vGBz95",
  "key15": "2kfJWJFeaDsWnqiU5rfctV6WajVN2tLEnnLrHafBT3QJ6N9v5gRgnzKdiq6sZcutLhByMu9nNXBDRkAfGvFX5R2b",
  "key16": "2ZBX4ynfR1tSsJVuGzHcMixUta1F9ba3UEXFmJGHWFHHKTPRKZ1KyroyC7dXDs8LXJ1ZuMbzNqqgW3fa1y5s3R5g",
  "key17": "5ReEHhsr2wqgHN9EcJ4e76MC6nkGwdUdJLJF4TbByGZMxHPyZdFeo3wtbe2HhNXk3gjz2pxeh6iQj4dokzDkuaW",
  "key18": "rzcmNqPPmLg3Vz4PhkWChVLZm3oYu7pHMSeobNPCrdKAAYUr1qZ3we3GVTZqom3URp9TFkBQvNVCAZxavW8YWKo",
  "key19": "6rTCKyqYGskbNY9aiQjwuJ9f8v8kKpEhYwcwBVaTCu29eKTjPnhEoQWNYATt5xXK3gLckiuRq9bxRHbckVaYfZP",
  "key20": "R1P9GE5H69omNNiReUfEHjrWJiLjmJgG2VBywXDFHRWE7vz3PX17U7ntzFT5xD6gV78RkYg2rbGyXmuKQjFLtbJ",
  "key21": "47eLzwmSoFC5GJQaJjksBykYQkriCZkknq8XDdeUwqB41SaBQ9aBvWnbm2ipzZtMnzsAuHbfHx78984MpwP9pdEM",
  "key22": "44v5VzSskTxPae5HwbJCHqndcLedThCLQb4byjWRV3ACPKhBuzdAGe7SySyeFXMVyrTA636xdmuJqJ6ZCZ1cKYSZ",
  "key23": "5JpYPKnTJkq6n6tPiAffPdvqWmQFn47fUn9tXR2R46D4C5jcUuYRZGv7Ds2xCGk31ear7soNWSA4i1RSZ4kktBNT",
  "key24": "4uJit52UQQatbwFKUYNwzxiQ5R1GBY8iuVuoe5ar9Aq9JMCUdCDfJ3J6WHBib6cFwh1Bot5p3cWEJPFyTS5dKED4",
  "key25": "59Gdmn8L1NL7xWcZoZSWqnX2eZPYJ1x3pFL149yr2GDVp4GawWFmhR467JVSmLEVK6nN9BRGQvtuB7fNWA3KJxVB",
  "key26": "5aUrxHt7YJD73bmYS8apMCJuokqjvLb8XfaQ64S46Z6VGpCfRqYD7F5JAJPaZ1nvmcAB4KFuQVFhTyHr8EwkSHDf",
  "key27": "3Ndb4YvTqa4sARheNK9RTbDDndDjn4MuaMtQUSGYRqZuBR9Vp3i1CwY95NBQwYfzn8Ei6Fdc3ksdExhvbNScV6mS",
  "key28": "2USsPR2nJQBGL3u9ZzvbdKbzKkX2ZiaYtoKBSNuxNwXf3C66CXsMjxgAkmsUZbAKKkid3zPw5QVjwh7tvQoE1EJ2",
  "key29": "5otkNFEwDaj2otAPd4o1uJpfDi18SduCooNSuRKM9nC8vvko2WDTGGN8GFuEKuukXpQ2G7AdW33EuFronTXcxzLH",
  "key30": "2vztEopnjAg1xsPmhmi825uTx4CSgtv2vptrsyx2csRU8JZCbDZxA4xhM3yRJXoemKrGz3fBTQUbku6Zs9SjfrZ8",
  "key31": "EzFtNSwWXfFvNY9m3KhPnJsfeEY8aaBqH4dS1J7kTEh1k8N38MV59AKxeBc3sYtCwPG2JJKPiL8rJbPNY9JwBuN",
  "key32": "ZtxEJWWFwBcKrAzgsNUs5DsS8K3GGUswhzv5QZQBaR7aPGajWW7aN9qCm9HBsSgrgnicbKRhDCu4fNsyYt1hjEB",
  "key33": "4V3izCFFyAnThJsPinLMvKSrHRf4eZQmfgkDwzaS6h4Ufa226gtmbfRFMuHYBNvdmRmfzMY4DdKEXNQch3Dcb2DF",
  "key34": "5WSG955cP8cGxahVYYCUQvJCSjsRwQc1mL4dBky2jZeLKx9CDmWzwm2ect82d7URGEPSvpM9YjnSTRFmbGhYxVJx",
  "key35": "rQUWLoqJkJRWRTyoF7TUvbizWRqgeXWqrNmmDzUxkf7jfZjLnk1zMCM2Bscqe8BhRVeMaHNNesgNpuP1AaAHzXH",
  "key36": "3cR7516pwu5QfiusLgXYr8jxesv2p66M9jp1Gi1nVSZcaMTUfDHkmHMQ2e9YM3cGVsGhFYqj8jQFfMdmboxVNppj",
  "key37": "DLCn26ph7LSsQKwooRRUeTggYJqKTuLAtNDmSr8dEtW7U3NzkrDJreqxxdLX1TQYqWSbVPLGw9BDd7wr1QisjbV",
  "key38": "4B6ASR63cEbjtjN7osW2Y8TY8UpLfXNexn7WxBnsY683GGhmqJFWA4bEX4ZhBAFQ9SXBjiy8ZJMeVz8RvTWhFUbS",
  "key39": "3Pj8UjtBbn4bSo7uvLUaC9NBUxekxm6YtsRCMmWLwcT1inybi8CUXS3Qs2e9AUkutdVYnSXVzWkE9S1GPgxmLpST",
  "key40": "5cziLpzs2xzo4dFAxGLG258uaaFtQzjAjffizCEQEMc6RAh1XiSwHzuF3WavMbsbvCvUmFM3whXUnnrsQ7cnhxJc",
  "key41": "26x7CjiwCNbcjQsJ1HeXjh8zhv8StfdcWLdXvig4eY6ReWEAVS4pN8ZMpjJiYJwtPmBqWSXwhPNtPAtju69Kyg3v",
  "key42": "LFyafYbunzJ1TzevkoZ6bRhcEdqqtaaFT3hten4ouq5m7GTLayrLxiSZNYNXFnj6z7UQjRb1m1bN9FkZm6eFmuG",
  "key43": "39e7MRxEirgAiKUAenrrzZ7kihs6YMzyyepbStY2agffU4ALz8zNg3HAtFsaPdAibszY8PMcELHqZCideBdhXkGL",
  "key44": "3HHWcKgtdKxkNvTJNTBGX47dhkZRaUvFmwP9FH3zoS5MvYtPBdU9krBiBUB1qeEt6ijKPZDHk3PdQuHhz6Tt42GS",
  "key45": "2H38D6ykyz3558ntbPLvASwWMst62KpGK842MJqcv7aELLC2jrX8RdGZM8CWArXgVAMddw75ouc4osfo4vJfDeCF",
  "key46": "u6Mcnh9ymzuxyWUCrrsQZ8E6E2Wzj1NJzo639MPvSbPrJpoa6Grup4XfE2NMkAtQMsnhHhUo1m22T3sDMRkYsMd"
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
