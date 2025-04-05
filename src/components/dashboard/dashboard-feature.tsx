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
    "2EZ5LFK7DFP984Txq1WvZhDKYpAXG187kbfnyZF9fGSmj6BSGH3y6gHNMKXzWwzpQt8cwh1BP5eEZKgjij31dqq7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VUPySQBs6EwdeTyowErPsGWgxdt59AMx74U7EwkqPNC8hea6ah6vFMo8s1xpRoU7mLwLsSEUvVrsuNS4RJXU2vH",
  "key1": "29AQcYSVqopx2Egkvyuu6nC25bUgw9up4VHjo3j8YWbZoRB8c4U6w51VuC8ujPF4JQvtJiYdLypXgAYJwmVDtAvf",
  "key2": "3hwSR7E9yiVAXkuwTdP44xFTh1zBvr9GHGnbLBUzckPuv5JYJZJYcP7a3t23i7oFeDRGTAZ8keJKGNYRAiPqztNM",
  "key3": "4qMADt7ghpbAyLc3rMdpHy7PnZKzaZR2JjoC76atSZVcirK9vUYQkxJosubLaJJ5fgXqL3GdZY7e2uGk7g4tGrD5",
  "key4": "AoRhc2KKv4goXwhHkCwLBscS4ESEbetcwd8WrPywe59c6z4GD8ox6Xh2M5mxMa85TayWSHeeVaitnqchNKiuX4z",
  "key5": "3yJhFbfrNX25R6mNnKsgyMuACJ6EVQjBNUVqQCc9uuD7zsMfReMtfS15hCVL3pW5rXXsXKRaR1bGZnaCSP3ijWYD",
  "key6": "3QpXGu7YXXMNyip7ibEWN3LogQRY5GpNWojWZkM7mCb6pxciA7dEeCuxYUUbVwhQVQt1uNSGu1SGMzp1v5APXvC8",
  "key7": "3fVVwySHWVfSR4tTEKiQqksFRJS5wLjiBDsMArMNT17owdY4GxijMKHDQWgVppKNe98X3okrSpcZtiKwNqe4oKnA",
  "key8": "3eeBbGV4EsfSZXyREfohaWqRbKQxfZH9nUXGTn5JB7VDzxVaVXrjMitmjEAeEvJSFPuZVwHiD1Bh81HHmmgVfrA6",
  "key9": "44HTWC2Wg44kxAT7RUQwueAR7aLE6gKNnyK3CUthfrDodcqRPitb1y2k3CTkAkj5wuGWBpUwqDs6zr8ZMtwVyGED",
  "key10": "4ub3JvvZCsDijnWaDhWNM8ZZaw4dQuHYYLo5DcAE9rE7UiUFSnPa6Y4JeQXxq9fvhTaCyXTW8vuugH9gTsEG6AgC",
  "key11": "4TrFSTcBFjm2gDxWJx8VWrgVY9iEfQJZoqn5fqj5rvKFbT28W31Zs3eDocufFE6yqX5sYzTD3c1pgvcsdYKxtHHe",
  "key12": "NBAm9j7QppbqVgbWV8eF67J21JQgjMStuuM3gtsmbdzZSZbxksZrYAnqsCGSjSs2C9rUq3Nm8RRdyASPSWhBf9r",
  "key13": "5tqMLhpysKgRhogeJMfc3eGKZ9yVDH4ZZrhgmM4tWSucx78koL6oxVUPmb5JGgYKcc9MYKCGF3yaYSuyQ7YG88GK",
  "key14": "2BWv8DSgXQeRVKQG58q6PV82Yx5yBU9HtLCW4gcRpiiXboNVK1XCK94a41oL3HykvEiqbYQK3ve9EAcTk8KiucAw",
  "key15": "53fSBG84JNVcF5Qv9qYmdLh9h7PNZ4k98ZG5fkr9Lzc6k3MnhkUe2Wox2T5yBY5uepcL9XWU3KCVCxQTudswL8i8",
  "key16": "4kv2qXnhTtW7Uw2HtdLX7TLDAmmKiRGb7M8BXDjjb3e2XTKYyRotPBZuXURYWSvRks17KSwZRt1SthEVWXsw8yzL",
  "key17": "2JMaTxVgnrQBxjAEtB5nk2LwRZx7mq3cjpjqbrqZBnReYjWhPWAkPDrVL7W8pQgTHL4BrkFcGshf5W9DMS2o985W",
  "key18": "28xEDK7yksxE6j8DsBRymLgZf3k1aNZHn4TWMmnJ6EzFswhukMN7WTr1UjiTmN6GREXz2ZzcpspoNqGzJ9dqX9Yg",
  "key19": "5utr14jA9HfLyeXKuFFbUTR6xc5AaJBFGAyEsejvRmUCMxCHzWDBXcUAscgXDuUFcWsXgL8rpcWMWfAmWcERMcEr",
  "key20": "2R7dDmVY6E4QrqATM4kEXiKXiacPMmJdcfjZxMNytJqiWEcNDYiKSN7qsnT4ok9PMhqmJ2JSw7csRMXEBTFR61n8",
  "key21": "2JvcgNym9TyLFvfV8PKmq14YYNpYvUsX94eo3wT3Uw6EHswa3qMrE7CmBJH9wgFRKX4MkNRf1tTzPLbVWwg62PBe",
  "key22": "52Mkz2Uqvytf2Aez6Jo98Gz9ZYgsFPDnh7y1aQoR97ccVfG88o43PCXCRmgy98RMDDzCFjXCfztT7CqZhNDVJQdn",
  "key23": "4wgNQqFtYo8ig8YuNEcmVNib5xczEvNDfHzcW21oqjNiAhq4p9Hd6F5jzto74pBaQgifPF3VCo1o78tPR7xfSqG1",
  "key24": "2RPebo89L4aX4wkbEr4avPJvvr4sj4Wtzm7qRhumNzYjKsJRbXjPgC9EmuiTn2RX2PUHDmtzYLsyLYJdPofLCevX",
  "key25": "QEyqPpdt5aeYDMehJU7UbzRJdoyNid1VpVS4RqBgKTAosqHGCL4xJw35VbFk42nUhqqCEqMne9tqabi1vxUrATB",
  "key26": "3DnsX3UdiFmVQEoNNW4pVeGbD58zFGNrV3XMZCbz5RsJnTDMJeZxE9VkzgAbB62QxHK46DbGNNbtyN8e8ETjaFTM",
  "key27": "2v1iSaFsekDpnbeCDBpCWadxMAQGF7gcrJHiQmWwB5NDf7WGvmEk7UJZWt1QcUe56BSRS7CSs9X6DBckoeBg3BoS",
  "key28": "YcbGbdumubGEQNVuXo7cttpyi5U31zHtYCM9fT6cshCNJsbJ2esYQ4fknXBnJrLAyiqnGjuLCLSx8gFqfJ8QaUY",
  "key29": "55FdjxMLm9ZiqHzT48QWnhkYr18PPvbNMPN4GbziLk1GEoWJNuiSyfQynKrELcKY1F2UZ5puDm7cpZxpEX7DmPMa",
  "key30": "35MGV3tjUZeEhCTJukpm3v9Dkex6SPm3eyYUstnDByZ6JwyCpkzU4xvcRrMgz2iBSkYgQ4DXuoANDUQAh55q3pLh",
  "key31": "4rLHgsvU3FAJAYR6qy4hPQgAtUebkdaZerC6mBHKhcAhXNKNpXaXWQRc4AN8JrzziYxXkKjQwxeZq5iyTZfXGRwS",
  "key32": "4mjizJdhWcYBNLt1MG8r1Jem8A8B6TzBCUKQ6Tmd1uzJViYbePTompnALFWhJaYakcSnf9yhJekyhtEeaHfKEYm3",
  "key33": "2rMRRoqaB28KZNcd4kUBNb8XoVXsKQwRv2NayfJaYA1JAgfaSejFRd4RuEKNHGASQwVWF5eEETMfD3ZqjvGJW5yE",
  "key34": "48P3AxUV2i7DqNCYNrW6TCW37mMqj7wZZT3Wov2Pu7go1fioLWFQGmgVxUpGzViZxHoQ5E4XRZHTw1svY6Pqw4c1",
  "key35": "3zK6VEPCPZUav6MY8ndSERApnvZ4k9zGpcm73t67PwkT9GBe1qeYJoV1y6i9yz7E5Th4NJ9ykKmBd2jiTwQcQqXS"
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
