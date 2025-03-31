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
    "4dtHRhQt6VkLDYrCdoPuJrRHGFm8BjEEyPQjvUE9S2f7un6BaosGnkWyuwUq4Meue7piyTYZxG25qfrSau2sUMCH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wpyDiXHgtk5phgaFmhit6Bs5voUGSxJWiD4z13BQNJuKC7kLLRTyu3iHrf5yQrvTztoWjn4a9ZKgABhQX2TmKRF",
  "key1": "5BQUrK4CDoooqKtkfn3KN577rUbZK6ibEtDBGzxgFQALpDJpQnL5YXrr3F7T6FmArRHFQvWbjbf5TpqmxxV55asy",
  "key2": "2KDU72ityZgSxcHFpCYsouczqUS6jUjfX2zKZRudJdvSRvkSeB5f8Pdrhri19uR2DzYuWPoyfx83xeN634pizUeU",
  "key3": "4ohAvgMo6C6JKvEktvK5uYCNQoSzmp1Koc7r49K91eCZwkW44aPU3LZYG5MNDuvFTZyeXT2L9nog8HevdGsAvvuZ",
  "key4": "4mhKSeaysfiSMKowomacW7Zt4tJfawgRcJNekDKXwffUtKb8dSzQ2bML2GufxndhjvEGKmEhsyCv9aimLSUFxkpx",
  "key5": "2QTibpDJwhqDAMd8HWP5KPt1KmGpMpcASzW239MSx6t5aMLqkv8DJq4YTmApcdb7dCpuEorJWpU4ninQYsYPSVSo",
  "key6": "36uu1zX5ND9neZh2XgL5Mc61H4NbmDPQMnNXHV9v9JEYA9xfpgoPHVNSvsew7bwV8Wk54SyZ9EdigssjeEY9bMCu",
  "key7": "3n5WXqdT9AkLKq9BB4d6HEqpSbDyhw12ayd2CR66jGjGRG6rEf6otJvZGAvwGZqR7REhMNmNsmBrPTm4rjxPSmyD",
  "key8": "2gSveb3qjvrV48xcW72KTsdyevotFuFRRCfyHhqpowz48dWJLQpVh2nygoZdphW7JmTVzXXP62rC2YEVo5h2Vevr",
  "key9": "3MwzmGSK59mLKZMuW2oEPnDWFDMmbRqdzfPwETd3HUu3Wk4vNTVnUb43GmsLvLHumNL8bJnBVt5cYwW1bSosqKn6",
  "key10": "3diok6JEVfm4xvLrUrss7EwfZBCVA7Ah7KhvjjvgiFdYSth7BJQoAp5yE8dBVNFG6dc4kCdJPnnRcCYr578CA7hS",
  "key11": "5Pb8fVApERwoasuHbYeyVLRsv338iHYqJmSoTYsU1b8zUHpX76FU1wDjj1BPbHqfEjYZT3LhGbfKYdTDgmmxgAWt",
  "key12": "4PS1x7JZPEFS8AfDg5DERrKCqYjdQk8Th5vLqTiioYWF3WnRjzrJgoX3jfVTjegCp7Vh8a8ZwcQxEMo6Bw4KrGyL",
  "key13": "52nSrhAebr65zzy6mCVBCNmppTaefgPUSRWKDibWRrEmQyGkTUHHwc1wxJ5PVd35XFCGenZo1FxfMYtJvebbFP4E",
  "key14": "4muRPtnwKgW3ovyCqYoz4NvnYegSZKWkHuiYZM7HffGm5ZQD7CUdMQopKS79Mj9jqSTdkNLtnKnQ2AXP3atW4pbt",
  "key15": "aCn8f5EsVBmFdFq3RKzcRu5wMNK8ByBD5JcBHtVPW9ZTx23AyvwDrx51qmrgdc26unv7HBxGWKP8hR4WrqX9dd3",
  "key16": "E6BDzcRu7zFnSsWSnapEBT4VneXaKBnqEwnUyV844Pc6PieiaG4Pvk4bTE5hwpups3saccGCyBdSnzdhYqgtcok",
  "key17": "i1XLkHFvPfoPCU7mL11sF4tYKPnMhuXHDHDTLimKRDBELK8TciqEP8v5DRDTffTJCkbJ6uUUv2wGGtjJpbpdnDJ",
  "key18": "2HtkrnoggxBhbWjCLqZcpoVEuDEHuRTNZjkLbLnYCrYaoHMkTpYzCt91qD1GwMt3bD2LWNDf8i1u5rzDdUeiQAj1",
  "key19": "4depEpikemEySSYqGbQ5HzaeHqsMZ3jWZdGt8ZNcJLGfVSbkbjgdPsdBLz47Ksr6L1xVnzWj2UecBqwbsNSPyEsD",
  "key20": "5AAjkC5cVnkoSXaXFZNV7NrE6evs1frKht4mZJUA2eghSRvXH91hpZ5UuuB3ftcNEzw3yJTWpffhKUSNtfL14mBf",
  "key21": "4AiJdURhKDDLUPRPea52X5m9n17eRMZuXVZinPf8cebRkw3g8mj3srVGf21fDsXCYu2KWgKLaxggJoushxZzDCHW",
  "key22": "3dEUso9sESUJyMTybXRzXELQyB9jjThVpKDaoZpgXpTMPXrxZEdfaunyMdSmWM6bYMgExcEbBUHTduWaXkno1vRR",
  "key23": "CSZpRG34hLeAYrG64yoatzhiWv8mxvPyhBqrmKssDov5qmutLbUde3tv9xJVAnKqgetbaabDT6Jjs3RJxMCPuLj",
  "key24": "4VCXmojM5V6Wp8TrSWPng9rN3Jp9dB3AYWqUQvbeZrFaJV6aFDJkUoEgCAzGxVNNTPRPMnKoPTkVLA4ua27cswFz",
  "key25": "2hPnAGgN2rR9LMta8Yhh6BoS4fdXyrZemM5gZsBkFueFCnozyMyFDnjVZW1ZyiKcS9NqPLJ7DGyXm3HLgbB3Ket9",
  "key26": "2CgBaxoBrcFf3NqykKDQKfDWZGjKbTH3WWyEDrzaFQt9DJVxe3axKvmEG9JWJ7PKmr3ZzWQQit1G8J8f97uHhJ8h",
  "key27": "faMrRAKsUk4zxL6QCK5mFyzj88SikcdhQeDKwKbHmRGzZ7S6Xqv4jPE6NPsoKmoC9N89RDXpSxjgBbq5TWmcNgY",
  "key28": "VmsYmyyVBsx2FbZB1RZmKYhMg3aryDMJsZ9gz6BbV1XEHmZiSCso1SFuYn2yPCmicw6ZgQ2KACNSNZUB49rR7ZU",
  "key29": "3JNZ9SD5WjeftP49zkfsb9MP93URbu3irXWizeYi9MSCyWfBv71EKvFND46srPmDSszEGn7rqf5LVpnQCRpvfqPu",
  "key30": "4PJZNXt6u6vVLwKqSvbirFejZo8Ry4KfeFxa3gQY45NBcPFV8VybT3RycDX1ZcA8X8ZtCaTNEHhYXYGCaQauUD52",
  "key31": "5SiwNTytp7LiZ3UxnxrhKVrs5PcLhrmjQk7TvsRufVEmWN6qJ9oPUDBuJ3sMirZ81XksBHFGfZ1TAZwhcaKkGZij",
  "key32": "4CKaKZ2QzFgMSK9oSxwtZx6TNQPCbTfffoapVM9kTGVeAAkQjYhexSKtcC5xxTeYPPh97NMD4CammiQoFkVxbYeJ",
  "key33": "4ZNJNum5A1kZiut3W91SXc2BW9KSDbMbMKo4DzXyP7gnwnB8ne6MqCrqHnRJTicSVhhwaQHqvX6Zc8rn68dQ6UrL"
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
