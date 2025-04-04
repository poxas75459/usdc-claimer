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
    "4cDFwXBVnZa1C7ToBt6pb1fz9pFcjoDfPqtNeaJbGRwTFdxKnamUmACAULRqGo2YFWEuH1ykTKCaEZhUcD2vCLay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2voqe6xT3SdiHmrQMffrBjxYLy89MykZUJ4GU8HbyJ3Yvr1HiKnoQ667uFgcXdW1mqLxqM6rRBG5yTxLwhEY5ZvZ",
  "key1": "XHnxF5cAHxsBjPnoAZv4UPzgf3v7mrPhhmUBSSMd4j28mXRN2zK5KGZ6JLCw1r4oRCWTVxX6ndmoLs9VELacX5j",
  "key2": "3ZnjjMrsNK3u7bYQF9UR9TUuL95piszmydNEgTGgNDaxVvUrZ9G3dkb3wTxC9imnmSKYzdoQwAEcFWePfGuqYoG",
  "key3": "4e3pqzHGWKHC89SHf4w3p5nCN4Cvum2CBqUvtBLpZVXXi1eyTnibuNSUBZ3dxekrbv2H21kqwuDPZhsGqTLEJ1Ew",
  "key4": "3qfKseA4J3rZKvGs4n1ksY29tCTbqM1cZkXjuVEdv5xMHZYcavy1ozwqcB8B78BM6wqLXwHSd4XbsDi8z6xhukX1",
  "key5": "SvdAUHcfqVvSiKKhfMsgmEkdCr9wKQCDs9iNitgbRQtyFSSr8ZpLWZj3BibXA84KeYcYzvqED4iRwNkBW58N742",
  "key6": "67fHQH5DEFuFSMaLxsYfUReYyWKvToCga7hydiMv4wTxV8EpGDgTSLRwoMPJ6p67gUdom5DZZhKeif1i3MHGkeaQ",
  "key7": "goyTktsNy8TG1SybTuPzKXqAR5MPf2isRvwJQGJsvP4Pphowba8cf3NuXeyqRMHuoSKrwmgupJ7aWy9KoNXzAVa",
  "key8": "4WaiRCg6osCXdzz5TNpCAXArjaE8SAoiJkqUggVdu8xfaXGzS1jJtmPgLhQCt6NmDhFCVmWwtdDeuweJ9oGvNHPc",
  "key9": "5RM3CoVMLd2iSEcGWdRFFJ2NtVQZDKV1LJw5FZ2Zye6V7nvaa9xcdgafRDxqnCCDNRe9Hab2A8mYPDjJzwPkRQQ",
  "key10": "P2ZoWyu9W7iMWhwbne7vhPsXseJFgELjshyA8BBuHGTB9pyfTMkneGVqEkJhbDcaGTt4Gh1KRbLwgBQLCYE52DJ",
  "key11": "4jzQhnfeZPxZ3nLJz2ysKVKg5mHEv9xqK1X5CB4dr8n5fyH8fforUZs7kSCLUDSm8cGWQYPvU2vg9KdRLaSLWFs6",
  "key12": "6BMNyFsRVU2y2xkiDET9hZvNhkZsvqGtnZ4VsRdGHmQQXJ461Tvuba5uy3SgDetzbwbjDB6jtLkwUSWHUgjUCkx",
  "key13": "4r6sqj4Xq3ZZ3hE5cpYnEKn3kPfnjBc28muetVeCq486tbgstQbLzFLiZ8T6R7ZC8f2XtTmgZ1BH2HfCpH5hqkcU",
  "key14": "3VnyjmaTGqnaQjmSRwPFZbpZU6m3RXD24yb5iPUsa7VksvhrwTCxAz1AYQjGfDXDyMJT9iZShadgS3wmL95TKaW5",
  "key15": "5ieoBFfoFkRDyAixenk1hczU9PT8S5PJmu23ExAxgTZgGLNd9wLf1xKkQRUAAQVxvR5a8VcXqiWGGazwnU3zJ7Gw",
  "key16": "3XhhupHsom7zYXj94mscBerVw9GmjkrhKgJaP9NWbcU3NGtEXfz1NDZrsYoi85ti4S3Js4VKiDmbAjT91W4KBsu",
  "key17": "CTQb5B2pLTZ764fTuB9jmKXi14VtYAgS2zcqVRrVunwRB5gCsH8MabZP3TERT5mWpLthpUmgEshYXySEoScH3uj",
  "key18": "2UbzvvXDAMUwxwsijPAMx4phbqXhcF96ci3TjxYom6hscjzKM4bWsgYoo8PTZ6LxvBm6ANUrfDTcPSbfpwEpbWHt",
  "key19": "36o9eZqAD3TBP9hM1C8iygTWTmmaV7uuTRK6D4usf16TxE7PqXnBF15cR4A8Q8SxoWcQA97w6zZMomKuFqbRySZg",
  "key20": "3oTRvaNNYNC6jQ2y1TfqEgVnRsJWJ9xX4FRUusHuCnsSqBGf1PMwJQcYB2UytbQF3EdRhLS6ncjGuoz1VBCrfhBo",
  "key21": "3vQicvFr6VwkyKWC6dxjqsYoK3upCZkAxuXhY6zHcaP47czG8qyAkzQ9nzPkbnqEDyDv7tawXwL66su89bMtJZpD",
  "key22": "3t8iW68tc1GdDy27bcEWRCnbcnABhYsLWDbyD4S3bHSWusEsjUCbv5gvwwrJzPAZNXi2FZABTpwqfFUKLx1jEfkX",
  "key23": "2myGcd8vpb558KoRGro8zi8mj1gtMEHkoHAzbeTsyCDK51GQnP5BC4wcWrfx8o4srL3vPprnvKGEU57WrJqrSiNt",
  "key24": "EMqJGeY8ieQzsiLLUSiVk9kCSu6JXqCKYFrRMXXHG2kiENJyFnT1LxsXSJkHcc4CYrrubDPtMfphRGUAxAUPiKN"
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
