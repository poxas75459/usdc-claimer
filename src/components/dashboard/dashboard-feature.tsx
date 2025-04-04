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
    "4d6WtGH916e1wYHJi569YMHqhEikM7DyZGJyq6A9Q36Rexsa8BqsmHNhEud4Xd2d3uN4XnpLr2XFNdwbHKN1Cnfg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qWL7mq76K9rWtCXbs39DwHwHs7WPN4WaE65miagwyNPupMeXLj9zLc7Qs3MSTbtubEAxn71tkq2SjNznGkF3xyi",
  "key1": "2ba41rybd9u3m765pD6xbTzUNnLFy3u6VFPQxB8bV2cTjpqLuqfQnQRgTGh7Kt8uKwWUpcXXECRXJF7GhzKCwv7H",
  "key2": "2d4QSJJkLJpwnVWQQrCZ1GscMUvVk2ZM5gdVq5N2MsokWpSuU63vPB9HrgZEubXM1sfVAZEeU8aozD6aiMF8UMzc",
  "key3": "46KCtvL7sUzQNupJ9q28un52asx5rdFMhgbZtHsZV6uLhPttgUvZE8R7KdjCHpngXSqnehTmF9HkvFju15RpNnkx",
  "key4": "2gBbqJ6GigohmMEmsHbpTiRpbqqVayLawQHzTKAr7JJQjaoSVeRwCvtmNgKduzMe8NenwH5xVi516hp9rTEAwbtj",
  "key5": "3zMNtiKpsMnfXBnUcPsLdmALRfriqnkyBHQeYsLhgxMokyNTWbmGxu1JZwvRdL9DCZYf5KGRmBjtTwgjV61mJw5a",
  "key6": "5zJnPv4Uwpt2SqtaHXXvnaoaDkCKy8VuUibhz8A88Nj9VM1VpzDCdQHTU7CMWGmM6HZYD7wudzAmiop2XDaUQqF5",
  "key7": "2Yv9pVhxiJ3WBLoZZ8bCbCRAdanggTv7qLqK7rg4gFk3i8PnJjseAndpD9yuCdgpE5xnGNQYeQAXfWVWi9HWGquE",
  "key8": "3UzJM7VtBXX8vnDq7Y42VEqwaVCC5UkshxEvKkM9TYj5WKdGPujuBntifZQYsnsRwV5BJaxmV6ydztVMLeXSf2X",
  "key9": "5Y2DRwG4goMnKgJ8aRreKXBsU9dvQXWDJ9zWdqXUjT3bUXfbsCyrDZ7NX5GEUMRZ1fMGQYuC92Lc7iAWEnFtJhLe",
  "key10": "MNp9nL4mNJNqeoheEF1YRAEEd7ci3V6SQWYMSSKcSGKnYvHEhSirh95XkL8z63UwT5wMwQDJtg1nhhK484QJvdd",
  "key11": "Nvv7G2jyZzYgWi1menyqxyb7a97dZzfe2RnkcamHzz5F4u2QLBeLbcqSnedxgxVCKuESrf9eiUaXX5Sh1ZGzoxd",
  "key12": "5o4UgrKXy2KtDrMEDRQ9Cmx9SAXycVsDQ47B7LFfBxiYC7AraWum6mtzT75SqAbMPaN7kyqaYpgXqAw7xeaiSWKK",
  "key13": "32FUNW6V1dWAHhnjojo5tp9QQ1hjthhmdqByDLc9DGzPgkwdjcPRUgF7hPNByApihhbmdAbtX3yzttZwK74usrUm",
  "key14": "yM7VSUwoBzXMomudjeWjvT1YCDQFFm5Gn2saEVLTYXFyiKiEk61en4Q83fXtMhPLQK3gxKQnonDZNoQFLLhUsnH",
  "key15": "3GiCct4rx3upFTd8TwgZ6We8F14c4K9ZW8fCeq9Audi9kWFrh7iWLy4c9737Er264RvnWwFKKU8rwkszNDY5hmZp",
  "key16": "NLnKaToApK1uBTVnUcSm1rB3fi3NwZnoENZnRZyuWhHrThX8hyt4Gxiaj9ncH9RCBLQJTZSGvwTxrUXXFkHtj5Y",
  "key17": "5jbF5rPsfMvcRD4AvYVMhTwXyiXp95G7WehcLBCznecdZEZMEiRzK7KZq7i6gynqudCKG8QGb48gRorzH9KrDPRK",
  "key18": "3kosRqiSybDX2KdNx3L9M7zJg3kVmHBF7v2pgoKa9vacwCnkkZ5eAujADREwLSrb1pbELvnkUho8gqquGtjc9sEw",
  "key19": "41g5hj9MFG9Z8Cfo176MGEMSUGficfH1Sij54qZPS8LVBAnUmFncVr11cv2L9W7hJVnGSKEgC2RDYGrBWZy5PYWe",
  "key20": "3dcP8oF1fA9z9gpRfn4AJRAkccuddypGA5EmLDB4b9RoQHRM4JQK1EEAeMCgC9ChE4PixfEoK6wvVjpRKpXX9Cpf",
  "key21": "44AsM2vYrxAVpq8p6d6p4Nyb7TcsDQvnPE9M2B9CCu8NoftnmdDxFQ7oDVvn46GQWi8mqxgo1b1iDxCEXqPGnz2s",
  "key22": "5qGeuDY3qp4VQ7r1e3krm8Nxm3p8fnLHxt3CcAU1wtQaDcLSN4FUGNwmiFNGjs3Ft1bC5vm1oak6UWH2Jax875kJ",
  "key23": "vZgjjAA68ZssEwTxh8f45CiCGp3zyDWZMMBQ7NEBF8ucweFRkAw2zNNaWHMxLhwAEN3sNN3mUbaNNfc2nXTMPxV",
  "key24": "4jBwbnvS5U7YfhFRVVQMTyehke6Z51n5fqnKSwdyZ5csTsP3LR5wJngH3F8QyhT7tLLx5q6D5VkPzCiicHvEgL1G",
  "key25": "mTYcZABcvxdhMYXZBmY7wKk6j1DnTwCGVYXvy6GGqRmRPENHDs9517BSxJQBDrxFv952hF7wZyyZuUnDW3oRbDk",
  "key26": "4oYLWXWX2gg5C6wRoV1V1aWV3kAws2Fe5iFkRZc1T9UJz2sLuh3pgG1ZdPhyDof3RPZcjofN4CeS4tE9fYju9DgQ",
  "key27": "5WtY14MUL38KnywYVx3FXBUGhTTK3Ux3z9F3eVeMsWpCSFueqF7azhZc7prCaGzZbcmnWSSapRJ5ANxwBUk2EyXy",
  "key28": "7ANp3D7DXSPqGsAU4fDRzWwrKgtrnq3pmZteTN1XXwEbLF7pPjT4qHXUKiUqgxEswHc6M4hhn9FWjgR4JypBtoH",
  "key29": "3j2Y6MKWKaJHYHCtCU6xDE2NLXWYMaHybnTBVMmipYvNbssqDSLLbGTL7NZhD4QL6276wKLNDySCTBBs1er5P9mM",
  "key30": "5PModWfF1cJC7h9YbN3Y3y8cfyoFHspLQEMfFFAgWWdSmwRyJatxFivwfij36kNCxB8NRkwEZUcce7ACjX82WYZj",
  "key31": "3pgC4rLRMWjKxdsDzFGJJS1PMjSRafjxnHzgSBbTbCJpCpY43gYRHwGDFnZhHwXvPWbcKS5jvYNah7JHVRAH6ujb",
  "key32": "3UP9EuZUGCaW2PaQBUtb3NDpcFSwrszCxWsWWQLjEYsJJYCnjRQoqRXF4uKhCec3yAkMjEqewRg13a7cotwiTm6s",
  "key33": "3eJHKnKDpWyNABnHSYNAUpN2kf2HTHKSEjfg6m3wQbYaBUZ3kNqfsQP4gCz99s9pKNxpSDwZhrGH7RXYhJBw91gh"
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
