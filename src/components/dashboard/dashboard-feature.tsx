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
    "2bBgM4DZyD45HMafhYYJD5rNhxMY85NGdJTC1uqh8TSSrYbLmTQxVYhEZZCt6RvMgupAviyMRqtYF9KXfxVWnySn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27YTYMJv15b9vckE6PjLgtPCbp95uvVNoz7VnWX81JdsM1RmeRRAeTUdFoEwY2v7imskf5uUxGTMWVdUeTttC2ds",
  "key1": "5aVjBoTX7XwCQWVJe8mnmJAkMWE8LpAKgKRxhqJV4Amroxm7ZzaUL6v3fY7WEKz96SzHLh47Do1yHJ1jogh6DKfD",
  "key2": "2A6aenw96ZJ5KcsoiqA5uoAc1iVsH3g2GADGM1F7GWTauTHdaGqgPdumkYsj4Jv2yLtrM3goLF57WR861tiNifux",
  "key3": "bnY7PWSz1wuivzBFJhV9MkcUFJMqQiHWcQvU6kLisiGtrDWc68Rpc88Bfiu7XctchSh5A4tjyRHnafqGFRd8Xzn",
  "key4": "iA32B9vWZoiaAjKJEyczfwFZ6b42YiwwyxzhsYHwEttYdtXJ3JYDJttLoVBXJ7BNPjayocWqmYDvLo8yHXcy6fa",
  "key5": "5Gc2n8AdQV6K4M9ddbyQ7oWwFbTD9HrUNjLhHvPYkwGysRgtWbm6eVv9ho1RqzZ7tEbJAEkLrGdHpwAmwr9BVPxk",
  "key6": "4kXJGoM98DF7ZF2vcELUYQ8sj7jsBfF63yVrSfV3RGaBzgzGz4SHEgcyQzu6hgjwUYhjnAKa599M1eHRUzysyzxH",
  "key7": "5t7AotiDs2SnWQ6oU6fQHW34GEYgihE1RmzFKcCHa3FJTgPpSH267kuzUgBh7nW1yzpa3kXfX6cmLKhRAg5MHSes",
  "key8": "223y5sscfUKGbW1gyLoB5zxoK2bTYNFYwJrXknX835mb2iUZRTcf5UwqjftK2oquEYbYag2Lu2oZecDYFk1uopN3",
  "key9": "3gmHW2bUv5BYu5UWdNyfrdnRN5EFjSbNexHAD94iNboQoe32LnjCctPqqSnf29ARhhfAQBApt2xoKn3SYpj6h4vt",
  "key10": "5AxBh6cjbK4Ty4uKHo1SUz853Utqfzk2cAYgjYoot7DuCJHzk3yhksGvrMBNTGfF6zhwuSLdGzDWbQUUJNotBErX",
  "key11": "34ZLWWBkFsYHvnmdFrrAm4ux6pW1wdUsWyXbGrJEKgS5BGDa7AMhpWsLdJH6cK48sQxmX7tkP3Vg4yikzgRJiZ3f",
  "key12": "n6eqNpmGHiTQjTRBsZQsBkHzqXRQxax5jBZc87WZgPu4AFGs4HLXo8Q1QDszpYSdyHcupdTyoM69SAHTuZ2a2wK",
  "key13": "BZC1YY1xLMmU1GsKD74NZoBphCjvsCh8RZ1RQ3g343wxJFKfYUpoDiCxrQcYiS5KcSQCB5TbsRNjD9GxATVjhCx",
  "key14": "7sJAiUiJcGpZw7NCz6H8951ULFUP9EpHNhmYrEVbeq2u7exrDFCGn8zaHbemgmDCWRwhre9dvJBoSgoSUtKUSai",
  "key15": "66faDMnStmsCVnCZMEXhoywXbVGgjKMPguJAY4HDVodursGat8X1LzjnZDJuxSp4dxQR8tFiztw8SPnzi8CAsMdu",
  "key16": "64R4dnFkCpGYjY6B6H6LQN4udPY6uQpvKHBRf2XQZyJREfBUTqLf5pHR9oZiFWuHvqRiSphBXtzp9Gw4ANb75eS4",
  "key17": "uJdLXEeqamokR85JPR46uxUEXYgCq9WkXAJvcPMvt3VDcBaqtNp3oCsTer4xAfQoStqhKV2JryCvgE6ED9V4WRG",
  "key18": "4KoYJHJAUGrG9w4bu7sYd3DZWkb1KYNzXAg798s2McM5Q6WH1pQYR72eTrAETzHd3fWQWVnXJ3kTBT6jNzSXpv9v",
  "key19": "61ML6QcSGgKRn8sExUu3pwZW874RyCpotiNCRgg4bEUqHNUUmcVR2A4cdjtMyVJrtJkfnNeoRu6D2UvwF27cBsUM",
  "key20": "2N7nzNpDfLAzUD8T1kw2uKobWNUacf9NeoftoDu7ryb5NiMm7Yg2jtnptQ4HEypvDHG8HRjAXSXnqSUJN5ctxDVV",
  "key21": "5teDFXgLBjtrXFVprVTgQ5eDU34LK9D1chhJKHMvCwgJTxyuaDJ7WBBmZJdouUEC868oFDhnMppDu5uLFTAc276v",
  "key22": "4SGKt8ACtsEKQtz4ZgWUnS7HGJR2pQqmD37Qy1KoZMgQSVDnwKJkPP3cKWnfxNKmuoJdfVPDqHf5mRtQ9c5Z1Kn",
  "key23": "3Mx2F4uBMwTs7kkQRPnjutbnicjocMkTvtWgDAJ1E5KrjA3PDMd7Qj687KAHcEMYMvx82NEHmLsmm2q84YnPpbr",
  "key24": "1Wv8CyL7dasWeVF6D2N1QpLucu7A6joTaG58bKTuioBpQRankyhi21W4G1tj2bZNAU8nKWhiskQzjnAjAZU6KsW",
  "key25": "VzZSBdNPw1bDgACQhKUxMw7A536uSGat32L3N7t6H4hptKj8K11pvo5ohgRibzqp88NWsLGAYjf1QcAZtaVnoP9",
  "key26": "5aGP5NJFQjhTBEpBieoHtFDADqFCshJW9uW1cSagPrWo9sPVFoLVkZqnVFjjqzE4XobdJGQP38kSfdH3ghQgtJBt",
  "key27": "4nW2dL4xvvSC1Nb7eRHAHCLZVaYHQXKnpQ2tox4SWRN4QjnkNzZtyrwhT9pQFxy55fYXMcLRenfBd363FY2N9bvG",
  "key28": "4odkKsTcxkNjstXBh97MFKsPNPFr5Tnj972yc55AEdXU9hjijD2MG1QNuV5ZrqCCPdNkayYoLdnAHo9imSwZhNTK",
  "key29": "23fPKPLq2z8voQzzWY1mf1Ca59mk49foahwRoc3T1TBMPobvGGg9ZnBma71w5h9Jt4FRGuBMjtnrW9uCQEaz7vsD",
  "key30": "5iFyQRZhpoQitYjCdAY9HKfaa7V6zuF7oTR5xjxmdXr2Epu4rzPbhdJUkA4p4VhByXEZ3D8DeC4fdr8u9r6m82AW",
  "key31": "5rNDbDNfHVCQoouxoCasjTYPddXHo5saTHEYCS8j3sYxDsth3fK1LZfRfDVBNACRxe2ZsBmRicknx9X2SqER5DvM",
  "key32": "3NutH28dhx13GTkYmgLKKgHK2mjxNwHRsQr13AMxgxHaeyxEsajkHrrekufTyELvaAu4LCC3z6HeYtRtosdLC726",
  "key33": "4P26jXW9PkRPFisp7U7iLVd2r1QyUbmet2b2Zie1bwnrTrJLhtuUYPAMgbD3XeVzYhNNLsskfCyNhRoXu58VNVNN",
  "key34": "365tNNfQnyky68mqsK2u2LXGzMPsiBiacR499TiLnkD8U9LHk9W4uJdsGtRA57WmXQfQt2DdKZecMiUo5BfcvNYv",
  "key35": "3RuejEXPZagJdQdzoZtPMHuautgNR1FXUNdceh2uGwPcLUYoYTQfu44a1Gskr44vPyoAoFVQqX7q9zYrkrPr62iB",
  "key36": "3172JjvsGvcx4PKbrfCv5wrQtGwPuvmdu954y1V9xbqdxtYytH6Eppon9STTCjCVsN4j3nV1LptWLoSMfpoG5JZS",
  "key37": "4RshHoJMJXvDjmAB3C7AmcKVTLHzVvtasghmLXWH18upz7SexgeSxxcY4fBhabnUAdfGQ5NiLbmkwv2LMRH77qFD",
  "key38": "3sp2f6Wb3xkJ73eX2d5LB2upfLB7Diavy2j6K4Ph7TPdD6k1bMJXeF9zYJpF1fW7hAPc5neF5FrbcwEgKkXTHSg2",
  "key39": "3YzwG5mU76bvVXiVsMnPKHbYS6f9XTP99xqd43KmibCbvSNbqe1nxb9uQMBiEFnCLHSuJbz2i7tdjZuL3ahNoTUC",
  "key40": "dFtcAhs71yVyw5M5Q5cAsmfQ8NGXsQuB8Wpwd5wQJcfjBbmdgYmmVfdkxm8M42VR9fHGNHnkwGz3rM36RC4wNRS",
  "key41": "4HRpxmBpRv77CAD51mi2cs5Boq7NRxHTVgJrjPPoViGbG3Va8V7HzRVWEqN2WjhWshkuhR8Gc6iKDXEVV6KZDtoq"
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
