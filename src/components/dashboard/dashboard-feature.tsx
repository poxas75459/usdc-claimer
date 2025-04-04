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
    "2V46VzYmQpELJVD497SBEt5ABwbGgDvr4kGFaDbr5JLYDt88v5ZTxzEzZj6St2UzXF146yiepxDnPgsWbeyayyYr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V6nFqzMNLPXAMSd8HSCUk8Qg8fn5HoJ67dcL9Ljj7Aqaas5Ur9sjmSBmtc4voE7b23ZTH385SPT9bVnrD1Qexz4",
  "key1": "rfLYBR9qxGVoPUxvAAd1s4MDcBtAWsPjL5ZFFXg5DhUWskEy4F76uL9bN4Z1gpYT5R4LxvswcCjcpANhf79pxXh",
  "key2": "26WiFvmadVvBZhRucnDoDxhGMZsuWzRouaEfBZvt7i4e7c8psM3vagh5Av6q9nXJLoeiStrP2iEMUfWZ5cyNkL7z",
  "key3": "2GejfuLUkEhy4qHVr8kYySG91UShGes5vpseFtKXVyQhR6fc3y1WNT4fRL2rfBLZjYUFkr24nS6H7uFrP6HHBwJA",
  "key4": "4by4koT8MGq7fTY3n1FoG8koDuHGyAERGfd1ESWNWzFwYofaDaGi6ASsWRQ5NMQ11MaSomnyEbrAH3nt7HwUdfcv",
  "key5": "3hkT3ZWTsRHL2kGjXaaGBCSZe86jHS9dnLodxckN73fmtgafFzSBDppCNZXMLVpsdmW4n63t8Sg3odwLdcdH3pCG",
  "key6": "cdKWGsbCwxkCBEcoZGRMeMDTipbPdyaosQ1AFrCyANNHuFYSh2No42RfDF4n1kM8PChisSCbEDcsZYHQ3pHgC5Q",
  "key7": "4W9ofRiSPLdRZptRgtkFXtXHvDAo33w5xh7Mu39nKFxLi9oMQ5u2YnD3nVddTAaVF8fTJTMtNzCDY5e25TfJtize",
  "key8": "5voCPHxEs9yyNJKYyMbdNYKQ53jBAyXWjgYNHmaKuXELpoNipBt5pdrBdEPdkMg9t3ZkssyfVRbGWsadoirKfmYE",
  "key9": "2job5GRc1tAPhQqkHsiQGPPs5G5T1EVFb92GiTcS7CoEmmPcMs2URLX2CMFP3u38QWvzempLwKWx2xdKv881rXnU",
  "key10": "5FJ6vkfDVgpCLj2UiYm13mJa9XwNq2GQ8a1q1C82cuhsCczmnkkBzo7FYdNQzQVdaRYoECLFGSiU9oVi6d8x5Awg",
  "key11": "3TmHemPCvmgthW8JFEK7YytkqEKnb4pZqi9YGt9M8xpFo5HBuqRWAA2pXXq45rHwbYqyJce1bdxdrrfYPX5bhqdL",
  "key12": "3MgerUmwSYLXoThH37RXMWdm4Tz8bmiPNKV28ADf7FnLxU2PjXRxBfsrdAEmdng77ssV1ESeUQa9Sm4DkTFERgHx",
  "key13": "33fJYSiTSGLLLnRTbi3ufSDKfVuJGVBnXxMPRudrCbtWtMgYytyXCeLTak1JyTtZJEKyD5gQvjjiwtHHc47gaNVu",
  "key14": "4xf6SZdUjEaiAXF7QhytpNPSHaNPADsogkaBhQXyKxq1SuDA1iVyddNMKQ3R5mvRieMEQEiKovBGeZqDAqkCk6iD",
  "key15": "yXCuYhfE2RPzbGQyTJWeRL9Q5mvY4wAKJPMAdiPuWYCF7F8JFhFpPaM2FiW9yNqUJc6Y564ndZXeX2es66NFTTz",
  "key16": "2VMGetUcgVQZf8qzGGip4yciEed5B38kQfxUWyHEUbACGFnj7PMsmmo2LABKdqv1yGjiYNcvvrujxAdLhg3SBEtW",
  "key17": "57BcLVoYmGj7mJoueZ1pAwqoFqxNV4ZymEwPLAC8LvrAoVe377EuD4hYE3oaev4Ay1YiM7gSDoK8XeyaLTmW8z6V",
  "key18": "4vt6RCPF8isGdFcVrLggAo31LG29CsmpXoDQXGbjaJPhj1MBRo5QNh7WMWHgEBef4Upyn8Bj2ebJojoi7mvoSkuG",
  "key19": "44MziUq4sg8qFjNzosxMrTbi6joAksBMauU51ounbp2CPuZqFxUeu5m5Wq9zwhqc5pAL46K9UZi67WVcZvy8Hdfp",
  "key20": "2gzRkXD8qf4D8wsDmsmxLEzPsfBPjjvxjaGADCMuTKYsx8wp9ZKpPrW71bPKvovHEo1ZiPNpCUCdWxfmQB8wMjSv",
  "key21": "5hXnjLDZF1aGgd7q5UZj7A3jYHZUBwxcBYCVqgzx74mUerHQG1eUftm66Br3NEy73ZC9TdGPdVbtg2QVCaPSjtSZ",
  "key22": "3tDM5Z2vEbVsdrUKUvBWswoShs7RHYTVKJjNECtaphDpBmioQ9y7dzKzKHMfk4gka68gSsyuwVNXzTnjXxY1i4Kb",
  "key23": "3KiUQGoHT8F7ifUDAkPiSuC6uBg26HcxK4p191jKvHqdc2DXYr91cXKTfAvXM71wqhv9PtYtP8w2fqZecRCadgkT",
  "key24": "4L9xa3qKcY53N8rGYKNmNZFLSEHAx7b1KzSfkRwio9oBSPFLJcZUEMuaebRk9zYJf7KhrqRBkQWfxAkvJ732KmP2",
  "key25": "5D67SEzGJMiUzWjK8St2XdDF4cTc864cBJ4xYMWvv1wGuUfWy7PMsvjTRQftfrDbgvACv9B6ZXW1QczV4ESh7N4z"
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
