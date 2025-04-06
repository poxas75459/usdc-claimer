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
    "4Q78A5xhYuYDniBaCaktfTkabHrF12mggb8Q3379HvjA9zkDBB8SqtCuwewvbRDEDpFRmdA3G8VrBq5iqgvRpGHS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Sb4irGPo5xshTLAK5gPEvJyZrZBmnRB7rTWN7g19Ndmgt2Zibw9P93nxmXb6aCiaZpBv3eHtwWT3kUp3GbQctE3",
  "key1": "2c7hKkAYTvut69oy69YKJpfMjv3NUya2wJy63oiypUUMoL8Lj8dNN917a58LMBwbk5Y55JYzSGsEai779dXA6MgB",
  "key2": "4pfHtvAihtFbWs6cUabC2oh9exQQnkzZfDWHxwAB1yRL28wAGX5Kc3EqgsRpvRABu2TsoGZ1NpJNpcAKZ9UGmyDq",
  "key3": "pUbPhMsB1ZqEFM8ytnEd2okQdbyjtyDyg8zLMrEpCjABdwZLVc9hT9q9XvBSHh48Zb2Bt2DLfacdpe1KgXubFrk",
  "key4": "6z6nHkwUJ8PQ7Xr59dZQpEFQ6512yqLYGuwqet1afggZN3n2ts7WXSaTDJh1M5SC2PDCTMVjGvje4eVcghX55Q7",
  "key5": "4rszgAGFd8RBvXCrSjuSx72MN9kJ3mZVWcBQ5r6qziDcEFtYpBC4bJ4sjmjJMBuDubPpxEkstEtpKHESdG2Yiywr",
  "key6": "5EvHxUk9ioWS1zfQYr6igVNas19xnaVGKM63oXVq6FhkBRWTx6PLCYT3kiqXmLoDmQ8VAeNYXjZZqTkxSFxq3ML2",
  "key7": "3ip4udP3ZzwcX5nuPWuE49UD9xc7dAPF9YfuLYxyZXNDtuViWQpPdPgtnuk8sNjFKjTATVhpDjk6H9Z6nqR4oXeS",
  "key8": "3kzXn4FPjcMrnr7T4BSjr7EGCd962m1tVHeUrbhHzvFtKHrJV11thyTa5TXGGkzQVMnQAzYfiiqyL4hVQ5auPssv",
  "key9": "4P6ixN2fgdKcUXVmHr5YcUgkVp7QDHSz62J4PCfidag8dtVsHPrByqeYe1tHkvZa2UUsZ9yCrnEJaYK14g1dT2zH",
  "key10": "ubvChXUXLMZbtBqp3Cszydx7kpw8RWhUfCD7ZKn6PXaPmY6NeoxC9gvZXtPXNRC3asCZ9BQ2JrRWksBhsobnsQ6",
  "key11": "2UmKg7mfLG9co1STkeeLRQ1Q1wPweWrADATkibrEDSCUg3zn2BzVwESicFLoATifbbzfd2teB5s5kgCe7XmZ2eR3",
  "key12": "2EB6qAV85h9kXU1URzWm8GjtUbQNaf2jZbV1vnft1BvfMDZ3mZZZW67fhCsz9R4jvo63zeooug9MCzZudnEUgf93",
  "key13": "2bRVrcpyzSuy5ALUgznh71kbyLZNuFduXXJqiKUGFz9SUYQ4cmnPeZtdQUZ8L8m6VtMF69mPoV39Ww8mugX53jW",
  "key14": "pbbch56APD7qM82s1s8YVE6NVJRUU4HV2fYKJZSKQYBR599D4kxu6vKLFFiYY9hz85Gibk6Sfadv7U8MQ74uoWg",
  "key15": "2PYNvfVh6NineAz7fdm6Tgi9XmbNKBMzNeCEa6L3LVaSoF9Q5u5TjeULb8veDhsZk6166Zf4jdB9RV6JpWYca3jW",
  "key16": "4krydkohDYEPvxfnjLq9yJb6fd2gsnq9LxYjnBuFahEE3aXKCc22QmhEXxaSzXhNYWeVvkWh9RSRaJivPAZz3wcQ",
  "key17": "2GF4sxgDj2P9JL1oVQG2dJSxgx1VxxXabG1iMtSVBXr32TsB9HrfGykUUAZuwPBbohtGdy9KoMmZwpV7v278h5QK",
  "key18": "aV4ixjkDwCELYJoSDrWyKQknfcy4xVjgvSAaW8jKHKztZySQD4DWDMPq5jeSh5gSivEgzrgga2yLV7ZWf9LaNCD",
  "key19": "2Rfwmf3SRNsd1mq4wR7c1QnF1AoH8GdnJ5cjwhTKNHQw28PRSKvzDyJwgpNFk4VtvoNy3BHQGTx7aXdZCvxiknvJ",
  "key20": "5gEXdnqtEBUB2bTbW1hJLouT2BLn9Mc4DCHBDRwDTDjbsn5sFe1NWVXCCy2mYCEPFufkpqZ8RZfRKCFWEvDYpHD6",
  "key21": "2PmG1XQLM4TNhbYJt3DV7VSByXM5yVB3GwkBdatmAs3JM3fuAPYmhMKC5zyDzb59wPN8FCiTtNFh463E4WMPBQV1",
  "key22": "5wWH98aLA1cfAfk8fpJo1BtDt9x7GfQ9XyMZF2WmmjsWXXG9aDUQyQX2xg2qd3as2oayXN58nZmwuCKBUmbmZqTK",
  "key23": "3chtCvwb5ojVYTbfUS74YvW2KKJUhhy9PJKfjmrLbhMsRHsBJGuKxNNE9KTCakKhVph1ssFCJW4BHn5zWVGAf5uN",
  "key24": "5DNkwREuACAyAbQDXSo5m418V63TDatzwHAYmLfVJuusu5mcPVgP5gKAVPgP8MZhRJPYLniU9dqDMiMYN59X3d36",
  "key25": "2T3VgBP4NdiBGXkfjiYQPLg8RZGctN7JQEBHSornLpLBqsj38gcs2eLEi5yVd5W7H3Wk2CbWwAWR94XVFkQiaLtb",
  "key26": "b4NgYKca1cFYMZqFJnrZYTZC49dEbg3Wcu3EkkzykBSQh9t4R4b3hqwqFUdKAYfs1TUekPKAQf4gAj8W8kaYzWE",
  "key27": "5HEn8deLi5cbd1SEKc196mSjh7p2wQdRhyypDqyEMrXy256UVjkUrUeAaoqPq9PtTsXrZFKMeDrxpXipEU4qXe6x",
  "key28": "2pricrMoBn5qNXBbkXvL9DurT9jotpmgGMqaVYR4fPnCQGCHKAXUz2nMEpRhcPqeBt86ezEdvGMwzAXEmqcQ7sxF",
  "key29": "4SpRUKincoPoiZj2dEEPEmTpeEqQw81Tbn9iba6qcT47qmDaRDVd74WqpLqKwWpzjT2AHCcFaWXE5b6hTEPfcyqp",
  "key30": "xdtrABcm8GQMtHFVVrom4iXb4zbqYCLcMbjUcHBvtHJGFdDhT237Y9Ys9pTUxTPBKznVVopgyN4aDXKpV5aD8BT",
  "key31": "3EnSzjR75nkbWBi4tSMbCYSVTWka2srZbdtJg9bYfkXSXFi87fpfGZiRUtQbfRKTDiADCwiGD253ydEbUX4fkDfd",
  "key32": "4W7CxUsRAoSEpbrJF6BKENWF1AVwS5UYBiSRR1fAED8SqDNcjXPDvPRnR5wzUj6kPWFkYB7GQpJZpQ4kjRvKiV36",
  "key33": "LmktsaU4ukuu2RaNEKeiL9px7zsrvoaAuN9N1kVXNYp4uTR1M9Wdjh4cp9MDEDtfthDStssEo5WWwDLojtbvS9P",
  "key34": "3NRR1ax5omMqHSE6J6v9tcFDTDK5Eu5gaFR2zmqwHiFNFgrtA7y5CQhVkTKDawEfdkBXzaSwtbfLShkfyNXjniNz",
  "key35": "2MbarnR6cQ6xcsYy574d3zu9kBimL6Y5BwxusSaqPPeaxoZwAtY3vdPQeqiGJjEXnNzYLv5T7mhDKkfJ7cExVWma",
  "key36": "24xcCwV1eXJBnQJDEyFM5umv6qZePbs1TLp4wkwBD8HkqdzumGnMP3TUSW8144owAg9V1T3GCVwtSVvtmvCxLuYr",
  "key37": "4PA4tCTrXTTXVN2es7LoLgTT9U4v5b9xbyC3A5bAzGaTaQBf9fVimcdxk3zsDFhVytzPpAnjV9d5DEv3UPRu81Mt",
  "key38": "371L2niZTJiUs1ujv9zYbRn16LhxHfSJ5xkiKGZsWAdu1ssw8YrUyda5B2KRbuJ9cPbquEx64WMA1i5UxzfTTGLh",
  "key39": "6kCwWGiBLMQks9P3FpetCKb9mAPRGnTshNwo7StRCkCjYCsUpWsVKsXQ1PtwJ5JbZENvSLXgkZcn9heoNn9Ahin",
  "key40": "4wfr6Scg5NaskhUqEskhTzwJvj74raKkAh5sRUj16rWNpCayF14ZNnL4qFxzKZShDjFEhyLTBoV1QDnNARRZfPnd",
  "key41": "591yqbJbURjD2gLvpGjmN1Z6Zq9Y72Q3L6KeqhkQKKxnk6VGtxnQJmP5k4JQqefSSaAquMru273a2oXxXPiwPq88",
  "key42": "48VszitUBkcEoRRXQoSidQEnFY1GCnuZ4DTVhkXAh6hpJ3yVKKkZBmxgDvuTHfAD2HLYU8Fsm6vVbUj3xUmURqjZ",
  "key43": "67NAqFigmv4xZcnGHyRwHgbkjnWsq6HgJjxC5AkK3RjcxHXMvBzfzDibjdt82GDRZDegUsUdhT62GMv31uw8o6mW",
  "key44": "43t4QEef6xyzN6A2EJhg2X1nNTwaeAcwCizZ68pBxLY1YAqvePkGvoQWjk9M3VPZfCs1hyGB8aiYQgc37SJR9Z59",
  "key45": "4bMeK8NFkcMre4xrfu4R7qfMvXGTiAJ1aM5N4JUiK6amNnb4pmQYPDwfeK7avzsyuL8Ev4tnHZ1594aPgkESC2Ti",
  "key46": "4JBBBeEq6FJqmxYtrX5kk6qThUutx3d8aQsDyBAPLno7fy7KQ2WaeL7rcwpTPn9TKRvAqfyRQtGeGZNaVxw96Jxw",
  "key47": "2wNBjNEoYxU5BQrdo7hymJWRcGShS6izq2WzsJcA34agYRee3aND7bMQgimxBnMFtja5TKaR3pF2phPUHb3PpS4m"
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
