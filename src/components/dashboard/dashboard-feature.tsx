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
    "pXFsPjhrf8J4nMoDDHCsrP2W6TRRdhTFE7pspoEfy5Cb19S4v4a811Ht2wBYzwBMt61J2zZbNoNoaVWRevNKGmM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VVetjy71gdV37fQftd8t4ua5gGSVoWm2yF7JwnyMpqYtkwmdzUjuD5QmE2urFus4RSqbehkd4JzQGfPcL3fBhsu",
  "key1": "gL1hDrzRcBgnyasApJoqBcHaHJDFrriG7nchTp1Y2KVGzhQveeXTxNNML8bK7bBMiPQC7Rqq7BZHSJGjpiPk7HK",
  "key2": "LRPcq2yNayHUVfNLV62HFfnsDZMu5EGpRexnVECnwno9YagAGt5BE1szcgcR6DdhY4DLXePtEi9VqnAAdRaLUL1",
  "key3": "3A2khSuMrqLJMkcvQCX67Fviybjvtp4qMtxMUc4u4BV2HkSt8Uh5ykV4A9GRdiWVBCVyBD2iRvQtgxHXcMGiaW5Q",
  "key4": "7DUmovcMDBuYMCzmNcSLz1jMdi1SR2rc72QkH4kxkNtH7n9FxR59s9NrNaMNNskAUCQvZAGhgRGrmFkRZvwLmEV",
  "key5": "wUEd2W4nBnkbwXRRfoSJfoUq1CUdjen7bk5aqtntM5uQuLW1CqTR5CazqnBLubwDxLGPpRzgCNWBb9GigwdnuuB",
  "key6": "2PVxaTwHw8d4ZuZRWB1nUKjkGgsSGPTPaojApES6kWxH1gBrL2wVhcWFutcEUtiTq4pqEtXV48a4p1ZmLHCK9DwX",
  "key7": "2UbwVGRiFNQ3gVFx5sVZXitt7KJqjNGBfAz18WNYiXkaxRuTEApJDgJYscQzDYtxFHBRhWQ68Re21ziiSRMGyP1x",
  "key8": "nVuh9LVWqYwNmEogKdXABDTweC3HZuZHwfSK6EwZgnPE5JFwdFWpcj85GD3CrHeBZezAhnatK2SBAUVYEuJBF3t",
  "key9": "2TvTv1VewWsiWxWbbABb21sBfVxNo8RhnF1ZWbEWFmxxALfVt6dfc94qXVEf5MEe2dVZYeBD8puyTYNSaScDXGx2",
  "key10": "gZSRmS8KV8UvEKhmboP8SVaz9mqyrbnT8BxK8K2338kgCNGZzRSSXusGHaWz5JPgk5Wz5QTo636nAriggg9kMRe",
  "key11": "49WGtD5NBNPc2qEcJuwwJFwVGivVKNw1iL4DqufAVRBUn8fiDitc66714dhw3qyAzQ6i6KfKH3779pSTrSTDWddr",
  "key12": "bgKzYSXaap2PWodpm83E6NRVHPopvHV7NTNgYLytHxboCyikFrjbXKZggQ8F4cPReAZTi8stEarS32oq7Fox6eC",
  "key13": "ssae4537tGvq6eBXvNBpwufhE1bYebC7xmZvxx3jdW5KoTHyxvMuWbcyfLZA52rBTC6F8pv99adyeueS2i1Bvbf",
  "key14": "4KJy6gBshckJBkapJ5oiRn5oa18wCSGhxVyer5wNAZFbJzb4bPiPKaPobAc58tJjVubbuVAjv5hpiu1iFwdAcerF",
  "key15": "5rLSgWfkM1hxxAzgWuitbXR11u1GkdiPtJaap2gGcdn9f9WYYSiXqgXmbKMmBvjvPSV4wvAteSMVs8ZSiUxRRVGb",
  "key16": "NjUsnW5FgSgFCVC3QxzXKqEES37QZVqujcCKQF8kK9EMTJdVQujJt53bmg3pYL7Jh6gp4zkTUdUcvgUvuQKcHhP",
  "key17": "2PMrTs6YawABLWzxcQ3YifjxAC3aJE68jSjcJXAHPQybUgEybQRcfjTVSrnEYY2P1ekXkAStbYwy4cZnCB6fVy7R",
  "key18": "3nB6HiSawGcnFpe9S4gVFgXMq264zCu8ZjgwYQ6v8FatkPCFEsov3mumfAzMnKjxkuhae5YRuUPLe5ZY6JbAnu6N",
  "key19": "55DSXHap2YXDNsFMRJU5uEPimn2g1bhCqoYq6q5JYUaya1qdSPd58LQQczZ8u4DGLu2gjUiFsQArDJhVviLPMZ7D",
  "key20": "SBzGfXYtgPYTyAWSDCisMfMKyhsinkG159SGXTqFeCG7zba176nqFBTk7huojHWZpfmzYMXqSXup9qDTzxX1H7a",
  "key21": "4nRfMHLU4Ac6SxGp31bBrEQx1yk81Fg26BVAk7MoAfNUA2V5CFwqKwnNGeNZbwuH9pVw6NztKmdQfa8WV7rMrES",
  "key22": "5EE6NG4fcmVSZQBsxmWxZJFNpTnAAJwymeSHbLXXqcYPMAMVv9SdAceNPNPPSHFfchjEvoGWjRWQVo2n29Lzc8xr",
  "key23": "5C3QTciRHbxWVHZZoPH3ZkFqu6LkgfXTdt1vBgZvCK1sm1bNGi5dQLcrFwe18GyYy1toAvksiGUNtLKMAMbd7Qqh",
  "key24": "2dQYoyD7vJRjwVAqWHJK1qiFr81D8rzDwneFLs3GfK3c4tzXEKKQ63MfAiM6BYMKDybu3EnBXtB9co8s6F6NDbY5"
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
