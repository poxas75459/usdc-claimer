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
    "3rfwkSsCYMLQkpVa1Eraqj9pkxdKdWk4rEY8YzP6UGNL2HFvZLvuz5jfTfxF7mVWHmQGUvwbQsMiRk7iMqpnYFdZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vkPJ2R7C9qxjRmiW7cLm1LTR6pwKJEr5fwGvULoZug2zg9awRfWpE59vvb2RRHKdnnGRRT4z5BBV8YTCwBgD3sL",
  "key1": "4z9qcRG1gGqq2xcorw7LYc15i31HhhbQNuaod9yS95j6LMi8xko5ocqR1BLmXg3UB2PRWJxdcSPmsGZKo23HXZmF",
  "key2": "5aLt7MEoCmddD1EVRfTzmLnUYfvoxUppk2Te8wABRaXj3Z7TugC8squAfwssNhPTkWpzC62mncvTqN89bezTVobK",
  "key3": "5yhpFNaYC81qAufkGvcPmnPR3sQEGLoaduy4CKDYxhpijPYVFeT4WcyVuWU8oAUnvRhbbvsR5ocAZiEL2xbEtyqM",
  "key4": "4vqqWKbFeAc8jzmSwDdzpsd4JmRMYSQoCSdszWQNDftnnSGaneAH9o4M29sCw8ii8kRB5UmaSTqRJAEneEo4oJLc",
  "key5": "RwwAdhzee5ApeuYMiYiMXKErcL69QBS6afNC8XZc8xxHT8vhdWMN9t8DrsjED3odCRbxSA561xH8YuqRepGpKu9",
  "key6": "41HTyTKkgeG3Zk2U2RU4RSVphVspVKAMmDe99s9dYQUVxpEz5fnGef3dtA6E4eJLetcHPajg4KUUxKQPqfPyyzx7",
  "key7": "5FFC3DwDhPaz1KvFkLTSM3bpwA6e8uHfM3Eqq3KRvwX8iBqQ6BqfXiqb4Ajt8B6dKWspGzmgtiG7zSms3d1gRaSZ",
  "key8": "2MysQZeH3TMyxmrnucWkKTrF18rQbuVNUBZFx7o23if1NZg9Ld3MMkJa8vCRkJUDewJH42zia7Ef2yHmC3snATVZ",
  "key9": "3m6F8z2AiCK3pyGbFwtu2MAicrNHWbh3LDxchVeYciLueqsxHr4W3EESoeawUei4Hssi9T2ZJ7vFDwafdwr55udj",
  "key10": "5NgBy4FGXu4aQuzR74RUgaMHH8iMczut2Kb1NPr7GCX8dQxkrvgFMVt429ShvXb9ZHht76ikqJmUNgknCVHTJiuV",
  "key11": "ZJ1pJfjJAXTbGFtt46rTzzqxuHcunTbH7hWYsCTPueuWM2MMTiDgnBoyaaPaS3KpLzpasiej89DGYmZwdkykbg8",
  "key12": "h31SEscfzmTeG6rwTF8cMHhwmRxzooxge6uGzyVRSZDP5Jkz212go1QDmpMNeUhPforroP7gxSvYkUmKP6TGmh4",
  "key13": "341vR16AG5cdUSbVQhB3ibo9pfdjy8CPewfqng8p5hG2oyW4Wg97Awh7DFQawZwxNzxANtQhAXFDuZuaL8TWMjqq",
  "key14": "3jJAjLrYSMeTurfRLU36qA5Gw9YXYko79AeCj43CjbaYpXN665JsuL9HDFuAU6JbUdNdQJwa6ny6MUjsr7fMkf87",
  "key15": "AtMuu2kmqhS6HMioJAHDkqoY9BCrdyuqWC8tY45q8YnTHHiFrigXMbcpBFfM2rTXiexsiYTCbujNMcHQdnt8pgo",
  "key16": "h18qUXbRNsHQMmf5aPUSKcGQ3Dz5YxvGshQQnbvRqbySdynsReYE8WJ1cppfUVzXFJrbmhgJRnGrKd1i61ueyWJ",
  "key17": "c4BtkqQVZD5eXvKdPSTiNQQTiCb5oMgzWvfa2vzkP4Qwdk8P5yDRWe1TYLccJy5Yh147KaSFCXiDH7icLApi8V7",
  "key18": "3kuRt7icqeCyAE24krHC5ZSd2eEJDDgWuPkk496dnoZ7FA1K6EKRJFHd57ekPv7xydU8QekDe6iAs6VopJisKm7o",
  "key19": "2dmaKsdA2R5FzvtVAYZ2HSbbFREKSUHNaE9r5GFzTWsZwxoHAGMsk6Vwx5vLwNQEhmdAyRVcYSd1wQQoF2ZYJV9v",
  "key20": "3RR7AnskaQoWhWrBnFoW1yjJ2KJMdwio2dugdSDpLrojf4SNSy8CXqyXH61NpxRkuL7KFNCUUzjPqK6Pd21iCjPw",
  "key21": "mA7prtH2K6LjTent2qf5mLGiDCWGQ6kKafH5Rstmi8h2weRNWQQjTSuSenye87sd7JdTKCdWAm42jcESsFQ96jy",
  "key22": "2K37SGe28d6sBC4pPUbDq1JygPWcJtuxUPf4vA9LdoJQUiG5DKeYo5mk8PK6PxzgFDif9FduiqoC8uWccfrcXFKo",
  "key23": "4Bea4VQ14FeViWQ4qeBH11yUQ4rF3SnaDCAa27D6GiaXvMD93rNV7huRwxASmbg4EunUrGBCN7PggSP7b8vTTgdt",
  "key24": "5C7Dmw6iTndP3LNN9XG2DQvhL8gA2X9Pcg2755BPauSWubtZrLUQUqFn6YmSY3rYut2W4QXzMw3hgHRRDsjwu9fx",
  "key25": "2V2gunDAg1XePtCE4Qcr7Wn8uWDKjkVt9gnYr9Zpb9m9m3CLPN8j4criMFXd8KUSC8LNvBLEQVz9bbP1vdk9NitZ",
  "key26": "5DBTRYQxS3uQE3PPXMsjutgbaXegVrFhWcgsBh8YsgZRhhVpEekD9kXxoRhtriyynn6czcWBmJtscGAytWewVuXB",
  "key27": "5XPFLvJzwZcP1RK28Ynn4xoasnAfqk8HwDU8ySC3arKkmbakd57U6gGxQ7guFqnpmC7V51iS77CnmHsEfSgw1U61",
  "key28": "4ikU4yFLG7LSfkoGjF9Gq9y7fsSPSoenhzeFe6NjFveRJFUMgmbCZLsbEpvTnnuwFKjHt76rL31tc6bK9GbdPwbk",
  "key29": "bE1B1w9Yg7gnmBPijFK9WpC7UuzBxSrzSdptgvUXbtK6RnbRZ8ZjZRSdGhg47McZyoccGVvrYKLgKEoPH6gAQFn",
  "key30": "5VkwAynxGvLFu6Uca9SU8sdSkbHrHfLYhsZca2pTfpvQc8yr462gzDGx3t6ckTJ5afdYPBB1WJi1RnsxD17cfNHK"
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
