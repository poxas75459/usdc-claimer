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
    "2wZM3LUFAk8eJZg3mALF9tsk4RMmRfDYdng2zxYWtvwW2BdSPgYTeLQmWKxgHaVEcn2Com8x157zGWxTEKWPWRJH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bxhNwoBmeibWdQaeuPf5B42an3ASnf9833M9kcyNcNUzUM4Uf1D1arKuS3y3Lw89Bdw7TExowiyjE9tMReLBESS",
  "key1": "5kyVSccbMRM6GwjPE87SG6KfK3BXaMR2vcCwU334tCD6yU5NrGYfP1Kh31ayjeeRUcJDAj9vKaiYjEYGC636kHfJ",
  "key2": "SGWURHqwvRNhBZxNXHoMtoc2y47jA2kts9HWdC7uCPEks8f5AdGfHzuconMAkHMMoZogd7FEN4dGjHJtJjYproL",
  "key3": "4eGdw68inVdXi2MDY2bdAbTmoUCL9RFUAXDEMhVNp9gXj1Q46RZEMoxfSkvhMUqfeY2h7zUyBLDfrN2gsmayg94p",
  "key4": "2vFwhpbBm1Euiu6sjVGX1yHAiRrNvSd2G3U58aLV3TEA5Pe9kmAtwjsHPDaDBoEJGN8R1xF1XgZvGUgMfuqc7sJT",
  "key5": "45GmxUDMWFMDKjmiJYusn8BFx7Y7CTGLz31mMNSjd7ipSLWFZ4zm55heg9immLzNKVhWHnD4qjhG67KaUUfwP8iz",
  "key6": "5CeB3d3TUNK8sXQvpMPL1yyVcDAPK8eibBXr5Nx3tYfURvTAE5MnCbQF6wWV1WexUyoo2172tsJAkjg8kw4jLCdw",
  "key7": "5ZRw4bPcon1GZ45Eicv4o8j3bgaMgNU7nGQpJV79xEXCrbDKY1eZBg9t6GYP1J1N6mkzKAR1J1UMLwYdgXFRF8HT",
  "key8": "oe4f9joTPm6U9XNg14S9EVLBuRfpVRAtabGoue2raSsgmwDUY3hagYtEccfBNC6wKhhjwUjh4En6mLmZYpktdwL",
  "key9": "4EXc4stVGHs8gaCJA1AhMtS39dVrW9THya7FtJtuLa3bdGouupRY3Kg9qEPgQijxpesRrny63Lmm67NADuPuRnUB",
  "key10": "5EhSZrHhcaXZB8HGpoaFwWjNZisNoNxgdXaGccSJneKzTVXZAUWcmuouZPQfSDwPhXcE5kxUbVmw9nu4Dd9eBKT2",
  "key11": "5FYuYvQ93t2gQb9uNwuHBJxr6UbtvVQpLGjsNft65ooXrGWh1hCpweDH9tBomvPp3d1yGEa1Z9v9Ua5v9yyzGfUk",
  "key12": "4Gmy8s3FeMKxsAyRc2xgg9NeyrSFebTk7ue7WEfbW3nnA5Tym3iqRFqjz8FREECKWBvz1qKahtPDVV8yxRrR8Hkb",
  "key13": "5FB1ZDVfeuzZkrHY2a3RvcmXpXS23wYzQ296twfLoUrzniWehvooVXHTkN28om7QqKbfVtuoTgPyoCBHxCdHbE6T",
  "key14": "53jw3v7pm28dQhRk3TUWDVZoX1HaJodPYmHhVv5MKPd1tRdWHW4Z4PNPzg9uF91qjKtHRB25M2VP1H6MJcv5otsR",
  "key15": "27qtSRNDG8hMwa9dQiAt1y9rbGFCWJmN6vQm1jGjou85oweviA13BdUUF7C1wWCNPcSHQAEkWiQc6hPbZDtMTWEw",
  "key16": "4cw9PbvvkeriP8chewduFsdRivm9DsqaG4C8P62n6XLhBZWKZiY5wVqVTmgCRzq3QYmQuEWbCXNzAv7BcpqfZgaq",
  "key17": "2vuxG6B2p2uUW6zySiRpDmjcmxU7qLcRcBRd7Udb7mBAB4JWp2QnzizdR5QcU5tkNH7rse9AyqUMQnVnxgLown5t",
  "key18": "2bg3wr4iHnkv5mskxcvpgv8Kk4LpiUPc5AXsYxQS6gLZE778dAVqr2rSxPunSwN9bWfBdEWmhHUdAPpVbxqje4VK",
  "key19": "5JVivpz8MKHE4bTLa4iGXiNxr5JVCtgaysXcD5tHVkQZ3B6QJbGLXZE98Xf4hYsvgqmTdhnVRAEWg6A4xaTMxeoM",
  "key20": "53DcygHafqpVJVwcHQkiBx1myDJh2TKzymGwiCABeqN1M3aDkw8aJCAzXMxbkfqerUTupXazMC1R27AwTBXRMPDv",
  "key21": "5KqZd5d15gNh4QyER2iKu9Q5qoXFG9xm5yChEr5YQ5a3STf3Jox7dKDGc9vYqvhkwjLyAUN2XsDqPLTwmGMTNtXJ",
  "key22": "2782GzXFVhdwRj71TGYygDFryoyMVfWRXzPDQh3eC57CETnRneE3qC14D48vNAfygzoimJizMcuMWNGRTeyVtoUA",
  "key23": "3na6iWuFm1LTHhN1pFfSWMcckvN4uGZhJK7kcNhHmJpUHjoEKThugBidKVffTGYx9vDbCw1z9nodQ3iLoFMVfEWx",
  "key24": "2JhwN5cp2uD7Zdf4oxBFPi5K8XxB6vPuK85Wdrdk7D4yWHWZTw4Na45KRKbqqvmyxZeg7cXiNsf24ALwfc6enKGc",
  "key25": "2HN5ojov22bNqrsM1nhBhLfmcYHVtYgxmZETNuxbM8N3KL738aLGP2bpEHa5RXHzrbRBBw6n3wzdTGPMpbGMt85J",
  "key26": "3veazEWhomND5pqBz7jnDUQru73sQJizEG2tJuEWactLbfP4xrY8h5joat2ytZ5RW9yLTnbVG7YBLjcnPLyNn4cZ",
  "key27": "3bdnSCbeGmyHvvFxmjRNEk1kCd54UN4aURnnCtpwpvVJkxrwq64fD4yX1jzvtX1wg4B7ZHKMHdfxot2kff7FGtHH",
  "key28": "BwyRGJf2Ya3X19upXxQZaiiNFWWtrjE7ixqhKdgV5LtaZry9MTjZ3fdq8vaFKEqFM1KpBKrj3uyA1EXYPmJraKy",
  "key29": "2DDVQE2w8zmmDyq5iY12ZPru1fXxtW4q2CsMDJ88CL8GdhFViA7vGrZXzHvZmSVgPQ4aJ3Zyi5Xj8D43mu4nWnbR",
  "key30": "5RtPxcHyX7pfx9yHFMAimPi2z4ssbUveWTkX6T85drmwqRpV4vu9chUrGbaVBudzk9hAGyiAKfGfgEsrM51pwoxD",
  "key31": "3F2CYoG2mAC12Z61EWPCMvFmHtHerHwseUHyP7whqyX8d5zn2na5Ht4mBQtuQBVnFmHasa3oZ3Ea94gLMoeUmkx9",
  "key32": "fpYwPHJ2cJkWz5Z2FcP4XxT3XyTq7GTgJQ8DGUaMgfxE2uCdCq4E9eWc9H4Mtkz1bovTieenDK2Rt177w22K4UV",
  "key33": "4MiNvMxPanqzqbuYTE9K866rAsDfVzfb29A3YK89LnDJtg847MV4sPLeBBuk6XqoQKW4rCM7u8YrnHR31Hwrbg8V",
  "key34": "42ttGoYMrtc2ADmj7jTuC1jbZxHxcKbraR11BTsrQSxKL4NTiMR8Ha1NNSgMND3L7BruPuHSYiSmEUdLE2AVYEAE",
  "key35": "4Kv8qk9TYqZQzizTQFshQYBkEK6fZ54at7YibD91C3jnHcUytpR3odA5iNPMjUBpJMzpBxmhSrDwtmUy5zs59ACF",
  "key36": "5o5rKwGokUH11P1dMPK3Z6FVFCuw7BPVBDnqcYcfws7dT1GsgYgaVYX3NVmGzALNhkse7JTq4xXzuyjHSecH3Ams",
  "key37": "23Sn9KDetcaWYWzCZAtrZkAkF6NBV7WZsNFdbxr5Sd7kMMNyuZ8AhX5trjKNyAxtxDA8vQsqWsowxRNjfYMJStPg",
  "key38": "3y2SqPa3bYwCw6RQHbdMBoFfnLM5jqXrZe9wC8tMsy7aiX97NQPUPDYjzbsEuszKy4woAn6PvPZw4ybGU2LsUtRQ",
  "key39": "4kA2kUJdxukAwfryoGfHPWRKL4e7sYe8JKovJXvQS8yWkUBeNPm4jN969eg1ecU4E2Tph128z71umT2bj2fdFbVE",
  "key40": "3f3BCVMmi3H4DpbPJXrD3TjxcBDnNuFAkYwey3ueff9y7PsmKcVEjBu4SfgLrcKYKMifySyZUKbPDErrXjmxZxpU",
  "key41": "2CyLLQ3bwiZC26qozkNzxE2nrJX7NnvUGziSap2ivvGichuCAwnS4dujBNsG44tTF8wGURtxqGmsEvkmUkUY1t2k",
  "key42": "5cjZACrzVrBfDK4VZyPJX2b5aiLNCguX33pCTddqk3Bu4txAahHuRVDxBMx9MaJbCs7EULmFKuSHbsuwsprLBHJQ",
  "key43": "34RsY6roiNZhAoUFNBAUmbKMtvs2kQzAN1thrmVCJPfEjwvikZPzoAuxqj7kUhcyemCSsd2NXaP8wVxdYMAEv98p",
  "key44": "2txzx7iHYsk4PdhKmufgdAFeX7oWus5hvy347DSSm6ZK4iZLthQbshfBFjnfeQgRCAJ6FXLpmEUWv6jBCwfMbaDZ"
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
