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
    "38U5V1TjHSUjkrAuDn1QGwZUzsWeGy6qVJ3Fik3hBeEDKqX7jAT5scW8r3iok3LTCVycWxyZgTTW46JBFNhKwmRk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GVF8QC1D82Kpdy51KqGJjEoKcC5drHfb6jzkV1tiCGLbpkHbdndtKdoqp47Enoaz3rGsmmay5oAGep9nKRKRwSj",
  "key1": "2aUkuGy6u37NN93vxqBg9zQrqjcHCQiwG1DLHd7hY199h1y9U3fKL1MunBNPs1T5zGLdQKsaLFtD4ZFRszxg1z9t",
  "key2": "2jYqqBxq4qCg8pcJcRzL1BoxLQuJR7yretcG72WH6Jn88HUi4HL4Qz1MxfuA7C4F5AnZgpuCYcKJGyLgSktwmgXo",
  "key3": "5Az9GowHXPfXR3snaHvH9wqVaKL9HvpMJAha6Rd6t3dEn5L6zaTmMjStS2wuF2V4RK8eTcb3sqFMrN6iytmYDmh8",
  "key4": "YqajpGZ3SaP1tSWc5Savf3rQPK8CJVg8kqyAuWi2sRPehF3zi44Szf1d23H1UZNo92WgLSmZuvFRgbCzGkp25hS",
  "key5": "NgqFe67FA9SrXTY9qsePXaRzKEcn5S3E7YiP7jJ8kQYMaPoe5dpZtMDxxdwNUFdVeLVDDtvhA7SugFYfxwUSJUz",
  "key6": "3n3zvT7XBsEPHDorK1jupRVb8srvofDcQXjDC1b6HRt58JBQdEYbGp2kxGKXLrRbBeaXbKaWJeRe9qvUdSM6N9jE",
  "key7": "5NCeFFzCkmo3s3goipFoA854e8qQo5c2g4uvxBxrBGyY9NdKGPzr5tvzbC6DKL9N2m8PYTo2BLzCQNkUpTZcUnet",
  "key8": "5jTVkeJJ2V1PTGLtpWcAPhWczypySd3UbftfA3LQyi8yNhGvgC9SNeVDtXp6ndHZGa2hy2MvQ3XpW5nJdKLqCQb5",
  "key9": "2ocMz2WHzMSSkmNKS7Q7tUm65dE6G8MVqAuZoerELxVRM52dLNtv7Sx8YimenAYVyGbjJ75KGG6cHFRefzAaSQxN",
  "key10": "5GKJ6piFWuP41e7rbmCq8PGFKd9HhoXphuCN3BoZXfkHxx38noPqSrfVsXx16r7VyeCRTMNn36PGQfpLsv9Tchge",
  "key11": "4bkWWKa5cp2Ykzp2czaQN9T96gJPfkLa8SuHV25MQxL13eAJvb15bcko3Zv6PUqKbvtCtUq5fwkJXZoy67PxM6FH",
  "key12": "5NzEt59VCqCwSjbB2X1bVooR3B7gbqWHgdbVRLd2xQm4to16XWt9uE6f4ejGRF3ED52hqGoJJG8DadCo3KL6c4UR",
  "key13": "5SBgBSEo2Cu82jY5SgzjP3ABSrH5uiEpZgwA9QJw6TqRL9vZZfdYxwr31ZissZ3zkqXT5L5wDwomscFRqaGEYgKi",
  "key14": "2VpjtpZFLruSFops48iSYtwxkUYmoeT6PXmXoYkq8Kox1prBCv7CygLPwE5q1kJ5hx1q8gMk7xpnYaqGrQq9asrX",
  "key15": "57dBYaUG3bmsMsa4w9oSG3KFmUx4vjdqsfUbq4mTe58TEY48W1oEh4b11N5wYQjLGcEDzQ5Q8w6zYPGuDHvD29JW",
  "key16": "L2VpZmRcZc2pwAJ2JP5jRSxViDC5EyYR3n7uKGEE2HzP5CKx4Ka1Vun8nRgrHCqtTSmXavruDNCFvtTSa5o4ANK",
  "key17": "3zsxjRDVa6zquKur8rpHagg1wvLS6ZaNY9p5sSNv7Rdxd9RebUwCssB7H43dMZpVGTqPMVg2oy7hUKNtNdfC7uFJ",
  "key18": "5fu7fg9X4PQnHSXCMD4XYGstHEhcPz3Vp4ZDZaXHExYag5QkoKAHc9cxCXLvRmmbvBupf1YjmLmwecz2LT9N8m4j",
  "key19": "5GtFB8eD2cGCPAT9EcpZfzJCpLCPYiYKaCG8SFxR8DMEP5TKMwMy7e6pEJKPuyKPiyn8rti1vX6z8JXeNNAsDFyF",
  "key20": "zNwR9DcbSNFN8waRec2DiChM1V71D9ZQ6gUbDsNdczVPq5dMdMcsrAoyTKgz6k85EfePq5QeLLgbSohsmS3GoPz",
  "key21": "56xdN8ukH62JGGEhHLMXKZbSdJVbjXsuKcRYhz1dBqE9KgASH1cFxCVtGft7ipveBShFXBKG5nh2PeCYWSJz4YVU",
  "key22": "D9WhwvJ25Hb7CTuzcQhJSFJ6Ajp6sjJieE5XPgqAaKtpWsrRMJ657axKhk4ck6yPsCmnjkT8qTkHRm8AZ9ho6sU",
  "key23": "5HwYaapFzuq1LDYr1ABzhBHZasyNaFn6RG9nMiPzJ8MmuWKSYB2YkSkPpdtYHAA8WbjRtbDPC3ZuVW4aN1p4q9Lt",
  "key24": "5NAPD9uffFja44ELaTG1EQBtKukJJW8s6kYPs7E9k9moFmVKSxoZJ8CzRkU7g5wY7D1tg5qb6zKjZ2TXajE8DRg7",
  "key25": "5DxGc8of11gXa7abG4ddYX1VTDZr8JZmGC3j28dx2AuA5X5RNX2Hoe9VMV9gv6K4Ddy748iPa2mtgVfavbjLWMer",
  "key26": "KU9cvS5SkrzDKzMip65vDkZkdY1EjYkHfWf4VnuUb92GHERbfCGa21K1xZZLTZfH39tY91FEGvRJQbv47QjkmRC",
  "key27": "58HvT1XnezRrztjGAWbVgmLf1dEb3u8rsuYVU72YQsvdGN4btdR3QmaobTtKHEch8wpwJVf4M3Mk6XDZUqsYQN2v",
  "key28": "63kZpabJD2K7trjCAeyfLh3XYvDQ5bgm47EBXotonMJSLr8MDidWvQGsGYEGZgZ5Wb9PoeZgzbcRE2EpJrBfXT9K",
  "key29": "2XS2cL9sCVhMnxj5AawJGuR8zepAbuhMyZCPcyBXHUG13H9jPjiFEfRqRXarantrLWnoPqmsxh6dvCx75MqGq7tb",
  "key30": "4hU48Kczvre3qawCneS1QB6TFi2V9jBrzyGLMuQ2hyvafvWujruzHYtSCddL2fbMdVg1R3jRA5UeD6HYcxDA4S29"
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
