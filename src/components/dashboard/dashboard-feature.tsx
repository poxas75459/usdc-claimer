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
    "43jEGd6iGPEa6zzX6cYMJk2wX6pF3bvndEYLiJF999XWmVARt2MQ3tBYAeCSw4vdQUVTmiKoXFQfMXJ8vQdFXVN3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sgpwA32ppJD5qwjxNp9mgzwzaUJ15GKPLQLD5r3Esvh7hvBAMbpxDVCdWGJUxWKf2vfPLP8EYRbb6ECebkb6HRM",
  "key1": "4zaqiV6G6bz5GyjsRCQUu7bx27QSAvadvKtwn9J9NgFDdFrtJmcyStyS2V8L6bzJfSzJyHbHwG3YCGALczwRT8Wz",
  "key2": "5N2r78VxUMEHX2zesSu52F8tEfX6yeN6TwrK757Wd1F9fPD9PnSEwm3qA6ipthe16VS3zjVq7dm2fLao9v5A7dDc",
  "key3": "5bQ6PscuSz7DEQ6bg6PLpFmev4r28L9obd4WDWein8mfbFmC8JZJ5R8ecxXstXN1TYniYRJzzvPMXEUw4DoSpYTY",
  "key4": "svkPAtW57FwDJVXvjQi139ATY5BsAScfTr78YTEZNbqAWmQ2Y8ZVd3uJCrQYbtVT8cj2rf38yhpMoCLUsYaoQem",
  "key5": "5xLJ9HZArhJ4i6X1562fr6wmiS8f736M794hDBLYZAsbE9BNhqijC18oTEh5j8ea65jWueWxjwN8PPw6gE28iHV1",
  "key6": "3mN1h1sJRTdQiJXNBKipa4zaqrhVeKdXwbx2MejWca3Ygpnx5Bej4wwue7n8fufPBnoMnwHEZBnXQ8fAhTLSYvLi",
  "key7": "3A1Qaq3oGh9tnedrxbRrUKFHEJ4Lvp8FpaAQ9V4nrnaUFbaSMankn921nDnaoq44qkrJ6uWHXYoKMYwuULtWCmBZ",
  "key8": "5SA1y934yKMEgLpswwhqzoFaQf3mVr3YL3XwaFqiGrT1HTqxz4osW7Err3u8WqupRyG9sMvGAZ9pEbCRHibzkjYm",
  "key9": "1rgU9MCX2fVhEaxNunZyf2raub7Dd3NwvQn2NKaVBtb6XFcDkcFF7rkD288qAUjU2jVoEFmr2JoZZzErzisF5hZ",
  "key10": "2ZgVj18NhRRyWoNwkoBjMVjT2eg1PTWEgL32FF8n9daMjocFNxbH7HmTDahx3aL4tdLDE7owTWi8XdyM3s2ue52g",
  "key11": "3n58jnTHFq2XwSkYmSnPY8beNcnnUEpWGNqxJ2PNX2zZe6tpLU5oUJrjZYxJzZx44jD7LHmyD1VPp6wGqAdjHdrC",
  "key12": "ULA3pkitidt1qfnsm2ikdnhPS5mFKmGsY1YGM1JoyDXzB7uK5sonbNF6ZjkPus5HT2ZwPxX9WMT4HKeqN4S1CiA",
  "key13": "3VWxXgQzGdGUD9FQchSTP8tgvFtAVyvEYfjQ5KosrWqErxyD3XsHM3GKc67zrfY5TfjBy32w9Hz4y4ojFFy1eqfJ",
  "key14": "4oGUYepjUsynzS28UNGpvp5KXDg9FUpRwX5714abaEiw8xyn8p36kuX3FkfigF89TWJVpCwJemQh2ckkXjdm6Rus",
  "key15": "2BxBdBc14fgdYd5a31UwZhgRz1ZJr8BkmNTNRzX5A716aSCQWJNTWKLGcftwKNhEJjZ6vgsNY3UZjuXbp7it3bRv",
  "key16": "TVuuyzjjswTaiwDAAbLvnz3tHDK5BzJXAkDQfnz48ZrzFZNFpknotuDARs5FYmCm9TC7hWqpke8naDaXM3mEcAY",
  "key17": "3g38T7cNuTpe6rYaq2iwif3pVGgdnSRmuiTqKPQ4doEs8qTJqwZrVF3pKxFzdDDGZwBPah1wD6Gdai8cR2vsRhPb",
  "key18": "2tZ94NVVbAZmoszhH3SwrJZvrBcFWLuoZCS98pwhDWhfRt1L2wpmUdbUmyFRTviSWVqFikTV3pDmxKdHnMh2BzqX",
  "key19": "4MFdomVv6Tn3R9BzqvDLRxLr5DjSvvvmKuHXja39GiMQgQcoZDFrp7JfDHPmXBaTCMtWeaS7J2GBBPCUY5PgJ2w2",
  "key20": "4FoHoBaEgrSgMCWGkNKwQPjVtu6UHDVyjyohVvayzVyNMA3j2W9Gx76nw6YUHUSYqsQoYY4NrLadUkr97EaDKDBH",
  "key21": "pHfBWVkNmErpEGcKhhhRC4gGcsBsLNdA2Jw6TwgeQxsmDFvGCor3efnQhJt9BytxcGSgvJZWHcTxiLHJscARCUE",
  "key22": "4MT8cXoiDB3u8145iQFAD3gTd2D9yz6Gvnu9ENQ7haT2JbqtNGuWct5AgEBHWj4cDjXbgEnestapVk9t2eZox19H",
  "key23": "5e5Z3UBMMUkejFQsX6LuFers6SjAWkvjJvx4wTN7hGYdJ7mvAPoVSpsqwXcNcxSQ6jhUMc6z2YRjxpASdE9NjUNb",
  "key24": "4foBiiFKwV5hraGwaTdxCLu1p3Y6o72T1Wr1MPVMeUwQHNXf7n4rLyY6Kzd5jefb8kq2KPDSfhz1RMcoLS5wobZs",
  "key25": "2dE9yMe4PVwA35Vvzj7votDxE9eGj6D3pmfTYhF3oDb5AiMqMXpVobs7GLjNK5nQz5vyuAqDRuQtTSFpcgftzjJ3",
  "key26": "2cVpURRhhY9eD6ZsSjr2s33eqTTWYPubG8TmHzCs9ai58T5XEpoAyMBWCvcCiUno6M5veJdjcEQwNqPYFRuUB6b3",
  "key27": "5Eiup2S47FAFWfqntbqfzjgbfDDXLHRscqEZsXQtBFGb9QH91gckoqQW95SZ3XbZGWP2Gz7oNuk4aMMY3o2HM7k",
  "key28": "4SDvp9VgbT8tzvQJ7gvMmT2Tw8bpgS3mbs7QJh1gSpq7fmddc2ZypM7uwPwNe4ThDweaax4UabctJMCAUaJUZRkQ",
  "key29": "27gVWiHeE7h91AtzhwktCJ7tnFt53j6k8ZiMUxzVzyStHub1rpcdVUaduzmEZVnYg8V3qXaMD2f2MR89uGPJ7LvR",
  "key30": "3fMTzLsYzbVRA5nygFMGaEZ6tekbiy4RWk1jdPPGxk8FzK7FYJ9z4Z3mHbXV3qyrbq4mx5WzGSLmLZ4AyF2fcyFa",
  "key31": "386Xy8YQymXzA22SL4xJGh7rsa5SaND4BLVRkZxGAXDKzDwmnckSKgxegHcHxQXpNVSpsDJg6XnwApqFivWUyu9f",
  "key32": "42SFdDGeGRBzrRVaAJ9cBSJjc9EUswA7t1Kjr5SWC8sDtRGw42BD5ChpGuTQYGL6iqkvgUoPi8H82R7DQprduLiu",
  "key33": "3X85B6Kkq4W4JWx5EsNKGZg6q28zJcGDQMLBoTmTLKo2KUVbytk9Wo649PbaFy78zPKxfLjoaaTEw3oEjav7aaW",
  "key34": "2ZeAJjJCfWvxkCi7acQL142cByA2UovXaMXoEUiATMcT12yzB1hiTb1G8yegNUEHWLzKqMDA6pWhNaP1EtZ9CwXz",
  "key35": "Gjvn1RVZKGRTEKD3YMvnDsYXQxqbu6nL14CJ1ZYZirAYx718E7vgW6Yxahzf5EbeLv61nkWtSxR8WkkqMUpz43b"
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
