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
    "44fUpmJBmbHZDnxfsfSLdQgErxR1qeBSYgsjoc18Vio6u7PPAFpWvfg6vuYpba8QjAPpm6trsQJ6zCjoGHiLjP5D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fo5LEi2yL6fUU3sZ4v8pb2bx244LQJ4h1M9GPBBPXYNWHKn24NRgyetVe7U7ksRjSCwpptWgt1xyddsj8j9B3cq",
  "key1": "49XuhNrbrhYvDpGLUKJpKyNNWKBSiyB7PnWRjcpEN8QzwXKgmEwghWzXFXCSbQmmnWW6hBcbkpiBJYV91La3p6Hk",
  "key2": "3EZoQRezLazewpB44T1ptNx4DA3MLgavDK9B68SrBhtnFa63bB6GCtuoFAzPVxuiJfjnSWwUvQGPUz8MvA5KuURA",
  "key3": "qi9SJWQjCcRSm7dZxLVpGspWaNmuV3ssMa4zMQV2mPWijhCmebBTvnKD6ZaWgpbrW9LnhV8ex5suHJtApS6Zo7u",
  "key4": "3ZgusWbfCqXCSSFLZ3stmNw82iLPQzhyAgEyeFRv8sePP83myBNkGojY6MFQ5o9xz23ghioxqWjqL7qB8fFr19G5",
  "key5": "2FukyXmMY4uA1KKm6HjpNv35GKBk3kpJCGZeNmha5T7d8MdJthZytkjvso33ZEkCaEUeZoy8Qq4F34SzxnAYExpv",
  "key6": "2DNsSWFdgHMq3FbaYQFw8cDcCvgB5u1Q78cr8E3a3HjjHvF8zr46yCsxAX8F1xZGPvT4W47bS7rLitK3ymbhyubL",
  "key7": "5Pub9egCnmMiUgvtaV594aYkT6BF4vnDc7KgeJYStnYPfFhQowLEDsrDsp3nZ1ejtcPTovaxnkxkvGwcFMTPz82N",
  "key8": "4tde4Pxg7sVKW2z8dnLUqx16X1pztJPXpwNAdQcvhGeUVkz1Vn4LGq7a76Zw7BPuyCT7n8DTtDWESRz2ULrrywJR",
  "key9": "2S3EL9WmeNQg6tdncdEyarHsAkAFFDTNHAS9bbshXRs86zgbWfmPcJV3YGGWV8aXSWeqRjDLYUquZ13X87wLjhDu",
  "key10": "2UXVwPZNCn13GCRmexAiZHrYv5noiFgMEkARVU7iARMG1vFWNcbH1dD8vvFiMhwU3PYyojrvLSLXPS8jycVvTSpB",
  "key11": "fKmhfsgKuGDRWjFJTopT1u1gSqnPssJkazmGhMr28dsH7roEsWWTYLZTShro5yvfzo7x7EmwaRnduBRei78tw8F",
  "key12": "4oGM3tqUAgsoPFxvV6DvnJifWnmEud7gCWZwBRCNmBimuCfAexKHrBUANLYqhmpr4FW5MSTxTAh2XMBXTue7QZUa",
  "key13": "4iSeYnVyAkRGCKaZFrSojBzVbtaXQcwJRaz7rUPjQZ35t7EYETo6e49c6Mtp4QLFCfTSXX55qpiYJakimKaEj7ig",
  "key14": "fs3P1gxMdoYdmgAsshqQ7AB86S6DLcrASZCCKgLuFAimATA68AsgqPFSVWqMiXPM4MntVndU28zHfig5nqouFwu",
  "key15": "33ES1YoGj8MV3UhwhZEFbRmoeYDe1xvBab99fvKLUvDGdrFHYZ9NhyKfk9sL7PbEp5qWHhY12HZ1ZUfTwaWrF7sA",
  "key16": "3TZJ3Vw7WLaL6LjSB34RwbE5TYZsfYSijzhVhZck7AjKvY4WfdVFEe3gkhTuBpTkydNsezryvrzKyYbAkvyvCLbP",
  "key17": "3ji645QAVZiK9Qj74yxQbKogC7LuDEG1b5VXf7BeRwgSmPwTmmi9FBzKFt226H5BDQrmQQLhcgmSf2Lkfnxfyk5Z",
  "key18": "3KDk6QXfcdxhormau6wehRviCcaKKdR4SQpLKnosJwke8GLWPcaREYkRHNHWMRu5TdtN9QfkURUx4GJQGJ2yJN3u",
  "key19": "3qcWDYeu5CnAfctaqYYCCcQsZCud2R5ruDh47Ygobg7SVXKfnBoiyKwhseX8VKHfhX4JLvjbnuZCb9vjt4V9q8CF",
  "key20": "46WAaxKoUqTju7SgSAVXCNYFVYJZV9xnCQaroQkgdrYJcgBdjCXV5sqRXLjjjNgXstCLLgBL5gD7Sakfv8ZRDd8x",
  "key21": "4q51CgfbnpJBcCpNHN577Xh8dKXjNbwVdw4jcqtN1hMj7FoanStk9GPtv5T2hbrdM5kKfbSGDSNcPpwJYsformgS",
  "key22": "2wKpEiRc9LMRCvKFYranZy57eDoH2W3kUJ1hjEUpWT714gQLrMsLeAKVeTmz6YWPHAY2PsP5fVe7pHKz8r46ziB6",
  "key23": "2km3kPUeyuHLxVyz6s9dLHZQHpKeJdh3n8hKg3tzjzbBfmwEUedH4qwrBhc42VTcB6nCm7qW3VRqn2moEFxHSNyV",
  "key24": "334Tr6K6profgjdzKkQuqZVPHquLwgZAw4tVBTa92AGzg2L7N5aQEYfCXYyHqhGjVCum1bx7dpZ7NGasn5UJ4GW2",
  "key25": "S5UH6sPBTFutGxeZiyWq7Y5U5PEp8YsUoK4fPcSgQ7uPoBpF3qWx3BuRusT54xSUspRnAyHMe5KPW5xhAA83zQy",
  "key26": "56PdExvdpQ7ksHUDUhWjRy1t2aRrRjUBJkyDRGXYYQbnPKkHxLBAoCVadu5Eo9vLbkmEmMwUBfXJqzPWPrXLcgYS",
  "key27": "3wMCvzS6VikHENgGWxpGAHtMBuA2KNeGquDiTGkPDhqU8KnRUYKfWJWMwMtjwLKy1zbGTAuCYTB9f9GJUyrzy3tB",
  "key28": "2vVpxa58zh2Fdjqy3C2ne9RqikyvQTJvcR5JZ18ApZsxcWyq5w7yrWAJkeNuAUV8YQ5LXy8PJ9bv1ctnFymWL3HQ",
  "key29": "9RAwUFFhksaQDDVmCTSgCbMf2mmTFarJUpGjQqHJzD7E4FM18iXno7LZSAZLspjtnFUitrQZ3RDerWenrPWe98f",
  "key30": "36pcTs83u3wqFy1Lfcit2rdj9hB4LXmhpbRuD3Na77tsX8iF9LeFqmdJnbTgvZ5qYMWC2g7nFd8yv1c34ijN1ijX",
  "key31": "4p54DZLzN7Wpv1QiS92umVSbVNFdAJK2K3kAcqF95ETGB5pbvtXd4Fq4dta3W3UXT61soBXjDjHqWBmJ3kbFgDCa",
  "key32": "4htQoZ5UjJWyhYTSFESmjThLedkWjRrsx413FsD22CYYkn4xA8V8bZ2dVfHPXYfHdRtSz1ndLBkgmnrx4LdPnaqR",
  "key33": "2GVEeeBv9YjXiPjb2BvNYxwNdJ3vJFwSzo8VwRff9ftfJdAbZH8bGoRG5sRR3uiNrLkx2hRNtX5PJvAXrwgH6iDv",
  "key34": "61zLWwYSqjSavdBhPgeQ7tky7uwQJPZoPLRZMu1MNCjBXuLjBerK8Rkgre3JjZc7VSu5F3fLZW1uJMFhk341Q1YH"
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
