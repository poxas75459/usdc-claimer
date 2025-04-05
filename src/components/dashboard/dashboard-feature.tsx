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
    "bzv5y4fQvLFTH1NvDUUi6bDuANetfxcz4TUREwLLgXABig5zhb5wqdEGZkCJqzHsvCn4J3GXbudUiBDDa6JpUSw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kY2dyj4VPvXYzNRQn9BAEkvuMC4uEbDv76o9JzfnisPwy7TUtHBW1ySZCcR1WAV6QT5FHaae83Nb8zL8DR3xUDe",
  "key1": "3Xnm6D2m7RLHAhPX5ECKuKADrTGeekrnhZtjgDKwsoA6yDN82N6gyL8KHNZejGU6DAVpPor1pQxTBcM9XVitK91e",
  "key2": "4C5V7HUCPpRobg5XmaXJHxhFf1a4GvTC7tgcedAAr2WYF4aTbMMqPp7ehtkSQPExTfGkYpAzyecHn4dWDGHt7oM1",
  "key3": "61cdHesZZSfgzDPmnUGZZEboTdDp4hhtgL7XmY4TC1LeffNFXwzN9kbrnaSfucGStp3qUFDzjbK63MmEfZRshuzL",
  "key4": "4kUpaDgYVw67THPhNYFsyPXgn4HoKmoTAKBNDKaKHTz2hPjTTqKfLf1SQy5eTDuSdtwo4YGfTQtkvYwNUnREW75M",
  "key5": "3Bzm19f8X8M9D2aJuk3TsUSB4MUnV9nqCKCWZSTXioK5myjW4NqV7aeB7o92hyuboGXZp9F9CBHXbiCUnR6PHNFY",
  "key6": "5qDsgB2oDZVaFSCMx1zziYCKSVjsk52hPoyK5mg6ND7FaYLD6dQuNPDendHDch5H7mPhYahNKzUGmZWVrqTcbSuj",
  "key7": "2B9UgEfJF1VnDu8k9rAejHGbvBrqbdBrNrMsSR3mVgCMNFjUQNT1FT8tLYZddiNvYNTBBp2wnVaapkpui6pGzM8n",
  "key8": "2krkQqJ7trLNtLNLWUCKSowseENFqpd5GnGYWPc43ySo5xnocjvGNdqZU5JADw3JC1VRWb8cYAZrL9qmfYzX3AEY",
  "key9": "43iix3SB43vydS9YreJbGDAQJgeKmNZvJuprrdwCHVxHB11vigT3aXdC4t46Zm93Ybyogtw7p4eASWs9qPZdE8zc",
  "key10": "5PpXdNKfqnfQQni38AWuPXpLzf56N555R99QedQk2nb1AMwvFJjCNK4TfcrVmJ4HDCCaLX8pxYRGM6Xig1ryWFf2",
  "key11": "FMEy77fCdpL3kZVQzA6cEa1VJqBmpkQu5hSkzHPhEZreuKkYMAe9oHyUZ7oAj1S1Ve5TDEQyGM7H7YjZ6vRUQeh",
  "key12": "4wDtSUFad8w6927RJ3awwCM3P6Ek45wi867vq5Si67HyN7SXwubo86PQtTa9nkZNUScpFoEzaFLDhGvqHQyq4vFy",
  "key13": "5F5topyUKAptE8fyufCsetwzat7xXFkZ61WQbHChQmkvWdQdDvN8sSzAmWUmu3XgVR4WYhHyUJHnqZ9r2r7M892T",
  "key14": "2GUHWvbZYfsiQ9GLot79sKgC1XfcEvQg4PbaoUUJiB52ijZev6ypivyecZNGnJAvoLsALd99kXWoUBh5Cuby8gUW",
  "key15": "VcQupERJF9ur4fZLLEmfw4jCux4ZwdwDPCfs8j38ACLM7z62KWvqtoQgP7JQEesmVGNofZXg2MwEYx5rXzzJqbz",
  "key16": "3qSWGpfhmW1H4tLMrd4t1Uj5QCX4Ckex5DD7PCwbtynxPhM2qeYYQC2HM4JnyZ5S8EPhasbb8kdWCzadJBLn3wWb",
  "key17": "48jNi8d46aW9CH8mT1fHekmCjM6iD7zcy4JZEKMWHwHo3i9spfr9fwMj8DqFnVTq1Scz6TkrKy2ytqq8TUhK5ea2",
  "key18": "YFXxvATRK6gWQpw428fjQmtAMz9Fc3j8n6YZs4bcJPZ847uPNQpdP6dgdfULUkpvbsnAhFSgquDYXmWimb6stzn",
  "key19": "34pA77MuAnk3Pcm7mJ6Hhmf37Kf2qCcEjkZwYt44trR1E6rGfaF8ruvnnjAEgbgckKHY7y7AzxtqeYQaL6n6qG2r",
  "key20": "4ALEo2VRxSicZ4eEXinVuLv5JYA3GQ8RpyuSVJvF6Q1Z16pMeiRG4xVmxzZu1j8kJen9VCxDdyreqkmPE4Sf6Jjc",
  "key21": "2Z8z3wMhANSRvY3gvJFtBvpnAp15jguwb6yL3uCosLAeTqLatGjvSPs9Eo2qPeS5Gzj4Q7wWGnmpKCaMCK3BCgd6",
  "key22": "4bRcUVtAqkyGdZswUU7o9vzznn5jA2FkVN93mGGi6PEwxvvKSXfvJBCETemWqHW8XQ2QCsNcoutFHBocCDNAKzqd",
  "key23": "4kRMjSVgdE5kJhcRRZXHBhfLpZ6rEtwNRjTftz4esGxKQ6j7UENUDik3xue5oumDNEAcStRAbmGDkeypmNo8JsYB",
  "key24": "3upYkH1p9yxoyg5qxAUM1Xk2RPxuK3aLKYsFWy4iFwfDWEWLEyrgfW3F7hGT6Zh4bD4A8vLYRjxACb7byDHkiHmb",
  "key25": "372hgwZP6HHH3hSHCXxqXCkK3vixamzmPdBoqRWBNv38eV7s3t1NBCPM5mvQUWpbu6HnRjNaS4sYLHZY67urghJw",
  "key26": "44tvoEBuxi11bxAoKQMwmK9fKzeLg765yDfMmxh9WgcGFdjoCqcdg8fwwuemj9zybhoTLs2wBRia4utPqt2TGMNa",
  "key27": "526wCyYSn5TVCKUVGXrJK9mCQrc3mgfAtT5eJSZJ7eU19hPbQ521uqoURrAtXoUUwxbBo3Ama51hR1U1YEvAZa57",
  "key28": "3Z55km2UM5Ahf1grfAR7dBLULixxYpXy3aXbeXppug7RNLyZRqLHDH3fqzs9dHY482rfMk86KyRbNA9suhDjH5au",
  "key29": "4dch6dDuCL95PEe2DJ2o57oh2172KA9dtxQ55aupSGRxbCTXiwASDa69adYAVuZGCQbKn54SSsXP7dv25kqih6aP",
  "key30": "2yvJqh4Nubhy7PJvWKUCr6UTYr43dBYKcKomp72xfp6xLwYn4evuHkAFZFvVvCFFbFhxpBDqLNi2hcCHnMe1oDVV",
  "key31": "21pg22w7Vk47EAjwP8n2pKCkMHJo9bR48tmDBmJ1X6ar69oYUFb6LMCRgaYFKiFUobXMovVZiwSTRMQRbYmkdycd",
  "key32": "K58Anz4pmbrtX6KJfx2rqFSxbA5UkxSDxjg8Yx4oPCZSukmbZWXLg6Zs7BytLwLJNnpuauhTHwe6opyYDgQv4Fq",
  "key33": "3KSvtrevt5wvU1Xnv54bLqGrQKgvoUwx6uKGLnVvZ5z3HuvCRFWgTQ42tVNB8FiZidN4seCydQh9HnR8dvS1QNSe",
  "key34": "KHTJgqVN7f9bbydnvh5cBCZ3BgWSL97vboDMj2qMohg7uQZpPVXhG4wDvrht4LuYUwDewKXAhciQgeKbupTKvAU",
  "key35": "r7xHrFKYZQgijD1Aj1UDgGKN6pFirotGjwmqETPhBX3rQshqt6QG6mDo28RSidVV4idvwNAyYuVz18g2WajAWtG",
  "key36": "4L52Dt6mqyrWS4GuvH4qgSyuf2e9Tb1W3TXU8g8cuH6FogPR198HFNqaRAcT3Pgfw7aYcyZKSJDZ89XESaXHy76t",
  "key37": "58CZQVgLYd7Fus3v7Q84dzsSggiN7rbHJjtipXegY3yZboPm2Q1No9ujtN8nUb9bjc1DkX82gooRUQFK1jXA9Prp",
  "key38": "49iYDiWNijFoHtvcf2okzSAKeLnNVz4ky5mRQWgPcHSFeTY8248ChrtPqDULkCpzqpyndpmtD1w8ZuoeXdXMgjAy",
  "key39": "3dQboeR3hFs8RbaZsWE7ouExeyVruoxnPD3ANH3Y2V5gcYvAcT3CtjfH886nqeWhgEUPcrH1SgbFQtowMSBREefZ",
  "key40": "5H6u1293ySwVtGbAzzWZVBAa92CFavsdRuhcUJWJu7ZMLBEyWyFV2cv2Q59s3Uy2QZSHyRY1hhQtHqKkwayTQR9Y",
  "key41": "MYp7LuN7oG6kMzZPCKVjd3RSVauyvGDnEP6jF7SLLQ2s6gk7N48qrTq5u3oApsL8RJZDUGBJ191yofp6n4U4kc2",
  "key42": "3oNihcaDSTULHcdyF9u2AWBEE4EQTyNBGvYEsBBgd7eHSjsh4iJWgfofbNJmPhyiLhQEbGM883MpcwkPg4jNZHMi",
  "key43": "3Bwnpqvnj5tzY9X3aZ7dyfLyGt9KyBcFXAjQttEo153vKwagMv6oZZdtSpZpYuU7iXnzBh736bQ3bfKCoSRTvb8y",
  "key44": "2gdbuN9CPDNNRExDkUUM21yDoN8o1PCvicThks9nAWuRqDoANRX7P9TuswX7CQEKKKhwcRYT4FoQAo9Fyiz5b42b",
  "key45": "BrJbbAcD9iNkTud8HfFetbq21SZJmsQcF6nzAnUEmaeEjeM9LqBSSb4vqJkN5oxxpCsqPbViB5wkX2vZosnWkCk"
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
