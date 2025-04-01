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
    "dDTVrPgHXpNAWt47cK6jHW5kSL5PtTUdWysbpcjDJBRrSzrPKC68ehRFE3kvtPztPcsCUhghAwLtnVqSWL5AJTn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xn2iUkwEqzGkc9T25d37p1kgisq8Yqbf991UkkAjaaRZ2pYKAWDk6LNgvm9xUus6sb4j1Q2WYXUGf3gB2DmLBwf",
  "key1": "4yuo4WuJE5M4gSPMsbkmueGS5XGRZcom8LowuLovbvoHfBeuduHQymDeiBc8u4MnWc9XjSW8NqRBxVsx5YdQq8Cc",
  "key2": "63CJqWf1sB8vvrpwDeWmwgoDjWtLz3tPugeofwvFA8fgBXViJGgCfXddyPmrCD5HopKRX34mJFqbvqgvWRFPYpeQ",
  "key3": "3YUcwfvT2tagAbzh2MAfzJnn5BfqbHgS1hEAYQ8Sb4aMrQR4iYsYiTwQ76TxHHVmeekQ7EzHGDDuUN6ZUKNko3bu",
  "key4": "4PbUjPQY1t1vbwtfozXHJQa3cfNL6kWwad9uJKJCbCwGhh65rSq5LDERAUbWmg8upFbUPt38b91mXGwAhCLS3nVj",
  "key5": "4frzVBkSYANWLp3hawYs9QhAMjaFNTmrVUVvi6iuyrmDzMV7q3G3eywTZBK3nLbDiKBaAhT3ncneufS87Ro1nsdb",
  "key6": "2nPyp5D68swVyGKe55oKrmaor6x8UAomDntHaGbXFhjxJcxXpVMWMsujNuP3a4nWKeVXNNK5UNSAsBAQqnn8Jqjz",
  "key7": "3Rdy6mviBCKXgGggZ58w8wWZjpHqZmGWYEPDhVZCok2niMo7Rc8Ln5qvs9HqG5FfPeJqTVmHfNMFysPhLsiqcgiU",
  "key8": "3QVhcD3F7xqJGGAfr6SKvkoTDKDLbmduJfU9RfuNwrmXjrpyN2ujkBPVLahi7fi6z8cuc2Jm8poF1HhyksKKsJLS",
  "key9": "5FAZdarBbawQ3F3tfGqZWGvkBFVYcP5wSjC8M5an9nGWK4cRZvxwCHd9pc15TJfdJXURFah6Hv5bv1rt4niLu4k5",
  "key10": "dxkj6nZCVFmYghTigyhukrm6ZXyJFGYeghNJJsxLguoNmtGQvBRZuViy136rchBDrnjm2wZLwrHruM6N57V93Cq",
  "key11": "8nw44niiSRSghGws1xR3mXdqvAsmzQuRq6fUCW1CRo5CtWcoEQrkcSeRRLHu38jQMG4HbiGSc2Dt1zZUYrmgnCo",
  "key12": "5cFxmNndU1YtfwCwvGTttPp3W6dpnhyNC6wLsicmKVck1NXTS525drPwjCkLG6GVLoFjqPQ7Dg4XtETU3f6GrvgV",
  "key13": "2CVCKtAuRrBeYovkQxN5VZH9jpxoExXXAoouF7TJv124eM5b2wN22WHCdoUdCyKsPsZCzsBqjafgFAHftEBsjPT4",
  "key14": "2voKrphQWqjnbTBNmFTksWiVzKCoEvNoes8TbUhppew1CH3YxBbAezfx5eia91wavqUr2JN6TjK5wMSuQCU1gUzy",
  "key15": "5nf6mwZSv3rfg4pULxpgqNou79Vh29KtoQKC6xKufqZHVT8YwJf8v1W9EF8V8asHr6FrkAxKRJtR8WXHAZiy6QdV",
  "key16": "2oRVFjqZdKredFCz78WpH1p99KdcLxQsSQNwrMGWn5Sj82hLTntPaYdHNcQW24MaKH6zcvg2v9dox7SxravZWi34",
  "key17": "5hYURBbmNRbSA6NaHRBfxW9DRqATGgw8772KKm8eDakmiapVsBWQ4FCvFqfYne3CpfQmm1fqLxKTXxDE7YaxVFkH",
  "key18": "2jwNPrbVvTHdkoRptyxHKXh8PZgTk6DSE84DSDmjk8PKTYSxGSefrM4PuzW65ujfcPHvNqEHWzzp76NpwYAXj9TF",
  "key19": "3jvvJ7TdMndj3pFizUmeDP7tdvrMEjmWWNSeTaQZHW9M2VAD1RPcdXMYRBrseXSDSHWPcwepdFzZeGiW4nSsFjzX",
  "key20": "61uhyPjYJ7qm1MUpW9pA95C3yQgoamwoqhirEUKZhQpBVcVCUjmMjwsiW7wJY72YNgzz2DNrRFuTFAYKnXD4MvXH",
  "key21": "5Ly4eFsuGa1v6e8iiBSZwce3BRLDuqugTMxgbKeQdXGF8a5KpDXXHJ9wYVUT5osB4LSJTy9JexCRBrgxwLph8gvq",
  "key22": "3N9VbwS529FvumwBfKtdRphXWwwgqsM2wb7TVHwpFRmkXnLpxYvH57KxiuYS9QsRLLahRAsUXuc4E7ASzZwtyLQd",
  "key23": "3jWYp9G4mXfCdCd66HMcYgokBKx7tduooHPsvVNb2rqjzFgQLwnfde3PUrCVThrXiF8UvM6SMnKPwXxao5fVVbYv",
  "key24": "4fEWtQBd91iqg9vXqvH7JNRLBmGgTN2RobhtvfyABTzWVLtKsSoDH3qfp82MTXT96UeJmw3zNd2YGu8KsCBFXteQ",
  "key25": "5xJ1w1haXoqHGBjwjW9P1c3zm4iPaSUWEsj3BMHxw1KVWhnr6HPFEL3WnSE27pUrXi3CqdWfRTXR2zYAp2Tx1wny",
  "key26": "kB3huWNpQxDHzG8kw398a7vMFjg965iyygQABMRc3tHCGzdx1wrWdu6EA2pnVqvXYfsicwTp4HSii6qouGEojZv",
  "key27": "4MEXg5t2NLQkd2fEbb6VWTKewcW3UAKNkLL82PLYTe4mhqxgbSepm6XfrWZaQg97yQ4bt8JN2FG32iRPpj55NQiU",
  "key28": "3caUaxRBZSn5aay9ZW5dcEXYTiwY7NU7nEmbpogE7yJey83Lc8nEwd4q35xh4RQqGDAxJJGZiYzeMosU1xnPEkqa",
  "key29": "2JHRkjcsgMVHbVjo5CvVgEhgUrAK3aG5Pn5CrfPmPp6h6xnQtRYm2GG5aULgNXB4yh8ypFtwrqosSNkeq7h11VnZ",
  "key30": "3cYXkpq7unbK8grDqQTDvk8cbVWJoMihuoXMMv7tKaUDTgicQ4fNTZ2RhoeMF7FDnPhYtadsNMCDvZxUQmf6biFd",
  "key31": "41NhgWjZRYv7kTAJpMCa92kofGxngN9Gyvi1qNZhSE1gR4d8NVNgV7x86EHqWGvKzcYqKev4tRjLJct6fJsg8Agf",
  "key32": "og1D342a1B5XuLULgrDvRTE4Ts6RadSwNVmnbW2w1Ajs41y7h2VREMgqgzFiqBKhppnss7W6RL5nKgmuhthDFx2",
  "key33": "3t9yaQM5kCuzGtr85aNYLY3KuDaGr7iPPS73nAL25Ex2uBXZ3fj39K4VXsy6sitwjhN4z6jwErfohUfFVaq3NYAC",
  "key34": "5JGwnmDoU82DMWoQy8V4E1CPA92eT2YNiPp3Zrfua9CY4kEnLjFGEdQ8XWiF5WpnWp3r2r92CLfuarhziaVpoFbA",
  "key35": "2nmBWL3kFGkF2DFacjZcBHk8E4izya8s4sgcoqjpXCoissBCgYaj2VCqm4b1o9SqZHknXmkZox8dPK1tDiR44j4D",
  "key36": "2UfzXwTuyMnawUGnn1CWonbMPbvp9FdwiJHHJizeAnJxSVhiNJmEBNWLeXx6UCJmdeiTqmrDFFsXnHRt55HFLU9V",
  "key37": "4VcyLHur2PyzpSZ4c48bktCMkZSz18koJStU1afoqonkkRTbHX9RY6JCBkyVMTCG4Q5ECRCNVK3c91ufzc6BNVTm",
  "key38": "42W8ZhYb7BAkQnHHGKAGSPSW7EvmrJVGD1q6CCMZE57ede4Pafbf4mDAZFshvtXQbPnN1cVGS1PjKiUaYZR1AKea",
  "key39": "LZkgAZWJKZTNZd68kLhoP7Y5y9E3tvLQeGZqw7EvEFTXNRmyKkvGnJnFGqNqM7a7e2vCwyrqNVcfVSeoS8HdYP5"
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
