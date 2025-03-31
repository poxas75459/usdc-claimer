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
    "bqZPFSihf6zGjU3pS5f47PVBEDy3zjeE5dHJQq4MfFLzGu8qMN3zj5Def5SDWk9wBczdUde6QXPquM8noJu6RfT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wFvysq9FSNGfysES23m4U4YqM4eMDavtBvqTBGVtV1J4iSLTHGcVoJn48hkTAu6hPfC6pQZrSd4tpLuUPKG7QDT",
  "key1": "5RWeQLXBBfHteNKheXVnJSMjG8uYiesHEkjVsxtXePAeQHwLfzfV1XnrBXDE86tpDoncEhcsHUVTMhLHeNm2bjPR",
  "key2": "5j87wV1W8i3V5tqHjgkbixj12JWmFY1CmkGBsiidemqHNym9ALPqERd651WnNN1GeLkMewJjej8Td9dwUvDL5jTi",
  "key3": "2SpDFas3nQAcFWs5NXRJpkziR2Rq9AB6ceg4q6qxH534nWHawijHQFT17Uijn11EqwVsY6wNnuRUt7DyH66AG2SU",
  "key4": "4FuYKsSLEMfmvNLD1aU1DBz8tSePW1BWWPsDt1p7V5d3bnqa8i1LsFPxffrXdDd4N7zHeBfgrNb5i37x4TYggtEr",
  "key5": "3wmLwwxr4Zs3BAAkiCwbWWBvauoeQDUiVqjG9P1wCZhkjP8XGRCBvFiW8ZniPUsTkmHDEr2pRaDLBscAsVpkUuzo",
  "key6": "2JSMfCYQUXYkRGZP6idTa5VcRoNQBbyAMxufATXruowXiU6TETeozbd1w4a99ZD1ETqLEmEZ9B3aNkogCVRVoATh",
  "key7": "5PZCbDS79U1ve1HhhnB6UhiXuzjETsoX9eECPySwEWSrBjY4MMzJFMPe3Mi8tacV2JAB5XYwTAJDv1AAb5aX9HzA",
  "key8": "4TM3gufK6vpx1ef9tQjs2VaHiKVcmiFDvayXSEKdM1MY292fqYUJLzPsBbNpYcBzKNhPMsVxwJ7bYJ8r2zeFMp2V",
  "key9": "vKV8eC41JhxbRsHktzhSDAZUWYUwE1wnMDeGfUGEdxZX1BNdnvkChvvR9MMur7qQjC32pRosw5jp7XGqHTQXyA4",
  "key10": "2yB9ZBVi6aYttZaepkUPhhVjfFu2LFNq6FKHieNMSSJkQaiYHKag3HMzsi7JFib6j4yoPG1F3Cupf6iqGpkPRhmk",
  "key11": "5jpgn45NrBeZt3F9z1Pg5JcDtrmVH3RW9E5HBpgu3Z2wUpbHweA59nnpqcDfTNn7zBNpmL2D6EFqLxd78PLv5Lnt",
  "key12": "5QBMb31uhcPKnushr6obxD4ZRhNyQwU46tkPCZimJtEPvsvSQtRGRoG6m2ZudwUZUGkRg1Sr31qBiEGwTSpJifDM",
  "key13": "5Esvech1YY6BxLmmQbovFEtCSerjsryam2KpsxZykb7NBEuFSu371WeCAD18niwDgdJFyB4T9CgRDCNyMMGjT6c1",
  "key14": "4P9pskZ46yq9wnfDgRQYEDeZPkE9By9ajjMYdCdb8JDTiekpKJLb9eftPBs3XYwCDtYaGPtSpidFgS4GgDgH7t8z",
  "key15": "3B1cHzJRLUCUothccghjiLr5cqnhuX495jTQG8VCw6HJUX7XMyEScxmYPxGJsVZyT2vp6mSzENkHP9P1WGgnqMri",
  "key16": "5HviLVi18eWE2pQKLJvutbzgLov554mH1wzTQXgZfg6HSE7ZwGudp2Km1fbnUwCoRMx6fy3oUeNwzKF8ifMNuvVw",
  "key17": "5J8UC3iVt9ziLMPkm8jeeFXnvLofzP7Y66Chhg3LHD2KrkVtY3fvfGKJXPY1Nq9hpmGyxFfiVrwZnunRzG6M33sw",
  "key18": "4UwpREeEhmJHxVu8UW6tMT16tpAdexWzzgR1Cj9khft9CZ5D2Tso6GZ5C3aNGyxmMK2LpXFaT5d44j34FueShjqQ",
  "key19": "5ordTrBV56DcwKoM26MuzvVxk8E4CpkGq55CcPjwwtgVYRmr5CY38pH1Ux13gayRr1fqERxxXEWB8hVRV4QRDBGg",
  "key20": "2sSECvuo8Nugk2RNTumzNLEaysbDD5h9cZisoRJ1NP51e4qqmC61NquQWb8TE8f7R6LGNHHS9BeEMEAawSNcmb2B",
  "key21": "2CyBgL64ywBmxokjLoppL5EyfQhfC7eDLmWN5R7ob9jsLXuH5FMTcgznE7YCx1KATTvXoPtUepPwC1hUYsb4ke5j",
  "key22": "2kmRZittYmBQ6aaDWEuDYXAduHzbbGKXeLP63vP1pkHmckn8tN2y9D4KtSmVxotZCU3uVpYWyut2ajsehP9dE3qg",
  "key23": "4h7YfRyQVAC4yqBya6LT7Aj8o8R5j5omK2p52L1zb47orkpdT3ubNZFyJKwkT2vncrnwPPCW7kgLu2AgxfgcNiCt",
  "key24": "Syff6UoVs5MN3B8WkPc5GjSUvHG3g1D5DJUVmFHwNbZwzdxTRjeAP9ZH4LykX6aUNpX8RK6heeunwwzRLEGeWpi",
  "key25": "3ctYRjFAFpJUbTf6UPwpo2vs49L8H3vuCb4sSFAyF1MLYqQDoz2xxsVZVrtJNX79P9EkErEY1bxaak4GcHkd4JDs",
  "key26": "2v4sJQozqk1h6k6tqJwQhNdnFjxHvmmJJVLEiEbV2q3PZub5w1JzNF2Resi6DGspuXnVYNz9QdpfwASANWowYTPf",
  "key27": "3Aztg6pGXzgvuJNHcPuKmEJGvkv1a6bBs6oc4ne7wGoSP5cJGh9Ld6tfmoSDkVrAXqfxhda9eQTGXNwDuk66Fuki"
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
