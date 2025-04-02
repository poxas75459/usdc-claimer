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
    "4RHkLSwZAru1hu9Syve6DTaRg2yz1TZpQSjJahPps6FU67CWCxM2iVRWsse9Xb5XrGeZXPtsJ4VKdUFvMKachXJz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sgzxD1NcWMzuvJUfpS2GkAcZf8V2SnCpuNoAkNoa7Vd1mo2DQtjeLxzk9CaL5AaC4aVjxrCpeVfALw6FnL646Lw",
  "key1": "27fhKbxDJcQ7YAb7y57VusBakFUyMUvx7RfGLE8ujNcviZFB2HMyChRBpcpcxVD4M9G53fKcc1zT9DN5gURosaMA",
  "key2": "4derU1rUHgMw3tg7V87RtfvZssmdv53EiGWhjVJLED9H7CcXXm8zpq7V16NWwkQZcZ172FU8pxUxurwbpuyYaynZ",
  "key3": "2h5Scnxj2mtmNAGFcbjQ7Wdo2TSXEs9EGNms3syXTaWJnCS65FKEMVc7qZWMUkkRindHdWDbBjpVzRQuUkYgdYTo",
  "key4": "FquHyJSTHCrsn4YAQAFywosb6WXmXxGqUbiQ4ReZUwqJbUW3oNV2Rf2L7R3wcsem5x1He7LRjM3YKTFQZSDYfYA",
  "key5": "5K9GQnyWcE4Hp5A1aEi7zjJHVJBKuEWdFbWN6aQAz2TvWj4JqTg7H5MSm6kUKuXCk6S1esRmg1Qg8eCYVvuwmeiD",
  "key6": "4xhtWQtd67aDTvuHpw8CvTEfNVAZNubYgvX5QoCEVT7JXqXvdHdQH3PJdwPvpi8qdH1j2nkiwp75VY4jr7C4jAPt",
  "key7": "4o4iXTpNXJPmzDrFdnWoJb4qtaatVzr6TBDHNESpCdCos1wFCsW2BDTuBzCjdXDQ5tgF8Jrs4zxNoiVQ5HScnChJ",
  "key8": "FMpoLScSMeeXyjJVfybZCVRpkrZVa9Fi2LjWuo4GEL61QYrcPgCnfiuZKFC2oujrShCTu1KAydutt5LTjgQrx6t",
  "key9": "5TQBTibqxXaGsYqbnwBsT2zFn6BM9gBxZbjGM3ttEa5hY1u8WHASL3vduhM7uKkPCXWFakiuGSBL7K8Dkb8jkycS",
  "key10": "46y2i966TRcTCvCysoTvLTVD25RN36LrXnoenWwJSSsyhQ6GwvZYhd3KmWgjRGoUDY1BsaXMXr62eyUcjwiQijdH",
  "key11": "Af33ix3pQu78zQQ6n2XYpDeD3zv7BMYRfxdWDr13KP8oAtxqVQaNyWxn3VLimfmtCsB9bX6RypfcFpM6MXpFbgH",
  "key12": "5RswnZW6HRJqgVXZkjkzcpZQ2EZqf38P51RBtqQRvqE7MyfqeUDFLHM8HBLzo9EfcRpPZMBXoQ1nkj3jHYYRrZi6",
  "key13": "3rrpxbwCYq18ccsKHu5Hz9J2kCMV9rTUPnJ8DJwnU2JmjHypYT3yQWcAQrhPMREpo9Khb7cgPRZiwRf26C6W67Ao",
  "key14": "38kYdsJv3aXcHC444Dnyq8QQEYscAm577ceWV8XAcGF2RZkugU9jVW9NG7kwNxkWpXLdAhmBhMXW8sySEniR6V1q",
  "key15": "29fZdJxay97nAPSHe1cn2rqArj4sCGZcZjgiSc4Dy5mMwLBCfGPQ6SqHdzhBvXdHzj2Q2xEuYx8iW7icBXRLHQ57",
  "key16": "51z7wSF57ZSfWG8U6jnBhWzfG8Q7ZjUmppucbYnNTQS9hH1aePPNeCZ6smSbryVF517YYPHVYXu5iMX86vEtuioS",
  "key17": "AEpcXKkbjRK8LXc6yBfg5EkibDY8HLbVvvHDLXfKRfAkU44gpqBVtZ32beJjfTDeQJVk7LzuhE3FRmvkfaXuJhp",
  "key18": "2xheuSg2jUdQYK3U7i7PyC7G9VR6qHfkYD5obqakTxfYbyJr14nQjjQxkWYQy8niczYWz9tCArZyCCfjRZ8V7uiE",
  "key19": "346ZUcGj9Bsemqi89aQbmVX1AZLEMcKf5BNm3XGWHWfYRfk7Zg6nPHxza4YZ1CagvP9ckhWirr6ayhm1H6Pazpvb",
  "key20": "5rTxFnh811diQPkLWUkkLj5Xy8a7ai6Yp5arsBj4SZiv1qKU2vtiWVz8LL74rQpKQsuhG1M4GwdDZdRJQ3Fwfcew",
  "key21": "5hPYZXjG8imvE3SoZN7y3ZSi2yrUBx8A6ZNE6QSH8v21qXQKYBa8SfcKcz4LCkvFHqXX7QPcLACUdYZuYwDvaFYY",
  "key22": "4LiNJALHHbA6tS2wovoZ6uZhqPXiQjKj8kRJ8qoMNoV3GRLBpjApLgNjmjmipp2pY6bqPJWBr6xM9WfGP2jNPy4K",
  "key23": "2wwYSNFhTeSMhyiEcktdXFFAQ2pMRQaPsQbXyHno2X5YHNuvBo6MtxcxyUMwd6u3khsoSbJ44zUArpnFyPcFbuUE",
  "key24": "CFeU7Q4ZGsyQZrWkN3aHfmi1oksin8xKuaQipCRPBi3JosdyAvuFiNB1TXASeEVvyiAfkgWVsWo4ywW9QBEgpMr"
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
