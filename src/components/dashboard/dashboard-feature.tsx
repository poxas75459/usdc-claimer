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
    "3pR2eRmFJGMZRNVoedbG5hVnHTmyrYnSQvKCH1nNkPFpaS7Tqs2rmfrm1PbopzuADFDndPspD8hW4owUmncW9BMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UoDM8s83M6hW1ibmkaKqQLTuQHraSTiQwmhPqAvK1JHtJnnjRGsR4Ay69YYPw47ZsxHTXxHtXoc1yNATaxbHPKX",
  "key1": "2o58FeeKY2UGjQAsdHfKshYv1DbSVRqvHCwAikLGkp1u86G7HPAUYR4vSMKfFiWagF3QGebMbkHqMUct5KnHcHsL",
  "key2": "2BVCoce4BahYYWYE2f1B2NpJzoh9aPbueRsNHAtbwxEd7LNoDoYXsQTesnmfuXMUHcgkisNUcG9gWeC3Nps6AcBE",
  "key3": "5GWQt3q3hWQeLMnQQZuaLTAmc6qR3WSAuwLwcQWKGixKwB6H518ATsGHEKsXpqX2UcJRHhEbRp1FN8kRUsai2TXn",
  "key4": "4u4yjWQc6u8KTpfpzHqC8PHGphJFbgCxRVyKqgA6gPHHexiwHbJcMio21NkH99MSsDhy5nV624nS65KqQNREYBPm",
  "key5": "42xL4NaRGDQy2aF3xSWWtedhSNe4FECy1uQt5bYoZ1sqHumyMGBNXb1vZdof39HJfH8YSJ5nnGhmZefiNbUqREAw",
  "key6": "63uSj98LMWkaEEM1huGKLix2iQTfYHiuzBmX2qPHjRwZg4eY62n7n9aGjePXLhFVVoYJe4knKxYCPTNojnAqRuT4",
  "key7": "2ANyxjBm1wE1Ujj543q84YTTqVCXyCZryLtz6oqMRNziH3RU7TbF3EWmK3bUcKKTum5KZBorXsxG39uEJjv4tEcS",
  "key8": "7mUTYhjurJDruUUFgJVxcysoMrMTDtno3F5zJx2f8oB5QFTV8UBLk51eGjCGRjSdWQx2Qom99AEcwVixC8xe8Sy",
  "key9": "356WyQceSjo2HJBJD5zqsrLAJegQinqRUxfE2Dbf8cWYs6TxJx8DUAAy3aZA3Dia1C8FJrRgED9oGS4KD1zcS6qf",
  "key10": "63YrH3XkmqfMAqAFLXJBkon92nba2DDX1PGAfgDqtY8pzaHqjPuN9quF9gDBTbvnu1xM62QTEty2kmKrvmF5PCFs",
  "key11": "7TjqUZ4pimiAZvjyLz8eizSAMKTnZWvQ2sLttAdUAkg6c2P3dEEjGCYVsPLoxEbNMbSt2UXnXWoNscsef5X7kpZ",
  "key12": "U9YWa1xCEetKQe31uGT9dM1kpBbnrTfqSDgSazcVwvSDBvFEvBiQZcCqXRqUhigXZCXGJB4rRrbd3c1yGHpJMMB",
  "key13": "5m8yhVQpp9qrLJTqUv1SqvZVtueeepFuxv7E3AoFKNBTVE42AcQtpegH7BQGunaaNE3QC8qDqjLzQgBqcgXYJjt",
  "key14": "4JtkCnsC8M5Ad4wP7HhChNu9mXyovAdK9emzKMYA3A7nHeU6wA2f4AbLXZNmseufZuoBXBzCDB1NMaaoSFrkiztR",
  "key15": "2eVJRJYWMC6J22cyrDSnG4SL2FyCSaPWvBRgCVUitvkVaffye3ZtNjXEpCqnv2vqe3Pik4jnfxQnBKbgzGpBAdWL",
  "key16": "3U7pKVfheDLv4fngCLr3NbKfBQvzVkfeYJ1qfbuLLxF9qUQkfXHQD5kiR8JpTSZ75LSXLJKoAJ8MkWWXQMkJvF7n",
  "key17": "2iffie6uSppZQbKvgyHkrd3yq8x7BhEBLVkqyN3h3PjpBBnkJURJHLwbQAEQJobVyACBDhYG3n4J6wTf7NXMxvnP",
  "key18": "5rHMDuovcGis5ZbGPU8QGNgBiHQznWqV13rbZwkKECcS6146TEbu3YTHSmhRKavWJzfjr8kJJSB5eSEY32yf9Vsz",
  "key19": "3osQJbho6buRv7bYGEhsTy8BD67t8h6x7wTznHSaT6Fy8QFbvr8ZoiS6RsgoWu2DWfeRb2G4dJRbtPU7daZ1zwMp",
  "key20": "bTWEZcXipsxmUnNweLazSoezx2f9wKYMEDFiZD9UQXoawGY4bbjm4xBpHVqrC9NjHagb1GHnv4Sc5Z6QmrqycuN",
  "key21": "4oSeTcKCsTRBy3XmQsFknhb5wwGpWQeenELKx2gUmFaU6aD7GrBcScBRExTUJodY8MQuhDTESAE4okax6cfx6NHY",
  "key22": "SuzTuc8sfR2mpEfaFXpSKbWY7YZ6YfwE5b2GJ8AA73pLDFsa6ykdUw3UkP2aGs8oJxUgrAtRnMVf2rTN1Ds9oqZ",
  "key23": "Rwvq5f2d9N9dzeHaCMFEpJnXHg2F9BZMLZMDZe76deuFcJiyjSPokHmXWD3e66vKBrKBqdBaMTjh3AB52k76Jo3",
  "key24": "6u3pxDEGtQWHyvSWaDkCqh7QYGX3otr79EipgcUyb3TQspk8VmSYBAnY5ZhzQ5i2h3SqPSJw6Zqc1MWpfYnfiVY",
  "key25": "Cy1GPGtCUwKRo7CG5yuHsDuMkmHFyWpvMoTko6GLHo3JrRzNJp4XNau4J2W5125fW7fYbouxGHVbHGWcxVhqpP3",
  "key26": "57RQWapmCaAHo1Cp3LRaZDo9LGRmfcF2ppEUcd8rttsigSufwAVxPGxjCpRSA3Smtt7yLpaRLtNFQpkJ9E1UJcLF",
  "key27": "3CoixwVhvpeHmNhwcvf8CSUSc7RCjjPBPHfybRtm4VX1uzgKQBxxP2FRRZAZgaD7VzNQc3ozsgAHHhCKEiMTeUp",
  "key28": "2XNN4KuTbYJ8rNHLE7iboMjQYroRmuyPCuqps6kpfWirHVY4M8PTnmdBjNZ1WthTpohxRNraAz2mRvAzWmgrBBHk",
  "key29": "tmzVzQMzWzszyvbJ54U2xs1Yg7JVDTRTJEDUtR5zaTrzbUYXdm8KTd4dbSoMnGAfipSzL3j7bFmVSH4cmWTm99v",
  "key30": "3L1iE7pmyaJnX3xpgriLJRC8eb4L1snGCAZGU1St6cUtbh8u5uwyhdw6BL8H4eunf6Q4aP5WzvbVSmW5GeHAwHzT",
  "key31": "2xPw2Zwr9sP7MePQiMcfugfDjdvY9oLgmypRc6MbxKbqKdrHSHmb4CbGydVNZRSvjt9fcAC9HkQzXX6Gt4KkRLNR",
  "key32": "5A1Pg8q5wFEyXuUa2xvr7gJvhdx15gKDTjwXeiN8iWPoa8F2rc7rVh6zf2ig9J6mGhZbrDVNXLqSvhLKkfyvUZTS",
  "key33": "3Nsq7KHxuJXku1HNziKBuwvA2atyKHz9t9KNGy2kL9U8i3SfXFTV3bhKnFJ7w6ks7CCt5S7nrKnxX6npYSz2q2db",
  "key34": "3VXrs6mK44s9gXDuxYv6jHQqFKs9eZiUWDLN4kf9Hg9LvLExB2bLyWX4DDg7NLPn9h3uQGW14qu3sUfNbuZNTz74",
  "key35": "5c7k1UJktkEAiiwZWpta8TaKnBFD4f3YJE6My9RSA11MPTEECsKyhUbo4Kfav484wgCFTMfLYp7YAbM5AQ2bie25",
  "key36": "3Me19youD8sKoAHigNQTPNC3Jo2XZ3Hq2Bd8EXHs3JR7GbihK4WSC9jPpFNqNXVdjc59Wyv4hojPwTQGU37cSyZj",
  "key37": "2ThAHX8BzwCnXq6WqGutwFoWzBcCVEH2PfyJqkxND9h4W34g8mrYKbYyurAnPWwoKCayWmrjbDtCoNbZbDFNDpLc",
  "key38": "3dJ9nxLpxWYXdxUuMSJ1wBTPMHAr2pa4PX7JC4QgXdKandbuzwzmac1z4zXX1cZzZSqyc5gYncyx5ZwfLDXVBU2C",
  "key39": "63qN8ehH36y1nndbds2Y1g4Jpzbu1ssD6D88HshJjkChccDoSndwkkFySmUdaQXEdNYmU9dEB5A39VphrBkA9oNq",
  "key40": "3Evgm57XZz2PZCaYDtE95mCrwT5GgisHUWjRRvc7XTc9ww97okpJhdsHRZCRw1zzHZxECCfq7ErTWZtuAkBY3Wvh",
  "key41": "6jjHFAxGndbTdHLpvzdKwrt2zutUXFQopxvzb5PGbi8zoL249b9w6oVyshvm4AkRLY9FLfs4mYRPzNKugMUqKnC",
  "key42": "7Nr9xgWYivTWUSzT8eSP4codEeKEaQWESzXJ9vws9Nfdfu5gRDJdMT9KH6MRSpV8aUY4TVXK5dudXkSH5pXy225"
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
