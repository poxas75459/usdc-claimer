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
    "4XKTuU87QL4KkKzfM29zXTPt9joJg4YQ7tKsRCE4wqAjkCn9rksxbQ2bZFoaxHwK3hkQY9hEZWJHLHW1HV47LQqm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RPt7uTACWoKFafLA7YPuAa6s19ev3QxvhYgnFFvGpFMZEYmoMzFkDgsd9h8LamTEcQgzM7XijmHvg2TS1BYUSLL",
  "key1": "kHouqL4KS1Xcov6Xaz9Uu4KosVLUk4QsYGKTwqya6x1SXzWSCHcezNxx1Y4Eoe4tLrZHCP8e35cCtNGtNaKf7og",
  "key2": "55zRCnKr1Cm4ZyeC9q9doijDKBRm6Fou786Asuk81LZz6BQi2JtbpG8rXq75ecsB8PSZ1Ts9AqqwTwcfRSh5Y8ZG",
  "key3": "67UrWyohQhrnjh2X3dfWUWz6CScFFvCnN2H9zAKB8RbC5UXUsYSt4wDaihLqcqMWXQ8zyQgRGNCz3ij3voDF1Sdc",
  "key4": "62pyWSCt5eGKsZi5WiMTm3Rnk1KHrCMPHi8gQAVP1uKzqUgyeNPkRY6AF36zg7bEC1aA7qvZgQShkWXZ5Jv3sf9t",
  "key5": "3BZCxWPmRUCa6yJehyRxqf6yvmW52iLVGfgddF8U3ruTQdAsv8gqZvxvJwnPSgpdRHHHAMY4K8TYuxnhyMkgCNg8",
  "key6": "65pwNTKoU5NqchsdUk7ygX4sRx62g4HXvx7hVaEA9mLuLB2G5qQJNGGscessjRiPXS9LdmRRsHjnSNjhesi7q4Ua",
  "key7": "2jnVnVK7dDe5BsQcM9ka6bUVwF6AqpVnZ9ssZ9J5hWeGT5PVF5krTLG4vpEWagmeeoXAkseEEwi7NH3kVuNLocx5",
  "key8": "2gLQNaQdiALTPmaGwWK6KHzb69twDc9sa8F3RU6JPpQiBvVATPTyyQ998NvyfFMRPydSyVhZEjmkZBzLH6a1LqjG",
  "key9": "3qZ6Ko8S96xhtN96v7WNMduXQ2HGps8fm821ad1ZHqeaEoXVe2gkUSniupHRA7Br8brTvnoDZyfZENBidiKZ6GW4",
  "key10": "23AXpSsyEJyv5fdGXfvKQwYJu65rgd2epyMt8ih59hUqWfLdoCrc4D6Eb5SR5K7vGSyVGxFpHJytYAYduLNUxgt3",
  "key11": "omDC6chUZygsuRxnNXQJQX83LtgfnZUrtH97VP8RVAuVDPMvb5tdxWUwepsB3r32TXTZP2yZ6Rba2eVtwhjxL2b",
  "key12": "4FE8jC1nN5hatEtzEink4RwdNkXJaWzDx1WHoWqGfe34VUcsXdrHNT4RxVUzvZ3BbtdjoYQa4UW6tL8vbche9c5G",
  "key13": "4SoYZQ42yzrVmKuUtHdHkSN83tUsTjCZi8jbjyZ5rqGsn3TxJ95qxeF23fNRRsuF2oyMj7cnq8K4Hjhf3nSiPWo5",
  "key14": "jqaTFRtLZay7EVqjaCg7LZ57MsMZeGCWtYMrmzfUupydcq3Q8skSt14HCPqWTG5dkUUTWsja7Mmv8jZjggXJHXq",
  "key15": "4wLCbMEoFtJHZ9od8PUTfpHYfthREUdFpmwXmcmftidjP3g3ypasrNGX9v65EYejG5t1e418UNScJhGNgAhaHGLm",
  "key16": "2MXmdxAiMPWZpHdgtqwJrbHhevChpib5Ns7Jy6PojpdwdtLwKfdCPrXMCbYWb6e6fT6TFUDqiAKetn9dPkg1hpNz",
  "key17": "4sRpgX7SwryiL1Dsq9XSC2RMLahkCk4ujKFdsmaFUjcXFKTz13Gc44F8MjptgfD7DZeeaqT6Uix5mb8unbt5TuuS",
  "key18": "5LQB9zYUnAYUAFEbeTKxijmwkbaSkxjxAvRFabKDbU96T2871R1hMvTL4Fabs3LYq6xXKKCDVqTVt24FyHzwT2G9",
  "key19": "5UUHo37yt4snaoGTtZjM9f5UnSbMwWyhc5Eo4FZHs31k61uL73G8jSxXeoci7drHBiPgbnT2mVjAL5VkprPxP6MY",
  "key20": "XAs7UGDgB23dSbPA42Pxo7D7kGtvWggh4AKCJTgocQ6W9qVQpnyFMa1z6UUjM6uoXPM7RoSvw929hz7yNNEkkjg",
  "key21": "Mau1sAvoXFDwGBYT8EzVPDNLxmmkidfVMW2TBcknP1diEZP4YQjiEBZMvq5R2vN3EqrKiUuCm6oFY2LDV94NZ2N",
  "key22": "9s3huFEhBNHgizjxGy5wgtg7kiZt96pmXs8UBa7B7Y8qX4VBW2T7pUyrCWu2LvUNXxBMWL6YFS3sat2guFG1KrV",
  "key23": "2PbVAEcUBbspGt7KsBrJcpamJ7JMeKCiR3MpQtPDvkW9aJmLRiohkspCPDuKvUNNGWmDem2MTB2LUqwUwNvN9P9r",
  "key24": "bppvEVCKubaqYjuwEweqBY5LWnU1v2HwwdGPm5THU7YpUu8xqL4ujcczhrJUCoFyzktaqtS1pZYEobzw6RYbK5n",
  "key25": "4UVJwLV15YQrLbdiCxm1QRAg6Mv1W8p36Bh1v9e9bi3Y8Gr5K7UK2c3RtzCU61RtECyxRPJQPnHeGQvPwH9ZZCJ3",
  "key26": "46soup91HqgFtTRr93Uqgyk6tBaiUPpiUkQUBz7FaXnXqWAmxMJK5aZAvcYWXbmhdzcKHXCgsHw5FMB9WemrHwML",
  "key27": "5aDAyexy5a5RszVMc7XHsKh1gQDMPQ4UsNQqL6Ni2tehKU6BpcWtjbwUPVbQcj7R7G3nwv7u9CX8aHY9w29ya6TJ",
  "key28": "3EADFRrTAZzZWRqe3DM3Ddr2QSiP66BQzVhqZUjuEFkhbtHBJVH4hdVYy1YzBzHjfDdZ8yzX9hahZYqjsrsycdi2",
  "key29": "2FvZazWb71CYu8buNoY8RBAVGXguJoWgqGWQaQ6MRkF4zbpC8592rDprU2TRniWn9BFBJvgPmjQ1c3TwZEcfNw39",
  "key30": "2iApYnC6ZYqkUTs4JEsebWrANn7d4eZZR3PMsiKJTbB1DJLMZ8j7X6FoUkzTpnVYyFV2y5fxjLqJVc5VxNmXiZdo",
  "key31": "2e4QfjAxuhfbQYJZHLGVGwTtdhrXKLKBc6BkqRvMGRQy2ZHnbJriaBQuqdptDPV36fz23pAdwUpBS7xBXZ6utadp"
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
