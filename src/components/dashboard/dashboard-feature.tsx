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
    "3vXieWubTKqrHL6ixMn7BukumVZYdNMoXezbBucgDkXwYr3qDLdsqWQDbrbf4jUF23ZoCPVPDDHbMmgwaPrZrTAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Dh8KPtenZPWy3yJhvivd66mMUA5FVqTAEhktQVNaddZYbEFMtygNr7S9EDdSinyPeyrE8RFpJPL1Byvx62WSMHo",
  "key1": "58xJrK6EaLkg7YWSWE8KrmkszzHaMsqCvmn629LceGpE7AB9k5WBWcarSFbcFk2CPeTWgyFDKACZVHsCZJthjMtA",
  "key2": "47oJWeE33CurKDr3q7axfcMVky71WcMiqLaUogYq7HPbWbeNZggo37ra6RCt8fk4wdqd9PkJmSMvXzvWVKZAPhcn",
  "key3": "65Uw5sDpHqrcswT4PXrR8x1v6RrVqBnZp35WXdE4JHMcksxUdi1AZY5NeJ2CcrEneao6wAGZtrvY6icz1gTm2aV9",
  "key4": "4o2LkAwnXqMpRocLpXn1UMKc8k1E1VBvC4GQo46AoouS3RS7Kaic2CWEgZmhkBEvDfcfv7xEBpotSnGzwkFrhMe",
  "key5": "3q33jqVc6VFy8BkfwV4wDmQ3bG8NTxCrArM2XMWfBKChv8DX3jeVz9hBxXssqyTgeXs5DKiBhys3FBd7KNdzi7VU",
  "key6": "2cPiNXJat6JyhZDhisqsETXrKftJw2AVPNUPRuFjcyS3KGZbRA27ZdBjE4gMwSfH3AjPvt19TCamip8zL1fg4Sow",
  "key7": "3PEPakbNwgxGt8PKHSpdr6YE8pGGHxcvXkKvQpHDTerq85cYNBTGS24tDXMJVyYqJqiCSKaGC3bp7dNLRwLCTm5U",
  "key8": "yyaELt9oiQH45tuFJMFseMRgTczotPvwrJW9h3WoQVHvJaAahfFtg1DGgFU6XDBUbEoTRuEvvXj9UjTQBn8pcbh",
  "key9": "HebiCwhEbk2zixtSyzFjzu6bpepik4mSAHxNLTsfdbzmaDLm36WXZYdVNKhktaKWeVYgmP1imD8SFvDwmjg7cPQ",
  "key10": "4WdWNzFcetjSTgXYoAsPoLhQLasyxZdCLNh5VTVXhfCLGtVPwyz7rczFdPRGCJEtzPpAJfMVzFrTNZ7krRX3GhU9",
  "key11": "4CNWvf9E7xpcBsM35YRrHLiLKpziy2arSdeViGwY7VTnrHkVfrSyCQJGFSLtRNTi4v6EPdFjfPyCpgj9q1Kzj8Wu",
  "key12": "3BC1LqF1GPddSpGHBUScTe78fAuqArNny2WveDr6E1Gb3Txg2FeBjHSEt8AVrdmLNq7v5NFpgyjB3aeTasD9qPcz",
  "key13": "3RRzqEM7KfWJJjPm5FfEwXGsRaRW89Wkwb5eHQqrV8Ji5fqENHWNFkm5dSWpvfas2X1J4Fd1NWwVoYyACjoKkuUx",
  "key14": "5nF85M6dsaYFsWvztaodEUTzQQejqy9RD2K5Z6H1FZas2Tx8CYDFq6fpcWCCGiqjozWsEz7EF9Z7WxbhvQsAq77h",
  "key15": "5xU244PezJFc3NEazo7ARFWfeWsxWPNWDfUkpQ8MVZwAKC9naCQLwazwAGVkRZ3HLMorpZQNPogs28UutDoomzgd",
  "key16": "3TEbG2owJZA9Nct2twMUY9bLJ4nDgQtqVbAUetwEJN9BQpQD45kexzTAB6j51yX2P4hh2xMnTr8gRRvrAjWsdAVn",
  "key17": "kw5x3wgMVJxBUpLVXLTJ2rQMaajHcnzPxkJ5w6B8osM6qPkZASF71mL5ieXYDeN833ZAs7baZhMF3EUsHu6c26A",
  "key18": "5HJkpV8soWLyikJAKyuuz2sp7gr9o8mSvSX4L7wsC2rt7hhD6yJJVHHoEBLFdjU5E5DMVMaiyT7QcRb7iVdJkdpe",
  "key19": "3UG1196uhcnJHoW38Pemeoysx3m8CenAbFE4HyQ2PqNBhU4USwuXipMCA74yjGaoDQt4c2EXupDWbbnQiktcA9ax",
  "key20": "k1yxhkU23m43hEbQJ2EWxjYd2p8KfSAfwESDfaEHsSfTAR86JvvxJCNaFggpM1HnM6wBB68MAiZ8VGRKwJHRsQ9",
  "key21": "3VbBfEoejGGBZFWY6UxsQejbF4P4PiqKRR2zpS954wU7wcbALhyh9koVdUx91vEEz6Je2fYLNetxwPFAL4jU72LZ",
  "key22": "54mMJG7aF8oVB8un9vCnJgaG5kbn78E7pmruurht2RiDkon4w85G1UTk1UgCAUnh7s1fetL5pfjBYGuvVW5sEodn",
  "key23": "qbhF9siH6kYCAEYDn2kcpB1Uh6S41cxwazDPbuyLe4pHWiVkgAS65whknuGTnqgrFvnSEKtxBsbd9TZGYHvKt9X",
  "key24": "2tYmgxQvR29NEBiBvZCijibryCBkkWSBdfyokCcUeTPAbXzcKCEH3pDMin86sPu6vBAwygBGnK4hxL6MTmJk3wt3",
  "key25": "21zPBhiScbWsQZYtPwJzRk3s912zk1eih5Lt99FvdWgtuTgm5ms5pG6biFWeJG5dF6eGxpCPu84ksEVg4SRSwEgm",
  "key26": "2MEn7wTUhLcMy4bmgBe8Dk35ucnUWtCxCGJrTHgAZEQGNvCMZ5Kg5pGcEsicFpGrMGbUmZvCqSqaQ4BNU8yf8tRM",
  "key27": "tSe8TnPN9Gmo78RJ7VwSim5WP74Q2DADL2RdW9APb7AeYiLrRkEo1HDmPQCTp3mEFJ97Gcf2pTsHjuPS1Gx4Pf7",
  "key28": "47YYMy37sqwuomS2CFnuvVmovyd85F3Wbc2PquVMxi5B6oggiU8HtpF6XRkRd3UPDVhfgQpmhCnY4i1Qp4BHNqKg",
  "key29": "3hHUeJLNHEEms1Tux7dU9TgRN4afHKabDFyxy4z1UjxGxqu2AdLzpru5CWefZmjtHzG7wZEiVVVVi19bRgNkDdRN",
  "key30": "8TfpNZ4FkUhZAwnrevHh3sreHXtiVDMX7ZHo7ryKzkhz77XQ7NxbYtGTBuUdix1WQg9fizBiScYRFYCp868MfpU",
  "key31": "67f5P2AonDmDxPm6Y4tUdF6eefkfL1jZLmC2tjaLVEeiJxG18iXDiwfYAE2mAM5Tw8dM8Vp3ScB8Q4fnrHN6ewtc",
  "key32": "NEsXw9pxVTiY5ncobojGLFiHyV6pPnH7yuHSwP297vdpaLPWtjnZEHDN5TcBAyM5xG72qY9nVnrL79GdCvyQUYM",
  "key33": "5ZQ2wPcEVgxXC9z46ntypcL2vymRF7tk7izd6q5WfQXjH6JriYgBQYHxj8PPvWTPP2386aSyt6xn8fp2wRBcVKBY",
  "key34": "4netgWLN9h67KqAaSaAZTfkuLY6Qk4jNh3yjpPHj7ZPyuUu8oeqV8X16ZNRhBoEKjDffACTbtUhQgNtB9qGo5NfM",
  "key35": "3y7bh3choukTAqkhMJ5JeU3sKfy1TvQ7ALd2yWan1grTrPEGJhwh99ZRz7vtrJMLkAGSDBwwdtV6MPrPGqme19gV"
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
