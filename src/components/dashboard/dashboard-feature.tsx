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
    "2xday3devLE5CMpeMKCibG8ptVfMTiEMkW7Kinr5MpjcNkHwiuLxdHSwxVWQ2VNSMjBZmToJTFY8uo9CUAik8Unn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nMk4yxYP8Bze3NfmwGo19TsdSss27EQZi9kRKPSEf9YNkeex19PP6Szd4KxVqYHRNBfw1wtc4CUYNKB3xJ7FUZX",
  "key1": "4k9Boxx9JiTYvkmhwXRBxP1CKoPxENpeeSTjTSYXrXtFMVA2B89xUcM1sX8CeMk8LEpWbo5it5QodsGyjThZFoxB",
  "key2": "4uaDfssrxnoeg5WSiDCyYqS3mSniw6R3yfov5tKCdEFBBqkpb3DpkRexs7LufNvsS3T9iM7rDaq8NqwmLvUGejNz",
  "key3": "2ECeYh6Kmbjn1EBa5tdFVCtEMvkt5juMn5VBQDTsPEprYtD9ezbbWreYcJs9pQEDyMf8Ujj8xWpYSgrDUsyAMYb9",
  "key4": "2J6HVes6x4KRfHHa6EPYsZdzNkJFxsteXHD8Ndn3UGCtdmgEhvEVuqpihUehhZgx4RpHXzGycao7buPyLCRj7QDC",
  "key5": "5shzbQPW2XAepo7RmRbZnzRNn7Cwpkfkxi9XnzLo5j66sm7RGYMc6xyjFYHbhtUBTGUA1anNUy2ds7rmvaNXGaaQ",
  "key6": "2DtyUjUoskXXsKPBpCjLryduSknWXTE8JSVwAJgjntcy3GaNAbrc8fpfrUX2pmypLRdhs49kYM73ztZcZbgEKWvW",
  "key7": "5KqkdBJ8tLKMnELQKDrYXyw1TKFYBctzrNAp2ACo3hgAX6tVZqne6jnhbWTBVUPCdDUYpdmmBa8ScRhVFPNoaTs9",
  "key8": "5ZhmxUh7gCdxXhgEbWeWa2WLjoAmUtSzbVtfJRQXebLZjoGGkHHMDNRx9cyHKsncFLBTyRQunDNGCwaxBVEDMN4k",
  "key9": "4Le3st9Qnevud4N5NQk7d1xeFBA3ukCFQYckjNhyK9EgbTjSq4KMu1qfuGZ9pK2toUZaadSgCmEQ3hk91Joj6Qu2",
  "key10": "sGg18Fod5zZmQhuBRQcxRks18QBeBBqBUBkYgCNxqm7qWhgx1ghR1W2kjjGQnJZb7r1xHKeo8Cz2d32p2BmpFkg",
  "key11": "2Y8tHjtNyNjLjN32sksw5yx4s3azBWD74raMZGqZp9g9vubpFNMf666kYFpdhtby98Nqor8EfEWfJuW2oH6pukkZ",
  "key12": "3pJrKQgsgHq3PcY43EEA3X94G5Vwc5wihCu3urjEyRmDSwBCmA2a8JxuNXG1aaQpiN1Km3eNKvL4TCGAkv6EGgcM",
  "key13": "3KneaucSo67bCnPGWv5Szryz86r4mK1GaRY375jTuiKTEfCmhxPkukCxVKfM5rRvfcsKbRKfKuLaUjqW3cq5miir",
  "key14": "cZ7cZNKQgXZ92cXQ9Pc81Q3dyqxkgjqdZhJdd46J2ybdj8KAtPpeRR71bMyZyYpMLpgp7PtrLN7h6fntBDwDb1o",
  "key15": "5y3hzK3ckXiTUWuv8jvdNDq9EwKUXbhFRTfEid6pgoLvaMez6EjWzurxZTE387FkasS6yngB3v7D1sofes2a8TWB",
  "key16": "5WhcmSM5JZ9oWxN2ZrxxHTwaw6V9D3q8sTpQBb7ZCiMTDPBqapTNnTNB6pt9WdUKCTAnZYfB9LF9pXDQcNMWhN6H",
  "key17": "2Df21Zu8BqVgxkix9qP8ghPgP34M654y91U4sxoCZRt7voJ4BrqRRur7Ba26k86UoVXVCYWPYp2LjGNWRe9v49V",
  "key18": "4z3dPWbXBJZKVYRcF3W8XtuXBouaTNcdtEF78XXvQhEte8jwsVQnPGW5DkKthKBvnBQAxMD5R4H5RviGQm3UDiVq",
  "key19": "58jYKBRoQ8PhqFAjPcXC6uQVSouHbS1gFA3w5JvjD9mqWCoBXXzaYnUwJKQaLezZpKiJZ2cr6GHkFjJHvYRJ5jS",
  "key20": "2f3kCnR5ph2CrGW1bK2DnJiBsMgpS3nsEuRjrDXcYp5kUfs9HGcq4LZYd8XWxNFD4hhpZhw13yVeeE8XRgLzQWvi",
  "key21": "2Ygr5oafei4G1uM1STKh6kMQXPqTw3hJjabRsWPmb2PpXvbE3xftPe53H6M9GokuuYKNMHCK7xsY4MCMVxrk1oX1",
  "key22": "tCBzEx7TMKeS5V8Q3J4rQ3sAmmxpdfKG6vzjSMSEt97uKH9aqSPHuQ9RZQ6KQmgMw7NofBpq2WCTmaXdCArMe8S",
  "key23": "2myptmkZaJBW6dQ9LoHnSSrPWnSkKeU5iNCHfnTTqL88To2zYBdqLSa2fTMMtGFZ6A3jdStSKozhgp2WED292XRW",
  "key24": "4iLKhAPoptCc5UB5ttckvEKd3rxJx7eFUwfNpa3QMWJTQyeAJN2Cyrk5fVb9P2X1e4CwePzGdB3fzCauD5wcKT9V",
  "key25": "5hVe9KUpApVz1g7Az6oMntTWfRWHq89tpAdSqW7L78jYWoa1mjjMcHEjjN8VNG2E2zaPDAmT2WztDv16iKQ2miP1",
  "key26": "5mict838fPiwms2hG9bi8ZcPXrnGvp2swLitPWN75hX4KrHb7PAS1TDzhQEaYs4FPhc9T2eiyfH7p44wfMjsjrbq"
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
