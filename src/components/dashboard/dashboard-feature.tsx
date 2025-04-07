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
    "fp4pXCqbms6i7Pt2S4zNs2GyCcHTNFswxHa2SJps5aHrYHDms5BB4187kubozeyz1MRCXpTJts5ufKGEJnEhXJQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RZaEqyBQ2S52MhXGDkfrQf3ZvUz1hztRFL1iRyXAsh4nJugGjgeMS2JB5jchX4C5YYCn1tDVha6VfPNwJhXkSG6",
  "key1": "N3kzTTpMM9ETCQbqQ1ti8tBG66NcDrxHUqyDC3yZufz1LpzkcoUSD4wjFsBSTHfmrv7ey7Lch48JVP2LsN8LJGW",
  "key2": "65ehhZvfbJ32daD3RKiXCJPPdP2aSSHwZT9jjz33DKriNpcXxU9NK6oTUr8S2779KSfideHTP58DEKpkDhX3XJ5w",
  "key3": "9ep6Azd7QVkLubw74wwCn9VNuJxtXxZrLkEBwt4Zun7NyXQMBvVkgH3MovvBwRHF5FpbbKMXhPVvAsifSjh1jQa",
  "key4": "5CcwKGfEqS5ax7KP74gq8h5ZMwW9wboZaRj5CZeU1EwRNeqNywFPZLxUyLZkoyWTnj8tDf6kLEsR1qxBDfk6vU79",
  "key5": "4VEPdBumqRgvAjdQniubS16fvzFYhwueSzdvCUs39rFThC9aZQFf1unUqzDWfyrhzQD3ykdzJNH6SLM2icoNBCBS",
  "key6": "3n9M4NsagHYzHBjnbP2B3MwX5as6KWb8rv1VSShGpjYeYHcTunafkJ17XtsgkTNCTtVtEQTkqSe1dcwscapXJPKx",
  "key7": "3jsHJ5ff68fF1XNZamx4CAbRGiJLxzhghwJf5C86HaZcMPypbVF6srPAbWRAKTad6aLQohNaLugQALq3u67TfZHt",
  "key8": "4VknfNEvy3P8pkqtgRBQGVUvLKPwTy9C6xFEXkXM9Hey344yc1QX8QbWzgYHyqAGRiuWpH6VCWfeqpgwymjruK53",
  "key9": "26EBxiLBJQu2NdQWGr1b52H1UrwLtk673bDnrxVBLVNrTZhFzmyteysm7XMQ6Rcm7QXDjuUmWp4HBP2pmWZmkm9w",
  "key10": "XrGLuUKUxvJJZLvjNz8jk6Gy21g95Dj9th8YPj3a9kKLe7de1mn1NSf299vikWuR7MMKH59JnavKF3r7QD3ZQ1N",
  "key11": "52RA3NnW9cqcYP1Kw1KjmC9WAh1SqDwAFrKb7krEEQj4o47CTpvMUdXwvxkVjQ6o5nusBPpcDpDWooesbBdGamB5",
  "key12": "2DuiMJURVBiDeJUs5AaBgzErxobne4ThPvm5yuRneRUJrURAMR4z5XxcrUW4VCSzDhPgRzsnnRUNZs5WNmVC31zo",
  "key13": "3F7pweFjPgi5RfEikz452ySAwvqGLR1B8wKdDuk1bz51gxuYexpm89FC3J2UGNmuqrdb7CCPJPjDZpCXWRAUrGv",
  "key14": "3WVAJpQUttQhYHv7yyEEUq6eo7Gj7xrxjVPvyUCA6SFfuYV5snh5q4jJEH8FB6Sv8pRgvThhhF1iwHerNBkPrjMk",
  "key15": "3pk3e2XH3EpWanN7BSsSyjkFGLUhe4k7A3ER97jPPQ6udnY697LyH8NpY3apkJrzWNjagRKmVTwkGqbjXuQwmRMw",
  "key16": "Sh2WhmnJKoR2WTequd5TFyEVfUU1X5jBDr2qnWpVdn23JxsfiAFVdmEtERKPCyx368GRBMjvgKpwZBGFPh41Viz",
  "key17": "4wNsBKuXQicPN9BitBnvpRwy83uVFZ2akjb6mPcrxgogcMQPsTRxvmhuxWEUuHGvjN87SU6uATDzAjCUw3yCYMJ9",
  "key18": "994YRJak8WSTsSdFLNaxirqgvDf5hge5q2UGtshcKM5Dg5nXo4tmzr9GSWEykCdXtzYi6Ng4z7yeGesWX3YCXZK",
  "key19": "4Ue2DN3Bthbu838MMm1tTmwzGK9tiZxr1Ucij4HS78v5Nw1dBkrLrbHJsnTLwSQgjynK9Z4CbbHP73Y9nyefUs7H",
  "key20": "5B1ykhBW3YJeLUDLL9SwoJPLvj1EwMXtQmHAdBuYhqHHmoGnyG8hymCFPxpTrJu4icvgyokSpNySh9G9P6GbZPG7",
  "key21": "HU3w5vFxWDBdjCuV4GwUwafSZFYtTe4dYY9S7BZrgdg7thWD3i5e1HiavNw1YdTcvSn73Tw5UXnwgBqYZ39Tc7M",
  "key22": "2TDFPFsmYL1DAKYm6WnR9DnJhNrvVBuv6QjnHC4EXwDwSCZHPvLyuVfytyuvrUzAJxirR86CNpBZ8RLNeUjGzZUV",
  "key23": "2H5e3zL1P1EfypnyCRtr7AeetCK1NJJ9uUF58fGeY1rsL8mp8cMdjiH13znnfrQMLGK7tpsYPyJDjq1optcjnrv4",
  "key24": "3ZjbQNCymfYkgeWdWKHajgdh8af74qCkJDzJwh2GWXmDkeMN7VY5XzQUvN8qhGUxiumdJiFXNriGWKR9vDGvJtdC",
  "key25": "2P5pRvPw93jDZ6EBhE2NwxMg1oVrxryVh8bhnFwytHoHMk1x39ZcD2X8oBwaH2F8FeBVKnz6zaASQorUkpuQxx8h",
  "key26": "2RWGyuWFRMac2jNSoxayup6cY1ZFqFGefL6iPHwm8CAUPRYX7o3XT81UZ2dyT4X3ZUgjosgty4w3jg5znq8LxiFd",
  "key27": "5iTTx16m1i3DvYask5k4cLWjDZkLU19LzjKGWVhdVLWWbsHt17uVCggznYW9hUtN2ic7LUBZyEQme7fDGnm32H6V",
  "key28": "4NdHHncu1F35X7uFxk1f2jjck8AbrLkoBqMa1CBuUkDqroM2jzziuE91SPRsXFgXWjMv8WWoEGUy1q5iF1PvX425",
  "key29": "5TwHv1xWQTKhoFAQqApCXQcqi7bC8b1Gjz6PW9RUTuSYCRJG7ijmTZrCz5DMTkwcVwezHK45YNrGxrr13p6BND9H",
  "key30": "4q3B5upi4hNExwK7TsUuZFeKfRjRZ8tYoRVtqeCubFrBbwbKJeUSFpicXDSn5453k2wAEoPMRyh5ccMtg8fqwiNt",
  "key31": "4doA36Mdso8yFsYVRCK38447PW8TET2Kk8tdFXKiKm5j1M9YsT53k5t4yMhKMTxjVmqig4FQNACE4aYpdhkLV7wk"
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
