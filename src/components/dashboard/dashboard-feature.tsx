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
    "9GnmPG224AyKHmY36LbhTkJVuqRbtXqZCsGukmeMNSGHYMSbV4DwLmwX3PeZ5e57vH28SPeA5LmvrzJsXYiExp6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nkuCFVavDprHroEDUk1zY7MDZNDe6zeDpN4UcFmyTbWY29rzYhBFxR1LB58gYyu96VTE6jL7jTMKLFu5ENT5k5w",
  "key1": "5pNapH1N7dP8PnqTBEFgEwvr89XadbZgdyvaXB3CHAAaZQNkogh1VDcLW3JLMRm46AznanEbmf3zsB5uMcnUesWh",
  "key2": "5CfibDStFWnq4TQakyyhTR76UN2y7Z42YG86h6ryMkgzn3hePx9cJrLhqRsx4gQuwF2j5w41rzqmuFYVPMci6W9o",
  "key3": "yCUWuciDMYV7Xswx25NU4hJoWMSYsby3UykaDhoUx9rB4qgDC4LMrwi5N7jxpC2nzG7agRevkwBy9RPvhfL8L9p",
  "key4": "2inkTk19C6FQjUd34auEa4oQqWm26goHXTyw6YgxnwVmkRUQW9ucprDat1qR2LhVmsEzohMSjn5WJYBqzBb21w9B",
  "key5": "5YbxNg4yvK6WrrL3Hh8xHV23QZ9qLvNWzkrgW2b618nWA1FwrevUmNXTBVrnLV4C7kY8idmrqjUbBgvH5oKAot3A",
  "key6": "3WyAmSBQqzM3gZfpdZnNbo1obUavhJ2gs2yr6G1aPpTa8WL796WvbhpmhpUH6aHQPnnpEasEWqu1ynmzToqmu2kh",
  "key7": "2eE2E63nWxoJVcgBEzAhFeQRwynAKbmnpf3PkNdkdvZ2ttRVmQZ25UhTMqV9ct7usiEmtsffsn3Bx9uy9HzHSmH3",
  "key8": "48T77hrV4AcaiK7Trx87qugUnU1m3nRrB13E2RaJVxSTh22CPBSD1NPDGQG2udUgyL3fVpq2mnvX3aXanqqVZy4C",
  "key9": "5fDaY2Y6WDxQdYAYVo4GfsCwtYFAC9fFoEUWF8GmopQvGZY7h7epLTN1SY96eMw2GhowmH4dtYxfJAzAvcRH8boT",
  "key10": "3Y38FhamSqgL6yyy4HxTvESabDmNNJDRKPGXE1wg61Ma675rwvEdXUvx1pDDnM6mGBYqYqowDv4nAuvtUPxVvV4M",
  "key11": "VAwtYdo7f4UKPPw8nRDfU4h3QCyaRCdsyyRJ81EXJajn1nbiLzuhfmP1wHKosqPFEAreBg5mcDY9G6vufgfHp7W",
  "key12": "rwUv8ctfFiBwad4f2oQgfNFQQkb8nZT4fT99GHeAwAEDQYkJop2HHJoU6ZJdTovjYTDqkMHpZLx2pmwitvv2YbY",
  "key13": "ARtXneBtSQZSQ7ePcYeeworpgP6EHw3ZaedeAbah58czJzTbCL49ymaNHQHTyTN7Hjv2AjSetrDmixzeGtU2m2X",
  "key14": "BZa3LQFqzmsjaRv5fhZGqnhY9ZKAGPc5r4p55kDPUBCtJYntGDT72yTHT6iUB2FtaWzXY45UMpJP8ADY678eorw",
  "key15": "4YSy89aGBfVR4aEhwH7cdixgdLFNyUvtMBQySLiay29TL4eHecEdujV8pRL5WuBVJsEXRwUW9iSWKqKmMy1tdHtP",
  "key16": "2vp8u1cVCLzG7zoMHuGMmXvVa6DLhTcttUF8a5CGqAkeaq4yndx1M5fbhwdZ4eMa6zTag6T35dAgenaWp8Pk2W41",
  "key17": "3ey2Qy913mTgv8uM4R15Bvszp6QbHCKAQkayw9K1wA2yG6ibGm7oEJFufoJVFjvXRhqh7QpbDyJEfg9i6Mj1nXMs",
  "key18": "3ag6YZvJ2efEDsKfB5ZTHD9pebE8ViSW7hhnVR9sdepXVbhoJoqWM8SaTVvC4jX68vsho6TAHTnoHprXRdXpEnUq",
  "key19": "4x9dRhzAWphZFBq6nCqBDHKt7otzZSJorr6rnDLSXeY8XPvzj91w3ncRt3mZBYqT3m7iJRJH8FTc7GanfBKCikEg",
  "key20": "4B4UR4B83D1HpDee6zMemxQzLUxwbhsVK1u42gYXvrajM94uozNq9Kd7Ca4BHNYpTKwm6ez9DYuLJc8TkRTNJEBh",
  "key21": "iiwzveopsUyBuawBfWniC7HjpXQs2fJxGEYRgkCcL7EHZ6jgv1gFzrG9sj8ZG7TeWMguSXXKcMYCZT95fjuty38",
  "key22": "3xzr8NSS58Cete3uuBcHDTXLmy4twXaTMsiNxMVjnTpuNMpZdE45NCoh6J6on1UQzRNWQ4xf6jouBf59WinwGjoM",
  "key23": "2GMki54U6bxi7WvoZcJarnBTibcFkPLLED4dDHpcRgsmoJAtbCz4cyTdUkY2VcrtFjxahbJWZ1wF8EkXEuQbpSq6",
  "key24": "5JeHsLwgMz88t23iRykZHiypuuRHzDMgQ9VEhZWw8gUEQeEuHzRLEQNYp3DSCkT4NM6w1xZxpykzeo4HJMEMFnf5",
  "key25": "589KifYRsQjUuR3izaimcgnj1Qh7GdwEM3tR221iXxFsgnPtFgHVNC1RuN45P7WSzqg62Pr7qSn2eXsUXDM2UDMM",
  "key26": "TaYYgYYPPegzmAAKmpt1ShP6pWTtESvCVFyhCVN5QgF4nNPgZJjE7dnz6oQzYGCMf4t1fPYDinspEzD2sy3R2td",
  "key27": "2FPsS83ASr3L1ji2JpFRkrt8Bcbfod5M3u9Xpc9e6Zm4wh2nxW397ipCnmHf2VLgwqvCadoKQnYp1KNCPqFyr8xA",
  "key28": "55YvMdaUsKLymhPDAisQDWuEko43shymc2KyanZkJWQx7BT1jRAUCSSKzjWLABeBuJixkAZEfh2T7esUzj8evzy7",
  "key29": "4kHhGPoav8LftcECv65H3CJyFifqHjPyWwQ7SFv242hpKPHPHdMGrxMiWgzht1Dy8qcsoPUticrmjUMJgvrdrEYS",
  "key30": "26Rx16A3f5hBAKJ7yGD7ZQdstnQvAQFYLKagL4DgRudkQkjyJjCqyEfhvJUoUqwKWbpg5R3v1ZHxToyMJd42i713",
  "key31": "2LC5VdPhdAxEtU4DZ4WNS6UHBaxMvhBqW5VTm4393QhcwSnqmdToZqVKi4nbzhuaZxEfJfcyHWsh45hQQjS9QLxQ",
  "key32": "2HeYxeAGFXUjcHV9TndbCdK1aXfuFd7yG5y9bxukM92Q1zZPaGRVXyTWxGD8FSWowNLp5sxhmjSHhXFKVwhKMiH3",
  "key33": "2dCZ6BcDGH8XbQe4k2BCGk2PsRiasVpjMddX3g6qhewnN3SjjbGWAER6kWKAQE2Ec9ANEpUfF7o2jZTarUbt4Yv2",
  "key34": "3rgE1cFsVoedsG15oM3Nkjgug3PviSqKwcCxZbWLkGPbgbkaLXmykpJL8bwnuKGbwSWiJb5Sqp1wW4SudDDXuW7k",
  "key35": "Q9ox8XjHdetFvTFhtp31aZhURk96YcDZrr4vP6t4UYH4mrD2cV3CJka5DPZV2GKnbA7Bmhfxk1FCg24wS4WsJSF",
  "key36": "TFD2cd8nHdQiX5bBkkVGCRWj89fvTMZZZ24rqpv3bjKnZUpwAgxSYG7HazQqUN5ge5pR9GatE56eHqMgBN3etCo",
  "key37": "2LNMmXATdmxC82gdYfEebHBXhRj2hZ3UTYq16huxJJMvbBw7Uf2o58e5gsgP4FiQiuGXdxL3HRGzAve79JPqBPsK",
  "key38": "4WxRRUPt3UdLRWcBzqTorekieheYJL1GV7Ngfz6MYdbiNbajUjC1k3VLM5BXTwGtSNEbnjPwuA1a5yZ3nuzK6FtF",
  "key39": "5mZhrDJJVaMC1JiAhgTn7qQ9UBKMDNxYKxTvPm12VUt6uU8UcsimBk4NUk6UiLL5aebzySw1fWQtnXWJKAdD14DL",
  "key40": "4nBwjXcBKn7qEmLC6TBr43hExHkSKrL1r1K6Xfp4jf5SeLVJfP6WdxYcux9WmE1CddAoNUUppDoQbgobJxz93Phy",
  "key41": "52iVkKzNBxVkkjyrmYGGYVPftWmczrqcCkdoAdbn6Vf1LbnQ8Q3hqt23xvFt7pTdY3UeLWBZqZ3s9cbi5MwD2vmt",
  "key42": "4SgyC2YFeWoCc6zDA7Betp1Cp3Q7v7bciJPckcXjZUcsVi55xoWkkhCUrvjaaeytNXZXz3N9MrH1x3wU8md2QPeZ",
  "key43": "2Txxgd4RXU6ZziGmsdF6dYyKpdeaTwfVwU89YrDtSXBA2hjjZECezsM6S9JWCmNwLFS5y6N6dfW9mmKSMUETZyjq",
  "key44": "3wMP45S2A9cNmtZjah63qJNW4KAVuCSwHXgD72EEDuCccj247TqzMz9Jspia7sFsoc1R8XfMeCqsY1f3eSRiJeUg"
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
