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
    "2W7FdR4f5HR1F9HR1Hvrf4coq4AZ7UmJcz3XewZN5kdrjmZo6zJT3gpMQ2J5YMAW8MQaCyXfB6tqqwi3V3pHuLmD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EBFKFyzwRupJfhJ8qNMX19cVWLEdwEpviGNnJu1569CLFY6CHWABneJ6ms2KPpgVmaKFU6egxvufQdeyQ6EKGLM",
  "key1": "2egh8ftJ2mq9V8GwdBAJwFdys35oWoNLMfCmKmonAk1KR55nAZfB9oEQPjLYfbgUryqRy9ud51CWNfZQHTjy4EXG",
  "key2": "2HLvabdmZtmxPhEt5z1YCBa8dsQ45h6aTWYWKMrvHiTXoRrxnFBeKJ6HAUhVynAbQB6WY8qF4wmd2bcd9Zs3Mp2W",
  "key3": "2Cqy8DXdRXsKajVVs1viTR2Nui1sGkxjieYXF15QJAD1YwaunUJEzkAkV923JhXbU5WmgNNpXQAktJEgkwYCrqrp",
  "key4": "3sYyCRiHaYeP6qpnq3ii9b4S1F2Q9tKitXw4KpP5FpcmnBx6VKMdt7As59RCYHu9TTEZPbztjgMgpa6Gt1DdA9Tu",
  "key5": "5KyggqCWjeQcm8BWziDRfSenr5Aj1GwXxgfqDRT7g4tQxVkjfLSbuTPtK4d1uPyNTQNnjg4J1cN1T27BeQo6RTUU",
  "key6": "2U1rH5sPhMryeg89zVsQ8GzeDjqmCLKvmNAn6JPGytCwC6ajwDCLv9CjMJqpZBzE36DyeYngqTnRxeYYqAy97pic",
  "key7": "3HgYd5ULsgyMuJqSXLTone19qXGiE8h22o6tJ4NVb9cVvBg2LcAAjt5K7j69vCpvy5WFmLVXXu3P8pmUgxnLzeo",
  "key8": "4qe7qWTK7EHBSLK31Ac1gpuTQw47TjMaZQY7v8tQugG4xa5GQjGuVtLoTFvzNGFicKmht4BCU5XTcqWz6Rc5dvyJ",
  "key9": "4LWxAkdSTwVmSxFehzpN6tTz4MRCf8AmPX2ZiVTCHHYXMnFv4xXftAsNq8aYuehPnpbg4RgdiR5zLgo3PimyNTTW",
  "key10": "3N8A7CpC3nLGwYcRGcQR9NgPngqQdbsXvUmsFcctqVbYEXTeKHWpwjJbwaGL5pDn9TvubWLSbyCw7HieKcvcKqWq",
  "key11": "3ipQJAH4Eu2j1zbH381w37bsyGxgiuA2wuVX1XZfgHCmUsF4Q28B57SVecx1sfhiSztigney5Bwn8iitRofc2X49",
  "key12": "4UuCFHsN1kgXe6hT8DnZuLdtcksQTXUANWPBGXHypsciep8vEUNG6pQbjaEJQ6trNoYoNazQDLC3RWZBJ9smEvdi",
  "key13": "5ycqpZJwW3PSgqVYNECyxYzy56UK6rjvMWtdQDf8F6qfrVL4aFcbXWbDi2KpnEmHcARrnekXDobsRPgta5K1pm71",
  "key14": "3UfQiQXaB2pWhwVTjGNaiSjeLia4RAHFEnHf3BokCJ4NPEYKuADoZ5mt9npni1DnXXGHrZRAimUKJ28PPNdb28ed",
  "key15": "2Zvq4qabwkwJxfqRUamfNCBzN6a3UrF9giz2Yfyqxb8ufCEgqoWXYA1weTCwcngE4yffYkgiANp7dPKV5SrMvaMa",
  "key16": "49CR7h27atUWwjpTqUGP5kNu5ApbVfseL2TE2hxvaxjJnbJVjUBC2cXSrp8HnKXMU8YyEspdionCdk6z16FedBRS",
  "key17": "2zYGo3VGH3gMbgasDo3oRYSj4dKEeoZKxHmJ5ZRnkhuZFSa83eX2eY7Ey3QkxRfzZCcg1N56HvNsJqj1E5oM9k8v",
  "key18": "fUBQAY2DWcXfuQDi5qkZP6FWu5kcTgEdbbrfZTcKjgbi8q97kcmJfvrzojYPrfMe9BTFg9Tm1tDMEyngLWzZiL5",
  "key19": "35z1NuTL1PDtTmj7zmJRZWd5dpFTxCfY6sp95eDtGajGsNFgdRX6JeNKQo4cd4sNkZZa68xnt6F6Y8wNCwgEi9is",
  "key20": "5VdYG8stWLiJMksSj2zK5VtsFPTtWWGmhBRUAqF9HH8fXr3juB8BbXKcXYeNpJY9tryE195wc7khEpQSiEbv1CK6",
  "key21": "aCXcAhLYCwyxeoLoW6DqC2uq9reWcqRpLUsmGaoUMTgqMVAV5ZEA5WKzTSLofGHDr9FQ648WWXoBuQinJuEBcfx",
  "key22": "5a2N8xMiarM8BCcvmYVPkZtsLLuU4gPaehAaoxszx6p8bKtDRnjeJ81SczgCb9gs4WKizEe2y2tasuyXeDE25AwU",
  "key23": "41E4WZf9uKrE4xe5TUcJrQxeo13LF2VDwVsjbmmAT7KEHAFERzDKC2vxPLZmamPWUooQ8DHgnDe5Rq1oG8dgS16F",
  "key24": "56QosReYZzj6VGb5BtexgicVrJ5Lebr9eG5gwbqzb7KN3bN1sYCr9KezKmt9fUbpM2t5DyKNNrzqoqpmXhxqwBX6"
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
