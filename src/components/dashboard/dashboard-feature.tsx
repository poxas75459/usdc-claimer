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
    "RGkMWWjY1QQJeUonBbMxDu8xhj5VyYPVrkAwmHT65xGDJfV1xCrSWT7rZEvdXQ1gtwMp5p8CYrVRPmQYmi8L5TH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JwG9UJbhktMCCao12CwkpRsrxyLqjTpZVRJ5L5Uhz9RbY2KqNpCdH2R7f8jD2ZHZgcjmq6gxkRQ5fUvWSiV5Vf5",
  "key1": "5ntuxaYUTk5YEV9hQiEfh3M7xbZoLd1y3cge4Z7nsNWrEi11tSZ3ekeijTFwPGbRdHZvntDmNmnXJGtaXXq5VbTR",
  "key2": "ktBh5B63in4bEAicmhsGvVWkJrCer1C9mQYutzEsmczXmcpR9p9oRhm6pMDeynjX2hiQXtX1j2ii8LQsn1sAvd4",
  "key3": "3TVn9vR6nJkwWak1RxpA34RnDsN2nReJTSJpq7to4e2wED2Ca5BXT1sWQ6Dojqve6ihPPuENYnRg9DAtMgfduaqL",
  "key4": "jv2CixPs85n5Mv1uiCNRDuQFD63RV3bA9F6PZ4pRo5eoQZiCPPKEHBPe8uPAPTZHDy5FMbKNGNJyXr5SGw5YnkJ",
  "key5": "bCEV6efavuNDsYKaoVJBnSBGhn5vTJGuFCVyF8MxdeA5J4qSoJo2eN8k4hy3wB36nahEwG46wVee9zYM6c2irm6",
  "key6": "2hrqb67Xnh47kDLEVMQorHg4KuZL1Ne2oEEM9if3zZ4PapTpQZgzserSwM9TFb9t6wr5abAxHCoKgPKvmVyV7psB",
  "key7": "PjnxD1DkeC9t3FRQxYuKLhUMvgPn3gxErUmypDMqbFcJQeTAmgMj5dAcJpx98cZNrisiR1xeaBRAcCXBfAdtU6N",
  "key8": "2eGf1cx6G7BXvczcRuWqCVtbT32wjGunUXP8bNzHQrjDbeTHjTiyR96F4do8AmoZtj7fpY36QvbzunsdL7Fp8KkS",
  "key9": "4NN93z1dDNNXisU6whjejJPEJUThXCpxZKT3JAM6Gfvw8AD4cBpNNqGaJ1rkk2RxXyYdjUmYURGx6iswPtDM9rEp",
  "key10": "emqhhUGMmhS1kapavHmQBF91nrTDx8H5R5SjFq9JVZep4hFD7oP8fgYRgdmygStHgfycxXs9H69sxnnLP5Nx8iV",
  "key11": "4GM3cgEB71JbUK8VJsu8UeZL6ECdYeSfcH4QqqfmSa8eDpe4mtSyoTh9ihZucktbS7SAucRtyc6D7KfmHPWQu29R",
  "key12": "3oWe4UmnAsGBgVCSaHtFoxXGxgdby2iY67e6rWQRbqTYKCPDfscLTk3A95k4sJrd5PHXBuoMXTb4f7ysBoseSGZn",
  "key13": "5D8Ndacxwo2RJWJN2cwVaUgJuLVz8MMacB5WuPhJqqRLoBsZUnocrNpNdsedwtNDGosrBkogKvRmQjW6xnMMGG74",
  "key14": "tkrPwokDUW8XqPu3vhooGieJhjVJ4Mfta3wS4BhtDnXzn2PX5cta1XNoYEE36yrpNyGk8ns3XUYxxxMjfzbZ8zG",
  "key15": "5oZhXLHw94prQnPb35vYA1i1MVtb2HVJ7rW6ECB45idizYAbEm9ZKMmrM9vf1nicHbF3Ngve1U5PBo477WHm2s7C",
  "key16": "54S9MZgs7AcoVbCeg1z2NPzdzunVkz1J71QeoraSJqDg15C3z1oj3aokxRVKv4RkhDB71urpZ364J7LNybfqnsiZ",
  "key17": "DcTG9STcsUXytuk81k2gMh4awJspHp839KvnEAdLZLWEvAcxyc2cFt7iK8vvGF6uHGAZgUK1kCp9v6u33pLh9dM",
  "key18": "gSR8vLtMa4EfZEiCY6Dt6HwLmDC6XnpXiy6MUZiny8RJ75idmr7aKHa31M9sBFwH5EzKdao5GX9akVycUfw5Jep",
  "key19": "5eR2fTNMzY3HPFkgtDofEu8dvpjBEZFT5t866tirowQb75XJSFEXuFtnHqiTju4onzfz46jMvPu242zbpr5LtoWL",
  "key20": "5iJUYVxUXT6CcfxJYLWASQEa9c8aNuVPNeZ74j7nVfNFneZcbUUAQoAQXyyXXKgFWSEtCCkQuuhn36z6TUBuiKR1",
  "key21": "3aJRZ159ooyURzaKQ4ufJCESGg3r4s4nJPL4JMMTuoxMHq8oj47NQukwCLUjS8d449U8Dg43YmrShgeVXRwrdAAU",
  "key22": "2c56Qv2bLh78daFSRSsCybWjGPRQaNSnutKk4vyj53keGTpYwvADqghJgn3RM47kUJ2FYBaUaqw2rhZ4MJsQz4x6",
  "key23": "4EzZs3S32hd2eYJfuVhEsSDmnPDas37X3vaSwjMpuuGUvLaATZQVoCCnjhjvRTsQQtzoB5GB5rN8JxgNohW3W2p",
  "key24": "bTHTMp5siwLCiz3ELfiRd6pmRL2sDZzTgeZNgiu3WmiZVpkfQpALxU9jeCdaCZ8VdYveYJY86AzREDC9RPyKnj2",
  "key25": "4LhAQGrZsx3mmPVPXm6KtwFycchachWmqNUaphegUHw3uLAoioZRijQiXC1prugGGTdP6y4utGEy94FEQeLAkZWc",
  "key26": "22mwBBeNDrzggwpVukKuSmkK8yzYSh4N2dFKGFu3HFBZKqZ1M25jsE3yrxUUehd8rtyihY57U6LrinuVyFdcxMob",
  "key27": "5DCRPpNpFW7VYjM4vc5AHFrGFhCZfBEqVMjk6X1AwQ2aPggryPNeMVPyThjURACfYXSLb3QqLrdKBeWwFjQeNq4q",
  "key28": "2EL9bomLZckBen6ki8dWFpy1iKTYXVU7kM5dzanjZiDxpBnqqJr5fFmANRq6CA29WfHwDbgLNAotv2BGNww8EWPT",
  "key29": "3u415CR8NKsGMs5e1W6obnYcxdBDsZ8FzYXmRSaikagMEWptQdf3GgWCGkjq8fvDgBzmYLVFG9NZc2dUkM5tzq9v",
  "key30": "i6geyziWEDMErfSaND8SRbHUwbLwr3Xp4gwqEGLem6bChjWkeia4s8J2wbGZE6vFkjDAFnHoDWPZWw8gL4mVYUt",
  "key31": "4kzEgPR8sPX4PaE4yUxXTXJY3R8krfGfv39TSS8crEqhqKFLRKxsC1qVw9xUbEN1R4ChmBw73R3wUX7W5xYuHxEo",
  "key32": "28mpYQ4Px1DhA8QBgoiJ7R3Y5TBcU98zw2kxaR2M4kvorU6Um9tSP4TAmmRHCMVBaCePxr1A5L7LcPCsCEAgpguy",
  "key33": "5DEbP7FjxQ8kQvU3gX1me4CnGngu4Mfno4jgKyCQZMWDEpcv1fKeYmhbZieZntzmYYRmSaUR9PKENvgM3jBFGtx7",
  "key34": "3bsQknm3JQZtUfiCxjKqqWLkJQFZxGnb24kxWCMKrY4qwyQ2wkqMsZM6uQ3WWUDBW8odun4xeRe6qpUGFcZWistE",
  "key35": "4zJwrHWAez6hMG7969GVCjA9QAT4ce6oMsto5inRoG49bCJytjB79W2wZ9Jii8syMcWTgXgK4n8FKGKQiyUcFMwZ",
  "key36": "2Uv8ia585RmRdd3S5DR2tR7tNjWpvZbSpzt63ZQye4GiHWV9j5Y5ThmHdcLpc3aLK72diPVazBhGmNgu972E3MR8",
  "key37": "2KfjU9npM2zE8bfrxJzgELZtwkQPwC5T5Y9ctW4eLjJzabyVE6UxzgdBE7wNWPcJePpktbbgqxrTQeitYTja9EcG",
  "key38": "4kPNVjLBNu8C7ZpEk8811ysHzwGf3i4gZB4Q654ekYR4jrjTaPiR4Rc6ZtP5jEtimhrcDYhDCXr6exEnpiJG1fJG",
  "key39": "41areiUtLAsKfqAkz4bGF1TqfDWTJSe4c1x6Xr6S8uLru2yqNBNYbNUCJLpYqwDJziaTVNJaa5JaNLtNgx8cxQV",
  "key40": "3KS22SeUpo8Hkqs7y4nCRTh1bSSiCyisPL4EFvq336BwXdqwc8ThNcZT7F68iaiDd3Tgfor4bMP7nC7ybHdweNhw"
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
