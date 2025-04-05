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
    "36niyejTYuxj1CiZAudbvbVoNLKmCGosYV2cZjU2hN5XP1WhcUHtBpW3WjxkHwPDJyEW3aJt2aAWWR5F7nvDJoU7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kBisNUJNBLdCLBjJaVFaudrTsMYHdEe6iUqeL9YPtd6H8AP3GeVvVixtKBgGiRnv8RgZi8rvy6LaPtNxwjNgkkw",
  "key1": "wxnWEa3Mn8ALosK2MyYcyqBgtEehkQz8xf35DHrne9NhPjVbz7pBbm9s5mmUHtZWS7xSU4UaoWu4zDqHNXBt7jA",
  "key2": "4ZUiRjGo5bULn8TKRVzRr9fmHRTXSxvGvTChLtJQfJyKn4g4PgRScsstgu6qaZu9sR96958T6fbBsu7hTNwp8L43",
  "key3": "2A5gXPnQS5ACBXCfqTViqDUF2Se2EVKYjCFqdcSXjGJA7x3fMYXtS97d8W4Y6VaHpYsCkDbPADq8xmoCAGWJLFA1",
  "key4": "2y2a1bNyfVkEUoUukLHuU7vvoDeF3sEHxiitfKdEq77xHkmeaeCRy5KJTsSnVd9fqYarSVFybdGYeNdd2tLsbB7E",
  "key5": "2Dq4VqXJPdBacWTvznd27uPjYHEdSXtZH4wvXSsKzPh8bmBJjQG6a9UTsc1iKUTYfSJ1w8CDJ9UM7jWpwnTjVxg8",
  "key6": "7aSWjNQZeBMDugzGLMcj5Hh8uBZzBe7xbG1yp7W8hJcWmbYr2E6MWpMt7w6dGPvTDYADjrvz14esyDhUGXa4rpo",
  "key7": "4FTE5YoqkdDs8G4mgABN6FWGAcsDjgMei6vXVWBa1TiGwyifTJoiPPpGayHAeg3ejPuDH7n5AEU36Q9rKji84juT",
  "key8": "4c9yAAQkk9D7sjgBENNoeZ5VyNcSd4AduKnTPgbxWaaLTqJwzugwzQeBJBYRJpJfJPAP6hUptxbfDgwz33S1Rig6",
  "key9": "aqGzF2YNbKnaHwaVgqAKa1Z4ZvjVWqxTep8FFu2espmwb67csubd1WtvHe4tbt7npvr5EinrCC3W8Ypao5NtMsP",
  "key10": "2RNpxecCLpyJmaLTt75U4Sy7Tww9FKrg3tHY6FEeLHbYcjDAXRWDzEkAeiPEeds3ZWHf7tvAbhDNmPgiSZAzDXPc",
  "key11": "2miTfHFJ9RqHk6eq4or41nbcs7qJKDcRh1mSbRaA8kN6MZVLZGFx2Nw2kve5XLRCGhYwScbrZAMDyoMqA6BMJDv7",
  "key12": "579J5yTMYey6ABQab1vgRums8CCL1MJU5RfqQ3k3qfYNkW8s9cCcDLwrfcikcGuK4S8FkHmAiakyzZoRptYgBZTU",
  "key13": "4X9nJmedgmgNWRxw1kYfxzNkje89s2ff3kj6japnXhNKCP1bFBgRDD7uDLadWAQP2tJD3oPijgw74bV159XWsMXi",
  "key14": "23gzRnWKaUaHaNe1NwEawqcQ3TXKR9v7Ykyv9mXoxrXDBrqi2Wh6aWtrXGbBc6dyQag6pvbKU2hasg8QbNnAkZv3",
  "key15": "5QNsSn1RPmQ2swsYDjideQMJDhcKzER1ewHectJguoa6PAWhdYebcTsdNcXxTnpF4xXPqAD8ozJ7EtKuHUemtGM3",
  "key16": "5DhWpormJhgrYckJN4ze3CJh7w2q8xHvCPTbHRvAeeVz6tbFjaygJ9WTS8UiJ7ohTP6QQNwbuJ7xAh4YHjRhkcdg",
  "key17": "4ZqNYtMm7xpYN46Gh2kcrLrkgTVmNors1MpjJpTtizDjUTtYfaQFNrXsj9TdvcvtzSi1DBgQuHTaCSWZ4nTZ62iK",
  "key18": "2HEMwrL9n2wZZQBY5DGoPDQLnkJzD5dBpeae9w6mkHtRsbjag6vWHhUEKBjTwSzrQQZsfy5yZkuLKqhZASasaYb6",
  "key19": "5h37FzhY3T6yZcj4qPwaRwxtUF7LQnzteEH58nsa4GG1HXubjXKcUvLgvgfGNHE64gGSkBUtWeZi8biNf8L7WLUc",
  "key20": "29pqvwLK3DibhCjL5Md6oLMepBX6X9Gpmbm9tBZwrBdWazWorAGbz1uwKKriDXHGJxgboJvMtg4NDq9pJXe36oHr",
  "key21": "5zAyrWv9Nvv7RPzjvBVnavQvRGoRifpbFPuVd3jG6zzXtQekQHhMQsj8U1x9jFVn2CrQYy8WahvgUF91SuXkzDf3",
  "key22": "AC29af4h6RhSUxHCjkAqAAcvcCn4UmWtkcGCEJgsVNi75mXyEwmcBe1SPWP53MtMWJJVEwLowWW5Ji7KwUhZdA8",
  "key23": "5qghgg1w5yqRQtpQ1CsBNFArdgZC1pv2XKntQDL4o8qGeamu4bWY3kcamqf284T3aiz2kp5KEvfZLeMpP6TRDodK",
  "key24": "3XLzhu9R4N4NY6WJsMAbzBjLSMf7UqoEjn3jz9dwXnpzMtZsUyHmt6MFq8AJe2RrfKpmZoCwb8jsTqjC44ABnSRd",
  "key25": "3PuANsSe5HX2fYssMmYuy1hcrtXYJTohJ6cmVH85vC34ytzYiy4nxkaCHoSnv8pCtneTkZ6g3GjLFHNxnXbB1GY",
  "key26": "3549q2G6AL813R3zV1g3eMDeoUYgDG7P5eyEzqwiyEJJKkwWEbeWESCC3wZErEa9AknYx5do2RinR19paqxrTJ5a",
  "key27": "V44fDXA19D6ZbPq8A7pE5FoP3a6kmM38vy6kmpMmAUMbaAmktWbjZFSLYaWZ9NmRXcnBgpabZeX7QrSpBDBtJ4o",
  "key28": "3VvSzMwfemeKPqMuJi6gXHpdQNnTnsCn5Ao7QcBC1HYmzitjkc3yjiXrqizvJdUfxYfCRSQVxc6dZogdVR8vbbBc",
  "key29": "vzTEVX42YvwhiqzY1Vx9qV5DYodaKrJjPvtv2GhF8e81tH4g5zKbQ4hhXkaLD2kfSCDfkKydvr4JzGAkJJzKCu5",
  "key30": "b1i76sm2uEKiV95ru1cQHBsSkG6yqaEH5raXB5tQAn95vKUX2LXC7gUQhEPaYZHJQR7f3UtUoAzT6sGvhMXA1Qi",
  "key31": "32JsFQYn26ZuiBhr3eh17kZFU85aMw45nEhfGWe2TSX2G7eko8KCdEPjodRYipfTj1tCkaSQcPLNEnTRzgPQC61B",
  "key32": "4gviaRMGVW8PBo2PHEvKtjz6DADLPk7ETLpAWvgRH7qzoRjrKLuPtnwYqLpiNLZuhbau1yDsTdpGvMfFSXNajmm8",
  "key33": "5nswhiw1zPRv1YuVCdoc5QRgVEbHDgv72yq1W5gBbVyeYqJscDH5kPYdhBCz6CfDK2fMrPwQYj1M8neZKk6nQkEp",
  "key34": "5HdAAtnSNxRkwkpVvXNPASybx7EnYBqSqSt3FATRtsUXkSo3QG4ti9afiqy8ZvzU9LakZJRfRZLxj68QFGHJPbdK",
  "key35": "23z3taJn5hc6MNJJcFpucuxxogsnrxR4G4ji29cnHpjejchR5mEmSzvyxyMRGpxbk9AKrCpuSuU4g8rgSDcvXJk3",
  "key36": "1EaZkBjLikhUtpzreVFzV4SWqSFCA8KKtX7Ur9cJSEoYtWiDVXFYwmiBvyPh8Kb8BvzEowSrZVaUqeQ5aotR4nh",
  "key37": "2hJTozvfxhaca5AVR67Puzkizn1NcD2hKsZfx4yKyuAA5bUy7LNNkmuWo7DGGLv5VFLVQu3DGns8H2MYKC7ZQjxF",
  "key38": "23N8vap6oCPSe7H5VfhMquWYg8EMo9kJXacbQTeEob4LDk4aoxwSkRDxSvsS9K4YwFX7BDSKgJDxGM2NLMoi3NEK",
  "key39": "2XY4GPAPoHZK4pQj7QsuvXSLe9T95gTUucaWutKivfbe55pUPFpSrp9eXoFQR6NA3qv1Kt2TwQPFmf9FMzoTjJr7",
  "key40": "2gB8ASTddjHqWWevcwHTPhL5Nq7oSKipwHkBeK8NkCjn3qgw8DXP6pAdnLeEkqUhpTi8B2qNJyrA7sX5yM4L3CwP",
  "key41": "5TtoF9CDu3tp2LwbeD1BMFFGn8NhBVbkqrW1yjRjBfHCiHT8Spd87Enr941NkxRwBMG8vqUU8uHZzaMMdQy6N7Ac",
  "key42": "2YomkWGyq6FmkwDxfJct2HS1Zo4W4ibXm9guUorZWksoBZTr7PmYJ4ddRzk4VUGhLAurxg8Hv1BLeWyAC7EbGrfL",
  "key43": "2ERaR5G64Eyjz21wGE8xTFmxWaE6pm2w8erqvxCNQAhC86wFWtD9krHkmYjoEeGD4JQxtFCbYiA3c45CZzxB91fo",
  "key44": "4BZfmRYhNEZKtVZKw7YH6Rkfp23RbgqSikDQAsBQXftfnVD93RofZG89k4yJ5tK1SV1SDtgkgZrEhrJVU8bGfuHs",
  "key45": "64PmhajBnNjKGeiYv6cfnb2Gfc96CBvKdTqenqyowdbuQYvveCNhkQkoA1RXdCRnCxdZyWT5yk7bNyoCgkExPgdz",
  "key46": "5fQYTJQAj1an5gwJb1SZv8UtyPqLwLLg9uMepUSGAtyf84a6gU8pqXrgjVJxSKBh1mduyEnEjxu4GsQuLKHmPigq",
  "key47": "sGbYu77UokopNoYrRGkkfFuyxszeQqMZwABZjjWRHyNHcsphow4neJsgbSrTPhDMKxQkwZNmfQG5oq7PsKze1vy",
  "key48": "49rgccn5kJsDpvxt9GzTJhjJdDCVBmmbbNZkZZFqZsphuUNRB6nj381NiMHPUMo7Q3mJc43dgBxbgcV9eGSBmskv"
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
