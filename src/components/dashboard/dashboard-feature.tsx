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
    "4yH6Hn35q1ki6MxUog8Ki28phAYdNQYRFka99yh8saKdbkBUCn2m3R5m7JFCrZmnhGrGdWuu1CojSrvisZ8e4Hho"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C6HfFzSXFmodwp42FtdPpV9kVUrzoH4PTWjcmL3wAeJ5pgCikeBmeD7VqoWApV1SrGbYm1b6dbZ64Fncihvd9YE",
  "key1": "45hQgk5optSsH567pRCXSYEVnEjZsR1FqECaD2cNk968mmZsWGs9g3nLEnsjrT65E1fCAdV1zz4Rjx7aTMqRXaZ3",
  "key2": "H4ufWRaqArwaCGxRrPW6eMXWBy1kToJpzLKVSkbGjWtGzkeW6xfTUF3LAi5Dxk7q4SXzgxHSCcJrgdDsQprZnXq",
  "key3": "5e9putdqTWdzKWuqN2X2CRdvmKeWVpKMnQDMAvVzmUrLeTterduzJoio9xsWqzrsoo7UoLe2u1fjPfC7VT1k6trX",
  "key4": "3h78C4TNFmk3Jc2YyvyjwFYseimasJYen5z4Ug7PdihWHC3XDHma1kBw6CSQZPg8vzvo6pSVRXjKK5fB8JUHasEG",
  "key5": "5Q1nCpgP47pXvJMdgaKbebJkyqEttqZ1r6EcXY5LahvnBP4bhbo1y9YYM1Dw2kdumn1LBc1sAbVVj1Jsvhr4C42i",
  "key6": "5eVf6pKuxbhiV8ugPesHs55eaNhFAv4jgPHg766XAUk41CyazZDjBShwoCrbNNwtiAEFJsQMf9o6xdeDhSRTn6jJ",
  "key7": "3WaXp8DMfdHrjnPc6LWXdgzasiBCcasx1DEdgxqSYpyP7ftL5FXWG6PgKYGEJfmVWy544yZG4ZcnYEwUNRqZ7Vzu",
  "key8": "25D8bzKoGfSNwfwSuoqdS2V9vjoi67pGk84hAmkRWrqEq1mgSKfCRAXQKgNfHmiJh7SWwKrB5t9BArFEBp5wLhe3",
  "key9": "2TK1hdYDRpi26dm8i62F3AgRUez7q84Trma7rz5cz2Dcztacd3mqvCJJSTnj5XxxGEMbXKwbFVUXia2hYwJrbCD9",
  "key10": "2oScMszRoU5bvbTqKBsYuaiwLNRUAfbP7mEdyVmUTceRhLMnpft7SfMjr6R4EVvi1F7BRWvmieEcSVdLWowyCX8k",
  "key11": "5NDoS6NwMhpS7cCYCKZNmheGLZGNfx7jBToczbrVMVLoDCH32TFed5fkhcrwVtf7tnP5iYXJoE5KEAXaTRBD3q6Y",
  "key12": "3Dav4HPQCV8WizrioU1cbuQjr8vyjjqVACXSGQRCki8BmT6iDa8DdHwfhHWgiFgZxsS5c9rgd3PVLwMPz7yL4oqS",
  "key13": "48un3amUz29fM9RaVvwGmHm4uGHZLppqscHJn5kq4NynuXoC9bkmrYdEKnjCg9Kv9ZKCeqYCsY2d3dTbD8VZaTvm",
  "key14": "3uGoiHp4rs5RAGBWhAhw4kDY2KTmzdRXVTttKnXv1wT1YpkTtMWPRC6GCXvWdZbDKomEBkPGxVcBBfifKXGLiHxL",
  "key15": "4d8x85kzFCJdTL96cNJdRVFWxxbKuTyPMogQ5PngDidAGMgdCc5U5BdLTcozHnrXRyNGuimF3axFgrTExDpB3Ncu",
  "key16": "4Pw4pGnPrm6rebUt3a4ZbGxHpBdua2XN95wCMZCWFXJi2XwEXKSDsF7Hgp7fqzDzk9qB8JB5mjA1cxeTuVap3wPK",
  "key17": "juvtqZWWNh1tUJavkXjBok8jW38vWxpqrQ62yMzj1fp84VfitfTTrKrHDES1gBPmM92KoCNiDhHyYJSAbhkRJBP",
  "key18": "2j1RuaMkggPaQnW1XTnuSwHk45PjptjX4m2juQway5Yb5WvgCXC1G4q7TUzeGJ9VEsBKW8nUZ1DF6B4XZvdWMzkK",
  "key19": "2Fxb7rYseUhuahL7shRdvRn5gYnGqyspjMhvvGdb5mcyjA6TD2t32FZEBZj1NpN1B728it7sq4qrEzTbs1tJTEKx",
  "key20": "2a6TBbLT546LgKsYWGBLpKnt8a6PTNHMUzNet1MBVeJqqe3NkTDjwU4Yguoog24swCCfdT3FgpNtp7iCphKPUPJs",
  "key21": "5AQZUy9YPh8AaPrfXHzuwudkxqGanVXRe4cC19TumgTZFMvxaiBApg3nbRxri61wyVg3FkEhAkQ19fQQ3G8fhEe4",
  "key22": "3h2uH5dQfkFPiafhDvUHmT6WExetYF9r3rUMpngZ3jR9Nad527mxgas6T9wqtNSVv4n3pLgu1cxfYXzijdb1zxdA",
  "key23": "3kZo2wqRpkE46gfBbeJH41U71yEUtcGwxWE94YTpP1NG11Qn8z6X8TyGVZQpEadSahCvDeyes2ybwzUpjjV65GXe",
  "key24": "5dxgxZmLUAbMEwb5qyBDSK3GGfnQswAF7oYuyNWHJdMpUDHPjoAVvG9DEtyfrv37GcEMmqT23WTtJDGg2vrHiwpJ",
  "key25": "4zuVKaL5JnEWFBXSSngT2Wjvfv1MEdyUnLfMY6XHSAk4EWG3iwdTikVgXzqEQVY8mr71TdxQviLWR9eqK7MVWndi",
  "key26": "pvPCHQGYHYBj83jpLiocjB3gJvdjLdpLkqrJ6AKbNkrefcTktEXi5EEPfLgMqzuHFgLeXTJepa6SwKhu8q5sUh8",
  "key27": "363R1StgA27gSC6RiisTyE9raPtwoaECXUmPVm45u7EcFmZM6umUMePBqUgnv4wt2thgMfVdeSgRSgirDgukidVK",
  "key28": "3YL552ggan2Mgyi4Fp4XCrrJhZGRXUX7PNUrrFxXaSWwdxN8Xf6oxvuhv44TgroaJxDiqVKaBeEk4kEAY7jMhuM4",
  "key29": "48FFCsJB1DUrS31DzadqsFMrN59kjVSmm7fPtYc1DHJ54yi4b9ghyKQEBudLHxBo62VwqPL7oRjRPbwvXwjrU2vb",
  "key30": "2HagGto51GWAxzoH2JXTUpnKFiETqh931DUoq9tLsarPNkwRn59WBPU8LseZYMXU5LquahiAZHi85CupZYe6cGDL",
  "key31": "3nZHDHUL519ihjhVrsXDZmQ5YbcfMd629JwLxRMzNqKNV9eeFMnpDKL7jUE3ZN1PMsHt3oj6QmLYvi6G3fFuVz2h",
  "key32": "2UFjfXLrnfELPh6o6EjrEg7XMeDMDTY2bYPJ7fB2QcXGrHT2cNcVWsy6LL6bTUzvHQi55CE5g5N9AyQtyRkTGhci",
  "key33": "2kLnM6ZFdMFJzYPesP26ZtLhhUwkWbc3VkxNtqzekZYPBUuniokKrZhWiqr68m4cDh1rzqeFEp7vopN6ZJnB9Q8p",
  "key34": "5S2LsxGV1gVLRyhjdVyPhhcpK1uUNBeAZ8d9yZ9gAFaeBFmq5b92o3hoHCdpQS54wnddULhaDLaByuBsifeBU5LZ",
  "key35": "2r9wQ1VTDX8NBgzHStN6pqH1SjizjGvS9q4iZ5QiXzmKc3rtN6BWWg5aDi8NWw3SFr9qK3okU8wRZrs36SFDgaPA",
  "key36": "4N9sjyzdYQDxYkN8iSUNCSKzc8PX3exSywWCEvYGsa8xSs633KwW95ygCgjGTdVAPrfkRxV9hp2XRqg7CVXWq9jn"
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
