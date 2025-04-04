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
    "dkHVjjcJX7Qjyun5vsKfeELUBdqig5JgM5yyPjz9yTpoRGWzVDTrCybVBHQ5yiFMgZgKAhkLksFzb4z87mjN31Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4En7ecpWuq5f3i4SYiv6diHJKRWozr3mCrJKoJpSP2FH4xgpXq9isY1jmGSPzicCSGMS1ntiXCZn4Q1Jz7YLEXis",
  "key1": "2tuTcF1VvpU68KoRs2wwf2yE2W2CHeFLZurLrmVZ4Dt73kVPrfbK9HMBPzLgPLynMW692R7sUVPo4HFcF69EbvL5",
  "key2": "pg32doDw4n59ANZG3KXHTu21Xwe1BnvdYoBn1H8rGE8CU2FVoXPzFXdG8HLFafyC5erbrmauRpB1eRuEyVWhW8z",
  "key3": "2gRedNt8tF85uKHUpQ6n3BWSiCLybhVbkvYw4L58gZpcQt68RAtbXWXvCxBF7gDFFApEuB2wJCBEwxEvwVqGCemJ",
  "key4": "3veAWMNJxVxf7Zd58JvHtwRSd9Gk8JUmwNW8aBMc25UwP7DTmpmbhjiA2i7whyzeiYLdTT5PxZf9SVqJu8h8DQuX",
  "key5": "4nyZAw885xACcZsuTqmht1FsBUd9sumEwnf7nkRjZoBEULFmccxH3WJN8jJLzDDYYaeEWmwvi3keJavMmqg5Yehe",
  "key6": "2vv3mzc4ebUminUEhjPCJGbG2ord6RDTF69D4VwznA129XJS3kVfVDyyJs24DFnvuMzWuP6VfBSeqDiVpJrCYxqj",
  "key7": "2CtaujGQKVPTGGjdiGVS6dmQ7oZRa49DTBXGBAPoQjPJxPYMeRWXTKRPFpdiLoC3KufgVBb2yDMpCvrb4AoKqmi7",
  "key8": "2w2cimLQJAcMBQQZVmehEYq244kMevW6a4BdefGKH1tKiWVsh4zvby3tCFL4dwcU2MQzYAFZWFe5RLJcj8qaNKRs",
  "key9": "wx6qrzhbSHPffdBj11XFbpjy2GcakmJiSc9J89wb8Gpo91tbqWnmkTxXomkzz5y6Ze1WaFofCo1xsM8tu9rrh8B",
  "key10": "CqmZoRipykaWm75af8q2eyxBPtZnjS9ydetx3wGnWdChEDbVQ3zy21kLiooakndhXLTu9iakjY1kLjPX2WiDHAK",
  "key11": "4jTPoxEnYjiAyCPAbzJdR9CfghMXPgA6C9qLSPqXGdxUJeDGULd8Xdg5mi8GtLf8dbn3X6muhBjYKNE94NAUHwco",
  "key12": "3exJJsYgXkRFQeJ32FJx4fEyqQftzmCoKCrkk6ggUYe8NihyTNAQQAsJhUNLtboAyRLfGHMzPGjQrv7WBUUpAZDV",
  "key13": "2PdpHFDbTN5sHGMRYHqPmNF6MGdndojjLGyNkvQnntrnWJNtDnCSLu6UfjriEKQLtdeHBMZoG4Yw1AVwv3rYtXJE",
  "key14": "2NaaHsfm5eLbSdXz7uxzDkxHv37XVfDgod2UNo186MsPk87gwF9BABJ6UJeBjxVippqMHPBWywbQRxJXnFTFkwW6",
  "key15": "5e32kpDojf6eqKpKEbr6eR7oUSkXyvataQisE8GpMvt1MvpQrMnDpQgjgayGeVtf1LvpVoENMfwtz7b5tHjx16r4",
  "key16": "64PEfBTQUcmvKVQk3GQgfy1uWtVbxF3bcM5g1deZk2d9bi1WjgjC6MKENkbXF5xJcv95JAsDksLUTh2yyXUGetr7",
  "key17": "4andTCZyJ7WeP7Rxu5YhenEqD5aTYZ2AXQjM7FLkwHgJmK927SRa9xczamEvVLtyMXFTbZUtgNh8CCpnL4WoXwdg",
  "key18": "DL5fRMpwW5BpTfUP7XnvdDxY2pRogpx8Lns4Q3EZQkKAq9yq7DUTcNPzmfVdNDL78SF5Nn1SZoF44dEmrJXFFib",
  "key19": "3PfJdk32uppMds2VixhpMJUawTEkZjLUfcS67dHSxSSZgxWcLLTsuMZjYw6Ug3YXqwAxXQFUKwt1gXjMagYQ41tr",
  "key20": "qDuyrHejppUq9f4NKyQTR1YuU6pfqNkNv1TAejrgALqSY7wTxCBBgQU58A7rMSJiPUAWGozRihwbBsYQLw5qK13",
  "key21": "4GzqwhVNbT5YSt9UjXqBgQudq28iexrKtBmba8YMG1AXtZQe8KYG6kJWeNGMqoikvwxtigw7xBT1yADYNGgz9G3X",
  "key22": "2kCs7HYesykK2i9RJoVDhY24JBquQLDSHKNa1AHvjKpk7hvTrqTNRSZWtpMgrXJ4mgndeBf9jinxB7EEioyXJ1SH",
  "key23": "5abZosoUd8PwKMCKnyjViUpebS46YRts4u7hrSJGesAZ71P7b5bMpeTWi3T5bYcovcaZDCrhte7vEVoVhGf4XBeW",
  "key24": "5E4o1EeaSynqLCBgSrpwqsWNP9agvC929VHpP2tPZtY8ebuuj5NpAECgkKzDN1hsXT4TQg1DNaraY9HXCVaFbTUZ",
  "key25": "2YmWPrKioAphYFR2yyqYNLMSnkCPzJwGGrDPpY5H6QGxbwwTNnBTWbBrHkbWdn1TjMCDLUQ6ANebH6Zfm5nGtA3w"
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
