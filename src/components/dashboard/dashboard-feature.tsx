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
    "5PxxYMjP9AAJxxCoJeC86F2zLpD26nm9TZGTMSYnEDAvSw5cSocT7XreSVSFBp7MCF4MFBjcGcf94ga4JxXfcdrU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36NHD4gi61sgqL3psxrj7E7BoLfJ1YFd9Et8YcRvdsdBk7AGxa28CVbmcxxQmjtQNZt8c422o3AzmUNya2AbTZNJ",
  "key1": "4YTLjLHSwMAucpgVAdHRNJr2Dc9h5k9A75dkaHgt3z4wF4Y2ggeS4H5ZWdo1SLqWTM1uGCguZUHrx5w7uGzVBvEt",
  "key2": "3Z9F2Me3czeyJDcEfu8ME4fPJLzhmuoZRdAWLUb6dLfEx8gXqYDreJ2P2adsA5AA9APruUF2MSDMxobVfRX4DSp3",
  "key3": "4eQJxFrWnuMij7r2zUjS1KTYMiNzgnRr6eD18H6TWebjn2pUdLYiWaq666i9nV5pmdMgvW951SrqP17MmDuTE7LS",
  "key4": "VHCdp6d3g9ijKLMG4ciFmCyAXpDmURmiC49ZGXhg97rZhE9dH6zgHe2EAP91DbvDQ7ZJywn6DerbQgidTWDR7Ln",
  "key5": "3zec6CuC5V7wwpMknf7WycSyU8yWo4wK3iaYhbeWB28ECL4omK83S164zia7qjWxT9VpqY1CM39r8JiUKYcxwwYU",
  "key6": "3rwLqcWeHv6P2pd1UHLcUTsgnvJNT9qTgasH5av6CqiTbrwcgrgoHd8pZvwtHsTpzJJz3CVBoDKifxxVuUpwhy9g",
  "key7": "Y3RfNkhA1DpCeLS5o5gVS2HkJ3k9tyEsgPsYR9XmeDsNoVX8hTE8ZhnEzCL2kASReTQNxrybzjp7bad6Mwi5jS1",
  "key8": "KrS1WmMyQuB8c1YE8XUfJwjn2NtRLd2WWn6dbm2LxV3xi6aB3BJA7zp8mpo5FZCwyDWtT1JG6L9hLPtGEYVDx77",
  "key9": "51JiibcQ7BjVFX7oph31VGXGRYvg16FZw7u7CBCnGGoYGofzeq7337ZCMW3xuVsDX1xZH7EU8jp12JSDWpGbe7wn",
  "key10": "4o4K2RZ3EgNCiLVJucthh5YCrmJfXtbKTygQarLxbH3kNTYk4DUu4fojALDYb3RX2h6U1kVdkSc7oHPsCRnDABvs",
  "key11": "Dr8etgBRg9wFJgTZws7LdJ8HKJjhN7artVgZJCKai3JDLnj79M2dBfCYz5uq4Tm9RRarDZSYutnqvXt3cqx77SK",
  "key12": "2C8Kw7qka9B3pGicBdW9CpFQ4pNG7d8xAaASCrzduShksLi49MYrdE2txsGx2FG4hJcXCGK28Fwsyqhnng7P28kG",
  "key13": "5quUYG4uXC8JRFWSyJdqy2CPc75Rofjbvan2abXFmAdPmBrE1Ka2MgsobNgxAJ914Wvu6Uzn18MA1xYpwPyDGPAV",
  "key14": "4Bbu3h4Qkg2Fp7NFoHuJP3oVVJckB5Kat715JowbKGtAoGTMgHie13FyBspvuRKGjyRRAQNKQrtXHJuLyfCfKF7f",
  "key15": "3iudxqsTAfDdss1naQTrHnPBwHZb4aGhbbiBHXDTeVaKFbtnaekhR96qDvNrVsFv8hxePBpfEFKfbaNX2QjZkGDk",
  "key16": "4Ar2i97tfpJSy2hAv2ZqE6wbNj2UDpLM99qnDzn6winSDz6LPU6v4scHpbSPhyreAYoanFxxXxWK9vtwwH2RvXpm",
  "key17": "5tKtH4hTY3rddb76dckq1ZVvw1k9UEUuE2EYoEB1VnVPE93yt3kSgizjJepCjCQczjZq1jiudUHWB1X22FgybJ7s",
  "key18": "2ht4awFstSXqkbj4spwXJkstTf3kZ5HRBBspUYCrydJ3f1AxxYmzq4tvGYDkf88wCokb6TfLH9dfqdqpUSeMCE1M",
  "key19": "3NHEJ1WBDRv13GxZ6UhFTBUsbznXYuRxxkFGupuiJYt2NMoSiUDf4ddwGQ9VacFGshMLcztrXYC5njuTjYyzZtFC",
  "key20": "9YZDwbeoANUwzsqUcwTbxDSC6KP7jUTyHS5adrb3o3KpPE1poMfkJVu7awgkGg3hG4zv8Kygnr4rnVNDusZDNMC",
  "key21": "2vMJuhxMnssKuVBv4hN2tDjB1wcPVJ1x8y4aoNTAjijRsujzBPjTyCkksiRNay3ZAfQXPm2iDRJg5PH4dRNT9Byu",
  "key22": "5YBSt6x4iRU3mve3f4a6JQgbaNzZHzdWkgUXzEbRJ6UZKgg8rpWb2tCJytZMKmSYa6hNxaPzb7pb8V61JSWgTMZW",
  "key23": "2HNDPk5YvzWB79uQJuDeRU14qGa6nyyJyru1ZKUrJZ3esB9Kjyfzti6QjVSQbMyqhKh7pdgKdSHyYPZrA3V4usWB",
  "key24": "4f5fnpBiHiA7pjFS1GGtDdKV8LJA1xBdnrxSLzaWmbfau7e73TzB8HDVs3jSs5XuuiF9j6cbXdmCeUVz54hiv3QD",
  "key25": "4nnoSbuAEoFnsujPmk7kVx5M4rpKhK1a1Gf2TxNJy4v2bM1WRFmz3ZoXJF1dJCz3dpWAPPVkJu6NEn1iejLcGwpV",
  "key26": "4EVk5urVjWNXdRexyu9ev7CV6ugUAM4Au4UXLBbzb9A5pKL9MtBDh7LDMos392s3kLeQLmMerQrgAwnTHGqPLfHm",
  "key27": "2enumoWmW23f8xrTcLa7YJ51CKvQg4YG27zA7Y7vnf2SBJSifNEu53XqH1r1Eb1L8U8wCWkEGFr1VM8VxQtt2ss6",
  "key28": "3BxWPFE54oRoifjPiyrAZq48D3qorwgsbXLiNwMtwxmt2W5ThbYVV73MQQU4RrzpyFV2SaYHHZ6oxLyu3HBACcfS",
  "key29": "5LwKWPzGzXd7ur1RbPdV6m47jjcCzwd9wDqDnQsTzW1kKta9uj3Gn8NuMBdokTdtypw9vHUmbJVg8x1R3JNsinJx",
  "key30": "5ur9YsYUewM7gSv6y2p574zFN7nGPM1yUZsmGjxD1QhWs8fBMg1sFWyMSrGMFiAFoZGXUAoZ5Uogg4nnfX5Ej9qW",
  "key31": "3nAfNvycpeFz4hLPvkD1n4RuuGfVXoCpjWJqPcHZ1Fdsvsu4F7q8szz6eGuu6kgLEZVwqmHRoVWu5hQgoH2qd4Ft",
  "key32": "5TsqTsRF5RNQMc8fYPGwE2WtE5QsGXRm5KLfapdSTJe7VKyr1hfH1bKeE7tArDogioUfsnn6TDcs96zADmmtFubA",
  "key33": "2QX3VARNgwxKYtrdYN64rvm5RucYJSeuP6YXKzB6tqLDeXdy1MUvnA6viJWC9H4hVGJmvT4dUefe1f14iLL38JzC",
  "key34": "5T7HZ36EkfAGRabDro1ZfyvbVMyDfUNeQfBEJZzUzmX6GAC36i1eCE1Uvw3hv49v8WZ2hc6Bnius2Kykk4Co9DnN",
  "key35": "5BX9uZLBWcDG55dk7wEZvs5R86eYWMEKYD5BHyu2NiADJdEgfFHFsCymoyrE8s1bSkh96SjkeHfRR1yEoXtMybHL",
  "key36": "2YdFp5u49rgN36H6DWypSh59fkxtEQVNKDh6wDpxj93qr9DccY6rWgaUKK1Ghbu6JhwNkJbGM1TxvCgYDYc2Y6qG",
  "key37": "4Chsd9eVyXFcebFwmHajTYM35UKZN4SxhKjDRoRSBjofrJVqxVwMGsrAK1JV1Wdi15x8tSJ5xbreZMqhpoVb5NTb",
  "key38": "5nUXEYfw6F5ov6pyxhvfm826ANpanuiVGoXDKKK3yP4GNhLBpnTww8T1tJ35vkvRy8QBEkkeXavpY2yvkjdHrBgm",
  "key39": "4FzUcAR8sHhBn49kqAggWPKQLweiwQJ8zi9xMizMLvzgWhf2z4NNkatV1o6TZHKzcM4f37TCSU4GPD8BokfV2J5d",
  "key40": "unbUipapBAdTYKJCS36UdGFcsfSb2sxrkLhq3oVidxnWsLNQgX9LPpCjw58EgEH8JQ6VcxRHta5RRtPUKfRqSkU",
  "key41": "MDjuaKWgQ2RCMXMvop4XkeZPiEgxmoUwAvW2CrYfeR3juThX63zbvMgmWX7NRNQ4BErDisLqiyZnrx3mYKUhzUr"
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
