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
    "X9zRVxwTbZQ6q7SAYKBbRPsK73aZfR7TepBFT8BDNLAomX12JwYiUDjMHEKckbViZMF5oDrebF2gngz7ASXgpNj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zDsu1NAiqz3BLFtg8bfSL3i9NfbGgpw5tRap2rTGNk2TAFtQ8UQzaPbZgLnqepncc76aGs9WkKsx9i9aRLPjbjX",
  "key1": "3dFdZ5xmK2EPktnNvaCvdbKx6fTZynHiFVqrdu42fv1226X3MDkGDDh8kFGMX3GWaoc7qp1LeFs8BHurqDnXsVHs",
  "key2": "Frafj5EuvwkvCSpBNo7GoVSDiYHZrv3FeK9byJCSj93XufbAjY9LpTocHbZHoi97tq9SmVeEiD1Pddas5UMkHqN",
  "key3": "5iNAyUhmacaEj1YNGT5qUmzJck68XttQz8JgEDQd69xpS9G6cHGwr3fw2wBWtaSpXLYiY8r8ak5bordbFozXod6M",
  "key4": "23oKMmueY8mwXCZNB7jwRHULMirBcKhHqHZymc6waZmpCntHkcFHA8zemrpDTL6s5ehzH8aZPpdig8UbgvRQ2u1v",
  "key5": "47yE6A2U8GUU7WPcbnQx91LXNA8MHPmuBSCjAcfmwaiuA8oj6UvYra9KV1gCJFui5S3U9MWxjMyZifxnkhiuSLmM",
  "key6": "2DmG3MwrVza9eePbhoRTJejtX54N8ykFyEmrsLkzgCFreK5a7X4TKSbHEmapKBG1mDsYZaf37ekd1ZbSYsysPoWT",
  "key7": "5MRimi5ggEZ2X9stUrNfDMCCdus4PPsUqNAy7bhDv6HsqKxz66YiBLbqJbPzdyyiearaUwwaRT8ivf2TcZgJkA6D",
  "key8": "HWjYefezBx7RwxvQ8Hf5QJYuwDiWrnuPJEpgMSHwbX7r3aTRVtM6WBRFYLQXRCkJVMfDWD9FETkRoSgqWgFp2Bh",
  "key9": "4m3yBgMRwosQuUue8QogzoWAAjDTaN1J1NFF42Ebpuid2UDr74hbZCJ6T3e1mMXeyKPhcZmgRbbqRHuXgu7LwoQ7",
  "key10": "5Y8vWhsYwwFqm8nuVTsxCc61KWM6gGmDvAgFTu3EThxz9bELBpZDFWBeodH6WACe98PwZ9YvrQ6GhGJS1KdqZHpE",
  "key11": "2gK5BTdx6wAWcX4L79gE2LfaSsUw85jheUbjFEPFxsLjnEhvvYW57ye3nMU5pzKkLgJAB2geGxy8aoWLdzxPtZci",
  "key12": "4vqbTfAnyCaE9HZQyyrrdDUBMTNY854bU8hej2AR9rADLz8V33T7QaeHkQZAzMNNGVu6R7ApRCDPPRq7QtmxRwZj",
  "key13": "5vx5xiWcmGnrMu23QfZFGnjfbN2AKrTvxTQuBKWQJ6SC4gbG13M997mdrNfURprG7GaxRoNixvHG56d16c3z7NqV",
  "key14": "4JzavCoPYsC6mA1StzFJbqvNzHAQx9woV7jvWHkCAqy58mFFnGuQREb4a9eNQxoL7tceQos8tnc96xQw54NQBH19",
  "key15": "v5zppgQzPeyZok7BTGack4D8NFMZx6QK8bfgwPXkAKPZVjv4gWq1rsr9csu3P65DjsnGjbBL6Bdu1wkBTB9Wgbm",
  "key16": "4EL4gJDeBngbenyu7zR8hBz21CFPFuFhBizZ1bXCzhPHPbiDMwHd9QbzkakBPgGXjZZSd2mC8xv5uAFA31XecRk4",
  "key17": "5cNE2z4Pkxfc2diWMMiWbvincMuCTEm4NFQeRwBqXeQJJhXyEU1hdfh17Gg4uyVVKLVATW2yb6FexnmsuBTCWPQg",
  "key18": "32FN6VTi7imWVH82NkHURj9QFLRQck8hMjM97oNNRZjLNWfGR4p3rJiVSt1HaHzEfFjYZPQeA3yb5ZEtzHYrFLbT",
  "key19": "56UXQXDCbyTNsuejNhJKPLvQ4FqRB7GSdL7aSwirqJwS3BDjUsPnNTSttPrf7xyYjBchskJrcpGpzWfTvyumuWHp",
  "key20": "5ZtjKi6gzTf7v1nTUnUuxpmcoWE3A7DskiMTwZxbR7MeSbNZ9HFs3eGzvH4FVbYmt7CseVVCaBmSUmnzkt9dZELp",
  "key21": "3ggdR1Dzt4HJdrUnbPzJkJqjqYpAP3rEgngYj1zAeUV1sjqVNAqzyhbBepCPRBr9nkfcx8pu1FnAehEzYydXUY7d",
  "key22": "3g5EHcdMqxLBF5ReLCK4Yrm16jNLq7vDXqKHZCJyZvsHskDg12caG8VxrDrhzDjqQ3y6Juto8JPNM3u5Eo7BUJgf",
  "key23": "2TcmuCr2o5GSDkWqX9wNiLKcykc8QQENrzPyLaVpu4nA59SsvJB54EqsmMyd4zByyZqNy1S138KdLue2GUuHghUr",
  "key24": "ytGdFQcEhUSNUWHZpVpYbSKhJcgekcD3YdzqwjBVUB3KhjjASuZan8384nUbzHf6rnHoka1KFyeLKDHbS2gaEh5",
  "key25": "3fc1RjyhqCojvbtu7kS6sjuwafW4WjGmW12bh1tm4aEHGprbqWgGzUSAtPxppR7kK4fdtnpDH1UUxXCoo4a5ZwVK",
  "key26": "4kKkxzPCvkTqWMDtT9ZLmYzpDV4njZfFcJ9NsN4buyBBnMWwJzR7dF7inTYweqyf5SPbpk91sDMKV5KsJMtLoAi1",
  "key27": "2upJZdU2SZJxzmp63YTXtur1UM4a3py6WmZuT8Jc4EuWxLkJMFbVXqbsPNgkYeYSqwADu1LfSViGT5PACxuR7rCD",
  "key28": "2hCcK4773548HHRhcGcA9gWzoCQzobYGf37hWhjUV52BWujGnp2BRhZpYyzsBSMr97pVt8vFYU3ooivLLtnRQHzY",
  "key29": "PMz5VLZqLThTviQCf1x9HAdesFVs8NCeZLRfENS1Kc2B1cPDEWXsaG187vPsJAQ4e3MnYBt7tU1u6XFuxCiYwJu",
  "key30": "2mmzoDoE2Mm6A59PcQLAftSQjKtEgQpEHYaSurQTXM29BqaygmZwEfcntQSPG5QjmMLMen5WcBQ49j4bon2g2UUa",
  "key31": "29VbR6vPVbggR8SDADes1tyU3Z3wMFLxtm3S2FnUQNs4MY6sFg6Luag5ruKhBa8jqb6qiZES3jpFuhXKcPAxfVfg",
  "key32": "5qcfjK7sajtyYMj9KrXE1txCtJMBzpB1LPc8WoxR5aw5Az5cAxzZ95fnqHZtVa17KjFDVi1Adx1o7ao2KFKXYGMc",
  "key33": "zwA2x8zz8GcVwcVQ2CNa1sJMnH8sa6roMgXSwbgCFidwBjLiR8xX5xqJE2VZ8xzCXrkTBstfTEx8XXdyJZac5nr",
  "key34": "4D4vQRcURN1Bk7bd3mhxjMn8Mx6SuoCBXKwDCNp4bYPS8jaMkoNJAgB3PpWmmLFnx4uY6gDvyvUr2ToE8vEbmcN"
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
