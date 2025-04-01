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
    "59PFU5kwrCGCyMbTcX6hHLr5nDbZ7hR2PPWC5DudkCdZg6uhwJS2uLJV8oVLVsJmF9VMXwuo4dYVfC6KAuAYgq8P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rr8gGPRenmEE6Pe4wVb7TN6nmep1La1VwLXgqkFz7JSyUWYUrfGevs3wRrV2w8j2L7HXWN26dw5sud4sHtw2tNb",
  "key1": "Er63ViCACfu3yP66zsygeRnYn1RL4rUVksJWmpQvqgpebrjecapqQ81d6eZmhnH8mR1R29uqB6gY4DaKPuLW2ds",
  "key2": "2p34grdLu1VW2nvP61QxQz1aPX27QknPBodfVVUhwwYLgDZHCMEk8KrdjdffbpUqJX7KJ7aoANpLaeAjDo7M38We",
  "key3": "5JuLYHy9NSt82bkGCM1tye597Hd9nmcUz4eheG4XEBeHRuWQPVLHb3ApTJEWdme39VN3BqVhEMLZ9yW6He6wuVqu",
  "key4": "4N1A6q7mFSeKzLSyfujPBPCzZaaeVbzowLbgVQEX3aaPWkigk3dFm9KtQN9wHYRLoQ8qdudAPbDiUrERkQgmBoPb",
  "key5": "3Yr6S3mVGS8tJXHoW7kWT5RYWY1vysbYoN1a6a9bnsEgjakrryb5uEs52QpPBGQyaRqGA3NLmvBDcauWK3GW9Bts",
  "key6": "3YcRKWt6M3rjYbC3XL2hiXWLzT3HfiX18qVbkpWz53TdQZLfpEbn4Vr7dbr4ymjPXbcr4BbXSpAk3AdUKvHpceub",
  "key7": "3SCCrXF7LTrTyMFVrsQZJrSF9graUJbR6nGmuq6FE5gTW4PFoUALXRRCKnoKyHrQCBujApmHGgoAZFn6zX5j5Vf1",
  "key8": "wcANAw4NxhNrP6fwQ4miv24MmmCtQRMdr4q4yRgSRRxLtoGE1tX888tVh2T8FbL58kScNJsHD8CmTgbMTAv7xXh",
  "key9": "3XNbQWrVGy54UuDks3P7iCa81HyLgL4TTSkHYSg9YMXxn5X516WeTsESeuRyEJzFZ38cp5MYzxhKXvKAQFUC12bL",
  "key10": "3e4jStBEm4VFPcFmxSUzLimXyxixj6s3qiAWcrq1yk4HQzDHNu3uPop6Qb8StMGuF8peAWra9ea1jfdiTFBqYn45",
  "key11": "3PfL8a9eH4r6Pj1kW6f8LErDFj71cPZReQHe3sPFr7JRBfYTsbpEL7xuvi1wiCBgrE5hLr8QbaBCBCiVz5HhnRkC",
  "key12": "8M5PQjUx2mxPLnrmS3yrXhF2TpYz1UBVmUKWZEgZVZ8995mzdeoHLKeQaiTKVTrsMjDYepBeiCW1vjAXMmpJ1uy",
  "key13": "3mfJSBspKWDmZBRdVvgGGEWEzTYmkrRdbeG67jEa6KrtzJpsZiFCLmUJRvmXvPt3HDnAYvNhC72fPmFoqNjt2JeX",
  "key14": "57Au1P1RNwrTZcArno7xdrjRN8wp1v6pBCW2DbJQSPbpAMCfLDWrYwmtEX1wBc5xp7DNqjPZioC1E2z3et3zcdVZ",
  "key15": "2sMsWZMS3XMW8S6RZyJePriSN2Mm4RxPsCZFaoQtc4QCh45264wvtW43AYPhjP37MdyJhi1Hz9uZhCREeGiR1r2z",
  "key16": "52JrfVqCCcFFuVxP9g6ukFh1yMLGkNKD9YT6HAfCJz7up525hdyn3t6BUHeeCNp27nFS9JYyLUxS2jXg1Xb2ULZM",
  "key17": "3gAKkyL6oHmLiVbwN2NTuoBexh3yJ8hGi1SJEtcwpBiKnJcFm7xttNf17zC4f7c2cFKVkbpq8Am93qZaPzVwM1qE",
  "key18": "5nAUAgjrE9iiszL3eAiXrvVPB2iPQ1TqNEJjUDycc9D4ShpFCCuZDuMSC8SWu9nG8ec5ZcWv7xVDRjAZGJMZdDok",
  "key19": "4tNMDRBrJtrv1sdhPt9rjPExuv2WUZPNX8aWfx84n1nRTdvfNySWJ7jfotuG3yRxQYTFUQGXWbqGx11g46VXHEQL",
  "key20": "47UtWiHovaDjqus9Z4mdmivWfNmfUvNFCTut3H2KoHgy7nCqsPSfVaUx8CqTNfDNS1Tv2KgCfwsHcXKjXKx2JsdY",
  "key21": "y6cfgSuBgPwvJV6zqssZCVRUxzG8Hz4xw5L4CgS8mXP1KvkQuxg3cAVH7EVFbJ5r1xAi4LdMdkpoNF8P4uCTDhR",
  "key22": "4r94neow31uT2vH5asjLHahX2X1dZte1Sjy5zLte8XSRmxWaKsjKbzwJtb5YQQBcbHZTz3n4vsEAnniJhhJPwxc6",
  "key23": "41JE2fPQDauwTfWxeeeuii4pyhU5X9JjSX6cBqLwNHt1Sb1Mq4o5WjPYfAmC6o95JNDZSvtXg87Xo6fStbjmArex",
  "key24": "4GY2n5YX59Mme6pQPxaEAJ6XpPTmoQ4Etjqr1fS74HNxvmRHgLBkwhrVZc1Vxb3HSGMVPxmVVZL7dm4XjaMoMwK2",
  "key25": "3wjxVEjv66z7oJSbtWNcpDxqHiXWU5um1KeuhdgpkcZN6rmGL2RZSGHQCZTX5SmYt3r7onnC1hJfFfRVkuUVUJpX",
  "key26": "3oUZtMpPaj8Tk2cwMSQym8wUEhjYq7kkp4JUfj3CNVCsc3BLFKVQiJJCh12RRUfSCeUJVFnhshQGgwnsaE72V5rw",
  "key27": "5YCrZwMAtbwbmmZusWZS2YV2Xvz7kVfKE9FoTqGBCdGD1tCg18pDL3kkhDYT2VuktATy9aWNCkywJNcQEYsekhd",
  "key28": "39icF7vARoqjEogncepuHq2JQikiUN9LR9CLcPPuViFMdvkFEWURtsf22VtSxeYaZYTNnehxd3HYS8qBRSSdMP9n",
  "key29": "67Gc9YCDCxjs2zXzjgETzjHPDrMxcuzdRphgcnkx7D3jiKwqBeArfX1wgaEeZeLSTULpasgNAGZR19eHS4rSfDJz",
  "key30": "wqmckZcDcrnS9UiqMh18vmUYRMZYve1zFTUSPRK4u5qEri3pNap4fTDCvgBL6PrzjweH3uKg2etey7BexzL7QPp",
  "key31": "64g2TMm5vUY9a2A2aSEjpv4cGwui1VfKEje3iCfN3uC5JZGx7Sz5vxZXLWU6nUvxUjssMrMbP1z4v88VBWxQqutV",
  "key32": "3GRJjFx8CbjApt7idL3C7hS7xzXoULeWkG8H3WbWthnee8ECmds1ey7X9KwubXBn9aZxheEMgbQGxrkroPpFTaVn",
  "key33": "52AQq1pDZvdwg4RCsN6ZwPV3WPzMjvcDh6nsWXQeGrYejXpPXosFxmEe8VbS4p3Ffix3SRyfmphiAcGdYJpVJoHy",
  "key34": "24zV9mhE8P4YFAkoG8U1goL1Hj6kdRWUUG7xgG1N8mqtzPa7QDLLZWontaAXDG9HuWvShNYBeRNzFijbbuqyWMk8",
  "key35": "2xtDNgHVLtJPeV2MhLffvzVJ8GFR29yLvs8nbobfoLu1Q42rkU4x1vChLGLha5CWjpu1NqdpxnarqXGTKHF2GpG8",
  "key36": "p9UcC4oEGdiavp4WRzChb5w1jbjN9Fa5dPgVzzFzkCE8J6uFaYcVf2taa8EoPG52obSUFJhxWo7pR2zqreUzL4R",
  "key37": "25WYJWyMAL8Zpq7NskLfbRSbqK7LyNKascStNdV9APDoSFb2aGpbSe3cT4ojQs5XtDwoUkK3cu5Tbt3zfyk7eF7f",
  "key38": "65AKUF3by3VVa3ShpAyFBN2UiJ6kFAVJvXvhh7ftCWcyog6hff2wrNKuL8mctM8T1R5rVYGo8ASeEKo6yGy7n8xf"
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
