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
    "zsnV44skADGrpeMk9qLA4UC8wXAqeBRxqsSXk5WKuKfawyYuYrNNUrRAJcgP7bMzWnFC7zpooHwEAmoPwwN7aov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Aec3scgbuMC5KFqzxQu7DeP9SJtQskeaPq4tMzTVDr2T61YeWvnDj4X6g3LN4x11QaC3GJ8mDDZXs5eukQ4eRQA",
  "key1": "2gjd2g4ENhTq9e2FGDrjF6EMrs8XDC7F2Ws8P7LMzvEdkKEGZeA2ap5aA3wGFCY7Pn3WG9UTCWsh5WvzR1tVJ5T7",
  "key2": "2UooFBPDSZy2WPdsDZxCFUAAWRAfPUnkNFgiQ58hJwtbYPq71ujp4WTmpxDzmWtMEn4XXwnUs2d3wS2rfXKVxfN3",
  "key3": "4VkNjBtKKkokqPRKv8RPKPBNMvxULsptpMqNjxJdqmW6oA9PwksTymnJ89Ax7ymYcUDDoFaHuNJecWe7Eg1ncCEQ",
  "key4": "2t1i5R4iJ92gNSnFc6eAyPjEqvjKXtLCohkdLL4S8tCdNPmUKRE54hPM7MEj2Lh2QCfXtK8DmAnwsJNNMAPGj2Jm",
  "key5": "5sakV1soJmd4BaQ9QHxftWwzYGQc71ogBsD3rT27VxVRxHLRSuZgcvm1dndsTWjUo56pLokH7VngXW96Wipmb5xr",
  "key6": "5gudJErQKeBNFz7gGacUcppYooL15oKobBUrXL5ECxHcdqTaApqymMorJJmA8LAmSoALbM7vdKwGDotLaGwkbu2p",
  "key7": "4qjGX1kEMXD4vG4VhBFZVY7Eka4goPkDwEK5VGjx426ZxAbuLr6diUkfcqWDh6w1smZYVDhwQAL2myepbUzRRScs",
  "key8": "3dYvFrjSp4G88ZRwBY1Gf8EqoDWt4fBattv2LMRdDNrSMkP8SYEWfEqSGNcQSQCkpmndEc3Zn85FbQezEt5oBsqt",
  "key9": "5bugQf25XNeXVbVXeuLW54uYnKZ2TPHcvkv745ckt6MzDpstyAU6aQnX1yRYTVf7XjA6dBt8iLrqDen6D1qCqzbE",
  "key10": "2GhKhHxvBBv4Lus7VExTUPfXZL1496K3G1kAbcVbdAUiYNwvjk34KJyAoheBFtgprCstVxUWDZEqAEP4j1UtNhkx",
  "key11": "4HxLpHWdcx8WyANfTdYJMNQ6nvocGqRniayXVs7auhWEE5PKsWBDYLrEDqJAL93pzz1ig2jnfPWcxKkjfS7RUz9",
  "key12": "5XVcdaY3VJEsQf7496BjMYmoha9ymrFxCrALurYSPbKCQyxcT5Wu86o69yj3pa1XN7rtPGzXukjpHJJNWN1RZ88f",
  "key13": "52h6P5mCD9YLFvS5gWEa6bvAF78Wup5G83NXju9PaqzhNydsQy45m1LsEnydsSKz57sEv12x6FgZP2XQeQdPTPGm",
  "key14": "5Qa5zGgVsEtBmyezWRhYp1M3GqpUjh2RJVMsyv6ziuCbAfVthvgaMazhJPNzHHXvpvnAPTXA9uCCywZ9Xmf9UrW",
  "key15": "4WyRLHShutzBs5A6mZbYHGsXoEAF7xsXPzKq6eoj9vbDQUhXeZLQvGAuanyZzG1XEvs7DbUzRDAwQYAPZfifKhTe",
  "key16": "4F5ounFvbRuDnFhffKsQYRjtQXTQ1jArUZNSMfhfG7daLyteMF9ncq1KJTZnV8wSEh8v8ajXsiNcfjaKCdq83Th7",
  "key17": "3sWCBF3CRhQPHHVnrZhRX9tJxBNUUDMVxfZjGrJCcE2FTgZdk1YSMe24PEZ8rRBEiaddPsKG4y3Pi5cMjzYSbhpa",
  "key18": "4ynzX9AJ6yYpfm4KNNnzFr4tyL4i1yzsQwdoaWrfxFkQEGQsEvZQ53U6oCqamuzHKkAoW9PFF6PrUT3w5Zc7WApn",
  "key19": "5Eh8oUQXu1qhyGuGcTSeGYw7a6b5wSJXZTNPxiUGFUBooGyBS3mcC3HGsR7p32cTRxcVMEyou42pYYsGx78hmrPK",
  "key20": "QWJmrfzbVgu2gHsXDNue9PYxd3hYaXwt9yBhGf25Jr8YUqH4g4XJyCSEf2DAm7TnNfYuVq7RmGwA1gEmbez8iqe",
  "key21": "58Qbv7DiSqyddnHHPcbdVsMqjmoeCXWHaAinFNjkryVJuPSwHmuiSpadNGEAjdjzKvHkWUUF9HXE9uvj6gycvA74",
  "key22": "5Pe3DdRdkY3zTXbENw4EtpLyGqL5WVZ2LiBU3D9TjwAdhG2io6Pk53fawnuTAKCpYYbw5B6mLGzvU3RGgiSCnhk1",
  "key23": "61QMu6GjGkkjYkLWyabcoQ1Y9kcd5z5rysHwazVHz2MqsUJpNhMUoP75thLJhZmHnodLzi1x3qMneCm9mQDYznhQ",
  "key24": "zQMD6LXr9scJJmvKZosGqcGxif1YtEbFZ2ADfmtJNaGti8B2aT93yrr1LWDjpGN8z9iucyCFQ7yKrr1oG1L3KKw",
  "key25": "4UsMk9ZFa2d6bN4Zk6cLAp9rtbsLzyZWmBHrEG3A3mEJPYgPB7AcFScVN9ama3Wkb4XoGRUDWKSdMuHcRP9PcYMt",
  "key26": "nKDKcoPLVGoxuM9KTrpuB3refTKMLRSFVm57px4ypfGy8txGmDiLfvM1JPCV9YXc4wpBbmREn1LuCUYSoz3yXLx",
  "key27": "FRNHgKkCWAmcPhVRjKsc9eTH4pCWKd8TyoCthdKJ2xtYCUQWGoxk1RLnA8i1tYwq2utGg9mJjJb7yZb1EBxZayP",
  "key28": "3ma4J7yj5qU4bRWnybCwKMFcDdTPuamrWPzU8ufNocnQwmfSmdsKv8cMTAiH8w6j4fYEiRJd6mVcfbKoNzFzm6tA",
  "key29": "56r9SgDWcTP5Zz7GQ3WVSJiKeL9HfHxSyeuCXxSzLKDPgUXXSJC5WuE9J454aNLasU8WhQayrjzrBv5k7WWjGGWG",
  "key30": "qwWhFSvy91WLYBdzC7VGYSXha7A6MyUUX5LKPDadcKX3GTZZtC4ZQGTd2tsaXBMsJThVybjrvoLFwpnPsSzk3WZ",
  "key31": "4gd4ZdkUQmkMeimghMWqituV1yqW8yG7HGLMZrCjDothV82RkjTzid3CGWFoM2ihxZmnKp8qkY8SZDF6GzXePRwe",
  "key32": "4T2xqAYLzJmtPSff27iJ7A6gk6SrXhDGYfLfgQ1o6Kxk4UpkV3rE1JL7aN8gvyEJ6kpCGyD5J2LeD3zQduhL2WT9",
  "key33": "BWLSv6uxLik7JHrU4mnwtALPBGQrzpDgMPsiEpfBRuhUFS6gorJ6psAipZBWtLwRqtVLdPqNh6mW93YJKtaDs2V",
  "key34": "31KPipfMKbwhsQk3DdAbrz2ysPF1Rej5pZXseMXgTo1maQ68dEFtxpDLHHgEiy4k9tg8yFj2hBDWKcjLJ3misds3",
  "key35": "43YuxFvak4FG8nRag2zhFD4Yu7HbADmcLAtpNwx5QWo2HGydrqsdzowMBL1moYtJJ32y4s9DPzCXLKAXmH6ev62X",
  "key36": "2ZMG7pxRWzJTQWuJ3KT6pxU1nH5WcY66PgNfZmMQCpHecPtkND8XPefJWkhNH52AMkWyxE1Si5zWWg1wkCNbY9Yw",
  "key37": "35rATmgy6WJXogSZi5aa3x4a2GDadovjnkDu6vVwmRnxZZbf9stGGKCrEDjnEXcoqWrRD7tcjrMNgcR4WUPUzFMb",
  "key38": "67obVPsihFMLzST4LhkxMYsAbueoYL2BYsXmZS368pcRs175qkcuxTUaEyisJ5Ugz8Ci2yS7uy93FNsE5RPnuCt8",
  "key39": "5KBKnP2U9ABTe9FrEDSvib1PUTcw2ituczHY5kNSqsV2FoFXyqPquyvoCDHAFVhtz8mEdvdF16azADWWQTRPpBJ6",
  "key40": "2GQtQxFDmnE8sMDgJv82fHrzPduLetwzuq9DLzhTmgSzeJH5YrqUeCz3REYwRo4QwX56cBsqKX2L1acMt7rMi1Zi",
  "key41": "5C21i52HYcH1NArQjvJ29qxEr8oE5W8tHwcz1QUbVTLKPsLwEknuzbVhBkjJyhgbcDBSgMmuEA6CAs9LoKXPVynh",
  "key42": "3mhFrPNvWGa5YbTYuJbyyJ6v3Bxiee36c3dSJkj4ithTh7xHsQK7DUPAhjK5iLPk65N8sGM8nuNAKTDh5nktCBEv",
  "key43": "3CK2q9GZiRWUv5REo33A1AuMvV2vfwzTiskbw6mjynAc3uX3MvjihAaXyydg8DgzLDiCep8N6215fqP3Dhyv7eVk",
  "key44": "74T1u1VCyVxkiXjPHnPEjBhDB3qH154shWroMXvDvQKVsGqGEdoKUzVFoDJXoU1h4oVasTfwFpLvHGP3TnZacPi",
  "key45": "5jyPqqEKWkRXqUoXMKfR6NY51yFqLiPnWmYackNhJymgmyPUmqg3k9gD4PcDRXnoGq3JeCkBJfAgJAox9eVc9C9M",
  "key46": "2V6HHdg4sGmq94Zf4wijJKdPzCunz38PaUx48dQPdyrPAQ9WkjgV565vC7qzt657H3oUJEDSeTPdxByF8bsHtMU",
  "key47": "3kqLtYYuDpBLbuWY28ybHmsV99n19c2Y57xBMKUqKMdNmQxEurFN1HBudDUG2Tz8pSQm4SP2H2MFVyXSmk6Nnvd6"
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
