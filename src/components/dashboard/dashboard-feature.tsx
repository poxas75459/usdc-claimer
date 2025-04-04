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
    "4n7cCsTbnEWjtqjo4hdjZWDq5TtnbFYrYxA8pRKL6GrjyVThEE8Bf1YDSgruFidBsoyFbvRJinuELKNdb53Hrg4u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64z55FpjFgXpNgnZsFNBWMnk7CEjZgVyEqMdFRULYutEHBY5mYPPTt8ajBAJJbdmApe9xiPwCHsSYoi3dqceqRCK",
  "key1": "VmBokVeekzyTpYitYETyCpencNGCHQdPbaEHkD8i4Lo5RWVUcD54sHeMduXjaBbwQaRgJgQh6ay8pmRkz6GfSWm",
  "key2": "4MMD4HCPioZQPe9Ycwg2Yo9SiUEQoDMpmzXCLRBG5HcPZiG11wV3GHJRQgvL8ZoT5tg8z3vLydhP96pdoHzyRYZp",
  "key3": "DdpiiqmL4Te5giEHV3p9FW5oNZdHNNAyBjm27v9drL1RCp8qoNyhK5yefBioME3wU1qWDPUChdzqjmEX1HR2Fu7",
  "key4": "2g3asvP2HYTDXSj9WVnieWEaPmbFDye8c7X8UNNcxo7CYWnYPpVfhBatbb6Ab3JfofdfzupP9GskqEeDoXjuuUcS",
  "key5": "5jg8G4WW4rGUdVZ7PGnFPEFawbmx6Z2xCrV3uTKmdXasfNcSLBFWb8Lbvn8gbbXi2MvYnCKRSkNGp4a2HpxprLkJ",
  "key6": "3Qkbq7vMXPdTB4Xt9LTUAy6KZ2biQSumhKBNeczCb2TdbKDpUNLig4ojH4muZQHpALXVnQrJhXzrNYss6Ap5oXPj",
  "key7": "5uhxEA4Brpq6Fg89FwGy1QHmnToRqcBExUPEgChWyLHCEUdrcL2JdR3M7UhiWmgSCcTwLfHUo2c7ikGUTKJ3R1hM",
  "key8": "oHRsBJSFDASfNWHmKGbFndMMdeTPwJjRqo7EQLrdBBhBiUQKm6G9nuwyQ5yiw2djjgMkydkELWfoibQ1X1NVkkK",
  "key9": "5uZnDBzbfj7QaiTLvhzwnZgBoCEbXG6d78ZkQ8VTxYGZfykTyTQ4MWdsfCGJnKqbMurvC9ajwcNopAGE9YZR4ugE",
  "key10": "2PoRLYfmgg4ew9VyZpKRkbSv1HpkVYpwuTyFQrsiGLDwaLZXR24j7JpM7MFWLwpNwmw9Rq94ifxqT8CLZGG9GrGB",
  "key11": "3qk9MxWoZXn5mH2t9QVkX6yuk6cqoforn6HxoXLW1K4xBtcEF8MpQodME8YKQWvcx1R7ZXFsKtyfwMkYU3opaV68",
  "key12": "eeLSAZp7uwbf6eTxuQiYTm7RUyB6HSz71gfeVafRuEUD16tioWA1yvGgxeuoCHx5ceF2vZh4Y3HecZRQtZKAaSK",
  "key13": "34pJo4bVoAW73j5v5emvJAatitUBa1VUTdgVvj9giBRDUownUJesBnpFhEiLXuFwDB6exYcYDvoWrvSZgqky8qrY",
  "key14": "f5UBYLMWABjPUS4Fp5TNTivTWz2nQ3z2SUFLQ9RHE7DjYXbzv7PEzM6ndSziqndWxYwSU9bcBjQwK9Aq3rUavSB",
  "key15": "5MuSepkWNFUGcusJ7P5oq52kwGdWPeNNHToyj7WGiWgroGdscyzL5LT89bgA2j9K6PGQDnkyHLixNpiJdzD8FS1t",
  "key16": "2CSwQChuo1dPrisb82DihbKTDwFyKdf4VsB4mCzES7EPWgdfUVZ44MSXMDeMJQxHUqjxG5UCA6ChKXiDpdKrWaKH",
  "key17": "25mpkaNEktCwYyQqTP1fE21dEcQNkHnSkdREVVASUJXTHoe9sRooiJNWb9eVg3CmXSqrSW4CGu7GX79VKMuva4fM",
  "key18": "4B4w7mg85TUCAgHt1kjiGnRd9xd9ZV6cQzoNQqP6QYDvakxJcMRmDQMC8CM6EFtJTwcTAKanjAGo54LnTnLvRjnZ",
  "key19": "4fTuDU5KXMcekHPC7F3UtgbR21iPaL8fKigsS2r3zfwJZkMMxE6Bqb88VD8QHegnztFC8PjiXkp2vgjcAAot7WLC",
  "key20": "2Y9d5MLwcksFt341xhx4tpbfbbWxQendB4GWq6jGj4XdhDwBKS2GmZVnJawYsEduxm3Q3XX65ZeRucmXRMtbKDGM",
  "key21": "2aSYwBeeU6bTprAdk2kg94TCBJTyYZ5dNrxz7ddjDtC9u4FpWnh7Qe1NVTBZfp7Sc8rcra4gPiwaQQLSmukiH7QC",
  "key22": "4ii1U9tSBPQKbvZ4qXxGd4FrT1sUdugYiKzCRjehbcoHcik14hb4fM4oX8eTpTWidccXqGPs74vhGHZEx4QEVZr8",
  "key23": "3YJvpHcyD12sMTLret7ovYXuVvWdAQM2UEinzoRCKEUgDrRJPJtamRfw6NNQoq5mYRQi7MBQzfEG7DBmkBhAyi4U",
  "key24": "3WqyXQBnTHeRaExVa6WqQgUCFDctDZqAqCJECbjyrY4iXDYNhv3cZUDiou2s6kRwf829SNhsq8h2PfD9HQmAjewc",
  "key25": "4xjWykxL2qqxTqm5uoF7odZd1ymc6hruK4HtXax99VxzDuG4CmC3e83bztrjKVrNShPBCno3f3PNwiSiteex2ZFc",
  "key26": "5QgMFenA7EaE85d7LdrVKent6ejdLPWgCJwevaL255vqhSidxipSYeiHGGctH6m6ebDWX9NSgZXtXWKVZ9no44tZ",
  "key27": "4fDYThcSGpamLaf6wQKUvorupEA2a5upmezzC2J5vpwSv3L8kMzj17LLbDoFC2ehXLVkbCKHKZTRm7bJQgLqADgK",
  "key28": "VceWFQLSMosKvSZxZ2d5CJ6B3AqBtxEnL4BgBECQ6vLn2hVCoxoaGsns2nTN4rWUZH8W8tjqTSsJrZgDsZq1uTt",
  "key29": "3K4nMRsB9D5RAHcdYGnkoEo8ESPZbnjwzLawwNmSgt6bRNcoxpysiCnS9UxjCBBQYJCMqNYKBTW5p17fpvSwoBW3",
  "key30": "4dNLxBYzjRz3Rfjh3FVqCeoxZ5meHm7Fajg8EXnRYiMrhes3aQHWWZQJC6q9hAXru1yMeNE8tVv3Cv65hSXgt8HT",
  "key31": "29ta9ULG5UHiC5xSASDp9KsYbT1hXvASy18MhLf8inuFScEc8egsVrgfJ2JEoF7q311qZ7AjAgGcnxPc8vBN9Q5a",
  "key32": "45BWCgqVEsBpRt4HtQpWopu5WzRasppAaB6QJHUw6A88ykRSkpQyDzuanYHUetAwqcEn9Yc5xBR8kfXcWgGFpSMZ",
  "key33": "jyTVG6EFv9eUWHVnhGmtHQqppRw5BtFn62YB8iYBUpPy6cjxW2HjRNFgyWQLHXfip7yKifUWHYcKvLeYiyXcog2",
  "key34": "9qsVF6k4aJoaoFB2HwWDrubPyTyTiXdBD6SZW3iGjd3tp15bjx9Aau9WaztFP457N8hy2aX5RP5tsfsFhxYpeEj",
  "key35": "2S3UXfdChHdPifC1CaEscXVzHWGBWadk9ZkjGZ4uBgm5tjq6tJZLPNVpbjFHnoVBjTYLKJoPfSJX2r7ovWG7LdhK",
  "key36": "2dRTwzNYnS9jdF55NNEKGbHoKcCEESzVwmDEGbGGEn4PTWn9JyDxPW8GpnzuAoazM7PZCp5DqpCC9r79aAZQyEwp",
  "key37": "24aFmtgqFCSGZ5AoMXHMzn3Cba83EokAJXrzt3bGv1HAfY7hNRbuhMT1LHw3vJD2iuZ4Mdm5yApfjyn36EByGhxM"
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
