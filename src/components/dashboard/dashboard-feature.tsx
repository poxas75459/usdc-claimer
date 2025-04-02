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
    "4fDRHxvcyESDfxLMuWTG1GzAL1fShSAcaiFDKdc3mNrooNya4h7kjTLLhNyTNssyv8y5jcPWUtUd9uXB8MLV74Lz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VdHNc76PyahX6NDcNmS9pTVXmMcxYZiEDKGwLsaH7RRqzDnwYLMK5JdefuQpeW1yEdAYSDwV6kxZndCKwtxZLiB",
  "key1": "zgAQ371Dec9hdQMNQV89ZwgmWp4RCKnBV7a3TMCstC3w6SrUVJuLHywaYULrLqZ7bjZmKrgNkBa4YGcRHaD1dP3",
  "key2": "4NExfyziHmwncJ7Ptg7d7fnomKshs1P14KPz1597t7DHbXkCj1ugiW2ARn4fHm7P6m41jpXVUTDFSbaNz51vgUQH",
  "key3": "hAHAmkoRgTjqjSQcui6Pqyq5GuW9hCyfhvbBYkYPLHhFF2FZBbD9ePJjp6s7jpCguBs3AskDWxLZgUpP3S8icYQ",
  "key4": "4iymm9Uq31qz4YLvmNrbet2vzhoF2Q46JtkUoe2cWBHtvyjzToYK5RoxN8eF7rXJqMLFDVSrheYj71c5Wj3ZBZvt",
  "key5": "46KWjpRSnxqsCs2unJg7BotHgXSnCmAvxHuvvxFbScGBHWyimGb1niSShGgQbY5VnJNNmYXgyYJ5Vf2zWDqs4KdU",
  "key6": "2gJoP6QKfDPQFGWBr7benMaEv9WD7tuuXyjbaBuVGGCqwpCb36aXcwGhpLuKbCE3RUVZd1Uu5fRPY4W3nVsHXRnU",
  "key7": "67BZUdzERVoZLnygZXKxCBmNHxQ3dASLMUSuZBd25vS4seojBnrqjX4wY1NZyygjCqhKTptxKFZZmxMkvhJAp7Nj",
  "key8": "5AQ6efGR4XurAzZcDNH1KcjrWUji8fF5PqSXazD1qxTZDDFv4ywXnDGNcEGiHAEPXB3XYp3uYJDvsdYHq1PP6CH5",
  "key9": "3djag8fkcecn52ukcWugY2nFeYmythQwszGS93finEysFpbPXaBcVBhYtNYuBDxuxYrE5x2R7HTeMhcQ8TTcT2iG",
  "key10": "3kE6ynD1EcoTZ6UNcMNZ7HwaKtXoxzgis8m6QGVA7o9KSPcYjEtJ5EoyWCjJHfiXxzeX5bYjoXubSdxrHQHMjT5y",
  "key11": "3twPuzNCfsLjAQX5Xpxqmp7VHSdKn3nfGY3b128TVCqPyRweBcAV6kXdra22Abogi9UxUtGLrJebCZq4dHoZQdeq",
  "key12": "3Sz45UdhXqrkJtbURrAXf8GCtpGMJDimkpcKBAriv1USpDxJCxoKwHxqnmgG9uXwW8w7g5b4qX7J6rpcaGJsdXQn",
  "key13": "YvnrBJ7SJWswVyy4eMWgN9ZwDspnzbF5DU8SqaGcp4cEJT3xaeLwuT1qbrB8kTCdTanUyxXf9PABGj3n9bruCeD",
  "key14": "4TNKu4cQNtXg3sLsmkPsUTAECyP4itJYenMS2ofuhenzvvLtPkTSmoxfLJYiPYNRYUjhWEq4pbLErAX2DQTPnepM",
  "key15": "5SneYvbjJpXbhP1QyP5Pa1K8ETdgYTyLPnBMD9FH1tSxSR28pbd5soz628XsYnEVAmApYcDAH6E8KN54woqSphgj",
  "key16": "3otgN4YV5DiaKnmcbtkPYuc7dJTvZKE1PB7V7Y1d37LhFYmwiDR9YyjpbjaqE45SsB6GC3mftnVXWLJvtLUm8eXA",
  "key17": "5FcnhFt4L2rCsWRUuMkPcvcBJ4jSCi7qXrs65biiE3NpVTeZiqyGnExXV5pETqkSs1GPJmij4SNSyGbF3BKPx8EY",
  "key18": "2yuZm95g5nuqw6GJvuYsDBniPh8JkJe9uyuRG7ZX18eUZZJhQq8CEnAAFHV8kibUaTiDpqaFVuNR8PLW9usHNfno",
  "key19": "25Ck4kbpmKZZZc1kN6XRoh4ANJu9CSJ4Nx2JgQ2xG8tYKv5RMpvcjitvxgwCoxkr4JbunUexMn2cVimbkB9NH3h5",
  "key20": "vswJAcKGHgqQLtMt8mrNzGuUCAVGoBB2Xz87ybQY9McKrC9DgzgPZGtjLqRS1Y48NZY7o3nKJm8k7Ce8Pwoo7YD",
  "key21": "5y2mqTCkMmCc53oG9FBPHRtzTQ3Do6UZh77sGe2AMZg4wm3wKZgsxynFpftKuvdZgsCab9PafLLJqp5xvi1ri9mM",
  "key22": "4qfAGPdzqVZJwRhcfifkDVDp44edVw18hUvfoLnU361iaEQwbwqecQQiDJwNyidjFwG7p5Eqm4q8e8L6kh745kYc",
  "key23": "51PP694CFLfCd4CSC1L1bHHW1FQybzPZgJjjphx1KtAqYo1bTZYctji5vd31AWhkZTjhEF11kJZx1SQF1YBKLHUU",
  "key24": "4UBFzHoUYdDCghTvvdJBjaeNAuwoTX6Ai7vx8kyW4kW8i3hMMfECw4ctrHQSR9F55D3jD9JwfXqVechudvSfVzRY",
  "key25": "RHgwC3qGhMXcn26WUWGixuEYk3Y7ySKQWJ5hz38Ln6FUTecH1o5NtdwujPfBpDAL9pKDrVdhP78jA3UySrj8vfr",
  "key26": "4XvDYUxNx5xDHWHmeevHLVpaipiJWLS72ArzfaCUf3M5HiaLMEcJ4wd1cn8hyMeMKfy4U79aR6KpNkLsPHMD237j",
  "key27": "3LtSVSb3m6XJLFKdbCfQY3J49bq3AZPni96nZJRy4C8dPq3UVFzjAzGzmPNN9ajRbkBUcEjoLoaQL5DpWySTMsAC",
  "key28": "4KXXtHw8Pc3xGbHFFoog3jZi3hYStMtVQV1WpiKRkLSdFq73ig2a5vRFBQcmA4w2ZtQ4D66ND2grsyQgex2T3Z2w",
  "key29": "5FTPwJr2m6W7NZAdW2LhakYhtzdx84bNCrkVkBt1s7Z4rEroSi9LoHvQs4dJVyQtFp8dAQkw6F2dZeuHUY5NsLrZ",
  "key30": "UKUaYbqQaBeKUm8Ns8UA51zbNQSC62S22S63ncraak2VMDYC13QH1jkbsa6gAcK2taq2YQyDEMeC2MaLAMtRV1W",
  "key31": "2S1ZoDtCUimJrehMefCkztzBtVXU74XhRwh86da8b4Risveo4h3bkJLs8uTvMnYpEv9eL9Gwk8LZ9kzEtcxtp54X",
  "key32": "4A74k7SXNSzBZQc2MDTdFz1ZZFsuRV7NsPWwX7T4LRP5U1p8y7t1RQyGcyQHZoWfjE3WavgADxDpqCpve64kRNAc"
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
