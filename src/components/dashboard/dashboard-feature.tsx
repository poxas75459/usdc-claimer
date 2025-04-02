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
    "5CreS4RaQRk1JDKqendMMEcVYbseuZ5REzxJDFdwXW36GeXhpoauBvxQyLwSZfN5baWeoVjb5UR16BP8M7PK17rQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HFiJqx7iyq8mZubEGJn5NfQEM6U5eGPBJmMHBzve59T3FqhcW898vVJEfzVPDQ7Kqxy5LhhEJ3fq31VM2ELT4ba",
  "key1": "3V3rRbJUjTs5k53BiQCAK7U87rccrKjKocA3WC5512n8vs1Y7AyFQExJmfzox5iuAJ9gGYrHXutpC1CSD1ukzgKD",
  "key2": "4sB1PY8d7cptV1JSJAaGt3JJ43LZvWqGLQoWLy8wRiB9mPcDbzomVweV8NFbFSF6Vor46JFagUo93RqNnRqnzDBq",
  "key3": "2VjUMAo5w7oe219fc82mApMDq9VBy3sSNWahEntu5fW4iWDt6qYDhZmraZ9Ys1RPJRiaNtzeTEshKpPJM8GGR37S",
  "key4": "5MDgkVpVAP9DZb8zMjMpNAWcePFoFmRg1NHvDLuMMv2a5dHJMbuz3JwUjP9dCr2gfw6ikZRFaMEGXzpiZMBPFfoA",
  "key5": "5nn9NE7iZUEZjqbtr4DGoYLYBdfRHVX2wLyP2AXQNTMeqXenKD4c7g8EWymSxmX4bc9KcxtTK21GsSA5cwqtCEyy",
  "key6": "4KBejGBhULtttK3ih3mbhzYkZezoRhBq8WqHQ5pELbp6icmKH6Xma3ZP54bGE39wFyuFGCGmgt31su7t6Rm4ZsEz",
  "key7": "3MA8BA1gTmPbdEYfjUpjezJVfr2MuSE4VkkVBQa2ju3mRdiZDpL6w7y3Gd8EuvxmkChkifnLndH6dujkpx5ukmnB",
  "key8": "3pRgrKsNKy6xoxtK5jYiAG2ybfDemjLLxX8XAksp22TnksvRDyWaWauJc9RCR4UzWMpuEM6omucyjPvohwXA5KSW",
  "key9": "q4QxEqn3jLyPM6vQWAXmtSHLNWoyMNmuxH8EbjmFnVShXhmmVNFppGxivzRk6qCHj9dyTiUGXxjdHbsG4a5akYK",
  "key10": "4fF5AjvurkMm8qKbB6SQozsg4ToVRuXvTZTGaqqSJSoSYSvwdP269zn6aHBMwg2wD2tqECtaqwseCTD1Z656HR4w",
  "key11": "5KrR5BPZy7CFYwT7T8fha42TuUdZjyJnnXTvVcz8DLqHTzzWkYh1Uff2NkmreRjv1rV4gYpoqrg2aPgAAiXG2fs4",
  "key12": "4m7sBqfWxcMsUVracx8ijddfPqTxSztiYPSciWK2ZVZSZUXXLafBoKAnPQQHopkT6YyNpnYZCQmVBY1462yvcsUA",
  "key13": "s8J8aZuZ4uUuFd8o8zhYZ4wxtmDHKzSDzgpkEqqpiqrNBZvAa9cpp4AhfCqj8yJyz8GVSvEuwJtco4NRxebtA3r",
  "key14": "2av6QazYRX6beTf3TWxeS9oXhuJKQ9gXAVr43dH6g9e5qmNDto4ckZ2xk9rNFcDTeDebXpdC7sMiJHGDb2ESvM7K",
  "key15": "5qjgFxzVmZ6tyjjoeqSDNFvVxcCxCUupfa2bt7okytrTjGrLpQ3oDwKZR32AFvLg4M5WHFkZFj5131fGaJ9Z15Ht",
  "key16": "2nocLgsQkwLjJkVnWo98hsCynRGHSTwiAnbyJKLHt2sJrT2pg3xS2vCA3XfdGL4oVjskJdfnY8jeKrBpWbczn7Yh",
  "key17": "3nsAE8Jx6r1fQDce234JePv3snbxqN7VQVeKG5QWwqwf8vYGomG6Gn9WeqBSwthnAkenu8jeGEtHvoFwCnNhYm2p",
  "key18": "5Y25aH1MpRL8KoGj6GboMJU7aPHS49kMd5AaSUyVG8NPtQfiGpvk8V6oKPCYaavCryeYjz9dVPcuP5eztDAouCqM",
  "key19": "3iFWw6g1izcMcgZQfemEjA9BEdWxU4aJHmRCutNc2Z9r7wqo2mcZeHVQZBEWLv9DjoR9Ryjjwmj7zshgmrkEaKbF",
  "key20": "2A5ZPZGn2iVRE7WXkmM3jZocj3XbmBPfnGAWQjVUMqFKTMZVuRb6rbuQvMRVHk17Vv82XCBpN9PPqeGbwcLWrN4c",
  "key21": "4gKkvG1s9jWE8ec5aEPGMrkyARRXEWSFvprhZgHm6hDUyYDtT5RE1HhDT36EuXawaSboqrQJsb8t9Y8KyuEAiseX",
  "key22": "57tPyXXz3myXDDRWmQVvzPDqtUj9HATN7GZmkiJn5gMyryN7H2e3kdUwSLhucTyNBDxvAPoBawL9WCtNTn8QJk2v",
  "key23": "31tJAAvAvdubzni2pGbAPYn59UaQBuMWvZSwwK7g2WDKC5wcaQ31eqQzMhyow5gLfF5P75Mg1DpKPKtJW7BLaXDp",
  "key24": "4JGfJsZovWaSxN9Shc5UCSdwCAcaWfsjdMNDUkDsbbDoPAL3jKVjmf8xzTSSLi3myNg8K9PEU5MDCBdvKpUebgjw",
  "key25": "3EDYK9TWDb2PgEj5kWzoeeJt9GmSgUkRLkc8WuTk4prXXtQhhqZ8gSodTiGb8g2r9tMdWEEZhd1RS28aXYyjrQW9",
  "key26": "4KANyPtG6KBBQrT1n36V9uzycBmDH12zinznkrHCMLWGvfouWzV5P99Aq5eAjg4m8FrvfvdaAkkbj9XiwLBJNeSH",
  "key27": "QPWGf6b7TyHDGh134DzKuFc8h6adaFLp6DwJyUURR4F4dxwBFAXJmBAYM1h57zv18xx69axV7WphjURrVW5BeXo",
  "key28": "jk2PqA7w9V6VbLncr1NSjHivFNWNNfLNLhX3XrXbiqoA9Zg43ygCHgQsG9R1S4MAmrTgzHWoafMZvc6rDLD4fhp",
  "key29": "3Y6EFFMp9qjH5V7hNSnQQqrdQtCAGQubQQCwBQoNzrGbtNnizdsJ7LqszTQ6mM9SXVXNcRquN4ij6mFq3MRurpS4",
  "key30": "pEZ94TcYCGuFrZievTpm2ngFG6G8JEB9Nrvg28Xar7jaTVmrcwjyDxgXP2bDAKb4AGQE7GBopJHPGXeMAHNDYNy",
  "key31": "51puYWeywvJUnqRSsV1bRgFBDKQ2Ak5uy9AgQGuBC447AxvzpW86Vo2bGKdS2CA5A4JExoEHYYLdL1Ad4ZJHK1aQ",
  "key32": "TqamtPeJYBqyz3e1xkg4Y6aKTvNJ64rCjUvJaGpKqkFbJiTyXzmQEURUsqe38yhmZV3MF6FtAWXF5Byqf13FoYC",
  "key33": "gxyV4quSCRz4tz115GbVhp8spuuDR4kF5AqmnkzaTbzsFdaHXjnT4KpS1qvvobgTSWAkeSXi42HRkZLJBeP69D5",
  "key34": "rLp9SSjTrmvTFMaLRrvfKKpzur1pM1Wx1gQhyJaUyM5hYu7Q5QKiLnNn5DobJSxgzZCnRoRoBK7jpceooRTYK2m",
  "key35": "329miwTLZ7pHebeMfM83jyZGn9RUBUXVkkV7qNvH5u6g6wT98AAfdaAUCCUkd4gCEmxyZ4BTN8WB5dMKKqyGP7EB",
  "key36": "2ud99ZvPGnDDhtusheS3ApxjyiCEiNbRWVdi2Sa4DVCELLUCovo3CSbXWZ6zhUYqdbNENZLwc8mjBj8VuLpWDi44",
  "key37": "4F27jjfVvdswB42bDSW4fohHAHFWnfksdBU5ac2zBZL38Yxhp3KHYRSNt4TAhUN1DaBjDYKXuUXrKFpPmgz4fCxg",
  "key38": "3L5n8LHePksNFUBMxEvA8CMTFGs7o7xvb9vwkvWt88iFETpY6tPEePuDdk4WQCsFEHJjPjTsg9XRRk5ui18FguZ2",
  "key39": "4EeWg4y6L6LR4WgmnD2Y8gp3PxE1aRqu2sAiZGQQom6GqTCM6mGcgAifdXGi7PgE2ic6hdrKYq8hZShV9KKDsd8u",
  "key40": "4dwf8eRYYuhutMCbMb1Pa6g5YP63VEUZRKTiQ5j6PGBQLtK6CJ3ADfNkR6e385ceoJZqYfToAPiMTEQXSNvpVXto",
  "key41": "3wZviXXYFPHPDn1z4PjvUUh9nCHk1pRbHjXnTVmRix6yH5SWKLkk56VgCVXqNWhQrfwjgvbsFkNwRN55Wz2p4G4G",
  "key42": "5nTUERrbSNnC9ycoDDrREKvT57F9uNXDdrozKbhfV5UCsExoc8TdAUNDyduX2qec1SgPmN6bduvq6KpeFHRabt1u",
  "key43": "Vs6zUwVZFQikPKPgiGh1TTDYjLfimk2MW4Ve8GdFrucVEeRpAtUPphGAW7aFhj7hzhwgmNh9gK6x2Cn5nVfsjTZ",
  "key44": "5fpBTBKV4nC9pwFi8Xz3T26TNNeNiar7YuzUNSGW4kA2CJYNN6YLrn3iKpfG7vcNWnMzTGJZSbqofRPb7qetUZWj",
  "key45": "2p5xipQZzjR4VhR7UdNzHMGawEnRGdQq3TK1ebGbnu1PoPu1h9j84Awe1k9com9EY2BQ8oVBPuMsTUsLycSdy9Pb",
  "key46": "2jmJQLTPnmcLv5miVgjbFfbqfHm6hMgVANBnRQAeQLrR4GbdgKwyHD1gyCZ7NA55NWYunMcgJ8Gadnjz97h42cxH"
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
