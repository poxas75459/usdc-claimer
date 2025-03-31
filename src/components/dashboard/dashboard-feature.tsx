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
    "4R5PvhbPGSjxVV9HT2J1t9QhvWwG9oN2H3GPM5SwWj3GKMwG9SaiE9edEvhKSmZoKTTxVb9fA3qgF7VeosGTfe9a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4boUh4GARLmEapcQeMPXgt86idLncNfDqVnCi9sCT7HAGn96wN6JggkdwWssvx5Hu7DBdmu8csKjzLEyXvzpFTGi",
  "key1": "3pvfCfK186afPK3FVMEW5uvkygEFgGwma1oeJFpqrB1UtkGdNzDUyMLzwNjXzFnnz9xEJo8PqjcymtFA6as2RuCC",
  "key2": "5SecUeBMmZsVy3xH139iYgoyhTkmsD5h3HzjQz9q4UePBg497ofCQaqcjifs95pa7TKGrtS14q5SZeoffD7jJo61",
  "key3": "44PxZswm8YVH5NqYi3smpGLYcem3jKYEJ8uLfiS4fuBKvnYyBDvaCppjjEeDtrjxij3NaaTyzqirRsq5sP4HdyyJ",
  "key4": "4pF9JZYax5iHmFjkzy2yA99PiJrDnBBuHYGeSVcqMXdRUyoR4KE3SpDc29iKbLDVLkn1aPSqjNBjtJ17t1gGy8jX",
  "key5": "3afQNa43cHk1WWjWR2q7zFiWYPk1EBQsNBWpyhPt2EZNGWHWVqBwz3RqRxbTUtPbmoy7PjXoB9RzApJHFZDTpp98",
  "key6": "4RrtDeqibVrreFMTCQq3J5ErPPZNhNrN3RAfZvJt6UmCb6tZfXnsWcW9Uu6V1E4tKLkb8WcYSbeYKnsjJ6sEY9Rg",
  "key7": "4oTK6Aqhgr2KPtcshT5cgHU7UmMazKxkjZtca7hFSs7a8c8YtMZUPQzr1Wvce34BsSxbBcmKA6UnQwdkDX6N2vne",
  "key8": "4VePsTbGKS2unHfk22B5iHvWW7ecwywRP6gC7YG2GfYScEY7pmMRtphdnfn2pnz9SfB1PXZK9QEoqeJYNLU1HXTf",
  "key9": "2WVLpRXfkBNRvjWSkoD5xBDA5pyCvXkQ4edmDkLjRufDjvcAzETsAWcNvk4JCmMoaNeRLyQATe4WYi95VkjCqjeD",
  "key10": "3sQ3hxEsK8ZvAN55M9dPpXNRRN6c8jEzJwsBA7mASYfsMkWhxUHgLfmafHGYrUSG5pxP9UcXmWzUYL4ZYPsJKjD",
  "key11": "3BaGhqTDpssWy5Xfs1tSpgtPfJuRXoAAKiMPmi6PVzY8xxfJp3evsfZ1czsy2W9fADTxV1KeSXoF2p2NHbJKJ7nj",
  "key12": "3FQ1fK65HG2xNvs4PCCbM6MX6BHkFNbA6Mnb3HybARPbTLXCrrS53KBxrPoy3Ze7wtugdih5cYZMGByaFsWqfyp9",
  "key13": "4e8FhA2eAGprsn6hr37kNkrJeranXsr2ztgVpfsHWjMGLf6GN5oaJD4BHYDSL4Spq71tggjkSDcVXmLDcicap6Kw",
  "key14": "4H1erA6T67Ptv9R9W1PenCRmSuy5FKYaXUCVaBkV2yZEWc7ZjV7V4UwNyVvTQ7t9DPV7m45DmoDBLPvpQaF42gS9",
  "key15": "4YZWirvQWfUERcRdGf992EV3KuqVS2gZKkZxeFRNPsGsh8rKmbqFvLWws1LWckM5vXPYVi6f73RCjLY8z72GAqkJ",
  "key16": "2LwmzrL3gs1Huh6upxYbjHJk3P6pjtzet1bsVHHGVUnNtd7muNyAxxiposhXqdnrzCGg838f4A9RxEwHX83nL5JF",
  "key17": "4c5bZrkDbdbMjgyi5nXS6pwhjr31AJEii6rdLrNyABtapchBpiwYDhsGn2SF7wbJF9aebGpxwhwhHAyAiKmBsXkN",
  "key18": "61K8WYpDhkN1QPRsriBRFY8jPWZG9iXKknkvFzQjtF1LwSd5Afv3XLcxHFpcrmuKFCUjfVpvVFLChXMtiHxsEbm8",
  "key19": "25S9BN4CczfLtZvE2Za19BSBAJJSTrNHceAMgCgyZZtqgPQD9JsGiakR2PzBh64QCuSQ5qXVSNg4euDHBFUwqAXM",
  "key20": "4RQXaM9V3wfTJ7LcnVjte8DndhGJfAdKaLbpH6B9ZAQdUY576NJ1jTHa3rTzsR32VxgLXM8QhRuaBAQe4qpQsDTi",
  "key21": "64tABWgr27haAyuNXAodMzJ9m3vcnZEqUAzdMu8LurjASVCPeQwmQmAzWSbziwFFeyBaAAoQGHDtuzqRr93upV2n",
  "key22": "2t4q4AhbdHGashgRf9ca33GudKo5JqwJVUMafCUUVLxzbXTaU8isz3dMU4JSNgFVTuGa1pvyysc5BkypyA4HcEYp",
  "key23": "34Ckigj2e71z4xTqb3X7bLUSMHZzgWYwh1dTSiVdsZPxRv8AvpFPS15BKDPUiUUKW7BJuQVN63zmVF4FaD711V9e",
  "key24": "2ptALCK7U4Rs9bZZw4C5tVJStg19WqJwMhiuVJfBAajAfdC4BdsFAHw5YLtzxNHwyD7Wkg771TUAwW4qynFNm7sZ",
  "key25": "4FHkyfQYNvPZ9kZqn2c9myaPv8EtDfGVLRxjnJptuzBd9zLRmv7g9wEW75CG4cDHgPoQGTpEnLgodzCrpPCHwbPw",
  "key26": "62CtguNDZH1Krfrh2PHYCnWTenESCZwG3XQ3pmE3pdWg1REPErzKhGBvauhfmNwvWj5WKkug5tGwUNtxJNQkHfDZ",
  "key27": "2n5n5KKEH2TzcJz8pYmA2iWvERwR3m792Geex6YuRTTV6ci7EkEnN4o98ugNbzWiqaqwGg2rDmsWHyqfB7nCTskr",
  "key28": "4C28KPvomb4D2wkoWfRWYTQ54x9EPuSbiLPduD4yUkPS4pUoNTLvQvheQbGPhDRnEGvGCcwT5Ab9YQrfjmoGyFRT",
  "key29": "5QcfAuaBAvYfKpLLBZrrinYSphAb5SZd8888z7f9UJ6eo4aZKsqNBrVQhVbWc9KrQUenbwMrShyYAgb5tS5wR4ni",
  "key30": "3Muim51FbAriPbPvetmddK7k2rtmrf9Gs4xafroDGH4tVV7wottD36CzdsUjqPhTk86StvANtqfF56DtPATEEM1j",
  "key31": "5282XTXaeY4hHgwKmemqoARmGmeC1RCVEHc6kmhT5XfWZdvocdDDYxvP3HgjHrwRoueNdmeGYzi9kbigY4N2piEq",
  "key32": "3qAgAUHsBSgEkA3DDDCq2myYbfLm4DX5DizEyBm2duz8EhmDxyYeK3AAkGE1YEXsYMUeSm91eRb3XzSg2hGXBncQ",
  "key33": "2cPMAPfKG2tVgQhAZkuzd7otAPhC29wC3WocwuBZg6JGZ3dJ8cVbEySm4RXJKEpx3E3XrygkTdk5s912ZPxxtxZY",
  "key34": "QQCVZAiMiZ8AWqsHBFxj2XdxKHDyVpDimXBkCLYtBpLaZC6WExNvwzeKTpEVbfqgd1ZkpT4j9ekvm5bfQrcEBsg",
  "key35": "4RHUpXLvuUnYbrrYuG1Mqu5FNaGndntmkFEvoRDEMvpf98pexzQkmwWjHohszCov4r2wCs2o8ErqLBpf61qAmUaB",
  "key36": "2BHRfyhe5yNvfcoFnnian4HywBdB1jtyhP2ALMAC1t7fyiHomgPWrSbm3vu5EAoRJWVvyq95cyh12ApCoNbjXmf4",
  "key37": "tEuNuAKbVQfKiPe6iPDUn9MRGtTkmNGR76b2LGSZq4xFZG6GmjKzftvBbV5ns8afpFgSXsyHyQS5fhRawbKsBKm",
  "key38": "2PpH6GFt5NTbGPqM9GdySSXCSP6HdPhw3ZWtffGJpd5rcjrgn7M6PPoMViHGzTNAmv78Jq4V6dtL7Msehrr6Boo2"
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
