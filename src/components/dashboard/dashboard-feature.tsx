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
    "5PFoqFN4ZLwZpqySZhdvDEgoHGzHEot1KRXN2uRpFSvvj33aLx6zAHcBECuota9tFg7dFC2VujexHN9RX6v13whY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61jL1Mf96QvMfhMrnaxWiYs8CiBkZBY6MjXAXzCx4zV9hDyHy8ZuJKNbQfSTsPKmqdxd4gFqhEzfJwsV9cvjMEjC",
  "key1": "5PHhBxrSJeDY6rHZAxQHzj5k5k4rrPXtr1gKycX84mBD79dFmCW4VhqCDSxprpmhPD8Y7HQJ5uQeZm15zHK7gxey",
  "key2": "3HZtFG3dJdegxJe6QpKeWbYfxrA96FuHpM2sB66i9gtVhs37VHaXJuaGvxJskjKiS4CiJ4eBRvKmp4ocKPpbndXH",
  "key3": "5R6mGqUtJdqg8cM4JPNGvoBDTjJqF8ciVKeC4q2Su8MimT2EEhbPtea9PZGbRoSnu6KKQKdRKkQrDnkubnDQ78YT",
  "key4": "4dWCRqM43FVHKPTmEHkYrGeiYzKfooX2AJoZ3yca3rRPKfZYv4tCF69rVr8QKBJX8G8yCHWkFU7b1h771vrDAt1B",
  "key5": "rRaJHLSzrXVX4XMzAUxEQARHzQrhG9565QYECkEtfWcPsYMV4J27V1SznWDN7LzPpY8NY9ebXbQevaaiFBtRtG7",
  "key6": "3jj1H84EPibWrV9WYHvuusEzfbmAuZUW96i2yL6ipLXCkEwhn5wcpQ5s57KLD8ZfdLbzzmhkezm9KGyLfJzPbTqy",
  "key7": "4M65okjNmP3zksv54MifDwzjimAr4HzxHaSJH1jkFECamB3Y7CDAVq2ofdss6pTD1obwmyGQg828FBUjEHcQZFd7",
  "key8": "2QqC2XHkTWrrSS8bKEjvF3G2AR6b4Z1V3NygViu6kpCZ6UpMuxm32v75CBm5DF9VBbi8Godt5ASoAwcFE2yWfz8g",
  "key9": "58rkpS9yW1Bq7qu2fxhNq8UaqdpiFAVA1PnhNXUG67onWFAJnRkfh8BAEdFxzhNq85bLBbDpfrGncWhbQD6oWAZV",
  "key10": "4XdqCKRFMbMMkKaS7RVU6sXXj7W4tw4yNtDE3PdjNxbQJ8A9YKjeARvZogSoXV6kjQiENrVh2xMKdWuXVteKx6No",
  "key11": "4Rd8dwY4e8DD8DLUy9DNPYcCNDz9S9KShr8K5SeuRZLjLiuaL7pxr1PZC52dAuFw4zoVzeZ7L1DBnjveEmTL2ef5",
  "key12": "nJ3qZEeny7WYqXx5ZEQKjnZB62xPfCGFhhtUtKX1ifmMWarRXDUJ3PyMKeEQ5GUBR5eAkAQopvdg1CV7D5MQnLp",
  "key13": "3edmA8TaZ4MsXh3Uk16HvarhhMeJ8UVvTKWMKQCUaCm2ukvCBCuRAsqDZVWg8jwEhQs3muDHNE4P8Tjr4zpbdHDk",
  "key14": "3cd8bXQB5gR7CsK4gPrjwJNWdWeJCCQnw7nZTvsGWXHCVRJX3gbCMYywk6a6jS4uv3XeqBxKc8JL2jdaZ3t4QurH",
  "key15": "a8LUKSVTNLQxd4XxceYtrYkwByWrco6t2pYM1qBT9MsJoss2Hw9x8Q1EHd4k98UCYGLEokHncKx3t8hsXsNxkpp",
  "key16": "2S8Srh1PMd6vuNjHyhRM2NSnJmY656H2e8EP2J6bPLEyyeN1MFmNkNmDnBmG3Tt5AAuyfWfoHUc6DvM6dcYASZsa",
  "key17": "3tcHzeMerHvfvdw3u4JnsGv8JHJykz259xuwGuEZdkVRPyC6ya9rdJC3Z6UBoxXN1FdBKuc8p7Z1XUMsbn3d7XqL",
  "key18": "3mVH3jM5yfxW5J5Cu8kwNAkGmhjMgYTGeP5YMQN2aSn3Co7KFrYLodMsgcXYKX7XGGAi3Q1jzADNkLjLiiGK89fF",
  "key19": "5PfTeS4FGEuGHmTYQdbotUN76m3zg2QGPKxciJbfzB7qSjW1NtshfYoyLKSwqy8NdZjovgZguowbU5D5Rv7DAs9f",
  "key20": "5qqSY2Azh4XDdZLRMtPPELnL9SmRswNK49zdLfmwJnvvw1KeZ6392zGW8zuqToYVuiS7HoZAJHAypM1cpw2nfuXK",
  "key21": "3dHh5wzJg37S3N9VYW1XEV5kHTiHoSrx2V5arqdYCeXcAHduCMJYE3kTtyKUUfdcr4x2CiTbgE5kGGan43Bas4Dw",
  "key22": "3V1oATgW1WNE4rfbMXqUcKRXUBh2QkMeFkCqbmaUtyym9JnJxS2AsnR7MM1ETgTaZwpsb4J5ySte3aRQr3WpdsaV",
  "key23": "4gZjWHoN1G4T5wb4SsdKAc6fnakqxmGt5o44KVRd7Kv23qd9jeEK1sUNPTH7ra59bv7vzGWqPk8wNvNdodHj5wdv",
  "key24": "RZe22t5ukdfM75a92Tyn7uLQdmLwNevkQrhwvg8L2e8SeHNnqfE1fRTBTgMo8yWRLJTc7znVG8ksv53APCsepoG",
  "key25": "i1h1oNvnBNiggdNaB146WqLNr2mbnWWz4nTyHyYTWpuJBzKXZhnoZErBua98dNchKiJZKPp9HTG7BnPyQbzbeJz",
  "key26": "2TumU6ZCQavSEBAQxBgYA1VAMv5EcMAGzBE7a1ThKTQxwtfAWmx5pGr84dJSYGY5EmvsePaSDUSqmQjscHTiuHji",
  "key27": "ihpud4RYMBHQ9A9rKA3AUczSSQAFhHcuoCnBqPNfiWg8CoTFMSDa9KLtwdxQiXdKwKD7ReZXJYAAi811iZtroGg",
  "key28": "wWa2aJP5cBnRyfSuLgyX7wPUCTWo6Zf4iShomjGb1smNU68aGfaPwL6dFXyffqU69Qj4pzqV9hsQV7zntTTyjNa",
  "key29": "1ghUaRE8uRxEbYitGjsPHymiQHmytX6EpvgpwfUwwKnupMxHPA7DKXgk4MyDuZS9C72PwsEH7opLCQMRt3BMrbY",
  "key30": "4KwDVbbQ9uVCyfm6wsm8R2nFuwkM5VBsJqtefCsT1dZCUYWviDc4MFiuLYNAM6ToytQDkDAtcxoL2NSjDUTvxmcM"
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
