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
    "4FnNkT181hn3nbTN2gd7xF3wRcbFVrr7YpGbKAB3GyhthhrQTWBxZc4p68qDwvp9uaiWcAGyfNrfEFU1pGNp1Hov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y6pfkCBokYL1ghsrb71WqV1YSAUPZdc2bUMGsgeHtktZbw8yeBr2Sd2Fu2ebjWRJiGhPVKfQCAE2rLMs965CVF6",
  "key1": "5URB1fgBpUbobWGfHDCd7u145dyuJutPZuR4UdDYuCW5BUujUZPkMzGHyYV2K2SeF3Lwa9NLQrNnJJwFpfXgEc2H",
  "key2": "5Farz6tjVGrY1aX5yLtXUmYuGLNv3md9aiEegsjYt5EA2APD562bh1dExkMvGmvs8YYiUb7tKY2DzEFfLMoKwLEr",
  "key3": "3zE32QZLUEAQaWxAzNx6QFDxy99kkR68xvricnSFdpxp57Fw7kSfBr3L27REpG7W6qaNap5kjzmbGzBn52KsnpAA",
  "key4": "3wpMvEF6gWJJuveEx8yJ8Th7kqTTvgwFVsuedtiZpFyTR8h8Nh11ds8bZNjgyqzfnu7mXBrico8deArthXx2HwZK",
  "key5": "2Q2GPcJZdr3FsrDxWxJqBwZTgGRC6dA8uyARreoVDuu23opAqtG19kFLF9doS2MreSwXWWRGfknEfuLPqV2tvQYK",
  "key6": "2V29DpJv1HwHHsLVMK2a4nA4Y6P3oZ4iPWQP1EEQaxJjiSaTBuLrLYqFHHv1S32amT5CFwgJJjRJ9T29z5dvSnMo",
  "key7": "3tKwUVF66DVCpWEui9PwbQKmUR4ncR2Gz6HVq4vA699bPSXfvBa3UjTggDcLtDAsCznZ43q7Pmwu3JcKqHvfKSJr",
  "key8": "nfU1WCzYw9nr9cAkBYReRSxXDa8H11ewFxAf5c5SMU1TMBL2RdGn5P5NUu4qXhAnFufeJmjMFf7GPnT9FCDMq9g",
  "key9": "2bN1mLsZrVroEaYzekiDCrkqYDj3hp915QBoX5y1dsMzBwFtszo5AQpJB7HEvwbhFM12gpPZsvJ99iQB7wUSiSW4",
  "key10": "173zzFgbWGPHtEQMG8oxRB7qseHtGqiota1tRpKiLRUU99L7gSDFfKHKNjeMCMjjoCX4svvA546kdRRJJNQpFfd",
  "key11": "5gHip9AsNXF7o9g2UyUEkeVEo6Bj4HT381ixUjS4LtoCTn85gNZVXq5qcrQGKdQxhAabyMUN9eqCZAGgYNnZbert",
  "key12": "4F39CKouKBppyQrySg8dYWMfBqe6arDUYuAwYMjtpdZH5yZXS2soJTtgWrYWAy2yYWCM1FMEsBG9mgh6y2D2zxzg",
  "key13": "58wkvuEg8FPQc6252HyWEegmJHhiUBKYqD6zY9czvJrbP5Ut8e4bBeopAXtix5dJrYEbegkcwscE26VTwJyDfoC2",
  "key14": "33AZ2AcrARLc2e2rpaJpQKkYN1mP9hJuWXUmGSJC4fEWqz1SgwnCGUHLXVbhqNTAJpSazRGMBKQeLTbPviFvUq7z",
  "key15": "CXLUJJTwHbxFk2hHvSTaU5K6t4wLsostJLYpiF52nBQLuGFa41F4hrBAiHTRBANJfGsYrW7YQMuqEijtbhvSPp3",
  "key16": "2ESTAuoVCpzatNGYpYUdpcK1UaMKwF7qEeC29aw2AdUfk1Rn6WyJFEodoafTJaDCsd1XchwhHpdtvw2sEi26PiMf",
  "key17": "3hXq5zNn2CMXcjgXkrg4WaZWMqmMFxUbLYkeZqoS3TgoknJrZxcdfcWvCRUp395D74WQVV4AiBDbYJfjAhshTWAf",
  "key18": "45DdP5avtDvxGaUZ8yi76TQQgKi1iP2aEiFBm3jaWzD7XmwotNS4nkkKmBQetyDc3G9UeZxasbPb5wkHUPBAcHv3",
  "key19": "ogPhdUzKoZkxGV92v7dJwhTUVp8RXQAefsosVPk9aTucG4spszLbKXozU93njZRbc5SuD15NKxDyyyMk1JzDAi1",
  "key20": "2oYB9VGKeWxEFcNEJ6gP1wxV59KkBykLVrJ6DA4UoC1UX133VGYbWGZq1zpzbaLmJbwe7ycBUzHr1EeeCsGpp64d",
  "key21": "2rJtCMi9GzAZeeaiTffH4RCJEfRg8NR7998VzdJH2VLuoCWVfTjjTwtMKNFfnora4ArrZ1HdZ1dKyUQqSXqe9avZ",
  "key22": "5WuFZU7iE5rVNMb4PRbxdZtGeAFTRTHhbQvE3pTsJFXB9SXQuNYzBT2J3PRc6Er77f7nnhrU6EJYgYU3EoLDCSPs",
  "key23": "36dFxrq7gy5jGr2uH16vYsmkRXgoT761Dwd8iCsunDaNC8xiTeLD2B7ULnKRBRtFYjaWH56trkRX9yAKbAGF1Ep",
  "key24": "39vbjjyDZEuz62n4JBd7exMdLBZSQjwydb9CwaePigKLZxBkZ7EhgwvGjHLURo9xVsPRu9cjyeNutyUHmCwj58p1",
  "key25": "1qPMiWAVswP6xYcUA5ch8w8YtiKfwJsx4nSqbSp3387ePmsTqccsSE64BsXbqVCMWH1YeGpE6rP4ZF5GYxh3McQ"
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
