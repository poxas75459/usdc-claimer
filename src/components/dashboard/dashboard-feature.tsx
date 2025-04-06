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
    "dRsSHntC6SqTFptyogY7xejQqtzvdhDctL3MuMfz71R5V6AaJw3XQSxXCDyNF6V2Bizfx7GCKCD8q1n2LVWxPH5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EYU9z9fRgyBCh5rYkKx78mwvfHHNgXejbBFH8UPhq39bVr61UAsHh5zgC3k1oPZL9QS9W87KMvST8jnzuym1nQr",
  "key1": "ZokTwCjW2NxmxqW94ZFFHY711na1pW81uzkq2iHBbrgggSXTuuVV1muFinsaAgP6W5bSJ3MpLuHng37be3jnTqR",
  "key2": "28BMGSPWYJ8RYdYxLif1VmiEQ5cA7pBDpFDDupDx4GJqtkJ3apapzpLsdMJoPgsFCwhQ4AWGEvx8yAF3XYbkPHhB",
  "key3": "453Hhm2kR3PTDubhURdZReSPuzEQoMrbLVzzQAnuy4hhZ6ESJM8mGhLgx6Ej1quPajDnJj52enX8jy1Pwp7FvtZi",
  "key4": "5rXXrh8qXF9vYmQWiCP62Nxrq4qcky7xSGinMsAtEM4PWP3oRnVfvXAiYBA11bUqnTFt9vWsWkA4XEZiutBgLbMu",
  "key5": "2wDPjUmLToneLMSuzddSySaAYGDDC9dReRhvSDoVyMJtwgwwpsgCeyizpYEMwJuA7VKyWHRdWyuetMNE8XSFmHaW",
  "key6": "Z32GrTJYLbNmsz9EgdY9aQqZvDiL7np62wPqSxgssUzbYnnq2tPfVRvbyNLMddNUhwZZqJiywGkgeNr1DZ8YsSB",
  "key7": "3itYLQVfegu6jvdnsjDE6R6VEBT7EoWADG4gKskGs7RGDKWoYLksBbLLFs9PEGN3KTQJYaGYPWq5a7RHpkx8mbTG",
  "key8": "5g9UwzPX9dMp8AcoQAyp2kJcTUyQShp6wgUK5Xs3weTUWAHSgotd8Fpb6QcXNW5wDAowHwjQiySvJuwRGNtw8hGU",
  "key9": "212y36gbHcRYviEXLmx3VsJvetuy7x91GZEeR1PzaFAsWcnKytSSCfc88CUEhKBrH2CsbQ3LZPAQcw1E5YydzDMK",
  "key10": "3vDzmidaYuBQpKbakMvBu1B3Lko2ZrhnXJXwyRfreCt6CaR7S6ubZTeWfNugmDh5MBZxVcAEdN4A4mBZNhK7wppj",
  "key11": "2WJEENJkbww6BuioVq7NmJLrz4gDEWpyLYoGcsc4RWeEyqgPSyzEheqj5rg93X6qBM5Mvi4VYn84vh5u7Uaj3p3A",
  "key12": "61ribPqaT98U7hrk3PKb7vUCdUN84bzQ1q4vwnsDjCQvCSV3LsKcLQmkR7VH4PVBypKBSHg5i24aFTgMmVna2W6H",
  "key13": "3aoQ8ZZEhfQC6nxPnystUw45mTUeARpTVWQubT8jrR1yDJnn4zqhKQR2B5gWATrMHStLYcCk5MNqBvp6LbcYryBN",
  "key14": "MuRPUrGFF3d1fKccGWMAQe1mk6JSD5LuzJyE13irKn11zrCFDkMnbFQmgvQwiEkN7yLQEbkNy9Ku61tTeUm5DPS",
  "key15": "5a9ubziUj5Jn7FpVUAvZnyYvEotPkuStZMFRX2Adm8XGTtAi9dgejWgvnySpMMzeF8AWasZZyfzJxjLRfHzKP9wX",
  "key16": "65xXiBSn7BEM1ySaG1wN8WTrwvGXDzKppBoi7X8tSgXXwNY6cakCo5tnwWrujbvP9R3d3JoaDijgvEv73fq1TKki",
  "key17": "4j2vMt7zkUV94ChHqxYWHqyPDbQAtU9HsXrCU8eebhBEfVYPXNdPiUp1QKa31R2wXS2KFrtNbViTJSmjFBkpyvjr",
  "key18": "3ncYnGKCQ1SzQpsJykeTKVxayHct9WFndB4Y5ja18VBrm62JSKhKNnL4FM3dVZzf2kvQyPg1nVmowA5dHdu9MFpg",
  "key19": "4oJ6ctUttEJs3rw8nyYrLLupmGWCnDMrVQhRhnv7f6PTPviQmrwcyrDcxDyUyJfmX6yTxp4Tn1DGiS8qZVuEFjYQ",
  "key20": "3v6xPWNUQnGnRbVjJ79pMto1JRiuU1vD2xM75xx5pVUNsrRV3fgdsnmbf92eSmCuvY9fvdQJJJ1kfKW8nnP5XqpT",
  "key21": "5rymvWKQn5AVARwRzyCgpMUQxqegfr5vHHkxfznQiWxhDuMixxmtt2uqCZ4sFLahCJtHcwkdJjDUjMJ47LXNBFgZ",
  "key22": "5QTLMN4xEyNm3vvys7XqVi5mbvPzNvt2Xhu87QFvaMSVGMhEMbLVyqaDXwGPiF56VAUYgcFJvKowsfcXX133mr2y",
  "key23": "4J6Ctx5MJhUB9SNswteFDRZ3oovzzWN7TatRsRZQ19FzH23P2pozYZLUCpywJgwAGXRR4w6vgmLY7LeiK4qYH9Y7",
  "key24": "4tiyMLCAq3vyj1FyoqTobEsEr7BeQ4fYteE8ZVJgr2VG5SydCDha5hotPuQhzcMEhLddmJ6c1LGoH1ojfmwAVmob",
  "key25": "57XjxjcdsKk4ULaK2Z3LWas5ZKCTf9WF6Ktw8J6jdTmegRvgRBXpraRbmDDugRp79KKgSBWuPyZvJ2dMVMj1DeNT",
  "key26": "4FHFK6V8ATAZCbm7gvp8q9dLQee7G4eyUgMm7Y7qnJCSo7GgGKym8vXQHJ86PjJ6C8gHiN7N6TAUmoupJG8q5Ai7",
  "key27": "zoNws74XwMdc1wGtHCNxF9AAS7HPR4dXGjRwtoKXN6NGdsLLC5iqvZwRA21pkjbqB2EXESnTV4v7sya8tanDqB5",
  "key28": "4V2mNGmspqfrzwF6B8QHegcJ22kQAHU55qw8dUewXyEoUTpSwoEQ58gRNLecfgdhCr1hR3PNcCyPSwdRHeRorkJV"
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
