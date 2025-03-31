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
    "34Ge7q54Q82L1EBHnEjD9XxDZL456A9TQBNYYKvRnenm2cswtYfjSCZ9LYbXi9jiBaunspAqcRoLaWDKYrCLrC9n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mToe9o1ZeAwRuHHYwE15Dy9NMAxMAaNgoaJzGfRrxGvAbMptW9dRc7M1AASr3yWTaYdrSie1gvH4Bn1Uet5nNbS",
  "key1": "2wFj9QoXsLCdy9MBP6P7sGUfD8wHPbXSpQK6AhCd9UH8VxpQxLkfZws5YLWWRpeM6vHbuLdzE5ohFa9siRSHtaVd",
  "key2": "5WkwiGSxDbxqoC3MufjNVGWMUoXvYZA4YPwYnAVNMpH1m8nupwVBNMM1e2FFUPDy4CFgauenRZrsNXrZo5mevZHV",
  "key3": "5vUpsJVFzdpsrUwhC48kTyWtkHe6xZLJVfVgPdxzjh6tgEkaHeFWHCUYgGAWPVPQgJYc1gN5u6xqVoVKgJfWewQc",
  "key4": "241zTeMTiHejPe8cpE3jhYDLpRaCwwYJvacbXXr3WdT7uZN19zWjqGrpBCKuDUcZmyEWacMwTM6aF2atAtvjt386",
  "key5": "4fBVgaE21Z8Nsn8C7SRdBVgnPnkKf1jwcmsFhQ71XBBveCH2FH7Gz3rctbzFemw7C3aeysVHFtE11wPz7eoGB5ie",
  "key6": "33RZCBVZTfy3UhpwLKpS8VspHu5XzaesbT9JkDtAbQnPrc1MVRQTePKXd2KKjcPSbFfvwZWzKW9SrhZbM15KWYqz",
  "key7": "5cbNWjucLhSULkpLLLQxjK5uiFuQF3cc3WLvTbyLtk17ujeMSoMVG9U3oWR1dFtyqZm9jYZTasvvhqHG247zN7uH",
  "key8": "5mpQ4Z2qSySDA1zRCuuBmFqMHmjJRUJFG6oiYh6phZw2qN1fjyNPdkxVBQ8hW3n8w8uwnCL5MK1Scr7fJ4BELcVP",
  "key9": "5fFqcG8CVox2at9mhGErpExCwb9cs76yxLGH6Jkbbprrdnkqa5dcfYm1S4rA4PgYnJk34bjiLewEAq1NdNPk4k43",
  "key10": "G5adShrQHPhFv7f5Rw65KVvEjKiMkxmtDqhr8RdVj14pLYqvYxQPWKwN8DrUEmMgkar3ooBc39TomZCfc8bzMR1",
  "key11": "fzVWVZmhgxoy976PB5JRQscU8ZFRJgY9mb8x2U9Eh6aNZJ86ZWue2y5DkSXgCG8avmZAMvyg7vVT5Qy6vhYVdDh",
  "key12": "2j9E71PYGsovc9HwFVBQtJeNJgR48eYcALcbGvGPLwpzbSC1TXUxN9KrvyMXPKdExHRjUm7sDFMMui6XXzcG4Zrg",
  "key13": "3DSpEtSjL1x8HcAaTC9MZu6VJzs5VwgZ4bgPb78vLfza6VwfSXLgc7yF7mefqFPAGWW5GKxdbaqWzXUQH2j8V4XT",
  "key14": "4wVA74w31pXSNG9ZUP8jSv5gQfVtQWnoARTE6AWhR8HaRa21TzWZGBMrXtyq1WXjHUQnVFzqyQyrbK7dbHzq2nc7",
  "key15": "45KFcBsnQiR88CHDoZLmeDUeguzL8EAFtCoiBRi1xB5erE47UNDsZabKqn8iS64aGYEAHNXr9yxnE3z2G6joKW64",
  "key16": "124K9XBCzFHtx9475AsfHgeswfdNTsMLvGjSnuMD6Wrci7r5Rn5rTDrxTsJFj11xz6WJerjqvzVoX44nPyN8Dk7n",
  "key17": "4hNp5j3dpMJAU9peLe8tB65v6CvNxT59d9SnmMNqJebokt2ikscTDipQ5tDwE6QJQjvkUJfKeDdA1ccEuNCuqWjw",
  "key18": "8LmXB3KTeGWWakTcqgdvbtbmAjQcEvaYipZDxqsf7eb5fZWZo8H8dCCHfVA9ycXPUBx631Xr3eQgKiwambWvzpv",
  "key19": "4uVJf92CvfzockazdX1d6ed1iVJ78Gwkwg5b1NUMSwNfpnYMn19eTmM87gH82JXLT2yBSFHjZnYz3Ttrjy4fHCeU",
  "key20": "emw5LTPsNDWPJNLXD8kvw7JY4t2dm22PV6ap7iZvhxWDAhHdBqdBVkhQqbkQ6CBGfwEBsMLqfowL62uvCoaDmdK",
  "key21": "4JB2eJwDDZ4q7uqZmQJ3R3cWKYtyyqPKtw8F4cTaKms3KJwgAfxwL1Ksh1pfam1ESrP1YP3521wsBUHNsPi34ex4",
  "key22": "52LuFXZhZrRED14L3renTiFNntMnfwiYvgW3J6SmDXf1STbgMKEbq7SR28LyyoKqv6rhRvrzGB4RzK7WV5JaYyWY",
  "key23": "4fLqF7gFVSDDRZA7VXBGxEKjZimf6EoXBDESQaqAf1ZrAtSRUmx6aF4q44NWw5LQZxxvA18x8VZ7KJif3JY3rPSU",
  "key24": "5tCv6F4ZcJjKJy2d7c11GpvSMWZ29GVQF9ttAS1YzYnu4d8Hohn1HXDsFdCgFALa3KzaTx4n36kTgdmPNW3StQ52",
  "key25": "3wo3NRe3bXsDxU4jGpDJxJPBBVVReyDJeZKqbDFwzgH7qSfbaixhyihSmZhK4wLVCdDhsR4Ew83j3bqTmAdF3J6h",
  "key26": "3bfnBfU19vgw6MjMRmeoEzgcH8dKdwgGMTQGWFUHRueX2c821TNsKtkGyzDpJzT7sSrMrC4KXGnSgSaURnU5kxqN",
  "key27": "4Dw1pwtr2VuiY1Kmc1cKoGnJ6bLsqnXWMGVgXQGjaGVRcd7BKt8CVZZRcvarvAaNdr6QJbRgYVzAz1dHgrt8bEKy",
  "key28": "9GMmgaSosAqxRDNYgkGUH6Bi3iwz5N8deQ6ZLEG383ZEK8oYhitrQYRtfqCpLQCGb9pUCb6rMUkGgeYn8yRcUzJ",
  "key29": "3rQtxC7mZq2iM3VBzZWKL8txMnZPbDsn7KjvWcKJtwi2v544q1sxNE4UTkzC2YfRzXNvqWcxBS1RZsjwW6Haz5kf",
  "key30": "2ypaRQnWJs2Xycqpzspnk7Nx72dTASP6sRp6MUpV3oU8hEACWGsWnYetrujLtM1LWagx6bh3cRaRRz1LXHFtdGXJ",
  "key31": "2ku63L2nY68JNPVYLtPCA3wy89jsP3D7u8JuLnKRt9QqAewqqBkbTJRZNVvnUn9GhpHNUgD6FFdVqqAFRaj77hKD",
  "key32": "23tV4gxiJKN71EKw9CxfvTGbVSxcFML766PTKRX6QeKi78DGXdqrM7dST5gkaLWWyTLYyfeVqDxLHsXqRqaX7Zu3",
  "key33": "pyHceVbUn1FS9FPVzGAAcXKNd6GxzYgVW6e4v6j1ENWBPy9wSkibfcCsuhHLmFqjWQ2he57o8M3kHnqbMLtj4fJ",
  "key34": "QCenL5EAaWNT3UR1ViPcMQxEyfZ4midzA4dGGdhVS9cMhW5tEMuCy7pZr6foHCj6Qq4QCy31e5nJSaTrVwPRL1k",
  "key35": "yfCvip488VJY18f2A1AGW1cyStSEws2abTZfCHDPEmrErcQce4r1T5572BCTWchWYyFDAM2QzUfnFgmGXMr7Bt7",
  "key36": "4ZZEfVTXXdUseGjhTtthQinBVaiYESMZk7My9XnkdLz2Dt8fKSJQbB51Z7TyLRLdCMg1ubADutghNXFyNtDTANnF",
  "key37": "5GpVDnqRoisVtwJ9vWCxMP5VkT5LQqFMev1XYCmgR1NUTW6jFcurKjSzQAD5Lrz4Vrnz9FY6uFYwrC6GvYBavqD9",
  "key38": "Acxcu5yGgztTMkr6ijcGmLRovgePfQVCiX7Qu1BTqLPapvJaUnadtB6R7wx5ik84bf9Ss9FefVJXw5DPfJr7ofY",
  "key39": "2kHPC1EQSXnd79gXxDLfPhhiELzDF8ALQE9K7h3Ctb2vadWXyYLU6yJjsn7GazHA1RBhDW1eC2mV9phZGUmNox9W",
  "key40": "TMXA7BxgFwtNhz9576z4edxDQip53QNZbYnM43ft6Uk144xXw1nuLXdyW2huSpBUesd8T2pidEENdZuTXx9rv8i",
  "key41": "23BuBNk666BVCuMR46ufHVMSxhKw8gUFZDaLsVGQGnJPPedimTyucLT7Db8LDAwi7X9bV5h6FsNZVtCirx6ce7Nb",
  "key42": "dH8yCfDkh6YnbPnJfhERCjbUc4g2u7sGefhsbtAjsdJQLdFNC1jAV1gg5XF6FPhoaiC7Bg8iWPuznfF9pSMacDr",
  "key43": "4pTYuJ1HqsNwwhY8ag5MkhvbKq1JTj2qhGtD4jAguqqHmKN3ooUrw4W78XFDu9SmyYXiGiKDL5WrmCxxQGeh2J9W",
  "key44": "3UQ3GWdMt4e2wJ9zeJ6rJtwb9hYBDx7Nu7DHE7ShzXvcEJAWh1ed5UkeN64K9dtgc2ocDeXgwM68EqRFfXiHpUF3"
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
