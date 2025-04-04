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
    "5FkBBEN4dVJCmxDB1bvEqdMUaR7xaPQTH3QDorDEWVQPBUeMn12Bsit9kUtz6Az1UZJikcdjhCDTr1pda5C1yjFJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cQ7EvWa1XnZd2J1CTFpwbGbzHJ9U2W7yPkwZnnccSxURTTRo9m4Bjk5YGpwnNSRxL2qQ3aEdEioKd6Dbq1QeLL1",
  "key1": "4TBvJUKSPH3NbDWqeRGa2eHgxpAvKUbJJtLGscBgCmn5gKMcqtMXdHWkmtUeYAqzHf47erbsJ9dqVqqiu3FFkRf8",
  "key2": "5rs3osJCorHqgVqHnYiEZakatxPNQ9tAcC76GxeqH8tRZTQyDMvudpNFpLLCUrM6q4Gok5ooztNpKrKm4BQqs4Kg",
  "key3": "2xryK4L2T2RtTkGKmwczbieDz9MqWzge2HZAvMeW4RVnVGsco4zpkuKjtUWmTTWqHqaz7a9T8xHEL4m5rQ3XeeTW",
  "key4": "KhgNHYLoqhF9hk2MWxqhhkaHXdRkVmUVa3tUzooPN8xpARYEQ6yYZt384YByhUoJahZFZQX5e5VLFRXKo8oP96o",
  "key5": "6Qzab53mUKXzrifeB75U2oZ4qtoChFdtarKTy2Wq3ttSzxq8SrWjZKnF3EFGZ3fSmZqPYqhoNw4vsRDE8vL5rML",
  "key6": "5MirmeS61YsSEemi62fqYWPgzLVUi33XJSUVrBRsX2NZodQJzoaMNR2zjEQ4FPR5gYgWg28nFLi7uV1goEGtNPaR",
  "key7": "59zEkcuZ4tr8PXRNGoRmxEme3EU7k5WSrpHmGNQapezcw8XZ1p93vMnyJym447YywDAF82FcNFrRfi7zP8UPVog1",
  "key8": "45pZNBoudXErRKHXVEbfwYYyjxM2vpqpDqXg9uAaFPFqKApm2sUy8iJjJPCCd5fjjnMRAeX8dqQc8Ag1pEzsoaW6",
  "key9": "4MPmFACRriXNyyhkj7mh6pMkanj6UdMVzSfv8joKPPgiG3QLuYbqu6CK7MPdw4LPSZEDN7DpBN7CxabGADjWXwXw",
  "key10": "2UbqYe8WBtdWc6B6x6pDCbpX92Nbes9wsLzhuD2vWGYxmvAZzoKhdybo1An2szY2Qtu1puGPT2oTw5hmJZm6k9Ua",
  "key11": "4FMDndypAHAaz5mYEG2tSoKy97gAWjFcTAiuzya1mWds9Fz6CdR3FV3oZX14Yf4irdCxrUhWAQ9Q7CTB2eirEpM9",
  "key12": "333tiJ4476yjKLwFQmrqXKVjpDcdc4z9HYX1XcAt47LrwACTjzwMnuV94JkLr77T5XercXBqYoCF1R23NaqRwLXM",
  "key13": "48jPaw2nSFoBCGLMcdn97ShjPJveicR9Dw413AFzruiaRB3h13Reu9iaHYwb26t19ixorA48VmqpfWsjyedDXQ7X",
  "key14": "AFsvHvabXDi8cpbLRub7FFcDTvpvDbCjKacNiuuukSjd6KbzsBLCmcjHUL2CoG1z6a6SgS21rPddRLz27h9yovE",
  "key15": "5KStN61Ye6iGBFpK8xjBQmUMje4Znif1ixTXbc6ziyJqpY3KjMaLf8ibifk3PykVe59wndzuCocDtEefkLVZJzRM",
  "key16": "h3vw2Cw3an9JNoDS4QhEqFQiTxpekQeVD522YQjTix1wwwZjoRisN162Hg8kMU83xzv89RJEJfXKAkYN2RN5Rpi",
  "key17": "5RLDPEmUWt5NpAircr6QgrnSYLVfopvTTL5qkz1qj5poNY4xg5TxWwdjW5bxq1pyUfaitjLo9V5Fya2LYc4ZZMed",
  "key18": "kW9RqWGWi6kqzFH4Lf7sAx63HhYkuNgJJB7cc3yCzc1zo4koV84twCSZzZmqaKuaRn7DEHJ5QzKXoGcXduH5MWU",
  "key19": "2G8Nkq4Q2sisTNxFipezVZwaV8s2bMdioz6y7GaA6x83vpfDu8Nh1KEjvcSijZnYKTrps1QRHtBFwwjyyPv4cgvS",
  "key20": "4ptiG6L5xxJeQsZcU2RRA42wsczQNoiqm8AcQusgVxPSZeyoqdyFfqz1p5J9Tc1HFCgvdrBhQnMJ7d99DTifmQx3",
  "key21": "5YrwqFkVuZ9UHJNW5yjNkNrLZVwbwz8m44WfV8HNbdt3jzU9G4phPqMx4emd4RYHuWCBjEpddTdcPPSMsQw1KgHC",
  "key22": "3Bpb2MMa5swSkFsw31BSDBZ41jb79JXaqhEafVnMgCVKLshSWfs7YgYgSP2B38n5AjQNh3Nn47TiG4X9REc1dMS2",
  "key23": "3mEjyj8mGTkc8j92utQeh4ZSXLtqi1wAhR5HtdxvfCeqnyQFvUdxW9f7WFthYL9gnJJcNDcNYWL3MMv8d8iKkmua",
  "key24": "5UaeMtiK1fnx54dzGQcmhnkdziUa6KXP6inf4qdifRs9Xhejek7FC3vBArQeErpQS5jVp6kwQevBTx8vMCyrDvcs"
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
