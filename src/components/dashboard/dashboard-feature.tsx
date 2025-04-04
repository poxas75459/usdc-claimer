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
    "cKGsKpyBZco5L5Dm2KWnHCyvwYiEUSvYFPEoda7jCWV7Kf1TawvnErB4KUyAAuWohoCi1t69CnL5B4uMXwpgAMh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YkSXxPtqftHYQSPxv3Sv6XUJkyQfdS5fRjFkcMza5qbGnvvfX3XPVf2LoKdXRQQFWccBWLRADMCCJcxopPk5J5k",
  "key1": "5LLnA4G1gfQM9JpMWk4fqcERiPZZpfvPMXgpzQH3bzUnLVkDsczShK2kmyWvWkWTjkFFuWnnnTRzHj7b6TtAVgAm",
  "key2": "2rBFZQdLjjmiH7onARajJn9hJeWSWJQDSdxaGokNJZncaaxpWsH5TjSXcR2arqXd7tKDSkFZEy1SU7osrtWn4qBT",
  "key3": "npqzyVYugVUoFiA41QT9kfXenbUv3RZjjjHjfbP9Y2xbSZqwgyFj7rDi2pb81LQaWdpzoQnGEAkjGRzNndM16bZ",
  "key4": "2pmiaaZdsp4kDUoaW9Pi6NrrjM3FzCYMhDkrSkkLq4niV4g7yDR2keAjVTno1KmUEZUv7bj7ysLSZTVog5M7FSCu",
  "key5": "VKxJQpc9AUv2y3D5YEk8ZSzHiH4DP6k2U4R6GjdSxKizNBkZA5Erwu2xiDsr4vqqgeCAejw2f2EwevtHEajrjfa",
  "key6": "2nhXXcdPWBDbJXX7TEBuw9xCZtYrs1j9hkigWusuwnod5aWwVGJtMv9FR4AuyYBVPL1ZLcvmmki9v5qkXkgXioLu",
  "key7": "5rNzVg8DwNpiSRaX2zCQPMPeAfX8aGwPGyWv1E2HEQYJJBNRbQ2GQfA5wAGEwWPaxpBcPgj5h9PgfYKCNeBrSJFe",
  "key8": "qcpcMipHmvSCT1fa9MewLAt39B9X91JUPe8B1z4GXkHi3eZq5rVReB638Pqhhp6Vub2zrNCNhDm3at2MvYKuL9q",
  "key9": "5YigVSUef6Ks5AsU72zLDWapzERYr19KEBnrQxvHiv3mwDZnjZWQShbx5igdPhkATSVPYpvcfFU5oaNrBg2uxLRt",
  "key10": "5PWojjzD8BvG9ksNQyrhVmGrSYbeuxbajF2LCE8oG4fNWzhdG6Ds35qv7HrAZt72CQZDFhpgttyVS1DZn2QAoUNh",
  "key11": "HBnP822hqazvVAzLzTARj7HH8m9s4GZ4XckWaguh4F9HjbaP2TZLwnvCzxahd1BfunWCLdYhDN7i36bdVzd5SSF",
  "key12": "2nd2US5Uf5rh1JQjtUGqiavYRipGLBTZ46p9heNi2atJshSuuuK6rTnGH9jNd7t9WgqUDtPUCfdGhDwBXLgWVBi",
  "key13": "g6WE86D8E8emh6uVJh59ii1982hQSBqH1hoQQ73hcx6scBurpB9tn725hZEkKwfxSng5FZ2XbWwiZJCRv4MRKuF",
  "key14": "jkL3zvRLPR9bH657B7PQueHn7f6GSG7LLR2FuaAKfFAJWnzUQyCs5qVFLA5LLuyNqvcBcB2YPB3CTL9kXimBVUK",
  "key15": "2ZPMe6t5ifGeHdNCwMXMmX2Y5jWjRKo3ibyrqTt4L3ruzad3RYwkVp5HjeaSPWwTuKYM81EmFDsVXY3hwFbdG4xm",
  "key16": "41fQ9j2C1YoExtT4qCzCx3gDk7LywZLjBzeCLSgUrSBXkCwUw1Dsy8tJkWrK6vKbaqx1oeeoqnXhmHaKraQN452V",
  "key17": "4EKcDuHpXEMutZ6eq6PvndvJ8hQE7VXDFMRdHFzyNyA3rNz7eY3V4wBjTgfeD6KTFrejWeQJrB6NBw6QubArkYWF",
  "key18": "pPgQiknC4uES4G2quYNnkgJhbc6jH5aAfaZcgsJvXq1Rk4ifwF2W3pUCYWTFAsx7SjrhWYSBoMfiD1whJVDGXUW",
  "key19": "57f9mYRuV4ndgkQaLtnJTAxHUm6THg36BkD4aGMmY4sSApiNYQW46wEMSCKJQiNs4asxjm8zWGBK3Gq64F3byWUZ",
  "key20": "5r5rjAEiaw9gCSwTfnvCyaXC1EW5HTUH175JALJutCtstEwqihMgj7KAoyWx1v52KaJwi8VjuLA7bdAVeGSdRGfj",
  "key21": "5dBwpKd9whK8sgX9YqhypeqrTWoqBzBqLFf4kn9wQvixZ5KDsWbC7soeUWVHdTwEqe4cHqBWca8db5G1SYGxNp1h",
  "key22": "5WMxzVJgDwCi9uWG4N1oDo7ZPHrVwZHxARN4oy9okr28xwi5iwJDmxoAgmg16LtB53L9t7DhDj27bEvf5XGih2f4",
  "key23": "63Z1UvbZ6EJDCdQf9hS4yZtJ3BDmShhK4fXmtRRT1H8b9U1bwgtXUTg2mJA4Wu5g2TFKdZVN1VwFWHYjgAHp3zdN",
  "key24": "hjrb4PEp3wEnYcv8odexzRG1YoAMkYFAFfV69Mr1MDrfWQTLxGPdbjAmAQXTk3tSFsUarA9b7y99hJDJfRaMy4z",
  "key25": "5NvQxqou5qTGXjJt9h3jEBLNocjfRht8xVWMrkd22Njftocts61yp2eMUHsRjyWosMRzTgUUoU9fsn9Agx83JNQS",
  "key26": "3b4bTrNxW3JBg4fGRSi7KKS6VkwM9ATQDTqUQs5irYuh4Z2JaDtD7vZutr2KmCRPxpvrQstjFrBGDEcdAzEVumHt",
  "key27": "4iCTuzSGpvQzMWTQwR1frZG52yJM23iwyLyNfPc6MozQdrxs5fifppgAmDDF7AcSe53TdukyejnMsuXvg9QsHYC9",
  "key28": "3vLUPModkjRzy2uhzPAQ8eG9FRfzEJw8NAPbKUk1C4zBxkg9CvyYb7ybRc6ptQcziZzbY5P2YcyGNkAzkNxhZTtM"
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
