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
    "2agHSsCevb78g7jHenUTLv7g5Ux7vUBehBtBjSHgkkoh8tcExoCrSfKvksdwWvfHBxkDRJS2TroWJB6jbm9yxqrs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aJKgwxcZxH89JCjz1gUJG1PBMqizxZJJxWHwjVpST72JaFJrJ9ukmKefeYPUE8pW1cufuL5cmL83J4cduBeLVEq",
  "key1": "64sahZA6orMnYq5wjwBmT79YUP8uMwh7C6Cj17xxNWA2fcSFQPbu4po7dtgZrsN3Le4hCPPkUyw7qnfAWfPi2cnr",
  "key2": "457Gpofc8NyXYrEuKnA1FHQAwGfCR8dT2irqfLUxNWsR4WUghms6BnWi8AmPxW4bBuXSUQaW7LTrqegzaqt46Pgu",
  "key3": "B1M724ZzPaXPwna1bHNerko2a9CQCPUcUMaaq9C8tPZJfDFMV683V43i34XEZAfes8PDyNdcfY3e4d5b89rSa6X",
  "key4": "4HjTraHXEb6dVDCN8pPCq35oVv8NMdoi6DBbfyQvscBjZZYUGZq4VgEdDerP1iWg48A32WHMABVGVGwfkA9k5Q7X",
  "key5": "238LxW4avNPmqXkcJg9xj1VUdyXD8GG6gsL4ET7PeWojavTUENn8rUC8krogxN5LF1TmScpiiJirGVZ4LGBvoLx1",
  "key6": "2ec3YZy3ZWqgX2Mhcsd12xmyVVF4nGUSEsjmvxpdU8r5GjkoYX4DSZR4buxH18jbVHNVgf9s199BYRvsrqvyXqdC",
  "key7": "2uAh2VREfr3JD3AVebtCDmgFSbC9NFD62tDK1ejvjezCpAQSSLnr75jC8KqdeDJJWjtnwAB9HNaoiBm2BS5JEfYP",
  "key8": "5bqimeV3UM62E5131aDmMjjUFxhd2BKPxKNuUW8TMmPtQHcEr3kvPr6rhrNGPfnYjt9SPWordXPUE8JQXeTwgz5a",
  "key9": "28hydQ3Eu5r2cPgVpDUsawJWwfhns4yPn5wGhH6eBHEDPqkCLjetoGtVZxefazaS1Bim2NPR678hbWZPQVGhYXRj",
  "key10": "W55ScgZnvp4xf5kUiJEWnbjvBR5KgBnNEpa1s5LkYqkF9kngEADdCSDo34fvYg5FzguW3Fs8MxywBzPuAG7rYKe",
  "key11": "2oah5LA2nYyLxFGsgFvZWc7CGYmDjKfZTMRj3U8NXWiBg4Ug1KMrLsZvJoyLyHrzeqwpUUmWXxRCt4VzkY7K2xCN",
  "key12": "keW1TUk7oAcjq6hD1Ad4wXY2qgpYgWDTrmg4LXL8dTcJJMuMZPkyH4aTZqJpm62zZvSCivZD7gJaHCRHpH876Ar",
  "key13": "2MZb32xYfTzgRYTmtmvjJB75a1n776NTT5kLUiZg3BFirXPL7yYap11xdYi2qJvmy4cQc7fQcAvZPLD3c6GdGk2V",
  "key14": "wB3jW5j9YMm1PnXRcbwcF8GyF3PTcoLPQ757kogRMHMvMU9uF628SLmSpAg3LvnUx5H2EKXs8sjnjYNsquuaMej",
  "key15": "3v1VSSy59uYzddK1rxpp6PXc5HMzmLKQWh6PnU4gpsAVZKQ9aT7TUgbbRU9LPJtb7ptDX7qsuWdQ4gDq9By4eXWQ",
  "key16": "4ibc1RzLbyQZwC1LZsQtaHJWZoTngu6CbGV7GXUBCEAVTA2RW1u34hwdKkaUyke17isT1qNhLV8nydSaVVfA6dJW",
  "key17": "54V1kqHqX82UfeWunbpXux867pXbQ9DhtvyqqBGsJLrgoBAHdB2P18uGbZGG982Vuntx81nPxMTtd3CKN39gH4hp",
  "key18": "5mwo92hocF4MZEe2cfxSvCxQGqDNKufR2mgfhoGY7HKCDhXNMAVoSTmL9xSAss3DYi7PDuLBAsqh9tJLtTrsqAbR",
  "key19": "7m7LVgEfhdu3QyizB7NXGKytxY23gd7Pmnj5XwUbDAnYLNdjg5CHFVM82xL4h3cuTGxpzUntmZb7dgeGZ3QZGpN",
  "key20": "5ZvBV14KnDn2LnYt1AMYj2GqfxLkrt7BWKNbc7SVWWrAF6At5Vv6fmoJii8bK14Gn63y5Nj4RNquR59TmXWdsEdH",
  "key21": "fx3Ui4FdNqywH7npryXHioDEyDLpcHd56B1qQ9rB2DvqMxdqVdHYSKrMhwkZgtpPLEyVEUJHuYe6zdAtfgbvnEg",
  "key22": "LUnc5gmQ14oZemP6vt6p4T8EjUJmQEnh3s6WMzVPVVhRGc581PmPqVJ1K4qxmMD2MwCL67LcFpT7L9d2wpGiytk",
  "key23": "4HALCoxKfHSwSkzSzgMqiHKTjdEWRbCK5kGCA4tYTTAPJ9nF1uib3LqLyEk7eL7H5XVpUx1yQWomL4dcCb8NtLRf",
  "key24": "3yADjVct3pBRvE6iwNdQMyzyAs1GJ4i54UjBBNdrVzTXoR6UxivYt2RqMLy1L6HxdNG5N5Fir9goSWozNMccSBwU",
  "key25": "66UhZYAdHfJMtrkGgZh8AB1SRgNAwCo9js3bM5vxMd7vx3mDi3Wi3a26oHaWeWkSUQcS8kFHKKkq3uUXoF8ZKqPU",
  "key26": "4wxXRrygL6niEpoBy81n8q4JRHzhpskV26zVYQY7qq7QbU93yoyeP7ofmmo9B2i2iCJi7C5PEsK9v3EDmQ9TpJib",
  "key27": "3eitim72VGShCtHfQXoY1DauyUQkNY12xLqAaYoSWTQ3ZiAUSpoqXHxMSqY61sxjLJKGKQythKvX88yMvqHfY6pC",
  "key28": "4u614sX3KJY81jwCajaLtDPP8tK84W5J1Z5UrzjT1ky85X4FXSwKPKR6mVUBab7FnnoR75kSg87acqyqVgKyKVyW",
  "key29": "5v5cc2ufKjfnGTntaDKbZgJiGVrxW7cK2YSXmfmmyZGdKWcAqqFETz17D3zbQBusgGGBDZKLsUyY6Qr2X7TDToLP",
  "key30": "RTz1D8XLaQVJmDWja4D8ZhEkJXBzeET4Qa58SUsaF42VRcTTkobmhyKc1THaUMWDemBrEDKRAi1jE5T2nhNgws7",
  "key31": "45PQyyDWg9ZXveAAA3ciFNcWGTjoffWRXCxLpN2qoVAP8mKyoEW3qwMJGywwrRHUtbnw2cE7JXrozHTUtP2UWu6D",
  "key32": "4XTm7UvvikYXCLHVDcueHXESoRcN9mUfENickmbnUFAWC28nAbUZKoE6v5hmpoBhjtssnZFe2XuEca4eoa7som7R",
  "key33": "5bd5wsF3sGAwJh6gKh9LEgC6B7rir5c6gNh4zS7TZtk4GDRQNQzhSj2ia2QZFcowfkdoiN25oDPYhmE9qHhAwCX4",
  "key34": "2F7t6aiXNaae15gXQgPWjNChNSzdKro8dpMEqYRJv8Bgr1joDtdhfL7kEpPmFrLJDGGqako4GVV1MVfQZv54CvMn",
  "key35": "5iqkLt6YpBVcffLYQJQF3tBiEvhT74S3CyGykAQ8BTdAWaGrrDHydtumBHZsiAo9pwJVzw2m2A82LC1oJoiHUYXv",
  "key36": "3xS6H9mQeK3tJW3ocPCk52Yym9JpmyTpgZWDYVMSnR4vf48PnFGBVcT8baDxCPYQNrNYzf6etAL6LwtmbuVH2Cee",
  "key37": "67N4wCnNTyLXnXGNt1j9b9x4gvZ6XEdY7DrjTwMvgpM3xYx6snie9WbQSnUDQZY6LudaXQ7hAiKewMxvNaGD2Bdy",
  "key38": "4Cf2Guq2qXiEcF5oqdX3AF45NMueke4VDQHLyaPrG6W9fuzieUvEX7edDhsXqyN3qZwKncDTrMiBaReWf9WqpXi",
  "key39": "5wFRogvA9VBUcx1FTtLHt1ZdSMUQzyLpixA7wgpV2cPcaXr5ze8fzPfWbMKSvPyqt49H8c6pucvV27sxnZGx6LUy",
  "key40": "dH8mQdiAKb1dqqg19viZDdL6nThpXbJs8oJSVQ6cdwZprVmJP7XyN9jcDrGZUoprhhhJF3Godo5a8s3gniiyb1W",
  "key41": "3oFRT6JnttJaiW7u5Zgs8fMjJUB3uEpi8ZrPkoCNHmiZkbBZGg9yXNt7JqB7gcoWEzffJ8cAWf65TbgvB6XZk9Hr",
  "key42": "2wqqGFrz7RqvyMt9myzm4t4tKaL2SPWYpXXvw2HB2YSRC47R4Br3byWPSYWfKjzZsPHxpZHt1gtPD16xab6EFLn8",
  "key43": "51m2euMDygnvEzD9GZRm6DPreJPHH8V4EUX5WCiUNBvoYZPoT6xhhKws8R7aV49VSi6FmU6gpnLWuXBSVLMyCvFP",
  "key44": "4gnRdQX1zX1RpDv5n3eKvMsXikoF2s7p7SBh12tMr8n92CcQruen2Jn3ZvCAxCNiUVguSEJAkyt26WPZobV6GnWe"
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
