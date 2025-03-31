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
    "3ffChsYASH5uPbT6oeK9UjMXEv7fzvgSERV9GtUNdEMbTSkJRJDtRsS8yM4gQ4XqLsPX23dnd9U34b7nNsbaKTJc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fMVsi6fcZZSYgf4gCzrt3ZG1kzLvhfA3mV2Vs7xYiigvbK2LN31nwwDcai5YAExDrmNHp55K1TcvANySMP4MB3",
  "key1": "3au25B8P3NfN5AH412sQmQbyFJToHskA6Qf8K5uZZcKkZ5DXqYPMz7TFQj8tz8QBL8DRYXgA8A8vsZnaBHk5Dvf6",
  "key2": "2RwTCru7mfNSGMnCxRLT4dzYSYAzJK1sp156PoAMTiEr3XotDwc1To5ywv5PqDsoQVVxUoUyJbiT1YDXEHQoy8Tc",
  "key3": "3XRRn2yVKPmFxxSYRiXFDJrKUPh9RYocCMUTUY2NQfQbvjXXUKRFfj6T2UxBxNoWawcQHsFR8AutZthR4axJvJph",
  "key4": "3ZgGtaZvoicHvZrtY6NVackV4nuZDfB3dg5XpydQSJrHuD6ACn9EPz2Vg9dBLtZJjpwezBzcrJrEDUqrFSJyhfBN",
  "key5": "4w2ptVDssQR6G4b1oBgVfq4WpVkrV9gfXr6sH9QpovbfjrWKonfXGjHvmupQxkryPLjLdCByxbNuT1WkLdyVrJjD",
  "key6": "7qKboMqi4xEor4pgkuQbv3CaYRZekmsNYBtXq7yGBssTpRDomqjBJfv6FiyCWW4ZY2tQ8fCoPcJRr9EpXZL595M",
  "key7": "2wAddyPYkUpXVfy1k4QcfiSimw3jsRVyM54PYKseCeZMY6EsfRdCajvwffcpht7jE7FngeYhGHPUTMDMjvEtKAAT",
  "key8": "rALQ1qWU3Ykkpr1EDBVDDrQUMN1yb82yzpmK6hGf2brig2Fr79D3Vnoioy9cZL4c2LYYqQieKVUFoPuTx1bEjL3",
  "key9": "2vPjM66CxgeazyGt5K3X6Cd9Rd5h4PcYmQaf6jbzyZojB6hkfzXeVndvoBcdKri3jcGra5SX5NLKvJCxjMdRKzZZ",
  "key10": "2eHwVzQmgwpHJDb7ZTP59KVPZY4jqma4zG9EDchT1xTTfSQ1JNNNZR6cuMcskB3ebKLewGWv6DB6a9XeCMU4oYk6",
  "key11": "3gpEa4V18tSiLHBaxEgbrZs8Fz3BL1LDvcCXFR2abML7VjRvauA2WLtbkB4HpgHxtEz9cn3fzfZueqeWES9qZrhe",
  "key12": "YUzezB9z47vyvvDWSB8TikLhCnX7UgzxMp9FkfgPmiDP39xEXF7NkejGptPxwJowB17aj34XnTR6SUNAwjQPb2g",
  "key13": "YoCFD1j15eqycJ2cbhpfAZjWbLh2nQFEHH3romqZsQs3aBUEd8PsMvitdGDqPmh4683YsMomg4J85cddXtJAcbK",
  "key14": "d8h49gu5hdBcYGACFD4J6jHGkY7EVxXmwvVnvXDpKh8iroSgT6Cp23k43kxJkk7JBa1qs7VTgvqH4vvMqdPWpUc",
  "key15": "5hsfBTf8kTbsR7D2tPuNVMnbP4zayWFvDRaDTWTWprdrFmAzwRdRPXSfMyMqNvGHy6SAdSN2uicJLpFnc2SmpaKq",
  "key16": "5eoH9J5E5yqfYJNqYoK2msQEY4apgoRzt7im8rkHj1Rn62gAwJSmb5LXUfpDAnD8wftDybBcb5SVdCcRwofJzRb6",
  "key17": "d3RenrZJ63WXdntkmdasFL6hHfj9ryDkGxG6BVYRkig5FfqEY4NeEk6TBSwnYbkaDPGJBSA3tERGvrJNqcqTDgz",
  "key18": "5awbDnZFqp6nwq3QkEbMeo5fJgy7pkVYCt9xqh4Laeh7tg6Dh2LCxukvS66hftYcUsiyu19engov8LKL5spCoCaZ",
  "key19": "4LY8onERBvhrdVQGZsppkEtbsVDHbaAgyDpqNaivTPaWTijd1CczobFevuV4yWWaho2DCN9UWeagBJVBDpEjLyRy",
  "key20": "4mMWAPdhAPWNF5nYbgGdMYV7itTZEDwTMfjZ4FVY7ExdsDZtousHbg4YuWM1G9uxNrREb3HX6RUM5Fos1BmK54Uf",
  "key21": "37oTPcbZymB79gxjF6QFTSDKddtQVhNV6RZbvrzAPE9zojQirNwQXcfig6eaYsDYjWRKiq8PfTaK27G5wVxx9raN",
  "key22": "5CsFsoLu3LERqu9U9ua6ibCWohfgXkcPAyAfbGBAWrHYSmZTnbC5y6W3yv2gihdMviT1HeAW4uksuv3rT4YaQGyC",
  "key23": "2mRW2igzsPQejjp48D9xUoDqsjDom8FVDpwWSeXqYMLqZsuPUpSZYt3nBUq3BwoGfFNR5Jom7eHJGwPx4EBqMB6f",
  "key24": "4yGs9R2ZoFubtSarZ3eHECsxMQ58wqW5cPK8L6Eo8zuC6qqiMA8JmpZTWLvFMTzcENq1mBvFwyugRNtHTjcopo9N",
  "key25": "3F2Si7h9NBDaCdjb1ykNRN62Z4VG9xodii2WHesigwYunSt1Tjer5sJ3zFYq6NUYjaCYAWvFWyY4VvQbTULmjsMM",
  "key26": "4WADoWhNpCtBQa4RmPKvRUrsnWC5HgvQV1JvFganqNeM9YrcveNewrzXuHN1sGY7EK4181ekpLKjzA2vAvkW6neF",
  "key27": "2NNXEKEUtJfTrNff2ZiLnFZrLMdmr7M2LkH33gwo8BQfKMoxwxKxWFFveeiLe5jgT46PsBA93uEaQFVxwGsoecQo",
  "key28": "2QS6u1qTzkkBxLv2kCdMjZXCTKc934Ur69Btg9idv7LHH6Q5KBTX9nf1e6Co8Hko6kD995KReW98tzsindY4PyCq",
  "key29": "3rpBWGMHVQLhGSDqr2FVP59SbXvHshtybZcPKmkU62n12w4o8FihkZ6QkKWhtswKsmEFvnsupg3ELxgUhT9p7t4L",
  "key30": "CBRzHshmTpa6M6tGroXndQnKjxMy25h1xyMeArc28G62yyJ2hM3z2aLroPrfwspqMZGJRjeyNVAKAidBFL1MUpX",
  "key31": "348Qc6fRRXjXdwaPcjBd9SRuX4dpMaF69g5wdehocVuxLby2uNzK7dtHjTLoWFGke8eEjCMJrxEr23dt2ioqG1LW",
  "key32": "2BjmPCWybZiPP9aUEkTtbmy45LNcncqpqA8LgE5Z4guw3XgnxG6Bvfq3MEdA8GP5aqNWC9CiW2of69MRJG28kN7w",
  "key33": "2d1nKbfq3MjEPetK3qLQHafVAoDuY14aaVjKn8irt76SB2dy3ezgbCExsm73UJbQ2kqUw1ti1JJdYhLFWtKdSQ98",
  "key34": "4kYtxgFCPBFqGZMLfSMnLiB3v6PPWM8dF8vjNkK6od6GqNXUDsdUquFB1YmoZb3vyhohmxGau2p68A8zbcZ7bkP4",
  "key35": "2czc2pyQDwJPsWRzmk8ADYbzKaaE9ivZ9NqfVUv3Dj5rFP46VhpC7qPsM5EEmqWf6NEbz8qeFHg6iEV1JSfzh4ZQ",
  "key36": "3WATwguuYLvUNwGUpsaGY32JKw3du573sVZhsyYDRF373f1fLSkGWimdyMgjQ14yAghMAUh4pFbVGvcD9Tq6wj8a",
  "key37": "4z7fRUL6sJbHgkdQXE2LgfY5z7aQdKJMwXCQo4tLhyBxV1jNWmz5wg1rfWBMsvthxrqrtaZCqdG2ajxXto1oyk9x",
  "key38": "4RnSdjCgEEAfLDge76VDfE2VAFDgzjzrv9szkYMHwWwC2mp4wm6JkYLDXFAxZT4FbpeRnAQqm5pEahpctfpHqopB",
  "key39": "okBPis2bcahoXmofaeEv8KtLKwc1La5UnAyJJDxGH9SyEC6zqxqiKr3jCeKfe2HUG3yeXK46RpbgwqD5UKGCcXq",
  "key40": "2TkqrfZhBF4wVbXN2QAfZ6x6b1b3bRqTt2s3juJv66KYHcMtrGwkEHYNNE2wpHyjCCzHgaDKUMAQZtVPjYAyJDui",
  "key41": "45FAPAxax469taYVNAfH3YKs7d6KgyCbbXA42Pz9pSVxPSWrRfBCGNGT9iFUzLyQ3euyHQLzN6T3tgY8X3dUZdBk",
  "key42": "5JYtbp5h26Vi9TAu4MpZS3qVVy5pDDVPrHQ62Pj2wBja6bWZ92BD544i8aT5Vx8PpLBGo68ZSTSZF5UGkbg9r2ip",
  "key43": "SLXbDWXP6F7orzyLF1CC7HURX1A4wM5sPD59mQwbBXALn8zGXd6oFFRPJFBDDmxZ5yK76p8416P1KD7NdVaoZJj",
  "key44": "3grauCLaKsy17eoBYjW6XGip11AzP3CQL9QZcze3CNN9Mjdgax7faWp5TybSZqytpeswTYjPEJVQYHfvAsFg22gM",
  "key45": "2Tz18deKPAP55i3i7zs7XLSyE4iUAVePDD7HqKnev8WvivW7k64kJGKPK77VBNNTpVArTEbd6UFdgf4x8TbxQ8pc"
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
