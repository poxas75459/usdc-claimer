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
    "2fyh8akWLK2qm2REwtF5ZWkaPA9dcUx2TWSw5Li2dTX7A5dwf5bJUYkkMMj8FvCjhrNduap8CUd6rsUcZ5mV4vBr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CDfzpgpQE2KrrtfAdWMJQBQCD9BnWZiXxxUqLX5cySMZq9Ew3W8s9AG2LaMrZwod7rR1uKjtkQW2NTpwW5EVXqN",
  "key1": "2ueK83M7ffC2wxKw5PPr78Pc5T9EiJDzeB6iduehpJnnwgo9fikss6q64DCghhT2Xfx3aWFvvGSof2u5DTiwhDxj",
  "key2": "47ySwoqw2fZJ6i2UANnmQ89ZoqCTdP1GfFvZk1jnuqUFhiHZGyDL8rkK2dS2hdGyhjZxk1P3XPoFaDAJFfcpzmSw",
  "key3": "4ThNJdVHMt4VJenb8pRyNzKYRtZL1VM2MHVo5YrcUDTZCacR732mhsfEXKoiviJWeheQ9vZxYnprQsazvS21Y88F",
  "key4": "4c3ZqRsri9NykTmW79XKCDc8B1NGLyQH5S8N31bGNAsvbEjU5uDZ4GQMfFqr4fSdZudKWpWyNkJznFBBiZNJHZCw",
  "key5": "61BAtYaiZ6sLvqT1yQNgcJ6CKDSRZXdgc7sW4CmLvGdh9ZKEXsC746GmkcJtxgtKMx9tpYaHVq8vYc3VCC5bSUyR",
  "key6": "xYT5UvMyBjS4hMQtcQSHAjJctQw4EZBeJAvCkW43hXbXW6rE5j53TBuMCcV3NNEEp73qszJYiyTyji1HPJU7b84",
  "key7": "5ipEZmhPYZYqZC3kDbawoDprDHVwfuMAEEPHE94SXfR5GxezR7F3iCAkbNrkAdD6zc8Cw4KuHonzb9sMttqR93pV",
  "key8": "9r4xjYWTY46b2pmoRouvoxgTjWWCvGmgWGmeFRmUcJqxM1itBZKjaCuMMhaMu1xn5F24VLemkrkVfETw3nJbXkR",
  "key9": "vvDypq6hu8VbcEESBxjQYkp3mKjBG3htvRhAUSttW24hr26DfTtWZx6rgW6YA8Byht55Ay4Usbj7Fqhn6cZMeur",
  "key10": "3cy6mopTjCfXtu9PUoMk26YiDL9vZaRDK7Zp4pRePrUoH8EsG19p1iq1UjUWtnsVtaud1F7MwDLy5B8Bjgey6iRt",
  "key11": "5kQ8tx2fNAxem4Ep7agDHXwH7eX7MyACzYioqLXZw4HGaDB8Gfu4tp6L25YmuRoizs14QXXM6B6QrfkCmXVZ94pA",
  "key12": "3VUD5MF9bAmpGHrPmxjpcLFsULLjpdyEYCrecEEKF7Jy86zh35kX1Qr5gB6RSBoBDMUtMFrfoZTxMMwqdcNRJ8PK",
  "key13": "45o9NCtD2hpL7R5oLC3C1rRUHezXNLNspcYYZFFUV4grBmGHv5XTSvWkvoXsokYpcKaZbqjhsyMwffkgFnYnzEsh",
  "key14": "3KQobMj785Rw4oAFvM16aD45hkXBciebrxK9ac4hUKJYBXi7K2utENrzMeBTkwS4poM5q8QvKjyMuY3ZZJQvQewN",
  "key15": "4wXYKkUuND2DWuwWNbsfypNB7pmBuGYeFHdLJdUyFnefvcacoNkQwfLisLjTS8aS9faf4xqcHu2NjKjRRSb9z4iW",
  "key16": "4uim9fnj4ibpFneCpZuShRvb51HKZgrcSDLZ3NzUWD2X47LJcZRhgyxbnJpZN8n5TB5J3LCJP5eymj9m7QM6uSoL",
  "key17": "4kEq3LMzUFwUmVzWKfULEJHXc2w1r1pQnHMTcdaqwZrp1vfZYZd1NxE5sc98V9UhVBoJnb8vZGQDs73H8UTnd8Gu",
  "key18": "4U9MXmyZNyZaBbWvqwUbfiZ2BwXaS25oM62DHHmbHch8AAPumGVaHAGofUkUgWgaMq7VzB8QVdm2g3ihgnodKt5d",
  "key19": "XLjFL1LyXYeDGyHUpJbqy9vX5Xrvya7iHNp751D8c2G5emvFF148e4ToFUAzQjpsyFEpEkr5asyxfsfjXkGJvPX",
  "key20": "5FMZqwfCLvquzyYeYZb4sLmz3a1W2G23wuDLMeinpyGo7XKKwSekbs2uypLBB7Fcs1LUscDW5KWnrrFYWZdrEoXY",
  "key21": "3DMF8BmveNeafjSVwkgYJAS1NLzZgNUegh7vPj6U93eNe9kkwBRGkf5vJaPLbC3MQugXwFf8Be9j2BWXt3pMjGvB",
  "key22": "6Ay7s8UHD4wBq4WsknCPnhVMpsNgCr7fhSwPWu5AMzAqHQ6k5t9raQ6esNqgHy9h3mfJ4b7h3gE79SKYfvAKYJj",
  "key23": "39mVJgyfodscYEegoVYMhhF9MttWDegAasLbpeUFxtXzkeSBuQxpiBsPjMKDLoK7RxQPnbEyW8bibfrXFDuggZpm",
  "key24": "4gqeVmz8d2hAxbSJPzVdDW5snMtVJUKbXkpsfizcr7qYbMQVQU6NH1C6MxFbSyg7VXRvckWCaQ3pmXeHzQsBP6VE",
  "key25": "BexW7WnCPBrbv4mt2Nbt3pDAPUaS1Hvis2ZggeGjySnW7Um9AqArAezN1aoNn7GcZ9moSPT95hZHiN3ABRmpVVv",
  "key26": "4dj4Ag96BE1XgddHjLaFHQwfawdzZpTrqaHAodPFMmg5ouM3HJnoA1ekLmTs4NZxvuBszcLe7ts8nUra6M1YsnpA",
  "key27": "2pKee4qeNswDc5eKkhUbKMzveidTjr7vEascfsUUQZxa8Wv6wtUzCXYNCDW88PrAZ89XMPcgFgJNdLCnYUzuNbc4"
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
