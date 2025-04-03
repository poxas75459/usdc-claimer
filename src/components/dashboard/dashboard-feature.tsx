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
    "4cwav5VegbmhZfv6spN7CfMNzQWLVFt8zu3Rs5NaQhACN8TntFE7roAKC48TDZVikiKUMFbXABy39Y6JpzAFCTzV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MdhGq9cS3RDtWeVDHcjVzTFrtrpG9oy1mYf2LMsXvRmv9SrMPaghgCozt7j7KSSyuXtWc8ufjbxENAgYFaye3gE",
  "key1": "5iXHWpL21p6ArzJRTdArvGkFqQ1N8c7d4azPw78Q1UtYbT5qyu7f4Scuw6A6qwRdz12WyBMyNkm2BWEPvLd2jGQu",
  "key2": "5z5BVSffcnGxn9Pn34tRoQSVWXgmsf3zjsSjpqE3QmbMuai65SVhGHayc6orttwbQGFqqsK3tusH3TVjnNWAfYnw",
  "key3": "4dXSkTYtE4qEQWgEtAxRhNBE4VLCnbdJSb1wKC92E9bN1xn7GyXnByWDeHeh7dMhFQRHeQAqz8YLAQLZHHaUhWwH",
  "key4": "5ztxkSMf9qtESSXRm7TwXrK7vFs8zBWA4eLvxQuAaJr7eaMkj82SspsitRG7cNynC9NTxbA5e8kWE8iCyGQ6CQsX",
  "key5": "2j6RVXSkFHe9sUNYxKv4WSCP2EyxmTAHaF3gtwMDMh67mBRsawV5HRrHyLmBQRgtDbHXhX3w6nM62ugWNesyy6wa",
  "key6": "2joW4UfuL41J7UkU3TiajXfg5DdpR2pG4QSqdQ39qZpNYwnJhjBrtUwpTPen9SVHRTcwQJTZaKWRGNZ2iCcYumvp",
  "key7": "2mEdhQ9qYTGE3vfKy75dBy534zh95G8YNkSoc6PeVSDdu1s99VCj3Ffn9qAwSsKHfWTVWiZsiX5L9Le8AFCoqUh1",
  "key8": "jMbLJnWKwJLyxhxoPgiHLB5vMBLqX3nDQsPUMwv5iiynG4niror1LbBkGFRH9AmX8uMmGfmajcvgqnicacuhdwD",
  "key9": "366rRhQfXan8zZ5KcW92G34EUtCEmvkm1wzDoNcV99xmqAhna7JCY1MA3UHkc5rAbsHLsrUSi9fN9G1s998jnt1n",
  "key10": "4Ny6qK8XnbR4EFeZUThKTkeRoAJuPu27H7vror5TSmpagfEzBCswQQjUPCbcvi6JJhjnMNoKDHR86D5ACad8Kia6",
  "key11": "3fXJtZvzCFnbpoWHWoAba4GFSddiZZSqrPwxKQWpiwhrjnJTrgpRgQqYjHUK1Q8u2y1hffG1RtSryWr7zHmnKdyC",
  "key12": "2ZkVk414zz1ubyjXgoco9JJT9ScYDuhSBpQf99smSVPYTnK6tZGx1wgqYgRTkhi3CpBVuo7Xe2Dt28vcifPTs5Jc",
  "key13": "43YVfm9af4vf4m1QjVf7fcuoeJdmKGrKgqn7KpVBv5X4CXqs762SBTPssJEQGmiLFHCcV6Kmfb5eLfiM5Yb9Qafg",
  "key14": "34UNWaFdXzB2fXsgamU9jQGEeXwvDzWUYtyQ2Y7dkxMVCxceNSe1t5WtSoj3QU9b8sA6naZwmBmgD1H1MpH8YqAt",
  "key15": "3QkEoK66RGnPg6k8uNW8oBbFm7D2HnNMtKQCNY12gEt2eRJmPD4XtmHUQDjmsFoF7dibJG3mA9qtfgTVbTaQZzt6",
  "key16": "2jTmNSj8JPM5FZhRrop9YU6JhXus8SciWJYsQXkijSE87JxwnnkiW6vWkhfe6tHwjLE5mST16TMqBijfhib9gJih",
  "key17": "2ToWBMGWBg8KkBJwEZeZsy1ACab4qxHTe8QJwQoTLVGZCodyPbUmzs69wepkz82FYGHLyjJm9wxY2faNwm5gPPTA",
  "key18": "4Ak6Wa1vc5uGRFaYVgLQpV1J9FEFy7sMnkVPxBT1AB7wi2vK9a5URyQChhCKokjjpH162pSUghT6X2fLY4kQFRo8",
  "key19": "5caLMywpTxxGqMb8hozYZQePMMYyeASMYazWtUDw7vkaWKaWtYPrT3i2hfHxrDKrx3FSjac3ndXR8DuBdBh24TRi",
  "key20": "XJ3epoF5rKXtJouKgFZXtTsXtafLjn8p4eVjGaXSBzsRbD6aYHhBjjyMtjY5CzuwcXBzM7CoEgHcC6MHMUSwJw6",
  "key21": "2eVJ7cvPPxMUeYhbZw6wornbHHd1QA5vgZL6xFSqXw73soQLhSVpwBBgKoqiJoJUnNBzqrhK1BfcSzKFcDcgt1q7",
  "key22": "2P5q1kA2YzGUFDHW9VATKwuVSrEkMe6BeA9FFEHXvpVed5F5gYMS6Ljd5ZDEMTxU7ZXVb597bjR6ieFLjsFx4h5N",
  "key23": "5Ba1H5iXA6XD1rJEiE9fydjC2PYNgJLfmTivGSPJeeHDfdM7eVfJckh2C5FQYhuqpdRrnxATi6qK614iD3EAeGJ9",
  "key24": "Nwd3PPZhjgddavFvRwjBqWhMG7hFBKMaAgoT7emD4B6DZV6qZAwwZqrKugFfsPjS2nRHpLQC58555Len8hNcoEJ",
  "key25": "37PfkrwvNdJua1NhNvtNL2ZbCLQsFUZMpQm1z2cJ5JqGHDshUf3v3aam8iayZk2d9R35xKgGWLjk6hTMJS5suo3A",
  "key26": "4ws1FHP76ZELZ8QgpxF8pDqQmZn9UaxYr8rNp6uERnJsvzzZNrvPpUV2R3pfzXjRqX2eePfZhFKEQ64WpJFAKwke",
  "key27": "3pFSvXFBTy2Y5736qteVDGkQLMGNRE7Dh7hCUyRzHkunyNNnkYYXYW5R5TdDu5rsV4A6dV7YAP9qg7wZzuKbuE6f",
  "key28": "5AWgEk6d9uJcdxNrkNKwHbC8Gp7SRTLvzrEHaFsgojVqicfpKrGC5nUPU2SkKghEjxJyVmGXRqmZGUwZrYzVPjRs",
  "key29": "5AevDDCA5ZK9M3iaczbyVbT9nGJmiq2JtUc9wZS5C6NmUr4zKPQ36ReWArCNHcJUaD4inbB1Ma3cDiV4oYDtWxYR",
  "key30": "c6kW5Qx5Mw2FkKMoAFBhYAjD4Um8iaCc2Hr23sxMSviQD9WswxEJJRMEU5VnF6EYYtxnFN4r5AZfq6yN8yPVg83",
  "key31": "7F45jhxEtBTofh7dJwv3nh822JQBXyxZJUg4K4QEJY2W4W9fYDcnkmvc2JYQwaTSX5yNgymrZRs6GZ8z5zutwk4",
  "key32": "57hfEgjbUePCSUDFWELxX4QvfvjsQWb4D6zp1jZdjsTgDpKs2X9B7UmEog38BDW3ZtkqXmRMCyhWi2X5y7JuCEgV",
  "key33": "3EZHYNGuYtdvF6y2wHxS15xrikGL9DurYzdMuaGmdRYsSfboLFAstubDBsXguYatapYhY8gWGRa7Q3NuQTcJcP76",
  "key34": "3VF6qXdLBFn753ozMCR6YbYCu1P5P7fsq12pbFV647pfxj5jVrWM13PH4BdiTdV7zvtsfdcH8Cj86KuzuZuH3SSy",
  "key35": "3str2LqJBKrHxVF78XrDagrrNEBMw799CFrdCuRnBHY7a8y5CNqyEne3jriy7YEmTC3GaBZ2XE9XkjWobA6wVK7V",
  "key36": "3n2n6TgkNSN31r9BnW9pgYS3RuPAoLapqU69KGUs4QoW5ycqSctf1F1Ddm825sL6ZBhU7MRdbSxzJJvqHA6mLjLU",
  "key37": "APgmLBjY8gNTY4uAfPvFipnqZC6UFKiC9wvXysV8ePK3zJGuGTcDpZWybBdzFBMme93aC466HKAv7X5kdNkeU82",
  "key38": "3a8eRrWkWNNhuNftF6qsY6Q93qeZzJVCRBjATbfrofYeAjxvJRVpeuYdNZWTzDYbRah68CmrFDKVM7riCKrWkThF",
  "key39": "3dm6orSYk5XH8kHBxKhk6QHAAm3DsNSTCyPZwnXDJuGpyxMhsjyD5tJzc1DfMV96YDgbe4rP8FUSXy5HZeaPUwAj",
  "key40": "5uxovz1MN8trTog5YrGtGvaMzPv3jdwr5eFWRydnc6qZAV7kVABkr8uzXjdCSDe3JRB1R8GMqpwo9oEm8Np8LhoU",
  "key41": "24oPsrGpZuaTeN18N3dQS4wAXkY1XPzxSV2BKvovKRmNNP7GwT2iHheP8CpyVxJn5NFowhW8DMJC5E3GD4JRzpn6",
  "key42": "2DybLmfsr3gp9vdPowgcC81NSX86LfYzUbUb7UiUjXd2hSvZodrodgESwb1ib7ZLpwDNtWMBecmf3RoFtn8Zjnbg",
  "key43": "2ZTGTTAYK1StqiL81Z9U2DvNxvJorShUSWksHcDEWENsyDBim6V6c4oQqun4AsMGzYKZND4cv6EStmnqTUQEAWPk",
  "key44": "24wXDRuH9dKevVPRq9dWhc4MnF6tqLrpQm7XAwiFYA2jmMYt76a6vwP4YUrrqQeKeY34bvLecHgc6UyrVEv2sJ4v",
  "key45": "59yUKNqkV8ggJoSe75FbsrhwrTqjtoouLr8R7mNWcry97BCCPXqCksBnoSCNCcHq2TXsy3DTuB97RzkBC3cqdMAm",
  "key46": "3SuyyPvLUBrhMVh4hVQ4uctmcKJD8mFRQHRgFTMQtKT2n6d6WKnauLwDnnUYgtBgqbsF8EfihA7MJGMqqeWT94Wi",
  "key47": "4EHhmVJ51Cr6ARkcWCXJzSE2BtdjukrP2UZ5uAeb96guxbc2zGoxZnCzKuXEYiYduCfs31pYPmL1cTcph439sNrv",
  "key48": "zFtNN5FJQN5gjz9EieoyqiqN8a7QCKKUHDjgjFjHMZ1zmsTTKgKpfw1kzmu42KF2XqoB7emaUMkvzBzVzFqeSMC"
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
