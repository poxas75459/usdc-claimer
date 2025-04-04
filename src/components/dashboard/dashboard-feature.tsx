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
    "483gEpNRCTwdsqyn5eNxFRryppfMLh8wjhd21YmT4rP59cqsVuBHUuhPhkvN6Ko1rtbYfX1yDZwVavdLMy2UoD8Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M6kBykHnuSSdZexREgme9hWcdYDekv5L1jm9nZG1gSupqSBvPtwRceS9Njf23yX9J8xcQuaR9vviBgLg332eRR6",
  "key1": "2ScPZXAxu2sy6MrH6Jj2EDp94jzrr8W71MRaDTD4Cn4uHcQH6ZNzj26FFwatC6dC9nDPaSisXCGj5NY41ejhGutV",
  "key2": "2j21STo7uXCQLutCnyRqdxKa9kuxY6W27qZCQAPUXAK9TourvYreVDGXLCf1fziwdWFtQGeYPYDpu4sx78xxMi7x",
  "key3": "5MN7pkY3tjKjAh41699N2Z61twiTVsa4egWjuAPKh1YtZPHwnhrXLUnQ7wL4tphXsqojKjLkNNzfWs85vcMZivtQ",
  "key4": "32wKQPsyRFARCwUosnUJqFNknZAB5RmBVArkFndbJ7RGyeRrdo6AitkhXRtN1CZLRRWsp7G8RVbhCv2ZSHdFCmsR",
  "key5": "4gAx6StqUuTzdJ5LKU3oE3aPT1RvugKjEammm4M7RVqf2ZADG81m98srsLnMBHCfwH5eqiqrxGjKekEyhZM3oUiB",
  "key6": "5BrHPXcgSJXaqwJPjdheDVomjAAuNeivBRzcUfuj59GGAGxEJ3dMUdgqexn1qgKkdBJArz2xPkC8fEDYwPLrqFtL",
  "key7": "3WGYy6K57K17aYWedoY6qqaFiK6QWVc6G2xnyQbMfYq5La5xHHApwhfNMANUEH5v6aFqLwcUnJRjF6jy8bQwqLV6",
  "key8": "3rYvZmPYoAUBLkttTtzYthTdmYeuLbTW9TcxHH2FGAZhNamcqwBy8RfSwXzrc1UxPz8wt7Q3Ch6EYj3TbV2geSBN",
  "key9": "3kECXJd242v23ALpv2raXzabrH8GCXP39i3XrKxCpfnqEWXMhgcuhUCg2UxG5wsuTyshGwLRrjhddKJLZS1ojyx6",
  "key10": "5e4cbCzLZQWVJe1qNhvMNFht5wFx3uqHjCztzjTUqgqBvxV8HNZxFwbJPSQbmHx1m71sS98iKZg9REo9UKAExkc8",
  "key11": "3PKeSytJXMNmKeDZQeYM8Mg3FZocgmGUDXjkweP57ojxgbGJtLXoG491LVucFcyY1jLCNL6kPe6ZSxnaLyaQZHib",
  "key12": "XeUsmAzPaUvQVKDihb4RnjaZj6Tuptt5scFQY2shZiivpW7dhbYziNwCv78hQ3TRyCtWz1Swcne7bVtozWRHoDq",
  "key13": "29n8u5WxjoZnVLZJ2MD2Ahy8fy7XT949ph5iuYkFKYHGyNbYMBZNZ6TyeSfddtgTD3AgYjk3nyYDs2mTNgFvkwxc",
  "key14": "3kx6VMbKGKXz7bnxDkP5zyaBWYbtf9H4i3Ls8pru68fyYHM9c6Awj8AdLPfqkdGwnNdHPrPtaSeVGatK28oaVAq1",
  "key15": "5nhzU9GTTBqriqVzsuSCSQZonESjnvMMoX3NFnbtGA8HMUmgMcF1KsKQfzxJBpKHs9HMgQK1n4BPo6BQaZSySxBi",
  "key16": "RddqsKB48KmDC2sWLeyZmRbyuEpSDM1G2AXgkJvFKsTYDgSV4sSUsM3qABnWz6E4GLZgEgG9FmtNc48odHhkmZS",
  "key17": "3KFWYywoWvx3B1UksNsKiqYDRJw6meDaZvxvZzm3KyKpiiykFT235qmFNZtrpiiHsPpfkrp5zwAt4FG55gCWk8TD",
  "key18": "3oSA47qD3kLyJG5PHF3iSBHcbfAc8Pzk79TUnQrseoc8UUwioUQE5vBRbrdTNYDoLYWDUdJcLfvvLCZsLjFLCAAL",
  "key19": "3TRFCWFRtnZrcHjQBqE7FYvuxEJRBVoJkWbxagBP1bPKTCTca4FcdVFJJc9o69RCjv8h4oKKp5FmiKs4z48uvDeA",
  "key20": "498i2Pzme5xwAhxougUinyUC9eFr5qmarYaSNBcvzEFZwPZBAPt8ro9MU76AiqiCAt5UvANBvTf78Mxuv7Ki2Fdq",
  "key21": "51setHGqn3nvgPqvAV2L1AHHrQqR4rERHpybFCuVmtU6fA4R4f6R1pMWvYRWNLmQcm2HjoonK9morhRESaGwih3w",
  "key22": "qB8D9NKcob14WuraLnWbXYcaFLrRVKj3rdBoe5Tn4sXksL9rhWSTDGq7bTJuDrhbsEENS8FBbJRXA3AbqeanL2R",
  "key23": "eupNmBEUG5pGsyyJnHDHJavDJs8679BPfutdEM9Dm9LGq297C9iHW796AEt7urgC4bCpxwAfRKQkroukS4Fs7VS",
  "key24": "5aprtaP4zA14VXae7DErgk34X9QeKqLYqn9FQ5Je2fzpQVum3B5FFz2VTst4JJ1dVNSLc6c2VzxvVZd5u6xiermP",
  "key25": "5QM2PKekNTSYtm9aU5hYyfchzagoYgNiUCZbdipmbkMFFFwxXHrFHxwq47kuFb7ZW4UDvhZ3jyfh5dZ6LdiRMfJ4",
  "key26": "3QJpUjWA1wjBHmYbyc1SHRjSRmTcPvXEi2ZYsT2YyDNMDhsT2mK4pbrUmcjDAKJkqmh5NNFqgEJBEuF8JhtSrn9d",
  "key27": "5get2LeczhSG5PHeL5mGxeJkG27ZDL7eAhdFnmBrjX34FszHL2RqJcEEbwMH6Hwyzc9JL2BsJFTDLh7TchwAWUS2",
  "key28": "3EW2cDY4yqwqjDDFNDnU6JQidu3SvwtiqX5FjEDQhEheD4bDHAgxX4GpRtABfXRAYNmHmp7S2rnWkiEmH6ZvXNEt",
  "key29": "4dAFsXzxAjP21hdzMsRsdPi9QAVopjxFgYxE8dqZuqhUckVe2WKSM7UWKmqBQe8yc8hKYi13cDEKxQDiadsN1QeZ",
  "key30": "4RBTU7yNrUM8wvtuuUTHAWgwvGvNdx2neKKfoNzwmHZGgWX6bkLmbz6e9rpcmyQsB6ivcebuUdu8cAAtRAz2bo5x",
  "key31": "3RhNPsyoW3Bk4DgpqZfNeTETG8MnsyuMFqg7XX1fMVaih5Ya186sCxwWrra5RApF8dbCDdtwnt841nTEqAj8unwx",
  "key32": "5prFJBLzkvNqLGbWMHSdCSt4Kg2SgvrfFy3xasPFm6XW65DcpYyzXyxN5Lkt8w7Ad6xPwNCLyjdoxp6tME6kiiFu",
  "key33": "5t3PiPtUG9AgmphUetjtAQGRTWohrc6E5vTQYnLgrp7aDWgWfJhR5TsV948deG2Q6pxG5uZvrDPswZ91yQE5uh2S",
  "key34": "22vRUWYA1YizAnM1MtRdnvhofMihHBFR2eS535gGTkMw6J7215CBqiiZxD5rgm8uJ6hPqLZ9ZaRuXjwrpqwnPKfx",
  "key35": "67hhEAaYzpvDrue39aHmGuAGBjJ3n4vGgNHMG5cK9NSkCnRjcc6YHfc1CWUrW7jvkzVBnK9NyyiKSpYkSe3GcPxE"
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
