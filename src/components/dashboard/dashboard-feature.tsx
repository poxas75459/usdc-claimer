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
    "5kynxsASWRHax9R4FLmKZkn343UnagA8pSZaLPCS9rGPCfYBXmxrtZxbZhKyAyF4P3itcqrJ4qBnPazzyVb6JaTJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZzMNyE3PsDkspkxuHEwh7AqWc6AnpCAWvEvrYCidj4yjBKjSwQsedma3dXupDT4yWShx46TRLf2fE78pDVCeWo4",
  "key1": "43FzYYC4cVvwWKKFc2hFAiAnFyrZ3d6r2PbsrpTVqegEsryn1Q8LTVfrQ9ypn4muMgznzUrM9m8LoeJ7uvQEVKju",
  "key2": "5kdTGzxZXSb8C9G65PLPAsCkkdJ5HDJkfzLwezoyfJjd5hb8KdKLRtMoCHeKPTTjKsWqXAg9VAMmeDQJHpQWtF2U",
  "key3": "3JibKbwUGoWCcao4dWrxE1jrvbf9Bj9ysujkjiaP8UEmWbRDUiJpbxeRH7XW2BPwcVhqJaXCxcyoMxdtc72himfP",
  "key4": "56DUYFZ3AN6pyniUxEmNgF9htf4jPaFeWeGicWC5eddX6S1GoxvmXiazHzJhRj8NbmZbRarX8dhvJwV1jpeHz4tA",
  "key5": "5yTzancV6dVbuQqAZRDdXAM4WbknpgJDDbpxHznRQgJfyfyH92VkzfLof6u7Ln9cQm9wtJszTqgBZXpF9gZzZMjk",
  "key6": "E4u5JmSG4oQmBf25HjyCriJDQHFD8ixXzvA3JLYFxFdMcUd4mqYdr9FHNXf9bNZJiEc2i4w5ZUzsyhjuHLjz6k2",
  "key7": "3GxJqxo4mBQVkcW74fo83JXdS3fY8X7UUADum9uRdUUNXp1GdXYuT2uhWszZx6L6vWCGc3YUvgMoM8Loa5qy5xWy",
  "key8": "8eeH4wqNmkaZ23d949TXmJuLV6GBv6PAhLyc7nMKwZ9kZ6PgutZJKZMZ3FGuCkmcWAeEL22Wdjp6mZbCxiG1eJd",
  "key9": "66ZV3fr4auh4NXA78iMfxyujhTQfhosKtqUsgbFX1z77dyBVcd2YC86dzEa3NSx3cQEaZcguSwDPBan4Nv2LEskq",
  "key10": "4vwrvGbjaUhEbHmVvS285GUG591Wh4bynvZtFcXq5gYSTY9k6eiLJizvmWMNqnskYS6RXDxYEZu3R3ieWuUTT3XH",
  "key11": "3zedQQugoqn1f5RAjJS8zcFf8fGnsREAVMXVcyvYdvfJZpjRMFkFAYUtHpXBu7YbN8xQ4GYEXeRpLoyThirW686E",
  "key12": "tcpWe5SFPHz7iBwUf7u8s5KV4TtoACoTN83RYXRX4AyE6xB2LyTf67UgWgje6FaPx4fcuJe1jvdFA1wQwuW3VRc",
  "key13": "3xusGhBsku6ps4Yn4bYBTKsd2kHHfYdE8ZkqC2pwbdioZp4FyRCUxZkC139Yg5PmWSS55oHCiUXuVbZZzKwWeFAg",
  "key14": "3hNizEgqkj4VAeb9n9D3518afgokJHNtJKU1P3MiPfr4zY2vZ2uyFV192U4ZXTMdSiN2Jbm1eFRUhtCpy4iT5PX",
  "key15": "5Ts5WkjzqsSceMkkDHi8Tw9nvVNAYeiQQDUTiaZWq3hiJ7dJB3U71ZWCwK1EfNPiJPWn4w3NGg8Hmytg2guejSwy",
  "key16": "3PERt7VC42LCMwmSYuQD9kMN2RUcLJApaf3PTbgpLgKe7WTB78y7L7kPkWPkXg12Zb8fB85yYpKbqxYXfkpz3yZA",
  "key17": "2TF5djHsydyGFkvk4SQ9fRQ4wMzq5b1B6Ycb99U2Zgg7Rvo1Y4ch3UQ6S9vzSNcy5umgpanT3rrLchkZidTqbJST",
  "key18": "W8AEkA5cdA18XAz16GQEAD9MChz174NMC57gqiEY8WXxpYshfwq2Wk5ewK8BZvvDc6Wqdfu7HWx24i5RCTjKqA7",
  "key19": "2usy7tYc7VicvgVxEXttLaWRZ4qCyMAL1JTwgbYZ2vsgedJPqSnvnLUJi5pnHSKidjF9Yv8fA1QbbqSbAhyzSxan",
  "key20": "3BnQvVLbuGyLfeNxgkNKYY2KpYjkdPJ33Hvfr3MH83uC5kDCj8k1ZvgTumhvQS11g9dEHfj6kpqR9mKk8XNhyUZc",
  "key21": "2fQrRZtZWw5nnsjuiULiQrHXsBCDWYY9EU21vpNnCuhEo6YK3wTaBhF9ZPapnAQGfjdTcm3Z5b15PS3MNp8iStbK",
  "key22": "4fk1642dW5gLNUc8SoL9Xy4AdYnyaKfLoSHe2nF5j6jHgAwFc6hcAy43WK4XKN9GtfiCa9pMHcwEUT9vX4Tuf57G",
  "key23": "29vcPBhYUhXGV2RwpFn18BXEpemWEv65tuXpqYPpWERGjUvhLz3GczSBmjuPKGVPWw3dMoytnEMM1ExJgvjvAnsS",
  "key24": "3qJZFSsceMQtzXqYcFdiae6RZudSbcTbRjdiXnP3ujRVYfN8UveJUjzCKoBF1bqoFQiUUP19eZwQ3KSLAQrBu2EZ",
  "key25": "3WWNnpYfTXbWVarvsdYiSx7AZ2iuyTxfoXgqkQDgkko5zv8YdLmCW3kv25oZLrkWaHUxPNhh9c1dif4HA56b2sXf",
  "key26": "3SNMeYdtde8cbLBQXYoLckF7jkMF4nCFnoZTnQoyPCvuJMp6jFLYJBTqEpoGT7rYMWTrz6rapH4559GsXt5Ycw2c",
  "key27": "4iSs2DfdDMtXkoYMNCwQRQwXEmBEminRwD9rNTBHzD5PfbtS4k9syM8a5U7s51uC19KMkXLE7zA3ekACPcaMnLzZ",
  "key28": "3kGx1HZHJdvdpTJTYM7Kr19aE1gejPRtZ4EoBzr8ecaiz1r4ZVwwmUk1SJN9e2Jve7TaZAof394FLJyFMqJf5TiZ",
  "key29": "4WpUEhJsRmAjmPzJQtMeChkV6bj9qBF1Y2E6b5ajdfSV7C5d5aMc6pGrYTPJMsEcX1Z55KchVhXhawcg6LdBPGha",
  "key30": "5gYcBxj12VBQCmz7nsTVvdzjQp7uKeFpYq1FavYx5gcRytPJFEs48he57yYEo54932192jDeEKsWXbUGhbUcBKkz",
  "key31": "5tyRbgcM91SEV6VuhFPzgMurnuhig4Z5P1rB9KRgMSJKvUYDNDZmREcAv4CTvmZLBhjRLuVPcmYaSQjtBn67uWmN"
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
