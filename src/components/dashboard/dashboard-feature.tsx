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
    "3SgqVKpbiEgtLmg41ShJ89ZQdFWRXfUNuDvS2baswGJKKJTx3TPLB2ZpJpKFTRiCwa7MRRq48FikEr4BLCrUBMod"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WDQPS7qh9vTk6D4HeV3fBpC1DoKQJrj1nCj9TeHqYqbmGmWcwJLVUMt4gPLHjE5tMBFMNmx5CAr8AziCP1CZNwk",
  "key1": "5rAzETReMYME3zdKXGrbYPHs84V3BEKcHDiqzufZaApU56L89HDxhikb32GEwfNmAoDzHg8hRuaoTxis7isAZ3u9",
  "key2": "iDP9tVUW26i5khenS6Xz4VWvJdivb3oRd65oNc1smrz9CdpUp7qsWC7Xg1bm1oFNvg4LLgSqK2nxwoPfzRWTiq1",
  "key3": "5keb5zCYXYqARYoJXXodyjNHGUL1SZ24XpUv4vMjLTSoMDNjkbqDfEpEmisuUXutNvtLaP43MTt5RLh6ht519Ewv",
  "key4": "5Fgv5YkoR1dudGhQKyXHrcEFLsoEex78YdPNoUfEYrZN8vGhfFMC1Ux9XZaZux7d29VygPMsynLWPxm33z4bYfXo",
  "key5": "jVtK45antkknhUd9oSE68iiDXsCRz9F4JirnLLexnYU4SSNKwe6ZDQUqSAQzm75Q4uyK5wsVbBHDjH1djg6Ytih",
  "key6": "q8C7qzXWsKzwn26nhA5wD8hjF64Hf3BpZyuDyVj3tQNdhhG3V3kuaxhPxDPZdzPYcBZUQmFZooogMRXfQGNMrf1",
  "key7": "4fxtQWBkcbDsRHHzPxUJRD7fFNeHJVNrDRGV8s8kxf6Lf9i7yA6jS2JCXxXDNEqbE5dqmo47B4gjt8CcjgGPMqNr",
  "key8": "2z9CECAkUZstsE98pDEejvrVzFzKxDg5Wzzmf1mRUmCBVNAZen8ZoVcz3eSsZGcY1rmfALSQjuZL6VqaZ3pq5Gbe",
  "key9": "3SAjtMZkjha8au1jaKuqHPDezStPvvhuq7uSoj25avmMQqHi39mGnqyyuihyALiHYLbaKEvtaQeN4C5VM8Wb6oiw",
  "key10": "2eub8aCVKrYBFnQVN8DmrhrtuDi937XgBfc8VpodQnaLx92ysAKkcXw1tcWz2dR2Atu68Cen1iPZavKUsHC8b14a",
  "key11": "3bGdcDrfBGQZ25TGpR3jPuLZvYx5wJwK1mXu9dvwtKavUv3bZnZAYqr45E6DpzRchfy5ThmAGQrT9bDFuhxb1LF2",
  "key12": "2hCokMxduvrgsvvwHRq9auKwnFzayjRk6KvwMm1EMVkSRiVjZupU3SDuruy82tXyVzG7cn3ALw61UNV2W6uTAuc1",
  "key13": "28iTEbXSdAcmK7thBXknMS1q1xZCwQxKMVtyLTTPrbtRZqfmTGbrZGNM9SNdEGU1x3A4DefQ2bwfET5wWHQuHrdU",
  "key14": "5dokAot2Aw2sFyTLFnLZqrMBovg89sNYK5fG4o9r84qmeSsbNV4Zxkccg4oi3zrUndxVDwqKy5CbJxqWQCRfQheU",
  "key15": "7pFWguMtrp3iD9aZ9Sm13kVnAucFJQzvsNhPwnAoSeJCjD7LD7nEuuJZDygZu2P9KV4rfckag1P3WrbjdiRX6He",
  "key16": "5NoBKwamcib8Bhe5rg65DYTC9a9gkZBHNEd9MVY9kuGDLnq9iKCWdSGfE1tgZaCKTr6ah3Xy31WqkS1mpMSb4ifY",
  "key17": "4qzUTFVfMrixeTgMNJkQZit7dnXQpJ5quXrEAqhi2G6X7qrbUTPLbUy52kuAWkKuxcEqzJEwSkJsa8igRKx6pxBp",
  "key18": "2z7EebAqDxzDhcciYYfC7hDoT1JKLvcVVxQwA6nb416vtJA5gG9zNEGz2o79cQJenzMrdSoVwTMgEAcE6UhUC2aC",
  "key19": "miEYo8JzU6gwYQvDK8zPCYgRFNEim8hnvHUH6VEAdcE93PyN7SRfsALVB7U3xnpARArEgdWng1eRxiar52FDDGF",
  "key20": "4XjnCvPACn24BASJ9eHe4nZnNHXHEtrUxg1D5NPZZugAStHtpDhJWtE2nkBrTLC9i3VMeJYfwxBbfNjfaLLk8Ucx",
  "key21": "5oHrPfXcGsgSLRvczWYeevzHJhjBafAvZXK2sCxXk9EG9Xvc5WBazRYusnGUGcbxjgSWKeDPPYonwkyQxgmh4gP3",
  "key22": "DXJYd4XVa1R425PGvnyvcutCURAGm4X7pkzt2gdYRFQjzjpUpTxcDdrpFCWbWFGWh71pEFzG3Tvj8ZZkTyuC8Et",
  "key23": "2NNtrJoFyG7k5e9TFCgtDqAmx48PeNve931Z1Gt4naWst2KcL6cdhCE1m2EgoPXPdxRPDPVpjvM8dLgYSmZuRjyy",
  "key24": "5DnQNRc6KmR6PEvKkRbwFWBu63hS4HERPysVd8bqALHY3f5ioW5L8LSTyE36zsxcoascyRGWTneLaouqeu8DAFaE"
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
