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
    "4eGUuemtcXdrkDvXqPr1mu3nsehLXGYuBSDhNNBNkpZTxwNdoaJ4majU1swdoH2CMEJLNhpFUrgiPJZvmnYHYp7P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3agxYry3Rd6mGodjACjcDEMK9z4LoBgvQypJ6otc2L9kaSM5PRXVhmeT6dmeSjHPn7nZ7LxEFnfY9RTwQ56ZBwRK",
  "key1": "2stuob6RXaebmiMHp71e3GciTCB5TE91PT5zgnw2RJWBAawjjTyew6Fs71VnJ9P9pScucb5Vpr4nWGx3wetcZni",
  "key2": "2tJqDk9N6sb463LJwdEywL6uuTtGuqetqn6xpMnQB34m1gfmweKVeNxKb24vwnqM5GTZdd48Nu5ooDDsZMYEY1yb",
  "key3": "4dXdhwZpywXsHh5t7oCKCRWuCLyNzGtPbcTAmpJAJHxqqYRLU5QMcq9F1oUhTCS7zPgv5Xk9JxEwtLx3gUo7JPgB",
  "key4": "3PMKej1L3fwHXHUm7rVzhGHz6Zg8PDzKuuTYuLGaZmbk6SirqZfdVgA5qL8CB8Fr8VpgxjYuQD5xeQkGLKLGonYQ",
  "key5": "3M1SrSZGHiKiRMfAjh3iWKtXAFAswiKK2tVBE7zRvN6cZsQCrzaP4FQKjsHyiSqb4RnkpJdiTRxKcXMrkL7cF4MY",
  "key6": "3xoXSx6fZjLfaErEySJqasHWRXCMwLJuYFd7qabKrhM1vZMXkgfZ1xdnp47H7cDFQYsooGYkWqU1NqvooHG852Q8",
  "key7": "5M9oqAY1fLG7mRAwighfvtFvf5wN9PV2RoXHDDLusujoE6qSU5AAsGiGGgRSGRG9nwC4JqV9gsYRNXtfx2xuzsjq",
  "key8": "by3JMDAQEnU3WmdSaS8v3t7aUKAAdmfLnJ3tK5in2JkdCKjuyKV6zUpBZEuJL6gcU5c766r7ZUyhyiDno4ExsaQ",
  "key9": "5pd5JPkEpMWRp2tcZe2udF8BPqbxgDZeUtzMr6Ero9JgL9hdXRPtenq6yN4zeUmYZE46eNuHxNXutMKTFUHbsvrX",
  "key10": "4xdKwB4BWi6pFBopx8fMkFeEh5ZaX3Tz4M19UTB5F3A7EM9xJUbe2sGgsvGVzXFwpSkRHpSM5dF67oT1knYfBFUM",
  "key11": "7SeroGKbH7zAb2UPGJ97NSKWA2BgXUTayzjbMHLV9gPpqc7KCpe95hqtqxMbaKqVYCHdhhUnJ2J2H1Z8R72ZwFJ",
  "key12": "66TQXU24XLWny1JLZ1VtqNrdTYjexfgwZ4hpvSRnXHSVYjHLWz3Dqi3sK91faBmUBAPxeZEmYBpV2eViTMH33AEf",
  "key13": "5ccNYpZjZcKV9Gpm4DYrAsUqV2cdsCfymBUz8wsX6JdXy2ecNf55GDXNWEonPVzDs91kHsfUgMK98LNQhZe2tx5v",
  "key14": "4VDFFi1uKrV2kGdQ5x1GTqpVhjT3pMtmHYQ2sXt8zUWi2grNuvJPBW8FuJJT1SF1yDBboEjbu1pbhPEE625tvvZR",
  "key15": "mTYDEGfdnbFVywE8Hs3yaCPE1uaPHse6i1HCcbGEZeMoMHUHGNnRvDegMXc2FjhYzrEw85UHDkBuxQKgc1pBqvb",
  "key16": "2fSUosMF9JMJRkWxx5j7jj4P9jZAkNhZF1juJ7w3tjjZ95eE6UtrtCgTqx1BLVzjRzBdqZbhwLfd7HL29k6WXpJx",
  "key17": "5y4GRT76svxmKHaXrSbmnA5QyMrZc5tKuWKLLkJWZwCWHRCckZyiaGYHovUBJkrDM1KgKGDKjktxt2ABCuEob8u4",
  "key18": "TAuxYXE9Sf3wjdw8wCjCKmkQNmwSwYqJnE5PR5cBeP5RQxFSurWeSDgJTwYZtAExJboYQFVeGVAGDbjsWskRzDs",
  "key19": "2ennGa11brYnuQRv1C5UV8SyGZEQpjgw9BfwXgMqaWgNc6J6H8Qb6P4Mggrdnhv4BbUMLyUn3B5uAzQCrrF3kXSC",
  "key20": "SQFa94BXUbKbpbS9r9u58kRFsXFxktAf281jpPmxkUd3KsZXGg41faNcFUeiJxDbmSsv6Dy4wdKTuWbe6zQJ63C",
  "key21": "5GJuoDr9PcbWcGK1i1Uh8d4K5yjg3fFkzHiSJPSGkqwSLeKNHPpBcDjWKmzX8NKAWa5M6QfvqhxgwX6NtXrY2rBq",
  "key22": "3KV3U77pheDSbGz4nRzjn3v6W5AoY9desZWMAuApPJhag9V4BZy3xiPxMTRNTUiSCgqp8BCPzvgGRPQqQLNqCY3N",
  "key23": "5QmXxVZ83pCLqH1RseZ5pmr7p5PfjChkFBJ2jo6siunEtmn7kUF9uzxTdKxcKv8AzrbypuYS3hQyaxRAcU6PnmWr",
  "key24": "3ckt7XVfzoi3YR7ymxTYYs9t33Ti9ofAFRLeqH6igwboKNgLRqzNqh7c7NUxk1z5YFsy2TtVVpe1XATn1DAU8HSq",
  "key25": "4fyinFGWm3ttS7v7X7Lx8hUP1uB25yQKyYTLye32GsoiCb73M2A35YpkvvdLc7zib7m5RQWZc46P7Lh2nf62qarZ",
  "key26": "3avthTmoMQ1jSQa6dTaVBARACHKisaJiA9j8S72FWaGopKKPFJPMgVnV898rA1zxaZs1kCXRnncewsawC33oJgre",
  "key27": "5Uxiv6WtN6U1wFHkLKkVpdCUVuCA2RqEcFAASxpLKF6pUeJLfZyyD2gfHDeRAsvqnwfnXXa7SnKC7ik7NCkWz5R3",
  "key28": "2XdxFivneSnsUt2LP2G1Wr2d2jPJtMb2jdReggBgUrDGaZv4i9W3Kh92kCDjFqf4hYoiZgDox1pMCoXJybhKqL6v",
  "key29": "r4Wrt3cy3NMcnWpYf393UgSftTmGZvpJCDc5ur56DWeYqA8taMmuomQotoyLh9qA2wVCUVnrDgsLFynTDoneHdo",
  "key30": "3SBbA2vDgBKerBAEZ9xRkiPZd7TrgE2DS8pkfLHuwfGr2yPdeHqAQsv2QkCKVutVBhdtwrgMjCNuxD8QMPqFTvG1",
  "key31": "5cDELL5z6qK3tVhuUXZiZXTLYdhN58QcZ7Jo9WuaVUhJk1B7stycfMtawYLNTWg93TBcPPPxSNBzahW5ZTsnQJi7",
  "key32": "2M9kSqb437XR7HCm9vL4nGm1kt93xjhgVG6zmWoW263j2s55XSekCgiYXFnM7Zd2pkMowySmRM5Kg2cWusLrohsj",
  "key33": "62M5YMewxxZW5EpxBVienfdcgBa7Se1QyU6Cqh9BCdLmTs3AjShumRuyaKbymyEy4Ewr4Fnhes7a44tD7zHzJzEc",
  "key34": "5zKzYJ7PAA4NUiv4hTM4pD9vS469ycFWxE2TjiCXnz77B8zJioij1Uph1Ptqn9NpPb6S6ruK6H58r83pSYHQnuPC",
  "key35": "2di3rcotk9wphgQbn97KCpAyzLkgU1eV38QCjGdzzo9DY6GhhcyrnHJSkjnvEooLJhMpfC1b4zJjPFPjbiScPhkj",
  "key36": "27witTFxWmshUZUvq5durEyt9QvtbTtFSJvDhdfh9nN1YDT3Uj9zt6GMqNXif9oEUkjy6UisTCunwV4HCRvxM9oo",
  "key37": "3x25c77e1r6w8bFE5CAE9VQwFBhV9Q9jHgBcN3iBjhZMJZdxE6XZ9Wpijdny3CS3e8KRECsssMJFAy8xA3NJKYFR",
  "key38": "4BsJYaTEAS3BGXcKg7RWDJgecY22oyKmz6PsZVCiP5AahfkC9JReWrsA1R6dDiAtMMyt5KiZ8uT59RDxNDi2s7Ja",
  "key39": "QNqWfJyVFJLMgjEim7hAyedsfFUYf6kk5Rxzd4NNCCVuSnkEJ1ZTwgB53Dk2JVaJrqRP9Y8Y1juWQqgX1ccaQht",
  "key40": "4v8jXf3fiuCzBiJFDsY23DqYrypJiPAjT6kAMs2SxxP826NrTico1gr4gY9fYJheXva7S4sQRqXb5DhAHax7h9J8",
  "key41": "5D4PGQe6eXd6uu9hUXWPaW8Qcav8tkfC17B2t2hFZqKGRVUof5qigKc9FP2sTpL4iLXJYDdacJzyKc9xJ1bsJNcq",
  "key42": "51LhUN9LYBhQduw4keYDf4gKdHyLfwH81tnNPfAQQZ1j3ctjFRvJtYyQEc4Z4fUBV6aEDpdQLxHBS8BGQWzxE32E",
  "key43": "3P8hvy7QAi2L7E8G3dEjQSAStG5pNMzU2CDUR99qBvG7Y9GXszo18Rbnuvjsf4ubBDsyiUsHvXpakwhYQrpYT3GV",
  "key44": "3NujXicAFy2rLsNArJtVhxnRHdpbu4Du5krSbW9QPL97myUX9TfwMS7yZsR5YHcfx7ruX3X5gdok8q1LgPneyfjC",
  "key45": "58qATB58wNybgKAouFGhgA3SvF2mpkRunCxZmD3jf74qwLKwBB4DJLuHU6sG4DGJzYXb7Mx13Hqk87wooxpYLMuR"
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
