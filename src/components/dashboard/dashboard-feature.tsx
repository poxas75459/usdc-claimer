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
    "2Q8o2jfYbwcwrcVNA5TMsJ9n9CXSJBcHMeZ3yPMKU6BjaUAh18WH2AH4daCq65TwTfmctaEFkXE8axe5Cx6rLM2R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33byj2zcdEEBCXNxENAyZBGFPjGbYKgXjgVsDSdm5r8r9wwWPr598ceVYfXjuTjfSPYJ84qXPtGSnvdcxE9MZzyn",
  "key1": "q1sSDmQSmP5Krn1WMfTJ9oQ8P7j5SKPyRVxe4GnHoirCEFP2KKo5ByarbcDT34e5RpGSmXw3M3CLEZA6fNFnaBC",
  "key2": "1Wpe4iL7WaxKvaVD3RNqJzyrQ5AWXdQaovVWyLyqtDFKEvy4sdcSnzgbfmyG7DywHcaYXy9Q6zqrNWixBohCAeq",
  "key3": "4ZQwaK3N6Diu8BjkQ6yPRpT8SXef53KYrqXtq15FEjx2sq2D7EyDhGpTDHqxdN81c8YKzUgktK8ELJjMNrZUK4o4",
  "key4": "5hvs1PMr1RLgt9cHawpLDieTZo53UvL7ihx4FkoBJXtsZmdKSKzLDyUaGTXBweEK2tpFcdU17EP44j8YUEgDTGwc",
  "key5": "xMRNRyip9yAk2T5DmToBXMTYUvuxUSH1sVRTqg64CKJsgRJubtnB3AnqtHsceaHS1tGKoUnxmXKQPbPKbW5dmAJ",
  "key6": "G8XHjzuhK5fkfbucDoMciVvropyUBnqk5FWe3hvDG6dHM9ihUQ7ckshgzsukWVYKidTLt8p99BLeYmyVCdJhjYr",
  "key7": "3k22n2KisaGNz1LVQnteFqzYfVwRjpeq7GpfUwXc7xSwJyapemaq86FiU2BUpngYsAq34ocECt5PgVrLPzUspjmn",
  "key8": "2Xkd1ZK3kuxJsfrmTJBNMCMzsbdBcPXxKq3ucdqbTriCkGXB9TwwPapu7AUPB4efqE87niRX5iJVVhRc6JD1oDUp",
  "key9": "5FcgsyCGhPAhxX9se1mjbhYFsD1a6p6yNSYBcDR4GBBUyqQgW16P8LUMoM5PVLT31Fof77VKvEMaRzNWGUuTb7s5",
  "key10": "Nmr7uoQx9EBAUxk8YxWkPJjbMKvMSfzPy7KsZ2JNkE8TUQrdUxg5m3aCHD7KtPUk1pdcTY7biWZkg3NxVWMKiFo",
  "key11": "3ZU3fB3HHySx3KKPybNuVSp2GGMvEFcbaR2RZsm4bu5uDVe8UVD7iMqywCoBTk7vPrLqTc5TBYimjBGk1MzZLQFe",
  "key12": "5X3bXQrwjez9fD8BBm88RmYCJzGS4XN9RRBo5fBwrzwshL9x7kpuJ2mUzyKCPTBiARx7h373Y2Vhr8ejPmWp57q",
  "key13": "2XzyUpGUJZFxsE8MguaKVd2Z2MQgGu5HS2NvYuTzcsPkuxwHzhdXivV4iSL9R77kQQ5r7h2pdJCEdXWdMNc8SnGW",
  "key14": "5toNN9ERBntJkkkHr4e8Xjg2oAs2swHGdfa3Ungy5TmDt7is1As75n1aK5CnisbXThhPoaVP8YoDrQjSTEaEqEi1",
  "key15": "3oLnQPguV335KNZH95PKxnLs2GnXNj7viJ2rhHPkyfKPia6y4Q2Wd57ogTTLrx31jBJ8bVdgRPEZ2VhKrouguZeW",
  "key16": "29Qk8Tbu6amFpLeWiyz8dmEhG8nJLLjfo3yn4fu8LzdhwhRxHg1Fp3iyDCiHUDmVFzUrZaECGkZrSJ95USgXwWNR",
  "key17": "5KV6kbiQCdywZqCkEEHS6LkL6NnUbk4stMbJbCbbcKmyRcbQZRGb7UsRh2yf7UX98zPcA5AhJJfTv5TzLveBzqct",
  "key18": "tm9wgZXzhDmFf2tiDUMoMNgJGEtHoFo7CvC6JbSbWomYt818Vz6Y8GmoPrmumLXZf8TTXDDLNseNEqCPWNq3SAH",
  "key19": "5AMRQ63EeqhGSwLcKUc5ifSDGVimJMpezpD5jWzfNTveQXnez9giWHZAHBSymJNbP7DeRDKshp2QqkH39WCQxCy1",
  "key20": "5V7Sftmq2dnkw4hsnEuVJBiRBEPeQ2xsgbmmK6gxWNaDTeaGtnzYEmieRHe4Xn37jViKTqHiNeMxPyyfweXfaBCT",
  "key21": "UtusYX7fMjMQeHKn3xyZMgxprbyz9prS7DKnzf1FNp1jUXTruDtKMNAGqQrTvMbpkingL9urVGcLBBUcEiEBg9c",
  "key22": "5RCaAFWg74TSCj96nc1aZKfomkgHcXgxos5BhDPq52coEent2wvpFZENzgfErHjdJw6Bb2JUSfka2Nb5qhibL2Zy",
  "key23": "3sQs5S9qAPQa8mFtezCBBi3RYN9VJPu12arWS8DKSt8yBmJmkRyFGhk9nexxk2TYgSV1R4s79g9D4EJw6s7gvTwH",
  "key24": "53Y7FWy4tM2bcnnALJCqEZYP3CQ4S3XkztkAZfbTE16zdwuo5H38VnGD6KoxYUobU5q8zNQuwB5dpLpydERMFr9u",
  "key25": "2ZLP4Pcn1mzk3T55wts4yPiohWabeBtAKdckvryoitYFUQ5W3ei4iawYmLuFAAgresTTsXp1asR2ZaaSuFe29cnL",
  "key26": "WZPdHirhGGToJjCFBYQJFiUizyLcQ4bJYBsJoXQJoH2MGkVRua2zR2Aui1DVgSPtpMLABAAP2knshhNcL7X15PT",
  "key27": "2JDQF2RCtk7MhXVr6SxGCrXXsi9UZU51yHGErq3krHmzFhoUfzRkwgMn6AiDSFF7oeJTSxx1zsx2w2zufRjVkGqu",
  "key28": "2Ye4FNKPopUGLQ2S3Cs8G4bPACEP573wBkP5rvskoSuqn6QnVynhR3YcVGvCudvnwgRbLNa4Qqza436pUCdThYMq",
  "key29": "2DQVkKSpYhhJecTXKrWJ1W8gGpWL7q4cLr4JADjye3jKT1umQeM4tjvhXLqnTvAHUHXNWgGwigAZDXdxZNAdwVgf",
  "key30": "485H7SnPpiE6a4dFqLgWwiQwkdoTjnBz9Pfn2hND55YEb7z2Abhqyb9AcV7ue5ebRVbKJXaDhUSsYFEUwL9o6dkU",
  "key31": "4AQ3bWZuUYJeHQVdounHc1UHtfD2bbNN1Yf719MavdVCrSQHeALD55S8gshysNszHCtzv9PfLUXJUaYsfo4J9Rtx",
  "key32": "56XBjCrNz8fA614CeQeWVCWy7vHaPMKBEiJ5RZ7iqAey7x3TvwE9zvuM9A5XkPWBjWCzCf1ZAcCCFvK99iYZHYx1",
  "key33": "4ECJdfKrB9RK9znwuFsz7FVQHiReCNiMt5MK3ETe9pKxJ3SnMj5bpkuctwxxvSiasraKgBVTFANJGXZL2Ns9sLV"
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
