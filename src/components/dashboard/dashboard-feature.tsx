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
    "5ou8xRiHELtLD8sE4ETEtWV4KeukyNM2vU7VvmBQCXFUK5Gc63gwNXtkUfuPRSv4WVyXyCvnbjqCULvWuQJZwNS7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KV7ccBi6ZazbNg54XRbNPBbcpif6eRh9PjPo6EhYHmTDv7qoyN6YGSzid2iDySCVZLg3RGt95KzGJR4DHqQCeGe",
  "key1": "3jezgQz2LdFqzqetoU89DTfrgLvJGwsdbKT1fKXDJMt8d52kY2FXM5TpwHr49uQgmvuE8pu7taDTkjXkvhDSiktn",
  "key2": "2T7Q14sEuTN9MYPyWhaYWkuyMoqfjVHLjpCVHQnKD3eNzsF34iJkmBSoJDcJJAmiUiqt3eowELtAkuLYGZiRaZDu",
  "key3": "51fLUuEs4jT1v7H36Kzh9da49AqShTzmTTiK438S12iGzHh4XvxqTRFiVUmGzUpJ9sPVZ1Na8jaGSaRLypdvri4z",
  "key4": "2BKp5By9CaJK5pkX16JwXiYQ3QEAiDA1MmXzvU4tNSPkbgPfQuC4foz4jffQtEvSjA5umyWTjH2s3Ck23tK7FVV1",
  "key5": "2n9ZRV6cc4hS3GTvnt7YagbRHVzYuMQFCfaB2J9HWRpkTFKExowGLf5hDKptUWfRU2MzpADKFbndSej2p5UJJLYW",
  "key6": "ExqQ2pmfqCNoqQBkwexhw955YemcdbEACd95ZFmxUGF8rPGnNARrkbtDtN1cHL1f6KU3RyHNaD2e2KbkyKdH2Yc",
  "key7": "5vich8Tr2mepR8ZujQCy6nNDHgZ292aNztmr1kQLWb5eH3566VuZJageUPQj8A1uRYjtBNPK6WoxBVxBStQiSZ5C",
  "key8": "KfkPUGLFULnhxwF8jy1qWNj3g8ZeERmoMfzD2VPuiP8MqTCL9FGfZ5kkHMrouNNosf53QZQwxWraZLLSTbTwP1p",
  "key9": "4aFzEC6E8iHudaYtkonzSrFoP7x5iqtRCM6DP9Nm2dWYmYmp663ysdnNRQ4hKb2Z8kgDiJTjtN5XRUyKJbK7LuiU",
  "key10": "brWqJqoTG7dabnFhfTgK4NDCo8fBTNHPvQG2FCrTNwPas9Pp9QtNeUH3xuZMWHRixgmXL8h6eRrn5iadyZ7xsS6",
  "key11": "T8pYNEXGL1LL9nTcMLqGrZwekkMnwt1HpLNsnR7TjWaK5g8fWHh9tzmbcF9XWUzitHnhyuPvmbem1CZVqEzbuRb",
  "key12": "2S9AZD6VP1uJev7gQVSL4tjhemhc7z6EBShy9KrGAAstXsxfMkcSBMGSBP4WgrvsVqdtKv1HSmmdUSV18TT78E9J",
  "key13": "2Bszd7rNJpjKVUvYPk2tFHeCazzaoveZPyXHgfApmo6jtGttCWXpK1jvXvYSoCc7b52fusnHXMpMwtNG5ndYykq8",
  "key14": "4o8NE82URMqqwX6FkwKfDfss2iW8BojHCwPGDmDJiAUuqYshgdV8BeP54zM8BPHZPi7SgxmWdCNCD9W1xA765YPR",
  "key15": "3PJFsjX9rZXExBdujVJJpcNsD6wD8Udq52skP6FLPtoPvNYgq7xmiuqeu2D2JVgiNkSsKhSyVxJgqBECmvGiA4WT",
  "key16": "32fNX9YShegzU5DZsnkhb37mATyU1jXynARpobtuqkzRZ5tN9iHrV6yRwua1jBvfmxdhTWcy1ecrgRAnJQ7bRUg7",
  "key17": "21qbKNQBbkBxCVYztAnj86jZTGXS3MfUgvZe4nb1Ke29qxgR9dKofx4AXBLLmw94WbQw9yz7n18cRumNeoasj2sQ",
  "key18": "2vzrriZ7362n41AHWpx9w1X5JVJ2x8ZWpDRz3KUdWMfCCxcTxLMJWacpDytn9zCUwSyFPiNWdHKokVMpjqfhcrZs",
  "key19": "7Zt24TBD4XoU6buTcPVsn25W8r1SYHJQBMfKn7QEByLcX8XG8bmWiM1MjMzETddSRwi5Kb71m5qYj9oWVk8sBFr",
  "key20": "4169uVYb6vuLGPM32sJMaKEgWnD8piHL12112bk17d3wZwXheqJivrKBg2WSb4wSfXfg8yvujuVQpEBiLPyr2yfB",
  "key21": "2kXbjwi1oC88CgZN55AavphtAxjYS1e1atR95Y8AePe5BB5MecJfwcy3kChcxC9UEWKH7q2NLrkABr1qfzu7ggFU",
  "key22": "67TkxPygPXZ3GxSeeismWPCteoqWnyEFN4KNdTWvQMt1NmDNeLvV86jdyPSbDjyiyAZjQW4RaBD3w1hwpcXLgwDA",
  "key23": "5SXmQFDko1eVtaCkNe6ZBukoxB1XCpJNmbPQC6AyzpXJEVztsxYAU6QYfKd9GudC4x1rmYMCNPbAtPmF52JJdfgg",
  "key24": "csDsST9cYCR9Ycr5zPD6EUJfvde4krLTQC2ngEDjaxZ6eqaUnTYCtngiCmETDQQcZMj3dMeEsgGKvifgxjHzn9g"
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
