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
    "c5ZbCegeoan4CmjjLr6fXwoaJx4UBehZJmWyCYzwi3pDXtcAbwGYvViQyaLL8E69sd5GAohRDkSYhM1X4Zihgbm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3er4UMVNTHQqvLGhGRna7TgJEMUNRtermnCoBKPWGbHn4NShofiBABwvcTW681y32HhuYZECLbKdohYF7sS2caR4",
  "key1": "3PWtnWH1cCMXjVzMcZbt8sYLBUHgGvqR9aKEYTbqsvnpBsQsLT4RoGynRzA14vD9ihx8a8Mwmmy7kCoohF1N2YoZ",
  "key2": "4jsLiYayhsk719Unqgxu6Hv8T7AuAY2FNYiTguCw9uUaTyRYV261UkSqaqe7tDvGVeDzt1onebuDTFUGcwCBsVoT",
  "key3": "44WVYz78i76htW1stsKeJJzavttjsupoMA3mxWzWUvL9rSAcJc2Wyu96fMP5FP2J4LAe35RFo3U4XoXgLxp3sj4F",
  "key4": "6KmV6eE741Hu7CWkgUZuCc1iCx1gAmLeizMpMQV49S8ajeAUBxgV6tsq68JXVPtyu3vMaEY9GHQYcvnCFLDWmsE",
  "key5": "2hVFXHzMAHPrHb7PkGmgALBvWarH9qKi4MWCQzkxsVbe6eXksHDZM1VuSe8KTqMPN9aQvVdgtZYdHeZnPtaLRrZS",
  "key6": "1no5SZMnpEF1QcNmZSE9EYbFTdkC5ehSVEKihHMwy1d5JiMuhNaU6VPVyPv1h9Myydn8EumaNDSUTXWbSU3Zcj1",
  "key7": "43ummdZBjky3CoEVe4fsuucREVYnHXCo2AfpZZYi9etCUN161Pws6AaG9aLQJn2EeGn9V1amkf4yTeKHgbea7XZD",
  "key8": "2uyfvso4fTEbvosj119UXtWDjBLKZQPeXf5nhdfajHa5FMQSs3XkXhuVsWCEc2BSpdAdxrfYqrs1qaGcgDSkWCkH",
  "key9": "2fFnXTciriJ2goYsNrp7juEmRrWLSJchPqfcDJbE2vYSJe9VFsAMoY6iKrQ8fTgdj2G71MMQMPencH4FVAzSTczJ",
  "key10": "3pesAAAoGQgU4TrCDxEZufAzFdwYnzBqjbHxHU1fnLpRzRBxhAtucb8N3ntkTDYvdEbvyTWcx8uuNememjPJDwCq",
  "key11": "46BYQ5NpQ3R6Bdut4mWC9eAWeHWigESHyof1mQirU1qzmxuusSsJQxWmPPPkx3sgMuYjMWX4i3LF3QBws7ZCt491",
  "key12": "UAEcQgarsHcaqW7pPYkHLTZJvWQ2kUX2sVfdTtUo4vZL4CJtMynoqvYcJsWgGtDwDWn9BnyiMCoCZ2wc5Q6rMB2",
  "key13": "28t5broPGCPeUft3y1zkX96J9VCcCXnJEtzB9k4Vjdt5ako3rbJ67TisCA89XJd9Ts2PGcqgHMTZ7bMFddEXPnb3",
  "key14": "y8nJtFLFvpZQ547PXA2FePc2a1cctwhULnbh6fEy7L9KhvGPJzDWr8LWKB48FBU4FfPrv7JvTS2KKJxLmmuhMj3",
  "key15": "4S5CZUbUBeVrnHyVJfigMvj4F4V8vNh2T1WVekFzPiBzzgmaAaLmwCcfxTDy2aNEE3wuakEh8PvpbBcV7oCGsdNP",
  "key16": "wrAMRo7AhjY2eBHu5J3LqiatwsyPD5NAEFnBhRNMPYChWHDMXsAFCaBbrQFHApA9p8nMicVj6S24TKrtTtU5ppS",
  "key17": "4FKzfoWDTjUzCXUi8wEoeUnZDywffdNpbtkPGShncV7FGySdTtMdon5odAeU7CikEZt57fjVXe95Xz3RpHvfPZHV",
  "key18": "5YJHokE3aEEhDhrBRouzu6sJSvLaXocMG9HtU8TzEsEReBbFszRRFJjmTFFLK5hHA8gX4KMufzTyCQyVHLVk8unx",
  "key19": "23VXdPbMvvaV6bdkPeucBmYE9TNKw4nTford1MnrDNZL7xauaq5RnaJre3e8M9t4MmAqRvgr7Cp9MMK1ZTiGyCyW",
  "key20": "e2DeTvy98ENsjdna4m7kUEi4s2mEXYxAwdDnt1xsqxYMKskqZ8wExuSdTLvdaU3bAFQKPpaeEyHTdRgEqF2Stka",
  "key21": "5HVuEPUKVrxpefCQ7fNVu88qsMK1jJjoSxhLcmiQdq2uL1JpLzQ3RPokddvoy8BZjHZdPfAMS8j8RrJDKwndFtJN",
  "key22": "QknBDwWFM7e1cK9ofU3gxQteLV8SBHbk1W1Lf7Ms43g5WRD3Zn4ZhnRwL7gw7Ly14PQr2NfzMH4t7RQ3mXiJtVZ",
  "key23": "26gsjxxWNEDJ7cGNkefYu3K3UEB1tyT5Nz3Qzwg5Z9pHMqAugbqNK4GoKvssLLUJSGigWPtx552bGSHgv4oH8CbM",
  "key24": "4eC9fKdxuhM7yq7cKQPBaP1kR2qENck77xot6B7yoqrt1eSBj8Kk7L2Ahjy4Feg9aEeSygu6RAabNksREk3eKRSH",
  "key25": "3yh9V6YqDXjEfYPmJbvjDJN9ZF9RRHwWcFdxbmUZiuZikN7NHupXPToQatEFXKk2TrMBA1cyLufsRMrWxyHx5GCf",
  "key26": "2x6aoxP7ZjR1FEvXmgW2p2PNay4qBcV4KiZCPZSzjeVvmKc9TJuwmzsN89NXQBay6xYQHRuKXtDFoZPSkARSTCth",
  "key27": "2AwbRcK6C7HYynBfAXkh8Yeg8Z9C1krXPdG9Acq41Gws62XTK1zKxKW5wM88rmNsdqsW7DxhK9jYYspXBsfc88iy",
  "key28": "2u7RBRx8BgSaSrnmRarZVKYPu66ef2QeNLmspHZkweJvghpC9NGcA3ytPA8Yh3wVWZiGaheD2bPAgV7cJKmSXjAQ",
  "key29": "5dRkmZyyttoA2UVXkC6re7EMeBhafVQNr1gwLQfUyCRkfmrbmUdqe4xYjEu4RjpZLr72JpBAEfH1g3FhayuBHRkc",
  "key30": "2XrCDo4MRRTT2sTr6S6KDr5e8bcGX9FnALLqgheAzezsrzEKHDGUP5BSnMsaWegYsEUHBtdL7QpTLcUrLwxk2eNE",
  "key31": "4nBhhjDgytkpTkWypYwWh5rR1MhWoAayCkQEbrVS8DsvXihcov78UVpucD6kgDvfUcYyL9SQQfNVigPy212nARiT",
  "key32": "5iAxnHUzpAcQMY9XoAaE5sX9rN7xjH1nTkZQN47VLzeeNmoDXDMh8mAQL64B2Y7kqaJQSdhZLhts3nEyDeH9pcw7",
  "key33": "LhiH9E36CxtXNEKcq1iYFpDTj88MrNWdbMUr79hZ1nYkCDHuP8YFJnNhYASgGVbdRXgNS46HyPvDKtqgbZxx63t",
  "key34": "4uGU6FA8C65mPdzAXhb1shPyKmJV9V88gQG2bTfJYG9RW7Jbt7c2YVrzWon34PZyhDLmEQKH6cqXy2ch3Lbn7h8y",
  "key35": "2ydxV8BpeFd1PGb2V4joCLHEJUN2zHwv67cizB4X5WYh6vjVroSNkE519b1oHP3PWy4HgXLjTNFPsqnTuC1hgzmE",
  "key36": "63eK7vLgLa4tScodn89smVctheuMdMBQnXyELbKj7Y6By9snPdas1H5U1PXU8vESJfGrHXseMFqXV4yNBdsHtn1p",
  "key37": "4XTF3bTNgCed4HSupnDZFp5FLZtbTDoUVJki4jZpj6MLx2TrXnDyteqa8yqffqcSL4ZAAV2FLtTCDWhtFnpxoAoS",
  "key38": "3veLFm7sgNttyP4njzc1DcRsvWRCtevQFpJGoXiTv12VHUkJQxvrU3HyZp2LPk7DKcxTUtPLAMmqFtL9pMpPQ4ap"
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
