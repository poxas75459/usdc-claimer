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
    "4nTsJquADUQqiWZP7XZe17HiGEZcqmWLHbH95LZovgCdyJ2GMRCvVvjnrHH2cBHoGd3A63yHpB5Epr7D2bBxWgh3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gm5fPgZSagt9SuvusUFY5YW9jSnHXvZvUnTDEztnBY2B4Zx4CmYSjcbpRKVoSbqp4TVu3qjMnpsBj1HZfXuhVqX",
  "key1": "44nhLwWkKwP1Hj8WzEpFefX4rVRuuhzjkHRZRbv49ywQNbHeT8T3dHkzDaFzPzcWmCRZQCwbprVLSZeGyniQXirg",
  "key2": "YjNWPLeFkPLRVF5QUfCRm4Zn4p142RMaoqbVgA2k1ku5phgxqMtprq2bM1KpzGAZ6H59XKUafYSEgUmu5mdgA53",
  "key3": "49BJfzrBxkiBhXu9R9YgthJ6Ppk38nNuUUuL5LSn9bMAYXiCZczMkmJmdhUUWz9xYR1rTGp5GvFKAiBEAd4ke95X",
  "key4": "2AW3U4H9LXVR6AYzgKkfVRf8ASmGYhFHqAmJYvk5rqBgaD1Q3frYDjhp8VdbycbxsN52rEq93YSJRwTQWFhYXfP",
  "key5": "3TvP15MDBBYQ45NSLiJnKpkcwxtXT3MbPpso5SvhabE7PL7yFqw96GF67AKPfBvrPCXhfZWiVQwojEyLaXMSoTvL",
  "key6": "5DSkFuwGFzRmWLCDeC3GL5Gp7dQ2KAjqCmG58GzMwb7roUE5hTdRvS4k5caRCMd9Ze8Tyn9H2yyir1jGnATEkJ9w",
  "key7": "2ZsZVE1KAoj444y2mzW1zAGj9snagdS11C5Y6vNURSyvE3g5giQhs9e4hZv2vSxJZvzerwsDotRm2aXYe8RgkGY8",
  "key8": "oYAcETTHEV8VujNYWGQqFdYcBvWRtYX518t2L1Bfay8S7GoJXkVXd9J9EwSyCyGQ4cKRv1xwpTsJnyVvdTzCUep",
  "key9": "5x8wkMGEiUnTkJRP5F1d4qu1eauPub53ypJSLfjvMN8BpMeEXNGQr1Dq9wJMpAd1GSwZzbJgLyRue8mCP4vvCpNV",
  "key10": "4Q91syvw8JfYHkPXS7duvqqDJjrEpwcph8xEDkjYxohK5kSSDKXptrHgkuPQ6hVtuuzgPpkWNWRuctmdt19YRBzB",
  "key11": "VnJKvaV9YCDF2zFpxSbvxXJ3GevKbYVuzA9zMwtrDUayPh4Ps3mQU9T6X2NCUwf3tsdZcwWpN2uhGP9xBYdTqK9",
  "key12": "4jUyV86fraksLnS6SNUDr46BZLZULKwQcTT5ftp3sf57YMW4d6E9hwmM9HuViL7wAfgZTN8WAreWKXcumbGKXeBu",
  "key13": "462RHgQiNf7xGktXhXaKUzcrsGYMfamY5tjzQN6m8m2HAywSZJdiqYbXZQaas1goYuuhe2ranHr4TYJCJMqATeRZ",
  "key14": "3nTJw1L2HqBefwSgXtLm8yjGbR4NebVQ819AWsgTkD5fJ2XETyFVY5rSDnn3VuPVfhsbHGiRAhHeE9MM5K8a5wgz",
  "key15": "3pqAij5QXG3QERyB1hYJgYqnfBKqHDSWBQHDP9fDN8UP77FEdKxpmfafPquK1ZBA2aUWWUTT7X9v2nvCvr6UzLJC",
  "key16": "4V3oHxRrQ2FstD5W3fmTcaDK9425k7Ty89GSpQi9Qw6rtXFU8K52NhU5zQghV6fe9HAFtf9KPRycpACDKFxhvEYs",
  "key17": "2EaBtvo2gc467Bd397KwEujDmra9WFP8NdNdyfoEPXs5zRRwqob9eGynhd9UBTGRNHveCfQ7tWYSWs7G6vb1hZiU",
  "key18": "4KcerYMhewxELA93gpTsN7iN7uFYKmDuybb5Q584AVWoJfpP9nUVTbQErSMzwz5XFAHwgRn1w7yKhX8ZiUxqd6cw",
  "key19": "4RazoKCxwE6Rj46WWHYUJC245AmyYXzzsvEJ6QLjd36hD7kcLfAUEXdtyzJmQm3tkZ3vRZqzqn3LRjCd88tS8WgW",
  "key20": "4Lbhn8ZrAr84TtggJtsosyY5wXXpz6sc2YpSpA96SSxwmHAsVCtubrGyxaiq3X9nEWFJ1asRsLmkTUtnRFET8au1",
  "key21": "2xpqyEFionrbo1yZdg1CdFyfbkpkZPYxkb7qvMHdXfieu6ajciTqbocge6CwZ77vWMX5VGuhHaCYwAV68CpHftA5",
  "key22": "5ZEmF89pF24xh8VEd4AYAsmG4PEdQkSQbZQtiZxyMhK1M7n1boCeRm9ZRVp2BuCHCXJR3PtCoctF7wrQGa2hw8ev",
  "key23": "49LR7oJnEiPxQA7AFnxiENgzAHNvePs6mw4aqG9fENTKdbSFbha9VHSwNUda9dFBwgA9kPNQ9r5RVq69ns75fY1G",
  "key24": "5KoQUHWyCnxTNL68JyjSz8qyawSFrPfnVRgWHUKmjo4JFT5mKZHkTKM6msgf9PAKfa4UjE4NriaDXXdD74AsdBMj"
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
