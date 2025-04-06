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
    "3MHM1eEArK1MbecueGM1nHpuC5qApoBCFQqZBJa9dpqnQ29vuigtq5eZtfQedJnya4rG6BBPm5zsn15Esc1quprQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WX7WZ8DYBsHX5qyrYCQTRcXShV3FwUPDfofmGiNgHmqaBpgo96QEjdbH7Tc74iBYJApgpEi4UR16Ckh6ws6uvyY",
  "key1": "3g1PRcZNhyiz9PVKMktJqAGQuVKjcSYq2mRMtjCkvHAmbEDXWPWFGiAHjkkg55hEP6phKBstNQku1aQTq6ST7bd8",
  "key2": "5ae1nYff8NwBYfJGJSYN7x2qtGrc5UrqxQ5ytk2GJejehWd7Jh1XsxaqtB6r5NkiH6BJdKYnKteo3LaG33vwayFm",
  "key3": "3Hq12nu4F8ityYeKWyjmoVoBRWeRNicKicQPtE5yrRnhFt9hUoEtMjvU1znAmy4oz6JdAmxKKnh4Bp6wP9HnK8zN",
  "key4": "4USFXVpb6Ycqyp2wPdPZrBXBCAwDqwonUssySWJ6CxwipyfiMG6QcwVS7WD3srdcwghy63GYzFKrPqMcfJiC6Vsm",
  "key5": "5q3N9tEfGoapDHeWyYdrdZVNggVJNVyAwP5MpqJHBQPpNQw3fw5mfL8Dktwsdj1jp35zWztj3bJ87de1DLB5gT2N",
  "key6": "67rbqueywLToaqBKjkt5WWvL9m8Vj5namc53KRKbctPVMBxXFaa36g45YCRSdBXLPXc8ZFD94sxyvew9KuiaLT9e",
  "key7": "2YzuC7dEKZKWTcJWxM6mNZ7cnhbA88JsPE71oE5Awrf9tSWwZq8LN6Ad7ePRpudWYQBitkK188FXGqynUcKAf4eX",
  "key8": "22Vejfa8nDj4GDkdDGUjCPum5ZErvRWrgfUZQj9HSk3acK6MXUQENcR5K6Nn7QJApM6kvv5is4qRSVE5DURX6wCr",
  "key9": "35GT7ehTu7dcoX6YowihcuXRtd7a4hrNZD77DBDvdocAAba1ceQkgx97g2pcHPS9PQ4QKyFhuFsChFthj4a6EG3A",
  "key10": "5uw6t6t8bkpmp5YvRgrZqimg4rinHRMENGXc2ucm6GE98jkF8gP8BE9CBMitcVrar3cw4b8uErjNfudXJ1VuGVPU",
  "key11": "2wNpVYVdutpz5PuyfXGS8aCsEkqNSrG8mYMozp35B2yqnctF8kWUs4YZ6vRQxCzor6SHmc1E2RdWKGqZ5KbdyjG5",
  "key12": "5n28buV5w1EEfi3V1huRNszQx6gof3F9PUHRC6wcEjmpJR4cPWLpMDH6gDVPNHmz6gq8TdDghAFSE69NzdhiXqWH",
  "key13": "41rqTo8LCuM4Z8g1n9nKgB4LGNZ8hHKGra5MnvMK5BoDhQhmcrtivwAi1uPuxNA21hHLkTbiTxzw2JSQp1RJsXSv",
  "key14": "4igi6NKf9Mke4jH3xhMC3iiNa9aDFbkypp1WYA22QpsxoHZz8Ba8EgvGiBfNdmZaJFoBhm5EoAo8PP99KCczVSRW",
  "key15": "53xZyd8u77EHKy6rc6eNCyzmJDJZfF4s4ZCE9HZGM4MbBRKCjU1bxuSoUEZoQhuXfRCcRdj7bf9AfVrSDNBdti4",
  "key16": "scaA2A1wkuaBZMC9QfuRkstTc5A99jnYbuZoiiTzHgkffD1BUdiDUJC7iDTpX6oYz88qJ3CLPPuJ4Awgpz9cxyf",
  "key17": "3gMdZNowg4SdyodeEZyH8t282g7ZJktG1M5R54p2YzwfTH6a79x4o1Gs2gtTkxfv3rd44JvThZDYCYxsTcrki5pq",
  "key18": "5MJuspn1hLAnkfrTZFUsK6N7GNtdQ136u1TeqFQ8SFzC2N2sR2Vy2oitRMXzU4WYGtyVgvGgt649DXMwXBYn7HJm",
  "key19": "5DJ21HbVJ3cHpcbM8SFuGH1anXy2dZySNnfMuajpcoPfafsfyM5tDGJE6H79WRL4b1RaifKSGJcL4wxjkr8kQV44",
  "key20": "9CBdVzjSgGTBRVfdkNW5LGqBsr5WhDeWA6afdQLVLLQxLDR1JVQc8BExeyCkXGBmHxJuUPKkpLiMY5aPXmXiLCq",
  "key21": "61Ho81biEAeXqvLdA7GhUEWCFAVz2LDxg71kY7kFux7CgAqALELMckE3H1ZRPLfzhhHavtbwE3AyU1zVgShJaV4P",
  "key22": "59Lvx8JDuDofpXT2YvKkGCMZ7NhT9kBEdCyYyn6aDSBguNMyKmBm6m5E2QWqBDEvFisC5dJb1H5mwM2CRepU1mSR",
  "key23": "4KwsGz26dDQxaV9frXwWduRBGT1n6nRk9619RPWdUNFHLeQZaSXUnidxsAyLHkbqNaxfhW1zaaDqtfDREuHbCgvt",
  "key24": "4UxRnxFtiW1Dg2G6ETmvYfUAM68iuktPf25RSLBqQSQRhVrto9NxZuNqNR443xbrmTvM8CdLxiUNhRtgyY28jq3g",
  "key25": "28LLEQEAUhw5ohabgxsWjeXHAi7UANxSVXjHnGcT9rMGv7A1hUJiiBE4oTS9btxvu5crHzHFYGEQap9oK3rBpLgx",
  "key26": "5cSrjj1yKJv6SysQv7mD4xUXcuiUxYwUYnQ67JE7YJzKYVJQKeH9dfLrrj5xoGaqR5FVGxf5Wt47acWsitUh481E",
  "key27": "5ZfGt9QW14HDG5YXL9tjrKQ6qFKDYsCTZCVJrxeYuqfE55MkufjqwPhf9EvKNURebsjmtXLPTRJc8bswxHpSknCo",
  "key28": "gTWS4cSRq64ho5bFFmisMefeeRG6izTSbZzsHt4PzhbPDc5bCMqVGoWBP6vDQ63PZNDjodkZqVdHAL59fGC9Hps"
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
