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
    "2kghqL588isjBWsVHC1SEMHF9ZYeMmMUCBBtKskZBbwhzp16gAAFYGveoyR3oY9tbVb4HBxcvmcqEvqy7mFkvGFh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21WRMYtRTRx8J2adpJFhr4pwetbN3MyorHnRKRCh7wRW91Q1YTojwD6fGLG4KqiSZ3t1H6GWp8yTE6KokrXjVmJ8",
  "key1": "4ppyjj4iDyuSeFvQ5NcupkmfnJGCZVTjycubo3f2DaLZZauQwaYNsSGh8wxsbLUhbuCgftU4TWfdbCcNm3o5BEeL",
  "key2": "47E3NsCtvvQz1L1LPqAzGUzxvFomim8hUGqBU2JkAhoxzS6UTLBDFW7nxRxf3xHStp44ECwNq5jctyxoUo4anu1d",
  "key3": "3znGKBWUBrPT4NwYPcH9eEXbPbLfDFaF5UkFhWiwK76teDiBe7rUgzQXRcTitziHEirPdk3CJXzzsfpPRMQAEvZk",
  "key4": "4dycm4RA4fTVFgjh6xJCnk7D1QAt6jVnEcNncg5Wan5QcdyXdj1SG4nLfP7WtYyKqZYxL6RfVvYXBkaZvLTby2XY",
  "key5": "5ACxFYz3PMUKoAqViwEcxczAYoPKuk9Upe2Pu8vTsjAih5SoyFasYhZZscNoXKQ8SEWtfgJfS7LSm5bfL7CUn674",
  "key6": "3fTDkBbcRSkQJFpzLSAmaeP9GBr7Haw51aGTXUKXRJGC9wHryfYTBW8s6hqJZJG6wJXJeDCVaMYzgS8Q2FTURAJ8",
  "key7": "3Mj17oAEDAwYcmey195GQZAj5seVqw1NfuMhSpvucvxDKpPj3Y6divbUk57W5VYfbhq14bCZwAz2mXMAXz4s3UnY",
  "key8": "4T19Ke3U4ZqWro8k6BY8yARsHnjWozyH8ywagMki8hm1MP3bJ7gfaXffctxW54ZBBQVL2wpN4vcen8WMGys7f1iJ",
  "key9": "2GXgZPCHqAUgrP1PfJHDHKgBLrWD4FG5VAHratkuC7QJna4Ers5aqV5uMee5MtS1JJxs21m6Xqnkon35yAU7wsg5",
  "key10": "2noPonoHrkRpzZNfmhFEYTfJnQEBwsdtwwHW1YtMTWW4GxqUsXhY7CiTZXhHubdFeLXnhKHLps4hxuzNSkmB2MfG",
  "key11": "5mApD95FP9sKGvZdgckqizMKusP3ktoTfHXY6aTJpYPRYCNibz1ofaDCxZx7iHW1rcKKDUFBoJ6BugDwgDxQo89T",
  "key12": "dfm2wuUmPb54gg5x9NV6x5DNndk6JoM5Z8cMBjGya8Ep7akwLsenYG7Y6HPZdYpJcM5HTfo1573abGVm4wGs95K",
  "key13": "44qftG3e3qHEm1miqhhynxikPAu3nYpecVfxJan6j6qBXtaDWaAVyNd6nzQy7DBKXEbpbYsHHFLEhmJupx6SfP4z",
  "key14": "57c5ZmULZQLWPLzaWwQpgrVhcpZoqJHwaBhstGxMQ16B15hx4ehVJhRssw8YDf6Tx1jQzVpBLcWTfuj2mokauE1r",
  "key15": "4WxLsrPszqb9rp6NrtCXLsBZLAz9TXhV7ke8k5JZyQgm2a4YSLtDsZXxFR85oT4fU9Mw1X8aiRN5GAMT9L6gGGyP",
  "key16": "4NcuKN2x4wjezpDXtEm5HZx1RQZig3UEAyzGpaSTRakRQ4yXEtjNtBdooWdwcQjTuEY9MiuxRwLE4bJkBN5BRa39",
  "key17": "4keqMVG8vRUmCgpZNkJuvCFX6ngNptMH4G66z94j792A1yPyanFom8L8kM1yaLXBfXCyzyP9n2jxpZ44YVPNQX6B",
  "key18": "hdHiahjPdBDZUmTggaG8htUBxqaQxCRuNUYz1tcKt3XAu2ybu5WVaxVEE2eJGbrfN59bonEDrYTCinomTxHAenQ",
  "key19": "onLZevWXThJW4reMzj5hNDCoQoiRAYQ2m6vig915SpmDyEtvZzX41xmTiRJVqJ3UbGcPcxm1rGy9AT8PqdTqtvc",
  "key20": "3BhZ2ge3hs1vG4LCrtbb1tgqbRer77MUNQz9uXQgjUPx38uhFae2k8NBhKb45qj8gUjqUKtAvVCEjTRVPvBaMoXU",
  "key21": "3ybDm4CJh6JicEMZJakN11P9jeDTzuihDKFrb4VkCZ6ihkgmoyr7tfapeZbU1QVU36LF7GUszC4mwP5YpFm5WpvQ",
  "key22": "31BtpE758direoiZwDeBboXPu9JXHY1qwAmqaAf1cuTc2tm2vchY4hAG7C3MSZdzBp2jXePmjcMuziyEuGjQPRru",
  "key23": "5BZztPTiYYjFAkHvstCW6oT4zKT33bUzXDH1BpNoRZ16Cd3U27byErAqJqiExwih7PJXEWhC3eHwkGNEbQTBznE2",
  "key24": "amy9Pt3r2oFH2DAE59gXp75KxtBi9dy7wq78PSeAUv1vYWqANFCYqCFGbUQoXpp4o59UpE54CKKtmQ99Qc3xazt",
  "key25": "4dohbjpE9iJdGF4uW9jFqyA1cKY5z2eyvyeM8aFkQyaQvUByC2L7kxDjvipAnPmB251264KtQGa2eLCQ7z7KoAjA",
  "key26": "3cJLMe2bhrTiqvnm8f77WutmmAtJWbz6eDcuimjoqMN9EMReiaNXSejHUmWVdDfZ4gLnvoHGupZFHEDe9LqwcLhM",
  "key27": "2PF5EcwsFMkKeC19gg4aoFxMtQ4RJmpY2pvEUMof9bcqaf4UcNarv4TMRjfHTJL8BQpyZTsxijjrim4CHvHjM9tK",
  "key28": "5UJ5BcCW641DTZcBzn3pMH3jCaFMitrEiZKEbF7ERT8gnJZRbWEz8FEg65Gm1wRSodEgT9bbrU6yetpU7TVVac2R",
  "key29": "4iqPUULGZMgj3PCVDFzqXBHsT57EeVNA73sPNjavUF7muRFMnu73b23sM9k3gewAa3awHkGw8DV52QJAbKtTkBt8",
  "key30": "3Yy2ieP8ZBV3qjgkJMVmYiorWNQaavrKf6HWdG2yy75k1U8qzsbTND3w65gJMNwm1JEsdaXacQq3i1mpUERBMmZr",
  "key31": "442feLBRhTwX57t2zVtaBZXLGSXTGFUNHgR9ifXg5aFUSCjQiFTHmTF16qsNXd9fA93D8KExGhMbzAX9TXjsGuZV",
  "key32": "2HMJokMVnSiV2fqnopyBjrbjZJAG7f92CMAFrh35arF6WWdePRGSkJtgcE8hhp4VmY7TwY1F8aFzS1zZoimTLG4T",
  "key33": "48DzPT5dJ5FJJSLGWbdSsaieDf6NhhhaTZyQ45EzBkRJVVsCFQxp89qEF4yjsD1WJodkr3hS7o8hR4NxGiyTHG8R",
  "key34": "5w2JYdzYJkqcas6cjaYeSr2Df7dzrb2JUUd497VGoVLXuFM2SGgDe3V3a99mwupnXpT2JAfyk5EphFurcLVTT75D",
  "key35": "2bnEc67XwktNdRzQhtx2GpkB9S6pgAp5v5QY3KXXXwDnKwc8ijUQhkL8XTwwyZTUeHB3FFgysAor8x2pbLFDMNfX",
  "key36": "4QWc4VE3cb82wENkNQd7q9PKrrmQi5xbpArYWpsCtu5Jg99GpcW56v9qppJUsbMeUDY8PwPqv2nshBrw5wqKyuFr",
  "key37": "2s6zFRYFybsYa75enE54RSKoxBmCTxo9QzSUEwXziCMCXgkVJZoUGrPAFVyBZnaq3mjLsqRUVtkR4d8oPrrgFSH9",
  "key38": "5NYwQjuqMrpWHDjL5pknxVAPVBjrsMVncwCEX8htwAajX11NZwxgB75MCMNTtdxiJm3NktzLGiYA8bahv5u8bxGU",
  "key39": "3XmAoC3ff3Ef7pMYV2r3wmoZqcUvNskdXfkuCC4KoFz6HXmsbJqAiZqUiwAXn5Wd5jTtF8sEUFWcTUqKeCNqWhm5",
  "key40": "42NTLyQaRPC9JDWHSA4KX4Mg98WtZNLnTotcah1fgbKMWez5fn3rmURi8Mk9zMA7V8JuXQ52wx3rAAvvJyYqQ9yX",
  "key41": "2jxvuqoBgcPH99aLcGZSUqAgFbHQNTFBoKF8KX5NJp9GBKHZxXgnXHckZQca3FNsrx5CkidSwzEStYTR6y4Ej9wd",
  "key42": "jms6XgxsBRrvo2BKYpvo2msDtvBU1st8yPdWSzrhLfvBqJVoSNAQPsrGjprLU5F1hjSjdZPhcU4fA1Q26MBPz91",
  "key43": "2p7s1DRL9pP7zKWy3f2MFKCdB9dbuh6mm7fJKdxAiyNbY9qXwv1rmLugRc5aaCssfCjGiku6Z6QWdp2q5z8L8MNq",
  "key44": "8Aqk5NRkB1vR9KBZtHWUD5PaAs3AAFrQUsqxfSN6JrQDEP8LVC7rpcfVupYuonyqGw1Li36up1CPTuoAcEwXvVe",
  "key45": "4rz3SaWKHHu5AZv7Z1CwGMZM1148nWUWbytNzJivZS8vW992roKLd5LQ7kuRzzfsvWXQ2CD8qhGwrKPNjmmiU2pZ",
  "key46": "4qwmukdwfWHEpn71B3oXHf1pfzLVjCZT8vWHysHqnaNpwfgPMt4fnZS1NphCs4DbvcDfcCrWXnmPZTk51JeZCPM1"
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
