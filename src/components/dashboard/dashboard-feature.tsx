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
    "2yBWBKvpKJPwwSHRNmXcvxgm18aG9EfNxcaeVTSsfBAa6ERUskgdU8Q92HHk8y13UwTjovr2zrBuSmSSgtZoWeEd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KhawvEnS6GVSguB4cZrYwf9pVqvSrzYYnnAtBNvqAhZvEDxtucJrJurzcYuMR9XMLY2nnkaMYjNRtH64gvz2Hpx",
  "key1": "49xuVdRXTvGA6oemKNBDrgAs3gf2fmXMvzUJPZGLjHBPTsJ7Latr5bViG3otvv5hJ7sYMfBDLbgdmGZjDk7vzMr3",
  "key2": "2jYWbpYaPerUns5KrnevuxCn4s3YyMid4oHFC4dGZQu1HqBwSLze1WcP3yg9G7Dg4FTsJ8o5UPEgN5PGzwVFrUQo",
  "key3": "3GmiGbweKjDnAXZgfzTU2v87SFGoLgKbMKK2x7H5hDyNHbKdbqokAsWMFsNdcLaXofJrg4LSSqpLmHLRDeAXSa9W",
  "key4": "54k9RLVsiwB7XfceE5iHt8tv4nmk5bd8RshRwWGbaWh1JxgKPQn2NgKtnWVo4sYzKhv6jJa5usaurXTBdwrwLY2m",
  "key5": "394eeykk2huyvfXjAaQPXGXgzieSMqPbbYzFFXbdCmKDuksjE6NaNJEo8zS78cE7xjgVCa5kF3v58wpkX4XREser",
  "key6": "nYSyXGevYSrTkB6k9SeYqPwodBHsWra8JvML7wYht22cBag8nDMjmBpQyMkhxzZeF6hsL1y2iQPdCC8ubRqacGn",
  "key7": "22Z3q5JUkpto5wS4ttbJyveLbQoHqahYq4ekiBeS9oxqf66zm8W9ZsWgYpUYxCPsTBwQhWvXyT3vkbqiZ4ocDW21",
  "key8": "5nnANxVuFBsWE3ZuahdLexwWkPzq7LTxbRmVd6H3sHdauQMDtCHKZE9nzNRwmRsPMdqDtdVKszhdxLk1RnYowwt7",
  "key9": "3xUhZJ1MvnwpzziQB7b5umccDmGDyHACtvY7FMfweGPcQEhTv1twJAohP3hczNbZMTBgqCoUDqCPVWtHVy9Z1NWN",
  "key10": "57Ew4dpdbrCgaoHDPK7gEx1XM8LGyuwPWR2suzdeXdXVwU5rjQZq9ZNA4JHSH7UMbvPde5GSZNtYU16ijPx6Z3La",
  "key11": "4juBnyn4ATQVnTxwc83c2cf5N9XtstwvDF5Lqfzu12sbA2Ygs2uyR9GkJYKGKqbhZgWpxmD25stLgPu1DfsqPftr",
  "key12": "2ZWxg5PSvGdJrxtSPmycsJ28Qr3F1aiMD1Wy4htrZktcR9zTVgrcLZHnsTzpCHUVrh1fJ1ttbdhfhgLDn5FpYro5",
  "key13": "4mXQZPgE4eAz8Aqt1qvG2gx4ewXvq6tHJU9pHgowyWQNtatmfcTdxTYygzKrSe8KToCdfuuzqWwZiavvBXY4cgkr",
  "key14": "5WcBQckwVH56FzMwyjv4xiF8FxpD5uyuKezn1Wg4mecDbUr7W1kkwyfg6rvy3tTD7c9yM4fe7nM6dvbXDiegxB5G",
  "key15": "dzRofDGKUpaMjYTy44DwSLCWahLjRWvGvt2tQfzRr5TXYosBzWVRUcxjdkgGSpW2yywfuotHcUFGDg3P7JbYQyu",
  "key16": "4T91k8wrHYoeybs1V37C2YiwwTrq3ChJvRJDgqNNhwN5iH4CojU6eUYMhoQ2qL9tFVoXDvx1ibegHY3jizRdoW2Q",
  "key17": "4oJKZGm4ABpACgfSUHmu9XEhopbz1rC4ZAYFSb1eGptBxXim5pJ9XRWgXzr43qrAPf3FWrqSn51bDhLtmCXj1oa7",
  "key18": "2jGCAn5Aoht17C1GvtuMEsunnrBQcRiM9Yb9HUxoDMZeFeU4FTrxUeFtjpdqHcc2DPu2uCfQndJ5riSK2JCgPfqy",
  "key19": "5Q4tUTuFbKKu1HpqyX2iKf63h7bQyLdggZqpxN5TS85TuXkQe5FZjiTDKbUu9L262NN4ViJDyQEkyBYnmBfbHJua",
  "key20": "21f2Wv6VZnnc13rtjn23LzZvNmvvhAxYBCgMD2t8D8eM7s3wHA6QPUT5ypczWQ7qGsV94WqQafiMtP8Juc3Mtp9N",
  "key21": "TLknDULR7pdZjhM3XCZmLXT7sTvnqz8kaY3SqFDFytywho379FcnKFj6yVgCp2mfoFBU2PkBsShmkzsVqwaLPtw",
  "key22": "5VY4m2dMn5BiV9PgmkXhwZVCCGMLC8Ku9CWfEgtFNhhCurPJMghAihVZcLpnQ9htQgv6Q395hjMf2nknes8xpa4p",
  "key23": "2a6uNmD9RRNsNHsr1CgeUa5s8eDsppSCKdtznggpXajdCeA86nhPN3amwsYuvZpz362KtRr1uZcbKJgQENpVTKCD",
  "key24": "5kT2ngmSWQfdZYHscgiYCGRxMBfLRrhCeaadxG8iybCE8CuEfHAEGkLqnqznmuSaWQMCWdcAEm7WojE5wRSrJJ8z",
  "key25": "39EjAZg3WwKUmJ8a9MeckSF4ogfogXkzDJqusXqK1N7jLGpL2e8DwksrFZqHvm1DrwptjS6of5zx3wSXC64s2ziC",
  "key26": "424JPq2kegXMCcRCz4ZfSMgoH6GU4V8J5vZrYst1q6vtGCYu3Xk4Ec8BjETeuwMPEkySYADbq9yd2dThkv2KHhV2"
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
