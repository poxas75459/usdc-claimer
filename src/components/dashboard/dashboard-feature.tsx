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
    "3pUFD3hkcq8f9bmdS2SvsUxY9g5dF4Y7pk9qmnmRM4zPwKJzK6QJzfgkWcCSxyKxnQmVpHdKCYuzYx9Le5ZP8BMW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QF7it8ygrt4gMVV1Yt3AzQx5X8hNmYGbgwddoZHaqjVMN5pnSgXhPHan8xYmTkwEvdWGA1NJPHSFNyyGNo5ZLHj",
  "key1": "2X13gY5y19yZvUZ3y7oJ2JdbJtSu3rJ5WdGCKKfFo2USnB1DQSfJX92LQWcKPSotxWEjGiHscU7gsSDR5yVMN138",
  "key2": "YnBuvqUji45hYvMdYZeMW6J3dJ3iK8o1xkay3JNUmXnLvF9Rek4htBCU6RpgFfgLXBLTQ6NDfPKPR7iZVvUBV39",
  "key3": "4LQFJKWQ64FHUjMoiKjLTM4385w43rHRjnkANn98vBMvamxKZZnXYtw2GTxmDZHwndvJXAX5XmzH5jUzGbk1HU4A",
  "key4": "4T9qnNPYhemJTbxU6th9X1DPoc1DJDv5p2Tb2uS5T6N9bru4PrtX1V8MPyqCbrKxHXqkGXb13JW4wAVqLxxZx5ED",
  "key5": "5Rm1jvJAKGKerxjg5JGW3omGUYtCE8qSXjS8S5qR6QWQ6dU95ewSDhTiHQro3ap656vcmqmJC9J4gyxqKWfiZRR2",
  "key6": "Liiz73jr41zGvaPq2V85eUTTXbfFasshojNNVBng2Myowh99aAtFxHUoeZSpsQsxzpJay7uafLfzpGVddFqWtjY",
  "key7": "27pYvtyMte4ZVEwgDAHGwv7R8jVViWMVYnUJ4JM13aaU1jKEf5RqtGagFCU1AM9oFDCFjyeUkjoSuQXUMRzpx5VT",
  "key8": "4mxccGJsKCAvWxfuvSocNZPwGF8ixpME3ssUdxDzobaijSL4gDsVgWcx1sHAjAW1c7qFEZgWhcXZHPY4cs9aoqKX",
  "key9": "Exw6uQXaspQjeTJNe6msPkXbcfnFT8zMbGzmg3pgsSUQvALP9npD9GrqoWeSxBEmdHbGk6FpFZsDJ3NosH5nMek",
  "key10": "3yCykT8mT6WikspJuUfdgFozpcPKR9qUPFhtrAqauAcJVZsxfPPXiLeMU1VYYr3BV9vSydA8JBZfnWFvYd5397Lr",
  "key11": "43yvm1oe6LPvmmz7ppomJBHJY3jVi19Km2xNLPQD23QN7JX8dpr5hL4wPSFuwC4y6sktvERzLiturwaCU6Vdh9vL",
  "key12": "62iKU3CGEQzow8AM5BtFJeJ84j7qdPZ1rkJAzHnm9pFy7vss5D1PHqa1yJnQpbwR79eEDK2QSGmCRidFQG95Jx3a",
  "key13": "2ZEH2GWXciPBGjUtiBdrS5xDCyXuPzc8zFZqs29fh52nKUytuBVkXZhZeocMNwizX2pfWTKoGvZDhCfbsgWUpRGS",
  "key14": "632PTuJ72DKsNZ9wsSqGaZ5Svubz5P11ZSwHo3MxPwRQhSoRV3bn8VgSx762qzBoirfjgTqPNn9cah66To6NnU5o",
  "key15": "5E9Le7fLMGmWgJ43nhQ9fdHjqP9vBeGp1hPsrUVaEw2PXjYxdLDFYwBnqa1T4vfSE3wnS8EQwBed6VTNig7n2Xuc",
  "key16": "4jmCdz71ef3NfmxmPC7De36U3CajDiVLTPWmZT48N5FkohitEZSYcJ1Z1mqBvKBqWX14JRcsZQUSJ5SfuBJdNZuE",
  "key17": "4UDwzgZrFGUHsxWTjrPQonRMKXEGvh8T28zYPxsZB2NLomqv8pGTnR583pcExXNkZQ59sr1qgUQvNrpLE2kWzqnE",
  "key18": "vgrjuc5tDacdZ9eRPtfdRWobhqYdDwohDpoGDzf6fR3BA67iTuigGMt8t6TvdvBsHnfkptrRE9D4TsTBjSMV8W2",
  "key19": "39iJakwgFcS8PQDszNiYRh9wd16jjzcFZFdh4opximfYoXsAswUPR1pi5tGMhNoKBnCVaDqbuJozVWvyFYupFBj",
  "key20": "3epxcwx4SsG3uNJ9anJT1L5gip5JDc9wytwi3KbERVmLNBkZJ1mk9Hf3GyNp7f7iHYqcoKLNMotKN2XFo4yHo5WH",
  "key21": "dghfmzLoU4Qo8mkURsnrGrusfyL1KBhksSQGQsDcSF9EBr9VRMchxqgXkMbLhjJmz5Huej2fnsd4EvH75MaALkn",
  "key22": "3up3xRS4EWZ219MysGv2QG396VrUg2Wx32PU5nnenkvRLm1m9irKXP4xvifT4kn4muoQF6L6AueLg3ph1jzajESV",
  "key23": "SpHPC9hSTkBHC4ZRcGZEtUnSGW9xDmTbFpP5SBvbPNVzTSv646k73EXxbBYm1VVegQRE4Wi21mhr9UksW9bQocv",
  "key24": "5E7yN6cfRv8ByhcZRvMQJs3yAgDmSd6bNF1JMmSjdk54RebyJ2yr6DfynKUGRH3q2gXLvNedfM9oWeW2b8QAFDQN",
  "key25": "47JAqcsWULrmQ6j6hQAki5HCSbMRyogJYzwKoczg8b7zJb2F6opxovvPcoYDzECLthaDXc8wqda7TwyL1grYp2BF",
  "key26": "5iedpx8FeZCzNiEX5dX4Kqo2ujSSaYb5tyJAsET31TVqM8ejdGUYFA8zJ9944kYURjpFUMM2xpDixUQf2HR3cToV",
  "key27": "ZH9EssHZpkJqbzWKpMcADKmx3pc1Z29qmwt85hvf88GYPSffGCdf3HnMv1jJf7Y8sFJED6snPiu6KP5eswmdYf6",
  "key28": "419r5bTRBzXho4jZRhwYufybfdeFfPTgmTNtq336r9GnVXxLnGaX6LLTeDpNCLMgvKvJN2bdBs3Fk92wvnJNuxwc",
  "key29": "4xBUrgAnrVzb5FTak6KZzUZN2tq8nEzPccQ17nS2gZdBqABn6Cu7PnoSzy3KjLYczUepmLpQwehc4dNMCADDKL3v",
  "key30": "5iKAqCNeCXjBVATZnCbUwEwgWSDiL6hnBDjKqFFZBdJKizeBe22ehWtDJCEBvdAcYX7GreDg6LE6G75AvFHHxSNP",
  "key31": "4DjhvvNDxM3NoEfwZTPrz2wgKjSDfQyPtrvw9mDSj2Z7Gs9H8oYmfBTPutMFckNMG9gjA3XYL3TopCeraEyZ49Dn",
  "key32": "5A4QmC6s2EJS2C2tCwwycm9aBKCEMErqyT4qHLRf95zqWsq6c3jgdnWBweNKQKwKzsmNmjQbR6ot2cH3zissVGho",
  "key33": "5SBUKxFoXRqR3unjuzJnGRxH38FpxTXkMgZ9xdeezJBYNoop2N3BrsHGao38ANeL1bBSQmz9pD6WDqQ2nEtA4gdn",
  "key34": "M5qGsxj1GiZbBWdD1tvuCPrMozTkPcMCZoWvHAu24i1s1DupNgHzEJJf3EkLCp5XMYv3TvrfBArSdDbTc53K8tT",
  "key35": "5VoLKqvXBov231hsjG4rywvNaLKLqKythtrzMkWFy78MAdK4qxi27aYEwX6MYQVDbD11uK5riSDrPd12qCbEuY52",
  "key36": "43p2VqA6D27teTNfccjvSgy4hJVtBdkm2AMQA7hafa6kroJ6bopTavKpHJehqADqo986Z8SSinRwbLcban2zvagP",
  "key37": "4kXdVazQzA5WYq4hM4n7eeLeFHownZE2RNaThb47Y88yhj3vrichnnCcfYz8pozPJ7yqAaFyU8GWsUiNVSCaFwC",
  "key38": "4GNx3fh7Yo1CN7vJMP5Vt4i2KDVXYL8p9sf6GWcAvqvEYFunsCRqLJm8Rre3gNbYJJBcuuAYxGidNYXSUXP3cxZT",
  "key39": "5tTatE2bUMfvbV87JWMwT7eZSJdUcHfXQXCn1X51h34Ne3iwuTACqzeb8XpoVfMg2vykeP4paLe9bY8mGRtk1eQp",
  "key40": "pHamShEUqHtL9h1vqbjK6b2mcEN7moej4fMHRhvtZercgdsuxAHPNWJP7YPnErvvt93cAyvEfAUFVzxhDWRdxAU",
  "key41": "5HWDDf4JiNg1KNDr7pfCCmueCQrwwhTmbcGvbH1yQNs6j8majjbJ1XQ6ge58jpQZLP9dr9wN1qJhMDR19h8jf2oS",
  "key42": "5do6LAbzackqu6waaRJyp4oK3kxWNYGezoA5LLAFKMWTvYJJ4x2EbzDXoQa5VdBGDAjq2gEK7QUrZVeg1AGaowv6",
  "key43": "3z21q4G1c7F3caoH1PhfDKSYhZuD9VLVz6q9ZWRtxdYErkhvsaA5BRHX9CSpBqxLLDd6MirmXcDFDbfGCZbWcPHw",
  "key44": "4RKBbL212rBL1sEiRVGS6L91U9fGTDSgWgME9QTneSv9S8fAeb73Ldo4PhbFASmU8r8ywuCHF95zWVTPCkZMbHtf",
  "key45": "3BH5xi1tyTUX5Y8eFur3mxcv8a6zVAC5boCUSYZoaXoo9v5YUBanofQyXtcR3DuYTHa338Ta9W8cERcm9SDP1dNw",
  "key46": "2y8hSPTvFzE79BZVYH9wC3wQaUeZgyWXaXxoWhpPUBQSkivTfktHZLZ2kCeMDhhiVwHwNaHMXTXpMTUcVcXmrbXj"
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
