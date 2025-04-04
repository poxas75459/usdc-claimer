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
    "2ybFkaJrK7z73bAkQd4e7dv7vkEHrspxycnRvE5sdEvvk2bjCjx3pvtgvsQJuWoCNBge7hgr5CUYJ8foqhSjWLhc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LsWpXFSbqz33sx8YBrv1pu4AMLdwJ4S3K9NEcjk2JZ8yNqtso67RrnWFy5MJJdnDVryfwmE6PNzYrrRAwwDEDyN",
  "key1": "4X16inXAQzB7mKeNvgM5xG8MESoZzXMmxCBbfVpsKWifDzpwsR4idg7BTZy3xJ8VMWK6nSqMYABiaLHDRer7i6vh",
  "key2": "4gGfQyP7M7SS7XFuKZCPR19HHCnVR56cB7qd8WiTr17QJ1cUFZG1QKsrE5FFZLjtMapSGVKVwDJ691auRB4vDRm1",
  "key3": "5sb7L7SJZX7NbwN7rngER75aGiLGEAxDFw88uL58Np4KVDvG3PsbADHN8oCH9RKhhm635UFzb9sDPzFr7iPZMZ5Z",
  "key4": "3DhwPZR1uyWe6XRZRwFF4NHyE8gJ55tbuQxuSvDrGd1zdAkfPrNPJo2SvAhe5eKWQTRfNbxvbpWU2DREAd1fFf2j",
  "key5": "4epr1Huuj4ZipAhjmGdaKCJ7F8pKMdKao3kUYQkEHeYPGbhULwyjiY8AfoUusY93GX36rtRewbziBJGp4YwLV1MX",
  "key6": "2QQve8kVRzkv5ZLb1bRxCnFerismTgVN5fM4oDQgkvtUrZknGDp6g7rYc6uUZyLY9CCyowivpxqKNqmYTPQmWnB2",
  "key7": "22pBhXsBmjbn1PFxc43zXLYjkmHucYk2gzaxw5jqBqGNRL2pow8gK7ViJs2seYuRpYE2igFfGFh626qkzYt5hohP",
  "key8": "3bNgoWGkhzjgXQ7ckxagafof9Hu1Rbi3YriZVhoRGetwjNmbHji18QTZu6oWXhkWeysRymxfY6STXrNBJeCEdCMJ",
  "key9": "4SXhqYzL8Zj25eaBW3XgfGQxfL7C7Q3ebK8T7ojx2mQ4fvoNuV768h5NZvdLFFw58LM8GuBPTPCkRMXKjD546jzH",
  "key10": "5qn1x1xeWA1fKL16hwxKCfv6HBHHMUCWk87wqADw13dVCEGZbwAUFAwUvKZVmbsmyf1DfYFwe9WDoDM1tdTLTH74",
  "key11": "5yADPvQ9ed7f4y1XsGAzR41avx8afcE2toUVta4t6GpJeNtRJJ38CRGtMAk4Aj8Pvo3HozbkgjavMH3X4NBWCton",
  "key12": "5eV1AUzk45oh2WDwNQsc8zrf27uaSTGYbAdBbGYxCn2D2ZXSSgbFnvi1weHJ9EjU1Zf5Xfp8neCbsXcpAzUojKzZ",
  "key13": "62PowLpSWfu9Q1w81XNbHRNs43jXz83C2ZcBArVYs3PK4uavAtBbmjg3ixq3jRxxoi2HeMvzRs1WcJsdhM4L8TkF",
  "key14": "yhdt5qMP7TDcCesMwJH1rWb362mJ57BVgkbq7sQpGR8aqCDaUQepxZ4zR3o7vepQ1itrjcgiHuZB6RmshPscND1",
  "key15": "4ywsd6orN3cs6cSoMzbuvwAubXL8CnCwMRbjsGNDM87gPZZh9h58p8sHXgYWmD9C4WtCfvFu7DfPuuWTjruRmMXX",
  "key16": "5maKcRt5Gqzvkwj5gci7nUhhJFnw8DFvEbL7e1pSqQTAvc1U9Ab22KQ5btZJYsurmWfXQV4VMBWaP6HPDReuN5ov",
  "key17": "4Y9ErRGdA9u4gPaEJpk3Yo3ZKTo7hb9ti814ETSZkqDEsakXXu9btyX8H42D844Ypftyto8y2DvCn98hmcLFGrEz",
  "key18": "49RkEHMdRZ44CYEHHLpbCsgJUiJsFbF93bi3rphacckkzGM1GZkzoMByWhvAqt8VkoJMvcHuQ1Z1DmamGYb3Zqpd",
  "key19": "5gNvkLnfc3hK4mVLYn5F555s1PTbddF7WHbYDv1nR6WyDHCwSrEd5XGx5Wp1qGGwbXWjPT3rkmdJGSXTcyfr5t3e",
  "key20": "5BA5GjbTsDSiKoku6ezQoDXhNDPZXv7vMvzLDB2Pqs5RNDEbiyEP8sB4bXweQRz5eCC9puQPhwqAEfW8oK8advqn",
  "key21": "5a8B4wGdjoxfu9A7ZkRXJmomedgtZoDA8zTKcui17aazmrDWrAdDvNhfSLgDVK11c52ghZzabYtJwBPk23VxdR2b",
  "key22": "L2efxzQCZXj8ioCoyhfoVSNiMqK3DntrX2JuAH8gAaPtQD4JeaqHBQUSaiuBgkPWezn3Y7R1DWH6aj1GVFwEZzE",
  "key23": "3RrbvBaq7F9hewpoVAVpoRrtMEVyGWsxeDiFNgwy1qxvU13MYrhuHMQteuezsytsQjjaW3DbBBZT9RsP4M3xPe2p",
  "key24": "5uQPDBQdLDCPri16APM9CZ1QjMMMvhZKDmwUGfTzdpXQvZZQczALuBFMKzogoLg6d4UDwAq8B49y7PWENGvtgx2p",
  "key25": "2UB68QpzbNJss8Z1zfLtn2MetZVp9cCjuYyp9XaJYj4qkCwb7ujbos8BJS5QFAgFzZMBqU7ipcxnt7Wp5P7USjY4",
  "key26": "BtFbrxHfCS1RQgjgfYCvVzgarWPJM1RpCSpDyz5LxPzDhci7saB4qkq9HWkK6egFHEmiuFYhHz5PtvfXfJpwqNd",
  "key27": "4YjLCSepbWEUsJVitHoGukNjZwgniqz9r4GVK6x7cXjDTQG3mUoP9avpVRBCTJyaTCuprGRehL4csfEmZeyfMzaK",
  "key28": "5jy6GrSaLqGjMXNbPFrGjKSKdfb1xnNdn3njtH4adejdEDSeZFu55p2MMVaKDEF9HcmPnG43isVAPYYoU2Qkuj1Y",
  "key29": "bgRBDxHKneXfwdUVSaDsE8hi2vh2CPSRxHKQQ7yEBDRMbyxB7iaPW9iqeyveNoeB99D5em6ZR1yEbG9G2oUxgPT",
  "key30": "4b1jNHvGfDT5geBod6uXZzmEzZi7moFV6jZdK1STZNfWyoq2YJGxcK17kR752nWcCRgPkEmaWFzcX8jAtPGjtyf5",
  "key31": "5aYweD1z4YaUw9AmgEnRoQJGC8zpF4rXZ5a7tuTzpaMFVNNus22ym5JMzT7C9tf16LB7Rkz3YpJ9ovqvY7W2b8t5",
  "key32": "CMynXfmQNryvCj7DuCqwmgPPSQURwSrfDWFswyvSx3gkksvCwj8wPGjpZYAUhqHPoJjH8bxaPKEbNsDEZrX9UNZ",
  "key33": "RnCju2kitd6VRxP9eatywgPYPmn8VUqS8aEkt9HEQdzzsXgK3HGUXAp9GPVkJtLm7AANtPLhdgeqo7omG15Fceu",
  "key34": "2K4JXfNXFD9Tf4xwdaqzshbiTtjsYeUULCNMyEBCezKWuPeHNRRBcB4uVAmhDfovVQncBpSSXXWFBCVazhoVN9fZ",
  "key35": "3KFJhqsYGkEKeVRY4JnuMGxjEk5vk6m3eznUY7pYN5PdhMpFUz895qPmBK88aQ3eu16xRPoFdPou6dMMvJL464RR",
  "key36": "5j44cFRc5QXaE2aiWUyzHHZwHKB1VRqU977Uc6f3uz7rqpMccWFyQxB7PQ14R1ryzT2XWkRFGJGEcX4cmiGPqDcN",
  "key37": "26m7a4UDeXtqNN9NeeDZPTkj6rLk86P4LPc6Wboj6M7Uv5idYhudWqyqTC9iKSqdXEwZTRVgSjEF6PkRZaF6UHAo",
  "key38": "aaLg9n44FJrNxHMzJk45zW6oZkkmj3Eavfx1ets4dEbjEZmEzD8JmMfyVufFWX8ix7v47mwVR5NbW67UoHBv82m",
  "key39": "2ujrE3YCtWA9XvP5NJ5HFj8Fe4v4h6WHfKf6AHuTrTGnB8RV1YpkT4qHtCs6MNJjsnVRfTWjkAdK1wnpGMGNM1V6",
  "key40": "haNbysAACJSQxgy1rCBh5j3gXL77aHaM5q8smyry9VmHLDLY45qYoiSfe8MVttwMj9yEfJnxjXZwhuZDPxkH8pP",
  "key41": "41BJs61Yp466w8FUW8UA9U44bhongGm2Ty713VGywRdfDxCJZQnN8jhxRoeaYo6jbNrMnsAtoduXrwnbcJRLkZXB",
  "key42": "2N8yDxGJ6BeZtU4htbSx32jL1bwJKqJyqsEPXSNXTMEMfJBpWZAKfPkdLaQUwS1xZtEBwx9hBMFjjtLsigJCdBcc",
  "key43": "2H9KGw1snzsSUyyStiXSPUtY9skbLWEqhFeSNhUpPc2EtVqPmjoy6yDvT2HMptordSkjR6vRiGLHijG2vcTbgxCR",
  "key44": "uDrY4gKGN83XDgdFPUdbxRcbBYqwfuCjBCr5G2NuaN5oZyNhF1f5yzQGre7ZddTnsWtibSnmfT68gKCKntVcPRo"
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
