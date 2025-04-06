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
    "2EE9fvzhS2qfkGAGCkUEoYkyWXVFdyRd2WAqCyNXnjaJ9oB53et9YhNs1VwoL48DyWQWHyR7vBu3PTA3JNF5Z9Lx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L8MdWt7CZRHacaq5E8teTxb76syiFJHd2VSFbZhgcMByCoRZDqbFuSnonbrT6ZgN5P8BTRT7tZcp9MFKmnuBhb6",
  "key1": "4fWAswspzj8fN5B9tVQ3FR5dmbDBA17ZsqHKUnJ7UwKxxD7noKVxMqk687c4rzwPViFc7SiFg3YDS5MfwxLVyGUK",
  "key2": "5ZEA3ruowkbdNPE1nS2aWt42wTgAMWgLRVjJDSjqVurNCxZR8EmhxbjnP6KzW2efG9AJDwtRZTh9s2usNaK3essW",
  "key3": "3wvnrW7uoktUie9uuxTFZAYGDB3evZTw5zZAgUcR6VDfnJRY74uUgn8t6Berz5pGRx44xoSYk3tHAjhWEpBoziCv",
  "key4": "58tcMUFbPd75k9nC8y6WEm3JD587xoF6tvbAqn7bGWmHtxyViZviXGgGZJQoEBCxGCy2xTJAJJ17nV8JoB7jMf9b",
  "key5": "3m7w8qNVguBCdVNfXTBqzyNYssr8GHSHERiPZBJ4yFcYXUywZNfHqCNfGYAq8rsP6brg88RMZoTQEf6ZAq6YXvCx",
  "key6": "2gVeEh9g4oJKnzMxsc4XMsDHCztECLcXVCjsxQhGMqEJyy49a9eY8z9svmUga3RPXfcFDsiik1sHiNc3jHFtV5u5",
  "key7": "2ZuMxw8BQZJQyd1QvdVJN7sSFaJT8k5xjW1NYa47SYzFPFpAtjCRzbMxAFp5EXx3ZF5UPUoi5D9JRnXityhZXg6f",
  "key8": "24NjE8WxFtU2zhQXyTgrmsn48kF6GoF6v4B3xayFYP9X1TR89zQLSCf1Q64hy6xX9mHpiSLQqFcVLEwJN9bPBr4Y",
  "key9": "2odcvQbxJiPAKC52zH5cRrv7FSobGPVemr7ehpxjbh2K4XzdCL1aHVgsMmmfyCB1FrsL2z7x7hoFUXdXYWTTAP2a",
  "key10": "51ztvQfhz2P2WWZV4U7je7y3HbQA1xCYBAyjQWpRw2asyGWZTRGVc1JVEvDmAt6wKrLxG7FELkCQKrBLpf1PJH9f",
  "key11": "4jCs4DHRoPkC1jm35VuPYiUPw6sW59jTsdb95FzzCPj7oNGLW8gBjfw4XciE3y4b1q335gTAJPDuibrnpDqNjMr6",
  "key12": "3bN6eL9fcYLwrUh82Pg3YQuiPYtf1PYkU5n3cME7NP9fTYQU6aL6gbkC9dVRG4ecaktT31DASrS7hyXxiFEZnwZQ",
  "key13": "C6q5z1W8CkD49SjD8a6t3x4tnZGJ7KPZNoXP7GvaJWL9so8TDJW9GMWEasQaapq47xpJaS6Qo5np46ZZBMPAvdj",
  "key14": "5F3NEqafPDSF9FKhp2BVH61aorZf6FBfu6yGreZyphRi3WNEJYaUfbqkuxpr2juA8W7gRR4CbNYdPjUFSYe74NjG",
  "key15": "5Yd8HaqRpSk7KF21tURciqfd2ssPHLQku47PcuayFnBFzGp9LADtwbnfY84WvUfWghUgmmw7H6VZiCKXozqipJmY",
  "key16": "4oMg9CasQxay75B798VC5KQuceukoN7BLdJFDbsyQ9NkZ3ubFHSkXbgEMqxPEvd43pGCfwHmA9QEoGhqMqDBuA1g",
  "key17": "3UmKMrjJqwv4DtuwVMYyuFcbZHpLKXAEvGNCacp3YF4mtcHharKkBLkPPkTxrqift8t3Wi7Fwusne2EhjgHBnZjb",
  "key18": "2PZhtrEWpoqUFt6GE5vxDQmbFQcYPjQwsSp3PF9ABUhxP7QyyaZ8Bk5x6PgqwEQwZpWbKig8era41fmZgLm2ZPKu",
  "key19": "3LMHRi8jp272kwA8tc6zm42igPNFmgDVAnam9JFDa58hZAjPTQC2WH5ncz6pxYcjeqDk6d2SzM8DM8jvHqjagZMZ",
  "key20": "2fw1AExcyaqzZEGZshfn4uVqevPE3Mjux6aswFbZPf3n6R9frLAJgk5iuiQ1ULJ6pMvSQefMy2m83nkMzQexyKBh",
  "key21": "5qZzFDSaGcDSyTGZhj6EEBGFqLau5Ku69gRkmDssRyzB9nNLGtWsmZNnmEZJdcNt7N63RAqquacgsvuf5BRxjeGL",
  "key22": "4KH435oqQuZAUpGK71oBuyzxLNxFqpEh4HGWAX9PXomZF4YAdhvYbu9RUmtBxMz46v3D3oLfG6htgTEZUcZ1kC55",
  "key23": "5bz5Q1MA6ZrmMFkemJwAykVkqAfyvScp6J4kje4Xv6U296ai2rB1Uj8Xo6P8Ly552coWkywKTmXiLGoPw6Gpfrz5",
  "key24": "Jqhwxx1JNBnricxJA4qTYBmVurSYiUoBsYdc2mZppv3LWxAUciiuRRYHf2qZsxkwBHuDsRZKaV4BnuN1fwPLbsT",
  "key25": "3VW9SZXx6wTU53Af9wyLpxcHtEqHTuRZbomotvgYEjKLCvbrhbHYQKn2xZCLMk73WciZNRT5azeafdEP56vnsmoX",
  "key26": "34CV1g65jd3mBnLwQZ6Rq1YJ6ifFUjYueAGMF9s4yKbNc8Hu3jJmAz5qhcEMHuA5jADFNxGa2NpjDxsbvptakWkz",
  "key27": "e6MY9QGiCjy9FHujmjVbebyz37qkZjTq4553HFiMUSxwSzJNu59ba9fq1TLArCZH1XmhDqa7mXWUCU7uyuvxZqL",
  "key28": "5BF28rQra5RJxppyjJ7SdyMNWhvQJMHSdnPFmb7tAgqcBtaQwB9AofWHeL4xunns3fVdGQTaYKDocFjWn5jcQHU8",
  "key29": "3fdcidKRDMu1PTEVMHDniV9Sn4AVVdBythdjw6HQRNrqGZrGASmet5hzuuRFYQvrzXXZX7uk8fD9PpvjnELo1H8p",
  "key30": "ejkWbo3g48w5S4mbetjvL2P1kNwALsE2XWSHY196KdKaCeXP7maTLwg8XrPG7MgcFPs8urhYtWExNVicJ6sA2Vq"
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
