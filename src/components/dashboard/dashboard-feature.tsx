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
    "5ce57r8fbXwNbWjRELAE6FFT38iuTrGwCQEdA2pcto3BrF567CxvgdH6tjKx1yctAmAB56K4GVqRuXo6WJis1feL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C9hBKjyvj8tEnygHXRdky8GesWgC3HhLyVsHhzTZQitRQv5Qh59LT12nmgj4mNQ9TTQyeDk1xZhwoca2VYjZp38",
  "key1": "3yx1fEByoXrFaH6BFyYZC2NremeYsZaF8bvF6LuWwf9F7PNNdt5XnFxJtS4BthpmLSCQVZE9ZvnLKyBMJWSp13SV",
  "key2": "31t9j4d9zNAbLVaiBh7XW5GneAfLSziRxmCU7ceXdAbHkN3CQBVk45WdFruT3T3CfqvQL42XzKuGRFQ1PxytYaiy",
  "key3": "4EiWkA6yDDF5EqeyYDmSzgcQaxXMAAk81v8SAUkPADdojMYa8wHystEonUs8jdEbukPiZQujezWhJP1CmLseeGuB",
  "key4": "5fs79zbCmCqsUwYDXwXvK4aG4pm6Eqb3EanCK9odop8rZUYBRK6BZhmgkBuq6bskiaB9MJyJyZwXtgoZoE3kTSoW",
  "key5": "NWLpZU8ahxNyVFb2NXJuEuaEujgwoa797TNq5DWDuna7RbLEvbw452ArA3MSbANhoSUtQK6QydxiVLvoPvUWEJ6",
  "key6": "2cyYEWP2P7S7KPCFgQPN3Ncz9Cc8TSiK5kL4yqziTMiyApE667EH5zWZJyibNMVFF6yhGA3UJjHpyBQZhRz1n7uX",
  "key7": "4YYR4haUaa1sWExh4D933YyhMDgwVNZRkBVrihJ65yySu9p2wNgXaZotZm1G16Wn8jjLRCPatLMvE7LhCPD4juMY",
  "key8": "ydE18zF699jra8KyNUwXsoL4LPpMH8NMEscqnHAiJBmQxRZUJkmM9JJ1pQveW6EJc7eWfwVe7ocVvDFoeTbqrDH",
  "key9": "WQwhPDUohPFeCaBRiXwiGq4zCjF5z1Td8rEyDsZTgmFUhgoTBRZeRRoUFrnUt5LFWra9YADCEeKHMrXgFbnrMvY",
  "key10": "42xFcF1NWDZNgFDYBevKuLoGkqTwUvQYsAsraCPoS7MbayceUwBHKvt4oXV2JGfouKXU9MskUYTMwDm5eJ4TU9ax",
  "key11": "4nPpXokgZ71VmxfGXsrYBH2HD617gn7m2mgx3W15pz8242URy4iie5gUVyRzHfEdH67jgf4vujs9rdRd7U68WoV9",
  "key12": "eYFwVh5P3mdWfgHLRibiDxWhWxdpgKUGEX7ZsQJxFxw11WzADw1dVzLEqBKMEhsd8LCfTofKNDvXWFhUqcWe2LD",
  "key13": "3zvzb7gKvLAkz7ELhgVp6BRJXx7FeAfCqCzvnHPV2anycG3yUvsA1Prw74wtHg7Ki8hCwnUMd9HRpjGmoWzEtzBA",
  "key14": "vB23fkckLQHRyUh2knbfHGZjBLSq8KHMQhthkDpjpL6H9FDDagty4tLBvnAxCR8PZqYRvwFBG9MetD2nJREja9p",
  "key15": "5Jgi6n4RE84DEwdzwZYVxG2XN1JBseGzbkCjJwnHpUCnxN5BE4U8ugXZHCzjvx3iuBfznKoigAyugGMCm3TkfWjA",
  "key16": "3bCpfRS71DQMNV1EK9URraSmSawTYotjQ4tya6maFZ71UeAD3j8K1p6fJDhjjQRdbBCYjVNQkjYRd9qJgmdPXKr3",
  "key17": "5sbLsvYo2idHvC6Q4PbpWgbtXTzT1XE7WonXRb4zne9YueEQAGZ31iEPVzg8QZmpYybMTte9UdW3KwSpWkh8Bgvh",
  "key18": "3S2T62m3jVba1EsATnqFwFdiBRydmLC2nHpswimW4fFzF2bHDe5LfKGxNQVcbyuw7hRumtxnPAiZNgYgVFrByBon",
  "key19": "5321xZa7jXiTPGpYAK5eNrMoabYEmvuyEyeg2t5ZAvzd5y49wb1Vk1u3nn8UAqXiF1FZXoKE5PDHBWjgTjNrTsFW",
  "key20": "2794SAwKcrq2GKp3KvGbSsSV3xxxC7qNoqCPTv1Th9rSZs86FYjSd6xCWhRjxUx7WVhrSVs9WaVx79oCFQ8eZUKV",
  "key21": "3yvKPhAgXt8ySqu294njvNVq5bAgT8Tp29gg1EwfGtduETEHyHU26gbUXjagqHeWVKdskN4wuDzCSmSd2MLVP3UN",
  "key22": "5Kz6ZHkKWm8UWSihyKJmSs7T17ghQC29CM3hm4T6M5EtCFTcgQESQcmL2CHxDsN25wSQpCGqk3stC89iMt7CN5Sn",
  "key23": "3wpfYMjnpeFRCvE44AnGKb68fN7M4531dZ6CoQpQHbdt2R53SsreUhXNM7How5Ft4XKdRoKTqXoZbzMEDu9NPvbN",
  "key24": "2uQRhNXo33Psun9uPEZvhEok1YfLZe24SJXFZ5bnwoTXMvTYGizV4GsVJBNqDSRhC916vFB4TEsbU7Zv3Ao1z21K",
  "key25": "3NxxfbEnQBbGXp3BvXi3gMLv8CAsKoJ37jtSrQ8Tv1rUFAszkJJ7pZXASZuCJmAEZjtaQwmjJR1kvLPjrXZ53bBa",
  "key26": "3DTrd6zto8G6ecwuNoCqGA7M1KPsGo41v9Pm78oJ4Ue4u3oUFeRVbGKcVSdf98hEyH5FYQoXgMJNsUkTrk7UiVFi",
  "key27": "67WteoDaHAqRPGSx92amQG1KDD45EWaD7RGMekAmnBJDBJKwJZrgr6W8qTrWL4dzJg2WSLWauZTrYu8zVR9qsfWc",
  "key28": "5GBqNE8TUVEWdwNwaZde7L67DoJnkRJghfeppYs6uF6KnTmfmRpTi4kaRDCG8qhNBe32JeyBGbRdpXjRNCpKJisz"
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
