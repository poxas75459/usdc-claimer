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
    "FxRwupmxqZQuHFXpMrX6JLmKL7CzTHmqWkm1zRYr54Pc98myP5Q7g2Wdb3WK3xUkxVAP8RY4vLekRoe5GbBr1nS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WGrw7C8g8V8sq8anxBk4T71QGtJ12AMhgMMQ7h3YpMaRT1TPPp6p1vgUwdFn7buNocbce4MfkUht6wJwXn9GUks",
  "key1": "2o7SboVQwo8khViD3Wm3SoTaFrweSNPBZYXWoWbPxMNXxmJhxUShpbBw8ug7vswiEUsVqxFzFqato8Xiaz7Zv4hg",
  "key2": "5J88VTQrCmBfDoZHs4Kxuv2SvnCZDHtYvFiSWNECwNwvZr1zBe79T3jgCaPm5qeSaDi1GAXFLU5gmY8MsXjx5VPx",
  "key3": "zY5xnebhq1PgxGZdBShKuqDBVPFFuKxegNny8zGNzeHuji1btc1aF1xuukCXctChy2MzYSPtVi3gWFkQrbbBuoT",
  "key4": "29x2uf1tr2mvLUyGSAsvkoRJqBh2W3LY1Cn1wVCDnuWpMm9kSAKBFzJX688ArvwRq7r9K7V8Ayt4FQMbhn2P9dk9",
  "key5": "gukV9wxTBGoTMBBrCz4aF4scX6T6yRu2wNhCfux3MJ2hZEd4Rgmu1ojeVJYVjSEeN2CY77ieRZGsNihPzF6Yq4t",
  "key6": "3TFxhFSsHDcqSjrDac7GGzLwefEXFAZNBTZviKkMRQ18zCsKL7kNQkx1RENjTGZJtsCirj7NUFbLKh4xHMi2FBWy",
  "key7": "5J42tGGZepLCDbVroWro4qLN6qgVfQaGK1FjC4jTfWPiBAahG4q3GHhVK7cmUrrMkRfb2vDqzspFTJxAM58wnKD",
  "key8": "41e2bbsrdMkvwaSx2MpcufmRThPMuraeLM2q76W4voarWQDxgfseif14tZkwUhRvrK3xeG374Ai2BsDPFkySDfrA",
  "key9": "1ttaYRioKWg5mwhJXxXAJMivB58wQzCN165ZfkYvaJG9QcHQMdtMk5x4tXxoDzBdVrvU19stp27hhnc5XEwr3h3",
  "key10": "3VHooRB8P3VdTkekpr7bgUW4RAE9SbvDUegKscjKrb19du8eDgWyMty3hW6dtqkYaf7Nm4d6yFipCCCu3jVfdoX5",
  "key11": "4P1MriuYSNLK1DTq9iR6VDjnjZ1K5Nv7dcDBxDFHBHNvVEmtebLKMEvabRXgkc8S1vS3xDZtRTjtNx4rpF1mz2Er",
  "key12": "5bhNtSg6VxFXBTwMVTcDFhb1zJPFjibWE4mx5dz3y2NVGvBEXzp9ffWFZPZbtntvL9UqjXZi7oujCYjGL1vEFDgH",
  "key13": "4gZRoy4jyN5grnyYJ6nUEWq7WoD92qPJRMWqNV2RjNrnaqfwWG3hWpdsdmxJtGsULXacKCszjxTXAsktG6FoEb2a",
  "key14": "4CUWsLhMEobKePFZ8LgKXxsToUrkVSqsAEXjkQ8vy7N6Bk1dAwiF9NttYEwo5kxyDcY9aomGScFk3D2tWiwWR7KF",
  "key15": "4QNg1HjfNs6Z7NpVPAk7c4d9Gc8kNzBWCm1wUxwfNRJGVataP2P4fmtbhrrPXTkeH7wMHz5BQVHYrCBdGN9fMPZy",
  "key16": "3pqymNAf5HHM2TNxj3dcHF3JV4CfvGVtErbvX1M1nfrTxKA5fVhtsXa6w4nUY28qAmfYRt6LMV78hAWrv7trAQri",
  "key17": "2uhHNcievAzokdRKLF6SW69s3eGLTW5dFk2oCKEW1MpybEiEUEPzDzhFM6LAzdHyoZU6NVS3aNVtypnWJCCR3MDy",
  "key18": "cnD8BZLrUNi79DLYvCJ4M88TxfNZzNoymNQkfYg2EdA7HtDMnUSJvuW9WqPNW3fbKQhECeBKFcyzXs8rMxumB2m",
  "key19": "3Kh2M99uZT3sDT9hbJ975aHpdvMe228KVcEFEmkpfwKP7yeR9KCMsdb6tpMUtomfnjPGwKNTuGHUmJZ9gb7yhxpX",
  "key20": "2YBYUeFhg1B4MdVueEXXbdTbiPzHsHZs4NHY3hvCMesJ1dYx2w8PjrtSa2z8qATq5fE7nL278GjeMh6r9fixzKgm",
  "key21": "36UHwzESyBSqhyfPyRYteXge1ZeDG2o1A8Sj1mFQNcyV5nWH6U6GCZ22btrrqV2aWK8Ud8DMYsFJq5mxZZ2of3si",
  "key22": "4yS2hW4usLmL1sNQguKBLSPS1NJFgFA3g8aa9AqF55H1Mp6zTp48QQKAwTEJVqBwC19ythwmDYQUW7qxNFUa2y2d",
  "key23": "4ow9fbNbp9FSKz3bm1knQVvwHDpd2JpcDBvYzaPygTSHef7VPXnvhKoj6nYjtLmNMXPpfeWn3quDU8JH2PaBSmYx",
  "key24": "53Agntco2nbrVZXncHTbu3mt5V6LdxivLm1Fzg52ps61ETAtraVG25fdEH8zkCk4ajDjzg6rPokzcJHEHRZpY8py",
  "key25": "2HZy4xZVhiMeLyrX4hNGxiYSdMJYs2TQzrbiAeU8E6aTgdp6nNkjXJJux4X7gDCkefhA2wkRP5ca8vPXMSXuQBSk",
  "key26": "2D2rfE7cQY5tLQA4bgUEQ9xCNGNjc9z1MRaC4JjwcDL2ECo7TwDhNqAyQxmo6T35Nz5vNM5Rm5uMEfxBM8PQigem",
  "key27": "642enwXxoSfFWeU4CFVeL4MTLfhBUSvy3NiYzZbwRd1Fv5orWFpTysxBregUPFXPFRtQW4sgckpaWKHeVXM4XuBr"
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
