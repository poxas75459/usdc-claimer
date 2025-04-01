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
    "4sKGFyYZZzqURBBWjoadqC74CKuA7TbmPvyrFpxJokxFbErvwjq1Qt2EcrMGwjmsyEWRmRMrCCAAkSaM2Mwuoa46"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8G4BzHFTVCKUoBa73tZHPQBLjLWQeaNQURko59ygj2JbHzx4sgyGKtYNz9GxU1ZJNdLqQKMKs39yF7sNZToa1go",
  "key1": "3xkVWGb4j2kU2ZxKFXr1upoivirdchjEwfpdip7q9p5WZNbmg3R2xFgLWSN9AL6XuGDDRjEGSRBEmDM3kTAWxA5R",
  "key2": "3kkHSJ1ojHGJfNYm2Y38xBKJJUPZokDD5kdXEP6mkcPxhPZ7rNffqeRTYweocmDbaYjpSD3AdhmmirCRFkFAYmy7",
  "key3": "5hA3gi4wXYtaPi433CmmwCnZxcbgEkuiqmN8oE4T8DHqtnhkGtsBoSsBuvGeAWShpjx6YrYJQoh8XykP8ek3ZyvQ",
  "key4": "FM4o1v6PPprvgLs8DukcMVJP86XXhxFYEHCUZgdPhQQqxq6wPamY8ktUAkywUs11iLhnVTYR6zBeY7UZY2U6wBX",
  "key5": "2GcZGH2okFHYgRu8fuiNajjyPj2UBjn2KZc7yxoc9RGa2aQTqeVHWsum2ZxTtqBchL9oeTjfzZwjcbcBMb3kKPbS",
  "key6": "3ecqmgRCh1qUMzNYMs4Z8S5s5WK6JExDSCoaQEsszUPkwYhQp8rr4PpWS5p4tqeSz5Vq5yN4Y7wEXcW9KZop1oEm",
  "key7": "4U8JBDBztgMiJFULLvRuc5AaZ9rfr5QMc3b7g4utW7XL9e5BQvXSXDXQyQhmoNpGnTLYakopD9ckoiQN9pgg3TRC",
  "key8": "2Y6w2ZVMZnDwxtJYKUSGnbnNZgLBLBnWmb8wG9bc8HugtycrhYragzPWkk8ZA1s9cDVYR4iX3oH8nv9NS6FjJAZE",
  "key9": "5Mrry7HR3VqUqrPGsvZKjmUeXZ9vKeczFieqDtDqAPHF4WP8aXXhMCFiLFeCHhiS99aQ7ztMkFtJE44W3K7WWUoF",
  "key10": "azbREmGB77pBig3FUGXqwVLubZbAiubieaxrxB9DEecT4EK2fTz8bXVhyDcNtAgcE6xqfziLKGqnRTJmCRz6UiB",
  "key11": "4wW6eyvokw83fL6LaGuLxTjVZpP7rFMp4K4fjmGLqXwzTboek649wqRfqxsHQktHskeYi6Rpj2p8k6c729qjScd7",
  "key12": "5y13SucLL4WkZqgSHUhTkRggRJKtcvBKNDXKEm6HbfCLdJ1xQZLbryCrtsUtA5HsCoY36geZvUQvtRUJ1KhNfz9A",
  "key13": "jxUJ6hsJ2NKu96AXtaZb4ofJQknVHe5kobGVMae9vh5qX8Nc3AX6Goqo8M1MiNQ8uQ5PCf79GPQYiE7Nkx1oz7j",
  "key14": "3MEpfFMLrQ8iAmwZHTy6MhJiGbDoc2GoptJTcpX9516s5jPiSSALgjS9PbqX8AcvpFbYeGfgcGSLoLA3b9j3PRYL",
  "key15": "4YCcMJ6eSsiDwHAB7pvCbcYmuHAP3GyGUDhknKq2waN66nqbBAE7FKw5Dx99xT72Auk5wXPgDLUqZv59WcY2y2uQ",
  "key16": "3eoSv19NVFQpJiPGL2V67ECR4rbGagU48XrhhVYyERvaoMieUR7qJzVcRX5u9gRTSvhJSi95PZfUPcuLdKJc4gK3",
  "key17": "3DN9AFiUmEgC2DxfFLqrUDXJdxs3NKjVmGeMmnHtzPCfB47Qv1u7EPACsbDYDieYdcSJt2dRTfiuQ1FJK7w4CNS",
  "key18": "2Pfqh2mZr4Stw7uWzJwbTkpMgwyATKgzxzJUEWPPmzNmSqCyZJBkbJhcczuTVdxHTKy2czSAomXep3NijbqHmP3v",
  "key19": "2WeeUBwgmXrTkXzjSTFCpXUjhAqXRGJJQmW2U2nxWnaAMGRxELmMKjBvpeZ5y2H1AR6PsZvSV5LWWRrhCspdyEYD",
  "key20": "5gWuH818BEFkNwqaN2BPgMXbkWkQ6n7P1XefvNFVYWMv3pvNk4SPyG77a2pD9UbmsAQKwGvmEF4avxZXUCpusXkH",
  "key21": "cTsHieM1A5BH4CfrR7TY1GZFdpiJLQbMoDD6QkG5AbUYzyvwnNk7ztWvgWE5Ruw6nozeRhhUegoseAXynf3AMgU",
  "key22": "2Z2NKVWcqSKPkSeDC5amf4jjHNGgE4nWRyB4X5sUbc7fNdNYss8Lsk5bRj3NDwZCxJrfrSzwRCQPhR7n8RR6rQN6",
  "key23": "35ySqsbD4JniW27zJLWDauGfbRJ8rxbdBpsz4YL1BpLFMASxuZRmEmPohB2BVNUZciBwt2dGXkKh9EycuNgZ439o",
  "key24": "6Bq3MZidxUCCLUgw67LZRmg9BtDRs9tj8d2pSiRsFnCCWvogu7gohGndaPRKB5UtiNF3d71xX3FYBEiMxB7zeFW",
  "key25": "21Wa5yrXEFnUaPstjhumZq2rFxtvTHNriqQkd51zyD4Ak1bKRZF23JfXec2NSBCCfvNwL5sKphxphGb9ZvjHAMVj",
  "key26": "3Dq6C25NwCS6Pv4x5rFtX9Us73bieBY1Xm6cTWRe67VTKPrW5sf7zFpGRrX9i3QbzefD5JKy5jtT4rtntkQ8Qywi",
  "key27": "3CfPtf3Nv7mcQADmfpGXLz5Zqz7mU4vDAxqbRBfpKGmp3kkXrHsAwJJF91jXvZCZQZYKRNxSTWv1NXuAzzYTw7ps",
  "key28": "5bjwJ3KFxxF8PML6xiAURzmPCm3oztqaGLfWCwPQc46DXyhyomEZBXnUmL5vdShJyyfkaVvrHJaHUDy4BkWgoepU",
  "key29": "2MLdEy8La8ZAHSQTkRdgK1vij99CXn8BV65YAW2y7wDZRFcTkPEioPsydBzwyPMygYXpsXMboYFkeRwNuxPWV1BV",
  "key30": "2jHczwrfjyk1PQ1PzXQs36GrpS254igAayhgHavDf3goC2yxoSeZeNVxB3Gw56rMZfM3TELoDfEapaw1o6jM1yUF",
  "key31": "2cse4eGDsgevs7fvF5hzzM2s4K8MPSdtfKDN84MyLVEU9HQz7CedVyctEMBvYBUxGLGSYbTPgiiNuyjx41rBGtrh",
  "key32": "4Zkt8MPSgwJrSfGC27TadRe3CDmUPjUvGM1gELkvLy4gkPPZ6GVtuQQpwzrsbAQnsTFZV8DWL7C3QhbKFq4B2dLZ",
  "key33": "PgRg3GXFdVpZmxFcDswVnkDofXrT9UW8DqUTG2QpieFWBiLscByG48GUUeFQrbpe8i4okSUSccjWjeVpfHujvoY",
  "key34": "3jDGy8pc4GpAUu1Pn4NNEzWN8ye2hcqbdihH6aGybtYtjfrtXjaD92wRKc2AYtdokCTxb3mfYGvSKVvWaHRaqTiD",
  "key35": "5W2j1s3BUYbfec93K324k63fsZS9Z638P1SWrmrpJBb8Q754m5MCUjcp2o2MvhNezdLCHqNE4Szz9eNqPK2iSX7W",
  "key36": "ovLcDkP5C5sU9hKucFyPXaKEPJxfCXV4Gm4yxb8L9r6p5vSB5BvHzumEYBCXK7THqGVGpyvYshw2QGdN3dACwhz"
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
