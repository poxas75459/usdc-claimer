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
    "2fDadZGxTnCWvN5UYhgFhgKEcZeonZq73Vx2WLDmzf1D7Sa2ixKd8E6QyXyRaRes6yMLnoTYJheGWB9hS8njs2wi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xYrcDZm38V8kFWKqJpSTWheDr8Vm5VbXWcvHDTxz4AZG9KcWzZbTgx1CJvGLGY5HqR4KKBvyjADtjDMa7C2QMSW",
  "key1": "3mKkn17Qkn3YDnUD7rupA5UDwtetLUKUY6MY9WfGY82Ki5fGt9T6hy4RRMKQcADbUZLYApsWKcyKGPDfGusQJx1t",
  "key2": "2uqLa76e1Uod9DVupVYnQ61EJm1Kv1PPWqwAeBKUsxn89BAbWGVAkgRjxbz36rYyW9rDsRKd1vsHS2ybwYmh4H2X",
  "key3": "4dMAxK8RVvinwAHY3GAUi6ZuLmxw5gxXdad5hnDzVyX8LmSCZBMmWYkDKT67639ehU6f1AJeXo1VhVir9weQCopH",
  "key4": "2diTtGYrCxMhDRmEDAvnEPiDnQadRMhEP2V5sxWraZxKHGeid7AbEdjdRidYoFtMf77AMBvbG8b2rdZpsgF47McF",
  "key5": "2TAGNVpQuFkSYoxpQ5TXNc4Her6ibBazqREfK3erLeZwhSDTn5VSyLhjFYAcArdKXQE2zqQUreCDC9heTt1nLaEK",
  "key6": "2ps9UtN4DwoyXtkxSGfcq7YKCFFCg74KFzv3yvFNVWEhMbmmCyYsudr33xmq8SyQEBfy3dJJa722roQkuW2nCRhi",
  "key7": "5HbFcpoj2WnsPBWAQVTfJqicmKD8zqW2S2FVYQFkRhHizCJa66r3Vvoco5XSxe7suCBrjWchNQCn9woqijCDb6q5",
  "key8": "3TDQoSpyPZV9g4FSemiYuHH9SeHe2ESMJNmE5tBDwcMU8w5cd7YWR9WHpNXsuuXvgAcBFEjg8Z98CspL7emovtrh",
  "key9": "4821ehKywcX1wLdv2zij5kC5QeMkoZ3eFkc21gossrMJNvCd7TzBgBgH5aBofngTyU1Snt7ngpZYEV3xthUQ3dkz",
  "key10": "5ZDzicbj4jzCXy6ArQvhsQGMxMhmv9teubT6LSBGvjA7zyZHwmRTrZh59zzZr5aiTfkPE7mWAv3ckS2arE8Uqr4s",
  "key11": "3DDdxmf8jZKZoRYXM48J8AoACQyZjSHWV2HZ7TV8rHhWCgkJK1Vd2ZYLdZmV4fqDc4veJzmY8e279GVNUoEg7eY4",
  "key12": "4kH44715UvgwfqLd7aVsRYHaihWm9r72yQpQCFnyFsvWK1Use4iLJ6vY99Lg5CjJLUUus3YkAWLsGzGYoxMuEMjT",
  "key13": "3oHaPnRrdVTYznQa7YFNpjHT1PgzoiBdtHCcxP5u7NArSoN2zh2xMxyhKbeUX5daAbSJ1TYcoboFUX1hWrV4pBby",
  "key14": "57fLAJyvasX9KfMQp1dSDdUnejk58UyRYdVttU9CwX4gXh5YFpibtJPD3Z3Hp3VHXL6xDeNnXVMXLUcXACaQ5aT7",
  "key15": "5nHKh7QtYA7aEtJvA8iFiEoPzJJKR1c6eyf8HTLCroaNruNSrLDVjqHbMVs26SXZkuMQoJC5FzypdyGAkAjSXV59",
  "key16": "28K7gC51LaoV3Uh6p7SRYtF9ccUVv5hyD6JT5gTHLkSDGPpsAVRsrVyo3zVPeeMyWgBfWYHayj7w8JUxUERkezZQ",
  "key17": "2UpfMs1AHCanKKkuG2Q9DXyLDM2sKeea43yb5eJaCnfqvwNFGE1oZpLbV7hL5CiVKNhqRZd7iubde6Ldwf45nsDf",
  "key18": "5eVCAHpMFHwhsokFFKmwef9g9F9qmft2N25QhgTM1duVznVmBLD21pvDuY3iPUoojawriexMBpQRSFzkevTaJfow",
  "key19": "38wdW4eYEKh2xj4dzRkYZuZanuAfS2jewawytkMic8LFrw6Sm456bVK3Q8yVeWqsnzPJMLogVrq3jwN7qjhrP2xB",
  "key20": "4yfCxEWwJenVEqC7KMTURARmNYgFKHd2gjzzqvkHhSyaVHswyYRqEM3LSfMrktrF3NgqYqp3B33cNFkBMorfc3Xx",
  "key21": "3HFsVcWtji5hAD4mA7dPSsrAmdKX6snyUGrxjHAK43wiLBNx5zfunVeXpKEnuvavNfAWCB6onu1FGF54mEb8Sp3r",
  "key22": "4CnYTSkGX3ns9D1V4HXR2VM3sx9qvU2bZPPo83SgSFAjavf8dbGxe1wk6UhaMwPjTjfcjvSWQKZZfJWwPdSvrLx8",
  "key23": "49phbpsDVpJaf9yMKAZM97UqQnbNcELrKP8Kj3n6bsXTRJWBA8oKQ3ZtFXXESCwKgcDGG4XdictfSqaEUgyus4Qi",
  "key24": "32YyWgZGV8iTdkTnoKERshXaVKe1bHakpmmAC6ojGUFCt33PUDgLnzEqk8GitgJdAQqd2hPb3ykBcn9jR9s8Wz5z",
  "key25": "31PY2soGUmfHpVoeYXWrWwZC7VeYFJjAj3kEZXUkxiRbb7epk8VT5ND2p5DyuLgfre9tdRFXLx3ufVS5A12aN7MR",
  "key26": "3UG7kt7YqmJsxSj9TjbRDKKwy7dijcuP229uFg6VyNTJTFm9QXvrpda5uDduUQ2DDMUHQFyKph6eyrKwunhJeovi",
  "key27": "2Gknum4cCkSBhbmd6JiCt8PTt8mhNrhJQbvbgJ5RgkeVvEBx5Xe3Gph4iixsKvT2Ab4akTtdebEYwKR6WmmeoXP9",
  "key28": "25EgHgdWWKSqLEUYJ5HRpDXsTmu1v1zBUrp8FDNFZVe5rp7X4DgVS1fkHGefBQsesvN4m5dpmnXKGsKyEns36kJA",
  "key29": "4N4E8zYmD4XJwKhcwyta9gJgyxnGmgfkDv2p3DmMoXWMDMyTFvLDTsf7JB86MYM8JnQPczz2EwqwajLp7udpyk8k",
  "key30": "4mZHQ1RoNcxmEZnZQYXkcDQzctQizu4mJH9NomjLDJXSG9VxScN5fXZzDrgM9LsxfkYRZu52XQJQLsJVfr2hzRb3",
  "key31": "5m7YBNvLfsB2jHvyerfVNkNNcWfVLC5S55tXeLk4BNPTsc594F6bhCTrMvRxa1HEgfNSNsRNzUEWkGACrUQFWL89",
  "key32": "2Q86Yu7m2UGgfTk1zCGpFe7UwsFyCEgM18mzWLSmXq1q7gM5Wxkc2wTGxCJ1usBq1KP8C27fAc7fSVqJdoRwHQdF",
  "key33": "EpfSpKtDdwDAaXRuCnFT41GU1xHLRczxjnLqVdSuXuTwoaiHcbJcKzZcGzZS748WF1tM1u6aCYgYK6jASfnETfT",
  "key34": "3vAT2x18hBHqni9chbJ4S3CYcTpq7u7mstpk1WHN2YGGknFejK6N3Yu65Gn3XJrXKXRheHEs23KvWCGco8AZUZ2s",
  "key35": "oNXNv2b6PU2rkiixumDAoo4LoBatsdQu3VQQKAtAVPwLNAxhQMur6Vk8cHCPTRHDSxM3KYJAzLQBCjVZZpNB2vb",
  "key36": "5Jt2TqbC8FQBMk5RSmrzzD2GRUwXV6NK9G7jyUkqggCFBZRk7rJbvySt6SZ7i3JE6pcj1YicXtnXUicoFBW13HGH",
  "key37": "3KAfrVW18FdJWGjmbRqgsjmh9YjGwTx9ybLsGqDEEUyu2Bz3AiNBi3iRtzomkGYoFoftcCVzzc9QesnzufBmzPPy",
  "key38": "4CVMRMXqsG4iQiqLNi8f5KYKeLLrgCLgd9LTFb8ERdrAiaScPBCkQp2XVizQsVYRGAXb8rrTgVLFwsb64cBpyQeR",
  "key39": "5jHQkfZATonuFfgMaZ1Xv4CLMiX6qeHdC7e4QGbHnJuky3yPPVWWNPhUyvPejfVXW1PcSnFTcYWTfqn1rijuZe7V"
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
