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
    "5KX26gQmd8xy69GxFU18bxKofJ2Q4M7Q6q83KSmMhc99bczaKEhJUVE8uuQo6B7ouANbiuXkv3db575nqs4neENm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26Gym2NKrKsHyPEKX9TgguyHxtoEpPRaWsbGPKWF2b8WV93ViGpxGSvGBtAXaTY4k4a9Gv1ZJ3GazXG8AteQS8gH",
  "key1": "26Mpw56S6Wmvf6btwkYydt738VNoioK5D4ifApku3oEBoEqGG1XSXxXBVC7jjZ72DWhgdLHY9G1uiiYfwqJdnQRD",
  "key2": "1nP7hF9dv4EeaavGmq5ZrSkhGJ1dArSpZDj6vKyEfjy7C2YFknk8dQwQfdzX6vLvqSwKkPctgh88R5ZuezzKeK",
  "key3": "4UgK96chuD8eRe9FCci2xADfg7K4rbHbcFX8jxPFE95TKhXDvW13zGyd1erdoZh69xgmUHAbTH1g3YHC4ennT3Jz",
  "key4": "UNdLhCjzXXN4e8rNwaNEXmVqUfVZaPXszwjLxoWniRQXNLCuWhCKJVRQ5LStsJ4TyKv4iQvUMgFHi1EdXYSmEup",
  "key5": "zkC1UEkQzr1J2ftVUXQNG34crTNvPxo228Xd88ar4QGdGetmMzvRN5Zz3k4Pyc7YpWCWAMbRZ9uBWsiTQ3gXmbG",
  "key6": "5FCVAkoJnrheprK6btsEjrLgMfmnob3Sr2zir9ftNqh33iFn2jE6k45XqpAeZaeWpsxEwvrRGo9ZoipfLBqxHmmF",
  "key7": "2Z2G2CwDcBytgBySASq9jgNxWkMEM1V1guyqinCTfmjadQdAch4YAzLyTBipnmSpZoVpUCVN1YnmZnxwxxgzCDRF",
  "key8": "5JoacyGqwEfv1fEwkYygkC8PuPs2ngGWHEUGCdJwxgLnhqjSm7Uu8vzEtX8VFiW7FYUxx1as45xUm3ufUXnpBpLs",
  "key9": "66SkhM8YJw9GDu1cxvqcLEiwshSpqDfAEyQYjbvNUthRn9CcswNxtcNTMf278faJdRRm5RU76GizxRUtz2avasWn",
  "key10": "4xBQ2vGSwB8nsXutuBqok8RjdUbjMFRP2K4KaCkhUpY2WF9of8bbPUHk2ifTUzGN1FiYziH2yDw7rhzu2WawSoLL",
  "key11": "2goJXCofVXRW51tmmee4X3gzFRfpcC4P7Wra5CLQJvfDEAokgQEjYFXFS2WFFkc5jAVg4YdicPxiHwNBfFxay8dQ",
  "key12": "5p3ZqfADzeWLhqzgPoqjDV1zi33RLBCP2yRTcW6ZPpY4V9KybMBW1w1Yr98rgydks5FZp6a1xnYxwL2ax8oSAaz9",
  "key13": "2pvmPem2CmZP2EKbnbd514siXCrERvpkvjbDmiAsFuezdsD4YQQy2pkdxyVadUZsMcJ2F98sRiRgWnTEZ8gpbebA",
  "key14": "4DdSv29ks3jwhErEJndKwBfkLwG3XrsHbH671Jv2QBLDyNMpwnsHCoTVSi8sqs4Jbm8L9P4ACRy3sJzoa6N7ZjpV",
  "key15": "43Jh71ywfidRzF7AVqdjq3hCf5TkqpRFMDEn5NghemG9UFsKn3jxZ8PeqAURTMw5r8cPNAHAETZdTqVppHzhLe82",
  "key16": "34xhy8cunuodZuYm1BTsCUoBSMEoivWd9Bp3VcM2WyobFpe3Cfx1d7xn3FZvVojUcEskKJd6wsThCnadZh8rgVgk",
  "key17": "5bZm7Ppq59Hq8t7e9FfV7mRyiV2PV5wfUu8JmgbRMGZzwscYkzc4qNkz29Af8FrUvMQcyh48ZmNNvMLF2F6ELUGe",
  "key18": "3gr72htUSpFMHWAedXty8bDCWNr9YyaCS9iXkYcmpT2WkpvrETDKEJVWYZY3L8CzoGEpz3QYbhhD76G97UNTPB1q",
  "key19": "21a6VsJ9Wm66FSvYgsB1Sb5UASh2D8RK3dZenWy6PVc6EZMjsptMZDo2bqTLWJKKnNQrgmePmGWBnyXX7NYU5hWR",
  "key20": "v96FeCbNRahGuFZwXac3GcwqC2QnNVrKeo5YtEiwD9Bue3b2nipvpWCZmHapim33yh3qjLYbGtXNSGNxXuewyzE",
  "key21": "XbRQSPf3aHCmkZGYZB9LQVPHZMHGtVSLHKBZyzPUNg2ER6MWAP1xQGZVCzzL5ihcHzpLemZtaenvbTKUsZu6dF8",
  "key22": "4yZwgp3Rj9jSKR4SMShyPbFPsQLVWTxVTec7HcVT3dRVXwV4x7KTVXwcS91rSnk84aMcQiUyDyuacPPLXx2Ujdyr",
  "key23": "5npKR4pr7hZT7ewJ2xLY2BKyxLoJSpGGjJuABnLsRVwC9oQEyxpeGL7vMRfaUkZdZrvSQj1A2ByBDZiUm9frmnqu",
  "key24": "65tGxqEh13Gs3jJf9EzcxSehGNkRPtgSNLSMCpk8WUMTrWZrC9yQqt6YtxfpKUazpiCQkuyLiNpyo94f5Jxgqpi9",
  "key25": "2tE7Ru1AvKE2Rr9eFLwf4pHjczvPqoHPJK6e91hKKkRkuzNsSmQcmgypPppVJkChXaHaE86zKZuBuVH96J5uzKjF",
  "key26": "9SSVpUQUfUqVMDAVb52Sh2iU6cQ8GCzYSYehSQYyF5SqwM3smNxoowxnhHZCfD7syVrUg34qGhfxeUkMTkMR5x1",
  "key27": "4x18pMnNicRLsbwcnL7FgcPmkUpnKUAa7vLAav3SAUWftfxcsB7eRDeB9EQsda7kdDjJfmagN16s3ZVAGMpNZyJp"
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
