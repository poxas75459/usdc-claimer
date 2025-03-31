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
    "4MyMWoTTqqfmM7tbxHvTgj3rUZuF8oQ7k1WHG1Hv2fDS918BpC58VCFsJZB7YGwM3ASUGunwCpuM93fm9SUf1q97"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BeT2j2wU17S42KPoeZQh2UXhTFLRfjx57TtysDxPu4ftqhwpiow7QhaFqNjHaE8SEPjHDbRLaUQq72qVC6tLH4",
  "key1": "DhN1qysHpzibsuzPDrRDNc7dxMjAwoGFS4RA7cyvuC73kahBBu5iB9uW5oaHUU9cGQkFzyNwrokG9GhsN1A6Hax",
  "key2": "23PHhFLayL1U3FbGcfHRYp9LLjZ5pr6zvQ6AAKTzr8f7yFCXeb1LMNTzMSCHD6HMNoQZ4vCdEbfNDXf6j2BvoQPP",
  "key3": "5U69kyQVKJ8YA3pCeHvPNXXFevBGFyTQzdoXM2Lds3qrr2LAAjJREN8r9ZgE9TQMjCm3Z767RvZnR86Vi2YhkcGp",
  "key4": "2mt4FDt2L4wrW3KBrpPkjx5ykKqW9LDLEEBmPghjFP2g9owtdMNUY4eSVyfn3xgBmu39xsuuz5q7xotVNQCgxsot",
  "key5": "5J1WZjiSQ7LmZqNyrrr9WwBHu7u5dDcKgUx2NfHCTrJmgHbW6w2gsANYQQzhwBKMZ4cKiGZanydJTd8XtVLahbUw",
  "key6": "2A2wr7LhajLXSQA4XiYcSdQBSQjqTzRydbv4ES9iQfUuusfee3RcPgvqsomQWHQQ2UiYxfghgzVbBSj9F5oNJzeh",
  "key7": "61ubwoULYfsF1ccszDf6RT7JWSXKoq9GvEpFHJiYuHDZAnFzK3GM3pz9uTT5nS3xT8zXmvvbdVH5xCY8skneTAT9",
  "key8": "29RNM4ASR2Rq2skqP3gYwAiq4Hes1m39VrUzgsri2eaFsjhEJyRcNkdXWJSEbMjtZZxzkDbC4FKGeQCCCNprjpLX",
  "key9": "26LiQnxybRV3nKNDSsb6pjsjvRHCEccqPZyjXMx8K9bGMhsYdKf3zFRLhjSrgoVDJ9jm62bn6kJkv6rghis515W5",
  "key10": "5t96yaFtxrHWTG67bJsN1FLRjKfu5AdU6u5vXbnoL74phnBdqhoNCfpDdKhgpCc84GU8BwLQrqKgUELv3cy46atG",
  "key11": "3CQq1LGBydjUnP9tDtsdTUTgecmUXq1QEpCXcniAp6aupoAkkFTXREbytg2EvaKhNPteeRHVpbP9fYPqqhUc6Ah4",
  "key12": "4p5Ffo5SLrcFoxuAR7u8z3JMB2Hhtq5KAKfpwqv4mUYt5jCdzaNXvYLx1qcuCsHoL24PxUr1ZeyD6oeZrkxKsdyS",
  "key13": "54XjtUcyMjGvA8JkJ6QkmtJVHQN5s6KdHXV8uZMMcoHmuX11iFyqeUk4A7rn74BhZfeQwiqJuPuoAvtRKCGaiVFT",
  "key14": "26d1Fpm8vExtooELmAVc7tAri3RJsuNAWYf9NCdtnYrF6QRv713LwkNrVtCMJ7yukrGJYF4VZPmEBLM1QJirJn2Z",
  "key15": "3RqeJAFRGCf2Rff2VzxSoQ5YmLbLKRQpZWDXTBaJBRTafi6YLxgfmiUMRHMHqBqXk6qz4Kj7xzqkAMqxbUyqpHa3",
  "key16": "54B76rg2oDCkRX7uUx2kTM3GnP9vPN3io66QCKNKknnWWM5bfhjV4aiJVEoMNW1cMiu23PR9ea3kBkB7FG3hgz6v",
  "key17": "52VmK7o2xeFpQhYgMvjgR2oo1c9pok1rMvqMiy8Ch3rX5XxAJT8ced7jFgKT2zdwPdfXjptPrAKDP97zcF1V1fDC",
  "key18": "4NMYbJnWiL8MUjpYKLjNyPWdumADypSVafBtu9RF2K1zgu5nneFRWYQFmPCGcQ7y6A99nUpCi6ND7USQGUThRh5k",
  "key19": "5WEpxKaRGKLEAxb5UZMv5guCm2MKRvqJb3iyVwMJD9Vam3bc5Q5UV47THYc2icejMCQpWa5r1EqzyVLYErJKG7B1",
  "key20": "53naJcCRimZjpEEcWEueWp1Y9qNWca1QgXJoR6QeLz94Aps3waJyHXeywvEZBZn58qzbjb5Jz7c1WYPYD5Tif14p",
  "key21": "2M3ZvE6LsrWiGm6MXJ6LQHu2ry4LUNWSfRojpbFSuX5rRJpr5hsA6KtnebSt5P2qqaQvpjYWb7qGnfAgBqS78EnE",
  "key22": "3XQguQp4wbSJtSXvnu6rgtV3g65qRjhh32sZsWBkWZurqybGQoAoZ1M4HSL6BbjNJFeKLLrUsjMnzbVtvNJCeDR4",
  "key23": "2npZWMmUQJ152WyPeQoZUNHBTMs51CG4hMaSdBmhRGy4MhxJRTf2h47A83zutKeeKRAc2Jjk85joPL3Mp2NJoHZe",
  "key24": "4NGpLxvxvdegDYjCSq36UpwDwcefA7TAJTuxHaStRRFJgzgmkF8iQHYxZZbBWKCSfPehou5N1sDct7epkp4iXtgp",
  "key25": "23UsqiJEtkFeaaSouLPGBUoFyD26EZ3KGiGKwPZAKBHh16H2jf2sAd8kGzJ8PqKi3k8oLUVFh95mQQWDR8PFQZTA",
  "key26": "5TAL48TYfoChvU6vcKS52Wb5HSWEZ8ymZkeo6RCHtKH4qL6Uz7dY8HHwFMhwXcLmSBS6uLn5AdTL4aVFx5wag6io",
  "key27": "3hTdFY1UCYJAakzUN8XE1FBkGJzkryM7zoCX53VDMWenPk7uoSr26Mj7nk4sWuz3yi9uKf2tSPxQ7jcA83mQyoD3",
  "key28": "3uC9TX2Nj2g7rAdRd42NWCmL36YhytsUkvM9GDJ3ed4GVFk3NdtSZxQMo6VQzVk93hYq66VfMGpD8a5M3g28Myji",
  "key29": "4GtTnQqxQJfEPMBZzT38ouj9a72MCGFuEioRyg8GHNnJFw3UrLASA91oEuYxbVFSs84LRhr4uD55tuxgWqbPKKPp",
  "key30": "2w3dqhouzGqdGm9pzqjbkKwCbnMBbDUnTNAz8z2U6rLWw5AHdEHFgbA4wvBryhTyETZj9qMthA9Wo6p1LQVsyswS",
  "key31": "4xa4dTQX4Ar5JC8XS5VXnYtK7NEq1rkzdzX3sLR3LGg3aTsSMVqHDL19ef8JTEhjYFC46CMngt6FwMhWjReDe16r",
  "key32": "5HgPNMusk3ujxJTuW97MjKqEGqniAbBkRtQbEt2X86HBxGpQrqzWmC3rDS5R5KEgpRTeJ9c43uDXg6679tDk8WN8",
  "key33": "62BfustmdgMDJLPYof44LxtqkkUDvARZUrppLh7GogKEstDtRhWYxQgBNkCrcwjup2TeGdHcpWP9P7UKYzQeSQrK",
  "key34": "5hBaX5adCbZDqV5TpPCDNd28FsWGCfXN7VQusB5H1huJ51HAcxem3nsBeoug5S1LMCXiqN5bERP54XwKoECkAtrc",
  "key35": "vBJ61kUpFLUrfE4mwDQgfshmXbgZ3yZ5dnYJmSLAu4EY1eaFeZFk7ePYMw7w7dXox6rTxBhSkSh6fAzbiDZFMc9",
  "key36": "2nTvTjiJTYt1saM6K3gbPFp4nW7fC9prYZH6hhhKyDVkfmQ8QbdjtTrUTFmns1BQ64ckFRbVWdcAbXkhS76k8YRx",
  "key37": "yszeZgg8QfzSjtVdNXih13JY1jvXytnN5xWjLvPBkvfQqYKVRW1SS223yYcghJtr82xqZAUqJ2Wxz1oB79SqDbk",
  "key38": "3P3xn3YChW1xVaYsXxpQ4yhkAqiCSaRAgMRUKQi18sC1QggfWcLxdvveLLopb29VH1JaeinaLbJZuVfYnZ6fUCdU",
  "key39": "2ocb7K3AGp9QQW5ZRwDaneNC1BBFfoKgEmzDnXdvi8HndjWucFQZ5V6ooW7d2VWpUTbkKq2QjjA9S3woXrSBsx3S",
  "key40": "3SB2gs45S8qjeRANk14tvPzRyrYV4A68pU6YCs7VJqZkgyrhPkA3upDZ8e3cLYAhtX27izFfor3gM7LX8DUD1Bof",
  "key41": "5dtDENrYhV6grGSa2KQS6xZNojfZfk6dUhwMhs1ShbMaJ7H9Do7iZfDU6kozu4YB8FvDMjQxWSwkzKvHroggSUD6",
  "key42": "2v9vT7i664Xs6hMVpHj7snL9ZzjsYybFH8QTYvAokmmdiFcu6rFhbX8dpx95GeWZi43KBNt9Hf17Ngzbd2gppKhn",
  "key43": "3vzbCabMq2TCx2GPR2uetLGxsw3JXdeFor2AL7sJANBgAJ7r4nVMB9oxSLhLR1ADm8fW6cpqUTMt3KFBiaEZzEQQ"
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
