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
    "avy9im1mefTfeAAVEKBEnj78eur8f5BfVi1vXPdP8z82ZzfJ9TroSmvDDzCM9uhV3ydhVoaZWQrJVSYby8ywJwZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nwngPqYSYekser5HBUGpxhgQfJm2Vsfp3fgP9nSvzp6X5X19EMMpkThNRGfL1MGzENTEzWuKSYPh9LPDHCsywRe",
  "key1": "63kK5LEKAfrE4UdQFJC5ULYsphRkmvfFaoSD2kPrvSLewiPmd95UxATwHsyFLmubekcr9rAcvpXJcEvvv5KVM7u3",
  "key2": "4zbgC89sUYpZVUe3h5HUaMSf72VZxQVZ1SgTgVScg1H8cEEh1CDHpcFcKqTcqVYezsNNUXPbrnZM5tcRmh87oeYp",
  "key3": "3kKK9cz7huvgYGTXDdRFQdwK88BiyvxaggV3Zwu9UmBeFgwAnGdhpqYZLrf1rdPkwwLw9BZxes25NbFzNRWcr3ZY",
  "key4": "4Uj4rQUV1eDCHqa2oqhtzeFxcUA2fWjcgtQqBv9gJz2YQUWyc2zhTQrfrgPLtyPLVsXaQWN2gPTszqshpD2zvBQm",
  "key5": "5aq9ff8e15RdzTjxjjf7Ff8Jap6ZxUsX5F2LtuB81U36JRg34DL31AC2A2Xzq8QLGFJ3HXGW77LLH28jt8qgbXvJ",
  "key6": "5ZS7dnEgJd9enQAmAFfTqiBhWySV7U6gi2jVedbPwtF25K6UT5625tWcjPKFaUHHVZa86jbgQMCiwcKNVPYfCp55",
  "key7": "cyyQs5gsqD6wZAY4JcRUt1Xuat7MNjVGajBqbRD1xcrzxhubTX1RaxSKkLWmu9WrCfCdH3tFt7cZcoxWJryRG1v",
  "key8": "5ampDN8VyMjsMgYcJGioKESLNbwqGJgFLdVC3WTFQreT8LrokSTT2ddFfb2fK2jGdi9n4Pmsxyu129msKDnYu8qh",
  "key9": "36XtGFMg65V5BwRyoUjfiFUaXmqNgnGMk7aXgq6dZ466YfajPeD8PbyfQXQkPjNpGjWKB7i3cTd6n228L1Lis171",
  "key10": "3P1Q29VuRNGCMwHiGwEb69Z6gtuxcrhwrfQzZKSzDu753RP4E7wrLg6gi3Zjx8ekZQwMkHj5P6gThfiwqqMfJVYA",
  "key11": "2miwZTy1sgFBTKwzhd5anMbXUakkfKzRhXYLt6A2v3DFBRwDvvKyFzizBqwAK2eZoqcwRm65SEwHcJsJqWjMzzCP",
  "key12": "3sYwNexiNNjFvMrsfr6m7WGMib8pP6KgJqa4g6DM9UJEqg9i36izezQ936oGiu288BJPsLPUE1BG2eNFATr9pXfA",
  "key13": "rhpxUT3hpt4Qobvfzb1JdB4dRCnzF4SeYkmrexV9kSSkeJLqsLdctmqrj8yRME5AFDpKAas8e9PcyPs2Q4Vb8up",
  "key14": "3wF9QH45jwADs7Z3EoZtoKdYsKry5y9i5hTxjJ3VKukYqyUEw6zFspy82ea9wz76sof3KvaBfY2ap6SpU3RoR9V8",
  "key15": "4LdN58sGGV2WjMGfPi2tkNbTJQqBaqSXj8BxGRnBw5j1bKTadoaYe8oRNvtfQvDhYsNYCAGNKju9FWn7sCrBsqNa",
  "key16": "23RuciBVJ5wXZ8A2pweLrSXZaF7QXY4qSBQ6hNbaVpAtxqBSMQeJTEbiZqE7QvNLcCFADizGwiy8AnTpLSTmXoWv",
  "key17": "4YcHP29Tm5BHiZHBbByFp9jqapsoduyH7PSZKwPjqQ2t7wCyh8GC2qLTsc4gbArvwkjBbGwQH6eTmv5cqJv11SnZ",
  "key18": "4p6Ck6mLEjioBzhg8DKgMnshMTicnthuNNQgbkPPs8mXFSfZKpnE3y1vYf7vQXZkzc4CXECgfacBEBzsLM7rhGjF",
  "key19": "3V3yt4iFJgHPUw8uT5bkTHrkERC65YU9PksTXAUYRxAj6D1AcJELWfYkGUoYcb93WuNMjCL6ytnmB5JZFsKQHCJe",
  "key20": "Qhb4EhPRjhJCPnjiTdh3HAzL4jSHJQc6Pxfhnn5MzRw1t1dKqgJREo4vhjn6o9xYbE1mATbF88qZpkhh9a2vL7z",
  "key21": "pvG7tGK7ML185fUQM6Ss1EpX3pePwXMx4CLVQ2W7aRou6jnN7NgNd4AjGaS18cFkn9CVbmtWEyJ7PEwqJ924RVz",
  "key22": "KmYyAKPeT8wTjfUA8PUn5G4LKT4mXcgk8Qs2LF4haiPrtEKnbYkcpqnjyYigf7fD6r6cVQhj4B5L8aRaaWm9aSn",
  "key23": "55pNQqGx8agcJxxEvUK2caqtFdeXpYfJKEF5uAi4Fmid7u44izEK4RPFGS8ECU1m7Wv33rxMQfnBBNyLzsd4DUbN",
  "key24": "9xiZSNqPFQ9wTaXEgJvoWNDGmaTEAB6TaFrTuT8YnhWtuzzyjEPPCVYbJ1omjxy2iKyNotQsiD196V8QQUWYgQN",
  "key25": "39AMgdxTKs9W7DGeR6SnXthvrysCfsvceMtoMRzw7EhMPGsPy88hzXygZfeBdTLQgumKPUGxi1kVdRv9aqVrbhRu",
  "key26": "2Upgz2gV4DV1YVupSGjSXSCYw4EQRgxBoWUhcgxYePegFLuKYE7a83SQufwFHbG7uvtzak2j1ztKPbeV5C8wRWpt",
  "key27": "4ThxDZ8JvexT6pAkQDPR9dbZm7nL7mFTYWnHMdZtDq8d5EHMCq2B1yYWFHaWBXHALLQ1SVWkWeBk8NrAJn6Cj9qK",
  "key28": "2ouowgLbTACWrFxzuqkp2wFfsciLpHAn2cz1axroWnz8xZDWenFa8WqBz7gxR2eJwBJ46aDEqhW29rAJdWaEvpmC",
  "key29": "5EmJfGTAiKM9Xo25tBsH6SaoBrFirPGDEASCCBns5D4FSAjTTLvy4q5xNy1hjcPJ76w8bnYfzZUp5D6LaCropE3o",
  "key30": "4G3RjaBnVUYySa1hFZ8QYnTQ7wFmHDZtYEfib9oyeFxU1NJ1Az1hpzFWXmekD8dtPcaE3wUNbCMRM6gC4gAEGDzJ",
  "key31": "2iAt2gLmrwtjqEnBc5zJh9194ct1hDKhJb7yvCKq1yi5PitVQG4xdQbtgvJLCKy7MeiJYdyK2M5cRuuqUx6QM4rK",
  "key32": "5S9HRqP1UGc8fehTauvvVTwBeHvXQyzt1XUjHmYrYmZKcy4d4dYpD7AH8cm8GpGEgnDMqhMTw7SHUVpqDZk1qBv6",
  "key33": "4WCxrZScDBuYQhiS3sG97htNEvL8C7k6hFTphf4qN7xHuB6arLTu5WDqWJ7KHHtoYhCY1LhW5P6Q7oUQd8VgLEad",
  "key34": "3r5NoHK8hAC3rSXct31VEeVaDsNDSV23JnBEPLzN262tW8oPWv9KThz1ePayv742BY8hHiuY8Fnvxv1vC1bpAfbe",
  "key35": "KbgVyJBeqoTHd2YaPbEkcYBWix4pC4sx97FdosqTpU8BvRAug9hdDX9avnUh2xLgksgQtbSqWiQ65Gyupuodnqf"
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
