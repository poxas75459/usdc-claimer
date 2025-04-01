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
    "XzsjzffTGbnRg1Sc9S7ejLztPLqnuqGkiv8jUb3z24JxjvsSvdQohM3Y4nrkqoYSJsdWukotvQ7JHpchcWzCySt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iNQL5EBEu8EUGWe9E4bRi5rt3bswfPfKgrE5NPKDoyG27gWPp3Gxwa54sbawQorQxFkHfS1dpf1LgNFZyqSRvuV",
  "key1": "r2jG1gM8ithExvgvvt2LjJ3bWD9LnsoZFCRjFmDrXqWdf8q2BEo9UrwFNqAeyYB8yzJvoy1AhZx8A8d3s65LVzy",
  "key2": "5yefVJGVKsijF3jeXYCN6M71to4bVn4MD6P83jxC8FNZNZp9hmvkJ8VsdDpsVFKdP7o8MksR6JUDQ7diQ83ZdA3L",
  "key3": "2jgcCDszMFZ5QzgZaEu6FnEZ9DfUN37FteqGVAqwu28JVpKh2X2YTXY6sSmKyrmPBDnknM6gtHEVBgu1Xi3GSQjX",
  "key4": "5xVBnvDz8EsStioh9x5yrKhTVMMfogN8HNocuFTozhYEVGx5wZWXXPhUXtmj3s1yMQQyca7L37XNrgUXwWsDb8Kv",
  "key5": "44bYhZpxDr7WAbe9PkrF5UrbnTiG68huXkV2NhXYkzJTff5hMhu5P6s4cRDZdJR4LfWiaDhPEFJ1FHagY8P2KcNA",
  "key6": "23jwMcaP9o7dVRSSBQuqxXmizUJWYYFvQzEH99E6jwV2ze3D8yZ4BCvPhbEcoTDKAYc7JBKQWeRqrkKG93VSteG6",
  "key7": "3ypTXoGPaJpcmDjUpe1YkHxoEqYrdCWmq7Z8iK4bhriAARR74eP7g2xhqNAtdKeSJgGwoSEUuLNRQbfiNHt2hxE2",
  "key8": "5RDpqkVMca6KZdoBkhqa5Ch4eGpJo5SfLHmntYovBAVkn8rJZqQbVz21H2q5iTN22sgRSmjdpg3FxupSAPTu6pBx",
  "key9": "WkRsrJtfwfjxB5urMYYP6ep8eLMhiP4RohSZWotsTPgMpNsv8Lho6xtbbgQ5bQKquYKj1ZPSKL5LL7NJvd1kqEz",
  "key10": "CM9NakgN4dMjxnSrheME2qozeCa16exduh33tHNoXwcX1n7soMYmNfFgAc1W4ytkVd47rKQxrHaBGsWjeqtx4KH",
  "key11": "2n6HKWnBghySFXR12Pwzj6yZ6G7YgfPi5rXCv781JYZzeiR7F3i1xHAHLGHXbAgkGuE391uN9r5GM59f4Dt7m1J",
  "key12": "62r5F4ZoMWNkWPBsYcUpoxRhWyMoLJm2jvDWYZKUL2jQgQqizQj4uiZMq7TMuYtrbXq1cpb3XT3UaiTwmdJWKfkE",
  "key13": "58VZaw6agGrBXxT5VChGTpzHsa7ipFxUunsUmFkHt7PqaiRbAodNhcPQh9aGDkSx3H3htQZWPyFDUZBAsT3sYHsJ",
  "key14": "Y9PYXr5ExZ9BRhEJUZRWizDjDhZssMBmp4GDQuMeA3X5cZY7DByqXE851yVbvr7Wvs4secy8SRjhG3EA1HJ2NxT",
  "key15": "AF6MNokiv7MFzt9Lj4F1KK8EWS54CxBQrRM5W1cQfKMTtGUvwL1reeeyZ44syyNPpYAE7SivMFdDssfBw27vXLF",
  "key16": "4AiTtLdasorkzrtC8dyUuqz2NpPLcdAX6X8YnHFrLa1RjFky9qRzq5URquCvqoUvBBEXEZmg4RQACp9ycgGhmKNF",
  "key17": "4gwUHdmakYXcanRtxsZKETFgp7yfEJbDPAdnd6eBWuhwoNzViZscyoHi3AtkGE3HHvbKskMLv3vEErL5MmS5xZ1W",
  "key18": "2JpNEZpc3ywuWEdmzZFDVo8jQkW5FhtjW5cnRCEtpeVakYDCskmpDqWSj68v9LpU6ue6qjE98xcdCjw5rR9y2sZQ",
  "key19": "2C8feuA1MhZMyzoPVDY2AzGtu6sC81KDLHu1kFtNgroAynCGeQHTcw66evPtcFXtNSU26BMFULd8qymCP6MGTD77",
  "key20": "3JM9XrNqYYtPLtUKZKoFESsMNNgoHUj6bkkLw4NMVjMtdeBWtNy1qZJAaEAVNTqCB5UREqyTGFLriPGh4EKZ54sU",
  "key21": "JMRUaW63opPVLhmfiXrfz5reXPojGCnq2GqDh3hndriX4NhdYWfG9yd2SZMQfxMW7VtEaySj3HxZ3ghkoQ136ba",
  "key22": "4kyUgeQQ33QP8RU4XHvpqJHLBVTsZjGeNAk9HqHG5CSdxhS5cwMWJtHFz3cHhAxGmaiCKoHxjihPxexTRxY1y5fT",
  "key23": "sGJqRc3gmnEjEypHHitKPXik7S7x2LFtRReHj7mv2wJJqXKrrvBZXh2xCdVFvw7AH9Em6GP6hC49duaZJJw9WZw",
  "key24": "3i3tyknrQkKe22wV99j2n6yECRJdK28FSoYGiGNAxwnQJy5vLdeiH8FcnqGQqfJDKECSNCbHFk36X3dN1joRpfzR",
  "key25": "3f4ZUFD16Eph6bJtfK7gRKQMfoUeBUgWLLRiWfSzhB6qb5tn2V2FxVnxKgqVEJbpdK3woc1w1TyzknGRrgjwXbZD",
  "key26": "AmoHXcGY7gq39G77CRQyk8pKkTq45pWS5xXRaS6nXyistJeuqK64DpivP8WEbaERBhyPaTZCQF2QW48eeJ6op4r",
  "key27": "4GjBykitj1Sr1taNKi9XqSNUrwtjkyAB2LAYNwPAqSn4GLEGGJBPtn3Qoj11PoJbSC19xQ2o8QbmZ6vPYwYWRFWZ",
  "key28": "4ERozMnDqAE3xf52VJcGBwGZ638CfvX9oyy1Q77oxaVpYsnpGpaQ2hHtxKKxgJ5UD8zN7q2Ahz6anVPKaiWYEmxz",
  "key29": "4cgAN4cfNpdmRFZX4mcWomyfvEK6GBYxQmrXfUUXkZLeJaWFfLofpThHEEn3edJB515iGYVaDNdvj6skHTg9wAXH",
  "key30": "3xhspcbMPPCNFvY4Ab7tHc78sxjtuVH2GzQwrQBu7ocVoCAF3jgJonTisBTcKZbhiE9P33yS9CLGYRcgf7cYJwTY",
  "key31": "2SW7TMqERx65i1rQ2Zr8d1yiSjwp61bEE3v6DBehpyuJSVrPWbSvw6vwEZr855NgcVGfsHjy8xwGaxDsujyzcoWQ",
  "key32": "678qey2X1X9knN18LXvoyRqCBmZe1qsyYQvDfEjkB7VSRF2JGfLNcfMyPiEHkQNJsdPbjUMs7X7mJT61HYgRdq2y",
  "key33": "5EnBAjS3PHE6QHCXDA8U9EiPLVJgKdyCzKbEEgGNGS62ETko5UJpLLYhvxfBiuSr3ZMkzhJ61dpVCg8o21vDUzxP",
  "key34": "45aSgCZihNFwn5zr8yttb9WA51nMzwDLhRYvMccCKgdWWuoviSxbrcQz6wPKyZrGMf3QFJDHVyREazWqzPoFexZH",
  "key35": "29YeAJEFzbcaTznuV4t8TiN1bCet6qcrgHxRCwbgGAGvBJXhupXmJdmEe4qW7TSH6PekVbhRK64qkt1tDwdD5aoh",
  "key36": "4WrcbNrvoPyjKzjUCz4KGXKEmMhtaKA1LosViomugsrCGMgv5U7efTMi7SsmZyMcGRaWrDgEDMxSQMdFvHqzWaks"
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
