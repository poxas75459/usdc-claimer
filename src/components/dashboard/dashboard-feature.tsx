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
    "VcoB9BxJ2K7PXhH7BXS1o95VH3TnFkszkGpNSnXYcrG6ZHf5nfCnnr6mC7QXydYeWmwZRkXoFYi19atjsaeyrKr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LwcqPoNh4SSY1N8hetYoq3EHsiEJDLiHgqnjCenEnzVFzyFAqauB3NVSJcVg3orgqocZACn6FVJKM6qj7GGNrcB",
  "key1": "5yZnoUrkKKBLuEhLjjfUVGH1s8Atqj53wZs4P9dyDvEdashxh5vHv5qxxygcaX1QvQqWQPZ7RpqbnwYP8RHSxCnN",
  "key2": "5sAHVVrjVkZmF8UfbqAA1QmuZ8HTsjYYZD8hyp6dcm9xDpZs6BoepmVR19i8cBm39XmeHuTZ8RpsnLxngb4QHojD",
  "key3": "5jjjCUbiwbq8D3RWeiShdTjC5FD349PiHFnbMGcLS1QYzo28C9GWQXEs3Df5CkZmPnWZjPB3nfWFpDhnRcDusDNf",
  "key4": "27enbDC6DvwNauAZ23kEarQmn7qBDW3ZipiML3vnqYnurut2K3xaC2tpctUpEmjLEJuRUhrCZagLPpuvdBifBwDj",
  "key5": "9fsHJDgyJ8vScMePyy1sTXMqkjYghGaf9DvyATycJssq4orWsZ5diMF5FKmGE9HBTRe3GDqvBjYHdiWPgMBnVVR",
  "key6": "45yD86SYMUMtKvLz5UoLQ6r4aoTfWPAmZ9DRuaKrzfkdxdhEwsjc5uVnZrmeEbE4zkpVBhjb3ZTwR2AZBUnwuKp9",
  "key7": "5JuPAHbVWXgV4t9cuLFXvGpWTxNkGo34EXQpbsaW8tgzc4782vJU4wnP6dNZdGwo2mEYsuamoim4tirPBfVHGEG1",
  "key8": "EWBdRytUZyRnKTSx7Kti9rf7HmVDXEgKbUTxd9wU98nMoZEt6UWf3uT2Us8UHmhZKTzroRE9rnzSshryiLTUqr2",
  "key9": "uuM8sYLyxx19P7pyY1SLx25CoUL3C913csugE1TQeRaGetXzgG6jXKVWT1MWBwJDN8bPabZ86rL6KKmcaRVfW9v",
  "key10": "48B9ye6o1qo6Xrk4s9aGFQs1jbDehoEYJTaYgRnZW1MkfsFr1FjFX7UAoNo3AxeouNBpZw9nfETN1WBmmBZobNkD",
  "key11": "5sHUXpGYyNG2SX46tk9Y3SgWJrUA3NqJLGWxsNs8Pb4r2qVswXMg8QDCdAyH7PWmBc9u8bEFcKWKBRBjuGpNX1H8",
  "key12": "4PfBKqsY3jbB7hT9v3pxS5A8ie3aWxstej7ZxPedhXxR59LDSG5drbH6w8Fb3FqrskKTatTUSRMEdqrwT5tWzm2j",
  "key13": "2DWSSejThCra9RGsspJkUWMtv13UavxxTPcYu3RaQQSmgmY96Ffhuy8yTeft4b4V1H3RPFiL21cPk5sa55s9bepj",
  "key14": "22bYALd3fzTJcxqGiswcDsx17FErhPLNvFbL8LUYewJ5DyiuVCFQqvcPSmPKCDhan5UVCSeF3M1Bmm8MaZZ5Yo4a",
  "key15": "5CQBSE2PkxuZmQ68ntTdAW484ZxYZptWdwc2LUCRg2qGx9X8PosTcJsY68zKeXbEe9GRiEqYpiitJz9LjvoCgY4i",
  "key16": "vbufSTnYWNJmLYJzLSspJ4NqJmWL9TifgqaUn3yfTWpSo2MJumpMytmtVmNC7Q6RBWCcWd3Wrhoap1R94GhCxzo",
  "key17": "2XPxQfj92AujCmLQNNmqmJiS7H3fa99DTfVpXLiiGxfa9jGvMdu9gwuLWpzdDuqDqfFzrVQtxfdCTDmvNSyAt6to",
  "key18": "4u3jchWacjsAyQnN6k5c1GhGsZMhe6EmjCM1wV3rwUkbkNaVwH9t2PdKwEaDtLa32zJAD4i2m6ZcZHuCkCricSx",
  "key19": "4AJoXYoJuD8ersDu4umkN5jieCubibZseJvCLMCoxi5zR5A5GEoKu9dti4KtzjC2uL1LrfsUStqqtK8JoHWzfovB",
  "key20": "24Fvb1czXbbFuH9gF2bEiX26eKkfja6nDAkMfjBZnsRx99ojoz2FuDWR4gAXYMh6cTYhYxSvdH6rjh1gh5dvMskJ",
  "key21": "3oN7CGvPSViEM9THL42dNjN46L8XZiFDUJk3AtuttyWXqNcb5dShvG48Z4LZCjEH7rNP6heFd1mUs3ma2ehzbPRC",
  "key22": "3HynBA7HAwyKtRq8v7FoxUAyW9XhNvPELXvXq5pqbsSm4wLv5yDrUHpUZvGXe1ZeRhe2pZG5k3k7fFABcfJ9aNsp",
  "key23": "2paMBbFpTyFf7SRBahjWJ43RdgJiSXRsHWzVKFXbME82W1BYRRmKsEYp9jR5Z86xoGqbDAodGHso8qFCAM9ozZGm",
  "key24": "5iGJLoht4CUHq86999vYKNKWbgwiHMUDNbz8gYuMTmdoJ7FADKqjNo6yMpEmKYXyakzNzDS1X4Nn3cu4K7z8cj98",
  "key25": "2Hgz1iW6NNNtGpDJLbW7DpwMcQqNGuzm7NnKuMih1tFC5y58n7rdH9ugFGcbjwY6GKmURpzk4TDRGDqw1oo5Z8oG",
  "key26": "VWVPqGfe8qtR4s7icXXB3BvpKNfxmVRnokskWaNTYTdRaNVMFJpu2SBXm7ZPgGwQBYM8mMdPzPmQkwbzNPkqdVi",
  "key27": "3iWRPZtWaVXLKCkPN5XjgmQ7xxSg7yDUCXJxCbg8BkHF7GG72EstTQQGzDvBmmwt3bTorB94bTC5EgT7EKZDLzJw",
  "key28": "2BXaVvqpZMk1mXn7ETcHcUQctcuQzF1xcJNwLaq6rEGBEbt1vEQ5wA2uULaP2hWQapTn8ddTdG3UcDoXtKygC7fV",
  "key29": "4kEGi3cKd1so7cHQvubtgSqh3UByRcBgJUaryBsKbkkRnVyoe4xMGgeF12iYogQhGMhVTgE18oZV276Z1ivkDuG1",
  "key30": "34H4PUGLrjTc63N3zR6TYuxTELFMpVo81Gs213SigHFPgPLRFDfxDBvJiunahte5qqLWnd4HvvDXXAje5MZqkJyT",
  "key31": "5P79XvXoxQXhf6SvivVqELuwQfQTd4WUKhMK2Z3vSW5mBYop44hJoyqdXt3NAmpim5isknQX6geZZbsVGw4wsVbp",
  "key32": "3nUwiKVv7wnG873mcLfPXRJQzb9uQvsPtFTNrz9JmDpzeP46TXZzPJvG35Y4UaaXcacVxnprErR9xzoLdDRMt79C",
  "key33": "2hSgsWNUFEvevaDb87JsXTmvZvXYqDJ8GBDoMUYKbWb9EYCeSRTqBt8opskvisuUH5aaz5xTJZGp2eZr3tMRbpFf",
  "key34": "1kn9Jv5PjZHM9KtkuDRmMCejXSCQYE31DRk65h4xMsmDwzYyBVcpWpXbbGHP1KZPNYRAKQfZec4HyxoxdXucueu",
  "key35": "3giYhfSN7b28be2yH1RQ5hph8YStaUqXrT2GNAHaUbdPY3tSx9DB64kqkxR1KE8wKwdcjDDyaqPXFc2WUcqNK2F7",
  "key36": "2KuQveXAAyAWDvTyfhx5nQ5sQF3eib1SEkqE1pAmSZt13itqppWwJuyLN51GVHT7TfLRKQtWXQ3U3awD8BX6zW46",
  "key37": "63yBT2gcD2Ldw7jsZK5QqXhPA5VNR7hgCtJ8Wqv8dJ3K2iKpPp4HbBDwqG5qbpmJe6L5LfqLEbx4LkJc5en4wv7e",
  "key38": "4LrXKe1sitWEVowcxkfPMaYh21jhb9XngdN6VWVXikZ4DRpurFEboVn2yewXaBJb6yKhPptoceN6c9MLKGiGtRjj",
  "key39": "rQbJoVcFSSns11F6iqsJjcRUqArxED8dcHQKh7Yj3MmMJMB8TA8rJeANVHLPn4pNbBrntoq5os2TSL6TvBQ33UU"
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
