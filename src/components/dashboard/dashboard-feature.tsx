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
    "5xyvGd72jk7QGfefQQVeD5jhn7LmpJSh5W2cKwE113VBdcVkv2E31AGEvaW9wjccbxZhU8SEgNJErPdp4BLQnBFG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "469CFvbQGXHc78wjWUJKNidj7wvoEEnhi1vEzyUBZjhENUYmcEywVqTLEU4cJh5uMwTu9xrZ9k99zW4zq7D6N7Pn",
  "key1": "gDTSEkCYDkjYaUfwFj4rotUkrAJKKgqEZzxmvLZ6eykMkYBto1iTJ3RZxs6zWc1HWHKiG4gEVRhdVgWTPT2Eg28",
  "key2": "3fGgPmabvHJypBgRWCduDJvshKdQfUmAWJNi36jo1vPFWrTVZcyejHjX6sp7197BgDpS5PFCVstRe8ygczMckTjV",
  "key3": "5uUTfS4Zap9jfiN9EBq1amDZRDPvzeXAjnh4hKH2bgKCmRzMVfydxbABgM2nGW8VJUxkSTuzjfp84kEiKqQQSbgd",
  "key4": "2TEyjarD5eoWRrLCVbdq8nhE8J1dNSzwSBAfgSJzKM3dyJBzBGbi59byyuQnwC3v6hE2fy45B1Xit5K7mynuctrR",
  "key5": "3jsYRrYpBoAbTP4TBZhDZA2BgfTWYZZBjn3ZgyowJR1WjkfU5nxErrvuvmwaEhKeRXCYLCuuP86zpkBew6SPpN3s",
  "key6": "MLQJvWstFgafAGpBKyt2ypSqbXRJbRjYzEpYWwC6VNLumEDqXEiRMEBKgXVdWKjKKCJDgvcRgfGXNwaqE7BYmbH",
  "key7": "4BkLz9ChD9ewbXjsKpot9mAvvrhdzvr2pRXTA1D5afVPVTWmtGdPpJe97Vy2wt2wHh7LBwMEEPofNZrRb5CQLjMa",
  "key8": "53AzLEAx5U6w9btCPBEJ2njhfCfiV2boGmWyJvfj5f6LANxV9LZt4jTxwJjDJ4tN2NjhCWK2gXT82jw7XCRQQQfG",
  "key9": "5Th63hfuKwAhthgZdf51Vmr66GxF2tFfWK6fDZgPdaoxzpQ5A9MUBYJzuHQnMfGznDpY9x96A6atPyyP7zLQuwej",
  "key10": "YfLvxLaMxi2DKpBHc8GfGKxwzf5KWZfQUZyx1rKQzN9HssggfwERwV9iQztHGiAw2oXbQD4Pfm5ENDR7zhjyGLU",
  "key11": "47hXXyu2uBeaYugdzMP9y4J8ANby5EA7QAyqR9AEoRSqSa8bPMcwaAZsXk8epwiokHjZmkf4KBPSKd48SwtC1rbx",
  "key12": "5JLjTbwDG8DTqQDnFE3rwnkp88R8pMuZu8TmRGW2ZAZpXY4ho9kZ3zh8HdVHJP5G3GGnjLLqVs7ZwEGPfwJavncW",
  "key13": "3MUsKUSKNUTZiAMNr2pLit69ef6Cz52zhcgDDLdng1RXeAqahh3Xq2BzWQzfu2g3T1AuHeG8VLicj2uoqomxHRin",
  "key14": "2K7gRSFwbGrK7hvKGqmJXyrQDybYxzGAtXn3Z5MPcrWxh53gJuU8tEMTgsP8awvGX6BAqTLFaoEnX61Fui1g8ugu",
  "key15": "3peiVL9h4QWAXFYAd385k6xXubk2FnEEeQBwP2MYQd7HLM5MFHKTxoPawdGgGdGvDBBZBr7XQ3xD3HYgC8p9783P",
  "key16": "4XWF3i9gXqXSKkPkz48TyLQtZyGoWGvUQ14yHPHPqcyymfWPEZFJc4f5Jr19DVjTBMVK1ocEXTX4pUeqsoiC2yt4",
  "key17": "5wunShbRJ2mqXGug8oLEmJhuhcT1WiWbQJNuRGx3MMHb8uR5uKRvkTVN5raEP7qU3jdic3tNGQsAwnDwHNkDPyCP",
  "key18": "21YGtKoL5CKS3R6u7ZtbmHrVDpX9EeZNQjLXSPxaRgZEfrAxdKR75iQnrZDmiTFVgAzb2N1gjeFMhtwCYBT6vEFf",
  "key19": "4PsG6wzMVxJAvW5i227i3SWhCbKLxSSoRWJj4hSN6GsUgabN3YwxZG5K4Jnx1GVNtWKEKzfun1Dup4Bsi3Xwzewy",
  "key20": "2vTNHYW7aQnqMEdnZnWkZT3WDvcy5JMpHzSR5FpbNDmRtvrUooezuTE3mpgR2XKMiBsjYTxZwbyVtW2XYhhynHGB",
  "key21": "4YVYnKcbs4JpGbhuj4kwwv8pTZCeDKLsR9ajaHMkTxB6qUkuZee2CFjMiFjbZywMQZdbEBBdD4GTJ8KNoupXF6RG",
  "key22": "3tWmqyscE1GBa3htV1J3rwMCA9fvXaoj9jk5bntDxkttHYfZQccRaQPbSEM8khS2Lj7wZL2ApafcpoiAgTST5KLK",
  "key23": "c3T8gQjUdAtN8HaRm9qp7CSZsin6YTbAWc4N5VYfpCrwHXL834aBVPT2x3FiASgSh3NTwS6X2ioxUEnrvM2fmv6",
  "key24": "aMSAD7q7xgTjr1U5wixPLPCXRFt5TSYi6ufG5DRcVYVGzMRNuR2FGFav5ZpncWLoS8mrBWHoUs4RYctCtVgJG1j",
  "key25": "4kaX2Kn8F2Hfrjk3BByCZ8UmChG8qBvbq1edFEUy6SvzLq1QEP7BLV3XBf2mUSQETzcfgdLErfwdnfcxRGGrmWyq",
  "key26": "2QWNAMyRg2XpTJmpPLYTETHoFAHh2JviPJTKmVA1pHnQ6qqYLWiJpPyv89ASYzvvT4Njrq4Bn5PxfndPQmb9LE4t",
  "key27": "2SFA7gu2XQaRna6yvWsaQXYWC4vRBV2RgMDesgV3jDeYXwZhMnWKtKWZ9DyctShCJRc3qTeW9rTcztpksq3yCJUw",
  "key28": "4jf4tnpSNpP7aEipH4puFV8VcJHUsvWsV9pWrmGsHsCZvN3WEQvGv8zBWRTrorLpxDwt3zQWpbLP3h6iqtcWqtMw",
  "key29": "2Wao5aU64vFscro6zcBVUuxiunV5cvZWJ1zVD9MR9mFgoJULheyWjn6Ak4JpwAaCJ9j4XXPKtKD7YW5N9RKm8mke",
  "key30": "4u7AAGF28LneMC1vP9vBj1ghVnS9kER7MXuio3T42PoEGSrPEgxf6LbPWdCsLyyh9xwakViwjiwsi5rHTbAG48AU",
  "key31": "4Mh2KcH521yfyXV16AEXmARBMUArVNNp75L4n8r7g3ALmdHhoeyNCSwAUkmKYVqeR7rd99KwKKaE2PNNyVJctW7u"
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
