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
    "4pUi4tLLFRUyCVR2uPGQ3PpGjnXiuoSBSyY7sSbtHk6Nvs8m1jptzUwr4S8BZipZFod5udHkGquGD4NTRH3KdAoX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34qM4wSL11fKsw3MmhBMGyqGrcR1fhGQmrTHuT4Bw2EhjBaEFbmqefwzwdAgkCyC8WLt7eNHMkNzYdifg1VV1hcr",
  "key1": "495TGp5ZbHSQNoKEWuarhHh1euXTJHwULQM24HoSo7tW47uoUSTwT2iw7y5ZntMdv6qja2ZzuW36T1YDPm9bWkc1",
  "key2": "4w1Q3vFsaevNhYNujmPn29Z21tFV37vzyWSCjU4t4mdQ2DwewrqPDVwVskkZd45U2Ht86R8zZNXMV6DqqRNc4vN3",
  "key3": "41X7uBjccgwsG7BbEdC5rvCL5qWw1Gc1xwaUeNA7SbkzC5JVLZUWqijxWC5nqNtTU7nuzn19f7cErxEs5bquokUp",
  "key4": "5YVQwbkJkiL6DH2NRQqqZTGG1r1Ce9CSq72ZXFpmZokLPkHg1zoNJ6sUA8K66x9frhM1hoDvRtCrQPNbphPsFcDX",
  "key5": "2kmm2qWDhZeCYJfr6UfHezU3ePwV99xDDtKYyro4M2ruRoA4A4vYhqHZNXCQKXRkBBWcxKWmRrhrW4BX4NHueUN6",
  "key6": "H332PTPTpNn64KPrJ1bipovzLwqzvW1UCBYzfzTQZgjZsHGPNd9JsLrY1CjvRFFYRedhc53gqrmMTyrL87tADaL",
  "key7": "5VhUTFDXYe1famxLA88GW71mssbDaazyMF5F8jsDTcP5PkPDxxSYKdwKukZvCqHEabsBuJTq4154CXzbdVffhivM",
  "key8": "zfRrgAZXTJ61cpxcBTo73aji6nZQ5ZzYDYfuPi6FXsBkk1yaDq5JkdUgp8whgUaYVh62L6WKZ7nX8VJKEatzYTU",
  "key9": "nPJjCes1rGXATTMPY3HCBJHeE7yKczRg4waEeQN19oXHypdf5da24EyiTiMPgM1mnJVUuSvqYJqGgvpbRW59LAV",
  "key10": "5yLtrqLgBuSNaJqTsQ5xSDZiFH2CF33ixZmeFnobQ9e1y6Bk5FaE55yyXQx7YDVqtdigg8ckMvitrfwa99MZnGiM",
  "key11": "b25wSzCzFVqFWt6K4dwxNUAAXGwQ9WT5PcYD18SpDjcb1unT5q27SpHNXKVyABPosb6w3Yb6p5qmxGYxCKrF22s",
  "key12": "5jPWboaif4JcuaY9KL5Acvmw6dzqFfMiYNYsPt8x36s2jcaTi8ncjDtxXoerUKLRsrEFiwgFQFBLEYCfcj7f4dxa",
  "key13": "4LnY3p6TSQsAC2ST6iJDLbfe51zkgfzDfQJFT5mqA96TNC68BTkZHXQdKBmCg8PFGVjrKTscsuPRE5NKzBmnSzGB",
  "key14": "4obeDcZ36FSBznqM2Z1Vq7xtt6ZyoeQFF1tHJxyumjgf2NrEK9N6zJzSYSUJRE5DjrrosZ7ojeon5YsV2wBvd1oy",
  "key15": "5iYfy5ZBGHJoXM2Z64ghUXCq8T8eBswQUK9xsKJSsy931C53yDTYVBycJjxqjoghVou9aDTtLp1kk7AD4HBguYgZ",
  "key16": "39ezAnurk2jy5PGZtD189q2zmHzsjQ2n1YTP8n8s1uiP2gMPcmcN3me58w2GzddhBxDD8j2QQsuNvCaddoRFEtLw",
  "key17": "2ZbJbKxW6dFfiuMs6DAPa4Nh1w5Fst98Dxmehq9BEEzcZC15e5pottrp6D8TMBmLhZrEcc3VPCDajkCeyGLhW9yQ",
  "key18": "3hwyR9pop3ePwfka1WZ4UKUFhpQkz8ffUrUJr3e8eRbd9Qc9LRQAjprihDdPu23xpp82qQAuatefdV1gHqG2yxDZ",
  "key19": "4ndJXR8LWnrrY62yKTH4nwDXgzB8ThRubRu6m52MFxg7jb6TRSgGUHijJ8CvWBgz7bZ1WN7oyE5gYyijEw9jQQYP",
  "key20": "5Rh7ATu92rXoYqQczFsWNn2ePEGKpPcHMhPzpy1nmqLdwVPgXTFzyxKi8qFNuo3VKSK1vQLvzSaA5ta76nsy4DJs",
  "key21": "4mLqdgGAvq5S2t9tLA2KHNdsZpahfXWmz1jg4yPcTr8rewsY46fbrzyJh8iX52LuwXa2ekmz2TSVc5aycVMLoxq9",
  "key22": "64kis2moQpMdNi3pUZDTkfn6dWBab7boSEEQd8k4UgG2gCh8ruBKhDViwiY6ySAqVsfGg72ivRDsnM8zxBrLjQLf",
  "key23": "2EZoegEPSQyR1LkWQsPTBBmvAYTfir6p4cp2RBoSdjmBQL95HnPhonGqhkJNupHHdCb4KM8E7QBpRSkQNoxbNfZ3",
  "key24": "4YBh95i142s55PuVjXE4z5WfsPRB3jUzEDiDfEvvmaYeiAaXerZntH4PYWuHuQzkSX4QEWLvrSNMDLJzrKVbunZt",
  "key25": "5CkPAtt2rcNgQpgXm1jtDRcea37NBmcX5SBTiakiVPjSDydzY3rVwUVgwfH4ngvA9HfetXiuRrQV9R7RZ8ApWonf",
  "key26": "4XhBm3EWCT5VL8XaLNh8zxQrUEHTkwKFSVfeu8DgFLvsg2v7XWXbkYwEx3dArP8HwP6ggvYMvKaoN7gAQDaQaWC9",
  "key27": "2ASfdRgi4xZnQLm3BLsoEMaKfM1s41vnSE2mytx23LcXpsitZ39Vf78LDRY4KpFw86PCexenzcJJ8Ctgud7ASvF4",
  "key28": "2DKLxbLwRUb7wJkVGvEbGvRWne4Ua52oPdA354fMwP2W1ky4SKmy1WHsfjzWMmcC942QVDbKERYDtPoneyTguPqe",
  "key29": "2zaVMusMmbPxtARYpQcJjfuFyC6p84MaAV7KmQf88ietrFSpa9ttbXC4eCFJPtwSrWLhMympu8gdbUiFbHSru2TZ",
  "key30": "4BD2FzUWF5AqC44zCiZo3ok2XsCskK37qytgrPGtvg9TsJYgvAUynxpnDxR7ENoGWXHKP1EDTcoJ3LCrbUXSivS8",
  "key31": "2Br4LaK4iiC9LRcBnxe4BD8Cteha3SwXTGnNJGZahhu77739Usog637rasQ3jCZLPRwjpFwPNK6jLug4HPgd5aaR",
  "key32": "4nqWas8yFv7ZSDPQoCP3kj6ETUAtSQbSq7goar4rMEcMuHXXbhoL6uiBQpNCZzeq58v7gB4TJiJvWxNs53xA9v88",
  "key33": "3SxcJRkQYapYjKyZnQeAursJNopKed6yCjeFpmZFvgj3sQsRRjcMxiCCkgpVumUvJVyFzaFLC29Vc911HLkWKiHq",
  "key34": "3Gmk5abpdVtg8fUrGhDXYPV7krx7mJ6S4Y2EHPNV5kHyNNpnDQjrAGPYAnq3oXKWBe8qvo4bC8ZVqTY2xqd7dnby"
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
