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
    "2oj5fTi7uDtSdBwYR7wL138eCs3wh3Kf75chRAZETBCwKWBaTiVevNjHLQuyCdXDdZiwZ8zhw6ubD5BarxyP67U4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WsfGdR92eVj7yaZSFBz6uNdFLVtMJfUpNZvTeAa9AQovGLPgdU6taHH2JLppxHMUb7VtVceNmMYy6FEzkkKYwD9",
  "key1": "3X2sGbN6W615eE57Q5FdCwUd8HAxofYyt8BdYJRro1zz2TLzyAzopxY6iFx68JXtVwHzh9ARuaqzFV71eq9LHJ94",
  "key2": "5HAH58VkYvffEjAmDB5aip8rJeDu6GFqEeHX1243qkyabuaYVFooCGQTwfQxvaRCx8w8sPYsavmDMsW4VnHkv3Ba",
  "key3": "Qik6sWVYto4atxfodVFVbW8arvNyQ9pCkdsW9QTfUDSbLHJd4yTvzDh2ADtKfNAHskmdJSbwg7DyHZGvaE4CqEv",
  "key4": "aNufSENh4VyyuHaZegBPjQ4ZjogpjFXBTXtdmkGfAXFHRgXeezsYpHp1s1TCSVPfayH4zZJWjZY6ys9hdpgSkvJ",
  "key5": "3SpCMJCMPbL1yVQdLhqNfKYP748ba1Uc8QvpTgE7dRokdnaNiec7ivGQMUC3McQnKG7ibkkL7uYZ3FfdzZ94ctgt",
  "key6": "WH8gHVfkK5ZgBi2kbAzjRkDkbCeN114hT7kobUs2idgdqy1oxdu2n2WcxuFGBbBVFwwccWdXjpCqW52oTc3rUvC",
  "key7": "5fgCNcWWxVY2LX2NrQnY6WwCxdifsJe58B2XhQySJEfZMQa3Z5j9ZcSmixWHUcJ4RDX54jnZSWhyMMsuwJ2VCpWJ",
  "key8": "3Bt6vc91VNGGiubVJbi17tUSYfKoFxmzqFKP4Bw5E4HTRj26wFVu9NsEzSGNwjr5PH6Lyi6KLnB7T3ebEgzPhjY7",
  "key9": "268JWBU42VWNz3QBKRiKv7eiCe4uHYV888vrdoV3jdDuqVEQMJeZyE5RUVmxttE1ZXZ4NnWT88sLyESG8y1ybtCC",
  "key10": "8xx14pdgSkwdJyDeyk5aA7fZPf9WYEma7H7xkYJCsjMiAcm9f7iAyr6DmiDz8rDxLSczJ4boCtGU3MdeDUNKsK8",
  "key11": "4Je5NQG1G79nuZefCJJKiGW1VyjGgQrPgBYrqW7jDqufWYEqidnTMD1SSLvsZ9KvkJy4m42ACjQ8XXCxvtRKTzeQ",
  "key12": "66hq3GsiJ6HydAB79kvDVkXnQ1AD7u3Vs8oDtizMt5GbyhQg7Y6iUrD1N1pRC5aQCBbC9bcGVg5s9cPcmcEbtsDf",
  "key13": "3htHUDTsTskAJKbZSvuCatAZbwF1eqMXRcKusFp3KZ3AVVH5B7D9z89DpZQZa7XMWqm8Q7fwk54GHkp53FKUVsbb",
  "key14": "3ktu1VXwDzSPLMANa1DqKqhNh3jbTFisXjr1FU7wnJh65dYW4x6Duw7snUbxZgW3nyWgSZvDd2m2jcvMGXCzLxGW",
  "key15": "eoCpkpWF3qNq9beB3f5CTvLzPQY6NMGpT7vznoBDo15RjWRxjer9tgox7hgX7FsW53dRAPDmVTihvfQKy9LTT3f",
  "key16": "5sBgMQigEBaenopMFwno8vz2ys7JY6iPfzRgpZQHbSGSqmZCWdxwtXdAJTxtDikEoyjeYPT4mofuQgE5p3NJuKPi",
  "key17": "3ygozmrx5hjTBh2PXgGgEgZbtM9kQ7dhhS3mbVTLvmNR6o9Yt3XZWDNYtEc5dsdvZmcfhXy2teLBfkMjER8wfKWm",
  "key18": "5RoRMBfDjJgmcL95TxH8GkvpMCdSLDVy7BqjyTqFzzxe8dYc82AyjuXADeMiTsz7mqdfS7BHkRFJfAeQxogrmNGB",
  "key19": "2Y5CpBbdBHevAd8VRu13MdBxt7iBroLRVJxpjUCQto48N1Rr7wgFNENwcFVH87C7TTS3toZ63DfHTJKwWZHpXzVx",
  "key20": "5G1kpeytR7Tozquiuf6BcsyM7DDciCHVZeamJB3mVYECqKbzMu1pgmZdxnuimWwe16NAzpfzyo4gwvQpzVPX5SK4",
  "key21": "3LpbseDjkgPDjBxm3dEq2yWV82kKsJbeeYLaeSmxNsEZPgq8sHgZ9mSK8RrUR7jFR7aGagJGP5GAPwT5RQduRNci",
  "key22": "3FQTR3TpQYkNv6EDCUS4YQ6EQLntPHyX3SH5KuBVyQF9Tvo7HxcWqMuuVcXBF1oJ2EsgcAP3MWzfZ3GDRMV8cuoZ",
  "key23": "5xGo7y5CKE5denoYKvmZfHbsxHQ2Nc5fTm6jk4pmQhP9oy2VvJT3yNpTBnL59ypX1hnBD4xMTJJEqpj4td776nzD",
  "key24": "29oiyh4gv19DSy8V7PNMEtraf8kdcneWy6EfvipLdW4wWfLzdm1a3XcR4ji2qrbSEzkHZMZgDjifwbex8auke9wj",
  "key25": "2aL8ZoefoC1p4vHakg1xpQEsWRCE6sQY7ajYnNSGBbi9U5t2mLigpsbRPZ4zNK79DPQugpjK612PSxKCbJ61RvbL",
  "key26": "MzYUXkZ53D8MadymTCZsbikoBKWXa38c4RacokWNFapoYbiFwXQqtv3enKmucCpVBo4cXhCbUGu1ZJdUd1jo283",
  "key27": "2pffSCNFLHhjE3nCijMmi2y7tHLFtA8VXCZVbjA87v4utoUpFKJevD9Aue8StXXnJiPZTVyuxjFnE43ybav4HS7F"
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
