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
    "4TXrLgRGfNeux8XDKZ199i9VUAaXsvJcuBbrReqad4ZWd1PAFApRgAuvzYBxc7k9BF9yuyVPA3z3CwtsanqKXnE1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DWK1rEtDGYdbnfRw6F9E58vGpHyD2yRyzWFLoe6JUd31WVqBDxieSz5akswigE3PBbGZbx3kJD4yujRK3NEFSpz",
  "key1": "6jUAk83ttytc1aXf2e7t99sY1qumFLyxymbRu8Ezo2qqAU9pggdEXdteTd34YK29xY78MEFP45Tdj8uvqBBkLVQ",
  "key2": "59gDCysvEG9DaqiDakzffgvwZW5t9hDBqbdi7U7b7pTiktb6w7hnNsBDvaGQQg9b1i3G3BSzpZyKPC3ScKznpy5p",
  "key3": "rvnVBzd5MCGmNhXWNQADUXhukAUQhaofuP49qNFUzdjvydnWFBf4HZZZPN9kbm87REf4MdyuAa6YgpBVcx3YAWf",
  "key4": "5aFXYh1Zg2GEsx2bRRCPqb3oCgkDoyEKmpkPHSsH2WzNBExXCF6m5ZCLk3CFu2EQ98srcD8ANzHh8q3mSqezaG6C",
  "key5": "2nua3MZ3Rrwr9fejwYL7kNCRUZZBPXNjLDVZBiEUYkfHSwGv1Vuz4cQ36pA6iwgxuQnyzGPiY3EqstVZAeHakbM3",
  "key6": "2UBec88ogdbmbQhfXrk7C13Jh868UZmZTP17WprCSCUJKm8TvZ5ubdDUYQgkgKEgiLxYFSuXsaK8Uj1eNf2tRVE4",
  "key7": "oTJhnwmMAkzmRnbqmUwFMMX2LB8bGZ2mcqbWKHFB8FeqmrHnpd9nq1v8HbpikGZCrT1DT1qa6rhrScFCT2Dj2Cf",
  "key8": "518ggxuFuCpym1ncC9BqvqU3MRRU5NunTv7fJHgQobwzEBzVk2egnAfSvuHcCDVhiGjyRnqnHLkpw2cHK8mHEZXz",
  "key9": "kiE2bhQFDAMHUNeLZPTvLNZmW7QEZjGxBDBqoWMJSK5WtvafGvs2bfuy3B2KT4bGPzSWa7JUosRbZZjTdesoa6B",
  "key10": "V4pvLa9whngzMnyqhxcX5zUhrtLyteKtN3qd7v2yrvqWY4TJXHAxXwTuXXqDJFRBMgQpCEzsydgGkU5ifKBQQDu",
  "key11": "2kbPn7vSxn4BaxJJU5ecMPKERnv4ws5dPsuPFmwtzJCrpb4QeqN4zB2fPrpJFZZvNiXGqgrVdDYmCuwRPi3Jd3ag",
  "key12": "2h3pvLgvq7hiK3QECQdk3HkGgJsGRPE4dbiyy1BQhys8v7FvJp3asA64g4Q2nM6V8dQbgHEyq6RDqEgrQ2obfdhx",
  "key13": "3Za1AQAxkCRY5KhjHnM4Ha44MTr54q7ZPfKws68JN9nExRA6hr1SfnkxVKxte7r62oxSgYLf1UzXoaeqEKoCwrGA",
  "key14": "4T61HfztV6QH3mAbGGu1chGCtVPg5yU4fSgcsh7irchMD2yA7sYCjjiYb2QfgpYAtqE3JeKgzR2v8BcTZmRCLs4y",
  "key15": "4ZeaoyCcsm4EvygVsEqkocQrjTiJHXj5v9LgXsWwWHoJriyu5wfqNxBqoYqQ1jSqnL6dix2cG4nd4isJP9Eh5prC",
  "key16": "59Vc4sYhJMJRcbD7JGqYpiWviYvz4k1GxXae3uouvS3o74vuvEnZryrhqeKFssqcbjwX5HzxQBMrMmgcAEFKabJq",
  "key17": "6WTY48KmVpQEeiTdM2mpnn1Epn9ZhcNEMHbB7XwLvKXWhva3ouKKGKgB5JC3eTLZxnoVZum9WYW2QozJ7qi45gS",
  "key18": "3K3zrrWdgDsT6NSYEmpuPqyMkXduybdXqDfW7SrzBWxro9vibfbeMey75EbEZwSbpyaAtjFDU6vatvKjfRB241YG",
  "key19": "2GghmLowetYc9yjCT5ZFpXN4rNQqw2cyaxoFgiuSY5RigLHjY3gQ7HZwNQVzAb2jPvjWfMFKqJm7AvxD3EKWeppW",
  "key20": "3miR8SXFTX4ogmNJgL5pC2RkK6WxNcCAnku3HafTxTYwsPQ2WKwrAHZRnfmSAHAshXvZEr3nFcLTRkXbyrfrsywY",
  "key21": "2vWqe9fSvaNCpWv1es94imMzGtDbctMePkgJYwQvwidYYkmzTnadehJxdpF5vCrqsnEU1eUNF2zmgE5rKXBLAYvb",
  "key22": "34FA4WjhCkGWoC8Bqnxr1DXjPpAL82xZzeGd4yUxZK5xjiLR8CeqyhVyCDwo3PnbFX4WaxvbyxhLd7wzYLj69C8Y",
  "key23": "4g4MMS4xGBzChspzZKqA7Rv5VqTRUgLhFn8WDr3EQvBkNjXmaQm5SdkjuE14tVL2Wv21udaziqLbzHQ8wrR6f3aD",
  "key24": "5zxNPqEpmH9c7aiP4t1nrbQV5H9SMuUYWwxmLtCwh3Vgo6WsynSmdoXmxdbPDm45sNMCQ3uBMZ4NMgYm6LZJ2GjX",
  "key25": "5x8gP9JPNCGvTkpng5jpqqzS2YdEnnWBF1Mqs4nvRRBrWnKcgiCLgBS9eL8Bm4A7oCmqGrH39YB6iNi6P15imjhW",
  "key26": "4dLXK6LXmFuCpJtKNv9w4y5wFeo8mM1D51sM6fSsBAttWJxa8PzoiDE6LHEwbEgE9VSk3H8fFmWD2Qgfp364XuP3",
  "key27": "T9TohJuhDUcyPoWWUkfWeXkG1VN3sFRRqH6vGyemoVwe3qnuAd9BYDsKvQRejxQReo9vsx7ThDz8sj5NzbPTzhh",
  "key28": "2jQJTHwg7rTdsRWwTZifRuqrYoXYSFcQLDK8kKGdGUcScKFe685Zt9DyFpB75XYfoM4Jmajoha8iR8FJ1N5GcaMP",
  "key29": "4oREU6JvCX5u8QikbGwJZRNMK4Mhqaobrrnhrc6CCjZzDbhiAE7K4CHJLXfLKbJbUaPJxaKq9BkK4H9rRNLe4Z7J",
  "key30": "4vRisQYSBbeetGwksGvMws2PT7dQtJp2Ybk36tFq63VzyowZszzCpQQQrjHCm83LBmdXnZCJdVFh1nPoA8eivhi",
  "key31": "1YukXyVfEhU3FMKMhZJC2BCXwq6uDGhPPSZX9oCZfbrBSWgXksUhygAATNHg8DEA4vjCSSxhNrCYLLtkvgEFBZe",
  "key32": "3dmjofc36Ngqs1jKYLXP9YXd8HyQwTpUTE7Lodmwx7MbrYWd3bXTQFjPTEvCXzffUbC9dw1WBf5aXE25hgrqvPPd",
  "key33": "66B3sbyLCo8iwSeo5PVEvq79Sa8482wxExUJRLAab5kEoMTTPbrLk3ks377bK3MttNJD9igYXJCbABhNj3zY8G5v",
  "key34": "21P2MhwMnCyPkhKofHSEtiUFM2Z7mELSzT7446C1CFrkWYnKQ8F2nhB2Z1JqSQWS7mH8b4K3ZCGk6HXoe2CZZhr3",
  "key35": "5enwzsWCrabrcDCrXprDay2ihzxR3ZMyVhop5hV5rb9FmQ7VuKdjQyyqHiZ7iW3MmTfgrb7FNBAJccxjCZwWiexZ",
  "key36": "5tDhquFKhs5ynirykq1CdnLRmiehpx3kr3h9ZNPYTxBJ89x5p2xoSGVRvgaEGFYUDN1256Ye3offyiNY67XK1j7P",
  "key37": "5cH9A2gMhEv5EeYSYHtnQK7YnKEo8GfJrkNnas3gt5JJRqSt7ze5W7PsCTjUtQBNMXzqCxLHBLF2NHnUtXZ73CjL",
  "key38": "4vqAo9NkuDkVKQ7D66ThK16zPVZVqXy5moBbP3EhdSwewejFSU4yBfrfsTRJbpdQ2aM62stpwBqwVhnFCnQgaknt",
  "key39": "3hB76Dw2bb3cgjPk6NqNUiamN4DJb9a9dsURov6t1fN4ffB7SBtxXKMsr7p7hYpgrv3T7AVSyUmaedvxLbBXZW6W"
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
