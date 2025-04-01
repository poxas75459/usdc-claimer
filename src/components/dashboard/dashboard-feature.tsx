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
    "22D7hZK3srEBBu2W2LaCCgJ411FKGRX14qo6EYokAPgovMvymGguQQEBihmNJCVnjPhNCTz6tzwFx2PXNLhUSPrh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JpGrriRFtjP5hNwfnrTSyXQX1cdnJF6wGWmtcMKjB9t3ecFDeG7EeJiP7im7nSPdfnasZBF7xbEDkjtNdTTShLF",
  "key1": "5WwkAkn16vDV5BFRXg1oSeRvRFTyS7Nv2teqSMB9ntx8uQKScddWMnrC4SxrgByTtPfgrPZgweePESqnwrzUhGWh",
  "key2": "4p4Foa9udBaxsc5F5vmfRjTj6beeWS4u74EGqpDS5U1eTG2muY4VMJ3LgSxZ4hnqhkorfPivK5fhNqCJofXjk685",
  "key3": "2wviRdTjbjpJmRyAcVKHFnn21NW557Xwyie8fabnDQvdkKoHRYyDLt9n1MND6oRQEWhNeCzxcCruRdT6ymZX3o1S",
  "key4": "4wLYCETVQZKkaBe8eaekj9XEzCKdyTqL7FFj8tAqX8ukMRVW47nNwYJ4oyCQtUCk5uk7m3DRYjhg9oBejr3BBKJY",
  "key5": "4V43dGEinJx5pxiz6e4C5jB1v65RmHPV19fLd8vGXEPeBjiwgoNydZkqzojLa9C9X2fBwefkYuXrriQTGC6tBQF2",
  "key6": "2vPp85j7z8jFjDftzs2ft5h1MMHAwueyz484iwhthcMQsH7iHCBvimmRkWmqZr8yXUNwQEkNcph3YVPQuuWyiPHz",
  "key7": "1U7vT2kT2sG7f9pkNxJH9oo9EBHRYVQkqNMWie1nL5vknWHBbCayezGfhWUDsuXMBeJzNniL9nHBjF5BcUrTSsJ",
  "key8": "6591eWJVak1cEZRY23yHwAtATtqVqA6PEwgdbmEvXHf6zmQUC45UwCcRVuhRHhNPufhRp7KCuqDD4H1Lp48Jqo5c",
  "key9": "4MRzSsDTahTVVe8J3F6TtRURA82Py7LRM4HgcV7xDcajQ7PjLCM75u7kxoXgATpLDTmq3jwmMbC6NGS4pEnaGovw",
  "key10": "k9UZzvT3WYDXxZpnwcaxkyf9LwqXT8N7YeagdFvbv65PCiuDYWpsoPpRXTp8pDu8MMpSiaMLBJq5Y5XD7gV3PPx",
  "key11": "ahDaVmwtexQu1VTSBGJTYxV2HfZLEbhrhmVafuQE6r3s5Wq2jxhiXvMQPmNeqBDsXudJ9h6bM3VCgyWdnXanM7C",
  "key12": "2C5q7bFDxNwFpPAzBKwr9FBD5YbMjS95CAZTY27xWRik2DeYgGvHZKFjHGJkjprNL2zKwvL1ZMNp9UQoMFFe5bZf",
  "key13": "4PWwRqFQX66utpZLWAjAJSM9bSiQsFdqaPq4g6CPzwTPxTeUvE2qDqMLVkppdKekm9bA6GZsSUAef2oMzv6PcfGd",
  "key14": "z7YeqAGvgUzjynYfUVHA424VVkCbBsfrKYMqDFvwuB5sK4NiuX8ShCDLBHnAqESVJkkj2MYKK9KSPdmV5RDWTAD",
  "key15": "3WPcRrReDTapzDN672sGDqQzsJf9bUzHTgNpqGQ2xDhcWPhk8Nr4kYehFfPvEypkdprtP1FH4AQKgkwk6mtk3XrP",
  "key16": "6GborxDrTLuwFkLTFojN3S2PiTPzpLoko57mjKGQnG8s9oWxx25uYYxERi8xawFDday8E5jTHyXmfJpyH7pVeCu",
  "key17": "5iLPR4pqYUgzpuBxtFDGAy9RYx1H9sderNhg8qFUrnTy7qBH6rMv2hFrCAzS4guncPAST6HAFEeXCGUohowH7YfL",
  "key18": "2QDV9r525FAsAykAitAXxVAezbY23aLgoP8h3ZFRNxXx2KQdmQte2KjNv2dRJkfRFWQxEUuhKfqbVaL2UH752i1M",
  "key19": "hpG7ghMcK8cEcmoeEiUpkk8bhyLsjKScpFi7PseT37MdaojUPuMYGQ7BhrCV8iAjmKfqpadmpnXCE8cMTLkVNYU",
  "key20": "29YyQttRVDf796zduPQ9t7tin3FXRNRDnnnRzZA2E53GdTux2v9NZgv61AGWB8tqKo55vA5m4MiwUUupExG8Nu1w",
  "key21": "5nchNjDmXCctf49VW5oXwdB7MQpw96FusZh8AzErv3bQMcgKZ4h8LrkMBJz8FxDFAksZntxLWMrJqcv6YLS6kTJo",
  "key22": "33ykDahRWB95NkGLPjNbFHRcVGkVTS2HCXuFr5AJkSK5pBD3Mxt897s3y91VWT3QkkkjntKo6VNQAM4459Uwowde",
  "key23": "3VdtQqz4V3oHSgbK9543thYGbVJsBPGtjjkfAfb8TmkCom8k4uzph2bm2R9knUb3kDNxqzCR5ZfoB31DaMkmbwXQ",
  "key24": "2KPQ2QP61FT7im88WJciAK3Un8qawAM12vmMHHB14cbqNyJFrvWxz9XLzJZVkVKYDgGnRSNfbRTpWmkmXNJj7SMD",
  "key25": "52qZvf7u6tABtwivhjzhioJPVpzEVxtRmF6rDHRNkjCAcPE7vJeHsXc9NtrjvW8UWkqm7FFzS5LYENQDeNYJCVBe",
  "key26": "4dUEpoMFtMVb685jBghxuUzEovhE3BjBeayMfJnCkC1eu4pVR6U4seUCzVH5dhyuKnse2Znzjdt5Eyt4sPQEwMtj",
  "key27": "5S8zGAGppkKMTfLJA9eNGjGuQsNdo2CQ1i7VLPPrew47FdoYjX24GX4gCmykwrYLJnyE13379DRWfag5iWg7Me1G",
  "key28": "4bx488wdAN98ETaLc3EwVxPCt1tSXyV6NHVi57ngmReKuBgzNWWdP7bSHE5JeMmNio1dFCfX9TZ6gfEop51PeR3X",
  "key29": "247ye68WowptnrQpszW8s6YKWZknRnKMEw2v3ZNrDjFWJSN7eYB4sysehLDjMYRgjuZGDL7ov4rCbhkmVxF2Kdcn",
  "key30": "5GH5Gmeopzptfjw2TRHBTTxt1B1ctQyz5gWT8g1t1vaV2WnhNAJPqRDmNeN5A7Goz6vZ3utDYUv3nP6wz7gruGe9",
  "key31": "3NLpqe2TsLqJ2KyHkN3qxS8nqK2SD7Hpyt3XHDstCys2kptXQgdUKmT2nbCVzmiipLHDLgJX7zy2y3AsPmXQyr8i",
  "key32": "2wNpySGy6g7ohPkBZrAhxvp7XqSVjFd6ys9zqmzTzhjGeKwnfwFeR1BUR2ogz4g9s73P1FT562WfXZ9NuPwjm9A2",
  "key33": "5viLb4X1r4zg6zyaYzLqeTJH1pY5MNSA8nkSGKfnGdYXLaw2UxEJcPjLUZ6edHc8zF1ZdyUnma2P85zvHQ3VDRiM",
  "key34": "5AFczMUNr5j8LNWrWtd81qdeovUvHecEWWZRjDetJcEnLrrzT8fzKUat8tgMxSZuM5we1KqfwUR9EfgKX8Mee6Cu",
  "key35": "rp7LEv3Hgr9ijNt4cfCfNzpoiQxJtYJtwqz3SGkRzaRzrDNW6YCUKvHdnxVM7bd73CJEHQGQY7ScxTsyMid9naH",
  "key36": "56N7SStWJwCbJYV5jd8sjdqLCcCGWnyjotyYALxyQKWMZbgdD3UKMJEgkMHJyTYqzHRw9rJQKTr1F2gJsDhz6x9A",
  "key37": "3SWgdxXs3PzUXrtxDfSVHqmrRzdhT52ZnMqthmWoHZZMA5aHBDC9BTeCXoxwUrzLub4xaSyVZk3Kzqw5fJb5aafG"
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
