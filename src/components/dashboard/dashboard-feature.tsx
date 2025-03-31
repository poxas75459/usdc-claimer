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
    "2pLRxU1z4E9a7usevdSb4gh7LWWjLtcnmqwVDZVHiCETSFgu1wPvWecofkzhMkXqpbx7Z5wTL2VRtfDtTcEmqfDY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VTjR6kynMU3rUdTE33gDxq7FEt8eJq734k6PFPzoyY2U3VBhhWbfQtGd5c8xx4WTfKE8zAy8on1jP6SmPihTY2g",
  "key1": "25mSZzdVX5pPDcMXt84jgX1VDJtxHFgPszsDRiSQpPeur6JFkAQpFezFAXq8VsQKvwRbLZuM4KHQs74eLs3i4Gab",
  "key2": "5omAmwJbWDdDgrqDwz6Ye7gSjzSFeCj8e6p99f7F1UaC5AJXEwzT4SwZKDvVy7itja2EtXKnzBzxwcR999ZXVEED",
  "key3": "3Ca8xYTfACqkQ8531r4k5VBVxicUsWnKrgzc3v3NiYgU6bcC2BrD5CgZHaqxGMjVFY8axpCSLT3yGn3pwSLbFeEF",
  "key4": "vtnA4kyyP5s2iHghsKX92nHpCMbVnjWm323TZWWuu5UautUxH8689UdHx8653fsU42S1tciU5RP5Jzwuw81r3ZU",
  "key5": "4M2eedRhrpiZCXpcm81UnAiHw7agDhM36gSwFYZhab6oBFtqFnTV2hcwyPmEfozHa1vP4dmqu2kRZg3vfRomdz6X",
  "key6": "5faLbhy8uKskPSPx8rGLdKtryt6zWWZDjPfyUSXj8xoZAeN7unusUa7r4VxiBdqb3vE9EAU4ETpcnedjv4Svx2b",
  "key7": "4CQRRzfaPq1X8B3VUca4qG68RsMcPaHNsTUGB6AaXLUWDTPeRrs4etKURTkrGkmiJjjHGe6niNL5TLaPqGoAqyF5",
  "key8": "2Js4Js8xu6dJn9wonxCdn41ejSU6TSs2ULk4UA5ms8uW2YVsfnuc2UVt7c7Ae5w3X97VYi7baLo4UE4a1y2YNzZU",
  "key9": "2H61BW4uvkAdy92k7W9G7ocmCryWwiQ9hP5geaYrudAY7hCJsy5Jt3jE8XjZEVmpCZefr4hde7id9JJVJizaLtNj",
  "key10": "ktXqpL3XBc3yEV7PCpXbzH9B38SyAeQU1VGU6eTrex71wCw63NPAdpSsV8ZJYVH4v789X5VrgX9DHrZ7iVyRFpY",
  "key11": "6JYUHbrNbHyYpurLYiWxtdb4xmaxYf8PYGYVHpwKxC7ybrjjMYqNvdJVyu6qe2ase3Mf2TnLgxeeUH4ychvpav7",
  "key12": "5u53c9jyEWq7eKbPQkZNYKq7Lu5DX5Jwiycc994xRZEYSLVxf311iTayJEfuh4Hi3xdWoUtkXsVenvuCqFz4UXqT",
  "key13": "369hnKu7F36cQFFxN4ZhceSLCCh84Wh9BQ2inUCNr1nBxdcJhw6pzKeY3XPDyeGSg6hZmrCWiwyvgowUEYsQK9Fz",
  "key14": "4N8Co79VykT6VWpQ6tTQsvAuEyVcFjX3yJTANWpYzXUNiVPyjXWvEua1n4LGnNhMW4eAhNzv4fhBDaM2LwnLLPZp",
  "key15": "5k7SBickzMcaWSGhRPhePKTzPo4mox7PpCshbjCqf6B4C9yu75F5nwhYSygJewmGxa1j9Zf349VwVErzazKtYu2x",
  "key16": "33TW2JSnwfQrJSQPhPUgoSw3nsPsSM3RkJpGQhMkFuRyUjJBrZjcLRVuKM1uxJ3tjf788puPPAinGrLXWFuSxmzz",
  "key17": "2agqBQoCe6pcWGhkGSb5RxaTYNww8bh8KkHu7NiY1vQYdSsTTMy5qwHg3BDAbp1wriYZZxFKC254yKJV7F3FGr4h",
  "key18": "2hD25DwXFUN7aewTZbVbgy1HJhEdNmCYRmHR2s8p72ZyXm4na1s1VzFbTHjTnTFEiwA1FmKQbRUx1WQ2T6nJLysA",
  "key19": "3sJfv2MWbHBRaCSYKNZBd8AhiKvHcJPjFgDx3hkPSxMsARF1UD8oNU58N3vBSTav5dLLTaJaugnHsjECwrWEHxTB",
  "key20": "3BaHDQFVuHcAnmNwCW9C32Tqmv8UsLHRTNBjfKY2YLQZ7WfEBLDRfuhP9y5WE1hBnDpUTbkuvXEs6E5TXDnr3TsM",
  "key21": "36Km1AEfu4hsSKv6FjS2sqyzE7bCTgrsVgMNZjEnE7sEdKb1VdFopMAtX9p2F3HiyJwoKCivLu2GbyLFJ8vWVRiU",
  "key22": "24KgHnyThPQFkposB2crjzBeSiCKdcnvcXxmCX96brauoU6pBX7NfPPaRVgSzjF1AuUXdiJLSAuozjX4YV4fwaki",
  "key23": "3A2epVYKAqKi1KvW5xREN1G6N2CsdpiSBvW5kDj2vViGa2kLaDkbDLut1G8Y6jeGz5EhisbRZv2mAdshLvEq3wdV",
  "key24": "iBMzAaxQUTKun6zzFFV6ZSCzMRg1dXFv2BduBckAU1f54voDGariykkrp9srw2XVK7kLbnBhtcn2KgKYMZU46Bz",
  "key25": "5k5E51NPx44iR9Xy2Mt1mfLWQDVcxKoJev2uHDJJiQGyEUWNvuLqPv78gNugWcWwMxw8GJEcvCvbWfSZwWon7YGX",
  "key26": "3aVvifmmLsCtSbmZhu23GEQWMH3FEP3Sm5JMrLwph4md8fabignAYjZaYKErffAG4fffKkSPw6jLYTVRQ2VAy6d4",
  "key27": "qmxBK9a2YFboxD6vgsQsrvNrXKyzUzAhgM6SKYJHfsZADZ2RhYrovmiaCLgqw83nSpsUpXyhhRFoZ2YhPYZLavg",
  "key28": "KkNvDrWTeWvnwVu74zBDuLEJFMzKcU8yw4Buht4VY8SbYYxMCogy11reZy5F1iV92PGTa4saYxVn1GTkRtefQKh",
  "key29": "G1xbuGzikTWyW7A2NPh3kX3Y1Cwids7o1cR75MtH5WDbzxs82hiHSBcFVJNv5fn4ndoiz2WG1xPBHKcUwF38huf",
  "key30": "36vp6BPdGYxgy1h4cPArvugb3HtRCPBEwjgA3zXJS8BCvMAUP5ihxgn1T14rSrJCF3E2o84Qqi8Rn3PvCa3WkU8S",
  "key31": "29UZv7ssBombLhycWJDD1SQn6cgAVMpuxw7114tDss4VNEMokxLp7zWCPfBcgzLsHgT7rF9o8xsLKydeYPEivb9v",
  "key32": "3v9dJWPsh5Yiovd1MqZG1Qs87sbDSbbxvdznVbGrRdPUUjsYjArSLeBi5DTLMdqwRbjqR1NRP3jxbUAG2o1f1c79",
  "key33": "3prVXKswtY38ban8aQZ5dU298v5TxUqWt2x4z6FGCVK5QTsJNq58tLp5z3aCQNugy92bsnzR1AUW7x3cZcojLPaK",
  "key34": "3ot78pSyk7FdY4tGbJZdjHq1jneeXwUnmAVtNixT4J2A8Wi3zqhUiTSDi1uvFMRp6UxboYxeAMAkCwEpxxJQQEe1",
  "key35": "2ZNufxBAmvTKq9aZPyJDyGmsnFT16DzSfpSBDTHiw8ovBDG3iaRa5NmvKVYzdj1GqcnAaRbdkSo2fCmS56aB7HeW",
  "key36": "3Ft1aTe1wzWzdUWiVXJLmSrP9tzzXLr6ptvBbzu6Kqbvp5oHfUdLbFKgypfAPQD6cCqjMbPiQjDPYebSyPjdi5de",
  "key37": "21FxaotL1pi4nSimUb1M6mPbBVFRYL2fi6eCnTkCZEYfvxdpMEee7A8SHVZgnsES6eNVehYWuytV2tGK9QPyrmEY",
  "key38": "3vEU1WbmB6zpBxzjYDjxLpPff7Mm99snXPrPrxaNXvb6d2rzTdp4kdktyrV3VuS4yTak5QrfbAaWcU65FyiB2mor"
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
