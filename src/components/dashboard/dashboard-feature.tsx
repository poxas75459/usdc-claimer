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
    "ok6D56DfFBkZqePMK63ZD9CfsFPVYzemFmjWEhNX8itTgfCEbcmm538r7ncqcCwRCoyRY7rfsrFNvTy7iSiPikM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HQ8bv4uyx9XypN3L8AGumkrgPXbnoc21aFgjfr2yFvSr7Rjzx9Bp6GCMdxk8X5ZRWcBYd98DcWTUDp5JEkvpHVA",
  "key1": "2DhUoNSqWqvNBWUXfzpZBqV3kTwi36AMZiswpuFKnhNyvzchzLwUcKaY81CZDztMytDBcyUkF77WVMmrqogD57i7",
  "key2": "2ZpHQ6x5Nd7Xtwsc3VoeZbaQ3XCvCN9DBkrvfzDyygJXiE6716k95kaabBCGXG5mhMUqLZDWHKhyH3GfXfYERpuC",
  "key3": "122W4RYZ43fnASmCJ5gpvT75Hcxn5675shyPWFLa9Kh6qYN2ddf4E7xUzYpXqQva6wSRbEapF5wxTo5VEyxZR5V2",
  "key4": "2wojxvDB9cD7Am4N3UYmz4JoxCA59yvjsJ66hEMma9pbpyX4xVqy3tafxaEbo6JiPduSeT4rVXndMLMnrEVkYi2o",
  "key5": "4QvBdqaXEDGWCHwsqWkWmmiuDTjxr1kjHDwpmDPtzbsyDXQymQ5mhQju8XQ4qQHM2tdtfMBwzgNwURh8UnKLAJoZ",
  "key6": "toSDJXvC1UQ3Fr1JBudB9VaWd7ebYNC3x6Mo6HDN2uRfb9QfqKA7X8Y1ed5at68LXaYthcmAyQh2cbYcsq54mFM",
  "key7": "4u2DKyWg2eBBPE19xzhZ6BvmnVZs8GoejnVdDVEGDKwwMFdvoAimBXADTuxVMvFTD3bsXGT1FWgnfEwN2NM7dGjB",
  "key8": "3juMs3gKUs7vQcVFjbAziVNpKgqbzvGZKKiMtZjkf3YK3492qtVbEoxTCk77HCqTjhR4CMYUTPnfqvhgz9ngW1Sf",
  "key9": "2Vi64eFtzPNMo2NxvKVYZEuQgZEJmY7dFBn62FZnZ7wQAKZoUSqAe9cTJrfDqHYD8RTMipy2io6V4G1eArLMFH8u",
  "key10": "2pbG2yQNz1wUkdgMoBQH63tH5rjNJxKJuUkMWb6z1cSCA7qhYpBDF8tnMZCY2BVauUvFD88oJXL3FedvjapSEBTs",
  "key11": "4txZ46pDjysETdGYjBFqNaDVbG8tYZ28C2CkUbAH3EU1mskNhVLP1uUsScB1RXwtuTU2oJpfHXzw2ootCWfaw7Tq",
  "key12": "4Meyk4crGYJ3wfkwVAe4J8JFVAZYmA8UCneEtLyRju1USv1JercdvGfgY5u3PJTZGKPxjDdGbbmBFAjBT2wA9rMX",
  "key13": "3Vi48GgGWtqNjxjKaVHEPMZBeNtob3k8Q12KXxzoFwrG1qgSABG1iu3U76E7i76YuahmVLLFJPvRbtQTGPicpf5k",
  "key14": "5AgAe18ym197jMxYQMCYZ9xGYTZXBAYXJicSFHsyRe3z8w4yFebELs2BNwHnQ9Rhu7eFMTu7dLPYVNN9oxns9qPJ",
  "key15": "2orpSkThSwgitL9PrTa22wqQzG4Jc1W4H66vKj3RiMHLaGjuh4yCU8eVReS9EX825R7WcmbxMLfKeCZp2F8y2za8",
  "key16": "3vBaEb6jMbxiRnLnc4yfeLp2tzvMASfrBLce3tPYQ1fjtvu4iErybEQ2DqXaoTqs5VAxwPf3eWzsZ9pi5ePDx86E",
  "key17": "4YAzmBAXH1R29YbSWAL9CBT6PeicjqQ5ZWNj1s3LAdpp8rVRWBc3e7yyjx7yHruBZuyJcJof4K8JsHRBFXknMqoD",
  "key18": "BmCNyKYNQhj5AkkKdyJmo7TVAtLubVRgSNyf194byPB9ws8fk7nhmsin2TaY31XmrUYXsKmchpbmzhPVR17jLmD",
  "key19": "2EoWr6eHBWDw3qTpRSxpsmxgUbgxHDYfJsuLAmc1cnRdPHcstw6qK572da5hLXW8AyywJpT42wMA11isuR2fLL28",
  "key20": "4tm4CheejooWTswkyoGcVPGGjguKp8Q37P5zBFhke4FWWvZGSKeeHHm99iRhF9Kz3EPHB7516m7wzgHCT37SHVxL",
  "key21": "4KqMYjGaEpXnoYgvBFKd1irN2cSQkBAgPRvPYHuiwux8skPZRgkjSSRizMAZoAPAANP8th7optDgFQSBpD6LErAa",
  "key22": "6fRZJ291mA78QPmYTCq6YxQfZ9Nc3nz3W4ow9wGDLsAQrHSdTKX3oQVJ4YJciPimpUoM9tNJSoiZQ7t6C8pA4cc",
  "key23": "2PeDNyvEKVz8eLvsZnRhMyPNbCakrDnVG5gy4aLzAHNUyf5PrypQCL1nnFQkVTpMRazgqYjSeQTJSzZ3R66QrwVc",
  "key24": "2K9WmGexngyF4r7seZHY2ArmkWVvugDWcyTKxcMEsbb9PuT9DtxkKVWSYLQ3gcpvvFVeJDwzZJeW2diADyVuQepr",
  "key25": "2wEhSR9ff1axnbZHwAemdWMVoY9Aj5uDJ1S1rksUDndXPD6ZG79VZLGU2miidKhSfVM2bWHfM6hiDUhHAj6fF4jX",
  "key26": "dPWpjwwhU4Sq3hMaBx3twG6bF8HuqrYNLooTbktXD6zkvPWCEPwB75WnU2QuiT7H9kR3szoCqFoqqgaSUqVjjij",
  "key27": "5yETxggUcxwSZXADL249Yf69r3wBFPBt7he2Dx1tcTVEc9EbtYjdyK3vLvG8jhB4cfTUvokdsRyDcsDUwUnaNXC3"
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
