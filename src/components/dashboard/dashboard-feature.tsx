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
    "3YLH1McuiPVY284iAQZLVXfg1jhCeDraZjcQGMDhcDV1SkovTh8M1mCXMM9Rva8LJVB1RCifk8GCW3TcLCbm5vcY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YjFo67AFVrBM7f77AFLYBoF1aip7ba9qGTLZHpuCBHCkqFtzeeCFhirMwmvF3qgprkDo4FNpBChPrfu1MpAkJ5V",
  "key1": "4R3gvM7CBe4NEjhYNwarpn2Qai7H7tFzT12QhVrYFyD9HxWftZC9y7eCzBVLm7VtrYRD3ZHRP3wgyoJN2kYgdAXV",
  "key2": "24ETnHdAuSKwjgcne9RM4kkekyAdrvUK7twhBgBJfsdKxviux6Du3vfiYJeyyunmpnwXZLaRzaBkyaSmo3TMWAoN",
  "key3": "3KnLxUeoT8fmHVSo9yhziZM3MkuhqhnFyVXuXbBT3gpZj2MEzDgX2WgFod1BhRVzoAy3wqShkpQYfsFAUJEwy2MM",
  "key4": "45hjPhENu8SWzp5RtqQpyGmuUG6obhcYuZN8c2e2CM63YqXaUizQfJLMTNVE7Emzna8PXmmY7eamnRdteJUvqBBF",
  "key5": "4j3Azny2B9asYfcMPRYw1SHEccXMW1J4c4KyypghJe15XU3AmVhUMz6xsgYcPGPDa8KMrZXtYRQ5dHVkxNCRAHra",
  "key6": "4nsrYHrZhQi8pb5deD1AS451fgeN2vdY8AioqnwgQgkzHdEs83A5G1K3KtMu9VkS91BCdJrTcw3jeKWc2uCmFUdJ",
  "key7": "5KKWqAh77ghLGcQEMi2DkoG3KAnCLBTPeNK6V8JTWmkZtqrHKkPzhDF132FBav7BCg3am3cQc5bcwzoPWn6wfsFW",
  "key8": "4LmCa9b6MGmXfqoa8PR5a4rzR1ThYud34D1cCiT1JT4kZBAkpj1PWhrfVXr6tUekHPvKKQay9RgRCw2cNmLisfb7",
  "key9": "3F9kVkKFFTM33PPw2dSAiVSSfXpJ8XgeYBHE9Kz2HgwwgQmdbdxAgxjay5mTDuoxX5y3rP6va2vbRtyhyhQscSrm",
  "key10": "37EEMwffNNiTSD4VYHFzDstgc98RCopqj9Vbsp5YvYcWYuQzwhm84oeH2FQybioTnkyqVyT2SdN1zigHnsfouSqG",
  "key11": "5gFF5WbsqedKCSb59rd4ifY7VRjeptxhkREqP7oCm7NLWyuEwCVPbTWfCA5J9cP3b6ghKxfHr1d5mz6CWcdrFDRJ",
  "key12": "3kVU4D4v1biHkSo131YdSFoHxmBA5zMonkYU6ftSS18vKephUrTXpckN7Vk4NR5sS3T7CEeYRszw8M4LMEDu84A6",
  "key13": "3yB9dpkU3kPeSWtzxnKMpSAEW21sQWqRxFWkzrQuvRDn2CgGwP1TBgXjN3Mfpc95YfaUrGXfmzT2EXaevKCJZGYy",
  "key14": "25pwzdcvaRmrd8FF8jPj3emWKw6EUMAR9ysjCJeKgiM4pMDdub415QRC2ceVRovfzH6bCvx1ZUvY84V8BW4gP5Hg",
  "key15": "2tvwRHrUSbD3RsiKgM1yySSmPNiiwoWCXuocTdEk73XvY99AH4rnwaFb8fsR7ozjKHjNYziQSMYhH7TCvgxVfpkX",
  "key16": "29RyENKuSKUg2eovzpSWMgY3BizFN98i48DSFq8eosZ27Qhtk5MszCtf3vgDpdy5cYv8q5xKUSBoGgwbeWRAsHYd",
  "key17": "4ZwtYPePzAFAadtcTYq3d7xyBcfgyTxMjdRYdWU8qSgFkS5UDimeJZvjSebry2EutuRzqFF6Bv1EKF5YhipNhLmS",
  "key18": "2htEXqeHhCwZxDj2vb6BL2yyEX6nG9VqJ4eTjKHjMzTkrCZbJED2vbtrvGwEf8pa3emwaVSVeHjUxXsa9F8WRZLW",
  "key19": "4x4L93JBkeqJrhgjsa2CNRWw3KQ136h9pnaH1Wefx8nxUY9LRwqeBiPWDCzZwH6Td3e8t7jV3XhoUua71vJ7d7nL",
  "key20": "5mPt8uGTt6ZT8bdQMjSRrpDxbgTAJD8LaMbNGoaFhsD6oWA28Y9pBPYqon6wP6wGiGbKLjh32jhQSJpBsxGEbAzt",
  "key21": "ys216xrkp7ZqoNaTHBGSbLg2rmGTTBbBW5aN7RZm74wssEd13d9ujZ6pE6WeTkttniwDTe2XVv4jibUPf8tuWPo",
  "key22": "2C9UPwaLpVUdDoZtYsWN1YakSTDPje5UbTdFLtLtyvmkDs24ggEykECWdWytdrG4LursX4xemtrxQxUQyCsvE4Jp",
  "key23": "LRs4EqYaSohPGVXWXaKPuN2ZRJHuoMq8Gbwq7X2oBmxzmN74p28LbjcMRz7iJqKyzxx52D5ZnHvYeQmnapotEvu",
  "key24": "3T1ag5NCzftD9aV8NXbDW9BoiZwVxT7uzTb9aTPnxaXhDFefxXhjpgV9Z9eXwmxCqVV4dcPPe8baiPE3iQEpqf3u"
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
