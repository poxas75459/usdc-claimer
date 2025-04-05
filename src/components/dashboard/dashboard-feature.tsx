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
    "5nYgVqRsQaBzvKAUf1QceNSqSmGDxPurpfpR1nsHKzXigiNvTFiAj3NDi9FPEB3gHeNDfcWBrQVYtECoUDUJ1rq3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62etDN1CkCGfr2VUAMtPGyZtvLMywQyzYQm9Jp2dKi8UAdcns9rQPWM66c6d3kSaAXqND88MAnELpJNZG993PoqW",
  "key1": "5MPeyK9wNhRZRYBf5Hfho5Dt52NzrMdiDDMPChQHLqAkK8sW58spxryman9WcCEzJRjUQnhYit72HWMdyimpqcca",
  "key2": "2fEo5qer35jeVeZ5ppTkAhpWY6CLy2MV61xWGhrCYFc7ggGYmXXJCrJpSnZfH66LbdS1jsY1jrrXKZTPLMnNCWET",
  "key3": "5JLJ3reXEh72w18Uzhq5Jk97aLHEhczUjUNZAPrL9Pc8fbsgomnXmdG5WqwG3HtV68Z72ssRTCCTFZYR9PKNQeRk",
  "key4": "4yJSBuMg9TcD1BW8z5b273EPZVYcRq66vyNjFV22ecrrqxx9qQPW3bkh62WUC1WgkHgq7sYMP65eQcmbeJWpsB2x",
  "key5": "5YahDjZTDXgf6o9dygsbn8TWikyHpj9ZFexC3F7nRbHKtKtRXGV1LVeULYMcqMuZGYypcvF8nRZFnB21cCDBkiNr",
  "key6": "2XHoihPzXBuSX2G5RcdCYv8FvQXsUX1q7LwRrUwLX1kx1eeTHpT4HxYvPCcCQ4xz5Rv57zvnfCCdCsuZHyGVyF2E",
  "key7": "2bPGn7jsdaWed62T21hTHbc4THa8q7ZiJwUtqXXFFZMcfCSPWcStH3uEX7NW6DfuXT5ZzCuvPiY7C71G3PJGUUNx",
  "key8": "4WDEnFp8ZRDYtehVVNGRNXUHLzQR9aNAVbz9sSaFGP6yMcPYYpcaj2Zgz4M6ojgyL4Xr4QTQ8piJkGyHJPrm9x5j",
  "key9": "549wvM2ECAHq3wXYuE78CrsZkxmtV25YeSt8nk7FiiUb19wgVFKigRkqQbNL5bvt6K6Lr7tdNkHwczRAeHerh3Pk",
  "key10": "2ZNrb3qt1crsngAJ6Kd5aMeSba9X4bUvqFzN4Q3LNzodGc99iGbzehDxt1LJupZHQS8CTpmYNEFdZKPtHP2aiq8h",
  "key11": "4CVFgzgBMAbDUrSvPNuJobeHosfevtjJooFrPmfS1oCJ9fU9wEn2PTHNnrSKa46WxWa6WjFV7v4eBC386tr8Pa1c",
  "key12": "3LmvTxyoKu8UBBF9PanrtdpM22Nyyxu1J7ff6YV1vs3e5rX9wJZS9DLCLZ4nCVv1wiyZPXYuT9brFqAsUHMyxKJW",
  "key13": "4h3QMKBVMaS23CVj3yd6jnmwJwcPNDLgFhGVactXnHBWZSKezTYb2oKAhoMAkA3ATVfPhStk7LWLFM4LT2f21v3e",
  "key14": "64BcK39gXWJQdgjP1C41QYUQCjqdFJUQbSz4cxpATvoDQqK2vijRsg5yn2kaMwGL5TdVvhfQHwodp3j6zmsRF2WF",
  "key15": "5inQnSqtHQmNkxhwoEvtfmPvJBYSyYCiYA7XRLx3sa6nVBMKSiPez98nvXYnVLyzEUxXuKB9EfisiYxRfQC3yhiR",
  "key16": "596zu2XzYSQjoiUUPV73TNWX7yRZm1Bo3rWQn7A6SMo5Cgh54PWyQLfvSTcmkwDkhAc3aC9AMsswamjpZ41taWc2",
  "key17": "3Rj87hW3nV6kFT5CvuayT46imJzoNACST7ZauHZSF3tvEwhHinXQrxNpJLVXJKG2sfhLjt8E6JgU9wjxFhzTafQn",
  "key18": "3U86BBHe7woPVZiQPHL6PNWyS1xUNPwfWN7JzwRSVk9SNDuB158WeDpVG8jZmKoTAKx4oPVx9UVkCcSCAfPikHxa",
  "key19": "5xguvfqPnxZpfu1RkvWAQ3PRkuMrDmVNe7e21wJGkgRo4xhfk5oFGtrvujAmAKPQxPG56AeFm6erAkRAufuBt4zs",
  "key20": "3xaeoLjkPBqZgVvzJPoBzYYiPM3B7T5vGhRct2ZavgDEexinahccMTd2jMbFmLwyBDUr7juuTtzGWRDCZ7mNxJND",
  "key21": "5gRKxpyA676MUrRRiZU4No9AW8wMiXsYFqAGYTYQtXQe6B4APZSpngd1NXQg7uNTGNznJNTq9tSQ6zgbkSqjWjE8",
  "key22": "4VsiuP78Qfc37FS5qv35ccRxQC3UMSnQ8dQQXfH4XRrinmE3XHFJKNf1x2ghBPZdSQMdicR3m7Mo5D9Egw94A8dg",
  "key23": "2BBSRmWxBw17qo4zz3DKSHRGU6KkbZrGU1Ce4CwH8t3b7okZZEAgkuNGrcNQUofQkqEXXw93zS57BqQgLKFZME55",
  "key24": "637X2KeNHCPaUCcwYWG89H583aPRqRHFaTdTjh8NexE64mVdBjkZMnD45GVwjj17op8e9HHgvgJySkwfqxrQSp39",
  "key25": "58o7Uh3mzbuYqpgm5VNbqnS3EPjdqDCQ48JYSzz1zX9YgfgBcdhpDWjZiywScbj7gabxzWtuUVgRaPhRBt58QCba",
  "key26": "3aFpprdfpS7dAVvQtuBpBzA6FHxj5nL8LWNmUQVGbYPwgVgXbKg9Bm54BfeVoxurNkqFNq5mJS2HkUmSCKRnL6av",
  "key27": "52ChB3YWrP4oFXwQbcyXd8vKVm9mBuxdUsksLmNwqnYzo8oXwTgekCjNSxLHW34JPYDa5MBzL9XY9a2JamBP4y7w",
  "key28": "2DdU3b8ud9szqX7c4vuqUM7xXfBJ1Gejj7u2Duih9dMjg3vkyVaTi65iHCA6P94yYftqVTRwNw9Uk8oTwf9s5BLz",
  "key29": "5a8fAUxVcLhNpvki77LgopadQdz8eWheN2VraJc1pz6LM66BWzGKWbDrAcyVTJjHGDXAycSgHD2N7HzGBzgcNiJa",
  "key30": "4FVUfWhHfN9Sp1n1Qw3pvF1ZkygUW4haHd2vubGgQdLkEnHAPKDP41GSRTipozTDZLGntk5jaDniqD9HPb8N8ueb",
  "key31": "qm1cHcfGJj4rRjWeQr1HEhYAunj9BKQpzn2EvLXnJwPKuid6MabbPLeTXjEV15uz4dgUUoBdLhC9hPDN8Zm43FM",
  "key32": "2UqmtVaLE67oLH1XxWVTHtNNfGrLYRsUkcrixPTopWzVdzvoZx3vECksDLNteUsuhHXq2KmpyXpeoTSrzKDbFhVz",
  "key33": "RDFSxBMte7FLBz76t3V1LbXPEbUVgbuiuBwVySEFR3qFx6bDHitsGo2mY1b14fJ8ue6qZAX63UrsqSTE7jq8fMv",
  "key34": "814wetUXK5CDCFdPCqznqYkYpS1nZkMxjCheLgsTxZvXWuRV2fo1MEc5ubuPpwGPAx2WnPLACfZrMr2yRrBxv6J",
  "key35": "5aEcK5RsswjMDfBRhGWCCCtCvfespLUmKJFKfG56ahgRnXFViWJ8GMTiS9cUPidjXH9u2yzoEUUr5iHCxNzDVtSK",
  "key36": "4T84HpmNog6PBvcLLi77wKdjM2LbaPKojNgNoxYi4RVBQ3nrdkSDPu5Tg2zw1UMGNc8X88PhX7PmGtZ7hbAR9ctw",
  "key37": "6DLP8CBv7oNQdgwVANCBeR8wr6SXkFx2SkSBFccoxXfG7n4SHCPWBoPANJDuMZLM4bm6raf9jS57oRS9zn256oM",
  "key38": "3TKaFHEWBFv1u1t8iG3h9L7eNjkg23zWcVugS8KAdjPVaExNaBj1Xn8Xr5ftzBg6hdBTGzRCy7uLcpufjDNDCJYt",
  "key39": "4VYTpwDu66GtyepVffoxgqFwPfi1K9Jt7qXGe39NHReDCaDCjTqzeHhcLoamnSkb8KcjW2gkLn38s4qEiUH8aaHs",
  "key40": "3QZVyDRPQ2J4qJhXxonvjcXkx97yrGQmMXFsvuVXtRmHEnKUpM9PyUMnLfjjdMyYusWGMCt5kAXSRFN1cuSUTrwx",
  "key41": "4R8P4YT3EGHd93WZAHMxxSCKqw1jctkeF8iCj4rjUJmvfgSPiLADpmNUx3BYvsYqb5gKtU4y3QLdTSzNsFvHHBLJ"
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
