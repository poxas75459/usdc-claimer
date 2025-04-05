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
    "2rWMezVFemKE67PadT1Ebo8zXVRz37ohmvrCNnKH8KsU3esNi4RhCRRpaXiv3WgMJ81buuEr9r6ETkFup1aHjiRg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VoMTDRyc5rVymTeEWW5AV8wkdWjUfKMnzzveWiMNTZN3FmfkYNuzpft5Jx8NNnL9zrKHG9zze11okg78BTWQRD2",
  "key1": "hU9JBLn1bY9iQBgJjx7Wi2cM3cXTXzYyQZXvmAHKCnJuGVhyoWxmoK8gpoP8d6vt9UmWvJKjZ8C7yB2iuYBLEAv",
  "key2": "3L9fdoqUA1vutkzp6ym8xUXNBVdpkWYqCkv4oYXdb1ULiGYmuLrt3u2iYv5beYEDNT57ACrbwZFvNCNoU66YQ5gF",
  "key3": "2dHews6qYGb6bwkirBmabvk5hNzDoMDFRSdzuQWNdJee4xXSid5SjxpjBTPMVEskUGYuG9wzTzhnjJ3rDBa3WBgM",
  "key4": "2AhQJu7Rg7WNzGRoeZ7QuKidJa4EckitAa6r4kXhpff2ZEPcqWZQD588HzxZJa4LpJCiS2YiGAzP92HotdWesWmT",
  "key5": "4jEGunEtyfUuupKpmKaNMnbB95iuufzChMWgWz4RDaCwe5HJ8xUwA1TN8zwG67yecQY9mjvriMKV6QjXweDARBop",
  "key6": "3VynuQWVS9PK3idYxU6i2RhwCEPws492NupGoqSUEFNPKNtJBZG8PHHeUvTsAWDRgnNxV69oTgk2iLkt3fwjgrPG",
  "key7": "43Sc5bBirpHxPLFJNe1XqWzrwxR29wNLULRLGHtT9ngWTZLv4uEz9GfkRacHT3fPh8jvw5t7jLZ9spZcWoMwAGPf",
  "key8": "LbiZfZwQQaxKMPwyrktVnEwdQb3vxNPZKzMW2eTp2FBv15NFS7mhSkkgZgTS8V6NKy6gQU4wERukCTf1TiNNJhJ",
  "key9": "2JNCwpagdnwG5YzBZcdhW9XGGuwu9Uw2e6ynVGkqvNsbPxB8kCsbixuht5XMcvZ3ugZw2JrekFYKfFKiYr4aLRdw",
  "key10": "36pVWvVeEdbDjHcnVNevX65mZzkS1H7Fw4v5unViLkMRRP6yByAkSmk15Eab3CiK6mpE2La58sUpSJS6VmZMQ59N",
  "key11": "4R3qEh98Pwy83PmqUjGhXtFK5zxbHd2jLVJ2UpHtgGKRvkGR2cGbEigDT7qMN8HzdcaQKxF6fiwYHS61E2CJ7GbR",
  "key12": "2GukHoQ1BC8X6HvHAHagjGqN2K3ohSgeRWGhRVFN6ydcMaLnVfLdAQuVU9BZszJPSwU5Z24Fp47AfqbfJSnQhQYU",
  "key13": "2efVsWbMZYH8uF8mudG1WpGGzLYoCZz6dS5Lw3JGVMzV2bAWK7n7p7ECAMfeppXXUPps9SCC5jx3pEWHghhEQ6yA",
  "key14": "4rUwWkxVoMZzkbaMDhcNncPJT84Uu1XJpCXBRP45A9U3VS2EGvGoV5PTvadrPvUvfFGHyxUiMMYLMtciK4EnAeQw",
  "key15": "4ZWNKLy11T6MLZTYeTNHxctCsFLmSXR95TDcfR7bZyJBQqfH6VJ31YSVYEN94PeMwj9r8fC6xLGifZAswGWzTieF",
  "key16": "5qZKPtVPAvznBw5tkPSW7LD3jCLGAswVjwNe1BSHZXC18RBRin4fh8mJXH4yENKZzLt5C55gxEyeiSqyjxsWYcfL",
  "key17": "32CXfTf3ytGZUzaENr8LHRbuSMFdpr3YbBAqtjDsHLxn4CXyhG61ZLxdcsnas7W6rxmprKDed2uchPobbdguZaym",
  "key18": "5V8bFAjy6YfBCBV1nhzk6d4py93mPt2zj9Lhp86Yh9m7CgHMeAz1CzS8NupRgh8xQLGkN5nZtppTRaFwzPviWs5x",
  "key19": "2ekFu45RoNfJYi91ZMD6HWuJ6AnCFkNiZq8KoGRw919ih8XmBxNqWHhDvpd44yUeXK6Xx8RNw2Dwdzq2JpVqNm73",
  "key20": "64SWs1jFiiWDf1gBC2Dias226EmvpYdvrTD9SwXU9y87ovgFLfEsY6FGs4EZ47Hk8jEB8oxgjfxGVo4x6mH2yN3M",
  "key21": "3rmXNfy6KcqC5iFE89skSyAuUS7hPSvnsrsTp8CxXq4Cd1WZxtZanYPcJLZEB7GpWG3RqJjRam919cjvLthNsSPq",
  "key22": "2vNPubz1KzmfkNNZvNEMS7NzNkD57ZqsBf9TqVHc197M67coDFPc2KYX9yyrcD6Eh4ifvgKUQbb7ohq5iBKiAota",
  "key23": "28KGkjX7Atdcy6tqszpUjtAfui99JUai6pydUJ54XeSUmTbV9XQXFzPiYm1EFQuXUEPaPc7i1pbH7pb5hrMiC38b",
  "key24": "FHMVPtdSrz9uxE6HWqm1qrUWC8avNPehRTpzq4A5w7YiKTWBboQFverfyzAPDqvRrUxs13o7BsT6eUt2vxPohcf",
  "key25": "JBRDboj6JTMz74Zfqie1ekXzBoMsDirjoaKEdxgiYNqFK9EwYqRx7AVvDYshTdc4H8viunzGDxD2NpY1GxdTGT9",
  "key26": "8s4tYo1vCGpG1iCNQZCjvRbwn4ByzW4UoLWS5faqnpFraJmPagRWLgQp9SU525Ld4hNuVwmSetTXZedBFcBqwSk",
  "key27": "4dDNQM8LRpre7kHUJ8hLh1Tjb6nQQcRaYdhPxnWHXpk9f4Y6M9ee1w7hGwPXBNv7B3jdbg3qcsdWzc1bzTbg1L7V",
  "key28": "37A4rLM74RKkfB8FhcRf9FhdpSUWiB2jZ9F3ozEdsc2Nh4ttxETCAMo4avLVnxDyJwVQ1qs1yDfkxkpLUcYcGVjt",
  "key29": "4D78nr3Ehjmt294BoReU74uNVxkKh8k6UjWkF6AL2psuxHmGEttVgy8EpTy6Gf1y8d4PoatoeKKpfHg6tvvPt2mA",
  "key30": "5XSqttwhedkjBNE6ps4FmeVNcQAeBGgPvuu2LPZSsjqyHoEwZFh162MWqhTZB4eZ9QWTiVNXeyhFxTUJUspAXGk",
  "key31": "5KPjhg2KUY5xMVT8mTuqBhb9ia68uS7mp9Kyc2jVAzu7N1L9KttYU12iYA1BjWNtxfVknV9HWerYDF2DXiMVxe3V",
  "key32": "3wGYvkYvuLEhRC68jrDzTxDCuWFbbbmpmuBqThbmfpUn5tLAXYdJB9oKVgAvNfMPD4GFwgyo5SzbfFi5ZbWBuNwn",
  "key33": "41k3s37ubPV9xpQvJq9e2kSR1AFFejHamNd1Y9PxiSExFgX2v427Nu65SkUPE856hwmxxCbhCqR5KUcdvGB877nb",
  "key34": "3pMZoWFzyZk1HqcLAgEJCVVCgSZ5LqSMsFcXpEkpzKVeYJFzvLWht4JFpJehGf1WgvrE8GckGX2jdJfuabcCAaeE",
  "key35": "4ouxRuo7gvwiLvfQeb2hejYiTGTFiUHWBDaq3UCLaUPCZrVfxEgKDyaRoeyfzAtHZAUuoSYzN4EnGn6K9YmrbHG"
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
