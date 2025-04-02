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
    "4hkyvbFqhqDW2dhaAqkprUSQwrrCNukA9X9CFs2Cbvh7zjPzRhagGY5gMVyH6EPSc2QB3ywkvZPPv2JtUK7xZWdU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mTwJEXKvUg4S4496CMf6FurHqYfCXztX3nYgbwo2AJyiXpEy1MwR8ZjGPQGcQ4atyAPo2ueUzwQpLVeGtRpBLG5",
  "key1": "TKMsvRtn4FTbwPHXSuUiWukq762WLKNjzrDGiRXAbi51K9eoCjqr4Xe8C1d8nqarZBFMvqXrx3ZUbR24d6gH3gw",
  "key2": "iQ9FJ4otUPoog8co8qorgCJwxSNP8ZrJyNq2QHFmC5oaend2M1tNEE5ePfvxxNkgi52bYRxHMo2x7M8BXY6785s",
  "key3": "5jj78eECpcVor4LLucidRE3LufrtBrufU712kGzkPzWdfiPzh1CjywBxFqBeCEnC7iim1MheepzrwuBP48auJhaL",
  "key4": "21PMbokRAeha28T4ZXVHfcjct6BrWqrjMuW6kHozFEnVri7AzwUxQnX2snYTsvYJW3qcNTpkF8YsAUXCX42QrBuH",
  "key5": "EvFX6BEN3RqBLMLJpgrDFwj7vAJiFK8zGGwhMFKu8wvDkRxbtWCpka9yxFPFzTXDJ6uYYHCJxYZ2WkQ8Vg4LVtT",
  "key6": "5bKfHhh1ZiSWYyXeHeDUFnALnLx1brdjsWxW4Bo8cVccKDiHtuUoBnxsCAKQM3NDTcre1NWiXGQt5xqne3GzWuJk",
  "key7": "2kF9TiSAjpvddKZ8NmrL2g1oWHnVpcGxYLD9UmTccVQ2UHdvWU4cLiESgDpfP973KaodDJHmz4tUy3whbVRMobNe",
  "key8": "v57DpYZXJyMoZGSR4rVpxWtZfBtndBUrkNPGX4nUrUmH7t8PAEbfW7fzqEziUMe6oTuuwU7i43nU1eLDswZSCxD",
  "key9": "2YRv3B7TRNd4RjKkZXg8kEHgxVX4LbVt4dyho1a5oFVbyanzoyYWjJNydrzcBjzzCqSEhYniEyNRuXd3i7fvSEYL",
  "key10": "4kqgGdGiEXR58k61fKHpkx3Ai84v747p4C6wvH8jsWG9GGFirTCVXBEepCxo6A1EinG8pFbcgFJeRLRf3BtwEj6j",
  "key11": "4zrLeCagJnDoq9n1usXMDL4j5F1frJkcKB2JYz984YMzef5Xm4zC4DRCB6Xo2rxxbAgfuXV3ickK9GwJ8GDgxyWK",
  "key12": "4HohwtScywzN9geJmjoxaZNawSoN7AbR98kboz9UMfNR5B3ND3pU8DgyaDRfPP57qtyoVu3WV5cW2utYAGffM6np",
  "key13": "3VWcB8KjsAgTu1ivFtxgYmrmU2i4Ru8BqPyB38JoJwts1jXZcVFaNHjqscyGZrSF4CHNMytEFgdkUeZNfDTWmR12",
  "key14": "brCfBvjaLhCJSZVmi6TnEyN6SNvLq6zDwmhC4isJo2eNQDcEuRgjh4k7aPNcVNrdVe9L4MHs51vef8bzX5EucPd",
  "key15": "3Q9nQSbXwCh3FyPE2pQKdCA7pnHFzz8jepKX6KD4Swiu7fZj4tZ9JuyW6YpKy2Yt3AMTmuayMkJuF5TKRJzVPE2H",
  "key16": "2GxQ5jytCAzKTfiayMJAssXTDJvMF6LPXJBx5JSpwGbzv6uPCfS6yUBayLpkSScf2eZBtY42t9gqKgaX88Yidxzr",
  "key17": "3vH5qTLthaL1P3KkyXYrKwS1czX8yKLc1FHrf99tdXzrAafLufxqHhz2aMsbtf3sNc7famTWfqkncYKnJmUHaFdU",
  "key18": "3Aeb79HD86RwdWgtixJESYZAFMQ6xgFmSUY6zKJbMWjnodXQYiR4tY9zcGNsTk6mGZaGNPkstVPAQm2mu6CYiKkJ",
  "key19": "3J9DkEBYaG1xrDecynA4HoN15RPjFLotZ2ZdUjGGkiJCS5GtXDbCeTTF1Lo8uqnN3ZT9dVhJL5vTBMxvRMmWvghU",
  "key20": "2nFLLG7Y2ynnB1cmd5xtTBjFUCC9Z8ZC4tq1KFV9ELXZB77xHvPjqixpUW3wNCiuohjmEbyfHFPdwzij4Twx4dCr",
  "key21": "5nrywxJjyKUR9pVMMAZYSLUWEKuGhFjZfAZPKTcJaTB83isqMZKPcMvESrPGUxntqBsutn3gbZMYaLjimKtFGbns",
  "key22": "4d1CFyrjK2n1ra7Bg4QkSWvmdsJXsoSx7JBMPkUbPNPanaCnA3B2drJcoC5sGrUW1eVbmEyKAyqW8LBvd9xsn4a4",
  "key23": "4D51Tws2dJNrjZVpRuTS2uEPGNgRTjXFtsC9wLhredK27MpRqviG4UKAb95jbxkd2V3pGUr62fYVHVzQCwP7aohD",
  "key24": "3WjcqS5oFY1pRrrHhpEMizvVYoVC8FwZ567ac5xGAKKut59mcckHzzbn9StrkMdE6RDQ99kvKfLM8ZgZtMJyho33",
  "key25": "27J2Tuo4mufLyCJDGNM5VQsgDTSL26ptpVo2HtFHkbCoQ8aE5WwJFiQrK5NLSGZ92ssnKd1Qj4LMnTdcaTMjDkDj",
  "key26": "2YSYowU8VUq8mtZ1bHYvb7LD1kjQ4KzCM84guGPs8FbYihEZdQrE4djp2eYGsK5tvrfVwyDUgqLLBvND4iTcGmCg",
  "key27": "2Xo2oa3L5cvqf2vW4JmcfmSY7Dsym9VwUobtHZUtyzJ6PKvQXv48wBF2uMcb6za5TqTrA1TAX1e8juq96fWDKoR",
  "key28": "G5iKmiEDDJEG9UsHz4iAjQWzrdnjSy1K6nJuwZ3cwbpjNqUet5C7XfM7uMWQHemwteHhopHTxhUDcgiQT76hDXm",
  "key29": "2feH2qivAKCVdSJWFLr2ugX4WrjFggYpzMdsB4ZVck7jVEjSHPgn37WkDosp3hZ4i4uWnKULgVe91ydUYXcjEQZb",
  "key30": "4QkmZ6LUA883jxeNiYWFsF3mhFKzX6qBi6YSfrVM9gjbEQoBHZhdWGuWhJxHLKUAPsu99uyMCTLBQkLr89S8Y2ZE",
  "key31": "LXUQwdQpMiSBQBvyRsozh7zPqqvqjDPWDZu4T1cr4SWsGiMAP3BnbJ3oT8gg4MNPu18PDUcuergec343dRdwytd",
  "key32": "5k4v56Kry1vWiaVmVzZ2Xgpe23qJj1ojFx6GijmbtvF6yvmjVaofDREyfSGoCzi6o52USbEk73mUyi8yW3coLcZD",
  "key33": "3NriC8Q6yzZTFcVn4W8aqdcMnJxPnwEuarGS7ACbmHoESs82GE74jWfLJUTRjSMyAzLw7pu338KGpbjuAraHVguH",
  "key34": "yfhSYmH8LQjFTVJxrXKSuNVhVohuyzMBGq3P6dTAgTLETLCDMb7BxSd9DZAso4GmNDojnJBnpGruDAkuK9KmHMs",
  "key35": "56Fuo8JPRbfhpUK3pAvobiagE7AYifkQkzjet9Dv6fVfhGKDDr2ST4UAnzi9ckEM8xttZvwBFNQXwzqTYqgVQgbp",
  "key36": "5dRHkT9rHknHvgntgeDLHw6BSXLUi69PVb9EawtSxs7SWnMH8CXMiwGtBi3bcF2cuLxMxzLFfG1NXfZnxu6VvQhm"
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
