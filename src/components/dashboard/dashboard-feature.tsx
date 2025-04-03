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
    "v8zGY5a1VyB2uFpTbDSzRhZdmTcL3i5VPmPXqH9sTH7K3ox52Mh6dfQHMxc7vv6uG6DnKu2PaFoHXB41Azqnon1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x8RWkiQq17jRZwZ79wbVHLaH6nFRS9Y1n3Np8kbNxqzuPg2BFpnjDvTydQ3qQ7nKG77Ew7ATGe4KArUqNkxHoyR",
  "key1": "bvMGYwY81PTnoBivzwjr8fmYGXV6c8UVXZ3dSrXuvxm2Q6LXLi7GMdzDvKFNBwRWkVRHjBMrfmu4ouuJanm26c1",
  "key2": "24tB6tBTBMUebypb5KXE2CRPqZhFTQ5FHFDEFofQrHknMduYVANJixTSxMVTW26JyJjzyh4zRM8Ee6h43TShvdQg",
  "key3": "2cm2m63w6B6s1bvPVpu5CpNhkPaE93jmDi4XW6hDASwXecdx9dQoJg55rErkVaiMmg4VXv2vFmDLwfCJKiGGjo9T",
  "key4": "2sdcsqidQ16HZuav7Yjfko8hHTpmPAFFLk3iJnPu5cPYFmGbBsQTwU2ogJwmwjrFv8QzbKpCgfwj4QmRA8ieDWMi",
  "key5": "oQo37gLtzjQU9tTF5hpnk8ZQFcASyaLaZMAshLWwvCisBtyKcCCRzKhsiFRzG8dU3PpNN4jqXYwbrQo6NVqDgjv",
  "key6": "2z7pTzA8QoP1ooKFjgcXaruN56AZ6F3LKtNVbfUXFwX3vHnrcKs9WTYhogLs7H1QHRkfDtLS9ChtpGLqEPris7Nh",
  "key7": "24iqFZZKv8LpjWUzFWkvcBJXyTeoeU3TKwcQghTEunLtF298eJGbYdNPp9Ms7SEfk1ZUpz4Gj4pqMY1KQ35RzgEu",
  "key8": "5v24pvkX7tyLRfQ5b55UN51eoGAA4fN4xACjxtEEEcjLQAgbBT13Wc4YAC6pq73deEapmi6Krbtt7bcBS2JCc1fx",
  "key9": "7tjkjHjwH3ZUT1hojuuoxPStwgpJiiN2P9jgJAUcXQtHW4W6xDro8osoVrHqv4yv3PfBN3aZXBRuqiKm4USucNS",
  "key10": "5s8iScJq2rZZjejzmHXNuyXkHyqq3atwCMC9tgCDPDASAQmuQ6KJSEnKYF3b6asP3PBbE2QvUzkwaF8j7sXdRCJf",
  "key11": "5N2soE13t2rtFc2yvfAf7Hbvcbsqqa1suLGSPRvmXpJ11idihEG7j3PfMFKFpE6Jd6mCLC2g87sr9EDYDFCaBsYs",
  "key12": "2YCrSFJdRKis8FVeNn88U8fNuEn1R89soDfnxHSorBwA8kK1iQv2vRfH613bHbiVUSiYDZuFxEc2z4i4csrqEvhd",
  "key13": "3m49B3TrXRVuydD8hArMt92EtFcg1K3wa6YCQE63QUuz47GKnP39vn9HfvBFUwkjAp7qP4QYmPrAkAqwJXB5mxSM",
  "key14": "2kP65QWuBvCp3BhYKzLargzH7HLFnQu59HxahyHNkkStgz6U2TjT2jP7kRGpwqkFnW49QsrH1W32qJa3PXYQ2pgx",
  "key15": "C1TQXYe8q61erxonasSq2ruJ37uXvNGC3ZMNpSiJd3Vayc5nZ6tNZwgdN3di5xtsPL2PdkYFbE9zSGLvQjeVawv",
  "key16": "3SbX5sooMuD3FUp5gCafRj6MKTraw9ZFckHtrpdAKtYfwXzHwHmNCdGWsA6PBUE1e8zzh6x7gtLpNY3zdPTX1pzb",
  "key17": "2Qw5vEo4dtQGxGmF5LE4YWzJhbFcXRhoU91ZELd8vMJ6hK58GfTUMZ8aArJENCSh4T4RRLxqZH2EC5EsxPiUuKD1",
  "key18": "2uiH5TekjtB49XqrHE1iAjDpssbvRaBso9Vi3KLUpVHLVzgEzEXDCANEdNaCLpqZyorE6QfBch1haFPw3tcJFqrN",
  "key19": "638prjbqgEPRRX7js1CVXWCYAR3YJt8TdRB1Qdpj2aNNLux2cRWhakzSWo9Hyd4tNQaBamuiuAXqs4sszNaqvzDP",
  "key20": "5JNCXQU3CVcvuWjDgqovkt3aLfEQDh9kSPojiRcG3MmF8P3cgKdA4GzcMTJfAgjiSujAeDQBU1dQWT2hmr7UY1dc",
  "key21": "z3j6G5t1keK36ybGedMd6ZFXJ8rGrJebDqiKMDqURSaHzdbMTWGeqhAR4TXnAWECNCqtRPiM5NibCkvMY4Y7qfP",
  "key22": "4cwqZ1wLc2iHe6Jwbrp2rpBvkdAJc7yMrvpzhRavPNB5p9PAyMTujVAQovmiCWnCQrXKZwo7aKi7UmZF59ZKdHrG",
  "key23": "3BWuw1enUUq75cReryBRryFZdkZ8UPdsXhkJxzWMWN9Uc2UAMgc7KQYhz1HVF6xwqdGDsd8tnEHvVTRLacub7U5z",
  "key24": "2tAVdMJRkYZPXQqzDSSLTFT5nSSBeYyC4bg3eTLDCGUDTvEDVFAuDEQqnikGo7euJyJsggV2uy8engPivLXjxpgK",
  "key25": "45CJ17fECVFnQuK4ejTL5HDVDtaULJiTJGWqfGpSFwHPNGR9E1GSmm9HmxCaFqEBM1aQzkCVn8ZGuHj8a6xbFaia",
  "key26": "v2xc8xRRu4jyA45qheziSyeSbE7qy8FRXErFVUQUbcaQquPcZJU1NWwaBe255uVZZq3ZSuvs7nUNkz7SGakkxkS",
  "key27": "3XFiqgZGy2hHPkGYtCS15ho4ybdq17VSakMD2jfRkgtVGzpWLzwek3QkMVsr8RByN9farHWvZgLH7LNaisAZQ9Ss",
  "key28": "5pj53fRF6LMQgwfUw5kv7VksA79jMzTz9VL99HhxNccpcCiiaCatFbYDbN37FnxuST33w7zKiqFrZSMbQ2Lbw8Uo",
  "key29": "rXLA3PTCJyDQBK9hcxR5SPBh9sxLwtKX6aqf9kTWXh8Y7ZqwAiyRDj52h1x9MuxVydjmRkzw46K147HY1a6w2wj",
  "key30": "crhQa6E9DvJBAyucn5uxPm6zBq6we4Ubv8VEfx3RfeYnoA7yd6GgrFe4bgxCQVrBMaMawsfP89yeQJXApX88Yp4",
  "key31": "3GcpLVKS7LdZvSFD88ok9F2Qf7z57hrDDvQwquJHibHzFgJ4JsyVXGyend5Gt8JNAVMtE1Jf5ppPxu7gSV1fSjVd",
  "key32": "5tY5DHT8572xxzuMWE8wKhFK7EcPqdRc9z2NQGTvFRRTvWQTFCEiaJqVdcoHNTJqEAdCS3PmveoD6e2g4teMo1x2",
  "key33": "miaN8aBAVMSd2hunHFadwQs2qhaEnsJpXJiYoYguVENwAQXoauLN9L5FTp8FuFZbt4TufhUHdzzpK6aZBv4zejn",
  "key34": "54GeiacYe61KJgpHihNJnquN4GVUprLsuzNAbaNdAkfkiQp9Vfgt7HYKyU3FdFXUTvN8CG1LL1bVnwt1G6cgJKPP"
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
