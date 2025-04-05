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
    "2K1RLFa4767BRnChFez9Ykq8pv5GP4hpKcVAWGgGNnGErdAbFDbff5MoJjJNpJC8GX4yKBETpeFRG8K2uLtL9PhN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dD1kPrNcxfegoGE8qkYPuruUK9nFDDkZpAKjpzzK7UEStQzDw4svvPyGCdURBoAqDL4aSQ7N9xspe9hs7YzmQx1",
  "key1": "5A1dTwdajUAR73jtgeKeZKCkNLfPk2BZcYoqumv5F8hE2uVGv1gjF1M6s4LhwRHRQAEQZvJsLH7M2qgcjj8nPmMo",
  "key2": "e1LCy8oc5U5CpakejPPLvhNLUTXiMGeogph7ZGoJVouft7mrbx1vGPTFZ8UcbubKtp8erRF1xXvBsjELj8QCq85",
  "key3": "5H4raLXMXFx5ReGLTwY3QYcXaQE6uxbCMc3wNAMWvcpzwN9fbdHwCixmeX3HdhRuS8uhRwWsxoXKWGy5PWU7xFbj",
  "key4": "5J7R3smCps1s2AuTswsXmhm9CLMhRMX4vZKi8fkdtWPqLYxKg7PKrdXKGakzPtPQ98bdPLc5NXpNmUWmyFZnZFsB",
  "key5": "4Bs3jqneLp1sUm29vpbwwFKqUFAbu6jWVP3yx3fUsfuSDoDF3BA3ytzbLKZV3ZaRYKu4rEmkkxvBB6PHi7u17kVn",
  "key6": "5d8WdVAsDYtNu1RsRcLgKffNukD4Cr6hdduzu451sF1j3fs2g1E7DKoobENiysTtvyKmotjbmVzYAKRJfVMGyMeS",
  "key7": "3vzMnigpLhaJvKp7yCh9bLFve17gynh1C4BXMGFGAC4J4KwaDR28kom2h23TWQL2DgFatHGuzMPmumHJR7EPWeMx",
  "key8": "55RTgCm6LHuk8EboKHCZ4ontYzNMaQGf5Y2Y1Bv32JCme42CFyzC9MH6jXprwJJeUXdmDUu1dbp8XJrx86nyyrH4",
  "key9": "3nfYkZBLXA8k3fFEkQQFg9s8CrGr1vs8da1VdqQPHtgKEaPLLK7A8ioYJWwuaRwptJDfrvw16eZNnEiiyTNn27LJ",
  "key10": "4Derj3UodMF2rBhrZkXrs2or3WvGfe7zdVKD3J6P7M99QM5kxuZAEea3vgWCzfxafp9iwiQUJMxyVZb6ph4e7dJm",
  "key11": "468FtsWThgVfrftWVKpoZacvXnSyiokDftMcKB6w3uEmqQuMxHiEhUbBE3ZBeivZGW8NgkPpbzGdJVpAj8XFjgSz",
  "key12": "4JY7zakQLVz53febTnrZ67J7XxosmibJQeTyZjq1Rkf8aJvsWs9ynS9fMJ4KfZCBHRbPjbXYURxrkZPaixC68G5v",
  "key13": "2smYRpViNxxNu7euK4zuzYyYCAXwJqNvRw1HxQjpUQZg4cGxRzNy3WRH4GnHX8RE311aKnPYvPqok1vcbNZAeSYy",
  "key14": "qbZstSDrbuMkXYeRW9w2VhQeTBbjmZfbsA1rB2sLs8KKNsheXArt8mqPHQPV7t94pS5sdTHPvWGPagDDqK8zfnM",
  "key15": "3EVethvvMUm8axCicCtmLnpGUDkJEBPFfYUZs6kQDJ83jzF4UoyDKn4PuDGyA7CNyEQjQqyGuJgUTWAzLtYwF9wm",
  "key16": "4aA3mL2XHzhuv1sHbYm8ny3Mr4syAFaFuRQba4LdGwzx1WY3wyXdbr5LhPg7rA5ihadGn2EaEPypirkrmanu1YB8",
  "key17": "3vz7rki6k5vyiQ4X8X5qtjg4zX1sxaBhpL5srFfrF4AzYG9TjvYE4PPnJ3wa1oP2d3xZ5ezCikarHutLm6RGDpya",
  "key18": "5uVed6QWnRoadCoftgysvGpHFNpfgFhgZxpSXKoYEZdhSgV3VJm1XeB9nsJAa1fpFsakYPwjJrU9g7sojkEi52zX",
  "key19": "xoeLXFZFAQcAayEmdUTAMoEzKEP7NrN7XL1BNZyBnCu9ao1GRi4fGChVsM1icF11xXbqtjsUtt2vAWyPuzipEFW",
  "key20": "5fYJZraiP7Bs596EfChaX8pyg7KhxxSXQR8EVc6hxZqZu7q5Z9n8sm8XP9HSbMS9WyUGiz5CgTNkNn82bPVtEtK3",
  "key21": "F4qj6MQGjqNb7px5HbDrHjWng3rbPXJUvPqiDzwUqYVKjYUdWFCsJkE9eESNooTWriCAJX1cXJPHPdzt6et2nJH",
  "key22": "2R5F6vZTd3SmeDkJj7y1291mEKLb9DvBzaHunkYzKFpgA5Woh1RzGv4BFtzqS6WRQubnAUGRWsaHHWCuUDcLQGKh",
  "key23": "3EudXKCSKDk6oprxLWDpGrfEQ54j9B1rskZjs689kYrMYmWHMgAuypoTJaWvW74qpuwuGUJV9aetEzvtipxcwx9g",
  "key24": "jsZz3LR7e3vWLzpv9ud6SYL5ZcRxkdVNrEvYYoFkxo3ecYeB88ZkMGCEpG5DnmKDMNUDsegYdDDqJYPNxcFnDTH",
  "key25": "3LfZ2a43jcXkKfnqyN8BBYNuQqH9ivwC6bpHpPpqm6n5we1KVq6qZoPC9AG8GKaBEdoAznsWuzLo74K2Yrbra8Fi",
  "key26": "sJzfJ3BuwquZbRDHLvxCWQfYR3fKHP8Ho9KoxU45i4Kg6yswS4Moyu2htz5cUDxRhKhojG2YpLmjwHepEfa2otw",
  "key27": "VDw9M8U3SGgWazYi9QQxy3hYpFEocTKvjmaFgQpJL4rzQDLUtuQ2bxCbsHWDqea3o4axr72A8fz6LZCwcMdeysL"
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
