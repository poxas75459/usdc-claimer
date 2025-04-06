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
    "4YBEEbwfGvtxHLj5Dw6FyhPG3oABQfLxE53ER64QJtW6V7NH1nUj3M9uNx14hCwzDzXXSTfi2QERubifeqVNt29V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LFgDyr1ooAGJm37J9hKdygbhkKWrfUHWs2zt1BPkAEwDWcmBYETYjq3ZbTNUwgudFgK84zL2raRtqn1XuLYfiWA",
  "key1": "5XtLox397AawKMqqDR8JcunSUPc5TdG7Qc253mwnvGARUNFCF2Wc3Hs7WcVDGCk74jzyMok8rtnd6PyrCYSFGRPN",
  "key2": "4JeshGjWo1DBFU7fCsbEXMsKqkG85w3taGDY4Kd5Uq5frvtDDaLAvQsk3paVuihcyZLo9L4ywRyZZeVjC95S61d9",
  "key3": "2RY8smPbd8bjjt6LS4wCh935ScwxvKWU3RVLJDpoyoXA4fSKATCDUyw4KbKFoUvCcZS8qG3tWG59Tj3fmFFBpap3",
  "key4": "4MZdWdUFANVaeFM9V2Mvin5SYpDVdnu53L9DZA6ywAqmiao56vVeWiHY9YiPYAKn3XyjE5bWpeW5xoLbGjDvzsti",
  "key5": "4bVi9fmGsVHWhqhmwRBBwvFcLMewo9s4Z9gBxHrnxYBewpDTPSuTnudcKVErnZxRo8YNyCyRx63t1BNEhaDVsG43",
  "key6": "4rkgtvuSW7RftR2cdpq3cuT1wQu7U5qcLQ1FGkJ9SjcaBqXoy4ofTvfAkDBJpubfDVXtymqaJHsCRNLRBpL8Z4p1",
  "key7": "48dLmZqBMyLWaVVSRav4pmMBFXJTqFi5J625jGbiuZo1mViL3wKjVc9yXPodYDfAHF1KLooxzibPzQhr32CbS93p",
  "key8": "2hrhLsQaqWL69mDdCeYvMNeNLLpX9RozQZraMD85YpTwMM7An5iQwNjGNUASWT1iH6JdyU6HQT5rwZL83CdYWsXu",
  "key9": "T3BSqfKYgyRmYs72VhhoBBknrhWEyCRc34vXjdKFF1conNrnvv6hMSS3pB4BT4xPM3BNY39a7XU7VpsBaSCbtV6",
  "key10": "49aAy2TyB749TAfa2QaiKsVsjaaA3pLuL4bFgqr4ueD7kM3hYae2HFNZqqVN9MuKNPjxQRKcqtfuKAaJhGmLsnmC",
  "key11": "3oMerndYarXdWRGwS2tmeeeZzZpUyQULyyxgWiPFQqgmK5SxEAUtb51yoxQqwsg4osv55XmthmZj5Gz7KjwmvKDb",
  "key12": "53bKfTMPwX4mi7rakNWWayAoPV5EEW6Rg93p7AioQ2YrhEBpXz91sU72cYMwTjjjZGSAjcNd8JXbXLM3JVTxTJS4",
  "key13": "2uSEENzvTahrSqxcnytVLGXWCfUFaXmZAD2enqFdmrxGD9J9JJbTPiB7pXTaZ9MdrUP2mkEwfhGBkLf3AQyW5qw3",
  "key14": "urAEND8ponmdugUf54Avo4QxRJkTo1oxqh5V2aG3Mf6XJvnypUBqMxEFAt1ZdoC3UGYeRyDpWNrpgt3a2C5ed4a",
  "key15": "2dVN6nGGgHnx3G7bZWxZnB6fqm8kgr3a48eiXduBz4c7bniptXbTU4VNQxokWvBRPNKnhygqk3UcQVo2iDsBDEAT",
  "key16": "hKfYQLjes9mHwUTxC41J7beVfnTra8wmCJXZGnJoyWoUbavkhLTrZ1fu3RhBVfYFGNKxy3i5wwWa3SjLBZdFDxF",
  "key17": "3QwYHcowwgdanQUgEQ6n8vP6epzVfu4MyaeNAmFnK1TxaJxv62ihr6VeZaH1zjdnfAYVXCJCuE1BNhQBvyZih6KF",
  "key18": "5iwSGJ2rBt1Kw1KQpqfYf7jaxP63CH5GKXxWREio7gW7TTmasGeDdZ8VZqbpQuruhoPCWP66pR3E9VBfQf4iEE59",
  "key19": "2F3VfBjdThbM8XGBjF4T8xx4XCsJcMWBJM1SyXJZfVjPD4C9SkkPS9c8YVa4ZmLkFviH59agEqedZLGpdWCeP6op",
  "key20": "56cXMyvzaqkSvj13gcdUTWBrPet3gFx7dttFYfDHLjBAkvWasfZUMC8KodVFEm38UXqSq1ppJoF47y9LoV4aNBDE",
  "key21": "5dMWMHYPKtowr2h6wK9gQQZw2ons7HP232Mm117XHeiwmTeNXRmUShw54FTZhbXAhWvhwkaA7HiQdFag1d8hiZ9e",
  "key22": "3mjSgB9MbQ8KzgJGxNcRAqvZSANZEtPJBiJpQJN2wnGZjQnVRqicU91UuxNP3dhrf3yiMdZm4FqPRP65dTtWuzct",
  "key23": "34Z5t5gxARenn8bH2M263Jxc4sRy8BnZy5BnJtNVYPZXckKHCugfNAi4PUjzkQHJaToBty7FeG46ysBSvdmaEwGU",
  "key24": "Ht8NsTX62L6qVy2cdWwcVgKsuBZ1gJSijBMbJvuRfQmUBGMqxwwWGg5TL8h6ChFazq1SGyafZm9qHj81H3iZGd4",
  "key25": "2Xhagqxi2fg1Gke4AVrzMTGxEgKMykMzepq5ruHiyiPWz4Fm6UiGHa9FsczqjWf2ndSppUXxeWUMPLA5FdbWcjCw",
  "key26": "5jHw9y6e2pEHbkjTfghx2cpA1irhrzV1WRLGWz8qa8d1e7sXBVS7zbRE5rGbnMT1bVXMeK3bwMWaeujuF4bk9h6d",
  "key27": "66fK8NCTgApYsQxqExHzeofi3cahfvoHHnDKf5sN5JaGignQBXigPJwcu3QTSikmXYkpoC7XKVnQSEzVgB5V7UpT",
  "key28": "4YV8ZpgjhoaQ17YVaXytRpLMdGhv22zmgvTHby841HFHy2tRdtdgkhrjJAFFL51EaGN46yMg4qvu9yfwhbYgxKy2",
  "key29": "46BgoXcwoheWtCqoVmDLxGofdDbQqsDS88XLHH11BKU2qSfk7yQaCC7E4NoaQhxBR4zdyhBSgVeeCDj4AdB3fGcd",
  "key30": "27C6c7zXzcwSUjreTpm55nhf8NBcehHgWQBBu1251fpRjEq7QsQ56u1tkng4AEwy5XBynvzC2ofvRBa56uJzVKJi",
  "key31": "4GjdF2xushvgwKF2KVuEfTNbGPKNpQGytCMFnUBzFufqwPBQGbC1S37a5xVM9QCCXEyszffLqaxuv7JcQS8U9KRE"
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
