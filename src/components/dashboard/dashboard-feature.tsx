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
    "4L6G2A2L488i2BwRf7ER11Uot8rjLx2qWbhhZ2cJcE5SG4R2a9hSkTG95ZUzpu3HGBCLekmdqXG4ssiWNyqTKMBF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "315VWUyXNxkcJ3NwQGSvGWFm1cMguRH7Hq22q66imtN4Rocexkj1NbA7UApGWChpvU2g5ou9GGZAaibts76y5w6c",
  "key1": "3F73QsKqRPMUcYBFsekJK87qUcEhvHCw32KnvHKaSqz56SE1HkxpHqEdBXh6UVYVjwAVgsoAFDawZ2re3oJ3anRQ",
  "key2": "2exmqr4FLjqq9r8xMxzfNv6jajzhS4qh1C1N6p8TbK3w5GZByxEdmSSnVc7D3qdCij6jUransTQ9LiLz86HP44yg",
  "key3": "uiw7jxbP3tQhUtQ7kxzmYxRbP2fkWiCCH2Uku89qTvrpmtwupzMQW6cizm84tezFhcj284kysUtHaUiHFw55KxW",
  "key4": "sNNGDEAoJ2Fc7Z6b3m6JLqKnHZBXKdGBnUtwoR835z2aisXfyeRvHBLJYqthswWZBQ3SubVHfqhiz8Kydx4BNLh",
  "key5": "4LgSP79p88uUQd9qrzLb2j5Cin2rWZo2GpyzadMoFwT53Cxns6uQc7RgyGd3wQZXafUJqfG6hHCCn8KyNEVivCpa",
  "key6": "41CHrjVbtiVm5fmk4FYweETkPYP9Q8UpCN21FFykke28oiiqWr2Ej85daQbcsK35iYdmtpk5w6tovynafdz31AQn",
  "key7": "5FDVV6ScoyEh2n37MxMRavSmQpTYDwLkUxUjfki1AGR56Ae7yq6gpWfcBdh8dS6VdTxRVNUsvZQeisJsvktD4fnK",
  "key8": "26C3CpRzdNWny5CYAxynRDGwFU1b5Wp3T1issDvtkwL2dAZSExYjrsiQQFvRiBXVro4UMUddXAuLfsoS8PP21Bhj",
  "key9": "2yUjniKFxZfRQzw9uZjzgV7q858XttmAekoNL7G7fCayy61M4XtUTsCNDPJuAC7MvpTckiVw7iHwTQmATNnuqNkS",
  "key10": "4HpZrc5hBLcfn55UQKf6RZLMHstuBDHZ3ZZo6FeMyvwTppfExcZoQDwPFuC1n1SVujx8HzobENESMHidap4EUofi",
  "key11": "29WTrkynWgh53eYHtGFyneBq3YQxX7Dmdghq1i4Ki4KjSEzqQEtVkAN3snSXeLNHtkKVBgprVwdeMM1mUxhXwyB4",
  "key12": "3MNVsKjTW74qZXBnxD4Hg1LDmoZ8GsNS3Ygif5cuny4dZdN9KHX5Xf9PDkLtU17j8oHSh3WoiGVQYFUj6f85QrCV",
  "key13": "5z23kSqyaWMAUx53oGWr9GrFmVYf35qrkS5ehAFL184eGzHeLKGBqnKugKjxYCQSANy7E5CFKr4favtkG3KytXFG",
  "key14": "3YSAFQ4uWLGXpmC1T4KNBbMws3krfsL2nvNDzS8NXMRoxUZRmgiRwo1pekNkDjYNxZ2LbNkjbiTFqaCATqiF9yeu",
  "key15": "2EHCv8YqErrpqG7bcrra1A3ZiToqqRzvqZ9gFgfD8zfvWZVGe7ZWyVB3zvbrTzQBKhPzYAQgE2bkKosttrafXz8k",
  "key16": "6ecP7LsPBcxSBLKrazqN22C5BABr7LbE8CVzGEMLeeaaV3LFTa9kdS6pMNgSVL63MK4CEY9S61pHjUWUY1B3pZr",
  "key17": "31UAjLtMRXbwD5Pm27QHVbPc1pmg1kfKwo2ACuzxB59t4zw8Xk2cXmrhUfN4C7Ai9pugN8vrfbP3yfUNRaQ6YfT6",
  "key18": "3csRLyHroRww4LFnFyTPmXYHGZ4b3mABetpQ9bMUJVgGimZeYK9NUTND9U7Pt8ni97t6Jvj5YqbSN1ddPjFSYCCv",
  "key19": "3TN3CXyJU32U1BbuFQusD951Esue3hwtp8JYpYAqtTe6EyvyNWGkwnkMjCFBfRH1Dxh92RdxFeSg2shXhTYtSyV6",
  "key20": "coVq2JzrMDLtH69UGj7ALvgqrFvCqfSUddtNSYf1WUVT7p2dr5ibK8A9khEnTvegQEB1L3d5cij8ehURXUY48jj",
  "key21": "4sStjGY1XM9J82nwAv12QNx3cpp8WpNrhSU6W26n9CH9sd5Tw1Z4Nt9bPj4V2jTf77WcFwtSyFD1qJZinTfJoX4F",
  "key22": "s67FDjHdJEdPQNpVAxX5KJCTQEKdvfPWQUuzerUJVSDcbvCHc23rxNe8Ng2eS7M2565Xmk8a1RRrvckx99CNzzK",
  "key23": "42LhY6gACjfW2uCup659B3Ha6V3HWyQfp6aPAjxyKs7iedHiZJdFwPAqz2kt7ab4wiGNN1P6wWPbLSU672BUjihS",
  "key24": "6477qZvooxMABeH4J988GkRuk1ukdoKVxB8qKPndPVCZdxcoYdHq98ro7eYCZXZuM5NZMjgGsHpac1mARmkduDEF",
  "key25": "2Ynx7jNfxXAAiraHHrWNjRB6A3bX8MEMqG2LVBAk18uK2sf5x6giswAcDtB9CoaR8hNpFxEHHJ8uNab8oXcrxj6a",
  "key26": "2NLhwp43XMEEe1cTQLnkhxTHSmtuHhnADRqvYKBMxchYuSfBEbwJ6YDFxzwXRShoPJARaDhPH7YUv6UstLUYLvzN",
  "key27": "5GhSqrDNz8e1CroDCSMCN8KQiy9Q4sq3YupytTqrTf9PRu4iqsPaJmiZojNELDPH27ND8nE334Q9rZhRUAL6vcAy",
  "key28": "376PRbvMciQDWHg1cZZ6b7moLkXqzvjkpXS8yn1xpmi9iDhEY6ENkfQXZm69PAUJPdDBB2ucC2UctuHcw3eYzpt",
  "key29": "4wGmjuSTNNVnjTDghEDgQ67osGMVCYK5tirV6tpdGoqf2QTW8jkvh3xwXMvpxg6SRjQL4Wa9f8o1uBQH2qnHUCXQ",
  "key30": "3AqFs3tr6BrcrGGHVi9EnSq2JrVVVy5hm2EtYZeTzyYgj8h5brp3rWywWefXRzgAyyF7FAG5JSYiCoWQJKq7aRNY",
  "key31": "66WyUG8rm8HgXYqR5jwMtQP1edvF1XyctUKudA1ni9oPRb8EEvsagAXtZarkuWuzcpxfDMuo5sXnJJgrxdckgDdB",
  "key32": "ExMkDbqoB7rdxWBEwer6oJeLZFud555uChrwe7YsR28EEXmqscYw6SzEf46rKF4uJ8mx9eMMdwGiZjx3e4KvyNi",
  "key33": "4RjZmbHT3u5R1jLeGTi3fhKgVJxk9HyH6Eo3kJ3bPpds6cBWtypc2VynhJ2CwbXutMXgFgHeHXYjSnAgRTKrzu1p",
  "key34": "4jBKnx7JCb7Eny8GYr5HmdUhCFira6dTfBBhA9kJtKd4YnET21ucsajiC1MShdBpqM3hExsqscBFm9o9PGQJLUSW",
  "key35": "5q6gKTBPd3sSo1ZoFiwcu8iX1DW89PXDBpDHLmhrs9kDfKFXBXUTDo6w6h39JN2HHt3yC4LkhE2C5iNQLiEXM1m9"
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
