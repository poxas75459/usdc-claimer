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
    "5SatyTT14Vk3Qr1Gxb7ty8x5TVR5Jv5g7AMQ28McNJLQXtAg3tY8gGAoFRqknc3kF2ox6yERLDxpWUViRMKAVpaD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RgAp83LGKZwpSZ54r3jaJYsarASf7XNS3Uoixbe1Fj5HJJH2Doue1r9dxXt6Gm5RSNe5CRwZrT1VPyM4mfifEmD",
  "key1": "4ayt9EBSRCQPRQS9kttmbhdLfUF7KujFUajg2VDACeUWdqse42x1GMmbn8tTpD4GCWDw3XSeL97RTHeSmpAK5mr8",
  "key2": "3rcyEXWmcCZT63FASCnFQuYixrzyMAA7B11XeFWXxYqRK4USY7h5KDKGHrCinzTiM95UAGXVxZ7aasLhdNgb7m92",
  "key3": "3Vm6ERn5WpyiihmoxJG4pE3ze5hvQjbbBLNvDGSwtRXJemetp8PiVdsPp4nmcAYw95mjGJPFTkKQ87j9ndcHbaq9",
  "key4": "jrkN8NThBqWCCDYHqXDbqfA2MVAnnbtmXQDrjCVroL6Fu2WweB2F5MWfmuiD4fkznNVfuCXPHNVVWuJaNU1hc41",
  "key5": "5A1K57GeeuPpvbaQWULhQMuyDkSmERJAG8C26nysfcBJbuBacFetwrVrL2zKCJgc22AgtarLQXJVfDmeYWQ4mShK",
  "key6": "3nLxmntqTmWGomCz5WZb5gFG5qCmWGBSm1FACEihazeSnVBdA6KgqECedhu4RzXaY49FTeymUTxbHWNYm543uCnA",
  "key7": "cLCWgc2z6xtqtDwKnUtPvUJFM95vRFF9ADgTL9zs6QBRbuPorKSiJJynEK2tqUHmSErWcx3eS4RQ2essdtPvCwW",
  "key8": "3nCCrFAwnhCLmD7oqu1ZAUvH9xiUE8JPfqdrmb3bSLQg9MRZDqSHhCgdi6Zr6tpu28xWFg8EtbACNmdziHWokxW",
  "key9": "5jTotimsVYik1mEP3uSipnmeXWR4UrGnUmmkvcqevHm38qGH73mxrDmumC2viaTv2XnVmW469G4EYxRMJcH85bKC",
  "key10": "2fB6Gic2wYLA4zibwarH4G6LanJsqUzmeTzVmg9cqyssm7yR1f5HZVCkbnLszADGWsydXHci2vKdiewCdBpvUXUs",
  "key11": "4y8QUWjKz6YRPsJYeryrEecuFGd3Fjz7N4sfNitQioRdLFJp9wmGBuQLjP64tYWA1kBMNfB7k3bJD6kqkJbwwvDf",
  "key12": "5iGd82VjGZS6eJhR5ui2z2Y4TvjBxBiXoKjMDYS2MEybWXzwE4hjcxzyZf1iN7XyR2RJKvcg11X7kSsq3oBMjWGp",
  "key13": "2BirXaujZcwV2jLburFh9hfUYDAdSVQDmNyjpTigMaqAvrUdbcV5XSej1qv5teQ3pxag2PgzxWMSCEoFhdtgs4VX",
  "key14": "361WaEsBsdskwzaBVFQnWhs979CdzujHxYwVpHXBFMRZtTHLEc1u5UYPznip8snQQQJYBbvSwZbsEVJDSJ5Hbbek",
  "key15": "3CGiNPxh1fytyZwh41rxLLvBeLkGYLJWo6XQti9YQn1bg6dCz56kxiP6uDp9A41H3KSBBs7spHGA4kJJFEn3is8c",
  "key16": "2KpcSkBQLPZur3CLVAw6JvA6rPeVZ2fmsafvpGx5vBw21CuJMUGEGR3EQqsVNjU5n2dtgGCjMEj972ZFXTwuirei",
  "key17": "4CPiA9Z4sos3PC4L2HPUdcmSBLjgmwjABgMaj4wGcaWBrGPNb4HkBqqvmX2AoPrjN1GFXyze5YEFegpFnT34yKD8",
  "key18": "2tnVDYzTZEuQbj21k34zYLpHGeEqDtCmu1cpp2b9GCh5PfqsVboatoNbiEqZEyVPtueY7HDezkz6QDqQg2qW2vRx",
  "key19": "4hKWUQws3ynh5LawVXFY4w99FosgqRzpWBsyMp55JAAbZkYDCS6BMoH5GvDiMakfgyrTwSjhXmoD59DuLHipBnjJ",
  "key20": "48rUxaKytd8o41wx1am6xeCW4QCcuQ1qso3Gn6AiEZDu8BzuaV5EytMhaGrG7emadv3aaT1B9yWtiogvGqyDSkXG",
  "key21": "3Cdo4UqrC4cQMS5NxMv5jt6dbmyLzH7jdh1BrBYu5Qyrvh3rnWQyuvt3jupdHe6Zgm9CumswC7VZrh3DTtgJVQZ5",
  "key22": "2B13FBVDXqNZUQXG8Hza4DCM2mLWeXHMDGFV7GTuCdtd7jPwN5D298NfkpBfmque4NK4iJWFH6i5rWx67fAgy4ih",
  "key23": "V41Pyi7Nm668PgbLnJki6ujuRHyUwpkeQ9k37N3UQMaupKpPn6cmxqYiHN25qihA6CmVxcTogWvW579Kd57Dwfk",
  "key24": "2tLdK6j6N76hdrTPKtwh4UPNzGycrDaYKMDYBWu3SN151UBnT5rQhP1jvwLbWiWzniC2awbbRD81fJSDV6o1bDzi",
  "key25": "2TcHgWiQHuQSxd9UWkmzPg3P5sDrGaXeFw9iQyABTqR5M5JDYJEm8atmbZdMXyPEc2fjBnadBHpuj6SUgbKDp66k",
  "key26": "4ttK1MFC9ZWM7BhrDsoNkubHjjVtB49s6qNznxihXfhgSLZ7LCXyCbMc31GYpSt69cJW7TyWRY3QTSZZwF6TNBSf",
  "key27": "AKRWdwxYMcDBDkt3taGeja8b72HDNH9xp2sEBzJ1pe2cBqS6uSrdhmazTSGf8T71SMA8AGpMhYXBvJ31HH4Eh5m",
  "key28": "xZjmrvHERFeCCr1k531y48UUur8c295HfiK6f7E4fod3ob3u7HLcAzSNJtcoJV3rMrtkZnS9Xg9sJaBbutHCgXH",
  "key29": "5G3DzGJR52Abie9v2ZwZ4z1EK94y8RMaztFf6UN8t6MWb5DQL1kUW1QsQtHphqqw6bKmcYNQ2yQkCUVZCgqawLhB",
  "key30": "2hqqg1jTBZwJhhyKJVRXFiUMnE6X5PD7HpbQMKtiEciZJWWELX59KJyAnbPV3XoxjEa6T9RBMQEWaZhDUP5qxykM",
  "key31": "AP6w1zREPcrmrx7orBkCzZjeZqPH7Bu4YQcg4QWm18RyGeYCStRw8adduskDGFQRXw3SPmw7jvEAhHAezxhsBBd",
  "key32": "51HURpeqciPbEphz4DbEm3kdPQqSnajTHT6eu9ZTwkXauBe93BGjYNAn9ejVNiSLgTKmQY8qdqkgCWatGcVpFHUy",
  "key33": "5atURcmiHixyKYXsToR6Bduakq56bBUyCParR1MJ9uhZvBPBGeTLv2zpE5gTWZi9scJX9ZNfrHfwfMGoFkeVdJ87",
  "key34": "122zU5iqcSeaWM3ir4mSyQMfRwWqusxpevd4pt2sJVcx47XiahzkCMzZ4PYQMgPz3kD9Lbs9YLuKZdxd2NeN6khV",
  "key35": "4643HiSCM9VoyRKJWMNrLEQc2ZV8cSrufu7MVV3cvXwPKc8k5jRrp419r2azY2Bat9BxqnogCqPQNpzrNvSXtMEM"
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
