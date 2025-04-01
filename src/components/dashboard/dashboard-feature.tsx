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
    "3pvHxFmygyou1vSuQmVu9j6xDvb76wEF5m1acNHQfMNozfyHKgesfdYbB3fQW1HjCa2FqEGt37JrLTynEZGN4w4D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P7NrTwhk9HXm4mQbCkmKgvWmaxYimPNCRyF8Pm4efMGjciUHypRRgZ1ZgCM4gbSXXxeGDGbnKAH9MLam76WguBk",
  "key1": "5KX1X8kGydNo3DPXnLEm3ZaM5vuBDeQUKn6je8imfJt3TJPZqnspP9XNmKpa1MRurSWLEpAY2RsdGAf6k4KFind2",
  "key2": "v5WqodNvdUzNyAAevnMoqQPt1JztfHrhoaACb6Q7FYc97BcwWdRfeB5PbDidpayCv48rWae81rk5qZxjCPha6ry",
  "key3": "3RbGsXJDZdQwuChDMSdcwEz5trS8iSfZuHjAA8AZBT3EZzH9tKnL3MmBBc2hBYUrSv5qCCWuRkupYahERRJU2SQm",
  "key4": "4xm1FgPW9CACev7wFw47hcNiGZ7iYLAgD7UHqDH6otBxgXzyVDDVVFmXGuqxLrpY6rXYDYLN4U58GExTC1AJi8Jm",
  "key5": "5XJRuv4qa5LHFG1ja47Z1uBDNzkf8ZeiXNgpG9ygaP7XX8rAPRiGN4U8UxQqx6yxYQbmACTxdKtm3xmwqJK5wsXC",
  "key6": "aLPE2kX9DS5EvrkDGk1Dj4cR6uBJqBiVo9move91gXqZFFRuF3BeUXKpHdjCnk1eCwBUF5MrCwwDR8UQrJZUrmV",
  "key7": "66r58MVoVPhu7juCFgs3i5FbhQKPXVhaLxg3ta32a3JtHY3EnTwxW8zqEs7WpT31pMgyPSZ8yMNEQ4hJJw6Wf8a",
  "key8": "2XXLVnG7PHAKhmVcNtYS3L4yEvA3x5x8zMS3mbabfCPhaExHZfd2Dw2WkEqyRkKcj7DhCTuFRzYbpBxhzexWpEw8",
  "key9": "26B9NvDf2S6Mh6xMxwjEtaoHvM5w6m5LK36TjhZ6PxYtcBbemQF6j32gBX7AuzgACse2LNsX9U6ER42qSffCivUS",
  "key10": "3Y5r5kaaY1XaP3t19XkTcLw1wg5P4CfAEe4xrNtShQBeBMvq5ykavLTLdoT741f9v2fBVQs5ESbkeR32HCLRUW9T",
  "key11": "3DevWTYnd1pEct4PRB6yoDWBvBoVfSa4Y56ctVKy9GHFFY59oXKnuof9tuTi63uBA8c66vr319DU3Azr5Z79rWUn",
  "key12": "ReEQiCWRApmSPoGY2oiqstLMcC93y7yKkgAWMgvQ83aZkHDcE33uz25jzvU6Phrkh26H21h9ApF7V9ogSErh1GQ",
  "key13": "4oaPRKn5JSDUS8ftFVP4dNBePdaX7hXTosFDexiLbCEyP8YSwifNXw4seRzkZm5DN88LsWiFVN1zRngzcWU1netr",
  "key14": "5KNA2UYZ64Prcgw38431CDoM8B7xbopXX49iJuWcpQpFUXPCNxwY2bKEhBwQE81CqR2uEpxKNSipXitsC29LjcRP",
  "key15": "3dn4FKspv9VdnXGBvkT4HniR2QRSUnAhRdskMvcakndRqsCQg2nWHkX9nTodVNP6n1B573Lm3Vndac4pAH3rgmjJ",
  "key16": "5JqgezNPy1Fxaxpj47q1LCBXSDcnZPp93FXvjqV6ExF9eRF22dif57Z6VoPVTAqCWf3ZGAS2LJcz4PdzUtZ4y7hd",
  "key17": "341GUt2jaN3ZDV26uWp9hZxmQJ8fhsx2T2V3wt4yqDjs5wbk7aM4iu3DowrjL1obNUM8MEpcDAWkH53PiQAop7Sq",
  "key18": "2o5L8vCaBgMdfriXFF7D4FM1XdZBH7F12qUg5LuWxUd5JDfWdL2h5zs1TMXtpS9CrGBGQXxQYpkkUyn47Py4ZWFc",
  "key19": "3BjUZFTyUqemUApPAvAXWGzHzXrCYRxh7vNDEgWNRH2LZcw7BbTkZCW9LFDeduQ1nQQXkGwpuEbA77SBhYvLDyW4",
  "key20": "FtgjKmKNoepdTHuzdn5PH9e5qEohAFwkHVWUaDenzB2jrJ3j83itvcjFYUQ3GkkcJqLJziMkfzMwhcwgwBxYKp8",
  "key21": "H7JY2wKhYDP6aqr7HdyVnyr8fqjrzTPBJ795o4c1QWTsfHFtqyPfWdVdYhw8u4wVuRjJcAVMM7vym5PzLwP6qSs",
  "key22": "4596Vb682tAfYjsvMVHYWTyHhn1zK4nJ9erFGZ6jhPEjefdNvoNxMZEgyvjibPnTdrrQ9nmCpwsjMgcc4dGd6jY2",
  "key23": "4KfF3or3ZU28jw8UfFS4k1mzZPSecGWynMBWcso1tvejqZzf3GjS1j8SnA5WvkzPCLtkrzaHAVfVV1ErfE9UL3xS",
  "key24": "uuD9gKGszpdbebxyRQNXaBJrgna19EzFCr4xt53SgAGnQXW3YzZQwnPpT9UbMtqd6RJNzkbHcGu8uXz4RKizyLM"
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
