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
    "33dWm71UZFaXA3miGhstiVmuufWU2Z5KLvw9DLcDpTsCJy26c4NXs2rG4wA2K1WRSUpwEbmfNQr8UkJyV3jBVNcF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HDaF7qZcNN48AdKhrCmNBgAB2XT6XmotxHFLwSM7fBW9L1r2DLFKA7J1idMkuJU6h1TMc37DBx7PoqLyjyBEG1Z",
  "key1": "4VbVVsvvCY9U6nT5maEK8f3EGBAkXFuA9zAANqAqR77k6Qf8PXw1sgowNs7QJPvLYwDKzpXAyjsV3pZihyYfE53s",
  "key2": "aw9J5f2aztWo9Q67peroYuLH248VTaeMruceJ3v44twjQhKPtXc9mpmW4kBUSkDdtsWpsAixGMq1sd2eeFGZXB3",
  "key3": "4VcFR89impRKa21e7PvkLnoxU8MPkJmSngJyJNYykWBcbH2k1t8w7FDso7aQvPTfg8uVYUAC9B1hgXUeX6toW6zQ",
  "key4": "ZezXqcUTJNjX24vinVtTgUyDPsXfpV9Wh63NCy8Xdr67zTtvuM6rgru1sVtZsqNY4quVrT3Q2kRPTH6FSETJbZr",
  "key5": "4wnrYANzTsaEkq26JF3XatKGRUctowgkrZwMERYWgXkHHhUEGQdv5Vbj378fCHaRGAAp5NXy8MsZ4hhXEPuoRecp",
  "key6": "5o9mBjr7MGqpcSe6eLBbNqhrDggoxtsE2PGr7746KFEd3fw7yEY9mLPKpYJcmKvyogYgh2B1jSq1QTLkRisvnmWz",
  "key7": "teRTmqpES5uwjk5P4MY9eSiuCUBBMS5iw31msXoYFLywesNxQRQ2Kk28K3uCkAP1JY6ns8vJR7tZ4t4ShyFaLDt",
  "key8": "4dbiGLFyKi6DRW6wi9vUrDh1DJwMZfqhn9Kj2aXPByurKy4uw3SiyaC9n8kvh3HmfjfN7G5DmHABRP12vdc5VwgY",
  "key9": "5ZgYYoU72D5qm6Aginxe7DLvpLqkWz4kh7jMyd1eg5nviPi7ReV9YPcZrFtpP1R5EEdWK6pSqW8KWNpHoksBbqXe",
  "key10": "EfN4oqkHA3YmXsUEjnMAvKFEz8aRmmfgqZCEmk6Hz62qp6UevQbHhb6U3VBuwEcH6AyiMth6hRMtef7vzgAuXEP",
  "key11": "57PWeXPEYJnUyhWQL5zJRPxQcpg4A8EX4JW4hgSDzjyBsrr6WcSuBFBhNZXN23EFio1sjtiY7EVQmsx6LZE3C7Kg",
  "key12": "3zbTtxWsMy2txv477AEGUGzkNvTJN3Ee1jjQWy4K2LSZiJGpevKJ21dNw8JqXkxeuoFrHc41PJfxdps1btRMUuPc",
  "key13": "2d8x25gQiEAU6RNuBejajwiy72a6P9cgnHmr5Mq4RqoCP8m8j1RrD6mSreFbREkgTNWAshtesjxaVVVyiTNhJ8bP",
  "key14": "5PSRZWwCvHUTubMFPkmQWcZvNnRBv5ZwgVhrfeKUQutnfb124Y3hHHREnDjUs6WznvL72Aj3aGWza3DxTKDhGyna",
  "key15": "5dyUY4dukL7gYgK86NZWuA2oyn2WG1WqiXesiVD2ada4d4j9AXGJ2dNxXiUBJQMuFbFpe7e3i3hf2ChWPNoFBryz",
  "key16": "2KPipmXHetCHLkwnfQ7Rw1EW3XP68jMyXqCqNQ1gDpSJj8hwJL1dCx5CcGCzAFMY2zgksnzbPF3MDq4TGq2vkq2T",
  "key17": "T7M2sEurnkV9v3yZr6TXeefSSxuphAdPkGA9Q6Vg45HeFf7zA4zp1P7yabjmZEaZCJFGaSKGB9Kj1wQr5Tx69tX",
  "key18": "5RoxoPr5zGkbsZsERZxXuHtFgKXLoJ9pj4SWTZqbW2G4p2wVra7WCc6VqibVK8rvf1jWZ3EMiJWYs8XN5osuP6a2",
  "key19": "3RsRSfwo9GvCUThUR6Mu18hfjMuAbV2gLA3SgYWCR8EyA91D8VVwAc1gpbdENDbN1qrSpLQWdizWnvMdeSJ5UwjM",
  "key20": "454Ha2TJZa9QHnmoyehpnAkyuG6VJR9bDwm7JwoAhP6nxxYEtJqhpmGHmBboFddhMCYL6zTnauZFNKPBF5aVcRKT",
  "key21": "pQX7YVau86xsHje1yE5aLVCZLxqEcR5PE2PaWe9ryTjJFWQsEfZrqwogG2vTxJ5QwXUrLQZZ9D1ACTs8a1EAaQU",
  "key22": "67hbzsduuEVmYtS4BH2YeTB397WLRcZV4LAumdY6TEHRmEW4A1kKjtpRp8DDXkRqLTp8hKvCB9KR9wFeaAKLUV2d",
  "key23": "2G2cT9XjRdE1UhcU28ZSufUcfKGVP7DB5Q4uvS93X45KPxUYT45EeCgrQujBVLju9BvrJcJBjaduNcmDQ8Q6QmCL",
  "key24": "5Va3bbvVLtC67KQVgh2tPaoruzhmitsGD9k4qMuDjdDWS9j2TgyXwYFHA1DaJfdBbnPyK7bhcqdFfupeiSoyvwvj",
  "key25": "2qUYZWwZFa6KDEz1hW2gSizGEYN1NDm2Xt6LENrdRK1A3CKq6ximg1p5C683BsZmshos33r9cvftfQTB7BuiypWJ",
  "key26": "3kyDJzSCSML58Q4bpwQ75kxeC4heoBvJsieVBXomhu1TEA6jETKoVgGgtUWnGXtb8BNqvvAK9H5LdxePV1Psw83G",
  "key27": "5P8q512BFRqYoTpKivFUKovc5L15Ryyjta2DTf4UFfANKUSmmwrxzztTF4a1Xa5qeqDVd4jqi2ftjxjGjzcb5Mrf",
  "key28": "4sY6WY2zpQi4pAMXZwnkUUz7odHfF44rHF6Q4vFiMP3zXvC2cuAn1nTAkPd5v95hpPeamPcEr4LVQG5i9NVpoexm",
  "key29": "UEjRcSPJkzRdrxY6AHRf4XBvKC4xYT4Af5FHrrjeQPArqSCCDVAx6Bt4LUNTgwxm4Ch2J64sAgJvyb7UWrv2zdL",
  "key30": "3jXWici4dANF9GzSWvu9cybBLWbRMy6tXMRN53Wychdh45XJGCh7JhFTQErRKGdSZhG3NoSThYsMZFQaa3xUZ2aT",
  "key31": "5VP2NVF3R8ErAHg9LsJ2unzubxkY3GB187kPonfEwASqLBmkeXw1vmVXfZubWk4zV3LYGCyPJTyd5uqLPeQVqR1c",
  "key32": "5dCiGKnLXocJtWiH5gUb6YCGvUmrfRVmmykZU437m9cAjJXzAm1PfUMoDcQXmQifES9xRp8qbWw2qiK2EUWQx1gj",
  "key33": "4vrDnbSjRoLFyMM8zKJHFkj3pdBLZQ8Fv8Le6udCk8xr85uif7FWS7u2jrdrJhMy3s1vdnRpLqX6RqYLwPMMjw9"
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
