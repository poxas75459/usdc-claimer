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
    "5Rx8zPQJidufGF6eByTaWMg6h32zvRBaMdp8f7cfCU1xqEHJaBWTEHogysUZZhn8poi3B9vrdWFUQs4uFn5mYbxW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LCFNyNvpEGZkuo3niv99uMSSGckZJzWjx9iJL41mMcuFNWkMy8YvbgqwuSLgNjFxqtk5Pk9KXM6ui7mceVGTWZB",
  "key1": "4YUrFLZ4HbnVn7ue46AU38iYP5BsBHpbcrNtWHH8yedM1Y8riVze9NaXTbDmXY334KKx7rjLZL6pBxorpczNXryp",
  "key2": "HADAmD21GHaBi1tsgrHPhewQ4uzccWKcBPPT7N8ZHYzQK25FQe4acUPwUJ3xTxwaRS3AyUyjdq9ALyU47A8HSm3",
  "key3": "3njHhw4RbjfiNus1YuqXYGRmjcC8mcZZmpi4W85Y15Tu6WnxFYWBjWVUR8gp5HFmTLnBaDwCMDVVH4YRjc2j5WMw",
  "key4": "4gpbVM8WqaKWFUpyJqbyhNRwwNtuNwKXqKZtQdwMBjFYGYoQKNFLogU9xitPYBEFNBDW9RWobeMYktDphJQDMmrX",
  "key5": "5TUSpBEsN1JC7a4dF7emn32ZhoPfVUBfG85aVffzfoya19jAuEnFenNdwRp4zMCaw28fwiB1nA8uMqiEYFrkHorU",
  "key6": "32KDzprwcdjpyjc8B59tfj27Rr5LTKozrMBBRM7u4NtSysVNWKGbGedWWh7CT5qSVdkU8BYcQiRn25fLVcE6wRyF",
  "key7": "4iDcr9GKFVRWrFs3c4YS4ijB3m8gB2rVm6EvNkEDmXNpKo71tk1RorPDzG7NHAWTuG1Sus6V6RqaxYxvJoJYZksz",
  "key8": "57NdikS8CYaFXKMisrUEQ6fH3pTgmXtd9Q4WrWwNZWXXoNYvbHpREXn6mP4FhcLsdKFd7pjj2qPsjFjgzhucqJTi",
  "key9": "3EwX7LURQuUysDiMvF1wa6HLcy1FvZW8tfNiEV4yik9WVAw5bDSiWvhJFMCpPPvifZw669PvoB49jyP78zpEtJy5",
  "key10": "5UHAMR18rMveKod9u1XU7s513WUas2kaKB5NSfWNH9sJ9hMp2jwVKAdZJ3wBPTfbpbXV5vx1sHjsQP15QXvh2GJd",
  "key11": "5i4t8ZUCjh5AjvhnPsCtyyHUW2vK9GnRxgFMhqmcn5eEzXeNeXxucK1zKepneY4CkiMrwedLWSDCcXLpU87sT9wB",
  "key12": "658U9UCy8YQZLZ6Wxx5KPeHveFzStaX9eBemhpZtYk6BsTvrs9zo7T67G5TMgh73kqY5zfnHQiFyQP4EqYjikk1T",
  "key13": "49Az5DVZ2meFJWf93Rb3DvE7oRXM6VFPJ56zmtYNdedfmdy2Uhe9s2fqBK3ZERV5eLEqqehCvR6WYgDCsiu9ZTBX",
  "key14": "Dk6pPyq3rGTjEZ16PGacHE9osaBKvfUUQsxcNPPWVdyp2JWNeL8Y7jZdXfTVupbCnGD152pShrmxsrw3EezLgNX",
  "key15": "3tcaGbqXyep5Kvb6qM7177xsZQVDELPr9AkB6SHMFi3Ha4gZhhVEfJUdXukRwDT1a6W8zwfTB6kv5q7Cs7wL1t4r",
  "key16": "43WLd3Z7MgAD1WBZ6e4yAKrfHAxmjziY3inyT3rwfk4tnvoi3ZxXicPa1wARCjp1RZUfshB6Ayu7hHNx3YnG125M",
  "key17": "2gz1b4HBU35jeWNHUjcJkLsRwSXdriMnQBdSw2sbeUbCZEkyRUh21K5HkLdZHB3NVEvDg7varKG8kNVLwjnoBi1f",
  "key18": "rVcpgkbERc4St8J3PhDmaZKpXq6n1tq5AAy22Ps7n9YMdY5u55qP59gfqy14AB4LvcVW4b3jNHt1GN5JoH5Vg5f",
  "key19": "xN8ZBZZ6ZsNapyPUBHVHFwwGqpZgzPgh9qWKPT88T3vBpjbopELsiXGaB6ENGCmK9VM8YwYcUQErJmAmq1Gpgsi",
  "key20": "3BdtcVGCg3b5YAufxycRo6XZTvHMkbM8mSQE7iRqwMBocwcf6fHAag43ShEtQg8J8ki1n7EhsTfJ2yHxi3WaXQMH",
  "key21": "5A3SoiUKjsd14yqPx9HkhNcgzS3nSmvK23bDUR6k92RG1SuFdStWN9CFwct3TwVDoVZC1XWDD3jg28XUA22tn7Vh",
  "key22": "4GcaScNxKTUKRuFG1VQEbELL2JEdpcV6w2ST9rxkK5ebMQF1a86rsQ7deCMjujqrxbGffP5qLQ4mUa6gr5ns5ctV",
  "key23": "2DJaX9EYE2euo3NU2XdgjwcdGzbZCZSDWaj6LMQVA4rE2WuXLKWU5F9VYgWwE6U3rCPiDCePWy4uy2XHbcjNuH41",
  "key24": "5mkSThunEM9NxnbRqNJvf1U4nUEAmvi1FGUrDsmgn7hMoGoH9t8iJPJaNFkxVNNMPJzxM8WTgXWeuYHABA5guUWA",
  "key25": "qeYApSVa1K8F3AaGb3RGWHEeqzAQVHoXSJFBqrkURJu7dtBfw9tzz75RM9MKMdhxkC6uxkFmdNzFUvtGqCuAzg8",
  "key26": "4nymmfQB7n4nwqw7Ypg6u6MaNNw75GoRrD3VfqprshhtRXkcKZX3EobZWhdWG7NXho2waw5tyV8bVZFhoUMQ8ANY",
  "key27": "63mKmPmLbxqT7ePDhrjQ2hn2Lfi7umiqR8zMgncBNH8tDSk5M4AnPn7N6boa6tzB5QyPNLxNtwdQ5EQycKzdV1Mv",
  "key28": "2WrLfETF1hV2euHKeg9tbj62GMHissPf3bgR2ppy88r6mAiPjdKHaSNqBhhWx9v9mseCoDuNHVCUJN8GyNB1ZoYi",
  "key29": "59ne79fK4B1A4PnZFbNqrwEYByNmEo3YUZB91118AXXaP9cY6rez9RqAjMTjW19TRFcyfDat9wF2zeF6abizvi1e",
  "key30": "64hqddepU7CKHXU9FLLevC4W8gzkHBRmjBfdjCZkehcBtqTVssEqEe8GUHi5rYkSc2GezZjPdfgLxf1p2kDK7TBE",
  "key31": "4V9BjCBejWyTzHkQjYqCr4du4dTXfbH2xeAkqoGQNzTjucvYEdpiumboN4vBgP7fJ3YCBYicQoZ55iT9pCrqCeJt",
  "key32": "2zbbxnW1BhyV42QpzQN1oj4i5i3Fgx9384jhQv3arr5N6sYWPfGipWr8rxoERAHYLTvc3KLFaSn5FraPhUBM2GEs",
  "key33": "wqV6tZBoTbZ5jVJQBE3QkJttVHANcvhX87Ls3RZB2te1RPzXnPCkzZT4KT24P7WTfTTDG3Zt9JKh1jVhkX3F6nc"
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
