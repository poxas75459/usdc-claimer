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
    "NyHPxxYJN8fXNs6QTBLNHX8t9ex7a3uCHMZNG52dBzSS9DiE4yoPJsTijjyWyfa7pD3UaUAU8yG9SUXFkSCtfxT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pbBwL2QrzhUuNrFsDDAxGpGR6su7bMotDjx8gndR4nnGvokxw4NgT6RqrwDM7pnrePWm5pFVkrUfwR8mnLvNqPj",
  "key1": "4gZe6dWzhpZr7SC6vGkGD3kq4UGmTEZfRSNWdX4FX6Qz4vcW1sDVZnit3kUXEVkUHXESgugeSgLQvh8q2cwU6thC",
  "key2": "u7eczYBDghenA4ZxHomGtkZSDxjaT6rzoGbqPqyGNURiFjrXDsLqxKECi66iyja9nExes4i4GLufFo7NQMCPEjK",
  "key3": "3mBPdPewbVPtNGHTvhusqduEHr8n52DCBSTpifT3CsWUZMBFcnjj3EKuTddKZMHkRteXJF6GV2a86D443LJFrxqc",
  "key4": "4QhGLxV4bS2NCGvpj5o444iJHM7FYnN9yERNwwCmPcwWziRnHBUqfH6etVwYFcXZe2YMYEVrMtCPjWoahWwfCo81",
  "key5": "nhfZCM9ePSwofmdNivr5w8H9QuB2BBCMtCyxgtMFRoYSnrQG1Q6jp9KMFFFWCzzYxuPvCwTtx4YKoJFMTbay4Uz",
  "key6": "46yoRzn3h5XFowy93DHKxcaw4CB5HxxhMxeLCe7srCWjLFra6D4zwEWs8MWgzgfhQfJdPb4B4WPeAgUhnGUuWNhJ",
  "key7": "4ukmZuBiGsyNprQpRbQtoP2vPR1P1qB1LdMacNVWeL4EFwLbuWkvyQekFDZBisny2YzrDz26SxCqeahEhQ1tdnsE",
  "key8": "N2pFnY1Zr1ihVsw9To3nhhqvGC9y5XN6zy4GAtSmDgoK2pubegQxrR4dcdEjtVw9sK9yQh6nvbDvT89R3ZZiYKK",
  "key9": "4aSAtJbJtgPNDn1Xm18S4xWHEPMoya771YBcJdLq4zYZ9ZT9397adbEHtN6yYLNZQY2tiD1sNfS6uKJ9pMZuMCtq",
  "key10": "29f4wQjNKxpZZ6R5sSVoV2VBahPFw4axVwVkqCgJVznd3qQ82oM3k1NiKZH4naMgbFA5ED7G65A8wpuaZWM3BoyN",
  "key11": "3KNKRnw2waT5MjiJLyf9ozkZfuLKCoE981BeMFPCYEE7eVUTvvTpVo1LzoEp6YxCETAMPb4AC7fmGAMYUFYpemMz",
  "key12": "5xXKby4kWoCNNjUPZdEyoWUiNVGwCr8DTsmTxHnU1jK7KMu6EX6qgeUk7dJts2NbSdVSXMknoxY9scEZ5YuE2SRq",
  "key13": "4H8g8DyF2sL5bciUUpzibwnGoBJ6g346sEkEQHLUgrZb2isaenXVtwug7eCSg9SQv6u6DuMyivty8TE7HVYoGnX",
  "key14": "2qZy8TK6ADnLKTageHfmjKt3uNmY3GutWDEiXiEkvGQLaauhTLDqgVEfLN7xYrHcH5r1pMyQYrmYcXVWqh2VnpsD",
  "key15": "4oHCKd1aHMJazVn9GDmdCg3xFD3M73YZUYhtNgfcGy4s7gjX6UCuGdkLa1zmP3UFSj6yzK8ScRETdKxvaMG4s8r7",
  "key16": "3SGQV856PCd1jwLvhCbkPro76z8Q5F19i358dNumLepGALjMQTAWFFDpQio4i6rscG6RMtdcTGXupYn2hTKFMbkZ",
  "key17": "3rL6hDgL1aHcpNSX6YBbxDZ7UstyoFF8ud83QRQ3bQbjW1w3MVDDHxgCdERcG4PL9GDT6sjhbftrCsTowrCUnnkF",
  "key18": "52CyCKx5bHYhwYCHrrYirLh4yumgxZ84ymUucbA3GqTash5qym3crqhRdHPqaKvgL3n2zgqsNeatQ8oVcc1Pp79s",
  "key19": "5FqiVFMSHaKydtArCeLftfbDree1duSvVYi3kyt2reNkRKBmUocHv8F6xJSAndX4FsMgHgjzKtaCvpCgaXYcPzYT",
  "key20": "2TUjYyDHy4rnSaY77RUixjwHGJwyCnj6x2NHTvf6usNPaae36phzX7UkYwLPVvd5AC7u9wKpQEbKa3qDotLfcbG6",
  "key21": "4K9qfcJdTrhrwetRwELsKLxe3HifxuzuQ5tp39X4Pu77jYML8dod7QqK5EqvEmfprXuHxEnNStiLf9PL232vhCDk",
  "key22": "54TnEt55RwUb6fKoP8Apb9X8XKgpgUuvcYnDcCdbSrRVDYit7aSJj3tXyXft7W6e2gqnf5THkMKC7hqR7txKWyCh",
  "key23": "4JuBi4C2AqmKqgpH9yUoRm2iNX313ZecS7Xwss2wXNu5cpXxM3v3Htdx6vrAUgNGamqfwitDWL8uuqG87nJJP4EK",
  "key24": "2VdDpRfw2L12X8iFQuo3Pfk1hjbWMjyR2tCT96zBYQwEodBTEwv9tKiHEfzdLPTXM6uuYGpM7mizGnWARsh1ms24",
  "key25": "2u69gHbKaoNZV7xdds9ykEsihuzpU11w1JuEN2BzNzfCan6EEd2GsFAYqNgFLmheU157ebmTfH1SMt5XanN71mu4",
  "key26": "4WdLobEdbxWoXK5hw3aBHTFHijc7YWzrjJghbtmWFZbPDnB71ZrMDDESxCbw9EuuswXLwqTaNpxvPwUx84gUEy9N",
  "key27": "5dQKyGJeJQuZa6t6t3vb9cvcwRRvsDQVLAHVSKV3ogZSk3fn5dHtkAVZRdaA2Lwsskfm6uVpQtF53kDdowJvoAvm",
  "key28": "5T1GnCGJET3MPQe8mqnYdNaoZ3YXF2sTjH2tqY8QjzsuqEmwcf9JWoMKgyuc7W9Dx1ozoDS8wfqFC79W3RUP5uU1",
  "key29": "4T7BcLpozRytJYUJRXdZd1CVSfRJKiBFxstZA8UHDg37yQ6bPxG3VUL3U1UUiPwSRTbL6bJj5n5KKQC7BmRNVKsX",
  "key30": "2Ds73noh6spBpwRZks9P1xuAhyjizmepXEXptjj6Gk7XQPQE6DvBpjeYWktaMNEnwfD1e4cKgp6jk156SQMAbqjL",
  "key31": "EzJVhavHN2EjJL2K88XsrwA1oQUmFApF3BHEpm12kfD2aC56XPYPiixxZEsYPNCwRSwD1rQ4otMMmqUfenXrCnT",
  "key32": "45C974Hb3TRNJte1oxhcJSE5onTo15HfUGYKjiutNMBQZBdrXsbStbu4PweXRYzjQun76QtmjMgUobvt1GR4WzDv",
  "key33": "s3X9w6dm3vmSF5fGKkZfSsXZwBfnB7WMwcHGeXzaFWnp4v2WsecFSLH93gUbcCYn6ytqnXpKwUP14qbCR9Reky8",
  "key34": "3hRWAJSDy9PDQL1xTXECC4j8j8mjHRypCxU9EDr9ntqae6jDspZm56xyxspaKjPsgKuZPm4q3DnU613HGiLVvY56",
  "key35": "2cNLQLvnrCK7uU1E1UMYB5uQk4fvMfnsUKXxFuhstVS2sJy7RaJYL2ftehpKGwtyFLxykr9LrExbt4AHtQZfDLZd",
  "key36": "2fgFcUbza9CAdcrnE64XNeCEuQgKJcAUvkbUrqXhMimn1bfUuN47JNwAqZfZwGBBBqvuPMHx6kVsAathkiyWQPXE",
  "key37": "659nUZXRPYYjWAdxsAa32ByRnKLAf8dp2N2KGsVs9hzQ1zSx4HFFJf1JzHYucZcFVgJCGN97gBVFcGV7BAgMAyye",
  "key38": "44Y753qHihaRnMqB6go9iLddBy2Jz5fnJvSQTLmQFiztgimqV5BWyL8XX1Zwg9keRCq4XCVhwCPofKjmZfxmXReq",
  "key39": "2k3bnWiYBceK6i1nkL7GnwE7jrMyqRJag5cQxugDe671jQR9rTkTkHzQnzjEX2D9QvFen1C77SeDAqajLFNp8cMG"
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
