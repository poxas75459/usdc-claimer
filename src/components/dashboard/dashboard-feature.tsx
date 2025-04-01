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
    "4uyTRFpdFVDM69Jsyn2zKXuNumXKHLGYNkTDQ8qoYUiUfBpK1EsSkDjEjgWrTViEhWwpJBhqGh7RzBwPiEvUfqJr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23UivYkPcGoqPrBAL8vKnJnyUagfk5bHt7uBTA7YNs8cMg2PiXPegDsmKpkjENtY3FTTr7Mwzk4Gv5HpiAeax1M6",
  "key1": "4t5tM73bj8kKZWmkEAh9p7q84LYKrVoWzcLixutCpCr6ZHRv2qYJhXuiXkJp3X4Bcd4dKrActiLrF5BUJxiXA4QB",
  "key2": "5dFCwCnUJmXfxvDH9EjYEpmoDgo9xcdtZmnJ6MdFriXU2v52Db2f9w6RDgboW99seVasanBa4vxH5q8EUimUURaL",
  "key3": "2Hcx5uiXZHGocpwFiaBxAJqjRuWgr1DYHz3WETiiPVGQ4Y7NSAnuCiqcXZ2NoiERQBB7CT4hXpCXizSoxtEwJTEN",
  "key4": "dwdyX6BEkEFqC9TXbPrjhPq6yBiRuAT5QGWwGWYGL82F4h2S6zNS1AJ8cSiz7MS8qJ4DYJ3bmwPQM6cy9XKtXea",
  "key5": "5EQ242CZiStgdUeGF9XFpHYivQdKfJPPLFc2ys8ebMoQLrJt8GLcYJCMeA1RAZsypg8vvahGUnUNh8qrRkRvQjtr",
  "key6": "38Wo5NS2aqLvv9oYRZiUUuFWRwATQFJfG59yuG8d9zKjHtheUF5cAtuyVzGGEQgVVCoqFieKba6E4RsvURSGZ8j",
  "key7": "4YvPaQH7Mmcw5J847gDoiSxjUhqGjaW2WY8ktizk2rzU2vHnhnSMRnsBfvars6LuHyA4E4uXNuy7r5kZbTgFFPaX",
  "key8": "bwD76kZqbpWBnGmD8UaUwdMcif7UKbYVGVwkHDaQDTM8uJjLaQMUmZkCJXzC6H8xMXuxdqgb4VQrXho4dQXm7yG",
  "key9": "siv5WeHHs45KGCmhXQdWUrLBN1DABQuL8nBAQ2zeJENSgBXPLdxnMX5KstxJUfvSKut1HmVrHDMrQuve4Ykeez3",
  "key10": "4d4owxx4BAyer3L75Lk89QRvpW5qRsPF68TRvrRw25SbpsYJC7pwCLg9ozq6J64rSDDMcNew9VzFk412PkmJc2rk",
  "key11": "42EaTw8Fo9n21wch76s2MQHy4TP8d5wCzZ8Pnb6JpTN5gVuBr9vjMkyFTuuv5sFokPF9pCDc3jbcUFebGdmx8NQT",
  "key12": "2Fq95RRyrofQvcL3vz5yu41H79kvFB433guPB2m5jTFKuVD7k8QWaYsJ3jTun74C2ksXndY2nu8roPNNajn9Rnnm",
  "key13": "5zRxDb4ZfCT5Gmmk6SABxFjnasSJFLbP7xyPiHnWjfq9xauYXmW8shrL5a4zSX8NxXgkNzNsBr5yu31yidJ664HE",
  "key14": "5y18EeyFjuafq5Aw4QqU1bhjt6UUX6mEZhF5Dx3PYN8U8bzaJb8GiCJ8G84ADe5m4iWiQFZxfMpjooxBbwxeTQYY",
  "key15": "39kcU7grrRFrPp8MSkWERmHJdaniuCcEQ4QPmEo87sVGNo4LG6LDL4u8jKHEMSsbR2cTSiHvhcxPXb1Pax9E5SeD",
  "key16": "EVRWFuiPugGv1kjLD6RH7P55i6z3WQW9jmhtKoCEqTXCwLyUn76y5LD5sicsumhXCf5J8ayB7s8qYdRwX9bEVvE",
  "key17": "5k8w2y5KVMQqGq2K8vEnQpBEFTXUdn4wHNE77YDuziUMXBHph6mPKZG8eYBai8Ru2367udaKifj5VpJiBdRqGss1",
  "key18": "31DNvDcgeTiXBKrJidEu616RRPP2ud3AMr5AU5McdE76UUzYR6T5ZG2FpQBkphyWWvnWeDf37VbujEqc2HQQXbcL",
  "key19": "MCw5KT5joruDvbdFDgFeW3C2P3DTJYoosJfSY5Qrz4sF3JygmDGwjmwT6t9dNf2veRZGAQWu6Dauciu8RbvKhuB",
  "key20": "36XshemLuXYQrK33Xo6ZACnaySaLa2ciomFHEkm56FjPWT2ZYM6Lgo5RY9Cs4gDyWRWZEAgxERGe2jWVYUkqkuvu",
  "key21": "NtQgyVkQp1oPUNJPeqNxebHQD5CsKx6WBmebbw14WQw2spQ49sUZEipQUWcyzrZHgUMKxNPb2GW9Fnq84vrt7rK",
  "key22": "2YweNgGZNNbMF4Koh8C8SQ5G9UNiAX9az6z9yV6C2v7SVSrhyJmDqNKgsV91DihBuvdnwfm515hSQXCnAj6JnDKz",
  "key23": "2USgGG4kxbzr2fa4f6Mj16HDmoFUfeQQUDCQb4SFrUayaruN6nQy8y4sTvCZ3hVLSUvwUHt5pLoFpeYyCktZkvhQ",
  "key24": "3jQXXhBHpMjABTPaqo4r7mFqNiTpuMwHk912rmHEtDdPKfMddtQAJ1whnvHGb715CoDXge5qUFt32z9YyZFjA35j",
  "key25": "5nXr4fLeWYj78j2vvmjfwV4UFU3f6ewdpen6mWpSqEDBUWnSZpiPpgaxVduPW6HiEaBPqSLDb8GYjw88BipDRyk5",
  "key26": "stWLQq8mxgx5XFRvrtTVPJRkN8PFNLHJnGWdsGfwSkyGDiFucmGedNkwyMyQphagpP66up8PexfBsrePQRHgXWq",
  "key27": "2MHTXFvnrXREcKXEcigwQoZSMbTB5MFZaZxTycbxg4YecBp7QokLG8hgzrjgbJhoqRsxy9UsPiUPHyqEz3krL34M",
  "key28": "3sMBpu67CSiTGwkdRYizxiCtczAkEEYFjPr64v3dwR6MB8DSKHveNAHyRyS7ndFiSHAwzVQqH2u3ky4vCzEs6nh8",
  "key29": "oAEhYehL2pLrfvVKRNQ1ctUxMcYWTMUSb4mJP9kU8doaj8197sVHKe2Bkco4F7tXSmjkv8wNNMq2SU7ctPwsYXy",
  "key30": "4Fdqnmbogp1y221T1DJQM32kd6SCMQynDCsqH7ductxVEJaca5fUeqa5SYurPMy61bU71JfZoMQMoF2UtNbkZnEF",
  "key31": "1VH5wN7BZiBUZj8kw5juxG3Fc5zNeDaWzsG8tumMDgaLFbTtSAvcC2Lxy55cqkta8YGXZqCwPt5JbxxNLLfq9Yd",
  "key32": "oAJaUm8Jea6HF9PU9zB8XG4AxfJpCMmCBZnPdjTWaTytXZnDZVZkgYedSvSDpr6MyujQFcnYPDJmkiicjFSwyfv",
  "key33": "4rECdJoWy9wN8tGbLm4VC73qTnKBAokuVo5oMrmc2pLvBKthpRCoBDLW7p5mLDmVWSNsnQvFH4ePYj5mfrNAY44d",
  "key34": "5DDbVMkLohF5U3Dxz9sWJkXF7ptsnRbrVace7MuDTcV6ANSiHevNniA2CL7CHHHL6qXdxsG6y7wtT6yg33phKbhB",
  "key35": "A8cPT2Mb5gcs4JMGqWXSUgBYbAbm9KAY8VjLtPF9wkfuR8rBub9WFSyzf1SYYn3bSQoWdZFjcLPywGfBzRXFfa5",
  "key36": "599R5cdKFsVWnSZcTpgdeAMHeUbKnMPexbcrGmZ6H3xkFA7y1811CpVDoc963UjTqsvTpGG1QP59VdmzsbPiUvou",
  "key37": "5iDDoq2FV8Mdm1UZ1SDdJHGY5J3gY1xyKFFZrmdDWcAsrVxoRDv71M6HSqZUVDZw93h81iLf6Jv9eR4NSyqDQ2Pw",
  "key38": "46YC1mnm8dxV9htqShiGxwzWQ72n3VzXLN2Fvuywc77rdX1te4ERcF1iuAqzCb5Ne9jNaUkCvdwLUQoqCQnuoPaT",
  "key39": "4xQDcNFSCYcxwNLJ5ZQ6UHPJFXUZrqFHkmPWGg9gvXde4T5xpisSiE4tTFDWmteMEFgLCx2pUJjfxpXCCw76sNt3",
  "key40": "5PJVvsHUdWHDte1gn8vtwtFXWJgrsjPfrF2TFYLumXd7DDrAsmcWPLWrunbYdb1ATkNrGR8kecgpwfhszFdyrdir",
  "key41": "4J6WT3i6DKB4oS4dHYg6XKjKNCK7wqFMZaXEhZr1tw1fqYmV5Hka6mDVQU5h1vuhP88waWPCCeooM9bYAbr8FaKs",
  "key42": "DjYHh7m2yUmNWRDDmyJoxLZLfSXxfTvJraTroZ4NyiKS9VAg9K9Z78N4SxvK3NKvNp2orsRj65iG26MLN2qB8ox",
  "key43": "G4NEKEa1Kynw99Tt3UWrxS3vU6t6n4pVX7FQBo3JfGa9ezChuCM29ZXwgtXo9afaLzisrht42YyWGeyPvCw9kkn",
  "key44": "zwNRXBkt6EvQLg82aaEaoM2SCCBbrBUrZ7HN1tSdJ4r3xRzTbKdxa1Xj9q3S7BSMax1X4QMdosSCCrahJsb5FzN"
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
