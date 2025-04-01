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
    "41HxcVYRRE9r8TyMTjJ3HsU1MMstRBYM3mhJpNfwo9uscQeRmvaxZFjDmipqtmqskPWuzLo7hGBEcyYf9cVUPxNj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qi4X5KEnB6LiTHs9mRr667ZXRtoQUa2jW8nKgBKp5oSg7djAGzziT3uCFJGL6TNMboFD66J31kHEJwD4ncbbNno",
  "key1": "4fNBYsCsTZ43ZJCTsQMKgNdk3JHzaL51uMSeBRzBuVsaSWbbuxrrjTqs2cAuZFdWMpDLiSBQTuJdiE8bLeMMC7j7",
  "key2": "5YR2bD92FjeH8q5PqTcrHUta9RAyHU61ebVdsQaT72LVeRJzJNmjUYRja2zagHtHTzA4mMApBzscg4jjLBMoL1qo",
  "key3": "5vt88KKRh2snVDdtjQWcvfc8RQdn1iZG8gGmMdMNkvS5Mp8hSuVyemjHZvDASDdyKuXBKLge3ZCe959fHBAsCjuQ",
  "key4": "3MgFB9mDcNc1eX8n4Q8dEY6uzm1HceiBVqdxXhws22WABAp46swWKbBqLRqpEMRXHHJTqQGo5DyciQn4PTyqDXq2",
  "key5": "2NoXx5MQJ3LqKhHiSXYLHyK1bLT38EF53yU59pDGi26yRmH7Bh4XBAZ1nd4ixbQyfsy5U9C5ykTxzDdzGiEXoBVN",
  "key6": "4MYEv2w4mj8hdSHfFpezBUPbaL7YfcfpMpMxd6rv8qMVtt8fwj1yQGgwK5YdrcK5Xpy5qKGseb6RYKpECq5zLCq8",
  "key7": "3WR5P335TZkgqP8BzEbzu5scdnQGEJPTtZrGkdGGML7gDpaCJV7dFp2yeCzqiZUZLNr5vZDGWtcsHgK3KUjBjbFZ",
  "key8": "2NyBoWAFvpnRCgJCo5NTz9v4sTgJG5aZsb2A3qMvaEzpExiXgrLD9JcR8QazjZw43nhFaL18wovhfMoNyKsGjGCU",
  "key9": "iRzctcgUHsM9Xzv4WhuYNhhv7YpcnKH2CtwwxLxJmY6UDz3tff8gTDEvTgCkaPvX8WmG8oBBTjuUGcXMKL9kA7M",
  "key10": "62PTzxFj4odt9qpm5jPhZEFqMeBCvvT2P3BtuVj1R1Xuarm1tn3iGyGAJ9kNnCwqSCaz6Y5imFx6dFRR5txhQYwp",
  "key11": "4HWzkMVRAVJBuNUzugfdrUTufV39Hi5E7DzvtfSY4eAZrZGApUf2h1fGNTswgunTxUeawrLWsy3iBrGUuWyrQWjY",
  "key12": "3sZyk56pmUWTzwVbh3YV1rjZNsFtshSKdQZ9kU81he6G99uKo7FpMJndtm2XEHfHnSJq4L8BKYRzuEiAmtEjFKBD",
  "key13": "3rFJJjAyM2qQQECjALvE4SrLmyx7eBckRQYneogBimtgYfAJmBZGwVTSTWCqpyAhU2yemYm52uRsDoCHSSiQVbRC",
  "key14": "46uwVEZS5HcW4wEFXAttvvWHHARqC9ubA6ZF6UcoPSR8jNCmwNwCGsUXMx41DfrZShyShkogiGxrmhh3wUhEwqCx",
  "key15": "4vzxTPXTrzusiLsKxiCJds55NqeVhg46gadnxJYuUfUfrg98Yi16ccGRxrcbkrPrxh6TDnR3XSrFc5kTYF9gGSSc",
  "key16": "53knbgNdhULQwR2n6wgPDLGQeQnVNDA6rmNbLAgJy6Rz4GSRzPuB29WnPxg7JytMk9KqAymhUYEoUbue2L6KPnfo",
  "key17": "3tkSkGRvA6e5b5vgfHZAtsjoR2zQX4n4TUC1MYaERjw7NG53v69RVq7VCisZ2MyMhRpFAsb6Ht2tAa1WnuV6gCkr",
  "key18": "2tDk1YNAfCrpDwwHieajj6tTyYYtkhzLJAFGLWTVSPFyLGGqc2Diubps65GaBH2phDLVqojSwYyKxn1oPF84M6x5",
  "key19": "rU7StqYUBoNys1Rs875UKveY4gEHnkXegtszNBa1eocj4eeiSTDf85NJjx4Pboxtt5Fbg7BG9adQozXDf4Dx4GS",
  "key20": "5vFf2XGu5U2AQvZPTuP7Cxd7KQwi6kHZqRdnsxnngrYQfX9DxKMFkQwJtoA4jmktUVWgNsxgiJnUYFNDfa8nZsku",
  "key21": "43g1EsfNL8MxgCvj82F4njVwCM58uTuUGgyfP3X2QcWrbJbbkLnodSeDdXczpwRbyVHwErYqgfRm4unJuQ9pTW5C",
  "key22": "3SmrariRYewtQWkrs86VKYvpdXnvzqNoLXtmHraSbWHvQ3hXnRzP5TuJj57E2iZt4Knytf1urhzQYm8n7ZPymufv",
  "key23": "5SEDBCtSMJfpLWMYJ8XiyKWBz3w82hjLhv54e3yzjvGCERrbrJkcHJgBha2mn1j1Dr276Pt1VVseZiau4iJdFn63",
  "key24": "4vmL2c6osDVDEidZAC3ZrX2uXMM5haSJeWCPaGgWwoaDT73Nq3U1fxrxB1pH45XbxWnqi7mxHSkFGhzNxdcPGvcH",
  "key25": "5gsujQ6YtHVxR1yRmtxH815qQ791KXqTCeNM7qRjgvaM1dWq4Qh4zebi92jjK7HHGWgY6BgvHDZt43A1p1AzZiVv",
  "key26": "57Xu512dyyVUvvRQgdw6hdtaQ8eXJi7nMRSrqUeMgVtGeFEv8PzvRBN16Ph6eWvDAdN1sE6vorMCNzk1PknGYGPg",
  "key27": "3ray4sUymG82TgogUjFZF4Qpucza91m8ExeZQUud3EN6zbLvioTH3SWXXHbTwtNj3UmM6H4dv4PGUWxgyeLcMj1v"
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
