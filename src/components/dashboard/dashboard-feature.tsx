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
    "rPQqGaz3s6QYsKCPA9qjv1vuvhGLQSZz85EmoWDhFefft6zmh1BHugJLLm1W2jH2PmzTTUkUCo7PG39t1MY6VKv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rn7fJZoyoqrvSwN3gYL4aSPkGMw6TJtzYARfRi4BA1L3i3JyaEDA9Fn3QCHZuC6wcdQGet8XCc4U3S2sr1PBqRD",
  "key1": "4c8eAUYe6XuxzWiC3LxM3G8Yb3mFsmZDPyk2jPD8Pk7MfbMgynRxdwSULV6eJK6sXLPumf6PAxvFGueNJRAJedSs",
  "key2": "k9aeRPw8BPqN7ZF6s2UvQc2mEPm35qr8CwLGQ2bYkoJc7qSH8kbUfaqqqmj9JxFwph2bma6t1TKZ4qo2fbsyRCd",
  "key3": "trHAEt1aLVSfRdX5TraFeTW1MzqrrqeDNEvG99LbA2fcxi6p5FvsVseXURTgQyADXP8DK88YpemNu3BQC6k4FkG",
  "key4": "2Kb4Z3E8X1GnJySS9kCqWQkyb2fbgjgYpR8AFxWZghY9AfBZ2LSLF2Gw2wYJ3yeUeF5A1rKMf7yLA9nwWcfvohQP",
  "key5": "216ogsgmD9digv9awXZjcYqko1hA49BYEvWou6dfw3p9bXSe5wBvV47ffumLywje7THmz4hdGSaGugxuU7jreNXw",
  "key6": "3vfz4BG9EPh2oJx2QmszmS8MKp1S3sJGpVaHtTjkUrkRLRYHFeX5VmNSwqUNmcnXUsjshNDSKGoL6UUVfmJPaeSy",
  "key7": "4dD934XgUH5PbFGhNMEgE6nC2CaY6q9RVAywJKzLra4fcnzJ2vKcNWcrnsnq7gkHfaLEeWv7JcmrKdhwVyvPV4V1",
  "key8": "xhyBtNtRH5RXrJJgtxqnzw3aQxYmJPUmFLbXzzsmc8rXrWQqGbPdCfa1Rnqm2SutrZYnu3KgfSGjN9tu95DGSdo",
  "key9": "XGqgAtDbcNtA8hyNb9B47gjvQJ7oJbBMU8K1XwnAeax13Hahbj94ir6xTxrxUQsozV6HJiL8Kzm3F2WNteWvrMw",
  "key10": "9mreaURmfHKZqqNHekh8q3i29DRUtfCPdDS3MqKBZS8eimduNxgRXJ98wcKd4niEjtjN9t31cAhYq2Tq6K3QJzu",
  "key11": "3gAd9Cd4LqDzHw8sjpP5SmwRb4sfjwr4qhwhfRT9JjDueEdvi2YJ9JJ3aXdkNUK8fLeCa6ke5TQEZy89VE9KLWM2",
  "key12": "4Cr1UbmPjhPQ32VqgKVTY4DWvxcw5soHE7u3jRp3knWwMJzKBiMNxGojYiKQ8xHgaQtTvSxvDCbbgqHCSGWRCPge",
  "key13": "LPeb9pFfCgRxZ6eFaoWdvb3PnUXM6fZQGmSe7tV7NUBkqQ4qeaoTM6xEiST7zpMgyjShMzLX5xfrdG7Z65HeWau",
  "key14": "4dPcVmzkJFVxYaNzY8U862HaxGfg4NaDXa5ugz2Gkhczfovp43mqPXYJvvz65bAT8iwSnYn7fawpMfytsL4VP2hY",
  "key15": "5etsdusUPb8yRZpevifQyvL9HraGXU9RfTUEc41JgzTL7a8bUR3mgKTRgPJbc1tEQyoCsET391NrK1bALMVBjorY",
  "key16": "3XZLXRu33AdvV6FQwhHcz1frPx8pyEZJkFZYAoFztjyndgEmXzr9EPKyaYLQeRmviWVwFg7tfsNhuAf2Bdq3SsfY",
  "key17": "64EkHzxrpSKXR67UzDneknvzqocGm56Zx5LFg6gHAjmuqj1ChXWKdpz6e3odq9wJv6tSEnxXQ5X2ZoS24PZ1eRc7",
  "key18": "2rRyNFnmTuugtv4PfrapR7GA9xdj1hCEEj3fPPUNAXk5xfbciR2qGwE57QLtmJ2iWccRis55oL3tqpFMEPwjAquf",
  "key19": "2KWCasFmS8zRtzVGXkpbWobA4hhURfGGtvBLUQhLQSJRT4r5wtkNtuoo3fBoWCYJPkQrS6Mj6xqpxfD6wzVRSpDX",
  "key20": "3PyqocwnHgjia6wAXaxm46kqaBj5pA4PysogtvV7TZPMYwKZnojFayUPbZJGLmXrYXpDkZiUNgmxcFSUYip7WFFD",
  "key21": "57UnY4DsxevZKxhmtJcJtWMyhFCZqbnLRjmVcEsk7BxTh1porMCx9SiL2LXCioB82z4fWrsYNCcuBrcoLjRf3xtF",
  "key22": "5PqjANPUroV91iYboFnCQxcpFWrqrZ5H7xp6jwJVHKTxbEnssdFuZcAynhgy2ynaLvm9iVf92QjTtV9XZRQdzi5m",
  "key23": "4smoMdLTDjrDuamszLgaE2EJpSSxR7jFuckMeMyHJJ3YvPFdb63rJsEKsAjBv1pSd2fDQ6z7cWpVPykM7jzq3Akk",
  "key24": "X2cMvp5vdFK17VHsoQjcR4btQ4todBoU5eNUECu6LAzCrjdXqwzi9nvbZyFPp5umyEp21d6SiH4HnATHNGaEUtV",
  "key25": "5Ghw3vnrGtDvaYYBCjEpf7xngUKXctTUwgA62ufKsccW1oTyo1e8SfxzHDpjXjmnVRFj7kLtyiv6qJcW7uRJZknG",
  "key26": "3jmZYSHL6mnbjD1hiX9HySYpMdRv7vMupQSxeDvmniLgRWNf6DNN2sgFe6c66AAAvennCGvcJvFLoTXah1AE9Qv3",
  "key27": "3Dx1JDTsh8zBSEU99nXVWyCL4eXsVKZEiS1qQiGhdcfR1nXZp3DtWgZna9gXAtPZFMaedbs9tTyGHDmCE67CCh65",
  "key28": "5w2ZM8EZX5SGQJqkHWvdJXF23h7x3ymnTPEwjhHx4xEaCo3TFARPNQBVLufhqqtn5MjssrzKgUAqtuxh6LtsSwwk",
  "key29": "44uCokvK5RbNPZDu2M5hpDhuFUrgxfJEeapMULeGvzZc5JKd2EDstAojGv23F9g7aQCamCKz1JesDfZbJ9obWRZB",
  "key30": "4veML3dsHRTG1jTMwsvPuJpq5vXNUuBrpwcqKdvM5eT87yDjcPeAtPVvoHHRiDfoWWSkbghzCAPHhzRgjZn9zABH",
  "key31": "4mnT3Se9UaVuKKznTJc8buDtAJ44v2sJyDybYTkD7dszjQM4eycFX9L3xGGPShm6yALjV6gt8kAK41gJwXY7zrEb",
  "key32": "3fghiMKgiphdSctv8jqt9ERyWzgdS1YGgeCx6q2utZcx1MuaA4noxuTFyLB6PWQLBoxuR31CNt7vPb9BN97NjWSC",
  "key33": "3n92NLaacnBQ1qhDvFfp8f9oa5K8JVH1M4b4PcW4D6CWgk2bxknC7kCTPMXLV9Kk24jjWE3nbA1DaYGk48FBMeo7",
  "key34": "5NBM7EaWk64pmXdgDaREwgpf6kgTHRF74RFredNZ6UiuGf2LrnDdTuxFwQNg8Gyg6DfkHbrrbsaic8bXYxBhjT43",
  "key35": "3pMZYrhksMFYz9Vq3TAXsZcyA6nB9wRjdNnnstjZCBdHfntNFeVJVbtBV9sUtVZBZKLPaBNxmMGeQK2v9XxefoAP",
  "key36": "4qw4r7NMm1zz3bcoL6fAehaJtaSrHPSbEgmYwJ9cBqasriekjRxJsU6qxxStFJpJHAcahn1LG4ULNZaeAfvPNUTh",
  "key37": "FXCjommMbhG6tCbo8V8dJHLVtE4xVUWTtbqaDdZApKpm2TRvhFNCWgTHVL3QGSZEBcDxD1e3WvJ6zYaHhn46Z7J",
  "key38": "3d9xVfGXw1mBaz7CBvMs5h5c6HGPKrZmmpSQMdpYW6pkNbGfJQCaAjqCeoV4E4doFDxFAfUfiKftaBiTAH1GKHm4",
  "key39": "28ZvnrNayWS5FU5nfJ84XxrVSqAmXERuZPmJ91ZGPxYsTusn2KKW9XPY24HVXg888Ex4JtmAupNKKBzLN82ioPXP"
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
