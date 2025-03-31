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
    "3WgXuVf2mibQ6dyb1fQbNEfQgVP4k3RyZRxYqEyr5Lcd37FT79ydkU3aL7UBDWKL3f6ouMnWHsTG5oMbmhNfPb8k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CzpDK3YjcLJUme2rgvWz6yaUWiACzinDVXce4PzGNtirUxRZ33uKbDmrhs5CCn55SfnLvey6vcxam2D1P4wPJYL",
  "key1": "4aeh7jGvi2QGmaVNtfL6SxBHjFmeEHGGideQmqB1qU5L74eVCvZkzmwczGHUQukYastt21LJi5ppxwXwkp1z4mb8",
  "key2": "2xK5tYYGiLJP1AFc75R4XHm7Uyf3nZefYJ4tuAxz4RYvbvifCZQ1ar2u89mcEgLa5EkaaPU9dFSWuKKtK8a1C3JN",
  "key3": "5ErQoinEER41KJuNUxn4qzbnUwLHFMBEBDao5yYvYw1aWgKEXappKdGs88NkWpet9KCdivucaRdDXvkD7Zbhi5nu",
  "key4": "4YGkwp7aVordBhrNFS1hdDiyKjcA9cj7zMhnoyeJLArdoQVkYRQMrUrKrZx76bv3rAMozgs5MH8jGLvHcRWkcp95",
  "key5": "MhMU6xpphLMXUc9VXi1mAMVpQZ6PYZvYRsyfpxfjr7KdAPRAS8FkQmUvELgkrN8wyuFvJiwAsaqq8T3umthsadr",
  "key6": "FJhX5GbnADqpgvG4U9YcXMgDKFX6D7KDBSwBPYKD1fLCERnrGR2xEVFwcP62byHq3xS8Jomg71pbh6RvnH9z7kf",
  "key7": "3bwyvfsqKjsGW7W7kh4p2HfuUGmVDdxFttTw4AyyVg8GPsguT7tGHfAz4BxB7SvaniiihxgLbB5p3FUNsg86cm8p",
  "key8": "4UGvVr6B488KXZNtxcuvCY5itiSXXBt64ySFzD9TbjvVg2R6GNWUMuH58afM5yDgqhWCzwn9wYkMBFcpUFMNe1Hm",
  "key9": "2tf3JTTHsXvY1FauRasHQeH2dnCavodhRtsB9ww3LhfvuRsfKz39834dfrUuCMm4kZoZhwKzJMzVUBqKzqL8Fu9k",
  "key10": "xK4RkXy6eZ5BwLZfZbZiLDSdrtTx95CYZLpYgnUsqEuJEy1PRJCLXXqhYyy5nDZ1p97TcWsu9sTWPxQVewTFBjT",
  "key11": "3Z8prxCXzQADVQhLTY9MbYj4D9rNBUNaQMyiecHFeJqBd769oEYyVZoog2gopMVmtGLJQSnMENJVc7FV5A8NWwq2",
  "key12": "3S4JfguuN1GNEZhv1hQeqo3shmft46QwxRdtnucRFKMDHEFnVnRhmz8iwSzuG3ZiZXpPwGwmXzspoDJu34JFSJxb",
  "key13": "3fKH8PtabPKfUXY8BmT6CU9PHxYAhzfCMW5weLmCuWZavYX9Ztzg4dCo8RYQhbY5DnM4m7BTHB6PGixtnjTdNLJa",
  "key14": "q5cRXSKf2kWz7V6Ydh68kwvH4yFpW2AukWs8soFbQJdtEVdawwkwL4b6aJexeFmTgRoHisQQ9gqXLGDw2YWU3oe",
  "key15": "2ncs3aQx3ZjUNvKWhgg49sNhmgWTKdEAVn9hhCAbKGe2K5jQrZTNZkVCF5WqUEnEYg3R17drfnhT9Ra44iyCo13o",
  "key16": "3kzGpWha1GDutsGsy2HZc3S9o7TPqPQF1V72VLe3GZeSh6UHiEoy5wtwpZZqddmoXhDYvPaqCAzyLLyesyKN2MGm",
  "key17": "2TJPAnyGTTWLV4voB8rCSo9YQPpY46goXjeHshy683Sg3vGo7MDwHg2zY2j1xcbXfQxHuDQMWJhpmhFajpExyp5b",
  "key18": "5Yv4D8XNGXcrYNzJW73LYYvg9h1HBgNA4HztmtsH46HghCQELWe41z4qPjvX5L5wJWBPQkbwGYyNHBHYabfR4Wmv",
  "key19": "inT96r9MiG4uu1YEar1FvmZRQFEE56eLe7FECUHiD28PgWruyzWfdDeX3X4h7THQPivJQHZMuiPVYhzhnGPr43o",
  "key20": "2wVkwvPSRYgAifoL28Ts7wfmsUGcqEdAPnfviopN7Mo2hQNcQ9RqvBzmf5H1skqSHAC17aBmaNhHo411xtmd7ZdQ",
  "key21": "fX3D7auQXDe3QbANwZpT1nJ2XYHEXFQP2xaEY2CoEEHKQL4UZKSWVaeriuFXZWmsQAPjtCB5ZvntZq4vRi5XPBz",
  "key22": "5Nj4SwzBuSb2zuNpTo9mXEBc5LUytC95FaryWk5SpvNkDTdrXfxNnFSkoBcKTejhPanAc4SjY4H8WkCrc53pLqXu",
  "key23": "4MMw9UhRXLqM47Gj6gRxLGTWRqLJWqsVrXNN1JHtCorBHvFhwuZFE4MqC49MkCVFYUUmhRLZJvJcPN1MD8pMw8Q9",
  "key24": "o3Y7QhWsKKnpS2D6YuLKVpXbWCR3bfPMtrkhABDurqK7FJ5RDjhVEJMY6YuQeheBbPKNXGE5fVTT1V32japuGop",
  "key25": "5cqYbSL995bWVEoFW8TPCEWXiVRwtyu2FkHvJ1rVYpaYRQ4co3ZYs9PjbZ9cAkLHRMXHHooG3USHRTyPVdd7SK5m",
  "key26": "3G52sRA1eWxrttB6ZSYooXnjjoib2i6tCfbs6Mhn1Ey13SAFF6hhWicG7cpn6gZAGQznZZ1UgJ73QtuAJ9d6Mmq4",
  "key27": "3EsM5gCzBQnGh8vGT6GZ34tmL25ArGYWuN5D1oHQpLn7gRoVUQWLqtySG4maRCe2etUdcAeT2ixBdznxgAuuiTiN",
  "key28": "36tH8mHEcJWmvihFMfSKsqpeeXZzVvx8QPPBGrZju84UjaqTKEa2mswWYCTS9xahWitXei4DSojfD4FZZ9v5UE6b",
  "key29": "2uxg3fvUSsGmf7VomcVb8N2z4mZV35UJgEHrofE9pjAHKykVWnnvES8JVVEy6hfNbxz9nDuoEuAa4sQEro74PJct",
  "key30": "5XDDsZTjY91NoCF3Yh9jiA2arhSe7ni1uGe4NUZXvNzeki2VxqL62cwcrYQxRVik2AUqgFqtde4QYkFaJJeWZBnz",
  "key31": "5HSYSqeQrXRXnVZTjSWHKEtWWxcgDGh522GiJoGXacuQCdXijrUa3E6A13rGx1ucJcmYFRXiW4YhtvAceoEconen"
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
