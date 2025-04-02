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
    "3qvScPapex7STmnECGsK5FP9SRj1Vs5TAaEg4YtkPia6pgSSGFNbJQHaWfYSXMw4VXpNgJsah2bWeJbe37omuYG1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xwyCnT3CAD6EQ4mfs7SSWEsV1coQdsgMAAwG4p1VUq18S8vgv9PDRWt8AA4EM88799qxN281JTtcZwzWmub2VDt",
  "key1": "26fVtpNNjqD4ZKRHURDbtjuAUUoDpkBUpdRC1JYfAnfrwbdD5wcau9UscpxC8UsGnvTnsgtdR3qEQ8FgqEdZo3Pz",
  "key2": "2W5Avv9fxdWaYqBdJgF5t8xjF37mmyokgSUXvgHQ3YyUrhMQ8Wj39aAZyFVfzkvtxE6u822FMHq23sh4yd7F71De",
  "key3": "AJJeq9Y3jDJBwbMpn5jRK9yexqkypZVuw5Ex7K3cSkHbAxCuJaADJx5bxyaJNAfdH4Ye1DGXLkT5GuPpboKFSiR",
  "key4": "3RHp499EsFNVuUtRFSXLTgkCh1ka96XeUtQioMuq6miainqpuWEnBpjpdw1ENT1Yd5tCfUCk5neDcEhZHGCv6Fy7",
  "key5": "47Mcw6fEmrXCdyPYX44AXpNh8KXsUqBq9npEZMJK1MJL6Anr7nbV3bXsGz7R59RcvqRzFaLMT4mCRQgaLwSdPdUM",
  "key6": "2psiFRbozMrrfqagFv7xGeqAuV5ME2bg6iaBQ1see95jB8oqbMTeJPpgKWqddXe3L1vLhQxpTjQKgUS5CTdnR3tv",
  "key7": "2ixWoh2hq4DsUZgiYHCENdPuecGRocejxtZPkmV3qt4TcjSUPKDhbSvUcZFoRqDc6JJpqAorCTdtHW4xpDwX6Loq",
  "key8": "5n6wUESbC5kmX9Qju6M84sXF6Ns3mLNuGb4N2HnnhwV9KeGhY2pNstKEGmvzb6Kq4eL5G7hAbB4PZHxtoUHTKXBy",
  "key9": "34NZV8gkujDH82bAPNnVoGwkW2Fx9vu1kTXPGiLSqQ9BJ5W55bzsDoKTa49ns2yLqrXeA1gUmzuaZ7VbU1sxv6Co",
  "key10": "Su8EDTjQMYqYsbzAoXyDfBGdTePxA4nXRnBzegSJUMzpCmf7XhVs5fGdRRmBEkFNb1jmCeeeHk237wiSSPiTBWg",
  "key11": "2TXffHaGLnGsE18hxNqNo4pjtuEQYcsLzHFrGd7Twi7kyTdSmRLU35T5eRoXfmw3xsanAfb8EhfKK5BiGf37qAnx",
  "key12": "5eF1vzVsQjY7vsNaZnGfheBKorsDwordp2XYPG54rz1aUEqk2TSEBWSPLjxkT46R8EfHygMaLsfHqsdHLLhfWiuC",
  "key13": "23xjL748SEb76PXVJxAVDzmu15GNd96jFpeGnc9ubFtQ9AMyXjiUBLPZ1VARDwBFBqguEpcfUCaiRvGWmA1PsNnP",
  "key14": "58vqzs1eTgSrFxc8KGoXaLNBM5iBdu8zKMciobdCsibTsXksug2mVyEnqXyDoyGBCrDyrrSD8nT86WPrKYcxPTCa",
  "key15": "RBRCApmZiy3rdbYawGzN3aYoTXWrs2w9Fm9ytiwkkeE5PjkKpEsR457gWB1T8EjDBR2e5qn5Uk3qVCuMmXR7wUU",
  "key16": "41UVEJVykzLE8nNZRKR5YMKyAoPCAirHcwkP48ycDdheZFDgRpdayL2NJETjRET1NWFWXrHhwXcTT7qixAuz3pcY",
  "key17": "4imZr8wXUeYYd5au7ZPK6GjcFVkVLxgHYHeg4fjZ2bg8yhRY6UENicr27U6cL7g1W1xyRMk3nXG6qMaiCQcNkEc7",
  "key18": "u2cp8y6CLYqM1Dsx772Zk3M9FYfjvx93BYQ4BYTjQN4f7PWcEschrm5QrqhuvksNX31ejQsnK1VsT8cNxnmFBGM",
  "key19": "26MeGdmpXMs331dAYf16niPyksDbFjHiQHqSUU4hw9sZxoAa37kXQvz5YgQG5FHYJj2JhaZng4Fo9v5EmjGRpdAi",
  "key20": "2DabaE8pdc9JrVW4hPY5k65fjBMR79B65P2Pfez1nnRLR1vZ9tZGNnzi45JkQKwG2HMrTqQanS8jnvRW5uXCVrun",
  "key21": "4svE79wnJubEJeeLEAiyTdBkrzXvTFBbfLRa3noRnJzzMnWYvLACgVsqUPrSPLcfqBBhzD25tRenRzxF3fcRQWPd",
  "key22": "5sCaXFZ7je9aT2C7onSBs2KLySYwqemi7Di7T7BGaAiuWoSeXsZX77yt1XfaR9Qw5DYb1xuMvLN25YuuDk2BByVb",
  "key23": "MsoRtJJT4VHLWGnqPdh3nGKLw1iqBvukEZN6v3NMW4ybuLcr29csfjg8638X4FUyGUCbx6SGUYPQogNbwUSMUok",
  "key24": "5epMEAM7WAa5rMhRyjReSJPUhGqrYPx9a7vALDhJdZszKLrHRX87yqiWPipvxJdi7y43xqCBpUD7f7aVP6PK7ndV",
  "key25": "DzAFswbomYjKsmnBASfsfw2gXfgE85nG6eAD57A58fJfnqKxZNeBk2xYnZBJnvtX7zSLyydm3bpxRqFm6Fhcw2f",
  "key26": "28zBVU1BNWt7PTg6fj5tmyB4X4RsmzpfE1WXr9wW3kZhxdn2ii63sgEzQaQuWhjmaqHrxqKp26VB1ZQ2tgRA2gk5",
  "key27": "4TFmUmcqDNkAbrVAWxPnwttww7z22anCqZBcVLJMNKN2cdiaKEvZFpEZq2EbQcM4cwUPa69pQcBQDuhvc1k2wnpH",
  "key28": "UXHCtdbSxku63QU29H8AGETFYifHihcqXtgrQAFH9Y2kpKmrX292vZp2bspf6Ay42HLhF82YWNru48oYryfYHRh",
  "key29": "MZQw7f9AaY5egmv4DWghsnZv4ggWZf17zR4hExksftRsM2BRDmLswmd1tgQnaJzkQNC7LmiFrws31paMGD5pvuZ",
  "key30": "3HzBNUrL5cuxTwwt4SfgDVhQSW95bzTum9tMP7c4S5cuAj63ZfhNjkVNdFgXLm6fKv3552fGZFHqTfp5ooRbjXgu"
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
