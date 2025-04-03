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
    "5Y91wyfXvXtqmj7UhxFeqz4mJ7CXgVjpvFd7WqkdCVMCgcKdWobbYm9TvncYFPucEoRWX5bUUDJDD6Xkuau5kDvK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uvFFBoMx1PXH4mCiigQNryYHbwoe9JPobvd5uNvHTJrwXadzhd3o37uRRqSxxkrgdu2fKewKrNQCFoJ238Mq15N",
  "key1": "wvneJr4dEkRwysrhtJhqXf6UWwWnBJoqaQVf7fbnZAbswK1ozxWi9sYNTv9YQqjaGvgc3tfLdqi6Q3wsSPpNSVt",
  "key2": "S7ykjPqHCHPqBUwNcpaBTvF2J7unJ7Xg23siWyw7GsWWz8NWq7Y3qbRQxBpTUyediVfc4SNC9ZraTrz6ASwewaw",
  "key3": "3crmY8SrzqqUNz92ACrYGBg6kAonqdQPn6u7jDuT1HrP1uvcpYyrERVJ4SxXCtxivLw5ro21RQTvTRCJHX7LxJFM",
  "key4": "45FqgsCcMBZC7Br1co7eJw6LhWYAtpCan8poMBWiQpTuSnjV7Z6RhJrfUtVzkkNyQSDLHu1b3y2Uw8AYeHzeKExg",
  "key5": "5U85wuPbNGA46BsCHqtggTcipMkcy34rKKEJYsLxtrekjqLdHDfGoZpVnzY2cTnLG6GdLhs6rvSsQ6ZzveQA1Dyh",
  "key6": "4YRTFFtU1dFSToCvnb3h6Vg72oh5uwiqpgHEkss1312Pt4z9EvdjELaftzRZNvTjwacFSk4dQshYAvP3fcnE9WLs",
  "key7": "3aE3BsUVbCovk5EZXf6ztqmPArauiZLACeinH3Y9f1o1eXYovSNHAGLmWux3GCDjCAy8Gzs2pm3CbF5iWxiP3EZB",
  "key8": "3ETqUycnZhxzf22X5BUkPD9HUEyedBQzu5sARQ5xnGzrxzQU737wAKpT4QUdW9FduNzZuiHGQEs4G4aKMNt5UYzM",
  "key9": "jUrNpJ5TYqSTZVNL46BvpwiZP4oU3qM1XsTd5ybQDpTPYUcY8okfbHujPskBgq6qH7Q3CXmRpQDRjwXoJmH7Zgb",
  "key10": "5oJ3pbpTJidhBLLMHBkboBHvAYhhyTSstUZJjP9ebAQPMtGPDEfuHxmnH6RSED6GGWSgNo4JPxY6tPyUvpQD3nj9",
  "key11": "4T4U6DQU45KW72h8nh3bW3iJtk6a2rdVPJLtxZhtXxYh1SEgJpFoeTwyrPjUjrCga9GHaRkcxrpAUL8Bws3hVZqQ",
  "key12": "5bqT4VAvxVCA5TnRUVeZ8w9dfXW3X3naAr1N6qJbtT1Su1CT7Wjwh1vePg7pvXHFLAtPi1pk1TafZmp2YN72pjBn",
  "key13": "62ZDtyFgn1HYoCZMA1kGDUaYjhqjRpCQmPHa2UsBGqbBvDJU5snEAkjBkYd2eNSJhQY3nJPhrmtyZw8uH2x361fY",
  "key14": "RbPCex4phvarYMu5A31NhxMoxP5hUM34JFrcj9Ev8RYcUeChqNqLAycXFM4ovcyJofug4x1Qo9uYuQdmy11rD2v",
  "key15": "3yvdpy7bWxqiUWaRX4i8UNX7vma9TvCCZqpm1LDbbPGTbW9nWMmJB5sVoANDNz9WFumzbtpxsKCXbQQn7cUXCeSC",
  "key16": "kJKXTN1Y3VwU4ducqXVYwaHJERxdJxAvoU9Z7RWYRxpfSSknhJW3s2ZJ8N4ZTDEr2JKTBtNf8GTSs2eSgV8XA3g",
  "key17": "5my3KNxA71wWQ8C2kFhJSE5dbPwPzR58TQhECkxDzc6pTV6nHY1FrFVcbw9ghEWLDxSvzDoLKKcR2PKhgsAPyz7z",
  "key18": "3KTDCH2GJQxtZpKys8abPUPoR1S6bwjfkx6UHy9AS8hgXMcxcvUHRCeUerSV6ARJo3zV5wxFB8RESkosDjrbkxTs",
  "key19": "4KJLfTz6YBq94DTwk7Q5FwE9opq3eJaqMB74myU9Gs22FWXcZvUJ2dyM6955Cdv3g8QVWdJerDzYPDP1ToyLn1gw",
  "key20": "5X6GQUTXsofYzvDTgEub3SVNRxsKAwM63Eeq6yLda4NFEdAc1RDomiW99uqgAQRUDe891ChXFaf59np8KU4Gyvx8",
  "key21": "4C1tVEX2JZUFiBvFywjVSpmTNjCTXtULupztiDiuE3dGr3bpTZNy8dvM6EwpG8DCeM9BFk5dZPd3SxPdF59pKEfb",
  "key22": "3NMSbo1enZwUh8UWgBSKp6kBRxe2pkpKmfqp2ijrhnwZPZq3W9C5qKUfVFTGkGCsUmGhcdWczxAdqd9kC7HHDQhm",
  "key23": "4jbxUAK6tGqohzffwyJEGf61RaXhTvuXUCh3PEJeR5ipdAE3dtgsNipTpCGxQJxnPCfYwYoNY6JiEZyc2HwvdeGQ",
  "key24": "4z3maBCScTxyaaQfyZoKBXjomErxyT5iQGnoixF6GgMimUNY9zwoQu8NwmkLtGdGA1noQKXTS6JdUUn6YBY67bks",
  "key25": "2LThw4Cb1LsCXHZ5ByNas5qnNWp7D7vtaAS6BNt2NH7a4GqUAWRXngEg67puVJLX8TkWnLLgh5P9Vxw1dWH5Bqf4",
  "key26": "2tyKZ2rbjh5WrQr1E5jgTPtR88USGCpM6c7QAZNeRiinSzoWSW6LJVjB8bT2z6WgBEiUqdrxQubz8dRCXxvVwovj",
  "key27": "5CEBVaQ8FiAECYUMbQswzfJWzDY2dunNsN5VkRvuCUooriHEpHQfQ36YPQyn9Cdsgy5ERQqMmuYX6BDCpKtS2ehi",
  "key28": "56pVXE9k6MQw4REAKratszSMT3Lf48Mz1ruYyKDxCD52cQhLZevwSuG9yfB1nbxBHVv1c21rvz5sxcemXRwLTD17",
  "key29": "2KQ61J3g8yrUdvWaeyrkjfNeuBQYcES6yazQYZoidvQdGDjSM35Q23Pokiitdsjx7YkdftTkTPM8g6Kt2ELrj82A",
  "key30": "xD4nV3aPiGuELRUPnD13vWo6fV3zygnYNfHUKdjm4L6tX5pRYMG3PX87VMqEj2vKQVu5rc2QZnam57eJgXUu11N",
  "key31": "2MFFWWmypXGBPEYi6qFrge9EuEBxpqc9Fx6vHiXBvJdNedbjBDtW1EpGTwUHwvPRo7CUMLYsMe6gPeBntSrnBjda",
  "key32": "WejzLaRspfrzWdKSchQHUJqkqnjTaxDRhrugScVBp46mkpcgkqfbmYehqwNvaCvizP5fuuWd99pURoCZrNr4b7e",
  "key33": "5mpZYQYGbAMHBwk9dtaxdEzrPE6ok9NViRk2XmHu3iz8jCbGvY9MxAF8Ym1MyGp4ws9sB9enGzJ5sQQ6hXhSDgu5",
  "key34": "4RSqzJfK2fWvArSvMnoTpCdNP22CEPkCEFQZLxnFhn3K7crQqvhMPPgwWAqcQqKrzUr6Cxg7KZUYXpt4W2egh6si",
  "key35": "5t6XRgCrVVWsJYwM2BEhg44kWEgWFEFyY25Kd9bfeNRnacXoupKMUA3Kw3Ns2D9iMJqAWJYXZSBoFWwMsvGwzP1t",
  "key36": "5zvpR8p9QUV2PsgjPB9Mc6zXSkX6sezycExQexPz9p8a1mLif1S6KH8F3DxqEssxmyjikhRd4t7iDC1V1QmFkbFe",
  "key37": "3oCr32uu48GJhHpgsXKX4yjx3v2UVTFakWUfFgQfamFDbFRSkw6kPS1ZVGwZGU9XeE5A7iJFrDdaJ1CT8xjBrNkR",
  "key38": "2u8hvHEaaTD7zGQtxmPNF4DJgZ9iieeFXGc1dTnZKaKNTf2Lmr3QMPoMRFbo3rZhQdXAVrtsjRYff8XeR9tVXKHY",
  "key39": "49mbrh6jmZ1tFnPvPDVSaGczxDUMDvAkkqgy6KKBWMqmMeHgFMYwwdpPmeGFuyLJm4CjVAkVV1PYg4XVBQ5C1Jj1",
  "key40": "3LFxq69tZHYNmUbniSjk8BJSFredTGjbtBDNEWyW1kMG2Fvun1hqmeXKtVCp2grjpm7XXMeJ4N5DXxnmZ5izuYPg",
  "key41": "2ksN2yjrk3f7airps1ZdmVTSoLESr13SqQ8sBzSSNfhr9zikATuYSX5WXXreCS2LvGYUouP2rQA9eKCurQXBaDnt",
  "key42": "3FCWrAYRPiqQHtnE8prWyyvLkjEgQmTNxVudJq3WmPuKHWtJKCUKcdfxcvw2oEu6m6J6Htob7B8sJMX32MYbh3NZ",
  "key43": "5iMSzeg5nT7C5bqACvSWgg11iGK5m1nANutsr7EkA3gPMV8MwrEmLpmcquhP6S6NzZMpPKLsYhMdNUBvKySntM1N",
  "key44": "2rrnonpbXWAu62544zhVU83KMWS6f8SYhdsGHRhmS9zr4esCsxLCf8awJfZWHi1s3yyyvReawCXu9kBGBQpWSLig",
  "key45": "6dRtJWfnAWCfuoHPfti6cyxBWSSyhXBdYcjEvchZb6E1G759rtiW7QCLjFNXEyK5ygqG53rE54xHAWuFXkADssD",
  "key46": "27MxiiWRycPYxPzFr2mGetjwDk1StsaXuDL1jWtivrqkLkJaQquVkm7kU6PApbhei6H2DVfv6Jq4Y8fiZ23V1bhi",
  "key47": "5pDGmRY5rMkDxAMHc9DZkQcpCfP7g2B4T6q7RQiwrvDkbQktf4DcwYytFhR1FzAAN8sjUgigTQLSxWhC8NkhZaj5",
  "key48": "5WKCBRsWyyEGysbpcXKf8L97HTHcpHvzFAtQ6adg1gwkZFy8CXqTECSKEkXu2CkkbJdn63y8HfqnzmGSkC7peD84",
  "key49": "4ig1hwcy6fHP3cquHQDEJMxooGdbW3MasXrFHsFQUghGn4as7szH5XmW5PEBf7m9Cy5BpWp898a44X3dnwrTDp1x"
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
