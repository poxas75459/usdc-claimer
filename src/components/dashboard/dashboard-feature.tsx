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
    "3qpX77BxTc6wxtVNyNJYkdHne5RYP8ay9mwuKmvTtTNmgQ4nFLBHEDwPRRnqEv6uwn8CjxdDnJmjNBTtcSqjR5RJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37Y8qbFQN3Q9FjiAstXs4h6UybNNCJWZvSXnKNGSUcVN64FpfC1jcaLC2C2YQhXLs4qsKtHLrKWWZgP8nsnxQZqe",
  "key1": "2KZyAdjPQLE4A6yfvFNWMCNp5GBUC2cQz9gUzLUdbuX8s5KSVnwQBRkhzHX5ct1WvA8E6vxivjZaUXzoioikbPpX",
  "key2": "5fsiWTK2NhKPJV1Qh8UC21StMzFavr3QKtzdHqc1nZRsWAK9D6t1kPeGziJ1eri6rcGSTomcbdwPLJ26MAnYPJg9",
  "key3": "5HC47ZR9N4mNYddz9XV8sxEWQfMraZkszWxNreuTK8ZVhGkbTR8jAQwoRgza9pDCG6CW1JFtHu6MxMiA2PBNN8QJ",
  "key4": "Cyh6Yp9pvXrTK39DpZz3a69vjJNrQXs7Lr52rhqggtRLnZ4ybp5j9S8ccfK2iQBwjrmYodsk5Uwa2vNFrhRSdBb",
  "key5": "ro18XjhPDw7KJhynb3C6XZYFnnE7BNRqGHGJQDWzghC4xwrR9GoKcXcZtQvV4eW4cQcoB8C7HqvbT8ZqhTZgpoB",
  "key6": "3WcSpruHRoqG5M9vyrR37krTQy1XcZS8bb23KbziyG7T3iujz3RvcPud396xkn1866YY4wavFjzAHwVCzPmTBxS4",
  "key7": "39AoXegkvAtsjKjbfs9t1RCjm66SmyYvS7SxXf9zNRaiPLkcgQcBmaJwvaX6DWCDQwz77HrKsrUHghhkKMuhjXPJ",
  "key8": "4ACD5eExysskttEBFJifhLrktQrp2MPFy6sRXHPMDyDoEyRVpx5SEm3j1ApYguYcTtGzo7mDjd2rgWF5aZoa7AWE",
  "key9": "bCGZMYNzLXD8tSHdCi3dKqLLTvrwQ81ZW7Ac4DyfxvGTCDA1EkHaWKZJ1S3uvQphsusLvBi9nXnn6rGU2ZU6ybd",
  "key10": "5CBkoPiKPit5jHdREtaF9KxPasPN1c7D2TjUPztfGtLzPYAf2hd14MmgNoRCrdSGwGE3vmErRXSUSLDhi2GD2jRQ",
  "key11": "4LW1icfhiTkhgKgkF1KRVsyYGfLty31Bhjm6N5ZTMQWNvvLfKbxcYDxxzNCGkCBVLVLywE3mBXfbXyDPpR4hrqYv",
  "key12": "2tnrP3NpGSPGda8mAjmT7gwJSB1DcmW1KUiF3iVymijz41Ct5TDb28SmCMpx9sM36zKVHY7DbZJFUZ9YgV239erU",
  "key13": "4bQkboXw6udvCJo21Lj63QH2erCSSWNi8o1TSX7vKfbNLNwuivgd9ajGg4gBSuzFXqHbEdwpkw6J85isnNkCjjpm",
  "key14": "2tmGDAcFec8QLkBAqKobRs2mMwNRCfAQL9viBCxaaMhpiqz4v2MGkd1kWsdoqhD2md64LKSwKfVcW6guxAnF3kys",
  "key15": "4m59uzu6m3ukNY5y98QfMEttSBxBRShqBzfnMSYdom5RH48SkdNg5DzE7vZNNhTpmXjHKTrfRPJVWMM133ViHHTW",
  "key16": "4pXoEkCPFJwHdZnL9MbDUN8jzAtFwfppvYwRCtcZpSwbhwduAEsxjZwmMYbwLU4EVcAvFpb62fkC5Zyc4MYdeZrp",
  "key17": "LWxQxAHdyC4pGuDzSMkGSwp5yz2b6Skq2avD9vUv7PHDhBeLsku1Q3GFhNxPVvA3h7sG83izsgcWvHXokVRf5eb",
  "key18": "5MnaTZEj6EoQS7E3dUdRrNoUGGtWSR3mPQx3Ri7yKdy5vbb9i8oTKVRz6LG7We8B6uef3Gxd7Xh21uLzygYNszSK",
  "key19": "4htzn2eb2qGEe9tdrTiRsaJtQSgu9KYADfT5ywXDVpuPL98A7X2Sa9BrSK7P1JjL6Xx2dx8LpXRWKNMGeTy6vHuA",
  "key20": "2qoBNsA7qycBJ2RFYusmwJvb5JMpB5zkNwnspieKRbMXggA2hCjaFuowdtJczUrt8GLb9PumVzDZEzWcTAr9wgSL",
  "key21": "4VFrNqkrMqDkVD1PGmmMHj5wq52M7ViVkeAxgZLyf8iD7DUggJL2UGDWoftsGjHQ6oNjJQ9ssbfEsbp6w3SM5dRj",
  "key22": "4CsHyPfEBRHcNZqZRm3ZRDHkJ3xyKHHT2Xctp8WQAMyneqPQSGt5rVgtjSDo69V6AMSXrvWK2sF8yz9ugqJV8zGR",
  "key23": "3QWGVZdzbFt5kztWmhpqjT5QU1edBZ58RREcqqjLiwdeYWe4gXakp3RDXoGbohjUwtg3wXVjLyt9rt59mWVcfGyJ",
  "key24": "4kjcL2cpvzafFPypRkUBcGzCgkcpfv7BGhER2QgX6zixBRt7peAbcXsdgJKPbqMoDEf2n39wSmCH8SXhBpk6t7Xd",
  "key25": "4TQsegp2BFM1nzuKnRgfRo9QqAYdNToapeD6DF4qnQBXmVXs24wyuf42ASKbciMYqTJXgWbXvDcb3wKJmrTo3T2U",
  "key26": "4jnRMRbu1yPqB84DggkRk6dxVmQj3X24bWGXvpSX6HiwakB3GEE3rSg8PyjEKWGRqtDDE6CNM1VUGXuayPv1GnYW",
  "key27": "24JeRYNQ2EN8PLpmStUQ9B5K7jCxBtjW6vgVLCXHzo3AVFpyWcHoboBrNTdCGoBHctPk4z1wQKnEqmQmYHFk8ECz",
  "key28": "WzkiqxqSHvvctfEVS7Eo7nt924LCHME2e1RWY68unvgZFsXLqjtPmiN4i2yknkp4QJ9EQP6bJ1y6rTyAiZEe7bC",
  "key29": "3Ei2z3JGbmqo1hBmGphQ9kFT4s3q3HqJjC3Tnp6GkEXasgFVNmwXBn52wDgVAHEsyx2KNUPz4Lyjib4RNTs4pnGP",
  "key30": "4UzU7Z9o8puKEG7zZwuU4fzjTxYswHt8oWc6k4PyV5EkRyD2hfNFwX5HJDAnsVAqVUF2ekVzBw2BG9gPJHjqqV2f",
  "key31": "2H2AUQHFxQWrRVdy1i9eRQRfxKg1QxopE5fXZkqSgBwQrWy4RGYThi75pg1YSZ89nDqu3rC7vRBXTc3bmmVPEEPV",
  "key32": "3Hpz4CHQvLJbQc8fZxWhidC8rLnS8Lmp93QHtVrNz1NAjTQtsVC3roAVHMVG3ddnznfsbTfZUhUA3nChfWpVDVcA",
  "key33": "5u36J7rSyTafxAE1wTxHEyqNzk4rGTHrHvndvd2Hs61LQWEmHJM7uCf2cMvyMs2rwJvgLHLs6zkZQ7pzyWyFFvh9",
  "key34": "3eEi8H6ByLJ7DvGgfbeidLbmGEd1GwFewGKs3EBJEqdnMxrQVumeWUnkgeBYVCkDLd78m15ioAuMJPPUb6EQU9oT",
  "key35": "2VTkVbuB89RMA1dtGis2kp92DufBQKLmYj4eRxH2TJuWo7pEn7zD7vNgKTJuGi2N9hGkA3mTT7tXDy2iVgpYkKb5",
  "key36": "51vFiDhkAfFr2EMbqRaBhS1yo2gCNYxUDAAtuuTiaJiC6JtR6JESvyhCxmXAc213uMFDMobd1hdewuh5swdSujF",
  "key37": "jRM6rofSBAtqaZ38GKbDWG65BSqDA4LCb8pJT4Q7WVebradKs5fjjeKA5RPZXYs814Ho6Qx9M68wDYAAJEqRLrD",
  "key38": "5LN6L2if7aEbKUpnWHsYYBriZMVtS8RAhC9gtiWzbk6iAVA3x52Khc9jJmU9pVU5aHj24XDeiE5BB4YzTMHi4qz",
  "key39": "4q3ZFo4HQFYYMEJz6X1BnQesJbnVVyWSQf2UgRGbNBs2uSrpJyeS7HncKDpRuUYsLzXaXNF2fBEv1VHH4PYgGDn5",
  "key40": "2CsH2Pfytq3nEEkzB7BxzMBGhHry6ezBasB5ejRpkAAekNKznUNPe5Utkx1Nou4MdjX22EKQjGtn4AoVKUyoUyfG",
  "key41": "N7SvMhA1N6mgCjbLUJidEqx7Cd9NqhEXiYQfgpqvfQFTY2eFpE5RPmE12uatn15Wo2hTa2X2zdYdhbhaJ8saU6c",
  "key42": "4zbNqLpg62YUkgkxQQ8Yi5zFiztCFarQQPzZw7XiFqh9Nyfn2oAYe2HZ7SqxySszLMgv5trrL7MgVG4zXQnQUTyy",
  "key43": "2rK2WmgYFGcuGdSt4QgdAJm3W8BYZBKJPXeRoq7PFiGBDfvcaquhhrK499yrgFK67x899Bfrhyrtsz7mSXdHpbx4"
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
