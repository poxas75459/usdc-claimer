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
    "Qpz7jFZzuF2YAVMZx48HdvAd3fWsV1kP8QgBqJgytzyABK7g6GmH7giJbQKmcMzwtBrFog5MB5p5hRQ82NjVA9G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fGH5H83gF31sZfSYUJVvb8cVfmDQQijFxQDcdhg3g9UZhAFx4xcX6ZohnHCpKE9xUih1TBFrMjyuXL9ubcN5hA2",
  "key1": "Ae59fo6piSTSSSniz3GntMw7N4xKjx3YqDyve7Pg2GAz1F5QqbyB2koJthD6GNzDCirwayv57YjJhvqYhN65uzY",
  "key2": "5szjrgCTVyifCJai5sBG4MAtoGPfgcxQPwvL5vdm9ifREDy1eFFAwPjYEptvXf2A8boEWKdwAPHx9TShTfYpCAXd",
  "key3": "5vtH6iobcUUtbfFJwgjuwuFKEZ2dy1sBa7rNT36fqMZqqTSTt1wPaSerzq1fBoEDzGpKYbqoyB1rVyE2uCVyVWCF",
  "key4": "oP6c5VAZt81sZ7g9ZDZyC3YMyyuwBN5DPxcZVfBbntQLPW6YYWop5FyKFjeewjgSE4iJVSKeApFUwJQVQYdYEkV",
  "key5": "49oMhe25nb88NJ7DDAb5S5UKmsiHzvkAZGMo3z22nWFZ441NDxano9LfEb68SYKwW2NneYy2N8oe1KsqJW8h7Q4W",
  "key6": "9atrnMKboctdJhB9zvsqRnLEQdTjYwSkwHTj32PNe2Qu4mKQdj2pj26W3X8RJvNiw3cSfJTZCwqyaUAy5KbNYuA",
  "key7": "UigDYGoGJozK6GRMCF2T6sryibgKXo1HsZNHqZFand1bcGaaa73eh4TiYSkdFuSidbxXhU2Evb2VQ4uZBj4AiB7",
  "key8": "3R9CGXmH9o9pzgvPAgUGrcG29UGmoKYLsutogWMWoK8tZxzsbe1r2R3wu45VJKMHznB4a4mTb3HVAkZFYL9AGEEo",
  "key9": "3vTYFhk8HxULfyY9NWySvr6r9e7gReFxVQfRD75SjQ9AV9M85jJDwj53L3omjvqoPMTg1FFGsN9U4WbbNXePuRfD",
  "key10": "56n2SQddT3w4bxoTAYnUw9md9GmVWswPDc8DmuS4Yj8hjUS9YGHBnHEmbz33UqiKx1X4ApHEoCXF24GDSzuNSFHs",
  "key11": "GXLBS38dich9BaC5A4XBppKgLMySK2mjESEFNKq5ZNBytt3WDo25hc9xZj9TGouqHTVQvTX6ocxyQE7RFaDz4Bj",
  "key12": "JHxVaUVgWDoVXTBdzziDoKmECDYZ2GWrCe7K4mwihKv5VDZDvyaSQVPM7Rdim8zV7SKoFNzk9Awhvf9non3Awjo",
  "key13": "4XKcbUv516GDQFsdE8ELXvF8nqzsU6iLUeDL9X62YoSMgZ43ZFPqDq54SGogaDDcpAN4Wwd1cDBh7iKAtNibKfRm",
  "key14": "4LRQ8FR4mQJTFwx8Jy2RigcNCSM29cLPXfyw7oLva4XUXvFggYrqY5jNfeEnDzpBeUf17uyM8u9bqzkRYvaMFWZw",
  "key15": "248cZ3JpscrAg4jepjm1buNFeodSeCrTgJ68veyz8WM1esL22zycgcLpTs2PmzQERA4pKonrfMu2qNxCazD7ww3o",
  "key16": "3LjuSXKd2XkRnDWkoCHHBd8JcDZPdCmQWw5uWJkafyfAgBzVD6zVtRxPvDnqxU4tXc1v1U2ZRNcoomL2BfuraM4u",
  "key17": "4j9XWDEr7Ua6trshZPRddiuy7irAQdry9Hkw11NDQhWyXQ5iSdaCCQtEjC6xNahoQo4WPTgzpGRbjZHYNeKiWYo3",
  "key18": "BVSuWSwtjyLJ8n4w32ZUFrTeXRHvk7cswUt9mYpSoy22yPQ9GSw4ZHpmFZwCnietPqJ41SzULzh2TMKpRzkaMY9",
  "key19": "5sdvN3s1pUU4Qq3uRLUcwmjhn3ZZHrT29dQi3PrtP6rn6E6KeGYRYTw7WvtHFYhkLmPK1foLzqixcXvy2HWfBAs6",
  "key20": "4jpXemiEEsNeSXHFaae5rb1SZbnYtNkh1Ed2U5mS662PcfJPfwfgbSoXiiFDeMaNGhMAbkYpioH3n8eQfA35HWzN",
  "key21": "2jHVEK1k4RLHesazyMVtZqhh26P21X5qth7v28eeyW6MNLXEjQnFVmmDfpRQaa3NCgZd5bZQF8UgN8c1tUnx41rj",
  "key22": "36DZDX28e1FgWwfH6GQFgkc9h8ZBTm3wwJqbW4Dc9nLyFBufJq6vfpDgfQYjJ1mZpXig9JoWdNJNgszSaeL1YzuL",
  "key23": "DfeLaecGnTsJEGFJ9pERfC6ZVq2fveKVzGNw5wnB2SJtTgVFNzzPKNAJx2Q5ra3B8vPRbWZdSc3kUJXLk1sVibS",
  "key24": "2agpftK5UHwGZX4sq1bytR4rgjJFWtHWbMLV6n5UQrMrR773sA32A3eTT8Rbk54CdQvC9zFkgT6Xb7rvRkKiAg5h",
  "key25": "4gQPLgJHpHHUPWR4U6F8rLDrJGcsYsP5zQddoMRTW7jN8bmzPBuswd7GZNnomAkkxwfuC2gXt2wTrooJ2VofnKA",
  "key26": "5sWB5h3XHCu9MZgvm1V7TxdSF9MxrvEXYbWhQzj72SwdqWfbbNwCiEX5mAmSTKLhJLCXAk62XBNNT32U3gNPJhFV"
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
