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
    "2pM2H9CxHewB86NLK7tr1jBwZCTHYBasXG3QX2QUEav3oNQyg94G9EWtqcQhZqdLmeaCAQB3ZJzya6gG72y8viH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "649r9BM24bFM8pCgpibNAs1JoBCr9evP71CNtqHzJ5CE4LLgGHYMSouD3AC8Jqqhq2kbuhi2iFS1wGPRbYMS9aAE",
  "key1": "rFmDD82HZBGEFa6NzHyCQMY9wVHsUEC8wjQBhGRGFEV3wiKPfX299Ui2X8e9xvxhPYYo1q1RAzq6VyD78FSLSid",
  "key2": "6AVCbisQG2z7P6AeAkyfBD9iBMJaBPzqBKjFSi888hdhyNBzebvXeKgiSvSDujAJRpMiSq3bGEXfKXgUkLDtytG",
  "key3": "Aq5SoTZRuUHUfF1cotidNmX4ZyPJ277rvMAuwDNKm5JVBUVEfyXbn3eDKxaozNHWbdRqXaXZRicocWk3ziUBMBs",
  "key4": "FSfe2UoYTkVvs8UNAmFXntunPmwqWEELApMXbsVZ2ArzBhoES2cC7jjF3yX8NXRQD6UTKnSxvPDM1ECJtMyvm7p",
  "key5": "4BB5Pj6chZ9a68Bcpt8QHi98GuJxWuNPhHMt8cNmvpa9oiFn7EFXjQeEXrQh1F168FYiqQ4HmyjJBjwcaYjLQDJq",
  "key6": "Tqb5ncnZJSrWtyhjH6waiWqXqsndeTJAkFvAe4tu2B6DPJL8RScEoQvZaY3WX1qK9HEfkTmD9DtML3cRWwC3Lrs",
  "key7": "2AZABzKquJnM3zTWDifdFyjDoknQ9QBKGkmc5o7ZpdgPuqjqynbqPrF1tGc3Xwuqo5MnHS989Pvmyyv1VhvjU1xb",
  "key8": "qmCkzszTCKLLaoL6ET5A8vcA9TqJVXMDqDuLmCugMtMFfD6jh31D3Bt8qA3XBskLzipU636sUbH1SJCUtvVfnsi",
  "key9": "a85vc839xzUhV9Av2V4N7CRWurSvhw7VJa6ePRSSFY7R3uDMdn3yWJ8UrAhXTCJCHXPutxqcYaJLUYqa5DyTFdb",
  "key10": "2wPmKrU5xHDjktoebDvN3huUqqzw7F7nVSdsNr2E9dvH6gZz1qyFmZJ5zQ5MrU2kaT2bsyWbWoheCwrLDiEZxARy",
  "key11": "fmBTwq2XaZJjSRfutsexuB7DXWZsrd7CBQHMyHmH2wS47xPJ5JHJgvvnreQVJWswW6CgmdRcXDUu7GMnruqLRXL",
  "key12": "5TJski2YjVS5pzcJ2yTew9S9H8MiE9ZmeK2tL15GRp9qerUGKQ5RN1BUY5CBg2Yo5eecGi9TCN9T2UpV4hMVkm7E",
  "key13": "4DfWk2pH9oGLgrochwZygxKZxkziXQ3UPsLBBxP2tzJNjrwCB1vj1c4vpYACtQRDiuQgiet1YKPWMojLrVSGaX9Z",
  "key14": "2ZvsyBynZiXgYQZvTRJyF7qbwW1mXuNG3opygFJMmqzJUqGQT6gNhtjb58dFqrHZieFo821omhKdLA4S9sf3trR4",
  "key15": "ZCT9yeciUb8t65V7Dbdm13mpfuF9q5vW6dU4VmnCeU7yj1vcatYaSBuSMZ1AdABzQtzVk9shxP3DEmVizueGtgJ",
  "key16": "2Ci3jbucKUT15FDzrnF4YKNochEnUhEpwiJAa7S5Pna8TfDY2kTqN96LtBtQAANM4CHYHg7D4h4HdWEPEjBZcvAK",
  "key17": "4Koggv4QtV3tPEPX1CrsjVfZQpxhohv66W8EbCHrLakvhecKx7ZdQYxDEvp2PBwdjg47HXQgk26jPiF3jhX5ofAv",
  "key18": "5qQoRQpPedjKMfuUKvgSVmbcDzjRZVeXjYgE8G1FwLDn64AQZwfvamE8Efuam5usLPadUZ6VSo1mPfEXwvMD7AA5",
  "key19": "4JkMCoyEPq35NehfgCPVQ2xXatN4t3bZjzdPgoTfvWPZLiRkwUAhARibzRqqErPwSuEk6AizJpnZr2DM28diKRPe",
  "key20": "3Tg8dPYs9qeWSfXGv1p3BNQakG2KFRh2f7xptPBiGiypFV2XEu7s2um67gYq369qSovPdwJZ3Jw4DPwTMey6KoDq",
  "key21": "4sAihuPmEj8DyxLHSaAKinXcg5vETDKELUQZ39ZKeNFMvjWjUAvJ9RUFHG9VWkdD8GtkzAaMrERuGSe4DQ4f1Wck",
  "key22": "A3Lo733RoAxM3szyrhBr7wS7sTUPsS5DqdMRBHHXFg2cc6izFdi5dKmra9qQVrT5WFdj9A7kBKknLCXLDLDfWy6",
  "key23": "JtYu5RbtMLtoHG6E6pizqaCTERecSzmdJ5Ro573KDVL2deRJgRNQ4oa94Wb4yDnmHR2Tm9rDyC95qGJX5zLTnnT",
  "key24": "22UNCQGFAVB34yDTjeXN4iqAt9rSpkXYCZHW8bjDwTFhcKpFYNzyxUiYU3Mk34taGqThhCY4nYkyQStaN8hQQ3tS",
  "key25": "21LE89qzwuUrVQ6REokwBd6FUgmBdgGTY83EY57C9FHjQ8KgCZMyhYxWdZagpfjcCE3ecwYiqAbTZa4XkhfNTc5n",
  "key26": "XR51Nh5Kg9TQ1fmeMykvRc75BoYd8bhbznJXSWVhPDzYiCGUmsRYzS5DLCWjFLBZnQ2DbQ5MfPwiBgW2ew4cooG",
  "key27": "WivCMXcs4LAjrTaZP9GxDFP6qqKoHvGHQaks1ZW5zfqdL2j5Y3TvmNJE87EVpwZcMMkBfZCZMuyibFXnPL16Aev",
  "key28": "125Kur1r2GEumfhRhbYPqmYfofroy3ouDCuwA65uuaDnvN3xoBqaWvp67mxoDFQT8AF6PLPzh9GmmLfouKwgJLnH",
  "key29": "3QfwmHVwRHKML5cMBUL55WfqEEHNiLxTgELYSTGSjhHnAJe2k7N8FvHJntCq1mU9Zj2NeMR72ZodduWGvWTqRG16",
  "key30": "4bhiF2CJn89dodZ27U69CyfMv6vHUBxuwo2L6k7WPGQ5D4K6DGaztvGedH5afTWy81pSiccU4ZgbLQFbzSPgHoXy",
  "key31": "34bSR3WWQKcxRzNxR87RGeYkFbvgGGZ95oBsUjYddRJMBVchsNLmCfzRnm8HnUHtfa45DD26yAAU4e6BYWtBopFK",
  "key32": "4tbraXYPAHRE2RYmeWnVEbRBu5YqzX9qR4K7KSvX2SRTUFaXHxkw6odBLJAGjGG4wpJqbrUjT4eRjPj993T3fZx4",
  "key33": "4p3rzfCi8oYQqz4n955K6hmGEfPgUmBfp2mT5jeJwMwtHG6YrguRf4XUfP8GX6Z8pXKdjgG2jvXMeB1mxSu8YgzV",
  "key34": "4pyDyWvKXfzEwNDn2PomF194G8wiHak4TmXRoqC5JQP9KJGesMzPT8XvmBhyrJqjcXYvRxYp3wT5R3N2ysyLjjdb",
  "key35": "2TBEaHsuvj5MrKEDAJJhhXaF9nqrVqGKTrSmjwLgu7kkU8pLjtDW44i1fB8K9yWxbQts4bTYFA5tX5crM8wRjmz4",
  "key36": "2mYBMDeznKKEiXF4ZNS4nfxcws7KrUfRt3tot8rF8q4czRxjUQi6UcNhKu8KBL4qfxRi8fDfxxgrRdzKzq9kCCVY",
  "key37": "4zA8jdt3bxt5AoahGQV588GVFVW6gzXnSgYirWRTEMf4rmGsBcJmxDUMkUMMVT1NsYHTBXf9HTZb98KVXDCDJ6hD",
  "key38": "37SvvkgGiFBYNb3EW1BZBcSSDg3Pnf5NXbj5SVMWaxeUBHL4o5NCr3vj8JhBuaDsgczBmMx6B529GDKRm1Y95eNx",
  "key39": "4XJprp7h6AyTVzR1s9papmvBe2MU3dZanDbFUCcZ4xpGnRt2x5pmDjdjr6cgUQ3QvXRCUrgyFFSfT68GNDMGNghN",
  "key40": "2NyhGJoeyAShFo8GyPdpQML6FGMZvJ5AoqirDH4NfEGqHaUSb2jr7ckm4CQm4KrTJzjoGMsPNGQVVNbQNZP3g1Mv",
  "key41": "1hhmHbnyyAyqCJk2Ki93jpjCCWF2D57keySSygi5NzRXQfWLDoDa6afXftkwoaRHaqRd2WtC6nm1fgqGDDYKvnA",
  "key42": "5yCcEqLbZn4g6Vr7k9jKJRKpVGiYSGKk55S3ByyBEpKbrA4Jze3N6vseALuww1ZVhiZiPP8mNs6vKPpqPyeFHaSj",
  "key43": "3YSQGUvXuUx1ypPwkPxPhnfhKFEnW3vXfo9fXbYSyNXMCjo86BPcvRS4ueCqEz6E7rQ3aiya4wpYBFQ7m6J3hQSi",
  "key44": "aJ33TUfy1n23omMN5JsvA6xqoFuHCysDgAeDhtTCKyf2CytW1CxEJfrxfHqtY7gD1TVQLHKa8eKeTgkz27cAfu5",
  "key45": "463tm4mvzLtPcnmWpWkiZyz21dkjD9MSLCN91McNMPAnpaTkVueDeMzkVv8ZPhJ185BmNdh8mnaNHSfFtozo7RNU",
  "key46": "4qkeCrnJk3JVK6B17iKzsknEEBj5JZbDsv74VZTVM1dBNgoB7t18rvWGK36L9hMDTWPvaBYRQdggByDYT2rDAFCJ",
  "key47": "49iHX5RnT9ipjBeXzYU6tEpMnZdZoppQ3CpUbdS5BWzxfyGd9FUyp5azTdjAdXXQrSKfmYrMmsUknJ34sMb8PETK"
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
