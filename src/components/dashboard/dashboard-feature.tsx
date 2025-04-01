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
    "2iWmLyn6rPYZUmYTKLkdUHVCL1yGkCsceuhRzJahx3bkNFE9fHVMVqgQ8csTPjMb1qZmBRBK587cBrDRiPYqRUoo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5keVTuN6HcLNWzkfxyfSaw35WAJBmEnjfE7wbHY1G1MMm58nrtsXYfso9y67VXFpVAtpvBnxvt4eVgWs2MTtMCuY",
  "key1": "58Drfp1AAipzCqHHzzHjacuZ3pdy3WZyhK32zyewEb6nZdv4XUzG4mGgWw6aXj2n6AxFkAnyF3bAjURSZunRdxbP",
  "key2": "4SUBGUktj7hmYQVTT6XqY6x4X9nJY7VSfWL2K1HPE9pqSaH7AanZVoPnVT1wki835p8c423QDsjAzJPsBWAnb6iC",
  "key3": "4bN9coEwSpJT4tziTDSZ32YriGuvm1eWoSreQgS2dMLGqG73TJTLpEy1YyKBoqDxE7x2UKVXy3KNSooNCoTj1GoU",
  "key4": "2La8cXYM9niBsK7AnSADoUJ4oCorkQjfzskUPFfZo4m9g98AKywcUPaXgUgid3FNrA9UptbZxnBdsCiLgZXS6ZP4",
  "key5": "3JJVsurWgY9GPqg6JnzS5LjLp569X32xZzvvn1VvjQUAZxU3GMCsHzX7a4L6K1LjiLvcA1f4Pr4p1hxYHmdK1h4x",
  "key6": "4UyzPcu42g3i6PSSn2odnhs9iH5khk7GMd6gwC7dQqmA4iXEqQzzNY91vS11NK1W62WU3Fn68feHSCCZkVPvP3BG",
  "key7": "3cxp1u11QxrNHDiqVJ4XjGoBwz1fpGwT5v9jegRHoY2nLvKhnqp6yJmRDPkkeChfx5TP2WSNHcxhK3p3aKFaGkek",
  "key8": "2ndrm8Wh8w8Svx5GLmXg83dDSQSgQQFNcaesDRts986tvonmvUsW3tTnVGbQnxxQDZ5t5bDcRwbnrrEftQ9Qw7pY",
  "key9": "ST4Rq9bgVmZX6TiqPSeaG4gMDdCn8fXKBCcSGSBh14Z1NDCy8xsv7PsLkV7WkcqvmfgRGCXx3C9JNSte1iVZBGG",
  "key10": "X6s6gr7bRyvUsvaBi4Qpudanubn4t4QSPyPWQUNSURuQHcym9FDWamyFiHcpdv1sgQ5FSxqYZNx64ckbYGJwAaq",
  "key11": "2ob8rz5KPh3t2WLT694p3feNMMTM9qUfFUawo11Bdn6qrzYHyUr9YA9vYxhuPsLE8AVXtz8n2iNBzHZUoQ4ZV54R",
  "key12": "58NUKAbpzFQnv9T1GgG3tJAjWyPdta9Heu1gJMb2MK8fJxcGuZV6inpJjqGDzBPNcaC1yVLdkwcvEbCbj8SZ5N4R",
  "key13": "1Ag5tSWc1MkAEuytkyCgP9v13LtwM8xNVSqysYK6rQffWD9M9JHQzzpmY8VtUB2hvD8W1f1xacAb8ZrqEmTn69x",
  "key14": "3E3goY75TnrahAE2r43JNg8sYyax4CQxmW6DBrnDf6fFe9mDw9SMEU5EFBsEC3YUfRSeYCfjMBGww9WBS7JKRGkX",
  "key15": "2xpy2fjNKxkkZWYphwStHytkott574hhG61euNDFKG4nceU7jhyn4e5W4yXzdDSnfnCeWM2etdFQt74sRe3415eK",
  "key16": "5kVjJD6NxzGDSk1dvQrN7AU5HqFkUhtJwrup8zLqNwNAjhczaPzcT3bCXfYmuMDqKbr3TurSRhLAb3N48AXbPKVh",
  "key17": "5EdKyq7hdcqkdMYh44vVm1rWJcwr6Fj2Du7GmCNNwrJRojbxUk82ou1ZsRH1aSqEkxnSSSVT68dbdHmEUqXkmfkY",
  "key18": "ZbEaHvCebTAhKizvEuR4esf35ShA7GJwH1wexmCzqLQWJVtZdgzac1RV9oLzdJVqDspjhWw4wBQcfcT3f5tQc9T",
  "key19": "e46Y35eaAm46gDr4WpVBfnrpK6zZfn7YYeqhCZakBAxF8vhJ3qdvdhA8PLDTRqoZEdd42U3SSEGKgDzZ4yHnPWA",
  "key20": "hiwSAtHNj2X4BDrC9mJPYLnWz53mWNM8396iqtHzEQSnr5WmbVM3Uomo9iPhgcMAsmpK56nwz5rHymQNPsCQYrF",
  "key21": "y3B6dnxkimvNAXHW8NLRWfQu1NuTR1J21dCDghxWSCSUx5DiWMvqUTXVDE5bwDAXgUz4frjghaoYAtWDbk8eeDK",
  "key22": "2RgacQGzkZXnzH2zGYwueSE2MWATTTBkmPV7SkJfFgr6UxUsPp54aJQKvcbS2yrmwcJeHWgrh9uBCg4jfNtXTA5j",
  "key23": "5CBcLDp3s1zjMgUEWf9ooaYwQwwef4r2iixzvusN731vKUQiWqL4qAu1kHJw9sgEmnufirhGa19wyrp6L2S2xJj6",
  "key24": "4ZdjYsRdgzYYSKyvkw2cCuNEhMDwuucDcbY7twfD8izx4nwsJodFRBeah812LmQkgojReDrpdYcdWfR2t7qQeXJA",
  "key25": "gDPcaYcr4KFdfqaTncP9JFk2g8xDQvWR8TpSqvrbCqeXoq8wusdut63SUU74AWhnwfCUeutKVrpLxChjpk71jFa",
  "key26": "2uinttyAspaowmy2UbNZZxLsGj4Ked71ae8BjHvMbFwTACu1ZvN5VJuC6zf7SVniaR4Tz1vjxSryHPgJUriHUuwU",
  "key27": "2wFSacmFbZKR6xdKqdDJo1WsjpE5SeoN7NWotvXwK6GEs7zzh59ZbboHUvDbn9534C2LrziNiVdtBDwa6YUmeLPt",
  "key28": "4f6F4uN26KouuMVsWw86ZNRsAQnZg2m4pMC2Apr2L9F7tqadgUxzB7vQjygkNb8NT9fkPxjFUqg4senm5vBn85bc",
  "key29": "owJp8TTpcrbox6UqPdtdfiZ93tzV9aw4yrMGgswmodKoYZuN7627RUFmNZEigx6Ef7L1FFx4y1cyYeXpgs8wmXW",
  "key30": "LpzuzXZ7aNT5RZ9k9BXoZDQUHacyd7xraSBhEAEe4uUD4kGiHtJLsx5Gw1i7zPR1qtuiEcPrM7JVuWeha35wkK6",
  "key31": "2CNDdCqJjXWDgHtxRurk4AnWZekKsFiuYrnRjMtbs5SXSpY1mCQXRoai4ivWu4ReqYi4ZiDhrp89Jer1BBXYNq5z",
  "key32": "4wmWTQEN1odJgfDkkoH4A2KqV7NJg95TgSqnVwQwNL9XBCEAxzuZernxVQfsLFKxiUz5v4MsnGBZhdHxEouSCjhR",
  "key33": "3DrAFC6Cf48KqufDAoJMLcvjjAwSNqiF4CJ9Ms7mRDGVKTbdtEW9ynoXeVTU8RvPyhkiwNetMnWZ2kk9vSr2DQeZ",
  "key34": "3YHJn55p9ed11FkW6EnyQVrAZF3j8RxqY4MMswn7XYysF3vGzEsiKe9T6DVeALzE59fkjGEnTPiCbTRCMGQ8ssen",
  "key35": "2ftMbXBpFDETTwNvaA72TNw3MPLc6mNuQe64zL7pJfiTNMEruhHoHKZq14F9zwuUd4gzAmPCW1d9NVuWc7JC197e"
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
