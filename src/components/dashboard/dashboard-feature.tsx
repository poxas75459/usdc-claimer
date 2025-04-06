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
    "8JwSpvNnA38sdd1rRnJ3JFT9a48VKnRbTsdYsVCaX8rjRsP3ndDnbN5CiF8mv1jgiGqUwC3duxquvY2hjEk6HT9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ES73DfwMpgCvLxaLUPGX3cwTdrmX1N7Asuc63gEhkJh9dEbE4FKsRATco5pDz4kwysjqLUfbjDXMsmb51fCLh7S",
  "key1": "3axiD8wK9M23LC1vcJu2grrtPyGrsJSAJVeg2aDXWjHKq54C87MLfsB991B8WaA57XUnPrpPtVZ7LDJy1JXKqvj8",
  "key2": "41LNz9gjNxNBUgdCU2QJ7xTzQFMfPVzhv3e6LVwgNbqY1hX6pCCXwBTGiRgXgEYUWwHsv3wXUH1g1MnkggQE5UB5",
  "key3": "2PmY7QChEGacbML5727BbBddmPE8phoLS9mWEhxHxs9foXqnSdBvYGT8jxykhXavGQm2RrTVo5Vtq95nCvjqx7jZ",
  "key4": "2429CJC9aLhMqkP2uYoiNHJSjbuhYSpERzW2n2BBni4JPrHZTe22euVb58Vg32fyTB1FUEvuPc1nkYyvcEqn11Ly",
  "key5": "57pLrfPRoz6EtT2iExh5vHAeDs3LE8Tq4qVgtDqsJSiVCAxWvw6GLX9yXJ2xzNTYXNbN4bYJw7pouS2GvVtrVcxL",
  "key6": "49FF7kMqs6dkV1VYBDTYDv3qMBKSHuu1ojQ4AwqikWbnSts4Zrf2qaxUC7fUprrG5HnaGhGYwcGdKDQABKrnRaBZ",
  "key7": "5hm5XTzdEaYzeF7yetVoEoG25irXxgrgVfWgYqK9ENBmjkViVUvYaqwBSZz3ZLKC4Y2e1tXq4dkFu6wPLUePNYwb",
  "key8": "4J5ayByAcMr3BGXegsNWTDDK3UW9BjWH38e74X7XjzQqG8WQESoZ5SyqrDnWV91VrxrecXC2DKV6ZSmHzweFnX39",
  "key9": "62LFE3JXotqGoFTG3hL25qhMebDkohi78nXVjER5ne3U8Si4rs2DpdpyaWGYC6BuCwhqdJAn2wyoHVLYzd2eAWzc",
  "key10": "2QbVUKMBZ962y1Mvo9QTaWcQUNCmjWzkdRJ4zdwfe6EtSFpntXpyD9HhFSLugFAcpDwYircV4oE5WvbVHriKmTfw",
  "key11": "TzvQD74xVT1AcR2ig2x5prLpE84TxNCCxzLF4BuJhaXVrQjqHg2BB4z2Dv5nZNUTTkyXVoyhmcpeb3xHm1D75RR",
  "key12": "2JjfZgHejX7ZRpgKJiosU8St42QLgweGLHhpW92D8yE1hnYrwuGnh5rmTirXxWXrCmiftKVJnqFu8U6vXnzh1hBR",
  "key13": "3wQt6djMeVcXEsT1radcRwaR2XWeVS4vwe5BNJqrahHP31gMpPkF221VinPNAgfDGtVSvCJrRuGEGVLGffVMRpzf",
  "key14": "33RQ8WLgbrC1BDdXP865hGQTJ4gJTnKnUDbf8qEBFML4N3Z4XWxySeEGRCZSv4DjQm2VD6TPgfJuQURe3GRmUkKC",
  "key15": "66WsdNVncYPcrwHwMDSe7icFrkKR84ZPZY66v5e4JGz7S6gTEKXH2nwfn69HQpwAE7iEfqoGx9d7HdNwJWkbgjUn",
  "key16": "3fpSqNDBDwvrUeX5Gv9GRSCT1LChmXdp8mQNW7eVJT9zoNGApF8FX9PF2VAwbh6Z1NTBDfeGD4sb4WsEtvcjcWGU",
  "key17": "5MUuSzpazy8B78gGJDa3cBeE4XC2JTqa52YVsaEMPcsjKcNWqfMGiP5H7Gu6wYKCU9eTQfPRG5U9V119kKVBf6W5",
  "key18": "2pj5eRqoK4vkFgq9PGmhnitmGfRC2mvtzE5eBq6XpdvkNhFd28ATjC6Q77foAnimruZNRPVh8Pcme376or8pJPvL",
  "key19": "2ACBaJ2xEF6mRfQuPPDg74DxiWzzXkt4cwUUzrCR4XTsekeWsLHYvCQnmLALCAvWWZqE2U4X3xLL5TzUQNm2LPLg",
  "key20": "5eq6nmfetA8xVYRrve6gLQfDFbmcsxeTk5FvT5GAqS1mUXTv34jnN48UBZeL21CzsD9tTMFS6vrt7vZKUPSTcKdh",
  "key21": "GLUsTgcJ63BUL4qzU6tKfRFu1Ud4yHXbU17wDmBku3z49sTxhAfTaeDgpFEiVwwm6kAC5QmZ9PZTrZLdfzFEbKX",
  "key22": "3Ze18acdAq45hELPQALZAdoGmgAtEoecZcsRexaA8bEAFaYNaDFYf4Jq9kRE4yVynET4kgyA3T4cJAJfXunYPK5c",
  "key23": "4ACgJHdZEw2YWeCfWS1Vhu6Cizm4gEf8eKjjbMCsQAECfdxAaY2UAjf4MHuHvMriigLDq5Cu1A3kDepm1HtbTMjz",
  "key24": "4KeLr5tBTXfLqLVhGFXFnMNtczyG2sTNpYVQaP3ybvVZZ9bu9f7ZiAXLXgaQ5QNZvY2tmNDbMnBshRJk2Qz6Crdp",
  "key25": "5drGAcxAJTxU8pMRpdWttcyLDPnnTQkbbjU17JNFhuiE6qZuANdEMaUd1J7GHgxuVua5KQfXqDwxmVZZEEtzit2A",
  "key26": "5yNYQJq93E28Nnswzc14GWw1iCrtYbcP7mnFPbNS57pZVYnkBU9FULkkmfbcf8cFGicGVQeu6whtLXvpcHq1erqh",
  "key27": "4e5ttR33QcHXtGgeamcgjKmmiVy6mszwrY15jzh5NF7zMjyd9G1ccrtwt2XU3rWoYbiuFbck1ZqtaoYCcQA3wjCj",
  "key28": "nNLZN2nT36aix1mKucUgpsynJNJTwTgevocSudScitPof73KyyDK5zCS6nJijx8DavQaanf1MgTuYvSP7AcGNDj",
  "key29": "5CSXuiE2TFAaZxBrHMPS94ZRLJtfhtCevHHaVrXSQQGc6n7UW6DJEiBcyQh7s65oikRQTzLhN7yQ4L1VW9maEhKD",
  "key30": "56nivzX98GJWVHYyWn9Q7XW9VPqofDGEGaxRKDpp8vEshWfam6LvJA4Sg6YqJRWNwbL9hBcPEhLRvxVC78TawSua",
  "key31": "3ndZA4XijWSri278fw9w4kHfErECdQRohMDAXKZKq64fRpw245hYLffafjXBMsgeEMQkSwfGwdKqFrqjiD7pxxxt",
  "key32": "4QXYvsLFxw3oSrMP9Y7K6oxYqU12b6h1nheUe3CKY4eCiWcFbE3bhCLdKcoc84L32Z18Lf4tRtTcH9bW3VXJxtDR",
  "key33": "41nrhzDbWJNaSLgu5MKAMAzJapYPQfSTDRaHwjP5qAdMCC2JWgByXGPRL9U8iQeKishYbymr2ZiYkchM3xAzm8rH",
  "key34": "3wo7oqEfpNuJkx459qEBYUShXm84wGxy8zcpVwSJijJyLe9jyjp6NByP6BwKtnNAx6ZVzE2D1k66CdQujRn7itM7",
  "key35": "2PFbqZoDBbuVEkXX2aCqANF2M1RAsy1EVAnokNiNyMxrSxbmykBnMSHRQ6LqsF4sxcPR5xrM91tegrjnCop53WZt",
  "key36": "5HTCcsUd3xtzziqVeGfFJPcuRW4wjzuVasm6WW8D1WTMdvmScLxXsJ82t87ndHFvsKP99dVajeDg38q4tRoTiX3F",
  "key37": "SL5bwYg4b7yN8ueMHrfyvkEY8o27yvwyQgLBKUGDvcxULBHSjwdrvQM3YzpZonSKQFpM3jNSus7cmhxcrpmLw5F",
  "key38": "2YQRNqS1wG6su6CdffvMwLzJNJHkB1tKhyiabuLChrbywE8kmLfPWAP2hnnL9QgWy2tS6sGd1JYo8EGpsFSQX4zC"
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
