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
    "cyTwNxhJuhrjmUpXcnkYmxrsMoRfZbdWE9W4i2VSS7ozksETARx6bq2BrUb1GB7AJ3T7hCytm6eif2zK4Bc1Bbx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TcfuWKj3Ki4syB7Fe9AfDTC4vmTqz7irgKV54xL7MYS4tkBeTT697S3W67yvTqNgw4wCELp3UT99joeDLSzfH6U",
  "key1": "5VSRgtPvfzZ8SQXN92qBijP93oCHP8Z3RjbWTEi5oaVY6YFVZJjUGd2o4pGak4qddwW8MKhNUDLc26dtr1JEcvg5",
  "key2": "2tHhom7NB9DN8mxrt8P7mesRMNJdwQyY49QzUnfVi9VLnSzh4roB8Hkt43e4GExZefDJZkUikE9YmZ4bYcdPVcQK",
  "key3": "2BDs5XzFTnBBECBHJNBVAc889hxF3CmacMfujDpWi4N19mvdDyfrgJnEFKc2aKFGsyB1JtJidby527cwofDW3x6T",
  "key4": "3YwTUqeW27Q28e3hgKKKFLc6TuMacpL3agjDKwX8PF3erG7krw6PCNQvQcJZtTqH2dqLf4zdNyyeq7HJrx1WYSkA",
  "key5": "5j5zSpEoMeRh81HPpYTRSnKhZpfxDLa4mtcBhaYv2BQYGAkihDpteqbBDZtRfPbBpLRLddzRkgsbDqupM8jsvnbQ",
  "key6": "37KsB3QJwU7b8TKTLjEQuez4yTVGJN2j24jmGM63mBiKU1atujrumhzwQKkUxH9pbrySCcUyJPWnQQ8oHWFD9XFJ",
  "key7": "JRLW7uP93cPwSWiqyNMnY4DQ55YaNnExLjw3az3TeaUZFAAsahMpsJ6RdPm4eaSMY7Ge1GLa8fb9kdQHqY2HHc1",
  "key8": "G1JULoUxq8Jqkw3o1qLxuEQwo1pqLrcDsZRZ2vq3EUhckppj3iVhW5iho8eUr3g57hJud6ograKjK8qoChYymjn",
  "key9": "34jkCJ3rCXgi6pky8TpwPhdiwYRvgmRD6ezmfU3evkUMR52hnfkJs1iGoSF7GYwiZiAM4QAUto29dgcAk27em7PT",
  "key10": "4PuLPgNgRtvLSeMKErEiAFkZHz2LoMcmA3xVmkXUVSGbJPxYUQSDCtXfewiLEkbbr79Q51jhTXrwSu7RkhV4PeGK",
  "key11": "v339PtXDWoJWn1sEALvYBqDtpwK7vFU4SGm29VAiBS6g4Mwk1GRQGarJBgM1pHoGHiDQ9MpWSveQnXNn1FKxJFg",
  "key12": "2qRqFkTdTFw25xfE5VxnBoVed2m63MSaXqguLc3Az3pytFjTFGCYKQnqDAebCLSgxk81fUigQeKmAeNGQ1NXetAY",
  "key13": "5f6nnd9eTWCXwHan4qsFhGAJLnCVUsfQURvq9J76h55jQuxN627K959CfKM4eJoeAyA3YzoAQmBPNJf8JEASjS3r",
  "key14": "5xB9ubRrN3PksjdwxfqRbxa7TdVgpSbukRVaDhcAi6uaZQNHiZ9DAF9PLqhHtiAVzVDbUuMQx9LfkZL9UD4PvVBA",
  "key15": "5Hk9YnpVsUWWYEm4ycyG5BhKvtVeAjrknSxrDoc4DKc4UsECFYAp5C8xJdfKAwsPCjPqeZphCHScy4yEEzfm3C9J",
  "key16": "214sm7t4GkZC52dcYTZUHeczpy3Gj1RX42u4yFJS5ugbvMua5NVhWqJhsmwE5jfoBgdjWxhHifrWKbzhBbusCUxj",
  "key17": "2DB78MUKJMGN8GNMWyR1jspiXcNtRmy4eeRWXFKH6vSg4qYdC6S65GSM6mmPfsyZyjKpC23rqvBSiVgrceb4f51H",
  "key18": "Yn7phDV7j9LY3iFPvWqDWWLaJNr4unCZsaUeFRZ4jyQHxYNddhbBgBTqmoZ2gD7oQbdvDpcCEz8nk6Hbix1GUdQ",
  "key19": "65gYXnaLNxmtWJVqQSdfKrKTjgcG2QH6Sv7SEn4kAua2uNUYevwyZmQFTbkJw43KmpAAPg3GTtAbLCtBnCDdqmbc",
  "key20": "4S7YPUxEMnBfh3w9YMBhiE663VzKjaYQNmad4HxUSSkzYBsFxt3LrwLWusJ5pt6aDYQX5oG9KhfqDe3ntpcg47bm",
  "key21": "2jAFqNVuW9L6DnyXhdDDUQkR4kfsr1Akip6f3yRuf1EQvSvbZRXz38bB6SdAaj7VpewJeaqjUkWekNMctXEpA6yr",
  "key22": "9NLx7izaqmnm7apHo45gjsmTZQM8yLrwK4LCX5pF6FMN6fjcUe7EDzBVzqv5LJtMxEYLwJKLktghCt6H7XtqYvH",
  "key23": "5DqnmkfhxkC4Nz1wWGF7dPiRKbEH8dSAZMNaBL1uLRvC2wnt6FE5Q4GeMeMBYe6Yk9zSxiemPZhcd5rqy77bEiKn",
  "key24": "3ka5oFFEbjLMxTpjRVZeVMhj7hzdstKipGRv69yppvY6jMtB6z3biMR3DPudpAdiMaHwXF74s7uWbN1eYECVLidh",
  "key25": "3LZfjVzByC2XF3YZFKGc1k3fLwk4KGtDHmtnncKLki2SnuHay4m3tVnpZNtSN1fm16B4kfaaSuXfWLaFvT2g4ayR",
  "key26": "5gjgR46rUTomydZY1G1xYeDHUnamqH9uCwFfsKpv2HES3NFy13NXXjic2iVPAYEDi8JhiTa3abEjnCvjMa4d2RnV",
  "key27": "4Yg9Ngy5xrNueJNyZCcwEeGM2YGrPRpRuvafDFJwbscfea6Q3NtbocVH4MrpxCwYa9VJLpG66dBHJ8iRcAXs9KgN",
  "key28": "5jVeHMD7d9fs3N39XfkgjWzgDBa6jTrN7Z32fYTA6H3qzxAw1VFE3FNvRz3gw1rUkp9mkicDkKw52Mxzdceaohbu",
  "key29": "L7nBoBEnWhaNwePY4RMfaAQ1x9hTGRrfubnYRQZMFFuWxZ2nQSJ9vHgCPtyAvURq6xbA8CEGM7hz91mfW2h92gB"
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
