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
    "rbPpyn1MCe6j4ywJXzt5HvNBEJ4zau2guV5M5sfWRCNNB6Ajy9BvQWNum1fC7QRU7wnSkp3ScRm3XYeFiRSKk1j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cGZPka3ozZSKB15vwtJrw7RhKmP9pqoGLaNHD3fbdKWzAzKJ2poihdhAuFqQdmnfiWTVfgALkraYFDaWJfTrBdJ",
  "key1": "5aYx3hLuQWHacSxgpueCVcMpLEYVbCJwv912tVyYsCyeZd2Qg91LU8GkzB2GS52vKir8smFeKnsmrnDad7311nM8",
  "key2": "4mb91ZDiasKQmMBpfsZaDHsPpBPVRtDJVgD8PxGXiUEsBSwe8w9LgaoRZy5STfvN9S8x2zDDMYp4S8wk6L7RHukh",
  "key3": "27k3vwXDGErUeUZmAEsbLacwuUf3EZZf9Po5zMdSzvG4p3yMVo67Dmuzw8AdmEStiW4HoRdx5m6iGWrA5wVAE314",
  "key4": "2xWuo4E9CTneDXXPbAHEhtqj2Hhu4q3kFKTGD1s5sVCD3MB19a1R5zLFc5bQbjGSKX93KBjdyiRjgF2tST4Fg6VT",
  "key5": "5sjX2SHsFU15eRwgc6zAqqDfi39s9SvJkkwBZhDVrBW1rz3vP1YE5rqp9C9SFyKyeS28u77riJBd2HP1zox9w1c5",
  "key6": "P1xZFisLLhUX68YeWKpDtptCDsMXue3DZpbaxEpFaX7VgQnCmeuGzUYCq1p749D6KXEikWVD2gBXB3rHPfRAgaF",
  "key7": "yUeRf9WkEdp3Zs6BeXfLWhhMKsoGJ2o1o1bGcGe2kuyF99LQFhkju4XwVe15XzFUeaSAHuR8895PMZ7Ej8AUXe4",
  "key8": "3y3a7iDHuJVT3vhQphhLVyPYs1yGjXEy3tD4XEYRFfwEq3kydVoQqarGexgBUBzLkXJzm4QY9ktdi1TGxuzR6Nd5",
  "key9": "45CcfvcVdsmpjLPLP9JpUDS7Ws1fYTqVg7ButRHTyw7QrzkWJiUasRa17nU9PiTGy4JBSGWFEPCtEw2nSRa7fJmA",
  "key10": "4519TXgiWtAtfQTnHYJ6CdeVPBUKdRNEYbcvygsPRuZDVC74pVCUkBx3ggDawjzSC3WStHKxxiT1DmKoPY1cLZVq",
  "key11": "5KARaBfmAPuz3ANuQfokExuQzmQgBbwcgEMKRbpcQbDRLWDnWNzEVZff1XtKjhga2j7M623kRkzpo7pNd2HEXURk",
  "key12": "3jdBQBks1ZTcwbTCLsZ7GEGjLsZJF7QToHGyfTrKr7tsfPxpc6dBdw8jz6SpVU6ZKJwsYdegVP6zTEvV2bEPq6k3",
  "key13": "5sSDSxg1a9zoQw1ZCThJqSKDTaNUCM94nRteMJoXrtbEB8yhBTjurmY9MRgKZ1crikU5aHbPmgs3VZkGvuYnCrbp",
  "key14": "5SWqe3YaSyQu8JAY1ncHCyDxAjWLiZjtnrWaKq2tVVowuDCTJtHTcye3YfwpTnaxwvT9BTQvKUgmtMYg7imM7pc6",
  "key15": "rpfh6t9CGdsb1J4pozQoJkiFk921s7bxbxx6e4J1bJYhU58rXxWaSjDiB5cC5ScxFvRzyL5jfsVuj4XaP7pUE9d",
  "key16": "29EoZy1sDd2EkAczR5jrH57CizqLTL762HL6WGgC46fLBJDZ8M24iBMe53864qoZySg3718bVJoWVoXhVLEj382n",
  "key17": "5kA9uGtKSvfyfGZMMa4QMA5M2DTQdGVJwF2MHq61ehGtx8rz7a8oCzQ31sx7pbabyDRJizesp1y7btKwn6cN33ir",
  "key18": "2KF5fVNbtRXN6mjGiuLVAW6HHCRDgUih2n7bvcYvM5nhBntqYNs69JHmsjYX63AGQyE1oGWqZWj3TnofQTXNoPYm",
  "key19": "2MivQqMFWnyjDofrVKwC1wtnxnqZKJ45fqb33ZtpFrDGovie9YwB5ncDSwpUHUBYehL9kkzdoXV67xdo79UhcdTx",
  "key20": "3kgjwMAvtwZCrTEZt3Y571tea1H78kFX7UoMU6GLNRkBUvTyiZVRL8WCR1bE4kNg85i2fbrQFf14ZZLCTpf52YYx",
  "key21": "5CtcgqfKrJ3fKMTkC6FJCF6zv1HwsidoQPAhVpkhBP548oDkyWbPYAeyjsX4abvSoNZEVS5RiuNkfUJGmuDF6eW6",
  "key22": "4XVLXgKBGfPrme4TXMbKcxpKXEykoo8C7BGy29ncxqcCokaeiMVLzT896Qt43N2BxATsj6QLW4LtWX8J1cFMgT1i",
  "key23": "2JXkx78HkmTWDWa3HrYMvpaLM9PKSbJSp34CmeVGDkrKyyRSKLbPVjXBvLUGRYctKKDYogkdcnHVoJDnkbaoo2Pd",
  "key24": "bzYwiRdZ6wkziS51f6Y66tmr2yZLtYhbaKXpqDtzXdZLiYf8QV2EkcRg1P9PZQFLpt8eivgMc8biKLCFdmoFwmR",
  "key25": "BkPd9gkKa3gxvARifpixt8YrUXKYyP2YLYz9nCpZFyr1Wjv4kwLiDXdMaQ9GGDUBXUhZ2qPZNLeFFVQaSBB5Hmf",
  "key26": "3YTnFSoJjtz3eUbaVEUp7YQgUrYVuwVK81ZxYkTPsMV6FxhhmZyPC3NnfDJdhBTjL8BvXMNtaA7Ef9UQpZcn3G6r",
  "key27": "5nrNT1x9ZaqJxGRxc8QsYm2Jnv8dmF3eiPYkJ1wxkg9TbsAnGvm7PFhn2WicrByNuH3yyyrom39kgUwhnYXDMdsM",
  "key28": "2JnAifydazY8gae5LHooP4DqEnHGqfPhML2xgJjwQbBXQF6GdyW41TCWZXcifURs57uofwUAhRqGmJzQYUsvCzEu",
  "key29": "3CTWJP6Baeyba3KqebgJ2cXWNmGWjWUzBM4NzFvLfTXFg4UKXT6j5GG3W1DFbbeZytAiGcT5HznjU3b5e55u5CBC",
  "key30": "5mRv2gm1atFghDh81Aarn8MwnMiNHQcBSeM9RHkgzijKpRj9H94Pv74ripM5hpba3zv7hDS9oY4u4SiZLGbEWL4C",
  "key31": "zqsNN54KNoBmMtnk1EBuHKpSWdKsV44UvraH3GH6BTF8uwt6UAkeoU9L1qYTveBd1JvEKr8MYV6otZSVk6QBfko",
  "key32": "51PnCaQGfUtckDZXjvz3r4MRURWJhrXeGW3C5TuZsvqkZhV7JXasABNFgugChFszSnRDb41B7BFnuip3moZqtC9h",
  "key33": "2EkWSFFhkE9PG6BCirfZ3XKpqhwWB8eRYuWaPM5eNhfQ4cbA2xrn5S3V3vFp6G9vFyWsmi9ZfBpFfPWibwZNFi7",
  "key34": "2u4RvU5ge6FDJwqKbRbFuXaJdq3qj2GGjzjg4Z7Js8nSdviFkJZm6JGJmWb69xWc2Pv4v2TzKAvVFEFsZvPuiSQt",
  "key35": "4TdZ5m3vZG3MX11uLDRVWqmrsbLkGho8XWbjN7nkamaaWu2cuaF7TUVmDphPRUMH64A78YjdfyjEpFTMN1f7PJLP",
  "key36": "3QVH9RzbKA5SdLL3Pvioy99gLCaifCRFfomrizMS4jdKVtMTQYzJjjwdeunNbyRG3qJRxz6BSe6TUcKxncVctoiy",
  "key37": "5Ci7GTH8k4fQ8C3gJcc2XBazTc5TDuJ222b4ye6zPYuTkda4rUYoPXT2X4WdXp7FoYoMpYePSi7fLRSTiFaByAfx",
  "key38": "eCzCB6GoF5Kgzc9PrfGdzSbw7mmXH63QrShwKD2SxHwvQdcjYRx32WS66BkntSHgzRcurxXg6Ldvwu2RbBvJBZg"
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
