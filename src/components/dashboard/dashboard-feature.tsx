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
    "5kZCxf6Dg83CuHrFJpBcKrACnoLDrBNoizFhQRzXtMqL7atiwowb6reZ4HyNaANFBLx8ZYSQJEvUD6iPipHGp4m1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29wf1ZqaueeQERR3dMun4UneuU5HhAmotzempF7qYvtmQYfZVUShKLhKNPXYrKHtaX66jJbfVeDpm4k5udo3qW1U",
  "key1": "ZAMNeMiGNWkCRQJvqjio8VZcabMbbBrZE8LBYqhebbjQApPgDBuKa2kdMxiPTtXuUGJiMPDVf1E9VoXKSpXnUMa",
  "key2": "kKZVKmVvb52TyFvWQryumixaDPhTArxXth9tMXXW2Py9eh3RPGsKtVQbX9jFPu1eVW3RcD83kNeRrXNNeRqr9sP",
  "key3": "wPojFHbFLtVhHiwCtVNdUKNNfiX3xzZehAfjpundHAodm3oYZ2cJHjm6R4zam726NAHYyYXS6LDMgUQWnZTmPKb",
  "key4": "3DUg9G2nzezw1eUTA3STCJjNBTyR44dk8QSPjVr8itccUrcAe9zobo8cUwNJStirdo2NuYYroiKgcuL1CN3SDVrH",
  "key5": "4gWLtFd6zRU36uu4qx5iGXZFxt1aHBg2RycvhAcamt3BZZbKy44wp2aucBo86iXubRnF5H5enJFb4wKdeUcWjJKj",
  "key6": "245oEviiLipQwqrifjxzqsB5Ci9v3njvgGvdXevANk2ZYQTMKtd7aaNU18WMLWs9Pohd9LZQCXhd7NT2ZyRcyNRA",
  "key7": "3fr9jxbCKjq1nn2Y4wHBxqmnNi4UmdxanvvoFyu4MYx7h9x8fwS6iVVx4QPQq2XAWvy7aaLghJH8XHu42neR12d9",
  "key8": "4dLLhiAeKQoEfWaoVpgZ7ZWkajavoCBmihxu2LjL5VuccgZkTCtoRVs2L9iotZhwFTHbpkdHD7MkmRcxxUk6VACr",
  "key9": "3WbUSsDA6Y8kGUNu8kvFdRM9LRdSjSsQAbSeW4ZM6EFKDvpeDxMeDsowAhHdNCtrYeZJ4CjAdhLSu7XyXUVJsFsG",
  "key10": "5Xaivr7ge4hSC8DsWadis3JPwM9YNRP3qsTbb5ABVa57cWXSNAbdRPXYYeJR5cMEcgreVtngiLuMWBnKJ6DzyeLc",
  "key11": "R8CHmPg7KAmbWU88yypT48hbQ4FaervxLeZBhSkVM6eQnAdt9K5Z5RwWJYMWnSY6JdCgPc6188JMy3nMTowhzJo",
  "key12": "3NCCJn9kE8yAdfhn4FJzNMRT6kk2PJF1gmHu3xAQKFUKU1MAqjBS173qru273uv4asDFCWmXFXuYXhYtqg7ukGhr",
  "key13": "5b4twXiGWWXLpFCGjxZeghAiGGEXpz6hvFMbpt8CnqCxmq6EDtWFKDcxWZmiGZyqhoyMs1ynJ2qBT4jefSfKo7t8",
  "key14": "5FXz17KbnoWW5jLdbUguY5gyQathJQMcoaB2CRtwABz4JPztrNWxu1zNTDFvVP91ZJ6bHAz1ajqxSf38EvbdPArP",
  "key15": "4DBDC14yPoHQEB8jciRCyiqP877kEfPv5SN3B929CRHRdfygK2KXkhuE1Lc8nBBvqraj7zhAfgd7Ncy3c6SSRhHf",
  "key16": "2ZSFPUo9uJVivFjggZn4XhdWAheYDuBQ2ncTNBe8UpdJWH8Z9GWarNqLbfJzAVS9EuiMMEQNPeLhVEZSSbvMSHcb",
  "key17": "5iBit11o2DH5xBMoVvFRhVMcQ7pvq16uh4JbkT4QVQH6YwGn9MS6FbMtGQZ7tJ7W2PmYSpza1PzZFE551X4gdYbk",
  "key18": "5tugH69zu5zcKn7jKR7SfzFD5MQJLnyjGegVTdkWsjEzvfpX67TkKoJXk1xaeT7M258tuENuyjm22VYgRs62JakZ",
  "key19": "4bF3YNe7RC86YiGaAKMev1fx9MPz1N4qEqfnZ7XwxqAEyaw2WZmd4E6KV77ugfbdt1qa4NAFjdf1PKfDBJrV9bnx",
  "key20": "5VbJhdpsFfKiSBLh5kaUfb1t43aVZMR5yCohNRebq6xxtcNg53o2yW4hg5UvRn9csNMTSyfywhcKEDasUH3B7bYp",
  "key21": "2DdLuFfpE8mvoUMzWiwihAd4Gd5g7KzPHrqVKECKopBEHg1CtnvNrwzt5QhLGc1vGJKo9tGy6bJ2pebisEwp9HmS",
  "key22": "2ivEXQsyeAcuKeGAQ27q4VqhABHEWN1aFPQqFFrxzg98HrNQzrQGUhAjX4xKFmEjxLYT5MuWr9ubBDpWk4exHy2B",
  "key23": "8PseFdduRvqxzcJMKU6Rr6fZQ5QfxznvAvsTeKXMpVXE36sEymrgAVisNG5zDdULgA19qip6VEsXQjqieXXMXsj",
  "key24": "2vFxwfC3fcAu7ULqsjTKLVC56QHxE7AkpeQUNxAtjkin3t77FacdrnTz4SDfVZtT7AZ1M3Q57YVnKwcWaMS1Rkar",
  "key25": "3ggPrsxYWtsk4WAcNQPMaU8EzR63obXy1amxBC6XCaVFUid9X6AztDYyDBVk1y2F4es37PBL4j3Vmw2TP4MvKeSp",
  "key26": "2ZAg7hRVsbxKynyEUYXrEx6keKGS4RsDGPMeHtArBRGmiW2Q4BcDR6i4479Pw5igF3KNhxbPN8smtBaPNnSbnU92",
  "key27": "3VKPpXJ9wP49nt5CiBRGqdqK8SqHA892rR5bV3ixqVMWKRsyZK5LeiRF8zNJBqCaZuY2zkP4nazTseshjHm6Xfpz",
  "key28": "2DvXEedaNUrCLAJwEpzcmzDxajKdxSNdWH5Sm3iYeo6xn2id8AVoXkzKtxFLPoe25qHdFxwtETbJSp7U3kPzd4S",
  "key29": "j1UJz8THpQiQr75cHDLpKVoBXso5HGY7tUM5KrhrDBWYmTDi7suvrMe533wzG2qMs1TEdHLNGYYK2uFVmo4QrXM",
  "key30": "2jp186R1cLwR1yuHuM99d2WBL33XDA4kVAZf5vfZaqoLcS9iBtAcU33V6QfF4MowRG6HvwFgjbsB4BeqDMRDA96q",
  "key31": "2N8ZsWKdg3fepSU9cQYYxsSYamUuaX5gu9MKn15gsDbXUcCbL11qQRr2qPU7L4j2iPGs3BupN311JwxcBRSQnRnu",
  "key32": "5mTkBpvAAd56S33hYz19xq6NxDsJMdnbGugmix6JZFhKKauLEHX8yEirqWCwNhAJeri6YCmiZVoKF9oWsZsQcSXW",
  "key33": "3Nnn561dJGhjm5wRo7xB8fsmqVYTJpxcPgNAeXncsWMEpYrbMqAUbaLTGCSMYAXcZ51RKBjTyJDh7wLNv1wd5FaY",
  "key34": "4p22nBFYNpJbv6JfHfQ5JoTcNBdW1gV5sMNwXmKDihikLeDvMjHiTU9DF9jfGQ3wrMbj5MBCPPsDBx1abvBjfeTC",
  "key35": "5L4Zcs1V6c9dpT8xa8j6qBf8LEycWTFhjLYUHyvXGjpsju8QjZZ79kgFJJscQkzU9jHpJWrwMudzJ4YuMXLaPCfw",
  "key36": "2YbWHppnYZZYFnEY5CuBXd79zwdxYrhvDFUkamTe9FHsasR3QeaVmyxAWZeU7v3fWHCGuwfoMg5KGu2ENin8x8fx",
  "key37": "jCDb3FfnJoQd7RQf53do2n1gHboAtN9VsowDmcmNecqon8g69YamsvHA8tJvF9YtNzkXtu2gX2KypahjBBEz6wt",
  "key38": "5k9RzgYWAoUzPzu181y7qmAzjGBHrQKTkYNjKq9NmJbaFZTvDDrCePeL5dfKzPbWrkWEQVXA5GBqvd4yHvgmJAEq"
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
