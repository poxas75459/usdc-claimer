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
    "xwDLMjRL8ThhfBdzj3dVhcADnA5nfBp6XQjiW7niGmJYEASfWradXRYLq3AeBiH86cRu3QztvFPjNP9gtg3a4CN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zyywjoGgHMqLd9L5wFDPrbTJFDS3L3rFaUzwjJxxMNEsrT4v25So2FL6mGcmbD8523MbeY2D5H7v5U4BJ9sLWoJ",
  "key1": "3MkrPy7iroKqbJUQBJgFQHuRDpayiqrDxrRDvKPRpjBpUr96aYAk3wGJj5ekNpDgWuRW2J3B3u3AhT2ZUVFVUNn2",
  "key2": "5tSJez8iWV7BjHZ2KcAkPgQZbEkKu6exSHAAfa8CCKtdBPL5eySwdPKiU1WRFPUdM5wjS6HVVsW9jdQB4KNesNsR",
  "key3": "4eXeJ8YkMvuYWMojDL2penQ6hnEyL99MHEpawqkc5EBNWa44cZ5zWiCau5we18jArgPtVX3vx3eSNupyuPfDkx6e",
  "key4": "4cy4akTwJayowgtpRE58TB14DjWqMS8z5oy2ijy5xgEUKG6eSuBr4uZCy9kmox3EzbfZ7fVzbwhLuLySUfvGkJkb",
  "key5": "4ndHwq7xJ69zCRADeaTKmc3BtjXn2MKJJH83nhbXFHeWiX8wKrW7xcmXJgdgt5qHHEjEX1P4ruu93ovKJaFkSEJB",
  "key6": "61o64wKSqkAJzRoU99QGRt6B6gKMeuWoRSiQDAjARRPcpU5QW1s5ECwKwdaTHhXpB8KAV1qBMb1EyboLqiTAoSKT",
  "key7": "29s4D6duja8kzZPVouzTS1oYwXcVCz5y9FaYGyxAM1cydeTShWfMwxxnzyGHyquphMTVkhwdLDiHcp9rrTMhzyFh",
  "key8": "4oTc7ef9kenxsVcQroUbh4SzoWt3xkUmodpwEyeAcGzUJ3JMktBSmBRagCLzZHUCMXKdtV2euJbi4zGQFpc2qjKA",
  "key9": "5mSGMb4HS5wrzibyoZ8ZWtXXXDKqZRqBKK6jMEo6fPWsSMmBnuqWBtnG5oJ9dqpALPaAjwCvkTMycmod1hXYYF9L",
  "key10": "58Vx1hs27yijz8VrCMcQ9RF3dGqaxxL8WNYjzRbYuaUyZQbmXqpAvGBdVYM4EiJz3kcoLTFrjynKD9TZPQmNrHyo",
  "key11": "3z7nPypyaNx3PUxdD7oHC98B4VLbAHmWxpqRJhWsoVFVkPfEymRJdJfCWv7LQWgv6zBcTK9Q7gA3bNtCRYXixzEk",
  "key12": "45GFSB15Jss83prYXZs96R3sNgEQmscVPyrWei8ANwMyFz6CJusvWW3H4GdtGqN8uYDzer9tcwA5SChzEHNGhsT",
  "key13": "2xtF3Xxk5WMxFKbYWZgxri5hviK2d1f5mXLjyjdwbsp2iDFMEjUjJJdMLnSLfdtVYF8Uh3ThiqsrfZik1Xj7QuR4",
  "key14": "5EcaWfPCzy7HnDirjmQAmCA98eeXHb5riCaNaL3iD7H9CYRD1nsGZDgBRQ3rQD8Rsh8JMNMKAzibvRDK2e6i6mKv",
  "key15": "3DpbyqB1xrsnZGw1WkPBN4rRU9GgBzhh72MfkgBu9okSuXGXouq94QUqiBPz3PkSxq9ZoKKdBLZYuKs1m9jzofK5",
  "key16": "5XLFfJPzy5TtTPbUmxMT4v9HK2cJa1omBMXF649GVN9pES4DF4LMikUThLx3uzMTLuS8Ln8kUAZw5y7a4yRHJJP3",
  "key17": "4N9GqQkjyUmx4MeYeU34SDL6ZhXdqb48ewB6tLCxcmwEjbApbMxuxLoJMWVEuSmhVssurGK8zFeQtcUizpMjRFsM",
  "key18": "5Xo4C4jFyiQMyodk44MuGGpSU9cjwurdxfvwMCHirJJyLJsd2PBHa2gr4LJ3iDqUzJesHCx25MPRsjkY8UYTqE67",
  "key19": "5Ghq9WPi3fDZXw3f65C17hACejfQHsVkNatZH1E3fLagdCa8i8hyBwbYUZ2a2QhCQspUvcMNfWZtKkWjBtQzXfvb",
  "key20": "5R7TttvYTU6NthcAe19SnZYfqpUfAihY2BABF7t2RKFnukQAinrThu6ho8NF5d9RN6AeM4WvRVpwqxcyJ5d4R2yw",
  "key21": "52H4GBiQeh7Ar6mqjYhDuHuF43drikdJ9Q6ZA8nzE353zg1aPRyUBJmbfh2kdEpe3pgnTToJVNf6k7KyFVjh1Pn5",
  "key22": "5HX74eV3Y7vNbcLjDpxrLH4TunMUHkUiH7L9p9sjTAjF6vCjLJXN8azAB2nK11QTVkmKwKheMppTnJfUNKbQPcsP",
  "key23": "5oyWzCmMYc6hKmLptR6Txt5zvtyPLLzsPua7Tea66yx8AySm3dymqBq3wpL3LS1armg6QfB9etLRVRQXbKiNgfQn",
  "key24": "24TsMBs4haZ5AHW7Lcr1rW6NcCMt95aoWLVABfH9Kt11GwZoz1f4tBreV7yqj4d8DKezosuenA1JUSjwyWXgwy4j",
  "key25": "3qnc97Rcu1gmwJbXs7ZD2KxP2RUvCzUHqiAxdw2aZ8y18vMb5qtbnAEBZGfXfvkWzMWzRD7qZK9F92p5z6aS8DW1"
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
