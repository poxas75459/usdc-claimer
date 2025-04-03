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
    "5NckDWZoE38N3pv4tp2gBMgTCC5TgR96GZo5bNJvnRrrUvS5gNEbobJ8SpqtUqutcBGMWxGMrC8iQZzALKtWi8Xu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g1CnpmnmQf5XCEEbfnRAZSybfdNKGPgaqeCuNAobpuqXUkgPwfyapnqkeyeVffnwxZa4FfbnRQYMhkDdi9Rgdar",
  "key1": "3DmGE6wtEXWdYRGkGAPcgjFVZUND3G3uhsrUVVQrzd4MFJgTVBbh5DjrET7FFLiE3U8VwNpVzMNjMkcnmRZeqzp2",
  "key2": "kCXNmE99RGPmNn6sBy14um6krVcM9skL3fU5U7AU1Sxh8Boitoy5Nq4wjiZHRNSQzv2BaWcv81uXM83tFpxjXBe",
  "key3": "s3MZmQYZrbcoky1K98ck7mh8QLiQCyZW9f4HVvhUdTEFmPMjypjgNWVG4ghvSCbvJAMARKwbovzUS649KeCMGUT",
  "key4": "2h1XobjxBdnc13AfoWqEnCXPvTL4iMuF8d18A88EePThki4BRntKPeu3kofcZGKakGiXzn49RynzDZQaE29q7bKK",
  "key5": "2bkZVqY36KtSGong4sutxqasnZi1DzLbHCZUpR4UDy7yB9igvTc6t5qu6V6R4UmJdZ3RrSushfDJney15UcfWzFJ",
  "key6": "5Rp3ujuybQPTgymUCgi2vG52iHsN1ys5TK2prhz33KSMLdgsm5YQAUpjRCbmTbLPmTDNnXP94XwyYQYoeaXNGG3y",
  "key7": "4uoZbEtKNTQDzVdkzVTxTFzNLvDJ5BXatLnMXpuGencQbHyTo3jAsEp5V7d4xaigCgVo9PMuZgnzqegXHdunxPAF",
  "key8": "5VXhBwghoUiGbzgkhn9et19Anae4PcAi2r69iagj8YMxRaAeRvrsWjDW96v8PtiQ9favxj1s3Eb2LvaHCbKZ49AG",
  "key9": "58xtg5BrYKcSUmF4CeViQjWru7zyPh4jZcfGVc6H2NiHgBMAP543ZhPJ7B1vR7wacSM9uV3rEPAB5CGNGUYGQ2F2",
  "key10": "2hsR6QjMXFBw84PXNukwuQ9xAyM1YXJtsDLZDWERDpBTuyfeey5QVGpSL3VbiaLhmt3JbiHffZYLrPtfarxikqCT",
  "key11": "3X96FVdj21gQuUfvgAwTc39uZhnjKA1vdV4cQDm462neAsiNKtSQgPBSteyYz1hVRUEJXFSRpuTEYhCSYbB2p8Bf",
  "key12": "2t7M6ACs3mLAAQrKeKiZjUgwusFJ8B9VcwaYcmgSNniZYMSW9971cxVnqxhLmTRoH1ioyvRMvudXBfpq18qFe2k",
  "key13": "hzK9JGgaQ23orY7kvat9dVV5kpzEeSQ2zbxqcj3tZj1FWZsEdhHcppdcxLMaaVT7rvfVJ4tr5AWsvrVGB7QZg11",
  "key14": "2JD9Tnfk4GnAT2CwMvqmkZ9zJVeWXgmSLdypLSeqFq6jyKUoEPHPnD7k7QXCv66FfptF6aGQJptaZRazQrDgW1Cd",
  "key15": "3kq5p9mWSavfq4zbtxkjwBLq6dsdwUuTVHMBDccdbbk6SWDQzUhyLwsF1Z5P65jQDnLKk1xnFcXM95VW4p2EPkax",
  "key16": "sqdjQvTmbp7QcnvBeQ2noobrZ7kUP5w8ZEDCSYxfMqAWyxYCgjz74zkD2fAxmiky66N43p1GtBN8VZyf5mbfTey",
  "key17": "2vnvUfvTLVbjCANyBaGhXqr8BjY5mPrLTkeZpfpJSo1AZsfqggjJgXS9BPChNBSVKkEgR4fxhhxT4bVzd5j3faJF",
  "key18": "3LXSknbXZsC5uEDQnzL9FdNCEsM2Sgth9LV7zfktGH88Bp8NcGVao1kVu86XMdELpbnZ5aSu9zCajptNBUxSUdB5",
  "key19": "BA5af4r6HkEvQq5fiHSwEB2Qhvu2RCUuarnoqA3gNTmL8KujMksXntK3QzDcamg1BKebPio3LLBzJVGokmHB8tf",
  "key20": "5XH9TD2o9oJgHTfo2Gbre4Pky87oJAEz1mag3angsnyR8Z8YGZepByJno8Y31x4gJwK5NRUWFSZF6xRGu1P5hd9h",
  "key21": "2qdwgeBYN2bFAQb9e7EvWEjMQCNxrM6xRf9kMmwoxYCWmwSCUMcSSm29xB7qSv1jYM4owMohVwPWThZcGBBQX6n7",
  "key22": "jfRxG2GAAJiRE4veavahnHoNV2KbYGK7u1ZKKPK66AVPpShnKPenMCDCejpMHCTgQthbFcHVSTgexvMDEoKfE8t",
  "key23": "YR7Aq2j9HCgTNzxiXJfn9uPyR38BwJ1WFxAtZtL6xxJzX1mFrsA5UJj7T6yRbPukRYZPvr9JASEUryicmGY3qgY",
  "key24": "5hWyupLL8zbhtDjQCn4Bkk4PUnT3QHta6SYgbVG2TRwW3EzZH8zAwd7C43o85hHgDxBQXFh5PnBxSRQPcumhLs46",
  "key25": "3LuudLWnFNGJqTFa4GrnMttLeYm46QkY7YHXSxKwyyse3Um8zxsFoq7pV1DwjXdBkb4JStVvA8aoZDjBtFCDoEuu",
  "key26": "3j1gDjoRZx5nsBYy3Q7ZkmWHvUp6vAVww8WkteG7bKpHHUnLhvBrpX9CCKbwmtzjK8TuzvHJufFa4Ja6vyzVmgEg",
  "key27": "ye6odWfyaNbFaNXQaKqZuqTKVS8yCvBWHnVabQA7jG6KAadR5AbRrnBby98LgDVs5EN86mczRNBjLcNuV36gVNM",
  "key28": "26SZBAZxRALduhoBxwX85VDcdqvCnkgmNiypKAQ7N8BKf4nwjWVYttVeqEbe43LTU1qDVwU7k81x1K77F3ckaybp",
  "key29": "2nFyE2pGTvo4Py4F93B36WKzzVHbLTvPTa5W7Z7PHeCgP59m1F45xSnymWBbh3ciQcPgg5hkgHsJGeNsDVLSobSK",
  "key30": "2DF9179q52qxvzXLnsn1LKdwBaJM6snfrSqdCBHn6Kx9ooAQSMVWYexqGhYz4S9UQqYfimZeq9VRZmHCwuvjmMvz",
  "key31": "5dNz5MKUCEagC8CetFBNc8uy65MWuLBaJUD9bAW8tHZd2xz9jQaGK8RQgL5fZchLfKn4JG992QMXbmBcnX9qq1W3",
  "key32": "3HbEGGtsK3yU4oeL5o6Xvt4e5ubnmVGvi53K64BwBLvG8ngYQe3rCfG79moEQxdfc5f1VLDY6siRmj8r5gWK5WUG",
  "key33": "H8bEMTb2bESvRdMVjjEzRSwRxfXmS1J87GBpHsNXeHNXygFhFQrsvdhu1Hj5zC1VMAsr1aJXyp81vEtCUufhNGT",
  "key34": "51s5xR6DKyX3Xt4x7qh8BuBD3xPogdhng6cxqv2QQvfcX3TtwWiHqHq8g4K7zYqYfu38GkHfY56XHDscpjEwc9Ct",
  "key35": "5xJd6YnHTvWvsJG4miyqxdPvHj6efs2XXuQiYtuK29XWYurPLUyNKrHhjsCV9A8ArFPxVKXZJkbcgk8mdUWsoLdu",
  "key36": "4SUApJ68VotfLk9vc29ri3Lb3uNA5PPn1tXmLpUBoX7Qf3pFNjBh3SDY9qAczQEuASacugDGCtKaWFY2RciZdciv",
  "key37": "4xMm8Ne7pBU2txXdg62qG4G1UKQa7NJ97dHXZkyJRiNGnPpHmRybCdFuC4NduJ9YCKTi5if3aj6z5mEaEU8CWPdZ"
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
