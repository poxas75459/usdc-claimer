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
    "E3rh5mV1orMjUfSofUDRkL1mRyet4p7xmU2tL1e591Hzd5fkqHkdytRZFbSHXMYXmu9aYCiTpPBMkPfes3oJepE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MAsE9vxrcEMcq2zembGQDWEe9EKYHyymbau8HiF3RBYfuRHRUfp9M3gZ45jg1mPmBDRRUtKGSutJaHhy7tAVNth",
  "key1": "2TeDEijB1yejXMemyVYLvzMxspd5Ztsuw3ov9V444mbCnrat1ZbGNdRaZ2TmTQ3mx5museanVTMRCCtRjjNFUiUM",
  "key2": "4HpcpK87bZp7VjUp26L6xCwDyn6mV3BKWNUfchg9vYLYW9WHaer8E7QAJavsk17EUKx8p8bnwvuRfLXow58ew2tj",
  "key3": "3ZVhP1ppyHrvGmLDC19GNnw7H96BfStz4ZmRJj3cGw17BHD4HCef5TUKFNd42erXJpZLPcKwoXXteZefqPS1UAFS",
  "key4": "3fkMxZeCbDjrGkZiyCEmF1g7sxfg9e36rQpCce6ShxbvqfdFxyUbb68ZBtLQjPuNXGSiFg6tdiNzYwUJWUW5THaM",
  "key5": "5JNw6atgjECGoSSbv17rfpKMSVrAKXGsATFrT4WruL3qgUe6WhDwDikCnc9o3kJsh3YQbmrR8x7Bf6T731QcBun9",
  "key6": "4NjCz4sSTe3gnKqMPtUS4rqNWSeQiDb6ypQXZS97T6mnf94RRnRs6UiyxrEdpLroJfPoG1D56B2WmQC24VicULpD",
  "key7": "5SdAomtehtX8UoV4i47sZRnHbZ5GqtsFWsi8hvGFH5v8MpZQxLHypVTdSPmzV6LnhmDKMo9wiLL5uvawsQy7n4s1",
  "key8": "2pPGQb2naV6LBmdhaeAuh7BAMJYFgscV2tpRNY6XCsXuMgcyvpFq3t5GPsMeunxzYheLJDhpF8HFf5KDMtTrgUeN",
  "key9": "5VzceZytySBjZ6waadpRro4xWDoFhzCBp6d2i7MM399u31EQn5RyB6UN6wFMPH3hrP7NK5V5JaQMCFdejZMY6mC8",
  "key10": "jpxHsNcGL5aZurrxeGJLpLwcwxZ29dRmK5JGfnTSNgaAfmMPjoUYrQjx48rQWXqSUK6PkeRezwKM4763YAHMcG2",
  "key11": "3EbEZvyLq7t1oENQ3YkZZYAT5n7V7T3F7UNtzVKAvUy5rQ2o3WuphPjyxuRmUKYRoWrN9rfCPZd2fWCW3Fc8zFug",
  "key12": "5Xy5Lh3CWHhr3a8HzXsyVSknJgpcysEVDJzNWaZzXKShuU8ZFcJn5egHMJMexGCaJUVqMvrh3965WsSVt2jEh3Wk",
  "key13": "zdGJngVoAPyjQoqSPN5evm2cMv2Xt11DLQtUhRhA32ycVHLdpXE4m41hSnhdHiGU4qHr2KLhm7AY7AETwX2GFTJ",
  "key14": "3iWgc4p6DkuEycv9Jd4kCW4B2nBm6UaobHHt3zzWqSMmmmkeYNcLXRTnpB91vd6FW5ViKKygEqBKbTLQRzUTBXVw",
  "key15": "4nVZgVB4LoNj9vJ1YDfqHWRSkfymhZppHsRY5rapsygiuUd7sAWiWPJB9aBE876HBECfdntP4P6SrAFhPcXfnJjK",
  "key16": "ZnHWJUVmnx1Jb92RVB5SbEZAvKSYG54dwS7FdNUBgG7QqnNoXLGLgQxAZT1pkYHZ6V8DmN6pQSHMEk4fjfoviLg",
  "key17": "235C4DdL1eTfkAySwrNgJwQtkeKkw9HjdpvPwER3d6gjRhfAWsbcEbDGKrva4hE5RYVF45hZc9dt8MHEcQfWCXVZ",
  "key18": "4EKG3SmupemNt7m6F9D9cF6SD9aTSYpwRRexcxnYBAVPekUzsMQXniKdUjXDwhXfWMGJ19czhWXUX1Fso8hA1hgg",
  "key19": "3bBo1RAKVct4kkSPuTnSqQg6s8VBhDq3wRLQHHeYnn7TVDSSVPasRMduZ6ap61r9ZDvvxX6KQhojeKNX9ViEsdVE",
  "key20": "pj7W2AktYn5tguck4qZohH6vTwANudagYPYLnEup3ux973yWJGuH1GsNmt98yS7xzVoPvU5ZaNTB8tMT5jmU2p1",
  "key21": "3CWvYfzKtEycQPeKMuUMvVR8QwQdiyuezRwxv6UvdjXdwQDLExzGY6TtwHTUYwBTN26niGkaAwQ7xdDfZQdTTBu5",
  "key22": "5VU1mfM5vdyyxLzkgs1LKjemDvEK5J6rH2PT6aykC5dAV5WpaAxra4sZ4jzj4DecQFjTftcbTrcd4oXHGTea3QZM",
  "key23": "SNsiTRqRe2KKyE4hhnUY1Wzzzedtpu1hVJLuTSWQsULkAfQbX7v4DY6bRkXzmVJNJsJaCcqfwfK7Z8qZDTdSGGv",
  "key24": "4DPmiYKpHyv9ff7A5m6PCkb8ru9NgUHFecGf4yhLWChP8uJzHSs9Uj4DKBbdSZ5x2486Ywu1mvbBjkUTyoxsodH6",
  "key25": "5w5iMGBbAQszntFr2NnDYCGtQd7G9bR3cU4dnSAv3xbWm9qDRQiU46UsytMhat1d3YaKG1WuurbwJVMr2LEg222n"
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
