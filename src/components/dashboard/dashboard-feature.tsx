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
    "2V62pV8HsPZKj7KNoi4nAqmU9hc5Qx8YQmgouhoUqyESALsfb8fsS7uuP2s7p7XteRGYJG3RiuEAzcAVr3nz2AYN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yCRmc3SqdJH3KnVz3ZvzKfaAgfVYQ2xa4wBMD1drSqvfdBcZnnmMtUBAejeCH2VYcjdjRgyimdA4Wt7smset4oN",
  "key1": "58yddPkWSs8mMq46DZN66CEtVq8k62GdxiWWF2iife72hyzM8UiRAkr6pz7sf8Xibs18WbqVE13beBpKMEgGRx7D",
  "key2": "BRF2RDwhAPxBsTffYHi61i5FuYwkCN4NX1NygBGt3WaJCGLsRbBFgiVjj8VWp1HnxWF3cn1kKyTrJY73kwoU4G2",
  "key3": "5BFYqvVBkNhbUKaBKMsVaB1TH4KnW6tgwjeAisijhwy8xPMFfijHhCZdn5oj9vMCeWF7kbVMsW1DUzEZbFw7g2nn",
  "key4": "2Sb4mmK3rujKgMcpusppBV9TKAMtHvcob1ugedmD3zye6G3tvBXGE3dswssmW8Lc4deY4kRJ6n8Xi8Bmz257pmyp",
  "key5": "3T8f1C8WMmo5Ly2tVZ8edzfhiwv7pdfujm34NT6mBVm27nCahNcxZdhpWsk2Cs3Gb4qh8MZtUbTCLq3uSq1j1KV5",
  "key6": "fsvKH6LwbSiPTNPxHcvpD5eg7JA9PoqiEydmNSzdBNkysDJkN9HbERHa1Mgckuqkfmgs96SSMecFuEgrR2yfxtW",
  "key7": "5HuuYzKoQDtbjV7jePyaMQCSayofRwz2zyPWty1SxsYfJPBkGDEJHNr6zxznpqqGqwgFmrFKqSWB4WfusidCqevn",
  "key8": "467hmvAbkKhkcqew67cW3V7weBKamruJ7haK8WijensmjRfBzdRGrMTFZ9H714m9AieHb8c4cX9S1SAWFPZkZHki",
  "key9": "4vRUYDUM1m8dWxmpuBVon7TfjCC5ftBX1s7zgFxA3C2TViZCyScq63D2oktLujGJDE4e9hwoFimcSoBfwhA3nC9h",
  "key10": "3mQFV5rN6VdzvueN3fcashovkKWVSzhR4RjWPxFU4nR7Van9x2fbjuTEjWx7SXXnNySPf9xbgzXsM57gCxrHg4sr",
  "key11": "3y1VR17TStiRxJCccjTajf24Lvu3SZmwtZyr6aVa99Ascb3YEYLL8B5AxUFYUP6SSCL3dNuAjv61vUspp7eTuaKf",
  "key12": "2Hd4JpsLTCMtNdFdFVBrGgR4vjkuNh5bbxbAPi63hL4VhaFyAvzLgskCy2JBYbCu1wDC7LDqEXrioNSzDoiJ27oL",
  "key13": "4RFQ4EtYjVJYX9ifjToqYB43wWvqwQCgrcLsfTMwc1XCTpw6DQaU3DntZhsA7a7JA23Ruz8tV3ohFXSw5GkGJhyh",
  "key14": "qA7E2ULCDS3RmuMttgYhp9qDPR133hC4ic3coSgTDgHTtU6KGGKHDV7koGqH8WcxCwCqHZC3jFGx9ixX4H2cCF6",
  "key15": "7c78sXaERpS45CAP4GvZ2uPydWERBTpmutXwBx8WUXnGAcV2uMMetsxYeVUXkgPAQCfjbic8GjhgvHh7Gn8StAt",
  "key16": "3G3VjjpYt9LxgdGCMLbc3t5zTiQWyMcXRzXV6frgHPRZXFW2dDqHH4i9XZj7iVDsK1kdVMmpcnYKD1vvuk6k9GY",
  "key17": "3KQFPjEYukW9P9kaQkE4n68CeYxebbrJxypEmL5MeQMk15wXKGXiUiYKDKJ9hHnZZUjVaEUS53mvDKLT1dB2SxkX",
  "key18": "3eFZxJoPkMSbT1AJuJFbZ8eSfRtdh4suySX2ypeCdBRxoPtYxKJG5dZRYgcR1CYALFUygQcfvEFrxyTXEeeHAJrF",
  "key19": "43VoiE2dk8PiBxCxbATtXoBfbenm7C3b3PFUQta5cGZPVsVUuK3BrjDNn4yBNpkFd5sGL9i1hsJUcPj8DtFQww4e",
  "key20": "2SJE7ExQxSKCAuZ7yu1DJL32yowip7WG7C11ZyLxfKtnuLopswDJymt5yRR6iWmmzsAG24MVApgj51sJxo6AXtoF",
  "key21": "3JNBuJWTNkFEN7Go1uTir5QfhMqvJsCAt839hw6LhKfBcYEQy1V9mwA3eCYPd9VnMMXtsaJ7FUPAKe8CHdKyzmTp",
  "key22": "2jyUmX8D58NPL3afDQki2CxcktsXXNcyj6AsWeKN7pV1XxX8v9JLQvTBCrQEeS15ZDgMtNyurs3Bo73km1KFMxpC",
  "key23": "5R4sBP9WPYWLU32rh4GwNRcJe4eSx6zKESzXAutZ4KcfojJe9WcLZ6scmxHkqX37NVbpN5Wg1uHWw63hQHuqoBdN",
  "key24": "3TxUnW6s5p6Co5JtKaqJKgaDwnv5VvPMEjXRwn64W74PCpupTV8df5XHHEKrdkpUhLLspp7TPc7fqBZu7yosh7qz",
  "key25": "HH1jLC4ARF83MWforruaKcNfPwZ8qg3qNLSWvviTURMYj5hJbT1xEAnth6B5CKESznhv1PZk4qhAKMQ7yw4tUwQ",
  "key26": "4Qj1EAj8xTkbdtKHFQYfzqzkEUGxxCStMLvR2PqANpKkuLznNoNq3f9kSi6Kvia71caRcSLcTsV5LiYCcWhFr21E",
  "key27": "4H2V6CF5qicTHy91ShrXTsKJaR42ZMY85GGb1pPMxchtaRiFh8BoiytjgQZF18tygwVjQSuBx57AM1LmoEynnomC",
  "key28": "2Ds5ZC4mUKKHNExPvP5UMdcbZ2ceMFADyaLP6T9fgKrTTS1mendQKVm8SHstJ7ZRUD1VKYQzg2Y5K6qmMx7vEeee",
  "key29": "4FY51vQ619qm4eL9Zb8KHjk5sgWZADMvDvWkAV9Jc14xB4U7ya4hS1F1WcBzhSH5e3eXZhePsr2t7cFEV34sC7MF",
  "key30": "3y6VqNQeWpJb8NGVw4oS8xmUJcuFMspumAEbZ3ghSUuwptG3wRqn5NRZYDTWLLrzXwKWwR2BLkMCWfoLwbTuFEyv",
  "key31": "JoMxbFgkV5X6FEdfmMHPhSb5yYZ46Phwk9zTFkV7uMQDUq3yB94VARmexwFzTyfBQXDMs4corn67LFXH66yXmza",
  "key32": "JzWf34kaDd4b9NzQzLLCtM2Sri2psq17pEQsXgrN8R86UDoyCga5TmpZpx3runimmzj3d7iUQZHMggCWy1RFVGi",
  "key33": "2pxDbndvqYWv1DPhmMA1rduph2bMzjczYZYe9Bt61NotoWKUv8hg698mSevz9owERYhMADNhmoZzVzr99Eu2GiR6",
  "key34": "3FbyrXhVyYYBSp5PdDnhFKEaYWwhr4DQTPpPtmkWLUCB3VXWKUBf4WJ3TyVSRYrv56vxuyC4MjHHMeAw18M1DXod",
  "key35": "4fLePLKPZjqMMcem8fuFfuCB7jPkPsTnC9DxVufhowCGwRjLAUrQGv3XtaFf1hWhc37PFMtHDS3G3t1mRN55xbgt",
  "key36": "eTvRjLMhCApd36py8pLPJ7wvYPt9PQ4d9F6H5sNKetBLZNTAcfUGXazJExF8GgPaJTrb13b7RWqjy2LnRPebNDb",
  "key37": "56wiUr3rdzFihijrY5QTU6JD7bC6haKZL7i8LVfDF2nNytT1AjUy91RcJ9FJTyDFxHpcWLZMB9Q8jKQ7AR99eUyo",
  "key38": "57Jrkqs4h4BLhUzcPoq6k8zaE6YK5ky7p4kM4SXbRNCiuYy6dWYtFcBYx44Hqg2r4nSCvVZrXoiKWqFKbKnapNc7",
  "key39": "5PuwoT96SGUnFWqSV41GLPiS2v5v7iy4E3JsF6HuNCVmYeC9jiyPyXWUVz4WhzWzQNT9s32qVWV6SQYC3xVhuu1R",
  "key40": "2t6bAWspD1XQQz9NtRF5YsGfAK2SXuzw8VM4XJGY59ggtyhPeKM2BARx52PGECrCsiRtZy2BkiqRCvHLm3akQuFB",
  "key41": "4p324bx4rBJR8WuNeJ2E74Q3buFRNvyqNnb4ZweJpdyFgXhUnVNU3EWd6gVtwFa4FCMFNDz58f2NaqNdauVAtke9",
  "key42": "26n5B42endpBLiDuUPwmsofDd1Z8r11T9cFAZRttJuxUc8fj72HhfgH6BsWSzxj9L673wLgeNMFn2GqF3iW1L6PB",
  "key43": "5qbj2MurQrER2oJDji9bAfiEwMmnApfXqtzFKmaDyjXUju9CFtZ6xRuJ4xCpgwtgFCxULSZVdtGvEd8bXTr2wLxK",
  "key44": "4wiQUrZqvhtJpVJxpDinA6YPnU1Tav3C15HkTCYKKynzX53wwQyTuoYX39zVvn6SzfUMMdT7fXeZtG7TVPS7PsBH",
  "key45": "4DsaL1QcTSUwjdkt1811uoeDU45n2qfkLDZAnCKzAkKLGj3xu1DyLz9VyRgA4W8LmkBRRBhgaQDbN1RombBPEicp"
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
