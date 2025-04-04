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
    "2PFa8nHLcWQMaPNByp6PJifut4sb4ovNTBuRzNRmX6M5tJaTaiiREWFVNFXq4Pded9fBfoFGFTarU7nUxbBvbexS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nMPpgTsDvKhhdNTweySZBa1GZY9fhz6ooNnfCqeztJL1Wm9WV978Qp98AAfyz3oBYRcjucUG17tkw7TNVfPQDU6",
  "key1": "51YwkKgKsk2wcF2cPCaEgxtkUnGYubvB47q8pkdRd7mCpM3fHMokeBv25taLFYN1sqc6QbAvhSUwdY5YYBzyzLg1",
  "key2": "3xz75ZVST5PniKoeSdd2D7WKbM3eAsujA312xvsXDJTaamLFavH35k5KM9cpGj211xHrkpzBaukTfZMeECdU9wAo",
  "key3": "3dmU2yBWdbiUYBVWCVSfQnDLdQbcui9zKL7MgpDdBEKXFHLmjUqhdxE6dyT74a4Mzwd4HtpV2GGv3aM9pquZhjDL",
  "key4": "5KwwqEVNc4FEZZoUPtwP8V5vQHru4noZG75QzAi41UGoDissQsMe7jbyRocochQokYb9oB14Nv7czMMYbMFEuAJT",
  "key5": "bKbe6VoAmBTwdUD4vm1VPcSYyGqGSkSnwMm8tRV4SDdRHHN3E57qSvb7tYgMirciC3uC4bYdUaqM4KeAWDsYyHX",
  "key6": "4B1CDqNagTYPpxRWooHS8dWhmSUMfENUA8zqzNzrStZ5GpGRFPAFqxT64n6EnzNU4Gkb7Hee9Di54oMLbx5BH4dB",
  "key7": "4s5Hnupb18ieBVZkCGgDskpwhdijno6a5M96EeYAA7obfSTHwcDYGk9JwtHmyyWx8aTjKxden8jYwCeKMmfnSJYn",
  "key8": "54mSxW8SFHuRo2ef5VwYjNmx12P8qh8CQskwoufdZJkymnJCxFRojVay6Jw5wh4tnkj8afr3C3HFMubyq5chLRPy",
  "key9": "FTL5QduJAAkPsGt2kpJeWPHqQmFEaGQU64QQW1rUtYmjwmu7ApW7fTfGot1wEQjPbGWpwTtsFkCEjoSqwXKggjV",
  "key10": "4UsW5ozVv6K2pFFsHBmLTMrBeBZ2tbsJi2NufexZ8rFBLXBJrcN1Vd9XJNvQftRYzAaSsPWj7KsRcyjMYrgunjdg",
  "key11": "2PswjaZQQfS9R3qPy9UFE2BtNjfmg38KqaiiHVkZS86XsYXMczNuBTUW5cgqEWTZoixY1BDdYUaqAPyFF636oCTV",
  "key12": "5tgvugbrs6E7X4maavoKiDQaVdov1mCvFK5AE2eGQxWghn1PqWViL1VLBYBPFeBDeBWasgtEvw7bnZgPPxG7GEJX",
  "key13": "5xhkU5BW3b7GbKi8U8uWanejsGFTBTcmKoEWvSiyjUWVKoWLDx9DSpna8teP9VyC1GgyBPk4dsst1bLjmp38JW6E",
  "key14": "5MKvzZEFd3YLxpZTNP91uNh33hasSFTy4UN3HR1TCnG5NWFAeZ8aZC6noDK8boSVSJhLVRENGPhq3L2tAXyWwgtY",
  "key15": "2s6xcCX4HwuU1jB1EpkHfeKFiniJhCn59bGDdJ4Xxy7esnfpY4zwRvQNDwRvzTnZevLPt6SwWpF376hMtENoAmx2",
  "key16": "3eqcpP3Nbn5LWmKm2m2DapCmqc8KxP8mNtCCExYsyWi56SCNSVgQEAPWrtinijjnkdx7gcqGeJiPpemVrSwWxG8m",
  "key17": "51QXaQohXNr4phT6Ro8ky1CAgz1SAJJb9NJFXSvyGHkwubuZZx93wMB4jYmLVj6AcKRerjndRT711qBUqL9Knuhu",
  "key18": "31f16UxenFC58thKPjBFu7iqAtWDLe3dh4F4g79gZk7nnYZyYnrDrX1ypoUQ9xf6fZ7cy8L2tc4zpub9o4oD9GfB",
  "key19": "2TJkRu9uLJGVtN15nxN4feKjBnp8Rs7xEEtgNSfK2oAfxwH8x63kFpiTC7VC6nKKurYGc56izkch8fTEzx8nn3EG",
  "key20": "2NWn4uewFNJ1zbqath6BmTqpcpotxyqwwbR2LVxWbfnXxrkNWechwtkMHnCfzdKqfV7wNZ8fhaadWsoo3QY9B2NX",
  "key21": "2LKGPxiUT9RVugpBodfJEGkBnpQujeZNLoUDZ7WgYj1RWCEZnTaw4nUwHf3m7EL3cSijr9Xyr7WvNake2ecSY4zo",
  "key22": "uQCzvFXoQnuzVEXYB3GPYWsyRZPLta1pZMuYuB7Z2gD6qdjdJLmXxvCtLapUEPiYUgeexvVGHsU84T9q5PrGsBY",
  "key23": "5B7bshq6dSyj2N1zdexBwL4PTgmpUxmTuuGwQuJQJocwyhgMSuA1r72jVvANbmPGUkMaQ8CL1i25Se8MA88xy1sD",
  "key24": "5DKM3jjxrrkAnqS8JZ6Shyy9BnEEurBomLPdEbD5h4KgKQA3BRvyk7T5o99cPr9eJZDfHpKHeLxRV92BbYhwWTtq",
  "key25": "Wv1kFS7Mi6QX92LDd2stYRBc7bXhEBNJmU4vhwWxJcnfau9fNiQGMu6V5Q3UAPNGr6gANTMm8y5fbQX4BUwx9P2",
  "key26": "2KrT2537rsqN4EVgA3Fcr5QM3RNh38iLUarmT1eZfdwPX3VvxNTZDdHeUkQpX3FBkcudtq1XjHZZQZsatRYt1grK",
  "key27": "v4UhAhTJtYgdHgx6uyyVMQTLbYkMM3Z9q39J1DgkFSeLrWFNTo6QBqmVCuPydi5FAzxjz8K3xEr7YEzQiWrnK2J",
  "key28": "3k93F6Yk8p5UYUxJR3PvywNmvrJgsKfDHaiqaCKPQHx1A6sR57SdwV23uhJggTTTHgpXU9f8apPTHtkN6MD2HyYK",
  "key29": "ZKaAeZm5CfcmFPCQ5XcWDqCUW3CWnykzC6MidVXSeyP6WWEzmbS9afSBpXGyZCnFTX9ERNSxzpDA74j5yNBRhnN",
  "key30": "4DfmjN4bWZkWCE1A8dj1f4y9VmM2ohzFHrNaJX6gPFgQVNkburRzcXQ9erD952cuC5Jx7FnDNwQ1LHrhDW1M6yri",
  "key31": "4wgCZCZFA8KWceGFbB84Yqu75FH1H6CwrdAwAHZNcEELGzNmp5toUTsRdkbphNy9LJY3qNmDCVyepPz31xgeGUKk",
  "key32": "5vpmCpJwMYuoLri6XMR38amQQwVH5EGVGUHJoQqo3oGgaeFkwiKAbyqNtC2e5FWavZT8cWBNrq697dfYWEaAiAK4",
  "key33": "3dKjreUvicKHtCDbJaTAAokmC9Q5dSXNipxMF11RLGfSLR6jafDDWJ5qAm4zcfdTa3jG83EvMXebrJK7QJSBifau",
  "key34": "5NDxng2iVDFniUJ3FNpF41uc5KqH4rkFncRmzotqRPyECjbHKcBTk2NjXjXU4hAzfpHQhmVrNXgtwavgH3mZ9TEw",
  "key35": "2oSV35jiXVUgoLT4QuQnbNExbeL4skMf84NFFMty6iHRtGBwN7m5u8iJJ1WQyRmHyJ8udu5fs81vRyhJRQwQ6znR",
  "key36": "5h6p7pW5RARz9LDSGTiWTHbN1yECk8LiChJ3nXEheB15YvEErv1hyrRyBT9WWENAk2TqnG4f8dCMTCEeu9QB84hy",
  "key37": "5hKuk24gyhX5Dx6DqCzogfwUj3LDQxcwcViZvCDTfMWAQCbuhvTPYXMwFM32jV6Dt1S4XGHfiXAjE17BCwHm2Ef6"
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
