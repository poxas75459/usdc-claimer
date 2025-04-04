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
    "5UGdfQ2Mcd9Lydn8tm8UfB4YFZk91v2bkeBwysYNbSujW2TvG7M8eFcTSCTSDjGsNkZaTBaSwn6qZuZfSKuShRmj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yAm3EVvHCdk71UjNWjiqmH6fYMcpZMzPEWku8BSnnKL8JdGoNrMi4449kA9kyZCMGdi2HqenCxphM8Yyi6r1cVD",
  "key1": "5u27bVKwX6N59cRT6c4RNmyHVfYBCNQcWZ4LECSb4LQrYkMJW3wbsfo1hKyqVmCs9NTFxmjmqvNekcCx1JNawBza",
  "key2": "3ySsYyDzDXpTXeLtqUmBc9VXCcVcZVf66Z7TR82YaJSFZPpo2z5wCySL1LroBcR6SzMFMgcN1MhAzcDUVw7UV9th",
  "key3": "44DkbJVaBEDZwEhCu66Brfv17BQcR9F8b4ks8qHW87D9d9RS61Ue2oCag5bd7cYZNuYfRHQ6NPvxTPuu1wbLffee",
  "key4": "3abP2WXEpxY49h8e843STMqCjjiTre8o2mHWyZzyLZiVzHPAEFpVL3ez8179Z5TumKk3APuU58u3st1edqfnKNgR",
  "key5": "4JteJR3ThCrNKTEVpN9ZDm4SpPFbexCrokEUJfhBer7pCgHs4ZahkrXJqb4Wm3BaUu1ygGkbQUsYjFr6Lw9ShRNq",
  "key6": "31fpmMuxEFfWmCpGVtPPGWoGQ5sUYQdmDrw4mU8WHuJoR1GtbaQahwPBEtcmV5CqSywDbkjWGSseZBHmrkHCYq6S",
  "key7": "37uKGD8F1NbAuV8bthQnBZ9wQvj3s1YbPPE65nuacwBkskqUYy8uGKuBVZ7AfCXVGbf6yT3K2BjxGa7QnW3rJeBG",
  "key8": "2fzmLm6dfaap7Ytgh3YKqQPDpAnnAZEZKQWhbbrX6wZWU562jrjXyDf1mZ9kP4kgqSb7z5WefGsn86EwyGa5b6Lb",
  "key9": "4kxxwKEJzFgG31zQBjVvzmj5DGPZQBs58oMBGRAUX5pPmyV6SLoS2j1aQiKdr9rcgJZMVgiUoAwGverwrCwtgh7J",
  "key10": "UKYuroQNUBVL7NxhMpXn1sMbhZNJYs8rGCJ7ENjLLnVCQNLCqTAnRUVq5EF2MLuQ6p5qVgCCMEAh3oEBDNaHtkN",
  "key11": "44TCx9nmB6t8qLBepMcsSTeX4eMEVpf9Y5yTXj7v8M6k9vng2M3XGDXAL54EBNRpUPEGoTNteN9jgEJLMCzCrDZH",
  "key12": "JHUJfUxPcytBUWq2RqA5RcXL5Wq8sNWzrfNvJznGfdr6YJ1jyT1jPbDGXDMMiFMAZRPwbwPsj8M4qopK7H3SqDK",
  "key13": "5AKKZCcLzLK6xVQhiptr4ezdUQQC5N2nQk97LtbEfj8D7YP4oCfNs1C7zTJPJztRatLUvZu8vKatHigqsgr8Yafw",
  "key14": "2wxtHCJcdPUeH5UAs4RvhSQzGREHsoDB8b5xcbhUjw4uWazU66bxA1Hi4n6es916g7Nw2T8tnnpiwdJEPW75pquQ",
  "key15": "LSQPqRN6qXAg5cEXWVzkUXSM9bKdvmFFiaH6gsdFFcaeJsZMVG1vvbFyoTxEnPPF8moiJjyBthjxtYGCtpkQruB",
  "key16": "cWtrkGYxp4fjXnKN8vqNUHa4PmrayknYR5uxCAFFG2BimAM94xgFxngL2Z2fUfAhaT4cbNaFjj3TRJDsgMKVvWW",
  "key17": "3oUWmStSgKmDZEvkrBWdmGB8JS9Ps8N4ysAythQ6ckh4yFviSNr7rN5NPLBJyhDA3tQt5C2EVYYWwLq6shQnSgss",
  "key18": "5fxAQPTRCP2JDehmsztBwRpFnbdfG3sq24bMj5PT68X5NodMNz1q1R7K6v2FWRxvPNHKJziG1VfRHxGpd1MFXS66",
  "key19": "2moBdYTFeTVD5rdiX94u1e3FwWndnmFzyjMy86F5UH3NNaTPjtxybPutSwPpyx8GBm7MWeUC6VvCs3jQcgx2FkYb",
  "key20": "3MhTPvfUP8HshKUQtRTaosPUQHiTgz1JBf9GXHiy7aCyuoAv7bMbGS3HRvYehbqcwv4w7rVa7MKqbY2DbisHfZZ5",
  "key21": "5G9DRL5Pjt33eL8oiw4BwoiDhmd43mnBgfH9TenwTComqv1kDzQfWCPWCoMRstSn6bggj2cnhPNzneP5cJFisaHr",
  "key22": "2WDwuMwr2DNRLvW7B5cbT2FKarfc52EFxWiihn8DGRyPP4So6KzmWX6eWRVLcs3arjgnMUq4pK3FrPiLj6Qm4gZM",
  "key23": "2H1VrCXSXeGxfE62yy8NXKr4depUHdUYis8Vt2dhGpeXWuHnPEhtJCTwAutqpmqA3M4i2U44Y7XJfWFnW3EyVAP5",
  "key24": "1pG51MV1CHuu2dPM92LMz5wvhrA1qUY6bM5f5NqMBDNb4ksJ5XTuPsHVC7KjANx8nNkCcMvmBG8Ze8sYSSKwrY5",
  "key25": "4b528q5qoSF42tsFAKGxA2sGwyhhngFryNt1uLLXvp73GnEEVuBvffcjHfb7aYeGrioTGSM2TQEwgZXLZ8fvjhMZ",
  "key26": "4SZM3zrrwHa7v7CwnaPjxDhbJimm5EY43dpmrQzdooQgvpu33JZ6FY8PVDgezf2PSfE9N3BWNqH66Tbh84ZQr9U7",
  "key27": "5nZUPbty7bgsLJAoNp8sc4kEPdhvLunqgYfiMeRGerZ8Kybxp6D3TaEmA5c6Jc4tSxAoHQPnV2XABsWhDdaLMMnT",
  "key28": "3JDMy6B4r1csRJkKJVwF3EfEuHnMNRoWdtydqBnUw5cK9MK6q4QsBT6kh56bCEixcr7Rmw4ddvxkbzrEgfaFS695",
  "key29": "CHSzySPQP8xB1mcM17ffRKgy1TexVaaS5cD8CHqTvAMgfqf8uy1XCtkkNJk3DizS1Mj9CM7y5qciwE585QChzR4",
  "key30": "5mfBz9Ayx4joeQh8czR4kgwE3kxofA2AVWAMkcoN9y46VBkpGdFN9qp7PeZcpNgnwyHeGxiqnQXdgKBaqzsW1zBh",
  "key31": "5WycnUWCF1cs8r2uNRY78cw1weZcFTeyEk7F5tqgQZFBXGAH8wdPMw3K58vBsH5Haf7TEKxjPa41BeZJDE5P7Eou",
  "key32": "2KyFJqzCPu7moRveDhdRWjyrb7pQpTuq9fzzB88ENDMXPohD3Y1eHuNrYEirSNtjFQNznyYjJ4vmVTQUBGhi5H1Y",
  "key33": "5PKNNzPRSVLFxXaZg2NxPRQukVhi9DSJTEGeL9wp4g8EAvqLmC2eBiKghA3zZqq2PCtv8neRksfVFKPyVgcNb6X5",
  "key34": "2oyR2xts5s2X6KpZLKoHbT9rMATNMSBueREyGtnP9xCZifRskksn8PrkMCjjwMJoCLobGSQspAXZVnUwh6LyzpfR",
  "key35": "5RiyEUFDxZVxnPwyoGseZ2x9nzge6DiKzQbHu4yiiPmvYHhnobXHQGGswmVztoBAKGtrqeQS2hJTPyvBzuRUE4VX",
  "key36": "bDoGM2mbjeBztaP6myBtpkEkAbVPmQdcYr3GD7xB4r5mCNPQtuFzzszHpiK6ivcfxr7JH8BWSidA8AMe7CAeAqW",
  "key37": "3piYkesnKPDpCi1ytqkHoLDNg34ZtqDPKgeYwEKCxi1g5p1EMGmBYE4r1qvJE6otnEdRgURGZDGafs8pP6ah514w",
  "key38": "4Z8uMqcW1KP7nVfYExcWVMZAUx5ZGgyJoc1PNC1hFXF7Uq1dHFeDes5RuexPiXde3LHM2hKecg3wfk1YZ53PpD25",
  "key39": "5Nzvt6tryTQCauTkhXTHYv6b7MpuNXWTAYvfK3cv1vxPv2JpwQGUnbg1SafMzxEESdCAnLbh2eYiydh7VDj382ho",
  "key40": "3u4gNRwXnHf2A3fuFaS5qwrjDxRKPr6snT5a7krM3UH3kLoCX2L8sWYHHG1xsCgaQUZDMinUGMm9madxBstyUDpt",
  "key41": "2QVNSEeQ8c7NRX21u4q98FNx5nEHSKuXmQ1HQRcDzU58qZxUwMGjoKN4XFc3XWHBRZbWowmCfSkwZj5yHzmmZ8g9",
  "key42": "4otJA1qxiE8ZsHe5QbKQL5hd3AXarsUKaNtySx4Yrog3PpEC61Z2NqVAtNyTUMNfNPPpibtKxiLRhZwR8DiNerE9"
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
