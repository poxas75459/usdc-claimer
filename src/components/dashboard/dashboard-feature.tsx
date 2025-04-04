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
    "3WSZB4rWPSor5G9tk8qNcxx8FNigDquoobTSGf5b4YWXiLLfMTDyWAsthbctJHeyvawC35mi5CZPWuxAeFMn8cKj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aZ9EN59SdDzP8PKwHVmnRmXjrrFZe8mNRV46H92iCtw1tFV1ovbCDGsNmD3oXzyo32mKSbGTLmELaPFzyZcS5Bb",
  "key1": "4TVeEoWV1TQSH6b7Tb8uGqFRkCaXmrhepZuqi8mGNn48DqM2UVtxmww5CjcY3KYwXML7Pcp3WJzRHWB9PmRXxSDs",
  "key2": "4tPtA4WYGQM6i2yuwc2susY82D9K23iVtocKw8NR9mA2AjSuPTLbuBsvSSAjV6bq2R9byByEfb9Ke1noueiwHbqX",
  "key3": "31LqTtZ4YQoFMcEno9rncycNZMk8TmA3TWCqaDXa7i93Rnsj6ENxWGDgeJv6seoscd5UZjDfwNtgixehqJN3VhMh",
  "key4": "2GoqCWc57Q98nwiz4fLYHDqt1zGZwC7pqBwRUm8R3Up5doAigDbntowdSKFZwKCPUQFLEDDYFyPPATcpkYWNiegJ",
  "key5": "3kWxUDTtyxAvddf4wmBkkhhb8dVR6vs6q3ggcasUKZCcAxAjaiTr7xEJSXLugrbmMF6LsGb1v3uKDUCu557kEnvW",
  "key6": "3Smz14su5wK1eGyFc7X44MeVuSTpX726HfA1HAjRQs1k56eycpoKw34Sxpo5xR3ushrB2YxDVGfCYNQ2VKmtfueX",
  "key7": "5wD1mcqKTwqoiDJYRD2gYBAjxwRq2N9tq9vUDKynE7pYkYxGUto9pHdjCJECzh9ivCE4nw5su75UdwT3AZ5pjfjn",
  "key8": "5zQuoz1bb4yxqcr3LEMWhRZ8zozVDavSQc8wVNdStrSuUZkn5Pjaq12caHymqFzbkuZwNaGosDQ46FkQKrFyhqe9",
  "key9": "2ZrcrD47kYy8ShmqRMxTX6SiGQ5C8DA5nMUcxyr8z93cW5JKV6oYtAzMiWdxNA6SpfbWb3aGDfgZwGT1HUZfUbZy",
  "key10": "2hj68RoFrg5yNeUrecRsTm9YqRHJhYd9qMN2o9Uhsdmhw91sv6tuXGDEjCNE8nRhnm7qFCGG2YCcEvjoPPbuCmdz",
  "key11": "3WBfgBBQuaVwaFKhfJQAwTztSWqA3xbsQjNYa4xc5F14Hh9uPP4fxU33SgGGm7cRSCQtT7J72bBMdusiWe699XE3",
  "key12": "2QSYq3V7hrXHcpxCNHe9KSwuNhtLCou6Nh7YNUriSrWfvQJhW8zUK4b34M4n7VKsweEhUFthv7Wqjk8D5u7XRq28",
  "key13": "4sKTHDpLJWLuvaD8wUmkainShjV9bfc9boP6RrFxNEPHd894UmRhTjdtxD8nKXBjp4u29wWjN6mvVcbqxPGnj4ij",
  "key14": "5rCwCe3LBk15UcJWYCoEiiqXxYFx8idcbYNFUSckdp1S7prmWaG4faxUoESFu8ZuSX7ip8SsNa54oU4smWQp4FyU",
  "key15": "2aKsTSKh3bv1SqwKUddNQxNEvunK1MkJsPUKiRskF8oYzEsWaCqR9FyDrjSZfL2LLJu9sQ88WQ2T1oJLd6Lrs24c",
  "key16": "DjYHPrc4mVCNJEvxjnddGF8NDKF2VXMfy278ebWQnuRgcscCBFTG59QcXVhbprafD6hgJ6BUHzn6XuPMv6jdVrF",
  "key17": "VhEWM7gRvVDwNMhXvfg3uUZcM6JmKS5Gz74tSUDwC9aAK85gX7s7twoGRBU1eSrmrfRpy3oFabgfcnHXHhzw6Ze",
  "key18": "3SiYgpTRvFDZkP4UE5uo8xWe1uf9CjNZaHtaNy12n4rxRg9m2fGbgKf5H8KuEVhYu743u6Eg6Dr3pXstVChasccz",
  "key19": "4kPszqom5U2BjBYAgzK4LE459bfN6TTm7u2heSjiLQtPsDJkmhNUeKQEJztVP9GQNe7ShNSSKWdwaYDDTEKLQ7fs",
  "key20": "2q3FJTJ541okGnaGhPCjKU7ANwMD9VZ2hGWbRNTR6Mw5CENDUerSsJgT3mpzTz5LK45EfemtbVuqQLcNMGgXPGLi",
  "key21": "2iJRcACLfQF3B8aSnYCdSVuiPA3eX3azWcxZ4VJQtvCAnYypeTiTh1wZhvHrXvkvpSjkvFUaQ2i9Md296QH6wyFC",
  "key22": "5N28L4xfzDCGMRJPyX22hz81uopW8ZW8TeQ7yYbEu37WmV5p6phpUrhNJQ1dB3aEyrQXqY8ovu2hxoahDXaiD2ZW",
  "key23": "Sn5QdAitxgGUkNZrBjgXgRNJyV9YbKMeLseNDZwNqJ9DjMqr5Em8GbKTgJyXyZegeZ38uDiG5CZVqUii8rmaV6R",
  "key24": "4A7bWbimg6NffqHt4ctjEEcKgW4bHXkTTpqrt2xoFauNb8qzc819VY6kLkp3mt3jhczuQKUUYz2LcXLyiJbLuNRm",
  "key25": "61U5PndVQxNSK8wHTjF5JH12VdvEMLa7rskkkfLSnvJzGKzbqbYPPPBHi8oPvfzy4cEkFwSBaVXZe4hfk8SJvWPm",
  "key26": "3ZLmQw3miiWW53cLYZ1ufQ12pcEqHw7A5AHU7Z7uKBzQtJGUeo25Qc2LsDQ6czXXh8MgQSSV1dzgXAmw6VeWoJt9"
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
