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
    "3rRi1fwRd2ciRFxamRzYdrnKU19VGCsPtU2mkamWvpAK8VrndbW6GNDKZKBG9KPMeK2xX3nJQHgJwAPP1gWkW299"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zSYmaUrwU8D6Wjfu8siaYP7Twyiod2RvZATsjAQEqxpqERY25f1FZ95j8KrxqooF9TXcYirq6Kh3TxF8FNzFk7q",
  "key1": "4Yn9xad7ZzM9BDEHDKQ6z8Dz9P162NenAbLzpyXsSCX48ttGmrZtLgq2ifPjCgp4zDpRsfQfEQXQRciQkoYGR6V9",
  "key2": "1J69efa6CXry6zJRLAQqLq9DvSwtiCwRKyWdGuMCjwtwUpW5FsfJcE4fejgg7hSt4i2vHSF5RctJ5VrbMapwvYi",
  "key3": "2romiueeJw4ArJX3qdkJ3PaGe6LYhmiAbKqeJ6UQrmcVy6Xk2nWSrS9ZhhvUt7NagQmjm7KqfxoZWyVRdZzMPdWm",
  "key4": "3yJhdo6aGvHcRJC1DEkv2hpgpasjLyDsVXdFendSB9BYw5cXJv3Y1qmNnWNKUeh5kuwciK1ZuZjLHV2K7o7cpzUZ",
  "key5": "44zA2UidR8geXS6RZhueq3iCKqQzXFuouF73dobrEigAc17k6NvBvCrbN63bheHFxFggiYKNvftj8Qw75qvFjCxQ",
  "key6": "417bB44td7NDeSyv3rNQyiea4dqomD29SiYE9mH38vbEeoCrYbrKJ6yrLYQ2gPnaZ471iyvY6pKYZjzkWMN8Sp8c",
  "key7": "52kyj3hDWsTRbY6qdK1Ung19YGeLg6uwbb5ws39PkzHhsSsXSVycSUt5VbpCWsTiwLQcMUiadDPSWzTa6ebQhWBB",
  "key8": "5BvGmKyYuzraQhJeqtyvUf28qndhvfV2yvaomrsCQarLn9zMVAswErEP5zNBt44R6HkjSE5WAdV71gzd5h7GLJCc",
  "key9": "3SPryaHgTUNmSv7nFiTWVnMAuEYpJS5pa5LKoMBZeS2uXhREkZmHpLzYXfL2k5RYhGdSufyooQsBU2cWraoYbByT",
  "key10": "3YFLVuz2uazXE3WAfLppP3u7Guz73gbZPBpAC6hWm8HsUUPNphFJFgTQfStXaCbTMYxvP6UE5WQPA2X3byT8bDaK",
  "key11": "3yAqE9dLDLYcdnnpi1baXCqPZmk91gRu2HaMLvCpLWvdtamVfLiByuhqrDra7NYZfQDBept9a4fZZvjz39ReQmDG",
  "key12": "FE6Q9uTLzePEjMotx3wutVPRBZ1hRvC9qYa2e3Tt7ZHW8mUCdBegzVwuVDxYCGuXT3xQN8BuFcgTU11uBGaN8a3",
  "key13": "4iQhopnWpp6h2GbjDYuDGzY7Mf68oth7Eu2vG6P4WvRb2TeeERTj3mUtj9EdxW2g2RyCPwEhJoD6swqP91FudeiA",
  "key14": "fao5WtMXtEi13FnTkFZiJYUxrsXe5Kdp83H2q2Vv2AB32VoctY9ptQBqNZ6VCqDWLWAawrBmbFdCDvw8rCL3KHL",
  "key15": "3StZFEQYb54PTSFakJhsE8D4XnLZW7ugcjYooinZvZgasEX2HMbcjFZK6K18RhpFL2nYC1fDx39QvD86rFUhMqwX",
  "key16": "2tsppYU7YuGgB38vBE18cCmm6nMhUsHUqnA9TXpoeaGDEtUSPayKaNg7V2wpHc69m2oMzVN8Nw43zXGy4JKN7DCY",
  "key17": "dviiZw8X6PyYu3W7G1esE8FHofSecuCE2zUxuxfYMhim9zCDiPqeadG6XuzwK4Er9HztfSsHCch9S1SY5ZfQm4X",
  "key18": "4bNehbsVqsxuhQMFxiyouA3UEakCbb2e6y8WfXbrPpfkG9BrRXce1jrM9cM6ZQxqgCA18eJhUKuk93q4kzZKmAWK",
  "key19": "2cwWsQEytZtmFJwfgR4f7G1hmdTs448WnCxKnzs7nvJdx3h2kiNu3bq9qWes5y6UupC1RrDBBWMorbPjYNNg81bs",
  "key20": "5GF3KanQU9trqTzcS4tK8fAFwvx7nFAd3ymyNzQhDpWU3YNGTs5cSK5CGXkHzvBnFWMugj8GUAdYoAvB5BNKtSFb",
  "key21": "4m9omXTK6Uj6H9eKkemTrDbm7wKwcFHqsm6qs7rR35yM2PU57bN7JipjePckzbAUCTDkJZsgCGSke1MZe8Rs6F9z",
  "key22": "4H2NcVWAr5YxFRsjt3moDiHsbhUZ1iYChpESv6GDCSxsNbHvJj5aFGmhaQdUPrBPicWYncq3WeGpYweuzK9VGqcE",
  "key23": "5RbkGXLqEsMfBqxwCRHfSiH4JR1NcidPx6dGLLpPx1m12rRvkvzY5Ur8VWEYEpbLM8gZ4F7uUJbbV9JZDQ9ifftK",
  "key24": "3yLi4q7XV12Hre1y45QG9BxyhP7nEqqzBeVmZpKspdyotydTnJGfsH3oxWvwQDPsuLREBjbsZ88whR4Akcxt3Cvg",
  "key25": "54wVSeYVm7BHByRBGGuFbQ7QX5xNCkDmCNWtEGTYgm9sY2ELEM7kWyZ86PVo67REfrUipPNHXxAM5BJByVHB8m3b",
  "key26": "5bBkbMK6dw5ziUbDmXC2g5PCx1AU6BsvVN9Bm5rq2ZEsTRN3577HATk7wG3ehNLYXvrLT66dKwnjtFZRRQweG1TP",
  "key27": "2hQuYoW3z1cZjifdJiRgjXSf5wNaJ8U1E9YX5b331gfAM5J1mHZvcFaxK9SggQeJo3pHYfg6mVAfBfrE5txTB6Fj",
  "key28": "4FZmKKgVvtpuVpE2DfZvCfx8VQGCaYMQ5F9p7a548jFeJ18bPtxyGHYfCjNPTYgRg8swgn9aQ32o9s2A6dAiCSmk",
  "key29": "54HHWkGiFNpEtjJzFdrfwHE7qWzPoYdqgbMWNUxohrc7yyEX5LSSJvim7wNqgph8gXMxzycThkt8rbS8chGNko1x",
  "key30": "2kcZEVBgcnkQ5DANPdZbXhWEDiSt2rXU5yQHeqHg4jLBmP8G2EC7csVEmDqdRhPoRtDh4amuhNyPscgCsQmh1v74",
  "key31": "3SQ2gPAAt38CUu5dSWP399UCxd95mnRUSYUZecTdu68gusKPhjtmoQ3JifCX8fQULzsqrbaWepaid6HdGqa2GoHt",
  "key32": "3GGiBpCRmXaF1nKMu4h2hBzxwiNcwZMPXZ3pYWpv7CCPasc2EWYkbPzGscmoq1sSDzU6KF2k313aDwivCbHLWwef",
  "key33": "5qQ4NpDVPvLUqTsKYbnsqwU1MGLGbudcA82JrwAMLJzQjUY9SPTQ6aEAtmdv1xuPbCGRruY9QdcPHh1GjF56Zggx",
  "key34": "4U6X4uNFccj8fu86mjDsoU22J5BKgTPMqYcjkYDBkr2SgePSNydrQBURnfDkA8oTbVjT8QpgpiGvFWyeWVofgL14",
  "key35": "zns3NU1w2yoBVJFYnGj8jnzXwrU4BwH5Sq218jQWBNUNqzF7Lb7SfuPgCCYrjDxz1MYNez2BiPPLTHK3mKB6c1L"
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
