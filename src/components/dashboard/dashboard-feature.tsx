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
    "2SN9WvM1Docsj23C8vpgBNFDTv6XFnjzE8Trzftq2uaMt5rzhyXZBZxvZtadhUobh71wLZfDUNmiqVCFYjw4HPso"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qakd8eJZ65aypcrWRDTHwmgFpB4M3L4SL79BdHnVr5DVmCjWQDRXQdUU4zYGaT1w2AyWCqhwLf5NifB7qkvSP9m",
  "key1": "23sbd8ensHBLD7YwkdXFCpNukiCWv6GhuSb9ypYeqdkXEcZb7JbCUTtRv4gcGCr4wQM4VEMGWhyXL5mfdwqM3gN1",
  "key2": "3Vu8X3Tvi26BAyMJpJfi5WdfYfyMwfCLDdTrbrgCbbcTuS8U6U6CsyidoPhL1Q7X8mLutAmr3ogf5QQ9zFyQMKnv",
  "key3": "5eXgnFSQLSoktzcovKkrtr7ChiU95qfZBpmEBzQUaHMrkhTtbCTszdyTcH2x1BvEewKCuMd8CUJKJWxFRVv4QB89",
  "key4": "2KeBjc3LmCiztMrroLeHdjH9sCJeCkUxfrmMEu1iFVjBNFK3h8eYvtfGMgxpQRgUjZcmVNrxD1Bd6XGrCMBut3oJ",
  "key5": "5423ZPFd9LHfcvnHVR2jaFEHaHoE2Tz37w14APrVkFRc85EEKvgGzWDH94B5ry5FJa2PCTMC66oSuahgpnSey1Ex",
  "key6": "4f5QuC1Py11t8utPaTqnMPEm9yBjMcWE99aDCzDicf5igWMGNinyZMp3jqdgYNQ1z1LSaJLdi8v6chsEQN1sYQj2",
  "key7": "5WTyrXhEbLb3LgUHcADrSKRJbXDKfSU4kMqRpYk7ooDPTUGw5A6YdV1hfG4TQ5NsWxFGeAXT4JB9S22jATiv2P9a",
  "key8": "3m8XLVkX2D5HBMhy5hWHfDqgkHXAWkJv8m4afECccbVVgvjQLYdss1vy77R8gGG8UFfpQHUPya2mxSkfDu5CCJ52",
  "key9": "2HoYWRn25bArP7ERU66FcwZvQxnV566JKVtybMTVXEbtXGjmh4qVS3DbyH4GcNSAD6gX3kAyLacYEjmY8NdtqW3n",
  "key10": "3wgXoT3SLSte8xpnwUAHBcYVNTHUaj67233TaPApju1on3HJWXW1yb8vokbsqTbRnHBQPfTrY7RFGWXb6zayPef3",
  "key11": "2RR3hHgza2f93v8tB3rVBfba1nSHRfMgngvvWzzMGC2NzS59jCX7KKHZxwkqrs6xYQtpFajHqmxGJJA5yiAtfgyJ",
  "key12": "3438FfSHYYRb4VUkH33WYCxbmaULpfZywt1JcQFJLazYyL8shG8MrNWC3a6GgZXiNDNheGVgCtuYGnEMTCUAFsuQ",
  "key13": "3s2LHxQuSpLHWswFD8RoT96EPg79PLVjfcNjJ4GinSHH4tA3TFSDU5pKR5YXGEsqdLi78H5AUp48mNkeDdhpHErx",
  "key14": "5ePYRJUruJxjhGwD2aBzphZGEf7P3wV3FvwtcY4xV9i11yZMrheWqrUMLBmoK3TB6tLwaNqM9MFyo6y1Qk5RD9U2",
  "key15": "3CTNcTKLt2dareJgCAEJG3kCPAbdRBRoQiHzPeeWCv1e9AgGQV2M21myvAGwsTytmBLzowFGTVHpPtS4TWKNGNdq",
  "key16": "5pp5SFGBu519vCbcBNmUowFDRsWyWXT6aR9bDrdFRyHHzJHjDsDBHqCJMUYJjKXAkXQHE1M9hGzZE2ERRFKtgvg3",
  "key17": "46gkdDn67eVhHeq1v7F1Pq4ikGTzuTP9TnVpWTTGUrn2m7LmRQedHcPtsHVuf4mN7Fqo4xz5KXyEYthZk3vuTPeF",
  "key18": "54bBzbjzLFND5CKnTeRhb6Kvsnc8GxxBwmYKFGM5eDXoTh3WUsMB7LbiY5fBBdRQjXpVU37KPTooXhQQ5JseZTL1",
  "key19": "3mvtU5AzZQRwbnvjE69rPcfWAzV11Tv6fe73FiFhzdivjA7Djh3KQEkGW9bytvGEiTP3rvfC3Brt3orZaPDNYRVd",
  "key20": "5pTHRRjq82WMq9U3H91Q3cFtikWg3nqafoEZnf55zUoFGsSKkE5uWLdpjXB8JyUykqRdbbfDLqonAda7gzMXCp62",
  "key21": "mYxEtJjNuAWPjRpEZFLyZUrt6zuHopAXxBPdiCrg7HgJGG8ciHugtGjXJ9dV2YGzK8itHD2H9aoXStEapFodiFF",
  "key22": "3d3tyiw3rbMziEZdmJCdjzpXDT4ZtsjHHoZaSWfUgNNy3C1pFLZVRZfWo2yg5shNEfLU7Dj9iAp2SuDWCvSzrdKs",
  "key23": "5yNcZwrw5Lz9EJhbaAFNutBpNS4WtXc37qrVBrCuJtmjNtLRxnQ9zzmjpwNTe463cTA4vHc79H83dj8PaMcDQvMP",
  "key24": "4heLQBpzPjJrHN4Fh7Z2sWfJUxC7Xr7hqu7e5JciR9Kt7ETeHcTbTZ28gHZsCBMPny5aJ4K6VGfwZcihALzUTfQV",
  "key25": "2vkH6oKWW7rxxHqhJTGrSFTwprcMGbrcXZFWdvz99p56UtcshFUsCjNDq6Aw6vQf2zEXzogY2NBbwb1Bmu1UpSR8",
  "key26": "2XG9H3gcfQpdKquVutYnVwZJit22kJdbmmoztcTM4musE6ZNcwXGZd4tRxiCPTMB4s926LspiwL9HHkFDmHXAzGV"
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
