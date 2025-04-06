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
    "23h1ipBnXSs3Tcf5ymNQPRRGrDsNMoZNhDceBYttrY3RaAAC8BmF5ah5rpJ6WT8WM2x8uNbSFDTdHzen6t8s8MAj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ei93V1FPhbCvGQfoNAs6yPFkbwMbp4pXBVQMJcwc8DvCjbJwHfWG7cnmd7HYkhJDWYB9GZYcqEKG9TQH262GFua",
  "key1": "4vd4tmbtaYhnQQGKvGr7RPr3zEvPvXZYNydo2UdQLULJ87iq3oTSJrbsYcFeqfo1x7wcq52RabXsBNPowKo3fk12",
  "key2": "5N2Bap8uQ5o7Nvt8pq1iwFMVTgmm6oGzBnUtZ1xL8fZfaAbWdPtFnqLtAyaDjCxQd4aQPn9WJWMYV5fanDMpm9pK",
  "key3": "2eZb7PE8yNToURARQrceLaRTAnnc8dnGdT3p3Eb9DPViWu3ACiBqoadXRT8rmg3NbNom6eG61QS5JZVn5RiA1GoC",
  "key4": "2tXgRMVEgnfjar4KggvkSYBtQas4unHRNW2BkmnMkRQwaD9nSD2ToN4Fr9qhepQcz6JZRADsKDrzsdPdLDgK14DB",
  "key5": "TFFUZYaSBqqs9aPks9H8a6thsPcnBaDzXixE3g2Zp7pnjtL21rc2CkysntXkYcgscKgGcqcfP8EV7TRrx1sVoUR",
  "key6": "2Q6hsCzJim1k95pH8ZCJGaADtEv5mmWJGBzyAds1M4gvHindvEcGbX37E2zc4StYF5WFs9P4Y6eouoUAoPmKSTYP",
  "key7": "4fDrfTod9YqSsG3piGH61Dc44yMhPYJM1BA8Q588ZQdrResASPXT5qRZAMZCbayjtZVmtpQA42YQtwSz4DJzuyJK",
  "key8": "5aJTefsdLfgAZqKWgwYyFG2qTPsNdUqYD7hfpNgUM6zsMNgTtt5edUgy9CHfTvPfDkU1v1WmY1ABFVqhcNMmmkyC",
  "key9": "VyhUymm9mC9RNdAkQtkE5TTaQaYFdGio52BjagAoJNRV8avgELKFjeoaXkVzeHsFbsVg76dbjbtZDhQbDPt5Q3H",
  "key10": "31Mow296kKfd159KAdQmkGzqdt86bDudCugFz8GeS2f6LPPfAQ6ozmr3UTGMP6ex6cZ9RBr1CzGns9f5KosYPvdS",
  "key11": "3YrnReR45bDM5NuMm2Hp4QcDbgLAcXu2amVcFAFKchkVvVagEm1p8kW1AohX8ZwXvf85UgzmzTCdVFNNWXvrvqCo",
  "key12": "5WGsuMCpm878ahuedaEGVF9kFHKd66HmD1nfrQCivF4cbuyJdjHN4NJK1b7poAuRA8s93QByLWggejXy6C26uqkg",
  "key13": "BVqE8rWDp8cB2bQ3n518ZrqyDsGHWwStBmjtYJHamZ4YidsPvvfXDa7m2bMJFZtTa9ZKwi2weXgzATqMKShM5nz",
  "key14": "3bW2nX8JC9WsMB8MJZXfWHTcZSYGksZejyetUq8G3DtikayG9dg37uXN5V97CCrEDZgossTukQwuK81qKGmP66gn",
  "key15": "3Trw9aUgKn5hRhjfUsaWEaEPu5PbEUMKaBzVGUHyLmZBM9yL83cjLPmCjp4TxtPkDpnyBP4js8WiFV7GcADphpRV",
  "key16": "xe6rxpbHrC6PPRoSHwD2fFB6je93Vct1eXP3aawLnp7GJWCPxuiTk9UXenQ8fSuLqZQKWNwYb5wvjX7aZDDgnr8",
  "key17": "3LFqrw5DvFinYGixj5LGQzXNCMa24n13qw7dapwwitCCUHAmV8UxBNxwTLYMdeVCZdUPc8WrbW2YNdS4f1jTj2tM",
  "key18": "4Rmb3YowSKJbddwXMNjBz7vfndqugNq9nEaRed6v64egLEuzjbp7v8zfsoVt3qXrwi96ejdLKPAFRj19PrrwnBio",
  "key19": "LNL6ej5gYwaYiW18bHZgkqMWQQsU5qdGxRGcG6ZFZxHPgFmv686BTP9aqJVYjW42H9CgTYsrV8TyiopBFBDJ5Hk",
  "key20": "3pvtBHZg2YdZi5us7QFm5MBZ8txwSY9ijzLpnJLy8YL9QADZzZGz8zy2ef998BjjbmhqMoNeNXCdAfAdFKPbcadj",
  "key21": "3pfH44ChixVkUaSxfcHgA6VHjgkDAmxKbfm3119APbWcwhrzc2mAFCeccJzmLiey941wpz4iyS3NoygEBfzcTYwf",
  "key22": "2vmzFZHMc5dh599naWihXiDj4N5dp1FHFj4FSvXLowEZBXUQkF7FcYWrJGPKBJWMstzESjf81DD1HWYGNmEsWaez",
  "key23": "4EtpaVumBF9fxEzyGu7b9Aag9GeLgYJEzwpYnorxq8FCjHAPn1RvWBio1ncTUM5hQNWR6dY3AkrMRY9Se6Wv8iW8",
  "key24": "3HjoVxpQJz3y1mZLqHuiUDTkHdjuqhNVtujoekjX23pZeGePghDAyT2unAfWgERTyxXARsEkhG4DxPGVxvRP876k",
  "key25": "2QZhc3bvmFoVGgg6zm5UhnPo4HaagQV3zNozjpsJpk6yEtcVzrge2DMixkkVB6H71CTQD2Vr3QSr3mysVEsySLRc",
  "key26": "3Tr6xChcr6xwL2u3SyH67Bc9Jnr69U8CBjV6NAH9iES2TTbEfiyagTodyZB2QU6GU8wZHmwkHp7Uau7VrwYjNKGt",
  "key27": "JPMvzhxFnJhRNRVRE6Ua6ypTZin84P3eom99J87epxZPRqj6QipDCYTXGmyr18B7n5yuBsQvuQk4dGUCjPpg6Qc",
  "key28": "5Hx7YHfYShYMkpu2LjMCAQEhPCWLvdpzBkRKB4HhhJrpkx5DovRn94ScoakFuGBAkAcgDEcMjayuqs8BdLTHz79a",
  "key29": "DSHjN6dnH5dhJkfQiKwmHzKsiUpY3yMgPYoCRV41C8zEni9BFmSuPExYAQBPXLTp3qPguPPDpgN6hBbeEDorD8M",
  "key30": "3DU9TxdCk7jiUkJDUQipLmznBx9t4vgE1mv7ULL1jF7a8rjELF9XSY6FLQf8fUTGD8CaybWQhsEXPm44a8FD4gtn",
  "key31": "4qcavsdcuoCXKQy7jbJ4Ds8oWEGoaQBfQ9SWWJHQR1eYdudiudAWde2oPuQy9SzB5w4zr4ZbjXfGLsFZfH5cWPMy",
  "key32": "26FFYzDbcP1B1fsRaTto1nYChPVXrrn7dZbj8RjCAHpeZZQohCKy1ikPD6dz6SMdTAwx5kTzbuSrsEvr3YvTyGrg",
  "key33": "4b1mFn5zFjEPG43gCxAzKtwgyTgDXm2ZpYANcixSa1nPSYRUcJVVLeVXrCRACmDygiB8nAztuKePCygfYyxPLnM2",
  "key34": "5uBu9eVbANZ3JzGwbbWv7AzMYM8Ypx7PYnwZGFLiHrpvwSgfZuUVt1JKRe6juFZAwC2qJ8Bjtt6w8GjaC7cajJAz",
  "key35": "29Ac3TVvhb99muyiNMKonoiCxiKjw2pRzm7x8zW2r71iBGXssvb5C39V4xBpXpUg8jjXgSVKvjimWP3JtWRP82vs",
  "key36": "5zNYFUzCgWzcd6THFLQtjFKkgmoiCDbRhigzpa4Z75qvv5AqHrYk9okHt9Fk47MmKvnDfWw6G7eTSkRyy3QLycET",
  "key37": "2HHJpm8HDFN1yGkReMBeHVMTt3tuGKiFfdsjGYtiL92EHE3SqSxNdgz6gWbDLP8aKpL7pr8SBbKUPfLvoKB72JCa",
  "key38": "2wXuxwnG3C7f7bySV8AuRPfuh73jzh4BjuHqgTfxxBHZUEwhkNG6BzU23PszGUGDajPKD2jVNBzDVePV5vHvqByb",
  "key39": "2Do1o6u5kTQarikJxSoQkS8JrMk9fjmPgcRjWZ6u4DHcfLvx3UPuD7ei8fABARnELqBPNgpMTngc46cgFVUfDxXi",
  "key40": "4er8xLHKyE184GgGnTZqdM3zXCQwbiouLJcJtTXC3vdiJkKoaFkab8ZiTAYiS6MbTa6eAFTCh7rDT8wjDcmvSw7t",
  "key41": "2EcP65ALLU93MvXzc3mtn61cXb28AkgMkKCgKrf2KxGEmBaYMNHpNh5FfKe74euxHeEfMwzT8M6NsUA8dccJaEs"
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
