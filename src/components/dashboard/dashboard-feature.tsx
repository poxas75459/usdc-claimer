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
    "2ickfP8u9qpAcfMD5wJKJ1iAvR2Sgy9mnobkdr356JwKkLiYVrsrzHW4QuwLju7ZRRvpRcmvfxDAWJKq2prNJJF9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zsgsRrJAqzC95P4kP4uwkoLnqKGGv9JMtvnYtAdR6iT4zLo6nGRxtGhFm2NQveL2eyNJRoHg3nK5mA922eVfAwB",
  "key1": "A1ghGo8VwTW2JeKjDkFPZBbvu5gecTnJW6No6YSwTr7GKsweqDfVS2uzwpnV5Cm1fyG3yQ1wGvLbYSKVaeWxBsg",
  "key2": "5RmwFyLdDJANW2wJFZfa3qPqoAXhx3wzeEK2Cz4MDfaod3E8vyReDUjpzVo7ai8ZtR3J98FDwMQQdyS18DETxtrX",
  "key3": "62RdXDbzAF5U7dePAFkbexfCVFasuEKxedPEu68dVQAFrr6bubH4DBsnkCwFSowTzeTNBY1HYBuVk9n6hRwCJwoo",
  "key4": "3twq3H8znW2XHXf1QKf4uxYu652msL9R2sP2L1ZSsFyrHPxgKTei9PLi3jetoZEriwKk66dq5AZc9HHYo9zNzRnJ",
  "key5": "3ArNffdPxBy5ThyVHRdUscCTSDWmEbn4sbxVWpvZst8gYkYJSDPivZNadegwTfS2ozUfxwMNTVdWHaxgsFbeNHFx",
  "key6": "4QcLZjCZ6N5krdDuutjCz2DdBFwmm6NkPkwh45dpbNGwKvCRpEvYd7BbdVyHiACBfALNSgQUBiQh4JzNGrdH1bvs",
  "key7": "2idCuyqzqyt7kegeZ9ps6zgHDNLXL73CZbdpK2qMK1TbzKbyVAtf5Zbniu2PPKCw8oHmsuusppuVQjkPnApV8Y3B",
  "key8": "2XWUgng7HTfW3LJ19YS3jpPGLy8J7CjfhfJd2zT8YvzHCQuzwzbHkTnVA1EhDV8H5Pgv8rHufkz2DpTURVnQx7G5",
  "key9": "5e6B3HwiZXyZNEp1QhJvSWoXe1D2bLo1VqzPj9RZmvHFu7FxDhY6s96xcGd5oJppcGWwEPdM4BnqAv3mKAwptUDk",
  "key10": "4otJUmTgVWBHaY7R4Axo2SonCMXdThsPrL5tqtZFyjhCsS8HWfr5Losob63jgCDJmqzpH3gTFidkoxgRLut7u11C",
  "key11": "3g5HhJsvYC3spbt7fH66je4YwQU2qXpXv9cGC2L66Nc4PYv2HSJbsYHGD1S6iq8qjhYk8b7AJs9nNBB6HUmiVJkz",
  "key12": "5gF2Zjji8f5fDmAD5KZYL5nTxkF758QyF6iMv7qzyDCXBsQNUkdQbSJH7azL97XRuh5T4UQNqRGgZccmypcwwH9M",
  "key13": "czrnptFYA8L6BuJBytLTcM7YnyagvZiCKe6zEJESbN6ZNM1iqKCMXn7Y65uEtt7DfFsVrYW2drAyEmcr6a8RsHs",
  "key14": "4fxcCCMFMLZnD3RmvytxBnZkDzBpVPjbRfrvEB9x1Z3v4GgGRwbj2fMVB9zsuFczUGyPDS4F7E6NVLy43bxj3D8M",
  "key15": "3DYJyCmGnq27Z7YqxWV2WtwHUT71hVeiazA61qWJD7hKvGrsXxmnaPTuy7nZwHNzg37JWfUAFDyzEQnj46xaCSgY",
  "key16": "Lusm3yScqBDiUc84CLm2CYEp1sigER4NctXAM2ypLtJJWRZeAqoZLoL68NUaFzdXFEeww3VZZ3EVBZ4U4ijwP5o",
  "key17": "5BJrJRp8vB52p18ocJkVkpF6RMxsbcM4VAbXzQf4KfN5Q9mRdDGLJjJ5ANAY5vcDqUwRFViidUycA3qxdF7ew9EW",
  "key18": "55PjHZPv8JTiHUKDjpcZPkGE33RyDfT9nugmaGEwAjFuBynzd6PSA7aBKYJGdqdin33rKBB8rC6qrDY5yEj1QRy4",
  "key19": "4mW7DUNnQ5z53tuN5sdoN7ZoT96krPF7NmSr29xdnEKKWmmr4tW12SoSWaQT8Nb5ManU5cMZtRaFDsDE3QxvZtNp",
  "key20": "arKNd2HEej5ErChNq81uSmbNhewXggraSG3SuunQ888VgYDPudPUciEjmFumAkiHojckD5ZPAY82RbzYunM5STJ",
  "key21": "4eNUUB3XxjuJQqkWaB4JUD7mi6sxphCK5aXvuDmaZkNfwvvbHsYsrWk67QkEjixegWa7smZR1ZQ7tYS6WwGcTfnr",
  "key22": "4MUciRqsMhBV7efbBUDHG5Zr83Lz19n6UhHFryiaNNpy74fTtrm9ZDBqhvgpvA8uXxGUjaKR9xmuTvhMabJT2zLr",
  "key23": "396a1REtfQ7NPY8tknLCghYXPRpoSehdUpSvKs2ea1o48kYEwfGKPGJgTfqwYBPZD6CLswz2ZdxSCR3DM3X8j6Cw",
  "key24": "3yvKwkmYhMRWQhT5PBzZMwuYvvG3ixpoD8TMbzwixiZo4pc1TYbdmAQ8GQgk3Vm3nKfD7uqFC84JnYwX3uiGNwqU",
  "key25": "63Xbizn8VodmJSUbM2T1gsWg6GEmZFywKRVgEstVgSYGFrr9kQojMyNkz68DmhDDeebYX6XcbGVQebn5HHtroDZn",
  "key26": "4zoCR3dhkTPRZFEpGJLUjUDW777txkaW11gJbK9k7nggHXUYaPzS26MEHTEFzUdM8oeiRN8zbFFpm3DEWdXXZtiW",
  "key27": "46Z4Trp5eh7rTLGqkEGGnvaUJ9CPXUZnTmX2bAYYiFp6pnLELrY7ANFkyJyDqRmN5BZ1do7kKwkE8DHzBV9QmP4E",
  "key28": "bW2mQ9Z6EPNqV7PCC9122kFqbSPYix2GiEec555K1RG2N7XRkuXMZccDLV2rm1cPLNjiM4BnobqEWmt3VnjZGoe",
  "key29": "2GTL8X83NpcJ7dP7sRnZzBsQxVmYDhFhMBvcjX7BtqAGCKzwfy9MejPx45xrJ49FEQjoNrMegpQQMG7qBxpVugwz",
  "key30": "5pg4GWzTKGn6QX5Z1VTM4KcSVegJ2K7VRUZw4bJmJNHFTnwc8d4syxVMThK3xQhrH8vNk96GzGvLRZmkiKwxJ4xY",
  "key31": "4XQULv4M3YUeaAkWNZGxAwniH2diAzMkZzZv8xJfUnkTwksHd6B8V8GQQuwaBo2Q3mucbthh1Ab1xcDn6o8Vbmtk",
  "key32": "3YhCb8RZbqcPn58Xt3k6QJp7CSAVSu7kRdNjXswhJ186C9BUEaYeMZ4dHJDsxeTsJYU6eroknr9uFVdx4Bi9TvxK",
  "key33": "4oLjx9akodyXHjnvoX5dzqieXPwUJ2mpR4eeNLXk1XNnautjtxHqRS7daaJsUkip25gLEhdzW6xyhmXCCSYUfB8L",
  "key34": "236UeWyA71GFC8a3Md4hHHgNg8DwJThgzWLbPCwL53PTpWK1KJt56Viy4t4UJx4CQp3t8tsLRr6195bZjZ9LakFE",
  "key35": "2yy3nU3tqC2QKxeuFo97t58V1sfCSyvirNBFPAbp3kBiT9S7bZ5YKCKXQk7LwZ6CJRzh4szqHh7aWkSu5LqAFrZf",
  "key36": "5ZXbhHUeW2Dof7rH5PwFGPDXhFTSDuSrHXcVixQCuABiTSNVfLsfpt2Ps8XnCZ26Vq9tUQJz7jmSnPhcqcQpbwZ",
  "key37": "4fudkMUvRbCYaXDksGLSRCY8ubVRrGav6LSxe9MCbwWqEtJ2kvuBP3bfEJSzV2xC8D2mJdbEBSzuakB6j2jGYS5u",
  "key38": "5FUp6JdP3LLK2X2S7oPcSAmvfmP8vX3L7b4H3nbJMp3wA1nukKRhKshhkmHYPc4mhxvXK2z2gj6NEY2Xc8Z1CUum",
  "key39": "kbMQ1D5uDfTeThLbCMv14h7TM8LckcgCPipYfbMFvEfzXk8kF7r84SsM4dFDLiUCe71MfEWcBtAAvTxaiJnHXUt",
  "key40": "5FDivNFHBzDJn1bGVktSniWftoPTCpDguLHdWfXYqkgoasHEYcevyXVSG6pfnWzjCoyM6tn1dAff813JUAvykzEY",
  "key41": "3evnS3r1Set7qwf3wWvBHiJYdjpVdPi7Hb4wDxvxpA34z1RmwXNfzVPVFcbjFaysdcCp452Gp7GekWbfC1Bt2tMD",
  "key42": "2H9NedF4zt6UvoqsFodU6jQXrJnxRnri6bQFrcZuoduJET5NdekGZvjTYPJnUmTKEqpBkwuzQh1mpfEDi9idzRLE",
  "key43": "5f21be9nv29985dJNJV6WwyFpvKcKue5iP1KF9raxPqiZe6CKWG98zhykdA1tcVmGH5jdKWWpxWseAnPD3K2N9qk",
  "key44": "3h2bEbsAE4gyjwmxkeoeJHdAf5BtdaAwS1teCc3RkVEN9dVRfmjJugAd1ccHpL3Cff9tvQnLQs7X5u1iWvoGkSot",
  "key45": "3s3Js6CV3suJWT8nGUfJhZrbu5XKA2Rv11FGTaW5PfNxcwVdWGEKVGqYTuEqdCjAPjWStiDoHWWXtiGD51zQCiu",
  "key46": "ZhiraLuwwMBE3qxwBt4XJmtqFg3AfooFeSZ39cjBsxntc6hKNaM2zMh11TDHUKZfnZ2Yo4GwdDTQYbVN9yuvQ7e",
  "key47": "4gqdSrbzrbcPF2En9EzGDgpFA5N1s7vBW5SyoQm1ZD2eBWLSaz83kAXfTAFEySS5RzMp29hSDa6VERTdvZPBCyxs",
  "key48": "4og9dd29Zcr97acVJzyyAjMBwh4a2CqpjGB4jfV5JHzGW5TrZzUhxwBcFhFuSbgxpEr5ehYTQATYQWTcpkYdhZCn",
  "key49": "3J2KK3WpgAvh5csr35yWMgLQmy1emGBM4EmdW8jEUyUFLEVbhiA6vARo3VjQobtZAmLiJ7MjLitZrrCLshPKLFo7"
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
