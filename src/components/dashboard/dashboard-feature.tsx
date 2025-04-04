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
    "3GwnoSZZHv5P84RYXa4UNRcZLV9BsTFgAdunoQU1MyMHeD2u2Gg7qtHF3PaTGEhdti1JJV1gFMeRX6FXJwsmUnxQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AWrqEhhuRB7DSVPk4vZf2CFFx39aBqCXFQ8AfYv289bZUCks8AzBPUuG77U1DXCvpNUKULmQWjKB2DZYCMRibot",
  "key1": "26psjknXsQ6sgG4MFFUdxYyfzR7FULmw4yfFibWwEnLbr4ZdTUKXN41KwUhto3Ui7nJPbciAv6eBNbnbBbLFQPYK",
  "key2": "5mXhFN7nwzTTV3pCxs6Sg63XnVLxGYcbmaxFRxgyBMZak5avrFAsv3tcKoJTwujcDCEiz2PokfAKXYMvKmQ53Ck1",
  "key3": "4p8Zi4Pw5tcpiiqaePm4pojASfUBVd3hYQnXMBJYw8SDqNbfPD6A4h5GSzzJdCZw1RXhrk9w3Cmmon9Ux5VB2qMc",
  "key4": "4gnXegDYQGL5rkME2EdFgqnY7rax1xi1wf2zsEFfLoaMnK7qrV41Cfo2D6XnJsY7DaxS1F6htRV4WadSJamjZeZt",
  "key5": "3ATJb8gxth9hMyr4SJEDiYz3GswMxx1HUMeTKQuuz5quSvZj7vR2zzzesAFDdGmtzX3gxV6VmkVAP1b1naQ9Dsh1",
  "key6": "4HysMCnKUpr8YfBzpwX5jpNxjV6JEyokMtzbcDz1MwhMnotM6hy6feiMRygQBBHfd45XD5EqzK24zwNsD1kkvqy1",
  "key7": "a5axQSUCQTPEBS6JyWgiTjou7a1uZhuTeXj1saooAqPFETveAXaLfxbDKCKd8h8TT9p2QRqiZKGNX4SwuVLFQnf",
  "key8": "iGq6QrLZqfax87oSJtzeUQoN4uyAA38Ri5vRWTvSbqsjTVeG9ha8T8Quec5XnWQjwoobQdT2gZny9fUGnTmWzLv",
  "key9": "3A4FrGmMnp4bg9cdW1mJv9jBKs66sfb3jo59NTP2NBWLWHqtmDq1LCbgt57zkfBKT7yLkVXKgRgxT2tGsS19kK5X",
  "key10": "2ZhbfRwWVXB1te8BQyhSVz2PjiuAyP88gSsoC8VTC43ZdqF9yVPebCc8PmjWVG15sUiHnn4DkL7Wpug5EmK9EgPN",
  "key11": "63a524mjV7JUFHzv3jZ66cTDKMX2ZNozriWEEd3bid1DYkQWBbvwLV66waY9BjBPTq1exTZnkhRzsJBpNuKT3Y5U",
  "key12": "4MGtGHSDr5Xkx5wLydwP3vwjoAXcAh4q7SGjDYXgbDbzgEK8AaQA7ukaqBk2AjiRy4DzUPgAdgYaZ4H8WyrXe8TP",
  "key13": "4kqsiCZqzytnk293qsnDrfDGjhSrbV1GRjwsW1bLtQJa26ow2mFJTMpRM1tajkYTHsJHBop6HbQCZyTMwN4RbfL2",
  "key14": "5VoXLmBTda6JQkUM7cLitL5WZAYWCn61Q5ALfbaQj8UH9FKroG5cgTzeYK9VefgUSSgf6Kgzzk9yMDvsFgjsSs16",
  "key15": "6tckygYHLZoGH7Pvk31jjSh1ouAncC4ssWSypHw69aYgyXiUucUz1HztHedaeHX1rZ9oy4VoGfNEyMbcNBAck7V",
  "key16": "4My5Ajdepafy6Lc1QN2QdF9baN9bNA5EHZDsFNcLpJ6FXkY1r3rmRS6dVSqDvGdwAKRYNup6wSBAgnY97s2CSRdH",
  "key17": "3sPcJsok6u9H94nHwmqv7Zb4rs27JbwaEqRSj5P1xqC4rHfvc9kz1pjb9Qq5jqzPK2HqMvU6NF6xSo8PQQct51pK",
  "key18": "4SqPpdQvYu1Mh98emTjrDfMeDV4g8DNzPFiS43QLWiKonEMzNSgmqraxi1zgsyuXoGn8Zu2nYEGT22Qa3SNgVm5R",
  "key19": "3iYPaWGMVHqtZyt6YEpM7RnTCbh8wPeA88Zt1xeYGWTH8Z3U9XpVY7QSKVfSoieWGjk4EDzeG23vTQT3S36M7Hf5",
  "key20": "54ksVb3gZ9pXUHPUYn49a9eKc3etyPfvrxtj6cvUkvrmdvx4PK2rcMEXWkQvLLgKwBgExR62Xaj6tnBRA7TCr5fM",
  "key21": "2asXounuU3tiaKc2edazSQVhm1tu7xWdaSFYbc7UWfQsdixfsipnQn9mipkNTGoatnC3Sy5HbrmtRMe3c47PVWss",
  "key22": "2CKhymw669arjA6FnzewEEGpEi9qUFyuunw3rEenyzNo76JZVfPC6ahEUn8Wrnm9RT4vsHmY1HsnhDMt8V1M7Pni",
  "key23": "4FqxFkNyoWxeisR85XnJCfTYiztm5wNDaQUWpKWzAx6Q56MUzFo7yZoMev8BF3Pv8jUyQxAQgh44eepr6jNchzSv",
  "key24": "BjuCgvunpacCXgh16nNah3TcYpUk39ApZpNo5JFiNNazt8wURVEe8toxvnSYihmp6FJEyb1kkDEDSTqayoq9awY",
  "key25": "axcfohqpsRSF8HHmcBVccyX918mNizRCKwuMc2hChdUUcU6dv8LFCnEyzTN98tyaX23Fb4dm6ZLzbRb5Wg7oWJu",
  "key26": "VdJHUtCRaCM9s5Ej5tUXZkfxC1qsvc5mFLTG6EoSn6euePJRAc8NzobKcdXmWoc1bp6aUuv8fr326XQBrTbxa9E",
  "key27": "PGQKUGLe98iizvQ9vKhghxHiASs4ocvF5Yj9XWde18Tb7xR1QcKyfQeXrewGaiXva6pCTQo9qQFPGMo6ExAfcbj",
  "key28": "MitGXowc6hP4e79oVfE1rHdxBVQ3VyjH4agfX7wNhUa6S3H8PBvVkBCV8qcGFFFxdAa9fk7PxP8uMWtxcrVivk5",
  "key29": "5GtVqPkNmm2pqn7YLgYYFJhqDvcQ7r29pQgrDWDkW8fZ7YrNTRThNJG5KnQUELkynnn2Wej8ANB8UYqGcpUYW3un",
  "key30": "2aJeZ4cCPWZNEKW2NND8y1sAasxmWTbexEFUHGh6u16FqZ3buLp2D7554gPpJ22yZGF9tzNeNHNgW8CYwhSim6b8",
  "key31": "45D54yqLPmG7tfXHCH16wP6ekMdgWntRRyqkUs5w2nFqPEa6999H4c8BeG3J5GJjEpxbLfdZ6VVCsdoHEt84jUzS",
  "key32": "5ixNEZsd5WHsRuZfMzmuUHUFqz18UzdDdQBnwJKrRLsyVwUU3GYNhFjw3HgvdKXB4QgQRTFCbJK3ttF8cQ53Ys9Q"
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
