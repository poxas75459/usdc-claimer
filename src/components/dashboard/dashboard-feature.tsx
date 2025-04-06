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
    "3LLpLVBioCiXafCLHufMxwJ9BPqDDmGy6acvLZwUnjwHwmRtiR6dXegzN1u8TMBp58wrfMkf8ovcBJDaPhS59ie6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GcqqRwYz4t18LW5i3x46QESxLZFWbLiozkFMFVSC6qNfXhq3VB4jgiiwcDrT8obT7M3QJQhKdXGyx2GrrhpuEr7",
  "key1": "2j31ReYe3pGjZBQVJVS5G7wqfyFtMr4pqTrQUMm84991WMLahtnpTWAChweXUGgrn3ywtA7q6kfDKG3ufPwMhULd",
  "key2": "2Rnj5JDihbZC6bnjrRTTXvmYeShTpUYJtwDbZQiceyyTz5a8y51BzAaDrvpHiC7L9BN63z6wLRXnd7KzB1h5YNRk",
  "key3": "5hw8jG6sCognbFVffuNmQnTUCUPRhirgKLWQPPupWUpjGyuDLTtuEzn49dde2guV7RuLEFfrTjbSpjf8zqRjmGmH",
  "key4": "4osUfqXZopNDLQzFXyREEjdTBjDQVFMpgU27q1xwNaUQN6iCVnv6DDqoBGY5137Xjw1MuXQVVffqRqEsS9YusRdp",
  "key5": "3R8xAnCUY6BRbAeBta5kXtb7uMDuczU4MCuh96uHv8iaaxCTPXYEtS9t52wDjz3HFraGMNuV3mQKGhw8Rr3V8Bku",
  "key6": "238iooiuU52hyVD7MPhkRATwBZw7S5B7c5KYcmzTDqYk9r2RMFL6p5JuTXVgUjnBwdDTgsMbYigSQFg88asD819y",
  "key7": "51snrfzKAm4rboNcg3BDKwK7rsALP9bjQupGo4BWSDuxocfSQZvqcx25pEzXbnfqebQnHXnmsiKbtSimEuyE7KTJ",
  "key8": "egpXvYZ35tRNw9BMcFx6RBRKGtGpueMSNuTcEDFUryjcHgad2VYQojqhnqgYgZKFYzyK19tdyt2kYJH8buthhLg",
  "key9": "58ZrdCjMwaF3Ux8YHpcnviMicZgguaBaywLsFzptqixREKGEU7pHxnwgbMbkmSuhBoEQhuBdrCYyoo6bmf3ALVJ6",
  "key10": "3HjhvGos9CYTv2MtGKtnGDm9SpPCTQP6HeDt53k8LYJRnbz96ezUdRQrLat9NARSbgsptpZw23NzX424no8r1AGu",
  "key11": "2HUr1bUfgQRZon4TxaJEpCQRUvHr4NdufpkVsXdi9JbSp7uMD4Rm2XmPezgGs67VKVSMSWPwTwXpDAhPNeJ1jwZR",
  "key12": "49AHnd1e89HnR3c4XBL9UWVEPCYAxmarVwHtBUH7BnQTuiJwQjY7vBrf8L2iVhJ7wVf1YGr5qKC6B2H41116SzwZ",
  "key13": "452s4PYNtR3qLCy6TFyK7nRjt4iZJMqrqTgPSSznBvqzrNBEPQZvHeaYwVfzaW4WeyJJhayYUsnwmhDiDKqyQ88y",
  "key14": "5iz1vydHLPNGYbebpMLWxnaAXW9fepfWGEZEySeynD9YS78XiBjjgnCy4qGymUNV8TZikDR71tBsNfq6ixSEAUHZ",
  "key15": "3jY4EkzscGypuTEw3bnhoJ2RHxRjNtYUGz3fGAFJUF2jR2sQgwMTBN6jhxbt5G1fzCUsHCsZa79RxVDA96fLaS6Q",
  "key16": "3gjjZkUESsMrJfVfjstZRPtnj2F85C7jDib3cMu32sSzBi3oT5XikeBdBh1Vuz6PkHKVyyHSmW7rC2mu3vHkWwdg",
  "key17": "2iXF5Gue515GhiCRkjEVkWte8cS8CssXdD384bLn5PeBT9xBknSVqJTnqU3DDHJyAbchbxk552NLZEHusfSVtEN6",
  "key18": "56u5DMhAAd1eENWBKmRJAtmx2tYr3d1JkEeZqfFGP53ZBv2bEqokko3Shn9vA6hDYHYaswkjmPU9sruWKh3cfdF6",
  "key19": "35i4ZUg7TT9LsWfxRLiHmxBeEn8KmbaTn4ABu3BaNoeMHp6oSaDfHp2CN2ScRUUWPLU4LUez5DJD1yakFb8sLx7j",
  "key20": "RFVPsfp8sWkVdZso2JMDMGQGMES35TEEYQwwKUsgtoukeLAF4A6KsoqViivFaPfcUwis1apyaGMWKFkSxzVKDfz",
  "key21": "4WRr17sJuRmy4ZzsRACGTPMgEjezdsAwi4qidTJQoGuXzhzXy9RL9pdgqf1LZqG6zbBcoyXZrEvdBn6YfMECNdCE",
  "key22": "54585CxA2DyKWs2dJztgJjvWYe3GR78kH1Cy58CN64rza5eHR7qHTzK19GqSmdQ3yHdFpXtixx4ZQ8GJEKQYf8bN",
  "key23": "4xPpgyT4Gq6wVxNhQ4pKwPLweRGaHQEvL7AP6qG4rD5Yo8N2ekVD2qZYjJbYSZMTPLfJCdXVLQ7WD1fsVPS8eyHs",
  "key24": "43Q1iXzjTjfzYuQhYTkX8HHtRRcMj5wkbB3SCkAucbvMX7jL8myRsoCFqHD8SaSPU8oY8cMTqyQ1R78A8KHY81Uq",
  "key25": "3n8C9HiEiC4NDEbHtEuzt38YKhxCtTcYj8r7jG777SNb48hJVXs8NH8VqPiFkHeSV2LC7SWmFPsaXc2reGWpYNMx",
  "key26": "4xqFd14MkE85sAkLeURUb6qJL7tjChRAHjeHfMUXaj2VP2C3MDtQfrF5mSQ3K2w6pAfeNDoJB89FhVr3QWRWATT5",
  "key27": "4sF2YSN5zjch4e6sR1hyjzJxVemVbD7baLEJK5DC1fpdVVpyJAn6FgLs2rEt95SeRvVozXsxSp8JUXUuSDqQhEAy",
  "key28": "21RGMqBEwzHKV7TbkpnJxZdiBHymH5jb5EGGuwEYdWyWHzE8Du8Wk8Exby6PuwpnJeRubzN3cCS1DvG5d1JiAtad",
  "key29": "5uxe5zZ62ggLCFPGbxA8x4f55KNnW1Do9yFFjQjc3nXjAJHgwENeRDzdkzV5jUDDAmF5SDZG6dLCmihZNbavuHQN",
  "key30": "5P9rcawmbSvgcpVjyWXB73PHo5gcAw3n8uz5aUzzYEd8GNACdD9iKEEo9Hw7XDNkfvWrKesehnyQsHaBF9o7TEdy",
  "key31": "s6q9F2i7WXbXrP1UK3eLv6uf17v81RuRoUb7R1eRCZudjQuRzdiNdM1mZzRvWBjEtKqpiDDJfcygGn2oGtxDBhP",
  "key32": "2rVC7HBRKMgC6sx5vyB3tWfA9ERoF4oGsvxQLvm2Yxc8h8NJr21HyojwQ4SmBFQNarzsNR85YWLUQLhJ4E7jFwAa",
  "key33": "4FfxyChFeSz6gXVoZqdmxt2qMtNiCPUqwHPjwD314Rjtkjuow7pQLAqpBoq9GnFEQWhFgAJVa6P2F5AWboPw687u",
  "key34": "2xSJL1nw5wr7L5MUCbcvBkzZqs27E2oS7YqQ8tUT4ps4tuPQwzoiXmrKCC3tnP3Qhjjnvq7s9vPhGcdHHUWpdKUT",
  "key35": "5HgV1uAEck2qWqNc3nmwV4stXo8CZzgbEMD6bTXcGQ6ZufcGShQGNxBxcpcPzMUAK1R1TXt2pLdeuwsvap6iTriM",
  "key36": "4RtchGHaWh52BvB7K4TXYkwTnBaF6h9Yt7bYTeZ8wmF7dwe3aD7kL5smu8PTRWumzaa5b9K8C1J6fbtZhYjAHkWq",
  "key37": "3VhT7XJrYDtf8wYGPcgCVGYdTADXbzitwoC6AQr4MvPkzcHPKoJVsELEi2gh7oT1amZrs39MB7CbkRB8cLnMqh5S",
  "key38": "5XJ19YaQsXzJ69paFzHpWr9kdLMQGUkpozoCJ8Vhj26hfhV6P68Y4KeCip7gXk3nvacvvLA6d467XzY1bWaWSTf7",
  "key39": "4o2GzMKaLTHFqxhAZ7RHumbQVUBdr32oLeLa4ArTSQp7wapc152DXCmkwubWiEuv12AePVoGWqFzjHveH5VQRB4M",
  "key40": "33sag3qZZafPk6zTKP1AQzqkm68aoYwxnLdm1grgj13D72nvgwnFXi9k65HK1kvxRgdfYyUouyTFR5UuWS9nuyte",
  "key41": "4CaCMwqpXNHBeSS3ukfzM34rYz3xk7iK5BYNb3UchsAKBmwM5ADzjp7n7Ak8LobmbvcmCGzJchL5yH3THWdAHRJ2",
  "key42": "e82mLPJsiRiijN3myAosw7QeyptmZqwFbt14HLpSfKaJGUpiQyckEGURr4eUYQJtBowHokKVLwFwBFEwrfHsis4",
  "key43": "UJQbkCZBJwfsfYergNGuxVgn38vJRBuj1HQnTqPRapTBo1aRE5tAtbGXM1gQ6Nkw2g6Hi8WLrJTgS86N6J41Aa2",
  "key44": "63hjoGiHRTXJVvErcbSe3ySdnn8XWEXcCApsQQGrkqJUcxPZPLAFtthsnF2CFx9SvQyzZjLtyaCGUkXdHnMWQS9d",
  "key45": "PA3A2vnP7rhZtiNoe4qbv4Dk1L8WpAiqim9sL13PQ4bLNg4SHFjNKd1UGdXXS4ndz9dLhTpkdM8f371JBDwZog1",
  "key46": "67QtNzXeCYKrswWfLma728NZC6gHf2gystuL8V2oHoFWhdtyZJkTC1gUF66qfDxc9wMaLetybzzXFtXY6D9okxfM"
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
