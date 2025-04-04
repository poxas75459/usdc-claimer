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
    "2BsnfuXc4hXyZksmYjXRUTDtsw15WuMqrDZXE5yddU6mh8cLt3hU7cFPgRbdFxwRhrcU5eLwLnkDKsursTyNt4y9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PwPf3CW6XhBwHBsjuNrLt22PyZU6We3siR7uJnXxWG99mPyWCF3ZWNkAozYFUq2LowV54Pii7T5V7UdFwCW1sv5",
  "key1": "5BfV2uHFQouPipgLrMnSisnvdqB5gs9CmPoVvw76UJS6MeDehmdQaB8e1v1SCoV1TC9Ay46VzVKo7Bp8eDYpCJDA",
  "key2": "bE4Zvo2JBPPadAEVPLdaRX2jxb1a1Wxyh7B2F6tbD9XnEJMP9bjQWAmTSGoSjsvVH7GpaXZQm67LSi67QtoW6H9",
  "key3": "5tPPHJa5yBedenkG2PDwzcKQFReSDQk1yF1bTq1ynJ7hrfzxeJSN3eL1RzbVrncNyfCEHTCndxrTMa2hh3An6DaZ",
  "key4": "3xJdycxAv18CF7dp8z69qPDFaUgifnjneKXRnTVevNUtDvoN4ZxfQQbn2XnQ2ioi4UMR1Y86wgJhMtMwkAdhodMR",
  "key5": "2N6pmKFMh8e2uHWYbb65GQmWGPBe258NZVtNZtaavEtHFVB5V855MT4DrqU1vMjW2dTsGdvmj6BuTmKg8wK8vRqG",
  "key6": "5gQMHeFhuUTpfzfu9Jhhgm4ZeJWqQwtVPCeuDhaoANk7Kr8hNs9hKM9R34j3fkd7aocGHhKrvA3vThbB9td6xMNQ",
  "key7": "5opwsAHdCqBnAdXZS5ffPtiLD4aJeTm1g3ztFcvtvGojWCR2KynboYmYzs6HBJbWg1JQSa69M6fftxG7n8Z4QbzF",
  "key8": "5HTdJVDneEVn1QBUhEXH8fJiXEMVZECA3GoB9ZqG5rY9AkN3mJeqqW9jnXQ16f29BeYK9ACjdarkiAdv34D4HZT4",
  "key9": "F6pLoKQ6YPCPKF9hCAHW2tDrZPNThskzMFCZxL3wWLxhDiCZPF9VneFPWi4q3p1H9kNAGDw2E8g5U9QR9EVD7Tg",
  "key10": "4moAY5fxeWbVFerDvqCnXnYycrj1S2a7or7EihF6GYvtSf4E4nn7jujWUMFmj7HExwgBu3pcLZgvmnNKms3qbAiT",
  "key11": "Wi6XmiXJ3jBhXyudNfB2CFKJ8juSsaWMxUzbRy4tX1MAFHzFQoAkm9eecHM5PuEtUhFMNoVGxubXFgWBw2LYxj5",
  "key12": "2YzNAp4KnamS4vnSNMcZ3vMLeDGii6e9dhcGzVZT1TH5JaV23G84MBr7ojq3KNKbgrA73vY4KrzBuWpb8t6muBLh",
  "key13": "2UjTrvWWC5tMCianoJ33L64HUSiUhro3mKRGZVhgGoDscic4SG9aYrvL4gNmD352qt9pLj4XPQtxYzcRAAwKB2vw",
  "key14": "3tAyvrAQe3yRUuiyzJCzZJE5isiHDkwNF6hD8mqBgHjFFrbXMzVgS1hUF1qLV3f7XTDmd1mvk1jdHEEQQcXZehF4",
  "key15": "3w6HDQ9UqLJkKiwgmT7Y1dg2Thnuu6yCwH6od7Kky24r1Wf3ALVpBdZeK9ZmGT7WGbmwT5kNVWiQd7c4HRz11oKV",
  "key16": "5tiTrnWanCNuiavPXLzEHH6CHFH3WFRAfNFFLnrMkr5C4L2iVTXnuNEcZWgsdXwvGRfkNGn3HGAXU6xqsmWurn7S",
  "key17": "3HuzXxBAgKhk3mDqg3w4TEbBMQiqGe9ycmN6MAqqiNA6mMSF1RYVfZ83KCWCe6D64XUVXKmvPPhbA5A48FpvCo1j",
  "key18": "7uAsYsLinTicPb7fJBVN9t9yBUDhhXzVxiojzoWqfSfBwEzYfshW8GExzGn15Jz7yACs1ugMYeFzXCj7PFHZBWZ",
  "key19": "mXdrVHUgxbHXnvRQSGJFkxG4gLYLvnUGXYHSu2BYBaWCq85Z5hTfEew6kwE2HmCh3Xza4isanTkaQN59nsXq2WA",
  "key20": "3cWQgvDPfi6qcFCf9Sh8UYjZBUgAFuLs19aejFu4p9N4QPgEZy9Lg5HBtQmaQ7KwEQ6MZrCiVCho7gBpA1dLgTss",
  "key21": "o1jn4eNfP9beGAU6bShAWbsWjC6xtQS8voh7AY6apedaedB2vZTEZDSXGy7uh2v32xH2Vb2LUaaJwbHUWGyYSNi",
  "key22": "4VMkSKbAdPcNo6ggBTrEbwMcheUiLq2PFUcdbvem1S9uMriaQtfNt3XAzrND3U86wcRRSRhvvT8xREDgrvxcxecL",
  "key23": "2uh3mj8tjduZ4XqEftHcdD4Apu982tLLu6SB2fT8WWCjZVmc8UjTimBhzT3gzQZmDEQZyaDpiwkWSD51JagD5QmK",
  "key24": "XHw3RXBW5p8A1StS3x9v2o6ARy1bkDeqnXymywJLpRPnKSt1g7jY4nC3cAgaA2p5HD2cF4GbxxdY3EkeKdEQHky",
  "key25": "3J2XfPCVNVGZ5xP5FfA17V2fMLDZUTStu8orizcY1WkPSJjaKYnU4iBRfbraAijzdTc7BbLtA5BHEkyXLEcN3koS",
  "key26": "67jAJsEfeBadMp8ozTC5Mi6x6Lswnguu8r3BpT9Pes6n2shaHsxQ2x9mqLzStXwN5AcLccoT2JWRGDW1D19ejxCb",
  "key27": "bPmdXhmL85j1VUjSFpfmcPDx1sgxKwRiu7Nx87dvFFz8ZPWZtAxzQonJeucyrU8WSyB9JZAYjSv33YtnLqgfNB6",
  "key28": "YL8x63Uecr18FEkjBpbKznHWtGNqVH4ti2VSbFFmdmQLxUyKDfExADSzzoaAkLBJMTDS1C5FPxw2aMzH8sQB4eb",
  "key29": "xhsrwxwbFL1JFn9WFrru6XwaAN12hHwbw4CfGAhtMnCZCdbs3VavgWgTzy9Rpy9mJ4htXgdmkzmYr2JVFVqNYHL",
  "key30": "4G8iJAiscKgPBxwhzevUQExM2Z3CpzN27wkJXmxvrQjPXWbqnq2X5FN8T6c8ykZeg2FbKBn8HKgcvvq6e7FViiAD",
  "key31": "xqwKF8EW6G35JMEpaqKmX9y8b6t6Pr9TxaRoh68qYzR4YfMawozxrXp19RRXrUKtnGxJQSPXEoYcZw1kwtM49En",
  "key32": "HujeWVymyN5bUt8foCdJPKKKqgUm5V4n6fKexbNJdBeP6pER1m4WbfEbiCZqZAo9fhT5LgG2aGvXGUf4HwRoReR",
  "key33": "4xXiYyEz1xWJnATqD8jqRqZrfDQU78LiCsRdz9yjnEXua2SQ64D9L8t67mVmx4b5bcbbmvSW8atNJhwky9HNn268",
  "key34": "2F1LToQc44xigjLpnRWoRbkYY5bjxesMTdzxYp4mEK1QiqFtoG6fBRWkoGcbaFbVTNRYcUckP4fbv8V8ZSEDkkhG",
  "key35": "2J6jhtcAYgaUvwh5Mp38tUVTRiRcKnMJ7P6a2REQnzczdyjgvu9wKjwn17hWbMDB89EDK6SUXc3cyd7mWSHZK2dh",
  "key36": "65KxidGny8J4T26wF7LBirSdmcaH4Deh7Np7a8nuLE7JSh5Ma9Fd4sxLiCidbvQ768iYZwY8uy7mU89TTRq1VFV8",
  "key37": "3sM9LLYL2spm1iVt4XYmbrSwP4FihJMrYrdhxYxArod9w7tEtqdNm2KJB2bqiZR2DvUMaYFxR8ASoYjsGhbEMG6r",
  "key38": "51h4dXHica5hbNWuUETSphkWy5eVsP6xb11pxJodTXS1W4LHDtgLbR9Utd6rwqP64QQfu6bdivW37xngd3McHt8z",
  "key39": "4Wkcs8CkdpKiYKPS1gH9YymEHFENT9rb7ev3aP5qtG8nGS88NxMMdXGgvbRmpNvr6TrjXQnG2eXGcfLfCWeUNoN2",
  "key40": "5KDVYoxWfgApg9Da3ySHXuXCU77Qw5ZYvh1GNcwZfs19SaTAG6SJf3AzkBRW3qvSaUcw4Jo8wUaty4zm4hEw8zaz"
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
