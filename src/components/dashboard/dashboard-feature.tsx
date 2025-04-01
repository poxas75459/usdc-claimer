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
    "3FiJf5q66tLzBkNrftoBerS6CvKjZtUb3uXrH9U7xDshN1PD7odCFM6QYaDVi6bqbBknRdT3b6ZtYyYVVU3WNJbk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hZEZNLihG7bBjhzwBwz2AerydujnuSruCaUwEd3R2EhFzuoNAk2VjHektoAkBHFm8ogrfoKwPSpEJDUCdJDFzde",
  "key1": "2HHiHYVkL6b7cqvjU8SHHotMDxFy1VhoWjnCBTd9sQHXm7Vk4kjoYsRrCLRAQ7P4jX1p3GBrKn5JbfyevERuchhg",
  "key2": "iJeaabRw7b9PUt2bGPGzPfaQuSQKvdATvkC9ztvpDwsTvigEBaQVDcZMfVrDJFnTrMTuYLVSZgvsaJUrfug3mGu",
  "key3": "4BcdqHqpoDGRTSRVZYjJXjeEc5g2SJC5sM7QUvHHz513KT9g5fbY6gzGYPY6stKyeLANXnD8SsPg5DD6Kw3WkoKY",
  "key4": "QdmmCXqegHp9FYP4djXWFsu8XsdZdjGbBZD8hYbmkgtb177pMUSLhuUEidA44M2qa9cc4VWvTRZYE5DRUVRZ4rQ",
  "key5": "5b9FLDEtwRQGyvwPL35KAEShPgf6DUNVpuTpbtWgvfQeohPdsXfUJA2Ldo8asMBLPx9vdrXj1xGgJjMiXAERecf9",
  "key6": "2eXLKR4RpKfKuaVwq6uNV6tdPhaNcCmgE6jRQuMc1kwCCSvWUFtPKKgMG3ci9ez69ubxsL9rW4rSmvWLg5zzx6Jn",
  "key7": "ZuAguxn511ZV3hVU2mrYAamGsg5xjyu4NNV6ak9UP85PN5JHZsSKqRDrwUfgPArCEaW4s55FM71wtCJwPsytr8f",
  "key8": "3co23CiLRAQAFcWoxc9ycASLUGwCg5gobXdtFVxr6kT1e9pWLxSkcU7bbpNdkftCCKyhWVuawjHVQkqNG1dQcxKu",
  "key9": "5BdTVFTmjZHDhYsVzTmZbSyB6d9RvJNmuN6abxGYoTHtmjfvagLGyN44EqPuHimb55CtExJ9TjrgZ5XHniS2jrQU",
  "key10": "2q3dq23NLY9zA862k8z5sQ4Jfbpufe88hNoj9dSQQikghtFR6L2c16ftd97aJppEmDqUX6bqNbjMz97BLj6eFz5Z",
  "key11": "5846cmhPzAMUWffGLCL8dzWeLezAYxgrHaxfMHR17v3HfP7WepHhFKC3BaTgr4m1CZNnHSSkypVxdd4jtkt7SEtQ",
  "key12": "5kTBUL2smuPnM1c4Sa83f8YyQ2rdZAUg2a4C4ZYdcDTj4mqRVX1BJhqa46xUWFqGQiHqqbR54N7wzE8ru1XxmXVa",
  "key13": "3f8yGMxn4vF1jmUeSkRS7ApXgTcKnc656t1KaJNJbXbvyW8B1ZcHCNjL61HP5n4B6VULjKJUppRQc9Qn8UDmRpZ9",
  "key14": "5xirebo7YaauSwfPGW8JQYUGFXwRzoT1v6qznjg6oJZt9Hr7auY381PD2ryn9hv7nbQW3HnPTBBWyZcMCPe7BdcR",
  "key15": "3opKmG3Aozei9ieLjNREWteGQyVBeLVU3F3KT4RGzpVQqDuJYcMRcYY8CDZsdKRYADHYX8jtZfBssCK6qkLiXVpS",
  "key16": "2C8WM6GYJdu9R6AeV9DXoF3wcC4P4YaRP1yX6x4rqE5eKxeHJ4Jt9ks1o8YaZwkrMiESYWUCLkUNk49NxqYa7GAt",
  "key17": "5jriVhcXPEFhQ1KRP4LstMxvL83n53WpQLYb9mkV3fAazvQb2AFzmf4zSYZxiVjWUvhbK5hDAVG83JstTvR3Eo1F",
  "key18": "4uuFRA3Pk1JnFtbEDMia5LzTiNacUYoMRZriKzjBXGbzkpNQDWatsov451ZidfCxnVWpmosCdRJL1cdNQsSHGkT9",
  "key19": "3NPZewcCzamHZNjbVUXkctYJW3MVhpxpB3vpYu4RbFu5yNHs11A4WYdjg3BLN4Z6cA6cs3y2fjQKBHPaN5TLY1YC",
  "key20": "4aBMedBukp3csnJW8DhBw3Zx6kdYa8ZTCt4UHcxmoVoP6wetiQWyhtxwmbs4TVESdtMNBFp62grrSbLmxMvG3mSq",
  "key21": "4rbcA75DeGaVDzpp29pooczCHCFD1dzEoRzGGgWZkewyU2jUXrbMcHQ8WoBsqPfZoNRWUVjv7x1rr49RhJYf1K9K",
  "key22": "5f2HcXnNRLN7xLkaZ9z4upkh59XMwG5NEv9oGDiALih65NFyndDXwu93YuZeY8Am1dmBttRHCEzpoMfo5wGwpP9k",
  "key23": "4dkahrJxBYuzszuJVX7W7N6zNt4kMqgzMZJCd7iRbNQPZsvgfvzfGnRufdpb4D99HTz9rAbreGLnGXaXSeWZju58",
  "key24": "5kXT5mPtztbgBamyBR2R7qQmVNGo3NBdevSy8NVgL78gtbMjXjwUFt2fT1aN9N5r48QxnahJvWeZJvt2y29NPmGG",
  "key25": "26iMdzM8DSvRpjWvwkdUWdLRrwWYaY36bry6mSyu6MFtqa2YQ8BBZG5diHEqyUHymnHCZt2NavSDkibqyd6XU5x1",
  "key26": "44LAZmWyqYeKghtWUT5pNMhAjUc9LC2ZUEfjbY6pe97SEr1h16umEXJG6F7tFRyQVqRdZaAr82NANuqDRC5f2xcX",
  "key27": "4HaJnWvwwe6njKqZ9szGRce4kuU7hjWpp9wwD26emGWZaFzdxNW7WMoEwmPvMMPp17K7peQZd93nHBaocTyvK8o1",
  "key28": "BCgKPn8JMxiNXTWFX3fKunaaPSxnfGHPQAopyNdfUXQv3vTVVz62TEB3gBTF3uS5xxAgk1jG6mvpFzRy3VQ4Goe",
  "key29": "65HrwqSJ2KAa2JzrJ8RukawapNHUnjo7VN9esjKoJuYzD8i8W8HBUmuFKfBcZp126PRpghq7AnnEV4qXPaU6KrDb",
  "key30": "BvUxhbTN9Xc6MKDyPxUV4HNAYRdfiisHQinLQJ92pGF31QYZqEBQQH2yg6FAmtFBsUcEcCgnYoQMgvQnEjXkymz",
  "key31": "2oEH6oXavrTz2beebNHB11mYdCsr386xPGXcGAEK58vgvAr76gxrkai5kFKD8dxBfSVkHTE17gtEpE2P6bcVhYyL",
  "key32": "4EKtFP6stBz9wS72t8bC8nBahyPWW6q3DecagxB1Mkffzd53Da6xuJPCNgNx4dwfSouHaJKgAPEa7m3YN855C377",
  "key33": "4fPcChJ4dUK1PtqAbVUCzQrkYvP4QToFcXpoyp6xFibb8x4uCFRyueMGBbguncyVHnFF7TXtZwhK9wqjmMFFwtDo",
  "key34": "3Vve5ZcdXjkSRaJCKRK8pan7DW5pthdtbV4e4firQuvEgrW3gN9ZfLZ9hRoUXAGZUcjUsVukrjwj2bi6o8vNDa3Q",
  "key35": "fbn4nLDFSCZHczBzEVYgMu6gNFebd7it5oiENEz5R9BTz3if8qUTNS7KcwKGQXSXCQouwJe7vy4G9VDpSLNwAuD",
  "key36": "39PhkBcMWFqmALbxmNAwDsCmU6eow1dxqhLKfwijCJKzhTu86h1RjtvvXGgXKZDXKtDK2oHKvf8rTN2W85cV6NR9",
  "key37": "35AHL6KvgiNrCa4LEJxsLugL11N81q3nQBwJiZiW6GgGdj88v6ogQcVUwvdvcbjcK4UtR9J57kdY2FeTCzqeFMxW"
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
