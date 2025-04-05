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
    "3gUv5AiTnBqnVT1ZPSC2W3d9KJzdphJYP537kve33goFfBgpKWCxsCHZ7A3BovRkHSAk5bkHtix2Argb2zdL5iFQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AVy4kpRaPnWbwe6HURWMc8B5JBJ951UkEAzwzwbJ8Ac5dccmzE8g1RmdazxAxJJsNn8EXKAZRS31LQSDoCEqL4o",
  "key1": "bX6f4rrGMMbuFX3DMCCmPA8ixdLsYqyzeaVDfQSJGw3btyXiurwxt5jpgxomKDp4f4rPDBhNqmcFk79jucrGmtB",
  "key2": "3sv7vyTU2X9KQ8xh72h6ormTu56MbbbGF2UWW2e9GiiXqq5gSoGFhK6XY9pCtAN53pm5hCo272t8dEJbNqShCMFD",
  "key3": "3Fro3JDhf4zsPv9b2DHcVW9yzYY5VLE14yM7BXXTk7tu9zuCbTu2yZS4Ro1TtggQf1mccgkf2LqywX8BMFyYZzXB",
  "key4": "i6kQQnC42mfezdYvHgwvfN42BxDNdtTKfAHzwSCaRiLADaCEcDgPDZHQGVPHYuc6XiXsVtQjQGbyxoY6baKpdi8",
  "key5": "4BYRnKZFdtQAMmmFiBgNR44wiV85QUxgrvNn1eckwWAJrDC4233jAxuQY5hbCmegBQcawM777RLzoZDMdTCNZfj9",
  "key6": "2A6D5SapfAXmddEGeiPUu57nzqohoMyMnsw2axtf5jtxRKWdE4Q8fK1CAGV6cDhuYMVRdpbWpiUJE2KCicKaL8iW",
  "key7": "3ttfa5JwYpXvNE4BdGBpGfDGYJdpHgm4kXPvBm2ZaJXtjHdJ4aqppsers2v4rWBJQgLRpDnE9NGaE4ty9UaWYZKJ",
  "key8": "RBPsawNnAd7EiZ2qzUCrmTpAdPELzgJgQ9Vu2mekSygA737aorr7GkM6TDdvZs2TCJpLedwYUsamwoD5TQdKAtK",
  "key9": "5NqzwrYJYjXM9wS7n6gGF5drUCSeSDdCz6zV3Pff4k4iEpkbDDwzDfE5YMrRpbtHKhXRxSjYf87vtwesoU5fXQ6W",
  "key10": "3KE3Cqc38EYq9TJqUdEibTjHXWr6ytP86z8r72EVsz1HA12iRbj32jVVo5av9u1jyRzpSHyxnc5PE3yZYC87bsBh",
  "key11": "5SQXqooXbvwXTJZNLdU6T2F9gfj6dz2VXn4tNs2Zu8Tyt3tn6EaZkxjKgdbHMb46WBwSvZfz28FcdBVVzzqhd3dT",
  "key12": "5W16SyEj9obtXLkHBBHZaMi1L9NbWQhuMUe3uPFNgSc6r8hvqfLxYkhzW9qvAEPmSNMBni5hyfPs9UQ8GiWuGTU9",
  "key13": "232xUn5X3rVCtB8APwVqoG3xzorPJqsiqgjUjoWyy5JY9xTGDVQvtenDzqWQ8eY22C4EafYfDLv7oGkGYRxWLbTZ",
  "key14": "3nzfmbJpNH1E6Fa9n5HV11872WeFNJ5uvaEPqHhc7mFwqHCZDeBCBeHXySfe1f8PVcweZiv7scQg8WKoZLNcnMfG",
  "key15": "3oue89Q3byCbwyoMCtiRTU8GFQv1aim48uZdojUiPtKpndJpERrpPdbLLqKJ4vjksJB36ASrXwUwk7znq9iw5wsQ",
  "key16": "2UvWZMu8evaqJEm6dy1nxXLRCvwvJM1jTGkqxTp5i7wSuqqJj4T9HcBFeHLsjAk4ENNXYd4c9RZZW8gMsHekJtub",
  "key17": "2Moz9NoTmwURyixtARUzpRxd87eHCzWoqdpV4v4iZizYMdSnCAtDNaJo66ytMg6eHLGaXJaKLa9y88Xh36E7vJUu",
  "key18": "28byc246BJEGYcXo6JkyUKuc8oray9WBbDkuWA5fWmanBRAnUDJxj3WTo6ZLhURnxePYxDsPjTGEhYpcWJnHs39Y",
  "key19": "446qAgc4HGP6xK3uYGzWvMHAQJcWmx3BL2MCp21pJMKf2RMFesiRNfwAYtXJkSs4fQ814C23pQCaUFZ8y95gmPM7",
  "key20": "5j6fimNvpJ1Hh74y3VkjKFPrB15hzDGmFhgNkXctsbfZ3FMFftGeByUzGe6D5fuiGytnnQMvYUqKhiLAaCGAhfDv",
  "key21": "5id76USpPW62ezRotdiAWGVKq3cUkmMCxqNSaseZh8GzZgqpaPWfkHBaQPDmUXZqfmX3XmfDfC5uBxKfnbDdgKgY",
  "key22": "5Kdjor5tLkBSJdUTpFnhxCqUZzMwEAJ2yBjb17pLwRYd46h4AphL1WZmG9oNDRw8HojvhXnKDHeWsczKV8kMLAdC",
  "key23": "3C1RtxoQTbeo5JSvwWJhxb6pPBdt9ucG4u36hPaGyrRbHAY5dxx2Qm5RWKx5AgwWXoodQ7yVbhyDJii8beoDpR8G",
  "key24": "7NRge2pEMmDHMTJeYs8fUpMUzwZfN5uHC4fxu5HSUbczPh4HVQHtgCgyydPcLjcwBCHMRxaaeYEv2tBckAi7Hkx",
  "key25": "3cc6tEdLMia6Kq6aCRpA7fYZymjSyfSqLc3kudSJqxaEBtAZjTz2wNwvaoYvvSjzvZWp7udJWFQX1j7wcQoXSWLj",
  "key26": "3DeM7JR9upDEbKNaTyXynVsqcmpnM9LcwRq1pvjQ8oqb8JkRh6xeVeJPYcrkgEyHdq9FvTVs8SRFsLtat5WR542K",
  "key27": "igeVosAgKJY1a1bBax36rPGnEGv74LhSun3ypFn4NVRzUZMoGNUZMmvYpEch4cGs4VqrnAbR58jCxHEsQ44dUWo",
  "key28": "SP7VmAzHxws7oYF91z62SaLroi8eo9WLa4hn6DFCEpzb8LEgEwcaRWUwPTJoqR1c2LL1PPBXH9R7dA5rD16ztV6",
  "key29": "2M6TEYvMXnT7jzNHasksrfou6pQLwAi6y7nntHjekmq7jwBbtxiCvMNSuLGJS4hgAVq4AuszV7u7SzQwATKrZpb6",
  "key30": "2sguUhw8HJqSFopFxnUuroUeH9vBcbfaa2BbRV5e9Arsk6mc52aYsJ2dRmAg1V4Egosw1FbcEQGU1RMeTR8nZ8z3",
  "key31": "54ngGF4DtLheTgeoGYkyQndpCCQyGfN1v8rPPqPRKxQeTN6quLrYXqZMSxDVKqRaRHcGA38uTMrFny2ydf9LbAZ2",
  "key32": "3wVBoHkAwVK6Ng4kBtsTyxRKtnZoiEg2W3sPpNDSreKG5WgHxR451QFbVouwtT415WtrL58xN5oRZxmbeSDWDUeM",
  "key33": "5q3QoDBt9YyvLSx5u6PPUK6GwWdq6z2LHwALzNWwDHFz33Vo1xe7tMEQU9iQJk4w1F3G7E72KqLwZkJEnZGmqHkB"
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
