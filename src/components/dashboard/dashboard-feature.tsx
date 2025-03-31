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
    "4MSvjKWqtf3vrDKauycYpucN3hPk8oNF1jvJWgKHKxtkwX9cdQDjDvRZF3N5SaFLMEpz1cLcyNSzySMjBz1BroBe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1z5Qxxupqhdsh4yrDY9HhYho4vzhute55SPv6TUrzbXDwfMQZz6PYtBoPCzEjcdZC9AwZMf6WvQfCmHeY3M6B53",
  "key1": "63aLPCVXMeiGZREacHmutPB4WovU8eW8z9HTU2sL82iN3gFNg65nnHqXVjdcJs91tXHt8pdJW98U8fEe7kySThPm",
  "key2": "4jeNmAjGc3woyZY7hd5qfs6xYZvckdqkXcm6GQ8fUrk7UrjngSRtVVUYm8u958v9ZJd8we6Zm9jN1DJZG6Y46kpF",
  "key3": "2XFYRQ7s3byeqPDVr9gJMVbaa45ZtS8Q7n7b2svAT2ZcRwFR1unxufWhfAbehtvrYtjv4qsSbsSNttirgv947uLh",
  "key4": "2HBVsNxhCqiQcEf3jv4BvJVWRNx5NtkUdZ6mxuW6ASLzNRq6MtC8XQydg8vCrTgcGzJZRbF2Kek7r2YJ1mjdFAQp",
  "key5": "4oitSohYvE4MsyHasQTnutsZZaqMB7VuyiQovCJqmzrRnYBsmXfKUuHoKrwcZMEAPgtGXRedhhc4zrtGMGBRZS6T",
  "key6": "3DwgpYBsnHXHN4HTT8H5N6rHbH6kJLAZHnMad24M22QYNjhNCBfhnsNFhoPWK2WA8tTrJ42jGjd9FHS74B4mEN46",
  "key7": "2BA3e7vGPWCoNiJq4bg8ubtr8V4KEMAeoRaHTq1akXGKSmFfKMsCPgFiriXY5GojynqgHpHxb1ubJ4WwEds2ytP6",
  "key8": "3S6MtCroJb5JyNybN4gHeZJ3hctbhFoQ3SPj51XiZzt1UHpQgACrC1LK9fj6Th4Rpqp674R64dugWUVaT4yQTi88",
  "key9": "5K4MLVtpZywE5ZGvyRXRS9ze8AX6fbzxiqV9Djh5H4TygVFTW5CHMRKwEvCcd1U9TVatUtYyrYyCJBbkod4fVydc",
  "key10": "3p7x88r4C84Jeh2EBXYUeKzviTHUEBoZqZs6K89NHxFeGsnFpP9Mnf1sdeeAP8pXCDvGXQa7zhAL1rZsAeoeXg21",
  "key11": "65EDQBw32xj3VXpQj5czAMcaxqUU21uioMAuVWUPCFkn67VVRZfrUfu7i2erh381syCuuM1XoGXHyd1gn15WnmCn",
  "key12": "3D366e99jDY3y1iA9snDUM8mE7Eakqwj9ReCYzt5G291tbUntgaMza7Vj18WEkpYLaJTgHzUBpjND6kUpeuBaYPW",
  "key13": "4C2moEQYF2BgQptTAVuZUo3sftYdCZbzp5u883PxzvRjY9QBHD8CRxfHX3wVbqSjGoDzst2ThmmrbqbcJChWnKqh",
  "key14": "2nbiaeLmscXEb4fxdm8VxtsPQeBh3Zvk59rnteL1bhntZ9zuGMdNDVR4qZo3pA27VuCKKnAyBc8grovwZYDWW34b",
  "key15": "5LCAJTQtNfz5pgG3689UMViwt2odJtCNf6s7m1fNGy2axiMYo9YQCP6aETzPzXG4CyZC68xKRJkciHvPYPj3WRXX",
  "key16": "36QHELiLUrVmVL6AnfD6WkHSZqSaKSucbL3Y1ZG7oszSdcU3F2wJxG1E3KjYGtqM1skKzdMVjHoLw6swWMnLjzCt",
  "key17": "4BburJYkgwE9Ms8b6Qycyodu6LJu3P9MisrcYgKhsCTnC1ShsgnxqDsrLQzctc8cv6xPAH7gnmgkkUq9i9dZumBQ",
  "key18": "2Pm3kQgBBH1672CUHPcAqpjjQRYhruXfQcwGYQAeVwZU7fbyLXRnYkTDM4ByH56JHekdG5c2iT9VaQ5QJkzi7NWv",
  "key19": "4NyP1nbu283GCS6Bvg1o6A99GP61dY9KBQX9bjH1NLDLPWUaSp2J2kNGYKbdh2AWM4W7tf95LrGBMwGzxvWG23fR",
  "key20": "2dSMw7sJfBjyh5s63WLyRvytEQZ8u6iQv1DSqhXVYNdoiUXUpJPbVngTXAUF2WxSBbr3jKSMDmtgTkPT9GehqJZb",
  "key21": "2q6a4n7oAn7VA7F2hKn2CB3WFn5YCRVrWGWPZT4fsicdHHJLyj5ifpBkShfnVvFSbawjBx6qGkYZ2VXPr5XGN1fs",
  "key22": "zieUH3WYQxswoWg8L2W4jf2daHHsjbdjjwHKz8xpx4M4yV9PkivVhNC52qZhSK1GdRnTcRbr4VCUhtck9nWPWe2",
  "key23": "HpgHfJTti4Q3Lk7LGdn1yyPyHLgtqqJV8ckix7xcV98mPuj5uRdP9b1gRPM1JRkqQn5iU4WT8cydW1RnpmM6x3C",
  "key24": "4dhVXN1PghhQXZwWDrQTpMGBoNqhyJzTv2GmPHutuDdtttZa512CtZKYzT4FNK9zgGs8m4gFh5xt4q4mL6MXaT4a",
  "key25": "xaixxTva64JtWMmoyQHMJd95Junsh9vWP4rNekgLCjtGWyH36E4v1YC8FM5sqf7zc58QDqMxx46ZMCCgaxfvB95",
  "key26": "21SP6vLgBoafgitLmzTXHyajGYnBcah3r77Y89GFMszfi9nR7ZYmsrGHoUJtdzDYb3gzqp5Ds2Ki27u8eXuAW9R3",
  "key27": "5itCfC1KtpwMaEHUPfTDQyxLKohYyMRTiZMZhoxS9bD4Ebes8TXnAXXL1RFViVyTXeZTUY4CtAf9B9Pn6BTMmMXx",
  "key28": "4PmP3srhPNN9qVeVQMnj3V3mn9Q6Sib4WKv2Px2riSP9CTBCdYKqhC2jX2D4dRunFMxgEGYvyjK9bPgTeu7j5orN",
  "key29": "4nSe2Dc6KQr7LvNsfrVLX4mTbdXrT7Z4R83dcFLBAqBn5B1rpC3CgKea3SxAH39dqRrBki1qZxBYonTt7VXLLZoS"
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
