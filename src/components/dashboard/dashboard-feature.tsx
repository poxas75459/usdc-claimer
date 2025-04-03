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
    "4kMwetTPzGBdH75Rzmmryy7jyMiNYuN1MtWAYjihEMMgC6rPJvW6yhyp4XJ3WVFZEbBjc2EWSfXGA7vPxGKQNEfN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tMhsnGQ7yGK5WPJyVi3JLHGs3kzTQDSJRrs9mEFL97W74Jqc2iyBuVzbAEu53PKro67FRDmfjMjW53QE155FZy8",
  "key1": "3GeoZAVg9aaSAjLmiJ4hEQfAAH914bCnafUPyqsLxPizmaurMMQVwonYgMvVvB6TGJRHrVyjVjV7sUx1aohzmn5g",
  "key2": "5swJUkcy43RqvaeYH8g7xUT1kbkYqv9FaiYqA6BgTSitM9kvwkNsL9zb2tuqWkqiHBJXp8eY8Sd8ydo4C9Ufkoox",
  "key3": "2hgUNyxDQrsyeRkzugtcvSzo6YxryobPrjZ428eRKnuDPVeZzshdMMzGTptr4mcdNQ9WkLyitA8n8QcSjzBGnnVv",
  "key4": "3yJMvtEfhd6GUWMWLa841ZVmUM4QA7uvphLhFAh2qPZg7dWD5NLv5zYLKV2MqCubom25aCDS4HVvMaQa2LBhi21T",
  "key5": "3nmex5VrdtcBTpMH4uQVa7TKfUhWJC8Z9LxvkAwA9BwL5nkp1pNhJFXgWj9a5r9RNfmgaEkWxFj3y6A6kiQxz7B7",
  "key6": "3N7g7CJg83YSsjqwG6XGLWExM1HsjmjTGwbYowbMk7ecAMNn9xq4P8goyaLNEHyJTPtX5d6X8dPGS42GxVj1Bn7h",
  "key7": "3v43jzZyG4g1W7cXwNmKAyxpXvzoszqmKerdV5XLYN6FxzTrVLLCmKLCyxdoWxaevha847srYnMcM54V3EwzmFsC",
  "key8": "E3GyndriSAPWnfikv79qErtgyFLRUQ57CrNGCJAsdnnKgCmkBL8tkayrf4ziqoDWXpna3FQCEREGU1mwkZFYhit",
  "key9": "4aM8u3AZLWh6h1nH48anCC79iTNgrEY3wmXJL2Dp7Gef8xxqyXq7XrmRRDzocu1QqspzqVXssVEg44urPwwRtbbx",
  "key10": "5WZk3NoQJKvoW9L4njjbQpxmPapmXs87CWWPHkFxvSrKQGnsYH5UFC6cLQAkng4uWMZSKs6NyA9jNEBbmLAfW8sL",
  "key11": "4jUv6JNYFFHCFfU8EE3tXdwDwRZzB2rvvCMGfNvVFK3sC2gRjt5fESRV8qRWb9F45X7o29KZ1Zyt8o11DnyVX8yj",
  "key12": "2n5VH1Gacs58eZTWRZFLCHA12r8JuC9huuWSXtf145r6H2TcnGuhQcryqNRKfxgkgYRLbdpEWiDmePhBnpRUFRvt",
  "key13": "53Wjjb9owVyqPB2zMTjt86aW5JASpyjMirHHkB7ExgvfrTDDDM6muRgJPdxhuehuV9pZiDcBr2pUQxPqv2BsQB8Z",
  "key14": "NUQMrVy1F1Pgw8cYM7HuVJ2zCNPqMXXbbHbvYt5qC7njE6zSAqaxHzUStYj4GpbukhbD219xMmiu9YZvDBoFR88",
  "key15": "4z7QJyoVFKyjT89cVkegFoonhVCSwsdNCDGYGD2jRPHzC7AmecocqxzgTfXTGFsg4jhuvhjxJKFSAXgtwKSUuNSc",
  "key16": "3yYhfeEFqnPYZeYUVP7CEg4HW6gfkqC39sv9Sjd1Wvksa47bXMYALiuwPP5Ls7pRakVmTgZcWomTvahLvh2oC8vz",
  "key17": "3faxaHstM285LF4Z5d9daMEEqRAvgBa6fEM2RfJjrXvXbQAh6iuDoVNjZGuA9wbh4XGBWMkdMsjSZ8EQK4A7hov",
  "key18": "5gndxFyfkBDqkSodnrKFt9cCVeUhdEJowKY5DX2TMzgWBwLTWA3TLXcVqZSukKJnYpexfkkL79suBUwap8aGmpB6",
  "key19": "fd73cMpx69HsEnhrsJo7VNLyaKtZy73pW7jfL5b7wNM3XoEL7pv4Wr7AYKBE5Uj1XYZuU7jiPNmsj1shE3BG5KG",
  "key20": "2DmXRU311z7QiLtEMoPPUoXkjUMXmjLBoV2o3iW1jCMKDRwrQ9h7cL4FRhhBc31bd5EMWBzVUEzFu6aj5r3zxjRR",
  "key21": "fsdkF1mVcxRr7U2EzrZUa9bifiDmy5HvEjaB19kPFLatYr6GscXGsMmMNtGb1CLQU6GABZzTwToDNPWuQNUEgYt",
  "key22": "7tUEnyxRxxgi6tGcrCidjatm1uJMW7UZGoxd1Xdn5t4cXcJrtG2uhFJEkfMWjB6VjB2RRu18S6DWJbshjTmXQwH",
  "key23": "2tc84oESnkeWu8pJoTgpjmumFTNYtTbaucQK7LX6XnPaGtsS76odfeGsMUZCzgTZrQepfV6ud2xG1YXdAqCEV3Ce",
  "key24": "3oYMBdVTHNVpo6Lj2kCAAaFaLpTq7Bymp1rY7TZxjrTsPjRSxyxttv4WLzJHd45zNCbW3EWVsrgUgte4tCLo5EGA",
  "key25": "2kJ5svZhyJezXaiHiwp2FcKmzTSvfetr51u7sTFhH7JTXbYtiRaBTk8V3JaQZE5a1nd29FiWcJSmjzgKEqBaAkVs",
  "key26": "4m8ps8MQtWontdZvXqdcCrPWc5yqVB59Pi9Pb5dUySrdG5xrEaTRpY7uhK5dKiXEx1a59JfY3mrCezo6esbgs548",
  "key27": "33z2ZFgMgShgZXSw16bwJWiHuaUXwuZesVQ9jVwFr4YTqvJH9WY7gFiq4br6MsN8seXUhPMkPuTro5WbZ9Fcu3LZ",
  "key28": "4AnxjzyXQbUgVKnJ6zkpT8KHkMLGZvxe7dn5uHwL5jd449WignZv7u6mpWehD9293Tnx4mwFUf6FDzTaG26PpXZC",
  "key29": "46jNVGq1rbjfAMN5PH31hg97tYk1xhYxV3AyZTmLhTGhWJRMdj5n98kAwZKMCiav7FHVCCnwXHcPvZjknX6YXSNn",
  "key30": "3WdNZXh1orSj7byjDYk1TmUv2u1uQkeaExoMYQT3NmeH2sLfUPw3PAY5LWgnA5XcBRzYBJWUkgXBxX2EDnWBMMGY",
  "key31": "dbS3Etwo1WeiC2DxifzMTdc7G42FBj3BuJHyjHSvGoU3zR4wZs1CrZC2P7NHztgdx342xfyqtuhFKaAnrHKerrD",
  "key32": "4TLXjt65ycYw1PW46xFwYmjgQJFdePracsn9ZUnocLdD9mqZmMaQV8WvFXvV9SPNFe6AzbcX6WiAnA1jZrCqnUtX",
  "key33": "3GnnAD5Mu6RqfdLtPvh7GfYGvSMMwmrKiDL3MF3jJ7HMroLfVQes7QwW3tLLKuPxJLEXUcmCkBpksn2iq6zynbKR",
  "key34": "4VqiRqiUG78qJg9hTXF7LWpMmy2dsymfVTjRBMyCXQzMf4nvnBC9EpVV2HCUXrpFi4gxyMjj5Cch1nYoX6EQmzVB",
  "key35": "4pajYT1eZArjAbAQA5FayEr3dToRyfar2rPMtmAFxgLFgSbj8RCYuD84H71RtrtVqUxCjWQrvXRbgKvvvoPeTSgt",
  "key36": "Q8Lj99xMDyatNZxH9NP79yT4YwsmxPpbvRNNfPHWUxfEk5xqRtPTXbmeLDRSS1JwZLdcwL9nekFBJFRbrPk1sDe",
  "key37": "2TamBssL3d2afnb3Ufu1MEyiMyTC4YaUsWr5fLYV2WLVRfZGxqSDeTH1AXPEoNq8zXm4eRUPbBeebpxtQhPfDW8k",
  "key38": "2wpUWyXXfBnWjvXGW38sG3cH5bv6U1s3rtbE6USgpqhdeQ5WwgjueEuvaz6RgTBLVLLZBRU4JL3oxbJn6sRJmiY6",
  "key39": "4REVHYXQ31twBg1iM5FvDtGsD6MYWsiLz8e1xB6NehT3MBnU2TGHoLHAWFqn5bSuHiHzeiBJd5RHHXTuSUPpnSqC"
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
