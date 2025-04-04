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
    "jJkgpMV3KEfgwA3ZFxpiogmsUg5ZXuPRTERneB4vw5xZuMgRsCJAtW2wAAyyfB9ZXy7R8wGo6u6VGjkvjVyME7H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29jQAvS1ENkqEho3A8QPJy8XhX7JT5XaK6o9y7qyq4dauWRSn4UuVUVePbM58GRuscdiRQhgw4E4DRGygjH9PuDE",
  "key1": "UxDCSCQxwZPTNsEL28NYMa7rcXFY8QA9KTc65zVWDgzGEeicfS74i9tx4HUCTM32SrMeP2TKDa5o7rmtkU1JPRQ",
  "key2": "2UhLuxs7rhs5GLLC9wExfXovwfY9kcFWSK573FS2vZSRoTMnGaHTcXPDAZ82fGwAA3QmryFatUMAsApzBL2xNRmn",
  "key3": "5tsswhhHCdDt1N7NZrehNKig5gdSKcZYswQLiiDDaZyoadhXcmyAKZ742HFTF9WzubVwgVnisejapydyM1aLfsCC",
  "key4": "3fhv4nWLVYcSQ1fS5cmjpJMn9SUuYwQ3wUgahwrW7PmYSF6V7gUkVZYN23Vd2GFdYTqQzUdAdXtSR4VHwrtXj8D1",
  "key5": "fDjM1V2sUMbXGcq3DG62NWYYwZFqm9x8ejUpGSFkAwEBtUfTHKUcosAMSsfR6x2axssoMxV1rr8AWR8vG7fVUdh",
  "key6": "5qczWc7iLq9i6oGkBCFdpCFUDRSbnH8RRNhkWczRXG4atiJwYhJcLu4Kn39ikNFWJ5CAsoKT5z7vkCjQfeYgMERY",
  "key7": "3RyWUBYTUQpY6GVuuYMSpi718n7ZxrWGjwSTjBbS6WCutUsRSB4ZwnCAK9RJDdkhe83SqvBJdwWCBp71sW3mFwP2",
  "key8": "FQQAPjum9p1wDEXREQjKPFmzK7Q3xozQiHLmKFP1fTtJCvTCBsgZLvJZRqcSJYYCz3t7apvhcmKXJZsGns9S9AS",
  "key9": "2rXzegRe5z4tvN61nLVLWXwQBNFZAjXa17huDecu3MLuTxcL8YQPNS8P8Nz1FPxvd4NeEiNXtn1UuSLwmGDYTQbb",
  "key10": "5yaCYbDNJoV4AW3iGc917v7LyFox7LqjAJUqvugV1NietYQwTH1dB5P2vQHm9bTSFWE8uSG1C4e3FgbRTwGyq6Zq",
  "key11": "4gfNpPxA6LzXyTAwwognrkTEkZYk4fqhpazP8gMzRvWRMgK3wc5B51U8DyHeJuzt9MVoayn3EyDcswyZrRRUuwh3",
  "key12": "5PSXJbM5WdciXBcSaJaLtkYEb1MgpU4Nei1QuKYdwyUxcquBXbQvnZpyvJ1eGoZp8bqtJGaUoJgcKPqZMU5e3QAB",
  "key13": "GvdBJjoGkmBp553oftdU3CQ2SGRsX3maE4qBLcucNd9XrtzawnyMXwqQrJF698rVz2dzKiohKGJAe6UFvTsfxK6",
  "key14": "3iAoVYsXB9pVLW8YbrJczCABefmNvafMWLRzypwEbFbU5zPcq2FKABySkQSLskHmkkRfwVMC7LumdC6FNHXtGizs",
  "key15": "4PTU5Efw7ZFseaBdLQqP7BpmfW8XNQLxFL9Lstj9D9L1B8r7sWyZLauu5weHXGTTiag3oY67GkyhT1CX1yscbJua",
  "key16": "2es71wqRMSwmyzTEYoDru4QjepuA7EeaAtR9AYDpZx9vsCeMq3iXwW9kQruzhxxeUkmUqo3JP8wWnGXzWHsFmpsD",
  "key17": "4V8cX9M7gW8LrEmeeE7dkgoLhZLRMyaMmh2XA4zvTbwcDLZMYRDfiD7QRszh25GQcoebveZsFc8snfvmoYuKWeCn",
  "key18": "49vm1ZbNFsYYdANSccM48auVXjXRwTkPZJWzNuvMyioKQNVkL8Ni2dTaneXRhj8bGQsadgRhwYSoxqqhBGebZ7sT",
  "key19": "xS1XjUKcvALHGD8e6DZ6zFaVVAcEyTk7EB3HRnKxxznHx4aNRx6DWkCa1WwbyRzo7iWtP95rqteeSNjf187PcPc",
  "key20": "Ek7x7WX9PCaaL2MWcVPhir6X1XHB2zXtADCy5yybFeHCRdeQGK98M5aeLjpZ5wqoVrYdByfJFH5FfnvN2AUMA3E",
  "key21": "5d6G5CNSFwK9RCCCL1jqR4UshcNaGo6ka64EgUFhEW2R3RvSU7TPS7SMKHzyqWeEmAhdkvU2Cd5aZHzunRTYdqmr",
  "key22": "3D2QW4P3hAoBkMVmjyqakDCmXqKQoYS6m2sHdW9U9v7akZi97yW88hDHjo38m6t1Z9otoFRB3tfUBYWukQJcV34U",
  "key23": "Fg9eXo5naU842KFfV3QAEwUj5pL3MxSTFUr9tu2YSQEx5UchZ7GL3FXrveK9C6EBw7jTr8CxbE1L7V7X1j5zy42",
  "key24": "54L6K35bRX8UBggDxHuAsdzFLRVcHgzqXd7avVUX5yjnHH3KLz8zmM69dSSmGY7p15LHbsV4ttW6ER1ZLxGWnukH",
  "key25": "4yL5RvNbkoL2HP8E4bCGcgcDfKvTRigPyuskcfUALZowZZnVUXypnRJ3EDDP6UcssysHK4iE9EvgbMavS6j52s5g",
  "key26": "6QfYWGUA3x7otjRbYG1V3wgjE4Y7BKPZgtrguLYqqZf581Nj6zN28rFZ3VKqG6Zj6SN2xomoW7gGczS9UTwB91d",
  "key27": "55JcBkhwocNXKi5pLVSpYYm7evQ7BML61tBkBeA5brKNf9uMDb5PMbSgtfgC2CmDAqTCpqNjVvDVdLNGiPKq92ua",
  "key28": "2z9Yz1FxqhG2SVEJHGhahfVHst6L6HpWcLCocZgPnizbZqHjJoUZtU23rEdDdoZBF5MRXkXwiJewjGp9paMYHnhG",
  "key29": "yFKaCqtfVqo4XXZQX4U6ZLAVwpqUaLhZFqQZ4FGtgtvk9xizfGXd1rx54tZL39K24RWuFocQYDaCDCgi9TZfkiK",
  "key30": "nCh27ZcKnzUMF6z32YCMHKwxAwvpv748BZNc5Gq1pC3RwXqzaPhBQ7FyqceCnTLBCNiryFFs3TajELbHb3mUr1M",
  "key31": "4UfJ9rbvfdnan8isUG4HdZTkkiLTtXj1vEoZHn6GL8nadEog6pM6b4Pr9bbggAMzEmSj4t6ZYR9j1bmUHEpJrNVP"
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
