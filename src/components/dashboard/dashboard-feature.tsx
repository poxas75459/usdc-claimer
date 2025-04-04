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
    "3EDNp7iKFUH8TeobBzzRgENdm6iBYhhirDJp3dYdu7wXT9MhmxH1KyRAhhvWKu74fHQx6rTQzpvRmNBWMouX3odY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qZEbeSENGtWWQmWaf6Fsb2w6JBTLiGuTgnCvFDuoRD4bAuytiimy7N6dzrMKwrssR8aoSmaMip6kmV9tszoP61v",
  "key1": "3tvCyuEbXTWXCvuG9HzUYBRuik5uRBo9jZD6cUXEgwH1j5TssGqazXvnNdcohbW59PXGYiwga8HGKFF2FZBuBda8",
  "key2": "5MjMc8wJq18Pj1UK8oQewRKH1okjmHKad3pjApEMwEPyF5ozs3R2UFp3VWV4K1mxXKSXe3WPbZ3yRkiFdCvvnEPz",
  "key3": "3gSwwMkFZ3cX8BmJrQHeLyaRm3LQefLo9eBDu3Y2mukAbFrAxg3YcYTJvvugwLrBn3Dx3xHvXrFiJEkHRf2fX5UV",
  "key4": "5A6QCGQgvRMDSoRcoEnJGhdSqZyTWKwQ2TfvMSDTLfMXAHZ4z5S2V2E15kzfeVn4beG8tRQ5Ve6bYEkGSvHuFfWk",
  "key5": "AekAtu5J8dZYK9GhtG4YcB3UG7ZZRGkbvP33RUT2t19HzRuw9FGgRYzVYwRPBRFArbsqSsHEzteBXCfbvZ1zo7a",
  "key6": "4vFqVywHURGS22X2cgCJGGkVKCtmFUwg22xzX8KqupMdzV6TyRiTNgA4Tj2SvCAqnXhc8xL91svyYk3cUi83k7Z",
  "key7": "4oBwWZZBLhahFvp5U1sjUAMGNJJ4vUtQ3ULwJS6sQgW2s2tpGXdrar241wDYpjEYUQy2awrBbdG8fFGZ5meTdcN8",
  "key8": "2RWaT8xd2EVnJKjNRPYtyLTyu8XysAejULGvHvZUUGuwzwEcETavZz4p45Eoh9c2KfhAqLRc7vVexMRPVRXCdsAv",
  "key9": "2eRcWhWqANEuZ2HRiQ6ntiJnzfmVGb8UuskwrTZrCqecmUaPQb3yrLVbp3C3VMkT7bxf8MM2kocNh23LWPDTLdXd",
  "key10": "58a1N4rnAfbEQTeTUoC9CBngZERvzcBhUZqd65Rq28aFP1DrbzVgxZBmRyRbBBhJGqwMp2v7WV1ZvqRBr3jrZCPj",
  "key11": "2BmgT4zN27HBf64DYDfPywUXnwUB58MwMWdeZRpcCAhxLGVwLtqgfz1cwqv11D94bRR4YLvUrSQstvVuuL8ZzocZ",
  "key12": "64SEwy52h72SP7D1fwLyk75i5s7QFZoUx8GbEuapUEBWNxfU3v4uAXu9TmTdTYeJr1obuuXpmpVjXHSrKMptEFBT",
  "key13": "zsBsjCs2X6H7B7sA5QnwWovnTFrTCNhtEuhiWrcaWqqj1Rr5DaYmLocBrNNnbE1fyoorXmZnM3aP8erh9H35zaf",
  "key14": "3DR5Q6qLaDniexKDYZPz77hQbfeUSW6wf6ppnzJj32e8Co2M2W2QoTc2zaDTDHhEpPEWCK3hgKxRhgJ8cgdnUMie",
  "key15": "248YYKvZrsbsTKNuNkjagM9zU1qd9B6Eey9UJtPZyMX4P11AWtFqrH3W6yX4LEnyBFM2xeUu631Vih2zuszaQTsk",
  "key16": "xssgSyYKZiPUgzg5iCQNH9UTjspkiDoUHDJm8MhMskeTzN6CjuCXDiSojuiGacpvfRdmgmVC63xR4TooKPGPaNs",
  "key17": "3xt54o7eJN4TUQ8mBxRNUqGWM6ZY4Ygx1PzYoXzRJ2L7m76kTZ11F6G3REymjjaTDfzS4FRdon15Qn3YT1Hk74Ur",
  "key18": "FqRUk9QfudsgFXg2uAHNCiscKWmnKXNgkGpqKAdUc4jNNNyuWPWKbj6B85qUp8NfuV6Rg2myrS27gPHtD6K4R1h",
  "key19": "4Hu1nj1KQJBMpM8oYUtHEVjsGpJP4N7yDT4czV5mKtHaoHuNsiY2jhECdf1wa1AGUUAiGrYg5iKktTtqgX2v48tV",
  "key20": "3kmFSDhbSVPGCoG9mZMNJE5Reoe7KsCEWHHt5xLjFA1CoPkJdARAGF6svBPTMHmBfs5aYpknCtDoWf4mgxPDeoqi",
  "key21": "5XxLyTKwt7yYvMrJAiJHUy8WiDYgwuE78QvsnoWjKqKienCY48CwK1PSsASs6ZMHxGnQDPgG49xqNsBStKCpR5Vy",
  "key22": "2gv1C35tjpKBb9vQSBTFSguAjWJSvCQ7pUn84ea9YYVLHPicWb2tZbBf5CZWfp5op4fts62dYVmAoC9EwiLXDPa2",
  "key23": "uwf5aPc4bQHAKwKMfo5T2r6bE63Yxe6RqhpbD5rhKw5pFhr5rGuTmjaoiCxh91N1en9SEpcftKRWSqsKVpvqXZE",
  "key24": "3tfQVuRNYj48qQU5kQiSxu13QxF7h7KJuE3DBqXeagMStAtdrAGYNWCwvtErB28qkYRrVK7FPVCfStVra2FrGXTp",
  "key25": "2U3V4g8rsqAAPtSrjqCaSBhku3joqNDHvU3gpYEpuM7Y3FJLZraNKnSiBY28N2PhAv3LvBGfZByRCM6Z8pgvPz8A",
  "key26": "5XLw6b5K9bdPke11Z7ggrmZkXT1sefrd2eijAVzHKyUwveXWnZi1GeNW1WEshNxnYthHktYXoRKR3tY3HN1om363",
  "key27": "pUnqSfDokTRrF8gr1YC6op44ozEi2czi2aedsm78QVX38frdgU22GHTw5nC2m38gMYr2SGfTbvh6MKfkSuhR3oT",
  "key28": "2rSBcD2cjQ8Umv1tTAMpYUAknU8sdTVX4x9KhbX44MVs2D2H9cWWh3Wx1F7MgvXFocxxtGQCNLkHqGmxhaDUvF8k",
  "key29": "VxChi3EdEwCdfLkNWiS2VL3XLkREFeNcpngEGW66myZeZzstzJKPfqXmdfCLXC6n6G1PiJ57PSDabDQ4GeVidtp",
  "key30": "47PNha8pa5wBE23oCneKRJ9sUtSqLjkDRg8Gah7D2WzLPzPv1nWLmM72B7PXFwxPKSYKzFg45XJnz6U1wxgH6gvG",
  "key31": "2Peytv9x4ChZ4MYp12865a3ZUdKNxFcJrZzpfgHUAy3fPpT62b1KMt8R5UeaMD328nqSLsMFKrdp7gKen1Jpr6P2",
  "key32": "WTsHHJuFeaDiarQpMF6TtkbDHWhEkCbgXojzj6N7GDAjRe8ZhNnvS988sMMvMUYxo3cc6jVrWeUhStof8KbWi1b",
  "key33": "2dCn5GcZG5Aw42ky5NDGUVT3dC8Y7BHbR6kGQom8DfqEzH5aVQg71wXvnHoHvksuCTmihy8DHCiht4iGP4oNd9s9",
  "key34": "X4vsNXCn6u627wVAZJdnXRKHttCNwNcKrWbdVFQG4MbBPgb8dvTqMGTCGL6bqwutJQBTcRa8bdxaPFppigPGJem",
  "key35": "3aQFbe8uLuUdQGtMSgjy43fwSn9Ws55ZoUJVNRW9VrFNzegcWt4kSNjfLZDndvuLsQWpqjjbngJWZGRfTZmpU1NE",
  "key36": "53gHmjSqppeDqPmoRMBTuejbHbDqHmCTCLvupU8rNrpvJSMmQvUQXZESGUL2cCTNMr4kBfUuS3iJK5GFYnhhDtEg",
  "key37": "5j9Z7Up7ziWKS1VtxxWGHyCLfmyhuwsQccnb1ESUyAeR2SXhw3jm55ySNdjmDC6SrbEoZcj2YyUJtAc5C7Rx9vzr",
  "key38": "4JQt7PHihwPwqHBBsNkaGFFPbXt6fScez18onSYf5PZKDrjNLxRVsS2YkVLhuMFc4DKUQMiPRGQipq4EANnV7Poi",
  "key39": "5cMRcbRTim2SxGVLDiwR11nt9KDqVyoNzxYySCriRR2DdkMMSVcHG7mW6uWn8da2VSjjr7Hn7oY9cAeKQoLng7xg"
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
