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
    "5u8xkHrdTJYfKezYfCFxFu9ovE6XQnBsa8QEwcjUUx6SbcgiWekmck7fYNZkG16GSUhtWGHb3z7KsSRue7X4R7qM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xGgteutXTm39A8gRj1Si3NuDdVuVc6NLmWYBFhdCsf9bGUMnzVCT6nYJi9rB2LV1pdLJ8yEVdEtpLqKxjeDtRFJ",
  "key1": "qPocKuXeaMfyTRh1AxtXbKQwxsMyg1cVeiue4hd28U2hgmzSiZzYehYozGUdcRgGmfBZUZXTwCJ84FiDArP4hEf",
  "key2": "UakkBPV3z6boMtwySMysSkAAS7tLC7PBErx1GubGTY1shcgdZWHxjhrPYyYS69FxqziEke5qrc7Urca2gvb6rw4",
  "key3": "565TYvSfZxY2NYD6SmS8m3g5P8Yu6JkgfhPNBAKQkrGvFTkD5aqpdsC7Td9V19qeiNB9oYu9NeBBRDDp4Sa4qFLW",
  "key4": "5s4KFV9ueTL2pu2PG6QcvGCXuVF2URZ9iAEWyYLrHWVqaBkeG4fJbomrbn6qNsuTw5gKXNChSSMybE3uByLRaRjw",
  "key5": "9jXuaqfDw5y1rcyJCotkR5vkrrdpB6bKACEhiossSXLtJcq7qQgPpb2PqpxYAu2xKFyjQn4ZUdtsgdQmX5Tr9TH",
  "key6": "4QsTqmx6DHpqFLLnh5jyS62bFj77NjPCb12Xfe2ZFCjedyj5FCBVmPGza4tKWCAE5tEJ5DKkxWaLj8kgJTAnREcc",
  "key7": "4eTrjJf3gHL4hEYBzQKAVceFpVb1gaky9pSPr825rJSGL26Zs3s3CiiL6exufjTNqkTcacfbxgBroMN48YVKhnSz",
  "key8": "2EXVMBKiD2tUYGhQ5xB3uZFkjWPU9TCwctLooRQneiD6Edv19Xa3FzwGwruiYP8zszKQoBMFxnoGG5cPBx39Rtrc",
  "key9": "5tWozGbuGcWwwK289rWs9546NQNJ1EsusML3uLM7zDkdTrzUFBgEfypqRDGCjDtpHyJrx8uK2a9Rjz6V2uqCpXHK",
  "key10": "64XbpkwCCAjT21bsRHWHvB6fAarWDdXXc3eWKznVjAL9WWHtGonHxgvJnJfqcnetPZYbdaNVoqtYigtsP93JhEEa",
  "key11": "2jBYPv3tJbNMCqEpugjE4a1WiowKAeF2henrjMVT4HCTCxioe1kUxHpisZjjXP7k4B6GE7r5E8ibFwBQHtj9ov6F",
  "key12": "4k8R6zwtaqRjZp7nkc5R9vYqonchJdySju9jKXTtzUyKNKDLWgHaVprbQpKzaXTXu1Pedrkis94gN68wfDAnssB3",
  "key13": "39xKkaQ3SFieDqaZiMFrpGvvrubLduGSSmvQpEc2mKPeMazxChuExnFJ74u9bkEYB95JxE43vJ7c7C6S17cae41Z",
  "key14": "5oE2wSuD7Xbj4XDRyBCV1YiFoMNy8qkMmSp5nL74CmSoucjbq7gmxeSxFStrENc57xyppjDJC2afsHChEM5BDb45",
  "key15": "2J3tsBPzghEEFZAxqRFXLcKobbiFLZfbwHeazvt3TXMzMasmXrWYBzpwoRdT8F4otbPBKHuj3xg5xZkncfX6WeSQ",
  "key16": "fFSYHhi6o5fihwuCHjtmvg9ud1LsZCTC5vGCCXbpU8nZUX95wbfCGQWL1wwBUhNMgbDCaHyCxNG5A6g4tJ938mN",
  "key17": "3zp8ArLBMEQcQczeD44oLx5RFQuJ6RdDvFafbJ8gPzy4eKXNvH5WPEV3BGXjxQ5ZijPyXxKrt1pqfjRLWdDTUJui",
  "key18": "5LXdcsdUkA7a7jiKUJVmuQwr4aMyVEHmAeYUhV5bMZkbprknZEJSTB9zDXU8bpa6UAqpFFbHA7MbgN9zx7nm5yCQ",
  "key19": "5rU3hJProdaGX9TaBNkYeZZVG5j9qVTfWmvtvk1nhs5HSzpQcFELfXfAHBp8Zk1vChrm5qZRydob9SVcmoBcdWZ5",
  "key20": "29yZWtGiz2GAsbVKKbi8KrMmArFw6FEm8kqgzeckTmMnEStzKciVvNXVEeMiMKZgA17Cohx26qRxHKfNqE5Vjc9F",
  "key21": "3maZEcbvtkNHFfgiNSdXRgwfGLJ4V5jfsEt6X24RsYELkfKCpFfWLEBvwAPbXFQp2dT27wEdD6bLF6YoaRZDMDzS",
  "key22": "57XyK6gBkFrtxnxAYTp7LJR3YL2cJCyrRvfeRTzEJxVFwRw2esqrQi4SkeQb4RwJ3xWdXqhniELyiBX3LZH1dJSh",
  "key23": "3FDYhZt4vPB81N8j7U55YGMyaGMRh6auQtXEMuMwsc42oYns6XJhDdafTHwWcSJp4jTqrGbJRrDghwBk58iabSxD",
  "key24": "3SaM4Lox6JrGU2T3JpbBAYp61kbpkCwE3auzgUyrb2TN9L8mn3BzJUMJxx7WZd3LMKtwwHzyM7pMThYpx6smJP3J",
  "key25": "3f3wGaBiNNQvkLFEm1bYfLSy76DNumncjZQaYvinQABBBP6FDwWDtePugaprptT8yMDriAD6y2rkkBvfsPoHMZTe",
  "key26": "3PoZi62fLfaLpYV7uEXw6yAi7A4rb9Xp3tU41GX8F4QdQCmbEFxZPW5zDkF8W2pkby2h7H3w7R6etCLR2FXaz61V",
  "key27": "5NmdfTDEim7rAMihCZcCqC4PLNbZ6T4wHTBe2wrUgFYnNGdGJ6SdBNVwH3nRJv4jX68FaM8MVhG4XjPjYzDTV5h4",
  "key28": "3CG75KnUS4Rn37ohKF7Z4jQLEx5zPzeHhPZbufAwjZruj5eyb41vKhaH6pWEbRN8jufdhf2u34crcT3UEZbG7uuK",
  "key29": "3d9iKvzaGfG3EFwVg3aEBtsRy8FRtPurUj7ioB7J91dABa3u2ohr9xq2H8X6SF5nthEVNKZ5bc1tNBL7kRcbc3ho",
  "key30": "3VVBBGf2VFLpybPgUMhGhwEZaA4zNuuvqP24oaD947Li2zYvg3FC947jbvmWjq5PGcWcnt8BVH9TdXvcpuiLQxtR",
  "key31": "dWaa2KSjQuRG6KHt7iQDRHb18xVynvnRkMfcTFtscgF9dtLoQtbuGHptn4UUroNQBaGpe3MEjBPQhFev3LjfWsK"
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
