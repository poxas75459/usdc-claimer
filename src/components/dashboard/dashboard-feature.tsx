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
    "24daLu7CNpTzf2RBL5CPUzAVYnzD1vRYR8Tjw9zmpKGVzau8J4BuzvaMXJX9GR3SBCK49LzS8H76qVNHpR55bj74"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q9M7VxoT26AzoGQ7McbyHmmYNXicWzNZ6BjCVL1xJMiCEaquBvt5hyNHWN6ui2Goumo4xPo7WhRBdyWdoLSSC2g",
  "key1": "512zK3w68GgACpLzcHyybAK24P1npvrHR86MADRrkWT72UCsGS6Zz8GjMbyzvEtewBK8WD4ZgaJVdrx5ZVPDZr6D",
  "key2": "TznupmEHJMWV6tJob97kRhRbHUyJdiWPiuT9kHqfaTw891Yv4sh2y1fHTF5H8ZubUiyZe3ahQV7GK7rxbsDbDcJ",
  "key3": "39hpxzgJLu28vUhznAecYpJfRZLen75kWkMyGTgDoCNGZtbzebg1DAJyXAaAvmgpSkRmTEZ9TGbqCvLTm14qkjZb",
  "key4": "3sepvMzd22DqFdsxvAfSaV888Yhs8nQd1AKjQ2DYfjxnMAxmyHTvqxT4waiKF5mjAQ6nSmoya58HDxeV844s1okV",
  "key5": "3kujwxMEhttdnJ3ErRYcwVnzYF5mjQtHVH2zcbNq5JBqRXpzAdbVrQo8GC9YwfVKjiMVciZ7bx6oWvr67uBL16AZ",
  "key6": "TkvUu4ei8ph18RXeLy4iWA3A3h7wsecExS6ioDKBDJ3qAQ9BripgkBcW6JPFrSwypNwBgxGqbYPPiGPKbMBumQD",
  "key7": "2XzvLEtxhb61MVxWAdWY3BMhBomks1YDmYEnBdKaL138zrrfsmPVyj1mnPArsJFrqRkf7rNU8wXaZ8cAH8w1isHY",
  "key8": "3ezGoPV6hD4yUbgGjgNcULchr3k6ZtDyvtdhJmZXe4AF9W2WMKkqYQsYqruUZBQvAqPRXm7a9HDmAFAdQtWYvfKi",
  "key9": "e43sZjqi8jnQc9etzCtNgnwKKCToMHVAeNNgp5ghD6t2qCJ5E65awprqrVLBEQNcBcrnFmyXRPR7nB6GccBa7cM",
  "key10": "4EmXkQxYfEeKhinSGT7PfuqSdXnpqaZdangTu3jJV97DKTgdWNLu6kbV13P71nHWB6kM6SpQbVvW9yUU3Pbzzcwp",
  "key11": "5FRJP4ptPUTo9Tr5DF25SYgiiHBXrRbFBcwqcebKcgGxqA3uKzkevXMV8XW6LtQrsDCEXmztv1RRuzuCCEFQZLDt",
  "key12": "6cvzNBU46BHZiyzvLii3VWkTui7rdLPB7JPRnyVm6Mfu6rpD7vZHf9V3FvpdfqMhqMecda1WWhuYo9iWc5jX4yP",
  "key13": "fKHbH3nhZgmyShZ7WbCPwF7hYbPRw1xJ6Mti4YWeG13EMi2pRjcx8kxVoMb8zPjcsMZ36nTNXJ7XCyTWZn7aGdt",
  "key14": "3T3YPoqDQkXBVdrdkKC98EmwFHCxbP5Fy3NwEvqbBc9T8QjDe7o73jo4cEy6ew475SHG7xX49j2RtaZf9BbkyDVz",
  "key15": "4xbjQytbkdRwcAhMGTQuNrFqDUURY1aatvGbDNWD8YuG9jJzJiFhzxLEnSJHwAL3Q1hThBgZomm3HuP2HrTG78FN",
  "key16": "ptuWjzbgLsJe4wboEcFftrUpKGbks3X12t9VtwvJBvyXmQuibiVM9j3yacm8y1AwsMNpFAp6hyDW6YAKRBqeC8m",
  "key17": "8Apons6xjd6tUFrgW7qTW7Jsj1VVKe1MYUrTKMoJ5co42NgFZScME8xfErNoLuhbyTqKEmQhZvZJe1sYYLGZv87",
  "key18": "4hQCjpEwjtd8fezW72d8D3A4ivgC5GG6t2LJ3JM8sT85NwKaopZ61NtwDvcYV6Jyte9PMHj5YEu16PLZ2N2utwwe",
  "key19": "3inXabawovTPJcNohfszWDWqKzjzJEGYyH4hUap8yZtvVxneBkx4UqhrjksUGrGCi4XKniFTBFUQa5H65M3d4iW7",
  "key20": "4k9kZaoQQrfM1Ekk72gesPn19tJtyH8LJfJsNoq2gzJKTwEEHQ8n6R8TYVCnSjzDoZAYoV2DpiWTFJSHFiHT33At",
  "key21": "3HDnSTC4yGie8btRj9cJygFX8Lct2P9UgubJnwhPA9Vw3B1GSGb8WignUp4TbWEYPU4CbiaiVfCk8M26ZSmF7cxQ",
  "key22": "66dTJmgFAdmLn8F3AgHb1RqMVSJ11qpuaf4iDMHZqx2ejku9af8xCqr2zFDcQdn37ExFEZnwDCEve5VgKGZH4jH8",
  "key23": "2cgPsxJ325KfQ9z7Td3y5mqs6yQBdesoCpiDDEz3F9ihGujxYZHVYvCf1MjanBqTaNqUEDhZ44eqToPXDPmGXKrB",
  "key24": "5j5edibZuBjxFjo2y3f63n9P8woPgWsKnsDVyUzQaXFe1BFLRqEgpCmhpVJVqKJxzRNViRKju6grA72S6pEuLNsc",
  "key25": "2yYELXJZzdG4KRtfDJx9RCXkzK8fVVJbE2gH1hmTF5mAHde2xw7xktcWabB3zTMeibSiHhJybve8o9nw4DgXo7hp",
  "key26": "37FRZywnepJiuZ4RxDX1Y6zZJNiRk29HgMqtNJ7zk9QtpB2EzkQGWdqiTjUaAxxqaMr6qbsqSfm8qSjEUgU54ZZ1",
  "key27": "2TT479771XRCoBJAHpCLvRV61SKmfg25Ja2mb8KKWoS8LCZ5CuZdwYN4LbUxiii8EvhvRDEkVvtSVbPkiwvpCCht",
  "key28": "3QW1f7JQjR6FjCbJcAcm1ARXuociPDW1Duqp2QvM4EJb62Ca5bpct9d9MuG2eY6quBcnQvBo8SKNBm1vqHjyB4bL",
  "key29": "QcS8sbvc1iQomEauvxjZ7kfniM2YfswkLrNjthW4zuZjCudEn2c38NFwvh4ZeRq1hSKH6exvBGp4BNjVXZiwqhY",
  "key30": "4pe3wVmvVKAvE99BxhNPeTiRaEeue7Dwtch7iMFwyJR17MVyw7D7vvaGMvBVYCmG2eEaeEUuzVJgNicFUwFzPs1i",
  "key31": "61rXmSkQkFXPRALBMiz8fK9Zf5PSmavrMPbVV6DSJ2qDukm5NfbZujc68cnnfxRybM7ZNgcSZxQ46wBUNHeDjafb",
  "key32": "QCudakmDaWPXAoNufjcMvSXAu1hKcieay8Hb8JJKKVnvof8381TkWciriQriRLDxaT3AAamChX2cxS6vVqXJ7kz",
  "key33": "4NhyLkXPPvqVKihB4UtTVVY4SAMM6kqo4Rq9tAYz48NHortZf4M6ouQKP98TQPye6fTyaEQLTWPtUxiQs3c1jbeG",
  "key34": "ufeRMkjwuBeQ8QXYEHTbu6unyopDjwYeMpcSndC4oZXfpePEy1DnVQZL3z3NRMqtjZTjgS83th2nG6R3kiAV2jG",
  "key35": "3yGPRBdJGPpDXNbN8h1qJkvaRBmWdKe5eRy8SMYR51g9HfeZTR8pjCJBsXkVhTUQPRcyqPRsdEZXiaUGAsJdcbHc",
  "key36": "4uK45UNDgGP36pYum9Ppo96TJaaEntQDkLa6VMFZhpD2653TZK56hJFZS8JeA1iPxVjvNLMnFEuacVfjQSDL6rZh",
  "key37": "WU9zccTR1F8nP9BNknFLc9RHBW87Z69J2GSMwovN1qoeA1j1WrtXLMavxx2JZdWQFmAwbFKu1JXdYhf3UmYiL89",
  "key38": "CErZErKqBXGrpVPHGEsM9HzU9LP2pRmUMRWFgBE1tTB7FBcSSqMVnnVaS6WKDKhb4h6LC6BFs51jetF48ghXEhP",
  "key39": "5G1mqb56zjBLgL3YBevy7RMv3BAXgPLLTjzSdgP9xipgbMMEEUsfECKRAVky6rosDg5mCRKYNY7Z1vKPfCLsWq4F",
  "key40": "sjoU6FXqJ1JkyPKtk25MXghbf89coF3EoxUEc1QTn1Z4bLJX6KcfXT6d1a9Q8wQmYjufq3qd9vpc9tgUABwxTH3",
  "key41": "4XEE2KNjTEcWs2jYLx5Wm5ZiDP32vRJhB6MHEUDJSSw6sV9L65qYnVYC5EDz41NEPW2kzGnQ9VLxrWTTEvdsf4zu",
  "key42": "62whvKGDmUtqy7AG9HHCTjtGrqF53EWSM1T9SGjGrSYPifAYeY5LCv5MHrRvrMjnsE4JVmc5VP7FifNrgA4zJSYX",
  "key43": "62WfBBMbbVvA13rnhUzAw16HeKY35NXRG3dqt9CfZzCsYXh7A6VuDkTyT2a6ugghshbCce52mKeZkkabahdRAc4Z",
  "key44": "39cJYpNEWZjPqzyvDAgN2FR577tXDtuhB941fnxpU6bN7VpPMCr11vfnRAaAzVborZYpPMzrbAeh7Nf1fmin9ntC"
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
