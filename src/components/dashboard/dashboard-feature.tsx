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
    "3Kf1mDizTL42MsRcubXxtqZNaFoR3sLE9LEVRnFNHkam2BaygfKh6eFGAi5759XxoCDpmtJ469Lak8KyNRmERV4z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46U3LZB8mYKDkRt4U4xictTSWgRFLRcKpeQgaP4jKxdNF6DY9wd48hydegp85BLsitmyuoS24oQTyRJECJbLDJ6A",
  "key1": "7vhzozYyHKNgEezEit886hMVnstgiJocZ5KDf2hkgQWhrgHbs1V1Nxv7CnqnfdkFFmnJHrWT3BCuSGtkZdgbW1q",
  "key2": "4mA31befSHTxqqaJ79DGvSzmwpbnQjWkPV7GxGU6eeXFp3jrZhqwgmdP8nfHgDt4KcaJ6faEsGbVPUwhxMrPhq5a",
  "key3": "2VjUxpowXXfMKHg1WYbj6aboZpWRGvLSzWa4Tyanx6dWqUNxpHSCVn6R2T4tLYBEM7sqQQUmqGNA4TiDgvJrZsXd",
  "key4": "3rTedtFQETfqr1dMfubY4Ye1myzj2JshcCdac8Do9b3Efm84nczCQ9ncqKe5maEDmboU2NuqcdWzsBuQobbQ2SUu",
  "key5": "5rxqsPHVT8c6thYvut7c1LirxXHpYvH7FwQRzFnkbCa9yMZ6DcJcMfwiggAf8dA1xWbdgbXCSkfCKq6UaYkTCt8J",
  "key6": "bWPQRG46XVVMkzDhXzqRaJ5isK4rr1mswK6TUPekDky5w9dT9LKVBychgyyqEkX6QxCpYV6YX3vTFzoLX1JjSs2",
  "key7": "58hJmcgh7Nhp5MXZnVbJoe8WEVCVQoZbQWfsz9gafkuyaF5Cq32tpmnJrYSQmr6zkspBxy6DegxmArDqoSGxrv8s",
  "key8": "3J3GD9Vv1EW6FgHEcsn6gu4eTpYANAjEST31mEwaYNZKgLMUzi45Nzi8V6ZZiFLedNudjgDtcuFBVb7qEXTTNxNp",
  "key9": "5nfmT2Km6c5eCFZeAC4MynoMwgdoUB9pNwpzFYntZ23NNz5VCf6wGu7wSFt3ejZSM7NY8PPbTsutW7WmNrLvih7C",
  "key10": "ozDNpneYVLj8b9v7W19ARThCVihAR3CJ3xoUHDFuPdg2ypb5oNpWxy4EnTSU1oGZ7hh2YXE5Atyep4gSA3dCc1a",
  "key11": "5yQvYTjUy88CVdg7k9d2HePeV3YDkVJxHDfkHsCC4QCpZWiB2N7VqM53Ho9L7k4dZdBCzUYBfti8N4CmR2wZHqje",
  "key12": "47AnRz6BK9CudmKaG6rXcSBKvMqQysuQsAUojarpNHpEebnYH7ieEc3NLwbeqiXBcLLuFpK7TXRrPXPHtd3LLYZ5",
  "key13": "5U8t4AwaQPrQcjQTSha4wkysMuhMLQ7W1nQwjktC6WrFYF3ShjR81Et5sJfKbgxPo85sW7MqGSaYx64uLekikees",
  "key14": "34gjtPiMXv2WRt81iD8bGHJ2p4t9hwLaaF6r7n8iuk1kS2SYkNuLyiE4p2vJgYCkunSJyL7AzxLQtsoj2zfuUswc",
  "key15": "3sehUtamPRfrN6QGbmA2j2DE9WM1LwLgXTEFCzK69omaEqyuoibdM9hW7H4UyvGmkUNEDDzyvF958RGYUqkHJ4u9",
  "key16": "41sGEuMvR2fPVTMbfNLnLHNxtovNEJntfoiGJSbVr9pi8c4E3Vb9GB5mWovK92VMDxMuWm8EijcUPThCMQNu2jfY",
  "key17": "4ohoUNXWyWDoVif1eZK7fLcwpaMGeALvDS5ud28wB2y2Qztgn337pMmTbWEFfVYXdhk9LwLFMZfuMbcCn1wieBbn",
  "key18": "xT46MHMMDPBqxzxmkco67K3W5jVujhPbhacqwHtxHmuV1npr8eyDb1gWVaa6PNy1QsLbM42NQjmugLEQ5NJ7DEG",
  "key19": "4xyvUHcwp3YtPkB5vAryA5JDR34Zod3puvb4ckvYGpcDvkts9Uu2ViCiDVybTbZWKQM8vDrYrG5pawTRWYZZgfMx",
  "key20": "4Y8LYf9rZ3UE587KeRh6Jxem5c9hAviH4bFdi6PAJ71iEchtum5BLucZJY4TQj5pN9jGHjuLmNpmAfbgP2faoQuP",
  "key21": "2xwkK65oZgup5hupF5UfE85SdNKzNaddw4NNUSXEGeG6jLzkUFd7ouTfxsTTNxwUP89VJGp3z2Lhr3Qk11ELTHXn",
  "key22": "2SZEvZTuXtUz68WJanawBK4ZefkuUHp7MNpj4w55BJ6tA5ZS9hg5LMykKCuQzTdSHhCEvFzGXtw2avgVf9BRaQyX",
  "key23": "4Q2mJyPbajZdqLLT8hcodtctfsTyuDutvqH4QJgNCPvYF2F5ACQm6S4ds3mqk2XAddvgv5XTgWv1LbL7V6kFKn1Y",
  "key24": "3QkMWN7akWHPMpWYJVK2BMPgsP78Htmq9aPndxdzpuHpGBWyvbuetoRmK7sY3icndA3M5XnY9CHTTFfFfnK58nS5",
  "key25": "3sZeAk122p3aG97feNJiGZXJDHSRkZGUsMnjjrDrGYkyexeHa19ELRQCMPu5wkJnEz17cfmHgj9nL8Zdfb6kDdTe",
  "key26": "5qMSgseaNTdoqpoceD2mHkR1vMuXGA4kZAQ9f1rGmWBYDck2wfULsULsPX1rVYK7grcUGVqbK2cLn9U2Dm7oufpR",
  "key27": "qSBh1ELo9aPcmGqE75gBviDuRH6QDDVCrCq9QhrdMuEgTTYHAY4zXcxzEozjpTyxZzVyqsjESU5Akyyng4HgSqF",
  "key28": "2njmigpq4jkvZGJju8VTGJwkRi9SfDbUCAHFtkrkmWNcVfhQSMGX3K2yFADh7To8Ls4JPjXnjYTqcK93KGA7thCd"
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
