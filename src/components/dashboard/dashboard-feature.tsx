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
    "4CygYGviF6GW3anfy8bKfPWpYmsaPK4A9UjBo1ytBf6PtF31t7xfXYSJaeG3SJ1vTY8PvKPiPmUd3VsaRqCFTcuU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cLNUDAD9FCKYmZJop5hmFj1dJ4AyDvzBfbDhMk9Ehh9T5eFf3o9467o6iPS3j8wZPtULdDhFYXoCW1hYqueHMTG",
  "key1": "5ci1jzoeLSNG8GFN72X41MvjLT3s7nDLrSSiJ6hPTZRtc6cjgtAgZtyp2fLJfgxdZMn6ju1JXsYGR3j8F4BMdsqe",
  "key2": "51mkMA26AuuTwREzhzGi8EkAGQmLyA94GfJqUrLNciKwwdM3tKbfppw2i668rLN6xTuHhcCCVuJb8Mu8Jut2hnRF",
  "key3": "2cM8QBYaooBUAHhVQP6ZPCnXDzD9yWxJwKtwEsHtSD37b8upWhfNsQV2xA3vVH6MW8nKwb25UhDDU2Cf93CbBeD3",
  "key4": "4n9t2XSi7vWTcJAfTjDm3J9FEfsmKLNuMhwywYwcqcDPDDBQvzto7d1KvT1UKHhC2SxuM1VijzRmt5Lpbhaq6jh5",
  "key5": "2nqYKKJ45D7Q5wL1raKZ2aFvBhFsidVZnYP8Cw15KUyqb6is15WgQLfdLkFhw9n4dtrNXEVWD3hrpPiD7Cer24DJ",
  "key6": "27ist4vMhkpskPAtqBf7cAtzyqG8ZdR1Kp2BtWTrkockPc77vafXwH7AUKjHEyDxAgcFXa1eqea9ugiYirXKHw33",
  "key7": "5mzdPREqeGdfXQ54AtsPmC8XwFiwC3qPdSrucEeCwmbQohZpjiTEzdKcqYbKGLSoAkRqvcebjKzkqLbwr4cMmPeu",
  "key8": "fuBHdBgXS87UyiFESev3bxKV6f8tWXsjinQyvYo48t7LfokUwyocPQ8cxAcp93qWc55P1AsLBQgjDmtJSteKv2g",
  "key9": "mXHxLRz6hGtWYnqTwBm9tb5qpRwgKNHsULYVTVqb6gy9dG9MouF68cqnjUn8APwA8dkKjkj8r4dsVtDH1NSePn4",
  "key10": "5H3c88beKviKVvF8c34FCwoB4eMMSCWp65a1dAynr51c17C3RmAvFZSzGGTg3kqxYxis4hsacrcS3GaC1dMqbZnc",
  "key11": "43qu2NbVjvSv42maaziBqhmcN3cY2vacFdfsL5wcEzsC3nxEYtZnXVjUAkznGs9GTr2SQbDpY77gQ77uaNVNur8b",
  "key12": "4cyPYMtiXYGfyz5VnEibW7pYC7cYvtiW7UkAJ6z2CXCXTwFDeazb9LKYQMh7fShSYbgxJ4QXBXgohpD91A9jiFGb",
  "key13": "K4f7RJE1AsYU4tqEnVCcDrmmQ6bdoia5DorQUxmpVfqsnNsWbseY9fDJWKxWof9rXk5Xtb2oXJyxm1BsphBA6T9",
  "key14": "4dgkyHfdoPp5D2GE3LG7sk9s58zfFCLWqYy4G5GWwX3MGvaKXrnNa3wV9jS55AFDuFN3DwZHebtHMrTxzhYwZRtF",
  "key15": "4CcAEZfwr8CUoC8A6RjfcQcWMA7UF1X1ASSgahL7EiqHdYCdnWKEh11ZysYaGSvm6GsmDPUg6o7wNKbfXB4BczNf",
  "key16": "5xaaJzQ9rJDJt8gsZqcqxKmYh6ui7DgjnTkTNUSnKL79yFHPUp1k6RkgFNSYGuKisvfD8B6G82XcBFF21ZoWXZxm",
  "key17": "QqmXhSdRNgF9aK2o1ft77LjyYPzJVdChUtBcF6RhuQe47sapvjfkC2zmgEgTv7ukbYAMmsVETuDcZ9cA6MUxqKV",
  "key18": "2bywjNxXGLBQJz2TXFPbWk9K7VhYFmN8tNFmZCWujyjDoGazMPfsYRBv7AxPNLuoWurEqcS17zMJSJouDdG5v5n5",
  "key19": "4Uxw81vxDNRyMw1ixcfV53fTfg6oSS3drax99jd8RGKmLGR8AWz4Bej1oTDFxq4K5oAQ2xAjhw4jotoPS7EMk8ot",
  "key20": "2T48XRzAkrhJ4XsShm1JtGeAvPU37LA5VvUvuPZ3txyVdo15WmBYTfNYw1HCkKdPd37ZUUfr9aJ6qffiGAs1yMN6",
  "key21": "27RH65pQpVecyVtyHwhY5deeX2Jjn7MSUxRtzwoMKbwpYD7nFDumcStepdqsfp6j2emKR2KbN3BGgS4G6LACWjHy",
  "key22": "3AfGtYctq8DJsqqcoEqqDkSHPv87R1UskkuUWE13C7oWLxdUcou24D1kiaTofutFrsS5rm8mZHSaK2KseArfYR6",
  "key23": "YgFDhneBT2Dk5vKWW5G2ccEEa9x9sNBGDhRQdPcWujXU5tiWuY21xbUofAPQcm1iHCywygrGrtgJAoeeaMgYBYV",
  "key24": "4utstFwC5HviP9pCWViDY8gYNhbCbMNf15TmWcFmnVarZ6hun2XWvCSEZS3sZXTCU4RofTvDSPPJmxmcKhuRKBBo",
  "key25": "2uDxwjiEHESnTkniL6qg7JR8SPviY39S37FaPMibTnTH62EnHGgB7XYmtU5XLKW7p5umFDJBaZgMtWjrh4HPG6SE",
  "key26": "2pNFtChuSA8GRcLafeDmGsoiicRXs58q7zXp1qQc4xBWDzbYvjX61h8auJqd8U2wQygLbSar9WiU86EsmgW85stg",
  "key27": "3JK6pag6Uuuh49rvJo3Y7YWcQK8GC1KCPYNBdYhsbvvvzx2DdAmfnn5FMgqrju4NSXPsWVx6h4Fs5urV36bfeuvt",
  "key28": "4rWUd3fUzwEEtJ4e4azxanMvQj5D1ayDtNiNSmvG7NzYyQbfjzkaUCeom1oFxGboCySrLkM8rv7VQoYZTxRVxkDZ",
  "key29": "2taLrsnNUmbAp4JsLbTwY33h3BkoyrPFqty3crnNTzJzh24Py65U6naBZ6ET2vXJgLpR5CdRm8qCrEJANCprKkJu",
  "key30": "D5WhfKAK23tmGCiA6K6XRZ18bDQT2NS5HAHYVDf7o3UHm6THTE5duMEyyicwAa7hxiVBX7fLbR6fAofUqiN9i6L",
  "key31": "MNHpTKDdaFyYz6KBMc53BmMX34PbZXjFPrejaL6wmqTGo447EVGADhog49dVnB7dPxBjVFnRR4SSA27nMgA3Hvj",
  "key32": "2Ppam6TLPZqi2ZtUc9GtTs9tAfSjg9TCSQKFTtFeSUEY6GR96nxrzX7nhBriMjZ1GTpt2Uah6iSrLZNEvRMQZjHK",
  "key33": "3RAjt1eA7HzpNVw2owBiq9NJ64BgqLGm3xmUmtFqncie5QEYDdjtcnTqSL79t2kupJt2kzkUSFRJfSDPPPYSkVyh",
  "key34": "RuwqK2A9xZEr68c4knmjxqbfiG4AKUe94JNTAyiSBtwa7CvQvg2NATuyhVyokYopN2XiT4614WhgRuKmPW4T6fT",
  "key35": "2iXHqogf4qMAVLeshKVjP8JtQURLY52AeZYsRYBKChT7jQUKYVuivDmyjbxfQizS3yhoFPH4WH5Mjg9CBhx6ZYGd",
  "key36": "A65z9Rg6RonvdK9K7C2V4goZAWDG7xu9vHjKhGyaxJfvbZ8pRSVFredDWozzJWaFFF9WeVjMpff76VoWkjHbwCe",
  "key37": "2Sri3YDkpDki9HbzSs8bn9QbT22xoKjvWc2jgaVPvaCW9BH73XJCgKKQZNCPGXjtZvRLE2nmn4NsXNN339fAPhET"
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
