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
    "2S9GJRxf9pfhRf8AR9i9Fq7uiB7xUmhq2Yp9SKW38cQzFLY2Cy53ssPP41PRQDRDWjfCtkYw3QSAZNyrkzcbg6wi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28LR8DUXbGZjzM94upvxGeLy4xejiM652V5W7Znk8ZLL8SK8eeXajMzoT6hQ5sMBPZA69zm4j1hQUEx4FgBK2owc",
  "key1": "5r4YABZdL52bHYqWpS4RJy63UyVeAH3m8VVCce3qJ9f8P57WdXCLYCKrYNCNeAoEEwkR6KGw6aUzaEo8QEtBLJkF",
  "key2": "5ZUbrgKyF6nCeS9XzX77dfDGMosydrHn5roFigGFxrVgU7vTN9U3k97xXtWsXjozBKc1vYtUQBqqmBQbGraysoDD",
  "key3": "2YMJCpUMTXePXbHSxme4bFQdGrVEcNMr2vuL3wxckMmWfGtQ2cZinsjcqkRhKpi2AqAQf2gatgdHydWmxvSTNQyg",
  "key4": "5s3M2a9KUnBcmNzLXBrMTyj65p6cDnG5CC9u1musxfa3U5iEw1Ydwf2XMYRgdzzBjiYoS4aM3TSjFzpibyT6JYrZ",
  "key5": "58xNp3hLrQRhJynrV2NR1PGSJXTENFsABpEGkp5DVWreNwALKr32yJrmBUvXihSgN3tkzM2NrD34eFLeiuFWGao",
  "key6": "5WoABLyN7dq4Pe77YgiTnhWfKyL46J5bWPGtmYMemCZMNbNd1rpnFoHmLdJ2tsxXf54cMe2XfPZgmcErwpRHpDLT",
  "key7": "4hXXWFufeP2TVsrGySFxBSUE8zhzz5dKpXSQZTpmes2E7paZuq75jNUvDZ7XrETfwdCYKAAevjJs33jktSbRBBqj",
  "key8": "5yfz6bSmHXJW72RKWy3ruxxq9cwma6njbN1ywXEkxBSLLXWpKYMFr9CrAqoMcFmeiqjvh7Ass4Gkj8osBYV7kdEt",
  "key9": "5dG8jsV3rq1ZwNocfWmXZmgJmDX6P4UBSTzfTnvog2QnwfJwTBnMSNRUjsSBHDq94519WTxgMsuMgXS5eR5ushk7",
  "key10": "21oPNQdZi6VhNHqWBGwN2k9TzcP3ew5xLpAKceNmXwGAcXUqh7JdALnqKzdEbMWQqrXvswEUDpfqb6pyis2YMbJM",
  "key11": "5GoBNAy1aHbqBHinQe1cWq9gKCExNrXpA32tD53facgrbrrfmz5hF1iUvaraVMM2ddbN9Te2T7zTU2gVW314rwCB",
  "key12": "2oE3QGyVkprWuwbNZqK8kR1aQZRXYfZgWhomxun9mFEAYC3V6kRrqchUa6T2cJtYVDrKHXgyj9HTgNo28xkDKt2t",
  "key13": "3RHTHJVnZGk1ahGZXXXXPMmRSkcoztj3b6bP19s1u1kwdDAqPDqnEFzCUh16ZrQxHpR7s4MrVPbdCJ4HeJCV7b62",
  "key14": "3UALH9LWaRDtADEXS5Ymv2eLp89KvbWERuowotac2UY7ja9i1zssuE1S9EexsaQq5AVdsaXecXwizveED2tgYFoQ",
  "key15": "2CqVz9MkC1VMoQRTQAyXr64Vp7KhVJUXQwH3jFMGNReaoid1UPWo5GrHkPyLa78LfLH1hKoqat3GxHXqajitGteB",
  "key16": "63X9uwKUfeTmEZRwZ7gnUUqRhVxUAZZNr6g6hHJqRAiscVcmydVpjYbHAZjy6ubwKprKhJa4HQCwQNV8cZTnjX18",
  "key17": "Fs2Fa9QWCFzabeb7YSA5LLLrN4VR9nhgCy9XmAsCdroyzGU8NFCnu2qKjVbe1y7LRukzUQAEtoQNwidXLVjyFPi",
  "key18": "58nvFnzhvaZMgnZ5eHMFrBSaWHhzoijKD7ENLuAhPNCL5rmAgaB971No8L3GBBj8hKtF2TfCp62kUe6exYRE1fcy",
  "key19": "1yD1yw7enWDapNt2AMMmVA3E7gGmSaHcNenkgSvMtKayn9KAy2c6eXTCtom8ryzTqkX1Y2hjJAEjQBqpHmr4s6X",
  "key20": "UXjrMvDoLch3T9MqJKaQPCCNvusYhvhV3LV9pqqPRmeNzxdTxjbnFPtnpubPzgomWCDfydp2xALF3Vd4jB1pMvy",
  "key21": "MQyb4SQDfMHFWaRZpZir3Gmb4t5VmN8bGBPUvwLQmM7JoWwHnNLNmSnaicaMrnVJtVGff5Y1vC7nsaZub8BJvya",
  "key22": "K2dDtmPcUTtF6m7FxRBGmqs2UzDNXadd6U35cXKKJRtyq4mzyn3VNS9QSNyJNrq2PvYDu1p3vhS5LxJLa6AJ1AZ",
  "key23": "4GychBs8z8wc32MXdPDC3QuFWH1treTigWAQTQmPFRB9vu6wfr7tei2J4W3UVWtnDEvRyGptm8fZGNX4gbWCnUBn",
  "key24": "5SQB78ehjUaz7mfRNve3QZAi7xsRh7oKZQn8MELzHn7p2rFQg9G3yFe6wwrDRoBwpifA67Uz96FZQNcpmnJQkaTS",
  "key25": "2MQkRidkcLmKBZAFd3hw41zE3oM985Zi6cA3VhovyUfEvEAfxhppGxhesjr5w7QsD9nrYaH6ab59wJN8GuXMnQFT",
  "key26": "3AkJQitSmR7ebLr4dn8P8XbPCqt2rirougc3aDRQEzimoDvGXFKLxUSyDpNTjJYLPSU9uSU3H3ivJgfJ7vYUcvD4"
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
