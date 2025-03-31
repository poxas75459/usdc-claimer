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
    "3aCW2mMNXRGJ3HH5DYuaYRGvn6d1q3Ygmd2MECUiqcXgmQzZEv695dkDQKw4WFQBYTz5NfsdtRHZ6qaic9exmWJ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wVWZdMPb6aimvmdjojdhREJma8SgcnecFaT6xR6qG7h1m6qdhkjxpDaUJTbgPN8rh4yWWf8bpvvTLwxZ76hQqiv",
  "key1": "2wDUnMVPn9S1f3QYs1e5A3mg1LGCkBeExjUPkLKQtg9huqUNqd3KcYLQqsBJuP8avLdVpEpgv47vqGZnJahTMUMH",
  "key2": "3GKUFdn7c2z2vyFyaMUrkkkMDY3bHyLRuLVff6TViUMcCfdkemt39TmCePRKn7jRkCvqtYC8xZakP286eZ1AnDs2",
  "key3": "WSvebUCuM2bshRTMBsf7GiLijarnJ9XrsCvnznkvgt3735Y2xk1PwNCgfHZFGsrWWamWSBoetnUyD7JGsE67RLS",
  "key4": "n9JeCxtJk92NjNx7Jtad1fgF1H6eUPi1bgWg42VYAKFjiroGLKtpPStuBvxbCbo3dp96wRLs6CGFNkdmN3FBi8o",
  "key5": "4Dzr11PV4a8G49aWwSwUMpTgasAdaHo9mx2XZ2XzbKGGX5vioPx9qxZcce74v263MACDNHor7WcP8XD6NTnqiQFY",
  "key6": "4HjJycr6nwyttHe1b1X6JStmJHUasj6kQZDSSd7x3r1NuAAsyz7bZw3aXwBF5qgPwrWmVqVagVQexcWHLGkAVufW",
  "key7": "EfrCofMnL1uNK5E8ZSpBQcy65U8kQM9u4xEdQzXUTZ97HVpTkEbKLNMJ7PJwFcocpxRp9zmate285D63axLfMmb",
  "key8": "3J2spcGXZk1VyQ26G6d8C9rXTV9ur9PRL5RNGBjisLPZThCwuCCm2LsDvHvSgXTAvqdsDnYP3z4JnSx4YEiim2fV",
  "key9": "2JmPQ5F5zk1dSSAzLVWsYA6pGgYNrGCdv8M4R6UYiC5NoDhn1P6BFr1khMqq7cW24DSEm9ZUY8Buz4MA9QEN4Pwm",
  "key10": "2WCcyHQSpns6M5NBXG2FZr4QvPk3yrMfG2o9DbHxJ8A3JTG3wanpN96jcyJfV4iwDCeug8TiuCv98RV1VU4ha14r",
  "key11": "2QuE3BKre43GDSAQ3FHFmorcNTWoHHLXos7892QnMVLJB9nWc3SATq8xkNtsmT2LLGz33UCVZ3bAzpgLUa4xeuhV",
  "key12": "2VcptGYifuJacP2foqPr68WBEMnt8D7bBZaSNWxzayCyhBqvTfPr1YgG6d57bZmfhzreaKLvZKVypmdnScZ4fmMa",
  "key13": "4Uo3QEJP9ZsWYxnmDYmcBPtv7myJPMUuhe2MwHpXsLQ6VH2ggctMpQ8ZRuB9WUP8K2gJMEgxxHWYKmqtQBHSYvYG",
  "key14": "3eijot8E5Qc5Pb9JvutuCHoiNqgG3E4EjuMaa1ysBAid15eUXfxZV4zjbReZwTMtcgW69M1J3kKcNdEAHsfZb79A",
  "key15": "5Nnvb94CoTn7NKPBXkxLhm4xNFdbu4cEUtiZzvLAX6KbBGzX2jpGkfVGgZrfY4ZoQDvMudRsHbBapA1QF33n1XGu",
  "key16": "4Rr4rauKRhGZGyXgCe4khU2mx75ALttcDJrchWNu6p2V6555P9aEjdKX6NZmvwE5raHsHbRsruYtZxSqrXRUsyXk",
  "key17": "64kmQEKK5t9oeJRgUBBzCoZzqq8b8JFE9NJKzoFyjB8LecPEPBxXYfdn8AuHAKxmyr7w8nFL7sdZmoQV2F3PZynj",
  "key18": "4rEhNYxW5e7fkJYUeHA1DbgzhgsVtqcWASDjHaNCz2fNXeWs3VG1KNtD4SUzFief8mPTw9cXyQy8jb5K3iEJpHPp",
  "key19": "24mypQUG2LLdFGkfurtZqvhup6nnnZaKvy3Pa6uofCEHLcGaPPAUw5Gv3pm7dPhePL2aEcyAFdB7kHsDGQGEXpfT",
  "key20": "3cLPRya5pRV27EiVRZ3TT9wc2wfJDzkZoLp9xfLKahkDyCfu9ojHwVcpsAG9mzQYX7APzUZFsuoaq5VPDULGdPS3",
  "key21": "4CLidYybr5zJdJws3yJywH3vLjoHGeDKJvvGzPCYNwdUPpY2krA5MsPNGPG9c3ZamGLoNSxYWSBdjQ6MuTQViN9t",
  "key22": "4QWLYKtfaDHUVfth7b52dB726fgyvw4TkSfNwRdMh6xdNv45jvrNZxk5b6UcASSiZ4d7QnJAWWP3DN8TUFjDuquv",
  "key23": "kJbRT5n2caJquo92oLzRthvoE7wNW9F4k1D33WT1PEXBwrXabtUGtsVMUhxqAWhduafGp7yUq1irKKXMKs58wB9",
  "key24": "KMMLiPD9h6QSfHQ3whtJR774sXbqa7jsE818LwGxeBZ9Xx7RMkUGYg16ATK8HYVx9MRDPwWUxz9e8MRqFDL3p2v",
  "key25": "46Rk28FfJbNoeepu86R5fBkQK8skSMoaCS4FbXE9q1XvPsRJfYbmFKU48HiVfzQjYXJwuNdsYDwtcHfvYLPrxRsK",
  "key26": "3aXnxErQYHBj5x6VxHRkYRRqDAAuNBkGQkeCbrJBLmvdYmTG8gMnGherdL9D2kHCtfhQeTKTLp3KMhHNUdMKbUhJ",
  "key27": "4LoTX2EpQEdhDpGZPZtEyo9eZv5hsCMQLid1NkiBH7M3xzNy6FyuhEnQWaWDrzEvxCuZdGcowXLJDRqEyXrdq8Mw",
  "key28": "3aG38Kz37Kco85G762AbeHpHPX5DTqrvXfjsEft5ZnsPoAffmCqnMTMgx4d5zCjcizGFvykgQNE9UUxcmjBBWgsU",
  "key29": "2CxZ3nN7bfeDR6yQChAkVz6dBFN7BZCSpxH239XCLwAT1jgkKg59hcBzb1RCewf5PwW5Lf2vBjPL1qJBsGYBjaKH",
  "key30": "48co5ioSL2RAGrXUdVWNigo3D5etJreQAPX7SYG31CKaiofuPXhqc8YgJLXoaH6ARQfwKGpoBPzu6xWxiyinLDiG",
  "key31": "4En9JR5KDhaEQ55EzFxiBZV9b1GuQmBZa73DwxU37Q1ZrahZviKaYovHKXERBL3uWixoLetGoLtbD9YErnn56LXY",
  "key32": "3sbVnXfsoYRW6o16KEfDJmvyGGzdKziwQTe7XfdtwwLySjVCQNAqGC3cFvW642vUjMFViBjKFWLVgpirJT5n618n",
  "key33": "2dbAsx7GQcfWteE7fYNJaXVGPmBTpogSPyVBqH2tZX3JYpxtyGxf2FzVeMEACAYyHzyLjMmUndyCo2xmfXP9SN6d",
  "key34": "3VJLVYwv28foXkWfL7AtcTuRpwRAU2DDs5Jptfm1Q38JEnuGJxgFKrwme8qhGPgytHZNK7Qhf7v6mRXwbum5tok4",
  "key35": "4WqSFAA9CHtGTFkhzKpqJ3gmE336HP8E1c9iQUDzAKr89tLL2iQmMBuKV5xvAJ98WajUgzjQH5R12VUPxSkfav9v"
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
