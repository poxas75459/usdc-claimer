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
    "zt5kG9iHxuiYsn1obYkLvsS9o3pkRUfMujyRZfAg2GEZjuqUYELzG8L2hfftQN7aaxPPyHTfPyHPBatoKuydo9n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WD31CW5XPy6PPhtrgVW1mBkSEf3DX5rxy3oDcEFDXV2TBVSn2LDMfJsuhH3AoHs2UoCW3BcNzATKfVcfkxFUmNE",
  "key1": "2RjvWKY4PLvr7ic2dVhWeghWAfriietWgaSiN48Be1Cqp3rXTHVsrLLAL7epf4xafAAW3yNVZodJEM8Jqxye8nqJ",
  "key2": "4ngqfYtAGAq72NrDRKS9pdQgQuckkmJg4yqgoiWHefuTWW51BFy3FuEvacg2mSMto8WUSNENH7p3CeoErJ7KVVFF",
  "key3": "25hJUjc7MtQtjJwYUNu4sx8u5qEaWdpmVHQhG3ybEGvfiwBuY9qXm1KTVP4WTEd7kEETrxaVtpzYwhhLmWMjYt9o",
  "key4": "7fkQHpRRVUSib4y5VzaCR4Tmm26a7TuA2QdHSaxHAHnWJR2qN7Nnx1jCRJYGW74DjSCm8KAV9gv5JLLiCf17Wec",
  "key5": "553dzaT3hHSMHSxqVqxr4J4hn7gPVmGf3N6br3Vwakdb4WEB4QM5AaSrSq2ccvy6Wm7nvgG8HHsrc2bXx9RCDkKU",
  "key6": "2PfSbaMmQ9isAxrSwn5zjPrm1AgiQ1U83bY6skHahzzKS4DczNRkiwMwWt6qVWRe2Mp1U47fdGhCCcixgvbb2FEH",
  "key7": "5wzgAjVPbu8AtZi74UYykFgeGbd4JBvUngkRnsPX9eDa52VUvhu32jZE66foGKZS2XgN713LW15JYUzk567cr1bV",
  "key8": "LamUkoNU3M9HteT9jJKUt2Afd5r8LVARn6tfCL3rjPha7NE4Y6CcHJCri1cF68rFCyUnsGohYL8MHWfrfk9b1be",
  "key9": "2phEDcd6yT2Dk1Dsc2RQwqHbAcywA1HySXQs8sLjJFzNUb8u8wMo2ujPZiF3KmCxKZMLujQMJMQ1sKnotnRembkY",
  "key10": "2JJG4EiRNHiEqhDxgJLST5B62cRo1r9Za4tyDsWodTUREAUKkpF8QdFxtWtjMsdcASinTnLve6RvCPv2VAw9ecok",
  "key11": "4xAVqp2RBpJxmNEKkxmaZVe3ou7qGW83FnA7Pe6UzMsegdKHqdPoVuEQ8CaSHCCVrQHgGdDuJmQ9s4w9c8azS2Qb",
  "key12": "36KKd5C8ZmQ19E3ko79ysaoWp4QeWiuzoXJkZPsfgW82r547yEzBCN4Qzu35fhEY7tWSVUiEE9CfwXdufpnq7rda",
  "key13": "5CEMAasUqLLT2sx85kqiyi4JR5fLYNx2LdhLrhKzRCdZBXJV3xv1RBDQfbYqUrFpAGG79riheARLXie52kWGfCXV",
  "key14": "bj6sFRqvGxWsUvLzZ394nCwqQkrwmRRdXrKQcq6bo3qm4t7WvhNhHKsMktixEk9Dtk1C5BtgD1RnVh6tzu1PLEX",
  "key15": "474E9mVStsRBzUVFB8pehvh9c6jxxaK8uBb3drVZ5BCdmwdxWYFjkBpyDGTz8TN9sm2R1m3sjGj85iy9xCBgR6Z",
  "key16": "2qt4YdMNRmTKBPRrE8gYSS581ER1qJjpKXoZ1G1sxT4Cf4YVnsooChzE7FEtKJbJcd1AeQj8ztsiXWoARVCcZHus",
  "key17": "2TicV6DoPQeScAcBD2Dw8MzC6BWFcMu47LTcy8SGnDY2JMv33z22YGwnhnhsorPFDHno16M2jAGJ5HZCQCdu9HLJ",
  "key18": "5cE12EhgM8aoZhm4ThA7xdasPmeo9amMduN6sHBYYnoeHUG8JvV3ynytFmD2iejZGv8EXxdq3zhWpKeaxWkWiMJK",
  "key19": "2WJsiudma55e4M9Fxreo3PHAnFJ9Q7mcmhmb7Wc87scdN7SnzC8HDV1KzhbEnVyCfr8328HadBp2dEwsQWekcyfe",
  "key20": "5qz4GqdoXJvSiAMTYZrCWEwrSLK7bovfegGPXAVsw7FhAHxhn1JU4dKGrT8VXSeXW5ufoS2wVCvDGGvureqepjd6",
  "key21": "wcCdSNS56zZr2kfmSrBLBG2xgcv96e8acABcL9RecauW1tYkfQrPtVTr6KXzQpQcxqe5UH7Dfky77PX21cXar7p",
  "key22": "ujPKEcvXjNHEpKAD6SXfTFg8xu5j3qSCCSEVihiFFNPiuzEe5bGPY5CqUteVWS3uLyC7Jwpz59xkzHu8dwvv3ZC",
  "key23": "5oDKv4xK28oJesYYSjA2kpyj3eg64ezp3o6nbpSw94MSiwviDULaQyctuS83ZDx5EepRozSZ7aKZbVgMMMYPw7sk",
  "key24": "4rCSdY9grnnpLCn6SoLbveMsdoBfCBp771bHgucMcgatCpk36kgUVAuPz8CLYXKNctoey45eFKnLKuTujXh1hQWt",
  "key25": "3uNAHsNkyGFoeHTYK8XuxbEqcQ2zzXnzFV9LGm9PGhWnSECgwz4hu42cFGfE8zy66jYBnsYmFVyVS5qcbniq52go",
  "key26": "5y5kWErJrysuqDAZmtGKAzcdX1uJ1a17cDoGaqNEAEsvi3tn13A9kEHSAoFzhJGv7PbhMUc1n7sZLSUobr4b6SPM",
  "key27": "55wR1pK7MjLsxeRg7X1an1yTJL2YNa2hgTNUAwgVHfu7rf4yi6ADjBig8Gr8jBmt5xqwyiLk3TvNiR9iZfnh1hRm",
  "key28": "2CPathQ2aVwDpfzbdzfq2QkjwaZTs5xeZfxp9nND9hoRjyHhdfakaMiu9yFFLZd8to46W1TcXNie4K51VgQkG3Gf",
  "key29": "4Y7R3FTLCpDbmkF61x5z2hrsD3mk6ohYkgEdePWuG1Mvebb6TYus2CoEs77vns14buzE8poQVyo4LBY13Mfp8qsJ",
  "key30": "5AMgK63KqjupCmsa8Nr49RgyWi3MSA6vHr8w5NcY7Q7Ntpq42oawz4UHkpCE1NjeUmxN2pWxDkksFDGUk54aSHTV",
  "key31": "whi37JgLx6k1GgMG8tXCzND5HQGCtuhGnwJq1tBhRB7kEvfrxnEeVCkCBdBReWy8aS5vZcWTZq2jDC8x3Mxgs5B",
  "key32": "WYj6YfcRUo2jAPHtNkiDA1xLQhTRhk1GQoW1phTtwjcguBmZUpjPP4ec8xMZYRbEhyuBKLRvkC9vL1gLSvpup6x",
  "key33": "5z3FeLEFmW42rV93F3QAmyWVU1YbYEqiNtLDz422UqVTYJTstfaNj4gCPS6mUSU5xadK8fyFJfo5XbnuoHCRTL8J",
  "key34": "28rf8HadBJnUWKzEE6qQ7W1E3DHAmJnnowZGQyJLFLxSA9Hs3fWj4ADrAphhyXBM7uLvNRBJ2TiKeEmE6wucGRcn",
  "key35": "3349aoPGqWKQDEDgPy9bvLYHFQ2PYgmoeGt5xM14gDpTihZi6mjWxES1ajUzr8y7re3F9m7Gumrrda35T5uMMWBu",
  "key36": "2LrX6ggPXp7pnCrMtY2Tfykeq7u7RLb5rDNVqpa4HbHAyYPPt73GSdZu23vzYEj4pN1NskkHiWKWRZcrdFTuE6em",
  "key37": "2bn8LQoojLsK3AFTE51Bwq2C2etARjnSmR4BSmHBCdHy4J8nCgKnbRc9ZiAzFfn1RTKQEWkAXh4dKXCCUjFcV9tJ",
  "key38": "5oMo9VjAt5BvmcW3feU1L8zaee7bWsS31fDASWNea6zH1cyUAFwnZ5u52Rk5Jnb1tYBk1WCv7D6oNh2Q9jsmogRd",
  "key39": "44JaazN3DW7EnWXtEaifqP3CWqyW2B3UEA9QtuViEw5pSKTomRNMx6JSUiz8EPRg3EPEyLfdu4wBJeJZHXB1vhaQ",
  "key40": "2k1CFzTLXZ6BPhSc4h1AFx9c2B127DLXkTUJ8JAaTj8B3P5uDFz4hjLedEeikVzsh5fmQdxwLhZrhwnnEqTpMmtP",
  "key41": "3ByU9kLiNWwrJwQHfQ2SAYbdACccnbXFH4eBP6RChdReeo78wybZoScYsozzqAUPy8aVP9b8gZBRqNsZPN1Ngv58",
  "key42": "2TGDQkBehutpCnZBdbMKv2QVRm3roRQnZwF7au1znyM4n2pry5hSR5DeYHJAkSgQtJkkqJTipD729sXd8K2eYpin",
  "key43": "4Go7fPmAYCGq8b3wV76WV9JfEdtciAvk3AeShrkpkjbatZSBm2Gx9bgJhHA6yRrXwpvC6NDYkvYUJznRvgRY2UtH",
  "key44": "5CovJy5uVj7SSZXHfFoHUoKAmBbCtn2VVSqf4DN8tAbx2sy9UCNscDj1WZZWCDFC9mYA9uisnhuBC6bVnkreRpHy",
  "key45": "21VjQGn7abLFtxznjMBYuhGD1W4GvSJeLmAxm9ikS8ma9z6JudCK3Xw8kxtCb54LDvxnVorkYpvUbS66YrqJKKEX",
  "key46": "61kqRw12CzHRfbagBBxQ8pTa1SRdjFvWr1CvkMadz7ybdxYuDA1VnQuXxRGLw9YqvXNDWQ3MDJrhW1L4cAReBFLd",
  "key47": "Z9P1Xhh4prxA19wKeuBmdNBLp8YGNrdtmd2cyx45e8L6mXEmK1fNHjiGjDE3YusoRiwqeu6a6JZejr3xroNzNkT"
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
