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
    "5KEe2gcqYneGUJ8HdZ9GYHZypf5R9L9jEopc7sfpG1nWk1FvXpgR1bGz8xvMahrLN9EphRnqxKPPAJAn6Ytpg2cY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NouQKBidRDyshGjttL7PurnVkeRbu5goKbU3DAFCp9ohcJsWnchcgWgux1VeK3ZRYMca89FDraEcfhShSyinrUX",
  "key1": "5ng3mqd8JeVLFtdJibPXB1MsuTsjxWgJAF2sKQYHQqJnGjcGy6aTH8YSteoJNQTgVtE4bKTBwDhxJZ9rNEoZua9w",
  "key2": "5RaVajfrXgV1ocwxRiFG6oSExuDk2rVeYzwndNAJMUtmUCTUPFCiUh91UbPBaPdF4nXgc8Kjr4eHpa1wHpYPhS3X",
  "key3": "VPFmFTrVYy3pn93TE8z5X6afTNqZARu83MoSswprMTq6THKv3E5pqxZtoFXaadXdheduPbU9EWCi2gq8eCzMSY4",
  "key4": "4sEtzfg6f45Z2wJyqUxtmVhp82rSz11yhRCbjGcohr17uMZSPA7cj3dpBRoxUtK9NbqiY8f562ohutue7oC9aPbT",
  "key5": "4uZ4rF9us6WmvNjJZPhSckbQHGW7Y2VTixr9Cn8VbqYJg8ZabpvfHSGca2Nd4hAnqfjtZjCok1hUFjjLJ3Tn8enM",
  "key6": "3tJHTWTVmFyUFgVi1gs5uz1n6e7QvELrd45JZEcUqZULZ4PL5yY5BDZeDcJkyxRPup953BgHoAWEkPyFXAHoehdG",
  "key7": "5vyMRSJP13wsUymYe69BKjM1raXiJErdyVe2Hw67PCLpdyKAUs16Mk5c2L7GvJeuY1LeWdkkYBjwXYjiQ2wvtUWB",
  "key8": "2BraP5huxgXPWTAvACrHMtN2LS2FPFq6pZu7gHTwd4pfWdTosyCMrNcQB2Hfwysf16tpPUsXgY8arqDnJJBhFEY4",
  "key9": "ZVaauB92RmN4ZCzDU8hJgDLSvTm1gcK2EmGXsnXYrLmh3qc3jGkpXU7PZtbY3LbToiCq9ZaGRUoTGGq3Yizcv3z",
  "key10": "Auqzh1xiy7vMoNMYqYtg7ciNEjDTfjg73Anma9ftgcPjJCpZLGGvFv5G4Gv9y5Rb7nZttznMMeVLPWwxuTzkT9m",
  "key11": "58XiBxz1K8Uhs7ss7T4nXEp54BVfv41xAgQgrpTbkbyEm33S7EWNyHHToTFrPKS9pmDwVTQcHj8BauWh7yt29ot7",
  "key12": "2xCaFbZ9DXw8Nb7urubTSFvmBMYGdyvgkvjDT1Uu4xBivPNpdP2zSn6wt4MJqbbztvwsnJuNPhSGT48bYhcUuULB",
  "key13": "5Zt8wZvVXa1J8vShCrJ5J1x6T5nEuk55S2YV6yP9QSXF5eaejaF7DjQZJSb4MmXwgksNmLdBR3PzWApgUNrcBAyT",
  "key14": "5zD6etJ6iAbvwSVbrA4S6s3k8TzXEhQ2WtfcbZT7zpVz7qDL4D8kJgBZmYczBQH5vgwxg1YV8jx8nvKAt3WRNMF",
  "key15": "4uMdHBS7e7xpFtFp1HifR4fQUSb2E9N9p1n9LV3LxNp3W797jXzPEf554E7WAj7DpRUDqqr3vWEeC8aCeCSmQUow",
  "key16": "3SQiACBZSnUcpdHJkeq95jw8tts3nUzypToiyeh4VNcTYD254LowBFb3BnkWqmWT9LMQPYaTQLDhXaENhcqLt3EY",
  "key17": "3NuxKnDBMgtfe96vBrKWaY11KJaeSEGFJULFuP9TPybmtREcUDN2W2JmSnfL1o3m8iHWxEePFXVq1Who1Y7GtZp9",
  "key18": "5Q6TXxhsotbQ55Zp7GbU5R8ejYYHA2fb8inJg5x3XmFqmZpBJVBGoqR4ruXt6HPrBtHM8hZ1dhczN79Bu6mDUuoa",
  "key19": "2ULasJV8ZV4CBAEoN3wLRSnhDnak5UXVqTdmF6BWkDQkfbZAhV1ZJrzgVu8SRvv6LK5utcX1E9Frac3XDJzfsTeR",
  "key20": "2AMx53f9gGquudxWzbw3CgDVZ2Z3rpdyPLLVXv4DxichMB7ANe95a8zN9uaWqQ2REK1CM2EGaYwCKJAFV7cQr3WP",
  "key21": "5dEGWoL6TN1xmvvoCe1n8bwc4bDJDmKvAVpFH2LGZmsm48NSttwmf6mBUE2BJBeXjifrVz2yodtx76wn3Vr4p54c",
  "key22": "4d8aYFFRQNHEQu34hr3PjuL5joEjADLsWj2zoogEqE2zA2RHkgd2mQPyNXjqxTJdfizE8xcZS4wNoNf2ExkXJmX7",
  "key23": "2RvmFi5NE6vVC6Gr96Y9ScHA4eVfRfwE9DJ6Rw9AP3vPywa7WuMjMHJkLez7X5LXfuKPjvNx3M7YzABNkVNfgFiC",
  "key24": "2nByT5HE9b9dQ3cem6jCucwUmC6VYSy6KxaNgSpNDWLzQK7AhLpxKw3xH3RdwLkgDDUSUeVdpb7cMUjHVnt7Bc5P",
  "key25": "5LTRywDkQFZpTaQB1kis7G5cChFsNcTBNamUjTrdzRN7awiLrFLAk42s4LvMtL9yBCP3rcwMQeuYMuS6TxAmT3hR",
  "key26": "5scrHUbGgWFP2y7xBNiSRQYNrbM6LWVYqfTo8y6EmQNahazDJVkuzmcKxgGFH1fuqp5xnw6VzQZof5Xc2zr3bkU7",
  "key27": "2Q6C8VnU2w4vewxpeMLFETUiUC3eSJd1QokK9ydTxV39NzUsGJZstHDWUB63CqwxuyUhAxQMFBDFT4hVVQEZqE49",
  "key28": "4xhHQWYNzvRaWmwUUPj6DshuBenfBtcjCTPe4fyCKrFTGGiQ8mXGM8tENhkRmrZLLVwnZmkh53VpzNXrfw7eQBrG",
  "key29": "3feHnTgSiHUSNqAfDx8LVEC73whyDkkndPvfmsAMx3vNXxNBZX9zhFt9YHcNWsLJ3xkdxdLST5UrkLtztAhS92jH",
  "key30": "5y4GAuEqi6V7zbnWm27qYNm6K71rgxjQj15aiFoMF6h78nyTz7vNZKoxf6vvWMoZ9Ewy5TBKprqUS5QPBajwsxJn",
  "key31": "4LkCTPzhbsjpX4YakjUFpAkEa8MpNWLjuKfqYX92FB3ipeJT4mxtMeFmaYg8jjfiGVBi3pCGsN4MCxtdMgchq34b"
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
