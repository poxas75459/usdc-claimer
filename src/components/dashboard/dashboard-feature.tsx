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
    "5wi8E5sGxMFqQy6ucCSxbwRRjyVTTuSMVwiPUcoww6LDG2j2ChWjVhC82dWGSHyUuxDJfP4zX1zwbyw5ZJrGnnmf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nHpV8Ek8jUHNJzg3zZy8n6N191ZQaooLE1a8cyxHFN5T16yrbcQe12za43iAbHcTi9mVvsAx7z9yu8MVAuJv34U",
  "key1": "jNLj2fLKQkpb47pnR26e1XBu7oCcFYKrbkiGSSRoDicTvZ2uCp6fUkp1gNM5rCCB8gqHY3iw4TJ9P3r6JjHRHfr",
  "key2": "39f6Y5W6bx7FdweXxVZRN7s6c3hdqBPX1uQqWEJWGS42kfjSruGVut7sCLNpjwaUQw2srrTdLPR5gGxvo8bs29oT",
  "key3": "4HtmsAhNDfTYe4jFBPj7FFnSQPm5TdV71pbE6t9NaNjoN7jCnoasNYbyBoEAojCm1ZY43CvGkzL5tkKDShYav8pk",
  "key4": "21w1Vxk7n96BhtYCek3siyEWBxoDtKDvGBDpxacaVvEmf6BgBc4yLojXmeSW2A4dr28Y3HPfkKtgWYPmi2WLshdA",
  "key5": "22yzCtW28DYnNUgZfwWxL4ZcQnGu8ukowQAFJQaipfb7mzF28mbDBMVpuT7yGAgZVFUjMRRGwdamRXjK9JYYticp",
  "key6": "4KV5TojYUjX3JeWuMYTfw6VNNeTnNxcRNY4ii1nRfkKD3AFNGZPTXapeC5kG54zE4HA8q43jJoqBtKTXoMPQquhv",
  "key7": "3FwF5c3H3R4U5kacP5SBKfXF7pPV2kgUHkkKGyPxq6tK3SBQ3xWGHb6vMxNsxSmfioH7msSfiiaQAwfsvn9uvxN3",
  "key8": "2WMBPVFEYXKQKGn6xXuWkj6z4zMJN12Huu9zfUbmJRWXt8hrvRVJ8qU5ojztDrM2cdtynUreY2BZNWbUbVio8WMN",
  "key9": "op4aHhU2uG6M1BLPUFmtZXhXhc5BWwyon9ZD113LpVCY6DnsdNfye5eYoCEUoqNJ4vgaQQDsmMD1veDF2Vr5Fja",
  "key10": "2DLMEBa3ikPMmu4e39DcQTBgsWyBNLf9JXXTrkgVzjraPG9xgZYC3MzVUW7KLLsmgTHpSFvNzVRBzMX766hxnpdD",
  "key11": "4DLaG5t9KbtsXomWWY5fp5NX5c4sGivRgiBG6K6eHEjxhagQEEHRfNvknRTjNVuLFqQJq1BcHMr2NKakb2gAFsvq",
  "key12": "4bw2duCd5Fcm96N2sArxbD55qeZJbpYHLjtcm9JdCh9qRxceDHBYoRA3pTr7HwDGrTVnKeXkNr7ffda6BzaNsbDp",
  "key13": "5LEzG91ugwtwsocd3bEFNNJSm1XPPV7jccgv1fsidyQeDDJ4XRXqj7dNDB5mpcbiSeQWPQkrTet91muJdbuBQqb5",
  "key14": "2xRHe5qLBJgQHaQBifQ9ZaXLSFhKV1rW8h8H1EtonkckCW1Z8NosfzrNVruRLf7Zic6ysZv9XFdgana9QS2yU4MM",
  "key15": "2ZMLNagVJg2aNXdun8pY5NKLZHxBNVM5KJka3zJcstHjNUk5iyZPEBvkSobKCP277QM3xSgBMYA68mWt9SojyBEV",
  "key16": "4SKVSRSYTeish2YGipyW931t96nyt5SGUjwMdVSDfe88fZcReVAv1EPC2BbbFXuX5KrbqbnNb1qHvChrqT6Xbnu9",
  "key17": "3tWizkpCDhmuWCsUePnCa5BbcYbFdhYGz2qnW1PZaeNHjCMnrEN7x5sSnUhfRafFhNgZSZFxRvC4smCsvytU2PHC",
  "key18": "4hw5rZG73JtU89Xffqp8d2yuJKiRh6NKv2uBZF1UBvtSB3DfAFHdjvtXoMAaKKwCE5LAUX6QPsP8Z1EM9mTv9FWJ",
  "key19": "2PUoJYxyiL2tPdC61PE7zV7hDZni2UHHMddr7Lvbb12P6Soj21oud5coxJDuQHtirND7ByuKhmu1fiG4AHqRdAMW",
  "key20": "4GLAC9fU99rMgLq7RSoVH41J262BU6NkjE2x696gr4LBXKtzf8Yw1y5FdNpPsZcGVCfNsnvgWy6r6pBdUXEooJt4",
  "key21": "5Vwzu7UTJe79ZiBcRdXKSuyPspFti1Y1zqRxuNLmXRzKctRLzKMZv53W3s3BhC833kRHrQAVN43mVFHvFViHBq5o",
  "key22": "36Dd73hFaJm2XkmAncv2GNK6MhmGnxGxgXmXC1PNGUgXj8vHUU1iLmLPaHvst7XRjWCEaN7M8kG4wf7UbxuLffBN",
  "key23": "5W6xa8zXT6ekgT23VDEoT6JvdzAADE4nSCHmpCFas6p4YB5H41je6nnjzRM8FJKUXdha6Ee7Svf2SS2iQbvFJtXD",
  "key24": "2FympaXBzUddnHBNPXJHBpgp2Sxd3xAXxh7oRU8dENu3RfHgRuL5EXuirzovD8vDbnkv9D8Rn3EZL6nBQ5DycVrA"
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
