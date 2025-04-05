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
    "gdSkmzttvXUhiicEmnwMoNDu9Zeaet98CCkAsZENb5q4tFFbYYkvcQzvf6xEaQPQBChNELwjqFyrHpdg7VhxLd5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gV17zoiBAUTPxe9WBJ8c5dy5a3Sadc8q4hi46Lxn5jt9hScgajzjpsPr71ntDaaAHLeMPjCTeHGcCTeHZTvauYZ",
  "key1": "2xpHrS1nk6zWePdfgBSB1Cj8bekSehY1eeyBqL3fYFucWXXoReP25nT44Lc5hFTyvAmB3SfFkpC79NRnxs4Ywp5u",
  "key2": "5HmcddaH8LeY8jHM3iAUiZ7J8k9ZhTanfXbu6k12f43dKGTeisMBxWUCCSoLHb5pwKtwbgexLHGQvf5k54M4wtTu",
  "key3": "5XaJeWXqxJZCZ9C5pedkmdMV5n4LiDV8nvoG1gVCYuJYXFV2h4KrrXsXiEeULmRcWHepiLoxZjFVoFMddJddzp6x",
  "key4": "3MR3HZQew1YWChGDQ3n8mupjAw7mQdmNiULkRXsv9aVhtZJ78QZbZRUk1eVxvSuYrYGRYus8aKr8DU36Kq5FcDqk",
  "key5": "47bdkmT3xpLHAG2KF2vghZhUySmRMN1MqoSUxzPnsu5fKMUmnb3MsCGjZjxVddVjevxqsyUL4ckLQPVhe7apsACS",
  "key6": "3wkNJiLjUA88Wo2CXLraMt1FR7gVuMSbTbvY277xPYrZyQ2mELbtsRRLUc3RuPiFfM6w787wJmGDBD5mmqkmmZEm",
  "key7": "4bZP9sotrxJbuM2dVkRFTDvBBdbAVcqsQLDjXNNHdRYpTNWsLtKiPopv8QV5vCrLXQeLJ7ZgFhSM2AQA1AnUwsft",
  "key8": "2CMNRKffuH9LoSUqGL436ae7Qv9bG68b4EMFqd9XJzbDyK2YHtPfJr8Evb4BvXqZAWw255uxAys6wyiiNQM3QKtb",
  "key9": "2mKh9Xc3V32GxtvN3FZrkFV7L2AQfrLeDwEUriZowmdMBjvmYbCtD2ammSYsCDYwqgdhnEre9EH5n4ZXP8F7gKfA",
  "key10": "5KLcWkuFNNQY87tMyaTG5jcTHFVJw4y8ayELtJXRB6vNCs6bLNi6hGLYdXSQo2vcNFwH1kwaJyRnBDA6KK3QP7xG",
  "key11": "oeggAszVqt6tE4ahdd2irHcWhmPDSD2ionk5zR2MGTrYvS5WsNomNBT5HehhxKYbJ4ACeJEvZbKs3JEHj9VdwX4",
  "key12": "5hcEL4TPHBMY4yUdJrzWoWfwoPumUU5PcNCTU1ephZrozUtuocRDu7FtEFebKsbKtg9hZiem8tZTwrSQRLSi6vMY",
  "key13": "5zYdqxo7pjrF5mpHKMGx24TU2K4Y6vD69hHHdCwzXU56oefrC3HLZgq2A5bKKXjVueGYmS1XCrnEPz1GHeCGxMMN",
  "key14": "SZmPyw6p3KCKcK4AnJBHu6bhiY4G7Y4izZCZH3oDHXsNT889QvDQyWaRxZFoKTYpEABtChiuGJdaDP3z9oTyqNd",
  "key15": "5FY1gu8FzExEV1B4AzD7ts8Sy2fkB6XM2gkAHRhA1ZetCZyfBsP7RtVGYbdjKZpDgqNfubiZpcTRjUQd9wawXQsB",
  "key16": "3zr32oVDB5kohp7cjWoXv8put21nTyWTAs5S38ZfMiE5esvtMjTAQZjYyPC7Cpfju2dbFMmKmsjQS2XfZJYsgNRR",
  "key17": "3Mpnh4Zo9XHFfJu1NQKnWjKzkBASQ1Y62iNLa6sEtbT7Ddm3JDypc225W2tRWHHJMMhZLueangUSSdLH87mnjGBx",
  "key18": "5ZTyvJHi91QrTubA6TnjwKJJ8ZSkP5UDVA9pDLHC7Lnx6DEBdKegkwcRyRKtaNywBpNinV9hJhcBoLo7b4gHMyYA",
  "key19": "4nwWBvVc52yt7koaTrEHktnd5ZhL5UyCjAwA2TowJ6HfpoXoPjupe3s4BQccTMJo2TASSxz7JcqsPaTZr3HjP76J",
  "key20": "642MjCZ5c6FDEFNq6wwWBV5ZPZQzvwF8nGVeX3pMyKUTFzNsFm5T1xyVbdJzMrSUUi8DfYLv76odAYFctHPG3fe7",
  "key21": "36Q3j3wBMB9rCubA8EWz3waJP7yAhbedFgn8M1u8oXuYW9ddrNXh28JWftLjHXmHnQ2UuX3yFvbxe7zDQZZeU4bi",
  "key22": "zrSfSVVTPJJecPkRVUKqFNPDP6W5GqLxw4wPaXnT5NwDk1VrTy9ofr9kkjYT93JJkBxAzpyNYxwYKPg6WwxkbLs",
  "key23": "4JK3WuUxQXC8VdZ44rfUHnJ9S5o5WWAipiBjzTrc9y7e6LpZq13kMLxhVBRM8dKhyq4d6b1bXYdVxZAb3D6TdXHS",
  "key24": "2vWshi9BBBSqByB8r8GeUsUAx4HCRbvb7fkigoChdW14WBUs9uNb78WuftxMcMiHsahBjg1whbaCmXz4d8BirhEo",
  "key25": "5Ypecg3CJ8qnVoAingDJN82K8rimbFL8CKxwgxmQkF6C8JQtVdFqbWQp4JoDTFgUsv46ssDkoapYuhx5HyV7vzYQ",
  "key26": "5FeBoE6UD48JXLD8y6Dt1mWkkmjPMVYhUkZ3B4iPks9SwhBpLcsuh2LWtbgzGW7SXae6pX1p2mvU4RvXfNcogfBr",
  "key27": "5yS1GDUbuQhxkD5hFkUensz3ZZfpb5cucKhm8AGiTHBgMcW2AEpEDURckNR9ypn3xkhggJ6P6BpyZfLwKDD2JKfA",
  "key28": "UL1ipfKXRq3akMV6VGrPzRcAmXas9spFxR9Qx8hHXUyBuHDBxb4tPRnZYdHEoMdMQxqM7DdUb5tAcK4dWZ2V6eW",
  "key29": "4rER3xHPgASbKdzxnJZXHA1sRFWNDGyPrzmcj9D9PdkodZf4E2b3QLWHqioyPMuSwRubVyaxR7V37DMQGPQygfLH",
  "key30": "MFWXQhaRmeJZTKRoMgQnU5h6N5EkWa6BqbXYVXoTA5xMoxTgmrdf3w5SEE7G9JEw62ppAAfDGzuzcAWZYyKssLT",
  "key31": "3VufjwVJLKfs7WnprfoLjsfCzCmovdTpXSSSCkMrxU7xQxSp2u4FDA6GSHrrbEi5YFghUnkhDjzSKNm8LYpWbnk7",
  "key32": "5rdCavSFtBXug39RAzfSYsaVU2wNkWa5DkGQ4M6K3ihQNedUHBsY3CzUBgSEZFjgAxSRFjqAHAaM3xP33xWrWxGx",
  "key33": "W4gZHp79ivBNANWVrPDGL3KMPLNaXQ21GvhZefAEDDiVRn26ro7n3LuzCY5JLT3TzSwHgwDj3ob1tp637B52Ufi",
  "key34": "5SCrQW7SKxTQwdBxPX3P88H5SgkTdsB9ctuQ7ZVfRo1dB1cqgUgguSp9Qj6s8WWby1ZCeC8ybuqnq18ynaq9ARvb"
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
