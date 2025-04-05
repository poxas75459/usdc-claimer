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
    "3avZnbzXyUetMjLVC8NdoHivA8RdgubY9YZYVmzTGNQzSpNzgD43dZ2mKwgwNydoXt4EBmu7c1jNAjPwq1sHLAca"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SHUEiPq6sMDjcvuvXebQmyTUqwQnPeke8FvSbL9EdopTRQYmAddCSgWUTmoo446n7o8qBVQaTc7tDygXzGMb5Zq",
  "key1": "2Qjh9LKrHhMFyySNnwESr3SXj7TetaBeYDFdYqNa7gHX2qUaBgshrSkewiexK3FHMh1HMpYDdwFzzP1LTLDQ9CpV",
  "key2": "2Vq6iR7JQfAqqUTBvsxNjcPV1fUz2wiePRTQ8V83S1A3P2emcBi5QQ5KffsGgJW2XQJXHLTJZs1uwYWdZHDpL34T",
  "key3": "3hj1UbWgG2AGrE3M1VvhrnXGVxYANdAPvzEtHyCfdGjiVc4PN8MTvkkxvQ3LwJwvyPWJCpQtnLWyznfDWNnQpA2u",
  "key4": "3Lo9L87jc4uri7C6vtez278cWNuNyzcpZ67UagwTp2L3fFUUYerBHF3ajENL1tkNrr2QAcr9nAaTFojyDRB5UCpx",
  "key5": "2Vuop7G3j7GEgTqhXWDh7Fi9xsG8NHteXiemu5i8uBWpc4bA9ecv6zQpuGY2jd76ZVhufAub7DXAmkYT9TzVRBsd",
  "key6": "4rE5pZQsfKxNQWB8pHHtidZbSk1pe5ZtwGftup5Vus7hRJT1AhfGtjCD3cTi69VhfpSZwdFtRk4LbrFm7LxLD7Yw",
  "key7": "45evzRdPVkh2UQSXp78uUfmJFaSFZWbk8djsgwrXgTtVofo62FTaV8asVq8TAm4USg86gNEAEnc6mp5QF9ehLaDt",
  "key8": "26YHDgp3qJBNjaT4KjkgDGbppXgHanQNmWPmw8tMF6YwWuKBoMMBkmxM3bVtXXiDvV7Qbb98TD2wohaKfE9QTnCx",
  "key9": "2B4ppREGtJMQZTAVfcnNmrE7KPPbNHU76J4jDzMZaie8wSEuTKiMbuDpkoqG6ikVuNGDCkp79juw32sxDdSkiHH2",
  "key10": "M3hk6t3BJqiEhBgymiUAz61pJkPevabcbPKfo7GGUroXwRXrnuwmpUZT46fNxWEamioJrRZ9mpwQRGUHj3t83gL",
  "key11": "3jn9t2jprLDXLzZzoo2qvYvXFzcxeyUENc9UznWBbP9p5T2HnTUxiBETaLwFsTKUf9k9Us7JBMC1bXKQQ5Jjw1JJ",
  "key12": "vMMur8Yp7ZunPGsXv7YNbTQyc5QM2Kj2soW5Fw6gSkeGUjwL4A4MPXtmZ83nrw7ReWzQRnPTKfjTRKJ8umCYVVF",
  "key13": "3ucWX3JK5ivEQRXZVJ2y67paRmALk1ERk9iBzMjsji9jDHXMSZkfUKjxr3vPLWNyPzj7bGSWGGoop6YZjvC6dZvN",
  "key14": "RS2cCMzpT6nYZJQy7uxZHzSUqQFcNaikSG6bxhXPn4jt8bWmzz7uJ3asPFGzXsrVkcDgtKR4gEKyBP23e1YQswC",
  "key15": "4yd4P7THzHHbEEZmaWZKUbCxYvDfdWKEq5TLLTE4JfWRoWjnb5XVPLm1FGPSZmB6fXqxnojHKYJ78z22SSYka11A",
  "key16": "8VdJc4kHfXqkmPdRLbM78cRYcs3JV5cKby9DFo7xSnJap3zMFC74TjBFBcML69kyk6YNGj3VpU82YfnKcsyd8HT",
  "key17": "5cWyosE86pQjA2jLphKVcHoiqFBeWiuAZ1jsjMorJSmwgoigX63S69dcVQ54bbRZxKaJDmvhqi8dVeZGCZAg3NAB",
  "key18": "3QG4mJ4asNDukHA7ZDixJaKyV6sctbRvEDCPMWedfHACdmsTAXQ7LcC6Pcut8bYQodmYawbuDLR6X7hcmNtVYcZp",
  "key19": "W6h31y1N4bVdv1cDe11VsKk9Vy4pYdJJ7PAFbeNsSToSWgYm4tJBfFzVHHiuC8WT43yvdttfZNuqWexDBrrmkrz",
  "key20": "5sU6kKEnMRehMmtQ1P5radrqUcgqehcpyDt9bHzYW5G6czx15dbWvuTyfu72VCmvuiQTA4dFZ8ELnSjoVYh8NUYS",
  "key21": "5DQ7895ZMPy3DyumWgHVXAg8kb2QB4AJYa7KEfoPyPEGKp598s4pWzgDZ9yt6Fu2Rg4vVAFJqSyGQrLqy4NswggU",
  "key22": "3Y9sZFmg2BEMgJCwNjLtzX4qKsMPY1fnwyCLETpp5bwhrrKPJS276o6NX5KDdeRp1fRYHKPY3AG8LpPgHrJQHovX",
  "key23": "22yMDf8fjLb2AiR6crzJ7AkW4REFANttJFE7jbSha9Xg6nhmQ862XGEzdq6hmLtihWnwqhqckJuaM2BRg7L66UPr",
  "key24": "YAquZWYKHXvnURiWaDqrHTqHvz4PjtAPAh1GhMYX5FzTUYbaUTw3A7zt94cqtpxbdjv4Mr6nuCwiDXdHKSkNewb"
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
