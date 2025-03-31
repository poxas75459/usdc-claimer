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
    "2d1UoULhCDrG1kt3PgHDMJPi7CKNeoJkr5PQp6gYeYrHTSFzgwenqwSMaQ8EPPBZYB7qJUa7E5nXVzvYCoz3enMF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "brjDHkMZLwnQtfgkdrWPWfPFiGCvgQz99ueErpF7kkfo9wR4UJFjb4kWfWsVB9pgAqQvNTPALu8SND8cJD5bVec",
  "key1": "5Dwiwv87znMjEuMhUBYJr5NptgL6Q3Q78Di5Wo2NCaoMFLv3wKKfwGP51EbYzL86Ja6q8Hd2t1HCmBXL6Sr2tgVP",
  "key2": "3jZRgxoDEsTqdJgnmGeGDMPXB5RRpD1uPTXGT2KT5jnG5jvivRuMCbj4HtRkJVR4XqELoxejMfginbNH3NdioiB2",
  "key3": "4MTtEEJ4kyGtYuLAVNVsLDYMQcWtqiuuaMqGXQ1oim1BFHNkigfaGjZo8xJPCFL1LJgboSmrWSPYNbvWcWSJydoJ",
  "key4": "52w27BB1hrXGQ1Y79k75itgdVkhpUBbvq4CmcFFcB9FghDvwn2bneJkzgTSvWbz23hharAYJjqYagVQqwfZZkJE1",
  "key5": "563ZxroVUvoW3fBo9CPwmN1FTsfKU1TXGLxUBS7Z63vq8L2bC4ugSq8uk6dSSgFbfkYqRb4xMnrSzCGQubsaMHAu",
  "key6": "2V1Eff9xgWRqjSKgMmsJcLaLDrMwui1mhcqenM8o4NSmSf5ZUBowob4tR34TH6JFf4DdjBGdfrUyQKVEAhB3B5L8",
  "key7": "4MMUmRNpgYHCmTQ2vnYkzkxSYPj3JVRb6wHUAHyKKG3vLpkPNEnFsqiSw71cQzRCMD6XaRUeaZgKgUc9H3nKgGmB",
  "key8": "2u1mw9qcQtaRvc166i4AHibGFnyLkKiiGT5CFfmCg9qQiLm9Hy9zuYMaWxWsNAirDa84tAvYoE79y3YtdLrBrDz5",
  "key9": "3sZmVfdAxePfK2aChdeXFGvrXdkTx5XDZVQHcdQSpbogVWMzt43haGHZ7yggTAsz7p1mvTREtXaJ1QPVNkJmYFUQ",
  "key10": "4PzdGg185HP89sRs4F883k9drprfXmca2c9dY6eRq5nzaqnarTmjdt8oNTJcD11i4tfGjCDQ4HR2bzbBgFDEw8ku",
  "key11": "2HC2yfGA4pfRtBN2mnmVef59szfL6yvC4573TRuBZG4EwK1hSA5JTTnwoQYVv9eexxfDWAyeQmroSMyu4SpyiJDa",
  "key12": "2B99PgWqbYtUngKqpWTaJcka7vTsL2n8LQvYEn74xiP4ioHq11kqy8Y58zRqkAR6pqGRsJsX65LU1Sup1AKLpArH",
  "key13": "5zB4erxgpTxCVLsgz7NAGT1xNS2hFKq9TjWtsPHoNEhPMawuVNE9TWA1LxVo6K8wGJExY7H3degG1ZwRgzviGKQh",
  "key14": "2D45CXa5tDX4v7Dx3JaD5mzkA2RapK3uA7imGGvqAuyCoES89s6bSM8kVRr4ziWhTjF5snWdkSzfTtFSRXm7t9Mf",
  "key15": "58R6E3AvNEDNLNMqB22z2gZY3T3ZSQM3iJEwtKzTNHnrYUEhaBZPbb89w22yniZVYZFYTQStrosm88GVXvgm6RHT",
  "key16": "2VYDHbBMMNScB85GiKhxsjYiAE7SzyHJkZUXoCBSqctTsCqTQWJGuXMkCXeXHE9BTyNDwJyFM8Jf8Z3hsvfDg2j7",
  "key17": "8RYGLfkxXzwS9AnAVq9FJGCGoJnxnDimLronkDXCQRAbLLqNoVGGAs5iQMx7MLa2VhCbdTtvWuiizkYEeVNBEme",
  "key18": "4unmp4YFXkuZjXE7GfSCwfVXEUaKhZjGg3nqNvU4Wg9YJjVHnqy1xgRDRFKsxLBhbbw16gBYmCCaLwwBrykSrwA8",
  "key19": "daW3K8fnfWzoaq2o5dYsxiwCyEQrFE2WiQJfxhivBxnEemQKpCa7zCuTTytuy1vz6FowQW4xkViiPf6jozwETHc",
  "key20": "5ig7y1qnReUHrjEdj42QwMyKKYcjkRkYjaDd7ytbHzvhaFm8UMwrqn2XtWehpHTpAAyYH619k1CNSDYHesWyqXkf",
  "key21": "5Ru7iHJJVhGhkmNxxjGoqASugGGfF8wjw8SgXpwugWtZz4UeTACZamN4wXt8Hwp5qs1QgTm3cEUZynp1ksKFsh7K",
  "key22": "2yikRKd9tziZNA6TYN95KK28nhZXNqbuVrTwwfU3Ftvy8FnvtzLo92LEfuE5aa2U4qegPAPQ4XUyxebsWDoUyVNe",
  "key23": "5kC5Wv82z8qNqaBVJbwSXwys5cSFzvkL9zc7qVujedGanmwKJb28FutSJ9PfqT2xdRUMXFGxAqgKzD2QdqNm9yAm",
  "key24": "5gPm3EZ97d4D12sKaDD1yFJNCyJRGKsbb5AxrP17AVDPVAS6KFyUUG4XxUdkNAKPF9UT29tjuPv2niZ69WhqbAEx",
  "key25": "44JA9tSmSbo6jYiibuz9XKcNa9RMHcd2KjjzWjC1Xo7K7Stm973eZJ9pd5gjHdMEKrUqih9mhTgqjaoSpYQDBMEF",
  "key26": "3iPwvDL4PsaxvJpwQu3WMtD6U4dhcFPdFuWty2JxQ5LaN2Y3ACQrN2Zi4i5XD3gJBP47D46NaHGPhN4t3pk84dHJ",
  "key27": "2DBypCeTvsM7ar3WGMLVWohccNqQuJLVkEUVz8XBFs1DDh5PusGpaQM8VBNaKivJRPF4CjEjisaVadb85TP8JKGj",
  "key28": "HnNCUn8xtB2KasekJP5hSF3yoTosM8mgzGDSoPqZKxtMzrB8bvdrTPKkdSjrNM1noczWNAmPryp6G9NxgxMzWS1",
  "key29": "nT5wFSDQGq8DiA1t2J1TfmTpE8mryEVany21LhhNMmgjtntqyhW5YQkdKRag76RnUXcNtonTrmHdDis2LC817kG",
  "key30": "2KaSjsK1qpjvoMdQqLBAwadKvZ2ipLCAWcBzWNA5Q9qgCPEQgDB7kUcaL5JnQhb7VutKyED8SmxqVbLY3MsCUNWn",
  "key31": "4zPWqcfJpev23Amqnrh5c7BffLz7eb4Fuwfq7kkJT17ZxFP9CV167bDf3ynRopQ7U3QchR1VDraRjDvB6FSanSyh",
  "key32": "Z3FrG8bGExKY7Bd8bvVq8Q3fqYS8B1A3pPB2C6QkdCSXd62biG8PBTVZnqzMDXCYd3ynetWPDWnbhNGS3chFQQJ",
  "key33": "6582cM1SemhTtdfFxjo8QQ2jz3Gy4h9wTuhZS8VH1rTLTM7GbMMYC6ECqAzUKXHNWVBnmMHXkMsvoJ6CpQ1gSryv",
  "key34": "4XJ6GbSu5oaURDcLGUtKiMs7XF7Gdp1tNMABix56z5PJizpoJu4VBmyJUvj86tMv3H92ocQCJJYHQQxqH7EQWwjJ",
  "key35": "2RJubf8x1tr86VPGHxv6yps4wbWUagwfB3Gq2Mw9j8XDub7Vne8Ycb4KESJT71T2iL24zT4A7zZkwXj8u2yDEKxD",
  "key36": "4TmPzFgxGVMZ3CyADLYRsFTfAx5LeNYg94Wt5QNf8EFYayyNCgFRbL5ZchWwSw2wtj1yfEZzqxDzEuCjWqk9gVPq",
  "key37": "aKBgAepf3n4rGYKV33piDBdZYuBpHz7P27QRyQxr6r3EPjf6qRRk1NbsS2PqaMfqxeN7LVxQ5yBuP8SKJ7ttRti",
  "key38": "5YUtbCKkaDWKu3fiALP2bXNLhvfdiwi9wCLbNEQz8gHouJYdMFUFqq7kU471x1FoVrzrXdPur14gJoJAZ68Rn16m",
  "key39": "4VSNoA2tnPrTpXsQvCoeYMnqv7WugqCzv3WZaG9MpdkFXRn3EjQVM9HgJ6sqWiWHCkE2kkPxF3op1uNwT5H51ttE",
  "key40": "6tHueWYFzPHd1GgWmvrapxvKC2NkhR7Je5B6AGz7ie4fF5NoyjTUkcrtYHtjXx2jhbryY2VDjaxv2ZBgq8BQwhS",
  "key41": "FnfowbDW8dxGrCJn8eiABkcZvY2LhLkuAFcdx2yS1BEo62jUButHRWzdSvhUAV4s4SqEEnkadzUFMBe1QEUvc3a",
  "key42": "4bzV7brqrvdAvoPbYLJ2YQj6knLHV3rw9ADPKMV75kyuTEtTdGwaT7WJKuouCCPeNGxYGhXneLzmdZFg2q2zuejw"
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
