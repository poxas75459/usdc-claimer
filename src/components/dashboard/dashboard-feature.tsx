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
    "45SXGFWsep6J4M8MNXoBeH3EwLPieeBcTxBE7HTqPJVeyHqzaV7rUSkgu2rDqFDdGRH97VFKADh57KNd1pXeL4DH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cBSk5mLte2qUzmPaRj6rQqLXJHrxtX5xKrKsTobRjWEZSDKEESgHHuKeVVTXcBuiCo556ywZNYCidMjTxj2xBek",
  "key1": "3r9MJ6MFjmCTw6LquED5pAQDwkUyoXiSGSyCimRfkVy5EXkHaPLFTtdZoQApfnGyaNPiqt7TAg8YQqFQcvmb66rD",
  "key2": "4uG7dgse54ydcmMbHhjGHnikkrJJexwq7n3BoByVMQ5RbkeurkWdseS11an4ojtQcCxevXWzBed8ybJtZTRAwMtY",
  "key3": "wi4u7bexSZvmdKXaxGzVkGxXxxb84iM7XcazZd39sKss8UFEpd9uTUXkGTND5RRPfNi9DepsToRQPcQ5uiMMFGg",
  "key4": "2DDbpa8gCogLMASK6ustUvnzuqQe3GCzvVFdCYeXKGsQGqUrMGNtAv1k4d9xbX7devB7tcQQ1MhZek7tR4nDdwA5",
  "key5": "2gJoaexidQgHabisYz3rw2fpxhCFpTJXy4yqegnWvfxVqcLSQ6HwCifD6qruGraQNxyVxLSWhuT1Di7XjRSoeAen",
  "key6": "5hTgewFdywXP6FANJmdXS2wEUsG9CCbsvi1RDLZBMTtkLGmq7SbkSoA2by4skxghcmJNWBvYjWd9Fmh8zPNuk3Sk",
  "key7": "yAdFfzyuRv1BceuSx7wNEXP3naS6B1QNow5QrLUMFqGDinKBLwSUZJbX8R9RP37jsQGYGtxvRzy7Vn6VeT7x612",
  "key8": "5j4JXJk28cP9gXZGEbFSXTWV2iXfgfLQnqmpVqDCccZHcBrCwKbsoMkm3nskUo2ULUywdVtuMGZAzDFV7cCBw43U",
  "key9": "2C5Sd3JYYJq2YYThddsWCccorCaUyEU5oTBCmmc7hy7WYKw2Dhykokfi6nP3XXKmU39XpxDcY4ywcDLXk5aaZqRF",
  "key10": "4qgTB2akg1juxfL4carPza5GwYyXZsr1R3eqmJyowmsZKHPeo2STMu34TAdkHAeJ2mrdaJRz9PMaLpakX4cxQ2Np",
  "key11": "66ViiCJWJZqtQQCnLKhs3qEZe3Dpok1utSzDEtNxupKJ8nndrSkmDay5tA8VfVEiVzh63a3DYkD1CppjnobzgqHS",
  "key12": "2rrqUn5UVEkJzUKDUbtSdCKEPFViL6tKmykBTn5yytLBUX8r4c6WpYy3TUAU6jzrVUFhAuCTTGLHB7iNeL5UH8aB",
  "key13": "4Bo7GiedekqBBS7ggrYkniXC2Bm47KTAdKpEBXfWF52Uyxgi5revh3UJLSuarKKpAFesBNuJN9R2ym4FGur8RSLa",
  "key14": "52i68YEJaTTuTYJ3kerDoZB7QCjLoR3HPWCs4r9tS3cDsWfRsgca8ZRDtwHtNLWcgc5uLDRUXfrp55k94z3kYmd9",
  "key15": "25hfSV1yvHDpDNCFSSRkSCt1qiyCZuGvwLWYBdN1JmkzRoe2ZdyU5EygQCxrdjjeDUuGURB2QRFTLSDwwtwtYKyv",
  "key16": "3m2hxNc4Kj43pSuk7xjutM1GUmn15XVLyrkZWBfPw33shcg57d31sUtZjZDhHTidK3zmB76TStW9ng7o4vM3vody",
  "key17": "5tVKZLdBQktNXB78J1wz1Kb1QgyayKxgJ8eTrrjP7nZJrnpFGrRG4WHFVCWNoDjFC6qgEpFCt9uqUyzkGpGNYy5v",
  "key18": "5pXYwGYeJ72Q3TrXfoBmkfH5QeRuMrV9zRZryFXwWeUEV2zJtnp8s8XYoA91tFZmVV33KH4NT7wqQ7PcWBsz5sV5",
  "key19": "4LHwXsXCtPK55BbymBwLxLFWfBit8DXyb9tC8CEatjEij3yPoR2jWbCdywHqa9yxxPbD6J1mYFjBifK7z2Pr8QQd",
  "key20": "3hZrGkFh2vw4Ti3DErD6RHESpKxmTbW9aCNuFdWo9jEUEDwh7bXKW9cG4mTZcy81hUb2Q2g1APr5vEHzFeygrZ8y",
  "key21": "XjDv63CV98MMwhwkt5R1hMMFqdA6DAv1KygDkDBXLieii4yXztrz1CC224a5LBfC1vkiqGLJBdniozgCnRv4ZES",
  "key22": "2NC34sX52ve5CHzho127kUYyvwgsZxhG2ePr4eRTCDxDGX3WQenAqhtSLDimFPakpgmesAf4qjRtcSc1iXK3ptae",
  "key23": "61FG458D2YdWodjMmrpuyN6UGJ6YoEHPsLdxMyYLN3HRSw7kFFsDmfHwBhKVgz8p468eN9qYrKGbS48A6ypiQMz1",
  "key24": "3J3GVq3ooHTcN2huXry87PPKcd5RRPBcRzYZL3h4QQvHc8e8Sd8AKAwKNkxaUF2SwcS4HRBbDBynzYqGf1W6KKEo",
  "key25": "58tYR984sG4gqo6DiWHMkHvcWTNrkxwSsfhUWyfQyE4E6HQi8dP7mn1ctwUEYUNenboiGEwvaBEoFEaRGNTzJZbe",
  "key26": "TMJrrac4CzuKCixSoSMSXHM7pKM9y33T4GtSpG2FHV9J4o2VhsQKwGDduG4mhAn6xEHtoSbKrwRCz4Eduio1LSF",
  "key27": "FJBwS9om1uW7SpjGUnEqJM3tcKTpYShbyo1RQZmhJ7bWFvWxEyrB6GNfPuc65PkSNPP9rJs5XAfYRc2Rsr7moJX",
  "key28": "5Dv33cULDNdNC4MneyhY67DAs1p5MMmo5XD3EfWNbwQUrbppzyXhCqGw1uNjNB8Lu9whXgD1dP2c7DbG5wExnQyW"
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
