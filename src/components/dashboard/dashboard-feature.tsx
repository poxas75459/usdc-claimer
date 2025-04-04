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
    "21zMU7JxX6u3VXxZrpnQKafo8BC3HDkoodMsDFXLSgss1j58NHgv9CRZRGz7kq2S1wccMc5cZ5ty4bUpg4127dyB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d3zLgDNBtvCY7wBCXJ8jLJ97jrUsHyvCMScpFs1diaji8iGRYr9mPYu5gkkJQA1AAmAJQP89JvTTLiVEKLpgWEz",
  "key1": "5udTcgVbeKcm9tHZ7ngYf4wg56FwVmeRuKG6i3zR47isVx2e2yW6GQdaBz5jNNjLDHqiTff2xGKUEK5M41ZFUmoS",
  "key2": "5tZ6mXgm9eZLbFEcb8ESphzmFUbzDyK8pbCx6LeMAx6vr2GSQ787Kw8PAjd28sVwEsAw4zF7NHKC854aNc4VNZVa",
  "key3": "59fPQSQDkQUTngvRLdUs8pHCndRZ2n1qm6WwW1Xbcg5FxvdNmSEG6XgpZtBf7bUcs8bFohnsKUVDEyhhCEz2XphZ",
  "key4": "2wWkLatTHqrVrSzSUPmfjYDRnLr7neSdtEfKAaUZi9LjMYXN6NMweMKr5LjHUWLBSaaAj897c9t28FfuyNZCtAqS",
  "key5": "5yRTSFmHBk6u9EiVSZXS1wXEEbuJzAcxPggeYZqzSj3zL32QBhvPBoehLtCfR5A5rBnpMyKbpTzwmu7oBFJYLAQG",
  "key6": "3vVD5YZWdqWF9L4pGGzMskYqEZ5Xajp2g9v7K4PawK2qL4Db3QhoZfnXK4o9Px7HZ7DK2zodaVUYtdGyFbShfq68",
  "key7": "YPYRqUmK85wxsd71rWVKWDsS5zuPasxAdjFr4Zp3LFBJvs7Xg9gubyTYZUDxwqR6HbCaW3FsT698Ztyo3q8cdF5",
  "key8": "5WWCDW1YymUUgtfnnjsFoZkPbdPc9gf36b6ijVyfMoqREDTfoGmF6gjuA8osvhwNwk9vqimw732GW97DvTgkBGhk",
  "key9": "usuarAgK84VnjbzHuDkcmJnTFPWJpU2iUcZRQXwnwrTcScjysUcy5nCuGooztvNpcuUu2gGWeW2xuimPbfdoJU6",
  "key10": "4KFcpLdTkt2KVugaptMrA9wkpJQHRFLVGkJ5ijdYNWo8g7r6dQ47tHTTmEk5c9L64d5cNoLwogMSQRMYLAfTVVty",
  "key11": "RPoWK97XQ5jrcFxnfTmdqfgM6pP3xdmPW8Gw6gsM7CPZmSEg5vWPL87ubcB7JESphQpXpUwmBLqwTvCt5zgBAn1",
  "key12": "52pmj61uHrm1D7CiPs9akFfcLj88zfxsCXvYQh5P57offNpZRD7DMYtb7CTExqiTziiMcobfUmuGuFZvGRMJNpZZ",
  "key13": "21MNkiMVWgrd6QBzafZj9miYRX2HNMWCzN4xmZuEbsRvuFcTuyQUbAF5yMQ5gyCXYthP2KxzGFsN6N6xYvJcDTxJ",
  "key14": "5FP4v8DogkFb6QjNi1GYjiNJaitd52FvuA7SQnLAaSu3TtNAWcGhA5NaEMLqs81w5Se11NtK1FyZu9Qxo3aSP8JV",
  "key15": "4iSQR1Zb3s6zDMVjMWKHXRvvwB48ADC17ZwUM5ap9hmGJFoiJ2EnRmMPieH4JG2fUUpSMHohsDWLRyWZTzKUkcgq",
  "key16": "5DBRG1rxonX3j4WT2BJ9zBRnTLnHuqVbDx9fygmnRorsVmcFgYMTZkPJu6x7QpuC6rJC12ULpfWwuUb3qUdHAAHK",
  "key17": "596XYxjEZB5uX8Vf3Bxd3oHEzxHWE5xULkJHJzdgVvrR4ENT7fJhRUgoyTN3wmLFF1vY8M8L9CsN4Dn3NwWQMHfd",
  "key18": "4kHgMjcFkjtdAUvidUg7iAt18BybrZP5tXfXPHMVRA1efb3p9KB9qCJdNosio1aiuxkKPGXqe3WXquZvzvXzCSuw",
  "key19": "4Pdf7oAJsRJeLMEhMc7sZLQBSVofZZcjRD3Q9WbUjhHEhSKEZhVz4pncrkVYV1Ho5sbUkEKJURyrGWCBtp72CGVa",
  "key20": "58LfJqR9UdeF7YScdF3xtqRXkM7Jjq6GdbKCentKNT8XBUXwLGpqcRTAqPi2GU3ZtibY3VyTX5G6vHHp8RtzQFof",
  "key21": "tQYXMzFgvKzs2eAWYyz8T24dLUoTmAQJiNGJPzQuAUvugA49myiJF2r25RwPZxmrXhKpxyWWzFggtqSPsj91HEQ",
  "key22": "3TveVY1KDiEDbgek6VpKQjpPzmpTC4U57Qa5Bkv4PT8wQjRfZUegjfm7LrPPNNXT9nWfNvwEthuX3wy9FKasCMDG",
  "key23": "5PXu8DyAGfDKK1LujrqiwvQhuLrW4PfUFgUsFnMeQoG4o2VuXKFp3tb4U9SuEM4bq8dRffmw1utuKcoviF5zqs7F",
  "key24": "4sZbJn228kpX8wTWcf5zvjLBuzbJfrVNCGMaufJMrUgK87utBfeTe8xDCGzDbZbsEXoFg9xcWwyd5zQkAk71Wsyx",
  "key25": "2xAqJ1uAAZCvz2Nx7uicKmSQCfpGuz7MZ35NTPEtyyRScuiternLHqpRAWGvVSfbmAaEmUJrk9vh7je6oynvViFV"
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
