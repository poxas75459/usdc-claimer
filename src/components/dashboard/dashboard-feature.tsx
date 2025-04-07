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
    "3TjMHyaHZ76wr9AArFS7V41oXEtp2DTJfXrTciNhNWkYxyKvwVhtbKopCQRR97vUD47Ma6a1pk3Q9nsSNFLhpq7K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oY4Zp2e8T14jRhkrxXncWuxGq3BdURVgLwqoADUrapYS3syz8r8AfeAKSfYUJoncSfFbw2FsXfMktzgYe4diBY3",
  "key1": "5s2oAadbawswQTHc5cYs7LqrEqtPN93DSFE4N1iGECRKxbvVuQi9Bkjvk2DUd82avFNt6kMxq2zUj1UP1cpRyMbQ",
  "key2": "mbXin3tAZrie55fNyVGvyn4GWG6uNpGvS1X7BCGxTXASwmv4yxRWSpULhHMTwaj8ByS3rYvmLz1GC4c1MNYnwWQ",
  "key3": "VKkXm5Jv6Dd2jTft8vzmrVZNwH7cwMrYBAweTNYLwq8jA9WiNBWrvbcgnYVoMYs5fEaLBmrVGEMFfpX6516qMW5",
  "key4": "5pTmEQrRMtPuEJRB2d3e7aeHnnaEK6Yb1ZG7CeMqnDJn7WdENBgyNcPZQGkBoGQMPtgTAY6Vn5YLLvA4tpBS9N7Q",
  "key5": "2tKWEGsWk4pETQiqda9iaTgn1ow2ekBNXXn1AEx1gXZ8p3wVBixRUSvrS6UKaz6KifMc9vzTtiTu5QGVe2vAzvDv",
  "key6": "57ZAp6DwVSP8i2r4RjuanUo46rwcr19HtDmfU9EJiVAdL3BNrkz7DKEVFPDwLdrab7tot8EqN1DNVhMKRkWeExrZ",
  "key7": "4r4HgZKCtSQJbZvMr1G1yca9xF9emYjCGLT1L9KsQg985f8Q12Sg9hjSkNrfBRQP4rjKK8waBhtkabTstcPPGqH1",
  "key8": "5yfWxqWGu3DYeqBY4eBP1RbbB6GuBp9STWRYPUzmpZShsMjZyjujk7iCfQFh7zobdV3erSjyCtaRckvpwC53ECyd",
  "key9": "yMjSW4cAdvb41gUBDt1LdNiQL63KVpnWBFJGSzM8k4GqWsFmQw8w6yJpaMJm51EiE8xJUFP2XCbFjUc2LBa4Y9x",
  "key10": "3qNivF8mxdsqvejPfXqvhaztu5QRMECWMyzPcKpWkuYZ3vXy2BVnimEFEXUQ4EEmTb1JchLYDSLJhZU6jnWYuR3Q",
  "key11": "ywYZHzQkxfryj9JsGjizVTGNqeSbqCjXbDPDsozt4EtYD7JFpS9erdXUy7uwd741zbxkhDCYQ73H1FAWPxaDuBJ",
  "key12": "rzXFZXNFdrMM7V36CysE2ihV5WZoGC2pm1ktJK4kVpZJTFAsiFKwMn8WZpMYiAtApt3RJF3u2sp5m8gN5QaRzqT",
  "key13": "21pWJdLggisszQfyUd2arSZh6J4qQqQNZSpuHFknKACuFSHRRUZMysP5CTbFRqfcxYYtTKdUnispyC7kqjjFvEAW",
  "key14": "64mSREYBDZLzSs22DZ5dDqdDmL8hoMetvnRTEzzLFXboUUTzXEd4Vq3C7hrEmq8QbK6VNYeKfuXbiHmCR83mzfRt",
  "key15": "64SXqosoojAdkTsPACACUwA2o9JCA3bwfwggKvcPL9mus55tpsRV1sdPdWgK9tK4bF881dSfKZ8FUo8GUfbabaRL",
  "key16": "2dW38UZxNrapEwZrc49aRc6XA4DenNDJPV8cZNUpizGCB6FGKd7ULQeDTEB1W3eHDNw8MXew43GgBjnUH4vAfVm1",
  "key17": "4TEfcY5RNKYoaSmEDDU9dAyjg6nEvM4NeKJCydvwwS86MPFgPJw95NVWnYruHU1SJ4uQTUL1aJej9WrB9k18zBhp",
  "key18": "Ld2HymBih5SrBvn6m2V57kWU1YZ5tNkfbEY3wGoh14eTaDSQPTFyiyBFH6xjL4cyKS8jiPbpQ7RDDhYq2fXXVeq",
  "key19": "2Kctyn48kHHZprYW5vX5UFHk7Ac1HT6hjEXqTeyFVvYRpJLwX64rAXNJ7Ho2S44XKMvGDiqHpxjos913QiVN8FSj",
  "key20": "P1ekxT8LtMSMzSyTsFCjsrWjwrwZq6aUPJ8LzshPKBK47TxHyB54qVKJVnNUmbH6YB7oAn4kxPZxVMx7fm6weFK",
  "key21": "3vm1i2uxoQYDFceXaHZcRGYS2GjoXQncVbitsdhogF7aMDLNZ3X88ZY7jwKVFGycL1rBK8Y2vMvY48ab76Pf3t6U",
  "key22": "59VBwqnbPEaUxHuTRz7ZHjGgNdYhJsBonhxqqge6WhChNaKxLKugrnvmLuhjwhyQHvvdLUZ3CRXi4mWTZ7fj7pzU",
  "key23": "EkC2mDDVPk7rpzkFAa21YLmbD4J74z9Qk4Q5CTNCczGFSgoLHVcrTDCJYjCphhphjthqzMsXvcKy6ifPRkzKVVn",
  "key24": "4HDGf38PjcVYkd6rSx6FpCsYGkSpgoyiSGEnV94aG8CibpqZ8X7xNBjgTkuY4A7ACxXWNZhZRH8Uo7XAW9jBMYGy",
  "key25": "32p5Q8bzD5bzJqX63nWNv7mXc5fJHfzk5ku7E65N7KvZpsGbVqFrFBX4XDz2mNPrraJBJX59ZL551bxuc7YsNtr6",
  "key26": "5TVCdopyC4qQR7obCagVNVqXUS7aUeFnfAmngfgDmTnaJK5qe9FpfBdneAB42QWpXWgVXuQavqvYMnJNYX8nJxSk",
  "key27": "iSVoiWRju8F6yvfd8D3wHaZFWc8V9XTbeAte2qtNwu6SnfjsLFvhmnPU6oTtogKQZc3VTqGVFD91YgPZTEYTY6e",
  "key28": "5kDcmFrmv1fWNstQwQSFP9gavfuFm4fnMnZdCDNJQCJTnyh3Vtk4h9uVwZBxnBoThPBb16nD11YysEnSGwq5gjCm",
  "key29": "2AhnoBoZvHGZ22w9phcxm233xHrTgwkNAtZh7Sahn95EyJdk3Ezy3ZUZf4ciXGsCX9AtGgtuWKk9veMtdfPujpKT",
  "key30": "5FCNAZWgzc9mbvKjioHr721FUwSLUQdUiWcsyTYMpjTSxPpxePZHKUWSkCt1nFw75HnYmk9fWHJNApmGmKwLETK6",
  "key31": "55n9vBfmYtqTC62cnNKx5t8enY46eV33Nc1p3cJaRpgoh9pyKGKXJnmTdXxQHubSBSnCwunKVDwCDTMpA2aBqzcn",
  "key32": "2Th36Vdku8cpj7H9zWVDzDUCdXrfmhjgc7vxVppkrxFJQ3YZqT9N3JC9EkyapxEQBJDW7JmgoUZxtyRUq5haWTzD",
  "key33": "46TNnkxAkvjKmmLc8Y7z3pfeCHDvYrRE23ejUvmgC26Tw1d7A6tK22Anq7Qit1L8HkRovYqWjcLLGTAv6VPBqUNz",
  "key34": "aFcFNaTp63jk2J2pwdQ6dJinQdtqttmVXB8zR1x2jRTUyX6ku8YDhXRCSKKxeEcwCuEw9xPUrf416SVTuxdgUxc",
  "key35": "2z3QJiDue24pXfrZgHeQjXX3pd9oWgWBJXTFYMt3N4BWe5SgDcMnmCm3tM9GPoyub1gk3VVURPJUsp5S7b214C2M",
  "key36": "2Q2uY3J18vaC1NPuhWMJbhXNFqchSPgPDvHacsRTSPFzSnKMGWbJGFyvEMtyNAtL7SBAKWvrAtw7pzEoCWaMiEdE",
  "key37": "3AWPGdMp1YavKQMqvcmRJBgrgNGshr1u6zWt4bkmoRk9DoC8RgMLBTyF2ZZyzdLq9f5KdXipyJtwSHbn8akz7Qba",
  "key38": "3tWaa7m73xE7cASWt5XngRHFXPvdP2FGiR6aTshBPBSPo5i6yPDcLH6DaYQSEzgQkRNp5qnhuPzu1UMG5HwTQuQV",
  "key39": "4vM2gWFvd2YoiufY19Vh3pFHn2ScmDbGqXxHbAGxt6sMkNL6nbG8mp4VqWHZFgZ81YbsKqb12kjhcbCKeK9jgtU9",
  "key40": "njsL4XFwoR5VUCCsJYAor3apCGycN6AHLfoNmpFavXzLozK5aMSgzSAQ9zLEX97ZcykLwGHJBQSDfyXCtdSckjh"
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
