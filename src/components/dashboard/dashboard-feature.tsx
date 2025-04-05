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
    "4xwyGXSEEPBoJfitdj3FnnZMoh9SvDnK61CzouL5AoKCtj6vT77iLmy4VeB49iCLfgFLS3w2R7GyziiLacvw84BC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61LtvjQJhsybtSRgiXEE69GuhH7XZmMC4BeBxTvpFzpzs5bKuk74GznzsXv7EvoYnnvP17zaUUbPH68NpX8H1nwA",
  "key1": "2vabS7fYkAnG86joTeSY3sM4Yn4sJjrnqmZM5ghaJFHg94Ne3t1S3xhofj6gMz7Cd3B5vMacCroP6AoZCsubAH1h",
  "key2": "41owWWNFJn7DCdVMKmSwuoNpeC4RjWwtdJG1jSZLx6jtbPXQHXggJhhwwg2B6GQFpdsvYRcHkZLtyqB5NTJZ42Pj",
  "key3": "2wXUt5Kva63MarEmTQ478QMrH9VWw7PSX4n7XUXxRraoWiik8jqB45DUKuy3dMXMCr7Y9YrTYuFirANskUuaKuET",
  "key4": "EDoFjcFvkAYkURqQJmZwWcLsXLUFbikLsfDoVnaCWfeGVfdXr5BX9zct3yj4YmDQyDPU82WZeH6ezoz6p4nJDb4",
  "key5": "4mSqTnrfPxJwqvbyQzvL4tKSdhe2d8pAphpG9BD2m6RSH5MfB9H5bttx5AxsB7syEX4nNQwedfhMy9CbxMsBDXN4",
  "key6": "BB97jpGXcyjiaFe6CgLKuDSaKpMLGA346nWKGmQERcTtThyebtQC7jK6S6VkQWLmfwNSxsyDSKH2kdCj9fWUWB5",
  "key7": "4Lp6nyZbJnAEiWWdusUsxWZqEewf6Webq2wiW4ERqWnEBXiocK3YGvHXcaxjEZeJxxorLtaDrKBRzvzom87Q213Q",
  "key8": "3Btt4oGMLvHtDL8nuiTbNDBZMUBXe6fdZohcJkbcJqQD6kx4u2pE4pra7UJ53Yn5YLWCx2ixoPL2wtJ4GUeFMNwT",
  "key9": "3KduoVfpc2FW9VViPJaKQoX3wN8G8rHp8sAMVDNmZRfvQ9Ki25PKre15FfqhvBBZ4ALtfhZA9XjBs8JxyB4DDh7",
  "key10": "4mXcZYDyLp4uELNh3bQ5JVNv3GAccREWSDgN1UxN3g45Q7mT29r7iFnasfXpmLeeDokhwDYVwNz2rJoQtcnWBwJX",
  "key11": "2DRdkT4QW4Ff8cNN2ADPT2P2ceyc7iSfdVWCyKwAX5Cx95x3oQ8cspfh58eSfDEgcrHVGt89uqctnV3KSovfBt12",
  "key12": "5UQBW1iG8SFAyJmk6b1tbnUb581iWeDnf1rLXRvk146R5kYcRRq4PeKDMywYKVBpwxWJHri83V5to7FzYFF133j1",
  "key13": "4iUiDE81CqCsWxMFFP9b9XzSuKqCv5LZaC9omMvhxGLPX4nrAp8TDtAjJCNat9N1KeX4Zwwth1R6R2JgAC8X7sof",
  "key14": "5JregpcWezxVDRJwURqGDYUVSSSXLGHdcxyLvgYU9jUNMZcoMaAtbLEvmGXmAwgFc24KGND9B9F4c1pkmTKfehw4",
  "key15": "5R5Ee2xxpkrVF5kLWHhcyFjdGJ2oVd1XtCMibtGAsAeodnrXgV28isC4Y7zerut7q8tp9oC59iNPVzFHwzwgBPyu",
  "key16": "3z5utC9eMP63z6m8EYeeWWChYiEUFFUP7ki4mkgfTPN63KGukKwxEi1KSo24vz3HxJyJrbMBJS3qwMtAM44fHNMJ",
  "key17": "4x4dsRKbKK7pKmNZDQ1SBm4sR7aG3V6TjNVffdgdhuaHW7yiF7UmtWcuNRZjJVWnPZk2DcxwhSX46pY3uhbMaQnF",
  "key18": "2BqpfsANdgT1NaA9zhpSXahYqWzfqsVEnyCDhsFfhdygyRgHqJj3AiEePUVQDKaDWj5svsVBEm4Ai7geoDTjMMob",
  "key19": "2jJJpDVaRZF3mbpTKEm18jNTBoZRaRkc1NDtGxupJt8eKh2LaEV1TZ8QU8Mv3SE7KCyz73ZiuEpHp4DhjX3dAjYe",
  "key20": "222L1p6TmxHX6yegFzW14DA9QNi8wa5FKu5FdKBcPvPL9MzUFQz7hzyGVBvgj1tF71mD8uWRbjwYHw9AMwn4hUmM",
  "key21": "ej3hJYdHouGCZGJXA4WAxgDBzvoAUHjPfMLjPzx5p5YhU1618UtdHkvoeji1dYEfezUqJ5YXqxbRhUN16c5AZYB",
  "key22": "5ecTHXtZr4CyH47GY5FwZuRv8UKsrf6xWKRjcE39Wjmfa1LyvU26nbWRXTXjxkqMWNCYg5UucjN23qRDFgcHRsNm",
  "key23": "3dY5pSfpmLMj222dUMorbBp7WFqBNirMCSS9b115jMsJpozYAfQvetRtPdY5dqCS1TB3gZqiGXhn6XyQL2nKYUcg",
  "key24": "DKAVKZbZe1Kg95viLVrGf8WdNveRNY7Jwc8Y2LzCUjhuVL3GtQLHyWKPf4WRtChgxrEiZuAzJpnJo96WRMR6xkk",
  "key25": "2nLbkCbWfCVrZwq8ySC8x5hhKWkCHMueeGvu647zK1AXJPLxEjdtDLFgT1VVdckyQ3GHGKyDRxfer9rF8BgS6S15",
  "key26": "ytAe4C3y3MQtYDBG97BSu8sZXESehz2XoevRRv6wbbx7nYHVnXkfN1mjSxp53ruCbNMAkXiABzBaAGxoi14axy4",
  "key27": "4rDiZUxdbSePtGDq2M17HuUMpGANSrgmtjdQxN3DUe2q6SCQFrcQcfBcWp4UPZqC9sc7ZV5QWekt1dRTEe9u1Sd2",
  "key28": "3GSKJQpZRGMLhdCbtK39L6NmyKqgWtic8QF9cLhNGZ3RT4bGJSmH5wNvZLYa9kB9A6LtjZB358wGUzcESjb6Pn4r",
  "key29": "2kTk2V3NLxDkYizhcFQURoxTBPnbBWq4zUtGxjwU5u2qYDq9x9U2D1WqH1eNHiLCTLnQ35fps8hDx8HfAWhemu7Z",
  "key30": "22Vyp1aoXBZP3ossgJExZRbW8aqP9j7FgwEn4QjPXqA1euayATXXwVZWJCp5j44ytkgTLXPqaWmwWdkhnSDoSJLe",
  "key31": "2g5H3oDs5rPaeRiWL9b212SdjCZLipCf8hAQwRXS9aGzGPrDJCEA7N4YXr78oXj2SSJ5sv8C7vALuMjBaFrhNRc3",
  "key32": "2Z9kTTkPNHe9Rt5SuechiyZCP9Po47DeSiQLuPJtqjn9FAPdFxZ5ZUeLF4je7wsZ8uQXG3KnQpcNupNeXrYCybhW",
  "key33": "3bfd2fURnCQhEeF2S99j7EBt1znmcX3NPtq2nnMaUh2oFLDopF12wSJHnHJRdinmHCFNjq7mf4HBL9YshgGb2DSJ",
  "key34": "5Q29zuteiDsA4vX68dyVsBqNnudYAwkVEqxXfqGP8N1Jw8SzubF7Yruzwj6zjvqLxXHUgu9dbJQEdufZspojVgoX",
  "key35": "3DSHir5ct6fkY19SwszNUaZWwiptchAsyy8Q6yEHHGWpAquEMFhsWTMzhUpVAmQa5Hdf6MruRLra5wg58iSYYph5",
  "key36": "66ctiXnPe3NCs4cLS9Kkw57dQhx2nYVfPVFtYha4DSYvQVEgKsQKgHezkwtEFLFBAC4VuXN4gYbdzka9cGMMHUYH",
  "key37": "2XzjBGtsad9kT5pJemb7Xa1LNAajihhiHbjxKxra9oz75aaYuZsxnXZnHuppRwojoT1SN64NU6WWQ24LAUAWVK3u",
  "key38": "JTHZXxLQMrUqKuE1Uf69bMYhnTGKTKjumnY3J5uzQv4EJ2EXXosYmVd4wQm2mH1HFFRh2UmUNhQBVYnJTXMo9PL",
  "key39": "2fW9bwGgaqDLwv9uMHeB32J5Ve5aVK4BbBWkoY2HWTkuhHi19cSoQ5EacGdQbkhTcPuFpfJ161Fr1qHKibm1dtVv",
  "key40": "JxiUGtUwd1gugbBbTLAmSwjpgXR71vcvtKr6XqyPxaGznYgB87D6Df6gnbTGMFvRg8w5AjcUSozSXg3vYDtWUT1",
  "key41": "4q9mbB1Xao9cCQuTaamWnEhXKHSffrLCb95TJrGpMMaf4HZaW2WAB27P9ewka2iimfwH1R6ymjhdmnosdKPCDaDu",
  "key42": "3YvPyUyQgjMPRdyJtWQZre74DjZycbF3enqwtuwdisJ3XQgJJM8GApJ7ZeQBbEe6jRqdfdoM4kZPSFKrJYcqWBu6",
  "key43": "3RkvouknM7hUby3o9EMN3eCogJgk47ECWN4JHmeWKpBNn998LFcCQxgZVxV6pcShKJkZP8TVAhZ3pizkVcmvu3GA",
  "key44": "2v2FgqAVZ4QGLxeefAA7VNfhxCKhTzpxhbnyQK3iVGsXmh7uWeAeesPyHcvHpGbgY6UwzkqqSaBGnx94dS6uAPZT",
  "key45": "2EfXMzqJtJaja4k4ZaRQe6PbMkChGQEpTjLcGsqaWFVv1EZPUUMcvxNGqnGTAgVfWk9W1arc1cTeytJSbzdB6sxJ"
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
