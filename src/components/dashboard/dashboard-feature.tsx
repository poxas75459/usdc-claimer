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
    "4UYQQMNV97cCzVvtBfeHAm2NNDhzJmzvdN9d995ePnv3ggaKk3JYgyLMyNdqZqyaWgUgRNrzzmSvgFVrrWGdY8tV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fhLjcwJC17GCXFtyHGzu9rZx28PyVVKB7E37HvCrJv8QdvyvJrej8hL8b623DDG9MRdRcioWQvnt8ygThaAbLc1",
  "key1": "4rZhSV4hXXVf4jMnUXejUkPQdcjmCkb9qPA1Ye5Z7L7Dm7145RozpLWRqXxPkMc3RmrYTTqqmbK7jqVMqFi7CkgC",
  "key2": "4hmtwZR9im8AdeZYCM54c1qfVfKsQhC9CKkU3HCSrQbh9HuQPm2dX8N1Hr6ihVhXBJXxwb7d9MLhF1hPcXb52YyA",
  "key3": "4qbYaniCCBQw83khnK9Sf5pyUtgEv483EuVXiu96jecrL9QrGMMhzUS2PXE1s6cRYTfLoVKQdkB3SrD1dDBpycf",
  "key4": "2KhcA3Xy4RhT18qg7Bgo1YgQ9RkDWVdrcgNjdrZNKorBC8hbNLQVHRBpoi4saBxZsU1iK9j2XFYoKBKD2jj1jKKC",
  "key5": "27MznCG3NZzoZQtHEknv4Sz4YwhaVgbbMNRUZEYc4sRAbfstq6hy8epcrmkbUtPwUvyXtGAyHTnp8ju4GqNS2GPP",
  "key6": "2o5GrVoqgot2p8Ft4cB9TpgS2tBB9BeeaKYzQV9zQNMZunsdhyDjDoA7sf92Jj1qfQGa9XDAmi1zU84rsvVs2Emb",
  "key7": "4cCEW1ozHgx2rx1omkLbvX9rpwLv38X1ijLNXLwcrguFE6w2MrfFnw9nQTHQXTj59HaYTHBz8sQp8WZSKqrxANLW",
  "key8": "67kDEFzdDAjkAPySwUmRM6HrQ4Z8Tatybyf1Yg2ox5qBrQfnoytFCXg8EdNSFnnZLeumYrRtiXHMmuVcVx5vuty7",
  "key9": "CQojjppxM1V1XZYd9QduxfTdMjXXW8fszpvbeMXX8jMUUAw3Y8mrzHSAD34pyMvnrE8VLoqGVFCMYHRrGvvQMUT",
  "key10": "53hhidJKYcCLH29699jGs5b4Ah7ifYk21GUN1uVGKX724VV88iAgRERoNwHHxTsZ326D7AVxgGWFnmcYS9LKaRfy",
  "key11": "4ZXxJh78tDkEo1ayhCqhsDmbVipMWuW66GzpdgSDQLw6WzsF2xxns8uK29ePfkRpsHfEHvkj7tg1si7UeHaUHFmb",
  "key12": "uw4pzuTuPhVeq5hUk7N2BbMokq9E5nLj8WssdqzcnvfBvt2buumkH5SyrzrsdudHpZ9yLfjuCSkb1BiDfkK6mKA",
  "key13": "43uWed5TNzDEYYXA9V9E8LGbr16vHBUkZ9fg8QbmBhk8UhkR4gyRyuYGJN8PSh5nZMfzwktYAL1yCG47ex1t6omy",
  "key14": "4m9doA1vSW4WwVa91qVAwALwCEeowci3Kumx6jR7MJNtQAGMvMCcELA95SurbMV1N9UPSXvRpGGsv9Z1a4uuUyYK",
  "key15": "Up9eou4iTpGuNLFhjcnSN6Rfg3oJLj7mdTVzkQTRbNwHzRhyYB1WS5MLfz68si64VXgnAq6sT7RwrpSKw2Fh23d",
  "key16": "2i8xWS99abwu9uzeN6WgNys8hXuDgJBibyTFfgBXBvv8jQ9Ewvq4TrwnEoLccBgqAnFx3eUyByEGt12EMckawLpU",
  "key17": "31rkxHEJsbYa2Z8wtjxdY6sGZFRnZT61KcaW5xU5tGRjcrUVvPuyerLDfyEjWSo13rF2tYnnkNdMRkpoD7d2DgmZ",
  "key18": "5NsKcyaryXfs7oDBkdokyZNzSzAJKEkRCq1tfxk2cBHweBy48CqEBoD81iLSDwjSgx2PZZ2fwig5C4Mo5e9GGcmY",
  "key19": "RCnNBLT3ftbDUzg35k98zPESa8ERF1kutqDuATYGvgXv3z7NqvoDnGms3PPXY81nxmg7Ge2MRHmXMCWg6zh8bh9",
  "key20": "41gQUb91wLo8tcwgG8hVEmBJJWkpnv1r17CC3J8SsGpickxeXJkhJLztgLgE2oax9B6yVEu6iH71arjDj2Kft51B",
  "key21": "5rVoAFSSzDrheFSG4B3qy1aA9xHFAiHeJPnghUf2zcDcxEtLp5xnndNAEoNNodQ933wPaQGX7Dn6y5LR64LPRX3t",
  "key22": "48LJHgL5PC7fXWRJvXvnjWksULe35ZRxALaBNdS4aZaNPDmnEhevJRHdeaMchQ89hE6GwHks2mksCJy41kdMTtuQ",
  "key23": "2PBz9EwE5Xspnmae7fJxVGomVqt1Ss8JPzPP9eBGCpFXqtQ8dLHsLdKanbgG45FGGseJDgY8kSvRCwyFq26oaRkF",
  "key24": "36ZjKB9aeBV1KSSYMj9ydEok3uXkUAcPQgGJdjTGSdxim9LGC8S4FYgvFPTFhFYhJDAADy8fVmLBt1q3rPFXWwoV",
  "key25": "5KnrNW8nSxmxyyst8Xv5sv1q7q9KcpDfUEL8AAc91bkiUCkz3Vvm5jCMuW9oSTyqX94sYD7z2whTf73xcW63y8ys",
  "key26": "22745UK3qp2Qi8nR9VqHKYNcsscMEHva52HGE8RToACHSg5DSwLKt4VN15kbxy3pxHQ7X4tUgByLZjo46gf3nEur",
  "key27": "642m8yvhpkRshEDnC3iUtQZu8aJxZEQWUZ9Q48qwmJVZYQLjK9h3cQBUfv1fd15HPziegqgVa3GWdiGQaceC4Acf",
  "key28": "5SP9WUt3pRt2qJZzFZGQF2TF4nmvGx5aTwhkbHboxmoSvFA8jdnX3KcgEubdt6QPSowMvnjiqQXJ56x7Ruzt3h3k",
  "key29": "67XMMors6vvHLhF3ripMMgYCRsKYGSvNZCdPsWzLA6qpdhKALi48krjVaC6KJwJZtspuQBWtKn22mCCQrWoyAvQX",
  "key30": "544XJyHhXNPpgBj4VyWYTVrcTwBGM42fsDvFVVjgnT3F7e54Lh31BEBJ45g2Ku9KxNPJ9rrdFQUzKdPbPbNC8MGG",
  "key31": "5qYKF2sPfavtUarRReFQXKomN641fpW66T9hAuK372nnXxRZuW8X3ycS1ZJNyeg3f7hUCDUTcnWg94vHpxMjGVSd",
  "key32": "5gy1KaBsRBfTi6zprHpph2oLQ6L3vaLvcvgkLuWS3b6RLUkruGyrqb8M44BuVxmx9iiC32gASTicyb8dtA9o7UEU"
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
