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
    "5nCR2X5WSVzYAQFUBRwnzV6x8TrgmTNGweCNT4nKc3RzzJ6kVxBPHhVmUkQuWqCqPbPe4oz2JQuvyRj7Rn284s2F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48fgPn6oDHVzeE87g4o9VMzrPHaGTNZcoV8p6fqDqX1LGYrWD1tdfgvEb6mxHmBPvLL9L3oU4RbJMMByP3i2y3SS",
  "key1": "4gG5sdtS8gafPSS9b92rL7LyMfbDDoUnhmC6XNaNn9XikXregHNi1dUsAauEAW24HBVQKRPAbhSsgJYyFLCygeBa",
  "key2": "4nMChr51toqDmB6bbR9Yrat71FCeQVPP7DLtjqdvWaDdngmsTQ152CWZ7nY67gForALqftN6H5cRxXkLWLeVxCiT",
  "key3": "4Thn1nbVepmbECCn45AxdgHe4DZ5kXAcwv3MFMhfNZ28beXBqahXDw8ENDHXYB3mX4gtYv2Ccw35WrFxytpCKENE",
  "key4": "4VKnYrb4V1Esp8A8fqBbmcY3oeYVzB33uzRS3rQTnfoT1DSQQMR5T5uVr6WdH8hpdLdYsCZjwJVNUcdvnP9rC1Ub",
  "key5": "3KkYHN1q4uQc89BWUC8cwfSD3BfsYTNzUyGhjxqGE32aFhmnuVByZLu8ZYxcXZAS4WFE8irvTA3Uf22Nxu824jKp",
  "key6": "37G26bQySVoHEb2uquUXtxyZXXWPX7fsPa9of42r6U7X6nSH5Yp8CvaDeDqjpRDToYq55QqhrAr6kCkkvGpqKtCo",
  "key7": "5zCQX7NMxFuPuiYjetFBrrzMS8gmzcn6ohyx6ZPePAaqnrMtZ2btHYJtB6bJLDHDuWeCac2ubJVtPrKhyU5Hwymy",
  "key8": "2XW3urjJm7e1yXq7pyKLCSaNwGZf2RQMBrv277mcJ5xNKbzrSTW6oFtdjhLGcmAx4XMddyDgYEgnReYPPr6zQfRf",
  "key9": "h9bAmu32acAjKXnkmQzT1fAnhnjx5LrH7LkYKtYDeyUUiaeizHASi6sDWrtu86jRwPQE6Ewwjb5s7qVtLjHzNdy",
  "key10": "3Km21RNQTcMm8QfEAGFEgby4hYAPjnLxP3gVvpftTVC2CxviPfsYZHuakV9pYTb9G4yZ2CPYrTKPaEEXswmdkWyJ",
  "key11": "22efNJbXEjpuuudfydRZqqY3FykLWsmoTjEYyTtG7zDmXS5MujeUg6APnUGhm5QV9NpXvT29P21pFMeTVCYdhrrp",
  "key12": "629ByHc8MQv9jCFk9cwMtfga2M7f1U1MWrNASnHfWbdmnaZWi9EYQpVbP4UeVp71rT2bjwwrvmcasTpfbxwHGgD4",
  "key13": "2iyEYGEgb8UPHsBJnPWfFtDdKmXL98uX6tdX1KBCYCNbehyQXxiwawFNGzn8Q4x4UAu289Z2ike1uPzBztA8euxV",
  "key14": "5gg5exJLwsQGcoAng9HeTCRCyf9m9xLVJTDCC5gbTqkkBWZ8Z4ZdGdJRrtwkF4zvhWHN8iJQbt9RPo4HXzLsmZxx",
  "key15": "5rQVyZvBKrDDDnVcfEBohFVRpeX5c114iRiWNtZKPAiAQSscaQ9YVaKgn3GBYQp5hMtkjWLURh6Epe4uHzTxagG9",
  "key16": "5DXHGq62mVnHiWUWZQRV8nsaBEWckePqGsQipSzjftHd6LkZzEYCqWqTYWwiFUwRHnbky34vs61SbrjYGDwLuYqV",
  "key17": "t4SpuQXrvXCthdbmSTBd7GLG9jb5XaKGxFSRMX9eiJVBqxMAbJmXjVspXWkE2PbWhFNez6jYGSTtgDNUKneeiPY",
  "key18": "36CFzUXWzk1fNv6CHi9ezsjmvn2B8CEYES2LDFq9zdGGrwnChFwFUDrKudA2n5usRtUUuKVkc8NJZ1RQs1ANtqts",
  "key19": "4bUfy433T3dei5gVJCWuQk8nozeL5mhBCuVakLfX77KNrGD6GazJQjyq4aZ1kMaWoGwLtp49FG89DudDsjnH4Nq1",
  "key20": "GmXcNuXQKBbeDPbZbwt6k2DKQ5jHb2wpoGhqhj1nHqPWNUxt8A9LEC4DHXHnjXvTEr3F9ZgDHLLQbER44xv3ouQ",
  "key21": "5iBsSZpfY15NazAidWSPURjxxrEvcv9J4uRFuvJ81hr9qumRV3hY3vVxM31wh1SJ7s45m6hFemYXGfHYcidoLZsB",
  "key22": "2oKf2BSH8gN7An93PhdzS4aP4gC8bxGNUb7ixjdFZUUcvHmJ4yUeLJkgb9XCduHopDDXgtkdjNiJZVSQza1ksC49",
  "key23": "Fmdaek8PRkP5z6eiVTSwr86d14Qf115iW7vfx9ak9eUVJhvnDfM6xWfdosryaMk4XA1xvdyHefwHhCbdN787brW",
  "key24": "37ZcpnWV2dAvnUYCCFEJLv91pGrKYfTuDb9c4jPpnsEUsMKnnVNPcKnHq4W7HasDz139q1EDrku9mjHWxLrgpaiD",
  "key25": "5kzE9V9zK5sCsUW1g26o5KpkpfWH6mUem5nmno1ksAcfXHSnKm1uVNTeb2y87zRHT3HBzFJfPuLNaXhtpA3w8mnt",
  "key26": "43cgKVCWk1cHKkozZWim73QdEAiKTZKiMZHuRMnsgNrV9Ee3Cxfm3GkRLTbLkNfcPeuCP9H3wysfNECR8sYHshis",
  "key27": "2wGxq6VJHqq3gELuY8mbvQp8VB6AQP7hSH3hekKDYYXqaBpag2qRL54X16hDsWkTEKu7QTq8mRz2mbgL73zL9sic",
  "key28": "2G71JjGcAYmoE8ws92u6KDuh9jgMKy9vSCsrsvX8gnweX6Hs5CwfyFkiVHj9vhaJyCoCqLjFiBehDCWXSXK7gkup",
  "key29": "5iWbwok2eHVr8yPQ25SVP7STrauj1KTm9trxHGjsD89ncuLFGpVZmVbZPinvrL5o1rg3AFquyNuJnRsi167EZKmj",
  "key30": "4rAj7aQqddAXfBMBKPSxCxXPT2skTwx3K8dD1GgxJdJ7UC7JNdLoVnq5yPNvDaxWwt7PhFdEVBGW5tuvymhZSHm6",
  "key31": "4DEnsqw4gFkF55Kt2WamunJGg9s7mnGuQoZ3uDrmzgHBFprBbmMhdkKASjmk4vF9cdRkbaSkDYHddyhnVVBHzZEe",
  "key32": "2kqXCPLB2oFqLQmGy4tCXoP6URd2TAA6reCGQazdcoUpUiZorRp8swDvVV6nri8V2ZWrGSAQZdKPGFtFTvGU7J2X",
  "key33": "3QTdysuXxb5qsRVnbQv31fEEvEaXJijnhLpW21W1HTs7aLfdGyEn26YyqruejjqS8adodv8ggYeptnsMozJRvYMK",
  "key34": "4oD1gBsCocJ7vqvavNtLeEsXnAEpUNPS3YWFbSBgHHG4yyrjdQjaum1gzykahKSfuoDLPApahAqxv5vCF8g5hxth",
  "key35": "2w3TnCSBCr6zMjWKTQDxY6WYueT9nr2zS2JuVz92ZkV4BGHG5PzaLTz2Q75EaagW5RH7U5h9GYfhn7iQXSJjy8xC",
  "key36": "4oD8TRvcQjYMRpUJPmFV5EDn87WHnVZG4rh4Lbs4zKWSVBSZRkRrRyT2YaEjb8syjZAe5Zdjah6EwqcwCbsHP8GE",
  "key37": "61LkL3sqWMLcAWQMHq9p2bCFWmATF4xejm4fNiM3QK7DcBUVNERg4z8W356Hy4tFy1XfvDQsWuzdoi1MubFYCXqF",
  "key38": "5ibxLUnsCcqNG7PSUeUhKqGAB87aXstiMf1aLZhdEeBDdt6K6rxgoogDYCbG18yf3WyxchhE8diDBggs8JFBsm8G",
  "key39": "26tWvuLd4MDTaGZsei3G9W7H1AJTxC5whNjtuSR1Mdp7ki4qS4BJDiqCk8Nf1LhMmHSd9PgEQoMXEbr6fUiWPAS9",
  "key40": "2QPoqbsHnnfAb13b1yDJMNa9pPP6heyvuMWQqwFfCVr25F91kUiduAFKZa4xi3UXQjrgLrsB5hUBN5JbUzKXCN5r",
  "key41": "G22mZsqrLDYeAAPJq7Gfk2VYu2Gd6J48iqrEYtYtcjyJDfK76p4gtR7er5D5txaj2SugBYAHUvKUDc7EDn756Ux",
  "key42": "25Sk2ctAnYh34VTz26NuHTjgJfnQfz5hdUGUviWxH8gPhM3LrLnFcS1KWTAd7zP2pzGdNkhbq8vPseMm598PhAt2",
  "key43": "52EzB9TfRdJr6s2zT4JWj9UECwXmkZAvhr5iaJbSHasHKm9HxMDL8yGBTMnmYMTxnyCmRjYVxNsXxCeeWZXstUtA",
  "key44": "3Grrm4QxaugdXZvY2moWvRTHGCvumANf2G2p3YaX9sp6CJSQ4nkgNvYN5UsoC5hZUdtftLSQz9oJszLbggKZSaRr",
  "key45": "2s8oCfqnupJDJfPnT9A5aV3q3QPsg1qS3LyBQsDabCsahv1x1p5oqQEPDVNAHGLJx819jPe5XwQJLiVNy8zBVWJf",
  "key46": "2RH8gW2ZdAh8RHhVurBQomFCRE8yR1b97qcJpk7RitbVuxb7RbpvduMiS341o6nSvG8v2mAKwBWYMERmzKcK5NDq",
  "key47": "5iJzSumsMKmrGjhvBpd945eKwQ36ByXA8rg9V5ptjE9MU2tmMjSvNf7yq8aKjyVAYsgmJUoqGosMKJEeuzKuGwed"
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
