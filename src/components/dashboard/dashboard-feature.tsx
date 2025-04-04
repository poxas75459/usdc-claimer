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
    "3rRdcqnKJRZfPG5McwEXd9A7T3X2sASyCjWngJiEp8RpSRTmkZ76dh4htFvos5cj4YE91vg518Fy5RnFyTojfy2C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3raavvgvDE9sBr7zb926Vj4Cmt7nqL6upMqywm5UJvbDmWwhszGYvFz3sVYE9573ZSJvRApMHwS2L5WhtxPArBDQ",
  "key1": "3sdGM5LT4ioERPXcxh2xf9zg46qsEqGrcJ4PbSYpPsiSbiE2LdGYUWwxD8XcZCW48vUrEQX58MMctwXqiosX5MgH",
  "key2": "3Sghg3pAM9psRZdrAR1nbCqejJzYq1iA1C8Cq5RSCMroVqtUAJXyJETdoEKErjXJmE1dBu1q5SS5WvmoB5U6jzLr",
  "key3": "3M72yhbBEocmSHEH3RnhMxmXHJPevE7hpzkQJn9nb7R7vsYYo14W6eNCHfonkuWKWtMgVVFeLo5DZBUZvT7CvNXv",
  "key4": "3bA1Hgt5YWZ1ruxwoAS9H44BXb7Ya6CZH6aohwwUrQHWnLcdL8cbX5X2byyRGP1jrQLwVgbt26PEBvWWpkB1sWc",
  "key5": "2jizCdG8AbXjJZJFhCbQQYcLNJGUnPGAEDrNyu1hmAX13U3toZXDTsfrbDXS327oaHqcL3JENiwytWkjiBRY7Wfm",
  "key6": "3ECiNtRLJLgvN6ALNLo2W9wWvqKBXB9pQd6zRBwFZi9snfL6YCuX1s7wTYT9SLLMDmatgZa5KBNKN4gyJ3d3U9QC",
  "key7": "Zug5nRiGz32PipY5LaxbkL1VBKgvCxVpVvk6nUQxDWsLfvrwKQDGFuAYWTgAJxWXEv7jtHERRLVWG4TJKK5u3Cq",
  "key8": "43ELWhni11HJk8hJDiDxW7mUvF7kyzR77QuVj2urB3M9vc8xzcUt6J3oVwLPKcq1LexwdMMEZAsZg4Bx4bpCVxdE",
  "key9": "epXW4LfD87T3DMSDoHsN88MbjpGasyyTyhud1F4mMS3duH58ACYdaxxZxjPacxab1FGuQUdgxs5mKKtrijfTbrD",
  "key10": "49J6fS7QmD1AUHbXVcMei2zMiXfSM3WXG1KUuYvWN3Syd9htNeE3d3W3VPbUe26HhfgP7eYynVFVoWEcruFeWrKv",
  "key11": "4jdoNDkcBeLEQA88dqqNAZfyRrXVJsWMpYhPtLcfxeskPTCxdKwu8tjfmM1Yjng3avAgBMYfgUzXKBNTKFehZCAu",
  "key12": "5W35RNu9qByrvg1eWBNZN71V9LSCuXCyJeoWUAUfh3pEKnzdYjibojzFhCy3B8Uzad1m2APmKd3CNtBNvG7rR9Y4",
  "key13": "4haSidp42JLzyPcysKK5qYdaAmei6QgYxY9dzYnCQoN4r6nuFyesmPzARZaX8eqGyLnrp23ddCrdLu6bqVXgULZP",
  "key14": "DtCDKGBVRBuyAzfCxLrD1ZdHuJ9JcreLyCDfQgEifA5paHqjtDE2FHfPfLNL9RvepcF5mcU1kG3bbRwPDX445NR",
  "key15": "4yvC6JWnWs9ZWrNSisWYM992ofF8gHogE38B2uRdUyVqwVvt7XJouFnQ5Y5nhRPejCgDeVUkeD2ypCkX8CphrDkK",
  "key16": "5f8UvQXhiBDadkD5xBrrWCeum3B4RP7NFU8RtzKUF1kjRZmGZwn3vo76FJnMHEWhy2FVUFDwig5LWv27ATRCkX1v",
  "key17": "3EoA2BRkFkbaAqEM3S19Qh9d62LBn6tUFHdWsqHTB1Yh7fQd4NS1UP8QgKZ1nQKiSqzYBY6GJ9Jh1vaUbSX7nTgR",
  "key18": "5g4CbVi9tr63nfBCMzyNSXWCpJcX7gVhxXviP16hd73y6zzhpRpDtwuUm6ELnyug2H4r2DAVezwV7jFB3hKuiQEb",
  "key19": "CYLLuWx6hsFykKtWFjSpaNvLHHj9C2mEBcVM6U68fo4Jgr3T8meeunbD62qADK7HqCedfdBtii7wFaE4aPH6kdQ",
  "key20": "5i37B3wZHTJiNCd7JeTcq46thR9EnCjuEYK5SJycUzhTAPHG5GwzDim8mU8KwPd1B7By87sVeKZekF1RUi9Vg1wH",
  "key21": "2jSCuhb1t4mefPCZCRcUSxWzSagNKxLMh44GX7b9GRbM55cTvfDhxN4M9aaW9MeJ94ftCBaCLTDM6DF6n1NZYLqU",
  "key22": "5uxn3hJCBAuvwo5ECjKtg2QwHtqmdYkxDfPXyFZgrEfHZ59w5BWRQ1drvX9YWadY5VL9Uk6uPTpQCK1TzYa8cYP8",
  "key23": "5TYJJ3mEu57K3FMykcSDC1xSZut3qDjX3NvKRz8wciwcKzr7mNwT2Bc4CY3PL57dxx14QHLywusBns6URujLjqER",
  "key24": "3EtamJSKwxiR9WANqWN2SyPpGH3qYiMYEvBvS9tXHg7Xp9X95WGihny2reSpqhmL9G6gkJTQ8ABeiTsm7ExxuM4d",
  "key25": "4dh5tSPfFbwUobrA4YmF6JnZH1B1NVd9duYC1DhM7LwvLo9uwFkC5JcTag68SVH4m37sm8DwHuwG62Re1jKzo1zy",
  "key26": "5KxqSDdFhd9AAFfVGNxiJBwMLSQ6GR1HkcVc94c8iKbW6H7rxxgQSnRTvjQn8WFWowNeoJ2QNexR8LG5sQ2wtLVJ",
  "key27": "3UaEw551WxbZ3aA3fHJWFijneQm781qGuZQqXzhYDSAhC1JwbfYhfWDC2eZtKERm8Ji3nTWrmXgVieLyagX5kNAv",
  "key28": "qCYam61BrJpTzE3qKqDr2dtMNtxbqcMboqtuxt7RatKSqjNw1hKFzMtcvEsr9q8eVQgmCJXQC4YCzZUnNqiSeGR",
  "key29": "2r7jF62YdU9Mu6VqS37EXDE5xMHGPTSnYaoLwiTf14bqTGsxYqF3XjvCEd2oqwZaD74qzevHwzR7aqeQEWYjfn8H",
  "key30": "VLAogBmvcmRcF1waeyNaZfoPgWU63mEVkm3Yi8yRcB7qcFn4Ax5tM7zkfKdaMnmn4HZN3jbB1bzyYKYfvZB2x2C",
  "key31": "5KYNMwBKGpPmwB9NW1zNWhXD6zXd7oUm3rc9bozJsiZcATev8chHYkVWQAF9VfgWKnwgYQN8X5VKWmtG7ZUiNzqM",
  "key32": "3suLnWc3TF8zjcEDkPopobbErs35hVAE6P4B8i6tcWGWQnwFQraHAr7w46ECQhrAR3eFgYTGVToM222qHWMMvt4u",
  "key33": "dQfB8qrKYzBD8bMET6tJMsueukmiDWrTpSxvMPmppiWD3DqPCf49EZFZGmsS7zXDVA9gMRSpTR7PvF7Z9sTb5Me",
  "key34": "2Pkd5p1DGvpRzQU3y6tZRNpY54QaChKdgomd4bvtCh8q1uHF64gQMT2FrpFsHhXAe8RxL4wQCyix18dYh7QLNSPh",
  "key35": "xiZEC2wEGwhouWpMvrTfvqhU2qjGkWTjvFFodLMbRnxhcoecWPQ7iSVzMbF8wwBVyZ6DUpVqMzbncdtyD57J2S5",
  "key36": "64m7BQM5n49Ybb1C5S7gw5Pk3WuSevoM7U7dHj12JrzHc1ibiLgdVgNXPVU16ZW8zd6dM25Huq6p6htSQNfJqCsx",
  "key37": "2GEnpxtX8FV5wmoGf5QqXyVX4id8qxSshkR2cPAe9TzNBNcSpCUoZvnbKhz6gqQCFP12TJTAgiJgrEYBPVrq2WpF",
  "key38": "4PLs6Ajv1xLhydm8oY6Qxa8vM4r4fpzbZa4UMPPyPGe29HH7yAkuGsdb8exh52VtnvXpDqSvqnrDbmw5HRSKypHx"
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
