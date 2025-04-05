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
    "631hnVVLdqfV3d1gUS3TBbJPAdUsCKLMaCAvhUGsqiccAZGnL8gXX9W4QC8myvhyJRsFxFgZ7p8iSHn8PzfyW57V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44QAFwzeQXdPN1XqV5SXpLVfwNN8Sb9usVdL83YyAPVbQPNhRXFYH6kL5eMJv9fvrchEaG5BPNVEZnfSSuVvi1Xq",
  "key1": "4w7syUMFLJMjSeVhzX5Qi9e96Qp2r4tUMJRAS7SJHoZu6ffoNQEJwiYY5DUkw32FoeDTBRP43ERqXdZbzTfaArk6",
  "key2": "ACxT4QHPsxjzDiUZ7eaBgrWsX7E4xdc3cFXgfb4Bmwc6ozG5BLcNwfJY9XGhsZqNzmW8VM6BPrZ1yhW3WTxRwR7",
  "key3": "49sz7aEn8814UVDSKEBaxa6U4nGsQuGsGkL8sMtM1HreR4vcM17oiupRap3a1SKssTkwrzkbGz7MnU3xHJZtG98M",
  "key4": "3jGUs3uuBcNR8wEKXjZtug5Wczim9kFs1Q1eKeWDCCsXHo3D1juZ55nDsHgD3nyoVJkoofnTaiWNMvbw5Maa6azP",
  "key5": "5buw7VWZT6bT4PeeSVTdMnk153EKpSR9j4NZ9bB5vpg5XndoG3gDELaKiFzwZRRMtSctHi9ApbA1dSAag4qgvmGc",
  "key6": "34nEzKdiwkpHS9w9NJ5KCUh1eMzKbzDLSRP6d8ZVFPuToSeqejexjrWbkq7cBXfgAv9NHmGa8KGpYHGSACXL42qB",
  "key7": "2i4EhEDBFJwW6d7DbabsB7pFqSh2edJPRtLeQARqCrLhs6QrujMRC5tpce7xfMZXoHhq5HUrSgbbiPCQ2Y82VMTz",
  "key8": "BZm57wVC6KFEoUNeDo6nqPQkVwwYeYh5jgtpvcfKpRKLK3BXEPva64axkRmCCfj6Fs4x9jWoxyVdCLWwQ1mjV3r",
  "key9": "KCs5AFz2Cswa4oavZBY2V64zDpjAAHFYWkB3LfWEHwqHyxfuWUWKfZKfPvNHwp6E19fDry8yMu7Kf1KGeFBJMta",
  "key10": "25CEYNyDWkVSoxKDbqJuvE1ua2QeANrix7wqCbvfh1p3VbgpSbrpWVvL5pxiiLF5nVnvqhpjq9f6S8PtCwjtjtwp",
  "key11": "2WdSvawtpJ55aM3AcWUi9dr8Zgvrkjmv3uwq9fgLVxaYWepUFxrvqKHthcr2d3LQ2qo2moxfWGrmk3AaAK4Fr2qK",
  "key12": "3zDnXdG7CqVsdn2PrWn22EqPSvju3Kt4auWvE5AzmrvhRatdh7MQBMFmQcAh2Wwt7P6gMTjERKkBVno1WAaFvKaM",
  "key13": "4zRtMdFLJoz79bvyeA2WmvaKzrLMZWA6y4UCsCN5Zzjk6QYBxn6NjR7CQwQ89iGe4TnYL4mQccRueTgwHS6ZUjhe",
  "key14": "3vSHyKZdUgHdJLTF8uupvYmjQZmCDmW6JCZqBJ85harMM3CTb6p7pG6mGMBXjahhxy3QTZ3rqrwv4wSM8eGTbxDc",
  "key15": "2uUTgiuXzqGw5YZaYJ6DfVyU1PKGBEpCK3RvZe81XwNoaRTpSfs8ssZvx6rMuZfskXXbnTKdhCM1tn4ptJeA98Q",
  "key16": "67evtpfQvQ52DvGCRUN6G1GpXLnnDoXi4VGVdxiSnE2HchTvjcBy49DrWqSQiZi6nRjfYkuhtTX237zdMQ6Q4euL",
  "key17": "2356YJU7NWC8SSAAdnBDFTKMB1CukNcYA9gFkJF69MLeoKqBXLHSwMw2UmbQgEb5TbUk6r785xwPG7PGbm8rKUrs",
  "key18": "4TbnMYvQwCin192HfuwVjbPJ6y4UfofiMgHNNhRRQciqv5fTEdzsoZKb2Xrqy96PdmYGDQkkhUXGUZfHzj3csR4r",
  "key19": "3QtFx27pnJWvqHF8buDh7cCwKrPpCmBAurXPjckrkfy4AhdxRiJRzzBjf7yGnuQv314yYLUJxHjXMTBiMmMNuuiu",
  "key20": "3qv9sREyDXfkaXbiQad8kTwdwRYDDFerdYAStU6eyDPy5PmoTZVJfvxmpeXh3FBhUBq5CEpo1yvp5UHUXPoq5Z9T",
  "key21": "3w8pKW5oSJ5BT9WBR3pZ9jb14TdunHHTev2oYK4DSzdpAn7KEGDvNUR6gT8H9chAfUsBmYXpPkvFSjEfXBSKhLJL",
  "key22": "3c4v1LR4a4YRCxcqt6fTkfATAsRGvTHQh9Z1ShELUsdfRzFq7BVRdgXvhzP5DMTi8CJFKNoXgBspdoWTq7qcgSSw",
  "key23": "3aYrFPCvEgz1KcEXPYtDUFMY8HWuugtUwiLzkV4aDm7hbpYRAXnvEi2fBWzeFkqoCbFr5yncjL9Y3N4NfCSYW4HF",
  "key24": "3vn5KKQ2FJD19cHSP4PW9H385ShBd4wRYjW6XW3Bf1WRikes3EZhKKBxerjJZtj6NCTfGjyN6CQDEenf9ZzyBXJC",
  "key25": "4D9aDo16FuKJ1nm4yqEjtUaGw8TNwBVssUeA1XU3EC9w3WGyboQpo7S1qzQESSA9mfe6gmynpdrjPFbXCGkYprTs",
  "key26": "3ELgAVvwJUKt8s4EWhTWn4WtBAhoLsNZVSU2Yz7eoQ3hPHYUTkfdBioQGyYbM2oKrnJLcpjiNVprLGWkRRhaqkek",
  "key27": "2JY4purQMgVpd8VhgEnVWZjP7YAaHEyPSAocraW485RZPZihMr6zAL6jGK2e8JHcDTx7nyNaHmvdAoBQeU1og8DV",
  "key28": "uuHo5eJur1e2vi1PZPcajFzJxPBko4hBJELu3cAyuENW83QsgPs4pHoTiDLpF4fMHxe9TjRSaFZrPFBDbmhR2pz",
  "key29": "3abr9TE8dknCPRaRWg67DWVxUuVBTfmJCSCSDmuG3Y8qs5aXArwdYATPKCfKiXxsQYyA7fnkEdnWQB8DxE8ixN2E",
  "key30": "48MSKCzsGeSkGKKELJU6fHh6gZc3cjTr4eTZwAxdPAPwvZE98kQ9AgquGVUaYwm3XfE6kHL1gayGmKH2QR5DnnYs",
  "key31": "5ryA7mmgXxn4LnNmPhz8RMBYYXtuVGfy6CpuFApMPnaWK1FUv5738e69RBjXVVQkFwoR5zTkyURYC2dNrJ8kDwdo",
  "key32": "5VxZ3JsEJU4Mmjx91bBMiNX2mGjWSJTUzvwDSmhersn46g1b2W2rPonhpNDFd7t51Qx8edUPrkWmfNGMYWs5VpLd",
  "key33": "398iVQRhTaqsDEzf5mZZ2yKjjCZi9TkQcuxEUwwoeFHT7HC3688VyDeCcNvgey6NvnQiXqjU3yKmFQ5Wo1FAnKqV",
  "key34": "5jj5xzCmAXtvZjnufvPLMS5npVKkVvMX7gvaTuLXLZX1uWXspFBaUubU3nZsUNgk6QcqSrEgjYwjJxbCJpJw2Dx2",
  "key35": "3EZEGdkhX9h7yMYSt1Laitw2wyJcF7dchwkkCqHmsKfEiK8xXpvnrHtjkkokPeK4PUwV9HmYvitNGdd7DCPM9pRU",
  "key36": "4AeF6AJeCcwx9ELVApuooDiBHLw5abDGLqsYuUYMGGg6Gryq6befoPf9DYPWp7CmTsEKbg56PKzSGtuzMrKWZaB",
  "key37": "UdyfEVx9tC2Zz3YDygx3n4Gte2whitUpnbfHonqx6kDjdh9K4P1vjGpbk3jR8bixLBosC9po1GymBFvDiJWMQyj",
  "key38": "5UoW8hg9n4Tj4P8CmUkfaALyejUgwMQ555FKd6kTUHjnM2dqRC1CgsyNLXnagDkiqWcJjgqWjzf6MgYv9ATN3mAF",
  "key39": "3y5uZaHzJZsszXoTEugEqiLVqYtbDygDorHTL2q8T4Sig3CWEuo8xihSm8y1BwuNrrgXSnS8j3DLGf25jZNX2Ytw",
  "key40": "3kdxG9k6CEFeQfJB5CM67uWpuWUwmm7q6ZNaipjLvdx8wZhL6ANrWddptLxfTRmityJ4tDMdv9CW47v6tP1M3LPF"
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
