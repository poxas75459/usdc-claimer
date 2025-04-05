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
    "5rGfVLyuZphNyvz4FomDp1cUB2U1kxDtvRsqioLFfrb2xisQ8UnV7FQNKuBEhHm6cnSyEMsgC8p3W1RSeBoD5yi5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4otgdMEdhpBh6pjpPEevzT11DU8BdwjLMfg8B5nVdTv3JDTdu9krHa45PMnKExXdKbDPTJdCmNVDdPF8haFyiSzF",
  "key1": "5hNkiwD1ktC7HRnev5AGbDs2Ltt32RhextD14EwHiziEWEXMQvVoUXs9467W4w7Nntkp7L9cqgmUF8QAHMRP1ty8",
  "key2": "3zL2MJqLcm7YPne5MmrhL3v8qQC2pHbaaPuFTjPAd7fjX21g3DMSkKLFYHeHsp2vnAXj4o7MuS1FNrcpnBeQMp84",
  "key3": "4q3f6nz44acBxm7M6m3F5EPgNGorFn7eQsrL19Hr3a2dka3ZeEP2qDVpiJhgtHT5MRwVYepgpeTK5ZQjzHvJjNpA",
  "key4": "3JczFcoMjS32Zc7PqZbsbaW1pQ2CwrhkLKem6TvGSg7t4DiNGADC87LZTttPv1B2FrKvS5qevzEptCiC3g2cCrdK",
  "key5": "2kNainFQeMjGwqGiHMNEj796FYj2aq7f8NrDBHo8UUQnnuydBaEfkttW8bCfN4XfM3sSLeEuNmNsjeGKmGQ4wVho",
  "key6": "g4PfHew2pukrE2ibKt1hj5GHt5o3NuFAzGYZzzLz5RoViXXnUQobTUmgYVwhVT9sG6AyXiv9rDdgChVVfJRf2gS",
  "key7": "5twkr42KLkPBYeYzVxNCmzsj5jRWAbWnM2D2V6MuViiijyQv42wQQMLQtXqonsApC2oya3ZBTLkWYPwwKmW57762",
  "key8": "Dcbc82UaVKT2wfjgnTShTnxr3wr4qahak1vz6zQ9yX7BueuUiECwdjATqGFZ4hTzrHae16EFbdtwWzVqJ1AKVVy",
  "key9": "2en2PpzPE7WANfTNRm2RbirGoJJGKZAKwTm5k3gRFXa6SQu1D7cxjxqdSHu2aGoDSjV3da3QAfjdeEUf4N58uf71",
  "key10": "3vPcQqXo5cL9XGkz4TR5FfAKCjkr5mRCSVJtH8jEjW4kNUR81nkBLzmiRHwXRewoeEk8vzpuc1sAvLaxedDv8Y7P",
  "key11": "4ZmriWu5qTp6PCJD3JcM7hWZzqPzRepaEyNwS99qrUaJy8ArKiWJbHDAGG4TmkpJMjJkyMtt4vw7LHbe89HSWvcr",
  "key12": "3yEitoASfTyHMMTa3hpFb5n6okxitfxiZM1cEebhKHA6yanHKGm2MBeYBH3AzurxLpfMsUeaUerpw3XCYB4JcBPM",
  "key13": "28rwZ9cteyXFZPBm8annmvSfu96taX1QVYHwYEf6abA1BeVRKGs61r15v7ydNywu2baEatqLucTWqSpeZbUnMN7r",
  "key14": "Q2tZzxZ7t3MCAbfF94wWfvtSsGr1KDYfuwh3yHufG56kXbxJnkT4E8n5Es39vGZVpw28kkAYgfDftmAJPAdoqHq",
  "key15": "2jPcxkFVpDyv6AFcr1C19q6az8sTKZJuUfWUM1KLZq4Ywi8L6fVhDuxVQL93WmqDKVTJGisnDa2pU9f4NaLX7iJB",
  "key16": "2RNLiQb1vRZMJK6ZN9qSMijYFccys5M3LwQ78rYVmSQMf8KBag4sg3JRJei3hJ6gDVzQiscaHCXdWWK8RuRfUZmK",
  "key17": "3S2bDzcV8Yxkr3Ab7JRwcFJ2PT1vLzpWQmEygZoJMD5UgNbkugM14KX8SNza4M7qzCkpHFEkCPMKmryr1Lg2TUY8",
  "key18": "3yDNBLppkYCyLNt87c4S2JAhDHqYmgen6FJK5QC9hTLqrLQdLQtLh8N2USQewrkkNtgzRe1TAYGQsbWJJD2Jackp",
  "key19": "K9W2S8nuXWpBnW7rS3eiYJK1DRWG9CQG5FGiXFJABN6CMGnqJt4baMJWA6nFJfdzR6xAreSrQkQeMr8KoQ1h4P6",
  "key20": "5rvEp6HY8fwXuTKWs5PfNFidEfZgLzQCR6hVDLa4FX7dLMFuSeZJMkWKxTLtnLG92uK5MeiEDkfxdBSA7XbUCiij",
  "key21": "pjNML8WoMaQ6rjEXrtvFd62hQzNyNRW2CVrHMvxA65r8qQ7iL2RqveKiENMNdZEpFzKMuxTgypLowznLN4c4JCv",
  "key22": "2eQUWKRZJnmiAyuoDyyJnAzDqa7JkMfhxNky3X2daun9Gpn5wDN9eoJyAqp9DdJByaTyLSP3tJbg9VinVpHo2gLk",
  "key23": "48DsTuiS623HBwXE2nvLSpbDVD6mFYo7CeF25vJtH8q9QbgbpKrmoqAE9ABSooE458FQ3AXQDvh2511bWu4Dfhi2",
  "key24": "61LQv9DKFt8TNG6f4c2JthVYkfKg8yXT99dvYsxhoGmGCPKJM2Xuc64iaasNEQtFJhXbo6h6x5e1nYXajQFhoNq8",
  "key25": "qbsSU4DpT9pJnbok4thDkxbZNkwA9hFwUEtmDK3JipeYoijextbSdLGiWmAcK3vwkmZvpRYfnxV5RQ7HMZSie1m",
  "key26": "8ZuBA4gaxaBuPg31rHVtN2WFx7GyZS9zAckbWWfJANqyMBWCMAF7FCJsZBh3VmbCTLTvUCMfDcarLCo7421JUoj",
  "key27": "5rfbcrKG2cpah4yS2jRhPDrm9sL9DupjMuE1Y3BcXJ619RDS4C9yFU55acWYYpRNw8thhGB9JnA49qyCsrsjLXJH",
  "key28": "5Ka5PgZVtpU1v1CsHWXacyp2gn7yjTjxwZk2wR7vNXsCNL1Y4mviTwv6XT8zYSjq9JnjL6tkXv6r6SvWzv7RBUn2",
  "key29": "RZv8J4P862giF5MEQDTMWqDbMqiYxUa4u57C2qMCvJf9MX3VodPa76fmEN4SL3KntiPmjP6GgVj5ZEJEzYUwuVF",
  "key30": "2PZgzX6cwQFGXjecR2MmsiHY9kXcFJQPfTbXVwT74w7JV7CDUC2rEAViJsvsGNxh7rhDbUoKp2dwCVuCUw7KvFyy",
  "key31": "44qFtxUwaC4zyuTsqTxgBq48tXn7N7QjEGXHZ6kCFkyspcRiQqtoZPjKkWt7b3fVDB43KgQ94XHNGDrmWngsHaJe",
  "key32": "X6SDUx4fJbwzmzcACpxJqTmccNBmeMhXt64hASmzR1hbrsWTVXuVK8VBWsBCupYSch1rMzRmNf4Ud6gjNMthBKf",
  "key33": "4wDJodL4bEEttAaNTmpXsYA1vv2SECVLhrvdh48Bcs6HUkNggpnuJ77sXxAUkMoEpDY2mkeAzJRNsFGFjZ6ukhJd"
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
