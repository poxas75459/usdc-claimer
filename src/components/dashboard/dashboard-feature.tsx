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
    "4Xk95xuNuqeJXwzHEU9Ngd2ZtEPatXxkDTJEqJEu6EitmNJPnZXxrEjXE5WenoX7ZBtLPTgFpEe2PqKCsy5kE5bp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ekP9hqbRajBG4hzggBZEyPFRmysttLBVHfYqcfp9wtNw74F22gWADgYrHcMLxKVvdkhHUUx84mXwA6xJm35q79w",
  "key1": "423mAxoZwbKiQM7Me6axWGRmZLRsKRrR4L17MFKUwU5Xb1Pu5DxepZVsPeCFhmnzyZMJ97rbLXXbXTPsAHHNsVyn",
  "key2": "dH4VDxobooqm22WHyB7i4rNzZjWvcH3EDqrPcSeWEhBGKpB2LfjNkZaQqBXpeM6tKnDVnUM9co3DRvk9nr7ej9c",
  "key3": "2JfKR8JPAFFQYBfAGJ3ysJ8WmAzE8abvC1Y1MLzAHpDWP2MUuVUUZ31zS6imDmTtta89w9XdLySgh9Z1KsVDwWN3",
  "key4": "17dUo8wPQiDZkbHykQ1TCLLkET1928E9DzJddMZ3KzzVCqgt1MpPmmd8CzRnhqj1WMLePLVHznQwVfUYpg2uQ82",
  "key5": "4tvh6tCmZHhz8oo8XBGZYSrAUmMdK7KtabW6koAbgXeLDyNXWMYin6up8fEPiFJp2ufHykfWkc3zT3MJ2GBkxPj6",
  "key6": "fAke8pdW7h3UGTw6rz3yjiHigZpTMnD237cUKyLD8vTJk9WqEPRQe2x8TvjmBn2FPtb7F2x4qaFLHYxSEkQyMcv",
  "key7": "5sk1NTnAVWYBhgQFgzXd5FfbGC3bgvGTpYgoxKKAvSmCnJyg1XAmzD5N6NjWjgd1FQhkze38jEL4qnsri281Vbbu",
  "key8": "2bz4moJ7td4bphhX3fS3qojvjg7wCC5yKhCPXGV1tEJg6K32hRYN6RFFzepNvAZFvr6xJwwymWaxsq8Wa9i4KbXJ",
  "key9": "4ZPkpRkeY7tN9ZKqvrHoHABkgHnXqNsjJ6GHbCNJGs6o2g23WGseb1cyo2MefQFrfAGYgo4VLeDx7JtzpNBNbZKz",
  "key10": "3tEAm3iZhe4o9GtUZfGKaufbMWPDJDe9TupYHo6zrMAJ5VKpQvYcKewbbvA4VefoeHcxBZZ2GPNxJVFk1eJjTqa",
  "key11": "32oxSw9DqTUMXE3JyLf3xMSkNddM1F55JBagWn8hT8ui647bh6fdvLziPa6R3H2qtG7sYiBsGqcgd42k8mEAB47X",
  "key12": "Ywr4d5oZh1EMyUd52B1hkq6vxTTxCUzfoueMmp1d693x4d7Vzk4zLD7MRJTDCS6gfLx6PWBzH5kcZ6FXXwzGcEa",
  "key13": "4m35sBw8JgY1n6KKUW2aqY1BLagnnDfwEdJR2WT2ehZdryhB1o5ZCRinYyP81D8CBiCqAjw8f7r1DT27m3QeFhzL",
  "key14": "3bqiyA3XjDm7sDE4L8fFjaofYQDdMZQXx8wXeWamKGeZooDhZS9HSoXCuFqZQxSwaSG7JbpeaedHBE7wKKbmsevV",
  "key15": "3dzih4Tpa6WsMJiyGxqho4h6D6fT8dmYwooFr84FekrX9oDa5UxcG59iGusJzqNj4hjQ3SCtTvxQSWVMhWa558p2",
  "key16": "5uxiJokAN2yvgVWPbUFCH4ySyUbRa62F6VSVyPQm4M94x55ekYfAeFo7MQcjxwZHTXQZyE6DWmFMn4p4DBifDeeW",
  "key17": "3xc5MeJCmSwWokyeoZLRSJ5CRmpmrWnYwM5GcWbiRNGnvcqbH9DLsMwHwv1zgzHbrrRVnsXAb21VVaoFccYAGYKc",
  "key18": "5VdYaSEkxaVXSpUg8foh1vbT2g9KeBN59kZ791fHpPijVR6rUpa4cb9w6aqqo6YpokEnPKNKMrAADRiKkuLnDzJj",
  "key19": "5DfJ1S3L5LqY82uWv2eBfGLUHs4gyQBdJBTs8UUb2ebRrLDFkQcN1spK2CKDqWwihVK19ouEK7egcvrT9B7DWT1b",
  "key20": "4uecMh78GLmAepYgFZGriBtnX7tzwz26Nh3UJVBrVvZRyXB54QKeT7nymT8Tu5MWtEqqQntMMc4kysRueus5f1tH",
  "key21": "64KnRs3qMqCBheqD8B69txfjdtq2FUE5StMJcUmLcxT5AkT3jvafDttGiNYThoAV827s34vM9DgjHsNcKEN9QaMh",
  "key22": "5EHFAGZLGY3DVpxSYzJwXMkJCea8C2AB95Fw9tTy1xaw33j9nqeuFd9fgcx6YJVa9Gx6jejzSRXq3BvdpRBmaxQq",
  "key23": "491kQZrg7wBjKSpbXBmYP1M8pA2zCQ1jqN4ek46HVYUVAEsVb3e784W2ZH2AMjQCmTxYhCXapyqMcQNhvCxEW2HN",
  "key24": "3628sVbcVMmw6aM9ekDwjtZK5wrc3RUA1e9wStwbvsb38sKmmykWMbFkKAtPRKVLP5cxp6KvDLcgwdhVv5xADfSh",
  "key25": "5PwhQVanvasnzSTaz2JfmuN2BbP5q9WBQv1BBwFzfMieNjqQ4DHTPhUTi1q9b7jJ7Qu8z82zpXSKM1Afz5Kefn9y",
  "key26": "XDkBDDhB7daci6HJNHn8q5oYHfERr4JCz3x7pexqxVWcXb6H6u8ExvBx7p1VJ5kqP97JWUojTWLXwXZ6gEBn8Jd",
  "key27": "jns2Mao7RzrxqHPbfj5RgKUFQWcAG5NYuTTH7V6kxFF8hJ5ZKNS6MCNXvPNG6wB8pCjYwUHwGwZRo2bBsRM4Wrw",
  "key28": "2gGBWgVK1vJUPEjYuMoaPE3W5Pkcjv4dGjjmutCc4niynWZ7baCVeaekwgNNizX8U3QmnXdvMrHzQBTxwMc6rgMv",
  "key29": "5N7FvtYN67mKENaUvh6qmq2geMBW2wxGyGRyLYtpfc8stQwRE98YdxmFPePtVYcmLbBg4hjuRoxMdn8qjXTGqPNa",
  "key30": "XNgU3Bet6zmkBT4m61iBfhv7p5FHQ3MNXtczAPRJ3v49HhfiPhX79WLVmxbDfiSCQrbRBEMt5MPVnhL24zdCQX6",
  "key31": "5z4kC2NpN6cWp73NQAPfoCnDhB6H4TuWeSdCaHg223EMuU4b45gABq342YoTC57g17F5jjWyqc2TNZahJi5FQVsW",
  "key32": "5jnmkgXWLpnReRBcx7TA1mJqJSguDePRPSgxDCBve7qEj35Ux7sU61moLvB7yuZfuVC6mV7dGpMvUjGEamNyacH9"
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
