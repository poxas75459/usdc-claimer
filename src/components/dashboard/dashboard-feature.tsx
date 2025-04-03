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
    "2Xy67J3UEvRAqy4xsy8fZ8BMZkNkGtbra8iyQEXgvoeZ8hUMnXMRHJaeyVuRQnZusmT9Pgo3xZHKNc7H5xZX4AhQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Yd6mYco6kv2f4djoiNCtEWT4DbuyC4aeZXpx7dPyucTCJPXMpJpEsVLEA3iFWBN5fLTHYyeRNiCuncKNoFPjtAD",
  "key1": "3RSfyAgAQ9eF9HapNXYvYA64XxUUG9bM5vAcGyXAufJxRE1HC6Mnm7guvjREwDo5Mn3AWgzfdmtwACkmVaCbUDQD",
  "key2": "2nLrx2d6NiLfiKCEmZ7miqJjsRhZQv5oQxjGAT5NSrm89sSnsAqMc4J5bf42dokDSbP8LrGQnfzigZYjBL24rabN",
  "key3": "GDWvChaqbJ94hAv7j9NycVxW4vjmasadE7Qj99oAG2DEN2Ck5RfucSPJcRuVoLrKL1zW47sS1QGUHXKGPPhsgFs",
  "key4": "2wEyLsvw715t1zi3iaRycEsfbSUf7MXxoVWr4ftbAQLvTht5LZd67TtgShyua3r9cHLnoVEZEvNmGEQS4zNLPpum",
  "key5": "2BBxKXbNco7o6wGNS5ASqQ5RdwqtjFvEwNWTpgbR7wT1tRr1Hj7GPiktXKvvyXrmk8B2R81Pu6vJEpTPVGbLatiX",
  "key6": "2FiMqZgoNJAt5WoNJvP1Fymubg9N3h58DjsjUa795xgjaqJGx6dpyFLiFk4GpayVEX2fEhZAqyuSgwHSPUQh4trE",
  "key7": "2GCSGfNa4Ym8Qd3dtdcHBk4auaUBPqoigENtduTXBS63JZxygKLijFtYTVWoBVf6QWx5gZquukV7jNL7wpAG3VX4",
  "key8": "56XPTBUrTK38WWSmVCzkPP6PAQSUZdAXehUwChBEhRdi4ozx5dhhJCbosszCmzGUK1RtEDJGHGrQVpKx2ytcJ2yo",
  "key9": "inB2SfYN2N1VnV8oC7VqpSZ4AzDkxteENNnnSb7kK42yYfh11xxk7yT5acyLkZuMcugXdyQD2ioYt1EZZ3doaPV",
  "key10": "2moMB97MZWSJThVwHGkg6yA1Vt8WRbDq1uBfZXNjMFiZw5CcyGxmYTELDM4QjAcePMKfFXXye5rq1TkXeyRC134K",
  "key11": "3DxDvwoB6srQtNxNtvfCyrBjSUmSDsKTx3QnNPSJ3bLmCj6oeB5MVwcYnAGj5UgcGYBF526Rzih69dEp3gVb5tDQ",
  "key12": "2m36P7JkiMymfnpeQv3GHVdF2ngP3tHgA2gDBxrPDRCxiEFo2AmHELsKUUL4QajPNufUpT4Xp1fK1VXzpuca5T9S",
  "key13": "4RSWKzWZuBKa8NC5VYs6bruSzfiWM2azpXHyMcnSStryD1HDUfUAoD4ffUr2qudpPKDp8gTqMVrqbHunzsghyzTW",
  "key14": "41xKbkMYwjjQjVUBqJYWryQDmqF7VGFepN9eSbm6Bo26NThgim9b9mCMbnUdsA9WRN6GDzsYs1jRhTNNHibM3k9y",
  "key15": "xMKdCPqYaHSKtko52FM2mLsbuW4TgM1GLq61ucJBSc2XWtB8JhZg85sKUpQPpCN6S8CUPaBw4b1HpBSu33cNjvj",
  "key16": "3EcaEH3z5LibRdFjtycAwXjDfkhjep9XkGcqniMskfFBJL3DHeEQgPmmi2xa7tQcx7NSzvTXutH4WFQ9T9eDTDQo",
  "key17": "4p2YdZQqJ8S53LmSBqCDcXAfRBeXAdUy7NLsrJ4XDeaRH5JwvPdBv9AR7jtfF2HoMWcfxgGhJCNN8t1JJ7Cxbe6g",
  "key18": "5xPiTYvWLuhjdtUmEtFR3HKHzomCzcgB3ZVpHYHzc9QGSxDdHGK6bFoCsAf6HfPfta2mc6sEZJZcCp7L9TqaySKd",
  "key19": "67JDoV4rtPNSHTP5SqyjbWUXrWQkQZZH5AgQJ6U7sqrJS7h21mrBMAPQWCs8WTjnVE4PgRnNSfZxtA7WHKsUT4MC",
  "key20": "3ZVVPyzZbbfnrwXzMhE6ExLY9QXomhcrYoTanUc5t3Vb1TPfKk1tedLrWghvmhP836A2bTYTtEedepewY1MHgti",
  "key21": "5HMXjrfERaJqPvaPWWkbSUMQt3PQ7zeu5nekTuzh8NwcDqoiuxyyMwNtniWRFyUgVVez68L5gtV1p5KE5s7DUYQn",
  "key22": "24cJc849EL2MeiMnbtNa4dgBTrmRbNDU8xGMsgmTL4SZCV7S9zb76R2mSS2Htz1L89cqQTttbc4bAsCqdfKzGTgj",
  "key23": "NaKueLNJxxC4uZN2FaHmE5cYPTF1hjyWChwabcojpxFpgHJ54raHjEy5seND8vDt3NZa7pMuCDpjmPNS1yt2guV",
  "key24": "56DHkG2nGF4hLz2PnmrVm4ksnGHggh9GgLY1FAU8eUcE4hGeqpzM4YtNUsV4yFgxDpiQi6ffmURGrsd7xWVW5Uvu",
  "key25": "2VjiV2F9jjB9vgMTFNZkD9aKd7QRxyt4yNTRsHwHVjzKsZXMbwk58XpwCs5XKUNsMp7ZnzkyveuoBRbWQrtTsVJh",
  "key26": "65wgpMba8Ltqs4Lrkmf4586K1164ctVdxDT1fva9y8C3m2FSRpzqsnrdJCcbJyWRH3R71dKeXMuiZYZqSf6kn9Vt",
  "key27": "5wEXAFaqo2QgoWzghCA6PrhY6TK1KFx91nEELQWZsUpSbYjGsms78XFJfnCP5unsBburSkDDg4ekC1UQAuxWgbwn",
  "key28": "5pN8zqPpRZVwUuhtvGu2kFN1YpQKam9qFk5CLGZ5pKTfQBtXJfaxJrGjh1dkNCEUuppgtr2UY2J987kEEp6GKYv6",
  "key29": "4CPa4FSj3DwG6h7iaAH8y621FcYP16hFvbcxLr1QH9xnoE9KAraNA2e4ho5fQ921nc3xDYaepNJW6Bc4H2sj4w3k",
  "key30": "3xc13FiSphp2r2beF4bJvevp8JDH8urC2V2qgArdj9saXfmspC3rT92cmEXrWrsYJKefFweLAHM8uzCq3S3pani2",
  "key31": "8NRTxfRp2JeMNrsKNsD9rAcwgBoWbw5Vi9uj1YAgPH67HDzg1H2kdnjNqruuazZo72jXtMGVx1yt9sR62FzRoG2",
  "key32": "58ZpkzSRBuEpVMcndVsp42XT14WbucL7UisTA4kcWnbVZEdQBSVDKoXMoHk5detpsCAYML7S3A8UiUz4s3keFmho",
  "key33": "56VPnbX92wre2RnnkJjWWXH7cGf1JfdEVctKRwTiZht47Mgtirw7BJusjf8X1BbJ3xfukyBj3JA9fbmQnW1u6Kyn",
  "key34": "2LQ6HSL25t5M756WuLCJrymu14KuxB9EVxWsJVLFpWeNE9zpxJ2GQAS8WCLh2vSzZAdJ6SzJWHLov6NZibJabt4J",
  "key35": "TmuTnskYqBQApas6eVjf2Uyz9DJKENNXu34zJb8TvPi3w9Y1ZM2ZKfbn3okJEfUtZMeXuJUDJvQ2n9mRS7Q6x4X",
  "key36": "5kGmgrYRufY5QRuwVBnoGuGypgLcGDHjSftwBsBMvs5NPfyWCcymBzrCrs12x3KQeaWADnWw6XykeYNy7Ga1RMR8",
  "key37": "41tniTSwwRwYmTqiQ7BEwqH3o8vzvfqNbQiMjrGEwAxiZvWgzb7XcKAQuw2iMCWnvVdoowdj9fa5nR3SEvjRg5cR",
  "key38": "3CvVRPyE3bJeZfNWtPgj48Zi5V3dcvTFqfw3kiJnfZRui1bfQcch7N4qUHQyR834hpLqy8VUteAZR5TUzPrxMCSL",
  "key39": "4bYp9zAUwZzrjJRC9TMNsp4B4RmJWFRtRhtK14kemHVTWZYQePFVa81qDGFKkwB6EzHY2ejw7zC14uvyvs2fHErs",
  "key40": "2Kx73hzmVYpG1fV7tWmXhKzLE93nqofWyvxAx1qACB4AAuUyj1e5We9owJbbENcgEz29PwRyWNwc7chBrJaShp1R",
  "key41": "55tSh6L742ZZciqwwsNL5Vyk8svAePCuiPixdraRQpTu8hQDsy8o8RKzrPZwVM7GYa8cvvLypg4sJHx9kTL39Va7",
  "key42": "FDBws9S8gN7bkZqN3AAAgW94ZSRGTdskzmacKMYaPyx1qguu1X7xfBNAmXnf9jZxdXvcB2ki8sjkeHZ9fhsj234",
  "key43": "4sY2R4uUpEwggDjqCeLwXYbwpXGizZsAw9h7ggCsrmoN5Za3kv4PGJfDwZ9dRqq4yDAeWPF6YYsBEP79eeesWG8c",
  "key44": "3sZSYxUEfBxunEanMCftW5N44T6twnAfdEyoGGFG8epHSL57q1vTEWJ3SxRRfGvC2CgEUL3Q3vieghyqd8ZLSahH"
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
