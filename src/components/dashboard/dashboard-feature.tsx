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
    "1CQ5Lh3JNQdsUccaPEeRA6Hz5bTwMTD8o3sMx8zjFThePzmuvrLsHtCB9JebWbWpw2eJ3Abg3bwiyiA73zCtPxQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4seNceXbhdCreLiFdB1xZqhns2AiKph45DmLavXHCMw7rAcnzQ476nSHFiRcKqxpNJpo2iHFR6hq8fttXKyrznqF",
  "key1": "E9uEDsjfwsxPE5fLADRHSue9BJQmAjJZKKjN2AAM3Jvk4tgEqFtry4ZZ3eCxttn3f4seLZ1ko6TomYufhzE5pfM",
  "key2": "3jfPm2ZefCWxyDH1mogDGN4JvZGhKTBsk6YAPg7scM1wjF9XtXtE9YsHY5UEvyrF2d2KNUDvhexfcUndyfKj7ACK",
  "key3": "r8ZYEKxYhPDKHAY7vdzeHhKZjKFk7sUxL5pvxe4KY8wF7sDNqTcMa9AnJEEdf4wujon7kgAqkr9yZksrQ2PUjKE",
  "key4": "3mCs8jFtX27sRDASgAYisqtUmK5tmr5d2NUivAfSEXUhp1V17o9QVJ1xU62w6rzKiGVdRydkt2VbugfRLVhTKsA3",
  "key5": "5MSK1TyBYDA24v4kQ4SEdSReicEh8U2fdfu5XRht2LvvY4BydEg4xJKZcdnA5KvoB958bZ7vfg8NHuRXHZ3pc5xX",
  "key6": "4wWKgWGdbpQLqMCXahAZYXR6wDkxCo2WtufRpkrmFQhJnRDshd4miXgBN8b42qXPqEyTFnjz19duMeThdHH2vGHf",
  "key7": "2V6zJzeFFjmG3xMMu95jahDzftbsgwn8NaTD5fhVScs7AfQUTm1MXU1q5M67A7tMn53NSHw1qAMPKQCeQKUjC9v1",
  "key8": "33KnB4wB3Lo2KPjVU22UUaKzztfmf92cZnUZRH22dgiPx6fpBX9e5q6U94PCnSf9euCnFuohikURgdm1WPNTBFaz",
  "key9": "4quxMp4LyGhh9FWzxGvL3Zk8ihCGMWG7LGNs7fVBix5e5N9xLNDfiKRrvVW8o4PQ5oKGwWFWEzErvctfbHFQBTK7",
  "key10": "4x1feYSJ7sUj7fGPdqkvTjoF5s5VSvEPAKdGNKW6gmdozJXk4rvUnVZy12G68EEqvE2QhBkM3QeGuA2gNr9g6oX9",
  "key11": "53bi7GNnQix4oLdtEET1bqs8wezCLrqhC6JDhVNuKLRt8HsAos1RjBRYMnhEqe8mj4RfgLKj6qNyYxigdkymjRr1",
  "key12": "4hG8Ds4fPkMBnfmGeBsdMMKneiQ7Peav6MRMDTqJTBKEtJ4WtDZz6mBqESTEqcAfPxHkVP9A6Rqvpfsncd5uZRC9",
  "key13": "3SAAevNqZMd1MvPQ2uJaiMVL4rw5rzkHV93dqWi7p98PMpwjDFhtiVz52Dx4Uzz1SLbfkcSEMMDtWMUNKzppyHUc",
  "key14": "2q1N5Qk9pU6HxSL7kHiTn3vizdjiuK1wjgyL4fnoNHNHJdGZNxejQRmEBPVUWLzAQqgvtJNJgrJLeAcojy2Rojky",
  "key15": "ZKD7ZudGC5sFfguM9KuQc1i1p1m5DZ5wqQdPnsMwTfeofxB4Cn9iLmyqJSnpQrpk5M4Q2nyrMPXLGe6X3QiEpr3",
  "key16": "3AQy8u2vWaqNEgMYy2JHHh2kuVMiSiUCcRix5o15Tc8bgDeQebqokPZkeknFMB2uhrrLgy7A8yf9X9yx1nceCfbv",
  "key17": "5bfAeLutULBfaDZEzQbdJVS7NcqnsDX11dqMLiRR5DBdnfxkuQWdugBYDac6C5GEnVMYJuJn5JAFcGkdRfS3zUab",
  "key18": "2vTBJthDSRMWAbzumuTgiafvHMwwohdfcAEcvtkwg3kjhLLaDyfG1XYxzQaSKzxrN4uu7wkR7MSQCXPBMfaW2EJJ",
  "key19": "5E4tHwsPyeZBv4UEnQqFXjC8JX6F4XZvRR5hpapjrgjxUvAm9D5ZnF3fRcyRC9JAxXmHJ7iJuuzR8vdELsTSh6X7",
  "key20": "3akePffUncRyfRfTZGoxMkpHEGXwndHStCEA6aiSQAjEmoEcTBNQCuTKB4yo3qc4cqnz41Wbh5pbcFPH1G3ThXEg",
  "key21": "5DSWNELx7EpA9reZ92wyruD57EYVHfjY5k6rvP3V8SdF5dDhR3wMxUXcL5xuL8NF3RL1iyZJRQQcP3sZXfuyDp3B",
  "key22": "43muAgjhkLgyXi63ad8wAHLT3AYZj2eJXde9Xf2usGU98YprXuuHMHGSvFq9L5ceRV1jFnES2guNTHTcMTnK8YE1",
  "key23": "3tVDLxPJw3qWhK3XPDZtZ49Nw6phyTb8AgS6rjRScfvhjxwDdoFd6pHi5mfbh8JyKvTftQaaNr2dymWC4y1vsyo",
  "key24": "3NX9LAD3AFChnBK6dnrp7VcLByN5EmiNBFPFuuyWZFaAWmMiB62dJw6UM3k72Wh9bbYCj7GYxdrzjdSyrebgkn59",
  "key25": "36fYLvfqEWNxqcKXwE8vBbD8B7hfsQoSefPnBSCiHT6YSbSD5e1ypGNkxsTFHY6NTMR67P7oqjazNrBhzGeNd5tG",
  "key26": "26G3TudnUkFofi8emSytWk5DWQE9eLZhyJCBxuRXnh8EubPWQuGiQr2Cmbk9iTwTBrwwS7TF3YLkQGp8A2GFbm3b",
  "key27": "5hp2YkMuF1GiurMEg3yEhFiRHsrVDpjpmjgZdgzUXHGnTzMehPfR4TxsJcCv6rD9hcgGiq9ASBpLrsUksgVxibWD",
  "key28": "qjA8frBgsXY8QBEDE5U9ASKh2BNfqTX3pWdVK5NCb1Wj1AQmET7nXJx45J3REf8QN4hBShMxoqPAo8jmhaaiwdx",
  "key29": "35jnhg4jhT5GePQmzCTX8tQRrAXqrC6fm3KWgSjisUn24Qj5f4XE9EEq5fA1CXmsEfDJ2XTHno8fR4yGNcPfHQnM",
  "key30": "usJuaaFYPZ98dQwkY3idE6cABW3XViCXJJ6ovyoHSHPsKKbup3U1V4SvNXu9ziBhh4hY2Wi2P6y4F6adRuNULfA",
  "key31": "3eFSc3WGDXV3rmqTCtfLhCAFB4mnYU6JsoSXZhXLYy8HdCNqFfo5DpoBZwtSF7A3S8itFJj9keu9woAFK6KshhuX",
  "key32": "3s6CV1UbYxWgypYGzQ4zzXAVcwEbafk9kpJTQY11CVEjdXqKBNVTamS3G9V5PMjBR63cxE1k1Wj4gkUDFppYx3cK",
  "key33": "5rLCFih8pucVouzWRsgpVLdmZkHbSYjexceT5JePtf9zaYkGkq1w3nVf8YruE8b5SRiabfBPVN3HxBS1Li67v6BT",
  "key34": "4UbyG1A6dY9tnFCHMJXvKRhKFHGAX7PTzRX5Z3tvssrPvKzajET6M1L6ZQcedsSyB6jsoo3xYWcaUZMwiXeK78ar",
  "key35": "4op1SeYzJvneQJ2DjDfP8yxysY6U4LkF7uZR37YE88toKrRKSotpYWmxKMq8Y3o7L6Fas8pf9fYid7aTGXm3Buj",
  "key36": "23Agx4mPVNjMxAwBvSM8kayhaMuMHPZJwpuFmD1amY3hAvwmD1rMjFzeMKaGEk4RmqBj56XUMsn4JuwnBE8mtHY1",
  "key37": "4bnuk1EJTCN8RYjKCKiGnMXjdGUCjWnv88sKXjKgp1z3U1g9KeJnjKNtY85ijewQEbVd6YaumYd6ZZSh8XAkQFyN",
  "key38": "tJC8C3qQBbNUq3TbYajQHYW5AoXi7DAnoco3a9s7BqFAssvfg5UeKvLxgADdcvY6wvP2xbGftkS8NP4xkDnKsDr",
  "key39": "4ttAZVU788C2GV5vUCCvX1EkRaHK2ku6kMVV9XvxgmqGoSoior81RtLgCQHbe2N1SZgZ4sK6tQnx5sGMKaeZV7yb",
  "key40": "5QDsfZ94FvrRQ1qiP6BC1ZgFFg2wW33wLuCe8iHVxSLcnxYmoHzre5WhQvVPS4aRRgeAEnknoYdB3vTMAsucJv3k",
  "key41": "2UWgAMZtjtnDn3bBuSWAXDfgGTyqvmxZatP9kHdDMMfRAU5CCU6M4XmLjwDqgqscNYwj4x7ERw42Q9Znyg8CkUfE",
  "key42": "2d2CkiuiUVDYcsRxwYLYvnbBcr9P5SfXPQ1KTQW5rHoszoz5qmSpXZrdZJikRgrvE17NMovf2gNPexZ2wgh5A3EB",
  "key43": "MLzCiTfmTNZcDDTbZaxzErsrucqgv7tFe3btu56UXWspnR5h4nxpVDbiwY2PtV2R5trrafRVYSJNWtCbi65sUHy",
  "key44": "5ZMvf8fTe5rN1GFKMemfQykcYkLVDrFuNs7QWcyVd8TZBUbdBnBE4M8WCR1nBhx9oh997SkfGRFg4tYf2rtGi4RK",
  "key45": "3XoSse5ULHaxm7GBnL7ZwUc9MG2cS5wVxeHMniC9RzHsu4GXC6DT9QzPfMCn1FbuWo1L1mhsZ9oPh2nvKHryRt76",
  "key46": "3aywErAhypobicHYwtSDEWhWgCTxsWbTodkPKsEAdLsgSxgvfsV1jvaPpSd2Rdk4L95ufhuYFKbPCkdb29B2xLAY"
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
