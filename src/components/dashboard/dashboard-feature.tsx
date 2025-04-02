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
    "26icRR9UdzY2H9AAwDqbBygksfnGwbXcJPjVhHoExQDyWv8WaT1cXbWVUBPwjKMq9NugDcA3m2LcNhgXiSPQSyoc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Pv23ezZqAczLd9Pwd2gfGQUXhXVPgqt4oPS781pAVnWDVL6X4GxX5fg6KvM3WEcLQaDKKsBjy2AFJAdFqfYBksk",
  "key1": "67m85faoR6AXdbrLFDoCdqNRxzZzyShmkapPdSFjJRg4rbNemM4QzFn5ufGAX5uPjJQD9NALJ15ZF7iM5vSFZJRa",
  "key2": "JGoZrsrzTmwQmZeJtWc7xtgdodmwS4ywGhrzEmdQzGicXRWw2fXSyUXNUiDHiGGz5GV3yKXiBmkXSgaAdF1n4M2",
  "key3": "5FK9TcCaERKAWaCYbQGT1mMMnTTbQurbajrp77LzjM83K2bqktiRG8tooq3PqdbftyuEmmhFr8xgbPmvUYxqpDwh",
  "key4": "3yuARg1vtbYLz9HtXo9gWPxmrpnydTKRsv4oPXBZzQuhNp5S1ye9yPKag45jnzB4ffA4WS6GD7BveL5MeN7z6iAa",
  "key5": "44yG9SkGaMGjgJv6Dxh6wCE32vfKRTSh8nToeBGBdpaBArzWnRBTH4r5JR8J55t8k91wzCigTmDrLjpduZrjT3wN",
  "key6": "PrVTHpmaBLReek9VDjNK8PX8nkHyuNBa3trTSo7qc9jEW7t34QY1BXbNDHt6kkSV5AdQKnVgHhiLktezGE5BvHT",
  "key7": "4HNnJEJx7H8XHEisxnAYzV8iJmXzMkh11RLKZqDfwnHMyz8rEKejs6L1T5Fd2gTEEVApWcVsbMK6hQhjeDHPaJcG",
  "key8": "65p9wkcEGPbuEfpq6kyC65H8RAhE2ntiSfH29jwtnwnt2FwP8AnpVndLuNV6GTnM8VCTU3VCmiaq9sVqbVsEUMQG",
  "key9": "kUKF3uTwvN9Ftcow2HqH6j8Uk6tXRSm8xWmqBqBfmZHuYhRJqsUds3R8djRLofaPSBarUxKaGohSLeo8WLQmjFv",
  "key10": "MkU1gq7rWtXMxjE8shsqE2yZNBKAp2y38oGVKxcyLpTWkkrpajqCcEQ1BSBXrMStQELmt291RN67TGTJpF54nFM",
  "key11": "3ixbNbrEiRgFBGnjdbW27keGfrJVm5vuVL5S5XfmQT1Nr24ETrZL1ZpEAS3skV5BDjt9k5DajpdthT7rtt2ZS4YU",
  "key12": "3x6F2HyB7L7NJx581xX1fknA1cuxcPuwTqafNvXJGuy13RALbw8UrNwpDYYMqvR5MHAfcUZioBuhRWjqYb8Mm286",
  "key13": "3GrGRPcJZJqRezCSdB3sACNjzHgLZL64Ava6htBV8UBDQik9cgPgE37JEm7tcNbromsDcaFqNC7PEXyk5P33Kivu",
  "key14": "2dZiXJGkzwiXAZXJ1GiTScuRW4DJrtmPnBjY2eK8uYrPoRfmX8RtS5ks3LZ4EaaQ6ju2NB2CiDjiJ1yJeXfbPweC",
  "key15": "5CwDxV9VQo3Rrj1iSBK6YFBARy2djc9VW5ZLRJVeyuyJSpD695BkD4v4JqwrtjyN1x7bPXmW4ZUFJsyCY3pjuURf",
  "key16": "mh63GMh4ESqUViKJQgPE1MWkZE9uY1YrP2NRi5oSckr7jvceD6mTrbMs1nNN5PjfCSfVqbpD5Pnc6VMEyiSGyj2",
  "key17": "3wWHWN2qsw9hmhfkEnNdaXfQK6tC5KgSQG4x4MLZ9p3nAV3h4s2Ucx9Me2M3RWcRBRsoCBpDRsYN5TimfJzdqu46",
  "key18": "4ejW4Wn6UZNoXrBNXPnTyTKyJzW6ZVvGBpXHdLEcADwbtYjeyWDY3tPsLvVZb79yzr8q5h6aGUAjqNngsFHzKtV5",
  "key19": "3HNGQTB9VGpV6huR26cN9Q8hBeJhJuDudcgrjFWGJtQnVmW2Lyfh8Djd6pbShcTRoYbVL1B6gnJHDQrwyoSRQqSo",
  "key20": "5EpbLygkpGdd8QUSk2VyB9RFjY9xfDTTXZDSz57QrDfZMmhD7rUK3ajmMnYkcJa1Fz1xxuhAm8z4vpGkC16qCEo3",
  "key21": "5AVCEBXzoCN8MSeQbibFqbjux1yVztxfYLXNptt2HvSHEHuhXfGPLkoDA8mHzoNmNZpckgdU63CAb4EXruUAzb24",
  "key22": "5MxuFH8UC3nR44ohovw87ck8NoPHrUJqAZsVGYmmSrp9GfP7cG22ezPR1xJazaJxJJribvZSVvSxrNL3Vpf4KxuJ",
  "key23": "58R4bKt3pd9PR9KmiGeEboe5bLH917hufB8aPnyr4zXD365SjyLuUhtUZCbofGQ85BcDiapUSrUxq8dZPNHQBDif",
  "key24": "3QAyzujM89RXVwDTCYL3F2fEE7oB51RPtAgoSqoSAiyGZu1xfLVSmDdWsskdvGvumKvtbeehZLgbYMpm8KST3LQm",
  "key25": "42mfoa1D3FkmvceQKofoUbUyR8p3cHSDggWNXjjXdwtX1Ye4VWunBRCCsWbBjipW3dHyJaZc2pwCejZf2WTzLTx3",
  "key26": "kLYkDNwH3XhTFMFTFfxMrFyq8Z2wnxKVjP9wviLq2XPApyucu1bzyhVFtfauAMc8BpcExqsmUb2YgNcdoHeShXZ",
  "key27": "vNtrqqsNw9Tk523TUtzZYdF7q7aki1Vy8ggABcSa2oBsNmxQWt1R3AbmtZVUvUrgxmXodVsbreJCxvbkZYCejMB",
  "key28": "3qLUHCopMGt56KqMJFPGTepnwvMDUuh8y27RSbJwPYsdwWoGV33UVSKA2r75h2jFTi15EpoeuxrjV93JkdNv6wf",
  "key29": "2Lvuj3qXEUrqaWXU96ZnMgVhsEdsVUBw5szAUeKZZDfAHKiFEdkg6rYZYqYZbeuH8CBEiwyUQ8dZBamdPzotsNNp",
  "key30": "5N4veGmgQN2LBbQvSqHuf628NoLoe6gKA6DMVZALZbcpgq6PeFryqKvG8dkjwrLkAfanS6NoPQbf79uhwBt32tfR",
  "key31": "5B19J12fTrz2ppb8qSdCTq3NTX31YPUDYV1a59gvehhTz2RJhJ4vUaSaHbXYeCtjqGAmSmv18C3DdHWJXS853wCe",
  "key32": "3p2Y7FR7LHPTJTBoNsMY63Za2TA19Ld6VPaqBb128ceDPeyh8eShaog6gqXgZbKVAfQ4cPBB68DFgjV88XDLzxg",
  "key33": "5NfjxxRe8fwepd1wXMPpsvHbMiRrY9Ef6ZQWGZVSXLGfKdBMgGsXpP8apd4MWUk9mgestfSxxeSDS2Rr6iuKG8eF",
  "key34": "54FVcSgkTj23gW4nLuNvwXwraRbwcRizWvQPYggRMcQKHG2tfjq34L9gQ3XvwihEjZ6LAyeuRGDk3DSqRHEaZQZN",
  "key35": "4rwu4T7cJ2W88KMT1LnwL7jUSYgDgqwfmGVg7qV8TN5LQZBLRcnMd7svmiPFg2SMQcEJmb93KHkuQZj6hGf184gc",
  "key36": "3ejGD7pPpwhtWerVbh3munfnbXaVEq6D93rdp422K37dxbM7yGtQ3Z6cQKRE3NvzxcRt76bVeMHGnEp2e2U9hbh1",
  "key37": "385EMp4vNf9b9dfEqMxjaXQE2iCPVKp99dNSh7SRqk4JngohXsrvovenQiE8R2zdH36TUA2cXZttYQ6MPJEiKdSn",
  "key38": "iN1NKx4yji2nhCjHsDR9SrCoAJkaroYS1pQMDJAkC1s6dDz4WLgx9SHu6u8bPt8GTpfM4DfdWkPdd8bhqq2Jrem",
  "key39": "2kFsHhVRJzXMFRquHqs93BF2duAndFxs5VhhtQs6cUneZogNbfXLzgv84x9gb9YPBJLDBWahh3zECyUSFEAPTXfi",
  "key40": "4HhmTZ583zn9wiapGL7PLikF43ga3Ld8VEsoGNspXZxvTU3SywuBHAafinmYC3ywzguHHmt6XVxq4jQRD2Pr5DeJ",
  "key41": "4sdKiYwNWiQB5szoaPquKJDK6k6fXngNt681J62A3QRsb7KDWrNXzMzFqDN6r3uw3hrjgfHzsoz8TdUub8ik8kaa",
  "key42": "5uxhdwg7o9bdP7EaCRcR2MAozEkey1ybvKACX7sEu77Rjcu32ExaPyxyLBnm1ju99zpYTnyEeayTkHxyJU82zEqh"
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
