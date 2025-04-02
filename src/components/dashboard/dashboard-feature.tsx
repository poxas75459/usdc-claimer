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
    "5hbZhnNpoQSidPHYJsr8SmmaGyQkxWBuYHwP8QuB72nWDKcRcw2gAwpNwNHb6ADrSvWkvdxDs6hvS2hR8JJLBJxR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24AzhaSiCH2DrDxC9txUFkJoyxyc2aejz89fzL6iXDQrdHr8cvBDXHdaN5QpbMPnumexDtA2GPekR5ruK18X7Eat",
  "key1": "3xuDRQb2XbTJrEHTuGuUyrvG5WUjHoffY4UuXWFoM6o5yYZqhqgQhLhDEvMuN18xyYWKxkMSSjh3EtNoGuGTaQEX",
  "key2": "6LqNWpReudVrErdMwuxWWBvtKbiK97zwTihDi2XwMaXeijMNhBH8huvwDgxRmXkrcKaRehnMwGU4E3p6c2QBwwW",
  "key3": "3e7mRSSmukYsyVwuL1wnuC3uHx1PyMXzPiDj3VB4iYs4Wfj2u6i4wCJM9uQMD7HsMg5dubJ8WLytvhE8KM2fkJYL",
  "key4": "4MAojegpptWuuv9JMozqopM85Vvq93PFPtG4YdoxdLT7gpESJgogfUkADjpF2zAjQrXGrCNeoTV6x227Nz7amtHF",
  "key5": "4DnQqcydFfCkQ1VCLmtGxQCPNhFoN76Tx4ZczvrbzVrTXWQd1pXRT8P2w4md2Z5DnAnmhSTcvvy9TXSw75cWzPu9",
  "key6": "2r9QPKE6F1uDTiWaE3iib6mUJyrDLZFCJXdxDvH6vfTXN28jhFKRZ2PsUwVy4jBWF9FTqFFHqfKYsXWYyC2ZaydE",
  "key7": "4PhuBtnzvh9AGkUE7vbNdKX1WiLSy7GLA6tirJvksagn9ey6xFCbnKyzUMjP8EfGUDBWPDb3RtqYAmbEXXWB93ia",
  "key8": "3HQuBmCSC1FyNcNu5oTpw4TuHYfyhM5f1udja2qpBrShnqs5s4aEwiiGHv26AR4chxaZQyJ13WNE3gmGVhrr7AfX",
  "key9": "4KvhG2V6pQHwG9WWWNC1k3V5xTxffyXTuCDhRDrmZDECoM2NupyYfnMLqPN2XtGL2srS2L5HD7yEEvY6XXPmmGNu",
  "key10": "2ckqPh41VwiCLQSYaL9LtLreceu1LBKNuY87n7WXaJ6sMuK2x87mz6rsBNbNZzf55dZ571PQvEsZ9W8MT6JVyYd7",
  "key11": "4SEdxc39yGYPMjxV1BVhuJuwpbM8WDWSDQ2F3ALi83c5NAPqKf5X5CB7NifBWsoA9fSSmQSoVmv2c46L8Kh9W1Pn",
  "key12": "2soNoiFbeDpTJCYH4TfxBDnj7xUtqZJey7xZmDX7P9KAQBhs3buyuxAgJMw2pc53zJx3sEjd3BUqYkF6dyRxrTpL",
  "key13": "3gJPmpcEo6v6Y6EsiujN25oDA5Y1eSwEx7mCM3WFVVK6fLEn1BxFPK98By4fatoSF3QPDsCS6ejZT9VWUep7oikL",
  "key14": "2XwcbpvQpGEDXvK2aC1YVAQhDuozwywaFrMrdqEDRLQM2Vv9iX3guRrpwm9Kd7zhPSnwvwNMUvPJJV7P38eUeTdc",
  "key15": "2wMR9CUqRMQ2JuehYCM8RsrvUe6xA34snzGBHwBCU1m52QPWd22SVm4ZeXHHffXTAs5MwprrX3mK8PyjyybiVKzm",
  "key16": "3Csq1T2ZUZNUE4MkQ6XAHdoFQmVnFsbrRZkJWggZ6XugDzqbtWehpFx858eCUf5amc3QY8cAvJM7hUme1JHQdFTM",
  "key17": "5bAJLkLUyW42oUMwr4hVQA276SwKoD7HCh9ooRTJCrfAbncpL42ksapjFzC8TUAMtvcikVmq1U2vPcCBwitvZsn6",
  "key18": "222q1sEL3D5UWPW8Bw2dbwuLYrpq8adbvbaMwdmXfLTt4xa8AoA21JqzrqaHtHbNvdogEUHvfCdSEbxrrdvRCxvh",
  "key19": "3FA2MpZRUjn1gbZ8zwUXVxUAJngBz1849fmoUw3yzsE9zkxRWWR5CdrEcp255rqPRY3wuppvXAXP9HfrBQCQhtqK",
  "key20": "3ojfrMHcRz5BixWYT7aCkS3bbGqxBP5RYdQUgkduwvkTKKKfEFzqs2cC5dA1Fg3zwywrpudzFhDjWi9kPCuDKSAB",
  "key21": "52oimZ1z8BdaNoMUpSfm5QM5QAiBWJYKFgSHjU8LfZv38FjyKZJDDHacTmEXqdJfUUc5TxDK2ns3wXLvx2LtkdEY",
  "key22": "3j973povqoNjjHP1KwVa6zdApXFKW6d7pGvvrJPnZf3U8ucU98Q2DuMjp66j4thAunJUCPixPHFDE8FEZkPDzmWa",
  "key23": "5rPzc6tBepxcCeVK6QqsjzQuZSGAnu9NGpvjyYfp2SwYpBwtBxoFUBC9Rx6U6tDNAEWJQFbT14cUWfj1QfWjPvJt",
  "key24": "4EXyDwyf5xZSUBGWsFmUWbD1fSCikFw2Nnx2jUbW97ELX5xZEXMuTNvPfqy5C9K7kvMnUC1KzjuoT2MRLdaHCJrk",
  "key25": "3eSxnSARaJo4Wwa8nVddUM4ucWkp19sx5BGpxc3sXQVENojeF5ca1MoAz1uxb8LRaUD5unAagaK1Az9upk4CBdzw",
  "key26": "4hPNBV9Q2YnpxuiGwDHcGHsCRYyYgzvxshXLi83Lq8UGv1Kex5pqWzqW7PZ9vD3EGhkna9TVQ6TtcpBy36xPUpv8",
  "key27": "45pp3PXyfPqrQ6U4TiDpyrwpYgSUj88KN7QH1FWy2SDLzMGxS7bM4bMVYL1CiCTXT5QojQy2RYpRNzMFrLQrGEhd"
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
