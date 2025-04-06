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
    "4kwt9MCWsRkAsXpqd7VrR4xbdxYJys8wEcRPyEq9gRVqyEfJqoGBJ1TtdkGUjK4KNrz2Rf9UP7Wz9DsCBv9btdbZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LQJU8vqk7Y2xztBHC3Wycjz9LBikmN1zZpeKKQoADcD81KJUgKzN5QKMwRzBXhgMZkJF21QLdCHRp13nPeSV1p9",
  "key1": "4wmPGHX8MfwazkeNJrmLLYQG4AyYLganrUGvAv8Gh75n5c1FwuYwDC3MqvUjjKRoiihqqH7J9QfyX9RPaPYbWp7D",
  "key2": "MSFegqbCCMEtaTxGqE5giSq9dngUgHujPafBYBPhYmzenqeWvWJC2a9H7WtpNYyiwzD2ivqHvRziwBAoFXxg8Vq",
  "key3": "2dHrbazNwQAXfD5FTvqgqx5g6xFxR2NhRHJzSwR3RuNk2ibdevJ5EozvCR9g49SZpR1BYxktSMrhMLUoTyMUc46A",
  "key4": "3rU8cStkZpEJFhMzfBKXTLSvz4Ns84kCHNbN6xcm4tstMW67q8wYnvT6nixoDdWpNNnLts7w5NGyVSe2EkpPyrEn",
  "key5": "WsBkMGLydj8niLPSurLfnXrATbesLBMeD3vRHAtcHAStjcYHRDmfQcF6uV8XpNgq2zQxcJiwpwmSM69m4JUw2FX",
  "key6": "3AtLBqUjxc1odcgdaqS5gMtsJjvspHEUbUBZvzkxUJSPAwAx5uB9WM2exYdMT1G9HE9tztptX1L7JaeEDpGEc6un",
  "key7": "2etJ8UbdBSqKjTRxGbU7ttN5866Bx3m868X7NdQtxnskwuyttJb5pJoQ6tQRiiAdUTYTEntaGYKucctvcMpgXzzk",
  "key8": "HsVnG6JUUpwEGs1hAWQQtdZrLK1C6y3xezhX8fHCnoRbGVPSocXhhVBdNJtvHgqWr3oUERs9DKuBchUxLjHHrLT",
  "key9": "5vwsAZmTnXTJaPqrDfQP7BYxjyBmw9CdYt3x3kZuSoo8iZcfRS7PmSujT2K46H7WprFMJ5bSEptkLJqk4sT1Nnoz",
  "key10": "4b9GZA8bRKv3YjA425972tqm2rCM9tuwdU8voqXZ42VmLgn1QZwa1J4MH9pgBWQjUUNWj4H3Pf6YoNsTQ19iRhGp",
  "key11": "dnKSXu1sZu2rYPLxcviPTcHWqpXNFH9DQak6ZYrzD55AWw5jJwTByLNxDPXVrvnEgqzCU8A8zFpUeexosTcU4nC",
  "key12": "5Ce7g5iMT6ThHS2q5BFVdcan8F7KxnituCDWvoHnUzyvgpHdZKd1aPB3ZUAiEiT63tnVcd3GGFRRyLNVQsNswqtS",
  "key13": "2i14fSjDZS88ycmpa6ReNrfXD3mFPZEFGxGVFJ3RGzeEXg3yEDEZ8VQXqWPNPaif4HLwCNgvFesLgCaro6Xj7qoB",
  "key14": "2BZPMf8hc6vDeNdsENH62AS163VucsVuZxmjNbyZsybsz9dWq889MEDHX3Lse4HRzqbnr3cN4U2xzS8JtgZjWdVi",
  "key15": "5jcFSGzK4EqJz7XurcST4qTkJtXbdraTHP7nro7LskqV5RY1hKc621NGnsQwGKvuD6icHdvUFswcgxG4n2LVmy54",
  "key16": "2J8n5sDEAUqX66vjMz2oMnmn8XPnF5yT5HGpUm4yKy5tuBEkQZzAcDGNaDxAYy4yGvhQ8njRUYNMYtaqLabGpS5L",
  "key17": "3n8XNyacVoH32qHvFoKyXuRLHj1F1NNjQvtpVa8U5Bd7uqrUH6dJL1dBv3YeZXipHLAubiv8j9CyS7we2UpnEoxP",
  "key18": "3DRmVEiNLzunC1or7r3BPbH1tBsrE3iFPLVyaDoDTzYPetTQpNwpvwgJwhUowr9RSNGCrpCQunvpm3xsb2otVpET",
  "key19": "3VRzRJ9aBsRixC46FYcnHS4p77iHQQeGVSz5GuVt6Ezi3ynwgRjgUb19q1uL7oChz8ePyV7GGMM1Am7aqJmoftG4",
  "key20": "3ZmVb4JsjFGDvzPnojWG18uFJ3NiUmersDGVr3Hn64ziDM9c8JWzJELKH5qQgqQ2ayqwG4hGXT46aEkZNMaiQVxp",
  "key21": "5eyesDg2GacUtTTCD1UDKAw2y72RLLf8QUGHVHZXtfxNS34ts11DScY7CgDMAgTkQ9ypeNNKFMRy7w7v5DqQ4DuP",
  "key22": "4wCHXEtfSDksy85YknsxXUVjHQfedVgccB9V4xXbw5dZnV9b2swpEwF6a6GgUN7PHGLRmLWVSkr8RDYnzRYKRqq3",
  "key23": "2seaAd4GPHBCzJLCJzNrvVjH5o6bNsaKhRv8ztjw69takh5UyKyRTRmbJ4C4QpjTqwfEfSdFq62z3NUmtNWtt5J9",
  "key24": "4ajuGASZD38EFeydGSA1TCN4n7MF81Rb2TFmHR3Txc2AUmd9bmvvLDzChXbKjMcfLijkGczX7oRmLitCDHaaZMdo",
  "key25": "4PHM949hHQTFb6h4ZdPXimVZEcsbZsgTmwAZTgYMpqMkZFgdgwSVE18y2i33Wg52Xrw8Gj8wMvKyGHXHrmfCJmRx",
  "key26": "37LNHnruKahGsJtdFnBkfduzRzqraWdfAZRX88boaY8d6sYs2WhbL5vCW7x8CQY2wdcCkhbicGth8q5o6mrmXdbz",
  "key27": "5tMyKkgsXLpRVZtH3s725sWQdb7C7mq7moYW4LkZsMjadPzbDaWTYmp3yVFHETd2HGV4Gas6AsE2XyH8xa6KqTEc",
  "key28": "2rm5hj3zV9hBmWjM5FQhefFc3aLu4xKAPfxroNJRP8ePfs9rJKJWrJ1tbpKVEt7ZwFpvhokczTHF1nofrdTy6nEt",
  "key29": "T1mPmkSuVXrWGAKAV4GRFJYxiQhquUxbGug84CUrUppyQUZqMxy3kmcSo2dqFApz7naepTZLNRCZFdqZSwpTas3",
  "key30": "2fQ2zUCLzYcVYGkjPmo7maUb2nLQVUoDxsMWkkY3cYfaHhifBritxcenVELBjLh5r7whGbXMaSxHFCtQhfDTaqzH",
  "key31": "31C5vN4HhubqEMQcvrKXXJYmkiuY2RzqUiedxk5XxtFtzYJrHKerWTsDFXV9HWYpdxtHRGESxQ7t83iSvPRwN2Ax",
  "key32": "2oXC7yf5PevRLHZokaJpj3NGiaPovd1tBxNL27dRjNuPx9L7KPXYHEo4K4pS5YpcujUYD6NXGo1Pnq9XDNgfucDx",
  "key33": "5YMv5cz6tyCnEoxS5aosBLRbBhEbpvdEEDJyrLqdSuWXaZKNGNtpsSbEYaaQeuuLcZiEhLtu5XHs9tnT8PtrqCZD",
  "key34": "66PowpdFHDLDWryQQ2pqYCYwbDo7JWQeo6b5UyrPGMKnvdrMw8vvSf9KynxPNKCH29bsAAxHi4RoSDtSLgJxXkLB",
  "key35": "3M3KcrTfqjye1N5LPtu9urRJ755bfK6LrTpFKsTUtFfgK8PYJsRap1svTsDVNkeQUMZv59Ry2EcYfavZ1ucpPjq1",
  "key36": "5XYSfkVyUEyxx9W9Xv3d6tre3HZq2TtHaZCE1yoguCTAKDZeSr1RhPwCsV7ENkBanSf73GmwUx37XMmrWd74yK7Z",
  "key37": "5YWqTGQTVf5g9sCjkhnK4jXyL3L9GCA2zeH83sLpnGg5AZH9gAEy5FjsUPC4mxy7RaSaNNi3oGgqavHvywCcFizy",
  "key38": "49U7V2ZS1e2Rd4V37U9sEwjfdgSwYSc3fvKqrsTfXz1VPMEioPHxuM2p6MCb5AdCzgwvCmzgie1L8ViT8QXRuhEU"
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
