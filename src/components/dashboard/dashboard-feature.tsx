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
    "3qNKZH31TWcW5ZuiZzTpWgdSm72rox2hbYnbQBvKEgL4TvFT6Ao2ecCBCniTkbHEXovYoNCwu61n7NVH1mk5jQgn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EMdmR3Twd7RuGegXeZ5iErKEmhHfHqpy8PsFvyy3rieSiyw8uZjDYgwzFJVwCKQMDMer3mxZJ2e2yqA9eA7czBo",
  "key1": "65rN6uh66uitDqq4xNfD7toosfi2MyJX29P96zUJbCkrZPdPnxf3XLFbHj2HVodfARjX3bsWjmHEmvrkx1qgut1M",
  "key2": "3aAf6b2kgW6n73Reo2WSTVQu2wLAgapShn1sTeGEhC68Lb1CWvMuiryRMEn2VJ5bMzRtbwo47AX23qggSCMXVWPD",
  "key3": "5R4MtTUpzGa7nZh1E4bBshnRmoJJU4uxBBVsXqqLXG4jvgT1pRTn48UFXGDc6jgmqLGjc6Xx58m4gWauGG9LM6Tr",
  "key4": "4d9Ye9XCViwdSFLsg1HDj7LEuZbVjK2aGjF4BAgYh5CsKFrq5rrybUX198hVpFniSroCaRRCpFj7QGN9hyTUjgmk",
  "key5": "2pdZwy87PWWFb9mRK5HBv1tGwGtRJ6S1bHgDmW1G8XjhrvHDpKsBJvBpm67y2MgWNKzKNGVVpCatLinsijkL6DYw",
  "key6": "5uRUky2CaFqqQpdxRB7hfuzzu4Xx3ykWRmxrBE8sS1eFeXAcKEmXE9PGx2kRraAmAgSJyRfVbQWoCso155KVxNXP",
  "key7": "3TCouhSZfpafPh92n99sSbFH3BxbHx6awTyt8hLFU9Lf3J3FecPYWhr6xdFMUjX4ifM8ybNQh1AVwt9Y7KcJUGfa",
  "key8": "3sGniyxppB7d4ojyWUA64ibmoSMAsC3hLncBN63pXGNxfyqtghAyNu8Xf7Dq7QiPirCjXXkhoRGWKLD4xRRirR46",
  "key9": "23Ga3BMWemmMp9uAKhxErGf62nEazhxQniz3L2JxSM7WceLvGKfmZXFGyw6e3d8dzvSTxRYDHV1YqUmV3t3nGUED",
  "key10": "5ZB8vikoNN8k1GqwxbZKyLWAZqMp2j2F2g3GY9uL9vYZcTizanyLRPj6WspXEmkNyeEF4V81DwjHumQrNDEyS7kz",
  "key11": "2JLrtF1qZp7TAWRw2ff6tLURgkeXiEMEuJEf9nkdW7Y4XU6nAq8s4PBnJW3z5RmbbB8FNy3r5dkCJ3F1HYehUpEN",
  "key12": "2ojuhksj75Z9Sx4SzutKCwpy1QXNA2oJTsZfruQMiSPYn7fL937twwd2N6Av4EASJScWueSQexxAnW54ih468am8",
  "key13": "5E5e1o9cU6gDU25RzcYXz6QYWNZz8D9jsGFJo5fCpaSNx8UkBowRYkUNWxQtRzAc5HafxCxK3Jz6Yr7mJKRax9us",
  "key14": "5jpexYt3i17n6Affy2imUeuzeCCzNK8kPPYKdUBK5Y6dotibh7DMXNUfkHnj8g7F6RC9nyzVZzSoc3HFviz2PP81",
  "key15": "2n4U79ig3JjMBMP8qQq3eLgANF3ZnuFRhPJoLR9fVjMs79FUdaLKevRJgCsMZFpR1BCo73Ew8WgZv5RYxu6NDALt",
  "key16": "3X6kPcTejfjcyyvR2Msn9U1rX99iX1eJnJQce18GFXymqZPAv8RM4KPYv9mqHJwkC6pSkCCANFT5aNVnTRRJQTr5",
  "key17": "yFHnirkK87B8quYh5eN3Rqwo9FNL1r3PowVhcbCp5ceihZJDB2TQHkqgC47JM9k6JFNnXmcrzzVvDauA6w5f98S",
  "key18": "JLowwJuK8RTs6YQzhDNBh4jf5tZSkABMsWsDponQBAnMMW7LyNis1xsRkWsQAGz5YKpDqiSeisrUWMHweVoknyQ",
  "key19": "d7Pa2G9kJu2bSLCo189q97LnhhQcXoWkPH7MhgNw7DcHfPsnyVChHXvQfuMg9Wt3iLfLNyVEFtHnJvQgcrYtz9a",
  "key20": "24Zd4HiUcnWWcGz7D54pVkv6Khk9F4kwnF5ASKEzE1HKDST7JXKHktrPm7TmuCmTeQTzjZogvkrKV9tSZw83ysdJ",
  "key21": "kd6hbVprDEwTBwyNDSeF7uNUCY6rBAU7ZmLm864Z1Vka71q7dYBJSTDaQXdg7x4zFs4bFwCcYsbhcU2MnqJDeTr",
  "key22": "3GFfZG5mW5b1Rsr5KUSMxcHy1dP8QPkCGwozQEnd6fjRe9qG34djAG45769YbJVEB54V4kL9Uo9A3nhA1y9bAnXt",
  "key23": "2cQbfRf4mYxnPoKHezQBy6WCoWurTqux7dqLmfGSe5UcFLyS7snukg1xE5xgmz6yUxXsdWWMfdcZ7rsy4hcnWbH2",
  "key24": "L4hFHsc12sQGRe14zqxXd2Jrh2QiWb3J9fWsWe91hBwAX4hC5yeqNDiR2dRsH3dDvaRwW9ZzxB2W5StrWr5qQMb",
  "key25": "MVsB6nK31XnP2JgLQLpd5hJL4sYnLa2zSamfp3CAivAwXGemNmcofiGBCwoFcbqMyJWg61dLyNJXVoqeXkQrrc6",
  "key26": "4vhn1c8jBz1G8Fu4aWpGCQmnoFoScypctmPMqEgxDph2ECwmAqHmYceDXC26uKWubUie6j3ppYnELFgADyD6MZNT",
  "key27": "4EEDyPsQNohVfwTn3o7jwLmZD4NSB1pAMj3RbcMAPLCqJ6YdEeZpQEbx9Jn15nUYAyQCBXuU9wR1FERAn9CzxVpH",
  "key28": "3mpSoNkAP4HbdRbcCk4DVn3RvY65aDDfUYTbnNMbGKCyctDMAKP5mUz7mPDkNMwtG21Wo8gUUTgJzm8gxmZofutH"
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
