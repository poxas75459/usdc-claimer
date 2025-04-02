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
    "41AWA3T6bg6dzFcXZ198Ca5gbrmBfugpxzGk6D7sHamhfW6hupGEQXnX5kpQvFQX1KaRrJwbmTfJny5B5W2G8d9a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HDuWdZRa788qH7k8iMG7mUGGuT7jXeMGxdoV6rx9XybEN5u5XVBzXyRUNzX58wCybdgmtjGQ6TkWuzbsHoCzji2",
  "key1": "5CLQ92smN175NjeDNuYRiPqjGnfJLy7nrEtXTzJqejaiLKFW4CTTX35mqM77uq3mTHc7o8UqxVCDve3JNsjNjzya",
  "key2": "3kkYFaSjirmDnn5rS6jK8Dt9Ks9sFi9FcHisDVLc5cbYsYd6fUMGt3ZU8bCLpqvf3S21MC2AKi9q9P1xDB7x9Pit",
  "key3": "3nTbD2SxUU5MPdKBGt1bomqetv4SEToaXZuvfFJi2X78HoCMPhLKRouwhLVzeLocNwPUu4vgvrNZTnrQ2Wtjjeqs",
  "key4": "5NGJQMRTevo4AsLhtoDwKzfByMiNoEKv9y3WGTCqo1YsxBGsJ78Wxj9ENJQVZNFRQP1WdYGMoz78dBpXoeSyBaML",
  "key5": "5eJw1LonvHBnuMyivHvPbMkmKVtVHhjwK2maNzW5ErUTGTxUvTPG7zBnQMn9RBSoDXbTqLxmTenjkVf9shA7kRWi",
  "key6": "3JYdSaVohdKwB1DUFguxgEaQgbXg9aRDgjnUd3wGfbotERYbHrLooSjEXEBwjd8JawPUtypsAbgjLJnVkgDtsMiL",
  "key7": "4DAnvUuQ9FQQKL7VMmNfXbnQQaaEhUMCoNwUyDnUnUXefWwo3tHo1dhsxWcWxsAT1oKNV4GVGSj2KAQD9omLJJvv",
  "key8": "2MjW6qiq6vGwirLxvAw4pSawXKJwg29izK8ThmBv8s48rxyf7fzUZGYiCzF7vAL6rutvnNPCCKnKaPbKB7kNrz1q",
  "key9": "3N5tkr63nq6Bf9BCmJEJ2AqAH6oxdeNpdnj2pSEkVhAgEVedxfDMdp6i61ixUhWREBo1j1LR3ERHUBr1Niqb9tqF",
  "key10": "3puazK23ofvB2VQE8WwFP8LzBw2fZCvgyp5wa7BV8pYaPg6VEed3TuJh6tEFaezywNcMHdyfoCtXX5Umx33aSWg3",
  "key11": "aTgEBHzFe5J4raUMFWDCMAjVi6GZCSDhZRunYWxQ69USfMvDarrJJx5fhtqs9KXt1hoVBY5virGg3tMhYRXPerW",
  "key12": "2YiknMKLFNgqv43PQripTwcKcTNVh5EiKeZsr82q29Gv7cUvNJvyGbLoVKRcbTd6ppozPLbUNuwSgJRNb6CTkHQw",
  "key13": "59q4pCkSJWGW7JCcAkb6UCsDYfx5fQthz6zzfvKg6YJKwTxxufQN7WkNLssRvq5GDBMqf4HWAwmwZs9X3k7iincY",
  "key14": "49a6fcccYxkgEpCFbydq12yFFkUNZhexqr916JFxgnQSQSst71fmcq4LVj5RDzSYGBmffLERhZiRP8q6ucgrZVBf",
  "key15": "XtZ73X86ovYRWhGELgx8BrtEMnfneS5KBW3wcaVbmijTPezvMU8LudF4ZKWRWWq9LJHQ1qbz7GwmF87wVooCApV",
  "key16": "4epov1J1rWVj8NtXEYN1uq3oLdLJAxxQ9vDYHPsYbYWkTDSaCAt8tqZT23KB839ji4JCi8FKRgd5FkCFJueiqwP",
  "key17": "4mimvkrJ6fDfY1ruCGqTePTMePZxyVkgvrTMJWKYxAb577htnWm87MzXSVh68v23gx2AE8qBTk7nXhguBdzu9eKn",
  "key18": "3csWC9PYCgmLVKWY9fZBoxoxJzDYoDotjqwHFE9KgiU3zHDCYvwxdBX3bjUnYEbZg7RyjpoJthhNSqX9F3h7Xnf7",
  "key19": "4MBcY8RvDhAXha3GcffjgqyQzTzEwExE2otS3FWcV7j2oTeRvzWgShsAk6iNjSx5Pd9gho9ZjpmRaMMZ6c2MkF2H",
  "key20": "2gqBBPFEvpgfrdaSSyos6PvYPVWebAwTPBMZEoGBYtt7Rue86fJLCfiKG7LzZKYC3Lp64tSUzz6KeQ1u4qPuvzXG",
  "key21": "22H7ALcB1LjWc6BDaTC3TP9HJRB3ayKswKtfpHR9aXs1eU3zyKX9BYY7SdxNJ6utp1hxx4XdzZzqFMUpDz3h31AH",
  "key22": "KQvytVsbP8aeECr9WSgkgN8jKMTxZibACkWPgNbcTY6qs52veThvuvGYmktjxE1E9GUWCexxoNRm9HeFGizdEzt",
  "key23": "3vkbibaFbnSXGB6d49vnQovNuZWc2fzHt73SWJRf84sYJDgj57pqBJWc3A5bfotEDhH7rcRtXzitnF9Cy7jiZBQx",
  "key24": "38ePSMLLjEPtt8kiFFt9QnroLr6bHzTHxo31EzrDV31q4Ym1Ry1GTNNTG9rEDdpG6quMxX2hrGvkb6Qqz1HDUHLd",
  "key25": "DCCQEuqRALyx2iPThhtHqS3MtAz3DtRBXCLEAxJxr1hgHTtVP4WKbicdQMVjnUanVrmHXTsDrN5zZ3g9cukEPR6",
  "key26": "2nUZuSVUL5UFp2s7aY1KjjYqe1m2foLc9vSutBGNGABQhvPH5AdUD1TMg3Gew8VC3cPbWhN7fnT9VypY7dBNZzz6",
  "key27": "4ZhNTsMa5NdgciJQsz7T5pxHQ6oGag7K8qmmR8Bx6HqA9iVpqxuph93S1gnUxE7qm9StpXY53uML4NwXWUVTt4fz",
  "key28": "4bCm2h9k7M2gdkLpRpHySyzT3DMvYn4Tw9Mw7MyRfUaVm9r6A96N8rtv1inAWZKAaKHRUA74veuzRxR9VQ14epQF",
  "key29": "5HWAtYuokfBMpSaUN4asPW9KKRShDHGz8HWi558XgfM1mZY5xAYrSvd8QE8tnwodHrsMQEeUBGi6ffeZwjwgxXwC",
  "key30": "2A949Z9oY2mfLFQN11qi5Q5KnnZQD7uN3KMGcq1B2uzJis33bbLyfrVVtuaqL59eJmZ5guTXqRQsQhnq2MAHdsmj",
  "key31": "37heutxqH1D2x5HXpra15Zwhe2rENN8DkpUXXszRXWEdY4U6LNrJAssrLbjzAoxQ7sTEVbefuygrQg1kquJFg4T4",
  "key32": "MXbaoMb5KVzdqCLpmr3r3FCXn9vNH9nXhBZBCKm5Z1qxfUkP6v1HpAGcZenfKehkrHt3mE4czsJ45AoQ7agVW4y",
  "key33": "2Ftr1QjKnJr7hKsvRGLs1YcGxPApAgPWaFafpL2WeZBQXEbbH8Fd5zkyb1Wync32vAaEACHx7wxWxZmPqzNRLAwb",
  "key34": "pLa252bC5BuAYUjtCe5iAhLYVGZSjdpGbca6aU4xHyam1nGu1ERJXtcc7gx1o62iSR1LheoxJqNescFasG8jJL5",
  "key35": "3ZuL5upuy4vEjjRGcETjsVkXXty7DamdajtC9EfSpSk9Nj4YjYMQyt35WVi4q9w4wtBJrmnyX62HoivU1V8aHST4",
  "key36": "EqoTmUrPcjno5CQXi53FkXJ8HpFD4KHQzaiMKKaZvaPvkVxpjTfY2mMxKf6EgT8uXLG8GjTPLQQB3KRyW7YsuFS",
  "key37": "23EZ6x393hYxxxgpTGoB6JSuhL4uLsfDEeWUcqGyKRKdpWF4W64wdewff4rMax5viCVXL77fX1xBZ2NoA3Ajm3a1",
  "key38": "5xYBbGnMiqG6V8bDKauS3x8Y3C5Nc6jZ7Lmkct1D2CG5UkdgoLcZVBs7Rho7yWt67C9uSVDHaqmFJQJS3TMqGvTy",
  "key39": "26BZomgsxuRRt28GoqZ4WvFRARyEM7pB3mEggGun96zd2DHtJmp4zprdbjdk6LWkZi3Lt5akAxdHQkgNbSnxJkEZ",
  "key40": "2wsSQPzuwAVM9YtjmB9NFP4JR5MZNoQqMBnZLGhJvAtoQ7aMNBqdV8oHHawRc6m9CcdcncGMo9rwfXf8dqUTktS9"
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
