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
    "Bik5LwJciAsbsWswgNX7JePA1HwzhnKUavUi4N5nTKzxy4p9fFQ9SdukZ8vLKrzyYw3K3NSCMidbFf9PZQYgX36"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gxUBGtJhoezkBdwNg3qGAqyoKAKDKBABdtrtVhmhWuWs3RKueDN8QME5KFaSJf7QU84ySLPSdv2m72BrLT6J2an",
  "key1": "dZDN5TGJjuwEkqwd32X86TPaFZZL8GAP4kjnM1z2JEbqs8tqkwe7wW63K4naankf2Ma3DNPQgurXFfEtEVnJp1Y",
  "key2": "4E3Zz6iR9cMy3YsQJhYRpqBixreQMrUeDemmnPXc9McXeybbpjGSJEo2USsW22GoqfZWDKcQjd41RdXMyWKgjzk7",
  "key3": "2ca9s2MDDCPgjQADdxQLZZTwa1vLjGLBgSvaPAQCg2T1XbN858GGXpfHQPuGGprsfhj8pdGrGvJzF18ADyfhUAbJ",
  "key4": "36dNhGurfokvGRp7aaw48wYHjoMdyArZJcCtxMFYYv3mcExRDRKUNHSTTK8UbhbxthSp62VNYsNwuf84aSNqjrtR",
  "key5": "66k5MaxFWEMkpVTbfDWtBn4RUZFazxEwac6ztfUwXTdx1vMXPmmY9sP4SPnKinKPvosSwCGjdDquD7yXArsRGfM8",
  "key6": "5iFFANMGGEzQ5RehaZ8EJrpghMv535dnzUMoWuG2o6QghhTp2GaF11yJvW9VphfaBaNuptQUXgRjD56gVCrcwGui",
  "key7": "3hCZsVZtj4HfSk4X15fZrHRWTRkcbJ3fqaea6qcpmRnNr2RVYuDtAjnMMe8snstj6aqtvbiiME9yQXNTFSjKHKGW",
  "key8": "59YebXY2CxfBrowLHWSpZHgxrKaS7BVebXvSa5SuQ7HWqfpaFU1whuk5jm2e2Jro17AdcoMFgvH7ALkjbuve4RAi",
  "key9": "3UWXaTNnxuKLJmj1ffyfHACTRxAUZw78sn2PS5VEaS5o4VVC6DtXCdAWUu6p6wo6TxGiRtnKxrfbec25dp8gHjAm",
  "key10": "5jiPUyfNYFPCrKzifTrU6XYsUL73eHtQHvndsaTPmM6L8FCqENvqgQPLS2k8FuTwfLXgT597jEaucpgBf81VBFFW",
  "key11": "5bsHhVqjnrwumiYk1kMmo4nqZdPMDGTdjyZQjXdXxAUGm3QX7r3TdqYQbohTGenYWQA9JB3q8hVzX6yoHeqHs1dR",
  "key12": "5anAMf1cymdBYQSmTRiA5nS7aAq55DEu4cSNc8FbYTRtmPPcjosfn8KrDzNHzKby5gbFU92bmFYvvtGkqG9uYqeV",
  "key13": "29Pt5AqLDSPVThVNVYWKGnaenUwzFbGPtRvY3Rh9ywSnF1XmAdah23oHgEj3kz1kVEV7dVZdejPiNhisw2mMdYm7",
  "key14": "2JahLbcJyGZEF1gFpJL8P42WhUx9c5ptzsLjzXgsMsifLUpHYK8HwUFGm5LcqaQfsL4JkYsa4dZW9ZsxuBwQtE62",
  "key15": "2oaXzDsR3QEGym2e2AeyxSvkisgAmXFRtn5Ln3zW5QrUP6J3gtX1XF7HqwF5kgTXsDSRPTfpffZbbAHuVpgcBdm9",
  "key16": "2mCprUkG2dGwEuZvtUH2TVHz8CpszkZbrDJKFZMr5PdxnGMjZEmvHQ1oPeQGK6HpVg81fbLHrqkfQZYirgg5YKqW",
  "key17": "23nPTYhW1Hz6i2qGcAnXTnZhbDjzuu83piN9bpDLSHFkCUzGXLH1viXrfJecjcVYcdNxTbZZ23RAwSEyq1SmLQsX",
  "key18": "4yga1FkmRUhWaBDJCNUjnt3e2PKtnqxFGAz9KT2cPiPQmarog7d9Uh854faKozqPQnLk1Ac2QkGk9dG9kTmaY5iw",
  "key19": "3mKxip1axNSdypMko2jupc7kQxqGqaWH9v4Pzn85SCBzRqVog1HUT1XZnrKyx6S3jDzUCdhcM3HbzQddAkGKf2oS",
  "key20": "4vdkbmWWg2iM7vPA6AX8Qaicp7XpeXykowhuwGdzLmKi23pW5UWJs21udM61BXmiZ6m1sWmZS6mhrpXQ1iArrRqF",
  "key21": "56fWUBT4p7WW3f1WWMN6TbndDtNoaTHLPUL3zsTxHgHhKjSPDJzz3Bm3ptc3WvL984jzf8sxndPxdxGzetaqcwft",
  "key22": "4FxZqdPz3m6MZyZpCMR3tBwZfPDaSs4Pxu2yjfnCsKwCam8mSwnfsbq7Bo1DqwSa9fc3PhNZcMswyXdgMi5Kq7d2",
  "key23": "32ohKeE6o3BoZTuJF3uo5rMPKQSboEb1e69SMo6m3N2qQwLDfFfDVjYpqy56nMjugZhwTxo8ojP4dVmqTk5a8h8m",
  "key24": "g42a6s3DJCq5eiamwtmhHWcHWeEBfWED7omRN1x15BjLgXfezps5Np9DBadf2KEEzmBgeqVtTnoQvxniBXM8ceE",
  "key25": "RRRQUjUJuqcVmg2JBYYrKMzqEdmMXHpaQcGTMURhdCWXbnpMCY99FAhqzRzMMKfUVva2FMrJjGuzan31BWxxujv",
  "key26": "g2cp3HWDUat1Ayas1kBAr96RDhXjw6qXPEJFEyNTQX4VwN9pRZvifNoJGkb6yfERbWzDnfDb2GwbTkTNbUqcjFJ",
  "key27": "5vXWhbCU8Cfa5ie7GJyJdvsRTWu2vN84J1cNHahJjEpXcNLJfT4GxUuwMzszJDFo4oMAhGbku4pKUM6XyP4oqThE",
  "key28": "2hq6cFMqrDe64AWHX3BWgxkyWTtY6ckb6kMJJtEeLSBo9hWK7Ksv4NuwFULdaQ1QKpyqzVKAE6WHvbCyqctXqwhf",
  "key29": "35E8yLHcvb7Hd7fNktezKFeQPKJA8DhP9uHZHqQagaWUFMYZjkfVgMje9Q8vB9vq2pgid2dNkwgtdFAzCJLRbGux",
  "key30": "26q2bsDTKzowGWdg6FGUHtgbDb83wzXSdz1hUNyGQUQEz6aJrQxdTMrcSeiG29WTd5zh1bLMagFqrKdPiwWPJTfC",
  "key31": "HKq3KubHYgazFXMpGL9Z8T9cZvXHS2XhqoeQonn1y6btuemP46HTEQMbv7BZxDWMpbbYjPrWn91yam8uzJ5SxPe",
  "key32": "4F5q1P5nqqUUKM63eJDyERTesguvGiUL4FDvAD9XyGjJ5ZKjiKv1nifGt8MbhZ1S5ounZeh44Kb3EeZzvRpH1htn",
  "key33": "4GVAALHyFcp64z1aSFVe3MvQJfyRM1EokZeybCnqMFv7MsmFB6fSpyihxHdBQYsboihEFZ1deNGawAkFUgQ3vmV2",
  "key34": "3BD8wxtLguNJf2N2RMhDJy5zWrGJVJy3U55pcwLt6PMs1qUVRx9nnMYD71GZVbBRNMbBdiHVynMKqhTs53S6bpct",
  "key35": "59kHxwYf22kfV26JGoCrEeHtgN11jsZSA9nzFidTUjQW8T9VdC1KUgdLAjyv3Q4iGKN4p5mTxAuxH7SuQbLAeYvL",
  "key36": "5xo2hrZCniSP4jwTytp78AciUkKmvfGccmQowR5HuYJinSFXUWXpXQK1WkAYctGmDjCoRBVdk9SSv2xWUUja8ngS",
  "key37": "53AnFpk9BL2iW766NSYUyMjCvUPLBym1M1zZNXcdrRj43KS5GGuAZi8AP3bpAQmzUwgRUhohdtU5TPN8FiXRjncD",
  "key38": "33r3Y8iDdAaTret9ZBYzM3UZ2kXE2sSYgth5Kz6qHRRcWKfu4YZdSqtoYdE3SmRKTcy7BMSR8jHCpDTRmtrbuLhe",
  "key39": "33vfiiqhBT5mokaefDpw4BQwYLEjFsHLVzsPDWXAeX3FfVXeEzawhDhXP6c21DL7aVwtjQPq1hCxzrDWQgSv9cMp"
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
