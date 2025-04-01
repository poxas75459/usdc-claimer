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
    "4q7khNZmz4n6NY72jds5MV8nUzWQyechihAiYhiKdcwZnzy41Yxh7oD77NNiaBnkdZ9DAfG8NkzeuV8HbfVrytcW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hLZKXA6GAmoRMW6cPnXWLkvuuYKkuhAEgaffKEqWpWdUpTZKWsiyYpqNpDg5kktvEVAc3r3JZVYKEiaDvPNo8Bb",
  "key1": "49SrdFvhVcCVzcEesg8NBbfthDaVMMkkxbKcttjAvC9C9KPQu9m3qD1PsEgkCANqCuNAToaK2eypqZcwQpqurUQV",
  "key2": "5YYxk75CXXhessnoKZg7UFzGVeiXh4zDtjJ9HuxfD2PZXWFgGNfs4nrv4jTcmHcHVS3wD4hSZ6fD7XFSiTynLnfL",
  "key3": "3yDWYTKbn9rcci4HZEfSa9MTfgS6MZywZYEguMjVrvm6z4MxEqoEiHJLQ1R3yjGhLVELy8HyRu3hqMrBgbNdsEzM",
  "key4": "3oYaNNsCTWCGvbxTVbAA5ngHqJbyPykD5zAXV5BzdRhBdG7Ves19kmLcnBe1RjhygPBsU2Sep5JdAFhrNT6bAw7B",
  "key5": "8xGAzEpb8bE4EprbUzE3WbTeVysubcvhgJZBeDtCsjvT4Rzi8L8aYYPxo2iQM2YuvgyKYYCymZWxGtooHf4Fsdz",
  "key6": "35pKgbmgDkkQCg9FMNpiYaJ13FbUDJiJB2iYWkJPJysrFSwxmcbqZtNMobQaseVTH84ZuaahDD89yZxXHwmo2FKi",
  "key7": "5ZxHaJTd7H142AR9YPnh1mGV33nTTt5nPzTA4BeccDbsRrksYxgQWxvBgFSMWb4ZYe7cogntMSvmgAREAqLr4VLb",
  "key8": "5VfceLi6JHppq4vEjF9SLRTEMMR52UAzuquzwcGVVVJUmfXXxcgEvfccAghu8B9dqrmJw6Hmhs53SjfqV9bk3LeC",
  "key9": "5VSKVeMACwDYHe3KCPBNezkFastsSAZeSDkR8qNRrJzyD6iWAa7KqG4PHZspn7shxGUbcwFbahcBKtCSGcq7H6Up",
  "key10": "fCW36KCqGJaWeSyLp3aRR2LXfqccXokVzMityT5NB2W6eFJytBAf2d3BSyXuEmRfSin81zS6LzRzBf8BWbmiRYH",
  "key11": "28QC45S64mTysyuzCJpV4y9vJ6vA7ckW5JyqX6C3pxWLSMi7FXzv7cMGdfw3Y913knckYmUradVBUxmhm7jVR2Hd",
  "key12": "78eEveBvwyMSY2JLFwSNTRJuJujJbb2NQ3Xd3nKuHDeYxocJFiLU5v2B5csAQirbwCUo3nYHCTjZBvEC1vJTUr4",
  "key13": "3a92jRoVHe5wmWuaMHUQHyt1Xiybks4yq8yx7fgmMzmzMvmcRoRdCY7bG72cqChVU2vtR2zk5WedbzjB8Qfa4p8a",
  "key14": "4pDe33e4mrWLy7dJSAMPbMozk6nwx9dYrLspKk4i4UQkdWMvvG25JDFwshKE3c7rYDdX3HrypbA2ktNgjjBBi7jM",
  "key15": "4hW9xuidm4NMM4XkLWz1KnsLgnAfKsSr5TW6qw8urutZs5VqxRufd7A9FrRwYrcCtPWQDx5JLJN3vF89oqtn4QCx",
  "key16": "5TVE8cNRRxGA8kK6s9EJykU8DzVD3x511T2Xb5GnoN8KSFsTbkMMULXdxibRpf1jWetjsjdKezDL2RFTmS9CSru1",
  "key17": "5f4ceT4fZGWA1pJcbzhsUUkeidVxf5mWTUC5dCjofnwFqSgm4MkcKAZgTcYY6vcBVqQpJy8eG2Mrs3cDE3rRDVCM",
  "key18": "3mRxopUtE8ad3U7d5ED3HViqZR6bUbycEAtD9AbeqxfBXaFb7D8CKCgFHsFtQ54JydgfJBxchmewZCHG2bCpeWMQ",
  "key19": "GqKUryxiyjTbfEmEQgeXZWTpUtXrK1kCF7sQcgnm7bf6QkPgUoPGzwpzyWNAiynjJsSCjYrzAAMV5NHpEYo4Nkj",
  "key20": "5ThnMnUvTp4Btj6SjJEgmqUbjnEWUkm1ra8PJ7otU42EPqcr2v1WCmXkdMWLsBQozRh78m6N1f6cCQvFcS5Q4tBT",
  "key21": "kaMJorrBkXekEuVEaSTpFHuSqCCdjXPkVckm4wG89ZjYEF4pipbzr8ve9tKRB335v7tf1ZzVGh6RotDWcfQ2Hx2",
  "key22": "tFKUgoF1HCL9NHXVkZmHnMAdXfqB2TJi6jvBKkHbqQfdcDy5DPfQ9jcpBPV14stQcttoGRpLVJeLmf33JNRKpF6",
  "key23": "2ChDQRJkwhuwoDxydx8dpeoHghMHtoTjsrPJEx7Cpv4585GNRiJ8i5x5BdZMU5mnWMcJaJzYSMfD2dba8ABMUED8",
  "key24": "3X53aXZAPtRF3621MZbc2tuj81WRRqtubmjWBTZg2Fbz2QDKuHoGBJXHqnakASmTfXDNuNpb7y9kLZmruiDnH2E3",
  "key25": "A52ymUjdehYadQeMfnpFdKFzowAh6t1ktrdNNZ5HcLBRYtYb7J1bWYWRr4Zp9MDKvwDC1SRhwboF1ucS19Jkzdw",
  "key26": "3kNknVS8JZXynCiJxFsBkQ68u3uZjm53MnMy6tGttX5svinpXKdBF6QruV59aYgHBheKose7eQdgbccvFqBsbg2z",
  "key27": "AD6z37nhxt2exiWJDriXVxb2b4tfyAXLbiQztyyN7vDy2mQeTbWhNYe7Wz6eGf3mwiqYroSrU2xndN7juDr3fyj",
  "key28": "5UwQvYCPxok8nv74VauntQFCHrWuearc9smrDTUtER6fuTfUZjbc4uvKJf4beqSYQbtML66g45Qp6hdaEa5YQEfk",
  "key29": "2rv5A6JkMstZ6CHim8Um7kemDFud9z8CUZ1iaZYZ7nJ4NzDfTcRy8iCYhFrr2JVLkRBByTrdFzx4Dzo1izZfVjLb",
  "key30": "2P6ZN1K13rPPEzbRZQvsAK7Dy9qtkgsgEz9MsGCge8uHfn1QfWfrDdR8ZYji5xwE2bZw8x1wK5kZpL5MzndZciTG",
  "key31": "2g5FS4yXQks7MWr5HXhUZiWugsQTXbw7S56tdNnN7j8tmU2taytUJScT9JadKWgMLFja64S6qRNKUBzV8BA3ajG7",
  "key32": "5pxA1BRqSiws2GMY4JJKzYRZocVvpqV5m1BTdwNFZbUAop6tTfZzrbbDsBBXiy3L7qGnRdkRyauxBSbqtvepD5RR",
  "key33": "4dqyDqeUFmxo2YuPn8gyuLc6HH3HEoeg5zYrr81YuzNngqmgnM3dxVAtTwtSJPcJxTvL8cymKv1TKXd9v9EhXB4u",
  "key34": "44YBSvYS4GJ2MMytPGsxStCLRU9rdsZ3kMKAA1fZPZBiRggyT8BrHgfqV9wdWiSZBXTvsYkgUPb3Zow6J9LJ4EnM",
  "key35": "2NMFBCPYJu3XZj2TVxn8bpax8GM4cEF3Ah1wYhT8pLWyZwdHKu4EF5ofWFFqnmWTTL9V4311CBK91sCUEqxzy7GP",
  "key36": "5i6TcTbjQAquAcUaUxGcAxySPV1MPyfNXE52jXfgM5cKEzgDmKVF92CfyQacNGQkZmXtqZNXgw2MK2LpTDFzFRJN",
  "key37": "44X2iGvtw8EhCLUE2xQhJUtJ9GYgU5DmtvVvURanH4hh4wzJhvWr48VPbrx94UTd6P1M4hmLNGVjx44FhSR1Qroj",
  "key38": "5ZtT7cjBzwYRBSp6VcXMA3gNtV97BjvFBMtY3KNGtXjU3k3F7JY1388ofCzbq4UR4EH93283rM2HN4USAErwX7o9",
  "key39": "3bUH4dmw1v1xK2NCbucMBoxWMJLJ5wZKVc6etEA41JCt13VaAxJLMkH8PxFaGfLP3zrdxq4e3wbNCyH7rQc6R1Ee"
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
