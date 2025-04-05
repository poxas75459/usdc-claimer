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
    "5LoocYp8ut5mPm1KQP5c2Cpp652FPRXtG3i8Aua6o4vBn3z4VQmWFUZQExDrHvDfv1pTHQZCy5Ztwpsm3ZLuu2Yi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nas8474simYLrgc975iPw1SAEFwvtLDT8HkixFStpu2wUYmf32pL1dLjLpbbJgQ9gSor71pzeU7RbvuRiRTr2Qc",
  "key1": "5nNryGsis57NPy8ZxNdz3TMRx2kFC95Ef9fe54A45VPBy5Rfyy9EzyA3mE7F4Ro6jMkVARuF2TjUwJ79aMGznLfR",
  "key2": "4HKAt5aQo1QUE7uoKLb9b6c2DVTEV1durpcEbjUwrD94C3aaAubxddB5Q5PtLxoBMikNbe16TLzduWioNkDk9B2L",
  "key3": "43CLr8LqvRsGy77rts21UwGiAiugQKzxW188CzZrB4Eru51eppt3enLtHUqNv3hzmQBCqtrxT6TKpvwkHRL5H2bn",
  "key4": "65Svy79skNveZdaTQywYuVCei1j3KDPuiF41oKXwGQ8Nxmtk8NhFHsGaYw8DS18ekopWnZABXUs6NCuH1HLzjWta",
  "key5": "5JDZTyp9Eog4CrmNEyge2v7iWhhezqLpxkikhjs9jDH9BA5P3Q1NiC8yRQVK6FHrrapSxuFDP1GJYhCtnyy2mLoH",
  "key6": "4m4yyDNLYyvxn7ZFf8AqxPuqBdwY6QgjoU3dsCxPtNGSPgQ1WYEmBXv1xh1yRj5UdM7xssCD6hPuKeVkxCVr7wRF",
  "key7": "3PqdDxyihpyGk6GkXo4uqyykPDVwJSCcj741qaX36h5WnywGNJ9rqHgq532JxQHYGH9qNn4BbDQvrKSaS5Gpasz8",
  "key8": "2fTQ1j6QSf45sFeTxJib9ZEpSGFTyLr6dWd5PHhnp57ohJ6G7DTubHHq5CGmQYbuzb1sxWVGoSUMfXjeeJXJZGrh",
  "key9": "4c8LfxW48AffeyhjaafnAaGq464YcLPTVc8hXwaAZuN2KezcjLmjNgdZK93uM3JUAyEa9ftcMLDruSVrLvy1EGKX",
  "key10": "3DPSDw44QUNWe9BctbSD4M4vek8Rzom3CUpzcp5GCzer5pbVS5EtmByaze7EtgDXcpuLS6wkqPswgs4Lp4oKe8Qf",
  "key11": "TGdZhmvjmPqZ6aWdayB1X4BDfwrLYL5c7bR4Ncz8tFE9n5aq7HFsB5iL3ob3HdGGiRR8684dezAo1nvLEZvrHuQ",
  "key12": "2aeMqnAjjPYZDUN1yfEuAecoD4KDxw3M2mpucwdYya4nnrLG6FK6rB9NPZXBCQapVxMirKx743YtWCbSjqkrjYEm",
  "key13": "35Ypewn6cMQgYDVXbT5ytbfhdo21mr1FiFw3dBmMPz6DEMhrKUgc1hZaxz9Xc5q1XjEagVnQc3QPwyNSbg9f7FiD",
  "key14": "4kMJV6eQQELD9jBDLpKPZpTpLMYVVbmK46726Z5meUFd6sN5MJ2eGfzDMEb5PjiUbUwHMubWvCoKc3VB5bzkAcna",
  "key15": "3z3CcTwoK4ahSQcYs5wq52krTqYd5iT584a4F5fbc7cGBePTkMukCmuwafjRJMNmUpcLiuqWf7THj9rs23PM6KSX",
  "key16": "BuojvXb1vXHYNUx4CwbjPQFsjavtj8unTfFaCz3Xz2m9RRnA8ts5y59BC6bz4LaAmc799WRJTweGxnUAhEoHjow",
  "key17": "5LLHjTRAY4qBEtqEL5i8FqTb5YsHbYN25rPs2SSEXM4jJRSTnDkA8KJERzmdJADwo1bqSZJAoys7rWmsCHYEvp13",
  "key18": "67F5iZ2CWTsfPSJxCwK3iJPMeoTv8bAPhjvigi9ixySwF1LyF5cwu6pNXsvKBeuk5vw3xxnn8tnMXsUdxJnVt7HV",
  "key19": "2b8X2Mdrz7XKPHb2MgdRF554iK2yov11jZzGLUXhJqFxEqu3bVQ2TtDPBiYWdaEM9AQBFfyShYv6kpzUvGAyZoye",
  "key20": "4SPa3SXAVZKLd3eR1mHxwjsEXDYVPRgrQMXqnmW8mBAJhBzU2bvoRtF8EvnenZytJpmWcg96pPib4fvorzpRhqSn",
  "key21": "3u5dqpFnkW9mmrafL22cPMUgNj8mFnYuyKXfjtnaEuDyAjEbvZsnYnM6SdVieKwrWEoioVFxeU2T1VbSpKZ4pnu4",
  "key22": "2iabbtwwEPK3pkgRmKr3HyoR8fJoRSAXTcvT7txJchk6agww3KmD9vFdBia7grUjCgTffgBKmYJTDfBZwmVW8FL3",
  "key23": "4QctKAQFv32u4qx18ByVC1CoA6Nn3Yjby2mppkCdGfEVapPF86Ykpda2Yd3ouuaUiYN85M9AFBLe9bNDSiajtHCp",
  "key24": "45AYSiAmhXYDHmahwi1dTXgiay4ScWDVfmvYr2zdasbAMNvm4esxmQ9DRtDFQmuuiUdErcz15G7oCM2h2832fC2r",
  "key25": "2k1AxmPMFWBrfhKqYSuxkyFTpavptQfXQvJCBDidRNH7LXEzeUYYyk8TJ9bfDoQh7S8cZqzH8J7u1T96u8WKRkcn",
  "key26": "2PygALkaN3ViMbZx9QrBeVxZihat47dBNRdPK6x5Va2WhKWfnouUcaGU3EYSXWHRSHiVsUYbXVVVy4vosXascMNC",
  "key27": "2ncEKeDXUuXFqoYwFDRuVVXTZ77wUFu1s7sH35sdbS7VAmjc2PVRSDb2mzdwfuqgQLzntfc92zT49XNig5frMuN3",
  "key28": "H8cAXyCSHKX4GxCcHG5B4ScLYm79r1zxi6WxW9WgETaqsfExyWfGALGFsRHQfv6QWxke5yx9vhriwAaRUPU8fex"
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
