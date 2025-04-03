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
    "65NHQkHkk1kS8y9mXmn5rX6JkrAa5pPm7XVTwvQsQpKuA6W82fU9amaRQw3y4kBRTuxjAPYbWXuuvov6oVay9wf2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53pAkg3Aa9gd9ZVM8bDxfrcgbJ2NdK3MgecmSqm1ZfFHUKLSrVaCaZ3Cq45LibNhuUzGf5SD8ed84Yv8VjRQC7yg",
  "key1": "5qS8sF3nCGH7kTi4HvEDk8T83W8a6T7P6SQ9JQP6ho82kd28FDqJwfr8dBDkCdz67m1AR3pigoQNmatBJeyVEkd3",
  "key2": "2NF554rorwgVMpHWCqPCixijpYY7RbEbUwiYgUu9sBFm3uw7mjYqNGsFot9nQpvvLLPgQDMs5jjiCFBpBuRjXfwV",
  "key3": "3SXnbGpSjj137Q8ChYK8q43uRSPTYEbFAEHQapUxQ3D7EduodTvuAxRutKdPnNocUchkZzaipVbpmd2revNtfopj",
  "key4": "8vjMpma77kSM2QLwVFKgEnDGiBYcxLwAQKU5NKvWNPbf88mNstshwdhLNJWwooWz3PXSRXDM7Y7rVuxvNqRS9Px",
  "key5": "WZeq656w8CBUsvFeC4hH7HDvgw6K9Fiyck4MvQWf37UdM8LnbkfUjUiEHpFEyV1fAVrEo8SZghzV1GTVnHXUL81",
  "key6": "3SAkFmuPDWvJ4CLGsmoG9vMAY76CLGiSQ4Br5NzhH6S2NdrFkqvg8mf2Zv6Fd7EY6U7PSq6EB6p3xs5gfXnkP9RU",
  "key7": "4yaitRhj1jsrNBN5ZKxtLGZXz4NQiYoUk7mBP47thEC6V9CrxLiSLhSV4coEfpbg4H9Bo6eq7bNVWer8GbggFPz9",
  "key8": "3PZdhEtKrneWZViQTLxvv6FEuem6Dqq6jc3LXbBgRq7Ppe5EFQttwsgENXNdmwNC1D5RDPFaBZFpeJcYFNh9tz9C",
  "key9": "4NT7hCyCBgHfzEcFZx683hTCvqxbzRqSWZExkk9MYgNayp8eDJD5qS7PW5hbs8QhH98SAkhh3yELHdCVvjsuXeCp",
  "key10": "3tvm161ab72XvJLBhbNHwAKBeDXbU8AHGFF8uWDGDHy5fJMJ3KHq5gtiEyCriUqTF4ugDbUTBLK9pTffznfR1ELa",
  "key11": "23ZaFHDHwm369rAd4jtJdGJpM5x36XUoiE78veeiRYBZAQzEtsQ1NNTMcW4vRErHm8isxUshuYc1Yq1sXHR8jZkn",
  "key12": "34qpudnax3sjG9RjbG5pkavTaBGavq1vP17UC97ke4kZ8eH2KuiMw3V7TgiXFhg9syr9ekNqWcPoF1xPKFhzfWrA",
  "key13": "392gLTgRN2b2hdv2Ccwb7spmpjCinD6aDiQDJDtYVLaaMabyK6aVkGch6Z3mMn1AXmc3wbEfMCrxjY69tbptni2t",
  "key14": "Dgd2ZGcDQEGeGSexY2L7gkLapgXjeMqgLVAuQ5Mqf9XzpETHsenSoFb3SnkJ54vaG8VE3RSRVWMg4dfPn1xPXc2",
  "key15": "4KUP9yxfr4AgVVUtNjKXkNGUjQ1Pz7Qt9G5Wggm2Nx9N8Mv3Loy9CaWNLCfjU3k1LJQ9dJGRAGTEHhYTyoPSu7kv",
  "key16": "5mWcNe66TB7ut2poMZmUv3oUhRvTaKoRTHxiYz9STzcB3Wzn7ihVazktBmiCUCJ5PMGhdQRa5tiEaT4VQg9MLKb2",
  "key17": "3A3XWx8FeX5dsoHw4jswW75dfFNxa9Qgv7rREPJ3fwxtATYetuyMuZG4qkQhxHVHAs5LWAruac7nZi7MmED2Jvii",
  "key18": "3gvwnqdJa9ZoymbaX86aXjECHpUDuu28NpqoryAK7NF4jgnqu3WQSbV4ST8QnTb4wa9xE1qujTJvb6Ct1RjhwVkZ",
  "key19": "5arEC5rGPm6nf6drMznDFe45e5kKAwe2QXGHqHyRo7r1jUZ7VJAxzwbfLRL56SS2bkDFPeNF5UmVHE3iYKAcBswu",
  "key20": "3tvihoohgbFPveXfk9HFcEmXipswH3bV4MNNh1wyguguTjWv2SU7bLK8ipYoEp6cbnPti6nQhap9r6YWdgbbbuHi",
  "key21": "4p1jv7YDdbbzECM6iuwfRxDDM8qL8q9c1v7qGoz39bsonpyTLqKwPsydoSB5uhop2rvpGKdKK11epqmcerfqqgW7",
  "key22": "5AoYsiS2Mbfxuf87VSCfx7tWoM2ov8M2nFC5HzXx1gcazZBXZ2f3seVGmLTQxgWJbohTxbuLF8svdyU1KDxR2bvt",
  "key23": "4AwzZCr9R9GaFsnNeSiYHU5u4f7fJ9DYZRgKJx9nrTwpDXhd8HhFnxusuqmss5fHaJFQaDKSj1EDUNxry8RXkUVo",
  "key24": "VhtKMKGrwqn4rrjKFGVDwuFEnmgELD3SrAgvFYTRpfpjaJBBtXwCXeua9TJqnzZAWnzcMCQvP5mUu5W6XHjKdMd",
  "key25": "5LK52Co3jEwUR3L78Vgd8pdShnuLsbRkk123dixj2Uw6zin62LiMsNNR4AJbybbjYmSSjSHaCmkWCckSi1cbujFq"
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
