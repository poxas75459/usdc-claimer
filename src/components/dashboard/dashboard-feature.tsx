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
    "3nPcqDuobew1vW3UnskDDqiHQbXfX5jhStoCfo4TARrCbxF5BvFfWRqJwWAFVqufMnZmm9Nu8ERMsSM3mnQHK6Dw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nYvzuaH22bUGfeR8kPTACQQg4AM1ACbuoAkCxKeR6REUN2M31yiLYHJgj3oFontJCqY9vFpZDc3aM48nwL7DVb7",
  "key1": "4JoAQBccSxCsfMtH48NddBS3XcM5J819tvaa3rZVDBVKKjuqJ9JW8oSitA1mHeRbLgtex1tqXHjpzWyTzP5n5khY",
  "key2": "MQHqf4e4FRrFHzq67k6fGSn5r3bowoXfanE5EDnCv4CgGJnhAnphq9fJdoxtxi4EEA5mCmKR6MTXijCNPzFayab",
  "key3": "4voyrfdaRNchVrm1TjNRrkqPFg8twkQcngBENUXftuYh9Hw9KxTipFm2wQfpV7SKE5U9aSyw7ENpDkVN7csq2HaV",
  "key4": "pzbvKFdH72N669iubJt5dn58b9CY3KTqpzCMJrLLGhrTL8qTcNXE1dnCDmv5kXx537tkMi5HWtJ5gjQ74xsbjS2",
  "key5": "2VdwaHYSkq4cUAYpvrQ2fNnJqeR1UnFM3VYVScppzBXiz9MxEvfFjAdpixWWRKbR7Dc8QyQAyGA6H34GM4WRH2j4",
  "key6": "3UHRp7XgG5UTtz8p98K2bXBn2MmHuv1Mc1v9y9v8NQyKbN9B2Vyq85GT2yCzm3ZLjkPfQArxLuCYtLV7Py9voo8u",
  "key7": "4EQbiLaAxYR7wfSGo33Gnh5xdxA521Axz6ufbmkb6BxgNGRPpqKhv6gztjvWbJ4v6jiMFryACrqFnaEfbNkKUmAQ",
  "key8": "WftsktxFptCLede3P5heFXn78XQjSZxQWSYSULVD4eKedH2gn4uGhDvBSYo84HpHNMJmTfRG1Tfea6YMJ6QkV8Q",
  "key9": "hha7WsjfQBdHgmQy9qVVnQGndRR26kk9ETcQstMAvurUAeaw1D8tXWnUfJYPBFsQLqjpaktkExys12VNBuQDVaG",
  "key10": "4P2v8RfZSgewDxyX5QUHX3Yjb2CguzuuaM6YPmWMBsm47Bs36sJwxHgEHmPrLdTqt3w5YQ5vZfiAwR5fwpEoknec",
  "key11": "5mKfwTMuJMbZuJfnAFuzJJsdMbZLGaM6d3v5aGxfxdQvvpNXCASAVbzyDX4ziu8b3FComuDbych8jBajAYQD5j2E",
  "key12": "ATKLX8pwN19XNWBrU63zzYWGJ3VjE7gbPx6zfo4UbK3vkdLBhhoBdXTGABgBFgTyK9xziERpbHrKBsGGMtx4bFs",
  "key13": "4E8AsTrVL2F8GQLKbJy74MQmj83Nsxtw5VQnWwTTCJMVVqUKw5kKwMwPCbSL4fR7TCL4JfKBnxsvWwSF5wBxzBC6",
  "key14": "1TQnqyxUZwEjAy5peXg8McHhuZ3KoE2GhLwfD8hoA8SE5TMWDe5io422PHzMntu4Gyc6Yo78gmQ7J7dRZqdw7Gq",
  "key15": "2DGqE3BKt7aVgCSeETr9iRi2WECPPmwKv4HuoJLMbEw4L9pCShvUfCNmpGnLbL4SHRAb8b6e3MCEW3syYviDuWFN",
  "key16": "127cjB9zhpzJVCAfaVTkno1M4FcYP1eb2C69tdo77timySuw35xB4oZQHAS6BPjnm2sSasWBwvBnbqLuKx5sy8MU",
  "key17": "2nkGrsL6kJj5eWebtetVKEEM7iFjbrjBcRbQBTydfGCys1RftPMh7hCwrs5oDYN1BKBhvQDLe1x9LiExeqt4ZEh8",
  "key18": "3NB2BMndH5XmH3DqidHRe1Hj7sqxR6KwtQ59kKdZiPhCohB557AuLozsrAGFuTveooz7DdPzdRESeBkmBfLdyNuX",
  "key19": "3qB49h2aBndEDp2HgRqxnGMeUHFGZzHcJk6fFzoJyRb8KMsGmFqv4Q2YVqcLKXsNiHVdjdhjkNCeECwv2ZwpmPdN",
  "key20": "2Fvo7zhifAvfHKtCyxWqhYdN8C9dVkhr6KgUyjYoBDBaxDchv9ZzX1zmyazi4fYBasckpopscu4JJF8RX2dWjbCr",
  "key21": "doogCjf9YHRBRdwhG1KEHJSSwtxgroXDaq1ZcuMoah5AzrPDaLPooRZup2SDAR2VxcWhjWrB2gcXqEiGm7q7KTh",
  "key22": "4mZAxGuvHFpyYaJ8uF4SK6uNSxk3n7c7yxE9hPCxLMGybkWfiA6FCW5AyPWJGeXADXSRWKRSh6SNfBruWJ5zpTsJ",
  "key23": "4vQoC8WDrkcgiR6fPS7bexYWmQyHoRQfQ3PrRBTWzy5obWKrt63LNdZJvsuED2DXTaNtx7XF41eFfSNTKBPLnJLB",
  "key24": "2kAwNBpvvbXXghLe6FJHZP5rFvnUGYL4Qs5m4iXZjRH16V9rAXKeKSPJ3sP4hLqA8P97ixfAoN2AHLTkxeAK84Ca",
  "key25": "47pitsUPG5npcs9c3c7oEmvxEw1br1HmW59YMez5LV3DGNDbegpgYuaWrYbrhq8T2eroGSnyM6anqJJQW735yigg",
  "key26": "61KAmopC2wBx8sftzqfyHJxCrRAzLxZh4uySwTZTgq1CA6jDmfQUeyerUZ4kWZhdjMh86EK3qFrXnFichhho3SnA",
  "key27": "VQf1trqhgPuUwK14rcN6h8CmpMSq7z8DpxpHSZCrbGvPifQBPFMBuXPb69CjEcMDWnAqZNgraHmfpMuoLepbJUR",
  "key28": "aFcs9eXpzPWBdiBrE9uKc5ozGqCZrJZAT1HEpF6HDXjx91bAFtmMeiQvUFkWY2UM9HvJnHRg3UuZAgSxqoNEiq3",
  "key29": "Api4PMyyKtupg5PgVoULAqVp3iWtMUpksPcDVfkp1SnX7tZhi1fhe82e6iwVtm64jL8xzNGd1wp1fdHVWwx5gnU",
  "key30": "3QfVqY5qjQ13iLSPQoGHLqUjTTu9exLZoAZkZq9qmaCLBQMn5XLSh1BApsk36YzhwyVESDGx1GpUT5BYqW3FCv2m",
  "key31": "3Wotazd5xiq3RABxHocP8qk6iVUTUS9b95xeWZJW6UL7E2TphwoPsZf5u7GDJLEH1rDYFL8teNko1vhe9hSnRPRJ",
  "key32": "4fgFoeUEsS46R923Vg84j4dbfGn9g38WbBenWMBUeKf7YrrJDuHEe83fPxTH7LVh5GyXFXyRLncjAzA7FXVkxBqn",
  "key33": "4Gif3gU8KrGmj9aDDWeEa1jzjMsMUmNn8yzmfSMAkHTHu5fkqoe3eGo5sCfaphJLd177rkKG1dLv9JnVgKd4zH8u",
  "key34": "5DzBR9c4WhEVPdr5w7YRBudb8MDvouQZy1HKLNrcokQe2fsnAJh9DM8kiDATDCyiiF76myie5z95eTbEAZaZm2Yk",
  "key35": "2gdXEFu75VGpAeyNxp2SyfJ79gseo7hUSF2cE6jULyr6uwupDwmVVegR31NLUcet67YZXwetg1MWjJMWtjZBkGpL",
  "key36": "5pCAjvjE76nPu71rJa2vsFTpkZmbuoX3CxGXwZDDxEmHeaYAyNGEihG7nqRkrP8HHNaCGtpjYoDsbpTd6WNBPh5J",
  "key37": "3VFRnouuQVxczyBp5djQXEq497taxxREoL51WC7ViRhnfq6ppN8ZUy1exnqMFBtQM4SkaWwufKubB9dodcRUAtNv",
  "key38": "3dwcsg1oUpp9uiHn1npT7NK39sLRVv8tCE9KfDa7LpFLPVwiVmBYojn78U9XRnRUMy7iuwHjGE786guryi8WD69C",
  "key39": "3MSJnDJBFohf2koyRP3Ed4XiL7jVWyeJkgwaaDEq2Pgbs3YZvBzgPpV6ff5NmyYesUMhzJfJK1WcYTdNEq1MEkGW",
  "key40": "5jkGjR5aKQqgMKTKBtTHR3YNB6skYQqjYxgxh18f7DjnEAfMZR6ojzwq4QNBiMb18wDCAPme7jETs79nrX89oUxp",
  "key41": "5upxLGewN3cPb3ZnzYYLxju21vBZTGuFcRaoeLPk1gtG7md7aztLybfVKg1DeaBbkSLGYe97PcsAxSN47T9hqokf",
  "key42": "2XXXz1VaGpNGFUvtrEX2txikANDQ7kqmTdRHekrqzt9PTS4EGkRPAhKvkrWb5LEKvFCcyo5JwSkZrX5Hn69zJaTG",
  "key43": "3h2gT6Ui93eZTL9sySQYCj7vDZZTEamEYiJDd2xfLSgjYYwSeYNPhCKCAsPbmvnFuTT6UWssqSBB5tNdBafTAmHv"
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
