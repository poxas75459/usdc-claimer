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
    "WxoyF1gjcMQ7EwVXi43u24TaAszkxnsSMeW9GcWy6BkNyJNYLiSxyGb4BaraVwponaKAdZ6VqBpAgsLYTPntxSF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SuicUBaGsEeGiXV9Zp147LQMo4EuHaYDZ9ZoV3aVUgo6GNF1W2u7LqYs5VTuCEYENGfZBXiLDqDKU85ukZCqRgw",
  "key1": "5wx4tzRjZdmoVEtW1a7MhQ6LJbA2EejGp8agfc3TvNySxsFHunf3TB2Ngha7F6wed9esXp599h2brFiJPvxuhqFq",
  "key2": "55PXpNoMhnwJLjeyZUWbRHQSbis1adJtQKTcc1FRbtMCrjPdT9rV4pAdnuAAp7AMSfuk89UikjVEWqSBZsMYgUQH",
  "key3": "54awXW2BMKG925NBJeXLkVMVirRG8EktH6AnEANCBXBzXXHbdw1CYVSjZ6QgYfWcdGDty4Kd41TbbEzVWKj57M8x",
  "key4": "3nBkFiUHJMyizwQb1qhHmVeb1jameHhrxK31wxoMYBikmX44mkh4Yrn9VtMDtWx2e5JKMKMQ8i6UXByr5tdzefWE",
  "key5": "5w4VmYyywmhVc4nsYumMd9CAQU8Vjq7Jty3wHCRxHTLB7Pw83JBpy56ZXUCj6qo9SQfTsfN9ZNkdZ4S8s94ZJeQJ",
  "key6": "4QtB5vzYXH43i1sMJ1AzjcQFmp5SbRczA8p1e4JkJWo8Advw3K56UpXUz4gMw9JqHgRXr1L4z6m87C86Zf4WB69w",
  "key7": "3CvRRsNYVaMow9NzCvxeSqPDaeXn4wRns1yU5ofzxVGNQir2cfDMK5YyRtKGQnPFEXPfk4UefE2ou178VjV9qu7F",
  "key8": "4983PwS82F42xAdCgtKebQmbiQU9WiZSDnkEQ1nL48QpYBUv1vcn1V73G2Nx45uQrGGghW14CWurVRRik5aimY1Z",
  "key9": "2w3gV9so4NAVV8aZ9BdrwV6q5apLDnnWmLyXu2JbrGbX6cTzZJVp2kRfCwHwL8DvavZwX17aXwuRXhHtcT2zdWp3",
  "key10": "28hDTMtxAYsvYKCHk5mTA9LxgCQJxavW6Ahi6ZNkgzGnLiGXNTRTeEfy17prrwEWpcqjyrjxgSxjer9CjdTkhPt4",
  "key11": "5op7zgu8wQvvzBciVr5MHkApmG4aR5JNypvkT73xA6pWcQH7T8qnNsNEYibb5TUp3Ukt4eqnZVb6dYEog8TgzDtx",
  "key12": "3u3vfDNap77GeYPxPBeP1CtuSpeEwx82KL9reQ62f9YdirPNpisTerocvvKYqppZwk6S37GtSK1Sk1s2SAruc8UP",
  "key13": "4uExPxkbZUUZbKzUJNjmSQGz3FVYGent7K3fv41yfvmSZzJTke86uXM3MWsVVj4RmN7fCZEu6hLqDmiHYCXc41pe",
  "key14": "56JnpiSKmHZZYXBhHRZ3VU6fLJYWWa3Lza8FPr2Cz8yhWKH3tz9Dzpom7VunXDYr1VczGq1wWzJbJyNddP2My5AL",
  "key15": "4y6mwAbRKiX1fxmD54XSpMcDp7WNKLqEGnwYJAvXfbCuAgf7u21JF8VNhiQYpZxXsYfdNzTjQxvBynMyuNpTurWo",
  "key16": "24sgJPTdDeCyyYiXWnwrdE7ikz5ihUVdS1bwVQcPyXXmFagkkEe38Gs4K94boCSoP9G82iYsLk5uThgsTDk2dEbd",
  "key17": "5cNmfLSWYREi6Rjybs6iVCJw9qxJJqXfhykJCpgaoiWkh12yADCJC2ZFowB9sR8MspgfYF6tEhiLqVtP9xD58fma",
  "key18": "2fze8U9h2i4yhsVSzDQpd4V32G17e7aR55PUdCTjtstnaFzonA3m8zWaXe9JH3WdAAehMPdo1HYznXj5TBVxPtMH",
  "key19": "2p2y6FLxmt1co5GekUVK1WRXGAF8UEDLHbwDNaSLo7JEgq6eiMsU84cVi1GKzzVytfW1SmDvwR53rq6bjYv1Vp5k",
  "key20": "RPoJa9dVhxG5TPKBueMWfKmDYazqyRi8jjvDTvgNDuu2WoHq65qLU1tqY4C4JCVKzyFw6d5tERkBUis56Lzge8h",
  "key21": "5WBPtUbz7PpgB4meHEXAXsAGUkFjwetQkLPCdEMQhUHdHXUfcX7xfzMHwVUvkirHk32Pqdx8HMAbwmuP7Lb7XQ8F",
  "key22": "5pQWdt3zRYBHArP7vPBZJaT9T5j1AexSBETozL9y5ZXCdbGpTfPhmMyD4zbPXDfgDbdyEDe6oETMETSsWNaB7Lp",
  "key23": "3SFvcLrqUhTpAPZpjBJERP2DhFN4GLQf7D66suAAJRSaGUfzDbdnyzwNmHU83B6QqHudsm84GwKXpWBwwRFxwMYh",
  "key24": "22AHe1DSDWbFyPvYVV7HSW38AXW8oappbMhNqXHQ81KrWyeveVmM2XBwcv4Qg3ycdVuCawS1DU9YjLBBN9gDBd8s",
  "key25": "5viwHALEbPmKuD7nmBU2VngmpzDggTQedQFfRnz8SjJPhMSsB85hqEur9qiGhrahhwdn338Lp3s8ut72gaMhtbgU",
  "key26": "2QGVLkN4hcEqE7j2w9QZSbcwruskbzmSUs9YSukdzgehpR29mAbfznYVyw7JASpJAoQRH6nHGxvMNkJ5BK9DRnsE",
  "key27": "4PjMjcm4Yhx8MJhqxsgpz73godtUu8az8t21bcetKg4mWfTzHMe2FHY43tBw8a9o6kLWeC24Av5UqQsL6eHgah45",
  "key28": "2yFGbZuLxU9BmFeLeg9SdgofioAkpnwpKSVDxcXYm6UcVVcGR2Jn2T7kHU1qseHmqdCA3FBMhocUH1JhqB2K17xo",
  "key29": "2dj72pRPqK9TENG2AMUHE7YZkiannK9CqtjDSAFRNrjbvHqpCtwJy33sNGPsnE9sadUaurHPNmmn6WcU1AKonspT"
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
