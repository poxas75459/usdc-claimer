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
    "52EcuuF1XpBVLex6E1BXqScPGB3aetNibhhz1sDgViZYNAJUQtgrt1n7PE5kojdDWPRRJEeuCd5uQLZ5ayX7966H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GxiE4aMDn6BGSZtRSy6RRPDXgRJB9jFT8SMMRQ8ifwn8duEfU1wcicNPXi2rDYJ81QExLCsR1K6QQkbHA5dQBWE",
  "key1": "5zcvZU81HRPRzAgZM45QopEyrYJoESYZzRc5AryMC7bWJ41WbK3kfmURp7TKPZCeAbTAz3Gxr7XK6ZhHDXVWBnrL",
  "key2": "4PXMvFfK4wijci4LintgK9YLnEuPsMhbfs4V9qYAkTBPNde9q4cvCCQNwy5zjGrnBQhnVfmWzGF5i8kEFxMC724Z",
  "key3": "2MhZm99axSYsVkh9DVP3LZdhgBy1fytbENCaFU7vWQYNx7N62xVUdzU9yUaaKcwT8rDB2BF6LQBRkdAW9BUywCN9",
  "key4": "TvWPbshTrQHEvRESQXfJxkmKXvCuxgMzEaZEpwVyXtQvG288VJnXCZVJCfKWf6rkoBStM1kB2KRwXpey5Q5z8Gz",
  "key5": "RUNoFWoUcSE1KoJkgpgmQ7kyGySxBd878M23c1J9xr8JCF2xUAUd4bWd3LParWGFqtb7RMoYXW5kQS6r1c6Q48x",
  "key6": "4fusSKGpazoUh6FQkgmYQrzKAoPYcqj4pYz8RDZUSqxMiw41PFyigUXLxpsixhPgvtX8eFTn7E334cUz6PG4sT8Y",
  "key7": "Z85ArbJZxJHvC22AReVFySB4TrmguwuQrKJKtEzNXaZYsEMTf5zkNtuhNUVaqK6chcXaApzriw7wkQkhtVDVbLp",
  "key8": "46MZi8nHRqhbQrcqfL8rNZ7Vuk5tqAMRywdNpbKw3CoM1pTKACTJAZxi3t5cqYKTiSnZ1r9rM9UZCBBE63Mk54Dr",
  "key9": "3AMT6E639SnxE3NHPUU8ZUj8pXzYnpJ62dVDhSx8Rgriseqs5SWERjZhEw7Z2JvbPCVKH1W5fZCtkSN39m1EKNGt",
  "key10": "fzGFyDrn1v7KK1gR9NRpWaUjm3nLJ6gpWbjyKqAd663Zbm71eg1B9QJByGwAhf9xsYQBLqSStFoD9jNnbgDkDES",
  "key11": "5iYZ4TP5tRhNyWKFa4Z9yE3E7UvWD5UHyHh3DHhUGtMZAMsVSmrePCjXXPT9RgoSW6e6CPwsdMGRC2WykkUhao28",
  "key12": "2aDKHYkgUiUU2kubdBcdzGyqygV51uBfsoUMUWqprcDpCMs9g3C5txou8uufknyLd8hnhZywUVwvvAmrNiLdTtwz",
  "key13": "7vjDJ3jPnzeMkdZTQibWhv9drij8j4MxSTzhyjjJrF3wc1FnRVgUvEfaZ9etW62Jqodo6ebMQz1CjJxvQMUiBbX",
  "key14": "4NDRAgsRHC81sh1tnkjtma1FVayLugengiWtVp2nBdaazsW4dScgLKBseSE3MoHu7wmB7evR8i2NezH9Ug8qYAGm",
  "key15": "5FDm1p7ePU5h2CN1pDCt3wNFrkYGuvcm7QQDB9XdmxgTMPYGyXmgkui2tYcfRQruT9RgStrhGUBZiu8wcz8vkeKh",
  "key16": "41dcCatnySJaqexzmZ1H6pS6YKPi8rds8r4hqGuZ81nwz6ar66d9xrUxsRGBJXkrFrhy9uBSc2QUKmLDj3medj3v",
  "key17": "5RqPaomZJmxD4zu9sWxJhbcQbAoDHkqgA45gUQsVtQje8yprsZBPqLTAQZR3hsRbag9kxbqJZ115ivsqf4VYtXaG",
  "key18": "YNginLoDB8qPFvW5cayWjsZAK6f65NjkFhg37tJfaeD3ViFJHdsxjNeqznVwTHfdUwmMyXx3KFkuBWHV2P8jedt",
  "key19": "5SCdxgUQ3yXs8JVqsjvy3dsQubJq6h8bYqtih9VsiUPrvitrTak25DVGKQqhJFwZpjHNW4rySrNtArwYnDvTz6wy",
  "key20": "DnW9qVxf2VhKhHz6sEouCZ9fDKYc1cf9jyemjznKSLM7GwBESmnnZ3o58fyJ8KG4fFJdPzA2JdDxyi9H8sauHdg",
  "key21": "3dTkTMS3ad5dfZLbP5CTdE3JQvpiXWVudrgC8hnvr3L619bkRMyEjbnVZhDXetCdQParn5skSiKRnZg8PS8rNQnP",
  "key22": "DB1unstGE6gw2aNbivAq5oAWrMWZvnNVrThekfGx4jg99onYsFECtCNWxbLsuM79BEAogLHuhntrWWt8GgMtgy1",
  "key23": "fjZuLB2WH4L88jvd9S5EejJkXQDBTbFiR6jFHKA3uznVNPskDAJtm92F12rMmmHNdE2eNSmd8mwooQvzmFVd7w7",
  "key24": "4ZeWpzuRiJJU1B2EVBqFuq7vHyfQ6TasiJiKzXMyUjNAVYxLpBioSftx9jL7Gh83FECnwXR5RkGKVQqqewuNobr6",
  "key25": "4mXvDcT5Hb7ThH2s1QejEFrCFNJ3Z7MHznwMsDcXu36jVVbqGjv7xoR74c9shC2zJ8DjSr9SvjhX1h1rxYJgTfF5",
  "key26": "4ws1st5qs69p7gK3gjj6kkJVGTQMX1gpYMgpkcZubGDWukyN1aeiL52drgbwm4DeBpVZdujH7mZbMnG6BRCMYQ7",
  "key27": "4HdN9FGnd4UBMbqwzqCZtCB3wYb2zGkH3YWve8nLu9XwiaBNSPq7yVniQ88WjJhhxobGkPpsj6nNsNjUKj2sREMW",
  "key28": "5HnfJkCM3w3LVadqTBi66UaZ2Q7X54Jq2hcZ1y1818YrozATa1LgaYTijZet8jHTxBBTQo1y1oKJtiAprysYucDJ",
  "key29": "fS4DZXyPbBvbuboQmd3jxEcYBVZXJQUfkCCjtGnPCx73cEsdb4Keh6VAnoJJoxEDG15YhPUmbtjoGwztRCiYM9x",
  "key30": "5ZDt45iZEwVzZkMzSV49V57GXUerLSpYgjAijbBp1AiAEUTW2cD8L2Cq6bMP29Qu9bngvUgUbroupbC5aSHMH3uB",
  "key31": "3aqiny2KR2krjAbL76mDbD2oSFnwVM4uLrCd5mLgw1h9u4Zr31L6pTufrNNzHbETTDHUv9nuZNZWRGMBjiHZp7T9",
  "key32": "5Dur3SnLfiJMeGfQn4U8QFKUGj5ASb2oh36ykarSMgL6TeXSCqdqwuBU5zUnvCm9y9oTFSmy5nfndPCG6EqNuf8g",
  "key33": "sWR3ZAeK795D5jDvdUqJ1XJtoyNU99aoVYE2W8eaq6w41NAGbV9mYhNdsbTixt3YL3HNX27ADPF6cFuz8FjV3SD",
  "key34": "Pj55iTF31Mj8BD9tPKU7hnSRFZGJSkxXYbqV2boN2dAbHaBXX44XDnrdtmLrZQmSDYeYQtxcpe81j9keHvy7fFi",
  "key35": "oavgWgg6PnX2Hc9q3t39RmYv1mUA4NJm9yPiVd8Rsa2CEa6BoVvCQz9FwF7W9t8ncKAMrz6H1KhUweksxEdJkij",
  "key36": "QsQvQoRNHW56yALhM9J8uBTpQA9RXr6sG7S8F4mcEoJ76hZoPhKbjzPui8AuZFJcjKA2gwWa4DnYt9e4a9S2uUq",
  "key37": "2rafxRdvq41xtWqiCcQjM5JMjv57RTUAd1WnZr5bcdTWpwY7AqEhZbsf1noqjpgRWi6uqQ5RmZuhEwhdYt4jrMBg",
  "key38": "4s9QRvAsp8pP6ymymFUBaqihkkZ8NxHtCpELz5VVcT5QQAiE3vTSZzRp4BTUFMN3BEFeyX5nS56xjgQGdNdQrgGw",
  "key39": "2WGwefjGw2qM9NuZ2kYSm1iVcqpZbDc6qZvExknvSrFgQHrgHpzj5yhX98TuN4YqX1uediWekh7pNta5EWNDXzgG",
  "key40": "2DbQeV2pDgXcMquBeJEY7sPLBaLVQt9q7tzdBVTtS3axoNNCbSFU2f16xEEP44NWi7L8Q4DuP4NAhnsr1fb3MRcE",
  "key41": "5QDXh4qkbKqu9gBGT9nm5bwtbG2JvCKBEq7326fccxypdAVadjLi1FJupfYPY5CU7nCvePr1qXm11366QgPBVDM2",
  "key42": "2uWPXB8scgf7RtK3xcW1UUsSM34VEUXPdM5VjnTktNJgYjigfyfLzEB2UmeQtzLkicE9Ah7PQi1V9Rhtvmokb1UZ",
  "key43": "5LBjNhNwPeAuTxPQR7GWRoRcSPmKGVnrPWPb9eF5jE9e12mp5ycR44GTFgEfQLbTNr3vnsSoPk3iX8VQZWpjr4WH",
  "key44": "4EYaR6wodG2Rab71fRfdxgGYqg4LKN33aCPuL6AesmVvXFb73YgEMD2h3FWeA3MhU32SVviMKgVkMddbqcPhdcck",
  "key45": "Kmb8GUQCboZe1TQJf4aNPiBwf7B9dKMEeuNEVSfvr858JuJCkRfPLecJM3xAKCXRhKjkrUgeB7hLSRCthuWZ9qY",
  "key46": "FjJ7Dj24s6SrC6o9Qwdn94v5tzNNV6XEJN1tdzWvoKVKTXveLdKLf9FM9wnurYMfRt9cDF2LaVifGyoh7mv7dTS",
  "key47": "2jVsCJM1zEqGUzn82R7o8xSQmzYEfAQsUzcbonSsvySBnKr6Co7ANqQDJJRXwQCzJtkadQEWzfCgJ3Y7ApCZ7k4k"
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
