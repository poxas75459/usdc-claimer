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
    "3AvZYooYuMNi8niin5C4cEN2pizqrCtJHiwCb7yKWj5vCS1CDbtT6cMGZVQ8zfmkvDXgG2vcXUN62YRJWyPv8PGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Up7yURWSQT8tiFkK9tKs7iy1gD4Ubd7GbiZfNgRT6AF3zCvPAbYM9z1zMdYiV8nwCrbAkwiebtRZW1PnE4nxFSQ",
  "key1": "5PtTK3X8UnkhffcZR7VK7gbpU1hQSJut9CHs83B5Vs5XkDxc1NkYMvZy7GH7KiXYCujFRz9WyjiDbqMn2peGErfK",
  "key2": "3Wc4tGLEbQD3WVQgk6v8x9i4pwn4jSc1h8PRwJMSaE3AXaKUAnpzDu6K2LkaJPhoJ1mjiv8Y4yGzSRUbesTBuRCe",
  "key3": "5tVue8BMvhrjEMgpXwXvcThL92bTjf49X7w31eBVRPVvXon7uK9svJaqadW6dcWZbkyiQUhQQD6P3RjijcUaGe7A",
  "key4": "3YEuRQBT3yXtgoHc5kCRH5zS1Jzz45GbNPtGfrrMwE3Xicc8LAYpm9Hg8ERyBmRrPp2jxGhjRJ8YcggikBnhKWxL",
  "key5": "QMzXc9Yg67zE3tieeSu4D3tuMNoc8gaspGrmj21sfSLF59kjNGpcEfj7BnTKMt41sjBnskYWy71P45NvgDx1p1D",
  "key6": "2VwkMwFCb1w8DqUgNHyWNUabrjjiQr9MPXmLVJbfnTdvbgPpAeWBjeSoqHQX1pVWzEhatZ4DiFNjS5ZFmqaM61XQ",
  "key7": "4gGam35tHy6qqLs6Vm8fxABN26pRaxhfRYJ94jd7hbDKSbGzUuPqUUUUoVhascSKFzTg4h3d9AYQf84wxoXJ9VXJ",
  "key8": "4Ek4dvWuakR7HqTYgfyKwGXC4MMRJ1isevW6KSqo4QsABNYp7ifb3JdVrtCbCxNoA33tTp8PuUXJvgLPokZGeLXq",
  "key9": "37KoPNXV2CjAHjxVMSx4PQzSJ1iRnrnknhN8Lt2nqRSu9ipdt8i2EPdC3TqJDcgfTJn3Q1QkgdGyssNkkHvsgZLV",
  "key10": "FXEAnSaq9PTaWLf83JAcTf9Gac7B9XENgakv1Ntf4aYTZTgm1AV5fd4hWTntK7GDWR26qWL9oyNTMs2xgq9X5Xr",
  "key11": "4bPXpK8QKwXVhNaX83qr5f3pxrh6kUJX55i8WgGLU1TsFXtDUAGeLK8fmLaGZW72piBLUSznmu6Zby7bVzgwmyxR",
  "key12": "2qNjTGzrrYPAjsScunw1WLvsQngRBfk2vejjPRxtKi1YBfPHTeuSWoqZvP3iL7JT3iwYgoLrSuMZkZEwU6MXHQB1",
  "key13": "54f2ncwrJZPSmbGFoVnGoaTATpCjgRv2u7Jvv9NvdSsM8CLgHVukdHFED9X7WbcRSdkKv8L7LqqR9VKegozBdjhw",
  "key14": "2EQKtiVMQQAejtQt2uoaLTcHufQGxAe5mW9sgJCtBgdwNvmKZQe9XvHdMFSNBiiVLtiCDExjU2amiFZzbkyjhMDY",
  "key15": "3RVXML4yXSYMXx8jFGErCsUuq2veM8bnGzzJ7t3ikQwCzAPnZt3pTXZf2k54hRYg2vbjEUVzu6ftERSzAKUNJKdg",
  "key16": "eaB7kFNSBLVUPMqUqyxY488iLbXCGrFKrwrBhg2bS8B1pwmNLXE59B1jhCQHo2ATtnTXQypWf6C314jefZyRtZq",
  "key17": "3hqi75gqKcKShJEBigpzM6ec4XWyHJ7SQLe2Lov8hHWrN4HtRBPpZpktazUHjbux1L9qiufDPeqwYwZHNJcEVFLs",
  "key18": "TBpDKukiv24yK8J4racPgnBYjwRsBUeDi2qPhLNXdqpSZJy8czDRZWP7VdUYdNuUWF3X8Y4wM5DLK1QsHZ391XA",
  "key19": "EkNGSZZTeBB7YCj1TGrJmKYEaZ9btR8BxezyjYHDTwgT4moMuP2scPCBAUyu4xvah1DaWqpsHAuGms6Xi8cdRKc",
  "key20": "4Eachj18xMfpKWFofn9tJfSJq69CtL7TMKFk212wCRnKYSavdZ1dUkJtsmWwzHKm9vjnuzB7KkGSJ4L4dfjcWx9G",
  "key21": "ML5oPQxwPXao4NRgpZFWfUVXPfQpkk82TbJXb7JkJBbMb5hgBc5Zcm3xLdtfw9aXRhU1yp5YNCRVo1ypyT8NRrH",
  "key22": "4XTVnSQgXPe1sV9GcMXoG7dQXyVwcDniQ4wUG64wiCxLpvtZJ6wRBWqecfw8Wf3cGgntX52AcpxCdAnw3VdUXcR8",
  "key23": "kwZNmUTnoKHTGocRwKjb18NUECy8Arz87prcvdw8ri8djFTV7nxaHY2jWRfDFSbBrX1eLqQ94phHoTGw5Nm18rc",
  "key24": "5rRXVFtJV8gC79MBq4e5nMoQafuyXRKLzDemG9ubYYghLNduGusiRSwarHh2RAMRBV6g1ppfgwWsSvVrs9tWEvPy",
  "key25": "4QtKumTqt6yiS7LydTP7RY385b2LR6xedkrwTc7XFkXnnjNnjtritvS3AjXb3x9dRKqhCf9pcPXWugVRRqBmt78E",
  "key26": "4ZtFFBrnS4FwQH5xnr8ohAu9JVdTZXLRELXLubpC87C45zXH75eiDQENER4KcD31WuAzKcG9DoPRBz6U7kjHNx4t",
  "key27": "5T6mCDp7qBhB5z4vd9ufbM8AQhf23fKrziWxE6sWLpViiyBu24YGCEPPLz4y7AZ8LbbFPLvtHqi9HTt1yEajWe3",
  "key28": "zEukW7B5D1QqnrvLzvuV93sXVh16GWzuLuJ89dN9P45LVzUVEANjhc4pKbfvvbVrKwARFU7qLF9DczaAT4n5nE1",
  "key29": "F4aB8zJfpQWVqbM1jo9g3ddJvNy8Gti22zd45wzDndmbFsYPM1drC5pZGeYt7ust2wzEG6pdvtL8FiPeB3MAxuR",
  "key30": "5acxughZL16VHUjrKuVhmR453iL6ohTA3q7xFNFnnoaW4fPv3kifULZv6VkiSSuyUsgFHd7JwQuv5ZuYyYivputS",
  "key31": "2dgzD3ZinZXauK71iKweMCSQqVeFfGVNw8dSKRtb8LWDYAEQorezpVHMnFjGsmZ1exhfAFNzaPuEgaoHWqfEaQbx",
  "key32": "281EiFK5EZ3bJRghaPTJZwMCMiGdv8y9hmkAjxxiTqVyq2AxnH3WH4fN5sjs6bNhh8Jpoib6neaJXtrozv7TrnCv",
  "key33": "5t4DESdaemmkzHZiadWRsRPtsSRjjL931Yq1v3E5A6yjRRW2wKNGi9PmndhHkPhYZSDbJWwNZaf9ZRKpCMKnYyJ3",
  "key34": "5kEmwZi1Wczd9ZR4vD1ocWqXVTmaV22mkt6WUbDDyCgBNxHKP8R3h3HKFjdarFb7Ebh6uBsKWEpbA9r1Gj4YE96s",
  "key35": "45LLv6AnYpoh8mQrAPSGXvUmZPBCQuBSKzW1DUBfxHiAivkCaWWiTaVEpZccLffQH6G9nhXHez5TVrnocHu2PtNu",
  "key36": "3b41i3Lqi3wyrT1zyptgGNBHKjAYbm8MUNmBRcvV3N1z3WAuAAxH9yyAgZ3VToMtarsohfAJLiFNSTyPa5xv6hGJ",
  "key37": "5Brn874jM8NGgNiocMSMStsYvXraRT4KjtkQR2kHqLQyobX4sRGzCQv4tuBZCYJ9ZoMGAWG6TzmtSthGzPybCsf5",
  "key38": "3gJAoDJ5WytKc747wBFYsr3K18ZDuBwWp5RC29899888nioaN6XNDwfxjfKwjqRNUetpHdAx56zKVKK3VoPkCAWj",
  "key39": "5S5w7G48XnfQ2VDnLqRw3wK6UVAoJjEtXzLpCL6cMJQoybn2EWdFeEmxZuM34j5BD2ybNFAZh6tZsSJdeLqNjvtJ",
  "key40": "3WuqfkE3ur2Ga2pZ3wVhVsuJg2wiQ5m7hfAeJ2jph6MmYmgd7tc8VXUe8M7K8SGpHQBHvH3cEQHHW6TRB21uas7C",
  "key41": "4C7JMJ93qy9Zv3nFY3GzwmGtYf9FfGxyDzau357eVCEtjmNApKauhro4jFzYADX5UxkJxVnea7zJ4ZpWMGJXQQHZ"
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
