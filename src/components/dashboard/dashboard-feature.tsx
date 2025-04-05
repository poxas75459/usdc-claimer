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
    "3MCPHptkVKJhd3fagHFrc8byTxsh6NM1b4M4fnkbtDPgicgYHbCk8jt8XbiUwQQ2BUWnxx6tit9nqQe6PM7C4hSU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LQprLuXKjsDH2wBqkFZyFk3BDnQchyYGokUZvreUYZNzhmgq7N5wWWryu7Y6EyHPEbWJkRRCMTCyAoi6AX9Gw3u",
  "key1": "3TqgtuKZRfQSwWm9mbcfDrxaDiQt5RbosTNTiaUf5W6UmuG9GcdaKEUVS14WThDzFAk3BJeX7PPcrYJV2RDx8NGz",
  "key2": "2FGRhHQNroLQwaQRbUH2Bz5tvwWNcbLrUroNRmji3ERtxGPVhgL6vtMFyJcp9qPTqGoRerDtTy9S6KGwhQRYfjAK",
  "key3": "4vdGmjVzQcYBUgVWb91qHcKM7vpoQv9derMC5WwspzYEztJxJ5CiJfMox2K5mnnDSS2ySgT85tRd58UohaTDvYEu",
  "key4": "5X6RGxzAAzpruVPJuzEBRFVzoxkphpGFWuJs4pYAt5XSyMitWq2FX5Kqhbd6jPNYoMyqQUuyooLUo1xnCg1R6jGx",
  "key5": "25AhEYQLbjFCYMuT6RVXZ3ShZPqwbvtFv1tHf2WYu87wuGRDyEfKAvkNPk2P3UWQDCb8W96BntF8MoFt4u7kN3Ci",
  "key6": "4oGGH7MXVrAS77CDevgvCbycvwfChrDtq52hfegPmL4VfSV6mzxQzUVBv3PbjCKgcEd8qvznWqR8yyuQgsFZJJFt",
  "key7": "3eJCDY8vYsyvh334LCKYQnmcqyEzm6rRRU2iyQY2Uraay5hYzyRJvkkDGYBJWRt7MEKM2ohdFq2uQMm2kX8Fdw5",
  "key8": "36G3vML1HCvHtcaB1rskpkbPJm1V9232RaCLrK3QLUirMJc5fyvzEWd36FSnbA7WQok1LtbvYXojLyWXz7bKctzn",
  "key9": "RsYCgotRZ7s1VsrstvBwFG8BUHCgpZd5Y4GHrgTze8cwdwGoAVhLj9NpiPAvoRfkusDjU8Jc3wvs8P3sT8YS3rb",
  "key10": "3GSiRMhFH1Kjuh7VVUdSQGh4tRPPdTWc1DkqnBaA5ANeA8P76pfb7eFm8pTnCXhaJjvTbwZgHDUcWcjhaH2nAaJk",
  "key11": "3rWdjigongWrHGMojiiMu2VJNdmu2iwT5uHyfXdvt623DD33uBW2waQu7RpzJjBVpGBMXnDbon7Pd4zTRsUQgufY",
  "key12": "5f23MHnjUmncJZDjEonJvQo9bsdjTu6SA6MjDVPkt74XZS5LscQ8PBzrvDDpoGbE8aiH9rcGHf5Ta449T5ZAqq6Z",
  "key13": "4PJFREEwEUAQZSi7MbM5NDyMEMHbrUBtgoP26ESvntb1qfNnJxDjpj7t5p1hfzyohoS5enVsf4fBo9i9teE1VEeZ",
  "key14": "2ggAf5FBoi3X3bCQDoYSW6LdgSnDss1CLixfEp6UrMnVCjCX8cGnCWCSV3LNd9exd3nG3FXpUXanUtd4W59m9te2",
  "key15": "3ySmbwm4LgvGEdmkuAdEwuh76q1KCsuDPZpeb7ZpBf37r4EUwj5Fn3Umey1k1jJrFpSoxz5a6dRQ8XER7fJYE5Wg",
  "key16": "xqZkFaSksskaCpDbYNXm5PWk7t7C4oLhaU9HQrL5m4Shersd6uVwEJWkk6viaJHHWg1vpzP3GBtTDcFVbS9pzPQ",
  "key17": "udQar1VaUKbJzreTUXxUQYyr1NpsVg84Z6jTSQSaDdK4AcreWX34hhzLz4rFrBAHDGMkV4KPjLemGJTF5tAGkSM",
  "key18": "27E8erx1iz7o3epDkbdFG61uqLo1WGsk41fpVXgbHFxtMJiLCiGB5BPcC9j5MUfcjn7mPGRzs1HGZxAF9dsXsb9g",
  "key19": "3mnbnLcJvrQnRbhtMN7QzkiBurn3JHzi9sPH7iwwpWVD49Q6RMknjqvgbCgsDxPPVRNLqGXX6SaPnpkmC7BD1uSP",
  "key20": "5WfGeWaqN8fN5uze28dge5y8i83k69LD6Emysw7EokCgXRmohRn8VD8wgAbEQmhoD5jjUTMmpNESxjqSE28riGKk",
  "key21": "2VJMQunc9NbTyDVanmSSsVRv3sRiEW5BcStQNAc9dRJQVRKHTyiGbdMg3pS8Tiu9yVX1RhqeQNqNfcMXwbyNCc6Y",
  "key22": "zoZYUKYEdW6Ls321ub1vDB29c9eEkxKD9CHNavJXqbjvvT1bF87t5kpCr6VY8J5dza43XuE6BFTX5hvpMNyTGyd",
  "key23": "4j1FxjXxmkFWDZ4CDL5iZT7pyChVc7KZftivvs1mFVot84YQTiT5ZzntieDxaCNaLeJeVxZ3FFQv83jrjn1uULAZ",
  "key24": "RVX7qHZMhejknM6iccovVKtygi2M5SnKWHagpWAN9tJTNHqGzPXWT2agxVb6UxfKwfgx2RZwFCb7fLMBhWE21gU",
  "key25": "2BzQF2BPqhwX7M4f9jry9zPywV485rRmPVr4diBiyUmSHn41vGC7U7CTahfTppDTuB9CFCkV5irgL5vbhGrAsAhT",
  "key26": "qw22SUDpGe7G7dFwdKh74GgFuQ3Cft3CYzETk2PyGQhDv1qYwQkx8KXBEyToVfkwoQPhyEstiCQ1JRSojAT8vyf",
  "key27": "AcWZMHvH9u8LNo9PQM2HxGJq4D849jQuQbjH2KUpeqGb9GLJKgFvFUZXUf66QnvbKTJrAutoRTSUr99EnFXM5nk",
  "key28": "3XVRbMX7bXnCCsV4md8YfuC33m2iy8eNJ9Z1gh37WinNLDVWn2GKTYCd8af1ztC6yYouUKBQwTFVxQctxfvm3Z5M",
  "key29": "3x113RSm77Jy55749VTiRTds97TW9Jk2i6ZcuyiU85M8MJqMMHmpAQXZ9Fha9bHFQFw9AXfR6QnrhYrufZdvkoKA",
  "key30": "4xfb2rmrz2nKA6A9y5wf7Tx1H8ZVq1c3THA6J5iQtQQCiarUzcMvnu9SJndLqamqjBsu6goRHkUkZST8xkSPP5fp",
  "key31": "3PBxo1KKzzTxMGyYzJddcfn6Rvfvbkhuxb4Vm8pWTpFieYJ8bTvm2HViBWG9yGLk6pfr94ESgkUHViQ2tnFrSu4j",
  "key32": "3bKwJYVS41du2rxHEzEnxoh7crKfHh6YqgLTyR3rogKwQW7VFeEELtwtBdN6hfZx7Ua7CYZve487hg3gWKni2hvM",
  "key33": "4kEnwQTqojEJQfeswz1M23mhHWdQeYBSosAL3ob47Hdcsgjv6dhUCfkysk1T3sAtiRFwt2trxtjmiGKgNYJB8ZTg",
  "key34": "4DpvYa2c1wX8R74hvfxNY3dEDbfwZU9C3rb8bxW2Jp9FsF6NXXeskxsLJ7agmYEzBnhfF1VD2zpU8RmsNASgCxQe",
  "key35": "4ctfcEFTQmrHGMiGarYNsCrRg2JerQVAoxwkZjWs2x3TYcy7CvK4bxpjSkWb3dgFzEwxMYq4KfnQwmNgDJr5xqGe",
  "key36": "5HAgDb9QS8AT5UBesWJDQDf9ENjeJQypX4rUWJBgihgS7ih3HnR2sfbeSKcfMR1WufZRPbHrCTcV7ZeZzuKRA6fi",
  "key37": "26e2kpjoF5jf7anGGeCjjg5XcUEC1MdQCUFEMx3TNNLPMo61PpyLCHRmFkQ26nLggJXv2FWKcZu1G4nacPQ4961w",
  "key38": "5B5VJwyY7wJin1TEBrPrFKBr4JbJDAwoL3g7Xkh21tf5PsGkBZNEMKCaoG12qXpWBUWrvnDkBoqyEjF8xqmYbSgR",
  "key39": "5ikCQapDp3U62VNxMYJVJ8APUhEcFK86nzYfCngBrTp32YkkkaCUK4AsQjvB9khUzKg3SbVf5CSyFkRGLXCsGSCb",
  "key40": "5kVg4iwZ8bKqwdVQRhUSdbLom2YfXAmXSjx79wY9VyT4mUe2QNK5kLuFCjbC58bEEHfM23zSJquqaoH7WxCaFqdF",
  "key41": "5cqoBKN3vxHsf15mP78iVyqL7x9omuQx8RJJfmt2JAVx1NoZnG6unbfgP7o49YD9qnhrsJTLTudDjkQzRxH8kxXo",
  "key42": "5Q8oRys2igkDphnX3ExUPPNBYb3TsJLThnzjmjRFEsicC9ZxiYtH7mGxZgrqZhoixjc4eCJAK1mWeN3nH3V8ADHc",
  "key43": "651psMGh2sJ7TefyA8MJ83UVRqCw8VfNrxNG12imWdy3X1KVTjeN8fKNWScMp5QEDwuQ4gbWrUHYxkMaq56NiFGz",
  "key44": "61WN3tZPxhiHATN7AAFP1JgkSqk3JFNbru6m2zXovh5A3APe62S9TwsNDL3jsJT9drkobkzZjN9DBDjLS9PwEiyt",
  "key45": "2aNE7sqax565TExx5FgiFTjoHPnGPJg2MypJJkuWgsUifXViWP7FXCufnoZ8zTcmDifx3StMwWTFoUiFJY8g666A",
  "key46": "51QpsFumUBTGwjSJpJFk22MobXSBfc2E4KCpRa6H4aKdfgaQ2MTzdgwjQhNK1Aod9Y57ZgaP4MFtxin3jYnUeirL",
  "key47": "3hhcryoLTQo6oy81X51Jwr1BwReaUNCR2bvBkiTkvrYvc43DpmdRioxmtSCTj9YgyfBNkHLUCp7GdKLyoxg6PFv2"
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
