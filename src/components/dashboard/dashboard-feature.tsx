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
    "4qkCTg1fMJ6a6QxJVVTNKv3YRaVJoZY3h6duL5EQhrhEQvHjbzyqVKXqVoHFWcgVSg5U7he5omr8JemMuwtjhNcD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VuvHTm1aFMgkifeDsEJRHVmZbcvmG878tmK21my775KvQVyZi6HwMgqMJPFAs6MD4EFpdqKbUTCT8VMgmrSrCpc",
  "key1": "5Yft7VsvwPRib68kPEcbiDqCDC5KBe1czQb6FF5rD4tQgyik2GpXRE5LUrDbMKRXEdLhqpacd4PXKUWiD8daTrdR",
  "key2": "5Eu6Gc75LcjMVCqxodVszJ5YEFBY4ojtHcZ5ua6K4SUX6DwXjZdTVWjjMwgqFDXgGKbALjoHVY393LsFaJ9fBcZD",
  "key3": "3BrBTG5q9BsFNGwiJ4Gto22w4nzQhMFt7bDwVkGN6F3yvLbLRULqKxv41nTLhJmJ1gTMp9TKvWgQycNNrwpCPGRV",
  "key4": "4iSDmF97sEi87JA1Usmm6at7SgC8q1FZtFMzDaN68qve6FbMTEyoZ3ZJ7i4pAZ5ZE43ffBrGbRxz4MpvioAZiVqi",
  "key5": "3kP7w6iV3FTxVymrUxRDo49XJ8zpK2XSqrUZqCmjzMrscfKwWTzVvpT19RiQdXW9K7WGWVA9RZLrhKZi6cPaJdY5",
  "key6": "UjjBqWBTEmjTkij24kdaUAdrgjZbFKjXuBFEgeY7piaPTNZDWdnzYbbmJ4Zv1SNeXDQEKws33iKinq9HgPhBcQV",
  "key7": "5GeqiKrxqe6fTXnfvEHdReqPtmURxt5hgHJnHQYQNvY9U4ydh4Z5mLiMr6YGhZ7mkiKZByQCBtNahvEh2YdU25wC",
  "key8": "52E5DJ3LoVaibePwUrGLjx1po7nAFki6hQfgUs2zKbLTdLT6nVEanaD997BEGSRZF7csTXdQ7pK13dkSV7yPSvzp",
  "key9": "rApy7WK9xFSiDEUKtSB3kwG5UB5LQbuJWQvdcDvqeEA98VCNwBSwzG9vewkHJzHtNncr5F5o2KNX4pqR7xzhTeg",
  "key10": "4thnVWte21utWDYdb2TJcaC1ybCi1e6MNdcWiBiLUuQkFwQEHSCdV17vgncAwxg6CSZ4E8nTTzpNJFSxWtXMp13G",
  "key11": "6CG5Du3gmy6c3v9f7VTpRfANzZ31QzKjmk7JzZCLPPNJBfK8jVxpgsGNeXPzVeDSEsT5ysKHbtMFRrqPSqUiKjA",
  "key12": "3jbRZaB1zLPmdL3xuo6xCSUgsBy5xA2w1r83dGUYFYVwuKKELwbVMhvRJS6sXFG5VRZGTPZiJq78986TYMBU6Kdn",
  "key13": "2kmzxiYeNpyCaaBr5JrtJ5EDBNTTzy728LRHiS9d5DThVUnMmKu72tm4CjyNHpGDPuKMQGRN4FUEs9DWy5Wp2dAw",
  "key14": "3fRgV5PgPGvufNysZPDVF135VJNRRqvfu6YCHVQRjBiwTPyD6eKnAqLB2Mzcp8RaG4aHrJKa1a7QPRJBKfnFnRu1",
  "key15": "N2GvQ811ZKNqCkJVBgKZBCyNBQX5pLCC7Vf75vRvsovHuZBysa79Bd5yuiM6nH4LwKu3wP5SfzxGBdwwK21h63t",
  "key16": "2eLXbptQLBt1eJ1b9P4vqMoxb4c9DGzfL1nKnRW4DNsYEEVdsHVyFSWctUf9gb4E4uyL6DdNytAV1oZYw4L7obWJ",
  "key17": "658o6APeetxHAX7wQCHQxvUd8nT977W9srE19H3DZfXtxEUakW5jFgT2KjxYCDSG37t82cwJwgJQnCkFFTmii1Sn",
  "key18": "57FiTedHGGSjZ9JxRWb7cCz5VwEzEEpHPb4n6bm1aHXrpA3VMQosdRggwumAFbLTGW4WQuZFuxr3ek8zCiHb8Dj2",
  "key19": "5gvhK3hfm8EacNMEAzhTvAVt59CvZ1pCA6WawhhfVmigKSJZBw2f1VRUQcBCn6r9PSJK21EEtWUqMK85aUfRcK3w",
  "key20": "2BMFQqChUWP6kBzRYEYrcPnk6qDPZrtZ47YXpraYmSbpw1vsUUxuNcv3iEFPK4MDhjtwDBr7ypE2PBHQQTd242zD",
  "key21": "4UoLGRNULvF9fAmwawqh9zmcPMyTB5D1TmhGz6VG7fibGF6py6XH1fD6eoimvebHAwKwvSo9c2RJ7AZBPBQwG57b",
  "key22": "63T7zdPv64vWGPFXqSpD2CYoyQ98uPTaLDZgpPMB5VZ4TuFHNuQJj2pfVgeN6hAn7hqJW44cabXXDPtyUMUD8bvf",
  "key23": "3W64hHYkWtMmF6N4ryKGGg79vKAbqNQdnQnSWqTt17oEzw9AVMVxPDXwxYRthkr3ybEdjfGxMdBxNUWt3gEJ4NXV",
  "key24": "4n8YV2cSUP6dvdPL9BD8Qso8wV43sywHZGzQnKhAHUB7AKevs3ZyHT8bsxQJkyjcfSCj9tyBbqZtVuHWiz3Gh71e",
  "key25": "3NcCEFPQZMXmxYGnST4ooPyQMcjLwStdnJX4BTJNTZvcYF1DdZHHcQajwqhM53WgWVvJhWc3j4sAhv8PwGoEFrn6",
  "key26": "3WXfRv7JA4CkL18z4Ya7oydSwcaRiLx5ovE82houV6dZ3osTWCadKJAiG1Et14Cvd7XkCqrzji5V8UmxdrEs3Zsz",
  "key27": "25xuQXcpzyjXCmdQS4jmASUtiWXb8tWZnrajvNsw8HRTq5eED87GamfrqAAQupVYRCYzRX2p2W3emVyvyH1MfsPR",
  "key28": "5BKsyn7Yv3xFbPM2KKFDrkFytJNsuchoNwxKXQhYR1AhRVkjPmJFqWsdd6cLLuqZmeLPr4gWYvDQVFNvSwWptpdg",
  "key29": "5hscq4KMNiG9cFFVaqC3tBoNQMUu3CLi6bxFMdhQL8kcRqAmkx2aao5CkxMiA8cxuS4vuxvZoKrNpFcpeJrTy8Wf",
  "key30": "2JtQvT2QDWHiw64rFaK9FWNoEkZ2Ma43FapsHYeBZPKo9MzFGeZ6ukX3Xo2uTj5kz1CNDNPetpGmjJUxYr44Ne92",
  "key31": "4Tewf4miXjv8PvAK3MJEURwdcVGEzfPntENJGjoiCe6Dd89ZYGgqahtmA2A9to5Q72o9PYQGNWQqCR8b8MpUq5Qy",
  "key32": "4mPLPLBobpWkuxX4rSGjZW7e9Xa7aZnXv152g5FrEhfWTNCGhtJSQQoxVp21LJgfBddwu4arLeBzBVXUTi3Zn4tH",
  "key33": "3s8qWsgYwGLcEA6TMLjZakx3jBEdskbPjBcUnqVjA9N2P3qzM7hyzvkWKfucLHgr6Ajq6bTHWk7hNxnMZQtsNJsn",
  "key34": "2yy5MN9vdFKEdHgAJnHc5d45zWYQ9kD3q6zyxJ5WE9j9okoMefTGWfGUVesmQddVcKK3ka3nvdk87X2rKppLhpDT",
  "key35": "4WPDjqcXnuSJBTm1pr9wPCnkUefPo7RGt5tq36J2oBAeizCZxJVJudFdGYwxTjDe95C5842WGy89SRg2q31ZMVMq",
  "key36": "2cQDWaUy9PeaMc7BH5ne8EyDqBbAnGphZGvm6eJmAcTgKjmgPdrs2oVFM4bc4yFyhcRF56ge5nXAPWs1pXJhf6FK"
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
