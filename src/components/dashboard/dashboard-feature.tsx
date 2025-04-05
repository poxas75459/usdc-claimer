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
    "2TwzpnaH6eAv719JKof4YExS9Eox8vCuAzwFiMQTk2f3UEZVioKyW7cGCkcCXxMNRZR4mCSCLgwTL4mwgAeaFq6c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AhYHsMjfguLhi5CWUVCj5DfEKoPHPUGM4CefLyZBGosw8WxyfGmmKjhfrzSHtZTQzzDCqQmiCQauc4USUL7mDSy",
  "key1": "5S74NuxxU5BXufNwCAi9pk15cVn5BL8T3qPB78KxhqtoaC8NuEvmmrRULTbQfsC3Jt3c57hDwSfSTs4b9VpY6Hjv",
  "key2": "5DtcPCJeNMbDiXYyGUfqGrrfXGDiActYca1pcbsRPJYV54BzSvD4h2FZxvduUV1yGdhj3U73Fz3EdC9bj5q5EDb",
  "key3": "2uNZJvLx5qyYvMffA5P15hLtrY63tBkNHhewCea8VrMciU3TyQf52QQYfdy4vqCcsDNi3vTJ4kWY4mg6A12EK4BN",
  "key4": "3SUjfQEhg5B6jZot18ngJkyfNWkH2iV8WtcLeErAiXVvRnj26RotNdvLbQpQ3bGLTnVT3Kqfo2ELD6ji5n4ktfv8",
  "key5": "4dkgfmLBfHQ3WNvq92P3zXoqTjZZi3zSYk4heBFK8UdgxcNsZfwTinwyYeAyywV8Einiyy6Jsp3SjxkWoJfcWimD",
  "key6": "4SXRqGAaWcZ1U3jSBKBY3tHB6LY1GGZNs57YD1QqJceYhV519DQpJaXjmBajy7fLJEybdZEixBxeWUpmFtMPwrmL",
  "key7": "xtH4nhU6uPHR2q7HxYbFx1KCtpo7nMw227ZHqXXi3bRJLCCN9ihVyBW1SGCKUuSV86dcdSTDeHCEF1oy5zKR9vN",
  "key8": "4pLLSCiQPa19bYmjtjzTp65SZcEoj6bS75Y6ACVTudR1Ltov7B9oFufG35Z3wTxPzb8u8jqU8M5dNVJuBE9VFS9D",
  "key9": "59QHRvyK4mrQ9zFZqbif5Gwse94ysLXfnrHQHoZmdrBRNiBYwGVuaCFyJvzMogkWGiXRbkSM1116NaUMugwRaDw6",
  "key10": "58yAmvTR5JwwaVH6qGVWYq3pbb3hZ4midVsTN3gqYrAVuLyFRtzvJnwtWKCsvJSZ2XNyHy8DzHFNwjB33o6gawei",
  "key11": "5iducUggorqaFbdRYQnQyh5FaZKo7LRfzmrVPHrxSqZ531bx9En2JHx6pquvPLDRoEornUWrCQjzMf5vziFoLSVz",
  "key12": "5oEYwJpN3dJZZx84zcKJfnALX2fKamZPjrfDthDTpLTcezYWmYLYscEEmyrB1c8onCgMJop7Rh6t1nvZtpMMXQva",
  "key13": "3WwxnCpt1bzV2AksbCRwRkZrk4FJahpEHnubE56bbvYq2R2EEnHs2bDrZtuHM5JBjb8CHZcEYp5sdmySJ1P4AzAp",
  "key14": "5uqAyDHg78cxCbMe553fhhf6MfRvRUMbJUggE9vF5pgwiq36LMfTjV5rNBjQhg8PiBmQi1mnCP63tB49UCEgCk1Q",
  "key15": "3g5rSLZ8UvtV13JA5M4HR7pNtaDUYDnMnSzHFiEHDC74HE1S87Ehrqty1jN5WZfEhG5bjhgE6D7ehwLadR8Gfz1e",
  "key16": "4TUhZUGk7R5XZYWp3qiQs5v3GMvfLDADNm9H1jC9ruu7k6XmyNk56TEFqtkKk9psRzKskTpKSrsnmd5jAvFgCVix",
  "key17": "3i2gtYkUeLeLc5j82iApMaHtWGdrddF8fYwQm614GdKdWHThKzW7GPcj4oq9rRc7HBbnZE35pvyK3d7tZqsxQME1",
  "key18": "2Hmp3j9bu4oJ5P8Qw5fhLcPYYqQuNuQ2yRqnwBvgLLmgh9PagxgxKLmRHYJwrStZCpUeYuRxrYunRQQfPgfpXt3V",
  "key19": "5D3EbATT7bWKPQ4dFa87J9FFN2TVQaX813kdyEMi1Jp3ikJW1SkPMzTCo543GdmUdW6zHjPv95aCnhTqqsVGSg4w",
  "key20": "2x82op4fuepTWVbkUmoTNN9zWSc3DfW6mcryy2vTECePgWDsvAd2GUDHRDFxKLNCJpnAowa8fwoHw8HfDSmLyM5V",
  "key21": "48b6f9SFQaAWuPGVSxe1VV6RcjoaYSuvH4FPRgY5ciUX9vWdR7yQ1KEFSVRZXyF1LHBsMUpxqDekw27zHqYaQvzA",
  "key22": "31dohWxZAJ9jAQd7DcFMWio2eAsGfMQzHgB5QogtwiD4HCezJBPK5P8desGuMj1SHAFsh18AzVUsCdXo1QPyK2ni",
  "key23": "eUsL7xaGHJo1H3n5W7bWLffg7CQpV1tJ4cemiW8aVArG6U6GWwUUqsNztri1G5wJ4cfe9bpWiKYmM6b1wRmxSee",
  "key24": "25U2Co2CSavvX6hktHUaRAwUf4j9XfrXyRRU6sj1qqv4QJmBq7ZCW97mSDxuhkgYvA2AKdq9ySP54GVL5xTFgBoj",
  "key25": "3FvAP6FiqBpjjSikMgfzacjxYvEKYwAo56Qtm5ri81A8HGrbL41XZkRTi6cJ1BWWir7Jzwc9Ne5aPdJHDxmBquCN",
  "key26": "4qZP8jCf3egmahWRw56GKCTGWY5VxGtVFk5KtRi5zgUDap8LHZB9JZXWmJLpe2w4gRjfiFPj6qTaRa7gHVqoJYSN",
  "key27": "5eiDiU9Apdf5S9Jdes6XaFvEuktyXNQu8CXLtvSPowq3r458kA3sFWssEesHtHsSh2x48BSemPBJY2XTK1GoMnpj",
  "key28": "4y6U3ZP2sT8pZ34s2dmb4AphpbjDZBrZUdVggx1Y2txgTx9H1D2dcoV8yjv6S8nB9UMhFEwpePby8SvnQQ8q9dMt",
  "key29": "5QziNHGJxF4x1H6NiU1EUdNiatUAqcCruoiTwaNo5vBasEHp6xvLqgeupK2hkKXNxbo9qgjK4MiPovkHsfbFdXMn",
  "key30": "v8dazThJaqy49Sy1UrurGDmdzaYLwnU4ePESBy3fSk3qB1AwoYU5zSXhv57XrB2jQuUrsFd1tfBTuefEYxWqjER",
  "key31": "3XDMsdabVYEaN8pRTNirwPuWKwu78JaogtJqpc2F7H5Zj2UWbRY83ECdGQXWDAkSS4PUPKtzuHpUYUKm8t4LzW8z"
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
