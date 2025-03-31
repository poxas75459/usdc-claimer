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
    "66F4L8YNpWgCQ9QY6ynZyzohPDnj5jm3dLpnPgAAzqznUPeUPgu5feVLUYJgWKiB4eU7vkbWgEQfenDMZvon6zYx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51FA4Dxbjb2fG1rxF4gfb1niwFo11WFQJGKUjnuKV52cgFd5bamgTuuvJnK8EdRTi6gVsV4Vq5UyNvs8syXu97o1",
  "key1": "48WitywM4TfHjw6MTFyELN4ywLjmpGtmCajZPNmr1vmM1Hjap57oGZu1vC2faUh32TvkkcaxAwBYvSA6WejgYk9v",
  "key2": "4seRVLNX6DvqyaXs8wtoZWyA8pAWH4KxMXeu271YkMG52S92mSCqDhfCkzK7RkW3EJKEcw6w4GrZ2xkEbQsYvdpW",
  "key3": "5uv8pWzgRynuxN1PhpE5d6xDVkarQKEJBZF9pWrmvgx5dqGfuB4zd3Fu8fb4SbnkCuAL61AeG6o6t9poJLbCke7M",
  "key4": "mtA6HK2cEyPXSdonsnG1uA9VML3BdCzwxNMhD32Wub86Hcn5JNMXLfqWnaUHNfujd5GCPnDXLp4fjAEJ7sQWga4",
  "key5": "4PtmbxoZ5A89xBK7oVmDhYktfREaYtqs6j62BUkFWQZprm7VLgBXj6U9PxiEsWJg2sD5EkVBRCAdkdfhxAEDJGYc",
  "key6": "2m38cUHYV7WRW6QGzjQiaGjxAkJeaqeQ7kc7ekhgcbhBm2GtLLVfrBBYDjzby2drDSfefgBM8LMdo9RWmRSncmtF",
  "key7": "8xq6iqihiQjryg2USkvbd6XZ8MKmeE4aeHeqx7coiCLymjYVKdJibsKDFR2CYNo1R4bgh2m5ufFfo3B9ThwSEFm",
  "key8": "237iufPjkpjnN6BpeDbHHyeroDGCegyy56mtxwHKCm9uzt1WhpgyWpNXMT72oXx2t511W51cnGBSvUsoHj5qfXsF",
  "key9": "JnrvkHKh3Z98SC49BXos6vPMDU8NJjxEY4jKHW2bp9EoiUesPcejwAe85A2WinUQCBxYKXBAgKr5QtXUcjSQhUR",
  "key10": "49tBVcLpeShDPvVFFSZzFx8v1R8zc5rhv6dPVxHiVwgbXGrfF12LikKX6FMvxVyXjPUnLSzKegCtVVQ9ADT7dQ33",
  "key11": "5s9TnVnuAjPd5v632k73BjueinyDLD6T4tUEwFAd3SjGuRm6QsALu7xR6WNvZ9dgekWMaPFVT42Bo5pC6q8EoD8a",
  "key12": "3odZSNYLHrWptcnsgPvFySMxbkcqPFmWSABAEdeRpY8SKGbG6WsnDgRdgBerScjLjeRiGFF5rEmAa3DBjeMXYRw5",
  "key13": "2SF8jstC7SNcrL5cFV8EhP1sc7kaKcagKw6SFzEeuhDsiabp61f4TnxfCLBfD6XgVFkTeQrctJcwcKjjcAbzpDAP",
  "key14": "3o1z2fsLKkx18X1C2F6EHGTUch5EDBNxDnnjNbwACXYxQk5sxBJntnMdcUCWHMmF8BUbHouQ9D4KNBgbSwUwRtj8",
  "key15": "4LEfxxrr5WpR7RWTPzQaCuoabVvYh8Xon6H8wdY5t75VMeqA6uu5Sb51mUxQWu9Fh1ycybsbZ7TGbAMSgpvmfqgt",
  "key16": "3XAgmWsYdzGnpgsL6xDqhP2FXbv9MAbybd8izGkjhZ94FDYa3SPDDAEnLN4zq6jYUHbQDbcXnwTbYspH5bTSrXaU",
  "key17": "1bcyNN5GGUeaCLg8SWawmnLa1YwxA6yXkuz6Zw2KYHNZBPJDAK7WgtfzwmhrQqNNVke3Kmn1temv8t8NhAmPRPt",
  "key18": "1FA4QCbshgcn9ufR98MwKHsrQFhP6qxfcjR4eNt8npYPVFs9dPs2xeMt1G2grPrmY5UxYskCvSLVWRpqLKAowx4",
  "key19": "4rjQbocPoVWLRYimjjgLWqEGnzjAYLyn1i2ggfbpf483xXMPZNqbY4Bf3dtMY83EiFhUQ84xXnEZ6FxthN86WmXg",
  "key20": "4Wsnvyfi13MFPBbgBrR7D2tkUHDfVW92uJKowVDzJo53gmDjFaNCPDQDP1otB4eZL53WcGC1cioD9VQsmMfXYQtE",
  "key21": "5ADGkXHu5zcFt6ZPS4V2gE3BwT4SohggGXHbcmBbDf1tioujoK3UzLSuLfm3s37U924XT2wFWM1TCGYZfwwnYwLy",
  "key22": "3h79U1RbyQEPh2iT3x1fmvFybF6p75eGDQbKU4JMUjdnFbUqY8fkDKUidNAbejhxf8UBqMJDEpLTM8GkCdQifr3Y",
  "key23": "2Z75soYpZrHZ69ZTxgaFtei7vpQXz4NcAtJ8ZLRs2mxCMmZv29iQgGwKSSgJZCmah5BrLgBNgdB9WEn2zKHikbFp",
  "key24": "xQaXjyBMTw6bMSzHpGy97WBxTcSDTKRaS1WinpSM7SQDUkAKZ9zn8fAp9LoJCYoUCwdL99ByQhnhR2RanbdLHpq",
  "key25": "5hC4VVgjWjdLPLeCsC6yCCSnyYzj1XjzwHa7sq6CkqRBxtWn94RehhkbDUwAykmVSFB7heF6beEjQZBArKTCL4JE",
  "key26": "2AA215fqiFfdWHo7t1WE1MMCgwfAu7HaADJUw9Ym6iCTJQwJSsbNbVbZpay13enH71grHV2H7XQKWGcot1a7ZNJ3",
  "key27": "hwLHRquwmMFHpp9V8AQvafk1rstPv3gzSEM5fYntcGFGNGuNMBwhcgD5ggZ23d5zpnSgPLh3L4Wvau4SHSPv6FE",
  "key28": "2LCM46pK6b2zVN2sfXFMCdnyZsyQLj9LP85bDLrmsWgSDG2rPNHC8LbQXyqctibUDARC5AJa56EQ76poY92xVegq",
  "key29": "rKAbJ8xXqpDRf3Z5tnbtPkCmDEW1Kg779qmobvVdBjxWCWE1HeR5P3vcBn3f6hAJC9woooRFdeaysecahMGogyD"
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
