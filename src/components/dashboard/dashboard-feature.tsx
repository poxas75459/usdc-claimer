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
    "UQEKyJDpEfsNN8dzRQXs4ZQRrMN8KHSRXESqrVRwBxVvZXCSuz2HKYZujsyeoSNFXqD6quhuHCZsBAAb36vfxvp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uXDvPywJRzEic9BChvsoH8qSuSLgzsf2UVnrtahPhE2G4FvccZwJXziRs7JJkf7KXwAhB6haGSVwcsyVab6fBjW",
  "key1": "4cCXD2reHzr4g4hVqCpucLftoDmgX5mmY4KHQ2Rg8pSPrasM42K4KC4AmMuGaBCtnfe7Psy9Y2KmCW7a4CX1v2DV",
  "key2": "2fNJSkyrGsWCuqp3rU3NJ73z9aCiLXfavbuVhxTmt43QE5k9t4k1MEVm5rzuUPwSh9NAvYerbTojbMBxox8FETiz",
  "key3": "zTUFeTyhzGA7gE3So7V1njgSLUFUWvPK9KZzsDe9SiQifhe9CLhygnricrW7ybC8gpRbnWX1pSLrMGFhTsGsDUd",
  "key4": "4iSjr6sA35A1JYnQPN1tnChKZVDkFwNh3dSxmvFUtiKW4tsfxTHuJ8siL4d6xmJDDdZDjA5vkJBWwCPzp8DqpzPT",
  "key5": "2KH6TXnNDyYED4ANtxVzcvSRSHyDFE2KCAJCeJvArNhCZmuoqVVjs2FjdVXFGhBP9K2o7GSpv1yhmRqH4QL9BVHh",
  "key6": "2pVaMxsSXHTRu6mUo1XhWq5m9VFvQZzxxtM5ULNWmpT3uFqo1b9HRyjUwWRbGAHQ3AYk5pD4YziqL5ABiUQsMBFM",
  "key7": "4WL3jct5tNUyQBTXMERpzTvGhPLhDU7FmBJ8buC4NVyuLs2HNpJbqu41D8RfgkpU6YrTJJriVQiKoYzFoi7QKvxw",
  "key8": "5YFH2vASxQgyhoHp4KvCwuq2UmYe7T62ATyTSDsAsT2m3daZm4DVwFvFigSGZ2eLx1k3PQ8245rafumoa5ZUq9kP",
  "key9": "zHuWptFVTe4yBm8hisSusPGE3haCWmGc8ebNvGj1mUgnBXRHgsgd3CNVNYo6xzqeE8THG5Ujw3HYLK3QhUZQZYF",
  "key10": "3Ujho6jqtNk1pQnPa8TXiuwJ5dAt653zXEbYLs9BZE4MrkYkz1VpfjrwyZJPrjSBBBJQMGQPeXLSBNp7mfycpRFx",
  "key11": "3CE5NxjBntNbtw3tbdZsAv2AcfFwVMa7Q5v7wrodqmDc5ndD9E5XAY3dMP7jtBj9cuJLhaLSSVyhTnTW5uH61r2Y",
  "key12": "5SqKStzQ2v66TYZ7yQAkNifCEjMKGMoFRMsPXRfHYsgzDEp9yYQwAY3NMi3Hg3NcNpfT3YExuxKSEiEbKNizKwzF",
  "key13": "3CAUZBmu1GuH8rnMxBoWV67RGZ2pvSoS9eJ7KWjwQQSjACMCwVvkwACKNiPkRwvN1dgC8Fx7JBjsbWqDcy1w2uHA",
  "key14": "5eRHgsue8nA7AU2qTiJWaKHWDT9RXTYvvGhMSzvwShvxVbVjHrMzbkhfWbrtjgvBKR1UPz2vc8V3D9pvceztaT4k",
  "key15": "47xrJjFWjx3JVbrgmNwY1S7RsyJ6ut7a9yPCQyHGciGVjA6RekDM9Mv5SuBHZd5vYdkLEXapbBBvXFiLzSj5rMgf",
  "key16": "3aX5QVZkKMv42jRtjoubarBmw6zx2ZqbjWak9NEUqHoyZgkJqED3XNaGWz8pkmZwgssz3j5aS3QBdTuY7wCdKESm",
  "key17": "3EJvfmBfqDTqqAKvBNTww6TZnidMaKxYfrPa5urtW2xiBkJCbuCDV5e9hatq2ZC1qXNEe8YRdbwtocsE47TAxWTY",
  "key18": "5aJQS6CcqSv5iPSwFAVMJmF82gwqa8N9kErXUgh1NNY3Y6NzyxQCiMcRfzsHkCPoWwJo4i4JhjvstWVh3wmEnVQq",
  "key19": "51VRhMmEtEsZdg69QV3QCJ63LWu2bBqhiDPuoj1GBMhP7j4koowpFDpPNLVXpxTGyrvCgNm91jzcBQDyzgd38Rs7",
  "key20": "5xpsUUUnZcR99wzfhFbBZDQipBBTW71k8JbiZBzxnL93X8Gx8ZunoVBVW4qJ6x1LL6N4xRX6ujcb26etcXVpywjJ",
  "key21": "3zSZtE5tsS77ysa5z99mZidG63ybnHhCEGNFVUCS8pSCTKmEQRzXpZ2Q7XX1VyLkYhy2X7W1ZqeZW3e9kPm6nZGm",
  "key22": "4PMjkR6QdbHjGcsHExVUTVFHXKEQfTg85gMPKdFFGEq4t2uGyPnb24VPF2P6h4uTvYnCQZj2Wyam4SmcNgLqSQxT",
  "key23": "8hHKt5ry5uQq4VAFEQf71SyiQsL1CLgGTUBtbi8P9RV9TjWhpE86YgugLFZVcpgYScTESjrc7Ku3kCRcZy4okQv",
  "key24": "4tUxchUdz6LvJHSDkSQSmekRUcfc5LisMWQHTmYry9nwW2LSM8Tr37qDHH6eDzY1iuJHz7CftVdRmWm9c4Fzddw2"
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
