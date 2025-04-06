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
    "zsaCqsgRKrQa1QC1ngsSq541cUoV1kZXj9mbazF9KPCG48shxXNEwTomzwNW2YJmsGhSQBFdsR96UMie69N6GyR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MiV29aFHeUuzPPh8XCzAEcvpLtkoWE8LdSW4bG83WzbjDW5NmaApjSyGd2y7EWT3kREMgbWEXXp9pjPBZAUE9D6",
  "key1": "2ENFJvRXSQp26J4bgneqz4d1bz7URzWGwC5nzaNibpy4cq471V6t14JNxVXMijWRc2gKAPWW8pXwx6wbf3S1cfA",
  "key2": "2nf17ZnqpWaq9Csi24R4dEPiyy6eSdvk9CvMcPMdtTXt8ER7eKKa6F4xaMzWNTU1wNwwn9WK6TNFeBguSjQfEbt4",
  "key3": "sZfMnL49aa2U1PQQ4SeSGNbEHJt6CVk9qvnGYfwxJkpxJHkcHD17XpaVJ6YR3nrwtDVTEaaXwtzpPb8TmsrdiMH",
  "key4": "4PeC4KwpwnfWb3s9mQ2JQDbqwJFo56Xtd5cKhvXKKZBM62h4CVGYK51cnBckFguKgiBFxEAnKybopVp9kK7aVLfQ",
  "key5": "3tXr4zVC215QzWUZgf5eT1bCBA1sspjB6vHzEkF2tJ3W7gP66ud5QZqQNsDHhddqQB2eJ1fMRLisMgqdUVWu6g1c",
  "key6": "GH8dpnNM3ywaYmk7QKJV5Sfv2gC78xMroq3WC3xbAtfCnCGkB8bBC88G7gqEZtVCKYT1r9VKR4QHaNkQoEpatd7",
  "key7": "2osYYLiywvyVPHi81s9iyFTo4525Xau6PWK1TdvfNFZw2UNVyrLXEbBEw4Z2QmHgYJkoqSLUEWZH5S2Ym64AY1wB",
  "key8": "4UJM9v1XRS9drNstg5oXEtsuPnnMTVe5HbAZkp1SMRF2CCCAs1cmh8mMEszGxGcivXfaD5UMLuKE4AGywnzA4b4k",
  "key9": "4z5JDfji9CXPxMfydkpUxrBAFMYghQeun3Q5eM4bKXxMSeJMEwfEKYsmn2jsez6QxqmyV9meE44tiT37WQQATSuv",
  "key10": "41GqMf1gUrtcnRQgrEQB2xp4EPigFAxxWfBYkyJVc5Xe84Q82KA3dgcZrB2SapkF6WUnPM2b3vXxfoVKKM86BVcH",
  "key11": "V7sfunkfHkwUAM61nx2oFqp7sR8gWG8scP8tgYkQuoZHNgKDPoHWMExp5tpTDMZ1Yu7X4MWpq52hfKbViSXTAcU",
  "key12": "67in8px3bWswkjTEDgBM7gtPGmBxvFx2pdGhsJHrEEHKRZ1XNJMGVuNcCd6vhcNUCzR9sNx863vxbbJ11nWwDjdj",
  "key13": "3uxUY6CYGiCtLztRKPQz4W4rA8VfS5us1byAGXqqAPR42fD5gyNCRZNt4YWYgQKP51ifJxaeaQ83dXgYPxrJW7Yt",
  "key14": "3HMLrNFarGtMeQfdBm2DzkFBojSLJdeaMrc5qjTkxifoUKjLzyesvs2WR7Ed4Lcjz2peUy8aeZWUC3wqRiX14z8Y",
  "key15": "4DsRxnVV8MAJvZrfMw7w485VwDqD5D67j58FZxnseBVCgYReww3BQDT2CnFcsTx5YFmmeEuXEht9Y3Ut8BpvT1AE",
  "key16": "CA3z9U4tJ3ud2jF6i2C4ZPdoP5mSTsEgLd9EiQfnyavjq8qUv2hfwXteHT6pKKjm7QzpYzjRVsqUfR5VCRDEAtS",
  "key17": "35Gy65feJDtaNWBaUY29fMu5xGAfiMjwXnyrjVuwcLjZN2ixv7vRXfTYiZZEWK7GWhb7Zg3ADEdrHPHHwt9JoWK4",
  "key18": "2VchQwM8U2peB1hQ5XXAV4YGBjWgtSjaMYyU8U6Cqm3gLBfkhyvSokY9rW2NL6jLuSFdrvgwjSZho8PSBzSNufya",
  "key19": "3KJWwtmjkDCWUr38p2B1oTt9nBgjTs2UW4wtguRaJ4mC9ZAJyRPqUbSFexXBYkMDHcjPU3B1ZXC5DMptKcFq5GF8",
  "key20": "4U9ukpKVAc6UAJzPEtafnHnZFhRoqH3uKeruLZHoSPXtQ5oAm9yBg5gZ6YGC4NXFc8HWnYitPcqkCKmT47XHB2Ke",
  "key21": "3cGiQFEXmkkh8jinjvaLBqM5yiqHomU3KypXksPBiaEKs6FvzH1RsMRDZfkz8Py6qnDJEuhj56Y28mbdY4Zgm6tf",
  "key22": "2GwtkNXi5Hs6zpDNAkRfQumbgAi2zK8mQstX6ioVE9RDU4m9AAE6ku4yXwKfVv9R2ZP5TQn6QAbJ2rHY9qa8dabL",
  "key23": "4qKNHa3pyxuxStEqv9WabNs6gPvJW57rFtNJzGkFfkBW8Z6Cm8GW1GmrfsMX1XEhnD1cF2kPbL2zPHyZLz41XENK",
  "key24": "2Nh49Ngpt7iKAYePzQypD61rtvz6mLVTw1bFzkYoPnwDurtK7zFAKG5MEXAXfgZhNygMRWchejMgmojLhtAL8SHY",
  "key25": "2mpgNaoWF9D2cD8weqWztSL8N7ScqnbeEgYMj5zSHCSebzV7ioWjFxhBgcw5JRjGKTzLYtQqQU6veFNs8x2qcffi",
  "key26": "nNim49hkdkTZZH29kCXRK3vvuX8WDKiBZwWubK5A6VoaS6sG6gHjTYcuchzi33Sg9Djc9JMnaf58QgknbCHXDL9"
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
