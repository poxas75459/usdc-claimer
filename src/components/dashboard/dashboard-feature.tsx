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
    "2C9tpknPUkmiV7CdCjJsFaReAAuGPCJinN15VDirJusFfM7zSQAG5miNmFtboF81mBrBkvzdmVUEaxWd9XRr9Ee4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BjTwnXaKoPrXVnkjcNK2aRTsMi4Q6Lr7gEZ5kGbkcarShhBQ2UmoycmR43drZR89V3rGbn7tBaUnhrxER4Qnxtq",
  "key1": "2P8B9TLReHfdc9XihHPdTV5bHPwAHr5tBT3hscwcb35zypDGeXJXsuEqobraddFL3V1yZrXD7am5suPiorATBWCn",
  "key2": "RsS46zN4XKmZua3eQLN1xSnR2699kSjo46P6TvzDAEaK6mNCRpBqNWmVYRCsFfmsR8JFnQz4Ja43TeFe4s4bz5k",
  "key3": "4tmspBTU4qhM3TtSeqPw2VPJhS55ovHrER3ei37FYZeBjEde6QEtTvg4MAN2gwEcCRJgZNV3JX8qpbKAct2wGSdT",
  "key4": "5fF1BdX5HrDrXR65tptemjRHdAVgzkzhrPeuuGjYgpN9hTq5KBYBzcCDCQNzVKRB8FNTkeC5S3SVKdgAyA8k16Gq",
  "key5": "3ASSZrXmN55aDM9cntc3trGMYxzRwhRhcsWHDFonZHeoPL9uaSE2LNWMb6XV6pWmrqZdBYnsRkLq5u4Suh8SJTgY",
  "key6": "2Kwix7ZKy5PNzkE5LiGc1hbzPP1tyhAoFSrdnscQTvjLYrv5ALGG3n449GYRJZDt9MMhuy1ZGYpLAaYDWqTNMsHg",
  "key7": "2JWihgggW9VUrZrd6QNHppRbtCWrx43JDys9sBZ46XWDsWC698dLUivTbe2goK12bCnxjRfYb1Chjr3MxSQNxEJR",
  "key8": "3Eig9ShZ3FDBDXu8nGSQQtcDNcmhECjhV4nHtRmiAvg8KPneT9CWfPWb8x5pYBQBUD6eeR783UKNjhHhZVGKHE51",
  "key9": "7XzPBFDzLEFbqWKT1fQgSLX6MygoMPArREWTBtpB115cZWaeKfA3oPr4cSuqZDx48ZeZDdoPxRaZWubHXxCQSDs",
  "key10": "2xu1r8gpGrst7LESCRvAqHNMFCJ81vhpibamfdr1p4gwdDJeZwZtYaMbPdPoNmocPM1C9NudvMCUZJwQEqfDFBUV",
  "key11": "2c7wfRE9jSV8oJVr5BBipYfX2mJfJVKY8Xgnm5rr98tr9YSyDUUg5mTCXjmBQGWA7WyymZVHTcTDUdkkmda2tQNo",
  "key12": "2w5gxMecDYf1WTV7MSkPzWfNUaJLgr9yjLKESde1XVd3MfcTcd8XqVAfkRtN47KRs1fmPS1CNx5BTwkAgDJDNQ9f",
  "key13": "2CpA7bkYQebUzawu8reZFwMVarHiimAEqEhv3daGmEpVAbKRbD5RscGA9ifPNqRCPDXq7RutXF5ZYNABUCDTfF8E",
  "key14": "2jSkt1ZVcWRAWx3XJHVVtxn1aqKiVMQq6eBDccFq5bz26FrLCUFoovm49kshGkX8cNpQ1srxQZB7zohaCparERoJ",
  "key15": "3cwmmtVGz565GjbKYVBJtiXU9TrFbgu4GdcEHj5Zw3NTQEeqkkiSC8ZzGu9Pn1SriH7uLnJRS7oNS71cfquYwDvb",
  "key16": "23vg6rbzY54HsNGgjLJxyAiK3H44Hk4sB4njUgFu8cNcaEiQ4rxDxQyoLbdU4EEtXzUseKocsPRu3Pu9nNTU1Dij",
  "key17": "61PNF6W1jCjWCjWWvkPa56ogEo3g7njoJiGt1vPAxoEpNtYU1QiLfmsMMmxYLSvs65YW8NxD5zNy6JYh2CHoDXWX",
  "key18": "N6iwSV8sKk2amrCoqmPKX9srqS2RVGHcBFUdhCTef43UyLCRDdzerGW8zVCF3eCtQPNdoLS6rF8AYfE6DscPGBh",
  "key19": "3GU7NA5eash8UNAkALR86JdNbASjC9LCg6v5JRtSBjEmmKSezrXHRrYwRuj9hkqd6vHeFRVqc3XGqSQWajHX42n6",
  "key20": "5EBrYpakKAafsLvRXpgHyvPdvtSLzyNzF5veqJPdsQibW58zxcy6KGnqDZeRU2PM8i5tBgXugdw4x5MSxyZuq5rJ",
  "key21": "3aN7BSAy4uU7kGNqEiR9isi9Yx8yRz2hj8S3T7RdCbgfVGMZQhurAZBP84hiCGnXK7WXvRLhSgJ2LzortKT8TTko",
  "key22": "3c55Jc9z3vWALKFbhSanRdMFciHmc3KN3CgYGw4713AtAGkncRRZ3kooff9Z3vgT6Wzot1GCxJFA4bUZd9VzQsWE",
  "key23": "2nUBsGBdrgBJiQ5tLxGFX9odNZyQZAQVbBhSDFEGhL8mTUUvbgdvGe8hBLJgQthsSPLs39tYveLsobZBsSMJC5zd",
  "key24": "4o5118vsxQuvmZxDwUmUWeAcpMs8s1RzMLip2HkG4hwXxW147Xw1gS1jaV3dynotahzR3FYJCU8KDRZY8fLaF552"
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
