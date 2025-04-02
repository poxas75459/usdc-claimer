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
    "5KGcgMXahemvYKw93mxbk1N9dgJqrKNoDEL4LuSePr2Qcs5KKRwqRPvAYgBiTC3BJKqS1sySen6w4cQZdLBzBt5K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KAjM1qQtzeLKWoLMJWBV6VXhtpAyQBFA3gKMRKEyn2H2hfJrVLURmhvjRegxUL4WzVYZVfTQejEaixbJygmqz65",
  "key1": "4GYrxXACGbzeNMX9sxQUkuqC1FsF2n5ipSVwgm6PQnqhhrbEDoUF3Ruz8Gv5KpVPJCkjqzKyNJ475DvKiEfDuf63",
  "key2": "3LXXCFDY21R9Qz2TVq7TWouhYNtXJqtxfA1zssXP86rqzHQjqPUK1rzabudopL4JY2G23pTAPqz6gAG6HLEQcTf2",
  "key3": "3D6kVri3s67wdxKLtBvPd6GYmwMPfKWjfKRXJ2gcgWCEFdH4kXm8sb8Wr4uiHBBwUzLN6W3Ps8ETNPQAkZDJdrre",
  "key4": "2ZskBZcNrCeF9trxH6BbDcywXkTWePmuRkFg2YVkyhTkz4vMBzPdSumeSbLQYs3xrxBJRevyUUgA8ZCxEFz5nJCV",
  "key5": "5hZ7jx6XYbCXSD7z5J5qzkpBKAi9AdbSimh1ZcAbXLKMyzhMCHi5Y74Fr1LnzsemKzRWEP5KekBoki1qZfqun8kh",
  "key6": "2TBg6S7jwLFrgLAQzXaTuVWGVHuCZhjnDHLrmFAojbeDyZh89DdRAzrXGbw94xV9CsrWXguRxmiJ23KF2JDDiZtP",
  "key7": "C3u1p45e8U5hkaCmRyEEfhS6D3urhkm7ft58RFqp94CHSAeAtPPEXW9Z8kYKCiWFXNzJFdT7fuh3CRBYUdHuveA",
  "key8": "2sTTT1EpQhUKfg2htDNGWRbtmz4qg3NjfDDa4Yayyw8kwvTy4g9BqTQWtQFhU452EjtRke2qae6JFHxcD1Tb58Ws",
  "key9": "4Qn1tkvqYJLaDakdNKLDaLoN1Y5qNSQzFTehvtU2o4zha2AVUnQDehtmED7B71ogeNsC2dnVGSbyMGV3iGRpGa4g",
  "key10": "3fa3U2v8NL7LYyZHbERLncsKN6tPkUt9bLdrV6KUoHzBwNwGnerhv1pNF4x7Pqy4V8dxLLUVus6VVJzVFeNFqFkq",
  "key11": "5iPwDcuK3VgrdxShmGvSNTsTCrbDbuE9E7biRXW1iS5TmGYs76K82Tyy5qdYoKXjPaNXs3SMxSH491JPGdrARsDt",
  "key12": "4LAXMxL6BgPepTZ98ktuGT5DKZECoH6XcSWesif8dgxo4p6hpgT9jSdSVRTDSbA5LwFxPCRtfDpx6foYctNHJiYv",
  "key13": "ExtXfMLeMWZ7LuhxdnJQiE7Wsd4kPMe5Wfj5VebqpDTKBcNpMJJVMYPJn1KFc6XNVmDJCYiHEE2Lu4FqYx297a7",
  "key14": "djp8pERXXdUJVUYt2zNFXocaUqK3wXbE8DeUvh9uQ8gKiynzeMahnpn6oLTcX864qxb85LPHzr2WGa1nnS7qa9E",
  "key15": "5pivY9Cx9TC2z9uPAnyVMTxWQoY1kBv4FiRaD6Y7KUmKtp53pq1jD6CKY7igyuCeHUdQZW7fAaK5pnGPadaJgjQD",
  "key16": "2yqEJPrV9Yi8nyyjNMn1R63T9haNeue6z6znBfVgZe13wNFtgFKrPv75zqsDpZsgGzFzKWJdAhYb7TUupsHrbGFq",
  "key17": "2ufyjaMaexN4LpfZm5egxrSGcceVXSznBUYW3AnyaZDxDKG77nbLhhg5jx67Q1uzfJujnbcJfUxJse27ScmdKVS2",
  "key18": "byxhBHRKmmUf6gi3VM9wT5fYuUzpnJWA5QeUv9v42175HtiZ4iDF5WjCok32rYjnkxKkUtUuF7khT4jJtFxssfK",
  "key19": "2ujP1j19v22NZ4kDqvGLiUf81GETWzPUnHpe5CxtGwdgt3ZcqCbgLqXpqeM3CZoudeiCbf6HBx8jCjX3Gpf5hooH",
  "key20": "3L2TCWvrtQboGApiuDt97qDebeWMwkRTF1BZeiSaE9qxhKBbtnoqieYeqQ2QbjUp3QenN2fGMwzxmcMPhk95m5Ww",
  "key21": "5yVPjCAm4CaspCetuH2JGwdzzPvTQe2EVc7guDNCxyFyjxT489p176VWrqkYmN22FeomFWfz6mAk9yDrc3x7u29z",
  "key22": "gYMBmgCb4nXNkTEdDro2ZHyTqUxowbkpTVfZoU8kTWw2HJTHD77Cgo54pCoidpuhegQ6Mh6NKhJNmBWyPhrwkWE",
  "key23": "3ZrSg6rm4LxH47SkaN5FXqz2pUSGYU3ospFzJyZ7VBS3rv7YmMvM7fBBDSQaGRMgqS22BDbVRJk2fHVxVjXoJSS",
  "key24": "4rr4Ev1e9uoWp1NsSMnifu6dYiFS5dMTnJMfrjVQcqBep25LpxrzvegteB6TS1WoULnGx71hmeFcYaZMqDu1Sw9D",
  "key25": "3xPXatXnYRFoSgCJeAMQi3F7kgc9R5wPiXQfDtSEX2GE2a3QxJqrDeFR77mbzDpUzVHFHHdMpv8Xgq5eg9MpXdXt"
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
