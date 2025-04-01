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
    "khFFpNTkHDAH4PvQocVsmDBVtuFM892qzPzqvSmcoivJPzk43CRSRjxefK11x6Bo19R6q7MjXM78NMNsAjYAQW6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZBacX93Ft3D6qf2dKxV4Xf8a5mC39NPZDHSVLgTV66Z8jKQFUUZLpekbmXXjpx6SnYQLWyKTwQTTQaMR9KoW8B5",
  "key1": "32ewLAvYLibq3msSwMrJSLJqcwY4LzAxHXG6KVPR6J1ap4hjfYmMQE1inqeTuYyLkrLFRTiEBme7ruTkzbaBVpcZ",
  "key2": "ba83Z7wVXsiAT3KVrxdU9CXyXxZmmZmeKdLVgDGDTHyR7CKtuBETg7z8RSk5S2tx2J9CFMUnaGuamQUe5SpZPCT",
  "key3": "5hr1XAJTN54DZyrU8VsCBixycWq3BUVBi9ueQ3yER5MPPtrtkhy45VhMNyhgDe3ruiQCFbw87y6yeU2LKzPxVRTQ",
  "key4": "2u6W9mPpqRVVM8BCvfHwfaVwimCNLBRateyoRihikyBrCswUNuxQSQmm85GoQ8GHFXURiok3XiNYGnRf5wkEwuw8",
  "key5": "4FTZCprdVki2LhfKinit93Vvj9joESAj4PCxxs7k8HdTThTn8h2xoAZcHKtvQrQUDeV4a4w6V3doDLjQYmSTam74",
  "key6": "5wiPcbyMjxx9UncKx4EDvRoabe9Lgntw7pKhrRWMnmN1pJ2Qnb1R5y6ahYfY1ZbfxZcQXU1s3P4BF6UkVyS6xFhv",
  "key7": "3LTuY2jQGZJZu1Fo9J6p6db27rdPLPatmAEr4VbzTeWGifzHt6Xh4d9eK9A5oyxs7wmDmrwBqqvXCgpih7G6t3dJ",
  "key8": "2fXm29bFkvC4Sv8EfD5RNdLoQN371CRYhwuqXN4w4dEY9EKQ1q3ZS3iLQfVFJzKmXEpLs13PDwrskE9ntLKuSZvp",
  "key9": "5wntJzeFWhMjwJZBANTBtpvwccP6kgMPyiGAnNELtcMayYBfwedwm8yrLkKXAnZbRVwKfxawhHAbXf36LbBLwziD",
  "key10": "3WMrzdsvcU71jkdrpUJk4HMGejEp9Svq1PmQ1e77NX77os9kek1aUn9he2upbfsrrNGL3EjC27hSDFfoCCs7ArX3",
  "key11": "4ZY5MeHPnTEGscaixCHXzzr2dQzc4iUTMcPEhEJ1cVRVkCa4MoofYNNBR7sAGxmjdd7ZMT6m1NTsTs4UiZzFd2yp",
  "key12": "hbU2W9nb4SMEMdoWhYv2anBJ8WHdz24ufQ7oKUL2K5s1vBeJem8bDxGj9LZhBmqbqVrQffmbDetm8swiWaah9xV",
  "key13": "65WvCy1NusE74tUKLzYwKG6PC6HwxL5nHGA1it7QohEvcZXHJW6BWCwJMWgzvcxttrxrYkUfDmnWbaaeTbgEzZyo",
  "key14": "Mhvr6gmkDMBxcBR1962i34qN5nRnw92M6T1mzuSPVdk8stugungCJC4fStL33E472havqLfJnvCyKoc5tBK6NJj",
  "key15": "5kXLcmbRbW46sHS3F3sP7CbsDKs4QQEFVYSJsubp3NuSbcnnXqSTzE5bg3DSGEAwYT2J2VMfzYZDkm7bnfiCvFE",
  "key16": "2XeLY99wfnry3LEeBMYncjmXf2jQiSeXy7Vx8LzYjciR7BN2ctgYrxGZi8SNFVyEGGpLY4qZDB1sMcBSvTRKfY9v",
  "key17": "RPLDe32wvwQjJtEB3AJRvV7qPeMHpPsUmXj6iVvBaavEEzjhnBQZSAo4UNn8eyVCTBs64zXD6uLPjptUq4FB4vr",
  "key18": "3dv4kYHXDv9RNWWCkJNaQtVCo3NgdNPzKEFaUYGQimZwmypi6f8e35L7LXpMbVcKUD6Eny1TZeFvzGxHWD8RXb1U",
  "key19": "521TNL7mEmSRgm4GBFywLHjr8XXgxXsWcm5mG6wq3yKWudoUVQafYqXtRiuLcDKHYmpxDKqrVcPpigvNiNq7vNA3",
  "key20": "52oQPPcPYf8BXaJXqTzf7qeVUyvjEmRESAy871pvxpygaLYjSWoq6dfRVi8ucydh121ffrcgLmnd5eNVHtUissR8",
  "key21": "qWD2e7mUi5AdtYZo5BSK4unZr4tLec7gizn3Uf8GNYjJHvtqiFoKVYy2PGWqouW71zUiQ6ma4UQYyZ27ybzzKBL",
  "key22": "5r4wHFNhQPexDxtM2iAJeHJ5NUB7xcjGwiLi2K58aBeqDxC2RhgjK3irJT6yQ8qd7vsCvooEHicLjB8amQBeQavN",
  "key23": "2oqWWw88t7vCZxzboeyTo3asV9X93Z74f1hh1imwebnK1Bmu6UsJJmdxnc7sd3BGYpdnbqEueFp9dhDUE9eAyyUS",
  "key24": "4KrUCEc6XR456Ks9kjSpWw7aAs1Rmw7AsG7aRoSTdh17ww3hQ7q2GUF8huKDGHh7CSHfEjiTLFuFpFvgTa2u6bwr",
  "key25": "66FrJmNPPt7mNtGUjpVkiF96uHskJXBVViZjvqnpkyeX7zqSoFzuNtP7w2mSH3RHEFYTgVAG4jVfs4468yAVzSQj"
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
