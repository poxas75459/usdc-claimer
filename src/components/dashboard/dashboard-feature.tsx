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
    "BNUjcmtyQMSgrfR7KUiwMALEqV1kVqAGk7Fmn178WajzXC8yr1HkFNtjukHm8V32kGnetFsSNtRv9m7eiBxA3Ns"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cqYQrpaqpmMSJMYkBrPShXrcK5BXA1HQZ54w5iMQB9rP2LARGypyK3qjYk8NYMRpHDL81JGF2kUMHLVJBCRyoif",
  "key1": "4Xap7yoVrk5UL4DRR8RAsfKUNz72CGajSwwFta6qoSpWPi7nmVoCoex2iqUa3tT3KfMNaHYnDg7d83EqNZMYwNN2",
  "key2": "HgpiErAc4mHHFntwgy36ziM2iyctFB11WQHYXUUVEA49vPs4YWGMscdBE6EgcboASwprJsfRbvUTxm8b3vj8Rug",
  "key3": "3k3sGrqxQhs3LCHvHPb5nLryZVABAQsX1wSf4dspstAWKsSrbpPWVxKTN3yez2bM5Z8j2EhYPq1CvcJnQxFTNK4Y",
  "key4": "4U3nesc3UpqNLutjA76CRvHdgzCewZmxAUEjVd1Q7g52SVgiTqFiUuBLPEDz2ZbQwtWCxtcZo24iNMbYgvB5rcnW",
  "key5": "65mi5XhrcpqpH6SxY9dM2SxxS816uqg3kMRYQXd1muCMS7sxtehqcpbkiT8UscxpDmp6Bi1goDkPgWtcDGryTARE",
  "key6": "5dDUg8VFq7GaDTwb46Zftqa9xW5A7o3azsWDfADivpBEaZ2ziMdciw6NnA4MAwy35GEnw8vyjZMqQqvQX5iQeYaN",
  "key7": "4xDMVnDRwevpSeVGi9FWLboS1i2q27of67KKcoMMuZ8PVWHApz7btwrWkUEzxLapzS55qimzDg4k2C1WX7JSdhtp",
  "key8": "4oXFzmcykNvQmSruLHhNu5hZoDQcrBFhqdduZG9CrWo5UJTL9i2Y2c55hre5C5SQFatXvXDQzZpzcj6ELkA1BaKF",
  "key9": "2rhbVyLJyBabb4Bd8bMRFdiReXAoyaRov77FeWy1yLnvMM5feijv4kDWnLtQhoj2mZU3EdLK3xJ3rg662asE2ErD",
  "key10": "5DBYqMnh3KeZh2gZQZ4arnvvBCA72BbqKsfwiXst74XVYT7DeBgfPjMcwKvUKiB5BL7FFsU5zZpuwYCirTXEWDEr",
  "key11": "QLi7XhW8HTWUe1uxwF9SGBGKSFcWbtpBQtn3kXK2amzbK5K8RRZGkYoTBqcsYB6yPbE1ZEhH4VMF2G6Fm3wUBpB",
  "key12": "qg2jkjpor3DJF5quKqUG9bvQE589mjkM8wn6vPwYtmhduTZdAcYU7W4PLojzojcCjJ2ddd7U4Bc9deeyMU7Le6B",
  "key13": "4J3pcwo9rfqxjBWY9nqCSbfR2RMTV7EErguVcGXFAbaXocHsFduq4qeVzqMRf8gC9NHRSitnmSysf7F4KkTUVhMf",
  "key14": "2czEAFxaQTk6Wg9dWUBXBhuoit6xQU3t5E7ZsMY6R6ZUAHMmmX4nwLWa8Uw4dZ4b5Vv2Gq5h8k9DcZ9ax8EkdNXs",
  "key15": "3Jhezj63JeZomvy1uygdHafRBpTbcGvQvgt5RJ9xXDNSAWtfcYJDCUtuGysnDtd9oFea5FV9VE6GBa9uDvQ53Wa8",
  "key16": "3qjHcu9fn2nRmatMWgvmy6FD8z1QMdNhqYmR94Ao4M2R1zuGRSM9F7266uhpce4FYRsys734DhnkZbEsrnK8SUt5",
  "key17": "4cTYwAHMhPWzjiJYiMXth2GkgjSpoAabjQd36CPECRceyq5TZxpeiqjMNSMf2Zcka9E4PfheGjrNEz8yKmUJUKzM",
  "key18": "2F5Bwbck33eHu5xXEoERfqEr78rQBPoRwtJY7zZ1Fu7hCKck8fbzFGK2vp4THTEJ6JYMyQQqabjfpyaWLnobAr8q",
  "key19": "4XAqzveQxo6dxaoYKWLjVev23MseAn92K6JGJx7K1AQgvnAuMvfTGVso4DTH4BWEDzwzLRJx7qwiJydv1wkivb9e",
  "key20": "3iAeKotXPPqXDkz84PrKU14pkhfW5eoNjGjXJ7QMmhR3YDn3F3rAW7rA88G19gTPJuDxUUSWF7USewYok3a6WEZZ",
  "key21": "5DZqJaStNdhQw7wpaM81L6MEpLmxSdGszpi1swVWTXNtCWKTzdGqyxGjiXxfDJLwGtH7udz4cPLt5tcfngwKWnYv",
  "key22": "5fuXB9W8Y2RdsUYd5pqt8Umfe4LSfY11aHwfNdECaat8jbLNGAP61acsdrrGWT3uMaWZ7iP3Kp2TQeTj6QuJAdCU",
  "key23": "4XdEXGpfq2MRs7YLcN9hnq5qshxJs9d2TafPa8UmVvMZ5k7MJQunyo2Bj4eBCKAqaEkdS7UoPqEgB95EDX9TxeBW",
  "key24": "5U72nxUxuR2eqiF65e3LA3SqmCH6Lgp8UPwmj8x19jUTBaxbEzEjSh1mrATo8cEx5ayLLBNZbJ9jwU99R83SnGnU",
  "key25": "3ZhuYNDvanehQNZS4Fgi5rLcMVs1DQL8QCzmUCYSRz7M2VciPKJbjnkPrMn3swa97GtpTpsvWQRE5djQDrbgWj8p",
  "key26": "5aNkcRESBSMDqt64akqrf7nnsKVtcQx1cxRdMcDpTnxPqQSWa4zkeNTPy5fXD3C9w2PVChYHZyGLy8sHuHZ8WhYM",
  "key27": "3ZTCqgzaWspzWmcnfKr9iM18M1dWHQx8jjkuP1815S3tkb7q782x1G9JvuFkKjG2NGUm5RBdmTWjSrafvRFrddTs",
  "key28": "3cN9hHHAaoCo1iqrTw4rN7EFcp2KyDayZjuLwkQPYrGSZg8DbLtwrtqqC6njnnrsNHKs4FfNCZbccL5zhhWAJNev",
  "key29": "4q3Uvpf9ghtAgVfrbzc1GqQM2vaKvpYb7ZKDGUbjcgtqam3ffDo8qyzj5zDuFVCyuSMySuw1umCuxT1Lx4msJMuD",
  "key30": "5CpBZPCzrqvCYi688f3DKST5eYSdyMA8kM7JyicTXEavKb7xh7YVb1jwWH6Fy9xu7n3kT7RYwp9txNf3KpT8rQA5",
  "key31": "3BSoRDZxUg6ij3TGDiqNLgsfbVqn3oRccRF98Gd3p3751kbkrrwMtEPpxTJFZMQKcspBukQn8hykz5yk4oF7GEdP",
  "key32": "5jKtnobD5rv5K2DZRyxkTpy47VGfeuA6zbPYF6c6ZRBGq8716j4cvDTMZFkNVAppqdxBaguEH5jGCEhKEBdmNAjz",
  "key33": "UzdCqzY8KU8ECsnpLsASnWDKioMoMkMU8jUswM9itP8vu26Xzx3QUFVhxoj6oH3uz3spH7xZd6MnedfVPFCkFJM",
  "key34": "5GpZEV6LJo1JWN7BoJvKokR2kp5E6yhvpFa5qdTeVEBZ5MLnvVuBz5RK6HoCGtY2um8SiK1aPae7iKRVScLnWjLH"
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
