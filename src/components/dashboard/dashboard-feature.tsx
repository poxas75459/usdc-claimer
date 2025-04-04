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
    "3BTnYpQDusWcEBk36cxgSMCecLL8ZspN9CqxPiHVs9XfnxDmyx4tFUsAabFXU5XwzWgMt4FxioVjCuuoeW5bzctF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HmzPTLQQbJ1eksqp3RLZergsnXdRuSBoypo5t9Hhxahd9zrYHEitVGEm4CZJ75R1qzpmMXfzK7ojPbFLhhzC3AJ",
  "key1": "66w48xrkoBCYAD7vZqcZRF8YdrsAdLrofMdJMobgRButTZaKyn2cD69RS5oQ8z4MnWBktGNayLVZ6YCuVtmDp56D",
  "key2": "2ExUZyfWuAxFboyJKg9HbKxuZyb65MSKSYKimxVUdvGAAamho8guyQchEo7mTwjLpK2oEWNxHyjSUCnk7hberKAY",
  "key3": "VxH6DvUkhFRVR44vfQgZ9U6wZNetnZBM8qHXFqnyfpoPojehH57SuJ4zSHd8agHTW5bZE5HSf6qF5SZUVS4ThPc",
  "key4": "2PxJ5cFb2JKGJKPYjbRfAoXkvzr7Kgc54tRibRvTEPpkj21uH9mb1vno8RMt1dYYEMZAnLNgjQgDmMLUwiuHo9ti",
  "key5": "4XPLAZXt6GqHn2ydCMUWx9NHhbw2wypbcDk9BYxkzBdGwX18REgbiM3h3rqHVwC5sdtu4YoapbWnQHdp7zMJ9cFH",
  "key6": "5JBjxPF3ochoEYkXgDx1hPkhb1arnyzyJoAsEEWJwP7dAppmZfr6QSQHmVBwjysAkJTYZjwG9TdpWbHpp2mSy9k",
  "key7": "5gbjqpdsaRZDL4inJbwaWcYsEzfhq7Hs2ekzK8wVLBMPBfnFY2ACuFtBD89yyjaqVyi37QunjzK16NWR2sm8BTQL",
  "key8": "5dx1V53AoRDS4D3KirWhGEZiE5tyTrx2xA6f8FH9MPxLL5Yi9RpSiBTLjtDMuksdgS1NdRSua8Sn87MEAR6tX6jV",
  "key9": "5jT5ZokCdTiTJu8cCoHYoHPzm63ZzPMr6wUCwsRYRyBUjEgG6BkRU59pHgesjt8c3HjdvWBHk7HipV83ADjxP93Q",
  "key10": "62aPR5YrM9vnynXtp7Kmyz3tJCWkWiDxJdeyjaJYYQMW9MFLmDWeUh28cuWNHKweif74W2fHMUhFRULU9ZsUf3U1",
  "key11": "3uozGfqxa4Y7mGfuNTiKwnuvjHkfXU5KtpRYo9fSeKGUu6gDsqfM6MsMMh5R8nAZ2Qw3ySyZvvxDSztofJGryH5S",
  "key12": "2PGurJ8D7kqNm9oap9nMHhEKLfyoTN134dVn17BGG5tUDZFvyLoH9WLm2CF12W6ujS3zveMVgZErFVFYVyHRADPG",
  "key13": "4X5odpeBcAB2x9znnA2mUVzSFXghJ8xzWzZ44MyMpz1zU4bmZRc6eX8K9pDYvasgcZ2zmWiPj5zyW9SYuk6cqR3n",
  "key14": "4YXrN4SNRLSW4AmXwhw7QfBMzwe2ExbAY8e9tKay6p92aKQphezhSoL6oUyFVM776oYYB2ts8NAWjRSF1qbSRgM",
  "key15": "4azryHkCodk5TSJSgqXGQHfT2fASu9VKYtuAZ8sCs6mdXiQ5HL95sypph2pb3fY25YJcpUf7xqcQRamfQtU6BJFM",
  "key16": "5FPhY3486w35ks5DCL646LM6GC1szj25LGRUExoLrods1rpXmr119U6xk99n5k2ogu1fAkCe7EdjGME6BTy3bgq9",
  "key17": "3zzyUtnmgJGP63E5xRWcKBZt5jpWr6Yqrbas2AN7T5yC2M4rQR2jRcMEZbrwqL4jXFqXpc2zRRy5cDSLGAxziZj3",
  "key18": "3bGGQrmcq1rTxyvJv4KnfRfpT9key3LYX4CTYQVjnQ2Qyo8WvgbY5XZQwA9DceTSEcFQmjfhw84FpsnXkB95QPfz",
  "key19": "2DtowTCTabNjQbSqvc8DP4sVjtyDDjWvQ2JmvfBrr3Svopu6vfHqSQfQPCJZFAJZHd4aDmom1H5zysLtbQ4YHgKG",
  "key20": "4ECokYG4ASx8WhzHASw5JP7kpe1SRutuBtfcoiveur7kmPLg8ivAxTomKkw1a9oio1MghtcFsyjYRx8qpDp7kpcL",
  "key21": "3EL4GkSyvjLgvxQ1dGHxw64XCMrj7MQGFU1VaNrbnJTN6B5wFJBC7N2RrrwvKCuXZgHYZxtUVWPfoRa8FEcVKdsb",
  "key22": "2MU575xwpVMKRZtUpw8DH23ktnfq2CL5t6baAVK1brDFMgsaoqLfZdHx4vH4TrCDTTnHtPimscFVvDLSiq36YPiK",
  "key23": "5MY1SGDkmKjQ27boL4LVfy9obA7DcfQw44dWbGKgciExJqVzg1jgdZraR8enu29ZwzaqMvMHD5rtoyYZRwF2pe3Y",
  "key24": "rp4TKpdQD9qBjNDJc823pbBbJ8xAa59TUp5YNQvo9xcW8mpNX8EAhBvfsF7aPMybK5i5jQiBgW3RAGjc3QhFnxw",
  "key25": "TZ8ZWNtPXD92MfhxHoWczxc3zxZEN5vMrMqgxQ23VSgTJA8yEJt7xUYFR22tmvdMHkv22zedJTmxV8qWKRuxah4",
  "key26": "uUa6jnrxsWodVWpYqLbkAWj12Yvq9mfqVWHE28uR2aMvCDpN5Y8xrERH8LHKKSwm7J4Dr2wTN97BBXEYjfJQbV5",
  "key27": "2GvStG3rwY4xZf2k7n8a7YRMLTyNHPGnq8LcHePGgCCZXTixCXDgmW5gcg7FGtKroNWcoVStv7r8uKitcb8HeDgN"
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
