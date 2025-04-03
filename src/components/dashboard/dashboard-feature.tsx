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
    "3mDr2qJ89Y8cR1dfducJXsL5yyGZwxK5zTxrc881AAnckAnQ7Gs6oB1GEQ5mihea3xNEGXeEpeESc1RzY6psbfym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sLpxqhv6ydiXkxfwDBLZZAVfrCDwJcEf5AVD3dRMz1BFYvVSjVmWG4T9sy5kdWwtpUBk499ncgv31kviMQgLc55",
  "key1": "62USQq7r6Le9UVheocJ4JKP3D3sjfe4kUy3kiDcmcVryFXLQK4umWWmjVxgSUTjh5s3gyruJoXCiUNcJxiwHopew",
  "key2": "bBdtdD6GNvLBtshgf7h9aEaq3iPU3AExnb12e9H5FD6tVionGgi9Zz9pikQdvKPxFkKiJbWG1onvay5ppam9YqU",
  "key3": "4eEtgcAowpGGGXu7uRhtdwDuZV1X5PHJ1kyGKqWx1vbio1FtYEQSjXAKJnsrVMsFZ6FsNwE2stHjFD9gKhpz3rYa",
  "key4": "5EJbhSgfqXgB4Q8Nr5LHqQD8oZWgAhXqKDja4tHrXKgCfR71FEsYQok5wgwMegFHYtXHz6z4VCJSYoe5JqQoh4RF",
  "key5": "2YTh3CyaqDZCsUNn1Neomu2ne465YZP8JqfuEa2tWL8GEZNr97e3bPk7CAnYKFZ3A4NSKkSFZqvsYpszcyPWMvvT",
  "key6": "53dcUJtBbQhn5gqKcatwWm7jFFiN8bWqp7wY9gJrfcVRc8rixaWWDixVuxy5MtJraCrrhgDDB9ewEVA1pnr4822x",
  "key7": "3yy5Y7fM6ZqsdmNz2zfnhXeRDYB2yqQAN6NjbXmajZ8JvpG5XH51ydjVVMyjFshG24Fscj9bNpY3JQqdHzavJ2eR",
  "key8": "R3vxKjAdJg1CNVSvgAg46RLFKTz7tkbVDsyyw354ZbfCbDURMCd3RaswB3pFA2qSxEw4xZjCD1FPrRi2YyeqFce",
  "key9": "86fVWJNSJMKn7YFTdAt5BDdyqbdMa8xnAEhhZRwFpN1t9hVdshvk7JeYFpPboAqH3u9LNHmna6rKptHyB58GaGw",
  "key10": "5m65AEii9UvgnQrNWCcJNcs8yEpvGqcWLBapgDQqZ9hqacLxhf9WXeZ2AAr9ygQpcu4wvi2tJnCpW2gVHDh5Ht9c",
  "key11": "4k49oWYRgp26TxkU1tJSu8tY4fgK1F9Ax5VBT9YUjnGU4fAoTQNSZsWsLDGwXTY15jhhrupyPS4RjuDFVhhFjRZM",
  "key12": "4aVVPs5r41kZyn5Ds87UxGtdWj4JGviLTNVsobK16Qdb7scqJFumGhxwKFtFiUdNbfijbt3rhPwwXato1ZetGCDb",
  "key13": "SC3WrnYmomusrBcB68wBoFQL4opnf6oAVQ4khW6USRm1666QzXQgY9nZBvE9ExJbom7HWP8jZWfbogh7zRbVja5",
  "key14": "usUMvSNb58WsGBLf7GhS2116exgiSnLQfVtpRdEHPwPgtNeW3kqMdavZsqUc6wCFrE3wtgBWUSGwDo8FTxaqcK7",
  "key15": "21mpV3FEvtyCRYEEN6DzyyXL37LTfSbk2iKwgXFRsBPrDPUkUMyBqjmVbvvNK7VT1LbRofS58WqjmiPCyajAmfG7",
  "key16": "1STFW11KQqZ5tMCR6FX1gaCJppDT2J5KPDreFfDn2DMX5fbsCbiXweSESzwnH7CYV2bToM5mbvMwGrjJCwVhb9o",
  "key17": "SkNVYG5PyfeRefdsRSTHFjXnh4TEMVziMiMw2gV9WdfWsNCW9CAgkj1XCcFgDaveRfNQQq6Et89nmCqvKPFmWmY",
  "key18": "3r1C1GcniSTV7qM1qWtToFovcucaB9vVinirMwnfAPoFvrDkE7Vsdoxh6RUASXTkgMmCwFR8jPYb5gR8AeRvbuc5",
  "key19": "5gyeYSP6hbECDJCuXhzR2XeNSRdtSGdwvggB3F5FRSo49yQJsyqKmheMeDFzqqDMmkQ2Tdn4YAdDCmTaifunUoXf",
  "key20": "41kCL9u6t9923Ntcoh7Bmzi4tNjfBEbC5Vdg4N6dDZ9NDF9K94etLRZcSUC8ENnZv4urWq6HgX73N7G36iHNnH7Q",
  "key21": "4wvqn1fS4U2HNUHRdaxQhzaVtvrsa3uGYQTKZaZJwVJzxggn5g6m1NvofFAASY5dd8ef3KwxspwzTJwAyEtY7m1v",
  "key22": "2MrGpvzypHMGxLEeqBdmPrvqgnYJuUVdhM1jjFPYHhnkwzfFQNRuUguEYtGxvAYea3vNx5fjg7wyUvvMK9SPGdvG",
  "key23": "3Sd2VjahweVGUZPU67TEUgcAfYXabAdYgr7fYEc2iB7Lz65Ks5NRjedff8j5SEC5gApvR6ez3j61sGztaErmPbLC",
  "key24": "4ZGEFPx8kH45KxrK9NsHDQFQBdE7MZqBt7zRrvjFzA3TKrEgXPNsvpT6x9qAp4REnk8C2btsvzyuVmb7cKYz4etB",
  "key25": "2j9v3kbQ8w4CrbA7LBrqejSG5eWwS8mz4gvLaJmhDintvxD3wHYsYY3iRYKcc8qPBUiuW4Y4e97BDPcjNr5CHBn4",
  "key26": "2K2vhEEM7x5ayVkGhFgbyWrwwoCWArHXPAbtF5mxuTrHzoSFisnrQiL2SeyR4vJM1fRUoj42AL8czXh3k6WZCx4G",
  "key27": "W9396zadifhQ5uJVh6GJmfwvvFaZyng4FkGFkUUyaV3w5P8XihPZhVK7Ajr9QmGL2zAUWhQXcCGZ6z5nhC8H7ML",
  "key28": "wNZYwuFfJgJgVG5Zutt5SWozDqMTx4XUba5WFxux7Pg7fewQJo2ercitXYp6q2dMaoKh5zwxBXpMS6YqaTpqjzE",
  "key29": "2PmULc4RzgjKXyVdvnv3myP7JNifzrHsNk1MakEbcwPaGAEM8hDkWn6C7bPRgXSg9U44XgVKkTphczYzJMGqvuvw",
  "key30": "NGXjgpewsA9RZMMwHKDq8HVpzWu4yBiVPU5crYwqzjZnfvnfStTVQhuSD7fjeJBc9s5DP7Uzo1cxeXyDSLasiCJ",
  "key31": "2L2JtEYuu2c4j9B6W1fKbvLVXoE6xVTTTsRFNgLrXn6UBvnYSFrMaaGnhdnFQqPBMKCpX7P2zGWyTag795msiZuX",
  "key32": "abHYZpyP5j7SsVM6hQdV9dVSgb9DuVEbQJfptzMpomzxLb5RyxVpj42om35ScHJBjkAEiE1dykukt4gdMx4HpLK",
  "key33": "3Ea6NhURe6R5z61nRtqBjeXj4F5db2h6GJWiPyktV6ng53p9EtjJHAkhV6bsgkNdFEtbAcjebZ2xAXNDNJfAienc",
  "key34": "4cuGRN9ETWdpoXRu5Zcbej9qbWR4RGKJjz5TD3cJTtk3qnZEDUP8YT2ycZVhpQ2SRVqMQaDq6vCRCgMBwQj3yhNp"
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
