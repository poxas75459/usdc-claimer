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
    "5UueYk9JQPU1kRcvoaq5vb8392sUbwBiSJhb3yK1GJDyFoVzjJv1PW7ogGdzPm6bevcsXA1CCNQNtDNEZMJVJD6J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dvogdtjrw5S82Lt4TtxYiiskPfhPJhfK3oneRAfjacKrBys5AHsc2bkpSJToEmV8wqyTaBG8X7k9wJFwsu6xLKN",
  "key1": "6XN3BQ38mXD4xq8ueTuYwgTpgtD2KXScvA5PCNRNR1s4D4qyE824DtbsBepTMCThkYxAWBdmywTyPXDHqNsKiBy",
  "key2": "Ep1zvUcgZZizYtq2GzWcfrX6yqe84Bfw8j47oTnSENN8xy9kMkEgqaGo5AYHWwPUridhPL45pb1VV7VAfkLAgzv",
  "key3": "4Tsx5qqCfSBUwjzL6GbfZKpjmyQnR2cVGYviP7ebRoRasAnNLRJ9LqCsbunpMjooY8kpBYxEs8UTbTfegJTv91hX",
  "key4": "2k6s63A43tmMYdxfxJoMvhLxQ95ZhHufC2654kpmXpdBgHGUa3eBWVSEuKVsMSdPXYUcFBoip2kHXQ6JjezqVpRF",
  "key5": "5TLV1PZK4J2intDNTGQ9yPQ9BQs8LxUVvKbdnqPKoPXnsXpe6y59iBguTqZF5VAzdvPS39kB23MWMePtVMZ2VYUu",
  "key6": "33Npt3MG9GQqBgvx1KqgQALgxGzTFs5fTXx2ALAQdBeME8WR53zp9ZQwqYSHMtz6MdBU3YqCXbjGscPHcxS9fYrQ",
  "key7": "62ccRH7tKRqtBn8QzYhrNtsaEBkJG6zK597Fg3JphAr3c7nMZp5a2TP6wCqTqobc7gq7nMpm6HSq5WaB6zp9Cbjh",
  "key8": "UF3Bchpsd7v5LQTTFr6EA9TobLVpyYWRTKinVErTBzDJcdbqEXM4kddf96LzPsay49AQFnmA4HsiBKGTzmirePT",
  "key9": "2Y4G45kRHx4X6s44aETHKCzvM7CcTwQBQbhK7mmgwwuv6gZV6G8dfoM3pQDHR8VYbXa3nedTmm8xxXFK3kmhaDPi",
  "key10": "4LyePPBqHCxcKkHtYjMFixxHjmoqvMMZ4fajjpxLPFW1cRUYKmPNurHiULKtZeL5k2HWviVov8mFqo2MqNiFuqui",
  "key11": "4ZEKdxJxsNtHShFCvqJNsaogsCk3Jqq42ftQtpwS17pYZFHz2qrZcdeZfuPftq7QNru1YQcjCU3dKs2FVgo6FAMv",
  "key12": "4Vfb7qzZsmvosqysNAxTxzJuNKw5ijngWvZcNX7aVfxm6BWM3sxV1WjsywHzUWNWUQykVX1tYKfzA9cwaiT8CaQW",
  "key13": "5PcT51AMv7Czmu9JY3Fz7EMeobc2PiQU9jm6Y5LZzPU2PmsA2bc2S98AxscGwSamvVV4Ln4227HAKEmtVfAVANcr",
  "key14": "3kWo97iwxRqk1V5A3VXFAr8gNXfrw3o28ispQDdfyyvPqqW3twHB6GQgB858Qqshi4PGRJTcnPJPrpqty9LQopxG",
  "key15": "5M8YLzVLCSGvskPNzbaDgHVPLfcbRpuDEH3ELkeYunB7FPCupFt2TWzpoT6zhruUCLibQfD8rtrrhXfJotyRDKov",
  "key16": "2r26wtiJdo6xbec3YzNPxgXhxX3KMDbndjYAPA3Q8nNE6KFpzEBc1Dxqtrqv6KkSeYBd2u51iG4ppFWH8ytpiF69",
  "key17": "4YEQSQVbDFymC79p6eQwxNnJfsgjWG7xdJhntDHWZnUof7LgNjeeZcb8aNE5ryRYVowjRPW9KWJNHTnikrxdSJoM",
  "key18": "3XhTT3QTFgRo2Bbim9VYCQthB7h9QesFZzaqzxxfGc5344sV5hKwobB7k9VUsvY1kMjCB9X7j7VpVdCGdoLRwCgF",
  "key19": "cJMmoKLzAsXTjEZ55nBHCgbJmeUq4BpadRPrCW5c9LgeFGac3jX3Lw3pA4tB7SXRsoRWQM7rAjRPXRM3nFB7V9j",
  "key20": "3sUcGLWse68TNDZPxe4qvw6xTEnoht7BkGYB9fZUrhER4PTPtDf1is9mr5PqYQ3hHATX2JazVhKxoxxWh516k5qM",
  "key21": "5WJhr52WCKubG1tREWH6odYBKnyYzY1eoqSriUrmUf1UU859qstP1wpodLN1CZhjyNFAgbNLvtvtuvAzzGpdKJjC",
  "key22": "5epSJjWS91kCXLK5JK3FNLVKw7KX1ikGDQGt1Qdc3XhzpLFSJyFBWP95SAJE5haJ1gNTgU91LBjkWg9tca2rHBoq",
  "key23": "8Vtu6NzJMjzuUagc8YiWDeWunjpdgQF29EpwjPFe9gEeMEA3dybNm8ut1aB7WotLPhiBPjDLSaFytwrvoxhxWGJ",
  "key24": "RDM4qr7xuRQ1srMYDzV7yvnYHHwoWNapcyXgfUGwEksyzg5rMwYooJ22uJv5xsECcnA9jGrFrLZurDDhw3DM8JU",
  "key25": "5HHKfCpULdqJSmtiaUBJnH3FHVC8jdXcduwR5umqurpaoVgFt36zjeFJu65gi3YGWWbMCd6TfHEpMVEA4CibpBNy",
  "key26": "5toyNLLvyTqhp48myWMmYEfVSVyjcttUPLxF3o8BWyCTvoEzFv62s7HWKbKdMxWK8DuZhPripiRNXSKnnXP8QxrW",
  "key27": "3A5vhfxc2qjwtRHbpcApxkd7pinFjRPoZeyZFro9SRL7Fe24gnePrSLFp4iYPRwpvj71wb9YC5qDEL7jV7pmn7PL",
  "key28": "5YWoXJPKBMY4ho9eeEMkKchNVmN7J6nPCkgf2Db1UJPfp1dX2QThtNKRVnGELxZD6VUoUU7vzs7TxEATFuEHZX7m",
  "key29": "53diyjHwo898ekDj42gzviAv9YSs7atBDdQc3EjMRXBfvFaNXAp9yUBFdMQYr8e9eh9DARefMtgLCyshWZ5tCT9e",
  "key30": "2nnwmqSEhifLnhtcJ3FwDUPMwgzBYvaqRMMPCxPhWZzAFTx1T3msLPkFDZ6ChfcUSdiigygK5PX6GLJ8zfb48V5c",
  "key31": "4D14YYefBV9uXAVoMofTSHo25xoFCLmjbfEK9X5cxdYki9ygAHskmtz2hmg9BGX6VAPRqcDNdUoav5UmgtqrnWfo",
  "key32": "2M28n2FWWdvF5NxPV8mLRnJJd7tqgy3CXx98DPs6Ty9kkB6nrnjvJv5ivXSue1NCvg8n24wUyfqkRRocffmuHWr6",
  "key33": "3ocBnbaz6tz8aGmrvXo8kC4UeptCnByYprDdkwmuDsfQVHBSU98sa7SxDH2cD9mTEGGXUdjFSnXpS2Akc5CnBG85",
  "key34": "27VaJ1PDXgr6Gnuid8xphHbLapBtZS1VxMnyZtRo7LeCycN6CYKrxhiyJyoDi1i1ujTehn7sWJ262DSRq5AMTP7m",
  "key35": "64dfHCyWPCn7JdSTDkLwKmDgibKPSEzYXiSeiNjEf9AoxfjvcahQ8spjL2xLLCii5kj4TNqDX29WQwdcAaezpCne",
  "key36": "34QLR34xP6ZDMEdVNnfnVShgHzN5jdYXbrVy3RBsaBWvBCuncysQoMXfVofFkmY6m5ZFQmqbgaaUuPy9W6rfMXFj",
  "key37": "3o5cSnkP4oDGoohsff2NQyStMf9T3f1DvHVaQ9cke1grZdkGL2kwc21ZxW577UmwKCajYfM52358RQaorcE2epMn",
  "key38": "35vo3nMYL9CtVWJHRc4DJsjxsAsmUhG8nBJbfmssfkeQbVn4NUq2U2T2PvBQNHsGWe3LVc9S2Pf6HuqBjnckezZ1",
  "key39": "4iCk7aTtwu8bX3WyNZTG4rNQGsSYXiBYi9nHXyeWTpeJkyRWDH6CAchrfnvg1CtFPQN8b1ZEwbyrk7FUYtsmUETV",
  "key40": "5P65p6UZCeryS6CP8gWZH8hUXUX1mUxrKsdrwb77E2XWb4QivPN1GZNok1fC3H4Mx1eCjAP4N8X6f7SSQd8VQbdS",
  "key41": "3kTrxTcs4UByX33eu92nWm5LmXmAajxPe9ev7YxQ4waDQ8Rxro4M5Y7245KvmbSWBCN3fhzpL96bdXj57CQgryHo",
  "key42": "5Hyb2fF185VoAAsCw9PRYqTKRAYnc6qfM4eyVcEJfNXsZd2UV4r5RR68zz9frosDEAEPG9BfnMjQyuYWYZ8KrZzu",
  "key43": "2Ae5nyRtsGijqAotS4H9q93UdxtRKqk9L2yYLLWcyD1R5yPDHnZKJJ77pP174oq8UcZDfZUKvP1EP6pie8net63q"
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
