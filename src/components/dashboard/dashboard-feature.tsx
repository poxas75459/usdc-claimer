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
    "2aDCXWu9HfrXC8uT4kCDGLauW2VjzqzFHGU5P4amFkaJWVfdxPzXw2v1GhAjD6vpx2aoLGfB8tKAmSD3uo1j9rhD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x8cSjVt9oX1Q6xzt6vw1CZEAKnYuVDt6ZhZ4Run2khDLGy11BEepvLAxGkcweQ53pb4zbuZrSnpojvzQxvzaGRj",
  "key1": "5AGimckhQT7tkoBQBoEZSt4AqfiikHgd8DjEzk2EwuvyFdG7FZWeGrq3H5oGaWMwKLa2NquFgsaVGwHZaHmSDHmf",
  "key2": "3KhXE5P8Mec8AA1RnLQR7cUjXKCc8JQh1ywymrmN829pAvVC5EiPARXYKvoiKSnXBvGiR7eDgha3d57mxqDyVec4",
  "key3": "37FdydH2wsHd1siDNSL68HG8hKaiwX6xEQAcZdnDFtED8pFN39AQgi5x2g75TPMBSXsv2DoYZix2peeeCcHQQ5Br",
  "key4": "3t1DtAUJ6PM1PjNoRi74SL2fZJ4vrs5XvJfDG6X4g48Dnrz9qD7GkD4WuGqnH6rYnNP6xeYzqKBzhokGec96qoMX",
  "key5": "4t2k5qAHA7Zg4JBnmsYUohEom4JoRNkGuRFVG6gnQzgWWCnpoP5v7Vx3c2GCqBqAUzVPU2vTt4vVqSHrJQrGDfqN",
  "key6": "3vcBiTZf8cREKPWdJrzRgsCFj9AyRSjBZwe3371eNtCKY88YPUvhef4b21shcc7gzZ86icodLiHVzEHrMhP5k5tT",
  "key7": "35gB8b3qoQun3y8GZkmBP9DMK99CrafKdMuyheC4pfDpkprvv6GZtzVhpdevTrHXoz7Rufn29oJPq1mTXVVcL79E",
  "key8": "275pXQtuyfzdmjka2QGKgh26TasDULqXsaTTnuunNV7Kzkw8szhxRfSopAioVJWAWGWbuYNnZBojoEjCyNUt8etS",
  "key9": "4rVBgYRTGox9ys4fp9PaNvs3WK2sKdd8SZ9gjYyGW78Mgx3R4adY4AFj2S2vuhi72Qmgtq2V5NPiDTTmyhHf5dXE",
  "key10": "2AsxtRtFSuj52GzxRr5riTYGqj2s9aVXfQmRmHJ1dYJo8AR4CTGTZEV3rdYoXM9BpxKkgGsGxgzCDkeyxXyzTkgD",
  "key11": "4ULQWSUy5kR3XWuTxaKKs1Ycx7EyPCXa8jM4tWUsSMztUca9WhDHXQKriNSsDiRMNCKpfajMfWvJ3f8u3vh8fRou",
  "key12": "4SjgHZssDxNWoqpzVHNwNv1oHx24gTbr76g13WGGt5FdLgcZCW5iebt8NToM4vJ4NssPttrq6BqZeHPpXfx4UbdS",
  "key13": "2wA19imGvj6D51wN8xd3qz4M142KtL8nGFbusdZXxL4XgqRDLchuVM4T4WfuHiPPxS55eRh6PLuEn5kmXhanp8f2",
  "key14": "5smLVgPH38H49AyB82BFWQbNzPyRoc9Fq7XEbBkWSXyiZ47mLo8jVLik81GKavyYhCSzy7Gd26ncn6t4pH8g2jHe",
  "key15": "D7X98KParPrrjFMF1i9H14nUVTYFsJBRCj2itH1LhWiot84pa5FY6ZCByUuAzSx2C4SeFgomiyXTXn9Y2Y1kbv4",
  "key16": "3ECbHDFkgZRDwTSMuwbFNz6mE8Aar92pb95wHN4SFjW32WdDU3o9fki2vhkDmUdDxGsWLmWPmhaeEdGGsPVQ7ge4",
  "key17": "4iSAY4AMn3stwMMcHzBSJRbxFwJh5DdQ3PJXiwXZbTSC1Lm8ttppf83p4uYBC7k9m2jUPPDxVVAwQZbaJjwt4w86",
  "key18": "5ka7JkUipZd6iv3SbfWUEiFwTkvDE2bBS7iretdZW5acKYjHHxHe7qq7U9rUiZYMh7jXvEoRoTENUpsP5dbQnUwF",
  "key19": "2u5TcvcuiecLSUUAwP9gBHKPxJ1odzMHUnu1Qji2cdUjo9aGdAcaLqdZYEhZKwkgf5FaDYRT41fZb4peHhrNswW2",
  "key20": "4t7Gk5VSiSDnZmwmqdKMY15itgrUhgzoGxCP8EnaD2x1UubaCqRHLYfERnKJoPGoVVnsUF7sH9XdDfJ5rJVmLk8E",
  "key21": "3Nzz6xnC7pbZZKAjTSg8p2XbP6RjUPbdfsDgci4w15Mxm4XzX6hWxefJUPYEwN5dhCQcXvKaGV2DzyJ3qw8x5vwn",
  "key22": "2KhU4cYUBaKojCKRkx21UeAHiUER6ydny7rzcqt2B4diXUWCDDEBaqvsmCH59GEmxNjoaryBZHbf57hLtxed2nZs",
  "key23": "57LD34RAC6XL9gfQwrxzxaGNxJ8xeho1TqZLP6RHmKCmSzLmBPPZ8y2yg4PmPWbi5ERnEinrm9TJa18BajoFr3ru",
  "key24": "T8bMa8iobza5ZWKMbRsGr8qdpr7gUk7UmuvYgAyVm8UnhYMEh61XX7vPogw1k3qwPBrE2E8ZksjXfw55wV4NVog",
  "key25": "412s6PKrKbxHwA6qLjrenyXfc5hirNSkzXmNYsL7xyjzuynchXury3Bb3Ykz1TF3mGMAFmDHkuAtKSxHWNNyDfes",
  "key26": "3v1tfUxmdi2JDaKFCMdP8yxQnCg6EbYms6cy9kvWe7qzGA9GsbcX2E2aYdJwSvgY378GFacH11LXefT7TgAkUsxk"
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
