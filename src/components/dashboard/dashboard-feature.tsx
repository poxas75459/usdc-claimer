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
    "54dFizJUqAZkdrLhV9rc6ymfMFNy8R9Vx1cFrMzwnJ8b97FzeGeus3bCnEFFdxhNzLwqnjAvWqbKf9YZkxCxcgpN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yXZvt4WhTMrDwZuyVfeemg3Mp845PvCbMJ7QC3vZuVsBZFCAaSQTrZcQ1WjiXji2z9S9n1nmTZNSAbi1oxfY6WU",
  "key1": "3RyEZwDqNxCp7it8JYCresbSpUEnytEe5PHfY3eGoMN97247Jhk4W35En7wVptEfpnBEevnoaquTcEXthaEKEGKs",
  "key2": "2WikC7h5pPZBEEsKxBUUvK696T3Kr8i1f155MzPREaqmmJjUuEdJqW2qSrG5s29VymW1jx1wJEXsHmtsYYrHioKv",
  "key3": "2K5VWWBJYRpA3HCn6iXFJKY8SGTQvkV43hujY3QUEqEgzU3EDxLpq8rZPhvhEzckjaekT15WvZ2LQG8517CrusCi",
  "key4": "5gJnruUVsxp9tDkttnDgyzjKoWpDJy7EE3Wcs3Wt8AnP3Vnf3hxLNxDCLppZhdNhuELRgtr5jUSQckDYnuwsCA4w",
  "key5": "54ABWwmCeeaeokPPQa1egvNtfW3NPLpmWnyGWudfpZT86GiXi85J1KEPjNoYr8D6fXhb5H172zXiirb9s45wK6w4",
  "key6": "GFVqtrMGR1zt8rFsoEd91ofj6K6uBEYFjjvgUxVD3Y8jNceKHBn3MAh8vDPbNAhkRKVvVr8BWGwZrVMw2F1jKsw",
  "key7": "2vMhEgSQRk63fgSPKmRPzT7ujA6PFJjUpf6pwg6JZbHbYucwZ2icTemK6kKT9Wz2yxscZ1kkbgVjsGF8iHnHHkzH",
  "key8": "5hEyc3BuZBzFGMJjsiWcPXf7HWKj3GNaaNkQehRH8eTqNVE1XRt17Zac1b6tD7k6panXveejAfKRbekovjsdj4Lc",
  "key9": "4NhQDRqEyetqHtBaUXvqNoSGcgLt1kGPvjY9ZZmrkdibFG3Cdj4Hag1zJ5EhJERCeY1yPk6E1SzuEEUSyLDa9ctr",
  "key10": "41bXEuG98vd64QU6BeSF4BdsEBtDGbu2YZLr7fA8sKki6WHxSXoC2N3QKvHGkNuHdCunPdhm9Xdy2hNm9tmoe8CL",
  "key11": "4W24dhfUuFwv2TSGrExJb1eNG7EkBsV6gwX56oWvucwkKWUTKFfizFn79kL3UEt1MjLHBe4fzYjoDZCopGpwk2ee",
  "key12": "3e93hjvwNREVLAeZTHRPmaPfRn2SCBA9WkH9FZCjxjpgYXRuBtTifyYKmDDhmcJbi2xQjFTRqosedPH9rf7JCvzP",
  "key13": "5C1uDkJ8hY7PctKW9FDiYcNLNAmxgLdYAvSSbrHtDB3T7Bfo1L89PhvKnReJb7wDsjDRjoVFdUyrwHoV3Auguh7d",
  "key14": "4rBxKpFrazWRHeKzHkhm9yAyxJtgsLsLp5SnJVXky8PS7PE7yZG2SfhB5EKHi9nXcj2dHe7ADW5RVFK8PC7cVqVY",
  "key15": "3Hd1nUo3mPSsEP1RvTUNpCQZYGGguijFrCbHHJgEW5FKRLaECyiRfcsL9EQwYps2XRMNqcoHtHCCpqTWAgUUn2vQ",
  "key16": "4GVvzHrpq2X44hnbFbCifz9BzjABH2Fue2TTDkYzwBE4vuUda9AMuxULTwptYLv7BukJupB5kvV7HT8m7FodMbxJ",
  "key17": "414xatkqmDAR3A6ZLYrayGSbgMvxrDcmwrCSAXoy5fpDH64RpQbqrTu8yFzKBzRvfZqopDe2FyNwcxzRNYzLPiv4",
  "key18": "2eKXF2V7psnCT7U7zqwJkF1xRAQxudD4eQdGidMPrEZV8juaJRsqJoTmNmK4mc16THsDKtVP3jJTmBxQ8v3gQJm",
  "key19": "2XVj1rcb8Rnrb5LdvX6EvL1mkEWs4AaB5XCv12k9ipCoDA7ho72f1zRZXGJgJbw1CbFdbppNFnSWxMRmBkw1zUQQ",
  "key20": "4BiV9pQePSDyukdfnGKuNHkvV6SQQyeBB9HvP54HYGKFxkCX55gzMDRLh1wygoDagS8eb8NiiYEAbd89yLSR9p2t",
  "key21": "4iTrqy5B3pGNGxUvRpzHZqV8UM39Dgx5xgZfTeJZniuByam3ZNmuVQEAB83DbWYVuB3c7a7LrGcZgthKoCv7rE9Q",
  "key22": "43ALwHRq1RN5eBLHvtLBSx98i7FN4qbkwtMtJVPHouFZW1yJW5zZmTRvmWRA8F8VXoyoC4rTbkaFjps54h4FbdyW",
  "key23": "4LHwnerff45Xs7JyeBFgRtKmsPbCFRADZcSQMANGqr1vTH6ZiedtVrGnAMG94xHMvRVskNk9jeMKSkYbZBeU4DoU",
  "key24": "3UH5qJX4T1T6MWrCW18oJ5DuUmDRAomKyofb7RD1yJLwiCLGaXNkpS4M1kGJnhiKYh3Tq3pndm6sDBFZqtZ25DbG",
  "key25": "7pVaP2aoqWwPV5rBFeVUDx92qUZkgFkzmHUcFxkKzA5NEowRbLKL8MAcxGYEWzopMvUYjigCru9kn63bmYJNDnk",
  "key26": "5ru2DfE2DsGeLYKXqTL2DwLNa8ULTVW6xwGH4yxiD5m1NYPqSt9QsnMN3fwi4SoFp4dXbRxEVDR1iqFgX4N5dTZ",
  "key27": "4qoSf1fKu3N4nJzg4gyoi9fgvVUPeoSyMRydEnPJHbyA68i2dykDRSYXzvvuuHLohNZmkqopkbTFAi77xmBRfoRb",
  "key28": "3cM263zr1LJyq3qoy6s742F3sLfMi8kWtrite6VrtYU2z9EBWhvmCaLj8z71wQyYJHZYPzB6TeyzzFXFUa7WnH5y",
  "key29": "21juiBy2VkjGsde7XxzxxNrxFonXkyADiDzJGDBzJaGAHGwPCo7iWZGzR9ErXTZVUP7nmraZENAoqz74e9m8L5VP",
  "key30": "3235BDYLTCUPwRFffbfUCZQ8htbPqPAmN1MgCXvBQSwY7bfWsfqoT2VpEvgRnsz7m3MEHvwCs2oitmsjDpx8F23H",
  "key31": "327zyvBDvvxeqjKbbN4RvRUvMnLPHR9eVMhrSCv8JeqhK3UxaFgWTwAdpWdQgM9G2sM6qrY6oEqugUbW6ZdjH2TM",
  "key32": "xcSxuvjAEvWU5VV7diUJp743Jc7gyLQWtxQRKWtbrXcMhFBxrtzSMa1BxKJ14uL4dtb5TJDHG8vSLAs9cuE5TKh",
  "key33": "3Deb6vMqifXEAYWnb5hjLNSCY7wSLjNg1EXS2tWc8v7fPJEyPrFJpJNHg3jhrRtismKoeJwixHs1rDfPokAviJSu"
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
