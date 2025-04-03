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
    "559DdiJeoseBX4GBuiR8zrq3NRcHh2cgaeGMnhZYfnaxEat5Avth8hdwM1Uyo7DXq5RDqDZqMdvHjpAdBg78U5FL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qvhhGkjoyqQBzbbmMWE2Y37z3a9WhEhvTJUXdjf3ci19goDTZ69avL9nTWxUfysUkJY2UKvKijg2xpk6GVFzuxG",
  "key1": "C9eNY4Z6sRvNfLrzFafTgQCLMUTktFXUY1JwR3c1awFbGvH62cfbtuGBFU6zFBhifhiKpHcXvmGdufNHvb9yAUy",
  "key2": "47nc7ajpRTomtcowcF6PVgeBvnk6Y2bU9h7DrhMg4PpT9zsEYARkBLTFHtwSbsoPsKfoGFWJHBSon9rf1Y797ab4",
  "key3": "5x2rcuuXYSfuUJ8yaCxveWRa7LGmCqcCKZDZ1cBvjcJ11HHHuj58fpNu781gy4pMiYcjpkEgZ9eoUTHs1H1Mp66W",
  "key4": "4pX2DmaoFHyUHqE5j5vgq3butv7ABkMKesxZi94X562twtpduU1RNs2A3U1M8px8o3wrKStBV63jD4ozdfQKgc8A",
  "key5": "e5LnbfxgnjcYGwZJsAMFZS5sGy22rVShjHPmoaqPthuYmpghYMtxobNZ773uK2Z9QCcXidHfNXRaxAUKyMPg1xj",
  "key6": "4DGP2EXsfUyDRiB3TbaV9TGtypJxh1x57EVwagCSRPSpDqP8wBQYju8yRuAfT7QLUhtZ6bg83F7hHCqzoGZMaxLD",
  "key7": "oRxc8cE6bhzWd3kWFRkFWe1BDtz13T7rd8BQcMBT2JPgkAPuc796qyUyuGz6Zonj75Ucwd4HUXiu4gHrQ1qabJ8",
  "key8": "5ntyr1rFSS2gocuDLYyBkF6ENTrGgGpY7LjWZCjnX17guMzy6SC8jH1zU3iLPFEf4TSC92u3GGgxAfkpfa8u5A9X",
  "key9": "2bDcvvDx9rGwroHK8sSKyXFgKnR7kGFcSCyCaDhM2TzPduGCGShp45DHnoQApZUCFC9CFQnRAwqyE3TfriGkgUoE",
  "key10": "36pVGS8GuZkj48VcEzaLBhQtJic2hksMXFGoeB5KhMdDSg7uxKwPKUPwnNM4YdqEboqLKmZ5pHGcHZYEzbBf9GE2",
  "key11": "FWn1437yBW5tM92wzLKZUUwcUvamtVA8V8Bq5sZEeV3bFYeNbarVT6gwBUtstFigMT6bSaSr7yAFedBkPGVyuot",
  "key12": "4d4AEcckDnBDKPVRR2YHYHaoBkgCiyjuRBXLA9F5cYdEoZnfxMgShbbhjyEUfpzvvYWYEuUTuFz7RxSCA5dC5CHM",
  "key13": "26sRVu9SkDcZ9rAHQYAgSt1uLxhY2v18jWhuL4n2gjsW9KnRoANdFCxQgK1QQP2XZXCyb6ksf9V6vtjGvsPrCuSk",
  "key14": "2kqbvnewSPKNwTT1d74e5nD2xRUVmqwLN7ob9KFj3kdK3wTA4EhF93cymAgeqp5vsRtYvHrJeqgg3jGUtVoFhkak",
  "key15": "23rY9GRepUHY4AwU3Vq8oA4kzSDa37imjrz14hy4zTgMsf6seJau1pfw12ZdAKx9gxpJH7iXXGnStBLASJuehry2",
  "key16": "5kNMXGEUyNQhPYKmbWACigAbx6X3aXUL3tLgDF11jycJNggGMqNc8jKizhvAh53oTKFgu6w2pjqs6NTa5vWsxGvy",
  "key17": "3jCg3Xc4e2Mq6epbxaUDgxNssR5pu9Rg2Rxkz8e3vTsuVJCoQzEM9Rd2XvX3Yi5JWMP5fChAmXR7FV4qa1zzgp1L",
  "key18": "JQSRRmkH9tkLhRpF55kri5UjZ9VM6Fy8HbPJnLeUx6WL47hkhW9dxxmgSYC51qS7RScUkWG5U7bEBUPcxnd3G6S",
  "key19": "u9vj1vPnr3vaj9agsj2X3zeEjSyQDm9VGb1DhEwJKUuHdMjEZvyz7vE4EAKiYyyYKpUfqwYLpNcugeRKFpmgsNb",
  "key20": "3kzkksFFgZ6ejrSQb5kRXYn7LvjSF9XxDETK8RHWBwKJbLqGHBSRBbJxgpUr7TU2wEdNE5pdgrQ9moKqTp5cdGt8",
  "key21": "45AoDhdfNXiG4ZZwP7j1MRwLnX1RTpbwgSpnMwKXsEJ3rLdhZm5GFckChv71a3Ggiq91nPQjKVNsSDGg1a2k6tVX",
  "key22": "2boeGMu3Ysf2jRVRtmuVCRqiwaja8xWHtwN6enSF2NvKMgGhAA5D1kXX5VAnYUveopoYToF2rjdJRsbRniZiHhzD",
  "key23": "2fn4xjvwaNvvkPsMUhfZWzv9EtKEbA3QnNY44BTPwovbRXsRzV2mgfVtyMMcqf2kWPbDKuLP4NHU4wEC4zqrymEM",
  "key24": "9cUmKvdMS51SbVK5pHszJdiDwdWShDpmPTdezGNRaVE9q2D5oAjvFAHmgpB7hqEEPoyG29RRZNsiuMc6eYQdS2V",
  "key25": "63SSuSMTsEFumJR4mMsc8jYJ9Dk6gnsRESdeuft4WmvfhoRy4Jb3WYa7TLQ9fvtUrt9235SYp3hMSnAmvMzzQcjo",
  "key26": "tpSCj1zWP56QJxFsfxNnQQYPbRVK6xjMGydB2KCfJWNnhBRGgPcSeRgdCAyY1mT6nV1MSQCAVbdxcmdvp4rV8Gy",
  "key27": "QW1Jgxf6RtzDSRoRpKCH3BKHE1a8ZwTXbJoVZDLVxw4ajnxV4SPEF9pnKQWaumfpZV65113CTVto1CLhj96Bajw",
  "key28": "3wnjBsn5jJi1DCkvsQ4Jw72XV4XWQjd5KFnf9i86XEFkhxRvifoirm1y7jP4AP9g8Yq1Z3ZKnf6jBT5xBN99apMb",
  "key29": "szng58ASKR8HqEhWc7yEzDcA2peuzxTX8DSn4Ce657km3qLffasZbj4pm1FJtQfsb3qEn11YF8CSSk3x3W2qRxU",
  "key30": "4rFbMj5KhJ3PPtamFHpTToo9x4RnJsFqfcDaJrsNaX2xzbg72LCHpoZmQwFSx3TCSXxcbhueZL4Qg14TwDm3ifr9",
  "key31": "2uy771cjxiMdk5pDEGSg7DFug1toTGCwhFxJFANPq8tJMGByb6BKXsvVDDyfT67VHSrrGdSkzRhzSXAwfTFeSSfU"
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
