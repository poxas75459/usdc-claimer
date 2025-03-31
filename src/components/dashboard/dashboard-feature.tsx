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
    "2oSykHbLUR1hQz7QP2zzsBWxySG8FZKNfVFTTvq59dbhaq9vAR23x8GTgbjwNuZLFHcyyHoDDBqVsvn9H6xducyh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GLohzWvYyGhENybNLnQe31o5wCHYqTL6Sr9mcNhQLYNsKxonbX9iVo6gRkN5E9CqcrXum5iUToum8QUnnbUMeUz",
  "key1": "3Ri3CHtfm8fZ5HLWBU4jRSiXVoaGRBrEHFvsp3PVUX3r8YtZjq9YJd9Kt2VAqwGcwiW7iZKSW1X49hegyLwdUxci",
  "key2": "bwkLckP2WiHiCqbcUCKnv1QrivDUv2Dckj2Q91FSNrUBfbr1FFnyQcYhmLK2FJSVKC2aWbHCJwcvnACYG9DSDyH",
  "key3": "3hBJGEJ1qVGMWqquW2KLHFhSDBLt36XxKB332dH7FeF3nj64QffrC4x264mSy2GaTjJaqMyuWjG2LUYH7J6qJxy1",
  "key4": "3wCc8zCd5vY3eeKrHtLCpykrX2PoXyo7KHqT7iMjapai4px1xqcx7Kmm2RYhoA8sX22iReGEZf8iCiuyAckemRwN",
  "key5": "2GQdZbqkb45pyTFA624QxXFeYJiHNu6Zkeefv6TfgGA4NPqVvxi7A7cPe1xbpys5NGCmKiK4oKyPDfYFvq2JNnCF",
  "key6": "mpvAHkuWNUocLnJhvFmAmfo2U86xfkC28v22r3wU23Avh1QHG7ZA5Pm9ZbE4cN8WipHh73hzgBNdaEsTzQcm2GR",
  "key7": "2sxUy5rT9Rn2CY7CuWgFpmty3UKzfrhkqcTf7rUxaLH3m8MbfjqhwvHtqwFJrBccuTpYqoL98UPgXmdS7GpLAhND",
  "key8": "4aNFmtoziaqNPNKrYkawMTKceJc8pXu8GZEyo9h1AQYZQZnosj34kXifzpPKtgvC3pVDkFfUWtyd8hrTBh1GxbaA",
  "key9": "5vLrC9JPCXdrUVJdQkcStEVE1ujmZVygCydziK3jRJ1XUdpodVU7YSV2H2CVtF11DtVQ8VEG8gqh6qk3tDp64bxu",
  "key10": "3cfQcBeKaChJg1bRUT1VZk8JBEapBDP2PShRwR2ubhVzMHBGsywiW5kj6pEwdWR2ZLuMqwRPhRrw3JGPFhBSKtjg",
  "key11": "27v4cNK6yKGuTdPsfMiMZ2qVeP2tYxGTAP8ff7u3bxQz4cN6babDRaKNouUfd4svqT9vcKQqrnkzoeo8aoY82xQa",
  "key12": "jnqxCQYBcEuThst2esWZu9BagyY8yaRxmxkfMueGDxMhvYpYgA3zUM61xJRo4P8byQtE12tdYJsZf7pEutz3GKs",
  "key13": "37zBv7JrdGJjpNm2LHFb7hp9bk8DP9Dxb1A7zR8XDiPw6z9WEZ9ZBYrkCP5hyHNMiso3W4Hgu8t6TKGCo21QFuWe",
  "key14": "5m6KtqxhyvPhH1awVtZMd1HPuUUEMUWgxzQWZCYVwq8eApELPzPYKGwVXvRNYFQFAvex88rHkZ1QVdec6xjsFymY",
  "key15": "29CarHVzABU3zafWCzpjw4J1Yo28VqQwU2MTNeQLkzbedXzJFpgZrqkqmdrEc2cHWtRsqPHkaB9RZ9P5LNyMbTce",
  "key16": "4gYJ4zqboMrp7f7Kpty55akfzxh14ZYaD8q7aWvLvL27CxtAJ9spAXcn8wHZZxck7sW5N732HwGqufGfpbiAzw7c",
  "key17": "4u47XMLdVQ5frqae8awSeyCb7NhWfMMFdwHUcr52pJTMDLRyMC8SQggY74HnX9aAyKG32enUX9fcc28dXiqhhWuh",
  "key18": "4kMWL9P1mLh6CDPQ5ipBKhuUpF2QDxKTbDBBQiuyJ6DvXPBmtQPZhs7nzSBpc94rFb71Z7u1xvoMrjpW9q8f3HW1",
  "key19": "58on5BjrTbL1uttmrbvpxvrAvJgJmALWCgd6XJAqh2VoPU1eZzCrBV2YxCms9xeRKKWysYvipzsNnuFwrx1fFo5w",
  "key20": "2uothFZthyYn5Xiuuco5hpmWCM8QiPNcTe3Z6JWhBof7BAbw4ZHEuNPGZKSx6MbFkc7voKSs8b82cKcJmF29YQ83",
  "key21": "5u5DrCHmps6T7rkoqFSXpmKosffArhMVoo5pVgwmPgm6FYNfsiwGYhNg5qRyLBbqBDjZdB7Q2kVVfChXjmnS5m6j",
  "key22": "3pEg4maabBXAcLMfy8pLyweZu66cghrk41BcmnRPPC1t3LxwKe1bWwVkEuesSJ4RtRrQPhdk8a1NoTaUL4Q4KaAa",
  "key23": "4UX3qMY4PPToQtembaPGhd9yzPLdNxyoszmoWmv2ZLUXcxcFwT3roRBXdczBqADXTNqUMmDkuEHRfFAHn4TDvNT1",
  "key24": "HDEXwEoFqRWZcALtqCHfF9tMrpcB5w37Q41ppyXaEJ1n1t3DKXWEVd85JvKcLsDYi91RFgmrTrpRs4EMpJpZA5K",
  "key25": "3L7eaT9gRrbHm5Zsu1tvJF5XaxJnfBYtoZ7pmcvuuHb8sJyiptChhVq6gUoxVndK3gSSXPacFajoGWNpCoHBrwfr",
  "key26": "5DszBh5VPobWtvZf1wC1FcUDajZtCDZcnufYSCxJPPX3Awu8BPkhaEaPFcWjM4YQm1seG59ePHXnUKQapwYZkFje",
  "key27": "iGvrZ5CxA3E8K3CRGKvLg2vjU7Qn3dBKdNgX6jUhmq257c5L4mLL6s8KvWNEQ24ckxh1wU46aA3ZFFbJjTWqiH1",
  "key28": "4HtWLbpeU4s8BjcUYQFvmo9mQtXk3ftwAVchZ1thsb6bDzN4ULu9YLUgR87b3xammm6iM9m19XaZLiB8GdS9Zqam",
  "key29": "2kADoywv6VGgVAesDba4sdSJwoq38uBDGNrZKcn3oi9f5kwqZCa1e57d8dXkwsp7E7EfB4CsuwPTeSzJ1rWxhaah",
  "key30": "33LNcqmTj47mfRp7nZzmtZi8EVttx9NBCvSxGzbaFi2v8BoygLRLgEF95pi6ap97qSj7qkEejRnoawCjPv7CNuf3",
  "key31": "61Ss9fNPe2FtRc5ZXYtMZVRWqVJfSDcjnkrzQkXVzpE4CYBDg5FsB4ZBi1znbhyPtDnCJB4ETv6DzQBgUL3Wr7Zm",
  "key32": "4bhZQTySHfh4SsjYumjDeajbfTpe254nMHNXZr8WS9x6R4tS9SaScF1kXqHkMxb4ZdgB8oTySBDLEr6Hraf8reRr"
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
